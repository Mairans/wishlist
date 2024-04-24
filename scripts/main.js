import { add, ul, task, box, cancel, valueText } from './helpers.js'
import { list, loadStorage, saveToStorage } from './localStorage.js'
import { displayNone, displayBlock } from './helpers.js';

loadStorage()
renderList()

box.addEventListener('click', displayNone)
add.addEventListener('click', addList)
cancel.addEventListener('click', displayBlock)

function renderList() {
    let result = '';
    loadStorage()
    list.forEach(obj => {
        const { text } = obj;
        const html = `<li>
        <input type="radio" class="radio">
        <label> ${text}</label>
    </li>`
        result += html;
    })

    ul.innerHTML = result;

    const radio = document.querySelectorAll('.radio');
    radio.forEach((deleteBtn, i) => {
        deleteBtn.addEventListener('click', function () {
            if (this.checked) {
                setTimeout(function () {
                    list.splice(i, 1);
                    saveToStorage()
                    renderList()
                }, 200)
            }
        })
    })
}

function addList() {
    list.push({
        text: valueText.value,
    })

    valueText.value = '';
    saveToStorage();
    renderList();
    displayBlock();
}
