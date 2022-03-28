"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var require$$0 = require("obsidian");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
const MEMOS_VIEW_TYPE = "memos_view";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var _react_17_0_2_react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var _objectAssign_4_1_1_objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
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
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = _objectAssign_4_1_1_objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r$1 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w = Symbol.for;
  n$1 = w("react.element");
  p$1 = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q$1 = w("react.provider");
  r$1 = w("react.context");
  t$1 = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = typeof Symbol === "function" && Symbol.iterator;
function y$1(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h2 = null;
  if (b != null)
    for (e in b.ref !== void 0 && (h2 = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d.children = c;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a && a.defaultProps)
    for (e in g2 = a.defaultProps, g2)
      d[e] === void 0 && (d[e] = g2[e]);
  return { $$typeof: n$1, type: a, key: k, ref: h2, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$1;
}
function escape$1(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape$1("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$1:
          case p$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d = d(h2), a = e === "" ? "." + N$1(h2, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h2 && h2.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h2 = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k = a[g2];
      var f2 = e + N$1(k, g2);
      h2 += O$1(k, b, c, f2, d);
    }
  else if (f2 = y$1(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k = a.next()).done; )
      k = k.value, f2 = e + N$1(k, g2++), h2 += O$1(k, b, c, f2, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h2;
}
function P$1(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h2 = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h2 = G$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b)
      H$1.call(b, f2) && !I$1.hasOwnProperty(f2) && (e[f2] = b[f2] === void 0 && g2 !== void 0 ? g2[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e.children = c;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: r$1, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  _react_17_0_2_react.exports = react_production_min;
}
var React$1 = _react_17_0_2_react.exports;
var _reactDom_17_0_2_reactDom = { exports: {} };
var reactDom_production_min = {};
var _scheduler_0_20_2_scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f2 = function(a) {
      t2 !== null ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); b !== null; ) {
      if (b.callback === null)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b = J2(M2);
        b !== null && g2(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
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
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  _scheduler_0_20_2_scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = _react_17_0_2_react.exports, m$1 = _objectAssign_4_1_1_objectAssign, r = _scheduler_0_20_2_scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = new Set(), ca = {};
function da$1(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja$1 = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja$1, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja$1[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f2, g2) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f2 = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f2 || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2])
                return "\n" + e[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
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
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m$1({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m$1({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m$1({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
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
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f2, g2, h2, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f2, g2, h2, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f2, g2, h2, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return ac(e), a;
        if (f2 === d)
          return ac(e), b;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c) {
          g2 = true;
          c = e;
          d = f2;
          break;
        }
        if (h2 === d) {
          g2 = true;
          d = e;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g2 = true;
            c = f2;
            d = e;
            break;
          }
          if (h2 === d) {
            g2 = true;
            d = f2;
            c = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b, c, d, e, f2), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da$1(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (f2 !== 0)
    d = f2, e = F = 15;
  else if (f2 = c & 134217727, f2 !== 0) {
    var k = f2 & ~g2;
    k !== 0 ? (d = Rc(k), e = F) : (h2 &= f2, h2 !== 0 && (d = Rc(h2), e = F));
  } else
    f2 = c & ~g2, f2 !== 0 ? (d = Rc(f2), e = F) : h2 !== 0 && (d = Rc(h2), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g2) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id$2(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f2 = yc(a, b, c, d);
      if (f2 === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f2 = Zb(e);
    if (f2 === null)
      e = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e = $b(f2);
        if (e !== null)
          return e;
        e = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g2 = c - a;
  for (d = 1; d <= g2 && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g2) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de$1 = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de$1 && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da$1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da$1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da$1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da$1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da$1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da$1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h2 = d[g2], k = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h2 = d[g2];
          k = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c;
  a === "selectionchange" && c.nodeType !== 9 && (f2 = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f2 = d;
  }
  var g2 = $e(f2), h2 = a + "__" + (b ? "capture" : "bubble");
  g2.has(h2) || (b && (e |= 4), af(f2, a, e, b), g2.add(h2));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id$2;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f2 = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g2 = d.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d.return; g2 !== null; ) {
              var k = g2.tag;
              if (k === 3 || k === 4) {
                if (k = g2.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k = g2.tag;
            if (k === 5 || k === 6) {
              d = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f2, e2 = xb(c), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (h3 !== void 0) {
        var k2 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w2 = (b & 4) !== 0, z2 = !w2 && a === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d2, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k2(h3, x2, null, c, e2), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h3 && (b & 16) === 0 && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k2 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k2) {
            if (x2 = c.relatedTarget || c.toElement, k2 = d2, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k2 = null, x2 = d2;
          if (k2 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k2 == null ? h3 : ue(k2);
            q2 = x2 == null ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k2, c, e2);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w2 = new w2(u2, t2 + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k2 && x2)
              b: {
                w2 = k2;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k2 !== null && hf(g3, h3, k2, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k2 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k2 = h3.nodeName) && k2.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g3, J2, c, e2);
          break a;
        }
        K2 && K2(a, h3, d2);
        a === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de$1 && c.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g3, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Ob(a, c), f2 != null && d.unshift(ef(a, f2, e)), f2 = Ob(a, b), f2 != null && d.push(ef(a, f2, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f2 = b._reactName, g2 = []; c !== null && c !== d; ) {
    var h2 = c, k = h2.alternate, l2 = h2.stateNode;
    if (k !== null && k === d)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k = Ob(c, f2), k != null && g2.unshift(ef(c, k, h2))) : e || (k = Ob(c, f2), k != null && g2.push(ef(c, k, h2))));
    c = c.return;
  }
  g2.length !== 0 && a.push({ event: b, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m$1({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m$1({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c = c.next;
      } while (c !== null);
      f2 === null ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (h2 !== null) {
    e.shared.pending = null;
    var k = h2, l2 = k.next;
    k.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k);
    }
  }
  if (f2 !== null) {
    A2 = e.baseState;
    g2 = 0;
    n2 = l2 = k = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h2 = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h2 = e.effects, h2 === null ? e.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e.lastBaseUpdate = h2, e.shared.pending = null;
    } while (1);
    n2 === null && (k = A2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m$1({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f2) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f2 = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f2);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = vg(f2) : (f2 = Ff(b) ? Df : M.current, e.context = Ef(a, f2));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b, f2, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g2(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f3) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h2(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g3, h3, k2) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h3[z2], k2);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e2, h3[z2], k2), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e2, z2, h3[z2], k2), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w2(e2, g3, h3, k2) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k2);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w3.alternate === null && b(e2, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e2, n3.value, k2), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e2, z2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f3, h3) {
    var k2 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k2 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f3.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props);
                      d2.ref = Qg(a2, k2, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f3.type === ua ? (d2 = Xg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k2 = f3.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f3, a2.mode, h3), d2.return = a2, a2 = d2), g2(a2);
    if (Pg(f3))
      return x2(a2, d2, f3, h3);
    if (La(f3))
      return w2(a2, d2, f3, h3);
    l3 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f2) {
  xh = f2;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f2 = c.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h2 = g2 = f2 = null, k = e;
    do {
      var l2 = k.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l2,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h2 === null ? f2 = d : h2.next = g2;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f2;
    b.baseQueue = h2;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b.memoizedState) || (ug = true);
    b.memoizedState = f2;
    b.baseQueue === null && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f2 = b._getVersion, g2 = f2(b._source), h2 = vh.current, k = h2.useState(function() {
    return Mh(e, b, c);
  }), l2 = k[1], n2 = k[0];
  k = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h2.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f2(b._source);
    if (!He(g2, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h3 = a2; 0 < h3; ) {
        var k2 = 31 - Vc(h3), v2 = 1 << k2;
        d2[k2] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c, b, d]);
  h2.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w2);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d !== null && Bh(d, g2.deps)) {
      Rh(b, c, f2, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f2, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f2 = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g2 = b.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b.lastRenderedState, k = g2(h2, c);
        f2.eagerReducer = g2;
        f2.eagerState = k;
        if (He(k, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi$1(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f2) {
  if (a === null) {
    var g2 = c.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g2, ki(a, b, g2, d, e, f2);
    a = Vg(c.type, null, d, b, b.mode, f2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g2 = a.child;
  if ((e & f2) === 0 && (e = g2.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi$1(a, b, f2);
  b.flags |= 1;
  a = Tg(g2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f2) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f2 & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi$1(a, b, f2);
  return li(a, b, c, d, f2);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f2 !== null ? f2.baseLanes : c);
    else
      return a = f2 !== null ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f2 !== null ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f2 = Ff(c) ? Df : M.current;
  f2 = Ef(b, f2);
  tg(b, e);
  c = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi$1(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f2 = true;
    Jf(b);
  } else
    f2 = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g2 = b.stateNode, h2 = b.memoizedProps;
    g2.props = h2;
    var k = g2.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d || k !== l2) && Ng(b, g2, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    k = b.memoizedState;
    h2 !== d || p2 !== k || N.current || wg ? (typeof n2 === "function" && (Gg(b, c, n2, d), k = b.memoizedState), (h2 = wg || Lg(b, c, h2, d, p2, k, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g2.props = d, g2.state = k, g2.context = l2, d = h2) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g2 = b.stateNode;
    yg(a, b);
    h2 = b.memoizedProps;
    l2 = b.type === b.elementType ? h2 : lg(b.type, h2);
    g2.props = l2;
    A2 = b.pendingProps;
    p2 = g2.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C2 = c.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k) && Ng(b, g2, d, k);
    wg = false;
    p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    var x2 = b.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, x2, k), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, x2, k)), typeof g2.componentDidUpdate === "function" && (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g2.props = d, g2.state = x2, g2.context = k, d = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f2, e);
}
function qi(a, b, c, d, e, f2) {
  oi(a, b);
  var g2 = (b.flags & 64) !== 0;
  if (!d && !g2)
    return e && Kf(b, c, false), hi$1(a, b, f2);
  d = b.stateNode;
  ei.current = b;
  var h2 = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g2 ? (b.child = Yg(b, a.child, null, f2), b.child = Yg(b, null, h2, f2)) : fi(a, b, h2, f2);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f2 = false, g2;
  (g2 = (b.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g2 ? (f2 = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f2)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f2)
    return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f2 = b.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c };
  (f2 & 2) === 0 && b.child !== g2 ? (c = b.child, c.childLanes = 0, c.pendingProps = h2, g2 = c.lastEffect, g2 !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g2, g2.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g2, h2);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f2, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f2 } : (g2.isBackwards = b, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d, g2.tail = c, g2.tailMode = e, g2.lastEffect = f2);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f2, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f2, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi$1(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f2 = [];
        break;
      case "select":
        e = m$1({}, e, { value: void 0 });
        d = m$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g2;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h2 = e[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h2 = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h2 && (k != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
            for (g2 in k)
              k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
          } else
            c || (f2 || (f2 = []), f2.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, k != null && h2 !== k && (f2 = f2 || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f2 = f2 || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && G("scroll", a), f2 || h2 === k || (f2 = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f2 = f2 || []).push(l2, k));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[wf] = b;
          d[xf] = f2;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f2);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f2), G("invalid", d);
          }
          vb(c, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e = f2[g2], g2 === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g2) && e != null && g2 === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), c === "select" && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g2 = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m$1({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h2 = e;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k = h2[f2];
              f2 === "style" ? tb(a, k) : f2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f2 === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k != null && f2 === "onScroll" && G("scroll", a) : k != null && qa(a, f2, k, g2));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f2 = d.value;
              f2 != null ? fb(a, !!d.multiple, f2, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f2 = (b.flags & 64) !== 0;
      g2 = d.rendering;
      if (g2 === null)
        if (f2)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b.flags |= 64;
                Fi(d, false);
                f2 = g2.updateQueue;
                f2 !== null && (b.updateQueue = f2, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f2 = c, a = d, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b.flags |= 64, f2 = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g2.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = d.last, c !== null ? c.sibling = g2 : b.child = g2, d.last = g2);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f2 ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f2) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f2) {
                Wi(d, f2);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b, f2);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f2; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g2 = a, h2 = c, k = h2; ; )
          if (bj(g2, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h2)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h2)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f2 ? (g2 = e, h2 = c.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f2 = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f2 = b.updateQueue;
        b.updateQueue = null;
        if (f2 !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f2.length; e += 2) {
            var g2 = f2[e], h2 = f2[e + 1];
            g2 === "style" ? tb(c, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c, h2) : g2 === "children" ? pb(c, h2) : qa(c, g2, h2, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f2 = d.value, f2 != null ? fb(c, !!d.multiple, f2, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l2 = b;
        Rc(k);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k);
    g2 &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g2 = 31 - Vc(c);
          f2 = 1 << g2;
          g2 = d[g2];
          g2 > e && (e = g2);
          c &= ~f2;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c.return, h2 = c, k = b;
        b = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k = void 0;
              h2 = b;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k = new Set(), q2.set(l2, k)) : (k = q2.get(l2), k === void 0 && (k = new Set(), q2.set(l2, k)));
              if (!k.has(h2)) {
                k.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f2, b);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f2, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f2 = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k = 31 - Vc(f2), l2 = 1 << k;
    e[k] = 0;
    g2[k] = -1;
    h2[k] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f2 = c[d + 1], g2 = e.destroy;
    e.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f2 = c[d + 1];
    try {
      var h2 = e.create;
      e.destroy = h2();
    } catch (k) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k);
    }
  }
  for (h2 = a.current.firstEffect; h2 !== null; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f2) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi$1(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi$1(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f2 = true;
          Jf(b);
        } else
          f2 = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g2 = d.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b, d, g2, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f2, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b.type = e;
        f2 = b.tag = hk(e);
        a = lg(e, a);
        switch (f2) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi$1(a, b, c);
      else {
        e = b.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f2 = lh = true;
        if (f2) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f2 = a[e], f2._workInProgressVersionPrimary = a[e + 1], th.push(f2);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e.children, nf(d, e) ? g2 = null : f2 !== null && nf(d, f2) && (b.flags |= 16), oi(a, b), fi(a, b, g2, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g2 = b.memoizedProps;
        f2 = e.value;
        var h2 = b.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e.children && !N.current) {
              b = hi$1(a, b, c);
              break a;
            }
          } else
            for (h2 = b.child, h2 !== null && (h2.return = b); h2 !== null; ) {
              var k = h2.dependencies;
              if (k !== null) {
                g2 = h2.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c);
                    sg(h2.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f2 = b.pendingProps, d = f2.children, tg(b, c), e = vg(e, f2.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f2 = lg(e, b.pendingProps), f2 = lg(e.type, f2), ii(a, b, e, f2, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f2) {
  var g2 = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f2, b);
        case Ha:
          g2 = 8;
          e |= 16;
          break;
        case wa:
          g2 = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c, e, f2, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g2, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f2 = Hg(), g2 = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h2 = c;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h2);
          break a;
        }
      }
      c = h2;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f2, g2);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e === "function") {
      var h2 = e;
      e = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b, g2, a, e);
  } else {
    f2 = c._reactRootContainer = sk(c, d);
    g2 = f2._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g2);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g2, a, e);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  _reactDom_17_0_2_reactDom.exports = reactDom_production_min;
}
var ReactDOM$1 = _reactDom_17_0_2_reactDom.exports;
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducersObj = {};
  for (const key of reducerKeys) {
    if (typeof reducers[key] === "function") {
      finalReducersObj[key] = reducers[key];
    }
  }
  return (state = {}, action) => {
    let hasChanged = false;
    const nextState = {};
    for (const key of reducerKeys) {
      const prevStateForKey = state[key];
      const nextStateForKey = finalReducersObj[key](prevStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
function createStore(preloadedState, reducer2) {
  const listeners = [];
  let currentState = preloadedState;
  const dispatch = (action) => {
    const nextState = reducer2(currentState, action);
    const prevState = currentState;
    currentState = nextState;
    for (const cb2 of listeners) {
      cb2(currentState, prevState);
    }
  };
  const subscribe = (listener) => {
    let isSubscribed = true;
    listeners.push(listener);
    return () => {
      if (!isSubscribed) {
        return;
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isSubscribed = false;
    };
  };
  const getState = () => {
    return currentState;
  };
  return {
    dispatch,
    getState,
    subscribe
  };
}
function reducer$5(state, action) {
  switch (action.type) {
    case "SET_MARK_MEMO_ID": {
      if (action.payload.markMemoId === state.markMemoId) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        markMemoId: action.payload.markMemoId
      });
    }
    case "SET_EDIT_MEMO_ID": {
      if (action.payload.editMemoId === state.editMemoId) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        editMemoId: action.payload.editMemoId
      });
    }
    case "SET_MOBILE_VIEW": {
      if (action.payload.isMobileView === state.isMobileView) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        isMobileView: action.payload.isMobileView
      });
    }
    case "SET_SHOW_SIDEBAR_IN_MOBILE_VIEW": {
      if (action.payload.showSiderbarInMobileView === state.showSiderbarInMobileView) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        showSiderbarInMobileView: action.payload.showSiderbarInMobileView
      });
    }
    case "SET_APP_SETTING": {
      return __spreadValues(__spreadValues({}, state), action.payload);
    }
    default: {
      return state;
    }
  }
}
const defaultState$5 = {
  markMemoId: "",
  editMemoId: "",
  shouldSplitMemoWord: true,
  shouldHideImageUrl: true,
  shouldUseMarkdownParser: true,
  useTinyUndoHistoryCache: false,
  isMobileView: false,
  showSiderbarInMobileView: false
};
function reducer$4(state, action) {
  switch (action.type) {
    case "SET_LOCATION": {
      return action.payload;
    }
    case "SET_PATHNAME": {
      if (action.payload.pathname === state.pathname) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        pathname: action.payload.pathname
      });
    }
    case "SET_HASH": {
      if (action.payload.hash === state.hash) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        hash: action.payload.hash
      });
    }
    case "SET_QUERY": {
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadValues({}, action.payload)
      });
    }
    case "SET_TAG_QUERY": {
      if (action.payload.tag === state.query.tag) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          tag: action.payload.tag
        })
      });
    }
    case "SET_DURATION_QUERY": {
      if (action.payload.duration === state.query.duration) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          duration: __spreadValues(__spreadValues({}, state.query.duration), action.payload.duration)
        })
      });
    }
    case "SET_TYPE": {
      if (action.payload.type === state.query.type) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          type: action.payload.type
        })
      });
    }
    case "SET_TEXT": {
      if (action.payload.text === state.query.text) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          text: action.payload.text
        })
      });
    }
    case "SET_QUERY_FILTER": {
      if (action.payload === state.query.filter) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          filter: action.payload
        })
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState$4 = {
  pathname: "/",
  hash: "",
  query: {
    tag: "",
    duration: null,
    type: "",
    text: "",
    filter: ""
  }
};
var utils;
(function(utils2) {
  function getNowTimeStamp() {
    return parseInt(require$$0.moment().format("x"));
  }
  utils2.getNowTimeStamp = getNowTimeStamp;
  function getOSVersion() {
    const appVersion = navigator.userAgent;
    let detectedOS = "Unknown";
    if (appVersion.indexOf("Win") != -1) {
      detectedOS = "Windows";
    } else if (appVersion.indexOf("Mac") != -1) {
      detectedOS = "MacOS";
    } else if (appVersion.indexOf("Linux") != -1) {
      detectedOS = "Linux";
    }
    return detectedOS;
  }
  utils2.getOSVersion = getOSVersion;
  function getTimeStampByDate(t2) {
    if (typeof t2 === "string") {
      t2 = t2.replaceAll("-", "/");
    }
    return new Date(t2).getTime();
  }
  utils2.getTimeStampByDate = getTimeStampByDate;
  function getDateStampByDate(t2) {
    const d = new Date(getTimeStampByDate(t2));
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
  utils2.getDateStampByDate = getDateStampByDate;
  function getDateString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    return `${year}/${month}/${date}`;
  }
  utils2.getDateString = getDateString;
  function getTimeString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const hours = d.getHours();
    const mins = d.getMinutes();
    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minsStr = mins < 10 ? "0" + mins : mins;
    return `${hoursStr}:${minsStr}`;
  }
  utils2.getTimeString = getTimeString;
  function getDateTimeString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hours = d.getHours();
    const mins = d.getMinutes();
    const monthStr = month < 10 ? "0" + month : month;
    const dateStr = date < 10 ? "0" + date : date;
    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minsStr = mins < 10 ? "0" + mins : mins;
    const secsStr = "00";
    return `${year}/${monthStr}/${dateStr} ${hoursStr}:${minsStr}:${secsStr}`;
  }
  utils2.getDateTimeString = getDateTimeString;
  function dedupe(data) {
    return Array.from(new Set(data));
  }
  utils2.dedupe = dedupe;
  function dedupeObjectWithId(data) {
    const idSet = new Set();
    const result = [];
    for (const d of data) {
      if (!idSet.has(d.id)) {
        idSet.add(d.id);
        result.push(d);
      }
    }
    return result;
  }
  utils2.dedupeObjectWithId = dedupeObjectWithId;
  function debounce2(fn2, delay3) {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(fn2, delay3);
      } else {
        timer = setTimeout(fn2, delay3);
      }
    };
  }
  utils2.debounce = debounce2;
  function throttle(fn2, delay3) {
    let valid = true;
    return () => {
      if (!valid) {
        return false;
      }
      valid = false;
      setTimeout(() => {
        fn2();
        valid = true;
      }, delay3);
    };
  }
  utils2.throttle = throttle;
  function transformObjectToParamsString(object) {
    const params = [];
    const keys = Object.keys(object).sort();
    for (const key of keys) {
      const val = object[key];
      if (val) {
        if (typeof val === "object") {
          params.push(...transformObjectToParamsString(val).split("&"));
        } else {
          params.push(`${key}=${val}`);
        }
      }
    }
    return params.join("&");
  }
  utils2.transformObjectToParamsString = transformObjectToParamsString;
  function transformParamsStringToObject(paramsString) {
    const object = {};
    const params = paramsString.split("&");
    for (const p2 of params) {
      const [key, val] = p2.split("=");
      if (key && val) {
        object[key] = val;
      }
    }
    return object;
  }
  utils2.transformParamsStringToObject = transformParamsStringToObject;
  function filterObjectNullKeys(object) {
    if (!object) {
      return {};
    }
    const finalObject = {};
    const keys = Object.keys(object).sort();
    for (const key of keys) {
      const val = object[key];
      if (typeof val === "object") {
        const temp = filterObjectNullKeys(JSON.parse(JSON.stringify(val)));
        if (temp && Object.keys(temp).length > 0) {
          finalObject[key] = temp;
        }
      } else {
        if (val) {
          finalObject[key] = val;
        }
      }
    }
    return finalObject;
  }
  utils2.filterObjectNullKeys = filterObjectNullKeys;
  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error2) {
        console.warn("Copy to clipboard failed.", error2);
      }
    } else {
      console.warn("Copy to clipboard failed, methods not supports.");
    }
  }
  utils2.copyTextToClipboard = copyTextToClipboard;
  function getImageSize(src) {
    return new Promise((resolve) => {
      const imgEl = new Image();
      imgEl.onload = () => {
        const { width, height } = imgEl;
        if (width > 0 && height > 0) {
          resolve({ width, height });
        } else {
          resolve({ width: 0, height: 0 });
        }
      };
      imgEl.onerror = () => {
        resolve({ width: 0, height: 0 });
      };
      imgEl.className = "hidden";
      imgEl.src = src;
      document.body.appendChild(imgEl);
      imgEl.remove();
    });
  }
  utils2.getImageSize = getImageSize;
})(utils || (utils = {}));
var utils$1 = utils;
function reducer$3(state, action) {
  switch (action.type) {
    case "SET_MEMOS": {
      const memos = utils$1.dedupeObjectWithId(action.payload.memos.sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)));
      return __spreadProps(__spreadValues({}, state), {
        memos: [...memos]
      });
    }
    case "SET_TAGS": {
      return __spreadProps(__spreadValues({}, state), {
        tags: action.payload.tags
      });
    }
    case "INSERT_MEMO": {
      const memos = utils$1.dedupeObjectWithId([action.payload.memo, ...state.memos].sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)));
      return __spreadProps(__spreadValues({}, state), {
        memos
      });
    }
    case "DELETE_MEMO_BY_ID": {
      return __spreadProps(__spreadValues({}, state), {
        memos: [...state.memos].filter((memo2) => memo2.id !== action.payload.id)
      });
    }
    case "EDIT_MEMO": {
      const memos = state.memos.map((m2) => {
        if (m2.id === action.payload.id) {
          return __spreadValues(__spreadValues({}, m2), action.payload);
        } else {
          return m2;
        }
      });
      return __spreadProps(__spreadValues({}, state), {
        memos
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState$3 = {
  memos: [],
  tags: []
};
function reducer$2(state, action) {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        user: action.payload.user
      };
    }
    case "SIGN_OUT": {
      return {
        user: null
      };
    }
    default: {
      return state;
    }
  }
}
const defaultState$2 = { user: null };
function reducer$1(state, action) {
  switch (action.type) {
    case "SET_QUERIES": {
      const queries = utils$1.dedupeObjectWithId(action.payload.queries.sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)).sort((a, b) => {
        var _a, _b;
        return utils$1.getTimeStampByDate((_a = b.pinnedAt) != null ? _a : 0) - utils$1.getTimeStampByDate((_b = a.pinnedAt) != null ? _b : 0);
      }));
      return __spreadProps(__spreadValues({}, state), {
        queries
      });
    }
    case "INSERT_QUERY": {
      const queries = utils$1.dedupeObjectWithId([action.payload.query, ...state.queries].sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)));
      return __spreadProps(__spreadValues({}, state), {
        queries
      });
    }
    case "DELETE_QUERY_BY_ID": {
      return __spreadProps(__spreadValues({}, state), {
        queries: [...state.queries].filter((query) => query.id !== action.payload.id)
      });
    }
    case "UPDATE_QUERY": {
      const queries = state.queries.map((m2) => {
        if (m2.id === action.payload.id) {
          return __spreadValues(__spreadValues({}, m2), action.payload);
        } else {
          return m2;
        }
      });
      return __spreadProps(__spreadValues({}, state), {
        queries
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState$1 = {
  queries: []
};
var main$1 = {};
Object.defineProperty(main$1, "__esModule", { value: true });
var obsidian = require$$0__default["default"];
const DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
const DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
const DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";
const DEFAULT_QUARTERLY_NOTE_FORMAT = "YYYY-[Q]Q";
const DEFAULT_YEARLY_NOTE_FORMAT = "YYYY";
function shouldUsePeriodicNotesSettings(periodicity) {
  var _a, _b;
  const periodicNotes = window.app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a[periodicity]) == null ? void 0 : _b.enabled);
}
function getDailyNoteSettings() {
  var _a, _b, _c, _d;
  try {
    const { internalPlugins, plugins } = window.app;
    if (shouldUsePeriodicNotesSettings("daily")) {
      const { format: format3, folder: folder2, template: template2 } = ((_b = (_a = plugins.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.daily) || {};
      return {
        format: format3 || DEFAULT_DAILY_NOTE_FORMAT,
        folder: (folder2 == null ? void 0 : folder2.trim()) || "",
        template: (template2 == null ? void 0 : template2.trim()) || ""
      };
    }
    const { folder, format: format2, template } = ((_d = (_c = internalPlugins.getPluginById("daily-notes")) == null ? void 0 : _c.instance) == null ? void 0 : _d.options) || {};
    return {
      format: format2 || DEFAULT_DAILY_NOTE_FORMAT,
      folder: (folder == null ? void 0 : folder.trim()) || "",
      template: (template == null ? void 0 : template.trim()) || ""
    };
  } catch (err) {
    console.info("No custom daily note settings found!", err);
  }
}
function getWeeklyNoteSettings() {
  var _a, _b, _c, _d, _e, _f, _g;
  try {
    const pluginManager = window.app.plugins;
    const calendarSettings = (_a = pluginManager.getPlugin("calendar")) == null ? void 0 : _a.options;
    const periodicNotesSettings = (_c = (_b = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _b.settings) == null ? void 0 : _c.weekly;
    if (shouldUsePeriodicNotesSettings("weekly")) {
      return {
        format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
        folder: ((_d = periodicNotesSettings.folder) == null ? void 0 : _d.trim()) || "",
        template: ((_e = periodicNotesSettings.template) == null ? void 0 : _e.trim()) || ""
      };
    }
    const settings = calendarSettings || {};
    return {
      format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
      folder: ((_f = settings.weeklyNoteFolder) == null ? void 0 : _f.trim()) || "",
      template: ((_g = settings.weeklyNoteTemplate) == null ? void 0 : _g.trim()) || ""
    };
  } catch (err) {
    console.info("No custom weekly note settings found!", err);
  }
}
function getMonthlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("monthly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.monthly) || {};
    return {
      format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom monthly note settings found!", err);
  }
}
function getQuarterlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("quarterly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.quarterly) || {};
    return {
      format: settings.format || DEFAULT_QUARTERLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom quarterly note settings found!", err);
  }
}
function getYearlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("yearly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.yearly) || {};
    return {
      format: settings.format || DEFAULT_YEARLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom yearly note settings found!", err);
  }
}
function join(...partSegments) {
  let parts = [];
  for (let i = 0, l2 = partSegments.length; i < l2; i++) {
    parts = parts.concat(partSegments[i].split("/"));
  }
  const newParts = [];
  for (let i = 0, l2 = parts.length; i < l2; i++) {
    const part = parts[i];
    if (!part || part === ".")
      continue;
    else
      newParts.push(part);
  }
  if (parts[0] === "")
    newParts.unshift("");
  return newParts.join("/");
}
function basename(fullPath) {
  let base = fullPath.substring(fullPath.lastIndexOf("/") + 1);
  if (base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}
async function ensureFolderExists(path) {
  const dirs = path.replace(/\\/g, "/").split("/");
  dirs.pop();
  if (dirs.length) {
    const dir = join(...dirs);
    if (!window.app.vault.getAbstractFileByPath(dir)) {
      await window.app.vault.createFolder(dir);
    }
  }
}
async function getNotePath(directory, filename) {
  if (!filename.endsWith(".md")) {
    filename += ".md";
  }
  const path = obsidian.normalizePath(join(directory, filename));
  await ensureFolderExists(path);
  return path;
}
async function getTemplateInfo(template) {
  const { metadataCache, vault } = window.app;
  const templatePath = obsidian.normalizePath(template);
  if (templatePath === "/") {
    return Promise.resolve(["", null]);
  }
  try {
    const templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
    const contents = await vault.cachedRead(templateFile);
    const IFoldInfo = window.app.foldManager.load(templateFile);
    return [contents, IFoldInfo];
  } catch (err) {
    console.error(`Failed to read the daily note template '${templatePath}'`, err);
    new obsidian.Notice("Failed to read the daily note template");
    return ["", null];
  }
}
function getDateUID(date, granularity = "day") {
  const ts = date.clone().startOf(granularity).format();
  return `${granularity}-${ts}`;
}
function removeEscapedCharacters(format2) {
  return format2.replace(/\[[^\]]*\]/g, "");
}
function isFormatAmbiguous(format2, granularity) {
  if (granularity === "week") {
    const cleanFormat = removeEscapedCharacters(format2);
    return /w{1,2}/i.test(cleanFormat) && (/M{1,4}/.test(cleanFormat) || /D{1,4}/.test(cleanFormat));
  }
  return false;
}
function getDateFromFile(file, granularity) {
  return getDateFromFilename(file.basename, granularity);
}
function getDateFromPath(path, granularity) {
  return getDateFromFilename(basename(path), granularity);
}
function getDateFromFilename(filename, granularity) {
  const getSettings = {
    day: getDailyNoteSettings,
    week: getWeeklyNoteSettings,
    month: getMonthlyNoteSettings,
    quarter: getQuarterlyNoteSettings,
    year: getYearlyNoteSettings
  };
  const format2 = getSettings[granularity]().format.split("/").pop();
  const noteDate = window.moment(filename, format2, true);
  if (!noteDate.isValid()) {
    return null;
  }
  if (isFormatAmbiguous(format2, granularity)) {
    if (granularity === "week") {
      const cleanFormat = removeEscapedCharacters(format2);
      if (/w{1,2}/i.test(cleanFormat)) {
        return window.moment(filename, format2.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
      }
    }
  }
  return noteDate;
}
class DailyNotesFolderMissingError$1 extends Error {
}
async function createDailyNote(date) {
  const app2 = window.app;
  const { vault } = app2;
  const moment = window.moment;
  const { template, format: format2, folder } = getDailyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format2);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename).replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_23, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = moment();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format2);
    }).replace(/{{\s*yesterday\s*}}/gi, date.clone().subtract(1, "day").format(format2)).replace(/{{\s*tomorrow\s*}}/gi, date.clone().add(1, "d").format(format2)));
    app2.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getDailyNote(date, dailyNotes) {
  var _a;
  return (_a = dailyNotes[getDateUID(date, "day")]) != null ? _a : null;
}
function getAllDailyNotes() {
  const { vault } = window.app;
  const { folder } = getDailyNoteSettings();
  const dailyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError$1("Failed to find daily notes folder");
  }
  const dailyNotes = {};
  obsidian.Vault.recurseChildren(dailyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date = getDateFromFile(note, "day");
      if (date) {
        const dateString = getDateUID(date, "day");
        dailyNotes[dateString] = note;
      }
    }
  });
  return dailyNotes;
}
class WeeklyNotesFolderMissingError extends Error {
}
function getDaysOfWeek() {
  const { moment } = window;
  let weekStart = moment.localeData()._week.dow;
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  while (weekStart) {
    daysOfWeek.push(daysOfWeek.shift());
    weekStart--;
  }
  return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
  return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
async function createWeeklyNote(date) {
  const { vault } = window.app;
  const { template, format: format2, folder } = getWeeklyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format2);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_23, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format2);
    }).replace(/{{\s*title\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (_23, dayOfWeek, momentFormat) => {
      const day = getDayOfWeekNumericalValue(dayOfWeek);
      return date.weekday(day).format(momentFormat.trim());
    }));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getWeeklyNote(date, weeklyNotes) {
  var _a;
  return (_a = weeklyNotes[getDateUID(date, "week")]) != null ? _a : null;
}
function getAllWeeklyNotes() {
  const weeklyNotes = {};
  if (!appHasWeeklyNotesPluginLoaded()) {
    return weeklyNotes;
  }
  const { vault } = window.app;
  const { folder } = getWeeklyNoteSettings();
  const weeklyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!weeklyNotesFolder) {
    throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
  }
  obsidian.Vault.recurseChildren(weeklyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date = getDateFromFile(note, "week");
      if (date) {
        const dateString = getDateUID(date, "week");
        weeklyNotes[dateString] = note;
      }
    }
  });
  return weeklyNotes;
}
class MonthlyNotesFolderMissingError extends Error {
}
async function createMonthlyNote(date) {
  const { vault } = window.app;
  const { template, format: format2, folder } = getMonthlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format2);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_23, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format2);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getMonthlyNote(date, monthlyNotes) {
  var _a;
  return (_a = monthlyNotes[getDateUID(date, "month")]) != null ? _a : null;
}
function getAllMonthlyNotes() {
  const monthlyNotes = {};
  if (!appHasMonthlyNotesPluginLoaded()) {
    return monthlyNotes;
  }
  const { vault } = window.app;
  const { folder } = getMonthlyNoteSettings();
  const monthlyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!monthlyNotesFolder) {
    throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
  }
  obsidian.Vault.recurseChildren(monthlyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date = getDateFromFile(note, "month");
      if (date) {
        const dateString = getDateUID(date, "month");
        monthlyNotes[dateString] = note;
      }
    }
  });
  return monthlyNotes;
}
class QuarterlyNotesFolderMissingError extends Error {
}
async function createQuarterlyNote(date) {
  const { vault } = window.app;
  const { template, format: format2, folder } = getQuarterlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format2);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_23, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format2);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getQuarterlyNote(date, quarterly) {
  var _a;
  return (_a = quarterly[getDateUID(date, "quarter")]) != null ? _a : null;
}
function getAllQuarterlyNotes() {
  const quarterly = {};
  if (!appHasQuarterlyNotesPluginLoaded()) {
    return quarterly;
  }
  const { vault } = window.app;
  const { folder } = getQuarterlyNoteSettings();
  const quarterlyFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!quarterlyFolder) {
    throw new QuarterlyNotesFolderMissingError("Failed to find quarterly notes folder");
  }
  obsidian.Vault.recurseChildren(quarterlyFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date = getDateFromFile(note, "quarter");
      if (date) {
        const dateString = getDateUID(date, "quarter");
        quarterly[dateString] = note;
      }
    }
  });
  return quarterly;
}
class YearlyNotesFolderMissingError extends Error {
}
async function createYearlyNote(date) {
  const { vault } = window.app;
  const { template, format: format2, folder } = getYearlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date.format(format2);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_23, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format2);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getYearlyNote(date, yearlyNotes) {
  var _a;
  return (_a = yearlyNotes[getDateUID(date, "year")]) != null ? _a : null;
}
function getAllYearlyNotes() {
  const yearlyNotes = {};
  if (!appHasYearlyNotesPluginLoaded()) {
    return yearlyNotes;
  }
  const { vault } = window.app;
  const { folder } = getYearlyNoteSettings();
  const yearlyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!yearlyNotesFolder) {
    throw new YearlyNotesFolderMissingError("Failed to find yearly notes folder");
  }
  obsidian.Vault.recurseChildren(yearlyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date = getDateFromFile(note, "year");
      if (date) {
        const dateString = getDateUID(date, "year");
        yearlyNotes[dateString] = note;
      }
    }
  });
  return yearlyNotes;
}
function appHasDailyNotesPluginLoaded() {
  var _a, _b;
  const { app: app2 } = window;
  const dailyNotesPlugin = app2.internalPlugins.plugins["daily-notes"];
  if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
    return true;
  }
  const periodicNotes = app2.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.daily) == null ? void 0 : _b.enabled);
}
function appHasWeeklyNotesPluginLoaded() {
  var _a, _b;
  const { app: app2 } = window;
  if (app2.plugins.getPlugin("calendar")) {
    return true;
  }
  const periodicNotes = app2.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.weekly) == null ? void 0 : _b.enabled);
}
function appHasMonthlyNotesPluginLoaded() {
  var _a, _b;
  const { app: app2 } = window;
  const periodicNotes = app2.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.monthly) == null ? void 0 : _b.enabled);
}
function appHasQuarterlyNotesPluginLoaded() {
  var _a, _b;
  const { app: app2 } = window;
  const periodicNotes = app2.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.quarterly) == null ? void 0 : _b.enabled);
}
function appHasYearlyNotesPluginLoaded() {
  var _a, _b;
  const { app: app2 } = window;
  const periodicNotes = app2.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.yearly) == null ? void 0 : _b.enabled);
}
function getPeriodicNoteSettings(granularity) {
  const getSettings = {
    day: getDailyNoteSettings,
    week: getWeeklyNoteSettings,
    month: getMonthlyNoteSettings,
    quarter: getQuarterlyNoteSettings,
    year: getYearlyNoteSettings
  }[granularity];
  return getSettings();
}
function createPeriodicNote(granularity, date) {
  const createFn = {
    day: createDailyNote,
    month: createMonthlyNote,
    week: createWeeklyNote
  };
  return createFn[granularity](date);
}
main$1.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
main$1.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
main$1.DEFAULT_QUARTERLY_NOTE_FORMAT = DEFAULT_QUARTERLY_NOTE_FORMAT;
main$1.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
main$1.DEFAULT_YEARLY_NOTE_FORMAT = DEFAULT_YEARLY_NOTE_FORMAT;
var appHasDailyNotesPluginLoaded_1 = main$1.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
main$1.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
main$1.appHasQuarterlyNotesPluginLoaded = appHasQuarterlyNotesPluginLoaded;
main$1.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
main$1.appHasYearlyNotesPluginLoaded = appHasYearlyNotesPluginLoaded;
var createDailyNote_1 = main$1.createDailyNote = createDailyNote;
main$1.createMonthlyNote = createMonthlyNote;
main$1.createPeriodicNote = createPeriodicNote;
main$1.createQuarterlyNote = createQuarterlyNote;
main$1.createWeeklyNote = createWeeklyNote;
main$1.createYearlyNote = createYearlyNote;
var getAllDailyNotes_1 = main$1.getAllDailyNotes = getAllDailyNotes;
main$1.getAllMonthlyNotes = getAllMonthlyNotes;
main$1.getAllQuarterlyNotes = getAllQuarterlyNotes;
main$1.getAllWeeklyNotes = getAllWeeklyNotes;
main$1.getAllYearlyNotes = getAllYearlyNotes;
var getDailyNote_1 = main$1.getDailyNote = getDailyNote;
var getDailyNoteSettings_1 = main$1.getDailyNoteSettings = getDailyNoteSettings;
var getDateFromFile_1 = main$1.getDateFromFile = getDateFromFile;
main$1.getDateFromPath = getDateFromPath;
main$1.getDateUID = getDateUID;
main$1.getMonthlyNote = getMonthlyNote;
main$1.getMonthlyNoteSettings = getMonthlyNoteSettings;
main$1.getPeriodicNoteSettings = getPeriodicNoteSettings;
main$1.getQuarterlyNote = getQuarterlyNote;
main$1.getQuarterlyNoteSettings = getQuarterlyNoteSettings;
main$1.getTemplateInfo = getTemplateInfo;
main$1.getWeeklyNote = getWeeklyNote;
main$1.getWeeklyNoteSettings = getWeeklyNoteSettings;
main$1.getYearlyNote = getYearlyNote;
main$1.getYearlyNoteSettings = getYearlyNoteSettings;
function reducer(state, action) {
  switch (action.type) {
    case "SET_DAILYNOTES": {
      const dailyNotes = getAllDailyNotes_1();
      return __spreadProps(__spreadValues({}, state), {
        dailyNotes
      });
    }
    case "SET_APP": {
      return __spreadProps(__spreadValues({}, state), {
        app: action.payload.app
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState = {
  dailyNotes: null,
  app: null
};
const appStore = createStore({
  globalState: defaultState$5,
  locationState: defaultState$4,
  memoState: defaultState$3,
  userState: defaultState$2,
  queryState: defaultState$1,
  dailyNotesState: defaultState
}, combineReducers({
  globalState: reducer$5,
  locationState: reducer$4,
  memoState: reducer$3,
  userState: reducer$2,
  queryState: reducer$1,
  dailyNotesState: reducer
}));
const appContext = _react_17_0_2_react.exports.createContext(appStore.getState());
class DailyNotesService {
  getState() {
    return appStore.getState().dailyNotesState;
  }
  getApp(app2) {
    appStore.dispatch({
      type: "SET_APP",
      payload: {
        app: app2
      }
    });
    return app2;
  }
  async getMyAllDailyNotes() {
    const dailyNotes = getAllDailyNotes_1();
    appStore.dispatch({
      type: "SET_DAILYNOTES",
      payload: {
        dailyNotes
      }
    });
    return dailyNotes;
  }
  async getDailyNoteByMemo(date) {
    const { dailyNotes } = this.getState();
    const dailyNote = getDailyNote_1(date, dailyNotes);
    return dailyNote;
  }
}
const dailyNotesService = new DailyNotesService();
var storage;
(function(storage2) {
  function get2(keys) {
    const data = {};
    for (const key of keys) {
      try {
        const stringifyValue = localStorage.getItem(key);
        if (stringifyValue !== null) {
          const val = JSON.parse(stringifyValue);
          data[key] = val;
        }
      } catch (error2) {
        console.error("Get storage failed in ", key, error2);
      }
    }
    return data;
  }
  storage2.get = get2;
  function set(data) {
    for (const key in data) {
      try {
        const stringifyValue = JSON.stringify(data[key]);
        localStorage.setItem(key, stringifyValue);
      } catch (error2) {
        console.error("Save storage failed in ", key, error2);
      }
    }
  }
  storage2.set = set;
  function remove2(keys) {
    for (const key of keys) {
      try {
        localStorage.removeItem(key);
      } catch (error2) {
        console.error("Remove storage failed in ", key, error2);
      }
    }
  }
  storage2.remove = remove2;
  function emitStorageChangedEvent() {
    var _a;
    const iframeEl = document.createElement("iframe");
    iframeEl.style.display = "none";
    document.body.appendChild(iframeEl);
    (_a = iframeEl.contentWindow) == null ? void 0 : _a.localStorage.setItem("t", Date.now().toString());
    iframeEl.remove();
  }
  storage2.emitStorageChangedEvent = emitStorageChangedEvent;
})(storage || (storage = {}));
class GlobalStateService {
  constructor() {
    __publicField(this, "getState", () => {
      return appStore.getState().globalState;
    });
    __publicField(this, "setEditMemoId", (editMemoId) => {
      appStore.dispatch({
        type: "SET_EDIT_MEMO_ID",
        payload: {
          editMemoId
        }
      });
    });
    __publicField(this, "setMarkMemoId", (markMemoId) => {
      appStore.dispatch({
        type: "SET_MARK_MEMO_ID",
        payload: {
          markMemoId
        }
      });
    });
    __publicField(this, "setIsMobileView", (isMobileView) => {
      appStore.dispatch({
        type: "SET_MOBILE_VIEW",
        payload: {
          isMobileView
        }
      });
    });
    __publicField(this, "setShowSiderbarInMobileView", (showSiderbarInMobileView) => {
      appStore.dispatch({
        type: "SET_SHOW_SIDEBAR_IN_MOBILE_VIEW",
        payload: {
          showSiderbarInMobileView
        }
      });
    });
    __publicField(this, "setAppSetting", (appSetting) => {
      appStore.dispatch({
        type: "SET_APP_SETTING",
        payload: appSetting
      });
      storage.set(appSetting);
    });
    var _a, _b, _c, _d;
    const cachedSetting = storage.get([
      "shouldSplitMemoWord",
      "shouldHideImageUrl",
      "shouldUseMarkdownParser",
      "useTinyUndoHistoryCache"
    ]);
    const defaultAppSetting = {
      shouldSplitMemoWord: (_a = cachedSetting.shouldSplitMemoWord) != null ? _a : true,
      shouldHideImageUrl: (_b = cachedSetting.shouldHideImageUrl) != null ? _b : true,
      shouldUseMarkdownParser: (_c = cachedSetting.shouldUseMarkdownParser) != null ? _c : true,
      useTinyUndoHistoryCache: (_d = cachedSetting.useTinyUndoHistoryCache) != null ? _d : false
    };
    this.setAppSetting(defaultAppSetting);
  }
}
const globalStateService = new GlobalStateService();
class LocationService {
  constructor() {
    __publicField(this, "updateStateWithLocation", () => {
      var _a, _b, _c, _d, _e, _f;
      const { pathname, search: search2, hash: hash2 } = window.location;
      const urlParams = new URLSearchParams(search2);
      const state = {
        pathname: "/",
        hash: "",
        query: {
          tag: "",
          duration: null,
          text: "",
          type: "",
          filter: ""
        }
      };
      state.query.tag = (_a = urlParams.get("tag")) != null ? _a : "";
      state.query.type = (_b = urlParams.get("type")) != null ? _b : "";
      state.query.text = (_c = urlParams.get("text")) != null ? _c : "";
      state.query.filter = (_d = urlParams.get("filter")) != null ? _d : "";
      const from = parseInt((_e = urlParams.get("from")) != null ? _e : "0");
      const to = parseInt((_f = urlParams.get("to")) != null ? _f : "0");
      if (to > from && to !== 0) {
        state.query.duration = {
          from,
          to
        };
      }
      state.hash = hash2;
      state.pathname = this.getValidPathname(pathname);
      appStore.dispatch({
        type: "SET_LOCATION",
        payload: state
      });
    });
    __publicField(this, "getState", () => {
      return appStore.getState().locationState;
    });
    __publicField(this, "clearQuery", () => {
      appStore.dispatch({
        type: "SET_QUERY",
        payload: {
          tag: "",
          duration: null,
          text: "",
          type: "",
          filter: ""
        }
      });
    });
    __publicField(this, "setQuery", (query) => {
      appStore.dispatch({
        type: "SET_QUERY",
        payload: query
      });
    });
    __publicField(this, "setHash", (hash2) => {
      appStore.dispatch({
        type: "SET_HASH",
        payload: {
          hash: hash2
        }
      });
    });
    __publicField(this, "setPathname", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "pushHistory", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "replaceHistory", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "setMemoTypeQuery", (type = "") => {
      appStore.dispatch({
        type: "SET_TYPE",
        payload: {
          type
        }
      });
    });
    __publicField(this, "setMemoFilter", (filterId) => {
      appStore.dispatch({
        type: "SET_QUERY_FILTER",
        payload: filterId
      });
    });
    __publicField(this, "setTextQuery", (text) => {
      appStore.dispatch({
        type: "SET_TEXT",
        payload: {
          text
        }
      });
    });
    __publicField(this, "setTagQuery", (tag2) => {
      appStore.dispatch({
        type: "SET_TAG_QUERY",
        payload: {
          tag: tag2
        }
      });
    });
    __publicField(this, "setFromAndToQuery", (from, to) => {
      appStore.dispatch({
        type: "SET_DURATION_QUERY",
        payload: {
          duration: { from, to }
        }
      });
    });
    __publicField(this, "getValidPathname", (pathname) => {
      if (["/", "/recycle", "/setting"].includes(pathname)) {
        return pathname;
      } else {
        return "/";
      }
    });
    this.updateStateWithLocation();
    window.onpopstate = () => {
      this.updateStateWithLocation();
    };
  }
}
const locationService = new LocationService();
async function changeMemo(memoid, originalContent, content, memoType) {
  const { dailyNotes } = dailyNotesService.getState();
  const { vault } = appStore.getState().dailyNotesState.app;
  const timeString = memoid.slice(0, 11) + "00";
  const idString = parseInt(memoid.slice(14));
  const changeDate = require$$0.moment(timeString, "YYYYMMDDHHmmSS");
  const dailyNote = getDailyNote_1(changeDate, dailyNotes);
  const fileContent = await vault.read(dailyNote);
  const fileLines = getAllLinesFromFile$9(fileContent);
  const removeEnter = content.replace(/\n/g, "<br>");
  const originalLine = fileLines[idString];
  const newLine = fileLines[idString].replace(originalContent, removeEnter);
  const newFileContent = fileContent.replace(originalLine, newLine);
  await vault.modify(dailyNote, newFileContent);
  return {
    id: memoid,
    content: removeEnter,
    deletedAt: "",
    createdAt: changeDate.format("YYYY/MM/DD HH:mm:SS"),
    updatedAt: changeDate.format("YYYY/MM/DD HH:mm:SS"),
    memoType
  };
}
function getDailyNotePath() {
  const dailyNotesSetting = getDailyNoteSettings_1();
  const dailyNotePath = dailyNotesSetting.folder;
  return dailyNotePath;
}
const getAllLinesFromFile$9 = (cache) => cache.split(/\r?\n/);
const findQuery = async () => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const queryList2 = [];
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/query.md";
  const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (queryFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(queryFile);
    const fileLines = getAllLinesFromFile$8(fileContents);
    if (fileLines && fileLines.length != 0) {
      for (let i = 0; i < fileLines.length; i++) {
        if (fileLines[i] === "")
          continue;
        const createdDateString = getCreatedDateFromLine(fileLines[i]);
        const createdDate = require$$0.moment(createdDateString, "YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss");
        const updatedDate = createdDate;
        const id2 = createdDateString + getIDFromLine$1(fileLines[i]);
        const querystring = getStringFromLine(fileLines[i]);
        const title = getTitleFromLine(fileLines[i]);
        let pinnedDate;
        if (/^(.+)pinnedAt(.+)$/.test(fileLines[i])) {
          pinnedDate = require$$0.moment(getPinnedDateFromLine$1(fileLines[i]), "YYYYMMDDHHmmss");
          queryList2.push({
            createdAt: createdDate,
            id: id2,
            pinnedAt: pinnedDate.format("YYYY/MM/DD HH:mm:ss"),
            querystring,
            title,
            updatedAt: updatedDate,
            userId: ""
          });
        } else if (/^(.+)\[\](.+)?$/.test(fileLines[i])) {
          queryList2.push({
            createdAt: createdDate,
            id: id2,
            pinnedAt: "",
            querystring: "",
            title,
            updatedAt: updatedDate,
            userId: ""
          });
        } else {
          queryList2.push({
            createdAt: createdDate,
            id: id2,
            pinnedAt: "",
            querystring,
            title,
            updatedAt: updatedDate,
            userId: ""
          });
        }
      }
    }
  }
  return queryList2;
};
const getAllLinesFromFile$8 = (cache) => cache.split(/\r?\n/);
const getCreatedDateFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})/.exec(line)) == null ? void 0 : _a[1];
};
const getIDFromLine$1 = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s/.exec(line)) == null ? void 0 : _a[2];
};
const getStringFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)?\])/.exec(line)) == null ? void 0 : _a[4];
};
const getTitleFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)\])/.exec(line)) == null ? void 0 : _a[3];
};
const getPinnedDateFromLine$1 = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)\])\s(pinnedAt\: (\d{14}))/.exec(line)) == null ? void 0 : _a[7];
};
const createObsidianQuery = async (title, querystring) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/query.md";
  const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (queryFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(queryFile);
    const fileLines = getAllLinesFromFile$7(fileContents);
    const date = require$$0.moment();
    const createdDate = date.format("YYYY/MM/DD HH:mm:ss");
    const updatedDate = createdDate;
    let lineNum;
    if (fileLines.length === 1 && fileLines[0] === "") {
      lineNum = 1;
    } else {
      lineNum = fileLines.length + 1;
    }
    const id2 = date.format("YYYYMMDDHHmmss") + lineNum;
    await createQueryInFile(queryFile, fileContents, id2, title, querystring);
    return [
      {
        createdAt: createdDate,
        id: id2,
        pinnedAt: "",
        querystring,
        title,
        updatedAt: updatedDate,
        userId: ""
      }
    ];
  } else {
    const queryFilePath = require$$0.normalizePath(absolutePath);
    const file = await createQueryFile(queryFilePath);
    const fileContents = await vault.read(file);
    const date = require$$0.moment();
    const createdDate = date.format("YYYY/MM/DD HH:mm:ss");
    const updatedDate = createdDate;
    const id2 = date.format("YYYYMMDDHHmmss") + 1;
    await createQueryInFile(file, fileContents, id2, title, querystring);
    return [
      {
        createdAt: createdDate,
        id: id2,
        pinnedAt: "",
        querystring,
        title,
        updatedAt: updatedDate,
        userId: ""
      }
    ];
  }
};
const createQueryInFile = async (file, fileContent, id2, title, queryString) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  let newContent;
  if (fileContent === "") {
    newContent = id2 + " " + title + " " + queryString;
  } else {
    newContent = fileContent + "\n" + id2 + " " + title + " " + queryString;
  }
  await vault.modify(file, newContent);
  return true;
};
const createQueryFile = async (path) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  try {
    const createdFile = await vault.create(path, "");
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${path}'`, err);
    new require$$0.Notice("Unable to create new file.");
  }
};
const getAllLinesFromFile$7 = (cache) => cache.split(/\r?\n/);
class DailyNotesFolderMissingError extends Error {
}
async function getRemainingTasks(note) {
  if (!note) {
    return 0;
  }
  const { vault } = appStore.getState().dailyNotesState.app;
  let fileContents = await vault.read(note);
  const matchLength = (fileContents.match(/(-|\*) (\[ \]\s)?((\<time\>)?\d{1,2}\:\d{2})?/g) || []).length;
  const re2 = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
  const processEntriesHeader = (fileContents.match(re2) || []).length;
  fileContents = null;
  if (processEntriesHeader) {
    return matchLength;
  }
  return 0;
}
async function getTasksFromDailyNote(dailyNote, dailyEvents) {
  if (!dailyNote) {
    return [];
  }
  const { vault } = appStore.getState().dailyNotesState.app;
  const Tasks = await getRemainingTasks(dailyNote);
  if (Tasks) {
    let fileContents = await vault.read(dailyNote);
    let fileLines = getAllLinesFromFile$6(fileContents);
    const startDate = getDateFromFile_1(dailyNote, "day");
    const endDate = getDateFromFile_1(dailyNote, "day");
    let processHeaderFound = false;
    let memoType;
    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.length === 0)
        continue;
      if (processHeaderFound == false && lineContainsParseBelowToken(line)) {
        processHeaderFound = true;
      }
      if (processHeaderFound == true && !lineContainsParseBelowToken(line) && /^#{1,} /g.test(line)) {
        processHeaderFound = false;
      }
      if (lineContainsTime(line) && processHeaderFound) {
        startDate.hours(parseInt(extractHourFromBulletLine(line)));
        startDate.minutes(parseInt(extractMinFromBulletLine(line)));
        endDate.hours(parseInt(extractHourFromBulletLine(line)));
        if (parseInt(extractHourFromBulletLine(line)) > 22) {
          endDate.minutes(parseInt(extractMinFromBulletLine(line)));
        } else {
          endDate.minutes(parseInt(extractMinFromBulletLine(line)));
        }
        if (/^\s*[-*]\s(\[(.{1})\])\s/g.test(line)) {
          const memoTaskType = extractMemoTaskTypeFromLine(line);
          if (memoTaskType === " ") {
            memoType = "TASK-TODO";
          } else if (memoTaskType === "x" || memoTaskType === "X") {
            memoType = "TASK-DONE";
          } else {
            memoType = "TASK-" + memoTaskType;
          }
        } else {
          memoType = "JOURNAL";
        }
        const rawText = extractTextFromTodoLine(line);
        dailyEvents.push({
          id: startDate.format("YYYYMMDDHHmmSS") + i,
          content: rawText,
          user_id: 1,
          createdAt: startDate.format("YYYY/MM/DD HH:mm:SS"),
          updatedAt: endDate.format("YYYY/MM/DD HH:mm:SS"),
          memoType
        });
      }
    }
    fileLines = null;
    fileContents = null;
  }
}
async function getMemos() {
  const events = [];
  const { vault } = appStore.getState().dailyNotesState.app;
  const { folder } = getDailyNoteSettings_1();
  const dailyNotesFolder = vault.getAbstractFileByPath(require$$0.normalizePath(folder));
  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
  }
  const dailyNotes = getAllDailyNotes_1();
  for (const string in dailyNotes) {
    if (dailyNotes[string] instanceof require$$0.TFile) {
      await getTasksFromDailyNote(dailyNotes[string], events);
    }
  }
  return events;
}
const getAllLinesFromFile$6 = (cache) => cache.split(/\r?\n/);
const lineContainsTime = (line) => {
  return /^\s*[\-\*]\s(\[(.{1})\]\s)?(\<time\>)?\d{1,2}\:\d{2}(.*)$/.test(line);
};
const lineContainsParseBelowToken = (line) => {
  if (ProcessEntriesBelow === "") {
    return true;
  }
  const re2 = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "");
  return re2.test(line);
};
const extractTextFromTodoLine = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(.{1})\]\s?)?(\<time\>)?((\d{1,2})\:(\d{2}))?(\<\/time\>)?\s?(.*)$/.exec(line)) == null ? void 0 : _a[8];
};
const extractHourFromBulletLine = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(.{1})\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)) == null ? void 0 : _a[4];
};
const extractMinFromBulletLine = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(.{1})\]\s?)?(\<time\>)?(\d{1,2})\:(\d{2})(.*)$/.exec(line)) == null ? void 0 : _a[5];
};
const extractMemoTaskTypeFromLine = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(.{1})\])\s(.*)$/.exec(line)) == null ? void 0 : _a[2];
};
const updateObsidianQuery = async (queryId, title, queryString) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/query.md";
  const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (queryFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(queryFile);
    const fileLines = getAllLinesFromFile$5(fileContents);
    let lineID;
    if (/^\d{1,3}$/.test(queryId)) {
      lineID = queryId;
    } else {
      lineID = getIDFromLine(queryId);
    }
    const lineNum = parseInt(lineID) - 1;
    if (fileLines && fileLines.length != 0) {
      const oldContent = fileLines[lineNum];
      const date = require$$0.moment();
      const updatedDateString = date.format("YYYYMMDDHHmmss");
      const updatedDate = date.format("YYYY/MM/DD HH:mm:ss");
      const newLineNum = lineNum + 1;
      const id2 = updatedDateString + newLineNum;
      if (/^(.+)pinnedAt(.+)$/.test(oldContent)) {
        const pinnedString = getPinnedStringFromLine(oldContent);
        const pinnedDateString = getPinnedDateFromLine(oldContent);
        const newContent = id2 + " " + title + " " + queryString + " " + pinnedString;
        const pinnedAtDate = require$$0.moment(pinnedDateString, "YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss");
        const newFileContents = fileContents.replace(oldContent, newContent);
        await vault.modify(queryFile, newFileContents);
        return [
          {
            createdAt: updatedDate,
            id: id2,
            pinnedAt: pinnedAtDate,
            querystring: queryString,
            title,
            updatedAt: updatedDate,
            userId: ""
          }
        ];
      } else {
        const newContent = id2 + " " + title + " " + queryString;
        const newFileContents = fileContents.replace(oldContent, newContent);
        await vault.modify(queryFile, newFileContents);
        return [
          {
            createdAt: updatedDate,
            id: id2,
            pinnedAt: "",
            querystring: queryString,
            title,
            updatedAt: updatedDate,
            userId: ""
          }
        ];
      }
    }
  }
};
const getAllLinesFromFile$5 = (cache) => cache.split(/\r?\n/);
const getIDFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})/.exec(line)) == null ? void 0 : _a[2];
};
const getPinnedStringFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)\])\s(pinnedAt\: (\d{14})\d+)/.exec(line)) == null ? void 0 : _a[6];
};
const getPinnedDateFromLine = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)\])\s(pinnedAt\: (\d{14})\d+)/.exec(line)) == null ? void 0 : _a[7];
};
async function escapeRegExp(text) {
  return await text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function getLinesInString(input) {
  const lines = [];
  let tempString = input;
  while (tempString.contains("\n")) {
    const lineEndIndex = tempString.indexOf("\n");
    lines.push(tempString.slice(0, lineEndIndex));
    tempString = tempString.slice(lineEndIndex + 1);
  }
  lines.push(tempString);
  return lines;
}
async function waitForInsert(MemoContent, isList2) {
  const { vault } = appStore.getState().dailyNotesState.app;
  const removeEnter = MemoContent.replace(/\n/g, "<br>");
  const date = require$$0.moment();
  const timeHour = date.format("HH");
  const timeMinute = date.format("mm");
  let newEvent;
  let lineNum;
  if (isList2) {
    newEvent = `- [ ] ` + String(timeHour) + `:` + String(timeMinute) + ` ` + removeEnter;
  } else {
    newEvent = `- ` + String(timeHour) + `:` + String(timeMinute) + ` ` + removeEnter;
  }
  const dailyNotes = await getAllDailyNotes_1();
  const existingFile = getDailyNote_1(date, dailyNotes);
  if (!existingFile) {
    const file = await createDailyNote_1(date);
    await dailyNotesService.getMyAllDailyNotes();
    const fileContents = await vault.read(file);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(file, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile$4(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    if (isList2) {
      return {
        id: date.format("YYYYMMDDHHmm") + "00" + lineNum,
        content: MemoContent,
        deletedAt: "",
        createdAt: date.format("YYYY/MM/DD HH:mm:ss"),
        updatedAt: date.format("YYYY/MM/DD HH:mm:ss"),
        memoType: "TASK-TODO"
      };
    } else {
      return {
        id: date.format("YYYYMMDDHHmm") + "00" + lineNum,
        content: MemoContent,
        deletedAt: "",
        createdAt: date.format("YYYY/MM/DD HH:mm:ss"),
        updatedAt: date.format("YYYY/MM/DD HH:mm:ss"),
        memoType: "JOURNAL"
      };
    }
  } else {
    const fileContents = await vault.read(existingFile);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(existingFile, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile$4(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    if (isList2) {
      return {
        id: date.format("YYYYMMDDHHmm") + "00" + lineNum,
        content: MemoContent,
        deletedAt: "",
        createdAt: date.format("YYYY/MM/DD HH:mm:ss"),
        updatedAt: date.format("YYYY/MM/DD HH:mm:ss"),
        memoType: "TODO-Blank"
      };
    } else {
      return {
        id: date.format("YYYYMMDDHHmm") + "00" + lineNum,
        content: MemoContent,
        deletedAt: "",
        createdAt: date.format("YYYY/MM/DD HH:mm:ss"),
        updatedAt: date.format("YYYY/MM/DD HH:mm:ss"),
        memoType: "JOURNAL"
      };
    }
  }
}
async function insertAfterHandler(targetString, formatted, fileContent) {
  const targetRegex = new RegExp(`s*${await escapeRegExp(targetString)}s*`);
  const fileContentLines = getLinesInString(fileContent);
  const targetPosition = fileContentLines.findIndex((line) => targetRegex.test(line));
  const targetNotFound = targetPosition === -1;
  if (targetNotFound) {
    console.log("unable to find insert after line in file.");
  }
  const nextHeaderPositionAfterTargetPosition = fileContentLines.slice(targetPosition + 1).findIndex((line) => /^#+ |---/.test(line));
  const foundNextHeader = nextHeaderPositionAfterTargetPosition !== -1;
  if (foundNextHeader) {
    let endOfSectionIndex;
    for (let i = nextHeaderPositionAfterTargetPosition + targetPosition; i > targetPosition; i--) {
      const lineIsNewline = /^[\s\n ]*$/.test(fileContentLines[i]);
      if (!lineIsNewline) {
        endOfSectionIndex = i;
        break;
      }
    }
    if (!endOfSectionIndex)
      endOfSectionIndex = targetPosition;
    return await insertTextAfterPositionInBody(formatted, fileContent, endOfSectionIndex, foundNextHeader);
  } else {
    return await insertTextAfterPositionInBody(formatted, fileContent, fileContentLines.length - 1, foundNextHeader);
  }
}
async function insertTextAfterPositionInBody(text, body, pos, found) {
  if (pos === -1) {
    return {
      content: `${body}
${text}`,
      posNum: -1
    };
  }
  const splitContent = body.split("\n");
  if (found) {
    const pre = splitContent.slice(0, pos + 1).join("\n");
    const post = splitContent.slice(pos + 1).join("\n");
    return {
      content: `${pre}
${text}
${post}`,
      posNum: pos
    };
  } else {
    const pre = splitContent.slice(0, pos + 1).join("\n");
    const post = splitContent.slice(pos + 1).join("\n");
    if (/[\s\S]*?/g.test(post)) {
      return {
        content: `${pre}
${text}`,
        posNum: pos
      };
    } else {
      return {
        content: `${pre}${text}
${post}`,
        posNum: pos
      };
    }
  }
}
const getAllLinesFromFile$4 = (cache) => cache.split(/\r?\n/);
async function restoreDeletedMemo(deletedMemoid) {
  const { vault, metadataCache } = appStore.getState().dailyNotesState.app;
  if (/\d{14,}/.test(deletedMemoid)) {
    const filePath = getDailyNotePath();
    const absolutePath = filePath + "/delete.md";
    const deleteFile = metadataCache.getFirstLinkpathDest("", absolutePath);
    if (deleteFile instanceof require$$0.TFile) {
      let fileContents = await vault.read(deleteFile);
      let fileLines = getAllLinesFromFile$3(fileContents);
      if (fileLines.length === 0) {
        return;
      } else {
        const lineNum = parseInt(deletedMemoid.slice(14));
        const line = fileLines[lineNum - 1];
        const newDeletefileContents = fileContents.replace(line, "");
        await vault.modify(deleteFile, newDeletefileContents);
        if (/^- (.+)$/.test(line)) {
          const id2 = extractIDfromText(line);
          const date = require$$0.moment(id2, "YYYYMMDDHHmmss");
          const timeHour = date.format("HH");
          const timeMinute = date.format("mm");
          const newEvent = `- ` + String(timeHour) + `:` + String(timeMinute) + ` ` + extractContentfromText$1(line);
          const dailyNotes = await getAllDailyNotes_1();
          const existingFile = getDailyNote_1(date, dailyNotes);
          if (!existingFile) {
            const file = await createDailyNote_1(date);
            const fileContents2 = await vault.read(file);
            const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents2);
            await vault.modify(file, newFileContent.content);
            return [
              {
                deletedAt: ""
              }
            ];
          } else {
            const fileContents2 = await vault.read(existingFile);
            const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents2);
            await vault.modify(existingFile, newFileContent.content);
            return [
              {
                deletedAt: ""
              }
            ];
          }
        }
        fileLines = null;
        fileContents = null;
      }
    }
  }
}
async function deleteForever(deletedMemoid) {
  const { vault, metadataCache } = appStore.getState().dailyNotesState.app;
  if (/\d{14,}/.test(deletedMemoid)) {
    const filePath = getDailyNotePath();
    const absolutePath = filePath + "/delete.md";
    const deleteFile = metadataCache.getFirstLinkpathDest("", absolutePath);
    if (deleteFile instanceof require$$0.TFile) {
      let fileContents = await vault.read(deleteFile);
      let fileLines = getAllLinesFromFile$3(fileContents);
      if (fileLines.length === 0) {
        return;
      } else {
        const lineNum = parseInt(deletedMemoid.slice(14));
        const line = fileLines[lineNum - 1];
        if (/^- (.+)$/.test(line)) {
          const newFileContent = fileContents.replace(line, "");
          await vault.modify(deleteFile, newFileContent);
        }
      }
      fileLines = null;
      fileContents = null;
    }
  }
}
async function getDeletedMemos() {
  const { vault, metadataCache } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/delete.md";
  const deletedMemos = [];
  const deleteFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (deleteFile instanceof require$$0.TFile) {
    let fileContents = await vault.read(deleteFile);
    let fileLines = getAllLinesFromFile$3(fileContents);
    if (fileLines.length === 0) {
      return deletedMemos;
    } else {
      for (let i = 0; i < fileLines.length; i++) {
        const line = fileLines[i];
        if (!/- /.test(line)) {
          continue;
        } else {
          const id2 = extractIDfromText(line);
          const timeString = id2.slice(0, 13);
          const createdDate = require$$0.moment(timeString, "YYYYMMDDHHmmss");
          const deletedDateID = extractDeleteDatefromText(fileLines[i]);
          const deletedDate = require$$0.moment(deletedDateID.slice(0, 13), "YYYYMMDDHHmmss");
          const content = extractContentfromText$1(fileLines[i]);
          deletedMemos.push({
            id: deletedDateID,
            content,
            user_id: 1,
            createdAt: createdDate.format("YYYY/MM/DD HH:mm:SS"),
            updatedAt: createdDate.format("YYYY/MM/DD HH:mm:SS"),
            deletedAt: deletedDate
          });
        }
      }
    }
    fileLines = null;
    fileContents = null;
  }
  return deletedMemos;
}
const sendMemoToDelete = async (memoContent) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/delete.md";
  const deleteFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (deleteFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(deleteFile);
    const fileLines = getAllLinesFromFile$3(fileContents);
    const date = require$$0.moment();
    const deleteDate = date.format("YYYY/MM/DD HH:mm:ss");
    let lineNum;
    if (fileLines.length === 1 && fileLines[0] === "") {
      lineNum = 1;
    } else {
      lineNum = fileLines.length + 1;
    }
    const deleteDateID = date.format("YYYYMMDDHHmmss") + lineNum;
    await createDeleteMemoInFile(deleteFile, fileContents, memoContent, deleteDateID);
    return deleteDate;
  } else {
    const deleteFilePath = require$$0.normalizePath(absolutePath);
    const file = await createdeleteFile(deleteFilePath);
    const date = require$$0.moment();
    const deleteDate = date.format("YYYY/MM/DD HH:mm:ss");
    const lineNum = 1;
    const deleteDateID = date.format("YYYYMMDDHHmmss") + lineNum;
    await createDeleteMemoInFile(file, "", memoContent, deleteDateID);
    return deleteDate;
  }
};
const createDeleteMemoInFile = async (file, fileContent, memoContent, deleteDate) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  let newContent;
  if (fileContent === "") {
    newContent = memoContent + " deletedAt: " + deleteDate;
  } else {
    newContent = fileContent + "\n" + memoContent + " deletedAt: " + deleteDate;
  }
  await vault.modify(file, newContent);
  return true;
};
const createdeleteFile = async (path) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  try {
    const createdFile = await vault.create(path, "");
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${path}'`, err);
    new require$$0.Notice("Unable to create new file.");
  }
};
const getAllLinesFromFile$3 = (cache) => cache.split(/\r?\n/);
const extractIDfromText = (line) => {
  var _a;
  return (_a = /^- (\d{14})(\d+)\s(.+)\s(deletedAt: )(.+)$/.exec(line)) == null ? void 0 : _a[1];
};
const extractContentfromText$1 = (line) => {
  var _a;
  return (_a = /^- (\d+)\s(.+)\s(deletedAt: )(.+)$/.exec(line)) == null ? void 0 : _a[2];
};
const extractDeleteDatefromText = (line) => {
  var _a;
  return (_a = /^- (\d+)\s(.+)\s(deletedAt: )(.+)$/.exec(line)) == null ? void 0 : _a[4];
};
async function obHideMemo(memoid) {
  const { dailyNotes } = dailyNotesService.getState();
  if (/\d{14,}/.test(memoid)) {
    const { vault } = appStore.getState().dailyNotesState.app;
    const timeString = memoid.slice(0, 13);
    const idString = parseInt(memoid.slice(14));
    const changeDate = require$$0.moment(timeString, "YYYYMMDDHHmmSS");
    const dailyNote = getDailyNote_1(changeDate, dailyNotes);
    const fileContent = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile$2(fileContent);
    const content = extractContentfromText(fileLines[idString]);
    const originalLine = "- " + memoid + " " + content;
    const newLine = fileLines[idString];
    const newFileContent = fileContent.replace(newLine, "");
    await vault.modify(dailyNote, newFileContent);
    const deleteDate = await sendMemoToDelete(originalLine);
    return deleteDate;
  }
}
const getAllLinesFromFile$2 = (cache) => cache.split(/\r?\n/);
const extractContentfromText = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(\s|x|X|\\|\-|\>|D|\?|\/|\+|R|\!|i|B|P|C)\]\s?)?(\<time\>)?((\d{1,2})\:(\d{2}))?(\<\/time\>)?\s?(.*)$/.exec(line)) == null ? void 0 : _a[8];
};
async function deleteQueryForever(queryID) {
  const { vault, metadataCache } = appStore.getState().dailyNotesState.app;
  if (/\d{14,}/.test(queryID)) {
    const filePath = getDailyNotePath();
    const absolutePath = filePath + "/query.md";
    const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
    if (queryFile instanceof require$$0.TFile) {
      let fileContents = await vault.read(queryFile);
      let fileLines = getAllLinesFromFile$1(fileContents);
      if (fileLines.length === 0) {
        return;
      } else {
        const lineNum = parseInt(queryID.slice(14));
        const line = fileLines[lineNum - 1];
        if (/^\d{14,}(.+)$/.test(line)) {
          const newFileContent = fileContents.replace(line, "");
          await vault.modify(queryFile, newFileContent);
        }
      }
      fileLines = null;
      fileContents = null;
    }
  }
}
const getAllLinesFromFile$1 = (cache) => cache.split(/\r?\n/);
const pinQueryInFile = async (queryID) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  if (/\d{14,}/.test(queryID)) {
    const filePath = getDailyNotePath();
    const absolutePath = filePath + "/query.md";
    const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
    if (queryFile instanceof require$$0.TFile) {
      const fileContents = await vault.read(queryFile);
      const fileLines = getAllLinesFromFile(fileContents);
      const date = require$$0.moment();
      const originalLineNum = parseInt(queryID.slice(14));
      const originalContent = fileLines[originalLineNum - 1];
      const pinnedAtDate = date.format("YYYY/MM/DD HH:mm:ss");
      let lineNum;
      if (fileLines.length === 1 && fileLines[0] === "") {
        lineNum = 1;
      } else {
        lineNum = fileLines.length + 1;
      }
      const pinnedAtDateID = date.format("YYYYMMDDHHmmss") + lineNum;
      const newQuery = originalContent + " pinnedAt: " + pinnedAtDateID;
      const newContent = fileContents.replace(originalContent, newQuery);
      await vault.modify(queryFile, newContent);
      return pinnedAtDate;
    }
  }
};
const unpinQueryInFile = async (queryID) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/query.md";
  const queryFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (queryFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(queryFile);
    const fileLines = getAllLinesFromFile(fileContents);
    const originalLineNum = parseInt(queryID.slice(14));
    const originalContent = fileLines[originalLineNum - 1];
    const pinnedAtString = extractPinnedAtfromText(originalContent);
    const newFileContents = fileContents.replace(pinnedAtString, "");
    await vault.modify(queryFile, newFileContents);
  }
  return;
};
const getAllLinesFromFile = (cache) => cache.split(/\r?\n/);
const extractPinnedAtfromText = (line) => {
  var _a;
  return (_a = /^(\d{14})(\d{1,})\s(.+)\s(\[(.+)\])(\spinnedAt\: (\d{14,}))$/.exec(line)) == null ? void 0 : _a[6];
};
var api;
(function(api2) {
  function getUserInfo() {
  }
  api2.getUserInfo = getUserInfo;
  function checkUsernameUsable(username) {
  }
  api2.checkUsernameUsable = checkUsernameUsable;
  function checkPasswordValid(password) {
  }
  api2.checkPasswordValid = checkPasswordValid;
  function updateUserinfo(userinfo) {
  }
  api2.updateUserinfo = updateUserinfo;
  async function getMyMemos() {
    return await getMemos();
  }
  api2.getMyMemos = getMyMemos;
  function getMyDeletedMemos() {
    return getDeletedMemos();
  }
  api2.getMyDeletedMemos = getMyDeletedMemos;
  function hideMemo(memoId) {
    return obHideMemo(memoId);
  }
  api2.hideMemo = hideMemo;
  function restoreMemo(memoId) {
    return restoreDeletedMemo(memoId);
  }
  api2.restoreMemo = restoreMemo;
  function deleteMemo(memoId) {
    return deleteForever(memoId);
  }
  api2.deleteMemo = deleteMemo;
  function getMyQueries() {
    return findQuery();
  }
  api2.getMyQueries = getMyQueries;
  function createQuery(title, querystring) {
    return createObsidianQuery(title, querystring);
  }
  api2.createQuery = createQuery;
  function updateQuery(queryId, title, querystring) {
    return updateObsidianQuery(queryId, title, querystring);
  }
  api2.updateQuery = updateQuery;
  function deleteQueryById(queryId) {
    return deleteQueryForever(queryId);
  }
  api2.deleteQueryById = deleteQueryById;
  function pinQuery(queryId) {
    return pinQueryInFile(queryId);
  }
  api2.pinQuery = pinQuery;
  function unpinQuery(queryId) {
    return unpinQueryInFile(queryId);
  }
  api2.unpinQuery = unpinQuery;
})(api || (api = {}));
var api$1 = api;
const SHOW_SIDERBAR_MOBILE_CLASSNAME = "mobile-show-sidebar";
const ANIMATION_DURATION = 200;
const DAILY_TIMESTAMP = 3600 * 24 * 1e3;
const TAG_REG = /\s#([\p{Letter}\p{Emoji_Presentation}\p{Number}\/_-]+)/gu;
const FIRST_TAG_REG = /(<p>|<br>)#([\p{Letter}\p{Emoji_Presentation}\p{Number}\/_-]+)/gu;
const NOP_FIRST_TAG_REG = /^#([\p{Letter}\p{Emoji_Presentation}\p{Number}\/_-]+)/gu;
const LINK_REG = /(\s|：|>)((http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-]))/g;
const MD_LINK_REG = /\[([\s\S]*?)\]\(([\s\S]*?)\)/gu;
const IMAGE_URL_REG = /([^\s<\\*>']+\.(jpeg|jpg|gif|png|svg))(\]\])?(\))?/g;
const MARKDOWN_URL_REG = /(!\[([^\]]*)(\|)?(.*?)\]\((.*?)("(?:.*[^"])")?\s*\))/g;
const MARKDOWN_WEB_URL_REG = /(\s|：|^)(http[s]?:\/\/)([^\/\s]+\/)(.*?)(jpeg|jpg|gif|png|svg|bmp|wepg)(?!\))/g;
const WIKI_IMAGE_URL_REG = /!\[\[((.*?)\.(jpeg|jpg|gif|png|svg|bmp|wepg))?(\|)?(.*?)\]\]/g;
const MEMO_LINK_REG = /\[@(.+?)\]\((.+?)\)/g;
class MemoService {
  constructor() {
    __publicField(this, "initialized", false);
  }
  getState() {
    return appStore.getState().memoState;
  }
  async fetchAllMemos() {
    const data = await api$1.getMyMemos();
    const memos = [];
    for (const m2 of data) {
      memos.push(m2);
    }
    appStore.dispatch({
      type: "SET_MEMOS",
      payload: {
        memos
      }
    });
    if (!this.initialized) {
      this.initialized = true;
    }
    return memos;
  }
  async fetchDeletedMemos() {
    const data = await api$1.getMyDeletedMemos();
    data.sort((a, b) => utils$1.getTimeStampByDate(b.deletedAt) - utils$1.getTimeStampByDate(a.deletedAt));
    return data;
  }
  pushMemo(memo2) {
    appStore.dispatch({
      type: "INSERT_MEMO",
      payload: {
        memo: __spreadValues({}, memo2)
      }
    });
  }
  getMemoById(id2) {
    for (const m2 of this.getState().memos) {
      if (m2.id === id2) {
        return m2;
      }
    }
    return null;
  }
  async hideMemoById(id2) {
    await api$1.hideMemo(id2);
    appStore.dispatch({
      type: "DELETE_MEMO_BY_ID",
      payload: {
        id: id2
      }
    });
  }
  async restoreMemoById(id2) {
    await api$1.restoreMemo(id2);
  }
  async deleteMemoById(id2) {
    await api$1.deleteMemo(id2);
  }
  editMemo(memo2) {
    appStore.dispatch({
      type: "EDIT_MEMO",
      payload: memo2
    });
  }
  updateTagsState() {
    var _a, _b, _c;
    const { memos } = this.getState();
    const tagsSet = new Set();
    for (const m2 of memos) {
      for (const t2 of Array.from((_a = m2.content.match(TAG_REG)) != null ? _a : [])) {
        tagsSet.add(t2.replace(TAG_REG, "$1").trim());
      }
      for (const t2 of Array.from((_b = m2.content.match(NOP_FIRST_TAG_REG)) != null ? _b : [])) {
        tagsSet.add(t2.replace(NOP_FIRST_TAG_REG, "$1").trim());
      }
      for (const t2 of Array.from((_c = m2.content.match(FIRST_TAG_REG)) != null ? _c : [])) {
        tagsSet.add(t2.replace(FIRST_TAG_REG, "$2").trim());
      }
    }
    appStore.dispatch({
      type: "SET_TAGS",
      payload: {
        tags: Array.from(tagsSet)
      }
    });
  }
  clearMemos() {
    appStore.dispatch({
      type: "SET_MEMOS",
      payload: {
        memos: []
      }
    });
  }
  async getLinkedMemos(memoId) {
    const { memos } = this.getState();
    return memos.filter((m2) => m2.content.includes(memoId));
  }
  async createMemo(text, isList2) {
    const memo2 = await waitForInsert(text, isList2);
    return memo2;
  }
  async updateMemo(memoId, originalText, text, type) {
    const memo2 = await changeMemo(memoId, originalText, text, type);
    return memo2;
  }
}
const memoService = new MemoService();
class QueryService {
  getState() {
    return appStore.getState().queryState;
  }
  async getMyAllQueries() {
    const data = await api$1.getMyQueries();
    appStore.dispatch({
      type: "SET_QUERIES",
      payload: {
        queries: data
      }
    });
    return data;
  }
  getQueryById(id2) {
    for (const q2 of this.getState().queries) {
      if (q2.id === id2) {
        return q2;
      }
    }
  }
  pushQuery(query) {
    appStore.dispatch({
      type: "INSERT_QUERY",
      payload: {
        query: __spreadValues({}, query)
      }
    });
  }
  editQuery(query) {
    appStore.dispatch({
      type: "UPDATE_QUERY",
      payload: query
    });
  }
  async deleteQuery(queryId) {
    await api$1.deleteQueryById(queryId);
    appStore.dispatch({
      type: "DELETE_QUERY_BY_ID",
      payload: {
        id: queryId
      }
    });
  }
  async createQuery(title, querystring) {
    const data = await api$1.createQuery(title, querystring);
    return data;
  }
  async updateQuery(queryId, title, querystring) {
    const data = await api$1.updateQuery(queryId, title, querystring);
    return data;
  }
  async pinQuery(queryId) {
    await api$1.pinQuery(queryId);
  }
  async unpinQuery(queryId) {
    await api$1.unpinQuery(queryId);
  }
}
const queryService = new QueryService();
class ResourceService {
  async upload(file) {
    const { vault, fileManager } = appStore.getState().dailyNotesState.app;
    const fileArray = await file.arrayBuffer();
    const ext = getExt(file.type);
    const dailyNotes = getAllDailyNotes_1();
    const date = require$$0.moment();
    const existingFile = getDailyNote_1(date, dailyNotes);
    let newFile;
    if (!existingFile) {
      const dailyFile = await createDailyNote_1(date);
      newFile = await vault.createBinary(await vault.getAvailablePathForAttachments(`Pasted Image ${require$$0.moment().format("YYYYMMDDHHmmss")}`, ext, dailyFile), fileArray);
    } else if (existingFile instanceof require$$0.TFile) {
      newFile = await vault.createBinary(await vault.getAvailablePathForAttachments(`Pasted Image ${require$$0.moment().format("YYYYMMDDHHmmss")}`, ext, existingFile), fileArray);
    }
    const newFilePath = fileManager.generateMarkdownLink(newFile, newFile.path, "", "");
    return newFilePath;
  }
}
const getExt = (line) => {
  var _a;
  return (_a = /^image\/(.+)$/.exec(line)) == null ? void 0 : _a[1];
};
const resourceService = new ResourceService();
const getInitialAction = () => {
  return {
    type: "initialText",
    value: "",
    timestamp: Date.now(),
    selectionStart: 0,
    selectionEnd: 0
  };
};
const defaultConfig = {
  initialValue: "",
  interval: 300
};
class TinyUndo {
  constructor(element, config = defaultConfig) {
    this.listeners = [];
    this.runUndo = () => {
      const cursorPosition = this.actions[this.currentIndex].selectionStart;
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.element.value = this.actions[this.currentIndex].value;
      this.element.setSelectionRange(cursorPosition, cursorPosition);
      this.dispatchChange();
    };
    this.runRedo = () => {
      if (this.currentIndex < this.actions.length - 1) {
        this.currentIndex++;
      }
      const cursorPosition = this.actions[this.currentIndex].selectionEnd;
      this.element.value = this.actions[this.currentIndex].value;
      this.element.setSelectionRange(cursorPosition, cursorPosition);
      this.dispatchChange();
    };
    this.getActions = () => {
      return this.actions;
    };
    this.setState = (actions, index) => {
      this.actions = [...actions];
      this.currentIndex = index < this.actions.length ? index : this.actions.length - 1;
      this.dispatchChange();
    };
    this.resetState = () => {
      this.actions = [getInitialAction()];
      this.currentIndex = 0;
      this.dispatchChange();
    };
    this.destroy = () => {
      this.rmEventListeners();
    };
    this.subscribe = (callback) => {
      this.listeners.push(callback);
    };
    this.handleElementKeydown = (event) => {
      const keyboardEvent = event;
      if (keyboardEvent.key === "z" && !keyboardEvent.shiftKey && (keyboardEvent.metaKey || keyboardEvent.ctrlKey)) {
        event.preventDefault();
        this.runUndo();
      } else if (keyboardEvent.key === "z" && keyboardEvent.shiftKey && (keyboardEvent.metaKey || keyboardEvent.ctrlKey) || keyboardEvent.key === "y" && (keyboardEvent.metaKey || keyboardEvent.ctrlKey)) {
        event.preventDefault();
        this.runRedo();
      }
    };
    this.handleElementInput = (event) => {
      const inputEvent = event;
      const lastAction = this.actions[this.currentIndex];
      this.pushNewAction({
        type: inputEvent.inputType,
        value: this.element.value,
        timestamp: Date.now(),
        selectionStart: this.element.selectionEnd - (this.element.value.length - lastAction.value.length),
        selectionEnd: this.element.selectionEnd
      });
    };
    this.addEventListeners = () => {
      this.element.addEventListener("keydown", this.handleElementKeydown);
      this.element.addEventListener("input", this.handleElementInput);
    };
    this.rmEventListeners = () => {
      this.element.removeEventListener("keydown", this.handleElementKeydown);
      this.element.removeEventListener("input", this.handleElementInput);
    };
    this.pushNewAction = (action) => {
      const lastAction = this.actions[this.currentIndex];
      if (lastAction && lastAction.type === action.type && action.timestamp - lastAction.timestamp < this.config.interval) {
        this.actions[this.currentIndex] = Object.assign(Object.assign({}, lastAction), { value: action.value, selectionEnd: action.selectionEnd, timestamp: action.timestamp });
      } else {
        if (this.config.maxSize && this.currentIndex >= this.config.maxSize) {
          this.actions.shift();
          this.actions[0] = getInitialAction();
        } else {
          this.currentIndex++;
        }
        this.actions[this.currentIndex] = action;
        this.actions = this.actions.slice(0, this.currentIndex + 1);
      }
      this.dispatchChange();
    };
    this.dispatchChange = () => {
      for (const cb2 of this.listeners) {
        cb2([...this.actions], this.currentIndex);
      }
    };
    this.element = element;
    this.config = Object.assign(Object.assign({}, defaultConfig), config);
    if (this.config.initialActions && this.config.initialActions.length > 0) {
      this.actions = this.config.initialActions;
      if (this.config.initialIndex !== void 0 && this.config.initialIndex < this.actions.length) {
        this.currentIndex = this.config.initialIndex;
      } else {
        this.currentIndex = this.actions.length - 1;
      }
    } else {
      this.actions = [getInitialAction()];
      this.currentIndex = 0;
      if (this.config.initialValue !== "") {
        this.actions.push({
          type: "insertText",
          value: this.config.initialValue,
          timestamp: Date.now(),
          selectionStart: 0,
          selectionEnd: this.config.initialValue.length
        });
        this.currentIndex++;
      }
    }
    this.element.value = this.actions[this.currentIndex].value;
    this.addEventListeners();
  }
}
function useRefresh() {
  const [, setBoolean] = _react_17_0_2_react.exports.useState(false);
  const refresh = _react_17_0_2_react.exports.useCallback(() => {
    setBoolean((ps) => {
      return !ps;
    });
  }, []);
  return refresh;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = _react_17_0_2_react.exports, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l2 = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l2, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const OnlyWhen = (props) => {
  const {
    children,
    when
  } = props;
  return when ? /* @__PURE__ */ jsx(Fragment, {
    children
  }) : null;
};
const Only = OnlyWhen;
var editor = "";
var _textareaCaret_3_0_2_textareaCaret = { exports: {} };
(function(module2) {
  (function() {
    var properties = [
      "direction",
      "boxSizing",
      "width",
      "height",
      "overflowX",
      "overflowY",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderStyle",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "fontStretch",
      "fontSize",
      "fontSizeAdjust",
      "lineHeight",
      "fontFamily",
      "textAlign",
      "textTransform",
      "textIndent",
      "textDecoration",
      "letterSpacing",
      "wordSpacing",
      "tabSize",
      "MozTabSize"
    ];
    var isBrowser = typeof window !== "undefined";
    var isFirefox = isBrowser && window.mozInnerScreenX != null;
    function getCaretCoordinates2(element, position, options) {
      if (!isBrowser) {
        throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
      }
      var debug = options && options.debug || false;
      if (debug) {
        var el = document.querySelector("#input-textarea-caret-position-mirror-div");
        if (el) {
          el.parentNode.removeChild(el);
        }
      }
      var div = document.createElement("div");
      div.id = "input-textarea-caret-position-mirror-div";
      document.body.appendChild(div);
      var style = div.style;
      var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
      style.whiteSpace = "pre-wrap";
      if (element.nodeName !== "INPUT")
        style.wordWrap = "break-word";
      style.position = "absolute";
      if (!debug)
        style.visibility = "hidden";
      properties.forEach(function(prop) {
        style[prop] = computed[prop];
      });
      if (isFirefox) {
        if (element.scrollHeight > parseInt(computed.height))
          style.overflowY = "scroll";
      } else {
        style.overflow = "hidden";
      }
      div.textContent = element.value.substring(0, position);
      if (element.nodeName === "INPUT")
        div.textContent = div.textContent.replace(/\s/g, "\xA0");
      var span = document.createElement("span");
      span.textContent = element.value.substring(position) || ".";
      div.appendChild(span);
      var coordinates = {
        top: span.offsetTop + parseInt(computed["borderTopWidth"]),
        left: span.offsetLeft + parseInt(computed["borderLeftWidth"])
      };
      if (debug) {
        span.style.backgroundColor = "#aaa";
      } else {
        document.body.removeChild(div);
      }
      return coordinates;
    }
    {
      module2.exports = getCaretCoordinates2;
    }
  })();
})(_textareaCaret_3_0_2_textareaCaret);
var getCaretCoordinates = _textareaCaret_3_0_2_textareaCaret.exports;
var NativeCustomEvent = commonjsGlobal.CustomEvent;
function useNative() {
  try {
    var p2 = new NativeCustomEvent("cat", { detail: { foo: "bar" } });
    return p2.type === "cat" && p2.detail.foo === "bar";
  } catch (e) {
  }
  return false;
}
var _customEvent_1_0_1_customEvent = useNative() ? NativeCustomEvent : typeof document !== "undefined" && typeof document.createEvent === "function" ? function CustomEvent(type, params) {
  var e = document.createEvent("CustomEvent");
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} : function CustomEvent2(type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
};
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _classCallCheck$2(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof22(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof22(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function _typeof$2(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof$2 = function _typeof3(obj2) {
      return _typeof2(obj2);
    };
  } else {
    _typeof$2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : _typeof2(obj2);
    };
  }
  return _typeof$2(obj);
}
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn$2(self2, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$2(self2);
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
function _setPrototypeOf$2(o, p2) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$2(o, p2);
}
function _inherits$2(subClass, superClass) {
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
  if (superClass)
    _setPrototypeOf$2(subClass, superClass);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray$1(arr) || _nonIterableSpread();
}
var KEY_CODES = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  TAB: 9
};
var Listener = function Listener2() {
  var _this = this;
  _classCallCheck$2(this, Listener2);
  this.startListen = function(ref) {
    if (!ref)
      return;
    ref.addEventListener("keydown", _this.f);
  };
  this.stopListen = function(ref) {
    if (!ref)
      return;
    ref.removeEventListener("keydown", _this.f);
  };
  this.add = function(keyCodes, fn2) {
    var keyCode = keyCodes;
    if (typeof keyCode !== "object")
      keyCode = [keyCode];
    _this.listeners[_this.index] = {
      keyCode,
      fn: fn2
    };
    return _this.index++;
  };
  this.remove = function(id2) {
    delete _this.listeners[id2];
  };
  this.removeAll = function() {
    _this.listeners = {};
    _this.index = 1;
  };
  this.index = 1;
  this.listeners = {};
  this.f = function(e) {
    if (!e)
      return;
    var code = e.keyCode || e.which;
    Object.values(_this.listeners).forEach(function(_ref) {
      var keyCode = _ref.keyCode, fn2 = _ref.fn;
      if (keyCode.includes(code)) {
        e.stopPropagation();
        e.preventDefault();
        fn2(e);
      }
    });
  };
};
var Listeners = new Listener();
var Item = /* @__PURE__ */ function(_React$Component) {
  _inherits$2(Item2, _React$Component);
  function Item2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck$2(this, Item2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn$2(this, (_getPrototypeOf2 = _getPrototypeOf$2(Item2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.selectItem = function() {
      var _this$props = _this.props, item = _this$props.item, onSelectHandler = _this$props.onSelectHandler;
      onSelectHandler(item);
    };
    return _this;
  }
  _createClass$2(Item2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.item !== nextProps.item || this.props.selected !== nextProps.selected || this.props.style !== nextProps.style || this.props.className !== nextProps.className) {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props, Component = _this$props2.component, style = _this$props2.style, onClickHandler = _this$props2.onClickHandler, item = _this$props2.item, selected = _this$props2.selected, className = _this$props2.className, innerRef = _this$props2.innerRef;
      return React$1.createElement("li", {
        className: "rta__item  ".concat(selected === true ? "rta__item--selected" : "", " ").concat(className || ""),
        style
      }, React$1.createElement("div", {
        className: "rta__entity ".concat(selected === true ? "rta__entity--selected" : ""),
        role: "button",
        tabIndex: 0,
        onClick: onClickHandler,
        onFocus: this.selectItem,
        onMouseEnter: this.selectItem,
        onTouchStart: function onTouchStart() {
          _this2.clicked = true;
          _this2.selectItem();
        },
        onTouchEnd: function onTouchEnd(e) {
          e.preventDefault();
          if (_this2.clicked) {
            onClickHandler(e);
          }
        },
        onTouchMove: function onTouchMove() {
          _this2.clicked = false;
        },
        onTouchCancel: function onTouchCancel() {
          _this2.clicked = false;
        },
        ref: innerRef
      }, React$1.createElement(Component, {
        selected,
        entity: item
      })));
    }
  }]);
  return Item2;
}(React$1.Component);
var List = /* @__PURE__ */ function(_React$Component) {
  _inherits$2(List2, _React$Component);
  function List2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck$2(this, List2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn$2(this, (_getPrototypeOf2 = _getPrototypeOf$2(List2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selectedItem: null
    };
    _this.cachedIdOfItems = new Map();
    _this.onPressEnter = function(e) {
      if (typeof e !== "undefined") {
        e.preventDefault();
      }
      var values = _this.props.values;
      _this.modifyText(values[_this.getPositionInList()]);
    };
    _this.getPositionInList = function() {
      var values = _this.props.values;
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem)
        return 0;
      return values.findIndex(function(a) {
        return _this.getId(a) === _this.getId(selectedItem);
      });
    };
    _this.getId = function(item) {
      if (_this.cachedIdOfItems.has(item)) {
        return _this.cachedIdOfItems.get(item);
      }
      var textToReplace = _this.props.getTextToReplace(item);
      var computeId = function computeId2() {
        if (textToReplace) {
          if (textToReplace.key) {
            return textToReplace.key;
          }
          if (typeof item === "string" || !item.key) {
            return textToReplace.text;
          }
        }
        if (!item.key) {
          throw new Error("Item ".concat(JSON.stringify(item), ' has to have defined "key" property'));
        }
        return item.key;
      };
      var id2 = computeId();
      _this.cachedIdOfItems.set(item, id2);
      return id2;
    };
    _this.listeners = [];
    _this.itemsRef = {};
    _this.modifyText = function(value) {
      if (!value)
        return;
      var onSelect = _this.props.onSelect;
      onSelect(value);
    };
    _this.selectItem = function(item) {
      var keyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var onItemHighlighted = _this.props.onItemHighlighted;
      if (_this.state.selectedItem === item)
        return;
      _this.setState({
        selectedItem: item
      }, function() {
        onItemHighlighted(item);
        if (keyboard) {
          _this.props.dropdownScroll(_this.itemsRef[_this.getId(item)]);
        }
      });
    };
    _this.scroll = function(e) {
      e.preventDefault();
      var values = _this.props.values;
      var code = e.keyCode || e.which;
      var oldPosition = _this.getPositionInList();
      var newPosition;
      switch (code) {
        case KEY_CODES.DOWN:
          newPosition = oldPosition + 1;
          break;
        case KEY_CODES.UP:
          newPosition = oldPosition - 1;
          break;
        default:
          newPosition = oldPosition;
          break;
      }
      newPosition = (newPosition % values.length + values.length) % values.length;
      _this.selectItem(values[newPosition], [KEY_CODES.DOWN, KEY_CODES.UP].includes(code));
    };
    _this.isSelected = function(item) {
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem)
        return false;
      return _this.getId(selectedItem) === _this.getId(item);
    };
    return _this;
  }
  _createClass$2(List2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listeners.push(Listeners.add([KEY_CODES.DOWN, KEY_CODES.UP], this.scroll), Listeners.add([KEY_CODES.ENTER, KEY_CODES.TAB], this.onPressEnter));
      var values = this.props.values;
      if (values && values[0])
        this.selectItem(values[0]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var _this2 = this;
      var oldValues = _ref.values;
      var values = this.props.values;
      var oldValuesSerialized = oldValues.map(function(val) {
        return _this2.getId(val);
      }).join("");
      var newValuesSerialized = values.map(function(val) {
        return _this2.getId(val);
      }).join("");
      if (oldValuesSerialized !== newValuesSerialized && values && values[0]) {
        this.selectItem(values[0]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var listener;
      while (this.listeners.length) {
        listener = this.listeners.pop();
        Listeners.remove(listener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props, values = _this$props.values, component = _this$props.component, style = _this$props.style, itemClassName = _this$props.itemClassName, className = _this$props.className, itemStyle = _this$props.itemStyle;
      return React$1.createElement("ul", {
        className: "rta__list ".concat(className || ""),
        style
      }, values.map(function(item) {
        return React$1.createElement(Item, {
          key: _this3.getId(item),
          innerRef: function innerRef(ref) {
            _this3.itemsRef[_this3.getId(item)] = ref;
          },
          selected: _this3.isSelected(item),
          item,
          className: itemClassName,
          style: itemStyle,
          onClickHandler: _this3.onPressEnter,
          onSelectHandler: _this3.selectItem,
          component
        });
      }));
    }
  }]);
  return List2;
}(React$1.Component);
function defaultScrollToItem(container, item) {
  var itemHeight = parseInt(getComputedStyle(item).getPropertyValue("height"), 10);
  var containerHight = parseInt(getComputedStyle(container).getPropertyValue("height"), 10) - itemHeight;
  var itemOffsetTop = item.offsetTop;
  var actualScrollTop = container.scrollTop;
  if (itemOffsetTop < actualScrollTop + containerHight && actualScrollTop < itemOffsetTop) {
    return;
  }
  container.scrollTop = itemOffsetTop;
}
var DEFAULT_CARET_POSITION = "next";
var POSITION_CONFIGURATION = {
  X: {
    LEFT: "rta__autocomplete--left",
    RIGHT: "rta__autocomplete--right"
  },
  Y: {
    TOP: "rta__autocomplete--top",
    BOTTOM: "rta__autocomplete--bottom"
  }
};
var errorMessage = function errorMessage2(message) {
  return console.error("RTA: dataProvider fails: ".concat(message, "\n    \nCheck the documentation or create issue if you think it's bug. https://github.com/webscopeio/react-textarea-autocomplete/issues"));
};
var reservedRegexChars = [".", "^", "$", "*", "+", "-", "?", "(", ")", "[", "]", "{", "}", "\\", "|"];
var escapeRegex = function escapeRegex2(text) {
  return _toConsumableArray(text).map(function(character) {
    return reservedRegexChars.includes(character) ? "\\".concat(character) : character;
  }).join("");
};
var Autocomplete = /* @__PURE__ */ function(_React$Component) {
  _inherits$2(Autocomplete2, _React$Component);
  function Autocomplete2() {
    _classCallCheck$2(this, Autocomplete2);
    return _possibleConstructorReturn$2(this, _getPrototypeOf$2(Autocomplete2).apply(this, arguments));
  }
  _createClass$2(Autocomplete2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var boundariesElement = this.props.boundariesElement;
      if (typeof boundariesElement === "string") {
        var elem = document.querySelector(boundariesElement);
        if (!elem) {
          throw new Error("RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.");
        }
        this.containerElem = elem;
      } else if (boundariesElement instanceof HTMLElement) {
        this.containerElem = boundariesElement;
      } else {
        throw new Error("RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.");
      }
      if (!this.containerElem || !this.containerElem.contains(this.ref)) {
        {
          throw new Error("RTA: Invalid prop boundariesElement: it has to be one of the parents of the RTA.");
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$ref$classList, _this$ref$classList2;
      var top2 = this.props.top || 0;
      var left2 = this.props.left || 0;
      var usedClasses = [];
      var unusedClasses = [];
      var topPosition = 0;
      var leftPosition = 0;
      var containerBounds = this.containerElem.getBoundingClientRect();
      var dropdownBounds = this.ref.getBoundingClientRect();
      var textareaBounds = this.props.textareaRef.getBoundingClientRect();
      var computedStyle = window.getComputedStyle(this.ref);
      var marginTop = parseInt(computedStyle.getPropertyValue("margin-top"), 10);
      var marginBottom = parseInt(computedStyle.getPropertyValue("margin-bottom"), 10);
      var marginLeft = parseInt(computedStyle.getPropertyValue("margin-left"), 10);
      var marginRight = parseInt(computedStyle.getPropertyValue("margin-right"), 10);
      var dropdownBottom = marginTop + marginBottom + textareaBounds.top + top2 + dropdownBounds.height;
      var dropdownRight = marginLeft + marginRight + textareaBounds.left + left2 + dropdownBounds.width;
      if (dropdownRight > containerBounds.right && textareaBounds.left + left2 > dropdownBounds.width) {
        leftPosition = left2 - dropdownBounds.width;
        usedClasses.push(POSITION_CONFIGURATION.X.LEFT);
        unusedClasses.push(POSITION_CONFIGURATION.X.RIGHT);
      } else {
        leftPosition = left2;
        usedClasses.push(POSITION_CONFIGURATION.X.RIGHT);
        unusedClasses.push(POSITION_CONFIGURATION.X.LEFT);
      }
      if (dropdownBottom > containerBounds.bottom && textareaBounds.top + top2 > dropdownBounds.height) {
        topPosition = top2 - dropdownBounds.height;
        usedClasses.push(POSITION_CONFIGURATION.Y.TOP);
        unusedClasses.push(POSITION_CONFIGURATION.Y.BOTTOM);
      } else {
        topPosition = top2;
        usedClasses.push(POSITION_CONFIGURATION.Y.BOTTOM);
        unusedClasses.push(POSITION_CONFIGURATION.Y.TOP);
      }
      if (this.props.renderToBody) {
        topPosition += textareaBounds.top;
        leftPosition += textareaBounds.left;
      }
      this.ref.style.top = "".concat(topPosition, "px");
      this.ref.style.left = "".concat(leftPosition, "px");
      (_this$ref$classList = this.ref.classList).remove.apply(_this$ref$classList, unusedClasses);
      (_this$ref$classList2 = this.ref.classList).add.apply(_this$ref$classList2, usedClasses);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props, style = _this$props.style, className = _this$props.className, innerRef = _this$props.innerRef, children = _this$props.children, renderToBody = _this$props.renderToBody;
      var body = document.body;
      var autocompleteContainer = React$1.createElement("div", {
        ref: function ref(_ref) {
          _this.ref = _ref;
          innerRef(_ref);
        },
        className: "rta__autocomplete ".concat(className || ""),
        style
      }, children);
      return renderToBody && body !== null ? ReactDOM$1.createPortal(autocompleteContainer, body) : autocompleteContainer;
    }
  }]);
  return Autocomplete2;
}(React$1.Component);
var ReactTextareaAutocomplete = /* @__PURE__ */ function(_React$Component2) {
  _inherits$2(ReactTextareaAutocomplete2, _React$Component2);
  function ReactTextareaAutocomplete2(_props) {
    var _this2;
    _classCallCheck$2(this, ReactTextareaAutocomplete2);
    _this2 = _possibleConstructorReturn$2(this, _getPrototypeOf$2(ReactTextareaAutocomplete2).call(this, _props));
    _this2.state = {
      top: null,
      left: null,
      currentTrigger: null,
      actualToken: "",
      data: null,
      value: "",
      dataLoading: false,
      selectionEnd: 0,
      component: null,
      textToReplace: null
    };
    _this2.escListenerInit = function() {
      if (!_this2.escListener) {
        _this2.escListener = Listeners.add(KEY_CODES.ESC, _this2._closeAutocomplete);
      }
    };
    _this2.escListenerDestroy = function() {
      if (_this2.escListener) {
        Listeners.remove(_this2.escListener);
        _this2.escListener = null;
      }
    };
    _this2.getSelectionPosition = function() {
      if (!_this2.textareaRef)
        return null;
      return {
        selectionStart: _this2.textareaRef.selectionStart,
        selectionEnd: _this2.textareaRef.selectionEnd
      };
    };
    _this2.getSelectedText = function() {
      if (!_this2.textareaRef)
        return null;
      var _this2$textareaRef = _this2.textareaRef, selectionStart = _this2$textareaRef.selectionStart, selectionEnd = _this2$textareaRef.selectionEnd;
      if (selectionStart === selectionEnd)
        return null;
      return _this2.state.value.substr(selectionStart, selectionEnd - selectionStart);
    };
    _this2.setCaretPosition = function() {
      var position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (!_this2.textareaRef)
        return;
      _this2.textareaRef.focus();
      _this2.textareaRef.setSelectionRange(position, position);
    };
    _this2.getCaretPosition = function() {
      if (!_this2.textareaRef) {
        return 0;
      }
      var position = _this2.textareaRef.selectionEnd;
      return position;
    };
    _this2._handleCaretChange = function(e) {
      var cleanLastTrigger = function cleanLastTrigger2() {
        var beforeHandle = _this2.getCaretPosition() - 1;
        _this2.lastTrigger = _this2.lastTrigger ? beforeHandle : 0;
      };
      if (e.type === "keydown") {
        var code = e.keyCode || e.which;
        switch (code) {
          case KEY_CODES.UP:
          case KEY_CODES.DOWN:
            if (!_this2._isAutocompleteOpen()) {
              cleanLastTrigger();
            }
            break;
          case KEY_CODES.LEFT:
          case KEY_CODES.RIGHT:
            cleanLastTrigger();
            break;
        }
        return;
      }
      cleanLastTrigger();
    };
    _this2._onSelect = function(item) {
      var _this2$state = _this2.state, selectionEnd = _this2$state.selectionEnd, currentTrigger = _this2$state.currentTrigger, textareaValue = _this2$state.value;
      var onItemSelected = _this2.props.onItemSelected;
      if (!currentTrigger)
        return;
      var getTextToReplaceForCurrentTrigger = _this2._getTextToReplace(currentTrigger);
      if (!getTextToReplaceForCurrentTrigger) {
        _this2._closeAutocomplete();
        return;
      }
      var newToken = getTextToReplaceForCurrentTrigger(item);
      if (!newToken) {
        _this2._closeAutocomplete();
        return;
      }
      if (onItemSelected) {
        onItemSelected({
          currentTrigger,
          item
        });
      }
      var computeCaretPosition = function computeCaretPosition2(position, token, startToken) {
        switch (position) {
          case "start":
            return startToken;
          case "next":
          case "end":
            return startToken + token.length;
          default:
            if (!Number.isInteger(position)) {
              throw new Error('RTA: caretPosition should be "start", "next", "end" or number.');
            }
            return position;
        }
      };
      var textToModify = textareaValue.slice(0, selectionEnd);
      var escapedCurrentTrigger = escapeRegex(currentTrigger);
      var triggerOffset = textToModify.length - textToModify.lastIndexOf(currentTrigger);
      var startOfTokenPosition = textToModify.search(new RegExp("(?!".concat(escapedCurrentTrigger, ")$"))) - triggerOffset;
      var newTokenString = newToken.caretPosition === "next" ? "".concat(newToken.text, " ") : newToken.text;
      var newCaretPosition = computeCaretPosition(newToken.caretPosition, newTokenString, startOfTokenPosition);
      var modifiedText = textToModify.substring(0, startOfTokenPosition) + newTokenString;
      var newValue = textareaValue.replace(textToModify, modifiedText);
      _this2.setState({
        value: newValue,
        dataLoading: false
      }, function() {
        var insertedTrigger = _this2.tokenRegExpEnding.exec(newTokenString);
        var insertedTriggerModifier = insertedTrigger ? insertedTrigger[0].length : 1;
        _this2.lastTrigger = newCaretPosition ? newCaretPosition - insertedTriggerModifier : newCaretPosition;
        _this2.textareaRef.value = newValue;
        _this2.textareaRef.selectionEnd = newCaretPosition;
        _this2._changeHandler();
        var scrollTop = _this2.textareaRef.scrollTop;
        _this2.setCaretPosition(newCaretPosition);
        if (window.chrome) {
          _this2.textareaRef.scrollTop = scrollTop;
        }
      });
    };
    _this2._getTextToReplace = function(currentTrigger) {
      var triggerSettings = _this2.props.trigger[currentTrigger];
      if (!currentTrigger || !triggerSettings)
        return null;
      var output2 = triggerSettings.output;
      return function(item) {
        if (typeof item === "object" && (!output2 || typeof output2 !== "function")) {
          throw new Error('Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }
        if (output2) {
          var textToReplace = output2(item, currentTrigger);
          if (textToReplace === void 0 || typeof textToReplace === "number") {
            throw new Error('Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot "'.concat(String(textToReplace), '". Check the implementation for trigger "').concat(currentTrigger, '"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more information.\n'));
          }
          if (textToReplace === null)
            return null;
          if (typeof textToReplace === "string") {
            return {
              text: textToReplace,
              caretPosition: DEFAULT_CARET_POSITION
            };
          }
          if (!textToReplace.text && typeof textToReplace.text !== "string") {
            throw new Error('Output "text" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "'.concat(currentTrigger, '"\n'));
          }
          if (!textToReplace.caretPosition) {
            throw new Error('Output "caretPosition" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "'.concat(currentTrigger, '"\n'));
          }
          return textToReplace;
        }
        if (typeof item !== "string") {
          throw new Error("Output item should be string\n");
        }
        return {
          text: "".concat(currentTrigger).concat(item).concat(currentTrigger),
          caretPosition: DEFAULT_CARET_POSITION
        };
      };
    };
    _this2._getCurrentTriggerSettings = function() {
      var currentTrigger = _this2.state.currentTrigger;
      if (!currentTrigger)
        return null;
      return _this2.props.trigger[currentTrigger];
    };
    _this2._getValuesFromProvider = function() {
      var _this2$state2 = _this2.state, currentTrigger = _this2$state2.currentTrigger, actualToken2 = _this2$state2.actualToken;
      var triggerSettings = _this2._getCurrentTriggerSettings();
      if (!currentTrigger || !triggerSettings) {
        return;
      }
      var dataProvider = triggerSettings.dataProvider, component = triggerSettings.component;
      if (typeof dataProvider !== "function") {
        throw new Error("Trigger provider has to be a function!");
      }
      _this2.setState({
        dataLoading: true
      });
      var providedData = dataProvider(actualToken2);
      if (!(providedData instanceof Promise)) {
        providedData = Promise.resolve(providedData);
      }
      providedData.then(function(data) {
        if (!Array.isArray(data)) {
          throw new Error("Trigger provider has to provide an array!");
        }
        if (typeof component !== "function") {
          throw new Error("Component should be defined!");
        }
        if (currentTrigger !== _this2.state.currentTrigger)
          return;
        if (!data.length) {
          _this2._closeAutocomplete();
          return;
        }
        _this2.setState({
          dataLoading: false,
          data,
          component
        });
      }).catch(function(e) {
        return errorMessage(e.message);
      });
    };
    _this2._getSuggestions = function() {
      var _this2$state3 = _this2.state, currentTrigger = _this2$state3.currentTrigger, data = _this2$state3.data;
      if (!currentTrigger || !data || data && !data.length)
        return null;
      return data;
    };
    _this2._createRegExp = function() {
      var trigger = _this2.props.trigger;
      _this2.tokenRegExp = new RegExp("(".concat(Object.keys(trigger).sort(function(a, b) {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }).map(function(a) {
        return escapeRegex(a);
      }).join("|"), ")((?:(?!\\1)[^\\s])*$)"));
      _this2.tokenRegExpEnding = new RegExp("(".concat(Object.keys(trigger).sort(function(a, b) {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }).map(function(a) {
        return escapeRegex(a);
      }).join("|"), ")$"));
    };
    _this2._closeAutocomplete = function() {
      var currentTrigger = _this2.state.currentTrigger;
      _this2.escListenerDestroy();
      _this2.setState({
        data: null,
        dataLoading: false,
        currentTrigger: null
      }, function() {
        if (currentTrigger)
          _this2._onItemHighlightedHandler(null);
      });
    };
    _this2._cleanUpProps = function() {
      var props = _objectSpread$7({}, _this2.props);
      var notSafe = ["loadingComponent", "boundariesElement", "containerStyle", "minChar", "scrollToItem", "ref", "innerRef", "onChange", "onCaretPositionChange", "className", "value", "trigger", "listStyle", "itemStyle", "containerStyle", "loaderStyle", "className", "containerClassName", "listClassName", "itemClassName", "loaderClassName", "dropdownStyle", "dropdownClassName", "movePopupAsYouType", "textAreaComponent", "renderToBody", "onItemSelected", "onItemHighlighted"];
      for (var prop in props) {
        if (notSafe.includes(prop))
          delete props[prop];
      }
      return props;
    };
    _this2._changeHandler = function(e) {
      var _this2$props = _this2.props, trigger = _this2$props.trigger, onChange = _this2$props.onChange, minChar = _this2$props.minChar, onCaretPositionChange = _this2$props.onCaretPositionChange, movePopupAsYouType = _this2$props.movePopupAsYouType;
      var _this2$state4 = _this2.state, top2 = _this2$state4.top, left2 = _this2$state4.left;
      var event = e;
      if (!event) {
        event = new _customEvent_1_0_1_customEvent("change", {
          bubbles: true
        });
        _this2.textareaRef.dispatchEvent(event);
      }
      var textarea = event.target || _this2.textareaRef;
      var selectionEnd = textarea.selectionEnd;
      var value = textarea.value;
      _this2.lastValueBubbledEvent = value;
      if (onChange && event) {
        event.persist && event.persist();
        onChange(new Proxy(event, {
          get: function get2(original, prop, receiver) {
            if (prop === "target") {
              return textarea;
            }
            return Reflect.get(original, prop, receiver);
          }
        }));
      }
      if (onCaretPositionChange) {
        var caretPosition = _this2.getCaretPosition();
        onCaretPositionChange(caretPosition);
      }
      _this2.setState({
        value
      });
      var setTopLeft = function setTopLeft2() {
        var _getCaretCoordinates = getCaretCoordinates(textarea, selectionEnd), newTop = _getCaretCoordinates.top, newLeft = _getCaretCoordinates.left;
        _this2.setState({
          top: newTop - _this2.textareaRef.scrollTop || 0,
          left: newLeft
        });
      };
      var cleanLastTrigger = function cleanLastTrigger2(triggerLength) {
        _this2.lastTrigger = selectionEnd - triggerLength;
        _this2._closeAutocomplete();
        setTopLeft();
      };
      if (selectionEnd <= _this2.lastTrigger) {
        var _affectedTextareaValue = value.slice(0, selectionEnd);
        var _newTrigger = _this2.tokenRegExp.exec(_affectedTextareaValue);
        cleanLastTrigger(_newTrigger ? _newTrigger[0].length : 0);
      }
      var affectedTextareaValue = value.slice(_this2.lastTrigger, selectionEnd);
      var tokenMatch = _this2.tokenRegExp.exec(affectedTextareaValue);
      var lastToken = tokenMatch && tokenMatch[0];
      var currentTrigger = tokenMatch && tokenMatch[1] || null;
      var currentTriggerLength = currentTrigger ? currentTrigger.length - 1 : 0;
      var newTrigger = _this2.tokenRegExpEnding.exec(affectedTextareaValue);
      if (newTrigger) {
        cleanLastTrigger(newTrigger[0].length);
      } else if (!_this2._isAutocompleteOpen()) {
        _this2._closeAutocomplete();
      }
      if ((!lastToken || lastToken.length <= minChar + currentTriggerLength) && (_this2.state.currentTrigger && !trigger[_this2.state.currentTrigger].allowWhitespace || !_this2.state.currentTrigger)) {
        _this2._closeAutocomplete();
        return;
      }
      if (currentTrigger && trigger[currentTrigger].afterWhitespace && !/\s/.test(value[selectionEnd - lastToken.length - 1]) && value[selectionEnd - lastToken.length - 1] !== void 0) {
        _this2._closeAutocomplete();
        return;
      }
      if (_this2.state.currentTrigger && trigger[_this2.state.currentTrigger].allowWhitespace) {
        tokenMatch = new RegExp("".concat(escapeRegex(_this2.state.currentTrigger), ".*$")).exec(value.slice(0, selectionEnd));
        lastToken = tokenMatch && tokenMatch[0];
        if (!lastToken) {
          _this2._closeAutocomplete();
          return;
        }
        currentTrigger = Object.keys(trigger).find(function(a) {
          return a.slice(0, currentTriggerLength + 1) === lastToken.slice(0, currentTriggerLength + 1);
        }) || null;
      }
      var actualToken2 = lastToken.slice(1);
      if (!currentTrigger) {
        return;
      }
      if (movePopupAsYouType || top2 === null && left2 === null || _this2.state.currentTrigger !== currentTrigger) {
        setTopLeft();
      }
      _this2.escListenerInit();
      var textToReplace = _this2._getTextToReplace(currentTrigger);
      _this2.setState({
        selectionEnd,
        currentTrigger,
        textToReplace,
        actualToken: actualToken2
      }, function() {
        try {
          _this2._getValuesFromProvider();
        } catch (err) {
          errorMessage(err.message);
        }
      });
    };
    _this2._selectHandler = function(e) {
      var _this2$props2 = _this2.props, onCaretPositionChange = _this2$props2.onCaretPositionChange, onSelect = _this2$props2.onSelect;
      if (onCaretPositionChange) {
        var caretPosition = _this2.getCaretPosition();
        onCaretPositionChange(caretPosition);
      }
      if (onSelect) {
        e.persist();
        onSelect(e);
      }
    };
    _this2._shouldStayOpen = function(e) {
      var el = e.relatedTarget;
      if (el === null) {
        el = document.activeElement;
      }
      if (_this2.dropdownRef && el instanceof Node && _this2.dropdownRef.contains(el)) {
        return true;
      }
      return false;
    };
    _this2._onClick = function(e) {
      var onClick = _this2.props.onClick;
      if (onClick) {
        e.persist();
        onClick(e);
      }
      if (_this2._shouldStayOpen(e)) {
        return;
      }
      _this2._closeAutocomplete();
    };
    _this2._onBlur = function(e) {
      var onBlur = _this2.props.onBlur;
      if (onBlur) {
        e.persist();
        onBlur(e);
      }
      if (_this2._shouldStayOpen(e)) {
        return;
      }
      _this2._closeAutocomplete();
    };
    _this2._onScrollHandler = function() {
      _this2._closeAutocomplete();
    };
    _this2._onItemHighlightedHandler = function(item) {
      var onItemHighlighted = _this2.props.onItemHighlighted;
      var currentTrigger = _this2.state.currentTrigger;
      if (onItemHighlighted) {
        if (typeof onItemHighlighted === "function") {
          onItemHighlighted({
            currentTrigger,
            item
          });
        } else {
          throw new Error("`onItemHighlighted` has to be a function");
        }
      }
    };
    _this2._dropdownScroll = function(item) {
      var scrollToItem = _this2.props.scrollToItem;
      if (!scrollToItem)
        return;
      if (scrollToItem === true) {
        defaultScrollToItem(_this2.dropdownRef, item);
        return;
      }
      if (typeof scrollToItem !== "function" || scrollToItem.length !== 2) {
        throw new Error("`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.");
      }
      scrollToItem(_this2.dropdownRef, item);
    };
    _this2._isAutocompleteOpen = function() {
      var _this2$state5 = _this2.state, dataLoading = _this2$state5.dataLoading, currentTrigger = _this2$state5.currentTrigger;
      var suggestionData = _this2._getSuggestions();
      return !!((dataLoading || suggestionData) && currentTrigger);
    };
    _this2._textareaRef = function(ref) {
      _this2.props.innerRef && _this2.props.innerRef(ref);
      _this2.textareaRef = ref;
    };
    _this2.lastTrigger = 0;
    _this2.escListener = null;
    var _this2$props3 = _this2.props, loadingComponent = _this2$props3.loadingComponent, _trigger = _this2$props3.trigger, _value = _this2$props3.value;
    if (_value)
      _this2.state.value = _value;
    _this2._createRegExp();
    if (!loadingComponent) {
      throw new Error("RTA: loadingComponent is not defined");
    }
    if (!_trigger) {
      throw new Error("RTA: trigger is not defined");
    }
    return _this2;
  }
  _createClass$2(ReactTextareaAutocomplete2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Listeners.startListen(this.textareaRef);
      this.textareaRef && this.textareaRef.addEventListener("focus", this._handleCaretChange);
      this.textareaRef && this.textareaRef.addEventListener("click", this._handleCaretChange);
      this.textareaRef && this.textareaRef.addEventListener("keydown", this._handleCaretChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var oldTrigger = _ref2.trigger, oldValue = _ref2.value;
      var _this$props2 = this.props, trigger = _this$props2.trigger, value = _this$props2.value;
      if (Object.keys(trigger).join("") !== Object.keys(oldTrigger).join("")) {
        this._createRegExp();
      }
      if (oldValue !== value && this.lastValueBubbledEvent !== value) {
        this.lastTrigger = 0;
        this._changeHandler();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.escListenerDestroy();
      Listeners.stopListen(this.textareaRef);
      this.textareaRef && this.textareaRef.removeEventListener("focus", this._handleCaretChange);
      this.textareaRef && this.textareaRef.removeEventListener("click", this._handleCaretChange);
      this.textareaRef && this.textareaRef.removeEventListener("keydown", this._handleCaretChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props, Loader = _this$props3.loadingComponent, style = _this$props3.style, className = _this$props3.className, listStyle = _this$props3.listStyle, itemStyle = _this$props3.itemStyle, boundariesElement = _this$props3.boundariesElement, movePopupAsYouType = _this$props3.movePopupAsYouType, listClassName = _this$props3.listClassName, itemClassName = _this$props3.itemClassName, dropdownClassName = _this$props3.dropdownClassName, dropdownStyle = _this$props3.dropdownStyle, containerStyle = _this$props3.containerStyle, containerClassName = _this$props3.containerClassName, loaderStyle = _this$props3.loaderStyle, loaderClassName = _this$props3.loaderClassName, textAreaComponent = _this$props3.textAreaComponent, renderToBody = _this$props3.renderToBody;
      var _this$state = this.state, left2 = _this$state.left, top2 = _this$state.top, dataLoading = _this$state.dataLoading, component = _this$state.component, value = _this$state.value, textToReplace = _this$state.textToReplace;
      var isAutocompleteOpen = this._isAutocompleteOpen();
      var suggestionData = this._getSuggestions();
      var extraAttrs = {};
      var TextAreaComponent;
      if (textAreaComponent.component) {
        TextAreaComponent = textAreaComponent.component;
        extraAttrs[textAreaComponent.ref] = this._textareaRef;
      } else {
        TextAreaComponent = textAreaComponent;
        extraAttrs.ref = this._textareaRef;
      }
      return React$1.createElement("div", {
        className: "rta ".concat(dataLoading === true ? "rta--loading" : "", " ").concat(containerClassName || ""),
        style: containerStyle
      }, React$1.createElement(TextAreaComponent, Object.assign({}, this._cleanUpProps(), {
        className: "rta__textarea ".concat(className || ""),
        onChange: this._changeHandler,
        onSelect: this._selectHandler,
        onScroll: this._onScrollHandler,
        onClick: this._onClick,
        onBlur: this._onBlur,
        value,
        style
      }, extraAttrs)), isAutocompleteOpen && React$1.createElement(Autocomplete, {
        innerRef: function innerRef(ref) {
          _this3.dropdownRef = ref;
        },
        top: top2,
        left: left2,
        style: dropdownStyle,
        className: dropdownClassName,
        movePopupAsYouType,
        boundariesElement,
        textareaRef: this.textareaRef,
        renderToBody
      }, suggestionData && component && textToReplace && React$1.createElement(List, {
        values: suggestionData,
        component,
        style: listStyle,
        className: listClassName,
        itemClassName,
        itemStyle,
        getTextToReplace: textToReplace,
        onItemHighlighted: this._onItemHighlightedHandler,
        onSelect: this._onSelect,
        dropdownScroll: this._dropdownScroll
      }), dataLoading && React$1.createElement("div", {
        className: "rta__loader ".concat(suggestionData !== null ? "rta__loader--suggestion-data" : "rta__loader--empty-suggestion-data", " ").concat(loaderClassName || ""),
        style: loaderStyle
      }, React$1.createElement(Loader, {
        data: suggestionData
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3) {
      var value = _ref3.value;
      if (value === null || value === void 0)
        return null;
      return {
        value
      };
    }
  }]);
  return ReactTextareaAutocomplete2;
}(React$1.Component);
ReactTextareaAutocomplete.defaultProps = {
  movePopupAsYouType: false,
  value: null,
  minChar: 1,
  boundariesElement: "body",
  scrollToItem: true,
  textAreaComponent: "textarea",
  renderToBody: false
};
const usedTags = (seletecText) => {
  const { tags } = memoService.getState();
  const lowerCaseInputStr = seletecText.toLowerCase();
  const usedTags2 = [];
  tags.forEach((tag2) => {
    if (tag2 && tag2.toLowerCase().contains(lowerCaseInputStr)) {
      usedTags2.push({
        name: tag2,
        char: tag2
      });
    }
  });
  return usedTags2;
};
var suggest = "";
const getSuggestions = (inputStr) => {
  const { app: app2 } = dailyNotesService.getState();
  const abstractFiles = app2.vault.getAllLoadedFiles();
  const files = [];
  let actualInput;
  abstractFiles.forEach((file) => {
    if (inputStr === "[") {
      actualInput = "";
      const lowerCaseInputStr = actualInput.toLowerCase();
      if (file instanceof require$$0.TFile && (file.extension === "md" || file.extension === "png" || file.extension === "jpg" || file.extension === "jpeg" || file.extension === "gif") && file.path.toLowerCase().contains(lowerCaseInputStr)) {
        files.push({
          name: file.basename,
          char: file.name,
          file
        });
      }
    } else if (inputStr.contains("[")) {
      actualInput = inputStr.slice(1);
      const lowerCaseInputStr = actualInput.toLowerCase();
      if (file instanceof require$$0.TFile && (file.extension === "md" || file.extension === "png" || file.extension === "jpg" || file.extension === "jpeg" || file.extension === "gif") && file.path.toLowerCase().contains(lowerCaseInputStr)) {
        files.push({
          name: file.basename,
          char: file.name,
          file
        });
      }
    }
  });
  return files;
};
var ar = {};
var cz = {};
var da = {};
var de = {};
var en = {
  "Basic Options": "Basic Options",
  "User name in Memos": "User name in Memos",
  "Set your user name here. 'Memos \u{1F60F}' By default": "Set your user name here. 'Memos \u{1F60F}' By default",
  "Insert after heading": "Insert after heading",
  "You should set the same heading below if you want to insert and process memos below the same heading.": "You should set the same heading below if you want to insert and process memos below the same heading.",
  "Allows admonitions to be created using ": "Allows admonitions to be created using ",
  "Process Memos below": "Process Memos below",
  "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.": "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.",
  "Save Memo button label": "Save Memo button label",
  "The text shown on the save Memo button in the UI. 'NOTEIT' by default.": "The text shown on the save Memo button in the UI. 'NOTEIT' by default.",
  "Focus on editor when open memos": "Focus on editor when open memos",
  "Focus on editor when open memos. Focus by default.": "Focus on editor when open memos. Focus by default.",
  "Open daily memos with open memos": "Open daily memos with open memos",
  "Open daily memos with open memos. Open by default.": "Open daily memos with open memos. Open by default.",
  "Open Memos when obsidian opens": "Open Memos when obsidian opens",
  "When enable this, Memos will open when Obsidian opens. False by default.": "When enable this, Memos will open when Obsidian opens. False by default.",
  "Hide done tasks in Memo list": "Hide done tasks in Memo list",
  "Hide all done tasks in Memo list. Show done tasks by default.": "Hide all done tasks in Memo list. Show done tasks by default.",
  "Advanced Options": "Advanced Options",
  "UI language for date": "UI language for date",
  "Translates the date UI language. Only 'en' and 'zh' are available.": "Translates the date UI language. Only 'en' and 'zh' are available.",
  "Default prefix": "Default prefix",
  "Set the default prefix when create memo, 'List' by default.": "Set the default prefix when create memo, 'List' by default.",
  "Default insert date format": "Default insert date format",
  "Set the default date format when insert date by @, 'Tasks' by default.": "Set the default date format when insert date by @, 'Tasks' by default.",
  "Default editor position on mobile": "Default editor position on mobile",
  "Set the default editor position on Mobile, 'Top' by default.": "Set the default editor position on Mobile, 'Top' by default.",
  "Use button to show editor on mobile": "Use button to show editor on mobile",
  "Set a float button to call editor on mobile. Only when editor located at the bottom works.": "Set a float button to call editor on mobile. Only when editor located at the bottom works.",
  "Show Time When Copy Results": "Show Time When Copy Results",
  "Show time when you copy results, like 12:00. Copy time by default.": "Show time when you copy results, like 12:00. Copy time by default.",
  "Show Date When Copy Results": "Show Date When Copy Results",
  "Show date when you copy results, like [[2022-01-01]]. Copy date by default.": "Show date when you copy results, like [[2022-01-01]]. Copy date by default.",
  "Add Blank Line Between Different Date": "Add Blank Line Between Different Date",
  "Add blank line when copy result with date. No blank line by default.": "Add blank line when copy result with date. No blank line by default.",
  "Share Options": "Share Options",
  "Share Memos Image Footer Start": "Share Memos Image Footer Start",
  "Set anything you want here, use {MemosNum} to display Number of memos, {UsedDay} for days. '{MemosNum} Memos {UsedDay} Days' By default": "Set anything you want here, use {MemosNum} to display Number of memos, {UsedDay} for days. '{MemosNum} Memos {UsedDay} Days' By default",
  "Share Memos Image Footer End": "Share Memos Image Footer End",
  "Set anything you want here, use {UserName} as your username. '\u270D\uFE0F By {UserName}' By default": "Set anything you want here, use {UserName} as your username. '\u270D\uFE0F By {UserName}' By default",
  "Save Shared Image To Folder For Mobile": "Save Shared Image To Folder For Mobile",
  "Save image to folder for mobile. Disable by Default": "Save image to folder for mobile. False by Default",
  "Say Thank You": "Say Thank You",
  Donate: "Donate",
  "If you like this plugin, consider donating to support continued development:": "If you like this plugin, consider donating to support continued development:",
  List: "List",
  Task: "Task",
  Top: "Top",
  Bottom: "Bottom",
  TAG: "TAG",
  DAY: "DAY",
  QUERY: "QUERY",
  EDIT: "EDIT",
  PIN: "PIN",
  UNPIN: "UNPIN",
  DELETE: "DELETE",
  "CONFIRM\uFF01": "CONFIRM\uFF01",
  "CREATE FILTER": "CREATE FILTER",
  Settings: "Settings",
  "Recycle bin": "Recycle bin",
  "About Me": "About Me",
  "Fetching data...": "Fetching data...",
  "Here is No Zettels.": "Here is No Zettels.",
  "Frequently Used Tags": "Frequently Used Tags",
  "What do you think now...": "What do you think now...",
  READ: "READ",
  MARK: "MARK",
  SHARE: "SHARE",
  SOURCE: "SOURCE",
  RESTORE: "RESTORE",
  "DELETE AT": "DELETE AT",
  "Noooop!": "Noooop!",
  "All Data is Loaded \u{1F389}": "All Data is Loaded \u{1F389}",
  "Quick filter": "Quick filter",
  TYPE: "TYPE",
  LINKED: "LINKED",
  "NO TAGS": "NO TAGS",
  "HAS LINKS": "HAS LINKS",
  "HAS IMAGES": "HAS IMAGES",
  INCLUDE: "INCLUDE",
  EXCLUDE: "EXCLUDE",
  TEXT: "TEXT",
  IS: "IS",
  ISNOT: "ISNOT",
  SELECT: "SELECT",
  "ADD FILTER TERMS": "ADD FILTER TERMS",
  FILTER: "FILTER",
  TITLE: "TITLE",
  "CREATE QUERY": "CREATE QUERY",
  "EDIT QUERY": "EDIT QUERY",
  MATCH: "MATCH",
  TIMES: "TIMES",
  "Share Memo Image": "Share Memo Image",
  "\u2197Click the button to save": "\u2197Click the button to save",
  "Image is generating...": "Image is generating...",
  "Image is loading...": "Image is loading...",
  "Loading...": "Loading...",
  "\u{1F61F} Cannot load image, image link maybe broken": "\u{1F61F} Cannot load image, image link maybe broken",
  "Daily Memos": "Daily Memos",
  "CANCEL EDIT": "CANCEL EDIT",
  "LINK TO THE": "LINK TO THE"
};
var enGB = {};
var es = {};
var fr = {};
var hi = {};
var id$1 = {};
var it = {};
var ja = {};
var ko = {};
var nl = {};
var no = {};
var pl = {};
var pt = {};
var ptBR = {};
var ro = {};
var ru = {};
var tr = {};
var zhCN = {
  "Basic Options": "\u57FA\u7840\u9009\u9879",
  "User name in Memos": "\u5728 Memos \u4E2D\u663E\u793A\u7684\u7528\u6237\u540D",
  "Set your user name here. 'Memos \u{1F60F}' By default": "\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4F60\u559C\u6B22\u7684\u7528\u6237\u540D\u3002 \u9ED8\u8BA4\u4E3A 'Memos \u{1F60F}'",
  "Insert after heading": "\u5728\u6307\u5B9A\u6807\u9898\u540E\u63D2\u5165 Memo",
  "You should set the same heading below if you want to insert and process memos below the same heading.": "\u4F60\u5982\u679C\u60F3\u8981\u63D2\u5165\u6807\u9898\u7684\u540C\u65F6\u663E\u793A\u5BF9\u5E94\u6807\u9898\u4E0B\u7684 Memo\uFF0C\u4F60\u5FC5\u987B\u4FDD\u8BC1\u5F53\u524D\u8BBE\u7F6E\u4E0E\u4E0B\u65B9\u7684\u89E3\u6790\u8BBE\u7F6E\u662F\u4E00\u81F4\u7684\u3002\u5F53\u4E3A\u7A7A\u65F6\u63D2\u5165\u5230\u6587\u672B",
  "Process Memos below": "\u89E3\u6790\u6307\u5B9A\u6807\u9898\u540E\u7684 Memo",
  "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.": "\u53EA\u6709\u5728\u8BBE\u7F6E\u7684\u6807\u9898\u540E\u7684 Memo \u624D\u4F1A\u88AB\u89E3\u6790\u3002\u5F53\u4E3A\u7A7A\u65F6\u89E3\u6790\u5168\u6587\u7684 Memo",
  "Save Memo button label": "\u4FDD\u5B58\u6309\u94AE\u4E0A\u7684\u6587\u672C",
  "The text shown on the save Memo button in the UI. 'NOTEIT' by default.": "\u5728\u4FDD\u5B58\u6309\u94AE\u4E0A\u5C55\u793A\u7684\u6587\u672C\u3002\u9ED8\u8BA4\u4E3A 'NOTEIT'",
  "Focus on editor when open memos": "\u81EA\u52A8\u805A\u7126\u5230 Memos \u8F93\u5165\u6846",
  "Focus on editor when open memos. Focus by default.": "\u5F53\u6253\u5F00 Memos \u7684\u65F6\u5019\u81EA\u52A8\u805A\u7126\u5230 Memos \u8F93\u5165\u6846\u3002\u9ED8\u8BA4\u5F00\u542F",
  "Open daily memos with open memos": "\u6253\u5F00\u6BCF\u65E5 Memo \u7684\u65F6\u5019\u6253\u5F00 Memos \u754C\u9762",
  "Open daily memos with open memos. Open by default.": "\u6253\u5F00\u6BCF\u65E5 Memo \u7684\u65F6\u5019\u6253\u5F00 Memos \u754C\u9762\u3002\u9ED8\u8BA4\u5F00\u542F",
  "Open Memos when obsidian opens": "\u5F53\u5F00\u542F Obsidian \u7684\u65F6\u5019\u81EA\u52A8\u6253\u5F00 Memos",
  "When enable this, Memos will open when Obsidian opens. False by default.": "\u5F53\u5F00\u542F\u8BE5\u9009\u9879, Memos \u4F1A\u5728 Obsidian \u6253\u5F00\u65F6\u81EA\u52A8\u6253\u5F00\u3002\u9ED8\u8BA4\u4E0D\u5F00\u542F\u3002",
  "Hide done tasks in Memo list": "\u5728 memo \u5217\u8868\u4E2D\u9690\u85CF\u5DF2\u5B8C\u6210 memo",
  "Hide all done tasks in Memo list. Show done tasks by default.": "\u5728 memo \u5217\u8868\u4E2D\u9690\u85CF\u5DF2\u5B8C\u6210 memo\u3002\u9ED8\u8BA4\u4E0D\u5F00\u542F",
  "Advanced Options": "\u8FDB\u9636\u9009\u9879",
  "UI language for date": "\u9488\u5BF9\u65E5\u671F\u5C55\u793A\u7684\u8BED\u8A00\u754C\u9762",
  "Translates the date UI language. Only 'en' and 'zh' are available.": "\u5BF9\u65E5\u671F\u7684\u4E0D\u540C\u7FFB\u8BD1\u3002\u76EE\u524D\u53EA\u80FD\u9009\u62E9 'en' \u548C 'zh'\uFF08\u672A\u6765\u4F1A\u5E9F\u7F6E\uFF09",
  "Default prefix": "\u9ED8\u8BA4\u524D\u7F00",
  "Set the default prefix when create memo, 'List' by default.": "\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u524D\u7F00\u6837\u5F0F\u3002\u9ED8\u8BA4\u4E3A\u5217\u8868",
  "Default insert date format": "\u63D2\u5165\u65E5\u671F\u9644\u5E26\u7684\u6837\u5F0F",
  "Set the default date format when insert date by @, 'Tasks' by default.": "\u5F53\u4F7F\u7528 @ \u6765\u5FEB\u901F\u63D2\u5165\u65E5\u671F\u65F6\uFF0C\u63D2\u5165\u65E5\u671F\u9644\u5E26\u7684\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A 'Tasks' \u6837\u5F0F",
  "Default editor position on mobile": "\u5728\u79FB\u52A8\u7AEF\u4E0A\u7684\u9ED8\u8BA4\u7F16\u8F91\u5668\u4F4D\u7F6E",
  "Set the default editor position on Mobile, 'Top' by default.": "\u8BBE\u7F6E\u5728\u79FB\u52A8\u7AEF\u4E0A\u7684\u9ED8\u8BA4\u7F16\u8F91\u5668\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5728\u9876\u90E8\u3002",
  "Use button to show editor on mobile": "\u5F53\u7F16\u8F91\u5668\u4F4D\u7F6E\u5728\u5E95\u90E8\u65F6\uFF0C\u7528\u6309\u94AE\u6765\u5524\u51FA\u7F16\u8F91\u5668",
  "Set a float button to call editor on mobile. Only when editor located at the bottom works.": "\u8BBE\u7F6E\u4E00\u4E2A\u6D6E\u52A8\u6309\u94AE\u6765\u5524\u51FA\u7F16\u8F91\u5668\u3002\u5F53\u5728\u79FB\u52A8\u7AEF\u4E0A\u542F\u7528\u8BE5\u9009\u9879\u624D\u4F1A\u751F\u6548",
  "Show Time When Copy Results": "\u5F53\u590D\u5236\u68C0\u7D22\u7ED3\u679C\u65F6\u9644\u5E26\u65F6\u95F4",
  "Show time when you copy results, like 12:00. Copy time by default.": "\u5728\u590D\u5236\u68C0\u7D22\u7ED3\u679C\u65F6\u9644\u5E26\u5176\u65F6\u95F4\uFF0C\u4F8B\u5982 12:00 \u3002\u9ED8\u8BA4\u5F00\u542F",
  "Show Date When Copy Results": "\u5F53\u590D\u5236\u68C0\u7D22\u7ED3\u679C\u65F6\u9644\u5E26\u65E5\u671F",
  "Show date when you copy results, like [[2022-01-01]]. Copy date by default.": "\u5728\u590D\u5236\u68C0\u7D22\u7ED3\u679C\u65F6\u9644\u5E26\u5176\u65E5\u671F\uFF0C\u4F8B\u5982 [[2022-01-01]]\u3002\u9ED8\u8BA4\u5F00\u542F",
  "Add Blank Line Between Different Date": "\u5728\u590D\u5236\u65E5\u671F\u7684\u65F6\u5019\u52A0\u4E0A\u7A7A\u884C",
  "Add blank line when copy result with date. No blank line by default.": "\u5728\u590D\u5236\u65E5\u671F\u7684\u65F6\u5019\u5728\u76F8\u90BB\u7684\u65E5\u671F\u4E4B\u95F4\u52A0\u4E0A\u7A7A\u884C\u3002\u9ED8\u8BA4\u65E0\u7A7A\u884C",
  "Share Options": "\u5206\u4EAB\u9009\u9879",
  "Share Memos Image Footer Start": "\u5206\u4EAB memo \u56FE\u7247\u7684\u5DE6\u8FB9\u9875\u811A",
  "Set anything you want here, use {MemosNum} to display Number of memos, {UsedDay} for days. '{MemosNum} Memos {UsedDay} Days' By default": "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4F60\u60F3\u8981\u7684\u4EFB\u610F\u6587\u672C\uFF0C\u7528 {MemosNum} \u6765\u5C55\u793A\u4F60\u8BB0\u5F55\u7684 memo \u6570\u91CF\uFF0C{UsedDay} \u6765\u5C55\u793A\u4F7F\u7528\u65E5\u671F\u3002\u9ED8\u8BA4\u4E3A'{MemosNum} Memos {UsedDay} Days'",
  "Share Memos Image Footer End": "\u5206\u4EAB memo \u56FE\u7247\u7684\u53F3\u8FB9\u9875\u811A",
  "Set anything you want here, use {UserName} as your username. '\u270D\uFE0F By {UserName}' By default": "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4F60\u60F3\u8981\u7684\u4EFB\u610F\u6587\u672C\uFF0C\u7528 {UserName} \u6765\u5C55\u793A\u4F60\u7684\u7528\u6237\u540D\u3002\u9ED8\u8BA4\u4E3A '\u270D\uFE0F By {UserName}'",
  "Save Shared Image To Folder For Mobile": "\u5F53\u5728\u79FB\u52A8\u7AEF\u4E0A\u65F6\u4FDD\u5B58\u56FE\u7247\u5230\u6587\u4EF6\u5939",
  "Save image to folder for mobile. False by Default": "\u5F53\u5728\u79FB\u52A8\u7AEF\u4E0A\u65F6\uFF0C\u4FDD\u5B58\u751F\u6210\u7684\u56FE\u7247\u5230\u6587\u4EF6\u5939",
  "Say Thank You": "\u611F\u8C22\u5F00\u53D1",
  Donate: "\u6350\u8D60",
  "If you like this plugin, consider donating to support continued development:": "\u5982\u679C\u4F60\u559C\u6B22\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u800C\u4E14\u4E5F\u5E0C\u671B\u7ED9\u6211\u4E70\u9E21\u817F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8003\u8651 Github \u9875\u9762\u53F3\u8FB9\u7684 Sponsor~",
  List: "\u5217\u8868",
  Task: "\u4EFB\u52A1",
  Top: "\u9876\u90E8",
  Bottom: "\u5E95\u90E8",
  TAG: "\u6807\u7B7E",
  DAY: "\u5929",
  QUERY: "\u68C0\u7D22\u5F0F",
  EDIT: "\u7F16\u8F91",
  PIN: "\u7F6E\u9876",
  UNPIN: "\u53D6\u6D88\u7F6E\u9876",
  DELETE: "\u5220\u9664",
  "CONFIRM\uFF01": "\u786E\u5B9A\u5220\u9664",
  "CREATE FILTER": "\u521B\u5EFA\u68C0\u7D22\u5F0F",
  Settings: "\u8BBE\u7F6E",
  "Recycle bin": "\u56DE\u6536\u7AD9",
  "About Me": "\u5173\u4E8E",
  "Fetching data...": "\u83B7\u53D6\u6570\u636E\u4E2D...",
  "Here is No Zettels.": "\u6CA1\u6709\u627E\u5230 memo",
  "Frequently Used Tags": "\u5E38\u7528\u6807\u7B7E",
  "What do you think now...": "\u4F60\u73B0\u5728\u5728\u60F3\u4EC0\u4E48\uFF1F",
  READ: "\u9605\u8BFB",
  MARK: "\u5F15\u7528",
  SHARE: "\u5206\u4EAB",
  SOURCE: "\u6765\u6E90",
  RESTORE: "\u6062\u590D",
  "DELETE AT": "\u5220\u9664\u4E8E",
  "Noooop!": "\u5565\u90FD\u6CA1\u6709\uFF01",
  "All Data is Loaded \u{1F389}": "\u6240\u6709\u6570\u636E\u90FD\u52A0\u8F7D\u597D\u5566 \u{1F389}",
  "Quick filter": "\u5FEB\u901F\u7B5B\u9009",
  TYPE: "\u7C7B\u578B",
  LINKED: "\u6709\u94FE\u63A5",
  "NO TAGS": "\u65E0\u6807\u7B7E",
  "HAS LINKS": "\u6709\u8D85\u94FE\u63A5",
  "HAS IMAGES": "\u6709\u56FE\u7247",
  INCLUDE: "\u5305\u62EC",
  EXCLUDE: "\u6392\u9664",
  TEXT: "\u6587\u672C",
  IS: "\u662F",
  ISNOT: "\u4E0D\u662F",
  SELECT: "\u9009\u62E9",
  "ADD FILTER TERMS": "\u6DFB\u52A0\u68C0\u7D22\u6761\u4EF6",
  FILTER: "\u68C0\u7D22\u5668",
  TITLE: "\u6807\u9898",
  "CREATE QUERY": "\u521B\u5EFA\u68C0\u7D22\u5F0F",
  "EDIT QUERY": "\u7F16\u8F91\u68C0\u7D22\u5F0F",
  MATCH: "\u5339\u914D",
  TIMES: "\u6B21",
  "Share Memo Image": "\u5206\u4EAB Memo \u56FE\u7247",
  "\u2197Click the button to save": "\u2197\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u6309\u94AE\u6765\u4FDD\u5B58",
  "Image is generating...": "\u56FE\u7247\u6B63\u5728\u751F\u6210\u4E2D...",
  "Image is loading...": "\u56FE\u7247\u6B63\u5728\u52A0\u8F7D\u4E2D...",
  "\u{1F61F} Cannot load image, image link maybe broken": "\u{1F61F} \u65E0\u6CD5\u52A0\u8F7D\u56FE\u7247\uFF0C\u56FE\u7247\u94FE\u63A5\u4E5F\u8BB8\u4E0D\u5B58\u5728",
  "Loading...": "\u52AA\u529B\u52A0\u8F7D\u4E2D...",
  "Daily Memos": "\u6BCF\u65E5 Memos",
  "CANCEL EDIT": "\u53D6\u6D88\u7F16\u8F91",
  "LINK TO THE": "\u94FE\u63A5\u5230"
};
var zhTW = {};
const localeMap = {
  ar,
  cs: cz,
  da,
  de,
  en,
  "en-gb": enGB,
  es,
  fr,
  hi,
  id: id$1,
  it,
  ja,
  ko,
  nl,
  nn: no,
  pl,
  pt,
  "pt-br": ptBR,
  ro,
  ru,
  tr,
  "zh-cn": zhCN,
  "zh-tw": zhTW
};
const locale$1 = localeMap[require$$0.moment.locale()];
function t(str) {
  return locale$1 && locale$1[str] || en[str];
}
const TItem = ({
  entity: {
    name,
    char,
    file
  }
}) => {
  return /* @__PURE__ */ jsx("div", {
    children: `${char}`
  });
};
const Loading = ({
  data
}) => {
  return /* @__PURE__ */ jsx("div", {
    children: "Loading"
  });
};
let actualToken;
const Editor = _react_17_0_2_react.exports.forwardRef((props, ref) => {
  var _a, _b;
  const {
    globalState: {
      useTinyUndoHistoryCache
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const {
    className,
    initialContent,
    placeholder,
    showConfirmBtn,
    showCancelBtn,
    onConfirmBtnClick: handleConfirmBtnClickCallback,
    onCancelBtnClick: handleCancelBtnClickCallback,
    onContentChange: handleContentChangeCallback
  } = props;
  const editorRef = _react_17_0_2_react.exports.useRef(null);
  const tinyUndoRef = _react_17_0_2_react.exports.useRef(null);
  const refresh = useRefresh();
  _react_17_0_2_react.exports.useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    if (initialContent) {
      editorRef.current.value = initialContent;
      refresh();
    }
  }, []);
  _react_17_0_2_react.exports.useEffect(() => {
    var _a2;
    if (useTinyUndoHistoryCache) {
      if (!editorRef.current) {
        return;
      }
      const {
        tinyUndoActionsCache,
        tinyUndoIndexCache
      } = storage.get(["tinyUndoActionsCache", "tinyUndoIndexCache"]);
      tinyUndoRef.current = new TinyUndo(editorRef.current, {
        interval: 5e3,
        initialActions: tinyUndoActionsCache,
        initialIndex: tinyUndoIndexCache
      });
      tinyUndoRef.current.subscribe((actions, index) => {
        storage.set({
          tinyUndoActionsCache: actions,
          tinyUndoIndexCache: index
        });
      });
      return () => {
        var _a3;
        (_a3 = tinyUndoRef.current) == null ? void 0 : _a3.destroy();
      };
    } else {
      (_a2 = tinyUndoRef.current) == null ? void 0 : _a2.destroy();
      tinyUndoRef.current = null;
      storage.remove(["tinyUndoActionsCache", "tinyUndoIndexCache"]);
    }
  }, [useTinyUndoHistoryCache]);
  _react_17_0_2_react.exports.useEffect(() => {
    var _a2;
    if (editorRef.current) {
      editorRef.current.style.height = "auto";
      editorRef.current.style.height = ((_a2 = editorRef.current.scrollHeight) != null ? _a2 : 0) + "px";
    }
  }, [(_a = editorRef.current) == null ? void 0 : _a.value]);
  _react_17_0_2_react.exports.useImperativeHandle(ref, () => ({
    element: editorRef.current,
    focus: () => {
      var _a2;
      if (FocusOnEditor) {
        (_a2 = editorRef.current) == null ? void 0 : _a2.focus();
      }
    },
    insertText: (rawText) => {
      if (!editorRef.current) {
        return;
      }
      const prevValue = editorRef.current.value;
      editorRef.current.value = prevValue.slice(0, editorRef.current.selectionStart) + rawText + prevValue.slice(editorRef.current.selectionStart);
      handleContentChangeCallback(editorRef.current.value);
      refresh();
    },
    setContent: (text) => {
      if (editorRef.current) {
        editorRef.current.value = text;
        handleContentChangeCallback(editorRef.current.value);
        refresh();
      }
    },
    getContent: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = editorRef.current) == null ? void 0 : _a2.value) != null ? _b2 : "";
    }
  }), []);
  const handleInsertTrigger = (event) => {
    if (!editorRef.current) {
      return;
    }
    const {
      fileManager
    } = appStore.getState().dailyNotesState.app;
    if (event.currentTrigger === "#") {
      const prevValue = editorRef.current.value;
      let removeCharNum;
      if (actualToken !== null && actualToken !== void 0) {
        removeCharNum = actualToken.length;
      } else {
        removeCharNum = 0;
      }
      let behindCharNum = editorRef.current.selectionStart;
      for (let i = 0; i < prevValue.length; i++) {
        if (!/\s/g.test(prevValue[behindCharNum])) {
          behindCharNum++;
        }
      }
      editorRef.current.value = prevValue.slice(0, editorRef.current.selectionStart - removeCharNum) + event.item.char + prevValue.slice(behindCharNum);
      handleContentChangeCallback(editorRef.current.value);
      refresh();
    } else if (event.currentTrigger === "[[") {
      const filePath = fileManager.generateMarkdownLink(event.item.file, event.item.file.path, "", "");
      const prevValue = editorRef.current.value;
      let removeCharNum;
      if (actualToken !== null && actualToken !== void 0) {
        if (filePath.contains("[[")) {
          removeCharNum = actualToken.length + 1;
        } else if (event.item.file.extension !== "md") {
          removeCharNum = actualToken.length + 1;
        } else {
          removeCharNum = actualToken.length + 2;
        }
      } else {
        removeCharNum = 2;
      }
      let behindCharNum = editorRef.current.selectionStart;
      for (let i = 0; i < prevValue.length; i++) {
        if (!/\s/g.test(prevValue[behindCharNum])) {
          behindCharNum++;
        }
      }
      editorRef.current.value = prevValue.slice(0, editorRef.current.selectionStart - removeCharNum) + filePath + prevValue.slice(behindCharNum);
      handleContentChangeCallback(editorRef.current.value);
      refresh();
    }
  };
  const handleEditorInput = _react_17_0_2_react.exports.useCallback(() => {
    var _a2, _b2;
    handleContentChangeCallback((_b2 = (_a2 = editorRef.current) == null ? void 0 : _a2.value) != null ? _b2 : "");
    refresh();
  }, []);
  const handleEditorKeyDown = _react_17_0_2_react.exports.useCallback((event) => {
    event.stopPropagation();
    if (event.code === "Enter") {
      if (event.metaKey || event.ctrlKey) {
        handleCommonConfirmBtnClick();
      }
    }
    refresh();
  }, []);
  const handleCommonConfirmBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    var _a2;
    if (!editorRef.current) {
      return;
    }
    editorRef.current.value = getEditorContentCache2();
    handleConfirmBtnClickCallback(editorRef.current.value);
    editorRef.current.value = "";
    refresh();
    (_a2 = tinyUndoRef.current) == null ? void 0 : _a2.resetState();
  }, []);
  const handleCommonCancelBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    handleCancelBtnClickCallback();
  }, []);
  const getEditorContentCache2 = () => {
    var _a2;
    return (_a2 = storage.get(["editorContentCache"]).editorContentCache) != null ? _a2 : "";
  };
  const getEditorContent = () => {
    if (!editorRef.current) {
      return;
    }
    editorRef.current.value = getEditorContentCache2();
    return editorRef.current.value;
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "common-editor-wrapper " + className,
    children: [/* @__PURE__ */ jsx(ReactTextareaAutocomplete, {
      className: "common-editor-inputer scroll",
      loadingComponent: Loading,
      placeholder,
      movePopupAsYouType: true,
      ref: (rta) => {
      },
      value: getEditorContent(),
      innerRef: (textarea) => {
        editorRef.current = textarea;
      },
      onInput: handleEditorInput,
      onKeyDown: handleEditorKeyDown,
      style: {
        minHeight: 48
      },
      dropdownStyle: {
        minWidth: 180,
        maxHeight: 250,
        overflowY: "auto"
      },
      minChar: 0,
      onItemSelected: handleInsertTrigger,
      scrollToItem: true,
      trigger: {
        "#": {
          dataProvider: (token) => {
            actualToken = token;
            return usedTags(token).map(({
              name,
              char
            }) => ({
              name,
              char
            }));
          },
          component: TItem,
          afterWhitespace: true,
          output: (item) => item.char
        },
        "[[": {
          dataProvider: (token) => {
            actualToken = token;
            return getSuggestions(token).slice(0, 10).map(({
              name,
              char,
              file
            }) => ({
              name,
              char,
              file
            }));
          },
          component: TItem,
          afterWhitespace: true,
          output: (item) => item.char
        }
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "common-tools-wrapper",
      children: [/* @__PURE__ */ jsx("div", {
        className: "common-tools-container",
        children: /* @__PURE__ */ jsx(Only, {
          when: props.tools !== void 0,
          children: props.tools
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "btns-container",
        children: [/* @__PURE__ */ jsx(Only, {
          when: showCancelBtn,
          children: /* @__PURE__ */ jsx("button", {
            className: "action-btn cancel-btn",
            onClick: handleCommonCancelBtnClick,
            children: t("CANCEL EDIT")
          })
        }), /* @__PURE__ */ jsx(Only, {
          when: showConfirmBtn,
          children: /* @__PURE__ */ jsxs("button", {
            className: "action-btn confirm-btn",
            disabled: !((_b = editorRef.current) == null ? void 0 : _b.value),
            onClick: handleCommonConfirmBtnClick,
            children: [SaveMemoButtonLabel, /* @__PURE__ */ jsx("span", {
              className: "icon-text",
              children: "\u270D\uFE0F"
            })]
          })
        })]
      })]
    })]
  });
});
var memoEditor = "";
var selectDatePicker = "";
var tag = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMwMDAwMDAiPjxnPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjwvZz48Zz48cGF0aCBkPSJNMjAsMTBWOGgtNFY0aC0ydjRoLTRWNEg4djRINHYyaDR2NEg0djJoNHY0aDJ2LTRoNHY0aDJ2LTRoNHYtMmgtNHYtNEgyMHogTTE0LDE0aC00di00aDRWMTR6Ii8+PC9nPjwvc3ZnPg==";
var imageSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS00Ljg2IDguODZsLTMgMy44N0w5IDEzLjE0IDYgMTdoMTJsLTMuODYtNS4xNHoiLz48L3N2Zz4=";
var taskSvg = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjQyNDA3MDQzMTQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4ODEiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzEyOTZkYiI+PHBhdGggZD0iTTIyNCA4MDAuMjU2TDIyMy43MTIgMjI0SDMyMHYzMS42OGMwIDM1LjQ1NiAyOC42NCA2NC4zMiA2My44NzIgNjQuMzJoMjU2LjI1NkE2NC4xNiA2NC4xNiAwIDAgMCA3MDQgMjU1LjY4VjIyNGw5Ni0wLjI1Nkw4MDAuMjU2IDgwMCAyMjQgODAwLjI1NnpNNjQwIDE5Mi4zMkw2NDAuMTI4IDI1NiAzODQgMjU1LjY4VjE5Mi4zMkwzODMuODcyIDE5MiA2NDAgMTkyLjMyek03OTkuODQgMTYwSDY5NS4wNGMtMTEuMDcyLTE5LjA0LTMxLjQyNC0zMi01NC45MTItMzJoLTI1Ni4yNTZjLTIzLjQ4OCAwLTQzLjgwOCAxMi45MjgtNTQuOTEyIDMySDIyMy43MTJBNjMuNzc2IDYzLjc3NiAwIDAgMCAxNjAgMjIzLjc0NHY1NzYuNTEyQzE2MCA4MzUuMzkyIDE4OC42MDggODY0IDIyMy43NDQgODY0aDU3Ni41MTJBNjMuODQgNjMuODQgMCAwIDAgODY0IDgwMC4yNTZWMjIzLjc0NEE2NCA2NCAwIDAgMCA3OTkuODQgMTYweiIgcC1pZD0iMTg4MiI+PC9wYXRoPjxwYXRoIGQ9Ik02MTkuMDcyIDQyOS4wODhsLTE1MS43NDQgMTY1Ljg4OC02Mi4xMTItNjkuNmEzMiAzMiAwIDEgMC00Ny43NDQgNDIuNjI0bDg1LjY5NiA5NmEzMiAzMiAwIDAgMCAyMy42OCAxMC42ODhoMC4xOTJjOC45NiAwIDE3LjUzNi0zLjc3NiAyMy42MTYtMTAuNGwxNzUuNjQ4LTE5MmEzMiAzMiAwIDAgMC00Ny4yMzItNDMuMiIgcC1pZD0iMTg4MyI+PC9wYXRoPjwvc3ZnPg0K";
var showEditorSvg = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjQyNTY0NDUyMjA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxOTQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiI+PHBhdGggZD0iTTUxMiAzMkMyNDggMzIgMzIgMjQ4IDMyIDUxMnMyMTYgNDgwIDQ4MCA0ODAgNDgwLTIxNiA0ODAtNDgwUzc3NiAzMiA1MTIgMzJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI2MTk1Ij48L3BhdGg+PHBhdGggZD0iTTUxMiAwQzIyOC44IDAgMCAyMjguOCAwIDUxMnMyMjguOCA1MTIgNTEyIDUxMiA1MTItMjI4LjggNTEyLTUxMlM3OTUuMiAwIDUxMiAweiBtMCA5OTJDMjQ4IDk5MiAzMiA3NzYgMzIgNTEyUzI0OCAzMiA1MTIgMzJzNDgwIDIxNiA0ODAgNDgwLTIxNiA0ODAtNDgwIDQ4MHoiIGZpbGw9IiIgcC1pZD0iNjE5NiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zOTIgMGEzOTIgMzkyIDAgMSAwIDc4NCAwIDM5MiAzOTIgMCAxIDAtNzg0IDBaIiBmaWxsPSIjOURFOEY3IiBwLWlkPSI2MTk3Ij48L3BhdGg+PHBhdGggZD0iTTc4NCA0OTZINTI4VjI0MGgtMzJ2MjU2SDI0MHYzMmgyNTZ2MjU2aDMyVjUyOGgyNTZ6IiBmaWxsPSIjMUExNzE4IiBwLWlkPSI2MTk4Ij48L3BhdGg+PC9zdmc+";
var journalSvg = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjQyNDA2OTY3MTE1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NTIiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzEyOTZkYiI+PHBhdGggZD0iTTU0NCA4MDAuMTI4bC0zMjAgMC4xNi0wLjA2NC05Ni4zMi0wLjA2NC0xNjAtMC4wMzItNjQtMC4wOTYtMTYwLTAuMDMyLTk2aDU3Ni4xMjhMODAwIDIyMy43NzYgODAwLjI1NiA4MDAgNTQ0IDgwMC4xMjh6TTc5OS44NCAxNjBIMjIzLjcxMkE2My44MDggNjMuODA4IDAgMCAwIDE2MCAyMjMuNzQ0djU3Ni41NDRjMCAzNS4xMzYgMjguNjA4IDYzLjY4IDYzLjc0NCA2My42OGg1NzYuNTEyQTYzLjgwOCA2My44MDggMCAwIDAgODY0IDgwMC4zMlYyMjMuNzQ0QTY0IDY0IDAgMCAwIDc5OS44NCAxNjB6IiBwLWlkPSIxNjUzIj48L3BhdGg+PHBhdGggZD0iTTY4MC42MDggMzIwaC0yMjRhMzIgMzIgMCAwIDAgMCA2NGgyMjRhMzIgMzIgMCAwIDAgMC02NE02ODAuNjA4IDQ4MGgtMjI0YTMyIDMyIDAgMCAwIDAgNjRoMjI0YTMyIDMyIDAgMCAwIDAtNjRNNjgwLjYwOCA2NDBoLTIyNGEzMiAzMiAwIDAgMCAwIDY0aDIyNGEzMiAzMiAwIDAgMCAwLTY0TTM1MiAzMjBhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDAgMCAwLTY0TTM1MiA0ODBhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDAgMCAwLTY0TTM1MiA2NDBhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDAgMCAwLTY0IiBwLWlkPSIxNjU0Ij48L3BhdGg+PC9zdmc+";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar2; i < l2; i++) {
      if (ar2 || !(i in from)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from, 0, i);
        ar2[i] = from[i];
      }
    }
  return to.concat(ar2 || Array.prototype.slice.call(from));
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useIsomorphicLayoutEffect$1 = /* @__PURE__ */ canUseDOM() ? _react_17_0_2_react.exports.useLayoutEffect : _react_17_0_2_react.exports.useEffect;
var serverHandoffComplete = false;
var id = 0;
var genId = function genId2() {
  return ++id;
};
function useId(idFromProps) {
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);
  var _React$useState = _react_17_0_2_react.exports.useState(initialId), id2 = _React$useState[0], setId = _React$useState[1];
  useIsomorphicLayoutEffect$1(function() {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  _react_17_0_2_react.exports.useEffect(function() {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return id2 != null ? String(id2) : void 0;
}
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex$1(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex$1(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
var MILLISECONDS_IN_DAY$1 = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1);
}
function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
var MILLISECONDS_IN_WEEK$3 = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  requiredArgs(2, arguments);
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$3);
}
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function endOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$1 = formatDistance;
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$1 = localize;
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var enUS = locale;
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$2 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output2 = Math.abs(number).toString();
  while (output2.length < targetLength) {
    output2 = "0" + output2;
  }
  return sign + output2;
}
var formatters$3 = {
  y: function(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  a: function(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  H: function(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  m: function(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  s: function(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  S: function(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$4 = formatters$3;
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters$1 = {
  G: function(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  y: function(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$4.y(date, token);
  },
  Y: function(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$4.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$4.d(date, token);
  },
  D: function(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$4.h(date, token);
  },
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$4.H(date, token);
  },
  K: function(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$4.m(date, token);
  },
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$4.s(date, token);
  },
  S: function(date, token) {
    return formatters$4.S(date, token);
  },
  X: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset2, dirtyDelimiter) {
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset2, dirtyDelimiter) {
  if (offset2 % 60 === 0) {
    var sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, dirtyDelimiter);
}
function formatTimezone(offset2, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters$2 = formatters$1;
function dateLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
}
function timeLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
}
function dateTimeLongFormatter(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale2 = options.locale || enUS;
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale2.formatLong, formatterOptions);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters$2[firstCharacter];
    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth2 = new Date(0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}
function getTime(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}
function getUnixTime(dirtyDate) {
  requiredArgs(1, arguments);
  return Math.floor(getTime(dirtyDate) / 1e3);
}
function getWeekYear(dirtyDate, options) {
  var _options$locale, _options$locale$optio;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getWeeksInMonth(date, options) {
  requiredArgs(1, arguments);
  return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);
  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}
function MonthsDropdown(props) {
  var displayMonth = props.displayMonth;
  var _a = useDayPicker(), fromDate = _a.fromDate, toDate2 = _a.toDate, styles = _a.styles, locale2 = _a.locale, formatMonthCaption2 = _a.formatters.formatMonthCaption, classNames = _a.classNames, Dropdown2 = _a.components.Dropdown, labelMonthDropdown2 = _a.labels.labelMonthDropdown;
  if (!fromDate && !toDate2) {
    return React$1.createElement(React$1.Fragment, null);
  }
  var dropdownMonths = [];
  if (fromDate && toDate2) {
    if (isSameYear(fromDate, toDate2)) {
      for (var month = fromDate.getMonth(); month <= toDate2.getMonth(); month++) {
        dropdownMonths.push(setMonth(startOfMonth(fromDate), month));
      }
    } else {
      for (var month = 0; month <= 11; month++) {
        var anyDate = new Date();
        dropdownMonths.push(setMonth(startOfMonth(anyDate), month));
      }
    }
  }
  var handleChange = function(e) {
    var newMonth = setMonth(new Date(displayMonth), Number(e.target.value));
    props.onChange(newMonth);
  };
  return React$1.createElement(Dropdown2, { "aria-label": labelMonthDropdown2(), className: classNames.dropdown_month, style: styles.dropdown_month, onChange: handleChange, value: displayMonth.getMonth(), caption: formatMonthCaption2(displayMonth, { locale: locale2 }) }, dropdownMonths.map(function(m2) {
    return React$1.createElement("option", { key: m2.getMonth(), value: m2.getMonth() }, formatMonthCaption2(m2, { locale: locale2 }));
  }));
}
var Button = React$1.forwardRef(function(props, ref) {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
  var classNamesArr = [classNames.button_reset, classNames.button];
  if (props.className) {
    classNamesArr.push(props.className);
  }
  var className = classNamesArr.join(" ");
  var style = __assign(__assign({}, styles.button_reset), styles.button);
  if (props.style) {
    Object.assign(style, props.style);
  }
  return React$1.createElement("button", __assign({}, props, { ref, type: "button", className, style }));
});
function Navigation(props) {
  var _a;
  var _b = useDayPicker(), dir = _b.dir, locale2 = _b.locale, classNames = _b.classNames, styles = _b.styles, _c = _b.labels, labelPrevious2 = _c.labelPrevious, labelNext2 = _c.labelNext, _d = _b.components, IconRight2 = _d.IconRight, IconLeft2 = _d.IconLeft;
  var onPreviousClick = props.onPreviousClick, onNextClick = props.onNextClick;
  if (dir === "rtl") {
    _a = [onPreviousClick, onNextClick], onNextClick = _a[0], onPreviousClick = _a[1];
  }
  var previousMonth = props.previousMonth, nextMonth = props.nextMonth;
  var previousLabel = labelPrevious2(previousMonth, { locale: locale2 });
  var previousClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(" ");
  var nextLabel = labelNext2(nextMonth, { locale: locale2 });
  var nextClassName = [
    classNames.nav_button,
    classNames.nav_button_next
  ].join(" ");
  if (!nextMonth && !previousMonth) {
    return React$1.createElement(React$1.Fragment, null);
  }
  return React$1.createElement("div", { className: classNames.nav, style: styles.nav }, !props.hidePrevious && React$1.createElement(Button, { "aria-label": previousLabel, className: previousClassName, style: styles.nav_button_next, disabled: !previousMonth, onClick: dir === "rtl" ? onNextClick : onPreviousClick }, dir === "rtl" ? React$1.createElement(IconRight2, { className: classNames.nav_icon, style: styles.nav_icon }) : React$1.createElement(IconLeft2, { className: classNames.nav_icon, style: styles.nav_icon })), !props.hideNext && React$1.createElement(Button, { "aria-label": nextLabel, className: nextClassName, style: styles.nav_button_next, disabled: !nextMonth, onClick: dir === "rtl" ? onPreviousClick : onNextClick }, dir === "rtl" ? React$1.createElement(IconLeft2, { className: classNames.nav_icon, style: styles.nav_icon }) : React$1.createElement(IconRight2, { className: classNames.nav_icon, style: styles.nav_icon })));
}
function YearsDropdown(props) {
  var displayMonth = props.displayMonth;
  var _a = useDayPicker(), fromDate = _a.fromDate, toDate2 = _a.toDate, locale2 = _a.locale, styles = _a.styles, classNames = _a.classNames, Dropdown2 = _a.components.Dropdown, formatYearCaption2 = _a.formatters.formatYearCaption, labelYearDropdown2 = _a.labels.labelYearDropdown;
  var years = [];
  if (fromDate && toDate2) {
    var fromYear = fromDate.getFullYear();
    var toYear = toDate2.getFullYear();
    for (var year = fromYear; year <= toYear; year++) {
      years.push(setYear(startOfYear(new Date()), year));
    }
  }
  var handleChange = function(e) {
    var newMonth = setYear(new Date(displayMonth), Number(e.target.value));
    props.onChange(newMonth);
  };
  return React$1.createElement(Dropdown2, { "aria-label": labelYearDropdown2(), className: classNames.dropdown_month, style: styles.dropdown_month, onChange: handleChange, value: displayMonth.getFullYear(), caption: formatYearCaption2(displayMonth, { locale: locale2 }) }, years.map(function(year2) {
    return React$1.createElement("option", { key: year2.getFullYear(), value: year2.getFullYear() }, formatYearCaption2(year2, { locale: locale2 }));
  }));
}
function useControlledValue(defaultValue, controlledValue) {
  var _a = React$1.useState(defaultValue), uncontrolledValue = _a[0], setValue = _a[1];
  var value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function getInitialMonth(context) {
  var month = context.month, defaultMonth = context.defaultMonth, today = context.today;
  var initialMonth = month || defaultMonth || today || new Date();
  var toDate2 = context.toDate, fromDate = context.fromDate, _a = context.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  if (toDate2 && differenceInCalendarMonths(toDate2, initialMonth) < 0) {
    var offset2 = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate2, offset2);
  }
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return startOfMonth(initialMonth);
}
function useNavigationState() {
  var context = useDayPicker();
  var initialMonth = getInitialMonth(context);
  var _a = useControlledValue(initialMonth, context.month), month = _a[0], setMonth2 = _a[1];
  var goToMonth = function(date) {
    if (context.disableNavigation)
      return;
    setMonth2(date);
  };
  return [month, goToMonth];
}
function getDisplayMonths(month, _a) {
  var reverseMonths = _a.reverseMonths, numberOfMonths = _a.numberOfMonths;
  var start2 = startOfMonth(month);
  var end2 = startOfMonth(addMonths(start2, numberOfMonths));
  var monthsDiff = differenceInCalendarMonths(end2, start2);
  var months = [];
  for (var i = 0; i < monthsDiff; i++) {
    var nextMonth = addMonths(start2, i);
    months.push(nextMonth);
  }
  if (reverseMonths)
    months = months.reverse();
  return months;
}
function getNextMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var toDate2 = options.toDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset2 = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!toDate2) {
    return addMonths(month, offset2);
  }
  var monthsDiff = differenceInCalendarMonths(toDate2, startingMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths(month, offset2);
}
function getPreviousMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var fromDate = options.fromDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset2 = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!fromDate) {
    return addMonths(month, -offset2);
  }
  var monthsDiff = differenceInCalendarMonths(month, fromDate);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths(month, -offset2);
}
var NavigationContext = React$1.createContext(void 0);
function NavigationProvider(props) {
  var context = useDayPicker();
  var _a = useNavigationState(), month = _a[0], goToMonth = _a[1];
  var displayMonths = getDisplayMonths(month, context);
  var nextMonth = getNextMonth(month, context);
  var previousMonth = getPreviousMonth(month, context);
  return React$1.createElement(NavigationContext.Provider, { value: {
    month,
    displayMonths,
    goToMonth,
    previousMonth,
    nextMonth
  } }, props.children);
}
function useNavigation() {
  var context = React$1.useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
function Caption(props) {
  var _a;
  var displayMonth = props.displayMonth;
  var context = useDayPicker();
  var classNames = context.classNames, numberOfMonths = context.numberOfMonths, disableNavigation = context.disableNavigation, styles = context.styles, captionLayout = context.captionLayout, onMonthChange = context.onMonthChange, dir = context.dir, CaptionLabel2 = context.components.CaptionLabel;
  var _b = useNavigation(), previousMonth = _b.previousMonth, nextMonth = _b.nextMonth, goToMonth = _b.goToMonth, displayMonths = _b.displayMonths;
  var handlePreviousClick = function() {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
    onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(previousMonth);
  };
  var handleNextClick = function() {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
    onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(nextMonth);
  };
  var handleMonthChange = function(newMonth) {
    goToMonth(newMonth);
    onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(newMonth);
  };
  var displayIndex = displayMonths.findIndex(function(month) {
    return isSameMonth(displayMonth, month);
  });
  var isFirst = displayIndex === 0;
  var isLast = displayIndex === displayMonths.length - 1;
  if (dir === "rtl") {
    _a = [isFirst, isLast], isLast = _a[0], isFirst = _a[1];
  }
  var hideNext = numberOfMonths > 1 && (isFirst || !isLast);
  var hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);
  var captionLabel = React$1.createElement(CaptionLabel2, { id: props.id, displayMonth });
  var captionContent;
  if (disableNavigation) {
    captionContent = captionLabel;
  } else if (captionLayout === "dropdown") {
    captionContent = React$1.createElement("div", { className: classNames.caption_dropdowns, style: styles.caption_dropdowns }, React$1.createElement("div", { className: classNames.vhidden }, captionLabel), React$1.createElement(MonthsDropdown, { onChange: handleMonthChange, displayMonth }), React$1.createElement(YearsDropdown, { onChange: handleMonthChange, displayMonth }));
  } else {
    captionContent = React$1.createElement(React$1.Fragment, null, captionLabel, React$1.createElement(Navigation, { displayMonth, hideNext, hidePrevious, nextMonth, previousMonth, onPreviousClick: handlePreviousClick, onNextClick: handleNextClick }));
  }
  return React$1.createElement("div", { className: classNames.caption, style: styles.caption }, captionContent);
}
function CaptionLabel(props) {
  var _a = useDayPicker(), locale2 = _a.locale, classNames = _a.classNames, styles = _a.styles, formatCaption2 = _a.formatters.formatCaption;
  return React$1.createElement("h2", { className: classNames.caption_label, style: styles.caption_label, "aria-live": "polite", "aria-atomic": "true", id: props.id }, formatCaption2(props.displayMonth, { locale: locale2 }));
}
function isDayPickerMultiple(props) {
  return props.mode === "multiple";
}
var SelectMultipleContext = React$1.createContext(void 0);
function SelectMultipleProvider(props) {
  if (!isDayPickerMultiple(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return React$1.createElement(SelectMultipleContext.Provider, { value: emptyContextValue }, props.children);
  }
  return React$1.createElement(SelectMultipleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectMultipleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected;
  var onDayClick = function(day, modifiers2, e) {
    var _a2, _b;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, modifiers2, e);
    var isMinSelected = Boolean(initialProps.min && modifiers2.selected && selected && selected.length === initialProps.min);
    if (isMinSelected) {
      return;
    }
    var isMaxSelected = Boolean(initialProps.max && !modifiers2.selected && selected && selected.length === initialProps.max);
    if (isMaxSelected) {
      return;
    }
    var days = selected ? __spreadArray([], selected, true) : [];
    if (modifiers2.selected) {
      var index = days.findIndex(function(selectedDay) {
        return isSameDay(day, selectedDay);
      });
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, days, day, modifiers2, e);
  };
  var modifiers = {
    disabled: []
  };
  if (selected) {
    modifiers.disabled = [
      function disableDay(day) {
        var isMaxSelected = initialProps.max && selected && selected.length > initialProps.max - 1;
        var isSelected = selected === null || selected === void 0 ? void 0 : selected.some(function(selectedDay) {
          return isSameDay(selectedDay, day);
        });
        return Boolean(isMaxSelected && !isSelected);
      }
    ];
  }
  var contextValue = { selected, onDayClick, modifiers };
  return React$1.createElement(SelectMultipleContext.Provider, { value: contextValue }, children);
}
function useSelectMultiple() {
  var context = React$1.useContext(SelectMultipleContext);
  if (!context) {
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  }
  return context;
}
function isDayPickerRange(props) {
  return props.mode === "range";
}
function addToRange(day, range) {
  var _a = range || {}, from = _a.from, to = _a.to;
  if (!from) {
    return { from: day, to: day };
  }
  if (!to && isSameDay(from, day)) {
    return void 0;
  }
  if (!to && isBefore(day, from)) {
    return { from: day, to: from };
  }
  if (!to) {
    return { from, to: day };
  }
  if (isSameDay(to, day) && isSameDay(from, day)) {
    return void 0;
  }
  if (isSameDay(to, day)) {
    return { from: to, to };
  }
  if (isSameDay(from, day)) {
    return void 0;
  }
  if (isAfter(from, day)) {
    return { from: day, to };
  }
  return { from, to: day };
}
var SelectRangeContext = React$1.createContext(void 0);
function SelectRangeProvider(props) {
  if (!isDayPickerRange(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return React$1.createElement(SelectRangeContext.Provider, { value: emptyContextValue }, props.children);
  }
  return React$1.createElement(SelectRangeProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectRangeProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected;
  var min2 = initialProps.min;
  var max2 = initialProps.max;
  var onDayClick = function(day, modifiers2, e) {
    var _a2, _b;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, modifiers2, e);
    var newValue = addToRange(day, selected);
    if ((min2 || max2) && selected && (newValue === null || newValue === void 0 ? void 0 : newValue.to) && newValue.from && newValue.from !== newValue.to) {
      var diff = Math.abs(differenceInCalendarDays(newValue === null || newValue === void 0 ? void 0 : newValue.to, newValue === null || newValue === void 0 ? void 0 : newValue.from));
      if (min2 && diff < min2) {
        return;
      }
      if (max2 && diff >= max2) {
        return;
      }
    }
    (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, newValue, day, modifiers2, e);
  };
  var modifiers = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (selected) {
    if (selected.from) {
      modifiers.range_start = [selected.from];
      if (selected.to) {
        modifiers.range_middle = [
          {
            after: selected.from,
            before: selected.to
          }
        ];
        if (max2 || min2) {
          modifiers.disabled = [
            function(date) {
              if (max2 && selected.to && selected.from && isBefore(date, selected.from)) {
                var diff = differenceInCalendarDays(selected.to, date);
                if (diff >= max2) {
                  return true;
                }
              }
              if (max2 && selected.to && selected.from && isAfter(date, selected.to)) {
                var diff = differenceInCalendarDays(date, selected.from);
                if (diff >= max2) {
                  return true;
                }
              }
              if (min2 && selected.from && isBefore(date, selected.from)) {
                var diff = differenceInCalendarDays(selected.from, date);
                if (diff < min2) {
                  return true;
                }
              }
              if (min2 && selected.to && selected.from && isAfter(date, selected.to)) {
                var diff = differenceInCalendarDays(date, selected.from);
                if (diff < min2) {
                  return true;
                }
              }
              return false;
            }
          ];
        }
        modifiers.range_end = [selected.to];
      } else {
        modifiers.range_end = [selected.from];
      }
    }
  }
  return React$1.createElement(SelectRangeContext.Provider, { value: { selected, onDayClick, modifiers } }, children);
}
function useSelectRange() {
  var context = React$1.useContext(SelectRangeContext);
  if (!context) {
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  }
  return context;
}
function isDayPickerSingle(props) {
  return props.mode === "single";
}
var SelectSingleContext = React$1.createContext(void 0);
function SelectSingleProvider(props) {
  if (!isDayPickerSingle(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0
    };
    return React$1.createElement(SelectSingleContext.Provider, { value: emptyContextValue }, props.children);
  }
  return React$1.createElement(SelectSingleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectSingleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var onDayClick = function(day, dayModifiers, e) {
    var _a2, _b;
    if (dayModifiers.selected && !initialProps.required) {
      (_a2 = initialProps.onSelect) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, void 0, day, dayModifiers, e);
      return;
    }
    (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, day, day, dayModifiers, e);
  };
  var contextValue = {
    selected: initialProps.selected,
    onDayClick
  };
  return React$1.createElement(SelectSingleContext.Provider, { value: contextValue }, children);
}
function useSelectSingle() {
  var context = React$1.useContext(SelectSingleContext);
  if (!context) {
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  }
  return context;
}
function toMatcherArray(modifierFromProp) {
  if (Array.isArray(modifierFromProp)) {
    return modifierFromProp;
  } else if (modifierFromProp !== void 0) {
    return [modifierFromProp];
  } else {
    return [];
  }
}
function getCustomModifiers(dayPicker) {
  var customModifiers = {};
  Object.entries(dayPicker.modifiers).forEach(function(_a) {
    var modifier = _a[0], matcher = _a[1];
    customModifiers[modifier] = toMatcherArray(matcher);
  });
  return customModifiers;
}
var InternalModifier;
(function(InternalModifier2) {
  InternalModifier2["Disabled"] = "disabled";
  InternalModifier2["Selected"] = "selected";
  InternalModifier2["Hidden"] = "hidden";
  InternalModifier2["Today"] = "today";
  InternalModifier2["RangeStart"] = "range_start";
  InternalModifier2["RangeEnd"] = "range_end";
  InternalModifier2["RangeMiddle"] = "range_middle";
})(InternalModifier || (InternalModifier = {}));
function getInternalModifiers(dayPicker, selectMultiple, selectRange) {
  var _a;
  var internalModifiers = (_a = {}, _a[InternalModifier.Selected] = toMatcherArray(dayPicker.selected), _a[InternalModifier.Disabled] = toMatcherArray(dayPicker.disabled), _a[InternalModifier.Hidden] = toMatcherArray(dayPicker.hidden), _a[InternalModifier.Today] = [dayPicker.today], _a[InternalModifier.RangeEnd] = [], _a[InternalModifier.RangeMiddle] = [], _a[InternalModifier.RangeStart] = [], _a);
  if (dayPicker.fromDate) {
    internalModifiers.disabled.push({ before: dayPicker.fromDate });
  }
  if (dayPicker.toDate) {
    internalModifiers.disabled.push({ after: dayPicker.toDate });
  }
  if (isDayPickerMultiple(dayPicker)) {
    internalModifiers.disabled = internalModifiers.disabled.concat(selectMultiple.modifiers.disabled);
  } else if (isDayPickerRange(dayPicker)) {
    internalModifiers.disabled = internalModifiers.disabled.concat(selectRange.modifiers.disabled);
    internalModifiers.range_start = selectRange.modifiers.range_start;
    internalModifiers.range_middle = selectRange.modifiers.range_middle;
    internalModifiers.range_end = selectRange.modifiers.range_end;
  }
  return internalModifiers;
}
var ModifiersContext = React$1.createContext(void 0);
function ModifiersProvider(props) {
  var dayPicker = useDayPicker();
  var selectMultiple = useSelectMultiple();
  var selectRange = useSelectRange();
  var internalModifiers = getInternalModifiers(dayPicker, selectMultiple, selectRange);
  var customModifiers = getCustomModifiers(dayPicker);
  var modifiers = __assign(__assign({}, internalModifiers), customModifiers);
  return React$1.createElement(ModifiersContext.Provider, { value: modifiers }, props.children);
}
function useModifiers() {
  var context = React$1.useContext(ModifiersContext);
  if (!context) {
    throw new Error("useModifiers must be used within a ModifiersProvider");
  }
  return context;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDateInRange(date, range) {
  var _a;
  var from = range.from, to = range.to;
  if (!from) {
    return false;
  }
  if (!to && isSameDay(from, date)) {
    return true;
  }
  if (!to) {
    return false;
  }
  var isToBeforeFrom = differenceInCalendarDays(to, from) < 0;
  if (to && isToBeforeFrom) {
    _a = [to, from], from = _a[0], to = _a[1];
  }
  return differenceInCalendarDays(date, from) >= 0 && differenceInCalendarDays(to, date) >= 0;
}
function isDateType(value) {
  return isDate(value);
}
function isArrayOfDates(value) {
  return Array.isArray(value) && value.every(isDate);
}
function isMatch(day, matchers) {
  return matchers.some(function(matcher) {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (isDateType(matcher)) {
      return isSameDay(day, matcher);
    }
    if (isArrayOfDates(matcher)) {
      return matcher.includes(day);
    }
    if (isDateRange(matcher)) {
      return isDateInRange(day, matcher);
    }
    if (isDayOfWeekType(matcher)) {
      return matcher.dayOfWeek.includes(day.getDay());
    }
    if (isDateInterval(matcher)) {
      var isBefore2 = differenceInCalendarDays(matcher.before, day) > 0;
      var isAfter2 = differenceInCalendarDays(day, matcher.after) > 0;
      return isBefore2 && isAfter2;
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays(day, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays(matcher.before, day) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(day);
    }
    return false;
  });
}
function getModifierStatus(date, modifiers) {
  var modifiersList = Object.keys(modifiers).reduce(function(previousValue, key) {
    var modifier = modifiers[key];
    if (isMatch(date, modifier)) {
      previousValue.push(key);
    }
    return previousValue;
  }, []);
  var modifiersStatus = {};
  modifiersList.forEach(function(modifier) {
    return modifiersStatus[modifier] = true;
  });
  return modifiersStatus;
}
function useDayModifiers(date) {
  var context = useDayPicker();
  var modifiersContext = useModifiers();
  var modifiers = getModifierStatus(date, modifiersContext);
  var modifierClassNames = [];
  Object.keys(modifiers).forEach(function(modifier) {
    var customClassName = context.modifierClassNames[modifier];
    if (customClassName) {
      modifierClassNames.push(customClassName);
    } else {
      modifierClassNames.push("" + context.modifierPrefix + modifier);
    }
  });
  var modifierStyle = {};
  if (context.modifierStyles) {
    Object.keys(modifiers).forEach(function(modifier) {
      var _a;
      modifierStyle = __assign(__assign({}, modifierStyle), (_a = context.modifierStyles) === null || _a === void 0 ? void 0 : _a[modifier]);
    });
  }
  return {
    modifiers,
    modifierClassNames,
    modifierStyle
  };
}
var isFocusable$1 = function(modifiers) {
  return !modifiers.disabled && !modifiers.hidden;
};
function getInitialFocusTarget(displayMonths, modifiersContext) {
  var firstDayInMonth = startOfMonth(displayMonths[0]);
  var lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);
  var firstFocusableDay;
  var today;
  var date = firstDayInMonth;
  while (date <= lastDayInMonth) {
    var modifiers = getModifierStatus(date, modifiersContext);
    if (!isFocusable$1(modifiers)) {
      date = addDays(date, 1);
      continue;
    }
    if (modifiers.selected) {
      return date;
    }
    if (modifiers.today && !today) {
      today = date;
    }
    if (!firstFocusableDay) {
      firstFocusableDay = date;
    }
    date = addDays(date, 1);
  }
  if (today) {
    return today;
  } else {
    return firstFocusableDay;
  }
}
var FocusContext = React$1.createContext(void 0);
function FocusProvider(_a) {
  var children = _a.children;
  var _b = React$1.useState(), focusedDay = _b[0], setDay = _b[1];
  var _c = useNavigation(), goToMonth = _c.goToMonth, displayMonths = _c.displayMonths;
  var numberOfMonths = useDayPicker().numberOfMonths;
  var modifiersContext = useModifiers();
  var initialFocusTarget = getInitialFocusTarget(displayMonths, modifiersContext);
  var _d = React$1.useState(), lastFocusedDay = _d[0], setLastFocusedDay = _d[1];
  var isWithinDisplayMonths = function(date) {
    return displayMonths.some(function(displayMonth) {
      return isSameMonth(date, displayMonth);
    });
  };
  var focusTarget = (focusedDay !== null && focusedDay !== void 0 ? focusedDay : lastFocusedDay && isWithinDisplayMonths(lastFocusedDay)) ? lastFocusedDay : initialFocusTarget;
  var blur = function() {
    setLastFocusedDay(focusedDay);
    setDay(void 0);
  };
  var focus = function(date) {
    return setDay(date);
  };
  var switchMonth = function(date, offset2) {
    if (displayMonths.some(function(m2) {
      return isSameMonth(date, m2);
    }))
      return;
    if (offset2 < 0) {
      goToMonth(addMonths(date, 1 + offset2));
    } else {
      goToMonth(date);
    }
  };
  var focusDayBefore = function() {
    if (!focusedDay)
      return;
    var before = addDays(focusedDay, -1);
    focus(before);
    switchMonth(before, numberOfMonths * -1);
  };
  var focusDayAfter = function() {
    if (!focusedDay)
      return;
    var after = addDays(focusedDay, 1);
    focus(after);
    switchMonth(after, numberOfMonths);
  };
  var focusWeekBeforeDay = function() {
    if (!focusedDay)
      return;
    var up = addWeeks(focusedDay, -1);
    focus(up);
    switchMonth(up, numberOfMonths * -1);
  };
  var focusWeekAfterDay = function() {
    if (!focusedDay)
      return;
    var down = addWeeks(focusedDay, 1);
    focus(down);
    switchMonth(down, numberOfMonths);
  };
  var focusStartOfWeek = function() {
    if (!focusedDay)
      return;
    var dayToFocus = startOfWeek(focusedDay);
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };
  var focusEndOfWeek = function() {
    if (!focusedDay)
      return;
    var dayToFocus = endOfWeek(focusedDay);
    switchMonth(dayToFocus, numberOfMonths);
    focus(dayToFocus);
  };
  var focusMonthBefore = function() {
    if (!focusedDay)
      return;
    var monthBefore = addMonths(focusedDay, -1);
    switchMonth(monthBefore, numberOfMonths);
    focus(monthBefore);
  };
  var focusMonthAfter = function() {
    if (!focusedDay)
      return;
    var monthAfter = addMonths(focusedDay, 1);
    switchMonth(monthAfter, numberOfMonths);
    focus(monthAfter);
  };
  var focusYearBefore = function() {
    if (!focusedDay)
      return;
    var yearBefore = addYears(focusedDay, -1);
    switchMonth(yearBefore, numberOfMonths);
    focus(yearBefore);
  };
  var focusYearAfter = function() {
    if (!focusedDay)
      return;
    var yearAfter = addYears(focusedDay, 1);
    switchMonth(yearAfter, numberOfMonths);
    focus(yearAfter);
  };
  var value = {
    focusedDay,
    focusTarget,
    blur,
    focus,
    focusDayAfter,
    focusDayBefore,
    focusWeekAfterDay,
    focusWeekBeforeDay,
    focusMonthBefore,
    focusMonthAfter,
    focusYearBefore,
    focusYearAfter,
    focusStartOfWeek,
    focusEndOfWeek
  };
  return React$1.createElement(FocusContext.Provider, { value }, children);
}
function useFocus() {
  var context = React$1.useContext(FocusContext);
  if (!context) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
}
function useDayFocus(date, buttonRef) {
  var _a = useFocus(), focusedDay = _a.focusedDay, focusTarget = _a.focusTarget, focusDayAfter = _a.focusDayAfter, focusDayBefore = _a.focusDayBefore, focusWeekAfterDay = _a.focusWeekAfterDay, focusWeekBeforeDay = _a.focusWeekBeforeDay, blur = _a.blur, focus = _a.focus, focusMonthBefore = _a.focusMonthBefore, focusMonthAfter = _a.focusMonthAfter, focusYearBefore = _a.focusYearBefore, focusYearAfter = _a.focusYearAfter, focusStartOfWeek = _a.focusStartOfWeek, focusEndOfWeek = _a.focusEndOfWeek;
  var dir = useDayPicker().dir;
  React$1.useEffect(function() {
    var _a2;
    if (!focusedDay)
      return;
    if (isSameDay(focusedDay, date)) {
      (_a2 = buttonRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [focusedDay, date, buttonRef]);
  var focusOnKeyDown = function(e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();
        dir === "rtl" ? focusDayAfter() : focusDayBefore();
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        dir === "rtl" ? focusDayBefore() : focusDayAfter();
        break;
      case "ArrowDown":
        e.preventDefault();
        e.stopPropagation();
        focusWeekAfterDay();
        break;
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        focusWeekBeforeDay();
        break;
      case "PageUp":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearBefore() : focusMonthBefore();
        break;
      case "PageDown":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearAfter() : focusMonthAfter();
        break;
      case "Home":
        e.preventDefault();
        e.stopPropagation();
        focusStartOfWeek();
        break;
      case "End":
        e.preventDefault();
        e.stopPropagation();
        focusEndOfWeek();
        break;
    }
  };
  var isFocusTarget = Boolean(focusTarget && isSameDay(focusTarget, date));
  return { focus, blur, focusOnKeyDown, isFocusTarget };
}
function useDay(date, displayMonth, buttonRef) {
  var context = useDayPicker();
  var single = useSelectSingle();
  var multiple = useSelectMultiple();
  var range = useSelectRange();
  var _a = useDayFocus(date, buttonRef), focus = _a.focus, blur = _a.blur, focusOnKeyDown = _a.focusOnKeyDown, isFocusTarget = _a.isFocusTarget;
  var _b = useDayModifiers(date), modifiers = _b.modifiers, modifierClassNames = _b.modifierClassNames, modifierStyle = _b.modifierStyle;
  var isOutside = !isSameMonth(date, displayMonth);
  var returnValue = {
    isOutside,
    modifiers,
    selected: isDayPickerSingle(context) ? single.selected : isDayPickerMultiple(context) ? multiple.selected : isDayPickerRange(context) ? range.selected : void 0,
    single,
    multiple,
    range
  };
  if (isOutside && !context.showOutsideDays) {
    return returnValue;
  }
  if (modifiers.hidden) {
    return returnValue;
  }
  var classNames = [context.classNames.day].concat(modifierClassNames);
  var style = __assign(__assign({}, context.styles.day), modifierStyle);
  if (isOutside) {
    classNames.push(context.classNames.day_outside);
    style = __assign(__assign({}, context.styles), context.styles.day_outside);
  }
  var DayContent2 = context.components.DayContent;
  var children = React$1.createElement(DayContent2, { date, displayMonth, modifiers });
  var className = classNames.join(" ");
  if (!context.mode && !context.onDayClick) {
    return __assign(__assign({}, returnValue), { nonInteractiveProps: {
      style,
      className,
      children
    } });
  }
  var handleClick = function(e) {
    var _a2, _b2, _c, _d;
    if (isDayPickerSingle(context)) {
      (_a2 = single.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(single, date, modifiers, e);
    } else if (isDayPickerMultiple(context)) {
      (_b2 = multiple.onDayClick) === null || _b2 === void 0 ? void 0 : _b2.call(multiple, date, modifiers, e);
    } else if (isDayPickerRange(context)) {
      (_c = range.onDayClick) === null || _c === void 0 ? void 0 : _c.call(range, date, modifiers, e);
    }
    (_d = context.onDayClick) === null || _d === void 0 ? void 0 : _d.call(context, date, modifiers, e);
  };
  var handleFocus = function(e) {
    var _a2;
    focus(date);
    (_a2 = context.onDayFocus) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleBlur = function(e) {
    var _a2;
    blur();
    (_a2 = context.onDayBlur) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleKeyDown = function(e) {
    var _a2;
    focusOnKeyDown(e);
    (_a2 = context.onDayKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleKeyUp = function(e) {
    var _a2;
    (_a2 = context.onDayKeyUp) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleMouseEnter = function(e) {
    var _a2;
    (_a2 = context.onDayMouseEnter) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleMouseLeave = function(e) {
    var _a2;
    (_a2 = context.onDayMouseLeave) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleTouchCancel = function(e) {
    var _a2;
    (_a2 = context.onDayTouchCancel) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleTouchEnd = function(e) {
    var _a2;
    (_a2 = context.onDayTouchEnd) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleTouchMove = function(e) {
    var _a2;
    (_a2 = context.onDayTouchMove) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  var handleTouchStart = function(e) {
    var _a2;
    (_a2 = context.onDayTouchStart) === null || _a2 === void 0 ? void 0 : _a2.call(context, date, modifiers, e);
  };
  if (isOutside) {
    classNames.push(context.classNames.day_outside);
    style = __assign(__assign({}, context.styles), context.styles.day_outside);
  }
  className = classNames.join(" ");
  var selected = modifiers.selected, disabled = modifiers.disabled;
  var tabIndex = isFocusTarget ? 0 : -1;
  return __assign(__assign({}, returnValue), { buttonProps: {
    children,
    "aria-pressed": selected,
    style,
    disabled,
    className,
    tabIndex,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchCancel: handleTouchCancel,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart
  } });
}
function Day(props) {
  var buttonRef = React$1.useRef(null);
  var day = useDay(props.date, props.displayMonth, buttonRef);
  var buttonProps = day.buttonProps, nonInteractiveProps = day.nonInteractiveProps;
  if (!buttonProps && !nonInteractiveProps) {
    return React$1.createElement(React$1.Fragment, null);
  }
  if (nonInteractiveProps) {
    return React$1.createElement("div", __assign({}, nonInteractiveProps));
  }
  return React$1.createElement(Button, __assign({ ref: buttonRef }, buttonProps));
}
function DayContent(props) {
  var _a = useDayPicker(), locale2 = _a.locale, classNames = _a.classNames, styles = _a.styles, labelDay2 = _a.labels.labelDay, formatDay2 = _a.formatters.formatDay;
  return React$1.createElement(React$1.Fragment, null, React$1.createElement("span", { "aria-hidden": "true" }, formatDay2(props.date, { locale: locale2 })), React$1.createElement("span", { className: classNames.vhidden, style: styles.vhidden }, labelDay2(props.date, props.modifiers, { locale: locale2 })));
}
function Dropdown(props) {
  var onChange = props.onChange, value = props.value, children = props.children, caption = props.caption, className = props.className, style = props.style;
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles, IconDropdown2 = _a.components.IconDropdown;
  return React$1.createElement("div", { className, style }, React$1.createElement("span", { className: classNames.vhidden }, props["aria-label"]), React$1.createElement("select", { "aria-label": props["aria-label"], className: classNames.dropdown, style: styles.dropdown, value, onChange }, children), React$1.createElement("div", { className: classNames.caption_label, style: styles.caption_label, "aria-hidden": "true" }, caption, React$1.createElement(IconDropdown2, { className: classNames.dropdown_icon, style: styles.dropdown_icon })));
}
function Footer() {
  var _a = useDayPicker(), footer = _a.footer, styles = _a.styles, tfoot = _a.classNames.tfoot;
  if (!footer)
    return React$1.createElement(React$1.Fragment, null);
  return React$1.createElement("tfoot", { className: tfoot, style: styles.tfoot }, React$1.createElement("tr", null, React$1.createElement("td", { colSpan: 8 }, footer)));
}
function getWeekdays(locale2) {
  var start2 = startOfWeek(new Date(), { locale: locale2 });
  var days = [];
  for (var i = 0; i < 7; i++) {
    var day = addDays(start2, i);
    days.push(day);
  }
  return days;
}
function Head() {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles, showWeekNumber = _a.showWeekNumber, locale2 = _a.locale, formatWeekdayName2 = _a.formatters.formatWeekdayName, labelWeekday2 = _a.labels.labelWeekday;
  var weekdays = getWeekdays(locale2);
  return React$1.createElement("thead", { style: styles.head, className: classNames.head }, React$1.createElement("tr", { style: styles.head_row, className: classNames.head_row }, showWeekNumber && React$1.createElement("th", { scope: "col", style: styles.head_cell, className: classNames.head_cell }), weekdays.map(function(weekday, i) {
    return React$1.createElement("th", { key: i, scope: "col", className: classNames.head_cell, style: styles.head_cell }, React$1.createElement("span", { "aria-hidden": true }, formatWeekdayName2(weekday, { locale: locale2 })), React$1.createElement("span", { className: classNames.vhidden }, labelWeekday2(weekday, { locale: locale2 })));
  })));
}
function IconDropdown(props) {
  return React$1.createElement("svg", __assign({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, props), React$1.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }));
}
function IconLeft(props) {
  return React$1.createElement("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120", "data-testid": "iconLeft" }, props), React$1.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }));
}
function IconRight(props) {
  return React$1.createElement("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props, { "data-testid": "iconRight" }), React$1.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }));
}
function Row(props) {
  var _a = useDayPicker(), styles = _a.styles, classNames = _a.classNames, showWeekNumber = _a.showWeekNumber, _b = _a.components, Day2 = _b.Day, WeekNumber2 = _b.WeekNumber;
  var weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = React$1.createElement("td", { className: classNames.cell, style: styles.cell }, React$1.createElement(WeekNumber2, { number: props.weekNumber, dates: props.dates }));
  }
  return React$1.createElement("tr", { className: classNames.row, style: styles.row }, weekNumberCell, props.dates.map(function(date) {
    return React$1.createElement("td", { className: classNames.cell, style: styles.cell, key: getUnixTime(date) }, React$1.createElement(Day2, { displayMonth: props.displayMonth, date }));
  }));
}
function WeekNumber(props) {
  var weekNumber = props.number, dates = props.dates;
  var _a = useDayPicker(), onWeekNumberClick = _a.onWeekNumberClick, styles = _a.styles, classNames = _a.classNames, locale2 = _a.locale, labelWeekNumber2 = _a.labels.labelWeekNumber, formatWeekNumber2 = _a.formatters.formatWeekNumber;
  var handleClick = function(e) {
    onWeekNumberClick === null || onWeekNumberClick === void 0 ? void 0 : onWeekNumberClick(weekNumber, dates, e);
  };
  var content = formatWeekNumber2(Number(weekNumber), { locale: locale2 });
  if (!onWeekNumberClick) {
    return React$1.createElement("span", { className: classNames.weeknumber, style: styles.weeknumber }, content);
  }
  var label = labelWeekNumber2(Number(weekNumber), { locale: locale2 });
  return React$1.createElement(Button, { "aria-label": label, className: classNames.weeknumber, style: styles.weeknumber, onClick: handleClick }, content);
}
var defaultClassNames = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_outside: "rdp-day_outside"
};
function formatCaption(month, options) {
  return format(month, "LLLL y", options);
}
function formatDay(day, options) {
  return format(day, "d", options);
}
function formatMonthCaption(month, options) {
  return format(month, "LLLL", options);
}
function formatWeekNumber(weekNumber) {
  return "" + weekNumber;
}
function formatWeekdayName(weekday, options) {
  return format(weekday, "cccccc", options);
}
function formatYearCaption(year, options) {
  return format(year, "yyyy", options);
}
var formatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatWeekNumber,
  formatWeekdayName,
  formatYearCaption
});
var labelDay = function(day, modifers, options) {
  return format(day, "do MMMM (EEEE)", options);
};
var labelMonthDropdown = function() {
  return "Month: ";
};
var labelNext = function() {
  return "Go to next month";
};
var labelPrevious = function() {
  return "Go to previous month";
};
var labelWeekday = function(day, options) {
  return format(day, "cccc", options);
};
var labelWeekNumber = function(n2) {
  return "Week n. " + n2;
};
var labelYearDropdown = function() {
  return "Year: ";
};
var labels = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  labelDay,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekday,
  labelWeekNumber,
  labelYearDropdown
});
function parseFromToProps(props) {
  var fromYear = props.fromYear, toYear = props.toYear, fromMonth = props.fromMonth, toMonth = props.toMonth;
  var fromDate = props.fromDate, toDate2 = props.toDate;
  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  }
  if (toMonth) {
    toDate2 = startOfMonth(toMonth);
  } else if (toYear) {
    toDate2 = new Date(toYear, 11, 31);
  }
  return {
    fromDate: fromDate ? startOfDay(fromDate) : void 0,
    toDate: toDate2 ? startOfDay(toDate2) : void 0
  };
}
var DayPickerContext = React$1.createContext(void 0);
function DayPickerProvider(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  var children = props.children, initialProps = props.initialProps;
  var locale2 = (_a = initialProps.locale) !== null && _a !== void 0 ? _a : enUS;
  var numberOfMonths = (_b = initialProps.numberOfMonths) !== null && _b !== void 0 ? _b : 1;
  var today = (_c = initialProps.today) !== null && _c !== void 0 ? _c : new Date();
  var _h = parseFromToProps(initialProps), fromDate = _h.fromDate, toDate2 = _h.toDate;
  var captionLayout = (_d = initialProps.captionLayout) !== null && _d !== void 0 ? _d : "buttons";
  if (!fromDate && !toDate2)
    captionLayout = "buttons";
  initialProps.toYear;
  initialProps.fromYear;
  initialProps.toMonth;
  initialProps.fromMonth;
  var contextProps = __rest(initialProps, ["toYear", "fromYear", "toMonth", "fromMonth"]);
  var context = __assign(__assign({}, contextProps), {
    captionLayout,
    fromDate,
    toDate: toDate2,
    today,
    locale: locale2,
    modifierClassNames: (_e = initialProps.modifierClassNames) !== null && _e !== void 0 ? _e : {},
    modifierPrefix: "rdp-day_",
    modifiers: (_f = initialProps.modifiers) !== null && _f !== void 0 ? _f : {},
    numberOfMonths,
    styles: (_g = initialProps.styles) !== null && _g !== void 0 ? _g : {},
    classNames: __assign(__assign({}, defaultClassNames), initialProps.classNames),
    formatters: __assign(__assign({}, formatters), initialProps.formatters),
    labels: __assign(__assign({}, labels), initialProps.labels),
    components: __assign({ Caption, CaptionLabel, Day, DayContent, Dropdown, Footer, Head, IconDropdown, IconRight, IconLeft, Row, WeekNumber }, initialProps.components)
  });
  return React$1.createElement(DayPickerContext.Provider, { value: context }, children);
}
function useDayPicker() {
  var context = React$1.useContext(DayPickerContext);
  if (!context) {
    throw new Error("Context is not defined. useDayPicker must be used within a DayPickerProvider with a valid values.");
  }
  return context;
}
function getOutsideEndDays(month, options) {
  var days = [];
  var lastDayOfWeek = endOfWeek(month, options);
  var endDiff = differenceInCalendarDays(lastDayOfWeek, month);
  for (var i = 1; i <= endDiff; i++) {
    var dayDate = addDays(month, i);
    days.push(dayDate);
  }
  return days;
}
function getOutsideStartDays(month, options) {
  var days = [];
  var firstDayOfWeek = startOfWeek(month, options);
  var startDiff = differenceInCalendarDays(month, firstDayOfWeek);
  for (var i = 0; i < startDiff; i++) {
    var newDay = addDays(firstDayOfWeek, i);
    days.push(newDay);
  }
  return days;
}
function getWeeks(month, _a) {
  var locale2 = _a.locale, fixedWeeks = _a.fixedWeeks;
  var monthStart = startOfMonth(month);
  var monthEnd = endOfMonth(month);
  var diff = differenceInCalendarDays(monthEnd, monthStart);
  var weeks = [];
  var lastWeek = { weekNumber: 0, dates: [] };
  for (var i = 0; i <= diff; i++) {
    var date = addDays(monthStart, i);
    var week = getWeek(date, { locale: locale2 });
    if (lastWeek.weekNumber !== week) {
      var startDays = getOutsideStartDays(date, { locale: locale2 });
      lastWeek = { weekNumber: week, dates: startDays };
      weeks.push(lastWeek);
    }
    lastWeek.dates.push(date);
  }
  var lastDay = lastWeek.dates[lastWeek.dates.length - 1];
  var endDays = getOutsideEndDays(lastDay, { locale: locale2 });
  lastWeek.dates = lastWeek.dates.concat(endDays);
  if (fixedWeeks) {
    var lastWeekDate = lastWeek.dates[lastWeek.dates.length - 1];
    var weeksInMonth = getWeeksInMonth(month, { locale: locale2 });
    if (weeksInMonth < 6) {
      var diffDays = differenceInCalendarDays(addWeeks(lastWeekDate, 6 - weeksInMonth), lastWeekDate);
      for (var i = 0; i < diffDays; i++) {
        var date = addDays(lastWeekDate, i + 1);
        var week = getWeek(date, { locale: locale2 });
        if (lastWeek.weekNumber !== week) {
          lastWeek = { weekNumber: week, dates: [] };
          weeks.push(lastWeek);
        }
        lastWeek.dates.push(date);
      }
    }
  }
  return weeks;
}
function Table(props) {
  var _a = useDayPicker(), locale2 = _a.locale, classNames = _a.classNames, styles = _a.styles, hideHead = _a.hideHead, fixedWeeks = _a.fixedWeeks, _b = _a.components, Head2 = _b.Head, Row2 = _b.Row, Footer2 = _b.Footer;
  var weeks = getWeeks(props.displayMonth, { locale: locale2, fixedWeeks });
  return React$1.createElement("table", { className: classNames.table, style: styles.table, role: "grid", "aria-labelledby": props["aria-labelledby"] }, !hideHead && React$1.createElement(Head2, null), React$1.createElement("tbody", { className: classNames.tbody, style: styles.tbody }, weeks.map(function(week) {
    return React$1.createElement(Row2, { displayMonth: props.displayMonth, key: week.weekNumber, dates: week.dates, weekNumber: week.weekNumber });
  })), React$1.createElement(Footer2, null));
}
function Month(props) {
  var _a;
  var _b = useDayPicker(), dir = _b.dir, classNames = _b.classNames, styles = _b.styles, Caption2 = _b.components.Caption;
  var displayMonths = useNavigation().displayMonths;
  var captionId = useId();
  var className = [classNames.month];
  var style = styles.month;
  var isStart = props.displayIndex === 0;
  var isEnd = props.displayIndex === displayMonths.length - 1;
  var isCenter = !isStart && !isEnd;
  if (dir === "rtl") {
    _a = [isStart, isEnd], isEnd = _a[0], isStart = _a[1];
  }
  if (isStart) {
    className.push(classNames.caption_start);
    style = __assign(__assign({}, style), styles.caption_start);
  }
  if (isEnd) {
    className.push(classNames.caption_end);
    style = __assign(__assign({}, style), styles.caption_end);
  }
  if (isCenter) {
    className.push(classNames.caption_between);
    style = __assign(__assign({}, style), styles.caption_between);
  }
  return React$1.createElement("div", { key: props.displayIndex, className: className.join(" "), style }, React$1.createElement(Caption2, { id: captionId, displayMonth: props.displayMonth }), React$1.createElement(Table, { "aria-labelledby": captionId, displayMonth: props.displayMonth }));
}
function Root() {
  var _a = useDayPicker(), dir = _a.dir, className = _a.className, classNames = _a.classNames, style = _a.style, styles = _a.styles, numberOfMonths = _a.numberOfMonths, showWeekNumber = _a.showWeekNumber, initialFocus = _a.initialFocus;
  var _b = useFocus(), focusTarget = _b.focusTarget, focus = _b.focus;
  var _c = React$1.useState(false), hasInitialFocus = _c[0], setHasInitialFocus = _c[1];
  var displayMonths = useNavigation().displayMonths;
  var rootClassNames = [className !== null && className !== void 0 ? className : classNames.root];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames.multiple_months);
  }
  if (showWeekNumber) {
    rootClassNames.push(classNames.with_weeknumber);
  }
  React$1.useEffect(function() {
    if (initialFocus && !hasInitialFocus && focusTarget) {
      focus(focusTarget);
      setHasInitialFocus(true);
    }
  }, [initialFocus, hasInitialFocus, focus, focusTarget]);
  return React$1.createElement("div", { className: rootClassNames.join(" "), style: __assign(__assign({}, styles.root), style), dir }, React$1.createElement("div", { className: classNames.months, style: styles.months }, displayMonths.map(function(month, i) {
    return React$1.createElement(Month, { key: i, displayIndex: i, displayMonth: month });
  })));
}
function RootProvider(props) {
  var children = props.children, initialProps = __rest(props, ["children"]);
  return React$1.createElement(DayPickerProvider, { initialProps }, React$1.createElement(NavigationProvider, null, React$1.createElement(SelectSingleProvider, { initialProps }, React$1.createElement(SelectMultipleProvider, { initialProps }, React$1.createElement(SelectRangeProvider, { initialProps }, React$1.createElement(ModifiersProvider, null, React$1.createElement(FocusProvider, null, children)))))));
}
function DayPicker(props) {
  return React$1.createElement(RootProvider, __assign({}, props), React$1.createElement(Root, null));
}
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? _react_17_0_2_react.exports.useLayoutEffect : _react_17_0_2_react.exports.useEffect;
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance2.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    var it2;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      it2 = a.entries();
      while (!(i = it2.next()).done)
        if (!b.has(i.value[0]))
          return false;
      it2 = a.entries();
      while (!(i = it2.next()).done)
        if (!equal(i.value[1], b.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      it2 = a.entries();
      while (!(i = it2.next()).done)
        if (!b.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var _reactFastCompare_3_2_0_reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error2) {
    if ((error2.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error2;
  }
};
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = _react_17_0_2_react.exports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = _react_17_0_2_react.exports.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = _react_17_0_2_react.exports.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        setState({
          styles: fromEntries(elements.map(function(element) {
            return [element, state2.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function(element) {
            return [element, state2.attributes[element]];
          }))
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = _react_17_0_2_react.exports.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (_reactFastCompare_3_2_0_reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = _react_17_0_2_react.exports.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
var _propTypes_15_8_1_propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  _propTypes_15_8_1_propTypes.exports = factoryWithThrowingShims();
}
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var matches = typeof Element === "undefined" ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var isContentEditable = function isContentEditable2(node) {
  return node.contentEditable === "true";
};
var getTabindex = function getTabindex2(node) {
  var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (isContentEditable(node)) {
    return 0;
  }
  if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || node.ownerDocument;
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isHidden = function isHidden2(node, displayCheck) {
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full") {
    while (node) {
      if (getComputedStyle(node).display === "none") {
        return true;
      }
      node = node.parentElement;
    }
  } else if (displayCheck === "non-zero-area") {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (isInput(node) || node.tagName === "SELECT" || node.tagName === "TEXTAREA" || node.tagName === "BUTTON") {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            if (child.contains(node)) {
              return false;
            }
            return true;
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }
  return true;
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  candidates.forEach(function(candidate, i) {
    var candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
/*!
* focus-trap 6.7.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys$7(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var activeFocusTraps = function() {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }
      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return e.key === "Tab" || e.keyCode === 9;
};
var delay = function delay2(fn2) {
  return setTimeout(fn2, 0);
};
var findIndex = function findIndex2(arr, fn2) {
  var idx = -1;
  arr.every(function(value, i) {
    if (fn2(value)) {
      idx = i;
      return false;
    }
    return true;
  });
  return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var createFocusTrap$1 = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);
  var state = {
    containers: [],
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    delayInitialFocusTimer: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var containersContain = function containersContain2(element) {
    return !!(element && state.containers.some(function(container) {
      return container.contains(element);
    }));
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus");
    if (node === false) {
      return false;
    }
    if (node === void 0) {
      if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.tabbableGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container);
      if (tabbableNodes.length > 0) {
        return {
          container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }
      return void 0;
    }).filter(function(group) {
      return !!group;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
  };
  var tryFocus = function tryFocus2(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus2(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (containersContain(target)) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target)
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(e) {
    var target = getActualTarget(e);
    var targetContained = containersContain(target);
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };
  var checkTab = function checkTab2(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findIndex(state.tabbableGroups, function(_ref) {
        var container = _ref.container;
        return container.contains(target);
      });
      if (containerIndex < 0) {
        if (e.shiftKey) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (state.tabbableGroups[containerIndex].container === target || isFocusable(target) && !isTabbable(target))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (state.tabbableGroups[containerIndex].container === target || isFocusable(target) && !isTabbable(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };
  var checkKey = function checkKey2(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };
  var checkClick = function checkClick2(e) {
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    var target = getActualTarget(e);
    if (containersContain(target)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trap);
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkKey, true);
    return trap;
  };
  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      if (onActivate) {
        onActivate();
      }
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        if (onPostActivate) {
          onPostActivate();
        }
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(deactivateOptions, "onDeactivate");
      var onPostDeactivate = getOption(deactivateOptions, "onPostDeactivate");
      var checkCanReturnFocus = getOption(deactivateOptions, "checkCanReturnFocus");
      if (onDeactivate) {
        onDeactivate();
      }
      var returnFocus = getOption(deactivateOptions, "returnFocus", "returnFocusOnDeactivate");
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }
      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };
  trap.updateContainerElements(elements);
  return trap;
};
var focusTrap_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  createFocusTrap: createFocusTrap$1
});
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(focusTrap_esm);
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _classCallCheck$1(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits$1(subClass, superClass) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _createSuper$4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$4() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
var React = _react_17_0_2_react.exports;
var ReactDOM = _reactDom_17_0_2_reactDom.exports;
var PropTypes = _propTypes_15_8_1_propTypes.exports;
var _require = require$$3, createFocusTrap = _require.createFocusTrap;
var FocusTrap = /* @__PURE__ */ function(_React$Component) {
  _inherits$1(FocusTrap2, _React$Component);
  var _super = _createSuper$4(FocusTrap2);
  function FocusTrap2(props) {
    var _this;
    _classCallCheck$1(this, FocusTrap2);
    _this = _super.call(this, props);
    _this.tailoredFocusTrapOptions = {
      returnFocusOnDeactivate: false
    };
    _this.returnFocusOnDeactivate = true;
    var focusTrapOptions = props.focusTrapOptions;
    for (var optionName in focusTrapOptions) {
      if (!Object.prototype.hasOwnProperty.call(focusTrapOptions, optionName)) {
        continue;
      }
      if (optionName === "returnFocusOnDeactivate") {
        _this.returnFocusOnDeactivate = !!focusTrapOptions[optionName];
        continue;
      }
      if (optionName === "onPostDeactivate") {
        _this.onPostDeactivate = focusTrapOptions[optionName];
        continue;
      }
      _this.tailoredFocusTrapOptions[optionName] = focusTrapOptions[optionName];
    }
    _this.focusTrapElements = props.containerElements || [];
    _this.updatePreviousElement();
    return _this;
  }
  _createClass$1(FocusTrap2, [{
    key: "getDocument",
    value: function getDocument() {
      return this.props.focusTrapOptions.document || (typeof document !== "undefined" ? document : void 0);
    }
  }, {
    key: "getNodeForOption",
    value: function getNodeForOption(optionName) {
      var optionValue = this.tailoredFocusTrapOptions[optionName];
      if (!optionValue) {
        return null;
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        var _this$getDocument;
        node = (_this$getDocument = this.getDocument()) === null || _this$getDocument === void 0 ? void 0 : _this$getDocument.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` refers to no known node"));
        }
      }
      if (typeof optionValue === "function") {
        node = optionValue();
        if (!node) {
          throw new Error("`".concat(optionName, "` did not return a node"));
        }
      }
      return node;
    }
  }, {
    key: "getReturnFocusNode",
    value: function getReturnFocusNode() {
      var node = this.getNodeForOption("setReturnFocus");
      return node ? node : this.previouslyFocusedElement;
    }
  }, {
    key: "updatePreviousElement",
    value: function updatePreviousElement() {
      var currentDocument = this.getDocument();
      if (currentDocument) {
        this.previouslyFocusedElement = currentDocument.activeElement;
      }
    }
  }, {
    key: "deactivateTrap",
    value: function deactivateTrap() {
      var _this2 = this;
      var _this$tailoredFocusTr = this.tailoredFocusTrapOptions, checkCanReturnFocus = _this$tailoredFocusTr.checkCanReturnFocus, _this$tailoredFocusTr2 = _this$tailoredFocusTr.preventScroll, preventScroll = _this$tailoredFocusTr2 === void 0 ? false : _this$tailoredFocusTr2;
      if (this.focusTrap) {
        this.focusTrap.deactivate({
          returnFocus: false
        });
      }
      var finishDeactivation = function finishDeactivation2() {
        var returnFocusNode = _this2.getReturnFocusNode();
        var canReturnFocus = (returnFocusNode === null || returnFocusNode === void 0 ? void 0 : returnFocusNode.focus) && _this2.returnFocusOnDeactivate;
        if (canReturnFocus) {
          returnFocusNode.focus({
            preventScroll
          });
        }
        if (_this2.onPostDeactivate) {
          _this2.onPostDeactivate.call(null);
        }
      };
      if (checkCanReturnFocus) {
        checkCanReturnFocus(this.getReturnFocusNode()).then(finishDeactivation, finishDeactivation);
      } else {
        finishDeactivation();
      }
    }
  }, {
    key: "setupFocusTrap",
    value: function setupFocusTrap() {
      if (!this.focusTrap) {
        var focusTrapElementDOMNodes = this.focusTrapElements.map(ReactDOM.findDOMNode);
        var nodesExist = focusTrapElementDOMNodes.some(Boolean);
        if (nodesExist) {
          this.focusTrap = this.props._createFocusTrap(focusTrapElementDOMNodes, this.tailoredFocusTrapOptions);
          if (this.props.active) {
            this.focusTrap.activate();
          }
          if (this.props.paused) {
            this.focusTrap.pause();
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.active) {
        this.setupFocusTrap();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.focusTrap) {
        if (prevProps.containerElements !== this.props.containerElements) {
          this.focusTrap.updateContainerElements(this.props.containerElements);
        }
        var hasActivated = !prevProps.active && this.props.active;
        var hasDeactivated = prevProps.active && !this.props.active;
        var hasPaused = !prevProps.paused && this.props.paused;
        var hasUnpaused = prevProps.paused && !this.props.paused;
        if (hasActivated) {
          this.updatePreviousElement();
          this.focusTrap.activate();
        }
        if (hasDeactivated) {
          this.deactivateTrap();
          return;
        }
        if (hasPaused) {
          this.focusTrap.pause();
        }
        if (hasUnpaused) {
          this.focusTrap.unpause();
        }
      } else {
        if (prevProps.containerElements !== this.props.containerElements) {
          this.focusTrapElements = this.props.containerElements;
        }
        if (this.props.active) {
          this.updatePreviousElement();
          this.setupFocusTrap();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deactivateTrap();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var child = this.props.children ? React.Children.only(this.props.children) : void 0;
      if (child) {
        if (child.type && child.type === React.Fragment) {
          throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
        }
        var composedRefCallback = function composedRefCallback2(element) {
          var containerElements = _this3.props.containerElements;
          if (child) {
            if (typeof child.ref === "function") {
              child.ref(element);
            } else if (child.ref) {
              child.ref.current = element;
            }
          }
          _this3.focusTrapElements = containerElements ? containerElements : [element];
        };
        var childWithRef = React.cloneElement(child, {
          ref: composedRefCallback
        });
        return childWithRef;
      }
      return null;
    }
  }]);
  return FocusTrap2;
}(React.Component);
var ElementType = typeof Element === "undefined" ? Function : Element;
FocusTrap.propTypes = {
  active: PropTypes.bool,
  paused: PropTypes.bool,
  focusTrapOptions: PropTypes.shape({
    document: PropTypes.object,
    onActivate: PropTypes.func,
    onPostActivate: PropTypes.func,
    checkCanFocusTrap: PropTypes.func,
    onDeactivate: PropTypes.func,
    onPostDeactivate: PropTypes.func,
    checkCanReturnFocus: PropTypes.func,
    initialFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string, PropTypes.func, PropTypes.bool]),
    fallbackFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string, PropTypes.func]),
    escapeDeactivates: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    clickOutsideDeactivates: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    returnFocusOnDeactivate: PropTypes.bool,
    setReturnFocus: PropTypes.oneOfType([PropTypes.instanceOf(ElementType), PropTypes.string, PropTypes.func]),
    allowOutsideClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    preventScroll: PropTypes.bool
  }),
  containerElements: PropTypes.arrayOf(PropTypes.instanceOf(ElementType)),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.instanceOf(ElementType)
  ])
};
FocusTrap.defaultProps = {
  active: true,
  paused: false,
  focusTrapOptions: {},
  _createFocusTrap: createFocusTrap
};
var focusTrapReact = FocusTrap;
function useToggle(initialState = false) {
  const [state, setState] = _react_17_0_2_react.exports.useState(initialState);
  const toggle = _react_17_0_2_react.exports.useCallback((nextState) => {
    if (nextState !== void 0) {
      setState(nextState);
    } else {
      setState((state2) => !state2);
    }
  }, []);
  return [state, toggle];
}
const getCursorPostion = (input) => {
  const {
    offsetLeft: inputX,
    offsetTop: inputY,
    offsetHeight: inputH,
    offsetWidth: inputW,
    selectionEnd: selectionPoint
  } = input;
  const div = document.createElement("div");
  const copyStyle = window.getComputedStyle(input);
  for (const item of copyStyle) {
    div.style.setProperty(item, copyStyle.getPropertyValue(item));
  }
  div.style.position = "fixed";
  div.style.visibility = "hidden";
  div.style.whiteSpace = "pre-wrap";
  const swap = ".";
  const inputValue = input.tagName === "INPUT" ? input.value.replace(/ /g, swap) : input.value;
  const textContent = inputValue.substring(0, selectionPoint || 0);
  div.textContent = textContent;
  if (input.tagName === "TEXTAREA") {
    div.style.height = "auto";
  }
  const span = document.createElement("span");
  span.textContent = inputValue.substring(selectionPoint || 0) || ".";
  div.appendChild(span);
  document.body.appendChild(div);
  const {
    offsetLeft: spanX,
    offsetTop: spanY,
    offsetHeight: spanH,
    offsetWidth: spanW
  } = span;
  document.body.removeChild(div);
  return {
    x: inputX + spanX,
    y: inputY + spanY,
    h: inputH + spanH,
    w: inputW + spanW
  };
};
let isList;
let isEditor = false;
let isEditorGo = false;
let positionX;
const MemoEditor = () => {
  const {
    globalState
  } = _react_17_0_2_react.exports.useContext(appContext);
  const [isListShown, toggleList] = useToggle(false);
  const [isEditorShown, toggleEditor] = useToggle(false);
  const editorRef = _react_17_0_2_react.exports.useRef(null);
  const prevGlobalStateRef = _react_17_0_2_react.exports.useRef(globalState);
  const [selected, setSelected] = _react_17_0_2_react.exports.useState();
  const [isPopperOpen, setIsPopperOpen] = _react_17_0_2_react.exports.useState(false);
  const {
    app: app2
  } = dailyNotesService.getState();
  const popperRef = _react_17_0_2_react.exports.useRef(null);
  const [popperElement, setPopperElement] = _react_17_0_2_react.exports.useState(null);
  let popper2;
  _react_17_0_2_react.exports.useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    if (DefaultPrefix === "List") {
      isList = false;
      toggleList(false);
    } else {
      isList = true;
      toggleList(true);
    }
  }, []);
  _react_17_0_2_react.exports.useEffect(() => {
    var _a;
    if (!editorRef.current) {
      return;
    }
    if ((require$$0.Platform.isMobile === true || window.innerWidth < 875) && UseButtonToShowEditor) {
      toggleEditor(true);
    }
    if (FocusOnEditor) {
      (_a = editorRef.current) == null ? void 0 : _a.focus();
    }
  }, []);
  _react_17_0_2_react.exports.useEffect(() => {
    var _a, _b;
    if (!editorRef.current) {
      return;
    }
    if (UseButtonToShowEditor === true && DefaultEditorLocation === "Bottom" && require$$0.Platform.isMobile === true && window.innerWidth < 875) {
      const leaves = app2.workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
      let memosHeight;
      let leafView;
      if (leaves.length > 0) {
        const leaf = leaves[0];
        leafView = leaf.view.containerEl;
        memosHeight = leafView.offsetHeight;
      } else {
        leafView = document;
        memosHeight = window.innerHeight;
      }
      const divThis = document.createElement("img");
      const memoEditorDiv = leafView.querySelector("div[data-type='memos_view'] .view-content .memo-editor-wrapper");
      divThis.src = `${showEditorSvg}`;
      if (isEditorShown) {
        divThis.className = "memo-show-editor-button hidden";
      } else {
        divThis.className = "memo-show-editor-button";
      }
      const buttonTop = memosHeight - 200;
      const buttonLeft = window.innerWidth / 2 - 25;
      divThis.style.top = buttonTop + "px";
      divThis.style.left = buttonLeft + "px";
      divThis.onclick = function() {
        let scaleElementAni = divThis.animate([
          {
            transform: "rotate(0deg) scale(1)"
          },
          {
            transform: "rotate(60deg) scale(1.5)"
          }
        ], {
          duration: 300,
          iterations: Infinity
        });
        setTimeout(() => {
          var _a2;
          divThis.className = "memo-show-editor-button hidden";
          handleShowEditor();
          (_a2 = editorRef.current) == null ? void 0 : _a2.focus();
          scaleElementAni.reverse();
        }, 300);
      };
      leafView.querySelector(".content-wrapper").prepend(divThis);
      const memolistScroll = leafView.querySelector(".memolist-wrapper");
      memolistScroll.onscroll = function() {
        if (isEditor && !isEditorGo) {
          isEditorGo = true;
          let scaleEditorElementAni = memoEditorDiv.animate([
            {
              transform: "scale(1)",
              opacity: 1
            },
            {
              transform: "scale(0.4)",
              opacity: 0
            }
          ], {
            duration: 300,
            iterations: 1
          });
          let scaleOneElementAni;
          setTimeout(() => {
            scaleOneElementAni = divThis.animate([
              {
                transform: "rotate(20deg) scale(1.5)"
              },
              {
                transform: "rotate(0deg) scale(1)"
              }
            ], {
              duration: 100,
              iterations: 1
            });
          }, 300);
          setTimeout(() => {
            handleShowEditor(true);
            divThis.className = "memo-show-editor-button";
          }, 300);
          setTimeout(() => {
            scaleOneElementAni.cancel();
            scaleEditorElementAni.reverse();
          }, 700);
        }
      };
    } else if (UseButtonToShowEditor === false && DefaultEditorLocation === "Bottom" && require$$0.Platform.isMobile === true && window.innerWidth < 875) {
      handleShowEditor(false);
      if (FocusOnEditor) {
        (_a = editorRef.current) == null ? void 0 : _a.focus();
      }
    } else {
      if (!isEditor) {
        handleShowEditor(false);
      }
      if (FocusOnEditor) {
        (_b = editorRef.current) == null ? void 0 : _b.focus();
      }
    }
  }, []);
  if (!require$$0.Platform.isMobile) {
    popper2 = usePopper(popperRef.current, popperElement, {
      placement: "right-end",
      modifiers: [{
        name: "flip",
        options: {
          allowedAutoPlacements: ["bottom"],
          rootBoundary: "document"
        }
      }]
    });
  } else if (require$$0.Platform.isMobile && DefaultEditorLocation !== "Bottom") {
    const seletorPopupWidth = 280;
    if (window.innerWidth - positionX > seletorPopupWidth * 1.2) {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "right-end",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["left-end"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    } else if (window.innerWidth - positionX < seletorPopupWidth && window.innerWidth > seletorPopupWidth * 1.5) {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "left-end",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["right-end"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    } else {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "bottom",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["bottom"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    }
  } else if (require$$0.Platform.isMobile && DefaultEditorLocation === "Bottom") {
    const seletorPopupWidth = 280;
    if (window.innerWidth - positionX > seletorPopupWidth * 1.2) {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "top-end",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["top-start"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    } else if (window.innerWidth - positionX < seletorPopupWidth && positionX > seletorPopupWidth) {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "top-start",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["top-end"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    } else {
      popper2 = usePopper(popperRef.current, popperElement, {
        placement: "top",
        modifiers: [{
          name: "flip",
          options: {
            allowedAutoPlacements: ["top"],
            rootBoundary: "document"
          }
        }, {
          name: "preventOverflow",
          options: {
            rootBoundary: "document"
          }
        }]
      });
    }
  }
  const closePopper = () => {
    setIsPopperOpen(false);
  };
  _react_17_0_2_react.exports.useEffect(() => {
    var _a, _b, _c, _d, _e;
    if (globalState.markMemoId) {
      const editorCurrentValue = (_a = editorRef.current) == null ? void 0 : _a.getContent();
      const memoLinkText = `${editorCurrentValue ? "\n" : ""}${t("MARK")}: [@MEMO](${globalState.markMemoId})`;
      (_b = editorRef.current) == null ? void 0 : _b.insertText(memoLinkText);
      globalStateService.setMarkMemoId("");
    }
    if (globalState.editMemoId && globalState.editMemoId !== prevGlobalStateRef.current.editMemoId) {
      const editMemo = memoService.getMemoById(globalState.editMemoId);
      if (editMemo) {
        (_d = editorRef.current) == null ? void 0 : _d.setContent((_c = editMemo.content.replace(/\<br\>/g, "\n")) != null ? _c : "");
        (_e = editorRef.current) == null ? void 0 : _e.focus();
      }
    }
    prevGlobalStateRef.current = globalState;
  }, [globalState.markMemoId, globalState.editMemoId]);
  _react_17_0_2_react.exports.useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    const handlePasteEvent = async (event) => {
      var _a;
      if (event.clipboardData && event.clipboardData.files.length > 0) {
        event.preventDefault();
        const file = event.clipboardData.files[0];
        const url = await handleUploadFile(file);
        if (url) {
          (_a = editorRef.current) == null ? void 0 : _a.insertText(url);
        }
      }
    };
    const handleDropEvent = async (event) => {
      var _a;
      if (event.dataTransfer && event.dataTransfer.files.length > 0) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const url = await handleUploadFile(file);
        if (url) {
          (_a = editorRef.current) == null ? void 0 : _a.insertText(url);
        }
      }
    };
    const handleClickEvent = () => {
      var _a, _b;
      handleContentChange((_b = (_a = editorRef.current) == null ? void 0 : _a.element.value) != null ? _b : "");
    };
    const handleKeyDownEvent = () => {
      setTimeout(() => {
        var _a, _b;
        handleContentChange((_b = (_a = editorRef.current) == null ? void 0 : _a.element.value) != null ? _b : "");
      });
    };
    editorRef.current.element.addEventListener("paste", handlePasteEvent);
    editorRef.current.element.addEventListener("drop", handleDropEvent);
    editorRef.current.element.addEventListener("click", handleClickEvent);
    editorRef.current.element.addEventListener("keydown", handleKeyDownEvent);
    return () => {
      var _a, _b;
      (_a = editorRef.current) == null ? void 0 : _a.element.removeEventListener("paste", handlePasteEvent);
      (_b = editorRef.current) == null ? void 0 : _b.element.removeEventListener("drop", handleDropEvent);
    };
  }, []);
  const handleUploadFile = _react_17_0_2_react.exports.useCallback(async (file) => {
    const {
      type
    } = file;
    if (!type.startsWith("image")) {
      return;
    }
    try {
      const image2 = await resourceService.upload(file);
      const url = `${image2}`;
      return url;
    } catch (error2) {
      new require$$0.Notice(error2);
    }
  }, []);
  const handleSaveBtnClick = _react_17_0_2_react.exports.useCallback(async (content) => {
    if (content === "") {
      new require$$0.Notice("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u5440");
      return;
    }
    const {
      editMemoId
    } = globalStateService.getState();
    content = content.replaceAll("&nbsp;", " ");
    setEditorContentCache("");
    try {
      if (editMemoId) {
        const prevMemo = memoService.getMemoById(editMemoId);
        if (prevMemo && prevMemo.content !== content) {
          const editedMemo = await memoService.updateMemo(prevMemo.id, prevMemo.content, content, prevMemo.memoType);
          editedMemo.updatedAt = utils$1.getDateTimeString(Date.now());
          memoService.editMemo(editedMemo);
        }
        globalStateService.setEditMemoId("");
      } else {
        const newMemo = await memoService.createMemo(content, isList);
        memoService.pushMemo(newMemo);
        locationService.clearQuery();
      }
    } catch (error2) {
      new require$$0.Notice(error2.message);
    }
    setEditorContentCache("");
  }, []);
  const handleCancelBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    var _a;
    globalStateService.setEditMemoId("");
    (_a = editorRef.current) == null ? void 0 : _a.setContent("");
    setEditorContentCache("");
  }, []);
  const handleContentChange = _react_17_0_2_react.exports.useCallback((content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    if (tempDiv.innerText.trim() === "") {
      content = "";
    }
    setEditorContentCache(content);
    if (editorRef.current) {
      const currentValue = editorRef.current.getContent();
      const selectionStart = editorRef.current.element.selectionStart;
      const prevString = currentValue.slice(0, selectionStart);
      const nextString = currentValue.slice(selectionStart);
      if ((prevString.endsWith("@") || prevString.endsWith("\u{1F4C6}")) && nextString.startsWith(" ")) {
        updateDateSelectorPopupPosition();
        setIsPopperOpen(true);
      } else if ((prevString.endsWith("@") || prevString.endsWith("\u{1F4C6}")) && nextString === "") {
        updateDateSelectorPopupPosition();
        setIsPopperOpen(true);
      } else {
        setIsPopperOpen(false);
      }
      setTimeout(() => {
        var _a;
        (_a = editorRef.current) == null ? void 0 : _a.focus();
      });
    }
  }, []);
  const handleDateInsertTrigger = (date) => {
    if (!editorRef.current) {
      return;
    }
    if (date) {
      closePopper();
      isList = true;
      toggleList(true);
    }
    const currentValue = editorRef.current.getContent();
    const selectionStart = editorRef.current.element.selectionStart;
    const prevString = currentValue.slice(0, selectionStart);
    const nextString = currentValue.slice(selectionStart);
    const todayMoment = require$$0.moment(date);
    if (!editorRef.current) {
      return;
    }
    if (prevString.endsWith("@")) {
      if (InsertDateFormat === "Dataview") {
        editorRef.current.element.value = currentValue.slice(0, editorRef.current.element.selectionStart - 1) + "[due::" + todayMoment.format("YYYY-MM-DD") + "]" + nextString;
        editorRef.current.element.setSelectionRange(selectionStart + 17, selectionStart + 17);
        editorRef.current.focus();
        handleContentChange(editorRef.current.element.value);
      } else if (InsertDateFormat === "Tasks") {
        editorRef.current.element.value = currentValue.slice(0, editorRef.current.element.selectionStart - 1) + "\u{1F4C6}" + todayMoment.format("YYYY-MM-DD") + nextString;
        editorRef.current.element.setSelectionRange(selectionStart + 11, selectionStart + 11);
        editorRef.current.focus();
        handleContentChange(editorRef.current.element.value);
      }
    } else {
      editorRef.current.element.value = prevString + todayMoment.format("YYYY-MM-DD") + nextString;
      editorRef.current.element.setSelectionRange(selectionStart + 10, selectionStart + 10);
      editorRef.current.focus();
      handleContentChange(editorRef.current.element.value);
    }
  };
  const handleChangeStatus = () => {
    if (!editorRef.current) {
      return;
    }
    if (isList) {
      isList = false;
      toggleList(false);
    } else {
      isList = true;
      toggleList(true);
    }
  };
  const handleShowEditor = (flag) => {
    if (!editorRef.current) {
      return;
    }
    if (isEditor || flag === true) {
      isEditor = false;
      toggleEditor(true);
    } else {
      isEditor = true;
      isEditorGo = false;
      toggleEditor(false);
    }
  };
  const handleTagTextBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const currentValue = editorRef.current.getContent();
    const selectionStart = editorRef.current.element.selectionStart;
    const prevString = currentValue.slice(0, selectionStart);
    const nextString = currentValue.slice(selectionStart);
    let nextValue = prevString + "# " + nextString;
    let cursorIndex = prevString.length + 1;
    if (prevString.endsWith("#") && nextString.startsWith(" ")) {
      nextValue = prevString.slice(0, prevString.length - 1) + nextString.slice(1);
      cursorIndex = prevString.length - 1;
    }
    editorRef.current.element.value = nextValue;
    editorRef.current.element.setSelectionRange(cursorIndex, cursorIndex);
    editorRef.current.focus();
    handleContentChange(editorRef.current.element.value);
  }, []);
  const updateDateSelectorPopupPosition = _react_17_0_2_react.exports.useCallback(() => {
    if (!editorRef.current || !popperRef.current) {
      return;
    }
    const seletorPopupWidth = 280;
    const editorWidth = editorRef.current.element.clientWidth;
    const {
      x: x2,
      y: y2
    } = getCursorPostion(editorRef.current.element);
    let left2;
    let top2;
    if (!require$$0.Platform.isMobile) {
      left2 = x2 + seletorPopupWidth + 16 > editorWidth ? x2 + 2 : x2 + 2;
      top2 = y2 + 20;
    } else {
      if (window.innerWidth - x2 > seletorPopupWidth) {
        left2 = x2 + seletorPopupWidth + 16 > editorWidth ? x2 + 2 : x2 + 2;
      } else if (window.innerWidth - x2 < seletorPopupWidth) {
        left2 = x2 + seletorPopupWidth + 16 > editorWidth ? x2 + 18 : x2 + 18;
      } else {
        left2 = editorRef.current.element.clientWidth / 2;
      }
      if (DefaultEditorLocation === "Bottom" && window.innerWidth > 875) {
        top2 = y2 + 20;
      } else if (DefaultEditorLocation === "Bottom" && window.innerWidth <= 875) {
        top2 = y2 + 35;
      } else if (DefaultEditorLocation === "Top" && window.innerWidth <= 875) {
        top2 = y2 + 20;
      }
    }
    positionX = x2;
    popperRef.current.style.left = `${left2}px`;
    popperRef.current.style.top = `${top2}px`;
  }, []);
  const handleUploadFileBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    const inputEl = document.createElement("input");
    document.body.appendChild(inputEl);
    inputEl.type = "file";
    inputEl.multiple = false;
    inputEl.accept = "image/png, image/gif, image/jpeg";
    inputEl.onchange = async () => {
      var _a;
      if (!inputEl.files || inputEl.files.length === 0) {
        return;
      }
      const file = inputEl.files[0];
      const url = await handleUploadFile(file);
      if (url) {
        (_a = editorRef.current) == null ? void 0 : _a.insertText(url);
      }
      document.body.removeChild(inputEl);
    };
    inputEl.click();
  }, []);
  const showEditStatus = Boolean(globalState.editMemoId);
  const editorConfig = _react_17_0_2_react.exports.useMemo(() => ({
    className: "memo-editor",
    initialContent: getEditorContentCache(),
    placeholder: t("What do you think now..."),
    showConfirmBtn: true,
    showCancelBtn: showEditStatus,
    showTools: true,
    onConfirmBtnClick: handleSaveBtnClick,
    onCancelBtnClick: handleCancelBtnClick,
    onContentChange: handleContentChange
  }), [showEditStatus]);
  return /* @__PURE__ */ jsxs("div", {
    className: `memo-editor-wrapper ${showEditStatus ? "edit-ing" : ""} ${isEditorShown ? "hidden" : ""}`,
    children: [/* @__PURE__ */ jsx("p", {
      className: `tip-text ${showEditStatus ? "" : "hidden"}`,
      children: "Modifying..."
    }), /* @__PURE__ */ jsx(Editor, __spreadProps(__spreadValues({
      ref: editorRef
    }, editorConfig), {
      tools: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("img", {
          className: "action-btn add-tag",
          src: tag,
          onClick: handleTagTextBtnClick
        }), /* @__PURE__ */ jsx("img", {
          className: "action-btn file-upload",
          src: imageSvg,
          onClick: handleUploadFileBtnClick
        }), /* @__PURE__ */ jsx("img", {
          className: "action-btn list-or-task",
          src: `${!isListShown ? journalSvg : taskSvg}`,
          onClick: handleChangeStatus
        })]
      })
    })), /* @__PURE__ */ jsx("div", {
      ref: popperRef,
      className: "date-picker",
      children: isPopperOpen && /* @__PURE__ */ jsx(focusTrapReact, {
        active: true,
        focusTrapOptions: {
          initialFocus: false,
          allowOutsideClick: true,
          clickOutsideDeactivates: true,
          onDeactivate: closePopper
        },
        children: /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({
          tabIndex: -1,
          style: popper2.styles.popper
        }, popper2.attributes.popper), {
          ref: setPopperElement,
          role: "dialog",
          children: /* @__PURE__ */ jsx(DayPicker, {
            initialFocus: isPopperOpen,
            mode: "single",
            defaultMonth: selected,
            selected,
            onSelect: handleDateInsertTrigger
          })
        }))
      })
    })]
  });
};
function getEditorContentCache() {
  var _a;
  return (_a = storage.get(["editorContentCache"]).editorContentCache) != null ? _a : "";
}
function setEditorContentCache(content) {
  storage.set({
    editorContentCache: content
  });
}
const relationConsts = [
  { text: "AND", value: "AND" },
  { text: "OR", value: "OR" }
];
const filterConsts = {
  TAG: {
    value: "TAG",
    text: t("TAG"),
    operators: [
      {
        text: t("INCLUDE"),
        value: "CONTAIN"
      },
      {
        text: t("EXCLUDE"),
        value: "NOT_CONTAIN"
      }
    ]
  },
  TYPE: {
    value: "TYPE",
    text: t("TYPE"),
    operators: [
      {
        value: "IS",
        text: t("IS")
      },
      {
        value: "IS_NOT",
        text: t("ISNOT")
      }
    ],
    values: [
      {
        value: "CONNECTED",
        text: t("LINKED")
      },
      {
        value: "NOT_TAGGED",
        text: t("NO TAGS")
      },
      {
        value: "LINKED",
        text: t("HAS LINKS")
      },
      {
        value: "IMAGED",
        text: t("HAS IMAGES")
      }
    ]
  },
  TEXT: {
    value: "TEXT",
    text: t("TEXT"),
    operators: [
      {
        value: "CONTAIN",
        text: t("INCLUDE")
      },
      {
        value: "NOT_CONTAIN",
        text: t("EXCLUDE")
      }
    ]
  }
};
const memoSpecialTypes = filterConsts["TYPE"].values;
const getTextWithMemoType = (type) => {
  for (const t2 of memoSpecialTypes) {
    if (t2.value === type) {
      return t2.text;
    }
  }
  return "";
};
const getDefaultFilter = () => {
  return {
    type: "TAG",
    value: {
      operator: "CONTAIN",
      value: ""
    },
    relation: "AND"
  };
};
const checkShouldShowMemoWithFilters = (memo2, filters) => {
  let shouldShow = true;
  for (const f2 of filters) {
    const { relation } = f2;
    const r2 = checkShouldShowMemo(memo2, f2);
    if (relation === "OR") {
      shouldShow = shouldShow || r2;
    } else {
      shouldShow = shouldShow && r2;
    }
  }
  return shouldShow;
};
const checkShouldShowMemo = (memo2, filter) => {
  var _a, _b;
  const {
    type,
    value: { operator, value }
  } = filter;
  if (value === "") {
    return true;
  }
  let shouldShow = true;
  if (type === "TAG") {
    let contained = true;
    const tagsSet = new Set();
    for (const t2 of Array.from((_a = memo2.content.match(TAG_REG)) != null ? _a : [])) {
      const tag2 = t2.replace(TAG_REG, "$1").trim();
      const items = tag2.split("/");
      let temp = "";
      for (const i of items) {
        temp += i;
        tagsSet.add(temp);
        temp += "/";
      }
    }
    for (const t2 of Array.from((_b = memo2.content.match(NOP_FIRST_TAG_REG)) != null ? _b : [])) {
      const tag2 = t2.replace(NOP_FIRST_TAG_REG, "$1").trim();
      const items = tag2.split("/");
      let temp = "";
      for (const i of items) {
        temp += i;
        tagsSet.add(temp);
        temp += "/";
      }
    }
    if (!tagsSet.has(value)) {
      contained = false;
    }
    if (operator === "NOT_CONTAIN") {
      contained = !contained;
    }
    shouldShow = contained;
  } else if (type === "TYPE") {
    let matched = false;
    if (value === "NOT_TAGGED" && memo2.content.match(TAG_REG) === null) {
      matched = true;
    } else if (value === "LINKED" && memo2.content.match(LINK_REG) !== null) {
      matched = true;
    } else if (value === "IMAGED" && memo2.content.match(IMAGE_URL_REG) !== null) {
      matched = true;
    } else if (value === "CONNECTED" && memo2.content.match(MEMO_LINK_REG) !== null) {
      matched = true;
    }
    if (operator === "IS_NOT") {
      matched = !matched;
    }
    shouldShow = matched;
  } else if (type === "TEXT") {
    let contained = memo2.content.includes(value);
    if (operator === "NOT_CONTAIN") {
      contained = !contained;
    }
    shouldShow = contained;
  }
  return shouldShow;
};
var searchBar = "";
var search = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+";
const SearchBar = () => {
  const {
    locationState: {
      query: {
        type: memoType
      }
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const handleMemoTypeItemClick = (type) => {
    const {
      type: prevType
    } = locationService.getState().query;
    if (type === prevType) {
      type = "";
    }
    locationService.setMemoTypeQuery(type);
  };
  const handleTextQueryInput = (event) => {
    const text = event.currentTarget.value;
    locationService.setTextQuery(text);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "search-bar-container",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "search-bar-inputer",
      children: [/* @__PURE__ */ jsx("img", {
        className: "icon-img",
        src: search
      }), /* @__PURE__ */ jsx("input", {
        className: "text-input",
        type: "text",
        placeholder: "",
        onChange: handleTextQueryInput
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "quickly-action-wrapper",
      children: /* @__PURE__ */ jsxs("div", {
        className: "quickly-action-container",
        children: [/* @__PURE__ */ jsx("p", {
          className: "title-text",
          children: t("Quick filter")
        }), /* @__PURE__ */ jsxs("div", {
          className: "section-container types-container",
          children: [/* @__PURE__ */ jsxs("span", {
            className: "section-text",
            children: [t("TYPE"), ":"]
          }), /* @__PURE__ */ jsx("div", {
            className: "values-container",
            children: memoSpecialTypes.map((t2, idx) => {
              return /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("span", {
                  className: `type-item ${memoType === t2.value ? "selected" : ""}`,
                  onClick: () => {
                    handleMemoTypeItemClick(t2.value);
                  },
                  children: t2.text
                }), idx + 1 < memoSpecialTypes.length ? /* @__PURE__ */ jsx("span", {
                  className: "split-text",
                  children: "/"
                }) : null]
              }, t2.value);
            })
          })]
        })]
      })
    })]
  });
};
var memosHeader = "";
var menuSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+";
let prevRequestTimestamp = Date.now();
const MemosHeader = () => {
  const {
    locationState: {
      query: {
        filter
      }
    },
    globalState: {
      isMobileView
    },
    queryState: {
      queries
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const [titleText, setTitleText] = _react_17_0_2_react.exports.useState("MEMOS");
  _react_17_0_2_react.exports.useEffect(() => {
    const query = queryService.getQueryById(filter);
    if (query) {
      setTitleText(query.title);
    } else {
      setTitleText("MEMOS");
    }
  }, [filter, queries]);
  const handleMemoTextClick = _react_17_0_2_react.exports.useCallback(() => {
    const now = Date.now();
    if (now - prevRequestTimestamp > 10 * 1e3) {
      prevRequestTimestamp = now;
      memoService.fetchAllMemos().catch(() => {
      });
    }
  }, []);
  const handleShowSidebarBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    globalStateService.setShowSiderbarInMobileView(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "section-header-container memos-header-container",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "title-text",
      onClick: handleMemoTextClick,
      children: [/* @__PURE__ */ jsx(Only, {
        when: isMobileView,
        children: /* @__PURE__ */ jsx("button", {
          className: "action-btn",
          onClick: handleShowSidebarBtnClick,
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: menuSvg,
            alt: "menu"
          })
        })
      }), /* @__PURE__ */ jsx("span", {
        className: "normal-text",
        children: titleText
      })]
    }), /* @__PURE__ */ jsx(SearchBar, {})]
  });
};
var memoFilter = "";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var consoleLogger = {
  type: "logger",
  log: function log(args) {
    this.output("log", args);
  },
  warn: function warn(args) {
    this.output("warn", args);
  },
  error: function error(args) {
    this.output("error", args);
  },
  output: function output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
var Logger = function() {
  function Logger2(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Logger2);
    this.init(concreteLogger, options);
  }
  _createClass(Logger2, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = options.prefix || "i18next:";
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.forward(args, "log", "", true);
    }
  }, {
    key: "warn",
    value: function warn2() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.forward(args, "warn", "", true);
    }
  }, {
    key: "error",
    value: function error2() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.forward(args, "error", "");
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug)
        return null;
      if (typeof args[0] === "string")
        args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger2(this.logger, _objectSpread(_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }]);
  return Logger2;
}();
var baseLogger = new Logger();
var EventEmitter = function() {
  function EventEmitter2() {
    _classCallCheck(this, EventEmitter2);
    this.observers = {};
  }
  _createClass(EventEmitter2, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;
      events.split(" ").forEach(function(event) {
        _this.observers[event] = _this.observers[event] || [];
        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event])
        return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event] = this.observers[event].filter(function(l2) {
        return l2 !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function(observer) {
          observer.apply(void 0, args);
        });
      }
      if (this.observers["*"]) {
        var _cloned = [].concat(this.observers["*"]);
        _cloned.forEach(function(observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);
  return EventEmitter2;
}();
function defer() {
  var res;
  var rej;
  var promise = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy$1(a, s, t2) {
  a.forEach(function(m2) {
    if (s[m2])
      t2[m2] = s[m2];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key2) {
    return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  var stack = typeof path !== "string" ? [].concat(path) : path.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  if (concat)
    obj[k] = obj[k].concat(newValue);
  if (!concat)
    obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, function(s) {
      return _entityMap[s];
    });
  }
  return data;
}
var isIE10 = typeof window !== "undefined" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
var chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  var possibleChars = chars.filter(function(c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0)
    return true;
  var r2 = new RegExp("(".concat(possibleChars.map(function(c) {
    return c === "?" ? "\\?" : c;
  }).join("|"), ")"));
  var matched = !r2.test(key);
  if (!matched) {
    var ki2 = key.indexOf(keySeparator);
    if (ki2 > 0 && !r2.test(key.substring(0, ki2))) {
      matched = true;
    }
  }
  return matched;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path])
    return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      var j = 2;
      var p2 = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p2];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p2 = paths.slice(i, i + j).join(keySeparator);
        mix = current[p2];
      }
      if (mix === void 0)
        return void 0;
      if (path.endsWith(p2)) {
        if (typeof mix === "string")
          return mix;
        if (p2 && typeof mix[p2] === "string")
          return mix[p2];
      }
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
var ResourceStore = function(_EventEmitter) {
  _inherits(ResourceStore2, _EventEmitter);
  var _super = _createSuper(ResourceStore2);
  function ResourceStore2(data) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    _classCallCheck(this, ResourceStore2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.data = data || {};
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    if (_this.options.ignoreJSONStructure === void 0) {
      _this.options.ignoreJSONStructure = true;
    }
    return _this;
  }
  _createClass(ResourceStore2, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);
      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== "string")
        path = path.concat(key);
      if (key && typeof key === "string")
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
      }
      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== "string")
        return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === void 0)
        keySeparator = ".";
      var path = [lng, ns];
      if (key)
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        value = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent)
        this.emit("added", lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: false
      };
      for (var m2 in resources) {
        if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
          this.addResource(lng, ns, m2, resources[m2], {
            silent: true
          });
      }
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        deep = resources;
        resources = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};
      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
      }
      setPath(this.data, path, pack);
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns)
        ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === "v1")
        return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n2 = data && Object.keys(data) || [];
      return !!n2.find(function(v2) {
        return data[v2] && Object.keys(data[v2]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);
  return ResourceStore2;
}(EventEmitter);
var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module2) {
    this.processors[module2.name] = module2;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;
    processors.forEach(function(processor) {
      if (_this.processors[processor])
        value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var checkedLoadedFor = {};
var Translator = function(_EventEmitter) {
  _inherits(Translator2, _EventEmitter);
  var _super = _createSuper$1(Translator2);
  function Translator2(services) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Translator2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    copy$1(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized(_this));
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    _this.logger = baseLogger.create("translator");
    return _this;
  }
  _createClass(Translator2, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng)
        this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (key === void 0 || key === null) {
        return false;
      }
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m2 = key.match(this.interpolator.nestingRegexp);
        if (m2 && m2.length > 0) {
          return {
            key,
            namespaces
          };
        }
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
          namespaces = parts.shift();
        key = parts.join(keySeparator);
      }
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      return {
        key,
        namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;
      if (_typeof(options) !== "object" && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (!options)
        options = {};
      if (keys === void 0 || keys === null)
        return "";
      if (!Array.isArray(keys))
        keys = [String(keys)];
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng && lng.toLowerCase() === "cimode") {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }
        return key;
      }
      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
      var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          }
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }
        if (keySeparator) {
          var resTypeIsArray = resType === "[object Array]";
          var copy2 = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (var m2 in res) {
            if (Object.prototype.hasOwnProperty.call(res, m2)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m2);
              copy2[m2] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy2[m2] === deepKey)
                copy2[m2] = res[m2];
            }
          }
          res = copy2;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
        res = res.join(joinArrays);
        if (res)
          res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var hasDefaultValue = Translator2.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            var fk2 = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk2 && fk2.res)
              this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === "all") {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }
          var send = function send2(l2, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l2, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l2, namespace, k, defaultForMissing, updateMissing, options);
            }
            _this2.emit("missingKey", l2, namespace, k, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function(language) {
                _this2.pluralResolver.getSuffixes(language).forEach(function(suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
          res = "".concat(namespace, ":").concat(key);
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler)
          res = this.options.parseMissingKeyHandler(res);
      }
      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;
      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation)
          this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
            interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
          }));
        var skipOnVariables = typeof res === "string" && (options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables);
        var nestBef;
        if (skipOnVariables) {
          var nb2 = res.match(this.interpolator.nestingRegexp);
          nestBef = nb2 && nb2.length;
        }
        var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
        if (this.options.interpolation.defaultVariables)
          data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (skipOnVariables) {
          var na2 = res.match(this.interpolator.nestingRegexp);
          var nestAft = na2 && na2.length;
          if (nestBef < nestAft)
            options.nest = false;
        }
        if (options.nest !== false)
          res = this.interpolator.nest(res, function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
              return null;
            }
            return _this3.translate.apply(_this3, args.concat([key]));
          }, options);
        if (options.interpolation)
          this.interpolator.reset();
      }
      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
      if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }
      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === "string")
        keys = [keys];
      keys.forEach(function(k) {
        if (_this4.isValidLookup(found))
          return;
        var extracted = _this4.extractFromKey(k, options);
        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS)
          namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
        var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function(ns) {
          if (_this4.isValidLookup(found))
            return;
          usedNS = ns;
          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
            _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          codes.forEach(function(code) {
            if (_this4.isValidLookup(found))
              return;
            usedLng = code;
            var finalKeys = [key];
            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling)
                pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "_zero";
              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);
                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }
            var possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey,
        exactUsedKey,
        usedLng,
        usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource)
        return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = "defaultValue";
      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && options[option] !== void 0) {
          return true;
        }
      }
      return false;
    }
  }]);
  return Translator2;
}(EventEmitter);
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = function() {
  function LanguageUtil2(options) {
    _classCallCheck(this, LanguageUtil2);
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  _createClass(LanguageUtil2, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return null;
      var p2 = code.split("-");
      if (p2.length === 2)
        return null;
      p2.pop();
      if (p2[p2.length - 1].toLowerCase() === "x")
        return null;
      return this.formatLanguageCode(p2.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return code;
      var p2 = code.split("-");
      return this.formatLanguageCode(p2[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === "string" && code.indexOf("-") > -1) {
        var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        var p2 = code.split("-");
        if (this.options.lowerCaseLng) {
          p2 = p2.map(function(part) {
            return part.toLowerCase();
          });
        } else if (p2.length === 2) {
          p2[0] = p2[0].toLowerCase();
          p2[1] = p2[1].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
        } else if (p2.length === 3) {
          p2[0] = p2[0].toLowerCase();
          if (p2[1].length === 2)
            p2[1] = p2[1].toUpperCase();
          if (p2[0] !== "sgn" && p2[2].length === 2)
            p2[2] = p2[2].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
          if (specialCases.indexOf(p2[2].toLowerCase()) > -1)
            p2[2] = capitalize(p2[2].toLowerCase());
        }
        return p2.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;
      if (!codes)
        return null;
      var found;
      codes.forEach(function(code) {
        if (found)
          return;
        var cleanedLng = _this.formatLanguageCode(code);
        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
          found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach(function(code) {
          if (found)
            return;
          var lngOnly = _this.getLanguagePartFromCode(code);
          if (_this.isSupportedCode(lngOnly))
            return found = lngOnly;
          found = _this.options.supportedLngs.find(function(supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0)
              return supportedLng;
          });
        });
      }
      if (!found)
        found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks)
        return [];
      if (typeof fallbacks === "function")
        fallbacks = fallbacks(code);
      if (typeof fallbacks === "string")
        fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
        return fallbacks;
      if (!code)
        return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found)
        found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found)
        found = fallbacks[this.formatLanguageCode(code)];
      if (!found)
        found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found)
        found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;
      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];
      var addCode = function addCode2(c) {
        if (!c)
          return;
        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };
      if (typeof code === "string" && code.indexOf("-") > -1) {
        if (this.options.load !== "languageOnly")
          addCode(this.formatLanguageCode(code));
        if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
          addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== "currentOnly")
          addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === "string") {
        addCode(this.formatLanguageCode(code));
      }
      fallbackCodes.forEach(function(fc2) {
        if (codes.indexOf(fc2) < 0)
          addCode(_this2.formatLanguageCode(fc2));
      });
      return codes;
    }
  }]);
  return LanguageUtil2;
}();
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n2) {
    return Number(n2 > 1);
  },
  2: function _2(n2) {
    return Number(n2 != 1);
  },
  3: function _3(n2) {
    return 0;
  },
  4: function _4(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  5: function _5(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5);
  },
  6: function _6(n2) {
    return Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2);
  },
  7: function _7(n2) {
    return Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  8: function _8(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3);
  },
  9: function _9(n2) {
    return Number(n2 >= 2);
  },
  10: function _10(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4);
  },
  11: function _11(n2) {
    return Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3);
  },
  12: function _12(n2) {
    return Number(n2 % 10 != 1 || n2 % 100 == 11);
  },
  13: function _13(n2) {
    return Number(n2 !== 0);
  },
  14: function _14(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3);
  },
  15: function _15(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  16: function _16(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2);
  },
  17: function _17(n2) {
    return Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1);
  },
  18: function _18(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2);
  },
  19: function _19(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3);
  },
  20: function _20(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2);
  },
  21: function _21(n2) {
    return Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0);
  },
  22: function _22(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ["v1", "v2", "v3"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  var rules = {};
  sets.forEach(function(set) {
    set.lngs.forEach(function(l2) {
      rules[l2] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = function() {
  function PluralResolver2(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, PluralResolver2);
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  _createClass(PluralResolver2, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? "ordinal" : "cardinal"
          });
        } catch (_unused) {
          return;
        }
      }
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function(suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (!rule) {
        return [];
      }
      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function(pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }
      return rule.numbers.map(function(number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var rule = this.getRule(code, options);
      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }
        return this.getSuffixRetroCompatible(rule, count);
      }
      this.logger.warn("no plural rule found for: ".concat(code));
      return "";
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;
      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = "plural";
        } else if (suffix === 1) {
          suffix = "";
        }
      }
      var returnSuffix = function returnSuffix2() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };
      if (this.options.compatibilityJSON === "v1") {
        if (suffix === 1)
          return "";
        if (typeof suffix === "number")
          return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === "v2") {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);
  return PluralResolver2;
}();
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Interpolator = function() {
  function Interpolator2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Interpolator2);
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || function(value) {
      return value;
    };
    this.init(options);
  }
  _createClass(Interpolator2, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!options.interpolation)
        options.interpolation = {
          escapeValue: true
        };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
      this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options)
        this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, "g");
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;
      var match2;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function regexSafe(val) {
        return val.replace(/\$/g, "$$$$");
      }
      var handleFormat = function handleFormat2(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }
        var p2 = key.split(_this.formatSeparator);
        var k = p2.shift().trim();
        var f2 = p2.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f2, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function(todo) {
        replaces = 0;
        while (match2 = todo.regex.exec(str)) {
          value = handleFormat(match2[1].trim());
          if (value === void 0) {
            if (typeof missingInterpolationHandler === "function") {
              var temp = missingInterpolationHandler(str, match2, options);
              value = typeof temp === "string" ? temp : "";
            } else if (skipOnVariables) {
              value = match2[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(match2[1], " for interpolating ").concat(str));
              value = "";
            }
          } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
            value = makeString(value);
          }
          var safeValue = todo.safeValue(value);
          str = str.replace(match2[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += safeValue.length;
            todo.regex.lastIndex -= match2[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc2) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var match2;
      var value;
      var clonedOptions = _objectSpread$3({}, options);
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0)
          return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions)
            clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }
        delete clonedOptions.defaultValue;
        return key;
      }
      while (match2 = this.nestingRegexp.exec(str)) {
        var formatters2 = [];
        var doReduce = false;
        if (match2[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match2[1])) {
          var r2 = match2[1].split(this.formatSeparator).map(function(elem) {
            return elem.trim();
          });
          match2[1] = r2.shift();
          formatters2 = r2;
          doReduce = true;
        }
        value = fc2(handleHasOptions.call(this, match2[1].trim(), clonedOptions), clonedOptions);
        if (value && match2[0] === str && typeof value !== "string")
          return value;
        if (typeof value !== "string")
          value = makeString(value);
        if (!value) {
          this.logger.warn("missed to resolve ".concat(match2[1], " for nesting ").concat(str));
          value = "";
        }
        if (doReduce) {
          value = formatters2.reduce(function(v2, f2) {
            return _this2.format(v2, f2, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match2[1].trim()
            }));
          }, value.trim());
        }
        str = str.replace(match2[0], value);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  }]);
  return Interpolator2;
}();
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    var p2 = formatStr.split("(");
    formatName = p2[0].toLowerCase().trim();
    var optStr = p2[1].substring(0, p2[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(";");
      opts.forEach(function(opt) {
        if (!opt)
          return;
        var _opt$split = opt.split(":"), _opt$split2 = _toArray(_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
        var val = rest.join(":");
        if (val.trim() === "false")
          formatOptions[key.trim()] = false;
        if (val.trim() === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val.trim()))
          formatOptions[key.trim()] = parseInt(val.trim(), 10);
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val.trim();
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
var Formatter = function() {
  function Formatter2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Formatter2);
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: function number(val, lng, options2) {
        return new Intl.NumberFormat(lng, options2).format(val);
      },
      currency: function currency(val, lng, options2) {
        return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options2), {}, {
          style: "currency"
        })).format(val);
      },
      datetime: function datetime(val, lng, options2) {
        return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options2)).format(val);
      },
      relativetime: function relativetime(val, lng, options2) {
        return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options2)).format(val, options2.range || "day");
      },
      list: function list(val, lng, options2) {
        return new Intl.ListFormat(lng, _objectSpread$4({}, options2)).format(val);
      }
    };
    this.init(options);
  }
  _createClass(Formatter2, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function add(name, fc2) {
      this.formats[name] = fc2;
    }
  }, {
    key: "format",
    value: function format2(value, _format, lng, options) {
      var _this = this;
      var formats = _format.split(this.formatSeparator);
      var result = formats.reduce(function(mem, f2) {
        var _parseFormatStr = parseFormatStr(f2), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
        if (_this.formats[formatName]) {
          var formatted = mem;
          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l2, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error2) {
            _this.logger.warn(error2);
          }
          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }
        return mem;
      }, value);
      return result;
    }
  }]);
  return Formatter2;
}();
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function remove(arr, what) {
  var found = arr.indexOf(what);
  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}
var Connector = function(_EventEmitter) {
  _inherits(Connector2, _EventEmitter);
  var _super = _createSuper$2(Connector2);
  function Connector2(backend, store, services) {
    var _this;
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    _classCallCheck(this, Connector2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create("backendConnector");
    _this.state = {};
    _this.queue = [];
    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }
  _createClass(Connector2, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function(lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function(ns) {
          var name = "".concat(lng, "|").concat(ns);
          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0)
            ;
          else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0)
              pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0)
              pending.push(name);
            if (toLoad.indexOf(name) < 0)
              toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0)
              toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces)
          toLoadLanguages.push(lng);
      });
      if (toLoad.length || pending.length) {
        this.queue.push({
          pending,
          loaded: {},
          errors: [],
          callback
        });
      }
      return {
        toLoad,
        pending,
        toLoadLanguages,
        toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      if (err)
        this.emit("failedLoading", lng, ns, err);
      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }
      this.state[name] = err ? -1 : 2;
      var loaded2 = {};
      this.queue.forEach(function(q2) {
        pushPath(q2.loaded, [lng], ns);
        remove(q2.pending, name);
        if (err)
          q2.errors.push(err);
        if (q2.pending.length === 0 && !q2.done) {
          Object.keys(q2.loaded).forEach(function(l2) {
            if (!loaded2[l2])
              loaded2[l2] = [];
            if (q2.loaded[l2].length) {
              q2.loaded[l2].forEach(function(ns2) {
                if (loaded2[l2].indexOf(ns2) < 0)
                  loaded2[l2].push(ns2);
              });
            }
          });
          q2.done = true;
          if (q2.errors.length) {
            q2.callback(q2.errors);
          } else {
            q2.callback();
          }
        }
      });
      this.emit("loaded", loaded2);
      this.queue = this.queue.filter(function(q2) {
        return !q2.done;
      });
    }
  }, {
    key: "read",
    value: function read2(lng, ns, fcName) {
      var _this3 = this;
      var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : void 0;
      if (!lng.length)
        return callback(null, {});
      return this.backend[fcName](lng, ns, function(err, data) {
        if (err && data && tried < 5) {
          setTimeout(function() {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        return callback && callback();
      }
      if (typeof languages === "string")
        languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length)
          callback();
        return null;
      }
      toLoad.toLoad.forEach(function(name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, "read", void 0, void 0, function(err, data) {
        if (err)
          _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data)
          _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (key === void 0 || key === null || key === "")
        return;
      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate
        }));
      }
      if (!languages || !languages[0])
        return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);
  return Connector2;
}(EventEmitter);
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle2(args) {
      var ret = {};
      if (_typeof(args[1]) === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (_typeof(args[2]) === "object" || _typeof(args[3]) === "object") {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function(key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format2(value, _format, lng, options) {
        return value;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function noop() {
}
function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function(mem) {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = function(_EventEmitter) {
  _inherits(I18n2, _EventEmitter);
  var _super = _createSuper$3(I18n2);
  function I18n2() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : void 0;
    _classCallCheck(this, I18n2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));
    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);
        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }
      setTimeout(function() {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }
  _createClass(I18n2, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!options.defaultNS && options.ns) {
        if (typeof options.ns === "string") {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf("translation") < 0) {
          options.defaultNS = options.ns[0];
        }
      }
      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
      if (this.options.compatibilityAPI !== "v1") {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }
      if (options.keySeparator !== void 0) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== void 0) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject)
          return null;
        if (typeof ClassOrObject === "function")
          return new ClassOrObject();
        return ClassOrObject;
      }
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        var formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== "undefined") {
          formatter = Formatter;
        }
        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on("*", function(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init)
            s.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on("*", function(event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function(m2) {
          if (m2.init)
            m2.init(_this2);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback)
        callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== "dev")
          this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn("init: no languageDetector is used and no lng is defined");
      }
      var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      storeApi.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store;
          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      storeApiChained.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store2;
          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
          return _this2;
        };
      });
      var deferred = defer();
      var load = function load2() {
        var finish = function finish2(err, t2) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce)
            _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
          _this2.isInitialized = true;
          if (!_this2.options.isClone)
            _this2.logger.log("initialized", _this2.options);
          _this2.emit("initialized", _this2.options);
          deferred.resolve(t2);
          callback(err, t2);
        };
        if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
          return finish(null, _this2.t.bind(_this2));
        _this2.changeLanguage(_this2.options.lng, finish);
      };
      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === "string" ? language : this.language;
      if (typeof language === "function")
        usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === "cimode")
          return usedCallback();
        var toLoad = [];
        var append = function append2(lng) {
          if (!lng)
            return;
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function(l2) {
            if (toLoad.indexOf(l2) < 0)
              toLoad.push(l2);
          });
        };
        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function(l2) {
            return append(l2);
          });
        } else {
          append(usedLng);
        }
        if (this.options.preload) {
          this.options.preload.forEach(function(l2) {
            return append(l2);
          });
        }
        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs)
        lngs = this.languages;
      if (!ns)
        ns = this.options.ns;
      if (!callback)
        callback = noop;
      this.services.backendConnector.reload(lngs, ns, function(err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module2) {
      if (!module2)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!module2.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      if (module2.type === "backend") {
        this.modules.backend = module2;
      }
      if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
        this.modules.logger = module2;
      }
      if (module2.type === "languageDetector") {
        this.modules.languageDetector = module2;
      }
      if (module2.type === "i18nFormat") {
        this.modules.i18nFormat = module2;
      }
      if (module2.type === "postProcessor") {
        postProcessor.addPostProcessor(module2);
      }
      if (module2.type === "formatter") {
        this.modules.formatter = module2;
      }
      if (module2.type === "3rdParty") {
        this.modules.external.push(module2);
      }
      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;
      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit("languageChanging", lng);
      var setLngProps = function setLngProps2(l2) {
        _this4.language = l2;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l2);
        _this4.resolvedLanguage = void 0;
        if (["cimode", "dev"].indexOf(l2) > -1)
          return;
        for (var li2 = 0; li2 < _this4.languages.length; li2++) {
          var lngInLngs = _this4.languages[li2];
          if (["cimode", "dev"].indexOf(lngInLngs) > -1)
            continue;
          if (_this4.store.hasLanguageSomeTranslations(lngInLngs)) {
            _this4.resolvedLanguage = lngInLngs;
            break;
          }
        }
      };
      var done = function done2(err, l2) {
        if (l2) {
          setLngProps(l2);
          _this4.translator.changeLanguage(l2);
          _this4.isLanguageChangingTo = void 0;
          _this4.emit("languageChanged", l2);
          _this4.logger.log("languageChanged", l2);
        } else {
          _this4.isLanguageChangingTo = void 0;
        }
        deferred.resolve(function() {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback)
          callback(err, function() {
            return _this4.t.apply(_this4, arguments);
          });
      };
      var setLng = function setLng2(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector)
          lngs = [];
        var l2 = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
        if (l2) {
          if (!_this4.language) {
            setLngProps(l2);
          }
          if (!_this4.translator.language)
            _this4.translator.changeLanguage(l2);
          if (_this4.services.languageDetector)
            _this4.services.languageDetector.cacheUserLanguage(l2);
        }
        _this4.loadResources(l2, function(err) {
          done(err, l2);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }
      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;
      var fixedT = function fixedT2(key, opts) {
        var options;
        if (_typeof(opts) !== "object") {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }
          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }
        options.lng = options.lng || fixedT2.lng;
        options.lngs = options.lngs || fixedT2.lngs;
        options.ns = options.ns || fixedT2.ns;
        var keySeparator = _this5.options.keySeparator || ".";
        var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };
      if (typeof lng === "string") {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t2() {
      var _this$translator;
      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;
      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized) {
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
        return false;
      }
      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      var loadNotPending = function loadNotPending2(l2, n2) {
        var loadState = _this6.services.backendConnector.state["".concat(l2, "|").concat(n2)];
        return loadState === -1 || loadState === 2;
      };
      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== void 0)
          return preResult;
      }
      if (this.hasResourceBundle(lng, ns))
        return true;
      if (!this.services.backendConnector.backend)
        return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
        return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;
      var deferred = defer();
      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }
      if (typeof ns === "string")
        ns = [ns];
      ns.forEach(function(n2) {
        if (_this7.options.ns.indexOf(n2) < 0)
          _this7.options.ns.push(n2);
      });
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === "string")
        lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function(lng) {
        return preloaded.indexOf(lng) < 0;
      });
      if (!newLngs.length) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng)
        lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng)
        return "rtl";
      var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });
      var clone = new I18n2(mergedOptions);
      var membersToCopy = ["store", "services", "language"];
      membersToCopy.forEach(function(m2) {
        clone[m2] = _this8[m2];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on("*", function(event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);
  return I18n2;
}(EventEmitter);
_defineProperty(I18n, "createInstance", function() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : void 0;
  return new I18n(options, callback);
});
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
var copy = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMyAxMi40MzE2VjcuODEyNUMxMyA2LjI1OTIgMTQuMjU5MiA1IDE1LjgxMjUgNUg0MC4xODc1QzQxLjc0MDggNSA0MyA2LjI1OTIgNDMgNy44MTI1VjMyLjE4NzVDNDMgMzMuNzQwOCA0MS43NDA4IDM1IDQwLjE4NzUgMzVIMzUuNTE2MyIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMi4xODc1IDEzSDcuODEyNUM2LjI1OTIgMTMgNSAxNC4yNTkyIDUgMTUuODEyNVY0MC4xODc1QzUgNDEuNzQwOCA2LjI1OTIgNDMgNy44MTI1IDQzSDMyLjE4NzVDMzMuNzQwOCA0MyAzNSA0MS43NDA4IDM1IDQwLjE4NzVWMTUuODEyNUMzNSAxNC4yNTkyIDMzLjc0MDggMTMgMzIuMTg3NSAxM1oiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+";
const CODE_BLOCK_REG = /```([\s\S]*?)```/g;
const BOLD_TEXT_REG = /\*\*(.+?)\*\*/g;
const EM_TEXT_REG = /\*(.+?)\*/g;
const TODO_BLOCK_REG = /\[ \] /g;
const DONE_BLOCK_REG = /\[x\] /g;
const DOT_LI_REG = /[*] /g;
const NUM_LI_REG = /(\d+)\. /g;
const INTERNAL_MD_REG = /\[\[([^\]]+)\]\]/g;
const EXRERNAL_MD_REG = /\[([^\]]+)\]\((([^\]]+).md)\)/g;
const parseMarkedToHtml = (markedStr, memoid) => {
  const htmlText = markedStr.replace(CODE_BLOCK_REG, "<pre lang=''>$1</pre>").replace(DOT_LI_REG, "<span class='counter-block'>\u2022</span>").replace(NUM_LI_REG, "<span class='counter-block'>$1.</span>").replace(TODO_BLOCK_REG, "<span class='todo-block' data-type='todo'>\u2B1C</span>").replace(DONE_BLOCK_REG, "<span class='todo-block' data-type='done'>\u2705</span>").replace(BOLD_TEXT_REG, "<strong>$1</strong>").replace(EM_TEXT_REG, "<em>$1</em>").replace(/&lt;br&gt;/g, "</p><p>").replace(/&amp;/g, "&");
  let newHtmlText = htmlText;
  if (memoid) {
    if (INTERNAL_MD_REG.test(htmlText)) {
      const internalMD = htmlText.match(INTERNAL_MD_REG);
      for (let i = 0; i < internalMD.length; i++) {
        if (!/(jpeg|jpg|gif|png|svg|bmp|wepg)/g.test(internalMD[i])) {
          const internalContent = getContentFromInternalLink(internalMD[i]);
          if (/\|/g.test(internalContent)) {
            const [link, label] = internalContent.split("|");
            const replaceMent = replaceMd(link, label);
            newHtmlText = htmlText.replace(internalMD[i], replaceMent);
          } else {
            const link = internalContent;
            const label = "";
            const replaceMent = replaceMd(link, label);
            newHtmlText = newHtmlText.replace(internalMD[i], replaceMent);
          }
        }
      }
    }
    if (EXRERNAL_MD_REG.test(htmlText)) {
      const externalMD = htmlText.match(EXRERNAL_MD_REG);
      for (let i = 0; i < externalMD.length; i++) {
        if (!/(jpeg|jpg|gif|png|svg|bmp|wepg)/g.test(externalMD[i])) {
          const link = getContentFromExternalLink(externalMD[i]);
          const label = getLabelFromExternalLink(externalMD[i]);
          const replaceMent = replaceMd(link, label);
          newHtmlText = htmlText.replace(externalMD[i], replaceMent);
        }
      }
    }
  }
  return newHtmlText;
};
const replaceMd = (internalLink, label) => {
  const { metadataCache } = appStore.getState().dailyNotesState.app;
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalLink), "");
  if (file instanceof require$$0.TFile) {
    if (label) {
      return `<a data-href="${internalLink}" data-type="link" data-filepath="${internalLink}" class="internal-link">${label}</a>`;
    } else {
      return `<a data-href="${internalLink}" data-type="link" data-filepath="${internalLink}" class="internal-link">${internalLink}</a>`;
    }
  } else if (label) {
    return `<a data-href="${internalLink}" data-type="link" data-filepath="${internalLink}" class="internal-link is-unresolved">${label}</a>`;
  } else {
    return `<a data-href="${internalLink}" data-type="link" data-filepath="${internalLink}" class="internal-link is-unresolved">${internalLink}</a>`;
  }
};
const getContentFromInternalLink = (line) => {
  var _a;
  return (_a = /\[\[([^\]]+)\]\]/g.exec(line)) == null ? void 0 : _a[1];
};
const getLabelFromExternalLink = (line) => {
  var _a;
  return (_a = EXRERNAL_MD_REG.exec(line)) == null ? void 0 : _a[1];
};
const getContentFromExternalLink = (line) => {
  var _a;
  return (_a = /\[([^\]]+)\]\((([^\]]+).md)\)/g.exec(line)) == null ? void 0 : _a[3];
};
const parseHtmlToRawText = (htmlStr) => {
  const tempEl = document.createElement("div");
  tempEl.className = "memo-content-text";
  tempEl.innerHTML = htmlStr;
  const text = tempEl.innerText;
  return text;
};
const parseRawTextToHtml = (rawTextStr) => {
  const htmlText = rawTextStr.replace(/\n/g, "<br>");
  return htmlText;
};
const encodeHtml = (htmlStr) => {
  const t2 = document.createElement("div");
  t2.textContent = htmlStr;
  return t2.innerHTML;
};
const Provider = (props) => {
  const {
    children,
    store,
    context: Context
  } = props;
  const [appState, setAppState] = _react_17_0_2_react.exports.useState(store.getState());
  _react_17_0_2_react.exports.useEffect(() => {
    const unsubscribe = store.subscribe((ns) => {
      setAppState(ns);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: appState,
    children
  });
};
var dialog = "";
const BaseDialog = (props) => {
  const {
    children,
    className,
    clickSpaceDestroy,
    destroy
  } = props;
  const handleSpaceClicked = () => {
    if (clickSpaceDestroy) {
      destroy();
    }
  };
  const handleEscClicked = (e) => {
    const {
      key
    } = e;
    if (key === "Escape") {
      destroy();
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: `dialog-wrapper ${className}`,
    onClick: handleSpaceClicked,
    onKeyPress: handleEscClicked,
    children: /* @__PURE__ */ jsx("div", {
      className: "dialog-container",
      onClick: (e) => e.stopPropagation(),
      children
    })
  });
};
function showDialog(config, DialogComponent, props) {
  const tempDiv = document.createElement("div");
  document.body.append(tempDiv);
  setTimeout(() => {
    var _a;
    (_a = tempDiv.firstElementChild) == null ? void 0 : _a.classList.add("showup");
  }, 0);
  const cbs = {
    destroy: () => {
      var _a, _b;
      (_a = tempDiv.firstElementChild) == null ? void 0 : _a.classList.remove("showup");
      (_b = tempDiv.firstElementChild) == null ? void 0 : _b.classList.add("showoff");
      setTimeout(() => {
        tempDiv.remove();
        ReactDOM$1.unmountComponentAtNode(tempDiv);
      }, ANIMATION_DURATION);
    }
  };
  const dialogProps = __spreadProps(__spreadValues({}, props), {
    destroy: cbs.destroy
  });
  let Fragment2 = /* @__PURE__ */ jsx(BaseDialog, __spreadProps(__spreadValues({
    destroy: cbs.destroy,
    clickSpaceDestroy: true
  }, config), {
    children: /* @__PURE__ */ jsx(DialogComponent, __spreadValues({}, dialogProps))
  }));
  if (config.useAppContext) {
    Fragment2 = /* @__PURE__ */ jsx(Provider, {
      store: appStore,
      context: appContext,
      children: Fragment2
    });
  }
  ReactDOM$1.render(Fragment2, tempDiv);
  return cbs;
}
var previewImageDialog = "";
var close = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMiAxOSA2LjQxeiIvPjwvc3ZnPg==";
const PreviewImageDialog = ({
  destroy,
  imgUrl,
  filepath
}) => {
  const imgRef = _react_17_0_2_react.exports.useRef(null);
  const [imgWidth, setImgWidth] = _react_17_0_2_react.exports.useState(-1);
  const {
    vault
  } = appStore.getState().dailyNotesState.app;
  _react_17_0_2_react.exports.useEffect(() => {
    utils$1.getImageSize(imgUrl).then(({
      width
    }) => {
      if (width !== 0) {
        setImgWidth(80);
      } else {
        setImgWidth(0);
      }
    });
  }, []);
  const handleCloseBtnClick = () => {
    destroy();
  };
  const handleDecreaseImageSize = () => {
    if (imgWidth > 30) {
      setImgWidth(imgWidth - 10);
    }
  };
  const handleIncreaseImageSize = () => {
    setImgWidth(imgWidth + 10);
  };
  const convertBase64ToBlob = (base64, type) => {
    var bytes = window.atob(base64);
    var ab2 = new ArrayBuffer(bytes.length);
    var ia2 = new Uint8Array(ab2);
    for (var i = 0; i < bytes.length; i++) {
      ia2[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab2], {
      type
    });
  };
  const copyImageToClipboard = async () => {
    if ((filepath === null || filepath === void 0) && imgUrl !== null) {
      const myBase64 = imgUrl.split("base64,")[1];
      const blobInput = convertBase64ToBlob(myBase64, "image/png");
      const clipboardItemInput = new ClipboardItem({
        "image/png": blobInput
      });
      window.navigator["clipboard"].write([clipboardItemInput]);
      new require$$0.Notice("Send to clipboard successfully");
    } else {
      var buffer = await vault.adapter.readBinary(filepath);
      var arr = new Uint8Array(buffer);
      var blob = new Blob([arr], {
        type: "image/png"
      });
      const item = new ClipboardItem({
        "image/png": blob
      });
      window.navigator["clipboard"].write([item]);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("button", {
      className: "btn close-btn",
      onClick: handleCloseBtnClick,
      children: /* @__PURE__ */ jsx("img", {
        className: "icon-img",
        src: close
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "img-container internal-embed image-embed is-loaded",
      children: [/* @__PURE__ */ jsx("img", {
        className: imgWidth <= 0 ? "hidden" : "",
        ref: imgRef,
        width: imgWidth + "%",
        src: imgUrl
      }), /* @__PURE__ */ jsx("span", {
        className: "loading-text " + (imgWidth === -1 ? "" : "hidden"),
        children: t("Image is loading...")
      }), /* @__PURE__ */ jsx("span", {
        className: "loading-text " + (imgWidth === 0 ? "" : "hidden"),
        children: t("\u{1F61F} Cannot load image, image link maybe broken")
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "action-btns-container",
      children: [/* @__PURE__ */ jsx("button", {
        className: "btn",
        onClick: handleDecreaseImageSize,
        children: "\u2796"
      }), /* @__PURE__ */ jsx("button", {
        className: "btn",
        onClick: handleIncreaseImageSize,
        children: "\u2795"
      }), /* @__PURE__ */ jsx("button", {
        className: "btn",
        onClick: () => setImgWidth(80),
        children: "\u2B55"
      }), /* @__PURE__ */ jsx("button", {
        className: "btn",
        onClick: copyImageToClipboard,
        children: "\u{1F4C4}"
      })]
    })]
  });
};
function showPreviewImageDialog(imgUrl, filepath) {
  if (filepath) {
    showDialog({
      className: "preview-image-dialog"
    }, PreviewImageDialog, {
      imgUrl,
      filepath
    });
  } else {
    showDialog({
      className: "preview-image-dialog"
    }, PreviewImageDialog, {
      imgUrl
    });
  }
}
var image = "";
const Image$1 = (props) => {
  const {
    className,
    imgUrl,
    alt,
    referrerPolicy,
    filepath
  } = props;
  const handleImageClick = () => {
    if (filepath) {
      showPreviewImageDialog(imgUrl, filepath);
    } else {
      showPreviewImageDialog(imgUrl);
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "image-container " + className,
    onClick: handleImageClick,
    referrerPolicy,
    children: /* @__PURE__ */ jsx("img", {
      src: imgUrl,
      alt,
      decoding: "async",
      loading: "lazy"
    })
  });
};
var memoCardDialog = "";
var edit = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE0LjA2IDkuMDJsLjkyLjkyTDUuOTIgMTlINXYtLjkybDkuMDYtOS4wNk0xNy42NiAzYy0uMjUgMC0uNTEuMS0uNy4yOWwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODNjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMi0uMi0uNDUtLjI5LS43MS0uMjl6bS0zLjYgMy4xOUwzIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1eiIvPjwvc3ZnPg==";
const getPathOfImage$4 = (vault, image2) => {
  return vault.getResourcePath(image2);
};
const detectWikiInternalLink$4 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _a[1];
  const internalAltName = (_b = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _b[5];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$4(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const detectMDInternalLink$4 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _a[5];
  const internalAltName = (_b = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _b[2];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$4(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const MemoCardDialog = (props) => {
  var _a;
  const [memo2, setMemo] = _react_17_0_2_react.exports.useState(__spreadProps(__spreadValues({}, props.memo), {
    createdAtStr: utils$1.getDateTimeString(props.memo.createdAt)
  }));
  const [linkMemos, setLinkMemos] = _react_17_0_2_react.exports.useState([]);
  const [linkedMemos, setLinkedMemos] = _react_17_0_2_react.exports.useState([]);
  let externalImageUrls = [];
  let internalImageUrls = [];
  let allMarkdownLink = [];
  let allInternalLink = [];
  if (IMAGE_URL_REG.test(memo2.content)) {
    let allExternalImageUrls = [];
    let anotherExternalImageUrls = [];
    if (MARKDOWN_URL_REG.test(memo2.content)) {
      allMarkdownLink = Array.from(memo2.content.match(MARKDOWN_URL_REG));
    }
    if (WIKI_IMAGE_URL_REG.test(memo2.content)) {
      allInternalLink = Array.from(memo2.content.match(WIKI_IMAGE_URL_REG));
    }
    if (MARKDOWN_WEB_URL_REG.test(memo2.content)) {
      allExternalImageUrls = Array.from(memo2.content.match(MARKDOWN_WEB_URL_REG));
    }
    if (allInternalLink.length) {
      for (let i = 0; i < allInternalLink.length; i++) {
        let one = allInternalLink[i];
        internalImageUrls.push(detectWikiInternalLink$4(one));
      }
    }
    if (allMarkdownLink.length) {
      for (let i = 0; i < allMarkdownLink.length; i++) {
        let two = allMarkdownLink[i];
        if (/(.*)http[s]?(.*)/.test(two)) {
          anotherExternalImageUrls.push((_a = MARKDOWN_URL_REG.exec(two)) == null ? void 0 : _a[5]);
        } else {
          internalImageUrls.push(detectMDInternalLink$4(two));
        }
      }
    }
    externalImageUrls = allExternalImageUrls.concat(anotherExternalImageUrls);
  }
  _react_17_0_2_react.exports.useEffect(() => {
    const fetchLinkedMemos = async () => {
      try {
        const linkMemos2 = [];
        const matchedArr = [...memo2.content.matchAll(MEMO_LINK_REG)];
        for (const matchRes of matchedArr) {
          if (matchRes && matchRes.length === 3) {
            const id2 = matchRes[2];
            const memoTemp = memoService.getMemoById(id2);
            if (memoTemp) {
              linkMemos2.push(__spreadProps(__spreadValues({}, memoTemp), {
                createdAtStr: utils$1.getDateTimeString(memoTemp.createdAt),
                dateStr: utils$1.getDateString(memoTemp.createdAt)
              }));
            }
          }
        }
        setLinkMemos([...linkMemos2]);
        const linkedMemos2 = await memoService.getLinkedMemos(memo2.id);
        setLinkedMemos(linkedMemos2.sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)).map((m2) => __spreadProps(__spreadValues({}, m2), {
          createdAtStr: utils$1.getDateTimeString(m2.createdAt),
          dateStr: utils$1.getDateString(m2.createdAt)
        })));
      } catch (error2) {
      }
    };
    fetchLinkedMemos();
  }, [memo2.id]);
  const handleMemoContentClick = _react_17_0_2_react.exports.useCallback(async (e) => {
    var _a2;
    const targetEl = e.target;
    if (targetEl.className === "memo-link-text") {
      const nextMemoId = (_a2 = targetEl.dataset) == null ? void 0 : _a2.value;
      const memoTemp = memoService.getMemoById(nextMemoId != null ? nextMemoId : "");
      if (memoTemp) {
        const nextMemo = __spreadProps(__spreadValues({}, memoTemp), {
          createdAtStr: utils$1.getDateTimeString(memoTemp.createdAt)
        });
        setLinkMemos([]);
        setLinkedMemos([]);
        setMemo(nextMemo);
      } else {
        new require$$0.Notice("MEMO Not Found");
        targetEl.classList.remove("memo-link-text");
      }
    }
  }, []);
  const handleLinkedMemoClick = _react_17_0_2_react.exports.useCallback((memo22) => {
    setLinkMemos([]);
    setLinkedMemos([]);
    setMemo(memo22);
  }, []);
  const handleEditMemoBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    props.destroy();
    globalStateService.setEditMemoId(memo2.id);
  }, [memo2.id]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "memo-card-container",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "header-container",
        children: [/* @__PURE__ */ jsx("p", {
          className: "time-text",
          children: memo2.createdAtStr
        }), /* @__PURE__ */ jsxs("div", {
          className: "btns-container",
          children: [/* @__PURE__ */ jsx("button", {
            className: "btn edit-btn",
            onClick: handleEditMemoBtnClick,
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: edit
            })
          }), /* @__PURE__ */ jsx("button", {
            className: "btn close-btn",
            onClick: props.destroy,
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: close
            })
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "memo-container",
        children: [/* @__PURE__ */ jsx("div", {
          className: "memo-content-text",
          onClick: handleMemoContentClick,
          dangerouslySetInnerHTML: {
            __html: formatMemoContent(memo2.content)
          }
        }), /* @__PURE__ */ jsx(Only, {
          when: externalImageUrls.length > 0,
          children: /* @__PURE__ */ jsx("div", {
            className: "images-wrapper",
            children: externalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
              className: "memo-img",
              imgUrl,
              alt: "",
              referrerPolicy: "no-referrer"
            }, idx))
          })
        }), /* @__PURE__ */ jsx(Only, {
          when: internalImageUrls.length > 0,
          children: /* @__PURE__ */ jsx("div", {
            className: "images-wrapper internal-embed image-embed is-loaded",
            children: internalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
              className: "memo-img",
              imgUrl: imgUrl.path,
              alt: imgUrl.altText,
              filepath: imgUrl.filepath
            }, idx))
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "layer-container"
      }), linkMemos.map((_23, idx) => {
        if (idx < 4) {
          return /* @__PURE__ */ jsx("div", {
            className: "background-layer-container",
            style: {
              bottom: (idx + 1) * -3 + "px",
              left: (idx + 1) * 5 + "px",
              width: `calc(100% - ${(idx + 1) * 10}px)`,
              zIndex: -idx - 1
            }
          }, idx);
        } else {
          return null;
        }
      })]
    }), linkMemos.length > 0 ? /* @__PURE__ */ jsxs("div", {
      className: "linked-memos-wrapper",
      children: [/* @__PURE__ */ jsxs("p", {
        className: "normal-text",
        children: [t("LINKED"), " ", linkMemos.length, " MEMO "]
      }), linkMemos.map((m2) => {
        const rawtext = parseHtmlToRawText(formatMemoContent(m2.content)).replaceAll("\n", " ");
        return /* @__PURE__ */ jsxs("div", {
          className: "linked-memo-container",
          onClick: () => handleLinkedMemoClick(m2),
          children: [/* @__PURE__ */ jsxs("span", {
            className: "time-text",
            children: [m2.dateStr, " "]
          }), rawtext]
        }, m2.id);
      })]
    }) : null, linkedMemos.length > 0 ? /* @__PURE__ */ jsxs("div", {
      className: "linked-memos-wrapper",
      children: [/* @__PURE__ */ jsxs("p", {
        className: "normal-text",
        children: [linkedMemos.length, " MEMO ", t("LINK TO THE"), " MEMO"]
      }), linkedMemos.map((m2) => {
        const rawtext = parseHtmlToRawText(formatMemoContent(m2.content)).replaceAll("\n", " ");
        return /* @__PURE__ */ jsxs("div", {
          className: "linked-memo-container",
          onClick: () => handleLinkedMemoClick(m2),
          children: [/* @__PURE__ */ jsxs("span", {
            className: "time-text",
            children: [m2.dateStr, " "]
          }), rawtext]
        }, m2.id);
      })]
    }) : null]
  });
};
function showMemoCardDialog(memo2) {
  showDialog({
    className: "memo-card-dialog"
  }, MemoCardDialog, {
    memo: memo2
  });
}
const cachedResourceMap = new Map();
const convertResourceToDataURL = async (url, useCache = true) => {
  const { vault } = dailyNotesService.getState().app;
  if (useCache && cachedResourceMap.has(url)) {
    return Promise.resolve(cachedResourceMap.get(url));
  }
  if (!/(http|https)/g.test(url)) {
    if (await vault.adapter.exists(url)) {
      const buffer = await vault.adapter.readBinary(url);
      const arr = new Uint8Array(buffer);
      const blob = new Blob([arr], { type: "image/png" });
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Url = reader.result;
          cachedResourceMap.set(url, base64Url);
          resolve(base64Url);
        };
        reader.readAsDataURL(blob);
      });
    }
  } else {
    try {
      const download = await require$$0.request({
        method: "GET",
        url,
        contentType: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      });
      const enc = new TextEncoder().encode(download);
      const bf2 = enc;
      const blob = new Blob([bf2], { type: "image/png" });
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Url = reader.result;
          cachedResourceMap.set(url, base64Url);
          resolve(base64Url);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error2) {
      console.log("error in grabReleaseFileFromRepository", URL, error2);
    }
  }
};
const getCloneStyledElement = async (element) => {
  const clonedElementContainer = document.createElement(element.tagName);
  clonedElementContainer.innerHTML = element.innerHTML;
  const applyStyles2 = async (sourceElement, clonedElement) => {
    var _a;
    if (!sourceElement || !clonedElement) {
      return;
    }
    const sourceStyles = window.getComputedStyle(sourceElement);
    if (sourceElement.tagName === "IMG") {
      try {
        const url = await convertResourceToDataURL((_a = sourceElement.getAttribute("path")) != null ? _a : sourceElement.getAttribute("src"));
        clonedElement.src = url;
      } catch (error2) {
      }
    }
    for (const item of sourceStyles) {
      clonedElement.style.setProperty(item, sourceStyles.getPropertyValue(item), sourceStyles.getPropertyPriority(item));
    }
    for (let i = 0; i < clonedElement.childElementCount; i++) {
      await applyStyles2(sourceElement.children[i], clonedElement.children[i]);
    }
  };
  await applyStyles2(element, clonedElementContainer);
  return clonedElementContainer;
};
const getFontsStyleElement = async (element) => {
  const styleSheets = element.ownerDocument.styleSheets;
  const fontFamilyStyles = [];
  for (const sheet of styleSheets) {
    for (const rule of sheet.cssRules) {
      if (rule.constructor.name === "CSSFontFaceRule") {
        fontFamilyStyles.push(rule.style);
      }
    }
  }
  const styleElement = document.createElement("style");
  return styleElement;
};
const getElementSize = (element) => {
  const { width, height } = window.getComputedStyle(element);
  return {
    width: parseInt(width.replace("px", "")),
    height: parseInt(height.replace("px", ""))
  };
};
const convertSVGToDataURL = (svg) => {
  const xml = new XMLSerializer().serializeToString(svg);
  const url = encodeURIComponent(xml);
  return `data:image/svg+xml;charset=utf-8,${url}`;
};
const generateSVGElement = (width, height, element) => {
  const xmlNS = "http://www.w3.org/2000/svg";
  const svgElement = document.createElementNS(xmlNS, "svg");
  svgElement.setAttribute("width", `${width}`);
  svgElement.setAttribute("height", `${height}`);
  svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const foreignObject = document.createElementNS(xmlNS, "foreignObject");
  foreignObject.setAttribute("width", "100%");
  foreignObject.setAttribute("height", "100%");
  foreignObject.setAttribute("x", "0");
  foreignObject.setAttribute("y", "0");
  foreignObject.setAttribute("externalResourcesRequired", "true");
  foreignObject.appendChild(element);
  svgElement.appendChild(foreignObject);
  return svgElement;
};
const toSVG = async (element, options) => {
  const { width, height } = getElementSize(element);
  const clonedElement = await getCloneStyledElement(element);
  if (options == null ? void 0 : options.backgroundColor) {
    clonedElement.style.backgroundColor = options.backgroundColor;
  }
  const svg = generateSVGElement(width, height, clonedElement);
  svg.prepend(await getFontsStyleElement(element));
  const url = convertSVGToDataURL(svg);
  return url;
};
const toCanvas = async (element, options) => {
  const url = await toSVG(element, options);
  const imageEl = new Image();
  imageEl.src = url;
  const ratio = (options == null ? void 0 : options.pixelRatio) || 1;
  const { width, height } = getElementSize(element);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return Promise.reject("Canvas error");
  }
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}`;
  canvas.style.height = `${height}`;
  if (options == null ? void 0 : options.backgroundColor) {
    context.fillStyle = options.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  return new Promise((resolve) => {
    imageEl.onload = () => {
      context.drawImage(imageEl, 0, 0, canvas.width, canvas.height);
      resolve(canvas);
    };
  });
};
const toImage = async (element, options) => {
  const canvas = await toCanvas(element, options);
  return canvas.toDataURL();
};
var shareMemoImageDialog = "";
var share = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMzNzM1MmYiPjxnPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjwvZz48Zz48cGF0aCBkPSJNMTYsNWwtMS40MiwxLjQybC0xLjU5LTEuNTlWMTZoLTEuOThWNC44M0w5LjQyLDYuNDJMOCw1bDQtNEwxNiw1eiBNMjAsMTB2MTFjMCwxLjEtMC45LDItMiwySDZjLTEuMTEsMC0yLTAuOS0yLTJWMTAgYzAtMS4xMSwwLjg5LTIsMi0yaDN2Mkg2djExaDEyVjEwaC0zVjhoM0MxOS4xLDgsMjAsOC44OSwyMCwxMHoiLz48L2c+PC9zdmc+";
const getPathOfImage$3 = (vault, image2) => {
  return vault.getResourcePath(image2);
};
const detectWikiInternalLink$3 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _a[1];
  const internalAltName = (_b = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _b[5];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filePath: ""
    };
  } else {
    const imagePath = getPathOfImage$3(vault, file);
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filePath: file.path
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filePath: file.path
      };
    }
  }
};
const detectMDInternalLink$3 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _a[5];
  const internalAltName = (_b = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _b[2];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filePath: ""
    };
  } else {
    const imagePath = getPathOfImage$3(vault, file);
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filePath: file.path
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filePath: file.path
      };
    }
  }
};
const ShareMemoImageDialog = (props) => {
  var _a;
  const {
    memo: propsMemo,
    destroy
  } = props;
  const {
    memos
  } = appStore.getState().memoState;
  let memosLength;
  let createdDays;
  if (memos.length) {
    memosLength = memos.length - 1;
    createdDays = memos ? Math.ceil((Date.now() - utils$1.getTimeStampByDate(memos[memosLength].createdAt)) / 1e3 / 3600 / 24) : 0;
  }
  const memo2 = __spreadProps(__spreadValues({}, propsMemo), {
    createdAtStr: utils$1.getDateTimeString(propsMemo.createdAt)
  });
  const footerEnd = ShareFooterEnd.replace("{UserName}", UserName);
  const footerStart = ShareFooterStart.replace("{MemosNum}", memos.length.toString()).replace("{UsedDay}", createdDays.toString());
  let externalImageUrls = [];
  let internalImageUrls = [];
  let allMarkdownLink = [];
  let allInternalLink = [];
  if (IMAGE_URL_REG.test(memo2.content)) {
    let allExternalImageUrls = [];
    let anotherExternalImageUrls = [];
    if (MARKDOWN_URL_REG.test(memo2.content)) {
      allMarkdownLink = Array.from(memo2.content.match(MARKDOWN_URL_REG));
    }
    if (WIKI_IMAGE_URL_REG.test(memo2.content)) {
      allInternalLink = Array.from(memo2.content.match(WIKI_IMAGE_URL_REG));
    }
    if (MARKDOWN_WEB_URL_REG.test(memo2.content)) {
      allExternalImageUrls = Array.from(memo2.content.match(MARKDOWN_WEB_URL_REG));
    }
    if (allInternalLink.length) {
      for (let i = 0; i < allInternalLink.length; i++) {
        let one = allInternalLink[i];
        internalImageUrls.push(detectWikiInternalLink$3(one));
      }
    }
    if (allMarkdownLink.length) {
      for (let i = 0; i < allMarkdownLink.length; i++) {
        let two = allMarkdownLink[i];
        if (/(.*)http[s]?(.*)/.test(two)) {
          anotherExternalImageUrls.push((_a = MARKDOWN_URL_REG.exec(two)) == null ? void 0 : _a[5]);
        } else {
          internalImageUrls.push(detectMDInternalLink$3(two));
        }
      }
    }
    externalImageUrls = allExternalImageUrls.concat(anotherExternalImageUrls);
  }
  const [shortcutImgUrl, setShortcutImgUrl] = _react_17_0_2_react.exports.useState("");
  const [imgAmount, setImgAmount] = _react_17_0_2_react.exports.useState(externalImageUrls.length);
  const memoElRef = _react_17_0_2_react.exports.useRef(null);
  _react_17_0_2_react.exports.useEffect(() => {
    if (imgAmount > 0) {
      return;
    }
    setTimeout(() => {
      if (!memoElRef.current) {
        return;
      }
      toImage(memoElRef.current, {
        backgroundColor: "#eaeaea",
        pixelRatio: window.devicePixelRatio * 2
      }).then((url) => {
        setShortcutImgUrl(url);
      }).catch(() => {
      });
    }, ANIMATION_DURATION);
  }, [imgAmount]);
  const handleCloseBtnClick = () => {
    destroy();
  };
  const convertBase64ToBlob = (base64, type) => {
    var bytes = window.atob(base64);
    var ab2 = new ArrayBuffer(bytes.length);
    var ia2 = new Uint8Array(ab2);
    for (var i = 0; i < bytes.length; i++) {
      ia2[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab2], {
      type
    });
  };
  const handleCopytoClipboardBtnClick = async () => {
    const {
      vault
    } = appStore.getState().dailyNotesState.app;
    const divs = document.querySelector(".memo-shortcut-img");
    const myBase64 = divs.getAttribute("src").split("base64,")[1];
    const blobInput = convertBase64ToBlob(myBase64, "image/png");
    if (AutoSaveWhenOnMobile && require$$0.Platform.isMobile) {
      blobInput.arrayBuffer().then(async (buffer) => {
        let aFile;
        const ext = "png";
        const dailyNotes = getAllDailyNotes_1();
        for (const string in dailyNotes) {
          if (dailyNotes[string] instanceof require$$0.TFile) {
            aFile = dailyNotes[string];
            break;
          }
        }
        if (aFile !== void 0) {
          await vault.createBinary(await vault.getAvailablePathForAttachments(`Pasted Image ${require$$0.moment().format("YYYYMMDDHHmmss")}`, ext, aFile), buffer);
        }
      });
    }
    const clipboardItemInput = new ClipboardItem({
      "image/png": blobInput
    });
    window.navigator["clipboard"].write([clipboardItemInput]);
    new require$$0.Notice("Send to clipboard successfully");
  };
  const handleImageOnLoad = (ev) => {
    if (ev.type === "error") {
      new require$$0.Notice("\u6709\u4E2A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u4E86\u{1F61F}");
      ev.target.remove();
    }
    setImgAmount(imgAmount - 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "dialog-header-container",
      children: [/* @__PURE__ */ jsxs("p", {
        className: "title-text",
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F970}"
        }), t("Share Memo Image")]
      }), /* @__PURE__ */ jsxs("div", {
        className: "btn-group",
        children: [/* @__PURE__ */ jsx("button", {
          className: "btn copy-btn",
          onClick: handleCopytoClipboardBtnClick,
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: share
          })
        }), /* @__PURE__ */ jsx("button", {
          className: "btn close-btn",
          onClick: handleCloseBtnClick,
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: close
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "dialog-content-container",
      children: [/* @__PURE__ */ jsx("div", {
        className: `tip-words-container ${shortcutImgUrl ? "finish" : "loading"}`,
        children: /* @__PURE__ */ jsx("p", {
          className: "tip-text",
          children: shortcutImgUrl ? t("\u2197Click the button to save") : t("Image is generating...")
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "memo-container",
        ref: memoElRef,
        children: [/* @__PURE__ */ jsx(Only, {
          when: shortcutImgUrl !== "",
          children: /* @__PURE__ */ jsx("img", {
            className: "memo-shortcut-img",
            src: shortcutImgUrl
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "time-text",
          children: memo2.createdAtStr
        }), /* @__PURE__ */ jsx("div", {
          className: "memo-content-text",
          dangerouslySetInnerHTML: {
            __html: formatMemoContent(memo2.content)
          }
        }), /* @__PURE__ */ jsx(Only, {
          when: externalImageUrls.length > 0,
          children: /* @__PURE__ */ jsx("div", {
            className: "images-container",
            children: externalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx("img", {
              crossOrigin: "anonymous",
              decoding: "async",
              src: imgUrl,
              alt: "",
              referrerPolicy: "no-referrer",
              onLoad: handleImageOnLoad,
              onError: handleImageOnLoad
            }, idx))
          })
        }), /* @__PURE__ */ jsx(Only, {
          when: internalImageUrls.length > 0,
          children: /* @__PURE__ */ jsx("div", {
            className: "images-container internal-embed image-embed is-loaded",
            children: internalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx("img", {
              className: "memo-img",
              src: imgUrl.path,
              alt: imgUrl.altText,
              path: imgUrl.filePath
            }, idx))
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "watermark-container",
          children: [/* @__PURE__ */ jsx("span", {
            className: "normal-text footer-start",
            children: /* @__PURE__ */ jsx("span", {
              className: "name-text",
              children: footerStart
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "normal-text footer-end",
            children: /* @__PURE__ */ jsx("span", {
              className: "name-text",
              children: footerEnd
            })
          })]
        })]
      })]
    })]
  });
};
function showShareMemoImageDialog(memo2) {
  showDialog({
    className: "share-memo-image-dialog"
  }, ShareMemoImageDialog, {
    memo: memo2
  });
}
var memo = "";
const showMemoInDailyNotes = async (memoId) => {
  const { app: app2, dailyNotes } = dailyNotesService.getState();
  const lineNum = parseInt(memoId.slice(14));
  const memoDateString = memoId.slice(0, 13);
  const date = require$$0.moment(memoDateString, "YYYYMMDDHHmmss");
  const file = getDailyNote_1(date, dailyNotes);
  if (!require$$0.Platform.isMobile) {
    const leaf = app2.workspace.splitActiveLeaf();
    leaf.openFile(file, { eState: { line: lineNum } });
  } else {
    let leaf = app2.workspace.activeLeaf;
    if (leaf === null) {
      leaf = app2.workspace.getLeaf(true);
    }
    leaf.openFile(file, { eState: { line: lineNum } });
  }
  return;
};
var more = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLTYgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6Ii8+PC9zdmc+";
const getPathOfImage$2 = (vault, image2) => {
  return vault.getResourcePath(image2);
};
const detectWikiInternalLink$2 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _a[1];
  const internalAltName = (_b = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _b[5];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$2(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const detectMDInternalLink$2 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _a[5];
  const internalAltName = (_b = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _b[2];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$2(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const Memo = (props) => {
  var _a;
  const {
    memo: propsMemo
  } = props;
  const memo2 = __spreadProps(__spreadValues({}, propsMemo), {
    createdAtStr: utils$1.getDateTimeString(propsMemo.createdAt)
  });
  const [showConfirmDeleteBtn, toggleConfirmDeleteBtn] = useToggle(false);
  let externalImageUrls = [];
  let internalImageUrls = [];
  let allMarkdownLink = [];
  let allInternalLink = [];
  if (IMAGE_URL_REG.test(memo2.content)) {
    let allExternalImageUrls = [];
    let anotherExternalImageUrls = [];
    if (MARKDOWN_URL_REG.test(memo2.content)) {
      allMarkdownLink = Array.from(memo2.content.match(MARKDOWN_URL_REG));
    }
    if (WIKI_IMAGE_URL_REG.test(memo2.content)) {
      allInternalLink = Array.from(memo2.content.match(WIKI_IMAGE_URL_REG));
    }
    if (MARKDOWN_WEB_URL_REG.test(memo2.content)) {
      allExternalImageUrls = Array.from(memo2.content.match(MARKDOWN_WEB_URL_REG));
    }
    if (allInternalLink.length) {
      for (let i = 0; i < allInternalLink.length; i++) {
        let one = allInternalLink[i];
        internalImageUrls.push(detectWikiInternalLink$2(one));
      }
    }
    if (allMarkdownLink.length) {
      for (let i = 0; i < allMarkdownLink.length; i++) {
        let two = allMarkdownLink[i];
        if (/(.*)http[s]?(.*)/.test(two)) {
          anotherExternalImageUrls.push((_a = MARKDOWN_URL_REG.exec(two)) == null ? void 0 : _a[5]);
        } else {
          internalImageUrls.push(detectMDInternalLink$2(two));
        }
      }
    }
    externalImageUrls = allExternalImageUrls.concat(anotherExternalImageUrls);
  }
  const handleShowMemoStoryDialog = () => {
    showMemoCardDialog(memo2);
  };
  const handleMarkMemoClick = () => {
    if (UseButtonToShowEditor && DefaultEditorLocation === "Bottom") {
      let elem = document.querySelector("div[data-type='memos_view'] .view-content .memo-show-editor-button");
      if (typeof elem.onclick == "function" && elem !== void 0) {
        elem.onclick.apply(elem);
      }
    }
    globalStateService.setMarkMemoId(memo2.id);
  };
  const handleEditMemoClick = () => {
    if (UseButtonToShowEditor && DefaultEditorLocation === "Bottom") {
      let elem = document.querySelector("div[data-type='memos_view'] .view-content .memo-show-editor-button");
      if (typeof elem.onclick == "function" && elem !== void 0) {
        elem.onclick.apply(elem);
      }
    }
    globalStateService.setEditMemoId(memo2.id);
  };
  const handleSourceMemoClick = () => {
    showMemoInDailyNotes(memo2.id);
  };
  const handleDeleteMemoClick = async () => {
    if (showConfirmDeleteBtn) {
      try {
        await memoService.hideMemoById(memo2.id);
      } catch (error2) {
        new require$$0.Notice(error2.message);
      }
      if (globalStateService.getState().editMemoId === memo2.id) {
        globalStateService.setEditMemoId("");
      }
    } else {
      toggleConfirmDeleteBtn();
    }
  };
  const handleMouseLeaveMemoWrapper = () => {
    if (showConfirmDeleteBtn) {
      toggleConfirmDeleteBtn(false);
    }
  };
  const handleGenMemoImageBtnClick = () => {
    showShareMemoImageDialog(memo2);
  };
  const handleMemoKeyDown = _react_17_0_2_react.exports.useCallback((event) => {
    if (event.ctrlKey || event.metaKey) {
      handleSourceMemoClick();
    }
  }, []);
  const handleMemoDoubleKeyDown = _react_17_0_2_react.exports.useCallback((event) => {
    if (event) {
      handleEditMemoClick();
    }
  }, []);
  const handleMemoContentClick = async (e) => {
    var _a2;
    const targetEl = e.target;
    if (targetEl.className === "memo-link-text") {
      const memoId = (_a2 = targetEl.dataset) == null ? void 0 : _a2.value;
      const memoTemp = memoService.getMemoById(memoId != null ? memoId : "");
      if (memoTemp) {
        showMemoCardDialog(memoTemp);
      } else {
        new require$$0.Notice("MEMO Not Found");
        targetEl.classList.remove("memo-link-text");
      }
    } else if (targetEl.className === "todo-block")
      ;
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `memo-wrapper ${"memos-" + memo2.id} ${memo2.memoType}`,
    onMouseLeave: handleMouseLeaveMemoWrapper,
    onMouseDown: handleMemoKeyDown,
    onDoubleClick: handleMemoDoubleKeyDown,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "memo-top-wrapper",
      children: [/* @__PURE__ */ jsx("span", {
        className: "time-text",
        onClick: handleShowMemoStoryDialog,
        children: memo2.createdAtStr
      }), /* @__PURE__ */ jsxs("div", {
        className: "btns-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "btn more-action-btn",
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: more
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "more-action-btns-wrapper",
          children: /* @__PURE__ */ jsxs("div", {
            className: "more-action-btns-container",
            children: [/* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleShowMemoStoryDialog,
              children: t("READ")
            }), /* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleMarkMemoClick,
              children: t("MARK")
            }), /* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleGenMemoImageBtnClick,
              children: t("SHARE")
            }), /* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleEditMemoClick,
              children: t("EDIT")
            }), /* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleSourceMemoClick,
              children: t("SOURCE")
            }), /* @__PURE__ */ jsx("span", {
              className: `btn delete-btn ${showConfirmDeleteBtn ? "final-confirm" : ""}`,
              onClick: handleDeleteMemoClick,
              children: showConfirmDeleteBtn ? t("CONFIRM\uFF01") : t("DELETE")
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "memo-content-text",
      onClick: handleMemoContentClick,
      dangerouslySetInnerHTML: {
        __html: formatMemoContent(memo2.content, memo2.id)
      }
    }), /* @__PURE__ */ jsx(Only, {
      when: externalImageUrls.length > 0,
      children: /* @__PURE__ */ jsx("div", {
        className: "images-wrapper",
        children: externalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
          alt: "",
          className: "memo-img",
          imgUrl,
          referrerPolicy: "no-referrer"
        }, idx))
      })
    }), /* @__PURE__ */ jsx(Only, {
      when: internalImageUrls.length > 0,
      children: /* @__PURE__ */ jsx("div", {
        className: "images-wrapper internal-embed image-embed is-loaded",
        children: internalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
          className: "memo-img",
          imgUrl: imgUrl.path,
          alt: imgUrl.altText,
          filepath: imgUrl.filepath
        }, idx))
      })
    })]
  });
};
function formatMemoContent(content, memoid) {
  var _a;
  content = encodeHtml(content);
  content = parseRawTextToHtml(content).split("<br>").map((t2) => {
    return `<p>${t2 !== "" ? t2 : "<br>"}</p>`;
  }).join("");
  const {
    shouldUseMarkdownParser,
    shouldHideImageUrl
  } = globalStateService.getState();
  if (shouldUseMarkdownParser) {
    content = parseMarkedToHtml(content, memoid);
  }
  if (shouldHideImageUrl) {
    content = content.replace(WIKI_IMAGE_URL_REG, "").replace(MARKDOWN_URL_REG, "").replace(IMAGE_URL_REG, "");
  }
  content = content.replace(TAG_REG, "<span class='tag-span'>#$1</span>").replace(FIRST_TAG_REG, "<p><span class='tag-span'>#$2</span>").replace(LINK_REG, "$1<a class='link' target='_blank' rel='noreferrer' href='$2'>$2</a>").replace(MD_LINK_REG, "<a class='link' target='_blank' rel='noreferrer' href='$2'>$1</a>").replace(MEMO_LINK_REG, "<span class='memo-link-text' data-value='$2'>$1</span>");
  const tempDivContainer = document.createElement("div");
  tempDivContainer.innerHTML = content;
  for (let i = 0; i < tempDivContainer.children.length; i++) {
    const c = tempDivContainer.children[i];
    if (c.tagName === "P" && c.textContent === "" && ((_a = c.firstElementChild) == null ? void 0 : _a.tagName) !== "BR") {
      c.remove();
      i--;
      continue;
    }
  }
  return tempDivContainer.innerHTML;
}
var Memo$1 = _react_17_0_2_react.exports.memo(Memo);
var memolist = "";
let copyShownMemos;
const MemoList = () => {
  const {
    locationState: {
      query
    },
    memoState: {
      memos
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const [isFetching, setFetchStatus] = _react_17_0_2_react.exports.useState(true);
  const wrapperElement = _react_17_0_2_react.exports.useRef(null);
  const {
    tag: tagQuery,
    duration,
    type: memoType,
    text: textQuery,
    filter: queryId
  } = query;
  const queryFilter = queryService.getQueryById(queryId);
  const showMemoFilter = Boolean(tagQuery || duration && duration.from < duration.to || memoType || textQuery || queryFilter);
  const shownMemos = showMemoFilter || queryFilter || HideDoneTasks ? memos.filter((memo2) => {
    var _a, _b, _c;
    let shouldShow = true;
    if (memo2.memoType !== void 0) {
      if (HideDoneTasks && memo2.memoType === "TASK-DONE") {
        shouldShow = false;
      }
    }
    if (queryFilter) {
      const filters = JSON.parse(queryFilter.querystring);
      if (Array.isArray(filters)) {
        shouldShow = checkShouldShowMemoWithFilters(memo2, filters);
      }
    }
    if (tagQuery) {
      const tagsSet = new Set();
      for (const t2 of Array.from((_a = memo2.content.match(TAG_REG)) != null ? _a : [])) {
        const tag2 = t2.replace(TAG_REG, "$1").trim();
        const items = tag2.split("/");
        let temp = "";
        for (const i of items) {
          temp += i;
          tagsSet.add(temp);
          temp += "/";
        }
      }
      for (const t2 of Array.from((_b = memo2.content.match(NOP_FIRST_TAG_REG)) != null ? _b : [])) {
        const tag2 = t2.replace(NOP_FIRST_TAG_REG, "$1").trim();
        const items = tag2.split("/");
        let temp = "";
        for (const i of items) {
          temp += i;
          tagsSet.add(temp);
          temp += "/";
        }
      }
      for (const t2 of Array.from((_c = memo2.content.match(FIRST_TAG_REG)) != null ? _c : [])) {
        const tag2 = t2.replace(FIRST_TAG_REG, "$2").trim();
        const items = tag2.split("/");
        let temp = "";
        for (const i of items) {
          temp += i;
          tagsSet.add(temp);
          temp += "/";
        }
      }
      if (!tagsSet.has(tagQuery)) {
        shouldShow = false;
      }
    }
    if (duration && duration.from < duration.to && (utils$1.getTimeStampByDate(memo2.createdAt) < duration.from || utils$1.getTimeStampByDate(memo2.createdAt) > duration.to)) {
      shouldShow = false;
    }
    if (memoType) {
      if (memoType === "NOT_TAGGED" && (memo2.content.match(TAG_REG) !== null || memo2.content.match(NOP_FIRST_TAG_REG) !== null)) {
        shouldShow = false;
      } else if (memoType === "LINKED" && memo2.content.match(LINK_REG) === null) {
        shouldShow = false;
      } else if (memoType === "IMAGED" && memo2.content.match(IMAGE_URL_REG) === null) {
        shouldShow = false;
      } else if (memoType === "CONNECTED" && memo2.content.match(MEMO_LINK_REG) === null) {
        shouldShow = false;
      }
    }
    if (textQuery && !memo2.content.includes(textQuery)) {
      shouldShow = false;
    }
    return shouldShow;
  }) : memos;
  copyShownMemos = shownMemos;
  _react_17_0_2_react.exports.useEffect(() => {
    memoService.fetchAllMemos().then(() => {
      setFetchStatus(false);
    }).catch(() => {
      new require$$0.Notice("\u{1F62D} Fetch Error");
    });
    dailyNotesService.getMyAllDailyNotes().then(() => {
      setFetchStatus(false);
    }).catch(() => {
      new require$$0.Notice("\u{1F62D} Fetch DailyNotes Error");
    });
    dailyNotesService.getState();
  }, []);
  _react_17_0_2_react.exports.useEffect(() => {
    var _a;
    (_a = wrapperElement.current) == null ? void 0 : _a.scrollTo({
      top: 0
    });
  }, [query]);
  const handleMemoListClick = _react_17_0_2_react.exports.useCallback((event) => {
    const {
      workspace
    } = appStore.getState().dailyNotesState.app;
    const targetEl = event.target;
    if (targetEl.tagName === "SPAN" && targetEl.className === "tag-span") {
      const tagName = targetEl.innerText.slice(1);
      const currTagQuery = locationService.getState().query.tag;
      if (currTagQuery === tagName) {
        locationService.setTagQuery("");
      } else {
        locationService.setTagQuery(tagName);
      }
    } else if (targetEl.tagName === "A" && targetEl.className === "internal-link") {
      const sourcePath = targetEl.getAttribute("data-filepath");
      if (require$$0.Platform.isMobile) {
        workspace.openLinkText(sourcePath, sourcePath, false);
      } else {
        workspace.openLinkText(sourcePath, sourcePath, true);
      }
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: `memolist-wrapper ${isFetching ? "" : "completed"}`,
    onClick: handleMemoListClick,
    ref: wrapperElement,
    children: [shownMemos.map((memo2) => /* @__PURE__ */ jsx(Memo$1, {
      memo: memo2
    }, `${memo2.id}-${memo2.updatedAt}`)), /* @__PURE__ */ jsx("div", {
      className: "status-text-container",
      children: /* @__PURE__ */ jsx("p", {
        className: "status-text",
        children: isFetching ? t("Fetching data...") : shownMemos.length === 0 ? t("Noooop!") : showMemoFilter ? "" : t("All Data is Loaded \u{1F389}")
      })
    })]
  });
};
const getMemosByDate = (memos) => {
  const dataArr = [];
  memos.map((mapItem) => {
    if (dataArr.length == 0) {
      dataArr.push({ date: require$$0.moment(mapItem.createdAt, "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DD"), have: [mapItem] });
    } else {
      const res = dataArr.some((item) => {
        if (item.date == require$$0.moment(mapItem.createdAt, "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DD")) {
          item.have.push(mapItem);
          return true;
        }
      });
      if (!res) {
        dataArr.push({ date: require$$0.moment(mapItem.createdAt, "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DD"), have: [mapItem] });
      }
    }
  });
  return dataArr;
};
const transferMemosIntoText = (dailyMemos) => {
  let outputText = "";
  let dataArr = [];
  let indent = "";
  const { format: format2 } = getDailyNoteSettings_1();
  dailyMemos.map((mapItem) => {
    dataArr = mapItem.have;
    if (ShowDate) {
      outputText = outputText + "- [[" + require$$0.moment(mapItem.date, "YYYY-MM-DD").format(format2) + "]]\n";
      indent = "    ";
    }
    if (ShowTime) {
      for (let i = 0; i < dataArr.length; i++) {
        const time = require$$0.moment(dataArr[i].createdAt, "YYYY/MM/DD HH:mm:ss").format("HH:mm");
        if (dataArr[i].memoType === "JOURNAL") {
          if (/<br>/g.test(dataArr[i].content)) {
            const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
            outputText = outputText + indent + "- " + time + " " + formatedContent + "\n";
          } else {
            outputText = outputText + indent + "- " + time + " " + dataArr[i].content + "\n";
          }
        } else {
          if (dataArr[i].memoType === "TASK-TODO") {
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replaceAll(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [ ] " + time + " " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [ ] " + time + " " + dataArr[i].content + "\n";
            }
          } else if (dataArr[i].memoType === "TASK-DONE") {
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [x] " + time + " " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [x] " + time + " " + dataArr[i].content + "\n";
            }
          } else {
            const taskMark = dataArr[i].memoType.match(/TASK-(.*)?/g)[1];
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [" + taskMark + "] " + time + " " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [" + taskMark + "] " + time + " " + dataArr[i].content + "\n";
            }
          }
        }
      }
    } else {
      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].memoType === "JOURNAL") {
          if (/<br>/g.test(dataArr[i].content)) {
            const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
            outputText = outputText + indent + "- " + formatedContent + "\n";
          } else {
            outputText = outputText + indent + "- " + dataArr[i].content + "\n";
          }
        } else {
          if (dataArr[i].memoType === "TASK-TODO") {
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replaceAll(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [ ] " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [ ] " + dataArr[i].content + "\n";
            }
          } else if (dataArr[i].memoType === "TASK-DONE") {
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [x] " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [x] " + dataArr[i].content + "\n";
            }
          } else {
            const taskMark = dataArr[i].memoType.match(/TASK-(.*)?/g)[1];
            if (/<br>/g.test(dataArr[i].content)) {
              const formatedContent = dataArr[i].content.replace(/<br>/g, "\n    ");
              outputText = outputText + indent + "- [" + taskMark + "] " + formatedContent + "\n";
            } else {
              outputText = outputText + indent + "- [" + taskMark + "] " + dataArr[i].content + "\n";
            }
          }
        }
      }
    }
    if (ShowDate && AddBlankLineWhenDate) {
      outputText = outputText + "\n";
    }
  });
  return outputText;
};
const MemoFilter = () => {
  const {
    locationState: {
      query
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const {
    tag: tagQuery,
    duration,
    type: memoType,
    text: textQuery,
    filter
  } = query;
  const queryFilter = queryService.getQueryById(filter);
  const showFilter = Boolean(tagQuery || duration && duration.from < duration.to || memoType || textQuery || queryFilter);
  const handleCopyClick = async () => {
    if (copyShownMemos.length > 0) {
      const memosByDate = getMemosByDate(copyShownMemos);
      const queryDailyMemos = transferMemosIntoText(memosByDate);
      await utils$1.copyTextToClipboard(queryDailyMemos);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `filter-query-container ${showFilter ? "" : "hidden"}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "filter-query",
      children: [/* @__PURE__ */ jsx("span", {
        className: "tip-text",
        children: "FILTER: "
      }), /* @__PURE__ */ jsxs("div", {
        className: "filter-item-container " + (queryFilter ? "" : "hidden"),
        onClick: () => {
          locationService.setMemoFilter("");
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F516}"
        }), " ", queryFilter == null ? void 0 : queryFilter.title]
      }), /* @__PURE__ */ jsxs("div", {
        className: "filter-item-container " + (tagQuery ? "" : "hidden"),
        onClick: () => {
          locationService.setTagQuery("");
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F3F7}\uFE0F"
        }), " ", tagQuery]
      }), /* @__PURE__ */ jsxs("div", {
        className: "filter-item-container " + (memoType ? "" : "hidden"),
        onClick: () => {
          locationService.setMemoTypeQuery("");
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F4E6}"
        }), " ", getTextWithMemoType(memoType)]
      }), duration && duration.from < duration.to ? /* @__PURE__ */ jsxs("div", {
        className: "filter-item-container",
        onClick: () => {
          locationService.setFromAndToQuery(0, 0);
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F5D3}\uFE0F"
        }), " ", utils$1.getDateString(duration.from), " ", instance.t("to"), " ", require$$0.moment(duration.to, "x").add(1, "days").format("YYYY/MM/DD")]
      }) : null, /* @__PURE__ */ jsxs("div", {
        className: "filter-item-container " + (textQuery ? "" : "hidden"),
        onClick: () => {
          locationService.setTextQuery("");
        },
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F50D}"
        }), " ", textQuery]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "copy-memo",
      children: /* @__PURE__ */ jsx("img", {
        className: "icon-img",
        src: copy,
        onClick: handleCopyClick
      })
    })]
  });
};
function Memos$1() {
  if (require$$0.Platform.isMobile && DefaultEditorLocation === "Bottom") {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(MemosHeader, {}), /* @__PURE__ */ jsx(MemoFilter, {}), /* @__PURE__ */ jsx(MemoList, {}), /* @__PURE__ */ jsx(MemoEditor, {})]
    });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(MemosHeader, {}), /* @__PURE__ */ jsx(MemoEditor, {}), /* @__PURE__ */ jsx(MemoFilter, {}), /* @__PURE__ */ jsx(MemoList, {})]
    });
  }
}
function useLoading(initialState = true) {
  const [state, setState] = _react_17_0_2_react.exports.useState({ isLoading: initialState, isFailed: false, isSucceed: false });
  return __spreadProps(__spreadValues({}, state), {
    setLoading: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: true,
        isFailed: false,
        isSucceed: false
      }));
    },
    setFinish: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: false,
        isFailed: false,
        isSucceed: true
      }));
    },
    setError: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: false,
        isFailed: true,
        isSucceed: false
      }));
    }
  });
}
const getPathOfImage$1 = (vault, image2) => {
  return vault.getResourcePath(image2);
};
const detectWikiInternalLink$1 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _a[1];
  const internalAltName = (_b = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _b[5];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$1(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const detectMDInternalLink$1 = (lineText) => {
  var _a, _b;
  const {
    metadataCache,
    vault
  } = appStore.getState().dailyNotesState.app;
  const internalFileName = (_a = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _a[5];
  const internalAltName = (_b = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _b[2];
  const file = metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filepath: ""
    };
  } else {
    const imagePath = getPathOfImage$1(vault, file);
    const filePath = file.path;
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filepath: filePath
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filepath: filePath
      };
    }
  }
};
const DeletedMemo = (props) => {
  var _a, _b;
  const {
    memo: propsMemo,
    handleDeletedMemoAction
  } = props;
  const memo2 = __spreadProps(__spreadValues({}, propsMemo), {
    createdAtStr: utils$1.getDateTimeString(propsMemo.createdAt),
    deletedAtStr: utils$1.getDateTimeString((_a = propsMemo.deletedAt) != null ? _a : Date.now())
  });
  const [showConfirmDeleteBtn, toggleConfirmDeleteBtn] = useToggle(false);
  let externalImageUrls = [];
  let internalImageUrls = [];
  let allMarkdownLink = [];
  let allInternalLink = [];
  if (IMAGE_URL_REG.test(memo2.content)) {
    let allExternalImageUrls = [];
    let anotherExternalImageUrls = [];
    if (MARKDOWN_URL_REG.test(memo2.content)) {
      allMarkdownLink = Array.from(memo2.content.match(MARKDOWN_URL_REG));
    }
    if (WIKI_IMAGE_URL_REG.test(memo2.content)) {
      allInternalLink = Array.from(memo2.content.match(WIKI_IMAGE_URL_REG));
    }
    if (MARKDOWN_WEB_URL_REG.test(memo2.content)) {
      allExternalImageUrls = Array.from(memo2.content.match(MARKDOWN_WEB_URL_REG));
    }
    if (allInternalLink.length) {
      for (let i = 0; i < allInternalLink.length; i++) {
        let one = allInternalLink[i];
        internalImageUrls.push(detectWikiInternalLink$1(one));
      }
    }
    if (allMarkdownLink.length) {
      for (let i = 0; i < allMarkdownLink.length; i++) {
        let two = allMarkdownLink[i];
        if (/(.*)http[s]?(.*)/.test(two)) {
          anotherExternalImageUrls.push((_b = MARKDOWN_URL_REG.exec(two)) == null ? void 0 : _b[5]);
        } else {
          internalImageUrls.push(detectMDInternalLink$1(two));
        }
      }
    }
    externalImageUrls = allExternalImageUrls.concat(anotherExternalImageUrls);
  }
  const handleDeleteMemoClick = async () => {
    if (showConfirmDeleteBtn) {
      try {
        await memoService.deleteMemoById(memo2.id);
        handleDeletedMemoAction(memo2.id);
      } catch (error2) {
        new require$$0.Notice(error2.message);
      }
    } else {
      toggleConfirmDeleteBtn();
    }
  };
  const handleRestoreMemoClick = async () => {
    try {
      await memoService.restoreMemoById(memo2.id);
      handleDeletedMemoAction(memo2.id);
      new require$$0.Notice("RESTORE SUCCEED");
    } catch (error2) {
      new require$$0.Notice(error2.message);
    }
  };
  const handleMouseLeaveMemoWrapper = () => {
    if (showConfirmDeleteBtn) {
      toggleConfirmDeleteBtn(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `memo-wrapper ${"memos-" + memo2.id}`,
    onMouseLeave: handleMouseLeaveMemoWrapper,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "memo-top-wrapper",
      children: [/* @__PURE__ */ jsxs("span", {
        className: "time-text",
        children: [t("DELETE AT"), " ", memo2.deletedAtStr]
      }), /* @__PURE__ */ jsxs("div", {
        className: "btns-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "btn more-action-btn",
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: more
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "more-action-btns-wrapper",
          children: /* @__PURE__ */ jsxs("div", {
            className: "more-action-btns-container",
            children: [/* @__PURE__ */ jsx("span", {
              className: "btn restore-btn",
              onClick: handleRestoreMemoClick,
              children: t("RESTORE")
            }), /* @__PURE__ */ jsx("span", {
              className: `btn delete-btn ${showConfirmDeleteBtn ? "final-confirm" : ""}`,
              onClick: handleDeleteMemoClick,
              children: showConfirmDeleteBtn ? t("CONFIRM\uFF01") : t("DELETE")
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "memo-content-text",
      dangerouslySetInnerHTML: {
        __html: formatMemoContent(memo2.content)
      }
    }), /* @__PURE__ */ jsx(Only, {
      when: externalImageUrls.length > 0,
      children: /* @__PURE__ */ jsx("div", {
        className: "images-wrapper",
        children: externalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
          alt: "",
          className: "memo-img",
          imgUrl,
          referrerPolicy: "no-referrer"
        }, idx))
      })
    }), /* @__PURE__ */ jsx(Only, {
      when: internalImageUrls.length > 0,
      children: /* @__PURE__ */ jsx("div", {
        className: "images-wrapper internal-embed image-embed is-loaded",
        children: internalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx(Image$1, {
          className: "memo-img",
          imgUrl: imgUrl.path,
          alt: imgUrl.altText,
          filepath: imgUrl.filepath
        }, idx))
      })
    })]
  });
};
var memoTrash = "";
const MemoTrash = () => {
  const {
    locationState: {
      query
    },
    globalState: {
      isMobileView
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const loadingState = useLoading();
  const [deletedMemos, setDeletedMemos] = _react_17_0_2_react.exports.useState([]);
  const {
    tag: tagQuery,
    duration,
    type: memoType,
    text: textQuery,
    filter: queryId
  } = query;
  const queryFilter = queryService.getQueryById(queryId);
  const showMemoFilter = Boolean(tagQuery || duration && duration.from < duration.to || memoType || textQuery || queryFilter);
  const shownMemos = showMemoFilter || queryFilter ? deletedMemos.filter((memo2) => {
    var _a, _b;
    let shouldShow = true;
    if (queryFilter) {
      const filters = JSON.parse(queryFilter.querystring);
      if (Array.isArray(filters)) {
        shouldShow = checkShouldShowMemoWithFilters(memo2, filters);
      }
    }
    if (tagQuery) {
      const tagsSet = new Set();
      for (const t2 of Array.from((_a = memo2.content.match(TAG_REG)) != null ? _a : [])) {
        const tag2 = t2.replace(TAG_REG, "$1").trim();
        const items = tag2.split("/");
        let temp = "";
        for (const i of items) {
          temp += i;
          tagsSet.add(temp);
          temp += "/";
        }
      }
      for (const t2 of Array.from((_b = memo2.content.match(NOP_FIRST_TAG_REG)) != null ? _b : [])) {
        const tag2 = t2.replace(NOP_FIRST_TAG_REG, "$1").trim();
        const items = tag2.split("/");
        let temp = "";
        for (const i of items) {
          temp += i;
          tagsSet.add(temp);
          temp += "/";
        }
      }
      if (!tagsSet.has(tagQuery)) {
        shouldShow = false;
      }
    }
    if (duration && duration.from < duration.to && (utils$1.getTimeStampByDate(memo2.createdAt) < duration.from || utils$1.getTimeStampByDate(memo2.createdAt) > duration.to)) {
      shouldShow = false;
    }
    if (memoType) {
      if (memoType === "NOT_TAGGED" && memo2.content.match(TAG_REG) !== null) {
        shouldShow = false;
      } else if (memoType === "LINKED" && memo2.content.match(LINK_REG) === null) {
        shouldShow = false;
      } else if (memoType === "IMAGED" && memo2.content.match(IMAGE_URL_REG) === null) {
        shouldShow = false;
      } else if (memoType === "CONNECTED" && memo2.content.match(MEMO_LINK_REG) === null) {
        shouldShow = false;
      }
    }
    if (textQuery && !memo2.content.includes(textQuery)) {
      shouldShow = false;
    }
    return shouldShow;
  }) : deletedMemos;
  _react_17_0_2_react.exports.useEffect(() => {
    memoService.fetchAllMemos();
    memoService.fetchDeletedMemos().then((result) => {
      if (result.length !== 0) {
        setDeletedMemos(result);
      }
    }).catch((error2) => {
      new require$$0.Notice("Failed to fetch deleted memos: ", error2);
    }).finally(() => {
      loadingState.setFinish();
    });
    locationService.clearQuery();
  }, []);
  const handleDeletedMemoAction = _react_17_0_2_react.exports.useCallback((memoId) => {
    setDeletedMemos((deletedMemos2) => deletedMemos2.filter((memo2) => memo2.id !== memoId));
  }, []);
  const handleShowSidebarBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    globalStateService.setShowSiderbarInMobileView(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "memo-trash-wrapper",
    children: [/* @__PURE__ */ jsx("div", {
      className: "section-header-container",
      children: /* @__PURE__ */ jsxs("div", {
        className: "title-text",
        children: [/* @__PURE__ */ jsx(Only, {
          when: isMobileView,
          children: /* @__PURE__ */ jsx("button", {
            className: "action-btn",
            onClick: handleShowSidebarBtnClick,
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: menuSvg,
              alt: "menu"
            })
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: t("Recycle bin")
        })]
      })
    }), /* @__PURE__ */ jsx(MemoFilter, {}), loadingState.isLoading ? /* @__PURE__ */ jsx("div", {
      className: "tip-text-container",
      children: /* @__PURE__ */ jsx("p", {
        className: "tip-text",
        children: t("Fetching data...")
      })
    }) : deletedMemos.length === 0 ? /* @__PURE__ */ jsx("div", {
      className: "tip-text-container",
      children: /* @__PURE__ */ jsx("p", {
        className: "tip-text",
        children: t("Here is No Zettels.")
      })
    }) : /* @__PURE__ */ jsx("div", {
      className: "deleted-memos-container",
      children: shownMemos.map((memo2) => /* @__PURE__ */ jsx(DeletedMemo, {
        memo: memo2,
        handleDeletedMemoAction
      }, `${memo2.id}-${memo2.updatedAt}`))
    })]
  });
};
var preferencesSection = "";
var checkboxActive = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWNWgxNHYxNHpNMTcuOTkgOWwtMS40MS0xLjQyLTYuNTkgNi41OS0yLjU4LTIuNTctMS40MiAxLjQxIDQgMy45OXoiLz48L3N2Zz4=";
var checkbox = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6Ii8+PC9zdmc+";
const PreferencesSection = () => {
  const {
    globalState
  } = _react_17_0_2_react.exports.useContext(appContext);
  const {
    useTinyUndoHistoryCache,
    shouldHideImageUrl,
    shouldSplitMemoWord,
    shouldUseMarkdownParser
  } = globalState;
  const demoMemoContent = "\u{1F44B} \u4F60\u597D\u5440\uFF5E\u6B22\u8FCE\u4F7F\u7528memos!\n* \u2728 **\u5F00\u6E90\u9879\u76EE**\uFF1B\n* \u{1F60B} \u7CBE\u7F8E\u4E14\u7EC6\u8282\u7684\u89C6\u89C9\u6837\u5F0F\uFF1B\n* \u{1F4D1} \u4F53\u9A8C\u4F18\u826F\u7684\u4EA4\u4E92\u903B\u8F91\uFF1B";
  const handleOpenTinyUndoChanged = () => {
    globalStateService.setAppSetting({
      useTinyUndoHistoryCache: !useTinyUndoHistoryCache
    });
  };
  const handleSplitWordsValueChanged = () => {
    globalStateService.setAppSetting({
      shouldSplitMemoWord: !shouldSplitMemoWord
    });
  };
  const handleHideImageUrlValueChanged = () => {
    globalStateService.setAppSetting({
      shouldHideImageUrl: !shouldHideImageUrl
    });
  };
  const handleUseMarkdownParserChanged = () => {
    globalStateService.setAppSetting({
      shouldUseMarkdownParser: !shouldUseMarkdownParser
    });
  };
  const handleExportBtnClick = async () => {
    const formatedMemos = memoService.getState().memos.map((m2) => {
      return __spreadValues({}, m2);
    });
    const jsonStr = JSON.stringify(formatedMemos);
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr));
    element.setAttribute("download", "data.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "section-container preferences-section-container",
      children: [/* @__PURE__ */ jsx("p", {
        className: "title-text",
        children: "Memo \u663E\u793A\u76F8\u5173"
      }), /* @__PURE__ */ jsx("div", {
        className: "demo-content-container memo-content-text",
        dangerouslySetInnerHTML: {
          __html: formatMemoContent(demoMemoContent)
        }
      }), /* @__PURE__ */ jsxs("label", {
        className: "form-label checkbox-form-label",
        onClick: handleSplitWordsValueChanged,
        children: [/* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: "\u4E2D\u82F1\u6587\u5185\u5BB9\u81EA\u52A8\u95F4\u9694"
        }), /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: shouldSplitMemoWord ? checkboxActive : checkbox
        })]
      }), /* @__PURE__ */ jsxs("label", {
        className: "form-label checkbox-form-label",
        onClick: handleUseMarkdownParserChanged,
        children: [/* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: "\u90E8\u5206 markdown \u683C\u5F0F\u89E3\u6790"
        }), /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: shouldUseMarkdownParser ? checkboxActive : checkbox
        })]
      }), /* @__PURE__ */ jsxs("label", {
        className: "form-label checkbox-form-label",
        onClick: handleHideImageUrlValueChanged,
        children: [/* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: "\u9690\u85CF\u56FE\u7247\u94FE\u63A5\u5730\u5740"
        }), /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: shouldHideImageUrl ? checkboxActive : checkbox
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "section-container preferences-section-container",
      children: [/* @__PURE__ */ jsx("p", {
        className: "title-text",
        children: "\u7F16\u8F91\u5668"
      }), /* @__PURE__ */ jsxs("label", {
        className: "form-label checkbox-form-label",
        onClick: handleOpenTinyUndoChanged,
        children: [/* @__PURE__ */ jsxs("span", {
          className: "normal-text",
          children: ["\u542F\u7528", " ", /* @__PURE__ */ jsx("a", {
            target: "_blank",
            href: "https://github.com/boojack/tiny-undo",
            onClick: (e) => e.stopPropagation(),
            rel: "noreferrer",
            children: "tiny-undo"
          })]
        }), /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: useTinyUndoHistoryCache ? checkboxActive : checkbox
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "section-container hidden",
      children: [/* @__PURE__ */ jsx("p", {
        className: "title-text",
        children: "\u5176\u4ED6"
      }), /* @__PURE__ */ jsx("div", {
        className: "btn-container",
        children: /* @__PURE__ */ jsx("button", {
          className: "btn export-btn",
          onClick: handleExportBtnClick,
          children: "\u5BFC\u51FA\u6570\u636E(JSON)"
        })
      })]
    })]
  });
};
var setting = "";
const Setting = () => {
  const {
    globalState: {
      isMobileView
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  _react_17_0_2_react.exports.useEffect(() => {
    memoService.fetchAllMemos();
  }, []);
  const handleShowSidebarBtnClick = _react_17_0_2_react.exports.useCallback(() => {
    globalStateService.setShowSiderbarInMobileView(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "preference-wrapper",
    children: [/* @__PURE__ */ jsx("div", {
      className: "section-header-container",
      children: /* @__PURE__ */ jsxs("div", {
        className: "title-text",
        children: [/* @__PURE__ */ jsx(Only, {
          when: isMobileView,
          children: /* @__PURE__ */ jsx("button", {
            className: "action-btn",
            onClick: handleShowSidebarBtnClick,
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: menuSvg,
              alt: "menu"
            })
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: "\u8D26\u53F7\u4E0E\u8BBE\u7F6E"
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "sections-wrapper",
      children: /* @__PURE__ */ jsx(PreferencesSection, {})
    })]
  });
};
const homeRouter = {
  "/recycle": /* @__PURE__ */ jsx(MemoTrash, {}),
  "/setting": /* @__PURE__ */ jsx(Setting, {}),
  "*": /* @__PURE__ */ jsx(Memos$1, {})
};
const routerSwitch = (router) => {
  return (pathname) => {
    for (const key of Object.keys(router)) {
      if (key === pathname) {
        return router[key];
      }
    }
    return router["*"];
  };
};
const homeRouterSwitch = routerSwitch(homeRouter);
var aboutSiteDialog = "";
const AboutSiteDialog = ({
  destroy
}) => {
  const handleCloseBtnClick = () => {
    destroy();
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "dialog-header-container",
      children: [/* @__PURE__ */ jsxs("p", {
        className: "title-text",
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F920}"
        }), "About ", /* @__PURE__ */ jsx("b", {
          children: "Obsidian-Memos"
        })]
      }), /* @__PURE__ */ jsx("button", {
        className: "btn close-btn",
        onClick: handleCloseBtnClick,
        children: /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: close
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "dialog-content-container",
      children: ["Hi, I am Quorafind(Boninall), if you are interested in this project, please support my work and enthusiasm by buying me a coffee on ", /* @__PURE__ */ jsx("a", {
        href: "https://www.buymeacoffee.com/boninall",
        children: "https://www.buymeacoffee.com/boninall"
      }), /* @__PURE__ */ jsx("a", {
        href: "https://www.buymeacoffee.com/boninall",
        children: /* @__PURE__ */ jsx("img", {
          src: `https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00`
        })
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("p", {
        children: ["\u57FA\u4E8E ", /* @__PURE__ */ jsx("a", {
          href: "https://github.com/justmemos/memos",
          children: "memos"
        }), " \u5F00\u6E90\u9879\u76EE\u6240\u6784\u5EFA\u7684\u9879\u76EE\u3002 NOTE: Based on", " ", /* @__PURE__ */ jsx("a", {
          href: "https://github.com/justmemos/memos",
          children: "memos"
        }), " project to build."]
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("p", {
        children: ["\u{1F3D7} This project is working in progress, ", /* @__PURE__ */ jsx("br", {}), " and very pleasure to welcome your", " ", /* @__PURE__ */ jsx("a", {
          href: "https://github.com/Quorafind/obsidian-memos/issues",
          children: "issues"
        }), " and", " ", /* @__PURE__ */ jsx("a", {
          href: "https://github.com/Quorafind/obsidian-memos/pulls",
          children: "Pull Request"
        }), "."]
      }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsxs("p", {
        className: "normal-text",
        children: ["Last updated on ", /* @__PURE__ */ jsx("span", {
          className: "pre-text",
          children: "2022/01/04 22:55:15"
        }), " \u{1F389}"]
      })]
    })]
  });
};
function showAboutSiteDialog() {
  showDialog({
    className: "about-site-dialog"
  }, AboutSiteDialog);
}
var menuBtnsPopup = "";
const MenuBtnsPopup = (props) => {
  const {
    shownStatus,
    setShownStatus
  } = props;
  const {
    app: app2
  } = dailyNotesService.getState();
  const popupElRef = _react_17_0_2_react.exports.useRef(null);
  _react_17_0_2_react.exports.useEffect(() => {
    if (shownStatus) {
      const handleClickOutside = (event) => {
        var _a;
        if (!((_a = popupElRef.current) == null ? void 0 : _a.contains(event.target))) {
          event.stopPropagation();
        }
        setShownStatus(false);
      };
      window.addEventListener("click", handleClickOutside, {
        capture: true,
        once: true
      });
    }
  }, [shownStatus]);
  const handleMyAccountBtnClick = () => {
    app2.setting.open();
    app2.setting.openTabById("obsidian-memos");
  };
  const handleMemosTrashBtnClick = () => {
    locationService.pushHistory("/recycle");
  };
  const handleAboutBtnClick = () => {
    showAboutSiteDialog();
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `menu-btns-popup ${shownStatus ? "" : "hidden"}`,
    ref: popupElRef,
    children: [/* @__PURE__ */ jsxs("button", {
      className: "btn action-btn",
      onClick: handleMyAccountBtnClick,
      children: [/* @__PURE__ */ jsx("span", {
        className: "icon",
        children: "\u{1F464}"
      }), " ", t("Settings")]
    }), /* @__PURE__ */ jsxs("button", {
      className: "btn action-btn",
      onClick: handleMemosTrashBtnClick,
      children: [/* @__PURE__ */ jsx("span", {
        className: "icon",
        children: "\u{1F5D1}\uFE0F"
      }), " ", t("Recycle bin")]
    }), /* @__PURE__ */ jsxs("button", {
      className: "btn action-btn",
      onClick: handleAboutBtnClick,
      children: [/* @__PURE__ */ jsx("span", {
        className: "icon",
        children: "\u{1F920}"
      }), " ", t("About Me")]
    })]
  });
};
var dailyMemo = "";
const getPathOfImage = (vault, image2) => {
  return vault.getResourcePath(image2);
};
const detectWikiInternalLink = (lineText, app2) => {
  var _a, _b;
  const internalFileName = (_a = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _a[1];
  const internalAltName = (_b = WIKI_IMAGE_URL_REG.exec(lineText)) == null ? void 0 : _b[5];
  const file = app2.metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filePath: ""
    };
  } else {
    const imagePath = getPathOfImage(app2.vault, file);
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filePath: file.path
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filePath: file.path
      };
    }
  }
};
const detectMDInternalLink = (lineText, app2) => {
  var _a, _b;
  const internalFileName = (_a = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _a[5];
  const internalAltName = (_b = MARKDOWN_URL_REG.exec(lineText)) == null ? void 0 : _b[2];
  const file = app2.metadataCache.getFirstLinkpathDest(decodeURIComponent(internalFileName), "");
  if (file === null) {
    return {
      linkText: internalFileName,
      altText: internalAltName,
      path: "",
      filePath: ""
    };
  } else {
    const imagePath = getPathOfImage(app2.vault, file);
    if (internalAltName) {
      return {
        linkText: internalFileName,
        altText: internalAltName,
        path: imagePath,
        filePath: file.path
      };
    } else {
      return {
        linkText: internalFileName,
        altText: "",
        path: imagePath,
        filePath: file.path
      };
    }
  }
};
const DailyMemo = (props) => {
  var _a;
  const {
    app: app2
  } = appStore.getState().dailyNotesState;
  const {
    memo: propsMemo
  } = props;
  const memo2 = __spreadProps(__spreadValues({}, propsMemo), {
    createdAtStr: utils$1.getDateTimeString(propsMemo.createdAt),
    timeStr: utils$1.getTimeString(propsMemo.createdAt)
  });
  let externalImageUrls = [];
  let internalImageUrls = [];
  let allMarkdownLink = [];
  let allInternalLink = [];
  if (IMAGE_URL_REG.test(memo2.content)) {
    let allExternalImageUrls = [];
    let anotherExternalImageUrls = [];
    if (MARKDOWN_URL_REG.test(memo2.content)) {
      allMarkdownLink = Array.from(memo2.content.match(MARKDOWN_URL_REG));
    }
    if (WIKI_IMAGE_URL_REG.test(memo2.content)) {
      allInternalLink = Array.from(memo2.content.match(WIKI_IMAGE_URL_REG));
    }
    if (MARKDOWN_WEB_URL_REG.test(memo2.content)) {
      allExternalImageUrls = Array.from(memo2.content.match(MARKDOWN_WEB_URL_REG));
    }
    if (allInternalLink.length) {
      for (let i = 0; i < allInternalLink.length; i++) {
        let one = allInternalLink[i];
        internalImageUrls.push(detectWikiInternalLink(one, app2));
      }
    }
    if (allMarkdownLink.length) {
      for (let i = 0; i < allMarkdownLink.length; i++) {
        let two = allMarkdownLink[i];
        if (/(.*)http[s]?(.*)/.test(two)) {
          anotherExternalImageUrls.push((_a = MARKDOWN_URL_REG.exec(two)) == null ? void 0 : _a[5]);
        } else {
          internalImageUrls.push(detectMDInternalLink(two, app2));
        }
      }
    }
    externalImageUrls = allExternalImageUrls.concat(anotherExternalImageUrls);
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "daily-memo-wrapper",
    children: [/* @__PURE__ */ jsx("div", {
      className: "time-wrapper",
      children: /* @__PURE__ */ jsx("span", {
        className: "normal-text",
        children: memo2.timeStr
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "memo-content-container",
      children: [/* @__PURE__ */ jsx("div", {
        className: "memo-content-text",
        dangerouslySetInnerHTML: {
          __html: formatMemoContent(memo2.content)
        }
      }), /* @__PURE__ */ jsx(Only, {
        when: externalImageUrls.length > 0,
        children: /* @__PURE__ */ jsx("div", {
          className: "images-container",
          children: externalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx("img", {
            src: imgUrl,
            referrerPolicy: "no-referrer"
          }, idx))
        })
      }), /* @__PURE__ */ jsx(Only, {
        when: internalImageUrls.length > 0,
        children: /* @__PURE__ */ jsx("div", {
          className: "images-container internal-embed image-embed is-loaded",
          children: internalImageUrls.map((imgUrl, idx) => /* @__PURE__ */ jsx("img", {
            src: imgUrl.path,
            alt: imgUrl.altText,
            path: imgUrl.filePath
          }, idx))
        })
      })]
    })]
  });
};
var datePicker = "";
var arrowLeft = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJsNC41OC00LjU5eiIvPjwvc3ZnPg==";
var arrowRight = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzM3MzUyZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02LTYtNnoiLz48L3N2Zz4=";
const DatePicker = (props) => {
  const {
    className,
    datestamp,
    handleDateStampChange
  } = props;
  const [currentDateStamp, setCurrentDateStamp] = _react_17_0_2_react.exports.useState(getMonthFirstDayDateStamp(datestamp));
  _react_17_0_2_react.exports.useEffect(() => {
    setCurrentDateStamp(getMonthFirstDayDateStamp(datestamp));
  }, [datestamp]);
  const firstDate = new Date(currentDateStamp);
  const firstDateDay = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
  const dayList = [];
  for (let i = 1; i < firstDateDay; i++) {
    dayList.push({
      date: 0,
      datestamp: firstDate.getTime() - DAILY_TIMESTAMP * (7 - i)
    });
  }
  const dayAmount = getMonthDayAmount(currentDateStamp);
  for (let i = 1; i <= dayAmount; i++) {
    dayList.push({
      date: i,
      datestamp: firstDate.getTime() + DAILY_TIMESTAMP * (i - 1)
    });
  }
  const handleDateItemClick = (datestamp2) => {
    handleDateStampChange(datestamp2);
  };
  const handleChangeMonthBtnClick = (i) => {
    const year = firstDate.getFullYear();
    const month = firstDate.getMonth() + 1;
    let nextDateStamp = 0;
    if (month === 1 && i === -1) {
      nextDateStamp = new Date(`${year - 1}/12/1`).getTime();
    } else if (month === 12 && i === 1) {
      nextDateStamp = new Date(`${year + 1}/1/1`).getTime();
    } else {
      nextDateStamp = new Date(`${year}/${month + i}/1`).getTime();
    }
    setCurrentDateStamp(getMonthFirstDayDateStamp(nextDateStamp));
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `date-picker-wrapper ${className}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "date-picker-header",
      children: [/* @__PURE__ */ jsx("span", {
        className: "btn-text",
        onClick: () => handleChangeMonthBtnClick(-1),
        children: /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: arrowLeft
        })
      }), /* @__PURE__ */ jsxs("span", {
        className: "normal-text",
        children: [firstDate.getFullYear(), " \u5E74 ", firstDate.getMonth() + 1, " \u6708"]
      }), /* @__PURE__ */ jsx("span", {
        className: "btn-text",
        onClick: () => handleChangeMonthBtnClick(1),
        children: /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: arrowRight
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "date-picker-day-container",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "date-picker-day-header",
        children: [/* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u4E00"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u4E8C"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u4E09"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u56DB"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u4E94"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u516D"
        }), /* @__PURE__ */ jsx("span", {
          className: "day-item",
          children: "\u5468\u65E5"
        })]
      }), dayList.map((d) => {
        if (d.date === 0) {
          return /* @__PURE__ */ jsx("span", {
            className: "day-item null",
            children: ""
          }, d.datestamp);
        } else {
          return /* @__PURE__ */ jsx("span", {
            className: `day-item ${d.datestamp === datestamp ? "current" : ""}`,
            onClick: () => handleDateItemClick(d.datestamp),
            children: d.date
          }, d.datestamp);
        }
      })]
    })]
  });
};
function getMonthDayAmount(datestamp) {
  const dateTemp = new Date(datestamp);
  const currentDate = new Date(`${dateTemp.getFullYear()}/${dateTemp.getMonth() + 1}/1`);
  const nextMonthDate = currentDate.getMonth() === 11 ? new Date(`${currentDate.getFullYear() + 1}/1/1`) : new Date(`${currentDate.getFullYear()}/${currentDate.getMonth() + 2}/1`);
  return (nextMonthDate.getTime() - currentDate.getTime()) / DAILY_TIMESTAMP;
}
function getMonthFirstDayDateStamp(timestamp) {
  const dateTemp = new Date(timestamp);
  const currentDate = new Date(`${dateTemp.getFullYear()}/${dateTemp.getMonth() + 1}/1`);
  return currentDate.getTime();
}
var dailyMemoDiaryDialog = "";
const DailyMemoDiaryDialog = (props) => {
  const loadingState = useLoading();
  const [memos, setMemos] = _react_17_0_2_react.exports.useState([]);
  const [currentDateStamp, setCurrentDateStamp] = _react_17_0_2_react.exports.useState(utils$1.getDateStampByDate(utils$1.getDateString(props.currentDateStamp)));
  const [showDatePicker, toggleShowDatePicker] = useToggle(false);
  const memosElRef = _react_17_0_2_react.exports.useRef(null);
  const currentDate = new Date(currentDateStamp);
  const {
    vault
  } = appStore.getState().dailyNotesState.app;
  _react_17_0_2_react.exports.useEffect(() => {
    const setDailyMemos = () => {
      const dailyMemos = memoService.getState().memos.filter((a) => utils$1.getTimeStampByDate(a.createdAt) >= currentDateStamp && utils$1.getTimeStampByDate(a.createdAt) < currentDateStamp + DAILY_TIMESTAMP).sort((a, b) => utils$1.getTimeStampByDate(a.createdAt) - utils$1.getTimeStampByDate(b.createdAt));
      setMemos(dailyMemos);
      loadingState.setFinish();
    };
    setDailyMemos();
  }, [currentDateStamp]);
  const convertBase64ToBlob = (base64, type) => {
    var bytes = window.atob(base64);
    var ab2 = new ArrayBuffer(bytes.length);
    var ia2 = new Uint8Array(ab2);
    for (var i = 0; i < bytes.length; i++) {
      ia2[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab2], {
      type
    });
  };
  const handleShareBtnClick = async () => {
    toggleShowDatePicker(false);
    setTimeout(() => {
      if (!memosElRef.current) {
        return;
      }
      toImage(memosElRef.current, {
        backgroundColor: "#ffffff",
        pixelRatio: window.devicePixelRatio * 2
      }).then((url) => {
        if (AutoSaveWhenOnMobile && require$$0.Platform.isMobile) {
          const myBase64 = url.split("base64,")[1];
          const blobInput = convertBase64ToBlob(myBase64, "image/png");
          blobInput.arrayBuffer().then(async (buffer) => {
            let aFile;
            const ext = "png";
            const dailyNotes = getAllDailyNotes_1();
            for (const string in dailyNotes) {
              if (dailyNotes[string] instanceof require$$0.TFile) {
                aFile = dailyNotes[string];
                break;
              }
            }
            if (aFile !== void 0) {
              await vault.createBinary(await vault.getAvailablePathForAttachments(`Pasted Image ${require$$0.moment().format("YYYYMMDDHHmmss")}`, ext, aFile), buffer);
            }
          });
        }
        showPreviewImageDialog(url);
      }).catch(() => {
      });
    }, 0);
  };
  const handleDataPickerChange = (datestamp) => {
    setCurrentDateStamp(datestamp);
    toggleShowDatePicker(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "dialog-header-container",
      children: /* @__PURE__ */ jsxs("div", {
        className: "header-wrapper",
        children: [/* @__PURE__ */ jsx("p", {
          className: "title-text",
          children: t("Daily Memos")
        }), /* @__PURE__ */ jsxs("div", {
          className: "btns-container",
          children: [/* @__PURE__ */ jsx("span", {
            className: "btn-text",
            onClick: () => setCurrentDateStamp(currentDateStamp - DAILY_TIMESTAMP),
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: arrowLeft
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "btn-text",
            onClick: () => setCurrentDateStamp(currentDateStamp + DAILY_TIMESTAMP),
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: arrowRight
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "btn-text share-btn",
            onClick: handleShareBtnClick,
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: share
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "btn-text",
            onClick: () => props.destroy(),
            children: /* @__PURE__ */ jsx("img", {
              className: "icon-img",
              src: close
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "dialog-content-container",
      ref: memosElRef,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "date-card-container",
        onClick: () => toggleShowDatePicker(),
        children: [/* @__PURE__ */ jsx("div", {
          className: "year-text",
          children: currentDate.getFullYear()
        }), /* @__PURE__ */ jsxs("div", {
          className: "date-container",
          children: [/* @__PURE__ */ jsx("div", {
            className: "month-text",
            children: instance.t("months", {
              returnObjects: true
            })[currentDate.getMonth()]
          }), /* @__PURE__ */ jsx("div", {
            className: "date-text",
            children: currentDate.getDate()
          }), /* @__PURE__ */ jsx("div", {
            className: "day-text",
            children: instance.t("weekDays", {
              returnObjects: true
            })[currentDate.getDay()]
          })]
        })]
      }), /* @__PURE__ */ jsx(DatePicker, {
        className: `date-picker ${showDatePicker ? "" : "hidden"}`,
        datestamp: currentDateStamp,
        handleDateStampChange: handleDataPickerChange
      }), loadingState.isLoading ? /* @__PURE__ */ jsx("div", {
        className: "tip-container",
        children: /* @__PURE__ */ jsx("p", {
          className: "tip-text",
          children: t("Loading...")
        })
      }) : memos.length === 0 ? /* @__PURE__ */ jsx("div", {
        className: "tip-container",
        children: /* @__PURE__ */ jsx("p", {
          className: "tip-text",
          children: t("Noooop!")
        })
      }) : /* @__PURE__ */ jsx("div", {
        className: "dailymemos-wrapper",
        children: memos.map((memo2) => /* @__PURE__ */ jsx(DailyMemo, {
          memo: memo2
        }, `${memo2.id}-${memo2.updatedAt}`))
      })]
    })]
  });
};
function showDailyMemoDiaryDialog(datestamp = Date.now()) {
  showDialog({
    className: "daily-memo-diary-dialog"
  }, DailyMemoDiaryDialog, {
    currentDateStamp: datestamp
  });
}
var userBanner = "";
const UserBanner = () => {
  const {
    memoState: {
      memos,
      tags
    },
    userState: {
      user
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const username = user ? user.username : UserName;
  let memosLength;
  let createdDays;
  if (memos.length) {
    memosLength = memos.length - 1;
    createdDays = memos ? Math.ceil((Date.now() - utils$1.getTimeStampByDate(memos[memosLength].createdAt)) / 1e3 / 3600 / 24) + 1 : 0;
  }
  const [shouldShowPopupBtns, setShouldShowPopupBtns] = _react_17_0_2_react.exports.useState(false);
  const handleUsernameClick = _react_17_0_2_react.exports.useCallback(() => {
    locationService.pushHistory("/");
    locationService.clearQuery();
  }, []);
  const handlePopupBtnClick = () => {
    const sidebarEl = document.querySelector(".memos-sidebar-wrapper");
    const popupEl = document.querySelector(".menu-btns-popup");
    popupEl.style.top = 70 - sidebarEl.scrollTop + "px";
    setShouldShowPopupBtns(true);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "user-banner-container",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "userinfo-header-container",
      children: [/* @__PURE__ */ jsx("p", {
        className: "username-text",
        onClick: handleUsernameClick,
        children: username
      }), /* @__PURE__ */ jsx("span", {
        className: "action-btn menu-popup-btn",
        onClick: handlePopupBtnClick,
        children: /* @__PURE__ */ jsx("img", {
          src: more,
          className: "icon-img"
        })
      }), /* @__PURE__ */ jsx(MenuBtnsPopup, {
        shownStatus: shouldShowPopupBtns,
        setShownStatus: setShouldShowPopupBtns
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "status-text-container",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "status-text memos-text",
        children: [/* @__PURE__ */ jsx("span", {
          className: "amount-text",
          children: memos.length
        }), /* @__PURE__ */ jsx("span", {
          className: "type-text",
          children: "MEMO"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "status-text tags-text",
        children: [/* @__PURE__ */ jsx("span", {
          className: "amount-text",
          children: tags.length
        }), /* @__PURE__ */ jsx("span", {
          className: "type-text",
          children: t("TAG")
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "status-text duration-text",
        onClick: () => showDailyMemoDiaryDialog(),
        children: [/* @__PURE__ */ jsx("span", {
          className: "amount-text",
          children: createdDays
        }), /* @__PURE__ */ jsx("span", {
          className: "type-text",
          children: t("DAY")
        })]
      })]
    })]
  });
};
var selector = "";
const nullItem = {
  text: t("SELECT"),
  value: ""
};
const Selector = (props) => {
  const {
    className,
    dataSource,
    handleValueChanged,
    value
  } = props;
  const [showSelector, toggleSelectorStatus] = useToggle(false);
  const seletorElRef = _react_17_0_2_react.exports.useRef(null);
  let currentItem = nullItem;
  for (const d of dataSource) {
    if (d.value === value) {
      currentItem = d;
      break;
    }
  }
  _react_17_0_2_react.exports.useEffect(() => {
    if (showSelector) {
      const handleClickOutside = (event) => {
        var _a;
        if (!((_a = seletorElRef.current) == null ? void 0 : _a.contains(event.target))) {
          toggleSelectorStatus(false);
        }
      };
      window.addEventListener("click", handleClickOutside, {
        capture: true,
        once: true
      });
    }
  }, [showSelector]);
  const handleItemClick = (item) => {
    if (handleValueChanged) {
      handleValueChanged(item.value);
    }
    toggleSelectorStatus(false);
  };
  const handleCurrentValueClick = (event) => {
    event.stopPropagation();
    toggleSelectorStatus();
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `selector-wrapper ${className != null ? className : ""}`,
    ref: seletorElRef,
    children: [/* @__PURE__ */ jsxs("div", {
      className: `current-value-container ${showSelector ? "active" : ""}`,
      onClick: handleCurrentValueClick,
      children: [/* @__PURE__ */ jsx("span", {
        className: "value-text",
        children: currentItem.text
      }), /* @__PURE__ */ jsx("span", {
        className: "arrow-text",
        children: /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: arrowRight
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: `items-wrapper ${showSelector ? "" : "hidden"}`,
      children: dataSource.map((d) => {
        return /* @__PURE__ */ jsx("div", {
          className: `item-container ${d.value === value ? "selected" : ""}`,
          onClick: () => {
            handleItemClick(d);
          },
          children: d.text
        }, d.value);
      })
    })]
  });
};
var Selector$1 = _react_17_0_2_react.exports.memo(Selector);
var createQueryDialog = "";
const CreateQueryDialog = (props) => {
  const {
    destroy,
    queryId
  } = props;
  const [title, setTitle] = _react_17_0_2_react.exports.useState("");
  const [filters, setFilters] = _react_17_0_2_react.exports.useState([]);
  const requestState = useLoading(false);
  const shownMemoLength = memoService.getState().memos.filter((memo2) => {
    return checkShouldShowMemoWithFilters(memo2, filters);
  }).length;
  _react_17_0_2_react.exports.useEffect(() => {
    const queryTemp = queryService.getQueryById(queryId != null ? queryId : "");
    if (queryTemp) {
      setTitle(queryTemp.title);
      const temp = JSON.parse(queryTemp.querystring);
      if (Array.isArray(temp)) {
        setFilters(temp);
      }
    }
  }, [queryId]);
  const handleTitleInputChange = (e) => {
    const text = e.target.value;
    setTitle(text);
  };
  const handleSaveBtnClick = async () => {
    if (!title) {
      new require$$0.Notice("TITLE CANNOT BE NULL\uFF01");
      return;
    } else if (filters.length === 0) {
      new require$$0.Notice("FILTER CANNOT BE NULL\uFF01");
      return;
    }
    try {
      if (queryId) {
        const editedQuery = await queryService.updateQuery(queryId, title, JSON.stringify(filters));
        queryService.editQuery(editedQuery);
        queryService.getMyAllQueries();
      } else {
        const query = await queryService.createQuery(title, JSON.stringify(filters));
        queryService.pushQuery(query);
        queryService.getMyAllQueries();
      }
    } catch (error2) {
      new require$$0.Notice(error2.message);
    }
    destroy();
  };
  const handleAddFilterBenClick = () => {
    if (filters.length > 0) {
      const lastFilter = filters[filters.length - 1];
      if (lastFilter.value.value === "") {
        new require$$0.Notice("\u5148\u5B8C\u5584\u4E0A\u4E00\u4E2A\u8FC7\u6EE4\u5668\u5427");
        return;
      }
    }
    setFilters([...filters, getDefaultFilter()]);
  };
  const handleFilterChange = _react_17_0_2_react.exports.useCallback((index, filter) => {
    setFilters((filters2) => {
      const temp = [...filters2];
      temp[index] = filter;
      return temp;
    });
  }, []);
  const handleFilterRemove = _react_17_0_2_react.exports.useCallback((index) => {
    setFilters((filters2) => {
      const temp = filters2.filter((_23, i) => i !== index);
      return temp;
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "dialog-header-container",
      children: [/* @__PURE__ */ jsxs("p", {
        className: "title-text",
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "\u{1F516}"
        }), queryId ? t("EDIT QUERY") : t("CREATE QUERY")]
      }), /* @__PURE__ */ jsx("button", {
        className: "btn close-btn",
        onClick: destroy,
        children: /* @__PURE__ */ jsx("img", {
          className: "icon-img",
          src: close
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "dialog-content-container",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "form-item-container input-form-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: t("TITLE")
        }), /* @__PURE__ */ jsx("input", {
          className: "title-input",
          type: "text",
          value: title,
          onChange: handleTitleInputChange
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "form-item-container filter-form-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "normal-text",
          children: t("FILTER")
        }), /* @__PURE__ */ jsxs("div", {
          className: "filters-wrapper",
          children: [filters.map((f2, index) => {
            return /* @__PURE__ */ jsx(MemoFilterInputer, {
              index,
              filter: f2,
              handleFilterChange,
              handleFilterRemove
            }, index);
          }), /* @__PURE__ */ jsx("div", {
            className: "create-filter-btn",
            onClick: handleAddFilterBenClick,
            children: t("ADD FILTER TERMS")
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "dialog-footer-container",
      children: [/* @__PURE__ */ jsx("div", {}), /* @__PURE__ */ jsxs("div", {
        className: "btns-container",
        children: [/* @__PURE__ */ jsxs("span", {
          className: `tip-text ${filters.length === 0 && "hidden"}`,
          children: [t("MATCH"), " Memo ", /* @__PURE__ */ jsx("strong", {
            children: shownMemoLength
          }), " ", t("TIMES")]
        }), /* @__PURE__ */ jsx("button", {
          className: `btn save-btn ${requestState.isLoading ? "requesting" : ""}`,
          onClick: handleSaveBtnClick,
          children: "SAVE"
        })]
      })]
    })]
  });
};
const FilterInputer = (props) => {
  const {
    index,
    filter,
    handleFilterChange,
    handleFilterRemove
  } = props;
  const {
    type
  } = filter;
  const [inputElements, setInputElements] = _react_17_0_2_react.exports.useState(/* @__PURE__ */ jsx(Fragment, {}));
  _react_17_0_2_react.exports.useEffect(() => {
    let operatorElement = /* @__PURE__ */ jsx(Fragment, {});
    if (Object.keys(filterConsts).includes(type)) {
      operatorElement = /* @__PURE__ */ jsx(Selector$1, {
        className: "operator-selector",
        dataSource: Object.values(filterConsts[type].operators),
        value: filter.value.operator,
        handleValueChanged: handleOperatorChange
      });
    }
    let valueElement = /* @__PURE__ */ jsx(Fragment, {});
    switch (type) {
      case "TYPE": {
        valueElement = /* @__PURE__ */ jsx(Selector$1, {
          className: "value-selector",
          dataSource: filterConsts["TYPE"].values,
          value: filter.value.value,
          handleValueChanged: handleValueChange
        });
        break;
      }
      case "TAG": {
        valueElement = /* @__PURE__ */ jsx(Selector$1, {
          className: "value-selector",
          dataSource: memoService.getState().tags.sort().map((t2) => {
            return {
              text: t2,
              value: t2
            };
          }),
          value: filter.value.value,
          handleValueChanged: handleValueChange
        });
        break;
      }
      case "TEXT": {
        valueElement = /* @__PURE__ */ jsx("input", {
          type: "text",
          className: "value-inputer",
          value: filter.value.value,
          onChange: (event) => {
            handleValueChange(event.target.value);
            event.target.focus();
          }
        });
        break;
      }
    }
    setInputElements(/* @__PURE__ */ jsxs(Fragment, {
      children: [operatorElement, valueElement]
    }));
  }, [type, filter]);
  const handleRelationChange = _react_17_0_2_react.exports.useCallback((value) => {
    if (["AND", "OR"].includes(value)) {
      handleFilterChange(index, __spreadProps(__spreadValues({}, filter), {
        relation: value
      }));
    }
  }, [filter]);
  const handleTypeChange = _react_17_0_2_react.exports.useCallback((value) => {
    if (filter.type !== value) {
      const ops = Object.values(filterConsts[value].operators);
      handleFilterChange(index, __spreadProps(__spreadValues({}, filter), {
        type: value,
        value: {
          operator: ops[0].value,
          value: ""
        }
      }));
    }
  }, [filter]);
  const handleOperatorChange = _react_17_0_2_react.exports.useCallback((value) => {
    handleFilterChange(index, __spreadProps(__spreadValues({}, filter), {
      value: __spreadProps(__spreadValues({}, filter.value), {
        operator: value
      })
    }));
  }, [filter]);
  const handleValueChange = _react_17_0_2_react.exports.useCallback((value) => {
    handleFilterChange(index, __spreadProps(__spreadValues({}, filter), {
      value: __spreadProps(__spreadValues({}, filter.value), {
        value
      })
    }));
  }, [filter]);
  const handleRemoveBtnClick = () => {
    handleFilterRemove(index);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "memo-filter-input-wrapper",
    children: [index > 0 ? /* @__PURE__ */ jsx(Selector$1, {
      className: "relation-selector",
      dataSource: relationConsts,
      value: filter.relation,
      handleValueChanged: handleRelationChange
    }) : null, /* @__PURE__ */ jsx(Selector$1, {
      className: "type-selector",
      dataSource: Object.values(filterConsts),
      value: filter.type,
      handleValueChanged: handleTypeChange
    }), inputElements, /* @__PURE__ */ jsx("img", {
      className: "remove-btn",
      src: close,
      onClick: handleRemoveBtnClick
    })]
  });
};
const MemoFilterInputer = _react_17_0_2_react.exports.memo(FilterInputer);
function showCreateQueryDialog(queryId) {
  showDialog({
    className: "create-query-dialog"
  }, CreateQueryDialog, {
    queryId
  });
}
var queryList = "";
var moreWhite = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLTYgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6Ii8+PC9zdmc+";
const QueryList = () => {
  const {
    queryState: {
      queries
    },
    locationState: {
      query: {
        filter
      }
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const loadingState = useLoading();
  const sortedQueries = queries.sort((a, b) => utils$1.getTimeStampByDate(b.createdAt) - utils$1.getTimeStampByDate(a.createdAt)).sort((a, b) => {
    var _a, _b;
    return utils$1.getTimeStampByDate((_a = b.pinnedAt) != null ? _a : 0) - utils$1.getTimeStampByDate((_b = a.pinnedAt) != null ? _b : 0);
  });
  _react_17_0_2_react.exports.useEffect(() => {
    queryService.getMyAllQueries().catch(() => {
    }).finally(() => {
      loadingState.setFinish();
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "queries-wrapper",
    children: [/* @__PURE__ */ jsxs("p", {
      className: "title-text",
      children: [/* @__PURE__ */ jsx("span", {
        className: "normal-text",
        children: t("QUERY")
      }), /* @__PURE__ */ jsx("span", {
        className: "btn",
        onClick: () => showCreateQueryDialog(),
        children: "+"
      })]
    }), /* @__PURE__ */ jsx(Only, {
      when: loadingState.isSucceed && sortedQueries.length === 0,
      children: /* @__PURE__ */ jsx("div", {
        className: "create-query-btn-container",
        children: /* @__PURE__ */ jsx("span", {
          className: "btn",
          onClick: () => showCreateQueryDialog(),
          children: t("CREATE FILTER")
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "queries-container",
      children: sortedQueries.map((q2) => {
        return /* @__PURE__ */ jsx(QueryItemContainer, {
          query: q2,
          isActive: q2.id === filter
        }, q2.id);
      })
    })]
  });
};
const QueryItemContainer = (props) => {
  const {
    query,
    isActive
  } = props;
  const [showActionBtns, toggleShowActionBtns] = useToggle(false);
  const [showConfirmDeleteBtn, toggleConfirmDeleteBtn] = useToggle(false);
  const handleQueryClick = () => {
    if (isActive) {
      locationService.setMemoFilter("");
    } else {
      locationService.setMemoFilter(query.id);
    }
  };
  const handleShowActionBtnClick = (event) => {
    event.stopPropagation();
    toggleShowActionBtns();
  };
  const handleActionBtnContainerMouseLeave = () => {
    toggleShowActionBtns(false);
  };
  const handleDeleteMemoClick = async (event) => {
    event.stopPropagation();
    if (showConfirmDeleteBtn) {
      try {
        await queryService.deleteQuery(query.id);
      } catch (error2) {
        new require$$0.Notice(error2.message);
      }
    } else {
      toggleConfirmDeleteBtn();
    }
  };
  const handleEditQueryBtnClick = (event) => {
    event.stopPropagation();
    showCreateQueryDialog(query.id);
  };
  const handlePinQueryBtnClick = async (event) => {
    event.stopPropagation();
    try {
      if (query.pinnedAt) {
        await queryService.unpinQuery(query.id);
        queryService.editQuery(__spreadProps(__spreadValues({}, query), {
          pinnedAt: ""
        }));
      } else {
        await queryService.pinQuery(query.id);
        queryService.editQuery(__spreadProps(__spreadValues({}, query), {
          pinnedAt: utils$1.getDateTimeString(Date.now())
        }));
      }
    } catch (error2) {
    }
  };
  const handleDeleteBtnMouseLeave = () => {
    toggleConfirmDeleteBtn(false);
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: `query-item-container ${isActive ? "active" : ""}`,
      onClick: handleQueryClick,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "query-text-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "#"
        }), /* @__PURE__ */ jsx("span", {
          className: "query-text",
          children: query.title
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "btns-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "action-btn toggle-btn",
          onClick: handleShowActionBtnClick,
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: isActive ? moreWhite : more
          })
        }), /* @__PURE__ */ jsx("div", {
          className: `action-btns-wrapper ${showActionBtns ? "" : "hidden"}`,
          onMouseLeave: handleActionBtnContainerMouseLeave,
          children: /* @__PURE__ */ jsxs("div", {
            className: "action-btns-container",
            children: [/* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handlePinQueryBtnClick,
              children: query.pinnedAt ? t("UNPIN") : t("PIN")
            }), /* @__PURE__ */ jsx("span", {
              className: "btn",
              onClick: handleEditQueryBtnClick,
              children: t("EDIT")
            }), /* @__PURE__ */ jsx("span", {
              className: `btn delete-btn ${showConfirmDeleteBtn ? "final-confirm" : ""}`,
              onClick: handleDeleteMemoClick,
              onMouseLeave: handleDeleteBtnMouseLeave,
              children: showConfirmDeleteBtn ? t("CONFIRM\uFF01") : t("DELETE")
            })]
          })
        })]
      })]
    })
  });
};
var tagList = "";
const TagList = () => {
  const {
    locationState: {
      query: {
        tag: tagQuery
      }
    },
    memoState: {
      tags: tagsText,
      memos
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const [tags, setTags] = _react_17_0_2_react.exports.useState([]);
  _react_17_0_2_react.exports.useEffect(() => {
    memoService.updateTagsState();
  }, [memos]);
  _react_17_0_2_react.exports.useEffect(() => {
    const sortedTags = Array.from(tagsText).sort();
    const root = {
      subTags: []
    };
    for (const tag2 of sortedTags) {
      const subtags = tag2.split("/");
      let tempObj = root;
      let tagText = "";
      for (let i = 0; i < subtags.length; i++) {
        const key = subtags[i];
        if (i === 0) {
          tagText += key;
        } else {
          tagText += "/" + key;
        }
        let obj = null;
        for (const t2 of tempObj.subTags) {
          if (t2.text === tagText) {
            obj = t2;
            break;
          }
        }
        if (!obj) {
          obj = {
            key,
            text: tagText,
            subTags: []
          };
          tempObj.subTags.push(obj);
        }
        tempObj = obj;
      }
    }
    setTags(root.subTags);
  }, [tagsText]);
  return /* @__PURE__ */ jsxs("div", {
    className: "tags-wrapper",
    children: [/* @__PURE__ */ jsx("p", {
      className: "title-text",
      children: t("Frequently Used Tags")
    }), /* @__PURE__ */ jsxs("div", {
      className: "tags-container",
      children: [tags.map((t2, idx) => /* @__PURE__ */ jsx(TagItemContainer, {
        tag: t2,
        tagQuery
      }, t2.text + "-" + idx)), /* @__PURE__ */ jsx(Only, {
        when: tags.length < 5 && memoService.initialized,
        children: /* @__PURE__ */ jsxs("p", {
          className: "tag-tip-container",
          children: ["Input", /* @__PURE__ */ jsx("span", {
            className: "code-text",
            children: "#Tag "
          }), "to create tag..."]
        })
      })]
    })]
  });
};
const TagItemContainer = (props) => {
  const {
    tag: tag2,
    tagQuery
  } = props;
  const isActive = tagQuery === tag2.text;
  const hasSubTags = tag2.subTags.length > 0;
  const [showSubTags, toggleSubTags] = useToggle(false);
  const handleTagClick = () => {
    if (isActive) {
      locationService.setTagQuery("");
    } else {
      utils$1.copyTextToClipboard(`#${tag2.text} `);
      if (!["/", "/recycle"].includes(locationService.getState().pathname)) {
        locationService.setPathname("/");
      }
      locationService.setTagQuery(tag2.text);
    }
  };
  const handleToggleBtnClick = (event) => {
    event.stopPropagation();
    toggleSubTags();
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: `tag-item-container ${isActive ? "active" : ""}`,
      onClick: handleTagClick,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "tag-text-container",
        children: [/* @__PURE__ */ jsx("span", {
          className: "icon-text",
          children: "#"
        }), /* @__PURE__ */ jsx("span", {
          className: "tag-text",
          children: tag2.key
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "btns-container",
        children: hasSubTags ? /* @__PURE__ */ jsx("span", {
          className: `action-btn toggle-btn ${showSubTags ? "shown" : ""}`,
          onClick: handleToggleBtnClick,
          children: /* @__PURE__ */ jsx("img", {
            className: "icon-img",
            src: arrowRight
          })
        }) : null
      })]
    }), hasSubTags ? /* @__PURE__ */ jsx("div", {
      className: `subtags-container ${showSubTags ? "" : "hidden"}`,
      children: tag2.subTags.map((st, idx) => /* @__PURE__ */ jsx(TagItemContainer, {
        tag: st,
        tagQuery
      }, st.text + "-" + idx))
    }) : null]
  });
};
var usageHeatMap = "";
const tableConfig = {
  width: 12,
  height: 7
};
const getInitialUsageStat = (usedDaysAmount, beginDayTimestamp) => {
  const initialUsageStat = [];
  for (let i = 1; i <= usedDaysAmount; i++) {
    initialUsageStat.push({
      timestamp: parseInt(require$$0.moment(beginDayTimestamp).add(i, "days").format("x")),
      count: 0
    });
  }
  return initialUsageStat;
};
const UsageHeatMap = () => {
  const todayTimeStamp = utils$1.getDateStampByDate(require$$0.moment().format("YYYY-MM-DD HH:mm:ss"));
  const todayDay = new Date(todayTimeStamp).getDay() || 7;
  const nullCell = new Array(7 - todayDay).fill(0);
  const usedDaysAmount = (tableConfig.width - 1) * tableConfig.height + todayDay;
  const beginDayTimestamp = utils$1.getDateStampByDate(todayTimeStamp - usedDaysAmount * DAILY_TIMESTAMP);
  const startDate = require$$0.moment().subtract(usedDaysAmount, "days").endOf("day");
  const {
    memoState: {
      memos
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const [allStat, setAllStat] = _react_17_0_2_react.exports.useState(getInitialUsageStat(usedDaysAmount, beginDayTimestamp));
  const [popupStat, setPopupStat] = _react_17_0_2_react.exports.useState(null);
  const [currentStat, setCurrentStat] = _react_17_0_2_react.exports.useState(null);
  const containerElRef = _react_17_0_2_react.exports.useRef(null);
  const popupRef = _react_17_0_2_react.exports.useRef(null);
  _react_17_0_2_react.exports.useEffect(() => {
    const newStat = getInitialUsageStat(usedDaysAmount, beginDayTimestamp);
    for (const m2 of memos) {
      const creationDate = require$$0.moment(m2.createdAt.replaceAll("/", "-"));
      const index = creationDate.diff(startDate, "days");
      if (index >= 0 && index < newStat.length) {
        newStat[index].count += 1;
      }
    }
    setAllStat([...newStat]);
  }, [memos]);
  const handleUsageStatItemMouseEnter = _react_17_0_2_react.exports.useCallback((event, item) => {
    var _a, _b;
    setPopupStat(item);
    if (!popupRef.current) {
      return;
    }
    const {
      isMobileView
    } = globalStateService.getState();
    const targetEl = event.target;
    const sidebarEl = document.querySelector(".memos-sidebar-wrapper");
    popupRef.current.style.left = targetEl.offsetLeft - ((_b = (_a = containerElRef.current) == null ? void 0 : _a.offsetLeft) != null ? _b : 0) + "px";
    let topValue = targetEl.offsetTop;
    if (!isMobileView) {
      topValue -= sidebarEl.scrollTop;
    }
    popupRef.current.style.top = topValue + "px";
  }, []);
  const handleUsageStatItemMouseLeave = _react_17_0_2_react.exports.useCallback(() => {
    setPopupStat(null);
  }, []);
  const handleUsageStatItemClick = _react_17_0_2_react.exports.useCallback((item) => {
    var _a;
    if (((_a = locationService.getState().query.duration) == null ? void 0 : _a.from) === item.timestamp) {
      locationService.setFromAndToQuery(0, 0);
      setCurrentStat(null);
    } else if (item.count > 0) {
      if (!["/", "/recycle"].includes(locationService.getState().pathname)) {
        locationService.setPathname("/");
      }
      locationService.setFromAndToQuery(item.timestamp, utils$1.getTimeStampByDate(require$$0.moment(item.timestamp + DAILY_TIMESTAMP).subtract(1, "days").endOf("day").format("YYYY-MM-DD HH:mm:ss")));
      setCurrentStat(item);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "usage-heat-map-wrapper",
    ref: containerElRef,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "day-tip-text-container",
      children: [/* @__PURE__ */ jsx("span", {
        className: "tip-text",
        children: instance.t("weekDaysShort", {
          returnObjects: true
        })[0]
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text"
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text",
        children: instance.t("weekDaysShort", {
          returnObjects: true
        })[2]
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text"
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text",
        children: instance.t("weekDaysShort", {
          returnObjects: true
        })[4]
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text"
      }), /* @__PURE__ */ jsx("span", {
        className: "tip-text",
        children: instance.t("weekDaysShort", {
          returnObjects: true
        })[6]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      ref: popupRef,
      className: "usage-detail-container pop-up " + (popupStat ? "" : "hidden"),
      children: [popupStat == null ? void 0 : popupStat.count, " memos on", " ", /* @__PURE__ */ jsx("span", {
        className: "date-text",
        children: new Date(popupStat == null ? void 0 : popupStat.timestamp).toDateString()
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "usage-heat-map",
      children: [allStat.map((v2, i) => {
        const count = v2.count;
        const colorLevel = count <= 0 ? "" : count <= 1 ? "stat-day-L1-bg" : count <= 2 ? "stat-day-L2-bg" : count <= 4 ? "stat-day-L3-bg" : "stat-day-L4-bg";
        return /* @__PURE__ */ jsx("span", {
          className: `stat-container ${colorLevel} ${currentStat === v2 ? "current" : ""} ${todayTimeStamp === v2.timestamp ? "today" : ""}`,
          onMouseEnter: (e) => handleUsageStatItemMouseEnter(e, v2),
          onMouseLeave: handleUsageStatItemMouseLeave,
          onClick: () => handleUsageStatItemClick(v2)
        }, i);
      }), nullCell.map((v2, i) => /* @__PURE__ */ jsx("span", {
        className: "stat-container null"
      }, i))]
    })]
  });
};
var siderbar = "";
const Sidebar = () => {
  const {
    locationState,
    globalState: {
      isMobileView,
      showSiderbarInMobileView
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const wrapperElRef = _react_17_0_2_react.exports.useRef(null);
  const handleClickOutsideOfWrapper = _react_17_0_2_react.exports.useMemo(() => {
    return (event) => {
      var _a, _b, _c;
      const siderbarShown = globalStateService.getState().showSiderbarInMobileView;
      if (!siderbarShown) {
        window.removeEventListener("click", handleClickOutsideOfWrapper, {
          capture: true
        });
        return;
      }
      if (!((_a = wrapperElRef.current) == null ? void 0 : _a.contains(event.target))) {
        if ((_c = (_b = wrapperElRef.current) == null ? void 0 : _b.parentNode) == null ? void 0 : _c.contains(event.target)) {
          if (siderbarShown) {
            event.stopPropagation();
          }
          globalStateService.setShowSiderbarInMobileView(false);
          window.removeEventListener("click", handleClickOutsideOfWrapper, {
            capture: true
          });
        }
      }
    };
  }, []);
  _react_17_0_2_react.exports.useEffect(() => {
    globalStateService.setShowSiderbarInMobileView(false);
  }, [locationState]);
  _react_17_0_2_react.exports.useEffect(() => {
    if (showSiderbarInMobileView) {
      document.body.classList.add(SHOW_SIDERBAR_MOBILE_CLASSNAME);
    } else {
      document.body.classList.remove(SHOW_SIDERBAR_MOBILE_CLASSNAME);
    }
  }, [showSiderbarInMobileView]);
  _react_17_0_2_react.exports.useEffect(() => {
    if (isMobileView && showSiderbarInMobileView) {
      window.addEventListener("click", handleClickOutsideOfWrapper, {
        capture: true
      });
    }
  }, [isMobileView, showSiderbarInMobileView]);
  return /* @__PURE__ */ jsxs("aside", {
    className: "memos-sidebar-wrapper",
    ref: wrapperElRef,
    children: [/* @__PURE__ */ jsx(UserBanner, {}), /* @__PURE__ */ jsx(UsageHeatMap, {}), /* @__PURE__ */ jsx(QueryList, {}), /* @__PURE__ */ jsx(TagList, {})]
  });
};
var home = "";
function Home() {
  const {
    locationState: {
      pathname
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const loadingState = useLoading();
  _react_17_0_2_react.exports.useEffect(() => {
    loadingState.setFinish();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("section", {
      id: "page-wrapper",
      children: [/* @__PURE__ */ jsx(Sidebar, {}), /* @__PURE__ */ jsx("main", {
        className: "content-wrapper",
        children: homeRouterSwitch(pathname)
      })]
    })
  });
}
var app = "";
(() => {
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(str, newStr) {
      if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
        return this.replace(str, newStr);
      }
      return this.replace(new RegExp(str, "g"), newStr);
    };
  }
})();
var global$1 = "";
function StrictApp() {
  return /* @__PURE__ */ jsx(Provider, {
    store: appStore,
    context: appContext,
    children: /* @__PURE__ */ jsx(App, {})
  });
}
function App() {
  _react_17_0_2_react.exports.useContext(appContext);
  _react_17_0_2_react.exports.useEffect(() => {
    const handleWindowResize = () => {
      globalStateService.setIsMobileView(document.body.clientWidth <= 875);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Home, {})
  });
}
class Memos extends require$$0.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    __publicField(this, "plugin");
    __publicField(this, "hoverPopover");
    __publicField(this, "memosComponent");
    this.plugin = plugin;
  }
  getDisplayText() {
    return "Memos";
  }
  getIcon() {
    return "Memos";
  }
  getViewType() {
    return MEMOS_VIEW_TYPE;
  }
  onMemosSettingsUpdate() {
    memoService.clearMemos();
    memoService.fetchAllMemos();
  }
  async onFileDeleted(file) {
    if (getDateFromFile_1(file, "day")) {
      await dailyNotesService.getMyAllDailyNotes();
      memoService.clearMemos();
      memoService.fetchAllMemos();
    }
  }
  async onFileModified(file) {
    const date = getDateFromFile_1(file, "day");
    if (date && this.memosComponent) {
      memoService.fetchAllMemos();
    }
  }
  onFileCreated(file) {
    if (this.app.workspace.layoutReady && this.memosComponent) {
      if (getDateFromFile_1(file, "day")) {
        dailyNotesService.getMyAllDailyNotes();
        memoService.fetchAllMemos();
      }
    }
  }
  async onOpen() {
    this.onMemosSettingsUpdate = this.onMemosSettingsUpdate.bind(this);
    this.onFileCreated = this.onFileCreated.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.onFileModified = this.onFileModified.bind(this);
    this.registerEvent(this.plugin.app.workspace.on("layout-change", () => {
      if (!this.memosComponent)
        return;
      const leaves = this.app.workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
      if (!(leaves.length > 0)) {
        return;
      }
      const leaf = leaves[0];
      const side = leaf.getRoot().side;
      let sidebar;
      let page;
      if (leaf.view.containerEl.querySelector(".memos-sidebar-wrapper")) {
        sidebar = leaf.view.containerEl.querySelector(".memos-sidebar-wrapper");
      } else {
        sidebar = leaf.view.containerEl.querySelector(".memos-sidebar-wrapper-display");
      }
      if (leaf.view.containerEl.querySelector(".content-wrapper")) {
        page = leaf.view.containerEl.querySelector(".content-wrapper");
      } else {
        page = leaf.view.containerEl.querySelector(".content-wrapper-padding-fix");
      }
      if (side !== void 0 && (side === "left" || side === "right")) {
        if (!(sidebar == null ? void 0 : sidebar.className.contains("memos-sidebar-wrapper-display")) && page !== void 0) {
          sidebar.className = "memos-sidebar-wrapper-display";
          page.className = "content-wrapper-padding-fix";
        }
      } else {
        if ((sidebar == null ? void 0 : sidebar.classList.contains("memos-sidebar-wrapper-display")) && page !== void 0) {
          sidebar.className = "memos-sidebar-wrapper";
          page.className = "content-wrapper";
        }
      }
    }));
    this.registerEvent(this.app.workspace.on("obsidian-memos:settings-updated", this.onMemosSettingsUpdate));
    this.registerEvent(this.app.vault.on("create", this.onFileCreated));
    this.registerEvent(this.app.vault.on("delete", this.onFileDeleted));
    this.registerEvent(this.app.vault.on("modify", this.onFileModified));
    dailyNotesService.getApp(this.app);
    InsertAfter = this.plugin.settings.InsertAfter;
    UserName = this.plugin.settings.UserName;
    ProcessEntriesBelow = this.plugin.settings.ProcessEntriesBelow;
    SaveMemoButtonLabel = this.plugin.settings.SaveMemoButtonLabel;
    DefaultPrefix = this.plugin.settings.DefaultPrefix;
    InsertDateFormat = this.plugin.settings.InsertDateFormat;
    DefaultEditorLocation = this.plugin.settings.DefaultEditorLocation;
    UseButtonToShowEditor = this.plugin.settings.UseButtonToShowEditor;
    FocusOnEditor = this.plugin.settings.FocusOnEditor;
    OpenDailyMemosWithMemos = this.plugin.settings.OpenDailyMemosWithMemos;
    HideDoneTasks = this.plugin.settings.HideDoneTasks;
    ShareFooterStart = this.plugin.settings.ShareFooterStart;
    ShareFooterEnd = this.plugin.settings.ShareFooterEnd;
    this.plugin.settings.OpenMemosAutomatically;
    ShowTime = this.plugin.settings.ShowTime;
    ShowDate = this.plugin.settings.ShowDate;
    AddBlankLineWhenDate = this.plugin.settings.AddBlankLineWhenDate;
    AutoSaveWhenOnMobile = this.plugin.settings.AutoSaveWhenOnMobile;
    this.memosComponent = React$1.createElement(StrictApp);
    ReactDOM$1.render(this.memosComponent, this.contentEl);
  }
  async onClose() {
  }
}
let InsertAfter;
let UserName;
let ProcessEntriesBelow;
let SaveMemoButtonLabel;
let DefaultPrefix;
let InsertDateFormat;
let DefaultEditorLocation;
let UseButtonToShowEditor;
let FocusOnEditor;
let OpenDailyMemosWithMemos;
let HideDoneTasks;
let ShareFooterStart;
let ShareFooterEnd;
let ShowTime;
let ShowDate;
let AddBlankLineWhenDate;
let AutoSaveWhenOnMobile;
const icons = {
  Memos: `<svg t="1641348507339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2120" width="100" height="100"><path d="M126.692653 478.099639l-90.757281 0c-19.019408 0-34.437336 15.423923-34.437336 34.417356 0 18.992434 15.416929 34.477297 34.437336 34.477297l90.757281 0c19.013414 0 34.42335-15.484863 34.42335-34.477297C161.116003 493.523561 145.706067 478.099639 126.692653 478.099639zM244.662333 243.526943c13.742566-13.110184 14.310011-34.948836 1.185841-48.706388l-62.644762-65.668806c-13.128167-13.762547-34.974811-14.229091-48.717377-1.118906s-14.261059 34.911872-1.132893 48.674419l62.644762 65.668806C209.123074 256.13262 230.919767 256.637127 244.662333 243.526943zM543.066631 957.422083l-60.603757 0c-18.654764 0-33.794964 15.147193-33.794964 33.862898 0 18.661757 15.1402 32.71502 33.794964 32.71502l60.603757 0c18.654764 0 33.794964-14.053262 33.794964-32.71502C576.861595 972.568277 561.721395 957.422083 543.066631 957.422083zM988.076617 479.050709l-90.757281 0c-19.019408 0-34.437336 15.423923-34.437336 34.417356s15.416929 34.477297 34.437336 34.477297l90.757281 0c19.013414 0 34.42335-15.484863 34.42335-34.477297S1007.09003 479.050709 988.076617 479.050709zM512.268737 192.765564c-172.737143 0-312.75527 150.079292-312.75527 322.746503 0 125.630192 74.080583 233.957298 180.936128 283.703669l0 84.51838c0 16.762614 15.410935 31.35435 34.42335 31.35435 0.598415 0 1.193833-0.014985 1.785255-0.042958 0.618395 0.026974 1.239788 0.042958 1.867175 0.042958l187.479731 0c5.905227 0 11.455802-1.220807 16.288078-3.477601 12.231044-4.657447 20.795671-15.383962 20.795671-27.87575l0-84.052835c107.391021-49.534578 181.935151-158.147405 181.935151-284.168214C825.024007 342.843857 684.997888 192.765564 512.268737 192.765564zM574.863548 742.713968l0 80.17063c0 3.159911-0.221783 5.976158-0.642372 8.496694l0 19.092336-124.910895 0 0-17.71768c-0.423586-2.856208-0.642372-6.123015-0.642372-9.870351l0-80.443363c-99.204024-27.75387-171.970892-118.821847-171.970892-226.930167 0-130.094827 105.4689-245.507007 235.571719-245.507007s235.563727 115.41218 235.563727 245.507007C747.832465 623.984031 674.578074 715.293772 574.863548 742.713968zM895.407204 129.328576c-13.429872-13.429872-35.233558-13.439862-48.677416 0.004995l-64.174267 64.175266c-13.448853 13.448853-13.443858 35.257534-0.013986 48.687406 13.429872 13.429872 35.281511 13.477825 48.730364 0.028972l64.175266-64.175266C908.889025 164.605092 908.837076 142.758448 895.407204 129.328576zM511.796199 159.617967c18.992434 0 34.417356-15.410935 34.417356-34.42335l0-90.757281c0-19.019408-15.423923-34.437336-34.417356-34.437336-18.992434 0-34.477297 15.416929-34.477297 34.437336l0 90.757281C477.317903 144.208031 492.802766 159.617967 511.796199 159.617967z" fill="currentColor" p-id="2121"></path></svg>`
};
function addIcons() {
  Object.keys(icons).forEach((key) => {
    require$$0.addIcon(key, icons[key]);
  });
}
const DEFAULT_SETTINGS = {
  StartDate: "Sunday",
  InsertAfter: "# Journal",
  UserName: "MEMO \u{1F609}",
  ProcessEntriesBelow: "",
  Language: "en",
  SaveMemoButtonLabel: "NOTEIT",
  ShareFooterStart: "{MemosNum} Memos {UsedDay} Day",
  ShareFooterEnd: "\u270D\uFE0F by {UserName}",
  DefaultPrefix: "List",
  InsertDateFormat: "Tasks",
  DefaultEditorLocation: "Top",
  UseButtonToShowEditor: false,
  FocusOnEditor: true,
  OpenDailyMemosWithMemos: true,
  HideDoneTasks: false,
  OpenMemosAutomatically: false,
  ShowTime: true,
  ShowDate: true,
  AddBlankLineWhenDate: false,
  AutoSaveWhenOnMobile: false
};
class MemosSettingTab extends require$$0.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    __publicField(this, "plugin");
    __publicField(this, "applyDebounceTimer", 0);
    this.plugin = plugin;
  }
  applySettingsUpdate() {
    clearTimeout(this.applyDebounceTimer);
    const plugin = this.plugin;
    this.applyDebounceTimer = window.setTimeout(() => {
      plugin.saveSettings();
    }, 100);
    memoService.updateTagsState();
  }
  async hide() {
  }
  async display() {
    await this.plugin.loadSettings();
    const { containerEl } = this;
    this.containerEl.empty();
    this.containerEl.createEl("h1", { text: t("Basic Options") });
    new require$$0.Setting(containerEl).setName(t("User name in Memos")).setDesc(t("Set your user name here. 'Memos \u{1F60F}' By default")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.UserName).setValue(this.plugin.settings.UserName).onChange(async (value) => {
      this.plugin.settings.UserName = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Insert after heading")).setDesc(t("You should set the same heading below if you want to insert and process memos below the same heading.")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.InsertAfter).setValue(this.plugin.settings.InsertAfter).onChange(async (value) => {
      this.plugin.settings.InsertAfter = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Process Memos below")).setDesc(t("Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.ProcessEntriesBelow).setValue(this.plugin.settings.ProcessEntriesBelow).onChange(async (value) => {
      this.plugin.settings.ProcessEntriesBelow = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Save Memo button label")).setDesc(t("The text shown on the save Memo button in the UI. 'NOTEIT' by default.")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.SaveMemoButtonLabel).setValue(this.plugin.settings.SaveMemoButtonLabel).onChange(async (value) => {
      this.plugin.settings.SaveMemoButtonLabel = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Focus on editor when open memos")).setDesc(t("Focus on editor when open memos. Focus by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.FocusOnEditor).onChange(async (value) => {
      this.plugin.settings.FocusOnEditor = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Open daily memos with open memos")).setDesc(t("Open daily memos with open memos. Open by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.OpenDailyMemosWithMemos).onChange(async (value) => {
      this.plugin.settings.OpenDailyMemosWithMemos = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Open Memos when obsidian opens")).setDesc(t("When enable this, Memos will open when Obsidian opens. False by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.OpenMemosAutomatically).onChange(async (value) => {
      this.plugin.settings.OpenMemosAutomatically = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Hide done tasks in Memo list")).setDesc(t("Hide all done tasks in Memo list. Show done tasks by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.HideDoneTasks).onChange(async (value) => {
      this.plugin.settings.HideDoneTasks = value;
      this.applySettingsUpdate();
    }));
    this.containerEl.createEl("h1", { text: t("Advanced Options") });
    let dropdown;
    new require$$0.Setting(containerEl).setName(t("UI language for date")).setDesc(t("Translates the date UI language. Only 'en' and 'zh' are available.")).addDropdown(async (d) => {
      dropdown = d;
      dropdown.addOption("zh", "\u4E2D\u6587");
      dropdown.addOption("en", "English");
      dropdown.setValue(this.plugin.settings.Language).onChange(async (value) => {
        this.plugin.settings.Language = value;
        this.applySettingsUpdate();
      });
    });
    new require$$0.Setting(containerEl).setName(t("Default prefix")).setDesc(t("Set the default prefix when create memo, 'List' by default.")).addDropdown(async (d) => {
      dropdown = d;
      dropdown.addOption("List", t("List"));
      dropdown.addOption("Task", t("Task"));
      dropdown.setValue(this.plugin.settings.DefaultPrefix).onChange(async (value) => {
        this.plugin.settings.DefaultPrefix = value;
        this.applySettingsUpdate();
      });
    });
    new require$$0.Setting(containerEl).setName(t("Default insert date format")).setDesc(t("Set the default date format when insert date by @, 'Tasks' by default.")).addDropdown(async (d) => {
      dropdown = d;
      dropdown.addOption("Tasks", "Tasks");
      dropdown.addOption("Dataview", "Dataview");
      dropdown.setValue(this.plugin.settings.InsertDateFormat).onChange(async (value) => {
        this.plugin.settings.InsertDateFormat = value;
        this.applySettingsUpdate();
      });
    });
    new require$$0.Setting(containerEl).setName(t("Default editor position on mobile")).setDesc(t("Set the default editor position on Mobile, 'Top' by default.")).addDropdown(async (d) => {
      dropdown = d;
      dropdown.addOption("Top", t("Top"));
      dropdown.addOption("Bottom", t("Bottom"));
      dropdown.setValue(this.plugin.settings.DefaultEditorLocation).onChange(async (value) => {
        this.plugin.settings.DefaultEditorLocation = value;
        this.applySettingsUpdate();
      });
    });
    new require$$0.Setting(containerEl).setName(t("Use button to show editor on mobile")).setDesc(t("Set a float button to call editor on mobile. Only when editor located at the bottom works.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.UseButtonToShowEditor).onChange(async (value) => {
      this.plugin.settings.UseButtonToShowEditor = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Show Time When Copy Results")).setDesc(t("Show time when you copy results, like 12:00. Copy time by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.ShowTime).onChange(async (value) => {
      this.plugin.settings.ShowTime = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Show Date When Copy Results")).setDesc(t("Show date when you copy results, like [[2022-01-01]]. Copy date by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.ShowDate).onChange(async (value) => {
      this.plugin.settings.ShowDate = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Add Blank Line Between Different Date")).setDesc(t("Add blank line when copy result with date. No blank line by default.")).addToggle((toggle) => toggle.setValue(this.plugin.settings.AddBlankLineWhenDate).onChange(async (value) => {
      this.plugin.settings.AddBlankLineWhenDate = value;
      this.applySettingsUpdate();
    }));
    this.containerEl.createEl("h1", { text: t("Share Options") });
    new require$$0.Setting(containerEl).setName(t("Share Memos Image Footer Start")).setDesc(t("Set anything you want here, use {MemosNum} to display Number of memos, {UsedDay} for days. '{MemosNum} Memos {UsedDay} Days' By default")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.ShareFooterStart).setValue(this.plugin.settings.ShareFooterStart).onChange(async (value) => {
      this.plugin.settings.ShareFooterStart = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Share Memos Image Footer End")).setDesc(t("Set anything you want here, use {UserName} as your username. '\u270D\uFE0F By {UserName}' By default")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.ShareFooterEnd).setValue(this.plugin.settings.ShareFooterEnd).onChange(async (value) => {
      this.plugin.settings.ShareFooterEnd = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Save Shared Image To Folder For Mobile")).setDesc(t("Save image to folder for mobile. False by Default")).addToggle((toggle) => toggle.setValue(this.plugin.settings.AutoSaveWhenOnMobile).onChange(async (value) => {
      this.plugin.settings.AutoSaveWhenOnMobile = value;
      this.applySettingsUpdate();
    }));
    this.containerEl.createEl("h1", { text: t("Say Thank You") });
    new require$$0.Setting(containerEl).setName(t("Donate")).setDesc(t("If you like this plugin, consider donating to support continued development:")).addButton((bt) => {
      bt.buttonEl.outerHTML = `<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>`;
    });
  }
}
const TRANSLATIONS_ZH = {
  welcome: "\u6B22\u8FCE\u4F7F\u7528 Memos ",
  ribbonIconTitle: "Memos",
  months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
  weekDays: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
  weekDaysShort: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
  to: "\u81F3"
};
const TRANSLATIONS_EN = {
  welcome: "Welcome to the Memos",
  ribbonIconTitle: "Memos",
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  weekDaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  to: "to"
};
class MemosPlugin extends require$$0.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings");
  }
  async onload() {
    console.log("obsidian-memos loading...");
    await this.loadSettings();
    await this.initLocalization();
    this.registerView(MEMOS_VIEW_TYPE, (leaf) => new Memos(leaf, this));
    this.addSettingTab(new MemosSettingTab(this.app, this));
    addIcons();
    this.addRibbonIcon("Memos", instance.t("ribbonIconTitle"), () => {
      new require$$0.Notice("Open Memos Successfully");
      this.openMemos();
    });
    if (appHasDailyNotesPluginLoaded_1()) {
      new require$$0.Notice("Check if you opened Daily Notes Plugin");
    }
    this.addCommand({
      id: "open-memos",
      name: "Open Memos",
      callback: () => this.openMemos(),
      hotkeys: []
    });
    this.addCommand({
      id: "focus-on-memos-editor",
      name: "Focus On Memos Editor",
      callback: () => this.focusOnEditor(),
      hotkeys: []
    });
    this.addCommand({
      id: "show-daily-memo",
      name: "Show Daily Memo",
      callback: () => this.openDailyMemo(),
      hotkeys: []
    });
    this.addCommand({
      id: "note-it",
      name: "Note It",
      callback: () => this.noteIt(),
      hotkeys: []
    });
    this.addCommand({
      id: "focus-on-search-bar",
      name: "Search It",
      callback: () => this.searchIt(),
      hotkeys: []
    });
    this.addCommand({
      id: "change-status",
      name: "Change Status Between Task Or List",
      callback: () => this.changeStatus(),
      hotkeys: []
    });
    this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));
    console.log(instance.t("welcome"));
    console.log("obsidian-memos loaded");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(MEMOS_VIEW_TYPE);
    new require$$0.Notice("Close Memos Successfully");
  }
  async onLayoutReady() {
    const leaves = this.app.workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (leaves.length > 0) {
      if (this.settings.FocusOnEditor) {
        const leaf = leaves[0];
        leaf.view.containerEl.querySelector("textarea").focus();
      }
      return;
    }
    if (!this.settings.OpenMemosAutomatically) {
      return;
    }
    this.openMemos();
  }
  async openDailyMemo() {
    const workspaceLeaves = this.app.workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (OpenDailyMemosWithMemos === true) {
      if (workspaceLeaves !== void 0 && workspaceLeaves.length === 0) {
        this.openMemos();
        showDailyMemoDiaryDialog();
      } else {
        showDailyMemoDiaryDialog();
      }
    } else {
      showDailyMemoDiaryDialog();
    }
  }
  async openMemos() {
    const workspace = this.app.workspace;
    workspace.detachLeavesOfType(MEMOS_VIEW_TYPE);
    const leaf = workspace.getLeaf(!require$$0.Platform.isMobile && workspace.activeLeaf && workspace.activeLeaf.view instanceof require$$0.FileView);
    await leaf.setViewState({ type: MEMOS_VIEW_TYPE });
    workspace.revealLeaf(leaf);
    if (FocusOnEditor) {
      if (leaf.view.containerEl.querySelector("textarea") !== void 0) {
        leaf.view.containerEl.querySelector("textarea").focus();
      }
    }
  }
  searchIt() {
    const workspace = this.app.workspace;
    const leaves = workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (leaves.length > 0) {
      const leaf = leaves[0];
      workspace.setActiveLeaf(leaf);
      leaf.view.containerEl.querySelector(".search-bar-inputer .text-input").focus();
    } else {
      this.openMemos();
    }
  }
  focusOnEditor() {
    const workspace = this.app.workspace;
    const leaves = workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (leaves.length > 0) {
      const leaf = leaves[0];
      workspace.setActiveLeaf(leaf);
      leaf.view.containerEl.querySelector("textarea").focus();
    } else {
      this.openMemos();
    }
  }
  noteIt() {
    const workspace = this.app.workspace;
    const leaves = workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (leaves.length > 0) {
      const leaf = leaves[0];
      workspace.setActiveLeaf(leaf);
      leaf.view.containerEl.querySelector(".memo-editor .confirm-btn").click();
    } else {
      this.openMemos();
    }
  }
  changeStatus() {
    const workspace = this.app.workspace;
    const leaves = workspace.getLeavesOfType(MEMOS_VIEW_TYPE);
    if (leaves.length > 0) {
      const leaf = leaves[0];
      workspace.setActiveLeaf(leaf);
      leaf.view.containerEl.querySelector(".list-or-task").click();
    } else {
      this.openMemos();
    }
  }
  async initLocalization() {
    instance.init({
      resources: {
        en: {
          translation: TRANSLATIONS_EN
        },
        zh: {
          translation: TRANSLATIONS_ZH
        }
      }
    });
    instance.changeLanguage(this.settings.Language);
  }
}
module.exports = MemosPlugin;