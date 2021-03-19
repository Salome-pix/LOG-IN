const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const email=document.querySelector('#email')

/***Shoow input error message */
function showError(input,message){ 
     var formControl =input.parentElement;
     formControl.className='form-control error';
     var small=formControl.querySelector('small');
     small.innerText=message;
}

function showSuccess(input){
    var formControl =input.parentElement;
     formControl.className='form-control succsess';


}


togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

form.addEventListener('submit',function(e){
    e.preventDefault;
    if (password.value === ''){
        showError(password, 'Password is required');
    }else{
        showSuccess(password)
    }

})

form.addEventListener('submit',function(e){
    e.preventDefault;
    if (email.value === ''){
        showError(email, 'Email is required');
    }else{
        showSuccess(email)
    }

})
