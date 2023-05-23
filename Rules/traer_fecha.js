/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function traer_fecha(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    var fecha = new Date(); // crea un objeto de fecha con la fecha y hora actual
var dia = fecha.getDate(); // devuelve el día del mes (de 1 a 31)
var mes = fecha.getMonth() + 1; // devuelve el mes (de 0 a 11, por eso añadimos +1 para obtener de 1 a 12)
var anio = fecha.getFullYear(); // devuelve el año (en formato de 4 dígitos)

var fechaCompleta = anio + "-" + "0"+mes + "-" + dia;

return fechaCompleta;

}
