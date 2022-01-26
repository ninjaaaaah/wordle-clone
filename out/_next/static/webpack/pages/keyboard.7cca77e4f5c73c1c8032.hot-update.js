self["webpackHotUpdate_N_E"]("pages/keyboard",{

/***/ "./components/Keyboard.js":
/*!********************************!*\
  !*** ./components/Keyboard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jarred Luzada\\Projects\\nextjs-sample\\components\\Keyboard.js",
    _s = $RefreshSig$();



var first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
var second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
var third = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
var variants = {
  active: {
    scale: 1.2
  },
  inactive: {
    scale: 1
  }
};

function Tile(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    className: "key" // animate={props.active ? 'active' : 'inactive'}
    // variants={variants}
    ,
    id: props.active === props.text ? 'active' : '',
    children: props.text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_c = Tile;

function Row(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row",
    children: props.row === 0 ? first.map(function (letter) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tile, {
        text: letter,
        active: props.active
      }, letter, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 23
      }, _this);
    }) : props.row === 1 ? second.map(function (letter) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tile, {
        text: letter,
        active: props.active
      }, letter, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }, _this);
    }) : third.map(function (letter) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tile, {
        text: letter,
        active: props.active
      }, letter, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_c2 = Row;

function Board() {
  _s();

  var _this2 = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      active = _useState[0],
      setActive = _useState[1]; // useEffect(() => {
  //     window.addEventListener('keydown', (event) => {
  //         console.log(event.key);
  //         setActive(event.key);
  //     });
  // }, []);


  var isAlpha = function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
  };

  var handler = function handler(event) {
    console.log(event.key);
    isAlpha(event.key) ? setActive(event.key) : {};
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "keyboard",
    tabIndex: "0",
    onKeyPress: function onKeyPress(e) {
      return handler(e);
    },
    onKeyUp: setActive(''),
    children: Array(3).fill(null).map(function (_, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
        row: index,
        active: active
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

_s(Board, "OCi2He7VGRqU4icLKUr8bCSE/ZU=");

_c3 = Board;
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c, _c2, _c3;

$RefreshReg$(_c, "Tile");
$RefreshReg$(_c2, "Row");
$RefreshReg$(_c3, "Board");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlib2FyZC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiVGlsZSIsInByb3BzIiwidGV4dCIsIlJvdyIsInJvdyIsIm1hcCIsImxldHRlciIsIkJvYXJkIiwidXNlU3RhdGUiLCJzZXRBY3RpdmUiLCJpc0FscGhhIiwiY2giLCJ0ZXN0IiwiaGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleSIsImUiLCJBcnJheSIsImZpbGwiLCJfIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQWQ7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBREs7QUFFYkMsVUFBUSxFQUFFO0FBQUVELFNBQUssRUFBRTtBQUFUO0FBRkcsQ0FBakI7O0FBS0EsU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLHNCQUNJLDhEQUFDLHFEQUFEO0FB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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IGZpcnN0ID0gWydxJywgJ3cnLCAnZScsICdyJywgJ3QnLCAneScsICd1JywgJ2knLCAnbycsICdwJ107XHJcbmNvbnN0IHNlY29uZCA9IFsnYScsICdzJywgJ2QnLCAnZicsICdnJywgJ2gnLCAnaicsICdrJywgJ2wnXTtcclxuY29uc3QgdGhpcmQgPSBbJ3onLCAneCcsICdjJywgJ3YnLCAnYicsICduJywgJ20nXTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgYWN0aXZlOiB7IHNjYWxlOiAxLjIgfSxcclxuICAgIGluYWN0aXZlOiB7IHNjYWxlOiAxIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBUaWxlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleVwiXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGU9e3Byb3BzLmFjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ31cclxuICAgICAgICAgICAgLy8gdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpZD17cHJvcHMuYWN0aXZlID09PSBwcm9wcy50ZXh0ID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMucm93ID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IGZpcnN0Lm1hcCgobGV0dGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGlsZSB0ZXh0PXtsZXR0ZXJ9IGtleT17bGV0dGVyfSBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogcHJvcHMucm93ID09PSAxXHJcbiAgICAgICAgICAgICAgICA/IHNlY29uZC5tYXAoKGxldHRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbGUgdGV4dD17bGV0dGVyfSBrZXk9e2xldHRlcn0gYWN0aXZlPXtwcm9wcy5hY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXJkLm1hcCgobGV0dGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGlsZSB0ZXh0PXtsZXR0ZXJ9IGtleT17bGV0dGVyfSBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCb2FyZCgpIHtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xyXG4gICAgLy8gICAgICAgICBzZXRBY3RpdmUoZXZlbnQua2V5KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpc0FscGhhID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eW0EtWl0kL2kudGVzdChjaCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xyXG4gICAgICAgIGlzQWxwaGEoZXZlbnQua2V5KSA/IHNldEFjdGl2ZShldmVudC5rZXkpIDoge307XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlib2FyZFwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVyKGUpfVxyXG4gICAgICAgICAgICBvbktleVVwPXtzZXRBY3RpdmUoJycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge0FycmF5KDMpXHJcbiAgICAgICAgICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17aW5kZXh9IHJvdz17aW5kZXh9IGFjdGl2ZT17YWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==