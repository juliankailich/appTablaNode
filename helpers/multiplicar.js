// require es utilizado para importar
const fs = require('fs');
const colors = require('colors');

const crearArchivoMultiplicar = async (base = 5, listar = false, hasta) => {


    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('=================================='.green)
            console.log('          Tabla del'.green, colors.blue(base))
            console.log('=================================='.green)
            console.log(consola);
        }

        // el writeFileSync recibe el path donde crear el archivo, si no enviamos nada lo crea al nivel donde estamos llamando la funcion. Luego recibe el nombre del archivo a crear y la data (salida). Para manejar el error lo deberiamos envolver en un try catch
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

// la manera de exportar en node es con module.exports (que es un objeto y dentro hacemos referencia a lo que necesitemos exportar)
module.exports = {
    crearArchivoMultiplicar
}