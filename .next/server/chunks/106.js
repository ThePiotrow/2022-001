"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 1802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__);


const CSwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()));
const CustomSwal = CSwal.mixin({
    customClass: {
        popup: "bg-white/80 backdrop-blur-xl rounded-xl shadow-lg p-6",
        confirmButton: "bg-green-500 hover:bg-green-600 rounded-lg",
        cancelButton: "bg-red-500 hover:bg-red-600 rounded-lg"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSwal);


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InterventionForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomSwal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1802);
/* harmony import */ var _json_services_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1043);



function InterventionForm() {
    _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fire */ .Z.fire({
        title: "Demande d'intervention",
        html: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            id: "form",
            class: "grid grid-cols-1 gap-6 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "name",
                            children: "Nom et Pr\xe9nom"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            name: "name",
                            id: "name",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "email",
                            children: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "phone",
                            children: "T\xe9l\xe9phone"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "number",
                            name: "phone",
                            id: "phone",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "address",
                            children: "Adresse"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            name: "address",
                            id: "address",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "city",
                            children: "Ville"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            name: "city",
                            id: "city",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "zip",
                            children: "Code postal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "number",
                            name: "zip",
                            id: "zip",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "type",
                            children: "Type d'intervention"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            name: "type",
                            id: "type",
                            class: "border border-gray-300 rounded-lg px-4 py-3",
                            children: _json_services_json__WEBPACK_IMPORTED_MODULE_2__.map((service)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: service.slug,
                                    children: service.name
                                }, `askFor_${service}`);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-left",
                            for: "message",
                            children: "Message"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            name: "message",
                            id: "message",
                            class: "border border-gray-300 rounded-lg px-4 py-3"
                        })
                    ]
                })
            ]
        }),
        showCancelButton: true,
        confirmButtonColor: "#166534",
        cancelButtonColor: "#d33",
        confirmButtonText: "Envoyer",
        cancelButtonText: "Annuler",
        width: "850px",
        preConfirm: ()=>{
            const name = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#name").value;
            const email = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#email").value;
            const phone = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#phone").value;
            const address = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#address").value;
            const city = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#city").value;
            const zip = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#zip").value;
            const type = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#type").value;
            const message = _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPopup */ .Z.getPopup().querySelector("#message").value;
            if (!name || !email || !phone || !address || !city || !zip || !type || !message) {
                _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].showValidationMessage */ .Z.showValidationMessage(`Veuillez remplir tous les champs`);
            }
            return {
                email,
                phone,
                address,
                city,
                zip,
                message
            };
        }
    }).then((result)=>{
        if (result.isConfirmed) {
            _CustomSwal__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fire */ .Z.fire({
                title: "Demande envoy\xe9e",
                text: "Votre demande a bien \xe9t\xe9 envoy\xe9e, nous vous contacterons dans les plus brefs d\xe9lais",
                icon: "success",
                confirmButtonText: "Merci !",
                confirmButtonColor: "#166534"
            });
        }
    });
}


/***/ }),

