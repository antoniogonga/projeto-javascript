var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var mensagemError = document.getElementById('mensagem-error');
var submitError = document.getElementById('subit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = 'nome é obrigatório';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){    
        nameError.innerHTML = 'nome completo'; 
        return false;
    }
      
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email é obrigatório';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Incorreto';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
}

function validateMensagem(){
    var mensagem = document.getElementById('contact-mensagem').value
    var obrigatório = 30;
    var left = obrigatório - mensagem.length;
    
    if(left > 0){
        mensagemError.innerHTML = left + ' é necessários mais caracteres';
        return false;
    }
    mensagemError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
   
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMensagem()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Por favor corrija para enviar';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false; 

        }
    
}


