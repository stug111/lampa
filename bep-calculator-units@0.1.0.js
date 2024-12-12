var Vm = { exports: {} }, Kp = {}, Pm = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function uD() {
  if (eR) return gt;
  eR = 1;
  var V = Symbol.for("react.element"), q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), Vt = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), ze = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ge = Symbol.iterator;
  function te(b) {
    return b === null || typeof b != "object" ? null : (b = Ge && b[Ge] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, Ce = {};
  function pt(b, $, ke) {
    this.props = b, this.context = $, this.refs = Ce, this.updater = ke || je;
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
  function sn(b, $, ke) {
    this.props = b, this.context = $, this.refs = Ce, this.updater = ke || je;
  }
  var at = sn.prototype = new Fn();
  at.constructor = sn, ue(at, pt.prototype), at.isPureReactComponent = !0;
  var Ve = Array.isArray, Ot = Object.prototype.hasOwnProperty, Re = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(b, $, ke) {
    var Be, Je = {}, it = null, ht = null;
    if ($ != null) for (Be in $.ref !== void 0 && (ht = $.ref), $.key !== void 0 && (it = "" + $.key), $) Ot.call($, Be) && !ft.hasOwnProperty(Be) && (Je[Be] = $[Be]);
    var ct = arguments.length - 2;
    if (ct === 1) Je.children = ke;
    else if (1 < ct) {
      for (var Ct = Array(ct), Pt = 0; Pt < ct; Pt++) Ct[Pt] = arguments[Pt + 2];
      Je.children = Ct;
    }
    if (b && b.defaultProps) for (Be in ct = b.defaultProps, ct) Je[Be] === void 0 && (Je[Be] = ct[Be]);
    return { $$typeof: V, type: b, key: it, ref: ht, props: Je, _owner: Re.current };
  }
  function wn(b, $) {
    return { $$typeof: V, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function gn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === V;
  }
  function Jt(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ke) {
      return $[ke];
    });
  }
  var Et = /\/+/g;
  function nn(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? Jt("" + b.key) : $.toString(36);
  }
  function Pe(b, $, ke, Be, Je) {
    var it = typeof b;
    (it === "undefined" || it === "boolean") && (b = null);
    var ht = !1;
    if (b === null) ht = !0;
    else switch (it) {
      case "string":
      case "number":
        ht = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case V:
          case q:
            ht = !0;
        }
    }
    if (ht) return ht = b, Je = Je(ht), b = Be === "" ? "." + nn(ht, 0) : Be, Ve(Je) ? (ke = "", b != null && (ke = b.replace(Et, "$&/") + "/"), Pe(Je, $, ke, "", function(Pt) {
      return Pt;
    })) : Je != null && (gn(Je) && (Je = wn(Je, ke + (!Je.key || ht && ht.key === Je.key ? "" : ("" + Je.key).replace(Et, "$&/") + "/") + b)), $.push(Je)), 1;
    if (ht = 0, Be = Be === "" ? "." : Be + ":", Ve(b)) for (var ct = 0; ct < b.length; ct++) {
      it = b[ct];
      var Ct = Be + nn(it, ct);
      ht += Pe(it, $, ke, Ct, Je);
    }
    else if (Ct = te(b), typeof Ct == "function") for (b = Ct.call(b), ct = 0; !(it = b.next()).done; ) it = it.value, Ct = Be + nn(it, ct++), ht += Pe(it, $, ke, Ct, Je);
    else if (it === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function tt(b, $, ke) {
    if (b == null) return b;
    var Be = [], Je = 0;
    return Pe(b, Be, "", "", function(it) {
      return $.call(ke, it, Je++);
    }), Be;
  }
  function wt(b) {
    if (b._status === -1) {
      var $ = b._result;
      $ = $(), $.then(function(ke) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ke);
      }, function(ke) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ke);
      }), b._status === -1 && (b._status = 0, b._result = $);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var nt = { current: null }, B = { transition: null }, me = { ReactCurrentDispatcher: nt, ReactCurrentBatchConfig: B, ReactCurrentOwner: Re };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: tt, forEach: function(b, $, ke) {
    tt(b, function() {
      $.apply(this, arguments);
    }, ke);
  }, count: function(b) {
    var $ = 0;
    return tt(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return tt(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!gn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = pt, gt.Fragment = D, gt.Profiler = rt, gt.PureComponent = sn, gt.StrictMode = he, gt.Suspense = st, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, gt.act = ie, gt.cloneElement = function(b, $, ke) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Be = ue({}, b.props), Je = b.key, it = b.ref, ht = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (it = $.ref, ht = Re.current), $.key !== void 0 && (Je = "" + $.key), b.type && b.type.defaultProps) var ct = b.type.defaultProps;
      for (Ct in $) Ot.call($, Ct) && !ft.hasOwnProperty(Ct) && (Be[Ct] = $[Ct] === void 0 && ct !== void 0 ? ct[Ct] : $[Ct]);
    }
    var Ct = arguments.length - 2;
    if (Ct === 1) Be.children = ke;
    else if (1 < Ct) {
      ct = Array(Ct);
      for (var Pt = 0; Pt < Ct; Pt++) ct[Pt] = arguments[Pt + 2];
      Be.children = ct;
    }
    return { $$typeof: V, type: b.type, key: Je, ref: it, props: Be, _owner: ht };
  }, gt.createContext = function(b) {
    return b = { $$typeof: Ue, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: Vt, _context: b }, b.Consumer = b;
  }, gt.createElement = Ie, gt.createFactory = function(b) {
    var $ = Ie.bind(null, b);
    return $.type = b, $;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, gt.isValidElement = gn, gt.lazy = function(b) {
    return { $$typeof: ve, _payload: { _status: -1, _result: b }, _init: wt };
  }, gt.memo = function(b, $) {
    return { $$typeof: ze, type: b, compare: $ === void 0 ? null : $ };
  }, gt.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, gt.unstable_act = ie, gt.useCallback = function(b, $) {
    return nt.current.useCallback(b, $);
  }, gt.useContext = function(b) {
    return nt.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return nt.current.useDeferredValue(b);
  }, gt.useEffect = function(b, $) {
    return nt.current.useEffect(b, $);
  }, gt.useId = function() {
    return nt.current.useId();
  }, gt.useImperativeHandle = function(b, $, ke) {
    return nt.current.useImperativeHandle(b, $, ke);
  }, gt.useInsertionEffect = function(b, $) {
    return nt.current.useInsertionEffect(b, $);
  }, gt.useLayoutEffect = function(b, $) {
    return nt.current.useLayoutEffect(b, $);
  }, gt.useMemo = function(b, $) {
    return nt.current.useMemo(b, $);
  }, gt.useReducer = function(b, $, ke) {
    return nt.current.useReducer(b, $, ke);
  }, gt.useRef = function(b) {
    return nt.current.useRef(b);
  }, gt.useState = function(b) {
    return nt.current.useState(b);
  }, gt.useSyncExternalStore = function(b, $, ke) {
    return nt.current.useSyncExternalStore(b, $, ke);
  }, gt.useTransition = function() {
    return nt.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var ev = { exports: {} };
ev.exports;
var tR;
function oD() {
  return tR || (tR = 1, function(V, q) {
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
      var he = "18.3.1", rt = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), ze = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Ge = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), pt = Symbol.for("react.offscreen"), Fn = Symbol.iterator, sn = "@@iterator";
      function at(h) {
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
      }, Ot = {
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
      }, Ie = {}, wn = null;
      function gn(h) {
        wn = h;
      }
      Ie.setExtraStackFrame = function(h) {
        wn = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        wn && (h += wn);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Jt = !1, Et = !1, nn = !1, Pe = !1, tt = !1, wt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: ft
      };
      wt.ReactDebugCurrentFrame = Ie, wt.ReactCurrentActQueue = Re;
      function nt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          me("warn", h, N);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          me("error", h, N);
        }
      }
      function me(h, C, N) {
        {
          var j = wt.ReactDebugCurrentFrame, J = j.getStackAddendum();
          J !== "" && (C += "%s", N = N.concat([J]));
          var Se = N.map(function(fe) {
            return String(fe);
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
      }, ke = Object.assign, Be = {};
      Object.freeze(Be);
      function Je(h, C, N) {
        this.props = h, this.context = C, this.refs = Be, this.updater = N || $;
      }
      Je.prototype.isReactComponent = {}, Je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var it = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(h, C) {
          Object.defineProperty(Je.prototype, h, {
            get: function() {
              nt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ct in it)
          it.hasOwnProperty(ct) && ht(ct, it[ct]);
      }
      function Ct() {
      }
      Ct.prototype = Je.prototype;
      function Pt(h, C, N) {
        this.props = h, this.context = C, this.refs = Be, this.updater = N || $;
      }
      var Xn = Pt.prototype = new Ct();
      Xn.constructor = Pt, ke(Xn, Je.prototype), Xn.isPureReactComponent = !0;
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
          return xn(h), !1;
        } catch {
          return !0;
        }
      }
      function xn(h) {
        return "" + h;
      }
      function Ln(h) {
        if (Hn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(h)), xn(h);
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
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ue:
            return "Fragment";
          case Vt:
            return "Portal";
          case st:
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
            case ve:
              var C = h;
              return dr(C) + ".Consumer";
            case ze:
              var N = h;
              return dr(N._context) + ".Provider";
            case Ge:
              return gr(h, h.render, "ForwardRef");
            case ue:
              var j = h.displayName || null;
              return j !== null ? j : Vn(h.type) || "Memo";
            case Ce: {
              var J = h, Se = J._payload, fe = J._init;
              try {
                return Vn(fe(Se));
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
          var C = Vn(ft.current.type);
          Jn[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ne = function(h, C, N, j, J, Se, fe) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: rt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: fe,
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
      function De(h, C, N) {
        var j, J = {}, Se = null, fe = null, $e = null, ot = null;
        if (C != null) {
          Sr(C) && (fe = C.ref, oa(C)), cn(C) && (Ln(C.key), Se = "" + C.key), $e = C.__self === void 0 ? null : C.__self, ot = C.__source === void 0 ? null : C.__source;
          for (j in C)
            ra.call(C, j) && !aa.hasOwnProperty(j) && (J[j] = C[j]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          J.children = N;
        else if (Ft > 1) {
          for (var $t = Array(Ft), Yt = 0; Yt < Ft; Yt++)
            $t[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze($t), J.children = $t;
        }
        if (h && h.defaultProps) {
          var It = h.defaultProps;
          for (j in It)
            J[j] === void 0 && (J[j] = It[j]);
        }
        if (Se || fe) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && la(J, an), fe && ua(J, an);
        }
        return ne(h, Se, fe, $e, ot, ft.current, J);
      }
      function lt(h, C) {
        var N = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function zt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, J = ke({}, h.props), Se = h.key, fe = h.ref, $e = h._self, ot = h._source, Ft = h._owner;
        if (C != null) {
          Sr(C) && (fe = C.ref, Ft = ft.current), cn(C) && (Ln(C.key), Se = "" + C.key);
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
        return ne(h.type, Se, fe, $e, ot, Ft, J);
      }
      function Lt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === rt;
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
      function At(h) {
        return h.replace(Yn, "$&/");
      }
      function Zt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ln(h.key), vr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, N, j, J) {
        var Se = typeof h;
        (Se === "undefined" || Se === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (Se) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case rt:
                case Vt:
                  fe = !0;
              }
          }
        if (fe) {
          var $e = h, ot = J($e), Ft = j === "" ? bn + Zt($e, 0) : j;
          if (Sn(ot)) {
            var $t = "";
            Ft != null && ($t = At(Ft) + "/"), Ga(ot, C, $t, "", function(Bf) {
              return Bf;
            });
          } else ot != null && (Lt(ot) && (ot.key && (!$e || $e.key !== ot.key) && Ln(ot.key), ot = lt(
            ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ot.key && (!$e || $e.key !== ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              At("" + ot.key) + "/"
            ) : "") + Ft
          )), C.push(ot));
          return 1;
        }
        var Yt, It, an = 0, xt = j === "" ? bn : j + pn;
        if (Sn(h))
          for (var _l = 0; _l < h.length; _l++)
            Yt = h[_l], It = xt + Zt(Yt, _l), an += Ga(Yt, C, N, It, J);
        else {
          var eo = at(h);
          if (typeof eo == "function") {
            var ls = h;
            eo === ls.entries && (Bt || nt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var us = eo.call(ls), Pi, os = 0; !(Pi = us.next()).done; )
              Yt = Pi.value, It = xt + Zt(Yt, os++), an += Ga(Yt, C, N, It, J);
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
      function hl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function nu(h, C, N) {
        ba(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function ru(h) {
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
          $$typeof: ve,
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
          $$typeof: ze,
          _context: C
        };
        var N = !1, j = !1, J = !1;
        {
          var Se = {
            $$typeof: ve,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return j || (j = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
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
              set: function(fe) {
                J || (nt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), J = !0);
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
              var fe = h;
              fe._status = Ni, fe._result = Se;
            }
          }, function(Se) {
            if (h._status === Da || h._status === Xa) {
              var fe = h;
              fe._status = Er, fe._result = Se;
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
      function Ui(h) {
        h != null && h.$$typeof === ue ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ge,
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
      var yl;
      yl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ue || h === st || tt || h === S || h === te || h === je || Pe || h === pt || Jt || Et || nn || typeof h == "object" && h !== null && (h.$$typeof === Ce || h.$$typeof === ue || h.$$typeof === ze || h.$$typeof === ve || h.$$typeof === Ge || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === yl || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ue,
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
      function Le(h) {
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
      function Rt(h, C, N) {
        var j = G();
        return j.useReducer(h, C, N);
      }
      function Ae(h) {
        var C = G();
        return C.useRef(h);
      }
      function ut(h, C) {
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
      function jt(h, C, N) {
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
      function Vr(h) {
        var C = G();
        return C.useDeferredValue(h);
      }
      function Ze() {
        var h = G();
        return h.useId();
      }
      function zi(h, C, N) {
        var j = G();
        return j.useSyncExternalStore(h, C, N);
      }
      var Ai = 0, gl, Pr, Xo, Cr, Ko, Jo, Zo;
      function au() {
      }
      au.__reactDisabledLog = !0;
      function Wu() {
        {
          if (Ai === 0) {
            gl = console.log, Pr = console.info, Xo = console.warn, Cr = console.error, Ko = console.group, Jo = console.groupCollapsed, Zo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: au,
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
              log: ke({}, h, {
                value: gl
              }),
              info: ke({}, h, {
                value: Pr
              }),
              warn: ke({}, h, {
                value: Xo
              }),
              error: ke({}, h, {
                value: Cr
              }),
              group: ke({}, h, {
                value: Ko
              }),
              groupCollapsed: ke({}, h, {
                value: Jo
              }),
              groupEnd: ke({}, h, {
                value: Zo
              })
            });
          }
          Ai < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = wt.ReactCurrentDispatcher, Oa;
      function Sl(h, C, N) {
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
      var di = !1, iu;
      {
        var lu = typeof WeakMap == "function" ? WeakMap : Map;
        iu = new lu();
      }
      function El(h, C) {
        if (!h || di)
          return "";
        {
          var N = iu.get(h);
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
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (xt) {
                j = xt;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (xt) {
                j = xt;
              }
              h.call(fe.prototype);
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
            for (var $e = xt.stack.split(`
`), ot = j.stack.split(`
`), Ft = $e.length - 1, $t = ot.length - 1; Ft >= 1 && $t >= 0 && $e[Ft] !== ot[$t]; )
              $t--;
            for (; Ft >= 1 && $t >= 0; Ft--, $t--)
              if ($e[Ft] !== ot[$t]) {
                if (Ft !== 1 || $t !== 1)
                  do
                    if (Ft--, $t--, $t < 0 || $e[Ft] !== ot[$t]) {
                      var Yt = `
` + $e[Ft].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && iu.set(h, Yt), Yt;
                    }
                  while (Ft >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          di = !1, fi.current = Se, ji(), Error.prepareStackTrace = J;
        }
        var It = h ? h.displayName || h.name : "", an = It ? Sl(It) : "";
        return typeof h == "function" && iu.set(h, an), an;
      }
      function es(h, C, N) {
        return El(h, !1);
      }
      function ts(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function mt(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return El(h, ts(h));
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
            case Ge:
              return es(h.render);
            case ue:
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
      var ns = {}, Gu = wt.ReactDebugCurrentFrame;
      function Cl(h) {
        if (h) {
          var C = h._owner, N = mt(h.type, h._source, C ? C.type : null);
          Gu.setExtraStackFrame(N);
        } else
          Gu.setExtraStackFrame(null);
      }
      function rs(h, C, N, j, J) {
        {
          var Se = Function.call.bind(ra);
          for (var fe in h)
            if (Se(h, fe)) {
              var $e = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var ot = Error((j || "React class") + ": " + N + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ot.name = "Invariant Violation", ot;
                }
                $e = h[fe](C, fe, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                $e = Ft;
              }
              $e && !($e instanceof Error) && (Cl(J), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, fe, typeof $e), Cl(null)), $e instanceof Error && !($e.message in ns) && (ns[$e.message] = !0, Cl(J), B("Failed %s type: %s", N, $e.message), Cl(null));
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
      function uu() {
        if (ft.current) {
          var h = Vn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Qe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Ka(h) {
        return h != null ? Qe(h.__source) : "";
      }
      var vn = {};
      function Br(h) {
        var C = uu();
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
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + Vn(h._owner.type) + "."), yt(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), yt(null);
          }
        }
      }
      function Rl(h, C) {
        if (typeof h == "object") {
          if (Sn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              Lt(j) && La(j, C);
            }
          else if (Lt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = at(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Se = J.call(h), fe; !(fe = Se.next()).done; )
                Lt(fe.value) && La(fe.value, C);
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
          else if (typeof C == "object" && (C.$$typeof === Ge || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Vn(C);
            rs(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !qu) {
            qu = !0;
            var J = Vn(C);
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
          Se ? J += Se : J += uu();
          var fe;
          h === null ? fe = "null" : Sn(h) ? fe = "array" : h !== void 0 && h.$$typeof === rt ? (fe = "<" + (Vn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, J);
        }
        var $e = De.apply(this, arguments);
        if ($e == null)
          return $e;
        if (j)
          for (var ot = 2; ot < arguments.length; ot++)
            Rl(arguments[ot], h);
        return h === Ue ? hn($e) : rn($e), $e;
      }
      var Zn = !1;
      function $r(h) {
        var C = as.bind(null, h);
        return C.type = h, Zn || (Zn = !0, nt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return nt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, N) {
        for (var j = zt.apply(this, arguments), J = 2; J < arguments.length; J++)
          Rl(arguments[J], j.type);
        return rn(j), j;
      }
      function Xu(h, C) {
        var N = Ot.transition;
        Ot.transition = {};
        var j = Ot.transition;
        Ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ot.transition = N, N === null && j._updatedFibers) {
            var J = j._updatedFibers.size;
            J > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var ou = !1, su = null;
      function Tl(h) {
        if (su === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = V && V[C];
            su = N.call(V, "timers").setImmediate;
          } catch {
            su = function(J) {
              ou === !1 && (ou = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = J, Se.port2.postMessage(void 0);
            };
          }
        return su(h);
      }
      var Ma = 0, Fi = !1;
      function cu(h) {
        {
          var C = Ma;
          Ma++, Re.current === null && (Re.current = []);
          var N = Re.isBatchingLegacy, j;
          try {
            if (Re.isBatchingLegacy = !0, j = h(), !N && Re.didScheduleLegacyUpdate) {
              var J = Re.current;
              J !== null && (Re.didScheduleLegacyUpdate = !1, Vi(J));
            }
          } catch (It) {
            throw Hi(C), It;
          } finally {
            Re.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Se = j, fe = !1, $e = {
              then: function(It, an) {
                fe = !0, Se.then(function(xt) {
                  Hi(C), Ma === 0 ? Ku(xt, It, an) : It(xt);
                }, function(xt) {
                  Hi(C), an(xt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (Fi = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $e;
          } else {
            var ot = j;
            if (Hi(C), Ma === 0) {
              var Ft = Re.current;
              Ft !== null && (Vi(Ft), Re.current = null);
              var $t = {
                then: function(It, an) {
                  Re.current === null ? (Re.current = [], Ku(ot, It, an)) : It(ot);
                }
              };
              return $t;
            } else {
              var Yt = {
                then: function(It, an) {
                  It(ot);
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
              Vi(j), Tl(function() {
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
      function Vi(h) {
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
        forEach: nu,
        count: hl,
        toArray: ru,
        only: ml
      };
      q.Children = Zu, q.Component = Je, q.Fragment = Ue, q.Profiler = st, q.PureComponent = Pt, q.StrictMode = S, q.Suspense = te, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, q.act = cu, q.cloneElement = is, q.createContext = qa, q.createElement = Ju, q.createFactory = Za, q.createRef = Fr, q.forwardRef = Ui, q.isValidElement = Lt, q.lazy = sa, q.memo = Q, q.startTransition = Xu, q.unstable_act = cu, q.useCallback = fn, q.useContext = Le, q.useDebugValue = ka, q.useDeferredValue = Vr, q.useEffect = ut, q.useId = Ze, q.useImperativeHandle = jt, q.useInsertionEffect = Mn, q.useLayoutEffect = Gt, q.useMemo = hr, q.useReducer = Rt, q.useRef = Ae, q.useState = dt, q.useSyncExternalStore = zi, q.useTransition = Nn, q.version = he, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
var nR;
function tv() {
  if (nR) return Pm.exports;
  nR = 1;
  var V = {};
  return V.NODE_ENV === "production" ? Pm.exports = uD() : Pm.exports = oD(), Pm.exports;
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
var rR;
function sD() {
  if (rR) return Kp;
  rR = 1;
  var V = tv(), q = Symbol.for("react.element"), D = Symbol.for("react.fragment"), he = Object.prototype.hasOwnProperty, rt = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Vt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ue(S, st, ze) {
    var ve, Ge = {}, te = null, je = null;
    ze !== void 0 && (te = "" + ze), st.key !== void 0 && (te = "" + st.key), st.ref !== void 0 && (je = st.ref);
    for (ve in st) he.call(st, ve) && !Vt.hasOwnProperty(ve) && (Ge[ve] = st[ve]);
    if (S && S.defaultProps) for (ve in st = S.defaultProps, st) Ge[ve] === void 0 && (Ge[ve] = st[ve]);
    return { $$typeof: q, type: S, key: te, ref: je, props: Ge, _owner: rt.current };
  }
  return Kp.Fragment = D, Kp.jsx = Ue, Kp.jsxs = Ue, Kp;
}
var Jp = {}, aR;
function cD() {
  if (aR) return Jp;
  aR = 1;
  var V = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    var q = tv(), D = Symbol.for("react.element"), he = Symbol.for("react.portal"), rt = Symbol.for("react.fragment"), Vt = Symbol.for("react.strict_mode"), Ue = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), st = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Ce = Symbol.iterator, pt = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = Ce && R[Ce] || R[pt];
      return typeof Q == "function" ? Q : null;
    }
    var sn = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var Q = arguments.length, G = new Array(Q > 1 ? Q - 1 : 0), Le = 1; Le < Q; Le++)
          G[Le - 1] = arguments[Le];
        Ve("error", R, G);
      }
    }
    function Ve(R, Q, G) {
      {
        var Le = sn.ReactDebugCurrentFrame, dt = Le.getStackAddendum();
        dt !== "" && (Q += "%s", G = G.concat([dt]));
        var Rt = G.map(function(Ae) {
          return String(Ae);
        });
        Rt.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Rt);
      }
    }
    var Ot = !1, Re = !1, ft = !1, Ie = !1, wn = !1, gn;
    gn = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === rt || R === Ue || wn || R === Vt || R === ve || R === Ge || Ie || R === ue || Ot || Re || ft || typeof R == "object" && R !== null && (R.$$typeof === je || R.$$typeof === te || R.$$typeof === S || R.$$typeof === st || R.$$typeof === ze || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === gn || R.getModuleId !== void 0));
    }
    function Et(R, Q, G) {
      var Le = R.displayName;
      if (Le)
        return Le;
      var dt = Q.displayName || Q.name || "";
      return dt !== "" ? G + "(" + dt + ")" : G;
    }
    function nn(R) {
      return R.displayName || "Context";
    }
    function Pe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case rt:
          return "Fragment";
        case he:
          return "Portal";
        case Ue:
          return "Profiler";
        case Vt:
          return "StrictMode";
        case ve:
          return "Suspense";
        case Ge:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case st:
            var Q = R;
            return nn(Q) + ".Consumer";
          case S:
            var G = R;
            return nn(G._context) + ".Provider";
          case ze:
            return Et(R, R.render, "ForwardRef");
          case te:
            var Le = R.displayName || null;
            return Le !== null ? Le : Pe(R.type) || "Memo";
          case je: {
            var dt = R, Rt = dt._payload, Ae = dt._init;
            try {
              return Pe(Ae(Rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, wt = 0, nt, B, me, ie, b, $, ke;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function Je() {
      {
        if (wt === 0) {
          nt = console.log, B = console.info, me = console.warn, ie = console.error, b = console.group, $ = console.groupCollapsed, ke = console.groupEnd;
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
    function it() {
      {
        if (wt--, wt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, R, {
              value: nt
            }),
            info: tt({}, R, {
              value: B
            }),
            warn: tt({}, R, {
              value: me
            }),
            error: tt({}, R, {
              value: ie
            }),
            group: tt({}, R, {
              value: b
            }),
            groupCollapsed: tt({}, R, {
              value: $
            }),
            groupEnd: tt({}, R, {
              value: ke
            })
          });
        }
        wt < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = sn.ReactCurrentDispatcher, ct;
    function Ct(R, Q, G) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Le = dt.stack.trim().match(/\n( *(at )?)/);
            ct = Le && Le[1] || "";
          }
        return `
` + ct + R;
      }
    }
    var Pt = !1, Xn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Xn = new Fr();
    }
    function fr(R, Q) {
      if (!R || Pt)
        return "";
      {
        var G = Xn.get(R);
        if (G !== void 0)
          return G;
      }
      var Le;
      Pt = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Rt;
      Rt = ht.current, ht.current = null, Je();
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
              Le = Nn;
            }
            Reflect.construct(R, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (Nn) {
              Le = Nn;
            }
            R.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nn) {
            Le = Nn;
          }
          R();
        }
      } catch (Nn) {
        if (Nn && Le && typeof Nn.stack == "string") {
          for (var ut = Nn.stack.split(`
`), Mn = Le.stack.split(`
`), Gt = ut.length - 1, fn = Mn.length - 1; Gt >= 1 && fn >= 0 && ut[Gt] !== Mn[fn]; )
            fn--;
          for (; Gt >= 1 && fn >= 0; Gt--, fn--)
            if (ut[Gt] !== Mn[fn]) {
              if (Gt !== 1 || fn !== 1)
                do
                  if (Gt--, fn--, fn < 0 || ut[Gt] !== Mn[fn]) {
                    var hr = `
` + ut[Gt].replace(" at new ", " at ");
                    return R.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", R.displayName)), typeof R == "function" && Xn.set(R, hr), hr;
                  }
                while (Gt >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, ht.current = Rt, it(), Error.prepareStackTrace = dt;
      }
      var jt = R ? R.displayName || R.name : "", ka = jt ? Ct(jt) : "";
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
        return Ct(R);
      switch (R) {
        case ve:
          return Ct("Suspense");
        case Ge:
          return Ct("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ze:
            return Sn(R.render);
          case te:
            return Hn(R.type, Q, G);
          case je: {
            var Le = R, dt = Le._payload, Rt = Le._init;
            try {
              return Hn(Rt(dt), Q, G);
            } catch {
            }
          }
        }
      return "";
    }
    var xn = Object.prototype.hasOwnProperty, Ln = {}, gr = sn.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        gr.setExtraStackFrame(G);
      } else
        gr.setExtraStackFrame(null);
    }
    function Vn(R, Q, G, Le, dt) {
      {
        var Rt = Function.call.bind(xn);
        for (var Ae in R)
          if (Rt(R, Ae)) {
            var ut = void 0;
            try {
              if (typeof R[Ae] != "function") {
                var Mn = Error((Le || "React class") + ": " + G + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mn.name = "Invariant Violation", Mn;
              }
              ut = R[Ae](Q, Ae, Le, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              ut = Gt;
            }
            ut && !(ut instanceof Error) && (dr(dt), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", G, Ae, typeof ut), dr(null)), ut instanceof Error && !(ut.message in Ln) && (Ln[ut.message] = !0, dr(dt), at("Failed %s type: %s", G, ut.message), dr(null));
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
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(R)), Jn(R);
    }
    var cn = sn.ReactCurrentOwner, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ua, oa, ne;
    ne = {};
    function De(R) {
      if (xn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function lt(R) {
      if (xn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, Q) {
      if (typeof R.ref == "string" && cn.current && Q && cn.current.stateNode !== Q) {
        var G = Pe(cn.current.type);
        ne[G] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(cn.current.type), R.ref), ne[G] = !0);
      }
    }
    function Lt(R, Q) {
      {
        var G = function() {
          ua || (ua = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
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
          oa || (oa = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var pn = function(R, Q, G, Le, dt, Rt, Ae) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: G,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Rt
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function vr(R, Q, G, Le, dt) {
      {
        var Rt, Ae = {}, ut = null, Mn = null;
        G !== void 0 && (Sr(G), ut = "" + G), lt(Q) && (Sr(Q.key), ut = "" + Q.key), De(Q) && (Mn = Q.ref, zt(Q, dt));
        for (Rt in Q)
          xn.call(Q, Rt) && !la.hasOwnProperty(Rt) && (Ae[Rt] = Q[Rt]);
        if (R && R.defaultProps) {
          var Gt = R.defaultProps;
          for (Rt in Gt)
            Ae[Rt] === void 0 && (Ae[Rt] = Gt[Rt]);
        }
        if (ut || Mn) {
          var fn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ut && Lt(Ae, fn), Mn && bn(Ae, fn);
        }
        return pn(R, ut, Mn, dt, Le, cn.current, Ae);
      }
    }
    var Bt = sn.ReactCurrentOwner, Yn = sn.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        Yn.setExtraStackFrame(G);
      } else
        Yn.setExtraStackFrame(null);
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
    var nu = {};
    function ru(R) {
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
    function ml(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var G = ru(Q);
        if (nu[G])
          return;
        nu[G] = !0;
        var Le = "";
        R && R._owner && R._owner !== Bt.current && (Le = " It was passed a child from " + Pe(R._owner.type) + "."), At(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Le), At(null);
      }
    }
    function qa(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (aa(R))
          for (var G = 0; G < R.length; G++) {
            var Le = R[G];
            Ga(Le) && ml(Le, Q);
          }
        else if (Ga(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var dt = Fn(R);
          if (typeof dt == "function" && dt !== R.entries)
            for (var Rt = dt.call(R), Ae; !(Ae = Rt.next()).done; )
              Ga(Ae.value) && ml(Ae.value, Q);
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
        else if (typeof Q == "object" && (Q.$$typeof === ze || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === te))
          G = Q.propTypes;
        else
          return;
        if (G) {
          var Le = Pe(Q);
          Vn(G, R.props, "prop", Le, R);
        } else if (Q.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var dt = Pe(Q);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var Q = Object.keys(R.props), G = 0; G < Q.length; G++) {
          var Le = Q[G];
          if (Le !== "children" && Le !== "key") {
            At(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var Ni = {};
    function Er(R, Q, G, Le, dt, Rt) {
      {
        var Ae = Jt(R);
        if (!Ae) {
          var ut = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mn = hl();
          Mn ? ut += Mn : ut += ba();
          var Gt;
          R === null ? Gt = "null" : aa(R) ? Gt = "array" : R !== void 0 && R.$$typeof === D ? (Gt = "<" + (Pe(R.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, ut);
        }
        var fn = vr(R, Q, G, dt, Rt);
        if (fn == null)
          return fn;
        if (Ae) {
          var hr = Q.children;
          if (hr !== void 0)
            if (Le)
              if (aa(hr)) {
                for (var jt = 0; jt < hr.length; jt++)
                  qa(hr[jt], R);
                Object.freeze && Object.freeze(hr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(hr, R);
        }
        if (xn.call(Q, "key")) {
          var ka = Pe(R), Nn = Object.keys(Q).filter(function(zi) {
            return zi !== "key";
          }), Vr = Nn.length > 0 ? "{key: someKey, " + Nn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ni[ka + Vr]) {
            var Ze = Nn.length > 0 ? "{" + Nn.join(": ..., ") + ": ...}" : "{}";
            at(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vr, ka, Ze, ka), Ni[ka + Vr] = !0;
          }
        }
        return R === rt ? Da(fn) : Xa(fn), fn;
      }
    }
    function Hr(R, Q, G) {
      return Er(R, Q, G, !0);
    }
    function sa(R, Q, G) {
      return Er(R, Q, G, !1);
    }
    var Ui = sa, yl = Hr;
    Jp.Fragment = rt, Jp.jsx = Ui, Jp.jsxs = yl;
  }(), Jp;
}
var iR;
function fD() {
  if (iR) return Vm.exports;
  iR = 1;
  var V = {};
  return V.NODE_ENV === "production" ? Vm.exports = sD() : Vm.exports = cD(), Vm.exports;
}
var St = fD(), g0 = tv(), Pf = {}, Bm = { exports: {} }, Qa = {}, $m = { exports: {} }, h0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function dD() {
  return lR || (lR = 1, function(V) {
    function q(B, me) {
      var ie = B.length;
      B.push(me);
      e: for (; 0 < ie; ) {
        var b = ie - 1 >>> 1, $ = B[b];
        if (0 < rt($, me)) B[b] = me, B[ie] = $, ie = b;
        else break e;
      }
    }
    function D(B) {
      return B.length === 0 ? null : B[0];
    }
    function he(B) {
      if (B.length === 0) return null;
      var me = B[0], ie = B.pop();
      if (ie !== me) {
        B[0] = ie;
        e: for (var b = 0, $ = B.length, ke = $ >>> 1; b < ke; ) {
          var Be = 2 * (b + 1) - 1, Je = B[Be], it = Be + 1, ht = B[it];
          if (0 > rt(Je, ie)) it < $ && 0 > rt(ht, Je) ? (B[b] = ht, B[it] = ie, b = it) : (B[b] = Je, B[Be] = ie, b = Be);
          else if (it < $ && 0 > rt(ht, ie)) B[b] = ht, B[it] = ie, b = it;
          else break e;
        }
      }
      return me;
    }
    function rt(B, me) {
      var ie = B.sortIndex - me.sortIndex;
      return ie !== 0 ? ie : B.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Vt = performance;
      V.unstable_now = function() {
        return Vt.now();
      };
    } else {
      var Ue = Date, S = Ue.now();
      V.unstable_now = function() {
        return Ue.now() - S;
      };
    }
    var st = [], ze = [], ve = 1, Ge = null, te = 3, je = !1, ue = !1, Ce = !1, pt = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function at(B) {
      for (var me = D(ze); me !== null; ) {
        if (me.callback === null) he(ze);
        else if (me.startTime <= B) he(ze), me.sortIndex = me.expirationTime, q(st, me);
        else break;
        me = D(ze);
      }
    }
    function Ve(B) {
      if (Ce = !1, at(B), !ue) if (D(st) !== null) ue = !0, wt(Ot);
      else {
        var me = D(ze);
        me !== null && nt(Ve, me.startTime - B);
      }
    }
    function Ot(B, me) {
      ue = !1, Ce && (Ce = !1, Fn(Ie), Ie = -1), je = !0;
      var ie = te;
      try {
        for (at(me), Ge = D(st); Ge !== null && (!(Ge.expirationTime > me) || B && !Jt()); ) {
          var b = Ge.callback;
          if (typeof b == "function") {
            Ge.callback = null, te = Ge.priorityLevel;
            var $ = b(Ge.expirationTime <= me);
            me = V.unstable_now(), typeof $ == "function" ? Ge.callback = $ : Ge === D(st) && he(st), at(me);
          } else he(st);
          Ge = D(st);
        }
        if (Ge !== null) var ke = !0;
        else {
          var Be = D(ze);
          Be !== null && nt(Ve, Be.startTime - me), ke = !1;
        }
        return ke;
      } finally {
        Ge = null, te = ie, je = !1;
      }
    }
    var Re = !1, ft = null, Ie = -1, wn = 5, gn = -1;
    function Jt() {
      return !(V.unstable_now() - gn < wn);
    }
    function Et() {
      if (ft !== null) {
        var B = V.unstable_now();
        gn = B;
        var me = !0;
        try {
          me = ft(!0, B);
        } finally {
          me ? nn() : (Re = !1, ft = null);
        }
      } else Re = !1;
    }
    var nn;
    if (typeof sn == "function") nn = function() {
      sn(Et);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), tt = Pe.port2;
      Pe.port1.onmessage = Et, nn = function() {
        tt.postMessage(null);
      };
    } else nn = function() {
      pt(Et, 0);
    };
    function wt(B) {
      ft = B, Re || (Re = !0, nn());
    }
    function nt(B, me) {
      Ie = pt(function() {
        B(V.unstable_now());
      }, me);
    }
    V.unstable_IdlePriority = 5, V.unstable_ImmediatePriority = 1, V.unstable_LowPriority = 4, V.unstable_NormalPriority = 3, V.unstable_Profiling = null, V.unstable_UserBlockingPriority = 2, V.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, V.unstable_continueExecution = function() {
      ue || je || (ue = !0, wt(Ot));
    }, V.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, V.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, V.unstable_getFirstCallbackNode = function() {
      return D(st);
    }, V.unstable_next = function(B) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = te;
      }
      var ie = te;
      te = me;
      try {
        return B();
      } finally {
        te = ie;
      }
    }, V.unstable_pauseExecution = function() {
    }, V.unstable_requestPaint = function() {
    }, V.unstable_runWithPriority = function(B, me) {
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
      var ie = te;
      te = B;
      try {
        return me();
      } finally {
        te = ie;
      }
    }, V.unstable_scheduleCallback = function(B, me, ie) {
      var b = V.unstable_now();
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
      return $ = ie + $, B = { id: ve++, callback: me, priorityLevel: B, startTime: ie, expirationTime: $, sortIndex: -1 }, ie > b ? (B.sortIndex = ie, q(ze, B), D(st) === null && B === D(ze) && (Ce ? (Fn(Ie), Ie = -1) : Ce = !0, nt(Ve, ie - b))) : (B.sortIndex = $, q(st, B), ue || je || (ue = !0, wt(Ot))), B;
    }, V.unstable_shouldYield = Jt, V.unstable_wrapCallback = function(B) {
      var me = te;
      return function() {
        var ie = te;
        te = me;
        try {
          return B.apply(this, arguments);
        } finally {
          te = ie;
        }
      };
    };
  }(h0)), h0;
}
var m0 = {}, uR;
function pD() {
  return uR || (uR = 1, function(V) {
    var q = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    q.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, he = !1, rt = 5;
      function Vt(ne, De) {
        var lt = ne.length;
        ne.push(De), st(ne, De, lt);
      }
      function Ue(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var De = ne[0], lt = ne.pop();
        return lt !== De && (ne[0] = lt, ze(ne, lt, 0)), De;
      }
      function st(ne, De, lt) {
        for (var zt = lt; zt > 0; ) {
          var Lt = zt - 1 >>> 1, bn = ne[Lt];
          if (ve(bn, De) > 0)
            ne[Lt] = De, ne[zt] = bn, zt = Lt;
          else
            return;
        }
      }
      function ze(ne, De, lt) {
        for (var zt = lt, Lt = ne.length, bn = Lt >>> 1; zt < bn; ) {
          var pn = (zt + 1) * 2 - 1, vr = ne[pn], Bt = pn + 1, Yn = ne[Bt];
          if (ve(vr, De) < 0)
            Bt < Lt && ve(Yn, vr) < 0 ? (ne[zt] = Yn, ne[Bt] = De, zt = Bt) : (ne[zt] = vr, ne[pn] = De, zt = pn);
          else if (Bt < Lt && ve(Yn, De) < 0)
            ne[zt] = Yn, ne[Bt] = De, zt = Bt;
          else
            return;
        }
      }
      function ve(ne, De) {
        var lt = ne.sortIndex - De.sortIndex;
        return lt !== 0 ? lt : ne.id - De.id;
      }
      var Ge = 1, te = 2, je = 3, ue = 4, Ce = 5;
      function pt(ne, De) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var sn = performance;
        V.unstable_now = function() {
          return sn.now();
        };
      } else {
        var at = Date, Ve = at.now();
        V.unstable_now = function() {
          return at.now() - Ve;
        };
      }
      var Ot = 1073741823, Re = -1, ft = 250, Ie = 5e3, wn = 1e4, gn = Ot, Jt = [], Et = [], nn = 1, Pe = null, tt = je, wt = !1, nt = !1, B = !1, me = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ne) {
        for (var De = Ue(Et); De !== null; ) {
          if (De.callback === null)
            S(Et);
          else if (De.startTime <= ne)
            S(Et), De.sortIndex = De.expirationTime, Vt(Jt, De);
          else
            return;
          De = Ue(Et);
        }
      }
      function ke(ne) {
        if (B = !1, $(ne), !nt)
          if (Ue(Jt) !== null)
            nt = !0, Sr(Be);
          else {
            var De = Ue(Et);
            De !== null && cn(ke, De.startTime - ne);
          }
      }
      function Be(ne, De) {
        nt = !1, B && (B = !1, la()), wt = !0;
        var lt = tt;
        try {
          var zt;
          if (!he) return Je(ne, De);
        } finally {
          Pe = null, tt = lt, wt = !1;
        }
      }
      function Je(ne, De) {
        var lt = De;
        for ($(lt), Pe = Ue(Jt); Pe !== null && !D && !(Pe.expirationTime > lt && (!ne || dr())); ) {
          var zt = Pe.callback;
          if (typeof zt == "function") {
            Pe.callback = null, tt = Pe.priorityLevel;
            var Lt = Pe.expirationTime <= lt, bn = zt(Lt);
            lt = V.unstable_now(), typeof bn == "function" ? Pe.callback = bn : Pe === Ue(Jt) && S(Jt), $(lt);
          } else
            S(Jt);
          Pe = Ue(Jt);
        }
        if (Pe !== null)
          return !0;
        var pn = Ue(Et);
        return pn !== null && cn(ke, pn.startTime - lt), !1;
      }
      function it(ne, De) {
        switch (ne) {
          case Ge:
          case te:
          case je:
          case ue:
          case Ce:
            break;
          default:
            ne = je;
        }
        var lt = tt;
        tt = ne;
        try {
          return De();
        } finally {
          tt = lt;
        }
      }
      function ht(ne) {
        var De;
        switch (tt) {
          case Ge:
          case te:
          case je:
            De = je;
            break;
          default:
            De = tt;
            break;
        }
        var lt = tt;
        tt = De;
        try {
          return ne();
        } finally {
          tt = lt;
        }
      }
      function ct(ne) {
        var De = tt;
        return function() {
          var lt = tt;
          tt = De;
          try {
            return ne.apply(this, arguments);
          } finally {
            tt = lt;
          }
        };
      }
      function Ct(ne, De, lt) {
        var zt = V.unstable_now(), Lt;
        if (typeof lt == "object" && lt !== null) {
          var bn = lt.delay;
          typeof bn == "number" && bn > 0 ? Lt = zt + bn : Lt = zt;
        } else
          Lt = zt;
        var pn;
        switch (ne) {
          case Ge:
            pn = Re;
            break;
          case te:
            pn = ft;
            break;
          case Ce:
            pn = gn;
            break;
          case ue:
            pn = wn;
            break;
          case je:
          default:
            pn = Ie;
            break;
        }
        var vr = Lt + pn, Bt = {
          id: nn++,
          callback: De,
          priorityLevel: ne,
          startTime: Lt,
          expirationTime: vr,
          sortIndex: -1
        };
        return Lt > zt ? (Bt.sortIndex = Lt, Vt(Et, Bt), Ue(Jt) === null && Bt === Ue(Et) && (B ? la() : B = !0, cn(ke, Lt - zt))) : (Bt.sortIndex = vr, Vt(Jt, Bt), !nt && !wt && (nt = !0, Sr(Be))), Bt;
      }
      function Pt() {
      }
      function Xn() {
        !nt && !wt && (nt = !0, Sr(Be));
      }
      function Fr() {
        return Ue(Jt);
      }
      function fr(ne) {
        ne.callback = null;
      }
      function Sn() {
        return tt;
      }
      var Kn = !1, Hn = null, xn = -1, Ln = rt, gr = -1;
      function dr() {
        var ne = V.unstable_now() - gr;
        return !(ne < Ln);
      }
      function Vn() {
      }
      function ra(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Ln = Math.floor(1e3 / ne) : Ln = rt;
      }
      var aa = function() {
        if (Hn !== null) {
          var ne = V.unstable_now();
          gr = ne;
          var De = !0, lt = !0;
          try {
            lt = Hn(De, ne);
          } finally {
            lt ? pr() : (Kn = !1, Hn = null);
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
      function cn(ne, De) {
        xn = me(function() {
          ne(V.unstable_now());
        }, De);
      }
      function la() {
        ie(xn), xn = -1;
      }
      var ua = Vn, oa = null;
      V.unstable_IdlePriority = Ce, V.unstable_ImmediatePriority = Ge, V.unstable_LowPriority = ue, V.unstable_NormalPriority = je, V.unstable_Profiling = oa, V.unstable_UserBlockingPriority = te, V.unstable_cancelCallback = fr, V.unstable_continueExecution = Xn, V.unstable_forceFrameRate = ra, V.unstable_getCurrentPriorityLevel = Sn, V.unstable_getFirstCallbackNode = Fr, V.unstable_next = ht, V.unstable_pauseExecution = Pt, V.unstable_requestPaint = ua, V.unstable_runWithPriority = it, V.unstable_scheduleCallback = Ct, V.unstable_shouldYield = dr, V.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m0)), m0;
}
var oR;
function hR() {
  if (oR) return $m.exports;
  oR = 1;
  var V = {};
  return V.NODE_ENV === "production" ? $m.exports = dD() : $m.exports = pD(), $m.exports;
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
var sR;
function vD() {
  if (sR) return Qa;
  sR = 1;
  var V = tv(), q = hR();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var he = /* @__PURE__ */ new Set(), rt = {};
  function Vt(n, r) {
    Ue(n, r), Ue(n + "Capture", r);
  }
  function Ue(n, r) {
    for (rt[n] = r, n = 0; n < r.length; n++) he.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), st = Object.prototype.hasOwnProperty, ze = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, Ge = {};
  function te(n) {
    return st.call(Ge, n) ? !0 : st.call(ve, n) ? !1 : ze.test(n) ? Ge[n] = !0 : (ve[n] = !0, !1);
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
  function ue(n, r, l, o) {
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
  function at(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ve = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Jt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), nt = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function me(n) {
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
  var ke = !1;
  function Be(n, r) {
    if (!n || ke) return "";
    ke = !0;
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
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
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
      ke = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function Je(n) {
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
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Re:
        return "Portal";
      case wn:
        return "Profiler";
      case Ie:
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
      case Et:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case tt:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case wt:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
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
        return it(r);
      case 8:
        return r === Ie ? "StrictMode" : "Mode";
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
  function Ct(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pt(n) {
    var r = Ct(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    return n && (o = Ct(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    r = r.checked, r != null && at(n, "checked", r, !1);
  }
  function xn(n, r) {
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
  function Vn(n, r, l, o) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
  function lt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = De(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var zt = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Lt(n, r) {
    if (r) {
      if (zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
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
  var Bt = null, Yn = null, At = null;
  function Zt(n) {
    if (n = hi(n)) {
      if (typeof Bt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = bc(r), Bt(n.stateNode, n.type, r));
    }
  }
  function Ga(n) {
    Yn ? At ? At.push(n) : At = [n] : Yn = n;
  }
  function ba() {
    if (Yn) {
      var n = Yn, r = At;
      if (At = Yn = null, Zt(n), r) for (n = 0; n < r.length; n++) Zt(r[n]);
    }
  }
  function hl(n, r) {
    return n(r);
  }
  function nu() {
  }
  var ru = !1;
  function ml(n, r, l) {
    if (ru) return n(r, l);
    ru = !0;
    try {
      return hl(n, r, l);
    } finally {
      ru = !1, (Yn !== null || At !== null) && (nu(), ba());
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
  function Ni(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (W) {
      this.onError(W);
    }
  }
  var Er = !1, Hr = null, sa = !1, Ui = null, yl = { onError: function(n) {
    Er = !0, Hr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Er = !1, Hr = null, Ni.apply(yl, arguments);
  }
  function Q(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Er) {
      if (Er) {
        var z = Hr;
        Er = !1, Hr = null;
      } else throw Error(D(198));
      sa || (sa = !0, Ui = z);
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
  function Le(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function dt(n) {
    if (G(n) !== n) throw Error(D(188));
  }
  function Rt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = G(n), r === null) throw Error(D(188));
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
    return n = Rt(n), n !== null ? ut(n) : null;
  }
  function ut(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ut(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Mn = q.unstable_scheduleCallback, Gt = q.unstable_cancelCallback, fn = q.unstable_shouldYield, hr = q.unstable_requestPaint, jt = q.unstable_now, ka = q.unstable_getCurrentPriorityLevel, Nn = q.unstable_ImmediatePriority, Vr = q.unstable_UserBlockingPriority, Ze = q.unstable_NormalPriority, zi = q.unstable_LowPriority, Ai = q.unstable_IdlePriority, gl = null, Pr = null;
  function Xo(n) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function") try {
      Pr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cr = Math.clz32 ? Math.clz32 : Zo, Ko = Math.log, Jo = Math.LN2;
  function Zo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ko(n) / Jo | 0) | 0;
  }
  var au = 64, Wu = 4194304;
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
  function iu() {
    var n = au;
    return au <<= 1, !(au & 4194240) && (au = 64), n;
  }
  function lu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function El(n, r, l) {
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
  var Gu, Cl, rs, yt, qu, uu = !1, Qe = [], Ka = null, vn = null, Br = null, La = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), rn = [], hn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        return La.set(d, Zn(La.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, Zn(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Gi(n.target);
    if (r !== null) {
      var l = G(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Le(l), r !== null) {
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
      } else return r = hi(l), r !== null && Cl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ou(n, r, l) {
    Xu(n) && l.delete(r);
  }
  function su() {
    uu = !1, Ka !== null && Xu(Ka) && (Ka = null), vn !== null && Xu(vn) && (vn = null), Br !== null && Xu(Br) && (Br = null), La.forEach(ou), Rl.forEach(ou);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, uu || (uu = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, su)));
  }
  function Ma(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < Qe.length) {
      Tl(Qe[0], n);
      for (var l = 1; l < Qe.length; l++) {
        var o = Qe[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ka !== null && Tl(Ka, n), vn !== null && Tl(vn, n), Br !== null && Tl(Br, n), La.forEach(r), Rl.forEach(r), l = 0; l < rn.length; l++) o = rn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < rn.length && (l = rn[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && rn.shift();
  }
  var Fi = Ve.ReactCurrentBatchConfig, cu = !0;
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
    if (cu) {
      var c = Ju(n, r, l, o);
      if (c === null) ed(n, r, o, Vi, l), as(n, o);
      else if ($r(c, n, r, l, o)) o.stopPropagation();
      else if (as(n, o), r & 4 && -1 < hn.indexOf(n)) {
        for (; c !== null; ) {
          var d = hi(c);
          if (d !== null && Gu(d), d = Ju(n, r, l, o), d === null && ed(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else ed(n, r, o, null, l);
    }
  }
  var Vi = null;
  function Ju(n, r, l, o) {
    if (Vi = null, n = vr(o), n = Gi(n), n !== null) if (r = G(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Le(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
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
          case Vr:
            return 4;
          case Ze:
          case zi:
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
  var fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $e = Se(fe), ot = ie({}, fe, { view: 0, detail: 0 }), Ft = Se(ot), $t, Yt, It, an = ie({}, ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== It && (It && n.type === "mousemove" ? ($t = n.screenX - It.screenX, Yt = n.screenY - It.screenY) : Yt = $t = 0, It = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Yt;
  } }), xt = Se(an), _l = ie({}, an, { dataTransfer: 0 }), eo = Se(_l), ls = ie({}, ot, { relatedTarget: 0 }), us = Se(ls), Pi = ie({}, fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), os = Se(Pi), ss = ie({}, fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Bf = Se(ss), Ym = ie({}, fe, { data: 0 }), nv = Se(Ym), rv = {
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
  }, $f = {
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
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function iv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function yc() {
    return iv;
  }
  var Im = ie({}, ot, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = N(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $f[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yc, charCode: function(n) {
    return n.type === "keypress" ? N(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? N(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = Se(Im), Qm = ie({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = Se(Qm), Yf = ie({}, ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yc }), If = Se(Yf), Wm = ie({}, fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = Se(Wm), lv = ie({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Se(lv), $i = [9, 13, 27, 32], En = S && "CompositionEvent" in window, ca = null;
  S && "documentMode" in document && (ca = document.documentMode);
  var Qf = S && "TextEvent" in window && !ca, cs = S && (!En || ca && 8 < ca && 11 >= ca), uv = " ", to = !1;
  function ov(n, r) {
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
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var wl = !1;
  function Gm(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (to = !0, uv);
      case "textInput":
        return n = r.data, n === uv && to ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (wl) return n === "compositionend" || !En && ov(n, r) ? (n = C(), h = Zu = Za = null, wl = !1, n) : null;
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
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    Ga(o), r = wc(r, "onChange"), 0 < r.length && (l = new $e("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var fs = null, ds = null;
  function fv(n) {
    bv(n, 0);
  }
  function Yi(n) {
    var r = io(n);
    if (Fr(r)) return n;
  }
  function Gf(n, r) {
    if (n === "change") return r;
  }
  var qf = !1;
  if (S) {
    var Ec;
    if (S) {
      var Xf = "oninput" in document;
      if (!Xf) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), Xf = typeof dv.oninput == "function";
      }
      Ec = Xf;
    } else Ec = !1;
    qf = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    fs && (fs.detachEvent("onpropertychange", vv), ds = fs = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Yi(ds)) {
      var r = [];
      cv(r, ds, n, vr(n)), ml(fv, r);
    }
  }
  function Km(n, r, l) {
    n === "focusin" ? (pv(), fs = r, ds = l, fs.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Jm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(ds);
  }
  function Zm(n, r) {
    if (n === "click") return Yi(r);
  }
  function ey(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function hv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : hv;
  function no(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!st.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var l = mv(n);
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
      l = mv(l);
    }
  }
  function gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Sv() {
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
  function fu(n) {
    var r = Sv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && gv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ps(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = yv(l, d);
          var m = yv(
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
  var Cc = S && "documentMode" in document && 11 >= document.documentMode, du = null, xl = null, vs = null, Kf = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || du == null || du !== fr(o) || (o = du, "selectionStart" in o && ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), vs && no(vs, o) || (vs = o, o = wc(xl, "onSelect"), 0 < o.length && (r = new $e("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = du)));
  }
  function Rc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ro = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Tc = {}, Cv = {};
  S && (Cv = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
  function hs(n) {
    if (Tc[n]) return Tc[n];
    if (!ro[n]) return n;
    var r = ro[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Cv) return Tc[n] = r[l];
    return n;
  }
  var mr = hs("animationend"), Jf = hs("animationiteration"), Rv = hs("animationstart"), Tv = hs("transitionend"), _v = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function bl(n, r) {
    _v.set(n, r), Vt(r, [n]);
  }
  for (var _c = 0; _c < wv.length; _c++) {
    var ms = wv[_c], ys = ms.toLowerCase(), ty = ms[0].toUpperCase() + ms.slice(1);
    bl(ys, "on" + ty);
  }
  bl(mr, "onAnimationEnd"), bl(Jf, "onAnimationIteration"), bl(Rv, "onAnimationStart"), bl("dblclick", "onDoubleClick"), bl("focusin", "onFocus"), bl("focusout", "onBlur"), bl(Tv, "onTransitionEnd"), Ue("onMouseEnter", ["mouseout", "mouseover"]), Ue("onMouseLeave", ["mouseout", "mouseover"]), Ue("onPointerEnter", ["pointerout", "pointerover"]), Ue("onPointerLeave", ["pointerout", "pointerover"]), Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
  function xv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Q(o, r, void 0, n), n.currentTarget = null;
  }
  function bv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, z), d = T;
        }
      }
    }
    if (sa) throw n = Ui, sa = !1, Ui = null, n;
  }
  function qt(n, r) {
    var l = r[od];
    l === void 0 && (l = r[od] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Zf(r, n, 2, !1), l.add(o));
  }
  function gs(n, r, l) {
    var o = 0;
    r && (o |= 4), Zf(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, he.forEach(function(l) {
        l !== "selectionchange" && (ny.has(l) || gs(l, !1, n), gs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, gs("selectionchange", !1, r));
    }
  }
  function Zf(n, r, l, o) {
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
  function ed(n, r, l, o, c) {
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
      var z = d, W = vr(l), X = [];
      e: {
        var I = _v.get(n);
        if (I !== void 0) {
          var se = $e, ye = n;
          switch (n) {
            case "keypress":
              if (N(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = Bi;
              break;
            case "focusin":
              ye = "focus", se = us;
              break;
            case "focusout":
              ye = "blur", se = us;
              break;
            case "beforeblur":
            case "afterblur":
              se = us;
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
              se = xt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = eo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = If;
              break;
            case mr:
            case Jf:
            case Rv:
              se = os;
              break;
            case Tv:
              se = Sc;
              break;
            case "scroll":
              se = Ft;
              break;
            case "wheel":
              se = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = gc;
          }
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", k = Ee ? I !== null ? I + "Capture" : null : I;
          Ee = [];
          for (var w = z, M; w !== null; ) {
            M = w;
            var Z = M.stateNode;
            if (M.tag === 5 && Z !== null && (M = Z, k !== null && (Z = qa(w, k), Z != null && Ee.push(ao(w, Z, M)))), kn) break;
            w = w.return;
          }
          0 < Ee.length && (I = new se(I, ye, null, l, W), X.push({ event: I, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", I && l !== pn && (ye = l.relatedTarget || l.fromElement) && (Gi(ye) || ye[ti])) break e;
          if ((se || I) && (I = W.window === W ? W : (I = W.ownerDocument) ? I.defaultView || I.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = z, ye = ye ? Gi(ye) : null, ye !== null && (kn = G(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = z), se !== ye)) {
            if (Ee = xt, Z = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = gc, Z = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = se == null ? I : io(se), M = ye == null ? I : io(ye), I = new Ee(Z, w + "leave", se, l, W), I.target = kn, I.relatedTarget = M, Z = null, Gi(W) === z && (Ee = new Ee(k, w + "enter", ye, l, W), Ee.target = M, Ee.relatedTarget = kn, Z = Ee), kn = Z, se && ye) t: {
              for (Ee = se, k = ye, w = 0, M = Ee; M; M = pu(M)) w++;
              for (M = 0, Z = k; Z; Z = pu(Z)) M++;
              for (; 0 < w - M; ) Ee = pu(Ee), w--;
              for (; 0 < M - w; ) k = pu(k), M--;
              for (; w--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = pu(Ee), k = pu(k);
              }
              Ee = null;
            }
            else Ee = null;
            se !== null && td(X, I, se, Ee, !1), ye !== null && kn !== null && td(X, kn, ye, Ee, !0);
          }
        }
        e: {
          if (I = z ? io(z) : window, se = I.nodeName && I.nodeName.toLowerCase(), se === "select" || se === "input" && I.type === "file") var _e = Gf;
          else if (Wf(I)) if (qf) _e = ey;
          else {
            _e = Jm;
            var Fe = Km;
          }
          else (se = I.nodeName) && se.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (_e = Zm);
          if (_e && (_e = _e(n, z))) {
            cv(X, _e, l, W);
            break e;
          }
          Fe && Fe(n, I, z), n === "focusout" && (Fe = I._wrapperState) && Fe.controlled && I.type === "number" && gr(I, "number", I.value);
        }
        switch (Fe = z ? io(z) : window, n) {
          case "focusin":
            (Wf(Fe) || Fe.contentEditable === "true") && (du = Fe, xl = z, vs = null);
            break;
          case "focusout":
            vs = xl = du = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, Ev(X, l, W);
            break;
          case "selectionchange":
            if (Cc) break;
          case "keydown":
          case "keyup":
            Ev(X, l, W);
        }
        var He;
        if (En) e: {
          switch (n) {
            case "compositionstart":
              var xe = "onCompositionStart";
              break e;
            case "compositionend":
              xe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              xe = "onCompositionUpdate";
              break e;
          }
          xe = void 0;
        }
        else wl ? ov(n, l) && (xe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (xe = "onCompositionStart");
        xe && (cs && l.locale !== "ko" && (wl || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && wl && (He = C()) : (Za = W, Zu = "value" in Za ? Za.value : Za.textContent, wl = !0)), Fe = wc(z, xe), 0 < Fe.length && (xe = new nv(xe, n, null, l, W), X.push({ event: xe, listeners: Fe }), He ? xe.data = He : (He = sv(l), He !== null && (xe.data = He)))), (He = Qf ? Gm(n, l) : qm(n, l)) && (z = wc(z, "onBeforeInput"), 0 < z.length && (W = new nv("onBeforeInput", "beforeinput", null, l, W), X.push({ event: W, listeners: z }), W.data = He));
      }
      bv(X, r);
    });
  }
  function ao(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = qa(n, l), d != null && o.unshift(ao(n, d, c)), d = qa(n, r), d != null && o.push(ao(n, d, c))), n = n.return;
    }
    return o;
  }
  function pu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = qa(l, d), T != null && m.unshift(ao(l, T, E))) : c || (T = qa(l, d), T != null && m.push(ao(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Dv = /\r\n?/g, nd = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Dv, `
`).replace(nd, "");
  }
  function Ss(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(D(425));
  }
  function xc() {
  }
  var rd = null, ad = null;
  function vu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Es = typeof setTimeout == "function" ? setTimeout : void 0, Cs = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, Ov = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(ld);
  } : Es;
  function ld(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ud(n, r) {
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
  var Wi = Math.random().toString(36).slice(2), Na = "__reactFiber$" + Wi, Ts = "__reactProps$" + Wi, ti = "__reactContainer$" + Wi, od = "__reactEvents$" + Wi, ry = "__reactListeners$" + Wi, ay = "__reactHandles$" + Wi;
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
    throw Error(D(33));
  }
  function bc(n) {
    return n[Ts] || null;
  }
  var Me = [], ni = -1;
  function Xt(n) {
    return { current: n };
  }
  function Te(n) {
    0 > ni || (n.current = Me[ni], Me[ni] = null, ni--);
  }
  function Mt(n, r) {
    ni++, Me[ni] = n.current, n.current = r;
  }
  var Ua = {}, In = Xt(Ua), qe = Xt(!1), Rr = Ua;
  function da(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ua;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ir() {
    Te(qe), Te(In);
  }
  function mi(n, r, l) {
    if (In.current !== Ua) throw Error(D(168));
    Mt(In, r), Mt(qe, l);
  }
  function Dl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, ht(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function hu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ua, Rr = In.current, Mt(In, n), Mt(qe, qe.current), !0;
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = Dl(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, Te(qe), Te(In), Mt(In, n)) : Te(qe), Mt(qe, l);
  }
  var qi = null, kl = !1, er = !1;
  function Dc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Mv(n) {
    kl = !0, Dc(n);
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
        qi = null, kl = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), Mn(Nn, yi), c;
      } finally {
        mt = r, er = !1;
      }
    }
    return null;
  }
  var za = [], Ol = 0, Aa = null, mu = 0, Qr = [], Wr = 0, ri = null, Gr = 1, tr = "";
  function yu(n, r) {
    za[Ol++] = mu, za[Ol++] = Aa, Aa = n, mu = r;
  }
  function Ll(n, r, l) {
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
    n.return !== null && (yu(n, 1), Ll(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Aa; ) Aa = za[--Ol], za[Ol] = null, mu = za[--Ol], za[Ol] = null;
    for (; n === ri; ) ri = Qr[--Wr], Qr[Wr] = null, tr = Qr[--Wr], Qr[Wr] = null, Gr = Qr[--Wr], Qr[Wr] = null;
  }
  var pa = null, va = null, ln = !1, ja = null;
  function sd(n, r) {
    var l = Ca(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function cd(n, r) {
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
  function fd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Lc(n) {
    if (ln) {
      var r = va;
      if (r) {
        var l = r;
        if (!cd(n, r)) {
          if (fd(n)) throw Error(D(418));
          r = fa(l.nextSibling);
          var o = pa;
          r && cd(n, r) ? sd(o, l) : (n.flags = n.flags & -4097 | 2, ln = !1, pa = n);
        }
      } else {
        if (fd(n)) throw Error(D(418));
        n.flags = n.flags & -4097 | 2, ln = !1, pa = n;
      }
    }
  }
  function dd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    pa = n;
  }
  function Mc(n) {
    if (n !== pa) return !1;
    if (!ln) return dd(n), ln = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !vu(n.type, n.memoizedProps)), r && (r = va)) {
      if (fd(n)) throw Nv(), Error(D(418));
      for (; r; ) sd(n, r), r = fa(r.nextSibling);
    }
    if (dd(n), n.tag === 13) {
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
  function Nv() {
    for (var n = va; n; ) n = fa(n.nextSibling);
  }
  function lo() {
    va = pa = null, ln = !1;
  }
  function zn(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var iy = Ve.ReactCurrentBatchConfig;
  function Ml(n, r, l) {
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
  function uo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(k, w) {
      if (n) {
        var M = k.deletions;
        M === null ? (k.deletions = [w], k.flags |= 16) : M.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Yl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, M) {
      return k.index = M, n ? (M = k.alternate, M !== null ? (M = M.index, M < w ? (k.flags |= 2, w) : M) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, M, Z) {
      return w === null || w.tag !== 6 ? (w = Qd(M, k.mode, Z), w.return = k, w) : (w = c(w, M), w.return = k, w);
    }
    function T(k, w, M, Z) {
      var _e = M.type;
      return _e === ft ? W(k, w, M.props.children, Z, M.key) : w !== null && (w.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === wt && Nl(_e) === w.type) ? (Z = c(w, M.props), Z.ref = Ml(k, w, M), Z.return = k, Z) : (Z = rf(M.type, M.key, M.props, null, k.mode, Z), Z.ref = Ml(k, w, M), Z.return = k, Z);
    }
    function z(k, w, M, Z) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = lf(M, k.mode, Z), w.return = k, w) : (w = c(w, M.children || []), w.return = k, w);
    }
    function W(k, w, M, Z, _e) {
      return w === null || w.tag !== 7 ? (w = Mu(M, k.mode, Z, _e), w.return = k, w) : (w = c(w, M), w.return = k, w);
    }
    function X(k, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Qd("" + w, k.mode, M), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ot:
            return M = rf(w.type, w.key, w.props, null, k.mode, M), M.ref = Ml(k, null, w), M.return = k, M;
          case Re:
            return w = lf(w, k.mode, M), w.return = k, w;
          case wt:
            var Z = w._init;
            return X(k, Z(w._payload), M);
        }
        if (dr(w) || me(w)) return w = Mu(w, k.mode, M, null), w.return = k, w;
        uo(k, w);
      }
      return null;
    }
    function I(k, w, M, Z) {
      var _e = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return _e !== null ? null : E(k, w, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            return M.key === _e ? T(k, w, M, Z) : null;
          case Re:
            return M.key === _e ? z(k, w, M, Z) : null;
          case wt:
            return _e = M._init, I(
              k,
              w,
              _e(M._payload),
              Z
            );
        }
        if (dr(M) || me(M)) return _e !== null ? null : W(k, w, M, Z, null);
        uo(k, M);
      }
      return null;
    }
    function se(k, w, M, Z, _e) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return k = k.get(M) || null, E(w, k, "" + Z, _e);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Ot:
            return k = k.get(Z.key === null ? M : Z.key) || null, T(w, k, Z, _e);
          case Re:
            return k = k.get(Z.key === null ? M : Z.key) || null, z(w, k, Z, _e);
          case wt:
            var Fe = Z._init;
            return se(k, w, M, Fe(Z._payload), _e);
        }
        if (dr(Z) || me(Z)) return k = k.get(M) || null, W(w, k, Z, _e, null);
        uo(w, Z);
      }
      return null;
    }
    function ye(k, w, M, Z) {
      for (var _e = null, Fe = null, He = w, xe = w = 0, _n = null; He !== null && xe < M.length; xe++) {
        He.index > xe ? (_n = He, He = null) : _n = He.sibling;
        var kt = I(k, He, M[xe], Z);
        if (kt === null) {
          He === null && (He = _n);
          break;
        }
        n && He && kt.alternate === null && r(k, He), w = d(kt, w, xe), Fe === null ? _e = kt : Fe.sibling = kt, Fe = kt, He = _n;
      }
      if (xe === M.length) return l(k, He), ln && yu(k, xe), _e;
      if (He === null) {
        for (; xe < M.length; xe++) He = X(k, M[xe], Z), He !== null && (w = d(He, w, xe), Fe === null ? _e = He : Fe.sibling = He, Fe = He);
        return ln && yu(k, xe), _e;
      }
      for (He = o(k, He); xe < M.length; xe++) _n = se(He, k, xe, M[xe], Z), _n !== null && (n && _n.alternate !== null && He.delete(_n.key === null ? xe : _n.key), w = d(_n, w, xe), Fe === null ? _e = _n : Fe.sibling = _n, Fe = _n);
      return n && He.forEach(function(Il) {
        return r(k, Il);
      }), ln && yu(k, xe), _e;
    }
    function Ee(k, w, M, Z) {
      var _e = me(M);
      if (typeof _e != "function") throw Error(D(150));
      if (M = _e.call(M), M == null) throw Error(D(151));
      for (var Fe = _e = null, He = w, xe = w = 0, _n = null, kt = M.next(); He !== null && !kt.done; xe++, kt = M.next()) {
        He.index > xe ? (_n = He, He = null) : _n = He.sibling;
        var Il = I(k, He, kt.value, Z);
        if (Il === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Il.alternate === null && r(k, He), w = d(Il, w, xe), Fe === null ? _e = Il : Fe.sibling = Il, Fe = Il, He = _n;
      }
      if (kt.done) return l(
        k,
        He
      ), ln && yu(k, xe), _e;
      if (He === null) {
        for (; !kt.done; xe++, kt = M.next()) kt = X(k, kt.value, Z), kt !== null && (w = d(kt, w, xe), Fe === null ? _e = kt : Fe.sibling = kt, Fe = kt);
        return ln && yu(k, xe), _e;
      }
      for (He = o(k, He); !kt.done; xe++, kt = M.next()) kt = se(He, k, xe, kt.value, Z), kt !== null && (n && kt.alternate !== null && He.delete(kt.key === null ? xe : kt.key), w = d(kt, w, xe), Fe === null ? _e = kt : Fe.sibling = kt, Fe = kt);
      return n && He.forEach(function(sh) {
        return r(k, sh);
      }), ln && yu(k, xe), _e;
    }
    function kn(k, w, M, Z) {
      if (typeof M == "object" && M !== null && M.type === ft && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            e: {
              for (var _e = M.key, Fe = w; Fe !== null; ) {
                if (Fe.key === _e) {
                  if (_e = M.type, _e === ft) {
                    if (Fe.tag === 7) {
                      l(k, Fe.sibling), w = c(Fe, M.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (Fe.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === wt && Nl(_e) === Fe.type) {
                    l(k, Fe.sibling), w = c(Fe, M.props), w.ref = Ml(k, Fe, M), w.return = k, k = w;
                    break e;
                  }
                  l(k, Fe);
                  break;
                } else r(k, Fe);
                Fe = Fe.sibling;
              }
              M.type === ft ? (w = Mu(M.props.children, k.mode, Z, M.key), w.return = k, k = w) : (Z = rf(M.type, M.key, M.props, null, k.mode, Z), Z.ref = Ml(k, w, M), Z.return = k, k = Z);
            }
            return m(k);
          case Re:
            e: {
              for (Fe = M.key; w !== null; ) {
                if (w.key === Fe) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  l(k, w.sibling), w = c(w, M.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = lf(M, k.mode, Z), w.return = k, k = w;
            }
            return m(k);
          case wt:
            return Fe = M._init, kn(k, w, Fe(M._payload), Z);
        }
        if (dr(M)) return ye(k, w, M, Z);
        if (me(M)) return Ee(k, w, M, Z);
        uo(k, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, M), w.return = k, k = w) : (l(k, w), w = Qd(M, k.mode, Z), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var Ul = Uv(!0), zv = Uv(!1), Nc = Xt(null), Xi = null, Dn = null, ae = null;
  function Fa() {
    ae = Dn = Xi = null;
  }
  function ha(n) {
    var r = Nc.current;
    Te(Nc), n._currentValue = r;
  }
  function pd(n, r, l) {
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
      if (Xi === null) throw Error(D(308));
      Dn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else Dn = Dn.next = n;
    return r;
  }
  var gu = null;
  function vd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Pn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, vd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ki(n, o);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var zl = !1;
  function hd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function md(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ma(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ya(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ki(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, vd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ki(n, l);
  }
  function Uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ts(n, l);
    }
  }
  function Av(n, r) {
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
  function zc(n, r, l, o) {
    var c = n.updateQueue;
    zl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = z : E.next = z, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, W = z = T = null, E = d;
      do {
        var I = E.lane, se = E.eventTime;
        if ((o & I) === I) {
          W !== null && (W = W.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (I = r, se = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  X = ye.call(se, X, I);
                  break e;
                }
                X = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, I = typeof ye == "function" ? ye.call(se, X, I) : ye, I == null) break e;
                X = ie({}, X, I);
                break e;
              case 2:
                zl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else se = { eventTime: se, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (z = W = se, T = X) : W = W.next = se, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = X), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wu |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function jv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var _s = {}, gi = Xt(_s), so = Xt(_s), co = Xt(_s);
  function Su(n) {
    if (n === _s) throw Error(D(174));
    return n;
  }
  function yd(n, r) {
    switch (Mt(co, r), Mt(so, n), Mt(gi, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sr(r, n);
    }
    Te(gi), Mt(gi, r);
  }
  function fo() {
    Te(gi), Te(so), Te(co);
  }
  function Fv(n) {
    Su(co.current);
    var r = Su(gi.current), l = Sr(r, n.type);
    r !== l && (Mt(so, n), Mt(gi, l));
  }
  function gd(n) {
    so.current === n && (Te(gi), Te(so));
  }
  var mn = Xt(0);
  function ws(n) {
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
  var Sd = [];
  function Ac() {
    for (var n = 0; n < Sd.length; n++) Sd[n]._workInProgressVersionPrimary = null;
    Sd.length = 0;
  }
  var jc = Ve.ReactCurrentDispatcher, Ed = Ve.ReactCurrentBatchConfig, Ji = 0, re = null, Oe = null, We = null, un = !1, qr = !1, po = 0, ly = 0;
  function yr() {
    throw Error(D(321));
  }
  function Cd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function xs(n, r, l, o, c, d) {
    if (Ji = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, jc.current = n === null || n.memoizedState === null ? ga : uy, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, po = 0, 25 <= d) throw Error(D(301));
        d += 1, We = Oe = null, r.updateQueue = null, jc.current = en, n = l(o, c);
      } while (qr);
    }
    if (jc.current = Ei, r = Oe !== null && Oe.next !== null, Ji = 0, We = Oe = re = null, un = !1, r) throw Error(D(300));
    return n;
  }
  function Y() {
    var n = po !== 0;
    return po = 0, n;
  }
  function Kt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return We === null ? re.memoizedState = We = n : We = We.next = n, We;
  }
  function we() {
    if (Oe === null) {
      var n = re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Oe.next;
    var r = We === null ? re.memoizedState : We.next;
    if (r !== null) We = r, Oe = n;
    else {
      if (n === null) throw Error(D(310));
      Oe = n, n = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, We === null ? re.memoizedState = We = n : We = We.next = n;
    }
    return We;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ai(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = Oe, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var W = z.lane;
        if ((Ji & W) === W) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var X = {
            lane: W,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, re.lanes |= W, wu |= W;
        }
        z = z.next;
      } while (z !== null && z !== d);
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
  function vo(n, r) {
    var l = re, o = we(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, bs(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || We !== null && We.memoizedState.tag & 1) {
      if (l.flags |= 2048, Cu(9, ho.bind(null, l, o, c, r), void 0, null), Cn === null) throw Error(D(349));
      Ji & 30 || Eu(l, r, c);
    }
    return c;
  }
  function Eu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ho(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Vc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Vc(n);
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
  function Vc(n) {
    var r = Ki(n, 1);
    r !== null && Va(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Kt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hv.bind(null, re, n), [r.memoizedState, n];
  }
  function Cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return we().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Kt();
    re.flags |= n, c.memoizedState = Cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = we();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Oe !== null) {
      var m = Oe.memoizedState;
      if (d = m.destroy, o !== null && Cd(o, m.deps)) {
        c.memoizedState = Cu(r, l, d, o);
        return;
      }
    }
    re.flags |= n, c.memoizedState = Cu(1 | r, l, d, o);
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
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Cd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ru(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Cd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Gc(n, r, l) {
    return Ji & 21 ? (ei(l, r) || (l = iu(), re.lanes |= l, wu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function Rd(n, r) {
    var l = mt;
    mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ed.transition;
    Ed.transition = {};
    try {
      n(!1), r();
    } finally {
      mt = l, Ed.transition = o;
    }
  }
  function qc() {
    return we().memoizedState;
  }
  function Td(n, r, l) {
    var o = ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, go(n)) _d(r, l);
    else if (l = Pn(n, r, l, o), l !== null) {
      var c = Gn();
      Va(l, n, o, c), So(l, r, o);
    }
  }
  function Hv(n, r, l) {
    var o = ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (go(n)) _d(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, vd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Pn(n, r, c, o), l !== null && (c = Gn(), Va(l, n, o, c), So(l, r, o));
    }
  }
  function go(n) {
    var r = n.alternate;
    return n === re || r !== null && r === re;
  }
  function _d(n, r) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Td.bind(null, re, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Kt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: Ds, useDeferredValue: function(n) {
    return Kt().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = Rd.bind(null, n[1]), Kt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = re, c = Kt();
    if (ln) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Cn === null) throw Error(D(349));
      Ji & 30 || Eu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Cu(9, ho.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kt(), r = Cn.identifierPrefix;
    if (ln) {
      var l = tr, o = Gr;
      l = (o & ~(1 << 32 - Cr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = po++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ly++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, uy = {
    readContext: Ha,
    useCallback: ks,
    useContext: Ha,
    useEffect: bs,
    useImperativeHandle: Wc,
    useInsertionEffect: Yc,
    useLayoutEffect: Ic,
    useMemo: Ru,
    useReducer: ai,
    useRef: Bc,
    useState: function() {
      return ai(Si);
    },
    useDebugValue: Ds,
    useDeferredValue: function(n) {
      var r = we();
      return Gc(r, Oe.memoizedState, n);
    },
    useTransition: function() {
      var n = ai(Si)[0], r = we().memoizedState;
      return [n, r];
    },
    useMutableSource: ii,
    useSyncExternalStore: vo,
    useId: qc,
    unstable_isNewReconciler: !1
  }, en = { readContext: Ha, useCallback: ks, useContext: Ha, useEffect: bs, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: Ic, useMemo: Ru, useReducer: Zi, useRef: Bc, useState: function() {
    return Zi(Si);
  }, useDebugValue: Ds, useDeferredValue: function(n) {
    var r = we();
    return Oe === null ? r.memoizedState = n : Gc(r, Oe.memoizedState, n);
  }, useTransition: function() {
    var n = Zi(Si)[0], r = we().memoizedState;
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
  var Al = { isMounted: function(n) {
    return (n = n._reactInternals) ? G(n) === n : !1;
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
  function Os(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !no(l, o) || !no(c, d) : !0;
  }
  function Vv(n, r, l) {
    var o = !1, c = Ua, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = Un(r) ? Rr : In.current, o = r.contextTypes, d = (o = o != null) ? da(n, c) : Ua), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Al, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Pv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Al.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, hd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = Un(r) ? Rr : In.current, c.context = da(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Eo(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Al.enqueueReplaceState(c, c.state, null), zc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Co(n, r) {
    try {
      var l = "", o = r;
      do
        l += Je(o), o = o.return;
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
  function xd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var bd = typeof WeakMap == "function" ? WeakMap : Map;
  function Dd(n, r, l) {
    l = ma(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Pd = o), xd(n, r);
    }, l;
  }
  function Bv(n, r, l) {
    l = ma(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        xd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      xd(n, r), typeof o != "function" && (Vl === null ? Vl = /* @__PURE__ */ new Set([this]) : Vl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function $v(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new bd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function Ms(n) {
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
  var Iv = Ve.ReactCurrentOwner, Tr = !1;
  function _r(n, r, l, o) {
    r.child = n === null ? zv(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function jl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return oo(r, c), o = xs(n, r, l, o, d, c), l = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && l && kc(r), r.flags |= 1, _r(n, r, o, c), r.child);
  }
  function Ro(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Fl(n, r, d, o, c)) : (n = rf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : no, l(m, o) && n.ref === r.ref) return Ci(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (no(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Ci(n, r, c);
    }
    return Hl(n, r, l, o, c);
  }
  function Xc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(_u, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(_u, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Mt(_u, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Mt(_u, Dr), Dr |= o;
    return _r(n, r, c, l), r.child;
  }
  function Kr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Hl(n, r, l, o, c) {
    var d = Un(l) ? Rr : In.current;
    return d = da(r, d), oo(r, c), l = xs(n, r, l, o, d, c), o = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && o && kc(r), r.flags |= 1, _r(n, r, l, c), r.child);
  }
  function et(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      hu(r);
    } else d = !1;
    if (oo(r, c), r.stateNode === null) zs(n, r), Vv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ha(z) : (z = Un(l) ? Rr : In.current, z = da(r, z));
      var W = l.getDerivedStateFromProps, X = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Pv(r, m, o, z), zl = !1;
      var I = r.memoizedState;
      m.state = I, zc(r, o, m, c), T = r.memoizedState, E !== o || I !== T || qe.current || zl ? (typeof W == "function" && (Eo(r, l, W, o), T = r.memoizedState), (E = zl || Os(r, l, E, o, I, T, z)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, md(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : Xr(r.type, E), m.props = z, X = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = Un(l) ? Rr : In.current, T = da(r, T));
      var se = l.getDerivedStateFromProps;
      (W = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || I !== T) && Pv(r, m, o, T), zl = !1, I = r.memoizedState, m.state = I, zc(r, o, m, c);
      var ye = r.memoizedState;
      E !== X || I !== ye || qe.current || zl ? (typeof se == "function" && (Eo(r, l, se, o), ye = r.memoizedState), (z = zl || Os(r, l, z, o, I, ye, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return To(n, r, l, o, d, c);
  }
  function To(n, r, l, o, c, d) {
    Kr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lv(r, l, !1), Ci(n, r, d);
    o = r.stateNode, Iv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : _r(n, r, E, d), r.memoizedState = o.state, c && Lv(r, l, !0), r.child;
  }
  function kd(n) {
    var r = n.stateNode;
    r.pendingContext ? mi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && mi(n, r.context, !1), yd(n, r.containerInfo);
  }
  function oy(n, r, l, o, c) {
    return lo(), zn(c), r.flags |= 256, _r(n, r, l, o), r.child;
  }
  var Od = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ns(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _o(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Mt(mn, c & 1), n === null)
      return Lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = af(m, o, 0, null), n = Mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ns(l), r.memoizedState = Od, n) : Ld(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return sy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = Mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ns(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Od, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ld(n, r) {
    return r = af({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Us(n, r, l, o) {
    return o !== null && zn(o), Ul(r, n.child, null, l), n = Ld(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function sy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ls(Error(D(422))), Us(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = af({ mode: "visible", children: o.children }, c, 0, null), d = Mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = Ns(m), r.memoizedState = Od, d);
    if (!(r.mode & 1)) return Us(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = Ls(d, o, void 0), Us(n, r, m, o);
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
      return $d(), o = Ls(Error(D(421))), Us(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, va = fa(c.nextSibling), pa = r, ln = !0, ja = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ri, Gr = n.id, tr = n.overflow, ri = r), r = Ld(r, o.children), r.flags |= 4096, r);
  }
  function Kc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), pd(n.return, r, l);
  }
  function Md(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Nd(n, r, l) {
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
    if (Mt(mn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && ws(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Md(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && ws(n) === null) {
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
  function zs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ci(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Sa(n, r, l) {
    switch (r.tag) {
      case 3:
        kd(r), lo();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Un(r.type) && hu(r);
        break;
      case 4:
        yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Mt(Nc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Mt(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _o(n, r, l) : (Mt(mn, mn.current & 1), n = Ci(n, r, l), n !== null ? n.sibling : null);
        Mt(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Nd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Mt(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xc(n, r, l);
    }
    return Ci(n, r, l);
  }
  var Ri, li, As, wo;
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
      n = r.stateNode, Su(gi.current);
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
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xc);
      }
      Lt(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (rt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (rt.hasOwnProperty(z) ? (T != null && z === "onScroll" && qt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, wo = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wr(n, r) {
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
  function bt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function cy(n, r, l) {
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
        return bt(r), null;
      case 1:
        return Un(r.type) && Ir(), bt(r), null;
      case 3:
        return o = r.stateNode, fo(), Te(qe), Te(In), Ac(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Du(ja), ja = null))), li(n, r), bt(r), null;
      case 5:
        gd(r);
        var c = Su(co.current);
        if (l = r.type, n !== null && r.stateNode != null) As(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return bt(r), null;
          }
          if (n = Su(gi.current), Mc(r)) {
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
            Lt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ss(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ss(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : rt.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
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
                typeof d.onClick == "function" && (o.onclick = xc);
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
              Lt(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? lt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && la(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ua(n, T) : typeof T == "number" && ua(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (rt.hasOwnProperty(d) ? T != null && d === "onScroll" && qt("scroll", n) : T != null && at(n, d, T, m));
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
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xc);
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
        return bt(r), null;
      case 6:
        if (n && r.stateNode != null) wo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
          if (l = Su(co.current), Su(gi.current), Mc(r)) {
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
        return bt(r), null;
      case 13:
        if (Te(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ln && va !== null && r.mode & 1 && !(r.flags & 128)) Nv(), lo(), r.flags |= 98560, d = !1;
          else if (d = Mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
              d[Na] = r;
            } else lo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            bt(r), d = !1;
          } else ja !== null && (Du(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Bn === 0 && (Bn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), bt(r), null);
      case 4:
        return fo(), li(n, r), n === null && vi(r.stateNode.containerInfo), bt(r), null;
      case 10:
        return ha(r.type._context), bt(r), null;
      case 17:
        return Un(r.type) && Ir(), bt(r), null;
      case 19:
        if (Te(mn), d = r.memoizedState, d === null) return bt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) wr(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = ws(n), m !== null) {
              for (r.flags |= 128, wr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Mt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && jt() > xu && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = ws(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln) return bt(r), null;
          } else 2 * jt() - d.renderingStartTime > xu && l !== 1073741824 && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = jt(), r.sibling = null, l = mn.current, Mt(mn, o ? l & 1 | 2 : l & 1), r) : (bt(r), null);
      case 22:
      case 23:
        return ko(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Dr & 1073741824 && (bt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : bt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function fy(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return Un(r.type) && Ir(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return fo(), Te(qe), Te(In), Ac(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gd(r), null;
      case 13:
        if (Te(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
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
  var Jc = !1, Qn = !1, Qv = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function Tu(n, r) {
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
  var Wv = !1;
  function zd(n, r) {
    if (rd = cu, n = Sv(), ps(n)) {
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
          var m = 0, E = -1, T = -1, z = 0, W = 0, X = n, I = null;
          t: for (; ; ) {
            for (var se; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (se = X.firstChild) !== null; )
              I = X, X = se;
            for (; ; ) {
              if (X === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++W === o && (T = m), (se = X.nextSibling) !== null) break;
              X = I, I = X.parentNode;
            }
            X = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ad = { focusedElem: n, selectionRange: l }, cu = !1, de = r; de !== null; ) if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, de = n;
    else for (; de !== null; ) {
      r = de;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : Xr(r.type, Ee), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
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
            throw Error(D(163));
        }
      } catch (Z) {
        Tn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, de = n;
        break;
      }
      de = r.return;
    }
    return ye = Wv, Wv = !1, ye;
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
  function Ad(n) {
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
  function jd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, jd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[Ts], delete r[od], delete r[ry], delete r[ay])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Gv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Gv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Hd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Hd(n, r, l), n = n.sibling; n !== null; ) Hd(n, r, l), n = n.sibling;
  }
  function Hs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Hs(n, r, l), n = n.sibling; n !== null; ) Hs(n, r, l), n = n.sibling;
  }
  var An = null, Wn = !1;
  function xr(n, r, l) {
    for (l = l.child; l !== null; ) el(n, r, l), l = l.sibling;
  }
  function el(n, r, l) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function") try {
      Pr.onCommitFiberUnmount(gl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Qn || Tu(l, r);
      case 6:
        var o = An, c = Wn;
        An = null, xr(n, r, l), An = o, Wn = c, An !== null && (Wn ? (n = An, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : An.removeChild(l.stateNode));
        break;
      case 18:
        An !== null && (Wn ? (n = An, l = l.stateNode, n.nodeType === 8 ? ud(n.parentNode, l) : n.nodeType === 1 && ud(n, l), Ma(n)) : ud(An, l.stateNode));
        break;
      case 4:
        o = An, c = Wn, An = l.stateNode.containerInfo, Wn = !0, xr(n, r, l), An = o, Wn = c;
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
        xr(n, r, l);
        break;
      case 1:
        if (!Qn && (Tu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Tn(l, r, E);
        }
        xr(n, r, l);
        break;
      case 21:
        xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Qn = (o = Qn) || l.memoizedState !== null, xr(n, r, l), Qn = o) : xr(n, r, l);
        break;
      default:
        xr(n, r, l);
    }
  }
  function xo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Qv()), r.forEach(function(o) {
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
      } catch (z) {
        Tn(c, r, z);
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
        br(r, n), Ti(n), o & 512 && l !== null && Tu(l, l.return);
        break;
      case 5:
        if (br(r, n), Ti(n), o & 512 && l !== null && Tu(l, l.return), n.flags & 32) {
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
            var z = bn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], X = T[m + 1];
              W === "style" ? lt(c, X) : W === "dangerouslySetInnerHTML" ? la(c, X) : W === "children" ? ua(c, X) : at(c, W, X, z);
            }
            switch (E) {
              case "input":
                xn(c, d);
                break;
              case "textarea":
                pr(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Vn(c, !!d.multiple, se, !1) : I !== !!d.multiple && (d.defaultValue != null ? Vn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Ts] = d;
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (br(r, n), Ti(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
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
        br(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($s = jt())), o & 4 && xo(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (z = Qn) || W, br(r, n), Qn = z) : br(r, n), Ti(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !W && n.mode & 1) for (de = n, W = n.child; W !== null; ) {
            for (X = de = W; de !== null; ) {
              switch (I = de, se = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, I, I.return);
                  break;
                case 1:
                  Tu(I, I.return);
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
                  Tu(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    bo(X);
                    continue;
                  }
              }
              se !== null ? (se.return = I, de = se) : bo(X);
            }
            W = W.sibling;
          }
          e: for (W = null, X = n; ; ) {
            if (X.tag === 5) {
              if (W === null) {
                W = X;
                try {
                  c = X.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = De("display", m));
                } catch (Ee) {
                  Tn(n, n.return, Ee);
                }
              }
            } else if (X.tag === 6) {
              if (W === null) try {
                X.stateNode.nodeValue = z ? "" : X.memoizedProps;
              } catch (Ee) {
                Tn(n, n.return, Ee);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              W === X && (W = null), X = X.return;
            }
            W === X && (W = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        br(r, n), Ti(n), o & 4 && xo(n);
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
            if (Gv(l)) {
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
            var d = Fd(n);
            Hs(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Fd(n);
            Hd(n, E, m);
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
  function dy(n, r, l) {
    de = n, qv(n);
  }
  function qv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Jc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Qn;
          E = Jc;
          var z = Qn;
          if (Jc = m, (Qn = T) && !z) for (de = c; de !== null; ) m = de, T = m.child, m.tag === 22 && m.memoizedState !== null ? Xv(c) : T !== null ? (T.return = m, de = T) : Xv(c);
          for (; d !== null; ) de = d, qv(d), d = d.sibling;
          de = c, Jc = E, Qn = z;
        }
        Vd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, de = d) : Vd(n);
    }
  }
  function Vd(n) {
    for (; de !== null; ) {
      var r = de;
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
              d !== null && jv(r, d, o);
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
                jv(r, m, l);
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
                var z = r.alternate;
                if (z !== null) {
                  var W = z.memoizedState;
                  if (W !== null) {
                    var X = W.dehydrated;
                    X !== null && Ma(X);
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
          Qn || r.flags & 512 && Ad(r);
        } catch (I) {
          Tn(r, r.return, I);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function bo(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Xv(n) {
    for (; de !== null; ) {
      var r = de;
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
              Ad(r);
            } catch (T) {
              Tn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ad(r);
            } catch (T) {
              Tn(r, m, T);
            }
        }
      } catch (T) {
        Tn(r, r.return, T);
      }
      if (r === n) {
        de = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, de = E;
        break;
      }
      de = r.return;
    }
  }
  var Kv = Math.ceil, Zc = Ve.ReactCurrentDispatcher, Do = Ve.ReactCurrentOwner, Ea = Ve.ReactCurrentBatchConfig, Dt = 0, Cn = null, dn = null, Rn = 0, Dr = 0, _u = Xt(0), Bn = 0, Vs = null, wu = 0, ef = 0, Ps = 0, Bs = null, nr = null, $s = 0, xu = 1 / 0, nl = null, tf = !1, Pd = null, Vl = null, Pl = !1, _i = null, Bl = 0, Ys = 0, Bd = null, Is = -1, Qs = 0;
  function Gn() {
    return Dt & 6 ? jt() : Is !== -1 ? Is : Is = jt();
  }
  function ui(n) {
    return n.mode & 1 ? Dt & 2 && Rn !== 0 ? Rn & -Rn : iy.transition !== null ? (Qs === 0 && (Qs = iu()), Qs) : (n = mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : is(n.type)), n) : 1;
  }
  function Va(n, r, l, o) {
    if (50 < Ys) throw Ys = 0, Bd = null, Error(D(185));
    El(n, l, o), (!(Dt & 2) || n !== Cn) && (n === Cn && (!(Dt & 2) && (ef |= l), Bn === 4 && wi(n, Rn)), tn(n, o), l === 1 && Dt === 0 && !(r.mode & 1) && (xu = jt() + 500, kl && yi()));
  }
  function tn(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) l !== null && Gt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Gt(l), r === 1) n.tag === 0 ? Mv(nf.bind(null, n)) : Dc(nf.bind(null, n)), Ov(function() {
        !(Dt & 6) && yi();
      }), l = null;
      else {
        switch (ns(o)) {
          case 1:
            l = Nn;
            break;
          case 4:
            l = Vr;
            break;
          case 16:
            l = Ze;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = Ze;
        }
        l = lh(l, bu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function bu(n, r) {
    if (Is = -1, Qs = 0, Dt & 6) throw Error(D(327));
    var l = n.callbackNode;
    if (Lo() && n.callbackNode !== l) return null;
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Oo(n, o);
    else {
      r = o;
      var c = Dt;
      Dt |= 2;
      var d = Zv();
      (Cn !== n || Rn !== r) && (nl = null, xu = jt() + 500, $l(n, r));
      do
        try {
          hy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (!0);
      Fa(), Zc.current = d, Dt = c, dn !== null ? r = 0 : (Cn = null, Rn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = di(n), c !== 0 && (o = c, r = Ws(n, c))), r === 1) throw l = Vs, $l(n, 0), wi(n, o), tn(n, jt()), l;
      if (r === 6) wi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !py(c) && (r = Oo(n, o), r === 2 && (d = di(n), d !== 0 && (o = d, r = Ws(n, d))), r === 1)) throw l = Vs, $l(n, 0), wi(n, o), tn(n, jt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            Lu(n, nr, nl);
            break;
          case 3:
            if (wi(n, o), (o & 130023424) === o && (r = $s + 500 - jt(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Es(Lu.bind(null, n, nr, nl), r);
              break;
            }
            Lu(n, nr, nl);
            break;
          case 4:
            if (wi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Cr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = jt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Kv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Es(Lu.bind(null, n, nr, nl), o);
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
    return tn(n, jt()), n.callbackNode === l ? bu.bind(null, n) : null;
  }
  function Ws(n, r) {
    var l = Bs;
    return n.current.memoizedState.isDehydrated && ($l(n, r).flags |= 256), n = Oo(n, r), n !== 2 && (r = nr, nr = l, r !== null && Du(r)), n;
  }
  function Du(n) {
    nr === null ? nr = n : nr.push.apply(nr, n);
  }
  function py(n) {
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
  function wi(n, r) {
    for (r &= ~Ps, r &= ~ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Cr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function nf(n) {
    if (Dt & 6) throw Error(D(327));
    Lo();
    var r = fi(n, 0);
    if (!(r & 1)) return tn(n, jt()), null;
    var l = Oo(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = di(n);
      o !== 0 && (r = o, l = Ws(n, o));
    }
    if (l === 1) throw l = Vs, $l(n, 0), wi(n, r), tn(n, jt()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Lu(n, nr, nl), tn(n, jt()), null;
  }
  function ku(n, r) {
    var l = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = l, Dt === 0 && (xu = jt() + 500, kl && yi());
    }
  }
  function Ou(n) {
    _i !== null && _i.tag === 0 && !(Dt & 6) && Lo();
    var r = Dt;
    Dt |= 1;
    var l = Ea.transition, o = mt;
    try {
      if (Ea.transition = null, mt = 1, n) return n();
    } finally {
      mt = o, Ea.transition = l, Dt = r, !(Dt & 6) && yi();
    }
  }
  function ko() {
    Dr = _u.current, Te(_u);
  }
  function $l(n, r) {
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
          gd(o);
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
    if (Cn = n, dn = n = Yl(n.current, null), Rn = Dr = r, Bn = 0, Vs = null, Ps = ef = wu = 0, nr = Bs = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function Jv(n, r) {
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
        if (Ji = 0, We = Oe = re = null, qr = !1, po = 0, Do.current = null, l === null || l.return === null) {
          Bn = 1, Vs = r, dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Rn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, W = E, X = W.tag;
            if (!(W.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var I = W.alternate;
              I ? (W.updateQueue = I.updateQueue, W.memoizedState = I.memoizedState, W.lanes = I.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var se = Ms(m);
            if (se !== null) {
              se.flags &= -257, Yv(se, m, E, d, r), se.mode & 1 && $v(d, z, r), r = se, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                $v(d, z, r), $d();
                break e;
              }
              T = Error(D(426));
            }
          } else if (ln && E.mode & 1) {
            var kn = Ms(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Yv(kn, m, E, d, r), zn(Co(T, E));
              break e;
            }
          }
          d = T = Co(T, E), Bn !== 4 && (Bn = 2), Bs === null ? Bs = [d] : Bs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Dd(d, T, r);
                Av(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Vl === null || !Vl.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = Bv(d, E, r);
                  Av(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        th(l);
      } catch (_e) {
        r = _e, dn === l && l !== null && (dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zv() {
    var n = Zc.current;
    return Zc.current = Ei, n === null ? Ei : n;
  }
  function $d() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Cn === null || !(wu & 268435455) && !(ef & 268435455) || wi(Cn, Rn);
  }
  function Oo(n, r) {
    var l = Dt;
    Dt |= 2;
    var o = Zv();
    (Cn !== n || Rn !== r) && (nl = null, $l(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (!0);
    if (Fa(), Dt = l, Zc.current = o, dn !== null) throw Error(D(261));
    return Cn = null, Rn = 0, Bn;
  }
  function vy() {
    for (; dn !== null; ) eh(dn);
  }
  function hy() {
    for (; dn !== null && !fn(); ) eh(dn);
  }
  function eh(n) {
    var r = ih(n.alternate, n, Dr);
    n.memoizedProps = n.pendingProps, r === null ? th(n) : dn = r, Do.current = null;
  }
  function th(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = fy(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, dn = null;
          return;
        }
      } else if (l = cy(l, r, Dr), l !== null) {
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
    var o = mt, c = Ea.transition;
    try {
      Ea.transition = null, mt = 1, nh(n, r, l, o);
    } finally {
      Ea.transition = c, mt = o;
    }
    return null;
  }
  function nh(n, r, l, o) {
    do
      Lo();
    while (_i !== null);
    if (Dt & 6) throw Error(D(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(D(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (es(n, d), n === Cn && (dn = Cn = null, Rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pl || (Pl = !0, lh(Ze, function() {
      return Lo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ea.transition, Ea.transition = null;
      var m = mt;
      mt = 1;
      var E = Dt;
      Dt |= 4, Do.current = null, zd(n, l), tl(l, n), fu(ad), cu = !!rd, ad = rd = null, n.current = l, dy(l), hr(), Dt = E, mt = m, Ea.transition = d;
    } else n.current = l;
    if (Pl && (Pl = !1, _i = n, Bl = c), d = n.pendingLanes, d === 0 && (Vl = null), Xo(l.stateNode), tn(n, jt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf) throw tf = !1, n = Pd, Pd = null, n;
    return Bl & 1 && n.tag !== 0 && Lo(), d = n.pendingLanes, d & 1 ? n === Bd ? Ys++ : (Ys = 0, Bd = n) : Ys = 0, yi(), null;
  }
  function Lo() {
    if (_i !== null) {
      var n = ns(Bl), r = Ea.transition, l = mt;
      try {
        if (Ea.transition = null, mt = 16 > n ? 16 : n, _i === null) var o = !1;
        else {
          if (n = _i, _i = null, Bl = 0, Dt & 6) throw Error(D(331));
          var c = Dt;
          for (Dt |= 4, de = n.current; de !== null; ) {
            var d = de, m = d.child;
            if (de.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (de = z; de !== null; ) {
                    var W = de;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, W, d);
                    }
                    var X = W.child;
                    if (X !== null) X.return = W, de = X;
                    else for (; de !== null; ) {
                      W = de;
                      var I = W.sibling, se = W.return;
                      if (jd(W), W === z) {
                        de = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = se, de = I;
                        break;
                      }
                      de = se;
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
                de = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, de = m;
            else e: for (; de !== null; ) {
              if (d = de, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, de = k;
                break e;
              }
              de = d.return;
            }
          }
          var w = n.current;
          for (de = w; de !== null; ) {
            m = de;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, de = M;
            else e: for (m = w; de !== null; ) {
              if (E = de, E.flags & 2048) try {
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
                de = null;
                break e;
              }
              var Z = E.sibling;
              if (Z !== null) {
                Z.return = E.return, de = Z;
                break e;
              }
              de = E.return;
            }
          }
          if (Dt = c, yi(), Pr && typeof Pr.onPostCommitFiberRoot == "function") try {
            Pr.onPostCommitFiberRoot(gl, n);
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
  function rh(n, r, l) {
    r = Co(l, r), r = Dd(n, r, 1), n = ya(n, r, 1), r = Gn(), n !== null && (El(n, 1, r), tn(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) rh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        rh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Vl === null || !Vl.has(o))) {
          n = Co(l, n), n = Bv(r, n, 1), r = ya(r, n, 1), n = Gn(), r !== null && (El(r, 1, n), tn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Cn === n && (Rn & l) === l && (Bn === 4 || Bn === 3 && (Rn & 130023424) === Rn && 500 > jt() - $s ? $l(n, 0) : Ps |= l), tn(n, r);
  }
  function ah(n, r) {
    r === 0 && (n.mode & 1 ? (r = Wu, Wu <<= 1, !(Wu & 130023424) && (Wu = 4194304)) : r = 1);
    var l = Gn();
    n = Ki(n, r), n !== null && (El(n, r, l), tn(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ah(n, l);
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
    o !== null && o.delete(r), ah(n, l);
  }
  var ih;
  ih = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qe.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, Sa(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, ln && r.flags & 1048576 && Ll(r, mu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        zs(n, r), n = r.pendingProps;
        var c = da(r, In.current);
        oo(r, l), c = xs(null, r, o, n, c, l);
        var d = Y();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, hu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, hd(r), c.updater = Al, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = To(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && kc(r), _r(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (zs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = Xr(o, n), c) {
            case 0:
              r = Hl(null, r, o, n, l);
              break e;
            case 1:
              r = et(null, r, o, n, l);
              break e;
            case 11:
              r = jl(null, r, o, n, l);
              break e;
            case 14:
              r = Ro(null, r, o, Xr(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), et(n, r, o, c, l);
      case 3:
        e: {
          if (kd(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, md(n, r), zc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Co(Error(D(423)), r), r = oy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Co(Error(D(424)), r), r = oy(n, r, o, l, c);
            break e;
          } else for (va = fa(r.stateNode.containerInfo.firstChild), pa = r, ln = !0, ja = null, l = zv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return Fv(r), n === null && Lc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, vu(o, c) ? m = null : d !== null && vu(o, d) && (r.flags |= 32), Kr(n, r), _r(n, r, m, l), r.child;
      case 6:
        return n === null && Lc(r), null;
      case 13:
        return _o(n, r, l);
      case 4:
        return yd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ul(r, null, o, l) : _r(n, r, o, l), r.child;
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Mt(Nc, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
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
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var W = z.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), pd(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), pd(m, l, r), m = d.sibling;
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
        return Fl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), zs(n, r), r.tag = 1, Un(o) ? (n = !0, hu(r)) : n = !1, oo(r, l), Vv(r, o, c), wd(r, o, c, l), To(null, r, o, !0, n, l);
      case 19:
        return Nd(n, r, l);
      case 22:
        return Xc(n, r, l);
    }
    throw Error(D(156, r.tag));
  };
  function lh(n, r) {
    return Mn(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et) return 11;
      if (n === tt) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Id(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Mu(l.children, c, d, r);
      case Ie:
        m = 8, c |= 8;
        break;
      case wn:
        return n = Ca(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
      case nn:
        return n = Ca(13, l, r, c), n.elementType = nn, n.lanes = d, n;
      case Pe:
        return n = Ca(19, l, r, c), n.elementType = Pe, n.lanes = d, n;
      case nt:
        return af(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case gn:
            m = 10;
            break e;
          case Jt:
            m = 9;
            break e;
          case Et:
            m = 11;
            break e;
          case tt:
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
  function af(n, r, l, o) {
    return n = Ca(22, n, o, r), n.elementType = nt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Ca(6, n, null, r), n.lanes = l, n;
  }
  function lf(n, r, l) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Wd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Nu(n, r, l, o, c, d, m, E, T) {
    return n = new Wd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Ua;
    n = n._reactInternals;
    e: {
      if (G(n) !== n || n.tag !== 1) throw Error(D(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
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
      if (Un(l)) return Dl(n, l, r);
    }
    return r;
  }
  function qd(n, r, l, o, c, d, m, E, T) {
    return n = Nu(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Gn(), c = ui(l), d = ma(o, c), d.callback = r ?? null, ya(l, d, c), n.current.lanes = c, El(n, c, o), tn(n, o), n;
  }
  function Gs(n, r, l, o) {
    var c = r.current, d = Gn(), m = ui(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ma(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ya(c, r, m), n !== null && (Va(n, c, m, d), Uc(n, c, m)), m;
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
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Kd(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function Cy() {
    return null;
  }
  var uh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  qs.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    Gs(n, r, null, null);
  }, qs.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ou(function() {
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
  function oh() {
  }
  function Ry(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = uf(m);
          d.call(z);
        };
      }
      var m = qd(r, o, n, 0, null, !1, !1, "", oh);
      return n._reactRootContainer = m, n[ti] = m.current, vi(n.nodeType === 8 ? n.parentNode : n), Ou(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = uf(T);
        E.call(z);
      };
    }
    var T = Nu(n, 0, !1, null, null, !1, !1, "", oh);
    return n._reactRootContainer = T, n[ti] = T.current, vi(n.nodeType === 8 ? n.parentNode : n), Ou(function() {
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
    } else m = Ry(l, r, n, c, o);
    return uf(m);
  }
  Gu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ji(r.pendingLanes);
          l !== 0 && (ts(r, l | 1), tn(r, jt()), !(Dt & 6) && (xu = jt() + 500, yi()));
        }
        break;
      case 13:
        Ou(function() {
          var o = Ki(n, 1);
          if (o !== null) {
            var c = Gn();
            Va(o, n, 1, c);
          }
        }), Kd(n, 1);
    }
  }, Cl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Va(r, n, 134217728, l);
      }
      Kd(n, 134217728);
    }
  }, rs = function(n) {
    if (n.tag === 13) {
      var r = ui(n), l = Ki(n, r);
      if (l !== null) {
        var o = Gn();
        Va(l, n, r, o);
      }
      Kd(n, r);
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
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = bc(o);
              if (!c) throw Error(D(90));
              Fr(o), xn(o, c);
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
  }, hl = ku, nu = Ou;
  var Ty = { usingClientEntryPoint: !1, Events: [hi, io, bc, Ga, ba, ku] }, Xs = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _y = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ae(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Cy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber) try {
      gl = Ks.inject(_y), Pr = Ks;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sf(r)) throw Error(D(200));
    return Ey(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!sf(n)) throw Error(D(299));
    var l = !1, o = "", c = uh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Nu(n, 1, !1, null, null, l, !1, o, c), n[ti] = r.current, vi(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = Ae(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ou(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!rl(r)) throw Error(D(200));
    return cf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!sf(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = uh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = qd(r, null, n, 1, l ?? null, c, !1, d, m), n[ti] = r.current, vi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new qs(r);
  }, Qa.render = function(n, r, l) {
    if (!rl(r)) throw Error(D(200));
    return cf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rl(n)) throw Error(D(40));
    return n._reactRootContainer ? (Ou(function() {
      cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ti] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ku, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rl(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return cf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, cR;
function hD() {
  if (cR) return Wa;
  cR = 1;
  var V = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var q = tv(), D = hR(), he = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rt = !1;
    function Vt(e) {
      rt = e;
    }
    function Ue(e) {
      if (!rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("warn", e, a);
      }
    }
    function S(e) {
      if (!rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("error", e, a);
      }
    }
    function st(e, t, a) {
      {
        var i = he.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ze = 0, ve = 1, Ge = 2, te = 3, je = 4, ue = 5, Ce = 6, pt = 7, Fn = 8, sn = 9, at = 10, Ve = 11, Ot = 12, Re = 13, ft = 14, Ie = 15, wn = 16, gn = 17, Jt = 18, Et = 19, nn = 21, Pe = 22, tt = 23, wt = 24, nt = 25, B = !0, me = !1, ie = !1, b = !1, $ = !1, ke = !0, Be = !1, Je = !0, it = !0, ht = !0, ct = !0, Ct = /* @__PURE__ */ new Set(), Pt = {}, Xn = {};
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
        Ct.add(t[i]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function xn(e) {
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
      if (xn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function dr(e) {
      if (xn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    function Vn(e, t) {
      if (xn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function ra(e, t) {
      if (xn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Ln(e);
    }
    function aa(e) {
      if (xn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    function pr(e) {
      if (xn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Ln(e);
    }
    var ia = 0, Jn = 1, Sr = 2, cn = 3, la = 4, ua = 5, oa = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", De = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + ne + "][" + De + "]*$"), zt = {}, Lt = {};
    function bn(e) {
      return Kn.call(Lt, e) ? !0 : Kn.call(zt, e) ? !1 : lt.test(e) ? (Lt[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
    function At(e, t, a, i, u, s, f) {
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
      Zt[e] = new At(
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
      Zt[t] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[e] = new At(
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
      Zt[t] = new At(
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
      Zt[t] = new At(
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
      Zt[t] = new At(
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
      Zt[e] = new At(
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
    var nu = "xlinkHref";
    Zt[nu] = new At(
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
      Zt[e] = new At(
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
    var ru = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ml = !1;
    function qa(e) {
      !ml && ru.test(e) && (ml = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
          var x = u.type, _;
          x === cn || x === la && a === !0 ? _ = "" : (gr(a, y), _ = "" + a, u.sanitizeURL && qa(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var Er = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), yl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), ut = Symbol.for("react.scope"), Mn = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), hr = Symbol.for("react.cache"), jt = Symbol.for("react.tracing_marker"), ka = Symbol.iterator, Nn = "@@iterator";
    function Vr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ka && e[ka] || e[Nn];
      return typeof t == "function" ? t : null;
    }
    var Ze = Object.assign, zi = 0, Ai, gl, Pr, Xo, Cr, Ko, Jo;
    function Zo() {
    }
    Zo.__reactDisabledLog = !0;
    function au() {
      {
        if (zi === 0) {
          Ai = console.log, gl = console.info, Pr = console.warn, Xo = console.error, Cr = console.group, Ko = console.groupCollapsed, Jo = console.groupEnd;
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
        zi++;
      }
    }
    function Wu() {
      {
        if (zi--, zi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, e, {
              value: Ai
            }),
            info: Ze({}, e, {
              value: gl
            }),
            warn: Ze({}, e, {
              value: Pr
            }),
            error: Ze({}, e, {
              value: Xo
            }),
            group: Ze({}, e, {
              value: Cr
            }),
            groupCollapsed: Ze({}, e, {
              value: Ko
            }),
            groupEnd: Ze({}, e, {
              value: Jo
            })
          });
        }
        zi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = he.ReactCurrentDispatcher, fi;
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
      var iu = typeof WeakMap == "function" ? WeakMap : Map;
      di = new iu();
    }
    function lu(e, t) {
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
      s = ji.current, ji.current = null, au();
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
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && di.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, ji.current = s, Wu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", U = _ ? Oa(_) : "";
      return typeof e == "function" && di.set(e, U), U;
    }
    function El(e, t, a) {
      return lu(e, !0);
    }
    function es(e, t, a) {
      return lu(e, !1);
    }
    function ts(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, ts(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Le:
          return Oa("Suspense");
        case dt:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return es(e.render);
          case Rt:
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
        case ue:
          return Oa(e.type);
        case wn:
          return Oa("Lazy");
        case Re:
          return Oa("Suspense");
        case Et:
          return Oa("SuspenseList");
        case ze:
        case Ge:
        case Ie:
          return es(e.type);
        case Ve:
          return es(e.type.render);
        case ve:
          return El(e.type);
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
    function Cl(e, t, a) {
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
        case yl:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case Le:
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
            return Cl(e, e.render, "ForwardRef");
          case Rt:
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
    function uu(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case sn:
          var i = a;
          return uu(i) + ".Consumer";
        case at:
          var u = a;
          return uu(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ve:
          return qu(a, a.render, "ForwardRef");
        case pt:
          return "Fragment";
        case ue:
          return a;
        case je:
          return "Portal";
        case te:
          return "Root";
        case Ce:
          return "Text";
        case wn:
          return yt(a);
        case Fn:
          return a === Ui ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case nn:
          return "Scope";
        case Re:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case nt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ve:
        case ze:
        case gn:
        case Ge:
        case ft:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ka = he.ReactDebugCurrentFrame, vn = null, Br = !1;
    function La() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function Rl() {
      return vn === null ? "" : Gu(vn);
    }
    function rn() {
      Ka.getCurrentStack = null, vn = null, Br = !1;
    }
    function hn(e) {
      Ka.getCurrentStack = e === null ? null : Rl, vn = e, Br = !1;
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
    function ou(e, t) {
      Xu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function su(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Fi(e) {
      var t = "";
      return e && (su(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function cu(e) {
      var t = su(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
      Tl(e) || (e._valueTracker = cu(e));
    }
    function Ku(e) {
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
    var Vi = !1, Ju = !1, is = !1, Za = !1;
    function Zu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Ze({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ju && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Ju = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Vi = !0);
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
      j(a, t), fe(a, t);
    }
    function fe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        gr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ku(f), j(f, p);
          }
        }
      }
    }
    function $e(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var ot = !1, Ft = !1, $t = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ft || (Ft = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($t || ($t = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ot && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ot = !0);
    }
    function It(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var an = Array.isArray;
    function xt(e) {
      return an(e);
    }
    var _l;
    _l = !1;
    function eo() {
      var e = La();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ls = ["value", "defaultValue"];
    function us(e) {
      {
        ou("select", e);
        for (var t = 0; t < ls.length; t++) {
          var a = ls[t];
          if (e[a] != null) {
            var i = xt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, eo()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, eo());
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
        for (var g = $r(Ja(a)), x = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          x === null && !u[_].disabled && (x = u[_]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function os(e, t) {
      return Ze({}, t, {
        value: void 0
      });
    }
    function ss(e, t) {
      var a = e;
      us(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_l && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _l = !0);
    }
    function Bf(e, t) {
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
    function nv(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var rv = !1;
    function $f(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ze({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function av(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component"), rv = !0);
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
    function iv(e, t) {
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
    function Im(e, t) {
      iv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Qm = "http://www.w3.org/1998/Math/MathML", gc = "http://www.w3.org/2000/svg";
    function Yf(e) {
      switch (e) {
        case "svg":
          return gc;
        case "math":
          return Qm;
        default:
          return Bi;
      }
    }
    function If(e, t) {
      return e == null || e === Bi ? Yf(t) : e === gc && t === "foreignObject" ? Bi : e;
    }
    var Wm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Sc, lv = Wm(function(e, t) {
      if (e.namespaceURI === gc && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, $i = 3, En = 8, ca = 9, Qf = 11, cs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, uv = {
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
    function ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(to).forEach(function(e) {
      sv.forEach(function(t) {
        to[ov(t, e)] = to[e];
      });
    });
    function wl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(to.hasOwnProperty(e) && to[e]) ? t + "px" : (ra(t, e), ("" + t).trim());
    }
    var Gm = /([A-Z])/g, qm = /^ms-/;
    function Xm(e) {
      return e.replace(Gm, "-$1").toLowerCase().replace(qm, "-ms-");
    }
    var Wf = function() {
    };
    {
      var cv = /^(?:webkit|moz|o)[A-Z]/, fs = /^-ms-/, ds = /-(.)/g, fv = /;\s*$/, Yi = {}, Gf = {}, qf = !1, Ec = !1, Xf = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xf(e.replace(fs, "ms-"))
        ));
      }, pv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        Gf.hasOwnProperty(t) && Gf[t] || (Gf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fv, "")));
      }, Km = function(e, t) {
        qf || (qf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Jm = function(e, t) {
        Ec || (Ec = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Wf = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : cv.test(e) ? pv(e) : fv.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? Km(e, t) : isFinite(t) || Jm(e, t));
      };
    }
    var Zm = Wf;
    function ey(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += wl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Zm(i, t[i]);
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
        for (var i = uv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function mv(e, t) {
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
    var yv = {
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
    }, gv = Ze({
      menuitem: !0
    }, yv), Sv = "__html";
    function ps(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function fu(e, t) {
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
    }, du = {
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
    }, xl = {}, vs = new RegExp("^(aria)-[" + De + "]*$"), Kf = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function Ev(e, t) {
      {
        if (Kn.call(xl, t) && xl[t])
          return !0;
        if (Kf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = du.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), xl[t] = !0, !0;
        }
        if (vs.test(t)) {
          var u = t.toLowerCase(), s = du.hasOwnProperty(u) ? u : null;
          if (s == null)
            return xl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), xl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Rc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Ev(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ro(e, t) {
      fu(e, t) || Rc(e, t);
    }
    var Tc = !1;
    function Cv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tc && (Tc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hs = function() {
    };
    {
      var mr = {}, Jf = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + De + "]*$"), _v = new RegExp("^(aria)[A-Z][" + De + "]*$");
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
          if (Jf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), mr[t] = !0, !0;
        } else if (Jf.test(t))
          return Rv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mr[t] = !0, !0;
        if (Tv.test(t) || _v.test(t))
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
    function bl(e, t, a) {
      fu(e, t) || wv(e, t, a);
    }
    var _c = 1, ms = 2, ys = 4, ty = _c | ms | ys, Ii = null;
    function ny(e) {
      Ii !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ii = e;
    }
    function xv() {
      Ii === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ii = null;
    }
    function bv(e) {
      return e === Ii;
    }
    function qt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var gs = null, Qi = null, vi = null;
    function Zf(e) {
      var t = Uo(e);
      if (t) {
        if (typeof gs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          gs(t.stateNode, t.type, i);
        }
      }
    }
    function ed(e) {
      gs = e;
    }
    function ao(e) {
      Qi ? vi ? vi.push(e) : vi = [e] : Qi = e;
    }
    function wc() {
      return Qi !== null || vi !== null;
    }
    function pu() {
      if (Qi) {
        var e = Qi, t = vi;
        if (Qi = null, vi = null, Zf(e), t)
          for (var a = 0; a < t.length; a++)
            Zf(t[a]);
      }
    }
    var td = function(e, t) {
      return e(t);
    }, Dv = function() {
    }, nd = !1;
    function kv() {
      var e = wc();
      e && (Dv(), pu());
    }
    function Ss(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return td(e, t, a);
      } finally {
        nd = !1, kv();
      }
    }
    function xc(e, t, a) {
      td = e, Dv = a;
    }
    function rd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
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
          return !!(a.disabled && rd(t));
        default:
          return !1;
      }
    }
    function vu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
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
    function id(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ov = id;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, _ = !0, U = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          ld.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          x = !0, F(), a.apply(i, le), _ = !1;
        }
        var be, _t = !1, vt = !1;
        function O(L) {
          if (be = L.error, _t = !0, be === null && L.colno === 0 && L.lineno === 0 && (vt = !0), L.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ld.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), ld.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && _ && (_t ? vt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", O), !x)
          return F(), id.apply(this, arguments);
      };
    }
    var ud = Ov, fa = !1, Rs = null, Wi = !1, Na = null, Ts = {
      onError: function(e) {
        fa = !0, Rs = e;
      }
    };
    function ti(e, t, a, i, u, s, f, p, v) {
      fa = !1, Rs = null, ud.apply(Ts, arguments);
    }
    function od(e, t, a, i, u, s, f, p, v) {
      if (ti.apply(this, arguments), fa) {
        var y = Gi();
        Wi || (Wi = !0, Na = y);
      }
    }
    function ry() {
      if (Wi) {
        var e = Na;
        throw Wi = !1, Na = null, e;
      }
    }
    function ay() {
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
    var Me = (
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
    ), Mt = (
      /*                */
      16
    ), Ua = (
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
    ), Un = (
      /*                     */
      1024
    ), Ir = (
      /*                      */
      2048
    ), mi = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), hu = (
      /*             */
      16384
    ), Lv = Ir | Te | In | da | Un | hu, qi = (
      /*               */
      32767
    ), kl = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), Mv = (
      /*                       */
      1048576
    ), yi = (
      /*                    */
      2097152
    ), za = (
      /*                 */
      4194304
    ), Ol = (
      /*                */
      8388608
    ), Aa = (
      /*               */
      16777216
    ), mu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Te | Un | 0
    ), Wr = Xt | Te | Mt | Ua | da | mi | Dl, ri = Te | In | da | Dl, Gr = Ir | Mt, tr = za | Ol | yi, yu = he.ReactCurrentOwner;
    function Ll(e) {
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
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Ll(e) === e;
    }
    function va(e) {
      {
        var t = yu.current;
        if (t !== null && t.tag === ve) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = hi(e);
      return u ? Ll(u) === u : !1;
    }
    function ln(e) {
      if (Ll(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ja(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ll(e);
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
    function sd(e) {
      var t = ja(e);
      return t !== null ? cd(t) : null;
    }
    function cd(e) {
      if (e.tag === ue || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = cd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fd(e) {
      var t = ja(e);
      return t !== null ? Lc(t) : null;
    }
    function Lc(e) {
      if (e.tag === ue || e.tag === Ce)
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
    var dd = D.unstable_scheduleCallback, Mc = D.unstable_cancelCallback, Nv = D.unstable_shouldYield, lo = D.unstable_requestPaint, zn = D.unstable_now, iy = D.unstable_getCurrentPriorityLevel, Ml = D.unstable_ImmediatePriority, uo = D.unstable_UserBlockingPriority, Nl = D.unstable_NormalPriority, Uv = D.unstable_LowPriority, Ul = D.unstable_IdlePriority, zv = D.unstable_yieldValue, Nc = D.unstable_setDisableYieldValue, Xi = null, Dn = null, ae = null, Fa = !1, ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function pd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        it && (e = Ze({}, e, {
          getLaneLabelMap: zl,
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
                i = Ml;
                break;
              case Ri:
                i = uo;
                break;
              case li:
                i = Nl;
                break;
              case As:
                i = Ul;
                break;
              default:
                i = Nl;
                break;
            }
            Dn.onCommitFiberRoot(Xi, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function gu(e) {
      if (Dn && typeof Dn.onPostCommitFiberRoot == "function")
        try {
          Dn.onPostCommitFiberRoot(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function vd(e) {
      if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
          Dn.onCommitFiberUnmount(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof zv == "function" && (Nc(e), Vt(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Xi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      ae = e;
    }
    function zl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xs; a++) {
          var i = uy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function hd(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function md() {
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
    function Av() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function zc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function jv() {
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
    function Su(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function yd(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function fo(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function Fv() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function gd(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function mn() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function ws(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function Sd() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function Ac() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function jc(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function Ed(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function Ji(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var re = (
      /*                         */
      0
    ), Oe = (
      /*                 */
      1
    ), We = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), qr = (
      /*              */
      16
    ), po = Math.clz32 ? Math.clz32 : Cd, ly = Math.log, yr = Math.LN2;
    function Cd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ly(t) / yr | 0) | 0;
    }
    var xs = 31, Y = (
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
    ), vo = (
      /*                */
      32
    ), Eu = (
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
    ), Vc = (
      /*                        */
      512
    ), Pc = (
      /*                        */
      1024
    ), Cu = (
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
    ), Ru = (
      /*                             */
      4194304
    ), Gc = (
      /*                             */
      8388608
    ), Rd = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Td = (
      /*                             */
      67108864
    ), Hv = Ru, go = (
      /*          */
      134217728
    ), _d = (
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
    function uy(e) {
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
        if (e & vo)
          return "TransitionHydration";
        if (e & Eu)
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
    var en = -1, Xr = ho, Eo = Ru;
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
        case vo:
          return vo;
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Cu:
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
          return e & Eu;
        case Ru:
        case Gc:
        case Rd:
        case qc:
        case Td:
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
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Al(p);
        else {
          var v = f & s;
          v !== Y && (i = Al(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Al(y) : s !== Y && (i = Al(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = jl(i), x = jl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ii && (x & Eu) !== Y
        )
          return t;
      }
      (i & ai) !== Y && (i |= a & ii);
      var _ = e.entangledLanes;
      if (_ !== Y)
        for (var U = e.entanglements, A = i & _; A > 0; ) {
          var F = Fl(A), le = 1 << F;
          i |= U[F], A &= ~le;
        }
      return i;
    }
    function Vv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Fl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Pv(e, t) {
      switch (e) {
        case we:
        case Si:
        case ai:
          return t + 250;
        case Zi:
        case ii:
        case vo:
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Cu:
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
        case Ru:
        case Gc:
        case Rd:
        case qc:
        case Td:
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
        var p = Fl(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Pv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Co(e) {
      return Al(e.pendingLanes);
    }
    function Ls(e) {
      var t = e.pendingLanes & ~ga;
      return t !== Y ? t : t & ga ? ga : Y;
    }
    function xd(e) {
      return (e & we) !== Y;
    }
    function bd(e) {
      return (e & _d) !== Y;
    }
    function Dd(e) {
      return (e & ks) === e;
    }
    function Bv(e) {
      var t = we | ai | ii;
      return (e & t) === Y;
    }
    function $v(e) {
      return (e & Eu) === e;
    }
    function Ms(e, t) {
      var a = Si | ai | Zi | ii;
      return (t & a) !== Y;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Iv(e) {
      return (e & Eu) !== Y;
    }
    function Tr() {
      var e = Xr;
      return Xr <<= 1, (Xr & Eu) === Y && (Xr = ho), e;
    }
    function _r() {
      var e = Eo;
      return Eo <<= 1, (Eo & ks) === Y && (Eo = Ru), e;
    }
    function jl(e) {
      return e & -e;
    }
    function Ro(e) {
      return jl(e);
    }
    function Fl(e) {
      return 31 - po(e);
    }
    function Xc(e) {
      return Fl(e);
    }
    function Kr(e, t) {
      return (e & t) !== Y;
    }
    function Hl(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function To(e, t) {
      return e & ~t;
    }
    function kd(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Od(e, t) {
      return e !== Kt && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < xs; a++)
        t.push(e);
      return t;
    }
    function _o(e, t, a) {
      e.pendingLanes |= t, t !== Ei && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Xc(t);
      i[u] = a;
    }
    function Ld(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Fl(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function Us(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function sy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p;
        i[p] = Y, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function Kc(e, t) {
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
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Cu:
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
        case Ru:
        case Gc:
        case Rd:
        case qc:
        case Td:
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
    function Nd(e, t, a) {
      if (ha)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Xc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zs(e, t) {
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
    var Sa = we, Ri = ai, li = ii, As = Ei, wo = Kt;
    function wr() {
      return wo;
    }
    function bt(e) {
      wo = e;
    }
    function cy(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function fy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Jc(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function Qv(e) {
      var t = jl(e);
      return Qn(Sa, t) ? Qn(Ri, t) ? bd(t) ? li : As : Ri : Sa;
    }
    function de(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Tu;
    function Ud(e) {
      Tu = e;
    }
    function Wv(e) {
      Tu(e);
    }
    var zd;
    function js(e) {
      zd = e;
    }
    var Fs;
    function Ad(e) {
      Fs = e;
    }
    var jd;
    function Gv(e) {
      jd = e;
    }
    var Fd;
    function Hd(e) {
      Fd = e;
    }
    var Hs = !1, An = [], Wn = null, xr = null, el = null, xo = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), tl = [], Ti = [
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
    function dy(e) {
      return Ti.indexOf(e) > -1;
    }
    function qv(e, t, a, i, u) {
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
          xr = null;
          break;
        case "mouseover":
        case "mouseout":
          el = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          xo.delete(a);
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
        var f = qv(t, a, i, u, s);
        if (t !== null) {
          var p = Uo(t);
          p !== null && zd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Xv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Wn = bo(Wn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return xr = bo(xr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return el = bo(el, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return xo.set(y, bo(xo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return br.set(x, bo(br.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Kv(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = Ll(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = kc(a);
            if (u !== null) {
              e.blockedOn = u, Fd(e.priority, function() {
                Fs(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (de(s)) {
              e.blockedOn = Oc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zc(e) {
      for (var t = jd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tl.length && Qn(t, tl[i].priority); i++)
        ;
      tl.splice(i, 0, a), i === 0 && Kv(a);
    }
    function Do(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = $s(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), xv();
        } else {
          var f = Uo(i);
          return f !== null && zd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ea(e, t, a) {
      Do(e) && a.delete(t);
    }
    function Dt() {
      Hs = !1, Wn !== null && Do(Wn) && (Wn = null), xr !== null && Do(xr) && (xr = null), el !== null && Do(el) && (el = null), xo.forEach(Ea), br.forEach(Ea);
    }
    function Cn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hs || (Hs = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, Dt)));
    }
    function dn(e) {
      if (An.length > 0) {
        Cn(An[0], e);
        for (var t = 1; t < An.length; t++) {
          var a = An[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wn !== null && Cn(Wn, e), xr !== null && Cn(xr, e), el !== null && Cn(el, e);
      var i = function(p) {
        return Cn(p, e);
      };
      xo.forEach(i), br.forEach(i);
      for (var u = 0; u < tl.length; u++) {
        var s = tl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tl.length > 0; ) {
        var f = tl[0];
        if (f.blockedOn !== null)
          break;
        Kv(f), f.blockedOn === null && tl.shift();
      }
    }
    var Rn = he.ReactCurrentBatchConfig, Dr = !0;
    function _u(e) {
      Dr = !!e;
    }
    function Bn() {
      return Dr;
    }
    function Vs(e, t, a) {
      var i = xu(t), u;
      switch (i) {
        case Sa:
          u = wu;
          break;
        case Ri:
          u = ef;
          break;
        case li:
        default:
          u = Ps;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wu(e, t, a, i) {
      var u = wr(), s = Rn.transition;
      Rn.transition = null;
      try {
        bt(Sa), Ps(e, t, a, i);
      } finally {
        bt(u), Rn.transition = s;
      }
    }
    function ef(e, t, a, i) {
      var u = wr(), s = Rn.transition;
      Rn.transition = null;
      try {
        bt(Ri), Ps(e, t, a, i);
      } finally {
        bt(u), Rn.transition = s;
      }
    }
    function Ps(e, t, a, i) {
      Dr && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var u = $s(e, t, a, i);
      if (u === null) {
        Ly(e, t, i, nr, a), Vd(e, i);
        return;
      }
      if (Xv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Vd(e, i), t & ys && dy(e)) {
        for (; u !== null; ) {
          var s = Uo(u);
          s !== null && Wv(s);
          var f = $s(e, t, a, i);
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
    function $s(e, t, a, i) {
      nr = null;
      var u = qt(i), s = ec(u);
      if (s !== null) {
        var f = Ll(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = kc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (de(y))
              return Oc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return nr = s, null;
    }
    function xu(e) {
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
          var t = iy();
          switch (t) {
            case Ml:
              return Sa;
            case uo:
              return Ri;
            case Nl:
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
    function Pd(e, t, a, i) {
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
    function Ys(e) {
      return Pl = e, _i = Qs(), !0;
    }
    function Bd() {
      Pl = null, _i = null, Bl = null;
    }
    function Is() {
      if (Bl)
        return Bl;
      var e, t = _i, a = t.length, i, u = Qs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Bl = u.slice(e, p), Bl;
    }
    function Qs() {
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
      return Ze(t.prototype, {
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
    var bu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ws = tn(bu), Du = Ze({}, bu, {
      view: 0,
      detail: 0
    }), py = tn(Du), wi, nf, ku;
    function Ou(e) {
      e !== ku && (ku && e.type === "mousemove" ? (wi = e.screenX - ku.screenX, nf = e.screenY - ku.screenY) : (wi = 0, nf = 0), ku = e);
    }
    var ko = Ze({}, Du, {
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
        return "movementX" in e ? e.movementX : (Ou(e), wi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : nf;
      }
    }), $l = tn(ko), Jv = Ze({}, ko, {
      dataTransfer: 0
    }), Zv = tn(Jv), $d = Ze({}, Du, {
      relatedTarget: 0
    }), Oo = tn($d), vy = Ze({}, bu, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hy = tn(vy), eh = Ze({}, bu, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), th = tn(eh), Lu = Ze({}, bu, {
      data: 0
    }), nh = tn(Lu), Lo = nh, rh = {
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
    function my(e) {
      if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Gn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tn[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function yy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return yy;
    }
    var ih = Ze({}, Du, {
      key: my,
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
    }), lh = tn(ih), gy = Ze({}, ko, {
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
    }), Ca = tn(gy), Id = Ze({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), Sy = tn(Id), Yl = Ze({}, bu, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rf = tn(Yl), Mu = Ze({}, ko, {
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
    }), af = tn(Mu), Qd = [9, 13, 27, 32], lf = 229, Wd = Sn && "CompositionEvent" in window, Nu = null;
    Sn && "documentMode" in document && (Nu = document.documentMode);
    var Ey = Sn && "TextEvent" in window && !Nu, Gd = Sn && (!Wd || Nu && Nu > 8 && Nu <= 11), qd = 32, Gs = String.fromCharCode(qd);
    function uf() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Xd = !1;
    function Kd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Cy(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function uh(e, t) {
      return e === "keydown" && t.keyCode === lf;
    }
    function of(e, t) {
      switch (e) {
        case "keyup":
          return Qd.indexOf(t.keyCode) !== -1;
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
    function oh(e, t, a, i, u) {
      var s, f;
      if (Wd ? s = Cy(t) : rl ? of(t, i) && (s = "onCompositionEnd") : uh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Gd && !sf(i) && (!rl && s === "onCompositionStart" ? rl = Ys(u) : s === "onCompositionEnd" && rl && (f = Is()));
      var p = ph(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
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
    function Ry(e, t) {
      switch (e) {
        case "compositionend":
          return qs(t);
        case "keypress":
          var a = t.which;
          return a !== qd ? null : (Xd = !0, Gs);
        case "textInput":
          var i = t.data;
          return i === Gs && Xd ? null : i;
        default:
          return null;
      }
    }
    function cf(e, t) {
      if (rl) {
        if (e === "compositionend" || !Wd && of(e, t)) {
          var a = Is();
          return Bd(), rl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Kd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Gd && !sf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ty(e, t, a, i, u) {
      var s;
      if (Ey ? s = Ry(t, i) : s = cf(t, i), !s)
        return null;
      var f = ph(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Lo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Xs(e, t, a, i, u, s, f) {
      oh(e, t, a, i, u), Ty(e, t, a, i, u);
    }
    var _y = {
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
      return t === "input" ? !!_y[e.type] : t === "textarea";
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
      var u = ph(t, "onChange");
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
      L0(e, 0);
    }
    function T(e) {
      var t = mf(e);
      if (Ku(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var W = !1;
    Sn && (W = n("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", se);
    }
    function I() {
      o && (o.detachEvent("onpropertychange", se), o = null, c = null);
    }
    function se(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (I(), X(t, a)) : e === "focusout" && I();
    }
    function Ee(e, t) {
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
    function w(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || $e(e, "number", e.value);
    }
    function Z(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window, v, y;
      if (d(p) ? v = z : Ks(p) ? W ? v = w : (v = Ee, y = ye) : kn(p) && (v = k), v) {
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
      if (p && !bv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (ec(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var _, U;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (_ = a, U = A ? ec(A) : null, U !== null) {
            var F = Ll(U);
            (U !== F || U.tag !== ue && U.tag !== Ce) && (U = null);
          }
        } else
          _ = null, U = a;
        if (_ !== U) {
          var le = $l, Ne = "onMouseLeave", be = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = Ca, Ne = "onPointerLeave", be = "onPointerEnter", _t = "pointer");
          var vt = _ == null ? g : mf(_), O = U == null ? g : mf(U), H = new le(Ne, _t + "leave", _, i, u);
          H.target = vt, H.relatedTarget = O;
          var L = null, K = ec(u);
          if (K === a) {
            var pe = new le(be, _t + "enter", U, i, u);
            pe.target = O, pe.relatedTarget = vt, L = pe;
          }
          HR(e, H, L, _, U);
        }
      }
    }
    function He(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : He;
    function _n(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Kn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function kt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Il(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function sh(e, t) {
      for (var a = kt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = kt(Il(a));
      }
    }
    function gR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return SR(e, u, s, f, p);
    }
    function SR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var _ = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
          x = g, g = _;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function ER(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = sh(e, f), g = sh(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function S0(e) {
      return e && e.nodeType === $i;
    }
    function E0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : S0(e) ? !1 : S0(t) ? E0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function CR(e) {
      return e && e.ownerDocument && E0(e.ownerDocument.documentElement, e);
    }
    function RR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function C0() {
      for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
        if (RR(t))
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
    function TR() {
      var e = C0();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? wR(e) : null
      };
    }
    function _R(e) {
      var t = C0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && CR(a)) {
        i !== null && wy(a) && xR(a, i);
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
      } : t = gR(e), t || {
        start: 0,
        end: 0
      };
    }
    function xR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ER(e, t);
    }
    var bR = Sn && "documentMode" in document && document.documentMode <= 11;
    function DR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, xy = null, Jd = null, by = !1;
    function kR(e) {
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
    function OR(e) {
      return e.window === e ? e.document : e.nodeType === ca ? e : e.ownerDocument;
    }
    function R0(e, t, a) {
      var i = OR(a);
      if (!(by || ff == null || ff !== pi(i))) {
        var u = kR(ff);
        if (!Jd || !_n(Jd, u)) {
          Jd = u;
          var s = ph(xy, "onSelect");
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
    function LR(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ks(p) || p.contentEditable === "true") && (ff = p, xy = a, Jd = null);
          break;
        case "focusout":
          ff = null, xy = null, Jd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, R0(e, i, u);
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
          if (bR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          R0(e, i, u);
      }
    }
    function ch(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: ch("Animation", "AnimationEnd"),
      animationiteration: ch("Animation", "AnimationIteration"),
      animationstart: ch("Animation", "AnimationStart"),
      transitionend: ch("Transition", "TransitionEnd")
    }, Dy = {}, T0 = {};
    Sn && (T0 = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function fh(e) {
      if (Dy[e])
        return Dy[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in T0)
          return Dy[e] = t[a];
      return e;
    }
    var _0 = fh("animationend"), w0 = fh("animationiteration"), x0 = fh("animationstart"), b0 = fh("transitionend"), D0 = /* @__PURE__ */ new Map(), k0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mo(e, t) {
      D0.set(e, t), Fr(t, [e]);
    }
    function MR() {
      for (var e = 0; e < k0.length; e++) {
        var t = k0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mo(a, "on" + i);
      }
      Mo(_0, "onAnimationEnd"), Mo(w0, "onAnimationIteration"), Mo(x0, "onAnimationStart"), Mo("dblclick", "onDoubleClick"), Mo("focusin", "onFocus"), Mo("focusout", "onBlur"), Mo(b0, "onTransitionEnd");
    }
    function NR(e, t, a, i, u, s, f) {
      var p = D0.get(t);
      if (p !== void 0) {
        var v = Ws, y = t;
        switch (t) {
          case "keypress":
            if (Gn(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = lh;
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
            v = Zv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sy;
            break;
          case _0:
          case w0:
          case x0:
            v = hy;
            break;
          case b0:
            v = rf;
            break;
          case "scroll":
            v = py;
            break;
          case "wheel":
            v = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = th;
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
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = jR(a, p, i.type, g, x);
          if (_.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: _
            });
          }
        }
      }
    }
    MR(), _e(), r(), DR(), uf();
    function UR(e, t, a, i, u, s, f) {
      NR(e, t, a, i, u, s);
      var p = (s & ty) === 0;
      p && (Fe(e, t, a, i, u), Z(e, t, a, i, u), LR(e, t, a, i, u), Xs(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function O0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, od(i, t, void 0, e), e.currentTarget = null;
    }
    function zR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          O0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, _ = g.currentTarget, U = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          O0(e, U, _), i = x;
        }
    }
    function L0(e, t) {
      for (var a = (t & ys) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        zR(s, f, a);
      }
      ry();
    }
    function AR(e, t, a, i, u) {
      var s = qt(a), f = [];
      UR(f, e, i, a, s, t), L0(f, t);
    }
    function yn(e, t) {
      ky.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = d_(t), u = VR(e);
      i.has(u) || (M0(t, e, ms, a), i.add(u));
    }
    function Oy(e, t, a) {
      ky.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ys), M0(a, e, i, t);
    }
    var dh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[dh]) {
        e[dh] = !0, Ct.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || Oy(a, !1, e), Oy(a, !0, e));
        });
        var t = e.nodeType === ca ? e : e.ownerDocument;
        t !== null && (t[dh] || (t[dh] = !0, Oy("selectionchange", !1, t)));
      }
    }
    function M0(e, t, a, i, u) {
      var s = Vs(e, t, a), f = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : tf(e, t, s) : f !== void 0 ? Vl(e, t, s, f) : nl(e, t, s);
    }
    function N0(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function Ly(e, t, a, i, u) {
      var s = i;
      if (!(t & _c) && !(t & ms)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === je) {
              var y = p.stateNode.containerInfo;
              if (N0(y, f))
                break;
              if (v === je)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === te || x === je) {
                    var _ = g.stateNode.containerInfo;
                    if (N0(_, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = ec(y);
                if (U === null)
                  return;
                var A = U.tag;
                if (A === ue || A === Ce) {
                  p = s = U;
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
        return AR(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function jR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, _ = x.stateNode, U = x.tag;
        if (U === ue && _ !== null && (g = _, p !== null)) {
          var A = vu(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ph(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = vu(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = vu(u, t);
          g != null && i.push(tp(u, g, v));
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
      while (e && e.tag !== ue);
      return e || null;
    }
    function FR(e, t) {
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
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === ue && g !== null) {
          var _ = g;
          if (u) {
            var U = vu(p, s);
            U != null && f.unshift(tp(p, U, _));
          } else if (!u) {
            var A = vu(p, s);
            A != null && f.push(tp(p, A, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function HR(e, t, a, i, u) {
      var s = i && u ? FR(i, u) : null;
      i !== null && U0(e, t, i, s, !1), u !== null && a !== null && U0(e, a, u, s, !0);
    }
    function VR(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, np = "dangerouslySetInnerHTML", vh = "suppressContentEditableWarning", No = "suppressHydrationWarning", z0 = "autoFocus", Js = "children", Zs = "style", hh = "__html", My, mh, rp, A0, yh, j0, F0;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, mh = function(e, t) {
      ro(e, t), Cv(e, t), bl(e, t, {
        registrationNameDependencies: Pt,
        possibleRegistrationNames: Xn
      });
    }, j0 = Sn && !document.documentMode, rp = function(e, t, a) {
      if (!Pa) {
        var i = gh(a), u = gh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, A0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, yh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, F0 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var PR = /\r\n?/g, BR = /\u0000|\uFFFD/g;
    function gh(e) {
      aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(PR, `
`).replace(BR, "");
    }
    function Sh(e, t, a, i) {
      var u = gh(t), s = gh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H0(e) {
      return e.nodeType === ca ? e : e.ownerDocument;
    }
    function $R() {
    }
    function Eh(e) {
      e.onclick = $R;
    }
    function YR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), hv(t, f);
          else if (s === np) {
            var p = f ? f[hh] : void 0;
            p != null && lv(t, p);
          } else if (s === Js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && cs(t, f);
            } else typeof f == "number" && cs(t, "" + f);
          else s === vh || s === No || s === z0 || (Pt.hasOwnProperty(s) ? f != null && (typeof f != "function" && yh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Ni(t, s, f, u));
        }
    }
    function IR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Zs ? hv(e, f) : s === np ? lv(e, f) : s === Js ? cs(e, f) : Ni(e, s, f, i);
      }
    }
    function QR(e, t, a, i) {
      var u, s = H0(a), f, p = i;
      if (p === Bi && (p = Yf(e)), p === Bi) {
        if (u = fu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
    function WR(e, t) {
      return H0(t).createTextNode(e);
    }
    function GR(e, t, a, i) {
      var u = fu(t, a);
      mh(t, a);
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
          for (var f = 0; f < Zd.length; f++)
            yn(Zd[f], e);
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
          av(e, a), s = $f(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ps(t, s), YR(t, e, i, s, u), t) {
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
          Bf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Eh(e);
          break;
      }
    }
    function qR(e, t, a, i, u) {
      mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = os(e, a), p = os(e, i), s = [];
          break;
        case "textarea":
          f = $f(e, a), p = $f(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Eh(e);
          break;
      }
      ps(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Zs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Js || v === vh || v === No || v === z0 || (Pt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === U || _ == null && U == null))
          if (v === Zs)
            if (_ && Object.freeze(_), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && U[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === np) {
            var A = _ ? _[hh] : void 0, F = U ? U[hh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Js ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === vh || v === No || (Pt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && yh(v, _), v === "onScroll" && yn("scroll", e)), !s && U !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (mv(g, p[Zs]), (s = s || []).push(Zs, g)), s;
    }
    function XR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = fu(a, i), f = fu(a, u);
      switch (IR(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          iv(e, u);
          break;
        case "select":
          Ym(e, u);
          break;
      }
    }
    function KR(e) {
      {
        var t = e.toLowerCase();
        return Cc.hasOwnProperty(t) && Cc[t] || null;
      }
    }
    function JR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = fu(t, a), mh(t, a), t) {
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
          for (var y = 0; y < Zd.length; y++)
            yn(Zd[y], e);
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
          av(e, a), yn("invalid", e);
          break;
      }
      ps(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var _ = g[x].name.toLowerCase();
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
              v.add(g[x].name);
          }
        }
      }
      var U = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Js)
            typeof F == "string" ? e.textContent !== F && (a[No] !== !0 && Sh(e.textContent, F, s, f), U = [Js, F]) : typeof F == "number" && e.textContent !== "" + F && (a[No] !== !0 && Sh(e.textContent, F, s, f), U = [Js, "" + F]);
          else if (Pt.hasOwnProperty(A))
            F != null && (typeof F != "function" && yh(A, F), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Ne = p && Be ? null : Yn(A);
            if (a[No] !== !0) {
              if (!(A === vh || A === No || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var be = e.innerHTML, _t = F ? F[hh] : void 0;
                  if (_t != null) {
                    var vt = F0(e, _t);
                    vt !== be && rp(A, be, vt);
                  }
                } else if (A === Zs) {
                  if (v.delete(A), j0) {
                    var O = ey(F);
                    le = e.getAttribute("style"), O !== le && rp(A, le, O);
                  }
                } else if (p && !Be)
                  v.delete(A.toLowerCase()), le = Da(e, A, F), F !== le && rp(A, le, F);
                else if (!pn(A, Ne, p) && !Bt(A, F, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), le = Xa(e, A, F, Ne);
                  else {
                    var L = i;
                    if (L === Bi && (L = Yf(t)), L === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var K = KR(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    le = Da(e, A, F);
                  }
                  var pe = Be;
                  !pe && F !== le && !H && rp(A, le, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[No] !== !0 && A0(v), t) {
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
          typeof a.onClick == "function" && Eh(e);
          break;
      }
      return U;
    }
    function ZR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ny(e, t) {
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
    function zy(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ay(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function eT(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Im(e, a);
          return;
        case "select":
          nv(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var tT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], V0 = [
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
      ], nT = V0.concat(["button"]), rT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = Ze({}, e || P0), i = {
          tag: t
        };
        return V0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), nT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), tT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var aT = function(e, t) {
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
            return rT.indexOf(t) === -1;
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
      }, iT = function(e, t) {
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
      }, B0 = {};
      ap = function(e, t, a) {
        a = a || P0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = aT(e, u) ? null : i, f = s ? null : iT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!B0[y]) {
            B0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Ch = "suppressHydrationWarning", Rh = "$", Th = "/$", lp = "$?", up = "$!", lT = "style", jy = null, Fy = null;
    function uT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ca:
        case Qf: {
          t = i === ca ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : If(null, "");
          break;
        }
        default: {
          var s = i === En ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = If(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function oT(e, t, a) {
      {
        var i = e, u = If(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ID(e) {
      return e;
    }
    function sT(e) {
      jy = Bn(), Fy = TR();
      var t = null;
      return _u(!1), t;
    }
    function cT(e) {
      _R(Fy), _u(jy), jy = null, Fy = null;
    }
    function fT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = QR(e, t, a, s);
      return cp(u, y), Qy(y, t), y;
    }
    function dT(e, t) {
      e.appendChild(t);
    }
    function pT(e, t, a, i, u) {
      switch (GR(e, t, a, i), t) {
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
    function vT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return qR(e, t, a, i);
    }
    function Hy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function hT(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = WR(e, t);
      return cp(i, s), s;
    }
    function mT() {
      var e = window.event;
      return e === void 0 ? li : xu(e.type);
    }
    var Vy = typeof setTimeout == "function" ? setTimeout : void 0, yT = typeof clearTimeout == "function" ? clearTimeout : void 0, Py = -1, $0 = typeof Promise == "function" ? Promise : void 0, gT = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(e) {
      return $0.resolve(null).then(e).catch(ST);
    } : Vy;
    function ST(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ET(e, t, a, i) {
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
    function CT(e, t, a, i, u, s) {
      XR(e, t, a, i, u), Qy(e, u);
    }
    function Y0(e) {
      cs(e, "");
    }
    function RT(e, t, a) {
      e.nodeValue = a;
    }
    function TT(e, t) {
      e.appendChild(t);
    }
    function _T(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Eh(a);
    }
    function wT(e, t, a) {
      e.insertBefore(t, a);
    }
    function xT(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function bT(e, t) {
      e.removeChild(t);
    }
    function DT(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function By(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === En) {
          var s = u.data;
          if (s === Th)
            if (i === 0) {
              e.removeChild(u), dn(t);
              return;
            } else
              i--;
          else (s === Rh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      dn(t);
    }
    function kT(e, t) {
      e.nodeType === En ? By(e.parentNode, t) : e.nodeType === Yr && By(e, t), dn(e);
    }
    function OT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function LT(e) {
      e.nodeValue = "";
    }
    function MT(e, t) {
      e = e;
      var a = t[lT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wl("display", i);
    }
    function NT(e, t) {
      e.nodeValue = t;
    }
    function UT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function zT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function AT(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function jT(e) {
      return e.nodeType !== En ? null : e;
    }
    function I0(e) {
      return e.data === lp;
    }
    function $y(e) {
      return e.data === up;
    }
    function FT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function HT(e, t) {
      e._reactRetry = t;
    }
    function _h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === $i)
          break;
        if (t === En) {
          var a = e.data;
          if (a === Rh || a === up || a === lp)
            break;
          if (a === Th)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return _h(e.nextSibling);
    }
    function VT(e) {
      return _h(e.firstChild);
    }
    function PT(e) {
      return _h(e.firstChild);
    }
    function BT(e) {
      return _h(e.nextSibling);
    }
    function $T(e, t, a, i, u, s, f) {
      cp(s, e), Qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Oe) !== re;
      return JR(e, t, a, p, i, y, f);
    }
    function YT(e, t, a, i) {
      return cp(a, e), a.mode & Oe, ZR(e, t);
    }
    function IT(e, t) {
      cp(t, e);
    }
    function QT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Th) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === Rh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Q0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Rh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Th && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function WT(e) {
      dn(e);
    }
    function GT(e) {
      dn(e);
    }
    function qT(e) {
      return e !== "head" && e !== "body";
    }
    function XT(e, t, a, i) {
      var u = !0;
      Sh(t.nodeValue, a, i, u);
    }
    function KT(e, t, a, i, u, s) {
      if (t[Ch] !== !0) {
        var f = !0;
        Sh(i.nodeValue, u, s, f);
      }
    }
    function JT(e, t) {
      t.nodeType === Yr ? Ny(e, t) : t.nodeType === En || Uy(e, t);
    }
    function ZT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? Ny(a, t) : t.nodeType === En || Uy(a, t));
      }
    }
    function e_(e, t, a, i, u) {
      (u || t[Ch] !== !0) && (i.nodeType === Yr ? Ny(a, i) : i.nodeType === En || Uy(a, i));
    }
    function t_(e, t, a) {
      zy(e, t);
    }
    function n_(e, t) {
      Ay(e, t);
    }
    function r_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function a_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ay(a, t);
      }
    }
    function i_(e, t, a, i, u, s) {
      (s || t[Ch] !== !0) && zy(a, i);
    }
    function l_(e, t, a, i, u) {
      (u || t[Ch] !== !0) && Ay(a, i);
    }
    function u_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function o_(e) {
      ep(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, Yy = "__reactProps$" + vf, sp = "__reactContainer$" + vf, Iy = "__reactEvents$" + vf, s_ = "__reactListeners$" + vf, c_ = "__reactHandles$" + vf;
    function f_(e) {
      delete e[hf], delete e[Yy], delete e[Iy], delete e[s_], delete e[c_];
    }
    function cp(e, t) {
      t[hf] = e;
    }
    function wh(e, t) {
      t[sp] = e;
    }
    function W0(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function ec(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Q0(e); u !== null; ) {
              var s = u[hf];
              if (s)
                return s;
              u = Q0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uo(e) {
      var t = e[hf] || e[sp];
      return t && (t.tag === ue || t.tag === Ce || t.tag === Re || t.tag === te) ? t : null;
    }
    function mf(e) {
      if (e.tag === ue || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Yy] || null;
    }
    function Qy(e, t) {
      e[Yy] = t;
    }
    function d_(e) {
      var t = e[Iy];
      return t === void 0 && (t = e[Iy] = /* @__PURE__ */ new Set()), t;
    }
    var G0 = {}, q0 = he.ReactDebugCurrentFrame;
    function bh(e) {
      if (e) {
        var t = e._owner, a = mt(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (bh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), bh(null)), p instanceof Error && !(p.message in G0) && (G0[p.message] = !0, bh(u), S("Failed %s type: %s", a, p.message), bh(null));
          }
      }
    }
    var Wy = [], Dh;
    Dh = [];
    var Uu = -1;
    function zo(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Dh[Uu] && S("Unexpected Fiber popped."), e.current = Wy[Uu], Wy[Uu] = null, Dh[Uu] = null, Uu--;
    }
    function Zr(e, t, a) {
      Uu++, Wy[Uu] = e.current, Dh[Uu] = a, e.current = t;
    }
    var Gy;
    Gy = {};
    var oi = {};
    Object.freeze(oi);
    var zu = zo(oi), Ql = zo(!1), qy = oi;
    function yf(e, t, a) {
      return a && Wl(t) ? qy : zu.current;
    }
    function X0(e, t, a) {
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
          var p = Qe(e) || "Unknown";
          al(i, s, "context", p);
        }
        return u && X0(e, t, s), s;
      }
    }
    function kh() {
      return Ql.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Oh(e) {
      Jr(Ql, e), Jr(zu, e);
    }
    function Xy(e) {
      Jr(Ql, e), Jr(zu, e);
    }
    function K0(e, t, a) {
      {
        if (zu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Zr(zu, t, e), Zr(Ql, a, e);
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            Gy[s] || (Gy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return Ze({}, a, f);
      }
    }
    function Lh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return qy = zu.current, Zr(zu, a, e), Zr(Ql, Ql.current, e), !0;
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = J0(e, t, qy);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Ql, e), Jr(zu, e), Zr(zu, u, e), Zr(Ql, a, e);
        } else
          Jr(Ql, e), Zr(Ql, a, e);
      }
    }
    function p_(e) {
      {
        if (!pa(e) || e.tag !== ve)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ve: {
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
    var Ao = 0, Mh = 1, Au = null, Ky = !1, Jy = !1;
    function eE(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function v_(e) {
      Ky = !0, eE(e);
    }
    function tE() {
      Ky && jo();
    }
    function jo() {
      if (!Jy && Au !== null) {
        Jy = !0;
        var e = 0, t = wr();
        try {
          var a = !0, i = Au;
          for (bt(Sa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Ky = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), dd(Ml, jo), s;
        } finally {
          bt(t), Jy = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, Nh = null, Uh = 0, xi = [], bi = 0, tc = null, ju = 1, Fu = "";
    function h_(e) {
      return rc(), (e.flags & Mv) !== Me;
    }
    function m_(e) {
      return rc(), Uh;
    }
    function y_() {
      var e = Fu, t = ju, a = t & ~g_(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), Sf[Ef++] = Uh, Sf[Ef++] = Nh, Nh = e, Uh = t;
    }
    function nE(e, t, a) {
      rc(), xi[bi++] = ju, xi[bi++] = Fu, xi[bi++] = tc, tc = e;
      var i = ju, u = Fu, s = zh(i) - 1, f = i & ~(1 << s), p = a + 1, v = zh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), _ = f >> y, U = s - y, A = zh(t) + U, F = p << U, le = F | _, Ne = x + u;
        ju = 1 << A | le, Fu = Ne;
      } else {
        var be = p << s, _t = be | f, vt = u;
        ju = 1 << v | _t, Fu = vt;
      }
    }
    function Zy(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), nE(e, a, i);
      }
    }
    function zh(e) {
      return 32 - po(e);
    }
    function g_(e) {
      return 1 << zh(e) - 1;
    }
    function eg(e) {
      for (; e === Nh; )
        Nh = Sf[--Ef], Sf[Ef] = null, Uh = Sf[--Ef], Sf[Ef] = null;
      for (; e === tc; )
        tc = xi[--bi], xi[bi] = null, Fu = xi[--bi], xi[bi] = null, ju = xi[--bi], xi[bi] = null;
    }
    function S_() {
      return rc(), tc !== null ? {
        id: ju,
        overflow: Fu
      } : null;
    }
    function E_(e, t) {
      rc(), xi[bi++] = ju, xi[bi++] = Fu, xi[bi++] = tc, ju = t.id, Fu = t.overflow, tc = e;
    }
    function rc() {
      Or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, Di = null, il = !1, ac = !1, Fo = null;
    function C_() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rE() {
      ac = !0;
    }
    function R_() {
      return ac;
    }
    function T_(e) {
      var t = e.stateNode.containerInfo;
      return Di = PT(t), kr = e, il = !0, Fo = null, ac = !1, !0;
    }
    function __(e, t, a) {
      return Di = BT(t), kr = e, il = !0, Fo = null, ac = !1, a !== null && E_(e, a), !0;
    }
    function aE(e, t) {
      switch (e.tag) {
        case te: {
          JT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & Oe) !== re;
          e_(
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
          i.dehydrated !== null && ZT(i.dehydrated, t);
          break;
        }
      }
    }
    function iE(e, t) {
      aE(e, t);
      var a = Db();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function tg(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, t_(a, i);
                break;
              case Ce:
                var u = t.pendingProps;
                n_(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Oe) !== re;
                i_(
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
                var x = t.pendingProps, _ = (e.mode & Oe) !== re;
                l_(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var U = e.memoizedState, A = U.dehydrated;
            if (A !== null) switch (t.tag) {
              case ue:
                var F = t.type;
                t.pendingProps, r_(A, F);
                break;
              case Ce:
                var le = t.pendingProps;
                a_(A, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function lE(e, t) {
      t.flags = t.flags & ~mi | Xt, tg(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = zT(t, a);
          return i !== null ? (e.stateNode = i, kr = e, Di = VT(i), !0) : !1;
        }
        case Ce: {
          var u = e.pendingProps, s = AT(t, u);
          return s !== null ? (e.stateNode = s, kr = e, Di = null, !0) : !1;
        }
        case Re: {
          var f = jT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: S_(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = kb(f);
            return v.return = e, e.child = v, kr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ng(e) {
      return (e.mode & Oe) !== re && (e.flags & qe) === Me;
    }
    function rg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ag(e) {
      if (il) {
        var t = Di;
        if (!t) {
          ng(e) && (tg(kr, e), rg()), lE(kr, e), il = !1, kr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          ng(e) && (tg(kr, e), rg()), t = op(a);
          var i = kr;
          if (!t || !uE(e, t)) {
            lE(kr, e), il = !1, kr = e;
            return;
          }
          iE(i, a);
        }
      }
    }
    function w_(e, t, a) {
      var i = e.stateNode, u = !ac, s = $T(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function x_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = YT(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Oe) !== re;
              XT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Oe) !== re;
              KT(
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
    function b_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      IT(a, e);
    }
    function D_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return QT(a);
    }
    function oE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== te && t.tag !== Re; )
        t = t.return;
      kr = t;
    }
    function Ah(e) {
      if (e !== kr)
        return !1;
      if (!il)
        return oE(e), il = !0, !1;
      if (e.tag !== te && (e.tag !== ue || qT(e.type) && !Hy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (ng(e))
            sE(e), rg();
          else
            for (; t; )
              iE(e, t), t = op(t);
      }
      return oE(e), e.tag === Re ? Di = D_(e) : Di = kr ? op(e.stateNode) : null, !0;
    }
    function k_() {
      return il && Di !== null;
    }
    function sE(e) {
      for (var t = Di; t; )
        aE(e, t), t = op(t);
    }
    function Cf() {
      kr = null, Di = null, il = !1, ac = !1;
    }
    function cE() {
      Fo !== null && (r1(Fo), Fo = null);
    }
    function Or() {
      return il;
    }
    function ig(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    var O_ = he.ReactCurrentBatchConfig, L_ = null;
    function M_() {
      return O_.transition;
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
      var N_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], lc = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(_) {
          e.add(Qe(_) || "Component"), lc.add(_.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          t.add(Qe(_) || "Component"), lc.add(_.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          a.add(Qe(_) || "Component"), lc.add(_.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          i.add(Qe(_) || "Component"), lc.add(_.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          u.add(Qe(_) || "Component"), lc.add(_.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(_) {
          s.add(Qe(_) || "Component"), lc.add(_.type);
        }), yp = []), t.size > 0) {
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
          Ue(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ic(a);
          Ue(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = ic(u);
          Ue(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var jh = /* @__PURE__ */ new Map(), fE = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = N_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fE.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), fE.add(s.type);
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
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    var lg, ug, og, sg, cg, dE = function(e, t) {
    };
    lg = !1, ug = !1, og = {}, sg = {}, cg = {}, dE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        sg[a] || (sg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function U_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & un || Je) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ve) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !U_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Qe(e) || "Component";
          og[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), og[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ve)
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
          var g = function(x) {
            var _ = v.refs;
            x === null ? delete _[y] : _[y] = x;
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
    function Fh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Hh(e) {
      {
        var t = Qe(e) || "Component";
        if (cg[t])
          return;
        cg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function pE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function vE(e) {
      function t(O, H) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [H], O.flags |= Mt) : L.push(H);
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
        for (var L = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? L.set(K.key, K) : L.set(K.index, K), K = K.sibling;
        return L;
      }
      function u(O, H) {
        var L = hc(O, H);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, H, L) {
        if (O.index = L, !e)
          return O.flags |= Mv, H;
        var K = O.alternate;
        if (K !== null) {
          var pe = K.index;
          return pe < H ? (O.flags |= Xt, H) : pe;
        } else
          return O.flags |= Xt, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Xt), O;
      }
      function p(O, H, L, K) {
        if (H === null || H.tag !== Ce) {
          var pe = i0(L, O.mode, K);
          return pe.return = O, pe;
        } else {
          var oe = u(H, L);
          return oe.return = O, oe;
        }
      }
      function v(O, H, L, K) {
        var pe = L.type;
        if (pe === sa)
          return g(O, H, L.props.children, K, L.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        S1(H, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Ae && pE(pe) === H.type)) {
          var oe = u(H, L.props);
          return oe.ref = gp(O, H, L), oe.return = O, oe._debugSource = L._source, oe._debugOwner = L._owner, oe;
        }
        var Ye = a0(L, O.mode, K);
        return Ye.ref = gp(O, H, L), Ye.return = O, Ye;
      }
      function y(O, H, L, K) {
        if (H === null || H.tag !== je || H.stateNode.containerInfo !== L.containerInfo || H.stateNode.implementation !== L.implementation) {
          var pe = l0(L, O.mode, K);
          return pe.return = O, pe;
        } else {
          var oe = u(H, L.children || []);
          return oe.return = O, oe;
        }
      }
      function g(O, H, L, K, pe) {
        if (H === null || H.tag !== pt) {
          var oe = qo(L, O.mode, K, pe);
          return oe.return = O, oe;
        } else {
          var Ye = u(H, L);
          return Ye.return = O, Ye;
        }
      }
      function x(O, H, L) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = i0("" + H, O.mode, L);
          return K.return = O, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Er: {
              var pe = a0(H, O.mode, L);
              return pe.ref = gp(O, null, H), pe.return = O, pe;
            }
            case Hr: {
              var oe = l0(H, O.mode, L);
              return oe.return = O, oe;
            }
            case Ae: {
              var Ye = H._payload, Ke = H._init;
              return x(O, Ke(Ye), L);
            }
          }
          if (xt(H) || Vr(H)) {
            var Wt = qo(H, O.mode, L, null);
            return Wt.return = O, Wt;
          }
          Fh(O, H);
        }
        return typeof H == "function" && Hh(O), null;
      }
      function _(O, H, L, K) {
        var pe = H !== null ? H.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return pe !== null ? null : p(O, H, "" + L, K);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Er:
              return L.key === pe ? v(O, H, L, K) : null;
            case Hr:
              return L.key === pe ? y(O, H, L, K) : null;
            case Ae: {
              var oe = L._payload, Ye = L._init;
              return _(O, H, Ye(oe), K);
            }
          }
          if (xt(L) || Vr(L))
            return pe !== null ? null : g(O, H, L, K, null);
          Fh(O, L);
        }
        return typeof L == "function" && Hh(O), null;
      }
      function U(O, H, L, K, pe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var oe = O.get(L) || null;
          return p(H, oe, "" + K, pe);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Er: {
              var Ye = O.get(K.key === null ? L : K.key) || null;
              return v(H, Ye, K, pe);
            }
            case Hr: {
              var Ke = O.get(K.key === null ? L : K.key) || null;
              return y(H, Ke, K, pe);
            }
            case Ae:
              var Wt = K._payload, Nt = K._init;
              return U(O, H, L, Nt(Wt), pe);
          }
          if (xt(K) || Vr(K)) {
            var $n = O.get(L) || null;
            return g(H, $n, K, pe, null);
          }
          Fh(H, K);
        }
        return typeof K == "function" && Hh(H), null;
      }
      function A(O, H, L) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case Er:
            case Hr:
              dE(O, L);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Ae:
              var pe = O._payload, oe = O._init;
              A(oe(pe), H, L);
              break;
          }
        }
        return H;
      }
      function F(O, H, L, K) {
        for (var pe = null, oe = 0; oe < L.length; oe++) {
          var Ye = L[oe];
          pe = A(Ye, pe, O);
        }
        for (var Ke = null, Wt = null, Nt = H, $n = 0, Ut = 0, jn = null; Nt !== null && Ut < L.length; Ut++) {
          Nt.index > Ut ? (jn = Nt, Nt = null) : jn = Nt.sibling;
          var ta = _(O, Nt, L[Ut], K);
          if (ta === null) {
            Nt === null && (Nt = jn);
            break;
          }
          e && Nt && ta.alternate === null && t(O, Nt), $n = s(ta, $n, Ut), Wt === null ? Ke = ta : Wt.sibling = ta, Wt = ta, Nt = jn;
        }
        if (Ut === L.length) {
          if (a(O, Nt), Or()) {
            var jr = Ut;
            nc(O, jr);
          }
          return Ke;
        }
        if (Nt === null) {
          for (; Ut < L.length; Ut++) {
            var ci = x(O, L[Ut], K);
            ci !== null && ($n = s(ci, $n, Ut), Wt === null ? Ke = ci : Wt.sibling = ci, Wt = ci);
          }
          if (Or()) {
            var wa = Ut;
            nc(O, wa);
          }
          return Ke;
        }
        for (var xa = i(O, Nt); Ut < L.length; Ut++) {
          var na = U(xa, O, Ut, L[Ut], K);
          na !== null && (e && na.alternate !== null && xa.delete(na.key === null ? Ut : na.key), $n = s(na, $n, Ut), Wt === null ? Ke = na : Wt.sibling = na, Wt = na);
        }
        if (e && xa.forEach(function(Vf) {
          return t(O, Vf);
        }), Or()) {
          var Iu = Ut;
          nc(O, Iu);
        }
        return Ke;
      }
      function le(O, H, L, K) {
        var pe = Vr(L);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ug || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ug = !0), L.entries === pe && (lg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lg = !0);
          var oe = pe.call(L);
          if (oe)
            for (var Ye = null, Ke = oe.next(); !Ke.done; Ke = oe.next()) {
              var Wt = Ke.value;
              Ye = A(Wt, Ye, O);
            }
        }
        var Nt = pe.call(L);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Ut = null, jn = H, ta = 0, jr = 0, ci = null, wa = Nt.next(); jn !== null && !wa.done; jr++, wa = Nt.next()) {
          jn.index > jr ? (ci = jn, jn = null) : ci = jn.sibling;
          var xa = _(O, jn, wa.value, K);
          if (xa === null) {
            jn === null && (jn = ci);
            break;
          }
          e && jn && xa.alternate === null && t(O, jn), ta = s(xa, ta, jr), Ut === null ? $n = xa : Ut.sibling = xa, Ut = xa, jn = ci;
        }
        if (wa.done) {
          if (a(O, jn), Or()) {
            var na = jr;
            nc(O, na);
          }
          return $n;
        }
        if (jn === null) {
          for (; !wa.done; jr++, wa = Nt.next()) {
            var Iu = x(O, wa.value, K);
            Iu !== null && (ta = s(Iu, ta, jr), Ut === null ? $n = Iu : Ut.sibling = Iu, Ut = Iu);
          }
          if (Or()) {
            var Vf = jr;
            nc(O, Vf);
          }
          return $n;
        }
        for (var Xp = i(O, jn); !wa.done; jr++, wa = Nt.next()) {
          var tu = U(Xp, O, jr, wa.value, K);
          tu !== null && (e && tu.alternate !== null && Xp.delete(tu.key === null ? jr : tu.key), ta = s(tu, ta, jr), Ut === null ? $n = tu : Ut.sibling = tu, Ut = tu);
        }
        if (e && Xp.forEach(function(lD) {
          return t(O, lD);
        }), Or()) {
          var iD = jr;
          nc(O, iD);
        }
        return $n;
      }
      function Ne(O, H, L, K) {
        if (H !== null && H.tag === Ce) {
          a(O, H.sibling);
          var pe = u(H, L);
          return pe.return = O, pe;
        }
        a(O, H);
        var oe = i0(L, O.mode, K);
        return oe.return = O, oe;
      }
      function be(O, H, L, K) {
        for (var pe = L.key, oe = H; oe !== null; ) {
          if (oe.key === pe) {
            var Ye = L.type;
            if (Ye === sa) {
              if (oe.tag === pt) {
                a(O, oe.sibling);
                var Ke = u(oe, L.props.children);
                return Ke.return = O, Ke._debugSource = L._source, Ke._debugOwner = L._owner, Ke;
              }
            } else if (oe.elementType === Ye || // Keep this check inline so it only runs on the false path:
            S1(oe, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === Ae && pE(Ye) === oe.type) {
              a(O, oe.sibling);
              var Wt = u(oe, L.props);
              return Wt.ref = gp(O, oe, L), Wt.return = O, Wt._debugSource = L._source, Wt._debugOwner = L._owner, Wt;
            }
            a(O, oe);
            break;
          } else
            t(O, oe);
          oe = oe.sibling;
        }
        if (L.type === sa) {
          var Nt = qo(L.props.children, O.mode, K, L.key);
          return Nt.return = O, Nt;
        } else {
          var $n = a0(L, O.mode, K);
          return $n.ref = gp(O, H, L), $n.return = O, $n;
        }
      }
      function _t(O, H, L, K) {
        for (var pe = L.key, oe = H; oe !== null; ) {
          if (oe.key === pe)
            if (oe.tag === je && oe.stateNode.containerInfo === L.containerInfo && oe.stateNode.implementation === L.implementation) {
              a(O, oe.sibling);
              var Ye = u(oe, L.children || []);
              return Ye.return = O, Ye;
            } else {
              a(O, oe);
              break;
            }
          else
            t(O, oe);
          oe = oe.sibling;
        }
        var Ke = l0(L, O.mode, K);
        return Ke.return = O, Ke;
      }
      function vt(O, H, L, K) {
        var pe = typeof L == "object" && L !== null && L.type === sa && L.key === null;
        if (pe && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Er:
              return f(be(O, H, L, K));
            case Hr:
              return f(_t(O, H, L, K));
            case Ae:
              var oe = L._payload, Ye = L._init;
              return vt(O, H, Ye(oe), K);
          }
          if (xt(L))
            return F(O, H, L, K);
          if (Vr(L))
            return le(O, H, L, K);
          Fh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ne(O, H, "" + L, K)) : (typeof L == "function" && Hh(O), a(O, H));
      }
      return vt;
    }
    var Rf = vE(!0), hE = vE(!1);
    function z_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function A_(e, t) {
      for (var a = e.child; a !== null; )
        Tb(a, t), a = a.sibling;
    }
    var fg = zo(null), dg;
    dg = {};
    var Vh = null, Tf = null, pg = null, Ph = !1;
    function Bh() {
      Vh = null, Tf = null, pg = null, Ph = !1;
    }
    function mE() {
      Ph = !0;
    }
    function yE() {
      Ph = !1;
    }
    function gE(e, t, a) {
      Zr(fg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== dg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = dg;
    }
    function vg(e, t) {
      var a = fg.current;
      Jr(fg, t), e._currentValue = a;
    }
    function hg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Hl(i.childLanes, t) ? u !== null && !Hl(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function j_(e, t, a) {
      F_(e, t, a);
    }
    function F_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ve) {
                var p = Ro(a), v = Hu(en, p);
                v.tag = Yh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = et(_.lanes, a)), hg(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = et(U.lanes, a);
          var A = U.alternate;
          A !== null && (A.lanes = et(A.lanes, a)), hg(U, a, e), u = i.sibling;
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
      Vh = e, Tf = null, pg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Kr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function qn(e) {
      Ph && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (pg !== e) {
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
    function mg(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function H_() {
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
    function SE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function V_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function P_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, mg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function Ba(e, t) {
      return $h(e, t);
    }
    var B_ = $h;
    function $h(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (Xt | mi)) !== Me && h1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (Xt | mi)) !== Me && h1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var EE = 0, CE = 1, Yh = 2, yg = 3, Ih = !1, gg, Qh;
    gg = !1, Qh = null;
    function Sg(e) {
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
    function RE(e, t) {
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
    function Hu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: EE,
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
      if (Qh === u && !gg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), gg = !0), Vx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, B_(e, a);
      } else
        return P_(e, u, t, a);
    }
    function Wh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Iv(a)) {
          var s = u.lanes;
          s = kd(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, Kc(e, f);
        }
      }
    }
    function Eg(e, t) {
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
    function $_(e, t, a, i, u, s) {
      switch (a.tag) {
        case CE: {
          var f = a.payload;
          if (typeof f == "function") {
            mE();
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
              yE();
            }
            return p;
          }
          return f;
        }
        case yg:
          e.flags = e.flags & ~er | qe;
        // Intentional fallthrough
        case EE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            mE(), y = v.call(s, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              yE();
            }
          } else
            y = v;
          return y == null ? i : Ze({}, i, y);
        }
        case Yh:
          return Ih = !0, i;
      }
      return i;
    }
    function Gh(e, t, a, i) {
      var u = e.updateQueue;
      Ih = !1, Qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, _ = x.lastBaseUpdate;
          _ !== f && (_ === null ? x.firstBaseUpdate = y : _.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, A = Y, F = null, le = null, Ne = null, be = s;
        do {
          var _t = be.lane, vt = be.eventTime;
          if (Hl(i, _t)) {
            if (Ne !== null) {
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
              Ne = Ne.next = H;
            }
            U = $_(e, u, be, U, t, a);
            var L = be.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== Kt) {
              e.flags |= In;
              var K = u.effects;
              K === null ? u.effects = [be] : K.push(be);
            }
          } else {
            var O = {
              eventTime: vt,
              lane: _t,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ne === null ? (le = Ne = O, F = U) : Ne = Ne.next = O, A = et(A, _t);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, oe = pe.next;
            pe.next = null, be = oe, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (F = U), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Ne;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var Ke = Ye;
          do
            A = et(A, Ke.lane), Ke = Ke.next;
          while (Ke !== Ye);
        } else s === null && (u.shared.lanes = Y);
        Ip(A), e.lanes = A, e.memoizedState = U;
      }
      Qh = null;
    }
    function Y_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function TE() {
      Ih = !1;
    }
    function qh() {
      return Ih;
    }
    function _E(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Y_(f, a));
        }
    }
    var Sp = {}, Vo = zo(Sp), Ep = zo(Sp), Xh = zo(Sp);
    function Kh(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Kh(Xh.current);
      return e;
    }
    function Cg(e, t) {
      Zr(Xh, t, e), Zr(Ep, e, e), Zr(Vo, Sp, e);
      var a = uT(t);
      Jr(Vo, e), Zr(Vo, a, e);
    }
    function wf(e) {
      Jr(Vo, e), Jr(Ep, e), Jr(Xh, e);
    }
    function Rg() {
      var e = Kh(Vo.current);
      return e;
    }
    function xE(e) {
      Kh(Xh.current);
      var t = Kh(Vo.current), a = oT(t, e.type);
      t !== a && (Zr(Ep, e, e), Zr(Vo, a, e));
    }
    function Tg(e) {
      Ep.current === e && (Jr(Vo, e), Jr(Ep, e));
    }
    var I_ = 0, bE = 1, DE = 1, Cp = 2, ul = zo(I_);
    function _g(e, t) {
      return (e & t) !== 0;
    }
    function xf(e) {
      return e & bE;
    }
    function wg(e, t) {
      return e & bE | t;
    }
    function Q_(e, t) {
      return e | t;
    }
    function Po(e, t) {
      Zr(ul, t, e);
    }
    function bf(e) {
      Jr(ul, e);
    }
    function W_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Jh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || I0(i) || $y(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & qe) !== Me;
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
    ), Lr = (
      /*   */
      8
    ), xg = [];
    function bg() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function G_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = he.ReactCurrentDispatcher, Rp = he.ReactCurrentBatchConfig, Dg, Df;
    Dg = /* @__PURE__ */ new Set();
    var oc = Y, Qt = null, ir = null, lr = null, Zh = !1, Tp = !1, _p = 0, q_ = 0, X_ = 25, P = null, ki = null, Bo = -1, kg = !1;
    function Ht() {
      {
        var e = P;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        ki !== null && (Bo++, ki[Bo] !== e && K_(e));
      }
    }
    function kf(e) {
      e != null && !xt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function K_(e) {
      {
        var t = Qe(Qt);
        if (!Dg.has(t) && (Dg.add(t), ki !== null)) {
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
    function Og(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Of(e, t, a, i, u, s) {
      oc = s, Qt = t, ki = e !== null ? e._debugHookTypes : null, Bo = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? ce.current = XE : ki !== null ? ce.current = qE : ce.current = GE;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, _p = 0, p >= X_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, ir = null, lr = null, t.updateQueue = null, Bo = -1, ce.current = KE, f = a(i, u);
        } while (Tp);
      }
      ce.current = dm, t._debugHookTypes = ki;
      var v = ir !== null && ir.next !== null;
      if (oc = Y, Qt = null, ir = null, lr = null, P = null, ki = null, Bo = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Oe) !== re && S("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = _p !== 0;
      return _p = 0, e;
    }
    function kE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== re ? t.flags &= ~(mu | Aa | Ir | Te) : t.flags &= ~(Ir | Te), e.lanes = To(e.lanes, a);
    }
    function OE() {
      if (ce.current = dm, Zh) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      oc = Y, Qt = null, ir = null, lr = null, ki = null, Bo = -1, P = null, $E = !1, Tp = !1, _p = 0;
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
    function LE() {
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
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = tw.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function Ng(e, t, a) {
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
        var g = f.next, x = s.baseState, _ = null, U = null, A = null, F = g;
        do {
          var le = F.lane;
          if (Hl(oc, le)) {
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
              x = F.eagerState;
            else {
              var _t = F.action;
              x = e(x, _t);
            }
          } else {
            var Ne = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (U = A = Ne, _ = x) : A = A.next = Ne, Qt.lanes = et(Qt.lanes, le), Ip(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? _ = x : A.next = U, xe(x, i.memoizedState) || Np(), i.memoizedState = x, i.baseState = _, i.baseQueue = A, u.lastRenderedState = x;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var O = vt;
        do {
          var H = O.lane;
          Qt.lanes = et(Qt.lanes, H), Ip(H), O = O.next;
        } while (O !== vt);
      } else f === null && (u.lanes = Y);
      var L = u.dispatch;
      return [i.memoizedState, L];
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
        xe(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function QD(e, t, a) {
    }
    function WD(e, t, a) {
    }
    function zg(e, t, a) {
      var i = Qt, u = ql(), s, f = Or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Df || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Df = !0);
      } else {
        if (s = t(), !Df) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
        }
        var v = Lm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(v, oc) || ME(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, am(UE.bind(null, i, y, e), [e]), i.flags |= Ir, wp(rr | Lr, NE.bind(null, i, y, s, t), void 0, null), s;
    }
    function em(e, t, a) {
      var i = Qt, u = Oi(), s = t();
      if (!Df) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (bp(UE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      lr !== null && lr.memoizedState.tag & rr) {
        i.flags |= Ir, wp(rr | Lr, NE.bind(null, i, y, s, t), void 0, null);
        var g = Lm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(g, oc) || ME(i, t, s);
      }
      return s;
    }
    function ME(e, t, a) {
      e.flags |= hu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Qt.updateQueue;
      if (u === null)
        u = LE(), Qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zE(t) && AE(e);
    }
    function UE(e, t, a) {
      var i = function() {
        zE(t) && AE(e);
      };
      return a(i);
    }
    function zE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function AE(e) {
      var t = Ba(e, we);
      t !== null && cr(t, e, we, en);
    }
    function tm(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Lg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = nw.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function Ag(e) {
      return Ng(Lg);
    }
    function jg(e) {
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
        s = LE(), Qt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Fg(e) {
      var t = ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function nm(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, void 0, s);
    }
    function rm(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (ir !== null) {
        var p = ir.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Og(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Qt.flags |= e, u.memoizedState = wp(rr | t, a, f, s);
    }
    function am(e, t) {
      return (Qt.mode & qr) !== re ? xp(mu | Ir | Ol, Lr, e, t) : xp(Ir | Ol, Lr, e, t);
    }
    function bp(e, t) {
      return rm(Ir, Lr, e, t);
    }
    function Hg(e, t) {
      return xp(Te, Gl, e, t);
    }
    function im(e, t) {
      return rm(Te, Gl, e, t);
    }
    function Vg(e, t) {
      var a = Te;
      return a |= za, (Qt.mode & qr) !== re && (a |= Aa), xp(a, ar, e, t);
    }
    function lm(e, t) {
      return rm(Te, ar, e, t);
    }
    function jE(e, t) {
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
    function Pg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Te;
      return u |= za, (Qt.mode & qr) !== re && (u |= Aa), xp(u, ar, jE.bind(null, t, e), i);
    }
    function um(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return rm(Te, ar, jE.bind(null, t, e), i);
    }
    function J_(e, t) {
    }
    var om = J_;
    function Bg(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function sm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Og(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function $g(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function cm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Og(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Yg(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = Oi(), a = ir, i = a.memoizedState;
      return VE(t, i, e);
    }
    function HE(e) {
      var t = Oi();
      if (ir === null)
        return t.memoizedState = e, e;
      var a = ir.memoizedState;
      return VE(t, a, e);
    }
    function VE(e, t, a) {
      var i = !Bv(oc);
      if (i) {
        if (!xe(a, t)) {
          var u = Tr();
          Qt.lanes = et(Qt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Z_(e, t, a) {
      var i = wr();
      bt(fy(i, Ri)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bt(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Ig() {
      var e = tm(!1), t = e[0], a = e[1], i = Z_.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function PE() {
      var e = Ag(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function BE() {
      var e = jg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var $E = !1;
    function ew() {
      return $E;
    }
    function Qg() {
      var e = ql(), t = Lm(), a = t.identifierPrefix, i;
      if (Or()) {
        var u = y_();
        i = ":" + a + "R" + u;
        var s = _p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = q_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function fm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function tw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = SE(e, t, u, i);
        if (s !== null) {
          var f = _a();
          cr(s, e, i, f), QE(s, t, i);
        }
      }
      WE(e, i);
    }
    function nw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Wo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                V_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = SE(e, t, u, i);
        if (g !== null) {
          var x = _a();
          cr(g, e, i, x), QE(g, t, i);
        }
      }
      WE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function IE(e, t) {
      Tp = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (Iv(a)) {
        var i = t.lanes;
        i = kd(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, Kc(e, u);
      }
    }
    function WE(e, t, a) {
      Ji(e, t);
    }
    var dm = {
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
    }, GE = null, qE = null, XE = null, KE = null, Xl = null, ol = null, pm = null;
    {
      var Wg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), kf(t), Bg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), kf(t), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), kf(a), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), kf(t), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), kf(t), Vg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), kf(t);
          var a = ce.current;
          ce.current = Xl;
          try {
            return $g(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = ce.current;
          ce.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), Fg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = ce.current;
          ce.current = Xl;
          try {
            return tm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), zg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Qg();
        },
        unstable_isNewReconciler: me
      }, qE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), Bg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Vg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = Xl;
          try {
            return $g(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Fg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = Xl;
          try {
            return tm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), zg(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Qg();
        },
        unstable_isNewReconciler: me
      }, XE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), sm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), lm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = ol;
          try {
            return cm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = ol;
          try {
            return Ng(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), nm();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = ol;
          try {
            return Ag(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), om();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), em(e, t);
        },
        useId: function() {
          return P = "useId", ee(), fm();
        },
        unstable_isNewReconciler: me
      }, KE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), sm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), lm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = pm;
          try {
            return cm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = pm;
          try {
            return Ug(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), nm();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = pm;
          try {
            return jg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), om();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), HE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), BE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), em(e, t);
        },
        useId: function() {
          return P = "useId", ee(), fm();
        },
        unstable_isNewReconciler: me
      }, Xl = {
        readContext: function(e) {
          return Wg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Xe(), Ht(), Bg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Xe(), Ht(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Xe(), Ht(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Xe(), Ht(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Xe(), Ht(), Hg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Xe(), Ht(), Vg(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Xe(), Ht();
          var a = ce.current;
          ce.current = Xl;
          try {
            return $g(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Xe(), Ht();
          var i = ce.current;
          ce.current = Xl;
          try {
            return Mg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Xe(), Ht(), Fg(e);
        },
        useState: function(e) {
          P = "useState", Xe(), Ht();
          var t = ce.current;
          ce.current = Xl;
          try {
            return tm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Xe(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Xe(), Ht(), Yg(e);
        },
        useTransition: function() {
          return P = "useTransition", Xe(), Ht(), Ig();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Xe(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Xe(), Ht(), zg(e, t, a);
        },
        useId: function() {
          return P = "useId", Xe(), Ht(), Qg();
        },
        unstable_isNewReconciler: me
      }, ol = {
        readContext: function(e) {
          return Wg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Xe(), ee(), sm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Xe(), ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Xe(), ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Xe(), ee(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Xe(), ee(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Xe(), ee(), lm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Xe(), ee();
          var a = ce.current;
          ce.current = ol;
          try {
            return cm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Xe(), ee();
          var i = ce.current;
          ce.current = ol;
          try {
            return Ng(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Xe(), ee(), nm();
        },
        useState: function(e) {
          P = "useState", Xe(), ee();
          var t = ce.current;
          ce.current = ol;
          try {
            return Ag(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Xe(), ee(), om();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Xe(), ee(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", Xe(), ee(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Xe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Xe(), ee(), em(e, t);
        },
        useId: function() {
          return P = "useId", Xe(), ee(), fm();
        },
        unstable_isNewReconciler: me
      }, pm = {
        readContext: function(e) {
          return Wg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Xe(), ee(), sm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Xe(), ee(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Xe(), ee(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Xe(), ee(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Xe(), ee(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Xe(), ee(), lm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Xe(), ee();
          var a = ce.current;
          ce.current = ol;
          try {
            return cm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Xe(), ee();
          var i = ce.current;
          ce.current = ol;
          try {
            return Ug(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Xe(), ee(), nm();
        },
        useState: function(e) {
          P = "useState", Xe(), ee();
          var t = ce.current;
          ce.current = ol;
          try {
            return jg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Xe(), ee(), om();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Xe(), ee(), HE(e);
        },
        useTransition: function() {
          return P = "useTransition", Xe(), ee(), BE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Xe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Xe(), ee(), em(e, t);
        },
        useId: function() {
          return P = "useId", Xe(), ee(), fm();
        },
        unstable_isNewReconciler: me
      };
    }
    var $o = D.unstable_now, JE = 0, vm = -1, Dp = -1, hm = -1, Gg = !1, mm = !1;
    function ZE() {
      return Gg;
    }
    function rw() {
      mm = !0;
    }
    function aw() {
      Gg = !1, mm = !1;
    }
    function iw() {
      Gg = mm, mm = !1;
    }
    function eC() {
      return JE;
    }
    function tC() {
      JE = $o();
    }
    function qg(e) {
      Dp = $o(), e.actualStartTime < 0 && (e.actualStartTime = $o());
    }
    function nC(e) {
      Dp = -1;
    }
    function ym(e, t) {
      if (Dp >= 0) {
        var a = $o() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Kl(e) {
      if (vm >= 0) {
        var t = $o() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Xg(e) {
      if (hm >= 0) {
        var t = $o() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      vm = $o();
    }
    function Kg() {
      hm = $o();
    }
    function Jg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sl(e, t) {
      if (e && e.defaultProps) {
        var a = Ze({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zg = {}, eS, tS, nS, rS, aS, rC, gm, iS, lS, uS, kp;
    {
      eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var aC = /* @__PURE__ */ new Set();
      gm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          aC.has(a) || (aC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, rC = function(e, t) {
        if (t === void 0) {
          var a = yt(e) || "Component";
          aS.has(a) || (aS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Zg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Zg);
    }
    function oS(e, t, a, i) {
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
        rC(t, s);
      }
      var f = s == null ? u : Ze({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var sS = {
      isMounted: va,
      enqueueSetState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Wo(i), f = Hu(u, s);
        f.payload = t, a != null && (gm(a, "setState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (cr(p, i, s, u), Wh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Wo(i), f = Hu(u, s);
        f.tag = CE, f.payload = t, a != null && (gm(a, "replaceState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (cr(p, i, s, u), Wh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hi(e), i = _a(), u = Wo(a), s = Hu(i, u);
        s.tag = Yh, t != null && (gm(t, "forceUpdate"), s.callback = t);
        var f = Ho(a, s, u);
        f !== null && (cr(f, a, u, i), Wh(f, a, u)), Ed(a, u);
      }
    };
    function iC(e, t, a, i, u, s, f) {
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", yt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_n(a, i) || !_n(u, s) : !0;
    }
    function lw(e, t, a) {
      var i = e.stateNode;
      {
        var u = yt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !lS.has(t) && (lS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !nS.has(t) && (nS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || xt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function lC(e, t) {
      t.updater = sS, e.stateNode = t, bc(t, e), t._reactInternalInstance = Zg;
    }
    function uC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !uS.has(t)) {
          uS.add(t);
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
        Pn(!0);
        try {
          g = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      lC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var _ = yt(t) || "Component";
          tS.has(_) || (tS.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), U !== null || A !== null || F !== null) {
            var le = yt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            rS.has(le) || (rS.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Ne, U !== null ? `
  ` + U : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && X0(e, u, s), g;
    }
    function uw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), sS.enqueueReplaceState(t, t.state, null));
    }
    function oC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          eS.has(s) || (eS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        sS.enqueueReplaceState(t, t.state, null);
      }
    }
    function cS(e, t, a, i) {
      lw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Sg(e);
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
          iS.has(p) || (iS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & un && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (oS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (uw(e, u), Gh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Te;
        y |= za, (e.mode & qr) !== re && (y |= Aa), e.flags |= y;
      }
    }
    function ow(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = yf(e, t, !0);
        v = gf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && oC(e, u, a, v), TE();
      var _ = e.memoizedState, U = u.state = _;
      if (Gh(e, a, u, i), U = e.memoizedState, s === a && _ === U && !kh() && !qh()) {
        if (typeof u.componentDidMount == "function") {
          var A = Te;
          A |= za, (e.mode & qr) !== re && (A |= Aa), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (oS(e, t, g, a), U = e.memoizedState);
      var F = qh() || iC(e, t, s, a, _, U, v);
      if (F) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Te;
          le |= za, (e.mode & qr) !== re && (le |= Aa), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Te;
          Ne |= za, (e.mode & qr) !== re && (Ne |= Aa), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, F;
    }
    function sw(e, t, a, i, u) {
      var s = t.stateNode;
      RE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = oi;
      if (typeof g == "object" && g !== null)
        x = qn(g);
      else {
        var _ = yf(t, a, !0);
        x = gf(t, _);
      }
      var U = a.getDerivedStateFromProps, A = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && oC(t, s, i, x), TE();
      var F = t.memoizedState, le = s.state = F;
      if (Gh(t, i, s, u), le = t.memoizedState, f === v && F === le && !kh() && !qh() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Un), !1;
      typeof U == "function" && (oS(t, a, U, i), le = t.memoizedState);
      var Ne = qh() || iC(t, a, p, i, F, le, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Ne ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Un)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Te), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Un), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = x, Ne;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gu(t),
        digest: null
      };
    }
    function fS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function cw(e, t) {
      return !0;
    }
    function dS(e, t) {
      try {
        var a = cw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ve)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var fw = typeof WeakMap == "function" ? WeakMap : Map;
    function sC(e, t, a) {
      var i = Hu(en, a);
      i.tag = yg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        rb(u), dS(e, t);
      }, i;
    }
    function pS(e, t, a) {
      var i = Hu(en, a);
      i.tag = yg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          E1(e), dS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        E1(e), dS(e, t), typeof u != "function" && tb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Kr(e.lanes, we) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function cC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new fw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ab.bind(null, e, t, a);
        ha && Qp(e, a), t.then(s, s);
      }
    }
    function dw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function pw(e, t) {
      var a = e.tag;
      if ((e.mode & Oe) === re && (a === ze || a === Ve || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fC(e) {
      var t = e;
      do {
        if (t.tag === Re && W_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dC(e, t, a, i, u) {
      if ((e.mode & Oe) === re) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= qe, a.flags |= Dc, a.flags &= ~(Lv | kl), a.tag === ve) {
            var s = a.alternate;
            if (s === null)
              a.tag = gn;
            else {
              var f = Hu(en, we);
              f.tag = Yh, Ho(a, f, we);
            }
          }
          a.lanes = et(a.lanes, we);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function vw(e, t, a, i, u) {
      if (a.flags |= kl, ha && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        pw(a), Or() && a.mode & Oe && rE();
        var f = fC(t);
        if (f !== null) {
          f.flags &= ~Rr, dC(f, t, a, e, u), f.mode & Oe && cC(e, s, u), dw(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            cC(e, s, u), QS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Or() && a.mode & Oe) {
        rE();
        var v = fC(t);
        if (v !== null) {
          (v.flags & er) === Me && (v.flags |= Rr), dC(v, t, a, e, u), ig(sc(i, a));
          return;
        }
      }
      i = sc(i, a), Wx(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= er;
            var x = Ro(u);
            y.lanes = et(y.lanes, x);
            var _ = sC(y, g, x);
            Eg(y, _);
            return;
          }
          case ve:
            var U = i, A = y.type, F = y.stateNode;
            if ((y.flags & qe) === Me && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !f1(F))) {
              y.flags |= er;
              var le = Ro(u);
              y.lanes = et(y.lanes, le);
              var Ne = pS(y, U, le);
              Eg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function hw() {
      return null;
    }
    var Op = he.ReactCurrentOwner, cl = !1, vS, Lp, hS, mS, yS, cc, gS, Sm, Mp;
    vS = {}, Lp = {}, hS = {}, mS = {}, yS = {}, cc = !1, gS = {}, Sm = {}, Mp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = hE(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function mw(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function pC(e, t, a, i, u) {
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
        if (Op.current = t, Zn(!0), v = Of(e, t, f, i, p, u), y = Lf(), t.mode & un) {
          Pn(!0);
          try {
            v = Of(e, t, f, i, p, u), y = Lf();
          } finally {
            Pn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (kE(e, t, u), Vu(e, t, u)) : (Or() && y && Zy(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Cb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Hf(s), t.tag = Ie, t.type = f, CS(t, s), hC(e, t, f, i, u);
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
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = r0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && al(
          x,
          i,
          // Resolved props
          "prop",
          yt(g)
        );
      }
      var _ = e.child, U = bS(e, u);
      if (!U) {
        var A = _.memoizedProps, F = a.compare;
        if (F = F !== null ? F : _n, F(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var le = hc(_, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function hC(e, t, a, i, u) {
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
          if (cl = !1, t.pendingProps = i = g, bS(e, u))
            (e.flags & Dc) !== Me && (cl = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return SS(e, t, a, i, u);
    }
    function mC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Oe) === re) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Mm(t, a);
        } else if (Kr(a, ga)) {
          var x = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var _ = s !== null ? s.baseLanes : a;
          Mm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
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
        var U;
        s !== null ? (U = et(s.baseLanes, a), t.memoizedState = null) : U = a, Mm(t, U);
      }
      return Ra(e, t, u, a), t.child;
    }
    function yw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function gw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Sw(e, t, a) {
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
    function yC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= da, t.flags |= yi);
    }
    function SS(e, t, a, i, u) {
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
        if (Op.current = t, Zn(!0), v = Of(e, t, a, i, f, u), y = Lf(), t.mode & un) {
          Pn(!0);
          try {
            v = Of(e, t, a, i, f, u), y = Lf();
          } finally {
            Pn(!1);
          }
        }
        Zn(!1);
      }
      return ya(), e !== null && !cl ? (kE(e, t, u), Vu(e, t, u)) : (Or() && y && Zy(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function gC(e, t, a, i, u) {
      {
        switch (Ab(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= qe, t.flags |= er;
            var y = new Error("Simulated error coming from DevTools"), g = Ro(u);
            t.lanes = et(t.lanes, g);
            var x = pS(t, sc(y, t), g);
            Eg(t, x);
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
      var U;
      Wl(a) ? (U = !0, Lh(t)) : U = !1, _f(t, u);
      var A = t.stateNode, F;
      A === null ? (Cm(e, t), uC(t, a, i), cS(t, a, i, u), F = !0) : e === null ? F = ow(t, a, i, u) : F = sw(e, t, a, i, u);
      var le = ES(e, t, a, F, U, u);
      {
        var Ne = t.stateNode;
        F && Ne.props !== i && (cc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), cc = !0);
      }
      return le;
    }
    function ES(e, t, a, i, u, s) {
      yC(e, t);
      var f = (t.flags & qe) !== Me;
      if (!i && !f)
        return u && Z0(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nC();
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
      return t.flags |= ni, e !== null && f ? mw(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && Z0(t, a, !0), t.child;
    }
    function SC(e) {
      var t = e.stateNode;
      t.pendingContext ? K0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && K0(e, t.context, !1), Cg(e, t.containerInfo);
    }
    function Ew(e, t, a) {
      if (SC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      RE(e, t), Gh(t, i, null, a);
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
          return EC(e, t, p, a, g);
        } else if (p !== s) {
          var x = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return EC(e, t, p, a, x);
        } else {
          T_(t);
          var _ = hE(t, null, p, a);
          t.child = _;
          for (var U = _; U; )
            U.flags = U.flags & ~Xt | mi, U = U.sibling;
        }
      } else {
        if (Cf(), p === s)
          return Vu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function EC(e, t, a, i, u) {
      return Cf(), ig(u), t.flags |= Rr, Ra(e, t, a, i), t.child;
    }
    function Cw(e, t, a) {
      xE(t), e === null && ag(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Hy(i, u);
      return p ? f = null : s !== null && Hy(i, s) && (t.flags |= Ua), yC(e, t), Ra(e, t, f, a), t.child;
    }
    function Rw(e, t) {
      return e === null && ag(t), null;
    }
    function Tw(e, t, a, i) {
      Cm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Rb(v), g = sl(v, u), x;
      switch (y) {
        case ze:
          return CS(t, v), t.type = v = Hf(v), x = SS(null, t, v, g, i), x;
        case ve:
          return t.type = v = KS(v), x = gC(null, t, v, g, i), x;
        case Ve:
          return t.type = v = JS(v), x = pC(null, t, v, g, i), x;
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
          return x = vC(
            null,
            t,
            v,
            sl(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ae && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function _w(e, t, a, i, u) {
      Cm(e, t), t.tag = ve;
      var s;
      return Wl(a) ? (s = !0, Lh(t)) : s = !1, _f(t, u), uC(t, a, i), cS(t, a, i, u), ES(null, t, a, !0, s, u);
    }
    function ww(e, t, a, i) {
      Cm(e, t);
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
          vS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), vS[y] = !0);
        }
        t.mode & un && ll.recordLegacyContextWarning(t, null), Zn(!0), Op.current = t, p = Of(null, t, a, u, s, i), v = Lf(), Zn(!1);
      }
      if (ya(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = yt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = yt(a) || "Unknown";
          Lp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Lp[x] = !0);
        }
        t.tag = ve, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Wl(a) ? (_ = !0, Lh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Sg(t), lC(t, p), cS(t, a, u, i), ES(null, t, a, !0, _, i);
      } else {
        if (t.tag = ze, t.mode & un) {
          Pn(!0);
          try {
            p = Of(null, t, a, u, s, i), v = Lf();
          } finally {
            Pn(!1);
          }
        }
        return Or() && v && Zy(t), Ra(null, t, p, i), CS(t, a), t.child;
      }
    }
    function CS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = La();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), yS[u] || (yS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = yt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = yt(t) || "Unknown";
          mS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), mS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = yt(t) || "Unknown";
          hS[v] || (S("%s: Function components do not support contextType.", v), hS[v] = !0);
        }
      }
    }
    var RS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Kt
    };
    function TS(e) {
      return {
        baseLanes: e,
        cachePool: hw(),
        transitions: null
      };
    }
    function xw(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _g(e, Cp);
    }
    function Dw(e, t) {
      return To(e.childLanes, t);
    }
    function CC(e, t, a) {
      var i = t.pendingProps;
      jb(t) && (t.flags |= qe);
      var u = ul.current, s = !1, f = (t.flags & qe) !== Me;
      if (f || bw(u, e) ? (s = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (u = Q_(u, DE)), u = xf(u), Po(t, u), e === null) {
        ag(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Nw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = kw(t, y, g, a), _ = t.child;
          return _.memoizedState = TS(a), t.memoizedState = RS, x;
        } else
          return _S(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var A = U.dehydrated;
          if (A !== null)
            return Uw(e, t, f, i, A, U, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Ne = Lw(e, t, le, F, a), be = t.child, _t = e.child.memoizedState;
          return be.memoizedState = _t === null ? TS(a) : xw(_t, a), be.childLanes = Dw(e, a), t.memoizedState = RS, Ne;
        } else {
          var vt = i.children, O = Ow(e, t, vt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function kw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Oe) === re && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & We && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = qo(a, u, i, null)) : (p = wS(f, u), v = qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return R1(e, t, Y, null);
    }
    function RC(e, t) {
      return hc(e, t);
    }
    function Ow(e, t, a, i) {
      var u = e.child, s = u.sibling, f = RC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Oe) === re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Lw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Oe) === re && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & We && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = RC(f, v), y.subtreeFlags = f.subtreeFlags & tr;
      var x;
      return p !== null ? x = hc(p, i) : (x = qo(i, s, u, null), x.flags |= Xt), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function Em(e, t, a, i) {
      i !== null && ig(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = _S(t, s);
      return f.flags |= Xt, t.memoizedState = null, f;
    }
    function Mw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = qo(i, s, u, null);
      return v.flags |= Xt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Oe) !== re && Rf(t, e.child, null, u), v;
    }
    function Nw(e, t, a) {
      return (e.mode & Oe) === re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : $y(t) ? e.lanes = Zi : e.lanes = ga, null;
    }
    function Uw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = fS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Em(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= qe, null;
          var H = i.children, L = i.fallback, K = Mw(e, t, H, L, f), pe = t.child;
          return pe.memoizedState = TS(f), t.memoizedState = RS, K;
        }
      else {
        if (C_(), (t.mode & Oe) === re)
          return Em(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if ($y(u)) {
          var p, v, y;
          {
            var g = FT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = fS(x, p, y);
          return Em(e, t, f, _);
        }
        var U = Kr(f, e.childLanes);
        if (cl || U) {
          var A = Lm();
          if (A !== null) {
            var F = Md(A, f);
            if (F !== Kt && F !== s.retryLane) {
              s.retryLane = F;
              var le = en;
              Ba(e, F), cr(A, e, F, le);
            }
          }
          QS();
          var Ne = fS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Em(e, t, f, Ne);
        } else if (I0(u)) {
          t.flags |= qe, t.child = e.child;
          var be = ib.bind(null, e);
          return HT(u, be), null;
        } else {
          __(t, u, s.treeContext);
          var _t = i.children, vt = _S(t, _t);
          return vt.flags |= mi, vt;
        }
      }
    }
    function TC(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), hg(e.return, t, a);
    }
    function zw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && TC(i, a, e);
        } else if (i.tag === Et)
          TC(i, a, e);
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
    function Aw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Jh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !gS[e])
        if (gS[e] = !0, typeof e == "string")
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
    function Fw(e, t) {
      e !== void 0 && !Sm[e] && (e !== "collapsed" && e !== "hidden" ? (Sm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Sm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function _C(e, t) {
      {
        var a = xt(e), i = !a && typeof Vr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Hw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (xt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!_C(e[a], a))
              return;
        } else {
          var i = Vr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!_C(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
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
      jw(u), Fw(s, u), Hw(f, u), Ra(e, t, f, a);
      var p = ul.current, v = _g(p, Cp);
      if (v)
        p = wg(p, Cp), t.flags |= qe;
      else {
        var y = e !== null && (e.flags & qe) !== Me;
        y && zw(t, t.child, a), p = xf(p);
      }
      if (Po(t, p), (t.mode & Oe) === re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Aw(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), xS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var A = U.alternate;
              if (A !== null && Jh(A) === null) {
                t.child = U;
                break;
              }
              var F = U.sibling;
              U.sibling = _, _ = U, U = F;
            }
            xS(
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
            xS(
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
    function Vw(e, t, a) {
      Cg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var xC = !1;
    function Pw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xC || (xC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (gE(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !kh())
            return Vu(e, t, a);
        } else
          j_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var bC = !1;
    function Bw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (bC || (bC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), _f(t, a);
      var f = qn(i);
      ma(t);
      var p;
      return Op.current = t, Zn(!0), p = s(f), Zn(!1), ya(), t.flags |= ni, Ra(e, t, p, a), t.child;
    }
    function Np() {
      cl = !0;
    }
    function Cm(e, t) {
      (t.mode & Oe) === re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Xt);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), Ip(t.lanes), Kr(a, t.childLanes) ? (z_(e, t), t.child) : null;
    }
    function $w(e, t, a) {
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
    function bS(e, t) {
      var a = e.lanes;
      return !!Kr(a, t);
    }
    function Yw(e, t, a) {
      switch (t.tag) {
        case te:
          SC(t), t.stateNode, Cf();
          break;
        case ue:
          xE(t);
          break;
        case ve: {
          var i = t.type;
          Wl(i) && Lh(t);
          break;
        }
        case je:
          Cg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          gE(t, s, u);
          break;
        }
        case Ot:
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
              return Po(t, xf(ul.current)), t.flags |= qe, null;
            var y = t.child, g = y.childLanes;
            if (Kr(a, g))
              return CC(e, t, a);
            Po(t, xf(ul.current));
            var x = Vu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Po(t, xf(ul.current));
          break;
        }
        case Et: {
          var _ = (e.flags & qe) !== Me, U = Kr(a, t.childLanes);
          if (_) {
            if (U)
              return wC(e, t, a);
            t.flags |= qe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Po(t, ul.current), U)
            break;
          return null;
        }
        case Pe:
        case tt:
          return t.lanes = Y, mC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function DC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return $w(e, t, r0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || kh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & qe) === Me)
            return cl = !1, Yw(e, t, a);
          (e.flags & Dc) !== Me ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Or() && h_(t)) {
        var f = t.index, p = m_();
        nE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ge:
          return ww(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return Tw(e, t, v, a);
        }
        case ze: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : sl(y, g);
          return SS(e, t, y, x, a);
        }
        case ve: {
          var _ = t.type, U = t.pendingProps, A = t.elementType === _ ? U : sl(_, U);
          return gC(e, t, _, A, a);
        }
        case te:
          return Ew(e, t, a);
        case ue:
          return Cw(e, t, a);
        case Ce:
          return Rw(e, t);
        case Re:
          return CC(e, t, a);
        case je:
          return Vw(e, t, a);
        case Ve: {
          var F = t.type, le = t.pendingProps, Ne = t.elementType === F ? le : sl(F, le);
          return pC(e, t, F, Ne, a);
        }
        case pt:
          return yw(e, t, a);
        case Fn:
          return gw(e, t, a);
        case Ot:
          return Sw(e, t, a);
        case at:
          return Pw(e, t, a);
        case sn:
          return Bw(e, t, a);
        case ft: {
          var be = t.type, _t = t.pendingProps, vt = sl(be, _t);
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
          return vt = sl(be.type, vt), vC(e, t, be, vt, a);
        }
        case Ie:
          return hC(e, t, t.type, t.pendingProps, a);
        case gn: {
          var H = t.type, L = t.pendingProps, K = t.elementType === H ? L : sl(H, L);
          return _w(e, t, H, K, a);
        }
        case Et:
          return wC(e, t, a);
        case nn:
          break;
        case Pe:
          return mC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= Te;
    }
    function kC(e) {
      e.flags |= da, e.flags |= yi;
    }
    var OC, DS, LC, MC;
    OC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Ce)
          dT(e, u.stateNode);
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
    }, DS = function(e, t) {
    }, LC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Rg(), v = vT(f, a, s, i, u, p);
        t.updateQueue = v, v && Mf(t);
      }
    }, MC = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Me;
      if (t) {
        if ((e.mode & We) !== re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & tr, i |= y.flags & tr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & We) !== re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Iw(e, t, a) {
      if (k_() && (t.mode & Oe) !== re && (t.flags & qe) === Me)
        return sE(t), Cf(), t.flags |= Rr | kl | er, !1;
      var i = Ah(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (b_(t), Mr(t), (t.mode & We) !== re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & qe) === Me && (t.memoizedState = null), t.flags |= Te, Mr(t), (t.mode & We) !== re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return cE(), !0;
    }
    function NC(e, t, a) {
      var i = t.pendingProps;
      switch (eg(t), t.tag) {
        case Ge:
        case wn:
        case Ie:
        case ze:
        case Ve:
        case pt:
        case Fn:
        case Ot:
        case sn:
        case ft:
          return Mr(t), null;
        case ve: {
          var u = t.type;
          return Wl(u) && Oh(t), Mr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (wf(t), Xy(t), bg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ah(t);
            if (f)
              Mf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Me) && (t.flags |= Un, cE());
            }
          }
          return DS(e, t), Mr(t), null;
        }
        case ue: {
          Tg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, y, i, v), e.ref !== t.ref && kC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var g = Rg(), x = Ah(t);
            if (x)
              w_(t, v, g) && Mf(t);
            else {
              var _ = fT(y, i, v, g, t);
              OC(_, t, !1, !1), t.stateNode = _, pT(_, y, i, v) && Mf(t);
            }
            t.ref !== null && kC(t);
          }
          return Mr(t), null;
        }
        case Ce: {
          var U = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            MC(e, t, A, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), le = Rg(), Ne = Ah(t);
            Ne ? x_(t) && Mf(t) : t.stateNode = hT(U, F, le, t);
          }
          return Mr(t), null;
        }
        case Re: {
          bf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = Iw(e, t, be);
            if (!_t)
              return t.flags & er ? t : null;
          }
          if ((t.flags & qe) !== Me)
            return t.lanes = a, (t.mode & We) !== re && Jg(t), t;
          var vt = be !== null, O = e !== null && e.memoizedState !== null;
          if (vt !== O && vt) {
            var H = t.child;
            if (H.flags |= Dl, (t.mode & Oe) !== re) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              L || _g(ul.current, DE) ? Qx() : QS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Te), Mr(t), (t.mode & We) !== re && vt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case je:
          return wf(t), DS(e, t), e === null && o_(t.stateNode.containerInfo), Mr(t), null;
        case at:
          var oe = t.type._context;
          return vg(oe, t), Mr(t), null;
        case gn: {
          var Ye = t.type;
          return Wl(Ye) && Oh(t), Mr(t), null;
        }
        case Et: {
          bf(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return Mr(t), null;
          var Wt = (t.flags & qe) !== Me, Nt = Ke.rendering;
          if (Nt === null)
            if (Wt)
              Up(Ke, !1);
            else {
              var $n = Gx() && (e === null || (e.flags & qe) === Me);
              if (!$n)
                for (var Ut = t.child; Ut !== null; ) {
                  var jn = Jh(Ut);
                  if (jn !== null) {
                    Wt = !0, t.flags |= qe, Up(Ke, !1);
                    var ta = jn.updateQueue;
                    return ta !== null && (t.updateQueue = ta, t.flags |= Te), t.subtreeFlags = Me, A_(t, a), Po(t, wg(ul.current, Cp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ke.tail !== null && zn() > e1() && (t.flags |= qe, Wt = !0, Up(Ke, !1), t.lanes = Hv);
            }
          else {
            if (!Wt) {
              var jr = Jh(Nt);
              if (jr !== null) {
                t.flags |= qe, Wt = !0;
                var ci = jr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Te), Up(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !Nt.alternate && !Or())
                  return Mr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - Ke.renderingStartTime > e1() && a !== ga && (t.flags |= qe, Wt = !0, Up(Ke, !1), t.lanes = Hv);
            }
            if (Ke.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var wa = Ke.last;
              wa !== null ? wa.sibling = Nt : t.child = Nt, Ke.last = Nt;
            }
          }
          if (Ke.tail !== null) {
            var xa = Ke.tail;
            Ke.rendering = xa, Ke.tail = xa.sibling, Ke.renderingStartTime = zn(), xa.sibling = null;
            var na = ul.current;
            return Wt ? na = wg(na, Cp) : na = xf(na), Po(t, na), xa;
          }
          return Mr(t), null;
        }
        case nn:
          break;
        case Pe:
        case tt: {
          IS(t);
          var Iu = t.memoizedState, Vf = Iu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, tu = Xp !== null;
            tu !== Vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= Dl);
          }
          return !Vf || (t.mode & Oe) === re ? Mr(t) : Kr(eu, ga) && (Mr(t), t.subtreeFlags & (Xt | Te) && (t.flags |= Dl)), null;
        }
        case wt:
          return null;
        case nt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qw(e, t, a) {
      switch (eg(t), t.tag) {
        case ve: {
          var i = t.type;
          Wl(i) && Oh(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | qe, (t.mode & We) !== re && Jg(t), t) : null;
        }
        case te: {
          t.stateNode, wf(t), Xy(t), bg();
          var s = t.flags;
          return (s & er) !== Me && (s & qe) === Me ? (t.flags = s & ~er | qe, t) : null;
        }
        case ue:
          return Tg(t), null;
        case Re: {
          bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | qe, (t.mode & We) !== re && Jg(t), t) : null;
        }
        case Et:
          return bf(t), null;
        case je:
          return wf(t), null;
        case at:
          var v = t.type._context;
          return vg(v, t), null;
        case Pe:
        case tt:
          return IS(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (eg(t), t.tag) {
        case ve: {
          var i = t.type.childContextTypes;
          i != null && Oh(t);
          break;
        }
        case te: {
          t.stateNode, wf(t), Xy(t), bg();
          break;
        }
        case ue: {
          Tg(t);
          break;
        }
        case je:
          wf(t);
          break;
        case Re:
          bf(t);
          break;
        case Et:
          bf(t);
          break;
        case at:
          var u = t.type._context;
          vg(u, t);
          break;
        case Pe:
        case tt:
          IS(t);
          break;
      }
    }
    var zC = null;
    zC = /* @__PURE__ */ new Set();
    var Rm = !1, Nr = !1, Ww = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Nf = null, Uf = null;
    function Gw(e) {
      ti(null, function() {
        throw e;
      }), Gi();
    }
    var qw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & We)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function AC(e, t) {
      try {
        Yo(ar, e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        qw(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function Xw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function jC(e, t) {
      try {
        HC(e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && ct && e.mode & We)
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
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function Tm(e, t, a) {
      try {
        a();
      } catch (i) {
        on(e, t, i);
      }
    }
    var FC = !1;
    function Kw(e, t) {
      sT(e.containerInfo), ge = t, Jw();
      var a = FC;
      return FC = !1, a;
    }
    function Jw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & Qr) !== Me && t !== null ? (t.return = e, ge = t) : Zw();
      }
    }
    function Zw() {
      for (; ge !== null; ) {
        var e = ge;
        hn(e);
        try {
          ex(e);
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
    function ex(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Un) !== Me) {
        switch (hn(e), e.tag) {
          case ze:
          case Ve:
          case Ie:
            break;
          case ve: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = zC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              UT(v.containerInfo);
            }
            break;
          }
          case ue:
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
            f.destroy = void 0, p !== void 0 && ((e & Lr) !== $a ? zc(t) : (e & ar) !== $a && so(t), (e & Gl) !== $a && Wp(!0), Tm(t, a, p), (e & Gl) !== $a && Wp(!1), (e & Lr) !== $a ? jv() : (e & ar) !== $a && co());
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
            (e & Lr) !== $a ? Uc(t) : (e & ar) !== $a && _s(t);
            var f = s.create;
            (e & Gl) !== $a && Wp(!0), s.destroy = f(), (e & Gl) !== $a && Wp(!1), (e & Lr) !== $a ? Av() : (e & ar) !== $a && gi();
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
    function tx(e, t) {
      if ((t.flags & Te) !== Me)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eC(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Ot:
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
    function nx(e, t, a, i) {
      if ((a.flags & ri) !== Me)
        switch (a.tag) {
          case ze:
          case Ve:
          case Ie: {
            if (!Nr)
              if (a.mode & We)
                try {
                  Jl(), Yo(ar | rr, a);
                } finally {
                  Kl(a);
                }
              else
                Yo(ar | rr, a);
            break;
          }
          case ve: {
            var u = a.stateNode;
            if (a.flags & Te && !Nr)
              if (t === null)
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & We)
                  try {
                    Jl(), u.componentDidMount();
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & We)
                  try {
                    Jl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), _E(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ve:
                    y = a.child.stateNode;
                    break;
                }
              _E(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Te) {
              var x = a.type, _ = a.memoizedProps;
              ET(g, x, _);
            }
            break;
          }
          case Ce:
            break;
          case je:
            break;
          case Ot: {
            {
              var U = a.memoizedProps, A = U.onCommit, F = U.onRender, le = a.stateNode.effectDuration, Ne = eC(), be = t === null ? "mount" : "update";
              ZE() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof A == "function" && A(a.memoizedProps.id, be, le, Ne), Zx(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case te:
                      var vt = _t.stateNode;
                      vt.effectDuration += le;
                      break e;
                    case Ot:
                      var O = _t.stateNode;
                      O.effectDuration += le;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case Re: {
            cx(e, a);
            break;
          }
          case Et:
          case gn:
          case nn:
          case Pe:
          case tt:
          case nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Nr || a.flags & da && HC(a);
    }
    function rx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          if (e.mode & We)
            try {
              Jl(), AC(e, e.return);
            } finally {
              Kl(e);
            }
          else
            AC(e, e.return);
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Xw(e, e.return, t), jC(e, e.return);
          break;
        }
        case ue: {
          jC(e, e.return);
          break;
        }
      }
    }
    function ax(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? OT(u) : MT(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? LT(s) : NT(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === tt) && i.memoizedState !== null && i !== e)) {
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
    function HC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & We)
            try {
              Jl(), u = t(i);
            } finally {
              Kl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function ix(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function VC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, VC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && f_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function lx(e) {
      for (var t = e.return; t !== null; ) {
        if (PC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PC(e) {
      return e.tag === ue || e.tag === te || e.tag === je;
    }
    function BC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || PC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Ce && t.tag !== Jt; ) {
          if (t.flags & Xt || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Xt))
          return t.stateNode;
      }
    }
    function ux(e) {
      var t = lx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Ua && (Y0(a), t.flags &= ~Ua);
          var i = BC(e);
          LS(e, i, a);
          break;
        }
        case te:
        case je: {
          var u = t.stateNode.containerInfo, s = BC(e);
          OS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? xT(a, s, t) : _T(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    function LS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? wT(a, s, t) : TT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          LS(f, t, a);
          for (var p = f.sibling; p !== null; )
            LS(p, t, a), p = p.sibling;
        }
      }
    }
    var Ur = null, dl = !1;
    function ox(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Ur = i.stateNode, dl = !1;
              break e;
            }
            case te: {
              Ur = i.stateNode.containerInfo, dl = !0;
              break e;
            }
            case je: {
              Ur = i.stateNode.containerInfo, dl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $C(e, t, a), Ur = null, dl = !1;
      }
      ix(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        $C(e, t, i), i = i.sibling;
    }
    function $C(e, t, a) {
      switch (vd(a), a.tag) {
        case ue:
          Nr || zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ce: {
          {
            var i = Ur, u = dl;
            Ur = null, Io(e, t, a), Ur = i, dl = u, Ur !== null && (dl ? DT(Ur, a.stateNode) : bT(Ur, a.stateNode));
          }
          return;
        }
        case Jt: {
          Ur !== null && (dl ? kT(Ur, a.stateNode) : By(Ur, a.stateNode));
          return;
        }
        case je: {
          {
            var s = Ur, f = dl;
            Ur = a.stateNode.containerInfo, dl = !0, Io(e, t, a), Ur = s, dl = f;
          }
          return;
        }
        case ze:
        case Ve:
        case ft:
        case Ie: {
          if (!Nr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, _ = x.destroy, U = x.tag;
                  _ !== void 0 && ((U & Gl) !== $a ? Tm(a, t, _) : (U & ar) !== $a && (so(a), a.mode & We ? (Jl(), Tm(a, t, _), Kl(a)) : Tm(a, t, _), co())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case ve: {
          if (!Nr) {
            zf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && kS(a, t, A);
          }
          Io(e, t, a);
          return;
        }
        case nn: {
          Io(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Oe
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
    function sx(e) {
      e.memoizedState;
    }
    function cx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && GT(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ww()), t.forEach(function(i) {
          var u = lb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ha)
              if (Nf !== null && Uf !== null)
                Qp(Uf, Nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function fx(e, t, a) {
      Nf = a, Uf = e, hn(t), IC(t, e), hn(t), Nf = null, Uf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            ox(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = as();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          hn(p), IC(p, e), p = p.sibling;
      hn(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ze:
        case Ve:
        case ft:
        case Ie: {
          if (pl(t, e), Zl(e), u & Te) {
            try {
              fl(Gl | rr, e, e.return), Yo(Gl | rr, e);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
            if (e.mode & We) {
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
        case ve: {
          pl(t, e), Zl(e), u & da && i !== null && zf(i, i.return);
          return;
        }
        case ue: {
          pl(t, e), Zl(e), u & da && i !== null && zf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                Y0(s);
              } catch (Ye) {
                on(e, e.return, Ye);
              }
            }
            if (u & Te) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    CT(f, g, y, v, p, e);
                  } catch (Ye) {
                    on(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (pl(t, e), Zl(e), u & Te) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, _ = e.memoizedProps, U = i !== null ? i.memoizedProps : _;
            try {
              RT(x, U, _);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
          }
          return;
        }
        case te: {
          if (pl(t, e), Zl(e), u & Te && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                WT(t.containerInfo);
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
        case Re: {
          pl(t, e), Zl(e);
          var F = e.child;
          if (F.flags & Dl) {
            var le = F.stateNode, Ne = F.memoizedState, be = Ne !== null;
            if (le.isHidden = be, be) {
              var _t = F.alternate !== null && F.alternate.memoizedState !== null;
              _t || Ix();
            }
          }
          if (u & Te) {
            try {
              sx(e);
            } catch (Ye) {
              on(e, e.return, Ye);
            }
            YC(e);
          }
          return;
        }
        case Pe: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Oe
          ) {
            var O = Nr;
            Nr = O || vt, pl(t, e), Nr = O;
          } else
            pl(t, e);
          if (Zl(e), u & Dl) {
            var H = e.stateNode, L = e.memoizedState, K = L !== null, pe = e;
            if (H.isHidden = K, K && !vt && (pe.mode & Oe) !== re) {
              ge = pe;
              for (var oe = pe.child; oe !== null; )
                ge = oe, px(oe), oe = oe.sibling;
            }
            ax(pe, K);
          }
          return;
        }
        case Et: {
          pl(t, e), Zl(e), u & Te && YC(e);
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
          ux(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~Xt;
      }
      t & mi && (e.flags &= ~mi);
    }
    function dx(e, t, a) {
      Nf = a, Uf = t, ge = e, QC(e, t, a), Nf = null, Uf = null;
    }
    function QC(e, t, a) {
      for (var i = (e.mode & Oe) !== re; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || Rm;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Nr, x = Rm, _ = Nr;
            Rm = p, Nr = g, Nr && !_ && (ge = u, vx(u));
            for (var U = s; U !== null; )
              ge = U, QC(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            ge = u, Rm = x, Nr = _, MS(e, t, a);
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
            nx(t, u, i, a);
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
    function px(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case ze:
          case Ve:
          case ft:
          case Ie: {
            if (t.mode & We)
              try {
                Jl(), fl(ar, t, t.return);
              } finally {
                Kl(t);
              }
            else
              fl(ar, t, t.return);
            break;
          }
          case ve: {
            zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case ue: {
            zf(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              WC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : WC(e);
      }
    }
    function WC(e) {
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
    function vx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            GC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : GC(e);
      }
    }
    function GC(e) {
      for (; ge !== null; ) {
        var t = ge;
        hn(t);
        try {
          rx(t);
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
    function hx(e, t, a, i) {
      ge = t, mx(t, e, a, i);
    }
    function mx(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gr) !== Me && s !== null ? (s.return = u, ge = s) : yx(e, t, a, i);
      }
    }
    function yx(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Ir) !== Me) {
          hn(u);
          try {
            gx(t, u, a, i);
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
    function gx(e, t, a, i) {
      switch (t.tag) {
        case ze:
        case Ve:
        case Ie: {
          if (t.mode & We) {
            Kg();
            try {
              Yo(Lr | rr, t);
            } finally {
              Xg(t);
            }
          } else
            Yo(Lr | rr, t);
          break;
        }
      }
    }
    function Sx(e) {
      ge = e, Ex();
    }
    function Ex() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Mt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, Tx(u, e);
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
        (e.subtreeFlags & Gr) !== Me && t !== null ? (t.return = e, ge = t) : Cx();
      }
    }
    function Cx() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Ir) !== Me && (hn(e), Rx(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          e.mode & We ? (Kg(), fl(Lr | rr, e, e.return), Xg(e)) : fl(Lr | rr, e, e.return);
          break;
        }
      }
    }
    function Tx(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        hn(a), wx(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : _x(e);
      }
    }
    function _x(e) {
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
    function wx(e, t) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          e.mode & We ? (Kg(), fl(Lr, e, t), Xg(e)) : fl(Lr, e, t);
          break;
        }
      }
    }
    function xx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          try {
            Yo(ar | rr, e);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ve: {
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
    function bx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          try {
            Yo(Lr | rr, e);
          } catch (t) {
            on(e, e.return, t);
          }
          break;
        }
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie: {
          try {
            fl(ar | rr, e, e.return);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function kx(e) {
      switch (e.tag) {
        case ze:
        case Ve:
        case Ie:
          try {
            fl(Lr | rr, e, e.return);
          } catch (t) {
            on(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Ox = [];
    function Lx() {
      Ox.forEach(function(e) {
        return e();
      });
    }
    var Mx = he.ReactCurrentActQueue;
    function Nx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Mx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ux = Math.ceil, NS = he.ReactCurrentDispatcher, US = he.ReactCurrentOwner, zr = he.ReactCurrentBatchConfig, vl = he.ReactCurrentActQueue, ur = (
      /*             */
      0
    ), XC = (
      /*               */
      1
    ), Ar = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Pu = 0, Ap = 1, fc = 2, _m = 3, jp = 4, KC = 5, zS = 6, Tt = ur, Ta = null, On = null, or = Y, eu = Y, AS = zo(Y), sr = Pu, Fp = null, wm = Y, Hp = Y, xm = Y, Vp = null, Ya = null, jS = 0, JC = 500, ZC = 1 / 0, zx = 500, Bu = null;
    function Pp() {
      ZC = zn() + zx;
    }
    function e1() {
      return ZC;
    }
    var bm = !1, FS = null, Af = null, dc = !1, Qo = null, Bp = Y, HS = [], VS = null, Ax = 50, $p = 0, PS = null, BS = !1, Dm = !1, jx = 50, jf = 0, km = null, Yp = en, Om = Y, t1 = !1;
    function Lm() {
      return Ta;
    }
    function _a() {
      return (Tt & (Ar | Li)) !== ur ? zn() : (Yp !== en || (Yp = zn()), Yp);
    }
    function Wo(e) {
      var t = e.mode;
      if ((t & Oe) === re)
        return we;
      if ((Tt & Ar) !== ur && or !== Y)
        return Ro(or);
      var a = M_() !== L_;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Om === Kt && (Om = Tr()), Om;
      }
      var u = wr();
      if (u !== Kt)
        return u;
      var s = mT();
      return s;
    }
    function Fx(e) {
      var t = e.mode;
      return (t & Oe) === re ? we : _r();
    }
    function cr(e, t, a, i) {
      ob(), t1 && S("useInsertionEffect must not schedule updates."), BS && (Dm = !0), _o(e, a, i), (Tt & Ar) !== Y && e === Ta ? fb(t) : (ha && Nd(e, t, a), db(t), e === Ta && ((Tt & Ar) === ur && (Hp = et(Hp, a)), sr === jp && Go(e, or)), Ia(e, i), a === we && Tt === ur && (t.mode & Oe) === re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Pp(), tE()));
    }
    function Hx(e, t, a) {
      var i = e.current;
      i.lanes = t, _o(e, t, a), Ia(e, a);
    }
    function Vx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Ar) !== ur
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = Os(e, e === Ta ? or : Y);
      if (i === Y) {
        a !== null && y1(a), e.callbackNode = null, e.callbackPriority = Kt;
        return;
      }
      var u = jl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== qS)) {
        a == null && s !== we && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && y1(a);
      var f;
      if (u === we)
        e.tag === Ao ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), v_(a1.bind(null, e))) : eE(a1.bind(null, e)), vl.current !== null ? vl.current.push(jo) : gT(function() {
          (Tt & (Ar | Li)) === ur && jo();
        }), f = null;
      else {
        var p;
        switch (Qv(i)) {
          case Sa:
            p = Ml;
            break;
          case Ri:
            p = uo;
            break;
          case li:
            p = Nl;
            break;
          case As:
            p = Ul;
            break;
          default:
            p = Nl;
            break;
        }
        f = XS(p, n1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function n1(e, t) {
      if (aw(), Yp = en, Om = Y, (Tt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Os(e, e === Ta ? or : Y);
      if (u === Y)
        return null;
      var s = !Ms(e, u) && !Yv(e, u) && !t, f = s ? Xx(e, u) : Nm(e, u);
      if (f !== Pu) {
        if (f === fc) {
          var p = Ls(e);
          p !== Y && (u = p, f = $S(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw pc(e, Y), Go(e, u), Ia(e, zn()), v;
        }
        if (f === zS)
          Go(e, u);
        else {
          var y = !Ms(e, u), g = e.current.alternate;
          if (y && !Bx(g)) {
            if (f = Nm(e, u), f === fc) {
              var x = Ls(e);
              x !== Y && (u = x, f = $S(e, x));
            }
            if (f === Ap) {
              var _ = Fp;
              throw pc(e, Y), Go(e, u), Ia(e, zn()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Px(e, f, u);
        }
      }
      return Ia(e, zn()), e.callbackNode === a ? n1.bind(null, e) : null;
    }
    function $S(e, t) {
      var a = Vp;
      if (de(e)) {
        var i = pc(e, t);
        i.flags |= Rr, u_(e.containerInfo);
      }
      var u = Nm(e, t);
      if (u !== fc) {
        var s = Ya;
        Ya = a, s !== null && r1(s);
      }
      return u;
    }
    function r1(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Px(e, t, a) {
      switch (t) {
        case Pu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case fc: {
          vc(e, Ya, Bu);
          break;
        }
        case _m: {
          if (Go(e, a), Dd(a) && // do not delay if we're inside an act() scope
          !g1()) {
            var i = jS + JC - zn();
            if (i > 10) {
              var u = Os(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Hl(s, a)) {
                _a(), Us(e, s);
                break;
              }
              e.timeoutHandle = Vy(vc.bind(null, e, Ya, Bu), i);
              break;
            }
          }
          vc(e, Ya, Bu);
          break;
        }
        case jp: {
          if (Go(e, a), $v(a))
            break;
          if (!g1()) {
            var f = Vv(e, a), p = f, v = zn() - p, y = ub(v) - v;
            if (y > 10) {
              e.timeoutHandle = Vy(vc.bind(null, e, Ya, Bu), y);
              break;
            }
          }
          vc(e, Ya, Bu);
          break;
        }
        case KC: {
          vc(e, Ya, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Bx(e) {
      for (var t = e; ; ) {
        if (t.flags & hu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & hu && v !== null) {
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
      t = To(t, xm), t = To(t, Hp), Ld(e, t);
    }
    function a1(e) {
      if (iw(), (Tt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      Yu();
      var t = Os(e, Y);
      if (!Kr(t, we))
        return Ia(e, zn()), null;
      var a = Nm(e, t);
      if (e.tag !== Ao && a === fc) {
        var i = Ls(e);
        i !== Y && (t = i, a = $S(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw pc(e, Y), Go(e, t), Ia(e, zn()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Ya, Bu), Ia(e, zn()), null;
    }
    function $x(e, t) {
      t !== Y && (Kc(e, et(t, we)), Ia(e, zn()), (Tt & (Ar | Li)) === ur && (Pp(), jo()));
    }
    function YS(e, t) {
      var a = Tt;
      Tt |= XC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === ur && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Pp(), tE());
      }
    }
    function Yx(e, t, a, i, u) {
      var s = wr(), f = zr.transition;
      try {
        return zr.transition = null, bt(Sa), e(t, a, i, u);
      } finally {
        bt(s), zr.transition = f, Tt === ur && Pp();
      }
    }
    function $u(e) {
      Qo !== null && Qo.tag === Ao && (Tt & (Ar | Li)) === ur && Yu();
      var t = Tt;
      Tt |= XC;
      var a = zr.transition, i = wr();
      try {
        return zr.transition = null, bt(Sa), e ? e() : void 0;
      } finally {
        bt(i), zr.transition = a, Tt = t, (Tt & (Ar | Li)) === ur && jo();
      }
    }
    function i1() {
      return (Tt & (Ar | Li)) !== ur;
    }
    function Mm(e, t) {
      Zr(AS, eu, e), eu = et(eu, t);
    }
    function IS(e) {
      eu = AS.current, Jr(AS, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Py && (e.timeoutHandle = Py, yT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          UC(u, i), i = i.return;
        }
      Ta = e;
      var s = hc(e.current, null);
      return On = s, or = eu = t, sr = Pu, Fp = null, wm = Y, Hp = Y, xm = Y, Vp = null, Ya = null, H_(), ll.discardPendingWarnings(), s;
    }
    function l1(e, t) {
      do {
        var a = On;
        try {
          if (Bh(), OE(), rn(), US.current = null, a === null || a.return === null) {
            sr = Ap, Fp = t, On = null;
            return;
          }
          if (ht && a.mode & We && ym(a, !0), it)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              yd(a, i, or);
            } else
              Su(a, t, or);
          vw(e, a.return, a, t, or), c1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function u1() {
      var e = NS.current;
      return NS.current = dm, e === null ? dm : e;
    }
    function o1(e) {
      NS.current = e;
    }
    function Ix() {
      jS = zn();
    }
    function Ip(e) {
      wm = et(e, wm);
    }
    function Qx() {
      sr === Pu && (sr = _m);
    }
    function QS() {
      (sr === Pu || sr === _m || sr === fc) && (sr = jp), Ta !== null && (bd(wm) || bd(Hp)) && Go(Ta, or);
    }
    function Wx(e) {
      sr !== jp && (sr = fc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Gx() {
      return sr === Pu;
    }
    function Nm(e, t) {
      var a = Tt;
      Tt |= Ar;
      var i = u1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, or), u.clear()), zs(e, t);
        }
        Bu = Ci(), pc(e, t);
      }
      ws(t);
      do
        try {
          qx();
          break;
        } catch (s) {
          l1(e, s);
        }
      while (!0);
      if (Bh(), Tt = a, o1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ac(), Ta = null, or = Y, sr;
    }
    function qx() {
      for (; On !== null; )
        s1(On);
    }
    function Xx(e, t) {
      var a = Tt;
      Tt |= Ar;
      var i = u1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, or), u.clear()), zs(e, t);
        }
        Bu = Ci(), Pp(), pc(e, t);
      }
      ws(t);
      do
        try {
          Kx();
          break;
        } catch (s) {
          l1(e, s);
        }
      while (!0);
      return Bh(), o1(i), Tt = a, On !== null ? (Sd(), Pu) : (Ac(), Ta = null, or = Y, sr);
    }
    function Kx() {
      for (; On !== null && !Nv(); )
        s1(On);
    }
    function s1(e) {
      var t = e.alternate;
      hn(e);
      var a;
      (e.mode & We) !== re ? (qg(e), a = WS(t, e, eu), ym(e, !0)) : a = WS(t, e, eu), rn(), e.memoizedProps = e.pendingProps, a === null ? c1(e) : On = a, US.current = null;
    }
    function c1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & kl) === Me) {
          hn(t);
          var u = void 0;
          if ((t.mode & We) === re ? u = NC(a, t, eu) : (qg(t), u = NC(a, t, eu), ym(t, !1)), rn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Qw(a, t);
          if (s !== null) {
            s.flags &= qi, On = s;
            return;
          }
          if ((t.mode & We) !== re) {
            ym(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= kl, i.subtreeFlags = Me, i.deletions = null;
          else {
            sr = zS, On = null;
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
      sr === Pu && (sr = KC);
    }
    function vc(e, t, a) {
      var i = wr(), u = zr.transition;
      try {
        zr.transition = null, bt(Sa), Jx(e, t, a, i);
      } finally {
        zr.transition = u, bt(i);
      }
      return null;
    }
    function Jx(e, t, a, i) {
      do
        Yu();
      while (Qo !== null);
      if (sb(), (Tt & (Ar | Li)) !== ur)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (hd(s), u === null)
        return md(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Kt;
      var f = et(u.lanes, u.childLanes);
      sy(e, f), e === Ta && (Ta = null, On = null, or = Y), ((u.subtreeFlags & Gr) !== Me || (u.flags & Gr) !== Me) && (dc || (dc = !0, VS = a, XS(Nl, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ri | Gr)) !== Me, v = (u.flags & (Qr | Wr | ri | Gr)) !== Me;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = wr();
        bt(Sa);
        var x = Tt;
        Tt |= Li, US.current = null, Kw(e, u), tC(), fx(e, u, s), cT(e.containerInfo), e.current = u, fo(s), dx(u, e, s), Fv(), lo(), Tt = x, bt(g), zr.transition = y;
      } else
        e.current = u, tC();
      var _ = dc;
      if (dc ? (dc = !1, Qo = e, Bp = s) : (jf = 0, km = null), f = e.pendingLanes, f === Y && (Af = null), _ || v1(e.current, !1), Ha(u.stateNode, i), ha && e.memoizedUpdaters.clear(), Lx(), Ia(e, zn()), t !== null)
        for (var U = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], le = F.stack, Ne = F.digest;
          U(F.value, {
            componentStack: le,
            digest: Ne
          });
        }
      if (bm) {
        bm = !1;
        var be = FS;
        throw FS = null, be;
      }
      return Kr(Bp, we) && e.tag !== Ao && Yu(), f = e.pendingLanes, Kr(f, we) ? (rw(), e === PS ? $p++ : ($p = 0, PS = e)) : $p = 0, jo(), md(), null;
    }
    function Yu() {
      if (Qo !== null) {
        var e = Qv(Bp), t = Jc(li, e), a = zr.transition, i = wr();
        try {
          return zr.transition = null, bt(t), eb();
        } finally {
          bt(i), zr.transition = a;
        }
      }
      return !1;
    }
    function Zx(e) {
      HS.push(e), dc || (dc = !0, XS(Nl, function() {
        return Yu(), null;
      }));
    }
    function eb() {
      if (Qo === null)
        return !1;
      var e = VS;
      VS = null;
      var t = Qo, a = Bp;
      if (Qo = null, Bp = Y, (Tt & (Ar | Li)) !== ur)
        throw new Error("Cannot flush passive effects while already rendering.");
      BS = !0, Dm = !1, gd(a);
      var i = Tt;
      Tt |= Li, Sx(t.current), hx(t, t.current, a, e);
      {
        var u = HS;
        HS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          tx(t, f);
        }
      }
      mn(), v1(t.current, !0), Tt = i, jo(), Dm ? t === km ? jf++ : (jf = 0, km = t) : jf = 0, BS = !1, Dm = !1, gu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function f1(e) {
      return Af !== null && Af.has(e);
    }
    function tb(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function nb(e) {
      bm || (bm = !0, FS = e);
    }
    var rb = nb;
    function d1(e, t, a) {
      var i = sc(a, t), u = sC(e, i, we), s = Ho(e, u, we), f = _a();
      s !== null && (_o(s, we, f), Ia(s, f));
    }
    function on(e, t, a) {
      if (Gw(a), Wp(!1), e.tag === te) {
        d1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          d1(i, e, a);
          return;
        } else if (i.tag === ve) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !f1(s)) {
            var f = sc(a, e), p = pS(i, f, we), v = Ho(i, p, we), y = _a();
            v !== null && (_o(v, we, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ab(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      Us(e, a), pb(e), Ta === e && Hl(or, a) && (sr === jp || sr === _m && Dd(or) && zn() - jS < JC ? pc(e, Y) : xm = et(xm, a)), Ia(e, u);
    }
    function p1(e, t) {
      t === Kt && (t = Fx(e));
      var a = _a(), i = Ba(e, t);
      i !== null && (_o(i, t, a), Ia(i, a));
    }
    function ib(e) {
      var t = e.memoizedState, a = Kt;
      t !== null && (a = t.retryLane), p1(e, a);
    }
    function lb(e, t) {
      var a = Kt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), p1(e, a);
    }
    function ub(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ux(e / 1960) * 1960;
    }
    function ob() {
      if ($p > Ax)
        throw $p = 0, PS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      jf > jx && (jf = 0, km = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function sb() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function v1(e, t) {
      hn(e), Um(e, Aa, Dx), t && Um(e, mu, kx), Um(e, Aa, xx), t && Um(e, mu, bx), rn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var zm = null;
    function h1(e) {
      {
        if ((Tt & Ar) !== ur || !(e.mode & Oe))
          return;
        var t = e.tag;
        if (t !== Ge && t !== te && t !== ve && t !== ze && t !== Ve && t !== ft && t !== Ie)
          return;
        var a = Qe(e) || "ReactComponent";
        if (zm !== null) {
          if (zm.has(a))
            return;
          zm.add(a);
        } else
          zm = /* @__PURE__ */ new Set([a]);
        var i = vn;
        try {
          hn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? hn(e) : rn();
        }
      }
    }
    var WS;
    {
      var cb = null;
      WS = function(e, t, a) {
        var i = T1(cb, t);
        try {
          return DC(e, t, a);
        } catch (s) {
          if (R_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Bh(), OE(), UC(e, t), T1(t, i), t.mode & We && qg(t), ti(null, DC, null, e, t, a), ay()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var m1 = !1, GS;
    GS = /* @__PURE__ */ new Set();
    function fb(e) {
      if (Br && !ew())
        switch (e.tag) {
          case ze:
          case Ve:
          case Ie: {
            var t = On && Qe(On) || "Unknown", a = t;
            if (!GS.has(a)) {
              GS.add(a);
              var i = Qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ve: {
            m1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), m1 = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (ha) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nd(e, i, t);
        });
      }
    }
    var qS = {};
    function XS(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), qS) : dd(e, t);
      }
    }
    function y1(e) {
      if (e !== qS)
        return Mc(e);
    }
    function g1() {
      return vl.current !== null;
    }
    function db(e) {
      {
        if (e.mode & Oe) {
          if (!qC())
            return;
        } else if (!Nx() || Tt !== ur || e.tag !== ze && e.tag !== Ve && e.tag !== Ie)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? hn(e) : rn();
          }
        }
      }
    }
    function pb(e) {
      e.tag !== Ao && qC() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      t1 = e;
    }
    var Mi = null, Ff = null, vb = function(e) {
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
    function KS(e) {
      return Hf(e);
    }
    function JS(e) {
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
    function S1(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ve: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ze: {
            (typeof i == "function" || s === Ae) && (u = !0);
            break;
          }
          case Ve: {
            (s === G || s === Ae) && (u = !0);
            break;
          }
          case ft:
          case Ie: {
            (s === Rt || s === Ae) && (u = !0);
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
    function E1(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        Ff === null && (Ff = /* @__PURE__ */ new WeakSet()), Ff.add(e);
      }
    }
    var hb = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), $u(function() {
          ZS(e.current, i, a);
        });
      }
    }, mb = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Yu(), $u(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ze:
          case Ie:
          case ve:
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
          var x = Mi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === ve ? g = !0 : y = !0));
        }
        if (Ff !== null && (Ff.has(e) || i !== null && Ff.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, we);
          _ !== null && cr(_, e, we, en);
        }
        u !== null && !g && ZS(u, t, a), s !== null && ZS(s, t, a);
      }
    }
    var yb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return e0(e.current, i, a), a;
      }
    };
    function e0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ze:
          case Ie:
          case ve:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? gb(e, a) : i !== null && e0(i, t, a), u !== null && e0(u, t, a);
      }
    }
    function gb(e, t) {
      {
        var a = Sb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
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
    function Sb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
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
    var t0;
    {
      t0 = !1;
      try {
        var C1 = Object.preventExtensions({});
      } catch {
        t0 = !0;
      }
    }
    function Eb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !t0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new Eb(e, t, a, i);
    };
    function n0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Cb(e) {
      return typeof e == "function" && !n0(e) && e.defaultProps === void 0;
    }
    function Rb(e) {
      if (typeof e == "function")
        return n0(e) ? ve : ze;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return Ve;
        if (t === Rt)
          return ft;
      }
      return Ge;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ge:
        case ze:
        case Ie:
          a.type = Hf(e.type);
          break;
        case ve:
          a.type = KS(e.type);
          break;
        case Ve:
          a.type = JS(e.type);
          break;
      }
      return a;
    }
    function Tb(e, t) {
      e.flags &= tr | Xt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function _b(e, t, a) {
      var i;
      return e === Mh ? (i = Oe, t === !0 && (i |= un, i |= qr)) : i = re, ha && (i |= We), si(te, null, null, i);
    }
    function r0(e, t, a, i, u, s) {
      var f = Ge, p = e;
      if (typeof e == "function")
        n0(e) ? (f = ve, p = KS(p)) : p = Hf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case sa:
            return qo(a.children, u, s, t);
          case Ui:
            f = Fn, u |= un, (u & Oe) !== re && (u |= qr);
            break;
          case yl:
            return wb(a, u, s, t);
          case Le:
            return xb(a, u, s, t);
          case dt:
            return bb(a, u, s, t);
          case Gt:
            return R1(a, u, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case ut:
          // eslint-disable-next-line no-fallthrough
          case hr:
          // eslint-disable-next-line no-fallthrough
          case jt:
          // eslint-disable-next-line no-fallthrough
          case Mn:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = at;
                  break e;
                case Q:
                  f = sn;
                  break e;
                case G:
                  f = Ve, p = JS(p);
                  break e;
                case Rt:
                  f = ft;
                  break e;
                case Ae:
                  f = wn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function a0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = r0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function qo(e, t, a, i) {
      var u = si(pt, e, i, t);
      return u.lanes = a, u;
    }
    function wb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(Ot, e, i, t | We);
      return u.elementType = yl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function xb(e, t, a, i) {
      var u = si(Re, e, i, t);
      return u.elementType = Le, u.lanes = a, u;
    }
    function bb(e, t, a, i) {
      var u = si(Et, e, i, t);
      return u.elementType = dt, u.lanes = a, u;
    }
    function R1(e, t, a, i) {
      var u = si(Pe, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function i0(e, t, a) {
      var i = si(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function Db() {
      var e = si(ue, null, null, re);
      return e.elementType = "DELETED", e;
    }
    function kb(e) {
      var t = si(Jt, null, null, re);
      return t.stateNode = e, t;
    }
    function l0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function T1(e, t) {
      return e === null && (e = si(Ge, null, null, re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ob(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Py, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Kt, this.eventTimes = Ns(Y), this.expirationTimes = Ns(en), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Ns(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ao:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function _1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Ob(e, t, a, p, v), x = _b(t, s);
      g.current = x, x.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = _;
      }
      return Sg(x), g;
    }
    var u0 = "18.3.1";
    function Lb(e, t, a) {
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
    var o0, s0;
    o0 = !1, s0 = {};
    function w1(e) {
      if (!e)
        return oi;
      var t = hi(e), a = p_(t);
      if (t.tag === ve) {
        var i = t.type;
        if (Wl(i))
          return J0(t, i, a);
      }
      return a;
    }
    function Mb(e, t) {
      {
        var a = hi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = sd(a);
        if (u === null)
          return null;
        if (u.mode & un) {
          var s = Qe(a) || "Component";
          if (!s0[s]) {
            s0[s] = !0;
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
    function x1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return _1(e, t, v, y, a, i, u, s, f);
    }
    function b1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = _1(a, i, g, e, u, s, f, p, v);
      x.context = w1(null);
      var _ = x.current, U = _a(), A = Wo(_), F = Hu(U, A);
      return F.callback = t ?? null, Ho(_, F, A), Hx(x, A, U), x;
    }
    function Gp(e, t, a, i) {
      oo(t, e);
      var u = t.current, s = _a(), f = Wo(u);
      jc(f);
      var p = w1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && vn !== null && !o0 && (o0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(vn) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ho(u, v, f);
      return y !== null && (cr(y, u, f, s), Wh(y, u, f)), f;
    }
    function Am(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Nb(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (de(t)) {
            var a = Co(t);
            $x(t, a);
          }
          break;
        }
        case Re: {
          $u(function() {
            var u = Ba(e, we);
            if (u !== null) {
              var s = _a();
              cr(u, e, we, s);
            }
          });
          var i = we;
          c0(e, i);
          break;
        }
      }
    }
    function D1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Od(a.retryLane, t));
    }
    function c0(e, t) {
      D1(e, t);
      var a = e.alternate;
      a && D1(a, t);
    }
    function Ub(e) {
      if (e.tag === Re) {
        var t = go, a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        c0(e, t);
      }
    }
    function zb(e) {
      if (e.tag === Re) {
        var t = Wo(e), a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        c0(e, t);
      }
    }
    function k1(e) {
      var t = fd(e);
      return t === null ? null : t.stateNode;
    }
    var O1 = function(e) {
      return null;
    };
    function Ab(e) {
      return O1(e);
    }
    var L1 = function(e) {
      return !1;
    };
    function jb(e) {
      return L1(e);
    }
    var M1 = null, N1 = null, U1 = null, z1 = null, A1 = null, j1 = null, F1 = null, H1 = null, V1 = null;
    {
      var P1 = function(e, t, a) {
        var i = t[a], u = xt(e) ? e.slice() : Ze({}, e);
        return a + 1 === t.length ? (xt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = P1(e[i], t, a + 1), u);
      }, B1 = function(e, t) {
        return P1(e, t, 0);
      }, $1 = function(e, t, a, i) {
        var u = t[i], s = xt(e) ? e.slice() : Ze({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], xt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = $1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Y1 = function(e, t, a) {
        if (t.length !== a.length) {
          Ue("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ue("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $1(e, t, a, 0);
      }, I1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = xt(e) ? e.slice() : Ze({}, e);
        return s[u] = I1(e[u], t, a + 1, i), s;
      }, Q1 = function(e, t, a) {
        return I1(e, t, 0, a);
      }, f0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      M1 = function(e, t, a, i) {
        var u = f0(e, t);
        if (u !== null) {
          var s = Q1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && cr(f, e, we, en);
        }
      }, N1 = function(e, t, a) {
        var i = f0(e, t);
        if (i !== null) {
          var u = B1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ze({}, e.memoizedProps);
          var s = Ba(e, we);
          s !== null && cr(s, e, we, en);
        }
      }, U1 = function(e, t, a, i) {
        var u = f0(e, t);
        if (u !== null) {
          var s = Y1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && cr(f, e, we, en);
        }
      }, z1 = function(e, t, a) {
        e.pendingProps = Q1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && cr(i, e, we, en);
      }, A1 = function(e, t) {
        e.pendingProps = B1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, we);
        a !== null && cr(a, e, we, en);
      }, j1 = function(e, t, a) {
        e.pendingProps = Y1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && cr(i, e, we, en);
      }, F1 = function(e) {
        var t = Ba(e, we);
        t !== null && cr(t, e, we, en);
      }, H1 = function(e) {
        O1 = e;
      }, V1 = function(e) {
        L1 = e;
      };
    }
    function Fb(e) {
      var t = sd(e);
      return t === null ? null : t.stateNode;
    }
    function Hb(e) {
      return null;
    }
    function Vb() {
      return vn;
    }
    function Pb(e) {
      var t = e.findFiberByHostInstance, a = he.ReactCurrentDispatcher;
      return pd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: M1,
        overrideHookStateDeletePath: N1,
        overrideHookStateRenamePath: U1,
        overrideProps: z1,
        overridePropsDeletePath: A1,
        overridePropsRenamePath: j1,
        setErrorHandler: H1,
        setSuspenseHandler: V1,
        scheduleUpdate: F1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Fb,
        findFiberByHostInstance: t || Hb,
        // React Refresh
        findHostInstancesForRefresh: yb,
        scheduleRefresh: hb,
        scheduleRoot: mb,
        setRefreshHandler: vb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Vb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: u0
      });
    }
    var W1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function d0(e) {
      this._internalRoot = e;
    }
    jm.prototype.render = d0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = k1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, jm.prototype.unmount = d0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        i1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), $u(function() {
          Gp(null, e, null, null);
        }), W0(t);
      }
    };
    function Bb(e, t) {
      if (!Fm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      G1(e);
      var a = !1, i = !1, u = "", s = W1;
      t != null && (t.hydrate ? Ue("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = x1(e, Mh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === En ? e.parentNode : e;
      return ep(p), new d0(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function $b(e) {
      e && Zc(e);
    }
    jm.prototype.unstable_scheduleHydration = $b;
    function Yb(e, t, a) {
      if (!Fm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      G1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = W1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = b1(t, null, e, Mh, i, s, f, p, v);
      if (wh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          G_(y, x);
        }
      return new jm(y);
    }
    function Fm(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === ca || e.nodeType === Qf || !ke));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === ca || e.nodeType === Qf || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function G1(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ib = he.ReactCurrentOwner, q1;
    q1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = k1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = p0(e), u = !!(i && Uo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function p0(e) {
      return e ? e.nodeType === ca ? e.documentElement : e.firstChild : null;
    }
    function X1() {
    }
    function Qb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Am(f);
            s.call(_);
          };
        }
        var f = b1(
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
          X1
        );
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === En ? e.parentNode : e;
        return ep(p), $u(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = Am(g);
            y.call(_);
          };
        }
        var g = x1(
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
          X1
        );
        e._reactRootContainer = g, wh(g.current, e);
        var x = e.nodeType === En ? e.parentNode : e;
        return ep(x), $u(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function Wb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Hm(e, t, a, i, u) {
      q1(a), Wb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Qb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Am(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Am(f);
    }
    var K1 = !1;
    function Gb(e) {
      {
        K1 || (K1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ib.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : Mb(e, "findDOMNode");
    }
    function qb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Hm(null, e, t, !0, a);
    }
    function Xb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Hm(null, e, t, !1, a);
    }
    function Kb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !io(e))
        throw new Error("parentComponent must be a valid React Component");
      return Hm(e, t, a, !1, i);
    }
    var J1 = !1;
    function Jb(e) {
      if (J1 || (J1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = p0(e), i = a && !Uo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return $u(function() {
          Hm(null, null, e, !1, function() {
            e._reactRootContainer = null, W0(e);
          });
        }), !0;
      } else {
        {
          var u = p0(e), s = !!(u && Uo(u)), f = e.nodeType === Yr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ud(Nb), js(Ub), Ad(zb), Gv(wr), Hd(cy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ed(eT), xc(YS, Yx, $u);
    function Zb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fm(t))
        throw new Error("Target container is not a DOM element.");
      return Lb(e, t, null, a);
    }
    function eD(e, t, a, i) {
      return Kb(e, t, a, i);
    }
    var v0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uo, mf, xh, ao, pu, YS]
    };
    function tD(e, t) {
      return v0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Bb(e, t);
    }
    function nD(e, t, a) {
      return v0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Yb(e, t, a);
    }
    function rD(e) {
      return i1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), $u(e);
    }
    var aD = Pb({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: u0,
      rendererPackageName: "react-dom"
    });
    if (!aD && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Z1 = window.location.protocol;
      /^(https?|file):$/.test(Z1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Z1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v0, Wa.createPortal = Zb, Wa.createRoot = tD, Wa.findDOMNode = Gb, Wa.flushSync = rD, Wa.hydrate = qb, Wa.hydrateRoot = nD, Wa.render = Xb, Wa.unmountComponentAtNode = Jb, Wa.unstable_batchedUpdates = YS, Wa.unstable_renderSubtreeIntoContainer = eD, Wa.version = u0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var fR;
function mD() {
  if (fR) return Bm.exports;
  fR = 1;
  var V = {};
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (V.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (D) {
        console.error(D);
      }
    }
  }
  return V.NODE_ENV === "production" ? (q(), Bm.exports = vD()) : Bm.exports = hD(), Bm.exports;
}
var dR;
function yD() {
  if (dR) return Pf;
  dR = 1;
  var V = {}, q = mD();
  if (V.NODE_ENV === "production")
    Pf.createRoot = q.createRoot, Pf.hydrateRoot = q.hydrateRoot;
  else {
    var D = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Pf.createRoot = function(he, rt) {
      D.usingClientEntryPoint = !0;
      try {
        return q.createRoot(he, rt);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    }, Pf.hydrateRoot = function(he, rt, Vt) {
      D.usingClientEntryPoint = !0;
      try {
        return q.hydrateRoot(he, rt, Vt);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    };
  }
  return Pf;
}
var gD = yD();
function mR(V) {
  var q, D, he = "";
  if (typeof V == "string" || typeof V == "number") he += V;
  else if (typeof V == "object") if (Array.isArray(V)) {
    var rt = V.length;
    for (q = 0; q < rt; q++) V[q] && (D = mR(V[q])) && (he && (he += " "), he += D);
  } else for (D in V) V[D] && (he && (he += " "), he += D);
  return he;
}
function mc() {
  for (var V, q, D = 0, he = "", rt = arguments.length; D < rt; D++) (V = arguments[D]) && (q = mR(V)) && (he && (he += " "), he += q);
  return he;
}
const SD = "_label_1yoe6_1", ED = {
  label: SD
}, CD = (V) => {
  const { className: q, title: D, value: he } = V;
  return /* @__PURE__ */ St.jsxs("label", { className: mc(ED.label, q), children: [
    /* @__PURE__ */ St.jsx("span", { children: D }),
    he && /* @__PURE__ */ St.jsx("span", { children: he })
  ] });
}, RD = "_root_1vni0_1", TD = "_label_1vni0_5", _D = "_description_1vni0_9", wD = "_top_1vni0_15", xD = "_bottom_1vni0_19", bD = "_input_1vni0_24", DD = "_hasRight_1vni0_42", kD = "_right_1vni0_46", Qu = {
  root: RD,
  label: TD,
  description: _D,
  top: wD,
  bottom: xD,
  input: bD,
  hasRight: DD,
  right: kD
}, y0 = (V) => {
  var q;
  const { className: D, right: he, label: rt, descriptionTop: Vt, descriptionBottom: Ue, ...S } = V, st = g0.useRef(null);
  return /* @__PURE__ */ St.jsxs(
    "div",
    {
      className: mc(Qu.root, D),
      style: {
        "--right-width": `${((q = st.current) == null ? void 0 : q.clientWidth) ?? 0}px`
      },
      children: [
        /* @__PURE__ */ St.jsx(CD, { className: Qu.label, title: rt }),
        /* @__PURE__ */ St.jsx("p", { className: mc(Qu.description, Qu.top), children: Vt }),
        /* @__PURE__ */ St.jsx(
          "input",
          {
            className: mc(Qu.input, {
              [Qu.hasRight]: he
            }),
            ...S
          }
        ),
        he && /* @__PURE__ */ St.jsx("div", { ref: st, className: Qu.right, children: "%" }),
        /* @__PURE__ */ St.jsx("p", { className: mc(Qu.description, Qu.bottom), children: Ue })
      ]
    }
  );
}, OD = "_section_13pv1_1", LD = "_title_13pv1_8", pR = {
  section: OD,
  title: LD
}, yR = (V) => {
  const { children: q, className: D, title: he } = V;
  return /* @__PURE__ */ St.jsxs("div", { className: mc(pR.section, D), children: [
    /* @__PURE__ */ St.jsx("h4", { className: pR.title, children: he }),
    /* @__PURE__ */ St.jsx("div", { children: q })
  ] });
}, MD = "_table_1xqp0_1", ND = "_tableHead_1xqp0_7", UD = "_tableItem_1xqp0_19", zD = "_footer_1xqp0_32", AD = "_footerItem_1xqp0_44", Zp = {
  table: MD,
  tableHead: ND,
  tableItem: UD,
  footer: zD,
  footerItem: AD
}, jD = (V) => {
  var q;
  const { title: D, tableData: he, resultData: rt, className: Vt } = V;
  return /* @__PURE__ */ St.jsxs(yR, { className: Vt, title: D, children: [
    /* @__PURE__ */ St.jsxs("div", { className: Zp.table, children: [
      /* @__PURE__ */ St.jsx("div", { className: Zp.tableHead, children: he.headers.map((Ue) => /* @__PURE__ */ St.jsx("span", { children: Ue }, Ue)) }),
      (q = he.data) == null ? void 0 : q.map((Ue) => /* @__PURE__ */ St.jsxs("div", { className: Zp.tableItem, children: [
        /* @__PURE__ */ St.jsx("span", { children: Ue.label }),
        /* @__PURE__ */ St.jsx("span", { children: Ue.value })
      ] }, Ue.label))
    ] }),
    /* @__PURE__ */ St.jsx("div", { className: Zp.footer, children: rt.map((Ue) => /* @__PURE__ */ St.jsxs("div", { className: Zp.footerItem, children: [
      /* @__PURE__ */ St.jsx("span", { children: Ue.label }),
      /* @__PURE__ */ St.jsx("span", { children: Ue.value })
    ] }, Ue.label)) })
  ] });
}, FD = {
  "tofu-widget": "_tofu-widget_1vn9e_6"
}, HD = FD["tofu-widget"], VD = "_widget_17eig_1", PD = "_section_17eig_9", BD = "_title_17eig_14", vR = {
  widget: VD,
  section: PD,
  title: BD
};
function $D(V, q, D) {
  return V === 0 ? 0 : q === 0 && D === 0 ? (console.log(1), 0) : q !== 0 && D === 0 ? V / q : q === 0 && D !== 0 ? V / -D : V / q + V / -D;
}
const YD = () => {
  const [V, q] = g0.useState({
    fixedCost: 0,
    pricePerUnit: 0,
    variableCost: 0
  }), D = (he) => {
    q({
      ...V,
      [he.target.name]: Number(he.target.value)
    });
  };
  return /* @__PURE__ */ St.jsxs("div", { className: mc(vR.widget, HD), children: [
    /* @__PURE__ */ St.jsx(yR, { title: "Break-even Point (Units) Calculator", children: /* @__PURE__ */ St.jsxs("div", { className: vR.section, children: [
      /* @__PURE__ */ St.jsx(
        y0,
        {
          label: "Fixed Costs",
          type: "number",
          value: V.fixedCost,
          onChange: D,
          name: "fixedCost",
          descriptionBottom: /* @__PURE__ */ St.jsxs(St.Fragment, { children: [
            "Min: 0 - Max: 100000 ",
            /* @__PURE__ */ St.jsx("br", {}),
            "Costs that remain constant, regardless of the number of units produced or sold (e.g., rent, salaries, etc.)."
          ] }),
          min: 0,
          max: 1e5
        }
      ),
      /* @__PURE__ */ St.jsx(
        y0,
        {
          label: "Price per Unit",
          type: "number",
          value: V.pricePerUnit,
          onChange: D,
          name: "pricePerUnit",
          min: 0,
          max: 1e5,
          descriptionBottom: "Min: 0 - Max: 100000"
        }
      ),
      /* @__PURE__ */ St.jsx(
        y0,
        {
          label: "Variable Cost per unit",
          type: "number",
          value: V.variableCost,
          onChange: D,
          name: "variableCost",
          min: 0,
          max: 1e5,
          descriptionBottom: /* @__PURE__ */ St.jsxs(St.Fragment, { children: [
            "Min: 0 - Max: 100000",
            /* @__PURE__ */ St.jsx("br", {}),
            "Cost that varies with the number of units produced (e.g., raw materials, labor, etc.)."
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ St.jsx(
      jD,
      {
        title: "Total Summary",
        tableData: {
          headers: ["Name", "Total"],
          data: [
            { label: "Fixed Costs", value: `${V.fixedCost} USD` },
            { label: "Price per Unit", value: `${V.pricePerUnit} USD` },
            { label: "Variable Cost per unit", value: `${V.variableCost} USD` }
          ]
        },
        resultData: [
          {
            label: "Nº of Units to reach BEP",
            value: `Units ${$D(V.fixedCost, V.pricePerUnit, V.variableCost).toFixed(2)}`
          }
        ]
      }
    )
  ] });
};
gD.createRoot(document.getElementById("bep-calculator-units")).render(
  /* @__PURE__ */ St.jsx(g0.StrictMode, { children: /* @__PURE__ */ St.jsx(YD, {}) })
);
