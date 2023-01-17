"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 3178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const TopPage = ({ image , title , blur , children , height , alt  })=>{
    const handleScroll = (e)=>{
        const title = document.getElementById("title");
        const image = document.getElementById("image");
        if (image) image.style.transform = `translateY(${window.scrollY / 6}px)`;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classNames(!image ? "bg-green-700" : "", "flex relative w-150 h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] justify-center overflow-hidden mb-8"),
        children: [
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                id: "image",
                src: image,
                alt: alt ?? "Image",
                style: {
                    objectFit: "cover",
                    filter: blur ?? "blur(8px)",
                    zIndex: 0
                },
                fill: true,
                priority: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/70"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute mx-auto sm:px-6 lg:px-8 px-20 container h-full pb-10 flex flex-row items-center justify-center lg:justify-start w-full",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        id: "title",
                        className: "text-5xl font-extrabold text-white lg:text-left text-center bg-green-800 p-5",
                        children: title
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-screen h-1/4 -bottom-[14%] skew-y-[1.3deg] bg-gray-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-screen h-1/4 -bottom-[17%] -skew-y-[1.6deg] bg-gray-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            })
        ]
    });
};
async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/departments");
    const res_services = await fetch("http://localhost:3000/api/services");
    const departments = await res.json();
    const services = await res_services.json();
    const paths = departments.reduce((acc, department)=>{
        department.cities.forEach((city)=>{
            services.forEach((service)=>{
                acc.push({
                    params: {
                        department: department.slug.toString(),
                        city: city.slug.toString(),
                        service: service.slug.toString()
                    }
                });
            });
        });
        return acc;
    }, []);
    console.log(paths);
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const { service , department , city  } = context.params;
    const res = await fetch(`http://localhost:3000/api/${department}/${city}`);
    const res_service = await fetch(`http://localhost:3000/api/services/${service}`);
    const res_department = await fetch(`http://localhost:3000/api/${department}`);
    const jservice = await res_service.json();
    const jdepartment = await res_department.json();
    const data = await res.json();
    const SITE_NAME = process.env.SITE_NAME;
    return {
        props: {
            service: jservice,
            department: jdepartment,
            city: data,
            SITE_NAME
        }
    };
}
const City = ({ service , department , city , SITE_NAME  })=>{
    // const src = 'https://api.mapbox.com/styles/v1/thepiotrow/clbjootsb000x14p187hxu9pj/static/2.45464180851064,48.772986382978715,12,0,60/1280x800@2x?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g'
    // const src = 'https://api.mapbox.com/styles/v1/thepiotrow/clcl2jqbg001o14t2v8due4rp/static/2.45464180851064,48.772986382978715,12,0,60/1280x800@2x?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g'
    // const src = 'https://api.mapbox.com/styles/v1/thepiotrow/clcl2rxu8002g15mur0gldpyn/static/2.45464180851064,48.772986382978715,12,0,60/1280x800@2x?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g'
    // const src = 'https://api.mapbox.com/styles/v1/thepiotrow/clbiq01go000t14n24d36r87e/static/2.45464180851064,48.772986382978715,12,0,60/1280x800@2x?access_token=pk.eyJ1IjoidGhlcGlvdHJvdyIsImEiOiJjbGJpb3V1aGUwaHcxM3htbHo5MTgyeDlyIn0.0IPrcAlSv_dajoimf1ud1g'
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${SITE_NAME} | ${service.name} à ${city.name} (${department.code})`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopPage, {
                alt: `Vue aérienne de la ville de ${city.name}`,
                image: `/images/${department.slug}_${city.slug}.png`,
                title: `${service.name} à ${city.name} (${department.code})`,
                blur: "false"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex min-h-[50vh] flex-col items-center pb-2 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "container z-30 text-center rounded-md pt-16 px-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-5xl z-40 mb-16 text-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute inset-x-0 h-[300px] skew-y-[0.75deg] bg-green-700 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-x-0 top-10 h-[200px] -skew-y-[1.4deg] bg-green-600 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "skew-y-0 font-bold text-white pt-24",
                                    children: "Nous allons jusqu'\xe0 chez vous !"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-12"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (City);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(3178)));
module.exports = __webpack_exports__;

})();