
//selectors
const todoInput = document.querySelector('.todo_input'),
        todoBtn = document.querySelector('.todo_btn'),
        todoList = document.querySelector('.todo_list');

//event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click',checkDel);

//functions

function addTodo(e){
    e.preventDefault();
    //버튼부분이 이미 가지고 있는 서밋기능을 마비시킴
    

    //Todo div- 새로운 디브 생성 그 이름은 투두
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li - li가 생성되고 클래스명은 투두아이템 디브안에 넣어줌
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    //check button
    const checkedBtn = document.createElement('button');
    checkedBtn.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    checkedBtn.classList.add('checked_btn');
    todoDiv.appendChild(checkedBtn);


   //delete button
   const delBtn = document.createElement('button');
   delBtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
   delBtn.classList.add('del_btn');
   todoDiv.appendChild(delBtn);

   //todo  append todo div
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = '';


}; 
function checkDel(e){
    const item = e.target;

    //delete todoBtn
    if(item.classList[0] === 'del_btn') {
       const todo = item.parentElement;

       //animation
       todo.classList.add('fall');

       //remove
       todo.addEventListener('transitionend', function(){
        todo.remove();
       });
        
    };

    //checked

    if(item.classList[0] === 'checked_btn') {
        const todo = item.parentElement;
         todo.classList.toggle('completed');
     };
};