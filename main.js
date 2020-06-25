const input = document.querySelector('input');
const fruitList = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const searchFruit = (e) => {
    const inputValue = e.target.value.toLowerCase();
    let tasks = [...fruitList];
    tasks = tasks.filter(fruit => fruit.textContent.toLowerCase().includes(inputValue))
    ul.textContent = "";
    tasks.forEach(fruit => ul.appendChild(fruit));
}

input.addEventListener('input', searchFruit)