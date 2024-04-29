
const addInput = document.getElementById('additem');
const divListItems = document.getElementById('list-items');
const searchInput = document.getElementById('searchinput');
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

//to-do functionalities
function handleAddItem(){
    const content = addInput.value;
    if (content === ""){
        alert('Adicione um item primeiro!');
        return
    }
    items.push(content.toLowerCase());

    addInput.value = "";
    saveItemsInLocalStorage();
    loadItemsFromLocalStorage();
}



function handleRemoveItem( item ){
    items.pop(item);

    saveItemsInLocalStorage();
    loadItemsFromLocalStorage();
}

function handleSearchItem(){
    const searchValue = searchInput.value;
    if (searchValue){
        items = items.filter( (item) => item.includes(searchValue)).map(item => item);
        showItems();
    }
}

searchInput.addEventListener('keypress', handleSearchItem);
searchInput.addEventListener('keydown', loadItemsFromLocalStorage);

//localStorage
function saveItemsInLocalStorage(){
    const stringedItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringedItems);
}

function loadItemsFromLocalStorage(){
    const storage = localStorage.getItem("items");
    if (storage){
        items = JSON.parse(storage); 
        showItems();
    }
    
    if (items.length === 0){
        const emptyListText = document.createElement('p');
        emptyListText.textContent = "Sua lista esta vazia :(";
        divListItems.appendChild(emptyListText);
    }
}

document.addEventListener("DOMContentLoaded", loadItemsFromLocalStorage)

