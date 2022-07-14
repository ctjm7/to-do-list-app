function newItem(){

// adding a new item to the list of items
  let li = $('<li></li>');
  let list = $('#list');
  let inputValue = $('#input').val();
  li.append(inputValue);

   if (inputValue === '') {
     alert('You must write something!');
   } else {
     list.append(li);
   }

 // crossing out an item from the list of items
  function crossOut() {
 	  li.toggleClass('strike');
 	}

  li.on('dblclick',crossOut);

 // adding the delete button "X"
  let deleteButton = $('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

// deleting an item
  deleteButton.on('click', deleteItem);

   function deleteItem(){
 		li.addClass('delete');
 	}

  // reordering the items
   list.sortable();

}
