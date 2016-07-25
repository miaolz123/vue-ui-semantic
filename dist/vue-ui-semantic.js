/**
 * vue-ui-semantic v0.1.1
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
	exports.install = undefined;

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

	var _Step = __webpack_require__(16);

	var _Breadcrumb = __webpack_require__(17);

	var _Form = __webpack_require__(18);

	var _Grid = __webpack_require__(19);

	var _Menu = __webpack_require__(20);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Message = __webpack_require__(21);

	var _Message2 = _interopRequireDefault(_Message);

	var _Table = __webpack_require__(22);

	var _Table2 = _interopRequireDefault(_Table);

	var _Advertisement = __webpack_require__(23);

	var _Advertisement2 = _interopRequireDefault(_Advertisement);

	var _Card = __webpack_require__(24);

	var _Comment = __webpack_require__(25);

	var _Feed = __webpack_require__(26);

	var _Item = __webpack_require__(27);

	var _Statistic = __webpack_require__(28);

	var _Accordion = __webpack_require__(29);

	var _Accordion2 = _interopRequireDefault(_Accordion);

	var _Checkbox = __webpack_require__(30);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Dimmer = __webpack_require__(31);

	var _Dimmer2 = _interopRequireDefault(_Dimmer);

	var _Dropdown = __webpack_require__(32);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Modal = __webpack_require__(33);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Nag = __webpack_require__(34);

	var _Nag2 = _interopRequireDefault(_Nag);

	var _Popup = __webpack_require__(35);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _Progress = __webpack_require__(36);

	var _Rating = __webpack_require__(37);

	var _Rating2 = _interopRequireDefault(_Rating);

	var _Search = __webpack_require__(38);

	var _Shape = __webpack_require__(39);

	var _Sidebar = __webpack_require__(40);

	var _Sticky = __webpack_require__(41);

	var _Sticky2 = _interopRequireDefault(_Sticky);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// elements


	var Ui = {
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
	  Segment: _Segment.Segment,
	  Segments: _Segment.Segments,
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
	  Sides: _Shape.Sides,
	  Side: _Shape.Side,
	  Sidebar: _Sidebar.Sidebar,
	  Pusher: _Sidebar.Pusher,
	  Sticky: _Sticky2.default
	};
	// modules

	// views

	// collections
	// util


	Ui.install = function (Vue) {
	  // util
	  Vue.component('ui-content', Ui.Content);
	  Vue.component('ui-description', Ui.Description);
	  Vue.component('ui-meta', Ui.Meta);
	  Vue.component('ui-text', Ui.Text);
	  Vue.component('ui-title', Ui.Title);
	  // elements
	  Vue.component('ui-button', Ui.Button);
	  Vue.component('ui-buttons', Ui.Buttons);
	  Vue.component('ui-container', Ui.Container);
	  Vue.component('ui-divider', Ui.Divider);
	  Vue.component('ui-flag', Ui.Flag);
	  Vue.component('ui-header', Ui.Header);
	  Vue.component('ui-sub-header', Ui.SubHeader);
	  Vue.component('ui-icon', Ui.Icon);
	  Vue.component('ui-image', Ui.Image);
	  Vue.component('ui-input', Ui.Input);
	  Vue.component('ui-label', Ui.Label);
	  Vue.component('ui-list', Ui.List);
	  Vue.component('ui-loader', Ui.Loader);
	  Vue.component('ui-rail', Ui.Rail);
	  Vue.component('ui-reveal', Ui.Reveal);
	  Vue.component('ui-segment', Ui.Segment);
	  Vue.component('ui-segments', Ui.Segments);
	  Vue.component('ui-step', Ui.Step);
	  Vue.component('ui-steps', Ui.Steps);
	  // collections
	  Vue.component('ui-breadcrumb', Ui.Breadcrumb);
	  Vue.component('ui-section', Ui.Section);
	  Vue.component('ui-field', Ui.Field);
	  Vue.component('ui-fields', Ui.Fields);
	  Vue.component('ui-form', Ui.Form);
	  Vue.component('ui-grid', Ui.Grid);
	  Vue.component('ui-column', Ui.Column);
	  Vue.component('ui-row', Ui.Row);
	  Vue.component('ui-menu', Ui.Menu);
	  Vue.component('ui-message', Ui.Message);
	  Vue.component('ui-table', Ui.Table);
	  // views
	  Vue.component('ui-ad', Ui.Ad);
	  Vue.component('ui-card', Ui.Card);
	  Vue.component('ui-cards', Ui.Cards);
	  Vue.component('ui-comment', Ui.Comment);
	  Vue.component('ui-comments', Ui.Comments);
	  Vue.component('ui-avatar', Ui.Avatar);
	  Vue.component('ui-author', Ui.Author);
	  Vue.component('ui-metadata', Ui.Metadata);
	  Vue.component('ui-actions', Ui.Actions);
	  Vue.component('ui-feed', Ui.Feed);
	  Vue.component('ui-event', Ui.Event);
	  Vue.component('ui-summary', Ui.Summary);
	  Vue.component('ui-date', Ui.Date);
	  Vue.component('ui-items', Ui.Items);
	  Vue.component('ui-item', Ui.Item);
	  Vue.component('ui-statistic', Ui.Statistic);
	  Vue.component('ui-statistics', Ui.Statistics);
	  Vue.component('ui-value', Ui.Value);
	  // modules
	  Vue.component('ui-accordion', Ui.Accordion);
	  Vue.component('ui-checkbox', Ui.Checkbox);
	  Vue.component('ui-dimmer', Ui.Dimmer);
	  Vue.component('ui-dropdown', Ui.Dropdown);
	  Vue.component('ui-modal', Ui.Modal);
	  Vue.component('ui-nag', Ui.Nag);
	  Vue.component('ui-popup', Ui.Popup);
	  Vue.component('ui-progress', Ui.Progress);
	  Vue.component('ui-bar', Ui.Bar);
	  Vue.component('ui-rating', Ui.Rating);
	  Vue.component('ui-search', Ui.Search);
	  Vue.component('ui-results', Ui.Results);
	  Vue.component('ui-shape', Ui.Shape);
	  Vue.component('ui-sides', Ui.Sides);
	  Vue.component('ui-side', Ui.Side);
	  Vue.component('ui-sidebar', Ui.Sidebar);
	  Vue.component('ui-pusher', Ui.Pusher);
	  Vue.component('ui-sticky', Ui.Sticky);
	};

	exports.default = Ui;
	var install = exports.install = Ui.install;

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
/* 2 */
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
	      newNode.innerHTML = '<img src="' + this.src + '">';
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
	      if (this.type !== 'a') {
	        newNode.className = this.class ? this.class : this.css ? this.css + ' label' : "label";
	      } else newNode.className = this.$el.className;
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
	var Segment = exports.Segment = {
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

	var Segments = exports.Segments = {
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' segments' : "ui segments";
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

/***/ },
/* 17 */
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
/* 19 */
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
/* 20 */
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' message' : "ui message";
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' table' : "ui table";
	    }
	  },
	  ready: function ready() {
	    var newNode = document.createElement('table');
	    for (var i = 0; i < this.$el.attributes.length; i++) {
	      newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	    }
	    newNode.innerHTML = this.$el.innerHTML;
	    this.$el.parentNode.replaceChild(newNode, this.$el);
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' ad' : "ui ad";
	    }
	  }
	};

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
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
	    },
	    format: {
	      default: true
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? this.css + ' value' : "value";
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' checkbox' : "ui checkbox";
	    }
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
/* 32 */
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
	      for (var i = 0; i < this.$el.attributes.length; i++) {
	        newNode.setAttribute(this.$el.attributes[i].name, this.$el.attributes[i].value);
	      }
	      newNode.innerHTML = this.$el.innerHTML;
	      this.$el.parentNode.replaceChild(newNode, this.$el);
	    }
	    $(this.$el).dropdown(this.setting);
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' nag' : "ui nag";
	    }
	  },
	  ready: function ready() {
	    $(this.$el).nag('show');
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
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' popup' : "ui popup";
	    }
	  }
	};

