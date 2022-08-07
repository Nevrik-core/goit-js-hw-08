import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const emailArea = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputChange, 500));





// populateEmailArea();
populateTextarea();

function onInputChange(e) {

    formData[e.target.name] = e.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}




function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}


function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
    // console.log(savedMessage.message);
    if (savedMessage) {
        for (const el in savedMessage) {
            if (savedMessage.hasOwnProperty(el)) {
                textareaEl.value = savedMessage.message || '';
                emailArea.value = savedMessage.email || '';
            }
        }
        
       
    }
}
