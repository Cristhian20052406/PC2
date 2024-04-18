const cursos = {
    dw: {
        titulo: "Curso de Desarrollo Web",
        descripcion: "El curso de desarrollo web es un programa educativo diseñado para enseñar las habilidades fundamentales necesarias para  construir sitios web interactivos y funcionales."
    },
    arqempr: {
        titulo: "Curso de Arquitectura Empresarial",
        descripcion: "El curso de arquitectura empresarial se enfoca en comprender y diseñar la estructura integral de una organización, alineando sus objetivos estratégicos con sus procesos, tecnología y recursos humanos."
    },
    matematica: {
        titulo: "Curso de Matemática",
        descripcion: "El curso de matemáticas abarca una amplia gama de conceptos y técnicas matemáticas que son fundamentales para diversas disciplinas y aplicaciones."
    },
    fisica: {
        titulo: "Curso de Física",
        descripcion: "El curso de física se centra en los principios fundamentales que rigen el comportamiento de la naturaleza y el universo."
    }
};



function mostrarDescripcion(btn) {
    const tituloCurso = btn.parentElement.querySelector('.card-title').textContent.trim();

    const curso = Object.values(cursos).find(curso => curso.titulo === tituloCurso);

    if (curso) {
        Swal.fire({
            title: `Descripción Del ${curso.titulo}`,
            text: curso.descripcion,
            icon: 'info',
            confirmButtonText: 'OK'
        })}
    };