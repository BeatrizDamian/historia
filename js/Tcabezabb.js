
const tiempoTotal = 35;
var segundosActual = tiempoTotal;
puntos = 0;
necesarios =8



tiempo();
function tiempo() {

document.getElementById('countdown').innerHTML = segundosActual;
    if(segundosActual==0){
  console.log('Final');

      Swal.fire({
          title: "¡Se te acabó el tiempo!",
          html: `<img class="img-fluid" src="../img/perdedor.png" alt="Perdiste">`,
          showCancelButton: true,
          confirmButtonText: "Volver a Jugar" ,
          cancelButtonText: 'Cancelar Partida',
          cancelButtonColor:'red',
          allowOutsideClick: false,
          allowEscapeKey: false,

        }).then((result) => {
    			if (result.value) {
    				reiniciarTemporizador();
    			}
        })
        for (var i = 0; i < piezas.length; i++) {
          piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
          piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
        }
      }else{
      segundosActual-=1;
  setTimeout("tiempo()",1000 );
    }
  }

  function reiniciarTemporizador() {
    segundosActual = tiempoTotal;
    tiempo();
  }



  function sumarPuntos(){
     puntos++;
     document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
     randNum =  Math.round(Math.random()*500);
     randNum2 =  Math.round(Math.random()*500);
     document.getElementById("player").style.marginTop =randNum + "px";
     document.getElementById("player").style.marginLeft =randNum2 + "px";
     if (puntos == 8) {
     	alert("ganaste");
     }
  }

	function testing() {
		var bien_ubicada = 0;
		var padres = document.getElementsByClassName('padre');
		for(var i=0;i<piezas.length;i++){
			var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
			var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
			ide = padres[i].getAttribute("id");
			if(origX[ide] == posx && origY[ide] == posy){
				bien_ubicada = bien_ubicada + 1;
				if (origX[ide] == posx && origY[ide] == posy){


				}
			}
		}

		if(bien_ubicada == 9){
			virrey.play();
      Swal.fire({
        title: '<span class = "pie">¡Formaste la  Historia,has Ganado!"</span>',
        html: `<img class="img-fluid" src="../img/premio.png" alt="Ganaste">`,
        showConfirmButton:true,
        confirmButtonText: "Volver a Jugar" ,
        confirmButtonColor:'#00CC33',
        allowOutsideClick: false,
        allowEscapeKey: false,
        footer:'<span class= "pie"><strong> Nota: ¡Espere que Finalice el Audio, para Volver a Jugar!</strong></span>',
        background: ' url("../img/bgq.jpg")',
        timer:37000,
        timerProgressBar: true,
        stopKeydownPropagation:true,


          })
        .then((result) => {
          if (result.value) {
            reiniciarTemporizador();
          }
        })

for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
  piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));


    }
  }
}

function  detenerContador() {
  cleartiempo();
}


var piezas = document.getElementsByClassName('movil');


var tamWidh = [134,192,134,163,134,163,134,192,134];
var tamHeight = [163,134,163,134,192,134,163,134,163];


for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");

}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");


}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	testing();
	if(elementSelect != 0){
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

var entorno = document.getElementById('entorno');

function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

var origX = [200,304,466,200,333,437,200,304,466];
var origY = [100,100,100,233,204,233,337,366,337];

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
