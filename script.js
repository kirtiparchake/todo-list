const input= document.querySelector("input");
const Addbtn= document.querySelector(".add");
const editbtn= document.querySelector(".edit");
const message=document.querySelector('.message');
const tasksContainer =document.querySelector('.tasks');
let taskarray= [];

editbtn.addEventListener('click', editValue)
Addbtn.addEventListener('click', addtask)
let currentEditIndex= '';
function addtask(){
      if(input.value !== ''){
              
          taskarray.push(input.value)
          displayArrayValues()
          input.value ="";
        }
}



function displayArrayValues(){
    let htmlblock = ''
    taskarray.forEach(function(value, index){
        htmlblock = htmlblock + `<div class="task">
        <div class="message">${value}</div>
 


                
                <div class="actions">
                    <img src="https://icon-library.com/images/delete-icon/delete-icon-0.jpg" alt="">
                    <img src="https://icon-library.com/images/edit-icon-free/edit-icon-free-29.jpg" alt="">
                </div>

    </div>`
    })
    tasksContainer.innerHTML = htmlblock;
}