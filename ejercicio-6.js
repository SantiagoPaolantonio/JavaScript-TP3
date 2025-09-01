//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

//Input:
//lado A = 24
//lado B = 5

//Output: 58

const ladoA = +prompt("Ingresa el primer valor de los lados de un rectangulo")
const ladoB = +prompt("Ingresa el segundo valor de los lados de un rectangulo")

let perimetro = () => {
    let resultado = (2 * (ladoA + ladoB))
    document.write(`El perimetro de tu rectangulo es: ${resultado}`)
}

perimetro()
