/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function seleccionTipoPersonaDonante(clientAPI) {
    var tipoDePersona = clientAPI.evaluateTargetPath('#Page:Donante_Create/#Control:tipoPersona/#SelectedValue')
    var dialog = clientAPI.nativescript.uiDialogsModule; 
    var sectionFormCell = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2'); 
    sectionFormCell.setVisible(true)

    if(tipoDePersona == 'Natural'){
        var web = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('web'); 
        web.setVisible(false)
        web.setValue('No aplica')
        

    }else{
        var web = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('web'); 
        web.setVisible(true)
        web.setValue('')

        var nombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('nombre'); 
        nombre.setCaption('empresa')

        var fechaNacimiento = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('fechaNacimiento'); 
        fechaNacimiento.setCaption('fecha de fundacion')

        var edad = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('edad'); 
        edad.setVisible(false)

        var empresa = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('empresa'); 
        empresa.setCaption('contacto empresa')


        
    }
    



}
