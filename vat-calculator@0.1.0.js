var Pm = { exports: {} }, Jp = {}, Bm = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function dD() {
  if (iR) return Et;
  iR = 1;
  var F = Symbol.for("react.element"), Q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), Ue = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), Xe = Symbol.iterator;
  function te(b) {
    return b === null || typeof b != "object" ? null : (b = Xe && b[Xe] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, oe = Object.assign, Re = {};
  function ht(b, $, Oe) {
    this.props = b, this.context = $, this.refs = Re, this.updater = Oe || je;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(b, $) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, $, "setState");
  }, ht.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Fn() {
  }
  Fn.prototype = ht.prototype;
  function sn(b, $, Oe) {
    this.props = b, this.context = $, this.refs = Re, this.updater = Oe || je;
  }
  var lt = sn.prototype = new Fn();
  lt.constructor = sn, oe(lt, ht.prototype), lt.isPureReactComponent = !0;
  var Ve = Array.isArray, Nt = Object.prototype.hasOwnProperty, Te = { current: null }, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(b, $, Oe) {
    var Be, et = {}, ut = null, yt = null;
    if ($ != null) for (Be in $.ref !== void 0 && (yt = $.ref), $.key !== void 0 && (ut = "" + $.key), $) Nt.call($, Be) && !pt.hasOwnProperty(Be) && (et[Be] = $[Be]);
    var ft = arguments.length - 2;
    if (ft === 1) et.children = Oe;
    else if (1 < ft) {
      for (var Rt = Array(ft), Pt = 0; Pt < ft; Pt++) Rt[Pt] = arguments[Pt + 2];
      et.children = Rt;
    }
    if (b && b.defaultProps) for (Be in ft = b.defaultProps, ft) et[Be] === void 0 && (et[Be] = ft[Be]);
    return { $$typeof: F, type: b, key: ut, ref: yt, props: et, _owner: Te.current };
  }
  function xn(b, $) {
    return { $$typeof: F, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function gn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === F;
  }
  function Jt(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Oe) {
      return $[Oe];
    });
  }
  var Ct = /\/+/g;
  function nn(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? Jt("" + b.key) : $.toString(36);
  }
  function Pe(b, $, Oe, Be, et) {
    var ut = typeof b;
    (ut === "undefined" || ut === "boolean") && (b = null);
    var yt = !1;
    if (b === null) yt = !0;
    else switch (ut) {
      case "string":
      case "number":
        yt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case F:
          case Q:
            yt = !0;
        }
    }
    if (yt) return yt = b, et = et(yt), b = Be === "" ? "." + nn(yt, 0) : Be, Ve(et) ? (Oe = "", b != null && (Oe = b.replace(Ct, "$&/") + "/"), Pe(et, $, Oe, "", function(Pt) {
      return Pt;
    })) : et != null && (gn(et) && (et = xn(et, Oe + (!et.key || yt && yt.key === et.key ? "" : ("" + et.key).replace(Ct, "$&/") + "/") + b)), $.push(et)), 1;
    if (yt = 0, Be = Be === "" ? "." : Be + ":", Ve(b)) for (var ft = 0; ft < b.length; ft++) {
      ut = b[ft];
      var Rt = Be + nn(ut, ft);
      yt += Pe(ut, $, Oe, Rt, et);
    }
    else if (Rt = te(b), typeof Rt == "function") for (b = Rt.call(b), ft = 0; !(ut = b.next()).done; ) ut = ut.value, Rt = Be + nn(ut, ft++), yt += Pe(ut, $, Oe, Rt, et);
    else if (ut === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return yt;
  }
  function at(b, $, Oe) {
    if (b == null) return b;
    var Be = [], et = 0;
    return Pe(b, Be, "", "", function(ut) {
      return $.call(Oe, ut, et++);
    }), Be;
  }
  function wt(b) {
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
  var it = { current: null }, B = { transition: null }, me = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: B, ReactCurrentOwner: Te };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: at, forEach: function(b, $, Oe) {
    at(b, function() {
      $.apply(this, arguments);
    }, Oe);
  }, count: function(b) {
    var $ = 0;
    return at(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return at(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!gn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Et.Component = ht, Et.Fragment = D, Et.Profiler = Ie, Et.PureComponent = sn, Et.StrictMode = ie, Et.Suspense = tt, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, Et.act = le, Et.cloneElement = function(b, $, Oe) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Be = oe({}, b.props), et = b.key, ut = b.ref, yt = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (ut = $.ref, yt = Te.current), $.key !== void 0 && (et = "" + $.key), b.type && b.type.defaultProps) var ft = b.type.defaultProps;
      for (Rt in $) Nt.call($, Rt) && !pt.hasOwnProperty(Rt) && (Be[Rt] = $[Rt] === void 0 && ft !== void 0 ? ft[Rt] : $[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) Be.children = Oe;
    else if (1 < Rt) {
      ft = Array(Rt);
      for (var Pt = 0; Pt < Rt; Pt++) ft[Pt] = arguments[Pt + 2];
      Be.children = ft;
    }
    return { $$typeof: F, type: b.type, key: et, ref: ut, props: Be, _owner: yt };
  }, Et.createContext = function(b) {
    return b = { $$typeof: Ee, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: dt, _context: b }, b.Consumer = b;
  }, Et.createElement = We, Et.createFactory = function(b) {
    var $ = We.bind(null, b);
    return $.type = b, $;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, Et.isValidElement = gn, Et.lazy = function(b) {
    return { $$typeof: he, _payload: { _status: -1, _result: b }, _init: wt };
  }, Et.memo = function(b, $) {
    return { $$typeof: Ue, type: b, compare: $ === void 0 ? null : $ };
  }, Et.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, Et.unstable_act = le, Et.useCallback = function(b, $) {
    return it.current.useCallback(b, $);
  }, Et.useContext = function(b) {
    return it.current.useContext(b);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(b) {
    return it.current.useDeferredValue(b);
  }, Et.useEffect = function(b, $) {
    return it.current.useEffect(b, $);
  }, Et.useId = function() {
    return it.current.useId();
  }, Et.useImperativeHandle = function(b, $, Oe) {
    return it.current.useImperativeHandle(b, $, Oe);
  }, Et.useInsertionEffect = function(b, $) {
    return it.current.useInsertionEffect(b, $);
  }, Et.useLayoutEffect = function(b, $) {
    return it.current.useLayoutEffect(b, $);
  }, Et.useMemo = function(b, $) {
    return it.current.useMemo(b, $);
  }, Et.useReducer = function(b, $, Oe) {
    return it.current.useReducer(b, $, Oe);
  }, Et.useRef = function(b) {
    return it.current.useRef(b);
  }, Et.useState = function(b) {
    return it.current.useState(b);
  }, Et.useSyncExternalStore = function(b, $, Oe) {
    return it.current.useSyncExternalStore(b, $, Oe);
  }, Et.useTransition = function() {
    return it.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var tv = { exports: {} };
tv.exports;
var lR;
function pD() {
  return lR || (lR = 1, function(F, Q) {
    var D = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    D.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ie = "18.3.1", Ie = Symbol.for("react.element"), dt = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), he = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), Fn = Symbol.iterator, sn = "@@iterator";
      function lt(h) {
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
      }, Nt = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, pt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, xn = null;
      function gn(h) {
        xn = h;
      }
      We.setExtraStackFrame = function(h) {
        xn = h;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var h = "";
        xn && (h += xn);
        var C = We.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, Ct = !1, nn = !1, Pe = !1, at = !1, wt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: Nt,
        ReactCurrentOwner: pt
      };
      wt.ReactDebugCurrentFrame = We, wt.ReactCurrentActQueue = Te;
      function it(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          me("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          me("error", h, M);
        }
      }
      function me(h, C, M) {
        {
          var j = wt.ReactDebugCurrentFrame, J = j.getStackAddendum();
          J !== "" && (C += "%s", M = M.concat([J]));
          var Se = M.map(function(de) {
            return String(de);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var le = {};
      function b(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", J = j + "." + C;
          if (le[J])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), le[J] = !0;
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
        enqueueForceUpdate: function(h, C, M) {
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
        enqueueReplaceState: function(h, C, M, j) {
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
        enqueueSetState: function(h, C, M, j) {
          b(h, "setState");
        }
      }, Oe = Object.assign, Be = {};
      Object.freeze(Be);
      function et(h, C, M) {
        this.props = h, this.context = C, this.refs = Be, this.updater = M || $;
      }
      et.prototype.isReactComponent = {}, et.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, et.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, yt = function(h, C) {
          Object.defineProperty(et.prototype, h, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ut)
          ut.hasOwnProperty(ft) && yt(ft, ut[ft]);
      }
      function Rt() {
      }
      Rt.prototype = et.prototype;
      function Pt(h, C, M) {
        this.props = h, this.context = C, this.refs = Be, this.updater = M || $;
      }
      var Xn = Pt.prototype = new Rt();
      Xn.constructor = Pt, Oe(Xn, et.prototype), Xn.isPureReactComponent = !0;
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
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
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
      function Nn(h) {
        if (Hn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(h)), wn(h);
      }
      function gr(h, C, M) {
        var j = h.displayName;
        if (j)
          return j;
        var J = C.displayName || C.name || "";
        return J !== "" ? M + "(" + J + ")" : M;
      }
      function dr(h) {
        return h.displayName || "Context";
      }
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ee:
            return "Fragment";
          case dt:
            return "Portal";
          case tt:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case je:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case he:
              var C = h;
              return dr(C) + ".Consumer";
            case Ue:
              var M = h;
              return dr(M._context) + ".Provider";
            case Xe:
              return gr(h, h.render, "ForwardRef");
            case oe:
              var j = h.displayName || null;
              return j !== null ? j : Vn(h.type) || "Memo";
            case Re: {
              var J = h, Se = J._payload, de = J._init;
              try {
                return Vn(de(Se));
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
        var M = function() {
          pr || (pr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function ua(h, C) {
        var M = function() {
          ia || (ia = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function oa(h) {
        if (typeof h.ref == "string" && pt.current && h.__self && pt.current.stateNode !== h.__self) {
          var C = Vn(pt.current.type);
          Jn[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ne = function(h, C, M, j, J, Se, de) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ie,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: de,
          // Record the component responsible for creating this element.
          _owner: Se
        };
        return $e._store = {}, Object.defineProperty($e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($e, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty($e, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
      };
      function ke(h, C, M) {
        var j, J = {}, Se = null, de = null, $e = null, ct = null;
        if (C != null) {
          Sr(C) && (de = C.ref, oa(C)), cn(C) && (Nn(C.key), Se = "" + C.key), $e = C.__self === void 0 ? null : C.__self, ct = C.__source === void 0 ? null : C.__source;
          for (j in C)
            ra.call(C, j) && !aa.hasOwnProperty(j) && (J[j] = C[j]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          J.children = M;
        else if (Ht > 1) {
          for (var $t = Array(Ht), It = 0; It < Ht; It++)
            $t[It] = arguments[It + 2];
          Object.freeze && Object.freeze($t), J.children = $t;
        }
        if (h && h.defaultProps) {
          var Yt = h.defaultProps;
          for (j in Yt)
            J[j] === void 0 && (J[j] = Yt[j]);
        }
        if (Se || de) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && la(J, an), de && ua(J, an);
        }
        return ne(h, Se, de, $e, ct, pt.current, J);
      }
      function ot(h, C) {
        var M = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function At(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, J = Oe({}, h.props), Se = h.key, de = h.ref, $e = h._self, ct = h._source, Ht = h._owner;
        if (C != null) {
          Sr(C) && (de = C.ref, Ht = pt.current), cn(C) && (Nn(C.key), Se = "" + C.key);
          var $t;
          h.type && h.type.defaultProps && ($t = h.type.defaultProps);
          for (j in C)
            ra.call(C, j) && !aa.hasOwnProperty(j) && (C[j] === void 0 && $t !== void 0 ? J[j] = $t[j] : J[j] = C[j]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          J.children = M;
        else if (It > 1) {
          for (var Yt = Array(It), an = 0; an < It; an++)
            Yt[an] = arguments[an + 2];
          J.children = Yt;
        }
        return ne(h.type, Se, de, $e, ct, Ht, J);
      }
      function Lt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ie;
      }
      var bn = ".", pn = ":";
      function vr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(J) {
          return M[J];
        });
        return "$" + j;
      }
      var Bt = !1, In = /\/+/g;
      function jt(h) {
        return h.replace(In, "$&/");
      }
      function Zt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Nn(h.key), vr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, M, j, J) {
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
                case Ie:
                case dt:
                  de = !0;
              }
          }
        if (de) {
          var $e = h, ct = J($e), Ht = j === "" ? bn + Zt($e, 0) : j;
          if (Sn(ct)) {
            var $t = "";
            Ht != null && ($t = jt(Ht) + "/"), Ga(ct, C, $t, "", function($f) {
              return $f;
            });
          } else ct != null && (Lt(ct) && (ct.key && (!$e || $e.key !== ct.key) && Nn(ct.key), ct = ot(
            ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ct.key && (!$e || $e.key !== ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              jt("" + ct.key) + "/"
            ) : "") + Ht
          )), C.push(ct));
          return 1;
        }
        var It, Yt, an = 0, bt = j === "" ? bn : j + pn;
        if (Sn(h))
          for (var _l = 0; _l < h.length; _l++)
            It = h[_l], Yt = bt + Zt(It, _l), an += Ga(It, C, M, Yt, J);
        else {
          var to = lt(h);
          if (typeof to == "function") {
            var os = h;
            to === os.entries && (Bt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var ss = to.call(os), Pi, cs = 0; !(Pi = ss.next()).done; )
              It = Pi.value, Yt = bt + Zt(It, cs++), an += Ga(It, C, M, Yt, J);
          } else if (Se === "object") {
            var fs = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (fs === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : fs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function ba(h, C, M) {
        if (h == null)
          return h;
        var j = [], J = 0;
        return Ga(h, j, "", "", function(Se) {
          return C.call(M, Se, J++);
        }), j;
      }
      function hl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function ru(h, C, M) {
        ba(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function au(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function ml(h) {
        if (!Lt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function qa(h) {
        var C = {
          $$typeof: he,
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
          $$typeof: Ue,
          _context: C
        };
        var M = !1, j = !1, J = !1;
        {
          var Se = {
            $$typeof: he,
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
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(de) {
                J || (it("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", de), J = !0);
              }
            }
          }), C.Consumer = Se;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, Da = 0, Mi = 1, Er = 2;
      function Hr(h) {
        if (h._status === Xa) {
          var C = h._result, M = C();
          if (M.then(function(Se) {
            if (h._status === Da || h._status === Xa) {
              var de = h;
              de._status = Mi, de._result = Se;
            }
          }, function(Se) {
            if (h._status === Da || h._status === Xa) {
              var de = h;
              de._status = Er, de._result = Se;
            }
          }), h._status === Xa) {
            var j = h;
            j._status = Da, j._result = M;
          }
        }
        if (h._status === Mi) {
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
        }, M = {
          $$typeof: Re,
          _payload: C,
          _init: Hr
        };
        {
          var j, J;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Se) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Se, Object.defineProperty(M, "defaultProps", {
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
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Se, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === oe ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Xe,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(j) {
              M = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var yl;
      yl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ee || h === tt || at || h === S || h === te || h === je || Pe || h === ht || Jt || Ct || nn || typeof h == "object" && h !== null && (h.$$typeof === Re || h.$$typeof === oe || h.$$typeof === Ue || h.$$typeof === he || h.$$typeof === Xe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === yl || h.getModuleId !== void 0));
      }
      function W(h, C) {
        R(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: oe,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(M, "displayName", {
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
        return M;
      }
      function q() {
        var h = Ve.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Le(h) {
        var C = q();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function vt(h) {
        var C = q();
        return C.useState(h);
      }
      function Tt(h, C, M) {
        var j = q();
        return j.useReducer(h, C, M);
      }
      function Ae(h) {
        var C = q();
        return C.useRef(h);
      }
      function st(h, C) {
        var M = q();
        return M.useEffect(h, C);
      }
      function Ln(h, C) {
        var M = q();
        return M.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var M = q();
        return M.useLayoutEffect(h, C);
      }
      function fn(h, C) {
        var M = q();
        return M.useCallback(h, C);
      }
      function hr(h, C) {
        var M = q();
        return M.useMemo(h, C);
      }
      function Ft(h, C, M) {
        var j = q();
        return j.useImperativeHandle(h, C, M);
      }
      function ka(h, C) {
        {
          var M = q();
          return M.useDebugValue(h, C);
        }
      }
      function Mn() {
        var h = q();
        return h.useTransition();
      }
      function Vr(h) {
        var C = q();
        return C.useDeferredValue(h);
      }
      function nt() {
        var h = q();
        return h.useId();
      }
      function Ui(h, C, M) {
        var j = q();
        return j.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, gl, Pr, Jo, Cr, Zo, es, ts;
      function iu() {
      }
      iu.__reactDisabledLog = !0;
      function Gu() {
        {
          if (Ai === 0) {
            gl = console.log, Pr = console.info, Jo = console.warn, Cr = console.error, Zo = console.group, es = console.groupCollapsed, ts = console.groupEnd;
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
                value: gl
              }),
              info: Oe({}, h, {
                value: Pr
              }),
              warn: Oe({}, h, {
                value: Jo
              }),
              error: Oe({}, h, {
                value: Cr
              }),
              group: Oe({}, h, {
                value: Zo
              }),
              groupCollapsed: Oe({}, h, {
                value: es
              }),
              groupEnd: Oe({}, h, {
                value: ts
              })
            });
          }
          Ai < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = wt.ReactCurrentDispatcher, Oa;
      function Sl(h, C, M) {
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
      function El(h, C) {
        if (!h || di)
          return "";
        {
          var M = lu.get(h);
          if (M !== void 0)
            return M;
        }
        var j;
        di = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Se;
        Se = fi.current, fi.current = null, Gu();
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
              } catch (bt) {
                j = bt;
              }
              Reflect.construct(h, [], de);
            } else {
              try {
                de.call();
              } catch (bt) {
                j = bt;
              }
              h.call(de.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bt) {
              j = bt;
            }
            h();
          }
        } catch (bt) {
          if (bt && j && typeof bt.stack == "string") {
            for (var $e = bt.stack.split(`
`), ct = j.stack.split(`
`), Ht = $e.length - 1, $t = ct.length - 1; Ht >= 1 && $t >= 0 && $e[Ht] !== ct[$t]; )
              $t--;
            for (; Ht >= 1 && $t >= 0; Ht--, $t--)
              if ($e[Ht] !== ct[$t]) {
                if (Ht !== 1 || $t !== 1)
                  do
                    if (Ht--, $t--, $t < 0 || $e[Ht] !== ct[$t]) {
                      var It = `
` + $e[Ht].replace(" at new ", " at ");
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && lu.set(h, It), It;
                    }
                  while (Ht >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          di = !1, fi.current = Se, ji(), Error.prepareStackTrace = J;
        }
        var Yt = h ? h.displayName || h.name : "", an = Yt ? Sl(Yt) : "";
        return typeof h == "function" && lu.set(h, an), an;
      }
      function ns(h, C, M) {
        return El(h, !1);
      }
      function rs(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function gt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return El(h, rs(h));
        if (typeof h == "string")
          return Sl(h);
        switch (h) {
          case te:
            return Sl("Suspense");
          case je:
            return Sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Xe:
              return ns(h.render);
            case oe:
              return gt(h.type, C, M);
            case Re: {
              var j = h, J = j._payload, Se = j._init;
              try {
                return gt(Se(J), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var as = {}, qu = wt.ReactDebugCurrentFrame;
      function Cl(h) {
        if (h) {
          var C = h._owner, M = gt(h.type, h._source, C ? C.type : null);
          qu.setExtraStackFrame(M);
        } else
          qu.setExtraStackFrame(null);
      }
      function is(h, C, M, j, J) {
        {
          var Se = Function.call.bind(ra);
          for (var de in h)
            if (Se(h, de)) {
              var $e = void 0;
              try {
                if (typeof h[de] != "function") {
                  var ct = Error((j || "React class") + ": " + M + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                $e = h[de](C, de, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                $e = Ht;
              }
              $e && !($e instanceof Error) && (Cl(J), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, de, typeof $e), Cl(null)), $e instanceof Error && !($e.message in as) && (as[$e.message] = !0, Cl(J), B("Failed %s type: %s", M, $e.message), Cl(null));
            }
        }
      }
      function St(h) {
        if (h) {
          var C = h._owner, M = gt(h.type, h._source, C ? C.type : null);
          gn(M);
        } else
          gn(null);
      }
      var Xu;
      Xu = !1;
      function ou() {
        if (pt.current) {
          var h = Vn(pt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ge(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Ka(h) {
        return h != null ? Ge(h.__source) : "";
      }
      var vn = {};
      function Br(h) {
        var C = ou();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Na(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Br(C);
          if (!vn[M]) {
            vn[M] = !0;
            var j = "";
            h && h._owner && h._owner !== pt.current && (j = " It was passed a child from " + Vn(h._owner.type) + "."), St(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), St(null);
          }
        }
      }
      function Rl(h, C) {
        if (typeof h == "object") {
          if (Sn(h))
            for (var M = 0; M < h.length; M++) {
              var j = h[M];
              Lt(j) && Na(j, C);
            }
          else if (Lt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = lt(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Se = J.call(h), de; !(de = Se.next()).done; )
                Lt(de.value) && Na(de.value, C);
          }
        }
      }
      function rn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Xe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === oe))
            M = C.propTypes;
          else
            return;
          if (M) {
            var j = Vn(C);
            is(M, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Xu) {
            Xu = !0;
            var J = Vn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function hn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var j = C[M];
            if (j !== "children" && j !== "key") {
              St(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), St(null);
              break;
            }
          }
          h.ref !== null && (St(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
        }
      }
      function ls(h, C, M) {
        var j = R(h);
        if (!j) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ka(C);
          Se ? J += Se : J += ou();
          var de;
          h === null ? de = "null" : Sn(h) ? de = "array" : h !== void 0 && h.$$typeof === Ie ? (de = "<" + (Vn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, J);
        }
        var $e = ke.apply(this, arguments);
        if ($e == null)
          return $e;
        if (j)
          for (var ct = 2; ct < arguments.length; ct++)
            Rl(arguments[ct], h);
        return h === Ee ? hn($e) : rn($e), $e;
      }
      var Zn = !1;
      function $r(h) {
        var C = ls.bind(null, h);
        return C.type = h, Zn || (Zn = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, M) {
        for (var j = At.apply(this, arguments), J = 2; J < arguments.length; J++)
          Rl(arguments[J], j.type);
        return rn(j), j;
      }
      function Ku(h, C) {
        var M = Nt.transition;
        Nt.transition = {};
        var j = Nt.transition;
        Nt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Nt.transition = M, M === null && j._updatedFibers) {
            var J = j._updatedFibers.size;
            J > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var su = !1, cu = null;
      function Tl(h) {
        if (cu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = F && F[C];
            cu = M.call(F, "timers").setImmediate;
          } catch {
            cu = function(J) {
              su === !1 && (su = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = J, Se.port2.postMessage(void 0);
            };
          }
        return cu(h);
      }
      var La = 0, Fi = !1;
      function fu(h) {
        {
          var C = La;
          La++, Te.current === null && (Te.current = []);
          var M = Te.isBatchingLegacy, j;
          try {
            if (Te.isBatchingLegacy = !0, j = h(), !M && Te.didScheduleLegacyUpdate) {
              var J = Te.current;
              J !== null && (Te.didScheduleLegacyUpdate = !1, Vi(J));
            }
          } catch (Yt) {
            throw Hi(C), Yt;
          } finally {
            Te.isBatchingLegacy = M;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Se = j, de = !1, $e = {
              then: function(Yt, an) {
                de = !0, Se.then(function(bt) {
                  Hi(C), La === 0 ? Ju(bt, Yt, an) : Yt(bt);
                }, function(bt) {
                  Hi(C), an(bt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (Fi = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $e;
          } else {
            var ct = j;
            if (Hi(C), La === 0) {
              var Ht = Te.current;
              Ht !== null && (Vi(Ht), Te.current = null);
              var $t = {
                then: function(Yt, an) {
                  Te.current === null ? (Te.current = [], Ju(ct, Yt, an)) : Yt(ct);
                }
              };
              return $t;
            } else {
              var It = {
                then: function(Yt, an) {
                  Yt(ct);
                }
              };
              return It;
            }
          }
        }
      }
      function Hi(h) {
        h !== La - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function Ju(h, C, M) {
        {
          var j = Te.current;
          if (j !== null)
            try {
              Vi(j), Tl(function() {
                j.length === 0 ? (Te.current = null, C(h)) : Ju(h, C, M);
              });
            } catch (J) {
              M(J);
            }
          else
            C(h);
        }
      }
      var pi = !1;
      function Vi(h) {
        if (!pi) {
          pi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            pi = !1;
          }
        }
      }
      var Zu = ls, us = Ja, Za = $r, eo = {
        map: ba,
        forEach: ru,
        count: hl,
        toArray: au,
        only: ml
      };
      Q.Children = eo, Q.Component = et, Q.Fragment = Ee, Q.Profiler = tt, Q.PureComponent = Pt, Q.StrictMode = S, Q.Suspense = te, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, Q.act = fu, Q.cloneElement = us, Q.createContext = qa, Q.createElement = Zu, Q.createFactory = Za, Q.createRef = Fr, Q.forwardRef = zi, Q.isValidElement = Lt, Q.lazy = sa, Q.memo = W, Q.startTransition = Ku, Q.unstable_act = fu, Q.useCallback = fn, Q.useContext = Le, Q.useDebugValue = ka, Q.useDeferredValue = Vr, Q.useEffect = st, Q.useId = nt, Q.useImperativeHandle = Ft, Q.useInsertionEffect = Ln, Q.useLayoutEffect = Gt, Q.useMemo = hr, Q.useReducer = Tt, Q.useRef = Ae, Q.useState = vt, Q.useSyncExternalStore = Ui, Q.useTransition = Mn, Q.version = ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var uR;
function nv() {
  if (uR) return Bm.exports;
  uR = 1;
  var F = {};
  return F.NODE_ENV === "production" ? Bm.exports = dD() : Bm.exports = pD(), Bm.exports;
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
var oR;
function vD() {
  if (oR) return Jp;
  oR = 1;
  var F = nv(), Q = Symbol.for("react.element"), D = Symbol.for("react.fragment"), ie = Object.prototype.hasOwnProperty, Ie = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(S, tt, Ue) {
    var he, Xe = {}, te = null, je = null;
    Ue !== void 0 && (te = "" + Ue), tt.key !== void 0 && (te = "" + tt.key), tt.ref !== void 0 && (je = tt.ref);
    for (he in tt) ie.call(tt, he) && !dt.hasOwnProperty(he) && (Xe[he] = tt[he]);
    if (S && S.defaultProps) for (he in tt = S.defaultProps, tt) Xe[he] === void 0 && (Xe[he] = tt[he]);
    return { $$typeof: Q, type: S, key: te, ref: je, props: Xe, _owner: Ie.current };
  }
  return Jp.Fragment = D, Jp.jsx = Ee, Jp.jsxs = Ee, Jp;
}
var Zp = {}, sR;
function hD() {
  if (sR) return Zp;
  sR = 1;
  var F = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    var Q = nv(), D = Symbol.for("react.element"), ie = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), tt = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Re = Symbol.iterator, ht = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var W = Re && R[Re] || R[ht];
      return typeof W == "function" ? W : null;
    }
    var sn = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(R) {
      {
        for (var W = arguments.length, q = new Array(W > 1 ? W - 1 : 0), Le = 1; Le < W; Le++)
          q[Le - 1] = arguments[Le];
        Ve("error", R, q);
      }
    }
    function Ve(R, W, q) {
      {
        var Le = sn.ReactDebugCurrentFrame, vt = Le.getStackAddendum();
        vt !== "" && (W += "%s", q = q.concat([vt]));
        var Tt = q.map(function(Ae) {
          return String(Ae);
        });
        Tt.unshift("Warning: " + W), Function.prototype.apply.call(console[R], console, Tt);
      }
    }
    var Nt = !1, Te = !1, pt = !1, We = !1, xn = !1, gn;
    gn = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ie || R === Ee || xn || R === dt || R === he || R === Xe || We || R === oe || Nt || Te || pt || typeof R == "object" && R !== null && (R.$$typeof === je || R.$$typeof === te || R.$$typeof === S || R.$$typeof === tt || R.$$typeof === Ue || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === gn || R.getModuleId !== void 0));
    }
    function Ct(R, W, q) {
      var Le = R.displayName;
      if (Le)
        return Le;
      var vt = W.displayName || W.name || "";
      return vt !== "" ? q + "(" + vt + ")" : q;
    }
    function nn(R) {
      return R.displayName || "Context";
    }
    function Pe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && lt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ie:
          return "Fragment";
        case ie:
          return "Portal";
        case Ee:
          return "Profiler";
        case dt:
          return "StrictMode";
        case he:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case tt:
            var W = R;
            return nn(W) + ".Consumer";
          case S:
            var q = R;
            return nn(q._context) + ".Provider";
          case Ue:
            return Ct(R, R.render, "ForwardRef");
          case te:
            var Le = R.displayName || null;
            return Le !== null ? Le : Pe(R.type) || "Memo";
          case je: {
            var vt = R, Tt = vt._payload, Ae = vt._init;
            try {
              return Pe(Ae(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, wt = 0, it, B, me, le, b, $, Oe;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function et() {
      {
        if (wt === 0) {
          it = console.log, B = console.info, me = console.warn, le = console.error, b = console.group, $ = console.groupCollapsed, Oe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Be,
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
        wt++;
      }
    }
    function ut() {
      {
        if (wt--, wt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, R, {
              value: it
            }),
            info: at({}, R, {
              value: B
            }),
            warn: at({}, R, {
              value: me
            }),
            error: at({}, R, {
              value: le
            }),
            group: at({}, R, {
              value: b
            }),
            groupCollapsed: at({}, R, {
              value: $
            }),
            groupEnd: at({}, R, {
              value: Oe
            })
          });
        }
        wt < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = sn.ReactCurrentDispatcher, ft;
    function Rt(R, W, q) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (vt) {
            var Le = vt.stack.trim().match(/\n( *(at )?)/);
            ft = Le && Le[1] || "";
          }
        return `
` + ft + R;
      }
    }
    var Pt = !1, Xn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Xn = new Fr();
    }
    function fr(R, W) {
      if (!R || Pt)
        return "";
      {
        var q = Xn.get(R);
        if (q !== void 0)
          return q;
      }
      var Le;
      Pt = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = yt.current, yt.current = null, et();
      try {
        if (W) {
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
            } catch (Mn) {
              Le = Mn;
            }
            Reflect.construct(R, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (Mn) {
              Le = Mn;
            }
            R.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mn) {
            Le = Mn;
          }
          R();
        }
      } catch (Mn) {
        if (Mn && Le && typeof Mn.stack == "string") {
          for (var st = Mn.stack.split(`
`), Ln = Le.stack.split(`
`), Gt = st.length - 1, fn = Ln.length - 1; Gt >= 1 && fn >= 0 && st[Gt] !== Ln[fn]; )
            fn--;
          for (; Gt >= 1 && fn >= 0; Gt--, fn--)
            if (st[Gt] !== Ln[fn]) {
              if (Gt !== 1 || fn !== 1)
                do
                  if (Gt--, fn--, fn < 0 || st[Gt] !== Ln[fn]) {
                    var hr = `
` + st[Gt].replace(" at new ", " at ");
                    return R.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", R.displayName)), typeof R == "function" && Xn.set(R, hr), hr;
                  }
                while (Gt >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, yt.current = Tt, ut(), Error.prepareStackTrace = vt;
      }
      var Ft = R ? R.displayName || R.name : "", ka = Ft ? Rt(Ft) : "";
      return typeof R == "function" && Xn.set(R, ka), ka;
    }
    function Sn(R, W, q) {
      return fr(R, !1);
    }
    function Kn(R) {
      var W = R.prototype;
      return !!(W && W.isReactComponent);
    }
    function Hn(R, W, q) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return fr(R, Kn(R));
      if (typeof R == "string")
        return Rt(R);
      switch (R) {
        case he:
          return Rt("Suspense");
        case Xe:
          return Rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ue:
            return Sn(R.render);
          case te:
            return Hn(R.type, W, q);
          case je: {
            var Le = R, vt = Le._payload, Tt = Le._init;
            try {
              return Hn(Tt(vt), W, q);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Nn = {}, gr = sn.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var W = R._owner, q = Hn(R.type, R._source, W ? W.type : null);
        gr.setExtraStackFrame(q);
      } else
        gr.setExtraStackFrame(null);
    }
    function Vn(R, W, q, Le, vt) {
      {
        var Tt = Function.call.bind(wn);
        for (var Ae in R)
          if (Tt(R, Ae)) {
            var st = void 0;
            try {
              if (typeof R[Ae] != "function") {
                var Ln = Error((Le || "React class") + ": " + q + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              st = R[Ae](W, Ae, Le, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              st = Gt;
            }
            st && !(st instanceof Error) && (dr(vt), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", q, Ae, typeof st), dr(null)), st instanceof Error && !(st.message in Nn) && (Nn[st.message] = !0, dr(vt), lt("Failed %s type: %s", q, st.message), dr(null));
          }
      }
    }
    var ra = Array.isArray;
    function aa(R) {
      return ra(R);
    }
    function pr(R) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, q = W && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q;
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
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(R)), Jn(R);
    }
    var cn = sn.ReactCurrentOwner, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ua, oa, ne;
    ne = {};
    function ke(R) {
      if (wn.call(R, "ref")) {
        var W = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ot(R) {
      if (wn.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, W) {
      if (typeof R.ref == "string" && cn.current && W && cn.current.stateNode !== W) {
        var q = Pe(cn.current.type);
        ne[q] || (lt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(cn.current.type), R.ref), ne[q] = !0);
      }
    }
    function Lt(R, W) {
      {
        var q = function() {
          ua || (ua = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function bn(R, W) {
      {
        var q = function() {
          oa || (oa = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var pn = function(R, W, q, Le, vt, Tt, Ae) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: R,
        key: W,
        ref: q,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function vr(R, W, q, Le, vt) {
      {
        var Tt, Ae = {}, st = null, Ln = null;
        q !== void 0 && (Sr(q), st = "" + q), ot(W) && (Sr(W.key), st = "" + W.key), ke(W) && (Ln = W.ref, At(W, vt));
        for (Tt in W)
          wn.call(W, Tt) && !la.hasOwnProperty(Tt) && (Ae[Tt] = W[Tt]);
        if (R && R.defaultProps) {
          var Gt = R.defaultProps;
          for (Tt in Gt)
            Ae[Tt] === void 0 && (Ae[Tt] = Gt[Tt]);
        }
        if (st || Ln) {
          var fn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Lt(Ae, fn), Ln && bn(Ae, fn);
        }
        return pn(R, st, Ln, vt, Le, cn.current, Ae);
      }
    }
    var Bt = sn.ReactCurrentOwner, In = sn.ReactDebugCurrentFrame;
    function jt(R) {
      if (R) {
        var W = R._owner, q = Hn(R.type, R._source, W ? W.type : null);
        In.setExtraStackFrame(q);
      } else
        In.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Ga(R) {
      return typeof R == "object" && R !== null && R.$$typeof === D;
    }
    function ba() {
      {
        if (Bt.current) {
          var R = Pe(Bt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function hl(R) {
      return "";
    }
    var ru = {};
    function au(R) {
      {
        var W = ba();
        if (!W) {
          var q = typeof R == "string" ? R : R.displayName || R.name;
          q && (W = `

Check the top-level render call using <` + q + ">.");
        }
        return W;
      }
    }
    function ml(R, W) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var q = au(W);
        if (ru[q])
          return;
        ru[q] = !0;
        var Le = "";
        R && R._owner && R._owner !== Bt.current && (Le = " It was passed a child from " + Pe(R._owner.type) + "."), jt(R), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Le), jt(null);
      }
    }
    function qa(R, W) {
      {
        if (typeof R != "object")
          return;
        if (aa(R))
          for (var q = 0; q < R.length; q++) {
            var Le = R[q];
            Ga(Le) && ml(Le, W);
          }
        else if (Ga(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var vt = Fn(R);
          if (typeof vt == "function" && vt !== R.entries)
            for (var Tt = vt.call(R), Ae; !(Ae = Tt.next()).done; )
              Ga(Ae.value) && ml(Ae.value, W);
        }
      }
    }
    function Xa(R) {
      {
        var W = R.type;
        if (W == null || typeof W == "string")
          return;
        var q;
        if (typeof W == "function")
          q = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === Ue || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === te))
          q = W.propTypes;
        else
          return;
        if (q) {
          var Le = Pe(W);
          Vn(q, R.props, "prop", Le, R);
        } else if (W.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var vt = Pe(W);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var W = Object.keys(R.props), q = 0; q < W.length; q++) {
          var Le = W[q];
          if (Le !== "children" && Le !== "key") {
            jt(R), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), jt(null);
            break;
          }
        }
        R.ref !== null && (jt(R), lt("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    var Mi = {};
    function Er(R, W, q, Le, vt, Tt) {
      {
        var Ae = Jt(R);
        if (!Ae) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = hl();
          Ln ? st += Ln : st += ba();
          var Gt;
          R === null ? Gt = "null" : aa(R) ? Gt = "array" : R !== void 0 && R.$$typeof === D ? (Gt = "<" + (Pe(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof R, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, st);
        }
        var fn = vr(R, W, q, vt, Tt);
        if (fn == null)
          return fn;
        if (Ae) {
          var hr = W.children;
          if (hr !== void 0)
            if (Le)
              if (aa(hr)) {
                for (var Ft = 0; Ft < hr.length; Ft++)
                  qa(hr[Ft], R);
                Object.freeze && Object.freeze(hr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(hr, R);
        }
        if (wn.call(W, "key")) {
          var ka = Pe(R), Mn = Object.keys(W).filter(function(Ui) {
            return Ui !== "key";
          }), Vr = Mn.length > 0 ? "{key: someKey, " + Mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mi[ka + Vr]) {
            var nt = Mn.length > 0 ? "{" + Mn.join(": ..., ") + ": ...}" : "{}";
            lt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vr, ka, nt, ka), Mi[ka + Vr] = !0;
          }
        }
        return R === Ie ? Da(fn) : Xa(fn), fn;
      }
    }
    function Hr(R, W, q) {
      return Er(R, W, q, !0);
    }
    function sa(R, W, q) {
      return Er(R, W, q, !1);
    }
    var zi = sa, yl = Hr;
    Zp.Fragment = Ie, Zp.jsx = zi, Zp.jsxs = yl;
  }(), Zp;
}
var cR;
function mD() {
  if (cR) return Pm.exports;
  cR = 1;
  var F = {};
  return F.NODE_ENV === "production" ? Pm.exports = vD() : Pm.exports = hD(), Pm.exports;
}
var Qe = mD(), R0 = nv(), Bf = {}, $m = { exports: {} }, Qa = {}, Im = { exports: {} }, m0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function yD() {
  return fR || (fR = 1, function(F) {
    function Q(B, me) {
      var le = B.length;
      B.push(me);
      e: for (; 0 < le; ) {
        var b = le - 1 >>> 1, $ = B[b];
        if (0 < Ie($, me)) B[b] = me, B[le] = $, le = b;
        else break e;
      }
    }
    function D(B) {
      return B.length === 0 ? null : B[0];
    }
    function ie(B) {
      if (B.length === 0) return null;
      var me = B[0], le = B.pop();
      if (le !== me) {
        B[0] = le;
        e: for (var b = 0, $ = B.length, Oe = $ >>> 1; b < Oe; ) {
          var Be = 2 * (b + 1) - 1, et = B[Be], ut = Be + 1, yt = B[ut];
          if (0 > Ie(et, le)) ut < $ && 0 > Ie(yt, et) ? (B[b] = yt, B[ut] = le, b = ut) : (B[b] = et, B[Be] = le, b = Be);
          else if (ut < $ && 0 > Ie(yt, le)) B[b] = yt, B[ut] = le, b = ut;
          else break e;
        }
      }
      return me;
    }
    function Ie(B, me) {
      var le = B.sortIndex - me.sortIndex;
      return le !== 0 ? le : B.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var dt = performance;
      F.unstable_now = function() {
        return dt.now();
      };
    } else {
      var Ee = Date, S = Ee.now();
      F.unstable_now = function() {
        return Ee.now() - S;
      };
    }
    var tt = [], Ue = [], he = 1, Xe = null, te = 3, je = !1, oe = !1, Re = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function lt(B) {
      for (var me = D(Ue); me !== null; ) {
        if (me.callback === null) ie(Ue);
        else if (me.startTime <= B) ie(Ue), me.sortIndex = me.expirationTime, Q(tt, me);
        else break;
        me = D(Ue);
      }
    }
    function Ve(B) {
      if (Re = !1, lt(B), !oe) if (D(tt) !== null) oe = !0, wt(Nt);
      else {
        var me = D(Ue);
        me !== null && it(Ve, me.startTime - B);
      }
    }
    function Nt(B, me) {
      oe = !1, Re && (Re = !1, Fn(We), We = -1), je = !0;
      var le = te;
      try {
        for (lt(me), Xe = D(tt); Xe !== null && (!(Xe.expirationTime > me) || B && !Jt()); ) {
          var b = Xe.callback;
          if (typeof b == "function") {
            Xe.callback = null, te = Xe.priorityLevel;
            var $ = b(Xe.expirationTime <= me);
            me = F.unstable_now(), typeof $ == "function" ? Xe.callback = $ : Xe === D(tt) && ie(tt), lt(me);
          } else ie(tt);
          Xe = D(tt);
        }
        if (Xe !== null) var Oe = !0;
        else {
          var Be = D(Ue);
          Be !== null && it(Ve, Be.startTime - me), Oe = !1;
        }
        return Oe;
      } finally {
        Xe = null, te = le, je = !1;
      }
    }
    var Te = !1, pt = null, We = -1, xn = 5, gn = -1;
    function Jt() {
      return !(F.unstable_now() - gn < xn);
    }
    function Ct() {
      if (pt !== null) {
        var B = F.unstable_now();
        gn = B;
        var me = !0;
        try {
          me = pt(!0, B);
        } finally {
          me ? nn() : (Te = !1, pt = null);
        }
      } else Te = !1;
    }
    var nn;
    if (typeof sn == "function") nn = function() {
      sn(Ct);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), at = Pe.port2;
      Pe.port1.onmessage = Ct, nn = function() {
        at.postMessage(null);
      };
    } else nn = function() {
      ht(Ct, 0);
    };
    function wt(B) {
      pt = B, Te || (Te = !0, nn());
    }
    function it(B, me) {
      We = ht(function() {
        B(F.unstable_now());
      }, me);
    }
    F.unstable_IdlePriority = 5, F.unstable_ImmediatePriority = 1, F.unstable_LowPriority = 4, F.unstable_NormalPriority = 3, F.unstable_Profiling = null, F.unstable_UserBlockingPriority = 2, F.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, F.unstable_continueExecution = function() {
      oe || je || (oe = !0, wt(Nt));
    }, F.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, F.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, F.unstable_getFirstCallbackNode = function() {
      return D(tt);
    }, F.unstable_next = function(B) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = te;
      }
      var le = te;
      te = me;
      try {
        return B();
      } finally {
        te = le;
      }
    }, F.unstable_pauseExecution = function() {
    }, F.unstable_requestPaint = function() {
    }, F.unstable_runWithPriority = function(B, me) {
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
      var le = te;
      te = B;
      try {
        return me();
      } finally {
        te = le;
      }
    }, F.unstable_scheduleCallback = function(B, me, le) {
      var b = F.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? b + le : b) : le = b, B) {
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
      return $ = le + $, B = { id: he++, callback: me, priorityLevel: B, startTime: le, expirationTime: $, sortIndex: -1 }, le > b ? (B.sortIndex = le, Q(Ue, B), D(tt) === null && B === D(Ue) && (Re ? (Fn(We), We = -1) : Re = !0, it(Ve, le - b))) : (B.sortIndex = $, Q(tt, B), oe || je || (oe = !0, wt(Nt))), B;
    }, F.unstable_shouldYield = Jt, F.unstable_wrapCallback = function(B) {
      var me = te;
      return function() {
        var le = te;
        te = me;
        try {
          return B.apply(this, arguments);
        } finally {
          te = le;
        }
      };
    };
  }(m0)), m0;
}
var y0 = {}, dR;
function gD() {
  return dR || (dR = 1, function(F) {
    var Q = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Q.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, ie = !1, Ie = 5;
      function dt(ne, ke) {
        var ot = ne.length;
        ne.push(ke), tt(ne, ke, ot);
      }
      function Ee(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var ke = ne[0], ot = ne.pop();
        return ot !== ke && (ne[0] = ot, Ue(ne, ot, 0)), ke;
      }
      function tt(ne, ke, ot) {
        for (var At = ot; At > 0; ) {
          var Lt = At - 1 >>> 1, bn = ne[Lt];
          if (he(bn, ke) > 0)
            ne[Lt] = ke, ne[At] = bn, At = Lt;
          else
            return;
        }
      }
      function Ue(ne, ke, ot) {
        for (var At = ot, Lt = ne.length, bn = Lt >>> 1; At < bn; ) {
          var pn = (At + 1) * 2 - 1, vr = ne[pn], Bt = pn + 1, In = ne[Bt];
          if (he(vr, ke) < 0)
            Bt < Lt && he(In, vr) < 0 ? (ne[At] = In, ne[Bt] = ke, At = Bt) : (ne[At] = vr, ne[pn] = ke, At = pn);
          else if (Bt < Lt && he(In, ke) < 0)
            ne[At] = In, ne[Bt] = ke, At = Bt;
          else
            return;
        }
      }
      function he(ne, ke) {
        var ot = ne.sortIndex - ke.sortIndex;
        return ot !== 0 ? ot : ne.id - ke.id;
      }
      var Xe = 1, te = 2, je = 3, oe = 4, Re = 5;
      function ht(ne, ke) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var sn = performance;
        F.unstable_now = function() {
          return sn.now();
        };
      } else {
        var lt = Date, Ve = lt.now();
        F.unstable_now = function() {
          return lt.now() - Ve;
        };
      }
      var Nt = 1073741823, Te = -1, pt = 250, We = 5e3, xn = 1e4, gn = Nt, Jt = [], Ct = [], nn = 1, Pe = null, at = je, wt = !1, it = !1, B = !1, me = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ne) {
        for (var ke = Ee(Ct); ke !== null; ) {
          if (ke.callback === null)
            S(Ct);
          else if (ke.startTime <= ne)
            S(Ct), ke.sortIndex = ke.expirationTime, dt(Jt, ke);
          else
            return;
          ke = Ee(Ct);
        }
      }
      function Oe(ne) {
        if (B = !1, $(ne), !it)
          if (Ee(Jt) !== null)
            it = !0, Sr(Be);
          else {
            var ke = Ee(Ct);
            ke !== null && cn(Oe, ke.startTime - ne);
          }
      }
      function Be(ne, ke) {
        it = !1, B && (B = !1, la()), wt = !0;
        var ot = at;
        try {
          var At;
          if (!ie) return et(ne, ke);
        } finally {
          Pe = null, at = ot, wt = !1;
        }
      }
      function et(ne, ke) {
        var ot = ke;
        for ($(ot), Pe = Ee(Jt); Pe !== null && !D && !(Pe.expirationTime > ot && (!ne || dr())); ) {
          var At = Pe.callback;
          if (typeof At == "function") {
            Pe.callback = null, at = Pe.priorityLevel;
            var Lt = Pe.expirationTime <= ot, bn = At(Lt);
            ot = F.unstable_now(), typeof bn == "function" ? Pe.callback = bn : Pe === Ee(Jt) && S(Jt), $(ot);
          } else
            S(Jt);
          Pe = Ee(Jt);
        }
        if (Pe !== null)
          return !0;
        var pn = Ee(Ct);
        return pn !== null && cn(Oe, pn.startTime - ot), !1;
      }
      function ut(ne, ke) {
        switch (ne) {
          case Xe:
          case te:
          case je:
          case oe:
          case Re:
            break;
          default:
            ne = je;
        }
        var ot = at;
        at = ne;
        try {
          return ke();
        } finally {
          at = ot;
        }
      }
      function yt(ne) {
        var ke;
        switch (at) {
          case Xe:
          case te:
          case je:
            ke = je;
            break;
          default:
            ke = at;
            break;
        }
        var ot = at;
        at = ke;
        try {
          return ne();
        } finally {
          at = ot;
        }
      }
      function ft(ne) {
        var ke = at;
        return function() {
          var ot = at;
          at = ke;
          try {
            return ne.apply(this, arguments);
          } finally {
            at = ot;
          }
        };
      }
      function Rt(ne, ke, ot) {
        var At = F.unstable_now(), Lt;
        if (typeof ot == "object" && ot !== null) {
          var bn = ot.delay;
          typeof bn == "number" && bn > 0 ? Lt = At + bn : Lt = At;
        } else
          Lt = At;
        var pn;
        switch (ne) {
          case Xe:
            pn = Te;
            break;
          case te:
            pn = pt;
            break;
          case Re:
            pn = gn;
            break;
          case oe:
            pn = xn;
            break;
          case je:
          default:
            pn = We;
            break;
        }
        var vr = Lt + pn, Bt = {
          id: nn++,
          callback: ke,
          priorityLevel: ne,
          startTime: Lt,
          expirationTime: vr,
          sortIndex: -1
        };
        return Lt > At ? (Bt.sortIndex = Lt, dt(Ct, Bt), Ee(Jt) === null && Bt === Ee(Ct) && (B ? la() : B = !0, cn(Oe, Lt - At))) : (Bt.sortIndex = vr, dt(Jt, Bt), !it && !wt && (it = !0, Sr(Be))), Bt;
      }
      function Pt() {
      }
      function Xn() {
        !it && !wt && (it = !0, Sr(Be));
      }
      function Fr() {
        return Ee(Jt);
      }
      function fr(ne) {
        ne.callback = null;
      }
      function Sn() {
        return at;
      }
      var Kn = !1, Hn = null, wn = -1, Nn = Ie, gr = -1;
      function dr() {
        var ne = F.unstable_now() - gr;
        return !(ne < Nn);
      }
      function Vn() {
      }
      function ra(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Nn = Math.floor(1e3 / ne) : Nn = Ie;
      }
      var aa = function() {
        if (Hn !== null) {
          var ne = F.unstable_now();
          gr = ne;
          var ke = !0, ot = !0;
          try {
            ot = Hn(ke, ne);
          } finally {
            ot ? pr() : (Kn = !1, Hn = null);
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
          me(aa, 0);
        };
      function Sr(ne) {
        Hn = ne, Kn || (Kn = !0, pr());
      }
      function cn(ne, ke) {
        wn = me(function() {
          ne(F.unstable_now());
        }, ke);
      }
      function la() {
        le(wn), wn = -1;
      }
      var ua = Vn, oa = null;
      F.unstable_IdlePriority = Re, F.unstable_ImmediatePriority = Xe, F.unstable_LowPriority = oe, F.unstable_NormalPriority = je, F.unstable_Profiling = oa, F.unstable_UserBlockingPriority = te, F.unstable_cancelCallback = fr, F.unstable_continueExecution = Xn, F.unstable_forceFrameRate = ra, F.unstable_getCurrentPriorityLevel = Sn, F.unstable_getFirstCallbackNode = Fr, F.unstable_next = yt, F.unstable_pauseExecution = Pt, F.unstable_requestPaint = ua, F.unstable_runWithPriority = ut, F.unstable_scheduleCallback = Rt, F.unstable_shouldYield = dr, F.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(y0)), y0;
}
var pR;
function ER() {
  if (pR) return Im.exports;
  pR = 1;
  var F = {};
  return F.NODE_ENV === "production" ? Im.exports = yD() : Im.exports = gD(), Im.exports;
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
var vR;
function SD() {
  if (vR) return Qa;
  vR = 1;
  var F = nv(), Q = ER();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ie = /* @__PURE__ */ new Set(), Ie = {};
  function dt(n, r) {
    Ee(n, r), Ee(n + "Capture", r);
  }
  function Ee(n, r) {
    for (Ie[n] = r, n = 0; n < r.length; n++) ie.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tt = Object.prototype.hasOwnProperty, Ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, he = {}, Xe = {};
  function te(n) {
    return tt.call(Xe, n) ? !0 : tt.call(he, n) ? !1 : Ue.test(n) ? Xe[n] = !0 : (he[n] = !0, !1);
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
  function Re(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new Re(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ht[r] = new Re(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new Re(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new Re(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new Re(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new Re(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new Re(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new Re(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new Re(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    ht[r] = new Re(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Fn, sn);
    ht[r] = new Re(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Fn, sn);
    ht[r] = new Re(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new Re(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new Re(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function lt(n, r, l, o) {
    var c = ht.hasOwnProperty(r) ? ht[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (oe(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ve = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nt = Symbol.for("react.element"), Te = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Jt = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, b;
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
  function Be(n, r) {
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
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case pt:
        return "Fragment";
      case Te:
        return "Portal";
      case xn:
        return "Profiler";
      case We:
        return "StrictMode";
      case nn:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Jt:
        return (n.displayName || "Context") + ".Consumer";
      case gn:
        return (n._context.displayName || "Context") + ".Provider";
      case Ct:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case at:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case wt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function yt(n) {
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
        return ut(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
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
  function ft(n) {
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
  function Rt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pt(n) {
    var r = Rt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Pt(n));
  }
  function Fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Rt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Kn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ft(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && lt(n, "checked", r, !1);
  }
  function wn(n, r) {
    Hn(n, r);
    var l = ft(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? gr(n, r.type, l) : r.hasOwnProperty("defaultValue") && gr(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Nn(n, r, l) {
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
  function Vn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ft(l), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function aa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(D(92));
        if (dr(l)) {
          if (1 < l.length) throw Error(D(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ft(l) };
  }
  function pr(n, r) {
    var l = ft(r.value), o = ft(r.defaultValue);
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
  function ke(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || oa.hasOwnProperty(n) && oa[n] ? ("" + r).trim() : r + "px";
  }
  function ot(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ke(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var At = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Lt(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(D(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(D(62));
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
  var Bt = null, In = null, jt = null;
  function Zt(n) {
    if (n = hi(n)) {
      if (typeof Bt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = Dc(r), Bt(n.stateNode, n.type, r));
    }
  }
  function Ga(n) {
    In ? jt ? jt.push(n) : jt = [n] : In = n;
  }
  function ba() {
    if (In) {
      var n = In, r = jt;
      if (jt = In = null, Zt(n), r) for (n = 0; n < r.length; n++) Zt(r[n]);
    }
  }
  function hl(n, r) {
    return n(r);
  }
  function ru() {
  }
  var au = !1;
  function ml(n, r, l) {
    if (au) return n(r, l);
    au = !0;
    try {
      return hl(n, r, l);
    } finally {
      au = !1, (In !== null || jt !== null) && (ru(), ba());
    }
  }
  function qa(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Dc(l);
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
    if (l && typeof l != "function") throw Error(D(231, r, typeof l));
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
  function Mi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (G) {
      this.onError(G);
    }
  }
  var Er = !1, Hr = null, sa = !1, zi = null, yl = { onError: function(n) {
    Er = !0, Hr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Er = !1, Hr = null, Mi.apply(yl, arguments);
  }
  function W(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Er) {
      if (Er) {
        var U = Hr;
        Er = !1, Hr = null;
      } else throw Error(D(198));
      sa || (sa = !0, zi = U);
    }
  }
  function q(n) {
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
  function Le(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function vt(n) {
    if (q(n) !== n) throw Error(D(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = q(n), r === null) throw Error(D(188));
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
          if (d === l) return vt(c), n;
          if (d === o) return vt(c), r;
          d = d.sibling;
        }
        throw Error(D(188));
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
          if (!m) throw Error(D(189));
        }
      }
      if (l.alternate !== o) throw Error(D(190));
    }
    if (l.tag !== 3) throw Error(D(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ae(n) {
    return n = Tt(n), n !== null ? st(n) : null;
  }
  function st(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = st(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Ln = Q.unstable_scheduleCallback, Gt = Q.unstable_cancelCallback, fn = Q.unstable_shouldYield, hr = Q.unstable_requestPaint, Ft = Q.unstable_now, ka = Q.unstable_getCurrentPriorityLevel, Mn = Q.unstable_ImmediatePriority, Vr = Q.unstable_UserBlockingPriority, nt = Q.unstable_NormalPriority, Ui = Q.unstable_LowPriority, Ai = Q.unstable_IdlePriority, gl = null, Pr = null;
  function Jo(n) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function") try {
      Pr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cr = Math.clz32 ? Math.clz32 : ts, Zo = Math.log, es = Math.LN2;
  function ts(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Zo(n) / es | 0) | 0;
  }
  var iu = 64, Gu = 4194304;
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
  function Sl(n, r) {
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
  function El(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Cr(r), n[r] = l;
  }
  function ns(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Cr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function rs(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Cr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var gt = 0;
  function as(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qu, Cl, is, St, Xu, ou = !1, Ge = [], Ka = null, vn = null, Br = null, Na = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), rn = [], hn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ls(n, r) {
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
        Na.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function Zn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = hi(r), r !== null && Cl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
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
        return Na.set(d, Zn(Na.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, Zn(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Gi(n.target);
    if (r !== null) {
      var l = q(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Le(l), r !== null) {
            n.blockedOn = r, Xu(n.priority, function() {
              is(l);
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
  function Ku(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Zu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        pn = o, l.target.dispatchEvent(o), pn = null;
      } else return r = hi(l), r !== null && Cl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    Ku(n) && l.delete(r);
  }
  function cu() {
    ou = !1, Ka !== null && Ku(Ka) && (Ka = null), vn !== null && Ku(vn) && (vn = null), Br !== null && Ku(Br) && (Br = null), Na.forEach(su), Rl.forEach(su);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ou || (ou = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, cu)));
  }
  function La(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < Ge.length) {
      Tl(Ge[0], n);
      for (var l = 1; l < Ge.length; l++) {
        var o = Ge[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ka !== null && Tl(Ka, n), vn !== null && Tl(vn, n), Br !== null && Tl(Br, n), Na.forEach(r), Rl.forEach(r), l = 0; l < rn.length; l++) o = rn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < rn.length && (l = rn[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && rn.shift();
  }
  var Fi = Ve.ReactCurrentBatchConfig, fu = !0;
  function Hi(n, r, l, o) {
    var c = gt, d = Fi.transition;
    Fi.transition = null;
    try {
      gt = 1, pi(n, r, l, o);
    } finally {
      gt = c, Fi.transition = d;
    }
  }
  function Ju(n, r, l, o) {
    var c = gt, d = Fi.transition;
    Fi.transition = null;
    try {
      gt = 4, pi(n, r, l, o);
    } finally {
      gt = c, Fi.transition = d;
    }
  }
  function pi(n, r, l, o) {
    if (fu) {
      var c = Zu(n, r, l, o);
      if (c === null) td(n, r, o, Vi, l), ls(n, o);
      else if ($r(c, n, r, l, o)) o.stopPropagation();
      else if (ls(n, o), r & 4 && -1 < hn.indexOf(n)) {
        for (; c !== null; ) {
          var d = hi(c);
          if (d !== null && qu(d), d = Zu(n, r, l, o), d === null && td(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else td(n, r, o, null, l);
    }
  }
  var Vi = null;
  function Zu(n, r, l, o) {
    if (Vi = null, n = vr(o), n = Gi(n), n !== null) if (r = q(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Le(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function us(n) {
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
          case Mn:
            return 1;
          case Vr:
            return 4;
          case nt:
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
  var Za = null, eo = null, h = null;
  function C() {
    if (h) return h;
    var n, r = eo, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
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
    return le(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, $e = Se(de), ct = le({}, de, { view: 0, detail: 0 }), Ht = Se(ct), $t, It, Yt, an = le({}, ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Yt && (Yt && n.type === "mousemove" ? ($t = n.screenX - Yt.screenX, It = n.screenY - Yt.screenY) : It = $t = 0, Yt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : It;
  } }), bt = Se(an), _l = le({}, an, { dataTransfer: 0 }), to = Se(_l), os = le({}, ct, { relatedTarget: 0 }), ss = Se(os), Pi = le({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cs = Se(Pi), fs = le({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $f = Se(fs), Ym = le({}, de, { data: 0 }), rv = Se(Ym), av = {
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
  }, If = {
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
  function gc() {
    return lv;
  }
  var Qm = le({}, ct, { key: function(n) {
    if (n.key) {
      var r = av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? If[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = Se(Qm), Wm = le({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = Se(Wm), Yf = le({}, ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gc }), Qf = Se(Yf), Gm = le({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ec = Se(Gm), uv = le({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ir = Se(uv), $i = [9, 13, 27, 32], En = S && "CompositionEvent" in window, ca = null;
  S && "documentMode" in document && (ca = document.documentMode);
  var Wf = S && "TextEvent" in window && !ca, ds = S && (!En || ca && 8 < ca && 11 >= ca), ov = " ", no = !1;
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
  var xl = !1;
  function qm(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (no = !0, ov);
      case "textInput":
        return n = r.data, n === ov && no ? null : n;
      default:
        return null;
    }
  }
  function Xm(n, r) {
    if (xl) return n === "compositionend" || !En && sv(n, r) ? (n = C(), h = eo = Za = null, xl = !1, n) : null;
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
        return ds && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Ga(o), r = wc(r, "onChange"), 0 < r.length && (l = new $e("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ps = null, vs = null;
  function dv(n) {
    Dv(n, 0);
  }
  function Ii(n) {
    var r = lo(n);
    if (Fr(r)) return n;
  }
  function qf(n, r) {
    if (n === "change") return r;
  }
  var Xf = !1;
  if (S) {
    var Cc;
    if (S) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), Kf = typeof pv.oninput == "function";
      }
      Cc = Kf;
    } else Cc = !1;
    Xf = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    ps && (ps.detachEvent("onpropertychange", hv), vs = ps = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Ii(vs)) {
      var r = [];
      fv(r, vs, n, vr(n)), ml(dv, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (vv(), ps = r, vs = l, ps.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function Zm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ii(vs);
  }
  function ey(n, r) {
    if (n === "click") return Ii(r);
  }
  function ty(n, r) {
    if (n === "input" || n === "change") return Ii(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : mv;
  function ro(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!tt.call(r, c) || !ei(n[c], r[c])) return !1;
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
  function hs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function du(n) {
    var r = Ev(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && hs(l)) {
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
  var Rc = S && "documentMode" in document && 11 >= document.documentMode, pu = null, wl = null, ms = null, Jf = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || pu == null || pu !== fr(o) || (o = pu, "selectionStart" in o && hs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ms && ro(ms, o) || (ms = o, o = wc(wl, "onSelect"), 0 < o.length && (r = new $e("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = pu)));
  }
  function Tc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ao = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, _c = {}, Rv = {};
  S && (Rv = document.createElement("div").style, "AnimationEvent" in window || (delete ao.animationend.animation, delete ao.animationiteration.animation, delete ao.animationstart.animation), "TransitionEvent" in window || delete ao.transitionend.transition);
  function ys(n) {
    if (_c[n]) return _c[n];
    if (!ao[n]) return n;
    var r = ao[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Rv) return _c[n] = r[l];
    return n;
  }
  var mr = ys("animationend"), Zf = ys("animationiteration"), Tv = ys("animationstart"), _v = ys("transitionend"), xv = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function bl(n, r) {
    xv.set(n, r), dt(r, [n]);
  }
  for (var xc = 0; xc < wv.length; xc++) {
    var gs = wv[xc], Ss = gs.toLowerCase(), ny = gs[0].toUpperCase() + gs.slice(1);
    bl(Ss, "on" + ny);
  }
  bl(mr, "onAnimationEnd"), bl(Zf, "onAnimationIteration"), bl(Tv, "onAnimationStart"), bl("dblclick", "onDoubleClick"), bl("focusin", "onFocus"), bl("focusout", "onBlur"), bl(_v, "onTransitionEnd"), Ee("onMouseEnter", ["mouseout", "mouseover"]), Ee("onMouseLeave", ["mouseout", "mouseover"]), Ee("onPointerEnter", ["pointerout", "pointerover"]), Ee("onPointerLeave", ["pointerout", "pointerover"]), dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
  function bv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, W(o, r, void 0, n), n.currentTarget = null;
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
  function Es(n, r, l) {
    var o = 0;
    r && (o |= 4), ed(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, ie.forEach(function(l) {
        l !== "selectionchange" && (ry.has(l) || Es(l, !1, n), Es(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Es("selectionchange", !1, r));
    }
  }
  function ed(n, r, l, o) {
    switch (us(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = Ju;
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
    ml(function() {
      var U = d, G = vr(l), X = [];
      e: {
        var Y = xv.get(n);
        if (Y !== void 0) {
          var ce = $e, ye = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Bi;
              break;
            case "focusin":
              ye = "focus", ce = ss;
              break;
            case "focusout":
              ye = "blur", ce = ss;
              break;
            case "beforeblur":
            case "afterblur":
              ce = ss;
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
              ce = bt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = to;
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
              ce = cs;
              break;
            case _v:
              ce = Ec;
              break;
            case "scroll":
              ce = Ht;
              break;
            case "wheel":
              ce = Ir;
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
              ce = Sc;
          }
          var Ce = (r & 4) !== 0, kn = !Ce && n === "scroll", k = Ce ? Y !== null ? Y + "Capture" : null : Y;
          Ce = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var Z = L.stateNode;
            if (L.tag === 5 && Z !== null && (L = Z, k !== null && (Z = qa(x, k), Z != null && Ce.push(io(x, Z, L)))), kn) break;
            x = x.return;
          }
          0 < Ce.length && (Y = new ce(Y, ye, null, l, G), X.push({ event: Y, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Y && l !== pn && (ye = l.relatedTarget || l.fromElement) && (Gi(ye) || ye[ti])) break e;
          if ((ce || Y) && (Y = G.window === G ? G : (Y = G.ownerDocument) ? Y.defaultView || Y.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = U, ye = ye ? Gi(ye) : null, ye !== null && (kn = q(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = U), ce !== ye)) {
            if (Ce = bt, Z = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = Sc, Z = "onPointerLeave", k = "onPointerEnter", x = "pointer"), kn = ce == null ? Y : lo(ce), L = ye == null ? Y : lo(ye), Y = new Ce(Z, x + "leave", ce, l, G), Y.target = kn, Y.relatedTarget = L, Z = null, Gi(G) === U && (Ce = new Ce(k, x + "enter", ye, l, G), Ce.target = L, Ce.relatedTarget = kn, Z = Ce), kn = Z, ce && ye) t: {
              for (Ce = ce, k = ye, x = 0, L = Ce; L; L = vu(L)) x++;
              for (L = 0, Z = k; Z; Z = vu(Z)) L++;
              for (; 0 < x - L; ) Ce = vu(Ce), x--;
              for (; 0 < L - x; ) k = vu(k), L--;
              for (; x--; ) {
                if (Ce === k || k !== null && Ce === k.alternate) break t;
                Ce = vu(Ce), k = vu(k);
              }
              Ce = null;
            }
            else Ce = null;
            ce !== null && nd(X, Y, ce, Ce, !1), ye !== null && kn !== null && nd(X, kn, ye, Ce, !0);
          }
        }
        e: {
          if (Y = U ? lo(U) : window, ce = Y.nodeName && Y.nodeName.toLowerCase(), ce === "select" || ce === "input" && Y.type === "file") var xe = qf;
          else if (Gf(Y)) if (Xf) xe = ty;
          else {
            xe = Zm;
            var Fe = Jm;
          }
          else (ce = Y.nodeName) && ce.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (xe = ey);
          if (xe && (xe = xe(n, U))) {
            fv(X, xe, l, G);
            break e;
          }
          Fe && Fe(n, Y, U), n === "focusout" && (Fe = Y._wrapperState) && Fe.controlled && Y.type === "number" && gr(Y, "number", Y.value);
        }
        switch (Fe = U ? lo(U) : window, n) {
          case "focusin":
            (Gf(Fe) || Fe.contentEditable === "true") && (pu = Fe, wl = U, ms = null);
            break;
          case "focusout":
            ms = wl = pu = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, Cv(X, l, G);
            break;
          case "selectionchange":
            if (Rc) break;
          case "keydown":
          case "keyup":
            Cv(X, l, G);
        }
        var He;
        if (En) e: {
          switch (n) {
            case "compositionstart":
              var be = "onCompositionStart";
              break e;
            case "compositionend":
              be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              be = "onCompositionUpdate";
              break e;
          }
          be = void 0;
        }
        else xl ? sv(n, l) && (be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (be = "onCompositionStart");
        be && (ds && l.locale !== "ko" && (xl || be !== "onCompositionStart" ? be === "onCompositionEnd" && xl && (He = C()) : (Za = G, eo = "value" in Za ? Za.value : Za.textContent, xl = !0)), Fe = wc(U, be), 0 < Fe.length && (be = new rv(be, n, null, l, G), X.push({ event: be, listeners: Fe }), He ? be.data = He : (He = cv(l), He !== null && (be.data = He)))), (He = Wf ? qm(n, l) : Xm(n, l)) && (U = wc(U, "onBeforeInput"), 0 < U.length && (G = new rv("onBeforeInput", "beforeinput", null, l, G), X.push({ event: G, listeners: U }), G.data = He));
      }
      Dv(X, r);
    });
  }
  function io(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = qa(n, l), d != null && o.unshift(io(n, d, c)), d = qa(n, r), d != null && o.push(io(n, d, c))), n = n.return;
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
      E.tag === 5 && U !== null && (E = U, c ? (T = qa(l, d), T != null && m.unshift(io(l, T, E))) : c || (T = qa(l, d), T != null && m.push(io(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var kv = /\r\n?/g, rd = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(kv, `
`).replace(rd, "");
  }
  function Cs(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(D(425));
  }
  function bc() {
  }
  var ad = null, id = null;
  function hu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rs = typeof setTimeout == "function" ? setTimeout : void 0, Ts = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, Nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(ud);
  } : Rs;
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
          n.removeChild(c), La(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    La(r);
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
  function _s(n) {
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
  var Wi = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + Wi, xs = "__reactProps$" + Wi, ti = "__reactContainer$" + Wi, sd = "__reactEvents$" + Wi, ay = "__reactListeners$" + Wi, iy = "__reactHandles$" + Wi;
  function Gi(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ti] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = _s(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = _s(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function hi(n) {
    return n = n[Ma] || n[ti], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function lo(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(D(33));
  }
  function Dc(n) {
    return n[xs] || null;
  }
  var Me = [], ni = -1;
  function Xt(n) {
    return { current: n };
  }
  function _e(n) {
    0 > ni || (n.current = Me[ni], Me[ni] = null, ni--);
  }
  function Mt(n, r) {
    ni++, Me[ni] = n.current, n.current = r;
  }
  var za = {}, Yn = Xt(za), Ke = Xt(!1), Rr = za;
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
  function Yr() {
    _e(Ke), _e(Yn);
  }
  function mi(n, r, l) {
    if (Yn.current !== za) throw Error(D(168));
    Mt(Yn, r), Mt(Ke, l);
  }
  function Dl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, yt(n) || "Unknown", c));
    return le({}, l, o);
  }
  function mu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || za, Rr = Yn.current, Mt(Yn, n), Mt(Ke, Ke.current), !0;
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = Dl(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, _e(Ke), _e(Yn), Mt(Yn, n)) : _e(Ke), Mt(Ke, l);
  }
  var qi = null, kl = !1, er = !1;
  function kc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Mv(n) {
    kl = !0, kc(n);
  }
  function yi() {
    if (!er && qi !== null) {
      er = !0;
      var n = 0, r = gt;
      try {
        var l = qi;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, kl = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), Ln(Mn, yi), c;
      } finally {
        gt = r, er = !1;
      }
    }
    return null;
  }
  var Ua = [], Ol = 0, Aa = null, yu = 0, Qr = [], Wr = 0, ri = null, Gr = 1, tr = "";
  function gu(n, r) {
    Ua[Ol++] = yu, Ua[Ol++] = Aa, Aa = n, yu = r;
  }
  function Nl(n, r, l) {
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
  function Oc(n) {
    n.return !== null && (gu(n, 1), Nl(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Aa; ) Aa = Ua[--Ol], Ua[Ol] = null, yu = Ua[--Ol], Ua[Ol] = null;
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
          if (dd(n)) throw Error(D(418));
          r = fa(l.nextSibling);
          var o = pa;
          r && fd(n, r) ? cd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, pa = n);
        }
      } else {
        if (dd(n)) throw Error(D(418));
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
      if (dd(n)) throw zv(), Error(D(418));
      for (; r; ) cd(n, r), r = fa(r.nextSibling);
    }
    if (pd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(D(317));
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
  function uo() {
    va = pa = null, ln = !1;
  }
  function Un(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var ly = Ve.ReactCurrentBatchConfig;
  function Ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(D(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(D(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(D(284));
      if (!l._owner) throw Error(D(290, n));
    }
    return n;
  }
  function oo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ml(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Il(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, L, Z) {
      return x === null || x.tag !== 6 ? (x = Wd(L, k.mode, Z), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, Z) {
      var xe = L.type;
      return xe === pt ? G(k, x, L.props.children, Z, L.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === wt && Ml(xe) === x.type) ? (Z = c(x, L.props), Z.ref = Ll(k, x, L), Z.return = k, Z) : (Z = af(L.type, L.key, L.props, null, k.mode, Z), Z.ref = Ll(k, x, L), Z.return = k, Z);
    }
    function U(k, x, L, Z) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = uf(L, k.mode, Z), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function G(k, x, L, Z, xe) {
      return x === null || x.tag !== 7 ? (x = Mu(L, k.mode, Z, xe), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function X(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Nt:
            return L = af(x.type, x.key, x.props, null, k.mode, L), L.ref = Ll(k, null, x), L.return = k, L;
          case Te:
            return x = uf(x, k.mode, L), x.return = k, x;
          case wt:
            var Z = x._init;
            return X(k, Z(x._payload), L);
        }
        if (dr(x) || me(x)) return x = Mu(x, k.mode, L, null), x.return = k, x;
        oo(k, x);
      }
      return null;
    }
    function Y(k, x, L, Z) {
      var xe = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return xe !== null ? null : E(k, x, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Nt:
            return L.key === xe ? T(k, x, L, Z) : null;
          case Te:
            return L.key === xe ? U(k, x, L, Z) : null;
          case wt:
            return xe = L._init, Y(
              k,
              x,
              xe(L._payload),
              Z
            );
        }
        if (dr(L) || me(L)) return xe !== null ? null : G(k, x, L, Z, null);
        oo(k, L);
      }
      return null;
    }
    function ce(k, x, L, Z, xe) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return k = k.get(L) || null, E(x, k, "" + Z, xe);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Nt:
            return k = k.get(Z.key === null ? L : Z.key) || null, T(x, k, Z, xe);
          case Te:
            return k = k.get(Z.key === null ? L : Z.key) || null, U(x, k, Z, xe);
          case wt:
            var Fe = Z._init;
            return ce(k, x, L, Fe(Z._payload), xe);
        }
        if (dr(Z) || me(Z)) return k = k.get(L) || null, G(x, k, Z, xe, null);
        oo(x, Z);
      }
      return null;
    }
    function ye(k, x, L, Z) {
      for (var xe = null, Fe = null, He = x, be = x = 0, _n = null; He !== null && be < L.length; be++) {
        He.index > be ? (_n = He, He = null) : _n = He.sibling;
        var Ot = Y(k, He, L[be], Z);
        if (Ot === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Ot.alternate === null && r(k, He), x = d(Ot, x, be), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot, He = _n;
      }
      if (be === L.length) return l(k, He), ln && gu(k, be), xe;
      if (He === null) {
        for (; be < L.length; be++) He = X(k, L[be], Z), He !== null && (x = d(He, x, be), Fe === null ? xe = He : Fe.sibling = He, Fe = He);
        return ln && gu(k, be), xe;
      }
      for (He = o(k, He); be < L.length; be++) _n = ce(He, k, be, L[be], Z), _n !== null && (n && _n.alternate !== null && He.delete(_n.key === null ? be : _n.key), x = d(_n, x, be), Fe === null ? xe = _n : Fe.sibling = _n, Fe = _n);
      return n && He.forEach(function(Yl) {
        return r(k, Yl);
      }), ln && gu(k, be), xe;
    }
    function Ce(k, x, L, Z) {
      var xe = me(L);
      if (typeof xe != "function") throw Error(D(150));
      if (L = xe.call(L), L == null) throw Error(D(151));
      for (var Fe = xe = null, He = x, be = x = 0, _n = null, Ot = L.next(); He !== null && !Ot.done; be++, Ot = L.next()) {
        He.index > be ? (_n = He, He = null) : _n = He.sibling;
        var Yl = Y(k, He, Ot.value, Z);
        if (Yl === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Yl.alternate === null && r(k, He), x = d(Yl, x, be), Fe === null ? xe = Yl : Fe.sibling = Yl, Fe = Yl, He = _n;
      }
      if (Ot.done) return l(
        k,
        He
      ), ln && gu(k, be), xe;
      if (He === null) {
        for (; !Ot.done; be++, Ot = L.next()) Ot = X(k, Ot.value, Z), Ot !== null && (x = d(Ot, x, be), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot);
        return ln && gu(k, be), xe;
      }
      for (He = o(k, He); !Ot.done; be++, Ot = L.next()) Ot = ce(He, k, be, Ot.value, Z), Ot !== null && (n && Ot.alternate !== null && He.delete(Ot.key === null ? be : Ot.key), x = d(Ot, x, be), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot);
      return n && He.forEach(function(ch) {
        return r(k, ch);
      }), ln && gu(k, be), xe;
    }
    function kn(k, x, L, Z) {
      if (typeof L == "object" && L !== null && L.type === pt && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Nt:
            e: {
              for (var xe = L.key, Fe = x; Fe !== null; ) {
                if (Fe.key === xe) {
                  if (xe = L.type, xe === pt) {
                    if (Fe.tag === 7) {
                      l(k, Fe.sibling), x = c(Fe, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Fe.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === wt && Ml(xe) === Fe.type) {
                    l(k, Fe.sibling), x = c(Fe, L.props), x.ref = Ll(k, Fe, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, Fe);
                  break;
                } else r(k, Fe);
                Fe = Fe.sibling;
              }
              L.type === pt ? (x = Mu(L.props.children, k.mode, Z, L.key), x.return = k, k = x) : (Z = af(L.type, L.key, L.props, null, k.mode, Z), Z.ref = Ll(k, x, L), Z.return = k, k = Z);
            }
            return m(k);
          case Te:
            e: {
              for (Fe = L.key; x !== null; ) {
                if (x.key === Fe) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = uf(L, k.mode, Z), x.return = k, k = x;
            }
            return m(k);
          case wt:
            return Fe = L._init, kn(k, x, Fe(L._payload), Z);
        }
        if (dr(L)) return ye(k, x, L, Z);
        if (me(L)) return Ce(k, x, L, Z);
        oo(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = Wd(L, k.mode, Z), x.return = k, k = x), m(k)) : l(k, x);
    }
    return kn;
  }
  var zl = Uv(!0), Av = Uv(!1), zc = Xt(null), Xi = null, Dn = null, ae = null;
  function Fa() {
    ae = Dn = Xi = null;
  }
  function ha(n) {
    var r = zc.current;
    _e(zc), n._currentValue = r;
  }
  function vd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function so(n, r) {
    Xi = n, ae = Dn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tr = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (ae !== n) if (n = { context: n, memoizedValue: r, next: null }, Dn === null) {
      if (Xi === null) throw Error(D(308));
      Dn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else Dn = Dn.next = n;
    return r;
  }
  var Su = null;
  function hd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function Pn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, hd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ki(n, o);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ul = !1;
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
    if (o = o.shared, kt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ki(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, hd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ki(n, l);
  }
  function Uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, rs(n, l);
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
  function Ac(n, r, l, o) {
    var c = n.updateQueue;
    Ul = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = U : E.next = U, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, G = U = T = null, E = d;
      do {
        var Y = E.lane, ce = E.eventTime;
        if ((o & Y) === Y) {
          G !== null && (G = G.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ce = E;
            switch (Y = r, ce = l, Ce.tag) {
              case 1:
                if (ye = Ce.payload, typeof ye == "function") {
                  X = ye.call(ce, X, Y);
                  break e;
                }
                X = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ce.payload, Y = typeof ye == "function" ? ye.call(ce, X, Y) : ye, Y == null) break e;
                X = le({}, X, Y);
                break e;
              case 2:
                Ul = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else ce = { eventTime: ce, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (U = G = ce, T = X) : G = G.next = ce, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = X), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wu |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function Fv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var ws = {}, gi = Xt(ws), co = Xt(ws), fo = Xt(ws);
  function Eu(n) {
    if (n === ws) throw Error(D(174));
    return n;
  }
  function gd(n, r) {
    switch (Mt(fo, r), Mt(co, n), Mt(gi, ws), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sr(r, n);
    }
    _e(gi), Mt(gi, r);
  }
  function po() {
    _e(gi), _e(co), _e(fo);
  }
  function Hv(n) {
    Eu(fo.current);
    var r = Eu(gi.current), l = Sr(r, n.type);
    r !== l && (Mt(co, n), Mt(gi, l));
  }
  function Sd(n) {
    co.current === n && (_e(gi), _e(co));
  }
  var mn = Xt(0);
  function bs(n) {
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
  function jc() {
    for (var n = 0; n < Ed.length; n++) Ed[n]._workInProgressVersionPrimary = null;
    Ed.length = 0;
  }
  var Fc = Ve.ReactCurrentDispatcher, Cd = Ve.ReactCurrentBatchConfig, Ji = 0, re = null, Ne = null, qe = null, un = !1, qr = !1, vo = 0, uy = 0;
  function yr() {
    throw Error(D(321));
  }
  function Rd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ds(n, r, l, o, c, d) {
    if (Ji = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fc.current = n === null || n.memoizedState === null ? ga : oy, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, vo = 0, 25 <= d) throw Error(D(301));
        d += 1, qe = Ne = null, r.updateQueue = null, Fc.current = en, n = l(o, c);
      } while (qr);
    }
    if (Fc.current = Ei, r = Ne !== null && Ne.next !== null, Ji = 0, qe = Ne = re = null, un = !1, r) throw Error(D(300));
    return n;
  }
  function I() {
    var n = vo !== 0;
    return vo = 0, n;
  }
  function Kt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qe === null ? re.memoizedState = qe = n : qe = qe.next = n, qe;
  }
  function we() {
    if (Ne === null) {
      var n = re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ne.next;
    var r = qe === null ? re.memoizedState : qe.next;
    if (r !== null) qe = r, Ne = n;
    else {
      if (n === null) throw Error(D(310));
      Ne = n, n = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, qe === null ? re.memoizedState = qe = n : qe = qe.next = n;
    }
    return qe;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ai(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = Ne, c = o.baseQueue, d = l.pending;
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
        var G = U.lane;
        if ((Ji & G) === G) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var X = {
            lane: G,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, re.lanes |= G, wu |= G;
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
    var r = we(), l = r.queue;
    if (l === null) throw Error(D(311));
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
  function ho(n, r) {
    var l = re, o = we(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, ks(Hc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || qe !== null && qe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, mo.bind(null, l, o, c, r), void 0, null), Cn === null) throw Error(D(349));
      Ji & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function mo(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Vc(r) && Pc(n);
  }
  function Hc(n, r, l) {
    return l(function() {
      Vc(r) && Pc(n);
    });
  }
  function Vc(n) {
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
    r !== null && Va(r, n, 1, -1);
  }
  function Bc(n) {
    var r = Kt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vv.bind(null, re, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function $c() {
    return we().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Kt();
    re.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = we();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ne !== null) {
      var m = Ne.memoizedState;
      if (d = m.destroy, o !== null && Rd(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    re.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ks(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function Qc(n, r) {
    return go(4, 4, n, r);
  }
  function Wc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Gc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, Wc.bind(null, r, n), l);
  }
  function Os() {
  }
  function Ns(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Tu(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function qc(n, r, l) {
    return Ji & 21 ? (ei(l, r) || (l = lu(), re.lanes |= l, wu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function Td(n, r) {
    var l = gt;
    gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      gt = l, Cd.transition = o;
    }
  }
  function Xc() {
    return we().memoizedState;
  }
  function _d(n, r, l) {
    var o = ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, So(n)) xd(r, l);
    else if (l = Pn(n, r, l, o), l !== null) {
      var c = Gn();
      Va(l, n, o, c), Eo(l, r, o);
    }
  }
  function Vv(n, r, l) {
    var o = ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (So(n)) xd(r, c);
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
      l = Pn(n, r, c, o), l !== null && (c = Gn(), Va(l, n, o, c), Eo(l, r, o));
    }
  }
  function So(n) {
    var r = n.alternate;
    return n === re || r !== null && r === re;
  }
  function xd(n, r) {
    qr = un = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Eo(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, rs(n, l);
    }
  }
  var Ei = { readContext: Ha, useCallback: yr, useContext: yr, useEffect: yr, useImperativeHandle: yr, useInsertionEffect: yr, useLayoutEffect: yr, useMemo: yr, useReducer: yr, useRef: yr, useState: yr, useDebugValue: yr, useDeferredValue: yr, useTransition: yr, useMutableSource: yr, useSyncExternalStore: yr, useId: yr, unstable_isNewReconciler: !1 }, ga = { readContext: Ha, useCallback: function(n, r) {
    return Kt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      Wc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Kt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Kt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = _d.bind(null, re, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Kt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Bc, useDebugValue: Os, useDeferredValue: function(n) {
    return Kt().memoizedState = n;
  }, useTransition: function() {
    var n = Bc(!1), r = n[0];
    return n = Td.bind(null, n[1]), Kt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = re, c = Kt();
    if (ln) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Cn === null) throw Error(D(349));
      Ji & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, mo.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kt(), r = Cn.identifierPrefix;
    if (ln) {
      var l = tr, o = Gr;
      l = (o & ~(1 << 32 - Cr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = uy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, oy = {
    readContext: Ha,
    useCallback: Ns,
    useContext: Ha,
    useEffect: ks,
    useImperativeHandle: Gc,
    useInsertionEffect: Yc,
    useLayoutEffect: Qc,
    useMemo: Tu,
    useReducer: ai,
    useRef: $c,
    useState: function() {
      return ai(Si);
    },
    useDebugValue: Os,
    useDeferredValue: function(n) {
      var r = we();
      return qc(r, Ne.memoizedState, n);
    },
    useTransition: function() {
      var n = ai(Si)[0], r = we().memoizedState;
      return [n, r];
    },
    useMutableSource: ii,
    useSyncExternalStore: ho,
    useId: Xc,
    unstable_isNewReconciler: !1
  }, en = { readContext: Ha, useCallback: Ns, useContext: Ha, useEffect: ks, useImperativeHandle: Gc, useInsertionEffect: Yc, useLayoutEffect: Qc, useMemo: Tu, useReducer: Zi, useRef: $c, useState: function() {
    return Zi(Si);
  }, useDebugValue: Os, useDeferredValue: function(n) {
    var r = we();
    return Ne === null ? r.memoizedState = n : qc(r, Ne.memoizedState, n);
  }, useTransition: function() {
    var n = Zi(Si)[0], r = we().memoizedState;
    return [n, r];
  }, useMutableSource: ii, useSyncExternalStore: ho, useId: Xc, unstable_isNewReconciler: !1 };
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Co(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : le({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Al = { isMounted: function(n) {
    return (n = n._reactInternals) ? q(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = ui(n), d = ma(o, c);
    d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Va(r, n, c, o), Uc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = ui(n), d = ma(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Va(r, n, c, o), Uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = ui(n), c = ma(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ya(n, c, o), r !== null && (Va(r, n, o, l), Uc(r, n, o));
  } };
  function Ls(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ro(l, o) || !ro(c, d) : !0;
  }
  function Pv(n, r, l) {
    var o = !1, c = za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = zn(r) ? Rr : Yn.current, o = r.contextTypes, d = (o = o != null) ? da(n, c) : za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Al, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Al.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, md(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = zn(r) ? Rr : Yn.current, c.context = da(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Co(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Al.enqueueReplaceState(c, c.state, null), Ac(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ro(n, r) {
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
  function Ms(n, r, l) {
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
      nf || (nf = !0, Bd = o), bd(n, r);
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
  function Iv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Dd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = yy.bind(null, n, r, l), r.then(n, n));
  }
  function zs(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ma(-1, 1), r.tag = 2, ya(l, r, 1))), l.lanes |= 1), n);
  }
  var Qv = Ve.ReactCurrentOwner, Tr = !1;
  function _r(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : zl(r, n.child, l, o);
  }
  function jl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return so(r, c), o = Ds(n, r, l, o, d, c), l = I(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && l && Oc(r), r.flags |= 1, _r(n, r, o, c), r.child);
  }
  function To(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Fl(n, r, d, o, c)) : (n = af(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ro, l(m, o) && n.ref === r.ref) return Ci(n, r, c);
    }
    return r.flags |= 1, n = Il(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ro(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Ci(n, r, c);
    }
    return Hl(n, r, l, o, c);
  }
  function Kc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(xu, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(xu, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Mt(xu, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Mt(xu, Dr), Dr |= o;
    return _r(n, r, c, l), r.child;
  }
  function Kr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Hl(n, r, l, o, c) {
    var d = zn(l) ? Rr : Yn.current;
    return d = da(r, d), so(r, c), l = Ds(n, r, l, o, d, c), o = I(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && o && Oc(r), r.flags |= 1, _r(n, r, l, c), r.child);
  }
  function rt(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      mu(r);
    } else d = !1;
    if (so(r, c), r.stateNode === null) js(n, r), Pv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ha(U) : (U = zn(l) ? Rr : Yn.current, U = da(r, U));
      var G = l.getDerivedStateFromProps, X = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Bv(r, m, o, U), Ul = !1;
      var Y = r.memoizedState;
      m.state = Y, Ac(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || Ke.current || Ul ? (typeof G == "function" && (Co(r, l, G, o), T = r.memoizedState), (E = Ul || Ls(r, l, E, o, Y, T, U)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, yd(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : Xr(r.type, E), m.props = U, X = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = zn(l) ? Rr : Yn.current, T = da(r, T));
      var ce = l.getDerivedStateFromProps;
      (G = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || Y !== T) && Bv(r, m, o, T), Ul = !1, Y = r.memoizedState, m.state = Y, Ac(r, o, m, c);
      var ye = r.memoizedState;
      E !== X || Y !== ye || Ke.current || Ul ? (typeof ce == "function" && (Co(r, l, ce, o), ye = r.memoizedState), (U = Ul || Ls(r, l, U, o, Y, ye, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return _o(n, r, l, o, d, c);
  }
  function _o(n, r, l, o, c, d) {
    Kr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lv(r, l, !1), Ci(n, r, d);
    o = r.stateNode, Qv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = zl(r, n.child, null, d), r.child = zl(r, null, E, d)) : _r(n, r, E, d), r.memoizedState = o.state, c && Lv(r, l, !0), r.child;
  }
  function Od(n) {
    var r = n.stateNode;
    r.pendingContext ? mi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && mi(n, r.context, !1), gd(n, r.containerInfo);
  }
  function sy(n, r, l, o, c) {
    return uo(), Un(c), r.flags |= 256, _r(n, r, l, o), r.child;
  }
  var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Us(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xo(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Mt(mn, c & 1), n === null)
      return Lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = lf(m, o, 0, null), n = Mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Us(l), r.memoizedState = Nd, n) : Ld(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return cy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Il(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Il(E, d) : (d = Mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Us(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Nd, o;
    }
    return d = n.child, n = d.sibling, o = Il(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ld(n, r) {
    return r = lf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function As(n, r, l, o) {
    return o !== null && Un(o), zl(r, n.child, null, l), n = Ld(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function cy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ms(Error(D(422))), As(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = lf({ mode: "visible", children: o.children }, c, 0, null), d = Mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && zl(r, n.child, null, m), r.child.memoizedState = Us(m), r.memoizedState = Nd, d);
    if (!(r.mode & 1)) return As(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = Ms(d, o, void 0), As(n, r, m, o);
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ki(n, c), Va(o, n, c, -1));
      }
      return Id(), o = Ms(Error(D(421))), As(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, va = fa(c.nextSibling), pa = r, ln = !0, ja = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ri, Gr = n.id, tr = n.overflow, ri = r), r = Ld(r, o.children), r.flags |= 4096, r);
  }
  function Jc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), vd(n.return, r, l);
  }
  function Md(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function zd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_r(n, r, o.children, l), o = mn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Jc(n, l, r);
        else if (n.tag === 19) Jc(n, l, r);
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
    if (Mt(mn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && bs(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Md(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && bs(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Md(r, !0, l, null, d);
        break;
      case "together":
        Md(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function js(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ci(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = Il(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Il(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Sa(n, r, l) {
    switch (r.tag) {
      case 3:
        Od(r), uo();
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
        Mt(zc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Mt(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? xo(n, r, l) : (Mt(mn, mn.current & 1), n = Ci(n, r, l), n !== null ? n.sibling : null);
        Mt(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return zd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Mt(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Kc(n, r, l);
    }
    return Ci(n, r, l);
  }
  var Ri, li, Fs, wo;
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
  }, Fs = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Sn(n, c), o = Sn(n, o), d = [];
          break;
        case "select":
          c = le({}, c, { value: void 0 }), o = le({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ra(n, c), o = ra(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bc);
      }
      Lt(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ie.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ie.hasOwnProperty(U) ? (T != null && U === "onScroll" && qt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, wo = function(n, r, l, o) {
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
  function Dt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function fy(n, r, l) {
    var o = r.pendingProps;
    switch (Nc(r), r.tag) {
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
        return Dt(r), null;
      case 1:
        return zn(r.type) && Yr(), Dt(r), null;
      case 3:
        return o = r.stateNode, po(), _e(Ke), _e(Yn), jc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (ku(ja), ja = null))), li(n, r), Dt(r), null;
      case 5:
        Sd(r);
        var c = Eu(fo.current);
        if (l = r.type, n !== null && r.stateNode != null) Fs(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return Dt(r), null;
          }
          if (n = Eu(gi.current), Mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[xs] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < Yi.length; c++) qt(Yi[c], o);
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
            Lt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Cs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Cs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ie.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
            }
            switch (l) {
              case "input":
                Xn(o), Nn(o, d, !0);
                break;
              case "textarea":
                Xn(o), ia(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[xs] = o, Ri(n, r, !1, !1), r.stateNode = n;
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
                  for (c = 0; c < Yi.length; c++) qt(Yi[c], n);
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = le({}, o, { value: void 0 }), qt("invalid", n);
                  break;
                case "textarea":
                  aa(n, o), c = ra(n, o), qt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Lt(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? ot(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && la(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ua(n, T) : typeof T == "number" && ua(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ie.hasOwnProperty(d) ? T != null && d === "onScroll" && qt("scroll", n) : T != null && lt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Xn(n), Nn(n, o, !1);
                  break;
                case "textarea":
                  Xn(n), ia(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ft(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bc);
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
        return Dt(r), null;
      case 6:
        if (n && r.stateNode != null) wo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
          if (l = Eu(fo.current), Eu(gi.current), Mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = pa, n !== null)) switch (n.tag) {
              case 3:
                Cs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Cs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return Dt(r), null;
      case 13:
        if (_e(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && va !== null && r.mode & 1 && !(r.flags & 128)) zv(), uo(), r.flags |= 98560, d = !1;
          else if (d = Mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
              d[Ma] = r;
            } else uo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Dt(r), d = !1;
          } else ja !== null && (ku(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Bn === 0 && (Bn = 3) : Id())), r.updateQueue !== null && (r.flags |= 4), Dt(r), null);
      case 4:
        return po(), li(n, r), n === null && vi(r.stateNode.containerInfo), Dt(r), null;
      case 10:
        return ha(r.type._context), Dt(r), null;
      case 17:
        return zn(r.type) && Yr(), Dt(r), null;
      case 19:
        if (_e(mn), d = r.memoizedState, d === null) return Dt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) xr(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = bs(n), m !== null) {
              for (r.flags |= 128, xr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Mt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > bu && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = bs(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln) return Dt(r), null;
          } else 2 * Ft() - d.renderingStartTime > bu && l !== 1073741824 && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ft(), r.sibling = null, l = mn.current, Mt(mn, o ? l & 1 | 2 : l & 1), r) : (Dt(r), null);
      case 22:
      case 23:
        return Oo(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Dr & 1073741824 && (Dt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Dt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function dy(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return zn(r.type) && Yr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return po(), _e(Ke), _e(Yn), jc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Sd(r), null;
      case 13:
        if (_e(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
          uo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return _e(mn), null;
      case 4:
        return po(), null;
      case 10:
        return ha(r.type._context), null;
      case 22:
      case 23:
        return Oo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zc = !1, Qn = !1, Wv = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
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
    if (ad = fu, n = Ev(), hs(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, G = 0, X = n, Y = null;
          t: for (; ; ) {
            for (var ce; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (ce = X.firstChild) !== null; )
              Y = X, X = ce;
            for (; ; ) {
              if (X === n) break t;
              if (Y === l && ++U === c && (E = m), Y === d && ++G === o && (T = m), (ce = X.nextSibling) !== null) break;
              X = Y, Y = X.parentNode;
            }
            X = ce;
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
              var Ce = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : Xr(r.type, Ce), kn);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(D(163));
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
  function Hs(n, r, l) {
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
  function Vs(n, r) {
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
    r !== null && (n.alternate = null, Fd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[xs], delete r[sd], delete r[ay], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Vd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Vd(n, r, l), n = n.sibling; n !== null; ) Vd(n, r, l), n = n.sibling;
  }
  function Ps(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ps(n, r, l), n = n.sibling; n !== null; ) Ps(n, r, l), n = n.sibling;
  }
  var An = null, Wn = !1;
  function wr(n, r, l) {
    for (l = l.child; l !== null; ) el(n, r, l), l = l.sibling;
  }
  function el(n, r, l) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function") try {
      Pr.onCommitFiberUnmount(gl, l);
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
        An !== null && (Wn ? (n = An, l = l.stateNode, n.nodeType === 8 ? od(n.parentNode, l) : n.nodeType === 1 && od(n, l), La(n)) : od(An, l.stateNode));
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
  function bo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wv()), r.forEach(function(o) {
        var c = Yd.bind(null, n, o);
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
        if (An === null) throw Error(D(160));
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
            Hs(3, n, n.return), Vs(3, n);
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
          try {
            Hs(5, n, n.return);
          } catch (Ce) {
            Tn(n, n.return, Ce);
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
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Hn(c, d), bn(E, m);
            var U = bn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], X = T[m + 1];
              G === "style" ? ot(c, X) : G === "dangerouslySetInnerHTML" ? la(c, X) : G === "children" ? ua(c, X) : lt(c, G, X, U);
            }
            switch (E) {
              case "input":
                wn(c, d);
                break;
              case "textarea":
                pr(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Vn(c, !!d.multiple, ce, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Vn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[xs] = d;
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        break;
      case 6:
        if (br(r, n), Ti(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (br(r, n), Ti(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          La(r.containerInfo);
        } catch (Ce) {
          Tn(n, n.return, Ce);
        }
        break;
      case 4:
        br(r, n), Ti(n);
        break;
      case 13:
        br(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Ys = Ft())), o & 4 && bo(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (U = Qn) || G, br(r, n), Qn = U) : br(r, n), Ti(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !G && n.mode & 1) for (pe = n, G = n.child; G !== null; ) {
            for (X = pe = G; pe !== null; ) {
              switch (Y = pe, ce = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hs(4, Y, Y.return);
                  break;
                case 1:
                  _u(Y, Y.return);
                  var ye = Y.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ce) {
                      Tn(o, l, Ce);
                    }
                  }
                  break;
                case 5:
                  _u(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Do(X);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Y, pe = ce) : Do(X);
            }
            G = G.sibling;
          }
          e: for (G = null, X = n; ; ) {
            if (X.tag === 5) {
              if (G === null) {
                G = X;
                try {
                  c = X.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = ke("display", m));
                } catch (Ce) {
                  Tn(n, n.return, Ce);
                }
              }
            } else if (X.tag === 6) {
              if (G === null) try {
                X.stateNode.nodeValue = U ? "" : X.memoizedProps;
              } catch (Ce) {
                Tn(n, n.return, Ce);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              G === X && (G = null), X = X.return;
            }
            G === X && (G = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        br(r, n), Ti(n), o & 4 && bo(n);
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
          throw Error(D(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ua(c, ""), o.flags &= -33);
            var d = Hd(n);
            Ps(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Hd(n);
            Vd(n, E, m);
            break;
          default:
            throw Error(D(161));
        }
      } catch (T) {
        Tn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function py(n, r, l) {
    pe = n, Xv(n);
  }
  function Xv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Zc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Qn;
          E = Zc;
          var U = Qn;
          if (Zc = m, (Qn = T) && !U) for (pe = c; pe !== null; ) m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Kv(c) : T !== null ? (T.return = m, pe = T) : Kv(c);
          for (; d !== null; ) pe = d, Xv(d), d = d.sibling;
          pe = c, Zc = E, Qn = U;
        }
        Pd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Pd(n);
    }
  }
  function Pd(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Qn || Vs(5, r);
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
                  var G = U.memoizedState;
                  if (G !== null) {
                    var X = G.dehydrated;
                    X !== null && La(X);
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
              throw Error(D(163));
          }
          Qn || r.flags & 512 && jd(r);
        } catch (Y) {
          Tn(r, r.return, Y);
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
  function Do(n) {
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
              Vs(4, r);
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
  var Jv = Math.ceil, ef = Ve.ReactCurrentDispatcher, ko = Ve.ReactCurrentOwner, Ea = Ve.ReactCurrentBatchConfig, kt = 0, Cn = null, dn = null, Rn = 0, Dr = 0, xu = Xt(0), Bn = 0, Bs = null, wu = 0, tf = 0, $s = 0, Is = null, nr = null, Ys = 0, bu = 1 / 0, nl = null, nf = !1, Bd = null, Vl = null, Pl = !1, _i = null, Bl = 0, Qs = 0, $d = null, Ws = -1, Gs = 0;
  function Gn() {
    return kt & 6 ? Ft() : Ws !== -1 ? Ws : Ws = Ft();
  }
  function ui(n) {
    return n.mode & 1 ? kt & 2 && Rn !== 0 ? Rn & -Rn : ly.transition !== null ? (Gs === 0 && (Gs = lu()), Gs) : (n = gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : us(n.type)), n) : 1;
  }
  function Va(n, r, l, o) {
    if (50 < Qs) throw Qs = 0, $d = null, Error(D(185));
    El(n, l, o), (!(kt & 2) || n !== Cn) && (n === Cn && (!(kt & 2) && (tf |= l), Bn === 4 && xi(n, Rn)), tn(n, o), l === 1 && kt === 0 && !(r.mode & 1) && (bu = Ft() + 500, kl && yi()));
  }
  function tn(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) l !== null && Gt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Gt(l), r === 1) n.tag === 0 ? Mv(rf.bind(null, n)) : kc(rf.bind(null, n)), Nv(function() {
        !(kt & 6) && yi();
      }), l = null;
      else {
        switch (as(o)) {
          case 1:
            l = Mn;
            break;
          case 4:
            l = Vr;
            break;
          case 16:
            l = nt;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = nt;
        }
        l = uh(l, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Du(n, r) {
    if (Ws = -1, Gs = 0, kt & 6) throw Error(D(327));
    var l = n.callbackNode;
    if (Lo() && n.callbackNode !== l) return null;
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = No(n, o);
    else {
      r = o;
      var c = kt;
      kt |= 2;
      var d = eh();
      (Cn !== n || Rn !== r) && (nl = null, bu = Ft() + 500, $l(n, r));
      do
        try {
          my();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (!0);
      Fa(), ef.current = d, kt = c, dn !== null ? r = 0 : (Cn = null, Rn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = di(n), c !== 0 && (o = c, r = qs(n, c))), r === 1) throw l = Bs, $l(n, 0), xi(n, o), tn(n, Ft()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !vy(c) && (r = No(n, o), r === 2 && (d = di(n), d !== 0 && (o = d, r = qs(n, d))), r === 1)) throw l = Bs, $l(n, 0), xi(n, o), tn(n, Ft()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            Lu(n, nr, nl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = Ys + 500 - Ft(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rs(Lu.bind(null, n, nr, nl), r);
              break;
            }
            Lu(n, nr, nl);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Cr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ft() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Jv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rs(Lu.bind(null, n, nr, nl), o);
              break;
            }
            Lu(n, nr, nl);
            break;
          case 5:
            Lu(n, nr, nl);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return tn(n, Ft()), n.callbackNode === l ? Du.bind(null, n) : null;
  }
  function qs(n, r) {
    var l = Is;
    return n.current.memoizedState.isDehydrated && ($l(n, r).flags |= 256), n = No(n, r), n !== 2 && (r = nr, nr = l, r !== null && ku(r)), n;
  }
  function ku(n) {
    nr === null ? nr = n : nr.push.apply(nr, n);
  }
  function vy(n) {
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
    for (r &= ~$s, r &= ~tf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Cr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function rf(n) {
    if (kt & 6) throw Error(D(327));
    Lo();
    var r = fi(n, 0);
    if (!(r & 1)) return tn(n, Ft()), null;
    var l = No(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = di(n);
      o !== 0 && (r = o, l = qs(n, o));
    }
    if (l === 1) throw l = Bs, $l(n, 0), xi(n, r), tn(n, Ft()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Lu(n, nr, nl), tn(n, Ft()), null;
  }
  function Ou(n, r) {
    var l = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = l, kt === 0 && (bu = Ft() + 500, kl && yi());
    }
  }
  function Nu(n) {
    _i !== null && _i.tag === 0 && !(kt & 6) && Lo();
    var r = kt;
    kt |= 1;
    var l = Ea.transition, o = gt;
    try {
      if (Ea.transition = null, gt = 1, n) return n();
    } finally {
      gt = o, Ea.transition = l, kt = r, !(kt & 6) && yi();
    }
  }
  function Oo() {
    Dr = xu.current, _e(xu);
  }
  function $l(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ts(l)), dn !== null) for (l = dn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Yr();
          break;
        case 3:
          po(), _e(Ke), _e(Yn), jc();
          break;
        case 5:
          Sd(o);
          break;
        case 4:
          po();
          break;
        case 13:
          _e(mn);
          break;
        case 19:
          _e(mn);
          break;
        case 10:
          ha(o.type._context);
          break;
        case 22:
        case 23:
          Oo();
      }
      l = l.return;
    }
    if (Cn = n, dn = n = Il(n.current, null), Rn = Dr = r, Bn = 0, Bs = null, $s = tf = wu = 0, nr = Is = null, Su !== null) {
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
        if (Fa(), Fc.current = Ei, un) {
          for (var o = re.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          un = !1;
        }
        if (Ji = 0, qe = Ne = re = null, qr = !1, vo = 0, ko.current = null, l === null || l.return === null) {
          Bn = 1, Bs = r, dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Rn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, G = E, X = G.tag;
            if (!(G.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var Y = G.alternate;
              Y ? (G.updateQueue = Y.updateQueue, G.memoizedState = Y.memoizedState, G.lanes = Y.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ce = zs(m);
            if (ce !== null) {
              ce.flags &= -257, Yv(ce, m, E, d, r), ce.mode & 1 && Iv(d, U, r), r = ce, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Iv(d, U, r), Id();
                break e;
              }
              T = Error(D(426));
            }
          } else if (ln && E.mode & 1) {
            var kn = zs(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Yv(kn, m, E, d, r), Un(Ro(T, E));
              break e;
            }
          }
          d = T = Ro(T, E), Bn !== 4 && (Bn = 2), Is === null ? Is = [d] : Is.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = kd(d, T, r);
                jv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Vl === null || !Vl.has(L)))) {
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
      } catch (xe) {
        r = xe, dn === l && l !== null && (dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = ef.current;
    return ef.current = Ei, n === null ? Ei : n;
  }
  function Id() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Cn === null || !(wu & 268435455) && !(tf & 268435455) || xi(Cn, Rn);
  }
  function No(n, r) {
    var l = kt;
    kt |= 2;
    var o = eh();
    (Cn !== n || Rn !== r) && (nl = null, $l(n, r));
    do
      try {
        hy();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (!0);
    if (Fa(), kt = l, ef.current = o, dn !== null) throw Error(D(261));
    return Cn = null, Rn = 0, Bn;
  }
  function hy() {
    for (; dn !== null; ) th(dn);
  }
  function my() {
    for (; dn !== null && !fn(); ) th(dn);
  }
  function th(n) {
    var r = lh(n.alternate, n, Dr);
    n.memoizedProps = n.pendingProps, r === null ? nh(n) : dn = r, ko.current = null;
  }
  function nh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = dy(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, dn = null;
          return;
        }
      } else if (l = fy(l, r, Dr), l !== null) {
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
  function Lu(n, r, l) {
    var o = gt, c = Ea.transition;
    try {
      Ea.transition = null, gt = 1, rh(n, r, l, o);
    } finally {
      Ea.transition = c, gt = o;
    }
    return null;
  }
  function rh(n, r, l, o) {
    do
      Lo();
    while (_i !== null);
    if (kt & 6) throw Error(D(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(D(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ns(n, d), n === Cn && (dn = Cn = null, Rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pl || (Pl = !0, uh(nt, function() {
      return Lo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ea.transition, Ea.transition = null;
      var m = gt;
      gt = 1;
      var E = kt;
      kt |= 4, ko.current = null, Ad(n, l), tl(l, n), du(id), fu = !!ad, id = ad = null, n.current = l, py(l), hr(), kt = E, gt = m, Ea.transition = d;
    } else n.current = l;
    if (Pl && (Pl = !1, _i = n, Bl = c), d = n.pendingLanes, d === 0 && (Vl = null), Jo(l.stateNode), tn(n, Ft()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (nf) throw nf = !1, n = Bd, Bd = null, n;
    return Bl & 1 && n.tag !== 0 && Lo(), d = n.pendingLanes, d & 1 ? n === $d ? Qs++ : (Qs = 0, $d = n) : Qs = 0, yi(), null;
  }
  function Lo() {
    if (_i !== null) {
      var n = as(Bl), r = Ea.transition, l = gt;
      try {
        if (Ea.transition = null, gt = 16 > n ? 16 : n, _i === null) var o = !1;
        else {
          if (n = _i, _i = null, Bl = 0, kt & 6) throw Error(D(331));
          var c = kt;
          for (kt |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (pe = U; pe !== null; ) {
                    var G = pe;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hs(8, G, d);
                    }
                    var X = G.child;
                    if (X !== null) X.return = G, pe = X;
                    else for (; pe !== null; ) {
                      G = pe;
                      var Y = G.sibling, ce = G.return;
                      if (Fd(G), G === U) {
                        pe = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = ce, pe = Y;
                        break;
                      }
                      pe = ce;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ce = ye.child;
                  if (Ce !== null) {
                    ye.child = null;
                    do {
                      var kn = Ce.sibling;
                      Ce.sibling = null, Ce = kn;
                    } while (Ce !== null);
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
                  Hs(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, pe = k;
                break e;
              }
              pe = d.return;
            }
          }
          var x = n.current;
          for (pe = x; pe !== null; ) {
            m = pe;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, pe = L;
            else e: for (m = x; pe !== null; ) {
              if (E = pe, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, E);
                }
              } catch (xe) {
                Tn(E, E.return, xe);
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
          if (kt = c, yi(), Pr && typeof Pr.onPostCommitFiberRoot == "function") try {
            Pr.onPostCommitFiberRoot(gl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        gt = l, Ea.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = Ro(l, r), r = kd(n, r, 1), n = ya(n, r, 1), r = Gn(), n !== null && (El(n, 1, r), tn(n, r));
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
          n = Ro(l, n), n = $v(r, n, 1), r = ya(r, n, 1), n = Gn(), r !== null && (El(r, 1, n), tn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function yy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Cn === n && (Rn & l) === l && (Bn === 4 || Bn === 3 && (Rn & 130023424) === Rn && 500 > Ft() - Ys ? $l(n, 0) : $s |= l), tn(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = Gu, Gu <<= 1, !(Gu & 130023424) && (Gu = 4194304)) : r = 1);
    var l = Gn();
    n = Ki(n, r), n !== null && (El(n, r, l), tn(n, l));
  }
  function gy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function Yd(n, r) {
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
        throw Error(D(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var lh;
  lh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ke.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, Sa(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, ln && r.flags & 1048576 && Nl(r, yu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        js(n, r), n = r.pendingProps;
        var c = da(r, Yn.current);
        so(r, l), c = Ds(null, r, o, n, c, l);
        var d = I();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, mu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, md(r), c.updater = Al, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = _o(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && Oc(r), _r(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (js(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = Xr(o, n), c) {
            case 0:
              r = Hl(null, r, o, n, l);
              break e;
            case 1:
              r = rt(null, r, o, n, l);
              break e;
            case 11:
              r = jl(null, r, o, n, l);
              break e;
            case 14:
              r = To(null, r, o, Xr(o.type, n), l);
              break e;
          }
          throw Error(D(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Hl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), rt(n, r, o, c, l);
      case 3:
        e: {
          if (Od(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, yd(n, r), Ac(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ro(Error(D(423)), r), r = sy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Ro(Error(D(424)), r), r = sy(n, r, o, l, c);
            break e;
          } else for (va = fa(r.stateNode.containerInfo.firstChild), pa = r, ln = !0, ja = null, l = Av(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (uo(), o === c) {
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
        return xo(n, r, l);
      case 4:
        return gd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = zl(r, null, o, l) : _r(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), jl(n, r, o, c, l);
      case 7:
        return _r(n, r, r.pendingProps, l), r.child;
      case 8:
        return _r(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _r(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Mt(zc, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Ke.current) {
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
                      var G = U.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(D(341));
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
        return c = r.type, o = r.pendingProps.children, so(r, l), c = Ha(c), o = o(c), r.flags |= 1, _r(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Xr(o, r.pendingProps), c = Xr(o.type, c), To(n, r, o, c, l);
      case 15:
        return Fl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), js(n, r), r.tag = 1, zn(o) ? (n = !0, mu(r)) : n = !1, so(r, l), Pv(r, o, c), wd(r, o, c, l), _o(null, r, o, !0, n, l);
      case 19:
        return zd(n, r, l);
      case 22:
        return Kc(n, r, l);
    }
    throw Error(D(156, r.tag));
  };
  function uh(n, r) {
    return Ln(n, r);
  }
  function Sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, l, o) {
    return new Sy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ct) return 11;
      if (n === at) return 14;
    }
    return 2;
  }
  function Il(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function af(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case pt:
        return Mu(l.children, c, d, r);
      case We:
        m = 8, c |= 8;
        break;
      case xn:
        return n = Ca(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
      case nn:
        return n = Ca(13, l, r, c), n.elementType = nn, n.lanes = d, n;
      case Pe:
        return n = Ca(19, l, r, c), n.elementType = Pe, n.lanes = d, n;
      case it:
        return lf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case gn:
            m = 10;
            break e;
          case Jt:
            m = 9;
            break e;
          case Ct:
            m = 11;
            break e;
          case at:
            m = 14;
            break e;
          case wt:
            m = 16, o = null;
            break e;
        }
        throw Error(D(130, n == null ? n : typeof n, ""));
    }
    return r = Ca(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Mu(n, r, l, o) {
    return n = Ca(7, n, o, r), n.lanes = l, n;
  }
  function lf(n, r, l, o) {
    return n = Ca(22, n, o, r), n.elementType = it, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = Ca(6, n, null, r), n.lanes = l, n;
  }
  function uf(n, r, l) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zu(n, r, l, o, c, d, m, E, T) {
    return n = new Gd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, md(d), n;
  }
  function Cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return za;
    n = n._reactInternals;
    e: {
      if (q(n) !== n || n.tag !== 1) throw Error(D(170));
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
      throw Error(D(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return Dl(n, l, r);
    }
    return r;
  }
  function Xd(n, r, l, o, c, d, m, E, T) {
    return n = zu(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = Gn(), c = ui(l), d = ma(o, c), d.callback = r ?? null, ya(l, d, c), n.current.lanes = c, El(n, c, o), tn(n, o), n;
  }
  function Xs(n, r, l, o) {
    var c = r.current, d = Gn(), m = ui(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ma(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ya(c, r, m), n !== null && (Va(n, c, m, d), Uc(n, c, m)), m;
  }
  function of(n) {
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
  function Ry() {
    return null;
  }
  var oh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sf(n) {
    this._internalRoot = n;
  }
  Ks.prototype.render = sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    Xs(n, r, null, null);
  }, Ks.prototype.unmount = sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Nu(function() {
        Xs(null, n, null, null);
      }), r[ti] = null;
    }
  };
  function Ks(n) {
    this._internalRoot = n;
  }
  Ks.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = St();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < rn.length && r !== 0 && r < rn[l].priority; l++) ;
      rn.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function sh() {
  }
  function Ty(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = of(m);
          d.call(U);
        };
      }
      var m = Xd(r, o, n, 0, null, !1, !1, "", sh);
      return n._reactRootContainer = m, n[ti] = m.current, vi(n.nodeType === 8 ? n.parentNode : n), Nu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = of(T);
        E.call(U);
      };
    }
    var T = zu(n, 0, !1, null, null, !1, !1, "", sh);
    return n._reactRootContainer = T, n[ti] = T.current, vi(n.nodeType === 8 ? n.parentNode : n), Nu(function() {
      Xs(r, T, l, o);
    }), T;
  }
  function ff(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = of(m);
          E.call(T);
        };
      }
      Xs(r, m, n, c);
    } else m = Ty(l, r, n, c, o);
    return of(m);
  }
  qu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ji(r.pendingLanes);
          l !== 0 && (rs(r, l | 1), tn(r, Ft()), !(kt & 6) && (bu = Ft() + 500, yi()));
        }
        break;
      case 13:
        Nu(function() {
          var o = Ki(n, 1);
          if (o !== null) {
            var c = Gn();
            Va(o, n, 1, c);
          }
        }), Jd(n, 1);
    }
  }, Cl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Va(r, n, 134217728, l);
      }
      Jd(n, 134217728);
    }
  }, is = function(n) {
    if (n.tag === 13) {
      var r = ui(n), l = Ki(n, r);
      if (l !== null) {
        var o = Gn();
        Va(l, n, r, o);
      }
      Jd(n, r);
    }
  }, St = function() {
    return gt;
  }, Xu = function(n, r) {
    var l = gt;
    try {
      return gt = n, r();
    } finally {
      gt = l;
    }
  }, Bt = function(n, r, l) {
    switch (r) {
      case "input":
        if (wn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Dc(o);
              if (!c) throw Error(D(90));
              Fr(o), wn(o, c);
            }
          }
        }
        break;
      case "textarea":
        pr(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, hl = Ou, ru = Nu;
  var _y = { usingClientEntryPoint: !1, Events: [hi, lo, Dc, Ga, ba, Ou] }, Js = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xy = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ae(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || Ry, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zs.isDisabled && Zs.supportsFiber) try {
      gl = Zs.inject(xy), Pr = Zs;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cf(r)) throw Error(D(200));
    return Cy(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!cf(n)) throw Error(D(299));
    var l = !1, o = "", c = oh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zu(n, 1, !1, null, null, l, !1, o, c), n[ti] = r.current, vi(n.nodeType === 8 ? n.parentNode : n), new sf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = Ae(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Nu(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!rl(r)) throw Error(D(200));
    return ff(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!cf(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = oh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Xd(r, null, n, 1, l ?? null, c, !1, d, m), n[ti] = r.current, vi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ks(r);
  }, Qa.render = function(n, r, l) {
    if (!rl(r)) throw Error(D(200));
    return ff(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rl(n)) throw Error(D(40));
    return n._reactRootContainer ? (Nu(function() {
      ff(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ti] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Ou, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rl(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return ff(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, hR;
function ED() {
  if (hR) return Wa;
  hR = 1;
  var F = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Q = nv(), D = ER(), ie = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ie = !1;
    function dt(e) {
      Ie = e;
    }
    function Ee(e) {
      if (!Ie) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ie) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("error", e, a);
      }
    }
    function tt(e, t, a) {
      {
        var i = ie.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ue = 0, he = 1, Xe = 2, te = 3, je = 4, oe = 5, Re = 6, ht = 7, Fn = 8, sn = 9, lt = 10, Ve = 11, Nt = 12, Te = 13, pt = 14, We = 15, xn = 16, gn = 17, Jt = 18, Ct = 19, nn = 21, Pe = 22, at = 23, wt = 24, it = 25, B = !0, me = !1, le = !1, b = !1, $ = !1, Oe = !0, Be = !1, et = !0, ut = !0, yt = !0, ft = !0, Rt = /* @__PURE__ */ new Set(), Pt = {}, Xn = {};
    function Fr(e, t) {
      fr(e, t), fr(e + "Capture", t);
    }
    function fr(e, t) {
      Pt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Pt[e] = t;
      {
        var a = e.toLowerCase();
        Xn[a] = e, e === "onDoubleClick" && (Xn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
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
        return Nn(e), !1;
      } catch {
        return !0;
      }
    }
    function Nn(e) {
      return "" + e;
    }
    function gr(e, t) {
      if (wn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function dr(e) {
      if (wn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function Vn(e, t) {
      if (wn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function ra(e, t) {
      if (wn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function aa(e) {
      if (wn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function pr(e) {
      if (wn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    var ia = 0, Jn = 1, Sr = 2, cn = 3, la = 4, ua = 5, oa = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ne + "][" + ke + "]*$"), At = {}, Lt = {};
    function bn(e) {
      return Kn.call(Lt, e) ? !0 : Kn.call(At, e) ? !1 : ot.test(e) ? (Lt[e] = !0, !0) : (At[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
    function In(e) {
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
    var ba = /[\-\:]([a-z])/g, hl = function(e) {
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
      var t = e.replace(ba, hl);
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
      var t = e.replace(ba, hl);
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
      var t = e.replace(ba, hl);
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
    var au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ml = !1;
    function qa(e) {
      !ml && au.test(e) && (ml = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
    function Mi(e, t, a, i) {
      var u = In(t);
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
    var Er = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), zi = Symbol.for("react.strict_mode"), yl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), W = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Ln = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), hr = Symbol.for("react.cache"), Ft = Symbol.for("react.tracing_marker"), ka = Symbol.iterator, Mn = "@@iterator";
    function Vr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ka && e[ka] || e[Mn];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, Ui = 0, Ai, gl, Pr, Jo, Cr, Zo, es;
    function ts() {
    }
    ts.__reactDisabledLog = !0;
    function iu() {
      {
        if (Ui === 0) {
          Ai = console.log, gl = console.info, Pr = console.warn, Jo = console.error, Cr = console.group, Zo = console.groupCollapsed, es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ts,
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
    function Gu() {
      {
        if (Ui--, Ui === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: Ai
            }),
            info: nt({}, e, {
              value: gl
            }),
            warn: nt({}, e, {
              value: Pr
            }),
            error: nt({}, e, {
              value: Jo
            }),
            group: nt({}, e, {
              value: Cr
            }),
            groupCollapsed: nt({}, e, {
              value: Zo
            }),
            groupEnd: nt({}, e, {
              value: es
            })
          });
        }
        Ui < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = ie.ReactCurrentDispatcher, fi;
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
    var Sl = !1, di;
    {
      var lu = typeof WeakMap == "function" ? WeakMap : Map;
      di = new lu();
    }
    function uu(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = di.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
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
        Sl = !1, ji.current = s, Gu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", z = _ ? Oa(_) : "";
      return typeof e == "function" && di.set(e, z), z;
    }
    function El(e, t, a) {
      return uu(e, !0);
    }
    function ns(e, t, a) {
      return uu(e, !1);
    }
    function rs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, rs(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Le:
          return Oa("Suspense");
        case vt:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return ns(e.render);
          case Tt:
            return gt(e.type, t, a);
          case Ae: {
            var i = e, u = i._payload, s = i._init;
            try {
              return gt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function as(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return Oa(e.type);
        case xn:
          return Oa("Lazy");
        case Te:
          return Oa("Suspense");
        case Ct:
          return Oa("SuspenseList");
        case Ue:
        case Xe:
        case We:
          return ns(e.type);
        case Ve:
          return ns(e.type.render);
        case he:
          return El(e.type);
        default:
          return "";
      }
    }
    function qu(e) {
      try {
        var t = "", a = e;
        do
          t += as(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Cl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function is(e) {
      return e.displayName || "Context";
    }
    function St(e) {
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
        case yl:
          return "Profiler";
        case zi:
          return "StrictMode";
        case Le:
          return "Suspense";
        case vt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var t = e;
            return is(t) + ".Consumer";
          case R:
            var a = e;
            return is(a._context) + ".Provider";
          case q:
            return Cl(e, e.render, "ForwardRef");
          case Tt:
            var i = e.displayName || null;
            return i !== null ? i : St(e.type) || "Memo";
          case Ae: {
            var u = e, s = u._payload, f = u._init;
            try {
              return St(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Xu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case sn:
          var i = a;
          return ou(i) + ".Consumer";
        case lt:
          var u = a;
          return ou(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ve:
          return Xu(a, a.render, "ForwardRef");
        case ht:
          return "Fragment";
        case oe:
          return a;
        case je:
          return "Portal";
        case te:
          return "Root";
        case Re:
          return "Text";
        case xn:
          return St(a);
        case Fn:
          return a === zi ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case Nt:
          return "Profiler";
        case nn:
          return "Scope";
        case Te:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case he:
        case Ue:
        case gn:
        case Xe:
        case pt:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ka = ie.ReactDebugCurrentFrame, vn = null, Br = !1;
    function Na() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function Rl() {
      return vn === null ? "" : qu(vn);
    }
    function rn() {
      Ka.getCurrentStack = null, vn = null, Br = !1;
    }
    function hn(e) {
      Ka.getCurrentStack = e === null ? null : Rl, vn = e, Br = !1;
    }
    function ls() {
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
    var Ku = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function su(e, t) {
      Ku[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tl(e) {
      return e._valueTracker;
    }
    function La(e) {
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
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Hi(e) {
      Tl(e) || (e._valueTracker = fu(e));
    }
    function Ju(e) {
      if (!e)
        return !1;
      var t = Tl(e);
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
    var Vi = !1, Zu = !1, us = !1, Za = !1;
    function eo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Vi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: eo(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Mi(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = eo(t);
        !a._wrapperState.controlled && i && !Za && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Za = !0), a._wrapperState.controlled && !i && !us && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), us = !0);
      }
      M(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? $e(a, t.type, u) : t.hasOwnProperty("defaultValue") && $e(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
            Ju(f), j(f, p);
          }
        }
      }
    }
    function $e(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var ct = !1, Ht = !1, $t = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($t || ($t = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ct && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ct = !0);
    }
    function Yt(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var an = Array.isArray;
    function bt(e) {
      return an(e);
    }
    var _l;
    _l = !1;
    function to() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var os = ["value", "defaultValue"];
    function ss(e) {
      {
        su("select", e);
        for (var t = 0; t < os.length; t++) {
          var a = os[t];
          if (e[a] != null) {
            var i = bt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, to()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, to());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
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
    function cs(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function fs(e, t) {
      var a = e;
      ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_l && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _l = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ym(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rv(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var av = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function iv(e, t) {
      var a = e;
      su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), av = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (bt(u)) {
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
    function gc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qm(e, t) {
      lv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Wm = "http://www.w3.org/1998/Math/MathML", Sc = "http://www.w3.org/2000/svg";
    function Yf(e) {
      switch (e) {
        case "svg":
          return Sc;
        case "math":
          return Wm;
        default:
          return Bi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Bi ? Yf(t) : e === Sc && t === "foreignObject" ? Bi : e;
    }
    var Gm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ec, uv = Gm(function(e, t) {
      if (e.namespaceURI === Sc && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ir = 1, $i = 3, En = 8, ca = 9, Wf = 11, ds = function(e, t) {
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
    }, no = {
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
    Object.keys(no).forEach(function(e) {
      cv.forEach(function(t) {
        no[sv(t, e)] = no[e];
      });
    });
    function xl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(no.hasOwnProperty(e) && no[e]) ? t + "px" : (ra(t, e), ("" + t).trim());
    }
    var qm = /([A-Z])/g, Xm = /^ms-/;
    function Km(e) {
      return e.replace(qm, "-$1").toLowerCase().replace(Xm, "-ms-");
    }
    var Gf = function() {
    };
    {
      var fv = /^(?:webkit|moz|o)[A-Z]/, ps = /^-ms-/, vs = /-(.)/g, dv = /;\s*$/, Ii = {}, qf = {}, Xf = !1, Cc = !1, Kf = function(e) {
        return e.replace(vs, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kf(e.replace(ps, "ms-"))
        ));
      }, vv = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        qf.hasOwnProperty(t) && qf[t] || (qf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(dv, "")));
      }, Jm = function(e, t) {
        Xf || (Xf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Zm = function(e, t) {
        Cc || (Cc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gf = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : fv.test(e) ? vv(e) : dv.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? Jm(e, t) : isFinite(t) || Zm(e, t));
      };
    }
    var ey = Gf;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Km(i)) + ":", t += xl(i, u, s), a = ";";
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
          u || ey(i, t[i]);
          var s = xl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ei(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ro(e) {
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
        var a = ro(e), i = ro(t), u = {};
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
    }, Sv = nt({
      menuitem: !0
    }, gv), Ev = "__html";
    function hs(e, t) {
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
    var Rc = {
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
    }, wl = {}, ms = new RegExp("^(aria)-[" + ke + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function Cv(e, t) {
      {
        if (Kn.call(wl, t) && wl[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), wl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), wl[t] = !0, !0;
        }
        if (ms.test(t)) {
          var u = t.toLowerCase(), s = pu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return wl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), wl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Tc(e, t) {
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
    function ao(e, t) {
      du(e, t) || Tc(e, t);
    }
    var _c = !1;
    function Rv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !_c && (_c = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ys = function() {
    };
    {
      var mr = {}, Zf = /^on./, Tv = /^on[^A-Z]/, _v = new RegExp("^(aria)-[" + ke + "]*$"), xv = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      ys = function(e, t, a, i) {
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
        var v = In(t), y = v !== null && v.type === ia;
        if (Rc.hasOwnProperty(u)) {
          var g = Rc[u];
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
          var s = ys(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function bl(e, t, a) {
      du(e, t) || wv(e, t, a);
    }
    var xc = 1, gs = 2, Ss = 4, ny = xc | gs | Ss, Yi = null;
    function ry(e) {
      Yi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Yi = e;
    }
    function bv() {
      Yi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Yi = null;
    }
    function Dv(e) {
      return e === Yi;
    }
    function qt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var Es = null, Qi = null, vi = null;
    function ed(e) {
      var t = Uo(e);
      if (t) {
        if (typeof Es != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = bh(a);
          Es(t.stateNode, t.type, i);
        }
      }
    }
    function td(e) {
      Es = e;
    }
    function io(e) {
      Qi ? vi ? vi.push(e) : vi = [e] : Qi = e;
    }
    function wc() {
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
      var e = wc();
      e && (kv(), vu());
    }
    function Cs(e, t, a) {
      if (rd)
        return e(t, a);
      rd = !0;
      try {
        return nd(e, t, a);
      } finally {
        rd = !1, Ov();
      }
    }
    function bc(e, t, a) {
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
    var Rs = !1;
    if (Sn)
      try {
        var Ts = {};
        Object.defineProperty(Ts, "passive", {
          get: function() {
            Rs = !0;
          }
        }), window.addEventListener("test", Ts, Ts), window.removeEventListener("test", Ts, Ts);
      } catch {
        Rs = !1;
      }
    function ld(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Nv = ld;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ud = document.createElement("react");
      Nv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, _ = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          ud.removeEventListener(V, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function ze() {
          w = !0, H(), a.apply(i, ue), _ = !1;
        }
        var De, xt = !1, mt = !1;
        function O(N) {
          if (De = N.error, xt = !0, De === null && N.colno === 0 && N.lineno === 0 && (mt = !0), N.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ud.addEventListener(V, ze, !1), g.initEvent(V, !1, !1), ud.dispatchEvent(g), A && Object.defineProperty(window, "event", A), w && _ && (xt ? mt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", O), !w)
          return H(), ld.apply(this, arguments);
      };
    }
    var od = Nv, fa = !1, _s = null, Wi = !1, Ma = null, xs = {
      onError: function(e) {
        fa = !0, _s = e;
      }
    };
    function ti(e, t, a, i, u, s, f, p, v) {
      fa = !1, _s = null, od.apply(xs, arguments);
    }
    function sd(e, t, a, i, u, s, f, p, v) {
      if (ti.apply(this, arguments), fa) {
        var y = Gi();
        Wi || (Wi = !0, Ma = y);
      }
    }
    function ay() {
      if (Wi) {
        var e = Ma;
        throw Wi = !1, Ma = null, e;
      }
    }
    function iy() {
      return fa;
    }
    function Gi() {
      if (fa) {
        var e = _s;
        return fa = !1, _s = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hi(e) {
      return e._reactInternals;
    }
    function lo(e) {
      return e._reactInternals !== void 0;
    }
    function Dc(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), Xt = (
      /*                    */
      2
    ), _e = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), Yn = (
      /*                     */
      64
    ), Ke = (
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
    ), Yr = (
      /*                      */
      2048
    ), mi = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), mu = (
      /*             */
      16384
    ), Lv = Yr | _e | Yn | da | zn | mu, qi = (
      /*               */
      32767
    ), kl = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), kc = (
      /* */
      131072
    ), Mv = (
      /*                       */
      1048576
    ), yi = (
      /*                    */
      2097152
    ), Ua = (
      /*                 */
      4194304
    ), Ol = (
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
      _e | zn | 0
    ), Wr = Xt | _e | Mt | za | da | mi | Dl, ri = _e | Yn | da | Dl, Gr = Yr | Mt, tr = Ua | Ol | yi, gu = ie.ReactCurrentOwner;
    function Nl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Xt | mi)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Oc(e) {
      if (e.tag === Te) {
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
    function Nc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Nl(e) === e;
    }
    function va(e) {
      {
        var t = gu.current;
        if (t !== null && t.tag === he) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = hi(e);
      return u ? Nl(u) === u : !1;
    }
    function ln(e) {
      if (Nl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ja(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nl(e);
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
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function cd(e) {
      var t = ja(e);
      return t !== null ? fd(t) : null;
    }
    function fd(e) {
      if (e.tag === oe || e.tag === Re)
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
      if (e.tag === oe || e.tag === Re)
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
    var pd = D.unstable_scheduleCallback, Mc = D.unstable_cancelCallback, zv = D.unstable_shouldYield, uo = D.unstable_requestPaint, Un = D.unstable_now, ly = D.unstable_getCurrentPriorityLevel, Ll = D.unstable_ImmediatePriority, oo = D.unstable_UserBlockingPriority, Ml = D.unstable_NormalPriority, Uv = D.unstable_LowPriority, zl = D.unstable_IdlePriority, Av = D.unstable_yieldValue, zc = D.unstable_setDisableYieldValue, Xi = null, Dn = null, ae = null, Fa = !1, ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function vd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ut && (e = nt({}, e, {
          getLaneLabelMap: Ul,
          injectProfilingHooks: Ki
        })), Xi = t.inject(e), Dn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function so(e, t) {
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
          var a = (e.current.flags & Ke) === Ke;
          if (yt) {
            var i;
            switch (t) {
              case Sa:
                i = Ll;
                break;
              case Ri:
                i = oo;
                break;
              case li:
                i = Ml;
                break;
              case Fs:
                i = zl;
                break;
              default:
                i = Ml;
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
    function Pn(e) {
      if (typeof Av == "function" && (zc(e), dt(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      ae = e;
    }
    function Ul() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ds; a++) {
          var i = oy(t);
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
    function Uc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function jv() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function Ac(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fv() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function ws(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function gi() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function co(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function fo() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function Eu(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function gd(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function po(e) {
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
    function bs(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function Ed() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function jc() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function Fc(e) {
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
    ), Ne = (
      /*                 */
      1
    ), qe = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), qr = (
      /*              */
      16
    ), vo = Math.clz32 ? Math.clz32 : Rd, uy = Math.log, yr = Math.LN2;
    function Rd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (uy(t) / yr | 0) | 0;
    }
    var Ds = 31, I = (
      /*                        */
      0
    ), Kt = (
      /*                          */
      0
    ), we = (
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
    ), ho = (
      /*                */
      32
    ), Cu = (
      /*                       */
      4194240
    ), mo = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Vc = (
      /*                        */
      256
    ), Pc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), Ru = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), yo = (
      /*                        */
      8192
    ), go = (
      /*                        */
      16384
    ), Ic = (
      /*                       */
      32768
    ), ks = (
      /*                       */
      65536
    ), Yc = (
      /*                       */
      131072
    ), Qc = (
      /*                       */
      262144
    ), Wc = (
      /*                       */
      524288
    ), Gc = (
      /*                       */
      1048576
    ), Os = (
      /*                       */
      2097152
    ), Ns = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), qc = (
      /*                             */
      8388608
    ), Td = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), _d = (
      /*                             */
      67108864
    ), Vv = Tu, So = (
      /*          */
      134217728
    ), xd = (
      /*                          */
      268435455
    ), Eo = (
      /*               */
      268435456
    ), Ei = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function oy(e) {
      {
        if (e & we)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & ai)
          return "InputContinuous";
        if (e & Zi)
          return "DefaultHydration";
        if (e & ii)
          return "Default";
        if (e & ho)
          return "TransitionHydration";
        if (e & Cu)
          return "Transition";
        if (e & Ns)
          return "Retry";
        if (e & So)
          return "SelectiveHydration";
        if (e & Eo)
          return "IdleHydration";
        if (e & Ei)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var en = -1, Xr = mo, Co = Tu;
    function Al(e) {
      switch (jl(e)) {
        case we:
          return we;
        case Si:
          return Si;
        case ai:
          return ai;
        case Zi:
          return Zi;
        case ii:
          return ii;
        case ho:
          return ho;
        case mo:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case Ru:
        case $c:
        case yo:
        case go:
        case Ic:
        case ks:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case Os:
          return e & Cu;
        case Tu:
        case qc:
        case Td:
        case Xc:
        case _d:
          return e & Ns;
        case So:
          return So;
        case Eo:
          return Eo;
        case Ei:
          return Ei;
        case ga:
          return ga;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ls(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & xd;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = Al(p);
        else {
          var v = f & s;
          v !== I && (i = Al(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = Al(y) : s !== I && (i = Al(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = jl(i), w = jl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ii && (w & Cu) !== I
        )
          return t;
      }
      (i & ai) !== I && (i |= a & ii);
      var _ = e.entangledLanes;
      if (_ !== I)
        for (var z = e.entanglements, A = i & _; A > 0; ) {
          var H = Fl(A), ue = 1 << H;
          i |= z[H], A &= ~ue;
        }
      return i;
    }
    function Pv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Fl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Bv(e, t) {
      switch (e) {
        case we:
        case Si:
        case ai:
          return t + 250;
        case Zi:
        case ii:
        case ho:
        case mo:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case Ru:
        case $c:
        case yo:
        case go:
        case Ic:
        case ks:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case Os:
          return t + 5e3;
        case Tu:
        case qc:
        case Td:
        case Xc:
        case _d:
          return en;
        case So:
        case Eo:
        case Ei:
        case ga:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function wd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === I || (v & u) !== I) && (s[p] = Bv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Ro(e) {
      return Al(e.pendingLanes);
    }
    function Ms(e) {
      var t = e.pendingLanes & ~ga;
      return t !== I ? t : t & ga ? ga : I;
    }
    function bd(e) {
      return (e & we) !== I;
    }
    function Dd(e) {
      return (e & xd) !== I;
    }
    function kd(e) {
      return (e & Ns) === e;
    }
    function $v(e) {
      var t = we | ai | ii;
      return (e & t) === I;
    }
    function Iv(e) {
      return (e & Cu) === e;
    }
    function zs(e, t) {
      var a = Si | ai | Zi | ii;
      return (t & a) !== I;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Qv(e) {
      return (e & Cu) !== I;
    }
    function Tr() {
      var e = Xr;
      return Xr <<= 1, (Xr & Cu) === I && (Xr = mo), e;
    }
    function _r() {
      var e = Co;
      return Co <<= 1, (Co & Ns) === I && (Co = Tu), e;
    }
    function jl(e) {
      return e & -e;
    }
    function To(e) {
      return jl(e);
    }
    function Fl(e) {
      return 31 - vo(e);
    }
    function Kc(e) {
      return Fl(e);
    }
    function Kr(e, t) {
      return (e & t) !== I;
    }
    function Hl(e, t) {
      return (e & t) === t;
    }
    function rt(e, t) {
      return e | t;
    }
    function _o(e, t) {
      return e & ~t;
    }
    function Od(e, t) {
      return e & t;
    }
    function sy(e) {
      return e;
    }
    function Nd(e, t) {
      return e !== Kt && e < t ? e : t;
    }
    function Us(e) {
      for (var t = [], a = 0; a < Ds; a++)
        t.push(e);
      return t;
    }
    function xo(e, t, a) {
      e.pendingLanes |= t, t !== Ei && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = Kc(t);
      i[u] = a;
    }
    function Ld(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Fl(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function As(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function cy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p;
        i[p] = I, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Fl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Md(e, t) {
      var a = jl(t), i;
      switch (a) {
        case ai:
          i = Si;
          break;
        case ii:
          i = Zi;
          break;
        case mo:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case Ru:
        case $c:
        case yo:
        case go:
        case Ic:
        case ks:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case Os:
        case Tu:
        case qc:
        case Td:
        case Xc:
        case _d:
          i = ho;
          break;
        case Ei:
          i = Eo;
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
          var u = Kc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function js(e, t) {
      if (ha)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Kc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ci(e, t) {
      return null;
    }
    var Sa = we, Ri = ai, li = ii, Fs = Ei, wo = Kt;
    function xr() {
      return wo;
    }
    function Dt(e) {
      wo = e;
    }
    function fy(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function dy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Zc(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = jl(e);
      return Qn(Sa, t) ? Qn(Ri, t) ? Dd(t) ? li : Fs : Ri : Sa;
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
    function Hs(e) {
      Ad = e;
    }
    var Vs;
    function jd(e) {
      Vs = e;
    }
    var Fd;
    function qv(e) {
      Fd = e;
    }
    var Hd;
    function Vd(e) {
      Hd = e;
    }
    var Ps = !1, An = [], Wn = null, wr = null, el = null, bo = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), tl = [], Ti = [
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
    function py(e) {
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
    function Pd(e, t) {
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
          bo.delete(a);
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
    function Do(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = Uo(t);
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
          return Wn = Do(Wn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return wr = Do(wr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return el = Do(el, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bo.set(y, Do(bo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return br.set(w, Do(br.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Jv(e) {
      var t = nc(e.target);
      if (t !== null) {
        var a = Nl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Oc(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Vs(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (pe(s)) {
              e.blockedOn = Nc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ef(e) {
      for (var t = Fd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tl.length && Qn(t, tl[i].priority); i++)
        ;
      tl.splice(i, 0, a), i === 0 && Jv(a);
    }
    function ko(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ys(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), bv();
        } else {
          var f = Uo(i);
          return f !== null && Ad(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ea(e, t, a) {
      ko(e) && a.delete(t);
    }
    function kt() {
      Ps = !1, Wn !== null && ko(Wn) && (Wn = null), wr !== null && ko(wr) && (wr = null), el !== null && ko(el) && (el = null), bo.forEach(Ea), br.forEach(Ea);
    }
    function Cn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ps || (Ps = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, kt)));
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
      bo.forEach(i), br.forEach(i);
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
    var Rn = ie.ReactCurrentBatchConfig, Dr = !0;
    function xu(e) {
      Dr = !!e;
    }
    function Bn() {
      return Dr;
    }
    function Bs(e, t, a) {
      var i = bu(t), u;
      switch (i) {
        case Sa:
          u = wu;
          break;
        case Ri:
          u = tf;
          break;
        case li:
        default:
          u = $s;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wu(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        Dt(Sa), $s(e, t, a, i);
      } finally {
        Dt(u), Rn.transition = s;
      }
    }
    function tf(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        Dt(Ri), $s(e, t, a, i);
      } finally {
        Dt(u), Rn.transition = s;
      }
    }
    function $s(e, t, a, i) {
      Dr && Is(e, t, a, i);
    }
    function Is(e, t, a, i) {
      var u = Ys(e, t, a, i);
      if (u === null) {
        Ly(e, t, i, nr, a), Pd(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & Ss && py(e)) {
        for (; u !== null; ) {
          var s = Uo(u);
          s !== null && Gv(s);
          var f = Ys(e, t, a, i);
          if (f === null && Ly(e, t, i, nr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ly(e, t, i, null, a);
    }
    var nr = null;
    function Ys(e, t, a, i) {
      nr = null;
      var u = qt(i), s = nc(u);
      if (s !== null) {
        var f = Nl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = Oc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (pe(y))
              return Nc(f);
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
          var t = ly();
          switch (t) {
            case Ll:
              return Sa;
            case oo:
              return Ri;
            case Ml:
            case Uv:
              return li;
            case zl:
              return Fs;
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
    function nf(e, t, a) {
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
    var Pl = null, _i = null, Bl = null;
    function Qs(e) {
      return Pl = e, _i = Gs(), !0;
    }
    function $d() {
      Pl = null, _i = null, Bl = null;
    }
    function Ws() {
      if (Bl)
        return Bl;
      var e, t = _i, a = t.length, i, u = Gs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Bl = u.slice(e, p), Bl;
    }
    function Gs() {
      return "value" in Pl ? Pl.value : Pl.textContent;
    }
    function Gn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ui() {
      return !0;
    }
    function Va() {
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
        return y ? this.isDefaultPrevented = ui : this.isDefaultPrevented = Va, this.isPropagationStopped = Va, this;
      }
      return nt(t.prototype, {
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
    }, qs = tn(Du), ku = nt({}, Du, {
      view: 0,
      detail: 0
    }), vy = tn(ku), xi, rf, Ou;
    function Nu(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (xi = e.screenX - Ou.screenX, rf = e.screenY - Ou.screenY) : (xi = 0, rf = 0), Ou = e);
    }
    var Oo = nt({}, ku, {
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
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Nu(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rf;
      }
    }), $l = tn(Oo), Zv = nt({}, Oo, {
      dataTransfer: 0
    }), eh = tn(Zv), Id = nt({}, ku, {
      relatedTarget: 0
    }), No = tn(Id), hy = nt({}, Du, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), my = tn(hy), th = nt({}, Du, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), nh = tn(th), Lu = nt({}, Du, {
      data: 0
    }), rh = tn(Lu), Lo = rh, ah = {
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
    function yy(e) {
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
    function gy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return gy;
    }
    var lh = nt({}, ku, {
      key: yy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
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
    }), uh = tn(lh), Sy = nt({}, Oo, {
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
    }), Ca = tn(Sy), Qd = nt({}, ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), Ey = tn(Qd), Il = nt({}, Du, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), af = tn(Il), Mu = nt({}, Oo, {
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
    }), lf = tn(Mu), Wd = [9, 13, 27, 32], uf = 229, Gd = Sn && "CompositionEvent" in window, zu = null;
    Sn && "documentMode" in document && (zu = document.documentMode);
    var Cy = Sn && "TextEvent" in window && !zu, qd = Sn && (!Gd || zu && zu > 8 && zu <= 11), Xd = 32, Xs = String.fromCharCode(Xd);
    function of() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function Jd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ry(e) {
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
      return e === "keydown" && t.keyCode === uf;
    }
    function sf(e, t) {
      switch (e) {
        case "keyup":
          return Wd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== uf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ks(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function cf(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function sh(e, t, a, i, u) {
      var s, f;
      if (Gd ? s = Ry(t) : rl ? sf(t, i) && (s = "onCompositionEnd") : oh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      qd && !cf(i) && (!rl && s === "onCompositionStart" ? rl = Qs(u) : s === "onCompositionEnd" && rl && (f = Ws()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Ks(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Ty(e, t) {
      switch (e) {
        case "compositionend":
          return Ks(t);
        case "keypress":
          var a = t.which;
          return a !== Xd ? null : (Kd = !0, Xs);
        case "textInput":
          var i = t.data;
          return i === Xs && Kd ? null : i;
        default:
          return null;
      }
    }
    function ff(e, t) {
      if (rl) {
        if (e === "compositionend" || !Gd && sf(e, t)) {
          var a = Ws();
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
          return qd && !cf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _y(e, t, a, i, u) {
      var s;
      if (Cy ? s = Ty(t, i) : s = ff(t, i), !s)
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
    function Js(e, t, a, i, u, s, f) {
      sh(e, t, a, i, u), _y(e, t, a, i, u);
    }
    var xy = {
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
    function Zs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xy[e.type] : t === "textarea";
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
      io(i);
      var u = vh(t, "onChange");
      if (u.length > 0) {
        var s = new qs("onChange", "change", null, a, i);
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
      l(t, c, e, qt(e)), Cs(E, t);
    }
    function E(e) {
      A0(e, 0);
    }
    function T(e) {
      var t = yf(e);
      if (Ju(t))
        return e;
    }
    function U(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    Sn && (G = n("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", ce);
    }
    function Y() {
      o && (o.detachEvent("onpropertychange", ce), o = null, c = null);
    }
    function ce(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (Y(), X(t, a)) : e === "focusout" && Y();
    }
    function Ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function kn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function k(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || $e(e, "number", e.value);
    }
    function Z(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window, v, y;
      if (d(p) ? v = U : Zs(p) ? G ? v = x : (v = Ce, y = ye) : kn(p) && (v = k), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && L(p);
    }
    function xe() {
      fr("onMouseEnter", ["mouseout", "mouseover"]), fr("onMouseLeave", ["mouseout", "mouseover"]), fr("onPointerEnter", ["pointerout", "pointerover"]), fr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fe(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Dv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (nc(y) || dp(y)))
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
          if (_ = a, z = A ? nc(A) : null, z !== null) {
            var H = Nl(z);
            (z !== H || z.tag !== oe && z.tag !== Re) && (z = null);
          }
        } else
          _ = null, z = a;
        if (_ !== z) {
          var ue = $l, ze = "onMouseLeave", De = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = Ca, ze = "onPointerLeave", De = "onPointerEnter", xt = "pointer");
          var mt = _ == null ? g : yf(_), O = z == null ? g : yf(z), V = new ue(ze, xt + "leave", _, i, u);
          V.target = mt, V.relatedTarget = O;
          var N = null, K = nc(u);
          if (K === a) {
            var ve = new ue(De, xt + "enter", z, i, u);
            ve.target = O, ve.relatedTarget = mt, N = ve;
          }
          IR(e, V, N, _, z);
        }
      }
    }
    function He(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var be = typeof Object.is == "function" ? Object.is : He;
    function _n(e, t) {
      if (be(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Kn.call(t, s) || !be(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ot(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Yl(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ch(e, t) {
      for (var a = Ot(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ot(Yl(a));
      }
    }
    function TR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return _R(e, u, s, f, p);
    }
    function _R(e, t, a, i, u) {
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
    function xR(e, t) {
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
    function _0(e) {
      return e && e.nodeType === $i;
    }
    function x0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : _0(e) ? !1 : _0(t) ? x0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function wR(e) {
      return e && e.ownerDocument && x0(e.ownerDocument.documentElement, e);
    }
    function bR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function w0() {
      for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
        if (bR(t))
          e = t.contentWindow;
        else
          return t;
        t = pi(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function DR() {
      var e = w0();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? OR(e) : null
      };
    }
    function kR(e) {
      var t = w0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && wR(a)) {
        i !== null && wy(a) && NR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ir && u.push({
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
    function OR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = TR(e), t || {
        start: 0,
        end: 0
      };
    }
    function NR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : xR(e, t);
    }
    var LR = Sn && "documentMode" in document && document.documentMode <= 11;
    function MR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var df = null, by = null, Zd = null, Dy = !1;
    function zR(e) {
      if ("selectionStart" in e && wy(e))
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
    function UR(e) {
      return e.window === e ? e.document : e.nodeType === ca ? e : e.ownerDocument;
    }
    function b0(e, t, a) {
      var i = UR(a);
      if (!(Dy || df == null || df !== pi(i))) {
        var u = zR(df);
        if (!Zd || !_n(Zd, u)) {
          Zd = u;
          var s = vh(by, "onSelect");
          if (s.length > 0) {
            var f = new qs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = df;
          }
        }
      }
    }
    function AR(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Zs(p) || p.contentEditable === "true") && (df = p, by = a, Zd = null);
          break;
        case "focusout":
          df = null, by = null, Zd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Dy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Dy = !1, b0(e, i, u);
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
          if (LR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          b0(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var pf = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, ky = {}, D0 = {};
    Sn && (D0 = document.createElement("div").style, "AnimationEvent" in window || (delete pf.animationend.animation, delete pf.animationiteration.animation, delete pf.animationstart.animation), "TransitionEvent" in window || delete pf.transitionend.transition);
    function dh(e) {
      if (ky[e])
        return ky[e];
      if (!pf[e])
        return e;
      var t = pf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in D0)
          return ky[e] = t[a];
      return e;
    }
    var k0 = dh("animationend"), O0 = dh("animationiteration"), N0 = dh("animationstart"), L0 = dh("transitionend"), M0 = /* @__PURE__ */ new Map(), z0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mo(e, t) {
      M0.set(e, t), Fr(t, [e]);
    }
    function jR() {
      for (var e = 0; e < z0.length; e++) {
        var t = z0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mo(a, "on" + i);
      }
      Mo(k0, "onAnimationEnd"), Mo(O0, "onAnimationIteration"), Mo(N0, "onAnimationStart"), Mo("dblclick", "onDoubleClick"), Mo("focusin", "onFocus"), Mo("focusout", "onBlur"), Mo(L0, "onTransitionEnd");
    }
    function FR(e, t, a, i, u, s, f) {
      var p = M0.get(t);
      if (p !== void 0) {
        var v = qs, y = t;
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
            y = "focus", v = No;
            break;
          case "focusout":
            y = "blur", v = No;
            break;
          case "beforeblur":
          case "afterblur":
            v = No;
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
            v = $l;
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
            v = Ey;
            break;
          case k0:
          case O0:
          case N0:
            v = my;
            break;
          case L0:
            v = af;
            break;
          case "scroll":
            v = vy;
            break;
          case "wheel":
            v = lf;
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
        var g = (s & Ss) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = BR(a, p, i.type, g, w);
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
    jR(), xe(), r(), MR(), of();
    function HR(e, t, a, i, u, s, f) {
      FR(e, t, a, i, u, s);
      var p = (s & ny) === 0;
      p && (Fe(e, t, a, i, u), Z(e, t, a, i, u), AR(e, t, a, i, u), Js(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Oy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function U0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, sd(i, t, void 0, e), e.currentTarget = null;
    }
    function VR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          U0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, _ = g.currentTarget, z = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          U0(e, z, _), i = w;
        }
    }
    function A0(e, t) {
      for (var a = (t & Ss) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        VR(s, f, a);
      }
      ay();
    }
    function PR(e, t, a, i, u) {
      var s = qt(a), f = [];
      HR(f, e, i, a, s, t), A0(f, t);
    }
    function yn(e, t) {
      Oy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = y_(t), u = YR(e);
      i.has(u) || (j0(t, e, gs, a), i.add(u));
    }
    function Ny(e, t, a) {
      Oy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ss), j0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[ph]) {
        e[ph] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (Oy.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === ca ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function j0(e, t, a, i, u) {
      var s = Bs(e, t, a), f = void 0;
      Rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : nf(e, t, s) : f !== void 0 ? Vl(e, t, s, f) : nl(e, t, s);
    }
    function F0(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function Ly(e, t, a, i, u) {
      var s = i;
      if (!(t & xc) && !(t & gs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === je) {
              var y = p.stateNode.containerInfo;
              if (F0(y, f))
                break;
              if (v === je)
                for (var g = p.return; g !== null; ) {
                  var w = g.tag;
                  if (w === te || w === je) {
                    var _ = g.stateNode.containerInfo;
                    if (F0(_, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = nc(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === oe || A === Re) {
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
      Cs(function() {
        return PR(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function BR(e, t, a, i, u, s) {
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
    function vf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function $R(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = vf(s))
        u++;
      for (var f = 0, p = i; p; p = vf(p))
        f++;
      for (; u - f > 0; )
        a = vf(a), u--;
      for (; f - u > 0; )
        i = vf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = vf(a), i = vf(i);
      }
      return null;
    }
    function H0(e, t, a, i, u) {
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
    function IR(e, t, a, i, u) {
      var s = i && u ? $R(i, u) : null;
      i !== null && H0(e, t, i, s, !1), u !== null && a !== null && H0(e, a, u, s, !0);
    }
    function YR(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, rp = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", zo = "suppressHydrationWarning", V0 = "autoFocus", ec = "children", tc = "style", mh = "__html", My, yh, ap, P0, gh, B0, $0;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      ao(e, t), Rv(e, t), bl(e, t, {
        registrationNameDependencies: Pt,
        possibleRegistrationNames: Xn
      });
    }, B0 = Sn && !document.documentMode, ap = function(e, t, a) {
      if (!Pa) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, P0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, $0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var QR = /\r\n?/g, WR = /\u0000|\uFFFD/g;
    function Sh(e) {
      aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(QR, `
`).replace(WR, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function I0(e) {
      return e.nodeType === ca ? e : e.ownerDocument;
    }
    function GR() {
    }
    function Ch(e) {
      e.onclick = GR;
    }
    function qR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === tc)
            f && Object.freeze(f), mv(t, f);
          else if (s === rp) {
            var p = f ? f[mh] : void 0;
            p != null && uv(t, p);
          } else if (s === ec)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ds(t, f);
            } else typeof f == "number" && ds(t, "" + f);
          else s === hh || s === zo || s === V0 || (Pt.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Mi(t, s, f, u));
        }
    }
    function XR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === tc ? mv(e, f) : s === rp ? uv(e, f) : s === ec ? ds(e, f) : Mi(e, s, f, i);
      }
    }
    function KR(e, t, a, i) {
      var u, s = I0(a), f, p = i;
      if (p === Bi && (p = Yf(e)), p === Bi) {
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
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(My, e) && (My[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function JR(e, t) {
      return I0(t).createTextNode(e);
    }
    function ZR(e, t, a, i) {
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
          It(e, a), s = a;
          break;
        case "select":
          fs(e, a), s = cs(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), s = If(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hs(t, s), qR(t, e, i, s, u), t) {
        case "input":
          Hi(e), J(e, a, !1);
          break;
        case "textarea":
          Hi(e), gc(e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          $f(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function eT(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = cs(e, a), p = cs(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      hs(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === tc) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === ec || v === hh || v === zo || v === V0 || (Pt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === z || _ == null && z == null))
          if (v === tc)
            if (_ && Object.freeze(_), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && z[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === rp) {
            var A = _ ? _[mh] : void 0, H = z ? z[mh] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === ec ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === hh || v === zo || (Pt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && gh(v, _), v === "onScroll" && yn("scroll", e)), !s && z !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (yv(g, p[tc]), (s = s || []).push(tc, g)), s;
    }
    function tT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = du(a, i), f = du(a, u);
      switch (XR(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          Ym(e, u);
          break;
      }
    }
    function nT(e) {
      {
        var t = e.toLowerCase();
        return Rc.hasOwnProperty(t) && Rc[t] || null;
      }
    }
    function rT(e, t, a, i, u, s, f) {
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
          It(e, a);
          break;
        case "select":
          fs(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), yn("invalid", e);
          break;
      }
      hs(t, a);
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
          var H = a[A];
          if (A === ec)
            typeof H == "string" ? e.textContent !== H && (a[zo] !== !0 && Eh(e.textContent, H, s, f), z = [ec, H]) : typeof H == "number" && e.textContent !== "" + H && (a[zo] !== !0 && Eh(e.textContent, H, s, f), z = [ec, "" + H]);
          else if (Pt.hasOwnProperty(A))
            H != null && (typeof H != "function" && gh(A, H), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, ze = p && Be ? null : In(A);
            if (a[zo] !== !0) {
              if (!(A === hh || A === zo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var De = e.innerHTML, xt = H ? H[mh] : void 0;
                  if (xt != null) {
                    var mt = $0(e, xt);
                    mt !== De && ap(A, De, mt);
                  }
                } else if (A === tc) {
                  if (v.delete(A), B0) {
                    var O = ty(H);
                    ue = e.getAttribute("style"), O !== ue && ap(A, ue, O);
                  }
                } else if (p && !Be)
                  v.delete(A.toLowerCase()), ue = Da(e, A, H), H !== ue && ap(A, ue, H);
                else if (!pn(A, ze, p) && !Bt(A, H, ze, p)) {
                  var V = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), ue = Xa(e, A, H, ze);
                  else {
                    var N = i;
                    if (N === Bi && (N = Yf(t)), N === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var K = nT(A);
                      K !== null && K !== A && (V = !0, v.delete(K)), v.delete(A);
                    }
                    ue = Da(e, A, H);
                  }
                  var ve = Be;
                  !ve && H !== ue && !V && ap(A, ue, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[zo] !== !0 && P0(v), t) {
        case "input":
          Hi(e), J(e, a, !0);
          break;
        case "textarea":
          Hi(e), gc(e);
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
    function aT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function zy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function iT(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Qm(e, a);
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
      var lT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Y0 = [
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
      ], uT = Y0.concat(["button"]), oT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Q0 = {
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
        var a = nt({}, e || Q0), i = {
          tag: t
        };
        return Y0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), uT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), lT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var sT = function(e, t) {
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
            return oT.indexOf(t) === -1;
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
      }, cT = function(e, t) {
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
      }, W0 = {};
      ip = function(e, t, a) {
        a = a || Q0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = sT(e, u) ? null : i, f = s ? null : cT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!W0[y]) {
            W0[y] = !0;
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
    var Rh = "suppressHydrationWarning", Th = "$", _h = "/$", up = "$?", op = "$!", fT = "style", Fy = null, Hy = null;
    function dT(e) {
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
    function pT(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pk(e) {
      return e;
    }
    function vT(e) {
      Fy = Bn(), Hy = DR();
      var t = null;
      return xu(!1), t;
    }
    function hT(e) {
      kR(Hy), xu(Fy), Fy = null, Hy = null;
    }
    function mT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = KR(e, t, a, s);
      return fp(u, y), Wy(y, t), y;
    }
    function yT(e, t) {
      e.appendChild(t);
    }
    function gT(e, t, a, i, u) {
      switch (ZR(e, t, a, i), t) {
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
    function ST(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return eT(e, t, a, i);
    }
    function Vy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ET(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = JR(e, t);
      return fp(i, s), s;
    }
    function CT() {
      var e = window.event;
      return e === void 0 ? li : bu(e.type);
    }
    var Py = typeof setTimeout == "function" ? setTimeout : void 0, RT = typeof clearTimeout == "function" ? clearTimeout : void 0, By = -1, G0 = typeof Promise == "function" ? Promise : void 0, TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof G0 < "u" ? function(e) {
      return G0.resolve(null).then(e).catch(_T);
    } : Py;
    function _T(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function xT(e, t, a, i) {
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
    function wT(e, t, a, i, u, s) {
      tT(e, t, a, i, u), Wy(e, u);
    }
    function q0(e) {
      ds(e, "");
    }
    function bT(e, t, a) {
      e.nodeValue = a;
    }
    function DT(e, t) {
      e.appendChild(t);
    }
    function kT(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function OT(e, t, a) {
      e.insertBefore(t, a);
    }
    function NT(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function LT(e, t) {
      e.removeChild(t);
    }
    function MT(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $y(e, t) {
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
    function zT(e, t) {
      e.nodeType === En ? $y(e.parentNode, t) : e.nodeType === Ir && $y(e, t), dn(e);
    }
    function UT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function AT(e) {
      e.nodeValue = "";
    }
    function jT(e, t) {
      e = e;
      var a = t[fT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xl("display", i);
    }
    function FT(e, t) {
      e.nodeValue = t;
    }
    function HT(e) {
      e.nodeType === Ir ? e.textContent = "" : e.nodeType === ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function VT(e, t, a) {
      return e.nodeType !== Ir || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function PT(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function BT(e) {
      return e.nodeType !== En ? null : e;
    }
    function X0(e) {
      return e.data === up;
    }
    function Iy(e) {
      return e.data === op;
    }
    function $T(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function IT(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ir || t === $i)
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
    function YT(e) {
      return xh(e.firstChild);
    }
    function QT(e) {
      return xh(e.firstChild);
    }
    function WT(e) {
      return xh(e.nextSibling);
    }
    function GT(e, t, a, i, u, s, f) {
      fp(s, e), Wy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ne) !== re;
      return rT(e, t, a, p, i, y, f);
    }
    function qT(e, t, a, i) {
      return fp(a, e), a.mode & Ne, aT(e, t);
    }
    function XT(e, t) {
      fp(t, e);
    }
    function KT(e) {
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
    function K0(e) {
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
    function JT(e) {
      dn(e);
    }
    function ZT(e) {
      dn(e);
    }
    function e_(e) {
      return e !== "head" && e !== "body";
    }
    function t_(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function n_(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function r_(e, t) {
      t.nodeType === Ir ? zy(e, t) : t.nodeType === En || Uy(e, t);
    }
    function a_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ir ? zy(a, t) : t.nodeType === En || Uy(a, t));
      }
    }
    function i_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === Ir ? zy(a, i) : i.nodeType === En || Uy(a, i));
    }
    function l_(e, t, a) {
      Ay(e, t);
    }
    function u_(e, t) {
      jy(e, t);
    }
    function o_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ay(i, t);
      }
    }
    function s_(e, t) {
      {
        var a = e.parentNode;
        a !== null && jy(a, t);
      }
    }
    function c_(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && Ay(a, i);
    }
    function f_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && jy(a, i);
    }
    function d_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function p_(e) {
      tp(e);
    }
    var hf = Math.random().toString(36).slice(2), mf = "__reactFiber$" + hf, Yy = "__reactProps$" + hf, cp = "__reactContainer$" + hf, Qy = "__reactEvents$" + hf, v_ = "__reactListeners$" + hf, h_ = "__reactHandles$" + hf;
    function m_(e) {
      delete e[mf], delete e[Yy], delete e[Qy], delete e[v_], delete e[h_];
    }
    function fp(e, t) {
      t[mf] = e;
    }
    function wh(e, t) {
      t[cp] = e;
    }
    function J0(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function nc(e) {
      var t = e[mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = K0(e); u !== null; ) {
              var s = u[mf];
              if (s)
                return s;
              u = K0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uo(e) {
      var t = e[mf] || e[cp];
      return t && (t.tag === oe || t.tag === Re || t.tag === Te || t.tag === te) ? t : null;
    }
    function yf(e) {
      if (e.tag === oe || e.tag === Re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function bh(e) {
      return e[Yy] || null;
    }
    function Wy(e, t) {
      e[Yy] = t;
    }
    function y_(e) {
      var t = e[Qy];
      return t === void 0 && (t = e[Qy] = /* @__PURE__ */ new Set()), t;
    }
    var Z0 = {}, eE = ie.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = gt(e.type, e._source, t ? t.type : null);
        eE.setExtraStackFrame(a);
      } else
        eE.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in Z0) && (Z0[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var Gy = [], kh;
    kh = [];
    var Uu = -1;
    function Ao(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[Uu] && S("Unexpected Fiber popped."), e.current = Gy[Uu], Gy[Uu] = null, kh[Uu] = null, Uu--;
    }
    function Zr(e, t, a) {
      Uu++, Gy[Uu] = e.current, kh[Uu] = a, e.current = t;
    }
    var qy;
    qy = {};
    var oi = {};
    Object.freeze(oi);
    var Au = Ao(oi), Ql = Ao(!1), Xy = oi;
    function gf(e, t, a) {
      return a && Wl(t) ? Xy : Au.current;
    }
    function tE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Sf(e, t) {
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
          var p = Ge(e) || "Unknown";
          al(i, s, "context", p);
        }
        return u && tE(e, t, s), s;
      }
    }
    function Oh() {
      return Ql.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Nh(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function Ky(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function nE(e, t, a) {
      {
        if (Au.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Zr(Au, t, e), Zr(Ql, a, e);
      }
    }
    function rE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            qy[s] || (qy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Lh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Xy = Au.current, Zr(Au, a, e), Zr(Ql, Ql.current, e), !0;
      }
    }
    function aE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = rE(e, t, Xy);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Ql, e), Jr(Au, e), Zr(Au, u, e), Zr(Ql, a, e);
        } else
          Jr(Ql, e), Zr(Ql, a, e);
      }
    }
    function g_(e) {
      {
        if (!pa(e) || e.tag !== he)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case he: {
              var a = t.type;
              if (Wl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var jo = 0, Mh = 1, ju = null, Jy = !1, Zy = !1;
    function iE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function S_(e) {
      Jy = !0, iE(e);
    }
    function lE() {
      Jy && Fo();
    }
    function Fo() {
      if (!Zy && ju !== null) {
        Zy = !0;
        var e = 0, t = xr();
        try {
          var a = !0, i = ju;
          for (Dt(Sa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Jy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), pd(Ll, Fo), s;
        } finally {
          Dt(t), Zy = !1;
        }
      }
      return null;
    }
    var Ef = [], Cf = 0, zh = null, Uh = 0, wi = [], bi = 0, rc = null, Fu = 1, Hu = "";
    function E_(e) {
      return ic(), (e.flags & Mv) !== Me;
    }
    function C_(e) {
      return ic(), Uh;
    }
    function R_() {
      var e = Hu, t = Fu, a = t & ~T_(t);
      return a.toString(32) + e;
    }
    function ac(e, t) {
      ic(), Ef[Cf++] = Uh, Ef[Cf++] = zh, zh = e, Uh = t;
    }
    function uE(e, t, a) {
      ic(), wi[bi++] = Fu, wi[bi++] = Hu, wi[bi++] = rc, rc = e;
      var i = Fu, u = Hu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), _ = f >> y, z = s - y, A = Ah(t) + z, H = p << z, ue = H | _, ze = w + u;
        Fu = 1 << A | ue, Hu = ze;
      } else {
        var De = p << s, xt = De | f, mt = u;
        Fu = 1 << v | xt, Hu = mt;
      }
    }
    function eg(e) {
      ic();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ac(e, a), uE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - vo(e);
    }
    function T_(e) {
      return 1 << Ah(e) - 1;
    }
    function tg(e) {
      for (; e === zh; )
        zh = Ef[--Cf], Ef[Cf] = null, Uh = Ef[--Cf], Ef[Cf] = null;
      for (; e === rc; )
        rc = wi[--bi], wi[bi] = null, Hu = wi[--bi], wi[bi] = null, Fu = wi[--bi], wi[bi] = null;
    }
    function __() {
      return ic(), rc !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function x_(e, t) {
      ic(), wi[bi++] = Fu, wi[bi++] = Hu, wi[bi++] = rc, Fu = t.id, Hu = t.overflow, rc = e;
    }
    function ic() {
      Or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, Di = null, il = !1, lc = !1, Ho = null;
    function w_() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function oE() {
      lc = !0;
    }
    function b_() {
      return lc;
    }
    function D_(e) {
      var t = e.stateNode.containerInfo;
      return Di = QT(t), kr = e, il = !0, Ho = null, lc = !1, !0;
    }
    function k_(e, t, a) {
      return Di = WT(t), kr = e, il = !0, Ho = null, lc = !1, a !== null && x_(e, a), !0;
    }
    function sE(e, t) {
      switch (e.tag) {
        case te: {
          r_(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & Ne) !== re;
          i_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && a_(i.dehydrated, t);
          break;
        }
      }
    }
    function cE(e, t) {
      sE(e, t);
      var a = Mb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function ng(e, t) {
      {
        if (lc)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, l_(a, i);
                break;
              case Re:
                var u = t.pendingProps;
                u_(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ne) !== re;
                c_(
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
              case Re: {
                var w = t.pendingProps, _ = (e.mode & Ne) !== re;
                f_(
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
          case Te: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case oe:
                var H = t.type;
                t.pendingProps, o_(A, H);
                break;
              case Re:
                var ue = t.pendingProps;
                s_(A, ue);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function fE(e, t) {
      t.flags = t.flags & ~mi | Xt, ng(e, t);
    }
    function dE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = VT(t, a);
          return i !== null ? (e.stateNode = i, kr = e, Di = YT(i), !0) : !1;
        }
        case Re: {
          var u = e.pendingProps, s = PT(t, u);
          return s !== null ? (e.stateNode = s, kr = e, Di = null, !0) : !1;
        }
        case Te: {
          var f = BT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: __(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = zb(f);
            return v.return = e, e.child = v, kr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function rg(e) {
      return (e.mode & Ne) !== re && (e.flags & Ke) === Me;
    }
    function ag(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ig(e) {
      if (il) {
        var t = Di;
        if (!t) {
          rg(e) && (ng(kr, e), ag()), fE(kr, e), il = !1, kr = e;
          return;
        }
        var a = t;
        if (!dE(e, t)) {
          rg(e) && (ng(kr, e), ag()), t = sp(a);
          var i = kr;
          if (!t || !dE(e, t)) {
            fE(kr, e), il = !1, kr = e;
            return;
          }
          cE(i, a);
        }
      }
    }
    function O_(e, t, a) {
      var i = e.stateNode, u = !lc, s = GT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function N_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = qT(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ne) !== re;
              t_(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ne) !== re;
              n_(
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
    function L_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      XT(a, e);
    }
    function M_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return KT(a);
    }
    function pE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== te && t.tag !== Te; )
        t = t.return;
      kr = t;
    }
    function jh(e) {
      if (e !== kr)
        return !1;
      if (!il)
        return pE(e), il = !0, !1;
      if (e.tag !== te && (e.tag !== oe || e_(e.type) && !Vy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (rg(e))
            vE(e), ag();
          else
            for (; t; )
              cE(e, t), t = sp(t);
      }
      return pE(e), e.tag === Te ? Di = M_(e) : Di = kr ? sp(e.stateNode) : null, !0;
    }
    function z_() {
      return il && Di !== null;
    }
    function vE(e) {
      for (var t = Di; t; )
        sE(e, t), t = sp(t);
    }
    function Rf() {
      kr = null, Di = null, il = !1, lc = !1;
    }
    function hE() {
      Ho !== null && (o1(Ho), Ho = null);
    }
    function Or() {
      return il;
    }
    function lg(e) {
      Ho === null ? Ho = [e] : Ho.push(e);
    }
    var U_ = ie.ReactCurrentBatchConfig, A_ = null;
    function j_() {
      return U_.transition;
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
      var F_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], oc = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          e.add(Ge(_) || "Component"), oc.add(_.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          t.add(Ge(_) || "Component"), oc.add(_.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          a.add(Ge(_) || "Component"), oc.add(_.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          i.add(Ge(_) || "Component"), oc.add(_.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(_) {
          u.add(Ge(_) || "Component"), oc.add(_.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(_) {
          s.add(Ge(_) || "Component"), oc.add(_.type);
        }), gp = []), t.size > 0) {
          var f = uc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = uc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = uc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = uc(e);
          Ee(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = uc(a);
          Ee(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = uc(u);
          Ee(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Fh = /* @__PURE__ */ new Map(), mE = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = F_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!mE.has(e.type)) {
          var i = Fh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Fh.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        Fh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), mE.add(s.type);
            });
            var u = uc(i);
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
    var ug, og, sg, cg, fg, yE = function(e, t) {
    };
    ug = !1, og = !1, sg = {}, cg = {}, fg = {}, yE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        cg[a] || (cg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function H_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & un || et) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== he) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !H_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          sg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), sg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== he)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Vn(i, "ref");
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
    function Vh(e) {
      {
        var t = Ge(e) || "Component";
        if (fg[t])
          return;
        fg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function gE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function SE(e) {
      function t(O, V) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [V], O.flags |= Mt) : N.push(V);
        }
      }
      function a(O, V) {
        if (!e)
          return null;
        for (var N = V; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, V) {
        for (var N = /* @__PURE__ */ new Map(), K = V; K !== null; )
          K.key !== null ? N.set(K.key, K) : N.set(K.index, K), K = K.sibling;
        return N;
      }
      function u(O, V) {
        var N = yc(O, V);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, V, N) {
        if (O.index = N, !e)
          return O.flags |= Mv, V;
        var K = O.alternate;
        if (K !== null) {
          var ve = K.index;
          return ve < V ? (O.flags |= Xt, V) : ve;
        } else
          return O.flags |= Xt, V;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Xt), O;
      }
      function p(O, V, N, K) {
        if (V === null || V.tag !== Re) {
          var ve = l0(N, O.mode, K);
          return ve.return = O, ve;
        } else {
          var se = u(V, N);
          return se.return = O, se;
        }
      }
      function v(O, V, N, K) {
        var ve = N.type;
        if (ve === sa)
          return g(O, V, N.props.children, K, N.key);
        if (V !== null && (V.elementType === ve || // Keep this check inline so it only runs on the false path:
        _1(V, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ae && gE(ve) === V.type)) {
          var se = u(V, N.props);
          return se.ref = Sp(O, V, N), se.return = O, se._debugSource = N._source, se._debugOwner = N._owner, se;
        }
        var Ye = i0(N, O.mode, K);
        return Ye.ref = Sp(O, V, N), Ye.return = O, Ye;
      }
      function y(O, V, N, K) {
        if (V === null || V.tag !== je || V.stateNode.containerInfo !== N.containerInfo || V.stateNode.implementation !== N.implementation) {
          var ve = u0(N, O.mode, K);
          return ve.return = O, ve;
        } else {
          var se = u(V, N.children || []);
          return se.return = O, se;
        }
      }
      function g(O, V, N, K, ve) {
        if (V === null || V.tag !== ht) {
          var se = Xo(N, O.mode, K, ve);
          return se.return = O, se;
        } else {
          var Ye = u(V, N);
          return Ye.return = O, Ye;
        }
      }
      function w(O, V, N) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var K = l0("" + V, O.mode, N);
          return K.return = O, K;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Er: {
              var ve = i0(V, O.mode, N);
              return ve.ref = Sp(O, null, V), ve.return = O, ve;
            }
            case Hr: {
              var se = u0(V, O.mode, N);
              return se.return = O, se;
            }
            case Ae: {
              var Ye = V._payload, Ze = V._init;
              return w(O, Ze(Ye), N);
            }
          }
          if (bt(V) || Vr(V)) {
            var Wt = Xo(V, O.mode, N, null);
            return Wt.return = O, Wt;
          }
          Hh(O, V);
        }
        return typeof V == "function" && Vh(O), null;
      }
      function _(O, V, N, K) {
        var ve = V !== null ? V.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ve !== null ? null : p(O, V, "" + N, K);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Er:
              return N.key === ve ? v(O, V, N, K) : null;
            case Hr:
              return N.key === ve ? y(O, V, N, K) : null;
            case Ae: {
              var se = N._payload, Ye = N._init;
              return _(O, V, Ye(se), K);
            }
          }
          if (bt(N) || Vr(N))
            return ve !== null ? null : g(O, V, N, K, null);
          Hh(O, N);
        }
        return typeof N == "function" && Vh(O), null;
      }
      function z(O, V, N, K, ve) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var se = O.get(N) || null;
          return p(V, se, "" + K, ve);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Er: {
              var Ye = O.get(K.key === null ? N : K.key) || null;
              return v(V, Ye, K, ve);
            }
            case Hr: {
              var Ze = O.get(K.key === null ? N : K.key) || null;
              return y(V, Ze, K, ve);
            }
            case Ae:
              var Wt = K._payload, zt = K._init;
              return z(O, V, N, zt(Wt), ve);
          }
          if (bt(K) || Vr(K)) {
            var $n = O.get(N) || null;
            return g(V, $n, K, ve, null);
          }
          Hh(V, K);
        }
        return typeof K == "function" && Vh(V), null;
      }
      function A(O, V, N) {
        {
          if (typeof O != "object" || O === null)
            return V;
          switch (O.$$typeof) {
            case Er:
            case Hr:
              yE(O, N);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(K);
                break;
              }
              if (!V.has(K)) {
                V.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Ae:
              var ve = O._payload, se = O._init;
              A(se(ve), V, N);
              break;
          }
        }
        return V;
      }
      function H(O, V, N, K) {
        for (var ve = null, se = 0; se < N.length; se++) {
          var Ye = N[se];
          ve = A(Ye, ve, O);
        }
        for (var Ze = null, Wt = null, zt = V, $n = 0, Ut = 0, jn = null; zt !== null && Ut < N.length; Ut++) {
          zt.index > Ut ? (jn = zt, zt = null) : jn = zt.sibling;
          var ta = _(O, zt, N[Ut], K);
          if (ta === null) {
            zt === null && (zt = jn);
            break;
          }
          e && zt && ta.alternate === null && t(O, zt), $n = s(ta, $n, Ut), Wt === null ? Ze = ta : Wt.sibling = ta, Wt = ta, zt = jn;
        }
        if (Ut === N.length) {
          if (a(O, zt), Or()) {
            var jr = Ut;
            ac(O, jr);
          }
          return Ze;
        }
        if (zt === null) {
          for (; Ut < N.length; Ut++) {
            var ci = w(O, N[Ut], K);
            ci !== null && ($n = s(ci, $n, Ut), Wt === null ? Ze = ci : Wt.sibling = ci, Wt = ci);
          }
          if (Or()) {
            var xa = Ut;
            ac(O, xa);
          }
          return Ze;
        }
        for (var wa = i(O, zt); Ut < N.length; Ut++) {
          var na = z(wa, O, Ut, N[Ut], K);
          na !== null && (e && na.alternate !== null && wa.delete(na.key === null ? Ut : na.key), $n = s(na, $n, Ut), Wt === null ? Ze = na : Wt.sibling = na, Wt = na);
        }
        if (e && wa.forEach(function(Pf) {
          return t(O, Pf);
        }), Or()) {
          var Qu = Ut;
          ac(O, Qu);
        }
        return Ze;
      }
      function ue(O, V, N, K) {
        var ve = Vr(N);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (og || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), og = !0), N.entries === ve && (ug || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ug = !0);
          var se = ve.call(N);
          if (se)
            for (var Ye = null, Ze = se.next(); !Ze.done; Ze = se.next()) {
              var Wt = Ze.value;
              Ye = A(Wt, Ye, O);
            }
        }
        var zt = ve.call(N);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Ut = null, jn = V, ta = 0, jr = 0, ci = null, xa = zt.next(); jn !== null && !xa.done; jr++, xa = zt.next()) {
          jn.index > jr ? (ci = jn, jn = null) : ci = jn.sibling;
          var wa = _(O, jn, xa.value, K);
          if (wa === null) {
            jn === null && (jn = ci);
            break;
          }
          e && jn && wa.alternate === null && t(O, jn), ta = s(wa, ta, jr), Ut === null ? $n = wa : Ut.sibling = wa, Ut = wa, jn = ci;
        }
        if (xa.done) {
          if (a(O, jn), Or()) {
            var na = jr;
            ac(O, na);
          }
          return $n;
        }
        if (jn === null) {
          for (; !xa.done; jr++, xa = zt.next()) {
            var Qu = w(O, xa.value, K);
            Qu !== null && (ta = s(Qu, ta, jr), Ut === null ? $n = Qu : Ut.sibling = Qu, Ut = Qu);
          }
          if (Or()) {
            var Pf = jr;
            ac(O, Pf);
          }
          return $n;
        }
        for (var Kp = i(O, jn); !xa.done; jr++, xa = zt.next()) {
          var tu = z(Kp, O, jr, xa.value, K);
          tu !== null && (e && tu.alternate !== null && Kp.delete(tu.key === null ? jr : tu.key), ta = s(tu, ta, jr), Ut === null ? $n = tu : Ut.sibling = tu, Ut = tu);
        }
        if (e && Kp.forEach(function(fD) {
          return t(O, fD);
        }), Or()) {
          var cD = jr;
          ac(O, cD);
        }
        return $n;
      }
      function ze(O, V, N, K) {
        if (V !== null && V.tag === Re) {
          a(O, V.sibling);
          var ve = u(V, N);
          return ve.return = O, ve;
        }
        a(O, V);
        var se = l0(N, O.mode, K);
        return se.return = O, se;
      }
      function De(O, V, N, K) {
        for (var ve = N.key, se = V; se !== null; ) {
          if (se.key === ve) {
            var Ye = N.type;
            if (Ye === sa) {
              if (se.tag === ht) {
                a(O, se.sibling);
                var Ze = u(se, N.props.children);
                return Ze.return = O, Ze._debugSource = N._source, Ze._debugOwner = N._owner, Ze;
              }
            } else if (se.elementType === Ye || // Keep this check inline so it only runs on the false path:
            _1(se, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === Ae && gE(Ye) === se.type) {
              a(O, se.sibling);
              var Wt = u(se, N.props);
              return Wt.ref = Sp(O, se, N), Wt.return = O, Wt._debugSource = N._source, Wt._debugOwner = N._owner, Wt;
            }
            a(O, se);
            break;
          } else
            t(O, se);
          se = se.sibling;
        }
        if (N.type === sa) {
          var zt = Xo(N.props.children, O.mode, K, N.key);
          return zt.return = O, zt;
        } else {
          var $n = i0(N, O.mode, K);
          return $n.ref = Sp(O, V, N), $n.return = O, $n;
        }
      }
      function xt(O, V, N, K) {
        for (var ve = N.key, se = V; se !== null; ) {
          if (se.key === ve)
            if (se.tag === je && se.stateNode.containerInfo === N.containerInfo && se.stateNode.implementation === N.implementation) {
              a(O, se.sibling);
              var Ye = u(se, N.children || []);
              return Ye.return = O, Ye;
            } else {
              a(O, se);
              break;
            }
          else
            t(O, se);
          se = se.sibling;
        }
        var Ze = u0(N, O.mode, K);
        return Ze.return = O, Ze;
      }
      function mt(O, V, N, K) {
        var ve = typeof N == "object" && N !== null && N.type === sa && N.key === null;
        if (ve && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Er:
              return f(De(O, V, N, K));
            case Hr:
              return f(xt(O, V, N, K));
            case Ae:
              var se = N._payload, Ye = N._init;
              return mt(O, V, Ye(se), K);
          }
          if (bt(N))
            return H(O, V, N, K);
          if (Vr(N))
            return ue(O, V, N, K);
          Hh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(ze(O, V, "" + N, K)) : (typeof N == "function" && Vh(O), a(O, V));
      }
      return mt;
    }
    var Tf = SE(!0), EE = SE(!1);
    function V_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = yc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = yc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function P_(e, t) {
      for (var a = e.child; a !== null; )
        Db(a, t), a = a.sibling;
    }
    var dg = Ao(null), pg;
    pg = {};
    var Ph = null, _f = null, vg = null, Bh = !1;
    function $h() {
      Ph = null, _f = null, vg = null, Bh = !1;
    }
    function CE() {
      Bh = !0;
    }
    function RE() {
      Bh = !1;
    }
    function TE(e, t, a) {
      Zr(dg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== pg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = pg;
    }
    function hg(e, t) {
      var a = dg.current;
      Jr(dg, t), e._currentValue = a;
    }
    function mg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Hl(i.childLanes, t) ? u !== null && !Hl(u.childLanes, t) && (u.childLanes = rt(u.childLanes, t)) : (i.childLanes = rt(i.childLanes, t), u !== null && (u.childLanes = rt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function B_(e, t, a) {
      $_(e, t, a);
    }
    function $_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === he) {
                var p = To(a), v = Vu(en, p);
                v.tag = Yh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = rt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = rt(_.lanes, a)), mg(i.return, a, e), s.lanes = rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = rt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = rt(A.lanes, a)), mg(z, a, e), u = i.sibling;
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
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function xf(e, t) {
      Ph = e, _f = null, vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Kr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function qn(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if (Ph === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, Ph.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var sc = null;
    function yg(e) {
      sc === null ? sc = [e] : sc.push(e);
    }
    function I_() {
      if (sc !== null) {
        for (var e = 0; e < sc.length; e++) {
          var t = sc[e], a = t.interleaved;
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
        sc = null;
      }
    }
    function _E(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Y_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Q_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, yg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var W_ = Ih;
    function Ih(e, t) {
      e.lanes = rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = rt(a.lanes, t)), a === null && (e.flags & (Xt | mi)) !== Me && E1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = rt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = rt(a.childLanes, t) : (u.flags & (Xt | mi)) !== Me && E1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xE = 0, wE = 1, Yh = 2, gg = 3, Qh = !1, Sg, Wh;
    Sg = !1, Wh = null;
    function Eg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function bE(e, t) {
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
    function Vu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: xE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Vo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Wh === u && !Sg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Sg = !0), Yw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, W_(e, a);
      } else
        return Q_(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Qv(a)) {
          var s = u.lanes;
          s = Od(s, e.pendingLanes);
          var f = rt(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function Cg(e, t) {
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
    function G_(e, t, a, i, u, s) {
      switch (a.tag) {
        case wE: {
          var f = a.payload;
          if (typeof f == "function") {
            CE();
            var p = f.call(s, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              RE();
            }
            return p;
          }
          return f;
        }
        case gg:
          e.flags = e.flags & ~er | Ke;
        // Intentional fallthrough
        case xE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            CE(), y = v.call(s, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              RE();
            }
          } else
            y = v;
          return y == null ? i : nt({}, i, y);
        }
        case Yh:
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
        var z = u.baseState, A = I, H = null, ue = null, ze = null, De = s;
        do {
          var xt = De.lane, mt = De.eventTime;
          if (Hl(i, xt)) {
            if (ze !== null) {
              var V = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              ze = ze.next = V;
            }
            z = G_(e, u, De, z, t, a);
            var N = De.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Kt) {
              e.flags |= Yn;
              var K = u.effects;
              K === null ? u.effects = [De] : K.push(De);
            }
          } else {
            var O = {
              eventTime: mt,
              lane: xt,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            ze === null ? (ue = ze = O, H = z) : ze = ze.next = O, A = rt(A, xt);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, De = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (H = z), u.baseState = H, u.firstBaseUpdate = ue, u.lastBaseUpdate = ze;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var Ze = Ye;
          do
            A = rt(A, Ze.lane), Ze = Ze.next;
          while (Ze !== Ye);
        } else s === null && (u.shared.lanes = I);
        Qp(A), e.lanes = A, e.memoizedState = z;
      }
      Wh = null;
    }
    function q_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function DE() {
      Qh = !1;
    }
    function Xh() {
      return Qh;
    }
    function kE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, q_(f, a));
        }
    }
    var Ep = {}, Po = Ao(Ep), Cp = Ao(Ep), Kh = Ao(Ep);
    function Jh(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OE() {
      var e = Jh(Kh.current);
      return e;
    }
    function Rg(e, t) {
      Zr(Kh, t, e), Zr(Cp, e, e), Zr(Po, Ep, e);
      var a = dT(t);
      Jr(Po, e), Zr(Po, a, e);
    }
    function wf(e) {
      Jr(Po, e), Jr(Cp, e), Jr(Kh, e);
    }
    function Tg() {
      var e = Jh(Po.current);
      return e;
    }
    function NE(e) {
      Jh(Kh.current);
      var t = Jh(Po.current), a = pT(t, e.type);
      t !== a && (Zr(Cp, e, e), Zr(Po, a, e));
    }
    function _g(e) {
      Cp.current === e && (Jr(Po, e), Jr(Cp, e));
    }
    var X_ = 0, LE = 1, ME = 1, Rp = 2, ul = Ao(X_);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & LE;
    }
    function wg(e, t) {
      return e & LE | t;
    }
    function K_(e, t) {
      return e | t;
    }
    function Bo(e, t) {
      Zr(ul, t, e);
    }
    function Df(e) {
      Jr(ul, e);
    }
    function J_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || X0(i) || Iy(i))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ke) !== Me;
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
    ), Gl = (
      /*  */
      2
    ), ar = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), bg = [];
    function Dg() {
      for (var e = 0; e < bg.length; e++) {
        var t = bg[e];
        t._workInProgressVersionPrimary = null;
      }
      bg.length = 0;
    }
    function Z_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = ie.ReactCurrentDispatcher, Tp = ie.ReactCurrentBatchConfig, kg, kf;
    kg = /* @__PURE__ */ new Set();
    var cc = I, Qt = null, ir = null, lr = null, em = !1, _p = !1, xp = 0, ex = 0, tx = 25, P = null, ki = null, $o = -1, Og = !1;
    function Vt() {
      {
        var e = P;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        ki !== null && ($o++, ki[$o] !== e && nx(e));
      }
    }
    function Of(e) {
      e != null && !bt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function nx(e) {
      {
        var t = Ge(Qt);
        if (!kg.has(t) && (kg.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= $o; u++) {
            for (var s = ki[u], f = u === $o ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Ng(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!be(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      cc = s, Qt = t, ki = e !== null ? e._debugHookTypes : null, $o = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? fe.current = tC : ki !== null ? fe.current = eC : fe.current = ZE;
      var f = a(i, u);
      if (_p) {
        var p = 0;
        do {
          if (_p = !1, xp = 0, p >= tx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, ir = null, lr = null, t.updateQueue = null, $o = -1, fe.current = nC, f = a(i, u);
        } while (_p);
      }
      fe.current = pm, t._debugHookTypes = ki;
      var v = ir !== null && ir.next !== null;
      if (cc = I, Qt = null, ir = null, lr = null, P = null, ki = null, $o = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ne) !== re && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function zE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== re ? t.flags &= ~(yu | Aa | Yr | _e) : t.flags &= ~(Yr | _e), e.lanes = _o(e.lanes, a);
    }
    function UE() {
      if (fe.current = pm, em) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      cc = I, Qt = null, ir = null, lr = null, ki = null, $o = -1, P = null, GE = !1, _p = !1, xp = 0;
    }
    function ql() {
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
    function AE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Lg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mg(e, t, a) {
      var i = ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = lx.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function zg(e, t, a) {
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
        var g = f.next, w = s.baseState, _ = null, z = null, A = null, H = g;
        do {
          var ue = H.lane;
          if (Hl(cc, ue)) {
            if (A !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = De;
            }
            if (H.hasEagerState)
              w = H.eagerState;
            else {
              var xt = H.action;
              w = e(w, xt);
            }
          } else {
            var ze = {
              lane: ue,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (z = A = ze, _ = w) : A = A.next = ze, Qt.lanes = rt(Qt.lanes, ue), Qp(ue);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? _ = w : A.next = z, be(w, i.memoizedState) || zp(), i.memoizedState = w, i.baseState = _, i.baseQueue = A, u.lastRenderedState = w;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var O = mt;
        do {
          var V = O.lane;
          Qt.lanes = rt(Qt.lanes, V), Qp(V), O = O.next;
        } while (O !== mt);
      } else f === null && (u.lanes = I);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Ug(e, t, a) {
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
        be(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function vk(e, t, a) {
    }
    function hk(e, t, a) {
    }
    function Ag(e, t, a) {
      var i = Qt, u = ql(), s, f = Or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), kf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (s = t(), !kf) {
          var p = t();
          be(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var v = Lm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(v, cc) || jE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(HE.bind(null, i, y, e), [e]), i.flags |= Yr, wp(rr | Nr, FE.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Qt, u = Oi(), s = t();
      if (!kf) {
        var f = t();
        be(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var p = u.memoizedState, v = !be(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (Dp(HE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      lr !== null && lr.memoizedState.tag & rr) {
        i.flags |= Yr, wp(rr | Nr, FE.bind(null, i, y, s, t), void 0, null);
        var g = Lm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(g, cc) || jE(i, t, s);
      }
      return s;
    }
    function jE(e, t, a) {
      e.flags |= mu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Qt.updateQueue;
      if (u === null)
        u = AE(), Qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function FE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VE(t) && PE(e);
    }
    function HE(e, t, a) {
      var i = function() {
        VE(t) && PE(e);
      };
      return a(i);
    }
    function VE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !be(a, i);
      } catch {
        return !0;
      }
    }
    function PE(e) {
      var t = Ba(e, we);
      t !== null && cr(t, e, we, en);
    }
    function nm(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: Lg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ux.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function jg(e) {
      return zg(Lg);
    }
    function Fg(e) {
      return Ug(Lg);
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
        s = AE(), Qt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Hg(e) {
      var t = ql();
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
      var u = ql(), s = i === void 0 ? null : i;
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, void 0, s);
    }
    function am(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (ir !== null) {
        var p = ir.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, f, s);
    }
    function im(e, t) {
      return (Qt.mode & qr) !== re ? bp(yu | Yr | Ol, Nr, e, t) : bp(Yr | Ol, Nr, e, t);
    }
    function Dp(e, t) {
      return am(Yr, Nr, e, t);
    }
    function Vg(e, t) {
      return bp(_e, Gl, e, t);
    }
    function lm(e, t) {
      return am(_e, Gl, e, t);
    }
    function Pg(e, t) {
      var a = _e;
      return a |= Ua, (Qt.mode & qr) !== re && (a |= Aa), bp(a, ar, e, t);
    }
    function um(e, t) {
      return am(_e, ar, e, t);
    }
    function BE(e, t) {
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
    function Bg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = _e;
      return u |= Ua, (Qt.mode & qr) !== re && (u |= Aa), bp(u, ar, BE.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(_e, ar, BE.bind(null, t, e), i);
    }
    function rx(e, t) {
    }
    var sm = rx;
    function $g(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function cm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function fm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Yg(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function $E(e) {
      var t = Oi(), a = ir, i = a.memoizedState;
      return YE(t, i, e);
    }
    function IE(e) {
      var t = Oi();
      if (ir === null)
        return t.memoizedState = e, e;
      var a = ir.memoizedState;
      return YE(t, a, e);
    }
    function YE(e, t, a) {
      var i = !$v(cc);
      if (i) {
        if (!be(a, t)) {
          var u = Tr();
          Qt.lanes = rt(Qt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function ax(e, t, a) {
      var i = xr();
      Dt(dy(i, Ri)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dt(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Qg() {
      var e = nm(!1), t = e[0], a = e[1], i = ax.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function QE() {
      var e = jg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function WE() {
      var e = Fg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var GE = !1;
    function ix() {
      return GE;
    }
    function Wg() {
      var e = ql(), t = Lm(), a = t.identifierPrefix, i;
      if (Or()) {
        var u = R_();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = ex++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function lx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qE(e))
        XE(t, u);
      else {
        var s = _E(e, t, u, i);
        if (s !== null) {
          var f = _a();
          cr(s, e, i, f), KE(s, t, i);
        }
      }
      JE(e, i);
    }
    function ux(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qE(e))
        XE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, be(y, v)) {
                Y_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = _E(e, t, u, i);
        if (g !== null) {
          var w = _a();
          cr(g, e, i, w), KE(g, t, i);
        }
      }
      JE(e, i);
    }
    function qE(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function XE(e, t) {
      _p = em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KE(e, t, a) {
      if (Qv(a)) {
        var i = t.lanes;
        i = Od(i, e.pendingLanes);
        var u = rt(i, a);
        t.lanes = u, Jc(e, u);
      }
    }
    function JE(e, t, a) {
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
      unstable_isNewReconciler: me
    }, ZE = null, eC = null, tC = null, nC = null, Xl = null, ol = null, vm = null;
    {
      var Gg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ZE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Vt(), Of(t), $g(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Vt(), Of(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Vt(), Of(a), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Vt(), Of(t), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Vt(), Of(t), Pg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Vt(), Of(t);
          var a = fe.current;
          fe.current = Xl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Vt();
          var i = fe.current;
          fe.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Vt(), Hg(e);
        },
        useState: function(e) {
          P = "useState", Vt();
          var t = fe.current;
          fe.current = Xl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Vt(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", Vt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Vt(), Ag(e, t, a);
        },
        useId: function() {
          return P = "useId", Vt(), Wg();
        },
        unstable_isNewReconciler: me
      }, eC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), $g(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Pg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = Xl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Hg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = Xl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), Ag(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Wg();
        },
        unstable_isNewReconciler: me
      }, tC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = ol;
          try {
            return zg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), rm();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = ol;
          try {
            return jg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), $E(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), QE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), tm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), dm();
        },
        unstable_isNewReconciler: me
      }, nC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = vm;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = vm;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), rm();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = vm;
          try {
            return Fg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), IE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), tm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), dm();
        },
        unstable_isNewReconciler: me
      }, Xl = {
        readContext: function(e) {
          return Gg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), Vt(), $g(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), Vt(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), Vt(), Bg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), Vt(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), Vt(), Pg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), Vt();
          var a = fe.current;
          fe.current = Xl;
          try {
            return Ig(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), Vt();
          var i = fe.current;
          fe.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), Vt(), Hg(e);
        },
        useState: function(e) {
          P = "useState", Je(), Vt();
          var t = fe.current;
          fe.current = Xl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), Vt(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), Vt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), Vt(), Ag(e, t, a);
        },
        useId: function() {
          return P = "useId", Je(), Vt(), Wg();
        },
        unstable_isNewReconciler: me
      }, ol = {
        readContext: function(e) {
          return Gg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), ee(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), ee(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), ee(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), ee(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), ee(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), ee();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), ee();
          var i = fe.current;
          fe.current = ol;
          try {
            return zg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), ee(), rm();
        },
        useState: function(e) {
          P = "useState", Je(), ee();
          var t = fe.current;
          fe.current = ol;
          try {
            return jg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), ee(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), ee(), $E(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), ee(), QE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), ee(), tm(e, t);
        },
        useId: function() {
          return P = "useId", Je(), ee(), dm();
        },
        unstable_isNewReconciler: me
      }, vm = {
        readContext: function(e) {
          return Gg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Je(), ee(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Je(), ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Je(), ee(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Je(), ee(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Je(), ee(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Je(), ee(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Je(), ee();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Je(), ee();
          var i = fe.current;
          fe.current = ol;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Je(), ee(), rm();
        },
        useState: function(e) {
          P = "useState", Je(), ee();
          var t = fe.current;
          fe.current = ol;
          try {
            return Fg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Je(), ee(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Je(), ee(), IE(e);
        },
        useTransition: function() {
          return P = "useTransition", Je(), ee(), WE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Je(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Je(), ee(), tm(e, t);
        },
        useId: function() {
          return P = "useId", Je(), ee(), dm();
        },
        unstable_isNewReconciler: me
      };
    }
    var Io = D.unstable_now, rC = 0, hm = -1, kp = -1, mm = -1, qg = !1, ym = !1;
    function aC() {
      return qg;
    }
    function ox() {
      ym = !0;
    }
    function sx() {
      qg = !1, ym = !1;
    }
    function cx() {
      qg = ym, ym = !1;
    }
    function iC() {
      return rC;
    }
    function lC() {
      rC = Io();
    }
    function Xg(e) {
      kp = Io(), e.actualStartTime < 0 && (e.actualStartTime = Io());
    }
    function uC(e) {
      kp = -1;
    }
    function gm(e, t) {
      if (kp >= 0) {
        var a = Io() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Kl(e) {
      if (hm >= 0) {
        var t = Io() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Nt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Kg(e) {
      if (mm >= 0) {
        var t = Io() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Nt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      hm = Io();
    }
    function Jg() {
      mm = Io();
    }
    function Zg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sl(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var eS = {}, tS, nS, rS, aS, iS, oC, Sm, lS, uS, oS, Op;
    {
      tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var sC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          sC.has(a) || (sC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, oC = function(e, t) {
        if (t === void 0) {
          var a = St(e) || "Component";
          iS.has(a) || (iS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(eS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(eS);
    }
    function sS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & un) {
          Pn(!0);
          try {
            s = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        oC(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var cS = {
      isMounted: va,
      enqueueSetState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Go(i), f = Vu(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = Vo(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Go(i), f = Vu(u, s);
        f.tag = wE, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = Vo(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hi(e), i = _a(), u = Go(a), s = Vu(i, u);
        s.tag = Yh, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = Vo(a, s, u);
        f !== null && (cr(f, a, u, i), Gh(f, a, u)), Cd(a, u);
      }
    };
    function cC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & un) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", St(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_n(a, i) || !_n(u, s) : !0;
    }
    function fx(e, t, a) {
      var i = e.stateNode;
      {
        var u = St(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !uS.has(t) && (uS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", St(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !rS.has(t) && (rS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", St(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || bt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function fC(e, t) {
      t.updater = cS, e.stateNode = t, Dc(t, e), t._reactInternalInstance = eS;
    }
    function dC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === W && f._context === void 0
        );
        if (!p && !oS.has(t)) {
          oS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", St(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        u = gf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Sf(e, u) : oi;
      }
      var g = new t(a, s);
      if (e.mode & un) {
        Pn(!0);
        try {
          g = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      fC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var _ = St(t) || "Component";
          nS.has(_) || (nS.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), z !== null || A !== null || H !== null) {
            var ue = St(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            aS.has(ue) || (aS.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, ze, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && tE(e, u, s), g;
    }
    function dx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), cS.enqueueReplaceState(t, t.state, null));
    }
    function pC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          tS.has(s) || (tS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        cS.enqueueReplaceState(t, t.state, null);
      }
    }
    function fS(e, t, a, i) {
      fx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Eg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = gf(e, t, !0);
        u.context = Sf(e, f);
      }
      {
        if (u.state === a) {
          var p = St(t) || "Component";
          lS.has(p) || (lS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & un && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (sS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (dx(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = _e;
        y |= Ua, (e.mode & qr) !== re && (y |= Aa), e.flags |= y;
      }
    }
    function px(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = gf(e, t, !0);
        v = Sf(e, y);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && pC(e, u, a, v), DE();
      var _ = e.memoizedState, z = u.state = _;
      if (qh(e, a, u, i), z = e.memoizedState, s === a && _ === z && !Oh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var A = _e;
          A |= Ua, (e.mode & qr) !== re && (A |= Aa), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (sS(e, t, g, a), z = e.memoizedState);
      var H = Xh() || cC(e, t, s, a, _, z, v);
      if (H) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = _e;
          ue |= Ua, (e.mode & qr) !== re && (ue |= Aa), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = _e;
          ze |= Ua, (e.mode & qr) !== re && (ze |= Aa), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, H;
    }
    function vx(e, t, a, i, u) {
      var s = t.stateNode;
      bE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, w = oi;
      if (typeof g == "object" && g !== null)
        w = qn(g);
      else {
        var _ = gf(t, a, !0);
        w = Sf(t, _);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && pC(t, s, i, w), DE();
      var H = t.memoizedState, ue = s.state = H;
      if (qh(t, i, s, u), ue = t.memoizedState, f === v && H === ue && !Oh() && !Xh() && !le)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= zn), !1;
      typeof z == "function" && (sS(t, a, z, i), ue = t.memoizedState);
      var ze = Xh() || cC(t, a, p, i, H, ue, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      le;
      return ze ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, w)), typeof s.componentDidUpdate == "function" && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= zn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= zn), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = w, ze;
    }
    function fc(e, t) {
      return {
        value: e,
        source: t,
        stack: qu(t),
        digest: null
      };
    }
    function dS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function hx(e, t) {
      return !0;
    }
    function pS(e, t) {
      try {
        var a = hx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === he)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ge(e) || "Anonymous";
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
    var mx = typeof WeakMap == "function" ? WeakMap : Map;
    function vC(e, t, a) {
      var i = Vu(en, a);
      i.tag = gg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        ob(u), pS(e, t);
      }, i;
    }
    function vS(e, t, a) {
      var i = Vu(en, a);
      i.tag = gg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          x1(e), pS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        x1(e), pS(e, t), typeof u != "function" && lb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Kr(e.lanes, we) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function hC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new mx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = sb.bind(null, e, t, a);
        ha && Wp(e, a), t.then(s, s);
      }
    }
    function yx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function gx(e, t) {
      var a = e.tag;
      if ((e.mode & Ne) === re && (a === Ue || a === Ve || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function mC(e) {
      var t = e;
      do {
        if (t.tag === Te && J_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function yC(e, t, a, i, u) {
      if ((e.mode & Ne) === re) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Ke, a.flags |= kc, a.flags &= ~(Lv | kl), a.tag === he) {
            var s = a.alternate;
            if (s === null)
              a.tag = gn;
            else {
              var f = Vu(en, we);
              f.tag = Yh, Vo(a, f, we);
            }
          }
          a.lanes = rt(a.lanes, we);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function Sx(e, t, a, i, u) {
      if (a.flags |= kl, ha && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        gx(a), Or() && a.mode & Ne && oE();
        var f = mC(t);
        if (f !== null) {
          f.flags &= ~Rr, yC(f, t, a, e, u), f.mode & Ne && hC(e, s, u), yx(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            hC(e, s, u), WS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Or() && a.mode & Ne) {
        oE();
        var v = mC(t);
        if (v !== null) {
          (v.flags & er) === Me && (v.flags |= Rr), yC(v, t, a, e, u), lg(fc(i, a));
          return;
        }
      }
      i = fc(i, a), Jw(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= er;
            var w = To(u);
            y.lanes = rt(y.lanes, w);
            var _ = vC(y, g, w);
            Cg(y, _);
            return;
          }
          case he:
            var z = i, A = y.type, H = y.stateNode;
            if ((y.flags & Ke) === Me && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !m1(H))) {
              y.flags |= er;
              var ue = To(u);
              y.lanes = rt(y.lanes, ue);
              var ze = vS(y, z, ue);
              Cg(y, ze);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Ex() {
      return null;
    }
    var Np = ie.ReactCurrentOwner, cl = !1, hS, Lp, mS, yS, gS, dc, SS, Em, Mp;
    hS = {}, Lp = {}, mS = {}, yS = {}, gS = {}, dc = !1, SS = {}, Em = {}, Mp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = EE(t, null, a, i) : t.child = Tf(t, e.child, a, i);
    }
    function Cx(e, t, a, i) {
      t.child = Tf(t, e.child, null, i), t.child = Tf(t, null, a, i);
    }
    function gC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      xf(t, u), ma(t);
      {
        if (Np.current = t, Zn(!0), v = Nf(e, t, f, i, p, u), y = Lf(), t.mode & un) {
          Pn(!0);
          try {
            v = Nf(e, t, f, i, p, u), y = Lf();
          } finally {
            Pn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (zE(e, t, u), Pu(e, t, u)) : (Or() && y && eg(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function SC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (wb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Vf(s), t.tag = We, t.type = f, RS(t, s), EC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            St(s)
          ), a.defaultProps !== void 0) {
            var v = St(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = a0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, w = g.propTypes;
        w && al(
          w,
          i,
          // Resolved props
          "prop",
          St(g)
        );
      }
      var _ = e.child, z = DS(e, u);
      if (!z) {
        var A = _.memoizedProps, H = a.compare;
        if (H = H !== null ? H : _n, H(A, i) && e.ref === t.ref)
          return Pu(e, t, u);
      }
      t.flags |= ni;
      var ue = yc(_, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function EC(e, t, a, i, u) {
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
            St(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (_n(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = g, DS(e, u))
            (e.flags & kc) !== Me && (cl = !0);
          else return t.lanes = e.lanes, Pu(e, t, u);
      }
      return ES(e, t, a, i, u);
    }
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Ne) === re) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Mm(t, a);
        } else if (Kr(a, ga)) {
          var w = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var _ = s !== null ? s.baseLanes : a;
          Mm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = rt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ga;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Mm(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = rt(s.baseLanes, a), t.memoizedState = null) : z = a, Mm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function Rx(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Tx(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function _x(e, t, a) {
      {
        t.flags |= _e;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function RC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= da, t.flags |= yi);
    }
    function ES(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f;
      {
        var p = gf(t, a, !0);
        f = Sf(t, p);
      }
      var v, y;
      xf(t, u), ma(t);
      {
        if (Np.current = t, Zn(!0), v = Nf(e, t, a, i, f, u), y = Lf(), t.mode & un) {
          Pn(!0);
          try {
            v = Nf(e, t, a, i, f, u), y = Lf();
          } finally {
            Pn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (zE(e, t, u), Pu(e, t, u)) : (Or() && y && eg(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function TC(e, t, a, i, u) {
      {
        switch (Pb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ke, t.flags |= er;
            var y = new Error("Simulated error coming from DevTools"), g = To(u);
            t.lanes = rt(t.lanes, g);
            var w = vS(t, fc(y, t), g);
            Cg(t, w);
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
            St(a)
          );
        }
      }
      var z;
      Wl(a) ? (z = !0, Lh(t)) : z = !1, xf(t, u);
      var A = t.stateNode, H;
      A === null ? (Rm(e, t), dC(t, a, i), fS(t, a, i, u), H = !0) : e === null ? H = px(t, a, i, u) : H = vx(e, t, a, i, u);
      var ue = CS(e, t, a, H, z, u);
      {
        var ze = t.stateNode;
        H && ze.props !== i && (dc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), dc = !0);
      }
      return ue;
    }
    function CS(e, t, a, i, u, s) {
      RC(e, t);
      var f = (t.flags & Ke) !== Me;
      if (!i && !f)
        return u && aE(t, a, !1), Pu(e, t, s);
      var p = t.stateNode;
      Np.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, uC();
      else {
        ma(t);
        {
          if (Zn(!0), v = p.render(), t.mode & un) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          Zn(!1);
        }
        ya();
      }
      return t.flags |= ni, e !== null && f ? Cx(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && aE(t, a, !0), t.child;
    }
    function _C(e) {
      var t = e.stateNode;
      t.pendingContext ? nE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nE(e, t.context, !1), Rg(e, t.containerInfo);
    }
    function xx(e, t, a) {
      if (_C(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      bE(e, t), qh(t, i, null, a);
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
          var g = fc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return xC(e, t, p, a, g);
        } else if (p !== s) {
          var w = fc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return xC(e, t, p, a, w);
        } else {
          D_(t);
          var _ = EE(t, null, p, a);
          t.child = _;
          for (var z = _; z; )
            z.flags = z.flags & ~Xt | mi, z = z.sibling;
        }
      } else {
        if (Rf(), p === s)
          return Pu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function xC(e, t, a, i, u) {
      return Rf(), lg(u), t.flags |= Rr, Ra(e, t, a, i), t.child;
    }
    function wx(e, t, a) {
      NE(t), e === null && ig(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Vy(i, u);
      return p ? f = null : s !== null && Vy(i, s) && (t.flags |= za), RC(e, t), Ra(e, t, f, a), t.child;
    }
    function bx(e, t) {
      return e === null && ig(t), null;
    }
    function Dx(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = bb(v), g = sl(v, u), w;
      switch (y) {
        case Ue:
          return RS(t, v), t.type = v = Vf(v), w = ES(null, t, v, g, i), w;
        case he:
          return t.type = v = JS(v), w = TC(null, t, v, g, i), w;
        case Ve:
          return t.type = v = ZS(v), w = gC(null, t, v, g, i), w;
        case pt: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && al(
              _,
              g,
              // Resolved for outer only
              "prop",
              St(v)
            );
          }
          return w = SC(
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
    function kx(e, t, a, i, u) {
      Rm(e, t), t.tag = he;
      var s;
      return Wl(a) ? (s = !0, Lh(t)) : s = !1, xf(t, u), dC(t, a, i), fS(t, a, i, u), CS(null, t, a, !0, s, u);
    }
    function Ox(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = gf(t, a, !1);
        s = Sf(t, f);
      }
      xf(t, i);
      var p, v;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = St(a) || "Unknown";
          hS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), hS[y] = !0);
        }
        t.mode & un && ll.recordLegacyContextWarning(t, null), Zn(!0), Np.current = t, p = Nf(null, t, a, u, s, i), v = Lf(), Zn(!1);
      }
      if (ya(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = St(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = St(a) || "Unknown";
          Lp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Lp[w] = !0);
        }
        t.tag = he, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Wl(a) ? (_ = !0, Lh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Eg(t), fC(t, p), fS(t, a, u, i), CS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Ue, t.mode & un) {
          Pn(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = Lf();
          } finally {
            Pn(!1);
          }
        }
        return Or() && v && eg(t), Ra(null, t, p, i), RS(t, a), t.child;
      }
    }
    function RS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), gS[u] || (gS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = St(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = St(t) || "Unknown";
          yS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), yS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = St(t) || "Unknown";
          mS[v] || (S("%s: Function components do not support contextType.", v), mS[v] = !0);
        }
      }
    }
    var TS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Kt
    };
    function _S(e) {
      return {
        baseLanes: e,
        cachePool: Ex(),
        transitions: null
      };
    }
    function Nx(e, t) {
      var a = null;
      return {
        baseLanes: rt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Lx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xg(e, Rp);
    }
    function Mx(e, t) {
      return _o(e.childLanes, t);
    }
    function wC(e, t, a) {
      var i = t.pendingProps;
      Bb(t) && (t.flags |= Ke);
      var u = ul.current, s = !1, f = (t.flags & Ke) !== Me;
      if (f || Lx(u, e) ? (s = !0, t.flags &= ~Ke) : (e === null || e.memoizedState !== null) && (u = K_(u, ME)), u = bf(u), Bo(t, u), e === null) {
        ig(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Fx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = zx(t, y, g, a), _ = t.child;
          return _.memoizedState = _S(a), t.memoizedState = TS, w;
        } else
          return xS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return Hx(e, t, f, i, A, z, a);
        }
        if (s) {
          var H = i.fallback, ue = i.children, ze = Ax(e, t, ue, H, a), De = t.child, xt = e.child.memoizedState;
          return De.memoizedState = xt === null ? _S(a) : Nx(xt, a), De.childLanes = Mx(e, a), t.memoizedState = TS, ze;
        } else {
          var mt = i.children, O = Ux(e, t, mt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function zx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ne) === re && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Xo(a, u, i, null)) : (p = wS(f, u), v = Xo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return b1(e, t, I, null);
    }
    function bC(e, t) {
      return yc(e, t);
    }
    function Ux(e, t, a, i) {
      var u = e.child, s = u.sibling, f = bC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ne) === re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ax(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ne) === re && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & qe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = bC(f, v), y.subtreeFlags = f.subtreeFlags & tr;
      var w;
      return p !== null ? w = yc(p, i) : (w = Xo(i, s, u, null), w.flags |= Xt), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function Cm(e, t, a, i) {
      i !== null && lg(i), Tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = xS(t, s);
      return f.flags |= Xt, t.memoizedState = null, f;
    }
    function jx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = Xo(i, s, u, null);
      return v.flags |= Xt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ne) !== re && Tf(t, e.child, null, u), v;
    }
    function Fx(e, t, a) {
      return (e.mode & Ne) === re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : Iy(t) ? e.lanes = Zi : e.lanes = ga, null;
    }
    function Hx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = dS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ke, null;
          var V = i.children, N = i.fallback, K = jx(e, t, V, N, f), ve = t.child;
          return ve.memoizedState = _S(f), t.memoizedState = TS, K;
        }
      else {
        if (w_(), (t.mode & Ne) === re)
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
            var g = $T(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = dS(w, p, y);
          return Cm(e, t, f, _);
        }
        var z = Kr(f, e.childLanes);
        if (cl || z) {
          var A = Lm();
          if (A !== null) {
            var H = Md(A, f);
            if (H !== Kt && H !== s.retryLane) {
              s.retryLane = H;
              var ue = en;
              Ba(e, H), cr(A, e, H, ue);
            }
          }
          WS();
          var ze = dS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, ze);
        } else if (X0(u)) {
          t.flags |= Ke, t.child = e.child;
          var De = cb.bind(null, e);
          return IT(u, De), null;
        } else {
          k_(t, u, s.treeContext);
          var xt = i.children, mt = xS(t, xt);
          return mt.flags |= mi, mt;
        }
      }
    }
    function DC(e, t, a) {
      e.lanes = rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = rt(i.lanes, t)), mg(e.return, t, a);
    }
    function Vx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && DC(i, a, e);
        } else if (i.tag === Ct)
          DC(i, a, e);
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
    function Px(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Bx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !SS[e])
        if (SS[e] = !0, typeof e == "string")
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
    function $x(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function kC(e, t) {
      {
        var a = bt(e), i = !a && typeof Vr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ix(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!kC(e[a], a))
              return;
        } else {
          var i = Vr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!kC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function bS(e, t, a, i, u) {
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
    function OC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Bx(u), $x(s, u), Ix(f, u), Ra(e, t, f, a);
      var p = ul.current, v = xg(p, Rp);
      if (v)
        p = wg(p, Rp), t.flags |= Ke;
      else {
        var y = e !== null && (e.flags & Ke) !== Me;
        y && Vx(t, t.child, a), p = bf(p);
      }
      if (Bo(t, p), (t.mode & Ne) === re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Px(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), bS(
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
              var H = z.sibling;
              z.sibling = _, _ = z, z = H;
            }
            bS(
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
            bS(
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
    function Yx(e, t, a) {
      Rg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Tf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var NC = !1;
    function Qx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || NC || (NC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (TE(t, u, p), f !== null) {
        var y = f.value;
        if (be(y, p)) {
          if (f.children === s.children && !Oh())
            return Pu(e, t, a);
        } else
          B_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var LC = !1;
    function Wx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (LC || (LC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = qn(i);
      ma(t);
      var p;
      return Np.current = t, Zn(!0), p = s(f), Zn(!1), ya(), t.flags |= ni, Ra(e, t, p, a), t.child;
    }
    function zp() {
      cl = !0;
    }
    function Rm(e, t) {
      (t.mode & Ne) === re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Xt);
    }
    function Pu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), uC(), Qp(t.lanes), Kr(a, t.childLanes) ? (V_(e, t), t.child) : null;
    }
    function Gx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= Xt, a;
      }
    }
    function DS(e, t) {
      var a = e.lanes;
      return !!Kr(a, t);
    }
    function qx(e, t, a) {
      switch (t.tag) {
        case te:
          _C(t), t.stateNode, Rf();
          break;
        case oe:
          NE(t);
          break;
        case he: {
          var i = t.type;
          Wl(i) && Lh(t);
          break;
        }
        case je:
          Rg(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          TE(t, s, u);
          break;
        }
        case Nt:
          {
            var f = Kr(a, t.childLanes);
            f && (t.flags |= _e);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Bo(t, bf(ul.current)), t.flags |= Ke, null;
            var y = t.child, g = y.childLanes;
            if (Kr(a, g))
              return wC(e, t, a);
            Bo(t, bf(ul.current));
            var w = Pu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Bo(t, bf(ul.current));
          break;
        }
        case Ct: {
          var _ = (e.flags & Ke) !== Me, z = Kr(a, t.childLanes);
          if (_) {
            if (z)
              return OC(e, t, a);
            t.flags |= Ke;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Bo(t, ul.current), z)
            break;
          return null;
        }
        case Pe:
        case at:
          return t.lanes = I, CC(e, t, a);
      }
      return Pu(e, t, a);
    }
    function MC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Gx(e, t, a0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = DS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ke) === Me)
            return cl = !1, qx(e, t, a);
          (e.flags & kc) !== Me ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Or() && E_(t)) {
        var f = t.index, p = C_();
        uE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case Xe:
          return Ox(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return Dx(e, t, v, a);
        }
        case Ue: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : sl(y, g);
          return ES(e, t, y, w, a);
        }
        case he: {
          var _ = t.type, z = t.pendingProps, A = t.elementType === _ ? z : sl(_, z);
          return TC(e, t, _, A, a);
        }
        case te:
          return xx(e, t, a);
        case oe:
          return wx(e, t, a);
        case Re:
          return bx(e, t);
        case Te:
          return wC(e, t, a);
        case je:
          return Yx(e, t, a);
        case Ve: {
          var H = t.type, ue = t.pendingProps, ze = t.elementType === H ? ue : sl(H, ue);
          return gC(e, t, H, ze, a);
        }
        case ht:
          return Rx(e, t, a);
        case Fn:
          return Tx(e, t, a);
        case Nt:
          return _x(e, t, a);
        case lt:
          return Qx(e, t, a);
        case sn:
          return Wx(e, t, a);
        case pt: {
          var De = t.type, xt = t.pendingProps, mt = sl(De, xt);
          if (t.type !== t.elementType) {
            var O = De.propTypes;
            O && al(
              O,
              mt,
              // Resolved for outer only
              "prop",
              St(De)
            );
          }
          return mt = sl(De.type, mt), SC(e, t, De, mt, a);
        }
        case We:
          return EC(e, t, t.type, t.pendingProps, a);
        case gn: {
          var V = t.type, N = t.pendingProps, K = t.elementType === V ? N : sl(V, N);
          return kx(e, t, V, K, a);
        }
        case Ct:
          return OC(e, t, a);
        case nn:
          break;
        case Pe:
          return CC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= _e;
    }
    function zC(e) {
      e.flags |= da, e.flags |= yi;
    }
    var UC, kS, AC, jC;
    UC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Re)
          yT(e, u.stateNode);
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
    }, kS = function(e, t) {
    }, AC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Tg(), v = ST(f, a, s, i, u, p);
        t.updateQueue = v, v && Mf(t);
      }
    }, jC = function(e, t, a, i) {
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
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Me;
      if (t) {
        if ((e.mode & qe) !== re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = rt(a, rt(y.lanes, y.childLanes)), i |= y.subtreeFlags & tr, i |= y.flags & tr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = rt(a, rt(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qe) !== re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = rt(a, rt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = rt(a, rt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Xx(e, t, a) {
      if (z_() && (t.mode & Ne) !== re && (t.flags & Ke) === Me)
        return vE(t), Rf(), t.flags |= Rr | kl | er, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (L_(t), Lr(t), (t.mode & qe) !== re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Rf(), (t.flags & Ke) === Me && (t.memoizedState = null), t.flags |= _e, Lr(t), (t.mode & qe) !== re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return hE(), !0;
    }
    function FC(e, t, a) {
      var i = t.pendingProps;
      switch (tg(t), t.tag) {
        case Xe:
        case xn:
        case We:
        case Ue:
        case Ve:
        case ht:
        case Fn:
        case Nt:
        case sn:
        case pt:
          return Lr(t), null;
        case he: {
          var u = t.type;
          return Wl(u) && Nh(t), Lr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (wf(t), Ky(t), Dg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              Mf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Me) && (t.flags |= zn, hE());
            }
          }
          return kS(e, t), Lr(t), null;
        }
        case oe: {
          _g(t);
          var v = OE(), y = t.type;
          if (e !== null && t.stateNode != null)
            AC(e, t, y, i, v), e.ref !== t.ref && zC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = Tg(), w = jh(t);
            if (w)
              O_(t, v, g) && Mf(t);
            else {
              var _ = mT(y, i, v, g, t);
              UC(_, t, !1, !1), t.stateNode = _, gT(_, y, i, v) && Mf(t);
            }
            t.ref !== null && zC(t);
          }
          return Lr(t), null;
        }
        case Re: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            jC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = OE(), ue = Tg(), ze = jh(t);
            ze ? N_(t) && Mf(t) : t.stateNode = ET(z, H, ue, t);
          }
          return Lr(t), null;
        }
        case Te: {
          Df(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = Xx(e, t, De);
            if (!xt)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Ke) !== Me)
            return t.lanes = a, (t.mode & qe) !== re && Zg(t), t;
          var mt = De !== null, O = e !== null && e.memoizedState !== null;
          if (mt !== O && mt) {
            var V = t.child;
            if (V.flags |= Dl, (t.mode & Ne) !== re) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              N || xg(ul.current, ME) ? Kw() : WS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= _e), Lr(t), (t.mode & qe) !== re && mt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case je:
          return wf(t), kS(e, t), e === null && p_(t.stateNode.containerInfo), Lr(t), null;
        case lt:
          var se = t.type._context;
          return hg(se, t), Lr(t), null;
        case gn: {
          var Ye = t.type;
          return Wl(Ye) && Nh(t), Lr(t), null;
        }
        case Ct: {
          Df(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Lr(t), null;
          var Wt = (t.flags & Ke) !== Me, zt = Ze.rendering;
          if (zt === null)
            if (Wt)
              Up(Ze, !1);
            else {
              var $n = Zw() && (e === null || (e.flags & Ke) === Me);
              if (!$n)
                for (var Ut = t.child; Ut !== null; ) {
                  var jn = Zh(Ut);
                  if (jn !== null) {
                    Wt = !0, t.flags |= Ke, Up(Ze, !1);
                    var ta = jn.updateQueue;
                    return ta !== null && (t.updateQueue = ta, t.flags |= _e), t.subtreeFlags = Me, P_(t, a), Bo(t, wg(ul.current, Rp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ze.tail !== null && Un() > i1() && (t.flags |= Ke, Wt = !0, Up(Ze, !1), t.lanes = Vv);
            }
          else {
            if (!Wt) {
              var jr = Zh(zt);
              if (jr !== null) {
                t.flags |= Ke, Wt = !0;
                var ci = jr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= _e), Up(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !zt.alternate && !Or())
                  return Lr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Un() * 2 - Ze.renderingStartTime > i1() && a !== ga && (t.flags |= Ke, Wt = !0, Up(Ze, !1), t.lanes = Vv);
            }
            if (Ze.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var xa = Ze.last;
              xa !== null ? xa.sibling = zt : t.child = zt, Ze.last = zt;
            }
          }
          if (Ze.tail !== null) {
            var wa = Ze.tail;
            Ze.rendering = wa, Ze.tail = wa.sibling, Ze.renderingStartTime = Un(), wa.sibling = null;
            var na = ul.current;
            return Wt ? na = wg(na, Rp) : na = bf(na), Bo(t, na), wa;
          }
          return Lr(t), null;
        }
        case nn:
          break;
        case Pe:
        case at: {
          QS(t);
          var Qu = t.memoizedState, Pf = Qu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, tu = Kp !== null;
            tu !== Pf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= Dl);
          }
          return !Pf || (t.mode & Ne) === re ? Lr(t) : Kr(eu, ga) && (Lr(t), t.subtreeFlags & (Xt | _e) && (t.flags |= Dl)), null;
        }
        case wt:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kx(e, t, a) {
      switch (tg(t), t.tag) {
        case he: {
          var i = t.type;
          Wl(i) && Nh(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | Ke, (t.mode & qe) !== re && Zg(t), t) : null;
        }
        case te: {
          t.stateNode, wf(t), Ky(t), Dg();
          var s = t.flags;
          return (s & er) !== Me && (s & Ke) === Me ? (t.flags = s & ~er | Ke, t) : null;
        }
        case oe:
          return _g(t), null;
        case Te: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Rf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | Ke, (t.mode & qe) !== re && Zg(t), t) : null;
        }
        case Ct:
          return Df(t), null;
        case je:
          return wf(t), null;
        case lt:
          var v = t.type._context;
          return hg(v, t), null;
        case Pe:
        case at:
          return QS(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function HC(e, t, a) {
      switch (tg(t), t.tag) {
        case he: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case te: {
          t.stateNode, wf(t), Ky(t), Dg();
          break;
        }
        case oe: {
          _g(t);
          break;
        }
        case je:
          wf(t);
          break;
        case Te:
          Df(t);
          break;
        case Ct:
          Df(t);
          break;
        case lt:
          var u = t.type._context;
          hg(u, t);
          break;
        case Pe:
        case at:
          QS(t);
          break;
      }
    }
    var VC = null;
    VC = /* @__PURE__ */ new Set();
    var Tm = !1, Mr = !1, Jx = typeof WeakSet == "function" ? WeakSet : Set, ge = null, zf = null, Uf = null;
    function Zx(e) {
      ti(null, function() {
        throw e;
      }), Gi();
    }
    var ew = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qe)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function PC(e, t) {
      try {
        Yo(ar, e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function OS(e, t, a) {
      try {
        ew(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function tw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function BC(e, t) {
      try {
        IC(e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function Af(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (yt && ft && e.mode & qe)
              try {
                Jl(), i = a(null);
              } finally {
                Kl(e);
              }
            else
              i = a(null);
          } catch (u) {
            on(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
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
    var $C = !1;
    function nw(e, t) {
      vT(e.containerInfo), ge = t, rw();
      var a = $C;
      return $C = !1, a;
    }
    function rw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & Qr) !== Me && t !== null ? (t.return = e, ge = t) : aw();
      }
    }
    function aw() {
      for (; ge !== null; ) {
        var e = ge;
        hn(e);
        try {
          iw(e);
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
    function iw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & zn) !== Me) {
        switch (hn(e), e.tag) {
          case Ue:
          case Ve:
          case We:
            break;
          case he: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !dc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = VC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              HT(v.containerInfo);
            }
            break;
          }
          case oe:
          case Re:
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
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== $a ? Ac(t) : (e & ar) !== $a && co(t), (e & Gl) !== $a && Gp(!0), _m(t, a, p), (e & Gl) !== $a && Gp(!1), (e & Nr) !== $a ? Fv() : (e & ar) !== $a && fo());
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
            (e & Nr) !== $a ? Uc(t) : (e & ar) !== $a && ws(t);
            var f = s.create;
            (e & Gl) !== $a && Gp(!0), s.destroy = f(), (e & Gl) !== $a && Gp(!1), (e & Nr) !== $a ? jv() : (e & ar) !== $a && gi();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ar) !== Me ? v = "useLayoutEffect" : (s.tag & Gl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
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
    function lw(e, t) {
      if ((t.flags & _e) !== Me)
        switch (t.tag) {
          case Nt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = iC(), p = t.alternate === null ? "mount" : "update";
            aC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Nt:
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
    function uw(e, t, a, i) {
      if ((a.flags & ri) !== Me)
        switch (a.tag) {
          case Ue:
          case Ve:
          case We: {
            if (!Mr)
              if (a.mode & qe)
                try {
                  Jl(), Yo(ar | rr, a);
                } finally {
                  Kl(a);
                }
              else
                Yo(ar | rr, a);
            break;
          }
          case he: {
            var u = a.stateNode;
            if (a.flags & _e && !Mr)
              if (t === null)
                if (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & qe)
                  try {
                    Jl(), u.componentDidMount();
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & qe)
                  try {
                    Jl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), kE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case he:
                    y = a.child.stateNode;
                    break;
                }
              kE(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & _e) {
              var w = a.type, _ = a.memoizedProps;
              xT(g, w, _);
            }
            break;
          }
          case Re:
            break;
          case je:
            break;
          case Nt: {
            {
              var z = a.memoizedProps, A = z.onCommit, H = z.onRender, ue = a.stateNode.effectDuration, ze = iC(), De = t === null ? "mount" : "update";
              aC() && (De = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof A == "function" && A(a.memoizedProps.id, De, ue, ze), ab(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case te:
                      var mt = xt.stateNode;
                      mt.effectDuration += ue;
                      break e;
                    case Nt:
                      var O = xt.stateNode;
                      O.effectDuration += ue;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case Te: {
            hw(e, a);
            break;
          }
          case Ct:
          case gn:
          case nn:
          case Pe:
          case at:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & da && IC(a);
    }
    function ow(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          if (e.mode & qe)
            try {
              Jl(), PC(e, e.return);
            } finally {
              Kl(e);
            }
          else
            PC(e, e.return);
          break;
        }
        case he: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && tw(e, e.return, t), BC(e, e.return);
          break;
        }
        case oe: {
          BC(e, e.return);
          break;
        }
      }
    }
    function sw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? UT(u) : jT(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? AT(s) : FT(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === at) && i.memoizedState !== null && i !== e)) {
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
    function IC(e) {
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
          if (e.mode & qe)
            try {
              Jl(), u = t(i);
            } finally {
              Kl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function cw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function YC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, YC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && m_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function fw(e) {
      for (var t = e.return; t !== null; ) {
        if (QC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function QC(e) {
      return e.tag === oe || e.tag === te || e.tag === je;
    }
    function WC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || QC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Re && t.tag !== Jt; ) {
          if (t.flags & Xt || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Xt))
          return t.stateNode;
      }
    }
    function dw(e) {
      var t = fw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & za && (q0(a), t.flags &= ~za);
          var i = WC(e);
          LS(e, i, a);
          break;
        }
        case te:
        case je: {
          var u = t.stateNode.containerInfo, s = WC(e);
          NS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === oe || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? NT(a, s, t) : kT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    function LS(e, t, a) {
      var i = e.tag, u = i === oe || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? OT(a, s, t) : DT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          LS(f, t, a);
          for (var p = f.sibling; p !== null; )
            LS(p, t, a), p = p.sibling;
        }
      }
    }
    var zr = null, dl = !1;
    function pw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              zr = i.stateNode, dl = !1;
              break e;
            }
            case te: {
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
        GC(e, t, a), zr = null, dl = !1;
      }
      cw(a);
    }
    function Qo(e, t, a) {
      for (var i = a.child; i !== null; )
        GC(e, t, i), i = i.sibling;
    }
    function GC(e, t, a) {
      switch (hd(a), a.tag) {
        case oe:
          Mr || Af(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Re: {
          {
            var i = zr, u = dl;
            zr = null, Qo(e, t, a), zr = i, dl = u, zr !== null && (dl ? MT(zr, a.stateNode) : LT(zr, a.stateNode));
          }
          return;
        }
        case Jt: {
          zr !== null && (dl ? zT(zr, a.stateNode) : $y(zr, a.stateNode));
          return;
        }
        case je: {
          {
            var s = zr, f = dl;
            zr = a.stateNode.containerInfo, dl = !0, Qo(e, t, a), zr = s, dl = f;
          }
          return;
        }
        case Ue:
        case Ve:
        case pt:
        case We: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, _ = w.destroy, z = w.tag;
                  _ !== void 0 && ((z & Gl) !== $a ? _m(a, t, _) : (z & ar) !== $a && (co(a), a.mode & qe ? (Jl(), _m(a, t, _), Kl(a)) : _m(a, t, _), fo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Qo(e, t, a);
          return;
        }
        case he: {
          if (!Mr) {
            Af(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && OS(a, t, A);
          }
          Qo(e, t, a);
          return;
        }
        case nn: {
          Qo(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ne
          ) {
            var H = Mr;
            Mr = H || a.memoizedState !== null, Qo(e, t, a), Mr = H;
          } else
            Qo(e, t, a);
          break;
        }
        default: {
          Qo(e, t, a);
          return;
        }
      }
    }
    function vw(e) {
      e.memoizedState;
    }
    function hw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ZT(s);
          }
        }
      }
    }
    function qC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Jx()), t.forEach(function(i) {
          var u = fb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ha)
              if (zf !== null && Uf !== null)
                Wp(Uf, zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function mw(e, t, a) {
      zf = a, Uf = e, hn(t), XC(t, e), hn(t), zf = null, Uf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            pw(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = ls();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          hn(p), XC(p, e), p = p.sibling;
      hn(f);
    }
    function XC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Ue:
        case Ve:
        case pt:
        case We: {
          if (pl(t, e), Zl(e), u & _e) {
            try {
              fl(Gl | rr, e, e.return), Yo(Gl | rr, e);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
            if (e.mode & qe) {
              try {
                Jl(), fl(ar | rr, e, e.return);
              } catch (Ye) {
                on(e, e.return, Ye);
              }
              Kl(e);
            } else
              try {
                fl(ar | rr, e, e.return);
              } catch (Ye) {
                on(e, e.return, Ye);
              }
          }
          return;
        }
        case he: {
          pl(t, e), Zl(e), u & da && i !== null && Af(i, i.return);
          return;
        }
        case oe: {
          pl(t, e), Zl(e), u & da && i !== null && Af(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                q0(s);
              } catch (Ye) {
                on(e, e.return, Ye);
              }
            }
            if (u & _e) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    wT(f, g, y, v, p, e);
                  } catch (Ye) {
                    on(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case Re: {
          if (pl(t, e), Zl(e), u & _e) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, _ = e.memoizedProps, z = i !== null ? i.memoizedProps : _;
            try {
              bT(w, z, _);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
          }
          return;
        }
        case te: {
          if (pl(t, e), Zl(e), u & _e && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                JT(t.containerInfo);
              } catch (Ye) {
                on(e, e.return, Ye);
              }
          }
          return;
        }
        case je: {
          pl(t, e), Zl(e);
          return;
        }
        case Te: {
          pl(t, e), Zl(e);
          var H = e.child;
          if (H.flags & Dl) {
            var ue = H.stateNode, ze = H.memoizedState, De = ze !== null;
            if (ue.isHidden = De, De) {
              var xt = H.alternate !== null && H.alternate.memoizedState !== null;
              xt || Xw();
            }
          }
          if (u & _e) {
            try {
              vw(e);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
            qC(e);
          }
          return;
        }
        case Pe: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ne
          ) {
            var O = Mr;
            Mr = O || mt, pl(t, e), Mr = O;
          } else
            pl(t, e);
          if (Zl(e), u & Dl) {
            var V = e.stateNode, N = e.memoizedState, K = N !== null, ve = e;
            if (V.isHidden = K, K && !mt && (ve.mode & Ne) !== re) {
              ge = ve;
              for (var se = ve.child; se !== null; )
                ge = se, gw(se), se = se.sibling;
            }
            sw(ve, K);
          }
          return;
        }
        case Ct: {
          pl(t, e), Zl(e), u & _e && qC(e);
          return;
        }
        case nn:
          return;
        default: {
          pl(t, e), Zl(e);
          return;
        }
      }
    }
    function Zl(e) {
      var t = e.flags;
      if (t & Xt) {
        try {
          dw(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~Xt;
      }
      t & mi && (e.flags &= ~mi);
    }
    function yw(e, t, a) {
      zf = a, Uf = t, ge = e, KC(e, t, a), zf = null, Uf = null;
    }
    function KC(e, t, a) {
      for (var i = (e.mode & Ne) !== re; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, w = Tm, _ = Mr;
            Tm = p, Mr = g, Mr && !_ && (ge = u, Sw(u));
            for (var z = s; z !== null; )
              ge = z, KC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            ge = u, Tm = w, Mr = _, MS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ri) !== Me && s !== null ? (s.return = u, ge = s) : MS(e, t, a);
      }
    }
    function MS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & ri) !== Me) {
          var u = i.alternate;
          hn(i);
          try {
            uw(t, u, i, a);
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
    function gw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case Ue:
          case Ve:
          case pt:
          case We: {
            if (t.mode & qe)
              try {
                Jl(), fl(ar, t, t.return);
              } finally {
                Kl(t);
              }
            else
              fl(ar, t, t.return);
            break;
          }
          case he: {
            Af(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && OS(t, t.return, i);
            break;
          }
          case oe: {
            Af(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              JC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : JC(e);
      }
    }
    function JC(e) {
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
    function Sw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            ZC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : ZC(e);
      }
    }
    function ZC(e) {
      for (; ge !== null; ) {
        var t = ge;
        hn(t);
        try {
          ow(t);
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
    function Ew(e, t, a, i) {
      ge = t, Cw(t, e, a, i);
    }
    function Cw(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gr) !== Me && s !== null ? (s.return = u, ge = s) : Rw(e, t, a, i);
      }
    }
    function Rw(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Yr) !== Me) {
          hn(u);
          try {
            Tw(t, u, a, i);
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
    function Tw(e, t, a, i) {
      switch (t.tag) {
        case Ue:
        case Ve:
        case We: {
          if (t.mode & qe) {
            Jg();
            try {
              Yo(Nr | rr, t);
            } finally {
              Kg(t);
            }
          } else
            Yo(Nr | rr, t);
          break;
        }
      }
    }
    function _w(e) {
      ge = e, xw();
    }
    function xw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Mt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, Dw(u, e);
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
        (e.subtreeFlags & Gr) !== Me && t !== null ? (t.return = e, ge = t) : ww();
      }
    }
    function ww() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Yr) !== Me && (hn(e), bw(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function bw(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          e.mode & qe ? (Jg(), fl(Nr | rr, e, e.return), Kg(e)) : fl(Nr | rr, e, e.return);
          break;
        }
      }
    }
    function Dw(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        hn(a), Ow(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : kw(e);
      }
    }
    function kw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (YC(t), t === e) {
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
    function Ow(e, t) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          e.mode & qe ? (Jg(), fl(Nr, e, t), Kg(e)) : fl(Nr, e, t);
          break;
        }
      }
    }
    function Nw(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          try {
            Yo(ar | rr, e);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case he: {
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
    function Lw(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          try {
            Yo(Nr | rr, e);
          } catch (t) {
            on(e, e.return, t);
          }
          break;
        }
      }
    }
    function Mw(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We: {
          try {
            fl(ar | rr, e, e.return);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case he: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && OS(e, e.return, t);
          break;
        }
      }
    }
    function zw(e) {
      switch (e.tag) {
        case Ue:
        case Ve:
        case We:
          try {
            fl(Nr | rr, e, e.return);
          } catch (t) {
            on(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var Uw = [];
    function Aw() {
      Uw.forEach(function(e) {
        return e();
      });
    }
    var jw = ie.ReactCurrentActQueue;
    function Fw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function e1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && jw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Hw = Math.ceil, zS = ie.ReactCurrentDispatcher, US = ie.ReactCurrentOwner, Ur = ie.ReactCurrentBatchConfig, vl = ie.ReactCurrentActQueue, ur = (
      /*             */
      0
    ), t1 = (
      /*               */
      1
    ), Ar = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Bu = 0, jp = 1, pc = 2, xm = 3, Fp = 4, n1 = 5, AS = 6, _t = ur, Ta = null, On = null, or = I, eu = I, jS = Ao(I), sr = Bu, Hp = null, wm = I, Vp = I, bm = I, Pp = null, Ia = null, FS = 0, r1 = 500, a1 = 1 / 0, Vw = 500, $u = null;
    function Bp() {
      a1 = Un() + Vw;
    }
    function i1() {
      return a1;
    }
    var Dm = !1, HS = null, jf = null, vc = !1, Wo = null, $p = I, VS = [], PS = null, Pw = 50, Ip = 0, BS = null, $S = !1, km = !1, Bw = 50, Ff = 0, Om = null, Yp = en, Nm = I, l1 = !1;
    function Lm() {
      return Ta;
    }
    function _a() {
      return (_t & (Ar | Ni)) !== ur ? Un() : (Yp !== en || (Yp = Un()), Yp);
    }
    function Go(e) {
      var t = e.mode;
      if ((t & Ne) === re)
        return we;
      if ((_t & Ar) !== ur && or !== I)
        return To(or);
      var a = j_() !== A_;
      if (a) {
        if (Ur.transition !== null) {
          var i = Ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Nm === Kt && (Nm = Tr()), Nm;
      }
      var u = xr();
      if (u !== Kt)
        return u;
      var s = CT();
      return s;
    }
    function $w(e) {
      var t = e.mode;
      return (t & Ne) === re ? we : _r();
    }
    function cr(e, t, a, i) {
      pb(), l1 && S("useInsertionEffect must not schedule updates."), $S && (km = !0), xo(e, a, i), (_t & Ar) !== I && e === Ta ? mb(t) : (ha && zd(e, t, a), yb(t), e === Ta && ((_t & Ar) === ur && (Vp = rt(Vp, a)), sr === Fp && qo(e, or)), Ya(e, i), a === we && _t === ur && (t.mode & Ne) === re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Bp(), lE()));
    }
    function Iw(e, t, a) {
      var i = e.current;
      i.lanes = t, xo(e, t, a), Ya(e, a);
    }
    function Yw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & Ar) !== ur
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = Ls(e, e === Ta ? or : I);
      if (i === I) {
        a !== null && R1(a), e.callbackNode = null, e.callbackPriority = Kt;
        return;
      }
      var u = jl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== XS)) {
        a == null && s !== we && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && R1(a);
      var f;
      if (u === we)
        e.tag === jo ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), S_(s1.bind(null, e))) : iE(s1.bind(null, e)), vl.current !== null ? vl.current.push(Fo) : TT(function() {
          (_t & (Ar | Ni)) === ur && Fo();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case Sa:
            p = Ll;
            break;
          case Ri:
            p = oo;
            break;
          case li:
            p = Ml;
            break;
          case Fs:
            p = zl;
            break;
          default:
            p = Ml;
            break;
        }
        f = KS(p, u1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function u1(e, t) {
      if (sx(), Yp = en, Nm = I, (_t & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ls(e, e === Ta ? or : I);
      if (u === I)
        return null;
      var s = !zs(e, u) && !Yv(e, u) && !t, f = s ? tb(e, u) : zm(e, u);
      if (f !== Bu) {
        if (f === pc) {
          var p = Ms(e);
          p !== I && (u = p, f = IS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw hc(e, I), qo(e, u), Ya(e, Un()), v;
        }
        if (f === AS)
          qo(e, u);
        else {
          var y = !zs(e, u), g = e.current.alternate;
          if (y && !Ww(g)) {
            if (f = zm(e, u), f === pc) {
              var w = Ms(e);
              w !== I && (u = w, f = IS(e, w));
            }
            if (f === jp) {
              var _ = Hp;
              throw hc(e, I), qo(e, u), Ya(e, Un()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Qw(e, f, u);
        }
      }
      return Ya(e, Un()), e.callbackNode === a ? u1.bind(null, e) : null;
    }
    function IS(e, t) {
      var a = Pp;
      if (pe(e)) {
        var i = hc(e, t);
        i.flags |= Rr, d_(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== pc) {
        var s = Ia;
        Ia = a, s !== null && o1(s);
      }
      return u;
    }
    function o1(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function Qw(e, t, a) {
      switch (t) {
        case Bu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case pc: {
          mc(e, Ia, $u);
          break;
        }
        case xm: {
          if (qo(e, a), kd(a) && // do not delay if we're inside an act() scope
          !T1()) {
            var i = FS + r1 - Un();
            if (i > 10) {
              var u = Ls(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!Hl(s, a)) {
                _a(), As(e, s);
                break;
              }
              e.timeoutHandle = Py(mc.bind(null, e, Ia, $u), i);
              break;
            }
          }
          mc(e, Ia, $u);
          break;
        }
        case Fp: {
          if (qo(e, a), Iv(a))
            break;
          if (!T1()) {
            var f = Pv(e, a), p = f, v = Un() - p, y = db(v) - v;
            if (y > 10) {
              e.timeoutHandle = Py(mc.bind(null, e, Ia, $u), y);
              break;
            }
          }
          mc(e, Ia, $u);
          break;
        }
        case n1: {
          mc(e, Ia, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ww(e) {
      for (var t = e; ; ) {
        if (t.flags & mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!be(f(), p))
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
    function qo(e, t) {
      t = _o(t, bm), t = _o(t, Vp), Ld(e, t);
    }
    function s1(e) {
      if (cx(), (_t & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      Yu();
      var t = Ls(e, I);
      if (!Kr(t, we))
        return Ya(e, Un()), null;
      var a = zm(e, t);
      if (e.tag !== jo && a === pc) {
        var i = Ms(e);
        i !== I && (t = i, a = IS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw hc(e, I), qo(e, t), Ya(e, Un()), u;
      }
      if (a === AS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, mc(e, Ia, $u), Ya(e, Un()), null;
    }
    function Gw(e, t) {
      t !== I && (Jc(e, rt(t, we)), Ya(e, Un()), (_t & (Ar | Ni)) === ur && (Bp(), Fo()));
    }
    function YS(e, t) {
      var a = _t;
      _t |= t1;
      try {
        return e(t);
      } finally {
        _t = a, _t === ur && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Bp(), lE());
      }
    }
    function qw(e, t, a, i, u) {
      var s = xr(), f = Ur.transition;
      try {
        return Ur.transition = null, Dt(Sa), e(t, a, i, u);
      } finally {
        Dt(s), Ur.transition = f, _t === ur && Bp();
      }
    }
    function Iu(e) {
      Wo !== null && Wo.tag === jo && (_t & (Ar | Ni)) === ur && Yu();
      var t = _t;
      _t |= t1;
      var a = Ur.transition, i = xr();
      try {
        return Ur.transition = null, Dt(Sa), e ? e() : void 0;
      } finally {
        Dt(i), Ur.transition = a, _t = t, (_t & (Ar | Ni)) === ur && Fo();
      }
    }
    function c1() {
      return (_t & (Ar | Ni)) !== ur;
    }
    function Mm(e, t) {
      Zr(jS, eu, e), eu = rt(eu, t);
    }
    function QS(e) {
      eu = jS.current, Jr(jS, e);
    }
    function hc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== By && (e.timeoutHandle = By, RT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          HC(u, i), i = i.return;
        }
      Ta = e;
      var s = yc(e.current, null);
      return On = s, or = eu = t, sr = Bu, Hp = null, wm = I, Vp = I, bm = I, Pp = null, Ia = null, I_(), ll.discardPendingWarnings(), s;
    }
    function f1(e, t) {
      do {
        var a = On;
        try {
          if ($h(), UE(), rn(), US.current = null, a === null || a.return === null) {
            sr = jp, Hp = t, On = null;
            return;
          }
          if (yt && a.mode & qe && gm(a, !0), ut)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              gd(a, i, or);
            } else
              Eu(a, t, or);
          Sx(e, a.return, a, t, or), h1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function d1() {
      var e = zS.current;
      return zS.current = pm, e === null ? pm : e;
    }
    function p1(e) {
      zS.current = e;
    }
    function Xw() {
      FS = Un();
    }
    function Qp(e) {
      wm = rt(e, wm);
    }
    function Kw() {
      sr === Bu && (sr = xm);
    }
    function WS() {
      (sr === Bu || sr === xm || sr === pc) && (sr = Fp), Ta !== null && (Dd(wm) || Dd(Vp)) && qo(Ta, or);
    }
    function Jw(e) {
      sr !== Fp && (sr = pc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Zw() {
      return sr === Bu;
    }
    function zm(e, t) {
      var a = _t;
      _t |= Ar;
      var i = d1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), js(e, t);
        }
        $u = Ci(), hc(e, t);
      }
      bs(t);
      do
        try {
          eb();
          break;
        } catch (s) {
          f1(e, s);
        }
      while (!0);
      if ($h(), _t = a, p1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return jc(), Ta = null, or = I, sr;
    }
    function eb() {
      for (; On !== null; )
        v1(On);
    }
    function tb(e, t) {
      var a = _t;
      _t |= Ar;
      var i = d1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), js(e, t);
        }
        $u = Ci(), Bp(), hc(e, t);
      }
      bs(t);
      do
        try {
          nb();
          break;
        } catch (s) {
          f1(e, s);
        }
      while (!0);
      return $h(), p1(i), _t = a, On !== null ? (Ed(), Bu) : (jc(), Ta = null, or = I, sr);
    }
    function nb() {
      for (; On !== null && !zv(); )
        v1(On);
    }
    function v1(e) {
      var t = e.alternate;
      hn(e);
      var a;
      (e.mode & qe) !== re ? (Xg(e), a = GS(t, e, eu), gm(e, !0)) : a = GS(t, e, eu), rn(), e.memoizedProps = e.pendingProps, a === null ? h1(e) : On = a, US.current = null;
    }
    function h1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & kl) === Me) {
          hn(t);
          var u = void 0;
          if ((t.mode & qe) === re ? u = FC(a, t, eu) : (Xg(t), u = FC(a, t, eu), gm(t, !1)), rn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Kx(a, t);
          if (s !== null) {
            s.flags &= qi, On = s;
            return;
          }
          if ((t.mode & qe) !== re) {
            gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= kl, i.subtreeFlags = Me, i.deletions = null;
          else {
            sr = AS, On = null;
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
      sr === Bu && (sr = n1);
    }
    function mc(e, t, a) {
      var i = xr(), u = Ur.transition;
      try {
        Ur.transition = null, Dt(Sa), rb(e, t, a, i);
      } finally {
        Ur.transition = u, Dt(i);
      }
      return null;
    }
    function rb(e, t, a, i) {
      do
        Yu();
      while (Wo !== null);
      if (vb(), (_t & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (md(s), u === null)
        return yd(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Kt;
      var f = rt(u.lanes, u.childLanes);
      cy(e, f), e === Ta && (Ta = null, On = null, or = I), ((u.subtreeFlags & Gr) !== Me || (u.flags & Gr) !== Me) && (vc || (vc = !0, PS = a, KS(Ml, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ri | Gr)) !== Me, v = (u.flags & (Qr | Wr | ri | Gr)) !== Me;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = xr();
        Dt(Sa);
        var w = _t;
        _t |= Ni, US.current = null, nw(e, u), lC(), mw(e, u, s), hT(e.containerInfo), e.current = u, po(s), yw(u, e, s), Hv(), uo(), _t = w, Dt(g), Ur.transition = y;
      } else
        e.current = u, lC();
      var _ = vc;
      if (vc ? (vc = !1, Wo = e, $p = s) : (Ff = 0, Om = null), f = e.pendingLanes, f === I && (jf = null), _ || S1(e.current, !1), Ha(u.stateNode, i), ha && e.memoizedUpdaters.clear(), Aw(), Ya(e, Un()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], ue = H.stack, ze = H.digest;
          z(H.value, {
            componentStack: ue,
            digest: ze
          });
        }
      if (Dm) {
        Dm = !1;
        var De = HS;
        throw HS = null, De;
      }
      return Kr($p, we) && e.tag !== jo && Yu(), f = e.pendingLanes, Kr(f, we) ? (ox(), e === BS ? Ip++ : (Ip = 0, BS = e)) : Ip = 0, Fo(), yd(), null;
    }
    function Yu() {
      if (Wo !== null) {
        var e = Wv($p), t = Zc(li, e), a = Ur.transition, i = xr();
        try {
          return Ur.transition = null, Dt(t), ib();
        } finally {
          Dt(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function ab(e) {
      VS.push(e), vc || (vc = !0, KS(Ml, function() {
        return Yu(), null;
      }));
    }
    function ib() {
      if (Wo === null)
        return !1;
      var e = PS;
      PS = null;
      var t = Wo, a = $p;
      if (Wo = null, $p = I, (_t & (Ar | Ni)) !== ur)
        throw new Error("Cannot flush passive effects while already rendering.");
      $S = !0, km = !1, Sd(a);
      var i = _t;
      _t |= Ni, _w(t.current), Ew(t, t.current, a, e);
      {
        var u = VS;
        VS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          lw(t, f);
        }
      }
      mn(), S1(t.current, !0), _t = i, Fo(), km ? t === Om ? Ff++ : (Ff = 0, Om = t) : Ff = 0, $S = !1, km = !1, Su(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function m1(e) {
      return jf !== null && jf.has(e);
    }
    function lb(e) {
      jf === null ? jf = /* @__PURE__ */ new Set([e]) : jf.add(e);
    }
    function ub(e) {
      Dm || (Dm = !0, HS = e);
    }
    var ob = ub;
    function y1(e, t, a) {
      var i = fc(a, t), u = vC(e, i, we), s = Vo(e, u, we), f = _a();
      s !== null && (xo(s, we, f), Ya(s, f));
    }
    function on(e, t, a) {
      if (Zx(a), Gp(!1), e.tag === te) {
        y1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          y1(i, e, a);
          return;
        } else if (i.tag === he) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !m1(s)) {
            var f = fc(a, e), p = vS(i, f, we), v = Vo(i, p, we), y = _a();
            v !== null && (xo(v, we, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function sb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      As(e, a), gb(e), Ta === e && Hl(or, a) && (sr === Fp || sr === xm && kd(or) && Un() - FS < r1 ? hc(e, I) : bm = rt(bm, a)), Ya(e, u);
    }
    function g1(e, t) {
      t === Kt && (t = $w(e));
      var a = _a(), i = Ba(e, t);
      i !== null && (xo(i, t, a), Ya(i, a));
    }
    function cb(e) {
      var t = e.memoizedState, a = Kt;
      t !== null && (a = t.retryLane), g1(e, a);
    }
    function fb(e, t) {
      var a = Kt, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), g1(e, a);
    }
    function db(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Hw(e / 1960) * 1960;
    }
    function pb() {
      if (Ip > Pw)
        throw Ip = 0, BS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ff > Bw && (Ff = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function vb() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function S1(e, t) {
      hn(e), Um(e, Aa, Mw), t && Um(e, yu, zw), Um(e, Aa, Nw), t && Um(e, yu, Lw), rn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function E1(e) {
      {
        if ((_t & Ar) !== ur || !(e.mode & Ne))
          return;
        var t = e.tag;
        if (t !== Xe && t !== te && t !== he && t !== Ue && t !== Ve && t !== pt && t !== We)
          return;
        var a = Ge(e) || "ReactComponent";
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
    var GS;
    {
      var hb = null;
      GS = function(e, t, a) {
        var i = D1(hb, t);
        try {
          return MC(e, t, a);
        } catch (s) {
          if (b_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), UE(), HC(e, t), D1(t, i), t.mode & qe && Xg(t), ti(null, MC, null, e, t, a), iy()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var C1 = !1, qS;
    qS = /* @__PURE__ */ new Set();
    function mb(e) {
      if (Br && !ix())
        switch (e.tag) {
          case Ue:
          case Ve:
          case We: {
            var t = On && Ge(On) || "Unknown", a = t;
            if (!qS.has(a)) {
              qS.add(a);
              var i = Ge(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case he: {
            C1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), C1 = !0);
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
    var XS = {};
    function KS(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), XS) : pd(e, t);
      }
    }
    function R1(e) {
      if (e !== XS)
        return Mc(e);
    }
    function T1() {
      return vl.current !== null;
    }
    function yb(e) {
      {
        if (e.mode & Ne) {
          if (!e1())
            return;
        } else if (!Fw() || _t !== ur || e.tag !== Ue && e.tag !== Ve && e.tag !== We)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? hn(e) : rn();
          }
        }
      }
    }
    function gb(e) {
      e.tag !== jo && e1() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      l1 = e;
    }
    var Li = null, Hf = null, Sb = function(e) {
      Li = e;
    };
    function Vf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function JS(e) {
      return Vf(e);
    }
    function ZS(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
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
    function _1(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case he: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Ue: {
            (typeof i == "function" || s === Ae) && (u = !0);
            break;
          }
          case Ve: {
            (s === q || s === Ae) && (u = !0);
            break;
          }
          case pt:
          case We: {
            (s === Tt || s === Ae) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function x1(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Hf === null && (Hf = /* @__PURE__ */ new WeakSet()), Hf.add(e);
      }
    }
    var Eb = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          e0(e.current, i, a);
        });
      }
    }, Cb = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Yu(), Iu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function e0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Ue:
          case We:
          case he:
            v = p;
            break;
          case Ve:
            v = p.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var w = Li(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === he ? g = !0 : y = !0));
        }
        if (Hf !== null && (Hf.has(e) || i !== null && Hf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, we);
          _ !== null && cr(_, e, we, en);
        }
        u !== null && !g && e0(u, t, a), s !== null && e0(s, t, a);
      }
    }
    var Rb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return t0(e.current, i, a), a;
      }
    };
    function t0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Ue:
          case We:
          case he:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Tb(e, a) : i !== null && t0(i, t, a), u !== null && t0(u, t, a);
      }
    }
    function Tb(e, t) {
      {
        var a = _b(e, t);
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
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function _b(e, t) {
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
    var n0;
    {
      n0 = !1;
      try {
        var w1 = Object.preventExtensions({});
      } catch {
        n0 = !0;
      }
    }
    function xb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !n0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new xb(e, t, a, i);
    };
    function r0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function wb(e) {
      return typeof e == "function" && !r0(e) && e.defaultProps === void 0;
    }
    function bb(e) {
      if (typeof e == "function")
        return r0(e) ? he : Ue;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return Ve;
        if (t === Tt)
          return pt;
      }
      return Xe;
    }
    function yc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Xe:
        case Ue:
        case We:
          a.type = Vf(e.type);
          break;
        case he:
          a.type = JS(e.type);
          break;
        case Ve:
          a.type = ZS(e.type);
          break;
      }
      return a;
    }
    function Db(e, t) {
      e.flags &= tr | Xt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function kb(e, t, a) {
      var i;
      return e === Mh ? (i = Ne, t === !0 && (i |= un, i |= qr)) : i = re, ha && (i |= qe), si(te, null, null, i);
    }
    function a0(e, t, a, i, u, s) {
      var f = Xe, p = e;
      if (typeof e == "function")
        r0(e) ? (f = he, p = JS(p)) : p = Vf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case sa:
            return Xo(a.children, u, s, t);
          case zi:
            f = Fn, u |= un, (u & Ne) !== re && (u |= qr);
            break;
          case yl:
            return Ob(a, u, s, t);
          case Le:
            return Nb(a, u, s, t);
          case vt:
            return Lb(a, u, s, t);
          case Gt:
            return b1(a, u, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case st:
          // eslint-disable-next-line no-fallthrough
          case hr:
          // eslint-disable-next-line no-fallthrough
          case Ft:
          // eslint-disable-next-line no-fallthrough
          case Ln:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = lt;
                  break e;
                case W:
                  f = sn;
                  break e;
                case q:
                  f = Ve, p = ZS(p);
                  break e;
                case Tt:
                  f = pt;
                  break e;
                case Ae:
                  f = xn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ge(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function i0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = a0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xo(e, t, a, i) {
      var u = si(ht, e, i, t);
      return u.lanes = a, u;
    }
    function Ob(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(Nt, e, i, t | qe);
      return u.elementType = yl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Nb(e, t, a, i) {
      var u = si(Te, e, i, t);
      return u.elementType = Le, u.lanes = a, u;
    }
    function Lb(e, t, a, i) {
      var u = si(Ct, e, i, t);
      return u.elementType = vt, u.lanes = a, u;
    }
    function b1(e, t, a, i) {
      var u = si(Pe, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function l0(e, t, a) {
      var i = si(Re, e, null, t);
      return i.lanes = a, i;
    }
    function Mb() {
      var e = si(oe, null, null, re);
      return e.elementType = "DELETED", e;
    }
    function zb(e) {
      var t = si(Jt, null, null, re);
      return t.stateNode = e, t;
    }
    function u0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function D1(e, t) {
      return e === null && (e = si(Xe, null, null, re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ub(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = By, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Kt, this.eventTimes = Us(I), this.expirationTimes = Us(en), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = Us(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ds; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case jo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function k1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Ub(e, t, a, p, v), w = kb(t, s);
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
      return Eg(w), g;
    }
    var o0 = "18.3.1";
    function Ab(e, t, a) {
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
    var s0, c0;
    s0 = !1, c0 = {};
    function O1(e) {
      if (!e)
        return oi;
      var t = hi(e), a = g_(t);
      if (t.tag === he) {
        var i = t.type;
        if (Wl(i))
          return rE(t, i, a);
      }
      return a;
    }
    function jb(e, t) {
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
          var s = Ge(a) || "Component";
          if (!c0[s]) {
            c0[s] = !0;
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
    function N1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return k1(e, t, v, y, a, i, u, s, f);
    }
    function L1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, w = k1(a, i, g, e, u, s, f, p, v);
      w.context = O1(null);
      var _ = w.current, z = _a(), A = Go(_), H = Vu(z, A);
      return H.callback = t ?? null, Vo(_, H, A), Iw(w, A, z), w;
    }
    function qp(e, t, a, i) {
      so(t, e);
      var u = t.current, s = _a(), f = Go(u);
      Fc(f);
      var p = O1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && vn !== null && !s0 && (s0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(vn) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Vo(u, v, f);
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
    function Fb(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (pe(t)) {
            var a = Ro(t);
            Gw(t, a);
          }
          break;
        }
        case Te: {
          Iu(function() {
            var u = Ba(e, we);
            if (u !== null) {
              var s = _a();
              cr(u, e, we, s);
            }
          });
          var i = we;
          f0(e, i);
          break;
        }
      }
    }
    function M1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nd(a.retryLane, t));
    }
    function f0(e, t) {
      M1(e, t);
      var a = e.alternate;
      a && M1(a, t);
    }
    function Hb(e) {
      if (e.tag === Te) {
        var t = So, a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        f0(e, t);
      }
    }
    function Vb(e) {
      if (e.tag === Te) {
        var t = Go(e), a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        f0(e, t);
      }
    }
    function z1(e) {
      var t = dd(e);
      return t === null ? null : t.stateNode;
    }
    var U1 = function(e) {
      return null;
    };
    function Pb(e) {
      return U1(e);
    }
    var A1 = function(e) {
      return !1;
    };
    function Bb(e) {
      return A1(e);
    }
    var j1 = null, F1 = null, H1 = null, V1 = null, P1 = null, B1 = null, $1 = null, I1 = null, Y1 = null;
    {
      var Q1 = function(e, t, a) {
        var i = t[a], u = bt(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (bt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Q1(e[i], t, a + 1), u);
      }, W1 = function(e, t) {
        return Q1(e, t, 0);
      }, G1 = function(e, t, a, i) {
        var u = t[i], s = bt(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], bt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = G1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, q1 = function(e, t, a) {
        if (t.length !== a.length) {
          Ee("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ee("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return G1(e, t, a, 0);
      }, X1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = bt(e) ? e.slice() : nt({}, e);
        return s[u] = X1(e[u], t, a + 1, i), s;
      }, K1 = function(e, t, a) {
        return X1(e, t, 0, a);
      }, d0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      j1 = function(e, t, a, i) {
        var u = d0(e, t);
        if (u !== null) {
          var s = K1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && cr(f, e, we, en);
        }
      }, F1 = function(e, t, a) {
        var i = d0(e, t);
        if (i !== null) {
          var u = W1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Ba(e, we);
          s !== null && cr(s, e, we, en);
        }
      }, H1 = function(e, t, a, i) {
        var u = d0(e, t);
        if (u !== null) {
          var s = q1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && cr(f, e, we, en);
        }
      }, V1 = function(e, t, a) {
        e.pendingProps = K1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && cr(i, e, we, en);
      }, P1 = function(e, t) {
        e.pendingProps = W1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, we);
        a !== null && cr(a, e, we, en);
      }, B1 = function(e, t, a) {
        e.pendingProps = q1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && cr(i, e, we, en);
      }, $1 = function(e) {
        var t = Ba(e, we);
        t !== null && cr(t, e, we, en);
      }, I1 = function(e) {
        U1 = e;
      }, Y1 = function(e) {
        A1 = e;
      };
    }
    function $b(e) {
      var t = cd(e);
      return t === null ? null : t.stateNode;
    }
    function Ib(e) {
      return null;
    }
    function Yb() {
      return vn;
    }
    function Qb(e) {
      var t = e.findFiberByHostInstance, a = ie.ReactCurrentDispatcher;
      return vd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: j1,
        overrideHookStateDeletePath: F1,
        overrideHookStateRenamePath: H1,
        overrideProps: V1,
        overridePropsDeletePath: P1,
        overridePropsRenamePath: B1,
        setErrorHandler: I1,
        setSuspenseHandler: Y1,
        scheduleUpdate: $1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: $b,
        findFiberByHostInstance: t || Ib,
        // React Refresh
        findHostInstancesForRefresh: Rb,
        scheduleRefresh: Eb,
        scheduleRoot: Cb,
        setRefreshHandler: Sb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Yb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: o0
      });
    }
    var J1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function p0(e) {
      this._internalRoot = e;
    }
    Fm.prototype.render = p0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = z1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Fm.prototype.unmount = p0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        c1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          qp(null, e, null, null);
        }), J0(t);
      }
    };
    function Wb(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Z1(e);
      var a = !1, i = !1, u = "", s = J1;
      t != null && (t.hydrate ? Ee("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = N1(e, Mh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === En ? e.parentNode : e;
      return tp(p), new p0(f);
    }
    function Fm(e) {
      this._internalRoot = e;
    }
    function Gb(e) {
      e && ef(e);
    }
    Fm.prototype.unstable_scheduleHydration = Gb;
    function qb(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Z1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = J1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = L1(t, null, e, Mh, i, s, f, p, v);
      if (wh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          Z_(y, w);
        }
      return new Fm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Wf || !Oe));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Wf || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function Z1(e) {
      e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Xb = ie.ReactCurrentOwner, eR;
    eR = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = z1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = v0(e), u = !!(i && Uo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function v0(e) {
      return e ? e.nodeType === ca ? e.documentElement : e.firstChild : null;
    }
    function tR() {
    }
    function Kb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = jm(f);
            s.call(_);
          };
        }
        var f = L1(
          t,
          i,
          e,
          jo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === En ? e.parentNode : e;
        return tp(p), Iu(), f;
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
        var g = N1(
          e,
          jo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          tR
        );
        e._reactRootContainer = g, wh(g.current, e);
        var w = e.nodeType === En ? e.parentNode : e;
        return tp(w), Iu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Jb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      eR(a), Jb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Kb(a, t, e, u, i);
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
    var nR = !1;
    function Zb(e) {
      {
        nR || (nR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Xb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ir ? e : jb(e, "findDOMNode");
    }
    function eD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function tD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function nD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !lo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var rR = !1;
    function rD(e) {
      if (rR || (rR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = v0(e), i = a && !Uo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, J0(e);
          });
        }), !0;
      } else {
        {
          var u = v0(e), s = !!(u && Uo(u)), f = e.nodeType === Ir && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ud(Fb), Hs(Hb), jd(Vb), qv(xr), Vd(fy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), td(iT), bc(YS, qw, Iu);
    function aD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return Ab(e, t, null, a);
    }
    function iD(e, t, a, i) {
      return nD(e, t, a, i);
    }
    var h0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uo, yf, bh, io, vu, YS]
    };
    function lD(e, t) {
      return h0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Wb(e, t);
    }
    function uD(e, t, a) {
      return h0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), qb(e, t, a);
    }
    function oD(e) {
      return c1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var sD = Qb({
      findFiberByHostInstance: nc,
      bundleType: 1,
      version: o0,
      rendererPackageName: "react-dom"
    });
    if (!sD && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var aR = window.location.protocol;
      /^(https?|file):$/.test(aR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (aR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0, Wa.createPortal = aD, Wa.createRoot = lD, Wa.findDOMNode = Zb, Wa.flushSync = oD, Wa.hydrate = eD, Wa.hydrateRoot = uD, Wa.render = tD, Wa.unmountComponentAtNode = rD, Wa.unstable_batchedUpdates = YS, Wa.unstable_renderSubtreeIntoContainer = iD, Wa.version = o0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var mR;
function CD() {
  if (mR) return $m.exports;
  mR = 1;
  var F = {};
  function Q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (F.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q);
      } catch (D) {
        console.error(D);
      }
    }
  }
  return F.NODE_ENV === "production" ? (Q(), $m.exports = SD()) : $m.exports = ED(), $m.exports;
}
var yR;
function RD() {
  if (yR) return Bf;
  yR = 1;
  var F = {}, Q = CD();
  if (F.NODE_ENV === "production")
    Bf.createRoot = Q.createRoot, Bf.hydrateRoot = Q.hydrateRoot;
  else {
    var D = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Bf.createRoot = function(ie, Ie) {
      D.usingClientEntryPoint = !0;
      try {
        return Q.createRoot(ie, Ie);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    }, Bf.hydrateRoot = function(ie, Ie, dt) {
      D.usingClientEntryPoint = !0;
      try {
        return Q.hydrateRoot(ie, Ie, dt);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    };
  }
  return Bf;
}
var TD = RD();
function CR(F) {
  var Q, D, ie = "";
  if (typeof F == "string" || typeof F == "number") ie += F;
  else if (typeof F == "object") if (Array.isArray(F)) {
    var Ie = F.length;
    for (Q = 0; Q < Ie; Q++) F[Q] && (D = CR(F[Q])) && (ie && (ie += " "), ie += D);
  } else for (D in F) F[D] && (ie && (ie += " "), ie += D);
  return ie;
}
function Ko() {
  for (var F, Q, D = 0, ie = "", Ie = arguments.length; D < Ie; D++) (F = arguments[D]) && (Q = CR(F)) && (ie && (ie += " "), ie += Q);
  return ie;
}
const _D = "_label_1yoe6_1", xD = {
  label: _D
}, T0 = (F) => {
  const { className: Q, title: D, value: ie } = F;
  return /* @__PURE__ */ Qe.jsxs("label", { className: Ko(xD.label, Q), children: [
    /* @__PURE__ */ Qe.jsx("span", { children: D }),
    ie && /* @__PURE__ */ Qe.jsx("span", { children: ie })
  ] });
}, wD = "_root_1vni0_1", bD = "_label_1vni0_5", DD = "_description_1vni0_9", kD = "_top_1vni0_15", OD = "_bottom_1vni0_19", ND = "_input_1vni0_24", LD = "_hasRight_1vni0_42", MD = "_right_1vni0_46", Wu = {
  root: wD,
  label: bD,
  description: DD,
  top: kD,
  bottom: OD,
  input: ND,
  hasRight: LD,
  right: MD
}, zD = (F) => {
  var Q;
  const { className: D, right: ie, label: Ie, descriptionTop: dt, descriptionBottom: Ee, ...S } = F, tt = R0.useRef(null);
  return /* @__PURE__ */ Qe.jsxs(
    "div",
    {
      className: Ko(Wu.root, D),
      style: {
        "--right-width": `${((Q = tt.current) == null ? void 0 : Q.clientWidth) ?? 0}px`
      },
      children: [
        /* @__PURE__ */ Qe.jsx(T0, { className: Wu.label, title: Ie }),
        /* @__PURE__ */ Qe.jsx("p", { className: Ko(Wu.description, Wu.top), children: dt }),
        /* @__PURE__ */ Qe.jsx(
          "input",
          {
            className: Ko(Wu.input, {
              [Wu.hasRight]: ie
            }),
            ...S
          }
        ),
        ie && /* @__PURE__ */ Qe.jsx("div", { ref: tt, className: Wu.right, children: "%" }),
        /* @__PURE__ */ Qe.jsx("p", { className: Ko(Wu.description, Wu.bottom), children: Ee })
      ]
    }
  );
}, UD = "_section_13pv1_1", AD = "_title_13pv1_8", gR = {
  section: UD,
  title: AD
}, RR = (F) => {
  const { children: Q, className: D, title: ie } = F;
  return /* @__PURE__ */ Qe.jsxs("div", { className: Ko(gR.section, D), children: [
    /* @__PURE__ */ Qe.jsx("h4", { className: gR.title, children: ie }),
    /* @__PURE__ */ Qe.jsx("div", { children: Q })
  ] });
}, jD = "_root_avgz1_1", FD = "_label_avgz1_7", HD = "_description_avgz1_11", VD = "_inputContainer_avgz1_19", PD = "_input_avgz1_19", BD = "_controlContainer_avgz1_62", $D = "_controlRail_avgz1_68", ID = "_controlRailInner_avgz1_78", YD = "_controlItem_avgz1_86", QD = "_minMax_avgz1_122", nu = {
  root: jD,
  label: FD,
  description: HD,
  inputContainer: VD,
  input: PD,
  controlContainer: BD,
  controlRail: $D,
  controlRailInner: ID,
  controlItem: YD,
  minMax: QD
}, WD = (F) => {
  const { min: Q = 0, max: D = 100, value: ie, label: Ie, labelValue: dt, description: Ee, ...S } = F, tt = (Number(ie) - Number(Q)) / (Number(D) - Number(Q)) * 100;
  return /* @__PURE__ */ Qe.jsxs("div", { className: nu.root, children: [
    /* @__PURE__ */ Qe.jsx(T0, { className: nu.label, title: Ie, value: dt }),
    Ee && /* @__PURE__ */ Qe.jsx("p", { className: nu.description, children: Ee }),
    /* @__PURE__ */ Qe.jsx("div", { className: nu.inputContainer, children: /* @__PURE__ */ Qe.jsx("input", { className: nu.input, min: Q, max: D, value: ie, type: "range", ...S }) }),
    /* @__PURE__ */ Qe.jsxs("div", { className: nu.controlContainer, children: [
      /* @__PURE__ */ Qe.jsx("div", { className: nu.controlItem, style: { left: `${tt}%` }, "data-label": ie }),
      /* @__PURE__ */ Qe.jsx("div", { className: nu.controlRail, children: /* @__PURE__ */ Qe.jsx("div", { style: { left: "0", right: `${100 - tt}%` }, className: nu.controlRailInner }) })
    ] }),
    /* @__PURE__ */ Qe.jsxs("div", { className: nu.minMax, children: [
      /* @__PURE__ */ Qe.jsx("span", { children: Q }),
      /* @__PURE__ */ Qe.jsx("span", { children: D })
    ] })
  ] });
}, GD = "_table_1xqp0_1", qD = "_tableHead_1xqp0_7", XD = "_tableItem_1xqp0_19", KD = "_footer_1xqp0_32", JD = "_footerItem_1xqp0_44", ev = {
  table: GD,
  tableHead: qD,
  tableItem: XD,
  footer: KD,
  footerItem: JD
}, ZD = (F) => {
  var Q;
  const { title: D, tableData: ie, resultData: Ie, className: dt } = F;
  return /* @__PURE__ */ Qe.jsxs(RR, { className: dt, title: D, children: [
    /* @__PURE__ */ Qe.jsxs("div", { className: ev.table, children: [
      /* @__PURE__ */ Qe.jsx("div", { className: ev.tableHead, children: ie.headers.map((Ee) => /* @__PURE__ */ Qe.jsx("span", { children: Ee }, Ee)) }),
      (Q = ie.data) == null ? void 0 : Q.map((Ee) => /* @__PURE__ */ Qe.jsxs("div", { className: ev.tableItem, children: [
        /* @__PURE__ */ Qe.jsx("span", { children: Ee.label }),
        /* @__PURE__ */ Qe.jsx("span", { children: Ee.value })
      ] }, Ee.label))
    ] }),
    /* @__PURE__ */ Qe.jsx("div", { className: ev.footer, children: Ie.map((Ee) => /* @__PURE__ */ Qe.jsxs("div", { className: ev.footerItem, children: [
      /* @__PURE__ */ Qe.jsx("span", { children: Ee.label }),
      /* @__PURE__ */ Qe.jsx("span", { children: Ee.value })
    ] }, Ee.label)) })
  ] });
}, ek = "_checkbox_bi1v3_1", tk = "_input_bi1v3_6", g0 = {
  checkbox: ek,
  input: tk
}, nk = (F) => {
  const { className: Q, name: D, value: ie, title: Ie, checked: dt } = F;
  return /* @__PURE__ */ Qe.jsxs("label", { className: Ko(g0.checkbox, Q), children: [
    /* @__PURE__ */ Qe.jsx(
      "input",
      {
        type: "radio",
        className: g0.input,
        name: D,
        value: ie,
        onChange: F.onChange,
        checked: dt
      }
    ),
    /* @__PURE__ */ Qe.jsx("span", { className: g0.label, children: Ie })
  ] });
}, rk = "_list_1wuaj_1", ak = "_item_1wuaj_5", ik = "_label_1wuaj_9", S0 = {
  list: rk,
  item: ak,
  label: ik
}, lk = (F) => {
  const { data: Q, onChange: D, label: ie, name: Ie } = F, dt = (Ee) => {
    D == null || D(Ee);
  };
  return /* @__PURE__ */ Qe.jsxs("div", { children: [
    /* @__PURE__ */ Qe.jsx(T0, { className: S0.label, title: ie }),
    /* @__PURE__ */ Qe.jsx("div", { className: S0.list, children: Q.map((Ee) => /* @__PURE__ */ Qe.jsx(
      nk,
      {
        className: S0.item,
        onChange: dt,
        checked: Ee.value === F.value,
        name: Ie,
        ...Ee
      },
      Ee.value
    )) })
  ] });
}, uk = {
  "tofu-widget": "_tofu-widget_1vn9e_6"
}, ok = uk["tofu-widget"], sk = "_widget_17eig_1", ck = "_section_17eig_9", fk = "_title_17eig_14", SR = {
  widget: sk,
  section: ck,
  title: fk
}, E0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), C0 = {
  allocate: "Allocate VAT",
  charge: "Charge VAT"
}, dk = () => {
  const [F, Q] = R0.useState({
    function: "allocate",
    amount: "0",
    rate: "20"
  }), D = (dt) => {
    Q({
      ...F,
      [dt.target.name]: dt.target.value
    });
  }, ie = F.function === "allocate" ? Number(F.amount) * Number(F.rate) / (Number(F.rate) + 100) : Number(F.amount) * Number(F.rate) / 100, Ie = F.function === "allocate" ? Number(F.amount) - ie : Number(F.amount) + ie;
  return /* @__PURE__ */ Qe.jsxs("div", { className: Ko(SR.widget, ok), children: [
    /* @__PURE__ */ Qe.jsx(RR, { title: "VAT Calculator", children: /* @__PURE__ */ Qe.jsxs("div", { className: SR.section, children: [
      /* @__PURE__ */ Qe.jsx(
        lk,
        {
          name: "function",
          data: [
            {
              value: "allocate",
              title: C0.allocate
            },
            { value: "charge", title: C0.charge }
          ],
          label: "Function",
          onChange: D,
          value: F.function
        }
      ),
      /* @__PURE__ */ Qe.jsx(zD, { label: "Amount", type: "number", value: F.amount, onChange: D, name: "amount" }),
      /* @__PURE__ */ Qe.jsx(
        WD,
        {
          label: "Rate",
          labelValue: `${F.rate} %`,
          value: F.rate,
          min: 0,
          max: 100,
          step: 1,
          name: "rate",
          onChange: D
        }
      )
    ] }) }),
    /* @__PURE__ */ Qe.jsx(
      ZD,
      {
        title: "Total Summary",
        tableData: {
          headers: ["Name", "Total"],
          data: [
            { label: "Function", value: C0[F.function] },
            { label: "Amount", value: E0.format(Number(F.amount)) },
            { label: "Rate", value: `${F.rate} %` }
          ]
        },
        resultData: [
          { label: "VAT", value: E0.format(ie) },
          { label: "Amount excluding VAT", value: E0.format(Ie) }
        ]
      }
    )
  ] });
};
TD.createRoot(document.getElementById("vat-calculator")).render(
  /* @__PURE__ */ Qe.jsx(R0.StrictMode, { children: /* @__PURE__ */ Qe.jsx(dk, {}) })
);