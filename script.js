const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-contrainer");

function addTask(){
  if (inputBox.value === ""){
    alert('You must write something');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
