var Pm = { exports: {} }, Jp = {}, Bm = { exports: {} }, St = {};
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
function cD() {
  if (tR) return St;
  tR = 1;
  var $ = Symbol.for("react.element"), q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), bt = Symbol.for("react.provider"), we = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), Ce = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Ye = Symbol.iterator;
  function ee(b) {
    return b === null || typeof b != "object" ? null : (b = Ye && b[Ye] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, oe = Object.assign, Re = {};
  function vt(b, B, Ne) {
    this.props = b, this.context = B, this.refs = Re, this.updater = Ne || je;
  }
  vt.prototype.isReactComponent = {}, vt.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, vt.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Fn() {
  }
  Fn.prototype = vt.prototype;
  function sn(b, B, Ne) {
    this.props = b, this.context = B, this.refs = Re, this.updater = Ne || je;
  }
  var lt = sn.prototype = new Fn();
  lt.constructor = sn, oe(lt, vt.prototype), lt.isPureReactComponent = !0;
  var Ve = Array.isArray, Nt = Object.prototype.hasOwnProperty, Te = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(b, B, Ne) {
    var Be, et = {}, ut = null, mt = null;
    if (B != null) for (Be in B.ref !== void 0 && (mt = B.ref), B.key !== void 0 && (ut = "" + B.key), B) Nt.call(B, Be) && !dt.hasOwnProperty(Be) && (et[Be] = B[Be]);
    var ft = arguments.length - 2;
    if (ft === 1) et.children = Ne;
    else if (1 < ft) {
      for (var Ct = Array(ft), Pt = 0; Pt < ft; Pt++) Ct[Pt] = arguments[Pt + 2];
      et.children = Ct;
    }
    if (b && b.defaultProps) for (Be in ft = b.defaultProps, ft) et[Be] === void 0 && (et[Be] = ft[Be]);
    return { $$typeof: $, type: b, key: ut, ref: mt, props: et, _owner: Te.current };
  }
  function xn(b, B) {
    return { $$typeof: $, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function gn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === $;
  }
  function Jt(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Ne) {
      return B[Ne];
    });
  }
  var Et = /\/+/g;
  function nn(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? Jt("" + b.key) : B.toString(36);
  }
  function Pe(b, B, Ne, Be, et) {
    var ut = typeof b;
    (ut === "undefined" || ut === "boolean") && (b = null);
    var mt = !1;
    if (b === null) mt = !0;
    else switch (ut) {
      case "string":
      case "number":
        mt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case $:
          case q:
            mt = !0;
        }
    }
    if (mt) return mt = b, et = et(mt), b = Be === "" ? "." + nn(mt, 0) : Be, Ve(et) ? (Ne = "", b != null && (Ne = b.replace(Et, "$&/") + "/"), Pe(et, B, Ne, "", function(Pt) {
      return Pt;
    })) : et != null && (gn(et) && (et = xn(et, Ne + (!et.key || mt && mt.key === et.key ? "" : ("" + et.key).replace(Et, "$&/") + "/") + b)), B.push(et)), 1;
    if (mt = 0, Be = Be === "" ? "." : Be + ":", Ve(b)) for (var ft = 0; ft < b.length; ft++) {
      ut = b[ft];
      var Ct = Be + nn(ut, ft);
      mt += Pe(ut, B, Ne, Ct, et);
    }
    else if (Ct = ee(b), typeof Ct == "function") for (b = Ct.call(b), ft = 0; !(ut = b.next()).done; ) ut = ut.value, Ct = Be + nn(ut, ft++), mt += Pe(ut, B, Ne, Ct, et);
    else if (ut === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return mt;
  }
  function rt(b, B, Ne) {
    if (b == null) return b;
    var Be = [], et = 0;
    return Pe(b, Be, "", "", function(ut) {
      return B.call(Ne, ut, et++);
    }), Be;
  }
  function xt(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(function(Ne) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Ne);
      }, function(Ne) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Ne);
      }), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var at = { current: null }, P = { transition: null }, me = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: P, ReactCurrentOwner: Te };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: rt, forEach: function(b, B, Ne) {
    rt(b, function() {
      B.apply(this, arguments);
    }, Ne);
  }, count: function(b) {
    var B = 0;
    return rt(b, function() {
      B++;
    }), B;
  }, toArray: function(b) {
    return rt(b, function(B) {
      return B;
    }) || [];
  }, only: function(b) {
    if (!gn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, St.Component = vt, St.Fragment = D, St.Profiler = Qe, St.PureComponent = sn, St.StrictMode = he, St.Suspense = Je, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, St.act = ie, St.cloneElement = function(b, B, Ne) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Be = oe({}, b.props), et = b.key, ut = b.ref, mt = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ut = B.ref, mt = Te.current), B.key !== void 0 && (et = "" + B.key), b.type && b.type.defaultProps) var ft = b.type.defaultProps;
      for (Ct in B) Nt.call(B, Ct) && !dt.hasOwnProperty(Ct) && (Be[Ct] = B[Ct] === void 0 && ft !== void 0 ? ft[Ct] : B[Ct]);
    }
    var Ct = arguments.length - 2;
    if (Ct === 1) Be.children = Ne;
    else if (1 < Ct) {
      ft = Array(Ct);
      for (var Pt = 0; Pt < Ct; Pt++) ft[Pt] = arguments[Pt + 2];
      Be.children = ft;
    }
    return { $$typeof: $, type: b.type, key: et, ref: ut, props: Be, _owner: mt };
  }, St.createContext = function(b) {
    return b = { $$typeof: we, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: bt, _context: b }, b.Consumer = b;
  }, St.createElement = We, St.createFactory = function(b) {
    var B = We.bind(null, b);
    return B.type = b, B;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, St.isValidElement = gn, St.lazy = function(b) {
    return { $$typeof: ue, _payload: { _status: -1, _result: b }, _init: xt };
  }, St.memo = function(b, B) {
    return { $$typeof: Ce, type: b, compare: B === void 0 ? null : B };
  }, St.startTransition = function(b) {
    var B = P.transition;
    P.transition = {};
    try {
      b();
    } finally {
      P.transition = B;
    }
  }, St.unstable_act = ie, St.useCallback = function(b, B) {
    return at.current.useCallback(b, B);
  }, St.useContext = function(b) {
    return at.current.useContext(b);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(b) {
    return at.current.useDeferredValue(b);
  }, St.useEffect = function(b, B) {
    return at.current.useEffect(b, B);
  }, St.useId = function() {
    return at.current.useId();
  }, St.useImperativeHandle = function(b, B, Ne) {
    return at.current.useImperativeHandle(b, B, Ne);
  }, St.useInsertionEffect = function(b, B) {
    return at.current.useInsertionEffect(b, B);
  }, St.useLayoutEffect = function(b, B) {
    return at.current.useLayoutEffect(b, B);
  }, St.useMemo = function(b, B) {
    return at.current.useMemo(b, B);
  }, St.useReducer = function(b, B, Ne) {
    return at.current.useReducer(b, B, Ne);
  }, St.useRef = function(b) {
    return at.current.useRef(b);
  }, St.useState = function(b) {
    return at.current.useState(b);
  }, St.useSyncExternalStore = function(b, B, Ne) {
    return at.current.useSyncExternalStore(b, B, Ne);
  }, St.useTransition = function() {
    return at.current.useTransition();
  }, St.version = "18.3.1", St;
}
var tv = { exports: {} };
tv.exports;
var nR;
function fD() {
  return nR || (nR = 1, function($, q) {
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
      var he = "18.3.1", Qe = Symbol.for("react.element"), bt = Symbol.for("react.portal"), we = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), Fn = Symbol.iterator, sn = "@@iterator";
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
      }, dt = {
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
      var Jt = !1, Et = !1, nn = !1, Pe = !1, rt = !1, xt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: Nt,
        ReactCurrentOwner: dt
      };
      xt.ReactDebugCurrentFrame = We, xt.ReactCurrentActQueue = Te;
      function at(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          me("warn", h, M);
        }
      }
      function P(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            M[j - 1] = arguments[j];
          me("error", h, M);
        }
      }
      function me(h, C, M) {
        {
          var j = xt.ReactDebugCurrentFrame, J = j.getStackAddendum();
          J !== "" && (C += "%s", M = M.concat([J]));
          var Se = M.map(function(de) {
            return String(de);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var ie = {};
      function b(h, C) {
        {
          var M = h.constructor, j = M && (M.displayName || M.name) || "ReactClass", J = j + "." + C;
          if (ie[J])
            return;
          P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), ie[J] = !0;
        }
      }
      var B = {
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
      }, Ne = Object.assign, Be = {};
      Object.freeze(Be);
      function et(h, C, M) {
        this.props = h, this.context = C, this.refs = Be, this.updater = M || B;
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
        }, mt = function(h, C) {
          Object.defineProperty(et.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ut)
          ut.hasOwnProperty(ft) && mt(ft, ut[ft]);
      }
      function Ct() {
      }
      Ct.prototype = et.prototype;
      function Pt(h, C, M) {
        this.props = h, this.context = C, this.refs = Be, this.updater = M || B;
      }
      var Xn = Pt.prototype = new Ct();
      Xn.constructor = Pt, Ne(Xn, et.prototype), Xn.isPureReactComponent = !0;
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
          return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(h)), wn(h);
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
        if (typeof h.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case we:
            return "Fragment";
          case bt:
            return "Portal";
          case Je:
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
            case Ce:
              var M = h;
              return dr(M._context) + ".Provider";
            case Ye:
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
          pr || (pr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function ua(h, C) {
        var M = function() {
          ia || (ia = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function oa(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = Vn(dt.current.type);
          Jn[C] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ne = function(h, C, M, j, J, Se, de) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Qe,
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
      function Oe(h, C, M) {
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
        return ne(h, Se, de, $e, ct, dt.current, J);
      }
      function ot(h, C) {
        var M = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function At(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, J = Ne({}, h.props), Se = h.key, de = h.ref, $e = h._self, ct = h._source, Ht = h._owner;
        if (C != null) {
          Sr(C) && (de = C.ref, Ht = dt.current), cn(C) && (Nn(C.key), Se = "" + C.key);
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
        return typeof h == "object" && h !== null && h.$$typeof === Qe;
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
                case Qe:
                case bt:
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
        var It, Yt, an = 0, wt = j === "" ? bn : j + pn;
        if (Sn(h))
          for (var xl = 0; xl < h.length; xl++)
            It = h[xl], Yt = wt + Zt(It, xl), an += Ga(It, C, M, Yt, J);
        else {
          var to = lt(h);
          if (typeof to == "function") {
            var us = h;
            to === us.entries && (Bt || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var os = to.call(us), Pi, ss = 0; !(Pi = os.next()).done; )
              It = Pi.value, Yt = wt + Zt(It, ss++), an += Ga(It, C, M, Yt, J);
          } else if (Se === "object") {
            var cs = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (cs === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : cs) + "). If you meant to render a collection of children, use an array instead.");
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
      function ml(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function au(h, C, M) {
        ba(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function iu(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function yl(h) {
        if (!Lt(h))
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
          $$typeof: Ce,
          _context: C
        };
        var M = !1, j = !1, J = !1;
        {
          var Se = {
            $$typeof: ue,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return j || (j = !0, P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
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
                return M || (M = !0, P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
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
          return J === void 0 && P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
                P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Se, Object.defineProperty(M, "defaultProps", {
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
                P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Se, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === oe ? P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? P("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && P("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ye,
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
      var gl;
      gl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === we || h === Je || rt || h === S || h === ee || h === je || Pe || h === vt || Jt || Et || nn || typeof h == "object" && h !== null && (h.$$typeof === Re || h.$$typeof === oe || h.$$typeof === Ce || h.$$typeof === ue || h.$$typeof === Ye || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === gl || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || P("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
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
      function G() {
        var h = Ve.current;
        return h === null && P(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Me(h) {
        var C = G();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function pt(h) {
        var C = G();
        return C.useState(h);
      }
      function Rt(h, C, M) {
        var j = G();
        return j.useReducer(h, C, M);
      }
      function Ae(h) {
        var C = G();
        return C.useRef(h);
      }
      function st(h, C) {
        var M = G();
        return M.useEffect(h, C);
      }
      function Ln(h, C) {
        var M = G();
        return M.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var M = G();
        return M.useLayoutEffect(h, C);
      }
      function fn(h, C) {
        var M = G();
        return M.useCallback(h, C);
      }
      function hr(h, C) {
        var M = G();
        return M.useMemo(h, C);
      }
      function Ft(h, C, M) {
        var j = G();
        return j.useImperativeHandle(h, C, M);
      }
      function ka(h, C) {
        {
          var M = G();
          return M.useDebugValue(h, C);
        }
      }
      function Mn() {
        var h = G();
        return h.useTransition();
      }
      function Vr(h) {
        var C = G();
        return C.useDeferredValue(h);
      }
      function tt() {
        var h = G();
        return h.useId();
      }
      function Ui(h, C, M) {
        var j = G();
        return j.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, Sl, Pr, Ko, Cr, Jo, Zo, es;
      function lu() {
      }
      lu.__reactDisabledLog = !0;
      function Gu() {
        {
          if (Ai === 0) {
            Sl = console.log, Pr = console.info, Ko = console.warn, Cr = console.error, Jo = console.group, Zo = console.groupCollapsed, es = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: lu,
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
              log: Ne({}, h, {
                value: Sl
              }),
              info: Ne({}, h, {
                value: Pr
              }),
              warn: Ne({}, h, {
                value: Ko
              }),
              error: Ne({}, h, {
                value: Cr
              }),
              group: Ne({}, h, {
                value: Jo
              }),
              groupCollapsed: Ne({}, h, {
                value: Zo
              }),
              groupEnd: Ne({}, h, {
                value: es
              })
            });
          }
          Ai < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = xt.ReactCurrentDispatcher, Oa;
      function El(h, C, M) {
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
      var di = !1, uu;
      {
        var ou = typeof WeakMap == "function" ? WeakMap : Map;
        uu = new ou();
      }
      function Cl(h, C) {
        if (!h || di)
          return "";
        {
          var M = uu.get(h);
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
              } catch (wt) {
                j = wt;
              }
              Reflect.construct(h, [], de);
            } else {
              try {
                de.call();
              } catch (wt) {
                j = wt;
              }
              h.call(de.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wt) {
              j = wt;
            }
            h();
          }
        } catch (wt) {
          if (wt && j && typeof wt.stack == "string") {
            for (var $e = wt.stack.split(`
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
                      return h.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", h.displayName)), typeof h == "function" && uu.set(h, It), It;
                    }
                  while (Ht >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          di = !1, fi.current = Se, ji(), Error.prepareStackTrace = J;
        }
        var Yt = h ? h.displayName || h.name : "", an = Yt ? El(Yt) : "";
        return typeof h == "function" && uu.set(h, an), an;
      }
      function ts(h, C, M) {
        return Cl(h, !1);
      }
      function ns(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function yt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Cl(h, ns(h));
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
            case Ye:
              return ts(h.render);
            case oe:
              return yt(h.type, C, M);
            case Re: {
              var j = h, J = j._payload, Se = j._init;
              try {
                return yt(Se(J), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var rs = {}, qu = xt.ReactDebugCurrentFrame;
      function Rl(h) {
        if (h) {
          var C = h._owner, M = yt(h.type, h._source, C ? C.type : null);
          qu.setExtraStackFrame(M);
        } else
          qu.setExtraStackFrame(null);
      }
      function as(h, C, M, j, J) {
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
              $e && !($e instanceof Error) && (Rl(J), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, de, typeof $e), Rl(null)), $e instanceof Error && !($e.message in rs) && (rs[$e.message] = !0, Rl(J), P("Failed %s type: %s", M, $e.message), Rl(null));
            }
        }
      }
      function gt(h) {
        if (h) {
          var C = h._owner, M = yt(h.type, h._source, C ? C.type : null);
          gn(M);
        } else
          gn(null);
      }
      var Xu;
      Xu = !1;
      function su() {
        if (dt.current) {
          var h = Vn(dt.current.type);
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
        var C = su();
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
            h && h._owner && h._owner !== dt.current && (j = " It was passed a child from " + Vn(h._owner.type) + "."), gt(h), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), gt(null);
          }
        }
      }
      function Tl(h, C) {
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
          else if (typeof C == "object" && (C.$$typeof === Ye || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === oe))
            M = C.propTypes;
          else
            return;
          if (M) {
            var j = Vn(C);
            as(M, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Xu) {
            Xu = !0;
            var J = Vn(C);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function hn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var j = C[M];
            if (j !== "children" && j !== "key") {
              gt(h), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), gt(null);
              break;
            }
          }
          h.ref !== null && (gt(h), P("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
        }
      }
      function is(h, C, M) {
        var j = R(h);
        if (!j) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ka(C);
          Se ? J += Se : J += su();
          var de;
          h === null ? de = "null" : Sn(h) ? de = "array" : h !== void 0 && h.$$typeof === Qe ? (de = "<" + (Vn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : de = typeof h, P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", de, J);
        }
        var $e = Oe.apply(this, arguments);
        if ($e == null)
          return $e;
        if (j)
          for (var ct = 2; ct < arguments.length; ct++)
            Tl(arguments[ct], h);
        return h === we ? hn($e) : rn($e), $e;
      }
      var Zn = !1;
      function $r(h) {
        var C = is.bind(null, h);
        return C.type = h, Zn || (Zn = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, M) {
        for (var j = At.apply(this, arguments), J = 2; J < arguments.length; J++)
          Tl(arguments[J], j.type);
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
            J > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var cu = !1, fu = null;
      function _l(h) {
        if (fu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = $ && $[C];
            fu = M.call($, "timers").setImmediate;
          } catch {
            fu = function(J) {
              cu === !1 && (cu = !0, typeof MessageChannel > "u" && P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = J, Se.port2.postMessage(void 0);
            };
          }
        return fu(h);
      }
      var La = 0, Fi = !1;
      function du(h) {
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
                de = !0, Se.then(function(wt) {
                  Hi(C), La === 0 ? Ju(wt, Yt, an) : Yt(wt);
                }, function(wt) {
                  Hi(C), an(wt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              de || (Fi = !0, P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
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
        h !== La - 1 && P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function Ju(h, C, M) {
        {
          var j = Te.current;
          if (j !== null)
            try {
              Vi(j), _l(function() {
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
      var Zu = is, ls = Ja, Za = $r, eo = {
        map: ba,
        forEach: au,
        count: ml,
        toArray: iu,
        only: yl
      };
      q.Children = eo, q.Component = et, q.Fragment = we, q.Profiler = Je, q.PureComponent = Pt, q.StrictMode = S, q.Suspense = ee, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xt, q.act = du, q.cloneElement = ls, q.createContext = qa, q.createElement = Zu, q.createFactory = Za, q.createRef = Fr, q.forwardRef = zi, q.isValidElement = Lt, q.lazy = sa, q.memo = Q, q.startTransition = Ku, q.unstable_act = du, q.useCallback = fn, q.useContext = Me, q.useDebugValue = ka, q.useDeferredValue = Vr, q.useEffect = st, q.useId = tt, q.useImperativeHandle = Ft, q.useInsertionEffect = Ln, q.useLayoutEffect = Gt, q.useMemo = hr, q.useReducer = Rt, q.useRef = Ae, q.useState = pt, q.useSyncExternalStore = Ui, q.useTransition = Mn, q.version = he, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var rR;
function nv() {
  if (rR) return Bm.exports;
  rR = 1;
  var $ = {};
  return $.NODE_ENV === "production" ? Bm.exports = cD() : Bm.exports = fD(), Bm.exports;
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
function dD() {
  if (aR) return Jp;
  aR = 1;
  var $ = nv(), q = Symbol.for("react.element"), D = Symbol.for("react.fragment"), he = Object.prototype.hasOwnProperty, Qe = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function we(S, Je, Ce) {
    var ue, Ye = {}, ee = null, je = null;
    Ce !== void 0 && (ee = "" + Ce), Je.key !== void 0 && (ee = "" + Je.key), Je.ref !== void 0 && (je = Je.ref);
    for (ue in Je) he.call(Je, ue) && !bt.hasOwnProperty(ue) && (Ye[ue] = Je[ue]);
    if (S && S.defaultProps) for (ue in Je = S.defaultProps, Je) Ye[ue] === void 0 && (Ye[ue] = Je[ue]);
    return { $$typeof: q, type: S, key: ee, ref: je, props: Ye, _owner: Qe.current };
  }
  return Jp.Fragment = D, Jp.jsx = we, Jp.jsxs = we, Jp;
}
var Zp = {}, iR;
function pD() {
  if (iR) return Zp;
  iR = 1;
  var $ = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    var q = nv(), D = Symbol.for("react.element"), he = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), bt = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Je = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), Re = Symbol.iterator, vt = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = Re && R[Re] || R[vt];
      return typeof Q == "function" ? Q : null;
    }
    var sn = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(R) {
      {
        for (var Q = arguments.length, G = new Array(Q > 1 ? Q - 1 : 0), Me = 1; Me < Q; Me++)
          G[Me - 1] = arguments[Me];
        Ve("error", R, G);
      }
    }
    function Ve(R, Q, G) {
      {
        var Me = sn.ReactDebugCurrentFrame, pt = Me.getStackAddendum();
        pt !== "" && (Q += "%s", G = G.concat([pt]));
        var Rt = G.map(function(Ae) {
          return String(Ae);
        });
        Rt.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Rt);
      }
    }
    var Nt = !1, Te = !1, dt = !1, We = !1, xn = !1, gn;
    gn = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Qe || R === we || xn || R === bt || R === ue || R === Ye || We || R === oe || Nt || Te || dt || typeof R == "object" && R !== null && (R.$$typeof === je || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === Je || R.$$typeof === Ce || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === gn || R.getModuleId !== void 0));
    }
    function Et(R, Q, G) {
      var Me = R.displayName;
      if (Me)
        return Me;
      var pt = Q.displayName || Q.name || "";
      return pt !== "" ? G + "(" + pt + ")" : G;
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
        case Qe:
          return "Fragment";
        case he:
          return "Portal";
        case we:
          return "Profiler";
        case bt:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Ye:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Je:
            var Q = R;
            return nn(Q) + ".Consumer";
          case S:
            var G = R;
            return nn(G._context) + ".Provider";
          case Ce:
            return Et(R, R.render, "ForwardRef");
          case ee:
            var Me = R.displayName || null;
            return Me !== null ? Me : Pe(R.type) || "Memo";
          case je: {
            var pt = R, Rt = pt._payload, Ae = pt._init;
            try {
              return Pe(Ae(Rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var rt = Object.assign, xt = 0, at, P, me, ie, b, B, Ne;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function et() {
      {
        if (xt === 0) {
          at = console.log, P = console.info, me = console.warn, ie = console.error, b = console.group, B = console.groupCollapsed, Ne = console.groupEnd;
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
        xt++;
      }
    }
    function ut() {
      {
        if (xt--, xt === 0) {
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
              value: P
            }),
            warn: rt({}, R, {
              value: me
            }),
            error: rt({}, R, {
              value: ie
            }),
            group: rt({}, R, {
              value: b
            }),
            groupCollapsed: rt({}, R, {
              value: B
            }),
            groupEnd: rt({}, R, {
              value: Ne
            })
          });
        }
        xt < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = sn.ReactCurrentDispatcher, ft;
    function Ct(R, Q, G) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (pt) {
            var Me = pt.stack.trim().match(/\n( *(at )?)/);
            ft = Me && Me[1] || "";
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
    function fr(R, Q) {
      if (!R || Pt)
        return "";
      {
        var G = Xn.get(R);
        if (G !== void 0)
          return G;
      }
      var Me;
      Pt = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Rt;
      Rt = mt.current, mt.current = null, et();
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
            } catch (Mn) {
              Me = Mn;
            }
            Reflect.construct(R, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (Mn) {
              Me = Mn;
            }
            R.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mn) {
            Me = Mn;
          }
          R();
        }
      } catch (Mn) {
        if (Mn && Me && typeof Mn.stack == "string") {
          for (var st = Mn.stack.split(`
`), Ln = Me.stack.split(`
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
        Pt = !1, mt.current = Rt, ut(), Error.prepareStackTrace = pt;
      }
      var Ft = R ? R.displayName || R.name : "", ka = Ft ? Ct(Ft) : "";
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
        case ue:
          return Ct("Suspense");
        case Ye:
          return Ct("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ce:
            return Sn(R.render);
          case ee:
            return Hn(R.type, Q, G);
          case je: {
            var Me = R, pt = Me._payload, Rt = Me._init;
            try {
              return Hn(Rt(pt), Q, G);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Nn = {}, gr = sn.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        gr.setExtraStackFrame(G);
      } else
        gr.setExtraStackFrame(null);
    }
    function Vn(R, Q, G, Me, pt) {
      {
        var Rt = Function.call.bind(wn);
        for (var Ae in R)
          if (Rt(R, Ae)) {
            var st = void 0;
            try {
              if (typeof R[Ae] != "function") {
                var Ln = Error((Me || "React class") + ": " + G + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              st = R[Ae](Q, Ae, Me, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              st = Gt;
            }
            st && !(st instanceof Error) && (dr(pt), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", G, Ae, typeof st), dr(null)), st instanceof Error && !(st.message in Nn) && (Nn[st.message] = !0, dr(pt), lt("Failed %s type: %s", G, st.message), dr(null));
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
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(R)), Jn(R);
    }
    var cn = sn.ReactCurrentOwner, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ua, oa, ne;
    ne = {};
    function Oe(R) {
      if (wn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ot(R) {
      if (wn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, Q) {
      if (typeof R.ref == "string" && cn.current && Q && cn.current.stateNode !== Q) {
        var G = Pe(cn.current.type);
        ne[G] || (lt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(cn.current.type), R.ref), ne[G] = !0);
      }
    }
    function Lt(R, Q) {
      {
        var G = function() {
          ua || (ua = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
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
          oa || (oa = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var pn = function(R, Q, G, Me, pt, Rt, Ae) {
      var st = {
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
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function vr(R, Q, G, Me, pt) {
      {
        var Rt, Ae = {}, st = null, Ln = null;
        G !== void 0 && (Sr(G), st = "" + G), ot(Q) && (Sr(Q.key), st = "" + Q.key), Oe(Q) && (Ln = Q.ref, At(Q, pt));
        for (Rt in Q)
          wn.call(Q, Rt) && !la.hasOwnProperty(Rt) && (Ae[Rt] = Q[Rt]);
        if (R && R.defaultProps) {
          var Gt = R.defaultProps;
          for (Rt in Gt)
            Ae[Rt] === void 0 && (Ae[Rt] = Gt[Rt]);
        }
        if (st || Ln) {
          var fn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Lt(Ae, fn), Ln && bn(Ae, fn);
        }
        return pn(R, st, Ln, pt, Me, cn.current, Ae);
      }
    }
    var Bt = sn.ReactCurrentOwner, In = sn.ReactDebugCurrentFrame;
    function jt(R) {
      if (R) {
        var Q = R._owner, G = Hn(R.type, R._source, Q ? Q.type : null);
        In.setExtraStackFrame(G);
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
    function ml(R) {
      return "";
    }
    var au = {};
    function iu(R) {
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
        var G = iu(Q);
        if (au[G])
          return;
        au[G] = !0;
        var Me = "";
        R && R._owner && R._owner !== Bt.current && (Me = " It was passed a child from " + Pe(R._owner.type) + "."), jt(R), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Me), jt(null);
      }
    }
    function qa(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (aa(R))
          for (var G = 0; G < R.length; G++) {
            var Me = R[G];
            Ga(Me) && yl(Me, Q);
          }
        else if (Ga(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var pt = Fn(R);
          if (typeof pt == "function" && pt !== R.entries)
            for (var Rt = pt.call(R), Ae; !(Ae = Rt.next()).done; )
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
        else if (typeof Q == "object" && (Q.$$typeof === Ce || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === ee))
          G = Q.propTypes;
        else
          return;
        if (G) {
          var Me = Pe(Q);
          Vn(G, R.props, "prop", Me, R);
        } else if (Q.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var pt = Pe(Q);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var Q = Object.keys(R.props), G = 0; G < Q.length; G++) {
          var Me = Q[G];
          if (Me !== "children" && Me !== "key") {
            jt(R), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), jt(null);
            break;
          }
        }
        R.ref !== null && (jt(R), lt("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    var Mi = {};
    function Er(R, Q, G, Me, pt, Rt) {
      {
        var Ae = Jt(R);
        if (!Ae) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = ml();
          Ln ? st += Ln : st += ba();
          var Gt;
          R === null ? Gt = "null" : aa(R) ? Gt = "array" : R !== void 0 && R.$$typeof === D ? (Gt = "<" + (Pe(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof R, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, st);
        }
        var fn = vr(R, Q, G, pt, Rt);
        if (fn == null)
          return fn;
        if (Ae) {
          var hr = Q.children;
          if (hr !== void 0)
            if (Me)
              if (aa(hr)) {
                for (var Ft = 0; Ft < hr.length; Ft++)
                  qa(hr[Ft], R);
                Object.freeze && Object.freeze(hr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(hr, R);
        }
        if (wn.call(Q, "key")) {
          var ka = Pe(R), Mn = Object.keys(Q).filter(function(Ui) {
            return Ui !== "key";
          }), Vr = Mn.length > 0 ? "{key: someKey, " + Mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mi[ka + Vr]) {
            var tt = Mn.length > 0 ? "{" + Mn.join(": ..., ") + ": ...}" : "{}";
            lt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vr, ka, tt, ka), Mi[ka + Vr] = !0;
          }
        }
        return R === Qe ? Da(fn) : Xa(fn), fn;
      }
    }
    function Hr(R, Q, G) {
      return Er(R, Q, G, !0);
    }
    function sa(R, Q, G) {
      return Er(R, Q, G, !1);
    }
    var zi = sa, gl = Hr;
    Zp.Fragment = Qe, Zp.jsx = zi, Zp.jsxs = gl;
  }(), Zp;
}
var lR;
function vD() {
  if (lR) return Pm.exports;
  lR = 1;
  var $ = {};
  return $.NODE_ENV === "production" ? Pm.exports = dD() : Pm.exports = pD(), Pm.exports;
}
var it = vD(), Qm = nv(), Bf = {}, $m = { exports: {} }, Qa = {}, Im = { exports: {} }, g0 = {};
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
function hD() {
  return uR || (uR = 1, function($) {
    function q(P, me) {
      var ie = P.length;
      P.push(me);
      e: for (; 0 < ie; ) {
        var b = ie - 1 >>> 1, B = P[b];
        if (0 < Qe(B, me)) P[b] = me, P[ie] = B, ie = b;
        else break e;
      }
    }
    function D(P) {
      return P.length === 0 ? null : P[0];
    }
    function he(P) {
      if (P.length === 0) return null;
      var me = P[0], ie = P.pop();
      if (ie !== me) {
        P[0] = ie;
        e: for (var b = 0, B = P.length, Ne = B >>> 1; b < Ne; ) {
          var Be = 2 * (b + 1) - 1, et = P[Be], ut = Be + 1, mt = P[ut];
          if (0 > Qe(et, ie)) ut < B && 0 > Qe(mt, et) ? (P[b] = mt, P[ut] = ie, b = ut) : (P[b] = et, P[Be] = ie, b = Be);
          else if (ut < B && 0 > Qe(mt, ie)) P[b] = mt, P[ut] = ie, b = ut;
          else break e;
        }
      }
      return me;
    }
    function Qe(P, me) {
      var ie = P.sortIndex - me.sortIndex;
      return ie !== 0 ? ie : P.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var bt = performance;
      $.unstable_now = function() {
        return bt.now();
      };
    } else {
      var we = Date, S = we.now();
      $.unstable_now = function() {
        return we.now() - S;
      };
    }
    var Je = [], Ce = [], ue = 1, Ye = null, ee = 3, je = !1, oe = !1, Re = !1, vt = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function lt(P) {
      for (var me = D(Ce); me !== null; ) {
        if (me.callback === null) he(Ce);
        else if (me.startTime <= P) he(Ce), me.sortIndex = me.expirationTime, q(Je, me);
        else break;
        me = D(Ce);
      }
    }
    function Ve(P) {
      if (Re = !1, lt(P), !oe) if (D(Je) !== null) oe = !0, xt(Nt);
      else {
        var me = D(Ce);
        me !== null && at(Ve, me.startTime - P);
      }
    }
    function Nt(P, me) {
      oe = !1, Re && (Re = !1, Fn(We), We = -1), je = !0;
      var ie = ee;
      try {
        for (lt(me), Ye = D(Je); Ye !== null && (!(Ye.expirationTime > me) || P && !Jt()); ) {
          var b = Ye.callback;
          if (typeof b == "function") {
            Ye.callback = null, ee = Ye.priorityLevel;
            var B = b(Ye.expirationTime <= me);
            me = $.unstable_now(), typeof B == "function" ? Ye.callback = B : Ye === D(Je) && he(Je), lt(me);
          } else he(Je);
          Ye = D(Je);
        }
        if (Ye !== null) var Ne = !0;
        else {
          var Be = D(Ce);
          Be !== null && at(Ve, Be.startTime - me), Ne = !1;
        }
        return Ne;
      } finally {
        Ye = null, ee = ie, je = !1;
      }
    }
    var Te = !1, dt = null, We = -1, xn = 5, gn = -1;
    function Jt() {
      return !($.unstable_now() - gn < xn);
    }
    function Et() {
      if (dt !== null) {
        var P = $.unstable_now();
        gn = P;
        var me = !0;
        try {
          me = dt(!0, P);
        } finally {
          me ? nn() : (Te = !1, dt = null);
        }
      } else Te = !1;
    }
    var nn;
    if (typeof sn == "function") nn = function() {
      sn(Et);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), rt = Pe.port2;
      Pe.port1.onmessage = Et, nn = function() {
        rt.postMessage(null);
      };
    } else nn = function() {
      vt(Et, 0);
    };
    function xt(P) {
      dt = P, Te || (Te = !0, nn());
    }
    function at(P, me) {
      We = vt(function() {
        P($.unstable_now());
      }, me);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, $.unstable_continueExecution = function() {
      oe || je || (oe = !0, xt(Nt));
    }, $.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < P ? Math.floor(1e3 / P) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, $.unstable_getFirstCallbackNode = function() {
      return D(Je);
    }, $.unstable_next = function(P) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = ee;
      }
      var ie = ee;
      ee = me;
      try {
        return P();
      } finally {
        ee = ie;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(P, me) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var ie = ee;
      ee = P;
      try {
        return me();
      } finally {
        ee = ie;
      }
    }, $.unstable_scheduleCallback = function(P, me, ie) {
      var b = $.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? b + ie : b) : ie = b, P) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ie + B, P = { id: ue++, callback: me, priorityLevel: P, startTime: ie, expirationTime: B, sortIndex: -1 }, ie > b ? (P.sortIndex = ie, q(Ce, P), D(Je) === null && P === D(Ce) && (Re ? (Fn(We), We = -1) : Re = !0, at(Ve, ie - b))) : (P.sortIndex = B, q(Je, P), oe || je || (oe = !0, xt(Nt))), P;
    }, $.unstable_shouldYield = Jt, $.unstable_wrapCallback = function(P) {
      var me = ee;
      return function() {
        var ie = ee;
        ee = me;
        try {
          return P.apply(this, arguments);
        } finally {
          ee = ie;
        }
      };
    };
  }(g0)), g0;
}
var S0 = {}, oR;
function mD() {
  return oR || (oR = 1, function($) {
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
      var D = !1, he = !1, Qe = 5;
      function bt(ne, Oe) {
        var ot = ne.length;
        ne.push(Oe), Je(ne, Oe, ot);
      }
      function we(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var Oe = ne[0], ot = ne.pop();
        return ot !== Oe && (ne[0] = ot, Ce(ne, ot, 0)), Oe;
      }
      function Je(ne, Oe, ot) {
        for (var At = ot; At > 0; ) {
          var Lt = At - 1 >>> 1, bn = ne[Lt];
          if (ue(bn, Oe) > 0)
            ne[Lt] = Oe, ne[At] = bn, At = Lt;
          else
            return;
        }
      }
      function Ce(ne, Oe, ot) {
        for (var At = ot, Lt = ne.length, bn = Lt >>> 1; At < bn; ) {
          var pn = (At + 1) * 2 - 1, vr = ne[pn], Bt = pn + 1, In = ne[Bt];
          if (ue(vr, Oe) < 0)
            Bt < Lt && ue(In, vr) < 0 ? (ne[At] = In, ne[Bt] = Oe, At = Bt) : (ne[At] = vr, ne[pn] = Oe, At = pn);
          else if (Bt < Lt && ue(In, Oe) < 0)
            ne[At] = In, ne[Bt] = Oe, At = Bt;
          else
            return;
        }
      }
      function ue(ne, Oe) {
        var ot = ne.sortIndex - Oe.sortIndex;
        return ot !== 0 ? ot : ne.id - Oe.id;
      }
      var Ye = 1, ee = 2, je = 3, oe = 4, Re = 5;
      function vt(ne, Oe) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var sn = performance;
        $.unstable_now = function() {
          return sn.now();
        };
      } else {
        var lt = Date, Ve = lt.now();
        $.unstable_now = function() {
          return lt.now() - Ve;
        };
      }
      var Nt = 1073741823, Te = -1, dt = 250, We = 5e3, xn = 1e4, gn = Nt, Jt = [], Et = [], nn = 1, Pe = null, rt = je, xt = !1, at = !1, P = !1, me = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(ne) {
        for (var Oe = we(Et); Oe !== null; ) {
          if (Oe.callback === null)
            S(Et);
          else if (Oe.startTime <= ne)
            S(Et), Oe.sortIndex = Oe.expirationTime, bt(Jt, Oe);
          else
            return;
          Oe = we(Et);
        }
      }
      function Ne(ne) {
        if (P = !1, B(ne), !at)
          if (we(Jt) !== null)
            at = !0, Sr(Be);
          else {
            var Oe = we(Et);
            Oe !== null && cn(Ne, Oe.startTime - ne);
          }
      }
      function Be(ne, Oe) {
        at = !1, P && (P = !1, la()), xt = !0;
        var ot = rt;
        try {
          var At;
          if (!he) return et(ne, Oe);
        } finally {
          Pe = null, rt = ot, xt = !1;
        }
      }
      function et(ne, Oe) {
        var ot = Oe;
        for (B(ot), Pe = we(Jt); Pe !== null && !D && !(Pe.expirationTime > ot && (!ne || dr())); ) {
          var At = Pe.callback;
          if (typeof At == "function") {
            Pe.callback = null, rt = Pe.priorityLevel;
            var Lt = Pe.expirationTime <= ot, bn = At(Lt);
            ot = $.unstable_now(), typeof bn == "function" ? Pe.callback = bn : Pe === we(Jt) && S(Jt), B(ot);
          } else
            S(Jt);
          Pe = we(Jt);
        }
        if (Pe !== null)
          return !0;
        var pn = we(Et);
        return pn !== null && cn(Ne, pn.startTime - ot), !1;
      }
      function ut(ne, Oe) {
        switch (ne) {
          case Ye:
          case ee:
          case je:
          case oe:
          case Re:
            break;
          default:
            ne = je;
        }
        var ot = rt;
        rt = ne;
        try {
          return Oe();
        } finally {
          rt = ot;
        }
      }
      function mt(ne) {
        var Oe;
        switch (rt) {
          case Ye:
          case ee:
          case je:
            Oe = je;
            break;
          default:
            Oe = rt;
            break;
        }
        var ot = rt;
        rt = Oe;
        try {
          return ne();
        } finally {
          rt = ot;
        }
      }
      function ft(ne) {
        var Oe = rt;
        return function() {
          var ot = rt;
          rt = Oe;
          try {
            return ne.apply(this, arguments);
          } finally {
            rt = ot;
          }
        };
      }
      function Ct(ne, Oe, ot) {
        var At = $.unstable_now(), Lt;
        if (typeof ot == "object" && ot !== null) {
          var bn = ot.delay;
          typeof bn == "number" && bn > 0 ? Lt = At + bn : Lt = At;
        } else
          Lt = At;
        var pn;
        switch (ne) {
          case Ye:
            pn = Te;
            break;
          case ee:
            pn = dt;
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
          callback: Oe,
          priorityLevel: ne,
          startTime: Lt,
          expirationTime: vr,
          sortIndex: -1
        };
        return Lt > At ? (Bt.sortIndex = Lt, bt(Et, Bt), we(Jt) === null && Bt === we(Et) && (P ? la() : P = !0, cn(Ne, Lt - At))) : (Bt.sortIndex = vr, bt(Jt, Bt), !at && !xt && (at = !0, Sr(Be))), Bt;
      }
      function Pt() {
      }
      function Xn() {
        !at && !xt && (at = !0, Sr(Be));
      }
      function Fr() {
        return we(Jt);
      }
      function fr(ne) {
        ne.callback = null;
      }
      function Sn() {
        return rt;
      }
      var Kn = !1, Hn = null, wn = -1, Nn = Qe, gr = -1;
      function dr() {
        var ne = $.unstable_now() - gr;
        return !(ne < Nn);
      }
      function Vn() {
      }
      function ra(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? Nn = Math.floor(1e3 / ne) : Nn = Qe;
      }
      var aa = function() {
        if (Hn !== null) {
          var ne = $.unstable_now();
          gr = ne;
          var Oe = !0, ot = !0;
          try {
            ot = Hn(Oe, ne);
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
      function cn(ne, Oe) {
        wn = me(function() {
          ne($.unstable_now());
        }, Oe);
      }
      function la() {
        ie(wn), wn = -1;
      }
      var ua = Vn, oa = null;
      $.unstable_IdlePriority = Re, $.unstable_ImmediatePriority = Ye, $.unstable_LowPriority = oe, $.unstable_NormalPriority = je, $.unstable_Profiling = oa, $.unstable_UserBlockingPriority = ee, $.unstable_cancelCallback = fr, $.unstable_continueExecution = Xn, $.unstable_forceFrameRate = ra, $.unstable_getCurrentPriorityLevel = Sn, $.unstable_getFirstCallbackNode = Fr, $.unstable_next = mt, $.unstable_pauseExecution = Pt, $.unstable_requestPaint = ua, $.unstable_runWithPriority = ut, $.unstable_scheduleCallback = Ct, $.unstable_shouldYield = dr, $.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(S0)), S0;
}
var sR;
function yR() {
  if (sR) return Im.exports;
  sR = 1;
  var $ = {};
  return $.NODE_ENV === "production" ? Im.exports = hD() : Im.exports = mD(), Im.exports;
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
function yD() {
  if (cR) return Qa;
  cR = 1;
  var $ = nv(), q = yR();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var he = /* @__PURE__ */ new Set(), Qe = {};
  function bt(n, r) {
    we(n, r), we(n + "Capture", r);
  }
  function we(n, r) {
    for (Qe[n] = r, n = 0; n < r.length; n++) he.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Je = Object.prototype.hasOwnProperty, Ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, Ye = {};
  function ee(n) {
    return Je.call(Ye, n) ? !0 : Je.call(ue, n) ? !1 : Ce.test(n) ? Ye[n] = !0 : (ue[n] = !0, !1);
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
  var vt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    vt[n] = new Re(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    vt[r] = new Re(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    vt[n] = new Re(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    vt[n] = new Re(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    vt[n] = new Re(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    vt[n] = new Re(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    vt[n] = new Re(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    vt[n] = new Re(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    vt[n] = new Re(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    vt[r] = new Re(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Fn, sn);
    vt[r] = new Re(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Fn, sn);
    vt[r] = new Re(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    vt[n] = new Re(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), vt.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    vt[n] = new Re(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function lt(n, r, l, o) {
    var c = vt.hasOwnProperty(r) ? vt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (oe(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ve = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nt = Symbol.for("react.element"), Te = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Jt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), P = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = P && n[P] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, b;
  function B(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var Ne = !1;
  function Be(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
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
      Ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function et(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
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
      case dt:
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
      case Et:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case rt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case xt:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function mt(n) {
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
  function Oe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || oa.hasOwnProperty(n) && oa[n] ? ("" + r).trim() : r + "px";
  }
  function ot(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Oe(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var At = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function ml(n, r) {
    return n(r);
  }
  function au() {
  }
  var iu = !1;
  function yl(n, r, l) {
    if (iu) return n(r, l);
    iu = !0;
    try {
      return ml(n, r, l);
    } finally {
      iu = !1, (In !== null || jt !== null) && (au(), ba());
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
    } catch (W) {
      this.onError(W);
    }
  }
  var Er = !1, Hr = null, sa = !1, zi = null, gl = { onError: function(n) {
    Er = !0, Hr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Er = !1, Hr = null, Mi.apply(gl, arguments);
  }
  function Q(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Er) {
      if (Er) {
        var U = Hr;
        Er = !1, Hr = null;
      } else throw Error(D(198));
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
  function Me(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
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
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
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
    return n = Rt(n), n !== null ? st(n) : null;
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
  var Ln = q.unstable_scheduleCallback, Gt = q.unstable_cancelCallback, fn = q.unstable_shouldYield, hr = q.unstable_requestPaint, Ft = q.unstable_now, ka = q.unstable_getCurrentPriorityLevel, Mn = q.unstable_ImmediatePriority, Vr = q.unstable_UserBlockingPriority, tt = q.unstable_NormalPriority, Ui = q.unstable_LowPriority, Ai = q.unstable_IdlePriority, Sl = null, Pr = null;
  function Ko(n) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function") try {
      Pr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cr = Math.clz32 ? Math.clz32 : es, Jo = Math.log, Zo = Math.LN2;
  function es(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Jo(n) / Zo | 0) | 0;
  }
  var lu = 64, Gu = 4194304;
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
  function uu() {
    var n = lu;
    return lu <<= 1, !(lu & 4194240) && (lu = 64), n;
  }
  function ou(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Cr(r), n[r] = l;
  }
  function ts(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Cr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ns(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Cr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var yt = 0;
  function rs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qu, Rl, as, gt, Xu, su = !1, Ge = [], Ka = null, vn = null, Br = null, Na = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), rn = [], hn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function is(n, r) {
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
        return Na.set(d, Zn(Na.get(d) || null, n, r, l, o, c)), !0;
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
          if (r = Me(l), r !== null) {
            n.blockedOn = r, Xu(n.priority, function() {
              as(l);
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
      } else return r = hi(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function cu(n, r, l) {
    Ku(n) && l.delete(r);
  }
  function fu() {
    su = !1, Ka !== null && Ku(Ka) && (Ka = null), vn !== null && Ku(vn) && (vn = null), Br !== null && Ku(Br) && (Br = null), Na.forEach(cu), Tl.forEach(cu);
  }
  function _l(n, r) {
    n.blockedOn === r && (n.blockedOn = null, su || (su = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, fu)));
  }
  function La(n) {
    function r(c) {
      return _l(c, n);
    }
    if (0 < Ge.length) {
      _l(Ge[0], n);
      for (var l = 1; l < Ge.length; l++) {
        var o = Ge[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ka !== null && _l(Ka, n), vn !== null && _l(vn, n), Br !== null && _l(Br, n), Na.forEach(r), Tl.forEach(r), l = 0; l < rn.length; l++) o = rn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < rn.length && (l = rn[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && rn.shift();
  }
  var Fi = Ve.ReactCurrentBatchConfig, du = !0;
  function Hi(n, r, l, o) {
    var c = yt, d = Fi.transition;
    Fi.transition = null;
    try {
      yt = 1, pi(n, r, l, o);
    } finally {
      yt = c, Fi.transition = d;
    }
  }
  function Ju(n, r, l, o) {
    var c = yt, d = Fi.transition;
    Fi.transition = null;
    try {
      yt = 4, pi(n, r, l, o);
    } finally {
      yt = c, Fi.transition = d;
    }
  }
  function pi(n, r, l, o) {
    if (du) {
      var c = Zu(n, r, l, o);
      if (c === null) td(n, r, o, Vi, l), is(n, o);
      else if ($r(c, n, r, l, o)) o.stopPropagation();
      else if (is(n, o), r & 4 && -1 < hn.indexOf(n)) {
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
    if (Vi = null, n = vr(o), n = Gi(n), n !== null) if (r = G(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Me(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function ls(n) {
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
  }, defaultPrevented: 0, isTrusted: 0 }, $e = Se(de), ct = ie({}, de, { view: 0, detail: 0 }), Ht = Se(ct), $t, It, Yt, an = ie({}, ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Yt && (Yt && n.type === "mousemove" ? ($t = n.screenX - Yt.screenX, It = n.screenY - Yt.screenY) : It = $t = 0, Yt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : It;
  } }), wt = Se(an), xl = ie({}, an, { dataTransfer: 0 }), to = Se(xl), us = ie({}, ct, { relatedTarget: 0 }), os = Se(us), Pi = ie({}, de, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ss = Se(Pi), cs = ie({}, de, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $f = Se(cs), Wm = ie({}, de, { data: 0 }), rv = Se(Wm), av = {
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
  var Gm = ie({}, ct, { key: function(n) {
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
  } }), Bi = Se(Gm), qm = ie({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = Se(qm), Yf = ie({}, ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gc }), Qf = Se(Yf), Xm = ie({}, de, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ec = Se(Xm), uv = ie({}, an, {
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
  var Wf = S && "TextEvent" in window && !ca, fs = S && (!En || ca && 8 < ca && 11 >= ca), ov = " ", no = !1;
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
  function Km(n, r) {
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
  function Jm(n, r) {
    if (wl) return n === "compositionend" || !En && sv(n, r) ? (n = C(), h = eo = Za = null, wl = !1, n) : null;
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
        return fs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Ga(o), r = wc(r, "onChange"), 0 < r.length && (l = new $e("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ds = null, ps = null;
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
    ds && (ds.detachEvent("onpropertychange", hv), ps = ds = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Ii(ps)) {
      var r = [];
      fv(r, ps, n, vr(n)), yl(dv, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (vv(), ds = r, ps = l, ds.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ii(ps);
  }
  function ny(n, r) {
    if (n === "click") return Ii(r);
  }
  function ry(n, r) {
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
      if (!Je.call(r, c) || !ei(n[c], r[c])) return !1;
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
  function vs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function pu(n) {
    var r = Ev(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && vs(l)) {
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
  var Rc = S && "documentMode" in document && 11 >= document.documentMode, vu = null, bl = null, hs = null, Jf = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || vu == null || vu !== fr(o) || (o = vu, "selectionStart" in o && vs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), hs && ro(hs, o) || (hs = o, o = wc(bl, "onSelect"), 0 < o.length && (r = new $e("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = vu)));
  }
  function Tc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ao = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, _c = {}, Rv = {};
  S && (Rv = document.createElement("div").style, "AnimationEvent" in window || (delete ao.animationend.animation, delete ao.animationiteration.animation, delete ao.animationstart.animation), "TransitionEvent" in window || delete ao.transitionend.transition);
  function ms(n) {
    if (_c[n]) return _c[n];
    if (!ao[n]) return n;
    var r = ao[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Rv) return _c[n] = r[l];
    return n;
  }
  var mr = ms("animationend"), Zf = ms("animationiteration"), Tv = ms("animationstart"), _v = ms("transitionend"), xv = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dl(n, r) {
    xv.set(n, r), bt(r, [n]);
  }
  for (var xc = 0; xc < wv.length; xc++) {
    var ys = wv[xc], gs = ys.toLowerCase(), ay = ys[0].toUpperCase() + ys.slice(1);
    Dl(gs, "on" + ay);
  }
  Dl(mr, "onAnimationEnd"), Dl(Zf, "onAnimationIteration"), Dl(Tv, "onAnimationStart"), Dl("dblclick", "onDoubleClick"), Dl("focusin", "onFocus"), Dl("focusout", "onBlur"), Dl(_v, "onTransitionEnd"), we("onMouseEnter", ["mouseout", "mouseover"]), we("onMouseLeave", ["mouseout", "mouseover"]), we("onPointerEnter", ["pointerout", "pointerover"]), we("onPointerLeave", ["pointerout", "pointerover"]), bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
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
  function Ss(n, r, l) {
    var o = 0;
    r && (o |= 4), ed(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, he.forEach(function(l) {
        l !== "selectionchange" && (iy.has(l) || Ss(l, !1, n), Ss(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Ss("selectionchange", !1, r));
    }
  }
  function ed(n, r, l, o) {
    switch (ls(r)) {
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
    yl(function() {
      var U = d, W = vr(l), X = [];
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
              ye = "focus", ce = os;
              break;
            case "focusout":
              ye = "blur", ce = os;
              break;
            case "beforeblur":
            case "afterblur":
              ce = os;
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
              ce = wt;
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
              ce = ss;
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
          var Ee = (r & 4) !== 0, kn = !Ee && n === "scroll", k = Ee ? Y !== null ? Y + "Capture" : null : Y;
          Ee = [];
          for (var x = U, L; x !== null; ) {
            L = x;
            var Z = L.stateNode;
            if (L.tag === 5 && Z !== null && (L = Z, k !== null && (Z = qa(x, k), Z != null && Ee.push(io(x, Z, L)))), kn) break;
            x = x.return;
          }
          0 < Ee.length && (Y = new ce(Y, ye, null, l, W), X.push({ event: Y, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Y && l !== pn && (ye = l.relatedTarget || l.fromElement) && (Gi(ye) || ye[ti])) break e;
          if ((ce || Y) && (Y = W.window === W ? W : (Y = W.ownerDocument) ? Y.defaultView || Y.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = U, ye = ye ? Gi(ye) : null, ye !== null && (kn = G(ye), ye !== kn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = U), ce !== ye)) {
            if (Ee = wt, Z = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = Sc, Z = "onPointerLeave", k = "onPointerEnter", x = "pointer"), kn = ce == null ? Y : lo(ce), L = ye == null ? Y : lo(ye), Y = new Ee(Z, x + "leave", ce, l, W), Y.target = kn, Y.relatedTarget = L, Z = null, Gi(W) === U && (Ee = new Ee(k, x + "enter", ye, l, W), Ee.target = L, Ee.relatedTarget = kn, Z = Ee), kn = Z, ce && ye) t: {
              for (Ee = ce, k = ye, x = 0, L = Ee; L; L = hu(L)) x++;
              for (L = 0, Z = k; Z; Z = hu(Z)) L++;
              for (; 0 < x - L; ) Ee = hu(Ee), x--;
              for (; 0 < L - x; ) k = hu(k), L--;
              for (; x--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = hu(Ee), k = hu(k);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && nd(X, Y, ce, Ee, !1), ye !== null && kn !== null && nd(X, kn, ye, Ee, !0);
          }
        }
        e: {
          if (Y = U ? lo(U) : window, ce = Y.nodeName && Y.nodeName.toLowerCase(), ce === "select" || ce === "input" && Y.type === "file") var xe = qf;
          else if (Gf(Y)) if (Xf) xe = ry;
          else {
            xe = ty;
            var Fe = ey;
          }
          else (ce = Y.nodeName) && ce.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (xe = ny);
          if (xe && (xe = xe(n, U))) {
            fv(X, xe, l, W);
            break e;
          }
          Fe && Fe(n, Y, U), n === "focusout" && (Fe = Y._wrapperState) && Fe.controlled && Y.type === "number" && gr(Y, "number", Y.value);
        }
        switch (Fe = U ? lo(U) : window, n) {
          case "focusin":
            (Gf(Fe) || Fe.contentEditable === "true") && (vu = Fe, bl = U, hs = null);
            break;
          case "focusout":
            hs = bl = vu = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, Cv(X, l, W);
            break;
          case "selectionchange":
            if (Rc) break;
          case "keydown":
          case "keyup":
            Cv(X, l, W);
        }
        var He;
        if (En) e: {
          switch (n) {
            case "compositionstart":
              var De = "onCompositionStart";
              break e;
            case "compositionend":
              De = "onCompositionEnd";
              break e;
            case "compositionupdate":
              De = "onCompositionUpdate";
              break e;
          }
          De = void 0;
        }
        else wl ? sv(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (fs && l.locale !== "ko" && (wl || De !== "onCompositionStart" ? De === "onCompositionEnd" && wl && (He = C()) : (Za = W, eo = "value" in Za ? Za.value : Za.textContent, wl = !0)), Fe = wc(U, De), 0 < Fe.length && (De = new rv(De, n, null, l, W), X.push({ event: De, listeners: Fe }), He ? De.data = He : (He = cv(l), He !== null && (De.data = He)))), (He = Wf ? Km(n, l) : Jm(n, l)) && (U = wc(U, "onBeforeInput"), 0 < U.length && (W = new rv("onBeforeInput", "beforeinput", null, l, W), X.push({ event: W, listeners: U }), W.data = He));
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
  function hu(n) {
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
  function Es(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(D(425));
  }
  function bc() {
  }
  var ad = null, id = null;
  function mu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cs = typeof setTimeout == "function" ? setTimeout : void 0, Rs = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, Nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(ud);
  } : Cs;
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
  function Ts(n) {
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
  var Wi = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + Wi, _s = "__reactProps$" + Wi, ti = "__reactContainer$" + Wi, sd = "__reactEvents$" + Wi, ly = "__reactListeners$" + Wi, uy = "__reactHandles$" + Wi;
  function Gi(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ti] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ts(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Ts(n);
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
    return n[_s] || null;
  }
  var ze = [], ni = -1;
  function Xt(n) {
    return { current: n };
  }
  function _e(n) {
    0 > ni || (n.current = ze[ni], ze[ni] = null, ni--);
  }
  function Mt(n, r) {
    ni++, ze[ni] = n.current, n.current = r;
  }
  var za = {}, Yn = Xt(za), Xe = Xt(!1), Rr = za;
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
    _e(Xe), _e(Yn);
  }
  function mi(n, r, l) {
    if (Yn.current !== za) throw Error(D(168));
    Mt(Yn, r), Mt(Xe, l);
  }
  function kl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, mt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function yu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || za, Rr = Yn.current, Mt(Yn, n), Mt(Xe, Xe.current), !0;
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = kl(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, _e(Xe), _e(Yn), Mt(Yn, n)) : _e(Xe), Mt(Xe, l);
  }
  var qi = null, Ol = !1, er = !1;
  function kc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Mv(n) {
    Ol = !0, kc(n);
  }
  function yi() {
    if (!er && qi !== null) {
      er = !0;
      var n = 0, r = yt;
      try {
        var l = qi;
        for (yt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, Ol = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), Ln(Mn, yi), c;
      } finally {
        yt = r, er = !1;
      }
    }
    return null;
  }
  var Ua = [], Nl = 0, Aa = null, gu = 0, Qr = [], Wr = 0, ri = null, Gr = 1, tr = "";
  function Su(n, r) {
    Ua[Nl++] = gu, Ua[Nl++] = Aa, Aa = n, gu = r;
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
  function Oc(n) {
    n.return !== null && (Su(n, 1), Ll(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Aa; ) Aa = Ua[--Nl], Ua[Nl] = null, gu = Ua[--Nl], Ua[Nl] = null;
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
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !mu(n.type, n.memoizedProps)), r && (r = va)) {
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
  var oy = Ve.ReactCurrentBatchConfig;
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
  function oo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zl(n) {
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
      return k = Yl(k, x), k.index = 0, k.sibling = null, k;
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
      return xe === dt ? W(k, x, L.props.children, Z, L.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === xt && zl(xe) === x.type) ? (Z = c(x, L.props), Z.ref = Ml(k, x, L), Z.return = k, Z) : (Z = af(L.type, L.key, L.props, null, k.mode, Z), Z.ref = Ml(k, x, L), Z.return = k, Z);
    }
    function U(k, x, L, Z) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = uf(L, k.mode, Z), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function W(k, x, L, Z, xe) {
      return x === null || x.tag !== 7 ? (x = zu(L, k.mode, Z, xe), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function X(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Wd("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Nt:
            return L = af(x.type, x.key, x.props, null, k.mode, L), L.ref = Ml(k, null, x), L.return = k, L;
          case Te:
            return x = uf(x, k.mode, L), x.return = k, x;
          case xt:
            var Z = x._init;
            return X(k, Z(x._payload), L);
        }
        if (dr(x) || me(x)) return x = zu(x, k.mode, L, null), x.return = k, x;
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
          case xt:
            return xe = L._init, Y(
              k,
              x,
              xe(L._payload),
              Z
            );
        }
        if (dr(L) || me(L)) return xe !== null ? null : W(k, x, L, Z, null);
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
          case xt:
            var Fe = Z._init;
            return ce(k, x, L, Fe(Z._payload), xe);
        }
        if (dr(Z) || me(Z)) return k = k.get(L) || null, W(x, k, Z, xe, null);
        oo(x, Z);
      }
      return null;
    }
    function ye(k, x, L, Z) {
      for (var xe = null, Fe = null, He = x, De = x = 0, _n = null; He !== null && De < L.length; De++) {
        He.index > De ? (_n = He, He = null) : _n = He.sibling;
        var Ot = Y(k, He, L[De], Z);
        if (Ot === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Ot.alternate === null && r(k, He), x = d(Ot, x, De), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot, He = _n;
      }
      if (De === L.length) return l(k, He), ln && Su(k, De), xe;
      if (He === null) {
        for (; De < L.length; De++) He = X(k, L[De], Z), He !== null && (x = d(He, x, De), Fe === null ? xe = He : Fe.sibling = He, Fe = He);
        return ln && Su(k, De), xe;
      }
      for (He = o(k, He); De < L.length; De++) _n = ce(He, k, De, L[De], Z), _n !== null && (n && _n.alternate !== null && He.delete(_n.key === null ? De : _n.key), x = d(_n, x, De), Fe === null ? xe = _n : Fe.sibling = _n, Fe = _n);
      return n && He.forEach(function(Ql) {
        return r(k, Ql);
      }), ln && Su(k, De), xe;
    }
    function Ee(k, x, L, Z) {
      var xe = me(L);
      if (typeof xe != "function") throw Error(D(150));
      if (L = xe.call(L), L == null) throw Error(D(151));
      for (var Fe = xe = null, He = x, De = x = 0, _n = null, Ot = L.next(); He !== null && !Ot.done; De++, Ot = L.next()) {
        He.index > De ? (_n = He, He = null) : _n = He.sibling;
        var Ql = Y(k, He, Ot.value, Z);
        if (Ql === null) {
          He === null && (He = _n);
          break;
        }
        n && He && Ql.alternate === null && r(k, He), x = d(Ql, x, De), Fe === null ? xe = Ql : Fe.sibling = Ql, Fe = Ql, He = _n;
      }
      if (Ot.done) return l(
        k,
        He
      ), ln && Su(k, De), xe;
      if (He === null) {
        for (; !Ot.done; De++, Ot = L.next()) Ot = X(k, Ot.value, Z), Ot !== null && (x = d(Ot, x, De), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot);
        return ln && Su(k, De), xe;
      }
      for (He = o(k, He); !Ot.done; De++, Ot = L.next()) Ot = ce(He, k, De, Ot.value, Z), Ot !== null && (n && Ot.alternate !== null && He.delete(Ot.key === null ? De : Ot.key), x = d(Ot, x, De), Fe === null ? xe = Ot : Fe.sibling = Ot, Fe = Ot);
      return n && He.forEach(function(ch) {
        return r(k, ch);
      }), ln && Su(k, De), xe;
    }
    function kn(k, x, L, Z) {
      if (typeof L == "object" && L !== null && L.type === dt && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Nt:
            e: {
              for (var xe = L.key, Fe = x; Fe !== null; ) {
                if (Fe.key === xe) {
                  if (xe = L.type, xe === dt) {
                    if (Fe.tag === 7) {
                      l(k, Fe.sibling), x = c(Fe, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (Fe.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === xt && zl(xe) === Fe.type) {
                    l(k, Fe.sibling), x = c(Fe, L.props), x.ref = Ml(k, Fe, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, Fe);
                  break;
                } else r(k, Fe);
                Fe = Fe.sibling;
              }
              L.type === dt ? (x = zu(L.props.children, k.mode, Z, L.key), x.return = k, k = x) : (Z = af(L.type, L.key, L.props, null, k.mode, Z), Z.ref = Ml(k, x, L), Z.return = k, k = Z);
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
          case xt:
            return Fe = L._init, kn(k, x, Fe(L._payload), Z);
        }
        if (dr(L)) return ye(k, x, L, Z);
        if (me(L)) return Ee(k, x, L, Z);
        oo(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = Wd(L, k.mode, Z), x.return = k, k = x), m(k)) : l(k, x);
    }
    return kn;
  }
  var Ul = Uv(!0), Av = Uv(!1), zc = Xt(null), Xi = null, Dn = null, ae = null;
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
  var Eu = null;
  function hd(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
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
    if (o = o.shared, kt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ki(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, hd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ki(n, l);
  }
  function Uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ns(n, l);
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
      var X = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var Y = E.lane, ce = E.eventTime;
        if ((o & Y) === Y) {
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
            switch (Y = r, ce = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  X = ye.call(ce, X, Y);
                  break e;
                }
                X = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, Y = typeof ye == "function" ? ye.call(ce, X, Y) : ye, Y == null) break e;
                X = ie({}, X, Y);
                break e;
              case 2:
                Al = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else ce = { eventTime: ce, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = ce, T = X) : W = W.next = ce, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = X), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      bu |= m, n.lanes = m, n.memoizedState = X;
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
  var xs = {}, gi = Xt(xs), co = Xt(xs), fo = Xt(xs);
  function Cu(n) {
    if (n === xs) throw Error(D(174));
    return n;
  }
  function gd(n, r) {
    switch (Mt(fo, r), Mt(co, n), Mt(gi, xs), n = r.nodeType, n) {
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
    Cu(fo.current);
    var r = Cu(gi.current), l = Sr(r, n.type);
    r !== l && (Mt(co, n), Mt(gi, l));
  }
  function Sd(n) {
    co.current === n && (_e(gi), _e(co));
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
  var Ed = [];
  function jc() {
    for (var n = 0; n < Ed.length; n++) Ed[n]._workInProgressVersionPrimary = null;
    Ed.length = 0;
  }
  var Fc = Ve.ReactCurrentDispatcher, Cd = Ve.ReactCurrentBatchConfig, Ji = 0, re = null, Le = null, qe = null, un = !1, qr = !1, vo = 0, sy = 0;
  function yr() {
    throw Error(D(321));
  }
  function Rd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function bs(n, r, l, o, c, d) {
    if (Ji = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fc.current = n === null || n.memoizedState === null ? ga : cy, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, vo = 0, 25 <= d) throw Error(D(301));
        d += 1, qe = Le = null, r.updateQueue = null, Fc.current = en, n = l(o, c);
      } while (qr);
    }
    if (Fc.current = Ei, r = Le !== null && Le.next !== null, Ji = 0, qe = Le = re = null, un = !1, r) throw Error(D(300));
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
  function be() {
    if (Le === null) {
      var n = re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Le.next;
    var r = qe === null ? re.memoizedState : qe.next;
    if (r !== null) qe = r, Le = n;
    else {
      if (n === null) throw Error(D(310));
      Le = n, n = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, qe === null ? re.memoizedState = qe = n : qe = qe.next = n;
    }
    return qe;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ai(n) {
    var r = be(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = Le, c = o.baseQueue, d = l.pending;
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
          var X = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, re.lanes |= W, bu |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (Tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, re.lanes |= d, bu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Zi(n) {
    var r = be(), l = r.queue;
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
    var l = re, o = be(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, Ds(Hc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || qe !== null && qe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, mo.bind(null, l, o, c, r), void 0, null), Cn === null) throw Error(D(349));
      Ji & 30 || Ru(l, r, c);
    }
    return c;
  }
  function Ru(n, r, l) {
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
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function $c() {
    return be().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Kt();
    re.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = be();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Le !== null) {
      var m = Le.memoizedState;
      if (d = m.destroy, o !== null && Rd(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    re.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function Ds(n, r) {
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
  function ks() {
  }
  function Os(n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function _u(n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Rd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function qc(n, r, l) {
    return Ji & 21 ? (ei(l, r) || (l = uu(), re.lanes |= l, bu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function Td(n, r) {
    var l = yt;
    yt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      yt = l, Cd.transition = o;
    }
  }
  function Xc() {
    return be().memoizedState;
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
      o &= n.pendingLanes, l |= o, r.lanes = l, ns(n, l);
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
  }, useState: Bc, useDebugValue: ks, useDeferredValue: function(n) {
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
      Ji & 30 || Ru(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, mo.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kt(), r = Cn.identifierPrefix;
    if (ln) {
      var l = tr, o = Gr;
      l = (o & ~(1 << 32 - Cr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = sy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, cy = {
    readContext: Ha,
    useCallback: Os,
    useContext: Ha,
    useEffect: Ds,
    useImperativeHandle: Gc,
    useInsertionEffect: Yc,
    useLayoutEffect: Qc,
    useMemo: _u,
    useReducer: ai,
    useRef: $c,
    useState: function() {
      return ai(Si);
    },
    useDebugValue: ks,
    useDeferredValue: function(n) {
      var r = be();
      return qc(r, Le.memoizedState, n);
    },
    useTransition: function() {
      var n = ai(Si)[0], r = be().memoizedState;
      return [n, r];
    },
    useMutableSource: ii,
    useSyncExternalStore: ho,
    useId: Xc,
    unstable_isNewReconciler: !1
  }, en = { readContext: Ha, useCallback: Os, useContext: Ha, useEffect: Ds, useImperativeHandle: Gc, useInsertionEffect: Yc, useLayoutEffect: Qc, useMemo: _u, useReducer: Zi, useRef: $c, useState: function() {
    return Zi(Si);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = be();
    return Le === null ? r.memoizedState = n : qc(r, Le.memoizedState, n);
  }, useTransition: function() {
    var n = Zi(Si)[0], r = be().memoizedState;
    return [n, r];
  }, useMutableSource: ii, useSyncExternalStore: ho, useId: Xc, unstable_isNewReconciler: !1 };
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Co(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jl = { isMounted: function(n) {
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
  function Ns(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ro(l, o) || !ro(c, d) : !0;
  }
  function Pv(n, r, l) {
    var o = !1, c = za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = zn(r) ? Rr : Yn.current, o = r.contextTypes, d = (o = o != null) ? da(n, c) : za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jl.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, md(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = zn(r) ? Rr : Yn.current, c.context = da(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Co(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jl.enqueueReplaceState(c, c.state, null), Ac(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
      bd(n, r), typeof o != "function" && (Pl === null ? Pl = /* @__PURE__ */ new Set([this]) : Pl.add(this));
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
    c.has(l) || (c.add(l), n = Sy.bind(null, n, r, l), r.then(n, n));
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
  var Qv = Ve.ReactCurrentOwner, Tr = !1;
  function _r(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return so(r, c), o = bs(n, r, l, o, d, c), l = I(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && l && Oc(r), r.flags |= 1, _r(n, r, o, c), r.child);
  }
  function To(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hl(n, r, d, o, c)) : (n = af(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ro, l(m, o) && n.ref === r.ref) return Ci(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ro(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Ci(n, r, c);
    }
    return Vl(n, r, l, o, c);
  }
  function Kc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(wu, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(wu, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Mt(wu, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Mt(wu, Dr), Dr |= o;
    return _r(n, r, c, l), r.child;
  }
  function Kr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Vl(n, r, l, o, c) {
    var d = zn(l) ? Rr : Yn.current;
    return d = da(r, d), so(r, c), l = bs(n, r, l, o, d, c), o = I(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (ln && o && Oc(r), r.flags |= 1, _r(n, r, l, c), r.child);
  }
  function nt(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      yu(r);
    } else d = !1;
    if (so(r, c), r.stateNode === null) As(n, r), Pv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ha(U) : (U = zn(l) ? Rr : Yn.current, U = da(r, U));
      var W = l.getDerivedStateFromProps, X = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Bv(r, m, o, U), Al = !1;
      var Y = r.memoizedState;
      m.state = Y, Ac(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || Xe.current || Al ? (typeof W == "function" && (Co(r, l, W, o), T = r.memoizedState), (E = Al || Ns(r, l, E, o, Y, T, U)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, yd(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : Xr(r.type, E), m.props = U, X = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = zn(l) ? Rr : Yn.current, T = da(r, T));
      var ce = l.getDerivedStateFromProps;
      (W = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || Y !== T) && Bv(r, m, o, T), Al = !1, Y = r.memoizedState, m.state = Y, Ac(r, o, m, c);
      var ye = r.memoizedState;
      E !== X || Y !== ye || Xe.current || Al ? (typeof ce == "function" && (Co(r, l, ce, o), ye = r.memoizedState), (U = Al || Ns(r, l, U, o, Y, ye, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return _o(n, r, l, o, d, c);
  }
  function _o(n, r, l, o, c, d) {
    Kr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lv(r, l, !1), Ci(n, r, d);
    o = r.stateNode, Qv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : _r(n, r, E, d), r.memoizedState = o.state, c && Lv(r, l, !0), r.child;
  }
  function Od(n) {
    var r = n.stateNode;
    r.pendingContext ? mi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && mi(n, r.context, !1), gd(n, r.containerInfo);
  }
  function fy(n, r, l, o, c) {
    return uo(), Un(c), r.flags |= 256, _r(n, r, l, o), r.child;
  }
  var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zs(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xo(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Mt(mn, c & 1), n === null)
      return Lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = lf(m, o, 0, null), n = zu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zs(l), r.memoizedState = Nd, n) : Ld(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return dy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = zu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zs(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Nd, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ld(n, r) {
    return r = lf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Us(n, r, l, o) {
    return o !== null && Un(o), Ul(r, n.child, null, l), n = Ld(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ls(Error(D(422))), Us(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = lf({ mode: "visible", children: o.children }, c, 0, null), d = zu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = zs(m), r.memoizedState = Nd, d);
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
      return Id(), o = Ls(Error(D(421))), Us(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ey.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, va = fa(c.nextSibling), pa = r, ln = !0, ja = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ri, Gr = n.id, tr = n.overflow, ri = r), r = Ld(r, o.children), r.flags |= 4096, r);
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
  function As(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ci(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), bu |= r.lanes, !(l & r.childLanes)) return null;
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
        Od(r), uo();
        break;
      case 5:
        Hv(r);
        break;
      case 1:
        zn(r.type) && yu(r);
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
  var Ri, li, js, wo;
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
  }, js = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(gi.current);
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
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bc);
      }
      Lt(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Qe.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Qe.hasOwnProperty(U) ? (T != null && U === "onScroll" && qt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
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
  function py(n, r, l) {
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
        return o = r.stateNode, po(), _e(Xe), _e(Yn), jc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Ou(ja), ja = null))), li(n, r), Dt(r), null;
      case 5:
        Sd(r);
        var c = Cu(fo.current);
        if (l = r.type, n !== null && r.stateNode != null) js(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return Dt(r), null;
          }
          if (n = Cu(gi.current), Mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[_s] = d, n = (r.mode & 1) !== 0, l) {
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
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Es(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Es(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Qe.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
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
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[_s] = o, Ri(n, r, !1, !1), r.stateNode = n;
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
                d === "style" ? ot(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && la(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ua(n, T) : typeof T == "number" && ua(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Qe.hasOwnProperty(d) ? T != null && d === "onScroll" && qt("scroll", n) : T != null && lt(n, d, T, m));
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
          if (l = Cu(fo.current), Cu(gi.current), Mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = pa, n !== null)) switch (n.tag) {
              case 3:
                Es(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Es(o.nodeValue, l, (n.mode & 1) !== 0);
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
          } else ja !== null && (Ou(ja), ja = null), d = !0;
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
            if (m = ws(n), m !== null) {
              for (r.flags |= 128, xr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Mt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > Du && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = ws(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !ln) return Dt(r), null;
          } else 2 * Ft() - d.renderingStartTime > Du && l !== 1073741824 && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
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
  function vy(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return zn(r.type) && Yr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return po(), _e(Xe), _e(Yn), jc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
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
  function xu(n, r) {
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
    if (ad = du, n = Ev(), vs(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, W = 0, X = n, Y = null;
          t: for (; ; ) {
            for (var ce; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (ce = X.firstChild) !== null; )
              Y = X, X = ce;
            for (; ; ) {
              if (X === n) break t;
              if (Y === l && ++U === c && (E = m), Y === d && ++W === o && (T = m), (ce = X.nextSibling) !== null) break;
              X = Y, Y = X.parentNode;
            }
            X = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (id = { focusedElem: n, selectionRange: l }, du = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
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
              var Ee = ye.memoizedProps, kn = ye.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : Xr(r.type, Ee), kn);
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
  function Fs(n, r, l) {
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
  function Hs(n, r) {
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
    r !== null && (n.alternate = null, Fd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[_s], delete r[sd], delete r[ly], delete r[uy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Vs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Vs(n, r, l), n = n.sibling; n !== null; ) Vs(n, r, l), n = n.sibling;
  }
  var An = null, Wn = !1;
  function wr(n, r, l) {
    for (l = l.child; l !== null; ) el(n, r, l), l = l.sibling;
  }
  function el(n, r, l) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function") try {
      Pr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Qn || xu(l, r);
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
        if (!Qn && (xu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
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
            Fs(3, n, n.return), Hs(3, n);
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
          try {
            Fs(5, n, n.return);
          } catch (Ee) {
            Tn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        br(r, n), Ti(n), o & 512 && l !== null && xu(l, l.return);
        break;
      case 5:
        if (br(r, n), Ti(n), o & 512 && l !== null && xu(l, l.return), n.flags & 32) {
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
              var W = T[m], X = T[m + 1];
              W === "style" ? ot(c, X) : W === "dangerouslySetInnerHTML" ? la(c, X) : W === "children" ? ua(c, X) : lt(c, W, X, U);
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
            c[_s] = d;
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
          La(r.containerInfo);
        } catch (Ee) {
          Tn(n, n.return, Ee);
        }
        break;
      case 4:
        br(r, n), Ti(n);
        break;
      case 13:
        br(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Is = Ft())), o & 4 && bo(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (U = Qn) || W, br(r, n), Qn = U) : br(r, n), Ti(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (pe = n, W = n.child; W !== null; ) {
            for (X = pe = W; pe !== null; ) {
              switch (Y = pe, ce = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fs(4, Y, Y.return);
                  break;
                case 1:
                  xu(Y, Y.return);
                  var ye = Y.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      Tn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  xu(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Do(X);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Y, pe = ce) : Do(X);
            }
            W = W.sibling;
          }
          e: for (W = null, X = n; ; ) {
            if (X.tag === 5) {
              if (W === null) {
                W = X;
                try {
                  c = X.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Oe("display", m));
                } catch (Ee) {
                  Tn(n, n.return, Ee);
                }
              }
            } else if (X.tag === 6) {
              if (W === null) try {
                X.stateNode.nodeValue = U ? "" : X.memoizedProps;
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
            Vs(n, d, c);
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
  function hy(n, r, l) {
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
              Qn || Hs(5, r);
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
                    var X = W.dehydrated;
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
              Hs(4, r);
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
  var Jv = Math.ceil, ef = Ve.ReactCurrentDispatcher, ko = Ve.ReactCurrentOwner, Ea = Ve.ReactCurrentBatchConfig, kt = 0, Cn = null, dn = null, Rn = 0, Dr = 0, wu = Xt(0), Bn = 0, Ps = null, bu = 0, tf = 0, Bs = 0, $s = null, nr = null, Is = 0, Du = 1 / 0, nl = null, nf = !1, Bd = null, Pl = null, Bl = !1, _i = null, $l = 0, Ys = 0, $d = null, Qs = -1, Ws = 0;
  function Gn() {
    return kt & 6 ? Ft() : Qs !== -1 ? Qs : Qs = Ft();
  }
  function ui(n) {
    return n.mode & 1 ? kt & 2 && Rn !== 0 ? Rn & -Rn : oy.transition !== null ? (Ws === 0 && (Ws = uu()), Ws) : (n = yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function Va(n, r, l, o) {
    if (50 < Ys) throw Ys = 0, $d = null, Error(D(185));
    Cl(n, l, o), (!(kt & 2) || n !== Cn) && (n === Cn && (!(kt & 2) && (tf |= l), Bn === 4 && xi(n, Rn)), tn(n, o), l === 1 && kt === 0 && !(r.mode & 1) && (Du = Ft() + 500, Ol && yi()));
  }
  function tn(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = fi(n, n === Cn ? Rn : 0);
    if (o === 0) l !== null && Gt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Gt(l), r === 1) n.tag === 0 ? Mv(rf.bind(null, n)) : kc(rf.bind(null, n)), Nv(function() {
        !(kt & 6) && yi();
      }), l = null;
      else {
        switch (rs(o)) {
          case 1:
            l = Mn;
            break;
          case 4:
            l = Vr;
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
        l = uh(l, ku.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ku(n, r) {
    if (Qs = -1, Ws = 0, kt & 6) throw Error(D(327));
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
      (Cn !== n || Rn !== r) && (nl = null, Du = Ft() + 500, Il(n, r));
      do
        try {
          gy();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (!0);
      Fa(), ef.current = d, kt = c, dn !== null ? r = 0 : (Cn = null, Rn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = di(n), c !== 0 && (o = c, r = Gs(n, c))), r === 1) throw l = Ps, Il(n, 0), xi(n, o), tn(n, Ft()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !my(c) && (r = No(n, o), r === 2 && (d = di(n), d !== 0 && (o = d, r = Gs(n, d))), r === 1)) throw l = Ps, Il(n, 0), xi(n, o), tn(n, Ft()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            Mu(n, nr, nl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = Is + 500 - Ft(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cs(Mu.bind(null, n, nr, nl), r);
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
              n.timeoutHandle = Cs(Mu.bind(null, n, nr, nl), o);
              break;
            }
            Mu(n, nr, nl);
            break;
          case 5:
            Mu(n, nr, nl);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return tn(n, Ft()), n.callbackNode === l ? ku.bind(null, n) : null;
  }
  function Gs(n, r) {
    var l = $s;
    return n.current.memoizedState.isDehydrated && (Il(n, r).flags |= 256), n = No(n, r), n !== 2 && (r = nr, nr = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    nr === null ? nr = n : nr.push.apply(nr, n);
  }
  function my(n) {
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
    for (r &= ~Bs, r &= ~tf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
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
      o !== 0 && (r = o, l = Gs(n, o));
    }
    if (l === 1) throw l = Ps, Il(n, 0), xi(n, r), tn(n, Ft()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, nr, nl), tn(n, Ft()), null;
  }
  function Nu(n, r) {
    var l = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = l, kt === 0 && (Du = Ft() + 500, Ol && yi());
    }
  }
  function Lu(n) {
    _i !== null && _i.tag === 0 && !(kt & 6) && Lo();
    var r = kt;
    kt |= 1;
    var l = Ea.transition, o = yt;
    try {
      if (Ea.transition = null, yt = 1, n) return n();
    } finally {
      yt = o, Ea.transition = l, kt = r, !(kt & 6) && yi();
    }
  }
  function Oo() {
    Dr = wu.current, _e(wu);
  }
  function Il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Rs(l)), dn !== null) for (l = dn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Yr();
          break;
        case 3:
          po(), _e(Xe), _e(Yn), jc();
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
    if (Cn = n, dn = n = Yl(n.current, null), Rn = Dr = r, Bn = 0, Ps = null, Bs = tf = bu = 0, nr = $s = null, Eu !== null) {
      for (r = 0; r < Eu.length; r++) if (l = Eu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Eu = null;
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
        if (Ji = 0, qe = Le = re = null, qr = !1, vo = 0, ko.current = null, l === null || l.return === null) {
          Bn = 1, Ps = r, dn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Rn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, X = W.tag;
            if (!(W.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var Y = W.alternate;
              Y ? (W.updateQueue = Y.updateQueue, W.memoizedState = Y.memoizedState, W.lanes = Y.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var ce = Ms(m);
            if (ce !== null) {
              ce.flags &= -257, Yv(ce, m, E, d, r), ce.mode & 1 && Iv(d, U, r), r = ce, T = U;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
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
            var kn = Ms(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Yv(kn, m, E, d, r), Un(Ro(T, E));
              break e;
            }
          }
          d = T = Ro(T, E), Bn !== 4 && (Bn = 2), $s === null ? $s = [d] : $s.push(d), d = m;
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
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Pl === null || !Pl.has(L)))) {
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
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Cn === null || !(bu & 268435455) && !(tf & 268435455) || xi(Cn, Rn);
  }
  function No(n, r) {
    var l = kt;
    kt |= 2;
    var o = eh();
    (Cn !== n || Rn !== r) && (nl = null, Il(n, r));
    do
      try {
        yy();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (!0);
    if (Fa(), kt = l, ef.current = o, dn !== null) throw Error(D(261));
    return Cn = null, Rn = 0, Bn;
  }
  function yy() {
    for (; dn !== null; ) th(dn);
  }
  function gy() {
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
        if (l = vy(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, dn = null;
          return;
        }
      } else if (l = py(l, r, Dr), l !== null) {
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
    var o = yt, c = Ea.transition;
    try {
      Ea.transition = null, yt = 1, rh(n, r, l, o);
    } finally {
      Ea.transition = c, yt = o;
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
    if (ts(n, d), n === Cn && (dn = Cn = null, Rn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bl || (Bl = !0, uh(tt, function() {
      return Lo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ea.transition, Ea.transition = null;
      var m = yt;
      yt = 1;
      var E = kt;
      kt |= 4, ko.current = null, Ad(n, l), tl(l, n), pu(id), du = !!ad, id = ad = null, n.current = l, hy(l), hr(), kt = E, yt = m, Ea.transition = d;
    } else n.current = l;
    if (Bl && (Bl = !1, _i = n, $l = c), d = n.pendingLanes, d === 0 && (Pl = null), Ko(l.stateNode), tn(n, Ft()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (nf) throw nf = !1, n = Bd, Bd = null, n;
    return $l & 1 && n.tag !== 0 && Lo(), d = n.pendingLanes, d & 1 ? n === $d ? Ys++ : (Ys = 0, $d = n) : Ys = 0, yi(), null;
  }
  function Lo() {
    if (_i !== null) {
      var n = rs($l), r = Ea.transition, l = yt;
      try {
        if (Ea.transition = null, yt = 16 > n ? 16 : n, _i === null) var o = !1;
        else {
          if (n = _i, _i = null, $l = 0, kt & 6) throw Error(D(331));
          var c = kt;
          for (kt |= 4, pe = n.current; pe !== null; ) {
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
                        Fs(8, W, d);
                    }
                    var X = W.child;
                    if (X !== null) X.return = W, pe = X;
                    else for (; pe !== null; ) {
                      W = pe;
                      var Y = W.sibling, ce = W.return;
                      if (Fd(W), W === U) {
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
                  Fs(9, d, d.return);
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
                    Hs(9, E);
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
            Pr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        yt = l, Ea.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = Ro(l, r), r = kd(n, r, 1), n = ya(n, r, 1), r = Gn(), n !== null && (Cl(n, 1, r), tn(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = Ro(l, n), n = $v(r, n, 1), r = ya(r, n, 1), n = Gn(), r !== null && (Cl(r, 1, n), tn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Cn === n && (Rn & l) === l && (Bn === 4 || Bn === 3 && (Rn & 130023424) === Rn && 500 > Ft() - Is ? Il(n, 0) : Bs |= l), tn(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = Gu, Gu <<= 1, !(Gu & 130023424) && (Gu = 4194304)) : r = 1);
    var l = Gn();
    n = Ki(n, r), n !== null && (Cl(n, r, l), tn(n, l));
  }
  function Ey(n) {
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xe.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, Sa(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, ln && r.flags & 1048576 && Ll(r, gu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        As(n, r), n = r.pendingProps;
        var c = da(r, Yn.current);
        so(r, l), c = bs(null, r, o, n, c, l);
        var d = I();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, yu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, md(r), c.updater = jl, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = _o(null, r, o, !0, d, l)) : (r.tag = 0, ln && d && Oc(r), _r(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (As(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ry(o), n = Xr(o, n), c) {
            case 0:
              r = Vl(null, r, o, n, l);
              break e;
            case 1:
              r = nt(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Vl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), nt(n, r, o, c, l);
      case 3:
        e: {
          if (Od(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, yd(n, r), Ac(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ro(Error(D(423)), r), r = fy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Ro(Error(D(424)), r), r = fy(n, r, o, l, c);
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
        return Hv(r), n === null && Lc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, mu(o, c) ? m = null : d !== null && mu(o, d) && (r.flags |= 32), Kr(n, r), _r(n, r, m, l), r.child;
      case 6:
        return n === null && Lc(r), null;
      case 13:
        return xo(n, r, l);
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Mt(zc, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Xe.current) {
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
        return Hl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), As(n, r), r.tag = 1, zn(o) ? (n = !0, yu(r)) : n = !1, so(r, l), Pv(r, o, c), wd(r, o, c, l), _o(null, r, o, !0, n, l);
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
  function Cy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, l, o) {
    return new Cy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ry(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et) return 11;
      if (n === rt) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function af(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case dt:
        return zu(l.children, c, d, r);
      case We:
        m = 8, c |= 8;
        break;
      case xn:
        return n = Ca(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
      case nn:
        return n = Ca(13, l, r, c), n.elementType = nn, n.lanes = d, n;
      case Pe:
        return n = Ca(19, l, r, c), n.elementType = Pe, n.lanes = d, n;
      case at:
        return lf(l, c, d, r);
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
          case rt:
            m = 14;
            break e;
          case xt:
            m = 16, o = null;
            break e;
        }
        throw Error(D(130, n == null ? n : typeof n, ""));
    }
    return r = Ca(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function zu(n, r, l, o) {
    return n = Ca(7, n, o, r), n.lanes = l, n;
  }
  function lf(n, r, l, o) {
    return n = Ca(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
    return n = Ca(6, n, null, r), n.lanes = l, n;
  }
  function uf(n, r, l) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Uu(n, r, l, o, c, d, m, E, T) {
    return n = new Gd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, md(d), n;
  }
  function Ty(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return za;
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
      if (zn(l)) return kl(n, l, r);
    }
    return r;
  }
  function Xd(n, r, l, o, c, d, m, E, T) {
    return n = Uu(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = Gn(), c = ui(l), d = ma(o, c), d.callback = r ?? null, ya(l, d, c), n.current.lanes = c, Cl(n, c, o), tn(n, o), n;
  }
  function qs(n, r, l, o) {
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
  function _y() {
    return null;
  }
  var oh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sf(n) {
    this._internalRoot = n;
  }
  Xs.prototype.render = sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    qs(n, r, null, null);
  }, Xs.prototype.unmount = sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        qs(null, n, null, null);
      }), r[ti] = null;
    }
  };
  function Xs(n) {
    this._internalRoot = n;
  }
  Xs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
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
  function xy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = of(m);
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
        var U = of(T);
        E.call(U);
      };
    }
    var T = Uu(n, 0, !1, null, null, !1, !1, "", sh);
    return n._reactRootContainer = T, n[ti] = T.current, vi(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      qs(r, T, l, o);
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
      qs(r, m, n, c);
    } else m = xy(l, r, n, c, o);
    return of(m);
  }
  qu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ji(r.pendingLanes);
          l !== 0 && (ns(r, l | 1), tn(r, Ft()), !(kt & 6) && (Du = Ft() + 500, yi()));
        }
        break;
      case 13:
        Lu(function() {
          var o = Ki(n, 1);
          if (o !== null) {
            var c = Gn();
            Va(o, n, 1, c);
          }
        }), Jd(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Va(r, n, 134217728, l);
      }
      Jd(n, 134217728);
    }
  }, as = function(n) {
    if (n.tag === 13) {
      var r = ui(n), l = Ki(n, r);
      if (l !== null) {
        var o = Gn();
        Va(l, n, r, o);
      }
      Jd(n, r);
    }
  }, gt = function() {
    return yt;
  }, Xu = function(n, r) {
    var l = yt;
    try {
      return yt = n, r();
    } finally {
      yt = l;
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
  }, ml = Nu, au = Lu;
  var wy = { usingClientEntryPoint: !1, Events: [hi, lo, Dc, Ga, ba, Nu] }, Ks = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, by = { bundleType: Ks.bundleType, version: Ks.version, rendererPackageName: Ks.rendererPackageName, rendererConfig: Ks.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ae(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ks.findFiberByHostInstance || _y, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber) try {
      Sl = Js.inject(by), Pr = Js;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cf(r)) throw Error(D(200));
    return Ty(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!cf(n)) throw Error(D(299));
    var l = !1, o = "", c = oh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Uu(n, 1, !1, null, null, l, !1, o, c), n[ti] = r.current, vi(n.nodeType === 8 ? n.parentNode : n), new sf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = Ae(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Lu(n);
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
    return new Xs(r);
  }, Qa.render = function(n, r, l) {
    if (!rl(r)) throw Error(D(200));
    return ff(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rl(n)) throw Error(D(40));
    return n._reactRootContainer ? (Lu(function() {
      ff(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ti] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Nu, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rl(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return ff(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, fR;
function gD() {
  if (fR) return Wa;
  fR = 1;
  var $ = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var q = nv(), D = yR(), he = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = !1;
    function bt(e) {
      Qe = e;
    }
    function we(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Je("warn", e, a);
      }
    }
    function S(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Je("error", e, a);
      }
    }
    function Je(e, t, a) {
      {
        var i = he.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ce = 0, ue = 1, Ye = 2, ee = 3, je = 4, oe = 5, Re = 6, vt = 7, Fn = 8, sn = 9, lt = 10, Ve = 11, Nt = 12, Te = 13, dt = 14, We = 15, xn = 16, gn = 17, Jt = 18, Et = 19, nn = 21, Pe = 22, rt = 23, xt = 24, at = 25, P = !0, me = !1, ie = !1, b = !1, B = !1, Ne = !0, Be = !1, et = !0, ut = !0, mt = !0, ft = !0, Ct = /* @__PURE__ */ new Set(), Pt = {}, Xn = {};
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
    var ia = 0, Jn = 1, Sr = 2, cn = 3, la = 4, ua = 5, oa = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Oe = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ne + "][" + Oe + "]*$"), At = {}, Lt = {};
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
    var au = "xlinkHref";
    Zt[au] = new jt(
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
    var iu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function qa(e) {
      !yl && iu.test(e) && (yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
    var Er = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), zi = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), pt = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Ln = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), hr = Symbol.for("react.cache"), Ft = Symbol.for("react.tracing_marker"), ka = Symbol.iterator, Mn = "@@iterator";
    function Vr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ka && e[ka] || e[Mn];
      return typeof t == "function" ? t : null;
    }
    var tt = Object.assign, Ui = 0, Ai, Sl, Pr, Ko, Cr, Jo, Zo;
    function es() {
    }
    es.__reactDisabledLog = !0;
    function lu() {
      {
        if (Ui === 0) {
          Ai = console.log, Sl = console.info, Pr = console.warn, Ko = console.error, Cr = console.group, Jo = console.groupCollapsed, Zo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: es,
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
            log: tt({}, e, {
              value: Ai
            }),
            info: tt({}, e, {
              value: Sl
            }),
            warn: tt({}, e, {
              value: Pr
            }),
            error: tt({}, e, {
              value: Ko
            }),
            group: tt({}, e, {
              value: Cr
            }),
            groupCollapsed: tt({}, e, {
              value: Jo
            }),
            groupEnd: tt({}, e, {
              value: Zo
            })
          });
        }
        Ui < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var El = !1, di;
    {
      var uu = typeof WeakMap == "function" ? WeakMap : Map;
      di = new uu();
    }
    function ou(e, t) {
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
      s = ji.current, ji.current = null, lu();
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
        El = !1, ji.current = s, Gu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", z = _ ? Oa(_) : "";
      return typeof e == "function" && di.set(e, z), z;
    }
    function Cl(e, t, a) {
      return ou(e, !0);
    }
    function ts(e, t, a) {
      return ou(e, !1);
    }
    function ns(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ou(e, ns(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Me:
          return Oa("Suspense");
        case pt:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return ts(e.render);
          case Rt:
            return yt(e.type, t, a);
          case Ae: {
            var i = e, u = i._payload, s = i._init;
            try {
              return yt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function rs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return Oa(e.type);
        case xn:
          return Oa("Lazy");
        case Te:
          return Oa("Suspense");
        case Et:
          return Oa("SuspenseList");
        case Ce:
        case Ye:
        case We:
          return ts(e.type);
        case Ve:
          return ts(e.type.render);
        case ue:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function qu(e) {
      try {
        var t = "", a = e;
        do
          t += rs(a), a = a.return;
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
    function as(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
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
        case Me:
          return "Suspense";
        case pt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return as(t) + ".Consumer";
          case R:
            var a = e;
            return as(a._context) + ".Provider";
          case G:
            return Rl(e, e.render, "ForwardRef");
          case Rt:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case Ae: {
            var u = e, s = u._payload, f = u._init;
            try {
              return gt(f(s));
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
    function su(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case xt:
          return "Cache";
        case sn:
          var i = a;
          return su(i) + ".Consumer";
        case lt:
          var u = a;
          return su(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Ve:
          return Xu(a, a.render, "ForwardRef");
        case vt:
          return "Fragment";
        case oe:
          return a;
        case je:
          return "Portal";
        case ee:
          return "Root";
        case Re:
          return "Text";
        case xn:
          return gt(a);
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
        case Et:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ue:
        case Ce:
        case gn:
        case Ye:
        case dt:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ka = he.ReactDebugCurrentFrame, vn = null, Br = !1;
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
    function Tl() {
      return vn === null ? "" : qu(vn);
    }
    function rn() {
      Ka.getCurrentStack = null, vn = null, Br = !1;
    }
    function hn(e) {
      Ka.getCurrentStack = e === null ? null : Tl, vn = e, Br = !1;
    }
    function is() {
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
    function cu(e, t) {
      Ku[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function fu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function _l(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function Fi(e) {
      var t = "";
      return e && (fu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function du(e) {
      var t = fu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
      _l(e) || (e._valueTracker = du(e));
    }
    function Ju(e) {
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
    var Vi = !1, Zu = !1, ls = !1, Za = !1;
    function eo(e) {
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
      cu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Vi = !0);
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
        !a._wrapperState.controlled && i && !Za && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Za = !0), a._wrapperState.controlled && !i && !ls && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0);
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
      t.value == null && (typeof t.children == "object" && t.children !== null ? q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($t || ($t = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ct && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ct = !0);
    }
    function Yt(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var an = Array.isArray;
    function wt(e) {
      return an(e);
    }
    var xl;
    xl = !1;
    function to() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var us = ["value", "defaultValue"];
    function os(e) {
      {
        cu("select", e);
        for (var t = 0; t < us.length; t++) {
          var a = us[t];
          if (e[a] != null) {
            var i = wt(e[a]);
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
    function ss(e, t) {
      return tt({}, t, {
        value: void 0
      });
    }
    function cs(e, t) {
      var a = e;
      os(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xl = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Wm(e, t) {
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
      var i = tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function iv(e, t) {
      var a = e;
      cu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), av = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (wt(u)) {
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
    function Gm(e, t) {
      lv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Sc = "http://www.w3.org/2000/svg";
    function Yf(e) {
      switch (e) {
        case "svg":
          return Sc;
        case "math":
          return qm;
        default:
          return Bi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Bi ? Yf(t) : e === Sc && t === "foreignObject" ? Bi : e;
    }
    var Xm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ec, uv = Xm(function(e, t) {
      if (e.namespaceURI === Sc && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ir = 1, $i = 3, En = 8, ca = 9, Wf = 11, fs = function(e, t) {
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
    function wl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(no.hasOwnProperty(e) && no[e]) ? t + "px" : (ra(t, e), ("" + t).trim());
    }
    var Km = /([A-Z])/g, Jm = /^ms-/;
    function Zm(e) {
      return e.replace(Km, "-$1").toLowerCase().replace(Jm, "-ms-");
    }
    var Gf = function() {
    };
    {
      var fv = /^(?:webkit|moz|o)[A-Z]/, ds = /^-ms-/, ps = /-(.)/g, dv = /;\s*$/, Ii = {}, qf = {}, Xf = !1, Cc = !1, Kf = function(e) {
        return e.replace(ps, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kf(e.replace(ds, "ms-"))
        ));
      }, vv = function(e) {
        Ii.hasOwnProperty(e) && Ii[e] || (Ii[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        qf.hasOwnProperty(t) && qf[t] || (qf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(dv, "")));
      }, ey = function(e, t) {
        Xf || (Xf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ty = function(e, t) {
        Cc || (Cc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gf = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : fv.test(e) ? vv(e) : dv.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? ey(e, t) : isFinite(t) || ty(e, t));
      };
    }
    var ny = Gf;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Zm(i)) + ":", t += wl(i, u, s), a = ";";
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
          u || ny(i, t[i]);
          var s = wl(i, t[i], u);
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
    }, Sv = tt({
      menuitem: !0
    }, gv), Ev = "__html";
    function vs(e, t) {
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
    function pu(e, t) {
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
    }, vu = {
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
    }, bl = {}, hs = new RegExp("^(aria)-[" + Oe + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
    function Cv(e, t) {
      {
        if (Kn.call(bl, t) && bl[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), bl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), bl[t] = !0, !0;
        }
        if (hs.test(t)) {
          var u = t.toLowerCase(), s = vu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return bl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), bl[t] = !0, !0;
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
      pu(e, t) || Tc(e, t);
    }
    var _c = !1;
    function Rv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !_c && (_c = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ms = function() {
    };
    {
      var mr = {}, Zf = /^on./, Tv = /^on[^A-Z]/, _v = new RegExp("^(aria)-[" + Oe + "]*$"), xv = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
      ms = function(e, t, a, i) {
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
          var s = ms(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dl(e, t, a) {
      pu(e, t) || wv(e, t, a);
    }
    var xc = 1, ys = 2, gs = 4, ay = xc | ys | gs, Yi = null;
    function iy(e) {
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
    var Ss = null, Qi = null, vi = null;
    function ed(e) {
      var t = Uo(e);
      if (t) {
        if (typeof Ss != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = bh(a);
          Ss(t.stateNode, t.type, i);
        }
      }
    }
    function td(e) {
      Ss = e;
    }
    function io(e) {
      Qi ? vi ? vi.push(e) : vi = [e] : Qi = e;
    }
    function wc() {
      return Qi !== null || vi !== null;
    }
    function hu() {
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
      e && (kv(), hu());
    }
    function Es(e, t, a) {
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
    function mu(e, t) {
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
    var Cs = !1;
    if (Sn)
      try {
        var Rs = {};
        Object.defineProperty(Rs, "passive", {
          get: function() {
            Cs = !0;
          }
        }), window.addEventListener("test", Rs, Rs), window.removeEventListener("test", Rs, Rs);
      } catch {
        Cs = !1;
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
        function F() {
          ud.removeEventListener(H, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          w = !0, F(), a.apply(i, le), _ = !1;
        }
        var ke, _t = !1, ht = !1;
        function O(N) {
          if (ke = N.error, _t = !0, ke === null && N.colno === 0 && N.lineno === 0 && (ht = !0), N.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ud.addEventListener(H, Ue, !1), g.initEvent(H, !1, !1), ud.dispatchEvent(g), A && Object.defineProperty(window, "event", A), w && _ && (_t ? ht && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", O), !w)
          return F(), ld.apply(this, arguments);
      };
    }
    var od = Nv, fa = !1, Ts = null, Wi = !1, Ma = null, _s = {
      onError: function(e) {
        fa = !0, Ts = e;
      }
    };
    function ti(e, t, a, i, u, s, f, p, v) {
      fa = !1, Ts = null, od.apply(_s, arguments);
    }
    function sd(e, t, a, i, u, s, f, p, v) {
      if (ti.apply(this, arguments), fa) {
        var y = Gi();
        Wi || (Wi = !0, Ma = y);
      }
    }
    function ly() {
      if (Wi) {
        var e = Ma;
        throw Wi = !1, Ma = null, e;
      }
    }
    function uy() {
      return fa;
    }
    function Gi() {
      if (fa) {
        var e = Ts;
        return fa = !1, Ts = null, e;
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
    var ze = (
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
    ), Xe = (
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
    ), kl = (
      /*                   */
      8192
    ), yu = (
      /*             */
      16384
    ), Lv = Yr | _e | Yn | da | zn | yu, qi = (
      /*               */
      32767
    ), Ol = (
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
    ), Nl = (
      /*                */
      8388608
    ), Aa = (
      /*               */
      16777216
    ), gu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      _e | zn | 0
    ), Wr = Xt | _e | Mt | za | da | mi | kl, ri = _e | Yn | da | kl, Gr = Yr | Mt, tr = Ua | Nl | yi, Su = he.ReactCurrentOwner;
    function Ll(e) {
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
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Ll(e) === e;
    }
    function va(e) {
      {
        var t = Su.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== ee)
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
    var pd = D.unstable_scheduleCallback, Mc = D.unstable_cancelCallback, zv = D.unstable_shouldYield, uo = D.unstable_requestPaint, Un = D.unstable_now, oy = D.unstable_getCurrentPriorityLevel, Ml = D.unstable_ImmediatePriority, oo = D.unstable_UserBlockingPriority, zl = D.unstable_NormalPriority, Uv = D.unstable_LowPriority, Ul = D.unstable_IdlePriority, Av = D.unstable_yieldValue, zc = D.unstable_setDisableYieldValue, Xi = null, Dn = null, ae = null, Fa = !1, ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function vd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ut && (e = tt({}, e, {
          getLaneLabelMap: Al,
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
          var a = (e.current.flags & Xe) === Xe;
          if (mt) {
            var i;
            switch (t) {
              case Sa:
                i = Ml;
                break;
              case Ri:
                i = oo;
                break;
              case li:
                i = zl;
                break;
              case js:
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
    function Eu(e) {
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
      if (typeof Av == "function" && (zc(e), bt(e)), Dn && typeof Dn.setStrictMode == "function")
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
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bs; a++) {
          var i = cy(t);
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
    function xs(e) {
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
    function Cu(e, t, a) {
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
    function ws(e) {
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
    ), Le = (
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
    ), vo = Math.clz32 ? Math.clz32 : Rd, sy = Math.log, yr = Math.LN2;
    function Rd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (sy(t) / yr | 0) | 0;
    }
    var bs = 31, I = (
      /*                        */
      0
    ), Kt = (
      /*                          */
      0
    ), be = (
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
    ), Ru = (
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
    ), Tu = (
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
    ), Ds = (
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
    ), ks = (
      /*                       */
      2097152
    ), Os = (
      /*                            */
      130023424
    ), _u = (
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
    ), Vv = _u, So = (
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
    function cy(e) {
      {
        if (e & be)
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
        if (e & Ru)
          return "Transition";
        if (e & Os)
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
    var en = -1, Xr = mo, Co = _u;
    function jl(e) {
      switch (Fl(e)) {
        case be:
          return be;
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
        case Tu:
        case $c:
        case yo:
        case go:
        case Ic:
        case Ds:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case ks:
          return e & Ru;
        case _u:
        case qc:
        case Td:
        case Xc:
        case _d:
          return e & Os;
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
    function Ns(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & xd;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = jl(p);
        else {
          var v = f & s;
          v !== I && (i = jl(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = jl(y) : s !== I && (i = jl(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = Fl(i), w = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ii && (w & Ru) !== I
        )
          return t;
      }
      (i & ai) !== I && (i |= a & ii);
      var _ = e.entangledLanes;
      if (_ !== I)
        for (var z = e.entanglements, A = i & _; A > 0; ) {
          var F = Hl(A), le = 1 << F;
          i |= z[F], A &= ~le;
        }
      return i;
    }
    function Pv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Hl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Bv(e, t) {
      switch (e) {
        case be:
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
        case Tu:
        case $c:
        case yo:
        case go:
        case Ic:
        case Ds:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case ks:
          return t + 5e3;
        case _u:
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
        var p = Hl(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === I || (v & u) !== I) && (s[p] = Bv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Ro(e) {
      return jl(e.pendingLanes);
    }
    function Ls(e) {
      var t = e.pendingLanes & ~ga;
      return t !== I ? t : t & ga ? ga : I;
    }
    function bd(e) {
      return (e & be) !== I;
    }
    function Dd(e) {
      return (e & xd) !== I;
    }
    function kd(e) {
      return (e & Os) === e;
    }
    function $v(e) {
      var t = be | ai | ii;
      return (e & t) === I;
    }
    function Iv(e) {
      return (e & Ru) === e;
    }
    function Ms(e, t) {
      var a = Si | ai | Zi | ii;
      return (t & a) !== I;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Qv(e) {
      return (e & Ru) !== I;
    }
    function Tr() {
      var e = Xr;
      return Xr <<= 1, (Xr & Ru) === I && (Xr = mo), e;
    }
    function _r() {
      var e = Co;
      return Co <<= 1, (Co & Os) === I && (Co = _u), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function To(e) {
      return Fl(e);
    }
    function Hl(e) {
      return 31 - vo(e);
    }
    function Kc(e) {
      return Hl(e);
    }
    function Kr(e, t) {
      return (e & t) !== I;
    }
    function Vl(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function _o(e, t) {
      return e & ~t;
    }
    function Od(e, t) {
      return e & t;
    }
    function fy(e) {
      return e;
    }
    function Nd(e, t) {
      return e !== Kt && e < t ? e : t;
    }
    function zs(e) {
      for (var t = [], a = 0; a < bs; a++)
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
        var u = Hl(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function Us(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function dy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p;
        i[p] = I, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Hl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Md(e, t) {
      var a = Fl(t), i;
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
        case Tu:
        case $c:
        case yo:
        case go:
        case Ic:
        case Ds:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case ks:
        case _u:
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
    function As(e, t) {
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
    var Sa = be, Ri = ai, li = ii, js = Ei, wo = Kt;
    function xr() {
      return wo;
    }
    function Dt(e) {
      wo = e;
    }
    function py(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function vy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Zc(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = Fl(e);
      return Qn(Sa, t) ? Qn(Ri, t) ? Dd(t) ? li : js : Ri : Sa;
    }
    function pe(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var xu;
    function Ud(e) {
      xu = e;
    }
    function Gv(e) {
      xu(e);
    }
    var Ad;
    function Fs(e) {
      Ad = e;
    }
    var Hs;
    function jd(e) {
      Hs = e;
    }
    var Fd;
    function qv(e) {
      Fd = e;
    }
    var Hd;
    function Vd(e) {
      Hd = e;
    }
    var Vs = !1, An = [], Wn = null, wr = null, el = null, bo = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), tl = [], Ti = [
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
    function hy(e) {
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
      var t = tc(e.target);
      if (t !== null) {
        var a = Ll(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Oc(a);
            if (u !== null) {
              e.blockedOn = u, Hd(e.priority, function() {
                Hs(a);
              });
              return;
            }
          } else if (i === ee) {
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
        var a = t[0], i = Is(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), bv();
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
      Vs = !1, Wn !== null && ko(Wn) && (Wn = null), wr !== null && ko(wr) && (wr = null), el !== null && ko(el) && (el = null), bo.forEach(Ea), br.forEach(Ea);
    }
    function Cn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, kt)));
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
    var Rn = he.ReactCurrentBatchConfig, Dr = !0;
    function wu(e) {
      Dr = !!e;
    }
    function Bn() {
      return Dr;
    }
    function Ps(e, t, a) {
      var i = Du(t), u;
      switch (i) {
        case Sa:
          u = bu;
          break;
        case Ri:
          u = tf;
          break;
        case li:
        default:
          u = Bs;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function bu(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        Dt(Sa), Bs(e, t, a, i);
      } finally {
        Dt(u), Rn.transition = s;
      }
    }
    function tf(e, t, a, i) {
      var u = xr(), s = Rn.transition;
      Rn.transition = null;
      try {
        Dt(Ri), Bs(e, t, a, i);
      } finally {
        Dt(u), Rn.transition = s;
      }
    }
    function Bs(e, t, a, i) {
      Dr && $s(e, t, a, i);
    }
    function $s(e, t, a, i) {
      var u = Is(e, t, a, i);
      if (u === null) {
        zy(e, t, i, nr, a), Pd(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pd(e, i), t & gs && hy(e)) {
        for (; u !== null; ) {
          var s = Uo(u);
          s !== null && Gv(s);
          var f = Is(e, t, a, i);
          if (f === null && zy(e, t, i, nr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      zy(e, t, i, null, a);
    }
    var nr = null;
    function Is(e, t, a, i) {
      nr = null;
      var u = qt(i), s = tc(u);
      if (s !== null) {
        var f = Ll(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = Oc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (pe(y))
              return Nc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return nr = s, null;
    }
    function Du(e) {
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
          var t = oy();
          switch (t) {
            case Ml:
              return Sa;
            case oo:
              return Ri;
            case zl:
            case Uv:
              return li;
            case Ul:
              return js;
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
    function Pl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bl = null, _i = null, $l = null;
    function Ys(e) {
      return Bl = e, _i = Ws(), !0;
    }
    function $d() {
      Bl = null, _i = null, $l = null;
    }
    function Qs() {
      if ($l)
        return $l;
      var e, t = _i, a = t.length, i, u = Ws(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $l = u.slice(e, p), $l;
    }
    function Ws() {
      return "value" in Bl ? Bl.value : Bl.textContent;
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
    var ku = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Gs = tn(ku), Ou = tt({}, ku, {
      view: 0,
      detail: 0
    }), my = tn(Ou), xi, rf, Nu;
    function Lu(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (xi = e.screenX - Nu.screenX, rf = e.screenY - Nu.screenY) : (xi = 0, rf = 0), Nu = e);
    }
    var Oo = tt({}, Ou, {
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
        return "movementX" in e ? e.movementX : (Lu(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rf;
      }
    }), Il = tn(Oo), Zv = tt({}, Oo, {
      dataTransfer: 0
    }), eh = tn(Zv), Id = tt({}, Ou, {
      relatedTarget: 0
    }), No = tn(Id), yy = tt({}, ku, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gy = tn(yy), th = tt({}, ku, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), nh = tn(th), Mu = tt({}, ku, {
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
    function Sy(e) {
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
    function Ey(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return Ey;
    }
    var lh = tt({}, Ou, {
      key: Sy,
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
    }), uh = tn(lh), Cy = tt({}, Oo, {
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
    }), Ca = tn(Cy), Qd = tt({}, Ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), Ry = tn(Qd), Yl = tt({}, ku, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), af = tn(Yl), zu = tt({}, Oo, {
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
    }), lf = tn(zu), Wd = [9, 13, 27, 32], uf = 229, Gd = Sn && "CompositionEvent" in window, Uu = null;
    Sn && "documentMode" in document && (Uu = document.documentMode);
    var Ty = Sn && "TextEvent" in window && !Uu, qd = Sn && (!Gd || Uu && Uu > 8 && Uu <= 11), Xd = 32, qs = String.fromCharCode(Xd);
    function of() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Kd = !1;
    function Jd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function _y(e) {
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
    function Xs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function cf(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function sh(e, t, a, i, u) {
      var s, f;
      if (Gd ? s = _y(t) : rl ? sf(t, i) && (s = "onCompositionEnd") : oh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      qd && !cf(i) && (!rl && s === "onCompositionStart" ? rl = Ys(u) : s === "onCompositionEnd" && rl && (f = Qs()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function xy(e, t) {
      switch (e) {
        case "compositionend":
          return Xs(t);
        case "keypress":
          var a = t.which;
          return a !== Xd ? null : (Kd = !0, qs);
        case "textInput":
          var i = t.data;
          return i === qs && Kd ? null : i;
        default:
          return null;
      }
    }
    function ff(e, t) {
      if (rl) {
        if (e === "compositionend" || !Gd && sf(e, t)) {
          var a = Qs();
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
    function wy(e, t, a, i, u) {
      var s;
      if (Ty ? s = xy(t, i) : s = ff(t, i), !s)
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
    function Ks(e, t, a, i, u, s, f) {
      sh(e, t, a, i, u), wy(e, t, a, i, u);
    }
    var by = {
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
    function Js(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!by[e.type] : t === "textarea";
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
        var s = new Gs("onChange", "change", null, a, i);
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
      l(t, c, e, qt(e)), Es(E, t);
    }
    function E(e) {
      L0(e, 0);
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
    var W = !1;
    Sn && (W = n("input") && (!document.documentMode || document.documentMode > 9));
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
      if (d(p) ? v = U : Js(p) ? W ? v = x : (v = Ee, y = ye) : kn(p) && (v = k), v) {
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
        if (y && (tc(y) || dp(y)))
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
          if (_ = a, z = A ? tc(A) : null, z !== null) {
            var F = Ll(z);
            (z !== F || z.tag !== oe && z.tag !== Re) && (z = null);
          }
        } else
          _ = null, z = a;
        if (_ !== z) {
          var le = Il, Ue = "onMouseLeave", ke = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = Ca, Ue = "onPointerLeave", ke = "onPointerEnter", _t = "pointer");
          var ht = _ == null ? g : yf(_), O = z == null ? g : yf(z), H = new le(Ue, _t + "leave", _, i, u);
          H.target = ht, H.relatedTarget = O;
          var N = null, K = tc(u);
          if (K === a) {
            var ve = new le(ke, _t + "enter", z, i, u);
            ve.target = O, ve.relatedTarget = ht, N = ve;
          }
          BR(e, H, N, _, z);
        }
      }
    }
    function He(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : He;
    function _n(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Kn.call(t, s) || !De(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ot(e) {
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
      for (var a = Ot(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ot(Ql(a));
      }
    }
    function CR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return RR(e, u, s, f, p);
    }
    function RR(e, t, a, i, u) {
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
    function TR(e, t) {
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
    function _R(e) {
      return e && e.ownerDocument && C0(e.ownerDocument.documentElement, e);
    }
    function xR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function R0() {
      for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
        if (xR(t))
          e = t.contentWindow;
        else
          return t;
        t = pi(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function wR() {
      var e = R0();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? DR(e) : null
      };
    }
    function bR(e) {
      var t = R0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && _R(a)) {
        i !== null && Dy(a) && kR(a, i);
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
    function DR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = CR(e), t || {
        start: 0,
        end: 0
      };
    }
    function kR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : TR(e, t);
    }
    var OR = Sn && "documentMode" in document && document.documentMode <= 11;
    function NR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var df = null, ky = null, Zd = null, Oy = !1;
    function LR(e) {
      if ("selectionStart" in e && Dy(e))
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
    function MR(e) {
      return e.window === e ? e.document : e.nodeType === ca ? e : e.ownerDocument;
    }
    function T0(e, t, a) {
      var i = MR(a);
      if (!(Oy || df == null || df !== pi(i))) {
        var u = LR(df);
        if (!Zd || !_n(Zd, u)) {
          Zd = u;
          var s = vh(ky, "onSelect");
          if (s.length > 0) {
            var f = new Gs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = df;
          }
        }
      }
    }
    function zR(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Js(p) || p.contentEditable === "true") && (df = p, ky = a, Zd = null);
          break;
        case "focusout":
          df = null, ky = null, Zd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Oy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oy = !1, T0(e, i, u);
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
          if (OR)
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
    var pf = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Ny = {}, _0 = {};
    Sn && (_0 = document.createElement("div").style, "AnimationEvent" in window || (delete pf.animationend.animation, delete pf.animationiteration.animation, delete pf.animationstart.animation), "TransitionEvent" in window || delete pf.transitionend.transition);
    function dh(e) {
      if (Ny[e])
        return Ny[e];
      if (!pf[e])
        return e;
      var t = pf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _0)
          return Ny[e] = t[a];
      return e;
    }
    var x0 = dh("animationend"), w0 = dh("animationiteration"), b0 = dh("animationstart"), D0 = dh("transitionend"), k0 = /* @__PURE__ */ new Map(), O0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mo(e, t) {
      k0.set(e, t), Fr(t, [e]);
    }
    function UR() {
      for (var e = 0; e < O0.length; e++) {
        var t = O0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mo(a, "on" + i);
      }
      Mo(x0, "onAnimationEnd"), Mo(w0, "onAnimationIteration"), Mo(b0, "onAnimationStart"), Mo("dblclick", "onDoubleClick"), Mo("focusin", "onFocus"), Mo("focusout", "onBlur"), Mo(D0, "onTransitionEnd");
    }
    function AR(e, t, a, i, u, s, f) {
      var p = k0.get(t);
      if (p !== void 0) {
        var v = Gs, y = t;
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
            v = Il;
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
            v = Ry;
            break;
          case x0:
          case w0:
          case b0:
            v = gy;
            break;
          case D0:
            v = af;
            break;
          case "scroll":
            v = my;
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
        var g = (s & gs) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = VR(a, p, i.type, g, w);
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
    UR(), xe(), r(), NR(), of();
    function jR(e, t, a, i, u, s, f) {
      AR(e, t, a, i, u, s);
      var p = (s & ay) === 0;
      p && (Fe(e, t, a, i, u), Z(e, t, a, i, u), zR(e, t, a, i, u), Ks(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ly = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function N0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, sd(i, t, void 0, e), e.currentTarget = null;
    }
    function FR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          N0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, _ = g.currentTarget, z = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          N0(e, z, _), i = w;
        }
    }
    function L0(e, t) {
      for (var a = (t & gs) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        FR(s, f, a);
      }
      ly();
    }
    function HR(e, t, a, i, u) {
      var s = qt(a), f = [];
      jR(f, e, i, a, s, t), L0(f, t);
    }
    function yn(e, t) {
      Ly.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = h_(t), u = $R(e);
      i.has(u) || (M0(t, e, ys, a), i.add(u));
    }
    function My(e, t, a) {
      Ly.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gs), M0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[ph]) {
        e[ph] = !0, Ct.forEach(function(a) {
          a !== "selectionchange" && (Ly.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === ca ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, My("selectionchange", !1, t)));
      }
    }
    function M0(e, t, a, i, u) {
      var s = Ps(e, t, a), f = void 0;
      Cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : nf(e, t, s) : f !== void 0 ? Pl(e, t, s, f) : nl(e, t, s);
    }
    function z0(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function zy(e, t, a, i, u) {
      var s = i;
      if (!(t & xc) && !(t & ys)) {
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
                var z = tc(y);
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
      Es(function() {
        return HR(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function VR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var w = y, _ = w.stateNode, z = w.tag;
        if (z === oe && _ !== null && (g = _, p !== null)) {
          var A = mu(y, p);
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
          var v = f, y = mu(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = mu(u, t);
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
    function PR(e, t) {
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
    function U0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, w = v.tag;
        if (y !== null && y === i)
          break;
        if (w === oe && g !== null) {
          var _ = g;
          if (u) {
            var z = mu(p, s);
            z != null && f.unshift(np(p, z, _));
          } else if (!u) {
            var A = mu(p, s);
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
    function BR(e, t, a, i, u) {
      var s = i && u ? PR(i, u) : null;
      i !== null && U0(e, t, i, s, !1), u !== null && a !== null && U0(e, a, u, s, !0);
    }
    function $R(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, rp = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", zo = "suppressHydrationWarning", A0 = "autoFocus", Zs = "children", ec = "style", mh = "__html", Uy, yh, ap, j0, gh, F0, H0;
    Uy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      ao(e, t), Rv(e, t), Dl(e, t, {
        registrationNameDependencies: Pt,
        possibleRegistrationNames: Xn
      });
    }, F0 = Sn && !document.documentMode, ap = function(e, t, a) {
      if (!Pa) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, j0 = function(e) {
      if (!Pa) {
        Pa = !0;
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
    var IR = /\r\n?/g, YR = /\u0000|\uFFFD/g;
    function Sh(e) {
      aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(IR, `
`).replace(YR, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && P))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function V0(e) {
      return e.nodeType === ca ? e : e.ownerDocument;
    }
    function QR() {
    }
    function Ch(e) {
      e.onclick = QR;
    }
    function WR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ec)
            f && Object.freeze(f), mv(t, f);
          else if (s === rp) {
            var p = f ? f[mh] : void 0;
            p != null && uv(t, p);
          } else if (s === Zs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && fs(t, f);
            } else typeof f == "number" && fs(t, "" + f);
          else s === hh || s === zo || s === A0 || (Pt.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Mi(t, s, f, u));
        }
    }
    function GR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ec ? mv(e, f) : s === rp ? uv(e, f) : s === Zs ? fs(e, f) : Mi(e, s, f, i);
      }
    }
    function qR(e, t, a, i) {
      var u, s = V0(a), f, p = i;
      if (p === Bi && (p = Yf(e)), p === Bi) {
        if (u = pu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(Uy, e) && (Uy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function XR(e, t) {
      return V0(t).createTextNode(e);
    }
    function KR(e, t, a, i) {
      var u = pu(t, a);
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
          cs(e, a), s = ss(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), s = If(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vs(t, s), WR(t, e, i, s, u), t) {
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
    function JR(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = ss(e, a), p = ss(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      vs(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === ec) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Zs || v === hh || v === zo || v === A0 || (Pt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === z || _ == null && z == null))
          if (v === ec)
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
          } else v === Zs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === hh || v === zo || (Pt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && gh(v, _), v === "onScroll" && yn("scroll", e)), !s && z !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (yv(g, p[ec]), (s = s || []).push(ec, g)), s;
    }
    function ZR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = pu(a, i), f = pu(a, u);
      switch (GR(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          Wm(e, u);
          break;
      }
    }
    function eT(e) {
      {
        var t = e.toLowerCase();
        return Rc.hasOwnProperty(t) && Rc[t] || null;
      }
    }
    function tT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pu(t, a), yh(t, a), t) {
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
          cs(e, a), yn("invalid", e);
          break;
        case "textarea":
          iv(e, a), yn("invalid", e);
          break;
      }
      vs(t, a);
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
          if (A === Zs)
            typeof F == "string" ? e.textContent !== F && (a[zo] !== !0 && Eh(e.textContent, F, s, f), z = [Zs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[zo] !== !0 && Eh(e.textContent, F, s, f), z = [Zs, "" + F]);
          else if (Pt.hasOwnProperty(A))
            F != null && (typeof F != "function" && gh(A, F), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Ue = p && Be ? null : In(A);
            if (a[zo] !== !0) {
              if (!(A === hh || A === zo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var ke = e.innerHTML, _t = F ? F[mh] : void 0;
                  if (_t != null) {
                    var ht = H0(e, _t);
                    ht !== ke && ap(A, ke, ht);
                  }
                } else if (A === ec) {
                  if (v.delete(A), F0) {
                    var O = ry(F);
                    le = e.getAttribute("style"), O !== le && ap(A, le, O);
                  }
                } else if (p && !Be)
                  v.delete(A.toLowerCase()), le = Da(e, A, F), F !== le && ap(A, le, F);
                else if (!pn(A, Ue, p) && !Bt(A, F, Ue, p)) {
                  var H = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), le = Xa(e, A, F, Ue);
                  else {
                    var N = i;
                    if (N === Bi && (N = Yf(t)), N === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var K = eT(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    le = Da(e, A, F);
                  }
                  var ve = Be;
                  !ve && F !== le && !H && ap(A, le, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[zo] !== !0 && j0(v), t) {
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
    function nT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rT(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Gm(e, a);
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
      var aT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
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
      ], iT = P0.concat(["button"]), lT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], B0 = {
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
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), iT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), aT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var uT = function(e, t) {
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
            return lT.indexOf(t) === -1;
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
      }, oT = function(e, t) {
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
        var s = uT(e, u) ? null : i, f = s ? null : oT(e, a), p = s || f;
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
    var Rh = "suppressHydrationWarning", Th = "$", _h = "/$", up = "$?", op = "$!", sT = "style", Vy = null, Py = null;
    function cT(e) {
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
    function fT(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function lk(e) {
      return e;
    }
    function dT(e) {
      Vy = Bn(), Py = wR();
      var t = null;
      return wu(!1), t;
    }
    function pT(e) {
      bR(Py), wu(Vy), Vy = null, Py = null;
    }
    function vT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = qR(e, t, a, s);
      return fp(u, y), qy(y, t), y;
    }
    function hT(e, t) {
      e.appendChild(t);
    }
    function mT(e, t, a, i, u) {
      switch (KR(e, t, a, i), t) {
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
    function yT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return JR(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function gT(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = XR(e, t);
      return fp(i, s), s;
    }
    function ST() {
      var e = window.event;
      return e === void 0 ? li : Du(e.type);
    }
    var $y = typeof setTimeout == "function" ? setTimeout : void 0, ET = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, I0 = typeof Promise == "function" ? Promise : void 0, CT = typeof queueMicrotask == "function" ? queueMicrotask : typeof I0 < "u" ? function(e) {
      return I0.resolve(null).then(e).catch(RT);
    } : $y;
    function RT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function TT(e, t, a, i) {
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
    function _T(e, t, a, i, u, s) {
      ZR(e, t, a, i, u), qy(e, u);
    }
    function Y0(e) {
      fs(e, "");
    }
    function xT(e, t, a) {
      e.nodeValue = a;
    }
    function wT(e, t) {
      e.appendChild(t);
    }
    function bT(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function DT(e, t, a) {
      e.insertBefore(t, a);
    }
    function kT(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function OT(e, t) {
      e.removeChild(t);
    }
    function NT(e, t) {
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
    function LT(e, t) {
      e.nodeType === En ? Yy(e.parentNode, t) : e.nodeType === Ir && Yy(e, t), dn(e);
    }
    function MT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function zT(e) {
      e.nodeValue = "";
    }
    function UT(e, t) {
      e = e;
      var a = t[sT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wl("display", i);
    }
    function AT(e, t) {
      e.nodeValue = t;
    }
    function jT(e) {
      e.nodeType === Ir ? e.textContent = "" : e.nodeType === ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function FT(e, t, a) {
      return e.nodeType !== Ir || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function HT(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function VT(e) {
      return e.nodeType !== En ? null : e;
    }
    function Q0(e) {
      return e.data === up;
    }
    function Qy(e) {
      return e.data === op;
    }
    function PT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function BT(e, t) {
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
    function $T(e) {
      return xh(e.firstChild);
    }
    function IT(e) {
      return xh(e.firstChild);
    }
    function YT(e) {
      return xh(e.nextSibling);
    }
    function QT(e, t, a, i, u, s, f) {
      fp(s, e), qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Le) !== re;
      return tT(e, t, a, p, i, y, f);
    }
    function WT(e, t, a, i) {
      return fp(a, e), a.mode & Le, nT(e, t);
    }
    function GT(e, t) {
      fp(t, e);
    }
    function qT(e) {
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
    function XT(e) {
      dn(e);
    }
    function KT(e) {
      dn(e);
    }
    function JT(e) {
      return e !== "head" && e !== "body";
    }
    function ZT(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function e_(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function t_(e, t) {
      t.nodeType === Ir ? Ay(e, t) : t.nodeType === En || jy(e, t);
    }
    function n_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ir ? Ay(a, t) : t.nodeType === En || jy(a, t));
      }
    }
    function r_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === Ir ? Ay(a, i) : i.nodeType === En || jy(a, i));
    }
    function a_(e, t, a) {
      Fy(e, t);
    }
    function i_(e, t) {
      Hy(e, t);
    }
    function l_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Fy(i, t);
      }
    }
    function u_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Hy(a, t);
      }
    }
    function o_(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && Fy(a, i);
    }
    function s_(e, t, a, i, u) {
      (u || t[Rh] !== !0) && Hy(a, i);
    }
    function c_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function f_(e) {
      tp(e);
    }
    var hf = Math.random().toString(36).slice(2), mf = "__reactFiber$" + hf, Wy = "__reactProps$" + hf, cp = "__reactContainer$" + hf, Gy = "__reactEvents$" + hf, d_ = "__reactListeners$" + hf, p_ = "__reactHandles$" + hf;
    function v_(e) {
      delete e[mf], delete e[Wy], delete e[Gy], delete e[d_], delete e[p_];
    }
    function fp(e, t) {
      t[mf] = e;
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
    function tc(e) {
      var t = e[mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[mf];
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
    function Uo(e) {
      var t = e[mf] || e[cp];
      return t && (t.tag === oe || t.tag === Re || t.tag === Te || t.tag === ee) ? t : null;
    }
    function yf(e) {
      if (e.tag === oe || e.tag === Re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function bh(e) {
      return e[Wy] || null;
    }
    function qy(e, t) {
      e[Wy] = t;
    }
    function h_(e) {
      var t = e[Gy];
      return t === void 0 && (t = e[Gy] = /* @__PURE__ */ new Set()), t;
    }
    var q0 = {}, X0 = he.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
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
    var Xy = [], kh;
    kh = [];
    var Au = -1;
    function Ao(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Au < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[Au] && S("Unexpected Fiber popped."), e.current = Xy[Au], Xy[Au] = null, kh[Au] = null, Au--;
    }
    function Zr(e, t, a) {
      Au++, Xy[Au] = e.current, kh[Au] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var oi = {};
    Object.freeze(oi);
    var ju = Ao(oi), Wl = Ao(!1), Jy = oi;
    function gf(e, t, a) {
      return a && Gl(t) ? Jy : ju.current;
    }
    function K0(e, t, a) {
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
    function Nh(e) {
      Jr(Wl, e), Jr(ju, e);
    }
    function Zy(e) {
      Jr(Wl, e), Jr(ju, e);
    }
    function J0(e, t, a) {
      {
        if (ju.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Zr(ju, t, e), Zr(Wl, a, e);
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Ky[s] || (Ky[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
        return tt({}, a, f);
      }
    }
    function Lh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Jy = ju.current, Zr(ju, a, e), Zr(Wl, Wl.current, e), !0;
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Z0(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Wl, e), Jr(ju, e), Zr(ju, u, e), Zr(Wl, a, e);
        } else
          Jr(Wl, e), Zr(Wl, a, e);
      }
    }
    function m_(e) {
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
    var jo = 0, Mh = 1, Fu = null, eg = !1, tg = !1;
    function tE(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function y_(e) {
      eg = !0, tE(e);
    }
    function nE() {
      eg && Fo();
    }
    function Fo() {
      if (!tg && Fu !== null) {
        tg = !0;
        var e = 0, t = xr();
        try {
          var a = !0, i = Fu;
          for (Dt(Sa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, eg = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), pd(Ml, Fo), s;
        } finally {
          Dt(t), tg = !1;
        }
      }
      return null;
    }
    var Ef = [], Cf = 0, zh = null, Uh = 0, wi = [], bi = 0, nc = null, Hu = 1, Vu = "";
    function g_(e) {
      return ac(), (e.flags & Mv) !== ze;
    }
    function S_(e) {
      return ac(), Uh;
    }
    function E_() {
      var e = Vu, t = Hu, a = t & ~C_(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), Ef[Cf++] = Uh, Ef[Cf++] = zh, zh = e, Uh = t;
    }
    function rE(e, t, a) {
      ac(), wi[bi++] = Hu, wi[bi++] = Vu, wi[bi++] = nc, nc = e;
      var i = Hu, u = Vu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), _ = f >> y, z = s - y, A = Ah(t) + z, F = p << z, le = F | _, Ue = w + u;
        Hu = 1 << A | le, Vu = Ue;
      } else {
        var ke = p << s, _t = ke | f, ht = u;
        Hu = 1 << v | _t, Vu = ht;
      }
    }
    function ng(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rc(e, a), rE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - vo(e);
    }
    function C_(e) {
      return 1 << Ah(e) - 1;
    }
    function rg(e) {
      for (; e === zh; )
        zh = Ef[--Cf], Ef[Cf] = null, Uh = Ef[--Cf], Ef[Cf] = null;
      for (; e === nc; )
        nc = wi[--bi], wi[bi] = null, Vu = wi[--bi], wi[bi] = null, Hu = wi[--bi], wi[bi] = null;
    }
    function R_() {
      return ac(), nc !== null ? {
        id: Hu,
        overflow: Vu
      } : null;
    }
    function T_(e, t) {
      ac(), wi[bi++] = Hu, wi[bi++] = Vu, wi[bi++] = nc, Hu = t.id, Vu = t.overflow, nc = e;
    }
    function ac() {
      Or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, Di = null, il = !1, ic = !1, Ho = null;
    function __() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aE() {
      ic = !0;
    }
    function x_() {
      return ic;
    }
    function w_(e) {
      var t = e.stateNode.containerInfo;
      return Di = IT(t), kr = e, il = !0, Ho = null, ic = !1, !0;
    }
    function b_(e, t, a) {
      return Di = YT(t), kr = e, il = !0, Ho = null, ic = !1, a !== null && T_(e, a), !0;
    }
    function iE(e, t) {
      switch (e.tag) {
        case ee: {
          t_(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & Le) !== re;
          r_(
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
          i.dehydrated !== null && n_(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      iE(e, t);
      var a = Nb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function ag(e, t) {
      {
        if (ic)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, a_(a, i);
                break;
              case Re:
                var u = t.pendingProps;
                i_(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Le) !== re;
                o_(
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
                var w = t.pendingProps, _ = (e.mode & Le) !== re;
                s_(
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
                var F = t.type;
                t.pendingProps, l_(A, F);
                break;
              case Re:
                var le = t.pendingProps;
                u_(A, le);
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
      t.flags = t.flags & ~mi | Xt, ag(e, t);
    }
    function oE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = FT(t, a);
          return i !== null ? (e.stateNode = i, kr = e, Di = $T(i), !0) : !1;
        }
        case Re: {
          var u = e.pendingProps, s = HT(t, u);
          return s !== null ? (e.stateNode = s, kr = e, Di = null, !0) : !1;
        }
        case Te: {
          var f = VT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: R_(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = Lb(f);
            return v.return = e, e.child = v, kr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & Le) !== re && (e.flags & Xe) === ze;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ug(e) {
      if (il) {
        var t = Di;
        if (!t) {
          ig(e) && (ag(kr, e), lg()), uE(kr, e), il = !1, kr = e;
          return;
        }
        var a = t;
        if (!oE(e, t)) {
          ig(e) && (ag(kr, e), lg()), t = sp(a);
          var i = kr;
          if (!t || !oE(e, t)) {
            uE(kr, e), il = !1, kr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function D_(e, t, a) {
      var i = e.stateNode, u = !ic, s = QT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function k_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = WT(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & Le) !== re;
              ZT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Le) !== re;
              e_(
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
    function O_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      GT(a, e);
    }
    function N_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qT(a);
    }
    function sE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== ee && t.tag !== Te; )
        t = t.return;
      kr = t;
    }
    function jh(e) {
      if (e !== kr)
        return !1;
      if (!il)
        return sE(e), il = !0, !1;
      if (e.tag !== ee && (e.tag !== oe || JT(e.type) && !By(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (ig(e))
            cE(e), lg();
          else
            for (; t; )
              lE(e, t), t = sp(t);
      }
      return sE(e), e.tag === Te ? Di = N_(e) : Di = kr ? sp(e.stateNode) : null, !0;
    }
    function L_() {
      return il && Di !== null;
    }
    function cE(e) {
      for (var t = Di; t; )
        iE(e, t), t = sp(t);
    }
    function Rf() {
      kr = null, Di = null, il = !1, ic = !1;
    }
    function fE() {
      Ho !== null && (a1(Ho), Ho = null);
    }
    function Or() {
      return il;
    }
    function og(e) {
      Ho === null ? Ho = [e] : Ho.push(e);
    }
    var M_ = he.ReactCurrentBatchConfig, z_ = null;
    function U_() {
      return M_.transition;
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
      var A_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, lc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], uc = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        uc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          e.add(Ge(_) || "Component"), uc.add(_.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          t.add(Ge(_) || "Component"), uc.add(_.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          a.add(Ge(_) || "Component"), uc.add(_.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          i.add(Ge(_) || "Component"), uc.add(_.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(_) {
          u.add(Ge(_) || "Component"), uc.add(_.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(_) {
          s.add(Ge(_) || "Component"), uc.add(_.type);
        }), gp = []), t.size > 0) {
          var f = lc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = lc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = lc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = lc(e);
          we(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = lc(a);
          we(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = lc(u);
          we(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Fh = /* @__PURE__ */ new Map(), dE = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = A_(e);
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
              i.add(Ge(s) || "Component"), dE.add(s.type);
            });
            var u = lc(i);
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
    var sg, cg, fg, dg, pg, pE = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, pE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        dg[a] || (dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function j_(e) {
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
        !(typeof a.type == "function" && !j_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          fg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), fg[u] = !0);
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
        if (pg[t])
          return;
        pg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function vE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function hE(e) {
      function t(O, H) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [H], O.flags |= Mt) : N.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var N = H; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, H) {
        for (var N = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? N.set(K.key, K) : N.set(K.index, K), K = K.sibling;
        return N;
      }
      function u(O, H) {
        var N = mc(O, H);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, H, N) {
        if (O.index = N, !e)
          return O.flags |= Mv, H;
        var K = O.alternate;
        if (K !== null) {
          var ve = K.index;
          return ve < H ? (O.flags |= Xt, H) : ve;
        } else
          return O.flags |= Xt, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Xt), O;
      }
      function p(O, H, N, K) {
        if (H === null || H.tag !== Re) {
          var ve = o0(N, O.mode, K);
          return ve.return = O, ve;
        } else {
          var se = u(H, N);
          return se.return = O, se;
        }
      }
      function v(O, H, N, K) {
        var ve = N.type;
        if (ve === sa)
          return g(O, H, N.props.children, K, N.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        E1(H, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ae && vE(ve) === H.type)) {
          var se = u(H, N.props);
          return se.ref = Sp(O, H, N), se.return = O, se._debugSource = N._source, se._debugOwner = N._owner, se;
        }
        var Ie = u0(N, O.mode, K);
        return Ie.ref = Sp(O, H, N), Ie.return = O, Ie;
      }
      function y(O, H, N, K) {
        if (H === null || H.tag !== je || H.stateNode.containerInfo !== N.containerInfo || H.stateNode.implementation !== N.implementation) {
          var ve = s0(N, O.mode, K);
          return ve.return = O, ve;
        } else {
          var se = u(H, N.children || []);
          return se.return = O, se;
        }
      }
      function g(O, H, N, K, ve) {
        if (H === null || H.tag !== vt) {
          var se = Xo(N, O.mode, K, ve);
          return se.return = O, se;
        } else {
          var Ie = u(H, N);
          return Ie.return = O, Ie;
        }
      }
      function w(O, H, N) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = o0("" + H, O.mode, N);
          return K.return = O, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Er: {
              var ve = u0(H, O.mode, N);
              return ve.ref = Sp(O, null, H), ve.return = O, ve;
            }
            case Hr: {
              var se = s0(H, O.mode, N);
              return se.return = O, se;
            }
            case Ae: {
              var Ie = H._payload, Ze = H._init;
              return w(O, Ze(Ie), N);
            }
          }
          if (wt(H) || Vr(H)) {
            var Wt = Xo(H, O.mode, N, null);
            return Wt.return = O, Wt;
          }
          Hh(O, H);
        }
        return typeof H == "function" && Vh(O), null;
      }
      function _(O, H, N, K) {
        var ve = H !== null ? H.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ve !== null ? null : p(O, H, "" + N, K);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Er:
              return N.key === ve ? v(O, H, N, K) : null;
            case Hr:
              return N.key === ve ? y(O, H, N, K) : null;
            case Ae: {
              var se = N._payload, Ie = N._init;
              return _(O, H, Ie(se), K);
            }
          }
          if (wt(N) || Vr(N))
            return ve !== null ? null : g(O, H, N, K, null);
          Hh(O, N);
        }
        return typeof N == "function" && Vh(O), null;
      }
      function z(O, H, N, K, ve) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var se = O.get(N) || null;
          return p(H, se, "" + K, ve);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Er: {
              var Ie = O.get(K.key === null ? N : K.key) || null;
              return v(H, Ie, K, ve);
            }
            case Hr: {
              var Ze = O.get(K.key === null ? N : K.key) || null;
              return y(H, Ze, K, ve);
            }
            case Ae:
              var Wt = K._payload, zt = K._init;
              return z(O, H, N, zt(Wt), ve);
          }
          if (wt(K) || Vr(K)) {
            var $n = O.get(N) || null;
            return g(H, $n, K, ve, null);
          }
          Hh(H, K);
        }
        return typeof K == "function" && Vh(H), null;
      }
      function A(O, H, N) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case Er:
            case Hr:
              pE(O, N);
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
              var ve = O._payload, se = O._init;
              A(se(ve), H, N);
              break;
          }
        }
        return H;
      }
      function F(O, H, N, K) {
        for (var ve = null, se = 0; se < N.length; se++) {
          var Ie = N[se];
          ve = A(Ie, ve, O);
        }
        for (var Ze = null, Wt = null, zt = H, $n = 0, Ut = 0, jn = null; zt !== null && Ut < N.length; Ut++) {
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
            rc(O, jr);
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
            rc(O, xa);
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
          var Wu = Ut;
          rc(O, Wu);
        }
        return Ze;
      }
      function le(O, H, N, K) {
        var ve = Vr(N);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), N.entries === ve && (sg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var se = ve.call(N);
          if (se)
            for (var Ie = null, Ze = se.next(); !Ze.done; Ze = se.next()) {
              var Wt = Ze.value;
              Ie = A(Wt, Ie, O);
            }
        }
        var zt = ve.call(N);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Ut = null, jn = H, ta = 0, jr = 0, ci = null, xa = zt.next(); jn !== null && !xa.done; jr++, xa = zt.next()) {
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
            rc(O, na);
          }
          return $n;
        }
        if (jn === null) {
          for (; !xa.done; jr++, xa = zt.next()) {
            var Wu = w(O, xa.value, K);
            Wu !== null && (ta = s(Wu, ta, jr), Ut === null ? $n = Wu : Ut.sibling = Wu, Ut = Wu);
          }
          if (Or()) {
            var Pf = jr;
            rc(O, Pf);
          }
          return $n;
        }
        for (var Kp = i(O, jn); !xa.done; jr++, xa = zt.next()) {
          var nu = z(Kp, O, jr, xa.value, K);
          nu !== null && (e && nu.alternate !== null && Kp.delete(nu.key === null ? jr : nu.key), ta = s(nu, ta, jr), Ut === null ? $n = nu : Ut.sibling = nu, Ut = nu);
        }
        if (e && Kp.forEach(function(sD) {
          return t(O, sD);
        }), Or()) {
          var oD = jr;
          rc(O, oD);
        }
        return $n;
      }
      function Ue(O, H, N, K) {
        if (H !== null && H.tag === Re) {
          a(O, H.sibling);
          var ve = u(H, N);
          return ve.return = O, ve;
        }
        a(O, H);
        var se = o0(N, O.mode, K);
        return se.return = O, se;
      }
      function ke(O, H, N, K) {
        for (var ve = N.key, se = H; se !== null; ) {
          if (se.key === ve) {
            var Ie = N.type;
            if (Ie === sa) {
              if (se.tag === vt) {
                a(O, se.sibling);
                var Ze = u(se, N.props.children);
                return Ze.return = O, Ze._debugSource = N._source, Ze._debugOwner = N._owner, Ze;
              }
            } else if (se.elementType === Ie || // Keep this check inline so it only runs on the false path:
            E1(se, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ae && vE(Ie) === se.type) {
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
          var $n = u0(N, O.mode, K);
          return $n.ref = Sp(O, H, N), $n.return = O, $n;
        }
      }
      function _t(O, H, N, K) {
        for (var ve = N.key, se = H; se !== null; ) {
          if (se.key === ve)
            if (se.tag === je && se.stateNode.containerInfo === N.containerInfo && se.stateNode.implementation === N.implementation) {
              a(O, se.sibling);
              var Ie = u(se, N.children || []);
              return Ie.return = O, Ie;
            } else {
              a(O, se);
              break;
            }
          else
            t(O, se);
          se = se.sibling;
        }
        var Ze = s0(N, O.mode, K);
        return Ze.return = O, Ze;
      }
      function ht(O, H, N, K) {
        var ve = typeof N == "object" && N !== null && N.type === sa && N.key === null;
        if (ve && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Er:
              return f(ke(O, H, N, K));
            case Hr:
              return f(_t(O, H, N, K));
            case Ae:
              var se = N._payload, Ie = N._init;
              return ht(O, H, Ie(se), K);
          }
          if (wt(N))
            return F(O, H, N, K);
          if (Vr(N))
            return le(O, H, N, K);
          Hh(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Ue(O, H, "" + N, K)) : (typeof N == "function" && Vh(O), a(O, H));
      }
      return ht;
    }
    var Tf = hE(!0), mE = hE(!1);
    function F_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function H_(e, t) {
      for (var a = e.child; a !== null; )
        wb(a, t), a = a.sibling;
    }
    var vg = Ao(null), hg;
    hg = {};
    var Ph = null, _f = null, mg = null, Bh = !1;
    function $h() {
      Ph = null, _f = null, mg = null, Bh = !1;
    }
    function yE() {
      Bh = !0;
    }
    function gE() {
      Bh = !1;
    }
    function SE(e, t, a) {
      Zr(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hg;
    }
    function yg(e, t) {
      var a = vg.current;
      Jr(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Vl(i.childLanes, t) ? u !== null && !Vl(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function V_(e, t, a) {
      P_(e, t, a);
    }
    function P_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = To(a), v = Pu(en, p);
                v.tag = Yh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = nt(_.lanes, a)), gg(i.return, a, e), s.lanes = nt(s.lanes, a);
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
          z.lanes = nt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = nt(A.lanes, a)), gg(z, a, e), u = i.sibling;
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
    function xf(e, t) {
      Ph = e, _f = null, mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Kr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function qn(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mg !== e) {
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
    var oc = null;
    function Sg(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function B_() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], a = t.interleaved;
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
        oc = null;
      }
    }
    function EE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function $_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function I_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var Y_ = Ih;
    function Ih(e, t) {
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
    var CE = 0, RE = 1, Yh = 2, Eg = 3, Qh = !1, Cg, Wh;
    Cg = !1, Wh = null;
    function Rg(e) {
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
    function Vo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Wh === u && !Cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cg = !0), $w()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Y_(e, a);
      } else
        return I_(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Qv(a)) {
          var s = u.lanes;
          s = Od(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function Tg(e, t) {
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
    function Q_(e, t, a, i, u, s) {
      switch (a.tag) {
        case RE: {
          var f = a.payload;
          if (typeof f == "function") {
            yE();
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
              gE();
            }
            return p;
          }
          return f;
        }
        case Eg:
          e.flags = e.flags & ~er | Xe;
        // Intentional fallthrough
        case CE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            yE(), y = v.call(s, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              gE();
            }
          } else
            y = v;
          return y == null ? i : tt({}, i, y);
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
        var z = u.baseState, A = I, F = null, le = null, Ue = null, ke = s;
        do {
          var _t = ke.lane, ht = ke.eventTime;
          if (Vl(i, _t)) {
            if (Ue !== null) {
              var H = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              Ue = Ue.next = H;
            }
            z = Q_(e, u, ke, z, t, a);
            var N = ke.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Kt) {
              e.flags |= Yn;
              var K = u.effects;
              K === null ? u.effects = [ke] : K.push(ke);
            }
          } else {
            var O = {
              eventTime: ht,
              lane: _t,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            Ue === null ? (le = Ue = O, F = z) : Ue = Ue.next = O, A = nt(A, _t);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, ke = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (F = z), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Ue;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var Ze = Ie;
          do
            A = nt(A, Ze.lane), Ze = Ze.next;
          while (Ze !== Ie);
        } else s === null && (u.shared.lanes = I);
        Qp(A), e.lanes = A, e.memoizedState = z;
      }
      Wh = null;
    }
    function W_(e, t) {
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
          f !== null && (s.callback = null, W_(f, a));
        }
    }
    var Ep = {}, Po = Ao(Ep), Cp = Ao(Ep), Kh = Ao(Ep);
    function Jh(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Jh(Kh.current);
      return e;
    }
    function _g(e, t) {
      Zr(Kh, t, e), Zr(Cp, e, e), Zr(Po, Ep, e);
      var a = cT(t);
      Jr(Po, e), Zr(Po, a, e);
    }
    function wf(e) {
      Jr(Po, e), Jr(Cp, e), Jr(Kh, e);
    }
    function xg() {
      var e = Jh(Po.current);
      return e;
    }
    function bE(e) {
      Jh(Kh.current);
      var t = Jh(Po.current), a = fT(t, e.type);
      t !== a && (Zr(Cp, e, e), Zr(Po, a, e));
    }
    function wg(e) {
      Cp.current === e && (Jr(Po, e), Jr(Cp, e));
    }
    var G_ = 0, DE = 1, kE = 1, Rp = 2, ul = Ao(G_);
    function bg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & DE;
    }
    function Dg(e, t) {
      return e & DE | t;
    }
    function q_(e, t) {
      return e | t;
    }
    function Bo(e, t) {
      Zr(ul, t, e);
    }
    function Df(e) {
      Jr(ul, e);
    }
    function X_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Q0(i) || Qy(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Xe) !== ze;
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
    ), Nr = (
      /*   */
      8
    ), kg = [];
    function Og() {
      for (var e = 0; e < kg.length; e++) {
        var t = kg[e];
        t._workInProgressVersionPrimary = null;
      }
      kg.length = 0;
    }
    function K_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = he.ReactCurrentDispatcher, Tp = he.ReactCurrentBatchConfig, Ng, kf;
    Ng = /* @__PURE__ */ new Set();
    var sc = I, Qt = null, ir = null, lr = null, em = !1, _p = !1, xp = 0, J_ = 0, Z_ = 25, V = null, ki = null, $o = -1, Lg = !1;
    function Vt() {
      {
        var e = V;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function te() {
      {
        var e = V;
        ki !== null && ($o++, ki[$o] !== e && ex(e));
      }
    }
    function Of(e) {
      e != null && !wt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function ex(e) {
      {
        var t = Ge(Qt);
        if (!Ng.has(t) && (Ng.add(t), ki !== null)) {
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
    function Mg(e, t) {
      if (Lg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      sc = s, Qt = t, ki = e !== null ? e._debugHookTypes : null, $o = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? fe.current = KE : ki !== null ? fe.current = XE : fe.current = qE;
      var f = a(i, u);
      if (_p) {
        var p = 0;
        do {
          if (_p = !1, xp = 0, p >= Z_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Lg = !1, ir = null, lr = null, t.updateQueue = null, $o = -1, fe.current = JE, f = a(i, u);
        } while (_p);
      }
      fe.current = pm, t._debugHookTypes = ki;
      var v = ir !== null && ir.next !== null;
      if (sc = I, Qt = null, ir = null, lr = null, V = null, ki = null, $o = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Le) !== re && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function OE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== re ? t.flags &= ~(gu | Aa | Yr | _e) : t.flags &= ~(Yr | _e), e.lanes = _o(e.lanes, a);
    }
    function NE() {
      if (fe.current = pm, em) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      sc = I, Qt = null, ir = null, lr = null, ki = null, $o = -1, V = null, IE = !1, _p = !1, xp = 0;
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
    function LE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Xl(), u;
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
      var f = s.dispatch = ax.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
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
          if (Vl(sc, le)) {
            if (A !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = ke;
            }
            if (F.hasEagerState)
              w = F.eagerState;
            else {
              var _t = F.action;
              w = e(w, _t);
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
        A === null ? _ = w : A.next = z, De(w, i.memoizedState) || zp(), i.memoizedState = w, i.baseState = _, i.baseQueue = A, u.lastRenderedState = w;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var O = ht;
        do {
          var H = O.lane;
          Qt.lanes = nt(Qt.lanes, H), Qp(H), O = O.next;
        } while (O !== ht);
      } else f === null && (u.lanes = I);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function jg(e, t, a) {
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
        De(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function uk(e, t, a) {
    }
    function ok(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = Qt, u = Xl(), s, f = Or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), kf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (s = t(), !kf) {
          var p = t();
          De(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var v = Lm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(v, sc) || ME(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(UE.bind(null, i, y, e), [e]), i.flags |= Yr, wp(rr | Nr, zE.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Qt, u = Oi(), s = t();
      if (!kf) {
        var f = t();
        De(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var p = u.memoizedState, v = !De(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (Dp(UE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      lr !== null && lr.memoizedState.tag & rr) {
        i.flags |= Yr, wp(rr | Nr, zE.bind(null, i, y, s, t), void 0, null);
        var g = Lm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(g, sc) || ME(i, t, s);
      }
      return s;
    }
    function ME(e, t, a) {
      e.flags |= yu;
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
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = Ba(e, be);
      t !== null && cr(t, e, be, en);
    }
    function nm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ix.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return Ag(zg);
    }
    function Vg(e) {
      return jg(zg);
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
      return (Qt.mode & qr) !== re ? bp(gu | Yr | Nl, Nr, e, t) : bp(Yr | Nl, Nr, e, t);
    }
    function Dp(e, t) {
      return am(Yr, Nr, e, t);
    }
    function Bg(e, t) {
      return bp(_e, ql, e, t);
    }
    function lm(e, t) {
      return am(_e, ql, e, t);
    }
    function $g(e, t) {
      var a = _e;
      return a |= Ua, (Qt.mode & qr) !== re && (a |= Aa), bp(a, ar, e, t);
    }
    function um(e, t) {
      return am(_e, ar, e, t);
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
    function Ig(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = _e;
      return u |= Ua, (Qt.mode & qr) !== re && (u |= Aa), bp(u, ar, FE.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(_e, ar, FE.bind(null, t, e), i);
    }
    function tx(e, t) {
    }
    var sm = tx;
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
    function Qg(e, t) {
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
    function Wg(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function HE(e) {
      var t = Oi(), a = ir, i = a.memoizedState;
      return PE(t, i, e);
    }
    function VE(e) {
      var t = Oi();
      if (ir === null)
        return t.memoizedState = e, e;
      var a = ir.memoizedState;
      return PE(t, a, e);
    }
    function PE(e, t, a) {
      var i = !$v(sc);
      if (i) {
        if (!De(a, t)) {
          var u = Tr();
          Qt.lanes = nt(Qt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function nx(e, t, a) {
      var i = xr();
      Dt(vy(i, Ri)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dt(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && we("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Gg() {
      var e = nm(!1), t = e[0], a = e[1], i = nx.bind(null, a), u = Xl();
      return u.memoizedState = i, [t, i];
    }
    function BE() {
      var e = Hg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function $E() {
      var e = Vg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var IE = !1;
    function rx() {
      return IE;
    }
    function qg() {
      var e = Xl(), t = Lm(), a = t.identifierPrefix, i;
      if (Or()) {
        var u = E_();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = J_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function ax(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
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
    function ix(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Go(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        QE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, De(y, v)) {
                $_(e, t, u, i);
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
    function YE(e) {
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
        t.lanes = u, Jc(e, u);
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
      unstable_isNewReconciler: me
    }, qE = null, XE = null, KE = null, JE = null, Kl = null, ol = null, vm = null;
    {
      var Xg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ke = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      qE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), Of(t), Yg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), Of(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), Of(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), Of(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), Of(t), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), Of(t);
          var a = fe.current;
          fe.current = Kl;
          try {
            return Qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = fe.current;
          fe.current = Kl;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Pg(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = fe.current;
          fe.current = Kl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), qg();
        },
        unstable_isNewReconciler: me
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
          return V = "useImperativeHandle", te(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = fe.current;
          fe.current = Kl;
          try {
            return Qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = fe.current;
          fe.current = Kl;
          try {
            return Ug(e, t, a);
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
          return V = "useDeferredValue", te(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), qg();
        },
        unstable_isNewReconciler: me
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
          fe.current = ol;
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
        unstable_isNewReconciler: me
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
            return jg(e, t, a);
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
            return Vg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), VE(e);
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
        unstable_isNewReconciler: me
      }, Kl = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), Vt(), Yg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), Vt(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), Vt(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), Vt(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), Vt(), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), Vt();
          var a = fe.current;
          fe.current = Kl;
          try {
            return Qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), Vt();
          var i = fe.current;
          fe.current = Kl;
          try {
            return Ug(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), Vt(), Pg(e);
        },
        useState: function(e) {
          V = "useState", Ke(), Vt();
          var t = fe.current;
          fe.current = Kl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), Vt(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), Vt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), Vt(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ke(), Vt(), qg();
        },
        unstable_isNewReconciler: me
      }, ol = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), te();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), te();
          var i = fe.current;
          fe.current = ol;
          try {
            return Ag(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), te(), rm();
        },
        useState: function(e) {
          V = "useState", Ke(), te();
          var t = fe.current;
          fe.current = ol;
          try {
            return Hg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), te(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), te(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", Ke(), te(), dm();
        },
        unstable_isNewReconciler: me
      }, vm = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), te(), cm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), te(), qn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), te(), Dp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), te(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), te(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), te(), um(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), te();
          var a = fe.current;
          fe.current = ol;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), te();
          var i = fe.current;
          fe.current = ol;
          try {
            return jg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), te(), rm();
        },
        useState: function(e) {
          V = "useState", Ke(), te();
          var t = fe.current;
          fe.current = ol;
          try {
            return Vg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), te(), sm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), te(), VE(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), te(), $E();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), te(), tm(e, t);
        },
        useId: function() {
          return V = "useId", Ke(), te(), dm();
        },
        unstable_isNewReconciler: me
      };
    }
    var Io = D.unstable_now, ZE = 0, hm = -1, kp = -1, mm = -1, Kg = !1, ym = !1;
    function eC() {
      return Kg;
    }
    function lx() {
      ym = !0;
    }
    function ux() {
      Kg = !1, ym = !1;
    }
    function ox() {
      Kg = ym, ym = !1;
    }
    function tC() {
      return ZE;
    }
    function nC() {
      ZE = Io();
    }
    function Jg(e) {
      kp = Io(), e.actualStartTime < 0 && (e.actualStartTime = Io());
    }
    function rC(e) {
      kp = -1;
    }
    function gm(e, t) {
      if (kp >= 0) {
        var a = Io() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Jl(e) {
      if (hm >= 0) {
        var t = Io() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
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
    function Zg(e) {
      if (mm >= 0) {
        var t = Io() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
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
    function Zl() {
      hm = Io();
    }
    function eS() {
      mm = Io();
    }
    function tS(e) {
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
    var nS = {}, rS, aS, iS, lS, uS, aC, Sm, oS, sS, cS, Op;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var iC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iC.has(a) || (iC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aC = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
          uS.has(a) || (uS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
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
        aC(t, s);
      }
      var f = s == null ? u : tt({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dS = {
      isMounted: va,
      enqueueSetState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Go(i), f = Pu(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = Vo(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hi(e), u = _a(), s = Go(i), f = Pu(u, s);
        f.tag = RE, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = Vo(i, f, s);
        p !== null && (cr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hi(e), i = _a(), u = Go(a), s = Pu(i, u);
        s.tag = Yh, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = Vo(a, s, u);
        f !== null && (cr(f, a, u, i), Gh(f, a, u)), Cd(a, u);
      }
    };
    function lC(e, t, a, i, u, s, f) {
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_n(a, i) || !_n(u, s) : !0;
    }
    function sx(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === re && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || wt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function uC(e, t) {
      t.updater = dS, e.stateNode = t, Dc(t, e), t._reactInternalInstance = nS;
    }
    function oC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !cS.has(t)) {
          cS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
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
      uC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var _ = gt(t) || "Component";
          aS.has(_) || (aS.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), z !== null || A !== null || F !== null) {
            var le = gt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(le) || (lS.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function cx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function sC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      sx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Rg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = gf(e, t, !0);
        u.context = Sf(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          oS.has(p) || (oS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & un && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (fS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (cx(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = _e;
        y |= Ua, (e.mode & qr) !== re && (y |= Aa), e.flags |= y;
      }
    }
    function fx(e, t, a, i) {
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
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && sC(e, u, a, v), _E();
      var _ = e.memoizedState, z = u.state = _;
      if (qh(e, a, u, i), z = e.memoizedState, s === a && _ === z && !Oh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var A = _e;
          A |= Ua, (e.mode & qr) !== re && (A |= Aa), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (fS(e, t, g, a), z = e.memoizedState);
      var F = Xh() || lC(e, t, s, a, _, z, v);
      if (F) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = _e;
          le |= Ua, (e.mode & qr) !== re && (le |= Aa), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = _e;
          Ue |= Ua, (e.mode & qr) !== re && (Ue |= Aa), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, F;
    }
    function dx(e, t, a, i, u) {
      var s = t.stateNode;
      TE(e, t);
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
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && sC(t, s, i, w), _E();
      var F = t.memoizedState, le = s.state = F;
      if (qh(t, i, s, u), le = t.memoizedState, f === v && F === le && !Oh() && !Xh() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= zn), !1;
      typeof z == "function" && (fS(t, a, z, i), le = t.memoizedState);
      var Ue = Xh() || lC(t, a, p, i, F, le, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Ue ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, w)), typeof s.componentDidUpdate == "function" && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= zn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= _e), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= zn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = w, Ue;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: qu(t),
        digest: null
      };
    }
    function vS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function px(e, t) {
      return !0;
    }
    function hS(e, t) {
      try {
        var a = px(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
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
    var vx = typeof WeakMap == "function" ? WeakMap : Map;
    function cC(e, t, a) {
      var i = Pu(en, a);
      i.tag = Eg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        lb(u), hS(e, t);
      }, i;
    }
    function mS(e, t, a) {
      var i = Pu(en, a);
      i.tag = Eg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          C1(e), hS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        C1(e), hS(e, t), typeof u != "function" && ab(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Kr(e.lanes, be) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function fC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new vx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = ub.bind(null, e, t, a);
        ha && Wp(e, a), t.then(s, s);
      }
    }
    function hx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function mx(e, t) {
      var a = e.tag;
      if ((e.mode & Le) === re && (a === Ce || a === Ve || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dC(e) {
      var t = e;
      do {
        if (t.tag === Te && X_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pC(e, t, a, i, u) {
      if ((e.mode & Le) === re) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Xe, a.flags |= kc, a.flags &= ~(Lv | Ol), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = gn;
            else {
              var f = Pu(en, be);
              f.tag = Yh, Vo(a, f, be);
            }
          }
          a.lanes = nt(a.lanes, be);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function yx(e, t, a, i, u) {
      if (a.flags |= Ol, ha && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        mx(a), Or() && a.mode & Le && aE();
        var f = dC(t);
        if (f !== null) {
          f.flags &= ~Rr, pC(f, t, a, e, u), f.mode & Le && fC(e, s, u), hx(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            fC(e, s, u), qS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Or() && a.mode & Le) {
        aE();
        var v = dC(t);
        if (v !== null) {
          (v.flags & er) === ze && (v.flags |= Rr), pC(v, t, a, e, u), og(cc(i, a));
          return;
        }
      }
      i = cc(i, a), Xw(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= er;
            var w = To(u);
            y.lanes = nt(y.lanes, w);
            var _ = cC(y, g, w);
            Tg(y, _);
            return;
          }
          case ue:
            var z = i, A = y.type, F = y.stateNode;
            if ((y.flags & Xe) === ze && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !d1(F))) {
              y.flags |= er;
              var le = To(u);
              y.lanes = nt(y.lanes, le);
              var Ue = mS(y, z, le);
              Tg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function gx() {
      return null;
    }
    var Np = he.ReactCurrentOwner, cl = !1, yS, Lp, gS, SS, ES, fc, CS, Em, Mp;
    yS = {}, Lp = {}, gS = {}, SS = {}, ES = {}, fc = !1, CS = {}, Em = {}, Mp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = mE(t, null, a, i) : t.child = Tf(t, e.child, a, i);
    }
    function Sx(e, t, a, i) {
      t.child = Tf(t, e.child, null, i), t.child = Tf(t, null, a, i);
    }
    function vC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
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
      return ya(), e !== null && !cl ? (OE(e, t, u), Bu(e, t, u)) : (Or() && y && ng(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (_b(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Vf(s), t.tag = We, t.type = f, _S(t, s), mC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          ), a.defaultProps !== void 0) {
            var v = gt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = l0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, w = g.propTypes;
        w && al(
          w,
          i,
          // Resolved props
          "prop",
          gt(g)
        );
      }
      var _ = e.child, z = OS(e, u);
      if (!z) {
        var A = _.memoizedProps, F = a.compare;
        if (F = F !== null ? F : _n, F(A, i) && e.ref === t.ref)
          return Bu(e, t, u);
      }
      t.flags |= ni;
      var le = mc(_, i);
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
            gt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (_n(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = g, OS(e, u))
            (e.flags & kc) !== ze && (cl = !0);
          else return t.lanes = e.lanes, Bu(e, t, u);
      }
      return RS(e, t, a, i, u);
    }
    function yC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Le) === re) {
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
            v = nt(y, a);
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
        s !== null ? (z = nt(s.baseLanes, a), t.memoizedState = null) : z = a, Mm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function Ex(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Cx(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Rx(e, t, a) {
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
    function gC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= da, t.flags |= yi);
    }
    function RS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
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
      return ya(), e !== null && !cl ? (OE(e, t, u), Bu(e, t, u)) : (Or() && y && ng(t), t.flags |= ni, Ra(e, t, v, u), t.child);
    }
    function SC(e, t, a, i, u) {
      {
        switch (Hb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= er;
            var y = new Error("Simulated error coming from DevTools"), g = To(u);
            t.lanes = nt(t.lanes, g);
            var w = mS(t, cc(y, t), g);
            Tg(t, w);
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
            gt(a)
          );
        }
      }
      var z;
      Gl(a) ? (z = !0, Lh(t)) : z = !1, xf(t, u);
      var A = t.stateNode, F;
      A === null ? (Rm(e, t), oC(t, a, i), pS(t, a, i, u), F = !0) : e === null ? F = fx(t, a, i, u) : F = dx(e, t, a, i, u);
      var le = TS(e, t, a, F, z, u);
      {
        var Ue = t.stateNode;
        F && Ue.props !== i && (fc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), fc = !0);
      }
      return le;
    }
    function TS(e, t, a, i, u, s) {
      gC(e, t);
      var f = (t.flags & Xe) !== ze;
      if (!i && !f)
        return u && eE(t, a, !1), Bu(e, t, s);
      var p = t.stateNode;
      Np.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
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
      return t.flags |= ni, e !== null && f ? Sx(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && eE(t, a, !0), t.child;
    }
    function EC(e) {
      var t = e.stateNode;
      t.pendingContext ? J0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && J0(e, t.context, !1), _g(e, t.containerInfo);
    }
    function Tx(e, t, a) {
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
          var g = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CC(e, t, p, a, g);
        } else if (p !== s) {
          var w = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CC(e, t, p, a, w);
        } else {
          w_(t);
          var _ = mE(t, null, p, a);
          t.child = _;
          for (var z = _; z; )
            z.flags = z.flags & ~Xt | mi, z = z.sibling;
        }
      } else {
        if (Rf(), p === s)
          return Bu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function CC(e, t, a, i, u) {
      return Rf(), og(u), t.flags |= Rr, Ra(e, t, a, i), t.child;
    }
    function _x(e, t, a) {
      bE(t), e === null && ug(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = By(i, u);
      return p ? f = null : s !== null && By(i, s) && (t.flags |= za), gC(e, t), Ra(e, t, f, a), t.child;
    }
    function xx(e, t) {
      return e === null && ug(t), null;
    }
    function wx(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = xb(v), g = sl(v, u), w;
      switch (y) {
        case Ce:
          return _S(t, v), t.type = v = Vf(v), w = RS(null, t, v, g, i), w;
        case ue:
          return t.type = v = e0(v), w = SC(null, t, v, g, i), w;
        case Ve:
          return t.type = v = t0(v), w = vC(null, t, v, g, i), w;
        case dt: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && al(
              _,
              g,
              // Resolved for outer only
              "prop",
              gt(v)
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
    function bx(e, t, a, i, u) {
      Rm(e, t), t.tag = ue;
      var s;
      return Gl(a) ? (s = !0, Lh(t)) : s = !1, xf(t, u), oC(t, a, i), pS(t, a, i, u), TS(null, t, a, !0, s, u);
    }
    function Dx(e, t, a, i) {
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
          var y = gt(a) || "Unknown";
          yS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), yS[y] = !0);
        }
        t.mode & un && ll.recordLegacyContextWarning(t, null), Zn(!0), Np.current = t, p = Nf(null, t, a, u, s, i), v = Lf(), Zn(!1);
      }
      if (ya(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = gt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = gt(a) || "Unknown";
          Lp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Lp[w] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Gl(a) ? (_ = !0, Lh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Rg(t), uC(t, p), pS(t, a, u, i), TS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Ce, t.mode & un) {
          Pn(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = Lf();
          } finally {
            Pn(!1);
          }
        }
        return Or() && v && ng(t), Ra(null, t, p, i), _S(t, a), t.child;
      }
    }
    function _S(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), ES[u] || (ES[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = gt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = gt(t) || "Unknown";
          SS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), SS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = gt(t) || "Unknown";
          gS[v] || (S("%s: Function components do not support contextType.", v), gS[v] = !0);
        }
      }
    }
    var xS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Kt
    };
    function wS(e) {
      return {
        baseLanes: e,
        cachePool: gx(),
        transitions: null
      };
    }
    function kx(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ox(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return bg(e, Rp);
    }
    function Nx(e, t) {
      return _o(e.childLanes, t);
    }
    function RC(e, t, a) {
      var i = t.pendingProps;
      Vb(t) && (t.flags |= Xe);
      var u = ul.current, s = !1, f = (t.flags & Xe) !== ze;
      if (f || Ox(u, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (u = q_(u, kE)), u = bf(u), Bo(t, u), e === null) {
        ug(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Ax(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = Lx(t, y, g, a), _ = t.child;
          return _.memoizedState = wS(a), t.memoizedState = xS, w;
        } else
          return bS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return jx(e, t, f, i, A, z, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Ue = zx(e, t, le, F, a), ke = t.child, _t = e.child.memoizedState;
          return ke.memoizedState = _t === null ? wS(a) : kx(_t, a), ke.childLanes = Nx(e, a), t.memoizedState = xS, Ue;
        } else {
          var ht = i.children, O = Mx(e, t, ht, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = DS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Lx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Le) === re && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Xo(a, u, i, null)) : (p = DS(f, u), v = Xo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function DS(e, t, a) {
      return T1(e, t, I, null);
    }
    function TC(e, t) {
      return mc(e, t);
    }
    function Mx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = TC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Le) === re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function zx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Le) === re && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        y = TC(f, v), y.subtreeFlags = f.subtreeFlags & tr;
      var w;
      return p !== null ? w = mc(p, i) : (w = Xo(i, s, u, null), w.flags |= Xt), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function Cm(e, t, a, i) {
      i !== null && og(i), Tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = bS(t, s);
      return f.flags |= Xt, t.memoizedState = null, f;
    }
    function Ux(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = DS(f, s), v = Xo(i, s, u, null);
      return v.flags |= Xt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Le) !== re && Tf(t, e.child, null, u), v;
    }
    function Ax(e, t, a) {
      return (e.mode & Le) === re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = be) : Qy(t) ? e.lanes = Zi : e.lanes = ga, null;
    }
    function jx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var O = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var H = i.children, N = i.fallback, K = Ux(e, t, H, N, f), ve = t.child;
          return ve.memoizedState = wS(f), t.memoizedState = xS, K;
        }
      else {
        if (__(), (t.mode & Le) === re)
          return Cm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Qy(u)) {
          var p, v, y;
          {
            var g = PT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = vS(w, p, y);
          return Cm(e, t, f, _);
        }
        var z = Kr(f, e.childLanes);
        if (cl || z) {
          var A = Lm();
          if (A !== null) {
            var F = Md(A, f);
            if (F !== Kt && F !== s.retryLane) {
              s.retryLane = F;
              var le = en;
              Ba(e, F), cr(A, e, F, le);
            }
          }
          qS();
          var Ue = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, Ue);
        } else if (Q0(u)) {
          t.flags |= Xe, t.child = e.child;
          var ke = ob.bind(null, e);
          return BT(u, ke), null;
        } else {
          b_(t, u, s.treeContext);
          var _t = i.children, ht = bS(t, _t);
          return ht.flags |= mi, ht;
        }
      }
    }
    function _C(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), gg(e.return, t, a);
    }
    function Fx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && _C(i, a, e);
        } else if (i.tag === Et)
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
    function Hx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Vx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !CS[e])
        if (CS[e] = !0, typeof e == "string")
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
    function Px(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = wt(e), i = !a && typeof Vr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Bx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xC(e[a], a))
              return;
        } else {
          var i = Vr(e);
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
    function kS(e, t, a, i, u) {
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
      Vx(u), Px(s, u), Bx(f, u), Ra(e, t, f, a);
      var p = ul.current, v = bg(p, Rp);
      if (v)
        p = Dg(p, Rp), t.flags |= Xe;
      else {
        var y = e !== null && (e.flags & Xe) !== ze;
        y && Fx(t, t.child, a), p = bf(p);
      }
      if (Bo(t, p), (t.mode & Le) === re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Hx(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), kS(
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
            kS(
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
            kS(
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
    function $x(e, t, a) {
      _g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Tf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var bC = !1;
    function Ix(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || bC || (bC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (SE(t, u, p), f !== null) {
        var y = f.value;
        if (De(y, p)) {
          if (f.children === s.children && !Oh())
            return Bu(e, t, a);
        } else
          V_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var DC = !1;
    function Yx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DC || (DC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
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
      (t.mode & Le) === re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Xt);
    }
    function Bu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), Qp(t.lanes), Kr(a, t.childLanes) ? (F_(e, t), t.child) : null;
    }
    function Qx(e, t, a) {
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
    function OS(e, t) {
      var a = e.lanes;
      return !!Kr(a, t);
    }
    function Wx(e, t, a) {
      switch (t.tag) {
        case ee:
          EC(t), t.stateNode, Rf();
          break;
        case oe:
          bE(t);
          break;
        case ue: {
          var i = t.type;
          Gl(i) && Lh(t);
          break;
        }
        case je:
          _g(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          SE(t, s, u);
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
              return Bo(t, bf(ul.current)), t.flags |= Xe, null;
            var y = t.child, g = y.childLanes;
            if (Kr(a, g))
              return RC(e, t, a);
            Bo(t, bf(ul.current));
            var w = Bu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Bo(t, bf(ul.current));
          break;
        }
        case Et: {
          var _ = (e.flags & Xe) !== ze, z = Kr(a, t.childLanes);
          if (_) {
            if (z)
              return wC(e, t, a);
            t.flags |= Xe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Bo(t, ul.current), z)
            break;
          return null;
        }
        case Pe:
        case rt:
          return t.lanes = I, yC(e, t, a);
      }
      return Bu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Qx(e, t, l0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = OS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === ze)
            return cl = !1, Wx(e, t, a);
          (e.flags & kc) !== ze ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Or() && g_(t)) {
        var f = t.index, p = S_();
        rE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case Ye:
          return Dx(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return wx(e, t, v, a);
        }
        case Ce: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : sl(y, g);
          return RS(e, t, y, w, a);
        }
        case ue: {
          var _ = t.type, z = t.pendingProps, A = t.elementType === _ ? z : sl(_, z);
          return SC(e, t, _, A, a);
        }
        case ee:
          return Tx(e, t, a);
        case oe:
          return _x(e, t, a);
        case Re:
          return xx(e, t);
        case Te:
          return RC(e, t, a);
        case je:
          return $x(e, t, a);
        case Ve: {
          var F = t.type, le = t.pendingProps, Ue = t.elementType === F ? le : sl(F, le);
          return vC(e, t, F, Ue, a);
        }
        case vt:
          return Ex(e, t, a);
        case Fn:
          return Cx(e, t, a);
        case Nt:
          return Rx(e, t, a);
        case lt:
          return Ix(e, t, a);
        case sn:
          return Yx(e, t, a);
        case dt: {
          var ke = t.type, _t = t.pendingProps, ht = sl(ke, _t);
          if (t.type !== t.elementType) {
            var O = ke.propTypes;
            O && al(
              O,
              ht,
              // Resolved for outer only
              "prop",
              gt(ke)
            );
          }
          return ht = sl(ke.type, ht), hC(e, t, ke, ht, a);
        }
        case We:
          return mC(e, t, t.type, t.pendingProps, a);
        case gn: {
          var H = t.type, N = t.pendingProps, K = t.elementType === H ? N : sl(H, N);
          return bx(e, t, H, K, a);
        }
        case Et:
          return wC(e, t, a);
        case nn:
          break;
        case Pe:
          return yC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= _e;
    }
    function OC(e) {
      e.flags |= da, e.flags |= yi;
    }
    var NC, NS, LC, MC;
    NC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === Re)
          hT(e, u.stateNode);
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
    }, NS = function(e, t) {
    }, LC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = xg(), v = yT(f, a, s, i, u, p);
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
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = ze;
      if (t) {
        if ((e.mode & qe) !== re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & tr, i |= y.flags & tr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qe) !== re) {
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
    function Gx(e, t, a) {
      if (L_() && (t.mode & Le) !== re && (t.flags & Xe) === ze)
        return cE(t), Rf(), t.flags |= Rr | Ol | er, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (O_(t), Lr(t), (t.mode & qe) !== re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Rf(), (t.flags & Xe) === ze && (t.memoizedState = null), t.flags |= _e, Lr(t), (t.mode & qe) !== re) {
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
      switch (rg(t), t.tag) {
        case Ye:
        case xn:
        case We:
        case Ce:
        case Ve:
        case vt:
        case Fn:
        case Nt:
        case sn:
        case dt:
          return Lr(t), null;
        case ue: {
          var u = t.type;
          return Gl(u) && Nh(t), Lr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (wf(t), Zy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
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
          return NS(e, t), Lr(t), null;
        }
        case oe: {
          wg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, y, i, v), e.ref !== t.ref && OC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = xg(), w = jh(t);
            if (w)
              D_(t, v, g) && Mf(t);
            else {
              var _ = vT(y, i, v, g, t);
              NC(_, t, !1, !1), t.stateNode = _, mT(_, y, i, v) && Mf(t);
            }
            t.ref !== null && OC(t);
          }
          return Lr(t), null;
        }
        case Re: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            MC(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), le = xg(), Ue = jh(t);
            Ue ? k_(t) && Mf(t) : t.stateNode = gT(z, F, le, t);
          }
          return Lr(t), null;
        }
        case Te: {
          Df(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = Gx(e, t, ke);
            if (!_t)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Xe) !== ze)
            return t.lanes = a, (t.mode & qe) !== re && tS(t), t;
          var ht = ke !== null, O = e !== null && e.memoizedState !== null;
          if (ht !== O && ht) {
            var H = t.child;
            if (H.flags |= kl, (t.mode & Le) !== re) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              N || bg(ul.current, kE) ? qw() : qS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= _e), Lr(t), (t.mode & qe) !== re && ht) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case je:
          return wf(t), NS(e, t), e === null && f_(t.stateNode.containerInfo), Lr(t), null;
        case lt:
          var se = t.type._context;
          return yg(se, t), Lr(t), null;
        case gn: {
          var Ie = t.type;
          return Gl(Ie) && Nh(t), Lr(t), null;
        }
        case Et: {
          Df(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Lr(t), null;
          var Wt = (t.flags & Xe) !== ze, zt = Ze.rendering;
          if (zt === null)
            if (Wt)
              Up(Ze, !1);
            else {
              var $n = Kw() && (e === null || (e.flags & Xe) === ze);
              if (!$n)
                for (var Ut = t.child; Ut !== null; ) {
                  var jn = Zh(Ut);
                  if (jn !== null) {
                    Wt = !0, t.flags |= Xe, Up(Ze, !1);
                    var ta = jn.updateQueue;
                    return ta !== null && (t.updateQueue = ta, t.flags |= _e), t.subtreeFlags = ze, H_(t, a), Bo(t, Dg(ul.current, Rp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ze.tail !== null && Un() > t1() && (t.flags |= Xe, Wt = !0, Up(Ze, !1), t.lanes = Vv);
            }
          else {
            if (!Wt) {
              var jr = Zh(zt);
              if (jr !== null) {
                t.flags |= Xe, Wt = !0;
                var ci = jr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= _e), Up(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !zt.alternate && !Or())
                  return Lr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Un() * 2 - Ze.renderingStartTime > t1() && a !== ga && (t.flags |= Xe, Wt = !0, Up(Ze, !1), t.lanes = Vv);
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
            return Wt ? na = Dg(na, Rp) : na = bf(na), Bo(t, na), wa;
          }
          return Lr(t), null;
        }
        case nn:
          break;
        case Pe:
        case rt: {
          GS(t);
          var Wu = t.memoizedState, Pf = Wu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, nu = Kp !== null;
            nu !== Pf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= kl);
          }
          return !Pf || (t.mode & Le) === re ? Lr(t) : Kr(tu, ga) && (Lr(t), t.subtreeFlags & (Xt | _e) && (t.flags |= kl)), null;
        }
        case xt:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qx(e, t, a) {
      switch (rg(t), t.tag) {
        case ue: {
          var i = t.type;
          Gl(i) && Nh(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | Xe, (t.mode & qe) !== re && tS(t), t) : null;
        }
        case ee: {
          t.stateNode, wf(t), Zy(t), Og();
          var s = t.flags;
          return (s & er) !== ze && (s & Xe) === ze ? (t.flags = s & ~er | Xe, t) : null;
        }
        case oe:
          return wg(t), null;
        case Te: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Rf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | Xe, (t.mode & qe) !== re && tS(t), t) : null;
        }
        case Et:
          return Df(t), null;
        case je:
          return wf(t), null;
        case lt:
          var v = t.type._context;
          return yg(v, t), null;
        case Pe:
        case rt:
          return GS(t), null;
        case xt:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (rg(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case ee: {
          t.stateNode, wf(t), Zy(t), Og();
          break;
        }
        case oe: {
          wg(t);
          break;
        }
        case je:
          wf(t);
          break;
        case Te:
          Df(t);
          break;
        case Et:
          Df(t);
          break;
        case lt:
          var u = t.type._context;
          yg(u, t);
          break;
        case Pe:
        case rt:
          GS(t);
          break;
      }
    }
    var AC = null;
    AC = /* @__PURE__ */ new Set();
    var Tm = !1, Mr = !1, Xx = typeof WeakSet == "function" ? WeakSet : Set, ge = null, zf = null, Uf = null;
    function Kx(e) {
      ti(null, function() {
        throw e;
      }), Gi();
    }
    var Jx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qe)
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
        Jx(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function Zx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function FC(e, t) {
      try {
        VC(e);
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
            if (mt && ft && e.mode & qe)
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
    var HC = !1;
    function ew(e, t) {
      dT(e.containerInfo), ge = t, tw();
      var a = HC;
      return HC = !1, a;
    }
    function tw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & Qr) !== ze && t !== null ? (t.return = e, ge = t) : nw();
      }
    }
    function nw() {
      for (; ge !== null; ) {
        var e = ge;
        hn(e);
        try {
          rw(e);
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
    function rw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & zn) !== ze) {
        switch (hn(e), e.tag) {
          case Ce:
          case Ve:
          case We:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = AC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              jT(v.containerInfo);
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
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== $a ? Ac(t) : (e & ar) !== $a && co(t), (e & ql) !== $a && Gp(!0), _m(t, a, p), (e & ql) !== $a && Gp(!1), (e & Nr) !== $a ? Fv() : (e & ar) !== $a && fo());
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
            (e & Nr) !== $a ? Uc(t) : (e & ar) !== $a && xs(t);
            var f = s.create;
            (e & ql) !== $a && Gp(!0), s.destroy = f(), (e & ql) !== $a && Gp(!1), (e & Nr) !== $a ? jv() : (e & ar) !== $a && gi();
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
    function aw(e, t) {
      if ((t.flags & _e) !== ze)
        switch (t.tag) {
          case Nt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tC(), p = t.alternate === null ? "mount" : "update";
            eC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
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
    function iw(e, t, a, i) {
      if ((a.flags & ri) !== ze)
        switch (a.tag) {
          case Ce:
          case Ve:
          case We: {
            if (!Mr)
              if (a.mode & qe)
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
            if (a.flags & _e && !Mr)
              if (t === null)
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & qe)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & qe)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), xE(a, p, u));
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
            if (t === null && a.flags & _e) {
              var w = a.type, _ = a.memoizedProps;
              TT(g, w, _);
            }
            break;
          }
          case Re:
            break;
          case je:
            break;
          case Nt: {
            {
              var z = a.memoizedProps, A = z.onCommit, F = z.onRender, le = a.stateNode.effectDuration, Ue = tC(), ke = t === null ? "mount" : "update";
              eC() && (ke = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof A == "function" && A(a.memoizedProps.id, ke, le, Ue), nb(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case ee:
                      var ht = _t.stateNode;
                      ht.effectDuration += le;
                      break e;
                    case Nt:
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
          case Te: {
            pw(e, a);
            break;
          }
          case Et:
          case gn:
          case nn:
          case Pe:
          case rt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & da && VC(a);
    }
    function lw(e) {
      switch (e.tag) {
        case Ce:
        case Ve:
        case We: {
          if (e.mode & qe)
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
          typeof t.componentDidMount == "function" && Zx(e, e.return, t), FC(e, e.return);
          break;
        }
        case oe: {
          FC(e, e.return);
          break;
        }
      }
    }
    function uw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? MT(u) : UT(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? zT(s) : AT(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === rt) && i.memoizedState !== null && i !== e)) {
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
    function VC(e) {
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
              Zl(), u = t(i);
            } finally {
              Jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function ow(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && v_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function sw(e) {
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
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== Re && t.tag !== Jt; ) {
          if (t.flags & Xt || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Xt))
          return t.stateNode;
      }
    }
    function cw(e) {
      var t = sw(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & za && (Y0(a), t.flags &= ~za);
          var i = $C(e);
          zS(e, i, a);
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
      var i = e.tag, u = i === oe || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? kT(a, s, t) : bT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          MS(f, t, a);
          for (var p = f.sibling; p !== null; )
            MS(p, t, a), p = p.sibling;
        }
      }
    }
    function zS(e, t, a) {
      var i = e.tag, u = i === oe || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? DT(a, s, t) : wT(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    var zr = null, dl = !1;
    function fw(e, t, a) {
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
        IC(e, t, a), zr = null, dl = !1;
      }
      ow(a);
    }
    function Qo(e, t, a) {
      for (var i = a.child; i !== null; )
        IC(e, t, i), i = i.sibling;
    }
    function IC(e, t, a) {
      switch (hd(a), a.tag) {
        case oe:
          Mr || Af(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Re: {
          {
            var i = zr, u = dl;
            zr = null, Qo(e, t, a), zr = i, dl = u, zr !== null && (dl ? NT(zr, a.stateNode) : OT(zr, a.stateNode));
          }
          return;
        }
        case Jt: {
          zr !== null && (dl ? LT(zr, a.stateNode) : Yy(zr, a.stateNode));
          return;
        }
        case je: {
          {
            var s = zr, f = dl;
            zr = a.stateNode.containerInfo, dl = !0, Qo(e, t, a), zr = s, dl = f;
          }
          return;
        }
        case Ce:
        case Ve:
        case dt:
        case We: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, _ = w.destroy, z = w.tag;
                  _ !== void 0 && ((z & ql) !== $a ? _m(a, t, _) : (z & ar) !== $a && (co(a), a.mode & qe ? (Zl(), _m(a, t, _), Jl(a)) : _m(a, t, _), fo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Qo(e, t, a);
          return;
        }
        case ue: {
          if (!Mr) {
            Af(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && LS(a, t, A);
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
            a.mode & Le
          ) {
            var F = Mr;
            Mr = F || a.memoizedState !== null, Qo(e, t, a), Mr = F;
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
    function dw(e) {
      e.memoizedState;
    }
    function pw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && KT(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Xx()), t.forEach(function(i) {
          var u = sb.bind(null, e, i);
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
    function vw(e, t, a) {
      zf = a, Uf = e, hn(t), QC(t, e), hn(t), zf = null, Uf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            fw(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = is();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          hn(p), QC(p, e), p = p.sibling;
      hn(f);
    }
    function QC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Ce:
        case Ve:
        case dt:
        case We: {
          if (pl(t, e), eu(e), u & _e) {
            try {
              fl(ql | rr, e, e.return), Yo(ql | rr, e);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
            if (e.mode & qe) {
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
          pl(t, e), eu(e), u & da && i !== null && Af(i, i.return);
          return;
        }
        case oe: {
          pl(t, e), eu(e), u & da && i !== null && Af(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                Y0(s);
              } catch (Ie) {
                on(e, e.return, Ie);
              }
            }
            if (u & _e) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    _T(f, g, y, v, p, e);
                  } catch (Ie) {
                    on(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case Re: {
          if (pl(t, e), eu(e), u & _e) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, _ = e.memoizedProps, z = i !== null ? i.memoizedProps : _;
            try {
              xT(w, z, _);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
          }
          return;
        }
        case ee: {
          if (pl(t, e), eu(e), u & _e && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                XT(t.containerInfo);
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
        case Te: {
          pl(t, e), eu(e);
          var F = e.child;
          if (F.flags & kl) {
            var le = F.stateNode, Ue = F.memoizedState, ke = Ue !== null;
            if (le.isHidden = ke, ke) {
              var _t = F.alternate !== null && F.alternate.memoizedState !== null;
              _t || Gw();
            }
          }
          if (u & _e) {
            try {
              dw(e);
            } catch (Ie) {
              on(e, e.return, Ie);
            }
            YC(e);
          }
          return;
        }
        case Pe: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Le
          ) {
            var O = Mr;
            Mr = O || ht, pl(t, e), Mr = O;
          } else
            pl(t, e);
          if (eu(e), u & kl) {
            var H = e.stateNode, N = e.memoizedState, K = N !== null, ve = e;
            if (H.isHidden = K, K && !ht && (ve.mode & Le) !== re) {
              ge = ve;
              for (var se = ve.child; se !== null; )
                ge = se, mw(se), se = se.sibling;
            }
            uw(ve, K);
          }
          return;
        }
        case Et: {
          pl(t, e), eu(e), u & _e && YC(e);
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
          cw(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~Xt;
      }
      t & mi && (e.flags &= ~mi);
    }
    function hw(e, t, a) {
      zf = a, Uf = t, ge = e, WC(e, t, a), zf = null, Uf = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & Le) !== re; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            US(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, w = Tm, _ = Mr;
            Tm = p, Mr = g, Mr && !_ && (ge = u, yw(u));
            for (var z = s; z !== null; )
              ge = z, WC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            ge = u, Tm = w, Mr = _, US(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ri) !== ze && s !== null ? (s.return = u, ge = s) : US(e, t, a);
      }
    }
    function US(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & ri) !== ze) {
          var u = i.alternate;
          hn(i);
          try {
            iw(t, u, i, a);
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
    function mw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case Ce:
          case Ve:
          case dt:
          case We: {
            if (t.mode & qe)
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
            Af(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && LS(t, t.return, i);
            break;
          }
          case oe: {
            Af(t, t.return);
            break;
          }
          case Pe: {
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
    function yw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Pe) {
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
          lw(t);
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
    function gw(e, t, a, i) {
      ge = t, Sw(t, e, a, i);
    }
    function Sw(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Gr) !== ze && s !== null ? (s.return = u, ge = s) : Ew(e, t, a, i);
      }
    }
    function Ew(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Yr) !== ze) {
          hn(u);
          try {
            Cw(t, u, a, i);
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
    function Cw(e, t, a, i) {
      switch (t.tag) {
        case Ce:
        case Ve:
        case We: {
          if (t.mode & qe) {
            eS();
            try {
              Yo(Nr | rr, t);
            } finally {
              Zg(t);
            }
          } else
            Yo(Nr | rr, t);
          break;
        }
      }
    }
    function Rw(e) {
      ge = e, Tw();
    }
    function Tw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Mt) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, ww(u, e);
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
        (e.subtreeFlags & Gr) !== ze && t !== null ? (t.return = e, ge = t) : _w();
      }
    }
    function _w() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Yr) !== ze && (hn(e), xw(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function xw(e) {
      switch (e.tag) {
        case Ce:
        case Ve:
        case We: {
          e.mode & qe ? (eS(), fl(Nr | rr, e, e.return), Zg(e)) : fl(Nr | rr, e, e.return);
          break;
        }
      }
    }
    function ww(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        hn(a), Dw(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : bw(e);
      }
    }
    function bw(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
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
    function Dw(e, t) {
      switch (e.tag) {
        case Ce:
        case Ve:
        case We: {
          e.mode & qe ? (eS(), fl(Nr, e, t), Zg(e)) : fl(Nr, e, t);
          break;
        }
      }
    }
    function kw(e) {
      switch (e.tag) {
        case Ce:
        case Ve:
        case We: {
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
    function Ow(e) {
      switch (e.tag) {
        case Ce:
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
    function Nw(e) {
      switch (e.tag) {
        case Ce:
        case Ve:
        case We: {
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
    function Lw(e) {
      switch (e.tag) {
        case Ce:
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
    var Mw = [];
    function zw() {
      Mw.forEach(function(e) {
        return e();
      });
    }
    var Uw = he.ReactCurrentActQueue;
    function Aw(e) {
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
        return !e && Uw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var jw = Math.ceil, AS = he.ReactCurrentDispatcher, jS = he.ReactCurrentOwner, Ur = he.ReactCurrentBatchConfig, vl = he.ReactCurrentActQueue, ur = (
      /*             */
      0
    ), KC = (
      /*               */
      1
    ), Ar = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), $u = 0, jp = 1, dc = 2, xm = 3, Fp = 4, JC = 5, FS = 6, Tt = ur, Ta = null, On = null, or = I, tu = I, HS = Ao(I), sr = $u, Hp = null, wm = I, Vp = I, bm = I, Pp = null, Ia = null, VS = 0, ZC = 500, e1 = 1 / 0, Fw = 500, Iu = null;
    function Bp() {
      e1 = Un() + Fw;
    }
    function t1() {
      return e1;
    }
    var Dm = !1, PS = null, jf = null, pc = !1, Wo = null, $p = I, BS = [], $S = null, Hw = 50, Ip = 0, IS = null, YS = !1, km = !1, Vw = 50, Ff = 0, Om = null, Yp = en, Nm = I, n1 = !1;
    function Lm() {
      return Ta;
    }
    function _a() {
      return (Tt & (Ar | Ni)) !== ur ? Un() : (Yp !== en || (Yp = Un()), Yp);
    }
    function Go(e) {
      var t = e.mode;
      if ((t & Le) === re)
        return be;
      if ((Tt & Ar) !== ur && or !== I)
        return To(or);
      var a = U_() !== z_;
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
      var s = ST();
      return s;
    }
    function Pw(e) {
      var t = e.mode;
      return (t & Le) === re ? be : _r();
    }
    function cr(e, t, a, i) {
      fb(), n1 && S("useInsertionEffect must not schedule updates."), YS && (km = !0), xo(e, a, i), (Tt & Ar) !== I && e === Ta ? vb(t) : (ha && zd(e, t, a), hb(t), e === Ta && ((Tt & Ar) === ur && (Vp = nt(Vp, a)), sr === Fp && qo(e, or)), Ya(e, i), a === be && Tt === ur && (t.mode & Le) === re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Bp(), nE()));
    }
    function Bw(e, t, a) {
      var i = e.current;
      i.lanes = t, xo(e, t, a), Ya(e, a);
    }
    function $w(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Ar) !== ur
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = Ns(e, e === Ta ? or : I);
      if (i === I) {
        a !== null && g1(a), e.callbackNode = null, e.callbackPriority = Kt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== JS)) {
        a == null && s !== be && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && g1(a);
      var f;
      if (u === be)
        e.tag === jo ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), y_(i1.bind(null, e))) : tE(i1.bind(null, e)), vl.current !== null ? vl.current.push(Fo) : CT(function() {
          (Tt & (Ar | Ni)) === ur && Fo();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case Sa:
            p = Ml;
            break;
          case Ri:
            p = oo;
            break;
          case li:
            p = zl;
            break;
          case js:
            p = Ul;
            break;
          default:
            p = zl;
            break;
        }
        f = ZS(p, r1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function r1(e, t) {
      if (ux(), Yp = en, Nm = I, (Tt & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ns(e, e === Ta ? or : I);
      if (u === I)
        return null;
      var s = !Ms(e, u) && !Yv(e, u) && !t, f = s ? Zw(e, u) : zm(e, u);
      if (f !== $u) {
        if (f === dc) {
          var p = Ls(e);
          p !== I && (u = p, f = QS(e, p));
        }
        if (f === jp) {
          var v = Hp;
          throw vc(e, I), qo(e, u), Ya(e, Un()), v;
        }
        if (f === FS)
          qo(e, u);
        else {
          var y = !Ms(e, u), g = e.current.alternate;
          if (y && !Yw(g)) {
            if (f = zm(e, u), f === dc) {
              var w = Ls(e);
              w !== I && (u = w, f = QS(e, w));
            }
            if (f === jp) {
              var _ = Hp;
              throw vc(e, I), qo(e, u), Ya(e, Un()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Iw(e, f, u);
        }
      }
      return Ya(e, Un()), e.callbackNode === a ? r1.bind(null, e) : null;
    }
    function QS(e, t) {
      var a = Pp;
      if (pe(e)) {
        var i = vc(e, t);
        i.flags |= Rr, c_(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== dc) {
        var s = Ia;
        Ia = a, s !== null && a1(s);
      }
      return u;
    }
    function a1(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function Iw(e, t, a) {
      switch (t) {
        case $u:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case dc: {
          hc(e, Ia, Iu);
          break;
        }
        case xm: {
          if (qo(e, a), kd(a) && // do not delay if we're inside an act() scope
          !S1()) {
            var i = VS + ZC - Un();
            if (i > 10) {
              var u = Ns(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!Vl(s, a)) {
                _a(), Us(e, s);
                break;
              }
              e.timeoutHandle = $y(hc.bind(null, e, Ia, Iu), i);
              break;
            }
          }
          hc(e, Ia, Iu);
          break;
        }
        case Fp: {
          if (qo(e, a), Iv(a))
            break;
          if (!S1()) {
            var f = Pv(e, a), p = f, v = Un() - p, y = cb(v) - v;
            if (y > 10) {
              e.timeoutHandle = $y(hc.bind(null, e, Ia, Iu), y);
              break;
            }
          }
          hc(e, Ia, Iu);
          break;
        }
        case JC: {
          hc(e, Ia, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Yw(e) {
      for (var t = e; ; ) {
        if (t.flags & yu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!De(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & yu && v !== null) {
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
    function i1(e) {
      if (ox(), (Tt & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      Qu();
      var t = Ns(e, I);
      if (!Kr(t, be))
        return Ya(e, Un()), null;
      var a = zm(e, t);
      if (e.tag !== jo && a === dc) {
        var i = Ls(e);
        i !== I && (t = i, a = QS(e, i));
      }
      if (a === jp) {
        var u = Hp;
        throw vc(e, I), qo(e, t), Ya(e, Un()), u;
      }
      if (a === FS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hc(e, Ia, Iu), Ya(e, Un()), null;
    }
    function Qw(e, t) {
      t !== I && (Jc(e, nt(t, be)), Ya(e, Un()), (Tt & (Ar | Ni)) === ur && (Bp(), Fo()));
    }
    function WS(e, t) {
      var a = Tt;
      Tt |= KC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === ur && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Bp(), nE());
      }
    }
    function Ww(e, t, a, i, u) {
      var s = xr(), f = Ur.transition;
      try {
        return Ur.transition = null, Dt(Sa), e(t, a, i, u);
      } finally {
        Dt(s), Ur.transition = f, Tt === ur && Bp();
      }
    }
    function Yu(e) {
      Wo !== null && Wo.tag === jo && (Tt & (Ar | Ni)) === ur && Qu();
      var t = Tt;
      Tt |= KC;
      var a = Ur.transition, i = xr();
      try {
        return Ur.transition = null, Dt(Sa), e ? e() : void 0;
      } finally {
        Dt(i), Ur.transition = a, Tt = t, (Tt & (Ar | Ni)) === ur && Fo();
      }
    }
    function l1() {
      return (Tt & (Ar | Ni)) !== ur;
    }
    function Mm(e, t) {
      Zr(HS, tu, e), tu = nt(tu, t);
    }
    function GS(e) {
      tu = HS.current, Jr(HS, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, ET(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          UC(u, i), i = i.return;
        }
      Ta = e;
      var s = mc(e.current, null);
      return On = s, or = tu = t, sr = $u, Hp = null, wm = I, Vp = I, bm = I, Pp = null, Ia = null, B_(), ll.discardPendingWarnings(), s;
    }
    function u1(e, t) {
      do {
        var a = On;
        try {
          if ($h(), NE(), rn(), jS.current = null, a === null || a.return === null) {
            sr = jp, Hp = t, On = null;
            return;
          }
          if (mt && a.mode & qe && gm(a, !0), ut)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              gd(a, i, or);
            } else
              Cu(a, t, or);
          yx(e, a.return, a, t, or), f1(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function o1() {
      var e = AS.current;
      return AS.current = pm, e === null ? pm : e;
    }
    function s1(e) {
      AS.current = e;
    }
    function Gw() {
      VS = Un();
    }
    function Qp(e) {
      wm = nt(e, wm);
    }
    function qw() {
      sr === $u && (sr = xm);
    }
    function qS() {
      (sr === $u || sr === xm || sr === dc) && (sr = Fp), Ta !== null && (Dd(wm) || Dd(Vp)) && qo(Ta, or);
    }
    function Xw(e) {
      sr !== Fp && (sr = dc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Kw() {
      return sr === $u;
    }
    function zm(e, t) {
      var a = Tt;
      Tt |= Ar;
      var i = o1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), As(e, t);
        }
        Iu = Ci(), vc(e, t);
      }
      ws(t);
      do
        try {
          Jw();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      if ($h(), Tt = a, s1(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return jc(), Ta = null, or = I, sr;
    }
    function Jw() {
      for (; On !== null; )
        c1(On);
    }
    function Zw(e, t) {
      var a = Tt;
      Tt |= Ar;
      var i = o1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, or), u.clear()), As(e, t);
        }
        Iu = Ci(), Bp(), vc(e, t);
      }
      ws(t);
      do
        try {
          eb();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      return $h(), s1(i), Tt = a, On !== null ? (Ed(), $u) : (jc(), Ta = null, or = I, sr);
    }
    function eb() {
      for (; On !== null && !zv(); )
        c1(On);
    }
    function c1(e) {
      var t = e.alternate;
      hn(e);
      var a;
      (e.mode & qe) !== re ? (Jg(e), a = XS(t, e, tu), gm(e, !0)) : a = XS(t, e, tu), rn(), e.memoizedProps = e.pendingProps, a === null ? f1(e) : On = a, jS.current = null;
    }
    function f1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === ze) {
          hn(t);
          var u = void 0;
          if ((t.mode & qe) === re ? u = zC(a, t, tu) : (Jg(t), u = zC(a, t, tu), gm(t, !1)), rn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = qx(a, t);
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
            i.flags |= Ol, i.subtreeFlags = ze, i.deletions = null;
          else {
            sr = FS, On = null;
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
      sr === $u && (sr = JC);
    }
    function hc(e, t, a) {
      var i = xr(), u = Ur.transition;
      try {
        Ur.transition = null, Dt(Sa), tb(e, t, a, i);
      } finally {
        Ur.transition = u, Dt(i);
      }
      return null;
    }
    function tb(e, t, a, i) {
      do
        Qu();
      while (Wo !== null);
      if (db(), (Tt & (Ar | Ni)) !== ur)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (md(s), u === null)
        return yd(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Kt;
      var f = nt(u.lanes, u.childLanes);
      dy(e, f), e === Ta && (Ta = null, On = null, or = I), ((u.subtreeFlags & Gr) !== ze || (u.flags & Gr) !== ze) && (pc || (pc = !0, $S = a, ZS(zl, function() {
        return Qu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ri | Gr)) !== ze, v = (u.flags & (Qr | Wr | ri | Gr)) !== ze;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = xr();
        Dt(Sa);
        var w = Tt;
        Tt |= Ni, jS.current = null, ew(e, u), nC(), vw(e, u, s), pT(e.containerInfo), e.current = u, po(s), hw(u, e, s), Hv(), uo(), Tt = w, Dt(g), Ur.transition = y;
      } else
        e.current = u, nC();
      var _ = pc;
      if (pc ? (pc = !1, Wo = e, $p = s) : (Ff = 0, Om = null), f = e.pendingLanes, f === I && (jf = null), _ || h1(e.current, !1), Ha(u.stateNode, i), ha && e.memoizedUpdaters.clear(), zw(), Ya(e, Un()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], le = F.stack, Ue = F.digest;
          z(F.value, {
            componentStack: le,
            digest: Ue
          });
        }
      if (Dm) {
        Dm = !1;
        var ke = PS;
        throw PS = null, ke;
      }
      return Kr($p, be) && e.tag !== jo && Qu(), f = e.pendingLanes, Kr(f, be) ? (lx(), e === IS ? Ip++ : (Ip = 0, IS = e)) : Ip = 0, Fo(), yd(), null;
    }
    function Qu() {
      if (Wo !== null) {
        var e = Wv($p), t = Zc(li, e), a = Ur.transition, i = xr();
        try {
          return Ur.transition = null, Dt(t), rb();
        } finally {
          Dt(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function nb(e) {
      BS.push(e), pc || (pc = !0, ZS(zl, function() {
        return Qu(), null;
      }));
    }
    function rb() {
      if (Wo === null)
        return !1;
      var e = $S;
      $S = null;
      var t = Wo, a = $p;
      if (Wo = null, $p = I, (Tt & (Ar | Ni)) !== ur)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, km = !1, Sd(a);
      var i = Tt;
      Tt |= Ni, Rw(t.current), gw(t, t.current, a, e);
      {
        var u = BS;
        BS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          aw(t, f);
        }
      }
      mn(), h1(t.current, !0), Tt = i, Fo(), km ? t === Om ? Ff++ : (Ff = 0, Om = t) : Ff = 0, YS = !1, km = !1, Eu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function d1(e) {
      return jf !== null && jf.has(e);
    }
    function ab(e) {
      jf === null ? jf = /* @__PURE__ */ new Set([e]) : jf.add(e);
    }
    function ib(e) {
      Dm || (Dm = !0, PS = e);
    }
    var lb = ib;
    function p1(e, t, a) {
      var i = cc(a, t), u = cC(e, i, be), s = Vo(e, u, be), f = _a();
      s !== null && (xo(s, be, f), Ya(s, f));
    }
    function on(e, t, a) {
      if (Kx(a), Gp(!1), e.tag === ee) {
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
            var f = cc(a, e), p = mS(i, f, be), v = Vo(i, p, be), y = _a();
            v !== null && (xo(v, be, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ub(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      Us(e, a), mb(e), Ta === e && Vl(or, a) && (sr === Fp || sr === xm && kd(or) && Un() - VS < ZC ? vc(e, I) : bm = nt(bm, a)), Ya(e, u);
    }
    function v1(e, t) {
      t === Kt && (t = Pw(e));
      var a = _a(), i = Ba(e, t);
      i !== null && (xo(i, t, a), Ya(i, a));
    }
    function ob(e) {
      var t = e.memoizedState, a = Kt;
      t !== null && (a = t.retryLane), v1(e, a);
    }
    function sb(e, t) {
      var a = Kt, i;
      switch (e.tag) {
        case Te:
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
      i !== null && i.delete(t), v1(e, a);
    }
    function cb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : jw(e / 1960) * 1960;
    }
    function fb() {
      if (Ip > Hw)
        throw Ip = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ff > Vw && (Ff = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function db() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function h1(e, t) {
      hn(e), Um(e, Aa, Nw), t && Um(e, gu, Lw), Um(e, Aa, kw), t && Um(e, gu, Ow), rn();
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
        if ((Tt & Ar) !== ur || !(e.mode & Le))
          return;
        var t = e.tag;
        if (t !== Ye && t !== ee && t !== ue && t !== Ce && t !== Ve && t !== dt && t !== We)
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
    var XS;
    {
      var pb = null;
      XS = function(e, t, a) {
        var i = _1(pb, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (x_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), NE(), UC(e, t), _1(t, i), t.mode & qe && Jg(t), ti(null, kC, null, e, t, a), uy()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var y1 = !1, KS;
    KS = /* @__PURE__ */ new Set();
    function vb(e) {
      if (Br && !rx())
        switch (e.tag) {
          case Ce:
          case Ve:
          case We: {
            var t = On && Ge(On) || "Unknown", a = t;
            if (!KS.has(a)) {
              KS.add(a);
              var i = Ge(e) || "Unknown";
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
    var JS = {};
    function ZS(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), JS) : pd(e, t);
      }
    }
    function g1(e) {
      if (e !== JS)
        return Mc(e);
    }
    function S1() {
      return vl.current !== null;
    }
    function hb(e) {
      {
        if (e.mode & Le) {
          if (!XC())
            return;
        } else if (!Aw() || Tt !== ur || e.tag !== Ce && e.tag !== Ve && e.tag !== We)
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
    function mb(e) {
      e.tag !== jo && XC() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Li = null, Hf = null, yb = function(e) {
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
    function e0(e) {
      return Vf(e);
    }
    function t0(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
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
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Ce: {
            (typeof i == "function" || s === Ae) && (u = !0);
            break;
          }
          case Ve: {
            (s === G || s === Ae) && (u = !0);
            break;
          }
          case dt:
          case We: {
            (s === Rt || s === Ae) && (u = !0);
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
    function C1(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Hf === null && (Hf = /* @__PURE__ */ new WeakSet()), Hf.add(e);
      }
    }
    var gb = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qu(), Yu(function() {
          n0(e.current, i, a);
        });
      }
    }, Sb = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Qu(), Yu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function n0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Ce:
          case We:
          case ue:
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
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === ue ? g = !0 : y = !0));
        }
        if (Hf !== null && (Hf.has(e) || i !== null && Hf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, be);
          _ !== null && cr(_, e, be, en);
        }
        u !== null && !g && n0(u, t, a), s !== null && n0(s, t, a);
      }
    }
    var Eb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return r0(e.current, i, a), a;
      }
    };
    function r0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Ce:
          case We:
          case ue:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Cb(e, a) : i !== null && r0(i, t, a), u !== null && r0(u, t, a);
      }
    }
    function Cb(e, t) {
      {
        var a = Rb(e, t);
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
    function Rb(e, t) {
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
    var a0;
    {
      a0 = !1;
      try {
        var R1 = Object.preventExtensions({});
      } catch {
        a0 = !0;
      }
    }
    function Tb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !a0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new Tb(e, t, a, i);
    };
    function i0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _b(e) {
      return typeof e == "function" && !i0(e) && e.defaultProps === void 0;
    }
    function xb(e) {
      if (typeof e == "function")
        return i0(e) ? ue : Ce;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return Ve;
        if (t === Rt)
          return dt;
      }
      return Ye;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ze, a.subtreeFlags = ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ye:
        case Ce:
        case We:
          a.type = Vf(e.type);
          break;
        case ue:
          a.type = e0(e.type);
          break;
        case Ve:
          a.type = t0(e.type);
          break;
      }
      return a;
    }
    function wb(e, t) {
      e.flags &= tr | Xt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function bb(e, t, a) {
      var i;
      return e === Mh ? (i = Le, t === !0 && (i |= un, i |= qr)) : i = re, ha && (i |= qe), si(ee, null, null, i);
    }
    function l0(e, t, a, i, u, s) {
      var f = Ye, p = e;
      if (typeof e == "function")
        i0(e) ? (f = ue, p = e0(p)) : p = Vf(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case sa:
            return Xo(a.children, u, s, t);
          case zi:
            f = Fn, u |= un, (u & Le) !== re && (u |= qr);
            break;
          case gl:
            return Db(a, u, s, t);
          case Me:
            return kb(a, u, s, t);
          case pt:
            return Ob(a, u, s, t);
          case Gt:
            return T1(a, u, s, t);
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
                case Q:
                  f = sn;
                  break e;
                case G:
                  f = Ve, p = t0(p);
                  break e;
                case Rt:
                  f = dt;
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
    function u0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = l0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xo(e, t, a, i) {
      var u = si(vt, e, i, t);
      return u.lanes = a, u;
    }
    function Db(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(Nt, e, i, t | qe);
      return u.elementType = gl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function kb(e, t, a, i) {
      var u = si(Te, e, i, t);
      return u.elementType = Me, u.lanes = a, u;
    }
    function Ob(e, t, a, i) {
      var u = si(Et, e, i, t);
      return u.elementType = pt, u.lanes = a, u;
    }
    function T1(e, t, a, i) {
      var u = si(Pe, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function o0(e, t, a) {
      var i = si(Re, e, null, t);
      return i.lanes = a, i;
    }
    function Nb() {
      var e = si(oe, null, null, re);
      return e.elementType = "DELETED", e;
    }
    function Lb(e) {
      var t = si(Jt, null, null, re);
      return t.stateNode = e, t;
    }
    function s0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function _1(e, t) {
      return e === null && (e = si(Ye, null, null, re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Mb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Kt, this.eventTimes = zs(I), this.expirationTimes = zs(en), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = zs(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bs; f++)
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
    function x1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Mb(e, t, a, p, v), w = bb(t, s);
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
      return Rg(w), g;
    }
    var c0 = "18.3.1";
    function zb(e, t, a) {
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
    var f0, d0;
    f0 = !1, d0 = {};
    function w1(e) {
      if (!e)
        return oi;
      var t = hi(e), a = m_(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Gl(i))
          return Z0(t, i, a);
      }
      return a;
    }
    function Ub(e, t) {
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
          if (!d0[s]) {
            d0[s] = !0;
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
      var _ = w.current, z = _a(), A = Go(_), F = Pu(z, A);
      return F.callback = t ?? null, Vo(_, F, A), Bw(w, A, z), w;
    }
    function qp(e, t, a, i) {
      so(t, e);
      var u = t.current, s = _a(), f = Go(u);
      Fc(f);
      var p = w1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && vn !== null && !f0 && (f0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(vn) || "Unknown"));
      var v = Pu(s, f);
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
    function Ab(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (pe(t)) {
            var a = Ro(t);
            Qw(t, a);
          }
          break;
        }
        case Te: {
          Yu(function() {
            var u = Ba(e, be);
            if (u !== null) {
              var s = _a();
              cr(u, e, be, s);
            }
          });
          var i = be;
          p0(e, i);
          break;
        }
      }
    }
    function k1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nd(a.retryLane, t));
    }
    function p0(e, t) {
      k1(e, t);
      var a = e.alternate;
      a && k1(a, t);
    }
    function jb(e) {
      if (e.tag === Te) {
        var t = So, a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function Fb(e) {
      if (e.tag === Te) {
        var t = Go(e), a = Ba(e, t);
        if (a !== null) {
          var i = _a();
          cr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function O1(e) {
      var t = dd(e);
      return t === null ? null : t.stateNode;
    }
    var N1 = function(e) {
      return null;
    };
    function Hb(e) {
      return N1(e);
    }
    var L1 = function(e) {
      return !1;
    };
    function Vb(e) {
      return L1(e);
    }
    var M1 = null, z1 = null, U1 = null, A1 = null, j1 = null, F1 = null, H1 = null, V1 = null, P1 = null;
    {
      var B1 = function(e, t, a) {
        var i = t[a], u = wt(e) ? e.slice() : tt({}, e);
        return a + 1 === t.length ? (wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = B1(e[i], t, a + 1), u);
      }, $1 = function(e, t) {
        return B1(e, t, 0);
      }, I1 = function(e, t, a, i) {
        var u = t[i], s = wt(e) ? e.slice() : tt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = I1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Y1 = function(e, t, a) {
        if (t.length !== a.length) {
          we("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              we("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return I1(e, t, a, 0);
      }, Q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = wt(e) ? e.slice() : tt({}, e);
        return s[u] = Q1(e[u], t, a + 1, i), s;
      }, W1 = function(e, t, a) {
        return Q1(e, t, 0, a);
      }, v0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      M1 = function(e, t, a, i) {
        var u = v0(e, t);
        if (u !== null) {
          var s = W1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ba(e, be);
          f !== null && cr(f, e, be, en);
        }
      }, z1 = function(e, t, a) {
        var i = v0(e, t);
        if (i !== null) {
          var u = $1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = tt({}, e.memoizedProps);
          var s = Ba(e, be);
          s !== null && cr(s, e, be, en);
        }
      }, U1 = function(e, t, a, i) {
        var u = v0(e, t);
        if (u !== null) {
          var s = Y1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ba(e, be);
          f !== null && cr(f, e, be, en);
        }
      }, A1 = function(e, t, a) {
        e.pendingProps = W1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, be);
        i !== null && cr(i, e, be, en);
      }, j1 = function(e, t) {
        e.pendingProps = $1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, be);
        a !== null && cr(a, e, be, en);
      }, F1 = function(e, t, a) {
        e.pendingProps = Y1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, be);
        i !== null && cr(i, e, be, en);
      }, H1 = function(e) {
        var t = Ba(e, be);
        t !== null && cr(t, e, be, en);
      }, V1 = function(e) {
        N1 = e;
      }, P1 = function(e) {
        L1 = e;
      };
    }
    function Pb(e) {
      var t = cd(e);
      return t === null ? null : t.stateNode;
    }
    function Bb(e) {
      return null;
    }
    function $b() {
      return vn;
    }
    function Ib(e) {
      var t = e.findFiberByHostInstance, a = he.ReactCurrentDispatcher;
      return vd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: M1,
        overrideHookStateDeletePath: z1,
        overrideHookStateRenamePath: U1,
        overrideProps: A1,
        overridePropsDeletePath: j1,
        overridePropsRenamePath: F1,
        setErrorHandler: V1,
        setSuspenseHandler: P1,
        scheduleUpdate: H1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Pb,
        findFiberByHostInstance: t || Bb,
        // React Refresh
        findHostInstancesForRefresh: Eb,
        scheduleRefresh: gb,
        scheduleRoot: Sb,
        setRefreshHandler: yb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: $b,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: c0
      });
    }
    var G1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function h0(e) {
      this._internalRoot = e;
    }
    Fm.prototype.render = h0.prototype.render = function(e) {
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
    }, Fm.prototype.unmount = h0.prototype.unmount = function() {
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
    function Yb(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      q1(e);
      var a = !1, i = !1, u = "", s = G1;
      t != null && (t.hydrate ? we("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = b1(e, Mh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === En ? e.parentNode : e;
      return tp(p), new h0(f);
    }
    function Fm(e) {
      this._internalRoot = e;
    }
    function Qb(e) {
      e && ef(e);
    }
    Fm.prototype.unstable_scheduleHydration = Qb;
    function Wb(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      q1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = G1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = D1(t, null, e, Mh, i, s, f, p, v);
      if (wh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          K_(y, w);
        }
      return new Fm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Wf || !Ne));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Wf || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function q1(e) {
      e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Gb = he.ReactCurrentOwner, X1;
    X1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = O1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = m0(e), u = !!(i && Uo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function m0(e) {
      return e ? e.nodeType === ca ? e.documentElement : e.firstChild : null;
    }
    function K1() {
    }
    function qb(e, t, a, i, u) {
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
          jo,
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
          jo,
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
    function Xb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      X1(a), Xb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = qb(a, t, e, u, i);
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
    function Kb(e) {
      {
        J1 || (J1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Gb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ir ? e : Ub(e, "findDOMNode");
    }
    function Jb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function Zb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function eD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !lo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var Z1 = !1;
    function tD(e) {
      if (Z1 || (Z1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = m0(e), i = a && !Uo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, G0(e);
          });
        }), !0;
      } else {
        {
          var u = m0(e), s = !!(u && Uo(u)), f = e.nodeType === Ir && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ud(Ab), Fs(jb), jd(Fb), qv(xr), Vd(py), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), td(rT), bc(WS, Ww, Yu);
    function nD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return zb(e, t, null, a);
    }
    function rD(e, t, a, i) {
      return eD(e, t, a, i);
    }
    var y0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uo, yf, bh, io, hu, WS]
    };
    function aD(e, t) {
      return y0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Yb(e, t);
    }
    function iD(e, t, a) {
      return y0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Wb(e, t, a);
    }
    function lD(e) {
      return l1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var uD = Ib({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: c0,
      rendererPackageName: "react-dom"
    });
    if (!uD && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var eR = window.location.protocol;
      /^(https?|file):$/.test(eR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (eR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y0, Wa.createPortal = nD, Wa.createRoot = aD, Wa.findDOMNode = Kb, Wa.flushSync = lD, Wa.hydrate = Jb, Wa.hydrateRoot = iD, Wa.render = Zb, Wa.unmountComponentAtNode = tD, Wa.unstable_batchedUpdates = WS, Wa.unstable_renderSubtreeIntoContainer = rD, Wa.version = c0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var dR;
function SD() {
  if (dR) return $m.exports;
  dR = 1;
  var $ = {};
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ($.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (D) {
        console.error(D);
      }
    }
  }
  return $.NODE_ENV === "production" ? (q(), $m.exports = yD()) : $m.exports = gD(), $m.exports;
}
var pR;
function ED() {
  if (pR) return Bf;
  pR = 1;
  var $ = {}, q = SD();
  if ($.NODE_ENV === "production")
    Bf.createRoot = q.createRoot, Bf.hydrateRoot = q.hydrateRoot;
  else {
    var D = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Bf.createRoot = function(he, Qe) {
      D.usingClientEntryPoint = !0;
      try {
        return q.createRoot(he, Qe);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    }, Bf.hydrateRoot = function(he, Qe, bt) {
      D.usingClientEntryPoint = !0;
      try {
        return q.hydrateRoot(he, Qe, bt);
      } finally {
        D.usingClientEntryPoint = !1;
      }
    };
  }
  return Bf;
}
var CD = ED();
function gR($) {
  var q, D, he = "";
  if (typeof $ == "string" || typeof $ == "number") he += $;
  else if (typeof $ == "object") if (Array.isArray($)) {
    var Qe = $.length;
    for (q = 0; q < Qe; q++) $[q] && (D = gR($[q])) && (he && (he += " "), he += D);
  } else for (D in $) $[D] && (he && (he += " "), he += D);
  return he;
}
function yc() {
  for (var $, q, D = 0, he = "", Qe = arguments.length; D < Qe; D++) ($ = arguments[D]) && (q = gR($)) && (he && (he += " "), he += q);
  return he;
}
const RD = "_label_cys8o_1", TD = "_error_cys8o_10", vR = {
  label: RD,
  error: TD
}, SR = ($) => {
  const { className: q, title: D, value: he, error: Qe } = $;
  return /* @__PURE__ */ it.jsxs("label", { className: yc(vR.label, { [vR.error]: Qe }, q), children: [
    /* @__PURE__ */ it.jsx("span", { children: D }),
    he && /* @__PURE__ */ it.jsx("span", { children: he })
  ] });
}, _D = "_root_gnghl_1", xD = "_label_gnghl_5", wD = "_description_gnghl_9", bD = "_top_gnghl_15", DD = "_bottom_gnghl_19", kD = "_input_gnghl_24", OD = "_error_gnghl_41", ND = "_hasRight_gnghl_46", LD = "_right_gnghl_50", MD = "_tooltip_gnghl_63", hl = {
  root: _D,
  label: xD,
  description: wD,
  top: bD,
  bottom: DD,
  input: kD,
  error: OD,
  hasRight: ND,
  right: LD,
  tooltip: MD
}, zD = ($) => {
  var q;
  const { className: D, right: he, label: Qe, descriptionTop: bt, descriptionBottom: we, error: S, onFocus: Je, ...Ce } = $, ue = Qm.useRef(null), Ye = (ee) => {
    ee.target.select(), Je == null || Je(ee);
  };
  return /* @__PURE__ */ it.jsxs(
    "div",
    {
      className: yc(hl.root, { [hl.error]: S }, D),
      style: {
        "--right-width": `${((q = ue.current) == null ? void 0 : q.clientWidth) ?? 0}px`
      },
      children: [
        /* @__PURE__ */ it.jsx(SR, { className: hl.label, title: Qe, error: S }),
        /* @__PURE__ */ it.jsx("p", { className: yc(hl.description, hl.top), children: bt }),
        /* @__PURE__ */ it.jsx(
          "input",
          {
            className: yc(hl.input, {
              [hl.hasRight]: he
            }),
            onFocus: Ye,
            ...Ce
          }
        ),
        he && /* @__PURE__ */ it.jsx("div", { ref: ue, className: hl.right, children: "%" }),
        /* @__PURE__ */ it.jsx("p", { className: yc(hl.description, hl.bottom), children: we }),
        S ? /* @__PURE__ */ it.jsx("div", { className: hl.tooltip, children: S }) : null
      ]
    }
  );
}, UD = "_section_13pv1_1", AD = "_title_13pv1_8", hR = {
  section: UD,
  title: AD
}, ER = ($) => {
  const { children: q, className: D, title: he } = $;
  return /* @__PURE__ */ it.jsxs("div", { className: yc(hR.section, D), children: [
    /* @__PURE__ */ it.jsx("h4", { className: hR.title, children: he }),
    /* @__PURE__ */ it.jsx("div", { children: q })
  ] });
}, jD = "_root_avgz1_1", FD = "_label_avgz1_7", HD = "_description_avgz1_11", VD = "_inputContainer_avgz1_19", PD = "_input_avgz1_19", BD = "_controlContainer_avgz1_62", $D = "_controlRail_avgz1_68", ID = "_controlRailInner_avgz1_78", YD = "_controlItem_avgz1_86", QD = "_minMax_avgz1_122", ru = {
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
}, WD = ($) => {
  const { min: q = 0, max: D = 100, value: he, label: Qe, labelValue: bt, description: we, ...S } = $, Je = (Number(he) - Number(q)) / (Number(D) - Number(q)) * 100;
  return /* @__PURE__ */ it.jsxs("div", { className: ru.root, children: [
    /* @__PURE__ */ it.jsx(SR, { className: ru.label, title: Qe, value: bt }),
    we && /* @__PURE__ */ it.jsx("p", { className: ru.description, children: we }),
    /* @__PURE__ */ it.jsx("div", { className: ru.inputContainer, children: /* @__PURE__ */ it.jsx("input", { className: ru.input, min: q, max: D, value: he, type: "range", ...S }) }),
    /* @__PURE__ */ it.jsxs("div", { className: ru.controlContainer, children: [
      /* @__PURE__ */ it.jsx("div", { className: ru.controlItem, style: { left: `${Je}%` }, "data-label": he }),
      /* @__PURE__ */ it.jsx("div", { className: ru.controlRail, children: /* @__PURE__ */ it.jsx("div", { style: { left: "0", right: `${100 - Je}%` }, className: ru.controlRailInner }) })
    ] }),
    /* @__PURE__ */ it.jsxs("div", { className: ru.minMax, children: [
      /* @__PURE__ */ it.jsx("span", { children: q }),
      /* @__PURE__ */ it.jsx("span", { children: D })
    ] })
  ] });
}, GD = "_table_1xqp0_1", qD = "_tableHead_1xqp0_7", XD = "_tableItem_1xqp0_19", KD = "_footer_1xqp0_32", JD = "_footerItem_1xqp0_44", ev = {
  table: GD,
  tableHead: qD,
  tableItem: XD,
  footer: KD,
  footerItem: JD
}, ZD = ($) => {
  var q;
  const { title: D, tableData: he, resultData: Qe, className: bt } = $;
  return /* @__PURE__ */ it.jsxs(ER, { className: bt, title: D, children: [
    /* @__PURE__ */ it.jsxs("div", { className: ev.table, children: [
      /* @__PURE__ */ it.jsx("div", { className: ev.tableHead, children: he.headers.map((we) => /* @__PURE__ */ it.jsx("span", { children: we }, we)) }),
      (q = he.data) == null ? void 0 : q.map((we) => /* @__PURE__ */ it.jsxs("div", { className: ev.tableItem, children: [
        /* @__PURE__ */ it.jsx("span", { children: we.label }),
        /* @__PURE__ */ it.jsx("span", { children: we.value })
      ] }, we.label))
    ] }),
    /* @__PURE__ */ it.jsx("div", { className: ev.footer, children: Qe.map((we) => /* @__PURE__ */ it.jsxs("div", { className: ev.footerItem, children: [
      /* @__PURE__ */ it.jsx("span", { children: we.label }),
      /* @__PURE__ */ it.jsx("span", { children: we.value })
    ] }, we.label)) })
  ] });
}, ek = {
  "tofu-widget": "_tofu-widget_1vn9e_6"
}, tk = ek["tofu-widget"], nk = "_widget_699mg_1", rk = "_section_699mg_9", ak = "_priceField_699mg_13", Ym = {
  widget: nk,
  section: rk,
  priceField: ak
}, mR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), ik = () => {
  const [$, q] = Qm.useState(0), [D, he] = Qm.useState(0), Qe = (Ce) => {
    const ue = Number(Ce.target.value) > 0 ? Number(Ce.target.value) : 0;
    q(ue);
  }, bt = (Ce) => {
    he(Number(Ce.target.value));
  }, we = D / 100 * $, S = $ - we, Je = $ > 1e12;
  return /* @__PURE__ */ it.jsxs("div", { className: yc(Ym.widget, tk), children: [
    /* @__PURE__ */ it.jsxs(ER, { className: Ym.section, title: "Sale Amount", children: [
      /* @__PURE__ */ it.jsx(
        zD,
        {
          label: "What's your Sales Price?",
          type: "number",
          value: $,
          onChange: Qe,
          className: Ym.priceField,
          error: Je ? "Value must be between 0 - 1000000000000" : void 0
        }
      ),
      /* @__PURE__ */ it.jsx("div", { className: Ym.rateField, children: /* @__PURE__ */ it.jsx(
        WD,
        {
          label: "Tax Rate",
          labelValue: `${D} %`,
          description: "Amount of Taxes (%)",
          value: D,
          min: 0,
          max: 100,
          step: 1,
          onChange: bt
        }
      ) })
    ] }),
    /* @__PURE__ */ it.jsx(
      ZD,
      {
        title: "Total Summary",
        tableData: {
          headers: ["Name", "Total"],
          data: [
            { label: "What's your Sales Price?", value: `${$} USD` },
            { label: "Tax Rate", value: `${D} %` }
          ]
        },
        resultData: [
          { label: "Tax Amount", value: `${mR.format(we)}` },
          { label: "Net Sales", value: `${mR.format(S)}` }
        ]
      }
    )
  ] });
};
CD.createRoot(document.getElementById("sales-tax-calculator")).render(
  /* @__PURE__ */ it.jsx(Qm.StrictMode, { children: /* @__PURE__ */ it.jsx(ik, {}) })
);
