
let items = ['Arrumar a casa', 'BVuyrrraaaaa'];

const addInput = document.getElementById('additem');
const divListItems = document.getElementById('list-items');


function showItems(){

    divListItems.textContent = null;

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
    showItems();
}

function handleRemoveItem( item ){
    items.pop(item);
    showItems();
}

showItems();