// require es utilizado para importar
const { crearArchivoMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
 
console.clear();
console.log('|| API created with Node v16.14.0 ||');

console.log(argv)

// el argv.b es lo mismo que argv.base
crearArchivoMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
