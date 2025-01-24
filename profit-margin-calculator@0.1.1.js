var Vm = { exports: {} }, Jp = {}, Bm = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function oD() {
  if (tR) return gt;
  tR = 1;
  var P = Symbol.for("react.element"), K = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), me = Symbol.for("react.strict_mode"), Ke = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), Le = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), ke = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Pe = Symbol.iterator;
  function ee(b) {
    return b === null || typeof b != "object" ? null : (b = Pe && b[Pe] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, oe = Object.assign, Ce = {};
  function pt(b, $, Oe) {
    this.props = b, this.context = $, this.refs = Ce, this.updater = Oe || je;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(b, $) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, $, "setState");
  }, pt.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Fn() {
  }
  Fn.prototype = pt.prototype;
  function sn(b, $, Oe) {
    this.props = b, this.context = $, this.refs = Ce, this.updater = Oe || je;
  }
  var it = sn.prototype = new Fn();
  it.constructor = sn, oe(it, pt.prototype), it.isPureReactComponent = !0;
  var Ve = Array.isArray, kt = Object.prototype.hasOwnProperty, Re = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(b, $, Oe) {
    var $e, et = {}, lt = null, ht = null;
    if ($ != null) for ($e in $.ref !== void 0 && (ht = $.ref), $.key !== void 0 && (lt = "" + $.key), $) kt.call($, $e) && !ft.hasOwnProperty($e) && (et[$e] = $[$e]);
    var ct = arguments.length - 2;
    if (ct === 1) et.children = Oe;
    else if (1 < ct) {
      for (var Et = Array(ct), Vt = 0; Vt < ct; Vt++) Et[Vt] = arguments[Vt + 2];
      et.children = Et;
    }
    if (b && b.defaultProps) for ($e in ct = b.defaultProps, ct) et[$e] === void 0 && (et[$e] = ct[$e]);
    return { $$typeof: P, type: b, key: lt, ref: ht, props: et, _owner: Re.current };
  }
  function xn(b, $) {
    return { $$typeof: P, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function gn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === P;
  }
  function Jt(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Oe) {
      return $[Oe];
    });
  }
  var St = /\/+/g;
  function nn(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? Jt("" + b.key) : $.toString(36);
  }
  function Be(b, $, Oe, $e, et) {
    var lt = typeof b;
    (lt === "undefined" || lt === "boolean") && (b = null);
    var ht = !1;
    if (b === null) ht = !0;
    else switch (lt) {
      case "string":
      case "number":
        ht = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case P:
          case K:
            ht = !0;
        }
    }
    if (ht) return ht = b, et = et(ht), b = $e === "" ? "." + nn(ht, 0) : $e, Ve(et) ? (Oe = "", b != null && (Oe = b.replace(St, "$&/") + "/"), Be(et, $, Oe, "", function(Vt) {
      return Vt;
    })) : et != null && (gn(et) && (et = xn(et, Oe + (!et.key || ht && ht.key === et.key ? "" : ("" + et.key).replace(St, "$&/") + "/") + b)), $.push(et)), 1;
    if (ht = 0, $e = $e === "" ? "." : $e + ":", Ve(b)) for (var ct = 0; ct < b.length; ct++) {
      lt = b[ct];
      var Et = $e + nn(lt, ct);
      ht += Be(lt, $, Oe, Et, et);
    }
    else if (Et = ee(b), typeof Et == "function") for (b = Et.call(b), ct = 0; !(lt = b.next()).done; ) lt = lt.value, Et = $e + nn(lt, ct++), ht += Be(lt, $, Oe, Et, et);
    else if (lt === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function rt(b, $, Oe) {
    if (b == null) return b;
    var $e = [], et = 0;
    return Be(b, $e, "", "", function(lt) {
      return $.call(Oe, lt, et++);
    }), $e;
  }
  function _t(b) {
    if (b._status === -1) {
      var $ = b._result;
      $ = $(), $.then(function(Oe) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Oe);
      }, function(Oe) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Oe);
      }), b._status === -1 && (b._status = 0, b._result = $);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var at = { current: null }, B = { transition: null }, he = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: B, ReactCurrentOwner: Re };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: rt, forEach: function(b, $, Oe) {
    rt(b, function() {
      $.apply(this, arguments);
    }, Oe);
  }, count: function(b) {
    var $ = 0;
    return rt(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return rt(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!gn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = pt, gt.Fragment = k, gt.Profiler = Ke, gt.PureComponent = sn, gt.StrictMode = me, gt.Suspense = Ze, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, gt.act = ie, gt.cloneElement = function(b, $, Oe) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var $e = oe({}, b.props), et = b.key, lt = b.ref, ht = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (lt = $.ref, ht = Re.current), $.key !== void 0 && (et = "" + $.key), b.type && b.type.defaultProps) var ct = b.type.defaultProps;
      for (Et in $) kt.call($, Et) && !ft.hasOwnProperty(Et) && ($e[Et] = $[Et] === void 0 && ct !== void 0 ? ct[Et] : $[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) $e.children = Oe;
    else if (1 < Et) {
      ct = Array(Et);
      for (var Vt = 0; Vt < Et; Vt++) ct[Vt] = arguments[Vt + 2];
      $e.children = ct;
    }
    return { $$typeof: P, type: b.type, key: et, ref: lt, props: $e, _owner: ht };
  }, gt.createContext = function(b) {
    return b = { $$typeof: Le, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: zt, _context: b }, b.Consumer = b;
  }, gt.createElement = Qe, gt.createFactory = function(b) {
    var $ = Qe.bind(null, b);
    return $.type = b, $;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, gt.isValidElement = gn, gt.lazy = function(b) {
    return { $$typeof: ue, _payload: { _status: -1, _result: b }, _init: _t };
  }, gt.memo = function(b, $) {
    return { $$typeof: ke, type: b, compare: $ === void 0 ? null : $ };
  }, gt.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, gt.unstable_act = ie, gt.useCallback = function(b, $) {
    return at.current.useCallback(b, $);
  }, gt.useContext = function(b) {
    return at.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return at.current.useDeferredValue(b);
  }, gt.useEffect = function(b, $) {
    return at.current.useEffect(b, $);
  }, gt.useId = function() {
    return at.current.useId();
  }, gt.useImperativeHandle = function(b, $, Oe) {
    return at.current.useImperativeHandle(b, $, Oe);
  }, gt.useInsertionEffect = function(b, $) {
    return at.current.useInsertionEffect(b, $);
  }, gt.useLayoutEffect = function(b, $) {
    return at.current.useLayoutEffect(b, $);
  }, gt.useMemo = function(b, $) {
    return at.current.useMemo(b, $);
  }, gt.useReducer = function(b, $, Oe) {
    return at.current.useReducer(b, $, Oe);
  }, gt.useRef = function(b) {
    return at.current.useRef(b);
  }, gt.useState = function(b) {
    return at.current.useState(b);
  }, gt.useSyncExternalStore = function(b, $, Oe) {
    return at.current.useSyncExternalStore(b, $, Oe);
  }, gt.useTransition = function() {
    return at.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var tv = { exports: {} };
tv.exports;
var nR;
function sD() {
  return nR || (nR = 1, function(P, K) {
    var k = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    k.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var me = "18.3.1", Ke = Symbol.for("react.element"), zt = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), pt = Symbol.for("react.offscreen"), Fn = Symbol.iterator, sn = "@@iterator";
      function it(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Fn && h[Fn] || h[sn];
        return typeof C == "function" ? C : null;
      }
      var Ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Qe = {}, xn = null;
      function gn(h) {
        xn = h;
      }
      Qe.setExtraStackFrame = function(h) {
        xn = h;
      }, Qe.getCurrentStack = null, Qe.getStackAddendum = function() {
        var h = "";
        xn && (h += xn);
        var C = Qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, St = !1, nn = !1, Be = !1, rt = !1, _t = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: ft
      };
      _t.ReactDebugCurrentFrame = Qe, _t.ReactCurrentActQueue = Re;
      function at(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          he("warn", h, N);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          he("error", h, N);
        }
      }
      function he(h, C, N) {
        {
          var j = _t.ReactDebugCurrentFrame, J = j.getStackAddendum();
          J !== "" && (C += "%s", N = N.concat([J]));
          var Se = N.map(function(de) {
            return String(de);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var ie = {};
      function b(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", J = j + "." + C;
          if (ie[J])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), ie[J] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          b(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          b(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          b(h, "setState");
        }
      }, Oe = Object.assign, $e = {};
      Object.freeze($e);
      function et(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || $;
      }
      et.prototype.isReactComponent = {}, et.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, et.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var lt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(h, C) {
          Object.defineProperty(et.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ct in lt)
          lt.hasOwnProperty(ct) && ht(ct, lt[ct]);
      }
      function Et() {
      }
      Et.prototype = et.prototype;
      function Vt(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || $;
      }
      var Xn = Vt.prototype = new Et();
      Xn.constructor = Vt, Oe(Xn, et.prototype), Xn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var fr = Array.isArray;
      function Sn(h) {
        return fr(h);
      }
      function Kn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Hn(h) {
        try {
          return wn(h), !1;
        } catch {
          return !0;
        }
      }
      function wn(h) {
        return "" + h;
      }
      function Ln(h) {
        if (Hn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(h)), wn(h);
      }
      function gr(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var J = C.displayName || C.name || "";
        return J !== "" ? N + "(" + J + ")" : N;
      }
      function dr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Le:
            return "Fragment";
          case zt:
            return "Portal";
          case Ze:
            return "Profiler";
          case S:
            return "StrictMode";
          case ee:
            return "Suspense";
          case je:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var C = h;
              return dr(C) + ".Consumer";
            case ke:
              var N = h;
              return dr(N._context) + ".Provider";
            case Pe:
              return gr(h, h.render, "ForwardRef");
            case oe:
              var j = h.displayName || null;
              return j !== null ? j : Pn(h.type) || "Memo";
            case Ce: {
              var J = h, Se = J._payload, de = J._init;
              try {
                return Pn(de(Se));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ra = Object.prototype.hasOwnProperty, aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, pr, ia, Jn;
      Jn = {};
      function Sr(h) {
        if (ra.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function cn(h) {
        if (ra.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function la(h, C) {
        var N = function() {
          pr || (pr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ua(h, C) {
        var N = function() {
          ia || (ia = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function oa(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Pn(ft.current.type);
          Jn[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ne = function(h, C, N, j, J, Se, de) {
        var Ye = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ke,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: de,
          // Record the component responsible for creating this element.
          _owner: Se
        };
        return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ye, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ye, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
      };
      function De(h, C, N) {
        var j, J = {}, Se = null, de = null, Ye = null, st = null;
        if (C != null) {
          Sr(C) && (de = C.ref, oa(C)), cn(C) && (Ln(C.key), Se = "" + C.key), Ye = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (j in C)
            ra.call(C, j) && !aa.hasOwnProperty(j) && (J[j] = C[j]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          J.children = N;
        else if (Ht > 1) {
          for (var $t = Array(Ht), Yt = 0; Yt < Ht; Yt++)
            $t[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze($t), J.children = $t;
        }
        if (h && h.defaultProps) {
          var It = h.defaultProps;
          for (j in It)
            J[j] === void 0 && (J[j] = It[j]);
        }
        if (Se || de) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && la(J, an), de && ua(J, an);
        }
        return ne(h, Se, de, Ye, st, ft.current, J);
      }
      function ut(h, C) {
        var N = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function At(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, J = Oe({}, h.props), Se = h.key, de = h.ref, Ye = h._self, st = h._source, Ht = h._owner;
        if (C != null) {
          Sr(C) && (de = C.ref, Ht = ft.current), cn(C) && (Ln(C.key), Se = "" + C.key);
          var $t;
          h.type && h.type.defaultProps && ($t = h.type.defaultProps);
          for (j in C)
            ra.call(C, j) && !aa.hasOwnProperty(j) && (C[j] === void 0 && $t !== void 0 ? J[j] = $t[j] : J[j] = C[j]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          J.children = N;
        else if (Yt > 1) {
          for (var It = Array(Yt), an = 0; an < Yt; an++)
            It[an] = arguments[an + 2];
          J.children = It;
        }
        return ne(h.type, Se, de, Ye, st, Ht, J);
      }
      function Ot(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ke;
      }
      var bn = ".", pn = ":";
      function vr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(J) {
          return N[J];
        });
        return "$" + j;
      }
      var Bt = !1, Yn = /\/+/g;
      function jt(h) {
        return h.replace(Yn, "$&/");
      }
      function Zt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ln(h.key), vr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, N, j, J) {
        var Se = typeof h;
        (Se === "undefined" || Se === "boolean") && (h = null);
        var de = !1;
        if (h === null)
          de = !0;
        else
          switch (Se) {
            case "string":
            case "number":
              de = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ke:
                case zt:
                  de = !0;
              }
          }
        if (de) {
          var Ye = h, st = J(Ye), Ht = j === "" ? bn + Zt(Ye, 0) : j;
          if (Sn(st)) {
            var $t = "";
            Ht != null && ($t = jt(Ht) + "/"), Ga(st, C, $t, "", function($f) {
              return $f;
            });
          } else st != null && (Ot(st) && (st.key && (!Ye || Ye.key !== st.key) && Ln(st.key), st = ut(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Ye || Ye.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              jt("" + st.key) + "/"
            ) : "") + Ht
          )), C.push(st));
          return 1;
        }
        var Yt, It, an = 0, xt = j === "" ? bn : j + pn;
        if (Sn(h))
          for (var xl = 0; xl < h.length; xl++)
            Yt = h[xl], It = xt + Zt(Yt, xl), an += Ga(Yt, C, N, It, J);
        else {
          var eo = it(h);
          if (typeof eo == "function") {
            var ls = h;
            eo === ls.entries && (Bt || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var us = eo.call(ls), Vi, os = 0; !(Vi = us.next()).done; )
              Yt = Vi.value, It = xt + Zt(Yt, os++), an += Ga(Yt, C, N, It, J);
          } else if (Se === "object") {
            var ss = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ss === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function ba(h, C, N) {
        if (h == null)
          return h;
        var j = [], J = 0;
        return Ga(h, j, "", "", function(Se) {
          return C.call(N, Se, J++);
        }), j;
      }
      function ml(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function ru(h, C, N) {
        ba(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function au(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function yl(h) {
        if (!Ot(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function qa(h) {
        var C = {
          $$typeof: ue,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ke,
          _context: C
        };
        var N = !1, j = !1, J = !1;
        {
          var Se = {
            $$typeof: ue,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return j || (j = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(de) {
                C.Provider = de;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(de) {
                C._currentValue = de;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(de) {
                C._currentValue2 = de;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(de) {
                C._threadCount = de;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(de) {
                J || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), J = !0);
              }
            }
          }), C.Consumer = Se;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, Da = 0, Ni = 1, Er = 2;
      function Hr(h) {
        if (h._status === Xa) {
          var C = h._result, N = C();
          if (N.then(function(Se) {
            if (h._status === Da || h._status === Xa) {
              var de = h;
              de._status = Ni, de._result = Se;
            }
          }, function(Se) {
            if (h._status === Da || h._status === Xa) {
              var de = h;
              de._status = Er, de._result = Se;
            }
          }), h._status === Xa) {
            var j = h;
            j._status = Da, j._result = N;
          }
        }
        if (h._status === Ni) {
          var J = h._result;
          return J === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw h._result;
      }
      function sa(h) {
        var C = {
          // We use these fields to store the result.
          _status: Xa,
          _result: h
        }, N = {
          $$typeof: Ce,
          _payload: C,
          _init: Hr
        };
        {
          var j, J;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Se) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Se, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Se) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Se, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function zi(h) {
        h != null && h.$$typeof === oe ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Pe,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var gl;
      gl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Le || h === Ze || rt || h === S || h === ee || h === je || Be || h === pt || Jt || St || nn || typeof h == "object" && h !== null && (h.$$typeof === Ce || h.$$typeof === oe || h.$$typeof === ke || h.$$typeof === ue || h.$$typeof === Pe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === gl || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: oe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(J) {
              j = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return N;
      }
      function G() {
        var h = Ve.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ne(h) {
        var C = G();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function dt(h) {
        var C = G();
        return C.useState(h);
      }
      function Ct(h, C, N) {
        var j = G();
        return j.useReducer(h, C, N);
      }
      function Ae(h) {
        var C = G();
        return C.useRef(h);
      }
      function ot(h, C) {
        var N = G();
        return N.useEffect(h, C);
      }
      function Mn(h, C) {
        var N = G();
        return N.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var N = G();
        return N.useLayoutEffect(h, C);
      }
      function fn(h, C) {
        var N = G();
        return N.useCallback(h, C);
      }
      function hr(h, C) {
        var N = G();
        return N.useMemo(h, C);
      }
      function Ft(h, C, N) {
        var j = G();
        return j.useImperativeHandle(h, C, N);
      }
      function ka(h, C) {
        {
          var N = G();
          return N.useDebugValue(h, C);
        }
      }
      function Nn() {
        var h = G();
        return h.useTransition();
      }
      function Pr(h) {
        var C = G();
        return C.useDeferredValue(h);
      }
      function tt() {
        var h = G();
        return h.useId();
      }
      function Ui(h, C, N) {
        var j = G();
        return j.useSyncExternalStore(h, C, N);
      }
      var Ai = 0, Sl, Vr, Xo, Cr, Ko, Jo, Zo;
      function iu() {
      }
      iu.__reactDisabledLog = !0;
      function Wu() {
        {
          if (Ai === 0) {
            Sl = console.log, Vr = console.info, Xo = console.warn, Cr = console.error, Ko = console.group, Jo = console.groupCollapsed, Zo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: iu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function ji() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Oe({}, h, {
                value: Sl
              }),
              info: Oe({}, h, {
                value: Vr
              }),
              warn: Oe({}, h, {
                value: Xo
              }),
              error: Oe({}, h, {
                value: Cr
              }),
              group: Oe({}, h, {
                value: Ko
              }),
              groupCollapsed: Oe({}, h, {
                value: Jo
              }),
              groupEnd: Oe({}, h, {
                value: Zo
              })
            });
          }
          Ai < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = _t.ReactCurrentDispatcher, Oa;
      function El(h, C, N) {
        {
          if (Oa === void 0)
            try {
              throw Error();
            } catch (J) {
              var j = J.stack.trim().match(/\n( *(at )?)/);
              Oa = j && j[1] || "";
            }
          return `
` + Oa + h;
        }
      }
      var di = !1, lu;
      {
        var uu = typeof WeakMap == "function" ? WeakMap : Map;
        lu = new uu();
      }
      function Cl(h, C) {
        if (!h || di)
          return "";
        {
          var N = lu.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        di = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Se;
        Se = fi.current, fi.current = null, Wu();
        try {
          if (C) {
            var de = function() {
              throw Error();
            };
            if (Object.defineProperty(de.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(de, []);
              } catch (xt) {
                j = xt;
              }
              Reflect.construct(h, [], de);
            } else {
              try {
                de.call();
              } catch (xt) {
                j = xt;
              }
              h.call(de.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (xt) {
              j = xt;
            }
            h();
          }
        } catch (xt) {
          if (xt && j && typeof xt.stack == "string") {
            for (var Ye = xt.stack.split(`
`), st = j.stack.split(`
`), Ht = Ye.length - 1, $t = st.length - 1; Ht >= 1 && $t >= 0 && Ye[Ht] !== st[$t]; )
              $t--;
            for (; Ht >= 1 && $t >= 0; Ht--, $t--)
              if (Ye[Ht] !== st[$t]) {
                if (Ht !== 1 || $t !== 1)
                  do
                    if (Ht--, $t--, $t < 0 || Ye[Ht] !== st[$t]) {
                      var Yt = `
` + Ye[Ht].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && lu.set(h, Yt), Yt;
                    }
                  while (Ht >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          di = !1, fi.current = Se, ji(), Error.prepareStackTrace = J;
        }
        var It = h ? h.displayName || h.name : "", an = It ? El(It) : "";
        return typeof h == "function" && lu.set(h, an), an;
      }
      function es(h, C, N) {
        return Cl(h, !1);
      }
      function ts(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function mt(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Cl(h, ts(h));
        if (typeof h == "string")
          return El(h);
        switch (h) {
          case ee:
            return El("Suspense");
          case je:
            return El("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Pe:
              return es(h.render);
            case oe:
              return mt(h.type, C, N);
            case Ce: {
              var j = h, J = j._payload, Se = j._init;
              try {
                return mt(Se(J), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var ns = {}, Gu = _t.ReactDebugCurrentFrame;
      function Rl(h) {
        if (h) {
          var C = h._owner, N = mt(h.type, h._source, C ? C.type : null);
          Gu.setExtraStackFrame(N);
        } else
          Gu.setExtraStackFrame(null);
      }
      function rs(h, C, N, j, J) {
        {
          var Se = Function.call.bind(ra);
          for (var de in h)
            if (Se(h, de)) {
              var Ye = void 0;
              try {
                if (typeof h[de] != "function") {
                  var st = Error((j || "React class") + ": " + N + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Ye = h[de](C, de, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Ye = Ht;
              }
              Ye && !(Ye instanceof Error) && (Rl(J), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, de, typeof Ye), Rl(null)), Ye instanceof Error && !(Ye.message in ns) && (ns[Ye.message] = !0, Rl(J), B("Failed %s type: %s", N, Ye.message), Rl(null));
            }
        }
      }
      function yt(h) {
        if (h) {
          var C = h._owner, N = mt(h.type, h._source, C ? C.type : null);
          gn(N);
        } else
          gn(null);
      }
      var qu;
      qu = !1;
      function ou() {
        if (ft.current) {
          var h = Pn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function We(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Ka(h) {
        return h != null ? We(h.__source) : "";
      }
      var vn = {};
      function Br(h) {
        var C = ou();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function La(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Br(C);
          if (!vn[N]) {
            vn[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + Pn(h._owner.type) + "."), yt(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), yt(null);
          }
        }
      }
      function Tl(h, C) {
        if (typeof h == "object") {
          if (Sn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              Ot(j) && La(j, C);
            }
          else if (Ot(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = it(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Se = J.call(h), de; !(de = Se.next()).done; )
                Ot(de.value) && La(de.value, C);
          }
        }
      }
      function rn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Pe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === oe))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Pn(C);
            rs(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !qu) {
            qu = !0;
            var J = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function hn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              yt(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), yt(null);
              break;
            }
          }
          h.ref !== null && (yt(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
        }
      }
      function as(h, C, N) {
        var j = R(h);
        if (!j) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ka(C);
          Se ? J += Se : J += ou();
          var de;
          h === null ? de = "null" : Sn(h) ? de = "array" : h !== void 0 && h.$$typeof === Ke ? (de = "<" + (Pn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, J);
        }
        var Ye = De.apply(this, arguments);
        if (Ye == null)
          return Ye;
        if (j)
          for (var st = 2; st < arguments.length; st++)
            Tl(arguments[st], h);
        return h === Le ? hn(Ye) : rn(Ye), Ye;
      }
      var Zn = !1;
      function $r(h) {
        var C = as.bind(null, h);
        return C.type = h, Zn || (Zn = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, N) {
        for (var j = At.apply(this, arguments), J = 2; J < arguments.length; J++)
          Tl(arguments[J], j.type);
        return rn(j), j;
      }
      function Xu(h, C) {
        var N = kt.transition;
        kt.transition = {};
        var j = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (kt.transition = N, N === null && j._updatedFibers) {
            var J = j._updatedFibers.size;
            J > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var su = !1, cu = null;
      function _l(h) {
        if (cu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = P && P[C];
            cu = N.call(P, "timers").setImmediate;
          } catch {
            cu = function(J) {
              su === !1 && (su = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = J, Se.port2.postMessage(void 0);
            };
          }
        return cu(h);
      }
      var Ma = 0, Fi = !1;
      function fu(h) {
        {
          var C = Ma;
          Ma++, Re.current === null && (Re.current = []);
          var N = Re.isBatchingLegacy, j;
          try {
            if (Re.isBatchingLegacy = !0, j = h(), !N && Re.didScheduleLegacyUpdate) {
              var J = Re.current;
              J !== null && (Re.didScheduleLegacyUpdate = !1, Pi(J));
            }
          } catch (It) {
            throw Hi(C), It;
          } finally {
            Re.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Se = j, de = !1, Ye = {
              then: function(It, an) {
                de = !0, Se.then(function(xt) {
                  Hi(C), Ma === 0 ? Ku(xt, It, an) : It(xt);
                }, function(xt) {
                  Hi(C), an(xt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (Fi = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ye;
          } else {
            var st = j;
            if (Hi(C), Ma === 0) {
              var Ht = Re.current;
              Ht !== null && (Pi(Ht), Re.current = null);
              var $t = {
                then: function(It, an) {
                  Re.current === null ? (Re.current = [], Ku(st, It, an)) : It(st);
                }
              };
              return $t;
            } else {
              var Yt = {
                then: function(It, an) {
                  It(st);
                }
              };
              return Yt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Ma - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = h;
      }
      function Ku(h, C, N) {
        {
          var j = Re.current;
          if (j !== null)
            try {
              Pi(j), _l(function() {
                j.length === 0 ? (Re.current = null, C(h)) : Ku(h, C, N);
              });
            } catch (J) {
              N(J);
            }
          else
            C(h);
        }
      }
      var pi = !1;
      function Pi(h) {
        if (!pi) {
          pi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            pi = !1;
          }
        }
      }
      var Ju = as, is = Ja, Za = $r, Zu = {
        map: ba,
        forEach: ru,
        count: ml,
        toArray: au,
        only: yl
      };
      K.Children = Zu, K.Component = et, K.Fragment = Le, K.Profiler = Ze, K.PureComponent = Vt, K.StrictMode = S, K.Suspense = ee, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, K.act = fu, K.cloneElement = is, K.createContext = qa, K.createElement = Ju, K.createFactory = Za, K.createRef = Fr, K.forwardRef = zi, K.isValidElement = Ot, K.lazy = sa, K.memo = Q, K.startTransition = Xu, K.unstable_act = fu, K.useCallback = fn, K.useContext = Ne, K.useDebugValue = ka, K.useDeferredValue = Pr, K.useEffect = ot, K.useId = tt, K.useImperativeHandle = Ft, K.useInsertionEffect = Mn, K.useLayoutEffect = Gt, K.useMemo = hr, K.useReducer = Ct, K.useRef = Ae, K.useState = dt, K.useSyncExternalStore = Ui, K.useTransition = Nn, K.version = me, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var rR;
function nv() {
  if (rR) return Bm.exports;
  rR = 1;
  var P = {};
  return P.NODE_ENV === "production" ? Bm.exports = oD() : Bm.exports = sD(), Bm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function cD() {
  if (aR) return Jp;
  aR = 1;
  var P = nv(), K = Symbol.for("react.element"), k = Symbol.for("react.fragment"), me = Object.prototype.hasOwnProperty, Ke = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Le(S, Ze, ke) {
    var ue, Pe = {}, ee = null, je = null;
    ke !== void 0 && (ee = "" + ke), Ze.key !== void 0 && (ee = "" + Ze.key), Ze.ref !== void 0 && (je = Ze.ref);
    for (ue in Ze) me.call(Ze, ue) && !zt.hasOwnProperty(ue) && (Pe[ue] = Ze[ue]);
    if (S && S.defaultProps) for (ue in Ze = S.defaultProps, Ze) Pe[ue] === void 0 && (Pe[ue] = Ze[ue]);
    return { $$typeof: K, type: S, key: ee, ref: je, props: Pe, _owner: Ke.current };
  }
  return Jp.Fragment = k, Jp.jsx = Le, Jp.jsxs = Le, Jp;
}
var Zp = {}, iR;
function fD() {
  if (iR) return Zp;
  iR = 1;
  var P = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return P.NODE_ENV !== "production" && function() {
    var K = nv(), k = Symbol.for("react.element"), me = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), zt = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ze = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Ce = Symbol.iterator, pt = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = Ce && R[Ce] || R[pt];
      return typeof Q == "function" ? Q : null;
    }
    var sn = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(R) {
      {
        for (var Q = arguments.length, G = new Array(Q > 1 ? Q - 1 : 0), Ne = 1; Ne < Q; Ne++)
          G[Ne - 1] = arguments[Ne];
        Ve("error", R, G);
      }
    }
    function Ve(R, Q, G) {
      {
        var Ne = sn.ReactDebugCurrentFrame, dt = Ne.getStackAddendum();
        dt !== "" && (Q += "%s", G = G.concat([dt]));
        var Ct = G.map(function(Ae) {
          return String(Ae);
        });
        Ct.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Ct);
      }
    }
    var kt = !1, Re = !1, ft = !1, Qe = !1, xn = !1, gn;
    gn = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ke || R === Le || xn || R === zt || R === ue || R === Pe || Qe || R === oe || kt || Re || ft || typeof R == "object" && R !== null && (R.$$typeof === je || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === Ze || R.$$typeof === ke || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === gn || R.getModuleId !== void 0));
    }
    function St(R, Q, G) {
      var Ne = R.displayName;
      if (Ne)
        return Ne;
      var dt = Q.displayName || Q.name || "";
      return dt !== "" ? G + "(" + dt + ")" : G;
    }
    function nn(R) {
      return R.displayName || "Context";
    }
    function Be(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ke:
          return "Fragment";
        case me:
          return "Portal";
        case Le:
          return "Profiler";
        case zt:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Pe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ze:
            var Q = R;
            return nn(Q) + ".Consumer";
          case S:
            var G = R;
            return nn(G._context) + ".Provider";
          case ke:
            return St(R, R.render, "ForwardRef");
          case ee:
            var Ne = R.displayName || null;
            return Ne !== null ? Ne : Be(R.type) || "Memo";
          case je: {
            var dt = R, Ct = dt._payload, Ae = dt._init;
            try {
              return Be(Ae(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var rt = Object.assign, _t = 0, at, B, he, ie, b, $, Oe;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function et() {
      {
        if (_t === 0) {
          at = console.log, B = console.info, he = console.warn, ie = console.error, b = console.group, $ = console.groupCollapsed, Oe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        _t++;
      }
    }
    function lt() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, R, {
              value: at
            }),
            info: rt({}, R, {
              value: B
            }),
            warn: rt({}, R, {
              value: he
            }),
            error: rt({}, R, {
              value: ie
            }),
            group: rt({}, R, {
              value: b
            }),
            groupCollapsed: rt({}, R, {
              value: $
            }),
            groupEnd: rt({}, R, {
              value: Oe
            })
          });
        }
        _t < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = sn.ReactCurrentDispatcher, ct;
    function Et(R, Q, G) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Ne = dt.stack.trim().match(/\n( *(at )?)/);
            ct = Ne && Ne[1] || "";
          }
        return `
` + ct + R;
      }
    }
    var Vt = !1, Xn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Xn = new Fr();
    }
    function fr(R, Q) {
      if (!R || Vt)
        return "";
      {
        var G = Xn.get(R);
        if (G !== void 0)
          return G;
      }
      var Ne;
      Vt = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = ht.current, ht.current = null, et();
      try {
        if (Q) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (Nn) {
              Ne = Nn;
            }
            Reflect.construct(R, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (Nn) {
              Ne = Nn;
            }
            R.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nn) {
            Ne = Nn;
          }
          R();
        }
      } catch (Nn) {
        if (Nn && Ne && typeof Nn.stack == "string") {
          for (var ot = Nn.stack.split(`
`), Mn = Ne.stack.split(`
`), Gt = ot.length - 1, fn = Mn.length - 1; Gt >= 1 && fn >= 0 && ot[Gt] !== Mn[fn]; )
            fn--;
          for (; Gt >= 1 && fn >= 0; Gt--, fn--)
            if (ot[Gt] !== Mn[fn]) {
              if (Gt !== 1 || fn !== 1)
                do
                  if (Gt--, fn--, fn < 0 || ot[Gt] !== Mn[fn]) {
                    var hr = `
` + ot[Gt].replace(" at new ", " at ");
                    return R.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", R.displayName)), typeof R == "function" && Xn.set(R, hr), hr;
                  }
                while (Gt >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, ht.current = Ct, lt(), Error.prepareStackTrace = dt;
      }
      var Ft = R ? R.displayName || R.name : "", ka = Ft ? Et(Ft) : "";
      return typeof R == "function" && Xn.set(R, ka), ka;
    }
    function Sn(R, Q, G) {
      return fr(R, !1);
    }
    function Kn(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Hn(R, Q, G) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return fr(R, Kn(R));
      if (typeof R == "string")
        return Et(R);
      switch (R) {
        case ue:
          return Et("Suspense");
        case Pe:
          return Et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ke:
            return Sn(R.render);
          case ee:
            return Hn(R.type, Q, G);
          case je: {
            var Ne = R, dt = Ne._payload, Ct = Ne._init;
            try {
              return Hn(Ct(dt), Q, G);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Ln = {}, gr = sn.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        gr.setExtraStackFrame(G);
      } else
        gr.setExtraStackFrame(null);
    }
    function Pn(R, Q, G, Ne, dt) {
      {
        var Ct = Function.call.bind(wn);
        for (var Ae in R)
          if (Ct(R, Ae)) {
            var ot = void 0;
            try {
              if (typeof R[Ae] != "function") {
                var Mn = Error((Ne || "React class") + ": " + G + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mn.name = "Invariant Violation", Mn;
              }
              ot = R[Ae](Q, Ae, Ne, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              ot = Gt;
            }
            ot && !(ot instanceof Error) && (dr(dt), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", G, Ae, typeof ot), dr(null)), ot instanceof Error && !(ot.message in Ln) && (Ln[ot.message] = !0, dr(dt), it("Failed %s type: %s", G, ot.message), dr(null));
          }
      }
    }
    var ra = Array.isArray;
    function aa(R) {
      return ra(R);
    }
    function pr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, G = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return G;
      }
    }
    function ia(R) {
      try {
        return Jn(R), !1;
      } catch {
        return !0;
      }
    }
    function Jn(R) {
      return "" + R;
    }
    function Sr(R) {
      if (ia(R))
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(R)), Jn(R);
    }
    var cn = sn.ReactCurrentOwner, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ua, oa, ne;
    ne = {};
    function De(R) {
      if (wn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ut(R) {
      if (wn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, Q) {
      if (typeof R.ref == "string" && cn.current && Q && cn.current.stateNode !== Q) {
        var G = Be(cn.current.type);
        ne[G] || (it('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(cn.current.type), R.ref), ne[G] = !0);
      }
    }
    function Ot(R, Q) {
      {
        var G = function() {
          ua || (ua = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function bn(R, Q) {
      {
        var G = function() {
          oa || (oa = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var pn = function(R, Q, G, Ne, dt, Ct, Ae) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: G,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Ct
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function vr(R, Q, G, Ne, dt) {
      {
        var Ct, Ae = {}, ot = null, Mn = null;
        G !== void 0 && (Sr(G), ot = "" + G), ut(Q) && (Sr(Q.key), ot = "" + Q.key), De(Q) && (Mn = Q.ref, At(Q, dt));
        for (Ct in Q)
          wn.call(Q, Ct) && !la.hasOwnProperty(Ct) && (Ae[Ct] = Q[Ct]);
        if (R && R.defaultProps) {
          var Gt = R.defaultProps;
          for (Ct in Gt)
            Ae[Ct] === void 0 && (Ae[Ct] = Gt[Ct]);
        }
        if (ot || Mn) {
          var fn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && Ot(Ae, fn), Mn && bn(Ae, fn);
        }
        return pn(R, ot, Mn, dt, Ne, cn.current, Ae);
      }
    }
    var Bt = sn.ReactCurrentOwner, Yn = sn.ReactDebugCurrentFrame;
    function jt(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        Yn.setExtraStackFrame(G);
      } else
        Yn.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Ga(R) {
      return typeof R == "object" && R !== null && R.$$typeof === k;
    }
    function ba() {
      {
        if (Bt.current) {
          var R = Be(Bt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ml(R) {
      return "";
    }
    var ru = {};
    function au(R) {
      {
        var Q = ba();
        if (!Q) {
          var G = typeof R == "string" ? R : R.displayName || R.name;
          G && (Q = `

Check the top-level render call using <` + G + ">.");
        }
        return Q;
      }
    }
    function yl(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var G = au(Q);
        if (ru[G])
          return;
        ru[G] = !0;
        var Ne = "";
        R && R._owner && R._owner !== Bt.current && (Ne = " It was passed a child from " + Be(R._owner.type) + "."), jt(R), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Ne), jt(null);
      }
    }
    function qa(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (aa(R))
          for (var G = 0; G < R.length; G++) {
            var Ne = R[G];
            Ga(Ne) && yl(Ne, Q);
          }
        else if (Ga(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var dt = Fn(R);
          if (typeof dt == "function" && dt !== R.entries)
            for (var Ct = dt.call(R), Ae; !(Ae = Ct.next()).done; )
              Ga(Ae.value) && yl(Ae.value, Q);
        }
      }
    }
    function Xa(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var G;
        if (typeof Q == "function")
          G = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ke || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === ee))
          G = Q.propTypes;
        else
          return;
        if (G) {
          var Ne = Be(Q);
          Pn(G, R.props, "prop", Ne, R);
        } else if (Q.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var dt = Be(Q);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var Q = Object.keys(R.props), G = 0; G < Q.length; G++) {
          var Ne = Q[G];
          if (Ne !== "children" && Ne !== "key") {
            jt(R), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), jt(null);
            break;
          }
        }
        R.ref !== null && (jt(R), it("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    var Ni = {};
    function Er(R, Q, G, Ne, dt, Ct) {
      {
        var Ae = Jt(R);
        if (!Ae) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mn = ml();
          Mn ? ot += Mn : ot += ba();
          var Gt;
          R === null ? Gt = "null" : aa(R) ? Gt = "array" : R !== void 0 && R.$$typeof === k ? (Gt = "<" + (Be(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof R, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, ot);
        }
        var fn = vr(R, Q, G, dt, Ct);
        if (fn == null)
          return fn;
        if (Ae) {
          var hr = Q.children;
          if (hr !== void 0)
            if (Ne)
              if (aa(hr)) {
                for (var Ft = 0; Ft < hr.length; Ft++)
                  qa(hr[Ft], R);
                Object.freeze && Object.freeze(hr);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(hr, R);
        }
        if (wn.call(Q, "key")) {
          var ka = Be(R), Nn = Object.keys(Q).filter(function(Ui) {
            return Ui !== "key";
          }), Pr = Nn.length > 0 ? "{key: someKey, " + Nn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ni[ka + Pr]) {
            var tt = Nn.length > 0 ? "{" + Nn.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, ka, tt, ka), Ni[ka + Pr] = !0;
          }
        }
        return R === Ke ? Da(fn) : Xa(fn), fn;
      }
    }
    function Hr(R, Q, G) {
      return Er(R, Q, G, !0);
    }
    function sa(R, Q, G) {
      return Er(R, Q, G, !1);
    }
    var zi = sa, gl = Hr;
    Zp.Fragment = Ke, Zp.jsx = zi, Zp.jsxs = gl;
  }(), Zp;
}
var lR;
function dD() {
  if (lR) return Vm.exports;
  lR = 1;
  var P = {};
  return P.NODE_ENV === "production" ? Vm.exports = cD() : Vm.exports = fD(), Vm.exports;
}
var Ut = dD(), S0 = nv(), Vf = {}, $m = { exports: {} }, Qa = {}, Ym = { exports: {} }, y0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function pD() {
  return uR || (uR = 1, function(P) {
    function K(B, he) {
      var ie = B.length;
      B.push(he);
      e: for (; 0 < ie; ) {
        var b = ie - 1 >>> 1, $ = B[b];
        if (0 < Ke($, he)) B[b] = he, B[ie] = $, ie = b;
        else break e;
      }
    }
    function k(B) {
      return B.length === 0 ? null : B[0];
    }
    function me(B) {
      if (B.length === 0) return null;
      var he = B[0], ie = B.pop();
      if (ie !== he) {
        B[0] = ie;
        e: for (var b = 0, $ = B.length, Oe = $ >>> 1; b < Oe; ) {
          var $e = 2 * (b + 1) - 1, et = B[$e], lt = $e + 1, ht = B[lt];
          if (0 > Ke(et, ie)) lt < $ && 0 > Ke(ht, et) ? (B[b] = ht, B[lt] = ie, b = lt) : (B[b] = et, B[$e] = ie, b = $e);
          else if (lt < $ && 0 > Ke(ht, ie)) B[b] = ht, B[lt] = ie, b = lt;
          else break e;
        }
      }
      return he;
    }
    function Ke(B, he) {
      var ie = B.sortIndex - he.sortIndex;
      return ie !== 0 ? ie : B.id - he.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var zt = performance;
      P.unstable_now = function() {
        return zt.now();
      };
    } else {
      var Le = Date, S = Le.now();
      P.unstable_now = function() {
        return Le.now() - S;
      };
    }
    var Ze = [], ke = [], ue = 1, Pe = null, ee = 3, je = !1, oe = !1, Ce = !1, pt = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function it(B) {
      for (var he = k(ke); he !== null; ) {
        if (he.callback === null) me(ke);
        else if (he.startTime <= B) me(ke), he.sortIndex = he.expirationTime, K(Ze, he);
        else break;
        he = k(ke);
      }
    }
    function Ve(B) {
      if (Ce = !1, it(B), !oe) if (k(Ze) !== null) oe = !0, _t(kt);
      else {
        var he = k(ke);
        he !== null && at(Ve, he.startTime - B);
      }
    }
    function kt(B, he) {
      oe = !1, Ce && (Ce = !1, Fn(Qe), Qe = -1), je = !0;
      var ie = ee;
      try {
        for (it(he), Pe = k(Ze); Pe !== null && (!(Pe.expirationTime > he) || B && !Jt()); ) {
          var b = Pe.callback;
          if (typeof b == "function") {
            Pe.callback = null, ee = Pe.priorityLevel;
            var $ = b(Pe.expirationTime <= he);
            he = P.unstable_now(), typeof $ == "function" ? Pe.callback = $ : Pe === k(Ze) && me(Ze), it(he);
          } else me(Ze);
          Pe = k(Ze);
        }
        if (Pe !== null) var Oe = !0;
        else {
          var $e = k(ke);
          $e !== null && at(Ve, $e.startTime - he), Oe = !1;
        }
        return Oe;
      } finally {
        Pe = null, ee = ie, je = !1;
      }
    }
    var Re = !1, ft = null, Qe = -1, xn = 5, gn = -1;
    function Jt() {
      return !(P.unstable_now() - gn < xn);
    }
    function St() {
      if (ft !== null) {
        var B = P.unstable_now();
        gn = B;
        var he = !0;
        try {
          he = ft(!0, B);
        } finally {
          he ? nn() : (Re = !1, ft = null);
        }
      } else Re = !1;
    }
    var nn;
    if (typeof sn == "function") nn = function() {
      sn(St);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), rt = Be.port2;
      Be.port1.onmessage = St, nn = function() {
        rt.postMessage(null);
      };
    } else nn = function() {
      pt(St, 0);
    };
    function _t(B) {
      ft = B, Re || (Re = !0, nn());
    }
    function at(B, he) {
      Qe = pt(function() {
        B(P.unstable_now());
      }, he);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, P.unstable_continueExecution = function() {
      oe || je || (oe = !0, _t(kt));
    }, P.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, P.unstable_getFirstCallbackNode = function() {
      return k(Ze);
    }, P.unstable_next = function(B) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = ee;
      }
      var ie = ee;
      ee = he;
      try {
        return B();
      } finally {
        ee = ie;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function(B, he) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var ie = ee;
      ee = B;
      try {
        return he();
      } finally {
        ee = ie;
      }
    }, P.unstable_scheduleCallback = function(B, he, ie) {
      var b = P.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? b + ie : b) : ie = b, B) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = ie + $, B = { id: ue++, callback: he, priorityLevel: B, startTime: ie, expirationTime: $, sortIndex: -1 }, ie > b ? (B.sortIndex = ie, K(ke, B), k(Ze) === null && B === k(ke) && (Ce ? (Fn(Qe), Qe = -1) : Ce = !0, at(Ve, ie - b))) : (B.sortIndex = $, K(Ze, B), oe || je || (oe = !0, _t(kt))), B;
    }, P.unstable_shouldYield = Jt, P.unstable_wrapCallback = function(B) {
      var he = ee;
      return function() {
        var ie = ee;
        ee = he;
        try {
          return B.apply(this, arguments);
        } finally {
          ee = ie;
        }
      };
    };
  }(y0)), y0;
}
var g0 = {}, oR;
function vD() {
  return oR || (oR = 1, function(P) {
    var K = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    K.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = !1, me = !1, Ke = 5;
      function zt(ne, De) {
        var ut = ne.length;
        ne.push(De), Ze(ne, De, ut);
      }
      function Le(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var De = ne[0], ut = ne.pop();
        return ut !== De && (ne[0] = ut, ke(ne, ut, 0)), De;
      }
      function Ze(ne, De, ut) {
        for (var At = ut; At > 0; ) {
          var Ot = At - 1 >>> 1, bn = ne[Ot];
          if (ue(bn, De) > 0)
            ne[Ot] = De, ne[At] = bn, At = Ot;
          else
            return;
        }
      }
      function ke(ne, De, ut) {
        for (var At = ut, Ot = ne.length, bn = Ot >>> 1; At < bn; ) {
          var pn = (At + 1) * 2 - 1, vr = ne[pn], Bt = pn + 1, Yn = ne[Bt];
          if (ue(vr, De) < 0)
            Bt < Ot && ue(Yn, vr) < 0 ? (ne[At] = Yn, ne[Bt] = De, At = Bt) : (ne[At] = vr, ne[pn] = De, At = pn);
          else if (Bt < Ot && ue(Yn, De) < 0)
            ne[At] = Yn, ne[Bt] = De, At = Bt;
          else
            return;
        }
      }
      function ue(ne, De) {
        var ut = ne.sortIndex - De.sortIndex;
        return ut !== 0 ? ut : ne.id - De.id;
      }
      var Pe = 1, ee = 2, je = 3, oe = 4, Ce = 5;
      function pt(ne, De) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var sn = performance;
        P.unstable_now = function() {
          return sn.now();
        };
      } else {
        var it = Date, Ve = it.now();
        P.unstable_now = function() {
          return it.now() - Ve;
        };
      }
      var kt = 1073741823, Re = -1, ft = 250, Qe = 5e3, xn = 1e4, gn = kt, Jt = [], St = [], nn = 1, Be = null, rt = je, _t = !1, at = !1, B = !1, he = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ne) {
        for (var De = Le(St); De !== null; ) {
          if (De.callback === null)
            S(St);
          else if (De.startTime <= ne)
            S(St), De.sortIndex = De.expirationTime, zt(Jt, De);
          else
            return;
          De = Le(St);
        }
      }
      function Oe(ne) {
        if (B = !1, $(ne), !at)
          if (Le(Jt) !== null)
            at = !0, Sr($e);
          else {
            var De = Le(St);
            De !== null && cn(Oe, De.startTime - ne);
          }
      }
      function $e(ne, De) {
        at = !1, B && (B = !1, la()), _t = !0;
        var ut = rt;
        try {
          var At;
          if (!me) return et(ne, De);
        } finally {
          Be = null, rt = ut, _t = !1;
        }
      }
      function et(ne, De) {
        var ut = De;
        for ($(ut), Be = Le(Jt); Be !== null && !k && !(Be.expirationTime > ut && (!ne || dr())); ) {
          var At = Be.callback;
          if (typeof At == "function") {
            Be.callback = null, rt = Be.priorityLevel;
            var Ot = Be.expirationTime <= ut, bn = At(Ot);
            ut = P.unstable_now(), typeof bn == "function" ? Be.callback = bn : Be === Le(Jt) && S(Jt), $(ut);
          } else
            S(Jt);
          Be = Le(Jt);
        }
        if (Be !== null)
          return !0;
        var pn = Le(St);
        return pn !== null && cn(Oe, pn.startTime - ut), !1;
      }
      function lt(ne, De) {
        switch (ne) {
          case Pe:
          case ee:
          case je:
          case oe:
          case Ce:
            break;
          default:
            ne = je;
        }
        var ut = rt;
        rt = ne;
        try {
          return De();
        } finally {
          rt = ut;
        }
      }
      function ht(ne) {
        var De;
        switch (rt) {
          case Pe:
          case ee:
          case je:
            De = je;
            break;
          default:
            De = rt;
            break;
        }
        var ut = rt;
        rt = De;
        try {
          return ne();
        } finally {
          rt = ut;
        }
      }
      function ct(ne) {
        var De = rt;
        return function() {
          var ut = rt;
          rt = De;
          try {
            return ne.apply(this, arguments);
          } finally {
            rt = ut;
          }
        };
      }
      function Et(ne, De, ut) {
        var At = P.unstable_now(), Ot;
        if (typeof ut == "object" && ut !== null) {
          var bn = ut.delay;
          typeof bn == "number" && bn > 0 ? Ot = At + bn : Ot = At;
        } else
          Ot = At;
        var pn;
        switch (ne) {
          case Pe:
            pn = Re;
            break;
          case ee:
            pn = ft;
            break;
          case Ce:
            pn = gn;
            break;
          case oe:
            pn = xn;
            break;
          case je:
          default:
            pn = Qe;
            break;
        }
        var vr = Ot + pn, Bt = {
          id: nn++,
          callback: De,
          priorityLevel: ne,
          startTime: Ot,
          expirationTime: vr,
          sortIndex: -1
        };
        return Ot > At ? (Bt.sortIndex = Ot, zt(St, Bt), Le(Jt) === null && Bt === Le(St) && (B ? la() : B = !0, cn(Oe, Ot - At))) : (Bt.sortIndex = vr, zt(Jt, Bt), !at && !_t && (at = !0, Sr($e))), Bt;
      }
      function Vt() {
      }
      function Xn() {
        !at && !_t && (at = !0, Sr($e));
      }
      function Fr() {
        return Le(Jt);
      }
      function fr(ne) {
        ne.callback = null;
      }
      function Sn() {
        return rt;
      }
      var Kn = !1, Hn = null, wn = -1, Ln = Ke, gr = -1;
      function dr() {
        var ne = P.unstable_now() - gr;
        return !(ne < Ln);
      }
      function Pn() {
      }
      function ra(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Ln = Math.floor(1e3 / ne) : Ln = Ke;
      }
      var aa = function() {
        if (Hn !== null) {
          var ne = P.unstable_now();
          gr = ne;
          var De = !0, ut = !0;
          try {
            ut = Hn(De, ne);
          } finally {
            ut ? pr() : (Kn = !1, Hn = null);
          }
        } else
          Kn = !1;
      }, pr;
      if (typeof b == "function")
        pr = function() {
          b(aa);
        };
      else if (typeof MessageChannel < "u") {
        var ia = new MessageChannel(), Jn = ia.port2;
        ia.port1.onmessage = aa, pr = function() {
          Jn.postMessage(null);
        };
      } else
        pr = function() {
          he(aa, 0);
        };
      function Sr(ne) {
        Hn = ne, Kn || (Kn = !0, pr());
      }
      function cn(ne, De) {
        wn = he(function() {
          ne(P.unstable_now());
        }, De);
      }
      function la() {
        ie(wn), wn = -1;
      }
      var ua = Pn, oa = null;
      P.unstable_IdlePriority = Ce, P.unstable_ImmediatePriority = Pe, P.unstable_LowPriority = oe, P.unstable_NormalPriority = je, P.unstable_Profiling = oa, P.unstable_UserBlockingPriority = ee, P.unstable_cancelCallback = fr, P.unstable_continueExecution = Xn, P.unstable_forceFrameRate = ra, P.unstable_getCurrentPriorityLevel = Sn, P.unstable_getFirstCallbackNode = Fr, P.unstable_next = ht, P.unstable_pauseExecution = Vt, P.unstable_requestPaint = ua, P.unstable_runWithPriority = lt, P.unstable_scheduleCallback = Et, P.unstable_shouldYield = dr, P.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(g0)), g0;
}
var sR;
function mR() {
  if (sR) return Ym.exports;
  sR = 1;
  var P = {};
  return P.NODE_ENV === "production" ? Ym.exports = pD() : Ym.exports = vD(), Ym.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function hD() {
  if (cR) return Qa;
  cR = 1;
  var P = nv(), K = mR();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var me = /* @__PURE__ */ new Set(), Ke = {};
  function zt(n, r) {
    Le(n, r), Le(n + "Capture", r);
  }
  function Le(n, r) {
    for (Ke[n] = r, n = 0; n < r.length; n++) me.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ze = Object.prototype.hasOwnProperty, ke = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, Pe = {};
  function ee(n) {
    return Ze.call(Pe, n) ? !0 : Ze.call(ue, n) ? !1 : ke.test(n) ? Pe[n] = !0 : (ue[n] = !0, !1);
  }
  function je(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function oe(n, r, l, o) {
    if (r === null || typeof r > "u" || je(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ce(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pt[n] = new Ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pt[r] = new Ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pt[n] = new Ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pt[n] = new Ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pt[n] = new Ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pt[n] = new Ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pt[n] = new Ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pt[n] = new Ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pt[n] = new Ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Fn = /[\-:]([a-z])/g;
  function sn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Fn,
      sn
    );
    pt[r] = new Ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Fn, sn);
    pt[r] = new Ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Fn, sn);
    pt[r] = new Ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pt[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pt.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pt[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function it(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (oe(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ve = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Jt = Symbol.for("react.context"), St = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function he(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, b;
  function $(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var Oe = !1;
  function $e(n, r) {
    if (!n || Oe) return "";
    Oe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function et(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = $e(n.type, !1), n;
      case 11:
        return n = $e(n.type.render, !1), n;
      case 1:
        return n = $e(n.type, !0), n;
      default:
        return "";
    }
  }
  function lt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Re:
        return "Portal";
      case xn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case nn:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Jt:
        return (n.displayName || "Context") + ".Consumer";
      case gn:
        return (n._context.displayName || "Context") + ".Provider";
      case St:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case rt:
        return r = n.displayName || null, r !== null ? r : lt(n.type) || "Memo";
      case _t:
        r = n._payload, n = n._init;
        try {
          return lt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ht(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return lt(r);
      case 8:
        return r === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ct(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = Et(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Xn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Et(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function fr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Sn(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Kn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ct(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && it(n, "checked", r, !1);
  }
  function wn(n, r) {
    Hn(n, r);
    var l = ct(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? gr(n, r.type, l) : r.hasOwnProperty("defaultValue") && gr(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ln(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function gr(n, r, l) {
    (r !== "number" || fr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var dr = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ct(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ra(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function aa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (dr(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ct(l) };
  }
  function pr(n, r) {
    var l = ct(r.value), o = ct(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ia(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cn, la = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (cn = cn || document.createElement("div"), cn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ua(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var oa = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oa).forEach(function(n) {
    ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), oa[r] = oa[n];
    });
  });
  function De(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || oa.hasOwnProperty(n) && oa[n] ? ("" + r).trim() : r + "px";
  }
  function ut(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = De(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var At = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ot(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
    }
  }
  function bn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var pn = null;
  function vr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Bt = null, Yn = null, jt = null;
  function Zt(n) {
    if (n = hi(n)) {
      if (typeof Bt != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = bc(r), Bt(n.stateNode, n.type, r));
    }
  }
  function Ga(n) {
    Yn ? jt ? jt.push(n) : jt = [n] : Yn = n;
  }
  function ba() {
    if (Yn) {
      var n = Yn, r = jt;
      if (jt = Yn = null, Zt(n), r) for (n = 0; n < r.length; n++) Zt(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function ru() {
  }
  var au = !1;
  function yl(n, r, l) {
    if (au) return n(r, l);
    au = !0;
    try {
      return ml(n, r, l);
    } finally {
      au = !1, (Yn !== null || jt !== null) && (ru(), ba());
    }
  }
  function qa(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = bc(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var Xa = !1;
  if (S) try {
    var Da = {};
    Object.defineProperty(Da, "passive", { get: function() {
      Xa = !0;
    } }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
  } catch {
    Xa = !1;
  }
  function Ni(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var Er = !1, Hr = null, sa = !1, zi = null, gl = { onError: function(n) {
    Er = !0, Hr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Er = !1, Hr = null, Ni.apply(gl, arguments);
  }
  function Q(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Er) {
      if (Er) {
        var U = Hr;
        Er = !1, Hr = null;
      } else throw Error(k(198));
      sa || (sa = !0, zi = U);
    }
  }
  function G(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ne(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function dt(n) {
    if (G(n) !== n) throw Error(k(188));
  }
  function Ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = G(n), r === null) throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return dt(c), n;
          if (d === o) return dt(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(k(189));
        }
      }
      if (l.alternate !== o) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ae(n) {
    return n = Ct(n), n !== null ? ot(n) : null;
  }
  function ot(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ot(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Mn = K.unstable_scheduleCallback, Gt = K.unstable_cancelCallback, fn = K.unstable_shouldYield, hr = K.unstable_requestPaint, Ft = K.unstable_now, ka = K.unstable_getCurrentPriorityLevel, Nn = K.unstable_ImmediatePriority, Pr = K.unstable_UserBlockingPriority, tt = K.unstable_NormalPriority, Ui = K.unstable_LowPriority, Ai = K.unstable_IdlePriority, Sl = null, Vr = null;
  function Xo(n) {
    if (Vr && typeof Vr.onCommitFiberRoot == "function") try {
      Vr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cr = Math.clz32 ? Math.clz32 : Zo, Ko = Math.log, Jo = Math.LN2;
  function Zo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ko(n) / Jo | 0) | 0;
  }
  var iu = 64, Wu = 4194304;
  function ji(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function fi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ji(E) : (d &= m, d !== 0 && (o = ji(d)));
    } else m = l & ~c, m !== 0 ? o = ji(m) : d !== 0 && (o = ji(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Cr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Oa(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function El(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Cr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Oa(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function di(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = iu;
    return iu <<= 1, !(iu & 4194240) && (iu = 64), n;
  }
  function uu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Cr(r), n[r] = l;
  }
  function es(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Cr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ts(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Cr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var mt = 0;
  function ns(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gu, Rl, rs, yt, qu, ou = !1, We = [], Ka = null, vn = null, Br = null, La = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), rn = [], hn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function as(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ka = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        La.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function Zn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = hi(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $r(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ka = Zn(Ka, n, r, l, o, c), !0;
      case "dragenter":
        return vn = Zn(vn, n, r, l, o, c), !0;
      case "mouseover":
        return Br = Zn(Br, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return La.set(d, Zn(La.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tl.set(d, Zn(Tl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Gi(n.target);
    if (r !== null) {
      var l = G(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ne(l), r !== null) {
            n.blockedOn = r, qu(n.priority, function() {
              rs(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ju(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        pn = o, l.target.dispatchEvent(o), pn = null;
      } else return r = hi(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    Xu(n) && l.delete(r);
  }
  function cu() {
    ou = !1, Ka !== null && Xu(Ka) && (Ka = null), vn !== null && Xu(vn) && (vn = null), Br !== null && Xu(Br) && (Br = null), La.forEach(su), Tl.forEach(su);
  }
  function _l(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ou || (ou = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, cu)));
  }
  function Ma(n) {
    function r(c) {
      return _l(c, n);
    }
    if (0 < We.length) {
      _l(We[0], n);
      for (var l = 1; l < We.length; l++) {
        var o = We[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ka !== null && _l(Ka, n), vn !== null && _l(vn, n), Br !== null && _l(Br, n), La.forEach(r), Tl.forEach(r), l = 0; l < rn.length; l++) o = rn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < rn.length && (l = rn[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && rn.shift();
  }
  var Fi = Ve.ReactCurrentBatchConfig, fu = !0;
  function Hi(n, r, l, o) {
    var c = mt, d = Fi.transition;
    Fi.transition = null;
    try {
      mt = 1, pi(n, r, l, o);
    } finally {
      mt = c, Fi.transition = d;
    }
  }
  function Ku(n, r, l, o) {
    var c = mt, d = Fi.transition;
    Fi.transition = null;
    try {
      mt = 4, pi(n, r, l, o);
    } finally {
      mt = c, Fi.transition = d;
    }
  }
  function pi(n, r, l, o) {
    if (fu) {
      var c = Ju(n, r, l, o);
      if (c === null) td(n, r, o, Pi, l), as(n, o);
      else if ($r(c, n, r, l, o)) o.stopPropagation();
      else if (as(n, o), r & 4 && -1 < hn.indexOf(n)) {
        for (; c !== null; ) {
          var d = hi(c);
          if (d !== null && Gu(d), d = Ju(n, r, l, o), d === null && td(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else td(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Ju(n, r, l, o) {
    if (Pi = null, n = vr(o), n = Gi(n), n !== null) if (r = G(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ne(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function is(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ka()) {
          case Nn:
            return 1;
          case Pr:
            return 4;
          case tt:
          case Ui:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, Zu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Zu, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function N(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function j() {
    return !0;
  }
  function J() {
    return !1;
  }
  function Se(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : J, this.isPropagationStopped = J, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var de = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ye = Se(de), st = ie({}, de, { view: 0, detail: 0 }), Ht = Se(st), $t, Yt, It, an = ie({}, st, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== It && (It && n.type === "mousemove" ? ($t = n.screenX - It.screenX, Yt = n.screenY - It.screenY) : Yt = $t = 0, It = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Yt;
  } }), xt = Se(an), xl = ie({}, an, { dataTransfer: 0 }), eo = Se(xl), ls = ie({}, st, { relatedTarget: 0 }), us = Se(ls), Vi = ie({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), os = Se(Vi), ss = ie({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $f = Se(ss), Qm = ie({}, de, { data: 0 }), rv = Se(Qm), av = {
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
  }, Yf = {
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
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iv[n]) ? !!r[n] : !1;
  }
  function yc() {
    return lv;
  }
  var Wm = ie({}, st, { key: function(n) {
    if (n.key) {
      var r = av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = N(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Yf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yc, charCode: function(n) {
    return n.type === "keypress" ? N(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? N(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = Se(Wm), Gm = ie({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = Se(Gm), If = ie({}, st, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yc }), Qf = Se(If), qm = ie({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = Se(qm), uv = ie({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Se(uv), $i = [9, 13, 27, 32], En = S && "CompositionEvent" in window, ca = null;
  S && "documentMode" in document && (ca = document.documentMode);
  var Wf = S && "TextEvent" in window && !ca, cs = S && (!En || ca && 8 < ca && 11 >= ca), ov = " ", to = !1;
  function sv(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var wl = !1;
  function Xm(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (to = !0, ov);
      case "textInput":
        return n = r.data, n === ov && to ? null : n;
      default:
        return null;
    }
  }
  function Km(n, r) {
    if (wl) return n === "compositionend" || !En && sv(n, r) ? (n = C(), h = Zu = Za = null, wl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Ga(o), r = xc(r, "onChange"), 0 < r.length && (l = new Ye("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var fs = null, ds = null;
  function dv(n) {
    Dv(n, 0);
  }
  function Yi(n) {
    var r = io(n);
    if (Fr(r)) return n;
  }
  function qf(n, r) {
    if (n === "change") return r;
  }
  var Xf = !1;
  if (S) {
    var Ec;
    if (S) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), Kf = typeof pv.oninput == "function";
      }
      Ec = Kf;
    } else Ec = !1;
    Xf = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    fs && (fs.detachEvent("onpropertychange", hv), ds = fs = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Yi(ds)) {
      var r = [];
      fv(r, ds, n, vr(n)), yl(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (vv(), fs = r, ds = l, fs.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ey(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(ds);
  }
  function ty(n, r) {
    if (n === "click") return Yi(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : mv;
  function no(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ze.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yv(l);
    }
  }
  function Sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ev() {
    for (var n = window, r = fr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = fr(n.document);
    }
    return r;
  }
  function ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function du(n) {
    var r = Ev(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ps(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Cc = S && "documentMode" in document && 11 >= document.documentMode, pu = null, bl = null, vs = null, Jf = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || pu == null || pu !== fr(o) || (o = pu, "selectionStart" in o && ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), vs && no(vs, o) || (vs = o, o = xc(bl, "onSelect"), 0 < o.length && (r = new Ye("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = pu)));
  }
  function Rc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ro = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Tc = {}, Rv = {};
  S && (Rv = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
  function hs(n) {
    if (Tc[n]) return Tc[n];
    if (!ro[n]) return n;
    var r = ro[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Rv) return Tc[n] = r[l];
    return n;
  }
  var mr = hs("animationend"), Zf = hs("animationiteration"), Tv = hs("animationstart"), _v = hs("transitionend"), xv = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dl(n, r) {
    xv.set(n, r), zt(r, [n]);
  }
  for (var _c = 0; _c < wv.length; _c++) {
    var ms = wv[_c], ys = ms.toLowerCase(), ry = ms[0].toUpperCase() + ms.slice(1);
    Dl(ys, "on" + ry);
  }
  Dl(mr, "onAnimationEnd"), Dl(Zf, "onAnimationIteration"), Dl(Tv, "onAnimationStart"), Dl("dblclick", "onDoubleClick"), Dl("focusin", "onFocus"), Dl("focusout", "onBlur"), Dl(_v, "onTransitionEnd"), Le("onMouseEnter", ["mouseout", "mouseover"]), Le("onMouseLeave", ["mouseout", "mouseover"]), Le("onPointerEnter", ["pointerout", "pointerover"]), Le("onPointerLeave", ["pointerout", "pointerover"]), zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
  function bv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Q(o, r, void 0, n), n.currentTarget = null;
  }
  function Dv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          bv(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          bv(c, E, U), d = T;
        }
      }
    }
    if (sa) throw n = zi, sa = !1, zi = null, n;
  }
  function qt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ed(r, n, 2, !1), l.add(o));
  }
  function gs(n, r, l) {
    var o = 0;
    r && (o |= 4), ed(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, me.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || gs(l, !1, n), gs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, gs("selectionchange", !1, r));
    }
  }
  function ed(n, r, l, o) {
    switch (is(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = Ku;
        break;
      default:
        c = pi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function td(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Gi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    yl(function() {
      var U = d, W = vr(l), q = [];
      e: {
        var I = xv.get(n);
        if (I !== void 0) {
          var ce = Ye, ye = n;
          switch (n) {
            case "keypress":
              if (N(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Bi;
              break;
            case "focusin":
              ye = "focus", ce = us;
              break;
            case "focusout":
              ye = "blur", ce = us;
              break;
            case "beforeblur":
            case "afterblur":
              ce = us;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = xt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = eo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Qf;
              break;
            case mr:
            case Zf:
            case Tv:
              ce = os;
              break;
            case _v:
              ce = Sc;
              break;
            case "scroll":
              ce = Ht;
              break;
            case "wheel":
              ce = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = $f;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = gc;
          }
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", D = Ee ? I !== null ? I + "Capture" : null : I;
          Ee = [];
          for (var x = U, M; x !== null; ) {
            M = x;
            var Z = M.stateNode;
            if (M.tag === 5 && Z !== null && (M = Z, D !== null && (Z = qa(x, D), Z != null && Ee.push(ao(x, Z, M)))), kn) break;
            x = x.return;
          }
          0 < Ee.length && (I = new ce(I, ye, null, l, W), q.push({ event: I, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", I && l !== pn && (ye = l.relatedTarget || l.fromElement) && (Gi(ye) || ye[ti])) break e;
          if ((ce || I) && (I = W.window === W ? W : (I = W.ownerDocument) ? I.defaultView || I.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = U, ye = ye ? Gi(ye) : null, ye !== null && (kn = G(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = U), ce !== ye)) {
            if (Ee = xt, Z = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = gc, Z = "onPointerLeave", D = "onPointerEnter", x = "pointer"), kn = ce == null ? I : io(ce), M = ye == null ? I : io(ye), I = new Ee(Z, x + "leave", ce, l, W), I.target = kn, I.relatedTarget = M, Z = null, Gi(W) === U && (Ee = new Ee(D, x + "enter", ye, l, W), Ee.target = M, Ee.relatedTarget = kn, Z = Ee), kn = Z, ce && ye) t: {
              for (Ee = ce, D = ye, x = 0, M = Ee; M; M = vu(M)) x++;
              for (M = 0, Z = D; Z; Z = vu(Z)) M++;
              for (; 0 < x - M; ) Ee = vu(Ee), x--;
              for (; 0 < M - x; ) D = vu(D), M--;
              for (; x--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = vu(Ee), D = vu(D);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && nd(q, I, ce, Ee, !1), ye !== null && kn !== null && nd(q, kn, ye, Ee, !0);
          }
        }
        e: {
          if (I = U ? io(U) : window, ce = I.nodeName && I.nodeName.toLowerCase(), ce === "select" || ce === "input" && I.type === "file") var _e = qf;
          else if (Gf(I)) if (Xf) _e = ny;
          else {
            _e = ey;
            var Fe = Zm;
          }
          else (ce = I.nodeName) && ce.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (_e = ty);
          if (_e && (_e = _e(n, U))) {
            fv(q, _e, l, W);
            break e;
          }
          Fe && Fe(n, I, U), n === "focusout" && (Fe = I._wrapperState) && Fe.controlled && I.type === "number" && gr(I, "number", I.value);
        }
        switch (Fe = U ? io(U) : window, n) {
          case "focusin":
            (Gf(Fe) || Fe.contentEditable === "true") && (pu = Fe, bl = U, vs = null);
            break;
          case "focusout":
            vs = bl = pu = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, Cv(q, l, W);
            break;
          case "selectionchange":
            if (Cc) break;
          case "keydown":
          case "keyup":
            Cv(q, l, W);
        }
        var He;
        if (En) e: {
          switch (n) {
            case "compositionstart":
              var we = "onCompositionStart";
              break e;
            case "compositionend":
              we = "onCompositionEnd";
              break e;
            case "compositionupdate":
              we = "onCompositionUpdate";
              break e;
          }
          we = void 0;
        }
        else wl ? sv(n, l) && (we = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (we = "onCompositionStart");
        we && (cs && l.locale !== "ko" && (wl || we !== "onCompositionStart" ? we === "onCompositionEnd" && wl && (He = C()) : (Za = W, Zu = "value" in Za ? Za.value : Za.textContent, wl = !0)), Fe = xc(U, we), 0 < Fe.length && (we = new rv(we, n, null, l, W), q.push({ event: we, listeners: Fe }), He ? we.data = He : (He = cv(l), He !== null && (we.data = He)))), (He = Wf ? Xm(n, l) : Km(n, l)) && (U = xc(U, "onBeforeInput"), 0 < U.length && (W = new rv("onBeforeInput", "beforeinput", null, l, W), q.push({ event: W, listeners: U }), W.data = He));
      }
      Dv(q, r);
    });
  }
  function ao(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function xc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = qa(n, l), d != null && o.unshift(ao(n, d, c)), d = qa(n, r), d != null && o.push(ao(n, d, c))), n = n.return;
    }
    return o;
  }
  function vu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function nd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = qa(l, d), T != null && m.unshift(ao(l, T, E))) : c || (T = qa(l, d), T != null && m.push(ao(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var kv = /\r\n?/g, rd = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(kv, `
`).replace(rd, "");
  }
  function Ss(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(k(425));
  }
  function wc() {
  }
  var ad = null, id = null;
  function hu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Es = typeof setTimeout == "function" ? setTimeout : void 0, Cs = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, Lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(ud);
  } : Es;
  function ud(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function od(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ma(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ma(r);
  }
  function fa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Rs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Wi = Math.random().toString(36).slice(2), Na = "__reactFiber$" + Wi, Ts = "__reactProps$" + Wi, ti = "__reactContainer$" + Wi, sd = "__reactEvents$" + Wi, iy = "__reactListeners$" + Wi, ly = "__reactHandles$" + Wi;
  function Gi(n) {
    var r = n[Na];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ti] || l[Na]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rs(n); n !== null; ) {
          if (l = n[Na]) return l;
          n = Rs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function hi(n) {
    return n = n[Na] || n[ti], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function io(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function bc(n) {
    return n[Ts] || null;
  }
  var ze = [], ni = -1;
  function Xt(n) {
    return { current: n };
  }
  function Te(n) {
    0 > ni || (n.current = ze[ni], ze[ni] = null, ni--);
  }
  function Lt(n, r) {
    ni++, ze[ni] = n.current, n.current = r;
  }
  var za = {}, In = Xt(za), qe = Xt(!1), Rr = za;
  function da(n, r) {
    var l = n.type.contextTypes;
    if (!l) return za;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ir() {
    Te(qe), Te(In);
  }
  function mi(n, r, l) {
    if (In.current !== za) throw Error(k(168));
    Lt(In, r), Lt(qe, l);
  }
  function kl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(k(108, ht(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function mu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || za, Rr = In.current, Lt(In, n), Lt(qe, qe.current), !0;
  }
  function Mv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(k(169));
    l ? (n = kl(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, Te(qe), Te(In), Lt(In, n)) : Te(qe), Lt(qe, l);
  }
  var qi = null, Ol = !1, er = !1;
  function Dc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Nv(n) {
    Ol = !0, Dc(n);
  }
  function yi() {
    if (!er && qi !== null) {
      er = !0;
      var n = 0, r = mt;
      try {
        var l = qi;
        for (mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, Ol = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), Mn(Nn, yi), c;
      } finally {
        mt = r, er = !1;
      }
    }
    return null;
  }
  var Ua = [], Ll = 0, Aa = null, yu = 0, Qr = [], Wr = 0, ri = null, Gr = 1, tr = "";
  function gu(n, r) {
    Ua[Ll++] = yu, Ua[Ll++] = Aa, Aa = n, yu = r;
  }
  function Ml(n, r, l) {
    Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ri, ri = n;
    var o = Gr;
    n = tr;
    var c = 32 - Cr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Cr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Gr = 1 << 32 - Cr(r) + c | l << c | o, tr = d + n;
    } else Gr = 1 << d | l << c | o, tr = n;
  }
  function kc(n) {
    n.return !== null && (gu(n, 1), Ml(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Aa; ) Aa = Ua[--Ll], Ua[Ll] = null, yu = Ua[--Ll], Ua[Ll] = null;
    for (; n === ri; ) ri = Qr[--Wr], Qr[Wr] = null, tr = Qr[--Wr], Qr[Wr] = null, Gr = Qr[--Wr], Qr[Wr] = null;
  }
  var pa = null, va = null, ln = !1, ja = null;
  function cd(n, r) {
    var l = Ca(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function fd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, pa = n, va = fa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, pa = n, va = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ri !== null ? { id: Gr, overflow: tr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ca(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, pa = n, va = null, !0) : !1;
      default:
        return !1;
    }
  }
  function dd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Lc(n) {
    if (ln) {
      var r = va;
      if (r) {
        var l = r;
        if (!fd(n, r)) {
          if (dd(n)) throw Error(k(418));
          r = fa(l.nextSibling);
          var o = pa;
          r && fd(n, r) ? cd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, pa = n);
        }
      } else {
        if (dd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, ln = !1, pa = n;
      }
    }
  }
  function pd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    pa = n;
  }
  function Mc(n) {
    if (n !== pa) return !1;
    if (!ln) return pd(n), ln = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !hu(n.type, n.memoizedProps)), r && (r = va)) {
      if (dd(n)) throw zv(), Error(k(418));
      for (; r; ) cd(n, r), r = fa(r.nextSibling);
    }
    if (pd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                va = fa(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        va = null;
      }
    } else va = pa ? fa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = va; n; ) n = fa(n.nextSibling);
  }
  function lo() {
    va = pa = null, ln = !1;
  }
  function Un(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var uy = Ve.ReactCurrentBatchConfig;
  function Nl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function uo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(D, x) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [x], D.flags |= 16) : M.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Il(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < x ? (D.flags |= 2, x) : M) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, M, Z) {
      return x === null || x.tag !== 6 ? (x = Wd(M, D.mode, Z), x.return = D, x) : (x = c(x, M), x.return = D, x);
    }
    function T(D, x, M, Z) {
      var _e = M.type;
      return _e === ft ? W(D, x, M.props.children, Z, M.key) : x !== null && (x.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === _t && zl(_e) === x.type) ? (Z = c(x, M.props), Z.ref = Nl(D, x, M), Z.return = D, Z) : (Z = rf(M.type, M.key, M.props, null, D.mode, Z), Z.ref = Nl(D, x, M), Z.return = D, Z);
    }
    function U(D, x, M, Z) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = lf(M, D.mode, Z), x.return = D, x) : (x = c(x, M.children || []), x.return = D, x);
    }
    function W(D, x, M, Z, _e) {
      return x === null || x.tag !== 7 ? (x = Nu(M, D.mode, Z, _e), x.return = D, x) : (x = c(x, M), x.return = D, x);
    }
    function q(D, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, D.mode, M), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case kt:
            return M = rf(x.type, x.key, x.props, null, D.mode, M), M.ref = Nl(D, null, x), M.return = D, M;
          case Re:
            return x = lf(x, D.mode, M), x.return = D, x;
          case _t:
            var Z = x._init;
            return q(D, Z(x._payload), M);
        }
        if (dr(x) || he(x)) return x = Nu(x, D.mode, M, null), x.return = D, x;
        uo(D, x);
      }
      return null;
    }
    function I(D, x, M, Z) {
      var _e = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return _e !== null ? null : E(D, x, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case kt:
            return M.key === _e ? T(D, x, M, Z) : null;
          case Re:
            return M.key === _e ? U(D, x, M, Z) : null;
          case _t:
            return _e = M._init, I(
              D,
              x,
              _e(M._payload),
              Z
            );
        }
        if (dr(M) || he(M)) return _e !== null ? null : W(D, x, M, Z, null);
        uo(D, M);
      }
      return null;
    }
    function ce(D, x, M, Z, _e) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return D = D.get(M) || null, E(x, D, "" + Z, _e);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case kt:
            return D = D.get(Z.key === null ? M : Z.key) || null, T(x, D, Z, _e);
          case Re:
            return D = D.get(Z.key === null ? M : Z.key) || null, U(x, D, Z, _e);
          case _t:
            var Fe = Z._init;
            return ce(D, x, M, Fe(Z._payload), _e);
        }
        if (dr(Z) || he(Z)) return D = D.get(M) || null, W(x, D, Z, _e, null);
        uo(x, Z);
      }
      return null;
    }
    function ye(D, x, M, Z) {
      for (var _e = null, Fe = null, He = x, we = x = 0, _n = null; He !== null && we < M.length; we++) {
        He.index > we ? (_n = He, He = null) : _n = He.sibling;
        var Dt = I(D, He, M[we], Z);
        if (Dt === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Dt.alternate === null && r(D, He), x = d(Dt, x, we), Fe === null ? _e = Dt : Fe.sibling = Dt, Fe = Dt, He = _n;
      }
      if (we === M.length) return l(D, He), ln && gu(D, we), _e;
      if (He === null) {
        for (; we < M.length; we++) He = q(D, M[we], Z), He !== null && (x = d(He, x, we), Fe === null ? _e = He : Fe.sibling = He, Fe = He);
        return ln && gu(D, we), _e;
      }
      for (He = o(D, He); we < M.length; we++) _n = ce(He, D, we, M[we], Z), _n !== null && (n && _n.alternate !== null && He.delete(_n.key === null ? we : _n.key), x = d(_n, x, we), Fe === null ? _e = _n : Fe.sibling = _n, Fe = _n);
      return n && He.forEach(function(Ql) {
        return r(D, Ql);
      }), ln && gu(D, we), _e;
    }
    function Ee(D, x, M, Z) {
      var _e = he(M);
      if (typeof _e != "function") throw Error(k(150));
      if (M = _e.call(M), M == null) throw Error(k(151));
      for (var Fe = _e = null, He = x, we = x = 0, _n = null, Dt = M.next(); He !== null && !Dt.done; we++, Dt = M.next()) {
        He.index > we ? (_n = He, He = null) : _n = He.sibling;
        var Ql = I(D, He, Dt.value, Z);
        if (Ql === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Ql.alternate === null && r(D, He), x = d(Ql, x, we), Fe === null ? _e = Ql : Fe.sibling = Ql, Fe = Ql, He = _n;
      }
      if (Dt.done) return l(
        D,
        He
      ), ln && gu(D, we), _e;
      if (He === null) {
        for (; !Dt.done; we++, Dt = M.next()) Dt = q(D, Dt.value, Z), Dt !== null && (x = d(Dt, x, we), Fe === null ? _e = Dt : Fe.sibling = Dt, Fe = Dt);
        return ln && gu(D, we), _e;
      }
      for (He = o(D, He); !Dt.done; we++, Dt = M.next()) Dt = ce(He, D, we, Dt.value, Z), Dt !== null && (n && Dt.alternate !== null && He.delete(Dt.key === null ? we : Dt.key), x = d(Dt, x, we), Fe === null ? _e = Dt : Fe.sibling = Dt, Fe = Dt);
      return n && He.forEach(function(ch) {
        return r(D, ch);
      }), ln && gu(D, we), _e;
    }
    function kn(D, x, M, Z) {
      if (typeof M == "object" && M !== null && M.type === ft && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case kt:
            e: {
              for (var _e = M.key, Fe = x; Fe !== null; ) {
                if (Fe.key === _e) {
                  if (_e = M.type, _e === ft) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), x = c(Fe, M.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Fe.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === _t && zl(_e) === Fe.type) {
                    l(D, Fe.sibling), x = c(Fe, M.props), x.ref = Nl(D, Fe, M), x.return = D, D = x;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else r(D, Fe);
                Fe = Fe.sibling;
              }
              M.type === ft ? (x = Nu(M.props.children, D.mode, Z, M.key), x.return = D, D = x) : (Z = rf(M.type, M.key, M.props, null, D.mode, Z), Z.ref = Nl(D, x, M), Z.return = D, D = Z);
            }
            return m(D);
          case Re:
            e: {
              for (Fe = M.key; x !== null; ) {
                if (x.key === Fe) if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                  l(D, x.sibling), x = c(x, M.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = lf(M, D.mode, Z), x.return = D, D = x;
            }
            return m(D);
          case _t:
            return Fe = M._init, kn(D, x, Fe(M._payload), Z);
        }
        if (dr(M)) return ye(D, x, M, Z);
        if (he(M)) return Ee(D, x, M, Z);
        uo(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, M), x.return = D, D = x) : (l(D, x), x = Wd(M, D.mode, Z), x.return = D, D = x), m(D)) : l(D, x);
    }
    return kn;
  }
  var Ul = Uv(!0), Av = Uv(!1), Nc = Xt(null), Xi = null, Dn = null, ae = null;
  function Fa() {
    ae = Dn = Xi = null;
  }
  function ha(n) {
    var r = Nc.current;
    Te(Nc), n._currentValue = r;
  }
  function vd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function oo(n, r) {
    Xi = n, ae = Dn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tr = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (ae !== n) if (n = { context: n, memoizedValue: r, next: null }, Dn === null) {
      if (Xi === null) throw Error(k(308));
      Dn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else Dn = Dn.next = n;
    return r;
  }
  var Su = null;
  function hd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function Vn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, hd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ki(n, o);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Al = !1;
  function md(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function yd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ma(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ya(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, bt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ki(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, hd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ki(n, l);
  }
  function zc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ts(n, l);
    }
  }
  function jv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Uc(n, r, l, o) {
    var c = n.updateQueue;
    Al = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = U : E.next = U, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var I = E.lane, ce = E.eventTime;
        if ((o & I) === I) {
          W !== null && (W = W.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (I = r, ce = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  q = ye.call(ce, q, I);
                  break e;
                }
                q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, I = typeof ye == "function" ? ye.call(ce, q, I) : ye, I == null) break e;
                q = ie({}, q, I);
                break e;
              case 2:
                Al = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else ce = { eventTime: ce, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = ce, T = q) : W = W.next = ce, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wu |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function Fv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(k(191, c));
        c.call(o);
      }
    }
  }
  var _s = {}, gi = Xt(_s), so = Xt(_s), co = Xt(_s);
  function Eu(n) {
    if (n === _s) throw Error(k(174));
    return n;
  }
  function gd(n, r) {
    switch (Lt(co, r), Lt(so, n), Lt(gi, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sr(r, n);
    }
    Te(gi), Lt(gi, r);
  }
  function fo() {
    Te(gi), Te(so), Te(co);
  }
  function Hv(n) {
    Eu(co.current);
    var r = Eu(gi.current), l = Sr(r, n.type);
    r !== l && (Lt(so, n), Lt(gi, l));
  }
  function Sd(n) {
    so.current === n && (Te(gi), Te(so));
  }
  var mn = Xt(0);
  function xs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ed = [];
  function Ac() {
    for (var n = 0; n < Ed.length; n++) Ed[n]._workInProgressVersionPrimary = null;
    Ed.length = 0;
  }
  var jc = Ve.ReactCurrentDispatcher, Cd = Ve.ReactCurrentBatchConfig, Ji = 0, re = null, Me = null, Ge = null, un = !1, qr = !1, po = 0, oy = 0;
  function yr() {
    throw Error(k(321));
  }
  function Rd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function ws(n, r, l, o, c, d) {
    if (Ji = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, jc.current = n === null || n.memoizedState === null ? ga : sy, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, po = 0, 25 <= d) throw Error(k(301));
        d += 1, Ge = Me = null, r.updateQueue = null, jc.current = en, n = l(o, c);
      } while (qr);
    }
    if (jc.current = Ei, r = Me !== null && Me.next !== null, Ji = 0, Ge = Me = re = null, un = !1, r) throw Error(k(300));
    return n;
  }
  function Y() {
    var n = po !== 0;
    return po = 0, n;
  }
  function Kt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ge === null ? re.memoizedState = Ge = n : Ge = Ge.next = n, Ge;
  }
  function xe() {
    if (Me === null) {
      var n = re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Me.next;
    var r = Ge === null ? re.memoizedState : Ge.next;
    if (r !== null) Ge = r, Me = n;
    else {
      if (n === null) throw Error(k(310));
      Me = n, n = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Ge === null ? re.memoizedState = Ge = n : Ge = Ge.next = n;
    }
    return Ge;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ai(n) {
    var r = xe(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = Me, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var W = U.lane;
        if ((Ji & W) === W) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, re.lanes |= W, wu |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (Tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, re.lanes |= d, wu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Zi(n) {
    var r = xe(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (Tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ii() {
  }
  function vo(n, r) {
    var l = re, o = xe(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, bs(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ge !== null && Ge.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, ho.bind(null, l, o, c, r), void 0, null), Cn === null) throw Error(k(349));
      Ji & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ho(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = Ki(n, 1);
    r !== null && Pa(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Kt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: n }, r.queue = n, n = n.dispatch = Pv.bind(null, re, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return xe().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Kt();
    re.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = xe();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Me !== null) {
      var m = Me.memoizedState;
      if (d = m.destroy, o !== null && Rd(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    re.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function $c(n, r) {
    return mo(8390656, 8, n, r);
  }
  function bs(n, r) {
    return yo(2048, 8, n, r);
  }
  function Yc(n, r) {
    return yo(4, 2, n, r);
  }
  function Ic(n, r) {
    return yo(4, 4, n, r);
  }
  function Qc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(4, 4, Qc.bind(null, r, n), l);
  }
  function Ds() {
  }
  function ks(n, r) {
    var l = xe();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Tu(n, r) {
    var l = xe();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Gc(n, r, l) {
    return Ji & 21 ? (ei(l, r) || (l = lu(), re.lanes |= l, wu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function Td(n, r) {
    var l = mt;
    mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      mt = l, Cd.transition = o;
    }
  }
  function qc() {
    return xe().memoizedState;
  }
  function _d(n, r, l) {
    var o = ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, go(n)) xd(r, l);
    else if (l = Vn(n, r, l, o), l !== null) {
      var c = Gn();
      Pa(l, n, o, c), So(l, r, o);
    }
  }
  function Pv(n, r, l) {
    var o = ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (go(n)) xd(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, hd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Vn(n, r, c, o), l !== null && (c = Gn(), Pa(l, n, o, c), So(l, r, o));
    }
  }
  function go(n) {
    var r = n.alternate;
    return n === re || r !== null && r === re;
  }
  function xd(n, r) {
    qr = un = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function So(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ts(n, l);
    }
  }
  var Ei = { readContext: Ha, useCallback: yr, useContext: yr, useEffect: yr, useImperativeHandle: yr, useInsertionEffect: yr, useLayoutEffect: yr, useMemo: yr, useReducer: yr, useRef: yr, useState: yr, useDebugValue: yr, useDeferredValue: yr, useTransition: yr, useMutableSource: yr, useSyncExternalStore: yr, useId: yr, unstable_isNewReconciler: !1 }, ga = { readContext: Ha, useCallback: function(n, r) {
    return Kt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(
      4194308,
      4,
      Qc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Kt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Kt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = _d.bind(null, re, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Kt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: Ds, useDeferredValue: function(n) {
    return Kt().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Td.bind(null, n[1]), Kt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = re, c = Kt();
    if (ln) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Cn === null) throw Error(k(349));
      Ji & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, ho.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kt(), r = Cn.identifierPrefix;
    if (ln) {
      var l = tr, o = Gr;
      l = (o & ~(1 << 32 - Cr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = po++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = oy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, sy = {
    readContext: Ha,
    useCallback: ks,
    useContext: Ha,
    useEffect: bs,
    useImperativeHandle: Wc,
    useInsertionEffect: Yc,
    useLayoutEffect: Ic,
    useMemo: Tu,
    useReducer: ai,
    useRef: Bc,
    useState: function() {
      return ai(Si);
    },
    useDebugValue: Ds,
    useDeferredValue: function(n) {
      var r = xe();
      return Gc(r, Me.memoizedState, n);
    },
    useTransition: function() {
      var n = ai(Si)[0], r = xe().memoizedState;
      return [n, r];
    },
    useMutableSource: ii,
    useSyncExternalStore: vo,
    useId: qc,
    unstable_isNewReconciler: !1
  }, en = { readContext: Ha, useCallback: ks, useContext: Ha, useEffect: bs, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: Ic, useMemo: Tu, useReducer: Zi, useRef: Bc, useState: function() {
    return Zi(Si);
  }, useDebugValue: Ds, useDeferredValue: function(n) {
    var r = xe();
    return Me === null ? r.memoizedState = n : Gc(r, Me.memoizedState, n);
  }, useTransition: function() {
    var n = Zi(Si)[0], r = xe().memoizedState;
    return [n, r];
  }, useMutableSource: ii, useSyncExternalStore: vo, useId: qc, unstable_isNewReconciler: !1 };
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Eo(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jl = { isMounted: function(n) {
    return (n = n._reactInternals) ? G(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = ui(n), d = ma(o, c);
    d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Pa(r, n, c, o), zc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = ui(n), d = ma(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Pa(r, n, c, o), zc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = ui(n), c = ma(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ya(n, c, o), r !== null && (Pa(r, n, o, l), zc(r, n, o));
  } };
  function Os(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !no(l, o) || !no(c, d) : !0;
  }
  function Vv(n, r, l) {
    var o = !1, c = za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = zn(r) ? Rr : In.current, o = r.contextTypes, d = (o = o != null) ? da(n, c) : za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jl.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, md(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = zn(r) ? Rr : In.current, c.context = da(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Eo(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jl.enqueueReplaceState(c, c.state, null), Uc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Co(n, r) {
    try {
      var l = "", o = r;
      do
        l += et(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ls(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function bd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Dd = typeof WeakMap == "function" ? WeakMap : Map;
  function kd(n, r, l) {
    l = ma(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Bd = o), bd(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = ma(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        bd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      bd(n, r), typeof o != "function" && (Vl === null ? Vl = /* @__PURE__ */ new Set([this]) : Vl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Yv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Dd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = gy.bind(null, n, r, l), r.then(n, n));
  }
  function Ms(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Iv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ma(-1, 1), r.tag = 2, ya(l, r, 1))), l.lanes |= 1), n);
  }
  var Qv = Ve.ReactCurrentOwner, Tr = !1;
  function _r(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return oo(r, c), o = ws(n, r, l, o, d, c), l = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && l && kc(r), r.flags |= 1, _r(n, r, o, c), r.child);
  }
  function Ro(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hl(n, r, d, o, c)) : (n = rf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : no, l(m, o) && n.ref === r.ref) return Ci(n, r, c);
    }
    return r.flags |= 1, n = Il(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (no(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Ci(n, r, c);
    }
    return Pl(n, r, l, o, c);
  }
  function Xc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Lt(xu, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Lt(xu, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Lt(xu, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Lt(xu, Dr), Dr |= o;
    return _r(n, r, c, l), r.child;
  }
  function Kr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Pl(n, r, l, o, c) {
    var d = zn(l) ? Rr : In.current;
    return d = da(r, d), oo(r, c), l = ws(n, r, l, o, d, c), o = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && o && kc(r), r.flags |= 1, _r(n, r, l, c), r.child);
  }
  function nt(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      mu(r);
    } else d = !1;
    if (oo(r, c), r.stateNode === null) Us(n, r), Vv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ha(U) : (U = zn(l) ? Rr : In.current, U = da(r, U));
      var W = l.getDerivedStateFromProps, q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Bv(r, m, o, U), Al = !1;
      var I = r.memoizedState;
      m.state = I, Uc(r, o, m, c), T = r.memoizedState, E !== o || I !== T || qe.current || Al ? (typeof W == "function" && (Eo(r, l, W, o), T = r.memoizedState), (E = Al || Os(r, l, E, o, I, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, yd(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : Xr(r.type, E), m.props = U, q = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = zn(l) ? Rr : In.current, T = da(r, T));
      var ce = l.getDerivedStateFromProps;
      (W = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || I !== T) && Bv(r, m, o, T), Al = !1, I = r.memoizedState, m.state = I, Uc(r, o, m, c);
      var ye = r.memoizedState;
      E !== q || I !== ye || qe.current || Al ? (typeof ce == "function" && (Eo(r, l, ce, o), ye = r.memoizedState), (U = Al || Os(r, l, U, o, I, ye, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return To(n, r, l, o, d, c);
  }
  function To(n, r, l, o, c, d) {
    Kr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Mv(r, l, !1), Ci(n, r, d);
    o = r.stateNode, Qv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : _r(n, r, E, d), r.memoizedState = o.state, c && Mv(r, l, !0), r.child;
  }
  function Od(n) {
    var r = n.stateNode;
    r.pendingContext ? mi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && mi(n, r.context, !1), gd(n, r.containerInfo);
  }
  function cy(n, r, l, o, c) {
    return lo(), Un(c), r.flags |= 256, _r(n, r, l, o), r.child;
  }
  var Ld = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ns(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _o(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Lt(mn, c & 1), n === null)
      return Lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = af(m, o, 0, null), n = Nu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ns(l), r.memoizedState = Ld, n) : Md(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return fy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Il(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Il(E, d) : (d = Nu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ns(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ld, o;
    }
    return d = n.child, n = d.sibling, o = Il(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Md(n, r) {
    return r = af({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function zs(n, r, l, o) {
    return o !== null && Un(o), Ul(r, n.child, null, l), n = Md(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function fy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ls(Error(k(422))), zs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = af({ mode: "visible", children: o.children }, c, 0, null), d = Nu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = Ns(m), r.memoizedState = Ld, d);
    if (!(r.mode & 1)) return zs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(k(419)), o = Ls(d, o, void 0), zs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Tr || E) {
      if (o = Cn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ki(n, c), Pa(o, n, c, -1));
      }
      return Yd(), o = Ls(Error(k(421))), zs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, va = fa(c.nextSibling), pa = r, ln = !0, ja = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ri, Gr = n.id, tr = n.overflow, ri = r), r = Md(r, o.children), r.flags |= 4096, r);
  }
  function Kc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), vd(n.return, r, l);
  }
  function Nd(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function zd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_r(n, r, o.children, l), o = mn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Kc(n, l, r);
        else if (n.tag === 19) Kc(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Lt(mn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && xs(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nd(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && xs(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nd(r, !0, l, null, d);
        break;
      case "together":
        Nd(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Us(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ci(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = Il(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Il(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Sa(n, r, l) {
    switch (r.tag) {
      case 3:
        Od(r), lo();
        break;
      case 5:
        Hv(r);
        break;
      case 1:
        zn(r.type) && mu(r);
        break;
      case 4:
        gd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Lt(Nc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Lt(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _o(n, r, l) : (Lt(mn, mn.current & 1), n = Ci(n, r, l), n !== null ? n.sibling : null);
        Lt(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return zd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Lt(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xc(n, r, l);
    }
    return Ci(n, r, l);
  }
  var Ri, li, As, xo;
  Ri = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, li = function() {
  }, As = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Sn(n, c), o = Sn(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ra(n, c), o = ra(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wc);
      }
      Ot(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ke.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ke.hasOwnProperty(U) ? (T != null && U === "onScroll" && qt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, xo = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xr(n, r) {
    if (!ln) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function wt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function dy(n, r, l) {
    var o = r.pendingProps;
    switch (Oc(r), r.tag) {
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
        return wt(r), null;
      case 1:
        return zn(r.type) && Ir(), wt(r), null;
      case 3:
        return o = r.stateNode, fo(), Te(qe), Te(In), Ac(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (ku(ja), ja = null))), li(n, r), wt(r), null;
      case 5:
        Sd(r);
        var c = Eu(co.current);
        if (l = r.type, n !== null && r.stateNode != null) As(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(k(166));
            return wt(r), null;
          }
          if (n = Eu(gi.current), Mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Na] = r, o[Ts] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                qt("cancel", o), qt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                qt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ii.length; c++) qt(Ii[c], o);
                break;
              case "source":
                qt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                qt(
                  "error",
                  o
                ), qt("load", o);
                break;
              case "details":
                qt("toggle", o);
                break;
              case "input":
                Kn(o, d), qt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, qt("invalid", o);
                break;
              case "textarea":
                aa(o, d), qt("invalid", o);
            }
            Ot(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ss(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ss(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ke.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
            }
            switch (l) {
              case "input":
                Xn(o), Ln(o, d, !0);
                break;
              case "textarea":
                Xn(o), ia(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Na] = r, n[Ts] = o, Ri(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = bn(l, o), l) {
                case "dialog":
                  qt("cancel", n), qt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ii.length; c++) qt(Ii[c], n);
                  c = o;
                  break;
                case "source":
                  qt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  qt(
                    "error",
                    n
                  ), qt("load", n), c = o;
                  break;
                case "details":
                  qt("toggle", n), c = o;
                  break;
                case "input":
                  Kn(n, o), c = Sn(n, o), qt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), qt("invalid", n);
                  break;
                case "textarea":
                  aa(n, o), c = ra(n, o), qt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ot(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? ut(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && la(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ua(n, T) : typeof T == "number" && ua(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ke.hasOwnProperty(d) ? T != null && d === "onScroll" && qt("scroll", n) : T != null && it(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Xn(n), Ln(n, o, !1);
                  break;
                case "textarea":
                  Xn(n), ia(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ct(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return wt(r), null;
      case 6:
        if (n && r.stateNode != null) xo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(k(166));
          if (l = Eu(co.current), Eu(gi.current), Mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Na] = r, (d = o.nodeValue !== l) && (n = pa, n !== null)) switch (n.tag) {
              case 3:
                Ss(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ss(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Na] = r, r.stateNode = o;
        }
        return wt(r), null;
      case 13:
        if (Te(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && va !== null && r.mode & 1 && !(r.flags & 128)) zv(), lo(), r.flags |= 98560, d = !1;
          else if (d = Mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[Na] = r;
            } else lo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            wt(r), d = !1;
          } else ja !== null && (ku(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Bn === 0 && (Bn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), wt(r), null);
      case 4:
        return fo(), li(n, r), n === null && vi(r.stateNode.containerInfo), wt(r), null;
      case 10:
        return ha(r.type._context), wt(r), null;
      case 17:
        return zn(r.type) && Ir(), wt(r), null;
      case 19:
        if (Te(mn), d = r.memoizedState, d === null) return wt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) xr(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = xs(n), m !== null) {
              for (r.flags |= 128, xr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Lt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > bu && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = xs(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln) return wt(r), null;
          } else 2 * Ft() - d.renderingStartTime > bu && l !== 1073741824 && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ft(), r.sibling = null, l = mn.current, Lt(mn, o ? l & 1 | 2 : l & 1), r) : (wt(r), null);
      case 22:
      case 23:
        return ko(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Dr & 1073741824 && (wt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : wt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function py(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return zn(r.type) && Ir(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return fo(), Te(qe), Te(In), Ac(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Sd(r), null;
      case 13:
        if (Te(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          lo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Te(mn), null;
      case 4:
        return fo(), null;
      case 10:
        return ha(r.type._context), null;
      case 22:
      case 23:
        return ko(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jc = !1, Qn = !1, Wv = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function _u(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Tn(n, r, o);
    }
    else l.current = null;
  }
  function Ud(n, r, l) {
    try {
      l();
    } catch (o) {
      Tn(n, r, o);
    }
  }
  var Gv = !1;
  function Ad(n, r) {
    if (ad = fu, n = Ev(), ps(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, W = 0, q = n, I = null;
          t: for (; ; ) {
            for (var ce; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (ce = q.firstChild) !== null; )
              I = q, q = ce;
            for (; ; ) {
              if (q === n) break t;
              if (I === l && ++U === c && (E = m), I === d && ++W === o && (T = m), (ce = q.nextSibling) !== null) break;
              q = I, I = q.parentNode;
            }
            q = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (id = { focusedElem: n, selectionRange: l }, fu = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, kn = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : Xr(r.type, Ee), kn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (Z) {
        Tn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, pe = n;
        break;
      }
      pe = r.return;
    }
    return ye = Gv, Gv = !1, ye;
  }
  function js(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ud(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Fd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Fd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[Ts], delete r[sd], delete r[iy], delete r[ly])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Hd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || qv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Pd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Pd(n, r, l), n = n.sibling; n !== null; ) Pd(n, r, l), n = n.sibling;
  }
  function Hs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Hs(n, r, l), n = n.sibling; n !== null; ) Hs(n, r, l), n = n.sibling;
  }
  var An = null, Wn = !1;
  function wr(n, r, l) {
    for (l = l.child; l !== null; ) el(n, r, l), l = l.sibling;
  }
  function el(n, r, l) {
    if (Vr && typeof Vr.onCommitFiberUnmount == "function") try {
      Vr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Qn || _u(l, r);
      case 6:
        var o = An, c = Wn;
        An = null, wr(n, r, l), An = o, Wn = c, An !== null && (Wn ? (n = An, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : An.removeChild(l.stateNode));
        break;
      case 18:
        An !== null && (Wn ? (n = An, l = l.stateNode, n.nodeType === 8 ? od(n.parentNode, l) : n.nodeType === 1 && od(n, l), Ma(n)) : od(An, l.stateNode));
        break;
      case 4:
        o = An, c = Wn, An = l.stateNode.containerInfo, Wn = !0, wr(n, r, l), An = o, Wn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ud(l, r, m), c = c.next;
          } while (c !== o);
        }
        wr(n, r, l);
        break;
      case 1:
        if (!Qn && (_u(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Tn(l, r, E);
        }
        wr(n, r, l);
        break;
      case 21:
        wr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Qn = (o = Qn) || l.memoizedState !== null, wr(n, r, l), Qn = o) : wr(n, r, l);
        break;
      default:
        wr(n, r, l);
    }
  }
  function wo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wv()), r.forEach(function(o) {
        var c = Id.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function br(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              An = E.stateNode, Wn = !1;
              break e;
            case 3:
              An = E.stateNode.containerInfo, Wn = !0;
              break e;
            case 4:
              An = E.stateNode.containerInfo, Wn = !0;
              break e;
          }
          E = E.return;
        }
        if (An === null) throw Error(k(160));
        el(d, m, c), An = null, Wn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        Tn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) tl(r, n), r = r.sibling;
  }
  function tl(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (br(r, n), Ti(n), o & 4) {
          try {
            js(3, n, n.return), Fs(3, n);
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
          try {
            js(5, n, n.return);
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        br(r, n), Ti(n), o & 512 && l !== null && _u(l, l.return);
        break;
      case 5:
        if (br(r, n), Ti(n), o & 512 && l !== null && _u(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ua(c, "");
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Hn(c, d), bn(E, m);
            var U = bn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], q = T[m + 1];
              W === "style" ? ut(c, q) : W === "dangerouslySetInnerHTML" ? la(c, q) : W === "children" ? ua(c, q) : it(c, W, q, U);
            }
            switch (E) {
              case "input":
                wn(c, d);
                break;
              case "textarea":
                pr(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Pn(c, !!d.multiple, ce, !1) : I !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Ts] = d;
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (br(r, n), Ti(n), o & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (br(r, n), Ti(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ma(r.containerInfo);
        } catch (Ee) {
          Tn(n, n.return, Ee);
        }
        break;
      case 4:
        br(r, n), Ti(n);
        break;
      case 13:
        br(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($s = Ft())), o & 4 && wo(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (U = Qn) || W, br(r, n), Qn = U) : br(r, n), Ti(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (pe = n, W = n.child; W !== null; ) {
            for (q = pe = W; pe !== null; ) {
              switch (I = pe, ce = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, I, I.return);
                  break;
                case 1:
                  _u(I, I.return);
                  var ye = I.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      Tn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  _u(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    bo(q);
                    continue;
                  }
              }
              ce !== null ? (ce.return = I, pe = ce) : bo(q);
            }
            W = W.sibling;
          }
          e: for (W = null, q = n; ; ) {
            if (q.tag === 5) {
              if (W === null) {
                W = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = De("display", m));
                } catch (Ee) {
                  Tn(n, n.return, Ee);
                }
              }
            } else if (q.tag === 6) {
              if (W === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Ee) {
                Tn(n, n.return, Ee);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              W === q && (W = null), q = q.return;
            }
            W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        br(r, n), Ti(n), o & 4 && wo(n);
        break;
      case 21:
        break;
      default:
        br(
          r,
          n
        ), Ti(n);
    }
  }
  function Ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (qv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ua(c, ""), o.flags &= -33);
            var d = Hd(n);
            Hs(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Hd(n);
            Pd(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (T) {
        Tn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function vy(n, r, l) {
    pe = n, Xv(n);
  }
  function Xv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Jc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Qn;
          E = Jc;
          var U = Qn;
          if (Jc = m, (Qn = T) && !U) for (pe = c; pe !== null; ) m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Kv(c) : T !== null ? (T.return = m, pe = T) : Kv(c);
          for (; d !== null; ) pe = d, Xv(d), d = d.sibling;
          pe = c, Jc = E, Qn = U;
        }
        Vd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Vd(n);
    }
  }
  function Vd(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Qn || Fs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Qn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Xr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Fv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Fv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var W = U.memoizedState;
                  if (W !== null) {
                    var q = W.dehydrated;
                    q !== null && Ma(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
          Qn || r.flags & 512 && jd(r);
        } catch (I) {
          Tn(r, r.return, I);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function bo(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Kv(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Fs(4, r);
            } catch (T) {
              Tn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Tn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              Tn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              Tn(r, m, T);
            }
        }
      } catch (T) {
        Tn(r, r.return, T);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, pe = E;
        break;
      }
      pe = r.return;
    }
  }
  var Jv = Math.ceil, Zc = Ve.ReactCurrentDispatcher, Do = Ve.ReactCurrentOwner, Ea = Ve.ReactCurrentBatchConfig, bt = 0, Cn = null, dn = null, Rn = 0, Dr = 0, xu = Xt(0), Bn = 0, Ps = null, wu = 0, ef = 0, Vs = 0, Bs = null, nr = null, $s = 0, bu = 1 / 0, nl = null, tf = !1, Bd = null, Vl = null, Bl = !1, _i = null, $l = 0, Ys = 0, $d = null, Is = -1, Qs = 0;
  function Gn() {
    return bt & 6 ? Ft() : Is !== -1 ? Is : Is = Ft();
  }
  function ui(n) {
    return n.mode & 1 ? bt & 2 && Rn !== 0 ? Rn & -Rn : uy.transition !== null ? (Qs === 0 && (Qs = lu()), Qs) : (n = mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : is(n.type)), n) : 1;
  }
  function Pa(n, r, l, o) {
    if (50 < Ys) throw Ys = 0, $d = null, Error(k(185));
    Cl(n, l, o), (!(bt & 2) || n !== Cn) && (n === Cn && (!(bt & 2) && (ef |= l), Bn === 4 && xi(n, Rn)), tn(n, o), l === 1 && bt === 0 && !(r.mode & 1) && (bu = Ft() + 500, Ol && yi()));
  }
  function tn(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) l !== null && Gt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Gt(l), r === 1) n.tag === 0 ? Nv(nf.bind(null, n)) : Dc(nf.bind(null, n)), Lv(function() {
        !(bt & 6) && yi();
      }), l = null;
      else {
        switch (ns(o)) {
          case 1:
            l = Nn;
            break;
          case 4:
            l = Pr;
            break;
          case 16:
            l = tt;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = tt;
        }
        l = uh(l, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Du(n, r) {
    if (Is = -1, Qs = 0, bt & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (Lo() && n.callbackNode !== l) return null;
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Oo(n, o);
    else {
      r = o;
      var c = bt;
      bt |= 2;
      var d = eh();
      (Cn !== n || Rn !== r) && (nl = null, bu = Ft() + 500, Yl(n, r));
      do
        try {
          yy();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (!0);
      Fa(), Zc.current = d, bt = c, dn !== null ? r = 0 : (Cn = null, Rn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = di(n), c !== 0 && (o = c, r = Ws(n, c))), r === 1) throw l = Ps, Yl(n, 0), xi(n, o), tn(n, Ft()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !hy(c) && (r = Oo(n, o), r === 2 && (d = di(n), d !== 0 && (o = d, r = Ws(n, d))), r === 1)) throw l = Ps, Yl(n, 0), xi(n, o), tn(n, Ft()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Mu(n, nr, nl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = $s + 500 - Ft(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Es(Mu.bind(null, n, nr, nl), r);
              break;
            }
            Mu(n, nr, nl);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Cr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ft() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Jv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Es(Mu.bind(null, n, nr, nl), o);
              break;
            }
            Mu(n, nr, nl);
            break;
          case 5:
            Mu(n, nr, nl);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return tn(n, Ft()), n.callbackNode === l ? Du.bind(null, n) : null;
  }
  function Ws(n, r) {
    var l = Bs;
    return n.current.memoizedState.isDehydrated && (Yl(n, r).flags |= 256), n = Oo(n, r), n !== 2 && (r = nr, nr = l, r !== null && ku(r)), n;
  }
  function ku(n) {
    nr === null ? nr = n : nr.push.apply(nr, n);
  }
  function hy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function xi(n, r) {
    for (r &= ~Vs, r &= ~ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Cr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function nf(n) {
    if (bt & 6) throw Error(k(327));
    Lo();
    var r = fi(n, 0);
    if (!(r & 1)) return tn(n, Ft()), null;
    var l = Oo(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = di(n);
      o !== 0 && (r = o, l = Ws(n, o));
    }
    if (l === 1) throw l = Ps, Yl(n, 0), xi(n, r), tn(n, Ft()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, nr, nl), tn(n, Ft()), null;
  }
  function Ou(n, r) {
    var l = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = l, bt === 0 && (bu = Ft() + 500, Ol && yi());
    }
  }
  function Lu(n) {
    _i !== null && _i.tag === 0 && !(bt & 6) && Lo();
    var r = bt;
    bt |= 1;
    var l = Ea.transition, o = mt;
    try {
      if (Ea.transition = null, mt = 1, n) return n();
    } finally {
      mt = o, Ea.transition = l, bt = r, !(bt & 6) && yi();
    }
  }
  function ko() {
    Dr = xu.current, Te(xu);
  }
  function Yl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cs(l)), dn !== null) for (l = dn.return; l !== null; ) {
      var o = l;
      switch (Oc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Ir();
          break;
        case 3:
          fo(), Te(qe), Te(In), Ac();
          break;
        case 5:
          Sd(o);
          break;
        case 4:
          fo();
          break;
        case 13:
          Te(mn);
          break;
        case 19:
          Te(mn);
          break;
        case 10:
          ha(o.type._context);
          break;
        case 22:
        case 23:
          ko();
      }
      l = l.return;
    }
    if (Cn = n, dn = n = Il(n.current, null), Rn = Dr = r, Bn = 0, Ps = null, Vs = ef = wu = 0, nr = Bs = null, Su !== null) {
      for (r = 0; r < Su.length; r++) if (l = Su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Su = null;
    }
    return n;
  }
  function Zv(n, r) {
    do {
      var l = dn;
      try {
        if (Fa(), jc.current = Ei, un) {
          for (var o = re.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          un = !1;
        }
        if (Ji = 0, Ge = Me = re = null, qr = !1, po = 0, Do.current = null, l === null || l.return === null) {
          Bn = 1, Ps = r, dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Rn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, q = W.tag;
            if (!(W.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var I = W.alternate;
              I ? (W.updateQueue = I.updateQueue, W.memoizedState = I.memoizedState, W.lanes = I.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var ce = Ms(m);
            if (ce !== null) {
              ce.flags &= -257, Iv(ce, m, E, d, r), ce.mode & 1 && Yv(d, U, r), r = ce, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Yv(d, U, r), Yd();
                break e;
              }
              T = Error(k(426));
            }
          } else if (ln && E.mode & 1) {
            var kn = Ms(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Iv(kn, m, E, d, r), Un(Co(T, E));
              break e;
            }
          }
          d = T = Co(T, E), Bn !== 4 && (Bn = 2), Bs === null ? Bs = [d] : Bs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = kd(d, T, r);
                jv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Vl === null || !Vl.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = $v(d, E, r);
                  jv(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        nh(l);
      } catch (_e) {
        r = _e, dn === l && l !== null && (dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = Zc.current;
    return Zc.current = Ei, n === null ? Ei : n;
  }
  function Yd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Cn === null || !(wu & 268435455) && !(ef & 268435455) || xi(Cn, Rn);
  }
  function Oo(n, r) {
    var l = bt;
    bt |= 2;
    var o = eh();
    (Cn !== n || Rn !== r) && (nl = null, Yl(n, r));
    do
      try {
        my();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (!0);
    if (Fa(), bt = l, Zc.current = o, dn !== null) throw Error(k(261));
    return Cn = null, Rn = 0, Bn;
  }
  function my() {
    for (; dn !== null; ) th(dn);
  }
  function yy() {
    for (; dn !== null && !fn(); ) th(dn);
  }
  function th(n) {
    var r = lh(n.alternate, n, Dr);
    n.memoizedProps = n.pendingProps, r === null ? nh(n) : dn = r, Do.current = null;
  }
  function nh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = py(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, dn = null;
          return;
        }
      } else if (l = dy(l, r, Dr), l !== null) {
        dn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        dn = r;
        return;
      }
      dn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Mu(n, r, l) {
    var o = mt, c = Ea.transition;
    try {
      Ea.transition = null, mt = 1, rh(n, r, l, o);
    } finally {
      Ea.transition = c, mt = o;
    }
    return null;
  }
  function rh(n, r, l, o) {
    do
      Lo();
    while (_i !== null);
    if (bt & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (es(n, d), n === Cn && (dn = Cn = null, Rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bl || (Bl = !0, uh(tt, function() {
      return Lo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ea.transition, Ea.transition = null;
      var m = mt;
      mt = 1;
      var E = bt;
      bt |= 4, Do.current = null, Ad(n, l), tl(l, n), du(id), fu = !!ad, id = ad = null, n.current = l, vy(l), hr(), bt = E, mt = m, Ea.transition = d;
    } else n.current = l;
    if (Bl && (Bl = !1, _i = n, $l = c), d = n.pendingLanes, d === 0 && (Vl = null), Xo(l.stateNode), tn(n, Ft()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf) throw tf = !1, n = Bd, Bd = null, n;
    return $l & 1 && n.tag !== 0 && Lo(), d = n.pendingLanes, d & 1 ? n === $d ? Ys++ : (Ys = 0, $d = n) : Ys = 0, yi(), null;
  }
  function Lo() {
    if (_i !== null) {
      var n = ns($l), r = Ea.transition, l = mt;
      try {
        if (Ea.transition = null, mt = 16 > n ? 16 : n, _i === null) var o = !1;
        else {
          if (n = _i, _i = null, $l = 0, bt & 6) throw Error(k(331));
          var c = bt;
          for (bt |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (pe = U; pe !== null; ) {
                    var W = pe;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, W, d);
                    }
                    var q = W.child;
                    if (q !== null) q.return = W, pe = q;
                    else for (; pe !== null; ) {
                      W = pe;
                      var I = W.sibling, ce = W.return;
                      if (Fd(W), W === U) {
                        pe = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = ce, pe = I;
                        break;
                      }
                      pe = ce;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var kn = Ee.sibling;
                      Ee.sibling = null, Ee = kn;
                    } while (Ee !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, pe = m;
            else e: for (; pe !== null; ) {
              if (d = pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, pe = D;
                break e;
              }
              pe = d.return;
            }
          }
          var x = n.current;
          for (pe = x; pe !== null; ) {
            m = pe;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, pe = M;
            else e: for (m = x; pe !== null; ) {
              if (E = pe, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, E);
                }
              } catch (_e) {
                Tn(E, E.return, _e);
              }
              if (E === m) {
                pe = null;
                break e;
              }
              var Z = E.sibling;
              if (Z !== null) {
                Z.return = E.return, pe = Z;
                break e;
              }
              pe = E.return;
            }
          }
          if (bt = c, yi(), Vr && typeof Vr.onPostCommitFiberRoot == "function") try {
            Vr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        mt = l, Ea.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = Co(l, r), r = kd(n, r, 1), n = ya(n, r, 1), r = Gn(), n !== null && (Cl(n, 1, r), tn(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Vl === null || !Vl.has(o))) {
          n = Co(l, n), n = $v(r, n, 1), r = ya(r, n, 1), n = Gn(), r !== null && (Cl(r, 1, n), tn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function gy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Cn === n && (Rn & l) === l && (Bn === 4 || Bn === 3 && (Rn & 130023424) === Rn && 500 > Ft() - $s ? Yl(n, 0) : Vs |= l), tn(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = Wu, Wu <<= 1, !(Wu & 130023424) && (Wu = 4194304)) : r = 1);
    var l = Gn();
    n = Ki(n, r), n !== null && (Cl(n, r, l), tn(n, l));
  }
  function Sy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function Id(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var lh;
  lh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qe.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, Sa(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, ln && r.flags & 1048576 && Ml(r, yu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Us(n, r), n = r.pendingProps;
        var c = da(r, In.current);
        oo(r, l), c = ws(null, r, o, n, c, l);
        var d = Y();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, mu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, md(r), c.updater = jl, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = To(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && kc(r), _r(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Cy(o), n = Xr(o, n), c) {
            case 0:
              r = Pl(null, r, o, n, l);
              break e;
            case 1:
              r = nt(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
              break e;
            case 14:
              r = Ro(null, r, o, Xr(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Pl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), nt(n, r, o, c, l);
      case 3:
        e: {
          if (Od(r), n === null) throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, yd(n, r), Uc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Co(Error(k(423)), r), r = cy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Co(Error(k(424)), r), r = cy(n, r, o, l, c);
            break e;
          } else for (va = fa(r.stateNode.containerInfo.firstChild), pa = r, ln = !0, ja = null, l = Av(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (lo(), o === c) {
              r = Ci(n, r, l);
              break e;
            }
            _r(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Hv(r), n === null && Lc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, hu(o, c) ? m = null : d !== null && hu(o, d) && (r.flags |= 32), Kr(n, r), _r(n, r, m, l), r.child;
      case 6:
        return n === null && Lc(r), null;
      case 13:
        return _o(n, r, l);
      case 4:
        return gd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ul(r, null, o, l) : _r(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Fl(n, r, o, c, l);
      case 7:
        return _r(n, r, r.pendingProps, l), r.child;
      case 8:
        return _r(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _r(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Lt(Nc, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !qe.current) {
              r = Ci(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ma(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var W = U.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), vd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(k(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), vd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          _r(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, oo(r, l), c = Ha(c), o = o(c), r.flags |= 1, _r(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Xr(o, r.pendingProps), c = Xr(o.type, c), Ro(n, r, o, c, l);
      case 15:
        return Hl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Us(n, r), r.tag = 1, zn(o) ? (n = !0, mu(r)) : n = !1, oo(r, l), Vv(r, o, c), wd(r, o, c, l), To(null, r, o, !0, n, l);
      case 19:
        return zd(n, r, l);
      case 22:
        return Xc(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function uh(n, r) {
    return Mn(n, r);
  }
  function Ey(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, l, o) {
    return new Ey(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Cy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === St) return 11;
      if (n === rt) return 14;
    }
    return 2;
  }
  function Il(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Nu(l.children, c, d, r);
      case Qe:
        m = 8, c |= 8;
        break;
      case xn:
        return n = Ca(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
      case nn:
        return n = Ca(13, l, r, c), n.elementType = nn, n.lanes = d, n;
      case Be:
        return n = Ca(19, l, r, c), n.elementType = Be, n.lanes = d, n;
      case at:
        return af(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case gn:
            m = 10;
            break e;
          case Jt:
            m = 9;
            break e;
          case St:
            m = 11;
            break e;
          case rt:
            m = 14;
            break e;
          case _t:
            m = 16, o = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = Ca(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nu(n, r, l, o) {
    return n = Ca(7, n, o, r), n.lanes = l, n;
  }
  function af(n, r, l, o) {
    return n = Ca(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = Ca(6, n, null, r), n.lanes = l, n;
  }
  function lf(n, r, l) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zu(n, r, l, o, c, d, m, E, T) {
    return n = new Gd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, md(d), n;
  }
  function Ry(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return za;
    n = n._reactInternals;
    e: {
      if (G(n) !== n || n.tag !== 1) throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return kl(n, l, r);
    }
    return r;
  }
  function Xd(n, r, l, o, c, d, m, E, T) {
    return n = zu(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = Gn(), c = ui(l), d = ma(o, c), d.callback = r ?? null, ya(l, d, c), n.current.lanes = c, Cl(n, c, o), tn(n, o), n;
  }
  function Gs(n, r, l, o) {
    var c = r.current, d = Gn(), m = ui(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ma(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ya(c, r, m), n !== null && (Pa(n, c, m, d), zc(n, c, m)), m;
  }
  function uf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Jd(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function Ty() {
    return null;
  }
  var oh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  qs.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(k(409));
    Gs(n, r, null, null);
  }, qs.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        Gs(null, n, null, null);
      }), r[ti] = null;
    }
  };
  function qs(n) {
    this._internalRoot = n;
  }
  qs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = yt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < rn.length && r !== 0 && r < rn[l].priority; l++) ;
      rn.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function sh() {
  }
  function _y(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = uf(m);
          d.call(U);
        };
      }
      var m = Xd(r, o, n, 0, null, !1, !1, "", sh);
      return n._reactRootContainer = m, n[ti] = m.current, vi(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = uf(T);
        E.call(U);
      };
    }
    var T = zu(n, 0, !1, null, null, !1, !1, "", sh);
    return n._reactRootContainer = T, n[ti] = T.current, vi(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      Gs(r, T, l, o);
    }), T;
  }
  function cf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = uf(m);
          E.call(T);
        };
      }
      Gs(r, m, n, c);
    } else m = _y(l, r, n, c, o);
    return uf(m);
  }
  Gu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ji(r.pendingLanes);
          l !== 0 && (ts(r, l | 1), tn(r, Ft()), !(bt & 6) && (bu = Ft() + 500, yi()));
        }
        break;
      case 13:
        Lu(function() {
          var o = Ki(n, 1);
          if (o !== null) {
            var c = Gn();
            Pa(o, n, 1, c);
          }
        }), Jd(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Pa(r, n, 134217728, l);
      }
      Jd(n, 134217728);
    }
  }, rs = function(n) {
    if (n.tag === 13) {
      var r = ui(n), l = Ki(n, r);
      if (l !== null) {
        var o = Gn();
        Pa(l, n, r, o);
      }
      Jd(n, r);
    }
  }, yt = function() {
    return mt;
  }, qu = function(n, r) {
    var l = mt;
    try {
      return mt = n, r();
    } finally {
      mt = l;
    }
  }, Bt = function(n, r, l) {
    switch (r) {
      case "input":
        if (wn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = bc(o);
              if (!c) throw Error(k(90));
              Fr(o), wn(o, c);
            }
          }
        }
        break;
      case "textarea":
        pr(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, ml = Ou, ru = Lu;
  var xy = { usingClientEntryPoint: !1, Events: [hi, io, bc, Ga, ba, Ou] }, Xs = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wy = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ae(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Ty, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber) try {
      Sl = Ks.inject(wy), Vr = Ks;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sf(r)) throw Error(k(200));
    return Ry(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!sf(n)) throw Error(k(299));
    var l = !1, o = "", c = oh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zu(n, 1, !1, null, null, l, !1, o, c), n[ti] = r.current, vi(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = Ae(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Lu(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!rl(r)) throw Error(k(200));
    return cf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!sf(n)) throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = oh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Xd(r, null, n, 1, l ?? null, c, !1, d, m), n[ti] = r.current, vi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new qs(r);
  }, Qa.render = function(n, r, l) {
    if (!rl(r)) throw Error(k(200));
    return cf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rl(n)) throw Error(k(40));
    return n._reactRootContainer ? (Lu(function() {
      cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ti] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Ou, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rl(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return cf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, fR;
function mD() {
  if (fR) return Wa;
  fR = 1;
  var P = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return P.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var K = nv(), k = mR(), me = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ke = !1;
    function zt(e) {
      Ke = e;
    }
    function Le(e) {
      if (!Ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("warn", e, a);
      }
    }
    function S(e) {
      if (!Ke) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("error", e, a);
      }
    }
    function Ze(e, t, a) {
      {
        var i = me.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, ue = 1, Pe = 2, ee = 3, je = 4, oe = 5, Ce = 6, pt = 7, Fn = 8, sn = 9, it = 10, Ve = 11, kt = 12, Re = 13, ft = 14, Qe = 15, xn = 16, gn = 17, Jt = 18, St = 19, nn = 21, Be = 22, rt = 23, _t = 24, at = 25, B = !0, he = !1, ie = !1, b = !1, $ = !1, Oe = !0, $e = !1, et = !0, lt = !0, ht = !0, ct = !0, Et = /* @__PURE__ */ new Set(), Vt = {}, Xn = {};
    function Fr(e, t) {
      fr(e, t), fr(e + "Capture", t);
    }
    function fr(e, t) {
      Vt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Vt[e] = t;
      {
        var a = e.toLowerCase();
        Xn[a] = e, e === "onDoubleClick" && (Xn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function wn(e) {
      try {
        return Ln(e), !1;
      } catch {
        return !0;
      }
    }
    function Ln(e) {
      return "" + e;
    }
    function gr(e, t) {
      if (wn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function dr(e) {
      if (wn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    function Pn(e, t) {
      if (wn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function ra(e, t) {
      if (wn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function aa(e) {
      if (wn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    function pr(e) {
      if (wn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    var ia = 0, Jn = 1, Sr = 2, cn = 3, la = 4, ua = 5, oa = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", De = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ut = new RegExp("^[" + ne + "][" + De + "]*$"), At = {}, Ot = {};
    function bn(e) {
      return Kn.call(Ot, e) ? !0 : Kn.call(At, e) ? !1 : ut.test(e) ? (Ot[e] = !0, !0) : (At[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === ia : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vr(e, t, a, i) {
      if (a !== null && a.type === ia)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Bt(e, t, a, i) {
      if (t === null || typeof t > "u" || vr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case cn:
            return !t;
          case la:
            return t === !1;
          case ua:
            return isNaN(t);
          case oa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Yn(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function jt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Sr || t === cn || t === la, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Zt = {}, Ga = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ga.forEach(function(e) {
      Zt[e] = new jt(
        e,
        ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Zt[t] = new jt(
        t,
        Jn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Zt[e] = new jt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Zt[e] = new jt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Zt[e] = new jt(
        e,
        cn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new jt(
        e,
        cn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new jt(
        e,
        la,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new jt(
        e,
        oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Zt[e] = new jt(
        e,
        ua,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, ml = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, ml);
      Zt[t] = new jt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, ml);
      Zt[t] = new jt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, ml);
      Zt[t] = new jt(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new jt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ru = "xlinkHref";
    Zt[ru] = new jt(
      "xlinkHref",
      Jn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new jt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function qa(e) {
      !yl && au.test(e) && (yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        gr(a, t), i.sanitizeURL && qa("" + a);
        var s = i.attributeName, f = null;
        if (i.type === la) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Bt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === cn)
            return a;
          f = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Da(e, t, a, i) {
      {
        if (!bn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return gr(a, t), u === "" + a ? a : u;
      }
    }
    function Ni(e, t, a, i) {
      var u = Yn(t);
      if (!pn(t, u, i)) {
        if (Bt(t, a, u, i) && (a = null), i || u === null) {
          if (bn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (gr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === cn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var w = u.type, _;
          w === cn || w === la && a === !0 ? _ = "" : (gr(a, y), _ = "" + a, u.sanitizeURL && qa(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var Er = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), zi = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), ot = Symbol.for("react.scope"), Mn = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), hr = Symbol.for("react.cache"), Ft = Symbol.for("react.tracing_marker"), ka = Symbol.iterator, Nn = "@@iterator";
    function Pr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ka && e[ka] || e[Nn];
      return typeof t == "function" ? t : null;
    }
    var tt = Object.assign, Ui = 0, Ai, Sl, Vr, Xo, Cr, Ko, Jo;
    function Zo() {
    }
    Zo.__reactDisabledLog = !0;
    function iu() {
      {
        if (Ui === 0) {
          Ai = console.log, Sl = console.info, Vr = console.warn, Xo = console.error, Cr = console.group, Ko = console.groupCollapsed, Jo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Zo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ui++;
      }
    }
    function Wu() {
      {
        if (Ui--, Ui === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, e, {
              value: Ai
            }),
            info: tt({}, e, {
              value: Sl
            }),
            warn: tt({}, e, {
              value: Vr
            }),
            error: tt({}, e, {
              value: Xo
            }),
            group: tt({}, e, {
              value: Cr
            }),
            groupCollapsed: tt({}, e, {
              value: Ko
            }),
            groupEnd: tt({}, e, {
              value: Jo
            })
          });
        }
        Ui < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = me.ReactCurrentDispatcher, fi;
    function Oa(e, t, a) {
      {
        if (fi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            fi = i && i[1] || "";
          }
        return `
` + fi + e;
      }
    }
    var El = !1, di;
    {
      var lu = typeof WeakMap == "function" ? WeakMap : Map;
      di = new lu();
    }
    function uu(e, t) {
      if (!e || El)
        return "";
      {
        var a = di.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      El = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, iu();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var w = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && di.set(e, w), w;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        El = !1, ji.current = s, Wu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", z = _ ? Oa(_) : "";
      return typeof e == "function" && di.set(e, z), z;
    }
    function Cl(e, t, a) {
      return uu(e, !0);
    }
    function es(e, t, a) {
      return uu(e, !1);
    }
    function ts(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, ts(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Ne:
          return Oa("Suspense");
        case dt:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return es(e.render);
          case Ct:
            return mt(e.type, t, a);
          case Ae: {
            var i = e, u = i._payload, s = i._init;
            try {
              return mt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ns(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return Oa(e.type);
        case xn:
          return Oa("Lazy");
        case Re:
          return Oa("Suspense");
        case St:
          return Oa("SuspenseList");
        case ke:
        case Pe:
        case Qe:
          return es(e.type);
        case Ve:
          return es(e.type.render);
        case ue:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function Gu(e) {
      try {
        var t = "", a = e;
        do
          t += ns(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Rl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function rs(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case sa:
          return "Fragment";
        case Hr:
          return "Portal";
        case gl:
          return "Profiler";
        case zi:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case dt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return rs(t) + ".Consumer";
          case R:
            var a = e;
            return rs(a._context) + ".Provider";
          case G:
            return Rl(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : yt(e.type) || "Memo";
          case Ae: {
            var u = e, s = u._payload, f = u._init;
            try {
              return yt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function qu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case sn:
          var i = a;
          return ou(i) + ".Consumer";
        case it:
          var u = a;
          return ou(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ve:
          return qu(a, a.render, "ForwardRef");
        case pt:
          return "Fragment";
        case oe:
          return a;
        case je:
          return "Portal";
        case ee:
          return "Root";
        case Ce:
          return "Text";
        case xn:
          return yt(a);
        case Fn:
          return a === zi ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case kt:
          return "Profiler";
        case nn:
          return "Scope";
        case Re:
          return "Suspense";
        case St:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ue:
        case ke:
        case gn:
        case Pe:
        case ft:
        case Qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ka = me.ReactDebugCurrentFrame, vn = null, Br = !1;
    function La() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return We(e);
      }
      return null;
    }
    function Tl() {
      return vn === null ? "" : Gu(vn);
    }
    function rn() {
      Ka.getCurrentStack = null, vn = null, Br = !1;
    }
    function hn(e) {
      Ka.getCurrentStack = e === null ? null : Tl, vn = e, Br = !1;
    }
    function as() {
      return vn;
    }
    function Zn(e) {
      Br = e;
    }
    function $r(e) {
      return "" + e;
    }
    function Ja(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return pr(e), e;
        default:
          return "";
      }
    }
    var Xu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function su(e, t) {
      Xu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function _l(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Fi(e) {
      var t = "";
      return e && (cu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function fu(e) {
      var t = cu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      pr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            pr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            pr(p), i = "" + p;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Hi(e) {
      _l(e) || (e._valueTracker = fu(e));
    }
    function Ku(e) {
      if (!e)
        return !1;
      var t = _l(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Fi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function pi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Pi = !1, Ju = !1, is = !1, Za = !1;
    function Zu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ju && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Ju = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Pi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: Zu(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && Ni(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = Zu(t);
        !a._wrapperState.controlled && i && !Za && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Za = !0), a._wrapperState.controlled && !i && !is && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), is = !0);
      }
      N(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ye(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ye(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function J(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Se(e, t) {
      var a = e;
      j(a, t), de(a, t);
    }
    function de(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        gr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = bh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ku(f), j(f, p);
          }
        }
      }
    }
    function Ye(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var st = !1, Ht = !1, $t = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? K.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($t || ($t = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function It(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var an = Array.isArray;
    function xt(e) {
      return an(e);
    }
    var xl;
    xl = !1;
    function eo() {
      var e = La();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ls = ["value", "defaultValue"];
    function us(e) {
      {
        su("select", e);
        for (var t = 0; t < ls.length; t++) {
          var a = ls[t];
          if (e[a] != null) {
            var i = xt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, eo()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, eo());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = $r(Ja(a)), w = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          w === null && !u[_].disabled && (w = u[_]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function os(e, t) {
      return tt({}, t, {
        value: void 0
      });
    }
    function ss(e, t) {
      var a = e;
      us(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xl = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Qm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rv(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var av = !1;
    function Yf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function iv(e, t) {
      var a = e;
      su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component"), av = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (xt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ja(i)
      };
    }
    function lv(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = $r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $r(u));
    }
    function yc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wm(e, t) {
      lv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Gm = "http://www.w3.org/1998/Math/MathML", gc = "http://www.w3.org/2000/svg";
    function If(e) {
      switch (e) {
        case "svg":
          return gc;
        case "math":
          return Gm;
        default:
          return Bi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Bi ? If(t) : e === gc && t === "foreignObject" ? Bi : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Sc, uv = qm(function(e, t) {
      if (e.namespaceURI === gc && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, $i = 3, En = 8, ca = 9, Wf = 11, cs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ov = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, to = {
      animationIterationCount: !0,
      aspectRatio: !0,
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var cv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(to).forEach(function(e) {
      cv.forEach(function(t) {
        to[sv(t, e)] = to[e];
      });
    });
    function wl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(to.hasOwnProperty(e) && to[e]) ? t + "px" : (ra(t, e), ("" + t).trim());
    }
    var Xm = /([A-Z])/g, Km = /^ms-/;
    function Jm(e) {
      return e.replace(Xm, "-$1").toLowerCase().replace(Km, "-ms-");
    }
    var Gf = function() {
    };
    {
      var fv = /^(?:webkit|moz|o)[A-Z]/, fs = /^-ms-/, ds = /-(.)/g, dv = /;\s*$/, Yi = {}, qf = {}, Xf = !1, Ec = !1, Kf = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kf(e.replace(fs, "ms-"))
        ));
      }, vv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        qf.hasOwnProperty(t) && qf[t] || (qf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(dv, "")));
      }, Zm = function(e, t) {
        Xf || (Xf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ey = function(e, t) {
        Ec || (Ec = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gf = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : fv.test(e) ? vv(e) : dv.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? Zm(e, t) : isFinite(t) || ey(e, t));
      };
    }
    var ty = Gf;
    function ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Jm(i)) + ":", t += wl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ty(i, t[i]);
          var s = wl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ei(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function no(e) {
      var t = {};
      for (var a in e)
        for (var i = ov[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function yv(e, t) {
      {
        if (!t)
          return;
        var a = no(e), i = no(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ei(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var gv = {
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
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sv = tt({
      menuitem: !0
    }, gv), Ev = "__html";
    function ps(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function du(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Cc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pu = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, bl = {}, vs = new RegExp("^(aria)-[" + De + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function Cv(e, t) {
      {
        if (Kn.call(bl, t) && bl[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), bl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), bl[t] = !0, !0;
        }
        if (vs.test(t)) {
          var u = t.toLowerCase(), s = pu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return bl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), bl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Rc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Cv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ro(e, t) {
      du(e, t) || Rc(e, t);
    }
    var Tc = !1;
    function Rv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tc && (Tc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hs = function() {
    };
    {
      var mr = {}, Zf = /^on./, Tv = /^on[^A-Z]/, _v = new RegExp("^(aria)-[" + De + "]*$"), xv = new RegExp("^(aria)[A-Z][" + De + "]*$");
      hs = function(e, t, a, i) {
        if (Kn.call(mr, t) && mr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), mr[t] = !0, !0;
          if (Zf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), mr[t] = !0, !0;
        } else if (Zf.test(t))
          return Tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mr[t] = !0, !0;
        if (_v.test(t) || xv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), mr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mr[t] = !0, !0;
        var v = Yn(t), y = v !== null && v.type === ia;
        if (Cc.hasOwnProperty(u)) {
          var g = Cc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), mr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), mr[t] = !0, !0;
        return typeof a == "boolean" && vr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), mr[t] = !0, !0) : y ? !0 : vr(t, a, v, !1) ? (mr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === cn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), mr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dl(e, t, a) {
      du(e, t) || wv(e, t, a);
    }
    var _c = 1, ms = 2, ys = 4, ry = _c | ms | ys, Ii = null;
    function ay(e) {
      Ii !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ii = e;
    }
    function bv() {
      Ii === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ii = null;
    }
    function Dv(e) {
      return e === Ii;
    }
    function qt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var gs = null, Qi = null, vi = null;
    function ed(e) {
      var t = zo(e);
      if (t) {
        if (typeof gs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = bh(a);
          gs(t.stateNode, t.type, i);
        }
      }
    }
    function td(e) {
      gs = e;
    }
    function ao(e) {
      Qi ? vi ? vi.push(e) : vi = [e] : Qi = e;
    }
    function xc() {
      return Qi !== null || vi !== null;
    }
    function vu() {
      if (Qi) {
        var e = Qi, t = vi;
        if (Qi = null, vi = null, ed(e), t)
          for (var a = 0; a < t.length; a++)
            ed(t[a]);
      }
    }
    var nd = function(e, t) {
      return e(t);
    }, kv = function() {
    }, rd = !1;
    function Ov() {
      var e = xc();
      e && (kv(), vu());
    }
    function Ss(e, t, a) {
      if (rd)
        return e(t, a);
      rd = !0;
      try {
        return nd(e, t, a);
      } finally {
        rd = !1, Ov();
      }
    }
    function wc(e, t, a) {
      nd = e, kv = a;
    }
    function ad(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function id(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && ad(t));
        default:
          return !1;
      }
    }
    function hu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = bh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (id(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Es = !1;
    if (Sn)
      try {
        var Cs = {};
        Object.defineProperty(Cs, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", Cs, Cs), window.removeEventListener("test", Cs, Cs);
      } catch {
        Es = !1;
      }
    function ld(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Lv = ld;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ud = document.createElement("react");
      Lv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, _ = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          ud.removeEventListener(H, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          w = !0, F(), a.apply(i, le), _ = !1;
        }
        var be, Tt = !1, vt = !1;
        function O(L) {
          if (be = L.error, Tt = !0, be === null && L.colno === 0 && L.lineno === 0 && (vt = !0), L.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ud.addEventListener(H, Ue, !1), g.initEvent(H, !1, !1), ud.dispatchEvent(g), A && Object.defineProperty(window, "event", A), w && _ && (Tt ? vt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", O), !w)
          return F(), ld.apply(this, arguments);
      };
    }
    var od = Lv, fa = !1, Rs = null, Wi = !1, Na = null, Ts = {
      onError: function(e) {
        fa = !0, Rs = e;
      }
    };
    function ti(e, t, a, i, u, s, f, p, v) {
      fa = !1, Rs = null, od.apply(Ts, arguments);
    }
    function sd(e, t, a, i, u, s, f, p, v) {
      if (ti.apply(this, arguments), fa) {
        var y = Gi();
        Wi || (Wi = !0, Na = y);
      }
    }
    function iy() {
      if (Wi) {
        var e = Na;
        throw Wi = !1, Na = null, e;
      }
    }
    function ly() {
      return fa;
    }
    function Gi() {
      if (fa) {
        var e = Rs;
        return fa = !1, Rs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hi(e) {
      return e._reactInternals;
    }
    function io(e) {
      return e._reactInternals !== void 0;
    }
    function bc(e, t) {
      e._reactInternals = t;
    }
    var ze = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), Xt = (
      /*                    */
      2
    ), Te = (
      /*                       */
      4
    ), Lt = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), In = (
      /*                     */
      64
    ), qe = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), da = (
      /*                          */
      512
    ), zn = (
      /*                     */
      1024
    ), Ir = (
      /*                      */
      2048
    ), mi = (
      /*                    */
      4096
    ), kl = (
      /*                   */
      8192
    ), mu = (
      /*             */
      16384
    ), Mv = Ir | Te | In | da | zn | mu, qi = (
      /*               */
      32767
    ), Ol = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), Nv = (
      /*                       */
      1048576
    ), yi = (
      /*                    */
      2097152
    ), Ua = (
      /*                 */
      4194304
    ), Ll = (
      /*                */
      8388608
    ), Aa = (
      /*               */
      16777216
    ), yu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Te | zn | 0
    ), Wr = Xt | Te | Lt | za | da | mi | kl, ri = Te | In | da | kl, Gr = Ir | Lt, tr = Ua | Ll | yi, gu = me.ReactCurrentOwner;
    function Ml(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Xt | mi)) !== ze && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ee ? a : null;
    }
    function kc(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Oc(e) {
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Ml(e) === e;
    }
    function va(e) {
      {
        var t = gu.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = hi(e);
      return u ? Ml(u) === u : !1;
    }
    function ln(e) {
      if (Ml(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ja(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ml(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ln(s), e;
            if (v === u)
              return ln(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function cd(e) {
      var t = ja(e);
      return t !== null ? fd(t) : null;
    }
    function fd(e) {
      if (e.tag === oe || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dd(e) {
      var t = ja(e);
      return t !== null ? Lc(t) : null;
    }
    function Lc(e) {
      if (e.tag === oe || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== je) {
          var a = Lc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var pd = k.unstable_scheduleCallback, Mc = k.unstable_cancelCallback, zv = k.unstable_shouldYield, lo = k.unstable_requestPaint, Un = k.unstable_now, uy = k.unstable_getCurrentPriorityLevel, Nl = k.unstable_ImmediatePriority, uo = k.unstable_UserBlockingPriority, zl = k.unstable_NormalPriority, Uv = k.unstable_LowPriority, Ul = k.unstable_IdlePriority, Av = k.unstable_yieldValue, Nc = k.unstable_setDisableYieldValue, Xi = null, Dn = null, ae = null, Fa = !1, ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function vd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        lt && (e = tt({}, e, {
          getLaneLabelMap: Al,
          injectProfilingHooks: Ki
        })), Xi = t.inject(e), Dn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function oo(e, t) {
      if (Dn && typeof Dn.onScheduleFiberRoot == "function")
        try {
          Dn.onScheduleFiberRoot(Xi, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ha(e, t) {
      if (Dn && typeof Dn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & qe) === qe;
          if (ht) {
            var i;
            switch (t) {
              case Sa:
                i = Nl;
                break;
              case Ri:
                i = uo;
                break;
              case li:
                i = zl;
                break;
              case As:
                i = Ul;
                break;
              default:
                i = zl;
                break;
            }
            Dn.onCommitFiberRoot(Xi, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Su(e) {
      if (Dn && typeof Dn.onPostCommitFiberRoot == "function")
        try {
          Dn.onPostCommitFiberRoot(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function hd(e) {
      if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
          Dn.onCommitFiberUnmount(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vn(e) {
      if (typeof Av == "function" && (Nc(e), zt(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      ae = e;
    }
    function Al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ws; a++) {
          var i = sy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function md(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function yd() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function ma(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function ya() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function zc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function jv() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function Uc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fv() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function _s(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function gi() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function so(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function co() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function Eu(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function gd(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function fo(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function Hv() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function Sd(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function mn() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function xs(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function Ed() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function Ac() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function jc(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function Cd(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function Ji(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var re = (
      /*                         */
      0
    ), Me = (
      /*                 */
      1
    ), Ge = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), qr = (
      /*              */
      16
    ), po = Math.clz32 ? Math.clz32 : Rd, oy = Math.log, yr = Math.LN2;
    function Rd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (oy(t) / yr | 0) | 0;
    }
    var ws = 31, Y = (
      /*                        */
      0
    ), Kt = (
      /*                          */
      0
    ), xe = (
      /*                        */
      1
    ), Si = (
      /*    */
      2
    ), ai = (
      /*             */
      4
    ), Zi = (
      /*            */
      8
    ), ii = (
      /*                     */
      16
    ), vo = (
      /*                */
      32
    ), Cu = (
      /*                       */
      4194240
    ), ho = (
      /*                        */
      64
    ), Fc = (
      /*                        */
      128
    ), Hc = (
      /*                        */
      256
    ), Pc = (
      /*                        */
      512
    ), Vc = (
      /*                        */
      1024
    ), Ru = (
      /*                        */
      2048
    ), Bc = (
      /*                        */
      4096
    ), mo = (
      /*                        */
      8192
    ), yo = (
      /*                        */
      16384
    ), $c = (
      /*                       */
      32768
    ), bs = (
      /*                       */
      65536
    ), Yc = (
      /*                       */
      131072
    ), Ic = (
      /*                       */
      262144
    ), Qc = (
      /*                       */
      524288
    ), Wc = (
      /*                       */
      1048576
    ), Ds = (
      /*                       */
      2097152
    ), ks = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Gc = (
      /*                             */
      8388608
    ), Td = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), _d = (
      /*                             */
      67108864
    ), Pv = Tu, go = (
      /*          */
      134217728
    ), xd = (
      /*                          */
      268435455
    ), So = (
      /*               */
      268435456
    ), Ei = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function sy(e) {
      {
        if (e & xe)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & ai)
          return "InputContinuous";
        if (e & Zi)
          return "DefaultHydration";
        if (e & ii)
          return "Default";
        if (e & vo)
          return "TransitionHydration";
        if (e & Cu)
          return "Transition";
        if (e & ks)
          return "Retry";
        if (e & go)
          return "SelectiveHydration";
        if (e & So)
          return "IdleHydration";
        if (e & Ei)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var en = -1, Xr = ho, Eo = Tu;
    function jl(e) {
      switch (Fl(e)) {
        case xe:
          return xe;
        case Si:
          return Si;
        case ai:
          return ai;
        case Zi:
          return Zi;
        case ii:
          return ii;
        case vo:
          return vo;
        case ho:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case bs:
        case Yc:
        case Ic:
        case Qc:
        case Wc:
        case Ds:
          return e & Cu;
        case Tu:
        case Gc:
        case Td:
        case qc:
        case _d:
          return e & ks;
        case go:
          return go;
        case So:
          return So;
        case Ei:
          return Ei;
        case ga:
          return ga;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Os(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & xd;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = jl(p);
        else {
          var v = f & s;
          v !== Y && (i = jl(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = jl(y) : s !== Y && (i = jl(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Fl(i), w = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ii && (w & Cu) !== Y
        )
          return t;
      }
      (i & ai) !== Y && (i |= a & ii);
      var _ = e.entangledLanes;
      if (_ !== Y)
        for (var z = e.entanglements, A = i & _; A > 0; ) {
          var F = Hl(A), le = 1 << F;
          i |= z[F], A &= ~le;
        }
      return i;
    }
    function Vv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Hl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Bv(e, t) {
      switch (e) {
        case xe:
        case Si:
        case ai:
          return t + 250;
        case Zi:
        case ii:
        case vo:
        case ho:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case bs:
        case Yc:
        case Ic:
        case Qc:
        case Wc:
        case Ds:
          return t + 5e3;
        case Tu:
        case Gc:
        case Td:
        case qc:
        case _d:
          return en;
        case go:
        case So:
        case Ei:
        case ga:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function wd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Bv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Co(e) {
      return jl(e.pendingLanes);
    }
    function Ls(e) {
      var t = e.pendingLanes & ~ga;
      return t !== Y ? t : t & ga ? ga : Y;
    }
    function bd(e) {
      return (e & xe) !== Y;
    }
    function Dd(e) {
      return (e & xd) !== Y;
    }
    function kd(e) {
      return (e & ks) === e;
    }
    function $v(e) {
      var t = xe | ai | ii;
      return (e & t) === Y;
    }
    function Yv(e) {
      return (e & Cu) === e;
    }
    function Ms(e, t) {
      var a = Si | ai | Zi | ii;
      return (t & a) !== Y;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Qv(e) {
      return (e & Cu) !== Y;
    }
    function Tr() {
      var e = Xr;
      return Xr <<= 1, (Xr & Cu) === Y && (Xr = ho), e;
    }
    function _r() {
      var e = Eo;
      return Eo <<= 1, (Eo & ks) === Y && (Eo = Tu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function Ro(e) {
      return Fl(e);
    }
    function Hl(e) {
      return 31 - po(e);
    }
    function Xc(e) {
      return Hl(e);
    }
    function Kr(e, t) {
      return (e & t) !== Y;
    }
    function Pl(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function To(e, t) {
      return e & ~t;
    }
    function Od(e, t) {
      return e & t;
    }
    function cy(e) {
      return e;
    }
    function Ld(e, t) {
      return e !== Kt && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < ws; a++)
        t.push(e);
      return t;
    }
    function _o(e, t, a) {
      e.pendingLanes |= t, t !== Ei && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Xc(t);
      i[u] = a;
    }
    function Md(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Hl(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function zs(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function fy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p;
        i[p] = Y, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function Kc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Hl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Nd(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case ai:
          i = Si;
          break;
        case ii:
          i = Zi;
          break;
        case ho:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case bs:
        case Yc:
        case Ic:
        case Qc:
        case Wc:
        case Ds:
        case Tu:
        case Gc:
        case Td:
        case qc:
        case _d:
          i = vo;
          break;
        case Ei:
          i = So;
          break;
        default:
          i = Kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Kt ? Kt : i;
    }
    function zd(e, t, a) {
      if (ha)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Xc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Us(e, t) {
      if (ha)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Xc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ci(e, t) {
      return null;
    }
    var Sa = xe, Ri = ai, li = ii, As = Ei, xo = Kt;
    function xr() {
      return xo;
    }
    function wt(e) {
      xo = e;
    }
    function dy(e, t) {
      var a = xo;
      try {
        return xo = e, t();
      } finally {
        xo = a;
      }
    }
    function py(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Jc(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = Fl(e);
      return Qn(Sa, t) ? Qn(Ri, t) ? Dd(t) ? li : As : Ri : Sa;
    }
    function pe(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var _u;
    function Ud(e) {
      _u = e;
    }
    function Gv(e) {
      _u(e);
    }
    var Ad;
    function js(e) {
      Ad = e;
    }
    var Fs;
    function jd(e) {
      Fs = e;
    }
    var Fd;
    function qv(e) {
      Fd = e;
    }
    var Hd;
    function Pd(e) {
      Hd = e;
    }
    var Hs = !1, An = [], Wn = null, wr = null, el = null, wo = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), tl = [], Ti = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function vy(e) {
      return Ti.indexOf(e) > -1;
    }
    function Xv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Vd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wn = null;
          break;
        case "dragenter":
        case "dragleave":
          wr = null;
          break;
        case "mouseover":
        case "mouseout":
          el = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          br.delete(i);
          break;
        }
      }
    }
    function bo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = zo(t);
          p !== null && Ad(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Wn = bo(Wn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return wr = bo(wr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return el = bo(el, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return wo.set(y, bo(wo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return br.set(w, bo(br.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Jv(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = Ml(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = kc(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Fs(a);
              });
              return;
            }
          } else if (i === ee) {
            var s = a.stateNode;
            if (pe(s)) {
              e.blockedOn = Oc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zc(e) {
      for (var t = Fd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tl.length && Qn(t, tl[i].priority); i++)
        ;
      tl.splice(i, 0, a), i === 0 && Jv(a);
    }
    function Do(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = $s(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ay(s), u.target.dispatchEvent(s), bv();
        } else {
          var f = zo(i);
          return f !== null && Ad(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ea(e, t, a) {
      Do(e) && a.delete(t);
    }
    function bt() {
      Hs = !1, Wn !== null && Do(Wn) && (Wn = null), wr !== null && Do(wr) && (wr = null), el !== null && Do(el) && (el = null), wo.forEach(Ea), br.forEach(Ea);
    }
    function Cn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hs || (Hs = !0, k.unstable_scheduleCallback(k.unstable_NormalPriority, bt)));
    }
    function dn(e) {
      if (An.length > 0) {
        Cn(An[0], e);
        for (var t = 1; t < An.length; t++) {
          var a = An[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wn !== null && Cn(Wn, e), wr !== null && Cn(wr, e), el !== null && Cn(el, e);
      var i = function(p) {
        return Cn(p, e);
      };
      wo.forEach(i), br.forEach(i);
      for (var u = 0; u < tl.length; u++) {
        var s = tl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tl.length > 0; ) {
        var f = tl[0];
        if (f.blockedOn !== null)
          break;
        Jv(f), f.blockedOn === null && tl.shift();
      }
    }
    var Rn = me.ReactCurrentBatchConfig, Dr = !0;
    function xu(e) {
      Dr = !!e;
    }
    function Bn() {
      return Dr;
    }
    function Ps(e, t, a) {
      var i = bu(t), u;
      switch (i) {
        case Sa:
          u = wu;
          break;
        case Ri:
          u = ef;
          break;
        case li:
        default:
          u = Vs;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wu(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        wt(Sa), Vs(e, t, a, i);
      } finally {
        wt(u), Rn.transition = s;
      }
    }
    function ef(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        wt(Ri), Vs(e, t, a, i);
      } finally {
        wt(u), Rn.transition = s;
      }
    }
    function Vs(e, t, a, i) {
      Dr && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var u = $s(e, t, a, i);
      if (u === null) {
        Ny(e, t, i, nr, a), Vd(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Vd(e, i), t & ys && vy(e)) {
        for (; u !== null; ) {
          var s = zo(u);
          s !== null && Gv(s);
          var f = $s(e, t, a, i);
          if (f === null && Ny(e, t, i, nr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ny(e, t, i, null, a);
    }
    var nr = null;
    function $s(e, t, a, i) {
      nr = null;
      var u = qt(i), s = ec(u);
      if (s !== null) {
        var f = Ml(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = kc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (pe(y))
              return Oc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return nr = s, null;
    }
    function bu(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Sa;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ri;
        case "message": {
          var t = uy();
          switch (t) {
            case Nl:
              return Sa;
            case uo:
              return Ri;
            case zl:
            case Uv:
              return li;
            case Ul:
              return As;
            default:
              return li;
          }
        }
        default:
          return li;
      }
    }
    function nl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function tf(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Vl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bl = null, _i = null, $l = null;
    function Ys(e) {
      return Bl = e, _i = Qs(), !0;
    }
    function $d() {
      Bl = null, _i = null, $l = null;
    }
    function Is() {
      if ($l)
        return $l;
      var e, t = _i, a = t.length, i, u = Qs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $l = u.slice(e, p), $l;
    }
    function Qs() {
      return "value" in Bl ? Bl.value : Bl.textContent;
    }
    function Gn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ui() {
      return !0;
    }
    function Pa() {
      return !1;
    }
    function tn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = ui : this.isDefaultPrevented = Pa, this.isPropagationStopped = Pa, this;
      }
      return tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ui);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ui);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ui
      }), t;
    }
    var Du = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ws = tn(Du), ku = tt({}, Du, {
      view: 0,
      detail: 0
    }), hy = tn(ku), xi, nf, Ou;
    function Lu(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (xi = e.screenX - Ou.screenX, nf = e.screenY - Ou.screenY) : (xi = 0, nf = 0), Ou = e);
    }
    var ko = tt({}, ku, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Lu(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : nf;
      }
    }), Yl = tn(ko), Zv = tt({}, ko, {
      dataTransfer: 0
    }), eh = tn(Zv), Yd = tt({}, ku, {
      relatedTarget: 0
    }), Oo = tn(Yd), my = tt({}, Du, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yy = tn(my), th = tt({}, Du, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), nh = tn(th), Mu = tt({}, Du, {
      data: 0
    }), rh = tn(Mu), Lo = rh, ah = {
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
    }, Tn = {
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
    };
    function gy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Gn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tn[e.keyCode] || "Unidentified" : "";
    }
    var ih = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return Sy;
    }
    var lh = tt({}, ku, {
      key: gy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Id,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Gn(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Gn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), uh = tn(lh), Ey = tt({}, ko, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Ca = tn(Ey), Qd = tt({}, ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), Cy = tn(Qd), Il = tt({}, Du, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rf = tn(Il), Nu = tt({}, ko, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), af = tn(Nu), Wd = [9, 13, 27, 32], lf = 229, Gd = Sn && "CompositionEvent" in window, zu = null;
    Sn && "documentMode" in document && (zu = document.documentMode);
    var Ry = Sn && "TextEvent" in window && !zu, qd = Sn && (!Gd || zu && zu > 8 && zu <= 11), Xd = 32, Gs = String.fromCharCode(Xd);
    function uf() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function Jd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ty(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function oh(e, t) {
      return e === "keydown" && t.keyCode === lf;
    }
    function of(e, t) {
      switch (e) {
        case "keyup":
          return Wd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function qs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function sf(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function sh(e, t, a, i, u) {
      var s, f;
      if (Gd ? s = Ty(t) : rl ? of(t, i) && (s = "onCompositionEnd") : oh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      qd && !sf(i) && (!rl && s === "onCompositionStart" ? rl = Ys(u) : s === "onCompositionEnd" && rl && (f = Is()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = qs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function _y(e, t) {
      switch (e) {
        case "compositionend":
          return qs(t);
        case "keypress":
          var a = t.which;
          return a !== Xd ? null : (Kd = !0, Gs);
        case "textInput":
          var i = t.data;
          return i === Gs && Kd ? null : i;
        default:
          return null;
      }
    }
    function cf(e, t) {
      if (rl) {
        if (e === "compositionend" || !Gd && of(e, t)) {
          var a = Is();
          return $d(), rl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return qd && !sf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xy(e, t, a, i, u) {
      var s;
      if (Ry ? s = _y(t, i) : s = cf(t, i), !s)
        return null;
      var f = vh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Lo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Xs(e, t, a, i, u, s, f) {
      sh(e, t, a, i, u), xy(e, t, a, i, u);
    }
    var wy = {
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
    function Ks(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function n(e) {
      if (!Sn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      ao(i);
      var u = vh(t, "onChange");
      if (u.length > 0) {
        var s = new Ws("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, qt(e)), Ss(E, t);
    }
    function E(e) {
      M0(e, 0);
    }
    function T(e) {
      var t = mf(e);
      if (Ku(t))
        return e;
    }
    function U(e, t) {
      if (e === "change")
        return t;
    }
    var W = !1;
    Sn && (W = n("input") && (!document.documentMode || document.documentMode > 9));
    function q(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", ce);
    }
    function I() {
      o && (o.detachEvent("onpropertychange", ce), o = null, c = null);
    }
    function ce(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (I(), q(t, a)) : e === "focusout" && I();
    }
    function Ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function kn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function D(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ye(e, "number", e.value);
    }
    function Z(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window, v, y;
      if (d(p) ? v = U : Ks(p) ? W ? v = x : (v = Ee, y = ye) : kn(p) && (v = D), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && M(p);
    }
    function _e() {
      fr("onMouseEnter", ["mouseout", "mouseover"]), fr("onMouseLeave", ["mouseout", "mouseover"]), fr("onPointerEnter", ["pointerout", "pointerover"]), fr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fe(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Dv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (ec(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var w = u.ownerDocument;
          w ? g = w.defaultView || w.parentWindow : g = window;
        }
        var _, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (_ = a, z = A ? ec(A) : null, z !== null) {
            var F = Ml(z);
            (z !== F || z.tag !== oe && z.tag !== Ce) && (z = null);
          }
        } else
          _ = null, z = a;
        if (_ !== z) {
          var le = Yl, Ue = "onMouseLeave", be = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = Ca, Ue = "onPointerLeave", be = "onPointerEnter", Tt = "pointer");
          var vt = _ == null ? g : mf(_), O = z == null ? g : mf(z), H = new le(Ue, Tt + "leave", _, i, u);
          H.target = vt, H.relatedTarget = O;
          var L = null, X = ec(u);
          if (X === a) {
            var ve = new le(be, Tt + "enter", z, i, u);
            ve.target = O, ve.relatedTarget = vt, L = ve;
          }
          PR(e, H, L, _, z);
        }
      }
    }
    function He(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var we = typeof Object.is == "function" ? Object.is : He;
    function _n(e, t) {
      if (we(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Kn.call(t, s) || !we(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Dt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ql(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ch(e, t) {
      for (var a = Dt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Dt(Ql(a));
      }
    }
    function SR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ER(e, u, s, f, p);
    }
    function ER(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, w = null;
      e: for (; ; ) {
        for (var _ = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
          w = g, g = _;
        for (; ; ) {
          if (g === e)
            break e;
          if (w === t && ++v === a && (f = s), w === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
            break;
          g = w, w = g.parentNode;
        }
        g = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function CR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = ch(e, f), g = ch(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var w = a.createRange();
          w.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), u.addRange(w));
        }
      }
    }
    function E0(e) {
      return e && e.nodeType === $i;
    }
    function C0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : E0(e) ? !1 : E0(t) ? C0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function RR(e) {
      return e && e.ownerDocument && C0(e.ownerDocument.documentElement, e);
    }
    function TR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function R0() {
      for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
        if (TR(t))
          e = t.contentWindow;
        else
          return t;
        t = pi(e.document);
      }
      return t;
    }
    function by(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _R() {
      var e = R0();
      return {
        focusedElem: e,
        selectionRange: by(e) ? wR(e) : null
      };
    }
    function xR(e) {
      var t = R0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && RR(a)) {
        i !== null && by(a) && bR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function wR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = SR(e), t || {
        start: 0,
        end: 0
      };
    }
    function bR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : CR(e, t);
    }
    var DR = Sn && "documentMode" in document && document.documentMode <= 11;
    function kR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, Dy = null, Zd = null, ky = !1;
    function OR(e) {
      if ("selectionStart" in e && by(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function LR(e) {
      return e.window === e ? e.document : e.nodeType === ca ? e : e.ownerDocument;
    }
    function T0(e, t, a) {
      var i = LR(a);
      if (!(ky || ff == null || ff !== pi(i))) {
        var u = OR(ff);
        if (!Zd || !_n(Zd, u)) {
          Zd = u;
          var s = vh(Dy, "onSelect");
          if (s.length > 0) {
            var f = new Ws("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ff;
          }
        }
      }
    }
    function MR(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ks(p) || p.contentEditable === "true") && (ff = p, Dy = a, Zd = null);
          break;
        case "focusout":
          ff = null, Dy = null, Zd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ky = !1, T0(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (DR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          T0(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Oy = {}, _0 = {};
    Sn && (_0 = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function dh(e) {
      if (Oy[e])
        return Oy[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _0)
          return Oy[e] = t[a];
      return e;
    }
    var x0 = dh("animationend"), w0 = dh("animationiteration"), b0 = dh("animationstart"), D0 = dh("transitionend"), k0 = /* @__PURE__ */ new Map(), O0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mo(e, t) {
      k0.set(e, t), Fr(t, [e]);
    }
    function NR() {
      for (var e = 0; e < O0.length; e++) {
        var t = O0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mo(a, "on" + i);
      }
      Mo(x0, "onAnimationEnd"), Mo(w0, "onAnimationIteration"), Mo(b0, "onAnimationStart"), Mo("dblclick", "onDoubleClick"), Mo("focusin", "onFocus"), Mo("focusout", "onBlur"), Mo(D0, "onTransitionEnd");
    }
    function zR(e, t, a, i, u, s, f) {
      var p = k0.get(t);
      if (p !== void 0) {
        var v = Ws, y = t;
        switch (t) {
          case "keypress":
            if (Gn(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = uh;
            break;
          case "focusin":
            y = "focus", v = Oo;
            break;
          case "focusout":
            y = "blur", v = Oo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Oo;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Yl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Cy;
            break;
          case x0:
          case w0:
          case b0:
            v = yy;
            break;
          case D0:
            v = rf;
            break;
          case "scroll":
            v = hy;
            break;
          case "wheel":
            v = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = nh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ca;
            break;
        }
        var g = (s & ys) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = FR(a, p, i.type, g, w);
          if (_.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: _
            });
          }
        }
      }
    }
    NR(), _e(), r(), kR(), uf();
    function UR(e, t, a, i, u, s, f) {
      zR(e, t, a, i, u, s);
      var p = (s & ry) === 0;
      p && (Fe(e, t, a, i, u), Z(e, t, a, i, u), MR(e, t, a, i, u), Xs(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ly = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function L0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, sd(i, t, void 0, e), e.currentTarget = null;
    }
    function AR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          L0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, _ = g.currentTarget, z = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          L0(e, z, _), i = w;
        }
    }
    function M0(e, t) {
      for (var a = (t & ys) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        AR(s, f, a);
      }
      iy();
    }
    function jR(e, t, a, i, u) {
      var s = qt(a), f = [];
      UR(f, e, i, a, s, t), M0(f, t);
    }
    function yn(e, t) {
      Ly.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = p_(t), u = VR(e);
      i.has(u) || (N0(t, e, ms, a), i.add(u));
    }
    function My(e, t, a) {
      Ly.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ys), N0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[ph]) {
        e[ph] = !0, Et.forEach(function(a) {
          a !== "selectionchange" && (Ly.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === ca ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, My("selectionchange", !1, t)));
      }
    }
    function N0(e, t, a, i, u) {
      var s = Ps(e, t, a), f = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : tf(e, t, s) : f !== void 0 ? Vl(e, t, s, f) : nl(e, t, s);
    }
    function z0(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function Ny(e, t, a, i, u) {
      var s = i;
      if (!(t & _c) && !(t & ms)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ee || v === je) {
              var y = p.stateNode.containerInfo;
              if (z0(y, f))
                break;
              if (v === je)
                for (var g = p.return; g !== null; ) {
                  var w = g.tag;
                  if (w === ee || w === je) {
                    var _ = g.stateNode.containerInfo;
                    if (z0(_, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = ec(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === oe || A === Ce) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ss(function() {
        return jR(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function FR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var w = y, _ = w.stateNode, z = w.tag;
        if (z === oe && _ !== null && (g = _, p !== null)) {
          var A = hu(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function vh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, y = hu(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = hu(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function HR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = pf(s))
        u++;
      for (var f = 0, p = i; p; p = pf(p))
        f++;
      for (; u - f > 0; )
        a = pf(a), u--;
      for (; f - u > 0; )
        i = pf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pf(a), i = pf(i);
      }
      return null;
    }
    function U0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, w = v.tag;
        if (y !== null && y === i)
          break;
        if (w === oe && g !== null) {
          var _ = g;
          if (u) {
            var z = hu(p, s);
            z != null && f.unshift(np(p, z, _));
          } else if (!u) {
            var A = hu(p, s);
            A != null && f.push(np(p, A, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function PR(e, t, a, i, u) {
      var s = i && u ? HR(i, u) : null;
      i !== null && U0(e, t, i, s, !1), u !== null && a !== null && U0(e, a, u, s, !0);
    }
    function VR(e, t) {
      return e + "__bubble";
    }
    var Va = !1, rp = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", No = "suppressHydrationWarning", A0 = "autoFocus", Js = "children", Zs = "style", mh = "__html", zy, yh, ap, j0, gh, F0, H0;
    zy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      ro(e, t), Rv(e, t), Dl(e, t, {
        registrationNameDependencies: Vt,
        possibleRegistrationNames: Xn
      });
    }, F0 = Sn && !document.documentMode, ap = function(e, t, a) {
      if (!Va) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, j0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, H0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var BR = /\r\n?/g, $R = /\u0000|\uFFFD/g;
    function Sh(e) {
      aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(BR, `
`).replace($R, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function P0(e) {
      return e.nodeType === ca ? e : e.ownerDocument;
    }
    function YR() {
    }
    function Ch(e) {
      e.onclick = YR;
    }
    function IR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), mv(t, f);
          else if (s === rp) {
            var p = f ? f[mh] : void 0;
            p != null && uv(t, p);
          } else if (s === Js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && cs(t, f);
            } else typeof f == "number" && cs(t, "" + f);
          else s === hh || s === No || s === A0 || (Vt.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Ni(t, s, f, u));
        }
    }
    function QR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Zs ? mv(e, f) : s === rp ? uv(e, f) : s === Js ? cs(e, f) : Ni(e, s, f, i);
      }
    }
    function WR(e, t, a, i) {
      var u, s = P0(a), f, p = i;
      if (p === Bi && (p = If(e)), p === Bi) {
        if (u = du(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(zy, e) && (zy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function GR(e, t) {
      return P0(t).createTextNode(e);
    }
    function qR(e, t, a, i) {
      var u = du(t, a);
      yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            yn(ep[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), yn("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          ss(e, a), s = os(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), s = Yf(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ps(t, s), IR(t, e, i, s, u), t) {
        case "input":
          Hi(e), J(e, a, !1);
          break;
        case "textarea":
          Hi(e), yc(e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          $f(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function XR(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = os(e, a), p = os(e, i), s = [];
          break;
        case "textarea":
          f = Yf(e, a), p = Yf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      ps(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Zs) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Js || v === hh || v === No || v === A0 || (Vt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === z || _ == null && z == null))
          if (v === Zs)
            if (_ && Object.freeze(_), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && z[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === rp) {
            var A = _ ? _[mh] : void 0, F = z ? z[mh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Js ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === hh || v === No || (Vt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && gh(v, _), v === "onScroll" && yn("scroll", e)), !s && z !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (yv(g, p[Zs]), (s = s || []).push(Zs, g)), s;
    }
    function KR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = du(a, i), f = du(a, u);
      switch (QR(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          Qm(e, u);
          break;
      }
    }
    function JR(e) {
      {
        var t = e.toLowerCase();
        return Cc.hasOwnProperty(t) && Cc[t] || null;
      }
    }
    function ZR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = du(t, a), yh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            yn(ep[y], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          C(e, a), yn("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          ss(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), yn("invalid", e);
          break;
      }
      ps(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, w = 0; w < g.length; w++) {
          var _ = g[w].name.toLowerCase();
          switch (_) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[w].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Js)
            typeof F == "string" ? e.textContent !== F && (a[No] !== !0 && Eh(e.textContent, F, s, f), z = [Js, F]) : typeof F == "number" && e.textContent !== "" + F && (a[No] !== !0 && Eh(e.textContent, F, s, f), z = [Js, "" + F]);
          else if (Vt.hasOwnProperty(A))
            F != null && (typeof F != "function" && gh(A, F), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Ue = p && $e ? null : Yn(A);
            if (a[No] !== !0) {
              if (!(A === hh || A === No || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var be = e.innerHTML, Tt = F ? F[mh] : void 0;
                  if (Tt != null) {
                    var vt = H0(e, Tt);
                    vt !== be && ap(A, be, vt);
                  }
                } else if (A === Zs) {
                  if (v.delete(A), F0) {
                    var O = ny(F);
                    le = e.getAttribute("style"), O !== le && ap(A, le, O);
                  }
                } else if (p && !$e)
                  v.delete(A.toLowerCase()), le = Da(e, A, F), F !== le && ap(A, le, F);
                else if (!pn(A, Ue, p) && !Bt(A, F, Ue, p)) {
                  var H = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), le = Xa(e, A, F, Ue);
                  else {
                    var L = i;
                    if (L === Bi && (L = If(t)), L === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var X = JR(A);
                      X !== null && X !== A && (H = !0, v.delete(X)), v.delete(A);
                    }
                    le = Da(e, A, F);
                  }
                  var ve = $e;
                  !ve && F !== le && !H && ap(A, le, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[No] !== !0 && j0(v), t) {
        case "input":
          Hi(e), J(e, a, !0);
          break;
        case "textarea":
          Hi(e), yc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ch(e);
          break;
      }
      return z;
    }
    function eT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Uy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function tT(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Wm(e, a);
          return;
        case "select":
          rv(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var nT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], V0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], rT = V0.concat(["button"]), aT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], B0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = tt({}, e || B0), i = {
          tag: t
        };
        return V0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), rT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), nT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var iT = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return aT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, lT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, $0 = {};
      ip = function(e, t, a) {
        a = a || B0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = iT(e, u) ? null : i, f = s ? null : lT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!$0[y]) {
            $0[y] = !0;
            var g = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, w, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Rh = "suppressHydrationWarning", Th = "$", _h = "/$", up = "$?", op = "$!", uT = "style", Hy = null, Py = null;
    function oT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ca:
        case Wf: {
          t = i === ca ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === En ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function sT(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function GD(e) {
      return e;
    }
    function cT(e) {
      Hy = Bn(), Py = _R();
      var t = null;
      return xu(!1), t;
    }
    function fT(e) {
      xR(Py), xu(Hy), Hy = null, Py = null;
    }
    function dT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = WR(e, t, a, s);
      return fp(u, y), Gy(y, t), y;
    }
    function pT(e, t) {
      e.appendChild(t);
    }
    function vT(e, t, a, i, u) {
      switch (qR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function hT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return XR(e, t, a, i);
    }
    function Vy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function mT(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = GR(e, t);
      return fp(i, s), s;
    }
    function yT() {
      var e = window.event;
      return e === void 0 ? li : bu(e.type);
    }
    var By = typeof setTimeout == "function" ? setTimeout : void 0, gT = typeof clearTimeout == "function" ? clearTimeout : void 0, $y = -1, Y0 = typeof Promise == "function" ? Promise : void 0, ST = typeof queueMicrotask == "function" ? queueMicrotask : typeof Y0 < "u" ? function(e) {
      return Y0.resolve(null).then(e).catch(ET);
    } : By;
    function ET(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function CT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function RT(e, t, a, i, u, s) {
      KR(e, t, a, i, u), Gy(e, u);
    }
    function I0(e) {
      cs(e, "");
    }
    function TT(e, t, a) {
      e.nodeValue = a;
    }
    function _T(e, t) {
      e.appendChild(t);
    }
    function xT(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function wT(e, t, a) {
      e.insertBefore(t, a);
    }
    function bT(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function DT(e, t) {
      e.removeChild(t);
    }
    function kT(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === En) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), dn(t);
              return;
            } else
              i--;
          else (s === Th || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      dn(t);
    }
    function OT(e, t) {
      e.nodeType === En ? Yy(e.parentNode, t) : e.nodeType === Yr && Yy(e, t), dn(e);
    }
    function LT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function MT(e) {
      e.nodeValue = "";
    }
    function NT(e, t) {
      e = e;
      var a = t[uT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wl("display", i);
    }
    function zT(e, t) {
      e.nodeValue = t;
    }
    function UT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function AT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jT(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function FT(e) {
      return e.nodeType !== En ? null : e;
    }
    function Q0(e) {
      return e.data === up;
    }
    function Iy(e) {
      return e.data === op;
    }
    function HT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function PT(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === $i)
          break;
        if (t === En) {
          var a = e.data;
          if (a === Th || a === op || a === up)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return xh(e.nextSibling);
    }
    function VT(e) {
      return xh(e.firstChild);
    }
    function BT(e) {
      return xh(e.firstChild);
    }
    function $T(e) {
      return xh(e.nextSibling);
    }
    function YT(e, t, a, i, u, s, f) {
      fp(s, e), Gy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Me) !== re;
      return ZR(e, t, a, p, i, y, f);
    }
    function IT(e, t, a, i) {
      return fp(a, e), a.mode & Me, eT(e, t);
    }
    function QT(e, t) {
      fp(t, e);
    }
    function WT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === Th || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Th || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function GT(e) {
      dn(e);
    }
    function qT(e) {
      dn(e);
    }
    function XT(e) {
      return e !== "head" && e !== "body";
    }
    function KT(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function JT(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function ZT(e, t) {
      t.nodeType === Yr ? Uy(e, t) : t.nodeType === En || Ay(e, t);
    }
    function e_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? Uy(a, t) : t.nodeType === En || Ay(a, t));
      }
    }
    function t_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === Yr ? Uy(a, i) : i.nodeType === En || Ay(a, i));
    }
    function n_(e, t, a) {
      jy(e, t);
    }
    function r_(e, t) {
      Fy(e, t);
    }
    function a_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && jy(i, t);
      }
    }
    function i_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Fy(a, t);
      }
    }
    function l_(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && jy(a, i);
    }
    function u_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && Fy(a, i);
    }
    function o_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function s_(e) {
      tp(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, Qy = "__reactProps$" + vf, cp = "__reactContainer$" + vf, Wy = "__reactEvents$" + vf, c_ = "__reactListeners$" + vf, f_ = "__reactHandles$" + vf;
    function d_(e) {
      delete e[hf], delete e[Qy], delete e[Wy], delete e[c_], delete e[f_];
    }
    function fp(e, t) {
      t[hf] = e;
    }
    function wh(e, t) {
      t[cp] = e;
    }
    function G0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function ec(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[hf];
              if (s)
                return s;
              u = W0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zo(e) {
      var t = e[hf] || e[cp];
      return t && (t.tag === oe || t.tag === Ce || t.tag === Re || t.tag === ee) ? t : null;
    }
    function mf(e) {
      if (e.tag === oe || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function bh(e) {
      return e[Qy] || null;
    }
    function Gy(e, t) {
      e[Qy] = t;
    }
    function p_(e) {
      var t = e[Wy];
      return t === void 0 && (t = e[Wy] = /* @__PURE__ */ new Set()), t;
    }
    var q0 = {}, X0 = me.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = mt(e.type, e._source, t ? t.type : null);
        X0.setExtraStackFrame(a);
      } else
        X0.setExtraStackFrame(null);
    }
    function al(e, t, a, i, u) {
      {
        var s = Function.call.bind(Kn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in q0) && (q0[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var qy = [], kh;
    kh = [];
    var Uu = -1;
    function Uo(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[Uu] && S("Unexpected Fiber popped."), e.current = qy[Uu], qy[Uu] = null, kh[Uu] = null, Uu--;
    }
    function Zr(e, t, a) {
      Uu++, qy[Uu] = e.current, kh[Uu] = a, e.current = t;
    }
    var Xy;
    Xy = {};
    var oi = {};
    Object.freeze(oi);
    var Au = Uo(oi), Wl = Uo(!1), Ky = oi;
    function yf(e, t, a) {
      return a && Gl(t) ? Ky : Au.current;
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = We(e) || "Unknown";
          al(i, s, "context", p);
        }
        return u && K0(e, t, s), s;
      }
    }
    function Oh() {
      return Wl.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      Jr(Wl, e), Jr(Au, e);
    }
    function Jy(e) {
      Jr(Wl, e), Jr(Au, e);
    }
    function J0(e, t, a) {
      {
        if (Au.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Zr(Au, t, e), Zr(Wl, a, e);
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = We(e) || "Unknown";
            Xy[s] || (Xy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((We(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = We(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return tt({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Ky = Au.current, Zr(Au, a, e), Zr(Wl, Wl.current, e), !0;
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Z0(e, t, Ky);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Wl, e), Jr(Au, e), Zr(Au, u, e), Zr(Wl, a, e);
        } else
          Jr(Wl, e), Zr(Wl, a, e);
      }
    }
    function v_(e) {
      {
        if (!pa(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ee:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ao = 0, Nh = 1, ju = null, Zy = !1, eg = !1;
    function tE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function h_(e) {
      Zy = !0, tE(e);
    }
    function nE() {
      Zy && jo();
    }
    function jo() {
      if (!eg && ju !== null) {
        eg = !0;
        var e = 0, t = xr();
        try {
          var a = !0, i = ju;
          for (wt(Sa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Zy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), pd(Nl, jo), s;
        } finally {
          wt(t), eg = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, zh = null, Uh = 0, wi = [], bi = 0, tc = null, Fu = 1, Hu = "";
    function m_(e) {
      return rc(), (e.flags & Nv) !== ze;
    }
    function y_(e) {
      return rc(), Uh;
    }
    function g_() {
      var e = Hu, t = Fu, a = t & ~S_(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), Sf[Ef++] = Uh, Sf[Ef++] = zh, zh = e, Uh = t;
    }
    function rE(e, t, a) {
      rc(), wi[bi++] = Fu, wi[bi++] = Hu, wi[bi++] = tc, tc = e;
      var i = Fu, u = Hu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), _ = f >> y, z = s - y, A = Ah(t) + z, F = p << z, le = F | _, Ue = w + u;
        Fu = 1 << A | le, Hu = Ue;
      } else {
        var be = p << s, Tt = be | f, vt = u;
        Fu = 1 << v | Tt, Hu = vt;
      }
    }
    function tg(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), rE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - po(e);
    }
    function S_(e) {
      return 1 << Ah(e) - 1;
    }
    function ng(e) {
      for (; e === zh; )
        zh = Sf[--Ef], Sf[Ef] = null, Uh = Sf[--Ef], Sf[Ef] = null;
      for (; e === tc; )
        tc = wi[--bi], wi[bi] = null, Hu = wi[--bi], wi[bi] = null, Fu = wi[--bi], wi[bi] = null;
    }
    function E_() {
      return rc(), tc !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function C_(e, t) {
      rc(), wi[bi++] = Fu, wi[bi++] = Hu, wi[bi++] = tc, Fu = t.id, Hu = t.overflow, tc = e;
    }
    function rc() {
      Or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, Di = null, il = !1, ac = !1, Fo = null;
    function R_() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aE() {
      ac = !0;
    }
    function T_() {
      return ac;
    }
    function __(e) {
      var t = e.stateNode.containerInfo;
      return Di = BT(t), kr = e, il = !0, Fo = null, ac = !1, !0;
    }
    function x_(e, t, a) {
      return Di = $T(t), kr = e, il = !0, Fo = null, ac = !1, a !== null && C_(e, a), !0;
    }
    function iE(e, t) {
      switch (e.tag) {
        case ee: {
          ZT(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & Me) !== re;
          t_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && e_(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      iE(e, t);
      var a = kb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Lt) : i.push(a);
    }
    function rg(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, n_(a, i);
                break;
              case Ce:
                var u = t.pendingProps;
                r_(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Me) !== re;
                l_(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ce: {
                var w = t.pendingProps, _ = (e.mode & Me) !== re;
                u_(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case oe:
                var F = t.type;
                t.pendingProps, a_(A, F);
                break;
              case Ce:
                var le = t.pendingProps;
                i_(A, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function uE(e, t) {
      t.flags = t.flags & ~mi | Xt, rg(e, t);
    }
    function oE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = AT(t, a);
          return i !== null ? (e.stateNode = i, kr = e, Di = VT(i), !0) : !1;
        }
        case Ce: {
          var u = e.pendingProps, s = jT(t, u);
          return s !== null ? (e.stateNode = s, kr = e, Di = null, !0) : !1;
        }
        case Re: {
          var f = FT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: E_(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = Ob(f);
            return v.return = e, e.child = v, kr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ag(e) {
      return (e.mode & Me) !== re && (e.flags & qe) === ze;
    }
    function ig(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lg(e) {
      if (il) {
        var t = Di;
        if (!t) {
          ag(e) && (rg(kr, e), ig()), uE(kr, e), il = !1, kr = e;
          return;
        }
        var a = t;
        if (!oE(e, t)) {
          ag(e) && (rg(kr, e), ig()), t = sp(a);
          var i = kr;
          if (!t || !oE(e, t)) {
            uE(kr, e), il = !1, kr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function w_(e, t, a) {
      var i = e.stateNode, u = !ac, s = YT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function b_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = IT(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & Me) !== re;
              KT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Me) !== re;
              JT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function D_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      QT(a, e);
    }
    function k_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return WT(a);
    }
    function sE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== ee && t.tag !== Re; )
        t = t.return;
      kr = t;
    }
    function jh(e) {
      if (e !== kr)
        return !1;
      if (!il)
        return sE(e), il = !0, !1;
      if (e.tag !== ee && (e.tag !== oe || XT(e.type) && !Vy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (ag(e))
            cE(e), ig();
          else
            for (; t; )
              lE(e, t), t = sp(t);
      }
      return sE(e), e.tag === Re ? Di = k_(e) : Di = kr ? sp(e.stateNode) : null, !0;
    }
    function O_() {
      return il && Di !== null;
    }
    function cE(e) {
      for (var t = Di; t; )
        iE(e, t), t = sp(t);
    }
    function Cf() {
      kr = null, Di = null, il = !1, ac = !1;
    }
    function fE() {
      Fo !== null && (a1(Fo), Fo = null);
    }
    function Or() {
      return il;
    }
    function ug(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    var L_ = me.ReactCurrentBatchConfig, M_ = null;
    function N_() {
      return L_.transition;
    }
    var ll = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var z_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], lc = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          e.add(We(_) || "Component"), lc.add(_.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          t.add(We(_) || "Component"), lc.add(_.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          a.add(We(_) || "Component"), lc.add(_.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          i.add(We(_) || "Component"), lc.add(_.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(_) {
          u.add(We(_) || "Component"), lc.add(_.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(_) {
          s.add(We(_) || "Component"), lc.add(_.type);
        }), gp = []), t.size > 0) {
          var f = ic(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ic(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ic(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = ic(e);
          Le(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ic(a);
          Le(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = ic(u);
          Le(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Fh = /* @__PURE__ */ new Map(), dE = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = z_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dE.has(e.type)) {
          var i = Fh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Fh.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        Fh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(We(s) || "Component"), dE.add(s.type);
            });
            var u = ic(i);
            try {
              hn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              rn();
            }
          }
        });
      }, ll.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Fh = /* @__PURE__ */ new Map();
      };
    }
    var og, sg, cg, fg, dg, pE = function(e, t) {
    };
    og = !1, sg = !1, cg = {}, fg = {}, dg = {}, pE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = We(t) || "Component";
        fg[a] || (fg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function U_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & un || et) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !U_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = We(e) || "Component";
          cg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), cg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(w) {
            var _ = v.refs;
            w === null ? delete _[y] : _[y] = w;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Hh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ph(e) {
      {
        var t = We(e) || "Component";
        if (dg[t])
          return;
        dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function vE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function hE(e) {
      function t(O, H) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [H], O.flags |= Lt) : L.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var L = H; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, H) {
        for (var L = /* @__PURE__ */ new Map(), X = H; X !== null; )
          X.key !== null ? L.set(X.key, X) : L.set(X.index, X), X = X.sibling;
        return L;
      }
      function u(O, H) {
        var L = hc(O, H);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, H, L) {
        if (O.index = L, !e)
          return O.flags |= Nv, H;
        var X = O.alternate;
        if (X !== null) {
          var ve = X.index;
          return ve < H ? (O.flags |= Xt, H) : ve;
        } else
          return O.flags |= Xt, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Xt), O;
      }
      function p(O, H, L, X) {
        if (H === null || H.tag !== Ce) {
          var ve = u0(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var se = u(H, L);
          return se.return = O, se;
        }
      }
      function v(O, H, L, X) {
        var ve = L.type;
        if (ve === sa)
          return g(O, H, L.props.children, X, L.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        E1(H, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ae && vE(ve) === H.type)) {
          var se = u(H, L.props);
          return se.ref = Sp(O, H, L), se.return = O, se._debugSource = L._source, se._debugOwner = L._owner, se;
        }
        var Ie = l0(L, O.mode, X);
        return Ie.ref = Sp(O, H, L), Ie.return = O, Ie;
      }
      function y(O, H, L, X) {
        if (H === null || H.tag !== je || H.stateNode.containerInfo !== L.containerInfo || H.stateNode.implementation !== L.implementation) {
          var ve = o0(L, O.mode, X);
          return ve.return = O, ve;
        } else {
          var se = u(H, L.children || []);
          return se.return = O, se;
        }
      }
      function g(O, H, L, X, ve) {
        if (H === null || H.tag !== pt) {
          var se = qo(L, O.mode, X, ve);
          return se.return = O, se;
        } else {
          var Ie = u(H, L);
          return Ie.return = O, Ie;
        }
      }
      function w(O, H, L) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var X = u0("" + H, O.mode, L);
          return X.return = O, X;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Er: {
              var ve = l0(H, O.mode, L);
              return ve.ref = Sp(O, null, H), ve.return = O, ve;
            }
            case Hr: {
              var se = o0(H, O.mode, L);
              return se.return = O, se;
            }
            case Ae: {
              var Ie = H._payload, Je = H._init;
              return w(O, Je(Ie), L);
            }
          }
          if (xt(H) || Pr(H)) {
            var Wt = qo(H, O.mode, L, null);
            return Wt.return = O, Wt;
          }
          Hh(O, H);
        }
        return typeof H == "function" && Ph(O), null;
      }
      function _(O, H, L, X) {
        var ve = H !== null ? H.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return ve !== null ? null : p(O, H, "" + L, X);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Er:
              return L.key === ve ? v(O, H, L, X) : null;
            case Hr:
              return L.key === ve ? y(O, H, L, X) : null;
            case Ae: {
              var se = L._payload, Ie = L._init;
              return _(O, H, Ie(se), X);
            }
          }
          if (xt(L) || Pr(L))
            return ve !== null ? null : g(O, H, L, X, null);
          Hh(O, L);
        }
        return typeof L == "function" && Ph(O), null;
      }
      function z(O, H, L, X, ve) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var se = O.get(L) || null;
          return p(H, se, "" + X, ve);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Er: {
              var Ie = O.get(X.key === null ? L : X.key) || null;
              return v(H, Ie, X, ve);
            }
            case Hr: {
              var Je = O.get(X.key === null ? L : X.key) || null;
              return y(H, Je, X, ve);
            }
            case Ae:
              var Wt = X._payload, Mt = X._init;
              return z(O, H, L, Mt(Wt), ve);
          }
          if (xt(X) || Pr(X)) {
            var $n = O.get(L) || null;
            return g(H, $n, X, ve, null);
          }
          Hh(H, X);
        }
        return typeof X == "function" && Ph(H), null;
      }
      function A(O, H, L) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case Er:
            case Hr:
              pE(O, L);
              var X = O.key;
              if (typeof X != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(X);
                break;
              }
              if (!H.has(X)) {
                H.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Ae:
              var ve = O._payload, se = O._init;
              A(se(ve), H, L);
              break;
          }
        }
        return H;
      }
      function F(O, H, L, X) {
        for (var ve = null, se = 0; se < L.length; se++) {
          var Ie = L[se];
          ve = A(Ie, ve, O);
        }
        for (var Je = null, Wt = null, Mt = H, $n = 0, Nt = 0, jn = null; Mt !== null && Nt < L.length; Nt++) {
          Mt.index > Nt ? (jn = Mt, Mt = null) : jn = Mt.sibling;
          var ta = _(O, Mt, L[Nt], X);
          if (ta === null) {
            Mt === null && (Mt = jn);
            break;
          }
          e && Mt && ta.alternate === null && t(O, Mt), $n = s(ta, $n, Nt), Wt === null ? Je = ta : Wt.sibling = ta, Wt = ta, Mt = jn;
        }
        if (Nt === L.length) {
          if (a(O, Mt), Or()) {
            var jr = Nt;
            nc(O, jr);
          }
          return Je;
        }
        if (Mt === null) {
          for (; Nt < L.length; Nt++) {
            var ci = w(O, L[Nt], X);
            ci !== null && ($n = s(ci, $n, Nt), Wt === null ? Je = ci : Wt.sibling = ci, Wt = ci);
          }
          if (Or()) {
            var xa = Nt;
            nc(O, xa);
          }
          return Je;
        }
        for (var wa = i(O, Mt); Nt < L.length; Nt++) {
          var na = z(wa, O, Nt, L[Nt], X);
          na !== null && (e && na.alternate !== null && wa.delete(na.key === null ? Nt : na.key), $n = s(na, $n, Nt), Wt === null ? Je = na : Wt.sibling = na, Wt = na);
        }
        if (e && wa.forEach(function(Pf) {
          return t(O, Pf);
        }), Or()) {
          var Qu = Nt;
          nc(O, Qu);
        }
        return Je;
      }
      function le(O, H, L, X) {
        var ve = Pr(L);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (sg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sg = !0), L.entries === ve && (og || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), og = !0);
          var se = ve.call(L);
          if (se)
            for (var Ie = null, Je = se.next(); !Je.done; Je = se.next()) {
              var Wt = Je.value;
              Ie = A(Wt, Ie, O);
            }
        }
        var Mt = ve.call(L);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Nt = null, jn = H, ta = 0, jr = 0, ci = null, xa = Mt.next(); jn !== null && !xa.done; jr++, xa = Mt.next()) {
          jn.index > jr ? (ci = jn, jn = null) : ci = jn.sibling;
          var wa = _(O, jn, xa.value, X);
          if (wa === null) {
            jn === null && (jn = ci);
            break;
          }
          e && jn && wa.alternate === null && t(O, jn), ta = s(wa, ta, jr), Nt === null ? $n = wa : Nt.sibling = wa, Nt = wa, jn = ci;
        }
        if (xa.done) {
          if (a(O, jn), Or()) {
            var na = jr;
            nc(O, na);
          }
          return $n;
        }
        if (jn === null) {
          for (; !xa.done; jr++, xa = Mt.next()) {
            var Qu = w(O, xa.value, X);
            Qu !== null && (ta = s(Qu, ta, jr), Nt === null ? $n = Qu : Nt.sibling = Qu, Nt = Qu);
          }
          if (Or()) {
            var Pf = jr;
            nc(O, Pf);
          }
          return $n;
        }
        for (var Kp = i(O, jn); !xa.done; jr++, xa = Mt.next()) {
          var nu = z(Kp, O, jr, xa.value, X);
          nu !== null && (e && nu.alternate !== null && Kp.delete(nu.key === null ? jr : nu.key), ta = s(nu, ta, jr), Nt === null ? $n = nu : Nt.sibling = nu, Nt = nu);
        }
        if (e && Kp.forEach(function(uD) {
          return t(O, uD);
        }), Or()) {
          var lD = jr;
          nc(O, lD);
        }
        return $n;
      }
      function Ue(O, H, L, X) {
        if (H !== null && H.tag === Ce) {
          a(O, H.sibling);
          var ve = u(H, L);
          return ve.return = O, ve;
        }
        a(O, H);
        var se = u0(L, O.mode, X);
        return se.return = O, se;
      }
      function be(O, H, L, X) {
        for (var ve = L.key, se = H; se !== null; ) {
          if (se.key === ve) {
            var Ie = L.type;
            if (Ie === sa) {
              if (se.tag === pt) {
                a(O, se.sibling);
                var Je = u(se, L.props.children);
                return Je.return = O, Je._debugSource = L._source, Je._debugOwner = L._owner, Je;
              }
            } else if (se.elementType === Ie || // Keep this check inline so it only runs on the false path:
            E1(se, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ae && vE(Ie) === se.type) {
              a(O, se.sibling);
              var Wt = u(se, L.props);
              return Wt.ref = Sp(O, se, L), Wt.return = O, Wt._debugSource = L._source, Wt._debugOwner = L._owner, Wt;
            }
            a(O, se);
            break;
          } else
            t(O, se);
          se = se.sibling;
        }
        if (L.type === sa) {
          var Mt = qo(L.props.children, O.mode, X, L.key);
          return Mt.return = O, Mt;
        } else {
          var $n = l0(L, O.mode, X);
          return $n.ref = Sp(O, H, L), $n.return = O, $n;
        }
      }
      function Tt(O, H, L, X) {
        for (var ve = L.key, se = H; se !== null; ) {
          if (se.key === ve)
            if (se.tag === je && se.stateNode.containerInfo === L.containerInfo && se.stateNode.implementation === L.implementation) {
              a(O, se.sibling);
              var Ie = u(se, L.children || []);
              return Ie.return = O, Ie;
            } else {
              a(O, se);
              break;
            }
          else
            t(O, se);
          se = se.sibling;
        }
        var Je = o0(L, O.mode, X);
        return Je.return = O, Je;
      }
      function vt(O, H, L, X) {
        var ve = typeof L == "object" && L !== null && L.type === sa && L.key === null;
        if (ve && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Er:
              return f(be(O, H, L, X));
            case Hr:
              return f(Tt(O, H, L, X));
            case Ae:
              var se = L._payload, Ie = L._init;
              return vt(O, H, Ie(se), X);
          }
          if (xt(L))
            return F(O, H, L, X);
          if (Pr(L))
            return le(O, H, L, X);
          Hh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ue(O, H, "" + L, X)) : (typeof L == "function" && Ph(O), a(O, H));
      }
      return vt;
    }
    var Rf = hE(!0), mE = hE(!1);
    function A_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function j_(e, t) {
      for (var a = e.child; a !== null; )
        _b(a, t), a = a.sibling;
    }
    var pg = Uo(null), vg;
    vg = {};
    var Vh = null, Tf = null, hg = null, Bh = !1;
    function $h() {
      Vh = null, Tf = null, hg = null, Bh = !1;
    }
    function yE() {
      Bh = !0;
    }
    function gE() {
      Bh = !1;
    }
    function SE(e, t, a) {
      Zr(pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== vg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = vg;
    }
    function mg(e, t) {
      var a = pg.current;
      Jr(pg, t), e._currentValue = a;
    }
    function yg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Pl(i.childLanes, t) ? u !== null && !Pl(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F_(e, t, a) {
      H_(e, t, a);
    }
    function H_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = Ro(a), v = Pu(en, p);
                v.tag = Ih;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = nt(_.lanes, a)), yg(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = nt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = nt(A.lanes, a)), yg(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function _f(e, t) {
      Vh = e, Tf = null, hg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Kr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function qn(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (hg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Tf === null) {
          if (Vh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Tf = a, Vh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Tf = Tf.next = a;
      }
      return t;
    }
    var uc = null;
    function gg(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function P_() {
      if (uc !== null) {
        for (var e = 0; e < uc.length; e++) {
          var t = uc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        uc = null;
      }
    }
    function EE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function V_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function B_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, gg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function Ba(e, t) {
      return Yh(e, t);
    }
    var $_ = Yh;
    function Yh(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (Xt | mi)) !== ze && m1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (Xt | mi)) !== ze && m1(e), i = u, u = u.return;
      if (i.tag === ee) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var CE = 0, RE = 1, Ih = 2, Sg = 3, Qh = !1, Eg, Wh;
    Eg = !1, Wh = null;
    function Cg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function TE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: CE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ho(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Wh === u && !Eg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Eg = !0), Vw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, $_(e, a);
      } else
        return B_(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Qv(a)) {
          var s = u.lanes;
          s = Od(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, Kc(e, f);
        }
      }
    }
    function Rg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Y_(e, t, a, i, u, s) {
      switch (a.tag) {
        case RE: {
          var f = a.payload;
          if (typeof f == "function") {
            yE();
            var p = f.call(s, i, u);
            {
              if (e.mode & un) {
                Vn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              gE();
            }
            return p;
          }
          return f;
        }
        case Sg:
          e.flags = e.flags & ~er | qe;
        // Intentional fallthrough
        case CE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            yE(), y = v.call(s, i, u);
            {
              if (e.mode & un) {
                Vn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              gE();
            }
          } else
            y = v;
          return y == null ? i : tt({}, i, y);
        }
        case Ih:
          return Qh = !0, i;
      }
      return i;
    }
    function qh(e, t, a, i) {
      var u = e.updateQueue;
      Qh = !1, Wh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var w = g.updateQueue, _ = w.lastBaseUpdate;
          _ !== f && (_ === null ? w.firstBaseUpdate = y : _.next = y, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = Y, F = null, le = null, Ue = null, be = s;
        do {
          var Tt = be.lane, vt = be.eventTime;
          if (Pl(i, Tt)) {
            if (Ue !== null) {
              var H = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ue = Ue.next = H;
            }
            z = Y_(e, u, be, z, t, a);
            var L = be.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Kt) {
              e.flags |= In;
              var X = u.effects;
              X === null ? u.effects = [be] : X.push(be);
            }
          } else {
            var O = {
              eventTime: vt,
              lane: Tt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ue === null ? (le = Ue = O, F = z) : Ue = Ue.next = O, A = nt(A, Tt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, be = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (F = z), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Ue;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var Je = Ie;
          do
            A = nt(A, Je.lane), Je = Je.next;
          while (Je !== Ie);
        } else s === null && (u.shared.lanes = Y);
        Qp(A), e.lanes = A, e.memoizedState = z;
      }
      Wh = null;
    }
    function I_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function _E() {
      Qh = !1;
    }
    function Xh() {
      return Qh;
    }
    function xE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, I_(f, a));
        }
    }
    var Ep = {}, Po = Uo(Ep), Cp = Uo(Ep), Kh = Uo(Ep);
    function Jh(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Jh(Kh.current);
      return e;
    }
    function Tg(e, t) {
      Zr(Kh, t, e), Zr(Cp, e, e), Zr(Po, Ep, e);
      var a = oT(t);
      Jr(Po, e), Zr(Po, a, e);
    }
    function xf(e) {
      Jr(Po, e), Jr(Cp, e), Jr(Kh, e);
    }
    function _g() {
      var e = Jh(Po.current);
      return e;
    }
    function bE(e) {
      Jh(Kh.current);
      var t = Jh(Po.current), a = sT(t, e.type);
      t !== a && (Zr(Cp, e, e), Zr(Po, a, e));
    }
    function xg(e) {
      Cp.current === e && (Jr(Po, e), Jr(Cp, e));
    }
    var Q_ = 0, DE = 1, kE = 1, Rp = 2, ul = Uo(Q_);
    function wg(e, t) {
      return (e & t) !== 0;
    }
    function wf(e) {
      return e & DE;
    }
    function bg(e, t) {
      return e & DE | t;
    }
    function W_(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      Zr(ul, t, e);
    }
    function bf(e) {
      Jr(ul, e);
    }
    function G_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Q0(i) || Iy(i))
              return t;
          }
        } else if (t.tag === St && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & qe) !== ze;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), rr = (
      /* */
      1
    ), ql = (
      /*  */
      2
    ), ar = (
      /*    */
      4
    ), Lr = (
      /*   */
      8
    ), Dg = [];
    function kg() {
      for (var e = 0; e < Dg.length; e++) {
        var t = Dg[e];
        t._workInProgressVersionPrimary = null;
      }
      Dg.length = 0;
    }
    function q_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = me.ReactCurrentDispatcher, Tp = me.ReactCurrentBatchConfig, Og, Df;
    Og = /* @__PURE__ */ new Set();
    var oc = Y, Qt = null, ir = null, lr = null, em = !1, _p = !1, xp = 0, X_ = 0, K_ = 25, V = null, ki = null, Bo = -1, Lg = !1;
    function Pt() {
      {
        var e = V;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function te() {
      {
        var e = V;
        ki !== null && (Bo++, ki[Bo] !== e && J_(e));
      }
    }
    function kf(e) {
      e != null && !xt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function J_(e) {
      {
        var t = We(Qt);
        if (!Og.has(t) && (Og.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Bo; u++) {
            for (var s = ki[u], f = u === Bo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ea() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mg(e, t) {
      if (Lg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!we(e[a], t[a]))
          return !1;
      return !0;
    }
    function Of(e, t, a, i, u, s) {
      oc = s, Qt = t, ki = e !== null ? e._debugHookTypes : null, Bo = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? fe.current = KE : ki !== null ? fe.current = XE : fe.current = qE;
      var f = a(i, u);
      if (_p) {
        var p = 0;
        do {
          if (_p = !1, xp = 0, p >= K_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Lg = !1, ir = null, lr = null, t.updateQueue = null, Bo = -1, fe.current = JE, f = a(i, u);
        } while (_p);
      }
      fe.current = pm, t._debugHookTypes = ki;
      var v = ir !== null && ir.next !== null;
      if (oc = Y, Qt = null, ir = null, lr = null, V = null, ki = null, Bo = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Me) !== re && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function OE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== re ? t.flags &= ~(yu | Aa | Ir | Te) : t.flags &= ~(Ir | Te), e.lanes = To(e.lanes, a);
    }
    function LE() {
      if (fe.current = pm, em) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      oc = Y, Qt = null, ir = null, lr = null, ki = null, Bo = -1, V = null, YE = !1, _p = !1, xp = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return lr === null ? Qt.memoizedState = lr = e : lr = lr.next = e, lr;
    }
    function Oi() {
      var e;
      if (ir === null) {
        var t = Qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ir.next;
      var a;
      if (lr === null ? a = Qt.memoizedState : a = lr.next, a !== null)
        lr = a, a = lr.next, ir = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ir = e;
        var i = {
          memoizedState: ir.memoizedState,
          baseState: ir.baseState,
          baseQueue: ir.baseQueue,
          queue: ir.queue,
          next: null
        };
        lr === null ? Qt.memoizedState = lr = i : lr = lr.next = i;
      }
      return lr;
    }
    function ME() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ng(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function zg(e, t, a) {
      var i = Xl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = nx.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function Ug(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ir, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, w = s.baseState, _ = null, z = null, A = null, F = g;
        do {
          var le = F.lane;
          if (Pl(oc, le)) {
            if (A !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = be;
            }
            if (F.hasEagerState)
              w = F.eagerState;
            else {
              var Tt = F.action;
              w = e(w, Tt);
            }
          } else {
            var Ue = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (z = A = Ue, _ = w) : A = A.next = Ue, Qt.lanes = nt(Qt.lanes, le), Qp(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? _ = w : A.next = z, we(w, i.memoizedState) || zp(), i.memoizedState = w, i.baseState = _, i.baseQueue = A, u.lastRenderedState = w;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var O = vt;
        do {
          var H = O.lane;
          Qt.lanes = nt(Qt.lanes, H), Qp(H), O = O.next;
        } while (O !== vt);
      } else f === null && (u.lanes = Y);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Ag(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        we(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function qD(e, t, a) {
    }
    function XD(e, t, a) {
    }
    function jg(e, t, a) {
      var i = Qt, u = Xl(), s, f = Or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Df || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Df = !0);
      } else {
        if (s = t(), !Df) {
          var p = t();
          we(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(v, oc) || NE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(UE.bind(null, i, y, e), [e]), i.flags |= Ir, wp(rr | Lr, zE.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Qt, u = Oi(), s = t();
      if (!Df) {
        var f = t();
        we(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
      }
      var p = u.memoizedState, v = !we(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (Dp(UE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      lr !== null && lr.memoizedState.tag & rr) {
        i.flags |= Ir, wp(rr | Lr, zE.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(g, oc) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= mu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Qt.updateQueue;
      if (u === null)
        u = ME(), Qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function zE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && jE(e);
    }
    function UE(e, t, a) {
      var i = function() {
        AE(t) && jE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !we(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = Ba(e, xe);
      t !== null && cr(t, e, xe, en);
    }
    function nm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Ng,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = rx.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function Fg(e) {
      return Ug(Ng);
    }
    function Hg(e) {
      return Ag(Ng);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Qt.updateQueue;
      if (s === null)
        s = ME(), Qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Pg(e) {
      var t = Xl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function rm(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Xl(), s = i === void 0 ? null : i;
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, void 0, s);
    }
    function am(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (ir !== null) {
        var p = ir.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Mg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, f, s);
    }
    function im(e, t) {
      return (Qt.mode & qr) !== re ? bp(yu | Ir | Ll, Lr, e, t) : bp(Ir | Ll, Lr, e, t);
    }
    function Dp(e, t) {
      return am(Ir, Lr, e, t);
    }
    function Vg(e, t) {
      return bp(Te, ql, e, t);
    }
    function lm(e, t) {
      return am(Te, ql, e, t);
    }
    function Bg(e, t) {
      var a = Te;
      return a |= Ua, (Qt.mode & qr) !== re && (a |= Aa), bp(a, ar, e, t);
    }
    function um(e, t) {
      return am(Te, ar, e, t);
    }
    function FE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Te;
      return u |= Ua, (Qt.mode & qr) !== re && (u |= Aa), bp(u, ar, FE.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(Te, ar, FE.bind(null, t, e), i);
    }
    function Z_(e, t) {
    }
    var sm = Z_;
    function Yg(e, t) {
      var a = Xl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function cm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Xl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function fm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Mg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Qg(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function HE(e) {
      var t = Oi(), a = ir, i = a.memoizedState;
      return VE(t, i, e);
    }
    function PE(e) {
      var t = Oi();
      if (ir === null)
        return t.memoizedState = e, e;
      var a = ir.memoizedState;
      return VE(t, a, e);
    }
    function VE(e, t, a) {
      var i = !$v(oc);
      if (i) {
        if (!we(a, t)) {
          var u = Tr();
          Qt.lanes = nt(Qt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function ex(e, t, a) {
      var i = xr();
      wt(py(i, Ri)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wt(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = nm(!1), t = e[0], a = e[1], i = ex.bind(null, a), u = Xl();
      return u.memoizedState = i, [t, i];
    }
    function BE() {
      var e = Fg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function $E() {
      var e = Hg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var YE = !1;
    function tx() {
      return YE;
    }
    function Gg() {
      var e = Xl(), t = Mm(), a = t.identifierPrefix, i;
      if (Or()) {
        var u = g_();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = X_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function nx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        QE(t, u);
      else {
        var s = EE(e, t, u, i);
        if (s !== null) {
          var f = _a();
          cr(s, e, i, f), WE(s, t, i);
        }
      }
      GE(e, i);
    }
    function rx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        QE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, we(y, v)) {
                V_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = EE(e, t, u, i);
        if (g !== null) {
          var w = _a();
          cr(g, e, i, w), WE(g, t, i);
        }
      }
      GE(e, i);
    }
    function IE(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function QE(e, t) {
      _p = em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WE(e, t, a) {
      if (Qv(a)) {
        var i = t.lanes;
        i = Od(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, Kc(e, u);
      }
    }
    function GE(e, t, a) {
      Ji(e, t);
    }
    var pm = {
      readContext: qn,
      useCallback: ea,
      useContext: ea,
      useEffect: ea,
      useImperativeHandle: ea,
      useInsertionEffect: ea,
      useLayoutEffect: ea,
      useMemo: ea,
      useReducer: ea,
      useRef: ea,
      useState: ea,
      useDebugValue: ea,
      useDeferredValue: ea,
      useTransition: ea,
      useMutableSource: ea,
      useSyncExternalStore: ea,
      useId: ea,
      unstable_isNewReconciler: he
    }, qE = null, XE = null, KE = null, JE = null, Kl = null, ol = null, vm = null;
    {
      var qg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      qE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), kf(t), Yg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), kf(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), kf(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), kf(t), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), kf(t), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), kf(t);
          var a = fe.current;
          fe.current = Kl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = fe.current;
          fe.current = Kl;
          try {
            return zg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), Pg(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = fe.current;
          fe.current = Kl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), jg(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Gg();
        },
        unstable_isNewReconciler: he
      }, XE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), Yg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = fe.current;
          fe.current = Kl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = fe.current;
          fe.current = Kl;
          try {
            return zg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Pg(e);
        },
        useState: function(e) {
          V = "useState", te();
          var t = fe.current;
          fe.current = Kl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), jg(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), Gg();
        },
        unstable_isNewReconciler: he
      }, KE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = fe.current;
          fe.current = ol;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), rm();
        },
        useState: function(e) {
          V = "useState", te();
          var t = fe.current;
          fe.current = ol;
          try {
            return Fg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", te(), dm();
        },
        unstable_isNewReconciler: he
      }, JE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = fe.current;
          fe.current = vm;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = fe.current;
          fe.current = vm;
          try {
            return Ag(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), rm();
        },
        useState: function(e) {
          V = "useState", te();
          var t = fe.current;
          fe.current = vm;
          try {
            return Hg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), PE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), $E();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", te(), dm();
        },
        unstable_isNewReconciler: he
      }, Kl = {
        readContext: function(e) {
          return qg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), Pt(), Yg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), Pt(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), Pt(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), Pt(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), Pt(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), Pt(), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), Pt();
          var a = fe.current;
          fe.current = Kl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), Pt();
          var i = fe.current;
          fe.current = Kl;
          try {
            return zg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), Pt(), Pg(e);
        },
        useState: function(e) {
          V = "useState", Xe(), Pt();
          var t = fe.current;
          fe.current = Kl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), Pt(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), Pt(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), Pt(), jg(e, t, a);
        },
        useId: function() {
          return V = "useId", Xe(), Pt(), Gg();
        },
        unstable_isNewReconciler: he
      }, ol = {
        readContext: function(e) {
          return qg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), te();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), te();
          var i = fe.current;
          fe.current = ol;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), te(), rm();
        },
        useState: function(e) {
          V = "useState", Xe(), te();
          var t = fe.current;
          fe.current = ol;
          try {
            return Fg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), te(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), te(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", Xe(), te(), dm();
        },
        unstable_isNewReconciler: he
      }, vm = {
        readContext: function(e) {
          return qg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Xe(), te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Xe(), te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Xe(), te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Xe(), te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Xe(), te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Xe(), te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Xe(), te();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Xe(), te();
          var i = fe.current;
          fe.current = ol;
          try {
            return Ag(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Xe(), te(), rm();
        },
        useState: function(e) {
          V = "useState", Xe(), te();
          var t = fe.current;
          fe.current = ol;
          try {
            return Hg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Xe(), te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Xe(), te(), PE(e);
        },
        useTransition: function() {
          return V = "useTransition", Xe(), te(), $E();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Xe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Xe(), te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", Xe(), te(), dm();
        },
        unstable_isNewReconciler: he
      };
    }
    var $o = k.unstable_now, ZE = 0, hm = -1, kp = -1, mm = -1, Xg = !1, ym = !1;
    function eC() {
      return Xg;
    }
    function ax() {
      ym = !0;
    }
    function ix() {
      Xg = !1, ym = !1;
    }
    function lx() {
      Xg = ym, ym = !1;
    }
    function tC() {
      return ZE;
    }
    function nC() {
      ZE = $o();
    }
    function Kg(e) {
      kp = $o(), e.actualStartTime < 0 && (e.actualStartTime = $o());
    }
    function rC(e) {
      kp = -1;
    }
    function gm(e, t) {
      if (kp >= 0) {
        var a = $o() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Jl(e) {
      if (hm >= 0) {
        var t = $o() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (mm >= 0) {
        var t = $o() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Zl() {
      hm = $o();
    }
    function Zg() {
      mm = $o();
    }
    function eS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sl(e, t) {
      if (e && e.defaultProps) {
        var a = tt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var tS = {}, nS, rS, aS, iS, lS, aC, Sm, uS, oS, sS, Op;
    {
      nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var iC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iC.has(a) || (iC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aC = function(e, t) {
        if (t === void 0) {
          var a = yt(e) || "Component";
          lS.has(a) || (lS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(tS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(tS);
    }
    function cS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & un) {
          Vn(!0);
          try {
            s = a(i, u);
          } finally {
            Vn(!1);
          }
        }
        aC(t, s);
      }
      var f = s == null ? u : tt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var fS = {
      isMounted: va,
      enqueueSetState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Wo(i), f = Pu(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Wo(i), f = Pu(u, s);
        f.tag = RE, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hi(e), i = _a(), u = Wo(a), s = Pu(i, u);
        s.tag = Ih, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = Ho(a, s, u);
        f !== null && (cr(f, a, u, i), Gh(f, a, u)), Cd(a, u);
      }
    };
    function lC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & un) {
            Vn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Vn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", yt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_n(a, i) || !_n(u, s) : !0;
    }
    function ux(e, t, a) {
      var i = e.stateNode;
      {
        var u = yt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !oS.has(t) && (oS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !aS.has(t) && (aS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || xt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function uC(e, t) {
      t.updater = fS, e.stateNode = t, bc(t, e), t._reactInternalInstance = tS;
    }
    function oC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !sS.has(t)) {
          sS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        u = yf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? gf(e, u) : oi;
      }
      var g = new t(a, s);
      if (e.mode & un) {
        Vn(!0);
        try {
          g = new t(a, s);
        } finally {
          Vn(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      uC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var _ = yt(t) || "Component";
          rS.has(_) || (rS.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var le = yt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            iS.has(le) || (iS.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Ue, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && K0(e, u, s), g;
    }
    function ox(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", We(e) || "Component"), fS.enqueueReplaceState(t, t.state, null));
    }
    function sC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = We(e) || "Component";
          nS.has(s) || (nS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        fS.enqueueReplaceState(t, t.state, null);
      }
    }
    function dS(e, t, a, i) {
      ux(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Cg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = yf(e, t, !0);
        u.context = gf(e, f);
      }
      {
        if (u.state === a) {
          var p = yt(t) || "Component";
          uS.has(p) || (uS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & un && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (cS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ox(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Te;
        y |= Ua, (e.mode & qr) !== re && (y |= Aa), e.flags |= y;
      }
    }
    function sx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = yf(e, t, !0);
        v = gf(e, y);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && sC(e, u, a, v), _E();
      var _ = e.memoizedState, z = u.state = _;
      if (qh(e, a, u, i), z = e.memoizedState, s === a && _ === z && !Oh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var A = Te;
          A |= Ua, (e.mode & qr) !== re && (A |= Aa), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (cS(e, t, g, a), z = e.memoizedState);
      var F = Xh() || lC(e, t, s, a, _, z, v);
      if (F) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Te;
          le |= Ua, (e.mode & qr) !== re && (le |= Aa), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = Te;
          Ue |= Ua, (e.mode & qr) !== re && (Ue |= Aa), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, F;
    }
    function cx(e, t, a, i, u) {
      var s = t.stateNode;
      TE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, w = oi;
      if (typeof g == "object" && g !== null)
        w = qn(g);
      else {
        var _ = yf(t, a, !0);
        w = gf(t, _);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && sC(t, s, i, w), _E();
      var F = t.memoizedState, le = s.state = F;
      if (qh(t, i, s, u), le = t.memoizedState, f === v && F === le && !Oh() && !Xh() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= zn), !1;
      typeof z == "function" && (cS(t, a, z, i), le = t.memoizedState);
      var Ue = Xh() || lC(t, a, p, i, F, le, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Ue ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, w)), typeof s.componentDidUpdate == "function" && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= zn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= zn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = w, Ue;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gu(t),
        digest: null
      };
    }
    function pS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function fx(e, t) {
      return !0;
    }
    function vS(e, t) {
      try {
        var a = fx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? We(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = We(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var w = v + `
` + f + `

` + ("" + y);
        console.error(w);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var dx = typeof WeakMap == "function" ? WeakMap : Map;
    function cC(e, t, a) {
      var i = Pu(en, a);
      i.tag = Sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        ab(u), vS(e, t);
      }, i;
    }
    function hS(e, t, a) {
      var i = Pu(en, a);
      i.tag = Sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          C1(e), vS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        C1(e), vS(e, t), typeof u != "function" && nb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Kr(e.lanes, xe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", We(e) || "Unknown"));
      }), i;
    }
    function fC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new dx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ib.bind(null, e, t, a);
        ha && Wp(e, a), t.then(s, s);
      }
    }
    function px(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function vx(e, t) {
      var a = e.tag;
      if ((e.mode & Me) === re && (a === ke || a === Ve || a === Qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dC(e) {
      var t = e;
      do {
        if (t.tag === Re && G_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pC(e, t, a, i, u) {
      if ((e.mode & Me) === re) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= qe, a.flags |= Dc, a.flags &= ~(Mv | Ol), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = gn;
            else {
              var f = Pu(en, xe);
              f.tag = Ih, Ho(a, f, xe);
            }
          }
          a.lanes = nt(a.lanes, xe);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function hx(e, t, a, i, u) {
      if (a.flags |= Ol, ha && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        vx(a), Or() && a.mode & Me && aE();
        var f = dC(t);
        if (f !== null) {
          f.flags &= ~Rr, pC(f, t, a, e, u), f.mode & Me && fC(e, s, u), px(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            fC(e, s, u), GS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Or() && a.mode & Me) {
        aE();
        var v = dC(t);
        if (v !== null) {
          (v.flags & er) === ze && (v.flags |= Rr), pC(v, t, a, e, u), ug(sc(i, a));
          return;
        }
      }
      i = sc(i, a), Gw(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= er;
            var w = Ro(u);
            y.lanes = nt(y.lanes, w);
            var _ = cC(y, g, w);
            Rg(y, _);
            return;
          }
          case ue:
            var z = i, A = y.type, F = y.stateNode;
            if ((y.flags & qe) === ze && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !d1(F))) {
              y.flags |= er;
              var le = Ro(u);
              y.lanes = nt(y.lanes, le);
              var Ue = hS(y, z, le);
              Rg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function mx() {
      return null;
    }
    var Lp = me.ReactCurrentOwner, cl = !1, mS, Mp, yS, gS, SS, cc, ES, Em, Np;
    mS = {}, Mp = {}, yS = {}, gS = {}, SS = {}, cc = !1, ES = {}, Em = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = mE(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function yx(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function vC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          yt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      _f(t, u), ma(t);
      {
        if (Lp.current = t, Zn(!0), v = Of(e, t, f, i, p, u), y = Lf(), t.mode & un) {
          Vn(!0);
          try {
            v = Of(e, t, f, i, p, u), y = Lf();
          } finally {
            Vn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (OE(e, t, u), Vu(e, t, u)) : (Or() && y && tg(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Rb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Hf(s), t.tag = Qe, t.type = f, TS(t, s), mC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            yt(s)
          ), a.defaultProps !== void 0) {
            var v = yt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = i0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, w = g.propTypes;
        w && al(
          w,
          i,
          // Resolved props
          "prop",
          yt(g)
        );
      }
      var _ = e.child, z = kS(e, u);
      if (!z) {
        var A = _.memoizedProps, F = a.compare;
        if (F = F !== null ? F : _n, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var le = hc(_, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function mC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ae) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && al(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            yt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (_n(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = g, kS(e, u))
            (e.flags & Dc) !== ze && (cl = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return CS(e, t, a, i, u);
    }
    function yC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Me) === re) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Nm(t, a);
        } else if (Kr(a, ga)) {
          var w = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var _ = s !== null ? s.baseLanes : a;
          Nm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = nt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ga;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Nm(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = nt(s.baseLanes, a), t.memoizedState = null) : z = a, Nm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function gx(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Sx(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Ex(e, t, a) {
      {
        t.flags |= Te;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function gC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= da, t.flags |= yi);
    }
    function CS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          yt(a)
        );
      }
      var f;
      {
        var p = yf(t, a, !0);
        f = gf(t, p);
      }
      var v, y;
      _f(t, u), ma(t);
      {
        if (Lp.current = t, Zn(!0), v = Of(e, t, a, i, f, u), y = Lf(), t.mode & un) {
          Vn(!0);
          try {
            v = Of(e, t, a, i, f, u), y = Lf();
          } finally {
            Vn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (OE(e, t, u), Vu(e, t, u)) : (Or() && y && tg(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function SC(e, t, a, i, u) {
      {
        switch (jb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= qe, t.flags |= er;
            var y = new Error("Simulated error coming from DevTools"), g = Ro(u);
            t.lanes = nt(t.lanes, g);
            var w = hS(t, sc(y, t), g);
            Rg(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && al(
            _,
            i,
            // Resolved props
            "prop",
            yt(a)
          );
        }
      }
      var z;
      Gl(a) ? (z = !0, Mh(t)) : z = !1, _f(t, u);
      var A = t.stateNode, F;
      A === null ? (Rm(e, t), oC(t, a, i), dS(t, a, i, u), F = !0) : e === null ? F = sx(t, a, i, u) : F = cx(e, t, a, i, u);
      var le = RS(e, t, a, F, z, u);
      {
        var Ue = t.stateNode;
        F && Ue.props !== i && (cc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", We(t) || "a component"), cc = !0);
      }
      return le;
    }
    function RS(e, t, a, i, u, s) {
      gC(e, t);
      var f = (t.flags & qe) !== ze;
      if (!i && !f)
        return u && eE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
      else {
        ma(t);
        {
          if (Zn(!0), v = p.render(), t.mode & un) {
            Vn(!0);
            try {
              p.render();
            } finally {
              Vn(!1);
            }
          }
          Zn(!1);
        }
        ya();
      }
      return t.flags |= ni, e !== null && f ? yx(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && eE(t, a, !0), t.child;
    }
    function EC(e) {
      var t = e.stateNode;
      t.pendingContext ? J0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && J0(e, t.context, !1), Tg(e, t.containerInfo);
    }
    function Cx(e, t, a) {
      if (EC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      TE(e, t), qh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CC(e, t, p, a, g);
        } else if (p !== s) {
          var w = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CC(e, t, p, a, w);
        } else {
          __(t);
          var _ = mE(t, null, p, a);
          t.child = _;
          for (var z = _; z; )
            z.flags = z.flags & ~Xt | mi, z = z.sibling;
        }
      } else {
        if (Cf(), p === s)
          return Vu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function CC(e, t, a, i, u) {
      return Cf(), ug(u), t.flags |= Rr, Ra(e, t, a, i), t.child;
    }
    function Rx(e, t, a) {
      bE(t), e === null && lg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Vy(i, u);
      return p ? f = null : s !== null && Vy(i, s) && (t.flags |= za), gC(e, t), Ra(e, t, f, a), t.child;
    }
    function Tx(e, t) {
      return e === null && lg(t), null;
    }
    function _x(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Tb(v), g = sl(v, u), w;
      switch (y) {
        case ke:
          return TS(t, v), t.type = v = Hf(v), w = CS(null, t, v, g, i), w;
        case ue:
          return t.type = v = ZS(v), w = SC(null, t, v, g, i), w;
        case Ve:
          return t.type = v = e0(v), w = vC(null, t, v, g, i), w;
        case ft: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && al(
              _,
              g,
              // Resolved for outer only
              "prop",
              yt(v)
            );
          }
          return w = hC(
            null,
            t,
            v,
            sl(v.type, g),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ae && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function xx(e, t, a, i, u) {
      Rm(e, t), t.tag = ue;
      var s;
      return Gl(a) ? (s = !0, Mh(t)) : s = !1, _f(t, u), oC(t, a, i), dS(t, a, i, u), RS(null, t, a, !0, s, u);
    }
    function wx(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = yf(t, a, !1);
        s = gf(t, f);
      }
      _f(t, i);
      var p, v;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = yt(a) || "Unknown";
          mS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), mS[y] = !0);
        }
        t.mode & un && ll.recordLegacyContextWarning(t, null), Zn(!0), Lp.current = t, p = Of(null, t, a, u, s, i), v = Lf(), Zn(!1);
      }
      if (ya(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = yt(a) || "Unknown";
        Mp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Mp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = yt(a) || "Unknown";
          Mp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Mp[w] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Gl(a) ? (_ = !0, Mh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Cg(t), uC(t, p), dS(t, a, u, i), RS(null, t, a, !0, _, i);
      } else {
        if (t.tag = ke, t.mode & un) {
          Vn(!0);
          try {
            p = Of(null, t, a, u, s, i), v = Lf();
          } finally {
            Vn(!1);
          }
        }
        return Or() && v && tg(t), Ra(null, t, p, i), TS(t, a), t.child;
      }
    }
    function TS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = La();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), SS[u] || (SS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = yt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = yt(t) || "Unknown";
          gS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), gS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = yt(t) || "Unknown";
          yS[v] || (S("%s: Function components do not support contextType.", v), yS[v] = !0);
        }
      }
    }
    var _S = {
      dehydrated: null,
      treeContext: null,
      retryLane: Kt
    };
    function xS(e) {
      return {
        baseLanes: e,
        cachePool: mx(),
        transitions: null
      };
    }
    function bx(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Dx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return wg(e, Rp);
    }
    function kx(e, t) {
      return To(e.childLanes, t);
    }
    function RC(e, t, a) {
      var i = t.pendingProps;
      Fb(t) && (t.flags |= qe);
      var u = ul.current, s = !1, f = (t.flags & qe) !== ze;
      if (f || Dx(u, e) ? (s = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (u = W_(u, kE)), u = wf(u), Vo(t, u), e === null) {
        lg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return zx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = Ox(t, y, g, a), _ = t.child;
          return _.memoizedState = xS(a), t.memoizedState = _S, w;
        } else
          return wS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return Ux(e, t, f, i, A, z, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Ue = Mx(e, t, le, F, a), be = t.child, Tt = e.child.memoizedState;
          return be.memoizedState = Tt === null ? xS(a) : bx(Tt, a), be.childLanes = kx(e, a), t.memoizedState = _S, Ue;
        } else {
          var vt = i.children, O = Lx(e, t, vt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = bS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Ox(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Me) === re && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Ge && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = qo(a, u, i, null)) : (p = bS(f, u), v = qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function bS(e, t, a) {
      return T1(e, t, Y, null);
    }
    function TC(e, t) {
      return hc(e, t);
    }
    function Lx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = TC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Me) === re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Lt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Mx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Me) === re && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Ge && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = TC(f, v), y.subtreeFlags = f.subtreeFlags & tr;
      var w;
      return p !== null ? w = hc(p, i) : (w = qo(i, s, u, null), w.flags |= Xt), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function Cm(e, t, a, i) {
      i !== null && ug(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = wS(t, s);
      return f.flags |= Xt, t.memoizedState = null, f;
    }
    function Nx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = bS(f, s), v = qo(i, s, u, null);
      return v.flags |= Xt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Me) !== re && Rf(t, e.child, null, u), v;
    }
    function zx(e, t, a) {
      return (e.mode & Me) === re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = xe) : Iy(t) ? e.lanes = Zi : e.lanes = ga, null;
    }
    function Ux(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = pS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= qe, null;
          var H = i.children, L = i.fallback, X = Nx(e, t, H, L, f), ve = t.child;
          return ve.memoizedState = xS(f), t.memoizedState = _S, X;
        }
      else {
        if (R_(), (t.mode & Me) === re)
          return Cm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Iy(u)) {
          var p, v, y;
          {
            var g = HT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = pS(w, p, y);
          return Cm(e, t, f, _);
        }
        var z = Kr(f, e.childLanes);
        if (cl || z) {
          var A = Mm();
          if (A !== null) {
            var F = Nd(A, f);
            if (F !== Kt && F !== s.retryLane) {
              s.retryLane = F;
              var le = en;
              Ba(e, F), cr(A, e, F, le);
            }
          }
          GS();
          var Ue = pS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, Ue);
        } else if (Q0(u)) {
          t.flags |= qe, t.child = e.child;
          var be = lb.bind(null, e);
          return PT(u, be), null;
        } else {
          x_(t, u, s.treeContext);
          var Tt = i.children, vt = wS(t, Tt);
          return vt.flags |= mi, vt;
        }
      }
    }
    function _C(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), yg(e.return, t, a);
    }
    function Ax(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && _C(i, a, e);
        } else if (i.tag === St)
          _C(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function jx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Fx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ES[e])
        if (ES[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Hx(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = xt(e), i = !a && typeof Pr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Px(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (xt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xC(e[a], a))
              return;
        } else {
          var i = Pr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!xC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function DS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function wC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Fx(u), Hx(s, u), Px(f, u), Ra(e, t, f, a);
      var p = ul.current, v = wg(p, Rp);
      if (v)
        p = bg(p, Rp), t.flags |= qe;
      else {
        var y = e !== null && (e.flags & qe) !== ze;
        y && Ax(t, t.child, a), p = wf(p);
      }
      if (Vo(t, p), (t.mode & Me) === re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = jx(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), DS(
              t,
              !1,
              // isBackwards
              w,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && Zh(A) === null) {
                t.child = z;
                break;
              }
              var F = z.sibling;
              z.sibling = _, _ = z, z = F;
            }
            DS(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            DS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Vx(e, t, a) {
      Tg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var bC = !1;
    function Bx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bC || (bC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (SE(t, u, p), f !== null) {
        var y = f.value;
        if (we(y, p)) {
          if (f.children === s.children && !Oh())
            return Vu(e, t, a);
        } else
          F_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var DC = !1;
    function $x(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DC || (DC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), _f(t, a);
      var f = qn(i);
      ma(t);
      var p;
      return Lp.current = t, Zn(!0), p = s(f), Zn(!1), ya(), t.flags |= ni, Ra(e, t, p, a), t.child;
    }
    function zp() {
      cl = !0;
    }
    function Rm(e, t) {
      (t.mode & Me) === re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Xt);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), Qp(t.lanes), Kr(a, t.childLanes) ? (A_(e, t), t.child) : null;
    }
    function Yx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Lt) : s.push(e), a.flags |= Xt, a;
      }
    }
    function kS(e, t) {
      var a = e.lanes;
      return !!Kr(a, t);
    }
    function Ix(e, t, a) {
      switch (t.tag) {
        case ee:
          EC(t), t.stateNode, Cf();
          break;
        case oe:
          bE(t);
          break;
        case ue: {
          var i = t.type;
          Gl(i) && Mh(t);
          break;
        }
        case je:
          Tg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          SE(t, s, u);
          break;
        }
        case kt:
          {
            var f = Kr(a, t.childLanes);
            f && (t.flags |= Te);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Vo(t, wf(ul.current)), t.flags |= qe, null;
            var y = t.child, g = y.childLanes;
            if (Kr(a, g))
              return RC(e, t, a);
            Vo(t, wf(ul.current));
            var w = Vu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Vo(t, wf(ul.current));
          break;
        }
        case St: {
          var _ = (e.flags & qe) !== ze, z = Kr(a, t.childLanes);
          if (_) {
            if (z)
              return wC(e, t, a);
            t.flags |= qe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Vo(t, ul.current), z)
            break;
          return null;
        }
        case Be:
        case rt:
          return t.lanes = Y, yC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Yx(e, t, i0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = kS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & qe) === ze)
            return cl = !1, Ix(e, t, a);
          (e.flags & Dc) !== ze ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Or() && m_(t)) {
        var f = t.index, p = y_();
        rE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Pe:
          return wx(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return _x(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : sl(y, g);
          return CS(e, t, y, w, a);
        }
        case ue: {
          var _ = t.type, z = t.pendingProps, A = t.elementType === _ ? z : sl(_, z);
          return SC(e, t, _, A, a);
        }
        case ee:
          return Cx(e, t, a);
        case oe:
          return Rx(e, t, a);
        case Ce:
          return Tx(e, t);
        case Re:
          return RC(e, t, a);
        case je:
          return Vx(e, t, a);
        case Ve: {
          var F = t.type, le = t.pendingProps, Ue = t.elementType === F ? le : sl(F, le);
          return vC(e, t, F, Ue, a);
        }
        case pt:
          return gx(e, t, a);
        case Fn:
          return Sx(e, t, a);
        case kt:
          return Ex(e, t, a);
        case it:
          return Bx(e, t, a);
        case sn:
          return $x(e, t, a);
        case ft: {
          var be = t.type, Tt = t.pendingProps, vt = sl(be, Tt);
          if (t.type !== t.elementType) {
            var O = be.propTypes;
            O && al(
              O,
              vt,
              // Resolved for outer only
              "prop",
              yt(be)
            );
          }
          return vt = sl(be.type, vt), hC(e, t, be, vt, a);
        }
        case Qe:
          return mC(e, t, t.type, t.pendingProps, a);
        case gn: {
          var H = t.type, L = t.pendingProps, X = t.elementType === H ? L : sl(H, L);
          return xx(e, t, H, X, a);
        }
        case St:
          return wC(e, t, a);
        case nn:
          break;
        case Be:
          return yC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= Te;
    }
    function OC(e) {
      e.flags |= da, e.flags |= yi;
    }
    var LC, OS, MC, NC;
    LC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Ce)
          pT(e, u.stateNode);
        else if (u.tag !== je) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, OS = function(e, t) {
    }, MC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = _g(), v = hT(f, a, s, i, u, p);
        t.updateQueue = v, v && Mf(t);
      }
    }, NC = function(e, t, a, i) {
      a !== i && Mf(t);
    };
    function Up(e, t) {
      if (!Or())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = ze;
      if (t) {
        if ((e.mode & Ge) !== re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & tr, i |= y.flags & tr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ge) !== re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Qx(e, t, a) {
      if (O_() && (t.mode & Me) !== re && (t.flags & qe) === ze)
        return cE(t), Cf(), t.flags |= Rr | Ol | er, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (D_(t), Mr(t), (t.mode & Ge) !== re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & qe) === ze && (t.memoizedState = null), t.flags |= Te, Mr(t), (t.mode & Ge) !== re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fE(), !0;
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      switch (ng(t), t.tag) {
        case Pe:
        case xn:
        case Qe:
        case ke:
        case Ve:
        case pt:
        case Fn:
        case kt:
        case sn:
        case ft:
          return Mr(t), null;
        case ue: {
          var u = t.type;
          return Gl(u) && Lh(t), Mr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (xf(t), Jy(t), kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              Mf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== ze) && (t.flags |= zn, fE());
            }
          }
          return OS(e, t), Mr(t), null;
        }
        case oe: {
          xg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            MC(e, t, y, i, v), e.ref !== t.ref && OC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var g = _g(), w = jh(t);
            if (w)
              w_(t, v, g) && Mf(t);
            else {
              var _ = dT(y, i, v, g, t);
              LC(_, t, !1, !1), t.stateNode = _, vT(_, y, i, v) && Mf(t);
            }
            t.ref !== null && OC(t);
          }
          return Mr(t), null;
        }
        case Ce: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            NC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), le = _g(), Ue = jh(t);
            Ue ? b_(t) && Mf(t) : t.stateNode = mT(z, F, le, t);
          }
          return Mr(t), null;
        }
        case Re: {
          bf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Qx(e, t, be);
            if (!Tt)
              return t.flags & er ? t : null;
          }
          if ((t.flags & qe) !== ze)
            return t.lanes = a, (t.mode & Ge) !== re && eS(t), t;
          var vt = be !== null, O = e !== null && e.memoizedState !== null;
          if (vt !== O && vt) {
            var H = t.child;
            if (H.flags |= kl, (t.mode & Me) !== re) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              L || wg(ul.current, kE) ? Ww() : GS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= Te), Mr(t), (t.mode & Ge) !== re && vt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case je:
          return xf(t), OS(e, t), e === null && s_(t.stateNode.containerInfo), Mr(t), null;
        case it:
          var se = t.type._context;
          return mg(se, t), Mr(t), null;
        case gn: {
          var Ie = t.type;
          return Gl(Ie) && Lh(t), Mr(t), null;
        }
        case St: {
          bf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Mr(t), null;
          var Wt = (t.flags & qe) !== ze, Mt = Je.rendering;
          if (Mt === null)
            if (Wt)
              Up(Je, !1);
            else {
              var $n = qw() && (e === null || (e.flags & qe) === ze);
              if (!$n)
                for (var Nt = t.child; Nt !== null; ) {
                  var jn = Zh(Nt);
                  if (jn !== null) {
                    Wt = !0, t.flags |= qe, Up(Je, !1);
                    var ta = jn.updateQueue;
                    return ta !== null && (t.updateQueue = ta, t.flags |= Te), t.subtreeFlags = ze, j_(t, a), Vo(t, bg(ul.current, Rp)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              Je.tail !== null && Un() > t1() && (t.flags |= qe, Wt = !0, Up(Je, !1), t.lanes = Pv);
            }
          else {
            if (!Wt) {
              var jr = Zh(Mt);
              if (jr !== null) {
                t.flags |= qe, Wt = !0;
                var ci = jr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Te), Up(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !Mt.alternate && !Or())
                  return Mr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Un() * 2 - Je.renderingStartTime > t1() && a !== ga && (t.flags |= qe, Wt = !0, Up(Je, !1), t.lanes = Pv);
            }
            if (Je.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var xa = Je.last;
              xa !== null ? xa.sibling = Mt : t.child = Mt, Je.last = Mt;
            }
          }
          if (Je.tail !== null) {
            var wa = Je.tail;
            Je.rendering = wa, Je.tail = wa.sibling, Je.renderingStartTime = Un(), wa.sibling = null;
            var na = ul.current;
            return Wt ? na = bg(na, Rp) : na = wf(na), Vo(t, na), wa;
          }
          return Mr(t), null;
        }
        case nn:
          break;
        case Be:
        case rt: {
          WS(t);
          var Qu = t.memoizedState, Pf = Qu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, nu = Kp !== null;
            nu !== Pf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= kl);
          }
          return !Pf || (t.mode & Me) === re ? Mr(t) : Kr(tu, ga) && (Mr(t), t.subtreeFlags & (Xt | Te) && (t.flags |= kl)), null;
        }
        case _t:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wx(e, t, a) {
      switch (ng(t), t.tag) {
        case ue: {
          var i = t.type;
          Gl(i) && Lh(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | qe, (t.mode & Ge) !== re && eS(t), t) : null;
        }
        case ee: {
          t.stateNode, xf(t), Jy(t), kg();
          var s = t.flags;
          return (s & er) !== ze && (s & qe) === ze ? (t.flags = s & ~er | qe, t) : null;
        }
        case oe:
          return xg(t), null;
        case Re: {
          bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | qe, (t.mode & Ge) !== re && eS(t), t) : null;
        }
        case St:
          return bf(t), null;
        case je:
          return xf(t), null;
        case it:
          var v = t.type._context;
          return mg(v, t), null;
        case Be:
        case rt:
          return WS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (ng(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case ee: {
          t.stateNode, xf(t), Jy(t), kg();
          break;
        }
        case oe: {
          xg(t);
          break;
        }
        case je:
          xf(t);
          break;
        case Re:
          bf(t);
          break;
        case St:
          bf(t);
          break;
        case it:
          var u = t.type._context;
          mg(u, t);
          break;
        case Be:
        case rt:
          WS(t);
          break;
      }
    }
    var AC = null;
    AC = /* @__PURE__ */ new Set();
    var Tm = !1, Nr = !1, Gx = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Nf = null, zf = null;
    function qx(e) {
      ti(null, function() {
        throw e;
      }), Gi();
    }
    var Xx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ge)
        try {
          Zl(), t.componentWillUnmount();
        } finally {
          Jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function jC(e, t) {
      try {
        Yo(ar, e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function LS(e, t, a) {
      try {
        Xx(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function Kx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function FC(e, t) {
      try {
        PC(e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function Uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && ct && e.mode & Ge)
              try {
                Zl(), i = a(null);
              } finally {
                Jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            on(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        on(e, t, i);
      }
    }
    var HC = !1;
    function Jx(e, t) {
      cT(e.containerInfo), ge = t, Zx();
      var a = HC;
      return HC = !1, a;
    }
    function Zx() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & Qr) !== ze && t !== null ? (t.return = e, ge = t) : ew();
      }
    }
    function ew() {
      for (; ge !== null; ) {
        var e = ge;
        hn(e);
        try {
          tw(e);
        } catch (a) {
          on(e, e.return, a);
        }
        rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function tw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & zn) !== ze) {
        switch (hn(e), e.tag) {
          case ke:
          case Ve:
          case Qe:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = AC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", We(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              UT(v.containerInfo);
            }
            break;
          }
          case oe:
          case Ce:
          case je:
          case gn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function fl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Lr) !== $a ? Uc(t) : (e & ar) !== $a && so(t), (e & ql) !== $a && Gp(!0), _m(t, a, p), (e & ql) !== $a && Gp(!1), (e & Lr) !== $a ? Fv() : (e & ar) !== $a && co());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Yo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Lr) !== $a ? zc(t) : (e & ar) !== $a && _s(t);
            var f = s.create;
            (e & ql) !== $a && Gp(!0), s.destroy = f(), (e & ql) !== $a && Gp(!1), (e & Lr) !== $a ? jv() : (e & ar) !== $a && gi();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ar) !== ze ? v = "useLayoutEffect" : (s.tag & ql) !== ze ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function nw(e, t) {
      if ((t.flags & Te) !== ze)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tC(), p = t.alternate === null ? "mount" : "update";
            eC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case kt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function rw(e, t, a, i) {
      if ((a.flags & ri) !== ze)
        switch (a.tag) {
          case ke:
          case Ve:
          case Qe: {
            if (!Nr)
              if (a.mode & Ge)
                try {
                  Zl(), Yo(ar | rr, a);
                } finally {
                  Jl(a);
                }
              else
                Yo(ar | rr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & Te && !Nr)
              if (t === null)
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Ge)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), a.mode & Ge)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", We(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", We(a) || "instance")), xE(a, p, u));
            break;
          }
          case ee: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              xE(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & Te) {
              var w = a.type, _ = a.memoizedProps;
              CT(g, w, _);
            }
            break;
          }
          case Ce:
            break;
          case je:
            break;
          case kt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, le = a.stateNode.effectDuration, Ue = tC(), be = t === null ? "mount" : "update";
              eC() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, le, Ue), eb(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case ee:
                      var vt = Tt.stateNode;
                      vt.effectDuration += le;
                      break e;
                    case kt:
                      var O = Tt.stateNode;
                      O.effectDuration += le;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Re: {
            fw(e, a);
            break;
          }
          case St:
          case gn:
          case nn:
          case Be:
          case rt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Nr || a.flags & da && PC(a);
    }
    function aw(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          if (e.mode & Ge)
            try {
              Zl(), jC(e, e.return);
            } finally {
              Jl(e);
            }
          else
            jC(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Kx(e, e.return, t), FC(e, e.return);
          break;
        }
        case oe: {
          FC(e, e.return);
          break;
        }
      }
    }
    function iw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? LT(u) : NT(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? MT(s) : zT(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === rt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ge)
            try {
              Zl(), u = t(i);
            } finally {
              Jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", We(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", We(e)), t.current = i;
      }
    }
    function lw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function VC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, VC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && d_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function uw(e) {
      for (var t = e.return; t !== null; ) {
        if (BC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BC(e) {
      return e.tag === oe || e.tag === ee || e.tag === je;
    }
    function $C(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || BC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Ce && t.tag !== Jt; ) {
          if (t.flags & Xt || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Xt))
          return t.stateNode;
      }
    }
    function ow(e) {
      var t = uw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & za && (I0(a), t.flags &= ~za);
          var i = $C(e);
          NS(e, i, a);
          break;
        }
        case ee:
        case je: {
          var u = t.stateNode.containerInfo, s = $C(e);
          MS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function MS(e, t, a) {
      var i = e.tag, u = i === oe || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? bT(a, s, t) : xT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          MS(f, t, a);
          for (var p = f.sibling; p !== null; )
            MS(p, t, a), p = p.sibling;
        }
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === oe || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? wT(a, s, t) : _T(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    var zr = null, dl = !1;
    function sw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              zr = i.stateNode, dl = !1;
              break e;
            }
            case ee: {
              zr = i.stateNode.containerInfo, dl = !0;
              break e;
            }
            case je: {
              zr = i.stateNode.containerInfo, dl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (zr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        YC(e, t, a), zr = null, dl = !1;
      }
      lw(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        YC(e, t, i), i = i.sibling;
    }
    function YC(e, t, a) {
      switch (hd(a), a.tag) {
        case oe:
          Nr || Uf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ce: {
          {
            var i = zr, u = dl;
            zr = null, Io(e, t, a), zr = i, dl = u, zr !== null && (dl ? kT(zr, a.stateNode) : DT(zr, a.stateNode));
          }
          return;
        }
        case Jt: {
          zr !== null && (dl ? OT(zr, a.stateNode) : Yy(zr, a.stateNode));
          return;
        }
        case je: {
          {
            var s = zr, f = dl;
            zr = a.stateNode.containerInfo, dl = !0, Io(e, t, a), zr = s, dl = f;
          }
          return;
        }
        case ke:
        case Ve:
        case ft:
        case Qe: {
          if (!Nr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, _ = w.destroy, z = w.tag;
                  _ !== void 0 && ((z & ql) !== $a ? _m(a, t, _) : (z & ar) !== $a && (so(a), a.mode & Ge ? (Zl(), _m(a, t, _), Jl(a)) : _m(a, t, _), co())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case ue: {
          if (!Nr) {
            Uf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && LS(a, t, A);
          }
          Io(e, t, a);
          return;
        }
        case nn: {
          Io(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & Me
          ) {
            var F = Nr;
            Nr = F || a.memoizedState !== null, Io(e, t, a), Nr = F;
          } else
            Io(e, t, a);
          break;
        }
        default: {
          Io(e, t, a);
          return;
        }
      }
    }
    function cw(e) {
      e.memoizedState;
    }
    function fw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && qT(s);
          }
        }
      }
    }
    function IC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Gx()), t.forEach(function(i) {
          var u = ub.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ha)
              if (Nf !== null && zf !== null)
                Wp(zf, Nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function dw(e, t, a) {
      Nf = a, zf = e, hn(t), QC(t, e), hn(t), Nf = null, zf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            sw(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = as();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          hn(p), QC(p, e), p = p.sibling;
      hn(f);
    }
    function QC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ke:
        case Ve:
        case ft:
        case Qe: {
          if (pl(t, e), eu(e), u & Te) {
            try {
              fl(ql | rr, e, e.return), Yo(ql | rr, e);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
            if (e.mode & Ge) {
              try {
                Zl(), fl(ar | rr, e, e.return);
              } catch (Ie) {
                on(e, e.return, Ie);
              }
              Jl(e);
            } else
              try {
                fl(ar | rr, e, e.return);
              } catch (Ie) {
                on(e, e.return, Ie);
              }
          }
          return;
        }
        case ue: {
          pl(t, e), eu(e), u & da && i !== null && Uf(i, i.return);
          return;
        }
        case oe: {
          pl(t, e), eu(e), u & da && i !== null && Uf(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                I0(s);
              } catch (Ie) {
                on(e, e.return, Ie);
              }
            }
            if (u & Te) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    RT(f, g, y, v, p, e);
                  } catch (Ie) {
                    on(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (pl(t, e), eu(e), u & Te) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, _ = e.memoizedProps, z = i !== null ? i.memoizedProps : _;
            try {
              TT(w, z, _);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
          }
          return;
        }
        case ee: {
          if (pl(t, e), eu(e), u & Te && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                GT(t.containerInfo);
              } catch (Ie) {
                on(e, e.return, Ie);
              }
          }
          return;
        }
        case je: {
          pl(t, e), eu(e);
          return;
        }
        case Re: {
          pl(t, e), eu(e);
          var F = e.child;
          if (F.flags & kl) {
            var le = F.stateNode, Ue = F.memoizedState, be = Ue !== null;
            if (le.isHidden = be, be) {
              var Tt = F.alternate !== null && F.alternate.memoizedState !== null;
              Tt || Qw();
            }
          }
          if (u & Te) {
            try {
              cw(e);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
            IC(e);
          }
          return;
        }
        case Be: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Me
          ) {
            var O = Nr;
            Nr = O || vt, pl(t, e), Nr = O;
          } else
            pl(t, e);
          if (eu(e), u & kl) {
            var H = e.stateNode, L = e.memoizedState, X = L !== null, ve = e;
            if (H.isHidden = X, X && !vt && (ve.mode & Me) !== re) {
              ge = ve;
              for (var se = ve.child; se !== null; )
                ge = se, vw(se), se = se.sibling;
            }
            iw(ve, X);
          }
          return;
        }
        case St: {
          pl(t, e), eu(e), u & Te && IC(e);
          return;
        }
        case nn:
          return;
        default: {
          pl(t, e), eu(e);
          return;
        }
      }
    }
    function eu(e) {
      var t = e.flags;
      if (t & Xt) {
        try {
          ow(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~Xt;
      }
      t & mi && (e.flags &= ~mi);
    }
    function pw(e, t, a) {
      Nf = a, zf = t, ge = e, WC(e, t, a), Nf = null, zf = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & Me) !== re; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            zS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Nr, w = Tm, _ = Nr;
            Tm = p, Nr = g, Nr && !_ && (ge = u, hw(u));
            for (var z = s; z !== null; )
              ge = z, WC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            ge = u, Tm = w, Nr = _, zS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ri) !== ze && s !== null ? (s.return = u, ge = s) : zS(e, t, a);
      }
    }
    function zS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & ri) !== ze) {
          var u = i.alternate;
          hn(i);
          try {
            rw(t, u, i, a);
          } catch (f) {
            on(i, i.return, f);
          }
          rn();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function vw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case ke:
          case Ve:
          case ft:
          case Qe: {
            if (t.mode & Ge)
              try {
                Zl(), fl(ar, t, t.return);
              } finally {
                Jl(t);
              }
            else
              fl(ar, t, t.return);
            break;
          }
          case ue: {
            Uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && LS(t, t.return, i);
            break;
          }
          case oe: {
            Uf(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              GC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : GC(e);
      }
    }
    function GC(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function hw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            qC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : qC(e);
      }
    }
    function qC(e) {
      for (; ge !== null; ) {
        var t = ge;
        hn(t);
        try {
          aw(t);
        } catch (i) {
          on(t, t.return, i);
        }
        if (rn(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function mw(e, t, a, i) {
      ge = t, yw(t, e, a, i);
    }
    function yw(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gr) !== ze && s !== null ? (s.return = u, ge = s) : gw(e, t, a, i);
      }
    }
    function gw(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Ir) !== ze) {
          hn(u);
          try {
            Sw(t, u, a, i);
          } catch (f) {
            on(u, u.return, f);
          }
          rn();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function Sw(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case Ve:
        case Qe: {
          if (t.mode & Ge) {
            Zg();
            try {
              Yo(Lr | rr, t);
            } finally {
              Jg(t);
            }
          } else
            Yo(Lr | rr, t);
          break;
        }
      }
    }
    function Ew(e) {
      ge = e, Cw();
    }
    function Cw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Lt) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, _w(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Gr) !== ze && t !== null ? (t.return = e, ge = t) : Rw();
      }
    }
    function Rw() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Ir) !== ze && (hn(e), Tw(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Tw(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          e.mode & Ge ? (Zg(), fl(Lr | rr, e, e.return), Jg(e)) : fl(Lr | rr, e, e.return);
          break;
        }
      }
    }
    function _w(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        hn(a), ww(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : xw(e);
      }
    }
    function xw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (VC(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function ww(e, t) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          e.mode & Ge ? (Zg(), fl(Lr, e, t), Jg(e)) : fl(Lr, e, t);
          break;
        }
      }
    }
    function bw(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          try {
            Yo(ar | rr, e);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
      }
    }
    function Dw(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          try {
            Yo(Lr | rr, e);
          } catch (t) {
            on(e, e.return, t);
          }
          break;
        }
      }
    }
    function kw(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe: {
          try {
            fl(ar | rr, e, e.return);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && LS(e, e.return, t);
          break;
        }
      }
    }
    function Ow(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Qe:
          try {
            fl(Lr | rr, e, e.return);
          } catch (t) {
            on(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var Lw = [];
    function Mw() {
      Lw.forEach(function(e) {
        return e();
      });
    }
    var Nw = me.ReactCurrentActQueue;
    function zw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function XC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Nw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Uw = Math.ceil, US = me.ReactCurrentDispatcher, AS = me.ReactCurrentOwner, Ur = me.ReactCurrentBatchConfig, vl = me.ReactCurrentActQueue, ur = (
      /*             */
      0
    ), KC = (
      /*               */
      1
    ), Ar = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Bu = 0, jp = 1, fc = 2, xm = 3, Fp = 4, JC = 5, jS = 6, Rt = ur, Ta = null, On = null, or = Y, tu = Y, FS = Uo(Y), sr = Bu, Hp = null, wm = Y, Pp = Y, bm = Y, Vp = null, Ya = null, HS = 0, ZC = 500, e1 = 1 / 0, Aw = 500, $u = null;
    function Bp() {
      e1 = Un() + Aw;
    }
    function t1() {
      return e1;
    }
    var Dm = !1, PS = null, Af = null, dc = !1, Qo = null, $p = Y, VS = [], BS = null, jw = 50, Yp = 0, $S = null, YS = !1, km = !1, Fw = 50, jf = 0, Om = null, Ip = en, Lm = Y, n1 = !1;
    function Mm() {
      return Ta;
    }
    function _a() {
      return (Rt & (Ar | Li)) !== ur ? Un() : (Ip !== en || (Ip = Un()), Ip);
    }
    function Wo(e) {
      var t = e.mode;
      if ((t & Me) === re)
        return xe;
      if ((Rt & Ar) !== ur && or !== Y)
        return Ro(or);
      var a = N_() !== M_;
      if (a) {
        if (Ur.transition !== null) {
          var i = Ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === Kt && (Lm = Tr()), Lm;
      }
      var u = xr();
      if (u !== Kt)
        return u;
      var s = yT();
      return s;
    }
    function Hw(e) {
      var t = e.mode;
      return (t & Me) === re ? xe : _r();
    }
    function cr(e, t, a, i) {
      sb(), n1 && S("useInsertionEffect must not schedule updates."), YS && (km = !0), _o(e, a, i), (Rt & Ar) !== Y && e === Ta ? db(t) : (ha && zd(e, t, a), pb(t), e === Ta && ((Rt & Ar) === ur && (Pp = nt(Pp, a)), sr === Fp && Go(e, or)), Ia(e, i), a === xe && Rt === ur && (t.mode & Me) === re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Bp(), nE()));
    }
    function Pw(e, t, a) {
      var i = e.current;
      i.lanes = t, _o(e, t, a), Ia(e, a);
    }
    function Vw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Ar) !== ur
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = Os(e, e === Ta ? or : Y);
      if (i === Y) {
        a !== null && g1(a), e.callbackNode = null, e.callbackPriority = Kt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== KS)) {
        a == null && s !== xe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && g1(a);
      var f;
      if (u === xe)
        e.tag === Ao ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), h_(i1.bind(null, e))) : tE(i1.bind(null, e)), vl.current !== null ? vl.current.push(jo) : ST(function() {
          (Rt & (Ar | Li)) === ur && jo();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case Sa:
            p = Nl;
            break;
          case Ri:
            p = uo;
            break;
          case li:
            p = zl;
            break;
          case As:
            p = Ul;
            break;
          default:
            p = zl;
            break;
        }
        f = JS(p, r1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function r1(e, t) {
      if (ix(), Ip = en, Lm = Y, (Rt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Os(e, e === Ta ? or : Y);
      if (u === Y)
        return null;
      var s = !Ms(e, u) && !Iv(e, u) && !t, f = s ? Kw(e, u) : zm(e, u);
      if (f !== Bu) {
        if (f === fc) {
          var p = Ls(e);
          p !== Y && (u = p, f = IS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw pc(e, Y), Go(e, u), Ia(e, Un()), v;
        }
        if (f === jS)
          Go(e, u);
        else {
          var y = !Ms(e, u), g = e.current.alternate;
          if (y && !$w(g)) {
            if (f = zm(e, u), f === fc) {
              var w = Ls(e);
              w !== Y && (u = w, f = IS(e, w));
            }
            if (f === jp) {
              var _ = Hp;
              throw pc(e, Y), Go(e, u), Ia(e, Un()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Bw(e, f, u);
        }
      }
      return Ia(e, Un()), e.callbackNode === a ? r1.bind(null, e) : null;
    }
    function IS(e, t) {
      var a = Vp;
      if (pe(e)) {
        var i = pc(e, t);
        i.flags |= Rr, o_(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== fc) {
        var s = Ya;
        Ya = a, s !== null && a1(s);
      }
      return u;
    }
    function a1(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Bw(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case fc: {
          vc(e, Ya, $u);
          break;
        }
        case xm: {
          if (Go(e, a), kd(a) && // do not delay if we're inside an act() scope
          !S1()) {
            var i = HS + ZC - Un();
            if (i > 10) {
              var u = Os(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Pl(s, a)) {
                _a(), zs(e, s);
                break;
              }
              e.timeoutHandle = By(vc.bind(null, e, Ya, $u), i);
              break;
            }
          }
          vc(e, Ya, $u);
          break;
        }
        case Fp: {
          if (Go(e, a), Yv(a))
            break;
          if (!S1()) {
            var f = Vv(e, a), p = f, v = Un() - p, y = ob(v) - v;
            if (y > 10) {
              e.timeoutHandle = By(vc.bind(null, e, Ya, $u), y);
              break;
            }
          }
          vc(e, Ya, $u);
          break;
        }
        case JC: {
          vc(e, Ya, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function $w(e) {
      for (var t = e; ; ) {
        if (t.flags & mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!we(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Go(e, t) {
      t = To(t, bm), t = To(t, Pp), Md(e, t);
    }
    function i1(e) {
      if (lx(), (Rt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      Iu();
      var t = Os(e, Y);
      if (!Kr(t, xe))
        return Ia(e, Un()), null;
      var a = zm(e, t);
      if (e.tag !== Ao && a === fc) {
        var i = Ls(e);
        i !== Y && (t = i, a = IS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw pc(e, Y), Go(e, t), Ia(e, Un()), u;
      }
      if (a === jS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Ya, $u), Ia(e, Un()), null;
    }
    function Yw(e, t) {
      t !== Y && (Kc(e, nt(t, xe)), Ia(e, Un()), (Rt & (Ar | Li)) === ur && (Bp(), jo()));
    }
    function QS(e, t) {
      var a = Rt;
      Rt |= KC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === ur && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Bp(), nE());
      }
    }
    function Iw(e, t, a, i, u) {
      var s = xr(), f = Ur.transition;
      try {
        return Ur.transition = null, wt(Sa), e(t, a, i, u);
      } finally {
        wt(s), Ur.transition = f, Rt === ur && Bp();
      }
    }
    function Yu(e) {
      Qo !== null && Qo.tag === Ao && (Rt & (Ar | Li)) === ur && Iu();
      var t = Rt;
      Rt |= KC;
      var a = Ur.transition, i = xr();
      try {
        return Ur.transition = null, wt(Sa), e ? e() : void 0;
      } finally {
        wt(i), Ur.transition = a, Rt = t, (Rt & (Ar | Li)) === ur && jo();
      }
    }
    function l1() {
      return (Rt & (Ar | Li)) !== ur;
    }
    function Nm(e, t) {
      Zr(FS, tu, e), tu = nt(tu, t);
    }
    function WS(e) {
      tu = FS.current, Jr(FS, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== $y && (e.timeoutHandle = $y, gT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          UC(u, i), i = i.return;
        }
      Ta = e;
      var s = hc(e.current, null);
      return On = s, or = tu = t, sr = Bu, Hp = null, wm = Y, Pp = Y, bm = Y, Vp = null, Ya = null, P_(), ll.discardPendingWarnings(), s;
    }
    function u1(e, t) {
      do {
        var a = On;
        try {
          if ($h(), LE(), rn(), AS.current = null, a === null || a.return === null) {
            sr = jp, Hp = t, On = null;
            return;
          }
          if (ht && a.mode & Ge && gm(a, !0), lt)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              gd(a, i, or);
            } else
              Eu(a, t, or);
          hx(e, a.return, a, t, or), f1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function o1() {
      var e = US.current;
      return US.current = pm, e === null ? pm : e;
    }
    function s1(e) {
      US.current = e;
    }
    function Qw() {
      HS = Un();
    }
    function Qp(e) {
      wm = nt(e, wm);
    }
    function Ww() {
      sr === Bu && (sr = xm);
    }
    function GS() {
      (sr === Bu || sr === xm || sr === fc) && (sr = Fp), Ta !== null && (Dd(wm) || Dd(Pp)) && Go(Ta, or);
    }
    function Gw(e) {
      sr !== Fp && (sr = fc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function qw() {
      return sr === Bu;
    }
    function zm(e, t) {
      var a = Rt;
      Rt |= Ar;
      var i = o1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), Us(e, t);
        }
        $u = Ci(), pc(e, t);
      }
      xs(t);
      do
        try {
          Xw();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      if ($h(), Rt = a, s1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ac(), Ta = null, or = Y, sr;
    }
    function Xw() {
      for (; On !== null; )
        c1(On);
    }
    function Kw(e, t) {
      var a = Rt;
      Rt |= Ar;
      var i = o1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), Us(e, t);
        }
        $u = Ci(), Bp(), pc(e, t);
      }
      xs(t);
      do
        try {
          Jw();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      return $h(), s1(i), Rt = a, On !== null ? (Ed(), Bu) : (Ac(), Ta = null, or = Y, sr);
    }
    function Jw() {
      for (; On !== null && !zv(); )
        c1(On);
    }
    function c1(e) {
      var t = e.alternate;
      hn(e);
      var a;
      (e.mode & Ge) !== re ? (Kg(e), a = qS(t, e, tu), gm(e, !0)) : a = qS(t, e, tu), rn(), e.memoizedProps = e.pendingProps, a === null ? f1(e) : On = a, AS.current = null;
    }
    function f1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === ze) {
          hn(t);
          var u = void 0;
          if ((t.mode & Ge) === re ? u = zC(a, t, tu) : (Kg(t), u = zC(a, t, tu), gm(t, !1)), rn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Wx(a, t);
          if (s !== null) {
            s.flags &= qi, On = s;
            return;
          }
          if ((t.mode & Ge) !== re) {
            gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ol, i.subtreeFlags = ze, i.deletions = null;
          else {
            sr = jS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      sr === Bu && (sr = JC);
    }
    function vc(e, t, a) {
      var i = xr(), u = Ur.transition;
      try {
        Ur.transition = null, wt(Sa), Zw(e, t, a, i);
      } finally {
        Ur.transition = u, wt(i);
      }
      return null;
    }
    function Zw(e, t, a, i) {
      do
        Iu();
      while (Qo !== null);
      if (cb(), (Rt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (md(s), u === null)
        return yd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Kt;
      var f = nt(u.lanes, u.childLanes);
      fy(e, f), e === Ta && (Ta = null, On = null, or = Y), ((u.subtreeFlags & Gr) !== ze || (u.flags & Gr) !== ze) && (dc || (dc = !0, BS = a, JS(zl, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ri | Gr)) !== ze, v = (u.flags & (Qr | Wr | ri | Gr)) !== ze;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = xr();
        wt(Sa);
        var w = Rt;
        Rt |= Li, AS.current = null, Jx(e, u), nC(), dw(e, u, s), fT(e.containerInfo), e.current = u, fo(s), pw(u, e, s), Hv(), lo(), Rt = w, wt(g), Ur.transition = y;
      } else
        e.current = u, nC();
      var _ = dc;
      if (dc ? (dc = !1, Qo = e, $p = s) : (jf = 0, Om = null), f = e.pendingLanes, f === Y && (Af = null), _ || h1(e.current, !1), Ha(u.stateNode, i), ha && e.memoizedUpdaters.clear(), Mw(), Ia(e, Un()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], le = F.stack, Ue = F.digest;
          z(F.value, {
            componentStack: le,
            digest: Ue
          });
        }
      if (Dm) {
        Dm = !1;
        var be = PS;
        throw PS = null, be;
      }
      return Kr($p, xe) && e.tag !== Ao && Iu(), f = e.pendingLanes, Kr(f, xe) ? (ax(), e === $S ? Yp++ : (Yp = 0, $S = e)) : Yp = 0, jo(), yd(), null;
    }
    function Iu() {
      if (Qo !== null) {
        var e = Wv($p), t = Jc(li, e), a = Ur.transition, i = xr();
        try {
          return Ur.transition = null, wt(t), tb();
        } finally {
          wt(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function eb(e) {
      VS.push(e), dc || (dc = !0, JS(zl, function() {
        return Iu(), null;
      }));
    }
    function tb() {
      if (Qo === null)
        return !1;
      var e = BS;
      BS = null;
      var t = Qo, a = $p;
      if (Qo = null, $p = Y, (Rt & (Ar | Li)) !== ur)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, km = !1, Sd(a);
      var i = Rt;
      Rt |= Li, Ew(t.current), mw(t, t.current, a, e);
      {
        var u = VS;
        VS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          nw(t, f);
        }
      }
      mn(), h1(t.current, !0), Rt = i, jo(), km ? t === Om ? jf++ : (jf = 0, Om = t) : jf = 0, YS = !1, km = !1, Su(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function d1(e) {
      return Af !== null && Af.has(e);
    }
    function nb(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function rb(e) {
      Dm || (Dm = !0, PS = e);
    }
    var ab = rb;
    function p1(e, t, a) {
      var i = sc(a, t), u = cC(e, i, xe), s = Ho(e, u, xe), f = _a();
      s !== null && (_o(s, xe, f), Ia(s, f));
    }
    function on(e, t, a) {
      if (qx(a), Gp(!1), e.tag === ee) {
        p1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ee) {
          p1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !d1(s)) {
            var f = sc(a, e), p = hS(i, f, xe), v = Ho(i, p, xe), y = _a();
            v !== null && (_o(v, xe, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ib(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      zs(e, a), vb(e), Ta === e && Pl(or, a) && (sr === Fp || sr === xm && kd(or) && Un() - HS < ZC ? pc(e, Y) : bm = nt(bm, a)), Ia(e, u);
    }
    function v1(e, t) {
      t === Kt && (t = Hw(e));
      var a = _a(), i = Ba(e, t);
      i !== null && (_o(i, t, a), Ia(i, a));
    }
    function lb(e) {
      var t = e.memoizedState, a = Kt;
      t !== null && (a = t.retryLane), v1(e, a);
    }
    function ub(e, t) {
      var a = Kt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case St:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), v1(e, a);
    }
    function ob(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Uw(e / 1960) * 1960;
    }
    function sb() {
      if (Yp > jw)
        throw Yp = 0, $S = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      jf > Fw && (jf = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function cb() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function h1(e, t) {
      hn(e), Um(e, Aa, kw), t && Um(e, yu, Ow), Um(e, Aa, bw), t && Um(e, yu, Dw), rn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ze ? i = i.child : ((i.flags & t) !== ze && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function m1(e) {
      {
        if ((Rt & Ar) !== ur || !(e.mode & Me))
          return;
        var t = e.tag;
        if (t !== Pe && t !== ee && t !== ue && t !== ke && t !== Ve && t !== ft && t !== Qe)
          return;
        var a = We(e) || "ReactComponent";
        if (Am !== null) {
          if (Am.has(a))
            return;
          Am.add(a);
        } else
          Am = /* @__PURE__ */ new Set([a]);
        var i = vn;
        try {
          hn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? hn(e) : rn();
        }
      }
    }
    var qS;
    {
      var fb = null;
      qS = function(e, t, a) {
        var i = _1(fb, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (T_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), LE(), UC(e, t), _1(t, i), t.mode & Ge && Kg(t), ti(null, kC, null, e, t, a), ly()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var y1 = !1, XS;
    XS = /* @__PURE__ */ new Set();
    function db(e) {
      if (Br && !tx())
        switch (e.tag) {
          case ke:
          case Ve:
          case Qe: {
            var t = On && We(On) || "Unknown", a = t;
            if (!XS.has(a)) {
              XS.add(a);
              var i = We(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            y1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), y1 = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (ha) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zd(e, i, t);
        });
      }
    }
    var KS = {};
    function JS(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), KS) : pd(e, t);
      }
    }
    function g1(e) {
      if (e !== KS)
        return Mc(e);
    }
    function S1() {
      return vl.current !== null;
    }
    function pb(e) {
      {
        if (e.mode & Me) {
          if (!XC())
            return;
        } else if (!zw() || Rt !== ur || e.tag !== ke && e.tag !== Ve && e.tag !== Qe)
          return;
        if (vl.current === null) {
          var t = vn;
          try {
            hn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, We(e));
          } finally {
            t ? hn(e) : rn();
          }
        }
      }
    }
    function vb(e) {
      e.tag !== Ao && XC() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      n1 = e;
    }
    var Mi = null, Ff = null, hb = function(e) {
      Mi = e;
    };
    function Hf(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ZS(e) {
      return Hf(e);
    }
    function e0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Hf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function E1(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ke: {
            (typeof i == "function" || s === Ae) && (u = !0);
            break;
          }
          case Ve: {
            (s === G || s === Ae) && (u = !0);
            break;
          }
          case ft:
          case Qe: {
            (s === Ct || s === Ae) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function C1(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        Ff === null && (Ff = /* @__PURE__ */ new WeakSet()), Ff.add(e);
      }
    }
    var mb = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          t0(e.current, i, a);
        });
      }
    }, yb = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Iu(), Yu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function t0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ke:
          case Qe:
          case ue:
            v = p;
            break;
          case Ve:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var w = Mi(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === ue ? g = !0 : y = !0));
        }
        if (Ff !== null && (Ff.has(e) || i !== null && Ff.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, xe);
          _ !== null && cr(_, e, xe, en);
        }
        u !== null && !g && t0(u, t, a), s !== null && t0(s, t, a);
      }
    }
    var gb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return n0(e.current, i, a), a;
      }
    };
    function n0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ke:
          case Qe:
          case ue:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Sb(e, a) : i !== null && n0(i, t, a), u !== null && n0(u, t, a);
      }
    }
    function Sb(e, t) {
      {
        var a = Eb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case je:
              t.add(i.stateNode.containerInfo);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Eb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var r0;
    {
      r0 = !1;
      try {
        var R1 = Object.preventExtensions({});
      } catch {
        r0 = !0;
      }
    }
    function Cb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !r0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new Cb(e, t, a, i);
    };
    function a0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Rb(e) {
      return typeof e == "function" && !a0(e) && e.defaultProps === void 0;
    }
    function Tb(e) {
      if (typeof e == "function")
        return a0(e) ? ue : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return Ve;
        if (t === Ct)
          return ft;
      }
      return Pe;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ze, a.subtreeFlags = ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Pe:
        case ke:
        case Qe:
          a.type = Hf(e.type);
          break;
        case ue:
          a.type = ZS(e.type);
          break;
        case Ve:
          a.type = e0(e.type);
          break;
      }
      return a;
    }
    function _b(e, t) {
      e.flags &= tr | Xt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ze, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function xb(e, t, a) {
      var i;
      return e === Nh ? (i = Me, t === !0 && (i |= un, i |= qr)) : i = re, ha && (i |= Ge), si(ee, null, null, i);
    }
    function i0(e, t, a, i, u, s) {
      var f = Pe, p = e;
      if (typeof e == "function")
        a0(e) ? (f = ue, p = ZS(p)) : p = Hf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case sa:
            return qo(a.children, u, s, t);
          case zi:
            f = Fn, u |= un, (u & Me) !== re && (u |= qr);
            break;
          case gl:
            return wb(a, u, s, t);
          case Ne:
            return bb(a, u, s, t);
          case dt:
            return Db(a, u, s, t);
          case Gt:
            return T1(a, u, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case ot:
          // eslint-disable-next-line no-fallthrough
          case hr:
          // eslint-disable-next-line no-fallthrough
          case Ft:
          // eslint-disable-next-line no-fallthrough
          case Mn:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = it;
                  break e;
                case Q:
                  f = sn;
                  break e;
                case G:
                  f = Ve, p = e0(p);
                  break e;
                case Ct:
                  f = ft;
                  break e;
                case Ae:
                  f = xn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? We(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function l0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = i0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function qo(e, t, a, i) {
      var u = si(pt, e, i, t);
      return u.lanes = a, u;
    }
    function wb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(kt, e, i, t | Ge);
      return u.elementType = gl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function bb(e, t, a, i) {
      var u = si(Re, e, i, t);
      return u.elementType = Ne, u.lanes = a, u;
    }
    function Db(e, t, a, i) {
      var u = si(St, e, i, t);
      return u.elementType = dt, u.lanes = a, u;
    }
    function T1(e, t, a, i) {
      var u = si(Be, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function u0(e, t, a) {
      var i = si(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function kb() {
      var e = si(oe, null, null, re);
      return e.elementType = "DELETED", e;
    }
    function Ob(e) {
      var t = si(Jt, null, null, re);
      return t.stateNode = e, t;
    }
    function o0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function _1(e, t) {
      return e === null && (e = si(Pe, null, null, re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Lb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = $y, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Kt, this.eventTimes = Ns(Y), this.expirationTimes = Ns(en), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Ns(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ws; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Nh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ao:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function x1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Lb(e, t, a, p, v), w = xb(t, s);
      g.current = w, w.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = _;
      }
      return Cg(w), g;
    }
    var s0 = "18.3.1";
    function Mb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return dr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var c0, f0;
    c0 = !1, f0 = {};
    function w1(e) {
      if (!e)
        return oi;
      var t = hi(e), a = v_(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Gl(i))
          return Z0(t, i, a);
      }
      return a;
    }
    function Nb(e, t) {
      {
        var a = hi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = cd(a);
        if (u === null)
          return null;
        if (u.mode & un) {
          var s = We(a) || "Component";
          if (!f0[s]) {
            f0[s] = !0;
            var f = vn;
            try {
              hn(u), a.mode & un ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? hn(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function b1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return x1(e, t, v, y, a, i, u, s, f);
    }
    function D1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, w = x1(a, i, g, e, u, s, f, p, v);
      w.context = w1(null);
      var _ = w.current, z = _a(), A = Wo(_), F = Pu(z, A);
      return F.callback = t ?? null, Ho(_, F, A), Pw(w, A, z), w;
    }
    function qp(e, t, a, i) {
      oo(t, e);
      var u = t.current, s = _a(), f = Wo(u);
      jc(f);
      var p = w1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && vn !== null && !c0 && (c0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, We(vn) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ho(u, v, f);
      return y !== null && (cr(y, u, f, s), Gh(y, u, f)), f;
    }
    function jm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function zb(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (pe(t)) {
            var a = Co(t);
            Yw(t, a);
          }
          break;
        }
        case Re: {
          Yu(function() {
            var u = Ba(e, xe);
            if (u !== null) {
              var s = _a();
              cr(u, e, xe, s);
            }
          });
          var i = xe;
          d0(e, i);
          break;
        }
      }
    }
    function k1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ld(a.retryLane, t));
    }
    function d0(e, t) {
      k1(e, t);
      var a = e.alternate;
      a && k1(a, t);
    }
    function Ub(e) {
      if (e.tag === Re) {
        var t = go, a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        d0(e, t);
      }
    }
    function Ab(e) {
      if (e.tag === Re) {
        var t = Wo(e), a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        d0(e, t);
      }
    }
    function O1(e) {
      var t = dd(e);
      return t === null ? null : t.stateNode;
    }
    var L1 = function(e) {
      return null;
    };
    function jb(e) {
      return L1(e);
    }
    var M1 = function(e) {
      return !1;
    };
    function Fb(e) {
      return M1(e);
    }
    var N1 = null, z1 = null, U1 = null, A1 = null, j1 = null, F1 = null, H1 = null, P1 = null, V1 = null;
    {
      var B1 = function(e, t, a) {
        var i = t[a], u = xt(e) ? e.slice() : tt({}, e);
        return a + 1 === t.length ? (xt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = B1(e[i], t, a + 1), u);
      }, $1 = function(e, t) {
        return B1(e, t, 0);
      }, Y1 = function(e, t, a, i) {
        var u = t[i], s = xt(e) ? e.slice() : tt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], xt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Y1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, I1 = function(e, t, a) {
        if (t.length !== a.length) {
          Le("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Le("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Y1(e, t, a, 0);
      }, Q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = xt(e) ? e.slice() : tt({}, e);
        return s[u] = Q1(e[u], t, a + 1, i), s;
      }, W1 = function(e, t, a) {
        return Q1(e, t, 0, a);
      }, p0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      N1 = function(e, t, a, i) {
        var u = p0(e, t);
        if (u !== null) {
          var s = W1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ba(e, xe);
          f !== null && cr(f, e, xe, en);
        }
      }, z1 = function(e, t, a) {
        var i = p0(e, t);
        if (i !== null) {
          var u = $1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = tt({}, e.memoizedProps);
          var s = Ba(e, xe);
          s !== null && cr(s, e, xe, en);
        }
      }, U1 = function(e, t, a, i) {
        var u = p0(e, t);
        if (u !== null) {
          var s = I1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ba(e, xe);
          f !== null && cr(f, e, xe, en);
        }
      }, A1 = function(e, t, a) {
        e.pendingProps = W1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, xe);
        i !== null && cr(i, e, xe, en);
      }, j1 = function(e, t) {
        e.pendingProps = $1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, xe);
        a !== null && cr(a, e, xe, en);
      }, F1 = function(e, t, a) {
        e.pendingProps = I1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, xe);
        i !== null && cr(i, e, xe, en);
      }, H1 = function(e) {
        var t = Ba(e, xe);
        t !== null && cr(t, e, xe, en);
      }, P1 = function(e) {
        L1 = e;
      }, V1 = function(e) {
        M1 = e;
      };
    }
    function Hb(e) {
      var t = cd(e);
      return t === null ? null : t.stateNode;
    }
    function Pb(e) {
      return null;
    }
    function Vb() {
      return vn;
    }
    function Bb(e) {
      var t = e.findFiberByHostInstance, a = me.ReactCurrentDispatcher;
      return vd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: N1,
        overrideHookStateDeletePath: z1,
        overrideHookStateRenamePath: U1,
        overrideProps: A1,
        overridePropsDeletePath: j1,
        overridePropsRenamePath: F1,
        setErrorHandler: P1,
        setSuspenseHandler: V1,
        scheduleUpdate: H1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Hb,
        findFiberByHostInstance: t || Pb,
        // React Refresh
        findHostInstancesForRefresh: gb,
        scheduleRefresh: mb,
        scheduleRoot: yb,
        setRefreshHandler: hb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Vb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: s0
      });
    }
    var G1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function v0(e) {
      this._internalRoot = e;
    }
    Fm.prototype.render = v0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = O1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Fm.prototype.unmount = v0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        l1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          qp(null, e, null, null);
        }), G0(t);
      }
    };
    function $b(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      q1(e);
      var a = !1, i = !1, u = "", s = G1;
      t != null && (t.hydrate ? Le("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = b1(e, Nh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === En ? e.parentNode : e;
      return tp(p), new v0(f);
    }
    function Fm(e) {
      this._internalRoot = e;
    }
    function Yb(e) {
      e && Zc(e);
    }
    Fm.prototype.unstable_scheduleHydration = Yb;
    function Ib(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      q1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = G1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = D1(t, null, e, Nh, i, s, f, p, v);
      if (wh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          q_(y, w);
        }
      return new Fm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === ca || e.nodeType === Wf || !Oe));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === ca || e.nodeType === Wf || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function q1(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Qb = me.ReactCurrentOwner, X1;
    X1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = O1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = h0(e), u = !!(i && zo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function h0(e) {
      return e ? e.nodeType === ca ? e.documentElement : e.firstChild : null;
    }
    function K1() {
    }
    function Wb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = jm(f);
            s.call(_);
          };
        }
        var f = D1(
          t,
          i,
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          K1
        );
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === En ? e.parentNode : e;
        return tp(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = jm(g);
            y.call(_);
          };
        }
        var g = b1(
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          K1
        );
        e._reactRootContainer = g, wh(g.current, e);
        var w = e.nodeType === En ? e.parentNode : e;
        return tp(w), Yu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Gb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pm(e, t, a, i, u) {
      X1(a), Gb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Wb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = jm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return jm(f);
    }
    var J1 = !1;
    function qb(e) {
      {
        J1 || (J1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Qb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : Nb(e, "findDOMNode");
    }
    function Xb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pm(null, e, t, !0, a);
    }
    function Kb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pm(null, e, t, !1, a);
    }
    function Jb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !io(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pm(e, t, a, !1, i);
    }
    var Z1 = !1;
    function Zb(e) {
      if (Z1 || (Z1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = h0(e), i = a && !zo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Pm(null, null, e, !1, function() {
            e._reactRootContainer = null, G0(e);
          });
        }), !0;
      } else {
        {
          var u = h0(e), s = !!(u && zo(u)), f = e.nodeType === Yr && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ud(zb), js(Ub), jd(Ab), qv(xr), Pd(dy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), td(tT), wc(QS, Iw, Yu);
    function eD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return Mb(e, t, null, a);
    }
    function tD(e, t, a, i) {
      return Jb(e, t, a, i);
    }
    var m0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zo, mf, bh, ao, vu, QS]
    };
    function nD(e, t) {
      return m0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), $b(e, t);
    }
    function rD(e, t, a) {
      return m0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ib(e, t, a);
    }
    function aD(e) {
      return l1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var iD = Bb({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: s0,
      rendererPackageName: "react-dom"
    });
    if (!iD && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var eR = window.location.protocol;
      /^(https?|file):$/.test(eR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (eR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0, Wa.createPortal = eD, Wa.createRoot = nD, Wa.findDOMNode = qb, Wa.flushSync = aD, Wa.hydrate = Xb, Wa.hydrateRoot = rD, Wa.render = Kb, Wa.unmountComponentAtNode = Zb, Wa.unstable_batchedUpdates = QS, Wa.unstable_renderSubtreeIntoContainer = tD, Wa.version = s0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var dR;
function yD() {
  if (dR) return $m.exports;
  dR = 1;
  var P = {};
  function K() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (P.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K);
      } catch (k) {
        console.error(k);
      }
    }
  }
  return P.NODE_ENV === "production" ? (K(), $m.exports = hD()) : $m.exports = mD(), $m.exports;
}
var pR;
function gD() {
  if (pR) return Vf;
  pR = 1;
  var P = {}, K = yD();
  if (P.NODE_ENV === "production")
    Vf.createRoot = K.createRoot, Vf.hydrateRoot = K.hydrateRoot;
  else {
    var k = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Vf.createRoot = function(me, Ke) {
      k.usingClientEntryPoint = !0;
      try {
        return K.createRoot(me, Ke);
      } finally {
        k.usingClientEntryPoint = !1;
      }
    }, Vf.hydrateRoot = function(me, Ke, zt) {
      k.usingClientEntryPoint = !0;
      try {
        return K.hydrateRoot(me, Ke, zt);
      } finally {
        k.usingClientEntryPoint = !1;
      }
    };
  }
  return Vf;
}
var SD = gD();
function yR(P) {
  var K, k, me = "";
  if (typeof P == "string" || typeof P == "number") me += P;
  else if (typeof P == "object") if (Array.isArray(P)) {
    var Ke = P.length;
    for (K = 0; K < Ke; K++) P[K] && (k = yR(P[K])) && (me && (me += " "), me += k);
  } else for (k in P) P[k] && (me && (me += " "), me += k);
  return me;
}
function mc() {
  for (var P, K, k = 0, me = "", Ke = arguments.length; k < Ke; k++) (P = arguments[k]) && (K = yR(P)) && (me && (me += " "), me += K);
  return me;
}
const ED = "_label_cys8o_1", CD = "_error_cys8o_10", vR = {
  label: ED,
  error: CD
}, RD = (P) => {
  const { className: K, title: k, value: me, error: Ke } = P;
  return /* @__PURE__ */ Ut.jsxs("label", { className: mc(vR.label, { [vR.error]: Ke }, K), children: [
    /* @__PURE__ */ Ut.jsx("span", { children: k }),
    me && /* @__PURE__ */ Ut.jsx("span", { children: me })
  ] });
}, TD = "_root_gnghl_1", _D = "_label_gnghl_5", xD = "_description_gnghl_9", wD = "_top_gnghl_15", bD = "_bottom_gnghl_19", DD = "_input_gnghl_24", kD = "_error_gnghl_41", OD = "_hasRight_gnghl_46", LD = "_right_gnghl_50", MD = "_tooltip_gnghl_63", hl = {
  root: TD,
  label: _D,
  description: xD,
  top: wD,
  bottom: bD,
  input: DD,
  error: kD,
  hasRight: OD,
  right: LD,
  tooltip: MD
}, Im = (P) => {
  var K;
  const { className: k, right: me, label: Ke, descriptionTop: zt, descriptionBottom: Le, error: S, onFocus: Ze, ...ke } = P, ue = S0.useRef(null), Pe = (ee) => {
    ee.target.select(), Ze == null || Ze(ee);
  };
  return /* @__PURE__ */ Ut.jsxs(
    "div",
    {
      className: mc(hl.root, { [hl.error]: S }, k),
      style: {
        "--right-width": `${((K = ue.current) == null ? void 0 : K.clientWidth) ?? 0}px`
      },
      children: [
        /* @__PURE__ */ Ut.jsx(RD, { className: hl.label, title: Ke, error: S }),
        /* @__PURE__ */ Ut.jsx("p", { className: mc(hl.description, hl.top), children: zt }),
        /* @__PURE__ */ Ut.jsx(
          "input",
          {
            className: mc(hl.input, {
              [hl.hasRight]: me
            }),
            onFocus: Pe,
            ...ke
          }
        ),
        me && /* @__PURE__ */ Ut.jsx("div", { ref: ue, className: hl.right, children: "%" }),
        /* @__PURE__ */ Ut.jsx("p", { className: mc(hl.description, hl.bottom), children: Le }),
        S ? /* @__PURE__ */ Ut.jsx("div", { className: hl.tooltip, children: S }) : null
      ]
    }
  );
}, ND = "_section_13pv1_1", zD = "_title_13pv1_8", hR = {
  section: ND,
  title: zD
}, gR = (P) => {
  const { children: K, className: k, title: me } = P;
  return /* @__PURE__ */ Ut.jsxs("div", { className: mc(hR.section, k), children: [
    /* @__PURE__ */ Ut.jsx("h4", { className: hR.title, children: me }),
    /* @__PURE__ */ Ut.jsx("div", { children: K })
  ] });
}, UD = "_table_1xqp0_1", AD = "_tableHead_1xqp0_7", jD = "_tableItem_1xqp0_19", FD = "_footer_1xqp0_32", HD = "_footerItem_1xqp0_44", ev = {
  table: UD,
  tableHead: AD,
  tableItem: jD,
  footer: FD,
  footerItem: HD
}, PD = (P) => {
  var K;
  const { title: k, tableData: me, resultData: Ke, className: zt } = P;
  return /* @__PURE__ */ Ut.jsxs(gR, { className: zt, title: k, children: [
    /* @__PURE__ */ Ut.jsxs("div", { className: ev.table, children: [
      /* @__PURE__ */ Ut.jsx("div", { className: ev.tableHead, children: me.headers.map((Le) => /* @__PURE__ */ Ut.jsx("span", { children: Le }, Le)) }),
      (K = me.data) == null ? void 0 : K.map((Le) => /* @__PURE__ */ Ut.jsxs("div", { className: ev.tableItem, children: [
        /* @__PURE__ */ Ut.jsx("span", { children: Le.label }),
        /* @__PURE__ */ Ut.jsx("span", { children: Le.value })
      ] }, Le.label))
    ] }),
    /* @__PURE__ */ Ut.jsx("div", { className: ev.footer, children: Ke.map((Le) => /* @__PURE__ */ Ut.jsxs("div", { className: ev.footerItem, children: [
      /* @__PURE__ */ Ut.jsx("span", { children: Le.label }),
      /* @__PURE__ */ Ut.jsx("span", { children: Le.value })
    ] }, Le.label)) })
  ] });
}, VD = {
  "tofu-widget": "_tofu-widget_1vn9e_6"
}, BD = VD["tofu-widget"], $D = "_widget_17eig_1", YD = "_section_17eig_9", ID = "_title_17eig_14", QD = {
  widget: $D,
  section: YD,
  title: ID
}, Bf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), WD = () => {
  const [P, K] = S0.useState({
    laborCost: 0,
    materialCost: 0,
    overheadExpenses: 0,
    servicePrice: 0
  }), k = (Pe) => {
    K({
      ...P,
      [Pe.target.name]: Number(Pe.target.value)
    });
  }, me = P.laborCost > 1e6, Ke = P.materialCost > 1e6, zt = P.overheadExpenses > 1e6, Le = P.servicePrice > 1e6, S = P.laborCost + P.materialCost + P.overheadExpenses, Ze = P.servicePrice - S, ke = P.servicePrice === 0 ? 0 : Ze / P.servicePrice * 100, ue = S === 0 ? 0 : Ze / S * 100;
  return /* @__PURE__ */ Ut.jsxs("div", { className: mc(QD.widget, BD), children: [
    /* @__PURE__ */ Ut.jsxs(gR, { title: "Profit Margin Calculator", children: [
      /* @__PURE__ */ Ut.jsx(
        Im,
        {
          label: "Labor Costs",
          type: "number",
          value: P.laborCost,
          onChange: k,
          name: "laborCost",
          descriptionTop: "(Workers) x (Job Hours) x (Average Hourly Pay)",
          min: 0,
          max: 1e6,
          error: me ? "Value must be between 0 -  1000000" : void 0
        }
      ),
      /* @__PURE__ */ Ut.jsx(
        Im,
        {
          label: "Material Costs",
          type: "number",
          value: P.materialCost,
          onChange: k,
          name: "materialCost",
          descriptionTop: "Total cost of all supplies used for the job",
          min: 0,
          max: 1e6,
          error: Ke ? "Value must be between 0 -  1000000" : void 0
        }
      ),
      /* @__PURE__ */ Ut.jsx(
        Im,
        {
          label: "Overhead Expenses",
          type: "number",
          value: P.overheadExpenses,
          onChange: k,
          name: "overheadExpenses",
          descriptionTop: "(Monthly Expenses / Monthly Working Hours) x Hours to Complete the Job",
          min: 0,
          max: 1e6,
          error: zt ? "Value must be between 0 -  1000000" : void 0
        }
      ),
      /* @__PURE__ */ Ut.jsx(
        Im,
        {
          label: "Service Price",
          type: "number",
          value: P.servicePrice,
          onChange: k,
          name: "servicePrice",
          descriptionTop: "The final price you will charge your client for services provided",
          min: 0,
          max: 1e6,
          error: Le ? "Value must be between 0 -  1000000" : void 0
        }
      )
    ] }),
    /* @__PURE__ */ Ut.jsx(
      PD,
      {
        title: "Total Summary",
        tableData: {
          headers: ["Name", "Total"],
          data: [
            {
              label: "Labor Costs",
              value: Bf.format(P.laborCost)
            },
            {
              label: "Material Costs",
              value: Bf.format(P.materialCost)
            },
            {
              label: "Overhead Expenses",
              value: Bf.format(P.overheadExpenses)
            },
            {
              label: "Service Price",
              value: Bf.format(P.servicePrice)
            }
          ]
        },
        resultData: [
          {
            label: "Total Costs",
            value: Bf.format(S)
          },
          {
            label: "Total Profit",
            value: Bf.format(Ze)
          },
          {
            label: "Profit Margin",
            value: `${ke.toFixed(2)}%`
          },
          {
            label: "Markup",
            value: `${ue.toFixed(2)}%`
          }
        ]
      }
    )
  ] });
};
SD.createRoot(document.getElementById("profit-margin-calculator")).render(
  /* @__PURE__ */ Ut.jsx(S0.StrictMode, { children: /* @__PURE__ */ Ut.jsx(WD, {}) })
);
