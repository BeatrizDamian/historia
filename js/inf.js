
new Vue({
    el: "#apps",
    methods: {
      mostrar() {
            Swal.fire({
                title: "Instrucción",
                html: `<h5><strong>Lección 1/Nivel Facíl :</strong></h5>
                   <b  class="pieza">Ubicación temporal y espacial del virreinato de Nueva España.</b>
                <h5><strong>Objetivo del Juego:</strong></h5>
                <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                 de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                 El juego consite en encontrar 5 palabras.
                 Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                <br>`,
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                background: ' url("../img/bgz.jpg")',
              });
          },
          mostrartwo() {
                Swal.fire({
                    title: "Instrucción",
                    html: `<h5><strong>Lección 1/Nivel Difícil :</strong></h5>
                       <b  class="pieza">Ubicación temporal y espacial del virreinato de Nueva España.</b>
                    <h5><strong>Objetivo del Juego:</strong></h5>
                    <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                     de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                     El juego consite en encontrar 5 palabras.
                     Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                    <br>`,
                    confirmButtonText: "Aceptar",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    background: ' url("../img/bgz.jpg")',
                  });
              },
          mostrarPFII() {
                Swal.fire({
                    title: "Instrucción",
                    html: `<h5><strong>Lección 2/Nivel Facíl :</strong></h5>
                       <b  class="pieza">La sociedad virreinal ; y La organización política: el Virreinato.</b>
                    <h5><strong>Objetivo del Juego:</strong></h5>
                    <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                     de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                     El juego consite en encontrar 5 palabras.
                     Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                    <br>`,
                    confirmButtonText: "Aceptar",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    background: ' url("../img/bgz.jpg")',
                  });
              },
              mostrarPDII() {
                    Swal.fire({
                        title: "Instrucción",
                        html: `<h5><strong>Lección 2/Nivel Difícil :</strong></h5>
                           <b  class="pieza">La sociedad virreinal ; y La organización política: el Virreinato.</b>
                        <h5><strong>Objetivo del Juego:</strong></h5>
                        <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                         de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                         El juego consite en encontrar 5 palabras.
                         Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                        <br>`,
                        confirmButtonText: "Aceptar",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        background: ' url("../img/bgz.jpg")',
                      });
                  },
                  mostrarPFIII() {
                        Swal.fire({
                            title: "Instrucción",
                            html: `<h5><strong>Lección 3/Nivel Facíl :</strong></h5>
                               <b  class="pieza">LLas actividades económicas: agricultura,minería, ganadería y comercio.</b>
                            <h5><strong>Objetivo del Juego:</strong></h5>
                            <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                             de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                             El juego consite en encontrar 5 palabras.
                             Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                            <br>`,
                            confirmButtonText: "Aceptar",
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            background: ' url("../img/bgz.jpg")',
                          });
                      },
                  mostrarPDIII() {
                        Swal.fire({
                            title: "Instrucción",
                            html: `<h5><strong>Lección 3/Nivel Difícil :</strong></h5>
                               <b  class="pieza">LLas actividades económicas: agricultura,minería, ganadería y comercio.</b>
                            <h5><strong>Objetivo del Juego:</strong></h5>
                            <b  class="pieza"> Se muestra el escenario y los espacios que corresponderán  a la palabra que se desea encontrar ,
                             de igual manera se muestra las 27 letra del abecedario Méxicano,  más las 5 vocales con tilde.
                             El juego consite en encontrar 5 palabras.
                             Ademas se tiene un limite de intento , se tiene 5 opotunidades para lograrlo.</b>
                            <br>`,
                            confirmButtonText: "Aceptar",
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            background: ' url("../img/bgz.jpg")',
                          });
                      },
          pista() {
                Swal.fire({
                    title: "Pista",
                    html: `<h5><strong>Lección 1/Nivel Facíl :</strong></h5>
                       <b  class="pieza">Ubicación temporal y espacial del virreinato de Nueva España.</b>
                    <h5><strong>Objetivo del Juego:</strong></h5>
                    <b  class="pieza"> Se muestra el escenario y se otorga las ocho piezas de la imagen que se pretende formar;
                    en mismo sentido, la interacción se realizar por medio del ratón o touch
                    realizando clic sobre cada pieza interactiva y se arrastra  hacia la posición adecuada para formar la  imagen y finalmente
                    al formaste la imagen se  gana  el juego y se escuchara un audio alude a la imagen que se formó.</b>
                    <br>`,
                    confirmButtonText: "Aceptar",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    background: ' url("../img/bgz.jpg")',
                  });
              },

      },
  });
