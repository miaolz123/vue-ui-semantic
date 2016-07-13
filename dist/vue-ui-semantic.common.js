/**
 * vue-ui-semantic v0.0.1
 * https://github.com/miaolz123/vue-ui-semantic
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueUiSemantic"] = factory();
	else
		root["VueUiSemantic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(1);

	var _Button2 = _interopRequireDefault(_Button);

	var _Buttons = __webpack_require__(2);

	var _Buttons2 = _interopRequireDefault(_Buttons);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	var _Divider = __webpack_require__(4);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Flag = __webpack_require__(5);

	var _Flag2 = _interopRequireDefault(_Flag);

	var _Icon = __webpack_require__(6);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  UiButton: _Button2.default,
	  UiButtons: _Buttons2.default,
	  UiContainer: _Container2.default,
	  UiDivider: _Divider2.default,
	  UiFlag: _Flag2.default,
	  UiIcon: _Icon2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div class="ui {{css}} button"><slot>Default</slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div class="ui {{css}} buttons"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div class="ui {{css}} container"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div class="ui {{css}} divider"></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<i class="{{css}} flag"></i>',
	  props: {
	    css: {
	      type: String,
	      default: 'cn'
	    }
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<i class="{{css}} icon"></i><slot></slot>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ }
/******/ ])
});
;