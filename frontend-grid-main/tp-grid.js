document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}

const add_btn = document.getElementById("btn-add-line")
const grid = document.getElementById("grid")

add_btn.addEventListener("click", () => {
  for (let i=0; i<10; i++){
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);
  }
})

grid.addEventListener("click", (evt) => {
  let elmt = evt.target;
  if(elmt !== grid){
    elmt.style.backgroundColor = "lightgreen";
  }
})