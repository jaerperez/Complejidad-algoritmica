//const performance=require('perf_hooks');

function contar(n){
    for (let i = 0; i < n ; i++) {
         console.log(i);
    }
}

let inicio_tiempo=performance.now();
contar(5);
let final_tiempo=performance.now();
let duracion=final_tiempo-inicio_tiempo;

console.log("el tiempo es "+ duracion);