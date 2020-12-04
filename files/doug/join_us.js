const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');
const bio = document.getElementById('bio');
const last = document.getElementById('last');
const button = document.getElementById('button');
const body = document.getElementById('body');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const idadeValue = idade.value.trim();
	const sexoValue = sexo.value.trim();
	const bioValue = bio.value.trim();
	const lastValue = last.value.trim();
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Preencha o nickname');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Preencha o Email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email inválido');
	} else {
		setSuccessFor(email);
	}

	if(idadeValue === '') {
		setErrorFor(idade, 'Preencha a idade');
	}else if(idadeValue < 18){
		setErrorFor(idade, "Deve ser maior de idade");
	}else {
		setSuccessFor(idade);
	}

	if(sexoValue === '') {
		setErrorFor(sexo, 'Preencha o gênero sexual');
	} else if(!isGender(sexoValue)){
		setErrorFor(sexo, 'Gênero sexual inválido, utilize apenas letras');
	}else {
		setSuccessFor(sexo);
	}

	if(bioValue === '') {
		setErrorFor(bio, 'Preencha suas habilidades');
	} else {
		setSuccessFor(bio);
	}

	if(lastValue === '') {
		setErrorFor(last, 'Responda o questionamento');
	} else {
		setSuccessFor(last);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isGender(sexo) {
	return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(sexo);
}

button.addEventListener('mousemove', colored);

function colored(e){
	document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 80)";
}
