

const alerte =  document.querySelector('.alert');

const btSubmit = document.querySelector('.bt-submit');

const emailEntry = document.querySelector('.email-entry');

const entrySection = document.querySelector('.entry-section');

const sucessSection = document.querySelector('.sucess-section');



btSubmit.addEventListener('click', ()=>{

    if(emailEntry.value === ''){

        alerte.classList.add('on');
        emailEntry.classList.add('error')

    }else{
       
        entrySection.classList.remove('on');
        sucessSection.classList.add('on');

    }

})


