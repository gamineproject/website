import vm from "./vm.js";
import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { generate } from "escodegen";
// Wrap console in a proxy object
const consoleProxy = new Proxy(console, {
  get: (target, property, receiver) => {
    if (["log", "warn", "error"].includes(property)) {
      return (...args) => {
        // Call the corresponding function in the VM module
        vm.addLine(args.join(" "));
      };
    } else {
      // Pass through all other properties to the original console object
      return Reflect.get(target, property, receiver);
    }
  },
  set: (target, property, value, receiver) => {
    if (property === "clear") {
      // Intercept calls to console.clear() and redirect them to vm.clear()
      return () => {
        vm.clear();
      };
    } else {
      // Pass through all other properties to the original console object
      return Reflect.set(target, property, value, receiver);
    }
  },
});

// Parse the code and modify console calls to use the console proxy
const parseAndModify = (code) => {
  let syntaxError;
  try {
    const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: "module" });
    walk.simple(ast, {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "console"
        ) {
          node.callee.object = {
            type: "Identifier",
            name: "consoleProxy",
          };
        }
      },
    });
    return generate(ast);
  } catch (err) {
    syntaxError = err;
  }

  return {
    syntaxError,
    code,
  };
};

const gvm = {
  run: (code) => {
    const modifiedCode = parseAndModify(code);

    // Check for syntax errors
    let syntaxError;
    try {
      acorn.parse(modifiedCode, { ecmaVersion: 2020, sourceType: "module" });
    } catch (err) {
      syntaxError = err;
    }

    // Evaluate the modified code
    if (syntaxError) {
      vm.addLine(syntaxError.message);
    } else {
      try {
        eval(modifiedCode);
      } catch (err) {
        vm.addLine(err.message);
      }
    }
  },
};

vm.clear();

export default gvm;
