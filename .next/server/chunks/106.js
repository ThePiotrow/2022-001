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

module.exports = JSON.parse('[{"id":1,"name":"Dératisation","landing":{"blocs":[{"tag":"h1","content":"Dératisation en Île-de-France : élimination des rats et souris par des professionnels"},{"tag":"p","content":"Vous habitez en Île-de-France et vous avez un problème de rats ou souris dans votre maison ou votre jardin ? Ne laissez pas ces nuisibles envahir votre espace de vie et confiez leur élimination à notre entreprise de dératisation professionnelle basée en Île-de-France.<br><br>Notre équipe de dératiseurs expérimentés est disponible pour intervenir rapidement et efficacement dans tous les départements de la région Île-de-France, quel que soit le niveau de contamination de votre habitation. Nous utilisons des méthodes de traitement éprouvées et respectueuses de l\'environnement pour éliminer les rats et souris de manière sûre et durable.<br><br>En plus de l\'élimination des nuisibles, nous proposons également des solutions de prévention pour empêcher les rats et souris de pénétrer à nouveau dans votre maison. N\'hésitez pas à nous contacter pour plus d\'informations sur nos services de dératisation en Île-de-France, notamment dans les départements suivants :"},{"tag":"ul","content":["Paris","Seine-et-Marne","Yvelines","Essonne","Hauts-de-Seine","Seine-Saint-Denis","Val-de-Marne","Val-d\'Oise"]},{"tag":"h2","content":"Pourquoi faire appel à notre entreprise de dératisation en Île-de-France ?"},{"tag":"ul","content":["Des dératiseurs professionnels et expérimentés","Interventions rapides et efficaces","Méthodes de traitement respectueuses de l\'environnement","Solutions de prévention contre les reprises","Disponibles dans tous les départements de la région Île-de-France"]},{"tag":"p","content":"N\'attendez plus et contactez-nous dès maintenant pour éliminer les rats et souris de votre maison en Île-de-France ! Nous serons heureux de répondre à toutes vos questions et de vous fournir un devis gratuit pour nos services de dératisation."}]},"description":["Vous en avez assez de cohabiter avec les souris et les rats? Nous avons la solution pour vous: notre service de dératisation professionnel éliminera définitivement ces nuisibles de votre maison ou de votre entreprise. Contactez-nous dès maintenant pour en savoir plus!","Notre équipe de dératiseurs expérimentés s\'engage à vous offrir un service de qualité pour éliminer les souris et les rats de votre environnement. Nous utilisons des méthodes efficaces et respectueuses de l\'environnement pour vous garantir un résultat durable. Contactez-nous pour obtenir un devis gratuit.","La présence de souris et de rats peut causer de nombreux problèmes: dommages matériels, risque de maladies, etc. N\'attendez pas pour agir! Faites appel à notre service de dératisation professionnel pour éradiquer ces nuisibles de votre maison ou de votre entreprise. Contactez-nous dès maintenant pour en savoir plus.","Vous cherchez une solution efficace pour vous débarrasser des souris et des rats? Faites confiance à notre équipe de dératiseurs professionnels. Nous mettons à votre disposition tous les moyens nécessaires pour éliminer ces nuisibles de manière définitive. Contactez-nous dès maintenant pour obtenir un devis gratuit.","Ne laissez pas les souris et les rats envahir votre espace de vie. Faites appel à notre service de dératisation professionnel pour les éliminer de manière sécuritaire et durable.","La dératisation est une étape cruciale pour protéger votre santé et celle de votre famille. Faites confiance à notre équipe d\'experts pour éliminer efficacement les souris et les rats de votre maison.","Vous avez repéré des signes de présence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention rapide et efficace.","Ne laissez pas les souris et les rats causer des dommages matériels à votre propriété. Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive.","La dératisation est une étape essentielle pour garantir la sécurité de votre maison ou de votre entreprise. Faites confiance à notre équipe d\'experts pour éliminer efficacement les souris et les rats.","Vous cherchez une solution rapide et efficace pour vous débarrasser des souris et des rats? Faites appel à notre service de dératisation professionnel.","Les souris et les rats peuvent causer de nombreux problèmes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous dès maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive.","Les souris et les rats peuvent causer de graves problèmes de santé. N\'attendez pas pour agir, contactez-nous dès maintenant pour une intervention de dératisation professionnelle.","La dératisation est une étape essentielle pour protéger votre maison ou votre entreprise des dommages causés par les souris et les rats. Faites confiance à notre équipe d\'experts pour une intervention rapide et efficace.","Vous avez repéré des souris ou des rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle.","Les souris et les rats peuvent causer de graves dommages à votre propriété. Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive.","Les souris et les rats peuvent causer de graves problèmes de santé. Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive et protéger votre santé et celle de votre famille.","Vous cherchez une solution efficace et durable pour vous débarrasser des souris et des rats? Faites confiance à notre équipe d\'experts en dératisation.","La dératisation est une étape essentielle pour protéger votre maison ou votre entreprise des dommages causés par les souris et les rats. Contactez-nous dès maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive et protéger votre propriété.","Les souris et les rats peuvent causer de graves dommages à votre propriété. Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle.","Vous avez repéré des signes de présence de souris ou de rats dans votre maison ou votre entreprise? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive.","La dératisation est une étape cruciale pour protéger votre santé et celle de votre famille. Contactez-nous dès maintenant pour une intervention rapide et efficace.","Les souris et les rats peuvent causer de graves problèmes de santé. Ne prenez pas de risques, faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive.","Vous cherchez une solution rapide et efficace pour vous débarrasser des souris et des rats? Faites confiance à notre équipe d\'experts en dératisation.","La dératisation est une étape essentielle pour protéger votre maison ou votre entreprise des dommages causés par les souris et les rats. Contactez-nous dès maintenant pour une intervention rapide et efficace.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive et protéger votre propriété.","Les souris et les rats peuvent causer de graves dommages à votre propriété. Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle."],"paragraph":["Vous êtes victime d\'une infestation de souris ou de rats dans votre maison ou votre entreprise? Ne laissez pas ces nuisibles causer des dommages à votre propriété et mettre votre santé en danger. Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive. Notre équipe d\'experts utilise des méthodes efficaces et respectueuses de l\'environnement pour garantir un résultat durable. Contactez-nous dès maintenant pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","Vous avez repéré des signes de présence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle. Nous utilisons des méthodes efficaces pour éliminer ces nuisibles de manière définitive et protéger votre propriété contre les dommages qu\'ils peuvent causer. Nous mettons à votre disposition tous les moyens nécessaires pour vous garantir un résultat durable. Contactez-nous dès maintenant pour en savoir plus.","Les souris et les rats peuvent causer de graves problèmes de santé et de nombreux dommages matériels à votre propriété. Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle. Notre équipe d\'experts utilise des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive. Nous mettons à votre disposition tous les moyens nécessaires pour vous garantir un résultat durable. Faites appel à notre service de dératisation professionnel pour protéger votre santé et celle de votre famille.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive et protéger votre propriété contre les dommages qu\'ils peuvent causer. Nous utilisons des méthodes efficaces et respectueuses de l\'environnement pour garantir un résultat durable. Contactez-nous dès maintenant pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","Vous avez repéré des signes de présence de souris ou de rats dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle. Nous mettons à votre disposition tous les moyens nécessaires pour éliminer ces nuisibles de manière définitive et protéger votre propriété contre les dommages qu\'ils peuvent causer. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","Les souris et les rats peuvent causer de graves problèmes de santé et de nombreux dommages matériels à votre propriété. Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de dératisation professionnelle. Notre équipe d\'experts utilise des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive. Nous vous proposons un devis gratuit afin que vous puissiez prendre une décision éclairée. Faites appel à notre service de dératisation professionnel pour protéger votre santé et celle de votre famille.","Vous en avez assez de cohabiter avec les souris et les rats? Faites appel à notre service de dératisation professionnel pour éliminer ces nuisibles de manière définitive et protéger votre propriété contre les dommages qu\'ils peuvent causer. Nous mettons à votre disposition tous les moyens nécessaires pour garantir un résultat durable. Contactez-nous dès maintenant pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","La présence de souris et de rats peut causer de nombreux problèmes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous dès maintenant pour une intervention de dératisation professionnelle. Nous utilisons des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles."],"slug":"deratisation"},{"id":2,"name":"Désinsectisation","landing":{"blocs":[{"tag":"h1","content":"Désinsectisation professionnelle en Île-de-France"},{"tag":"p","content":"Vous habitez en Île-de-France et vous avez un problème d\'infestation de nuisibles ? Nous sommes là pour vous aider !<br><br>Notre entreprise de désinsectisation est spécialisée dans la lutte contre les nuisibles tels que les cafards, les moustiques, les fourmis, les punaises de lit et bien d\'autres encore. Nous proposons des services de qualité professionnelle pour éliminer ces nuisibles de votre maison ou de votre entreprise.<br><br>Nous sommes une entreprise spécialisée en désinsectisation et nous utilisons des produits et des méthodes de traitement qui sont sûrs et efficaces. Nous sommes également formés pour gérer tous les types d\'infestations de nuisibles, quelle que soit leur taille ou leur gravité.<br><br>N\'hésitez pas à nous contacter pour plus d\'informations ou pour demander un devis gratuit. Nous sommes impatients de vous aider à éliminer les nuisibles de votre vie !"},{"tag":"h2","content":"Pourquoi choisir notre entreprise de désinsectisation en Île-de-France ?"},{"tag":"ul","content":["Nous sommes une entreprise professionnelle et expérimentée dans la lutte contre les nuisibles en Île-de-France.","Nous utilisons des produits et des méthodes de traitement sûrs et efficaces.","Nous sommes formés pour gérer tous les types d\'infestations de nuisibles, quelle que soit leur taille ou leur gravité.","Nous offrons un service rapide et efficace pour éliminer les nuisibles de votre maison ou de votre entreprise.","Nous proposons des tarifs compétitifs et transparents."]},{"tag":"h2","content":"Comment nous contacter ?"},{"tag":"p","content":"Vous pouvez nous contacter par téléphone au 01 02 03 04 05 ou en remplissant notre formulaire de contact en ligne. Nous nous ferons un plaisir de répondre à toutes vos questions et de vous aider à résoudre votre problème d\'infestation de nuisibles en Île-de-France.<br><br>N\'hésitez pas à nous contacter dès maintenant pour en savoir plus sur nos services de désinsectisation et demander un devis gratuit. Nous sommes impatients de vous aider à éliminer les nuisibles de votre vie !"}]},"description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","paragraph":["Vous êtes victime d\'une infestation de nuisibles, tels que des moustiques, des punaises de lit, des cafards, etc.? Ne laissez pas ces insectes envahir votre maison ou votre entreprise et mettre votre santé en danger. Faites appel à notre service de désinsectisation professionnelle pour éliminer ces nuisibles de manière définitive. Notre équipe d\'experts utilise des méthodes efficaces et respectueuses de l\'environnement pour garantir un résultat durable. Contactez-nous dès maintenant pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","Vous avez repéré des signes de présence de nuisibles dans votre maison ou votre entreprise? Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de désinsectisation professionnelle. Nous utilisons des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive et protéger votre propriété contre les dommages qu\'ils peuvent causer. Nous vous proposons un devis gratuit afin que vous puissiez prendre une décision éclairée. Faites appel à notre service de désinsectisation professionnelle pour protéger votre santé et celle de votre famille.","Les nuisibles peuvent causer de graves problèmes de santé et de nombreux dommages matériels à votre propriété. Ne prenez pas de risques, contactez-nous dès maintenant pour une intervention de désinsectisation professionnelle. Notre équipe d\'experts utilise des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive. Nous mettons à votre disposition tous les moyens nécessaires pour garantir un résultat durable. Contactez-nous dès maintenant pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles.","La présence de nuisibles peut causer de nombreux problèmes dans votre maison ou votre entreprise. N\'attendez pas pour agir, contactez-nous dès maintenant pour une intervention de désinsectisation professionnelle. Nous utilisons des méthodes efficaces et respectueuses de l\'environnement pour éliminer ces nuisibles de manière définitive. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et débarrassez-vous enfin de ces nuisibles."],"slug":"desinsectisation"},{"id":3,"name":"Désinfection","landing":{"blocs":[{"tag":"h1","content":"Désinfection professionnelle en Île-de-France"},{"tag":"p","content":"Vous cherchez une entreprise de désinfection fiable et professionnelle en Île-de-France ? Nous sommes là pour vous aider !<br><br>Notre entreprise de désinfection est spécialisée dans le nettoyage et la désinfection de surfaces et d\'espaces publics. Nous proposons des services de qualité pour assurer la propreté et la sécurité de votre maison, de votre entreprise ou de tout autre espace public.<br><br>Nous utilisons des produits et des méthodes de nettoyage et de désinfection qui sont sécuritaires et efficaces. Nous sommes également formés pour gérer tous les types de surfaces et d\'espaces, quelle que soit leur taille ou leur complexité.<br><br>Contactez-nous dès maintenant pour en savoir plus sur nos services de désinfection en Île-de-France et demander un devis gratuit. Nous sommes impatients de vous aider à assurer la propreté et la sécurité de votre espace !"},{"tag":"h2","content":"Pourquoi choisir notre entreprise de désinfection ?"},{"tag":"ul","content":["Nous sommes une entreprise professionnelle et expérimentée dans le domaine de la désinfection.","Nous utilisons des produits et des méthodes de nettoyage et de désinfection sécuritaires et efficaces.","Nous sommes formés pour gérer tous les types de surfaces et d\'espaces, quelle que soit leur taille ou leur complexité.","Nous offrons un service rapide et efficace pour assurer la propreté et la sécurité de votre espace.","Nous proposons des tarifs compétitifs et transparents."]},{"tag":"h2","content":"Comment nous contacter ?"},{"tag":"p","content":"Il vous suffit de nous appeler au 01 02 03 04 05 ou de remplir notre formulaire de contact en ligne pour nous faire part de votre demande. Nous vous répondrons dans les plus brefs délais pour échanger sur vos besoins en matière de désinfection et vous proposer une solution adaptée.<br><br>N\'hésitez pas à nous contacter dès maintenant pour en savoir plus sur nos services de désinfection en Île-de-France et demander un devis gratuit. Nous sommes impatients de vous aider à assurer la propreté et la sécurité de votre espace !"}]},"description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","paragraph":["Vous cherchez une solution efficace pour assurer la désinfection de votre maison ou votre entreprise? Faites appel à notre service de désinfection professionnelle. Notre équipe d\'experts utilise des produits et des équipements de qualité supérieure pour garantir un résultat optimal. Nous mettons à votre disposition tous les moyens nécessaires pour assurer la désinfection complète de votre propriété et protéger votre santé et celle de votre famille ou de vos employés. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une désinfection de qualité.","La désinfection est essentielle pour assurer la santé et la sécurité de votre maison ou votre entreprise. Nous mettons à votre disposition tous les moyens nécessaires pour assurer une désinfection complète de votre propriété et protéger votre santé et celle de votre famille ou de vos employés. Faites appel à notre service de désinfection professionnelle pour profiter d\'une solution efficace et de qualité supérieure. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une désinfection de qualité.","La désinfection est une étape essentielle pour assurer la santé et la sécurité de votre maison ou votre entreprise. Faites appel à notre service de désinfection professionnelle pour profiter d\'une solution rapide et efficace. Nous mettons à votre disposition tous les moyens nécessaires pour assurer une désinfection complète de votre propriété et protéger votre santé et celle de votre famille ou de vos employés. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualité supérieure.","Vous cherchez une solution fiable et professionnelle pour assurer la désinfection de votre maison ou votre entreprise? Faites appel à notre service de désinfection. Nous mettons à votre disposition tous les moyens nécessaires pour garantir un résultat optimal et protéger votre santé et celle de votre famille ou de vos employés. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une solution efficace et de qualité supérieure.","La désinfection est une étape cruciale pour assurer la santé et la sécurité de votre maison ou votre entreprise. Faites appel à notre service de désinfection professionnelle pour profiter d\'une solution de qualité supérieure. Nous utilisons des produits et des équipements de qualité supérieure pour garantir un résultat optimal. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une désinfection complète et efficace.","Vous cherchez une solution professionnelle et fiable pour assurer la désinfection de votre maison ou votre entreprise? Faites appel à notre service de désinfection. Nous mettons à votre disposition tous les moyens nécessaires pour assurer une désinfection complète de votre propriété et protéger votre santé et celle de votre famille ou de vos employés. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualité supérieure.","La désinfection est une étape cruciale pour assurer la santé et la sécurité de votre maison ou votre entreprise. Faites appel à notre service de désinfection professionnelle pour profiter d\'une solution de qualité supérieure. Nous utilisons des produits et des équipements de qualité supérieure pour garantir un résultat optimal. Nous pouvons intervenir sous 2 heures et vous proposons un devis gratuit afin que vous puissiez prendre une décision éclairée. Faites confiance à notre équipe d\'experts pour une désinfection complète et efficace.","Vous cherchez une solution professionnelle et fiable pour assurer la désinfection de votre maison ou votre entreprise? Faites appel à notre service de désinfection. Nous pouvons intervenir sous 2 heures et mettons à votre disposition tous les moyens nécessaires pour assurer une désinfection complète de votre propriété et protéger votre santé et celle de votre famille ou de vos employés. N\'hésitez pas à nous contacter pour obtenir un devis gratuit et profitez d\'une solution de qualité supérieure."],"slug":"desinfection"},{"id":4,"name":"Démoussage","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"demoussage"},{"id":5,"name":"Détaupisation","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"detaupisation"},{"id":6,"name":"Dépigeonage","description":"On trouve les insectes, on les retire et vous retrouvez votre vie normale","slug":"depigeonage"}]');

/***/ })

};
;