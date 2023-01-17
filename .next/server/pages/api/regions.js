"use strict";
(() => {
var exports = {};
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 6688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./json/regions.json
const regions_namespaceObject = JSON.parse('[{"id":1,"code":"01","name":"Guadeloupe","slug":"guadeloupe"},{"id":2,"code":"02","name":"Martinique","slug":"martinique"},{"id":3,"code":"03","name":"Guyane","slug":"guyane"},{"id":4,"code":"04","name":"La Réunion","slug":"la reunion"},{"id":5,"code":"06","name":"Mayotte","slug":"mayotte"},{"id":6,"code":"11","name":"Île-de-France","slug":"ile de france"},{"id":7,"code":"24","name":"Centre-Val de Loire","slug":"centre val de loire"},{"id":8,"code":"27","name":"Bourgogne-Franche-Comté","slug":"bourgogne franche comte"},{"id":9,"code":"28","name":"Normandie","slug":"normandie"},{"id":10,"code":"32","name":"Hauts-de-France","slug":"hauts de france"},{"id":11,"code":"44","name":"Grand Est","slug":"grand est"},{"id":12,"code":"52","name":"Pays de la Loire","slug":"pays de la loire"},{"id":13,"code":"53","name":"Bretagne","slug":"bretagne"},{"id":14,"code":"75","name":"Nouvelle-Aquitaine","slug":"nouvelle aquitaine"},{"id":15,"code":"76","name":"Occitanie","slug":"occitanie"},{"id":16,"code":"84","name":"Auvergne-Rhône-Alpes","slug":"auvergne rhone alpes"},{"id":17,"code":"93","name":"Provence-Alpes-Côte d\'Azur","slug":"provence alpes cote dazur"},{"id":18,"code":"94","name":"Corse","slug":"corse"},{"id":19,"code":"COM","name":"Collectivités d\'Outre-Mer","slug":"collectivites doutre mer"}]');
;// CONCATENATED MODULE: ./pages/api/regions.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    return res.status(200).json(regions_namespaceObject ?? []);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6688));
module.exports = __webpack_exports__;

})();