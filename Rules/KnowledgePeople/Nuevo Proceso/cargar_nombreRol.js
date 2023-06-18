/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function cargar_nombreRol(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule; 
    var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue')
    var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value')
    var query = "$filter=identificacion eq '" + identificacion + "'";
    dialog.alert(resultado)

    return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then((results) => {
        if (results.length > 0) {
            var nombre = results.getItem(0).nombre
            var controlNombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('nombre_proceso'); 
            var controlrol = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('rol'); 
            controlNombre.setValue(nombre) 
            controlrol.setValue(resultado)
            var buttonDonar= clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('donar');
            var buttonAsignarD = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_donante');
            var buttonAsignarA = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_aspirante');
            var buttonAspirar= clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('aspirar');

            if(resultado =='Aspirante'){

                buttonDonar.setVisible(false)
                buttonAsignarA.setVisible(false)
                buttonAsignarD.setVisible(false)
                buttonAspirar.setVisible(true)

            }
            if(resultado =='Donante'){
                
                buttonAspirar.setVisible(false)
                buttonAsignarA.setVisible(false)
                buttonAsignarD.setVisible(false)
                buttonDonar.setVisible(true)

            }

            if(resultado =='Fundacion') {
                buttonDonar.setVisible(false)
                buttonAspirar.setVisible(false)
                buttonAsignarA.setVisible(true)
                buttonAsignarD.setVisible(true)
            }

            
        } else {
            dialog.alert('Usuario no encontrado')

        }
    });

 
}
