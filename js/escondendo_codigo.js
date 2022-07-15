// console.log("Hello World"); //O console aceita parâmetros para exibir em log
// console.log("Alexsandro tem " + 24 + " anos");  //É possível concatenar textos e variáveis igual ao JAVA.
// console.log("Alexsandro tem", 24, "anos"); //O console aceita infinitos parâmetros, basta separar por vírgula

// let nome = "Alexsandro";  //let cria uma variável com escopo limitado
// var sobrenome = "Corrêa" //var cria uma variável que continua existindo mesmo depois do escopo

// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log('Meu nome é ' + nome + ' mas me chamam também de \'Alex\'');
// console.log(`Meu nome é ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));
// let idade = 24;
// let altura = 1.75;
// console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é do tipo ${typeof (altura)}`);

// // let mensagem = prompt("O que você está pensando?")
// // let interromper = prompt("Estou interrompendo?")
// // console.log("Você está pensando " + mensagem);
// // console.log("A informação capturada é do tipo " + typeof(mensagem));

// console.log("Os operadores aritméticos são os mesmos do java +,-,*,/,%");
// console.log("Somando " + (5 + 5));
// console.log("Subtraindo " + (7 - 3));
// console.log("Multiplicando " + (5 * 4));
// console.log("Divisão " + (20 / 5));

// if (idade < 18) {
//     console.log("É menor de idade");
// } else {
//     console.log("É maior de idade");
// }

// if (altura < 1.5) {
//     console.log("Baixinho");
// } else if (altura < 1.7) {
//     console.log("Altura mediana");
// } else if (altura < 1.9) {
//     console.log("É alto");
// } else {
//     console.log("É gigante");
// }

// let resposta = (altura < 2 ? "Altura normal" : "Gigante");

// switch (idade) {
//     case 1:
//         console.log("Um aninho");
//         break;

//     case 2:
//         console.log("Dois aninhos");
//         break;

//     default:
//         console.log("Chega, tá bom");
//         break;
// }

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
let cidade = prompt("Em qual cidade você mora?");

console.log(nome);
console.log(idade);
console.log(cidade);

console.log(`Bem vindo ${nome} , você tem ${idade} anos e mora na cidade de ${cidade}`);
console.log("Esse site é apenas para desenvolvedores não importa a idade nem onde mora, mas o importante é ter vontade de aprender.");
console.log("Veja os operadores matemáticos em ação:");
console.log("1 + 2 = " + (1+2));
console.log("7-4 = " + (7-4));
console.log("4 * 7 = " + (4*7));
console.log("45 / 9 = " + (45/9));

if(cidade == "Lages"){
    console.log("É meu conterrâneo");
}

if (idade < 18) {
    
    console.log("É menor de idade");

}else if(idade >18){
    
    console.log("É maior de idade");

}

if (idade <= 17){

    console.log("É menor de idade");

}else if(idade >= 18){
    
    console.log("É maior de idade");

}

if(idade > 17 && cidade == "Lages"){
    console.log("É maior de idade e é meu conterrâneo");
}else{
    console.log("É de menor ou mora em outra cidade será?");
}

if (idade > 18 || cidade == "Lages") {
    console.log("Ou é de maior ou mora em Lages, ou dois");
}else{
    console.log("Não mora em Lages e é de menor");
}

