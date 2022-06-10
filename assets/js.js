const lista = document.getElementById('lista');//identifica o Id lista.
const form = document.getElementById('container');//identifica o Id Container.
document.getElementById("limp").addEventListener("click",limpar);

function limpar(){
    location.reload();
}


form.onsubmit = function (e) { /* --quando o form for enviado */
	e.preventDefault();//não deixa a pagina recarregar após o submit.
	const camp = document.getElementById('camp');//pega o valor do input e deixa em camp.
	addTask(camp.value);//executa a função com valor do input.
}


function addTask(description) {//descreption serve como parametro e recebe o value do input como valor.
	const criadiv = document.createElement("div");//Cria um elemento HTML Div.
	const newTask = document.createElement('input');//Cria um elemento HTML input.
    const taskLabel = document.createElement('label');//Cria um elemento HTML label.
    const textoinput = document.createTextNode(description);//Texto pegando o paramentro da função.
    
    criadiv.classList.add('item');//cria a nova classe dentro da div da lista com o nome de item.
    taskLabel.appendChild(textoinput);//coloca o texto dentro da label.
	newTask.setAttribute('type', 'checkbox');//define o input para checkbox.
	newTask.setAttribute('name', description);//campo name sera igual o paramentro da funcao.
	newTask.setAttribute('id', description);//campo Id sera igual o paramentro da funcao.
    
	
    //monta o checkbox + o texto
	criadiv.appendChild(newTask);//coloca o checkebox dentro da lista
	criadiv.appendChild(taskLabel);// o texto da label junto com o checkbox

    lista.appendChild(criadiv);//adciona o child dentro da lista.
	
}


//const lista = document.getElementById('lista');//identifica o Id lista - define o lugar onde está a lista
//lista.appendChild(criadiv) - insere o criadiv dentro da lista.