function definirArray() {

    console.log("Para criar um Array basta let nome = []");
    console.log("Para criar um Array com itens basta let nome = [5,13,2]");

    let listaVazia = [];
    console.log(listaVazia);

    let nomes = ["Alexsandro", "Ciro", "Lucas", "Stephanie"];
    console.log(nomes);

}

definirArray();

function alertar(mensagem) {

    alert(mensagem);

}

var lista = ["Alexsandro", "Alex", "Corrêa"];
function inserirArray(novoNome) {


    lista.push(novoNome);
    console.log(lista);

}

function listarFor() {

    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com for o índice " + contador + " = " + lista[contador]);
    }

    console.log("---------------------------------");

    for (const item of lista){
        console.log("Repetindo com for inteligente sem contar o índice " + item);
    }

    console.log("---------------------------------");

    lista.forEach(item => {
        console.log("Repetindo com forEach sem contar índice: " + item);
    });

}