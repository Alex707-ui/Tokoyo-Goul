let addTask = document.querySelector('.add-task');
let todoList = document.querySelector('.todo-list');

addTask.onclick = function(event) {
	let newTask = prompt('Чё за задача?', 'Любая задача');

	if(!newTask) {
		alert('Вы ничего не ввели');
		return;
	}

	let listItem = document.createElement('li');
	listItem.className = "list-item";
	listItem.innerText = newTask;
	

	let deleteButton = document.createElement('button');
	deleteButton.className = "delete-task";
	deleteButton.innerText = 'Удалить задачу';
	
	deleteButton.onclick = function() {
		this.parentElement.remove();
	}

	listItem.append(deleteButton);
	tos.append(listItem);


	
}






// бесноватый ребенок