
function calcular(operacao) {

    let a = Number(prompt('Primeiro Número'))
    let b = Number(prompt('Segundo Número'))

    switch (operacao) {

        case '+':
            somar(a, b);
            break;

        case "-":
            subtrair(a, b);
            break;

        case "*":
            multiplicar(a, b);
            break;

        case "/":
            dividir(a, b);
            break;


    }
}

function somar(a, b) {
    alert(Number(a) + (b));
}

function subtrair(a, b) {
    alert(Number(a) - (b));
}

function multiplicar(a, b) {
    alert(Number(a) * (b));
}

function dividir(a, b) {
    alert(Number(a) / (b));
}