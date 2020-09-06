const todoInput=document.querySelector(".todo-input")
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")
const counter=document.querySelector(".counter")

todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deleteTodo)

let i=0
const h1=document.createElement('h1')
  h1.classList.add("number")
  h1.innerText="Number of tasks: "+i
  counter.appendChild(h1)
function addTodo(event){
  event.preventDefault()

  const todoDiv=document.createElement("div")
  todoDiv.classList.add("todo")

  const newTodo=document.createElement("li")
  newTodo.innerText=todoInput.value;
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)
  todoInput.value=""

  const completedButton=document.createElement("button")
  completedButton.innerHTML=`<i class="fas fa-check"></i>`
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton)

  const trashButton=document.createElement("button")
  trashButton.innerHTML=`<i class="fas fa-trash"></i>`
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton)

  todoList.appendChild(todoDiv)
  ++i
  h1.innerText="Number of tasks: "+i
}

function deleteTodo(event){
  const item=event.target
  if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement
    todo.classList.add("deleted")
    todo.remove();
    --i
    h1.innerText="Number of tasks: "+i
  }
  if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement
    todo.classList.add("completed")
  }
}
  

