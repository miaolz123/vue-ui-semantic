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
	exports.install = install;

	var _VueUiSemantic = __webpack_require__(1);

	var _VueUiSemantic2 = _interopRequireDefault(_VueUiSemantic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue) {
	  // util
	  Vue.component('ui-content', _VueUiSemantic2.default.Content);
	  Vue.component('ui-description', _VueUiSemantic2.default.Description);
	  Vue.component('ui-meta', _VueUiSemantic2.default.Meta);
	  Vue.component('ui-text', _VueUiSemantic2.default.Text);
	  Vue.component('ui-title', _VueUiSemantic2.default.Title);
	  // elements
	  Vue.component('ui-button', _VueUiSemantic2.default.Button);
	  Vue.component('ui-buttons', _VueUiSemantic2.default.Buttons);
	  Vue.component('ui-container', _VueUiSemantic2.default.Container);
	  Vue.component('ui-divider', _VueUiSemantic2.default.Divider);
	  Vue.component('ui-flag', _VueUiSemantic2.default.Flag);
	  Vue.component('ui-header', _VueUiSemantic2.default.Header);
	  Vue.component('ui-sub-header', _VueUiSemantic2.default.SubHeader);
	  Vue.component('ui-icon', _VueUiSemantic2.default.Icon);
	  Vue.component('ui-image', _VueUiSemantic2.default.Image);
	  Vue.component('ui-input', _VueUiSemantic2.default.Input);
	  Vue.component('ui-label', _VueUiSemantic2.default.Label);
	  Vue.component('ui-list', _VueUiSemantic2.default.List);
	  Vue.component('ui-loader', _VueUiSemantic2.default.Loader);
	  Vue.component('ui-rail', _VueUiSemantic2.default.Rail);
	  Vue.component('ui-reveal', _VueUiSemantic2.default.Reveal);
	  Vue.component('ui-segment', _VueUiSemantic2.default.Segment);
	  Vue.component('ui-step', _VueUiSemantic2.default.Step);
	  Vue.component('ui-steps', _VueUiSemantic2.default.Steps);
	  // collections
	  Vue.component('ui-breadcrumb', _VueUiSemantic2.default.Breadcrumb);
	  Vue.component('ui-section', _VueUiSemantic2.default.Section);
	  Vue.component('ui-field', _VueUiSemantic2.default.Field);
	  Vue.component('ui-fields', _VueUiSemantic2.default.Fields);
	  Vue.component('ui-form', _VueUiSemantic2.default.Form);
	  Vue.component('ui-grid', _VueUiSemantic2.default.Grid);
	  Vue.component('ui-column', _VueUiSemantic2.default.Column);
	  Vue.component('ui-row', _VueUiSemantic2.default.Row);
	  Vue.component('ui-menu', _VueUiSemantic2.default.Menu);
	  Vue.component('ui-message', _VueUiSemantic2.default.Message);
	  Vue.component('ui-table', _VueUiSemantic2.default.Table);
	  // views
	  Vue.component('ui-ad', _VueUiSemantic2.default.Ad);
	  Vue.component('ui-card', _VueUiSemantic2.default.Card);
	  Vue.component('ui-cards', _VueUiSemantic2.default.Cards);
	  Vue.component('ui-comment', _VueUiSemantic2.default.Comment);
	  Vue.component('ui-comments', _VueUiSemantic2.default.Comments);
	  Vue.component('ui-avatar', _VueUiSemantic2.default.Avatar);
	  Vue.component('ui-author', _VueUiSemantic2.default.Author);
	  Vue.component('ui-metadata', _VueUiSemantic2.default.Metadata);
	  Vue.component('ui-actions', _VueUiSemantic2.default.Actions);
	  Vue.component('ui-feed', _VueUiSemantic2.default.Feed);
	  Vue.component('ui-event', _VueUiSemantic2.default.Event);
	  Vue.component('ui-summary', _VueUiSemantic2.default.Summary);
	  Vue.component('ui-date', _VueUiSemantic2.default.Date);
	  Vue.component('ui-items', _VueUiSemantic2.default.Items);
	  Vue.component('ui-item', _VueUiSemantic2.default.Item);
	  Vue.component('ui-statistic', _VueUiSemantic2.default.Statistic);
	  Vue.component('ui-statistics', _VueUiSemantic2.default.Statistics);
	  Vue.component('ui-value', _VueUiSemantic2.default.Value);
	  // modules
	  Vue.component('ui-accordion', _VueUiSemantic2.default.Accordion);
	  Vue.component('ui-checkbox', _VueUiSemantic2.default.Checkbox);
	  Vue.component('ui-dimmer', _VueUiSemantic2.default.Dimmer);
	  Vue.component('ui-dropdown', _VueUiSemantic2.default.Dropdown);
	  Vue.component('ui-modal', _VueUiSemantic2.default.Modal);
	  Vue.component('ui-nag', _VueUiSemantic2.default.Nag);
	  Vue.component('ui-popup', _VueUiSemantic2.default.Popup);
	  Vue.component('ui-progress', _VueUiSemantic2.default.Progress);
	  Vue.component('ui-bar', _VueUiSemantic2.default.Bar);
	  Vue.component('ui-rating', _VueUiSemantic2.default.Rating);
	  Vue.component('ui-search', _VueUiSemantic2.default.Search);
	  Vue.component('ui-results', _VueUiSemantic2.default.Results);
	  Vue.component('ui-shape', _VueUiSemantic2.default.Shape);
	  Vue.component('ui-side', _VueUiSemantic2.default.Side);
	  Vue.component('ui-sidebar', _VueUiSemantic2.default.Sidebar);
	  Vue.component('ui-pusher', _VueUiSemantic2.default.Pusher);
	  Vue.component('ui-sticky', _VueUiSemantic2.default.Sticky);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(2);

	var _Button = __webpack_require__(3);

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

	var _List = __webpack_require__(12);

	var _List2 = _interopRequireDefault(_List);

	var _Loader = __webpack_require__(13);

	var _Loader2 = _interopRequireDefault(_Loader);

	var _Rail = __webpack_require__(14);

	var _Rail2 = _interopRequireDefault(_Rail);

	var _Reveal = __webpack_require__(15);

	var _Reveal2 = _interopRequireDefault(_Reveal);

	var _Segment = __webpack_require__(16);

	var _Segment2 = _interopRequireDefault(_Segment);

	var _Step = __webpack_require__(17);

	var _Breadcrumb = __webpack_require__(18);

	var _Form = __webpack_require__(19);

	var _Grid = __webpack_require__(20);

	var _Menu = __webpack_require__(21);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Message = __webpack_require__(22);

	var _Message2 = _interopRequireDefault(_Message);

	var _Table = __webpack_require__(23);

	var _Table2 = _interopRequireDefault(_Table);

	var _Advertisement = __webpack_require__(24);

	var _Advertisement2 = _interopRequireDefault(_Advertisement);

	var _Card = __webpack_require__(25);

	var _Comment = __webpack_require__(26);

	var _Feed = __webpack_require__(27);

	var _Item = __webpack_require__(28);

	var _Statistic = __webpack_require__(29);

	var _Accordion = __webpack_require__(30);

	var _Accordion2 = _interopRequireDefault(_Accordion);

	var _Checkbox = __webpack_require__(31);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Dimmer = __webpack_require__(32);

	var _Dimmer2 = _interopRequireDefault(_Dimmer);

	var _Dropdown = __webpack_require__(33);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Modal = __webpack_require__(34);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Nag = __webpack_require__(35);

	var _Nag2 = _interopRequireDefault(_Nag);

	var _Popup = __webpack_require__(36);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _Progress = __webpack_require__(37);

	var _Rating = __webpack_require__(38);

	var _Rating2 = _interopRequireDefault(_Rating);

	var _Search = __webpack_require__(39);

	var _Shape = __webpack_require__(40);

	var _Sidebar = __webpack_require__(41);

	var _Sticky = __webpack_require__(42);

	var _Sticky2 = _interopRequireDefault(_Sticky);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// elements
	exports.default = {
	  // util
	  Content: _util.Content,
	  Description: _util.Description,
	  Meta: _util.Meta,
	  Text: _util.Text,
	  Title: _util.Title,
	  // elements
	  Button: _Button.Button,
	  Buttons: _Button.Buttons,
	  Container: _Container2.default,
	  Divider: _Divider2.default,
	  Flag: _Flag2.default,
	  Header: _Header.Header,
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
	  Steps: _Step.Steps,
	  // collections
	  Breadcrumb: _Breadcrumb.Breadcrumb,
	  Section: _Breadcrumb.Section,
	  Field: _Form.Field,
	  Fields: _Form.Fields,
	  Form: _Form.Form,
	  Grid: _Grid.Grid,
	  Column: _Grid.Column,
	  Row: _Grid.Row,
	  Menu: _Menu2.default,
	  Message: _Message2.default,
	  Table: _Table2.default,
	  // views
	  Ad: _Advertisement2.default,
	  Card: _Card.Card,
	  Cards: _Card.Cards,
	  Comment: _Comment.Comment,
	  Comments: _Comment.Comments,
	  Avatar: _Comment.Avatar,
	  Author: _Comment.Author,
	  Metadata: _Comment.Metadata,
	  Actions: _Comment.Actions,
	  Feed: _Feed.Feed,
	  Event: _Feed.Event,
	  Summary: _Feed.Summary,
	  Date: _Feed.Date,
	  Items: _Item.Items,
	  Item: _Item.Item,
	  Statistic: _Statistic.Statistic,
	  Statistics: _Statistic.Statistics,
	  Value: _Statistic.Value,
	  // modules
	  Accordion: _Accordion2.default,
	  Checkbox: _Checkbox2.default,
	  Dimmer: _Dimmer2.default,
	  Dropdown: _Dropdown2.default,
	  Modal: _Modal2.default,
	  Nag: _Nag2.default,
	  Popup: _Popup2.default,
	  Progress: _Progress.Progress,
	  Bar: _Progress.Bar,
	  Rating: _Rating2.default,
	  Search: _Search.Search,
	  Results: _Search.Results,
	  Shape: _Shape.Shape,
	  Side: _Shape.Side,
	  Sidebar: _Sidebar.Sidebar,
	  Pusher: _Sidebar.Pusher,
	  Sticky: _Sticky2.default
	};
	// modules

	// views

	// collections
	// util

/***/ },
/* 2 */
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

	var Meta = exports.Meta = {
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
	      return this.class ? this.class : this.css ? this.css + ' meta' : "meta";
	    }
	  }
	};

	var Text = exports.Text = {
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
	      return this.class ? this.class : this.css ? this.css + ' text' : "text";
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
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Button = exports.Button = {
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
/* 4 */
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
/* 5 */
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
	var Header = exports.Header = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
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
	  },
	  ready: function ready() {
	    if (this.type) {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
	  template: '<img :class="className" :src="src">',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
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
	  },
	  ready: function ready() {
	    if (this.type && this.type !== 'img') {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      newNode.className = this.$el.className;
	      newNode.innerHTML = '<img src="' + this.src + '">';
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<a :class="className"><slot></slot></a>',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
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
	  },
	  ready: function ready() {
	    if (this.type) {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      if (this.type !== 'a') {
	        newNode.className = this.class ? this.class : this.css ? this.css + ' label' : "label";
	      } else newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' list' : "ui list";
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' loader' : "ui loader";
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' rail' : "ui rail";
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' reveal' : "ui reveal";
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
/* 17 */
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

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Breadcrumb = exports.Breadcrumb = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' breadcrumb' : "ui breadcrumb";
	    }
	  }
	};

	var Section = exports.Section = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
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
	      return this.class ? this.class : this.css ? this.css + ' section' : "section";
	    }
	  },
	  ready: function ready() {
	    if (this.type) {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Field = exports.Field = {
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
	      return this.class ? this.class : this.css ? this.css + ' field' : "field";
	    }
	  }
	};

	var Fields = exports.Fields = {
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
	      return this.class ? this.class : this.css ? this.css + ' fields' : "fields";
	    }
	  }
	};

	var Form = exports.Form = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' form' : "ui form";
	    }
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Grid = exports.Grid = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' grid' : "ui grid";
	    }
	  }
	};

	var Column = exports.Column = {
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
	      return this.class ? this.class : this.css ? this.css + ' column' : "column";
	    }
	  }
	};

	var Row = exports.Row = {
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
	      return this.class ? this.class : this.css ? this.css + ' row' : "row";
	    }
	  }
	};

