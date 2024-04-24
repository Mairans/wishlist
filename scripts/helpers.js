export const add = document.querySelector('.add');
export const ul = document.querySelector('ul');
export const task = document.querySelector('.task');
export const box = document.querySelector('.box');
export const cancel = document.querySelector('.cancel');
export const valueText = document.getElementById('text');

export function displayNone() {
    task.style.display = 'flex';
}

export function displayBlock() {
    task.style.display = 'none';
}