"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 4058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



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
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopPage);


/***/ })

};
;