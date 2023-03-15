var input=document.getElementById('text1');
let plusicon=document.getElementById('plusicon');
let inputcontainer=document.getElementById("input-container");
let displaylist=document.getElementById("display-list");
let taskcounter=document.getElementById("task-counter");
let todolistshow=document.getElementById("todolist-shows")
let taskcompleted=document.getElementById("taskcompleted");

taskcompleted.addEventListener('click',showtask);
todolistshow.addEventListener('click',eventhandler);
var tasks=[];// this array in which all list of objects will add it.


// function fetchtodo()
// {
//    fetch("https://jsonplaceholder.typicode.com/todos")
//    .then((data)=>{
//       return data.json();
//    })
//    .then((data)=>{
//       tasks=data.slice(0,10);
//       renderList();

//    })

// }
// fetchtodo();


//this funtion help if we click clear complete then it will remove completed task and if user want to click all task by one click this function
//will do as well.
function showtask(event)
{
   if(event.target.id=="clearcompleted-info")
   {

      const clear=tasks.filter((task)=>{
         
      return task.completed!==true;
      
   })
  tasks=clear;
  renderList();
  return; 
}

else if(event.target.id=="completedtask-info")
{
   const complete=tasks.map((task)=>{
      return task.completed=true;
   })
   renderList();
   

}
}

// This function delete the task by id.
function deletetask(taskid)
{
   

 const newdeletetask=tasks.filter((task)=>{
      return task.id !== Number (taskid);
   })

   tasks=newdeletetask;
   renderList();
   alert("Task has been deleted");
}

// this function handlle toogle and delete part by click them.
function eventhandler(event)
{
   

   if(event.target.className=="largerCheckbox")
   {
      toggle(event.target.id);
      return;
   }
   else if(event.target.className=="fa-sharp fa-regular fa-circle-xmark")
   {
      console.log("heloo");
      
    
      deletetask(event.target.id);
      return;

   }
}
function show()
{

plusicon.style.display="block";

}

// this function add task into DOM.
function addtodom(task){
   const li=document.createElement('li')
   li.innerHTML=`<input type="checkbox" id="${task.id}" ${task.completed ?'checked':''} class="largerCheckbox">
                         <label for="${task.id}" class="textcut">${task.title} </label>
                         <i class="fa-sharp fa-regular fa-circle-xmark" id=${task.id}></i>`
   displaylist.append(li);


}
//this fucntion hadnle toggle part
function toggle(taskId)
{

   const newtask=tasks.filter(function(task)
      {
return task.id=== Number(taskId);
      })

      if(newtask.length>0)
      {
         const currenttask=newtask[0];
         currenttask.completed=!currenttask.completed;
         renderList();
         alert("Toggles sucessfully ");
         return;
      }
    




}
// This function show list everytme when task add, delete or updated.
function renderList()
{

   displaylist.innerHTML="";
   for(let i=0;i<tasks.length;i++)
   {
    addtodom(tasks[i]);
   }
taskcounter.innerText=tasks.length;
}
function addTask(task)
{

if(task)
{
   tasks.push(task);
   renderList();
   alert("Task has been added");
   return;
}
alert("Task is not added");

}

//this event can help to add todo list by click image button

plusicon.addEventListener('click',taskhandler);


function taskhandler(event)
{

if(event.target.tagName=='I')
{

const text=input.value;
if(!text)
{
   alert("please enter the value");
   return;
}
const task={
   title:text,
   id:Date.now(),
   completed:false
};

input.value="";
plusicon.style.display="none";

addTask(task);
}


}






