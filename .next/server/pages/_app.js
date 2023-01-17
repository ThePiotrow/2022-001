(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.f58ab26e.png","height":712,"width":794,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAALVBMVEVMaXFihFid4VZ0QDuWzHiGl25UkYiFvYBRa1s8TTr/AB1mXj15yltSl1p+u4EAXyffAAAADXRSTlMACBdL3tMjWPm2D2iT8k8mYAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJxjYGBgYGAEESCaCcJiZ+FhAtFcrHy83GARZg5OZogcGyMjTDmQCwAOXAB12EgrsQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./json/services.json
var services = __webpack_require__(1043);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/InterventionForm.js
var InterventionForm = __webpack_require__(106);
;// CONCATENATED MODULE: ./components/Navbar.js








function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Nav() {
    const router = (0,router_namespaceObject.useRouter)();
    let [menuIsOpen, setMenuIsOpen] = (0,external_react_.useState)(false);
    let [navigation, setNavigation] = (0,external_react_.useState)([]);
    let [dropdown, setDropdown] = (0,external_react_.useState)(false);
    let [currentPage, setCurrentPage] = (0,external_react_.useState)("/" + (router.asPath.split("/")[1] || ""));
    (0,external_react_.useEffect)(()=>{
        setDropdown(false);
        setCurrentPage("/" + (router.asPath.split("/")[1] || ""));
    }, [
        router.asPath
    ]);
    (0,external_react_.useEffect)(()=>{
        let nav = [
            {
                name: "Accueil",
                href: "/"
            }
        ];
        let children = [];
        services.slice(0, 3).map((service)=>{
            nav.push({
                name: service.name,
                href: `/${service.slug}`
            });
        });
        services.slice(3).map((service)=>{
            children.push({
                name: service.name,
                href: `/${service.slug}`
            });
        });
        nav.push({
            name: "Tous nos services",
            children
        });
        setNavigation(nav);
    }, []);
    const toggleMenu = ()=>{
        setMenuIsOpen(!menuIsOpen);
    };
    const toggleDropdown = ()=>{
        setDropdown(!dropdown);
    };
    const closeDropdown = ()=>{
        setTimeout(()=>{
            setDropdown(false);
        }, 150);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        id: "header",
        className: "sticky bg-white/75 text-gray-900 w-full z-50 backdrop-blur-xl top-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "Logo",
                        width: 100,
                        height: 100
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block lg:hidden pr-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        id: "nav-toggle",
                        className: "flex items-center px-3 py-2 text-green-700 border-gray-600 focus:outline-none",
                        onClick: toggleMenu,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            fill: "text-green-700",
                            viewBox: "0 0 20 20",
                            className: "w-6 h-6 fill-current",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                    children: "Menu"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
                                    clipRule: "evenodd"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classNames(menuIsOpen ? "" : "hidden", "w-full flex-grow p-4 lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20 h-[99vh] lg:h-auto"),
                    id: "nav-content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "list-reset lg:flex justify-center flex-1 items-center relative",
                        children: [
                            navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mr-3 w-full lg:w-auto text-center",
                                    children: item.children ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    onFocus: toggleDropdown,
                                                    onBlur: closeDropdown,
                                                    className: classNames("border-0 md:border-b-4 border-transparent border-b-transparent hover:border-b-green-500/60 hover:text-green-700 py-2 px-3", dropdown ? "border-0 md:border-b-4 border-transparent border-b-green-500 hover:border-b-green-500 text-green-700" : ""),
                                                    children: item.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classNames(dropdown ? "" : "hidden", "origin-top-left absolute w-full lg:w-56 lg:ml-[-28px] shadow-lg rounded bg-white focus:outline-none"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-1",
                                                    children: item.children.map((child)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: child.href,
                                                            className: "block px-3 py-5 border-l-0 md:border-l-4 border-l-transparent hover:border-l-green-500 hover:text-green-700",
                                                            children: child.name
                                                        }, item.name + "-" + child.name))
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.href,
                                        className: classNames("border-0 md:border-b-4 border-transparent inline-block py-2 px-3", currentPage === item.href ? "border-0 md:border-b-4 border-transparent border-b-green-500 hover:border-b-green-500 text-green-700 font-semibold" : "border-b-transparent hover:border-b-green-500/60 hover:text-green-700"),
                                        children: item.name
                                    }, item.name)
                                }, item.name)),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "block lg:hidden mt-4 mb-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-[1px] w-10px bg-gray-300"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "block lg:hidden text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mb-4 font-semibold",
                                        children: "Besoin d'une r\xe9ponse rapide ?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "inline-block py-2 px-3 rounded-lg bg-green-200 hover:bg-green-800 duration-100 font-semibold text-green-800 hover:text-green-100",
                                        href: "tel:06.01.02.03.04",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "Appelez-nous au 06.01.02.03.04"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "my-5",
                                        children: "ou"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-orange-500 hover:bg-orange-700 duration-100 py-2 px-3 rounded-lg text-lg font-semibold text-white mt-5",
                                        onClick: InterventionForm/* default */.Z,
                                        children: "Demander une intervention"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hidden lg:inline-block mb-1 py-2 px-3 rounded-lg bg-green-200 hover:bg-green-800 duration-100 font-semibold text-green-800 hover:text-green-100",
                    href: "tel:06.01.02.03.04",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "06.01.02.03.04"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./json/departments-final.json
const departments_final_namespaceObject = [];
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: ./components/Footer.js







function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "flex relative w-full items-center justify-between pb-20 pt-32 px-20 md:justify-center bg-gray-100 overflow-x-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute w-screen -top-10 skew-y-[3deg] bg-red-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pb-10 px-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-row-dense text-gray-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-10 col-span-1 flex justify-center text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "min-w-[180px] max-w-[180px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/logo.jpg",
                                        width: 200,
                                        height: 200
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm mt-3",
                                        children: "\xa9 ///// 2022 - 2023"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-10 col-span-1 flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "min-w-[180px] max-w-[180px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "text-lg font-bold mb-2",
                                        children: "Nos services"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "leading-7",
                                        children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: service.slug,
                                                    className: "text-gray-500 hover:text-gray-900",
                                                    children: service.name
                                                })
                                            }, service.id))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-10 col-span-1 flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "min-w-[180px] max-w-[180px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "text-lg font-bold mb-2",
                                        children: "Informations utiles"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "leading-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "text-gray-500 hover:text-gray-900",
                                                    children: "Mentions l\xe9gales"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "text-gray-500 hover:text-gray-900",
                                                    children: "CGV"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "text-gray-500 hover:text-gray-900",
                                                    children: "Plan du site"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-10 col-span-1 flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "min-w-[180px] max-w-[180px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "text-lg font-bold mb-2",
                                        children: "Nous suivre"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "leading-7",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "text-gray-500 hover:text-gray-900 inline-block mr-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 512 512",
                                                            style: {
                                                                width: 30,
                                                                height: 30
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "text-gray-500 hover:text-gray-900 inline-block mr-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 448 512",
                                                            style: {
                                                                width: 30,
                                                                height: 30
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "text-gray-500 hover:text-gray-900 inline-block mr-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 512 512",
                                                            style: {
                                                                width: 30,
                                                                height: 30
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "text-gray-500 hover:text-gray-900",
                                                    children: "Prendre un RDV"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.js




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "bg-gray-50 min-h-screen",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2-react-content");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,106], () => (__webpack_exec__(3215)));
module.exports = __webpack_exports__;

})();