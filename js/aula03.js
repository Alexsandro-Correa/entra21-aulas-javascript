
console.warn("READ");
let leitura = document.getElementById("paragrafo_ler")
console.log(leitura);
console.log("Apenas o conteúdo ou textContent" , leitura.textContent);
console.log("Apenas o conteúdo + elementos internos com html" , leitura.innerHTML);

console.warn("Button");
let leitura_button = document.getElementById("button_js")
console.log(leitura_button);
console.log(leitura_button.textContent);
console.log(leitura_button.innerHTML);

console.warn("Span");
let leitura_span = document.getElementById("span_js")
console.log(leitura_span);
console.log(leitura_span.textContent);
console.log(leitura_span.innerHTML);

console.warn("READ MORE");
let paragrafos = document.getElementsByTagName("p")
console.log("Lendo todos os parágrafos" , paragrafos);

console.warn("READ MORE");
let paragrafos_lista = [...document.getElementsByTagName("p")]
console.log("Lendo todos os parágrafos" , paragrafos_lista);

paragrafos_lista.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("write");
let escrita = document.getElementById("paragrafo_escrever")
escrita.title = "www.google.com"
escrita.textContent = "Esse parágrafo foi escrito com javascript"

document.getElementById("button_js").textContent = "Botão alterado com javacript"


let att_span = document.getElementById("span2_js")
att_span.title = "Atualizando Span2"
att_span.textContent = "Atualizei o span usando variável"
att_span.class = "alert alert-primary"

document.getElementById("span_js").textContent = "Atualizei meu span sem criar uma variável"
span_js.title = "Atualizando Span"

function att_conteudo(conteudo){

    let elemento = document.getElementById("button_bottom")
    elemento.title = conteudo;
    elemento.textContent = conteudo;

}

function addConteudo(conteudo){

    let enter = document.createElement("br")
    document.body.append(enter)

    let elemento = document.createElement("div")
    elemento.textContent = conteudo
    document.body.append(elemento)


}