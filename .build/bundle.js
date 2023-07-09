/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5663:
/*!***********************************************************!*\
  !*** ./build.definitions/DreamsBank/i18n/i18n.properties ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ 5186:
/*!****************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/AppUpdateFailure.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/DreamsBank/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ 8079:
/*!****************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/AppUpdateSuccess.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DreamsBank/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DreamsBank/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ 5545:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Consultas/filtrararea.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filtrararea)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filtrararea(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var area = clientAPI.evaluateTargetPath('#Page:ConsultasPorProducto/#Control:FormCellListPicker1/#SelectedValue');
  if (area == 'Select') {
    var query = '$expand=aspirante';
    var query2 = '$expand=empresa';
  } else {
    var query = '$expand=aspirante&$filter=area eq ' + "'" + area + "'";
    var query2 = '$expand=empresa&$filter=area eq ' + "'" + area + "'";
  }
  var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
  var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');
  var specifier = objectTableAspirantes.getTargetSpecifier();
  specifier.setQueryOptions(query);
  objectTableAspirantes.setTargetSpecifier(specifier);
  var specifier2 = objectTableDonantes.getTargetSpecifier();
  specifier2.setQueryOptions(query2);
  objectTableDonantes.setTargetSpecifier(specifier2);
}

/***/ }),

/***/ 8549:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Consultas/filtrartipo.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filtrartipo)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filtrartipo(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var tipo = clientAPI.evaluateTargetPath('#Page:ConsultasPorProducto/#Control:FormCellListPicker0/#SelectedValue');
  if (tipo == 'Select') {
    var query = '$expand=aspirante';
    var query2 = '$expand=empresa';
  } else {
    var query = '$expand=aspirante&$filter=tipo eq ' + "'" + tipo + "'";
    var query2 = '$expand=empresa&$filter=tipo eq ' + "'" + tipo + "'";
  }
  var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
  var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');
  var specifier = objectTableAspirantes.getTargetSpecifier();
  specifier.setQueryOptions(query);
  objectTableAspirantes.setTargetSpecifier(specifier);
  var specifier2 = objectTableDonantes.getTargetSpecifier();
  specifier2.setQueryOptions(query2);
  objectTableDonantes.setTargetSpecifier(specifier2);
}

/***/ }),

/***/ 7536:
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Consultas/filtroProducto.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filtroProducto)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function filtroProducto(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var producto = clientAPI.evaluateTargetPath('#Page:Consultas_Producto/#Control:FormCellListPicker0/#SelectedValue');
  if (producto == 'Select') {
    var query = '$expand=aspirante,producto';
    var query2 = '$expand=donante,producto';
  } else {
    var query = '$expand=aspirante,producto&$filter=producto_id eq ' + "'" + producto + "'";
    var query2 = '$expand=donante,producto&$filter=producto_id eq ' + "'" + producto + "'";
  }
  var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
  var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');
  var specifier = objectTableAspirantes.getTargetSpecifier();
  specifier.setQueryOptions(query);
  objectTableAspirantes.setTargetSpecifier(specifier);
  var specifier2 = objectTableDonantes.getTargetSpecifier();
  specifier2.setQueryOptions(query2);
  objectTableDonantes.setTargetSpecifier(specifier2);
}

/***/ }),

/***/ 5259:
/*!**********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Consultas/verTodos.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verTodos)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function verTodos(clientAPI) {
  var query = '$expand=aspirante,producto';
  var query2 = '$expand=donante,producto';
  var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
  var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');
  var specifier = objectTableAspirantes.getTargetSpecifier();
  specifier.setQueryOptions(query);
  objectTableAspirantes.setTargetSpecifier(specifier);
  var specifier2 = objectTableDonantes.getTargetSpecifier();
  specifier2.setQueryOptions(query2);
  objectTableDonantes.setTargetSpecifier(specifier2);
}

/***/ }),

/***/ 3564:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Consultas/verTodos_KR.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verTodos_KR)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function verTodos_KR(clientAPI) {
  var query = '$expand=aspirante';
  var query2 = '$expand=empresa';
  var objectTableAspirantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable0');
  var objectTableDonantes = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionObjectTable1');
  var specifier = objectTableAspirantes.getTargetSpecifier();
  specifier.setQueryOptions(query);
  objectTableAspirantes.setTargetSpecifier(specifier);
  var specifier2 = objectTableDonantes.getTargetSpecifier();
  specifier2.setQueryOptions(query2);
  objectTableDonantes.setTargetSpecifier(specifier2);
}

/***/ }),

/***/ 3705:
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteConfirmation.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ 6689:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteConfirmation.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ 812:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/seleccionTipoPersonaDonante.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ seleccionTipoPersonaDonante)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function seleccionTipoPersonaDonante(clientAPI) {
  var tipoDePersona = clientAPI.evaluateTargetPath('#Page:Donante_Create/#Control:tipoPersona/#SelectedValue');
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var sectionFormCell = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');
  sectionFormCell.setVisible(true);
  if (tipoDePersona == 'Natural') {
    var web = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('web');
    web.setVisible(false);
    web.setValue('No aplica');
  } else {
    var web = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('web');
    web.setVisible(true);
    web.setValue('');
    var nombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('nombre');
    nombre.setCaption('empresa');
    var fechaNacimiento = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('fechaNacimiento');
    fechaNacimiento.setCaption('fecha de fundacion');
    var edad = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('edad');
    edad.setVisible(false);
    var empresa = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('empresa');
    empresa.setCaption('contacto empresa');
  }
}

/***/ }),

/***/ 4873:
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteConfirmation.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ 6993:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/tipoProducto.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tipoProducto)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function tipoProducto(clientAPI) {
  var tipoProducto = clientAPI.evaluateTargetPath('#Page:Producto_Create/#Control:FormCellListPicker0/#SelectedValue');
  var sectionCurso = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('fabricanteCont');
  var sectionMatricula = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('universidadCont');
  if (tipoProducto == 'Curso') {
    sectionCurso.setVisible(true);
    sectionMatricula.setVisible(false);
  } else {
    sectionCurso.setVisible(false);
    sectionMatricula.setVisible(true);
  }
}

/***/ }),

/***/ 6319:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/cargar_nombreRol.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cargar_nombreRol)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function cargar_nombreRol(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue');
  var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "'";
  dialog.alert(resultado);
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var controlNombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('nombre_proceso');
      var controlrol = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('rol');
      controlNombre.setValue(nombre);
      controlrol.setValue(resultado);
      var buttonDonar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('donar');
      var buttonAsignarD = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_donante');
      var buttonAsignarA = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_aspirante');
      var buttonAspirar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('aspirar');
      if (resultado == 'Aspirante') {
        buttonDonar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonAspirar.setVisible(true);
      }
      if (resultado == 'Donante') {
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonDonar.setVisible(true);
      }
      if (resultado == 'Fundacion') {
        buttonDonar.setVisible(false);
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(true);
        buttonAsignarD.setVisible(true);
      }
    } else {
      dialog.alert('Usuario no encontrado');
    }
  });
}

/***/ }),

/***/ 2634:
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/check_login.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ check_login)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function check_login(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue');
  var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value');
  var contrasena = clientAPI.evaluateTargetPath('#Page:Login/#Control:contrasena/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "' and contrasena eq '" + contrasena + "'";
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var ruta = "/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Menu_proceso.action";
      return clientAPI.executeAction(ruta);
    } else {
      dialog.alert('Usuario o contraseña incorrecta');
      //BORRAR PROPERTYS
    }
  });
}

/***/ }),

/***/ 6278:
/*!*******************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgeProject/KP_check_login.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Kp_check_login)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Kp_check_login(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:lp_rol/#SelectedValue');
  if (resultado == 'Aspirante') {
    resultado = 'ASPIRANTE_KP';
  }
  if (resultado == 'Donante') {
    resultado = 'DONANTE_KP';
  }
  dialog.alert(resultado);
  var identificacion = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:identificacion/#Value');
  var contrasena = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:contrasena/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "' and contrasena eq '" + contrasena + "'";
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var ruta = "/DreamsBank/Actions/KnowledgeProject/NavTo_KP_nuevoproceso.action";
      return clientAPI.executeAction(ruta);
    } else {
      dialog.alert('Usuario o contraseña incorrecta');
      //BORRAR PROPERTYS
    }
  });
}

/***/ }),

/***/ 4996:
/*!**********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgeProject/cargarnombrerolkp.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cargarnombrerolkp)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function cargarnombrerolkp(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:lp_rol/#SelectedValue');
  if (resultado == 'Aspirante') {
    resultado = 'ASPIRANTE_KP';
  }
  if (resultado == 'Donante') {
    resultado = 'DONANTE_KP';
  }
  var identificacion = clientAPI.evaluateTargetPath('#Page:KP_Login/#Control:identificacion/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "'";
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var controlNombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('nombre_proceso');
      var controlrol = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('rol');
      controlNombre.setValue(nombre);
      controlrol.setValue(resultado);
      var buttonDonar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('donar');
      var buttonAsignarD = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_donante');
      var buttonAsignarA = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('asignar_aspirante');
      var buttonAspirar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell1').getControl('aspirar');
      if (resultado == 'ASPIRANTE_KP') {
        buttonDonar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonAspirar.setVisible(true);
      }
      if (resultado == 'DONANTE_KP') {
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonDonar.setVisible(true);
      }
      if (resultado == 'Fundacion') {
        buttonDonar.setVisible(false);
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(true);
        buttonAsignarD.setVisible(true);
      }
    } else {
      dialog.alert('Usuario no encontrado');
    }
  });
}

/***/ }),

/***/ 6749:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgeRun/NuevoProceso/cargar_datos_menu.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cargar_datos_menu)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function cargar_datos_menu(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue');
  if (resultado == 'Empresa') {
    resultado = 'Donante';
  }
  var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "'";
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var controlNombre = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('nombre');
      var controlrol = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('rol');
      controlNombre.setValue(nombre);
      controlrol.setValue(resultado);
      var buttonDonar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('donar');
      var buttonAsignarD = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('asignarxempresa');
      var buttonAsignarA = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('asignarxaspirante');
      var buttonAspirar = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('aspirar');
      if (resultado == 'Aspirante') {
        buttonDonar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonAspirar.setVisible(true);
      }
      if (resultado == 'Donante') {
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(false);
        buttonAsignarD.setVisible(false);
        buttonDonar.setVisible(true);
      }
      if (resultado == 'Fundacion') {
        buttonDonar.setVisible(false);
        buttonAspirar.setVisible(false);
        buttonAsignarA.setVisible(true);
        buttonAsignarD.setVisible(true);
      }
    } else {
      dialog.alert('Usuario no encontrado');
    }
  });
}

/***/ }),

/***/ 8069:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/KnowledgeRun/NuevoProceso/check_login.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ check_login)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function check_login(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var resultado = clientAPI.evaluateTargetPath('#Page:Login/#Control:lp_rol/#SelectedValue');
  if (resultado == 'Empresa') {
    resultado = 'Donante';
  }
  var identificacion = clientAPI.evaluateTargetPath('#Page:Login/#Control:identificacion/#Value');
  var contrasena = clientAPI.evaluateTargetPath('#Page:Login/#Control:contrasena/#Value');
  var query = "$filter=identificacion eq '" + identificacion + "' and contrasena eq '" + contrasena + "'";
  return clientAPI.read('/DreamsBank/Services/dreamsbankmov.service', resultado, [], query).then(results => {
    if (results.length > 0) {
      var nombre = results.getItem(0).nombre;
      var ruta = "/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_MenuNuevoProceso.action";
      return clientAPI.executeAction(ruta);
    } else {
      dialog.alert('Usuario o contraseña incorrecta');
      //BORRAR PROPERTYS
    }
  });
}

/***/ }),

/***/ 6970:
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/OnWillUpdate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ 5474:
/*!*************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/ResetAppSettingsAndLogout.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/DreamsBank/Actions/Logout.action');
  }
}

/***/ }),

/***/ 1046:
/*!***********************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/traer_fecha.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ traer_fecha)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function traer_fecha(clientAPI) {
  var dialog = clientAPI.nativescript.uiDialogsModule;
  var fecha = new Date(); // crea un objeto de fecha con la fecha y hora actual
  var dia = fecha.getDate(); // devuelve el día del mes (de 1 a 31)
  var mes = fecha.getMonth() + 1; // devuelve el mes (de 0 a 11, por eso añadimos +1 para obtener de 1 a 12)
  var anio = fecha.getFullYear(); // devuelve el año (en formato de 4 dígitos)

  var fechaCompleta = anio + "-" + "0" + mes + "-" + dia;
  return fechaCompleta;
}

/***/ }),

/***/ 4078:
/*!********************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 5951);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/api.js */ 1253);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.GreenText {\n  color: #258029;\n}\n.RedText {\n  color: #912a2a;\n}\n.Header {\n  color: #000000;\n}\n.Header2 {\n  color: aquamarine;\n}\n", "",{"version":3,"sources":["webpack://./build.definitions/DreamsBank/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;AACnB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.GreenText {\n  color: #258029;\n}\n.RedText {\n  color: #912a2a;\n}\n.Header {\n  color: #000000;\n}\n.Header2 {\n  color: aquamarine;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 6022:
/*!*********************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.less ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 5951);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/api.js */ 1253);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n.GreenText{\n    color:rgb(37, 128, 41)\n}\n\n.RedText{\n    color:rgb(145, 42, 42)\n\n}\n\n.Header{\n    color: rgb(0, 0, 0);\n\n\n}\n\n.Header2{\n    color: aquamarine;\n}", "",{"version":3,"sources":["webpack://./build.definitions/DreamsBank/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;AAED;IACI;AACJ;;AAEA;IACI;;AAEJ;;AAEA;IACI,mBAAmB;;;AAGvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n.GreenText{\n    color:rgb(37, 128, 41)\n}\n\n.RedText{\n    color:rgb(145, 42, 42)\n\n}\n\n.Header{\n    color: rgb(0, 0, 0);\n\n\n}\n\n.Header2{\n    color: aquamarine;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1689:
/*!**************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.css ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 5951);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/api.js */ 1253);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ns-light .GreenText {\n\tcolor: #258029;\n}\n.ns-light .RedText {\n\tcolor: #912a2a;\n}\n.ns-light .Header {\n\tcolor: #000000;\n}\n.ns-light .Header2 {\n\tcolor: aquamarine;\n}\n", "",{"version":3,"sources":["webpack://./build.definitions/DreamsBank/Styles/Styles.light.css"],"names":[],"mappings":"AAAA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,iBAAiB;AAClB","sourcesContent":[".ns-light .GreenText {\n\tcolor: #258029;\n}\n.ns-light .RedText {\n\tcolor: #912a2a;\n}\n.ns-light .Header {\n\tcolor: #000000;\n}\n.ns-light .Header2 {\n\tcolor: aquamarine;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 5610:
/*!**************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.nss ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 5951);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/api.js */ 1253);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "GreenText {\n\tfont-color: #258029;\n}\nRedText {\n\tfont-color: #912a2a;\n}\nHeader {\n\tfont-color: #000000;\n}\nHeader2 {\n\tfont-color: aquamarine;\n}\n", "",{"version":3,"sources":["webpack://./build.definitions/DreamsBank/Styles/Styles.light.nss"],"names":[],"mappings":"AAAA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,sBAAsB;AACvB","sourcesContent":["GreenText {\n\tfont-color: #258029;\n}\nRedText {\n\tfont-color: #912a2a;\n}\nHeader {\n\tfont-color: #000000;\n}\nHeader2 {\n\tfont-color: aquamarine;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1253:
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 5951:
/*!******************************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.6.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 7977:
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeFactory/Menu_KnowledgeFactory.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0"}],"_Type":"Page","_Name":"Menu_KnowledgeFactory","Caption":"Knowledge Factory","PrefersLargeCaption":true}

/***/ }),

/***/ 3037:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Asignaciones.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion","QueryOptions":"$expand=aspirante,donante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"Aspirante: {aspirante/nombre}","Subhead":"Donante: {donante/nombre}","Footnote":"Producto: {producto/nombre_producto}","Description":"fecha: {fecha_creacion}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Consultas_Asignaciones","Caption":"Asignaciones","PrefersLargeCaption":true}

