//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let textResult = (texto) => {
    if (texto === texto.toUpperCase()){
        document.write(`El texto "${texto}" esta escrito solo con mayusculas`)
    } else if (texto === texto.toLowerCase()) {
        document.write(`El texto "${texto}" esta escrito solo con minusculas`)
    } else {
        document.write(`El texto "${texto}" esta escrito con una combinacion de mayusculas y minusculas`)
    }
}

textResult("hola")