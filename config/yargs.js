const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es a base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero multiplico la base'
    })
    .check((argv,options) =>{
        if(isNaN(argv.b && argv.h)){
            throw 'La base y h tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;