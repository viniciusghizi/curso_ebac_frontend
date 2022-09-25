const formulario = document.getElementById('form-aula');
const botao = formulario[2];
console.log(formulario)

function validaMaiorQue(maiorQue,MenorQue){
    if(maiorQue > MenorQue){
        return true;
    }else{
        return false;
    }
}

function displayInfo(){
    
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let numberB = formulario[1].value;
    let numberA = formulario[0].value; 
    if(validaMaiorQue(numberB,numberA)){
       alert(`Funcionou, o numero ${numberB} é maior que ${numberA}`);
    }
    else{
        alert(`ERROU!!, o numero ${numberB} não é maior que ${numberA}`)
    }
})
