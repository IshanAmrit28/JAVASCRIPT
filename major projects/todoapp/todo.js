let todoList=[
  {item:'Buy Milk' ,
  dueDate:"20/6/25"},
  {item:"do to college",
  dueDate:"21/6/25"},

];
displayItems();

function addTodo(){
  let inputElement=document.querySelector('#todoInput');
  let dateElement=document.querySelector('#todoDate');
  let todoItem=inputElement.value;
  let todoDATE=dateElement.value;
  todoList.push({item: todoItem,dueDate:todoDATE});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todoContainer');
  
  let newHtml='';
  

  for(let i=0;i<todoList.length;i++){
     
     let {item,dueDate}=todoList[i]
    newHtml+=`
    
    <span>${item}
    </span>
    <span>${dueDate}
    </span>
    <button class="buttonDelete" onClick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    
    `;

  }

  containerElement.innerHTML=newHtml;
  
}