import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');


const formData = {};

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);

textareaEl.addEventListener('input', throttle(onTextareaInput, 500));


formEl.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
})

populateTextarea();


function onFormSubmit(e) {
    e.preventDefault();

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);

}


function onTextareaInput(e) {
    const message = e.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}



function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   

    if (savedMessage) {
        textareaEl.value = savedMessage;
       
    }
}



