const fs = require('fs');
const colors = require('colors');

const crearArchivo =  async(base = 5 , listar = false, hasta = 10) => {
        
    let salida, consola ='';
    
    //Usamos salida para enviar al fs y escribir el archivo y usamos consola que tiene los colores incrustados
    //para mostrar el msj en la consola
    for (let i = 1 ; i <= hasta ; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if(listar){
        console.log('===================='.green);
        console.log('   Tabla del:'.green, colors.blue( base ));
        console.log('===================='.green);
        console.log(consola);
    }
    
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
    return `Tabla-${base}.txt`;

    
}
    
module.exports = {
    crearArchivo
}