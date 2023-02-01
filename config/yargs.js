// configuracion de yargs con .option y lo que queramos agregar a nuestra aplicacion, en este caso la base
// el check es para condicionar que por ejemplo la base sea un numero, sino meto throw error
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Limita la tabla hasta X número'
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.base)){
                            throw 'La base debe ser un número'
                        }
                        return true;
                    })
                        .argv;

// exporto por defecto argv
module.exports = argv;
