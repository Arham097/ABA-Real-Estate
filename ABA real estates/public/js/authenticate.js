const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const email_box = document.querySelector('.email-box');
const forgetPasswordCont = document.querySelector('.forgetpassword');
const resetPassword = document.querySelector('.main');
const txt = document.querySelector('.txt');
const cancel = document.querySelector('.forget_container i');
const email_notice = document.querySelector('.email-notice');

sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
})
sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
})
// show the reset password page
forgetPasswordCont.addEventListener('click',(e)=>{
    e.preventDefault();
    resetPassword.style.zIndex = 4;
    container.style.zIndex = -3;
    container.style.filter = 'blur(2px)';
    resetPassword.style.display = 'block';
})
// close the reset page
cancel.addEventListener('click',()=>{
    resetPassword.style.zIndex = -3;
    container.style.zIndex = 4;
    container.style.filter = 'none';
    resetPassword.style.display = 'none';
    email_box.value = "";
})
// manipulate the text outside the email field
email_box.addEventListener('input',(e)=>{
    const email = e.currentTarget.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    if(email === ''){
        txt.textContent = 'This field is required.';
        email_box.style.borderColor = 'rgb(238, 41, 41)';
    }
    else if(!isValidEmail){
        txt.textContent = 'Please enter a valid email address.';
        email_box.style.borderColor = 'rgb(238, 41, 41)';
    }
    else{
        txt.textContent = '';
        email_box.style.borderColor = 'green';
    }
})