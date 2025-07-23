let peliculas = [
    {
        id: 1,
        titulo: "Volver al Futuro",
        imagen: "assets/img/back_to_the_future.jpg",
        descripcion: "El profesor Doc Brown y Marty McFly viajan al pasado para salvar el futuro.",
    },
    {
        id: 2,
        titulo: "El Joven Manos de Tijera",
        imagen: "assets/img/edward_scissorhands.jpg",
        descripcion: "Un joven con manos de tijera que busca su lugar en el mundo.",
    },
    {
        id: 3,
        titulo: "Jurassic Park",
        imagen: "assets/img/jurassic_park.webp",
        descripcion: "Dinosaurios en la era moderna, ¿qué podría salir mal?"
    },
    {
        id: 4,
        titulo: "Midsommar",
        imagen: "assets/img/midsommar.jpg",
        descripcion: "Un ritual de verano que no olvidarás."
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

