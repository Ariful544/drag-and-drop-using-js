const lists = document.getElementsByClassName("list");
const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    leftBox.addEventListener('drop',(e) =>{
        leftBox.appendChild(selected);
        selected = null;
    });
  });
}
