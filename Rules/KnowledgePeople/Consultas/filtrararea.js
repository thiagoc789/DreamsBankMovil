/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function filtrararea(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var area = clientAPI.evaluateTargetPath('#Page:ConsultasPorProducto/#Control:FormCellListPicker1/#SelectedValue')
    

    if (area == 'Select'){
        var query = '$expand=aspirante'
        var query2 = '$expand=empresa'
    
    }else{
        var query = '$expand=aspirante&$filter=area eq ' + "'" + area + "'"
        var query2 = '$expand=empresa&$filter=area eq ' + "'" + area + "'"

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