/***/ },
/* 21 */
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
	      return this.class ? this.class : this.css ? this.css === 'right' ? 'right menu' : 'ui ' + this.css + ' menu' : "ui menu";
	    }
	  }
	};

/***/ },
/* 22 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' message' : "ui message";
	    }
	  }
	};

/***/ },
/* 23 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' table' : "ui table";
	    }
	  },
	  ready: function ready() {
	    var newNode = document.createElement('table');
	    if (this.$el.id) newNode.id = this.$el.id;
	    newNode.className = this.$el.className;
	    newNode.innerHTML = this.$el.innerHTML;
	    this.$el.parentNode.replaceChild(newNode, this.$el);
	  }
	};

/***/ },
/* 24 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' ad' : "ui ad";
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Card = exports.Card = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' card' : "ui card";
	    }
	  }
	};

	var Cards = exports.Cards = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' cards' : "ui cards";
	    }
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Comment = exports.Comment = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' comment' : "ui comment";
	    }
	  }
	};

	var Comments = exports.Comments = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' comments' : "ui comments";
	    }
	  }
	};

	var Avatar = exports.Avatar = {
	  template: '<a :class="className"><img :src="src"></a>',
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
	      return this.class ? this.class : this.css ? this.css + ' avatar' : "avatar";
	    }
	  }
	};

	var Author = exports.Author = {
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
	      return this.class ? this.class : this.css ? this.css + ' author' : "author";
	    }
	  }
	};

	var Metadata = exports.Metadata = {
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
	      return this.class ? this.class : this.css ? this.css + ' metadata' : "metadata";
	    }
	  }
	};

	var Actions = exports.Actions = {
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
	      return this.class ? this.class : this.css ? this.css + ' actions' : "actions";
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Feed = exports.Feed = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' feed' : "ui feed";
	    }
	  }
	};

	var Event = exports.Event = {
	  template: '<div :class="className"></slot><slot></slot></div>',
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
	      return this.class ? this.class : this.css ? this.css + ' event' : "event";
	    }
	  }
	};

	var Summary = exports.Summary = {
	  template: '<div :class="className"></slot><slot></slot></div>',
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
	      return this.class ? this.class : this.css ? this.css + ' summary' : "summary";
	    }
	  }
	};

	var Date = exports.Date = {
	  template: '<div :class="className"></slot><slot></slot></div>',
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
	      return this.class ? this.class : this.css ? this.css + ' date' : "date";
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Items = exports.Items = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' items' : "ui items";
	    }
	  }
	};

	var Item = exports.Item = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
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
	  },
	  ready: function ready() {
	    if (this.type) {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
	    }
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Statistic = exports.Statistic = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' statistic' : "ui statistic";
	    }
	  }
	};

	var Statistics = exports.Statistics = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' statistics' : "ui statistics";
	    }
	  }
	};

	var Value = exports.Value = {
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
	      return this.class ? this.class : this.css ? this.css + ' value' : "value";
	    }
	  }
	};

/***/ },
/* 30 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' accordion' : "ui accordion";
	    }
	  },
	  ready: function ready() {
	    $(this.$el).accordion();
	  }
	};

/***/ },
/* 31 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' checkbox' : "ui checkbox";
	    }
	  }
	};

/***/ },
/* 32 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' dimmer' : "ui dimmer";
	    }
	  },
	  methods: {
	    show: function show() {
	      $(this.$el).dimmer('show');
	    },
	    hide: function hide() {
	      $(this.$el).dimmer('hide');
	    }
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className"><slot></slot></div>',
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    },
	    setting: {
	      type: Object
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' dropdown' : "ui dropdown";
	    }
	  },
	  ready: function ready() {
	    if (this.type) {
	      var newNode = document.createElement(this.type);
	      if (this.$el.id) newNode.id = this.$el.id;
	      newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
	    }
	    $(this.$el).dropdown(this.setting);
	  }
	};

/***/ },
/* 34 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' modal' : "ui modal";
	    }
	  },
	  methods: {
	    show: function show() {
	      $(this.$el).modal('show');
	    }
	  }
	};

/***/ },
/* 35 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' nag' : "ui nag";
	    }
	  },
	  ready: function ready() {
	    $(this.$el).nag('show');
	  }
	};

/***/ },
/* 36 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' popup' : "ui popup";
	    }
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Progress = exports.Progress = {
	  template: '<div :class="className" :data-percent="value"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    },
	    value: 0
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' progress' : "ui progress";
	    }
	  },
	  ready: function ready() {
	    $(this.$el).progress();
	  }
	};

	var Bar = exports.Bar = {
	  template: '<div :class="className"></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    },
	    percent: ''
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' bar' : "bar";
	    }
	  },
	  ready: function ready() {
	    if (this.percent) {
	      this.$el.innerHTML = '<div class="progress"></div>';
	    }
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<div :class="className" :data-rating="value" :data-max-rating="max"><slot></slot></div>',
	  props: {
	    class: {
	      type: String,
	      default: ''
	    },
	    css: {
	      type: String,
	      default: ''
	    },
	    value: 0,
	    max: 5
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' rating' : "ui rating";
	    }
	  },
	  ready: function ready() {
	    $(this.$el).rating();
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Search = exports.Search = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' search' : "ui search";
	    }
	  }
	};

	var Results = exports.Results = {
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
	      return this.class ? this.class : this.css ? this.css + ' results' : "results";
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Shape = exports.Shape = {
	  template: '<div :class="className"><div class="sides"><slot></slot></div></div>',
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' shape' : "ui shape";
	    }
	  }
	};

	var Side = exports.Side = {
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
	      return this.class ? this.class : this.css ? this.css + ' side' : "side";
	    }
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Sidebar = exports.Sidebar = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' sidebar' : "ui sidebar";
	    }
	  }
	};

	var Pusher = exports.Pusher = {
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
	      return this.class ? this.class : this.css ? this.css + ' pusher' : "pusher";
	    }
	  }
	};

/***/ },
/* 42 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' sticky' : "ui sticky";
	    }
	  }
	};

/***/ }
/******/ ])
});
;