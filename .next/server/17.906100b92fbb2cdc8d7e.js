exports.ids = [17];
exports.modules = {

/***/ "wIIz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/CardItem.js





const CardItem = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      className: "cards-item",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: props.path,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: "cards-item-link",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
            className: "cards-item-pic-wrap",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: "cards-item-img",
              alt: "Travel Image",
              src: props.src
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cards-item-info",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
              className: "cards-item-text",
              children: props.text
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var components_CardItem = (CardItem);
// CONCATENATED MODULE: ./components/Cards.js




const Cards = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "cards",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
      className: "cards-h6",
      children: "What are you looking for?"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "cards-container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "cards-wrapper",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "cards-items",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardItem, {
            src: "images/img-9.jpg",
            text: "Become an Explorer of the Alternative",
            path: "/join"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardItem, {
            src: "images/hire-team-4.jpg",
            text: "Hire ExpA",
            path: "/hire"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CardItem, {
            src: "images/problem-2.jpg",
            text: "Trust us your problem",
            path: "https://airtable.com/shrvo0dz6nvEEXMIl"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var components_Cards = __webpack_exports__["default"] = (Cards);

/***/ })

};;