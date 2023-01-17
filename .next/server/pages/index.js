"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Section({ children , style , container =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: classNames(style === "black" ? "bg-gray-700 text-white" : "bg-gray-50", "flex relative w-full items-center justify-between py-10 md:justify-center overflow-x-hidden"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classNames(container ? "container" : "", "z-30 py-5 mx-auto sm:px-6 lg:px-8 px-20"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-6",
                children: children
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 1772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/TopPage.js
var TopPage = __webpack_require__(4058);
// EXTERNAL MODULE: ./components/Section.js
var Section = __webpack_require__(4737);
;// CONCATENATED MODULE: ./json/targets.json
const targets_namespaceObject = JSON.parse('[{"id":1,"name":"Rat","category":"Les rongeurs"},{"id":2,"name":"Souris","category":"Les rongeurs"},{"id":3,"name":"Taupe","category":"Les rongeurs"},{"id":4,"name":"Loire","category":"Les rongeurs"},{"id":5,"name":"Cafard","category":"Les insectes"},{"id":6,"name":"Puce","category":"Les insectes"},{"id":7,"name":"Acarien","category":"Les insectes"},{"id":8,"name":"Chenille","category":"Les insectes"},{"id":9,"name":"Araignée","category":"Les insectes"},{"id":10,"name":"Fourmi","category":"Les insectes"},{"id":11,"name":"Punaise de lit","category":"Les insectes"},{"id":12,"name":"Pigeon","category":"Les oiseaux"},{"id":13,"name":"Guêpe","category":"Les insectes"},{"id":14,"name":"Frelon","category":"Les insectes"},{"id":15,"name":"Termite","category":"Les insectes"},{"id":16,"name":"Mouche","category":"Les insectes"},{"id":17,"name":"Moucheron","category":"Les insectes"},{"id":18,"name":"Moustique","category":"Les insectes"},{"id":19,"name":"Poisson d\'argent","category":"Les insectes"},{"id":20,"name":"Cloporte","category":"Les insectes"},{"id":21,"name":"Mite alimentaire","category":"Les insectes"},{"id":22,"name":"Mite de vêtements","category":"Les insectes"}]');
;// CONCATENATED MODULE: ./json/products.json
const products_namespaceObject = JSON.parse('[{"id":1,"name":"Nébulisateur incesticides","description":"Le nébulisateur incesticide est un appareil utilisé pour diffuser des insecticides sous forme de fines particules dans l\'air. Il est souvent utilisé pour lutter contre les insectes nuisibles dans les maisons, les jardins et les cultures."},{"id":2,"name":"Pulvérisateur à pression insecticide","description":"Le pulvérisateur à pression insecticide est un appareil qui utilise de la pression pour propulser des insecticides sous forme de jet ou de brume. Il est souvent utilisé pour traiter les plantes et les surfaces contre les insectes et les maladies."},{"id":3,"name":"Piège à taupe","description":"Le piège à taupe est un dispositif utilisé pour capturer les taupes, qui sont des animaux souterrains nuisibles qui peuvent endommager les pelouses et les jardins. Le piège est généralement placé dans le tunnel de la taupe et se déclenche lorsque l\'animal y entre."},{"id":4,"name":"Piège à loire","description":"Le piège à loire est un appareil utilisé pour capturer les loires, qui sont des oiseaux nuisibles qui peuvent causer des dommages aux cultures et aux jardins. Le piège est généralement placé dans les endroits où les loires sont susceptibles de se nourrir et attire les oiseaux avec de la nourriture."},{"id":5,"name":"Pique anti-pigeon","description":"Les piques anti-pigeon est un dispositif utilisé pour empêcher les pigeons de se poser sur les rebords de fenêtre, les balcons et les toits. Ils sont généralement constitués de barres métalliques pointues placées de manière à ce que les pigeons ne puissent pas se poser confortablement."},{"id":6,"name":"Poste d\'appatage rat/souris","description":"Le poste d\'appatage est un dispositif conçu pour attirer et capturer les rats et les souris. Il peut être utilisé dans une variété de situations, comme dans les maisons, les entreprises, les fermes, etc. pour contrôler les populations de rongeurs. Le poste d\'appatage peut être alimenté par des appâts solides ou liquides et est généralement fabriqué en plastique ou en métal."},{"id":7,"name":"Plaque de glue rat/souris","description":"La plaque de glue est une plaque collante conçue pour capturer les rats et les souris. La plaque est couverte d\'une substance collante qui retient les rongeurs lorsqu\'ils y marchent dessus. La plaque de glue est généralement placée dans les endroits où les rats et les souris sont susceptibles de passer, comme le long des murs ou sous les éviers."},{"id":8,"name":"Nasse à rat/souris","description":"La nasse est un piège conçu pour capturer les rats et les souris vivants. La nasse est généralement fabriquée en métal ou en plastique et est dotée d\'une ouverture à l\'une de ses extrémités. Lorsqu\'un rat ou une souris entre dans la nasse, il ne peut pas en sortir et est pris au piège."},{"id":9,"name":"Piège anti-termite","description":"Le piège anti-termite est un dispositif conçu pour détecter et capturer les termites afin de protéger les maisons et les bâtiments contre ces insectes nuisibles. Les pièges anti-termite sont généralement placés à l\'extérieur des bâtiments et peuvent être alimentés par des appâts ou des répulsifs chimiques."},{"id":10,"name":"Injecteur traitement termite","description":"L\'injecteur traitement termite est un outil utilisé pour injecter un produit de traitement contre les termites dans les charpentes en bois. L\'injecteur est généralement utilisé pour traiter les bâtiments qui ont déjà été infestés par les termites afin de les éliminer et de protéger le bois contre de futurs problèmes."}]');
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/init.js
const availableRegions = (/* unused pure expression or super */ null && ([
    "11"
]));
const availableDepartments = (/* unused pure expression or super */ null && ([]));
function slugify(text) {
    return text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "-");
}
function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}
;

