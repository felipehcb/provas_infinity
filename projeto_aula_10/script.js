function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}