/***/ }),

/***/ 9406:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Aspirante.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion","QueryOptions":"$expand=aspirante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {producto/nombre_producto}","Footnote":"Carrera: {aspirante/carrera}","Description":"Universidad: {aspirante/universidad}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Styles":{"Subhead":"GreenText"},"Selected":false},"Search":{"Enabled":true,"BarcodeScanner":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Consultas_Aspirante","Caption":"Aspirantes","PrefersLargeCaption":true}

/***/ }),

/***/ 3477:
/*!*********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Donante.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion","QueryOptions":"$expand=donante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{donante/nombre}","Subhead":"Donando: {producto/nombre_producto}","Footnote":"{donante/empresa}","Description":"{donante/ciudad}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{donante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Styles":{"Subhead":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Consultas_Donante","Caption":"Donantes","PrefersLargeCaption":true}

/***/ }),

/***/ 9968:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Producto.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsEditable":true,"IsVisible":true,"Separator":false,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione un producto","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un producto","OnValueChange":"/DreamsBank/Rules/KnowledgePeople/Consultas/filtroProducto.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":true,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Producto"},"DisplayValue":"{nombre_producto}","ReturnValue":"{id}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":false,"Title":"Ver todos","Alignment":"Left","ButtonType":"Text","Semantic":"Normal","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Rules/KnowledgePeople/Consultas/verTodos.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":true,"FooterSeparator":false,"ControlSeparator":false},"Header":{"Styles":{"Caption":"Header"},"_Name":"Header1","AccessoryType":"none","UseTopPadding":true,"Caption":"Aspirantes"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion","QueryOptions":"$expand=aspirante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No se encontraron aspirantes","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {producto/nombre_producto}","Footnote":"Carrera: {aspirante/carrera}","Description":"Aspirante","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Styles":{"Subhead":"GreenText","Description":"RedText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Separators":{"TopSectionSeparator":true,"BottomSectionSeparator":false,"HeaderSeparator":true,"FooterSeparator":false,"ControlSeparator":false},"Header":{"Styles":{"Header":"Header2"},"_Name":"Header","AccessoryType":"none","UseTopPadding":true,"Caption":"Donantes"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion","QueryOptions":"$expand=donante,producto"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"Caption":"No se encontraron donantes","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{donante/nombre}","Subhead":"Donando: {producto/nombre_producto}","Footnote":"{donante/empresa}","Description":"Donante","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{donante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Styles":{"Subhead":"GreenText","Description":"RedText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Consultas_Producto","Caption":"Consultas por producto","PrefersLargeCaption":true}

/***/ }),

/***/ 7586:
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Consultas/Menu_Consultas.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Consultar por aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://education","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_consultas_aspirante.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Consultar por donante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://suitcase","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Donante.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Consultar por producto","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://product","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Producto.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton3","IsVisible":true,"Separator":true,"Title":"Ver asignaciones","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://combine","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_Consultas_Asignaciones.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_Consultas","Caption":"Consultas","PrefersLargeCaption":true}

/***/ }),

/***/ 7037:
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Create.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"edad","Caption":"edad","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fecha de nacimiento","Mode":"Date"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudadNacimiento","Caption":"ciudad de nacimiento"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"universidad","Caption":"universidad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"semestre","Caption":"semestre","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"carrera","Caption":"carrera"},{"Value":"KPP","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"modulo","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Modulo","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Aspirante_Create","Caption":"Crear un Aspirante ","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 5463:
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Detail.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspirante","QueryOptions":""},"Controls":[{"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{identificacion}","Footnote":"{ciudad}","Description":"Edad: {edad}","StatusText":"{correo}","SubstatusText":"{telefono}","DetailImage":"{imagen}","Tags":[],"HeadlineText":"{nombre}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"KeyAndValues":[{"Value":"{identificacion}","_Name":"KeyValue0","KeyName":"identificacion"},{"Value":"{nombre}","_Name":"KeyValue1","KeyName":"nombre"},{"Value":"{edad}","_Name":"KeyValue2","KeyName":"edad"},{"Value":"{ciudad}","_Name":"KeyValue3","KeyName":"ciudad"},{"Value":"{semestre}","_Name":"KeyValue5","KeyName":"semestre"},{"Value":"{carrera}","_Name":"KeyValue6","KeyName":"carrera"},{"Value":"{fechaNacimiento}","_Name":"KeyValue7","KeyName":"Fecha de nacimiento"},{"Value":"{telefono}","_Name":"KeyValue9","KeyName":"telefono"},{"Value":"{correo}","_Name":"KeyValue10","KeyName":"correo"},{"Value":"{direccion}","_Name":"KeyValue11","KeyName":"direccion"},{"Value":"{universidad}","_Name":"KeyValue12","KeyName":"universidad","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Aspirante_Detail","Caption":"Aspirante Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Edit.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteConfirmation.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 5906:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Edit.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspirante","QueryOptions":""},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":false,"Caption":"identificacion"},{"Value":"{nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"Value":"{edad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"edad","Caption":"edad","KeyboardType":"Number"},{"Value":"{ciudad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"Value":"{universidad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"universidad","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"universidad","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{semestre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"semestre","Caption":"semestre","KeyboardType":"Number"},{"Value":"{carrera}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"carrera","Caption":"carrera"},{"Value":"{fechaNacimiento}","_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fechaNacimiento","Mode":"Date"},{"Value":"{ciudadNacimiento}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudadNacimiento","Caption":"ciudadNacimiento"},{"Value":"{telefono}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono"},{"Value":"{correo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"Value":"{direccion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Aspirante_Edit","Caption":"Update Aspirante Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 1281:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_List.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspirante","QueryOptions":"$filter=modulo eq 'KPP'"},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"Cedula: {identificacion}","Footnote":"Universidad: {universidad}","Description":"Edad: {edad}","StatusText":"{telefono}","SubstatusText":"{correo}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Aspirante_List","Caption":"Aspirante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 7946:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Create.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":[],"_Type":"Control.Type.FormCell.ListPicker","_Name":"tipoPersona","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Tipo de persona","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/seleccionTipoPersonaDonante.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":["Natural","Juridica"]}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"},{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fecha de nacimiento","Mode":"Date"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"edad","Caption":"edad","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"empresa","Caption":"empresa"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"},{"Value":"KPP","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"modulo","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Modulo","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":false,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell2"}]}],"_Type":"Page","_Name":"Donante_Create","Caption":"Crear un donante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 7869:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Detail.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante","QueryOptions":""},"Controls":[{"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{identificacion}","Footnote":"{empresa}","Description":"{ciudad}","StatusText":"{correo}","SubstatusText":"{telefono}","Tags":[],"HeadlineText":"{nombre}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"KeyAndValues":[{"Value":"{identificacion}","_Name":"KeyValue0","KeyName":"identificacion"},{"Value":"{tipo}","_Name":"KeyValue1","KeyName":"tipo"},{"Value":"{nombre}","_Name":"KeyValue2","KeyName":"nombre"},{"Value":"{ciudad}","_Name":"KeyValue4","KeyName":"ciudad"},{"Value":"{empresa}","_Name":"KeyValue5","KeyName":"empresa"},{"Value":"{telefono}","_Name":"KeyValue6","KeyName":"telefono"},{"Value":"{correo}","_Name":"KeyValue7","KeyName":"correo"},{"Value":"{web}","_Name":"KeyValue9","KeyName":"web"},{"Value":"{direccion}","_Name":"KeyValue10","KeyName":"direccion"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Donante_Detail","Caption":"Donante Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Edit.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteConfirmation.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 2356:
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Edit.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante","QueryOptions":""},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":false,"Caption":"identificacion"},{"Value":"{nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"Value":"{edad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"edad","Caption":"edad","KeyboardType":"Number"},{"Value":"{ciudad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"Value":"{empresa}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"empresa","Caption":"empresa"},{"Value":"{telefono}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono"},{"Value":"{correo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"Value":"{web}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"},{"Value":"{direccion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"Value":"{fechaNacimiento}","_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fechaNacimiento","Mode":"Date"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Donante_Edit","Caption":"Update Donante Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 6140:
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_List.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante","QueryOptions":"$filter=modulo eq 'KPP'"},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"{empresa}","Footnote":"{identificacion}","Description":"Persona: {tipo}","StatusText":"{correo}","SubstatusText":"{telefono}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Donante_List","Caption":"Donante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 2387:
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Menu_DatosMaestros.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"Aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"https://cdn-icons-png.flaticon.com/512/3523/3523407.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_List.action"},{"_Name":"SectionButton1","Title":"Donante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"https://cdn-icons-png.flaticon.com/512/610/610120.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_List.action"},{"_Name":"SectionButton2","Title":"Producto","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"https://cdn-icons-png.flaticon.com/512/4762/4762311.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_List.action"}]}]}],"_Type":"Page","_Name":"Menu_DatosMaestros","Caption":"Registrarse","PrefersLargeCaption":true}

/***/ }),

/***/ 9276:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Create.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id","Caption":"id","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre_producto","Caption":"nombre producto"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"descripcion","Caption":"descripcion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"valor","Caption":"valor","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"modalidad","Caption":"modalidad"},{"Value":[],"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"tipo de producto","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/tipoProducto.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":["Curso","Matricula"]}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Visible":false,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"fabricanteCont","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"fabricante","Caption":"fabricante"}]},{"Visible":false,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"universidadCont","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"universidad","Caption":"universidad"}]}]}],"_Type":"Page","_Name":"Producto_Create","Caption":"Create Producto Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 5104:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Detail.page ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Producto","QueryOptions":""},"Controls":[{"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"Valor: ${valor}","Footnote":"Id: {id}","Description":"{descripcion}","StatusText":"{tipo}","SubstatusText":"{modalidad}","Tags":[],"HeadlineText":"{nombre_producto}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"KeyAndValues":[{"Value":"{id}","_Name":"KeyValue0","KeyName":"id"},{"Value":"{nombre_producto}","_Name":"KeyValue1","KeyName":"nombre_producto"},{"Value":"{descripcion}","_Name":"KeyValue2","KeyName":"descripcion"},{"Value":"{valor}","_Name":"KeyValue3","KeyName":"valor"},{"Value":"{tipo}","_Name":"KeyValue4","KeyName":"tipo"},{"Value":"{modalidad}","_Name":"KeyValue5","KeyName":"modalidad"},{"Value":"{ciudad}","_Name":"KeyValue6","KeyName":"ciudad"},{"Value":"{universidad}","_Name":"KeyValue7","KeyName":"universidad"},{"Value":"{fabricante}","_Name":"KeyValue8","KeyName":"fabricante"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Producto_Detail","Caption":"Producto Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Edit.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteConfirmation.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 6994:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Edit.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Producto","QueryOptions":""},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id","IsEditable":false,"Caption":"id"},{"Value":"{nombre_producto}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre_producto","Caption":"nombre_producto"},{"Value":"{descripcion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"descripcion","Caption":"descripcion"},{"Value":"{valor}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"valor","Caption":"valor"},{"Value":"{tipo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tipo","Caption":"tipo"},{"Value":"{modalidad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"modalidad","Caption":"modalidad"},{"Value":"{ciudad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"Value":"{universidad}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"universidad","Caption":"universidad"},{"Value":"{fabricante}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"fabricante","Caption":"fabricante"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Producto_Edit","Caption":"Update Producto Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 3756:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_List.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"Producto","Service":"/DreamsBank/Services/dreamsbankmov.service","QueryOptions":""},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"Title":"{nombre_producto}","Subhead":"Valor: ${valor}","Footnote":"Tipo: {tipo}","Description":"{descripcion}","StatusText":"Id: {id}","SubstatusText":"{modalidad}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Detail.action","ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Producto_List","Caption":"Producto","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 7866:
/*!**************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Menu_KnowledgePeople.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"DetailImage":"/DreamsBank/Images/innovar.png","DetailImageIsCircular":false,"HeadlineText":"Aportes economicos o de conocimiento a Aspirantes","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Datos Maestros","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://add-contact","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/NavTo_MenuDatosMaestros.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Nuevo Proceso","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://manager","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Login.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Consultas","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://information","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_MenuConsultas.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_KnowledgePeople","Caption":"Knowledge People","PrefersLargeCaption":true}

/***/ }),

/***/ 6075:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_Resumen.page ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"#Page:AsignarXDonante_SeleccionAspirante/#Control:donante_asignar/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Donante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Aspirante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:AsignarXDonante_SeleccionAspirante/#Control:producto_asignar/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Producto","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Asignar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_CreatexDonante.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{aspirante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idAspirante_Asignar","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Id aspirante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:AsignarXDonante_SeleccionAspirante/#Control:id_donante_asignar/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idDonante_Asignar","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Id donante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:AsignarXDonante_SeleccionAspirante/#Control:id_asignarXDonante/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty3","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":false,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"}]}],"_Type":"Page","_Name":"AsignarXDonante_Resumen","Caption":"Resumen","PrefersLargeCaption":true}

/***/ }),

/***/ 2308:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_SeleccionAspirante.page ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{donante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"donante_asignar","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Donante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{producto/nombre_producto}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"producto_asignar","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Producto","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{producto/id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_asignarXDonante","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{donante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_donante_asignar","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"ID donante","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion","QueryOptions":"$expand=aspirante,producto&$filter=producto_id eq '{producto/id}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {producto/nombre_producto}","Footnote":"Carrera: {aspirante/carrera}","Description":"Universidad: {aspirante/universidad}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_Resumen.action","Styles":{"Subhead":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarXDonante_SeleccionAspirante","Caption":"Seleccione un aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 9618:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_AspiranteResumen.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":"#Page:Asignar_SeleccionDonante/#Control:aspirante_seleccionDonante/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirante_resumen","IsEditable":false,"IsVisible":true,"Caption":"Aspirante","Enabled":true},{"Value":"{donante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"donante_resumen","IsEditable":false,"IsVisible":true,"Caption":"Donante","Enabled":true},{"Value":"#Page:Asignar_SeleccionDonante/#Control:producto_asignar/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"producto_resumen","IsEditable":false,"IsVisible":true,"Caption":"Producto","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Asignar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_Create.action"},{"Value":"#Page:Asignar_SeleccionDonante/#Control:id_aspirante/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_aspiranteResumen","IsEditable":true,"IsVisible":false,"Caption":"ID aspirante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{donante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_donanteResumen","IsEditable":true,"IsVisible":false,"Caption":"ID donante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:Asignar_SeleccionDonante/#Control:id_producto_asignar/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsEditable":true,"IsVisible":false,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true}]}],"_Type":"Page","_Name":"Asignar_AspiranteResumen","Caption":"Resumen"}

/***/ }),

/***/ 4572:
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionAspirante.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion","QueryOptions":"$expand=aspirante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {producto/nombre_producto}","Footnote":"Carrera: {aspirante/carrera}","Description":"Universidad: {aspirante/universidad}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}"}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionDonante.action","Styles":{"Subhead":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Asignar_SeleccionAspirante","Caption":"Seleccione un aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 8521:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionDonante.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{aspirante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirante_seleccionDonante","IsEditable":false,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Aspirante: ","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{producto/nombre_producto}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"producto_asignar","IsEditable":true,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Producto:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{producto/id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_producto_asignar","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"IdProducto","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_aspirante","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"id_aspirante","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion","QueryOptions":"$expand=donante,producto&$filter=producto/id eq '{producto/id}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{donante/nombre}","Subhead":"Donando: {producto/nombre_producto}","Footnote":"{donante/empresa}","Description":"{donante/ciudad}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{donante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_AspiranteResumen.action","Styles":{"Subhead":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Asignar_SeleccionDonante","Caption":"Seleccione un donante","PrefersLargeCaption":true}

/***/ }),

/***/ 7957:
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarxDonante_SeleccionDonante.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion","QueryOptions":"$expand=donante,producto"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{donante/nombre}","Subhead":"Donando: {producto/nombre_producto}","Footnote":"{donante/empresa}","Description":"{donante/ciudad}","DisplayDescriptionInMobile":true,"SubstatusText":"Tel: {donante/telefono}","PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{donante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionAspirante.action","Styles":{"Subhead":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarxDonante_SeleccionDonante","Caption":"Seleccione un donante","PrefersLargeCaption":true}

/***/ }),

/***/ 6283:
/*!***************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Aspirar.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":"#Page:Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idAspirar","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Identificacion","Enabled":true},{"Value":"#Page:Menu_proceso/#Control:nombre_proceso/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombreAspirar","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Nombre","Enabled":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione un producto","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione el producto al cual va a aspirar","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true},"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Producto"},"ObjectCell":{"AccessoryType":"none","Description":"{descripcion}","DetailImage":"{imagen}","DetailImageIsCircular":false,"Footnote":"Precio: ${valor}","Icons":[],"PreserveIconStackSpacing":false,"StatusText":"Id: {id}","Styles":{},"Subhead":"{tipo}","SubstatusText":"{modalidad}","Title":"{nombre_producto}"},"ReturnValue":"{id}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspiracion_Create.action"}],"Visible":true}]}],"_Type":"Page","_Name":"Aspirar","Caption":"Aspirar"}

/***/ }),

