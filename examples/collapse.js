webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cssAnimation = __webpack_require__(2);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(164);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var style = '\n\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n.collapse-active {\n  transition: height .3s ease-out;\n}\n\n';
	
	var show = true;
	
	function toggle() {
	  var t = document.getElementById('t');
	  var b = document.getElementById('b');
	  b.disabled = true;
	  t.style.display = '';
	  var height = void 0;
	  (0, _cssAnimation2["default"])(t, 'collapse', {
	    start: function start() {
	      if (show) {
	        t.style.height = t.offsetHeight + 'px';
	      } else {
	        height = t.offsetHeight;
	        t.style.height = 0;
	      }
	    },
	    active: function active() {
	      t.style.height = (show ? height : 0) + 'px';
	    },
	    end: function end() {
	      t.style.display = show ? '' : 'none';
	      b.disabled = false;
	      t.style.height = '';
	    }
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
]);
//# sourceMappingURL=collapse.js.map