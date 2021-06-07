const
    COLUMNAS = 4,
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1,
    NOMBRE_IMAGEN_OCULTA = "../img/logo-dais.png";
new Vue({
    el: "#app",
    data: () => ({
        imagenes: [
            {ruta: "../img/M01.png", descripcion:"<h2>Conquista de Tenochtitlan</h2> El 13 de agosto de 1521 se consumó la conquista de México- Tenochtitlan. A partir de entonces, inició la edificación de una nueva ciudad construida sobre las ruinas de la que anteriormente ocuparon los mexicas;ésta se convertiría en el centro político y administrativo de Nueva España, que fue como los españoles llamaron al territorio conquistado."},
            {ruta: "../img/M02.png", descripcion:"<h2>Nueva España</h2>Fue un territorio con límites difusos que fueron cambiando y ampliándose con el paso de los siglos. En el siglo XVI, los actuales estados de Zacatecas y Durango representaban la parte norte del virreinato, sin embargo, con el tiempo se extendió hacia lo que hoy son California, Arizona, Nuevo México y Texas en Estados Unidos. Hacia el sureste se extendió hasta parte de lo que hoy es Centroamérica."},
            {ruta: "../img/M03.png", descripcion:"<h2>Exploraciones, conquistas y colonización</h2>Además de las exploraciones, conquistas y colonizaciones realizadas por tierra, también se hicieron por mar, en las costas de los actuales estados de Veracruz y Tamaulipas en el Golfo de México, y de Oaxaca a Sinaloa en el océano Pacífico; en el siglo XVIII éstas avanzaron más al norte."},
            {ruta: "../img/M04.png", descripcion:"<h2>Territorio conquistado</h2> Llegó a ser muy extenso establecieron reinos, capitanías y provincias para gobernarlo, como el Reino de Nueva Vizcaya, el Reino de Nueva Galicia, el Reino de Nueva España (México), el Nuevo Reino de León, la Capitanía General de Yucatán, la Capitanía General de Guatemala y las provincias de cohuila o Nueva Extremadura."},
            {ruta: "../img/M05.png", descripcion:"<h2>Puertos en el virreinato</h2>En las costas dos puertos tuvieron gran actividad desde los inicios del Virreinato: Veracruz en el Golfo y Acapulco en el Pacífico. Con el paso del tiempo se fueron creando nuevos puertos comerciales, como el de San Blas y el de Tampico en los actuales estados de Nayarit y Tamaulipas, respectivamente, entre otros."},
            {ruta: "../img/M06.png", descripcion:"<h2>Hacia finales del siglo XVI</h2>Nueva España se había convertido en el centro del comercio internacional debido a su ubicación geográfica, que permitió que recibiera influencias culturales a través del comercio y la migración de personas provenientes de Europa, Asia y África."},

        ],
        memorama: [],
        NOMBRE_IMAGEN_OCULTA: NOMBRE_IMAGEN_OCULTA,
        esperandoTimeout: false,
        animacion: true,
    }),
    methods: {
        voltear(informacion) {
            Swal.fire("Tema", informacion);S
            return;
        },
        reiniciarJuego() {
            let memorama = [];
            this.imagenes.forEach((imagen, indice) => {
                let imagenDeMemorama = {
                    ruta: imagen.ruta,
                    descripcion: imagen.descripcion,
                    mostrar: false,
                    acertada: false,
                };
                memorama.push(imagenDeMemorama);
            });

            let memoramaDividido = [];
            for (let i = 0; i < memorama.length; i += COLUMNAS) {
                memoramaDividido.push(memorama.slice(i, i + COLUMNAS));
            }
            this.memorama = memoramaDividido;
            setTimeout(()=>{ this.animacion = false}, 500);
        },
        cargarImagenes() {
            Swal.fire({
                title: "Cargando",
                html: `Cargando imágenes...`,
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
            Swal.showLoading();

            let total = this.imagenes.length,
                contador = 0;
            let imagenesPrecarga = Array.from(this.imagenes).map(i => i.ruta);
            imagenesPrecarga.push(NOMBRE_IMAGEN_OCULTA);
            imagenesPrecarga.forEach(ruta => {
                const imagen = document.createElement("img");
                imagen.src = ruta;
                imagen.addEventListener("load", () => {
                    contador++;
                    if (contador >= total) {
                        this.reiniciarJuego();
                        Swal.close();
                    }
                });
                document.body.appendChild(imagen);
                document.body.removeChild(imagen);
            });
        },
    },
    mounted() {
        this.cargarImagenes();
    },

});
