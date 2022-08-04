
$('<body>', {class:"container text-center mt-4"}).append(
    
    $('<div>', {class:"row"}).append(
        $('<div>', {class:"col"}),
        $('<div>', {class:"col-8"}).append(
            $('<div>', {class:"card"}).append(
                $('<div>', {class:"card-header"}).append(
                    $('<h1>', {text:"Página Inicial"})
                )
            )
        ),

        $('<div>', {class:"col"}),
    ),

    $('<div>', {class:"row mt-2"}).append(
        $('<div>', {class:"col"}),
        $('<div>', {class:"col-8"}).append(
            $('<div>', {class:"card"}).append(
                $('<div>', {class:"card-body"}).append(
                   
                    $('<button>', {
                        class:"btn btn-outline-dark btn-hover btn-striped"
                    }).append(
                        $('<a>', {
                            href:"/aula05/horizontal.html",
                            text:"Horizontal"
                    })
                    ),

                    $('<button>', {
                        class:"btn btn-outline-dark btn-hover btn-striped"
                    }).append(
                        $('<a>', {
                            href:"/aula05/vertical.html",
                            text:"Vertical"
                    })
                    ),

                    $('<button>', {
                        class:"btn btn-outline-dark btn-hover btn-striped"
                    }).append(
                        $('<a>', {
                            href:"/aula05/crud.html",
                            text:"CRUD"
                    })
                    )
                ),
                $("<div>" , {class:"card-footer text-start" , text: "Página construída apenas usando JQuery"})
            ) 
         
        ),

        $('<div>', {class:"col"}),
    )

).appendTo('body')