/***/ 5257:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Donar.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":"#Page:Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion_donar","IsEditable":false,"IsVisible":true,"Caption":"Identificacion","Enabled":true},{"Value":"#Page:Menu_proceso/#Control:nombre_proceso/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsEditable":false,"IsVisible":true,"Caption":"Nombre","Enabled":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"listpicker_donar","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione un producto","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Producto"},"ObjectCell":{"Description":"{descripcion}","DetailImage":"{imagen}","DetailImageIsCircular":false,"Footnote":"Precio: ${valor}","Icons":[],"PreserveIconStackSpacing":false,"StatusText":"Id: {id}","Styles":{},"Subhead":"{tipo}","SubstatusText":"{modalidad}","Title":"{nombre_producto}"},"ReturnValue":"{id}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Donar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donacion_Create.action"}],"Visible":true}]}],"_Type":"Page","_Name":"Donar","Caption":"Donar"}

/***/ }),

/***/ 9397:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Login.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"lp_rol","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione su rol","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":["Aspirante","Donante","Fundacion"]},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":true,"IsVisible":true,"Caption":"Identificacion","KeyboardType":"Number","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","IsEditable":true,"IsVisible":true,"Caption":"Contraseña","KeyboardType":"Password","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Ingresar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://feeder-arrow","ImagePosition":"Leading","OnPress":"/DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/check_login.js"}],"Visible":true}]}],"_Type":"Page","_Name":"Login","Caption":"Login"}

/***/ }),

/***/ 2314:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Menu_proceso.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre_proceso","IsEditable":false,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Logueado como: ","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"rol","IsEditable":false,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Rol: ","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"aspirar","IsVisible":true,"Separator":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Aspirar.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"donar","IsVisible":true,"Separator":true,"Title":"Donar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Donar.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignar_aspirante","IsVisible":true,"Separator":true,"Title":"Asignar por aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionAspirante.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignar_donante","IsVisible":true,"Separator":true,"Title":"Asignar por donante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionDonante.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"}]}],"_Type":"Page","_Name":"Menu_proceso","Caption":"Nuevo proceso","PrefersLargeCaption":true,"OnLoaded":"/DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/cargar_nombreRol.js"}

/***/ }),

/***/ 1086:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_Create.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ceo","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"CEO","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell2"}]}],"_Type":"Page","_Name":"Aspirante_Create","Caption":"Crear una empresa Aspirante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgeProject/Create_AspiranteKP.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 4251:
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_List.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"ASPIRANTE_KP","QueryOptions":""},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"{CEO}","Footnote":"{identificacion}","Description":"Ciudad: {ciudad}","StatusText":"{correo}","SubstatusText":"{telefono}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Aspirante_List","Caption":"Empresa Aspirante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Aspirante_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 1140:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_Create.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ceo","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"CEO","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell2"}]}],"_Type":"Page","_Name":"Donante_Create","Caption":"Crear una empresa Donante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgeProject/Create_Donante_KP.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 7913:
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_List.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"DONANTE_KP","QueryOptions":""},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"{CEO}","Footnote":"{identificacion}","Description":"Ciudad: {ciudad}","StatusText":"{correo}","SubstatusText":"{telefono}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Donante_List","Caption":"Empresa Donante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Donante_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 9364:
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_Create.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ceo","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"CEO","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell2"}]}],"_Type":"Page","_Name":"Fabricante_Create","Caption":"Crear un Fabricante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgeProject/Create_Fabricante_KP.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 5264:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_List.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"FABRICANTE_KP","QueryOptions":""},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"{CEO}","Footnote":"{identificacion}","Description":"Ciudad: {ciudad}","StatusText":"{correo}","SubstatusText":"{telefono}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Fabricante_List","Caption":"Lista de fabricantes","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 1865:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Menu_DatosMaestros.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Empresa aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_AspiranteList.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Empresa donante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_DonanteList.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Fabricante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_List.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_DatosMaestros","Caption":"Datos Maestros","PrefersLargeCaption":true}

/***/ }),

/***/ 8126:
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Menu_KnowledgeProject.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"DetailImage":"/DreamsBank/Images/usersmanagment.png","DetailImageIsCircular":false,"HeadlineText":"Ayuda a empresas con proyectos","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Datos Maestros","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://add-contact","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Menu_DatosMaestros.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Nuevo Proceso","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://manager","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Login_KP.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Consultas","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://information","ImagePosition":"Leading"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_KnowledgeProject","Caption":"Knowledge Project","PrefersLargeCaption":true}

/***/ }),

/***/ 5874:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Asignarxaspirante.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KProject","QueryOptions":"$expand=aspirante"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{aspirante/nombre}","Subhead":"{aspirante/CEO}","Footnote":"{area}","Description":"{descripcion}","DisplayDescriptionInMobile":true,"StatusText":"Tiempo: {tiempo_estimado}","SubstatusText":"Valor: ${presupuesto}","PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_seleccionDonante.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Asignarxaspirante","Caption":"Asignar por aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 8333:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Aspirar_KP.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":"#Page:KP_Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idAspirar","IsEditable":false,"IsVisible":true,"Caption":"Identificacion","Enabled":true},{"Value":"#Page:Menu_nuevoproceso/#Control:nombre_proceso/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombreAspirar","IsEditable":false,"IsVisible":true,"Caption":"Nombre","Enabled":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"area","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione una area","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Area"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"descripcion","IsEditable":true,"IsVisible":true,"Caption":"Descripción:","PlaceHolder":"Descripción del proyecto...","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"valor_estimado","IsEditable":true,"IsVisible":true,"Caption":"Valor:","PlaceHolder":"Valor estimado...","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tiempo_estimado","IsEditable":true,"IsVisible":true,"Caption":"Tiempo:","PlaceHolder":"Tiempo estimado","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/Create_AspiracionKP.action"}],"Visible":true}]}],"_Type":"Page","_Name":"Aspirar_KP","Caption":"Aspirar"}

/***/ }),

/***/ 7855:
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Donar_KP.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":"#Page:KP_Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idAspirar","IsEditable":false,"IsVisible":true,"Caption":"Identificacion","Enabled":true},{"Value":"#Page:Menu_nuevoproceso/#Control:nombre_proceso/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombreAspirar","IsEditable":false,"IsVisible":true,"Caption":"Nombre","Enabled":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"area","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione una area","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Area"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"descripcion","IsEditable":true,"IsVisible":true,"Caption":"Descripción:","PlaceHolder":"Que tipo de proyectos puede donar del area escogida...","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"valor_estimado","IsEditable":true,"IsVisible":true,"Caption":"Valor:","PlaceHolder":"Valor tope de proyectos para donar...","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tiempo_estimado","IsEditable":true,"IsVisible":true,"Caption":"Tiempo:","PlaceHolder":"Tiempo maximo de proyectos para donar...","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Donar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/Create_Donar_KP.action"}],"Visible":true}]}],"_Type":"Page","_Name":"Donar_KP","Caption":"Donar"}

/***/ }),

/***/ 1905:
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/KP_Login.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"lp_rol","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione su rol","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":["Aspirante","Donante","Fundacion"]},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":true,"IsVisible":true,"Caption":"Identificacion","KeyboardType":"Number","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","IsEditable":true,"IsVisible":true,"Caption":"Contraseña","KeyboardType":"Password","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Title":"Ingresar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://feeder-arrow","ImagePosition":"Leading","OnPress":"/DreamsBank/Rules/KnowledgeProject/KP_check_login.js"}],"Visible":true}]}],"_Type":"Page","_Name":"KP_Login","Caption":"Login"}

/***/ }),

/***/ 2184:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Menu_nuevoproceso.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre_proceso","IsEditable":false,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Logueado como: ","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"rol","IsEditable":false,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Rol: ","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"aspirar","IsVisible":true,"Separator":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Aspirar_KP.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"donar","IsVisible":true,"Separator":true,"Title":"Donar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_Donar_KP.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignar_aspirante","IsVisible":true,"Separator":true,"Title":"Asignar por aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_asignarxaspirante_KP.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignar_donante","IsVisible":true,"Separator":true,"Title":"Asignar por donante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionDonante.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"}]}],"_Type":"Page","_Name":"Menu_nuevoproceso","Caption":"Nuevo proceso","PrefersLargeCaption":true,"OnLoaded":"/DreamsBank/Rules/KnowledgeProject/cargarnombrerolkp.js"}

/***/ }),

/***/ 6659:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/resumenxaspirante.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"#Page:seleccionDonante/#Control:aspirantenombre/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Aspirante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:seleccionFabricante/#Control:donantenombre/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Donante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:seleccionFabricante/#Control:listpickerfabricante/#SelectedValue","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty3","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Fabricante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:seleccionDonante/#Control:kparea/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty4","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Area:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:seleccionDonante/#Control:kpvalor/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Valor: ","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:seleccionDonante/#Control:kptiempo/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty5","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Tiempo:","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Asignar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/asignacionxaspirante_Create.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"resumenxaspirante","Caption":"Resumen","PrefersLargeCaption":true}

/***/ }),

/***/ 8018:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/seleccionFabricante.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{donante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"donanteid","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"donanteid","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{donante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"donantenombre","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"donantenombre","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"listpickerfabricante","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione un fabricante","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un fabricante","HelperText":"Dejar en blanco si no se asigna un fabricante","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"FABRICANTE_KP"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Ver resumen","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_KPresumenaspirante.action"}]}]}],"_Type":"Page","_Name":"seleccionFabricante","Caption":"Fabricante","PrefersLargeCaption":true}

/***/ }),

/***/ 6888:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/selecicionDonante.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1","Controls":[{"Value":"{aspirante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspiranteid","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"aspiranteid","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{area}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"kparea","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{tiempo_estimado}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"kptiempo","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{presupuesto}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"kpvalor","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirantenombre","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"aspirantenombre","PlaceHolder":"PlaceHolder","Enabled":true}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KProject","QueryOptions":"$expand=donante&$filter=area eq '{area}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{donante/nombre}","Subhead":"{donante/CEO}","Footnote":"{area}","Description":"{descripcion}","DisplayDescriptionInMobile":true,"StatusText":"Tiempo: {tiempoTope}","SubstatusText":"Valor: ${valorTope}","PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{donante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_SeleccionFabricante.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"seleccionDonante","Caption":"Seleccion Donante","PrefersLargeCaption":true}

/***/ }),

/***/ 394:
/*!*********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultaPorAspirante.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KR","QueryOptions":"$expand=aspirante"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {tipo}","Footnote":"Area: {area}","Description":"{fecha_creacion}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ConsultaPorAspirante","Caption":"Consulta por aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 9644:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorAsignacion.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion_KR","QueryOptions":"$expand=aspirante,empresa"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"Aspirante: {aspirante/nombre}","Subhead":"Empresa: {empresa/nombre}","Footnote":"Tipo: {tipo}","Description":"Area: {area}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ConsultasPorAsignacion","Caption":"Consulta por asignación","PrefersLargeCaption":true}

/***/ }),

/***/ 4565:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorEmpresa.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KR","QueryOptions":"$expand=empresa"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{empresa/nombre}","Subhead":"Buscando: {tipo}","Footnote":"Area: {area}","Description":"{fecha_creacion}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{empresa/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ConsultasPorEmpresa","Caption":"Consulta por empresa","PrefersLargeCaption":true}

/***/ }),

/***/ 2178:
/*!*********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorProducto.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"FastFilters":[{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter0","Label":"Aspirantes","DisplayValue":"Aspirantes","ReturnValue":"Aspirantes","FilterType":"Filter"},{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter1","Label":"Empresas","DisplayValue":"Empresas","ReturnValue":"Empresas","FilterType":"Filter"}],"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":[],"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione un tipo","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un tipo de aspiración para filtrar","OnValueChange":"/DreamsBank/Rules/KnowledgePeople/Consultas/filtrartipo.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":["Pasantia","Practica","Primer Empleo"]},{"Value":["{nombre}"],"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker1","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione un area","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","OnValueChange":"/DreamsBank/Rules/KnowledgePeople/Consultas/filtrararea.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Area"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Ver todos","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Rules/KnowledgePeople/Consultas/verTodos_KR.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":true,"Caption":"Aspirantes"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KR","QueryOptions":"$expand=aspirante"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"{tipo}","Footnote":"{area}","Description":"Aspirantes","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Header":{"_Name":"SectionHeader1","AccessoryType":"none","UseTopPadding":true,"Caption":"Empresas"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KR","QueryOptions":"$expand=empresa"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{empresa/nombre}","Subhead":"{tipo}","Footnote":"{area}","Description":"Empresas","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{empresa/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ConsultasPorProducto","Caption":"Consultar por producto","PrefersLargeCaption":true}

/***/ }),

/***/ 991:
/*!***************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Consultas/Menu_Consultas.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Consultar por aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorAspirante.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Consultar por empresa","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_consultasporEmpresa.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Consultar asignaciones","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorasignacion.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton3","IsVisible":true,"Separator":true,"Title":"Consultar por producto","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Consultas/NavToConsutlasPorProducto_KR.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_Consultas","Caption":"Consultas","PrefersLargeCaption":true}

/***/ }),

/***/ 2777:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_Create.page ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"nombre"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"edad","Caption":"edad","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fecha de nacimiento","Mode":"Date"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudadNacimiento","Caption":"ciudad de nacimiento"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"generico1","Caption":"universidad"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"semestre","Caption":"semestre","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"carrera","Caption":"carrera"},{"Value":"KR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"modulo","IsEditable":true,"IsVisible":false,"Separator":true,"Caption":"Modulo","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Aspirante_Create","Caption":"Crear un aspirante","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 7727:
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_List.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspirante","QueryOptions":"$filter=modulo eq 'KR'"},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"Cedula: {identificacion}","Footnote":"Universidad: {universidad}","Description":"Edad: {edad}","StatusText":"{telefono}","SubstatusText":"{correo}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Aspirante_List","Caption":"Aspirantes","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspirantesCreateKR.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 1927:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_Create.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","Caption":"identificacion","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","Caption":"contrasena","KeyboardType":"Password"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","Caption":"empresa"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"direccion","Caption":"direccion"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ciudad","Caption":"ciudad"},{"_Type":"Control.Type.FormCell.DatePicker","_Name":"fechaNacimiento","Caption":"fecha de fundacion","Mode":"Date"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"empresa","Caption":"contacto empresa"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"telefono","Caption":"telefono","KeyboardType":"Number"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"correo","Caption":"correo"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"web","Caption":"web"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell2"}]}],"_Type":"Page","_Name":"Empresa_Create","Caption":"Empresa_Create","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/Create_empresa.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 6688:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_List.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante","QueryOptions":"$filter=modulo eq 'KR'"},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{nombre}","Subhead":"{empresa}","Footnote":"{identificacion}","Description":"Persona: {tipo}","StatusText":"{correo}","SubstatusText":"{telefono}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{imagen}"}],"ImageIsCircular":false},"OnPress":"/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Empresa_List","Caption":"Empresas","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaCreate.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ 8574:
/*!************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Datos maestros/Menu_DatosMaestros.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://study-leave","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspiranteList.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Empresa","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://business-by-design","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaList.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_DatosMaestros","Caption":"Registrarse","PrefersLargeCaption":true}

/***/ }),

