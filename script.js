const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const label = document.getElementById('label');


function addTask(){
    if (inputBox.value === ''){
        label.textContent = 'Впишите заметку!';
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
        SaveData();
    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData()
    }
},false);

let RefreshPage = function(){
    window.localStorage.clear();
    window.location.reload();
}

let SaveData = function(){
    localStorage.setItem("data", listContainer.innerHTML);
}

let Show = function(){
    listContainer.innerHTML = localStorage.getItem("data");
}

Show();



