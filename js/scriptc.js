var preguntas = [
    "¿En qué parte del código se debe agregar un #include?",
    "¿Con qué letra se hace un retorno de carro?"
    ];
var respuestas = [
    ["Principio","En medio","Final"],
    ["r","n","t"]
];

jugar();

var indicie_respuesta_correcta;

function jugar() {
    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
    var respuestas_posibles = respuestas[indice_aleatorio];
    var posiciones = [0,1,2];
    var respuestas_reordenadas = [];
    var ya_se_metio = false;
    
    for(i in respuestas_posibles) {
        var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
        if(posicion_aleatoria==0 && ya_se_metio == false) {
            indicie_respuesta_correcta =i;
            ya_se_metio = true;
        }
        respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
        posiciones.splice(posicion_aleatoria, 1);
    }
    
    var txt_respuestas="";
    
    for(i in respuestas_reordenadas) {
        txt_respuestas += '<input type="radio" name="pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
    }
    
    document.getElementById("respuestas").innerHTML = txt_respuestas;
    document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];

}

function comprobar() {
    var respuesta = $("input[type=radio]:checked").val();
    
    if(respuesta ==indicie_respuesta_correcta) {
        alert("Excelente!!!");
    } else {
        alert("Suerte en la próxima.");
    }
    jugar();
}