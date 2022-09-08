class toDoList {
    constructor(addInputControl){
        this.addInputControl = addInputControl;
    }
    addInputItems(valueInput){
        let renderToDoList = document.querySelector('.add_input_rendering');
        let date = new Date();
        let addString = `<div class="delete_and_add d-flex justify-content-between align-items-baseline">
        <input value="${valueInput}" class="list_added w-100 p-2"><button class="border-0 bg-white ms-3"><img class="delete_button_image" src="images/icons8-delete-40.png" alt=""></button><span>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</span>
      </div>`;
      renderToDoList.innerHTML += addString;
      let deleteInputControl = document.querySelectorAll('.delete_button_image');
      deleteInputControl.forEach(function(element){
        element.addEventListener('click' , function(){
            let deleteAdd = document.querySelectorAll('.delete_and_add');
            deleteAdd.forEach(function(newElement){
                newElement.addEventListener('click' , function(){
                    newElement.classList.add('delete');
                })
            });
        })
      })
    }
    clear(addInputControl){
        addInputControl.value = '';
    }
}


let addButtonImage = document.querySelector('.add_button_image');

addButtonImage.addEventListener('click' , function(){
    let addInputControl = document.querySelector('.add_input_control');

    let valueInput = addInputControl.value;
    listItems = new toDoList(addInputControl);
    if (addInputControl.value === '') {
        alert("Can't be Put Blank");
    }
    else{
        listItems.addInputItems(valueInput);
    }
    listItems.clear(addInputControl);
});
