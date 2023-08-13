"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DeleteOutline = _interopRequireDefault(require("@mui/icons-material/DeleteOutline"));
var _ImgPreview = _interopRequireDefault(require("./ImgPreview"));
var _react = require("react");
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function UploadFile(_ref) {
  var uploadError = _ref.uploadError,
    updateFileList = _ref.updateFileList;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  var inputFile = (0, _react.useRef)();
  function addFiles(file) {
    setFileList([].concat(_toConsumableArray(fileList), _toConsumableArray(file)));
    inputFile.current.value = "";
  }
  function deleteFile(item) {
    var temp = fileList.filter(function (f) {
      return f !== item;
    });
    setFileList(temp);
  }
  (0, _react.useEffect)(function () {
    updateFileList(fileList);
  }, [fileList]);
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-design"
  }, /*#__PURE__*/React.createElement("div", {
    className: "file-uploader d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "uploadFile",
    className: "ant-upload d-flex align-items-center justify-content-center "
  }, /*#__PURE__*/React.createElement("input", {
    id: "uploadFile",
    type: "file",
    ref: inputFile
    // accept={".png , .jpeg, .gif, .jpg, .bmp"}
    ,
    onChange: function onChange(e) {
      return addFiles(e.target.files);
    },
    multiple: true,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "35",
    viewBox: "0 0 26 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24.6548 2.63174C25.3975 2.63195 26 2.04446 26 1.31954C26 0.594628 25.3983 0.00679634 24.6556 0.00658604L1.34522 5.64408e-08C0.602489 -0.000210241 0 0.587281 0 1.3122C0 2.03711 0.601711 2.62494 1.34444 2.62516L24.6548 2.63174ZM12.8175 34.988L13 35C13.6808 35 14.2435 34.5062 14.3326 33.8655L14.3448 33.6874L14.343 9.73726L21.0166 16.2482C21.4941 16.7142 22.2413 16.7565 22.7677 16.3751L22.9185 16.248C23.3959 15.782 23.4392 15.0528 23.0485 14.539L22.9183 14.3918L13.957 5.64717C13.4798 5.18149 12.7332 5.13895 12.2067 5.51971L12.0559 5.64663L3.0842 14.3912C2.55865 14.9035 2.55807 15.7345 3.0829 16.2475C3.56001 16.7138 4.3071 16.7567 4.83385 16.3757L4.98477 16.2488L11.6534 9.74951L11.6552 33.6874C11.6552 34.3519 12.1611 34.9011 12.8175 34.988Z",
    fill: "#0078D4"
  })), /*#__PURE__*/React.createElement("div", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0627\u0648\u06CC\u0631")))), uploadError ? /*#__PURE__*/React.createElement("div", {
    className: "title",
    style: {
      color: "red"
    }
  }, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0627\u06CC\u0644 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A!") : null), /*#__PURE__*/React.createElement("div", {
    className: "upload-files"
  }, fileList === null || fileList === void 0 ? void 0 : fileList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ant-upload-list-picture-card-container rtl-mg",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("button", {
      title: "\u062D\u0630\u0641 \u0641\u0627\u06CC\u0644",
      type: "button",
      className: "remove-actions-btn",
      onClick: function onClick() {
        return deleteFile(item);
      }
    }, /*#__PURE__*/React.createElement(_DeleteOutline["default"], null)), item.type === "image/png" ? /*#__PURE__*/React.createElement(_ImgPreview["default"], {
      file: item,
      alt: "pic"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, item === null || item === void 0 ? void 0 : item.name)));
  })));
}
var _default = UploadFile; // module.exports = { UploadFile };
exports["default"] = _default;