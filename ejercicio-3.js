//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [];
let repeticion = 1;

for (let i = 1; i <= 50; i++){
    let numero1 = Math.ceil(Math.random() * 6)
    let numero2 = Math.ceil(Math.random() * 6)
    let suma = numero1 + numero2;
    document.write(`<p>La suma entre ${numero1} y ${numero2} es: ${suma}</p>`);
    sumas.push(suma)
}
document.write(`<p> Sumas sin ordenar: ${sumas}</p>`)
sumas.sort((a, b) => a -b)
document.write(`<p> Sumas ordenadas de menor a mayor: ${sumas}</p>`)

for(let j = 0; j < sumas.length; j++){
    if(sumas[j] === sumas[j + 1]){
        repeticion++
    } else {
        document.write(`<p>La suma: ${sumas[j]} tiene ${repeticion} repeticiones</p>`)
        repeticion = 1
    }
}