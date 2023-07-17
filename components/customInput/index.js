var _excluded = ["showBigArea"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { memo } from 'react';
import { Icon, Input, Popover } from '@sy/framework/lib/widget';
import "./index.less";
var TextArea = Input.TextArea;
var CustomInput = function CustomInput(props) {
  var _props$showBigArea = props.showBigArea,
    showBigArea = _props$showBigArea === void 0 ? false : _props$showBigArea,
    restProps = _objectWithoutProperties(props, _excluded);
  var disabled = restProps.disabled;
  var Content = function Content() {
    return /*#__PURE__*/React.createElement(TextArea, _extends({
      rows: 3
    }, restProps));
  };
  var suffix = function suffix() {
    return /*#__PURE__*/React.createElement(Popover, {
      content: Content(),
      trigger: "click",
      overlayClassName: "customInput"
    }, /*#__PURE__*/React.createElement(Icon, {
      type: "fullscreen",
      style: {
        fontSize: 12,
        color: '#08c'
      }
    }));
  };
  return /*#__PURE__*/React.createElement(Input, _extends({}, restProps, {
    suffix: disabled || !showBigArea ? null : suffix()
  }));
};
export default /*#__PURE__*/memo(CustomInput);