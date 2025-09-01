//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = []
let ciudad;

do {
    ciudad = prompt("Escribe una ciudad (cancelar para finalizar)")

    if(ciudad !== null){
        ciudad = ciudad.trim()
        if(ciudad !== ""){
            ciudades.push(ciudad)
        }
    }
} while (ciudad !== null);

document.write(`<br>Ciudades ingresadas: ${ciudades}</br>`);

//Mostrar la longitud del arreglo.
document.write(`<br>La longitud del arreglo es: ${ciudades.length}</br>`)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<br>la primera ciudad es: ${ciudades[0]}, la tercera es:${ciudades[2]} y la ultima ciudad es: ${ciudades[ciudades.length - 1]}</br>`)

//Añade en última posición la ciudad de París.
ciudades.push("Paris")
document.write(`<br>Arreglo con la ciudad Paris agregada: ${ciudades}</br>`)

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<br>El elemento que ocupa la segunda posición es: ${ciudades[1]}</br>`)

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona"
document.write(`<br>Sustituimos el segundo elemento por la ciudad de Barcelona: ${ciudades}</br>`)