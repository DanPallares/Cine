let peliculas = [
    {
        id: 5,
        titulo: "Denominación de Origen",
        imagen: "assets/img/denominacion_origen.jpg",
        descripcion: "La batalla por la verdadera longaniza desata un movimiento social."
    },
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
        descripcion: "Un ritual de primavera muy perturbador en Suecia"
    },


    {
        id: 6,
        titulo: "La Sustancia",
        imagen: "assets/img/the_substance.jpg",
        descripcion: "La promesa de la juventud eterna se convierte en una pesadilla.",
    }

]

$(document).ready(function () {
    let contenedor = $("#contenedor-peliculas")

    for (let i = 0; i < peliculas.length; i++) {
        let pelicula = peliculas[i];
        let card = `
<div class="col-md-4 mb-5">
    <div class="card border-0 shadow-lg h-100">
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="card-img-top" style="height: 480px; object-fit: cover;">
    <div class="card-body d-flex flex-column justify-content-between text-center">
    <div>
        <h5 class="card-title mb-3">${pelicula.titulo}</h5>
        <p class="card-text">${pelicula.descripcion}</p>
    </div>
    <button 
        data-id="${pelicula.id}" 
        class="btn btn-primary mt-4 botonReserva" 
        data-bs-toggle="modal" 
        data-bs-target="#modalReserva">
        Reservar entrada(s)
    </button>
    </div>
    </div>
</div>


        `;
        contenedor.append(card);
    }

    let peliculaSeleccionada = null

    $(document).on("click", ".botonReserva", function () {
        let id = parseInt($(this).data("id"));
        for (i = 0; i < peliculas.length; i++) {
            if (peliculas[i].id === id) {
                peliculaSeleccionada = peliculas[i]
                break
            }
        }

        $("#reservarPelicula").text(peliculaSeleccionada.titulo)
    })

    $("#confirmarReserva").on("click", function () {
        let hora = $("#hora").val()
        let asiento = $("#asiento").val()
        let nombre = $("#nombre").val()
        let apellido = $("#apellido").val()
        let numeroTarjeta = $("#numero-tarjeta").val()
        let cvv = $("#cvv").val()
        let expiryDate = $("#expiryDate").val()

        if (!asiento) {
            alert("Por favor, selecciona un asiento!")
            return
        }

        if (!nombre || !apellido) {
            alert("Por favor, ingrese su nombre y apellido")
            return
        }

        if (!numeroTarjeta || !cvv || !expiryDate) {
            alert("Por favor, ingresa todos los datos de tu tarjeta de crédito/débito")
            return
        }



        $("#confirmarPelicula").text(peliculaSeleccionada.titulo)
        $("#confirmarHora").text(hora)
        $("#confirmarAsiento").text(asiento)
        $("#confirmacion").slideDown()


        const modal = bootstrap.Modal.getInstance(document.getElementById("modalReserva"))
        modal.hide()

        $('html, body').animate({ scrollTop: $('#confirmacion').offset().top }, 500)
    })


})

