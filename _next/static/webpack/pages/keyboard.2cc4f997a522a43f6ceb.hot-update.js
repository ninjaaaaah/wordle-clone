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
        lineNumber: 72,
        columnNumber: 21
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlib2FyZC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiVGlsZSIsInByb3BzIiwidGV4dCIsIlJvdyIsInJvdyIsIm1hcCIsImxldHRlciIsIkJvYXJkIiwidXNlU3RhdGUiLCJzZXRBY3RpdmUiLCJpc0FscGhhIiwiY2giLCJ0ZXN0IiwiaGFuZGxlciIsImV2ZW50Iiwia2V5IiwiZSIsIkFycmF5IiwiZmlsbCIsIl8iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FBZDtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FESztBQUViQyxVQUFRLEVBQUU7QUFBRUQsU0FBSyxFQUFFO0FBQVQ7QUFGRyxDQUFqQjs7QUFLQSxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDakIsc0JBQ0ksOERBQUMscURBQUQ7QUFDSSxhQUFTLEVBQUMsS0FEZCxDQUVJO0FBQ0E7QUFISjtBQUlJLE1BQUUsRUFBRUEsS0FBSyxDQUFDSixNQUFOLEtBQWlCSSxLQUFLLENBQUNDLElBQXZCLEdBQThCLFFBQTlCLEdBQXlDLEVBSmpEO0FBQUEsY0FNS0QsS0FBSyxDQUFDQztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztLQVhRRixJOztBQWFULFNBQVNHLEdBQVQsQ0FBYUYsS0FBYixFQUFvQjtBQUFBOztBQUNoQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsY0FDS0EsS0FBSyxDQUFDRyxHQUFOLEtBQWMsQ0FBZCxHQUNLWCxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDQyxNQUFEO0FBQUEsMEJBQ04sOERBQUMsSUFBRDtBQUFNLFlBQUksRUFBRUEsTUFBWjtBQUFpQyxjQUFNLEVBQUVMLEtBQUssQ0FBQ0o7QUFBL0MsU0FBeUJTLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUFBLEtBQVYsQ0FETCxHQUlLTCxLQUFLLENBQUNHLEdBQU4sS0FBYyxDQUFkLEdBQ0FWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLFVBQUNDLE1BQUQ7QUFBQSwwQkFDUCw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFQSxNQUFaO0FBQWlDLGNBQU0sRUFBRUwsS0FBSyxDQUFDSjtBQUEvQyxTQUF5QlMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBWCxDQURBLEdBSUFYLEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUNDLE1BQUQ7QUFBQSwwQkFDTiw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFQSxNQUFaO0FBQWlDLGNBQU0sRUFBRUwsS0FBSyxDQUFDSjtBQUEvQyxTQUF5QlMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURNO0FBQUEsS0FBVjtBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztNQWhCUUgsRzs7QUFrQlQsU0FBU0ksS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQywrQ0FBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNOWCxNQURNO0FBQUEsTUFDRVksU0FERixpQkFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVVDLEVBQVYsRUFBYztBQUMxQixXQUFPLFdBQVdDLElBQVgsQ0FBZ0JELEVBQWhCLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN2QkosV0FBTyxDQUFDSSxLQUFLLENBQUNDLEdBQVAsQ0FBUCxHQUFxQk4sU0FBUyxDQUFDSyxLQUFLLENBQUNDLEdBQVAsQ0FBOUIsR0FBNEMsRUFBNUM7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQ0ksYUFBUyxFQUFDLFVBRGQ7QUFFSSxZQUFRLEVBQUMsR0FGYjtBQUdJLGNBQVUsRUFBRSxvQkFBQ0MsQ0FBRDtBQUFBLGFBQU9ILE9BQU8sQ0FBQ0csQ0FBRCxDQUFkO0FBQUEsS0FIaEI7QUFJSSxXQUFPLEVBQUVQLFNBQVMsQ0FBQyxFQUFELENBSnRCO0FBQUEsY0FNS1EsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUNJQyxJQURKLENBQ1MsSUFEVCxFQUVJYixHQUZKLENBRVEsVUFBQ2MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsMEJBQ0QsOERBQUMsR0FBRDtBQUFpQixXQUFHLEVBQUVBLEtBQXRCO0FBQTZCLGNBQU0sRUFBRXZCO0FBQXJDLFNBQVV1QixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREM7QUFBQSxLQUZSO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBaENRYixLOztNQUFBQSxLO0FBa0NULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tleWJvYXJkLjJjYzRmOTk3YTUyMmE0M2Y2Y2ViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBmaXJzdCA9IFsncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCddO1xyXG5jb25zdCBzZWNvbmQgPSBbJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJ107XHJcbmNvbnN0IHRoaXJkID0gWyd6JywgJ3gnLCAnYycsICd2JywgJ2InLCAnbicsICdtJ107XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICAgIGFjdGl2ZTogeyBzY2FsZTogMS4yIH0sXHJcbiAgICBpbmFjdGl2ZTogeyBzY2FsZTogMSB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gVGlsZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlcIlxyXG4gICAgICAgICAgICAvLyBhbmltYXRlPXtwcm9wcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9XHJcbiAgICAgICAgICAgIC8vIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmFjdGl2ZSA9PT0gcHJvcHMudGV4dCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge3Byb3BzLnJvdyA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBmaXJzdC5tYXAoKGxldHRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbGUgdGV4dD17bGV0dGVyfSBrZXk9e2xldHRlcn0gYWN0aXZlPXtwcm9wcy5hY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IHByb3BzLnJvdyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyBzZWNvbmQubWFwKChsZXR0ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUaWxlIHRleHQ9e2xldHRlcn0ga2V5PXtsZXR0ZXJ9IGFjdGl2ZT17cHJvcHMuYWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlyZC5tYXAoKGxldHRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbGUgdGV4dD17bGV0dGVyfSBrZXk9e2xldHRlcn0gYWN0aXZlPXtwcm9wcy5hY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcclxuICAgIC8vICAgICAgICAgc2V0QWN0aXZlKGV2ZW50LmtleSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaXNBbHBoYSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgICAgIHJldHVybiAvXltBLVpdJC9pLnRlc3QoY2gpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaXNBbHBoYShldmVudC5rZXkpID8gc2V0QWN0aXZlKGV2ZW50LmtleSkgOiB7fTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleWJvYXJkXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZXIoZSl9XHJcbiAgICAgICAgICAgIG9uS2V5VXA9e3NldEFjdGl2ZSgnJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7QXJyYXkoMylcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtpbmRleH0gcm93PXtpbmRleH0gYWN0aXZlPXthY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9