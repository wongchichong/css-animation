webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(165);


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cssAnimation = __webpack_require__(2);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(164);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var style = '\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.fade-enter {\n  opacity: 0;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n\n.fade-enter.fade-enter-active {\n  animation-name: rcDialogFadeIn;\n  animation-play-state: running;\n}\n\n.fade-leave.fade-leave-active {\n  animation-name: rcDialogFadeOut;\n  animation-play-state: running;\n}\n\n@keyframes rcDialogFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes rcDialogFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n';
	
	var show = true;
	
	function toggle() {
	  var t = document.getElementById('t');
	  var b = document.getElementById('b');
	  b.disabled = true;
	  t.style.visibility = '';
	  (0, _cssAnimation2["default"])(t, 'fade-' + (show ? 'leave' : 'enter'), function () {
	    t.style.visibility = show ? '' : 'hidden';
	    b.disabled = false;
	  });
	  show = !show;
	}
	
	_reactDom2["default"].render(_react2["default"].createElement(
	  'div',
	  null,
	  _react2["default"].createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
	  _react2["default"].createElement('div', { className: 'box', id: 't' }),
	  _react2["default"].createElement(
	    'button',
	    { onClick: toggle, id: 'b' },
	    'toggle'
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map