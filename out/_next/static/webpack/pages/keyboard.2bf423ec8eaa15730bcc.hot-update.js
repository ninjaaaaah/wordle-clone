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
      setActive = _useState[1];

  var isAlpha = function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch) | ch === '';
  };

  var handler = function handler(event) {
    console.log(event.KeyCode);
    isAlpha(event.key) ? setActive(event.key) : {};
  };

  var reset = function reset() {
    setActive('');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "keyboard",
    tabIndex: "0",
    onKeyPress: function onKeyPress(e) {
      return handler(e);
    },
    onKeyUp: reset,
    children: Array(3).fill(null).map(function (_, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
        row: index,
        active: active
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlib2FyZC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiVGlsZSIsInByb3BzIiwidGV4dCIsIlJvdyIsInJvdyIsIm1hcCIsImxldHRlciIsIkJvYXJkIiwidXNlU3RhdGUiLCJzZXRBY3RpdmUiLCJpc0FscGhhIiwiY2giLCJ0ZXN0IiwiaGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIktleUNvZGUiLCJrZXkiLCJyZXNldCIsImUiLCJBcnJheSIsImZpbGwiLCJfIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQWQ7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBREs7QUFFYkMsVUFBUSxFQUFFO0FBQUVELFNBQUssRUFBRTtBQUFUO0FBRkcsQ0FBakI7O0FBS0EsU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLHNC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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rZXlib2FyZC4yYmY0MjNlYzhlYWExNTczMGJjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgZmlyc3QgPSBbJ3EnLCAndycsICdlJywgJ3InLCAndCcsICd5JywgJ3UnLCAnaScsICdvJywgJ3AnXTtcclxuY29uc3Qgc2Vjb25kID0gWydhJywgJ3MnLCAnZCcsICdmJywgJ2cnLCAnaCcsICdqJywgJ2snLCAnbCddO1xyXG5jb25zdCB0aGlyZCA9IFsneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbSddO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICBhY3RpdmU6IHsgc2NhbGU6IDEuMiB9LFxyXG4gICAgaW5hY3RpdmU6IHsgc2NhbGU6IDEgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFRpbGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5XCJcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZT17cHJvcHMuYWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfVxyXG4gICAgICAgICAgICAvLyB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5hY3RpdmUgPT09IHByb3BzLnRleHQgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUm93KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5yb3cgPT09IDBcclxuICAgICAgICAgICAgICAgID8gZmlyc3QubWFwKChsZXR0ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUaWxlIHRleHQ9e2xldHRlcn0ga2V5PXtsZXR0ZXJ9IGFjdGl2ZT17cHJvcHMuYWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5yb3cgPT09IDFcclxuICAgICAgICAgICAgICAgID8gc2Vjb25kLm1hcCgobGV0dGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGlsZSB0ZXh0PXtsZXR0ZXJ9IGtleT17bGV0dGVyfSBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogdGhpcmQubWFwKChsZXR0ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUaWxlIHRleHQ9e2xldHRlcn0ga2V5PXtsZXR0ZXJ9IGFjdGl2ZT17cHJvcHMuYWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBpc0FscGhhID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eW0EtWl0kL2kudGVzdChjaCkgfCAoY2ggPT09ICcnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LktleUNvZGUpO1xyXG4gICAgICAgIGlzQWxwaGEoZXZlbnQua2V5KSA/IHNldEFjdGl2ZShldmVudC5rZXkpIDoge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlib2FyZFwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVyKGUpfVxyXG4gICAgICAgICAgICBvbktleVVwPXtyZXNldH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtBcnJheSgzKVxyXG4gICAgICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBrZXk9e2luZGV4fSByb3c9e2luZGV4fSBhY3RpdmU9e2FjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=