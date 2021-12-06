'use strict'
document.addEventListener('DOMContentLoaded',()=> {



    let         btnAdd = document.querySelector("#btn__add"),
                 input = document.querySelector("#input1"),
             tasksForm = document.querySelector(".tasks")

    //console.log(parentToDoForm)
    //console.log(1);

    let tasks = []

    class Task {
        constructor (value) {
            this.value = input.value
            this.checked = false
            this.favorite = false
        }
        render() {
            let checked = "", favChecked = "", favorite = ""

            if (this.checked === true) checked = "checked"
            if (this.favorite === true) {
                favChecked = "checked"
                favorite = "favorite"
            }

            console.log("this=",this)

            tasksForm.innerHTML += `
            <div class="div__checkbox ${checked} ${favorite}">
                <div class="div__checkbox__1">
                    <input type="checkbox" class="checkbox" ${checked}>
                    ${this.value}
                </div>
                <div class="div__checkbox__2">
                    <input type="checkbox" class="favoriteClass" ${favChecked}>
                    <button class="btn__remove">X</button>
                </div>
            </div>
    
           `
        }
        remover() {

        }
    }

    function drawAllTasks(taskValue= 0) {
        console.log('tasks=',tasks)
        tasksForm.innerHTML = ""
        tasks.forEach((item, id) => {
            item.render()//.bind(item)
        })

        checkedTask()
        removeTask();
    }


    // let checkVerification = (selector) => {
    //
    // }

    function checkedTask() {
        let btnChk = document.querySelectorAll(".checkbox")
        let btnFav = document.querySelectorAll(".favoriteClass")
        btnChk.forEach((item, id) => {
            item.addEventListener('click',(event)=>{
                item.parentNode.parentNode.classList.toggle("checked")
                tasks[id].checked = !tasks[id].checked;
            })
        })
        btnFav.forEach((item, id) => {
            item.addEventListener('click',(event)=>{
                item.parentNode.parentNode.classList.toggle("favorite")
                tasks[id].favorite = !tasks[id].favorite;
            })
        })
    }

    function removeTask() {
        let btnRemove = document.querySelectorAll(".btn__remove")
        btnRemove.forEach((item,id) => {
            item.addEventListener('click',(event) => {
                event.preventDefault();
                tasks.splice(id,1);
                drawAllTasks()
             });
        })
    }



    btnAdd.addEventListener('click',(event) => {
        event.preventDefault();
        let buttonForm = document.querySelector(".buttons")
        let errElem = document.createElement('div').textContent = "error"

        if (input.value !== "") {
            let newTask = new Task(input.value)
            tasks.push(newTask)
            drawAllTasks()
        }
        // else {
        //
        //     console.log(buttonForm);
        //     console.log(errElem);
        //     buttonForm.after(errElem)
        //     //buttonForm.appendChild("фыва")
        //     console.error("er")
        //
        // }

        //
        // checkedTask()
        // checkedFav()
        // removeTask();
    });

})