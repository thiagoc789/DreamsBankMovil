/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filtroProducto(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var producto = clientAPI.evaluateTargetPath('#Page:Consultas_Producto/#Control:FormCellListPicker0/#SelectedValue')

    if (producto == 'Select'){
        var query = '$expand=aspirante,producto'
        var query2 = '$expand=donante,producto'
    
    }else{
        var query = '$expand=aspirante,producto&$filter=producto_id eq ' + "'" + producto + "'"
        var query2 = '$expand=donante,producto&$filter=producto_id eq ' + "'" + producto + "'"

    }


    var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
    var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');

    var specifier = objectTableAspirantes.getTargetSpecifier();
    specifier.setQueryOptions(query)
    objectTableAspirantes.setTargetSpecifier(specifier);

    var specifier2 = objectTableDonantes.getTargetSpecifier();
    specifier2.setQueryOptions(query2)
    objectTableDonantes.setTargetSpecifier(specifier2);



}
