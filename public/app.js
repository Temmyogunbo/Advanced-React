/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./lib/renderers/dom.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/StateApi.js":
/*!*************************!*\
  !*** ./lib/StateApi.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StateApi = exports.StateApi = function StateApi(rawData) {\n  var _this = this;\n\n  _classCallCheck(this, StateApi);\n\n  this.mapIntoObject = function (arr) {\n    return arr.reduce(function (acc, curr) {\n      acc[curr.id] = curr;\n      return acc;\n    }, {});\n  };\n\n  this.lookUpAuthor = function (authorId) {\n    return _this.data.authors[authorId];\n  };\n\n  this.mergeWithState = function (stateChange) {\n    _this.data = _extends({}, _this.data, stateChange);\n    _this.notifySubscribers();\n  };\n\n  this.setSearchTerm = function (searchTerm) {\n    return _this.mergeWithState({ searchTerm: searchTerm });\n  };\n\n  this.getState = function () {\n    return _this.data;\n  };\n\n  this.subscribe = function (cb) {\n    _this.subscriptionId++;\n    _this.subscriptions[_this.subscriptionId] = cb;\n    return _this.subscriptionId;\n  };\n\n  this.startClock = function () {\n    setInterval(function () {\n      _this.mergeWithState({\n        timestamp: new Date()\n      });\n    }, 1000);\n  };\n\n  this.notifySubscribers = function () {\n    return Object.values(_this.subscriptions).forEach(function (cb) {\n      return cb();\n    });\n  };\n\n  this.unsubscribe = function (subscriptionId) {\n    return delete _this.subscriptions[subscriptionId];\n  };\n\n  this.data = {\n    articles: this.mapIntoObject(rawData.articles),\n    authors: this.mapIntoObject(rawData.authors),\n    searchTerm: '',\n    timestamp: new Date()\n  };\n  this.subscriptions = {};\n  this.subscriptionId = 0;\n};\n\n//# sourceURL=webpack:///./lib/StateApi.js?");

/***/ }),

/***/ "./lib/components/App.jsx":
/*!********************************!*\
  !*** ./lib/components/App.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _lodash = __webpack_require__(/*! lodash.pickby */ \"./node_modules/lodash.pickby/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _ArticleList = __webpack_require__(/*! ./ArticleList */ \"./lib/components/ArticleList.jsx\");\n\nvar _SearchBar = __webpack_require__(/*! ./SearchBar */ \"./lib/components/SearchBar.jsx\");\n\nvar _Timestamp = __webpack_require__(/*! ./Timestamp */ \"./lib/components/Timestamp.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = exports.App = function (_React$PureComponent) {\n  _inherits(App, _React$PureComponent);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.appState = function () {\n      var _this$props$store$get = _this.props.store.getState(),\n          articles = _this$props$store$get.articles,\n          searchTerm = _this$props$store$get.searchTerm;\n\n      return { articles: articles, searchTerm: searchTerm };\n    }, _this.state = _this.appState(), _this.onStoreChange = function () {\n      return _this.setState(_this.appState);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n  // to make context type work\n\n\n  _createClass(App, [{\n    key: 'getChildContext',\n\n\n    // context object\n    value: function getChildContext() {\n      return {\n        store: this.props.store\n      };\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.subscriptionId = this.props.store.subscribe(this.onStoreChange);\n      this.props.store.startClock();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.props.store.unsubscribe(this.subscriptionId);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          articles = _state.articles,\n          searchTerm = _state.searchTerm;\n\n      var searchRe = new RegExp(searchTerm, 'i');\n\n      if (searchTerm) {\n        articles = (0, _lodash2.default)(articles, function (value) {\n          return value.title.match(searchRe) || value.body.match(searchRe);\n        });\n      }\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_Timestamp.TimestampContainer, null),\n        _react2.default.createElement(_SearchBar.SearchBarContainer, null),\n        _react2.default.createElement(_ArticleList.ArticleList, {\n          articles: articles,\n          store: this.props.store\n        })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.PureComponent);\n\nApp.childContextTypes = {\n  store: _propTypes2.default.object };\n\n//# sourceURL=webpack:///./lib/components/App.jsx?");

