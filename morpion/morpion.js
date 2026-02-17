let gameState = [0,0,0,0,0,0,0,0,0]
let currentPlayer = 1

for (let i=0; i<9; i++) {
  let cell = document.querySelector(`#cell-${i}`)
  cell.addEventListener("click", () => {
    cell.style.backgroundColor= 'red'
    cell.innerText = i
  })
}