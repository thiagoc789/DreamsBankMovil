/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function tipoProducto(clientAPI) {
    var tipoProducto = clientAPI.evaluateTargetPath('#Page:Producto_Create/#Control:FormCellListPicker0/#SelectedValue')
    var sectionCurso = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('fabricanteCont'); 
    var sectionMatricula = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('universidadCont'); 
    if(tipoProducto == 'Curso'){

        sectionCurso.setVisible(true)
        sectionMatricula.setVisible(false)

    }else{
        
        sectionCurso.setVisible(false)
        sectionMatricula.setVisible(true)

    }
}
