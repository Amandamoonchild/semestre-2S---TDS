index = -1;

class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList{
    constructor(teste){
        this.tasks = [];
    }
    addTask(param){
        this.tasks.push(param);
    }
}

function randomId(){
    return Math.floor(Math.random() * 9998) + 1;
}

function clearInput(){
    document.getElementById("writeBox").value = "";
}

const taskList = new TaskList();

function createTask(){
    const title = document.getElementById("writeBox").value;
    console.log(title)
    const task = new Task(randomId(),title,false);
    taskList.addTask(task);

    publishTask();
    clearInput();

}

function publishTask(){
    document.getElementById("publish").classList.remove("hidden");
    document.getElementById("publish").classList.remove("checked");

    let msg = '';

    taskList.tasks.forEach(task => {
        msg += `
        <div>
        <div class="card">
            <p>${task.title}</p>
            <div id="actionButtons">
                <button type="button" class="check" id="check-${task.id}" class="checked"><i class="fa-solid fa-check-double"></i></button>
                <button type="button" id="edit-${task.id}" "><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" id="delete-${task.id}" onclick="deleteInput()"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
        `
    });

    document.getElementById("publish").innerHTML = msg;

}

    checkedTask(param){
        let dot = this.id
        if (dot == false){
            return true
        } ef (dot == false){
            return false
        }
    }


function removeTask(){
    taskList.tasks.forEach(task =>{
        taskList.tasks.removeTask(task[index])
    })
    document.getElementById("publish").classList.add("hidden")
}

function checkInput(){
    document.getElementById("checked").classList.add("checked")

}