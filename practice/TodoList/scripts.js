console.log("hello");
const addButton = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  span.style.cursor = "pointer";

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delbutton = document.createElement("button");
  delbutton.textContent = "Finished";
  delbutton.classList.add("delete");

  delbutton.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(delbutton);
  list.appendChild(li);

  input.value = "";
  input.focus();
}
