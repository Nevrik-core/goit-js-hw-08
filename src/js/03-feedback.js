import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const emailArea = document.querySelector('.feedback-form input');


const formData = {};

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);



formEl.addEventListener('input',throttle(saveData, 500));

function saveData(e) {

    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
populateEmailArea();
populateTextarea();



function onFormSubmit(e) {
    e.preventDefault();

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);

}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   

    if (JSON.parse(savedMessage).message) {
        textareaEl.value = JSON.stringify(savedMessage).message;
       
    }
}

function populateEmailArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   

    if (JSON.parse(savedMessage).email) {
        emailArea.value = JSON.parse(savedMessage).email;
        
       
    }
}