/***/ },
/* 36 */
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
/* 37 */
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
	    value: {
	      default: 0
	    },
	    max: {
	      default: 5
	    }
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
/* 38 */
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
/* 39 */
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
	  },
	  ready: function ready() {
	    $(this.$el).shape();
	  }
	};

	var Sides = exports.Sides = {
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
	      return this.class ? this.class : this.css ? this.css + ' sides' : "sides";
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
/* 40 */
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
	  },
	  methods: {
	    show: function show() {
	      $(this.$el).sidebar('show');
	    },
	    hide: function hide() {
	      $(this.$el).sidebar('hide');
	    },
	    toggle: function toggle() {
	      $(this.$el).sidebar('toggle');
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
/* 41 */
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
	    },
	    pushing: {
	      default: false
	    },
	    jitter: {
	      default: 5
	    },
	    observeChanges: {
	      default: false
	    },
	    context: {
	      default: false
	    },
	    scrollContext: {
	      default: window
	    },
	    offset: {
	      default: 0
	    },
	    bottomOffset: {
	      default: 0
	    }
	  },
	  computed: {
	    className: function className() {
	      return this.class ? this.class : this.css ? 'ui ' + this.css + ' sticky' : "ui sticky";
	    }
	  },
	  methods: {
	    refresh: function refresh() {
	      $(this.$el).sticky('refresh');
	    }
	  },
	  ready: function ready() {
	    $(this.$el).sticky({
	      pushing: this.pushing,
	      jitter: this.jitter,
	      observeChanges: this.observeChanges,
	      context: this.context,
	      scrollContext: this.scrollContext,
	      offset: this.offset,
	      bottomOffset: this.bottomOffset
	    });
	  }
	};

/***/ }
/******/ ])
});
;