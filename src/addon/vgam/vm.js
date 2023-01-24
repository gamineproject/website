const vm = {
  terminal: ".terminal",
  maxLines: 30,
  lineid: 0,
  addLine: (text) => {
    const terminal = document.querySelector(vm.terminal);
    const myText = document.createElement("div");
    vm.lineid++;
    myText.id = "Line" + vm.lineid;
    myText.textContent = text;
    terminal.appendChild(myText);

    // If the number of lines exceeds the threshold, remove the oldest line
    if (vm.lineid > vm.maxLines) {
      const oldestLine = document.getElementById(
        "Line" + (vm.lineid - vm.maxLines)
      );
      oldestLine.parentNode.removeChild(oldestLine);
    }
  },
  clear: () => {
    const terminal0 = document.querySelector(vm.terminal);
    terminal0.innerHTML = "";
    vm.lineid = 0;
  },
};

export default vm;
