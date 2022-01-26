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
        lineNumber: 76,
        columnNumber: 21
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlib2FyZC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiVGlsZSIsInByb3BzIiwidGV4dCIsIlJvdyIsInJvdyIsIm1hcCIsImxldHRlciIsIkJvYXJkIiwidXNlU3RhdGUiLCJzZXRBY3RpdmUiLCJpc0FscGhhIiwiY2giLCJ0ZXN0IiwiaGFuZGxlciIsImV2ZW50Iiwia2V5IiwicmVzZXQiLCJlIiwiQXJyYXkiLCJmaWxsIiwiXyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixDQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQURLO0FBRWJDLFVBQVEsRUFBRTtBQUFFRCxTQUFLLEVBQUU7QUFBVDtBQUZHLENBQWpCOztBQUtBLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNqQixzQkFDSSw4REFBQyxxREFBRDtBQUNJLGFBQVMsRUFBQyxLQURkLENBRUk7QUFDQTtBQUhKO0FBSUksTUFBRSxFQUFFQSxLQUFLLENBQUNKLE1BQU4sS0FBaUJJLEtBQUssQ0FBQ0MsSUFBdkIsR0FBOEIsUUFBOUIsR0FBeUMsRUFKakQ7QUFBQSxjQU1LRCxLQUFLLENBQUNDO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0tBWFFGLEk7O0FBYVQsU0FBU0csR0FBVCxDQUFhRixLQUFiLEVBQW9CO0FBQUE7O0FBQ2hCLHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSxjQUNLQSxLQUFLLENBQUNHLEdBQU4sS0FBYyxDQUFkLEdBQ0tYLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNDLE1BQUQ7QUFBQSwwQkFDTiw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFQSxNQUFaO0FBQWlDLGNBQU0sRUFBRUwsS0FBSyxDQUFDSjtBQUEvQyxTQUF5QlMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURNO0FBQUEsS0FBVixDQURMLEdBSUtMLEtBQUssQ0FBQ0csR0FBTixLQUFjLENBQWQsR0FDQVYsTUFBTSxDQUFDVyxHQUFQLENBQVcsVUFBQ0MsTUFBRDtBQUFBLDBCQUNQLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUVBLE1BQVo7QUFBaUMsY0FBTSxFQUFFTCxLQUFLLENBQUNKO0FBQS9DLFNBQXlCUyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFYLENBREEsR0FJQVgsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0MsTUFBRDtBQUFBLDBCQUNOLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUVBLE1BQVo7QUFBaUMsY0FBTSxFQUFFTCxLQUFLLENBQUNKO0FBQS9DLFNBQXlCUyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE07QUFBQSxLQUFWO0FBVFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O01BaEJRSCxHOztBQWtCVCxTQUFTSSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUMsRUFBRCxDQUR2QjtBQUFBLE1BQ05YLE1BRE07QUFBQSxNQUNFWSxTQURGLGlCQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVUMsRUFBVixFQUFjO0FBQzFCLFdBQU8sV0FBV0MsSUFBWCxDQUFnQkQsRUFBaEIsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCSixXQUFPLENBQUNJLEtBQUssQ0FBQ0MsR0FBUCxDQUFQLEdBQXFCTixTQUFTLENBQUNLLEtBQUssQ0FBQ0MsR0FBUCxDQUE5QixHQUE0QyxFQUE1QztBQUNILEdBRkQ7O0FBSUEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQlAsYUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFDSSxhQUFTLEVBQUMsVUFEZDtBQUVJLFlBQVEsRUFBQyxHQUZiO0FBR0ksY0FBVSxFQUFFLG9CQUFDUSxDQUFEO0FBQUEsYUFBT0osT0FBTyxDQUFDSSxDQUFELENBQWQ7QUFBQSxLQUhoQjtBQUlJLFdBQU8sRUFBRUQsS0FKYjtBQUFBLGNBTUtFLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FDSUMsSUFESixDQUNTLElBRFQsRUFFSWQsR0FGSixDQUVRLFVBQUNlLENBQUQsRUFBSUMsS0FBSjtBQUFBLDBCQUNELDhEQUFDLEdBQUQ7QUFBaUIsV0FBRyxFQUFFQSxLQUF0QjtBQUE2QixjQUFNLEVBQUV4QjtBQUFyQyxTQUFVd0IsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURDO0FBQUEsS0FGUjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXBDUWQsSzs7TUFBQUEsSztBQXNDVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rZXlib2FyZC4wNjgxNGJhMDExODFhYTkyYmE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgZmlyc3QgPSBbJ3EnLCAndycsICdlJywgJ3InLCAndCcsICd5JywgJ3UnLCAnaScsICdvJywgJ3AnXTtcclxuY29uc3Qgc2Vjb25kID0gWydhJywgJ3MnLCAnZCcsICdmJywgJ2cnLCAnaCcsICdqJywgJ2snLCAnbCddO1xyXG5jb25zdCB0aGlyZCA9IFsneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbSddO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICBhY3RpdmU6IHsgc2NhbGU6IDEuMiB9LFxyXG4gICAgaW5hY3RpdmU6IHsgc2NhbGU6IDEgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFRpbGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5XCJcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZT17cHJvcHMuYWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfVxyXG4gICAgICAgICAgICAvLyB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5hY3RpdmUgPT09IHByb3BzLnRleHQgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUm93KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5yb3cgPT09IDBcclxuICAgICAgICAgICAgICAgID8gZmlyc3QubWFwKChsZXR0ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUaWxlIHRleHQ9e2xldHRlcn0ga2V5PXtsZXR0ZXJ9IGFjdGl2ZT17cHJvcHMuYWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5yb3cgPT09IDFcclxuICAgICAgICAgICAgICAgID8gc2Vjb25kLm1hcCgobGV0dGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGlsZSB0ZXh0PXtsZXR0ZXJ9IGtleT17bGV0dGVyfSBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogdGhpcmQubWFwKChsZXR0ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUaWxlIHRleHQ9e2xldHRlcn0ga2V5PXtsZXR0ZXJ9IGFjdGl2ZT17cHJvcHMuYWN0aXZlfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSk7XHJcbiAgICAvLyAgICAgICAgIHNldEFjdGl2ZShldmVudC5rZXkpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGlzQWxwaGEgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgICAgICByZXR1cm4gL15bQS1aXSQvaS50ZXN0KGNoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlzQWxwaGEoZXZlbnQua2V5KSA/IHNldEFjdGl2ZShldmVudC5rZXkpIDoge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXlib2FyZFwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVyKGUpfVxyXG4gICAgICAgICAgICBvbktleVVwPXtyZXNldH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtBcnJheSgzKVxyXG4gICAgICAgICAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAgICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBrZXk9e2luZGV4fSByb3c9e2luZGV4fSBhY3RpdmU9e2FjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=