function changeColor(color) {
    document.body.style.backgroundColor = color;
}

const tn = document.getElementById('task_name');
const tt = document.getElementById('task_time');
const td = document.getElementById('task_desc');

var task_list ={
    task_name:[],
    time: [],
    desc: []
};


document.getElementById('add').addEventListener(('click'),function(){
    if(tn.value != '' && (td.value != '' || tt.value!=''))
    {
        task_list.task_name.push(tn.value);
        task_list.time.push(tt.value?parseInt(tt.value):'--');
        task_list.desc.push(td.value?td.value:'---');
        console.log(task_list);
        localStorage.setItem('task',JSON.stringify(task_list));
        console.log(tn.value +" Added Successfully..");
        // alert("List "+tn.value+" Added Successfully..");
        document.getElementsByClassName('container')[0].style.display="none";
        document.getElementsByClassName('containerlist')[0].style.display="block";
        get();
    }
    else{
        console.error("Fields Required..");
        alert("Fields Required...")
    }
});

function get(){
    var value = localStorage.getItem('task');
    var taskList = JSON.parse(value);
    console.log("Retrieved value : ", taskList);
    console.log("Task Names : ", taskList.task_name);
    console.log("Times : ", taskList.time);
    console.log("Descriptions : ", taskList.desc);
    var text = document.getElementById('dyta');
    if(taskList.task_name.length == 0){
        alert("No List Found..");
        // var noTaskMessage = document.createElement("p");
        // noTaskMessage.textContent = "No tasks available.";
        // noTaskMessage.setAttribute("id","notaskmessage");
        // text.appendChild(noTaskMessage);
    }
    else{
       
    }
   
    for (let i = 0; i < taskList.task_name.length; i++) {
        var area = document.createElement("textarea");
        area.setAttribute("style", "width: 100vh; height: 20vh;");
        area.setAttribute("id", "textarea" + (i + 1));
        text.appendChild(area);

        var deleteButton = document.createElement('button');
        deleteButton.setAttribute("id", "deleteButton" + (i + 1));
        deleteButton.setAttribute("style", "width: 4vh; height: 4vh; position: relative;left:4vh; bottom: 15vh;");
        deleteButton.onclick = function () {
            deleteFunction(i + 1);
        };
        text.appendChild(deleteButton);

        var deleteImage = document.createElement('img');
        deleteImage.setAttribute("src", "./cross.png");
        deleteImage.setAttribute("id", "deleteImage" + (i + 1));
        deleteImage.setAttribute("style", "width: 3vh; height: 3vh; position: relative; right: 3px;");
        deleteButton.appendChild(deleteImage);

        var editButton = document.createElement('button');
        editButton.setAttribute("id", "editButton" + (i + 1));
        editButton.setAttribute("style", "width: 4vh; height: 4vh;position:relative;bottom:10vh");
        editButton.onclick = function () {
            editFunction(i + 1); 
        };
        text.appendChild(editButton);

        var editImage = document.createElement('img');
        editImage.setAttribute("src", "./edit.png"); 
        editImage.setAttribute("id", "editImage" + (i + 1));
        editImage.setAttribute("style", "width: 3vh; height: 3vh;position:relative; right:3px;");
        editButton.appendChild(editImage);
    }
 getfrom(taskList);
}


function deleteFunction(index) {
    // Logic to delete the textarea at the specified index
    task_list.task_name.splice(index - 1, 1);
    task_list.time.splice(index - 1, 1);
    task_list.desc.splice(index - 1, 1);
    // document.removeChild('textarea'+(index-1));
    // console.log("inside button splice");

      // Remove the textarea from the DOM
      var textareaToRemove = document.getElementById("textarea" + index);
      textareaToRemove.parentNode.removeChild(textareaToRemove);
  
      // Remove the delete button from the DOM
      var deleteButtonToRemove = document.getElementById("deleteButton" + index);
      deleteButtonToRemove.parentNode.removeChild(deleteButtonToRemove);
  
      // Remove the edit button from the DOM
      var editButtonToRemove = document.getElementById("editButton" + index);
      editButtonToRemove.parentNode.removeChild(editButtonToRemove);
  
    // Update the local storage and refresh the view
    localStorage.setItem('task', JSON.stringify(task_list));

    get();
}

function editFunction(index) {
    // Logic to handle editing the textarea at the specified index
    var editedTaskName = prompt("Enter the edited task name:", task_list.task_name[index - 1]);
    if (editedTaskName !== null) {
        task_list.task_name[index - 1] = editedTaskName;

        // Update the local storage and refresh the view
        localStorage.setItem('task', JSON.stringify(task_list));
        get();
    }
}

document.getElementById('reset').addEventListener(('click'),function(){
    tn.value = ''; 
    td.value = ''; 
    tt.value='';
});

document.getElementById('reset2').addEventListener(('click'), function () {
    for (var i = 1; i <= task_list.task_name.length; i++) {
        document.getElementById('textarea' + i).value = '';
    }
  
});


function getfrom(t){
    if(t!=null){
    document.getElementsByClassName('container')[0].style.display="none";
    // console.log("container hided");
    document.getElementsByClassName('containerlist')[0].style.display="block";
    // console.log("container list visible");
    for (var i = 1; i <= t.task_name.length; i++) {
        document.getElementById('textarea' + i).value = "Task Name : " + t.task_name[i - 1] + "\nTiming : " + t.time[i - 1] + "\nTask Description : " + t.desc[i - 1] ;
    }
    }
    else{
        console.log("inside getfrom");
        alert("No Task Available");
    }
}

function backhome(){
    
    document.getElementsByClassName('containerlist')[0].style.display="none";
    // console.log("container list hided");
    document.getElementsByClassName('container')[0].style.display="block";
    // console.log("container visible")
}

function home(){
    
    document.getElementsByClassName('containerlist')[0].style.display="none";
    // console.log("container list hided");
    document.getElementsByClassName('container')[0].style.display="none";
    // console.log("container visible")
}


function showlist(){
    
    document.getElementsByClassName('container')[0].style.display="none";
    // console.log("container hided");
    document.getElementsByClassName('containerlist')[0].style.display="block";
    // console.log("container list visible");
}

function edit(){
    document.getElementsByClassName('containerlist')[0].style.display="none";
    // console.log("container list hided");
    document.getElementsByClassName('container')[0].style.display="block";
    // console.log("container visible")
}