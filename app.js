let fecha = new Date();
fecha.setHours(0);
fecha.setMinutes(0);
fecha.setSeconds(0);
fecha.setMilliseconds(0);


let horaActual;

let intervalo = setInterval(reloj,1000);

let cronometro;




window.addEventListener("load", inicio , true);

function inicio() {

    document.getElementById("Start").addEventListener("click",start, true);
    document.getElementById("Stop").addEventListener("click",stop, true);
    document.getElementById("reset").addEventListener("click",reset, true);
    reloj();
    
}

function start(){
    cronometro= setInterval(cronometroOn,1000)
    document.getElementById("resultado").innerHTML = `ARRANQUE ${rellenar(horaActual.getHours())}: ${rellenar(horaActual.getMinutes())}:${rellenar(horaActual.getSeconds())} <br/>
    ` 
    
}
function stop(){
    clearInterval(cronometro)
    document.getElementById("resultado").innerHTML = `PAUSA: ${rellenar(horaActual.getHours())}: ${rellenar(horaActual.getMinutes())}:${rellenar(horaActual.getSeconds())} <br/>
    ` 
}


function reloj(){
    horaActual= new Date();
    document.getElementById("reloj").innerHTML = `${rellenar(horaActual.getHours())}: ${rellenar(horaActual.getMinutes())}:${rellenar(horaActual.getSeconds())} <br/>
    ` 
}
function rellenar(numero){
    return (numero<10) ? `0${numero}` : numero;
}

function reset(){
    fecha.setHours(0);
    fecha.setMinutes(0);
    fecha.setSeconds(0);
    fecha.setMilliseconds(0);
    document.getElementById("cronometro").innerHTML =` ${rellenar(horaActual.getHours())}: ${rellenar(horaActual.getMinutes())}:${rellenar(horaActual.getSeconds())} <br/>`

}

function cronometroOn(){
    let hours=fecha.getHours(0);
    let minutes=fecha.getMinutes(0);
    let seconds=fecha.getSeconds(0);
    let milliseconds=fecha.getMilliseconds(0);

    fecha.setMilliseconds(fecha.getMilliseconds()+1000);
    document.getElementById("cronometro").innerHTML = `${rellenar(fecha.getHours())}: ${rellenar(fecha.getMinutes())}:${rellenar(fecha.getSeconds())} <br/>`
}
console.log(`${rellenar(),fecha.getHours()}: ${rellenar(),fecha.getMinutes()}:${rellenar(),fecha.getSeconds()} <br/>`)