/***/ 4104:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Menu_KnowledgeRun.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"DetailImage":"/DreamsBank/Images/area_trabajo.png","DetailImageIsCircular":false,"HeadlineText":"Conectar las pasantias practicas y primeros empleos","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Datos maestros","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://add-contact","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/NavTo_MenuDatosMaestros.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Nuevo proceso","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://manager","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Login.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Consultas","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://information","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_MenuConsultas.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Menu_KnowledgeRun","Caption":"Knowledge Run","PrefersLargeCaption":true}

/***/ }),

/***/ 4492:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KR","QueryOptions":"$expand=aspirante"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {tipo}","Footnote":"Area: {area}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Asignarxaspirante_seleccionempresa.action","Styles":{"Subhead":"GreenText","Footnote":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarXaspirante","Caption":"Seleccionar aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 5112:
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante_SeleccionEmpresa.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{aspirante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirante_nombre","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Aspirante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{tipo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Tipo:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{area}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty3","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Area:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idAspirante","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Id_aspirante","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KR","QueryOptions":"$expand=empresa&$filter=tipo eq '{tipo}' and area eq '{area}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{empresa/nombre}","Subhead":"Buscando: {tipo}","Footnote":"Area: {area}","DisplayDescriptionInMobile":true,"StatusText":"{empresa/telefono}","SubstatusText":"{empresa/correo}","PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{empresa/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxaspiranteResumen.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarXaspirante_SeleccionEmpresa","Caption":"Seleccion de empresa","PrefersLargeCaption":true}

/***/ }),

/***/ 1769:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Resumen.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"#Page:AsignarXEmpresa_seleccionaspirante/#Control:empresa_asignarxempresa/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"empresa_resumen","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Empresa:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirante_resumen","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Aspirante:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{tipo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tipo_resumen","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Tipo:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{area}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"area_resumen","IsEditable":false,"IsVisible":true,"Separator":true,"Caption":"Area:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{aspirante/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"aspirante_identificacion_resumen","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"aspiranteID","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Asignar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionXEmpresaKR_Create.action"}]}]}],"_Type":"Page","_Name":"AsignarxEmpresa_Resumen","Caption":"Resumen","PrefersLargeCaption":true}

/***/ }),

/***/ 6469:
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionaspirante.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{empresa/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"empresa_asignarxempresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Empresa:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{tipo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tipo_asignarxempresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Tipo:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{area}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"area_asignarxempresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Area:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{empresa/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"idEmpresa_xempresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"IdEmpresa:","PlaceHolder":"PlaceHolder","Enabled":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KR","QueryOptions":"$expand=aspirante&$filter=tipo eq '{tipo}' and area eq '{area}'"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{aspirante/nombre}","Subhead":"Aspirando a: {tipo}","Footnote":"Area: {area}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{aspirante/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxEmpresaResumen.action","Styles":{"Subhead":"GreenText","Footnote":"GreenText"},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarXEmpresa_seleccionaspirante","Caption":"Seleccionar aspirante","PrefersLargeCaption":true}

/***/ }),

/***/ 1633:
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionempresa.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KR","QueryOptions":"$expand=empresa"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{empresa/nombre}","Subhead":"Buscando: {tipo}","Footnote":"Area: {area}","DisplayDescriptionInMobile":true,"PreserveIconStackSpacing":false,"AccessoryType":"none","Tags":[],"AvatarStack":{"Avatars":[{"Image":"{empresa/imagen}","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarXEmpresa_Seleccionaspirante.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"AsignarXEmpresa_SeleccionEmpresa","Caption":"Seleccion de empresa","PrefersLargeCaption":true}

/***/ }),

/***/ 6149:
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Asignarxaspirante_Resumen.page ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"#Page:AsignarXaspirante_SeleccionEmpresa/#Control:aspirante_nombre/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Aspirante","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{empresa/nombre}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre_empresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Empresa:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{tipo}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"tipo_asignar","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Tipo:","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{area}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"area_asignar","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Area","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"{empresa/identificacion}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"id_empresa","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"idEmpresa","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Asignar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionxAspiranteKR_Create.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Asignarxaspirante_Resumen","Caption":"Resumen","PrefersLargeCaption":true}

/***/ }),

/***/ 7591:
/*!************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Aspirar.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"#Page:Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Identificacion","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:NuevoProceso/#Control:nombre/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Nombre","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":[],"_Type":"Control.Type.FormCell.ListPicker","_Name":"tipo","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione un tipo","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un tipo","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":["Pasantia","Practica","Primer empleo"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"area","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione una area","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Area"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AspiracionKR_Create.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Aspirar","Caption":"Aspirar","PrefersLargeCaption":true}

/***/ }),

/***/ 921:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Buscar_Talentos.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"#Page:Login/#Control:identificacion/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Identificacion","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":"#Page:NuevoProceso/#Control:nombre/#Value","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Empresa","PlaceHolder":"PlaceHolder","Enabled":true},{"Value":[],"_Type":"Control.Type.FormCell.ListPicker","_Name":"tipo","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione un tipo","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un tipo","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":["Pasantia","Practica","Primer empleo"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"area","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Seleccione una area","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un area","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Area"},"DisplayValue":"{nombre}","ReturnValue":"{nombre}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Enviar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/DonacionKR_Create.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Buscar_Talentos","Caption":"Buscar Talentos","PrefersLargeCaption":true}

/***/ }),

/***/ 892:
/*!**********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Login.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"lp_rol","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Seleccione su rol","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione su rol","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":["Aspirante","Empresa","Fundacion"]},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"identificacion","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Identificacion","KeyboardType":"Number","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"contrasena","IsEditable":true,"IsVisible":true,"Separator":true,"Caption":"Contraseña","KeyboardType":"Password","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Ingresar","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Rules/KnowledgeRun/NuevoProceso/check_login.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Login","Caption":"Login","PrefersLargeCaption":true}

/***/ }),

/***/ 842:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Menu_NuevoProceso.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"nombre","IsEditable":true,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Logueado como:","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"rol","IsEditable":true,"IsVisible":true,"Separator":true,"Styles":{"Value":"GreenText"},"Caption":"Rol:","PlaceHolder":"PlaceHolder","Enabled":true},{"_Type":"Control.Type.FormCell.Button","_Name":"aspirar","IsVisible":true,"Separator":true,"Title":"Aspirar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Aspirar.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"donar","IsVisible":true,"Separator":true,"Title":"Buscar talentos","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_BuscarTalentos.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignarxaspirante","IsVisible":true,"Separator":true,"Title":"Asignar por aspirante","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_asignarxaspirante.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"asignarxempresa","IsVisible":true,"Separator":true,"Title":"Asignar por empresa","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","OnPress":"/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignarXEmpresa_seleccionempresa.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"NuevoProceso","Caption":"Nuevo Proceso","PrefersLargeCaption":true,"OnLoaded":"/DreamsBank/Rules/KnowledgeRun/NuevoProceso/cargar_datos_menu.js"}

/***/ }),

/***/ 5655:
/*!******************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/Main.page ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"Banco de sueños","Footnote":"0.0.1","DetailImage":"/DreamsBank/Images/dreamsbank.jpg","DetailImageIsCircular":false,"BodyText":"#Application/#AppData/UserId","HeadlineText":"DreamsBank","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Knowledge People","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"/DreamsBank/Images/innovar.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgePeople/NavTo_KnowledgePeople.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Knowledge Run","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"/DreamsBank/Images/area_trabajo.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgeRun/NavTo_Menu_KnowledgeRun.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton2","IsVisible":true,"Separator":true,"Title":"Knowledge Project","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"/DreamsBank/Images/Produccion.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgeProject/NavTo_MenuKnowledgeProject.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton3","IsVisible":true,"Separator":true,"Title":"Knowledge Factory","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"/DreamsBank/Images/finanza.png","ImagePosition":"Leading","ImageSize":{"Height":30,"Width":30},"OnPress":"/DreamsBank/Actions/KnowledgeFactory/NavTo_MenuKnowledgeFactory.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"OnLoaded":"/DreamsBank/Rules/traer_fecha.js","ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem1","Caption":"Cerrar sesión","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DreamsBank/Actions/LogoutMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Actualizar","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DreamsBank/Actions/AppUpdateProgressBanner.action"}]}}

/***/ }),

/***/ 3208:
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"DreamsBank","Version":"/DreamsBank/Globals/AppDefinition_Version.global","MainPage":"/DreamsBank/Pages/Main.page","OnLaunch":["/DreamsBank/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/DreamsBank/Rules/OnWillUpdate.js","OnDidUpdate":"/DreamsBank/Actions/Service/InitializeOnline.action","Styles":"/DreamsBank/Styles/Styles.css","Localization":"/DreamsBank/i18n/i18n.properties","_SchemaVersion":"23.4","StyleSheets":{"Styles":{"css":"/DreamsBank/Styles/Styles.light.css","ios":"/DreamsBank/Styles/Styles.light.nss","android":"/DreamsBank/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/DreamsBank/Styles/Styles.light.nss","android":"/DreamsBank/Styles/Styles.light.json"}}

/***/ }),

/***/ 4846:
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdate.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/DreamsBank/Rules/AppUpdateFailure.js","OnSuccess":"/DreamsBank/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ 3710:
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateFailureMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ 6013:
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateProgressBanner.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/DreamsBank/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ 6127:
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateSuccessMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ 7394:
/*!***************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CloseModalPage_Cancel.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ 6450:
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CloseModalPage_Complete.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ 4425:
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/ClosePage.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ 2433:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CreateEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ 1302:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CreateEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ 8967:
/*!************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteConfirmation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ 1599:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ 6101:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ 1843:
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeFactory/NavTo_MenuKnowledgeFactory.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuKnowledgeFactory"},"PageToOpen":"/DreamsBank/Pages/KnowledgeFactory/Menu_KnowledgeFactory.page"}

/***/ }),

/***/ 3889:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_Consultas_Asignaciones.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Consultas_Asignaciones"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Asignaciones.page"}

/***/ }),

/***/ 9561:
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_MenuConsultas.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuConsultas"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Consultas/Menu_Consultas.page"}

/***/ }),

/***/ 7679:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_consultas_aspirante.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_consultas_aspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Aspirante.page"}

/***/ }),

/***/ 9883:
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_CreateEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"EntitySet":"Aspirante","Service":"/DreamsBank/Services/dreamsbankmov.service"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","ciudad":"#Control:ciudad/#Value","semestre":"#Control:semestre/#Value","carrera":"#Control:carrera/#Value","fechaNacimiento":"#Control:fechaNacimiento/#Value","ciudadNacimiento":"#Control:ciudadNacimiento/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","haAspirado":false,"universidad":"#Control:universidad/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js","modulo":"#Control:modulo/#Value"}}

/***/ }),

/***/ 6593:
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Aspirante","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ 8194:
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_UpdateEntity.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","Target":{"EntitySet":"Aspirante","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","ciudad":"#Control:ciudad/#Value","semestre":"#Control:semestre/#Value","carrera":"#Control:carrera/#Value","fechaNacimiento":"#Control:fechaNacimiento/#Value","ciudadNacimiento":"#Control:ciudadNacimiento/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","direccion":"#Control:direccion/#Value","universidad":"#Control:universidad/#Value"}}

/***/ }),

/***/ 1533:
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Create.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 4852:
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Detail.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Detail.page"}

/***/ }),

/***/ 2480:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Edit.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 1118:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_List.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_List.page"}

/***/ }),

/***/ 4302:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_CreateEntity.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"EntitySet":"Donante","Service":"/DreamsBank/Services/dreamsbankmov.service"},"Properties":{"identificacion":"#Control:identificacion/#Value","tipo":"#Control:tipoPersona/#SelectedValue","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","ciudad":"#Control:ciudad/#Value","empresa":"#Control:empresa/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","fechaNacimiento":"#Control:fechaNacimiento/#Value","haDonado":false,"fecha_creacion":"/DreamsBank/Rules/traer_fecha.js","modulo":"#Control:modulo/#Value"}}

/***/ }),

/***/ 1884:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteEntity.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Donante","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ 6862:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_UpdateEntity.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","Target":{"EntitySet":"Donante","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","ciudad":"#Control:ciudad/#Value","empresa":"#Control:empresa/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","fechaNacimiento":"#Control:fechaNacimiento/#Value"}}

/***/ }),

/***/ 7446:
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Create.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 1071:
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Detail.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Detail.page"}

/***/ }),

/***/ 7916:
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Edit.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 576:
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_List.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_List.page"}

/***/ }),

/***/ 4326:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/NavTo_MenuDatosMaestros.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuDatosMaestros"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Menu_DatosMaestros.page"}

/***/ }),

/***/ 7358:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Create.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 4804:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Detail.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Detail.page"}

/***/ }),

/***/ 8924:
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Edit.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ 8210:
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_List.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_List.page"}

/***/ }),

/***/ 935:
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_CreateEntity.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"EntitySet":"Producto","Service":"/DreamsBank/Services/dreamsbankmov.service"},"Properties":{"id":"#Control:id/#Value","nombre_producto":"#Control:nombre_producto/#Value","descripcion":"#Control:descripcion/#Value","valor":"#Control:valor/#Value","tipo":"#Control:FormCellListPicker0/#SelectedValue","modalidad":"#Control:modalidad/#Value","ciudad":"#Control:ciudad/#Value","universidad":"#Control:universidad/#Value","fabricante":"#Control:fabricante/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 535:
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteEntity.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Producto","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ 9161:
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_UpdateEntity.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","Target":{"EntitySet":"Producto","Service":"/DreamsBank/Services/dreamsbankmov.service","ReadLink":"{@odata.readLink}"},"Properties":{"id":"#Control:id/#Value","nombre_producto":"#Control:nombre_producto/#Value","descripcion":"#Control:descripcion/#Value","valor":"#Control:valor/#Value","tipo":"#Control:tipo/#Value","modalidad":"#Control:modalidad/#Value","ciudad":"#Control:ciudad/#Value","universidad":"#Control:universidad/#Value","fabricante":"#Control:fabricante/#Value"}}

/***/ }),

/***/ 6199:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/NavTo_KnowledgePeople.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_KnowledgePeople"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Menu_KnowledgePeople.page"}

/***/ }),

/***/ 8155:
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_Create.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion"},"Properties":{"aspirante_identificacion":"#Page:Asignar_AspiranteResumen/#Control:id_aspiranteResumen/#Value","donante_identificacion":"#Page:Asignar_AspiranteResumen/#Control:id_donanteResumen/#Value","producto_id":"#Page:Asignar_AspiranteResumen/#Control:FormCellSimpleProperty0/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 504:
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_CreatexDonante.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion"},"Properties":{"aspirante_identificacion":"#Page:AsignarXDonante_Resumen/#Control:idAspirante_Asignar/#Value","donante_identificacion":"#Page:AsignarXDonante_Resumen/#Control:idDonante_Asignar/#Value","producto_id":"#Page:AsignarXDonante_Resumen/#Control:FormCellSimpleProperty3/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 9948:
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspiracion_Create.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspirar.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion"},"Properties":{"aspirante_identificacion":"#Page:Aspirar/#Control:idAspirar/#Value","producto_id":"#Page:Aspirar/#Control:FormCellListPicker0/#SelectedValue","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 1324:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspirar.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspirante","QueryOptions":"$filter=identificacion eq '{{#Page:Aspirar/#Control:idAspirar/#Value}}'"},"Properties":{"haAspirado":true}}

/***/ }),

/***/ 607:
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donacion_Create.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donar.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion"},"Properties":{"donante_identificacion":"#Page:Donar/#Control:identificacion_donar/#Value","producto_id":"#Page:Donar/#Control:listpicker_donar/#SelectedValue","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 4511:
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donar.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante","QueryOptions":"$filter=identificacion eq '{{#Page:Donar/#Control:identificacion_donar/#Value}}'"},"Properties":{"haDonado":true}}

