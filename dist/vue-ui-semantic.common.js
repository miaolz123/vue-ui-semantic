/**
 * vue-ui-semantic v0.1.0
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

	var _util = __webpack_require__(1);

	var _Button = __webpack_require__(2);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	var _Divider = __webpack_require__(4);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Flag = __webpack_require__(5);

	var _Flag2 = _interopRequireDefault(_Flag);

	var _Header = __webpack_require__(6);

	var _Icon = __webpack_require__(7);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Image = __webpack_require__(8);

	var _Image2 = _interopRequireDefault(_Image);

	var _Input = __webpack_require__(9);

	var _Input2 = _interopRequireDefault(_Input);

	var _Label = __webpack_require__(10);

	var _Label2 = _interopRequireDefault(_Label);

	var _List = __webpack_require__(11);

	var _List2 = _interopRequireDefault(_List);

	var _Loader = __webpack_require__(12);

	var _Loader2 = _interopRequireDefault(_Loader);

	var _Rail = __webpack_require__(13);

	var _Rail2 = _interopRequireDefault(_Rail);

	var _Reveal = __webpack_require__(14);

	var _Reveal2 = _interopRequireDefault(_Reveal);

	var _Segment = __webpack_require__(15);

	var _Segment2 = _interopRequireDefault(_Segment);

	var _Step = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  // util
	  Content: _util.Content,
	  Description: _util.Description,
	  Item: _util.Item,
	  Title: _util.Title,
	  // elements
	  Button: _Button.Button,
	  Buttons: _Button.Buttons,
	  Container: _Container2.default,
	  Divider: _Divider2.default,
	  Flag: _Flag2.default,
	  H1: _Header.H1,
	  H2: _Header.H2,
	  H3: _Header.H3,
	  H4: _Header.H4,
	  H5: _Header.H5,
	  H6: _Header.H6,
	  SubHeader: _Header.SubHeader,
	  Icon: _Icon2.default,
	  Image: _Image2.default,
	  Input: _Input2.default,
	  Label: _Label2.default,
	  List: _List2.default,
	  Loader: _Loader2.default,
	  Rail: _Rail2.default,
	  Reveal: _Reveal2.default,
	  Segment: _Segment2.default,
	  Step: _Step.Step,
	  Steps: _Step.Steps
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Content = exports.Content = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' content' : "content";
	    }
	  }
	};

	var Description = exports.Description = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' description' : "description";
	    }
	  }
	};

	var Item = exports.Item = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' item' : "item";
	    }
	  }
	};

	var Title = exports.Title = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' title' : "title";
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
	var Button = exports.Button = {
	  template: '<div :class="className"><slot>Default</slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' button' : "ui button";
	    }
	  }
	};

	var Buttons = exports.Buttons = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' buttons' : "ui buttons";
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
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' container' : "ui container";
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
	  template: '<div :class="className"></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' divider' : "ui divider";
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
	var H1 = exports.H1 = {
	  template: '<h1 :class="className"><slot></slot></h1>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H2 = exports.H2 = {
	  template: '<h2 :class="className"><slot></slot></h2>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H3 = exports.H3 = {
	  template: '<h3 :class="className"><slot></slot></h3>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H4 = exports.H4 = {
	  template: '<h4 :class="className"><slot></slot></h4>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H5 = exports.H5 = {
	  template: '<h5 :class="className"><slot></slot></h5>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var H6 = exports.H6 = {
	  template: '<h6 :class="className"><slot></slot></h6>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' header' : "ui header";
	    }
	  }
	};

	var SubHeader = exports.SubHeader = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'sub ' + this.css + ' header' : "sub header";
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
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<img :class="className" :src="src">',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
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
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' image' : "ui image";
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
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' input' : "ui input";
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
	  template: '<a :class="className"><slot></slot></a>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' label' : "ui label";
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
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' list' : "ui list";
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' loader' : "ui loader";
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' rail' : "ui rail";
	    }
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' reveal' : "ui reveal";
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' segment' : "ui segment";
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Step = exports.Step = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' step' : "step";
	    }
	  }
	};

	var Steps = exports.Steps = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' steps' : "ui steps";
	    }
	  }
	};

/***/ }
/******/ ])
});
;