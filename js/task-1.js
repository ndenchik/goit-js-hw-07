const nbItem = document.querySelectorAll("li.item");
console.log("Number of categories:", nbItem.length);
nbItem.forEach(elem => {
    const title = elem.querySelector("h2").textContent;
    const elements = elem.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});