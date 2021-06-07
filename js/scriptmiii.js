const
    COLUMNAS = 4,
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1,
    NOMBRE_IMAGEN_OCULTA = "../img/logo-dais.png";
new Vue({
    el: "#app",
    data: () => ({
        imagenes: [
            {ruta: "../img/M0001.png", descripcion:"<h2>Agricultura</h2>Los españoles introdujeron en América nuevas plantas y semillas para la agricultura, lo cual diversificó el cultivo mesoamericano;La agricultura también cambió con la nueva tecnología, es decir, con el empleo de herramientas que se utilizaban en Europa como el arado, los azadones, las hoces, las palas, las tenazas y los molinos, así como con el uso de animales de tiro."},
            {ruta: "../img/M0002.png", descripcion:"<h2>Minería</h2>La obtención de oro y plata fue uno de los objetivos de los viajes de exploración y conquista, y de la consecuente expansión española. Así, desde el siglo XVI se exploraron varios territorios americanos y se descubrieron yacimientos de plata y oro."},
            {ruta: "../img/M0003.png", descripcion:"<h2>Repartimiento</h2>Sistema en el que los pobladores indígenas, de manera forzada y temporal, eran repartidos entre los españoles para que sirvieran de mano de obra en las explotaciones agrícolas y mineras."},
            {ruta: "../img/M0004.png", descripcion:"<h2>Ganadería</h2> Los españoles trajeron a América varias especies de animales, tanto para actividades agrícolas y mineras como para su alimentación. Durante el Virreinato hubo ciertas restricciones para el uso y la posesión de ganado mayor, como vacas y caballos, pero con el tiempo los indígenas incorporaron la crianza de ganado menor, como cabras, cerdos y borregos, y el pastoreo a sus actividades cotidianas."},
            {ruta: "../img/M0005.png", descripcion:"<h2>El caballo</h2>Fue uno de los animales traídos por los españoles que más influyó en la vida cotidiana. Desde su llegada fueron indispensables para que los conquistadores recorrieran la amplia extensión del territorio. "},
            {ruta: "../img/M0006.png", descripcion:"<h2>Comercio</h2>Los productos ganaderos, agrícolas y mineros de Nueva España se distribuían mediante el comercio interno y externo.En Nueva España había una intensa actividad comercial, por lo que se conformaron regiones especializadas en el intercambio de ciertos productos. "},
            {ruta: "../img/M0007.png", descripcion:"<h2>Alcabalas</h2>Algunos productos como el tabaco, el alcohol y los naipes estaban bajo el control de la Corona para obtener el pago de impuestos, llamados <em>alcabalas</em>. Con frecuencia estos bienes eran objeto de contrabando. "},
            {ruta: "../img/M0008.png", descripcion:"<h2>Consulado de Comerciantes</h2>El comercio se volvió tan importante que el rey decidió regularlo, y autorizó la fundación del Consulado de Comerciantes en la Ciudad de México, el cual acaparó las actividades comerciales durante casi todo el periodo del Virreinato, hasta que a mediados del siglo xviii la Corona fundó dos nuevos consulados, en Veracruz y en Guadalajara."},

        ],
        memorama: [],
        NOMBRE_IMAGEN_OCULTA: NOMBRE_IMAGEN_OCULTA,
        esperandoTimeout: false,
        animacion: true,
    }),
    methods: {
        voltear(informacion) {
            Swal.fire("Tema", informacion);
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
