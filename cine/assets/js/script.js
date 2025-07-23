let peliculas = [
    {
        id: 1,
        titulo: "Star Wars: Una Nueva Esperanza",
        imagen: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
        descripcion: "El inicio de la mejor saga de la historia... En una galaxia muy muy lejana"
    },
    {
        id: 2,
        titulo: "Harry Potter y la Piedra Filosofal",
        imagen: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
        descripcion: "Un jóven descrubre que es mago y se une Hogwarts",
    },
    {
        id: 3,
        titulo: "La Guía del Viajero Intergaláctico",
        imagen: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
        descripcion: "Una comedia galáctica absurda"
    },
    
]

$(document).ready(function() {
    let contenedor = $("#contenedor-peliculas")

    for (let i = 0; i < peliculas.length; i++) {
        let pelicula = peliculas[i];
        let card = `
            <div class="col-md-4 mb-5">
                <div class="card">
                    <img src="${pelicula.imagen}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.titulo}</h5>
                        <p class="card-text">${pelicula.descripcion}</p>
                        <button data-id="${pelicula.id}" class="btn btn-primary mt-5 botonReserva" data-bs-toggle="modal" data-bs-target="#modalReserva">Reservar</button>
                    </div>
                </div>
            </div>
        `;
        contenedor.append(card);
    }

    let peliculaSeleccionada = null

    $(document).on("click", ".botonReserva", function() {
        let id = parseInt($(this).data("id"));
        for (i = 0; i < peliculas.length; i++) {
            if (peliculas[i].id === id) {
                peliculaSeleccionada = peliculas[i]
                break
            }
        }

        $("#reservarPelicula").text(peliculaSeleccionada.titulo)
    })

    $("#confirmarReserva").on("click", function() {
        let hora = $("#hora").val()
        let asiento = $("#asiento").val()

        if (!asiento) {
            alert("Por favor, selecciona un asiento!")
            return
        }

        $("#confirmarPelicula").text(peliculaSeleccionada.titulo)
        $("#confirmarHora").text(hora)
        $("#confirmarAsiento").text(asiento)
        $("#confirmacion").slideDown()

        const modal = bootstrap.Modal.getInstance(document.getElementById("modalReserva"))
        modal.hide()
    })


})