/***/ }),

/***/ "./lib/components/Article.jsx":
/*!************************************!*\
  !*** ./lib/components/Article.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ArticleContainer = exports.Article = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _storeProvider = __webpack_require__(/*! ./storeProvider */ \"./lib/components/storeProvider.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  article: {\n    paddingBottom: 10,\n    borderBottomStyle: 'solid',\n    borderBottomColor: '#aa',\n    borderBottomWidth: 1,\n    marginBottom: 10\n\n  },\n  title: { fontWeight: 'bold' },\n  date: { fontSeize: '0.85em', color: '#8888' },\n  author: { paddingBottom: 10, paddingTop: 10 },\n  body: { paddingLeft: 20 }\n};\n\nvar dateDisplay = function dateDisplay(dateString) {\n  return new Date(dateString).toDateString();\n};\n\nvar Article = exports.Article = function Article(props) {\n  var article = props.article,\n      author = props.author;\n\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.article },\n    _react2.default.createElement(\n      'div',\n      { style: styles.title },\n      article.title\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.date },\n      dateDisplay(article.date)\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.author },\n      _react2.default.createElement(\n        'a',\n        { href: author.website },\n        author.firstName,\n        ' ',\n        author.lastName\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.body },\n      article.body\n    )\n  );\n};\n\nArticle.propTypes = {\n  article: _propTypes2.default.shape({\n    date: _propTypes2.default.string.isRequired,\n    body: _propTypes2.default.string.isRequired,\n    title: _propTypes2.default.string.isRequired\n  })\n};\n\nvar extraProps = function extraProps(store, originalProps) {\n  return { author: store.lookUpAuthor(originalProps.article.authorId) };\n};\n\nvar ArticleContainer = exports.ArticleContainer = (0, _storeProvider.storeProvider)(extraProps)(Article);\n\n//# sourceURL=webpack:///./lib/components/Article.jsx?");

/***/ }),

/***/ "./lib/components/ArticleList.jsx":
/*!****************************************!*\
  !*** ./lib/components/ArticleList.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ArticleList = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ./Article */ \"./lib/components/Article.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ArticleList = exports.ArticleList = function (_React$PureComponent) {\n  _inherits(ArticleList, _React$PureComponent);\n\n  function ArticleList() {\n    _classCallCheck(this, ArticleList);\n\n    return _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).apply(this, arguments));\n  }\n\n  _createClass(ArticleList, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        Object.values(this.props.articles).map(function (article) {\n          return _react2.default.createElement(_Article.ArticleContainer, {\n            key: article.id,\n            article: article\n          });\n        })\n      );\n    }\n  }]);\n\n  return ArticleList;\n}(_react2.default.PureComponent);\n\n//# sourceURL=webpack:///./lib/components/ArticleList.jsx?");

/***/ }),

/***/ "./lib/components/SearchBar.jsx":
/*!**************************************!*\
  !*** ./lib/components/SearchBar.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SearchBarContainer = exports.SearchBar = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _storeProvider = __webpack_require__(/*! ./storeProvider */ \"./lib/components/storeProvider.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchBar = exports.SearchBar = function (_Component) {\n  _inherits(SearchBar, _Component);\n\n  function SearchBar() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, SearchBar);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      searchTerm: ''\n    }, _this.doSearch = (0, _lodash2.default)(function () {\n      _this.props.store.setSearchTerm(_this.state.searchTerm);\n    }, 300), _this.handleSearch = function (event) {\n      return _this.setState({ searchTerm: event.target.value }, function () {\n        return _this.doSearch();\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(SearchBar, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('input', {\n        type: 'search',\n        placeholder: 'Enter search term here',\n        value: this.state.searchTerm,\n        onChange: this.handleSearch\n      });\n    }\n  }]);\n\n  return SearchBar;\n}(_react.Component);\n\nvar SearchBarContainer = exports.SearchBarContainer = (0, _storeProvider.storeProvider)()(SearchBar);\n\n//# sourceURL=webpack:///./lib/components/SearchBar.jsx?");

