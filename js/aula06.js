
//$.ajax() //JQuery usando Ajax

// $.ajax(
//     { //configuração da chamada
// 
//     }
// )

// $.ajax(
//     { //configuração da chamada
//      url: "Aqui coloca a url + variáveis",
//      type: "Aqui o tipo da chamada > get , post, put, delete, path",
//      sucess: function(variavel_de_retorno){
//             use a variável de retorno se der certo
//       },
//      error: function(){
//       //use a variável de retorno ruim para tentar acertar na próxima ou saber o         motivo do erro
//      }
//     }
// )

$('#meu_ip').on("click", function () {

    $.ajax(
        {
            url: "https://httpbin.org/ip",
            type: "get",
            success: function (retorno) {
                console.log("Opa, funcionou", retorno);
            },
            error: function (motivo) {
                console.warn("Deu ruim", motivo);
            }
        }
    )

})

$('#eco_get').on("click", function () {


    $.ajax(
        {

            url: encodeURI("https://httpbin.org/get?nome=Alex&idade=24&cidade=Lages&sexo=masc"),
            type: "get",
            success: function (retorno) {
                console.log('Deu certo', retorno);

            },
            error: function (errou) {
                console.log('Errou', errou);

            }

        }
    )

})

$('#delay_get').on("click", () => {

    let numero = $('#tempo').val()

    $.ajax(
        {

            url: encodeURI("https://httpbin.org/delay/" + numero),
            type: "get",
            success: (retorno) => { // ()=> Criar função anônima(arrow function)
                console.log("Demorou mas deu certo");
            },
            error: (erro) => {
                console.warn("Erro chega rápido como sempre", erro);
            }

        }
    )
})

// objeto a ser enviado no body

$('#eco_post').on("click", ()=>{

    let objeto = {
        nome: $("#nome").val(),
        email: $("#email").val(),
    };
    
    $.ajax(
        {
    
            url: "https://httpbin.org/post",
            type: "post",
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
    
            data: JSON.stringify(objeto), // converte objeto em string
    
            success: (dados) => {
                alert("Veja o resultado no console...")
                console.log(dados);
    
            },
            error: (erro) => {
                alert("Ocorreu um erro, confira no console...")
                console.log('erro');
    
            }
    
    
        }
    )

})



//    Testar: Eco do body
// objeto a ser enviado no body

$('#eco_post').on("click", ()=>{
    
    let objeto = {
        nome: $("#nome").val(),
        email: $("#email").val(),
    };

    $.ajax({

        url: "https://httpbin.org/post",
    
        type: "post",
    
        headers: {
    
            'Accept': "application/json",
    
            'Content-type': 'application/json',
    
        },
    
        data: JSON.stringify(objeto),//converte objeto em string
    
        success: function (dados) {
            alert("Veja os dados retornados no console...")
            console.log(dados)
    
        },
    
        error: function (erro) {
            alert("Algo deu errado, verifique o motivo no console...")
            console.error(erro)
    
        }
    
    })

})

$("#busca_pokemon").on("click",()=>{

    console.log("Iniciando busca...");
    let chave= $("#pokemon").val()
    console.log("Iremos buscar por ",chave);

    $.ajax(
        {
            url:encodeURI("https://pokeapi.co/api/v2/pokemon/"+chave),
            type:"get",
            success:(retorno)=>{
                console.log("Quem é esse pokemon?",retorno);
                $("body").append(
                    $("<div>",{class:"row"}).append(
                        $("<div>",{class:"col-1",text:retorno.id}),
                        $("<div>",{class:"col-3",text:retorno.name}),
                        
                    )
                )

                setTimeout(function(){

                    $("body").append(
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.front_default})
                    ),
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.back_default})
                    )
                    )

                },3000)
            },
            error:(opa)=>{
                console.warn("Opa oq aconteceu ?",opa);
            }
        }
    )

})
