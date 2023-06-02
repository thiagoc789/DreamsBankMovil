/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function check_login(clientAPI) {

    var dialog = clientAPI.nativescript.uiDialogsModule; 

    var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue')
    if(resultado == 'Empresa'){
        resultado = 'Donante'
    }

    var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value')
    var contrasena = clientAPI.evaluateTargetPath('#Page:Login/#Control:contrasena/#Value')
    var query = "$filter=identificacion eq '" + identificacion + "' and contrasena eq '" + contrasena + "'";


    return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then((results) => {
        if (results.length > 0) {
            var nombre = results.getItem(0).nombre

            
            var ruta = "/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_MenuNuevoProceso.action"
            return clientAPI.executeAction(ruta)
        } else {

            dialog.alert('Usuario o contraseña incorrecta')
            //BORRAR PROPERTYS

        }
    });

}