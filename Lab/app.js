let task = document.getElementById('item');
let items =  document.getElementById('items');
let button = document.getElementById('Add');

button.addEventListener('click',function(){
   let li = document.createElement('p');
        li.innerHTML = task.value;
   items.appendChild(li);
   task.value ='';
})


