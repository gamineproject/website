export default async function init() {
  const [gvm, vm] = await Promise.all([
    import("./addon/vgam/gvm.js"),
    import("./addon/vgam/vm.js"),
  ]);

  const runButton = document.querySelector(".run");
  runButton.addEventListener("click", () => {
    vm.default.clear();
    gvm.default.run(document.querySelector("#example1").innerText);
  });
}
