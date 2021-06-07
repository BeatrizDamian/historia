var app = new Vue({
		el:'#app',
		data:{
			game:true,
			win:false,
			lost:false,
			contador_aciertos:0,
			contador_errores:0,
			contador_palabra:0,
			aleatorio:0,
			palabra_escrita:[],
			botones:[],
			color_botones:[],
			letras:"QWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚ",
			frase:["étnicos","novohispanos","peninsulares","instituciones","intendentes"]
		},	//	End datos


		methods:{


			generarAleatorio:function (){
				this.game = true
				this.win = false
				this.lost = false
				this.palabra_escrita = []
				this.contador_aciertos = 0
				this.contador_errores = 0
				this.contador_palabra= 0
				this.botones = []
				this.color_botones = []
				this.aleatorio = Math.floor(Math.random() * this.frase.length)
				//	Crea un array de la misma longitud de
				for (var i=0;i< this.frase[this.aleatorio].length;i++) {
					this.palabra_escrita.push(' ')

				}

				return this.aleatorio
			},

			pista:function () {
	return this.frase.length + " " +[this.pista]
    this.indicarVictoria();
			},


			comparar: function(caracter,posicion){

				if(this.game){

				contadorFlag = 0

				this.botones[posicion] = true;

				for(i=0;i<=this.palabra_generada.length;i++){
					this.contador_palabra++
					//	Si la letra se encuentra en la palabra
					if(caracter.toLowerCase()==this.palabra_generada[i]){
				     //app.$set(this.palabra_escrita, i, caracter)
				     this.palabra_escrita[i] = caracter
				     contadorFlag++
				     this.contador_aciertos++
					}	//	End if
				}	//	End For

					//	No se encontró la letra
					if(contadorFlag==0){
						this.color_botones[posicion]='rojo'
						this.contador_errores++
					}
					else{

						this.color_botones[posicion]='verde'
					}

				if(this.contador_aciertos==this.palabra_generada.length){

					this.win=true
					Swal.fire({
										title: '<span class = "pie">¡Encontraste la Palabra Oculta ,has Ganado!"</span>',
										html: `<img class="img-fluid" src="../anime/boytwo/ganador.png" alt="Ganaste">`,
										confirmButtonText: "Volver a Jugar",
										confirmButtonColor:'#00CC33',
										allowOutsideClick: false,
										allowEscapeKey: false,
										background: '#FC0',
								})
								  .then(this.generarAleatorio)

	                this.game = false
					} else if (this.frase==3) {
						Swal.fire({
											title: '<span class = "pie">!!!Fin del juego!!!"</span>',
											html: `<img class="img-fluid" src="../anime/boytwo/ganador.png" alt="Ganaste">`,
											confirmButtonText: "Volver a Jugar",
											confirmButtonColor:'#00CC33',
											allowOutsideClick: false,
											allowEscapeKey: false,
											background: '#FC0',
									})

					}


				if(this.contador_errores==5){
					this.lost = true
					Swal.fire({
										title: '<span class = "pie">¡No,Encontraste la Palabra Oculta ,has perdido!"</span>',
										html: `<img class="img-fluid" src="../anime/boytwo/perdedor.png" alt="Ganaste">`,
										confirmButtonText: "Volver a Jugar",
										confirmButtonColor:'#00CC33',
										allowOutsideClick: false,
										allowEscapeKey: false,
										background: '#009999',
								})
									.then(this.generarAleatorio)

					this.game = false

				}

			  }	//	End If Game

			}	//	End comparar

			},	//	End methods
		computed:{
			palabra_generada:function(){
				return this.frase[this.aleatorio]
			},	//	End palabra_generada

		},	//	End computed
		created: function(){
			this.generarAleatorio()
		}



		});	//	End vue
