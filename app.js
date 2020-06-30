const { crearArchivo } = require('./multiplicar/multiplicar')

let base = "as";

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));