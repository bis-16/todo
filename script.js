'use strict'
document.addEventListener('DOMContentLoaded',()=> {


let parentToDoForm = document.querySelector('.tasks'),
            btnAdd = document.querySelector("#btn__add"),
             input = document.querySelector("#input1");

//console.log(parentToDoForm)
//console.log(1);

let tasks = []

class Task {
    constructor (value) {
        this.value = input.value
        this.checked = false
        this.favorite = false
    }
    render(value) {
        parentToDoForm.innerHTML += `
        <div class="div__checkbox">
            <div class="div__checkbox__1">
                <input type="checkbox" class="checkbox" >
                ${this.value}
            </div>
            <div class="div__checkbox__2">
                <input type="checkbox" class="favorite">
                <button class="btn__remove">X</button>
            </div>
        </div>

       `
    }
    remover(){

    }
}

function drawAllTasks(taskValue=0) {
    console.log('tasks=',tasks)
    parentToDoForm.innerHTML = ""
    tasks.forEach(item => item.render() )
}

function checkedTask() {
    let btnChk = document.querySelectorAll(".checkbox")
    //console.log('chk1');
    btnChk.forEach((item, id) => {
        //console.log('chk2');
        item.addEventListener('click',(event)=>{
            //console.log('chk3');
            //event.preventDefault();
            //let target = event.target
            //console.log('item=',item);
            console.log('item.parentNode=',item.parentNode.parentNode)
            item.parentNode.parentNode.classList.toggle("checked")
        })
    })

}

function removeTask() {
    //console.log('remove1');
    let btnRemove = document.querySelectorAll(".btn__remove")
    btnRemove.forEach((item,id) => {
        //console.log('remove2');
        //console.log('item2=',item);
        item.addEventListener('click',(event) => {
            event.preventDefault();
            //console.log('event3=',event)
            //console.log('remove3');
            //console.log('parentToDoForm=',parentToDoForm);
            //console.log('event=',event);
            //console.log('item=',item);
            //console.log('item.parentNode=',item.parentNode.parentNode.remove());
            item.parentNode.parentNode.remove()
            //console.log('id',id);
            tasks.splice(id,1);
            //item.remove();
         });

    })
}



btnAdd.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('parentToDoForm=',parentToDoForm);
    let newTask = new Task(input.value)
    tasks.push(newTask)


    //newTask.render(input.value)
    drawAllTasks()
    checkedTask()
    removeTask();
});










})