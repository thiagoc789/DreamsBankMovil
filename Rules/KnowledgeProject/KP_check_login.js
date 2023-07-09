/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Kp_check_login(clientAPI) {

    var dialog = clientAPI.nativescript.uiDialogsModule; 

    var resultado = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:lp_rol/#SelectedValue')

    if(resultado == 'Aspirante'){
        resultado = 'ASPIRANTE_KP'

    }

    if(resultado == 'Donante'){
        resultado = 'DONANTE_KP'
    }

    dialog.alert(resultado)
    var identificacion = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:identificacion/#Value')
    var contrasena = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:contrasena/#Value')
    var query = "$filter=identificacion eq '" + identificacion + "' and contrasena eq '" + contrasena + "'";


    return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then((results) => {
        if (results.length > 0) {
            var nombre = results.getItem(0).nombre
            
            var ruta = "/DreamsBank/Actions/KnowledgeProject/NavTo_KP_nuevoproceso.action"
            return clientAPI.executeAction(ruta)
        } else {

            dialog.alert('Usuario o contraseña incorrecta')
            //BORRAR PROPERTYS

        }
    });

}