/***/ 1043:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"D??ratisation","landing":{"blocs":[{"tag":"h1","content":"D??ratisation en ??le-de-France : ??limination des rats et souris par des professionnels"},{"tag":"p","content":"Vous habitez en ??le-de-France et vous avez un probl??me de rats ou souris dans votre maison ou votre jardin ? Ne laissez pas ces nuisibles envahir votre espace de vie et confiez leur ??limination ?? notre entreprise de d??ratisation professionnelle bas??e en ??le-de-France.<br><br>Notre ??quipe de d??ratiseurs exp??riment??s est disponible pour intervenir rapidement et efficacement dans tous les d??partements de la r??gion ??le-de-France, quel que soit le niveau de contamination de votre habitation. Nous utilisons des m??thodes de traitement ??prouv??es et respectueuses de l\'environnement pour ??liminer les rats et souris de mani??re s??re et durable.<br><br>En plus de l\'??limination des nuisibles, nous proposons ??galement des solutions de pr??vention pour emp??cher les rats et souris de p??n??trer ?? nouveau dans votre maison. N\'h??sitez pas ?? nous contacter pour plus d\'informations sur nos services de d??ratisation en ??le-de-France, notamment dans les d??partements suivants :"},{"tag":"ul","content":["Paris","Seine-et-Marne","Yvelines","Essonne","Hauts-de-Seine","Seine-Saint-Denis","Val-de-Marne","Val-d\'Oise"]},{"tag":"h2","content":"Pourquoi faire appel ?? notre entreprise de d??ratisation en ??le-de-France ?"},{"tag":"ul","content":["Des d??ratiseurs professionnels et exp??riment??s","Interventions rapides et efficaces","M??thodes de traitement respectueuses de l\'environnement","Solutions de pr??vention contre les reprises","Disponibles dans tous les d??partements de la r??gion ??le-de-France"]},{"tag":"p","content":"N\'attendez plus et contactez-nous d??s maintenant pour ??liminer les rats et souris de votre maison en ??le-de-France ! Nous serons heureux de r??pondre ?? toutes vos questions et de vous fournir un devis gratuit pour nos services de d??ratisation."}]},"description":["Vous en avez assez de cohabiter avec les souris et les rats? Nous avons la solution pour vous: notre service de d??ratisation professionnel ??liminera d??finitivement ces nuisibles de votre maison ou de votre entreprise. Contactez-nous d??s maintenant pour en savoir plus!","Notre ??quipe de d??ratiseurs exp??riment??s s\'engage ?? vous offrir un service de qualit?? pour ??liminer les souris et les rats de votre environnement. Nous utilisons des m??thodes efficaces et respectueuses de l\'environnement pour vous garantir un r??sultat durable. Contactez-nous pour obtenir un devis gratuit.","La pr??sence de souris et de rats peut causer de nombreux probl??mes: dommages mat??riels, risque de maladies, etc. N\'attendez pas pour agir! Faites appel ?? notre service de d??ratisation professionnel pour ??radiquer ces nuisibles de votre maison ou de votre entreprise. Contactez-nous d??s maintenant pour en savoir plus.","Vous cherchez une solution efficace pour vous d??barrasser des souris et des rats? Faites confiance ?? notre ??quipe de d??ratiseurs professionnels. Nous mettons ?? votre disposition tous les moyens n??cessaires pour ??liminer ces nuisibles de mani??re d??finitive. Contactez-nous d??s maintenant pour obtenir un devis gratuit.","Ne laissez pas les souris et les rats envahir votre espace de vie. Faites appel ?? notre service de d??ratisation professionnel pour les ??liminer de mani??re s??curitaire et durable.","La d??ratisation est une ??tape cruciale pour prot??ger votre sant?? et celle de votre famille. Faites confiance ?? notre ??quipe d\'experts pour ??liminer efficacement les souris et les rats de votre maison.","Vous avez rep??r?? des signes de pr??sence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention rapide et efficace.","Ne laissez pas les souris et les rats causer des dommages mat??riels ?? votre propri??t??. Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive.","La d??ratisation est une ??tape essentielle pour garantir la s??curit?? de votre maison ou de votre entreprise. Faites confiance ?? notre ??quipe d\'experts pour ??liminer efficacement les souris et les rats.","Vous cherchez une solution rapide et efficace pour vous d??barrasser des souris et des rats? Faites appel ?? notre service de d??ratisation professionnel.","Les souris et les rats peuvent causer de nombreux probl??mes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous d??s maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive.","Les souris et les rats peuvent causer de graves probl??mes de sant??. N\'attendez pas pour agir, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle.","La d??ratisation est une ??tape essentielle pour prot??ger votre maison ou votre entreprise des dommages caus??s par les souris et les rats. Faites confiance ?? notre ??quipe d\'experts pour une intervention rapide et efficace.","Vous avez rep??r?? des souris ou des rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle.","Les souris et les rats peuvent causer de graves dommages ?? votre propri??t??. Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive.","Les souris et les rats peuvent causer de graves probl??mes de sant??. Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre sant?? et celle de votre famille.","Vous cherchez une solution efficace et durable pour vous d??barrasser des souris et des rats? Faites confiance ?? notre ??quipe d\'experts en d??ratisation.","La d??ratisation est une ??tape essentielle pour prot??ger votre maison ou votre entreprise des dommages caus??s par les souris et les rats. Contactez-nous d??s maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t??.","Les souris et les rats peuvent causer de graves dommages ?? votre propri??t??. Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle.","Vous avez rep??r?? des signes de pr??sence de souris ou de rats dans votre maison ou votre entreprise? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive.","La d??ratisation est une ??tape cruciale pour prot??ger votre sant?? et celle de votre famille. Contactez-nous d??s maintenant pour une intervention rapide et efficace.","Les souris et les rats peuvent causer de graves probl??mes de sant??. Ne prenez pas de risques, faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive.","Vous cherchez une solution rapide et efficace pour vous d??barrasser des souris et des rats? Faites confiance ?? notre ??quipe d\'experts en d??ratisation.","La d??ratisation est une ??tape essentielle pour prot??ger votre maison ou votre entreprise des dommages caus??s par les souris et les rats. Contactez-nous d??s maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t??.","Les souris et les rats peuvent causer de graves dommages ?? votre propri??t??. Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle."],"paragraph":["Vous ??tes victime d\'une infestation de souris ou de rats dans votre maison ou votre entreprise? Ne laissez pas ces nuisibles causer des dommages ?? votre propri??t?? et mettre votre sant?? en danger. Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive. Notre ??quipe d\'experts utilise des m??thodes efficaces et respectueuses de l\'environnement pour garantir un r??sultat durable. Contactez-nous d??s maintenant pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","Vous avez rep??r?? des signes de pr??sence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle. Nous utilisons des m??thodes efficaces pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t?? contre les dommages qu\'ils peuvent causer. Nous mettons ?? votre disposition tous les moyens n??cessaires pour vous garantir un r??sultat durable. Contactez-nous d??s maintenant pour en savoir plus.","Les souris et les rats peuvent causer de graves probl??mes de sant?? et de nombreux dommages mat??riels ?? votre propri??t??. Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle. Notre ??quipe d\'experts utilise des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive. Nous mettons ?? votre disposition tous les moyens n??cessaires pour vous garantir un r??sultat durable. Faites appel ?? notre service de d??ratisation professionnel pour prot??ger votre sant?? et celle de votre famille.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t?? contre les dommages qu\'ils peuvent causer. Nous utilisons des m??thodes efficaces et respectueuses de l\'environnement pour garantir un r??sultat durable. Contactez-nous d??s maintenant pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","Vous avez rep??r?? des signes de pr??sence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle. Nous mettons ?? votre disposition tous les moyens n??cessaires pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t?? contre les dommages qu\'ils peuvent causer. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","Les souris et les rats peuvent causer de graves probl??mes de sant?? et de nombreux dommages mat??riels ?? votre propri??t??. Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle. Notre ??quipe d\'experts utilise des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive. Nous vous proposons un devis gratuit afin que vous puissiez prendre une d??cision ??clair??e. Faites appel ?? notre service de d??ratisation professionnel pour prot??ger votre sant?? et celle de votre famille.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel ?? notre service de d??ratisation professionnel pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t?? contre les dommages qu\'ils peuvent causer. Nous mettons ?? votre disposition tous les moyens n??cessaires pour garantir un r??sultat durable. Contactez-nous d??s maintenant pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","La pr??sence de souris et de rats peut causer de nombreux probl??mes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous d??s maintenant pour une intervention de d??ratisation professionnelle. Nous utilisons des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles."],"slug":"deratisation"},{"id":2,"name":"D??sinsectisation","landing":{"blocs":[{"tag":"h1","content":"D??sinsectisation professionnelle en ??le-de-France"},{"tag":"p","content":"Vous habitez en ??le-de-France et vous avez un probl??me d\'infestation de nuisibles ? Nous sommes l?? pour vous aider !<br><br>Notre entreprise de d??sinsectisation est sp??cialis??e dans la lutte contre les nuisibles tels que les cafards, les moustiques, les fourmis, les punaises de lit et bien d\'autres encore. Nous proposons des services de qualit?? professionnelle pour ??liminer ces nuisibles de votre maison ou de votre entreprise.<br><br>Nous sommes une entreprise sp??cialis??e en d??sinsectisation et nous utilisons des produits et des m??thodes de traitement qui sont s??rs et efficaces. Nous sommes ??galement form??s pour g??rer tous les types d\'infestations de nuisibles, quelle que soit leur taille ou leur gravit??.<br><br>N\'h??sitez pas ?? nous contacter pour plus d\'informations ou pour demander un devis gratuit. Nous sommes impatients de vous aider ?? ??liminer les nuisibles de votre vie !"},{"tag":"h2","content":"Pourquoi choisir notre entreprise de d??sinsectisation en ??le-de-France ?"},{"tag":"ul","content":["Nous sommes une entreprise professionnelle et exp??riment??e dans la lutte contre les nuisibles en ??le-de-France.","Nous utilisons des produits et des m??thodes de traitement s??rs et efficaces.","Nous sommes form??s pour g??rer tous les types d\'infestations de nuisibles, quelle que soit leur taille ou leur gravit??.","Nous offrons un service rapide et efficace pour ??liminer les nuisibles de votre maison ou de votre entreprise.","Nous proposons des tarifs comp??titifs et transparents."]},{"tag":"h2","content":"Comment nous contacter ?"},{"tag":"p","content":"Vous pouvez nous contacter par t??l??phone au 01 02 03 04 05 ou en remplissant notre formulaire de contact en ligne. Nous nous ferons un plaisir de r??pondre ?? toutes vos questions et de vous aider ?? r??soudre votre probl??me d\'infestation de nuisibles en ??le-de-France.<br><br>N\'h??sitez pas ?? nous contacter d??s maintenant pour en savoir plus sur nos services de d??sinsectisation et demander un devis gratuit. Nous sommes impatients de vous aider ?? ??liminer les nuisibles de votre vie !"}]},"description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","paragraph":["Vous ??tes victime d\'une infestation de nuisibles, tels que des moustiques, des punaises de lit, des cafards, etc.? Ne laissez pas ces insectes envahir votre maison ou votre entreprise et mettre votre sant?? en danger. Faites appel ?? notre service de d??sinsectisation professionnelle pour ??liminer ces nuisibles de mani??re d??finitive. Notre ??quipe d\'experts utilise des m??thodes efficaces et respectueuses de l\'environnement pour garantir un r??sultat durable. Contactez-nous d??s maintenant pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","Vous avez rep??r?? des signes de pr??sence de nuisibles dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??sinsectisation professionnelle. Nous utilisons des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive et prot??ger votre propri??t?? contre les dommages qu\'ils peuvent causer. Nous vous proposons un devis gratuit afin que vous puissiez prendre une d??cision ??clair??e. Faites appel ?? notre service de d??sinsectisation professionnelle pour prot??ger votre sant?? et celle de votre famille.","Les nuisibles peuvent causer de graves probl??mes de sant?? et de nombreux dommages mat??riels ?? votre propri??t??. Ne prenez pas de risques, contactez-nous d??s maintenant pour une intervention de d??sinsectisation professionnelle. Notre ??quipe d\'experts utilise des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive. Nous mettons ?? votre disposition tous les moyens n??cessaires pour garantir un r??sultat durable. Contactez-nous d??s maintenant pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles.","La pr??sence de nuisibles peut causer de nombreux probl??mes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous d??s maintenant pour une intervention de d??sinsectisation professionnelle. Nous utilisons des m??thodes efficaces et respectueuses de l\'environnement pour ??liminer ces nuisibles de mani??re d??finitive. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et d??barrassez-vous enfin de ces nuisibles."],"slug":"desinsectisation"},{"id":3,"name":"D??sinfection","landing":{"blocs":[{"tag":"h1","content":"D??sinfection professionnelle en ??le-de-France"},{"tag":"p","content":"Vous cherchez une entreprise de d??sinfection fiable et professionnelle en ??le-de-France ? Nous sommes l?? pour vous aider !<br><br>Notre entreprise de d??sinfection est sp??cialis??e dans le nettoyage et la d??sinfection de surfaces et d\'espaces publics. Nous proposons des services de qualit?? pour assurer la propret?? et la s??curit?? de votre maison, de votre entreprise ou de tout autre espace public.<br><br>Nous utilisons des produits et des m??thodes de nettoyage et de d??sinfection qui sont s??curitaires et efficaces. Nous sommes ??galement form??s pour g??rer tous les types de surfaces et d\'espaces, quelle que soit leur taille ou leur complexit??.<br><br>Contactez-nous d??s maintenant pour en savoir plus sur nos services de d??sinfection en ??le-de-France et demander un devis gratuit. Nous sommes impatients de vous aider ?? assurer la propret?? et la s??curit?? de votre espace !"},{"tag":"h2","content":"Pourquoi choisir notre entreprise de d??sinfection ?"},{"tag":"ul","content":["Nous sommes une entreprise professionnelle et exp??riment??e dans le domaine de la d??sinfection.","Nous utilisons des produits et des m??thodes de nettoyage et de d??sinfection s??curitaires et efficaces.","Nous sommes form??s pour g??rer tous les types de surfaces et d\'espaces, quelle que soit leur taille ou leur complexit??.","Nous offrons un service rapide et efficace pour assurer la propret?? et la s??curit?? de votre espace.","Nous proposons des tarifs comp??titifs et transparents."]},{"tag":"h2","content":"Comment nous contacter ?"},{"tag":"p","content":"Il vous suffit de nous appeler au 01 02 03 04 05 ou de remplir notre formulaire de contact en ligne pour nous faire part de votre demande. Nous vous r??pondrons dans les plus brefs d??lais pour ??changer sur vos besoins en mati??re de d??sinfection et vous proposer une solution adapt??e.<br><br>N\'h??sitez pas ?? nous contacter d??s maintenant pour en savoir plus sur nos services de d??sinfection en ??le-de-France et demander un devis gratuit. Nous sommes impatients de vous aider ?? assurer la propret?? et la s??curit?? de votre espace !"}]},"description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","paragraph":["Vous cherchez une solution efficace pour assurer la d??sinfection de votre maison ou votre entreprise? Faites appel ?? notre service de d??sinfection professionnelle. Notre ??quipe d\'experts utilise des produits et des ??quipements de qualit?? sup??rieure pour garantir un r??sultat optimal. Nous mettons ?? votre disposition tous les moyens n??cessaires pour assurer la d??sinfection compl??te de votre propri??t?? et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une d??sinfection de qualit??.","La d??sinfection est essentielle pour assurer la sant?? et la s??curit?? de votre maison ou votre entreprise. Nous mettons ?? votre disposition tous les moyens n??cessaires pour assurer une d??sinfection compl??te de votre propri??t?? et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. Faites appel ?? notre service de d??sinfection professionnelle pour profiter d\'une solution efficace et de qualit?? sup??rieure. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une d??sinfection de qualit??.","La d??sinfection est une ??tape essentielle pour assurer la sant?? et la s??curit?? de votre maison ou votre entreprise. Faites appel ?? notre service de d??sinfection professionnelle pour profiter d\'une solution rapide et efficace. Nous mettons ?? votre disposition tous les moyens n??cessaires pour assurer une d??sinfection compl??te de votre propri??t?? et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualit?? sup??rieure.","Vous cherchez une solution fiable et professionnelle pour assurer la d??sinfection de votre maison ou votre entreprise? Faites appel ?? notre service de d??sinfection. Nous mettons ?? votre disposition tous les moyens n??cessaires pour garantir un r??sultat optimal et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une solution efficace et de qualit?? sup??rieure.","La d??sinfection est une ??tape cruciale pour assurer la sant?? et la s??curit?? de votre maison ou votre entreprise. Faites appel ?? notre service de d??sinfection professionnelle pour profiter d\'une solution de qualit?? sup??rieure. Nous utilisons des produits et des ??quipements de qualit?? sup??rieure pour garantir un r??sultat optimal. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une d??sinfection compl??te et efficace.","Vous cherchez une solution professionnelle et fiable pour assurer la d??sinfection de votre maison ou votre entreprise? Faites appel ?? notre service de d??sinfection. Nous mettons ?? votre disposition tous les moyens n??cessaires pour assurer une d??sinfection compl??te de votre propri??t?? et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualit?? sup??rieure.","La d??sinfection est une ??tape cruciale pour assurer la sant?? et la s??curit?? de votre maison ou votre entreprise. Faites appel ?? notre service de d??sinfection professionnelle pour profiter d\'une solution de qualit?? sup??rieure. Nous utilisons des produits et des ??quipements de qualit?? sup??rieure pour garantir un r??sultat optimal. Nous pouvons intervenir sous 2 heures et vous proposons un devis gratuit afin que vous puissiez prendre une d??cision ??clair??e. Faites confiance ?? notre ??quipe d\'experts pour une d??sinfection compl??te et efficace.","Vous cherchez une solution professionnelle et fiable pour assurer la d??sinfection de votre maison ou votre entreprise? Faites appel ?? notre service de d??sinfection. Nous pouvons intervenir sous 2 heures et mettons ?? votre disposition tous les moyens n??cessaires pour assurer une d??sinfection compl??te de votre propri??t?? et prot??ger votre sant?? et celle de votre famille ou de vos employ??s. N\'h??sitez pas ?? nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualit?? sup??rieure."],"slug":"desinfection"},{"id":4,"name":"D??moussage","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"demoussage"},{"id":5,"name":"D??taupisation","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"detaupisation"},{"id":6,"name":"D??pigeonage","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"depigeonage"}]');

/***/ })

};
;