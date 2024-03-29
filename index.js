
'use strict';



function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}

function removeItem(){
	var ul = document.getElementById("shopping-list");
  var shopping-item = document.getElementById("shopping-item");
  var item = document.getElementById(shopping-item.value);
  ul.removeChild(item);
}

function addItem(){
    var ul = document.getElementById("shopping-list");
    var shopping-item = document.getElementById("shopping-item");
    var li = document.createElement("li");
    li.setAttribute('id',shopping-item);
    li.appendChild(document.createTextNode(shopping-item.value));
    ul.appendChild(li);
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}



function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}




function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  removeItem();
  addItem();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);
