function TODOTasks() {
  const todoBlock = document.querySelector(".js--todos__block");
  const todoInput = document.querySelector(".js--form__input");
  this.completeTask = "js--completed";
  this.deleteTask = "js--delete";
  this.input = todoInput;
  this.todosBlock = todoBlock;
  this.addTodo = (event) => {
    event.preventDefault();
    const inputValue = this.input.value;
    this.input.value = "";
    const todoDescription = this.createTaskTemplate(inputValue);
    this.todosBlock.insertAdjacentHTML("afterbegin", todoDescription);

    document.querySelectorAll(`.${this.completeTask}`).forEach((checkItem) => {
      checkItem.addEventListener("click", this.completeTodo);
    });
    document.querySelectorAll(`.${this.deleteTask}`).forEach((deleteItem) => {
      deleteItem.addEventListener("click", this.deleteTodo);
    });
  };
  this.completeTodo = function () {
    this.parentNode.classList.toggle("todo--desc_underline");
  };
  this.deleteTodo = function () {
    this.parentElement.remove();
  };
  this.createTaskTemplate = (desc) => {
    return `
    <label class ="todo-task">
    <input class = "${this.completeTask}" type="checkbox">
    <div class="todo-task__description">${desc}</div>
    <button class = "todo-task__delete ${this.deleteTask}"> Delete todo </div>
    </label>
    `;
  };
}
const newTask = new TODOTasks();
document.querySelector(".js--form").addEventListener("submit", newTask.addTodo);