/***/ }),

/***/ 1459:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_Resumen.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarXDonante_Resumen"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_Resumen.page"}

/***/ }),

/***/ 2021:
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionAspirante.action ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarXDonante_SeleccionAspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_SeleccionAspirante.page"}

/***/ }),

/***/ 8388:
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionDonante.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarXDonante_SeleccionDonante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarxDonante_SeleccionDonante.page"}

/***/ }),

/***/ 9031:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_AspiranteResumen.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Asignar_AspiranteResumen"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_AspiranteResumen.page"}

/***/ }),

/***/ 6484:
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionAspirante.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Asignar_SeleccionAspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionAspirante.page"}

/***/ }),

/***/ 2897:
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionDonante.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Asignar_SeleccionDonante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionDonante.page"}

/***/ }),

/***/ 1531:
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Aspirar.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Aspirar"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Aspirar.page","ModalPage":false}

/***/ }),

/***/ 4627:
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Donante.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Consultas_Donante"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Donante.page"}

/***/ }),

/***/ 2941:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Producto.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Consultas_Producto"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Producto.page"}

/***/ }),

/***/ 1124:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Donar.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Donar"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Donar.page","ModalPage":false}

/***/ }),

/***/ 8001:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Login.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Login"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Login.page","ModalPage":true}

/***/ }),

/***/ 7225:
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Menu_proceso.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Menu_proceso"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Menu_proceso.page"}

/***/ }),

/***/ 7376:
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/Create_AspiracionKP.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KProject"},"Properties":{"aspirante_identificacion":"#Page:Aspirar_KP/#Control:idAspirar/#Value","area":"#Page:Aspirar_KP/#Control:area/#SelectedValue","descripcion":"#Page:Aspirar_KP/#Control:descripcion/#Value","presupuesto":"#Page:Aspirar_KP/#Control:valor_estimado/#Value","tiempo_estimado":"#Page:Aspirar_KP/#Control:tiempo_estimado/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 3349:
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/Create_AspiranteKP.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"ASPIRANTE_KP"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","ciudad":"#Control:ciudad/#Value","CEO":"#Control:ceo/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 5715:
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/Create_Donante_KP.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"DONANTE_KP"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","ciudad":"#Control:ciudad/#Value","CEO":"#Control:ceo/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 2972:
/*!**************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/Create_Donar_KP.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KProject"},"Properties":{"donante_identificacion":"#Page:Donar_KP/#Control:idAspirar/#Value","area":"#Page:Donar_KP/#Control:area/#SelectedValue","descripcion":"#Page:Donar_KP/#Control:descripcion/#Value","valorTope":"#Page:Donar_KP/#Control:valor_estimado/#Value","tiempoTope":"#Page:Donar_KP/#Control:tiempo_estimado/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 338:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/Create_Fabricante_KP.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"FABRICANTE_KP"},"Properties":{"identificacion":"#Control:identificacion/#Value","nombre":"#Control:nombre/#Value","ciudad":"#Control:ciudad/#Value","CEO":"#Control:ceo/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 1845:
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_AspiranteList.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AspiranteList"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_List.page"}

/***/ }),

/***/ 7854:
/*!*********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Aspirante_Create.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Aspirante_Create"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_Create.page"}

/***/ }),

/***/ 7196:
/*!***************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Aspirar_KP.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Aspirar_KP"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Aspirar_KP.page"}

/***/ }),

/***/ 500:
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_DonanteList.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_DonanteList"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_List.page"}

/***/ }),

/***/ 8042:
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Donante_Create.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Donante_Create"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_Create.page"}

/***/ }),

/***/ 8512:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Donar_KP.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Donar_KP"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Donar_KP.page"}

/***/ }),

/***/ 5955:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_Create.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Fabricante_Create"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_Create.page"}

/***/ }),

/***/ 5722:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_List.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Fabricante_List"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_List.page"}

/***/ }),

/***/ 988:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_KP_nuevoproceso.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_KP_nuevoproceso"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Menu_nuevoproceso.page"}

/***/ }),

/***/ 1617:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_KPresumenaspirante.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_KPresumenaspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/resumenxaspirante.page"}

/***/ }),

/***/ 6318:
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Login_KP.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Login_KP"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/KP_Login.page"}

/***/ }),

/***/ 8605:
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_MenuKnowledgeProject.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuKnowledgeProject"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Menu_KnowledgeProject.page"}

/***/ }),

/***/ 3183:
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_Menu_DatosMaestros.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Menu_DatosMaestros"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Datos Maestros/Menu_DatosMaestros.page"}

/***/ }),

/***/ 8407:
/*!************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_SeleccionFabricante.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_SeleccionFabricante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/seleccionFabricante.page"}

/***/ }),

/***/ 6270:
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_asignarxaspirante_KP.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_asignarxaspirante_KP"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Asignarxaspirante.page","ModalPage":true}

/***/ }),

/***/ 6675:
/*!*********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/NavTo_seleccionDonante.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_seleccionDonante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/selecicionDonante.page"}

/***/ }),

/***/ 9664:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeProject/asignacionxaspirante_Create.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion_KProject"},"Properties":{"aspirante_identificacion":"#Page:seleccionDonante/#Control:aspiranteid/#Value","donante_identificacion":"#Page:seleccionFabricante/#Control:donanteid/#Value","area":"#Page:seleccionDonante/#Control:kparea/#Value","valor":"#Page:seleccionDonante/#Control:kpvalor/#Value","tiempo":"#Page:seleccionDonante/#Control:kptiempo/#Value","descripcion":"#Page:seleccionFabricante/#Control:listpickerfabricante/#SelectedValue","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 3529:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Consultas/NavToConsutlasPorProducto_KR.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToConsutlasPorProducto_KR"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorProducto.page"}

/***/ }),

/***/ 6743:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorAspirante.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_ConsultasPorAspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultaPorAspirante.page"}

/***/ }),

/***/ 7951:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorasignacion.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_ConsultasPorasignacion"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorAsignacion.page"}

/***/ }),

/***/ 9956:
/*!************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_MenuConsultas.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuConsultas"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Consultas/Menu_Consultas.page"}

/***/ }),

/***/ 1704:
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_consultasporEmpresa.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_consultasporEmpresa"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorEmpresa.page"}

/***/ }),

/***/ 5991:
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspiranteList.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AspiranteList"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_List.page"}

/***/ }),

/***/ 4925:
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspirantesCreateKR.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AspirantesCreateKR"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_Create.page","ModalPage":true}

/***/ }),

/***/ 2808:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/Create_empresa.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donante"},"Properties":{"identificacion":"#Control:identificacion/#Value","tipo":"Juridica","nombre":"#Control:nombre/#Value","ciudad":"#Control:ciudad/#Value","empresa":"#Control:empresa/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","imagen":"","web":"#Control:web/#Value","direccion":"#Control:direccion/#Value","contrasena":"#Control:contrasena/#Value","fechaNacimiento":"#Control:fechaNacimiento/#Value","haDonado":false,"fecha_creacion":"/DreamsBank/Rules/traer_fecha.js","modulo":"KR"}}

/***/ }),

/***/ 1668:
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaCreate.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_EmpresaCreate"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_Create.page","ModalPage":true}

/***/ }),

/***/ 8515:
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaList.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_EmpresaList"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_List.page"}

/***/ }),

/***/ 2377:
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Datos_Maestros/NavTo_MenuDatosMaestros.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuDatosMaestros"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Datos maestros/Menu_DatosMaestros.page"}

/***/ }),

/***/ 2861:
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/NavTo_Menu_KnowledgeRun.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Menu_KnowledgeRun"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Menu_KnowledgeRun.page"}

/***/ }),

/***/ 3217:
/*!************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionXEmpresaKR_Create.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion_KR"},"Properties":{"aspirante_identificacion":"#Page:AsignarxEmpresa_Resumen/#Control:aspirante_identificacion_resumen/#Value","empresa_identificacion":"#Page:AsignarXEmpresa_seleccionaspirante/#Control:idEmpresa_xempresa/#Value","tipo":"#Page:AsignarxEmpresa_Resumen/#Control:tipo_resumen/#Value","area":"#Page:AsignarxEmpresa_Resumen/#Control:area_resumen/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 4771:
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionxAspiranteKR_Create.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Asignacion_KR"},"Properties":{"aspirante_identificacion":"#Page:AsignarXaspirante_SeleccionEmpresa/#Control:idAspirante/#Value","empresa_identificacion":"#Page:Asignarxaspirante_Resumen/#Control:id_empresa/#Value","tipo":"#Page:Asignarxaspirante_Resumen/#Control:tipo_asignar/#Value","area":"#Page:Asignarxaspirante_Resumen/#Control:area_asignar/#Value","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 1573:
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignarXEmpresa_seleccionempresa.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"AsignarXEmpresa_seleccionempresa"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionempresa.page"}

/***/ }),

/***/ 5667:
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AspiracionKR_Create.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Aspiracion_KR"},"Properties":{"aspirante_identificacion":"#Control:identificacion/#Value","tipo":"#Control:tipo/#SelectedValue","area":"#Control:area/#SelectedValue","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 329:
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/DonacionKR_Create.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankmov.service","EntitySet":"Donacion_KR"},"Properties":{"empresa_identificacion":"#Control:identificacion/#Value","tipo":"#Control:tipo/#SelectedValue","area":"#Control:area/#SelectedValue","fecha_creacion":"/DreamsBank/Rules/traer_fecha.js"}}

/***/ }),

/***/ 8945:
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarXEmpresa_Seleccionaspirante.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarXEmpresa_Seleccionaspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionaspirante.page"}

/***/ }),

/***/ 2292:
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxEmpresaResumen.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarxEmpresaResumen"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Resumen.page"}

/***/ }),

/***/ 6595:
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxaspiranteResumen.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_AsignarxaspiranteResumen"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Asignarxaspirante_Resumen.page"}

/***/ }),

/***/ 4881:
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Asignarxaspirante_seleccionempresa.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Asignarxaspirante_seleccionempresa"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante_SeleccionEmpresa.page"}

/***/ }),

/***/ 896:
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Aspirar.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Aspirar"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Aspirar.page"}

/***/ }),

/***/ 9745:
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_BuscarTalentos.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_BuscarTalentos"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Buscar_Talentos.page"}

/***/ }),

/***/ 6416:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Login.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Login"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Login.page","ModalPage":true}

/***/ }),

/***/ 5397:
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_MenuNuevoProceso.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_MenuNuevoProceso"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Menu_NuevoProceso.page"}

/***/ }),

/***/ 7723:
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_asignarxaspirante.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_asignarxaspirante"},"PageToOpen":"/DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante.page"}

/***/ }),

/***/ 3:
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Logout.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ 4255:
/*!*******************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/LogoutMessage.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/DreamsBank/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ 3388:
/*!******************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/OnWillUpdate.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"OnWillUpdate"},"Message":"Una nueva version de la aplicación está disponible, desea actualizar?","Title":"Nueva version disponible","OKCaption":"Actualizar","CancelCaption":"Después"}

/***/ }),

