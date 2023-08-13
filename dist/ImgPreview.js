"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var ImgPreview = function ImgPreview(_ref) {
  var file = _ref.file;
  var objectUrl = URL.createObjectURL(file);
  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement("img", {
    src: objectUrl
  }));
};
var _default = ImgPreview;
exports["default"] = _default;