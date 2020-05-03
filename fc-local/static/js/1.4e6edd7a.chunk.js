(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(44)();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(40);
} else {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Controller: __webpack_require__(27),
  NES: __webpack_require__(50)
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/lodash.isfunction/index.js
var lodash_isfunction = __webpack_require__(29);
var lodash_isfunction_default = /*#__PURE__*/__webpack_require__.n(lodash_isfunction);

// EXTERNAL MODULE: ./node_modules/lodash.isobject/index.js
var lodash_isobject = __webpack_require__(21);
var lodash_isobject_default = /*#__PURE__*/__webpack_require__.n(lodash_isobject);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(15);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/react-popper/lib/Manager.js
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function Manager_objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function Manager_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Manager_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Manager_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}




var Manager_Manager = function (_Component) {
  Manager_inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    Manager_classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Manager_possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), Manager_possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = Manager_objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(react["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(react["Component"]);

Manager_Manager.childContextTypes = {
  popperManager: prop_types_default.a.object.isRequired
};
Manager_Manager.propTypes = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.bool]),
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};
Manager_Manager.defaultProps = {
  tag: 'div'
};
/* harmony default export */ var lib_Manager = (Manager_Manager);
// CONCATENATED MODULE: ./node_modules/react-popper/lib/Target.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function Target_objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}




var Target_Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = Target_objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = {
      ref: targetRef
    };
    return children({
      targetProps: targetProps,
      restProps: restProps
    });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(react["createElement"])(component, componentProps, children);
};

Target_Target.contextTypes = {
  popperManager: prop_types_default.a.object.isRequired
};
Target_Target.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};
/* harmony default export */ var lib_Target = (Target_Target);
// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/react-popper/lib/Popper.js
var Popper_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var Popper_createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function Popper_objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function Popper_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Popper_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Popper_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}




var placements = esm_popper["a" /* default */].placements;

var Popper_Popper = function (_Component) {
  Popper_inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    Popper_classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Popper_possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      if (_this.props.target) {
        return _this.props.target;
      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }

      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({
            data: data
          });
        }

        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;

      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return Popper_extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;
        return {
          top: top,
          left: left
        };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;

      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }

      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), Popper_possibleConstructorReturn(_this, _ret);
  }

  Popper_createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();

        this._createPopper();
      }

      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled,
          positionFixed = _props.positionFixed;

      var modifiers = Popper_extends({}, this.props.modifiers, {
        applyStyle: {
          enabled: false
        },
        updateState: this._updateStateModifier
      });

      if (this._arrowNode) {
        modifiers.arrow = Popper_extends({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }

      this._popper = new esm_popper["a" /* default */](this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      }); // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation

      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          positionFixed = _props2.positionFixed,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = Popper_objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();

      var popperPlacement = this._getPopperPlacement();

      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = Popper_extends({}, restProps, {
        style: Popper_extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(react["createElement"])(component, componentProps, children);
    }
  }]);

  return Popper;
}(react["Component"]);

Popper_Popper.contextTypes = {
  popperManager: prop_types_default.a.object
};
Popper_Popper.childContextTypes = {
  popper: prop_types_default.a.object.isRequired
};
Popper_Popper.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  placement: prop_types_default.a.oneOf(placements),
  eventsEnabled: prop_types_default.a.bool,
  positionFixed: prop_types_default.a.bool,
  modifiers: prop_types_default.a.object,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  target: prop_types_default.a.oneOfType([// the following check is needed for SSR
  prop_types_default.a.instanceOf(typeof Element !== 'undefined' ? Element : Object), prop_types_default.a.shape({
    getBoundingClientRect: prop_types_default.a.func.isRequired,
    clientWidth: prop_types_default.a.number.isRequired,
    clientHeight: prop_types_default.a.number.isRequired
  })])
};
Popper_Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};
/* harmony default export */ var lib_Popper = (Popper_Popper);
// CONCATENATED MODULE: ./node_modules/react-popper/lib/Arrow.js
var Arrow_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function Arrow_objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}




var Arrow_Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = Arrow_objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({
      arrowProps: arrowProps,
      restProps: restProps
    });
  }

  var componentProps = Arrow_extends({}, restProps, {
    style: Arrow_extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(react["createElement"])(component, componentProps, children);
};

Arrow_Arrow.contextTypes = {
  popper: prop_types_default.a.object.isRequired
};
Arrow_Arrow.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};
/* harmony default export */ var lib_Arrow = (Arrow_Arrow);
// CONCATENATED MODULE: ./node_modules/react-popper/lib/react-popper.js




// EXTERNAL MODULE: ./node_modules/lodash.tonumber/index.js
var lodash_tonumber = __webpack_require__(23);
var lodash_tonumber_default = /*#__PURE__*/__webpack_require__.n(lodash_tonumber);

// CONCATENATED MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}


// CONCATENATED MODULE: ./node_modules/reactstrap/dist/reactstrap.es.js
/* unused harmony export Alert */
/* unused harmony export Container */
/* unused harmony export Row */
/* unused harmony export Col */
/* unused harmony export Navbar */
/* unused harmony export NavbarBrand */
/* unused harmony export NavbarToggler */
/* unused harmony export Nav */
/* unused harmony export NavItem */
/* unused harmony export NavDropdown */
/* unused harmony export NavLink */
/* unused harmony export Breadcrumb */
/* unused harmony export BreadcrumbItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reactstrap_es_Button; });
/* unused harmony export ButtonDropdown */
/* unused harmony export ButtonGroup */
/* unused harmony export ButtonToolbar */
/* unused harmony export Dropdown */
/* unused harmony export DropdownItem */
/* unused harmony export DropdownMenu */
/* unused harmony export DropdownToggle */
/* unused harmony export Fade */
/* unused harmony export Badge */
/* unused harmony export Card */
/* unused harmony export CardLink */
/* unused harmony export CardGroup */
/* unused harmony export CardDeck */
/* unused harmony export CardColumns */
/* unused harmony export CardBody */
/* unused harmony export CardBlock */
/* unused harmony export CardFooter */
/* unused harmony export CardHeader */
/* unused harmony export CardImg */
/* unused harmony export CardImgOverlay */
/* unused harmony export Carousel */
/* unused harmony export UncontrolledCarousel */
/* unused harmony export CarouselControl */
/* unused harmony export CarouselItem */
/* unused harmony export CarouselIndicators */
/* unused harmony export CarouselCaption */
/* unused harmony export CardSubtitle */
/* unused harmony export CardText */
/* unused harmony export CardTitle */
/* unused harmony export Popover */
/* unused harmony export PopoverContent */
/* unused harmony export PopoverBody */
/* unused harmony export PopoverTitle */
/* unused harmony export PopoverHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return reactstrap_es_Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reactstrap_es_Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reactstrap_es_ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reactstrap_es_ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reactstrap_es_ModalFooter; });
/* unused harmony export PopperContent */
/* unused harmony export PopperTargetHelper */
/* unused harmony export Tooltip */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reactstrap_es_Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reactstrap_es_ListGroup; });
/* unused harmony export Form */
/* unused harmony export FormFeedback */
/* unused harmony export FormGroup */
/* unused harmony export FormText */
/* unused harmony export Input */
/* unused harmony export InputGroup */
/* unused harmony export InputGroupAddon */
/* unused harmony export InputGroupButton */
/* unused harmony export InputGroupButtonDropdown */
/* unused harmony export InputGroupText */
/* unused harmony export Label */
/* unused harmony export CustomInput */
/* unused harmony export Media */
/* unused harmony export Pagination */
/* unused harmony export PaginationItem */
/* unused harmony export PaginationLink */
/* unused harmony export TabContent */
/* unused harmony export TabPane */
/* unused harmony export Jumbotron */
/* unused harmony export Collapse */
/* unused harmony export ListGroupItem */
/* unused harmony export ListGroupItemText */
/* unused harmony export ListGroupItemHeading */
/* unused harmony export UncontrolledAlert */
/* unused harmony export UncontrolledButtonDropdown */
/* unused harmony export UncontrolledCollapse */
/* unused harmony export UncontrolledDropdown */
/* unused harmony export UncontrolledNavDropdown */
/* unused harmony export UncontrolledTooltip */
/* unused harmony export Util */










var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var reactstrap_es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}; // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443


function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

var globalCssModule = void 0;

function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */


function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */


function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}

var warned = {};

function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(undefined, [props, propName, componentName].concat(rest));
  };
}

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

var targetPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func, DOMElement, prop_types_default.a.shape({
  current: prop_types_default.a.any
})]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function isReactRefObj(target) {
  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
    return 'current' in target;
  }

  return false;
}

function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (lodash_isfunction_default()(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll('#' + target);
    }

    if (!selection.length) {
      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
    }

    return selection;
  }

  return target;
}

function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}

function getTarget(target) {
  var els = findDOMElements(target);

  if (isArrayOrNodeList(els)) {
    return els[0];
  }

  return els;
}

var defaultToggleEvents = ['touchstart', 'click'];

function addMultipleEventListeners(_els, handler, _events) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
  }

  events.forEach(function (event) {
    els.forEach(function (el) {
      el.addEventListener(event, handler);
    });
  });
  return function removeEvents() {
    events.forEach(function (event) {
      els.forEach(function (el) {
        el.removeEventListener(event, handler);
      });
    });
  };
}

var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var utils = Object.freeze({
  getScrollbarWidth: getScrollbarWidth,
  setScrollbarWidth: setScrollbarWidth,
  isBodyOverflowing: isBodyOverflowing,
  getOriginalBodyPadding: getOriginalBodyPadding,
  conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
  setGlobalCssModule: setGlobalCssModule,
  mapToCssModules: mapToCssModules,
  omit: omit,
  pick: pick,
  warnOnce: warnOnce,
  deprecated: deprecated,
  DOMElement: DOMElement,
  targetPropType: targetPropType,
  TransitionTimeouts: TransitionTimeouts,
  TransitionPropTypeKeys: TransitionPropTypeKeys,
  TransitionStatuses: TransitionStatuses,
  keyCodes: keyCodes,
  PopperPlacements: PopperPlacements,
  canUseDOM: canUseDOM,
  isReactRefObj: isReactRefObj,
  findDOMElements: findDOMElements,
  isArrayOrNodeList: isArrayOrNodeList,
  getTarget: getTarget,
  defaultToggleEvents: defaultToggleEvents,
  addMultipleEventListeners: addMultipleEventListeners,
  focusableElements: focusableElements
});
var propTypes = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  fluid: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps = {
  tag: 'div'
};

var reactstrap_es_Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, fluid ? 'container-fluid' : 'container'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Container.propTypes = propTypes;
reactstrap_es_Container.defaultProps = defaultProps;
var propTypes$1 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  noGutters: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  form: prop_types_default.a.bool
};
var defaultProps$1 = {
  tag: 'div'
};

var reactstrap_es_Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag', 'form']);
  var classes = mapToCssModules(classnames_default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Row.propTypes = propTypes$1;
reactstrap_es_Row.defaultProps = defaultProps$1;
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);
var columnProps = prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.shape({
  size: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number, prop_types_default.a.string]),
  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$2 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  widths: prop_types_default.a.array
};
var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var reactstrap_es_Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (lodash_isobject_default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames_default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames_default()(className, colClasses), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Col.propTypes = propTypes$2;
reactstrap_es_Col.defaultProps = defaultProps$2;
var propTypes$3 = {
  light: prop_types_default.a.bool,
  dark: prop_types_default.a.bool,
  inverse: deprecated(prop_types_default.a.bool, 'Please use the prop "dark"'),
  full: prop_types_default.a.bool,
  fixed: prop_types_default.a.string,
  sticky: prop_types_default.a.string,
  color: prop_types_default.a.string,
  role: prop_types_default.a.string,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  toggleable: deprecated(prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]), 'Please use the prop "expand"'),
  expand: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string])
};
var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + expand;
}; // To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.


var toggleableToExpand = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl'
};

var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === undefined || toggleable === 'xl') {
    return false;
  } else if (toggleable === false) {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
};

var reactstrap_es_Navbar = function Navbar(props) {
  var _classNames;

  var toggleable = props.toggleable,
      expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      inverse = props.inverse,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
    'navbar-light': light,
    'navbar-dark': inverse || dark
  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Navbar.propTypes = propTypes$3;
reactstrap_es_Navbar.defaultProps = defaultProps$3;
var propTypes$4 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$4 = {
  tag: 'a'
};

var reactstrap_es_NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'navbar-brand'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_NavbarBrand.propTypes = propTypes$4;
reactstrap_es_NavbarBrand.defaultProps = defaultProps$4;
var propTypes$5 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  type: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node
};
var defaultProps$5 = {
  tag: 'button',
  type: 'button'
};

var reactstrap_es_NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'navbar-toggler'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }), children || react_default.a.createElement('span', {
    className: mapToCssModules('navbar-toggler-icon', cssModule)
  }));
};

reactstrap_es_NavbarToggler.propTypes = propTypes$5;
reactstrap_es_NavbarToggler.defaultProps = defaultProps$5;
var propTypes$6 = {
  tabs: prop_types_default.a.bool,
  pills: prop_types_default.a.bool,
  vertical: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]),
  horizontal: prop_types_default.a.string,
  justified: prop_types_default.a.bool,
  fill: prop_types_default.a.bool,
  navbar: prop_types_default.a.bool,
  card: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$6 = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return 'flex-' + vertical + '-column';
};

var reactstrap_es_Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Nav.propTypes = propTypes$6;
reactstrap_es_Nav.defaultProps = defaultProps$6;
var propTypes$7 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  active: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$7 = {
  tag: 'li'
};

var reactstrap_es_NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'nav-item', active ? 'active' : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_NavItem.propTypes = propTypes$7;
reactstrap_es_NavItem.defaultProps = defaultProps$7;
/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var propTypes$8 = {
  disabled: prop_types_default.a.bool,
  dropup: deprecated(prop_types_default.a.bool, 'Please use the prop "direction" with the value "up".'),
  direction: prop_types_default.a.oneOf(['up', 'down', 'left', 'right']),
  group: prop_types_default.a.bool,
  isOpen: prop_types_default.a.bool,
  nav: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  addonType: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['prepend', 'append'])]),
  size: prop_types_default.a.string,
  tag: prop_types_default.a.string,
  toggle: prop_types_default.a.func,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  inNavbar: prop_types_default.a.bool,
  setActiveFromChild: prop_types_default.a.bool
};
var defaultProps$8 = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};
var childContextTypes = {
  toggle: prop_types_default.a.func.isRequired,
  isOpen: prop_types_default.a.bool.isRequired,
  direction: prop_types_default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types_default.a.bool.isRequired
};

var reactstrap_es_Dropdown = function (_React$Component) {
  inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      return react_dom_default.a.findDOMNode(this);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (keyCodes.tab === e.which || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();

      if (e.which === keyCodes.space && keyCodes.enter && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
      var disabledClass = mapToCssModules('disabled', this.props.cssModule);
      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
      if (!items.length) return;
      var index = -1;
      var charPressed = String.fromCharCode(e.which).toLowerCase();

      for (var i = 0; i < items.length; i += 1) {
        var firstLetter = items[i].textContent && items[i].textContent[0].toLowerCase();

        if (firstLetter === charPressed || items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);

      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;
      attrs.tag = attrs.tag || (nav ? 'li' : 'div');
      var subItemIsActive = false;

      if (setActiveFromChild) {
        react_default.a.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(classnames_default()(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);
      return react_default.a.createElement(lib_Manager, reactstrap_es_extends({}, attrs, {
        className: classes,
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);
  return Dropdown;
}(react_default.a.Component);

reactstrap_es_Dropdown.propTypes = propTypes$8;
reactstrap_es_Dropdown.defaultProps = defaultProps$8;
reactstrap_es_Dropdown.childContextTypes = childContextTypes;

function NavDropdown(props) {
  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
  return react_default.a.createElement(reactstrap_es_Dropdown, reactstrap_es_extends({
    nav: true
  }, props));
}

var propTypes$9 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  disabled: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  onClick: prop_types_default.a.func,
  href: prop_types_default.a.any
};
var defaultProps$9 = {
  tag: 'a'
};

var reactstrap_es_NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);

  function NavLink(props) {
    classCallCheck(this, NavLink);

    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(NavLink, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);
      var classes = mapToCssModules(classnames_default()(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
        ref: innerRef,
        onClick: this.onClick,
        className: classes
      }));
    }
  }]);
  return NavLink;
}(react_default.a.Component);

reactstrap_es_NavLink.propTypes = propTypes$9;
reactstrap_es_NavLink.defaultProps = defaultProps$9;
var propTypes$10 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  listTag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  listClassName: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  'aria-label': prop_types_default.a.string
};
var defaultProps$10 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var reactstrap_es_Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);
  var classes = mapToCssModules(classnames_default()(className), cssModule);
  var listClasses = mapToCssModules(classnames_default()('breadcrumb', listClassName), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes,
    'aria-label': label
  }), react_default.a.createElement(ListTag, {
    className: listClasses
  }, children));
};

reactstrap_es_Breadcrumb.propTypes = propTypes$10;
reactstrap_es_Breadcrumb.defaultProps = defaultProps$10;
var propTypes$11 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  active: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$11 = {
  tag: 'li'
};

var reactstrap_es_BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes,
    'aria-current': active ? 'page' : undefined
  }));
};

reactstrap_es_BreadcrumbItem.propTypes = propTypes$11;
reactstrap_es_BreadcrumbItem.defaultProps = defaultProps$11;
var propTypes$12 = {
  active: prop_types_default.a.bool,
  'aria-label': prop_types_default.a.string,
  block: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  outline: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  close: prop_types_default.a.bool
};
var defaultProps$12 = {
  color: 'secondary',
  tag: 'button'
};

var reactstrap_es_Button = function (_React$Component) {
  inherits(Button, _React$Component);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          ariaLabel = _props['aria-label'],
          block = _props.block,
          className = _props.className,
          close = _props.close,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['active', 'aria-label', 'block', 'className', 'close', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);

      if (close && typeof attributes.children === 'undefined') {
        attributes.children = react_default.a.createElement('span', {
          'aria-hidden': true
        }, '\xD7');
      }

      var btnOutlineColor = 'btn' + (outline ? '-outline' : '') + '-' + color;
      var classes = mapToCssModules(classnames_default()(className, {
        close: close
      }, close || 'btn', close || btnOutlineColor, size ? 'btn-' + size : false, block ? 'btn-block' : false, {
        active: active,
        disabled: this.props.disabled
      }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      var defaultAriaLabel = close ? 'Close' : null;
      return react_default.a.createElement(Tag, reactstrap_es_extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick,
        'aria-label': ariaLabel || defaultAriaLabel
      }));
    }
  }]);
  return Button;
}(react_default.a.Component);

reactstrap_es_Button.propTypes = propTypes$12;
reactstrap_es_Button.defaultProps = defaultProps$12;
var propTypes$13 = {
  children: prop_types_default.a.node
};

var reactstrap_es_ButtonDropdown = function ButtonDropdown(props) {
  return react_default.a.createElement(reactstrap_es_Dropdown, reactstrap_es_extends({
    group: true
  }, props));
};

reactstrap_es_ButtonDropdown.propTypes = propTypes$13;
var propTypes$14 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  'aria-label': prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  role: prop_types_default.a.string,
  size: prop_types_default.a.string,
  vertical: prop_types_default.a.bool
};
var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var reactstrap_es_ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ButtonGroup.propTypes = propTypes$14;
reactstrap_es_ButtonGroup.defaultProps = defaultProps$13;
var propTypes$15 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  'aria-label': prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  role: prop_types_default.a.string
};
var defaultProps$14 = {
  tag: 'div',
  role: 'toolbar'
};

var reactstrap_es_ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'btn-toolbar'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ButtonToolbar.propTypes = propTypes$15;
reactstrap_es_ButtonToolbar.defaultProps = defaultProps$14;
var propTypes$16 = {
  children: prop_types_default.a.node,
  active: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  divider: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  header: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  toggle: prop_types_default.a.bool
};
var contextTypes = {
  toggle: prop_types_default.a.func
};
var defaultProps$15 = {
  tag: 'button',
  toggle: true
};

var reactstrap_es_DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    classCallCheck(this, DropdownItem);

    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.getTabIndex = _this.getTabIndex.bind(_this);
    return _this;
  }

  createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);

      var classes = mapToCssModules(classnames_default()(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return react_default.a.createElement(Tag, reactstrap_es_extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);
  return DropdownItem;
}(react_default.a.Component);

reactstrap_es_DropdownItem.propTypes = propTypes$16;
reactstrap_es_DropdownItem.defaultProps = defaultProps$15;
reactstrap_es_DropdownItem.contextTypes = contextTypes;
var propTypes$17 = {
  tag: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  right: prop_types_default.a.bool,
  flip: prop_types_default.a.bool,
  modifiers: prop_types_default.a.object,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  persist: prop_types_default.a.bool
};
var defaultProps$16 = {
  tag: 'div',
  flip: true
};
var contextTypes$1 = {
  isOpen: prop_types_default.a.bool.isRequired,
  direction: prop_types_default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types_default.a.bool.isRequired
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var reactstrap_es_DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      modifiers = props.modifiers,
      persist = props.persist,
      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);
  var classes = mapToCssModules(classnames_default()(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);
  var Tag = tag;

  if (persist || context.isOpen && !context.inNavbar) {
    Tag = lib_Popper;
    var position1 = directionPositionMap[context.direction] || 'bottom';
    var position2 = right ? 'end' : 'start';
    attrs.placement = position1 + '-' + position2;
    attrs.component = tag;
    attrs.modifiers = !flip ? reactstrap_es_extends({}, modifiers, noFlipModifier) : modifiers;
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({
    tabIndex: '-1',
    role: 'menu'
  }, attrs, {
    'aria-hidden': !context.isOpen,
    className: classes,
    'x-placement': attrs.placement
  }));
};

reactstrap_es_DropdownMenu.propTypes = propTypes$17;
reactstrap_es_DropdownMenu.defaultProps = defaultProps$16;
reactstrap_es_DropdownMenu.contextTypes = contextTypes$1;
var propTypes$18 = {
  caret: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  'aria-haspopup': prop_types_default.a.bool,
  split: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  nav: prop_types_default.a.bool
};
var defaultProps$17 = {
  'aria-haspopup': true,
  color: 'secondary'
};
var contextTypes$2 = {
  isOpen: prop_types_default.a.bool.isRequired,
  toggle: prop_types_default.a.func.isRequired,
  inNavbar: prop_types_default.a.bool.isRequired
};

var reactstrap_es_DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    classCallCheck(this, DropdownToggle);

    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(DropdownToggle, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);
      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames_default()(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || react_default.a.createElement('span', {
        className: 'sr-only'
      }, ariaLabel);
      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = reactstrap_es_Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return react_default.a.createElement(Tag, reactstrap_es_extends({}, props, {
          className: classes,
          onClick: this.onClick,
          'aria-expanded': this.context.isOpen,
          children: children
        }));
      }

      return react_default.a.createElement(lib_Target, reactstrap_es_extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        'aria-expanded': this.context.isOpen,
        children: children
      }));
    }
  }]);
  return DropdownToggle;
}(react_default.a.Component);

reactstrap_es_DropdownToggle.propTypes = propTypes$18;
reactstrap_es_DropdownToggle.defaultProps = defaultProps$17;
reactstrap_es_DropdownToggle.contextTypes = contextTypes$2;

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var PropTypes$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes2 = _interopRequireDefault(prop_types_default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;
    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
});
unwrapExports(PropTypes$1);
var Transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

  var PropTypes$$1 = _interopRequireWildcard(prop_types_default.a);

  var _react2 = _interopRequireDefault(react_default.a);

  var _reactDom2 = _interopRequireDefault(react_dom_default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
  var EXITED = exports.EXITED = 'exited';
  var ENTERING = exports.ENTERING = 'entering';
  var ENTERED = exports.ENTERED = 'entered';
  var EXITING = exports.EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return {
        transitionGroup: null
      }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _ref = this.pendingState || this.state,
          status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({
            status: EXITED
          });
        }

        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit = void 0,
          enter = void 0,
          appear = void 0;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null; // nextStatus will always be ENTERING or EXITING.

        this.cancelNextCallback();

        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
      var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
      var _this4 = this; // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition


      this.pendingState = nextState; // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.

      callback = this.setNextCallback(callback);
      this.setState(nextState, function () {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          childProps = _objectWithoutProperties(_props, ['children']); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);

      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };
  Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;
  exports.default = Transition;
});
var reactstrap_es_Transition = unwrapExports(Transition_1);

var propTypes$19 = reactstrap_es_extends({}, reactstrap_es_Transition.propTypes, {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  tag: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  baseClass: prop_types_default.a.string,
  baseClassActive: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
});

var defaultProps$18 = reactstrap_es_extends({}, reactstrap_es_Transition.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']); // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
  // empty object "{}". This is the result of the `react-transition-group` babel
  // configuration settings. Therefore, to ensure that production builds work without
  // error, we can either explicitly define keys or use the Transition.defaultProps.
  // Using the Transition.defaultProps excludes any required props. Thus, the best
  // solution is to explicitly define required props in our utilities and reference these.
  // This also gives us more flexibility in the future to remove the prop-types
  // dependency in distribution builds (Similar to how `react-transition-group` does).
  // Note: Without omitting the `react-transition-group` props, the resulting child
  // Tag component would inherit the Transition properties as attributes for the HTML
  // element which results in errors/warnings for non-valid attributes.

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return react_default.a.createElement(reactstrap_es_Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classnames_default()(className, baseClass, isActive && baseClassActive), cssModule);
    return react_default.a.createElement(Tag, reactstrap_es_extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$19;
Fade.defaultProps = defaultProps$18;
var propTypes$20 = {
  color: prop_types_default.a.string,
  pill: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$19 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var reactstrap_es_Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Badge.propTypes = propTypes$20;
reactstrap_es_Badge.defaultProps = defaultProps$19;
var propTypes$21 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  inverse: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  block: deprecated(prop_types_default.a.bool, 'Please use the props "body"'),
  body: prop_types_default.a.bool,
  outline: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var defaultProps$20 = {
  tag: 'div'
};

var reactstrap_es_Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);
  var classes = mapToCssModules(classnames_default()(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

reactstrap_es_Card.propTypes = propTypes$21;
reactstrap_es_Card.defaultProps = defaultProps$20;
var propTypes$22 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$21 = {
  tag: 'div'
};

var reactstrap_es_CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-group'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardGroup.propTypes = propTypes$22;
reactstrap_es_CardGroup.defaultProps = defaultProps$21;
var propTypes$23 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$22 = {
  tag: 'div'
};

var reactstrap_es_CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-deck'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardDeck.propTypes = propTypes$23;
reactstrap_es_CardDeck.defaultProps = defaultProps$22;
var propTypes$24 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$23 = {
  tag: 'div'
};

var reactstrap_es_CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-columns'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardColumns.propTypes = propTypes$24;
reactstrap_es_CardColumns.defaultProps = defaultProps$23;
var propTypes$25 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$24 = {
  tag: 'div'
};

var reactstrap_es_CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-body'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardBody.propTypes = propTypes$25;
reactstrap_es_CardBody.defaultProps = defaultProps$24;

function CardBlock(props) {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return react_default.a.createElement(reactstrap_es_CardBody, props);
}

var propTypes$26 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$25 = {
  tag: 'a'
};

var reactstrap_es_CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);
  var classes = mapToCssModules(classnames_default()(className, 'card-link'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

reactstrap_es_CardLink.propTypes = propTypes$26;
reactstrap_es_CardLink.defaultProps = defaultProps$25;
var propTypes$27 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$26 = {
  tag: 'div'
};

var reactstrap_es_CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-footer'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardFooter.propTypes = propTypes$27;
reactstrap_es_CardFooter.defaultProps = defaultProps$26;
var propTypes$28 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$27 = {
  tag: 'div'
};

var reactstrap_es_CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-header'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardHeader.propTypes = propTypes$28;
reactstrap_es_CardHeader.defaultProps = defaultProps$27;
var propTypes$29 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  top: prop_types_default.a.bool,
  bottom: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$28 = {
  tag: 'img'
};

var reactstrap_es_CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);
  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classnames_default()(className, cardImgClassName), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardImg.propTypes = propTypes$29;
reactstrap_es_CardImg.defaultProps = defaultProps$28;
var propTypes$30 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$29 = {
  tag: 'div'
};

var reactstrap_es_CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-img-overlay'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardImgOverlay.propTypes = propTypes$30;
reactstrap_es_CardImgOverlay.defaultProps = defaultProps$29;

var reactstrap_es_CarouselItem = function (_React$Component) {
  inherits(CarouselItem, _React$Component);

  function CarouselItem(props) {
    classCallCheck(this, CarouselItem);

    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_this);
    _this.onEntering = _this.onEntering.bind(_this);
    _this.onExit = _this.onExit.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(CarouselItem, [{
    key: 'onEnter',
    value: function onEnter(node, isAppearing) {
      this.setState({
        startAnimation: false
      });
      this.props.onEnter(node, isAppearing);
    }
  }, {
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = node.offsetHeight;
      this.setState({
        startAnimation: true
      });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({
        startAnimation: false
      });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      this.setState({
        startAnimation: true
      });
      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isIn = _props.in,
          children = _props.children,
          cssModule = _props.cssModule,
          slide = _props.slide,
          Tag = _props.tag,
          className = _props.className,
          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);
      return react_default.a.createElement(reactstrap_es_Transition, reactstrap_es_extends({}, transitionProps, {
        enter: slide,
        exit: slide,
        'in': isIn,
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var direction = _this2.context.direction;
        var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
        var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
        var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
        var itemClasses = mapToCssModules(classnames_default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
        return react_default.a.createElement(Tag, {
          className: itemClasses
        }, children);
      });
    }
  }]);
  return CarouselItem;
}(react_default.a.Component);

reactstrap_es_CarouselItem.propTypes = reactstrap_es_extends({}, reactstrap_es_Transition.propTypes, {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  in: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  slide: prop_types_default.a.bool,
  className: prop_types_default.a.string
});
reactstrap_es_CarouselItem.defaultProps = reactstrap_es_extends({}, reactstrap_es_Transition.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
reactstrap_es_CarouselItem.contextTypes = {
  direction: prop_types_default.a.string
};

var reactstrap_es_Carousel = function (_React$Component) {
  inherits(Carousel, _React$Component);

  function Carousel(props) {
    classCallCheck(this, Carousel);

    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);
    _this.hoverStart = _this.hoverStart.bind(_this);
    _this.hoverEnd = _this.hoverEnd.bind(_this);
    _this.state = {
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  createClass(Carousel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        direction: this.state.direction
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


      document.addEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setInterval(nextProps); // Calculate the direction to turn

      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
        this.setState({
          direction: 'right'
        });
      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
        this.setState({
          direction: 'left'
        });
      } else if (this.props.activeIndex > nextProps.activeIndex) {
        this.setState({
          direction: this.state.indicatorClicked ? 'left' : 'right'
        });
      } else if (this.props.activeIndex !== nextProps.activeIndex) {
        this.setState({
          direction: this.state.indicatorClicked ? 'right' : 'left'
        });
      }

      this.setState({
        indicatorClicked: false
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'setInterval',
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props; // make sure not to have multiple intervals going...

      this.clearInterval();

      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    })
  }, {
    key: 'clearInterval',
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    })
  }, {
    key: 'hoverStart',
    value: function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }

      if (this.props.mouseEnter) {
        var _props;

        (_props = this.props).mouseEnter.apply(_props, arguments);
      }
    }
  }, {
    key: 'hoverEnd',
    value: function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }

      if (this.props.mouseLeave) {
        var _props2;

        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;
      return react_default.a.createElement('div', {
        role: 'listbox',
        className: className
      }, carouselItems.map(function (item, index) {
        var isIn = index === _this2.props.activeIndex;
        return react_default.a.cloneElement(item, {
          in: isIn,
          slide: slide
        });
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          cssModule = _props3.cssModule,
          slide = _props3.slide,
          className = _props3.className;
      var outerClasses = mapToCssModules(classnames_default()(className, 'carousel', slide && 'slide'), cssModule);
      var innerClasses = mapToCssModules(classnames_default()('carousel-inner'), cssModule); // filter out booleans, null, or undefined

      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });
      var slidesOnly = children.every(function (child) {
        return child.type === reactstrap_es_CarouselItem;
      }); // Rendering only slides

      if (slidesOnly) {
        return react_default.a.createElement('div', {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(children, innerClasses));
      } // Rendering slides and controls


      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];
        return react_default.a.createElement('div', {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
      } // Rendering indicators, slides and controls


      var indicators = children[0];

      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({
            indicatorClicked: true
          }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };

      var wrappedIndicators = react_default.a.cloneElement(indicators, {
        onClickHandler: wrappedOnClick
      });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];
      return react_default.a.createElement('div', {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
    }
  }]);
  return Carousel;
}(react_default.a.Component);

reactstrap_es_Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: prop_types_default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: prop_types_default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: prop_types_default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: prop_types_default.a.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types_default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types_default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.bool]),
  children: prop_types_default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: prop_types_default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: prop_types_default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  className: prop_types_default.a.string
};
reactstrap_es_Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true
};
reactstrap_es_Carousel.childContextTypes = {
  direction: prop_types_default.a.string
};

var reactstrap_es_CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classnames_default()(className, 'carousel-control-' + direction), cssModule);
  var iconClasses = mapToCssModules(classnames_default()('carousel-control-' + direction + '-icon'), cssModule);
  var screenReaderClasses = mapToCssModules(classnames_default()('sr-only'), cssModule);
  return react_default.a.createElement('a', {
    className: anchorClasses,
    role: 'button',
    tabIndex: '0',
    onClick: function onClick(e) {
      e.preventDefault();
      onClickHandler();
    }
  }, react_default.a.createElement('span', {
    className: iconClasses,
    'aria-hidden': 'true'
  }), react_default.a.createElement('span', {
    className: screenReaderClasses
  }, directionText || direction));
};

reactstrap_es_CarouselControl.propTypes = {
  direction: prop_types_default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: prop_types_default.a.func.isRequired,
  cssModule: prop_types_default.a.object,
  directionText: prop_types_default.a.string,
  className: prop_types_default.a.string
};

var reactstrap_es_CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classnames_default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames_default()({
      active: activeIndex === idx
    }), cssModule);
    return react_default.a.createElement('li', {
      key: '' + (item.key || item.src) + item.caption + item.altText,
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return react_default.a.createElement('ol', {
    className: listClasses
  }, indicators);
};

reactstrap_es_CarouselIndicators.propTypes = {
  items: prop_types_default.a.array.isRequired,
  activeIndex: prop_types_default.a.number.isRequired,
  cssModule: prop_types_default.a.object,
  onClickHandler: prop_types_default.a.func.isRequired,
  className: prop_types_default.a.string
};

var reactstrap_es_CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classnames_default()(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return react_default.a.createElement('div', {
    className: classes
  }, react_default.a.createElement('h3', null, captionHeader), react_default.a.createElement('p', null, captionText));
};

reactstrap_es_CarouselCaption.propTypes = {
  captionHeader: prop_types_default.a.string,
  captionText: prop_types_default.a.string.isRequired,
  cssModule: prop_types_default.a.object,
  className: prop_types_default.a.string
};
var propTypes$31 = {
  items: prop_types_default.a.array.isRequired,
  indicators: prop_types_default.a.bool,
  controls: prop_types_default.a.bool,
  autoPlay: prop_types_default.a.bool,
  activeIndex: prop_types_default.a.number,
  next: prop_types_default.a.func,
  previous: prop_types_default.a.func,
  goToIndex: prop_types_default.a.func
};

var reactstrap_es_UncontrolledCarousel = function (_Component) {
  inherits(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    classCallCheck(this, UncontrolledCarousel);

    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));

    _this.animating = false;
    _this.state = {
      activeIndex: 0
    };
    _this.next = _this.next.bind(_this);
    _this.previous = _this.previous.bind(_this);
    _this.goToIndex = _this.goToIndex.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(UncontrolledCarousel, [{
    key: 'onExiting',
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: 'onExited',
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: 'goToIndex',
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoPlay = _props.autoPlay,
          indicators = _props.indicators,
          controls = _props.controls,
          items = _props.items,
          goToIndex = _props.goToIndex,
          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
      var activeIndex = this.state.activeIndex;
      var slides = items.map(function (item) {
        return react_default.a.createElement(reactstrap_es_CarouselItem, {
          onExiting: _this2.onExiting,
          onExited: _this2.onExited,
          key: item.src
        }, react_default.a.createElement('img', {
          className: 'd-block w-100',
          src: item.src,
          alt: item.altText
        }), react_default.a.createElement(reactstrap_es_CarouselCaption, {
          captionText: item.caption,
          captionHeader: item.header || item.caption
        }));
      });
      return react_default.a.createElement(reactstrap_es_Carousel, reactstrap_es_extends({
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        ride: autoPlay ? 'carousel' : undefined
      }, props), indicators && react_default.a.createElement(reactstrap_es_CarouselIndicators, {
        items: items,
        activeIndex: props.activeIndex || activeIndex,
        onClickHandler: goToIndex || this.goToIndex
      }), slides, controls && react_default.a.createElement(reactstrap_es_CarouselControl, {
        direction: 'prev',
        directionText: 'Previous',
        onClickHandler: props.previous || this.previous
      }), controls && react_default.a.createElement(reactstrap_es_CarouselControl, {
        direction: 'next',
        directionText: 'Next',
        onClickHandler: props.next || this.next
      }));
    }
  }]);
  return UncontrolledCarousel;
}(react["Component"]);

reactstrap_es_UncontrolledCarousel.propTypes = propTypes$31;
reactstrap_es_UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
var propTypes$32 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$30 = {
  tag: 'h6'
};

var reactstrap_es_CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-subtitle'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardSubtitle.propTypes = propTypes$32;
reactstrap_es_CardSubtitle.defaultProps = defaultProps$30;
var propTypes$33 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$31 = {
  tag: 'p'
};

var reactstrap_es_CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-text'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardText.propTypes = propTypes$33;
reactstrap_es_CardText.defaultProps = defaultProps$31;
var propTypes$34 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$32 = {
  tag: 'h5'
};

var reactstrap_es_CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'card-title'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_CardTitle.propTypes = propTypes$34;
reactstrap_es_CardTitle.defaultProps = defaultProps$32;
var propTypes$35 = {
  className: prop_types_default.a.string,
  id: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  type: prop_types_default.a.string.isRequired,
  label: prop_types_default.a.node,
  inline: prop_types_default.a.bool,
  valid: prop_types_default.a.bool,
  invalid: prop_types_default.a.bool,
  bsSize: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.array, prop_types_default.a.func]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};

function CustomInput(props) {
  var className = props.className,
      label = props.label,
      inline = props.inline,
      valid = props.valid,
      invalid = props.invalid,
      cssModule = props.cssModule,
      children = props.children,
      bsSize = props.bsSize,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize', 'innerRef']);
  var type = attributes.type;
  var customClass = mapToCssModules(classnames_default()(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);
  var validationClassNames = mapToCssModules(classnames_default()(invalid && 'is-invalid', valid && 'is-valid'), cssModule);

  if (type === 'select') {
    return react_default.a.createElement('select', reactstrap_es_extends({}, attributes, {
      ref: innerRef,
      className: classnames_default()(validationClassNames, customClass)
    }), children);
  }

  if (type === 'file') {
    return react_default.a.createElement('div', {
      className: customClass
    }, react_default.a.createElement('input', reactstrap_es_extends({}, attributes, {
      ref: innerRef,
      className: classnames_default()(validationClassNames, mapToCssModules('custom-file-input', cssModule))
    })), react_default.a.createElement('label', {
      className: mapToCssModules('custom-file-label', cssModule),
      htmlFor: attributes.id
    }, label || 'Choose file'));
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return react_default.a.createElement('input', reactstrap_es_extends({}, attributes, {
      ref: innerRef,
      className: classnames_default()(validationClassNames, customClass)
    }));
  }

  var wrapperClasses = classnames_default()(customClass, mapToCssModules(classnames_default()('custom-control', {
    'custom-control-inline': inline
  }), cssModule));
  return react_default.a.createElement('div', {
    className: wrapperClasses
  }, react_default.a.createElement('input', reactstrap_es_extends({}, attributes, {
    ref: innerRef,
    className: classnames_default()(validationClassNames, mapToCssModules('custom-control-input', cssModule))
  })), react_default.a.createElement('label', {
    className: mapToCssModules('custom-control-label', cssModule),
    htmlFor: attributes.id
  }, label), children);
}

CustomInput.propTypes = propTypes$35;
var propTypes$36 = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string,
  placement: prop_types_default.a.string,
  placementPrefix: prop_types_default.a.string,
  arrowClassName: prop_types_default.a.string,
  hideArrow: prop_types_default.a.bool,
  tag: prop_types_default.a.string,
  isOpen: prop_types_default.a.bool.isRequired,
  cssModule: prop_types_default.a.object,
  offset: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  fallbackPlacement: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array]),
  flip: prop_types_default.a.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: prop_types_default.a.object,
  boundariesElement: prop_types_default.a.oneOfType([prop_types_default.a.string, DOMElement])
};
var defaultProps$33 = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {}
};
var childContextTypes$1 = {
  popperManager: prop_types_default.a.object.isRequired
};

var reactstrap_es_PopperContent = function (_React$Component) {
  inherits(PopperContent, _React$Component);

  function PopperContent(props) {
    classCallCheck(this, PopperContent);

    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.setTargetNode = _this.setTargetNode.bind(_this);
    _this.getTargetNode = _this.getTargetNode.bind(_this);
    _this.state = {};
    return _this;
  }

  createClass(PopperContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this.setTargetNode,
          getTargetNode: this.getTargetNode
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      } else if (this._element) {
        // rerender
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'setTargetNode',
    value: function setTargetNode(node) {
      this.targetNode = node;
    }
  }, {
    key: 'getTargetNode',
    value: function getTargetNode() {
      return this.targetNode;
    }
  }, {
    key: 'getContainerNode',
    value: function getContainerNode() {
      return getTarget(this.props.container);
    }
  }, {
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({
          placement: data.placement
        });
      }

      return data;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.container !== 'inline') {
        if (this.props.isOpen) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this._element) {
        this.getContainerNode().removeChild(this._element);
        react_dom_default.a.unmountComponentAtNode(this._element);
        this._element = null;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._element = document.createElement('div');
      this.getContainerNode().appendChild(this._element);
      this.renderIntoSubtree();

      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      react_dom_default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          flip = _props.flip,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          _arrowClassName = _props.arrowClassName,
          hideArrow = _props.hideArrow,
          className = _props.className,
          tag = _props.tag,
          container = _props.container,
          modifiers = _props.modifiers,
          boundariesElement = _props.boundariesElement,
          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'arrowClassName', 'hideArrow', 'className', 'tag', 'container', 'modifiers', 'boundariesElement']);
      var arrowClassName = mapToCssModules(classnames_default()('arrow', _arrowClassName), cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var popperClassName = mapToCssModules(classnames_default()(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var extendedModifiers = reactstrap_es_extends({
        offset: {
          offset: offset
        },
        flip: {
          enabled: flip,
          behavior: fallbackPlacement
        },
        preventOverflow: {
          boundariesElement: boundariesElement
        },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      }, modifiers);

      return react_default.a.createElement(lib_Popper, reactstrap_es_extends({
        modifiers: extendedModifiers
      }, attrs, {
        component: tag,
        className: popperClassName,
        'x-placement': this.state.placement || attrs.placement
      }), children, !hideArrow && react_default.a.createElement(lib_Arrow, {
        className: arrowClassName
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      this.setTargetNode(getTarget(this.props.target));

      if (this.props.container === 'inline') {
        return this.props.isOpen ? this.renderChildren() : null;
      }

      return null;
    }
  }]);
  return PopperContent;
}(react_default.a.Component);

reactstrap_es_PopperContent.propTypes = propTypes$36;
reactstrap_es_PopperContent.defaultProps = defaultProps$33;
reactstrap_es_PopperContent.childContextTypes = childContextTypes$1;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: prop_types_default.a.object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};
var propTypes$37 = {
  placement: prop_types_default.a.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  boundariesElement: prop_types_default.a.oneOfType([prop_types_default.a.string, DOMElement]),
  isOpen: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  hideArrow: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  innerClassName: prop_types_default.a.string,
  placementPrefix: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  toggle: prop_types_default.a.func,
  delay: prop_types_default.a.oneOfType([prop_types_default.a.shape({
    show: prop_types_default.a.number,
    hide: prop_types_default.a.number
  }), prop_types_default.a.number]),
  modifiers: prop_types_default.a.object,
  offset: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};
var defaultProps$34 = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {}
};

var reactstrap_es_Popover = function (_React$Component) {
  inherits(Popover, _React$Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this._target = null;
    return _this;
  }

  createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this._popover = ref;
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();

      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();

      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (this._target) {
        if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
          if (this._hideTimeout) {
            this.clearHideTimeout();
          }

          if (this.props.isOpen) {
            this.toggle(e);
          }
        }
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$37));
      var classes = mapToCssModules(classnames_default()('popover-inner', this.props.innerClassName), this.props.cssModule);
      var popperClasses = mapToCssModules(classnames_default()('popover', 'show', this.props.className), this.props.cssModule);
      return react_default.a.createElement(reactstrap_es_PopperContent, {
        className: popperClasses,
        target: this.props.target,
        isOpen: this.props.isOpen,
        hideArrow: this.props.hideArrow,
        placement: this.props.placement,
        placementPrefix: this.props.placementPrefix,
        container: this.props.container,
        modifiers: this.props.modifiers,
        offset: this.props.offset,
        boundariesElement: this.props.boundariesElement
      }, react_default.a.createElement('div', reactstrap_es_extends({}, attributes, {
        className: classes,
        ref: this.getRef
      })));
    }
  }]);
  return Popover;
}(react_default.a.Component);

reactstrap_es_Popover.propTypes = propTypes$37;
reactstrap_es_Popover.defaultProps = defaultProps$34;
var propTypes$38 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$35 = {
  tag: 'h3'
};

var reactstrap_es_PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'popover-header'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_PopoverHeader.propTypes = propTypes$38;
reactstrap_es_PopoverHeader.defaultProps = defaultProps$35;

function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return react_default.a.createElement(reactstrap_es_PopoverHeader, props);
}

var propTypes$39 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$36 = {
  tag: 'div'
};

var reactstrap_es_PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'popover-body'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_PopoverBody.propTypes = propTypes$39;
reactstrap_es_PopoverBody.defaultProps = defaultProps$36;

function PopoverContent(props) {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return react_default.a.createElement(reactstrap_es_PopoverBody, props);
}

var propTypes$40 = {
  children: prop_types_default.a.node,
  bar: prop_types_default.a.bool,
  multi: prop_types_default.a.bool,
  tag: prop_types_default.a.string,
  value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  max: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  animated: prop_types_default.a.bool,
  striped: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string,
  barClassName: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$37 = {
  tag: 'div',
  value: 0,
  max: 100
};

var reactstrap_es_Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);
  var percent = lodash_tonumber_default()(value) / lodash_tonumber_default()(max) * 100;
  var progressClasses = mapToCssModules(classnames_default()(className, 'progress'), cssModule);
  var progressBarClasses = mapToCssModules(classnames_default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var ProgressBar = multi ? children : react_default.a.createElement('div', {
    className: progressBarClasses,
    style: {
      width: percent + '%'
    },
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max,
    children: children
  });

  if (bar) {
    return ProgressBar;
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: progressClasses,
    children: ProgressBar
  }));
};

reactstrap_es_Progress.propTypes = propTypes$40;
reactstrap_es_Progress.defaultProps = defaultProps$37;
var propTypes$42 = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

var reactstrap_es_Portal = function (_React$Component) {
  inherits(Portal, _React$Component);

  function Portal() {
    classCallCheck(this, Portal);
    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }

      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(react_default.a.Component);

reactstrap_es_Portal.propTypes = propTypes$42;

function reactstrap_es_noop() {}

var FadePropTypes = prop_types_default.a.shape(Fade.propTypes);
var propTypes$41 = {
  isOpen: prop_types_default.a.bool,
  autoFocus: prop_types_default.a.bool,
  centered: prop_types_default.a.bool,
  size: prop_types_default.a.string,
  toggle: prop_types_default.a.func,
  keyboard: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  labelledBy: prop_types_default.a.string,
  backdrop: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['static'])]),
  onEnter: prop_types_default.a.func,
  onExit: prop_types_default.a.func,
  onOpened: prop_types_default.a.func,
  onClosed: prop_types_default.a.func,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  wrapClassName: prop_types_default.a.string,
  modalClassName: prop_types_default.a.string,
  backdropClassName: prop_types_default.a.string,
  contentClassName: prop_types_default.a.string,
  external: prop_types_default.a.node,
  fade: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  zIndex: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var propsToOmit = Object.keys(propTypes$41);
var defaultProps$38 = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: reactstrap_es_noop,
  onClosed: reactstrap_es_noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  }
};

var reactstrap_es_Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_this);
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.onOpened = _this.onOpened.bind(_this);
    _this.onClosed = _this.onClosed.bind(_this);
    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }

    return _this;
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this.state.isOpen) {
        this.destroy();
      }

      this._isMounted = false;
    }
  }, {
    key: 'onOpened',
    value: function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || reactstrap_es_noop)(node, isAppearing);
    }
  }, {
    key: 'onClosed',
    value: function onClosed(node) {
      // so all methods get called before it is unmounted
      this.props.onClosed();
      (this.props.modalTransition.onExited || reactstrap_es_noop)(node);
      this.destroy();

      if (this._isMounted) {
        this.setState({
          isOpen: false
        });
      }
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'getFocusableChildren',
    value: function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    }
  }, {
    key: 'getFocusedChild',
    value: function getFocusedChild() {
      var currentFocus = void 0;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }

      return currentFocus;
    } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls

  }, {
    key: 'handleBackdropClick',
    value: function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        if (!this.props.isOpen || this.props.backdrop !== true) return;
        var container = this._dialog;

        if (e.target && !container.contains(e.target) && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (e.which !== 9) return;
      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      var currentFocus = this.getFocusedChild();
      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    }
  }, {
    key: 'handleBackdropMouseDown',
    value: function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }

      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._originalBodyPadding = getOriginalBodyPadding();
      conditionallyUpdateScrollbar();
      document.body.appendChild(this._element);

      if (Modal.openCount === 0) {
        document.body.className = classnames_default()(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      }

      Modal.openCount += 1;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._element) {
        document.body.removeChild(this._element);
        this._element = null;
      }

      if (this._triggeringElement) {
        if (this._triggeringElement.focus) this._triggeringElement.focus();
        this._triggeringElement = null;
      }

      if (Modal.openCount <= 1) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      }

      Modal.openCount -= 1;
      setScrollbarWidth(this._originalBodyPadding);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _classNames,
          _this2 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';
      return react_default.a.createElement('div', reactstrap_es_extends({}, attributes, {
        className: mapToCssModules(classnames_default()(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
        role: 'document',
        ref: function ref(c) {
          _this2._dialog = c;
        }
      }), react_default.a.createElement('div', {
        className: mapToCssModules(classnames_default()('modal-content', this.props.contentClassName), this.props.cssModule)
      }, this.props.children));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            wrapClassName = _props.wrapClassName,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy,
            external = _props.external,
            innerRef = _props.innerRef;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: {
            display: 'block'
          },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };
        var hasTransition = this.props.fade;

        var modalTransition = reactstrap_es_extends({}, Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });

        var backdropTransition = reactstrap_es_extends({}, Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = hasTransition ? react_default.a.createElement(Fade, reactstrap_es_extends({}, backdropTransition, {
          'in': isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(classnames_default()('modal-backdrop', backdropClassName), cssModule)
        })) : react_default.a.createElement('div', {
          className: mapToCssModules(classnames_default()('modal-backdrop', 'show', backdropClassName), cssModule)
        });
        return react_default.a.createElement(reactstrap_es_Portal, {
          node: this._element
        }, react_default.a.createElement('div', {
          className: mapToCssModules(wrapClassName)
        }, react_default.a.createElement(Fade, reactstrap_es_extends({}, modalAttributes, modalTransition, {
          'in': isOpen,
          onEntered: this.onOpened,
          onExited: this.onClosed,
          cssModule: cssModule,
          className: mapToCssModules(classnames_default()('modal', modalClassName), cssModule),
          innerRef: innerRef
        }), external, this.renderModalDialog()), Backdrop));
      }

      return null;
    }
  }]);
  return Modal;
}(react_default.a.Component);

reactstrap_es_Modal.propTypes = propTypes$41;
reactstrap_es_Modal.defaultProps = defaultProps$38;
reactstrap_es_Modal.openCount = 0;
var propTypes$43 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  wrapTag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  toggle: prop_types_default.a.func,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  closeAriaLabel: prop_types_default.a.string,
  charCode: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  close: prop_types_default.a.object
};
var defaultProps$39 = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var reactstrap_es_ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel', 'charCode', 'close']);
  var classes = mapToCssModules(classnames_default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = react_default.a.createElement('button', {
      type: 'button',
      onClick: toggle,
      className: mapToCssModules('close', cssModule),
      'aria-label': closeAriaLabel
    }, react_default.a.createElement('span', {
      'aria-hidden': 'true'
    }, closeIcon));
  }

  return react_default.a.createElement(WrapTag, reactstrap_es_extends({}, attributes, {
    className: classes
  }), react_default.a.createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
};

reactstrap_es_ModalHeader.propTypes = propTypes$43;
reactstrap_es_ModalHeader.defaultProps = defaultProps$39;
var propTypes$44 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$40 = {
  tag: 'div'
};

var reactstrap_es_ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'modal-body'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ModalBody.propTypes = propTypes$44;
reactstrap_es_ModalBody.defaultProps = defaultProps$40;
var propTypes$45 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$41 = {
  tag: 'div'
};

var reactstrap_es_ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'modal-footer'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ModalFooter.propTypes = propTypes$45;
reactstrap_es_ModalFooter.defaultProps = defaultProps$41;
var propTypes$46 = {
  placement: prop_types_default.a.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  hideArrow: prop_types_default.a.bool,
  boundariesElement: prop_types_default.a.oneOfType([prop_types_default.a.string, DOMElement]),
  className: prop_types_default.a.string,
  innerClassName: prop_types_default.a.string,
  arrowClassName: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  toggle: prop_types_default.a.func,
  autohide: prop_types_default.a.bool,
  placementPrefix: prop_types_default.a.string,
  delay: prop_types_default.a.oneOfType([prop_types_default.a.shape({
    show: prop_types_default.a.number,
    hide: prop_types_default.a.number
  }), prop_types_default.a.number]),
  modifiers: prop_types_default.a.object,
  offset: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.object]),
  trigger: prop_types_default.a.string
};
var DEFAULT_DELAYS$1 = {
  show: 0,
  hide: 250
};
var defaultProps$42 = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS$1,
  autohide: true,
  toggle: function toggle() {}
};

var reactstrap_es_Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this._target = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
    return _this;
  }

  createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.addTargetEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearHideTimeout();
      this.clearShowTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'onMouseOverTooltip',
    value: function onMouseOverTooltip(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    }
  }, {
    key: 'onMouseLeaveTooltip',
    value: function onMouseLeaveTooltip(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onMouseOverTooltipContent',
    value: function onMouseOverTooltipContent() {
      if (this.props.autohide) {
        return;
      }

      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }, {
    key: 'onMouseLeaveTooltipContent',
    value: function onMouseLeaveTooltipContent(e) {
      if (this.props.autohide) {
        return;
      }

      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onEscKeyDown',
    value: function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: 'show',
    value: function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'hide',
    value: function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (this._target !== null && (e.target === this._target || this._target.contains(e.target))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.toggle(e);
        }
      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }

        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');

        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1) {
            ['click', 'touchstart'].forEach(function (event) {
              return document.addEventListener(event, _this2.handleDocumentClick, true);
            });
          }

          if (this._target !== null) {
            if (triggers.indexOf('hover') > -1) {
              this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);

              this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
            }

            if (triggers.indexOf('focus') > -1) {
              this._target.addEventListener('focusin', this.show, true);

              this._target.addEventListener('focusout', this.hide, true);
            }

            this._target.addEventListener('keydown', this.onEscKeyDown, true);
          }
        }
      } else {
        if (this._target !== null) {
          this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);

          this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);

          this._target.addEventListener('keydown', this.onEscKeyDown, true);

          this._target.addEventListener('focusin', this.show, true);

          this._target.addEventListener('focusout', this.hide, true);
        }

        ['click', 'touchstart'].forEach(function (event) {
          return document.addEventListener(event, _this2.handleDocumentClick, true);
        });
      }
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      if (this._target !== null) {
        this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);

        this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);

        this._target.addEventListener('keydown', this.onEscKeyDown, true);

        this._target.addEventListener('focusin', this.show, true);

        this._target.addEventListener('focusout', this.hide, true);
      }

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$46));
      var classes = mapToCssModules(classnames_default()('tooltip-inner', this.props.innerClassName), this.props.cssModule);
      var popperClasses = mapToCssModules(classnames_default()('tooltip', 'show', this.props.className), this.props.cssModule);
      return react_default.a.createElement(reactstrap_es_PopperContent, {
        className: popperClasses,
        target: this.props.target,
        isOpen: this.props.isOpen,
        hideArrow: this.props.hideArrow,
        boundariesElement: this.props.boundariesElement,
        placement: this.props.placement,
        placementPrefix: this.props.placementPrefix,
        arrowClassName: this.props.arrowClassName,
        container: this.props.container,
        modifiers: this.props.modifiers,
        offset: this.props.offset,
        cssModule: this.props.cssModule
      }, react_default.a.createElement('div', reactstrap_es_extends({}, attributes, {
        ref: this.props.innerRef,
        className: classes,
        role: 'tooltip',
        'aria-hidden': this.props.isOpen,
        onMouseOver: this.onMouseOverTooltipContent,
        onMouseLeave: this.onMouseLeaveTooltipContent,
        onKeyDown: this.onEscKeyDown
      })));
    }
  }]);
  return Tooltip;
}(react_default.a.Component);

reactstrap_es_Tooltip.propTypes = propTypes$46;
reactstrap_es_Tooltip.defaultProps = defaultProps$42;
var propTypes$47 = {
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  size: prop_types_default.a.string,
  bordered: prop_types_default.a.bool,
  borderless: prop_types_default.a.bool,
  striped: prop_types_default.a.bool,
  inverse: deprecated(prop_types_default.a.bool, 'Please use the prop "dark"'),
  dark: prop_types_default.a.bool,
  hover: prop_types_default.a.bool,
  responsive: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]),
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  responsiveTag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string])
};
var defaultProps$43 = {
  tag: 'table',
  responsiveTag: 'div'
};

var reactstrap_es_Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      inverse = props.inverse,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);
  var classes = mapToCssModules(classnames_default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;
    return react_default.a.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

reactstrap_es_Table.propTypes = propTypes$47;
reactstrap_es_Table.defaultProps = defaultProps$43;
var propTypes$48 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  flush: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$44 = {
  tag: 'ul'
};

var reactstrap_es_ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);
  var classes = mapToCssModules(classnames_default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ListGroup.propTypes = propTypes$48;
reactstrap_es_ListGroup.defaultProps = defaultProps$44;
var propTypes$49 = {
  children: prop_types_default.a.node,
  inline: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$45 = {
  tag: 'form'
};

var reactstrap_es_Form = function (_Component) {
  inherits(Form, _Component);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  createClass(Form, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    }
  }, {
    key: 'submit',
    value: function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);
      var classes = mapToCssModules(classnames_default()(className, inline ? 'form-inline' : false), cssModule);
      return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    }
  }]);
  return Form;
}(react["Component"]);

reactstrap_es_Form.propTypes = propTypes$49;
reactstrap_es_Form.defaultProps = defaultProps$45;
var propTypes$50 = {
  children: prop_types_default.a.node,
  tag: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  valid: prop_types_default.a.bool,
  tooltip: prop_types_default.a.bool
};
var defaultProps$46 = {
  tag: 'div',
  valid: undefined
};

var reactstrap_es_FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);
  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = mapToCssModules(classnames_default()(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_FormFeedback.propTypes = propTypes$50;
reactstrap_es_FormFeedback.defaultProps = defaultProps$46;
var propTypes$51 = {
  children: prop_types_default.a.node,
  row: prop_types_default.a.bool,
  check: prop_types_default.a.bool,
  inline: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  tag: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$47 = {
  tag: 'div'
};

var reactstrap_es_FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_FormGroup.propTypes = propTypes$51;
reactstrap_es_FormGroup.defaultProps = defaultProps$47;
var propTypes$52 = {
  children: prop_types_default.a.node,
  inline: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  color: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$48 = {
  tag: 'small',
  color: 'muted'
};

var reactstrap_es_FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_FormText.propTypes = propTypes$52;
reactstrap_es_FormText.defaultProps = defaultProps$48;
/* eslint react/prefer-stateless-function: 0 */

var propTypes$53 = {
  children: prop_types_default.a.node,
  type: prop_types_default.a.string,
  size: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  state: deprecated(prop_types_default.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: prop_types_default.a.bool,
  invalid: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  static: deprecated(prop_types_default.a.bool, 'Please use the prop "plaintext"'),
  plaintext: prop_types_default.a.bool,
  addon: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$49 = {
  type: 'text'
};

var reactstrap_es_Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          type = _props.type,
          bsSize = _props.bsSize,
          state = _props.state,
          valid = _props.valid,
          invalid = _props.invalid,
          tag = _props.tag,
          addon = _props.addon,
          staticInput = _props.static,
          plaintext = _props.plaintext,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);
      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');
      var formControlClass = 'form-control';

      if (plaintext || staticInput) {
        formControlClass = formControlClass + '-plaintext';
        Tag = tag || 'p';
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
        if (state === 'danger') {
          invalid = true;
        } else if (state === 'success') {
          valid = true;
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(classnames_default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
        delete attributes.children;
      }

      return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    }
  }]);
  return Input;
}(react_default.a.Component);

reactstrap_es_Input.propTypes = propTypes$53;
reactstrap_es_Input.defaultProps = defaultProps$49;
var propTypes$54 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  size: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$50 = {
  tag: 'div'
};

var reactstrap_es_InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);
  var classes = mapToCssModules(classnames_default()(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_InputGroup.propTypes = propTypes$54;
reactstrap_es_InputGroup.defaultProps = defaultProps$50;
var propTypes$56 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$52 = {
  tag: 'span'
};

var reactstrap_es_InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'input-group-text'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_InputGroupText.propTypes = propTypes$56;
reactstrap_es_InputGroupText.defaultProps = defaultProps$52;
var propTypes$55 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  addonType: prop_types_default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$51 = {
  tag: 'div'
};

var reactstrap_es_InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);
  var classes = mapToCssModules(classnames_default()(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
      className: classes
    }), react_default.a.createElement(reactstrap_es_InputGroupText, {
      children: children
    }));
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes,
    children: children
  }));
};

reactstrap_es_InputGroupAddon.propTypes = propTypes$55;
reactstrap_es_InputGroupAddon.defaultProps = defaultProps$51;
var propTypes$57 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  addonType: prop_types_default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types_default.a.node,
  groupClassName: prop_types_default.a.string,
  groupAttributes: prop_types_default.a.object,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};

var reactstrap_es_InputGroupButton = function InputGroupButton(props) {
  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');
  var children = props.children,
      groupClassName = props.groupClassName,
      groupAttributes = props.groupAttributes,
      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);

  if (typeof children === 'string') {
    var cssModule = propsWithoutGroup.cssModule,
        tag = propsWithoutGroup.tag,
        addonType = propsWithoutGroup.addonType,
        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);

    var allGroupAttributes = reactstrap_es_extends({}, groupAttributes, {
      cssModule: cssModule,
      tag: tag,
      addonType: addonType
    });

    return react_default.a.createElement(reactstrap_es_InputGroupAddon, reactstrap_es_extends({}, allGroupAttributes, {
      className: groupClassName
    }), react_default.a.createElement(reactstrap_es_Button, reactstrap_es_extends({}, attributes, {
      children: children
    })));
  }

  return react_default.a.createElement(reactstrap_es_InputGroupAddon, reactstrap_es_extends({}, props, {
    children: children
  }));
};

reactstrap_es_InputGroupButton.propTypes = propTypes$57;
var propTypes$58 = {
  addonType: prop_types_default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types_default.a.node
};

var reactstrap_es_InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return react_default.a.createElement(reactstrap_es_Dropdown, props);
};

reactstrap_es_InputGroupButtonDropdown.propTypes = propTypes$58;
var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp$1 = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);
var columnProps$1 = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number, prop_types_default.a.shape({
  size: stringOrNumberProp$1,
  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$59 = {
  children: prop_types_default.a.node,
  hidden: prop_types_default.a.bool,
  check: prop_types_default.a.bool,
  size: prop_types_default.a.string,
  for: prop_types_default.a.string,
  tag: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: prop_types_default.a.array
};
var defaultProps$53 = {
  tag: 'label',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var reactstrap_es_Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass = void 0;

    if (lodash_isobject_default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames_default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = mapToCssModules(classnames_default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

reactstrap_es_Label.propTypes = propTypes$59;
reactstrap_es_Label.defaultProps = defaultProps$53;
var propTypes$60 = {
  body: prop_types_default.a.bool,
  bottom: prop_types_default.a.bool,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  heading: prop_types_default.a.bool,
  left: prop_types_default.a.bool,
  list: prop_types_default.a.bool,
  middle: prop_types_default.a.bool,
  object: prop_types_default.a.bool,
  right: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  top: prop_types_default.a.bool
};

var reactstrap_es_Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
  var defaultTag = void 0;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classnames_default()(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Media.propTypes = propTypes$60;
var propTypes$61 = {
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  listClassName: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  size: prop_types_default.a.string,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  listTag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  'aria-label': prop_types_default.a.string
};
var defaultProps$54 = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var reactstrap_es_Pagination = function Pagination(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);
  var classes = mapToCssModules(classnames_default()(className), cssModule);
  var listClasses = mapToCssModules(classnames_default()(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
  return react_default.a.createElement(Tag, {
    className: classes,
    'aria-label': label
  }, react_default.a.createElement(ListTag, reactstrap_es_extends({}, attributes, {
    className: listClasses
  })));
};

reactstrap_es_Pagination.propTypes = propTypes$61;
reactstrap_es_Pagination.defaultProps = defaultProps$54;
var propTypes$62 = {
  active: prop_types_default.a.bool,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string])
};
var defaultProps$55 = {
  tag: 'li'
};

var reactstrap_es_PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_PaginationItem.propTypes = propTypes$62;
reactstrap_es_PaginationItem.defaultProps = defaultProps$55;
var propTypes$63 = {
  'aria-label': prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  next: prop_types_default.a.bool,
  previous: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string])
};
var defaultProps$56 = {
  tag: 'a'
};

var reactstrap_es_PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'page-link'), cssModule);
  var defaultAriaLabel = void 0;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret = void 0;

  if (previous) {
    defaultCaret = '\xAB';
  } else if (next) {
    defaultCaret = '\xBB';
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next) {
    children = [react_default.a.createElement('span', {
      'aria-hidden': 'true',
      key: 'caret'
    }, children || defaultCaret), react_default.a.createElement('span', {
      className: 'sr-only',
      key: 'sr'
    }, ariaLabel)];
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes,
    'aria-label': ariaLabel
  }), children);
};

reactstrap_es_PaginationLink.propTypes = propTypes$63;
reactstrap_es_PaginationLink.defaultProps = defaultProps$56;
var propTypes$64 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  activeTab: prop_types_default.a.any,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$57 = {
  tag: 'div'
};
var childContextTypes$2 = {
  activeTabId: prop_types_default.a.any
};

var reactstrap_es_TabContent = function (_Component) {
  inherits(TabContent, _Component);
  createClass(TabContent, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }

      return null;
    }
  }]);

  function TabContent(props) {
    classCallCheck(this, TabContent);

    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));

    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  createClass(TabContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        activeTabId: this.state.activeTab
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;
      var attributes = omit(this.props, Object.keys(propTypes$64));
      var classes = mapToCssModules(classnames_default()('tab-content', className), cssModule);
      return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
        className: classes
      }));
    }
  }]);
  return TabContent;
}(react["Component"]);

polyfill(reactstrap_es_TabContent);
reactstrap_es_TabContent.propTypes = propTypes$64;
reactstrap_es_TabContent.defaultProps = defaultProps$57;
reactstrap_es_TabContent.childContextTypes = childContextTypes$2;
var propTypes$65 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  tabId: prop_types_default.a.any
};
var defaultProps$58 = {
  tag: 'div'
};
var contextTypes$3 = {
  activeTabId: prop_types_default.a.any
};

function TabPane(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);
  var classes = mapToCssModules(classnames_default()('tab-pane', className, {
    active: tabId === context.activeTabId
  }), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
}

TabPane.propTypes = propTypes$65;
TabPane.defaultProps = defaultProps$58;
TabPane.contextTypes = contextTypes$3;
var propTypes$66 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  fluid: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var defaultProps$59 = {
  tag: 'div'
};

var reactstrap_es_Jumbotron = function Jumbotron(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);
  var classes = mapToCssModules(classnames_default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_Jumbotron.propTypes = propTypes$66;
reactstrap_es_Jumbotron.defaultProps = defaultProps$59;
var propTypes$67 = {
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  closeClassName: prop_types_default.a.string,
  closeAriaLabel: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  color: prop_types_default.a.string,
  fade: prop_types_default.a.bool,
  isOpen: prop_types_default.a.bool,
  toggle: prop_types_default.a.func,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  transition: prop_types_default.a.shape(Fade.propTypes),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var defaultProps$60 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: reactstrap_es_extends({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);
  var classes = mapToCssModules(classnames_default()(className, 'alert', 'alert-' + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classnames_default()('close', closeClassName), cssModule);

  var alertTransition = reactstrap_es_extends({}, Fade.defaultProps, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return react_default.a.createElement(Fade, reactstrap_es_extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    'in': isOpen,
    role: 'alert',
    innerRef: innerRef
  }), toggle ? react_default.a.createElement('button', {
    type: 'button',
    className: closeClasses,
    'aria-label': closeAriaLabel,
    onClick: toggle
  }, react_default.a.createElement('span', {
    'aria-hidden': 'true'
  }, '\xD7')) : null, children);
}

Alert.propTypes = propTypes$67;
Alert.defaultProps = defaultProps$60;

var _transitionStatusToCl;

var propTypes$68 = reactstrap_es_extends({}, reactstrap_es_Transition.propTypes, {
  isOpen: prop_types_default.a.bool,
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.node,
  navbar: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.object])
});

var defaultProps$61 = reactstrap_es_extends({}, reactstrap_es_Transition.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var reactstrap_es_Collapse = function (_Component) {
  inherits(Collapse, _Component);

  function Collapse(props) {
    classCallCheck(this, Collapse);

    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      height: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_this);
    });
    return _this;
  }

  createClass(Collapse, [{
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      this.setState({
        height: getHeight(node)
      });
      this.props.onEntering(node, isAppearing);
    }
  }, {
    key: 'onEntered',
    value: function onEntered(node, isAppearing) {
      this.setState({
        height: null
      });
      this.props.onEntered(node, isAppearing);
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({
        height: getHeight(node)
      });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

      this.setState({
        height: 0
      });
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      this.setState({
        height: null
      });
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Tag = _props.tag,
          isOpen = _props.isOpen,
          className = _props.className,
          navbar = _props.navbar,
          cssModule = _props.cssModule,
          children = _props.children,
          innerRef = _props.innerRef,
          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
      var height = this.state.height; // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
      // empty object "{}". This is the result of the `react-transition-group` babel
      // configuration settings. Therefore, to ensure that production builds work without
      // error, we can either explicitly define keys or use the Transition.defaultProps.
      // Using the Transition.defaultProps excludes any required props. Thus, the best
      // solution is to explicitly define required props in our utilities and reference these.
      // This also gives us more flexibility in the future to remove the prop-types
      // dependency in distribution builds (Similar to how `react-transition-group` does).
      // Note: Without omitting the `react-transition-group` props, the resulting child
      // Tag component would inherit the Transition properties as attributes for the HTML
      // element which results in errors/warnings for non-valid attributes.

      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return react_default.a.createElement(reactstrap_es_Transition, reactstrap_es_extends({}, transitionProps, {
        'in': isOpen,
        onEntering: this.onEntering,
        onEntered: this.onEntered,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var collapseClass = getTransitionClass(status);
        var classes = mapToCssModules(classnames_default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
        var style = height === null ? null : {
          height: height
        };
        return react_default.a.createElement(Tag, reactstrap_es_extends({}, childProps, {
          style: reactstrap_es_extends({}, childProps.style, style),
          className: classes,
          ref: _this2.props.innerRef
        }), children);
      });
    }
  }]);
  return Collapse;
}(react["Component"]);

reactstrap_es_Collapse.propTypes = propTypes$68;
reactstrap_es_Collapse.defaultProps = defaultProps$61;
var propTypes$69 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  active: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  action: prop_types_default.a.bool,
  className: prop_types_default.a.any,
  cssModule: prop_types_default.a.object
};
var defaultProps$62 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var reactstrap_es_ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);
  var classes = mapToCssModules(classnames_default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ListGroupItem.propTypes = propTypes$69;
reactstrap_es_ListGroupItem.defaultProps = defaultProps$62;
var propTypes$70 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.any,
  cssModule: prop_types_default.a.object
};
var defaultProps$63 = {
  tag: 'h5'
};

var reactstrap_es_ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'list-group-item-heading'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ListGroupItemHeading.propTypes = propTypes$70;
reactstrap_es_ListGroupItemHeading.defaultProps = defaultProps$63;
var propTypes$71 = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.any,
  cssModule: prop_types_default.a.object
};
var defaultProps$64 = {
  tag: 'p'
};

var reactstrap_es_ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames_default()(className, 'list-group-item-text'), cssModule);
  return react_default.a.createElement(Tag, reactstrap_es_extends({}, attributes, {
    className: classes
  }));
};

reactstrap_es_ListGroupItemText.propTypes = propTypes$71;
reactstrap_es_ListGroupItemText.defaultProps = defaultProps$64;

var reactstrap_es_UncontrolledAlert = function (_Component) {
  inherits(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    classCallCheck(this, UncontrolledAlert);

    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));

    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledAlert, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(Alert, reactstrap_es_extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    }
  }]);
  return UncontrolledAlert;
}(react["Component"]);

var reactstrap_es_UncontrolledButtonDropdown = function (_Component) {
  inherits(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    classCallCheck(this, UncontrolledButtonDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledButtonDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(reactstrap_es_ButtonDropdown, reactstrap_es_extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    }
  }]);
  return UncontrolledButtonDropdown;
}(react["Component"]);

var propTypes$72 = {
  toggler: prop_types_default.a.string.isRequired,
  toggleEvents: prop_types_default.a.arrayOf(prop_types_default.a.string)
};
var defaultProps$65 = {
  toggleEvents: defaultToggleEvents
};

var reactstrap_es_UncontrolledCollapse = function (_Component) {
  inherits(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    classCallCheck(this, UncontrolledCollapse);

    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));

    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  createClass(UncontrolledCollapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);

      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          toggleEvents = _props.toggleEvents,
          rest = objectWithoutProperties(_props, ['toggleEvents']);
      return react_default.a.createElement(reactstrap_es_Collapse, reactstrap_es_extends({
        isOpen: this.state.isOpen
      }, rest));
    }
  }]);
  return UncontrolledCollapse;
}(react["Component"]);

reactstrap_es_UncontrolledCollapse.propTypes = propTypes$72;
reactstrap_es_UncontrolledCollapse.defaultProps = defaultProps$65;

var reactstrap_es_UncontrolledDropdown = function (_Component) {
  inherits(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    classCallCheck(this, UncontrolledDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(reactstrap_es_Dropdown, reactstrap_es_extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    }
  }]);
  return UncontrolledDropdown;
}(react["Component"]);

var reactstrap_es_UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');
  return react_default.a.createElement(reactstrap_es_UncontrolledDropdown, reactstrap_es_extends({
    nav: true
  }, props));
};

var reactstrap_es_UncontrolledTooltip = function (_Component) {
  inherits(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    classCallCheck(this, UncontrolledTooltip);

    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledTooltip, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(reactstrap_es_Tooltip, reactstrap_es_extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    }
  }]);
  return UncontrolledTooltip;
}(react["Component"]);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Enforces a single instance of the Raven client, and the
 * main entry point for Raven. If you are a consumer of the
 * Raven library, you SHOULD load this file (vs raven.js).
 **/
var RavenConstructor = __webpack_require__(35); // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)


var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var _Raven = _window.Raven;
var Raven = new RavenConstructor();
/*
 * Allow multiple versions of Raven to be installed.
 * Strip Raven from the global context and returns the instance.
 *
 * @return {Raven}
 */

Raven.noConflict = function () {
  _window.Raven = _Raven;
  return Raven;
};

Raven.afterLoad();
module.exports = Raven;
/**
 * DISCLAIMER:
 *
 * Expose `Client` constructor for cases where user want to track multiple "sub-applications" in one larger app.
 * It's not meant to be used by a wide audience, so pleaaase make sure that you know what you're doing before using it.
 * Accidentally calling `install` multiple times, may result in an unexpected behavior that's very hard to debug.
 *
 * It's called `Client' to be in-line with Raven Node implementation.
 *
 * HOWTO:
 *
 * import Raven from 'raven-js';
 *
 * const someAppReporter = new Raven.Client();
 * const someOtherAppReporter = new Raven.Client();
 *
 * someAppReporter.config('__DSN__', {
 *   ...config goes here
 * });
 *
 * someOtherAppReporter.config('__OTHER_DSN__', {
 *   ...config goes here
 * });
 *
 * someAppReporter.captureMessage(...);
 * someAppReporter.captureException(...);
 * someAppReporter.captureBreadcrumb(...);
 *
 * someOtherAppReporter.captureMessage(...);
 * someOtherAppReporter.captureException(...);
 * someOtherAppReporter.captureBreadcrumb(...);
 *
 * It should "just work".
 */

module.exports.Client = RavenConstructor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(41);
} else {}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/history/node_modules/warning/browser.js
var browser = __webpack_require__(5);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(12);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};
var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};
var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};
var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};
// CONCATENATED MODULE: ./node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};
var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ./node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    browser_default()(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          browser_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ./node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};
var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};
var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ./node_modules/history/es/createBrowserHistory.js
var createBrowserHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createBrowserHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  invariant_browser_default()(canUseDOM, 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory_extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createHashHistory.js
var createHashHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var createHashHistory_HashChangeEvent = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  invariant_browser_default()(canUseDOM, 'Hash history needs a DOM');
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());
    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory_extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    browser_default()(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        browser_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    browser_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createMemoryHistory.js
var createMemoryHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createMemoryHistory_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */


var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory_extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ./node_modules/history/es/index.js
/* unused concated harmony import createBrowserHistory */
/* concated harmony reexport createHashHistory */__webpack_require__.d(__webpack_exports__, "a", function() { return es_createHashHistory; });
/* unused concated harmony import createMemoryHistory */
/* concated harmony reexport createLocation */__webpack_require__.d(__webpack_exports__, "b", function() { return LocationUtils_createLocation; });
/* unused concated harmony import locationsAreEqual */
/* unused concated harmony import parsePath */
/* unused concated harmony import createPath */









/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var stringify = __webpack_require__(25);

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function isObject(what) {
  return typeof what === 'object' && what !== null;
} // Yanked from https://git.io/vS8DV re-used under CC0
// with some tiny modifications


function isError(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true;

    case '[object Exception]':
      return true;

    case '[object DOMException]':
      return true;

    default:
      return value instanceof Error;
  }
}

function isErrorEvent(value) {
  return Object.prototype.toString.call(value) === '[object ErrorEvent]';
}

function isDOMError(value) {
  return Object.prototype.toString.call(value) === '[object DOMError]';
}

function isDOMException(value) {
  return Object.prototype.toString.call(value) === '[object DOMException]';
}

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function isPlainObject(what) {
  return Object.prototype.toString.call(what) === '[object Object]';
}

function isString(what) {
  return Object.prototype.toString.call(what) === '[object String]';
}

function isArray(what) {
  return Object.prototype.toString.call(what) === '[object Array]';
}

function isEmptyObject(what) {
  if (!isPlainObject(what)) return false;

  for (var _ in what) {
    if (what.hasOwnProperty(_)) {
      return false;
    }
  }

  return true;
}

function supportsErrorEvent() {
  try {
    new ErrorEvent(''); // eslint-disable-line no-new

    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMError() {
  try {
    new DOMError(''); // eslint-disable-line no-new

    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMException() {
  try {
    new DOMException(''); // eslint-disable-line no-new

    return true;
  } catch (e) {
    return false;
  }
}

function supportsFetch() {
  if (!('fetch' in _window)) return false;

  try {
    new Headers(); // eslint-disable-line no-new

    new Request(''); // eslint-disable-line no-new

    new Response(); // eslint-disable-line no-new

    return true;
  } catch (e) {
    return false;
  }
} // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
// https://caniuse.com/#feat=referrer-policy
// It doesn't. And it throw exception instead of ignoring this parameter...
// REF: https://github.com/getsentry/raven-js/issues/1233


function supportsReferrerPolicy() {
  if (!supportsFetch()) return false;

  try {
    // eslint-disable-next-line no-new
    new Request('pickleRick', {
      referrerPolicy: 'origin'
    });
    return true;
  } catch (e) {
    return false;
  }
}

function supportsPromiseRejectionEvent() {
  return typeof PromiseRejectionEvent === 'function';
}

function wrappedCallback(callback) {
  function dataCallback(data, original) {
    var normalizedData = callback(data) || data;

    if (original) {
      return original(normalizedData) || normalizedData;
    }

    return normalizedData;
  }

  return dataCallback;
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;

    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}

function objectMerge(obj1, obj2) {
  if (!obj2) {
    return obj1;
  }

  each(obj2, function (key, value) {
    obj1[key] = value;
  });
  return obj1;
}
/**
 * This function is only used for react-native.
 * react-native freezes object that have already been sent over the
 * js bridge. We need this function in order to check if the object is frozen.
 * So it's ok that objectFrozen returns false if Object.isFrozen is not
 * supported because it's not relevant for other "platforms". See related issue:
 * https://github.com/getsentry/react-native-sentry/issues/57
 */


function objectFrozen(obj) {
  if (!Object.isFrozen) {
    return false;
  }

  return Object.isFrozen(obj);
}

function truncate(str, max) {
  if (typeof max !== 'number') {
    throw new Error('2nd argument to `truncate` function should be a number');
  }

  if (typeof str !== 'string' || max === 0) {
    return str;
  }

  return str.length <= max ? str : str.substr(0, max) + "\u2026";
}
/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */


function hasKey(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function joinRegExp(patterns) {
  // Combine an array of regular expressions and strings into one large regexp
  // Be mad.
  var sources = [],
      i = 0,
      len = patterns.length,
      pattern;

  for (; i < len; i++) {
    pattern = patterns[i];

    if (isString(pattern)) {
      // If it's a string, we need to escape it
      // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
    } else if (pattern && pattern.source) {
      // If it's a regexp already, we want to extract the source
      sources.push(pattern.source);
    } // Intentionally skip other cases

  }

  return new RegExp(sources.join('|'), 'i');
}

function urlencode(o) {
  var pairs = [];
  each(o, function (key, value) {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  });
  return pairs.join('&');
} // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
// intentionally using regex and not <a/> href parsing trick because React Native and other
// environments where DOM might not be available


function parseUrl(url) {
  if (typeof url !== 'string') return {};
  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/); // coerce to undefined values to empty string so we don't get 'undefined'

  var query = match[6] || '';
  var fragment = match[8] || '';
  return {
    protocol: match[2],
    host: match[4],
    path: match[5],
    relative: match[5] + query + fragment // everything minus origin

  };
}

function uuid4() {
  var crypto = _window.crypto || _window.msCrypto;

  if (!isUndefined(crypto) && crypto.getRandomValues) {
    // Use window.crypto API if available
    // eslint-disable-next-line no-undef
    var arr = new Uint16Array(8);
    crypto.getRandomValues(arr); // set 4 in byte 7

    arr[3] = arr[3] & 0xfff | 0x4000; // set 2 most significant bits of byte 9 to '10'

    arr[4] = arr[4] & 0x3fff | 0x8000;

    var pad = function pad(num) {
      var v = num.toString(16);

      while (v.length < 4) {
        v = '0' + v;
      }

      return v;
    };

    return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
  } else {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
}
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @param elem
 * @returns {string}
 */


function htmlTreeAsString(elem) {
  /* eslint no-extra-parens:0*/
  var MAX_TRAVERSE_HEIGHT = 5,
      MAX_OUTPUT_LEN = 80,
      out = [],
      height = 0,
      len = 0,
      separator = ' > ',
      sepLength = separator.length,
      nextStr;

  while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
    nextStr = htmlElementAsString(elem); // bail out if
    // - nextStr is the 'html' element
    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
    //   (ignore this limit if we are on the first iteration)

    if (nextStr === 'html' || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) {
      break;
    }

    out.push(nextStr);
    len += nextStr.length;
    elem = elem.parentNode;
  }

  return out.reverse().join(separator);
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @param HTMLElement
 * @returns {string}
 */


function htmlElementAsString(elem) {
  var out = [],
      className,
      classes,
      key,
      attr,
      i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());

  if (elem.id) {
    out.push('#' + elem.id);
  }

  className = elem.className;

  if (className && isString(className)) {
    classes = className.split(/\s+/);

    for (i = 0; i < classes.length; i++) {
      out.push('.' + classes[i]);
    }
  }

  var attrWhitelist = ['type', 'name', 'title', 'alt'];

  for (i = 0; i < attrWhitelist.length; i++) {
    key = attrWhitelist[i];
    attr = elem.getAttribute(key);

    if (attr) {
      out.push('[' + key + '="' + attr + '"]');
    }
  }

  return out.join('');
}
/**
 * Returns true if either a OR b is truthy, but not both
 */


function isOnlyOneTruthy(a, b) {
  return !!(!!a ^ !!b);
}
/**
 * Returns true if both parameters are undefined
 */


function isBothUndefined(a, b) {
  return isUndefined(a) && isUndefined(b);
}
/**
 * Returns true if the two input exception interfaces have the same content
 */


function isSameException(ex1, ex2) {
  if (isOnlyOneTruthy(ex1, ex2)) return false;
  ex1 = ex1.values[0];
  ex2 = ex2.values[0];
  if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false; // in case both stacktraces are undefined, we can't decide so default to false

  if (isBothUndefined(ex1.stacktrace, ex2.stacktrace)) return false;
  return isSameStacktrace(ex1.stacktrace, ex2.stacktrace);
}
/**
 * Returns true if the two input stack trace interfaces have the same content
 */


function isSameStacktrace(stack1, stack2) {
  if (isOnlyOneTruthy(stack1, stack2)) return false;
  var frames1 = stack1.frames;
  var frames2 = stack2.frames; // Exit early if stacktrace is malformed

  if (frames1 === undefined || frames2 === undefined) return false; // Exit early if frame count differs

  if (frames1.length !== frames2.length) return false; // Iterate through every frame; bail out if anything differs

  var a, b;

  for (var i = 0; i < frames1.length; i++) {
    a = frames1[i];
    b = frames2[i];
    if (a.filename !== b.filename || a.lineno !== b.lineno || a.colno !== b.colno || a['function'] !== b['function']) return false;
  }

  return true;
}
/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */


function fill(obj, name, replacement, track) {
  if (obj == null) return;
  var orig = obj[name];
  obj[name] = replacement(orig);
  obj[name].__raven__ = true;
  obj[name].__orig__ = orig;

  if (track) {
    track.push([obj, name, orig]);
  }
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns {string}
 */


function safeJoin(input, delimiter) {
  if (!isArray(input)) return '';
  var output = [];

  for (var i = 0; i < input.length; i++) {
    try {
      output.push(String(input[i]));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
} // Default Node.js REPL depth


var MAX_SERIALIZE_EXCEPTION_DEPTH = 3; // 50kB, as 100kB is max payload size, so half sounds reasonable

var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;

function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}

function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

function serializeValue(value) {
  if (typeof value === 'string') {
    var maxLength = 40;
    return truncate(value, maxLength);
  } else if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined') {
    return value;
  }

  var type = Object.prototype.toString.call(value); // Node.js REPL notation

  if (type === '[object Object]') return '[Object]';
  if (type === '[object Array]') return '[Array]';
  if (type === '[object Function]') return value.name ? '[Function: ' + value.name + ']' : '[Function]';
  return value;
}

function serializeObject(value, depth) {
  if (depth === 0) return serializeValue(value);

  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function (acc, key) {
      acc[key] = serializeObject(value[key], depth - 1);
      return acc;
    }, {});
  } else if (Array.isArray(value)) {
    return value.map(function (val) {
      return serializeObject(val, depth - 1);
    });
  }

  return serializeValue(value);
}

function serializeException(ex, depth, maxSize) {
  if (!isPlainObject(ex)) return ex;
  depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
  maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;
  var serialized = serializeObject(ex, depth);

  if (jsonSize(stringify(serialized)) > maxSize) {
    return serializeException(ex, depth - 1);
  }

  return serialized;
}

function serializeKeysForMessage(keys, maxLength) {
  if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
  if (!Array.isArray(keys)) return '';
  keys = keys.filter(function (key) {
    return typeof key === 'string';
  });
  if (keys.length === 0) return '[object has no keys]';
  maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
  if (keys[0].length >= maxLength) return keys[0];

  for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
    var serialized = keys.slice(0, usedKeys).join(', ');
    if (serialized.length > maxLength) continue;
    if (usedKeys === keys.length) return serialized;
    return serialized + "\u2026";
  }

  return '';
}

function sanitize(input, sanitizeKeys) {
  if (!isArray(sanitizeKeys) || isArray(sanitizeKeys) && sanitizeKeys.length === 0) return input;
  var sanitizeRegExp = joinRegExp(sanitizeKeys);
  var sanitizeMask = '********';
  var safeInput;

  try {
    safeInput = JSON.parse(stringify(input));
  } catch (o_O) {
    return input;
  }

  function sanitizeWorker(workerInput) {
    if (isArray(workerInput)) {
      return workerInput.map(function (val) {
        return sanitizeWorker(val);
      });
    }

    if (isPlainObject(workerInput)) {
      return Object.keys(workerInput).reduce(function (acc, k) {
        if (sanitizeRegExp.test(k)) {
          acc[k] = sanitizeMask;
        } else {
          acc[k] = sanitizeWorker(workerInput[k]);
        }

        return acc;
      }, {});
    }

    return workerInput;
  }

  return sanitizeWorker(safeInput);
}

module.exports = {
  isObject: isObject,
  isError: isError,
  isErrorEvent: isErrorEvent,
  isDOMError: isDOMError,
  isDOMException: isDOMException,
  isUndefined: isUndefined,
  isFunction: isFunction,
  isPlainObject: isPlainObject,
  isString: isString,
  isArray: isArray,
  isEmptyObject: isEmptyObject,
  supportsErrorEvent: supportsErrorEvent,
  supportsDOMError: supportsDOMError,
  supportsDOMException: supportsDOMException,
  supportsFetch: supportsFetch,
  supportsReferrerPolicy: supportsReferrerPolicy,
  supportsPromiseRejectionEvent: supportsPromiseRejectionEvent,
  wrappedCallback: wrappedCallback,
  each: each,
  objectMerge: objectMerge,
  truncate: truncate,
  objectFrozen: objectFrozen,
  hasKey: hasKey,
  joinRegExp: joinRegExp,
  urlencode: urlencode,
  uuid4: uuid4,
  htmlTreeAsString: htmlTreeAsString,
  htmlElementAsString: htmlElementAsString,
  isSameException: isSameException,
  isSameStacktrace: isSameStacktrace,
  parseUrl: parseUrl,
  fill: fill,
  safeJoin: safeJoin,
  serializeException: serializeException,
  serializeKeysForMessage: serializeKeysForMessage,
  sanitize: sanitize
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  copyArrayElements: function copyArrayElements(src, srcPos, dest, destPos, length) {
    for (var i = 0; i < length; ++i) {
      dest[destPos + i] = src[srcPos + i];
    }
  },
  copyArray: function copyArray(src) {
    return src.slice(0);
  },
  fromJSON: function fromJSON(obj, state) {
    for (var i = 0; i < obj.JSON_PROPERTIES.length; i++) {
      obj[obj.JSON_PROPERTIES[i]] = state[obj.JSON_PROPERTIES[i]];
    }
  },
  toJSON: function toJSON(obj) {
    var state = {};

    for (var i = 0; i < obj.JSON_PROPERTIES.length; i++) {
      state[obj.JSON_PROPERTIES[i]] = obj[obj.JSON_PROPERTIES[i]];
    }

    return state;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  return isFixed(getParentNode(element));
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;

  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["a"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

/*
 json-stringify-safe
 Like JSON.stringify, but doesn't throw on circular references.

 Originally forked from https://github.com/isaacs/json-stringify-safe
 version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
 and IE8 compatibility. Tests for this are in test/vendor.

 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
*/
exports = module.exports = stringify;
exports.getSerialize = serializer;

function indexOf(haystack, needle) {
  for (var i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return i;
  }

  return -1;
}

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
} // https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106


function stringifyError(value) {
  var err = {
    // These properties are implemented as magical getters and don't show up in for in
    stack: value.stack,
    message: value.message,
    name: value.name
  };

  for (var i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      err[i] = value[i];
    }
  }

  return err;
}

function serializer(replacer, cycleReplacer) {
  var stack = [];
  var keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = function cycleReplacer(key, value) {
      if (stack[0] === value) {
        return '[Circular ~]';
      }

      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
    };
  }

  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = indexOf(stack, this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~indexOf(stack, value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null ? value instanceof Error ? stringifyError(value) : value : replacer.call(this, key, value);
  };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var Controller = function Controller() {
  this.state = new Array(8);

  for (var i = 0; i < this.state.length; i++) {
    this.state[i] = 0x40;
  }
};

Controller.BUTTON_A = 0;
Controller.BUTTON_B = 1;
Controller.BUTTON_SELECT = 2;
Controller.BUTTON_START = 3;
Controller.BUTTON_UP = 4;
Controller.BUTTON_DOWN = 5;
Controller.BUTTON_LEFT = 6;
Controller.BUTTON_RIGHT = 7;
Controller.prototype = {
  buttonDown: function buttonDown(key) {
    this.state[key] = 0x41;
  },
  buttonUp: function buttonUp(key) {
    this.state[key] = 0x40;
  }
};
module.exports = Controller;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var Tile = function Tile() {
  // Tile data:
  this.pix = new Array(64);
  this.fbIndex = null;
  this.tIndex = null;
  this.x = null;
  this.y = null;
  this.w = null;
  this.h = null;
  this.incX = null;
  this.incY = null;
  this.palIndex = null;
  this.tpri = null;
  this.c = null;
  this.initialized = false;
  this.opaque = new Array(8);
};

Tile.prototype = {
  setBuffer: function setBuffer(scanline) {
    for (this.y = 0; this.y < 8; this.y++) {
      this.setScanline(this.y, scanline[this.y], scanline[this.y + 8]);
    }
  },
  setScanline: function setScanline(sline, b1, b2) {
    this.initialized = true;
    this.tIndex = sline << 3;

    for (this.x = 0; this.x < 8; this.x++) {
      this.pix[this.tIndex + this.x] = (b1 >> 7 - this.x & 1) + ((b2 >> 7 - this.x & 1) << 1);

      if (this.pix[this.tIndex + this.x] === 0) {
        this.opaque[sline] = false;
      }
    }
  },
  render: function render(buffer, srcx1, srcy1, srcx2, srcy2, dx, dy, palAdd, palette, flipHorizontal, flipVertical, pri, priTable) {
    if (dx < -7 || dx >= 256 || dy < -7 || dy >= 240) {
      return;
    }

    this.w = srcx2 - srcx1;
    this.h = srcy2 - srcy1;

    if (dx < 0) {
      srcx1 -= dx;
    }

    if (dx + srcx2 >= 256) {
      srcx2 = 256 - dx;
    }

    if (dy < 0) {
      srcy1 -= dy;
    }

    if (dy + srcy2 >= 240) {
      srcy2 = 240 - dy;
    }

    if (!flipHorizontal && !flipVertical) {
      this.fbIndex = (dy << 8) + dx;
      this.tIndex = 0;

      for (this.y = 0; this.y < 8; this.y++) {
        for (this.x = 0; this.x < 8; this.x++) {
          if (this.x >= srcx1 && this.x < srcx2 && this.y >= srcy1 && this.y < srcy2) {
            this.palIndex = this.pix[this.tIndex];
            this.tpri = priTable[this.fbIndex];

            if (this.palIndex !== 0 && pri <= (this.tpri & 0xff)) {
              //console.log("Rendering upright tile to buffer");
              buffer[this.fbIndex] = palette[this.palIndex + palAdd];
              this.tpri = this.tpri & 0xf00 | pri;
              priTable[this.fbIndex] = this.tpri;
            }
          }

          this.fbIndex++;
          this.tIndex++;
        }

        this.fbIndex -= 8;
        this.fbIndex += 256;
      }
    } else if (flipHorizontal && !flipVertical) {
      this.fbIndex = (dy << 8) + dx;
      this.tIndex = 7;

      for (this.y = 0; this.y < 8; this.y++) {
        for (this.x = 0; this.x < 8; this.x++) {
          if (this.x >= srcx1 && this.x < srcx2 && this.y >= srcy1 && this.y < srcy2) {
            this.palIndex = this.pix[this.tIndex];
            this.tpri = priTable[this.fbIndex];

            if (this.palIndex !== 0 && pri <= (this.tpri & 0xff)) {
              buffer[this.fbIndex] = palette[this.palIndex + palAdd];
              this.tpri = this.tpri & 0xf00 | pri;
              priTable[this.fbIndex] = this.tpri;
            }
          }

          this.fbIndex++;
          this.tIndex--;
        }

        this.fbIndex -= 8;
        this.fbIndex += 256;
        this.tIndex += 16;
      }
    } else if (flipVertical && !flipHorizontal) {
      this.fbIndex = (dy << 8) + dx;
      this.tIndex = 56;

      for (this.y = 0; this.y < 8; this.y++) {
        for (this.x = 0; this.x < 8; this.x++) {
          if (this.x >= srcx1 && this.x < srcx2 && this.y >= srcy1 && this.y < srcy2) {
            this.palIndex = this.pix[this.tIndex];
            this.tpri = priTable[this.fbIndex];

            if (this.palIndex !== 0 && pri <= (this.tpri & 0xff)) {
              buffer[this.fbIndex] = palette[this.palIndex + palAdd];
              this.tpri = this.tpri & 0xf00 | pri;
              priTable[this.fbIndex] = this.tpri;
            }
          }

          this.fbIndex++;
          this.tIndex++;
        }

        this.fbIndex -= 8;
        this.fbIndex += 256;
        this.tIndex -= 16;
      }
    } else {
      this.fbIndex = (dy << 8) + dx;
      this.tIndex = 63;

      for (this.y = 0; this.y < 8; this.y++) {
        for (this.x = 0; this.x < 8; this.x++) {
          if (this.x >= srcx1 && this.x < srcx2 && this.y >= srcy1 && this.y < srcy2) {
            this.palIndex = this.pix[this.tIndex];
            this.tpri = priTable[this.fbIndex];

            if (this.palIndex !== 0 && pri <= (this.tpri & 0xff)) {
              buffer[this.fbIndex] = palette[this.palIndex + palAdd];
              this.tpri = this.tpri & 0xf00 | pri;
              priTable[this.fbIndex] = this.tpri;
            }
          }

          this.fbIndex++;
          this.tIndex--;
        }

        this.fbIndex -= 8;
        this.fbIndex += 256;
      }
    }
  },
  isTransparent: function isTransparent(x, y) {
    return this.pix[(y << 3) + x] === 0;
  },
  toJSON: function toJSON() {
    return {
      opaque: this.opaque,
      pix: this.pix
    };
  },
  fromJSON: function fromJSON(s) {
    this.opaque = s.opaque;
    this.pix = s.pix;
  }
};
module.exports = Tile;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Expose `RingBuffer`.
 */
module.exports = RingBuffer;
/**
 * Initializes a new empty `RingBuffer` with the given `capacity`, when no
 * value is provided uses the default capacity (50).
 *
 * If provided, `evictedCb` gets run with any evicted elements.
 *
 * @param {capacity}
 * @param [evictedCb]
 * @return {RingBuffer}
 * @api public
 */

function RingBuffer(capacity, evictedCb) {
  this._elements = new Array(capacity || 50);
  this._first = 0;
  this._last = 0;
  this._size = 0;
  this._evictedCb = evictedCb;
}
/**
 * Returns the capacity of the ring buffer.
 *
 * @return {Number}
 * @api public
 */


RingBuffer.prototype.capacity = function () {
  return this._elements.length;
};
/**
 * Returns whether the ring buffer is empty or not.
 *
 * @return {Boolean}
 * @api public
 */


RingBuffer.prototype.isEmpty = function () {
  return this.size() === 0;
};
/**
 * Returns whether the ring buffer is full or not.
 *
 * @return {Boolean}
 * @api public
 */


RingBuffer.prototype.isFull = function () {
  return this.size() === this.capacity();
};
/**
 * Peeks at the top element of the queue.
 *
 * @return {Object}
 * @throws {Error} when the ring buffer is empty.
 * @api public
 */


RingBuffer.prototype.peek = function () {
  if (this.isEmpty()) throw new Error('RingBuffer is empty');
  return this._elements[this._first];
};
/**
 * Peeks at multiple elements in the queue.
 *
 * @return {Array}
 * @throws {Error} when there are not enough elements in the buffer.
 * @api public
 */


RingBuffer.prototype.peekN = function (count) {
  if (count > this._size) throw new Error('Not enough elements in RingBuffer');
  var end = Math.min(this._first + count, this.capacity());

  var firstHalf = this._elements.slice(this._first, end);

  if (end < this.capacity()) {
    return firstHalf;
  }

  var secondHalf = this._elements.slice(0, count - firstHalf.length);

  return firstHalf.concat(secondHalf);
};
/**
 * Dequeues the top element of the queue.
 *
 * @return {Object}
 * @throws {Error} when the ring buffer is empty.
 * @api public
 */


RingBuffer.prototype.deq = function () {
  var element = this.peek();
  this._size--;
  this._first = (this._first + 1) % this.capacity();
  return element;
};
/**
 * Dequeues multiple elements of the queue.
 *
 * @return {Array}
 * @throws {Error} when there are not enough elements in the buffer.
 * @api public
 */


RingBuffer.prototype.deqN = function (count) {
  var elements = this.peekN(count);
  this._size -= count;
  this._first = (this._first + count) % this.capacity();
  return elements;
};
/**
 * Enqueues the `element` at the end of the ring buffer and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */


RingBuffer.prototype.enq = function (element) {
  this._end = (this._first + this.size()) % this.capacity();
  var full = this.isFull();

  if (full && this._evictedCb) {
    this._evictedCb(this._elements[this._end]);
  }

  this._elements[this._end] = element;

  if (full) {
    this._first = (this._first + 1) % this.capacity();
  } else {
    this._size++;
  }

  return this.size();
};
/**
 * Returns the size of the queue.
 *
 * @return {Number}
 * @api public
 */


RingBuffer.prototype.size = function () {
  return this._size;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(60);
/**
 * Expose `pathToRegexp`.
 */


module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */


function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys);
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = ''; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter; // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".

  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path,
    /** @type {!Array} */
    keys);
  }

  if (isarray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path,
    /** @type {!Array} */
    keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path,
  /** @type {!Array} */
  keys, options);
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global XDomainRequest:false */
var TraceKit = __webpack_require__(36);

var stringify = __webpack_require__(25);

var md5 = __webpack_require__(37);

var RavenConfigError = __webpack_require__(38);

var utils = __webpack_require__(19);

var isErrorEvent = utils.isErrorEvent;
var isDOMError = utils.isDOMError;
var isDOMException = utils.isDOMException;
var isError = utils.isError;
var isObject = utils.isObject;
var isPlainObject = utils.isPlainObject;
var isUndefined = utils.isUndefined;
var isFunction = utils.isFunction;
var isString = utils.isString;
var isArray = utils.isArray;
var isEmptyObject = utils.isEmptyObject;
var each = utils.each;
var objectMerge = utils.objectMerge;
var truncate = utils.truncate;
var objectFrozen = utils.objectFrozen;
var hasKey = utils.hasKey;
var joinRegExp = utils.joinRegExp;
var urlencode = utils.urlencode;
var uuid4 = utils.uuid4;
var htmlTreeAsString = utils.htmlTreeAsString;
var isSameException = utils.isSameException;
var isSameStacktrace = utils.isSameStacktrace;
var parseUrl = utils.parseUrl;
var fill = utils.fill;
var supportsFetch = utils.supportsFetch;
var supportsReferrerPolicy = utils.supportsReferrerPolicy;
var serializeKeysForMessage = utils.serializeKeysForMessage;
var serializeException = utils.serializeException;
var sanitize = utils.sanitize;

var wrapConsoleMethod = __webpack_require__(39).wrapMethod;

var dsnKeys = 'source protocol user pass host port path'.split(' '),
    dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

function now() {
  return +new Date();
} // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)


var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var _document = _window.document;
var _navigator = _window.navigator;

function keepOriginalCallback(original, callback) {
  return isFunction(callback) ? function (data) {
    return callback(data, original);
  } : callback;
} // First, check for JSON support
// If there is no JSON, we no-op the core features of Raven
// since JSON is required to encode the payload


function Raven() {
  this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify); // Raven can run in contexts where there's no document (react-native)

  this._hasDocument = !isUndefined(_document);
  this._hasNavigator = !isUndefined(_navigator);
  this._lastCapturedException = null;
  this._lastData = null;
  this._lastEventId = null;
  this._globalServer = null;
  this._globalKey = null;
  this._globalProject = null;
  this._globalContext = {};
  this._globalOptions = {
    // SENTRY_RELEASE can be injected by https://github.com/getsentry/sentry-webpack-plugin
    release: _window.SENTRY_RELEASE && _window.SENTRY_RELEASE.id,
    logger: 'javascript',
    ignoreErrors: [],
    ignoreUrls: [],
    whitelistUrls: [],
    includePaths: [],
    headers: null,
    collectWindowErrors: true,
    captureUnhandledRejections: true,
    maxMessageLength: 0,
    // By default, truncates URL values to 250 chars
    maxUrlLength: 250,
    stackTraceLimit: 50,
    autoBreadcrumbs: true,
    instrument: true,
    sampleRate: 1,
    sanitizeKeys: []
  };
  this._fetchDefaults = {
    method: 'POST',
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    referrerPolicy: supportsReferrerPolicy() ? 'origin' : ''
  };
  this._ignoreOnError = 0;
  this._isRavenInstalled = false;
  this._originalErrorStackTraceLimit = Error.stackTraceLimit; // capture references to window.console *and* all its methods first
  // before the console plugin has a chance to monkey patch

  this._originalConsole = _window.console || {};
  this._originalConsoleMethods = {};
  this._plugins = [];
  this._startTime = now();
  this._wrappedBuiltIns = [];
  this._breadcrumbs = [];
  this._lastCapturedEvent = null;
  this._keypressTimeout;
  this._location = _window.location;
  this._lastHref = this._location && this._location.href;

  this._resetBackoff(); // eslint-disable-next-line guard-for-in


  for (var method in this._originalConsole) {
    this._originalConsoleMethods[method] = this._originalConsole[method];
  }
}
/*
 * The core Raven singleton
 *
 * @this {Raven}
 */


Raven.prototype = {
  // Hardcode version string so that raven source can be loaded directly via
  // webpack (using a build step causes webpack #1617). Grunt verifies that
  // this value matches package.json during build.
  //   See: https://github.com/getsentry/raven-js/issues/465
  VERSION: '3.27.0',
  debug: false,
  TraceKit: TraceKit,
  // alias to TraceKit

  /*
     * Configure Raven with a DSN and extra options
     *
     * @param {string} dsn The public Sentry DSN
     * @param {object} options Set of global options [optional]
     * @return {Raven}
     */
  config: function config(dsn, options) {
    var self = this;

    if (self._globalServer) {
      this._logDebug('error', 'Error: Raven has already been configured');

      return self;
    }

    if (!dsn) return self;
    var globalOptions = self._globalOptions; // merge in options

    if (options) {
      each(options, function (key, value) {
        // tags and extra are special and need to be put into context
        if (key === 'tags' || key === 'extra' || key === 'user') {
          self._globalContext[key] = value;
        } else {
          globalOptions[key] = value;
        }
      });
    }

    self.setDSN(dsn); // "Script error." is hard coded into browsers for errors that it can't read.
    // this is the result of a script being pulled in from an external domain and CORS.

    globalOptions.ignoreErrors.push(/^Script error\.?$/);
    globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/); // join regexp rules into one big rule

    globalOptions.ignoreErrors = joinRegExp(globalOptions.ignoreErrors);
    globalOptions.ignoreUrls = globalOptions.ignoreUrls.length ? joinRegExp(globalOptions.ignoreUrls) : false;
    globalOptions.whitelistUrls = globalOptions.whitelistUrls.length ? joinRegExp(globalOptions.whitelistUrls) : false;
    globalOptions.includePaths = joinRegExp(globalOptions.includePaths);
    globalOptions.maxBreadcrumbs = Math.max(0, Math.min(globalOptions.maxBreadcrumbs || 100, 100)); // default and hard limit is 100

    var autoBreadcrumbDefaults = {
      xhr: true,
      console: true,
      dom: true,
      location: true,
      sentry: true
    };
    var autoBreadcrumbs = globalOptions.autoBreadcrumbs;

    if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
      autoBreadcrumbs = objectMerge(autoBreadcrumbDefaults, autoBreadcrumbs);
    } else if (autoBreadcrumbs !== false) {
      autoBreadcrumbs = autoBreadcrumbDefaults;
    }

    globalOptions.autoBreadcrumbs = autoBreadcrumbs;
    var instrumentDefaults = {
      tryCatch: true
    };
    var instrument = globalOptions.instrument;

    if ({}.toString.call(instrument) === '[object Object]') {
      instrument = objectMerge(instrumentDefaults, instrument);
    } else if (instrument !== false) {
      instrument = instrumentDefaults;
    }

    globalOptions.instrument = instrument;
    TraceKit.collectWindowErrors = !!globalOptions.collectWindowErrors; // return for chaining

    return self;
  },

  /*
     * Installs a global window.onerror error handler
     * to capture and report uncaught exceptions.
     * At this point, install() is required to be called due
     * to the way TraceKit is set up.
     *
     * @return {Raven}
     */
  install: function install() {
    var self = this;

    if (self.isSetup() && !self._isRavenInstalled) {
      TraceKit.report.subscribe(function () {
        self._handleOnErrorStackInfo.apply(self, arguments);
      });

      if (self._globalOptions.captureUnhandledRejections) {
        self._attachPromiseRejectionHandler();
      }

      self._patchFunctionToString();

      if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
        self._instrumentTryCatch();
      }

      if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs(); // Install all of the plugins

      self._drainPlugins();

      self._isRavenInstalled = true;
    }

    Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
    return this;
  },

  /*
     * Set the DSN (can be called multiple time unlike config)
     *
     * @param {string} dsn The public Sentry DSN
     */
  setDSN: function setDSN(dsn) {
    var self = this,
        uri = self._parseDSN(dsn),
        lastSlash = uri.path.lastIndexOf('/'),
        path = uri.path.substr(1, lastSlash);

    self._dsn = dsn;
    self._globalKey = uri.user;
    self._globalSecret = uri.pass && uri.pass.substr(1);
    self._globalProject = uri.path.substr(lastSlash + 1);
    self._globalServer = self._getGlobalServer(uri);
    self._globalEndpoint = self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/'; // Reset backoff state since we may be pointing at a
    // new project/server

    this._resetBackoff();
  },

  /*
     * Wrap code within a context so Raven can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */
  context: function context(options, func, args) {
    if (isFunction(options)) {
      args = func || [];
      func = options;
      options = {};
    }

    return this.wrap(options, func).apply(this, args);
  },

  /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} _before A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
  wrap: function wrap(options, func, _before) {
    var self = this; // 1 argument has been passed, and it's not a function
    // so just return it

    if (isUndefined(func) && !isFunction(options)) {
      return options;
    } // options is optional


    if (isFunction(options)) {
      func = options;
      options = undefined;
    } // At this point, we've passed along 2 arguments, and the second one
    // is not a function either, so we'll just return the second argument.


    if (!isFunction(func)) {
      return func;
    } // We don't wanna wrap it twice!


    try {
      if (func.__raven__) {
        return func;
      } // If this has already been wrapped in the past, return that


      if (func.__raven_wrapper__) {
        return func.__raven_wrapper__;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return func;
    }

    function wrapped() {
      var args = [],
          i = arguments.length,
          deep = !options || options && options.deep !== false;

      if (_before && isFunction(_before)) {
        _before.apply(this, arguments);
      } // Recursively wrap all of a function's arguments that are
      // functions themselves.


      while (i--) {
        args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
      }

      try {
        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means Raven caught an error invoking your application code. This is
        //       expected behavior and NOT indicative of a bug with Raven.js.
        return func.apply(this, args);
      } catch (e) {
        self._ignoreNextOnError();

        self.captureException(e, options);
        throw e;
      }
    } // copy over properties of the old function


    for (var property in func) {
      if (hasKey(func, property)) {
        wrapped[property] = func[property];
      }
    }

    wrapped.prototype = func.prototype;
    func.__raven_wrapper__ = wrapped; // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice

    wrapped.__raven__ = true;
    wrapped.__orig__ = func;
    return wrapped;
  },

  /**
   * Uninstalls the global error handler.
   *
   * @return {Raven}
   */
  uninstall: function uninstall() {
    TraceKit.report.uninstall();

    this._detachPromiseRejectionHandler();

    this._unpatchFunctionToString();

    this._restoreBuiltIns();

    this._restoreConsole();

    Error.stackTraceLimit = this._originalErrorStackTraceLimit;
    this._isRavenInstalled = false;
    return this;
  },

  /**
   * Callback used for `unhandledrejection` event
   *
   * @param {PromiseRejectionEvent} event An object containing
   *   promise: the Promise that was rejected
   *   reason: the value with which the Promise was rejected
   * @return void
   */
  _promiseRejectionHandler: function _promiseRejectionHandler(event) {
    this._logDebug('debug', 'Raven caught unhandled promise rejection:', event);

    this.captureException(event.reason, {
      mechanism: {
        type: 'onunhandledrejection',
        handled: false
      }
    });
  },

  /**
   * Installs the global promise rejection handler.
   *
   * @return {raven}
   */
  _attachPromiseRejectionHandler: function _attachPromiseRejectionHandler() {
    this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this);
    _window.addEventListener && _window.addEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Uninstalls the global promise rejection handler.
   *
   * @return {raven}
   */
  _detachPromiseRejectionHandler: function _detachPromiseRejectionHandler() {
    _window.removeEventListener && _window.removeEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Manually capture an exception and send it over to Sentry
   *
   * @param {error} ex An exception to be logged
   * @param {object} options A specific set of options for this error [optional]
   * @return {Raven}
   */
  captureException: function captureException(ex, options) {
    options = objectMerge({
      trimHeadFrames: 0
    }, options ? options : {});

    if (isErrorEvent(ex) && ex.error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      ex = ex.error;
    } else if (isDOMError(ex) || isDOMException(ex)) {
      // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
      // then we just extract the name and message, as they don't provide anything else
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
      var name = ex.name || (isDOMError(ex) ? 'DOMError' : 'DOMException');
      var message = ex.message ? name + ': ' + ex.message : name;
      return this.captureMessage(message, objectMerge(options, {
        // neither DOMError or DOMException provide stack trace and we most likely wont get it this way as well
        // but it's barely any overhead so we may at least try
        stacktrace: true,
        trimHeadFrames: options.trimHeadFrames + 1
      }));
    } else if (isError(ex)) {
      // we have a real Error object
      ex = ex;
    } else if (isPlainObject(ex)) {
      // If it is plain Object, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      options = this._getCaptureExceptionOptionsFromPlainObject(options, ex);
      ex = new Error(options.message);
    } else {
      // If none of previous checks were valid, then it means that
      // it's not a DOMError/DOMException
      // it's not a plain Object
      // it's not a valid ErrorEvent (one with an error property)
      // it's not an Error
      // So bail out and capture it as a simple message:
      return this.captureMessage(ex, objectMerge(options, {
        stacktrace: true,
        // if we fall back to captureMessage, default to attempting a new trace
        trimHeadFrames: options.trimHeadFrames + 1
      }));
    } // Store the raw exception object for potential debugging and introspection


    this._lastCapturedException = ex; // TraceKit.report will re-raise any exception passed to it,
    // which means you have to wrap it in try/catch. Instead, we
    // can wrap it here and only re-raise if TraceKit.report
    // raises an exception different from the one we asked to
    // report on.

    try {
      var stack = TraceKit.computeStackTrace(ex);

      this._handleStackInfo(stack, options);
    } catch (ex1) {
      if (ex !== ex1) {
        throw ex1;
      }
    }

    return this;
  },
  _getCaptureExceptionOptionsFromPlainObject: function _getCaptureExceptionOptionsFromPlainObject(currentOptions, ex) {
    var exKeys = Object.keys(ex).sort();
    var options = objectMerge(currentOptions, {
      message: 'Non-Error exception captured with keys: ' + serializeKeysForMessage(exKeys),
      fingerprint: [md5(exKeys)],
      extra: currentOptions.extra || {}
    });
    options.extra.__serialized__ = serializeException(ex);
    return options;
  },

  /*
     * Manually send a message to Sentry
     *
     * @param {string} msg A plain message to be captured in Sentry
     * @param {object} options A specific set of options for this message [optional]
     * @return {Raven}
     */
  captureMessage: function captureMessage(msg, options) {
    // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
    // early call; we'll error on the side of logging anything called before configuration since it's
    // probably something you should see:
    if (!!this._globalOptions.ignoreErrors.test && this._globalOptions.ignoreErrors.test(msg)) {
      return;
    }

    options = options || {};
    msg = msg + ''; // Make sure it's actually a string

    var data = objectMerge({
      message: msg
    }, options);
    var ex; // Generate a "synthetic" stack trace from this point.
    // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
    //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
    //       or if it catches a thrown object without a "stack" property.

    try {
      throw new Error(msg);
    } catch (ex1) {
      ex = ex1;
    } // null exception name so `Error` isn't prefixed to msg


    ex.name = null;
    var stack = TraceKit.computeStackTrace(ex); // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]

    var initialCall = isArray(stack.stack) && stack.stack[1]; // if stack[1] is `Raven.captureException`, it means that someone passed a string to it and we redirected that call
    // to be handled by `captureMessage`, thus `initialCall` is the 3rd one, not 2nd
    // initialCall => captureException(string) => captureMessage(string)

    if (initialCall && initialCall.func === 'Raven.captureException') {
      initialCall = stack.stack[2];
    }

    var fileurl = initialCall && initialCall.url || '';

    if (!!this._globalOptions.ignoreUrls.test && this._globalOptions.ignoreUrls.test(fileurl)) {
      return;
    }

    if (!!this._globalOptions.whitelistUrls.test && !this._globalOptions.whitelistUrls.test(fileurl)) {
      return;
    } // Always attempt to get stacktrace if message is empty.
    // It's the only way to provide any helpful information to the user.


    if (this._globalOptions.stacktrace || options.stacktrace || data.message === '') {
      // fingerprint on msg, not stack trace (legacy behavior, could be revisited)
      data.fingerprint = data.fingerprint == null ? msg : data.fingerprint;
      options = objectMerge({
        trimHeadFrames: 0
      }, options); // Since we know this is a synthetic trace, the top frame (this function call)
      // MUST be from Raven.js, so mark it for trimming
      // We add to the trim counter so that callers can choose to trim extra frames, such
      // as utility functions.

      options.trimHeadFrames += 1;

      var frames = this._prepareFrames(stack, options);

      data.stacktrace = {
        // Sentry expects frames oldest to newest
        frames: frames.reverse()
      };
    } // Make sure that fingerprint is always wrapped in an array


    if (data.fingerprint) {
      data.fingerprint = isArray(data.fingerprint) ? data.fingerprint : [data.fingerprint];
    } // Fire away!


    this._send(data);

    return this;
  },
  captureBreadcrumb: function captureBreadcrumb(obj) {
    var crumb = objectMerge({
      timestamp: now() / 1000
    }, obj);

    if (isFunction(this._globalOptions.breadcrumbCallback)) {
      var result = this._globalOptions.breadcrumbCallback(crumb);

      if (isObject(result) && !isEmptyObject(result)) {
        crumb = result;
      } else if (result === false) {
        return this;
      }
    }

    this._breadcrumbs.push(crumb);

    if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
      this._breadcrumbs.shift();
    }

    return this;
  },
  addPlugin: function addPlugin(plugin
  /*arg1, arg2, ... argN*/
  ) {
    var pluginArgs = [].slice.call(arguments, 1);

    this._plugins.push([plugin, pluginArgs]);

    if (this._isRavenInstalled) {
      this._drainPlugins();
    }

    return this;
  },

  /*
     * Set/clear a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Raven}
     */
  setUserContext: function setUserContext(user) {
    // Intentionally do not merge here since that's an unexpected behavior.
    this._globalContext.user = user;
    return this;
  },

  /*
     * Merge extra attributes to be sent along with the payload.
     *
     * @param {object} extra An object representing extra data [optional]
     * @return {Raven}
     */
  setExtraContext: function setExtraContext(extra) {
    this._mergeContext('extra', extra);

    return this;
  },

  /*
     * Merge tags to be sent along with the payload.
     *
     * @param {object} tags An object representing tags [optional]
     * @return {Raven}
     */
  setTagsContext: function setTagsContext(tags) {
    this._mergeContext('tags', tags);

    return this;
  },

  /*
     * Clear all of the context.
     *
     * @return {Raven}
     */
  clearContext: function clearContext() {
    this._globalContext = {};
    return this;
  },

  /*
     * Get a copy of the current context. This cannot be mutated.
     *
     * @return {object} copy of context
     */
  getContext: function getContext() {
    // lol javascript
    return JSON.parse(stringify(this._globalContext));
  },

  /*
     * Set environment of application
     *
     * @param {string} environment Typically something like 'production'.
     * @return {Raven}
     */
  setEnvironment: function setEnvironment(environment) {
    this._globalOptions.environment = environment;
    return this;
  },

  /*
     * Set release version of application
     *
     * @param {string} release Typically something like a git SHA to identify version
     * @return {Raven}
     */
  setRelease: function setRelease(release) {
    this._globalOptions.release = release;
    return this;
  },

  /*
     * Set the dataCallback option
     *
     * @param {function} callback The callback to run which allows the
     *                            data blob to be mutated before sending
     * @return {Raven}
     */
  setDataCallback: function setDataCallback(callback) {
    var original = this._globalOptions.dataCallback;
    this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the breadcrumbCallback option
     *
     * @param {function} callback The callback to run which allows filtering
     *                            or mutating breadcrumbs
     * @return {Raven}
     */
  setBreadcrumbCallback: function setBreadcrumbCallback(callback) {
    var original = this._globalOptions.breadcrumbCallback;
    this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the shouldSendCallback option
     *
     * @param {function} callback The callback to run which allows
     *                            introspecting the blob before sending
     * @return {Raven}
     */
  setShouldSendCallback: function setShouldSendCallback(callback) {
    var original = this._globalOptions.shouldSendCallback;
    this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /**
   * Override the default HTTP transport mechanism that transmits data
   * to the Sentry server.
   *
   * @param {function} transport Function invoked instead of the default
   *                             `makeRequest` handler.
   *
   * @return {Raven}
   */
  setTransport: function setTransport(transport) {
    this._globalOptions.transport = transport;
    return this;
  },

  /*
     * Get the latest raw exception that was captured by Raven.
     *
     * @return {error}
     */
  lastException: function lastException() {
    return this._lastCapturedException;
  },

  /*
     * Get the last event id
     *
     * @return {string}
     */
  lastEventId: function lastEventId() {
    return this._lastEventId;
  },

  /*
     * Determine if Raven is setup and ready to go.
     *
     * @return {boolean}
     */
  isSetup: function isSetup() {
    if (!this._hasJSON) return false; // needs JSON support

    if (!this._globalServer) {
      if (!this.ravenNotConfiguredError) {
        this.ravenNotConfiguredError = true;

        this._logDebug('error', 'Error: Raven has not been configured.');
      }

      return false;
    }

    return true;
  },
  afterLoad: function afterLoad() {
    // TODO: remove window dependence?
    // Attempt to initialize Raven on load
    var RavenConfig = _window.RavenConfig;

    if (RavenConfig) {
      this.config(RavenConfig.dsn, RavenConfig.config).install();
    }
  },
  showReportDialog: function showReportDialog(options) {
    if (!_document // doesn't work without a document (React native)
    ) return;
    options = objectMerge({
      eventId: this.lastEventId(),
      dsn: this._dsn,
      user: this._globalContext.user || {}
    }, options);

    if (!options.eventId) {
      throw new RavenConfigError('Missing eventId');
    }

    if (!options.dsn) {
      throw new RavenConfigError('Missing DSN');
    }

    var encode = encodeURIComponent;
    var encodedOptions = [];

    for (var key in options) {
      if (key === 'user') {
        var user = options.user;
        if (user.name) encodedOptions.push('name=' + encode(user.name));
        if (user.email) encodedOptions.push('email=' + encode(user.email));
      } else {
        encodedOptions.push(encode(key) + '=' + encode(options[key]));
      }
    }

    var globalServer = this._getGlobalServer(this._parseDSN(options.dsn));

    var script = _document.createElement('script');

    script.async = true;
    script.src = globalServer + '/api/embed/error-page/?' + encodedOptions.join('&');

    (_document.head || _document.body).appendChild(script);
  },

  /**** Private functions ****/
  _ignoreNextOnError: function _ignoreNextOnError() {
    var self = this;
    this._ignoreOnError += 1;
    setTimeout(function () {
      // onerror should trigger before setTimeout
      self._ignoreOnError -= 1;
    });
  },
  _triggerEvent: function _triggerEvent(eventType, options) {
    // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
    var evt, key;
    if (!this._hasDocument) return;
    options = options || {};
    eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

    if (_document.createEvent) {
      evt = _document.createEvent('HTMLEvents');
      evt.initEvent(eventType, true, true);
    } else {
      evt = _document.createEventObject();
      evt.eventType = eventType;
    }

    for (key in options) {
      if (hasKey(options, key)) {
        evt[key] = options[key];
      }
    }

    if (_document.createEvent) {
      // IE9 if standards
      _document.dispatchEvent(evt);
    } else {
      // IE8 regardless of Quirks or Standards
      // IE9 if quirks
      try {
        _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
      } catch (e) {// Do nothing
      }
    }
  },

  /**
   * Wraps addEventListener to capture UI breadcrumbs
   * @param evtName the event name (e.g. "click")
   * @returns {Function}
   * @private
   */
  _breadcrumbEventHandler: function _breadcrumbEventHandler(evtName) {
    var self = this;
    return function (evt) {
      // reset keypress timeout; e.g. triggering a 'click' after
      // a 'keypress' will reset the keypress debounce so that a new
      // set of keypresses can be recorded
      self._keypressTimeout = null; // It's possible this handler might trigger multiple times for the same
      // event (e.g. event propagation through node ancestors). Ignore if we've
      // already captured the event.

      if (self._lastCapturedEvent === evt) return;
      self._lastCapturedEvent = evt; // try/catch both:
      // - accessing evt.target (see getsentry/raven-js#838, #768)
      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
      //   can throw an exception in some circumstances.

      var target;

      try {
        target = htmlTreeAsString(evt.target);
      } catch (e) {
        target = '<unknown>';
      }

      self.captureBreadcrumb({
        category: 'ui.' + evtName,
        // e.g. ui.click, ui.input
        message: target
      });
    };
  },

  /**
   * Wraps addEventListener to capture keypress UI events
   * @returns {Function}
   * @private
   */
  _keypressEventHandler: function _keypressEventHandler() {
    var self = this,
        debounceDuration = 1000; // milliseconds
    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)

    return function (evt) {
      var target;

      try {
        target = evt.target;
      } catch (e) {
        // just accessing event properties can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/raven-js/issues/838
        return;
      }

      var tagName = target && target.tagName; // only consider keypress events on actual input elements
      // this will disregard keypresses targeting body (e.g. tabbing
      // through elements, hotkeys, etc)

      if (!tagName || tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable) return; // record first keypress in a series, but ignore subsequent
      // keypresses until debounce clears

      var timeout = self._keypressTimeout;

      if (!timeout) {
        self._breadcrumbEventHandler('input')(evt);
      }

      clearTimeout(timeout);
      self._keypressTimeout = setTimeout(function () {
        self._keypressTimeout = null;
      }, debounceDuration);
    };
  },

  /**
   * Captures a breadcrumb of type "navigation", normalizing input URLs
   * @param to the originating URL
   * @param from the target URL
   * @private
   */
  _captureUrlChange: function _captureUrlChange(from, to) {
    var parsedLoc = parseUrl(this._location.href);
    var parsedTo = parseUrl(to);
    var parsedFrom = parseUrl(from); // because onpopstate only tells you the "new" (to) value of location.href, and
    // not the previous (from) value, we need to track the value of the current URL
    // state ourselves

    this._lastHref = to; // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)

    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
    this.captureBreadcrumb({
      category: 'navigation',
      data: {
        to: to,
        from: from
      }
    });
  },
  _patchFunctionToString: function _patchFunctionToString() {
    var self = this;
    self._originalFunctionToString = Function.prototype.toString; // eslint-disable-next-line no-extend-native

    Function.prototype.toString = function () {
      if (typeof this === 'function' && this.__raven__) {
        return self._originalFunctionToString.apply(this.__orig__, arguments);
      }

      return self._originalFunctionToString.apply(this, arguments);
    };
  },
  _unpatchFunctionToString: function _unpatchFunctionToString() {
    if (this._originalFunctionToString) {
      // eslint-disable-next-line no-extend-native
      Function.prototype.toString = this._originalFunctionToString;
    }
  },

  /**
   * Wrap timer functions and event targets to catch errors and provide
   * better metadata.
   */
  _instrumentTryCatch: function _instrumentTryCatch() {
    var self = this;
    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapTimeFn(orig) {
      return function (fn, t) {
        // preserve arity
        // Make a copy of the arguments to prevent deoptimization
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        var originalCallback = args[0];

        if (isFunction(originalCallback)) {
          args[0] = self.wrap({
            mechanism: {
              type: 'instrument',
              data: {
                function: orig.name || '<anonymous>'
              }
            }
          }, originalCallback);
        } // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
        // also supports only two arguments and doesn't care what this is, so we
        // can just call the original function directly.


        if (orig.apply) {
          return orig.apply(this, args);
        } else {
          return orig(args[0], args[1]);
        }
      };
    }

    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    function wrapEventTarget(global) {
      var proto = _window[global] && _window[global].prototype;

      if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
        fill(proto, 'addEventListener', function (orig) {
          return function (evtName, fn, capture, secure) {
            // preserve arity
            try {
              if (fn && fn.handleEvent) {
                fn.handleEvent = self.wrap({
                  mechanism: {
                    type: 'instrument',
                    data: {
                      target: global,
                      function: 'handleEvent',
                      handler: fn && fn.name || '<anonymous>'
                    }
                  }
                }, fn.handleEvent);
              }
            } catch (err) {} // can sometimes get 'Permission denied to access property "handle Event'
            // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
            // so that we don't have more than one wrapper function


            var before, clickHandler, keypressHandler;

            if (autoBreadcrumbs && autoBreadcrumbs.dom && (global === 'EventTarget' || global === 'Node')) {
              // NOTE: generating multiple handlers per addEventListener invocation, should
              //       revisit and verify we can just use one (almost certainly)
              clickHandler = self._breadcrumbEventHandler('click');
              keypressHandler = self._keypressEventHandler();

              before = function before(evt) {
                // need to intercept every DOM event in `before` argument, in case that
                // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                // see #724
                if (!evt) return;
                var eventType;

                try {
                  eventType = evt.type;
                } catch (e) {
                  // just accessing event properties can throw an exception in some rare circumstances
                  // see: https://github.com/getsentry/raven-js/issues/838
                  return;
                }

                if (eventType === 'click') return clickHandler(evt);else if (eventType === 'keypress') return keypressHandler(evt);
              };
            }

            return orig.call(this, evtName, self.wrap({
              mechanism: {
                type: 'instrument',
                data: {
                  target: global,
                  function: 'addEventListener',
                  handler: fn && fn.name || '<anonymous>'
                }
              }
            }, fn, before), capture, secure);
          };
        }, wrappedBuiltIns);
        fill(proto, 'removeEventListener', function (orig) {
          return function (evt, fn, capture, secure) {
            try {
              fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
            } catch (e) {// ignore, accessing __raven_wrapper__ will throw in some Selenium environments
            }

            return orig.call(this, evt, fn, capture, secure);
          };
        }, wrappedBuiltIns);
      }
    }

    fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
    fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);

    if (_window.requestAnimationFrame) {
      fill(_window, 'requestAnimationFrame', function (orig) {
        return function (cb) {
          return orig(self.wrap({
            mechanism: {
              type: 'instrument',
              data: {
                function: 'requestAnimationFrame',
                handler: orig && orig.name || '<anonymous>'
              }
            }
          }, cb));
        };
      }, wrappedBuiltIns);
    } // event targets borrowed from bugsnag-js:
    // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666


    var eventTargets = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];

    for (var i = 0; i < eventTargets.length; i++) {
      wrapEventTarget(eventTargets[i]);
    }
  },

  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - XMLHttpRequests
   *  - DOM interactions (click/typing)
   *  - window.location changes
   *  - console
   *
   * Can be disabled or individually configured via the `autoBreadcrumbs` config option
   */
  _instrumentBreadcrumbs: function _instrumentBreadcrumbs() {
    var self = this;
    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;
    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapProp(prop, xhr) {
      if (prop in xhr && isFunction(xhr[prop])) {
        fill(xhr, prop, function (orig) {
          return self.wrap({
            mechanism: {
              type: 'instrument',
              data: {
                function: prop,
                handler: orig && orig.name || '<anonymous>'
              }
            }
          }, orig);
        }); // intentionally don't track filled methods on XHR instances
      }
    }

    if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window) {
      var xhrproto = _window.XMLHttpRequest && _window.XMLHttpRequest.prototype;
      fill(xhrproto, 'open', function (origOpen) {
        return function (method, url) {
          // preserve arity
          // if Sentry key appears in URL, don't capture
          if (isString(url) && url.indexOf(self._globalKey) === -1) {
            this.__raven_xhr = {
              method: method,
              url: url,
              status_code: null
            };
          }

          return origOpen.apply(this, arguments);
        };
      }, wrappedBuiltIns);
      fill(xhrproto, 'send', function (origSend) {
        return function () {
          // preserve arity
          var xhr = this;

          function onreadystatechangeHandler() {
            if (xhr.__raven_xhr && xhr.readyState === 4) {
              try {
                // touching statusCode in some platforms throws
                // an exception
                xhr.__raven_xhr.status_code = xhr.status;
              } catch (e) {
                /* do nothing */
              }

              self.captureBreadcrumb({
                type: 'http',
                category: 'xhr',
                data: xhr.__raven_xhr
              });
            }
          }

          var props = ['onload', 'onerror', 'onprogress'];

          for (var j = 0; j < props.length; j++) {
            wrapProp(props[j], xhr);
          }

          if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
            fill(xhr, 'onreadystatechange', function (orig) {
              return self.wrap({
                mechanism: {
                  type: 'instrument',
                  data: {
                    function: 'onreadystatechange',
                    handler: orig && orig.name || '<anonymous>'
                  }
                }
              }, orig, onreadystatechangeHandler);
            }
            /* intentionally don't track this instrumentation */
            );
          } else {
            // if onreadystatechange wasn't actually set by the page on this xhr, we
            // are free to set our own and capture the breadcrumb
            xhr.onreadystatechange = onreadystatechangeHandler;
          }

          return origSend.apply(this, arguments);
        };
      }, wrappedBuiltIns);
    }

    if (autoBreadcrumbs.xhr && supportsFetch()) {
      fill(_window, 'fetch', function (origFetch) {
        return function () {
          // preserve arity
          // Make a copy of the arguments to prevent deoptimization
          // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          var args = new Array(arguments.length);

          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }

          var fetchInput = args[0];
          var method = 'GET';
          var url;

          if (typeof fetchInput === 'string') {
            url = fetchInput;
          } else if ('Request' in _window && fetchInput instanceof _window.Request) {
            url = fetchInput.url;

            if (fetchInput.method) {
              method = fetchInput.method;
            }
          } else {
            url = '' + fetchInput;
          } // if Sentry key appears in URL, don't capture, as it's our own request


          if (url.indexOf(self._globalKey) !== -1) {
            return origFetch.apply(this, args);
          }

          if (args[1] && args[1].method) {
            method = args[1].method;
          }

          var fetchData = {
            method: method,
            url: url,
            status_code: null
          };
          return origFetch.apply(this, args).then(function (response) {
            fetchData.status_code = response.status;
            self.captureBreadcrumb({
              type: 'http',
              category: 'fetch',
              data: fetchData
            });
            return response;
          })['catch'](function (err) {
            // if there is an error performing the request
            self.captureBreadcrumb({
              type: 'http',
              category: 'fetch',
              data: fetchData,
              level: 'error'
            });
            throw err;
          });
        };
      }, wrappedBuiltIns);
    } // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.


    if (autoBreadcrumbs.dom && this._hasDocument) {
      if (_document.addEventListener) {
        _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);

        _document.addEventListener('keypress', self._keypressEventHandler(), false);
      } else if (_document.attachEvent) {
        // IE8 Compatibility
        _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));

        _document.attachEvent('onkeypress', self._keypressEventHandler());
      }
    } // record navigation (URL) changes
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files


    var chrome = _window.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasPushAndReplaceState = !isChromePackagedApp && _window.history && _window.history.pushState && _window.history.replaceState;

    if (autoBreadcrumbs.location && hasPushAndReplaceState) {
      // TODO: remove onpopstate handler on uninstall()
      var oldOnPopState = _window.onpopstate;

      _window.onpopstate = function () {
        var currentHref = self._location.href;

        self._captureUrlChange(self._lastHref, currentHref);

        if (oldOnPopState) {
          return oldOnPopState.apply(this, arguments);
        }
      };

      var historyReplacementFunction = function historyReplacementFunction(origHistFunction) {
        // note history.pushState.length is 0; intentionally not declaring
        // params to preserve 0 arity
        return function ()
        /* state, title, url */
        {
          var url = arguments.length > 2 ? arguments[2] : undefined; // url argument is optional

          if (url) {
            // coerce to string (this is what pushState does)
            self._captureUrlChange(self._lastHref, url + '');
          }

          return origHistFunction.apply(this, arguments);
        };
      };

      fill(_window.history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
      fill(_window.history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
    }

    if (autoBreadcrumbs.console && 'console' in _window && console.log) {
      // console
      var consoleMethodCallback = function consoleMethodCallback(msg, data) {
        self.captureBreadcrumb({
          message: msg,
          level: data.level,
          category: 'console'
        });
      };

      each(['debug', 'info', 'warn', 'error', 'log'], function (_, level) {
        wrapConsoleMethod(console, level, consoleMethodCallback);
      });
    }
  },
  _restoreBuiltIns: function _restoreBuiltIns() {
    // restore any wrapped builtins
    var builtin;

    while (this._wrappedBuiltIns.length) {
      builtin = this._wrappedBuiltIns.shift();
      var obj = builtin[0],
          name = builtin[1],
          orig = builtin[2];
      obj[name] = orig;
    }
  },
  _restoreConsole: function _restoreConsole() {
    // eslint-disable-next-line guard-for-in
    for (var method in this._originalConsoleMethods) {
      this._originalConsole[method] = this._originalConsoleMethods[method];
    }
  },
  _drainPlugins: function _drainPlugins() {
    var self = this; // FIX ME TODO

    each(this._plugins, function (_, plugin) {
      var installer = plugin[0];
      var args = plugin[1];
      installer.apply(self, [self].concat(args));
    });
  },
  _parseDSN: function _parseDSN(str) {
    var m = dsnPattern.exec(str),
        dsn = {},
        i = 7;

    try {
      while (i--) {
        dsn[dsnKeys[i]] = m[i] || '';
      }
    } catch (e) {
      throw new RavenConfigError('Invalid DSN: ' + str);
    }

    if (dsn.pass && !this._globalOptions.allowSecretKey) {
      throw new RavenConfigError('Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key');
    }

    return dsn;
  },
  _getGlobalServer: function _getGlobalServer(uri) {
    // assemble the endpoint from the uri pieces
    var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

    if (uri.protocol) {
      globalServer = uri.protocol + ':' + globalServer;
    }

    return globalServer;
  },
  _handleOnErrorStackInfo: function _handleOnErrorStackInfo(stackInfo, options) {
    options = options || {};
    options.mechanism = options.mechanism || {
      type: 'onerror',
      handled: false
    }; // if we are intentionally ignoring errors via onerror, bail out

    if (!this._ignoreOnError) {
      this._handleStackInfo(stackInfo, options);
    }
  },
  _handleStackInfo: function _handleStackInfo(stackInfo, options) {
    var frames = this._prepareFrames(stackInfo, options);

    this._triggerEvent('handle', {
      stackInfo: stackInfo,
      options: options
    });

    this._processException(stackInfo.name, stackInfo.message, stackInfo.url, stackInfo.lineno, frames, options);
  },
  _prepareFrames: function _prepareFrames(stackInfo, options) {
    var self = this;
    var frames = [];

    if (stackInfo.stack && stackInfo.stack.length) {
      each(stackInfo.stack, function (i, stack) {
        var frame = self._normalizeFrame(stack, stackInfo.url);

        if (frame) {
          frames.push(frame);
        }
      }); // e.g. frames captured via captureMessage throw

      if (options && options.trimHeadFrames) {
        for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
          frames[j].in_app = false;
        }
      }
    }

    frames = frames.slice(0, this._globalOptions.stackTraceLimit);
    return frames;
  },
  _normalizeFrame: function _normalizeFrame(frame, stackInfoUrl) {
    // normalize the frames data
    var normalized = {
      filename: frame.url,
      lineno: frame.line,
      colno: frame.column,
      function: frame.func || '?'
    }; // Case when we don't have any information about the error
    // E.g. throwing a string or raw object, instead of an `Error` in Firefox
    // Generating synthetic error doesn't add any value here
    //
    // We should probably somehow let a user know that they should fix their code

    if (!frame.url) {
      normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
    }

    normalized.in_app = !( // determine if an exception came from outside of our app
    // first we check the global includePaths list.
    !!this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(normalized.filename) || // Now we check for fun, if the function name is Raven or TraceKit
    /(Raven|TraceKit)\./.test(normalized['function']) || // finally, we do a last ditch effort and check for raven.min.js
    /raven\.(min\.)?js$/.test(normalized.filename));
    return normalized;
  },
  _processException: function _processException(type, message, fileurl, lineno, frames, options) {
    var prefixedMessage = (type ? type + ': ' : '') + (message || '');

    if (!!this._globalOptions.ignoreErrors.test && (this._globalOptions.ignoreErrors.test(message) || this._globalOptions.ignoreErrors.test(prefixedMessage))) {
      return;
    }

    var stacktrace;

    if (frames && frames.length) {
      fileurl = frames[0].filename || fileurl; // Sentry expects frames oldest to newest
      // and JS sends them as newest to oldest

      frames.reverse();
      stacktrace = {
        frames: frames
      };
    } else if (fileurl) {
      stacktrace = {
        frames: [{
          filename: fileurl,
          lineno: lineno,
          in_app: true
        }]
      };
    }

    if (!!this._globalOptions.ignoreUrls.test && this._globalOptions.ignoreUrls.test(fileurl)) {
      return;
    }

    if (!!this._globalOptions.whitelistUrls.test && !this._globalOptions.whitelistUrls.test(fileurl)) {
      return;
    }

    var data = objectMerge({
      // sentry.interfaces.Exception
      exception: {
        values: [{
          type: type,
          value: message,
          stacktrace: stacktrace
        }]
      },
      transaction: fileurl
    }, options);
    var ex = data.exception.values[0];

    if (ex.type == null && ex.value === '') {
      ex.value = 'Unrecoverable error caught';
    } // Move mechanism from options to exception interface
    // We do this, as requiring user to pass `{exception:{mechanism:{ ... }}}` would be
    // too much


    if (!data.exception.mechanism && data.mechanism) {
      data.exception.mechanism = data.mechanism;
      delete data.mechanism;
    }

    data.exception.mechanism = objectMerge({
      type: 'generic',
      handled: true
    }, data.exception.mechanism || {}); // Fire away!

    this._send(data);
  },
  _trimPacket: function _trimPacket(data) {
    // For now, we only want to truncate the two different messages
    // but this could/should be expanded to just trim everything
    var max = this._globalOptions.maxMessageLength;

    if (data.message) {
      data.message = truncate(data.message, max);
    }

    if (data.exception) {
      var exception = data.exception.values[0];
      exception.value = truncate(exception.value, max);
    }

    var request = data.request;

    if (request) {
      if (request.url) {
        request.url = truncate(request.url, this._globalOptions.maxUrlLength);
      }

      if (request.Referer) {
        request.Referer = truncate(request.Referer, this._globalOptions.maxUrlLength);
      }
    }

    if (data.breadcrumbs && data.breadcrumbs.values) this._trimBreadcrumbs(data.breadcrumbs);
    return data;
  },

  /**
   * Truncate breadcrumb values (right now just URLs)
   */
  _trimBreadcrumbs: function _trimBreadcrumbs(breadcrumbs) {
    // known breadcrumb properties with urls
    // TODO: also consider arbitrary prop values that start with (https?)?://
    var urlProps = ['to', 'from', 'url'],
        urlProp,
        crumb,
        data;

    for (var i = 0; i < breadcrumbs.values.length; ++i) {
      crumb = breadcrumbs.values[i];
      if (!crumb.hasOwnProperty('data') || !isObject(crumb.data) || objectFrozen(crumb.data)) continue;
      data = objectMerge({}, crumb.data);

      for (var j = 0; j < urlProps.length; ++j) {
        urlProp = urlProps[j];

        if (data.hasOwnProperty(urlProp) && data[urlProp]) {
          data[urlProp] = truncate(data[urlProp], this._globalOptions.maxUrlLength);
        }
      }

      breadcrumbs.values[i].data = data;
    }
  },
  _getHttpData: function _getHttpData() {
    if (!this._hasNavigator && !this._hasDocument) return;
    var httpData = {};

    if (this._hasNavigator && _navigator.userAgent) {
      httpData.headers = {
        'User-Agent': _navigator.userAgent
      };
    } // Check in `window` instead of `document`, as we may be in ServiceWorker environment


    if (_window.location && _window.location.href) {
      httpData.url = _window.location.href;
    }

    if (this._hasDocument && _document.referrer) {
      if (!httpData.headers) httpData.headers = {};
      httpData.headers.Referer = _document.referrer;
    }

    return httpData;
  },
  _resetBackoff: function _resetBackoff() {
    this._backoffDuration = 0;
    this._backoffStart = null;
  },
  _shouldBackoff: function _shouldBackoff() {
    return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
  },

  /**
   * Returns true if the in-process data payload matches the signature
   * of the previously-sent data
   *
   * NOTE: This has to be done at this level because TraceKit can generate
   *       data from window.onerror WITHOUT an exception object (IE8, IE9,
   *       other old browsers). This can take the form of an "exception"
   *       data object with a single frame (derived from the onerror args).
   */
  _isRepeatData: function _isRepeatData(current) {
    var last = this._lastData;
    if (!last || current.message !== last.message || // defined for captureMessage
    current.transaction !== last.transaction // defined for captureException/onerror
    ) return false; // Stacktrace interface (i.e. from captureMessage)

    if (current.stacktrace || last.stacktrace) {
      return isSameStacktrace(current.stacktrace, last.stacktrace);
    } else if (current.exception || last.exception) {
      // Exception interface (i.e. from captureException/onerror)
      return isSameException(current.exception, last.exception);
    }

    return true;
  },
  _setBackoffState: function _setBackoffState(request) {
    // If we are already in a backoff state, don't change anything
    if (this._shouldBackoff()) {
      return;
    }

    var status = request.status; // 400 - project_id doesn't exist or some other fatal
    // 401 - invalid/revoked dsn
    // 429 - too many requests

    if (!(status === 400 || status === 401 || status === 429)) return;
    var retry;

    try {
      // If Retry-After is not in Access-Control-Expose-Headers, most
      // browsers will throw an exception trying to access it
      if (supportsFetch()) {
        retry = request.headers.get('Retry-After');
      } else {
        retry = request.getResponseHeader('Retry-After');
      } // Retry-After is returned in seconds


      retry = parseInt(retry, 10) * 1000;
    } catch (e) {
      /* eslint no-empty:0 */
    }

    this._backoffDuration = retry ? // If Sentry server returned a Retry-After value, use it
    retry : // Otherwise, double the last backoff duration (starts at 1 sec)
    this._backoffDuration * 2 || 1000;
    this._backoffStart = now();
  },
  _send: function _send(data) {
    var globalOptions = this._globalOptions;

    var baseData = {
      project: this._globalProject,
      logger: globalOptions.logger,
      platform: 'javascript'
    },
        httpData = this._getHttpData();

    if (httpData) {
      baseData.request = httpData;
    } // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload


    if (data.trimHeadFrames) delete data.trimHeadFrames;
    data = objectMerge(baseData, data); // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge

    data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
    data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra); // Send along our own collected metadata with extra

    data.extra['session:duration'] = now() - this._startTime;

    if (this._breadcrumbs && this._breadcrumbs.length > 0) {
      // intentionally make shallow copy so that additions
      // to breadcrumbs aren't accidentally sent in this request
      data.breadcrumbs = {
        values: [].slice.call(this._breadcrumbs, 0)
      };
    }

    if (this._globalContext.user) {
      // sentry.interfaces.User
      data.user = this._globalContext.user;
    } // Include the environment if it's defined in globalOptions


    if (globalOptions.environment) data.environment = globalOptions.environment; // Include the release if it's defined in globalOptions

    if (globalOptions.release) data.release = globalOptions.release; // Include server_name if it's defined in globalOptions

    if (globalOptions.serverName) data.server_name = globalOptions.serverName;
    data = this._sanitizeData(data); // Cleanup empty properties before sending them to the server

    Object.keys(data).forEach(function (key) {
      if (data[key] == null || data[key] === '' || isEmptyObject(data[key])) {
        delete data[key];
      }
    });

    if (isFunction(globalOptions.dataCallback)) {
      data = globalOptions.dataCallback(data) || data;
    } // Why??????????


    if (!data || isEmptyObject(data)) {
      return;
    } // Check if the request should be filtered or not


    if (isFunction(globalOptions.shouldSendCallback) && !globalOptions.shouldSendCallback(data)) {
      return;
    } // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
    // so drop requests until "cool-off" period has elapsed.


    if (this._shouldBackoff()) {
      this._logDebug('warn', 'Raven dropped error due to backoff: ', data);

      return;
    }

    if (typeof globalOptions.sampleRate === 'number') {
      if (Math.random() < globalOptions.sampleRate) {
        this._sendProcessedPayload(data);
      }
    } else {
      this._sendProcessedPayload(data);
    }
  },
  _sanitizeData: function _sanitizeData(data) {
    return sanitize(data, this._globalOptions.sanitizeKeys);
  },
  _getUuid: function _getUuid() {
    return uuid4();
  },
  _sendProcessedPayload: function _sendProcessedPayload(data, callback) {
    var self = this;
    var globalOptions = this._globalOptions;
    if (!this.isSetup()) return; // Try and clean up the packet before sending by truncating long values

    data = this._trimPacket(data); // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
    // but this would require copying an un-truncated copy of the data packet, which can be
    // arbitrarily deep (extra_data) -- could be worthwhile? will revisit

    if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
      this._logDebug('warn', 'Raven dropped repeat event: ', data);

      return;
    } // Send along an event_id if not explicitly passed.
    // This event_id can be used to reference the error within Sentry itself.
    // Set lastEventId after we know the error should actually be sent


    this._lastEventId = data.event_id || (data.event_id = this._getUuid()); // Store outbound payload after trim

    this._lastData = data;

    this._logDebug('debug', 'Raven about to send:', data);

    var auth = {
      sentry_version: '7',
      sentry_client: 'raven-js/' + this.VERSION,
      sentry_key: this._globalKey
    };

    if (this._globalSecret) {
      auth.sentry_secret = this._globalSecret;
    }

    var exception = data.exception && data.exception.values[0]; // only capture 'sentry' breadcrumb is autoBreadcrumbs is truthy

    if (this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry) {
      this.captureBreadcrumb({
        category: 'sentry',
        message: exception ? (exception.type ? exception.type + ': ' : '') + exception.value : data.message,
        event_id: data.event_id,
        level: data.level || 'error' // presume error unless specified

      });
    }

    var url = this._globalEndpoint;

    (globalOptions.transport || this._makeRequest).call(this, {
      url: url,
      auth: auth,
      data: data,
      options: globalOptions,
      onSuccess: function success() {
        self._resetBackoff();

        self._triggerEvent('success', {
          data: data,
          src: url
        });

        callback && callback();
      },
      onError: function failure(error) {
        self._logDebug('error', 'Raven transport failed to send: ', error);

        if (error.request) {
          self._setBackoffState(error.request);
        }

        self._triggerEvent('failure', {
          data: data,
          src: url
        });

        error = error || new Error('Raven send failed (no additional details provided)');
        callback && callback(error);
      }
    });
  },
  _makeRequest: function _makeRequest(opts) {
    // Auth is intentionally sent as part of query string (NOT as custom HTTP header) to avoid preflight CORS requests
    var url = opts.url + '?' + urlencode(opts.auth);
    var evaluatedHeaders = null;
    var evaluatedFetchParameters = {};

    if (opts.options.headers) {
      evaluatedHeaders = this._evaluateHash(opts.options.headers);
    }

    if (opts.options.fetchParameters) {
      evaluatedFetchParameters = this._evaluateHash(opts.options.fetchParameters);
    }

    if (supportsFetch()) {
      evaluatedFetchParameters.body = stringify(opts.data);
      var defaultFetchOptions = objectMerge({}, this._fetchDefaults);
      var fetchOptions = objectMerge(defaultFetchOptions, evaluatedFetchParameters);

      if (evaluatedHeaders) {
        fetchOptions.headers = evaluatedHeaders;
      }

      return _window.fetch(url, fetchOptions).then(function (response) {
        if (response.ok) {
          opts.onSuccess && opts.onSuccess();
        } else {
          var error = new Error('Sentry error code: ' + response.status); // It's called request only to keep compatibility with XHR interface
          // and not add more redundant checks in setBackoffState method

          error.request = response;
          opts.onError && opts.onError(error);
        }
      })['catch'](function () {
        opts.onError && opts.onError(new Error('Sentry error code: network unavailable'));
      });
    }

    var request = _window.XMLHttpRequest && new _window.XMLHttpRequest();
    if (!request) return; // if browser doesn't support CORS (e.g. IE7), we are out of luck

    var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';
    if (!hasCORS) return;

    if ('withCredentials' in request) {
      request.onreadystatechange = function () {
        if (request.readyState !== 4) {
          return;
        } else if (request.status === 200) {
          opts.onSuccess && opts.onSuccess();
        } else if (opts.onError) {
          var err = new Error('Sentry error code: ' + request.status);
          err.request = request;
          opts.onError(err);
        }
      };
    } else {
      request = new XDomainRequest(); // xdomainrequest cannot go http -> https (or vice versa),
      // so always use protocol relative

      url = url.replace(/^https?:/, ''); // onreadystatechange not supported by XDomainRequest

      if (opts.onSuccess) {
        request.onload = opts.onSuccess;
      }

      if (opts.onError) {
        request.onerror = function () {
          var err = new Error('Sentry error code: XDomainRequest');
          err.request = request;
          opts.onError(err);
        };
      }
    }

    request.open('POST', url);

    if (evaluatedHeaders) {
      each(evaluatedHeaders, function (key, value) {
        request.setRequestHeader(key, value);
      });
    }

    request.send(stringify(opts.data));
  },
  _evaluateHash: function _evaluateHash(hash) {
    var evaluated = {};

    for (var key in hash) {
      if (hash.hasOwnProperty(key)) {
        var value = hash[key];
        evaluated[key] = typeof value === 'function' ? value() : value;
      }
    }

    return evaluated;
  },
  _logDebug: function _logDebug(level) {
    // We allow `Raven.debug` and `Raven.config(DSN, { debug: true })` to not make backward incompatible API change
    if (this._originalConsoleMethods[level] && (this.debug || this._globalOptions.debug)) {
      // In IE<10 console methods do not have their own 'apply' method
      Function.prototype.apply.call(this._originalConsoleMethods[level], this._originalConsole, [].slice.call(arguments, 1));
    }
  },
  _mergeContext: function _mergeContext(key, context) {
    if (isUndefined(context)) {
      delete this._globalContext[key];
    } else {
      this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
    }
  }
}; // Deprecations

Raven.prototype.setUser = Raven.prototype.setUserContext;
Raven.prototype.setReleaseContext = Raven.prototype.setRelease;
module.exports = Raven;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(19);
/*
 TraceKit - Cross brower stack traces

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/


var TraceKit = {
  collectWindowErrors: true,
  debug: false
}; // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; // global reference to slice


var _slice = [].slice;
var UNKNOWN_FUNCTION = '?'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types

var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';
  return document.location.href;
}

function getLocationOrigin() {
  if (typeof document === 'undefined' || document.location == null) return ''; // Oh dear IE10...

  if (!document.location.origin) {
    return document.location.protocol + '//' + document.location.hostname + (document.location.port ? ':' + document.location.port : '');
  }

  return document.location.origin;
}
/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */


TraceKit.report = function reportModuleWrapper() {
  var handlers = [],
      lastArgs = null,
      lastException = null,
      lastExceptionStack = null;
  /**
   * Add a crash handler.
   * @param {Function} handler
   */

  function subscribe(handler) {
    installGlobalHandler();
    handlers.push(handler);
  }
  /**
   * Remove a crash handler.
   * @param {Function} handler
   */


  function unsubscribe(handler) {
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
      }
    }
  }
  /**
   * Remove all crash handlers.
   */


  function unsubscribeAll() {
    uninstallGlobalHandler();
    handlers = [];
  }
  /**
   * Dispatch stack information to all handlers.
   * @param {Object.<string, *>} stack
   */


  function notifyHandlers(stack, isWindowError) {
    var exception = null;

    if (isWindowError && !TraceKit.collectWindowErrors) {
      return;
    }

    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        try {
          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;
  /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} msg Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error
   * occurred.
   * @param {?(number|string)} colNo The column number at which the error
   * occurred.
   * @param {?Error} ex The actual Error object.
   */


  function traceKitWindowOnError(msg, url, lineNo, colNo, ex) {
    var stack = null; // If 'ex' is ErrorEvent, get real Error from inside

    var exception = utils.isErrorEvent(ex) ? ex.error : ex; // If 'msg' is ErrorEvent, get real message from inside

    var message = utils.isErrorEvent(msg) ? msg.message : msg;

    if (lastExceptionStack) {
      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
      processLastException();
    } else if (exception && utils.isError(exception)) {
      // non-string `exception` arg; attempt to extract stack trace
      // New chrome and blink send along a real error object
      // Let's just report that like a normal error.
      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
      stack = TraceKit.computeStackTrace(exception);
      notifyHandlers(stack, true);
    } else {
      var location = {
        url: url,
        line: lineNo,
        column: colNo
      };
      var name = undefined;
      var groups;

      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);

        if (groups) {
          name = groups[1];
          message = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;
      stack = {
        name: name,
        message: message,
        url: getLocationHref(),
        stack: [location]
      };
      notifyHandlers(stack, true);
    }

    if (_oldOnerrorHandler) {
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }

  function installGlobalHandler() {
    if (_onErrorHandlerInstalled) {
      return;
    }

    _oldOnerrorHandler = _window.onerror;
    _window.onerror = traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }

  function uninstallGlobalHandler() {
    if (!_onErrorHandlerInstalled) {
      return;
    }

    _window.onerror = _oldOnerrorHandler;
    _onErrorHandlerInstalled = false;
    _oldOnerrorHandler = undefined;
  }

  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
        _lastArgs = lastArgs;
    lastArgs = null;
    lastExceptionStack = null;
    lastException = null;
    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
  }
  /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @param {?boolean} rethrow If false, do not re-throw the exception.
   * Only used for window.onerror to not cause an infinite loop of
   * rethrowing.
   */


  function report(ex, rethrow) {
    var args = _slice.call(arguments, 1);

    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit.computeStackTrace(ex);
    lastExceptionStack = stack;
    lastException = ex;
    lastArgs = args; // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace

    setTimeout(function () {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);

    if (rethrow !== false) {
      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
  }

  report.subscribe = subscribe;
  report.unsubscribe = unsubscribe;
  report.uninstall = unsubscribeAll;
  return report;
}();
/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */


TraceKit.computeStackTrace = function computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */
  function computeStackTraceFromStackProp(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) return;
    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i; // NOTE: blob urls are now supposed to always have an origin, therefore it's format
    // which is `blob:http://url/path/with-some-uuid`, is matched by `blob.*?:\/` as well

    var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i; // Used to additionally parse URL/line/column from eval frames

    var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    var lines = ex.stack.split('\n');
    var stack = [];
    var submatch;
    var parts;
    var element;
    var reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if (parts = chrome.exec(lines[i])) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url

          parts[3] = submatch[2]; // line

          parts[4] = submatch[3]; // column
        }

        element = {
          url: !isNative ? parts[2] : null,
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null
        };
      } else if (parts = winjs.exec(lines[i])) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        };
      } else if (parts = gecko.exec(lines[i])) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;

        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1];
          parts[4] = submatch[2];
          parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }

        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      if (element.url && element.url.substr(0, 5) === 'blob:') {
        // Special case for handling JavaScript loaded into a blob.
        // We use a synchronous AJAX request here as a blob is already in
        // memory - it's not making a network request.  This will generate a warning
        // in the browser console, but there has already been an error so that's not
        // that much of an issue.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', element.url, false);
        xhr.send(null); // If we failed to download the source, skip this patch

        if (xhr.status === 200) {
          var source = xhr.responseText || ''; // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
          // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175

          source = source.slice(-300); // Now we dig out the source map URL

          var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/); // If we don't find a source map comment or we find more than one, continue on to the next element.

          if (sourceMaps) {
            var sourceMapAddress = sourceMaps[1]; // Now we check to see if it's a relative URL.
            // If it is, convert it to an absolute one.

            if (sourceMapAddress.charAt(0) === '~') {
              sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
            } // Now we strip the '.map' off of the end of the URL and update the
            // element so that Sentry can match the map to the blob.


            element.url = sourceMapAddress.slice(0, -4);
          }
        }
      }

      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
  }
  /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {Object.<string, *>} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   */


  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      url: url,
      line: lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
            stackInfo.stack[0].line = initial.line;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }
  /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */


  function computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
        stack = [],
        funcs = {},
        recursion = false,
        parts,
        item,
        source;

    for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
      if (curr === computeStackTrace || curr === TraceKit.report) {
        // console.log('skipping internal function');
        continue;
      }

      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        line: null,
        column: null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if (parts = functionName.exec(curr.toString())) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      // console.log('depth is ' + depth);
      // console.log('stack is ' + stack.length);
      stack.splice(0, depth);
    }

    var result = {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
    augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
    return result;
  }
  /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   */


  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      stack = computeStackTraceFromStackProp(ex);

      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    try {
      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);

      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref()
    };
  }

  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
  return computeStackTrace;
}();

module.exports = TraceKit;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
* Add integers, wrapping at 2^32. This uses 16-bit operations internally
* to work around bugs in some JS interpreters.
*/
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
* Bitwise rotate a 32-bit number to the left.
*/


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
* These functions implement the four basic operations the algorithm uses.
*/


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
/*
* Calculate the MD5 of an array of little-endian words, and a bit length.
*/


function binlMD5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
* Convert an array of little-endian words to a string
*/


function binl2rstr(input) {
  var i;
  var output = '';
  var length32 = input.length * 32;

  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
  }

  return output;
}
/*
* Convert a raw string to an array of little-endian words
* Characters >255 have their high-byte silently ignored.
*/


function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;

  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }

  var length8 = input.length * 8;

  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }

  return output;
}
/*
* Calculate the MD5 of a raw string
*/


function rstrMD5(s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}
/*
* Calculate the HMAC-MD5, of a key and some data (raw strings)
*/


function rstrHMACMD5(key, data) {
  var i;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = undefined;

  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }

  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }

  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
/*
* Convert a raw string to a hex string
*/


function rstr2hex(input) {
  var hexTab = '0123456789abcdef';
  var output = '';
  var x;
  var i;

  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
  }

  return output;
}
/*
* Encode a string as utf-8
*/


function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}
/*
* Take string arguments and return either raw or hex encoded strings
*/


function rawMD5(s) {
  return rstrMD5(str2rstrUTF8(s));
}

function hexMD5(s) {
  return rstr2hex(rawMD5(s));
}

function rawHMACMD5(k, d) {
  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
}

function hexHMACMD5(k, d) {
  return rstr2hex(rawHMACMD5(k, d));
}

function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }

    return rawMD5(string);
  }

  if (!raw) {
    return hexHMACMD5(key, string);
  }

  return rawHMACMD5(key, string);
}

module.exports = md5;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function RavenConfigError(message) {
  this.name = 'RavenConfigError';
  this.message = message;
}

RavenConfigError.prototype = new Error();
RavenConfigError.prototype.constructor = RavenConfigError;
module.exports = RavenConfigError;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(19);

var wrapMethod = function wrapMethod(console, level, callback) {
  var originalConsoleLevel = console[level];
  var originalConsole = console;

  if (!(level in console)) {
    return;
  }

  var sentryLevel = level === 'warn' ? 'warning' : level;

  console[level] = function () {
    var args = [].slice.call(arguments);
    var msg = utils.safeJoin(args, ' ');
    var data = {
      level: sentryLevel,
      logger: 'console',
      extra: {
        arguments: args
      }
    };

    if (level === 'assert') {
      if (args[0] === false) {
        // Default browsers message
        msg = 'Assertion failed: ' + (utils.safeJoin(args.slice(1), ' ') || 'console.assert');
        data.extra.arguments = args.slice(1);
        callback && callback(msg, data);
      }
    } else {
      callback && callback(msg, data);
    } // this fails for some browsers. :(


    if (originalConsoleLevel) {
      // IE9 doesn't allow calling apply on console functions directly
      // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
      Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
    }
  };
};

module.exports = {
  wrapMethod: wrapMethod
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var k = __webpack_require__(26),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    A = n ? Symbol.for("react.memo") : 60115,
    B = n ? Symbol.for("react.lazy") : 60116,
    C = "function" === typeof Symbol && Symbol.iterator;

function aa(a, b, e, c, d, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [e, c, d, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function D(a) {
  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
}

var E = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    F = {};

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

G.prototype.isReactComponent = {};

G.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? D("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function H() {}

H.prototype = G.prototype;

function I(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

var J = I.prototype = new H();
J.constructor = I;
k(J, G.prototype);
J.isPureReactComponent = !0;
var K = {
  current: null,
  currentDispatcher: null
},
    L = Object.prototype.hasOwnProperty,
    M = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function N(a, b, e) {
  var c = void 0,
      d = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    d.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: d,
    _owner: K.current
  };
}

function ba(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, e, c) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = e;
    d.context = c;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: e,
    context: c,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, e, c) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    d = a[h];
    var f = b + U(d, h);
    g += T(d, f, e, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
  } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
  return g;
}

function V(a, b, e) {
  return null == a ? 0 : T(a, "", b, e);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}

function da(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? W(a, c, e, function (a) {
    return a;
  }) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
}

function W(a, b, e, c, d) {
  var g = "";
  null != e && (g = ("" + e).replace(P, "$&/") + "/");
  b = R(b, g, c, d);
  V(a, da, b);
  S(b);
}

var X = {
  Children: {
    map: function map(a, b, e) {
      if (null == a) return a;
      var c = [];
      W(a, c, null, b, e);
      return c;
    },
    forEach: function forEach(a, b, e) {
      if (null == a) return a;
      b = R(null, null, b, e);
      V(a, ca, b);
      S(b);
    },
    count: function count(a) {
      return V(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      W(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      O(a) ? void 0 : D("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: G,
  PureComponent: I,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: B,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: A,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: N,
  cloneElement: function cloneElement(a, b, e) {
    null === a || void 0 === a ? D("267", a) : void 0;
    var c = void 0,
        d = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = K.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) d.children = e;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      d.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: d,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = N.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: O,
  version: "16.6.3",
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: K,
    assign: k
  }
};
X.unstable_ConcurrentMode = x;
X.unstable_Profiler = u;
var Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(1),
    n = __webpack_require__(26),
    ba = __webpack_require__(42);

function ca(a, b, c, d, e, f, g, h) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var k = [c, d, e, f, g, h],
          l = 0;
      a = Error(b.replace(/%s/g, function () {
        return k[l++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function t(a) {
  for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) {
    c += "&args[]=" + encodeURIComponent(arguments[d + 1]);
  }

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
}

aa ? void 0 : t("227");

function da(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}

var ea = !1,
    fa = null,
    ha = !1,
    ia = null,
    ja = {
  onError: function onError(a) {
    ea = !0;
    fa = a;
  }
};

function ka(a, b, c, d, e, f, g, h, k) {
  ea = !1;
  fa = null;
  da.apply(ja, arguments);
}

function la(a, b, c, d, e, f, g, h, k) {
  ka.apply(this, arguments);

  if (ea) {
    if (ea) {
      var l = fa;
      ea = !1;
      fa = null;
    } else t("198"), l = void 0;

    ha || (ha = !0, ia = l);
  }
}

var ma = null,
    na = {};

function oa() {
  if (ma) for (var a in na) {
    var b = na[a],
        c = ma.indexOf(a);
    -1 < c ? void 0 : t("96", a);

    if (!pa[c]) {
      b.extractEvents ? void 0 : t("97", a);
      pa[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            g = b,
            h = d;
        qa.hasOwnProperty(h) ? t("99", h) : void 0;
        qa[h] = f;
        var k = f.phasedRegistrationNames;

        if (k) {
          for (e in k) {
            k.hasOwnProperty(e) && ra(k[e], g, h);
          }

          e = !0;
        } else f.registrationName ? (ra(f.registrationName, g, h), e = !0) : e = !1;

        e ? void 0 : t("98", d, a);
      }
    }
  }
}

function ra(a, b, c) {
  sa[a] ? t("100", a) : void 0;
  sa[a] = b;
  ta[a] = b.eventTypes[c].dependencies;
}

var pa = [],
    qa = {},
    sa = {},
    ta = {},
    ua = null,
    va = null,
    wa = null;

function xa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = wa(c);
  la(d, b, void 0, a);
  a.currentTarget = null;
}

function ya(a, b) {
  null == b ? t("30") : void 0;
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function za(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var Aa = null;

function Ba(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) {
      xa(a, b[d], c[d]);
    } else b && xa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

var Ca = {
  injectEventPluginOrder: function injectEventPluginOrder(a) {
    ma ? t("101") : void 0;
    ma = Array.prototype.slice.call(a);
    oa();
  },
  injectEventPluginsByName: function injectEventPluginsByName(a) {
    var b = !1,
        c;

    for (c in a) {
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        na.hasOwnProperty(c) && na[c] === d || (na[c] ? t("102", c) : void 0, na[c] = d, b = !0);
      }
    }

    b && oa();
  }
};

function Da(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = ua(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  c && "function" !== typeof c ? t("231", b, typeof c) : void 0;
  return c;
}

function Ea(a) {
  null !== a && (Aa = ya(Aa, a));
  a = Aa;
  Aa = null;
  if (a && (za(a, Ba), Aa ? t("95") : void 0, ha)) throw a = ia, ha = !1, ia = null, a;
}

var Fa = Math.random().toString(36).slice(2),
    Ga = "__reactInternalInstance$" + Fa,
    Ha = "__reactEventHandlers$" + Fa;

function Ia(a) {
  if (a[Ga]) return a[Ga];

  for (; !a[Ga];) {
    if (a.parentNode) a = a.parentNode;else return null;
  }

  a = a[Ga];
  return 5 === a.tag || 6 === a.tag ? a : null;
}

function Ja(a) {
  a = a[Ga];
  return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
}

function Ka(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  t("33");
}

function La(a) {
  return a[Ha] || null;
}

function Ma(a) {
  do {
    a = a.return;
  } while (a && 5 !== a.tag);

  return a ? a : null;
}

function Na(a, b, c) {
  if (b = Da(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ya(c._dispatchListeners, b), c._dispatchInstances = ya(c._dispatchInstances, a);
}

function Oa(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) {
      c.push(b), b = Ma(b);
    }

    for (b = c.length; 0 < b--;) {
      Na(c[b], "captured", a);
    }

    for (b = 0; b < c.length; b++) {
      Na(c[b], "bubbled", a);
    }
  }
}

function Pa(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Da(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ya(c._dispatchListeners, b), c._dispatchInstances = ya(c._dispatchInstances, a));
}

function Qa(a) {
  a && a.dispatchConfig.registrationName && Pa(a._targetInst, null, a);
}

function Ra(a) {
  za(a, Oa);
}

var Sa = !("undefined" === typeof window || !window.document || !window.document.createElement);

function Ta(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Ua = {
  animationend: Ta("Animation", "AnimationEnd"),
  animationiteration: Ta("Animation", "AnimationIteration"),
  animationstart: Ta("Animation", "AnimationStart"),
  transitionend: Ta("Transition", "TransitionEnd")
},
    Va = {},
    Wa = {};
Sa && (Wa = document.createElement("div").style, "AnimationEvent" in window || (delete Ua.animationend.animation, delete Ua.animationiteration.animation, delete Ua.animationstart.animation), "TransitionEvent" in window || delete Ua.transitionend.transition);

function Xa(a) {
  if (Va[a]) return Va[a];
  if (!Ua[a]) return a;
  var b = Ua[a],
      c;

  for (c in b) {
    if (b.hasOwnProperty(c) && c in Wa) return Va[a] = b[c];
  }

  return a;
}

var Ya = Xa("animationend"),
    Za = Xa("animationiteration"),
    $a = Xa("animationstart"),
    ab = Xa("transitionend"),
    bb = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    cb = null,
    eb = null,
    fb = null;

function gb() {
  if (fb) return fb;
  var a,
      b = eb,
      c = b.length,
      d,
      e = "value" in cb ? cb.value : cb.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++) {
    ;
  }

  var g = c - a;

  for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {
    ;
  }

  return fb = e.slice(a, 1 < d ? 1 - d : void 0);
}

function hb() {
  return !0;
}

function ib() {
  return !1;
}

function A(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? hb : ib;
  this.isPropagationStopped = ib;
  return this;
}

n(A.prototype, {
  preventDefault: function preventDefault() {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = hb);
  },
  stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = hb);
  },
  persist: function persist() {
    this.isPersistent = hb;
  },
  isPersistent: ib,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;

    for (b in a) {
      this[b] = null;
    }

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = ib;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
A.Interface = {
  type: null,
  target: null,
  currentTarget: function currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

A.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  jb(c);
  return c;
};

jb(A);

function kb(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function lb(a) {
  a instanceof this ? void 0 : t("279");
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function jb(a) {
  a.eventPool = [];
  a.getPooled = kb;
  a.release = lb;
}

var mb = A.extend({
  data: null
}),
    nb = A.extend({
  data: null
}),
    ob = [9, 13, 27, 32],
    pb = Sa && "CompositionEvent" in window,
    qb = null;
Sa && "documentMode" in document && (qb = document.documentMode);
var rb = Sa && "TextEvent" in window && !qb,
    sb = Sa && (!pb || qb && 8 < qb && 11 >= qb),
    tb = String.fromCharCode(32),
    ub = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    vb = !1;

function wb(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== ob.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function xb(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var yb = !1;

function zb(a, b) {
  switch (a) {
    case "compositionend":
      return xb(b);

    case "keypress":
      if (32 !== b.which) return null;
      vb = !0;
      return tb;

    case "textInput":
      return a = b.data, a === tb && vb ? null : a;

    default:
      return null;
  }
}

function Ab(a, b) {
  if (yb) return "compositionend" === a || !pb && wb(a, b) ? (a = gb(), fb = eb = cb = null, yb = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return sb && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var Bb = {
  eventTypes: ub,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = void 0;
    var f = void 0;
    if (pb) b: {
      switch (a) {
        case "compositionstart":
          e = ub.compositionStart;
          break b;

        case "compositionend":
          e = ub.compositionEnd;
          break b;

        case "compositionupdate":
          e = ub.compositionUpdate;
          break b;
      }

      e = void 0;
    } else yb ? wb(a, c) && (e = ub.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = ub.compositionStart);
    e ? (sb && "ko" !== c.locale && (yb || e !== ub.compositionStart ? e === ub.compositionEnd && yb && (f = gb()) : (cb = d, eb = "value" in cb ? cb.value : cb.textContent, yb = !0)), e = mb.getPooled(e, b, c, d), f ? e.data = f : (f = xb(c), null !== f && (e.data = f)), Ra(e), f = e) : f = null;
    (a = rb ? zb(a, c) : Ab(a, c)) ? (b = nb.getPooled(ub.beforeInput, b, c, d), b.data = a, Ra(b)) : b = null;
    return null === f ? b : null === b ? f : [f, b];
  }
},
    Cb = null,
    Db = null,
    Eb = null;

function Hb(a) {
  if (a = va(a)) {
    "function" !== typeof Cb ? t("280") : void 0;
    var b = ua(a.stateNode);
    Cb(a.stateNode, a.type, b);
  }
}

function Ib(a) {
  Db ? Eb ? Eb.push(a) : Eb = [a] : Db = a;
}

function Jb() {
  if (Db) {
    var a = Db,
        b = Eb;
    Eb = Db = null;
    Hb(a);
    if (b) for (a = 0; a < b.length; a++) {
      Hb(b[a]);
    }
  }
}

function Kb(a, b) {
  return a(b);
}

function Lb(a, b, c) {
  return a(b, c);
}

function Mb() {}

var Nb = !1;

function Ob(a, b) {
  if (Nb) return a(b);
  Nb = !0;

  try {
    return Kb(a, b);
  } finally {
    if (Nb = !1, null !== Db || null !== Eb) Mb(), Jb();
  }
}

var Pb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Qb(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Pb[a.type] : "textarea" === b ? !0 : !1;
}

function Rb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function Sb(a) {
  if (!Sa) return !1;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

function Tb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function Ub(a) {
  var b = Tb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function Vb(a) {
  a._valueTracker || (a._valueTracker = Ub(a));
}

function Wb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Tb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

var Xb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Yb = /^(.*)[\\\/]/,
    D = "function" === typeof Symbol && Symbol.for,
    Zb = D ? Symbol.for("react.element") : 60103,
    $b = D ? Symbol.for("react.portal") : 60106,
    ac = D ? Symbol.for("react.fragment") : 60107,
    bc = D ? Symbol.for("react.strict_mode") : 60108,
    cc = D ? Symbol.for("react.profiler") : 60114,
    dc = D ? Symbol.for("react.provider") : 60109,
    ec = D ? Symbol.for("react.context") : 60110,
    fc = D ? Symbol.for("react.concurrent_mode") : 60111,
    gc = D ? Symbol.for("react.forward_ref") : 60112,
    hc = D ? Symbol.for("react.suspense") : 60113,
    ic = D ? Symbol.for("react.memo") : 60115,
    jc = D ? Symbol.for("react.lazy") : 60116,
    kc = "function" === typeof Symbol && Symbol.iterator;

function lc(a) {
  if (null === a || "object" !== typeof a) return null;
  a = kc && a[kc] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function mc(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case fc:
      return "ConcurrentMode";

    case ac:
      return "Fragment";

    case $b:
      return "Portal";

    case cc:
      return "Profiler";

    case bc:
      return "StrictMode";

    case hc:
      return "Suspense";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case ec:
      return "Context.Consumer";

    case dc:
      return "Context.Provider";

    case gc:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case ic:
      return mc(a.type);

    case jc:
      if (a = 1 === a._status ? a._result : null) return mc(a);
  }
  return null;
}

function nc(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 2:
      case 16:
      case 0:
      case 1:
      case 5:
      case 8:
      case 13:
        var c = a._debugOwner,
            d = a._debugSource,
            e = mc(a.type);
        var f = null;
        c && (f = mc(c.type));
        c = e;
        e = "";
        d ? e = " (at " + d.fileName.replace(Yb, "") + ":" + d.lineNumber + ")" : f && (e = " (created by " + f + ")");
        f = "\n    in " + (c || "Unknown") + e;
        break a;

      default:
        f = "";
    }

    b += f;
    a = a.return;
  } while (a);

  return b;
}

var oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pc = Object.prototype.hasOwnProperty,
    qc = {},
    rc = {};

function sc(a) {
  if (pc.call(rc, a)) return !0;
  if (pc.call(qc, a)) return !1;
  if (oc.test(a)) return rc[a] = !0;
  qc[a] = !0;
  return !1;
}

function tc(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function uc(a, b, c, d) {
  if (null === b || "undefined" === typeof b || tc(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function E(a, b, c, d, e) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
}

var F = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  F[a] = new E(a, 0, !1, a, null);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  F[b] = new E(b, 1, !1, a[1], null);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  F[a] = new E(a, 2, !1, a.toLowerCase(), null);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  F[a] = new E(a, 2, !1, a, null);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  F[a] = new E(a, 3, !1, a.toLowerCase(), null);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  F[a] = new E(a, 3, !0, a, null);
});
["capture", "download"].forEach(function (a) {
  F[a] = new E(a, 4, !1, a, null);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  F[a] = new E(a, 6, !1, a, null);
});
["rowSpan", "start"].forEach(function (a) {
  F[a] = new E(a, 5, !1, a.toLowerCase(), null);
});
var vc = /[\-:]([a-z])/g;

function xc(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(vc, xc);
  F[b] = new E(b, 1, !1, a, null);
});
"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(vc, xc);
  F[b] = new E(b, 1, !1, a, "http://www.w3.org/1999/xlink");
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(vc, xc);
  F[b] = new E(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
});
F.tabIndex = new E("tabIndex", 1, !1, "tabindex", null);

function yc(a, b, c, d) {
  var e = F.hasOwnProperty(b) ? F[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (uc(b, c, e, d) && (c = null), d || null === e ? sc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

function zc(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function Ac(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function Bc(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = zc(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function Cc(a, b) {
  b = b.checked;
  null != b && yc(a, "checked", b, !1);
}

function Dc(a, b) {
  Cc(a, b);
  var c = zc(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Ec(a, b.type, c) : b.hasOwnProperty("defaultValue") && Ec(a, b.type, zc(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Fc(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !a.defaultChecked;
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function Ec(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

var Gc = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function Hc(a, b, c) {
  a = A.getPooled(Gc.change, a, b, c);
  a.type = "change";
  Ib(c);
  Ra(a);
  return a;
}

var Jc = null,
    Kc = null;

function Lc(a) {
  Ea(a);
}

function Mc(a) {
  var b = Ka(a);
  if (Wb(b)) return a;
}

function Nc(a, b) {
  if ("change" === a) return b;
}

var Oc = !1;
Sa && (Oc = Sb("input") && (!document.documentMode || 9 < document.documentMode));

function Pc() {
  Jc && (Jc.detachEvent("onpropertychange", Qc), Kc = Jc = null);
}

function Qc(a) {
  "value" === a.propertyName && Mc(Kc) && (a = Hc(Kc, a, Rb(a)), Ob(Lc, a));
}

function Rc(a, b, c) {
  "focus" === a ? (Pc(), Jc = b, Kc = c, Jc.attachEvent("onpropertychange", Qc)) : "blur" === a && Pc();
}

function Sc(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Mc(Kc);
}

function Tc(a, b) {
  if ("click" === a) return Mc(b);
}

function Uc(a, b) {
  if ("input" === a || "change" === a) return Mc(b);
}

var Vc = {
  eventTypes: Gc,
  _isInputEventSupported: Oc,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? Ka(b) : window,
        f = void 0,
        g = void 0,
        h = e.nodeName && e.nodeName.toLowerCase();
    "select" === h || "input" === h && "file" === e.type ? f = Nc : Qb(e) ? Oc ? f = Uc : (f = Sc, g = Rc) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Tc);
    if (f && (f = f(a, b))) return Hc(f, c, d);
    g && g(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Ec(e, "number", e.value);
  }
},
    Wc = A.extend({
  view: null,
  detail: null
}),
    Xc = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Yc(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Xc[a]) ? !!b[a] : !1;
}

function Zc() {
  return Yc;
}

var $c = 0,
    ad = 0,
    bd = !1,
    cd = !1,
    dd = Wc.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: Zc,
  button: null,
  buttons: null,
  relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function movementX(a) {
    if ("movementX" in a) return a.movementX;
    var b = $c;
    $c = a.screenX;
    return bd ? "mousemove" === a.type ? a.screenX - b : 0 : (bd = !0, 0);
  },
  movementY: function movementY(a) {
    if ("movementY" in a) return a.movementY;
    var b = ad;
    ad = a.screenY;
    return cd ? "mousemove" === a.type ? a.screenY - b : 0 : (cd = !0, 0);
  }
}),
    ed = dd.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    fd = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    gd = {
  eventTypes: fd,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = "mouseover" === a || "pointerover" === a,
        f = "mouseout" === a || "pointerout" === a;
    if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;
    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;
    f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Ia(b) : null) : f = null;
    if (f === b) return null;
    var g = void 0,
        h = void 0,
        k = void 0,
        l = void 0;
    if ("mouseout" === a || "mouseover" === a) g = dd, h = fd.mouseLeave, k = fd.mouseEnter, l = "mouse";else if ("pointerout" === a || "pointerover" === a) g = ed, h = fd.pointerLeave, k = fd.pointerEnter, l = "pointer";
    var m = null == f ? e : Ka(f);
    e = null == b ? e : Ka(b);
    a = g.getPooled(h, f, c, d);
    a.type = l + "leave";
    a.target = m;
    a.relatedTarget = e;
    c = g.getPooled(k, b, c, d);
    c.type = l + "enter";
    c.target = e;
    c.relatedTarget = m;
    d = b;
    if (f && d) a: {
      b = f;
      e = d;
      l = 0;

      for (g = b; g; g = Ma(g)) {
        l++;
      }

      g = 0;

      for (k = e; k; k = Ma(k)) {
        g++;
      }

      for (; 0 < l - g;) {
        b = Ma(b), l--;
      }

      for (; 0 < g - l;) {
        e = Ma(e), g--;
      }

      for (; l--;) {
        if (b === e || b === e.alternate) break a;
        b = Ma(b);
        e = Ma(e);
      }

      b = null;
    } else b = null;
    e = b;

    for (b = []; f && f !== e;) {
      l = f.alternate;
      if (null !== l && l === e) break;
      b.push(f);
      f = Ma(f);
    }

    for (f = []; d && d !== e;) {
      l = d.alternate;
      if (null !== l && l === e) break;
      f.push(d);
      d = Ma(d);
    }

    for (d = 0; d < b.length; d++) {
      Pa(b[d], "bubbled", a);
    }

    for (d = f.length; 0 < d--;) {
      Pa(f[d], "captured", c);
    }

    return [a, c];
  }
},
    hd = Object.prototype.hasOwnProperty;

function id(a, b) {
  return a === b ? 0 !== a || 0 !== b || 1 / a === 1 / b : a !== a && b !== b;
}

function jd(a, b) {
  if (id(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) {
    if (!hd.call(b, c[d]) || !id(a[c[d]], b[c[d]])) return !1;
  }

  return !0;
}

function kd(a) {
  var b = a;
  if (a.alternate) for (; b.return;) {
    b = b.return;
  } else {
    if (0 !== (b.effectTag & 2)) return 1;

    for (; b.return;) {
      if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
    }
  }
  return 3 === b.tag ? 2 : 3;
}

function ld(a) {
  2 !== kd(a) ? t("188") : void 0;
}

function md(a) {
  var b = a.alternate;
  if (!b) return b = kd(a), 3 === b ? t("188") : void 0, 1 === b ? null : a;

  for (var c = a, d = b;;) {
    var e = c.return,
        f = e ? e.alternate : null;
    if (!e || !f) break;

    if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return ld(e), a;
        if (g === d) return ld(e), b;
        g = g.sibling;
      }

      t("188");
    }

    if (c.return !== d.return) c = e, d = f;else {
      g = !1;

      for (var h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }

        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }

        h = h.sibling;
      }

      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }

          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }

          h = h.sibling;
        }

        g ? void 0 : t("189");
      }
    }
    c.alternate !== d ? t("190") : void 0;
  }

  3 !== c.tag ? t("188") : void 0;
  return c.stateNode.current === c ? a : b;
}

function nd(a) {
  a = md(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  return null;
}

var od = A.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    pd = A.extend({
  clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    qd = Wc.extend({
  relatedTarget: null
});

function rd(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var sd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    td = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    ud = Wc.extend({
  key: function key(a) {
    if (a.key) {
      var b = sd[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = rd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? td[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: Zc,
  charCode: function charCode(a) {
    return "keypress" === a.type ? rd(a) : 0;
  },
  keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function which(a) {
    return "keypress" === a.type ? rd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    vd = dd.extend({
  dataTransfer: null
}),
    wd = Wc.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: Zc
}),
    xd = A.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    yd = dd.extend({
  deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    zd = [["abort", "abort"], [Ya, "animationEnd"], [Za, "animationIteration"], [$a, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [ab, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
    Ad = {},
    Bd = {};

function Cd(a, b) {
  var c = a[0];
  a = a[1];
  var d = "on" + (a[0].toUpperCase() + a.slice(1));
  b = {
    phasedRegistrationNames: {
      bubbled: d,
      captured: d + "Capture"
    },
    dependencies: [c],
    isInteractive: b
  };
  Ad[a] = b;
  Bd[c] = b;
}

[["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function (a) {
  Cd(a, !0);
});
zd.forEach(function (a) {
  Cd(a, !1);
});
var Dd = {
  eventTypes: Ad,
  isInteractiveTopLevelEventType: function isInteractiveTopLevelEventType(a) {
    a = Bd[a];
    return void 0 !== a && !0 === a.isInteractive;
  },
  extractEvents: function extractEvents(a, b, c, d) {
    var e = Bd[a];
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === rd(c)) return null;

      case "keydown":
      case "keyup":
        a = ud;
        break;

      case "blur":
      case "focus":
        a = qd;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = dd;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = vd;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = wd;
        break;

      case Ya:
      case Za:
      case $a:
        a = od;
        break;

      case ab:
        a = xd;
        break;

      case "scroll":
        a = Wc;
        break;

      case "wheel":
        a = yd;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = pd;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = ed;
        break;

      default:
        a = A;
    }

    b = a.getPooled(e, b, c, d);
    Ra(b);
    return b;
  }
},
    Ed = Dd.isInteractiveTopLevelEventType,
    Fd = [];

function Gd(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d;

    for (d = c; d.return;) {
      d = d.return;
    }

    d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    if (!d) break;
    a.ancestors.push(c);
    c = Ia(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = Rb(a.nativeEvent);
    d = a.topLevelType;

    for (var f = a.nativeEvent, g = null, h = 0; h < pa.length; h++) {
      var k = pa[h];
      k && (k = k.extractEvents(d, b, f, e)) && (g = ya(g, k));
    }

    Ea(g);
  }
}

var Hd = !0;

function G(a, b) {
  if (!b) return null;
  var c = (Ed(a) ? Id : Jd).bind(null, a);
  b.addEventListener(a, c, !1);
}

function Kd(a, b) {
  if (!b) return null;
  var c = (Ed(a) ? Id : Jd).bind(null, a);
  b.addEventListener(a, c, !0);
}

function Id(a, b) {
  Lb(Jd, a, b);
}

function Jd(a, b) {
  if (Hd) {
    var c = Rb(b);
    c = Ia(c);
    null === c || "number" !== typeof c.tag || 2 === kd(c) || (c = null);

    if (Fd.length) {
      var d = Fd.pop();
      d.topLevelType = a;
      d.nativeEvent = b;
      d.targetInst = c;
      a = d;
    } else a = {
      topLevelType: a,
      nativeEvent: b,
      targetInst: c,
      ancestors: []
    };

    try {
      Ob(Gd, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > Fd.length && Fd.push(a);
    }
  }
}

var Ld = {},
    Md = 0,
    Nd = "_reactListenersID" + ("" + Math.random()).slice(2);

function Od(a) {
  Object.prototype.hasOwnProperty.call(a, Nd) || (a[Nd] = Md++, Ld[a[Nd]] = {});
  return Ld[a[Nd]];
}

function Pd(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function Qd(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }

  return a;
}

function Rd(a, b) {
  var c = Qd(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = Qd(c);
  }
}

function Sd(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Sd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function Td() {
  for (var a = window, b = Pd(); b instanceof a.HTMLIFrameElement;) {
    try {
      a = b.contentDocument.defaultView;
    } catch (c) {
      break;
    }

    b = Pd(a.document);
  }

  return b;
}

function Ud(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

var Vd = Sa && "documentMode" in document && 11 >= document.documentMode,
    Wd = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    Xd = null,
    Yd = null,
    Zd = null,
    $d = !1;

function ae(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if ($d || null == Xd || Xd !== Pd(c)) return null;
  c = Xd;
  "selectionStart" in c && Ud(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return Zd && jd(Zd, c) ? null : (Zd = c, a = A.getPooled(Wd.select, Yd, a, b), a.type = "select", a.target = Xd, Ra(a), a);
}

var be = {
  eventTypes: Wd,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;

    if (!(f = !e)) {
      a: {
        e = Od(e);
        f = ta.onSelect;

        for (var g = 0; g < f.length; g++) {
          var h = f[g];

          if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;
            break a;
          }
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? Ka(b) : window;

    switch (a) {
      case "focus":
        if (Qb(e) || "true" === e.contentEditable) Xd = e, Yd = b, Zd = null;
        break;

      case "blur":
        Zd = Yd = Xd = null;
        break;

      case "mousedown":
        $d = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return $d = !1, ae(c, d);

      case "selectionchange":
        if (Vd) break;

      case "keydown":
      case "keyup":
        return ae(c, d);
    }

    return null;
  }
};
Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ua = La;
va = Ja;
wa = Ka;
Ca.injectEventPluginsByName({
  SimpleEventPlugin: Dd,
  EnterLeaveEventPlugin: gd,
  ChangeEventPlugin: Vc,
  SelectEventPlugin: be,
  BeforeInputEventPlugin: Bb
});

function de(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

function ee(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = de(b.children)) a.children = b;
  return a;
}

function fe(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }

    for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + zc(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function ge(a, b) {
  null != b.dangerouslySetInnerHTML ? t("91") : void 0;
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function he(a, b) {
  var c = b.value;
  null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? t("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : t("93"), b = b[0]), c = b), null == c && (c = ""));
  a._wrapperState = {
    initialValue: zc(c)
  };
}

function ie(a, b) {
  var c = zc(b.value),
      d = zc(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function je(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && (a.value = b);
}

var ke = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function le(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function me(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? le(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var ne = void 0,
    oe = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== ke.svg || "innerHTML" in a) a.innerHTML = b;else {
    ne = ne || document.createElement("div");
    ne.innerHTML = "<svg>" + b + "</svg>";

    for (b = ne.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }

    for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});

function pe(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

var qe = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    re = ["Webkit", "ms", "Moz", "O"];
Object.keys(qe).forEach(function (a) {
  re.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qe[b] = qe[a];
  });
});

function se(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qe.hasOwnProperty(a) && qe[a] ? ("" + b).trim() : b + "px";
}

function te(a, b) {
  a = a.style;

  for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"),
          e = se(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}

var ue = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function ve(a, b) {
  b && (ue[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? t("137", a, "") : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? t("60") : void 0, "object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML ? void 0 : t("61")), null != b.style && "object" !== typeof b.style ? t("62", "") : void 0);
}

function we(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

function xe(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = Od(a);
  b = ta[b];

  for (var d = 0; d < b.length; d++) {
    var e = b[d];

    if (!c.hasOwnProperty(e) || !c[e]) {
      switch (e) {
        case "scroll":
          Kd("scroll", a);
          break;

        case "focus":
        case "blur":
          Kd("focus", a);
          Kd("blur", a);
          c.blur = !0;
          c.focus = !0;
          break;

        case "cancel":
        case "close":
          Sb(e) && Kd(e, a);
          break;

        case "invalid":
        case "submit":
        case "reset":
          break;

        default:
          -1 === bb.indexOf(e) && G(e, a);
      }

      c[e] = !0;
    }
  }
}

function ye() {}

var ze = null,
    Ae = null;

function Be(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function Ce(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var De = "function" === typeof setTimeout ? setTimeout : void 0,
    Ee = "function" === typeof clearTimeout ? clearTimeout : void 0;

function Fe(a) {
  for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

function Ge(a) {
  for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

new Set();
var He = [],
    Ie = -1;

function H(a) {
  0 > Ie || (a.current = He[Ie], He[Ie] = null, Ie--);
}

function I(a, b) {
  Ie++;
  He[Ie] = a.current;
  a.current = b;
}

var Je = {},
    J = {
  current: Je
},
    K = {
  current: !1
},
    Ke = Je;

function Le(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Je;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) {
    e[f] = b[f];
  }

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function L(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function Me(a) {
  H(K, a);
  H(J, a);
}

function Ne(a) {
  H(K, a);
  H(J, a);
}

function Oe(a, b, c) {
  J.current !== Je ? t("168") : void 0;
  I(J, b, a);
  I(K, c, a);
}

function Pe(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) {
    e in a ? void 0 : t("108", mc(b) || "Unknown", e);
  }

  return n({}, c, d);
}

function Qe(a) {
  var b = a.stateNode;
  b = b && b.__reactInternalMemoizedMergedChildContext || Je;
  Ke = J.current;
  I(J, b, a);
  I(K, K.current, a);
  return !0;
}

function Re(a, b, c) {
  var d = a.stateNode;
  d ? void 0 : t("169");
  c ? (b = Pe(a, b, Ke), d.__reactInternalMemoizedMergedChildContext = b, H(K, a), H(J, a), I(J, b, a)) : H(K, a);
  I(K, c, a);
}

var Se = null,
    Te = null;

function Ue(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}

function Ve(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);
    Se = Ue(function (a) {
      return b.onCommitFiberRoot(c, a);
    });
    Te = Ue(function (a) {
      return b.onCommitFiberUnmount(c, a);
    });
  } catch (d) {}

  return !0;
}

function We(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.firstContextDependency = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function M(a, b, c, d) {
  return new We(a, b, c, d);
}

function Xe(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function Ye(a) {
  if ("function" === typeof a) return Xe(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === gc) return 11;
    if (a === ic) return 14;
  }

  return 2;
}

function Ze(a, b) {
  var c = a.alternate;
  null === c ? (c = M(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  c.firstContextDependency = a.firstContextDependency;
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function $e(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) Xe(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ac:
      return af(c.children, e, f, b);

    case fc:
      return bf(c, e | 3, f, b);

    case bc:
      return bf(c, e | 2, f, b);

    case cc:
      return a = M(12, c, b, e | 4), a.elementType = cc, a.type = cc, a.expirationTime = f, a;

    case hc:
      return a = M(13, c, b, e), a.elementType = hc, a.type = hc, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case dc:
          g = 10;
          break a;

        case ec:
          g = 9;
          break a;

        case gc:
          g = 11;
          break a;

        case ic:
          g = 14;
          break a;

        case jc:
          g = 16;
          d = null;
          break a;
      }
      t("130", null == a ? a : typeof a, "");
  }
  b = M(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function af(a, b, c, d) {
  a = M(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function bf(a, b, c, d) {
  a = M(8, a, d, b);
  b = 0 === (b & 1) ? bc : fc;
  a.elementType = b;
  a.type = b;
  a.expirationTime = c;
  return a;
}

function cf(a, b, c) {
  a = M(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function df(a, b, c) {
  b = M(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function ef(a, b) {
  a.didError = !1;
  var c = a.earliestPendingTime;
  0 === c ? a.earliestPendingTime = a.latestPendingTime = b : c < b ? a.earliestPendingTime = b : a.latestPendingTime > b && (a.latestPendingTime = b);
  ff(b, a);
}

function gf(a, b) {
  a.didError = !1;
  var c = a.latestPingedTime;
  0 !== c && c >= b && (a.latestPingedTime = 0);
  c = a.earliestPendingTime;
  var d = a.latestPendingTime;
  c === b ? a.earliestPendingTime = d === b ? a.latestPendingTime = 0 : d : d === b && (a.latestPendingTime = c);
  c = a.earliestSuspendedTime;
  d = a.latestSuspendedTime;
  0 === c ? a.earliestSuspendedTime = a.latestSuspendedTime = b : c < b ? a.earliestSuspendedTime = b : d > b && (a.latestSuspendedTime = b);
  ff(b, a);
}

function hf(a, b) {
  var c = a.earliestPendingTime;
  a = a.earliestSuspendedTime;
  c > b && (b = c);
  a > b && (b = a);
  return b;
}

function ff(a, b) {
  var c = b.earliestSuspendedTime,
      d = b.latestSuspendedTime,
      e = b.earliestPendingTime,
      f = b.latestPingedTime;
  e = 0 !== e ? e : f;
  0 === e && (0 === a || d < a) && (e = d);
  a = e;
  0 !== a && c > a && (a = c);
  b.nextExpirationTimeToWorkOn = e;
  b.expirationTime = a;
}

var jf = !1;

function kf(a) {
  return {
    baseState: a,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function lf(a) {
  return {
    baseState: a.baseState,
    firstUpdate: a.firstUpdate,
    lastUpdate: a.lastUpdate,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function mf(a) {
  return {
    expirationTime: a,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
    nextEffect: null
  };
}

function nf(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}

function of(a, b) {
  var c = a.alternate;

  if (null === c) {
    var d = a.updateQueue;
    var e = null;
    null === d && (d = a.updateQueue = kf(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = kf(a.memoizedState), e = c.updateQueue = kf(c.memoizedState)) : d = a.updateQueue = lf(e) : null === e && (e = c.updateQueue = lf(d));

  null === e || d === e ? nf(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (nf(d, b), nf(e, b)) : (nf(d, b), e.lastUpdate = b);
}

function pf(a, b) {
  var c = a.updateQueue;
  c = null === c ? a.updateQueue = kf(a.memoizedState) : qf(a, c);
  null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}

function qf(a, b) {
  var c = a.alternate;
  null !== c && b === c.updateQueue && (b = a.updateQueue = lf(b));
  return b;
}

function rf(a, b, c, d, e, f) {
  switch (c.tag) {
    case 1:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

    case 3:
      a.effectTag = a.effectTag & -2049 | 64;

    case 0:
      a = c.payload;
      e = "function" === typeof a ? a.call(f, d, e) : a;
      if (null === e || void 0 === e) break;
      return n({}, d, e);

    case 2:
      jf = !0;
  }

  return d;
}

function sf(a, b, c, d, e) {
  jf = !1;
  b = qf(a, b);

  for (var f = b.baseState, g = null, h = 0, k = b.firstUpdate, l = f; null !== k;) {
    var m = k.expirationTime;
    m < e ? (null === g && (g = k, f = l), h < m && (h = m)) : (l = rf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k)));
    k = k.next;
  }

  m = null;

  for (k = b.firstCapturedUpdate; null !== k;) {
    var q = k.expirationTime;
    q < e ? (null === m && (m = k, null === g && (f = l)), h < q && (h = q)) : (l = rf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k)));
    k = k.next;
  }

  null === g && (b.lastUpdate = null);
  null === m ? b.lastCapturedUpdate = null : a.effectTag |= 32;
  null === g && null === m && (f = l);
  b.baseState = f;
  b.firstUpdate = g;
  b.firstCapturedUpdate = m;
  a.expirationTime = h;
  a.memoizedState = l;
}

function tf(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
  uf(b.firstEffect, c);
  b.firstEffect = b.lastEffect = null;
  uf(b.firstCapturedEffect, c);
  b.firstCapturedEffect = b.lastCapturedEffect = null;
}

function uf(a, b) {
  for (; null !== a;) {
    var c = a.callback;

    if (null !== c) {
      a.callback = null;
      var d = b;
      "function" !== typeof c ? t("191", c) : void 0;
      c.call(d);
    }

    a = a.nextEffect;
  }
}

function vf(a, b) {
  return {
    value: a,
    source: b,
    stack: nc(b)
  };
}

var wf = {
  current: null
},
    xf = null,
    yf = null,
    zf = null;

function Af(a, b) {
  var c = a.type._context;
  I(wf, c._currentValue, a);
  c._currentValue = b;
}

function Bf(a) {
  var b = wf.current;
  H(wf, a);
  a.type._context._currentValue = b;
}

function Cf(a) {
  xf = a;
  zf = yf = null;
  a.firstContextDependency = null;
}

function Df(a, b) {
  if (zf !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) zf = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };
    null === yf ? (null === xf ? t("293") : void 0, xf.firstContextDependency = yf = b) : yf = yf.next = b;
  }

  return a._currentValue;
}

var Ef = {},
    N = {
  current: Ef
},
    Ff = {
  current: Ef
},
    Gf = {
  current: Ef
};

function Hf(a) {
  a === Ef ? t("174") : void 0;
  return a;
}

function If(a, b) {
  I(Gf, b, a);
  I(Ff, a, a);
  I(N, Ef, a);
  var c = b.nodeType;

  switch (c) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : me(null, "");
      break;

    default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = me(b, c);
  }

  H(N, a);
  I(N, b, a);
}

function Jf(a) {
  H(N, a);
  H(Ff, a);
  H(Gf, a);
}

function Kf(a) {
  Hf(Gf.current);
  var b = Hf(N.current);
  var c = me(b, a.type);
  b !== c && (I(Ff, a, a), I(N, c, a));
}

function Lf(a) {
  Ff.current === a && (H(N, a), H(Ff, a));
}

function O(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;

    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }

  return b;
}

function Mf(a) {
  var b = a._result;

  switch (a._status) {
    case 1:
      return b;

    case 2:
      throw b;

    case 0:
      throw b;

    default:
      throw a._status = 0, b = a._ctor, b = b(), b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      }), a._result = b, b;
  }
}

var Nf = Xb.ReactCurrentOwner,
    Of = new aa.Component().refs;

function Pf(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  d = a.updateQueue;
  null !== d && 0 === a.expirationTime && (d.baseState = c);
}

var Uf = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? 2 === kd(a) : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Qf();
    d = Rf(d, a);
    var e = mf(d);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    Sf();
    of(a, e);
    Tf(a, d);
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Qf();
    d = Rf(d, a);
    var e = mf(d);
    e.tag = 1;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    Sf();
    of(a, e);
    Tf(a, d);
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;
    var c = Qf();
    c = Rf(c, a);
    var d = mf(c);
    d.tag = 2;
    void 0 !== b && null !== b && (d.callback = b);
    Sf();
    of(a, d);
    Tf(a, c);
  }
};

function Vf(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !jd(c, d) || !jd(e, f) : !0;
}

function Wf(a, b, c) {
  var d = !1,
      e = Je;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = Nf.currentDispatcher.readContext(f) : (e = L(b) ? Ke : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Le(a, e) : Je);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Uf;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function Xf(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Uf.enqueueReplaceState(b, b.state, null);
}

function Yf(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Of;
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = Nf.currentDispatcher.readContext(f) : (f = L(b) ? Ke : J.current, e.context = Le(a, f));
  f = a.updateQueue;
  null !== f && (sf(a, f, c, e, d), e.state = a.memoizedState);
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Pf(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Uf.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (sf(a, f, c, e, d), e.state = a.memoizedState));
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var Zf = Array.isArray;

function $f(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      var d = void 0;
      c && (1 !== c.tag ? t("289") : void 0, d = c.stateNode);
      d ? void 0 : t("147", a);
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function b(a) {
        var b = d.refs;
        b === Of && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    "string" !== typeof a ? t("284") : void 0;
    c._owner ? void 0 : t("290", a);
  }

  return a;
}

function ag(a, b) {
  "textarea" !== a.type && t("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}

function bg(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) {
      b(c, d), d = d.sibling;
    }

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }

    return a;
  }

  function e(a, b, c) {
    a = Ze(a, b, c);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }

  function g(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }

  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = cf(c, a.mode, d), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = $f(a, b, c), d.return = a, d;
    d = $e(c.type, c.key, c.props, null, a.mode, d);
    d.ref = $f(a, b, c);
    d.return = a;
    return d;
  }

  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = df(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || [], d);
    b.return = a;
    return b;
  }

  function m(a, b, c, d, g) {
    if (null === b || 7 !== b.tag) return b = af(c, a.mode, d, g), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function q(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = cf("" + b, a.mode, c), b.return = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Zb:
          return c = $e(b.type, b.key, b.props, null, a.mode, c), c.ref = $f(a, null, b), c.return = a, c;

        case $b:
          return b = df(b, a.mode, c), b.return = a, b;
      }

      if (Zf(b) || lc(b)) return b = af(b, a.mode, c, null), b.return = a, b;
      ag(a, b);
    }

    return null;
  }

  function x(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Zb:
          return c.key === e ? c.type === ac ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

        case $b:
          return c.key === e ? l(a, b, c, d) : null;
      }

      if (Zf(c) || lc(c)) return null !== e ? null : m(a, b, c, d, null);
      ag(a, c);
    }

    return null;
  }

  function z(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Zb:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === ac ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);

        case $b:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
      }

      if (Zf(d) || lc(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      ag(b, d);
    }

    return null;
  }

  function B(e, g, h, k) {
    for (var l = null, r = null, m = g, u = g = 0, p = null; null !== m && u < h.length; u++) {
      m.index > u ? (p = m, m = null) : p = m.sibling;
      var v = x(e, m, h[u], k);

      if (null === v) {
        null === m && (m = p);
        break;
      }

      a && m && null === v.alternate && b(e, m);
      g = f(v, g, u);
      null === r ? l = v : r.sibling = v;
      r = v;
      m = p;
    }

    if (u === h.length) return c(e, m), l;

    if (null === m) {
      for (; u < h.length; u++) {
        if (m = q(e, h[u], k)) g = f(m, g, u), null === r ? l = m : r.sibling = m, r = m;
      }

      return l;
    }

    for (m = d(e, m); u < h.length; u++) {
      if (p = z(m, e, u, h[u], k)) a && null !== p.alternate && m.delete(null === p.key ? u : p.key), g = f(p, g, u), null === r ? l = p : r.sibling = p, r = p;
    }

    a && m.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  function Q(e, g, h, k) {
    var l = lc(h);
    "function" !== typeof l ? t("150") : void 0;
    h = l.call(h);
    null == h ? t("151") : void 0;

    for (var m = l = null, r = g, u = g = 0, p = null, v = h.next(); null !== r && !v.done; u++, v = h.next()) {
      r.index > u ? (p = r, r = null) : p = r.sibling;
      var y = x(e, r, v.value, k);

      if (null === y) {
        r || (r = p);
        break;
      }

      a && r && null === y.alternate && b(e, r);
      g = f(y, g, u);
      null === m ? l = y : m.sibling = y;
      m = y;
      r = p;
    }

    if (v.done) return c(e, r), l;

    if (null === r) {
      for (; !v.done; u++, v = h.next()) {
        v = q(e, v.value, k), null !== v && (g = f(v, g, u), null === m ? l = v : m.sibling = v, m = v);
      }

      return l;
    }

    for (r = d(e, r); !v.done; u++, v = h.next()) {
      v = z(r, e, u, v.value, k), null !== v && (a && null !== v.alternate && r.delete(null === v.key ? u : v.key), g = f(v, g, u), null === m ? l = v : m.sibling = v, m = v);
    }

    a && r.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === ac && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Zb:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === ac : k.elementType === f.type) {
                c(a, k.sibling);
                d = e(k, f.type === ac ? f.props.children : f.props, h);
                d.ref = $f(a, k, f);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, k);
                break;
              }
            } else b(a, k);
            k = k.sibling;
          }

          f.type === ac ? (d = af(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $e(f.type, f.key, f.props, null, a.mode, h), h.ref = $f(a, d, f), h.return = a, a = h);
        }

        return g(a);

      case $b:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || [], h);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              }
            } else b(a, d);
            d = d.sibling;
          }

          d = df(f, a.mode, h);
          d.return = a;
          a = d;
        }

        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = cf(f, a.mode, h), d.return = a, a = d), g(a);
    if (Zf(f)) return B(a, d, f, h);
    if (lc(f)) return Q(a, d, f, h);
    l && ag(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        h = a.type, t("152", h.displayName || h.name || "Component");
    }
    return c(a, d);
  };
}

var cg = bg(!0),
    dg = bg(!1),
    eg = null,
    fg = null,
    gg = !1;

function hg(a, b) {
  var c = M(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function ig(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    default:
      return !1;
  }
}

function jg(a) {
  if (gg) {
    var b = fg;

    if (b) {
      var c = b;

      if (!ig(a, b)) {
        b = Fe(c);

        if (!b || !ig(a, b)) {
          a.effectTag |= 2;
          gg = !1;
          eg = a;
          return;
        }

        hg(eg, c);
      }

      eg = a;
      fg = Ge(b);
    } else a.effectTag |= 2, gg = !1, eg = a;
  }
}

function kg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag;) {
    a = a.return;
  }

  eg = a;
}

function lg(a) {
  if (a !== eg) return !1;
  if (!gg) return kg(a), gg = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !Ce(b, a.memoizedProps)) for (b = fg; b;) {
    hg(a, b), b = Fe(b);
  }
  kg(a);
  fg = eg ? Fe(a.stateNode) : null;
  return !0;
}

function mg() {
  fg = eg = null;
  gg = !1;
}

var ng = Xb.ReactCurrentOwner;

function P(a, b, c, d) {
  b.child = null === a ? dg(b, null, c, d) : cg(b, a.child, c, d);
}

function og(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Cf(b, e);
  d = c(d, f);
  b.effectTag |= 1;
  P(a, b, d, e);
  return b.child;
}

function pg(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !Xe(g) && void 0 === g.defaultProps && null === c.compare) return b.tag = 15, b.type = g, qg(a, b, g, d, e, f);
    a = $e(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : jd, c(e, d) && a.ref === b.ref)) return rg(a, b, f);
  b.effectTag |= 1;
  a = Ze(g, d, f);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}

function qg(a, b, c, d, e, f) {
  return null !== a && e < f && jd(a.memoizedProps, d) && a.ref === b.ref ? rg(a, b, f) : sg(a, b, c, d, f);
}

function tg(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function sg(a, b, c, d, e) {
  var f = L(c) ? Ke : J.current;
  f = Le(b, f);
  Cf(b, e);
  c = c(d, f);
  b.effectTag |= 1;
  P(a, b, c, e);
  return b.child;
}

function ug(a, b, c, d, e) {
  if (L(c)) {
    var f = !0;
    Qe(b);
  } else f = !1;

  Cf(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Wf(b, c, d, e), Yf(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;
    g.props = h;
    var k = g.context,
        l = c.contextType;
    "object" === typeof l && null !== l ? l = Nf.currentDispatcher.readContext(l) : (l = L(c) ? Ke : J.current, l = Le(b, l));
    var m = c.getDerivedStateFromProps,
        q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Xf(b, g, d, l);
    jf = !1;
    var x = b.memoizedState;
    k = g.state = x;
    var z = b.updateQueue;
    null !== z && (sf(b, z, d, g, e), k = b.memoizedState);
    h !== d || x !== k || K.current || jf ? ("function" === typeof m && (Pf(b, c, m, d), k = b.memoizedState), (h = jf || Vf(b, c, h, d, x, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, h = b.memoizedProps, g.props = b.type === b.elementType ? h : O(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = Nf.currentDispatcher.readContext(l) : (l = L(c) ? Ke : J.current, l = Le(b, l)), m = c.getDerivedStateFromProps, (q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Xf(b, g, d, l), jf = !1, k = b.memoizedState, x = g.state = k, z = b.updateQueue, null !== z && (sf(b, z, d, g, e), x = b.memoizedState), h !== d || k !== x || K.current || jf ? ("function" === typeof m && (Pf(b, c, m, d), x = b.memoizedState), (m = jf || Vf(b, c, h, d, k, x, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
  return vg(a, b, c, d, f, e);
}

function vg(a, b, c, d, e, f) {
  tg(a, b);
  var g = 0 !== (b.effectTag & 64);
  if (!d && !g) return e && Re(b, c, !1), rg(a, b, f);
  d = b.stateNode;
  ng.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = cg(b, a.child, null, f), b.child = cg(b, null, h, f)) : P(a, b, h, f);
  b.memoizedState = d.state;
  e && Re(b, c, !0);
  return b.child;
}

function wg(a) {
  var b = a.stateNode;
  b.pendingContext ? Oe(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Oe(a, b.context, !1);
  If(a, b.containerInfo);
}

function xg(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = b.memoizedState;

  if (0 === (b.effectTag & 64)) {
    f = null;
    var g = !1;
  } else f = {
    timedOutAt: null !== f ? f.timedOutAt : 0
  }, g = !0, b.effectTag &= -65;

  null === a ? g ? (g = e.fallback, e = af(null, d, 0, null), 0 === (b.mode & 1) && (e.child = null !== b.memoizedState ? b.child.child : b.child), d = af(g, d, c, null), e.sibling = d, c = e, c.return = d.return = b) : c = d = dg(b, null, e.children, c) : null !== a.memoizedState ? (d = a.child, a = d.sibling, g ? (c = e.fallback, e = Ze(d, d.pendingProps, 0), 0 === (b.mode & 1) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== d.child && (e.child = g)), d = e.sibling = Ze(a, c, a.expirationTime), c = e, e.childExpirationTime = 0, c.return = d.return = b) : c = d = cg(b, d.child, e.children, c)) : (a = a.child, g ? (g = e.fallback, e = af(null, d, 0, null), e.child = a, 0 === (b.mode & 1) && (e.child = null !== b.memoizedState ? b.child.child : b.child), d = e.sibling = af(g, d, c, null), d.effectTag |= 2, c = e, e.childExpirationTime = 0, c.return = d.return = b) : d = c = cg(b, a, e.children, c));
  b.memoizedState = f;
  b.child = c;
  return d;
}

function rg(a, b, c) {
  null !== a && (b.firstContextDependency = a.firstContextDependency);
  if (b.childExpirationTime < c) return null;
  null !== a && b.child !== a.child ? t("153") : void 0;

  if (null !== b.child) {
    a = b.child;
    c = Ze(a, a.pendingProps, a.expirationTime);
    b.child = c;

    for (c.return = b; null !== a.sibling;) {
      a = a.sibling, c = c.sibling = Ze(a, a.pendingProps, a.expirationTime), c.return = b;
    }

    c.sibling = null;
  }

  return b.child;
}

function yg(a, b, c) {
  var d = b.expirationTime;

  if (null !== a && a.memoizedProps === b.pendingProps && !K.current && d < c) {
    switch (b.tag) {
      case 3:
        wg(b);
        mg();
        break;

      case 5:
        Kf(b);
        break;

      case 1:
        L(b.type) && Qe(b);
        break;

      case 4:
        If(b, b.stateNode.containerInfo);
        break;

      case 10:
        Af(b, b.memoizedProps.value);
        break;

      case 13:
        if (null !== b.memoizedState) {
          d = b.child.childExpirationTime;
          if (0 !== d && d >= c) return xg(a, b, c);
          b = rg(a, b, c);
          return null !== b ? b.sibling : null;
        }

    }

    return rg(a, b, c);
  }

  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      var e = Le(b, J.current);
      Cf(b, c);
      e = d(a, e);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;

        if (L(d)) {
          var f = !0;
          Qe(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Pf(b, d, g, a);
        e.updater = Uf;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Yf(b, d, a, c);
        b = vg(null, b, d, !0, f, c);
      } else b.tag = 0, P(null, b, e, c), b = b.child;

      return b;

    case 16:
      e = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      f = b.pendingProps;
      a = Mf(e);
      b.type = a;
      e = b.tag = Ye(a);
      f = O(a, f);
      g = void 0;

      switch (e) {
        case 0:
          g = sg(null, b, a, f, c);
          break;

        case 1:
          g = ug(null, b, a, f, c);
          break;

        case 11:
          g = og(null, b, a, f, c);
          break;

        case 14:
          g = pg(null, b, a, O(a.type, f), d, c);
          break;

        default:
          t("283", a);
      }

      return g;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : O(d, e), sg(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : O(d, e), ug(a, b, d, e, c);

    case 3:
      wg(b);
      d = b.updateQueue;
      null === d ? t("282") : void 0;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      sf(b, d, b.pendingProps, null, c);
      d = b.memoizedState.element;
      if (d === e) mg(), b = rg(a, b, c);else {
        e = b.stateNode;
        if (e = (null === a || null === a.child) && e.hydrate) fg = Ge(b.stateNode.containerInfo), eg = b, e = gg = !0;
        e ? (b.effectTag |= 2, b.child = dg(b, null, d, c)) : (P(a, b, d, c), mg());
        b = b.child;
      }
      return b;

    case 5:
      return Kf(b), null === a && jg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ce(d, e) ? g = null : null !== f && Ce(d, f) && (b.effectTag |= 16), tg(a, b), 1 !== c && b.mode & 1 && e.hidden ? (b.expirationTime = 1, b = null) : (P(a, b, g, c), b = b.child), b;

    case 6:
      return null === a && jg(b), null;

    case 13:
      return xg(a, b, c);

    case 4:
      return If(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = cg(b, null, d, c) : P(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : O(d, e), og(a, b, d, e, c);

    case 7:
      return P(a, b, b.pendingProps, c), b.child;

    case 8:
      return P(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return P(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        Af(b, f);

        if (null !== g) {
          var h = g.value;
          f = h === f && (0 !== h || 1 / h === 1 / f) || h !== h && f !== f ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

          if (0 === f) {
            if (g.children === e.children && !K.current) {
              b = rg(a, b, c);
              break a;
            }
          } else for (g = b.child, null !== g && (g.return = b); null !== g;) {
            h = g.firstContextDependency;

            if (null !== h) {
              do {
                if (h.context === d && 0 !== (h.observedBits & f)) {
                  if (1 === g.tag) {
                    var k = mf(c);
                    k.tag = 2;
                    of(g, k);
                  }

                  g.expirationTime < c && (g.expirationTime = c);
                  k = g.alternate;
                  null !== k && k.expirationTime < c && (k.expirationTime = c);

                  for (var l = g.return; null !== l;) {
                    k = l.alternate;
                    if (l.childExpirationTime < c) l.childExpirationTime = c, null !== k && k.childExpirationTime < c && (k.childExpirationTime = c);else if (null !== k && k.childExpirationTime < c) k.childExpirationTime = c;else break;
                    l = l.return;
                  }
                }

                k = g.child;
                h = h.next;
              } while (null !== h);
            } else k = 10 === g.tag ? g.type === b.type ? null : g.child : g.child;

            if (null !== k) k.return = g;else for (k = g; null !== k;) {
              if (k === b) {
                k = null;
                break;
              }

              g = k.sibling;

              if (null !== g) {
                g.return = k.return;
                k = g;
                break;
              }

              k = k.return;
            }
            g = k;
          }
        }

        P(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, Cf(b, c), e = Df(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, P(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = O(e.type, b.pendingProps), pg(a, b, e, f, d, c);

    case 15:
      return qg(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : O(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Qe(b)) : a = !1, Cf(b, c), Wf(b, d, e, c), Yf(b, d, e, c), vg(null, b, d, !0, a, c);

    default:
      t("156");
  }
}

function zg(a) {
  a.effectTag |= 4;
}

var Ag = void 0,
    Bg = void 0,
    Fg = void 0,
    Gg = void 0;

Ag = function Ag(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
};

Bg = function Bg() {};

Fg = function Fg(a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var g = b.stateNode;
    Hf(N.current);
    a = null;

    switch (c) {
      case "input":
        f = Ac(g, f);
        d = Ac(g, d);
        a = [];
        break;

      case "option":
        f = ee(g, f);
        d = ee(g, d);
        a = [];
        break;

      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = ge(g, f);
        d = ge(g, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = ye);
    }

    ve(c, d);
    g = c = void 0;
    var h = null;

    for (c in f) {
      if (!d.hasOwnProperty(c) && f.hasOwnProperty(c) && null != f[c]) if ("style" === c) {
        var k = f[c];

        for (g in k) {
          k.hasOwnProperty(g) && (h || (h = {}), h[g] = "");
        }
      } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (sa.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    }

    for (c in d) {
      var l = d[c];
      k = null != f ? f[c] : void 0;
      if (d.hasOwnProperty(c) && l !== k && (null != l || null != k)) if ("style" === c) {
        if (k) {
          for (g in k) {
            !k.hasOwnProperty(g) || l && l.hasOwnProperty(g) || (h || (h = {}), h[g] = "");
          }

          for (g in l) {
            l.hasOwnProperty(g) && k[g] !== l[g] && (h || (h = {}), h[g] = l[g]);
          }
        } else h || (a || (a = []), a.push(c, h)), h = l;
      } else "dangerouslySetInnerHTML" === c ? (l = l ? l.__html : void 0, k = k ? k.__html : void 0, null != l && k !== l && (a = a || []).push(c, "" + l)) : "children" === c ? k === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(c, "" + l) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (sa.hasOwnProperty(c) ? (null != l && xe(e, c), a || k === l || (a = [])) : (a = a || []).push(c, l));
    }

    h && (a = a || []).push("style", h);
    e = a;
    (b.updateQueue = e) && zg(b);
  }
};

Gg = function Gg(a, b, c, d) {
  c !== d && zg(b);
};

function Hg(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = nc(c));
  null !== c && mc(c.type);
  b = b.value;
  null !== a && 1 === a.tag && mc(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}

function Ig(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    Jg(a, c);
  } else b.current = null;
}

function Kg(a) {
  "function" === typeof Te && Te(a);

  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      var b = a.updateQueue;

      if (null !== b && (b = b.lastEffect, null !== b)) {
        var c = b = b.next;

        do {
          var d = c.destroy;

          if (null !== d) {
            var e = a;

            try {
              d();
            } catch (f) {
              Jg(e, f);
            }
          }

          c = c.next;
        } while (c !== b);
      }

      break;

    case 1:
      Ig(a);
      b = a.stateNode;
      if ("function" === typeof b.componentWillUnmount) try {
        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
      } catch (f) {
        Jg(a, f);
      }
      break;

    case 5:
      Ig(a);
      break;

    case 4:
      Lg(a);
  }
}

function Mg(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function Ng(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (Mg(b)) {
        var c = b;
        break a;
      }

      b = b.return;
    }

    t("160");
    c = void 0;
  }

  var d = b = void 0;

  switch (c.tag) {
    case 5:
      b = c.stateNode;
      d = !1;
      break;

    case 3:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    case 4:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    default:
      t("161");
  }

  c.effectTag & 16 && (pe(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || Mg(c.return)) {
        c = null;
        break a;
      }

      c = c.return;
    }

    c.sibling.return = c.return;

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }

    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }

  for (var e = a;;) {
    if (5 === e.tag || 6 === e.tag) {
      if (c) {
        if (d) {
          var f = b,
              g = e.stateNode,
              h = c;
          8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
        } else b.insertBefore(e.stateNode, c);
      } else d ? (g = b, h = e.stateNode, 8 === g.nodeType ? (f = g.parentNode, f.insertBefore(h, g)) : (f = g, f.appendChild(h)), g = g._reactRootContainer, null !== g && void 0 !== g || null !== f.onclick || (f.onclick = ye)) : b.appendChild(e.stateNode);
    } else if (4 !== e.tag && null !== e.child) {
      e.child.return = e;
      e = e.child;
      continue;
    }
    if (e === a) break;

    for (; null === e.sibling;) {
      if (null === e.return || e.return === a) return;
      e = e.return;
    }

    e.sibling.return = e.return;
    e = e.sibling;
  }
}

function Lg(a) {
  for (var b = a, c = !1, d = void 0, e = void 0;;) {
    if (!c) {
      c = b.return;

      a: for (;;) {
        null === c ? t("160") : void 0;

        switch (c.tag) {
          case 5:
            d = c.stateNode;
            e = !1;
            break a;

          case 3:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;

          case 4:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;
        }

        c = c.return;
      }

      c = !0;
    }

    if (5 === b.tag || 6 === b.tag) {
      a: for (var f = b, g = f;;) {
        if (Kg(g), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;else {
          if (g === f) break;

          for (; null === g.sibling;) {
            if (null === g.return || g.return === f) break a;
            g = g.return;
          }

          g.sibling.return = g.return;
          g = g.sibling;
        }
      }

      e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
    } else if (4 === b.tag ? (d = b.stateNode.containerInfo, e = !0) : Kg(b), null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return;
      b = b.return;
      4 === b.tag && (c = !1);
    }

    b.sibling.return = b.return;
    b = b.sibling;
  }
}

function Og(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      break;

    case 1:
      break;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;

        if (null !== f) {
          c[Ha] = d;
          "input" === a && "radio" === d.type && null != d.name && Cc(c, d);
          we(a, e);
          b = we(a, d);

          for (e = 0; e < f.length; e += 2) {
            var g = f[e],
                h = f[e + 1];
            "style" === g ? te(c, h) : "dangerouslySetInnerHTML" === g ? oe(c, h) : "children" === g ? pe(c, h) : yc(c, g, h, b);
          }

          switch (a) {
            case "input":
              Dc(c, d);
              break;

            case "textarea":
              ie(c, d);
              break;

            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? fe(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? fe(c, !!d.multiple, d.defaultValue, !0) : fe(c, !!d.multiple, d.multiple ? [] : "", !1));
          }
        }
      }

      break;

    case 6:
      null === b.stateNode ? t("162") : void 0;
      b.stateNode.nodeValue = b.memoizedProps;
      break;

    case 3:
      break;

    case 12:
      break;

    case 13:
      c = b.memoizedState;
      a = b;
      null === c ? d = !1 : (d = !0, a = b.child, 0 === c.timedOutAt && (c.timedOutAt = Qf()));
      if (null !== a) a: for (b = c = a;;) {
        if (5 === b.tag) a = b.stateNode, d ? a.style.display = "none" : (a = b.stateNode, f = b.memoizedProps.style, f = void 0 !== f && null !== f && f.hasOwnProperty("display") ? f.display : null, a.style.display = se("display", f));else if (6 === b.tag) b.stateNode.nodeValue = d ? "" : b.memoizedProps;else if (13 === b.tag && null !== b.memoizedState) {
          a = b.child.sibling;
          a.return = b;
          b = a;
          continue;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === c) break a;

        for (; null === b.sibling;) {
          if (null === b.return || b.return === c) break a;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
      break;

    case 17:
      break;

    default:
      t("163");
  }
}

function Pg(a, b, c) {
  c = mf(c);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    Qg(d);
    Hg(a, b);
  };

  return c;
}

function Rg(a, b, c) {
  c = mf(c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === Sg ? Sg = new Set([this]) : Sg.add(this));
    var c = b.value,
        e = b.stack;
    Hg(a, b);
    this.componentDidCatch(c, {
      componentStack: null !== e ? e : ""
    });
  });
  return c;
}

function Tg(a) {
  switch (a.tag) {
    case 1:
      L(a.type) && Me(a);
      var b = a.effectTag;
      return b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 3:
      return Jf(a), Ne(a), b = a.effectTag, 0 !== (b & 64) ? t("285") : void 0, a.effectTag = b & -2049 | 64, a;

    case 5:
      return Lf(a), null;

    case 13:
      return b = a.effectTag, b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 4:
      return Jf(a), null;

    case 10:
      return Bf(a), null;

    default:
      return null;
  }
}

var Ug = {
  readContext: Df
},
    Vg = Xb.ReactCurrentOwner,
    Wg = 1073741822,
    Xg = 0,
    Yg = !1,
    R = null,
    S = null,
    T = 0,
    Zg = -1,
    $g = !1,
    U = null,
    ah = !1,
    bh = null,
    ch = null,
    Sg = null;

function dh() {
  if (null !== R) for (var a = R.return; null !== a;) {
    var b = a;

    switch (b.tag) {
      case 1:
        var c = b.type.childContextTypes;
        null !== c && void 0 !== c && Me(b);
        break;

      case 3:
        Jf(b);
        Ne(b);
        break;

      case 5:
        Lf(b);
        break;

      case 4:
        Jf(b);
        break;

      case 10:
        Bf(b);
    }

    a = a.return;
  }
  S = null;
  T = 0;
  Zg = -1;
  $g = !1;
  R = null;
}

function Sf() {
  null !== ch && (ba.unstable_cancelCallback(bh), ch());
}

function eh(a) {
  for (;;) {
    var b = a.alternate,
        c = a.return,
        d = a.sibling;

    if (0 === (a.effectTag & 1024)) {
      R = a;

      a: {
        var e = b;
        b = a;
        var f = T;
        var g = b.pendingProps;

        switch (b.tag) {
          case 2:
            break;

          case 16:
            break;

          case 15:
          case 0:
            break;

          case 1:
            L(b.type) && Me(b);
            break;

          case 3:
            Jf(b);
            Ne(b);
            g = b.stateNode;
            g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null);
            if (null === e || null === e.child) lg(b), b.effectTag &= -3;
            Bg(b);
            break;

          case 5:
            Lf(b);
            var h = Hf(Gf.current);
            f = b.type;
            if (null !== e && null != b.stateNode) Fg(e, b, f, g, h), e.ref !== b.ref && (b.effectTag |= 128);else if (g) {
              var k = Hf(N.current);

              if (lg(b)) {
                g = b;
                e = g.stateNode;
                var l = g.type,
                    m = g.memoizedProps,
                    q = h;
                e[Ga] = g;
                e[Ha] = m;
                f = void 0;
                h = l;

                switch (h) {
                  case "iframe":
                  case "object":
                    G("load", e);
                    break;

                  case "video":
                  case "audio":
                    for (l = 0; l < bb.length; l++) {
                      G(bb[l], e);
                    }

                    break;

                  case "source":
                    G("error", e);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", e);
                    G("load", e);
                    break;

                  case "form":
                    G("reset", e);
                    G("submit", e);
                    break;

                  case "details":
                    G("toggle", e);
                    break;

                  case "input":
                    Bc(e, m);
                    G("invalid", e);
                    xe(q, "onChange");
                    break;

                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    G("invalid", e);
                    xe(q, "onChange");
                    break;

                  case "textarea":
                    he(e, m), G("invalid", e), xe(q, "onChange");
                }

                ve(h, m);
                l = null;

                for (f in m) {
                  m.hasOwnProperty(f) && (k = m[f], "children" === f ? "string" === typeof k ? e.textContent !== k && (l = ["children", k]) : "number" === typeof k && e.textContent !== "" + k && (l = ["children", "" + k]) : sa.hasOwnProperty(f) && null != k && xe(q, f));
                }

                switch (h) {
                  case "input":
                    Vb(e);
                    Fc(e, m, !0);
                    break;

                  case "textarea":
                    Vb(e);
                    je(e, m);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof m.onClick && (e.onclick = ye);
                }

                f = l;
                g.updateQueue = f;
                g = null !== f ? !0 : !1;
                g && zg(b);
              } else {
                m = b;
                e = f;
                q = g;
                l = 9 === h.nodeType ? h : h.ownerDocument;
                k === ke.html && (k = le(e));
                k === ke.html ? "script" === e ? (e = l.createElement("div"), e.innerHTML = "<script>\x3c/script>", l = e.removeChild(e.firstChild)) : "string" === typeof q.is ? l = l.createElement(e, {
                  is: q.is
                }) : (l = l.createElement(e), "select" === e && q.multiple && (l.multiple = !0)) : l = l.createElementNS(k, e);
                e = l;
                e[Ga] = m;
                e[Ha] = g;
                Ag(e, b, !1, !1);
                q = e;
                l = f;
                m = g;
                var x = h,
                    z = we(l, m);

                switch (l) {
                  case "iframe":
                  case "object":
                    G("load", q);
                    h = m;
                    break;

                  case "video":
                  case "audio":
                    for (h = 0; h < bb.length; h++) {
                      G(bb[h], q);
                    }

                    h = m;
                    break;

                  case "source":
                    G("error", q);
                    h = m;
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", q);
                    G("load", q);
                    h = m;
                    break;

                  case "form":
                    G("reset", q);
                    G("submit", q);
                    h = m;
                    break;

                  case "details":
                    G("toggle", q);
                    h = m;
                    break;

                  case "input":
                    Bc(q, m);
                    h = Ac(q, m);
                    G("invalid", q);
                    xe(x, "onChange");
                    break;

                  case "option":
                    h = ee(q, m);
                    break;

                  case "select":
                    q._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    h = n({}, m, {
                      value: void 0
                    });
                    G("invalid", q);
                    xe(x, "onChange");
                    break;

                  case "textarea":
                    he(q, m);
                    h = ge(q, m);
                    G("invalid", q);
                    xe(x, "onChange");
                    break;

                  default:
                    h = m;
                }

                ve(l, h);
                k = void 0;
                var B = l,
                    Q = q,
                    v = h;

                for (k in v) {
                  if (v.hasOwnProperty(k)) {
                    var r = v[k];
                    "style" === k ? te(Q, r) : "dangerouslySetInnerHTML" === k ? (r = r ? r.__html : void 0, null != r && oe(Q, r)) : "children" === k ? "string" === typeof r ? ("textarea" !== B || "" !== r) && pe(Q, r) : "number" === typeof r && pe(Q, "" + r) : "suppressContentEditableWarning" !== k && "suppressHydrationWarning" !== k && "autoFocus" !== k && (sa.hasOwnProperty(k) ? null != r && xe(x, k) : null != r && yc(Q, k, r, z));
                  }
                }

                switch (l) {
                  case "input":
                    Vb(q);
                    Fc(q, m, !1);
                    break;

                  case "textarea":
                    Vb(q);
                    je(q, m);
                    break;

                  case "option":
                    null != m.value && q.setAttribute("value", "" + zc(m.value));
                    break;

                  case "select":
                    h = q;
                    h.multiple = !!m.multiple;
                    q = m.value;
                    null != q ? fe(h, !!m.multiple, q, !1) : null != m.defaultValue && fe(h, !!m.multiple, m.defaultValue, !0);
                    break;

                  default:
                    "function" === typeof h.onClick && (q.onclick = ye);
                }

                (g = Be(f, g)) && zg(b);
                b.stateNode = e;
              }

              null !== b.ref && (b.effectTag |= 128);
            } else null === b.stateNode ? t("166") : void 0;
            break;

          case 6:
            e && null != b.stateNode ? Gg(e, b, e.memoizedProps, g) : ("string" !== typeof g && (null === b.stateNode ? t("166") : void 0), e = Hf(Gf.current), Hf(N.current), lg(b) ? (g = b, f = g.stateNode, e = g.memoizedProps, f[Ga] = g, (g = f.nodeValue !== e) && zg(b)) : (f = b, g = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(g), g[Ga] = b, f.stateNode = g));
            break;

          case 11:
            break;

          case 13:
            g = b.memoizedState;

            if (0 !== (b.effectTag & 64)) {
              b.expirationTime = f;
              R = b;
              break a;
            }

            g = null !== g;
            f = null !== e && null !== e.memoizedState;
            null !== e && !g && f && (e = e.child.sibling, null !== e && (h = b.firstEffect, null !== h ? (b.firstEffect = e, e.nextEffect = h) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8));
            if (g !== f || 0 === (b.effectTag & 1) && g) b.effectTag |= 4;
            break;

          case 7:
            break;

          case 8:
            break;

          case 12:
            break;

          case 4:
            Jf(b);
            Bg(b);
            break;

          case 10:
            Bf(b);
            break;

          case 9:
            break;

          case 14:
            break;

          case 17:
            L(b.type) && Me(b);
            break;

          default:
            t("156");
        }

        R = null;
      }

      b = a;

      if (1 === T || 1 !== b.childExpirationTime) {
        g = 0;

        for (f = b.child; null !== f;) {
          e = f.expirationTime, h = f.childExpirationTime, e > g && (g = e), h > g && (g = h), f = f.sibling;
        }

        b.childExpirationTime = g;
      }

      if (null !== R) return R;
      null !== c && 0 === (c.effectTag & 1024) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));
    } else {
      a = Tg(a, T);
      if (null !== a) return a.effectTag &= 1023, a;
      null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 1024);
    }

    if (null !== d) return d;
    if (null !== c) a = c;else break;
  }

  return null;
}

function fh(a) {
  var b = yg(a.alternate, a, T);
  a.memoizedProps = a.pendingProps;
  null === b && (b = eh(a));
  Vg.current = null;
  return b;
}

function gh(a, b) {
  Yg ? t("243") : void 0;
  Sf();
  Yg = !0;
  Vg.currentDispatcher = Ug;
  var c = a.nextExpirationTimeToWorkOn;
  if (c !== T || a !== S || null === R) dh(), S = a, T = c, R = Ze(S.current, null, T), a.pendingCommitExpirationTime = 0;
  var d = !1;

  do {
    try {
      if (b) for (; null !== R && !hh();) {
        R = fh(R);
      } else for (; null !== R;) {
        R = fh(R);
      }
    } catch (B) {
      if (zf = yf = xf = null, null === R) d = !0, Qg(B);else {
        null === R ? t("271") : void 0;
        var e = R,
            f = e.return;
        if (null === f) d = !0, Qg(B);else {
          a: {
            var g = a,
                h = f,
                k = e,
                l = B;
            f = T;
            k.effectTag |= 1024;
            k.firstEffect = k.lastEffect = null;

            if (null !== l && "object" === typeof l && "function" === typeof l.then) {
              var m = l;
              l = h;
              var q = -1,
                  x = -1;

              do {
                if (13 === l.tag) {
                  var z = l.alternate;

                  if (null !== z && (z = z.memoizedState, null !== z)) {
                    x = 10 * (1073741822 - z.timedOutAt);
                    break;
                  }

                  z = l.pendingProps.maxDuration;
                  if ("number" === typeof z) if (0 >= z) q = 0;else if (-1 === q || z < q) q = z;
                }

                l = l.return;
              } while (null !== l);

              l = h;

              do {
                if (z = 13 === l.tag) z = void 0 === l.memoizedProps.fallback ? !1 : null === l.memoizedState;

                if (z) {
                  h = ih.bind(null, g, l, k, 0 === (l.mode & 1) ? 1073741823 : f);
                  m.then(h, h);

                  if (0 === (l.mode & 1)) {
                    l.effectTag |= 64;
                    k.effectTag &= -1957;
                    1 === k.tag && null === k.alternate && (k.tag = 17);
                    k.expirationTime = f;
                    break a;
                  }

                  -1 === q ? g = 1073741823 : (-1 === x && (x = 10 * (1073741822 - hf(g, f)) - 5E3), g = x + q);
                  0 <= g && Zg < g && (Zg = g);
                  l.effectTag |= 2048;
                  l.expirationTime = f;
                  break a;
                }

                l = l.return;
              } while (null !== l);

              l = Error((mc(k.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + nc(k));
            }

            $g = !0;
            l = vf(l, k);
            g = h;

            do {
              switch (g.tag) {
                case 3:
                  k = l;
                  g.effectTag |= 2048;
                  g.expirationTime = f;
                  f = Pg(g, k, f);
                  pf(g, f);
                  break a;

                case 1:
                  if (k = l, h = g.type, m = g.stateNode, 0 === (g.effectTag & 64) && ("function" === typeof h.getDerivedStateFromError || null !== m && "function" === typeof m.componentDidCatch && (null === Sg || !Sg.has(m)))) {
                    g.effectTag |= 2048;
                    g.expirationTime = f;
                    f = Rg(g, k, f);
                    pf(g, f);
                    break a;
                  }

              }

              g = g.return;
            } while (null !== g);
          }

          R = eh(e);
          continue;
        }
      }
    }

    break;
  } while (1);

  Yg = !1;
  zf = yf = xf = Vg.currentDispatcher = null;
  if (d) S = null, a.finishedWork = null;else if (null !== R) a.finishedWork = null;else {
    d = a.current.alternate;
    null === d ? t("281") : void 0;
    S = null;

    if ($g) {
      e = a.latestPendingTime;
      f = a.latestSuspendedTime;
      g = a.latestPingedTime;

      if (0 !== e && e < c || 0 !== f && f < c || 0 !== g && g < c) {
        gf(a, c);
        jh(a, d, c, a.expirationTime, -1);
        return;
      }

      if (!a.didError && b) {
        a.didError = !0;
        c = a.nextExpirationTimeToWorkOn = c;
        b = a.expirationTime = 1073741823;
        jh(a, d, c, b, -1);
        return;
      }
    }

    b && -1 !== Zg ? (gf(a, c), b = 10 * (1073741822 - hf(a, c)), b < Zg && (Zg = b), b = 10 * (1073741822 - Qf()), b = Zg - b, jh(a, d, c, a.expirationTime, 0 > b ? 0 : b)) : (a.pendingCommitExpirationTime = c, a.finishedWork = d);
  }
}

function Jg(a, b) {
  for (var c = a.return; null !== c;) {
    switch (c.tag) {
      case 1:
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Sg || !Sg.has(d))) {
          a = vf(b, a);
          a = Rg(c, a, 1073741823);
          of(c, a);
          Tf(c, 1073741823);
          return;
        }

        break;

      case 3:
        a = vf(b, a);
        a = Pg(c, a, 1073741823);
        of(c, a);
        Tf(c, 1073741823);
        return;
    }

    c = c.return;
  }

  3 === a.tag && (c = vf(b, a), c = Pg(a, c, 1073741823), of(a, c), Tf(a, 1073741823));
}

function Rf(a, b) {
  0 !== Xg ? a = Xg : Yg ? a = ah ? 1073741823 : T : b.mode & 1 ? (a = kh ? 1073741822 - 10 * (((1073741822 - a + 15) / 10 | 0) + 1) : 1073741822 - 25 * (((1073741822 - a + 500) / 25 | 0) + 1), null !== S && a === T && --a) : a = 1073741823;
  kh && (0 === lh || a < lh) && (lh = a);
  return a;
}

function ih(a, b, c, d) {
  var e = a.earliestSuspendedTime;
  var f = a.latestSuspendedTime;

  if (0 !== e && d <= e && d >= f) {
    f = e = d;
    a.didError = !1;
    var g = a.latestPingedTime;
    if (0 === g || g > f) a.latestPingedTime = f;
    ff(f, a);
  } else e = Qf(), e = Rf(e, b), ef(a, e);

  0 !== (b.mode & 1) && a === S && T === d && (S = null);
  mh(b, e);
  0 === (b.mode & 1) && (mh(c, e), 1 === c.tag && null !== c.stateNode && (b = mf(e), b.tag = 2, of(c, b)));
  c = a.expirationTime;
  0 !== c && nh(a, c);
}

function mh(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d.return;
  }
  return e;
}

function Tf(a, b) {
  a = mh(a, b);
  null !== a && (!Yg && 0 !== T && b > T && dh(), ef(a, b), Yg && !ah && S === a || nh(a, a.expirationTime), oh > ph && (oh = 0, t("185")));
}

function qh(a, b, c, d, e) {
  var f = Xg;
  Xg = 1073741823;

  try {
    return a(b, c, d, e);
  } finally {
    Xg = f;
  }
}

var rh = null,
    V = null,
    sh = 0,
    th = void 0,
    W = !1,
    uh = null,
    X = 0,
    lh = 0,
    vh = !1,
    wh = null,
    Z = !1,
    xh = !1,
    kh = !1,
    yh = null,
    zh = ba.unstable_now(),
    Ah = 1073741822 - (zh / 10 | 0),
    Bh = Ah,
    ph = 50,
    oh = 0,
    Ch = null;

function Dh() {
  Ah = 1073741822 - ((ba.unstable_now() - zh) / 10 | 0);
}

function Eh(a, b) {
  if (0 !== sh) {
    if (b < sh) return;
    null !== th && ba.unstable_cancelCallback(th);
  }

  sh = b;
  a = ba.unstable_now() - zh;
  th = ba.unstable_scheduleCallback(Fh, {
    timeout: 10 * (1073741822 - b) - a
  });
}

function jh(a, b, c, d, e) {
  a.expirationTime = d;
  0 !== e || hh() ? 0 < e && (a.timeoutHandle = De(Gh.bind(null, a, b, c), e)) : (a.pendingCommitExpirationTime = c, a.finishedWork = b);
}

function Gh(a, b, c) {
  a.pendingCommitExpirationTime = c;
  a.finishedWork = b;
  Dh();
  Bh = Ah;
  Hh(a, c);
}

function Qf() {
  if (W) return Bh;
  Ih();
  if (0 === X || 1 === X) Dh(), Bh = Ah;
  return Bh;
}

function nh(a, b) {
  null === a.nextScheduledRoot ? (a.expirationTime = b, null === V ? (rh = V = a, a.nextScheduledRoot = a) : (V = V.nextScheduledRoot = a, V.nextScheduledRoot = rh)) : b > a.expirationTime && (a.expirationTime = b);
  W || (Z ? xh && (uh = a, X = 1073741823, Jh(a, 1073741823, !1)) : 1073741823 === b ? Kh(1073741823, !1) : Eh(a, b));
}

function Ih() {
  var a = 0,
      b = null;
  if (null !== V) for (var c = V, d = rh; null !== d;) {
    var e = d.expirationTime;

    if (0 === e) {
      null === c || null === V ? t("244") : void 0;

      if (d === d.nextScheduledRoot) {
        rh = V = d.nextScheduledRoot = null;
        break;
      } else if (d === rh) rh = e = d.nextScheduledRoot, V.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === V) {
        V = c;
        V.nextScheduledRoot = rh;
        d.nextScheduledRoot = null;
        break;
      } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;

      d = c.nextScheduledRoot;
    } else {
      e > a && (a = e, b = d);
      if (d === V) break;
      if (1073741823 === a) break;
      c = d;
      d = d.nextScheduledRoot;
    }
  }
  uh = b;
  X = a;
}

var Lh = !1;

function hh() {
  return Lh ? !0 : ba.unstable_shouldYield() ? Lh = !0 : !1;
}

function Fh() {
  try {
    if (!hh() && null !== rh) {
      Dh();
      var a = rh;

      do {
        var b = a.expirationTime;
        0 !== b && Ah <= b && (a.nextExpirationTimeToWorkOn = Ah);
        a = a.nextScheduledRoot;
      } while (a !== rh);
    }

    Kh(0, !0);
  } finally {
    Lh = !1;
  }
}

function Kh(a, b) {
  Ih();
  if (b) for (Dh(), Bh = Ah; null !== uh && 0 !== X && a <= X && !(Lh && Ah > X);) {
    Jh(uh, X, Ah > X), Ih(), Dh(), Bh = Ah;
  } else for (; null !== uh && 0 !== X && a <= X;) {
    Jh(uh, X, !1), Ih();
  }
  b && (sh = 0, th = null);
  0 !== X && Eh(uh, X);
  oh = 0;
  Ch = null;
  if (null !== yh) for (a = yh, yh = null, b = 0; b < a.length; b++) {
    var c = a[b];

    try {
      c._onComplete();
    } catch (d) {
      vh || (vh = !0, wh = d);
    }
  }
  if (vh) throw a = wh, wh = null, vh = !1, a;
}

function Hh(a, b) {
  W ? t("253") : void 0;
  uh = a;
  X = b;
  Jh(a, b, !1);
  Kh(1073741823, !1);
}

function Jh(a, b, c) {
  W ? t("245") : void 0;
  W = !0;

  if (c) {
    var d = a.finishedWork;
    null !== d ? Mh(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, Ee(d)), gh(a, c), d = a.finishedWork, null !== d && (hh() ? a.finishedWork = d : Mh(a, d, b)));
  } else d = a.finishedWork, null !== d ? Mh(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, Ee(d)), gh(a, c), d = a.finishedWork, null !== d && Mh(a, d, b));

  W = !1;
}

function Mh(a, b, c) {
  var d = a.firstBatch;

  if (null !== d && d._expirationTime >= c && (null === yh ? yh = [d] : yh.push(d), d._defer)) {
    a.finishedWork = b;
    a.expirationTime = 0;
    return;
  }

  a.finishedWork = null;
  a === Ch ? oh++ : (Ch = a, oh = 0);
  ah = Yg = !0;
  a.current === b ? t("177") : void 0;
  c = a.pendingCommitExpirationTime;
  0 === c ? t("261") : void 0;
  a.pendingCommitExpirationTime = 0;
  d = b.expirationTime;
  var e = b.childExpirationTime;
  d = e > d ? e : d;
  a.didError = !1;
  0 === d ? (a.earliestPendingTime = 0, a.latestPendingTime = 0, a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0) : (e = a.latestPendingTime, 0 !== e && (e > d ? a.earliestPendingTime = a.latestPendingTime = 0 : a.earliestPendingTime > d && (a.earliestPendingTime = a.latestPendingTime)), e = a.earliestSuspendedTime, 0 === e ? ef(a, d) : d < a.latestSuspendedTime ? (a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0, ef(a, d)) : d > e && ef(a, d));
  ff(0, a);
  Vg.current = null;
  1 < b.effectTag ? null !== b.lastEffect ? (b.lastEffect.nextEffect = b, d = b.firstEffect) : d = b : d = b.firstEffect;
  ze = Hd;
  e = Td();

  if (Ud(e)) {
    if ("selectionStart" in e) var f = {
      start: e.selectionStart,
      end: e.selectionEnd
    };else a: {
      f = (f = e.ownerDocument) && f.defaultView || window;
      var g = f.getSelection && f.getSelection();

      if (g && 0 !== g.rangeCount) {
        f = g.anchorNode;
        var h = g.anchorOffset,
            k = g.focusNode;
        g = g.focusOffset;

        try {
          f.nodeType, k.nodeType;
        } catch (db) {
          f = null;
          break a;
        }

        var l = 0,
            m = -1,
            q = -1,
            x = 0,
            z = 0,
            B = e,
            Q = null;

        b: for (;;) {
          for (var v;;) {
            B !== f || 0 !== h && 3 !== B.nodeType || (m = l + h);
            B !== k || 0 !== g && 3 !== B.nodeType || (q = l + g);
            3 === B.nodeType && (l += B.nodeValue.length);
            if (null === (v = B.firstChild)) break;
            Q = B;
            B = v;
          }

          for (;;) {
            if (B === e) break b;
            Q === f && ++x === h && (m = l);
            Q === k && ++z === g && (q = l);
            if (null !== (v = B.nextSibling)) break;
            B = Q;
            Q = B.parentNode;
          }

          B = v;
        }

        f = -1 === m || -1 === q ? null : {
          start: m,
          end: q
        };
      } else f = null;
    }
    f = f || {
      start: 0,
      end: 0
    };
  } else f = null;

  Ae = {
    focusedElem: e,
    selectionRange: f
  };
  Hd = !1;

  for (U = d; null !== U;) {
    e = !1;
    f = void 0;

    try {
      for (; null !== U;) {
        if (U.effectTag & 256) a: {
          var r = U.alternate;
          h = U;

          switch (h.tag) {
            case 0:
            case 11:
            case 15:
              break a;

            case 1:
              if (h.effectTag & 256 && null !== r) {
                var u = r.memoizedProps,
                    y = r.memoizedState,
                    Y = h.stateNode,
                    Th = Y.getSnapshotBeforeUpdate(h.elementType === h.type ? u : O(h.type, u), y);
                Y.__reactInternalSnapshotBeforeUpdate = Th;
              }

              break a;

            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              break a;

            default:
              t("163");
          }
        }
        U = U.nextEffect;
      }
    } catch (db) {
      e = !0, f = db;
    }

    e && (null === U ? t("178") : void 0, Jg(U, f), null !== U && (U = U.nextEffect));
  }

  for (U = d; null !== U;) {
    r = !1;
    u = void 0;

    try {
      for (; null !== U;) {
        var w = U.effectTag;
        w & 16 && pe(U.stateNode, "");

        if (w & 128) {
          var C = U.alternate;

          if (null !== C) {
            var p = C.ref;
            null !== p && ("function" === typeof p ? p(null) : p.current = null);
          }
        }

        switch (w & 14) {
          case 2:
            Ng(U);
            U.effectTag &= -3;
            break;

          case 6:
            Ng(U);
            U.effectTag &= -3;
            Og(U.alternate, U);
            break;

          case 4:
            Og(U.alternate, U);
            break;

          case 8:
            y = U, Lg(y), y.return = null, y.child = null, y.alternate && (y.alternate.child = null, y.alternate.return = null);
        }

        U = U.nextEffect;
      }
    } catch (db) {
      r = !0, u = db;
    }

    r && (null === U ? t("178") : void 0, Jg(U, u), null !== U && (U = U.nextEffect));
  }

  p = Ae;
  C = Td();
  w = p.focusedElem;
  u = p.selectionRange;

  if (C !== w && w && w.ownerDocument && Sd(w.ownerDocument.documentElement, w)) {
    null !== u && Ud(w) && (C = u.start, p = u.end, void 0 === p && (p = C), "selectionStart" in w ? (w.selectionStart = C, w.selectionEnd = Math.min(p, w.value.length)) : (p = (C = w.ownerDocument || document) && C.defaultView || window, p.getSelection && (p = p.getSelection(), y = w.textContent.length, r = Math.min(u.start, y), u = void 0 === u.end ? r : Math.min(u.end, y), !p.extend && r > u && (y = u, u = r, r = y), y = Rd(w, r), Y = Rd(w, u), y && Y && (1 !== p.rangeCount || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== Y.node || p.focusOffset !== Y.offset) && (C = C.createRange(), C.setStart(y.node, y.offset), p.removeAllRanges(), r > u ? (p.addRange(C), p.extend(Y.node, Y.offset)) : (C.setEnd(Y.node, Y.offset), p.addRange(C))))));
    C = [];

    for (p = w; p = p.parentNode;) {
      1 === p.nodeType && C.push({
        element: p,
        left: p.scrollLeft,
        top: p.scrollTop
      });
    }

    "function" === typeof w.focus && w.focus();

    for (w = 0; w < C.length; w++) {
      p = C[w], p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
    }
  }

  Ae = null;
  Hd = !!ze;
  ze = null;
  a.current = b;

  for (U = d; null !== U;) {
    d = !1;
    w = void 0;

    try {
      for (C = c; null !== U;) {
        var Fb = U.effectTag;

        if (Fb & 36) {
          var Gb = U.alternate;
          p = U;
          r = C;

          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              break;

            case 1:
              var wc = p.stateNode;
              if (p.effectTag & 4) if (null === Gb) wc.componentDidMount();else {
                var ci = p.elementType === p.type ? Gb.memoizedProps : O(p.type, Gb.memoizedProps);
                wc.componentDidUpdate(ci, Gb.memoizedState, wc.__reactInternalSnapshotBeforeUpdate);
              }
              var Cg = p.updateQueue;
              null !== Cg && tf(p, Cg, wc, r);
              break;

            case 3:
              var Dg = p.updateQueue;

              if (null !== Dg) {
                u = null;
                if (null !== p.child) switch (p.child.tag) {
                  case 5:
                    u = p.child.stateNode;
                    break;

                  case 1:
                    u = p.child.stateNode;
                }
                tf(p, Dg, u, r);
              }

              break;

            case 5:
              var di = p.stateNode;
              null === Gb && p.effectTag & 4 && Be(p.type, p.memoizedProps) && di.focus();
              break;

            case 6:
              break;

            case 4:
              break;

            case 12:
              break;

            case 13:
              break;

            case 17:
              break;

            default:
              t("163");
          }
        }

        if (Fb & 128) {
          var Ic = U.ref;

          if (null !== Ic) {
            var Eg = U.stateNode;

            switch (U.tag) {
              case 5:
                var ce = Eg;
                break;

              default:
                ce = Eg;
            }

            "function" === typeof Ic ? Ic(ce) : Ic.current = ce;
          }
        }

        U = U.nextEffect;
      }
    } catch (db) {
      d = !0, w = db;
    }

    d && (null === U ? t("178") : void 0, Jg(U, w), null !== U && (U = U.nextEffect));
  }

  Yg = ah = !1;
  "function" === typeof Se && Se(b.stateNode);
  Fb = b.expirationTime;
  b = b.childExpirationTime;
  b = b > Fb ? b : Fb;
  0 === b && (Sg = null);
  a.expirationTime = b;
  a.finishedWork = null;
}

function Qg(a) {
  null === uh ? t("246") : void 0;
  uh.expirationTime = 0;
  vh || (vh = !0, wh = a);
}

function Nh(a, b) {
  var c = Z;
  Z = !0;

  try {
    return a(b);
  } finally {
    (Z = c) || W || Kh(1073741823, !1);
  }
}

function Oh(a, b) {
  if (Z && !xh) {
    xh = !0;

    try {
      return a(b);
    } finally {
      xh = !1;
    }
  }

  return a(b);
}

function Ph(a, b, c) {
  if (kh) return a(b, c);
  Z || W || 0 === lh || (Kh(lh, !1), lh = 0);
  var d = kh,
      e = Z;
  Z = kh = !0;

  try {
    return a(b, c);
  } finally {
    kh = d, (Z = e) || W || Kh(1073741823, !1);
  }
}

function Qh(a, b, c, d, e) {
  var f = b.current;

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      2 === kd(c) && 1 === c.tag ? void 0 : t("170");
      var g = c;

      do {
        switch (g.tag) {
          case 3:
            g = g.stateNode.context;
            break b;

          case 1:
            if (L(g.type)) {
              g = g.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        g = g.return;
      } while (null !== g);

      t("171");
      g = void 0;
    }

    if (1 === c.tag) {
      var h = c.type;

      if (L(h)) {
        c = Pe(c, h, g);
        break a;
      }
    }

    c = g;
  } else c = Je;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = e;
  e = mf(d);
  e.payload = {
    element: a
  };
  b = void 0 === b ? null : b;
  null !== b && (e.callback = b);
  Sf();
  of(f, e);
  Tf(f, d);
  return d;
}

function Rh(a, b, c, d) {
  var e = b.current,
      f = Qf();
  e = Rf(f, e);
  return Qh(a, b, c, e, d);
}

function Sh(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function Uh(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: $b,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

Cb = function Cb(a, b, c) {
  switch (b) {
    case "input":
      Dc(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) {
          c = c.parentNode;
        }

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = La(d);
            e ? void 0 : t("90");
            Wb(d);
            Dc(d, e);
          }
        }
      }

      break;

    case "textarea":
      ie(a, c);
      break;

    case "select":
      b = c.value, null != b && fe(a, !!c.multiple, b, !1);
  }
};

function Vh(a) {
  var b = 1073741822 - 25 * (((1073741822 - Qf() + 500) / 25 | 0) + 1);
  b >= Wg && (b = Wg - 1);
  this._expirationTime = Wg = b;
  this._root = a;
  this._callbacks = this._next = null;
  this._hasChildren = this._didComplete = !1;
  this._children = null;
  this._defer = !0;
}

Vh.prototype.render = function (a) {
  this._defer ? void 0 : t("250");
  this._hasChildren = !0;
  this._children = a;
  var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new Wh();
  Qh(a, b, null, c, d._onCommit);
  return d;
};

Vh.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Vh.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;
  this._defer && null !== b ? void 0 : t("251");

  if (this._hasChildren) {
    var c = this._expirationTime;

    if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

      for (var d = null, e = b; e !== this;) {
        d = e, e = e._next;
      }

      null === d ? t("251") : void 0;
      d._next = e._next;
      this._next = b;
      a.firstBatch = this;
    }

    this._defer = !1;
    Hh(a, c);
    b = this._next;
    this._next = null;
    b = a.firstBatch = b;
    null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};

Vh.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      (0, a[b])();
    }
  }
};

function Wh() {
  this._callbacks = null;
  this._didCommit = !1;
  this._onCommit = this._onCommit.bind(this);
}

Wh.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Wh.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];
      "function" !== typeof c ? t("191", c) : void 0;
      c();
    }
  }
};

function Xh(a, b, c) {
  b = M(3, null, null, b ? 3 : 0);
  a = {
    current: b,
    containerInfo: a,
    pendingChildren: null,
    earliestPendingTime: 0,
    latestPendingTime: 0,
    earliestSuspendedTime: 0,
    latestSuspendedTime: 0,
    latestPingedTime: 0,
    didError: !1,
    pendingCommitExpirationTime: 0,
    finishedWork: null,
    timeoutHandle: -1,
    context: null,
    pendingContext: null,
    hydrate: c,
    nextExpirationTimeToWorkOn: 0,
    expirationTime: 0,
    firstBatch: null,
    nextScheduledRoot: null
  };
  this._internalRoot = b.stateNode = a;
}

Xh.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new Wh();
  b = void 0 === b ? null : b;
  null !== b && d.then(b);
  Rh(a, c, null, d._onCommit);
  return d;
};

Xh.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new Wh();
  a = void 0 === a ? null : a;
  null !== a && c.then(a);
  Rh(null, b, null, c._onCommit);
  return c;
};

Xh.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
  var d = this._internalRoot,
      e = new Wh();
  c = void 0 === c ? null : c;
  null !== c && e.then(c);
  Rh(b, d, a, e._onCommit);
  return e;
};

Xh.prototype.createBatch = function () {
  var a = new Vh(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;
  if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime >= b;) {
      c = d, d = d._next;
    }

    a._next = d;
    null !== c && (c._next = a);
  }
  return a;
};

function Yh(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

Kb = Nh;
Lb = Ph;

Mb = function Mb() {
  W || 0 === lh || (Kh(lh, !1), lh = 0);
};

function Zh(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) {
    a.removeChild(c);
  }
  return new Xh(a, !1, b);
}

function $h(a, b, c, d, e) {
  Yh(c) ? void 0 : t("200");
  var f = c._reactRootContainer;

  if (f) {
    if ("function" === typeof e) {
      var g = e;

      e = function e() {
        var a = Sh(f._internalRoot);
        g.call(a);
      };
    }

    null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
  } else {
    f = c._reactRootContainer = Zh(c, d);

    if ("function" === typeof e) {
      var h = e;

      e = function e() {
        var a = Sh(f._internalRoot);
        h.call(a);
      };
    }

    Oh(function () {
      null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
    });
  }

  return Sh(f._internalRoot);
}

function ai(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  Yh(b) ? void 0 : t("200");
  return Uh(a, b, null, c);
}

var bi = {
  createPortal: ai,
  findDOMNode: function findDOMNode(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternalFiber;
    void 0 === b && ("function" === typeof a.render ? t("188") : t("268", Object.keys(a)));
    a = nd(b);
    a = null === a ? null : a.stateNode;
    return a;
  },
  hydrate: function hydrate(a, b, c) {
    return $h(null, a, b, !0, c);
  },
  render: function render(a, b, c) {
    return $h(null, a, b, !1, c);
  },
  unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    null == a || void 0 === a._reactInternalFiber ? t("38") : void 0;
    return $h(a, b, c, !1, d);
  },
  unmountComponentAtNode: function unmountComponentAtNode(a) {
    Yh(a) ? void 0 : t("40");
    return a._reactRootContainer ? (Oh(function () {
      $h(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  },
  unstable_createPortal: function unstable_createPortal() {
    return ai.apply(void 0, arguments);
  },
  unstable_batchedUpdates: Nh,
  unstable_interactiveUpdates: Ph,
  flushSync: function flushSync(a, b) {
    W ? t("187") : void 0;
    var c = Z;
    Z = !0;

    try {
      return qh(a, b);
    } finally {
      Z = c, Kh(1073741823, !1);
    }
  },
  unstable_flushControlled: function unstable_flushControlled(a) {
    var b = Z;
    Z = !0;

    try {
      qh(a);
    } finally {
      (Z = b) || W || Kh(1073741823, !1);
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [Ja, Ka, La, Ca.injectEventPluginsByName, qa, Ra, function (a) {
      za(a, Qa);
    }, Ib, Jb, Jd, Ea]
  },
  unstable_createRoot: function unstable_createRoot(a, b) {
    Yh(a) ? void 0 : t("299", "unstable_createRoot");
    return new Xh(a, !0, null != b && !0 === b.hydrate);
  }
};

(function (a) {
  var b = a.findFiberByHostInstance;
  return Ve(n({}, a, {
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = nd(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    }
  }));
})({
  findFiberByHostInstance: Ia,
  bundleType: 0,
  version: "16.6.3",
  rendererPackageName: "react-dom"
});

var ei = {
  default: bi
},
    fi = ei && bi || ei;
module.exports = fi.default || fi;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(43);
} else {}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.11.3
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = null,
    f = !1,
    h = 3,
    k = -1,
    l = -1,
    m = !1,
    n = !1;

function p() {
  if (!m) {
    var a = d.expirationTime;
    n ? q() : n = !0;

    _r(t, a);
  }
}

function u() {
  var a = d,
      b = d.next;
  if (d === b) d = null;else {
    var c = d.previous;
    d = c.next = b;
    b.previous = c;
  }
  a.next = a.previous = null;
  c = a.callback;
  b = a.expirationTime;
  a = a.priorityLevel;
  var e = h,
      Q = l;
  h = a;
  l = b;

  try {
    var g = c();
  } finally {
    h = e, l = Q;
  }

  if ("function" === typeof g) if (g = {
    callback: g,
    priorityLevel: a,
    expirationTime: b,
    next: null,
    previous: null
  }, null === d) d = g.next = g.previous = g;else {
    c = null;
    a = d;

    do {
      if (a.expirationTime >= b) {
        c = a;
        break;
      }

      a = a.next;
    } while (a !== d);

    null === c ? c = d : c === d && (d = g, p());
    b = c.previous;
    b.next = c.previous = g;
    g.next = c;
    g.previous = b;
  }
}

function v() {
  if (-1 === k && null !== d && 1 === d.priorityLevel) {
    m = !0;

    try {
      do {
        u();
      } while (null !== d && 1 === d.priorityLevel);
    } finally {
      m = !1, null !== d ? p() : n = !1;
    }
  }
}

function t(a) {
  m = !0;
  var b = f;
  f = a;

  try {
    if (a) for (; null !== d;) {
      var c = exports.unstable_now();

      if (d.expirationTime <= c) {
        do {
          u();
        } while (null !== d && d.expirationTime <= c);
      } else break;
    } else if (null !== d) {
      do {
        u();
      } while (null !== d && !w());
    }
  } finally {
    m = !1, f = b, null !== d ? p() : n = !1, v();
  }
}

var x = Date,
    y = "function" === typeof setTimeout ? setTimeout : void 0,
    z = "function" === typeof clearTimeout ? clearTimeout : void 0,
    A = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
    B = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
    C,
    D;

function E(a) {
  C = A(function (b) {
    z(D);
    a(b);
  });
  D = y(function () {
    B(C);
    a(exports.unstable_now());
  }, 100);
}

if ("object" === typeof performance && "function" === typeof performance.now) {
  var F = performance;

  exports.unstable_now = function () {
    return F.now();
  };
} else exports.unstable_now = function () {
  return x.now();
};

var _r,
    q,
    w,
    G = null;

"undefined" !== typeof window ? G = window : "undefined" !== typeof global && (G = global);

if (G && G._schedMock) {
  var H = G._schedMock;
  _r = H[0];
  q = H[1];
  w = H[2];
  exports.unstable_now = H[3];
} else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var I = null,
      J = function J(a) {
    if (null !== I) try {
      I(a);
    } finally {
      I = null;
    }
  };

  _r = function r(a) {
    null !== I ? setTimeout(_r, 0, a) : (I = a, setTimeout(J, 0, !1));
  };

  q = function q() {
    I = null;
  };

  w = function w() {
    return !1;
  };
} else {
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  var K = null,
      L = !1,
      M = -1,
      N = !1,
      O = !1,
      P = 0,
      R = 33,
      S = 33;

  w = function w() {
    return P <= exports.unstable_now();
  };

  var T = new MessageChannel(),
      U = T.port2;

  T.port1.onmessage = function () {
    L = !1;
    var a = K,
        b = M;
    K = null;
    M = -1;
    var c = exports.unstable_now(),
        e = !1;
    if (0 >= P - c) if (-1 !== b && b <= c) e = !0;else {
      N || (N = !0, E(V));
      K = a;
      M = b;
      return;
    }

    if (null !== a) {
      O = !0;

      try {
        a(e);
      } finally {
        O = !1;
      }
    }
  };

  var V = function V(a) {
    if (null !== K) {
      E(V);
      var b = a - P + S;
      b < S && R < S ? (8 > b && (b = 8), S = b < R ? R : b) : R = b;
      P = a + S;
      L || (L = !0, U.postMessage(void 0));
    } else N = !1;
  };

  _r = function _r(a, b) {
    K = a;
    M = b;
    O || 0 > b ? U.postMessage(void 0) : N || (N = !0, E(V));
  };

  q = function q() {
    K = null;
    L = !1;
    M = -1;
  };
}

exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = h,
      e = k;
  h = a;
  k = exports.unstable_now();

  try {
    return b();
  } finally {
    h = c, k = e, v();
  }
};

exports.unstable_scheduleCallback = function (a, b) {
  var c = -1 !== k ? k : exports.unstable_now();
  if ("object" === typeof b && null !== b && "number" === typeof b.timeout) b = c + b.timeout;else switch (h) {
    case 1:
      b = c + -1;
      break;

    case 2:
      b = c + 250;
      break;

    case 5:
      b = c + 1073741823;
      break;

    case 4:
      b = c + 1E4;
      break;

    default:
      b = c + 5E3;
  }
  a = {
    callback: a,
    priorityLevel: h,
    expirationTime: b,
    next: null,
    previous: null
  };
  if (null === d) d = a.next = a.previous = a, p();else {
    c = null;
    var e = d;

    do {
      if (e.expirationTime > b) {
        c = e;
        break;
      }

      e = e.next;
    } while (e !== d);

    null === c ? c = d : c === d && (d = a, p());
    b = c.previous;
    b.next = c.previous = a;
    a.next = c;
    a.previous = b;
  }
  return a;
};

exports.unstable_cancelCallback = function (a) {
  var b = a.next;

  if (null !== b) {
    if (b === a) d = null;else {
      a === d && (d = b);
      var c = a.previous;
      c.next = b;
      b.previous = c;
    }
    a.next = a.previous = null;
  }
};

exports.unstable_wrapCallback = function (a) {
  var b = h;
  return function () {
    var c = h,
        e = k;
    h = b;
    k = exports.unstable_now();

    try {
      return a.apply(this, arguments);
    } finally {
      h = c, k = e, v();
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return h;
};

exports.unstable_shouldYield = function () {
  return !f && (null !== d && d.expirationTime < l || w());
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(45);

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };
  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var CPU = __webpack_require__(51);

var Controller = __webpack_require__(27);

var PPU = __webpack_require__(52);

var PAPU = __webpack_require__(53);

var ROM = __webpack_require__(54);

var NES = function NES(opts) {
  this.opts = {
    onFrame: function onFrame() {},
    onAudioSample: null,
    onStatusUpdate: function onStatusUpdate() {},
    onBatteryRamWrite: function onBatteryRamWrite() {},
    // FIXME: not actually used except for in PAPU
    preferredFrameRate: 60,
    emulateSound: true,
    sampleRate: 44100 // Sound sample rate in hz

  };

  if (typeof opts !== "undefined") {
    var key;

    for (key in this.opts) {
      if (typeof opts[key] !== "undefined") {
        this.opts[key] = opts[key];
      }
    }
  }

  this.frameTime = 1000 / this.opts.preferredFrameRate;
  this.ui = {
    writeFrame: this.opts.onFrame,
    updateStatus: this.opts.onStatusUpdate
  };
  this.cpu = new CPU(this);
  this.ppu = new PPU(this);
  this.papu = new PAPU(this);
  this.mmap = null; // set in loadROM()

  this.controllers = {
    1: new Controller(),
    2: new Controller()
  };
  this.ui.updateStatus("Ready to load a ROM.");
  this.frame = this.frame.bind(this);
  this.buttonDown = this.buttonDown.bind(this);
  this.buttonUp = this.buttonUp.bind(this);
  this.zapperMove = this.zapperMove.bind(this);
  this.zapperFireDown = this.zapperFireDown.bind(this);
  this.zapperFireUp = this.zapperFireUp.bind(this);
};

NES.prototype = {
  fpsFrameCount: 0,
  romData: null,
  // Resets the system
  reset: function reset() {
    if (this.mmap !== null) {
      this.mmap.reset();
    }

    this.cpu.reset();
    this.ppu.reset();
    this.papu.reset();
    this.lastFpsTime = null;
    this.fpsFrameCount = 0;
  },
  frame: function frame() {
    this.ppu.startFrame();
    var cycles = 0;
    var emulateSound = this.opts.emulateSound;
    var cpu = this.cpu;
    var ppu = this.ppu;
    var papu = this.papu;

    FRAMELOOP: for (;;) {
      if (cpu.cyclesToHalt === 0) {
        // Execute a CPU instruction
        cycles = cpu.emulate();

        if (emulateSound) {
          papu.clockFrameCounter(cycles);
        }

        cycles *= 3;
      } else {
        if (cpu.cyclesToHalt > 8) {
          cycles = 24;

          if (emulateSound) {
            papu.clockFrameCounter(8);
          }

          cpu.cyclesToHalt -= 8;
        } else {
          cycles = cpu.cyclesToHalt * 3;

          if (emulateSound) {
            papu.clockFrameCounter(cpu.cyclesToHalt);
          }

          cpu.cyclesToHalt = 0;
        }
      }

      for (; cycles > 0; cycles--) {
        if (ppu.curX === ppu.spr0HitX && ppu.f_spVisibility === 1 && ppu.scanline - 21 === ppu.spr0HitY) {
          // Set sprite 0 hit flag:
          ppu.setStatusFlag(ppu.STATUS_SPRITE0HIT, true);
        }

        if (ppu.requestEndFrame) {
          ppu.nmiCounter--;

          if (ppu.nmiCounter === 0) {
            ppu.requestEndFrame = false;
            ppu.startVBlank();
            break FRAMELOOP;
          }
        }

        ppu.curX++;

        if (ppu.curX === 341) {
          ppu.curX = 0;
          ppu.endScanline();
        }
      }
    }

    this.fpsFrameCount++;
  },
  buttonDown: function buttonDown(controller, button) {
    this.controllers[controller].buttonDown(button);
  },
  buttonUp: function buttonUp(controller, button) {
    this.controllers[controller].buttonUp(button);
  },
  zapperMove: function zapperMove(x, y) {
    if (!this.mmap) return;
    this.mmap.zapperX = x;
    this.mmap.zapperY = y;
  },
  zapperFireDown: function zapperFireDown() {
    if (!this.mmap) return;
    this.mmap.zapperFired = true;
  },
  zapperFireUp: function zapperFireUp() {
    if (!this.mmap) return;
    this.mmap.zapperFired = false;
  },
  getFPS: function getFPS() {
    var now = +new Date();
    var fps = null;

    if (this.lastFpsTime) {
      fps = this.fpsFrameCount / ((now - this.lastFpsTime) / 1000);
    }

    this.fpsFrameCount = 0;
    this.lastFpsTime = now;
    return fps;
  },
  reloadROM: function reloadROM() {
    if (this.romData !== null) {
      this.loadROM(this.romData);
    }
  },
  // Loads a ROM file into the CPU and PPU.
  // The ROM file is validated first.
  loadROM: function loadROM(data) {
    // Load ROM file:
    this.rom = new ROM(this);
    this.rom.load(data);
    this.reset();
    this.mmap = this.rom.createMapper();
    this.mmap.loadROM();
    this.ppu.setMirroring(this.rom.getMirroringType());
    this.romData = data;
  },
  setFramerate: function setFramerate(rate) {
    this.opts.preferredFrameRate = rate;
    this.frameTime = 1000 / rate;
    this.papu.setSampleRate(this.opts.sampleRate, false);
  },
  toJSON: function toJSON() {
    return {
      romData: this.romData,
      cpu: this.cpu.toJSON(),
      mmap: this.mmap.toJSON(),
      ppu: this.ppu.toJSON()
    };
  },
  fromJSON: function fromJSON(s) {
    this.loadROM(s.romData);
    this.cpu.fromJSON(s.cpu);
    this.mmap.fromJSON(s.mmap);
    this.ppu.fromJSON(s.ppu);
  }
};
module.exports = NES;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(20);

var CPU = function CPU(nes) {
  this.nes = nes; // Keep Chrome happy

  this.mem = null;
  this.REG_ACC = null;
  this.REG_X = null;
  this.REG_Y = null;
  this.REG_SP = null;
  this.REG_PC = null;
  this.REG_PC_NEW = null;
  this.REG_STATUS = null;
  this.F_CARRY = null;
  this.F_DECIMAL = null;
  this.F_INTERRUPT = null;
  this.F_INTERRUPT_NEW = null;
  this.F_OVERFLOW = null;
  this.F_SIGN = null;
  this.F_ZERO = null;
  this.F_NOTUSED = null;
  this.F_NOTUSED_NEW = null;
  this.F_BRK = null;
  this.F_BRK_NEW = null;
  this.opdata = null;
  this.cyclesToHalt = null;
  this.crash = null;
  this.irqRequested = null;
  this.irqType = null;
  this.reset();
};

CPU.prototype = {
  // IRQ Types
  IRQ_NORMAL: 0,
  IRQ_NMI: 1,
  IRQ_RESET: 2,
  reset: function reset() {
    // Main memory
    this.mem = new Array(0x10000);

    for (var i = 0; i < 0x2000; i++) {
      this.mem[i] = 0xff;
    }

    for (var p = 0; p < 4; p++) {
      var j = p * 0x800;
      this.mem[j + 0x008] = 0xf7;
      this.mem[j + 0x009] = 0xef;
      this.mem[j + 0x00a] = 0xdf;
      this.mem[j + 0x00f] = 0xbf;
    }

    for (var k = 0x2001; k < this.mem.length; k++) {
      this.mem[k] = 0;
    } // CPU Registers:


    this.REG_ACC = 0;
    this.REG_X = 0;
    this.REG_Y = 0; // Reset Stack pointer:

    this.REG_SP = 0x01ff; // Reset Program counter:

    this.REG_PC = 0x8000 - 1;
    this.REG_PC_NEW = 0x8000 - 1; // Reset Status register:

    this.REG_STATUS = 0x28;
    this.setStatus(0x28); // Set flags:

    this.F_CARRY = 0;
    this.F_DECIMAL = 0;
    this.F_INTERRUPT = 1;
    this.F_INTERRUPT_NEW = 1;
    this.F_OVERFLOW = 0;
    this.F_SIGN = 0;
    this.F_ZERO = 1;
    this.F_NOTUSED = 1;
    this.F_NOTUSED_NEW = 1;
    this.F_BRK = 1;
    this.F_BRK_NEW = 1;
    this.opdata = new OpData().opdata;
    this.cyclesToHalt = 0; // Reset crash flag:

    this.crash = false; // Interrupt notification:

    this.irqRequested = false;
    this.irqType = null;
  },
  // Emulates a single CPU instruction, returns the number of cycles
  emulate: function emulate() {
    var temp;
    var add; // Check interrupts:

    if (this.irqRequested) {
      temp = this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7;
      this.REG_PC_NEW = this.REG_PC;
      this.F_INTERRUPT_NEW = this.F_INTERRUPT;

      switch (this.irqType) {
        case 0:
          {
            // Normal IRQ:
            if (this.F_INTERRUPT !== 0) {
              // console.log("Interrupt was masked.");
              break;
            }

            this.doIrq(temp); // console.log("Did normal IRQ. I="+this.F_INTERRUPT);

            break;
          }

        case 1:
          {
            // NMI:
            this.doNonMaskableInterrupt(temp);
            break;
          }

        case 2:
          {
            // Reset:
            this.doResetInterrupt();
            break;
          }
      }

      this.REG_PC = this.REG_PC_NEW;
      this.F_INTERRUPT = this.F_INTERRUPT_NEW;
      this.F_BRK = this.F_BRK_NEW;
      this.irqRequested = false;
    }

    var opinf = this.opdata[this.nes.mmap.load(this.REG_PC + 1)];
    var cycleCount = opinf >> 24;
    var cycleAdd = 0; // Find address mode:

    var addrMode = opinf >> 8 & 0xff; // Increment PC by number of op bytes:

    var opaddr = this.REG_PC;
    this.REG_PC += opinf >> 16 & 0xff;
    var addr = 0;

    switch (addrMode) {
      case 0:
        {
          // Zero Page mode. Use the address given after the opcode,
          // but without high byte.
          addr = this.load(opaddr + 2);
          break;
        }

      case 1:
        {
          // Relative mode.
          addr = this.load(opaddr + 2);

          if (addr < 0x80) {
            addr += this.REG_PC;
          } else {
            addr += this.REG_PC - 256;
          }

          break;
        }

      case 2:
        {
          // Ignore. Address is implied in instruction.
          break;
        }

      case 3:
        {
          // Absolute mode. Use the two bytes following the opcode as
          // an address.
          addr = this.load16bit(opaddr + 2);
          break;
        }

      case 4:
        {
          // Accumulator mode. The address is in the accumulator
          // register.
          addr = this.REG_ACC;
          break;
        }

      case 5:
        {
          // Immediate mode. The value is given after the opcode.
          addr = this.REG_PC;
          break;
        }

      case 6:
        {
          // Zero Page Indexed mode, X as index. Use the address given
          // after the opcode, then add the
          // X register to it to get the final address.
          addr = this.load(opaddr + 2) + this.REG_X & 0xff;
          break;
        }

      case 7:
        {
          // Zero Page Indexed mode, Y as index. Use the address given
          // after the opcode, then add the
          // Y register to it to get the final address.
          addr = this.load(opaddr + 2) + this.REG_Y & 0xff;
          break;
        }

      case 8:
        {
          // Absolute Indexed Mode, X as index. Same as zero page
          // indexed, but with the high byte.
          addr = this.load16bit(opaddr + 2);

          if ((addr & 0xff00) !== (addr + this.REG_X & 0xff00)) {
            cycleAdd = 1;
          }

          addr += this.REG_X;
          break;
        }

      case 9:
        {
          // Absolute Indexed Mode, Y as index. Same as zero page
          // indexed, but with the high byte.
          addr = this.load16bit(opaddr + 2);

          if ((addr & 0xff00) !== (addr + this.REG_Y & 0xff00)) {
            cycleAdd = 1;
          }

          addr += this.REG_Y;
          break;
        }

      case 10:
        {
          // Pre-indexed Indirect mode. Find the 16-bit address
          // starting at the given location plus
          // the current X register. The value is the contents of that
          // address.
          addr = this.load(opaddr + 2);

          if ((addr & 0xff00) !== (addr + this.REG_X & 0xff00)) {
            cycleAdd = 1;
          }

          addr += this.REG_X;
          addr &= 0xff;
          addr = this.load16bit(addr);
          break;
        }

      case 11:
        {
          // Post-indexed Indirect mode. Find the 16-bit address
          // contained in the given location
          // (and the one following). Add to that address the contents
          // of the Y register. Fetch the value
          // stored at that adress.
          addr = this.load16bit(this.load(opaddr + 2));

          if ((addr & 0xff00) !== (addr + this.REG_Y & 0xff00)) {
            cycleAdd = 1;
          }

          addr += this.REG_Y;
          break;
        }

      case 12:
        {
          // Indirect Absolute mode. Find the 16-bit address contained
          // at the given location.
          addr = this.load16bit(opaddr + 2); // Find op

          if (addr < 0x1fff) {
            addr = this.mem[addr] + (this.mem[addr & 0xff00 | (addr & 0xff) + 1 & 0xff] << 8); // Read from address given in op
          } else {
            addr = this.nes.mmap.load(addr) + (this.nes.mmap.load(addr & 0xff00 | (addr & 0xff) + 1 & 0xff) << 8);
          }

          break;
        }
    } // Wrap around for addresses above 0xFFFF:


    addr &= 0xffff; // ----------------------------------------------------------------------------------------------------
    // Decode & execute instruction:
    // ----------------------------------------------------------------------------------------------------
    // This should be compiled to a jump table.

    switch (opinf & 0xff) {
      case 0:
        {
          // *******
          // * ADC *
          // *******
          // Add with carry.
          temp = this.REG_ACC + this.load(addr) + this.F_CARRY;

          if (((this.REG_ACC ^ this.load(addr)) & 0x80) === 0 && ((this.REG_ACC ^ temp) & 0x80) !== 0) {
            this.F_OVERFLOW = 1;
          } else {
            this.F_OVERFLOW = 0;
          }

          this.F_CARRY = temp > 255 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          this.REG_ACC = temp & 255;
          cycleCount += cycleAdd;
          break;
        }

      case 1:
        {
          // *******
          // * AND *
          // *******
          // AND memory with accumulator.
          this.REG_ACC = this.REG_ACC & this.load(addr);
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC; //this.REG_ACC = temp;

          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 2:
        {
          // *******
          // * ASL *
          // *******
          // Shift left one bit
          if (addrMode === 4) {
            // ADDR_ACC = 4
            this.F_CARRY = this.REG_ACC >> 7 & 1;
            this.REG_ACC = this.REG_ACC << 1 & 255;
            this.F_SIGN = this.REG_ACC >> 7 & 1;
            this.F_ZERO = this.REG_ACC;
          } else {
            temp = this.load(addr);
            this.F_CARRY = temp >> 7 & 1;
            temp = temp << 1 & 255;
            this.F_SIGN = temp >> 7 & 1;
            this.F_ZERO = temp;
            this.write(addr, temp);
          }

          break;
        }

      case 3:
        {
          // *******
          // * BCC *
          // *******
          // Branch on carry clear
          if (this.F_CARRY === 0) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 4:
        {
          // *******
          // * BCS *
          // *******
          // Branch on carry set
          if (this.F_CARRY === 1) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 5:
        {
          // *******
          // * BEQ *
          // *******
          // Branch on zero
          if (this.F_ZERO === 0) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 6:
        {
          // *******
          // * BIT *
          // *******
          temp = this.load(addr);
          this.F_SIGN = temp >> 7 & 1;
          this.F_OVERFLOW = temp >> 6 & 1;
          temp &= this.REG_ACC;
          this.F_ZERO = temp;
          break;
        }

      case 7:
        {
          // *******
          // * BMI *
          // *******
          // Branch on negative result
          if (this.F_SIGN === 1) {
            cycleCount++;
            this.REG_PC = addr;
          }

          break;
        }

      case 8:
        {
          // *******
          // * BNE *
          // *******
          // Branch on not zero
          if (this.F_ZERO !== 0) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 9:
        {
          // *******
          // * BPL *
          // *******
          // Branch on positive result
          if (this.F_SIGN === 0) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 10:
        {
          // *******
          // * BRK *
          // *******
          this.REG_PC += 2;
          this.push(this.REG_PC >> 8 & 255);
          this.push(this.REG_PC & 255);
          this.F_BRK = 1;
          this.push(this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7);
          this.F_INTERRUPT = 1; //this.REG_PC = load(0xFFFE) | (load(0xFFFF) << 8);

          this.REG_PC = this.load16bit(0xfffe);
          this.REG_PC--;
          break;
        }

      case 11:
        {
          // *******
          // * BVC *
          // *******
          // Branch on overflow clear
          if (this.F_OVERFLOW === 0) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 12:
        {
          // *******
          // * BVS *
          // *******
          // Branch on overflow set
          if (this.F_OVERFLOW === 1) {
            cycleCount += (opaddr & 0xff00) !== (addr & 0xff00) ? 2 : 1;
            this.REG_PC = addr;
          }

          break;
        }

      case 13:
        {
          // *******
          // * CLC *
          // *******
          // Clear carry flag
          this.F_CARRY = 0;
          break;
        }

      case 14:
        {
          // *******
          // * CLD *
          // *******
          // Clear decimal flag
          this.F_DECIMAL = 0;
          break;
        }

      case 15:
        {
          // *******
          // * CLI *
          // *******
          // Clear interrupt flag
          this.F_INTERRUPT = 0;
          break;
        }

      case 16:
        {
          // *******
          // * CLV *
          // *******
          // Clear overflow flag
          this.F_OVERFLOW = 0;
          break;
        }

      case 17:
        {
          // *******
          // * CMP *
          // *******
          // Compare memory and accumulator:
          temp = this.REG_ACC - this.load(addr);
          this.F_CARRY = temp >= 0 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          cycleCount += cycleAdd;
          break;
        }

      case 18:
        {
          // *******
          // * CPX *
          // *******
          // Compare memory and index X:
          temp = this.REG_X - this.load(addr);
          this.F_CARRY = temp >= 0 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          break;
        }

      case 19:
        {
          // *******
          // * CPY *
          // *******
          // Compare memory and index Y:
          temp = this.REG_Y - this.load(addr);
          this.F_CARRY = temp >= 0 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          break;
        }

      case 20:
        {
          // *******
          // * DEC *
          // *******
          // Decrement memory by one:
          temp = this.load(addr) - 1 & 0xff;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp;
          this.write(addr, temp);
          break;
        }

      case 21:
        {
          // *******
          // * DEX *
          // *******
          // Decrement index X by one:
          this.REG_X = this.REG_X - 1 & 0xff;
          this.F_SIGN = this.REG_X >> 7 & 1;
          this.F_ZERO = this.REG_X;
          break;
        }

      case 22:
        {
          // *******
          // * DEY *
          // *******
          // Decrement index Y by one:
          this.REG_Y = this.REG_Y - 1 & 0xff;
          this.F_SIGN = this.REG_Y >> 7 & 1;
          this.F_ZERO = this.REG_Y;
          break;
        }

      case 23:
        {
          // *******
          // * EOR *
          // *******
          // XOR Memory with accumulator, store in accumulator:
          this.REG_ACC = (this.load(addr) ^ this.REG_ACC) & 0xff;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          cycleCount += cycleAdd;
          break;
        }

      case 24:
        {
          // *******
          // * INC *
          // *******
          // Increment memory by one:
          temp = this.load(addr) + 1 & 0xff;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp;
          this.write(addr, temp & 0xff);
          break;
        }

      case 25:
        {
          // *******
          // * INX *
          // *******
          // Increment index X by one:
          this.REG_X = this.REG_X + 1 & 0xff;
          this.F_SIGN = this.REG_X >> 7 & 1;
          this.F_ZERO = this.REG_X;
          break;
        }

      case 26:
        {
          // *******
          // * INY *
          // *******
          // Increment index Y by one:
          this.REG_Y++;
          this.REG_Y &= 0xff;
          this.F_SIGN = this.REG_Y >> 7 & 1;
          this.F_ZERO = this.REG_Y;
          break;
        }

      case 27:
        {
          // *******
          // * JMP *
          // *******
          // Jump to new location:
          this.REG_PC = addr - 1;
          break;
        }

      case 28:
        {
          // *******
          // * JSR *
          // *******
          // Jump to new location, saving return address.
          // Push return address on stack:
          this.push(this.REG_PC >> 8 & 255);
          this.push(this.REG_PC & 255);
          this.REG_PC = addr - 1;
          break;
        }

      case 29:
        {
          // *******
          // * LDA *
          // *******
          // Load accumulator with memory:
          this.REG_ACC = this.load(addr);
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          cycleCount += cycleAdd;
          break;
        }

      case 30:
        {
          // *******
          // * LDX *
          // *******
          // Load index X with memory:
          this.REG_X = this.load(addr);
          this.F_SIGN = this.REG_X >> 7 & 1;
          this.F_ZERO = this.REG_X;
          cycleCount += cycleAdd;
          break;
        }

      case 31:
        {
          // *******
          // * LDY *
          // *******
          // Load index Y with memory:
          this.REG_Y = this.load(addr);
          this.F_SIGN = this.REG_Y >> 7 & 1;
          this.F_ZERO = this.REG_Y;
          cycleCount += cycleAdd;
          break;
        }

      case 32:
        {
          // *******
          // * LSR *
          // *******
          // Shift right one bit:
          if (addrMode === 4) {
            // ADDR_ACC
            temp = this.REG_ACC & 0xff;
            this.F_CARRY = temp & 1;
            temp >>= 1;
            this.REG_ACC = temp;
          } else {
            temp = this.load(addr) & 0xff;
            this.F_CARRY = temp & 1;
            temp >>= 1;
            this.write(addr, temp);
          }

          this.F_SIGN = 0;
          this.F_ZERO = temp;
          break;
        }

      case 33:
        {
          // *******
          // * NOP *
          // *******
          // No OPeration.
          // Ignore.
          break;
        }

      case 34:
        {
          // *******
          // * ORA *
          // *******
          // OR memory with accumulator, store in accumulator.
          temp = (this.load(addr) | this.REG_ACC) & 255;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp;
          this.REG_ACC = temp;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 35:
        {
          // *******
          // * PHA *
          // *******
          // Push accumulator on stack
          this.push(this.REG_ACC);
          break;
        }

      case 36:
        {
          // *******
          // * PHP *
          // *******
          // Push processor status on stack
          this.F_BRK = 1;
          this.push(this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7);
          break;
        }

      case 37:
        {
          // *******
          // * PLA *
          // *******
          // Pull accumulator from stack
          this.REG_ACC = this.pull();
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          break;
        }

      case 38:
        {
          // *******
          // * PLP *
          // *******
          // Pull processor status from stack
          temp = this.pull();
          this.F_CARRY = temp & 1;
          this.F_ZERO = (temp >> 1 & 1) === 1 ? 0 : 1;
          this.F_INTERRUPT = temp >> 2 & 1;
          this.F_DECIMAL = temp >> 3 & 1;
          this.F_BRK = temp >> 4 & 1;
          this.F_NOTUSED = temp >> 5 & 1;
          this.F_OVERFLOW = temp >> 6 & 1;
          this.F_SIGN = temp >> 7 & 1;
          this.F_NOTUSED = 1;
          break;
        }

      case 39:
        {
          // *******
          // * ROL *
          // *******
          // Rotate one bit left
          if (addrMode === 4) {
            // ADDR_ACC = 4
            temp = this.REG_ACC;
            add = this.F_CARRY;
            this.F_CARRY = temp >> 7 & 1;
            temp = (temp << 1 & 0xff) + add;
            this.REG_ACC = temp;
          } else {
            temp = this.load(addr);
            add = this.F_CARRY;
            this.F_CARRY = temp >> 7 & 1;
            temp = (temp << 1 & 0xff) + add;
            this.write(addr, temp);
          }

          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp;
          break;
        }

      case 40:
        {
          // *******
          // * ROR *
          // *******
          // Rotate one bit right
          if (addrMode === 4) {
            // ADDR_ACC = 4
            add = this.F_CARRY << 7;
            this.F_CARRY = this.REG_ACC & 1;
            temp = (this.REG_ACC >> 1) + add;
            this.REG_ACC = temp;
          } else {
            temp = this.load(addr);
            add = this.F_CARRY << 7;
            this.F_CARRY = temp & 1;
            temp = (temp >> 1) + add;
            this.write(addr, temp);
          }

          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp;
          break;
        }

      case 41:
        {
          // *******
          // * RTI *
          // *******
          // Return from interrupt. Pull status and PC from stack.
          temp = this.pull();
          this.F_CARRY = temp & 1;
          this.F_ZERO = (temp >> 1 & 1) === 0 ? 1 : 0;
          this.F_INTERRUPT = temp >> 2 & 1;
          this.F_DECIMAL = temp >> 3 & 1;
          this.F_BRK = temp >> 4 & 1;
          this.F_NOTUSED = temp >> 5 & 1;
          this.F_OVERFLOW = temp >> 6 & 1;
          this.F_SIGN = temp >> 7 & 1;
          this.REG_PC = this.pull();
          this.REG_PC += this.pull() << 8;

          if (this.REG_PC === 0xffff) {
            return;
          }

          this.REG_PC--;
          this.F_NOTUSED = 1;
          break;
        }

      case 42:
        {
          // *******
          // * RTS *
          // *******
          // Return from subroutine. Pull PC from stack.
          this.REG_PC = this.pull();
          this.REG_PC += this.pull() << 8;

          if (this.REG_PC === 0xffff) {
            return; // return from NSF play routine:
          }

          break;
        }

      case 43:
        {
          // *******
          // * SBC *
          // *******
          temp = this.REG_ACC - this.load(addr) - (1 - this.F_CARRY);
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;

          if (((this.REG_ACC ^ temp) & 0x80) !== 0 && ((this.REG_ACC ^ this.load(addr)) & 0x80) !== 0) {
            this.F_OVERFLOW = 1;
          } else {
            this.F_OVERFLOW = 0;
          }

          this.F_CARRY = temp < 0 ? 0 : 1;
          this.REG_ACC = temp & 0xff;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 44:
        {
          // *******
          // * SEC *
          // *******
          // Set carry flag
          this.F_CARRY = 1;
          break;
        }

      case 45:
        {
          // *******
          // * SED *
          // *******
          // Set decimal mode
          this.F_DECIMAL = 1;
          break;
        }

      case 46:
        {
          // *******
          // * SEI *
          // *******
          // Set interrupt disable status
          this.F_INTERRUPT = 1;
          break;
        }

      case 47:
        {
          // *******
          // * STA *
          // *******
          // Store accumulator in memory
          this.write(addr, this.REG_ACC);
          break;
        }

      case 48:
        {
          // *******
          // * STX *
          // *******
          // Store index X in memory
          this.write(addr, this.REG_X);
          break;
        }

      case 49:
        {
          // *******
          // * STY *
          // *******
          // Store index Y in memory:
          this.write(addr, this.REG_Y);
          break;
        }

      case 50:
        {
          // *******
          // * TAX *
          // *******
          // Transfer accumulator to index X:
          this.REG_X = this.REG_ACC;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          break;
        }

      case 51:
        {
          // *******
          // * TAY *
          // *******
          // Transfer accumulator to index Y:
          this.REG_Y = this.REG_ACC;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          break;
        }

      case 52:
        {
          // *******
          // * TSX *
          // *******
          // Transfer stack pointer to index X:
          this.REG_X = this.REG_SP - 0x0100;
          this.F_SIGN = this.REG_SP >> 7 & 1;
          this.F_ZERO = this.REG_X;
          break;
        }

      case 53:
        {
          // *******
          // * TXA *
          // *******
          // Transfer index X to accumulator:
          this.REG_ACC = this.REG_X;
          this.F_SIGN = this.REG_X >> 7 & 1;
          this.F_ZERO = this.REG_X;
          break;
        }

      case 54:
        {
          // *******
          // * TXS *
          // *******
          // Transfer index X to stack pointer:
          this.REG_SP = this.REG_X + 0x0100;
          this.stackWrap();
          break;
        }

      case 55:
        {
          // *******
          // * TYA *
          // *******
          // Transfer index Y to accumulator:
          this.REG_ACC = this.REG_Y;
          this.F_SIGN = this.REG_Y >> 7 & 1;
          this.F_ZERO = this.REG_Y;
          break;
        }

      case 56:
        {
          // *******
          // * ALR *
          // *******
          // Shift right one bit after ANDing:
          temp = this.REG_ACC & this.load(addr);
          this.F_CARRY = temp & 1;
          this.REG_ACC = this.F_ZERO = temp >> 1;
          this.F_SIGN = 0;
          break;
        }

      case 57:
        {
          // *******
          // * ANC *
          // *******
          // AND accumulator, setting carry to bit 7 result.
          this.REG_ACC = this.F_ZERO = this.REG_ACC & this.load(addr);
          this.F_CARRY = this.F_SIGN = this.REG_ACC >> 7 & 1;
          break;
        }

      case 58:
        {
          // *******
          // * ARR *
          // *******
          // Rotate right one bit after ANDing:
          temp = this.REG_ACC & this.load(addr);
          this.REG_ACC = this.F_ZERO = (temp >> 1) + (this.F_CARRY << 7);
          this.F_SIGN = this.F_CARRY;
          this.F_CARRY = temp >> 7 & 1;
          this.F_OVERFLOW = (temp >> 7 ^ temp >> 6) & 1;
          break;
        }

      case 59:
        {
          // *******
          // * AXS *
          // *******
          // Set X to (X AND A) - value.
          temp = (this.REG_X & this.REG_ACC) - this.load(addr);
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;

          if (((this.REG_X ^ temp) & 0x80) !== 0 && ((this.REG_X ^ this.load(addr)) & 0x80) !== 0) {
            this.F_OVERFLOW = 1;
          } else {
            this.F_OVERFLOW = 0;
          }

          this.F_CARRY = temp < 0 ? 0 : 1;
          this.REG_X = temp & 0xff;
          break;
        }

      case 60:
        {
          // *******
          // * LAX *
          // *******
          // Load A and X with memory:
          this.REG_ACC = this.REG_X = this.F_ZERO = this.load(addr);
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          cycleCount += cycleAdd;
          break;
        }

      case 61:
        {
          // *******
          // * SAX *
          // *******
          // Store A AND X in memory:
          this.write(addr, this.REG_ACC & this.REG_X);
          break;
        }

      case 62:
        {
          // *******
          // * DCP *
          // *******
          // Decrement memory by one:
          temp = this.load(addr) - 1 & 0xff;
          this.write(addr, temp); // Then compare with the accumulator:

          temp = this.REG_ACC - temp;
          this.F_CARRY = temp >= 0 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 63:
        {
          // *******
          // * ISC *
          // *******
          // Increment memory by one:
          temp = this.load(addr) + 1 & 0xff;
          this.write(addr, temp); // Then subtract from the accumulator:

          temp = this.REG_ACC - temp - (1 - this.F_CARRY);
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;

          if (((this.REG_ACC ^ temp) & 0x80) !== 0 && ((this.REG_ACC ^ this.load(addr)) & 0x80) !== 0) {
            this.F_OVERFLOW = 1;
          } else {
            this.F_OVERFLOW = 0;
          }

          this.F_CARRY = temp < 0 ? 0 : 1;
          this.REG_ACC = temp & 0xff;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 64:
        {
          // *******
          // * RLA *
          // *******
          // Rotate one bit left
          temp = this.load(addr);
          add = this.F_CARRY;
          this.F_CARRY = temp >> 7 & 1;
          temp = (temp << 1 & 0xff) + add;
          this.write(addr, temp); // Then AND with the accumulator.

          this.REG_ACC = this.REG_ACC & temp;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 65:
        {
          // *******
          // * RRA *
          // *******
          // Rotate one bit right
          temp = this.load(addr);
          add = this.F_CARRY << 7;
          this.F_CARRY = temp & 1;
          temp = (temp >> 1) + add;
          this.write(addr, temp); // Then add to the accumulator

          temp = this.REG_ACC + this.load(addr) + this.F_CARRY;

          if (((this.REG_ACC ^ this.load(addr)) & 0x80) === 0 && ((this.REG_ACC ^ temp) & 0x80) !== 0) {
            this.F_OVERFLOW = 1;
          } else {
            this.F_OVERFLOW = 0;
          }

          this.F_CARRY = temp > 255 ? 1 : 0;
          this.F_SIGN = temp >> 7 & 1;
          this.F_ZERO = temp & 0xff;
          this.REG_ACC = temp & 255;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 66:
        {
          // *******
          // * SLO *
          // *******
          // Shift one bit left
          temp = this.load(addr);
          this.F_CARRY = temp >> 7 & 1;
          temp = temp << 1 & 255;
          this.write(addr, temp); // Then OR with the accumulator.

          this.REG_ACC = this.REG_ACC | temp;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 67:
        {
          // *******
          // * SRE *
          // *******
          // Shift one bit right
          temp = this.load(addr) & 0xff;
          this.F_CARRY = temp & 1;
          temp >>= 1;
          this.write(addr, temp); // Then XOR with the accumulator.

          this.REG_ACC = this.REG_ACC ^ temp;
          this.F_SIGN = this.REG_ACC >> 7 & 1;
          this.F_ZERO = this.REG_ACC;
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      case 68:
        {
          // *******
          // * SKB *
          // *******
          // Do nothing
          break;
        }

      case 69:
        {
          // *******
          // * IGN *
          // *******
          // Do nothing but load.
          // TODO: Properly implement the double-reads.
          this.load(addr);
          if (addrMode !== 11) cycleCount += cycleAdd; // PostIdxInd = 11

          break;
        }

      default:
        {
          // *******
          // * ??? *
          // *******
          this.nes.stop();
          this.nes.crashMessage = "Game crashed, invalid opcode at address $" + opaddr.toString(16);
          break;
        }
    } // end of switch


    return cycleCount;
  },
  load: function load(addr) {
    if (addr < 0x2000) {
      return this.mem[addr & 0x7ff];
    } else {
      return this.nes.mmap.load(addr);
    }
  },
  load16bit: function load16bit(addr) {
    if (addr < 0x1fff) {
      return this.mem[addr & 0x7ff] | this.mem[addr + 1 & 0x7ff] << 8;
    } else {
      return this.nes.mmap.load(addr) | this.nes.mmap.load(addr + 1) << 8;
    }
  },
  write: function write(addr, val) {
    if (addr < 0x2000) {
      this.mem[addr & 0x7ff] = val;
    } else {
      this.nes.mmap.write(addr, val);
    }
  },
  requestIrq: function requestIrq(type) {
    if (this.irqRequested) {
      if (type === this.IRQ_NORMAL) {
        return;
      } // console.log("too fast irqs. type="+type);

    }

    this.irqRequested = true;
    this.irqType = type;
  },
  push: function push(value) {
    this.nes.mmap.write(this.REG_SP, value);
    this.REG_SP--;
    this.REG_SP = 0x0100 | this.REG_SP & 0xff;
  },
  stackWrap: function stackWrap() {
    this.REG_SP = 0x0100 | this.REG_SP & 0xff;
  },
  pull: function pull() {
    this.REG_SP++;
    this.REG_SP = 0x0100 | this.REG_SP & 0xff;
    return this.nes.mmap.load(this.REG_SP);
  },
  pageCrossed: function pageCrossed(addr1, addr2) {
    return (addr1 & 0xff00) !== (addr2 & 0xff00);
  },
  haltCycles: function haltCycles(cycles) {
    this.cyclesToHalt += cycles;
  },
  doNonMaskableInterrupt: function doNonMaskableInterrupt(status) {
    if ((this.nes.mmap.load(0x2000) & 128) !== 0) {
      // Check whether VBlank Interrupts are enabled
      this.REG_PC_NEW++;
      this.push(this.REG_PC_NEW >> 8 & 0xff);
      this.push(this.REG_PC_NEW & 0xff); //this.F_INTERRUPT_NEW = 1;

      this.push(status);
      this.REG_PC_NEW = this.nes.mmap.load(0xfffa) | this.nes.mmap.load(0xfffb) << 8;
      this.REG_PC_NEW--;
    }
  },
  doResetInterrupt: function doResetInterrupt() {
    this.REG_PC_NEW = this.nes.mmap.load(0xfffc) | this.nes.mmap.load(0xfffd) << 8;
    this.REG_PC_NEW--;
  },
  doIrq: function doIrq(status) {
    this.REG_PC_NEW++;
    this.push(this.REG_PC_NEW >> 8 & 0xff);
    this.push(this.REG_PC_NEW & 0xff);
    this.push(status);
    this.F_INTERRUPT_NEW = 1;
    this.F_BRK_NEW = 0;
    this.REG_PC_NEW = this.nes.mmap.load(0xfffe) | this.nes.mmap.load(0xffff) << 8;
    this.REG_PC_NEW--;
  },
  getStatus: function getStatus() {
    return this.F_CARRY | this.F_ZERO << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7;
  },
  setStatus: function setStatus(st) {
    this.F_CARRY = st & 1;
    this.F_ZERO = st >> 1 & 1;
    this.F_INTERRUPT = st >> 2 & 1;
    this.F_DECIMAL = st >> 3 & 1;
    this.F_BRK = st >> 4 & 1;
    this.F_NOTUSED = st >> 5 & 1;
    this.F_OVERFLOW = st >> 6 & 1;
    this.F_SIGN = st >> 7 & 1;
  },
  JSON_PROPERTIES: ["mem", "cyclesToHalt", "irqRequested", "irqType", // Registers
  "REG_ACC", "REG_X", "REG_Y", "REG_SP", "REG_PC", "REG_PC_NEW", "REG_STATUS", // Status
  "F_CARRY", "F_DECIMAL", "F_INTERRUPT", "F_INTERRUPT_NEW", "F_OVERFLOW", "F_SIGN", "F_ZERO", "F_NOTUSED", "F_NOTUSED_NEW", "F_BRK", "F_BRK_NEW"],
  toJSON: function toJSON() {
    return utils.toJSON(this);
  },
  fromJSON: function fromJSON(s) {
    utils.fromJSON(this, s);
  }
}; // Generates and provides an array of details about instructions

var OpData = function OpData() {
  this.opdata = new Array(256); // Set all to invalid instruction (to detect crashes):

  for (var i = 0; i < 256; i++) {
    this.opdata[i] = 0xff;
  } // Now fill in all valid opcodes:
  // ADC:


  this.setOp(this.INS_ADC, 0x69, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_ADC, 0x65, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_ADC, 0x75, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_ADC, 0x6d, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_ADC, 0x7d, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_ADC, 0x79, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_ADC, 0x61, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_ADC, 0x71, this.ADDR_POSTIDXIND, 2, 5); // AND:

  this.setOp(this.INS_AND, 0x29, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_AND, 0x25, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_AND, 0x35, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_AND, 0x2d, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_AND, 0x3d, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_AND, 0x39, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_AND, 0x21, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_AND, 0x31, this.ADDR_POSTIDXIND, 2, 5); // ASL:

  this.setOp(this.INS_ASL, 0x0a, this.ADDR_ACC, 1, 2);
  this.setOp(this.INS_ASL, 0x06, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_ASL, 0x16, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_ASL, 0x0e, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_ASL, 0x1e, this.ADDR_ABSX, 3, 7); // BCC:

  this.setOp(this.INS_BCC, 0x90, this.ADDR_REL, 2, 2); // BCS:

  this.setOp(this.INS_BCS, 0xb0, this.ADDR_REL, 2, 2); // BEQ:

  this.setOp(this.INS_BEQ, 0xf0, this.ADDR_REL, 2, 2); // BIT:

  this.setOp(this.INS_BIT, 0x24, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_BIT, 0x2c, this.ADDR_ABS, 3, 4); // BMI:

  this.setOp(this.INS_BMI, 0x30, this.ADDR_REL, 2, 2); // BNE:

  this.setOp(this.INS_BNE, 0xd0, this.ADDR_REL, 2, 2); // BPL:

  this.setOp(this.INS_BPL, 0x10, this.ADDR_REL, 2, 2); // BRK:

  this.setOp(this.INS_BRK, 0x00, this.ADDR_IMP, 1, 7); // BVC:

  this.setOp(this.INS_BVC, 0x50, this.ADDR_REL, 2, 2); // BVS:

  this.setOp(this.INS_BVS, 0x70, this.ADDR_REL, 2, 2); // CLC:

  this.setOp(this.INS_CLC, 0x18, this.ADDR_IMP, 1, 2); // CLD:

  this.setOp(this.INS_CLD, 0xd8, this.ADDR_IMP, 1, 2); // CLI:

  this.setOp(this.INS_CLI, 0x58, this.ADDR_IMP, 1, 2); // CLV:

  this.setOp(this.INS_CLV, 0xb8, this.ADDR_IMP, 1, 2); // CMP:

  this.setOp(this.INS_CMP, 0xc9, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_CMP, 0xc5, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_CMP, 0xd5, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_CMP, 0xcd, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_CMP, 0xdd, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_CMP, 0xd9, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_CMP, 0xc1, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_CMP, 0xd1, this.ADDR_POSTIDXIND, 2, 5); // CPX:

  this.setOp(this.INS_CPX, 0xe0, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_CPX, 0xe4, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_CPX, 0xec, this.ADDR_ABS, 3, 4); // CPY:

  this.setOp(this.INS_CPY, 0xc0, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_CPY, 0xc4, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_CPY, 0xcc, this.ADDR_ABS, 3, 4); // DEC:

  this.setOp(this.INS_DEC, 0xc6, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_DEC, 0xd6, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_DEC, 0xce, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_DEC, 0xde, this.ADDR_ABSX, 3, 7); // DEX:

  this.setOp(this.INS_DEX, 0xca, this.ADDR_IMP, 1, 2); // DEY:

  this.setOp(this.INS_DEY, 0x88, this.ADDR_IMP, 1, 2); // EOR:

  this.setOp(this.INS_EOR, 0x49, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_EOR, 0x45, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_EOR, 0x55, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_EOR, 0x4d, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_EOR, 0x5d, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_EOR, 0x59, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_EOR, 0x41, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_EOR, 0x51, this.ADDR_POSTIDXIND, 2, 5); // INC:

  this.setOp(this.INS_INC, 0xe6, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_INC, 0xf6, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_INC, 0xee, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_INC, 0xfe, this.ADDR_ABSX, 3, 7); // INX:

  this.setOp(this.INS_INX, 0xe8, this.ADDR_IMP, 1, 2); // INY:

  this.setOp(this.INS_INY, 0xc8, this.ADDR_IMP, 1, 2); // JMP:

  this.setOp(this.INS_JMP, 0x4c, this.ADDR_ABS, 3, 3);
  this.setOp(this.INS_JMP, 0x6c, this.ADDR_INDABS, 3, 5); // JSR:

  this.setOp(this.INS_JSR, 0x20, this.ADDR_ABS, 3, 6); // LDA:

  this.setOp(this.INS_LDA, 0xa9, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_LDA, 0xa5, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_LDA, 0xb5, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_LDA, 0xad, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_LDA, 0xbd, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_LDA, 0xb9, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_LDA, 0xa1, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_LDA, 0xb1, this.ADDR_POSTIDXIND, 2, 5); // LDX:

  this.setOp(this.INS_LDX, 0xa2, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_LDX, 0xa6, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_LDX, 0xb6, this.ADDR_ZPY, 2, 4);
  this.setOp(this.INS_LDX, 0xae, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_LDX, 0xbe, this.ADDR_ABSY, 3, 4); // LDY:

  this.setOp(this.INS_LDY, 0xa0, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_LDY, 0xa4, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_LDY, 0xb4, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_LDY, 0xac, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_LDY, 0xbc, this.ADDR_ABSX, 3, 4); // LSR:

  this.setOp(this.INS_LSR, 0x4a, this.ADDR_ACC, 1, 2);
  this.setOp(this.INS_LSR, 0x46, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_LSR, 0x56, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_LSR, 0x4e, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_LSR, 0x5e, this.ADDR_ABSX, 3, 7); // NOP:

  this.setOp(this.INS_NOP, 0x1a, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0x3a, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0x5a, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0x7a, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0xda, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0xea, this.ADDR_IMP, 1, 2);
  this.setOp(this.INS_NOP, 0xfa, this.ADDR_IMP, 1, 2); // ORA:

  this.setOp(this.INS_ORA, 0x09, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_ORA, 0x05, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_ORA, 0x15, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_ORA, 0x0d, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_ORA, 0x1d, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_ORA, 0x19, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_ORA, 0x01, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_ORA, 0x11, this.ADDR_POSTIDXIND, 2, 5); // PHA:

  this.setOp(this.INS_PHA, 0x48, this.ADDR_IMP, 1, 3); // PHP:

  this.setOp(this.INS_PHP, 0x08, this.ADDR_IMP, 1, 3); // PLA:

  this.setOp(this.INS_PLA, 0x68, this.ADDR_IMP, 1, 4); // PLP:

  this.setOp(this.INS_PLP, 0x28, this.ADDR_IMP, 1, 4); // ROL:

  this.setOp(this.INS_ROL, 0x2a, this.ADDR_ACC, 1, 2);
  this.setOp(this.INS_ROL, 0x26, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_ROL, 0x36, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_ROL, 0x2e, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_ROL, 0x3e, this.ADDR_ABSX, 3, 7); // ROR:

  this.setOp(this.INS_ROR, 0x6a, this.ADDR_ACC, 1, 2);
  this.setOp(this.INS_ROR, 0x66, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_ROR, 0x76, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_ROR, 0x6e, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_ROR, 0x7e, this.ADDR_ABSX, 3, 7); // RTI:

  this.setOp(this.INS_RTI, 0x40, this.ADDR_IMP, 1, 6); // RTS:

  this.setOp(this.INS_RTS, 0x60, this.ADDR_IMP, 1, 6); // SBC:

  this.setOp(this.INS_SBC, 0xe9, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_SBC, 0xe5, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_SBC, 0xf5, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_SBC, 0xed, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_SBC, 0xfd, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_SBC, 0xf9, this.ADDR_ABSY, 3, 4);
  this.setOp(this.INS_SBC, 0xe1, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_SBC, 0xf1, this.ADDR_POSTIDXIND, 2, 5); // SEC:

  this.setOp(this.INS_SEC, 0x38, this.ADDR_IMP, 1, 2); // SED:

  this.setOp(this.INS_SED, 0xf8, this.ADDR_IMP, 1, 2); // SEI:

  this.setOp(this.INS_SEI, 0x78, this.ADDR_IMP, 1, 2); // STA:

  this.setOp(this.INS_STA, 0x85, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_STA, 0x95, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_STA, 0x8d, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_STA, 0x9d, this.ADDR_ABSX, 3, 5);
  this.setOp(this.INS_STA, 0x99, this.ADDR_ABSY, 3, 5);
  this.setOp(this.INS_STA, 0x81, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_STA, 0x91, this.ADDR_POSTIDXIND, 2, 6); // STX:

  this.setOp(this.INS_STX, 0x86, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_STX, 0x96, this.ADDR_ZPY, 2, 4);
  this.setOp(this.INS_STX, 0x8e, this.ADDR_ABS, 3, 4); // STY:

  this.setOp(this.INS_STY, 0x84, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_STY, 0x94, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_STY, 0x8c, this.ADDR_ABS, 3, 4); // TAX:

  this.setOp(this.INS_TAX, 0xaa, this.ADDR_IMP, 1, 2); // TAY:

  this.setOp(this.INS_TAY, 0xa8, this.ADDR_IMP, 1, 2); // TSX:

  this.setOp(this.INS_TSX, 0xba, this.ADDR_IMP, 1, 2); // TXA:

  this.setOp(this.INS_TXA, 0x8a, this.ADDR_IMP, 1, 2); // TXS:

  this.setOp(this.INS_TXS, 0x9a, this.ADDR_IMP, 1, 2); // TYA:

  this.setOp(this.INS_TYA, 0x98, this.ADDR_IMP, 1, 2); // ALR:

  this.setOp(this.INS_ALR, 0x4b, this.ADDR_IMM, 2, 2); // ANC:

  this.setOp(this.INS_ANC, 0x0b, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_ANC, 0x2b, this.ADDR_IMM, 2, 2); // ARR:

  this.setOp(this.INS_ARR, 0x6b, this.ADDR_IMM, 2, 2); // AXS:

  this.setOp(this.INS_AXS, 0xcb, this.ADDR_IMM, 2, 2); // LAX:

  this.setOp(this.INS_LAX, 0xa3, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_LAX, 0xa7, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_LAX, 0xaf, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_LAX, 0xb3, this.ADDR_POSTIDXIND, 2, 5);
  this.setOp(this.INS_LAX, 0xb7, this.ADDR_ZPY, 2, 4);
  this.setOp(this.INS_LAX, 0xbf, this.ADDR_ABSY, 3, 4); // SAX:

  this.setOp(this.INS_SAX, 0x83, this.ADDR_PREIDXIND, 2, 6);
  this.setOp(this.INS_SAX, 0x87, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_SAX, 0x8f, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_SAX, 0x97, this.ADDR_ZPY, 2, 4); // DCP:

  this.setOp(this.INS_DCP, 0xc3, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_DCP, 0xc7, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_DCP, 0xcf, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_DCP, 0xd3, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_DCP, 0xd7, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_DCP, 0xdb, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_DCP, 0xdf, this.ADDR_ABSX, 3, 7); // ISC:

  this.setOp(this.INS_ISC, 0xe3, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_ISC, 0xe7, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_ISC, 0xef, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_ISC, 0xf3, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_ISC, 0xf7, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_ISC, 0xfb, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_ISC, 0xff, this.ADDR_ABSX, 3, 7); // RLA:

  this.setOp(this.INS_RLA, 0x23, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_RLA, 0x27, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_RLA, 0x2f, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_RLA, 0x33, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_RLA, 0x37, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_RLA, 0x3b, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_RLA, 0x3f, this.ADDR_ABSX, 3, 7); // RRA:

  this.setOp(this.INS_RRA, 0x63, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_RRA, 0x67, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_RRA, 0x6f, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_RRA, 0x73, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_RRA, 0x77, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_RRA, 0x7b, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_RRA, 0x7f, this.ADDR_ABSX, 3, 7); // SLO:

  this.setOp(this.INS_SLO, 0x03, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_SLO, 0x07, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_SLO, 0x0f, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_SLO, 0x13, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_SLO, 0x17, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_SLO, 0x1b, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_SLO, 0x1f, this.ADDR_ABSX, 3, 7); // SRE:

  this.setOp(this.INS_SRE, 0x43, this.ADDR_PREIDXIND, 2, 8);
  this.setOp(this.INS_SRE, 0x47, this.ADDR_ZP, 2, 5);
  this.setOp(this.INS_SRE, 0x4f, this.ADDR_ABS, 3, 6);
  this.setOp(this.INS_SRE, 0x53, this.ADDR_POSTIDXIND, 2, 8);
  this.setOp(this.INS_SRE, 0x57, this.ADDR_ZPX, 2, 6);
  this.setOp(this.INS_SRE, 0x5b, this.ADDR_ABSY, 3, 7);
  this.setOp(this.INS_SRE, 0x5f, this.ADDR_ABSX, 3, 7); // SKB:

  this.setOp(this.INS_SKB, 0x80, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_SKB, 0x82, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_SKB, 0x89, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_SKB, 0xc2, this.ADDR_IMM, 2, 2);
  this.setOp(this.INS_SKB, 0xe2, this.ADDR_IMM, 2, 2); // SKB:

  this.setOp(this.INS_IGN, 0x0c, this.ADDR_ABS, 3, 4);
  this.setOp(this.INS_IGN, 0x1c, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0x3c, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0x5c, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0x7c, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0xdc, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0xfc, this.ADDR_ABSX, 3, 4);
  this.setOp(this.INS_IGN, 0x04, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_IGN, 0x44, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_IGN, 0x64, this.ADDR_ZP, 2, 3);
  this.setOp(this.INS_IGN, 0x14, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_IGN, 0x34, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_IGN, 0x54, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_IGN, 0x74, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_IGN, 0xd4, this.ADDR_ZPX, 2, 4);
  this.setOp(this.INS_IGN, 0xf4, this.ADDR_ZPX, 2, 4); // prettier-ignore

  this.cycTable = new Array(
  /*0x00*/
  7, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6,
  /*0x10*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7,
  /*0x20*/
  6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6,
  /*0x30*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7,
  /*0x40*/
  6, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 3, 4, 6, 6,
  /*0x50*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7,
  /*0x60*/
  6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6,
  /*0x70*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7,
  /*0x80*/
  2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4,
  /*0x90*/
  2, 6, 2, 6, 4, 4, 4, 4, 2, 5, 2, 5, 5, 5, 5, 5,
  /*0xA0*/
  2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4,
  /*0xB0*/
  2, 5, 2, 5, 4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4,
  /*0xC0*/
  2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6,
  /*0xD0*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7,
  /*0xE0*/
  2, 6, 3, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6,
  /*0xF0*/
  2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7);
  this.instname = new Array(70); // Instruction Names:

  this.instname[0] = "ADC";
  this.instname[1] = "AND";
  this.instname[2] = "ASL";
  this.instname[3] = "BCC";
  this.instname[4] = "BCS";
  this.instname[5] = "BEQ";
  this.instname[6] = "BIT";
  this.instname[7] = "BMI";
  this.instname[8] = "BNE";
  this.instname[9] = "BPL";
  this.instname[10] = "BRK";
  this.instname[11] = "BVC";
  this.instname[12] = "BVS";
  this.instname[13] = "CLC";
  this.instname[14] = "CLD";
  this.instname[15] = "CLI";
  this.instname[16] = "CLV";
  this.instname[17] = "CMP";
  this.instname[18] = "CPX";
  this.instname[19] = "CPY";
  this.instname[20] = "DEC";
  this.instname[21] = "DEX";
  this.instname[22] = "DEY";
  this.instname[23] = "EOR";
  this.instname[24] = "INC";
  this.instname[25] = "INX";
  this.instname[26] = "INY";
  this.instname[27] = "JMP";
  this.instname[28] = "JSR";
  this.instname[29] = "LDA";
  this.instname[30] = "LDX";
  this.instname[31] = "LDY";
  this.instname[32] = "LSR";
  this.instname[33] = "NOP";
  this.instname[34] = "ORA";
  this.instname[35] = "PHA";
  this.instname[36] = "PHP";
  this.instname[37] = "PLA";
  this.instname[38] = "PLP";
  this.instname[39] = "ROL";
  this.instname[40] = "ROR";
  this.instname[41] = "RTI";
  this.instname[42] = "RTS";
  this.instname[43] = "SBC";
  this.instname[44] = "SEC";
  this.instname[45] = "SED";
  this.instname[46] = "SEI";
  this.instname[47] = "STA";
  this.instname[48] = "STX";
  this.instname[49] = "STY";
  this.instname[50] = "TAX";
  this.instname[51] = "TAY";
  this.instname[52] = "TSX";
  this.instname[53] = "TXA";
  this.instname[54] = "TXS";
  this.instname[55] = "TYA";
  this.instname[56] = "ALR";
  this.instname[57] = "ANC";
  this.instname[58] = "ARR";
  this.instname[59] = "AXS";
  this.instname[60] = "LAX";
  this.instname[61] = "SAX";
  this.instname[62] = "DCP";
  this.instname[63] = "ISC";
  this.instname[64] = "RLA";
  this.instname[65] = "RRA";
  this.instname[66] = "SLO";
  this.instname[67] = "SRE";
  this.instname[68] = "SKB";
  this.instname[69] = "IGN";
  this.addrDesc = new Array("Zero Page           ", "Relative            ", "Implied             ", "Absolute            ", "Accumulator         ", "Immediate           ", "Zero Page,X         ", "Zero Page,Y         ", "Absolute,X          ", "Absolute,Y          ", "Preindexed Indirect ", "Postindexed Indirect", "Indirect Absolute   ");
};

OpData.prototype = {
  INS_ADC: 0,
  INS_AND: 1,
  INS_ASL: 2,
  INS_BCC: 3,
  INS_BCS: 4,
  INS_BEQ: 5,
  INS_BIT: 6,
  INS_BMI: 7,
  INS_BNE: 8,
  INS_BPL: 9,
  INS_BRK: 10,
  INS_BVC: 11,
  INS_BVS: 12,
  INS_CLC: 13,
  INS_CLD: 14,
  INS_CLI: 15,
  INS_CLV: 16,
  INS_CMP: 17,
  INS_CPX: 18,
  INS_CPY: 19,
  INS_DEC: 20,
  INS_DEX: 21,
  INS_DEY: 22,
  INS_EOR: 23,
  INS_INC: 24,
  INS_INX: 25,
  INS_INY: 26,
  INS_JMP: 27,
  INS_JSR: 28,
  INS_LDA: 29,
  INS_LDX: 30,
  INS_LDY: 31,
  INS_LSR: 32,
  INS_NOP: 33,
  INS_ORA: 34,
  INS_PHA: 35,
  INS_PHP: 36,
  INS_PLA: 37,
  INS_PLP: 38,
  INS_ROL: 39,
  INS_ROR: 40,
  INS_RTI: 41,
  INS_RTS: 42,
  INS_SBC: 43,
  INS_SEC: 44,
  INS_SED: 45,
  INS_SEI: 46,
  INS_STA: 47,
  INS_STX: 48,
  INS_STY: 49,
  INS_TAX: 50,
  INS_TAY: 51,
  INS_TSX: 52,
  INS_TXA: 53,
  INS_TXS: 54,
  INS_TYA: 55,
  INS_ALR: 56,
  INS_ANC: 57,
  INS_ARR: 58,
  INS_AXS: 59,
  INS_LAX: 60,
  INS_SAX: 61,
  INS_DCP: 62,
  INS_ISC: 63,
  INS_RLA: 64,
  INS_RRA: 65,
  INS_SLO: 66,
  INS_SRE: 67,
  INS_SKB: 68,
  INS_IGN: 69,
  INS_DUMMY: 70,
  // dummy instruction used for 'halting' the processor some cycles
  // -------------------------------- //
  // Addressing modes:
  ADDR_ZP: 0,
  ADDR_REL: 1,
  ADDR_IMP: 2,
  ADDR_ABS: 3,
  ADDR_ACC: 4,
  ADDR_IMM: 5,
  ADDR_ZPX: 6,
  ADDR_ZPY: 7,
  ADDR_ABSX: 8,
  ADDR_ABSY: 9,
  ADDR_PREIDXIND: 10,
  ADDR_POSTIDXIND: 11,
  ADDR_INDABS: 12,
  setOp: function setOp(inst, op, addr, size, cycles) {
    this.opdata[op] = inst & 0xff | (addr & 0xff) << 8 | (size & 0xff) << 16 | (cycles & 0xff) << 24;
  }
};
module.exports = CPU;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Tile = __webpack_require__(28);

var utils = __webpack_require__(20);

var PPU = function PPU(nes) {
  this.nes = nes; // Keep Chrome happy

  this.vramMem = null;
  this.spriteMem = null;
  this.vramAddress = null;
  this.vramTmpAddress = null;
  this.vramBufferedReadValue = null;
  this.firstWrite = null;
  this.sramAddress = null;
  this.currentMirroring = null;
  this.requestEndFrame = null;
  this.nmiOk = null;
  this.dummyCycleToggle = null;
  this.validTileData = null;
  this.nmiCounter = null;
  this.scanlineAlreadyRendered = null;
  this.f_nmiOnVblank = null;
  this.f_spriteSize = null;
  this.f_bgPatternTable = null;
  this.f_spPatternTable = null;
  this.f_addrInc = null;
  this.f_nTblAddress = null;
  this.f_color = null;
  this.f_spVisibility = null;
  this.f_bgVisibility = null;
  this.f_spClipping = null;
  this.f_bgClipping = null;
  this.f_dispType = null;
  this.cntFV = null;
  this.cntV = null;
  this.cntH = null;
  this.cntVT = null;
  this.cntHT = null;
  this.regFV = null;
  this.regV = null;
  this.regH = null;
  this.regVT = null;
  this.regHT = null;
  this.regFH = null;
  this.regS = null;
  this.curNt = null;
  this.attrib = null;
  this.buffer = null;
  this.bgbuffer = null;
  this.pixrendered = null;
  this.validTileData = null;
  this.scantile = null;
  this.scanline = null;
  this.lastRenderedScanline = null;
  this.curX = null;
  this.sprX = null;
  this.sprY = null;
  this.sprTile = null;
  this.sprCol = null;
  this.vertFlip = null;
  this.horiFlip = null;
  this.bgPriority = null;
  this.spr0HitX = null;
  this.spr0HitY = null;
  this.hitSpr0 = null;
  this.sprPalette = null;
  this.imgPalette = null;
  this.ptTile = null;
  this.ntable1 = null;
  this.currentMirroring = null;
  this.nameTable = null;
  this.vramMirrorTable = null;
  this.palTable = null; // Rendering Options:

  this.showSpr0Hit = false;
  this.clipToTvSize = true;
  this.reset();
};

PPU.prototype = {
  // Status flags:
  STATUS_VRAMWRITE: 4,
  STATUS_SLSPRITECOUNT: 5,
  STATUS_SPRITE0HIT: 6,
  STATUS_VBLANK: 7,
  reset: function reset() {
    var i; // Memory

    this.vramMem = new Array(0x8000);
    this.spriteMem = new Array(0x100);

    for (i = 0; i < this.vramMem.length; i++) {
      this.vramMem[i] = 0;
    }

    for (i = 0; i < this.spriteMem.length; i++) {
      this.spriteMem[i] = 0;
    } // VRAM I/O:


    this.vramAddress = null;
    this.vramTmpAddress = null;
    this.vramBufferedReadValue = 0;
    this.firstWrite = true; // VRAM/Scroll Hi/Lo latch
    // SPR-RAM I/O:

    this.sramAddress = 0; // 8-bit only.

    this.currentMirroring = -1;
    this.requestEndFrame = false;
    this.nmiOk = false;
    this.dummyCycleToggle = false;
    this.validTileData = false;
    this.nmiCounter = 0;
    this.scanlineAlreadyRendered = null; // Control Flags Register 1:

    this.f_nmiOnVblank = 0; // NMI on VBlank. 0=disable, 1=enable

    this.f_spriteSize = 0; // Sprite size. 0=8x8, 1=8x16

    this.f_bgPatternTable = 0; // Background Pattern Table address. 0=0x0000,1=0x1000

    this.f_spPatternTable = 0; // Sprite Pattern Table address. 0=0x0000,1=0x1000

    this.f_addrInc = 0; // PPU Address Increment. 0=1,1=32

    this.f_nTblAddress = 0; // Name Table Address. 0=0x2000,1=0x2400,2=0x2800,3=0x2C00
    // Control Flags Register 2:

    this.f_color = 0; // Background color. 0=black, 1=blue, 2=green, 4=red

    this.f_spVisibility = 0; // Sprite visibility. 0=not displayed,1=displayed

    this.f_bgVisibility = 0; // Background visibility. 0=Not Displayed,1=displayed

    this.f_spClipping = 0; // Sprite clipping. 0=Sprites invisible in left 8-pixel column,1=No clipping

    this.f_bgClipping = 0; // Background clipping. 0=BG invisible in left 8-pixel column, 1=No clipping

    this.f_dispType = 0; // Display type. 0=color, 1=monochrome
    // Counters:

    this.cntFV = 0;
    this.cntV = 0;
    this.cntH = 0;
    this.cntVT = 0;
    this.cntHT = 0; // Registers:

    this.regFV = 0;
    this.regV = 0;
    this.regH = 0;
    this.regVT = 0;
    this.regHT = 0;
    this.regFH = 0;
    this.regS = 0; // These are temporary variables used in rendering and sound procedures.
    // Their states outside of those procedures can be ignored.
    // TODO: the use of this is a bit weird, investigate

    this.curNt = null; // Variables used when rendering:

    this.attrib = new Array(32);
    this.buffer = new Array(256 * 240);
    this.bgbuffer = new Array(256 * 240);
    this.pixrendered = new Array(256 * 240);
    this.validTileData = null;
    this.scantile = new Array(32); // Initialize misc vars:

    this.scanline = 0;
    this.lastRenderedScanline = -1;
    this.curX = 0; // Sprite data:

    this.sprX = new Array(64); // X coordinate

    this.sprY = new Array(64); // Y coordinate

    this.sprTile = new Array(64); // Tile Index (into pattern table)

    this.sprCol = new Array(64); // Upper two bits of color

    this.vertFlip = new Array(64); // Vertical Flip

    this.horiFlip = new Array(64); // Horizontal Flip

    this.bgPriority = new Array(64); // Background priority

    this.spr0HitX = 0; // Sprite #0 hit X coordinate

    this.spr0HitY = 0; // Sprite #0 hit Y coordinate

    this.hitSpr0 = false; // Palette data:

    this.sprPalette = new Array(16);
    this.imgPalette = new Array(16); // Create pattern table tile buffers:

    this.ptTile = new Array(512);

    for (i = 0; i < 512; i++) {
      this.ptTile[i] = new Tile();
    } // Create nametable buffers:
    // Name table data:


    this.ntable1 = new Array(4);
    this.currentMirroring = -1;
    this.nameTable = new Array(4);

    for (i = 0; i < 4; i++) {
      this.nameTable[i] = new NameTable(32, 32, "Nt" + i);
    } // Initialize mirroring lookup table:


    this.vramMirrorTable = new Array(0x8000);

    for (i = 0; i < 0x8000; i++) {
      this.vramMirrorTable[i] = i;
    }

    this.palTable = new PaletteTable();
    this.palTable.loadNTSCPalette(); //this.palTable.loadDefaultPalette();

    this.updateControlReg1(0);
    this.updateControlReg2(0);
  },
  // Sets Nametable mirroring.
  setMirroring: function setMirroring(mirroring) {
    if (mirroring === this.currentMirroring) {
      return;
    }

    this.currentMirroring = mirroring;
    this.triggerRendering(); // Remove mirroring:

    if (this.vramMirrorTable === null) {
      this.vramMirrorTable = new Array(0x8000);
    }

    for (var i = 0; i < 0x8000; i++) {
      this.vramMirrorTable[i] = i;
    } // Palette mirroring:


    this.defineMirrorRegion(0x3f20, 0x3f00, 0x20);
    this.defineMirrorRegion(0x3f40, 0x3f00, 0x20);
    this.defineMirrorRegion(0x3f80, 0x3f00, 0x20);
    this.defineMirrorRegion(0x3fc0, 0x3f00, 0x20); // Additional mirroring:

    this.defineMirrorRegion(0x3000, 0x2000, 0xf00);
    this.defineMirrorRegion(0x4000, 0x0000, 0x4000);

    if (mirroring === this.nes.rom.HORIZONTAL_MIRRORING) {
      // Horizontal mirroring.
      this.ntable1[0] = 0;
      this.ntable1[1] = 0;
      this.ntable1[2] = 1;
      this.ntable1[3] = 1;
      this.defineMirrorRegion(0x2400, 0x2000, 0x400);
      this.defineMirrorRegion(0x2c00, 0x2800, 0x400);
    } else if (mirroring === this.nes.rom.VERTICAL_MIRRORING) {
      // Vertical mirroring.
      this.ntable1[0] = 0;
      this.ntable1[1] = 1;
      this.ntable1[2] = 0;
      this.ntable1[3] = 1;
      this.defineMirrorRegion(0x2800, 0x2000, 0x400);
      this.defineMirrorRegion(0x2c00, 0x2400, 0x400);
    } else if (mirroring === this.nes.rom.SINGLESCREEN_MIRRORING) {
      // Single Screen mirroring
      this.ntable1[0] = 0;
      this.ntable1[1] = 0;
      this.ntable1[2] = 0;
      this.ntable1[3] = 0;
      this.defineMirrorRegion(0x2400, 0x2000, 0x400);
      this.defineMirrorRegion(0x2800, 0x2000, 0x400);
      this.defineMirrorRegion(0x2c00, 0x2000, 0x400);
    } else if (mirroring === this.nes.rom.SINGLESCREEN_MIRRORING2) {
      this.ntable1[0] = 1;
      this.ntable1[1] = 1;
      this.ntable1[2] = 1;
      this.ntable1[3] = 1;
      this.defineMirrorRegion(0x2400, 0x2400, 0x400);
      this.defineMirrorRegion(0x2800, 0x2400, 0x400);
      this.defineMirrorRegion(0x2c00, 0x2400, 0x400);
    } else {
      // Assume Four-screen mirroring.
      this.ntable1[0] = 0;
      this.ntable1[1] = 1;
      this.ntable1[2] = 2;
      this.ntable1[3] = 3;
    }
  },
  // Define a mirrored area in the address lookup table.
  // Assumes the regions don't overlap.
  // The 'to' region is the region that is physically in memory.
  defineMirrorRegion: function defineMirrorRegion(fromStart, toStart, size) {
    for (var i = 0; i < size; i++) {
      this.vramMirrorTable[fromStart + i] = toStart + i;
    }
  },
  startVBlank: function startVBlank() {
    // Do NMI:
    this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI); // Make sure everything is rendered:

    if (this.lastRenderedScanline < 239) {
      this.renderFramePartially(this.lastRenderedScanline + 1, 240 - this.lastRenderedScanline);
    } // End frame:


    this.endFrame(); // Reset scanline counter:

    this.lastRenderedScanline = -1;
  },
  endScanline: function endScanline() {
    switch (this.scanline) {
      case 19:
        // Dummy scanline.
        // May be variable length:
        if (this.dummyCycleToggle) {
          // Remove dead cycle at end of scanline,
          // for next scanline:
          this.curX = 1;
          this.dummyCycleToggle = !this.dummyCycleToggle;
        }

        break;

      case 20:
        // Clear VBlank flag:
        this.setStatusFlag(this.STATUS_VBLANK, false); // Clear Sprite #0 hit flag:

        this.setStatusFlag(this.STATUS_SPRITE0HIT, false);
        this.hitSpr0 = false;
        this.spr0HitX = -1;
        this.spr0HitY = -1;

        if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) {
          // Update counters:
          this.cntFV = this.regFV;
          this.cntV = this.regV;
          this.cntH = this.regH;
          this.cntVT = this.regVT;
          this.cntHT = this.regHT;

          if (this.f_bgVisibility === 1) {
            // Render dummy scanline:
            this.renderBgScanline(false, 0);
          }
        }

        if (this.f_bgVisibility === 1 && this.f_spVisibility === 1) {
          // Check sprite 0 hit for first scanline:
          this.checkSprite0(0);
        }

        if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) {
          // Clock mapper IRQ Counter:
          this.nes.mmap.clockIrqCounter();
        }

        break;

      case 261:
        // Dead scanline, no rendering.
        // Set VINT:
        this.setStatusFlag(this.STATUS_VBLANK, true);
        this.requestEndFrame = true;
        this.nmiCounter = 9; // Wrap around:

        this.scanline = -1; // will be incremented to 0

        break;

      default:
        if (this.scanline >= 21 && this.scanline <= 260) {
          // Render normally:
          if (this.f_bgVisibility === 1) {
            if (!this.scanlineAlreadyRendered) {
              // update scroll:
              this.cntHT = this.regHT;
              this.cntH = this.regH;
              this.renderBgScanline(true, this.scanline + 1 - 21);
            }

            this.scanlineAlreadyRendered = false; // Check for sprite 0 (next scanline):

            if (!this.hitSpr0 && this.f_spVisibility === 1) {
              if (this.sprX[0] >= -7 && this.sprX[0] < 256 && this.sprY[0] + 1 <= this.scanline - 20 && this.sprY[0] + 1 + (this.f_spriteSize === 0 ? 8 : 16) >= this.scanline - 20) {
                if (this.checkSprite0(this.scanline - 20)) {
                  this.hitSpr0 = true;
                }
              }
            }
          }

          if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) {
            // Clock mapper IRQ Counter:
            this.nes.mmap.clockIrqCounter();
          }
        }

    }

    this.scanline++;
    this.regsToAddress();
    this.cntsToAddress();
  },
  startFrame: function startFrame() {
    // Set background color:
    var bgColor = 0;

    if (this.f_dispType === 0) {
      // Color display.
      // f_color determines color emphasis.
      // Use first entry of image palette as BG color.
      bgColor = this.imgPalette[0];
    } else {
      // Monochrome display.
      // f_color determines the bg color.
      switch (this.f_color) {
        case 0:
          // Black
          bgColor = 0x00000;
          break;

        case 1:
          // Green
          bgColor = 0x00ff00;
          break;

        case 2:
          // Blue
          bgColor = 0xff0000;
          break;

        case 3:
          // Invalid. Use black.
          bgColor = 0x000000;
          break;

        case 4:
          // Red
          bgColor = 0x0000ff;
          break;

        default:
          // Invalid. Use black.
          bgColor = 0x0;
      }
    }

    var buffer = this.buffer;
    var i;

    for (i = 0; i < 256 * 240; i++) {
      buffer[i] = bgColor;
    }

    var pixrendered = this.pixrendered;

    for (i = 0; i < pixrendered.length; i++) {
      pixrendered[i] = 65;
    }
  },
  endFrame: function endFrame() {
    var i, x, y;
    var buffer = this.buffer; // Draw spr#0 hit coordinates:

    if (this.showSpr0Hit) {
      // Spr 0 position:
      if (this.sprX[0] >= 0 && this.sprX[0] < 256 && this.sprY[0] >= 0 && this.sprY[0] < 240) {
        for (i = 0; i < 256; i++) {
          buffer[(this.sprY[0] << 8) + i] = 0xff5555;
        }

        for (i = 0; i < 240; i++) {
          buffer[(i << 8) + this.sprX[0]] = 0xff5555;
        }
      } // Hit position:


      if (this.spr0HitX >= 0 && this.spr0HitX < 256 && this.spr0HitY >= 0 && this.spr0HitY < 240) {
        for (i = 0; i < 256; i++) {
          buffer[(this.spr0HitY << 8) + i] = 0x55ff55;
        }

        for (i = 0; i < 240; i++) {
          buffer[(i << 8) + this.spr0HitX] = 0x55ff55;
        }
      }
    } // This is a bit lazy..
    // if either the sprites or the background should be clipped,
    // both are clipped after rendering is finished.


    if (this.clipToTvSize || this.f_bgClipping === 0 || this.f_spClipping === 0) {
      // Clip left 8-pixels column:
      for (y = 0; y < 240; y++) {
        for (x = 0; x < 8; x++) {
          buffer[(y << 8) + x] = 0;
        }
      }
    }

    if (this.clipToTvSize) {
      // Clip right 8-pixels column too:
      for (y = 0; y < 240; y++) {
        for (x = 0; x < 8; x++) {
          buffer[(y << 8) + 255 - x] = 0;
        }
      }
    } // Clip top and bottom 8 pixels:


    if (this.clipToTvSize) {
      for (y = 0; y < 8; y++) {
        for (x = 0; x < 256; x++) {
          buffer[(y << 8) + x] = 0;
          buffer[(239 - y << 8) + x] = 0;
        }
      }
    }

    this.nes.ui.writeFrame(buffer);
  },
  updateControlReg1: function updateControlReg1(value) {
    this.triggerRendering();
    this.f_nmiOnVblank = value >> 7 & 1;
    this.f_spriteSize = value >> 5 & 1;
    this.f_bgPatternTable = value >> 4 & 1;
    this.f_spPatternTable = value >> 3 & 1;
    this.f_addrInc = value >> 2 & 1;
    this.f_nTblAddress = value & 3;
    this.regV = value >> 1 & 1;
    this.regH = value & 1;
    this.regS = value >> 4 & 1;
  },
  updateControlReg2: function updateControlReg2(value) {
    this.triggerRendering();
    this.f_color = value >> 5 & 7;
    this.f_spVisibility = value >> 4 & 1;
    this.f_bgVisibility = value >> 3 & 1;
    this.f_spClipping = value >> 2 & 1;
    this.f_bgClipping = value >> 1 & 1;
    this.f_dispType = value & 1;

    if (this.f_dispType === 0) {
      this.palTable.setEmphasis(this.f_color);
    }

    this.updatePalettes();
  },
  setStatusFlag: function setStatusFlag(flag, value) {
    var n = 1 << flag;
    this.nes.cpu.mem[0x2002] = this.nes.cpu.mem[0x2002] & 255 - n | (value ? n : 0);
  },
  // CPU Register $2002:
  // Read the Status Register.
  readStatusRegister: function readStatusRegister() {
    var tmp = this.nes.cpu.mem[0x2002]; // Reset scroll & VRAM Address toggle:

    this.firstWrite = true; // Clear VBlank flag:

    this.setStatusFlag(this.STATUS_VBLANK, false); // Fetch status data:

    return tmp;
  },
  // CPU Register $2003:
  // Write the SPR-RAM address that is used for sramWrite (Register 0x2004 in CPU memory map)
  writeSRAMAddress: function writeSRAMAddress(address) {
    this.sramAddress = address;
  },
  // CPU Register $2004 (R):
  // Read from SPR-RAM (Sprite RAM).
  // The address should be set first.
  sramLoad: function sramLoad() {
    /*short tmp = sprMem.load(sramAddress);
        sramAddress++; // Increment address
        sramAddress%=0x100;
        return tmp;*/
    return this.spriteMem[this.sramAddress];
  },
  // CPU Register $2004 (W):
  // Write to SPR-RAM (Sprite RAM).
  // The address should be set first.
  sramWrite: function sramWrite(value) {
    this.spriteMem[this.sramAddress] = value;
    this.spriteRamWriteUpdate(this.sramAddress, value);
    this.sramAddress++; // Increment address

    this.sramAddress %= 0x100;
  },
  // CPU Register $2005:
  // Write to scroll registers.
  // The first write is the vertical offset, the second is the
  // horizontal offset:
  scrollWrite: function scrollWrite(value) {
    this.triggerRendering();

    if (this.firstWrite) {
      // First write, horizontal scroll:
      this.regHT = value >> 3 & 31;
      this.regFH = value & 7;
    } else {
      // Second write, vertical scroll:
      this.regFV = value & 7;
      this.regVT = value >> 3 & 31;
    }

    this.firstWrite = !this.firstWrite;
  },
  // CPU Register $2006:
  // Sets the adress used when reading/writing from/to VRAM.
  // The first write sets the high byte, the second the low byte.
  writeVRAMAddress: function writeVRAMAddress(address) {
    if (this.firstWrite) {
      this.regFV = address >> 4 & 3;
      this.regV = address >> 3 & 1;
      this.regH = address >> 2 & 1;
      this.regVT = this.regVT & 7 | (address & 3) << 3;
    } else {
      this.triggerRendering();
      this.regVT = this.regVT & 24 | address >> 5 & 7;
      this.regHT = address & 31;
      this.cntFV = this.regFV;
      this.cntV = this.regV;
      this.cntH = this.regH;
      this.cntVT = this.regVT;
      this.cntHT = this.regHT;
      this.checkSprite0(this.scanline - 20);
    }

    this.firstWrite = !this.firstWrite; // Invoke mapper latch:

    this.cntsToAddress();

    if (this.vramAddress < 0x2000) {
      this.nes.mmap.latchAccess(this.vramAddress);
    }
  },
  // CPU Register $2007(R):
  // Read from PPU memory. The address should be set first.
  vramLoad: function vramLoad() {
    var tmp;
    this.cntsToAddress();
    this.regsToAddress(); // If address is in range 0x0000-0x3EFF, return buffered values:

    if (this.vramAddress <= 0x3eff) {
      tmp = this.vramBufferedReadValue; // Update buffered value:

      if (this.vramAddress < 0x2000) {
        this.vramBufferedReadValue = this.vramMem[this.vramAddress];
      } else {
        this.vramBufferedReadValue = this.mirroredLoad(this.vramAddress);
      } // Mapper latch access:


      if (this.vramAddress < 0x2000) {
        this.nes.mmap.latchAccess(this.vramAddress);
      } // Increment by either 1 or 32, depending on d2 of Control Register 1:


      this.vramAddress += this.f_addrInc === 1 ? 32 : 1;
      this.cntsFromAddress();
      this.regsFromAddress();
      return tmp; // Return the previous buffered value.
    } // No buffering in this mem range. Read normally.


    tmp = this.mirroredLoad(this.vramAddress); // Increment by either 1 or 32, depending on d2 of Control Register 1:

    this.vramAddress += this.f_addrInc === 1 ? 32 : 1;
    this.cntsFromAddress();
    this.regsFromAddress();
    return tmp;
  },
  // CPU Register $2007(W):
  // Write to PPU memory. The address should be set first.
  vramWrite: function vramWrite(value) {
    this.triggerRendering();
    this.cntsToAddress();
    this.regsToAddress();

    if (this.vramAddress >= 0x2000) {
      // Mirroring is used.
      this.mirroredWrite(this.vramAddress, value);
    } else {
      // Write normally.
      this.writeMem(this.vramAddress, value); // Invoke mapper latch:

      this.nes.mmap.latchAccess(this.vramAddress);
    } // Increment by either 1 or 32, depending on d2 of Control Register 1:


    this.vramAddress += this.f_addrInc === 1 ? 32 : 1;
    this.regsFromAddress();
    this.cntsFromAddress();
  },
  // CPU Register $4014:
  // Write 256 bytes of main memory
  // into Sprite RAM.
  sramDMA: function sramDMA(value) {
    var baseAddress = value * 0x100;
    var data;

    for (var i = this.sramAddress; i < 256; i++) {
      data = this.nes.cpu.mem[baseAddress + i];
      this.spriteMem[i] = data;
      this.spriteRamWriteUpdate(i, data);
    }

    this.nes.cpu.haltCycles(513);
  },
  // Updates the scroll registers from a new VRAM address.
  regsFromAddress: function regsFromAddress() {
    var address = this.vramTmpAddress >> 8 & 0xff;
    this.regFV = address >> 4 & 7;
    this.regV = address >> 3 & 1;
    this.regH = address >> 2 & 1;
    this.regVT = this.regVT & 7 | (address & 3) << 3;
    address = this.vramTmpAddress & 0xff;
    this.regVT = this.regVT & 24 | address >> 5 & 7;
    this.regHT = address & 31;
  },
  // Updates the scroll registers from a new VRAM address.
  cntsFromAddress: function cntsFromAddress() {
    var address = this.vramAddress >> 8 & 0xff;
    this.cntFV = address >> 4 & 3;
    this.cntV = address >> 3 & 1;
    this.cntH = address >> 2 & 1;
    this.cntVT = this.cntVT & 7 | (address & 3) << 3;
    address = this.vramAddress & 0xff;
    this.cntVT = this.cntVT & 24 | address >> 5 & 7;
    this.cntHT = address & 31;
  },
  regsToAddress: function regsToAddress() {
    var b1 = (this.regFV & 7) << 4;
    b1 |= (this.regV & 1) << 3;
    b1 |= (this.regH & 1) << 2;
    b1 |= this.regVT >> 3 & 3;
    var b2 = (this.regVT & 7) << 5;
    b2 |= this.regHT & 31;
    this.vramTmpAddress = (b1 << 8 | b2) & 0x7fff;
  },
  cntsToAddress: function cntsToAddress() {
    var b1 = (this.cntFV & 7) << 4;
    b1 |= (this.cntV & 1) << 3;
    b1 |= (this.cntH & 1) << 2;
    b1 |= this.cntVT >> 3 & 3;
    var b2 = (this.cntVT & 7) << 5;
    b2 |= this.cntHT & 31;
    this.vramAddress = (b1 << 8 | b2) & 0x7fff;
  },
  incTileCounter: function incTileCounter(count) {
    for (var i = count; i !== 0; i--) {
      this.cntHT++;

      if (this.cntHT === 32) {
        this.cntHT = 0;
        this.cntVT++;

        if (this.cntVT >= 30) {
          this.cntH++;

          if (this.cntH === 2) {
            this.cntH = 0;
            this.cntV++;

            if (this.cntV === 2) {
              this.cntV = 0;
              this.cntFV++;
              this.cntFV &= 0x7;
            }
          }
        }
      }
    }
  },
  // Reads from memory, taking into account
  // mirroring/mapping of address ranges.
  mirroredLoad: function mirroredLoad(address) {
    return this.vramMem[this.vramMirrorTable[address]];
  },
  // Writes to memory, taking into account
  // mirroring/mapping of address ranges.
  mirroredWrite: function mirroredWrite(address, value) {
    if (address >= 0x3f00 && address < 0x3f20) {
      // Palette write mirroring.
      if (address === 0x3f00 || address === 0x3f10) {
        this.writeMem(0x3f00, value);
        this.writeMem(0x3f10, value);
      } else if (address === 0x3f04 || address === 0x3f14) {
        this.writeMem(0x3f04, value);
        this.writeMem(0x3f14, value);
      } else if (address === 0x3f08 || address === 0x3f18) {
        this.writeMem(0x3f08, value);
        this.writeMem(0x3f18, value);
      } else if (address === 0x3f0c || address === 0x3f1c) {
        this.writeMem(0x3f0c, value);
        this.writeMem(0x3f1c, value);
      } else {
        this.writeMem(address, value);
      }
    } else {
      // Use lookup table for mirrored address:
      if (address < this.vramMirrorTable.length) {
        this.writeMem(this.vramMirrorTable[address], value);
      } else {
        throw new Error("Invalid VRAM address: " + address.toString(16));
      }
    }
  },
  triggerRendering: function triggerRendering() {
    if (this.scanline >= 21 && this.scanline <= 260) {
      // Render sprites, and combine:
      this.renderFramePartially(this.lastRenderedScanline + 1, this.scanline - 21 - this.lastRenderedScanline); // Set last rendered scanline:

      this.lastRenderedScanline = this.scanline - 21;
    }
  },
  renderFramePartially: function renderFramePartially(startScan, scanCount) {
    if (this.f_spVisibility === 1) {
      this.renderSpritesPartially(startScan, scanCount, true);
    }

    if (this.f_bgVisibility === 1) {
      var si = startScan << 8;
      var ei = startScan + scanCount << 8;

      if (ei > 0xf000) {
        ei = 0xf000;
      }

      var buffer = this.buffer;
      var bgbuffer = this.bgbuffer;
      var pixrendered = this.pixrendered;

      for (var destIndex = si; destIndex < ei; destIndex++) {
        if (pixrendered[destIndex] > 0xff) {
          buffer[destIndex] = bgbuffer[destIndex];
        }
      }
    }

    if (this.f_spVisibility === 1) {
      this.renderSpritesPartially(startScan, scanCount, false);
    }

    this.validTileData = false;
  },
  renderBgScanline: function renderBgScanline(bgbuffer, scan) {
    var baseTile = this.regS === 0 ? 0 : 256;
    var destIndex = (scan << 8) - this.regFH;
    this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH];
    this.cntHT = this.regHT;
    this.cntH = this.regH;
    this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH];

    if (scan < 240 && scan - this.cntFV >= 0) {
      var tscanoffset = this.cntFV << 3;
      var scantile = this.scantile;
      var attrib = this.attrib;
      var ptTile = this.ptTile;
      var nameTable = this.nameTable;
      var imgPalette = this.imgPalette;
      var pixrendered = this.pixrendered;
      var targetBuffer = bgbuffer ? this.bgbuffer : this.buffer;
      var t, tpix, att, col;

      for (var tile = 0; tile < 32; tile++) {
        if (scan >= 0) {
          // Fetch tile & attrib data:
          if (this.validTileData) {
            // Get data from array:
            t = scantile[tile];

            if (typeof t === "undefined") {
              continue;
            }

            tpix = t.pix;
            att = attrib[tile];
          } else {
            // Fetch data:
            t = ptTile[baseTile + nameTable[this.curNt].getTileIndex(this.cntHT, this.cntVT)];

            if (typeof t === "undefined") {
              continue;
            }

            tpix = t.pix;
            att = nameTable[this.curNt].getAttrib(this.cntHT, this.cntVT);
            scantile[tile] = t;
            attrib[tile] = att;
          } // Render tile scanline:


          var sx = 0;
          var x = (tile << 3) - this.regFH;

          if (x > -8) {
            if (x < 0) {
              destIndex -= x;
              sx = -x;
            }

            if (t.opaque[this.cntFV]) {
              for (; sx < 8; sx++) {
                targetBuffer[destIndex] = imgPalette[tpix[tscanoffset + sx] + att];
                pixrendered[destIndex] |= 256;
                destIndex++;
              }
            } else {
              for (; sx < 8; sx++) {
                col = tpix[tscanoffset + sx];

                if (col !== 0) {
                  targetBuffer[destIndex] = imgPalette[col + att];
                  pixrendered[destIndex] |= 256;
                }

                destIndex++;
              }
            }
          }
        } // Increase Horizontal Tile Counter:


        if (++this.cntHT === 32) {
          this.cntHT = 0;
          this.cntH++;
          this.cntH %= 2;
          this.curNt = this.ntable1[(this.cntV << 1) + this.cntH];
        }
      } // Tile data for one row should now have been fetched,
      // so the data in the array is valid.


      this.validTileData = true;
    } // update vertical scroll:


    this.cntFV++;

    if (this.cntFV === 8) {
      this.cntFV = 0;
      this.cntVT++;

      if (this.cntVT === 30) {
        this.cntVT = 0;
        this.cntV++;
        this.cntV %= 2;
        this.curNt = this.ntable1[(this.cntV << 1) + this.cntH];
      } else if (this.cntVT === 32) {
        this.cntVT = 0;
      } // Invalidate fetched data:


      this.validTileData = false;
    }
  },
  renderSpritesPartially: function renderSpritesPartially(startscan, scancount, bgPri) {
    if (this.f_spVisibility === 1) {
      for (var i = 0; i < 64; i++) {
        if (this.bgPriority[i] === bgPri && this.sprX[i] >= 0 && this.sprX[i] < 256 && this.sprY[i] + 8 >= startscan && this.sprY[i] < startscan + scancount) {
          // Show sprite.
          if (this.f_spriteSize === 0) {
            // 8x8 sprites
            this.srcy1 = 0;
            this.srcy2 = 8;

            if (this.sprY[i] < startscan) {
              this.srcy1 = startscan - this.sprY[i] - 1;
            }

            if (this.sprY[i] + 8 > startscan + scancount) {
              this.srcy2 = startscan + scancount - this.sprY[i] + 1;
            }

            if (this.f_spPatternTable === 0) {
              this.ptTile[this.sprTile[i]].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[i], this.sprY[i] + 1, this.sprCol[i], this.sprPalette, this.horiFlip[i], this.vertFlip[i], i, this.pixrendered);
            } else {
              this.ptTile[this.sprTile[i] + 256].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[i], this.sprY[i] + 1, this.sprCol[i], this.sprPalette, this.horiFlip[i], this.vertFlip[i], i, this.pixrendered);
            }
          } else {
            // 8x16 sprites
            var top = this.sprTile[i];

            if ((top & 1) !== 0) {
              top = this.sprTile[i] - 1 + 256;
            }

            var srcy1 = 0;
            var srcy2 = 8;

            if (this.sprY[i] < startscan) {
              srcy1 = startscan - this.sprY[i] - 1;
            }

            if (this.sprY[i] + 8 > startscan + scancount) {
              srcy2 = startscan + scancount - this.sprY[i];
            }

            this.ptTile[top + (this.vertFlip[i] ? 1 : 0)].render(this.buffer, 0, srcy1, 8, srcy2, this.sprX[i], this.sprY[i] + 1, this.sprCol[i], this.sprPalette, this.horiFlip[i], this.vertFlip[i], i, this.pixrendered);
            srcy1 = 0;
            srcy2 = 8;

            if (this.sprY[i] + 8 < startscan) {
              srcy1 = startscan - (this.sprY[i] + 8 + 1);
            }

            if (this.sprY[i] + 16 > startscan + scancount) {
              srcy2 = startscan + scancount - (this.sprY[i] + 8);
            }

            this.ptTile[top + (this.vertFlip[i] ? 0 : 1)].render(this.buffer, 0, srcy1, 8, srcy2, this.sprX[i], this.sprY[i] + 1 + 8, this.sprCol[i], this.sprPalette, this.horiFlip[i], this.vertFlip[i], i, this.pixrendered);
          }
        }
      }
    }
  },
  checkSprite0: function checkSprite0(scan) {
    this.spr0HitX = -1;
    this.spr0HitY = -1;
    var toffset;
    var tIndexAdd = this.f_spPatternTable === 0 ? 0 : 256;
    var x, y, t, i;
    var bufferIndex;
    x = this.sprX[0];
    y = this.sprY[0] + 1;

    if (this.f_spriteSize === 0) {
      // 8x8 sprites.
      // Check range:
      if (y <= scan && y + 8 > scan && x >= -7 && x < 256) {
        // Sprite is in range.
        // Draw scanline:
        t = this.ptTile[this.sprTile[0] + tIndexAdd];

        if (this.vertFlip[0]) {
          toffset = 7 - (scan - y);
        } else {
          toffset = scan - y;
        }

        toffset *= 8;
        bufferIndex = scan * 256 + x;

        if (this.horiFlip[0]) {
          for (i = 7; i >= 0; i--) {
            if (x >= 0 && x < 256) {
              if (bufferIndex >= 0 && bufferIndex < 61440 && this.pixrendered[bufferIndex] !== 0) {
                if (t.pix[toffset + i] !== 0) {
                  this.spr0HitX = bufferIndex % 256;
                  this.spr0HitY = scan;
                  return true;
                }
              }
            }

            x++;
            bufferIndex++;
          }
        } else {
          for (i = 0; i < 8; i++) {
            if (x >= 0 && x < 256) {
              if (bufferIndex >= 0 && bufferIndex < 61440 && this.pixrendered[bufferIndex] !== 0) {
                if (t.pix[toffset + i] !== 0) {
                  this.spr0HitX = bufferIndex % 256;
                  this.spr0HitY = scan;
                  return true;
                }
              }
            }

            x++;
            bufferIndex++;
          }
        }
      }
    } else {
      // 8x16 sprites:
      // Check range:
      if (y <= scan && y + 16 > scan && x >= -7 && x < 256) {
        // Sprite is in range.
        // Draw scanline:
        if (this.vertFlip[0]) {
          toffset = 15 - (scan - y);
        } else {
          toffset = scan - y;
        }

        if (toffset < 8) {
          // first half of sprite.
          t = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 1 : 0) + ((this.sprTile[0] & 1) !== 0 ? 255 : 0)];
        } else {
          // second half of sprite.
          t = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 0 : 1) + ((this.sprTile[0] & 1) !== 0 ? 255 : 0)];

          if (this.vertFlip[0]) {
            toffset = 15 - toffset;
          } else {
            toffset -= 8;
          }
        }

        toffset *= 8;
        bufferIndex = scan * 256 + x;

        if (this.horiFlip[0]) {
          for (i = 7; i >= 0; i--) {
            if (x >= 0 && x < 256) {
              if (bufferIndex >= 0 && bufferIndex < 61440 && this.pixrendered[bufferIndex] !== 0) {
                if (t.pix[toffset + i] !== 0) {
                  this.spr0HitX = bufferIndex % 256;
                  this.spr0HitY = scan;
                  return true;
                }
              }
            }

            x++;
            bufferIndex++;
          }
        } else {
          for (i = 0; i < 8; i++) {
            if (x >= 0 && x < 256) {
              if (bufferIndex >= 0 && bufferIndex < 61440 && this.pixrendered[bufferIndex] !== 0) {
                if (t.pix[toffset + i] !== 0) {
                  this.spr0HitX = bufferIndex % 256;
                  this.spr0HitY = scan;
                  return true;
                }
              }
            }

            x++;
            bufferIndex++;
          }
        }
      }
    }

    return false;
  },
  // This will write to PPU memory, and
  // update internally buffered data
  // appropriately.
  writeMem: function writeMem(address, value) {
    this.vramMem[address] = value; // Update internally buffered data:

    if (address < 0x2000) {
      this.vramMem[address] = value;
      this.patternWrite(address, value);
    } else if (address >= 0x2000 && address < 0x23c0) {
      this.nameTableWrite(this.ntable1[0], address - 0x2000, value);
    } else if (address >= 0x23c0 && address < 0x2400) {
      this.attribTableWrite(this.ntable1[0], address - 0x23c0, value);
    } else if (address >= 0x2400 && address < 0x27c0) {
      this.nameTableWrite(this.ntable1[1], address - 0x2400, value);
    } else if (address >= 0x27c0 && address < 0x2800) {
      this.attribTableWrite(this.ntable1[1], address - 0x27c0, value);
    } else if (address >= 0x2800 && address < 0x2bc0) {
      this.nameTableWrite(this.ntable1[2], address - 0x2800, value);
    } else if (address >= 0x2bc0 && address < 0x2c00) {
      this.attribTableWrite(this.ntable1[2], address - 0x2bc0, value);
    } else if (address >= 0x2c00 && address < 0x2fc0) {
      this.nameTableWrite(this.ntable1[3], address - 0x2c00, value);
    } else if (address >= 0x2fc0 && address < 0x3000) {
      this.attribTableWrite(this.ntable1[3], address - 0x2fc0, value);
    } else if (address >= 0x3f00 && address < 0x3f20) {
      this.updatePalettes();
    }
  },
  // Reads data from $3f00 to $f20
  // into the two buffered palettes.
  updatePalettes: function updatePalettes() {
    var i;

    for (i = 0; i < 16; i++) {
      if (this.f_dispType === 0) {
        this.imgPalette[i] = this.palTable.getEntry(this.vramMem[0x3f00 + i] & 63);
      } else {
        this.imgPalette[i] = this.palTable.getEntry(this.vramMem[0x3f00 + i] & 32);
      }
    }

    for (i = 0; i < 16; i++) {
      if (this.f_dispType === 0) {
        this.sprPalette[i] = this.palTable.getEntry(this.vramMem[0x3f10 + i] & 63);
      } else {
        this.sprPalette[i] = this.palTable.getEntry(this.vramMem[0x3f10 + i] & 32);
      }
    }
  },
  // Updates the internal pattern
  // table buffers with this new byte.
  // In vNES, there is a version of this with 4 arguments which isn't used.
  patternWrite: function patternWrite(address, value) {
    var tileIndex = Math.floor(address / 16);
    var leftOver = address % 16;

    if (leftOver < 8) {
      this.ptTile[tileIndex].setScanline(leftOver, value, this.vramMem[address + 8]);
    } else {
      this.ptTile[tileIndex].setScanline(leftOver - 8, this.vramMem[address - 8], value);
    }
  },
  // Updates the internal name table buffers
  // with this new byte.
  nameTableWrite: function nameTableWrite(index, address, value) {
    this.nameTable[index].tile[address] = value; // Update Sprite #0 hit:
    //updateSpr0Hit();

    this.checkSprite0(this.scanline - 20);
  },
  // Updates the internal pattern
  // table buffers with this new attribute
  // table byte.
  attribTableWrite: function attribTableWrite(index, address, value) {
    this.nameTable[index].writeAttrib(address, value);
  },
  // Updates the internally buffered sprite
  // data with this new byte of info.
  spriteRamWriteUpdate: function spriteRamWriteUpdate(address, value) {
    var tIndex = Math.floor(address / 4);

    if (tIndex === 0) {
      //updateSpr0Hit();
      this.checkSprite0(this.scanline - 20);
    }

    if (address % 4 === 0) {
      // Y coordinate
      this.sprY[tIndex] = value;
    } else if (address % 4 === 1) {
      // Tile index
      this.sprTile[tIndex] = value;
    } else if (address % 4 === 2) {
      // Attributes
      this.vertFlip[tIndex] = (value & 0x80) !== 0;
      this.horiFlip[tIndex] = (value & 0x40) !== 0;
      this.bgPriority[tIndex] = (value & 0x20) !== 0;
      this.sprCol[tIndex] = (value & 3) << 2;
    } else if (address % 4 === 3) {
      // X coordinate
      this.sprX[tIndex] = value;
    }
  },
  doNMI: function doNMI() {
    // Set VBlank flag:
    this.setStatusFlag(this.STATUS_VBLANK, true); //nes.getCpu().doNonMaskableInterrupt();

    this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI);
  },
  isPixelWhite: function isPixelWhite(x, y) {
    this.triggerRendering();
    return this.nes.ppu.buffer[(y << 8) + x] === 0xffffff;
  },
  JSON_PROPERTIES: [// Memory
  "vramMem", "spriteMem", // Counters
  "cntFV", "cntV", "cntH", "cntVT", "cntHT", // Registers
  "regFV", "regV", "regH", "regVT", "regHT", "regFH", "regS", // VRAM addr
  "vramAddress", "vramTmpAddress", // Control/Status registers
  "f_nmiOnVblank", "f_spriteSize", "f_bgPatternTable", "f_spPatternTable", "f_addrInc", "f_nTblAddress", "f_color", "f_spVisibility", "f_bgVisibility", "f_spClipping", "f_bgClipping", "f_dispType", // VRAM I/O
  "vramBufferedReadValue", "firstWrite", // Mirroring
  "currentMirroring", "vramMirrorTable", "ntable1", // SPR-RAM I/O
  "sramAddress", // Sprites. Most sprite data is rebuilt from spriteMem
  "hitSpr0", // Palettes
  "sprPalette", "imgPalette", // Rendering progression
  "curX", "scanline", "lastRenderedScanline", "curNt", "scantile", // Used during rendering
  "attrib", "buffer", "bgbuffer", "pixrendered", // Misc
  "requestEndFrame", "nmiOk", "dummyCycleToggle", "nmiCounter", "validTileData", "scanlineAlreadyRendered"],
  toJSON: function toJSON() {
    var i;
    var state = utils.toJSON(this);
    state.nameTable = [];

    for (i = 0; i < this.nameTable.length; i++) {
      state.nameTable[i] = this.nameTable[i].toJSON();
    }

    state.ptTile = [];

    for (i = 0; i < this.ptTile.length; i++) {
      state.ptTile[i] = this.ptTile[i].toJSON();
    }

    return state;
  },
  fromJSON: function fromJSON(state) {
    var i;
    utils.fromJSON(this, state);

    for (i = 0; i < this.nameTable.length; i++) {
      this.nameTable[i].fromJSON(state.nameTable[i]);
    }

    for (i = 0; i < this.ptTile.length; i++) {
      this.ptTile[i].fromJSON(state.ptTile[i]);
    } // Sprite data:


    for (i = 0; i < this.spriteMem.length; i++) {
      this.spriteRamWriteUpdate(i, this.spriteMem[i]);
    }
  }
};

var NameTable = function NameTable(width, height, name) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.tile = new Array(width * height);
  this.attrib = new Array(width * height);

  for (var i = 0; i < width * height; i++) {
    this.tile[i] = 0;
    this.attrib[i] = 0;
  }
};

NameTable.prototype = {
  getTileIndex: function getTileIndex(x, y) {
    return this.tile[y * this.width + x];
  },
  getAttrib: function getAttrib(x, y) {
    return this.attrib[y * this.width + x];
  },
  writeAttrib: function writeAttrib(index, value) {
    var basex = index % 8 * 4;
    var basey = Math.floor(index / 8) * 4;
    var add;
    var tx, ty;
    var attindex;

    for (var sqy = 0; sqy < 2; sqy++) {
      for (var sqx = 0; sqx < 2; sqx++) {
        add = value >> 2 * (sqy * 2 + sqx) & 3;

        for (var y = 0; y < 2; y++) {
          for (var x = 0; x < 2; x++) {
            tx = basex + sqx * 2 + x;
            ty = basey + sqy * 2 + y;
            attindex = ty * this.width + tx;
            this.attrib[attindex] = add << 2 & 12;
          }
        }
      }
    }
  },
  toJSON: function toJSON() {
    return {
      tile: this.tile,
      attrib: this.attrib
    };
  },
  fromJSON: function fromJSON(s) {
    this.tile = s.tile;
    this.attrib = s.attrib;
  }
};

var PaletteTable = function PaletteTable() {
  this.curTable = new Array(64);
  this.emphTable = new Array(8);
  this.currentEmph = -1;
};

PaletteTable.prototype = {
  reset: function reset() {
    this.setEmphasis(0);
  },
  loadNTSCPalette: function loadNTSCPalette() {
    // prettier-ignore
    this.curTable = [0x525252, 0xB40000, 0xA00000, 0xB1003D, 0x740069, 0x00005B, 0x00005F, 0x001840, 0x002F10, 0x084A08, 0x006700, 0x124200, 0x6D2800, 0x000000, 0x000000, 0x000000, 0xC4D5E7, 0xFF4000, 0xDC0E22, 0xFF476B, 0xD7009F, 0x680AD7, 0x0019BC, 0x0054B1, 0x006A5B, 0x008C03, 0x00AB00, 0x2C8800, 0xA47200, 0x000000, 0x000000, 0x000000, 0xF8F8F8, 0xFFAB3C, 0xFF7981, 0xFF5BC5, 0xFF48F2, 0xDF49FF, 0x476DFF, 0x00B4F7, 0x00E0FF, 0x00E375, 0x03F42B, 0x78B82E, 0xE5E218, 0x787878, 0x000000, 0x000000, 0xFFFFFF, 0xFFF2BE, 0xF8B8B8, 0xF8B8D8, 0xFFB6FF, 0xFFC3FF, 0xC7D1FF, 0x9ADAFF, 0x88EDF8, 0x83FFDD, 0xB8F8B8, 0xF5F8AC, 0xFFFFB0, 0xF8D8F8, 0x000000, 0x000000];
    this.makeTables();
    this.setEmphasis(0);
  },
  loadPALPalette: function loadPALPalette() {
    // prettier-ignore
    this.curTable = [0x525252, 0xB40000, 0xA00000, 0xB1003D, 0x740069, 0x00005B, 0x00005F, 0x001840, 0x002F10, 0x084A08, 0x006700, 0x124200, 0x6D2800, 0x000000, 0x000000, 0x000000, 0xC4D5E7, 0xFF4000, 0xDC0E22, 0xFF476B, 0xD7009F, 0x680AD7, 0x0019BC, 0x0054B1, 0x006A5B, 0x008C03, 0x00AB00, 0x2C8800, 0xA47200, 0x000000, 0x000000, 0x000000, 0xF8F8F8, 0xFFAB3C, 0xFF7981, 0xFF5BC5, 0xFF48F2, 0xDF49FF, 0x476DFF, 0x00B4F7, 0x00E0FF, 0x00E375, 0x03F42B, 0x78B82E, 0xE5E218, 0x787878, 0x000000, 0x000000, 0xFFFFFF, 0xFFF2BE, 0xF8B8B8, 0xF8B8D8, 0xFFB6FF, 0xFFC3FF, 0xC7D1FF, 0x9ADAFF, 0x88EDF8, 0x83FFDD, 0xB8F8B8, 0xF5F8AC, 0xFFFFB0, 0xF8D8F8, 0x000000, 0x000000];
    this.makeTables();
    this.setEmphasis(0);
  },
  makeTables: function makeTables() {
    var r, g, b, col, i, rFactor, gFactor, bFactor; // Calculate a table for each possible emphasis setting:

    for (var emph = 0; emph < 8; emph++) {
      // Determine color component factors:
      rFactor = 1.0;
      gFactor = 1.0;
      bFactor = 1.0;

      if ((emph & 1) !== 0) {
        rFactor = 0.75;
        bFactor = 0.75;
      }

      if ((emph & 2) !== 0) {
        rFactor = 0.75;
        gFactor = 0.75;
      }

      if ((emph & 4) !== 0) {
        gFactor = 0.75;
        bFactor = 0.75;
      }

      this.emphTable[emph] = new Array(64); // Calculate table:

      for (i = 0; i < 64; i++) {
        col = this.curTable[i];
        r = Math.floor(this.getRed(col) * rFactor);
        g = Math.floor(this.getGreen(col) * gFactor);
        b = Math.floor(this.getBlue(col) * bFactor);
        this.emphTable[emph][i] = this.getRgb(r, g, b);
      }
    }
  },
  setEmphasis: function setEmphasis(emph) {
    if (emph !== this.currentEmph) {
      this.currentEmph = emph;

      for (var i = 0; i < 64; i++) {
        this.curTable[i] = this.emphTable[emph][i];
      }
    }
  },
  getEntry: function getEntry(yiq) {
    return this.curTable[yiq];
  },
  getRed: function getRed(rgb) {
    return rgb >> 16 & 0xff;
  },
  getGreen: function getGreen(rgb) {
    return rgb >> 8 & 0xff;
  },
  getBlue: function getBlue(rgb) {
    return rgb & 0xff;
  },
  getRgb: function getRgb(r, g, b) {
    return r << 16 | g << 8 | b;
  },
  loadDefaultPalette: function loadDefaultPalette() {
    this.curTable[0] = this.getRgb(117, 117, 117);
    this.curTable[1] = this.getRgb(39, 27, 143);
    this.curTable[2] = this.getRgb(0, 0, 171);
    this.curTable[3] = this.getRgb(71, 0, 159);
    this.curTable[4] = this.getRgb(143, 0, 119);
    this.curTable[5] = this.getRgb(171, 0, 19);
    this.curTable[6] = this.getRgb(167, 0, 0);
    this.curTable[7] = this.getRgb(127, 11, 0);
    this.curTable[8] = this.getRgb(67, 47, 0);
    this.curTable[9] = this.getRgb(0, 71, 0);
    this.curTable[10] = this.getRgb(0, 81, 0);
    this.curTable[11] = this.getRgb(0, 63, 23);
    this.curTable[12] = this.getRgb(27, 63, 95);
    this.curTable[13] = this.getRgb(0, 0, 0);
    this.curTable[14] = this.getRgb(0, 0, 0);
    this.curTable[15] = this.getRgb(0, 0, 0);
    this.curTable[16] = this.getRgb(188, 188, 188);
    this.curTable[17] = this.getRgb(0, 115, 239);
    this.curTable[18] = this.getRgb(35, 59, 239);
    this.curTable[19] = this.getRgb(131, 0, 243);
    this.curTable[20] = this.getRgb(191, 0, 191);
    this.curTable[21] = this.getRgb(231, 0, 91);
    this.curTable[22] = this.getRgb(219, 43, 0);
    this.curTable[23] = this.getRgb(203, 79, 15);
    this.curTable[24] = this.getRgb(139, 115, 0);
    this.curTable[25] = this.getRgb(0, 151, 0);
    this.curTable[26] = this.getRgb(0, 171, 0);
    this.curTable[27] = this.getRgb(0, 147, 59);
    this.curTable[28] = this.getRgb(0, 131, 139);
    this.curTable[29] = this.getRgb(0, 0, 0);
    this.curTable[30] = this.getRgb(0, 0, 0);
    this.curTable[31] = this.getRgb(0, 0, 0);
    this.curTable[32] = this.getRgb(255, 255, 255);
    this.curTable[33] = this.getRgb(63, 191, 255);
    this.curTable[34] = this.getRgb(95, 151, 255);
    this.curTable[35] = this.getRgb(167, 139, 253);
    this.curTable[36] = this.getRgb(247, 123, 255);
    this.curTable[37] = this.getRgb(255, 119, 183);
    this.curTable[38] = this.getRgb(255, 119, 99);
    this.curTable[39] = this.getRgb(255, 155, 59);
    this.curTable[40] = this.getRgb(243, 191, 63);
    this.curTable[41] = this.getRgb(131, 211, 19);
    this.curTable[42] = this.getRgb(79, 223, 75);
    this.curTable[43] = this.getRgb(88, 248, 152);
    this.curTable[44] = this.getRgb(0, 235, 219);
    this.curTable[45] = this.getRgb(0, 0, 0);
    this.curTable[46] = this.getRgb(0, 0, 0);
    this.curTable[47] = this.getRgb(0, 0, 0);
    this.curTable[48] = this.getRgb(255, 255, 255);
    this.curTable[49] = this.getRgb(171, 231, 255);
    this.curTable[50] = this.getRgb(199, 215, 255);
    this.curTable[51] = this.getRgb(215, 203, 255);
    this.curTable[52] = this.getRgb(255, 199, 255);
    this.curTable[53] = this.getRgb(255, 199, 219);
    this.curTable[54] = this.getRgb(255, 191, 179);
    this.curTable[55] = this.getRgb(255, 219, 171);
    this.curTable[56] = this.getRgb(255, 231, 163);
    this.curTable[57] = this.getRgb(227, 255, 163);
    this.curTable[58] = this.getRgb(171, 243, 191);
    this.curTable[59] = this.getRgb(179, 255, 207);
    this.curTable[60] = this.getRgb(159, 255, 243);
    this.curTable[61] = this.getRgb(0, 0, 0);
    this.curTable[62] = this.getRgb(0, 0, 0);
    this.curTable[63] = this.getRgb(0, 0, 0);
    this.makeTables();
    this.setEmphasis(0);
  }
};
module.exports = PPU;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

var CPU_FREQ_NTSC = 1789772.5; //1789772.72727272d;
// var CPU_FREQ_PAL = 1773447.4;

var PAPU = function PAPU(nes) {
  this.nes = nes;
  this.square1 = new ChannelSquare(this, true);
  this.square2 = new ChannelSquare(this, false);
  this.triangle = new ChannelTriangle(this);
  this.noise = new ChannelNoise(this);
  this.dmc = new ChannelDM(this);
  this.frameIrqCounter = null;
  this.frameIrqCounterMax = 4;
  this.initCounter = 2048;
  this.channelEnableValue = null;
  this.sampleRate = 44100;
  this.lengthLookup = null;
  this.dmcFreqLookup = null;
  this.noiseWavelengthLookup = null;
  this.square_table = null;
  this.tnd_table = null;
  this.frameIrqEnabled = false;
  this.frameIrqActive = null;
  this.frameClockNow = null;
  this.startedPlaying = false;
  this.recordOutput = false;
  this.initingHardware = false;
  this.masterFrameCounter = null;
  this.derivedFrameCounter = null;
  this.countSequence = null;
  this.sampleTimer = null;
  this.frameTime = null;
  this.sampleTimerMax = null;
  this.sampleCount = null;
  this.triValue = 0;
  this.smpSquare1 = null;
  this.smpSquare2 = null;
  this.smpTriangle = null;
  this.smpDmc = null;
  this.accCount = null; // DC removal vars:

  this.prevSampleL = 0;
  this.prevSampleR = 0;
  this.smpAccumL = 0;
  this.smpAccumR = 0; // DAC range:

  this.dacRange = 0;
  this.dcValue = 0; // Master volume:

  this.masterVolume = 256; // Stereo positioning:

  this.stereoPosLSquare1 = null;
  this.stereoPosLSquare2 = null;
  this.stereoPosLTriangle = null;
  this.stereoPosLNoise = null;
  this.stereoPosLDMC = null;
  this.stereoPosRSquare1 = null;
  this.stereoPosRSquare2 = null;
  this.stereoPosRTriangle = null;
  this.stereoPosRNoise = null;
  this.stereoPosRDMC = null;
  this.extraCycles = null;
  this.maxSample = null;
  this.minSample = null; // Panning:

  this.panning = [80, 170, 100, 150, 128];
  this.setPanning(this.panning); // Initialize lookup tables:

  this.initLengthLookup();
  this.initDmcFrequencyLookup();
  this.initNoiseWavelengthLookup();
  this.initDACtables(); // Init sound registers:

  for (var i = 0; i < 0x14; i++) {
    if (i === 0x10) {
      this.writeReg(0x4010, 0x10);
    } else {
      this.writeReg(0x4000 + i, 0);
    }
  }

  this.reset();
};

PAPU.prototype = {
  reset: function reset() {
    this.sampleRate = this.nes.opts.sampleRate;
    this.sampleTimerMax = Math.floor(1024.0 * CPU_FREQ_NTSC * this.nes.opts.preferredFrameRate / (this.sampleRate * 60.0));
    this.frameTime = Math.floor(14915.0 * this.nes.opts.preferredFrameRate / 60.0);
    this.sampleTimer = 0;
    this.updateChannelEnable(0);
    this.masterFrameCounter = 0;
    this.derivedFrameCounter = 0;
    this.countSequence = 0;
    this.sampleCount = 0;
    this.initCounter = 2048;
    this.frameIrqEnabled = false;
    this.initingHardware = false;
    this.resetCounter();
    this.square1.reset();
    this.square2.reset();
    this.triangle.reset();
    this.noise.reset();
    this.dmc.reset();
    this.accCount = 0;
    this.smpSquare1 = 0;
    this.smpSquare2 = 0;
    this.smpTriangle = 0;
    this.smpDmc = 0;
    this.frameIrqEnabled = false;
    this.frameIrqCounterMax = 4;
    this.channelEnableValue = 0xff;
    this.startedPlaying = false;
    this.prevSampleL = 0;
    this.prevSampleR = 0;
    this.smpAccumL = 0;
    this.smpAccumR = 0;
    this.maxSample = -500000;
    this.minSample = 500000;
  },
  // eslint-disable-next-line no-unused-vars
  readReg: function readReg(address) {
    // Read 0x4015:
    var tmp = 0;
    tmp |= this.square1.getLengthStatus();
    tmp |= this.square2.getLengthStatus() << 1;
    tmp |= this.triangle.getLengthStatus() << 2;
    tmp |= this.noise.getLengthStatus() << 3;
    tmp |= this.dmc.getLengthStatus() << 4;
    tmp |= (this.frameIrqActive && this.frameIrqEnabled ? 1 : 0) << 6;
    tmp |= this.dmc.getIrqStatus() << 7;
    this.frameIrqActive = false;
    this.dmc.irqGenerated = false;
    return tmp & 0xffff;
  },
  writeReg: function writeReg(address, value) {
    if (address >= 0x4000 && address < 0x4004) {
      // Square Wave 1 Control
      this.square1.writeReg(address, value); // console.log("Square Write");
    } else if (address >= 0x4004 && address < 0x4008) {
      // Square 2 Control
      this.square2.writeReg(address, value);
    } else if (address >= 0x4008 && address < 0x400c) {
      // Triangle Control
      this.triangle.writeReg(address, value);
    } else if (address >= 0x400c && address <= 0x400f) {
      // Noise Control
      this.noise.writeReg(address, value);
    } else if (address === 0x4010) {
      // DMC Play mode & DMA frequency
      this.dmc.writeReg(address, value);
    } else if (address === 0x4011) {
      // DMC Delta Counter
      this.dmc.writeReg(address, value);
    } else if (address === 0x4012) {
      // DMC Play code starting address
      this.dmc.writeReg(address, value);
    } else if (address === 0x4013) {
      // DMC Play code length
      this.dmc.writeReg(address, value);
    } else if (address === 0x4015) {
      // Channel enable
      this.updateChannelEnable(value);

      if (value !== 0 && this.initCounter > 0) {
        // Start hardware initialization
        this.initingHardware = true;
      } // DMC/IRQ Status


      this.dmc.writeReg(address, value);
    } else if (address === 0x4017) {
      // Frame counter control
      this.countSequence = value >> 7 & 1;
      this.masterFrameCounter = 0;
      this.frameIrqActive = false;

      if ((value >> 6 & 0x1) === 0) {
        this.frameIrqEnabled = true;
      } else {
        this.frameIrqEnabled = false;
      }

      if (this.countSequence === 0) {
        // NTSC:
        this.frameIrqCounterMax = 4;
        this.derivedFrameCounter = 4;
      } else {
        // PAL:
        this.frameIrqCounterMax = 5;
        this.derivedFrameCounter = 0;
        this.frameCounterTick();
      }
    }
  },
  resetCounter: function resetCounter() {
    if (this.countSequence === 0) {
      this.derivedFrameCounter = 4;
    } else {
      this.derivedFrameCounter = 0;
    }
  },
  // Updates channel enable status.
  // This is done on writes to the
  // channel enable register (0x4015),
  // and when the user enables/disables channels
  // in the GUI.
  updateChannelEnable: function updateChannelEnable(value) {
    this.channelEnableValue = value & 0xffff;
    this.square1.setEnabled((value & 1) !== 0);
    this.square2.setEnabled((value & 2) !== 0);
    this.triangle.setEnabled((value & 4) !== 0);
    this.noise.setEnabled((value & 8) !== 0);
    this.dmc.setEnabled((value & 16) !== 0);
  },
  // Clocks the frame counter. It should be clocked at
  // twice the cpu speed, so the cycles will be
  // divided by 2 for those counters that are
  // clocked at cpu speed.
  clockFrameCounter: function clockFrameCounter(nCycles) {
    if (this.initCounter > 0) {
      if (this.initingHardware) {
        this.initCounter -= nCycles;

        if (this.initCounter <= 0) {
          this.initingHardware = false;
        }

        return;
      }
    } // Don't process ticks beyond next sampling:


    nCycles += this.extraCycles;
    var maxCycles = this.sampleTimerMax - this.sampleTimer;

    if (nCycles << 10 > maxCycles) {
      this.extraCycles = (nCycles << 10) - maxCycles >> 10;
      nCycles -= this.extraCycles;
    } else {
      this.extraCycles = 0;
    }

    var dmc = this.dmc;
    var triangle = this.triangle;
    var square1 = this.square1;
    var square2 = this.square2;
    var noise = this.noise; // Clock DMC:

    if (dmc.isEnabled) {
      dmc.shiftCounter -= nCycles << 3;

      while (dmc.shiftCounter <= 0 && dmc.dmaFrequency > 0) {
        dmc.shiftCounter += dmc.dmaFrequency;
        dmc.clockDmc();
      }
    } // Clock Triangle channel Prog timer:


    if (triangle.progTimerMax > 0) {
      triangle.progTimerCount -= nCycles;

      while (triangle.progTimerCount <= 0) {
        triangle.progTimerCount += triangle.progTimerMax + 1;

        if (triangle.linearCounter > 0 && triangle.lengthCounter > 0) {
          triangle.triangleCounter++;
          triangle.triangleCounter &= 0x1f;

          if (triangle.isEnabled) {
            if (triangle.triangleCounter >= 0x10) {
              // Normal value.
              triangle.sampleValue = triangle.triangleCounter & 0xf;
            } else {
              // Inverted value.
              triangle.sampleValue = 0xf - (triangle.triangleCounter & 0xf);
            }

            triangle.sampleValue <<= 4;
          }
        }
      }
    } // Clock Square channel 1 Prog timer:


    square1.progTimerCount -= nCycles;

    if (square1.progTimerCount <= 0) {
      square1.progTimerCount += square1.progTimerMax + 1 << 1;
      square1.squareCounter++;
      square1.squareCounter &= 0x7;
      square1.updateSampleValue();
    } // Clock Square channel 2 Prog timer:


    square2.progTimerCount -= nCycles;

    if (square2.progTimerCount <= 0) {
      square2.progTimerCount += square2.progTimerMax + 1 << 1;
      square2.squareCounter++;
      square2.squareCounter &= 0x7;
      square2.updateSampleValue();
    } // Clock noise channel Prog timer:


    var acc_c = nCycles;

    if (noise.progTimerCount - acc_c > 0) {
      // Do all cycles at once:
      noise.progTimerCount -= acc_c;
      noise.accCount += acc_c;
      noise.accValue += acc_c * noise.sampleValue;
    } else {
      // Slow-step:
      while (acc_c-- > 0) {
        if (--noise.progTimerCount <= 0 && noise.progTimerMax > 0) {
          // Update noise shift register:
          noise.shiftReg <<= 1;
          noise.tmp = (noise.shiftReg << (noise.randomMode === 0 ? 1 : 6) ^ noise.shiftReg) & 0x8000;

          if (noise.tmp !== 0) {
            // Sample value must be 0.
            noise.shiftReg |= 0x01;
            noise.randomBit = 0;
            noise.sampleValue = 0;
          } else {
            // Find sample value:
            noise.randomBit = 1;

            if (noise.isEnabled && noise.lengthCounter > 0) {
              noise.sampleValue = noise.masterVolume;
            } else {
              noise.sampleValue = 0;
            }
          }

          noise.progTimerCount += noise.progTimerMax;
        }

        noise.accValue += noise.sampleValue;
        noise.accCount++;
      }
    } // Frame IRQ handling:


    if (this.frameIrqEnabled && this.frameIrqActive) {
      this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
    } // Clock frame counter at double CPU speed:


    this.masterFrameCounter += nCycles << 1;

    if (this.masterFrameCounter >= this.frameTime) {
      // 240Hz tick:
      this.masterFrameCounter -= this.frameTime;
      this.frameCounterTick();
    } // Accumulate sample value:


    this.accSample(nCycles); // Clock sample timer:

    this.sampleTimer += nCycles << 10;

    if (this.sampleTimer >= this.sampleTimerMax) {
      // Sample channels:
      this.sample();
      this.sampleTimer -= this.sampleTimerMax;
    }
  },
  accSample: function accSample(cycles) {
    // Special treatment for triangle channel - need to interpolate.
    if (this.triangle.sampleCondition) {
      this.triValue = Math.floor((this.triangle.progTimerCount << 4) / (this.triangle.progTimerMax + 1));

      if (this.triValue > 16) {
        this.triValue = 16;
      }

      if (this.triangle.triangleCounter >= 16) {
        this.triValue = 16 - this.triValue;
      } // Add non-interpolated sample value:


      this.triValue += this.triangle.sampleValue;
    } // Now sample normally:


    if (cycles === 2) {
      this.smpTriangle += this.triValue << 1;
      this.smpDmc += this.dmc.sample << 1;
      this.smpSquare1 += this.square1.sampleValue << 1;
      this.smpSquare2 += this.square2.sampleValue << 1;
      this.accCount += 2;
    } else if (cycles === 4) {
      this.smpTriangle += this.triValue << 2;
      this.smpDmc += this.dmc.sample << 2;
      this.smpSquare1 += this.square1.sampleValue << 2;
      this.smpSquare2 += this.square2.sampleValue << 2;
      this.accCount += 4;
    } else {
      this.smpTriangle += cycles * this.triValue;
      this.smpDmc += cycles * this.dmc.sample;
      this.smpSquare1 += cycles * this.square1.sampleValue;
      this.smpSquare2 += cycles * this.square2.sampleValue;
      this.accCount += cycles;
    }
  },
  frameCounterTick: function frameCounterTick() {
    this.derivedFrameCounter++;

    if (this.derivedFrameCounter >= this.frameIrqCounterMax) {
      this.derivedFrameCounter = 0;
    }

    if (this.derivedFrameCounter === 1 || this.derivedFrameCounter === 3) {
      // Clock length & sweep:
      this.triangle.clockLengthCounter();
      this.square1.clockLengthCounter();
      this.square2.clockLengthCounter();
      this.noise.clockLengthCounter();
      this.square1.clockSweep();
      this.square2.clockSweep();
    }

    if (this.derivedFrameCounter >= 0 && this.derivedFrameCounter < 4) {
      // Clock linear & decay:
      this.square1.clockEnvDecay();
      this.square2.clockEnvDecay();
      this.noise.clockEnvDecay();
      this.triangle.clockLinearCounter();
    }

    if (this.derivedFrameCounter === 3 && this.countSequence === 0) {
      // Enable IRQ:
      this.frameIrqActive = true;
    } // End of 240Hz tick

  },
  // Samples the channels, mixes the output together, then writes to buffer.
  sample: function sample() {
    var sq_index, tnd_index;

    if (this.accCount > 0) {
      this.smpSquare1 <<= 4;
      this.smpSquare1 = Math.floor(this.smpSquare1 / this.accCount);
      this.smpSquare2 <<= 4;
      this.smpSquare2 = Math.floor(this.smpSquare2 / this.accCount);
      this.smpTriangle = Math.floor(this.smpTriangle / this.accCount);
      this.smpDmc <<= 4;
      this.smpDmc = Math.floor(this.smpDmc / this.accCount);
      this.accCount = 0;
    } else {
      this.smpSquare1 = this.square1.sampleValue << 4;
      this.smpSquare2 = this.square2.sampleValue << 4;
      this.smpTriangle = this.triangle.sampleValue;
      this.smpDmc = this.dmc.sample << 4;
    }

    var smpNoise = Math.floor((this.noise.accValue << 4) / this.noise.accCount);
    this.noise.accValue = smpNoise >> 4;
    this.noise.accCount = 1; // Stereo sound.
    // Left channel:

    sq_index = this.smpSquare1 * this.stereoPosLSquare1 + this.smpSquare2 * this.stereoPosLSquare2 >> 8;
    tnd_index = 3 * this.smpTriangle * this.stereoPosLTriangle + (smpNoise << 1) * this.stereoPosLNoise + this.smpDmc * this.stereoPosLDMC >> 8;

    if (sq_index >= this.square_table.length) {
      sq_index = this.square_table.length - 1;
    }

    if (tnd_index >= this.tnd_table.length) {
      tnd_index = this.tnd_table.length - 1;
    }

    var sampleValueL = this.square_table[sq_index] + this.tnd_table[tnd_index] - this.dcValue; // Right channel:

    sq_index = this.smpSquare1 * this.stereoPosRSquare1 + this.smpSquare2 * this.stereoPosRSquare2 >> 8;
    tnd_index = 3 * this.smpTriangle * this.stereoPosRTriangle + (smpNoise << 1) * this.stereoPosRNoise + this.smpDmc * this.stereoPosRDMC >> 8;

    if (sq_index >= this.square_table.length) {
      sq_index = this.square_table.length - 1;
    }

    if (tnd_index >= this.tnd_table.length) {
      tnd_index = this.tnd_table.length - 1;
    }

    var sampleValueR = this.square_table[sq_index] + this.tnd_table[tnd_index] - this.dcValue; // Remove DC from left channel:

    var smpDiffL = sampleValueL - this.prevSampleL;
    this.prevSampleL += smpDiffL;
    this.smpAccumL += smpDiffL - (this.smpAccumL >> 10);
    sampleValueL = this.smpAccumL; // Remove DC from right channel:

    var smpDiffR = sampleValueR - this.prevSampleR;
    this.prevSampleR += smpDiffR;
    this.smpAccumR += smpDiffR - (this.smpAccumR >> 10);
    sampleValueR = this.smpAccumR; // Write:

    if (sampleValueL > this.maxSample) {
      this.maxSample = sampleValueL;
    }

    if (sampleValueL < this.minSample) {
      this.minSample = sampleValueL;
    }

    if (this.nes.opts.onAudioSample) {
      this.nes.opts.onAudioSample(sampleValueL / 32768, sampleValueR / 32768);
    } // Reset sampled values:


    this.smpSquare1 = 0;
    this.smpSquare2 = 0;
    this.smpTriangle = 0;
    this.smpDmc = 0;
  },
  getLengthMax: function getLengthMax(value) {
    return this.lengthLookup[value >> 3];
  },
  getDmcFrequency: function getDmcFrequency(value) {
    if (value >= 0 && value < 0x10) {
      return this.dmcFreqLookup[value];
    }

    return 0;
  },
  getNoiseWaveLength: function getNoiseWaveLength(value) {
    if (value >= 0 && value < 0x10) {
      return this.noiseWavelengthLookup[value];
    }

    return 0;
  },
  setPanning: function setPanning(pos) {
    for (var i = 0; i < 5; i++) {
      this.panning[i] = pos[i];
    }

    this.updateStereoPos();
  },
  setMasterVolume: function setMasterVolume(value) {
    if (value < 0) {
      value = 0;
    }

    if (value > 256) {
      value = 256;
    }

    this.masterVolume = value;
    this.updateStereoPos();
  },
  updateStereoPos: function updateStereoPos() {
    this.stereoPosLSquare1 = this.panning[0] * this.masterVolume >> 8;
    this.stereoPosLSquare2 = this.panning[1] * this.masterVolume >> 8;
    this.stereoPosLTriangle = this.panning[2] * this.masterVolume >> 8;
    this.stereoPosLNoise = this.panning[3] * this.masterVolume >> 8;
    this.stereoPosLDMC = this.panning[4] * this.masterVolume >> 8;
    this.stereoPosRSquare1 = this.masterVolume - this.stereoPosLSquare1;
    this.stereoPosRSquare2 = this.masterVolume - this.stereoPosLSquare2;
    this.stereoPosRTriangle = this.masterVolume - this.stereoPosLTriangle;
    this.stereoPosRNoise = this.masterVolume - this.stereoPosLNoise;
    this.stereoPosRDMC = this.masterVolume - this.stereoPosLDMC;
  },
  initLengthLookup: function initLengthLookup() {
    // prettier-ignore
    this.lengthLookup = [0x0A, 0xFE, 0x14, 0x02, 0x28, 0x04, 0x50, 0x06, 0xA0, 0x08, 0x3C, 0x0A, 0x0E, 0x0C, 0x1A, 0x0E, 0x0C, 0x10, 0x18, 0x12, 0x30, 0x14, 0x60, 0x16, 0xC0, 0x18, 0x48, 0x1A, 0x10, 0x1C, 0x20, 0x1E];
  },
  initDmcFrequencyLookup: function initDmcFrequencyLookup() {
    this.dmcFreqLookup = new Array(16);
    this.dmcFreqLookup[0x0] = 0xd60;
    this.dmcFreqLookup[0x1] = 0xbe0;
    this.dmcFreqLookup[0x2] = 0xaa0;
    this.dmcFreqLookup[0x3] = 0xa00;
    this.dmcFreqLookup[0x4] = 0x8f0;
    this.dmcFreqLookup[0x5] = 0x7f0;
    this.dmcFreqLookup[0x6] = 0x710;
    this.dmcFreqLookup[0x7] = 0x6b0;
    this.dmcFreqLookup[0x8] = 0x5f0;
    this.dmcFreqLookup[0x9] = 0x500;
    this.dmcFreqLookup[0xa] = 0x470;
    this.dmcFreqLookup[0xb] = 0x400;
    this.dmcFreqLookup[0xc] = 0x350;
    this.dmcFreqLookup[0xd] = 0x2a0;
    this.dmcFreqLookup[0xe] = 0x240;
    this.dmcFreqLookup[0xf] = 0x1b0; //for(int i=0;i<16;i++)dmcFreqLookup[i]/=8;
  },
  initNoiseWavelengthLookup: function initNoiseWavelengthLookup() {
    this.noiseWavelengthLookup = new Array(16);
    this.noiseWavelengthLookup[0x0] = 0x004;
    this.noiseWavelengthLookup[0x1] = 0x008;
    this.noiseWavelengthLookup[0x2] = 0x010;
    this.noiseWavelengthLookup[0x3] = 0x020;
    this.noiseWavelengthLookup[0x4] = 0x040;
    this.noiseWavelengthLookup[0x5] = 0x060;
    this.noiseWavelengthLookup[0x6] = 0x080;
    this.noiseWavelengthLookup[0x7] = 0x0a0;
    this.noiseWavelengthLookup[0x8] = 0x0ca;
    this.noiseWavelengthLookup[0x9] = 0x0fe;
    this.noiseWavelengthLookup[0xa] = 0x17c;
    this.noiseWavelengthLookup[0xb] = 0x1fc;
    this.noiseWavelengthLookup[0xc] = 0x2fa;
    this.noiseWavelengthLookup[0xd] = 0x3f8;
    this.noiseWavelengthLookup[0xe] = 0x7f2;
    this.noiseWavelengthLookup[0xf] = 0xfe4;
  },
  initDACtables: function initDACtables() {
    var value, ival, i;
    var max_sqr = 0;
    var max_tnd = 0;
    this.square_table = new Array(32 * 16);
    this.tnd_table = new Array(204 * 16);

    for (i = 0; i < 32 * 16; i++) {
      value = 95.52 / (8128.0 / (i / 16.0) + 100.0);
      value *= 0.98411;
      value *= 50000.0;
      ival = Math.floor(value);
      this.square_table[i] = ival;

      if (ival > max_sqr) {
        max_sqr = ival;
      }
    }

    for (i = 0; i < 204 * 16; i++) {
      value = 163.67 / (24329.0 / (i / 16.0) + 100.0);
      value *= 0.98411;
      value *= 50000.0;
      ival = Math.floor(value);
      this.tnd_table[i] = ival;

      if (ival > max_tnd) {
        max_tnd = ival;
      }
    }

    this.dacRange = max_sqr + max_tnd;
    this.dcValue = this.dacRange / 2;
  }
};

var ChannelDM = function ChannelDM(papu) {
  this.papu = papu;
  this.MODE_NORMAL = 0;
  this.MODE_LOOP = 1;
  this.MODE_IRQ = 2;
  this.isEnabled = null;
  this.hasSample = null;
  this.irqGenerated = false;
  this.playMode = null;
  this.dmaFrequency = null;
  this.dmaCounter = null;
  this.deltaCounter = null;
  this.playStartAddress = null;
  this.playAddress = null;
  this.playLength = null;
  this.playLengthCounter = null;
  this.shiftCounter = null;
  this.reg4012 = null;
  this.reg4013 = null;
  this.sample = null;
  this.dacLsb = null;
  this.data = null;
  this.reset();
};

ChannelDM.prototype = {
  clockDmc: function clockDmc() {
    // Only alter DAC value if the sample buffer has data:
    if (this.hasSample) {
      if ((this.data & 1) === 0) {
        // Decrement delta:
        if (this.deltaCounter > 0) {
          this.deltaCounter--;
        }
      } else {
        // Increment delta:
        if (this.deltaCounter < 63) {
          this.deltaCounter++;
        }
      } // Update sample value:


      this.sample = this.isEnabled ? (this.deltaCounter << 1) + this.dacLsb : 0; // Update shift register:

      this.data >>= 1;
    }

    this.dmaCounter--;

    if (this.dmaCounter <= 0) {
      // No more sample bits.
      this.hasSample = false;
      this.endOfSample();
      this.dmaCounter = 8;
    }

    if (this.irqGenerated) {
      this.papu.nes.cpu.requestIrq(this.papu.nes.cpu.IRQ_NORMAL);
    }
  },
  endOfSample: function endOfSample() {
    if (this.playLengthCounter === 0 && this.playMode === this.MODE_LOOP) {
      // Start from beginning of sample:
      this.playAddress = this.playStartAddress;
      this.playLengthCounter = this.playLength;
    }

    if (this.playLengthCounter > 0) {
      // Fetch next sample:
      this.nextSample();

      if (this.playLengthCounter === 0) {
        // Last byte of sample fetched, generate IRQ:
        if (this.playMode === this.MODE_IRQ) {
          // Generate IRQ:
          this.irqGenerated = true;
        }
      }
    }
  },
  nextSample: function nextSample() {
    // Fetch byte:
    this.data = this.papu.nes.mmap.load(this.playAddress);
    this.papu.nes.cpu.haltCycles(4);
    this.playLengthCounter--;
    this.playAddress++;

    if (this.playAddress > 0xffff) {
      this.playAddress = 0x8000;
    }

    this.hasSample = true;
  },
  writeReg: function writeReg(address, value) {
    if (address === 0x4010) {
      // Play mode, DMA Frequency
      if (value >> 6 === 0) {
        this.playMode = this.MODE_NORMAL;
      } else if ((value >> 6 & 1) === 1) {
        this.playMode = this.MODE_LOOP;
      } else if (value >> 6 === 2) {
        this.playMode = this.MODE_IRQ;
      }

      if ((value & 0x80) === 0) {
        this.irqGenerated = false;
      }

      this.dmaFrequency = this.papu.getDmcFrequency(value & 0xf);
    } else if (address === 0x4011) {
      // Delta counter load register:
      this.deltaCounter = value >> 1 & 63;
      this.dacLsb = value & 1;
      this.sample = (this.deltaCounter << 1) + this.dacLsb; // update sample value
    } else if (address === 0x4012) {
      // DMA address load register
      this.playStartAddress = value << 6 | 0x0c000;
      this.playAddress = this.playStartAddress;
      this.reg4012 = value;
    } else if (address === 0x4013) {
      // Length of play code
      this.playLength = (value << 4) + 1;
      this.playLengthCounter = this.playLength;
      this.reg4013 = value;
    } else if (address === 0x4015) {
      // DMC/IRQ Status
      if ((value >> 4 & 1) === 0) {
        // Disable:
        this.playLengthCounter = 0;
      } else {
        // Restart:
        this.playAddress = this.playStartAddress;
        this.playLengthCounter = this.playLength;
      }

      this.irqGenerated = false;
    }
  },
  setEnabled: function setEnabled(value) {
    if (!this.isEnabled && value) {
      this.playLengthCounter = this.playLength;
    }

    this.isEnabled = value;
  },
  getLengthStatus: function getLengthStatus() {
    return this.playLengthCounter === 0 || !this.isEnabled ? 0 : 1;
  },
  getIrqStatus: function getIrqStatus() {
    return this.irqGenerated ? 1 : 0;
  },
  reset: function reset() {
    this.isEnabled = false;
    this.irqGenerated = false;
    this.playMode = this.MODE_NORMAL;
    this.dmaFrequency = 0;
    this.dmaCounter = 0;
    this.deltaCounter = 0;
    this.playStartAddress = 0;
    this.playAddress = 0;
    this.playLength = 0;
    this.playLengthCounter = 0;
    this.sample = 0;
    this.dacLsb = 0;
    this.shiftCounter = 0;
    this.reg4012 = 0;
    this.reg4013 = 0;
    this.data = 0;
  }
};

var ChannelNoise = function ChannelNoise(papu) {
  this.papu = papu;
  this.isEnabled = null;
  this.envDecayDisable = null;
  this.envDecayLoopEnable = null;
  this.lengthCounterEnable = null;
  this.envReset = null;
  this.shiftNow = null;
  this.lengthCounter = null;
  this.progTimerCount = null;
  this.progTimerMax = null;
  this.envDecayRate = null;
  this.envDecayCounter = null;
  this.envVolume = null;
  this.masterVolume = null;
  this.shiftReg = 1 << 14;
  this.randomBit = null;
  this.randomMode = null;
  this.sampleValue = null;
  this.accValue = 0;
  this.accCount = 1;
  this.tmp = null;
  this.reset();
};

ChannelNoise.prototype = {
  reset: function reset() {
    this.progTimerCount = 0;
    this.progTimerMax = 0;
    this.isEnabled = false;
    this.lengthCounter = 0;
    this.lengthCounterEnable = false;
    this.envDecayDisable = false;
    this.envDecayLoopEnable = false;
    this.shiftNow = false;
    this.envDecayRate = 0;
    this.envDecayCounter = 0;
    this.envVolume = 0;
    this.masterVolume = 0;
    this.shiftReg = 1;
    this.randomBit = 0;
    this.randomMode = 0;
    this.sampleValue = 0;
    this.tmp = 0;
  },
  clockLengthCounter: function clockLengthCounter() {
    if (this.lengthCounterEnable && this.lengthCounter > 0) {
      this.lengthCounter--;

      if (this.lengthCounter === 0) {
        this.updateSampleValue();
      }
    }
  },
  clockEnvDecay: function clockEnvDecay() {
    if (this.envReset) {
      // Reset envelope:
      this.envReset = false;
      this.envDecayCounter = this.envDecayRate + 1;
      this.envVolume = 0xf;
    } else if (--this.envDecayCounter <= 0) {
      // Normal handling:
      this.envDecayCounter = this.envDecayRate + 1;

      if (this.envVolume > 0) {
        this.envVolume--;
      } else {
        this.envVolume = this.envDecayLoopEnable ? 0xf : 0;
      }
    }

    if (this.envDecayDisable) {
      this.masterVolume = this.envDecayRate;
    } else {
      this.masterVolume = this.envVolume;
    }

    this.updateSampleValue();
  },
  updateSampleValue: function updateSampleValue() {
    if (this.isEnabled && this.lengthCounter > 0) {
      this.sampleValue = this.randomBit * this.masterVolume;
    }
  },
  writeReg: function writeReg(address, value) {
    if (address === 0x400c) {
      // Volume/Envelope decay:
      this.envDecayDisable = (value & 0x10) !== 0;
      this.envDecayRate = value & 0xf;
      this.envDecayLoopEnable = (value & 0x20) !== 0;
      this.lengthCounterEnable = (value & 0x20) === 0;

      if (this.envDecayDisable) {
        this.masterVolume = this.envDecayRate;
      } else {
        this.masterVolume = this.envVolume;
      }
    } else if (address === 0x400e) {
      // Programmable timer:
      this.progTimerMax = this.papu.getNoiseWaveLength(value & 0xf);
      this.randomMode = value >> 7;
    } else if (address === 0x400f) {
      // Length counter
      this.lengthCounter = this.papu.getLengthMax(value & 248);
      this.envReset = true;
    } // Update:
    //updateSampleValue();

  },
  setEnabled: function setEnabled(value) {
    this.isEnabled = value;

    if (!value) {
      this.lengthCounter = 0;
    }

    this.updateSampleValue();
  },
  getLengthStatus: function getLengthStatus() {
    return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
  }
};

var ChannelSquare = function ChannelSquare(papu, square1) {
  this.papu = papu; // prettier-ignore

  this.dutyLookup = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1]; // prettier-ignore

  this.impLookup = [1, -1, 0, 0, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0];
  this.sqr1 = square1;
  this.isEnabled = null;
  this.lengthCounterEnable = null;
  this.sweepActive = null;
  this.envDecayDisable = null;
  this.envDecayLoopEnable = null;
  this.envReset = null;
  this.sweepCarry = null;
  this.updateSweepPeriod = null;
  this.progTimerCount = null;
  this.progTimerMax = null;
  this.lengthCounter = null;
  this.squareCounter = null;
  this.sweepCounter = null;
  this.sweepCounterMax = null;
  this.sweepMode = null;
  this.sweepShiftAmount = null;
  this.envDecayRate = null;
  this.envDecayCounter = null;
  this.envVolume = null;
  this.masterVolume = null;
  this.dutyMode = null;
  this.sweepResult = null;
  this.sampleValue = null;
  this.vol = null;
  this.reset();
};

ChannelSquare.prototype = {
  reset: function reset() {
    this.progTimerCount = 0;
    this.progTimerMax = 0;
    this.lengthCounter = 0;
    this.squareCounter = 0;
    this.sweepCounter = 0;
    this.sweepCounterMax = 0;
    this.sweepMode = 0;
    this.sweepShiftAmount = 0;
    this.envDecayRate = 0;
    this.envDecayCounter = 0;
    this.envVolume = 0;
    this.masterVolume = 0;
    this.dutyMode = 0;
    this.vol = 0;
    this.isEnabled = false;
    this.lengthCounterEnable = false;
    this.sweepActive = false;
    this.sweepCarry = false;
    this.envDecayDisable = false;
    this.envDecayLoopEnable = false;
  },
  clockLengthCounter: function clockLengthCounter() {
    if (this.lengthCounterEnable && this.lengthCounter > 0) {
      this.lengthCounter--;

      if (this.lengthCounter === 0) {
        this.updateSampleValue();
      }
    }
  },
  clockEnvDecay: function clockEnvDecay() {
    if (this.envReset) {
      // Reset envelope:
      this.envReset = false;
      this.envDecayCounter = this.envDecayRate + 1;
      this.envVolume = 0xf;
    } else if (--this.envDecayCounter <= 0) {
      // Normal handling:
      this.envDecayCounter = this.envDecayRate + 1;

      if (this.envVolume > 0) {
        this.envVolume--;
      } else {
        this.envVolume = this.envDecayLoopEnable ? 0xf : 0;
      }
    }

    if (this.envDecayDisable) {
      this.masterVolume = this.envDecayRate;
    } else {
      this.masterVolume = this.envVolume;
    }

    this.updateSampleValue();
  },
  clockSweep: function clockSweep() {
    if (--this.sweepCounter <= 0) {
      this.sweepCounter = this.sweepCounterMax + 1;

      if (this.sweepActive && this.sweepShiftAmount > 0 && this.progTimerMax > 7) {
        // Calculate result from shifter:
        this.sweepCarry = false;

        if (this.sweepMode === 0) {
          this.progTimerMax += this.progTimerMax >> this.sweepShiftAmount;

          if (this.progTimerMax > 4095) {
            this.progTimerMax = 4095;
            this.sweepCarry = true;
          }
        } else {
          this.progTimerMax = this.progTimerMax - ((this.progTimerMax >> this.sweepShiftAmount) - (this.sqr1 ? 1 : 0));
        }
      }
    }

    if (this.updateSweepPeriod) {
      this.updateSweepPeriod = false;
      this.sweepCounter = this.sweepCounterMax + 1;
    }
  },
  updateSampleValue: function updateSampleValue() {
    if (this.isEnabled && this.lengthCounter > 0 && this.progTimerMax > 7) {
      if (this.sweepMode === 0 && this.progTimerMax + (this.progTimerMax >> this.sweepShiftAmount) > 4095) {
        //if (this.sweepCarry) {
        this.sampleValue = 0;
      } else {
        this.sampleValue = this.masterVolume * this.dutyLookup[(this.dutyMode << 3) + this.squareCounter];
      }
    } else {
      this.sampleValue = 0;
    }
  },
  writeReg: function writeReg(address, value) {
    var addrAdd = this.sqr1 ? 0 : 4;

    if (address === 0x4000 + addrAdd) {
      // Volume/Envelope decay:
      this.envDecayDisable = (value & 0x10) !== 0;
      this.envDecayRate = value & 0xf;
      this.envDecayLoopEnable = (value & 0x20) !== 0;
      this.dutyMode = value >> 6 & 0x3;
      this.lengthCounterEnable = (value & 0x20) === 0;

      if (this.envDecayDisable) {
        this.masterVolume = this.envDecayRate;
      } else {
        this.masterVolume = this.envVolume;
      }

      this.updateSampleValue();
    } else if (address === 0x4001 + addrAdd) {
      // Sweep:
      this.sweepActive = (value & 0x80) !== 0;
      this.sweepCounterMax = value >> 4 & 7;
      this.sweepMode = value >> 3 & 1;
      this.sweepShiftAmount = value & 7;
      this.updateSweepPeriod = true;
    } else if (address === 0x4002 + addrAdd) {
      // Programmable timer:
      this.progTimerMax &= 0x700;
      this.progTimerMax |= value;
    } else if (address === 0x4003 + addrAdd) {
      // Programmable timer, length counter
      this.progTimerMax &= 0xff;
      this.progTimerMax |= (value & 0x7) << 8;

      if (this.isEnabled) {
        this.lengthCounter = this.papu.getLengthMax(value & 0xf8);
      }

      this.envReset = true;
    }
  },
  setEnabled: function setEnabled(value) {
    this.isEnabled = value;

    if (!value) {
      this.lengthCounter = 0;
    }

    this.updateSampleValue();
  },
  getLengthStatus: function getLengthStatus() {
    return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
  }
};

var ChannelTriangle = function ChannelTriangle(papu) {
  this.papu = papu;
  this.isEnabled = null;
  this.sampleCondition = null;
  this.lengthCounterEnable = null;
  this.lcHalt = null;
  this.lcControl = null;
  this.progTimerCount = null;
  this.progTimerMax = null;
  this.triangleCounter = null;
  this.lengthCounter = null;
  this.linearCounter = null;
  this.lcLoadValue = null;
  this.sampleValue = null;
  this.tmp = null;
  this.reset();
};

ChannelTriangle.prototype = {
  reset: function reset() {
    this.progTimerCount = 0;
    this.progTimerMax = 0;
    this.triangleCounter = 0;
    this.isEnabled = false;
    this.sampleCondition = false;
    this.lengthCounter = 0;
    this.lengthCounterEnable = false;
    this.linearCounter = 0;
    this.lcLoadValue = 0;
    this.lcHalt = true;
    this.lcControl = false;
    this.tmp = 0;
    this.sampleValue = 0xf;
  },
  clockLengthCounter: function clockLengthCounter() {
    if (this.lengthCounterEnable && this.lengthCounter > 0) {
      this.lengthCounter--;

      if (this.lengthCounter === 0) {
        this.updateSampleCondition();
      }
    }
  },
  clockLinearCounter: function clockLinearCounter() {
    if (this.lcHalt) {
      // Load:
      this.linearCounter = this.lcLoadValue;
      this.updateSampleCondition();
    } else if (this.linearCounter > 0) {
      // Decrement:
      this.linearCounter--;
      this.updateSampleCondition();
    }

    if (!this.lcControl) {
      // Clear halt flag:
      this.lcHalt = false;
    }
  },
  getLengthStatus: function getLengthStatus() {
    return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
  },
  // eslint-disable-next-line no-unused-vars
  readReg: function readReg(address) {
    return 0;
  },
  writeReg: function writeReg(address, value) {
    if (address === 0x4008) {
      // New values for linear counter:
      this.lcControl = (value & 0x80) !== 0;
      this.lcLoadValue = value & 0x7f; // Length counter enable:

      this.lengthCounterEnable = !this.lcControl;
    } else if (address === 0x400a) {
      // Programmable timer:
      this.progTimerMax &= 0x700;
      this.progTimerMax |= value;
    } else if (address === 0x400b) {
      // Programmable timer, length counter
      this.progTimerMax &= 0xff;
      this.progTimerMax |= (value & 0x07) << 8;
      this.lengthCounter = this.papu.getLengthMax(value & 0xf8);
      this.lcHalt = true;
    }

    this.updateSampleCondition();
  },
  clockProgrammableTimer: function clockProgrammableTimer(nCycles) {
    if (this.progTimerMax > 0) {
      this.progTimerCount += nCycles;

      while (this.progTimerMax > 0 && this.progTimerCount >= this.progTimerMax) {
        this.progTimerCount -= this.progTimerMax;

        if (this.isEnabled && this.lengthCounter > 0 && this.linearCounter > 0) {
          this.clockTriangleGenerator();
        }
      }
    }
  },
  clockTriangleGenerator: function clockTriangleGenerator() {
    this.triangleCounter++;
    this.triangleCounter &= 0x1f;
  },
  setEnabled: function setEnabled(value) {
    this.isEnabled = value;

    if (!value) {
      this.lengthCounter = 0;
    }

    this.updateSampleCondition();
  },
  updateSampleCondition: function updateSampleCondition() {
    this.sampleCondition = this.isEnabled && this.progTimerMax > 7 && this.linearCounter > 0 && this.lengthCounter > 0;
  }
};
module.exports = PAPU;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Mappers = __webpack_require__(55);

var Tile = __webpack_require__(28);

var ROM = function ROM(nes) {
  this.nes = nes;
  this.mapperName = new Array(92);

  for (var i = 0; i < 92; i++) {
    this.mapperName[i] = "Unknown Mapper";
  }

  this.mapperName[0] = "Direct Access";
  this.mapperName[1] = "Nintendo MMC1";
  this.mapperName[2] = "UNROM";
  this.mapperName[3] = "CNROM";
  this.mapperName[4] = "Nintendo MMC3";
  this.mapperName[5] = "Nintendo MMC5";
  this.mapperName[6] = "FFE F4xxx";
  this.mapperName[7] = "AOROM";
  this.mapperName[8] = "FFE F3xxx";
  this.mapperName[9] = "Nintendo MMC2";
  this.mapperName[10] = "Nintendo MMC4";
  this.mapperName[11] = "Color Dreams Chip";
  this.mapperName[12] = "FFE F6xxx";
  this.mapperName[15] = "100-in-1 switch";
  this.mapperName[16] = "Bandai chip";
  this.mapperName[17] = "FFE F8xxx";
  this.mapperName[18] = "Jaleco SS8806 chip";
  this.mapperName[19] = "Namcot 106 chip";
  this.mapperName[20] = "Famicom Disk System";
  this.mapperName[21] = "Konami VRC4a";
  this.mapperName[22] = "Konami VRC2a";
  this.mapperName[23] = "Konami VRC2a";
  this.mapperName[24] = "Konami VRC6";
  this.mapperName[25] = "Konami VRC4b";
  this.mapperName[32] = "Irem G-101 chip";
  this.mapperName[33] = "Taito TC0190/TC0350";
  this.mapperName[34] = "32kB ROM switch";
  this.mapperName[64] = "Tengen RAMBO-1 chip";
  this.mapperName[65] = "Irem H-3001 chip";
  this.mapperName[66] = "GNROM switch";
  this.mapperName[67] = "SunSoft3 chip";
  this.mapperName[68] = "SunSoft4 chip";
  this.mapperName[69] = "SunSoft5 FME-7 chip";
  this.mapperName[71] = "Camerica chip";
  this.mapperName[78] = "Irem 74HC161/32-based";
  this.mapperName[91] = "Pirate HK-SF3 chip";
};

ROM.prototype = {
  // Mirroring types:
  VERTICAL_MIRRORING: 0,
  HORIZONTAL_MIRRORING: 1,
  FOURSCREEN_MIRRORING: 2,
  SINGLESCREEN_MIRRORING: 3,
  SINGLESCREEN_MIRRORING2: 4,
  SINGLESCREEN_MIRRORING3: 5,
  SINGLESCREEN_MIRRORING4: 6,
  CHRROM_MIRRORING: 7,
  header: null,
  rom: null,
  vrom: null,
  vromTile: null,
  romCount: null,
  vromCount: null,
  mirroring: null,
  batteryRam: null,
  trainer: null,
  fourScreen: null,
  mapperType: null,
  valid: false,
  load: function load(data) {
    var i, j, v;

    if (data.indexOf("NES\x1a") === -1) {
      throw new Error("Not a valid NES ROM.");
    }

    this.header = new Array(16);

    for (i = 0; i < 16; i++) {
      this.header[i] = data.charCodeAt(i) & 0xff;
    }

    this.romCount = this.header[4];
    this.vromCount = this.header[5] * 2; // Get the number of 4kB banks, not 8kB

    this.mirroring = (this.header[6] & 1) !== 0 ? 1 : 0;
    this.batteryRam = (this.header[6] & 2) !== 0;
    this.trainer = (this.header[6] & 4) !== 0;
    this.fourScreen = (this.header[6] & 8) !== 0;
    this.mapperType = this.header[6] >> 4 | this.header[7] & 0xf0;
    /* TODO
        if (this.batteryRam)
            this.loadBatteryRam();*/
    // Check whether byte 8-15 are zero's:

    var foundError = false;

    for (i = 8; i < 16; i++) {
      if (this.header[i] !== 0) {
        foundError = true;
        break;
      }
    }

    if (foundError) {
      this.mapperType &= 0xf; // Ignore byte 7
    } // Load PRG-ROM banks:


    this.rom = new Array(this.romCount);
    var offset = 16;

    for (i = 0; i < this.romCount; i++) {
      this.rom[i] = new Array(16384);

      for (j = 0; j < 16384; j++) {
        if (offset + j >= data.length) {
          break;
        }

        this.rom[i][j] = data.charCodeAt(offset + j) & 0xff;
      }

      offset += 16384;
    } // Load CHR-ROM banks:


    this.vrom = new Array(this.vromCount);

    for (i = 0; i < this.vromCount; i++) {
      this.vrom[i] = new Array(4096);

      for (j = 0; j < 4096; j++) {
        if (offset + j >= data.length) {
          break;
        }

        this.vrom[i][j] = data.charCodeAt(offset + j) & 0xff;
      }

      offset += 4096;
    } // Create VROM tiles:


    this.vromTile = new Array(this.vromCount);

    for (i = 0; i < this.vromCount; i++) {
      this.vromTile[i] = new Array(256);

      for (j = 0; j < 256; j++) {
        this.vromTile[i][j] = new Tile();
      }
    } // Convert CHR-ROM banks to tiles:


    var tileIndex;
    var leftOver;

    for (v = 0; v < this.vromCount; v++) {
      for (i = 0; i < 4096; i++) {
        tileIndex = i >> 4;
        leftOver = i % 16;

        if (leftOver < 8) {
          this.vromTile[v][tileIndex].setScanline(leftOver, this.vrom[v][i], this.vrom[v][i + 8]);
        } else {
          this.vromTile[v][tileIndex].setScanline(leftOver - 8, this.vrom[v][i - 8], this.vrom[v][i]);
        }
      }
    }

    this.valid = true;
  },
  getMirroringType: function getMirroringType() {
    if (this.fourScreen) {
      return this.FOURSCREEN_MIRRORING;
    }

    if (this.mirroring === 0) {
      return this.HORIZONTAL_MIRRORING;
    }

    return this.VERTICAL_MIRRORING;
  },
  getMapperName: function getMapperName() {
    if (this.mapperType >= 0 && this.mapperType < this.mapperName.length) {
      return this.mapperName[this.mapperType];
    }

    return "Unknown Mapper, " + this.mapperType;
  },
  mapperSupported: function mapperSupported() {
    return typeof Mappers[this.mapperType] !== "undefined";
  },
  createMapper: function createMapper() {
    if (this.mapperSupported()) {
      return new Mappers[this.mapperType](this.nes);
    } else {
      throw new Error("This ROM uses a mapper not supported by JSNES: " + this.getMapperName() + "(" + this.mapperType + ")");
    }
  }
};
module.exports = ROM;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(20);

var Mappers = {};

Mappers[0] = function (nes) {
  this.nes = nes;
};

Mappers[0].prototype = {
  reset: function reset() {
    this.joy1StrobeState = 0;
    this.joy2StrobeState = 0;
    this.joypadLastWrite = 0;
    this.zapperFired = false;
    this.zapperX = null;
    this.zapperY = null;
  },
  write: function write(address, value) {
    if (address < 0x2000) {
      // Mirroring of RAM:
      this.nes.cpu.mem[address & 0x7ff] = value;
    } else if (address > 0x4017) {
      this.nes.cpu.mem[address] = value;

      if (address >= 0x6000 && address < 0x8000) {
        // Write to persistent RAM
        this.nes.opts.onBatteryRamWrite(address, value);
      }
    } else if (address > 0x2007 && address < 0x4000) {
      this.regWrite(0x2000 + (address & 0x7), value);
    } else {
      this.regWrite(address, value);
    }
  },
  writelow: function writelow(address, value) {
    if (address < 0x2000) {
      // Mirroring of RAM:
      this.nes.cpu.mem[address & 0x7ff] = value;
    } else if (address > 0x4017) {
      this.nes.cpu.mem[address] = value;
    } else if (address > 0x2007 && address < 0x4000) {
      this.regWrite(0x2000 + (address & 0x7), value);
    } else {
      this.regWrite(address, value);
    }
  },
  load: function load(address) {
    // Wrap around:
    address &= 0xffff; // Check address range:

    if (address > 0x4017) {
      // ROM:
      return this.nes.cpu.mem[address];
    } else if (address >= 0x2000) {
      // I/O Ports.
      return this.regLoad(address);
    } else {
      // RAM (mirrored)
      return this.nes.cpu.mem[address & 0x7ff];
    }
  },
  regLoad: function regLoad(address) {
    switch (address >> 12 // use fourth nibble (0xF000)
    ) {
      case 0:
        break;

      case 1:
        break;

      case 2: // Fall through to case 3

      case 3:
        // PPU Registers
        switch (address & 0x7) {
          case 0x0:
            // 0x2000:
            // PPU Control Register 1.
            // (the value is stored both
            // in main memory and in the
            // PPU as flags):
            // (not in the real NES)
            return this.nes.cpu.mem[0x2000];

          case 0x1:
            // 0x2001:
            // PPU Control Register 2.
            // (the value is stored both
            // in main memory and in the
            // PPU as flags):
            // (not in the real NES)
            return this.nes.cpu.mem[0x2001];

          case 0x2:
            // 0x2002:
            // PPU Status Register.
            // The value is stored in
            // main memory in addition
            // to as flags in the PPU.
            // (not in the real NES)
            return this.nes.ppu.readStatusRegister();

          case 0x3:
            return 0;

          case 0x4:
            // 0x2004:
            // Sprite Memory read.
            return this.nes.ppu.sramLoad();

          case 0x5:
            return 0;

          case 0x6:
            return 0;

          case 0x7:
            // 0x2007:
            // VRAM read:
            return this.nes.ppu.vramLoad();
        }

        break;

      case 4:
        // Sound+Joypad registers
        switch (address - 0x4015) {
          case 0:
            // 0x4015:
            // Sound channel enable, DMC Status
            return this.nes.papu.readReg(address);

          case 1:
            // 0x4016:
            // Joystick 1 + Strobe
            return this.joy1Read();

          case 2:
            // 0x4017:
            // Joystick 2 + Strobe
            // https://wiki.nesdev.com/w/index.php/Zapper
            var w;

            if (this.zapperX !== null && this.zapperY !== null && this.nes.ppu.isPixelWhite(this.zapperX, this.zapperY)) {
              w = 0;
            } else {
              w = 0x1 << 3;
            }

            if (this.zapperFired) {
              w |= 0x1 << 4;
            }

            return (this.joy2Read() | w) & 0xffff;
        }

        break;
    }

    return 0;
  },
  regWrite: function regWrite(address, value) {
    switch (address) {
      case 0x2000:
        // PPU Control register 1
        this.nes.cpu.mem[address] = value;
        this.nes.ppu.updateControlReg1(value);
        break;

      case 0x2001:
        // PPU Control register 2
        this.nes.cpu.mem[address] = value;
        this.nes.ppu.updateControlReg2(value);
        break;

      case 0x2003:
        // Set Sprite RAM address:
        this.nes.ppu.writeSRAMAddress(value);
        break;

      case 0x2004:
        // Write to Sprite RAM:
        this.nes.ppu.sramWrite(value);
        break;

      case 0x2005:
        // Screen Scroll offsets:
        this.nes.ppu.scrollWrite(value);
        break;

      case 0x2006:
        // Set VRAM address:
        this.nes.ppu.writeVRAMAddress(value);
        break;

      case 0x2007:
        // Write to VRAM:
        this.nes.ppu.vramWrite(value);
        break;

      case 0x4014:
        // Sprite Memory DMA Access
        this.nes.ppu.sramDMA(value);
        break;

      case 0x4015:
        // Sound Channel Switch, DMC Status
        this.nes.papu.writeReg(address, value);
        break;

      case 0x4016:
        // Joystick 1 + Strobe
        if ((value & 1) === 0 && (this.joypadLastWrite & 1) === 1) {
          this.joy1StrobeState = 0;
          this.joy2StrobeState = 0;
        }

        this.joypadLastWrite = value;
        break;

      case 0x4017:
        // Sound channel frame sequencer:
        this.nes.papu.writeReg(address, value);
        break;

      default:
        // Sound registers
        // console.log("write to sound reg");
        if (address >= 0x4000 && address <= 0x4017) {
          this.nes.papu.writeReg(address, value);
        }

    }
  },
  joy1Read: function joy1Read() {
    var ret;

    switch (this.joy1StrobeState) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        ret = this.nes.controllers[1].state[this.joy1StrobeState];
        break;

      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        ret = 0;
        break;

      case 19:
        ret = 1;
        break;

      default:
        ret = 0;
    }

    this.joy1StrobeState++;

    if (this.joy1StrobeState === 24) {
      this.joy1StrobeState = 0;
    }

    return ret;
  },
  joy2Read: function joy2Read() {
    var ret;

    switch (this.joy2StrobeState) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        ret = this.nes.controllers[2].state[this.joy2StrobeState];
        break;

      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        ret = 0;
        break;

      case 19:
        ret = 1;
        break;

      default:
        ret = 0;
    }

    this.joy2StrobeState++;

    if (this.joy2StrobeState === 24) {
      this.joy2StrobeState = 0;
    }

    return ret;
  },
  loadROM: function loadROM() {
    if (!this.nes.rom.valid || this.nes.rom.romCount < 1) {
      throw new Error("NoMapper: Invalid ROM! Unable to load.");
    } // Load ROM into memory:


    this.loadPRGROM(); // Load CHR-ROM:

    this.loadCHRROM(); // Load Battery RAM (if present):

    this.loadBatteryRam(); // Reset IRQ:
    //nes.getCpu().doResetInterrupt();

    this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
  },
  loadPRGROM: function loadPRGROM() {
    if (this.nes.rom.romCount > 1) {
      // Load the two first banks into memory.
      this.loadRomBank(0, 0x8000);
      this.loadRomBank(1, 0xc000);
    } else {
      // Load the one bank into both memory locations:
      this.loadRomBank(0, 0x8000);
      this.loadRomBank(0, 0xc000);
    }
  },
  loadCHRROM: function loadCHRROM() {
    // console.log("Loading CHR ROM..");
    if (this.nes.rom.vromCount > 0) {
      if (this.nes.rom.vromCount === 1) {
        this.loadVromBank(0, 0x0000);
        this.loadVromBank(0, 0x1000);
      } else {
        this.loadVromBank(0, 0x0000);
        this.loadVromBank(1, 0x1000);
      }
    } else {//System.out.println("There aren't any CHR-ROM banks..");
    }
  },
  loadBatteryRam: function loadBatteryRam() {
    if (this.nes.rom.batteryRam) {
      var ram = this.nes.rom.batteryRam;

      if (ram !== null && ram.length === 0x2000) {
        // Load Battery RAM into memory:
        utils.copyArrayElements(ram, 0, this.nes.cpu.mem, 0x6000, 0x2000);
      }
    }
  },
  loadRomBank: function loadRomBank(bank, address) {
    // Loads a ROM bank into the specified address.
    bank %= this.nes.rom.romCount; //var data = this.nes.rom.rom[bank];
    //cpuMem.write(address,data,data.length);

    utils.copyArrayElements(this.nes.rom.rom[bank], 0, this.nes.cpu.mem, address, 16384);
  },
  loadVromBank: function loadVromBank(bank, address) {
    if (this.nes.rom.vromCount === 0) {
      return;
    }

    this.nes.ppu.triggerRendering();
    utils.copyArrayElements(this.nes.rom.vrom[bank % this.nes.rom.vromCount], 0, this.nes.ppu.vramMem, address, 4096);
    var vromTile = this.nes.rom.vromTile[bank % this.nes.rom.vromCount];
    utils.copyArrayElements(vromTile, 0, this.nes.ppu.ptTile, address >> 4, 256);
  },
  load32kRomBank: function load32kRomBank(bank, address) {
    this.loadRomBank(bank * 2 % this.nes.rom.romCount, address);
    this.loadRomBank((bank * 2 + 1) % this.nes.rom.romCount, address + 16384);
  },
  load8kVromBank: function load8kVromBank(bank4kStart, address) {
    if (this.nes.rom.vromCount === 0) {
      return;
    }

    this.nes.ppu.triggerRendering();
    this.loadVromBank(bank4kStart % this.nes.rom.vromCount, address);
    this.loadVromBank((bank4kStart + 1) % this.nes.rom.vromCount, address + 4096);
  },
  load1kVromBank: function load1kVromBank(bank1k, address) {
    if (this.nes.rom.vromCount === 0) {
      return;
    }

    this.nes.ppu.triggerRendering();
    var bank4k = Math.floor(bank1k / 4) % this.nes.rom.vromCount;
    var bankoffset = bank1k % 4 * 1024;
    utils.copyArrayElements(this.nes.rom.vrom[bank4k], bankoffset, this.nes.ppu.vramMem, address, 1024); // Update tiles:

    var vromTile = this.nes.rom.vromTile[bank4k];
    var baseIndex = address >> 4;

    for (var i = 0; i < 64; i++) {
      this.nes.ppu.ptTile[baseIndex + i] = vromTile[(bank1k % 4 << 6) + i];
    }
  },
  load2kVromBank: function load2kVromBank(bank2k, address) {
    if (this.nes.rom.vromCount === 0) {
      return;
    }

    this.nes.ppu.triggerRendering();
    var bank4k = Math.floor(bank2k / 2) % this.nes.rom.vromCount;
    var bankoffset = bank2k % 2 * 2048;
    utils.copyArrayElements(this.nes.rom.vrom[bank4k], bankoffset, this.nes.ppu.vramMem, address, 2048); // Update tiles:

    var vromTile = this.nes.rom.vromTile[bank4k];
    var baseIndex = address >> 4;

    for (var i = 0; i < 128; i++) {
      this.nes.ppu.ptTile[baseIndex + i] = vromTile[(bank2k % 2 << 7) + i];
    }
  },
  load8kRomBank: function load8kRomBank(bank8k, address) {
    var bank16k = Math.floor(bank8k / 2) % this.nes.rom.romCount;
    var offset = bank8k % 2 * 8192; //this.nes.cpu.mem.write(address,this.nes.rom.rom[bank16k],offset,8192);

    utils.copyArrayElements(this.nes.rom.rom[bank16k], offset, this.nes.cpu.mem, address, 8192);
  },
  clockIrqCounter: function clockIrqCounter() {// Does nothing. This is used by the MMC3 mapper.
  },
  // eslint-disable-next-line no-unused-vars
  latchAccess: function latchAccess(address) {// Does nothing. This is used by MMC2.
  },
  toJSON: function toJSON() {
    return {
      joy1StrobeState: this.joy1StrobeState,
      joy2StrobeState: this.joy2StrobeState,
      joypadLastWrite: this.joypadLastWrite
    };
  },
  fromJSON: function fromJSON(s) {
    this.joy1StrobeState = s.joy1StrobeState;
    this.joy2StrobeState = s.joy2StrobeState;
    this.joypadLastWrite = s.joypadLastWrite;
  }
};

Mappers[1] = function (nes) {
  this.nes = nes;
};

Mappers[1].prototype = new Mappers[0]();

Mappers[1].prototype.reset = function () {
  Mappers[0].prototype.reset.apply(this); // 5-bit buffer:

  this.regBuffer = 0;
  this.regBufferCounter = 0; // Register 0:

  this.mirroring = 0;
  this.oneScreenMirroring = 0;
  this.prgSwitchingArea = 1;
  this.prgSwitchingSize = 1;
  this.vromSwitchingSize = 0; // Register 1:

  this.romSelectionReg0 = 0; // Register 2:

  this.romSelectionReg1 = 0; // Register 3:

  this.romBankSelect = 0;
};

Mappers[1].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } // See what should be done with the written value:


  if ((value & 128) !== 0) {
    // Reset buffering:
    this.regBufferCounter = 0;
    this.regBuffer = 0; // Reset register:

    if (this.getRegNumber(address) === 0) {
      this.prgSwitchingArea = 1;
      this.prgSwitchingSize = 1;
    }
  } else {
    // Continue buffering:
    //regBuffer = (regBuffer & (0xFF-(1<<regBufferCounter))) | ((value & (1<<regBufferCounter))<<regBufferCounter);
    this.regBuffer = this.regBuffer & 0xff - (1 << this.regBufferCounter) | (value & 1) << this.regBufferCounter;
    this.regBufferCounter++;

    if (this.regBufferCounter === 5) {
      // Use the buffered value:
      this.setReg(this.getRegNumber(address), this.regBuffer); // Reset buffer:

      this.regBuffer = 0;
      this.regBufferCounter = 0;
    }
  }
};

Mappers[1].prototype.setReg = function (reg, value) {
  var tmp;

  switch (reg) {
    case 0:
      // Mirroring:
      tmp = value & 3;

      if (tmp !== this.mirroring) {
        // Set mirroring:
        this.mirroring = tmp;

        if ((this.mirroring & 2) === 0) {
          // SingleScreen mirroring overrides the other setting:
          this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING);
        } else if ((this.mirroring & 1) !== 0) {
          // Not overridden by SingleScreen mirroring.
          this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING);
        } else {
          this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
        }
      } // PRG Switching Area;


      this.prgSwitchingArea = value >> 2 & 1; // PRG Switching Size:

      this.prgSwitchingSize = value >> 3 & 1; // VROM Switching Size:

      this.vromSwitchingSize = value >> 4 & 1;
      break;

    case 1:
      // ROM selection:
      this.romSelectionReg0 = value >> 4 & 1; // Check whether the cart has VROM:

      if (this.nes.rom.vromCount > 0) {
        // Select VROM bank at 0x0000:
        if (this.vromSwitchingSize === 0) {
          // Swap 8kB VROM:
          if (this.romSelectionReg0 === 0) {
            this.load8kVromBank(value & 0xf, 0x0000);
          } else {
            this.load8kVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 0xf), 0x0000);
          }
        } else {
          // Swap 4kB VROM:
          if (this.romSelectionReg0 === 0) {
            this.loadVromBank(value & 0xf, 0x0000);
          } else {
            this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 0xf), 0x0000);
          }
        }
      }

      break;

    case 2:
      // ROM selection:
      this.romSelectionReg1 = value >> 4 & 1; // Check whether the cart has VROM:

      if (this.nes.rom.vromCount > 0) {
        // Select VROM bank at 0x1000:
        if (this.vromSwitchingSize === 1) {
          // Swap 4kB of VROM:
          if (this.romSelectionReg1 === 0) {
            this.loadVromBank(value & 0xf, 0x1000);
          } else {
            this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 0xf), 0x1000);
          }
        }
      }

      break;

    default:
      // Select ROM bank:
      // -------------------------
      tmp = value & 0xf;
      var bank;
      var baseBank = 0;

      if (this.nes.rom.romCount >= 32) {
        // 1024 kB cart
        if (this.vromSwitchingSize === 0) {
          if (this.romSelectionReg0 === 1) {
            baseBank = 16;
          }
        } else {
          baseBank = (this.romSelectionReg0 | this.romSelectionReg1 << 1) << 3;
        }
      } else if (this.nes.rom.romCount >= 16) {
        // 512 kB cart
        if (this.romSelectionReg0 === 1) {
          baseBank = 8;
        }
      }

      if (this.prgSwitchingSize === 0) {
        // 32kB
        bank = baseBank + (value & 0xf);
        this.load32kRomBank(bank, 0x8000);
      } else {
        // 16kB
        bank = baseBank * 2 + (value & 0xf);

        if (this.prgSwitchingArea === 0) {
          this.loadRomBank(bank, 0xc000);
        } else {
          this.loadRomBank(bank, 0x8000);
        }
      }

  }
}; // Returns the register number from the address written to:


Mappers[1].prototype.getRegNumber = function (address) {
  if (address >= 0x8000 && address <= 0x9fff) {
    return 0;
  } else if (address >= 0xa000 && address <= 0xbfff) {
    return 1;
  } else if (address >= 0xc000 && address <= 0xdfff) {
    return 2;
  } else {
    return 3;
  }
};

Mappers[1].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("MMC1: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.loadRomBank(0, 0x8000); //   First ROM bank..

  this.loadRomBank(this.nes.rom.romCount - 1, 0xc000); // ..and last ROM bank.
  // Load CHR-ROM:

  this.loadCHRROM(); // Load Battery RAM (if present):

  this.loadBatteryRam(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
}; // eslint-disable-next-line no-unused-vars


Mappers[1].prototype.switchLowHighPrgRom = function (oldSetting) {// not yet.
};

Mappers[1].prototype.switch16to32 = function () {// not yet.
};

Mappers[1].prototype.switch32to16 = function () {// not yet.
};

Mappers[1].prototype.toJSON = function () {
  var s = Mappers[0].prototype.toJSON.apply(this);
  s.mirroring = this.mirroring;
  s.oneScreenMirroring = this.oneScreenMirroring;
  s.prgSwitchingArea = this.prgSwitchingArea;
  s.prgSwitchingSize = this.prgSwitchingSize;
  s.vromSwitchingSize = this.vromSwitchingSize;
  s.romSelectionReg0 = this.romSelectionReg0;
  s.romSelectionReg1 = this.romSelectionReg1;
  s.romBankSelect = this.romBankSelect;
  s.regBuffer = this.regBuffer;
  s.regBufferCounter = this.regBufferCounter;
  return s;
};

Mappers[1].prototype.fromJSON = function (s) {
  Mappers[0].prototype.fromJSON.apply(this, arguments);
  this.mirroring = s.mirroring;
  this.oneScreenMirroring = s.oneScreenMirroring;
  this.prgSwitchingArea = s.prgSwitchingArea;
  this.prgSwitchingSize = s.prgSwitchingSize;
  this.vromSwitchingSize = s.vromSwitchingSize;
  this.romSelectionReg0 = s.romSelectionReg0;
  this.romSelectionReg1 = s.romSelectionReg1;
  this.romBankSelect = s.romBankSelect;
  this.regBuffer = s.regBuffer;
  this.regBufferCounter = s.regBufferCounter;
};

Mappers[2] = function (nes) {
  this.nes = nes;
};

Mappers[2].prototype = new Mappers[0]();

Mappers[2].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // This is a ROM bank select command.
    // Swap in the given ROM bank at 0x8000:
    this.loadRomBank(value, 0x8000);
  }
};

Mappers[2].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("UNROM: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.loadRomBank(0, 0x8000);
  this.loadRomBank(this.nes.rom.romCount - 1, 0xc000); // Load CHR-ROM:

  this.loadCHRROM(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};
/**
 * Mapper 003 (CNROM)
 *
 * @constructor
 * @example Solomon's Key, Arkanoid, Arkista's Ring, Bump 'n' Jump, Cybernoid
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_003
 */


Mappers[3] = function (nes) {
  this.nes = nes;
};

Mappers[3].prototype = new Mappers[0]();

Mappers[3].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // This is a ROM bank select command.
    // Swap in the given ROM bank at 0x8000:
    // This is a VROM bank select command.
    // Swap in the given VROM bank at 0x0000:
    var bank = value % (this.nes.rom.vromCount / 2) * 2;
    this.loadVromBank(bank, 0x0000);
    this.loadVromBank(bank + 1, 0x1000);
    this.load8kVromBank(value * 2, 0x0000);
  }
};

Mappers[4] = function (nes) {
  this.nes = nes;
  this.CMD_SEL_2_1K_VROM_0000 = 0;
  this.CMD_SEL_2_1K_VROM_0800 = 1;
  this.CMD_SEL_1K_VROM_1000 = 2;
  this.CMD_SEL_1K_VROM_1400 = 3;
  this.CMD_SEL_1K_VROM_1800 = 4;
  this.CMD_SEL_1K_VROM_1C00 = 5;
  this.CMD_SEL_ROM_PAGE1 = 6;
  this.CMD_SEL_ROM_PAGE2 = 7;
  this.command = null;
  this.prgAddressSelect = null;
  this.chrAddressSelect = null;
  this.pageNumber = null;
  this.irqCounter = null;
  this.irqLatchValue = null;
  this.irqEnable = null;
  this.prgAddressChanged = false;
};

Mappers[4].prototype = new Mappers[0]();

Mappers[4].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  }

  switch (address) {
    case 0x8000:
      // Command/Address Select register
      this.command = value & 7;
      var tmp = value >> 6 & 1;

      if (tmp !== this.prgAddressSelect) {
        this.prgAddressChanged = true;
      }

      this.prgAddressSelect = tmp;
      this.chrAddressSelect = value >> 7 & 1;
      break;

    case 0x8001:
      // Page number for command
      this.executeCommand(this.command, value);
      break;

    case 0xa000:
      // Mirroring select
      if ((value & 1) !== 0) {
        this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING);
      } else {
        this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
      }

      break;

    case 0xa001:
      // SaveRAM Toggle
      // TODO
      //nes.getRom().setSaveState((value&1)!=0);
      break;

    case 0xc000:
      // IRQ Counter register
      this.irqCounter = value; //nes.ppu.mapperIrqCounter = 0;

      break;

    case 0xc001:
      // IRQ Latch register
      this.irqLatchValue = value;
      break;

    case 0xe000:
      // IRQ Control Reg 0 (disable)
      //irqCounter = irqLatchValue;
      this.irqEnable = 0;
      break;

    case 0xe001:
      // IRQ Control Reg 1 (enable)
      this.irqEnable = 1;
      break;

    default: // Not a MMC3 register.
    // The game has probably crashed,
    // since it tries to write to ROM..
    // IGNORE.

  }
};

Mappers[4].prototype.executeCommand = function (cmd, arg) {
  switch (cmd) {
    case this.CMD_SEL_2_1K_VROM_0000:
      // Select 2 1KB VROM pages at 0x0000:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x0000);
        this.load1kVromBank(arg + 1, 0x0400);
      } else {
        this.load1kVromBank(arg, 0x1000);
        this.load1kVromBank(arg + 1, 0x1400);
      }

      break;

    case this.CMD_SEL_2_1K_VROM_0800:
      // Select 2 1KB VROM pages at 0x0800:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x0800);
        this.load1kVromBank(arg + 1, 0x0c00);
      } else {
        this.load1kVromBank(arg, 0x1800);
        this.load1kVromBank(arg + 1, 0x1c00);
      }

      break;

    case this.CMD_SEL_1K_VROM_1000:
      // Select 1K VROM Page at 0x1000:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x1000);
      } else {
        this.load1kVromBank(arg, 0x0000);
      }

      break;

    case this.CMD_SEL_1K_VROM_1400:
      // Select 1K VROM Page at 0x1400:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x1400);
      } else {
        this.load1kVromBank(arg, 0x0400);
      }

      break;

    case this.CMD_SEL_1K_VROM_1800:
      // Select 1K VROM Page at 0x1800:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x1800);
      } else {
        this.load1kVromBank(arg, 0x0800);
      }

      break;

    case this.CMD_SEL_1K_VROM_1C00:
      // Select 1K VROM Page at 0x1C00:
      if (this.chrAddressSelect === 0) {
        this.load1kVromBank(arg, 0x1c00);
      } else {
        this.load1kVromBank(arg, 0x0c00);
      }

      break;

    case this.CMD_SEL_ROM_PAGE1:
      if (this.prgAddressChanged) {
        // Load the two hardwired banks:
        if (this.prgAddressSelect === 0) {
          this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0xc000);
        } else {
          this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0x8000);
        }

        this.prgAddressChanged = false;
      } // Select first switchable ROM page:


      if (this.prgAddressSelect === 0) {
        this.load8kRomBank(arg, 0x8000);
      } else {
        this.load8kRomBank(arg, 0xc000);
      }

      break;

    case this.CMD_SEL_ROM_PAGE2:
      // Select second switchable ROM page:
      this.load8kRomBank(arg, 0xa000); // hardwire appropriate bank:

      if (this.prgAddressChanged) {
        // Load the two hardwired banks:
        if (this.prgAddressSelect === 0) {
          this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0xc000);
        } else {
          this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0x8000);
        }

        this.prgAddressChanged = false;
      }

  }
};

Mappers[4].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("MMC3: Invalid ROM! Unable to load.");
  } // Load hardwired PRG banks (0xC000 and 0xE000):


  this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 0xc000);
  this.load8kRomBank((this.nes.rom.romCount - 1) * 2 + 1, 0xe000); // Load swappable PRG banks (0x8000 and 0xA000):

  this.load8kRomBank(0, 0x8000);
  this.load8kRomBank(1, 0xa000); // Load CHR-ROM:

  this.loadCHRROM(); // Load Battery RAM (if present):

  this.loadBatteryRam(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};

Mappers[4].prototype.clockIrqCounter = function () {
  if (this.irqEnable === 1) {
    this.irqCounter--;

    if (this.irqCounter < 0) {
      // Trigger IRQ:
      //nes.getCpu().doIrq();
      this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
      this.irqCounter = this.irqLatchValue;
    }
  }
};

Mappers[4].prototype.toJSON = function () {
  var s = Mappers[0].prototype.toJSON.apply(this);
  s.command = this.command;
  s.prgAddressSelect = this.prgAddressSelect;
  s.chrAddressSelect = this.chrAddressSelect;
  s.pageNumber = this.pageNumber;
  s.irqCounter = this.irqCounter;
  s.irqLatchValue = this.irqLatchValue;
  s.irqEnable = this.irqEnable;
  s.prgAddressChanged = this.prgAddressChanged;
  return s;
};

Mappers[4].prototype.fromJSON = function (s) {
  Mappers[0].prototype.fromJSON.apply(this, arguments);
  this.command = s.command;
  this.prgAddressSelect = s.prgAddressSelect;
  this.chrAddressSelect = s.chrAddressSelect;
  this.pageNumber = s.pageNumber;
  this.irqCounter = s.irqCounter;
  this.irqLatchValue = s.irqLatchValue;
  this.irqEnable = s.irqEnable;
  this.prgAddressChanged = s.prgAddressChanged;
};
/**
 * Mapper005 (MMC5,ExROM)
 *
 * @example Castlevania 3, Just Breed, Uncharted Waters, Romance of the 3 Kingdoms 2, Laser Invasion, Metal Slader Glory, Uchuu Keibitai SDF, Shin 4 Nin Uchi Mahjong - Yakuman Tengoku
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_005
 * @constructor
 */


Mappers[5] = function (nes) {
  this.nes = nes;
};

Mappers[5].prototype = new Mappers[0]();

Mappers[5].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
  } else {
    this.load8kVromBank(value, 0x0000);
  }
};

Mappers[5].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x5000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  }

  switch (address) {
    case 0x5100:
      this.prg_size = value & 3;
      break;

    case 0x5101:
      this.chr_size = value & 3;
      break;

    case 0x5102:
      this.sram_we_a = value & 3;
      break;

    case 0x5103:
      this.sram_we_b = value & 3;
      break;

    case 0x5104:
      this.graphic_mode = value & 3;
      break;

    case 0x5105:
      this.nametable_mode = value;
      this.nametable_type[0] = value & 3;
      this.load1kVromBank(value & 3, 0x2000);
      value >>= 2;
      this.nametable_type[1] = value & 3;
      this.load1kVromBank(value & 3, 0x2400);
      value >>= 2;
      this.nametable_type[2] = value & 3;
      this.load1kVromBank(value & 3, 0x2800);
      value >>= 2;
      this.nametable_type[3] = value & 3;
      this.load1kVromBank(value & 3, 0x2c00);
      break;

    case 0x5106:
      this.fill_chr = value;
      break;

    case 0x5107:
      this.fill_pal = value & 3;
      break;

    case 0x5113:
      this.SetBank_SRAM(3, value & 3);
      break;

    case 0x5114:
    case 0x5115:
    case 0x5116:
    case 0x5117:
      this.SetBank_CPU(address, value);
      break;

    case 0x5120:
    case 0x5121:
    case 0x5122:
    case 0x5123:
    case 0x5124:
    case 0x5125:
    case 0x5126:
    case 0x5127:
      this.chr_mode = 0;
      this.chr_page[0][address & 7] = value;
      this.SetBank_PPU();
      break;

    case 0x5128:
    case 0x5129:
    case 0x512a:
    case 0x512b:
      this.chr_mode = 1;
      this.chr_page[1][(address & 3) + 0] = value;
      this.chr_page[1][(address & 3) + 4] = value;
      this.SetBank_PPU();
      break;

    case 0x5200:
      this.split_control = value;
      break;

    case 0x5201:
      this.split_scroll = value;
      break;

    case 0x5202:
      this.split_page = value & 0x3f;
      break;

    case 0x5203:
      this.irq_line = value;
      this.nes.cpu.ClearIRQ();
      break;

    case 0x5204:
      this.irq_enable = value;
      this.nes.cpu.ClearIRQ();
      break;

    case 0x5205:
      this.mult_a = value;
      break;

    case 0x5206:
      this.mult_b = value;
      break;

    default:
      if (address >= 0x5000 && address <= 0x5015) {
        this.nes.papu.exWrite(address, value);
      } else if (address >= 0x5c00 && address <= 0x5fff) {
        if (this.graphic_mode === 2) {// ExRAM
          // vram write
        } else if (this.graphic_mode !== 3) {
          // Split,ExGraphic
          if (this.irq_status & 0x40) {// vram write
          } else {// vram write
            }
        }
      } else if (address >= 0x6000 && address <= 0x7fff) {
        if (this.sram_we_a === 2 && this.sram_we_b === 1) {// additional ram write
        }
      }

      break;
  }
};

Mappers[5].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("UNROM: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.load8kRomBank(this.nes.rom.romCount * 2 - 1, 0x8000);
  this.load8kRomBank(this.nes.rom.romCount * 2 - 1, 0xa000);
  this.load8kRomBank(this.nes.rom.romCount * 2 - 1, 0xc000);
  this.load8kRomBank(this.nes.rom.romCount * 2 - 1, 0xe000); // Load CHR-ROM:

  this.loadCHRROM(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};
/**
 * Mapper007 (AxROM)
 * @example Battletoads, Time Lord, Marble Madness
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_007
 * @constructor
 */


Mappers[7] = function (nes) {
  this.nes = nes;
};

Mappers[7].prototype = new Mappers[0]();

Mappers[7].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
  } else {
    this.load32kRomBank(value & 0x7, 0x8000);

    if (value & 0x10) {
      this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2);
    } else {
      this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING);
    }
  }
};

Mappers[7].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("AOROM: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.loadPRGROM(); // Load CHR-ROM:

  this.loadCHRROM(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};
/**
 * Mapper 011 (Color Dreams)
 *
 * @description http://wiki.nesdev.com/w/index.php/Color_Dreams
 * @example Crystal Mines, Metal Fighter
 * @constructor
 */


Mappers[11] = function (nes) {
  this.nes = nes;
};

Mappers[11].prototype = new Mappers[0]();

Mappers[11].prototype.write = function (address, value) {
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // Swap in the given PRG-ROM bank:
    var prgbank1 = (value & 0xf) * 2 % this.nes.rom.romCount;
    var prgbank2 = ((value & 0xf) * 2 + 1) % this.nes.rom.romCount;
    this.loadRomBank(prgbank1, 0x8000);
    this.loadRomBank(prgbank2, 0xc000);

    if (this.nes.rom.vromCount > 0) {
      // Swap in the given VROM bank at 0x0000:
      var bank = (value >> 4) * 2 % this.nes.rom.vromCount;
      this.loadVromBank(bank, 0x0000);
      this.loadVromBank(bank + 1, 0x1000);
    }
  }
};
/**
 * Mapper 034 (BNROM, NINA-01)
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_034
 * @example Darkseed, Mashou, Mission Impossible 2
 * @constructor
 */


Mappers[34] = function (nes) {
  this.nes = nes;
};

Mappers[34].prototype = new Mappers[0]();

Mappers[34].prototype.write = function (address, value) {
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    this.load32kRomBank(value, 0x8000);
  }
};
/**
 * Mapper 038
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_038
 * @example Crime Busters
 * @constructor
 */


Mappers[38] = function (nes) {
  this.nes = nes;
};

Mappers[38].prototype = new Mappers[0]();

Mappers[38].prototype.write = function (address, value) {
  if (address < 0x7000 || address > 0x7fff) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // Swap in the given PRG-ROM bank at 0x8000:
    this.load32kRomBank(value & 3, 0x8000); // Swap in the given VROM bank at 0x0000:

    this.load8kVromBank((value >> 2 & 3) * 2, 0x0000);
  }
};
/**
 * Mapper 066 (GxROM)
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_066
 * @example Doraemon, Dragon Power, Gumshoe, Thunder & Lightning,
 * Super Mario Bros. + Duck Hunt
 * @constructor
 */


Mappers[66] = function (nes) {
  this.nes = nes;
};

Mappers[66].prototype = new Mappers[0]();

Mappers[66].prototype.write = function (address, value) {
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // Swap in the given PRG-ROM bank at 0x8000:
    this.load32kRomBank(value >> 4 & 3, 0x8000); // Swap in the given VROM bank at 0x0000:

    this.load8kVromBank((value & 3) * 2, 0x0000);
  }
};
/**
 * Mapper 094 (UN1ROM)
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_094
 * @example Senjou no Ookami
 * @constructor
 */


Mappers[94] = function (nes) {
  this.nes = nes;
};

Mappers[94].prototype = new Mappers[0]();

Mappers[94].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // This is a ROM bank select command.
    // Swap in the given ROM bank at 0x8000:
    this.loadRomBank(value >> 2, 0x8000);
  }
};

Mappers[94].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("UN1ROM: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.loadRomBank(0, 0x8000);
  this.loadRomBank(this.nes.rom.romCount - 1, 0xc000); // Load CHR-ROM:

  this.loadCHRROM(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};
/**
 * Mapper 140
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_140
 * @example Bio Senshi Dan - Increaser Tono Tatakai
 * @constructor
 */


Mappers[140] = function (nes) {
  this.nes = nes;
};

Mappers[140].prototype = new Mappers[0]();

Mappers[140].prototype.write = function (address, value) {
  if (address < 0x6000 || address > 0x7fff) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // Swap in the given PRG-ROM bank at 0x8000:
    this.load32kRomBank(value >> 4 & 3, 0x8000); // Swap in the given VROM bank at 0x0000:

    this.load8kVromBank((value & 0xf) * 2, 0x0000);
  }
};
/**
 * Mapper 180
 *
 * @description http://wiki.nesdev.com/w/index.php/INES_Mapper_180
 * @example Crazy Climber
 * @constructor
 */


Mappers[180] = function (nes) {
  this.nes = nes;
};

Mappers[180].prototype = new Mappers[0]();

Mappers[180].prototype.write = function (address, value) {
  // Writes to addresses other than MMC registers are handled by NoMapper.
  if (address < 0x8000) {
    Mappers[0].prototype.write.apply(this, arguments);
    return;
  } else {
    // This is a ROM bank select command.
    // Swap in the given ROM bank at 0xc000:
    this.loadRomBank(value, 0xc000);
  }
};

Mappers[180].prototype.loadROM = function () {
  if (!this.nes.rom.valid) {
    throw new Error("Mapper 180: Invalid ROM! Unable to load.");
  } // Load PRG-ROM:


  this.loadRomBank(0, 0x8000);
  this.loadRomBank(this.nes.rom.romCount - 1, 0xc000); // Load CHR-ROM:

  this.loadCHRROM(); // Do Reset-Interrupt:

  this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
};

module.exports = Mappers;

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return /[^@]+@[^@]+/.test(s);
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/trim.js
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/toTitleCase.js
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return trim(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/console/warn.js
function warn(s) {
  console.warn('[react-ga]', s);
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/format.js



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (mightBeEmail(s)) {
    warn('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return toTitleCase(s);
  }

  return s;
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/loadGA.js
/* harmony default export */ var loadGA = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/console/log.js
function log(s) {
  console.info('[react-ga]', s);
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/testModeAPI.js
var gaCalls = [];
/* harmony default export */ var testModeAPI = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  }
});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/components/OutboundLink.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink_OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return react_default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react["Component"]);

_defineProperty(OutboundLink_OutboundLink, "trackLink", function () {
  warn('ga tracking not enabled');
});

_defineProperty(OutboundLink_OutboundLink, "propTypes", {
  eventLabel: prop_types_default.a.string.isRequired,
  target: prop_types_default.a.string,
  to: prop_types_default.a.string,
  onClick: prop_types_default.a.func
});

_defineProperty(OutboundLink_OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});


// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/index.js
/* unused harmony export initialize */
/* unused harmony export ga */
/* unused harmony export set */
/* unused harmony export send */
/* unused harmony export pageview */
/* unused harmony export modalview */
/* unused harmony export timing */
/* unused harmony export event */
/* unused harmony export exception */
/* unused harmony export plugin */
/* unused harmony export outboundLink */
/* unused harmony export OutboundLink */
/* unused harmony export testModeAPI */
function esm_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = esm_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function esm_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      esm_defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function esm_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function esm_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    esm_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    esm_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return esm_typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */










var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var esm_internalGa = function internalGa() {
  var _window;

  if (_testMode) return testModeAPI.ga.apply(testModeAPI, arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return warn('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return format(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof esm_internalGa === 'function') {
    if (typeof command !== 'string') {
      warn('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) esm_internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        esm_internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    warn('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    esm_internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    esm_internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    loadGA(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (esm_typeof(config) !== 'object') {
        warn('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    esm_internalGa.apply(void 0, args);

    if (_debug) {
      log('called ga(\'arguments\');');
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    warn('`fieldsObject` is required in .set()');
    return;
  }

  if (esm_typeof(fieldsObject) !== 'object') {
    warn('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    warn('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    log('called ga(\'set\', fieldsObject);');
    log("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    log('called ga(\'send\', fieldObject);');
    log("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    log("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    warn('path is required in .pageview()');
    return;
  }

  var path = trim(rawPath);

  if (path === '') {
    warn('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', esm_objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      log("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    warn('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = removeLeadingSlash(trim(rawModalName));

  if (modalName === '') {
    warn('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      log("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      warn('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function esm_event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = esm_objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      warn('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        warn('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        warn('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        warn('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          warn('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        warn('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var esm_plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        warn('`name` is required in .require()');
        return;
      }

      var name = trim(rawName);

      if (name === '') {
        warn('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (esm_typeof(options) !== 'object') {
          warn('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          warn('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          log("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          log("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        warn('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        warn('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            log("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    warn('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      warn('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
OutboundLink_OutboundLink.origTrackLink = OutboundLink_OutboundLink.trackLink;
OutboundLink_OutboundLink.trackLink = outboundLink;
var esm_OutboundLink = OutboundLink_OutboundLink;
var esm_testModeAPI = testModeAPI;
/* harmony default export */ var esm = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: esm_event,
  exception: exception,
  plugin: esm_plugin,
  outboundLink: outboundLink,
  OutboundLink: esm_OutboundLink,
  testModeAPI: testModeAPI
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars


    invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.context.router, "You should not use <Link> outside a <Router>");
    invariant__WEBPACK_IMPORTED_MODULE_2___default()(to !== undefined, 'You must specify the "to" property');
    var history = this.context.router.history;
    var location = typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createLocation */ "b"])(to, null, null, history.location) : to;
    var href = history.createHref(location);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, props, {
      onClick: this.handleClick,
      href: href,
      ref: innerRef
    }));
  };

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Link.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      createHref: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(13);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/es/index.js + 9 modules
var es = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(12);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/react-router/es/Router.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





/**
 * The public API for putting history on context.
 */

var Router_Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;
    browser_default()(children == null || react_default.a.Children.count(children) === 1, "A <Router> may have only one child element"); // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.

    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;
    return children ? react_default.a.Children.only(children) : null;
  };

  return Router;
}(react_default.a.Component);

Router_Router.propTypes = {
  history: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
};
Router_Router.contextTypes = {
  router: prop_types_default.a.object
};
Router_Router.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};
/* harmony default export */ var es_Router = (Router_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Router.js
// Written in this round about way for babel-transform-imports

/* harmony default export */ var react_router_dom_es_Router = (es_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/HashRouter.js
function HashRouter_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function HashRouter_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function HashRouter_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}






/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter_HashRouter = function (_React$Component) {
  HashRouter_inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    HashRouter_classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = HashRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(es["a" /* createHashHistory */])(_this.props), _temp), HashRouter_possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react_default.a.Component);

HashRouter_HashRouter.propTypes = {
  basename: prop_types_default.a.string,
  getUserConfirmation: prop_types_default.a.func,
  hashType: prop_types_default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types_default.a.node
};
/* harmony default export */ var es_HashRouter = __webpack_exports__["a"] = (HashRouter_HashRouter);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(13);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(12);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(32);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/react-router/es/matchPath.js

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var matchPath_compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache[pattern]) return cache[pattern];
  var keys = [];
  var re = path_to_regexp_default()(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */


var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];
  if (typeof options === "string") options = {
    path: options
  };
  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;
  if (path == null) return parent;

  var _compilePath = matchPath_compilePath(path, {
    end: exact,
    strict: strict,
    sensitive: sensitive
  }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);
  if (!match) return null;
  var url = match[0],
      values = match.slice(1);
  var isExact = pathname === url;
  if (exact && !isExact) return null;
  return {
    path: path,
    // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url,
    // the matched portion of the URL
    isExact: isExact,
    // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ var es_matchPath = (matchPath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Route.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







var Route_isEmptyChildren = function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
};
/**
 * The public API for matching a single path and rendering.
 */


var Route_Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;
    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    browser_default()(router, "You should not use <Route> or withRouter() outside a <Router>");
    var route = router.route;
    var pathname = (location || route.location).pathname;
    return es_matchPath(pathname, {
      path: path,
      strict: strict,
      exact: exact,
      sensitive: sensitive
    }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");
    warning_default()(!(this.props.component && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");
    warning_default()(!(this.props.render && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
    warning_default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;
    var location = this.props.location || route.location;
    var props = {
      match: match,
      location: location,
      history: history,
      staticContext: staticContext
    };
    if (component) return match ? react_default.a.createElement(component, props) : null;
    if (render) return match ? render(props) : null;
    if (typeof children === "function") return children(props);
    if (children && !Route_isEmptyChildren(children)) return react_default.a.Children.only(children);
    return null;
  };

  return Route;
}(react_default.a.Component);

Route_Route.propTypes = {
  computedMatch: prop_types_default.a.object,
  // private, from <Switch>
  path: prop_types_default.a.string,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  sensitive: prop_types_default.a.bool,
  component: prop_types_default.a.func,
  render: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  location: prop_types_default.a.object
};
Route_Route.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.object.isRequired,
    route: prop_types_default.a.object.isRequired,
    staticContext: prop_types_default.a.object
  })
};
Route_Route.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};
/* harmony default export */ var es_Route = (Route_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Route.js
// Written in this round about way for babel-transform-imports

/* harmony default export */ var react_router_dom_es_Route = __webpack_exports__["a"] = (es_Route);

/***/ })
]]);
//# sourceMappingURL=1.4e6edd7a.chunk.js.map