/***/ 6339:
/*!******************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/DreamsBank/Services/dreamsbankmov.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ 8810:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ 1652:
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ 6661:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/UpdateEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ 1109:
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/UpdateEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ 8575:
/*!***************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Globals/AppDefinition_Version.global ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ 1174:
/*!*********************************************************************!*\
  !*** ./build.definitions/DreamsBank/Services/dreamsbankmov.service ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"dreamsbankmov","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ 292:
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ }),

/***/ 4614:
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/Produccion.png ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3096:
/*!**************************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/area_trabajo.png ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 8582:
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/dreamsbank.jpg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACgKADAAQAAAABAAACgAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgCgAKAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQAKP/aAAwDAQACEQMRAD8A+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBpphp5phoAiaqz1Yaqz0AVJKpyVckqnJQBUeoDU7VCaAGipV61HUi0AWkq5HVJDVxKALqVZWqiGrKmgCwDTwaiBp2aAJM0ZpmaM0APzS5qPNLmgCTNFMBp2aAHUtNpaAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9D6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKKAFpKTNJmgAzTDTs1GTQBG1Vnqw1VnoAqvVR6tvVR6AKj1CaneoDQAlSLUWaepoAtIatoapIatIaALqGrKmqaGrCtQBZBpd1QbqN1AE+6k3VBupN1AFjdTg1Vg1PDUAWQaeDVdTUoNAE1LTAadmgB9FJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//R+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKKbmgBc03NITTSaAHE0majLU0tQBJmmk0wtTS1AAxqu5qQmoWNAED1TerT1UegCs9V2NTvVdjQA3NPU1CTTgaALamrKGqKmrKNQBfRqnDVSRqnDUAWd1JuqHdSbqAJt1N3VEWpM0AWA1SBqqg1KpoAtqamU1VU1MpoAsg08GoAakBoAlzS5qMGnZoAfRTc0tAC0UmaWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/S+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UlACU0mlNMNACE1GTSsahY0ABamlqjZqiLUATFqTdVfdSbqAJyaiY0wtTC1ACOaquamY1Xc0AVnNVmNWHNVmoAjJpQaaaQUAWFNWENU1NTqaALytUwaqamp1NAFjNGaiBp2aAHZpabS0APFSqahFPBoAsqalU1VBp4alcZcDU8NVMPTg9FwLoanBqph6kD0XAtA07NVg1SBqYiYGnVGDTgaAH0UgpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0/qmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAaajNSGozQBC1QMamaq7UARMahLU9qrtQApam7qYTTc0ASbqQtUWaM0AOY1Axp5NRmgCBqgYVZYVERQBWIpMVMVpNtADRUy0wCpAKAJVqZTUK1MKAJQaeKYKeKAHUtJRmgBc0u6oyaaWqGxk26jfVUvUZkrNzKSL/mUokrN82lEtR7QrlNUSVIJKyRLU6yVSqC5TVV6nVqy0kq0j1opE2NBWqQGqitU6tVpiLANLUYNPpiHUUCigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1PqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAaajNSGmGgCBhVdhVphUDCgCo4qs1XGFVnFAFY0w1KwqI0ANooooAKbTqMUAREU0rVjbRtoAqlabtq5spNlAFXbTgtT7KXbQBGBUgFKFp4FAABTqTFLQAuaaTSE1EzVLYxWaoWemM9VnesJysWkStJULSVXaSoWeuKpVsbRiWjJR5lUS9IHrndc05DTWSrCSVkK9WEkrSFYlwNmOSrkb1jRv0q/G9dlOdzGSNdGq0jVmRtV6Nq6oszZdU1IKgU1MK0JH0tIKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//V+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikoASmGn0w0ARsKhYVOahNAFZxVZxVtqrvQBVYVCRVhqhNAERpMU6lAoAAKeBQBUqigBoWnbalC1IFoArbKQpVvbTStAFQrSbasEUwigCHFLinGm0AJTSaUmo2NADWNQO1PY1Vc1EmUiN2qq709zVR2rirM1ihGaoGekZqhJrya8zqhEeXpQ1QZoBrgdXU3US0rVYRqoqasIa3pVCJRNKNulaETdKyozWhEeletQkcs0a0TdK0IjWXEelaMRr0YM52X0NWFqslTrWyJJRTqaKcKYgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1vqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAptLTTQAGmGlJqMmgAJqFjTmNQs1ADWNV2NSMagY0ARNUJqRjURoASgCinAUAPUVOoqNRVhRQA9VqQLQoqQCgCPFMIqcio2oArsKiNTNUDUARmmGnMajJoAQmo2NKTUbGgCNzVRzVlqrPWcikVHqo9XHFVXFcVZG0Co1Rmp2FRkV49eJ1QZFQKdtpQK8+UHc3TFWrCVGq1Oi1vRiRJlmMVow9qpRr0rQiXpXsUEcs2X4u1aUVUIh0rRiFenTOaRbTtVhagSrC1siSQU4U0U4UxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/1/qmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UUANppqSigCA5qI59KuUUAZzbvQ1Cwb0Na9FAGEyv/AHT+VQssn90/lXR0UAcwUk/un8qZ5cn90/lXVUUAcr5Un90/lUgik/un8q6aigDn1jf+6fyqwqN6GtiigDNCt6GnhT6VfooAzyG9KpSXVsjbHlQN6FgDXDeK/FVw1w2l6YxVVO13Xqx9BWXZ+CNZvYvtMrLEW5Acksfr6UAemAiQZj+Yeo5qNkf+6fyryuSLX/CV0shJVSeCDlG9jXrmhazDrVitzGMOOHX0agCi0cn90/lURjl/un8q62igDjzFL/cb8jTDFL/cb8jXZ0UAcOYZv7jfkahaCY/wN+RrvqKTQ7nnTW8//PNvyNQNazn/AJZt/wB8mvTKKylRUilOx5a1pcf883/75NRm0uf+eb/98mvVqK5p4CMupoqzXQ8n+x3P/PJ/++TSizuf+eb/APfJr1eisXlcf5ivrL7Hli2lx/zzf/vk1OlrP/zzb/vk16ZRVxy2K6ieIb6Hn8dtNx8jfkavRwSjHyt+RrsqK6IYZR6mbqXOcjicY+U/lV6NGHY1q0VuoWIbKiKamAqWirEIKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0PqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKr3bFLaV1OCEYj8qsUyWMSxtGejAj86APGfBVpFfa281z8xiBcA/3iete0AV4VDLc+FNeYupKqxBHTch9K9ds9f0m8hE0dwgBGSGIBH1BoATxBZw3mkXEUwBAQsD6Ec1578PJXF7cQg/IUBx7+ta/ivxXZ/Y30/T5BJJIMMy9FHfmm+ANLkggk1GUY835Uz6DvQB6PRRRQAUVw/ijxLPp8q6bpq77qQdcZ256cetYTyeO7SD7bI25QNxTgkD3FAHqtFc/4d1yPW7LzsbZEO2RfQ+3tXQUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9H6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopCcUALRmvMdU8S6vqGotpnh9T8hwXA5OOvJ6Cq7at4u8PusuqL50DEAk4P5EcigD1aiqtldxX1rHdwnKSKGFWqAMTWtBstahEdwCrr9116ivFtS0O4stUbS7c+e4G4beDjrzX0E7BFLNwAMmvNfDKjVPEd7qz8qhKr+PH8qAPOLRBHMtzcRF4I3Ak9Poa+h7Ce1ubSOazI8oqNuOgHpXm2n2tvB4gv9BugDFdAlR79Rj3qKwv7jwbqjabfEvayHcpHOAeh/xoA9apCQBk1xd/450i2TFqWuH7BRgfmawGm8VeKf3cafZLU9ScjI/maAIX1CztvG73M7Boz8obqFJFel3d/ZWto1zPInlhc9Rz9K5OLwFpQtfKmZ3lP/LTOCD7DpVVPh7b7x513I8Y/h4oAZ4ER5J769RdsMjfKO3XNekVUsrK30+2W1tV2onQVboAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0vqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACo5lLxOq9SpA/KpKKAPMPBNzb2l5d6fdAJOXJBbgnB6V0XjG+tLfRpYJiGeUbUXvn1/Cn614T0/WJftJZoZu7p3+org9f8LSaJCmoxzNcKrjcHHT0oAuaQvjSx06MWMStCRuVWwWwfrV7+2/G8X+ssQ3/AAH/AANd7pl5Ff2EN1D911BwOx9KvHAGT2oA8g1XxZ4hFuba6thbeaCu4qQSO+M1Doa+LrK2KaZb4jkO7cyrz7881o3MjeKvE6W8XNraHJPY4PP5mvU1AAAHAHAoA8L12x8Q20y6rqnyuxADqehHTp0rp7XwP9vhS7vr15GkUEEe/uc12+vaeup6XNakZYrlf94dK5/wPqBuNOaxmP722Yrg9dtAHHW0L+ENXxqcCzQvwsmM4HqPf1FewWlzbXcCz2rh0YcEU28sba/ga2u0Do3Y/wBK83n0nWvCczXmksZ7XOWjPJA9x/UUAep0Vymj+LtL1MCN28ib+45wCfY9DXVZ4yKABmVAWYgAckmuI1Px1ptk5itVNw6nBIOF/PvXM+M/EclxO2lWbYiTiQj+I+n0FcXZ2E9437vhR1Y9Kxr4inQg6lWVki4QlN8sUd8fiNLni0XH+8a2NN8d6dduI7xWt2PGTyv59q89/wCEff8A57D8v/r1mXmnz2Zy/KHow6f/AFq4cNnWDxE/Z0qibNqmEqwXNKJ9HRyJIgeNgynkEcg0+vGfB/iOSxuV065bMEpwuf4GP9K9mr1DmCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/T+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqGpWa39jNaOMiRCPx7VfooA8+8B3Trb3GmS/et3OPoateMdc+w239n2hzc3A24HVVP8AU1yt7qL+GfE15LEm4SrkL0GW6H8DWx4X0W4vrk+INYyzucxq388fyoA6Hwroq6Rp48wfv5fmkPp7V1FFFACEV5hqSnw14oj1BOLe64f056/416hWB4j0ldY017cf6xfmjP8AtD/GgDdRldQ6nIIyDSkAjmuI8Gaw1zbNpd0cXFt8uD1Kj/CusvL+0sI/NvJViX1Y/wAhQBz+reENL1PMqL9nmP8AHH3PuOhrlZrfxf4chcQyfabYKefvbR64PIrUvfHcTP8AZ9Gt2uZDwCQcfkOTWVPbeN9Ygke5b7PFtJKZC5HpgZP50Aec7mlk3McljyfrXfwRJFCkSjgAVwA+Rxu42nn8K9DjZXjVlOQQK+F40lJRpJbantZQleT6ju1RyxpLGY3GQw6VJSMQoLHgDk18JTnJTTjue1JJppnnsimGYgcFG4/CvovSpjcadbzMclo1JP4V873UpnuHkPc9q+g9DiMGk2sTdRGtfuFBydOLnvZHx07cztsatFFFakBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR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"

/***/ }),

