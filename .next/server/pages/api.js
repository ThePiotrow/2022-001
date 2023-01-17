"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 9976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    // const data = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     service_id: 'service_u03iw3b',
    //     template_id: 'template_kmptgzt',
    //     user_id: 'x2BX9vJ0llvcpx_Yd',
    //     accessToken: 'qwXFhdbHm0rpIm2AKt18x',
    //     template_params: {
    //       'from_name': 'test',
    //       'to_name': 'test',
    //       'message_html': 'test',
    //     }
    //   })
    // }).then(console.log);
    return res.status(200).json("Mais c'est super \xe7a !");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9976));
module.exports = __webpack_exports__;

})();