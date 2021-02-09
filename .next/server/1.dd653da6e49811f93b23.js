exports.ids = [1];
exports.modules = {

/***/ "5gNF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"middle-block": "MiddleBlock_middle-block__3EEnA",
	"middle-block-title": "MiddleBlock_middle-block-title__SypFz",
	"middle-block-hr": "MiddleBlock_middle-block-hr__mPZQd",
	"content": "MiddleBlock_content__22mY_",
	"content-wrapper": "MiddleBlock_content-wrapper__3Reko",
	"middle-block-button": "MiddleBlock_middle-block-button__3ayqV"
};


/***/ }),

/***/ "XBrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const ColoredLine = ({
  styleLine,
  color
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
  className: styleLine,
  style: {
    color: color,
    backgroundColor: color,
    height: 4,
    width: 30,
    noshade: "noshade",
    align: "center"
  }
});

/* unused harmony default export */ var _unused_webpack_default_export = (ColoredLine);

/***/ }),

/***/ "tMA2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5gNF");
/* harmony import */ var _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColoredLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XBrB");






const MiddleBlock = ({
  title,
  content
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["middle-block"],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      type: "flex",
      justify: "center",
      align: "middle",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["content-wrapper"],
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
            className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["middle-block-title"],
            children: title
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["content"],
            children: content
          })]
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MiddleBlock);

/***/ })

};;