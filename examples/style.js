webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(166);


/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cssAnimation = __webpack_require__(2);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(164);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var style = '\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n';
	
	var show = true;
	
	function toggle() {
	  var t = document.getElementById('t');
	  var b = document.getElementById('b');
	  b.disabled = true;
	  t.style.visibility = '';
	  t.style.opacity = show ? 1 : 0;
	  _cssAnimation2["default"].setTransition(t, 'opacity 2s ease-in');
	  _cssAnimation2["default"].style(t, show ? {
	    opacity: 0
	  } : {
	    opacity: 1
	  }, function () {
	    t.style.visibility = show ? '' : 'hidden';
	    b.disabled = false;
	    _cssAnimation2["default"].setTransition(t, '');
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
//# sourceMappingURL=style.js.map