var ajax = new XMLHttpRequest;
var isNew = false;

window.onload = function () {
    document.getElementById("add").onclick = newTask;
}

function newTask() {
    if (isNew === false) {

        var taskName = document.createElement("input"),
            taskDesc = document.createElement("textarea"),
            taskDue = document.createElement("input"),
            complete = document.createElement("input");

        taskName.setAttribute("type", "text");
        taskName.setAttribute("value", "Task Name");
        taskName.setAttribute("name", "taskname");
        taskName.setAttribute("id", "taskname");

        taskDesc.setAttribute("name", "taskdescription");
        taskDesc.setAttribute("id", "taskdesc");

        taskDue.setAttribute("type", "datetime-local");
        taskDue.setAttribute("name", "duedate");
        taskDue.setAttribute("id", "taskdue");

        complete.setAttribute("type", "checkbox");
        complete.setAttribute("id", "status");

        document.getElementById("newitem").appendChild(taskName);
        document.getElementById("newitem").appendChild(taskDesc);
        document.getElementById("newitem").appendChild(taskDue);

        isNew = !isNew;
    } else {
        createTask();
    }

}

function createTask() {
    var newname = $("#taskname").val(),
        descrip = $("#taskdesc").val(),
        due = $("#taskdue").val(),
        currstatus = $("#status:selected").val();

    var task {
        name: newname;
        description: descrip;
        duedate: due;
        status: currstatus
    }
    $("#newitem").empty();
    display(task);
}

function display(task) {

}