/***/ 7135:
/*!*********************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/finanza.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 5730:
/*!*********************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/innovar.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3931:
/*!****************************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/usersmanagment.png ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 6280:
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ 3208)
let dreamsbank_actions_appupdate_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdate.action */ 4846)
let dreamsbank_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateFailureMessage.action */ 3710)
let dreamsbank_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateProgressBanner.action */ 6013)
let dreamsbank_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateSuccessMessage.action */ 6127)
let dreamsbank_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./DreamsBank/Actions/CloseModalPage_Cancel.action */ 7394)
let dreamsbank_actions_closemodalpage_complete_action = __webpack_require__(/*! ./DreamsBank/Actions/CloseModalPage_Complete.action */ 6450)
let dreamsbank_actions_closepage_action = __webpack_require__(/*! ./DreamsBank/Actions/ClosePage.action */ 4425)
let dreamsbank_actions_createentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/CreateEntityFailureMessage.action */ 2433)
let dreamsbank_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/CreateEntitySuccessMessage.action */ 1302)
let dreamsbank_actions_deleteconfirmation_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteConfirmation.action */ 8967)
let dreamsbank_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteEntityFailureMessage.action */ 1599)
let dreamsbank_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteEntitySuccessMessage.action */ 6101)
let dreamsbank_actions_knowledgefactory_navto_menuknowledgefactory_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeFactory/NavTo_MenuKnowledgeFactory.action */ 1843)
let dreamsbank_actions_knowledgepeople_consultas_navto_consultas_asignaciones_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_Consultas_Asignaciones.action */ 3889)
let dreamsbank_actions_knowledgepeople_consultas_navto_consultas_aspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_consultas_aspirante.action */ 7679)
let dreamsbank_actions_knowledgepeople_consultas_navto_menuconsultas_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Consultas/NavTo_MenuConsultas.action */ 9561)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_CreateEntity.action */ 9883)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteEntity.action */ 6593)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_UpdateEntity.action */ 8194)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Create.action */ 1533)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Detail.action */ 4852)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_Edit.action */ 2480)
let dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Aspirante/NavToAspirante_List.action */ 1118)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_CreateEntity.action */ 4302)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteEntity.action */ 1884)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/Donante_UpdateEntity.action */ 6862)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Create.action */ 7446)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Detail.action */ 1071)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_Edit.action */ 7916)
let dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Donante/NavToDonante_List.action */ 576)
let dreamsbank_actions_knowledgepeople_datos_maestros_navto_menudatosmaestros_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/NavTo_MenuDatosMaestros.action */ 4326)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Create.action */ 7358)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Detail.action */ 4804)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_Edit.action */ 8924)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/NavToProducto_List.action */ 8210)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_CreateEntity.action */ 935)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteEntity.action */ 535)
let dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Datos Maestros/Producto/Producto_UpdateEntity.action */ 9161)
let dreamsbank_actions_knowledgepeople_navto_knowledgepeople_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/NavTo_KnowledgePeople.action */ 6199)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_Create.action */ 8155)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_createxdonante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Asignacion_CreatexDonante.action */ 504)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_aspiracion_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspiracion_Create.action */ 9948)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_aspirar_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Aspirar.action */ 1324)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_donacion_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donacion_Create.action */ 607)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_donar_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/Donar.action */ 4511)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_aspiranteresumen_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_AspiranteResumen.action */ 9031)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_seleccionaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionAspirante.action */ 6484)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_selecciondonante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Asignar_SeleccionDonante.action */ 2897)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_resumen_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_Resumen.action */ 1459)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_seleccionaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionAspirante.action */ 2021)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_selecciondonante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_AsignarXDonante_SeleccionDonante.action */ 8388)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_aspirar_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Aspirar.action */ 1531)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_donante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Donante.action */ 4627)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_producto_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Consultas_Producto.action */ 2941)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_donar_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Donar.action */ 1124)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_login_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Login.action */ 8001)
let dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_menu_proceso_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Nuevo Proceso/NavTo_Menu_proceso.action */ 7225)
let dreamsbank_actions_knowledgeproject_asignacionxaspirante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/asignacionxaspirante_Create.action */ 9664)
let dreamsbank_actions_knowledgeproject_create_aspiracionkp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/Create_AspiracionKP.action */ 7376)
let dreamsbank_actions_knowledgeproject_create_aspirantekp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/Create_AspiranteKP.action */ 3349)
let dreamsbank_actions_knowledgeproject_create_donante_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/Create_Donante_KP.action */ 5715)
let dreamsbank_actions_knowledgeproject_create_donar_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/Create_Donar_KP.action */ 2972)
let dreamsbank_actions_knowledgeproject_create_fabricante_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/Create_Fabricante_KP.action */ 338)
let dreamsbank_actions_knowledgeproject_navto_asignarxaspirante_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_asignarxaspirante_KP.action */ 6270)
let dreamsbank_actions_knowledgeproject_navto_aspirante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Aspirante_Create.action */ 7854)
let dreamsbank_actions_knowledgeproject_navto_aspirantelist_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_AspiranteList.action */ 1845)
let dreamsbank_actions_knowledgeproject_navto_aspirar_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Aspirar_KP.action */ 7196)
let dreamsbank_actions_knowledgeproject_navto_donante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Donante_Create.action */ 8042)
let dreamsbank_actions_knowledgeproject_navto_donantelist_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_DonanteList.action */ 500)
let dreamsbank_actions_knowledgeproject_navto_donar_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Donar_KP.action */ 8512)
let dreamsbank_actions_knowledgeproject_navto_fabricante_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_Create.action */ 5955)
let dreamsbank_actions_knowledgeproject_navto_fabricante_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Fabricante_List.action */ 5722)
let dreamsbank_actions_knowledgeproject_navto_kp_nuevoproceso_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_KP_nuevoproceso.action */ 988)
let dreamsbank_actions_knowledgeproject_navto_kpresumenaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_KPresumenaspirante.action */ 1617)
let dreamsbank_actions_knowledgeproject_navto_login_kp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Login_KP.action */ 6318)
let dreamsbank_actions_knowledgeproject_navto_menu_datosmaestros_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_Menu_DatosMaestros.action */ 3183)
let dreamsbank_actions_knowledgeproject_navto_menuknowledgeproject_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_MenuKnowledgeProject.action */ 8605)
let dreamsbank_actions_knowledgeproject_navto_selecciondonante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_seleccionDonante.action */ 6675)
let dreamsbank_actions_knowledgeproject_navto_seleccionfabricante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeProject/NavTo_SeleccionFabricante.action */ 8407)
let dreamsbank_actions_knowledgerun_consultas_navto_consultasporasignacion_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorasignacion.action */ 7951)
let dreamsbank_actions_knowledgerun_consultas_navto_consultasporaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_ConsultasPorAspirante.action */ 6743)
let dreamsbank_actions_knowledgerun_consultas_navto_consultasporempresa_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_consultasporEmpresa.action */ 1704)
let dreamsbank_actions_knowledgerun_consultas_navto_menuconsultas_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Consultas/NavTo_MenuConsultas.action */ 9956)
let dreamsbank_actions_knowledgerun_consultas_navtoconsutlasporproducto_kr_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Consultas/NavToConsutlasPorProducto_KR.action */ 3529)
let dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantelist_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspiranteList.action */ 5991)
let dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantescreatekr_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Aspirante/NavTo_AspirantesCreateKR.action */ 4925)
let dreamsbank_actions_knowledgerun_datos_maestros_empresa_create_empresa_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/Create_empresa.action */ 2808)
let dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresacreate_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaCreate.action */ 1668)
let dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresalist_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/Empresa/NavTo_EmpresaList.action */ 8515)
let dreamsbank_actions_knowledgerun_datos_maestros_navto_menudatosmaestros_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Datos_Maestros/NavTo_MenuDatosMaestros.action */ 2377)
let dreamsbank_actions_knowledgerun_navto_menu_knowledgerun_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/NavTo_Menu_KnowledgeRun.action */ 2861)
let dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxaspirantekr_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionxAspiranteKR_Create.action */ 4771)
let dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxempresakr_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignacionXEmpresaKR_Create.action */ 3217)
let dreamsbank_actions_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AsignarXEmpresa_seleccionempresa.action */ 1573)
let dreamsbank_actions_knowledgerun_nuevo_proceso_aspiracionkr_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/AspiracionKR_Create.action */ 5667)
let dreamsbank_actions_knowledgerun_nuevo_proceso_donacionkr_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/DonacionKR_Create.action */ 329)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_asignarxaspirante.action */ 7723)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_seleccionempresa_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Asignarxaspirante_seleccionempresa.action */ 4881)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspiranteresumen_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxaspiranteResumen.action */ 6595)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresa_seleccionaspirante_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarXEmpresa_Seleccionaspirante.action */ 8945)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresaresumen_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_AsignarxEmpresaResumen.action */ 2292)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_aspirar_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Aspirar.action */ 896)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_buscartalentos_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_BuscarTalentos.action */ 9745)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_login_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_Login.action */ 6416)
let dreamsbank_actions_knowledgerun_nuevo_proceso_navto_menunuevoproceso_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgeRun/Nuevo Proceso/NavTo_MenuNuevoProceso.action */ 5397)
let dreamsbank_actions_logout_action = __webpack_require__(/*! ./DreamsBank/Actions/Logout.action */ 3)
let dreamsbank_actions_logoutmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/LogoutMessage.action */ 4255)
let dreamsbank_actions_onwillupdate_action = __webpack_require__(/*! ./DreamsBank/Actions/OnWillUpdate.action */ 3388)
let dreamsbank_actions_service_initializeonline_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnline.action */ 6339)
let dreamsbank_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action */ 8810)
let dreamsbank_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action */ 1652)
let dreamsbank_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/UpdateEntityFailureMessage.action */ 6661)
let dreamsbank_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/UpdateEntitySuccessMessage.action */ 1109)
let dreamsbank_globals_appdefinition_version_global = __webpack_require__(/*! ./DreamsBank/Globals/AppDefinition_Version.global */ 8575)
let dreamsbank_i18n_i18n_properties = __webpack_require__(/*! ./DreamsBank/i18n/i18n.properties */ 5663)
let dreamsbank_images_area_trabajo_png = __webpack_require__(/*! ./DreamsBank/Images/area_trabajo.png */ 3096)
let dreamsbank_images_dreamsbank_jpg = __webpack_require__(/*! ./DreamsBank/Images/dreamsbank.jpg */ 8582)
let dreamsbank_images_finanza_png = __webpack_require__(/*! ./DreamsBank/Images/finanza.png */ 7135)
let dreamsbank_images_innovar_png = __webpack_require__(/*! ./DreamsBank/Images/innovar.png */ 5730)
let dreamsbank_images_produccion_png = __webpack_require__(/*! ./DreamsBank/Images/Produccion.png */ 4614)
let dreamsbank_images_usersmanagment_png = __webpack_require__(/*! ./DreamsBank/Images/usersmanagment.png */ 3931)
let dreamsbank_jsconfig_json = __webpack_require__(/*! ./DreamsBank/jsconfig.json */ 8300)
let dreamsbank_pages_knowledgefactory_menu_knowledgefactory_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeFactory/Menu_KnowledgeFactory.page */ 7977)
let dreamsbank_pages_knowledgepeople_consultas_consultas_asignaciones_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Asignaciones.page */ 3037)
let dreamsbank_pages_knowledgepeople_consultas_consultas_aspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Aspirante.page */ 9406)
let dreamsbank_pages_knowledgepeople_consultas_consultas_donante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Donante.page */ 3477)
let dreamsbank_pages_knowledgepeople_consultas_consultas_producto_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Consultas/Consultas_Producto.page */ 9968)
let dreamsbank_pages_knowledgepeople_consultas_menu_consultas_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Consultas/Menu_Consultas.page */ 7586)
let dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Create.page */ 7037)
let dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Detail.page */ 5463)
let dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_Edit.page */ 5906)
let dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_List.page */ 1281)
let dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Create.page */ 7946)
let dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Detail.page */ 7869)
let dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_Edit.page */ 2356)
let dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Donante/Donante_List.page */ 6140)
let dreamsbank_pages_knowledgepeople_datos_maestros_menu_datosmaestros_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Menu_DatosMaestros.page */ 2387)
let dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Create.page */ 9276)
let dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Detail.page */ 5104)
let dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_Edit.page */ 6994)
let dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Datos Maestros/Producto/Producto_List.page */ 3756)
let dreamsbank_pages_knowledgepeople_menu_knowledgepeople_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Menu_KnowledgePeople.page */ 7866)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_aspiranteresumen_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_AspiranteResumen.page */ 9618)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_seleccionaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionAspirante.page */ 4572)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_selecciondonante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Asignar_SeleccionDonante.page */ 8521)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_resumen_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_Resumen.page */ 6075)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_seleccionaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarXDonante_SeleccionAspirante.page */ 2308)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_selecciondonante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/AsignarxDonante_SeleccionDonante.page */ 7957)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_aspirar_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Aspirar.page */ 6283)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_donar_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Donar.page */ 5257)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_login_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Login.page */ 9397)
let dreamsbank_pages_knowledgepeople_nuevo_proceso_menu_proceso_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Nuevo Proceso/Menu_proceso.page */ 2314)
let dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_Create.page */ 1086)
let dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Aspirante/Aspirante_List.page */ 4251)
let dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_Create.page */ 1140)
let dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Donante/Donante_List.page */ 7913)
let dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_Create.page */ 9364)
let dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Fabricante/Fabricante_List.page */ 5264)
let dreamsbank_pages_knowledgeproject_datos_maestros_menu_datosmaestros_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Datos Maestros/Menu_DatosMaestros.page */ 1865)
let dreamsbank_pages_knowledgeproject_menu_knowledgeproject_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Menu_KnowledgeProject.page */ 8126)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_asignarxaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Asignarxaspirante.page */ 5874)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_aspirar_kp_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Aspirar_KP.page */ 8333)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_donar_kp_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Donar_KP.page */ 7855)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_kp_login_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/KP_Login.page */ 1905)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_menu_nuevoproceso_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/Menu_nuevoproceso.page */ 2184)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_resumenxaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/resumenxaspirante.page */ 6659)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_seleccionfabricante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/seleccionFabricante.page */ 8018)
let dreamsbank_pages_knowledgeproject_nuevo_proceso_seleciciondonante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeProject/Nuevo Proceso/selecicionDonante.page */ 6888)
let dreamsbank_pages_knowledgerun_consultas_consultaporaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Consultas/ConsultaPorAspirante.page */ 394)
let dreamsbank_pages_knowledgerun_consultas_consultasporasignacion_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorAsignacion.page */ 9644)
let dreamsbank_pages_knowledgerun_consultas_consultasporempresa_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorEmpresa.page */ 4565)
let dreamsbank_pages_knowledgerun_consultas_consultasporproducto_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Consultas/ConsultasPorProducto.page */ 2178)
let dreamsbank_pages_knowledgerun_consultas_menu_consultas_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Consultas/Menu_Consultas.page */ 991)
let dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_Create.page */ 2777)
let dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Datos maestros/Aspirante/Aspirante_List.page */ 7727)
let dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_Create.page */ 1927)
let dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Datos maestros/Empresa/Empresa_List.page */ 6688)
let dreamsbank_pages_knowledgerun_datos_maestros_menu_datosmaestros_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Datos maestros/Menu_DatosMaestros.page */ 8574)
let dreamsbank_pages_knowledgerun_menu_knowledgerun_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Menu_KnowledgeRun.page */ 4104)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante.page */ 4492)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_resumen_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Asignarxaspirante_Resumen.page */ 6149)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_seleccionempresa_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarXaspirante_SeleccionEmpresa.page */ 5112)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_resumen_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Resumen.page */ 1769)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionaspirante_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionaspirante.page */ 6469)
let dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/AsignarxEmpresa_Seleccionempresa.page */ 1633)
let dreamsbank_pages_knowledgerun_nuevo_proceso_aspirar_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Aspirar.page */ 7591)
let dreamsbank_pages_knowledgerun_nuevo_proceso_buscar_talentos_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Buscar_Talentos.page */ 921)
let dreamsbank_pages_knowledgerun_nuevo_proceso_login_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Login.page */ 892)
let dreamsbank_pages_knowledgerun_nuevo_proceso_menu_nuevoproceso_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgeRun/Nuevo Proceso/Menu_NuevoProceso.page */ 842)
let dreamsbank_pages_main_page = __webpack_require__(/*! ./DreamsBank/Pages/Main.page */ 5655)
let dreamsbank_rules_appupdatefailure_js = __webpack_require__(/*! ./DreamsBank/Rules/AppUpdateFailure.js */ 5186)
let dreamsbank_rules_appupdatesuccess_js = __webpack_require__(/*! ./DreamsBank/Rules/AppUpdateSuccess.js */ 8079)
let dreamsbank_rules_knowledgepeople_consultas_filtrararea_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Consultas/filtrararea.js */ 5545)
let dreamsbank_rules_knowledgepeople_consultas_filtrartipo_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Consultas/filtrartipo.js */ 8549)
let dreamsbank_rules_knowledgepeople_consultas_filtroproducto_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Consultas/filtroProducto.js */ 7536)
let dreamsbank_rules_knowledgepeople_consultas_vertodos_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Consultas/verTodos.js */ 5259)
let dreamsbank_rules_knowledgepeople_consultas_vertodos_kr_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Consultas/verTodos_KR.js */ 3564)
let dreamsbank_rules_knowledgepeople_datos_maestros_aspirante_aspirante_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Datos Maestros/Aspirante/Aspirante_DeleteConfirmation.js */ 3705)
let dreamsbank_rules_knowledgepeople_datos_maestros_donante_donante_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/Donante_DeleteConfirmation.js */ 6689)
let dreamsbank_rules_knowledgepeople_datos_maestros_donante_selecciontipopersonadonante_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Datos Maestros/Donante/seleccionTipoPersonaDonante.js */ 812)
let dreamsbank_rules_knowledgepeople_datos_maestros_producto_producto_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/Producto_DeleteConfirmation.js */ 4873)
let dreamsbank_rules_knowledgepeople_datos_maestros_producto_tipoproducto_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Datos Maestros/Producto/tipoProducto.js */ 6993)
let dreamsbank_rules_knowledgepeople_nuevo_proceso_cargar_nombrerol_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/cargar_nombreRol.js */ 6319)
let dreamsbank_rules_knowledgepeople_nuevo_proceso_check_login_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgePeople/Nuevo Proceso/check_login.js */ 2634)
let dreamsbank_rules_knowledgeproject_cargarnombrerolkp_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgeProject/cargarnombrerolkp.js */ 4996)
let dreamsbank_rules_knowledgeproject_kp_check_login_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgeProject/KP_check_login.js */ 6278)
let dreamsbank_rules_knowledgerun_nuevoproceso_cargar_datos_menu_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgeRun/NuevoProceso/cargar_datos_menu.js */ 6749)
let dreamsbank_rules_knowledgerun_nuevoproceso_check_login_js = __webpack_require__(/*! ./DreamsBank/Rules/KnowledgeRun/NuevoProceso/check_login.js */ 8069)
let dreamsbank_rules_onwillupdate_js = __webpack_require__(/*! ./DreamsBank/Rules/OnWillUpdate.js */ 6970)
let dreamsbank_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./DreamsBank/Rules/ResetAppSettingsAndLogout.js */ 5474)
let dreamsbank_rules_traer_fecha_js = __webpack_require__(/*! ./DreamsBank/Rules/traer_fecha.js */ 1046)
let dreamsbank_services_dreamsbankmov_service = __webpack_require__(/*! ./DreamsBank/Services/dreamsbankmov.service */ 1174)
let dreamsbank_styles_styles_css = __webpack_require__(/*! ./DreamsBank/Styles/Styles.css */ 4078)
let dreamsbank_styles_styles_less = __webpack_require__(/*! ./DreamsBank/Styles/Styles.less */ 6022)
let dreamsbank_styles_styles_light_css = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.css */ 1689)
let dreamsbank_styles_styles_light_json = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.json */ 1480)
let dreamsbank_styles_styles_light_nss = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.nss */ 5610)
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ 7775)
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ 292)

