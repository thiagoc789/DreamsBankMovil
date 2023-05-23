/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function verTodos(clientAPI) {

    var query = '$expand=aspirante,producto'
    var query2 = '$expand=donante,producto'

var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');

var specifier = objectTableAspirantes.getTargetSpecifier();
specifier.setQueryOptions(query)
objectTableAspirantes.setTargetSpecifier(specifier);

var specifier2 = objectTableDonantes.getTargetSpecifier();
specifier2.setQueryOptions(query2)
objectTableDonantes.setTargetSpecifier(specifier2);
}
