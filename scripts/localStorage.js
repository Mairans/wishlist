export let list;

export function loadStorage() {
    list = JSON.parse(localStorage.getItem('list'));
    if (!list) {
        list = [{
            text: 'первая задача',
        }]
    }
}

export function saveToStorage() {
    localStorage.setItem('list', JSON.stringify(list));
}
