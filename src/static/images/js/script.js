
// Open close popup signIn js 
(function() {

  const popUpFindSingIn = document.querySelector ('.popupSignIn_js');
  const popupSignIn = document.querySelector('.popupSignInOpen_js');
  let lastFocus;

  popUpFindSingIn.addEventListener('click', function() {

    lastFocus = document.activeElement;
    popupSignIn.classList.add('popup_open');
    popupSignIn.querySelector('.popup__input').focus();

    
    let close = popupSignIn.querySelector('.popup__close');
    close.addEventListener ('click', exit);

    window.addEventListener('keydown', keyDownEcs);
  
    function keyDownEcs (event) {
      if (event.code==='Escape') {
        exit ();
      }
    }

    function exit () {
        close.removeEventListener ('click', exit);
        window.removeEventListener ('keydown', keyDownEcs);
        popupSignIn.classList.remove('popup_open');
        lastFocus.focus();
      }     
  })
})();


// Open close popup Register
(function() {

  const popUpRegister = document.querySelector ('.popupRegister_js');
  const popupRegisterOpen = document.querySelector('.popupRegisterOpen_js');
  let lastFocus;

  popUpRegister.addEventListener('click', function() {

    lastFocus = document.activeElement;
    popupRegisterOpen.classList.add('popup_open');
    popupRegisterOpen.querySelector('.popup__input').focus();


    let close = popupRegisterOpen.querySelector('.popup__close');

    close.addEventListener ('click', exit);

    window.addEventListener('keydown', keyDownEcs);
  

    function keyDownEcs (event) {
      if (event.code==='Escape') {
        exit ();
      }
    }

    function exit () {
        close.removeEventListener ('click', exit);
        window.removeEventListener ('keydown', keyDownEcs);
        popupRegisterOpen.classList.remove('popup_open');
        lastFocus.focus();
      }    
  })
})();


//Validation

function validateData (data, errors={}) {

  if(!checkEmail(data.email)){
    errors.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")';
  }
  if(data.password!=data.repeatPassword){
    errors.password = 'The password and confirm password fields do not match.';
  }
  if (!data.password) {
    errors.password = 'This field is required';

  } else if (data.password.length<8){
    errors.password = 'The password is too short';
  }
  
  if (!data.name) {
    errors.name = 'This field is required';
  }
  if (!data.surname) {
    errors.surname = 'This field is required';
  }
  if (!data.location) {
    errors.location = 'This field is required';
  }
  if (+(data.age)<=0) {
    errors.age = 'Age is incorrect';
  }
  return errors;
}

function checkEmail(email) {
  return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function getFormData(form, data = {}){
  let inputs = form.querySelectorAll ('input');
    for (let input of inputs) {
        switch (input.type) {
          case 'radio':
            if(input.checked) {
              data[input.name] = input.value;
            }
            break;
            case 'checkbox':
            if(!data[input.name]) {
              data[input.name] = [];
            }
            if (input.checked){
              data[input.name].push(input.value);
            }
            break;
          case 'file':
              data[input.name] = input.files;
              break;
            
          default:
            data[input.name] = input.value;
            break;
        }
    }
  let textareas = form.querySelectorAll('textarea');
    for (let textarea of textareas) {
      data[textarea.name] = textarea.value;
    }
  return data;
}

function setInvalid(input) {
  function handl (){
    input.removeEventListener('input', handl);
    input.classList.remove ("invalidInput");
  }
  input.classList.add ("invalidInput");
  input.addEventListener('input', handl);
  return handl;
}
function giveInputFeedback(input, error) {
  function handl (){
    message.remove();
    input.removeEventListener('input', handl);
  }

  input.classList.add ("invalidInput");
  let message = document.createElement('div');
  message.classList.add ("invalidMessage");
  message.innerText = error;
  input.insertAdjacentElement("afterend",message);

  input.addEventListener('input', handl);
  return handl;
}

function setFormError (form, errors) {
  let removeArr = [];
  let inputs = form.querySelectorAll ('input');
  let textareas = form.querySelectorAll('textarea');

  for (let input of inputs) {
    if(errors[input.name]){
      const remove1 = setInvalid(input);
      const remove2 = giveInputFeedback(input, errors[input.name]);
      removeArr.push(remove1, remove2);
    }
  }

  for (let textarea of textareas) { 
    if(errors[textarea.name]) {
      const remove3 = setInvalid(textarea);
      const remove4 = egiveInputFeedback(input, errors[textarea.name]);
      removeArr.push(remove3, remove4);
    }
  }
  return removeArr;


}

(function(){
  const registerForm = document.forms.register;
  const signIn = document.forms.signIn;
  let removeArr = [];


  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = getFormData(event.target);
    let errors = validateData(data);
    removeArr.forEach(fn => fn());
    if(Object.keys(errors).length) {
      removeArr = setFormError (registerForm, errors);
    }

  })

  
})();

