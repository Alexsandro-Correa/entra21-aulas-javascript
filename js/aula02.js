procedimento(); //Essa função está sendo chamada e não precisa de argumentos.

procedimento(); //A função executará cada vez que for chamada

bemVindo("Alexsandro");

bemVindo(false);

bemVindo(24);

bemVindo(bemVindo);

bemVindo(1.64);

login("Alex", "segredo1997");

maiorIdade(15);

let resultado = maiorIdade(16);
console.log(resultado);

console.log(maiorIdade(18));

let concatenada = maiorIdade(10) + maiorIdade(20);
console.log(concatenada);

console.log(calcularMedia(8, 7.5, 9.5));

console.log(verificarSituacao(8));

console.log(verificarSituacao(5));

console.log(
    verificarSituacao(
        calcularMedia(5, 7.5, 9.5)
    )
);








function procedimento() { //Declaração da função

    console.log("Esse tipo de função sempre executa da mesma forma porque não tenho parâmetros para deixar dinâmico.");

    console.warn("Essa função também não retorna nada.");

}

function bemVindo(nome) {

    console.log(typeof (nome));
    console.warn("Bem vindo", nome);
    console.warn(`Bem vindo ${nome}`);

}

function login(userName, password) {

    console.error("O usuário " + userName + " cuja a senha é " + password + " está inadinplente, não pode entrar.");


}

function maiorIdade(idade) {

    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }

}

function calcularMedia(nota1, nota2, nota3) {

    return (nota1 + nota2 + nota3) / 3;

}

function verificarSituacao(media) {

    return media >= 7 ? "Aprovado" : "Reprovado";

}

console.log("--------------------------Exercício--------------------------------");

function somar(a, b) {
    return (a + b);
}

function subtrair(a, b) {
    return (a - b);
}

function multiplicar(a, b) {
    return (a * b);
}

function dividir(a, b) {
    return (a / b);
}

console.log("Somando" , somar(5, 7));
console.log("Subtraindo" , subtrair(10, 7));
console.log("Multiplicando" , multiplicar(10, 3));
console.log("Dividindo" , dividir(27, 9));

console.log("-------------------------------------------------------------------");


