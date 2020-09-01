

document.querySelector('#add-time')
.addEventListener('click', cloneField)

//Função ao executar ação
function cloneField(){
	const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean true ou false
	
	//Pegar os campos. que campos?
	const fields = newFieldContainer.querySelectorAll('input')
	
	//para cada campo, limpar
	fields.forEach(function(field){
		// pega o field do momento e limpa ele
		field.value = ""
	})
	
	//Colocar a pagina: onde?
	document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