;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
// EXTERNAL MODULE: ./components/CustomSwal.js
var CustomSwal = __webpack_require__(1802);
// EXTERNAL MODULE: ./components/InterventionForm.js
var InterventionForm = __webpack_require__(106);
;// CONCATENATED MODULE: ./pages/index.js












const Home = ()=>{
    const [groupedTargets, setGroupedTargets] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setGroupedTargets(groupBy(targets_namespaceObject, "category"));
    }, []);
    const popup = (target)=>{
        CustomSwal/* default.fire */.Z.fire({
            title: target.name,
            text: target.description,
            confirmButtonText: "Fermer",
            confirmButtonColor: "#166534"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "DSTR 3D | Accueil"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TopPage/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col md:flex-row items-center h-full w-full sm:px-6 lg:px-8 px-20",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-7 container mx-auto my-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-center h-full flex-grow justify-self-center max-w-[500px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-4xl md:text-5xl pb-3 font-semibold text-center text-white",
                                        children: "DSTR 3D"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xl md:text-2xl font-semibold text-center text-white",
                                        children: "Votre sp\xe9cialiste en d\xe9ratisation, d\xe9sinsectisation et d\xe9sinfection"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-lg text-center text-white",
                                        children: "Nous intervenons sur toute l'\xcele de France"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden p-8 rounded-xl lg:flex flex-col flex-grow max-w-[350px] justify-self-center self-center bg-white/80 backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-xl font-semibold text-center leading-8",
                                        children: "Besoin d'une intervention rapide ?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-orange-500 hover:bg-orange-700 duration-100 py-3 px-4 rounded-lg text-lg font-semibold text-white mt-5",
                                        onClick: InterventionForm/* default */.Z,
                                        children: "Demander une intervention"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-4xl font-semibold mb-2 text-center",
                children: "Nos cibles"
            }),
            Object.keys(groupedTargets).map((category, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                    style: "",
                    container: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-3xl py-4 border-b-2 border-b-green-500",
                                children: category
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-12",
                                children: groupedTargets[category].map((target, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>{
                                            popup(target);
                                        },
                                        className: "card group flex h-28 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] shadow-color-gray-900 rounded-xl ring-1 ring-slate-100 duration-100 overflow-hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute bottom-0 px-6 py-4 group-hover:bottom-2 duration-200",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-xl font-bold text-start pb-2 mb-2 border-b-4 border-b-green-500",
                                                children: target.name
                                            })
                                        })
                                    });
                                })
                            })
                        ]
                    }, i)
                });
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                style: "black",
                container: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-4xl font-semibold mb-2 text-center",
                        children: "Nos solutions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-12",
                        children: products_namespaceObject.map((product, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card text-black group flex h-28 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] shadow-color-gray-900 rounded-xl ring-1 ring-slate-100 duration-100 overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute bottom-0 px-6 py-4 group-hover:bottom-2 duration-200",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-xl font-bold text-start pb-2 mb-2 border-b-4 border-b-green-500",
                                        children: product.name
                                    })
                                })
                            }, i);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("sweetalert2-react-content");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,58,106], () => (__webpack_exec__(1772)));
module.exports = __webpack_exports__;

})();