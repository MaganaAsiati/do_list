import './style.css';
import { addTask, removeTask, updateTask } from './modules/crud.js';
import { loadStorage } from './modules/storage.js';

// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js'; // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular.js'; // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands.js'; // https://fontawesome.com/icons?d=gallery&s=brands&m=free

const container = document.getElementById('ctn-task-list');
const descInput = document.getElementById('input-txt');
const enterButton = document.getElementById('ctn-icon-arrow');

const orderTasks = (listTask) => listTask.sort((a, b) => a.index - b.index);

const populateHtml = (tasks) => {
  container.innerHTML = '';
  tasks.forEach((element) => {
    const li = document.createElement('li');
    const fDiv = document.createElement('div');
    const sDiv = document.createElement('div');
    const fIpt = document.createElement('input');
    const sIpt = document.createElement('input');
    const oDiv = document.createElement('div');
    const dDiv = document.createElement('div');
    const iconOpt = document.createElement('i');
    const iconDel = document.createElement('i');
    const iDiv = document.createElement('div');
    const icon = document.createElement('i');
    const line = document.createElement('div');

    fDiv.className = 'ctn-task';
    sDiv.className = 'ctn-left';
    fIpt.className = 'checkbox';
    sIpt.className = 'description';
    iDiv.className = 'ctn-icon';
    iconOpt.className = 'fa-solid fa-ellipsis-vertical';
    iconDel.className = 'fa-solid fa-trash-can';
    line.className = 'line';

    fIpt.setAttribute('type', 'checkbox');

    sIpt.setAttribute('type', 'text');
    dDiv.style.display = 'none';
    sIpt.value = element.description;
    sIpt.readOnly = true;

    sDiv.appendChild(fIpt);
    sDiv.appendChild(sIpt);
    iDiv.appendChild(icon);
    fDiv.appendChild(sDiv);
    fDiv.appendChild(iDiv);
    li.appendChild(fDiv);
    li.appendChild(line);
    container.appendChild(li);
  });
};

window.addEventListener('load', () => {
  populateHtml(orderTasks(taskList));
});
