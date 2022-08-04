console.group('Utilizar semântica no html para compor o layout');

$("<body>", { class: "container text-center mt-4" }).append(
  $("<header>", { class: "row" }).append(

    $("<section>", { class: "col" }),

    $("<section>", { class: "col-8" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body" }).append(
          $("<h1>", { text: "Página Horizontal" })
        ),

        $("<div>", { class: "card-footer mt-2" }).append(

          $("<button>", { class: "btn btn-outline-dark btn-hover btn-striped" }).append(
            $("<a>", { href: "/Aula05/aula05.html", text: "Início" }),
          ),


          $("<button>", { class: "btn btn-outline-dark btn-hover btn-striped" }).append(
            $("<a>", { href: "/Aula05/vertical.html", text: "Vertical" }),
          ),

          $("<button>", { class: "btn btn-outline-dark btn-hover btn-striped" }).append(
            $("<a>", { href: "/Aula05/crud.html", text: "CRUD" }),
          ),

        )
      )
    ),

    $("<section>", { class: "col" }),

  ),




  $("<main>", { class: "row mt-4" }).append(

    $("<div>", { class: "col" }),

    $("<div>", { class: "col-8" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body" }).append(

        ),

        $("<div>", { class: "card-footer text-start", text: "Página construída apenas usando JQuery" })
      )
    ),

    $("<div>", { class: "col" }),

  ).appendTo("body")



).appendTo("body")


console.groupEnd()

console.group('');

$("main .card-body").append(
  $("<table>", {
    class: "table table-bordered table-striped table-hover",
  }).append(
    $("<thead>").append(
      $("<th>", { text: "Nome" }),
      $("<th>", { text: "Idade" }),
      $("<th>", { text: "Cidade" })
    ),
    $("<tbody>").append(
      $("<tr>").append(
        $("<td>", { text: "Alexsandro" }),
        $("<td>", { text: "24 anos" }),
        $("<td>", { text: "Lages" })
      ),
      $("<tr>").append(
        $("<td>", { text: "Maria" }),
        $("<td>", { text: "28 anos" }),
        $("<td>", { text: "São José" })
      )
    )
  )
);

console.groupEnd();


