const
    COLUMNAS = 4,
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1,
    NOMBRE_IMAGEN_OCULTA = "../img/logo-dais.png";
new Vue({
    el: "#app",
    data: () => ({
        imagenes: [
            {ruta: "../img/M001.png", descripcion:"<h2>Sociedad de Nueva España</h2>Se integró inicialmente por tres grupos: indígenas, españoles y africanos. Aunque en algunas ciudades se destinaron lugares diferentes para que vivieran los españoles y los indígenas, la convivencia diaria entre ambos grupos favoreció la mezcla de sus costumbres."},
            {ruta: "../img/M002.png", descripcion:"<h2>Los esclavos</h2>Venían de muy lejos eran vendidos a costos muy altos, por lo que la mayoría fueron hombres ya que sus amos los hacían trabajar mucho para recuperar lo que habían invertido en ellos. Aunque la mayoría eran africanos, algunos venían de China, Filipinas o India. También hubo casos en que los españoles esclavizaron indígenas con los que habían peleado durante la Conquista."},
            {ruta: "../img/M003.png", descripcion:"<h2> Mestizaje y las castas</h2>Con el paso del tiempo, la convivencia entre españoles, indígenas y africanos dio origen al mestizaje y a las castas. Los hijos de padres de distintos grupos sociales y étnicos formaban las castas. Según el origen de los padres se daba un nombre diferente a cada casta; por ejemplo, los hijos de un español y una indígena eran llamados mestizos, y los de un español y una africana, mulatos."},
            {ruta: "../img/M004.png", descripcion:"<h2>Diferencias sociales</h2> En Nueva España se determinaban las diferencias sociales con la palabra “calidad”, que se establecía por varias características; por ejemplo, tener la “calidad” de español significaba desempeñar algún oficio o tener una profesión considerada respetable, pertenecer a una familia legítima, comportarse de manera honorable y recibir reconocimiento de las personas de su comunidad."},
            {ruta: "../img/M005.png", descripcion:"<h2>Peninsulares</h2>Los pobladores de Nueva España que habían nacido en España (también llamados peninsulares) formaban el grupo más pequeño y privilegiado de la población; tenían el control económico y político, y desempeñaban importantes puestos en el gobierno."},
            {ruta: "../img/M006.png", descripcion:"<h2>Rey</h2>El gobierno de todas las posesiones españolas en el mundo estaba encabezado por el rey, quien era la autoridad suprema. Gobernaba desde Europa, por medio de instituciones y autoridades que él nombraba."},
            {ruta: "../img/M007.png", descripcion:"<h2>Consejo de Indias</h2>ESe encontraba en España y proponía al rey las políticas para los territorios americanos: elaboraba las leyes, nombraba a los funcionarios, supervisaba la recaudación de impuestos, actuaba como tribunal y recopilaba los registros e informes geográficos e históricos del territorio."},
            {ruta: "../img/M0012.png", descripcion:"<h2>Casa de Contratación de Sevilla</h2>Regulaba desde la península ibérica todo el comercio entre España y los territorios americanos, incluida Nueva España; autorizaba la entrada y salida de los barcos mercantes y de pasajeros; también,llevaba el registro de los metales exportados desde América, como el oro y la plata."},
            {ruta: "../img/M008.png", descripcion:"<h2>Virrey</h2>Lo nombraba el rey como su representante directo. En general, era un noble con experiencia militar; se encargaba de dirigir la política, la economía y la justicia de Nueva España, así como de apoyar a la Iglesia en su labor evangelizadora. Al concluir su mandato, se le sometía a un juicio llamado “de residencia” para dar a conocer su desempeño."},
            {ruta: "../img/M009.png", descripcion:"<h2>Audiencias</h2>Eran tribunales civiles y judicialesencargados de escuchar las quejas de los pobladores, procurar la justicia y aplicar las leyes. Sus miembros eran abogados y ejercían el poder en caso de ausencia del virrey."},
            {ruta: "../img/M0010.png", descripcion:"<h2>Gobernadores</h2>Eran designados por el rey deEspaña. Se encargaban de administrar los reinos novohispanos, llamados provincias, como el de Nueva Galicia, Nuevo León o Nueva Vizcaya, entre otros. Durante la segunda mitad del siglo XVIII, estos territorios se convirtieron en intendencias y quienes las gobernaban eran llamados <em>intendentes</em>."},
            {ruta: "../img/M0011.png", descripcion:"<h2>Cabildo o ayuntamiento</h2>Estaban integradospor grupos de personas que eran seleccionadas de entre los habitantes de su localidad. Se encargaban de resolver los problemas políticos, económicos, administrativos y judiciales de la región a su cargo. En las ciudades se le denominaba ayuntamiento y en las poblaciones con menor número de habitantes, <em>cabildo</em>."},
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
