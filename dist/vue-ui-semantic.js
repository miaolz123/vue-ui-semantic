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
	exports.install = install;

	var _VueUiSemantic = __webpack_require__(1);

	var _VueUiSemantic2 = _interopRequireDefault(_VueUiSemantic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  Vue.component('ui-button', _VueUiSemantic2.default.UiButton);
	  Vue.component('ui-buttons', _VueUiSemantic2.default.UiButtons);
	  Vue.component('ui-container', _VueUiSemantic2.default.UiContainer);
	  Vue.component('ui-divider', _VueUiSemantic2.default.UiDivider);
	  Vue.component('ui-flag', _VueUiSemantic2.default.UiFlag);
	  Vue.component('ui-h1', _VueUiSemantic2.default.UiH1);
	  Vue.component('ui-h2', _VueUiSemantic2.default.UiH2);
	  Vue.component('ui-h3', _VueUiSemantic2.default.UiH3);
	  Vue.component('ui-h4', _VueUiSemantic2.default.UiH4);
	  Vue.component('ui-h5', _VueUiSemantic2.default.UiH5);
	  Vue.component('ui-h6', _VueUiSemantic2.default.UiH6);
	  Vue.component('ui-sub-header', _VueUiSemantic2.default.UiSubHeader);
	  Vue.component('ui-icon', _VueUiSemantic2.default.UiIcon);
	  Vue.component('ui-image', _VueUiSemantic2.default.UiImage);
	  Vue.component('ui-input', _VueUiSemantic2.default.UiInput);
	  Vue.component('ui-label', _VueUiSemantic2.default.UiLabel);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(2);

	var _Button2 = _interopRequireDefault(_Button);

	var _Buttons = __webpack_require__(3);

	var _Buttons2 = _interopRequireDefault(_Buttons);

	var _Container = __webpack_require__(4);

	var _Container2 = _interopRequireDefault(_Container);

	var _Divider = __webpack_require__(5);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Flag = __webpack_require__(6);

	var _Flag2 = _interopRequireDefault(_Flag);

	var _Header = __webpack_require__(7);

	var _Icon = __webpack_require__(8);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Image = __webpack_require__(9);

	var _Image2 = _interopRequireDefault(_Image);

	var _Input = __webpack_require__(10);

	var _Input2 = _interopRequireDefault(_Input);

	var _Label = __webpack_require__(11);

	var _Label2 = _interopRequireDefault(_Label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  UiButton: _Button2.default,
	  UiButtons: _Buttons2.default,
	  UiContainer: _Container2.default,
	  UiDivider: _Divider2.default,
	  UiFlag: _Flag2.default,
	  UiH1: _Header.H1,
	  UiH2: _Header.H2,
	  UiH3: _Header.H3,
	  UiH4: _Header.H4,
	  UiH5: _Header.H5,
	  UiH6: _Header.H6,
	  UiSubHeader: _Header.SubHeader,
	  UiIcon: _Icon2.default,
	  UiImage: _Image2.default,
	  UiInput: _Input2.default,
	  UiLabel: _Label2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="class"><slot>Default</slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' button' : "ui button";
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
	  template: '<div :class="class"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' buttons' : "ui buttons";
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
	  template: '<div :class="class"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' container' : "ui container";
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
	  template: '<div :class="class"></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' divider' : "ui divider";
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
	  template: '<i class="{{css}} flag"></i>',
	  props: {
	    css: {
	      type: String,
	      default: 'cn'
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var H1 = exports.H1 = {
	  template: '<h1 :class="class"><slot></slot></h1>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H2 = exports.H2 = {
	  template: '<h2 :class="class"><slot></slot></h2>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H3 = exports.H3 = {
	  template: '<h3 :class="class"><slot></slot></h3>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H4 = exports.H4 = {
	  template: '<h4 :class="class"><slot></slot></h4>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H5 = exports.H5 = {
	  template: '<h5 :class="class"><slot></slot></h5>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H6 = exports.H6 = {
	  template: '<h6 :class="class"><slot></slot></h6>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var SubHeader = exports.SubHeader = {
	  template: '<div :class="class"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'sub ' + this.css + ' header' : "sub header";
	    }
	  }
	};

/***/ },
/* 8 */
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
	      default: 'warning sign'
	    }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<img :class="class" :src="src"><slot></slot>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    },
	    src: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' image' : "ui image";
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="class"><slot></slot></div>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    },
	    src: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' input' : "ui input";
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<a :class="class"><slot></slot></a>',
	  props: {
	    css: {
	      type: String,
	      default: ''
	    },
	    src: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    class: function _class() {
	      return this.css ? 'ui ' + this.css + ' label' : "ui label";
	    }
	  }
	};

/***/ }
/******/ ])
});
;