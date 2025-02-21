const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        let sound = document.getElementById("fxError");
        sound.volume = 0.3;
        sound.play();
        alert('Even doing nothing should be described in your to-do list, right? Now, add something so we can get things done!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let sound = document.getElementById("fxReload");
        sound.volume = 0.3;
        sound.play();
    }
    inputBox.value = '';
    saveData();

}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        let sound = document.getElementById("fxAchievement");
        sound.volume = 0.4;
        sound.play();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        let sound = document.getElementById("fxDelete");
        sound.volume = 0.2;
        sound.play();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();