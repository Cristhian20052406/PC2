document.addEventListener("DOMContentLoaded", function() {
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    const datosAlumnos = [
        {
            "nombre": "Cristhian",
            "apellido": "Paquirachin",
            "telefono": "+51 917020769",
            "direccion": "Comas - Lima, Perú"
        },
        {
            "nombre": "Camila",
            "apellido": "Artica",
            "telefono": "+51 987654321",
            "direccion": "Los Olivos - Lima, Perú"
        }
    ];

    function mostrarDatosAlumno() {
        let indiceAlumno;
        if (tipoUsuario === "alumno") {
            indiceAlumno = 0; // Alumno 1
        } else if (tipoUsuario === "alumno2") {
            indiceAlumno = 1; // Alumno 2
        } 

        const alumno = datosAlumnos[indiceAlumno];

        document.getElementById("nombreAlumno").innerText = alumno.nombre;
        document.getElementById("apellidoAlumno").innerText = alumno.apellido;
        document.getElementById("telefonoAlumno").innerText = alumno.telefono;
        document.getElementById("direccionAlumno").innerText = alumno.direccion;
    }

    mostrarDatosAlumno();
});

const encuestaForm = document.getElementById("encuestaForm");
encuestaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(encuestaForm);
    const profesorFavorito = formData.get("profesorFavorito");

    Swal.fire({
        title: "¡Encuesta Enviada!",
        text: `Tu profesor favorito es: ${profesorFavorito}`,
        icon: "success"
    });
});