/***/ }),

/***/ "./lib/components/Timestamp.jsx":
/*!**************************************!*\
  !*** ./lib/components/Timestamp.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TimestampContainer = exports.Timestamp = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _storeProvider = __webpack_require__(/*! ./storeProvider */ \"./lib/components/storeProvider.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Timestamp = exports.Timestamp = function (_React$PureComponent) {\n  _inherits(Timestamp, _React$PureComponent);\n\n  function Timestamp() {\n    _classCallCheck(this, Timestamp);\n\n    return _possibleConstructorReturn(this, (Timestamp.__proto__ || Object.getPrototypeOf(Timestamp)).apply(this, arguments));\n  }\n\n  _createClass(Timestamp, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        this.props.timestampDisplay\n      );\n    }\n  }]);\n\n  return Timestamp;\n}(_react2.default.PureComponent);\n\nTimestamp.timeDisplay = function (timestamp) {\n  return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });\n};\n\nvar extraProps = function extraProps(store) {\n  return { timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp) };\n};\n\nvar TimestampContainer = exports.TimestampContainer = (0, _storeProvider.storeProvider)(extraProps)(Timestamp);\n\n//# sourceURL=webpack:///./lib/components/Timestamp.jsx?");

/***/ }),

/***/ "./lib/components/storeProvider.js":
/*!*****************************************!*\
  !*** ./lib/components/storeProvider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.storeProvider = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar storeProvider = exports.storeProvider = function storeProvider() {\n  var extraProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {\n    return {};\n  };\n  return function (Component) {\n    var _class, _temp2;\n\n    return _temp2 = _class = function (_React$PureComponent) {\n      _inherits(WithStore, _React$PureComponent);\n\n      function WithStore() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, WithStore);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithStore.__proto__ || Object.getPrototypeOf(WithStore)).call.apply(_ref, [this].concat(args))), _this), _this.usedState = function () {\n          return extraProps(_this.context.store, _this.props);\n        }, _this.state = _this.usedState(), _this.onStoreChange = function () {\n          if (_this.subscriptionId) {\n            _this.setState(_this.usedState());\n          }\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n      }\n\n      _createClass(WithStore, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n          this.subscriptionId = this.context.store.subscribe(this.onStoreChange);\n        }\n      }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n          this.context.store.unsubscribe(this.subscriptionId);\n          this.subscriptionId = null;\n        }\n      }, {\n        key: 'render',\n        value: function render() {\n          return _react2.default.createElement(Component, _extends({}, this.props, this.usedState(), {\n            store: this.context.store\n          }));\n        }\n      }]);\n\n      return WithStore;\n    }(_react2.default.PureComponent), _class.displayName = Component.name + 'Container', _class.contextTypes = {\n      store: _propTypes2.default.object\n    }, _temp2;\n  };\n};\n\n//# sourceURL=webpack:///./lib/components/storeProvider.js?");

/***/ }),

/***/ "./lib/renderers/dom.jsx":
/*!*******************************!*\
  !*** ./lib/renderers/dom.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _App = __webpack_require__(/*! components//App */ \"./lib/components/App.jsx\");\n\nvar _StateApi = __webpack_require__(/*! StateApi */ \"./lib/StateApi.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = new _StateApi.StateApi(window.initialData.data);\n\n(0, _reactDom.hydrate)(_react2.default.createElement(_App.App, { store: store }), document.getElementById('root'));\n\n//# sourceURL=webpack:///./lib/renderers/dom.jsx?");

/***/ })

/******/ });