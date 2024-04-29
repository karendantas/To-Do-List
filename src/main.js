
const addInput = document.getElementById('additem');
const divListItems = document.getElementById('list-items');
const storageKey = "items";

let items = [];

function showItems(){

    divListItems.innerHTML = null;

    items.forEach( (item) => {

        const div = document.createElement('div');
        const text = document.createElement('p');
        const button = document.createElement('button');
        
        text.textContent = item;

        button.textContent = 'x';
        button.onclick = () => handleRemoveItem(item);

        div.classList.add('item');
        div.appendChild(text);
        div.appendChild(button);

        divListItems.appendChild(div);

    })
}

function handleAddItem(){
    const content = addInput.value;
    items.push(content);

    saveItemsInLocalStorage();
    showItems();
}

function handleRemoveItem( item ){
    items.pop(item);

    saveItemsInLocalStorage();
    showItems();
}

function saveItemsInLocalStorage(){
    const stringedItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringedItems);

}

function loadItemsFromLocalStorage(){
    const storage = localStorage.getItem("items");
    if (storage){
        return items = JSON.parse(storage); 
    }

    showItems();

}

document.addEventListener("DOMContentLoaded", loadItemsFromLocalStorage)

