const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const label = document.getElementById('label');
const addTask = document.getElementById('addTask');
const deleteTask = document.getElementById('refresh-page');

addTask.addEventListener("click", function(e){
    if ((inputBox.value).trim().length == 0){
        label.textContent = 'Впишите заметку!';
        inputBox.value = "" ;
    }
    else{
        label.textContent = 'ToDo List HTML/CSS/JavaScript';
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        inputBox.value = "" ;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
})


listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);


deleteTask.addEventListener("click", function(e){
    const listItems = document.querySelectorAll('#list-container li');
    inputBox.value = "";
    listItems.forEach(listItem => {
      listItem.parentNode.removeChild(listItem);
    
    });   

    window.localStorage.clear();

})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}

show();



