//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función

const num = +prompt("Ingresa un número")

let numResultado = () => {
    if (num % 2 === 0) {
        document.write(`El número ${num} es par`)
    } else {
        document.write(`El número ${num} es impar`)
    }
}

numResultado()