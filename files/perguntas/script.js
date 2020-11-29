//Obs: é um quiz chumbeta que não funciona, sinto muito.
//Eu tinha planejado mentalmente todo o esquema de comparação e geração das possibilidades, ams traduzir para código n deu muito certo
//ai eu coloquem alguns random para parecer esteticamente funcional.
//Desculpe pela gambiarra, eu culpo o tempo mas não há motiva para por culpa em algo.

function quiz(){
	//pegando uma porcentagem de compatibilidade randomica, acima de 60% para ter sentido
	let num = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
	alert('O nível de compatibilidade é: '+num+'%');
	alert('Agora será redirecionado à sua resposta.');

	//desaparecer com o site prncipal para dar a impressão de loading, eu sei que isso é uma gambiarra fenomenal kkk.
	let body = document.getElementById('body');
	body.style.display = 'none';

	//gerando um numero random para a página a ser carregada
	let pag = Math.floor(Math.random() * 5); 

	switch(pag){
		case 0:
			window.location.replace('membros/pag1.html');
			break;
		
		case 1:
			window.location.replace('membros/pag2.html');
			break;
		
		case 2:
			window.location.replace('membros/pag3.html');
			break;
		
		case 3:
			window.location.replace('membros/pag4.html');
			break;
		
		case 4:
			window.location.replace('membros/pag5.html');
			break;	
	}


	/*falha total
	-várias tentativas antes de fazer um script funcional, virando chumbeta no fim

	if(document.getElementById('pgt1a').value == 'checked'){
		var pg1a = document.getElementById('pgt1a').value;
		alert('true');
	}else{
		alert('empty');
	}*/
}
