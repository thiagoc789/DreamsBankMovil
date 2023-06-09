/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filtrartipo(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var tipo = clientAPI.evaluateTargetPath('#Page:ConsultasPorProducto/#Control:FormCellListPicker0/#SelectedValue')


    if (tipo == 'Select'){
        var query = '$expand=aspirante'
        var query2 = '$expand=empresa'
    
    }else{
        var query = '$expand=aspirante&$filter=tipo eq ' + "'" + tipo + "'"
        var query2 = '$expand=empresa&$filter=tipo eq ' + "'" + tipo + "'"

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
