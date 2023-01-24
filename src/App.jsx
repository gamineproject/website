import NF from "./comp/404/404.jsx";
import "./App.css";
import Nav from "./comp/nav/nav.jsx";
import React, { useEffect } from "react";
import init from "./init.js";
function Home() {
  useEffect(() => init, []);
  return (
    <div className="App">
      <Nav />
      <div className="App-Page">
        <div className="App-JavaScript">
          <div id="headtext">
            Gamine is a runtime that focuses on functionality, not the speed.
          </div>
          <div id="example0" className="window">
            <div contentEditable id="example1" spellCheck={false}></div>
            <div className="terminal" id="example2">
              <div className="terminal"></div>
            </div>
            <div className="run">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
                className="runsvg"
              >
                <path d="M56.379,30.904c1.774,1.103,2.833,3.008,2.833,5.096s-1.059,3.993-2.832,5.096L22.167,62.362 C21.2,62.964,20.101,63.266,19,63.266c-1.004,0-2.008-0.25-2.915-0.755C14.183,61.454,13,59.444,13,57.267V14.733 c0-2.177,1.183-4.187,3.085-5.245c1.903-1.057,4.234-1,6.083,0.149L56.379,30.904z" />
              </svg>
            </div>
          </div>
        </div>
        <p id="grid-qa">Q&A:</p>
        <div className="grid">
          <div className="w-0">
            <div className="ti-0">What JavaScript engine?</div>
            <br />
            <div className="t-0">
              Gamine is built on top of Duktape allowing to do JavaScript.
            </div>
            <img
              src="/src/img/duktape.svg"
              className="img"
              title="duktape"
            ></img>
          </div>
          <div className="w-0">
            <div className="ti-0">What are it's benefits?</div>
            <br />
            <div className="t-0">
              Gamine allows to:
              <div id="grid-features-1">
                <li>
                  Have seperate console windows from the <code>console</code>{" "}
                  object
                </li>
                <li>
                  Have seperate console windows from the <code>console</code>{" "}
                  object
                </li>
                <li>
                  Have seperate console windows from the <code>console</code>{" "}
                  object
                </li>
              </div>
            </div>
            <img src="/src/img/like.svg" className="img" title="like"></img>
          </div>
          <div className="w-0">
            <div className="ti-0">What language was Gamine written</div>
            <br />
            <div className="t-0">
              Gamine is made in 100% C++ code, so that you could enjoy node.js
              vibes.
            </div>
            <img src="/src/img/cpp.svg" className="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  if (window.location.pathname === "/") {
    return <Home />;
  } else {
    return <NF />;
  }
}

export default App;
