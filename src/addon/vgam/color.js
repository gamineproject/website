const keywords = ["function"];
const text = document.getElementById("myText");

function highlightKeywords() {
  const content = text.textContent;
  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    content = content.replace(
      regex,
      `<span class="${keyword}">${keyword}</span>`
    );
  });
  text.innerHTML = content;
}

highlightKeywords();
