webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\migue\\OneDrive\\Documentos\\Projetos\\WEB\\NLW4\\move-it\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();



function Countdown() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(25 * 60),
      time = _useState[0],
      setTime = _useState[1]; //25min * 60s


  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  var minuteLeftRight = String(minutes).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countdownButton,
      children: "Iniciar um Ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(Countdown, "uQotoCrROaqKHE+kJUfwbIPg0Nk=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJDb3VudGRvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJtaW51dGVMZWZ0UmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBSyxFQUFOLENBRFI7QUFBQSxNQUNoQkMsSUFEZ0I7QUFBQSxNQUNYQyxPQURXLGlCQUNpQjs7O0FBRXhDLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLElBQUksR0FBQyxFQUFoQixDQUFoQjtBQUNBLE1BQU1LLE9BQU8sR0FBR0wsSUFBSSxHQUFHLEVBQXZCO0FBRUEsTUFBTU0sZUFBZSxHQUFHQyxNQUFNLENBQUNMLE9BQUQsQ0FBTixDQUFnQk0sUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBQXhCO0FBR0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUMsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0E7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1BO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVlBO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFFRCw4RUFBTSxDQUFDRSxlQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXpCZWQsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Nzk3MDZlZDIwYjZjMmQzZmI3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xyXG4gICAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZSgyNSAqIDYwKS8vMjVtaW4gKiA2MHNcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lLzYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XHJcblxyXG4gICAgY29uc3QgbWludXRlTGVmdFJpZ2h0ID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+NTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+SW5pY2lhciB1bSBDaWNsbzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=