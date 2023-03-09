const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "Please enter all the fields!";
        emailInput.style.borderColor = 'red';
        nameInput.style.borderColor = 'red';
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Name: ${nameInput.value}, Email: ${emailInput.value}`))
        userList.appendChild(li);
    
        //clear fields
        nameInput.value = '';
        emailInput.value = '';
        msg.innerHTML = '';
        emailInput.style.borderColor = '';
        nameInput.style.borderColor = '';
    }
}