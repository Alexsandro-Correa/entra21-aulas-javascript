console.group("Ler conteúdos em JQuery")

console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd()


console.group("Alterar conteúdos com JQuery")

$("#paragrafo_2").text("Conteúdo escrito com JQuery")
console.log($("#paragrafo_2").text())

console.groupEnd()


console.group("Ler vários conteúdos com JQuery")

let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {

    console.log(this.textContent);

})


console.groupEnd()


console.group("Escrever vários conteúdos com JQuery")

$("li").text("li escrito com JQuery")

console.groupEnd()


console.group("Criar elementos com JQuery")

$("<button>", {

    text: "Clique aqui",
    class: "btn btn-outline-primary"

}).appendTo("#escrever_button")

$("#escrever_formatado").append(

    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto itálico" })

)


console.groupEnd()


console.group('Mais de um item com JQuery');

$("<ul>").append(

    $("<li>", {
        text: "Primeiro Item"
    }),

    $("<li>", {
        text: "Segundo Item"
    }),

    $("<li>", {
        text: "Terceiro Item"
    })

).appendTo("#escrever_ul")

console.groupEnd();

console.group('Exercício escrever mais de um item');

// table

// thead
//th
//th
//th 

// tbody
//tr
//td
//td
//td

//tr
//td
//td
//td

$("<table>", { class: "table table-bordered text-center table-info" }).append(


    $("<thead>", { class: "bg-info" }).append(
        $("<th>", { text: "Nome" }),

        $("<th>", { text: "Idade" }),

        $("<th>", { text: "Sexo" }),

    ),

    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Alexsandro" }),

            $("<td>", { text: "24 anos" }),

            $("<td>", { text: "Masculino" }),
        ),

        $("<tr>").append(
            $("<td>", { text: "Cris" }),

            $("<td>", { text: "30 anos" }),

            $("<td>", { text: "Feminino" }),
        )

    )

).appendTo("#escrever_table")

console.groupEnd()


console.group('Eventos de clique em qualquer lugar');

$("p").on("click", function () {

    alert("Opa")

})

$("span").on("click", function () {

    console.warn("Opa");

})

console.groupEnd();

//Colocar um botão para inserir um elemento (alert)
// No html ter um button com id="ad"
// No javascript ter um evento de click para quem tenha o id="ad"
// Nesse evento deve ser inserido no html um novo p com class alert-danger, depois ter outro button no html com o id limpar e no js um evento de click para quem tem o id="limpar" para remover todos os elementos com class="alert" > alert.remove

console.group('Exercício criar elementos e depois apagar tudo');

$("#add").on("click", function () {

    $("<p>", { text: "Adicionado", class: "alert alert-info" }).appendTo("body")

})

$("#clear").on("click", function () {

    $(".alert").remove()

})

console.groupEnd();


console.group('Exercício Extra Aula: Criar Tabela com Prompt usando Js');

let nome;
let idade;
let sexo;

    
    $("#criar_table_js").on("click", function () {
    
        
       
    
            $("<tbody>").append(
    
                $("<td>", { text: nome = prompt("Insira seu nome") }),
                $("<td>", { text: idade = prompt("Insira sua idade") }),
                $("<td>", { text: sexo = prompt("Insira seu sexo") })
    
            ).appendTo("#call_table")
    
    
    
    }).appendTo("#criar_table_js")








console.groupEnd()