module.exports = {
	application_app : application_app,
	dreamsbank_actions_appupdate_action : dreamsbank_actions_appupdate_action,
	dreamsbank_actions_appupdatefailuremessage_action : dreamsbank_actions_appupdatefailuremessage_action,
	dreamsbank_actions_appupdateprogressbanner_action : dreamsbank_actions_appupdateprogressbanner_action,
	dreamsbank_actions_appupdatesuccessmessage_action : dreamsbank_actions_appupdatesuccessmessage_action,
	dreamsbank_actions_closemodalpage_cancel_action : dreamsbank_actions_closemodalpage_cancel_action,
	dreamsbank_actions_closemodalpage_complete_action : dreamsbank_actions_closemodalpage_complete_action,
	dreamsbank_actions_closepage_action : dreamsbank_actions_closepage_action,
	dreamsbank_actions_createentityfailuremessage_action : dreamsbank_actions_createentityfailuremessage_action,
	dreamsbank_actions_createentitysuccessmessage_action : dreamsbank_actions_createentitysuccessmessage_action,
	dreamsbank_actions_deleteconfirmation_action : dreamsbank_actions_deleteconfirmation_action,
	dreamsbank_actions_deleteentityfailuremessage_action : dreamsbank_actions_deleteentityfailuremessage_action,
	dreamsbank_actions_deleteentitysuccessmessage_action : dreamsbank_actions_deleteentitysuccessmessage_action,
	dreamsbank_actions_knowledgefactory_navto_menuknowledgefactory_action : dreamsbank_actions_knowledgefactory_navto_menuknowledgefactory_action,
	dreamsbank_actions_knowledgepeople_consultas_navto_consultas_asignaciones_action : dreamsbank_actions_knowledgepeople_consultas_navto_consultas_asignaciones_action,
	dreamsbank_actions_knowledgepeople_consultas_navto_consultas_aspirante_action : dreamsbank_actions_knowledgepeople_consultas_navto_consultas_aspirante_action,
	dreamsbank_actions_knowledgepeople_consultas_navto_menuconsultas_action : dreamsbank_actions_knowledgepeople_consultas_navto_menuconsultas_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_createentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_createentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_deleteentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_deleteentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_updateentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_aspirante_updateentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_create_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_create_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_detail_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_detail_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_edit_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_edit_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_list_action : dreamsbank_actions_knowledgepeople_datos_maestros_aspirante_navtoaspirante_list_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_createentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_createentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_deleteentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_deleteentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_updateentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_donante_updateentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_create_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_create_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_detail_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_detail_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_edit_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_edit_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_list_action : dreamsbank_actions_knowledgepeople_datos_maestros_donante_navtodonante_list_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_navto_menudatosmaestros_action : dreamsbank_actions_knowledgepeople_datos_maestros_navto_menudatosmaestros_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_create_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_create_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_detail_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_detail_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_edit_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_edit_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_list_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_navtoproducto_list_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_createentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_createentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_deleteentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_deleteentity_action,
	dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_updateentity_action : dreamsbank_actions_knowledgepeople_datos_maestros_producto_producto_updateentity_action,
	dreamsbank_actions_knowledgepeople_navto_knowledgepeople_action : dreamsbank_actions_knowledgepeople_navto_knowledgepeople_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_create_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_create_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_createxdonante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_asignacion_createxdonante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_aspiracion_create_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_aspiracion_create_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_aspirar_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_aspirar_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_donacion_create_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_donacion_create_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_donar_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_donar_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_aspiranteresumen_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_aspiranteresumen_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_seleccionaspirante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_seleccionaspirante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_selecciondonante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignar_selecciondonante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_resumen_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_resumen_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_seleccionaspirante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_seleccionaspirante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_selecciondonante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_asignarxdonante_selecciondonante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_aspirar_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_aspirar_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_donante_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_donante_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_producto_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_consultas_producto_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_donar_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_donar_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_login_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_login_action,
	dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_menu_proceso_action : dreamsbank_actions_knowledgepeople_nuevo_proceso_navto_menu_proceso_action,
	dreamsbank_actions_knowledgeproject_asignacionxaspirante_create_action : dreamsbank_actions_knowledgeproject_asignacionxaspirante_create_action,
	dreamsbank_actions_knowledgeproject_create_aspiracionkp_action : dreamsbank_actions_knowledgeproject_create_aspiracionkp_action,
	dreamsbank_actions_knowledgeproject_create_aspirantekp_action : dreamsbank_actions_knowledgeproject_create_aspirantekp_action,
	dreamsbank_actions_knowledgeproject_create_donante_kp_action : dreamsbank_actions_knowledgeproject_create_donante_kp_action,
	dreamsbank_actions_knowledgeproject_create_donar_kp_action : dreamsbank_actions_knowledgeproject_create_donar_kp_action,
	dreamsbank_actions_knowledgeproject_create_fabricante_kp_action : dreamsbank_actions_knowledgeproject_create_fabricante_kp_action,
	dreamsbank_actions_knowledgeproject_navto_asignarxaspirante_kp_action : dreamsbank_actions_knowledgeproject_navto_asignarxaspirante_kp_action,
	dreamsbank_actions_knowledgeproject_navto_aspirante_create_action : dreamsbank_actions_knowledgeproject_navto_aspirante_create_action,
	dreamsbank_actions_knowledgeproject_navto_aspirantelist_action : dreamsbank_actions_knowledgeproject_navto_aspirantelist_action,
	dreamsbank_actions_knowledgeproject_navto_aspirar_kp_action : dreamsbank_actions_knowledgeproject_navto_aspirar_kp_action,
	dreamsbank_actions_knowledgeproject_navto_donante_create_action : dreamsbank_actions_knowledgeproject_navto_donante_create_action,
	dreamsbank_actions_knowledgeproject_navto_donantelist_action : dreamsbank_actions_knowledgeproject_navto_donantelist_action,
	dreamsbank_actions_knowledgeproject_navto_donar_kp_action : dreamsbank_actions_knowledgeproject_navto_donar_kp_action,
	dreamsbank_actions_knowledgeproject_navto_fabricante_create_action : dreamsbank_actions_knowledgeproject_navto_fabricante_create_action,
	dreamsbank_actions_knowledgeproject_navto_fabricante_list_action : dreamsbank_actions_knowledgeproject_navto_fabricante_list_action,
	dreamsbank_actions_knowledgeproject_navto_kp_nuevoproceso_action : dreamsbank_actions_knowledgeproject_navto_kp_nuevoproceso_action,
	dreamsbank_actions_knowledgeproject_navto_kpresumenaspirante_action : dreamsbank_actions_knowledgeproject_navto_kpresumenaspirante_action,
	dreamsbank_actions_knowledgeproject_navto_login_kp_action : dreamsbank_actions_knowledgeproject_navto_login_kp_action,
	dreamsbank_actions_knowledgeproject_navto_menu_datosmaestros_action : dreamsbank_actions_knowledgeproject_navto_menu_datosmaestros_action,
	dreamsbank_actions_knowledgeproject_navto_menuknowledgeproject_action : dreamsbank_actions_knowledgeproject_navto_menuknowledgeproject_action,
	dreamsbank_actions_knowledgeproject_navto_selecciondonante_action : dreamsbank_actions_knowledgeproject_navto_selecciondonante_action,
	dreamsbank_actions_knowledgeproject_navto_seleccionfabricante_action : dreamsbank_actions_knowledgeproject_navto_seleccionfabricante_action,
	dreamsbank_actions_knowledgerun_consultas_navto_consultasporasignacion_action : dreamsbank_actions_knowledgerun_consultas_navto_consultasporasignacion_action,
	dreamsbank_actions_knowledgerun_consultas_navto_consultasporaspirante_action : dreamsbank_actions_knowledgerun_consultas_navto_consultasporaspirante_action,
	dreamsbank_actions_knowledgerun_consultas_navto_consultasporempresa_action : dreamsbank_actions_knowledgerun_consultas_navto_consultasporempresa_action,
	dreamsbank_actions_knowledgerun_consultas_navto_menuconsultas_action : dreamsbank_actions_knowledgerun_consultas_navto_menuconsultas_action,
	dreamsbank_actions_knowledgerun_consultas_navtoconsutlasporproducto_kr_action : dreamsbank_actions_knowledgerun_consultas_navtoconsutlasporproducto_kr_action,
	dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantelist_action : dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantelist_action,
	dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantescreatekr_action : dreamsbank_actions_knowledgerun_datos_maestros_aspirante_navto_aspirantescreatekr_action,
	dreamsbank_actions_knowledgerun_datos_maestros_empresa_create_empresa_action : dreamsbank_actions_knowledgerun_datos_maestros_empresa_create_empresa_action,
	dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresacreate_action : dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresacreate_action,
	dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresalist_action : dreamsbank_actions_knowledgerun_datos_maestros_empresa_navto_empresalist_action,
	dreamsbank_actions_knowledgerun_datos_maestros_navto_menudatosmaestros_action : dreamsbank_actions_knowledgerun_datos_maestros_navto_menudatosmaestros_action,
	dreamsbank_actions_knowledgerun_navto_menu_knowledgerun_action : dreamsbank_actions_knowledgerun_navto_menu_knowledgerun_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxaspirantekr_create_action : dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxaspirantekr_create_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxempresakr_create_action : dreamsbank_actions_knowledgerun_nuevo_proceso_asignacionxempresakr_create_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_action : dreamsbank_actions_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_aspiracionkr_create_action : dreamsbank_actions_knowledgerun_nuevo_proceso_aspiracionkr_create_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_donacionkr_create_action : dreamsbank_actions_knowledgerun_nuevo_proceso_donacionkr_create_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_seleccionempresa_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspirante_seleccionempresa_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspiranteresumen_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxaspiranteresumen_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresa_seleccionaspirante_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresa_seleccionaspirante_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresaresumen_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_asignarxempresaresumen_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_aspirar_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_aspirar_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_buscartalentos_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_buscartalentos_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_login_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_login_action,
	dreamsbank_actions_knowledgerun_nuevo_proceso_navto_menunuevoproceso_action : dreamsbank_actions_knowledgerun_nuevo_proceso_navto_menunuevoproceso_action,
	dreamsbank_actions_logout_action : dreamsbank_actions_logout_action,
	dreamsbank_actions_logoutmessage_action : dreamsbank_actions_logoutmessage_action,
	dreamsbank_actions_onwillupdate_action : dreamsbank_actions_onwillupdate_action,
	dreamsbank_actions_service_initializeonline_action : dreamsbank_actions_service_initializeonline_action,
	dreamsbank_actions_service_initializeonlinefailuremessage_action : dreamsbank_actions_service_initializeonlinefailuremessage_action,
	dreamsbank_actions_service_initializeonlinesuccessmessage_action : dreamsbank_actions_service_initializeonlinesuccessmessage_action,
	dreamsbank_actions_updateentityfailuremessage_action : dreamsbank_actions_updateentityfailuremessage_action,
	dreamsbank_actions_updateentitysuccessmessage_action : dreamsbank_actions_updateentitysuccessmessage_action,
	dreamsbank_globals_appdefinition_version_global : dreamsbank_globals_appdefinition_version_global,
	dreamsbank_i18n_i18n_properties : dreamsbank_i18n_i18n_properties,
	dreamsbank_images_area_trabajo_png : dreamsbank_images_area_trabajo_png,
	dreamsbank_images_dreamsbank_jpg : dreamsbank_images_dreamsbank_jpg,
	dreamsbank_images_finanza_png : dreamsbank_images_finanza_png,
	dreamsbank_images_innovar_png : dreamsbank_images_innovar_png,
	dreamsbank_images_produccion_png : dreamsbank_images_produccion_png,
	dreamsbank_images_usersmanagment_png : dreamsbank_images_usersmanagment_png,
	dreamsbank_jsconfig_json : dreamsbank_jsconfig_json,
	dreamsbank_pages_knowledgefactory_menu_knowledgefactory_page : dreamsbank_pages_knowledgefactory_menu_knowledgefactory_page,
	dreamsbank_pages_knowledgepeople_consultas_consultas_asignaciones_page : dreamsbank_pages_knowledgepeople_consultas_consultas_asignaciones_page,
	dreamsbank_pages_knowledgepeople_consultas_consultas_aspirante_page : dreamsbank_pages_knowledgepeople_consultas_consultas_aspirante_page,
	dreamsbank_pages_knowledgepeople_consultas_consultas_donante_page : dreamsbank_pages_knowledgepeople_consultas_consultas_donante_page,
	dreamsbank_pages_knowledgepeople_consultas_consultas_producto_page : dreamsbank_pages_knowledgepeople_consultas_consultas_producto_page,
	dreamsbank_pages_knowledgepeople_consultas_menu_consultas_page : dreamsbank_pages_knowledgepeople_consultas_menu_consultas_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_create_page : dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_create_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_detail_page : dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_detail_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_edit_page : dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_edit_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_list_page : dreamsbank_pages_knowledgepeople_datos_maestros_aspirante_aspirante_list_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_create_page : dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_create_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_detail_page : dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_detail_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_edit_page : dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_edit_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_list_page : dreamsbank_pages_knowledgepeople_datos_maestros_donante_donante_list_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_menu_datosmaestros_page : dreamsbank_pages_knowledgepeople_datos_maestros_menu_datosmaestros_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_create_page : dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_create_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_detail_page : dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_detail_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_edit_page : dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_edit_page,
	dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_list_page : dreamsbank_pages_knowledgepeople_datos_maestros_producto_producto_list_page,
	dreamsbank_pages_knowledgepeople_menu_knowledgepeople_page : dreamsbank_pages_knowledgepeople_menu_knowledgepeople_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_aspiranteresumen_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_aspiranteresumen_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_seleccionaspirante_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_seleccionaspirante_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_selecciondonante_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignar_selecciondonante_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_resumen_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_resumen_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_seleccionaspirante_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_seleccionaspirante_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_selecciondonante_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_asignarxdonante_selecciondonante_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_aspirar_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_aspirar_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_donar_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_donar_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_login_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_login_page,
	dreamsbank_pages_knowledgepeople_nuevo_proceso_menu_proceso_page : dreamsbank_pages_knowledgepeople_nuevo_proceso_menu_proceso_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_create_page : dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_create_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_list_page : dreamsbank_pages_knowledgeproject_datos_maestros_aspirante_aspirante_list_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_create_page : dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_create_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_list_page : dreamsbank_pages_knowledgeproject_datos_maestros_donante_donante_list_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_create_page : dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_create_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_list_page : dreamsbank_pages_knowledgeproject_datos_maestros_fabricante_fabricante_list_page,
	dreamsbank_pages_knowledgeproject_datos_maestros_menu_datosmaestros_page : dreamsbank_pages_knowledgeproject_datos_maestros_menu_datosmaestros_page,
	dreamsbank_pages_knowledgeproject_menu_knowledgeproject_page : dreamsbank_pages_knowledgeproject_menu_knowledgeproject_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_asignarxaspirante_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_asignarxaspirante_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_aspirar_kp_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_aspirar_kp_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_donar_kp_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_donar_kp_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_kp_login_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_kp_login_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_menu_nuevoproceso_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_menu_nuevoproceso_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_resumenxaspirante_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_resumenxaspirante_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_seleccionfabricante_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_seleccionfabricante_page,
	dreamsbank_pages_knowledgeproject_nuevo_proceso_seleciciondonante_page : dreamsbank_pages_knowledgeproject_nuevo_proceso_seleciciondonante_page,
	dreamsbank_pages_knowledgerun_consultas_consultaporaspirante_page : dreamsbank_pages_knowledgerun_consultas_consultaporaspirante_page,
	dreamsbank_pages_knowledgerun_consultas_consultasporasignacion_page : dreamsbank_pages_knowledgerun_consultas_consultasporasignacion_page,
	dreamsbank_pages_knowledgerun_consultas_consultasporempresa_page : dreamsbank_pages_knowledgerun_consultas_consultasporempresa_page,
	dreamsbank_pages_knowledgerun_consultas_consultasporproducto_page : dreamsbank_pages_knowledgerun_consultas_consultasporproducto_page,
	dreamsbank_pages_knowledgerun_consultas_menu_consultas_page : dreamsbank_pages_knowledgerun_consultas_menu_consultas_page,
	dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_create_page : dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_create_page,
	dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_list_page : dreamsbank_pages_knowledgerun_datos_maestros_aspirante_aspirante_list_page,
	dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_create_page : dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_create_page,
	dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_list_page : dreamsbank_pages_knowledgerun_datos_maestros_empresa_empresa_list_page,
	dreamsbank_pages_knowledgerun_datos_maestros_menu_datosmaestros_page : dreamsbank_pages_knowledgerun_datos_maestros_menu_datosmaestros_page,
	dreamsbank_pages_knowledgerun_menu_knowledgerun_page : dreamsbank_pages_knowledgerun_menu_knowledgerun_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_resumen_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_resumen_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_seleccionempresa_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxaspirante_seleccionempresa_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_resumen_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_resumen_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionaspirante_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionaspirante_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_page : dreamsbank_pages_knowledgerun_nuevo_proceso_asignarxempresa_seleccionempresa_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_aspirar_page : dreamsbank_pages_knowledgerun_nuevo_proceso_aspirar_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_buscar_talentos_page : dreamsbank_pages_knowledgerun_nuevo_proceso_buscar_talentos_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_login_page : dreamsbank_pages_knowledgerun_nuevo_proceso_login_page,
	dreamsbank_pages_knowledgerun_nuevo_proceso_menu_nuevoproceso_page : dreamsbank_pages_knowledgerun_nuevo_proceso_menu_nuevoproceso_page,
	dreamsbank_pages_main_page : dreamsbank_pages_main_page,
	dreamsbank_rules_appupdatefailure_js : dreamsbank_rules_appupdatefailure_js,
	dreamsbank_rules_appupdatesuccess_js : dreamsbank_rules_appupdatesuccess_js,
	dreamsbank_rules_knowledgepeople_consultas_filtrararea_js : dreamsbank_rules_knowledgepeople_consultas_filtrararea_js,
	dreamsbank_rules_knowledgepeople_consultas_filtrartipo_js : dreamsbank_rules_knowledgepeople_consultas_filtrartipo_js,
	dreamsbank_rules_knowledgepeople_consultas_filtroproducto_js : dreamsbank_rules_knowledgepeople_consultas_filtroproducto_js,
	dreamsbank_rules_knowledgepeople_consultas_vertodos_js : dreamsbank_rules_knowledgepeople_consultas_vertodos_js,
	dreamsbank_rules_knowledgepeople_consultas_vertodos_kr_js : dreamsbank_rules_knowledgepeople_consultas_vertodos_kr_js,
	dreamsbank_rules_knowledgepeople_datos_maestros_aspirante_aspirante_deleteconfirmation_js : dreamsbank_rules_knowledgepeople_datos_maestros_aspirante_aspirante_deleteconfirmation_js,
	dreamsbank_rules_knowledgepeople_datos_maestros_donante_donante_deleteconfirmation_js : dreamsbank_rules_knowledgepeople_datos_maestros_donante_donante_deleteconfirmation_js,
	dreamsbank_rules_knowledgepeople_datos_maestros_donante_selecciontipopersonadonante_js : dreamsbank_rules_knowledgepeople_datos_maestros_donante_selecciontipopersonadonante_js,
	dreamsbank_rules_knowledgepeople_datos_maestros_producto_producto_deleteconfirmation_js : dreamsbank_rules_knowledgepeople_datos_maestros_producto_producto_deleteconfirmation_js,
	dreamsbank_rules_knowledgepeople_datos_maestros_producto_tipoproducto_js : dreamsbank_rules_knowledgepeople_datos_maestros_producto_tipoproducto_js,
	dreamsbank_rules_knowledgepeople_nuevo_proceso_cargar_nombrerol_js : dreamsbank_rules_knowledgepeople_nuevo_proceso_cargar_nombrerol_js,
	dreamsbank_rules_knowledgepeople_nuevo_proceso_check_login_js : dreamsbank_rules_knowledgepeople_nuevo_proceso_check_login_js,
	dreamsbank_rules_knowledgeproject_cargarnombrerolkp_js : dreamsbank_rules_knowledgeproject_cargarnombrerolkp_js,
	dreamsbank_rules_knowledgeproject_kp_check_login_js : dreamsbank_rules_knowledgeproject_kp_check_login_js,
	dreamsbank_rules_knowledgerun_nuevoproceso_cargar_datos_menu_js : dreamsbank_rules_knowledgerun_nuevoproceso_cargar_datos_menu_js,
	dreamsbank_rules_knowledgerun_nuevoproceso_check_login_js : dreamsbank_rules_knowledgerun_nuevoproceso_check_login_js,
	dreamsbank_rules_onwillupdate_js : dreamsbank_rules_onwillupdate_js,
	dreamsbank_rules_resetappsettingsandlogout_js : dreamsbank_rules_resetappsettingsandlogout_js,
	dreamsbank_rules_traer_fecha_js : dreamsbank_rules_traer_fecha_js,
	dreamsbank_services_dreamsbankmov_service : dreamsbank_services_dreamsbankmov_service,
	dreamsbank_styles_styles_css : dreamsbank_styles_styles_css,
	dreamsbank_styles_styles_less : dreamsbank_styles_styles_less,
	dreamsbank_styles_styles_light_css : dreamsbank_styles_styles_light_css,
	dreamsbank_styles_styles_light_json : dreamsbank_styles_styles_light_json,
	dreamsbank_styles_styles_light_nss : dreamsbank_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ 9568:
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ 6280)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ 1480:
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GreenText":{"font-color":"#258029"},"RedText":{"font-color":"#912a2a"},"Header":{"font-color":"#000000"},"Header2":{"font-color":"aquamarine"}}');

/***/ }),

/***/ 8300:
/*!****************************************************!*\
  !*** ./build.definitions/DreamsBank/jsconfig.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ 7775:
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(9568);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map