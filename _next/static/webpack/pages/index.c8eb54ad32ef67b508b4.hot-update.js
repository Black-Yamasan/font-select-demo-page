webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/templates/Layout */ \"./components/templates/Layout.tsx\");\n/* harmony import */ var _components_atoms_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Heading */ \"./components/atoms/Heading.tsx\");\n/* harmony import */ var _components_atoms_SelectFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/SelectFonts */ \"./components/atoms/SelectFonts.tsx\");\n/* harmony import */ var _components_molecules_MainText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/molecules/MainText */ \"./components/molecules/MainText.tsx\");\nvar _jsxFileName = \"/Users/yama/works/_demo/font-select-demo/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/**\n * @file index\n */\n\n\n\n\n\nvar ContentStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"pages__ContentStyle\",\n  componentId: \"yxwal5-0\"\n})([\"max-width:760px;margin:0 auto;& .l-heading{margin-bottom:40px;}& .l-current-info{margin-bottom:20px;&__text{font-size:2rem;font-weight:500;}}& .l-choice-font{margin-bottom:50px;padding-bottom:50px;border-bottom:1px solid #dedede;}\"]);\n_c = ContentStyle;\nvar fontData = [{\n  id: 1,\n  name: 'Noto Sans JP',\n  weight: 400\n}, {\n  id: 2,\n  name: 'Noto Sans JP',\n  weight: 500\n}, {\n  id: 3,\n  name: 'Noto Sans JP',\n  weight: 700\n}, {\n  id: 4,\n  name: 'Noto Sans JP',\n  weight: 900\n}, {\n  id: 5,\n  name: 'M PLUS 1p',\n  weight: 400\n}, {\n  id: 6,\n  name: 'M PLUS 1p',\n  weight: 500\n}, {\n  id: 7,\n  name: 'M PLUS 1p',\n  weight: 700\n}, {\n  id: 8,\n  name: 'M PLUS 1p',\n  weight: 800\n}];\nvar currentFontId = 1;\n\nvar currentFontData = function currentFontData() {\n  var currentFontDataIndex = fontData.findIndex(function (data) {\n    return data.id === currentFontId;\n  });\n  return {\n    fontWeight: fontData[currentFontDataIndex].weight\n  };\n};\n\nvar onChangeFont = function onChangeFont(event) {\n  var selectedFontId = event.currentTarget.value;\n  currentFontId = parseInt(selectedFontId);\n};\n\nfunction Home() {\n  var _this = this;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    title: \"Font Style Change Demo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(ContentStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"l-heading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(_components_atoms_Heading__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, \"Change Font Style\")), __jsx(\"div\", {\n    className: \"l-current-info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"l-current-info__text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"Current Font\")), __jsx(\"div\", {\n    className: \"l-choice-font\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, __jsx(_components_atoms_SelectFonts__WEBPACK_IMPORTED_MODULE_4__[\"SelectFonts\"], {\n    handleChange: onChangeFont,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, fontData.map(function (obj, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: obj.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, obj.name, \" \", obj.weight);\n  }))), __jsx(_components_molecules_MainText__WEBPACK_IMPORTED_MODULE_5__[\"MainText\"], {\n    fontWeight: currentFontData().fontWeight,\n    id: currentFontId,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }))));\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContentStyle\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ29udGVudFN0eWxlIiwic3R5bGVkIiwiZGl2IiwiZm9udERhdGEiLCJpZCIsIm5hbWUiLCJ3ZWlnaHQiLCJjdXJyZW50Rm9udElkIiwiY3VycmVudEZvbnREYXRhIiwiY3VycmVudEZvbnREYXRhSW5kZXgiLCJmaW5kSW5kZXgiLCJkYXRhIiwiZm9udFdlaWdodCIsIm9uQ2hhbmdlRm9udCIsImV2ZW50Iiwic2VsZWN0ZWRGb250SWQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJwYXJzZUludCIsIkhvbWUiLCJtYXAiLCJvYmoiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOE9BQWxCO0tBQU1GLFk7QUF5Qk4sSUFBTUcsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLGNBRlI7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FEZSxFQU1mO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBTmUsRUFXZjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsY0FGUjtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQVhlLEVBZ0JmO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBaEJlLEVBcUJmO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBckJlLEVBMEJmO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBMUJlLEVBK0JmO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBL0JlLEVBb0NmO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxXQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBcENlLENBQWpCO0FBMkNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsTUFBTUMsb0JBQW9CLEdBQUdOLFFBQVEsQ0FBQ08sU0FBVCxDQUFtQixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDUCxFQUFMLEtBQVlHLGFBQWhCO0FBQUEsR0FBdkIsQ0FBN0I7QUFDQSxTQUFPO0FBQ0xLLGNBQVUsRUFBRVQsUUFBUSxDQUFDTSxvQkFBRCxDQUFSLENBQStCSDtBQUR0QyxHQUFQO0FBR0QsQ0FMRDs7QUFPQSxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQWlEO0FBQ3BFLE1BQU1DLGNBQWMsR0FBR0QsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUEzQztBQUNBVixlQUFhLEdBQUdXLFFBQVEsQ0FBQ0gsY0FBRCxDQUF4QjtBQUNELENBSEQ7O0FBS2UsU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUM3QixTQUNFLG1FQUNFLE1BQUMsbUVBQUQ7QUFBUSxTQUFLLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFhLGdCQUFZLEVBQUVOLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsUUFBUSxDQUFDaUIsR0FBVCxDQUFhLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLFdBQ1o7QUFBUSxTQUFHLEVBQUVBLENBQWI7QUFBZ0IsV0FBSyxFQUFFRCxHQUFHLENBQUNqQixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDaUIsR0FBRyxDQUFDaEIsSUFBcEMsT0FBMkNnQixHQUFHLENBQUNmLE1BQS9DLENBRFk7QUFBQSxHQUFiLENBREgsQ0FERixDQVBGLEVBY0UsTUFBQyx1RUFBRDtBQUFVLGNBQVUsRUFBRUUsZUFBZSxHQUFHSSxVQUF4QztBQUFvRCxNQUFFLEVBQUVMLGFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGLENBREYsQ0FERjtBQXNCRDtNQXZCdUJZLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIGluZGV4XG4gKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdGVtcGxhdGVzL0xheW91dCdcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvSGVhZGluZydcbmltcG9ydCAgeyBTZWxlY3RGb250cyB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TZWxlY3RGb250cydcbmltcG9ydCB7IE1haW5UZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzL21vbGVjdWxlcy9NYWluVGV4dCdcblxuY29uc3QgQ29udGVudFN0eWxlID0gc3R5bGVkLmRpdmBcblxuICBtYXgtd2lkdGg6IDc2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAmIC5sLWhlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAmIC5sLWN1cnJlbnQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICZfX3RleHQge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAmIC5sLWNob2ljZS1mb250IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICB9XG5gXG5cbmNvbnN0IGZvbnREYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ05vdG8gU2FucyBKUCcsXG4gICAgd2VpZ2h0OiA0MDBcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdOb3RvIFNhbnMgSlAnLFxuICAgIHdlaWdodDogNTAwXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnTm90byBTYW5zIEpQJyxcbiAgICB3ZWlnaHQ6IDcwMFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ05vdG8gU2FucyBKUCcsXG4gICAgd2VpZ2h0OiA5MDBcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6ICdNIFBMVVMgMXAnLFxuICAgIHdlaWdodDogNDAwXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiAnTSBQTFVTIDFwJyxcbiAgICB3ZWlnaHQ6IDUwMFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogJ00gUExVUyAxcCcsXG4gICAgd2VpZ2h0OiA3MDBcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6ICdNIFBMVVMgMXAnLFxuICAgIHdlaWdodDogODAwXG4gIH0sXG5dXG5cbmxldCBjdXJyZW50Rm9udElkID0gMVxuXG5jb25zdCBjdXJyZW50Rm9udERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRGb250RGF0YUluZGV4ID0gZm9udERhdGEuZmluZEluZGV4KGRhdGEgPT4gZGF0YS5pZCA9PT0gY3VycmVudEZvbnRJZClcbiAgcmV0dXJuIHtcbiAgICBmb250V2VpZ2h0OiBmb250RGF0YVtjdXJyZW50Rm9udERhdGFJbmRleF0ud2VpZ2h0XG4gIH1cbn1cblxuY29uc3Qgb25DaGFuZ2VGb250ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRGb250SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICBjdXJyZW50Rm9udElkID0gcGFyc2VJbnQoc2VsZWN0ZWRGb250SWQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJGb250IFN0eWxlIENoYW5nZSBEZW1vXCI+XG4gICAgICAgIDxDb250ZW50U3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nPkNoYW5nZSBGb250IFN0eWxlPC9IZWFkaW5nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibC1jdXJyZW50LWluZm9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImwtY3VycmVudC1pbmZvX190ZXh0XCI+Q3VycmVudCBGb250PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibC1jaG9pY2UtZm9udFwiPlxuICAgICAgICAgICAgPFNlbGVjdEZvbnRzIGhhbmRsZUNoYW5nZT17b25DaGFuZ2VGb250fT5cbiAgICAgICAgICAgICAge2ZvbnREYXRhLm1hcCgob2JqLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvYmouaWR9PntvYmoubmFtZX0ge29iai53ZWlnaHR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3RGb250cz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TWFpblRleHQgZm9udFdlaWdodD17Y3VycmVudEZvbnREYXRhKCkuZm9udFdlaWdodH0gaWQ9e2N1cnJlbnRGb250SWR9IC8+XG4gICAgICAgIDwvQ29udGVudFN0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})