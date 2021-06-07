new Vue({
    el: "#app",
    methods: {
        mostrarCredito() {
            Swal.fire({
              title: "Crédito",
              html: `<h5><strong>Proyecto de Tesis realizado por:</strong></h5>
              Beatriz Sánchez Damián<br>
              <h5><strong>Directoras de Tesis:</strong></h5>
              Dra. Laura López Díaz<br>
              Dra. María Arely López Garrido<br>
              <h5><strong>Implementado en:</strong></h5>
            En la "Escuela Primaria Rodrigo Arias Santiago"<br>`,
              confirmButtonText: "Salir",
              allowOutsideClick: false,
              allowEscapeKey: false,
            });
        },
    },
});
