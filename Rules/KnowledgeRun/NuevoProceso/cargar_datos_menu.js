/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function cargar_datos_menu(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule; 
    var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue')
    if(resultado == 'Empresa'){
        resultado = 'Donante'
    }
    var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value')
    var query = "$filter=identificacion eq '" + identificacion + "'";

    return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then((results) => {
        if (results.length > 0) {
            var nombre = results.getItem(0).nombre
            var controlNombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('nombre'); 
            var controlrol = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('rol'); 
            controlNombre.setValue(nombre) 
            controlrol.setValue(resultado)

            if(resultado == 'Aspirante'){
                var buttonDonar= clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('donar');
                buttonDonar.setVisible(false)

            }else{
                var buttonAspirar= clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('aspirar');
                buttonAspirar.setVisible(false)
            }

            
        } else {
            dialog.alert('Usuario no encontrado')

        }
    });
}
