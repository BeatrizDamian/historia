const MINIMOS_SEGUNDOS = 25,
    COLUMNAS = 4,
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1,
    NOMBRE_IMAGEN_OCULTA = "../img/logo-dais.png";
new Vue({
    el: "#app",
    data: () => ({
        segundos: MINIMOS_SEGUNDOS,
        idInterval: null,
        audio: null,
        imagenes: [
            "../img/miimg01.png",
            "../img/miimg02.png",
            "../img/miimg03.png",
            "../img/miimg04.png",
            "../img/miimg05.png",
            "../img/miimg06.png",
        ],
        memorama: [],
        ultimasCoordenadas: {
            indiceFila: null,
            indiceImagen: null,
        },
        NOMBRE_IMAGEN_OCULTA: NOMBRE_IMAGEN_OCULTA,
        puntos: 0,
        esperandoTimeout: false,
    }),
    methods: {
        mostrarInstruccion() {
            Swal.fire({
                title: "Instrucción",
                html: `Estamos trabajando en ello.`,
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        },
        comenzarContador() {
            let t = this;
            t.segundos = MINIMOS_SEGUNDOS;
            t.idInterval = setInterval(function() {
                t.segundos--;
                if (t.segundos <= 0) {
                    t.detenerContador();
                    t.indicarFracaso();
                }
            }, 1000);
        },
        reproducirAudio() {
            if (this.audio) {
                this.audio.play();
                return;
            }
            let esto = this;
            let audio = new Audio("../sound/sound.mp3");
            audio.addEventListener("loadeddata", function() {
                this.loop = true;
                this.play().then(() => {
                    esto.audio = this;
                });
            });
        },
        detenerAudio() {
            if (!this.audio) return;
            this.audio.currentTime = 0;
            this.audio.pause();
        },
        detenerContador() {
            if (this.idInterval) {
                clearInterval(this.idInterval);
                this.idInterval = null;
                this.segundos = MINIMOS_SEGUNDOS;
            }
        },
        indicarFracaso() {
            this.detenerAudio();
            Swal.fire({
                    title: `Tiempo Agotado`,
                    html: `
                    <img class="img-fluid" src="../img/perdiste.png" alt="Perdiste">
                    Tuviste <strong>${this.puntos} punto${this.puntos === 1 ? '': 's'}</strong>`,
                    confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
        },
        indicarVictoria() {
            this.detenerAudio();
            Swal.fire({
                    title: "¡Felicidades!",
                    html: `<p class="h4">Venciste al tiempo</p>
                    <img class="img-fluid" src="../img/ganaste.png" alt="Ganaste">
                    Tuviste <strong>${this.puntos} punto${this.puntos === 1 ? '': 's'}</strong>`,
                    confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
        },
        haGanado() {
            return this.memorama.every(arreglo => arreglo.every(imagen => imagen.acertada));
        },
        mezclarArreglo(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        },
        voltear(indiceFila, indiceImagen) {
            this.reproducirAudio();
            if (!this.idInterval) {
                this.comenzarContador();
            }
            if (this.esperandoTimeout) {
                return;
            }
            if (this.memorama[indiceFila][indiceImagen].acertada) {
                return;
            }
            if (this.ultimasCoordenadas.indiceFila === null && this.ultimasCoordenadas.indiceImagen === null) {
                this.memorama[indiceFila][indiceImagen].mostrar = true;
                this.ultimasCoordenadas.indiceFila = indiceFila;
                this.ultimasCoordenadas.indiceImagen = indiceImagen;
                return;
            }
            let imagenSeleccionada = this.memorama[indiceFila][indiceImagen];
            let ultimaImagenSeleccionada = this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen];
            if (indiceFila === this.ultimasCoordenadas.indiceFila &&
                indiceImagen === this.ultimasCoordenadas.indiceImagen) {
                this.memorama[indiceFila][indiceImagen].mostrar = false;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                return;
            }
            this.memorama[indiceFila][indiceImagen].mostrar = true;
            if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
                this.puntos++;
                this.memorama[indiceFila][indiceImagen].acertada = true;
                this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].acertada = true;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                if (this.haGanado()) {
                    this.indicarVictoria();
                }
            } else {
                this.esperandoTimeout = true;
                setTimeout(() => {
                    this.memorama[indiceFila][indiceImagen].mostrar = false;
                    this.memorama[indiceFila][indiceImagen].animacion = false;
                    this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].mostrar = false;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    this.esperandoTimeout = false;
                }, SEGUNDOS_ESPERA_VOLTEAR_IMAGEN * 1000);
            }
        },
        reiniciarJuego() {
            let memorama = [];
            this.imagenes.forEach((imagen, indice) => {
                let imagenDeMemorama = {
                    ruta: imagen,
                    mostrar: false,
                    acertada: false,
                };
                memorama.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
            });
            this.mezclarArreglo(memorama);
            let memoramaDividido = [];
            for (let i = 0; i < memorama.length; i += COLUMNAS) {
                memoramaDividido.push(memorama.slice(i, i + COLUMNAS));
            }
            this.puntos = 0;
            this.memorama = memoramaDividido;
        },
        precargarImagenes() {
            Swal.fire({
                title: "Cargando",
                html: `Cargando imágenes...`,
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
            Swal.showLoading();
            let total = this.imagenes.length,
                contador = 0;
            let imagenesPrecarga = Array.from(this.imagenes);
            imagenesPrecarga.push(NOMBRE_IMAGEN_OCULTA);
            imagenesPrecarga.forEach(ruta => {
                const imagen = document.createElement("img");
                imagen.src = ruta;
                imagen.addEventListener("load", () => {
                    contador++;
                    if (contador > total) {
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
        this.precargarImagenes();
    },
});