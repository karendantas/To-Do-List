
let items = ['Arrumar a casa', 'BVuyrrraaaaa'];

const addInput = document.getElementById('additem');
const divListItems = document.getElementById('list-items');

function addItem(){
    const content = addInput.value;
    items.push(content);
    showItems();
}

function showItems(){

    divListItems.textContent = null;

    items.forEach( (item) => {

        const div = document.createElement('div');
        const text = document.createElement('p');
        const button = document.createElement('button');
        
        text.textContent = item;
        button.textContent = 'x';

        div.classList.add('item');
        div.appendChild(text);
        div.appendChild(button);

        divListItems.appendChild(div);

    })
}

showItems();