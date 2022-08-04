$("body").attr("class", "container-fluid mt-3");

$('<header>', { class: "row" }).append(
    $('<section>', { class: "col" }).append(
        $('<div>', { class: "card" }).append(
            $('<div>', { class: "card-body text-center" }).append(
                $('<h1>', { text: "Página Vertical" })
            )
        )
    )
).appendTo("body")

$('body').append(
    $('<section>', { class: "row" }).append(
        $('<aside>', { class: "col-4 mt-4" }).append(
            $('<section>', { class: "col" }).append(
                $('<div>', { class: "card" }).append(
                    $('<div>', { class: "card-body" }).append(
                        $('<nav>').append(
                            $("<a>", { href: "/Aula05/horizontal.html", text: "Horizontal" }),
                            $("<a>", { href: "/Aula05/crud.html", text: "CRUD", })
                        )
                    )
                )
            )
        ),
        $('<main>', { class: "col mt-4" }).append(
            $('<section>', { class: "col" }).append(
                $('<div>', { class: "card" }).append(
                    $('<div>', { class: "card-body" }),
                    $("<div>", { class: "card-footer text-start", text: "Página construída apenas usando JQuery" })
                )
            )
        )

    )
).appendTo("body")

$("aside nav a").attr(
    "class", "btn btn-outline-dark mb-1 form-control"
);

$('main .card-body').append(
    $('<table>', {class:"table table-hover table-bordered table-striped text-center"}).append(
        $('<thead>').append(
            $('<th>', { text: "Nome" }),
            $('<th>', { text: "Idade" }),
            $('<th>', { text: "Cidade" }),
        ),

        $('<tbody>').append(
            $('<tr>').append(
                $('<td>', {text:"Alexsandro"}),
                $('<td>', {text:"24 anos"}),
                $('<td>', {text:"Lages"}),
            )
        ),

        $('<tbody>').append(
            $('<tr>').append(
                $('<td>', {text:"Romário"}),
                $('<td>', {text:"42 anos"}),
                $('<td>', {text:"São Joaquim"}),
            )
        )
    )
)