!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self)[
          "lottie-player"
        ] = {})
      );
})(this, function (exports) {
  "use strict";
  function _AsyncGenerator(t) {
    var e, r;
    function i(e, r) {
      try {
        var n = t[e](r),
          s = n.value,
          o = s instanceof _OverloadYield;
        Promise.resolve(o ? s.v : s).then(
          function (r) {
            if (o) {
              var h = "return" === e ? "return" : "next";
              if (!s.k || r.done) return i(h, r);
              r = t[h](r).value;
            }
            a(n.done ? "return" : "normal", r);
          },
          function (t) {
            i("throw", t);
          }
        );
      } catch (t) {
        a("throw", t);
      }
    }
    function a(t, a) {
      switch (t) {
        case "return":
          e.resolve({ value: a, done: !0 });
          break;
        case "throw":
          e.reject(a);
          break;
        default:
          e.resolve({ value: a, done: !1 });
      }
      (e = e.next) ? i(e.key, e.arg) : (r = null);
    }
    (this._invoke = function (t, a) {
      return new Promise(function (n, s) {
        var o = { key: t, arg: a, resolve: n, reject: s, next: null };
        r ? (r = r.next = o) : ((e = r = o), i(t, a));
      });
    }),
      "function" != typeof t.return && (this.return = void 0);
  }
  function _OverloadYield(t, e) {
    (this.v = t), (this.k = e);
  }
  function old_createMetadataMethodsForProperty(t, e, r, i) {
    return {
      getMetadata: function (a) {
        old_assertNotFinished(i, "getMetadata"), old_assertMetadataKey(a);
        var n = t[a];
        if (void 0 !== n)
          if (1 === e) {
            var s = n.public;
            if (void 0 !== s) return s[r];
          } else if (2 === e) {
            var o = n.private;
            if (void 0 !== o) return o.get(r);
          } else if (Object.hasOwnProperty.call(n, "constructor"))
            return n.constructor;
      },
      setMetadata: function (a, n) {
        old_assertNotFinished(i, "setMetadata"), old_assertMetadataKey(a);
        var s = t[a];
        if ((void 0 === s && (s = t[a] = {}), 1 === e)) {
          var o = s.public;
          void 0 === o && (o = s.public = {}), (o[r] = n);
        } else if (2 === e) {
          var h = s.priv;
          void 0 === h && (h = s.private = new Map()), h.set(r, n);
        } else s.constructor = n;
      },
    };
  }
  function old_convertMetadataMapToFinal(t, e) {
    var r = t[Symbol.metadata || Symbol.for("Symbol.metadata")],
      i = Object.getOwnPropertySymbols(e);
    if (0 !== i.length) {
      for (var a = 0; a < i.length; a++) {
        var n = i[a],
          s = e[n],
          o = r ? r[n] : null,
          h = s.public,
          l = o ? o.public : null;
        h && l && Object.setPrototypeOf(h, l);
        var p = s.private;
        if (p) {
          var c = Array.from(p.values()),
            f = o ? o.private : null;
          f && (c = c.concat(f)), (s.private = c);
        }
        o && Object.setPrototypeOf(s, o);
      }
      r && Object.setPrototypeOf(e, r),
        (t[Symbol.metadata || Symbol.for("Symbol.metadata")] = e);
    }
  }
  function old_createAddInitializerMethod(t, e) {
    return function (r) {
      old_assertNotFinished(e, "addInitializer"),
        old_assertCallable(r, "An initializer"),
        t.push(r);
    };
  }
  function old_memberDec(t, e, r, i, a, n, s, o, h) {
    var l;
    switch (n) {
      case 1:
        l = "accessor";
        break;
      case 2:
        l = "method";
        break;
      case 3:
        l = "getter";
        break;
      case 4:
        l = "setter";
        break;
      default:
        l = "field";
    }
    var p,
      c,
      f = { kind: l, name: o ? "#" + e : e, isStatic: s, isPrivate: o },
      u = { v: !1 };
    if (
      (0 !== n && (f.addInitializer = old_createAddInitializerMethod(a, u)), o)
    ) {
      (p = 2), (c = Symbol(e));
      var d = {};
      0 === n
        ? ((d.get = r.get), (d.set = r.set))
        : 2 === n
        ? (d.get = function () {
            return r.value;
          })
        : ((1 !== n && 3 !== n) ||
            (d.get = function () {
              return r.get.call(this);
            }),
          (1 !== n && 4 !== n) ||
            (d.set = function (t) {
              r.set.call(this, t);
            })),
        (f.access = d);
    } else (p = 1), (c = e);
    try {
      return t(
        h,
        Object.assign(f, old_createMetadataMethodsForProperty(i, p, c, u))
      );
    } finally {
      u.v = !0;
    }
  }
  function old_assertNotFinished(t, e) {
    if (t.v)
      throw new Error(
        "attempted to call " + e + " after decoration was finished"
      );
  }
  function old_assertMetadataKey(t) {
    if ("symbol" != typeof t)
      throw new TypeError("Metadata keys must be symbols, received: " + t);
  }
  function old_assertCallable(t, e) {
    if ("function" != typeof t) throw new TypeError(e + " must be a function");
  }
  function old_assertValidReturnValue(t, e) {
    var r = typeof e;
    if (1 === t) {
      if ("object" !== r || null === e)
        throw new TypeError(
          "accessor decorators must return an object with get, set, or init properties or void 0"
        );
      void 0 !== e.get && old_assertCallable(e.get, "accessor.get"),
        void 0 !== e.set && old_assertCallable(e.set, "accessor.set"),
        void 0 !== e.init && old_assertCallable(e.init, "accessor.init"),
        void 0 !== e.initializer &&
          old_assertCallable(e.initializer, "accessor.initializer");
    } else if ("function" !== r) {
      throw new TypeError(
        (0 === t ? "field" : 10 === t ? "class" : "method") +
          " decorators must return a function or void 0"
      );
    }
  }
  function old_getInit(t) {
    var e;
    return (
      null == (e = t.init) &&
        (e = t.initializer) &&
        "undefined" != typeof console &&
        console.warn(".initializer has been renamed to .init as of March 2022"),
      e
    );
  }
  function old_applyMemberDec(t, e, r, i, a, n, s, o, h) {
    var l,
      p,
      c,
      f,
      u,
      d,
      m = r[0];
    if (
      (s
        ? (l =
            0 === a || 1 === a
              ? { get: r[3], set: r[4] }
              : 3 === a
              ? { get: r[3] }
              : 4 === a
              ? { set: r[3] }
              : { value: r[3] })
        : 0 !== a && (l = Object.getOwnPropertyDescriptor(e, i)),
      1 === a
        ? (c = { get: l.get, set: l.set })
        : 2 === a
        ? (c = l.value)
        : 3 === a
        ? (c = l.get)
        : 4 === a && (c = l.set),
      "function" == typeof m)
    )
      void 0 !== (f = old_memberDec(m, i, l, o, h, a, n, s, c)) &&
        (old_assertValidReturnValue(a, f),
        0 === a
          ? (p = f)
          : 1 === a
          ? ((p = old_getInit(f)),
            (u = f.get || c.get),
            (d = f.set || c.set),
            (c = { get: u, set: d }))
          : (c = f));
    else
      for (var y = m.length - 1; y >= 0; y--) {
        var g;
        void 0 !== (f = old_memberDec(m[y], i, l, o, h, a, n, s, c)) &&
          (old_assertValidReturnValue(a, f),
          0 === a
            ? (g = f)
            : 1 === a
            ? ((g = old_getInit(f)),
              (u = f.get || c.get),
              (d = f.set || c.set),
              (c = { get: u, set: d }))
            : (c = f),
          void 0 !== g &&
            (void 0 === p
              ? (p = g)
              : "function" == typeof p
              ? (p = [p, g])
              : p.push(g)));
      }
    if (0 === a || 1 === a) {
      if (void 0 === p)
        p = function (t, e) {
          return e;
        };
      else if ("function" != typeof p) {
        var v = p;
        p = function (t, e) {
          for (var r = e, i = 0; i < v.length; i++) r = v[i].call(t, r);
          return r;
        };
      } else {
        var b = p;
        p = function (t, e) {
          return b.call(t, e);
        };
      }
      t.push(p);
    }
    0 !== a &&
      (1 === a
        ? ((l.get = c.get), (l.set = c.set))
        : 2 === a
        ? (l.value = c)
        : 3 === a
        ? (l.get = c)
        : 4 === a && (l.set = c),
      s
        ? 1 === a
          ? (t.push(function (t, e) {
              return c.get.call(t, e);
            }),
            t.push(function (t, e) {
              return c.set.call(t, e);
            }))
          : 2 === a
          ? t.push(c)
          : t.push(function (t, e) {
              return c.call(t, e);
            })
        : Object.defineProperty(e, i, l));
  }
  function old_applyMemberDecs(t, e, r, i, a) {
    for (var n, s, o = new Map(), h = new Map(), l = 0; l < a.length; l++) {
      var p = a[l];
      if (Array.isArray(p)) {
        var c,
          f,
          u,
          d = p[1],
          m = p[2],
          y = p.length > 3,
          g = d >= 5;
        if (
          (g
            ? ((c = e), (f = i), 0 != (d -= 5) && (u = s = s || []))
            : ((c = e.prototype), (f = r), 0 !== d && (u = n = n || [])),
          0 !== d && !y)
        ) {
          var v = g ? h : o,
            b = v.get(m) || 0;
          if (!0 === b || (3 === b && 4 !== d) || (4 === b && 3 !== d))
            throw new Error(
              "Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " +
                m
            );
          !b && d > 2 ? v.set(m, d) : v.set(m, !0);
        }
        old_applyMemberDec(t, c, p, m, d, g, y, f, u);
      }
    }
    old_pushInitializers(t, n), old_pushInitializers(t, s);
  }
  function old_pushInitializers(t, e) {
    e &&
      t.push(function (t) {
        for (var r = 0; r < e.length; r++) e[r].call(t);
        return t;
      });
  }
  function old_applyClassDecs(t, e, r, i) {
    if (i.length > 0) {
      for (var a = [], n = e, s = e.name, o = i.length - 1; o >= 0; o--) {
        var h = { v: !1 };
        try {
          var l = Object.assign(
              {
                kind: "class",
                name: s,
                addInitializer: old_createAddInitializerMethod(a, h),
              },
              old_createMetadataMethodsForProperty(r, 0, s, h)
            ),
            p = i[o](n, l);
        } finally {
          h.v = !0;
        }
        void 0 !== p && (old_assertValidReturnValue(10, p), (n = p));
      }
      t.push(n, function () {
        for (var t = 0; t < a.length; t++) a[t].call(n);
      });
    }
  }
  function _applyDecs(t, e, r) {
    var i = [],
      a = {},
      n = {};
    return (
      old_applyMemberDecs(i, t, n, a, e),
      old_convertMetadataMapToFinal(t.prototype, n),
      old_applyClassDecs(i, t, a, r),
      old_convertMetadataMapToFinal(t, a),
      i
    );
  }
  function createAddInitializerMethod(t, e) {
    return function (r) {
      assertNotFinished(e, "addInitializer"),
        assertCallable(r, "An initializer"),
        t.push(r);
    };
  }
  function memberDec(t, e, r, i, a, n, s, o) {
    var h;
    switch (a) {
      case 1:
        h = "accessor";
        break;
      case 2:
        h = "method";
        break;
      case 3:
        h = "getter";
        break;
      case 4:
        h = "setter";
        break;
      default:
        h = "field";
    }
    var l,
      p,
      c = { kind: h, name: s ? "#" + e : e, static: n, private: s },
      f = { v: !1 };
    0 !== a && (c.addInitializer = createAddInitializerMethod(i, f)),
      0 === a
        ? s
          ? ((l = r.get), (p = r.set))
          : ((l = function () {
              return this[e];
            }),
            (p = function (t) {
              this[e] = t;
            }))
        : 2 === a
        ? (l = function () {
            return r.value;
          })
        : ((1 !== a && 3 !== a) ||
            (l = function () {
              return r.get.call(this);
            }),
          (1 !== a && 4 !== a) ||
            (p = function (t) {
              r.set.call(this, t);
            })),
      (c.access = l && p ? { get: l, set: p } : l ? { get: l } : { set: p });
    try {
      return t(o, c);
    } finally {
      f.v = !0;
    }
  }
  function assertNotFinished(t, e) {
    if (t.v)
      throw new Error(
        "attempted to call " + e + " after decoration was finished"
      );
  }
  function assertCallable(t, e) {
    if ("function" != typeof t) throw new TypeError(e + " must be a function");
  }
  function assertValidReturnValue(t, e) {
    var r = typeof e;
    if (1 === t) {
      if ("object" !== r || null === e)
        throw new TypeError(
          "accessor decorators must return an object with get, set, or init properties or void 0"
        );
      void 0 !== e.get && assertCallable(e.get, "accessor.get"),
        void 0 !== e.set && assertCallable(e.set, "accessor.set"),
        void 0 !== e.init && assertCallable(e.init, "accessor.init");
    } else if ("function" !== r) {
      throw new TypeError(
        (0 === t ? "field" : 10 === t ? "class" : "method") +
          " decorators must return a function or void 0"
      );
    }
  }
  function applyMemberDec(t, e, r, i, a, n, s, o) {
    var h,
      l,
      p,
      c,
      f,
      u,
      d = r[0];
    if (
      (s
        ? (h =
            0 === a || 1 === a
              ? { get: r[3], set: r[4] }
              : 3 === a
              ? { get: r[3] }
              : 4 === a
              ? { set: r[3] }
              : { value: r[3] })
        : 0 !== a && (h = Object.getOwnPropertyDescriptor(e, i)),
      1 === a
        ? (p = { get: h.get, set: h.set })
        : 2 === a
        ? (p = h.value)
        : 3 === a
        ? (p = h.get)
        : 4 === a && (p = h.set),
      "function" == typeof d)
    )
      void 0 !== (c = memberDec(d, i, h, o, a, n, s, p)) &&
        (assertValidReturnValue(a, c),
        0 === a
          ? (l = c)
          : 1 === a
          ? ((l = c.init),
            (f = c.get || p.get),
            (u = c.set || p.set),
            (p = { get: f, set: u }))
          : (p = c));
    else
      for (var m = d.length - 1; m >= 0; m--) {
        var y;
        void 0 !== (c = memberDec(d[m], i, h, o, a, n, s, p)) &&
          (assertValidReturnValue(a, c),
          0 === a
            ? (y = c)
            : 1 === a
            ? ((y = c.init),
              (f = c.get || p.get),
              (u = c.set || p.set),
              (p = { get: f, set: u }))
            : (p = c),
          void 0 !== y &&
            (void 0 === l
              ? (l = y)
              : "function" == typeof l
              ? (l = [l, y])
              : l.push(y)));
      }
    if (0 === a || 1 === a) {
      if (void 0 === l)
        l = function (t, e) {
          return e;
        };
      else if ("function" != typeof l) {
        var g = l;
        l = function (t, e) {
          for (var r = e, i = 0; i < g.length; i++) r = g[i].call(t, r);
          return r;
        };
      } else {
        var v = l;
        l = function (t, e) {
          return v.call(t, e);
        };
      }
      t.push(l);
    }
    0 !== a &&
      (1 === a
        ? ((h.get = p.get), (h.set = p.set))
        : 2 === a
        ? (h.value = p)
        : 3 === a
        ? (h.get = p)
        : 4 === a && (h.set = p),
      s
        ? 1 === a
          ? (t.push(function (t, e) {
              return p.get.call(t, e);
            }),
            t.push(function (t, e) {
              return p.set.call(t, e);
            }))
          : 2 === a
          ? t.push(p)
          : t.push(function (t, e) {
              return p.call(t, e);
            })
        : Object.defineProperty(e, i, h));
  }
  function applyMemberDecs(t, e, r) {
    for (var i, a, n = new Map(), s = new Map(), o = 0; o < r.length; o++) {
      var h = r[o];
      if (Array.isArray(h)) {
        var l,
          p,
          c = h[1],
          f = h[2],
          u = h.length > 3,
          d = c >= 5;
        if (
          (d
            ? ((l = e), 0 != (c -= 5) && (p = a = a || []))
            : ((l = e.prototype), 0 !== c && (p = i = i || [])),
          0 !== c && !u)
        ) {
          var m = d ? s : n,
            y = m.get(f) || 0;
          if (!0 === y || (3 === y && 4 !== c) || (4 === y && 3 !== c))
            throw new Error(
              "Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " +
                f
            );
          !y && c > 2 ? m.set(f, c) : m.set(f, !0);
        }
        applyMemberDec(t, l, h, f, c, d, u, p);
      }
    }
    pushInitializers(t, i), pushInitializers(t, a);
  }
  function pushInitializers(t, e) {
    e &&
      t.push(function (t) {
        for (var r = 0; r < e.length; r++) e[r].call(t);
        return t;
      });
  }
  function applyClassDecs(t, e, r) {
    if (r.length > 0) {
      for (var i = [], a = e, n = e.name, s = r.length - 1; s >= 0; s--) {
        var o = { v: !1 };
        try {
          var h = r[s](a, {
            kind: "class",
            name: n,
            addInitializer: createAddInitializerMethod(i, o),
          });
        } finally {
          o.v = !0;
        }
        void 0 !== h && (assertValidReturnValue(10, h), (a = h));
      }
      t.push(a, function () {
        for (var t = 0; t < i.length; t++) i[t].call(a);
      });
    }
  }
  function _applyDecs2203(t, e, r) {
    var i = [];
    return applyMemberDecs(i, t, e), applyClassDecs(i, t, r), i;
  }
  function _asyncGeneratorDelegate(t) {
    var e = {},
      r = !1;
    function i(e, i) {
      return (
        (r = !0),
        {
          done: !1,
          value: new _OverloadYield(
            (i = new Promise(function (r) {
              r(t[e](i));
            })),
            1
          ),
        }
      );
    }
    return (
      (e[("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"] =
        function () {
          return this;
        }),
      (e.next = function (t) {
        return r ? ((r = !1), t) : i("next", t);
      }),
      "function" == typeof t.throw &&
        (e.throw = function (t) {
          if (r) throw ((r = !1), t);
          return i("throw", t);
        }),
      "function" == typeof t.return &&
        (e.return = function (t) {
          return r ? ((r = !1), t) : i("return", t);
        }),
      e
    );
  }
  function _asyncIterator(t) {
    var e,
      r,
      i,
      a = 2;
    for (
      "undefined" != typeof Symbol &&
      ((r = Symbol.asyncIterator), (i = Symbol.iterator));
      a--;

    ) {
      if (r && null != (e = t[r])) return e.call(t);
      if (i && null != (e = t[i])) return new AsyncFromSyncIterator(e.call(t));
      (r = "@@asyncIterator"), (i = "@@iterator");
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(t) {
    function e(t) {
      if (Object(t) !== t)
        return Promise.reject(new TypeError(t + " is not an object."));
      var e = t.done;
      return Promise.resolve(t.value).then(function (t) {
        return { value: t, done: e };
      });
    }
    return (
      (AsyncFromSyncIterator = function (t) {
        (this.s = t), (this.n = t.next);
      }),
      (AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function () {
          return e(this.n.apply(this.s, arguments));
        },
        return: function (t) {
          var r = this.s.return;
          return void 0 === r
            ? Promise.resolve({ value: t, done: !0 })
            : e(r.apply(this.s, arguments));
        },
        throw: function (t) {
          var r = this.s.return;
          return void 0 === r
            ? Promise.reject(t)
            : e(r.apply(this.s, arguments));
        },
      }),
      new AsyncFromSyncIterator(t)
    );
  }
  function _awaitAsyncGenerator(t) {
    return new _OverloadYield(t, 0);
  }
  function _checkInRHS(t) {
    if (Object(t) !== t)
      throw TypeError(
        "right-hand side of 'in' should be an object, got " +
          (null !== t ? typeof t : "null")
      );
    return t;
  }
  function _iterableToArrayLimit(t, e) {
    var r =
      null == t
        ? null
        : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
    if (null != r) {
      var i,
        a,
        n,
        s,
        o = [],
        h = !0,
        l = !1;
      try {
        if (((n = (r = r.call(t)).next), 0 === e)) {
          if (Object(r) !== r) return;
          h = !1;
        } else
          for (
            ;
            !(h = (i = n.call(r)).done) && (o.push(i.value), o.length !== e);
            h = !0
          );
      } catch (t) {
        (l = !0), (a = t);
      } finally {
        try {
          if (!h && null != r.return && ((s = r.return()), Object(s) !== s))
            return;
        } finally {
          if (l) throw a;
        }
      }
      return o;
    }
  }
  function _iterableToArrayLimitLoose(t, e) {
    var r =
      t &&
      (("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]);
    if (null != r) {
      var i,
        a = [];
      for (r = r.call(t); t.length < e && !(i = r.next()).done; )
        a.push(i.value);
      return a;
    }
  }
  var REACT_ELEMENT_TYPE;
  function _jsx(t, e, r, i) {
    REACT_ELEMENT_TYPE ||
      (REACT_ELEMENT_TYPE =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103);
    var a = t && t.defaultProps,
      n = arguments.length - 3;
    if ((e || 0 === n || (e = { children: void 0 }), 1 === n)) e.children = i;
    else if (n > 1) {
      for (var s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o + 3];
      e.children = s;
    }
    if (e && a) for (var h in a) void 0 === e[h] && (e[h] = a[h]);
    else e || (e = a || {});
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: t,
      key: void 0 === r ? null : "" + r,
      ref: null,
      props: e,
      _owner: null,
    };
  }
  function ownKeys(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, i);
    }
    return r;
  }
  function _objectSpread2(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ownKeys(Object(r), !0).forEach(function (e) {
            _defineProperty(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : ownKeys(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
      function () {
        return t;
      };
    var t = {},
      e = Object.prototype,
      r = e.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      n = a.iterator || "@@iterator",
      s = a.asyncIterator || "@@asyncIterator",
      o = a.toStringTag || "@@toStringTag";
    function h(t, e, r) {
      return (
        Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      h({}, "");
    } catch (t) {
      h = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function l(t, e, r, a) {
      var n = e && e.prototype instanceof f ? e : f,
        s = Object.create(n.prototype),
        o = new A(a || []);
      return i(s, "_invoke", { value: P(t, r, o) }), s;
    }
    function p(t, e, r) {
      try {
        return { type: "normal", arg: t.call(e, r) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    t.wrap = l;
    var c = {};
    function f() {}
    function u() {}
    function d() {}
    var m = {};
    h(m, n, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(w([])));
    g && g !== e && r.call(g, n) && (m = g);
    var v = (d.prototype = f.prototype = Object.create(m));
    function b(t) {
      ["next", "throw", "return"].forEach(function (e) {
        h(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function _(t, e) {
      function a(i, n, s, o) {
        var h = p(t[i], t, n);
        if ("throw" !== h.type) {
          var l = h.arg,
            c = l.value;
          return c && "object" == typeof c && r.call(c, "__await")
            ? e.resolve(c.__await).then(
                function (t) {
                  a("next", t, s, o);
                },
                function (t) {
                  a("throw", t, s, o);
                }
              )
            : e.resolve(c).then(
                function (t) {
                  (l.value = t), s(l);
                },
                function (t) {
                  return a("throw", t, s, o);
                }
              );
        }
        o(h.arg);
      }
      var n;
      i(this, "_invoke", {
        value: function (t, r) {
          function i() {
            return new e(function (e, i) {
              a(t, r, e, i);
            });
          }
          return (n = n ? n.then(i, i) : i());
        },
      });
    }
    function P(t, e, r) {
      var i = "suspendedStart";
      return function (a, n) {
        if ("executing" === i) throw new Error("Generator is already running");
        if ("completed" === i) {
          if ("throw" === a) throw n;
          return C();
        }
        for (r.method = a, r.arg = n; ; ) {
          var s = r.delegate;
          if (s) {
            var o = E(s, r);
            if (o) {
              if (o === c) continue;
              return o;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if ("suspendedStart" === i) throw ((i = "completed"), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          i = "executing";
          var h = p(t, e, r);
          if ("normal" === h.type) {
            if (((i = r.done ? "completed" : "suspendedYield"), h.arg === c))
              continue;
            return { value: h.arg, done: r.done };
          }
          "throw" === h.type &&
            ((i = "completed"), (r.method = "throw"), (r.arg = h.arg));
        }
      };
    }
    function E(t, e) {
      var r = e.method,
        i = t.iterator[r];
      if (void 0 === i)
        return (
          (e.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((e.method = "return"),
            (e.arg = void 0),
            E(t, e),
            "throw" === e.method)) ||
            ("return" !== r &&
              ((e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          c
        );
      var a = p(i, t.iterator, e.arg);
      if ("throw" === a.type)
        return (e.method = "throw"), (e.arg = a.arg), (e.delegate = null), c;
      var n = a.arg;
      return n
        ? n.done
          ? ((e[t.resultName] = n.value),
            (e.next = t.nextLoc),
            "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
            (e.delegate = null),
            c)
          : n
        : ((e.method = "throw"),
          (e.arg = new TypeError("iterator result is not an object")),
          (e.delegate = null),
          c);
    }
    function S(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function x(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function A(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(S, this),
        this.reset(!0);
    }
    function w(t) {
      if (t) {
        var e = t[n];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var i = -1,
            a = function e() {
              for (; ++i < t.length; )
                if (r.call(t, i)) return (e.value = t[i]), (e.done = !1), e;
              return (e.value = void 0), (e.done = !0), e;
            };
          return (a.next = a);
        }
      }
      return { next: C };
    }
    function C() {
      return { value: void 0, done: !0 };
    }
    return (
      (u.prototype = d),
      i(v, "constructor", { value: d, configurable: !0 }),
      i(d, "constructor", { value: u, configurable: !0 }),
      (u.displayName = h(d, o, "GeneratorFunction")),
      (t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (t.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, d)
            : ((t.__proto__ = d), h(t, o, "GeneratorFunction")),
          (t.prototype = Object.create(v)),
          t
        );
      }),
      (t.awrap = function (t) {
        return { __await: t };
      }),
      b(_.prototype),
      h(_.prototype, s, function () {
        return this;
      }),
      (t.AsyncIterator = _),
      (t.async = function (e, r, i, a, n) {
        void 0 === n && (n = Promise);
        var s = new _(l(e, r, i, a), n);
        return t.isGeneratorFunction(r)
          ? s
          : s.next().then(function (t) {
              return t.done ? t.value : s.next();
            });
      }),
      b(v),
      h(v, o, "Generator"),
      h(v, n, function () {
        return this;
      }),
      h(v, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var i in e) r.push(i);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var i = r.pop();
              if (i in e) return (t.value = i), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (t.values = w),
      (A.prototype = {
        constructor: A,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(x),
            !t)
          )
            for (var e in this)
              "t" === e.charAt(0) &&
                r.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = void 0);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;
          function i(r, i) {
            return (
              (s.type = "throw"),
              (s.arg = t),
              (e.next = r),
              i && ((e.method = "next"), (e.arg = void 0)),
              !!i
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var n = this.tryEntries[a],
              s = n.completion;
            if ("root" === n.tryLoc) return i("end");
            if (n.tryLoc <= this.prev) {
              var o = r.call(n, "catchLoc"),
                h = r.call(n, "finallyLoc");
              if (o && h) {
                if (this.prev < n.catchLoc) return i(n.catchLoc, !0);
                if (this.prev < n.finallyLoc) return i(n.finallyLoc);
              } else if (o) {
                if (this.prev < n.catchLoc) return i(n.catchLoc, !0);
              } else {
                if (!h)
                  throw new Error("try statement without catch or finally");
                if (this.prev < n.finallyLoc) return i(n.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i];
            if (
              a.tryLoc <= this.prev &&
              r.call(a, "finallyLoc") &&
              this.prev < a.finallyLoc
            ) {
              var n = a;
              break;
            }
          }
          n &&
            ("break" === t || "continue" === t) &&
            n.tryLoc <= e &&
            e <= n.finallyLoc &&
            (n = null);
          var s = n ? n.completion : {};
          return (
            (s.type = t),
            (s.arg = e),
            n
              ? ((this.method = "next"), (this.next = n.finallyLoc), c)
              : this.complete(s)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && e && (this.next = e),
            c
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t)
              return this.complete(r.completion, r.afterLoc), x(r), c;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var i = r.completion;
              if ("throw" === i.type) {
                var a = i.arg;
                x(r);
              }
              return a;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, e, r) {
          return (
            (this.delegate = { iterator: w(t), resultName: e, nextLoc: r }),
            "next" === this.method && (this.arg = void 0),
            c
          );
        },
      }),
      t
    );
  }
  function _typeof(t) {
    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      _typeof(t)
    );
  }
  function _wrapRegExp() {
    _wrapRegExp = function (t, e) {
      return new r(t, void 0, e);
    };
    var t = RegExp.prototype,
      e = new WeakMap();
    function r(t, i, a) {
      var n = new RegExp(t, i);
      return e.set(n, a || e.get(t)), _setPrototypeOf(n, r.prototype);
    }
    function i(t, r) {
      var i = e.get(r);
      return Object.keys(i).reduce(function (e, r) {
        var a = i[r];
        if ("number" == typeof a) e[r] = t[a];
        else {
          for (var n = 0; void 0 === t[a[n]] && n + 1 < a.length; ) n++;
          e[r] = t[a[n]];
        }
        return e;
      }, Object.create(null));
    }
    return (
      _inherits(r, RegExp),
      (r.prototype.exec = function (e) {
        var r = t.exec.call(this, e);
        if (r) {
          r.groups = i(r, this);
          var a = r.indices;
          a && (a.groups = i(a, this));
        }
        return r;
      }),
      (r.prototype[Symbol.replace] = function (r, a) {
        if ("string" == typeof a) {
          var n = e.get(this);
          return t[Symbol.replace].call(
            this,
            r,
            a.replace(/\$<([^>]+)>/g, function (t, e) {
              var r = n[e];
              return "$" + (Array.isArray(r) ? r.join("$") : r);
            })
          );
        }
        if ("function" == typeof a) {
          var s = this;
          return t[Symbol.replace].call(this, r, function () {
            var t = arguments;
            return (
              "object" != typeof t[t.length - 1] &&
                (t = [].slice.call(t)).push(i(t, s)),
              a.apply(this, t)
            );
          });
        }
        return t[Symbol.replace].call(this, r, a);
      }),
      _wrapRegExp.apply(this, arguments)
    );
  }
  function _AwaitValue(t) {
    this.wrapped = t;
  }
  function _wrapAsyncGenerator(t) {
    return function () {
      return new _AsyncGenerator(t.apply(this, arguments));
    };
  }
  function asyncGeneratorStep(t, e, r, i, a, n, s) {
    try {
      var o = t[n](s),
        h = o.value;
    } catch (t) {
      return void r(t);
    }
    o.done ? e(h) : Promise.resolve(h).then(i, a);
  }
  function _asyncToGenerator(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (i, a) {
        var n = t.apply(e, r);
        function s(t) {
          asyncGeneratorStep(n, i, a, s, o, "next", t);
        }
        function o(t) {
          asyncGeneratorStep(n, i, a, s, o, "throw", t);
        }
        s(void 0);
      });
    };
  }
  function _classCallCheck(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, _toPropertyKey(i.key), i);
    }
  }
  function _createClass(t, e, r) {
    return (
      e && _defineProperties(t.prototype, e),
      r && _defineProperties(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function _defineEnumerableProperties(t, e) {
    for (var r in e) {
      ((n = e[r]).configurable = n.enumerable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, r, n);
    }
    if (Object.getOwnPropertySymbols)
      for (var i = Object.getOwnPropertySymbols(e), a = 0; a < i.length; a++) {
        var n,
          s = i[a];
        ((n = e[s]).configurable = n.enumerable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, s, n);
      }
    return t;
  }
  function _defaults(t, e) {
    for (var r = Object.getOwnPropertyNames(e), i = 0; i < r.length; i++) {
      var a = r[i],
        n = Object.getOwnPropertyDescriptor(e, a);
      n && n.configurable && void 0 === t[a] && Object.defineProperty(t, a, n);
    }
    return t;
  }
  function _defineProperty(t, e, r) {
    return (
      (e = _toPropertyKey(e)) in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function _extends() {
    return (
      (_extends = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }),
      _extends.apply(this, arguments)
    );
  }
  function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? Object(arguments[e]) : {},
        i = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        i.push.apply(
          i,
          Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        ),
        i.forEach(function (e) {
          _defineProperty(t, e, r[e]);
        });
    }
    return t;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && _setPrototypeOf(t, e);
  }
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      _setPrototypeOf(t, e);
  }
  function _getPrototypeOf(t) {
    return (
      (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      _getPrototypeOf(t)
    );
  }
  function _setPrototypeOf(t, e) {
    return (
      (_setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      _setPrototypeOf(t, e)
    );
  }
  function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function _construct(t, e, r) {
    return (
      (_construct = _isNativeReflectConstruct()
        ? Reflect.construct.bind()
        : function (t, e, r) {
            var i = [null];
            i.push.apply(i, e);
            var a = new (Function.bind.apply(t, i))();
            return r && _setPrototypeOf(a, r.prototype), a;
          }),
      _construct.apply(null, arguments)
    );
  }
  function _isNativeFunction(t) {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  }
  function _wrapNativeSuper(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (_wrapNativeSuper = function (t) {
        if (null === t || !_isNativeFunction(t)) return t;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return _construct(t, arguments, _getPrototypeOf(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          _setPrototypeOf(r, t)
        );
      }),
      _wrapNativeSuper(t)
    );
  }
  function _instanceof(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance]
      ? !!e[Symbol.hasInstance](t)
      : t instanceof e;
  }
  function _interopRequireDefault(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function _getRequireWildcardCache(t) {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap(),
      r = new WeakMap();
    return (_getRequireWildcardCache = function (t) {
      return t ? r : e;
    })(t);
  }
  function _interopRequireWildcard(t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || ("object" != typeof t && "function" != typeof t))
      return { default: t };
    var r = _getRequireWildcardCache(e);
    if (r && r.has(t)) return r.get(t);
    var i = {},
      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in t)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
        var s = a ? Object.getOwnPropertyDescriptor(t, n) : null;
        s && (s.get || s.set) ? Object.defineProperty(i, n, s) : (i[n] = t[n]);
      }
    return (i.default = t), r && r.set(t, i), i;
  }
  function _newArrowCheck(t, e) {
    if (t !== e) throw new TypeError("Cannot instantiate an arrow function");
  }
  function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure " + t);
  }
  function _objectWithoutPropertiesLoose(t, e) {
    if (null == t) return {};
    var r,
      i,
      a = {},
      n = Object.keys(t);
    for (i = 0; i < n.length; i++)
      (r = n[i]), e.indexOf(r) >= 0 || (a[r] = t[r]);
    return a;
  }
  function _objectWithoutProperties(t, e) {
    if (null == t) return {};
    var r,
      i,
      a = _objectWithoutPropertiesLoose(t, e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      for (i = 0; i < n.length; i++)
        (r = n[i]),
          e.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]));
    }
    return a;
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return _assertThisInitialized(t);
  }
  function _createSuper(t) {
    var e = _isNativeReflectConstruct();
    return function () {
      var r,
        i = _getPrototypeOf(t);
      if (e) {
        var a = _getPrototypeOf(this).constructor;
        r = Reflect.construct(i, arguments, a);
      } else r = i.apply(this, arguments);
      return _possibleConstructorReturn(this, r);
    };
  }
  function _superPropBase(t, e) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(t, e) &&
      null !== (t = _getPrototypeOf(t));

    );
    return t;
  }
  function _get() {
    return (
      (_get =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (t, e, r) {
              var i = _superPropBase(t, e);
              if (i) {
                var a = Object.getOwnPropertyDescriptor(i, e);
                return a.get
                  ? a.get.call(arguments.length < 3 ? t : r)
                  : a.value;
              }
            }),
      _get.apply(this, arguments)
    );
  }
  function set(t, e, r, i) {
    return (
      (set =
        "undefined" != typeof Reflect && Reflect.set
          ? Reflect.set
          : function (t, e, r, i) {
              var a,
                n = _superPropBase(t, e);
              if (n) {
                if ((a = Object.getOwnPropertyDescriptor(n, e)).set)
                  return a.set.call(i, r), !0;
                if (!a.writable) return !1;
              }
              if ((a = Object.getOwnPropertyDescriptor(i, e))) {
                if (!a.writable) return !1;
                (a.value = r), Object.defineProperty(i, e, a);
              } else _defineProperty(i, e, r);
              return !0;
            }),
      set(t, e, r, i)
    );
  }
  function _set(t, e, r, i, a) {
    if (!set(t, e, r, i || t) && a) throw new Error("failed to set property");
    return r;
  }
  function _taggedTemplateLiteral(t, e) {
    return (
      e || (e = t.slice(0)),
      Object.freeze(
        Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
      )
    );
  }
  function _taggedTemplateLiteralLoose(t, e) {
    return e || (e = t.slice(0)), (t.raw = e), t;
  }
  function _readOnlyError(t) {
    throw new TypeError('"' + t + '" is read-only');
  }
  function _writeOnlyError(t) {
    throw new TypeError('"' + t + '" is write-only');
  }
  function _classNameTDZError(t) {
    throw new Error(
      'Class "' + t + '" cannot be referenced in computed property keys.'
    );
  }
  function _temporalUndefined() {}
  function _tdz(t) {
    throw new ReferenceError(t + " is not defined - temporal dead zone");
  }
  function _temporalRef(t, e) {
    return t === _temporalUndefined ? _tdz(e) : t;
  }
  function _slicedToArray(t, e) {
    return (
      _arrayWithHoles(t) ||
      _iterableToArrayLimit(t, e) ||
      _unsupportedIterableToArray(t, e) ||
      _nonIterableRest()
    );
  }
  function _slicedToArrayLoose(t, e) {
    return (
      _arrayWithHoles(t) ||
      _iterableToArrayLimitLoose(t, e) ||
      _unsupportedIterableToArray(t, e) ||
      _nonIterableRest()
    );
  }
  function _toArray(t) {
    return (
      _arrayWithHoles(t) ||
      _iterableToArray(t) ||
      _unsupportedIterableToArray(t) ||
      _nonIterableRest()
    );
  }
  function _toConsumableArray(t) {
    return (
      _arrayWithoutHoles(t) ||
      _iterableToArray(t) ||
      _unsupportedIterableToArray(t) ||
      _nonIterableSpread()
    );
  }
  function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) return _arrayLikeToArray(t);
  }
  function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
  }
  function _maybeArrayLike(t, e, r) {
    if (e && !Array.isArray(e) && "number" == typeof e.length) {
      var i = e.length;
      return _arrayLikeToArray(e, void 0 !== r && r < i ? r : i);
    }
    return t(e, r);
  }
  function _iterableToArray(t) {
    if (
      ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
      null != t["@@iterator"]
    )
      return Array.from(t);
  }
  function _unsupportedIterableToArray(t, e) {
    if (t) {
      if ("string" == typeof t) return _arrayLikeToArray(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === r && t.constructor && (r = t.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(t)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? _arrayLikeToArray(t, e)
          : void 0
      );
    }
  }
  function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
    return i;
  }
  function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function _createForOfIteratorHelper(t, e) {
    var r =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = _unsupportedIterableToArray(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        r && (t = r);
        var i = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
          },
          e: function (t) {
            throw t;
          },
          f: a,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var n,
      s = !0,
      o = !1;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var t = r.next();
        return (s = t.done), t;
      },
      e: function (t) {
        (o = !0), (n = t);
      },
      f: function () {
        try {
          s || null == r.return || r.return();
        } finally {
          if (o) throw n;
        }
      },
    };
  }
  function _createForOfIteratorHelperLoose(t, e) {
    var r =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (r) return (r = r.call(t)).next.bind(r);
    if (
      Array.isArray(t) ||
      (r = _unsupportedIterableToArray(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      r && (t = r);
      var i = 0;
      return function () {
        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function _skipFirstGeneratorNext(t) {
    return function () {
      var e = t.apply(this, arguments);
      return e.next(), e;
    };
  }
  function _toPrimitive(t, e) {
    if ("object" != typeof t || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var i = r.call(t, e || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var e = _toPrimitive(t, "string");
    return "symbol" == typeof e ? e : String(e);
  }
  function _initializerWarningHelper(t, e) {
    throw new Error(
      "Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform."
    );
  }
  function _initializerDefineProperty(t, e, r, i) {
    r &&
      Object.defineProperty(t, e, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(i) : void 0,
      });
  }
  function _applyDecoratedDescriptor(t, e, r, i, a) {
    var n = {};
    return (
      Object.keys(i).forEach(function (t) {
        n[t] = i[t];
      }),
      (n.enumerable = !!n.enumerable),
      (n.configurable = !!n.configurable),
      ("value" in n || n.initializer) && (n.writable = !0),
      (n = r
        .slice()
        .reverse()
        .reduce(function (r, i) {
          return i(t, e, r) || r;
        }, n)),
      a &&
        void 0 !== n.initializer &&
        ((n.value = n.initializer ? n.initializer.call(a) : void 0),
        (n.initializer = void 0)),
      void 0 === n.initializer && (Object.defineProperty(t, e, n), (n = null)),
      n
    );
  }
  (_AsyncGenerator.prototype[
    ("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"
  ] = function () {
    return this;
  }),
    (_AsyncGenerator.prototype.next = function (t) {
      return this._invoke("next", t);
    }),
    (_AsyncGenerator.prototype.throw = function (t) {
      return this._invoke("throw", t);
    }),
    (_AsyncGenerator.prototype.return = function (t) {
      return this._invoke("return", t);
    });
  var id = 0;
  function _classPrivateFieldLooseKey(t) {
    return "__private_" + id++ + "_" + t;
  }
  function _classPrivateFieldLooseBase(t, e) {
    if (!Object.prototype.hasOwnProperty.call(t, e))
      throw new TypeError("attempted to use private field on non-instance");
    return t;
  }
  function _classPrivateFieldGet(t, e) {
    return _classApplyDescriptorGet(
      t,
      _classExtractFieldDescriptor(t, e, "get")
    );
  }
  function _classPrivateFieldSet(t, e, r) {
    return (
      _classApplyDescriptorSet(t, _classExtractFieldDescriptor(t, e, "set"), r),
      r
    );
  }
  function _classPrivateFieldDestructureSet(t, e) {
    return _classApplyDescriptorDestructureSet(
      t,
      _classExtractFieldDescriptor(t, e, "set")
    );
  }
  function _classExtractFieldDescriptor(t, e, r) {
    if (!e.has(t))
      throw new TypeError(
        "attempted to " + r + " private field on non-instance"
      );
    return e.get(t);
  }
  function _classStaticPrivateFieldSpecGet(t, e, r) {
    return (
      _classCheckPrivateStaticAccess(t, e),
      _classCheckPrivateStaticFieldDescriptor(r, "get"),
      _classApplyDescriptorGet(t, r)
    );
  }
  function _classStaticPrivateFieldSpecSet(t, e, r, i) {
    return (
      _classCheckPrivateStaticAccess(t, e),
      _classCheckPrivateStaticFieldDescriptor(r, "set"),
      _classApplyDescriptorSet(t, r, i),
      i
    );
  }
  function _classStaticPrivateMethodGet(t, e, r) {
    return _classCheckPrivateStaticAccess(t, e), r;
  }
  function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
  function _classApplyDescriptorGet(t, e) {
    return e.get ? e.get.call(t) : e.value;
  }
  function _classApplyDescriptorSet(t, e, r) {
    if (e.set) e.set.call(t, r);
    else {
      if (!e.writable)
        throw new TypeError("attempted to set read only private field");
      e.value = r;
    }
  }
  function _classApplyDescriptorDestructureSet(t, e) {
    if (e.set)
      return (
        "__destrObj" in e ||
          (e.__destrObj = {
            set value(r) {
              e.set.call(t, r);
            },
          }),
        e.__destrObj
      );
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    return e;
  }
  function _classStaticPrivateFieldDestructureSet(t, e, r) {
    return (
      _classCheckPrivateStaticAccess(t, e),
      _classCheckPrivateStaticFieldDescriptor(r, "set"),
      _classApplyDescriptorDestructureSet(t, r)
    );
  }
  function _classCheckPrivateStaticAccess(t, e) {
    if (t !== e)
      throw new TypeError("Private static access of wrong provenance");
  }
  function _classCheckPrivateStaticFieldDescriptor(t, e) {
    if (void 0 === t)
      throw new TypeError(
        "attempted to " + e + " private static field before its declaration"
      );
  }
  function _decorate(t, e, r, i) {
    var a = _getDecoratorsApi();
    if (i) for (var n = 0; n < i.length; n++) a = i[n](a);
    var s = e(function (t) {
        a.initializeInstanceElements(t, o.elements);
      }, r),
      o = a.decorateClass(
        _coalesceClassElements(s.d.map(_createElementDescriptor)),
        t
      );
    return (
      a.initializeClassElements(s.F, o.elements),
      a.runClassFinishers(s.F, o.finishers)
    );
  }
  function _getDecoratorsApi() {
    _getDecoratorsApi = function () {
      return t;
    };
    var t = {
      elementsDefinitionOrder: [["method"], ["field"]],
      initializeInstanceElements: function (t, e) {
        ["method", "field"].forEach(function (r) {
          e.forEach(function (e) {
            e.kind === r &&
              "own" === e.placement &&
              this.defineClassElement(t, e);
          }, this);
        }, this);
      },
      initializeClassElements: function (t, e) {
        var r = t.prototype;
        ["method", "field"].forEach(function (i) {
          e.forEach(function (e) {
            var a = e.placement;
            if (e.kind === i && ("static" === a || "prototype" === a)) {
              var n = "static" === a ? t : r;
              this.defineClassElement(n, e);
            }
          }, this);
        }, this);
      },
      defineClassElement: function (t, e) {
        var r = e.descriptor;
        if ("field" === e.kind) {
          var i = e.initializer;
          r = {
            enumerable: r.enumerable,
            writable: r.writable,
            configurable: r.configurable,
            value: void 0 === i ? void 0 : i.call(t),
          };
        }
        Object.defineProperty(t, e.key, r);
      },
      decorateClass: function (t, e) {
        var r = [],
          i = [],
          a = { static: [], prototype: [], own: [] };
        if (
          (t.forEach(function (t) {
            this.addElementPlacement(t, a);
          }, this),
          t.forEach(function (t) {
            if (!_hasDecorators(t)) return r.push(t);
            var e = this.decorateElement(t, a);
            r.push(e.element),
              r.push.apply(r, e.extras),
              i.push.apply(i, e.finishers);
          }, this),
          !e)
        )
          return { elements: r, finishers: i };
        var n = this.decorateConstructor(r, e);
        return i.push.apply(i, n.finishers), (n.finishers = i), n;
      },
      addElementPlacement: function (t, e, r) {
        var i = e[t.placement];
        if (!r && -1 !== i.indexOf(t.key))
          throw new TypeError("Duplicated element (" + t.key + ")");
        i.push(t.key);
      },
      decorateElement: function (t, e) {
        for (
          var r = [], i = [], a = t.decorators, n = a.length - 1;
          n >= 0;
          n--
        ) {
          var s = e[t.placement];
          s.splice(s.indexOf(t.key), 1);
          var o = this.fromElementDescriptor(t),
            h = this.toElementFinisherExtras((0, a[n])(o) || o);
          (t = h.element),
            this.addElementPlacement(t, e),
            h.finisher && i.push(h.finisher);
          var l = h.extras;
          if (l) {
            for (var p = 0; p < l.length; p++)
              this.addElementPlacement(l[p], e);
            r.push.apply(r, l);
          }
        }
        return { element: t, finishers: i, extras: r };
      },
      decorateConstructor: function (t, e) {
        for (var r = [], i = e.length - 1; i >= 0; i--) {
          var a = this.fromClassDescriptor(t),
            n = this.toClassDescriptor((0, e[i])(a) || a);
          if (
            (void 0 !== n.finisher && r.push(n.finisher), void 0 !== n.elements)
          ) {
            t = n.elements;
            for (var s = 0; s < t.length - 1; s++)
              for (var o = s + 1; o < t.length; o++)
                if (t[s].key === t[o].key && t[s].placement === t[o].placement)
                  throw new TypeError("Duplicated element (" + t[s].key + ")");
          }
        }
        return { elements: t, finishers: r };
      },
      fromElementDescriptor: function (t) {
        var e = {
          kind: t.kind,
          key: t.key,
          placement: t.placement,
          descriptor: t.descriptor,
        };
        return (
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Descriptor",
            configurable: !0,
          }),
          "field" === t.kind && (e.initializer = t.initializer),
          e
        );
      },
      toElementDescriptors: function (t) {
        if (void 0 !== t)
          return _toArray(t).map(function (t) {
            var e = this.toElementDescriptor(t);
            return (
              this.disallowProperty(t, "finisher", "An element descriptor"),
              this.disallowProperty(t, "extras", "An element descriptor"),
              e
            );
          }, this);
      },
      toElementDescriptor: function (t) {
        var e = String(t.kind);
        if ("method" !== e && "field" !== e)
          throw new TypeError(
            'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
              e +
              '"'
          );
        var r = _toPropertyKey(t.key),
          i = String(t.placement);
        if ("static" !== i && "prototype" !== i && "own" !== i)
          throw new TypeError(
            'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
              i +
              '"'
          );
        var a = t.descriptor;
        this.disallowProperty(t, "elements", "An element descriptor");
        var n = {
          kind: e,
          key: r,
          placement: i,
          descriptor: Object.assign({}, a),
        };
        return (
          "field" !== e
            ? this.disallowProperty(t, "initializer", "A method descriptor")
            : (this.disallowProperty(
                a,
                "get",
                "The property descriptor of a field descriptor"
              ),
              this.disallowProperty(
                a,
                "set",
                "The property descriptor of a field descriptor"
              ),
              this.disallowProperty(
                a,
                "value",
                "The property descriptor of a field descriptor"
              ),
              (n.initializer = t.initializer)),
          n
        );
      },
      toElementFinisherExtras: function (t) {
        return {
          element: this.toElementDescriptor(t),
          finisher: _optionalCallableProperty(t, "finisher"),
          extras: this.toElementDescriptors(t.extras),
        };
      },
      fromClassDescriptor: function (t) {
        var e = {
          kind: "class",
          elements: t.map(this.fromElementDescriptor, this),
        };
        return (
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Descriptor",
            configurable: !0,
          }),
          e
        );
      },
      toClassDescriptor: function (t) {
        var e = String(t.kind);
        if ("class" !== e)
          throw new TypeError(
            'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
              e +
              '"'
          );
        this.disallowProperty(t, "key", "A class descriptor"),
          this.disallowProperty(t, "placement", "A class descriptor"),
          this.disallowProperty(t, "descriptor", "A class descriptor"),
          this.disallowProperty(t, "initializer", "A class descriptor"),
          this.disallowProperty(t, "extras", "A class descriptor");
        var r = _optionalCallableProperty(t, "finisher");
        return { elements: this.toElementDescriptors(t.elements), finisher: r };
      },
      runClassFinishers: function (t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = (0, e[r])(t);
          if (void 0 !== i) {
            if ("function" != typeof i)
              throw new TypeError("Finishers must return a constructor.");
            t = i;
          }
        }
        return t;
      },
      disallowProperty: function (t, e, r) {
        if (void 0 !== t[e])
          throw new TypeError(r + " can't have a ." + e + " property.");
      },
    };
    return t;
  }
  function _createElementDescriptor(t) {
    var e,
      r = _toPropertyKey(t.key);
    "method" === t.kind
      ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
      : "get" === t.kind
      ? (e = { get: t.value, configurable: !0, enumerable: !1 })
      : "set" === t.kind
      ? (e = { set: t.value, configurable: !0, enumerable: !1 })
      : "field" === t.kind &&
        (e = { configurable: !0, writable: !0, enumerable: !0 });
    var i = {
      kind: "field" === t.kind ? "field" : "method",
      key: r,
      placement: t.static ? "static" : "field" === t.kind ? "own" : "prototype",
      descriptor: e,
    };
    return (
      t.decorators && (i.decorators = t.decorators),
      "field" === t.kind && (i.initializer = t.value),
      i
    );
  }
  function _coalesceGetterSetter(t, e) {
    void 0 !== t.descriptor.get
      ? (e.descriptor.get = t.descriptor.get)
      : (e.descriptor.set = t.descriptor.set);
  }
  function _coalesceClassElements(t) {
    for (
      var e = [],
        r = function (t) {
          return (
            "method" === t.kind &&
            t.key === n.key &&
            t.placement === n.placement
          );
        },
        i = 0;
      i < t.length;
      i++
    ) {
      var a,
        n = t[i];
      if ("method" === n.kind && (a = e.find(r)))
        if (
          _isDataDescriptor(n.descriptor) ||
          _isDataDescriptor(a.descriptor)
        ) {
          if (_hasDecorators(n) || _hasDecorators(a))
            throw new ReferenceError(
              "Duplicated methods (" + n.key + ") can't be decorated."
            );
          a.descriptor = n.descriptor;
        } else {
          if (_hasDecorators(n)) {
            if (_hasDecorators(a))
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for the same property (" +
                  n.key +
                  ")."
              );
            a.decorators = n.decorators;
          }
          _coalesceGetterSetter(n, a);
        }
      else e.push(n);
    }
    return e;
  }
  function _hasDecorators(t) {
    return t.decorators && t.decorators.length;
  }
  function _isDataDescriptor(t) {
    return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
  }
  function _optionalCallableProperty(t, e) {
    var r = t[e];
    if (void 0 !== r && "function" != typeof r)
      throw new TypeError("Expected '" + e + "' to be a function");
    return r;
  }
  function _classPrivateMethodGet(t, e, r) {
    if (!e.has(t))
      throw new TypeError("attempted to get private field on non-instance");
    return r;
  }
  function _checkPrivateRedeclaration(t, e) {
    if (e.has(t))
      throw new TypeError(
        "Cannot initialize the same private elements twice on an object"
      );
  }
  function _classPrivateFieldInitSpec(t, e, r) {
    _checkPrivateRedeclaration(t, e), e.set(t, r);
  }
  function _classPrivateMethodInitSpec(t, e) {
    _checkPrivateRedeclaration(t, e), e.add(t);
  }
  function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
  function _identity(t) {
    return t;
  }
  var extendStatics = function (t, e) {
    return (
      (extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }),
      extendStatics(t, e)
    );
  };
  function __extends(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    function r() {
      this.constructor = t;
    }
    extendStatics(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  }
  var __assign = function () {
    return (
      (__assign =
        Object.assign ||
        function (t) {
          for (var e, r = 1, i = arguments.length; r < i; r++)
            for (var a in (e = arguments[r]))
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return t;
        }),
      __assign.apply(this, arguments)
    );
  };
  function __rest(t, e) {
    var r = {};
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        e.indexOf(i) < 0 &&
        (r[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (i = Object.getOwnPropertySymbols(t); a < i.length; a++)
        e.indexOf(i[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, i[a]) &&
          (r[i[a]] = t[i[a]]);
    }
    return r;
  }
  function __decorate(t, e, r, i) {
    var a,
      n = arguments.length,
      s =
        n < 3
          ? e
          : null === i
          ? (i = Object.getOwnPropertyDescriptor(e, r))
          : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      s = Reflect.decorate(t, e, r, i);
    else
      for (var o = t.length - 1; o >= 0; o--)
        (a = t[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(e, r, s) : a(e, r)) || s);
    return n > 3 && s && Object.defineProperty(e, r, s), s;
  }
  function __param(t, e) {
    return function (r, i) {
      e(r, i, t);
    };
  }
  function __metadata(t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(t, e);
  }
  function __awaiter(t, e, r, i) {
    return new (r || (r = Promise))(function (a, n) {
      function s(t) {
        try {
          h(i.next(t));
        } catch (t) {
          n(t);
        }
      }
      function o(t) {
        try {
          h(i.throw(t));
        } catch (t) {
          n(t);
        }
      }
      function h(t) {
        var e;
        t.done
          ? a(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(s, o);
      }
      h((i = i.apply(t, e || [])).next());
    });
  }
  function __generator(t, e) {
    var r,
      i,
      a,
      n,
      s = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (n = { next: o(0), throw: o(1), return: o(2) }),
      "function" == typeof Symbol &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function o(o) {
      return function (h) {
        return (function (o) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; n && ((n = 0), o[0] && (s = 0)), s; )
            try {
              if (
                ((r = 1),
                i &&
                  (a =
                    2 & o[0]
                      ? i.return
                      : o[0]
                      ? i.throw || ((a = i.return) && a.call(i), 0)
                      : i.next) &&
                  !(a = a.call(i, o[1])).done)
              )
                return a;
              switch (((i = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                case 0:
                case 1:
                  a = o;
                  break;
                case 4:
                  return s.label++, { value: o[1], done: !1 };
                case 5:
                  s.label++, (i = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((a = s.trys),
                    (a = a.length > 0 && a[a.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                    s.label = o[1];
                    break;
                  }
                  if (6 === o[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = o);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(o);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              (o = [6, t]), (i = 0);
            } finally {
              r = a = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, h]);
      };
    }
  }
  var __createBinding = Object.create
    ? function (t, e, r, i) {
        void 0 === i && (i = r);
        var a = Object.getOwnPropertyDescriptor(e, r);
        (a && !("get" in a ? !e.__esModule : a.writable || a.configurable)) ||
          (a = {
            enumerable: !0,
            get: function () {
              return e[r];
            },
          }),
          Object.defineProperty(t, i, a);
      }
    : function (t, e, r, i) {
        void 0 === i && (i = r), (t[i] = e[r]);
      };
  function __exportStar(t, e) {
    for (var r in t)
      "default" === r ||
        Object.prototype.hasOwnProperty.call(e, r) ||
        __createBinding(e, t, r);
  }
  function __values(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      i = 0;
    if (r) return r.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function __read(t, e) {
    var r = "function" == typeof Symbol && t[Symbol.iterator];
    if (!r) return t;
    var i,
      a,
      n = r.call(t),
      s = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(i = n.next()).done; )
        s.push(i.value);
    } catch (t) {
      a = { error: t };
    } finally {
      try {
        i && !i.done && (r = n.return) && r.call(n);
      } finally {
        if (a) throw a.error;
      }
    }
    return s;
  }
  function __spread() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t = t.concat(__read(arguments[e]));
    return t;
  }
  function __spreadArrays() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++)
      t += arguments[e].length;
    var i = Array(t),
      a = 0;
    for (e = 0; e < r; e++)
      for (var n = arguments[e], s = 0, o = n.length; s < o; s++, a++)
        i[a] = n[s];
    return i;
  }
  function __spreadArray(t, e, r) {
    if (r || 2 === arguments.length)
      for (var i, a = 0, n = e.length; a < n; a++)
        (!i && a in e) ||
          (i || (i = Array.prototype.slice.call(e, 0, a)), (i[a] = e[a]));
    return t.concat(i || Array.prototype.slice.call(e));
  }
  function __await(t) {
    return this instanceof __await ? ((this.v = t), this) : new __await(t);
  }
  function __asyncGenerator(t, e, r) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var i,
      a = r.apply(t, e || []),
      n = [];
    return (
      (i = {}),
      s("next"),
      s("throw"),
      s("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i
    );
    function s(t) {
      a[t] &&
        (i[t] = function (e) {
          return new Promise(function (r, i) {
            n.push([t, e, r, i]) > 1 || o(t, e);
          });
        });
    }
    function o(t, e) {
      try {
        !(function (t) {
          t.value instanceof __await
            ? Promise.resolve(t.value.v).then(h, l)
            : p(n[0][2], t);
        })(a[t](e));
      } catch (t) {
        p(n[0][3], t);
      }
    }
    function h(t) {
      o("next", t);
    }
    function l(t) {
      o("throw", t);
    }
    function p(t, e) {
      t(e), n.shift(), n.length && o(n[0][0], n[0][1]);
    }
  }
  function __asyncDelegator(t) {
    var e, r;
    return (
      (e = {}),
      i("next"),
      i("throw", function (t) {
        throw t;
      }),
      i("return"),
      (e[Symbol.iterator] = function () {
        return this;
      }),
      e
    );
    function i(i, a) {
      e[i] = t[i]
        ? function (e) {
            return (r = !r)
              ? { value: __await(t[i](e)), done: "return" === i }
              : a
              ? a(e)
              : e;
          }
        : a;
    }
  }
  function __asyncValues(t) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e,
      r = t[Symbol.asyncIterator];
    return r
      ? r.call(t)
      : ((t =
          "function" == typeof __values ? __values(t) : t[Symbol.iterator]()),
        (e = {}),
        i("next"),
        i("throw"),
        i("return"),
        (e[Symbol.asyncIterator] = function () {
          return this;
        }),
        e);
    function i(r) {
      e[r] =
        t[r] &&
        function (e) {
          return new Promise(function (i, a) {
            (function (t, e, r, i) {
              Promise.resolve(i).then(function (e) {
                t({ value: e, done: r });
              }, e);
            })(i, a, (e = t[r](e)).done, e.value);
          });
        };
    }
  }
  function __makeTemplateObject(t, e) {
    return (
      Object.defineProperty
        ? Object.defineProperty(t, "raw", { value: e })
        : (t.raw = e),
      t
    );
  }
  var __setModuleDefault = Object.create
    ? function (t, e) {
        Object.defineProperty(t, "default", { enumerable: !0, value: e });
      }
    : function (t, e) {
        t.default = e;
      };
  function __importStar(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        "default" !== r &&
          Object.prototype.hasOwnProperty.call(t, r) &&
          __createBinding(e, t, r);
    return __setModuleDefault(e, t), e;
  }
  function __importDefault(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function __classPrivateFieldGet(t, e, r, i) {
    if ("a" === r && !i)
      throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof e ? t !== e || !i : !e.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t);
  }
  function __classPrivateFieldSet(t, e, r, i, a) {
    if ("m" === i) throw new TypeError("Private method is not writable");
    if ("a" === i && !a)
      throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof e ? t !== e || !a : !e.has(t))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return "a" === i ? a.call(t, r) : a ? (a.value = r) : e.set(t, r), r;
  }
  function __classPrivateFieldIn(t, e) {
    if (null === e || ("object" != typeof e && "function" != typeof e))
      throw new TypeError("Cannot use 'in' operator on non-object");
    return "function" == typeof t ? e === t : t.has(e);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var t$3 = window,
    e$9 =
      t$3.ShadowRoot &&
      (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    s$3 = Symbol(),
    n$4 = new WeakMap();
  class o$6 {
    constructor(t, e, r) {
      if (((this._$cssResult$ = !0), r !== s$3))
        throw Error(
          "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
        );
      (this.cssText = t), (this.t = e);
    }
    get styleSheet() {
      var t = this.o,
        e = this.t;
      if (e$9 && void 0 === t) {
        var r = void 0 !== e && 1 === e.length;
        r && (t = n$4.get(e)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
            r && n$4.set(e, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  }
  var r$3 = (t) => new o$6("string" == typeof t ? t : t + "", void 0, s$3),
    i$3 = function (t) {
      for (
        var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
        i < e;
        i++
      )
        r[i - 1] = arguments[i];
      var a =
        1 === t.length
          ? t[0]
          : r.reduce(
              (e, r, i) =>
                e +
                ((t) => {
                  if (!0 === t._$cssResult$) return t.cssText;
                  if ("number" == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                  );
                })(r) +
                t[i + 1],
              t[0]
            );
      return new o$6(a, t, s$3);
    },
    S$1 = (t, e) => {
      e$9
        ? (t.adoptedStyleSheets = e.map((t) =>
            t instanceof CSSStyleSheet ? t : t.styleSheet
          ))
        : e.forEach((e) => {
            var r = document.createElement("style"),
              i = t$3.litNonce;
            void 0 !== i && r.setAttribute("nonce", i),
              (r.textContent = e.cssText),
              t.appendChild(r);
          });
    },
    c$1 = e$9
      ? (t) => t
      : (t) =>
          t instanceof CSSStyleSheet
            ? ((t) => {
                var e = "";
                for (var r of t.cssRules) e += r.cssText;
                return r$3(e);
              })(t)
            : t,
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ s$2,
    e$8 = window,
    r$2 = e$8.trustedTypes,
    h$2 = r$2 ? r$2.emptyScript : "",
    o$5 = e$8.reactiveElementPolyfillSupport,
    n$3 = {
      toAttribute(t, e) {
        switch (e) {
          case Boolean:
            t = t ? h$2 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, e) {
        var r = t;
        switch (e) {
          case Boolean:
            r = null !== t;
            break;
          case Number:
            r = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              r = JSON.parse(t);
            } catch (t) {
              r = null;
            }
        }
        return r;
      },
    },
    a$1 = (t, e) => e !== t && (e == e || t == t),
    l$3 = {
      attribute: !0,
      type: String,
      converter: n$3,
      reflect: !1,
      hasChanged: a$1,
    },
    t$2;
  class d$1 extends HTMLElement {
    constructor() {
      super(),
        (this._$Ei = new Map()),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$El = null),
        this.u();
    }
    static addInitializer(t) {
      var e;
      this.finalize(),
        (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
    }
    static get observedAttributes() {
      this.finalize();
      var t = [];
      return (
        this.elementProperties.forEach((e, r) => {
          var i = this._$Ep(r, e);
          void 0 !== i && (this._$Ev.set(i, r), t.push(i));
        }),
        t
      );
    }
    static createProperty(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l$3;
      if (
        (e.state && (e.attribute = !1),
        this.finalize(),
        this.elementProperties.set(t, e),
        !e.noAccessor && !this.prototype.hasOwnProperty(t))
      ) {
        var r = "symbol" == typeof t ? Symbol() : "__" + t,
          i = this.getPropertyDescriptor(t, r, e);
        void 0 !== i && Object.defineProperty(this.prototype, t, i);
      }
    }
    static getPropertyDescriptor(t, e, r) {
      return {
        get() {
          return this[e];
        },
        set(i) {
          var a = this[t];
          (this[e] = i), this.requestUpdate(t, a, r);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || l$3;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);
      if (
        (t.finalize(),
        void 0 !== t.h && (this.h = [...t.h]),
        (this.elementProperties = new Map(t.elementProperties)),
        (this._$Ev = new Map()),
        this.hasOwnProperty("properties"))
      ) {
        var e = this.properties,
          r = [
            ...Object.getOwnPropertyNames(e),
            ...Object.getOwnPropertySymbols(e),
          ];
        for (var i of r) this.createProperty(i, e[i]);
      }
      return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(t) {
      var e = [];
      if (Array.isArray(t)) {
        var r = new Set(t.flat(1 / 0).reverse());
        for (var i of r) e.unshift(c$1(i));
      } else void 0 !== t && e.push(c$1(t));
      return e;
    }
    static _$Ep(t, e) {
      var r = e.attribute;
      return !1 === r
        ? void 0
        : "string" == typeof r
        ? r
        : "string" == typeof t
        ? t.toLowerCase()
        : void 0;
    }
    u() {
      var t;
      (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$Eg(),
        this.requestUpdate(),
        null === (t = this.constructor.h) ||
          void 0 === t ||
          t.forEach((t) => t(this));
    }
    addController(t) {
      var e, r;
      (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
        void 0 !== this.renderRoot &&
          this.isConnected &&
          (null === (r = t.hostConnected) || void 0 === r || r.call(t));
    }
    removeController(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t, e) => {
        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
      });
    }
    createRenderRoot() {
      var t,
        e =
          null !== (t = this.shadowRoot) && void 0 !== t
            ? t
            : this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (t = this._$ES) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostConnected) || void 0 === e
              ? void 0
              : e.call(t);
          });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      var t;
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostDisconnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
    }
    attributeChangedCallback(t, e, r) {
      this._$AK(t, r);
    }
    _$EO(t, e) {
      var r,
        i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l$3,
        a = this.constructor._$Ep(t, i);
      if (void 0 !== a && !0 === i.reflect) {
        var n = (
          void 0 !==
          (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute)
            ? i.converter
            : n$3
        ).toAttribute(e, i.type);
        (this._$El = t),
          null == n ? this.removeAttribute(a) : this.setAttribute(a, n),
          (this._$El = null);
      }
    }
    _$AK(t, e) {
      var r,
        i = this.constructor,
        a = i._$Ev.get(t);
      if (void 0 !== a && this._$El !== a) {
        var n = i.getPropertyOptions(a),
          s =
            "function" == typeof n.converter
              ? { fromAttribute: n.converter }
              : void 0 !==
                (null === (r = n.converter) || void 0 === r
                  ? void 0
                  : r.fromAttribute)
              ? n.converter
              : n$3;
        (this._$El = a),
          (this[a] = s.fromAttribute(e, n.type)),
          (this._$El = null);
      }
    }
    requestUpdate(t, e, r) {
      var i = !0;
      void 0 !== t &&
        (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || a$1)(
          this[t],
          e
        )
          ? (this._$AL.has(t) || this._$AL.set(t, e),
            !0 === r.reflect &&
              this._$El !== t &&
              (void 0 === this._$EC && (this._$EC = new Map()),
              this._$EC.set(t, r)))
          : (i = !1)),
        !this.isUpdatePending && i && (this._$E_ = this._$Ej());
    }
    _$Ej() {
      var t = this;
      return _asyncToGenerator(function* () {
        t.isUpdatePending = !0;
        try {
          yield t._$E_;
        } catch (e) {
          Promise.reject(e);
        }
        var e = t.scheduleUpdate();
        return null != e && (yield e), !t.isUpdatePending;
      })();
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (this.isUpdatePending) {
        this.hasUpdated,
          this._$Ei &&
            (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
        var e = !1,
          r = this._$AL;
        try {
          (e = this.shouldUpdate(r))
            ? (this.willUpdate(r),
              null === (t = this._$ES) ||
                void 0 === t ||
                t.forEach((t) => {
                  var e;
                  return null === (e = t.hostUpdate) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
              this.update(r))
            : this._$Ek();
        } catch (t) {
          throw ((e = !1), this._$Ek(), t);
        }
        e && this._$AE(r);
      }
    }
    willUpdate(t) {}
    _$AE(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((t) => {
          var e;
          return null === (e = t.hostUpdated) || void 0 === e
            ? void 0
            : e.call(t);
        }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
        this.updated(t);
    }
    _$Ek() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t) {
      return !0;
    }
    update(t) {
      void 0 !== this._$EC &&
        (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
        (this._$EC = void 0)),
        this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
  }
  (d$1.finalized = !0),
    (d$1.elementProperties = new Map()),
    (d$1.elementStyles = []),
    (d$1.shadowRootOptions = { mode: "open" }),
    null == o$5 || o$5({ ReactiveElement: d$1 }),
    (null !== (s$2 = e$8.reactiveElementVersions) && void 0 !== s$2
      ? s$2
      : (e$8.reactiveElementVersions = [])
    ).push("1.4.2");
  var i$2 = window,
    s$1 = i$2.trustedTypes,
    e$7 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
    o$4 = "lit$".concat((Math.random() + "").slice(9), "$"),
    n$2 = "?" + o$4,
    l$2 = "<".concat(n$2, ">"),
    h$1 = document,
    r$1 = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return h$1.createComment(t);
    },
    d = (t) => null === t || ("object" != typeof t && "function" != typeof t),
    u = Array.isArray,
    c = (t) =>
      u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    a = /-->/g,
    f = />/g,
    _ = RegExp(
      ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
      "g"
    ),
    m = /'/g,
    p = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    g = (t) =>
      function (e) {
        for (
          var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          i[a - 1] = arguments[a];
        return { _$litType$: t, strings: e, values: i };
      },
    y = g(1),
    w = g(2),
    x = Symbol.for("lit-noChange"),
    b = Symbol.for("lit-nothing"),
    T = new WeakMap(),
    A = h$1.createTreeWalker(h$1, 129, null, !1),
    E = (t, e) => {
      for (
        var r,
          i = t.length - 1,
          n = [],
          s = 2 === e ? "<svg>" : "",
          o = v,
          h = 0;
        h < i;
        h++
      ) {
        for (
          var l = t[h], c = void 0, u = void 0, d = -1, y = 0;
          y < l.length && ((o.lastIndex = y), null !== (u = o.exec(l)));

        )
          (y = o.lastIndex),
            o === v
              ? "!--" === u[1]
                ? (o = a)
                : void 0 !== u[1]
                ? (o = f)
                : void 0 !== u[2]
                ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), (o = _))
                : void 0 !== u[3] && (o = _)
              : o === _
              ? ">" === u[0]
                ? ((o = null != r ? r : v), (d = -1))
                : void 0 === u[1]
                ? (d = -2)
                : ((d = o.lastIndex - u[2].length),
                  (c = u[1]),
                  (o = void 0 === u[3] ? _ : '"' === u[3] ? p : m))
              : o === p || o === m
              ? (o = _)
              : o === a || o === f
              ? (o = v)
              : ((o = _), (r = void 0));
        var g = o === _ && t[h + 1].startsWith("/>") ? " " : "";
        s +=
          o === v
            ? l + l$2
            : d >= 0
            ? (n.push(c), l.slice(0, d) + "$lit$" + l.slice(d) + o$4 + g)
            : l + o$4 + (-2 === d ? (n.push(void 0), h) : g);
      }
      var b = s + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
      if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return [void 0 !== e$7 ? e$7.createHTML(b) : b, n];
    };
  class C {
    constructor(t, e) {
      var r,
        { strings: i, _$litType$: a } = t;
      this.parts = [];
      var n = 0,
        s = 0,
        o = i.length - 1,
        h = this.parts,
        [l, p] = E(i, a);
      if (
        ((this.el = C.createElement(l, e)),
        (A.currentNode = this.el.content),
        2 === a)
      ) {
        var c = this.el.content,
          f = c.firstChild;
        f.remove(), c.append(...f.childNodes);
      }
      for (; null !== (r = A.nextNode()) && h.length < o; ) {
        if (1 === r.nodeType) {
          if (r.hasAttributes()) {
            var u = [];
            for (var d of r.getAttributeNames())
              if (d.endsWith("$lit$") || d.startsWith(o$4)) {
                var m = p[s++];
                if ((u.push(d), void 0 !== m)) {
                  var y = r.getAttribute(m.toLowerCase() + "$lit$").split(o$4),
                    g = /([.?@])?(.*)/.exec(m);
                  h.push({
                    type: 1,
                    index: n,
                    name: g[2],
                    strings: y,
                    ctor:
                      "." === g[1]
                        ? M
                        : "?" === g[1]
                        ? k
                        : "@" === g[1]
                        ? H
                        : S,
                  });
                } else h.push({ type: 6, index: n });
              }
            for (var v of u) r.removeAttribute(v);
          }
          if ($.test(r.tagName)) {
            var b = r.textContent.split(o$4),
              _ = b.length - 1;
            if (_ > 0) {
              r.textContent = s$1 ? s$1.emptyScript : "";
              for (var P = 0; P < _; P++)
                r.append(b[P], r$1()),
                  A.nextNode(),
                  h.push({ type: 2, index: ++n });
              r.append(b[_], r$1());
            }
          }
        } else if (8 === r.nodeType)
          if (r.data === n$2) h.push({ type: 2, index: n });
          else
            for (var x = -1; -1 !== (x = r.data.indexOf(o$4, x + 1)); )
              h.push({ type: 7, index: n }), (x += o$4.length - 1);
        n++;
      }
    }
    static createElement(t, e) {
      var r = h$1.createElement("template");
      return (r.innerHTML = t), r;
    }
  }
  function P(t, e) {
    var r,
      i,
      a,
      n,
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (e === x) return e;
    var h =
        void 0 !== o
          ? null === (r = s._$Co) || void 0 === r
            ? void 0
            : r[o]
          : s._$Cl,
      l = d(e) ? void 0 : e._$litDirective$;
    return (
      (null == h ? void 0 : h.constructor) !== l &&
        (null === (i = null == h ? void 0 : h._$AO) ||
          void 0 === i ||
          i.call(h, !1),
        void 0 === l ? (h = void 0) : (h = new l(t))._$AT(t, s, o),
        void 0 !== o
          ? ((null !== (a = (n = s)._$Co) && void 0 !== a ? a : (n._$Co = []))[
              o
            ] = h)
          : (s._$Cl = h)),
      void 0 !== h && (e = P(t, h._$AS(t, e.values), h, o)),
      e
    );
  }
  class V {
    constructor(t, e) {
      (this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t) {
      var e,
        {
          el: { content: r },
          parts: i,
        } = this._$AD,
        a = (
          null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
            ? e
            : h$1
        ).importNode(r, !0);
      A.currentNode = a;
      for (var n = A.nextNode(), s = 0, o = 0, h = i[0]; void 0 !== h; ) {
        if (s === h.index) {
          var l = void 0;
          2 === h.type
            ? (l = new N(n, n.nextSibling, this, t))
            : 1 === h.type
            ? (l = new h.ctor(n, h.name, h.strings, this, t))
            : 6 === h.type && (l = new I(n, this, t)),
            this.u.push(l),
            (h = i[++o]);
        }
        s !== (null == h ? void 0 : h.index) && ((n = A.nextNode()), s++);
      }
      return a;
    }
    p(t) {
      var e = 0;
      for (var r of this.u)
        void 0 !== r &&
          (void 0 !== r.strings
            ? (r._$AI(t, r, e), (e += r.strings.length - 2))
            : r._$AI(t[e])),
          e++;
    }
  }
  class N {
    constructor(t, e, r, i) {
      var a;
      (this.type = 2),
        (this._$AH = b),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = e),
        (this._$AM = r),
        (this.options = i),
        (this._$Cm =
          null === (a = null == i ? void 0 : i.isConnected) ||
          void 0 === a ||
          a);
    }
    get _$AU() {
      var t, e;
      return null !==
        (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
        void 0 !== e
        ? e
        : this._$Cm;
    }
    get parentNode() {
      var t = this._$AA.parentNode,
        e = this._$AM;
      return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t) {
      (t = P(
        this,
        t,
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this
      )),
        d(t)
          ? t === b || null == t || "" === t
            ? (this._$AH !== b && this._$AR(), (this._$AH = b))
            : t !== this._$AH && t !== x && this.g(t)
          : void 0 !== t._$litType$
          ? this.$(t)
          : void 0 !== t.nodeType
          ? this.T(t)
          : c(t)
          ? this.k(t)
          : this.g(t);
    }
    O(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : this._$AB;
      return this._$AA.parentNode.insertBefore(t, e);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
    }
    g(t) {
      this._$AH !== b && d(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(h$1.createTextNode(t)),
        (this._$AH = t);
    }
    $(t) {
      var e,
        { values: r, _$litType$: i } = t,
        a =
          "number" == typeof i
            ? this._$AC(t)
            : (void 0 === i.el && (i.el = C.createElement(i.h, this.options)),
              i);
      if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === a)
        this._$AH.p(r);
      else {
        var n = new V(a, this),
          s = n.v(this.options);
        n.p(r), this.T(s), (this._$AH = n);
      }
    }
    _$AC(t) {
      var e = T.get(t.strings);
      return void 0 === e && T.set(t.strings, (e = new C(t))), e;
    }
    k(t) {
      u(this._$AH) || ((this._$AH = []), this._$AR());
      var e,
        r = this._$AH,
        i = 0;
      for (var a of t)
        i === r.length
          ? r.push(
              (e = new N(this.O(r$1()), this.O(r$1()), this, this.options))
            )
          : (e = r[i]),
          e._$AI(a),
          i++;
      i < r.length && (this._$AR(e && e._$AB.nextSibling, i), (r.length = i));
    }
    _$AR() {
      var t,
        e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this._$AA.nextSibling,
        r = arguments.length > 1 ? arguments[1] : void 0;
      for (
        null === (t = this._$AP) || void 0 === t || t.call(this, !1, !0, r);
        e && e !== this._$AB;

      ) {
        var i = e.nextSibling;
        e.remove(), (e = i);
      }
    }
    setConnected(t) {
      var e;
      void 0 === this._$AM &&
        ((this._$Cm = t),
        null === (e = this._$AP) || void 0 === e || e.call(this, t));
    }
  }
  class S {
    constructor(t, e, r, i, a) {
      (this.type = 1),
        (this._$AH = b),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = e),
        (this._$AM = i),
        (this.options = a),
        r.length > 2 || "" !== r[0] || "" !== r[1]
          ? ((this._$AH = Array(r.length - 1).fill(new String())),
            (this.strings = r))
          : (this._$AH = b);
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = this.strings,
        n = !1;
      if (void 0 === a)
        (t = P(this, t, e, 0)),
          (n = !d(t) || (t !== this._$AH && t !== x)) && (this._$AH = t);
      else {
        var s,
          o,
          h = t;
        for (t = a[0], s = 0; s < a.length - 1; s++)
          (o = P(this, h[r + s], e, s)) === x && (o = this._$AH[s]),
            n || (n = !d(o) || o !== this._$AH[s]),
            o === b
              ? (t = b)
              : t !== b && (t += (null != o ? o : "") + a[s + 1]),
            (this._$AH[s] = o);
      }
      n && !i && this.j(t);
    }
    j(t) {
      t === b
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }
  class M extends S {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(t) {
      this.element[this.name] = t === b ? void 0 : t;
    }
  }
  var R = s$1 ? s$1.emptyScript : "";
  class k extends S {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(t) {
      t && t !== b
        ? this.element.setAttribute(this.name, R)
        : this.element.removeAttribute(this.name);
    }
  }
  class H extends S {
    constructor(t, e, r, i, a) {
      super(t, e, r, i, a), (this.type = 5);
    }
    _$AI(t) {
      var e;
      if (
        (t =
          null !==
            (e = P(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this,
              0
            )) && void 0 !== e
            ? e
            : b) !== x
      ) {
        var r = this._$AH,
          i =
            (t === b && r !== b) ||
            t.capture !== r.capture ||
            t.once !== r.once ||
            t.passive !== r.passive,
          a = t !== b && (r === b || i);
        i && this.element.removeEventListener(this.name, this, r),
          a && this.element.addEventListener(this.name, this, t),
          (this._$AH = t);
      }
    }
    handleEvent(t) {
      var e, r;
      "function" == typeof this._$AH
        ? this._$AH.call(
            null !==
              (r =
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.host) && void 0 !== r
              ? r
              : this.element,
            t
          )
        : this._$AH.handleEvent(t);
    }
  }
  class I {
    constructor(t, e, r) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = e),
        (this.options = r);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      P(this, t);
    }
  }
  var L = {
      P: "$lit$",
      A: o$4,
      M: n$2,
      C: 1,
      L: E,
      R: V,
      D: c,
      V: P,
      I: N,
      H: S,
      N: k,
      U: H,
      B: M,
      F: I,
    },
    z = i$2.litHtmlPolyfillSupport;
  null == z || z(C, N),
    (null !== (t$2 = i$2.litHtmlVersions) && void 0 !== t$2
      ? t$2
      : (i$2.litHtmlVersions = [])
    ).push("2.4.0");
  var Z = (t, e, r) => {
      var i,
        a,
        n =
          null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i
            ? i
            : e,
        s = n._$litPart$;
      if (void 0 === s) {
        var o =
          null !== (a = null == r ? void 0 : r.renderBefore) && void 0 !== a
            ? a
            : null;
        n._$litPart$ = s = new N(
          e.insertBefore(r$1(), o),
          o,
          void 0,
          null != r ? r : {}
        );
      }
      return s._$AI(t), s;
    },
    l$1,
    o$3,
    r = d$1;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class s extends d$1 {
    constructor() {
      super(...arguments),
        (this.renderOptions = { host: this }),
        (this._$Do = void 0);
    }
    createRenderRoot() {
      var t,
        e,
        r = super.createRenderRoot();
      return (
        (null !== (t = (e = this.renderOptions).renderBefore) &&
          void 0 !== t) ||
          (e.renderBefore = r.firstChild),
        r
      );
    }
    update(t) {
      var e = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Do = Z(e, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
      return x;
    }
  }
  (s.finalized = !0),
    (s._$litElement$ = !0),
    null === (l$1 = globalThis.litElementHydrateSupport) ||
      void 0 === l$1 ||
      l$1.call(globalThis, { LitElement: s });
  var n$1 = globalThis.litElementPolyfillSupport;
  null == n$1 || n$1({ LitElement: s });
  var h = {
    _$AK: (t, e, r) => {
      t._$AK(e, r);
    },
    _$AL: (t) => t._$AL,
  };
  (null !== (o$3 = globalThis.litElementVersions) && void 0 !== o$3
    ? o$3
    : (globalThis.litElementVersions = [])
  ).push("3.2.2");
  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var o$2 = !1,
    e$6 = (t) => (e) =>
      "function" == typeof e
        ? ((t, e) => (customElements.define(t, e), e))(t, e)
        : ((t, e) => {
            var { kind: r, elements: i } = e;
            return {
              kind: r,
              elements: i,
              finisher(e) {
                customElements.define(t, e);
              },
            };
          })(t, e),
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ i$1 = (t, e) =>
      "method" === e.kind && e.descriptor && !("value" in e.descriptor)
        ? _objectSpread2(
            _objectSpread2({}, e),
            {},
            {
              finisher(r) {
                r.createProperty(e.key, t);
              },
            }
          )
        : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer() {
              "function" == typeof e.initializer &&
                (this[e.key] = e.initializer.call(this));
            },
            finisher(r) {
              r.createProperty(e.key, t);
            },
          };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$5(t) {
    return (e, r) =>
      void 0 !== r
        ? ((t, e, r) => {
            e.constructor.createProperty(r, t);
          })(t, e, r)
        : i$1(t, e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function t$1(t) {
    return e$5(_objectSpread2(_objectSpread2({}, t), {}, { state: !0 }));
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var e$4 = (t, e, r) => {
      Object.defineProperty(e, r, t);
    },
    t = (t, e) => ({
      kind: "method",
      placement: "prototype",
      key: e.key,
      descriptor: t,
    }),
    o$1 = (t) => {
      var { finisher: e, descriptor: r } = t;
      return (t, i) => {
        var a;
        if (void 0 === i) {
          var n = null !== (a = t.originalKey) && void 0 !== a ? a : t.key,
            s =
              null != r
                ? {
                    kind: "method",
                    placement: "prototype",
                    key: n,
                    descriptor: r(t.key),
                  }
                : _objectSpread2(_objectSpread2({}, t), {}, { key: n });
          return (
            null != e &&
              (s.finisher = function (t) {
                e(t, n);
              }),
            s
          );
        }
        var o = t.constructor;
        void 0 !== r && Object.defineProperty(t, i, r(i)), null == e || e(o, i);
      };
    },
    n;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$3(t) {
    return o$1({
      finisher: (e, r) => {
        Object.assign(e.prototype[r], t);
      },
    });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function i(t, e) {
    return o$1({
      descriptor: (r) => {
        var i = {
          get() {
            var e, r;
            return null !==
              (r =
                null === (e = this.renderRoot) || void 0 === e
                  ? void 0
                  : e.querySelector(t)) && void 0 !== r
              ? r
              : null;
          },
          enumerable: !0,
          configurable: !0,
        };
        if (e) {
          var a = "symbol" == typeof r ? Symbol() : "__" + r;
          i.get = function () {
            var e, r;
            return (
              void 0 === this[a] &&
                (this[a] =
                  null !==
                    (r =
                      null === (e = this.renderRoot) || void 0 === e
                        ? void 0
                        : e.querySelector(t)) && void 0 !== r
                    ? r
                    : null),
              this[a]
            );
          };
        }
        return i;
      },
    });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$2(t) {
    return o$1({
      descriptor: (e) => ({
        get() {
          var e, r;
          return null !==
            (r =
              null === (e = this.renderRoot) || void 0 === e
                ? void 0
                : e.querySelectorAll(t)) && void 0 !== r
            ? r
            : [];
        },
        enumerable: !0,
        configurable: !0,
      }),
    });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$1(t) {
    return o$1({
      descriptor: (e) => ({
        get() {
          var e = this;
          return _asyncToGenerator(function* () {
            var r;
            return (
              yield e.updateComplete,
              null === (r = e.renderRoot) || void 0 === r
                ? void 0
                : r.querySelector(t)
            );
          })();
        },
        enumerable: !0,
        configurable: !0,
      }),
    });
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var e =
    null !=
    (null === (n = window.HTMLSlotElement) || void 0 === n
      ? void 0
      : n.prototype.assignedElements)
      ? (t, e) => t.assignedElements(e)
      : (t, e) =>
          t.assignedNodes(e).filter((t) => t.nodeType === Node.ELEMENT_NODE);
  function l(t) {
    var { slot: r, selector: i } = null != t ? t : {};
    return o$1({
      descriptor: (a) => ({
        get() {
          var a,
            n = "slot" + (r ? "[name=".concat(r, "]") : ":not([name])"),
            s =
              null === (a = this.renderRoot) || void 0 === a
                ? void 0
                : a.querySelector(n),
            o = null != s ? e(s, t) : [];
          return i ? o.filter((t) => t.matches(i)) : o;
        },
        enumerable: !0,
        configurable: !0,
      }),
    });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function o(t, e, r) {
    var i,
      a = t;
    return (
      "object" == typeof t ? ((a = t.slot), (i = t)) : (i = { flatten: e }),
      r
        ? l({ slot: a, flatten: e, selector: r })
        : o$1({
            descriptor: (t) => ({
              get() {
                var t,
                  e,
                  r = "slot" + (a ? "[name=".concat(a, "]") : ":not([name])"),
                  n =
                    null === (t = this.renderRoot) || void 0 === t
                      ? void 0
                      : t.querySelector(r);
                return null !== (e = null == n ? void 0 : n.assignedNodes(i)) &&
                  void 0 !== e
                  ? e
                  : [];
              },
              enumerable: !0,
              configurable: !0,
            }),
          })
    );
  }
  var commonjsGlobal =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function getDefaultExportFromCjs(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function getDefaultExportFromNamespaceIfPresent(t) {
    return t && Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function getDefaultExportFromNamespaceIfNotNamed(t) {
    return t &&
      Object.prototype.hasOwnProperty.call(t, "default") &&
      1 === Object.keys(t).length
      ? t.default
      : t;
  }
  function getAugmentedNamespace(t) {
    if (t.__esModule) return t;
    var e = Object.defineProperty({}, "__esModule", { value: !0 });
    return (
      Object.keys(t).forEach(function (r) {
        var i = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(
          e,
          r,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }
        );
      }),
      e
    );
  }
  function commonjsRequire(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var lottie$1 = { exports: {} };
  (function (module, exports) {
    var factory;
    "undefined" != typeof navigator &&
      ((factory = function () {
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function (t) {
            _useWebWorker = !!t;
          },
          getWebWorker = function () {
            return _useWebWorker;
          },
          setLocationHref = function (t) {
            locationHref = t;
          },
          getLocationHref = function () {
            return locationHref;
          };
        function createTag(t) {
          return document.createElement(t);
        }
        function extendPrototype(t, e) {
          var r,
            i,
            a = t.length;
          for (r = 0; r < a; r += 1)
            for (var n in (i = t[r].prototype))
              Object.prototype.hasOwnProperty.call(i, n) &&
                (e.prototype[n] = i[n]);
        }
        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
          function e() {}
          return (e.prototype = t), e;
        }
        var audioControllerFactory = (function () {
            function t(t) {
              (this.audios = []),
                (this.audioFactory = t),
                (this._volume = 1),
                (this._isMuted = !1);
            }
            return (
              (t.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause();
                },
                resume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume();
                },
                setRate: function (t) {
                  var e,
                    r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : window.Howl
                    ? new window.Howl({ src: [t] })
                    : {
                        isPlaying: !1,
                        play: function () {
                          this.isPlaying = !0;
                        },
                        seek: function () {
                          this.isPlaying = !1;
                        },
                        playing: function () {},
                        rate: function () {},
                        setVolume: function () {},
                      };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  (this._volume = t), this._updateVolume();
                },
                mute: function () {
                  (this._isMuted = !0), this._updateVolume();
                },
                unmute: function () {
                  (this._isMuted = !1), this._updateVolume();
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1)
                    this.audios[t].volume(
                      this._volume * (this._isMuted ? 0 : 1)
                    );
                },
              }),
              function () {
                return new t();
              }
            );
          })(),
          createTypedArray = (function () {
            function t(t, e) {
              var r,
                i = 0,
                a = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1;
              }
              for (i = 0; i < e; i += 1) a.push(r);
              return a;
            }
            return "function" == typeof Uint8ClampedArray &&
              "function" == typeof Float32Array
              ? function (e, r) {
                  return "float32" === e
                    ? new Float32Array(r)
                    : "int16" === e
                    ? new Int16Array(r)
                    : "uint8c" === e
                    ? new Uint8ClampedArray(r)
                    : t(e, r);
                }
              : t;
          })();
        function createSizedArray(t) {
          return Array.apply(null, { length: t });
        }
        function _typeof$6(t) {
          return (
            (_typeof$6 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$6(t)
          );
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};
        function ProjectInterface$1() {
          return {};
        }
        !(function () {
          var t,
            e = [
              "abs",
              "acos",
              "acosh",
              "asin",
              "asinh",
              "atan",
              "atanh",
              "atan2",
              "ceil",
              "cbrt",
              "expm1",
              "clz32",
              "cos",
              "cosh",
              "exp",
              "floor",
              "fround",
              "hypot",
              "imul",
              "log",
              "log1p",
              "log2",
              "log10",
              "max",
              "min",
              "pow",
              "random",
              "round",
              "sign",
              "sin",
              "sinh",
              "sqrt",
              "tan",
              "tanh",
              "trunc",
              "E",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "PI",
              "SQRT1_2",
              "SQRT2",
            ],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
        })(),
          (BMMath.random = Math.random),
          (BMMath.abs = function (t) {
            if ("object" === _typeof$6(t) && t.length) {
              var e,
                r = createSizedArray(t.length),
                i = t.length;
              for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
              return r;
            }
            return Math.abs(t);
          });
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = 0.5519;
        function roundValues(t) {
          _shouldRoundValues = !!t;
        }
        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t;
        }
        function styleDiv(t) {
          (t.style.position = "absolute"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.display = "block"),
            (t.style.transformOrigin = "0 0"),
            (t.style.webkitTransformOrigin = "0 0"),
            (t.style.backfaceVisibility = "visible"),
            (t.style.webkitBackfaceVisibility = "visible"),
            (t.style.transformStyle = "preserve-3d"),
            (t.style.webkitTransformStyle = "preserve-3d"),
            (t.style.mozTransformStyle = "preserve-3d");
        }
        function BMEnterFrameEvent(t, e, r, i) {
          (this.type = t),
            (this.currentTime = e),
            (this.totalTime = r),
            (this.direction = i < 0 ? -1 : 1);
        }
        function BMCompleteEvent(t, e) {
          (this.type = t), (this.direction = e < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(t, e, r, i) {
          (this.type = t),
            (this.currentLoop = r),
            (this.totalLoops = e),
            (this.direction = i < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(t, e, r) {
          (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
        }
        function BMDestroyEvent(t, e) {
          (this.type = t), (this.target = e);
        }
        function BMRenderFrameErrorEvent(t, e) {
          (this.type = "renderFrameError"),
            (this.nativeError = t),
            (this.currentTime = e);
        }
        function BMConfigErrorEvent(t) {
          (this.type = "configError"), (this.nativeError = t);
        }
        function BMAnimationConfigErrorEvent(t, e) {
          (this.type = t), (this.nativeError = e);
        }
        var createElementID =
            ((_count = 0),
            function () {
              return idPrefix$1 + "__lottie_element_" + (_count += 1);
            }),
          _count;
        function HSVtoRGB(t, e, r) {
          var i, a, n, s, o, h, l, p;
          switch (
            ((h = r * (1 - e)),
            (l = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e)),
            (p = r * (1 - (1 - o) * e)),
            s % 6)
          ) {
            case 0:
              (i = r), (a = p), (n = h);
              break;
            case 1:
              (i = l), (a = r), (n = h);
              break;
            case 2:
              (i = h), (a = r), (n = p);
              break;
            case 3:
              (i = h), (a = l), (n = r);
              break;
            case 4:
              (i = p), (a = h), (n = r);
              break;
            case 5:
              (i = r), (a = h), (n = l);
          }
          return [i, a, n];
        }
        function RGBtoHSV(t, e, r) {
          var i,
            a = Math.max(t, e, r),
            n = Math.min(t, e, r),
            s = a - n,
            o = 0 === a ? 0 : s / a,
            h = a / 255;
          switch (a) {
            case n:
              i = 0;
              break;
            case t:
              (i = e - r + s * (e < r ? 6 : 0)), (i /= 6 * s);
              break;
            case e:
              (i = r - t + 2 * s), (i /= 6 * s);
              break;
            case r:
              (i = t - e + 4 * s), (i /= 6 * s);
          }
          return [i, o, h];
        }
        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[1] += e),
            r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[2] += e),
            r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[0] += e / 360),
            r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        var rgbToHex = (function () {
            var t,
              e,
              r = [];
            for (t = 0; t < 256; t += 1)
              (e = t.toString(16)), (r[t] = 1 === e.length ? "0" + e : e);
            return function (t, e, i) {
              return (
                t < 0 && (t = 0),
                e < 0 && (e = 0),
                i < 0 && (i = 0),
                "#" + r[t] + r[e] + r[i]
              );
            };
          })(),
          setSubframeEnabled = function (t) {
            subframeEnabled = !!t;
          },
          getSubframeEnabled = function () {
            return subframeEnabled;
          },
          setExpressionsPlugin = function (t) {
            expressionsPlugin = t;
          },
          getExpressionsPlugin = function () {
            return expressionsPlugin;
          },
          setExpressionInterfaces = function (t) {
            expressionsInterfaces = t;
          },
          getExpressionInterfaces = function () {
            return expressionsInterfaces;
          },
          setDefaultCurveSegments = function (t) {
            defaultCurveSegments = t;
          },
          getDefaultCurveSegments = function () {
            return defaultCurveSegments;
          },
          setIdPrefix = function (t) {
            idPrefix$1 = t;
          },
          getIdPrefix = function () {
            return idPrefix$1;
          };
        function createNS(t) {
          return document.createElementNS(svgNS, t);
        }
        function _typeof$5(t) {
          return (
            (_typeof$5 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$5(t)
          );
        }
        var dataManager = (function () {
            var t,
              e,
              r = 1,
              i = [],
              a = {
                onmessage: function () {},
                postMessage: function (e) {
                  t({ data: e });
                },
              },
              _workerSelf = {
                postMessage: function (t) {
                  a.onmessage({ data: t });
                },
              };
            function n() {
              e ||
                ((e = (function (e) {
                  if (window.Worker && window.Blob && getWebWorker()) {
                    var r = new Blob(
                        [
                          "var _workerSelf = self; self.onmessage = ",
                          e.toString(),
                        ],
                        { type: "text/javascript" }
                      ),
                      i = URL.createObjectURL(r);
                    return new Worker(i);
                  }
                  return (t = e), a;
                })(function (t) {
                  if (
                    (_workerSelf.dataManager ||
                      (_workerSelf.dataManager = (function () {
                        function t(a, n) {
                          var s,
                            o,
                            h,
                            l,
                            p,
                            f,
                            u = a.length;
                          for (o = 0; o < u; o += 1)
                            if ("ks" in (s = a[o]) && !s.completed) {
                              if (((s.completed = !0), s.hasMask)) {
                                var d = s.masksProperties;
                                for (l = d.length, h = 0; h < l; h += 1)
                                  if (d[h].pt.k.i) i(d[h].pt.k);
                                  else
                                    for (
                                      f = d[h].pt.k.length, p = 0;
                                      p < f;
                                      p += 1
                                    )
                                      d[h].pt.k[p].s && i(d[h].pt.k[p].s[0]),
                                        d[h].pt.k[p].e && i(d[h].pt.k[p].e[0]);
                              }
                              0 === s.ty
                                ? ((s.layers = e(s.refId, n)), t(s.layers, n))
                                : 4 === s.ty
                                ? r(s.shapes)
                                : 5 === s.ty && c(s);
                            }
                        }
                        function e(t, e) {
                          var r = (function (t, e) {
                            for (var r = 0, i = e.length; r < i; ) {
                              if (e[r].id === t) return e[r];
                              r += 1;
                            }
                            return null;
                          })(t, e);
                          return r
                            ? r.layers.__used
                              ? JSON.parse(JSON.stringify(r.layers))
                              : ((r.layers.__used = !0), r.layers)
                            : null;
                        }
                        function r(t) {
                          var e, a, n;
                          for (e = t.length - 1; e >= 0; e -= 1)
                            if ("sh" === t[e].ty)
                              if (t[e].ks.k.i) i(t[e].ks.k);
                              else
                                for (n = t[e].ks.k.length, a = 0; a < n; a += 1)
                                  t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]),
                                    t[e].ks.k[a].e && i(t[e].ks.k[a].e[0]);
                            else "gr" === t[e].ty && r(t[e].it);
                        }
                        function i(t) {
                          var e,
                            r = t.i.length;
                          for (e = 0; e < r; e += 1)
                            (t.i[e][0] += t.v[e][0]),
                              (t.i[e][1] += t.v[e][1]),
                              (t.o[e][0] += t.v[e][0]),
                              (t.o[e][1] += t.v[e][1]);
                        }
                        function a(t, e) {
                          var r = e ? e.split(".") : [100, 100, 100];
                          return (
                            t[0] > r[0] ||
                            (!(r[0] > t[0]) &&
                              (t[1] > r[1] ||
                                (!(r[1] > t[1]) &&
                                  (t[2] > r[2] || (!(r[2] > t[2]) && null)))))
                          );
                        }
                        var n,
                          s = (function () {
                            var t = [4, 4, 14];
                            function e(t) {
                              var e,
                                r,
                                i,
                                a = t.length;
                              for (e = 0; e < a; e += 1)
                                5 === t[e].ty &&
                                  ((i = void 0),
                                  (i = (r = t[e]).t.d),
                                  (r.t.d = { k: [{ s: i, t: 0 }] }));
                            }
                            return function (r) {
                              if (a(t, r.v) && (e(r.layers), r.assets)) {
                                var i,
                                  n = r.assets.length;
                                for (i = 0; i < n; i += 1)
                                  r.assets[i].layers && e(r.assets[i].layers);
                              }
                            };
                          })(),
                          o =
                            ((n = [4, 7, 99]),
                            function (t) {
                              if (t.chars && !a(n, t.v)) {
                                var e,
                                  i = t.chars.length;
                                for (e = 0; e < i; e += 1) {
                                  var s = t.chars[e];
                                  s.data &&
                                    s.data.shapes &&
                                    (r(s.data.shapes),
                                    (s.data.ip = 0),
                                    (s.data.op = 99999),
                                    (s.data.st = 0),
                                    (s.data.sr = 1),
                                    (s.data.ks = {
                                      p: { k: [0, 0], a: 0 },
                                      s: { k: [100, 100], a: 0 },
                                      a: { k: [0, 0], a: 0 },
                                      r: { k: 0, a: 0 },
                                      o: { k: 100, a: 0 },
                                    }),
                                    t.chars[e].t ||
                                      (s.data.shapes.push({ ty: "no" }),
                                      s.data.shapes[0].it.push({
                                        p: { k: [0, 0], a: 0 },
                                        s: { k: [100, 100], a: 0 },
                                        a: { k: [0, 0], a: 0 },
                                        r: { k: 0, a: 0 },
                                        o: { k: 100, a: 0 },
                                        sk: { k: 0, a: 0 },
                                        sa: { k: 0, a: 0 },
                                        ty: "tr",
                                      })));
                                }
                              }
                            }),
                          h = (function () {
                            var t = [5, 7, 15];
                            function e(t) {
                              var e,
                                r,
                                i = t.length;
                              for (e = 0; e < i; e += 1)
                                5 === t[e].ty &&
                                  ((r = void 0),
                                  "number" == typeof (r = t[e].t.p).a &&
                                    (r.a = { a: 0, k: r.a }),
                                  "number" == typeof r.p &&
                                    (r.p = { a: 0, k: r.p }),
                                  "number" == typeof r.r &&
                                    (r.r = { a: 0, k: r.r }));
                            }
                            return function (r) {
                              if (a(t, r.v) && (e(r.layers), r.assets)) {
                                var i,
                                  n = r.assets.length;
                                for (i = 0; i < n; i += 1)
                                  r.assets[i].layers && e(r.assets[i].layers);
                              }
                            };
                          })(),
                          l = (function () {
                            var t = [4, 1, 9];
                            function e(t) {
                              var r,
                                i,
                                a,
                                n = t.length;
                              for (r = 0; r < n; r += 1)
                                if ("gr" === t[r].ty) e(t[r].it);
                                else if ("fl" === t[r].ty || "st" === t[r].ty)
                                  if (t[r].c.k && t[r].c.k[0].i)
                                    for (
                                      a = t[r].c.k.length, i = 0;
                                      i < a;
                                      i += 1
                                    )
                                      t[r].c.k[i].s &&
                                        ((t[r].c.k[i].s[0] /= 255),
                                        (t[r].c.k[i].s[1] /= 255),
                                        (t[r].c.k[i].s[2] /= 255),
                                        (t[r].c.k[i].s[3] /= 255)),
                                        t[r].c.k[i].e &&
                                          ((t[r].c.k[i].e[0] /= 255),
                                          (t[r].c.k[i].e[1] /= 255),
                                          (t[r].c.k[i].e[2] /= 255),
                                          (t[r].c.k[i].e[3] /= 255));
                                  else
                                    (t[r].c.k[0] /= 255),
                                      (t[r].c.k[1] /= 255),
                                      (t[r].c.k[2] /= 255),
                                      (t[r].c.k[3] /= 255);
                            }
                            function r(t) {
                              var r,
                                i = t.length;
                              for (r = 0; r < i; r += 1)
                                4 === t[r].ty && e(t[r].shapes);
                            }
                            return function (e) {
                              if (a(t, e.v) && (r(e.layers), e.assets)) {
                                var i,
                                  n = e.assets.length;
                                for (i = 0; i < n; i += 1)
                                  e.assets[i].layers && r(e.assets[i].layers);
                              }
                            };
                          })(),
                          p = (function () {
                            var t = [4, 4, 18];
                            function e(t) {
                              var r, i, a;
                              for (r = t.length - 1; r >= 0; r -= 1)
                                if ("sh" === t[r].ty)
                                  if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                  else
                                    for (
                                      a = t[r].ks.k.length, i = 0;
                                      i < a;
                                      i += 1
                                    )
                                      t[r].ks.k[i].s &&
                                        (t[r].ks.k[i].s[0].c = t[r].closed),
                                        t[r].ks.k[i].e &&
                                          (t[r].ks.k[i].e[0].c = t[r].closed);
                                else "gr" === t[r].ty && e(t[r].it);
                            }
                            function r(t) {
                              var r,
                                i,
                                a,
                                n,
                                s,
                                o,
                                h = t.length;
                              for (i = 0; i < h; i += 1) {
                                if ((r = t[i]).hasMask) {
                                  var l = r.masksProperties;
                                  for (n = l.length, a = 0; a < n; a += 1)
                                    if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                    else
                                      for (
                                        o = l[a].pt.k.length, s = 0;
                                        s < o;
                                        s += 1
                                      )
                                        l[a].pt.k[s].s &&
                                          (l[a].pt.k[s].s[0].c = l[a].cl),
                                          l[a].pt.k[s].e &&
                                            (l[a].pt.k[s].e[0].c = l[a].cl);
                                }
                                4 === r.ty && e(r.shapes);
                              }
                            }
                            return function (e) {
                              if (a(t, e.v) && (r(e.layers), e.assets)) {
                                var i,
                                  n = e.assets.length;
                                for (i = 0; i < n; i += 1)
                                  e.assets[i].layers && r(e.assets[i].layers);
                              }
                            };
                          })();
                        function c(t) {
                          0 === t.t.a.length && t.t.p;
                        }
                        var f = {
                          completeData: function (r) {
                            r.__complete ||
                              (l(r),
                              s(r),
                              o(r),
                              h(r),
                              p(r),
                              t(r.layers, r.assets),
                              (function (r, i) {
                                if (r) {
                                  var a = 0,
                                    n = r.length;
                                  for (a = 0; a < n; a += 1)
                                    1 === r[a].t &&
                                      ((r[a].data.layers = e(
                                        r[a].data.refId,
                                        i
                                      )),
                                      t(r[a].data.layers, i));
                                }
                              })(r.chars, r.assets),
                              (r.__complete = !0));
                          },
                        };
                        return (
                          (f.checkColors = l),
                          (f.checkChars = o),
                          (f.checkPathProperties = h),
                          (f.checkShapes = p),
                          (f.completeLayers = t),
                          f
                        );
                      })()),
                    _workerSelf.assetLoader ||
                      (_workerSelf.assetLoader = (function () {
                        function t(t) {
                          var e = t.getResponseHeader("content-type");
                          return (e &&
                            "json" === t.responseType &&
                            -1 !== e.indexOf("json")) ||
                            (t.response && "object" === _typeof$5(t.response))
                            ? t.response
                            : t.response && "string" == typeof t.response
                            ? JSON.parse(t.response)
                            : t.responseText
                            ? JSON.parse(t.responseText)
                            : null;
                        }
                        return {
                          load: function (e, r, i, a) {
                            var n,
                              s = new XMLHttpRequest();
                            try {
                              s.responseType = "json";
                            } catch (t) {}
                            s.onreadystatechange = function () {
                              if (4 === s.readyState)
                                if (200 === s.status) (n = t(s)), i(n);
                                else
                                  try {
                                    (n = t(s)), i(n);
                                  } catch (t) {
                                    a && a(t);
                                  }
                            };
                            try {
                              s.open(["G", "E", "T"].join(""), e, !0);
                            } catch (t) {
                              s.open(["G", "E", "T"].join(""), r + "/" + e, !0);
                            }
                            s.send();
                          },
                        };
                      })()),
                    "loadAnimation" === t.data.type)
                  )
                    _workerSelf.assetLoader.load(
                      t.data.path,
                      t.data.fullPath,
                      function (e) {
                        _workerSelf.dataManager.completeData(e),
                          _workerSelf.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                      },
                      function () {
                        _workerSelf.postMessage({
                          id: t.data.id,
                          status: "error",
                        });
                      }
                    );
                  else if ("complete" === t.data.type) {
                    var e = t.data.animation;
                    _workerSelf.dataManager.completeData(e),
                      _workerSelf.postMessage({
                        id: t.data.id,
                        payload: e,
                        status: "success",
                      });
                  } else
                    "loadData" === t.data.type &&
                      _workerSelf.assetLoader.load(
                        t.data.path,
                        t.data.fullPath,
                        function (e) {
                          _workerSelf.postMessage({
                            id: t.data.id,
                            payload: e,
                            status: "success",
                          });
                        },
                        function () {
                          _workerSelf.postMessage({
                            id: t.data.id,
                            status: "error",
                          });
                        }
                      );
                })),
                (e.onmessage = function (t) {
                  var e = t.data,
                    r = e.id,
                    a = i[r];
                  (i[r] = null),
                    "success" === e.status
                      ? a.onComplete(e.payload)
                      : a.onError && a.onError();
                }));
            }
            function s(t, e) {
              var a = "processId_" + (r += 1);
              return (i[a] = { onComplete: t, onError: e }), a;
            }
            return {
              loadAnimation: function (t, r, i) {
                n();
                var a = s(r, i);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: a,
                });
              },
              loadData: function (t, r, i) {
                n();
                var a = s(r, i);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: a,
                });
              },
              completeAnimation: function (t, r, i) {
                n();
                var a = s(r, i);
                e.postMessage({ type: "complete", animation: t, id: a });
              },
            };
          })(),
          ImagePreloader = (function () {
            var t = (function () {
              var t = createTag("canvas");
              (t.width = 1), (t.height = 1);
              var e = t.getContext("2d");
              return (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t;
            })();
            function e() {
              (this.loadedAssets += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function r() {
              (this.loadedFootagesCount += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function i(t, e, r) {
              var i = "";
              if (t.e) i = t.p;
              else if (e) {
                var a = t.p;
                -1 !== a.indexOf("images/") && (a = a.split("/")[1]),
                  (i = e + a);
              } else (i = r), (i += t.u ? t.u : ""), (i += t.p);
              return i;
            }
            function a(t) {
              var e = 0,
                r = setInterval(
                  function () {
                    (t.getBBox().width || e > 500) &&
                      (this._imageLoaded(), clearInterval(r)),
                      (e += 1);
                  }.bind(this),
                  50
                );
            }
            function n(t) {
              var e = { assetData: t },
                r = i(t, this.assetsPath, this.path);
              return (
                dataManager.loadData(
                  r,
                  function (t) {
                    (e.img = t), this._footageLoaded();
                  }.bind(this),
                  function () {
                    (e.img = {}), this._footageLoaded();
                  }.bind(this)
                ),
                e
              );
            }
            function s() {
              (this._imageLoaded = e.bind(this)),
                (this._footageLoaded = r.bind(this)),
                (this.testImageLoaded = a.bind(this)),
                (this.createFootageData = n.bind(this)),
                (this.assetsPath = ""),
                (this.path = ""),
                (this.totalImages = 0),
                (this.totalFootages = 0),
                (this.loadedAssets = 0),
                (this.loadedFootagesCount = 0),
                (this.imagesLoadedCb = null),
                (this.images = []);
            }
            return (
              (s.prototype = {
                loadAssets: function (t, e) {
                  var r;
                  this.imagesLoadedCb = e;
                  var i = t.length;
                  for (r = 0; r < i; r += 1)
                    t[r].layers ||
                      (t[r].t && "seq" !== t[r].t
                        ? 3 === t[r].t &&
                          ((this.totalFootages += 1),
                          this.images.push(this.createFootageData(t[r])))
                        : ((this.totalImages += 1),
                          this.images.push(this._createImageData(t[r]))));
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || "";
                },
                setPath: function (t) {
                  this.path = t || "";
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  (this.imagesLoadedCb = null), (this.images.length = 0);
                },
                getAsset: function (t) {
                  for (var e = 0, r = this.images.length; e < r; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    a = createTag("img");
                  (a.crossOrigin = "anonymous"),
                    a.addEventListener("load", this._imageLoaded, !1),
                    a.addEventListener(
                      "error",
                      function () {
                        (n.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    (a.src = r);
                  var n = { img: a, assetData: e };
                  return n;
                },
                createImageData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    a = createNS("image");
                  isSafari
                    ? this.testImageLoaded(a)
                    : a.addEventListener("load", this._imageLoaded, !1),
                    a.addEventListener(
                      "error",
                      function () {
                        (n.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                    this._elementHelper.append
                      ? this._elementHelper.append(a)
                      : this._elementHelper.appendChild(a);
                  var n = { img: a, assetData: e };
                  return n;
                },
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: function (t, e) {
                  "svg" === t
                    ? ((this._elementHelper = e),
                      (this._createImageData = this.createImageData.bind(this)))
                    : (this._createImageData = this.createImgData.bind(this));
                },
              }),
              s
            );
          })();
        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function (t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e);
          },
          addEventListener: function (t, e) {
            return (
              this._cbs[t] || (this._cbs[t] = []),
              this._cbs[t].push(e),
              function () {
                this.removeEventListener(t, e);
              }.bind(this)
            );
          },
          removeEventListener: function (t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i; )
                  this._cbs[t][r] === e &&
                    (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)),
                    (r += 1);
                this._cbs[t].length || (this._cbs[t] = null);
              }
            } else this._cbs[t] = null;
          },
        };
        var markerParser = (function () {
            function t(t) {
              for (
                var e, r = t.split("\r\n"), i = {}, a = 0, n = 0;
                n < r.length;
                n += 1
              )
                2 === (e = r[n].split(":")).length &&
                  ((i[e[0]] = e[1].trim()), (a += 1));
              if (0 === a) throw new Error();
              return i;
            }
            return function (e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var a = e[i],
                  n = { time: a.tm, duration: a.dr };
                try {
                  n.payload = JSON.parse(e[i].cm);
                } catch (r) {
                  try {
                    n.payload = t(e[i].cm);
                  } catch (t) {
                    n.payload = { name: e[i].cm };
                  }
                }
                r.push(n);
              }
              return r;
            };
          })(),
          ProjectInterface = (function () {
            function t(t) {
              this.compositions.push(t);
            }
            return function () {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                  if (
                    this.compositions[e].data &&
                    this.compositions[e].data.nm === t
                  )
                    return (
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame),
                      this.compositions[e].compInterface
                    );
                  e += 1;
                }
                return null;
              }
              return (
                (e.compositions = []),
                (e.currentFrame = 0),
                (e.registerComposition = t),
                e
              );
            };
          })(),
          renderers = {},
          registerRenderer = function (t, e) {
            renderers[t] = e;
          };
        function getRenderer(t) {
          return renderers[t];
        }
        function _typeof$4(t) {
          return (
            (_typeof$4 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$4(t)
          );
        }
        var AnimationItem = function () {
          (this._cbs = []),
            (this.name = ""),
            (this.path = ""),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.firstFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = createElementID()),
            (this.assetsPath = ""),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.isSubframeEnabled = getSubframeEnabled()),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = ProjectInterface()),
            (this.imagePreloader = new ImagePreloader()),
            (this.audioController = audioControllerFactory()),
            (this.markers = []),
            (this.configAnimation = this.configAnimation.bind(this)),
            (this.onSetupError = this.onSetupError.bind(this)),
            (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
            (this.drawnFrameEvent = new BMEnterFrameEvent(
              "drawnFrame",
              0,
              0,
              0
            ));
        };
        extendPrototype([BaseEvent], AnimationItem),
          (AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) &&
              (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            (this.renderer = new r(this, t.rendererSettings)),
              this.imagePreloader.setCacheType(
                e,
                this.renderer.globalData.defs
              ),
              this.renderer.setProjectInterface(this.projectInterface),
              (this.animType = e),
              "" === t.loop ||
              null === t.loop ||
              void 0 === t.loop ||
              !0 === t.loop
                ? (this.loop = !0)
                : !1 === t.loop
                ? (this.loop = !1)
                : (this.loop = parseInt(t.loop, 10)),
              (this.autoplay = !("autoplay" in t) || t.autoplay),
              (this.name = t.name ? t.name : ""),
              (this.autoloadSegments =
                !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ||
                t.autoloadSegments),
              (this.assetsPath = t.assetsPath),
              (this.initialSegment = t.initialSegment),
              t.audioFactory &&
                this.audioController.setAudioFactory(t.audioFactory),
              t.animationData
                ? this.setupAnimation(t.animationData)
                : t.path &&
                  (-1 !== t.path.lastIndexOf("\\")
                    ? (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("\\") + 1
                      ))
                    : (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("/") + 1
                      )),
                  (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                  (this.fileName = this.fileName.substr(
                    0,
                    this.fileName.lastIndexOf(".json")
                  )),
                  dataManager.loadAnimation(
                    t.path,
                    this.configAnimation,
                    this.onSetupError
                  ));
          }),
          (AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed");
          }),
          (AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation);
          }),
          (AnimationItem.prototype.setData = function (t, e) {
            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
            var r = { wrapper: t, animationData: e },
              i = t.attributes;
            (r.path = i.getNamedItem("data-animation-path")
              ? i.getNamedItem("data-animation-path").value
              : i.getNamedItem("data-bm-path")
              ? i.getNamedItem("data-bm-path").value
              : i.getNamedItem("bm-path")
              ? i.getNamedItem("bm-path").value
              : ""),
              (r.animType = i.getNamedItem("data-anim-type")
                ? i.getNamedItem("data-anim-type").value
                : i.getNamedItem("data-bm-type")
                ? i.getNamedItem("data-bm-type").value
                : i.getNamedItem("bm-type")
                ? i.getNamedItem("bm-type").value
                : i.getNamedItem("data-bm-renderer")
                ? i.getNamedItem("data-bm-renderer").value
                : i.getNamedItem("bm-renderer")
                ? i.getNamedItem("bm-renderer").value
                : "canvas");
            var a = i.getNamedItem("data-anim-loop")
              ? i.getNamedItem("data-anim-loop").value
              : i.getNamedItem("data-bm-loop")
              ? i.getNamedItem("data-bm-loop").value
              : i.getNamedItem("bm-loop")
              ? i.getNamedItem("bm-loop").value
              : "";
            "false" === a
              ? (r.loop = !1)
              : "true" === a
              ? (r.loop = !0)
              : "" !== a && (r.loop = parseInt(a, 10));
            var n = i.getNamedItem("data-anim-autoplay")
              ? i.getNamedItem("data-anim-autoplay").value
              : i.getNamedItem("data-bm-autoplay")
              ? i.getNamedItem("data-bm-autoplay").value
              : !i.getNamedItem("bm-autoplay") ||
                i.getNamedItem("bm-autoplay").value;
            (r.autoplay = "false" !== n),
              (r.name = i.getNamedItem("data-name")
                ? i.getNamedItem("data-name").value
                : i.getNamedItem("data-bm-name")
                ? i.getNamedItem("data-bm-name").value
                : i.getNamedItem("bm-name")
                ? i.getNamedItem("bm-name").value
                : ""),
              "false" ===
                (i.getNamedItem("data-anim-prerender")
                  ? i.getNamedItem("data-anim-prerender").value
                  : i.getNamedItem("data-bm-prerender")
                  ? i.getNamedItem("data-bm-prerender").value
                  : i.getNamedItem("bm-prerender")
                  ? i.getNamedItem("bm-prerender").value
                  : "") && (r.prerender = !1),
              this.setParams(r);
          }),
          (AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op &&
              ((this.animationData.op = t.op),
              (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
            var e,
              r,
              i = this.animationData.layers,
              a = i.length,
              n = t.layers,
              s = n.length;
            for (r = 0; r < s; r += 1)
              for (e = 0; e < a; ) {
                if (i[e].id === n[r].id) {
                  i[e] = n[r];
                  break;
                }
                e += 1;
              }
            if (
              ((t.chars || t.fonts) &&
                (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(
                  t.fonts,
                  this.renderer.globalData.defs
                )),
              t.assets)
            )
              for (a = t.assets.length, e = 0; e < a; e += 1)
                this.animationData.assets.push(t.assets[e]);
            (this.animationData.__complete = !1),
              dataManager.completeAnimation(
                this.animationData,
                this.onSegmentComplete
              );
          }),
          (AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment();
          }),
          (AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
              return (
                this.trigger("data_ready"),
                void (this.timeCompleted = this.totalFrames)
              );
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            (this.segmentPos += 1),
              dataManager.loadData(
                r,
                this.includeLayers.bind(this),
                function () {
                  this.trigger("data_failed");
                }.bind(this)
              );
          }),
          (AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments ||
              (this.timeCompleted = this.totalFrames),
              this.loadNextSegment();
          }),
          (AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded();
          }),
          (AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(
                this.animationData.assets,
                this.imagesLoaded.bind(this)
              );
          }),
          (AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
              try {
                (this.animationData = t),
                  this.initialSegment
                    ? ((this.totalFrames = Math.floor(
                        this.initialSegment[1] - this.initialSegment[0]
                      )),
                      (this.firstFrame = Math.round(this.initialSegment[0])))
                    : ((this.totalFrames = Math.floor(
                        this.animationData.op - this.animationData.ip
                      )),
                      (this.firstFrame = Math.round(this.animationData.ip))),
                  this.renderer.configAnimation(t),
                  t.assets || (t.assets = []),
                  (this.assets = this.animationData.assets),
                  (this.frameRate = this.animationData.fr),
                  (this.frameMult = this.animationData.fr / 1e3),
                  this.renderer.searchExtraCompositions(t.assets),
                  (this.markers = markerParser(t.markers || [])),
                  this.trigger("config_ready"),
                  this.preloadImages(),
                  this.loadSegments(),
                  this.updaFrameModifier(),
                  this.waitForFontsLoaded(),
                  this.isPaused && this.audioController.pause();
              } catch (t) {
                this.triggerConfigError(t);
              }
          }),
          (AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }),
          (AnimationItem.prototype.checkLoaded = function () {
            if (
              !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() ||
                "canvas" !== this.renderer.rendererType) &&
              this.imagePreloader.loadedFootages()
            ) {
              this.isLoaded = !0;
              var t = getExpressionsPlugin();
              t && t.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0
                ),
                this.gotoFrame(),
                this.autoplay && this.play();
            }
          }),
          (AnimationItem.prototype.resize = function (t, e) {
            var r = "number" == typeof t ? t : void 0,
              i = "number" == typeof e ? e : void 0;
            this.renderer.updateContainerSize(r, i);
          }),
          (AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
          }),
          (AnimationItem.prototype.gotoFrame = function () {
            (this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame),
              this.timeCompleted !== this.totalFrames &&
                this.currentFrame > this.timeCompleted &&
                (this.currentFrame = this.timeCompleted),
              this.trigger("enterFrame"),
              this.renderFrame(),
              this.trigger("drawnFrame");
          }),
          (AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          }),
          (AnimationItem.prototype.play = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused &&
                ((this.isPaused = !1),
                this.trigger("_pause"),
                this.audioController.resume(),
                this._idle && ((this._idle = !1), this.trigger("_active"))));
          }),
          (AnimationItem.prototype.pause = function (t) {
            (t && this.name !== t) ||
              (!1 === this.isPaused &&
                ((this.isPaused = !0),
                this.trigger("_play"),
                (this._idle = !0),
                this.trigger("_idle"),
                this.audioController.pause()));
          }),
          (AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused ? this.play() : this.pause());
          }),
          (AnimationItem.prototype.stop = function (t) {
            (t && this.name !== t) ||
              (this.pause(),
              (this.playCount = 0),
              (this._completedLoop = !1),
              this.setCurrentRawFrameValue(0));
          }),
          (AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
              if ((e = this.markers[r]).payload && e.payload.name === t)
                return e;
            return null;
          }),
          (AnimationItem.prototype.goToAndStop = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var a = this.getMarkerData(t);
                a && this.goToAndStop(a.time, !0);
              } else
                e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          }),
          (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var a = this.getMarkerData(t);
                a &&
                  (a.duration
                    ? this.playSegments([a.time, a.time + a.duration], !0)
                    : this.goToAndStop(a.time, !0));
              } else this.goToAndStop(i, e, r);
              this.play();
            }
          }),
          (AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier,
                r = !1;
              e >= this.totalFrames - 1 && this.frameModifier > 0
                ? this.loop && this.playCount !== this.loop
                  ? e >= this.totalFrames
                    ? ((this.playCount += 1),
                      this.checkSegments(e % this.totalFrames) ||
                        (this.setCurrentRawFrameValue(e % this.totalFrames),
                        (this._completedLoop = !0),
                        this.trigger("loopComplete")))
                    : this.setCurrentRawFrameValue(e)
                  : this.checkSegments(
                      e > this.totalFrames ? e % this.totalFrames : 0
                    ) || ((r = !0), (e = this.totalFrames - 1))
                : e < 0
                ? this.checkSegments(e % this.totalFrames) ||
                  (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                    ? ((r = !0), (e = 0))
                    : (this.setCurrentRawFrameValue(
                        this.totalFrames + (e % this.totalFrames)
                      ),
                      this._completedLoop
                        ? this.trigger("loopComplete")
                        : (this._completedLoop = !0)))
                : this.setCurrentRawFrameValue(e),
                r &&
                  (this.setCurrentRawFrameValue(e),
                  this.pause(),
                  this.trigger("complete"));
            }
          }),
          (AnimationItem.prototype.adjustSegment = function (t, e) {
            (this.playCount = 0),
              t[1] < t[0]
                ? (this.frameModifier > 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(-1)),
                  (this.totalFrames = t[0] - t[1]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[1]),
                  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                : t[1] > t[0] &&
                  (this.frameModifier < 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(1)),
                  (this.totalFrames = t[1] - t[0]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[0]),
                  this.setCurrentRawFrameValue(0.001 + e)),
              this.trigger("segmentStart");
          }),
          (AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            this.isPaused &&
              (this.currentRawFrame + this.firstFrame < t
                ? (r = t)
                : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
              (this.firstFrame = t),
              (this.totalFrames = e - t),
              (this.timeCompleted = this.totalFrames),
              -1 !== r && this.goToAndStop(r, !0);
          }),
          (AnimationItem.prototype.playSegments = function (t, e) {
            if (
              (e && (this.segments.length = 0), "object" === _typeof$4(t[0]))
            ) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) this.segments.push(t[r]);
            } else this.segments.push(t);
            this.segments.length &&
              e &&
              this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play();
          }),
          (AnimationItem.prototype.resetSegments = function (t) {
            (this.segments.length = 0),
              this.segments.push([
                this.animationData.ip,
                this.animationData.op,
              ]),
              t && this.checkSegments(0);
          }),
          (AnimationItem.prototype.checkSegments = function (t) {
            return (
              !!this.segments.length &&
              (this.adjustSegment(this.segments.shift(), t), !0)
            );
          }),
          (AnimationItem.prototype.destroy = function (t) {
            (t && this.name !== t) ||
              !this.renderer ||
              (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger("destroy"),
              (this._cbs = null),
              (this.onEnterFrame = null),
              (this.onLoopComplete = null),
              (this.onComplete = null),
              (this.onSegmentStart = null),
              (this.onDestroy = null),
              (this.renderer = null),
              (this.renderer = null),
              (this.imagePreloader = null),
              (this.projectInterface = null));
          }),
          (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            (this.currentRawFrame = t), this.gotoFrame();
          }),
          (AnimationItem.prototype.setSpeed = function (t) {
            (this.playSpeed = t), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setDirection = function (t) {
            (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
          }),
          (AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
          }),
          (AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
          }),
          (AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
          }),
          (AnimationItem.prototype.updaFrameModifier = function () {
            (this.frameModifier =
              this.frameMult * this.playSpeed * this.playDirection),
              this.audioController.setRate(this.playSpeed * this.playDirection);
          }),
          (AnimationItem.prototype.getPath = function () {
            return this.path;
          }),
          (AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
              var r = t.p;
              -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                (e = this.assetsPath + r);
            } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
            return e;
          }),
          (AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
              if (t === this.assets[e].id) return this.assets[e];
              e += 1;
            }
            return null;
          }),
          (AnimationItem.prototype.hide = function () {
            this.renderer.hide();
          }),
          (AnimationItem.prototype.show = function () {
            this.renderer.show();
          }),
          (AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          }),
          (AnimationItem.prototype.updateDocumentData = function (t, e, r) {
            try {
              this.renderer.getElementByPath(t).updateDocumentData(e, r);
            } catch (t) {}
          }),
          (AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case "enterFrame":
                  this.triggerEvent(
                    t,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier
                    )
                  );
                  break;
                case "drawnFrame":
                  (this.drawnFrameEvent.currentTime = this.currentFrame),
                    (this.drawnFrameEvent.totalTime = this.totalFrames),
                    (this.drawnFrameEvent.direction = this.frameModifier),
                    this.triggerEvent(t, this.drawnFrameEvent);
                  break;
                case "loopComplete":
                  this.triggerEvent(
                    t,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult
                    )
                  );
                  break;
                case "complete":
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(
                    t,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames
                    )
                  );
                  break;
                case "destroy":
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            "enterFrame" === t &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(
                  t,
                  this.currentFrame,
                  this.totalFrames,
                  this.frameMult
                )
              ),
              "loopComplete" === t &&
                this.onLoopComplete &&
                this.onLoopComplete.call(
                  this,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                ),
              "complete" === t &&
                this.onComplete &&
                this.onComplete.call(
                  this,
                  new BMCompleteEvent(t, this.frameMult)
                ),
              "segmentStart" === t &&
                this.onSegmentStart &&
                this.onSegmentStart.call(
                  this,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                ),
              "destroy" === t &&
                this.onDestroy &&
                this.onDestroy.call(this, new BMDestroyEvent(t, this));
          }),
          (AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e);
          }),
          (AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e);
          });
        var animationManager = (function () {
            var t = {},
              e = [],
              r = 0,
              i = 0,
              a = 0,
              n = !0,
              s = !1;
            function o(t) {
              for (var r = 0, a = t.target; r < i; )
                e[r].animation === a &&
                  (e.splice(r, 1), (r -= 1), (i -= 1), a.isPaused || p()),
                  (r += 1);
            }
            function h(t, r) {
              if (!t) return null;
              for (var a = 0; a < i; ) {
                if (e[a].elem === t && null !== e[a].elem)
                  return e[a].animation;
                a += 1;
              }
              var n = new AnimationItem();
              return c(n, t), n.setData(t, r), n;
            }
            function l() {
              (a += 1), d();
            }
            function p() {
              a -= 1;
            }
            function c(t, r) {
              t.addEventListener("destroy", o),
                t.addEventListener("_active", l),
                t.addEventListener("_idle", p),
                e.push({ elem: r, animation: t }),
                (i += 1);
            }
            function f(t) {
              var o,
                h = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
              (r = t), a && !s ? window.requestAnimationFrame(f) : (n = !0);
            }
            function u(t) {
              (r = t), window.requestAnimationFrame(f);
            }
            function d() {
              !s && a && n && (window.requestAnimationFrame(u), (n = !1));
            }
            return (
              (t.registerAnimation = h),
              (t.loadAnimation = function (t) {
                var e = new AnimationItem();
                return c(e, null), e.setParams(t), e;
              }),
              (t.setSpeed = function (t, r) {
                var a;
                for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, r);
              }),
              (t.setDirection = function (t, r) {
                var a;
                for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, r);
              }),
              (t.play = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.play(t);
              }),
              (t.pause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.pause(t);
              }),
              (t.stop = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.stop(t);
              }),
              (t.togglePause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.togglePause(t);
              }),
              (t.searchAnimations = function (t, e, r) {
                var i,
                  a = [].concat(
                    [].slice.call(document.getElementsByClassName("lottie")),
                    [].slice.call(document.getElementsByClassName("bodymovin"))
                  ),
                  n = a.length;
                for (i = 0; i < n; i += 1)
                  r && a[i].setAttribute("data-bm-type", r), h(a[i], t);
                if (e && 0 === n) {
                  r || (r = "svg");
                  var s = document.getElementsByTagName("body")[0];
                  s.innerText = "";
                  var o = createTag("div");
                  (o.style.width = "100%"),
                    (o.style.height = "100%"),
                    o.setAttribute("data-bm-type", r),
                    s.appendChild(o),
                    h(o, t);
                }
              }),
              (t.resize = function () {
                var t;
                for (t = 0; t < i; t += 1) e[t].animation.resize();
              }),
              (t.goToAndStop = function (t, r, a) {
                var n;
                for (n = 0; n < i; n += 1) e[n].animation.goToAndStop(t, r, a);
              }),
              (t.destroy = function (t) {
                var r;
                for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
              }),
              (t.freeze = function () {
                s = !0;
              }),
              (t.unfreeze = function () {
                (s = !1), d();
              }),
              (t.setVolume = function (t, r) {
                var a;
                for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, r);
              }),
              (t.mute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.mute(t);
              }),
              (t.unmute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.unmute(t);
              }),
              (t.getRegisteredAnimations = function () {
                var t,
                  r = e.length,
                  i = [];
                for (t = 0; t < r; t += 1) i.push(e[t].animation);
                return i;
              }),
              t
            );
          })(),
          BezierFactory = (function () {
            var t = {
                getBezierEasing: function (t, r, i, a, n) {
                  var s =
                    n ||
                    ("bez_" + t + "_" + r + "_" + i + "_" + a).replace(
                      /\./g,
                      "p"
                    );
                  if (e[s]) return e[s];
                  var o = new l([t, r, i, a]);
                  return (e[s] = o), o;
                },
              },
              e = {},
              r = 0.1,
              i = "function" == typeof Float32Array;
            function a(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function n(t, e) {
              return 3 * e - 6 * t;
            }
            function s(t) {
              return 3 * t;
            }
            function o(t, e, r) {
              return ((a(e, r) * t + n(e, r)) * t + s(e)) * t;
            }
            function h(t, e, r) {
              return 3 * a(e, r) * t * t + 2 * n(e, r) * t + s(e);
            }
            function l(t) {
              (this._p = t),
                (this._mSampleValues = i
                  ? new Float32Array(11)
                  : new Array(11)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this));
            }
            return (
              (l.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    r = this._p[1],
                    i = this._p[2],
                    a = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === r && i === a
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : o(this._getTForX(t), r, a)
                  );
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    r = this._p[2],
                    i = this._p[3];
                  (this._precomputed = !0),
                    (t === e && r === i) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)
                    this._mSampleValues[i] = o(i * r, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      i = this._p[2],
                      a = this._mSampleValues,
                      n = 0,
                      s = 1;
                    10 !== s && a[s] <= t;
                    ++s
                  )
                    n += r;
                  var l = n + ((t - a[--s]) / (a[s + 1] - a[s])) * r,
                    p = h(l, e, i);
                  return p >= 0.001
                    ? (function (t, e, r, i) {
                        for (var a = 0; a < 4; ++a) {
                          var n = h(e, r, i);
                          if (0 === n) return e;
                          e -= (o(e, r, i) - t) / n;
                        }
                        return e;
                      })(t, l, e, i)
                    : 0 === p
                    ? l
                    : (function (t, e, r, i, a) {
                        var n,
                          s,
                          h = 0;
                        do {
                          (n = o((s = e + (r - e) / 2), i, a) - t) > 0
                            ? (r = s)
                            : (e = s);
                        } while (Math.abs(n) > 1e-7 && ++h < 10);
                        return s;
                      })(t, n, n + r, e, i);
                },
              }),
              t
            );
          })(),
          pooling = {
            double: function (t) {
              return t.concat(createSizedArray(t.length));
            },
          },
          poolFactory = function (t, e, r) {
            var i = 0,
              a = t,
              n = createSizedArray(a);
            return {
              newElement: function () {
                return i ? n[(i -= 1)] : e();
              },
              release: function (t) {
                i === a && ((n = pooling.double(n)), (a *= 2)),
                  r && r(t),
                  (n[i] = t),
                  (i += 1);
              },
            };
          },
          bezierLengthPool = poolFactory(8, function () {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments()),
            };
          }),
          segmentsLengthPool = poolFactory(
            8,
            function () {
              return { lengths: [], totalLength: 0 };
            },
            function (t) {
              var e,
                r = t.lengths.length;
              for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
              t.lengths.length = 0;
            }
          );
        function bezFunction() {
          var t = Math;
          function e(t, e, r, i, a, n) {
            var s = t * i + e * a + r * n - a * i - n * t - r * e;
            return s > -0.001 && s < 0.001;
          }
          var r = function (t, e, r, i) {
            var a,
              n,
              s,
              o,
              h,
              l,
              p = getDefaultCurveSegments(),
              c = 0,
              f = [],
              u = [],
              d = bezierLengthPool.newElement();
            for (s = r.length, a = 0; a < p; a += 1) {
              for (h = a / (p - 1), l = 0, n = 0; n < s; n += 1)
                (o =
                  bmPow(1 - h, 3) * t[n] +
                  3 * bmPow(1 - h, 2) * h * r[n] +
                  3 * (1 - h) * bmPow(h, 2) * i[n] +
                  bmPow(h, 3) * e[n]),
                  (f[n] = o),
                  null !== u[n] && (l += bmPow(f[n] - u[n], 2)),
                  (u[n] = f[n]);
              l && (c += l = bmSqrt(l)),
                (d.percents[a] = h),
                (d.lengths[a] = c);
            }
            return (d.addedLength = c), d;
          };
          function i(t) {
            (this.segmentLength = 0), (this.points = new Array(t));
          }
          function a(t, e) {
            (this.partialLength = t), (this.point = e);
          }
          var n,
            s =
              ((n = {}),
              function (t, r, s, o) {
                var h = (
                  t[0] +
                  "_" +
                  t[1] +
                  "_" +
                  r[0] +
                  "_" +
                  r[1] +
                  "_" +
                  s[0] +
                  "_" +
                  s[1] +
                  "_" +
                  o[0] +
                  "_" +
                  o[1]
                ).replace(/\./g, "p");
                if (!n[h]) {
                  var l,
                    p,
                    c,
                    f,
                    u,
                    d,
                    m,
                    y = getDefaultCurveSegments(),
                    g = 0,
                    v = null;
                  2 === t.length &&
                    (t[0] !== r[0] || t[1] !== r[1]) &&
                    e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) &&
                    e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                    (y = 2);
                  var b = new i(y);
                  for (c = s.length, l = 0; l < y; l += 1) {
                    for (
                      m = createSizedArray(c), u = l / (y - 1), d = 0, p = 0;
                      p < c;
                      p += 1
                    )
                      (f =
                        bmPow(1 - u, 3) * t[p] +
                        3 * bmPow(1 - u, 2) * u * (t[p] + s[p]) +
                        3 * (1 - u) * bmPow(u, 2) * (r[p] + o[p]) +
                        bmPow(u, 3) * r[p]),
                        (m[p] = f),
                        null !== v && (d += bmPow(m[p] - v[p], 2));
                    (g += d = bmSqrt(d)), (b.points[l] = new a(d, m)), (v = m);
                  }
                  (b.segmentLength = g), (n[h] = b);
                }
                return n[h];
              });
          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              a = r.length,
              n = bmFloor((a - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (n === a - 1 || 0 === n || s === i[n]) return r[n];
            for (var h = i[n] > s ? -1 : 1, l = !0; l; )
              if (
                (i[n] <= s && i[n + 1] > s
                  ? ((o = (s - i[n]) / (i[n + 1] - i[n])), (l = !1))
                  : (n += h),
                n < 0 || n >= a - 1)
              ) {
                if (n === a - 1) return r[n];
                l = !1;
              }
            return r[n] + (r[n + 1] - r[n]) * o;
          }
          var h = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function (t) {
              var e,
                i = segmentsLengthPool.newElement(),
                a = t.c,
                n = t.v,
                s = t.o,
                o = t.i,
                h = t._length,
                l = i.lengths,
                p = 0;
              for (e = 0; e < h - 1; e += 1)
                (l[e] = r(n[e], n[e + 1], s[e], o[e + 1])),
                  (p += l[e].addedLength);
              return (
                a &&
                  h &&
                  ((l[e] = r(n[e], n[0], s[e], o[0])), (p += l[e].addedLength)),
                (i.totalLength = p),
                i
              );
            },
            getNewSegment: function (e, r, i, a, n, s, l) {
              n < 0 ? (n = 0) : n > 1 && (n = 1);
              var p,
                c = o(n, l),
                f = o((s = s > 1 ? 1 : s), l),
                u = e.length,
                d = 1 - c,
                m = 1 - f,
                y = d * d * d,
                g = c * d * d * 3,
                v = c * c * d * 3,
                b = c * c * c,
                _ = d * d * m,
                P = c * d * m + d * c * m + d * d * f,
                E = c * c * m + d * c * f + c * d * f,
                S = c * c * f,
                x = d * m * m,
                A = c * m * m + d * f * m + d * m * f,
                w = c * f * m + d * f * f + c * m * f,
                C = c * f * f,
                k = m * m * m,
                T = f * m * m + m * f * m + m * m * f,
                D = f * f * m + m * f * f + f * m * f,
                M = f * f * f;
              for (p = 0; p < u; p += 1)
                (h[4 * p] =
                  t.round(1e3 * (y * e[p] + g * i[p] + v * a[p] + b * r[p])) /
                  1e3),
                  (h[4 * p + 1] =
                    t.round(1e3 * (_ * e[p] + P * i[p] + E * a[p] + S * r[p])) /
                    1e3),
                  (h[4 * p + 2] =
                    t.round(1e3 * (x * e[p] + A * i[p] + w * a[p] + C * r[p])) /
                    1e3),
                  (h[4 * p + 3] =
                    t.round(1e3 * (k * e[p] + T * i[p] + D * a[p] + M * r[p])) /
                    1e3);
              return h;
            },
            getPointInSegment: function (e, r, i, a, n, s) {
              var h = o(n, s),
                l = 1 - h;
              return [
                t.round(
                  1e3 *
                    (l * l * l * e[0] +
                      (h * l * l + l * h * l + l * l * h) * i[0] +
                      (h * h * l + l * h * h + h * l * h) * a[0] +
                      h * h * h * r[0])
                ) / 1e3,
                t.round(
                  1e3 *
                    (l * l * l * e[1] +
                      (h * l * l + l * h * l + l * l * h) * i[1] +
                      (h * h * l + l * h * h + h * l * h) * a[1] +
                      h * h * h * r[1])
                ) / 1e3,
              ];
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function (r, i, a, n, s, o, h, l, p) {
              if (0 === a && 0 === o && 0 === p) return e(r, i, n, s, h, l);
              var c,
                f = t.sqrt(t.pow(n - r, 2) + t.pow(s - i, 2) + t.pow(o - a, 2)),
                u = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - a, 2)),
                d = t.sqrt(t.pow(h - n, 2) + t.pow(l - s, 2) + t.pow(p - o, 2));
              return (
                (c =
                  f > u
                    ? f > d
                      ? f - u - d
                      : d - u - f
                    : d > u
                    ? d - u - f
                    : u - f - d) > -1e-4 && c < 1e-4
              );
            },
          };
        }
        var bez = bezFunction(),
          PropertyFactory = (function () {
            var t = initialDefaultFrame,
              e = Math.abs;
            function r(t, e) {
              var r,
                a = this.offsetTime;
              "multidimensional" === this.propType &&
                (r = createTypedArray("float32", this.pv.length));
              for (
                var n,
                  s,
                  o,
                  h,
                  l,
                  p,
                  c,
                  f,
                  u,
                  d = e.lastIndex,
                  m = d,
                  y = this.keyframes.length - 1,
                  g = !0;
                g;

              ) {
                if (
                  ((n = this.keyframes[m]),
                  (s = this.keyframes[m + 1]),
                  m === y - 1 && t >= s.t - a)
                ) {
                  n.h && (n = s), (d = 0);
                  break;
                }
                if (s.t - a > t) {
                  d = m;
                  break;
                }
                m < y - 1 ? (m += 1) : ((d = 0), (g = !1));
              }
              o = this.keyframesMetadata[m] || {};
              var v,
                b,
                _,
                P,
                E,
                S,
                x,
                A,
                w,
                C,
                k = s.t - a,
                T = n.t - a;
              if (n.to) {
                o.bezierData ||
                  (o.bezierData = bez.buildBezierData(
                    n.s,
                    s.s || n.e,
                    n.to,
                    n.ti
                  ));
                var D = o.bezierData;
                if (t >= k || t < T) {
                  var M = t >= k ? D.points.length - 1 : 0;
                  for (l = D.points[M].point.length, h = 0; h < l; h += 1)
                    r[h] = D.points[M].point[h];
                } else {
                  o.__fnct
                    ? (u = o.__fnct)
                    : ((u = BezierFactory.getBezierEasing(
                        n.o.x,
                        n.o.y,
                        n.i.x,
                        n.i.y,
                        n.n
                      ).get),
                      (o.__fnct = u)),
                    (p = u((t - T) / (k - T)));
                  var F,
                    I = D.segmentLength * p,
                    R =
                      e.lastFrame < t && e._lastKeyframeIndex === m
                        ? e._lastAddedLength
                        : 0;
                  for (
                    f =
                      e.lastFrame < t && e._lastKeyframeIndex === m
                        ? e._lastPoint
                        : 0,
                      g = !0,
                      c = D.points.length;
                    g;

                  ) {
                    if (
                      ((R += D.points[f].partialLength),
                      0 === I || 0 === p || f === D.points.length - 1)
                    ) {
                      for (l = D.points[f].point.length, h = 0; h < l; h += 1)
                        r[h] = D.points[f].point[h];
                      break;
                    }
                    if (I >= R && I < R + D.points[f + 1].partialLength) {
                      for (
                        F = (I - R) / D.points[f + 1].partialLength,
                          l = D.points[f].point.length,
                          h = 0;
                        h < l;
                        h += 1
                      )
                        r[h] =
                          D.points[f].point[h] +
                          (D.points[f + 1].point[h] - D.points[f].point[h]) * F;
                      break;
                    }
                    f < c - 1 ? (f += 1) : (g = !1);
                  }
                  (e._lastPoint = f),
                    (e._lastAddedLength = R - D.points[f].partialLength),
                    (e._lastKeyframeIndex = m);
                }
              } else {
                var B, O, V, L, z;
                if (((y = n.s.length), (v = s.s || n.e), this.sh && 1 !== n.h))
                  if (t >= k) (r[0] = v[0]), (r[1] = v[1]), (r[2] = v[2]);
                  else if (t <= T)
                    (r[0] = n.s[0]), (r[1] = n.s[1]), (r[2] = n.s[2]);
                  else {
                    var $ = i(n.s),
                      G = i(v);
                    (b = r),
                      (_ = (function (t, e, r) {
                        var i,
                          a,
                          n,
                          s,
                          o,
                          h = [],
                          l = t[0],
                          p = t[1],
                          c = t[2],
                          f = t[3],
                          u = e[0],
                          d = e[1],
                          m = e[2],
                          y = e[3];
                        return (
                          (a = l * u + p * d + c * m + f * y) < 0 &&
                            ((a = -a), (u = -u), (d = -d), (m = -m), (y = -y)),
                          1 - a > 1e-6
                            ? ((i = Math.acos(a)),
                              (n = Math.sin(i)),
                              (s = Math.sin((1 - r) * i) / n),
                              (o = Math.sin(r * i) / n))
                            : ((s = 1 - r), (o = r)),
                          (h[0] = s * l + o * u),
                          (h[1] = s * p + o * d),
                          (h[2] = s * c + o * m),
                          (h[3] = s * f + o * y),
                          h
                        );
                      })($, G, (t - T) / (k - T))),
                      (P = _[0]),
                      (E = _[1]),
                      (S = _[2]),
                      (x = _[3]),
                      (A = Math.atan2(
                        2 * E * x - 2 * P * S,
                        1 - 2 * E * E - 2 * S * S
                      )),
                      (w = Math.asin(2 * P * E + 2 * S * x)),
                      (C = Math.atan2(
                        2 * P * x - 2 * E * S,
                        1 - 2 * P * P - 2 * S * S
                      )),
                      (b[0] = A / degToRads),
                      (b[1] = w / degToRads),
                      (b[2] = C / degToRads);
                  }
                else
                  for (m = 0; m < y; m += 1)
                    1 !== n.h &&
                      (t >= k
                        ? (p = 1)
                        : t < T
                        ? (p = 0)
                        : (n.o.x.constructor === Array
                            ? (o.__fnct || (o.__fnct = []),
                              o.__fnct[m]
                                ? (u = o.__fnct[m])
                                : ((B =
                                    void 0 === n.o.x[m] ? n.o.x[0] : n.o.x[m]),
                                  (O =
                                    void 0 === n.o.y[m] ? n.o.y[0] : n.o.y[m]),
                                  (V =
                                    void 0 === n.i.x[m] ? n.i.x[0] : n.i.x[m]),
                                  (L =
                                    void 0 === n.i.y[m] ? n.i.y[0] : n.i.y[m]),
                                  (u = BezierFactory.getBezierEasing(
                                    B,
                                    O,
                                    V,
                                    L
                                  ).get),
                                  (o.__fnct[m] = u)))
                            : o.__fnct
                            ? (u = o.__fnct)
                            : ((B = n.o.x),
                              (O = n.o.y),
                              (V = n.i.x),
                              (L = n.i.y),
                              (u = BezierFactory.getBezierEasing(
                                B,
                                O,
                                V,
                                L
                              ).get),
                              (n.keyframeMetadata = u)),
                          (p = u((t - T) / (k - T))))),
                      (v = s.s || n.e),
                      (z = 1 === n.h ? n.s[m] : n.s[m] + (v[m] - n.s[m]) * p),
                      "multidimensional" === this.propType
                        ? (r[m] = z)
                        : (r = z);
              }
              return (e.lastIndex = d), r;
            }
            function i(t) {
              var e = t[0] * degToRads,
                r = t[1] * degToRads,
                i = t[2] * degToRads,
                a = Math.cos(e / 2),
                n = Math.cos(r / 2),
                s = Math.cos(i / 2),
                o = Math.sin(e / 2),
                h = Math.sin(r / 2),
                l = Math.sin(i / 2);
              return [
                o * h * s + a * n * l,
                o * n * s + a * h * l,
                a * h * s - o * n * l,
                a * n * s - o * h * l,
              ];
            }
            function a() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (
                !(
                  e === this._caching.lastFrame ||
                  (this._caching.lastFrame !== t &&
                    ((this._caching.lastFrame >= i && e >= i) ||
                      (this._caching.lastFrame < r && e < r)))
                )
              ) {
                this._caching.lastFrame >= e &&
                  ((this._caching._lastKeyframeIndex = -1),
                  (this._caching.lastIndex = 0));
                var a = this.interpolateValue(e, this._caching);
                this.pv = a;
              }
              return (this._caching.lastFrame = e), this.pv;
            }
            function n(t) {
              var r;
              if ("unidimensional" === this.propType)
                (r = t * this.mult),
                  e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0));
              else
                for (var i = 0, a = this.v.length; i < a; )
                  (r = t[i] * this.mult),
                    e(this.v[i] - r) > 1e-5 &&
                      ((this.v[i] = r), (this._mdf = !0)),
                    (i += 1);
            }
            function s() {
              if (
                this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length
              )
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t;
                  (this.lock = !0), (this._mdf = this._isFirstFrame);
                  var e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                  this.setVValue(r),
                    (this._isFirstFrame = !1),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
            }
            function o(t) {
              this.effectsSequence.push(t),
                this.container.addDynamicProperty(this);
            }
            function h(t, e, r, i) {
              (this.propType = "unidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this.v = r ? e.k * r : e.k),
                (this.pv = e.k),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.vel = 0),
                (this.effectsSequence = []),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = n),
                (this.addEffect = o);
            }
            function l(t, e, r, i) {
              var a;
              (this.propType = "multidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.frameId = -1);
              var h = e.k.length;
              for (
                this.v = createTypedArray("float32", h),
                  this.pv = createTypedArray("float32", h),
                  this.vel = createTypedArray("float32", h),
                  a = 0;
                a < h;
                a += 1
              )
                (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a]);
              (this._isFirstFrame = !0),
                (this.effectsSequence = []),
                (this.getValue = s),
                (this.setVValue = n),
                (this.addEffect = o);
            }
            function p(e, i, h, l) {
              (this.propType = "unidimensional"),
                (this.keyframes = i.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: 0,
                  _lastKeyframeIndex: -1,
                }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = i),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.v = t),
                (this.pv = t),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = n),
                (this.interpolateValue = r),
                (this.effectsSequence = [a.bind(this)]),
                (this.addEffect = o);
            }
            function c(e, i, h, l) {
              var p;
              this.propType = "multidimensional";
              var c,
                f,
                u,
                d,
                m = i.k.length;
              for (p = 0; p < m - 1; p += 1)
                i.k[p].to &&
                  i.k[p].s &&
                  i.k[p + 1] &&
                  i.k[p + 1].s &&
                  ((c = i.k[p].s),
                  (f = i.k[p + 1].s),
                  (u = i.k[p].to),
                  (d = i.k[p].ti),
                  ((2 === c.length &&
                    (c[0] !== f[0] || c[1] !== f[1]) &&
                    bez.pointOnLine2D(
                      c[0],
                      c[1],
                      f[0],
                      f[1],
                      c[0] + u[0],
                      c[1] + u[1]
                    ) &&
                    bez.pointOnLine2D(
                      c[0],
                      c[1],
                      f[0],
                      f[1],
                      f[0] + d[0],
                      f[1] + d[1]
                    )) ||
                    (3 === c.length &&
                      (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) &&
                      bez.pointOnLine3D(
                        c[0],
                        c[1],
                        c[2],
                        f[0],
                        f[1],
                        f[2],
                        c[0] + u[0],
                        c[1] + u[1],
                        c[2] + u[2]
                      ) &&
                      bez.pointOnLine3D(
                        c[0],
                        c[1],
                        c[2],
                        f[0],
                        f[1],
                        f[2],
                        f[0] + d[0],
                        f[1] + d[1],
                        f[2] + d[2]
                      ))) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)),
                  c[0] === f[0] &&
                    c[1] === f[1] &&
                    0 === u[0] &&
                    0 === u[1] &&
                    0 === d[0] &&
                    0 === d[1] &&
                    (2 === c.length ||
                      (c[2] === f[2] && 0 === u[2] && 0 === d[2])) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)));
              (this.effectsSequence = [a.bind(this)]),
                (this.data = i),
                (this.keyframes = i.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.k = !0),
                (this.kf = !0),
                (this._isFirstFrame = !0),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.getValue = s),
                (this.setVValue = n),
                (this.interpolateValue = r),
                (this.frameId = -1);
              var y = i.k[0].s.length;
              for (
                this.v = createTypedArray("float32", y),
                  this.pv = createTypedArray("float32", y),
                  p = 0;
                p < y;
                p += 1
              )
                (this.v[p] = t), (this.pv[p] = t);
              (this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: createTypedArray("float32", y),
              }),
                (this.addEffect = o);
            }
            var f = {
              getProp: function (t, e, r, i, a) {
                var n;
                if (e.k.length)
                  if ("number" == typeof e.k[0]) n = new l(t, e, i, a);
                  else
                    switch (r) {
                      case 0:
                        n = new p(t, e, i, a);
                        break;
                      case 1:
                        n = new c(t, e, i, a);
                    }
                else n = new h(t, e, i, a);
                return n.effectsSequence.length && a.addDynamicProperty(n), n;
              },
            };
            return f;
          })();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              (this.dynamicProperties.push(t),
              this.container.addDynamicProperty(this),
              (this._isAnimated = !0));
          },
          iterateDynamicProperties: function () {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue(),
                this.dynamicProperties[t]._mdf && (this._mdf = !0);
          },
          initDynamicPropertyContainer: function (t) {
            (this.container = t),
              (this.dynamicProperties = []),
              (this._mdf = !1),
              (this._isAnimated = !1);
          },
        };
        var pointPool = poolFactory(8, function () {
          return createTypedArray("float32", 2);
        });
        function ShapePath() {
          (this.c = !1),
            (this._length = 0),
            (this._maxLength = 8),
            (this.v = createSizedArray(this._maxLength)),
            (this.o = createSizedArray(this._maxLength)),
            (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (t, e) {
          (this.c = t), this.setLength(e);
          for (var r = 0; r < e; )
            (this.v[r] = pointPool.newElement()),
              (this.o[r] = pointPool.newElement()),
              (this.i[r] = pointPool.newElement()),
              (r += 1);
        }),
          (ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t; ) this.doubleArrayLength();
            this._length = t;
          }),
          (ShapePath.prototype.doubleArrayLength = function () {
            (this.v = this.v.concat(createSizedArray(this._maxLength))),
              (this.i = this.i.concat(createSizedArray(this._maxLength))),
              (this.o = this.o.concat(createSizedArray(this._maxLength))),
              (this._maxLength *= 2);
          }),
          (ShapePath.prototype.setXYAt = function (t, e, r, i, a) {
            var n;
            switch (
              ((this._length = Math.max(this._length, i + 1)),
              this._length >= this._maxLength && this.doubleArrayLength(),
              r)
            ) {
              case "v":
                n = this.v;
                break;
              case "i":
                n = this.i;
                break;
              case "o":
                n = this.o;
                break;
              default:
                n = [];
            }
            (!n[i] || (n[i] && !a)) && (n[i] = pointPool.newElement()),
              (n[i][0] = t),
              (n[i][1] = e);
          }),
          (ShapePath.prototype.setTripleAt = function (t, e, r, i, a, n, s, o) {
            this.setXYAt(t, e, "v", s, o),
              this.setXYAt(r, i, "o", s, o),
              this.setXYAt(a, n, "i", s, o);
          }),
          (ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
              r = this.o,
              i = this.i,
              a = 0;
            this.c &&
              (t.setTripleAt(
                e[0][0],
                e[0][1],
                i[0][0],
                i[0][1],
                r[0][0],
                r[0][1],
                0,
                !1
              ),
              (a = 1));
            var n,
              s = this._length - 1,
              o = this._length;
            for (n = a; n < o; n += 1)
              t.setTripleAt(
                e[s][0],
                e[s][1],
                i[s][0],
                i[s][1],
                r[s][0],
                r[s][1],
                n,
                !1
              ),
                (s -= 1);
            return t;
          }),
          (ShapePath.prototype.length = function () {
            return this._length;
          });
        var shapePool =
            ((factory = poolFactory(
              4,
              function () {
                return new ShapePath();
              },
              function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1)
                  pointPool.release(t.v[e]),
                    pointPool.release(t.i[e]),
                    pointPool.release(t.o[e]),
                    (t.v[e] = null),
                    (t.i[e] = null),
                    (t.o[e] = null);
                (t._length = 0), (t.c = !1);
              }
            )),
            (factory.clone = function (t) {
              var e,
                r = factory.newElement(),
                i = void 0 === t._length ? t.v.length : t._length;
              for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
                r.setTripleAt(
                  t.v[e][0],
                  t.v[e][1],
                  t.o[e][0],
                  t.o[e][1],
                  t.i[e][0],
                  t.i[e][1],
                  e
                );
              return r;
            }),
            factory),
          factory;
        function ShapeCollection() {
          (this._length = 0),
            (this._maxLength = 4),
            (this.shapes = createSizedArray(this._maxLength));
        }
        (ShapeCollection.prototype.addShape = function (t) {
          this._length === this._maxLength &&
            ((this.shapes = this.shapes.concat(
              createSizedArray(this._maxLength)
            )),
            (this._maxLength *= 2)),
            (this.shapes[this._length] = t),
            (this._length += 1);
        }),
          (ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1)
              shapePool.release(this.shapes[t]);
            this._length = 0;
          });
        var shapeCollectionPool =
            ((ob = {
              newShapeCollection: function () {
                return _length ? pool[(_length -= 1)] : new ShapeCollection();
              },
              release: function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                (t._length = 0),
                  _length === _maxLength &&
                    ((pool = pooling.double(pool)), (_maxLength *= 2)),
                  (pool[_length] = t),
                  (_length += 1);
              },
            }),
            (_length = 0),
            (_maxLength = 4),
            (pool = createSizedArray(_maxLength)),
            ob),
          ob,
          _length,
          _maxLength,
          pool,
          ShapePropertyFactory = (function () {
            var t = -999999;
            function e(t, e, r) {
              var i,
                a,
                n,
                s,
                o,
                h,
                l,
                p,
                c,
                f = r.lastIndex,
                u = this.keyframes;
              if (t < u[0].t - this.offsetTime)
                (i = u[0].s[0]), (n = !0), (f = 0);
              else if (t >= u[u.length - 1].t - this.offsetTime)
                (i = u[u.length - 1].s
                  ? u[u.length - 1].s[0]
                  : u[u.length - 2].e[0]),
                  (n = !0);
              else {
                for (
                  var d, m, y, g = f, v = u.length - 1, b = !0;
                  b && ((d = u[g]), !((m = u[g + 1]).t - this.offsetTime > t));

                )
                  g < v - 1 ? (g += 1) : (b = !1);
                if (
                  ((y = this.keyframesMetadata[g] || {}),
                  (f = g),
                  !(n = 1 === d.h))
                ) {
                  if (t >= m.t - this.offsetTime) p = 1;
                  else if (t < d.t - this.offsetTime) p = 0;
                  else {
                    var _;
                    y.__fnct
                      ? (_ = y.__fnct)
                      : ((_ = BezierFactory.getBezierEasing(
                          d.o.x,
                          d.o.y,
                          d.i.x,
                          d.i.y
                        ).get),
                        (y.__fnct = _)),
                      (p = _(
                        (t - (d.t - this.offsetTime)) /
                          (m.t - this.offsetTime - (d.t - this.offsetTime))
                      ));
                  }
                  a = m.s ? m.s[0] : d.e[0];
                }
                i = d.s[0];
              }
              for (
                h = e._length, l = i.i[0].length, r.lastIndex = f, s = 0;
                s < h;
                s += 1
              )
                for (o = 0; o < l; o += 1)
                  (c = n ? i.i[s][o] : i.i[s][o] + (a.i[s][o] - i.i[s][o]) * p),
                    (e.i[s][o] = c),
                    (c = n
                      ? i.o[s][o]
                      : i.o[s][o] + (a.o[s][o] - i.o[s][o]) * p),
                    (e.o[s][o] = c),
                    (c = n
                      ? i.v[s][o]
                      : i.v[s][o] + (a.v[s][o] - i.v[s][o]) * p),
                    (e.v[s][o] = c);
            }
            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                a = this._caching.lastFrame;
              return (
                (a !== t && ((a < r && e < r) || (a > i && e > i))) ||
                  ((this._caching.lastIndex =
                    a < e ? this._caching.lastIndex : 0),
                  this.interpolateShape(e, this.pv, this._caching)),
                (this._caching.lastFrame = e),
                this.pv
              );
            }
            function i() {
              this.paths = this.localShapeCollection;
            }
            function a(t) {
              (function (t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r,
                  i = t._length;
                for (r = 0; r < i; r += 1)
                  if (
                    t.v[r][0] !== e.v[r][0] ||
                    t.v[r][1] !== e.v[r][1] ||
                    t.o[r][0] !== e.o[r][0] ||
                    t.o[r][1] !== e.o[r][1] ||
                    t.i[r][0] !== e.i[r][0] ||
                    t.i[r][1] !== e.i[r][1]
                  )
                    return !1;
                return !0;
              })(this.v, t) ||
                ((this.v = shapePool.clone(t)),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                (this._mdf = !0),
                (this.paths = this.localShapeCollection));
            }
            function n() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    (this.lock = !0),
                      (this._mdf = !1),
                      (t = this.kf
                        ? this.pv
                        : this.data.ks
                        ? this.data.ks.k
                        : this.data.pt.k);
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                else this._mdf = !1;
            }
            function s(t, e, r) {
              (this.propType = "shape"),
                (this.comp = t.comp),
                (this.container = t),
                (this.elem = t),
                (this.data = e),
                (this.k = !1),
                (this.kf = !1),
                (this._mdf = !1);
              var a = 3 === r ? e.pt.k : e.ks.k;
              (this.v = shapePool.clone(a)),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.reset = i),
                (this.effectsSequence = []);
            }
            function o(t) {
              this.effectsSequence.push(t),
                this.container.addDynamicProperty(this);
            }
            function h(e, a, n) {
              (this.propType = "shape"),
                (this.comp = e.comp),
                (this.elem = e),
                (this.container = e),
                (this.offsetTime = e.data.st),
                (this.keyframes = 3 === n ? a.pt.k : a.ks.k),
                (this.keyframesMetadata = []),
                (this.k = !0),
                (this.kf = !0);
              var s = this.keyframes[0].s[0].i.length;
              (this.v = shapePool.newElement()),
                this.v.setPathData(this.keyframes[0].s[0].c, s),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.lastFrame = t),
                (this.reset = i),
                (this._caching = { lastFrame: t, lastIndex: 0 }),
                (this.effectsSequence = [r.bind(this)]);
            }
            (s.prototype.interpolateShape = e),
              (s.prototype.getValue = n),
              (s.prototype.setVValue = a),
              (s.prototype.addEffect = o),
              (h.prototype.getValue = n),
              (h.prototype.interpolateShape = e),
              (h.prototype.setVValue = a),
              (h.prototype.addEffect = o);
            var l = (function () {
                var t = roundCorner;
                function e(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = e.d),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertEllToPath());
                }
                return (
                  (e.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var e = this.p.v[0],
                        r = this.p.v[1],
                        i = this.s.v[0] / 2,
                        a = this.s.v[1] / 2,
                        n = 3 !== this.d,
                        s = this.v;
                      (s.v[0][0] = e),
                        (s.v[0][1] = r - a),
                        (s.v[1][0] = n ? e + i : e - i),
                        (s.v[1][1] = r),
                        (s.v[2][0] = e),
                        (s.v[2][1] = r + a),
                        (s.v[3][0] = n ? e - i : e + i),
                        (s.v[3][1] = r),
                        (s.i[0][0] = n ? e - i * t : e + i * t),
                        (s.i[0][1] = r - a),
                        (s.i[1][0] = n ? e + i : e - i),
                        (s.i[1][1] = r - a * t),
                        (s.i[2][0] = n ? e + i * t : e - i * t),
                        (s.i[2][1] = r + a),
                        (s.i[3][0] = n ? e - i : e + i),
                        (s.i[3][1] = r + a * t),
                        (s.o[0][0] = n ? e + i * t : e - i * t),
                        (s.o[0][1] = r - a),
                        (s.o[1][0] = n ? e + i : e - i),
                        (s.o[1][1] = r + a * t),
                        (s.o[2][0] = n ? e - i * t : e + i * t),
                        (s.o[2][1] = r + a),
                        (s.o[3][0] = n ? e - i : e + i),
                        (s.o[3][1] = r - a * t);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], e),
                  e
                );
              })(),
              p = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.data = e),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy
                      ? ((this.ir = PropertyFactory.getProp(
                          t,
                          e.ir,
                          0,
                          0,
                          this
                        )),
                        (this.is = PropertyFactory.getProp(
                          t,
                          e.is,
                          0,
                          0.01,
                          this
                        )),
                        (this.convertToPath = this.convertStarToPath))
                      : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(
                      t,
                      e.r,
                      0,
                      degToRads,
                      this
                    )),
                    (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                    (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertToPath());
                }
                return (
                  (t.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var t,
                        e,
                        r,
                        i,
                        a = 2 * Math.floor(this.pt.v),
                        n = (2 * Math.PI) / a,
                        s = !0,
                        o = this.or.v,
                        h = this.ir.v,
                        l = this.os.v,
                        p = this.is.v,
                        c = (2 * Math.PI * o) / (2 * a),
                        f = (2 * Math.PI * h) / (2 * a),
                        u = -Math.PI / 2;
                      u += this.r.v;
                      var d = 3 === this.data.d ? -1 : 1;
                      for (this.v._length = 0, t = 0; t < a; t += 1) {
                        (r = s ? l : p), (i = s ? c : f);
                        var m = (e = s ? o : h) * Math.cos(u),
                          y = e * Math.sin(u),
                          g =
                            0 === m && 0 === y
                              ? 0
                              : y / Math.sqrt(m * m + y * y),
                          v =
                            0 === m && 0 === y
                              ? 0
                              : -m / Math.sqrt(m * m + y * y);
                        (m += +this.p.v[0]),
                          (y += +this.p.v[1]),
                          this.v.setTripleAt(
                            m,
                            y,
                            m - g * i * r * d,
                            y - v * i * r * d,
                            m + g * i * r * d,
                            y + v * i * r * d,
                            t,
                            !0
                          ),
                          (s = !s),
                          (u += n * d);
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        r = (2 * Math.PI) / e,
                        i = this.or.v,
                        a = this.os.v,
                        n = (2 * Math.PI * i) / (4 * e),
                        s = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      for (
                        s += this.r.v, this.v._length = 0, t = 0;
                        t < e;
                        t += 1
                      ) {
                        var h = i * Math.cos(s),
                          l = i * Math.sin(s),
                          p =
                            0 === h && 0 === l
                              ? 0
                              : l / Math.sqrt(h * h + l * l),
                          c =
                            0 === h && 0 === l
                              ? 0
                              : -h / Math.sqrt(h * h + l * l);
                        (h += +this.p.v[0]),
                          (l += +this.p.v[1]),
                          this.v.setTripleAt(
                            h,
                            l,
                            h - p * n * a * o,
                            l - c * n * a * o,
                            h + p * n * a * o,
                            l + c * n * a * o,
                            t,
                            !0
                          ),
                          (s += r * o);
                      }
                      (this.paths.length = 0), (this.paths[0] = this.v);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              c = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertRectToPath());
                }
                return (
                  (t.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        a = bmMin(r, i, this.r.v),
                        n = a * (1 - roundCorner);
                      (this.v._length = 0),
                        2 === this.d || 1 === this.d
                          ? (this.v.setTripleAt(
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + n,
                              0,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + r,
                              e + i - a,
                              t + r,
                              e + i - n,
                              t + r,
                              e + i - a,
                              1,
                              !0
                            ),
                            0 !== a
                              ? (this.v.setTripleAt(
                                  t + r - a,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r - n,
                                  e + i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + a,
                                  e + i,
                                  t - r + n,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - n,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + n,
                                  t - r,
                                  e - i + a,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + a,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r + n,
                                  e - i,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - a,
                                  e - i,
                                  t + r - n,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r + n,
                                  e + i,
                                  t - r,
                                  e + i,
                                  2
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r,
                                  e - i + n,
                                  t - r,
                                  e - i,
                                  3
                                )))
                          : (this.v.setTripleAt(
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + n,
                              t + r,
                              e - i + a,
                              0,
                              !0
                            ),
                            0 !== a
                              ? (this.v.setTripleAt(
                                  t + r - a,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  t + r - n,
                                  e - i,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + a,
                                  e - i,
                                  t - r + n,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + n,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - n,
                                  t - r,
                                  e + i - a,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + a,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r + n,
                                  e + i,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - a,
                                  e + i,
                                  t + r - n,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i - a,
                                  t + r,
                                  e + i - a,
                                  t + r,
                                  e + i - n,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r + n,
                                  e - i,
                                  t - r,
                                  e - i,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r,
                                  e + i - n,
                                  t - r,
                                  e + i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i,
                                  t + r - n,
                                  e + i,
                                  t + r,
                                  e + i,
                                  3,
                                  !0
                                )));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: i,
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              f = {
                getShapeProp: function (t, e, r) {
                  var i;
                  return (
                    3 === r || 4 === r
                      ? (i = (3 === r ? e.pt : e.ks).k.length
                          ? new h(t, e, r)
                          : new s(t, e, r))
                      : 5 === r
                      ? (i = new c(t, e))
                      : 6 === r
                      ? (i = new l(t, e))
                      : 7 === r && (i = new p(t, e)),
                    i.k && t.addDynamicProperty(i),
                    i
                  );
                },
                getConstructorFunction: function () {
                  return s;
                },
                getKeyframedConstructorFunction: function () {
                  return h;
                },
              };
            return f;
          })(),
          Matrix = (function () {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;
            function a() {
              return (
                (this.props[0] = 1),
                (this.props[1] = 0),
                (this.props[2] = 0),
                (this.props[3] = 0),
                (this.props[4] = 0),
                (this.props[5] = 1),
                (this.props[6] = 0),
                (this.props[7] = 0),
                (this.props[8] = 0),
                (this.props[9] = 0),
                (this.props[10] = 1),
                (this.props[11] = 0),
                (this.props[12] = 0),
                (this.props[13] = 0),
                (this.props[14] = 0),
                (this.props[15] = 1),
                this
              );
            }
            function n(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function s(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1);
            }
            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1);
            }
            function h(r) {
              if (0 === r) return this;
              var i = t(r),
                a = e(r);
              return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l(t, e) {
              return this._t(1, e, t, 1, 0, 0);
            }
            function p(t, e) {
              return this.shear(r(t), r(e));
            }
            function c(i, a) {
              var n = t(a),
                s = e(a);
              return this._t(n, s, 0, 0, -s, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(n, -s, 0, 0, s, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(t, e, r) {
              return (
                r || 0 === r || (r = 1),
                1 === t && 1 === e && 1 === r
                  ? this
                  : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
              );
            }
            function u(t, e, r, i, a, n, s, o, h, l, p, c, f, u, d, m) {
              return (
                (this.props[0] = t),
                (this.props[1] = e),
                (this.props[2] = r),
                (this.props[3] = i),
                (this.props[4] = a),
                (this.props[5] = n),
                (this.props[6] = s),
                (this.props[7] = o),
                (this.props[8] = h),
                (this.props[9] = l),
                (this.props[10] = p),
                (this.props[11] = c),
                (this.props[12] = f),
                (this.props[13] = u),
                (this.props[14] = d),
                (this.props[15] = m),
                this
              );
            }
            function d(t, e, r) {
              return (
                (r = r || 0),
                0 !== t || 0 !== e || 0 !== r
                  ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                  : this
              );
            }
            function m(t, e, r, i, a, n, s, o, h, l, p, c, f, u, d, m) {
              var y = this.props;
              if (
                1 === t &&
                0 === e &&
                0 === r &&
                0 === i &&
                0 === a &&
                1 === n &&
                0 === s &&
                0 === o &&
                0 === h &&
                0 === l &&
                1 === p &&
                0 === c
              )
                return (
                  (y[12] = y[12] * t + y[15] * f),
                  (y[13] = y[13] * n + y[15] * u),
                  (y[14] = y[14] * p + y[15] * d),
                  (y[15] *= m),
                  (this._identityCalculated = !1),
                  this
                );
              var g = y[0],
                v = y[1],
                b = y[2],
                _ = y[3],
                P = y[4],
                E = y[5],
                S = y[6],
                x = y[7],
                A = y[8],
                w = y[9],
                C = y[10],
                k = y[11],
                T = y[12],
                D = y[13],
                M = y[14],
                F = y[15];
              return (
                (y[0] = g * t + v * a + b * h + _ * f),
                (y[1] = g * e + v * n + b * l + _ * u),
                (y[2] = g * r + v * s + b * p + _ * d),
                (y[3] = g * i + v * o + b * c + _ * m),
                (y[4] = P * t + E * a + S * h + x * f),
                (y[5] = P * e + E * n + S * l + x * u),
                (y[6] = P * r + E * s + S * p + x * d),
                (y[7] = P * i + E * o + S * c + x * m),
                (y[8] = A * t + w * a + C * h + k * f),
                (y[9] = A * e + w * n + C * l + k * u),
                (y[10] = A * r + w * s + C * p + k * d),
                (y[11] = A * i + w * o + C * c + k * m),
                (y[12] = T * t + D * a + M * h + F * f),
                (y[13] = T * e + D * n + M * l + F * u),
                (y[14] = T * r + D * s + M * p + F * d),
                (y[15] = T * i + D * o + M * c + F * m),
                (this._identityCalculated = !1),
                this
              );
            }
            function y() {
              return (
                this._identityCalculated ||
                  ((this._identity = !(
                    1 !== this.props[0] ||
                    0 !== this.props[1] ||
                    0 !== this.props[2] ||
                    0 !== this.props[3] ||
                    0 !== this.props[4] ||
                    1 !== this.props[5] ||
                    0 !== this.props[6] ||
                    0 !== this.props[7] ||
                    0 !== this.props[8] ||
                    0 !== this.props[9] ||
                    1 !== this.props[10] ||
                    0 !== this.props[11] ||
                    0 !== this.props[12] ||
                    0 !== this.props[13] ||
                    0 !== this.props[14] ||
                    1 !== this.props[15]
                  )),
                  (this._identityCalculated = !0)),
                this._identity
              );
            }
            function g(t) {
              for (var e = 0; e < 16; ) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1;
              }
              return !0;
            }
            function v(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t;
            }
            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e];
            }
            function _(t, e, r) {
              return {
                x:
                  t * this.props[0] +
                  e * this.props[4] +
                  r * this.props[8] +
                  this.props[12],
                y:
                  t * this.props[1] +
                  e * this.props[5] +
                  r * this.props[9] +
                  this.props[13],
                z:
                  t * this.props[2] +
                  e * this.props[6] +
                  r * this.props[10] +
                  this.props[14],
              };
            }
            function P(t, e, r) {
              return (
                t * this.props[0] +
                e * this.props[4] +
                r * this.props[8] +
                this.props[12]
              );
            }
            function E(t, e, r) {
              return (
                t * this.props[1] +
                e * this.props[5] +
                r * this.props[9] +
                this.props[13]
              );
            }
            function S(t, e, r) {
              return (
                t * this.props[2] +
                e * this.props[6] +
                r * this.props[10] +
                this.props[14]
              );
            }
            function x() {
              var t =
                  this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                a = this.props[0] / t,
                n =
                  (this.props[4] * this.props[13] -
                    this.props[5] * this.props[12]) /
                  t,
                s =
                  -(
                    this.props[0] * this.props[13] -
                    this.props[1] * this.props[12]
                  ) / t,
                o = new Matrix();
              return (
                (o.props[0] = e),
                (o.props[1] = r),
                (o.props[4] = i),
                (o.props[5] = a),
                (o.props[12] = n),
                (o.props[13] = s),
                o
              );
            }
            function A(t) {
              return this.getInverseMatrix().applyToPointArray(
                t[0],
                t[1],
                t[2] || 0
              );
            }
            function w(t) {
              var e,
                r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = A(t[e]);
              return i;
            }
            function C(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity())
                (i[0] = t[0]),
                  (i[1] = t[1]),
                  (i[2] = e[0]),
                  (i[3] = e[1]),
                  (i[4] = r[0]),
                  (i[5] = r[1]);
              else {
                var a = this.props[0],
                  n = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  h = this.props[12],
                  l = this.props[13];
                (i[0] = t[0] * a + t[1] * s + h),
                  (i[1] = t[0] * n + t[1] * o + l),
                  (i[2] = e[0] * a + e[1] * s + h),
                  (i[3] = e[0] * n + e[1] * o + l),
                  (i[4] = r[0] * a + r[1] * s + h),
                  (i[5] = r[0] * n + r[1] * o + l);
              }
              return i;
            }
            function k(t, e, r) {
              return this.isIdentity()
                ? [t, e, r]
                : [
                    t * this.props[0] +
                      e * this.props[4] +
                      r * this.props[8] +
                      this.props[12],
                    t * this.props[1] +
                      e * this.props[5] +
                      r * this.props[9] +
                      this.props[13],
                    t * this.props[2] +
                      e * this.props[6] +
                      r * this.props[10] +
                      this.props[14],
                  ];
            }
            function T(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return (
                Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                "," +
                Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
              );
            }
            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                (r += i(1e4 * e[t]) / 1e4),
                  (r += 15 === t ? ")" : ","),
                  (t += 1);
              return r;
            }
            function M(t) {
              return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                ? i(1e4 * t) / 1e4
                : t;
            }
            function F() {
              var t = this.props;
              return (
                "matrix(" +
                M(t[0]) +
                "," +
                M(t[1]) +
                "," +
                M(t[4]) +
                "," +
                M(t[5]) +
                "," +
                M(t[12]) +
                "," +
                M(t[13]) +
                ")"
              );
            }
            return function () {
              (this.reset = a),
                (this.rotate = n),
                (this.rotateX = s),
                (this.rotateY = o),
                (this.rotateZ = h),
                (this.skew = p),
                (this.skewFromAxis = c),
                (this.shear = l),
                (this.scale = f),
                (this.setTransform = u),
                (this.translate = d),
                (this.transform = m),
                (this.applyToPoint = _),
                (this.applyToX = P),
                (this.applyToY = E),
                (this.applyToZ = S),
                (this.applyToPointArray = k),
                (this.applyToTriplePoints = C),
                (this.applyToPointStringified = T),
                (this.toCSS = D),
                (this.to2dCSS = F),
                (this.clone = v),
                (this.cloneFromProps = b),
                (this.equals = g),
                (this.inversePoints = w),
                (this.inversePoint = A),
                (this.getInverseMatrix = x),
                (this._t = this.transform),
                (this.isIdentity = y),
                (this._identity = !0),
                (this._identityCalculated = !1),
                (this.props = createTypedArray("float32", 16)),
                this.reset();
            };
          })();
        function _typeof$3(t) {
          return (
            (_typeof$3 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$3(t)
          );
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";
        function setLocation(t) {
          setLocationHref(t);
        }
        function searchAnimations() {
          !0 === standalone
            ? animationManager.searchAnimations(
                animationData,
                standalone,
                renderer
              )
            : animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
          setSubframeEnabled(t);
        }
        function setPrefix(t) {
          setIdPrefix(t);
        }
        function loadAnimation(t) {
          return (
            !0 === standalone && (t.animationData = JSON.parse(animationData)),
            animationManager.loadAnimation(t)
          );
        }
        function setQuality(t) {
          if ("string" == typeof t)
            switch (t) {
              case "high":
                setDefaultCurveSegments(200);
                break;
              default:
              case "medium":
                setDefaultCurveSegments(50);
                break;
              case "low":
                setDefaultCurveSegments(10);
            }
          else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
        }
        function inBrowser() {
          return "undefined" != typeof navigator;
        }
        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e);
        }
        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null;
          }
        }
        function checkReady() {
          "complete" === document.readyState &&
            (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
          }
          return null;
        }
        (lottie.play = animationManager.play),
          (lottie.pause = animationManager.pause),
          (lottie.setLocationHref = setLocation),
          (lottie.togglePause = animationManager.togglePause),
          (lottie.setSpeed = animationManager.setSpeed),
          (lottie.setDirection = animationManager.setDirection),
          (lottie.stop = animationManager.stop),
          (lottie.searchAnimations = searchAnimations),
          (lottie.registerAnimation = animationManager.registerAnimation),
          (lottie.loadAnimation = loadAnimation),
          (lottie.setSubframeRendering = setSubframeRendering),
          (lottie.resize = animationManager.resize),
          (lottie.goToAndStop = animationManager.goToAndStop),
          (lottie.destroy = animationManager.destroy),
          (lottie.setQuality = setQuality),
          (lottie.inBrowser = inBrowser),
          (lottie.installPlugin = installPlugin),
          (lottie.freeze = animationManager.freeze),
          (lottie.unfreeze = animationManager.unfreeze),
          (lottie.setVolume = animationManager.setVolume),
          (lottie.mute = animationManager.mute),
          (lottie.unmute = animationManager.unmute),
          (lottie.getRegisteredAnimations =
            animationManager.getRegisteredAnimations),
          (lottie.useWebWorker = setWebWorker),
          (lottie.setIDPrefix = setPrefix),
          (lottie.__getFactory = getFactory),
          (lottie.version = "5.10.0");
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || { src: "" };
          (queryString = myScript.src
            ? myScript.src.replace(/^[^\?]+\??/, "")
            : ""),
            (renderer = getQueryVariable("renderer"));
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && (window.bodymovin = lottie);
        } catch (t) {}
        var ShapeModifiers = (function () {
          var t = {},
            e = {};
          return (
            (t.registerModifier = function (t, r) {
              e[t] || (e[t] = r);
            }),
            (t.getModifier = function (t, r, i) {
              return new e[t](r, i);
            }),
            t
          );
        })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function PuckerAndBloatModifier() {}
        (ShapeModifier.prototype.initModifierProperties = function () {}),
          (ShapeModifier.prototype.addShapeToModifier = function () {}),
          (ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollectionPool.newShapeCollection(),
              };
              this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated();
            }
          }),
          (ShapeModifier.prototype.init = function (t, e) {
            (this.shapes = []),
              (this.elem = t),
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e),
              (this.frameId = initialDefaultFrame),
              (this.closed = !1),
              (this.k = !1),
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          extendPrototype([DynamicPropertyContainer], ShapeModifier),
          extendPrototype([ShapeModifier], TrimModifier),
          (TrimModifier.prototype.initModifierProperties = function (t, e) {
            (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
              (this.sValue = 0),
              (this.eValue = 0),
              (this.getValue = this.processKeys),
              (this.m = e.m),
              (this._isAnimated =
                !!this.s.effectsSequence.length ||
                !!this.e.effectsSequence.length ||
                !!this.o.effectsSequence.length);
          }),
          (TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
          }),
          (TrimModifier.prototype.calculateShapeEdges = function (
            t,
            e,
            r,
            i,
            a
          ) {
            var n = [];
            e <= 1
              ? n.push({ s: t, e: e })
              : t >= 1
              ? n.push({ s: t - 1, e: e - 1 })
              : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
            var s,
              o,
              h = [],
              l = n.length;
            for (s = 0; s < l; s += 1) {
              var p, c;
              (o = n[s]).e * a < i ||
                o.s * a > i + r ||
                ((p = o.s * a <= i ? 0 : (o.s * a - i) / r),
                (c = o.e * a >= i + r ? 1 : (o.e * a - i) / r),
                h.push([p, c]));
            }
            return h.length || h.push([0, 0]), h;
          }),
          (TrimModifier.prototype.releasePathsData = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return (t.length = 0), t;
          }),
          (TrimModifier.prototype.processShapes = function (t) {
            var e, r, i, a;
            if (this._mdf || t) {
              var n = (this.o.v % 360) / 360;
              if (
                (n < 0 && (n += 1),
                (e =
                  this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) >
                  (r =
                    this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n))
              ) {
                var s = e;
                (e = r), (r = s);
              }
              (e = 1e-4 * Math.round(1e4 * e)),
                (r = 1e-4 * Math.round(1e4 * r)),
                (this.sValue = e),
                (this.eValue = r);
            } else (e = this.sValue), (r = this.eValue);
            var o,
              h,
              l,
              p,
              c,
              f = this.shapes.length,
              u = 0;
            if (r === e)
              for (a = 0; a < f; a += 1)
                this.shapes[a].localShapeCollection.releaseShapes(),
                  (this.shapes[a].shape._mdf = !0),
                  (this.shapes[a].shape.paths =
                    this.shapes[a].localShapeCollection),
                  this._mdf && (this.shapes[a].pathsData.length = 0);
            else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
              if (this._mdf)
                for (a = 0; a < f; a += 1)
                  (this.shapes[a].pathsData.length = 0),
                    (this.shapes[a].shape._mdf = !0);
            } else {
              var d,
                m,
                y = [];
              for (a = 0; a < f; a += 1)
                if (
                  (d = this.shapes[a]).shape._mdf ||
                  this._mdf ||
                  t ||
                  2 === this.m
                ) {
                  if (
                    ((h = (i = d.shape.paths)._length),
                    (c = 0),
                    !d.shape._mdf && d.pathsData.length)
                  )
                    c = d.totalShapeLength;
                  else {
                    for (
                      l = this.releasePathsData(d.pathsData), o = 0;
                      o < h;
                      o += 1
                    )
                      (p = bez.getSegmentsLength(i.shapes[o])),
                        l.push(p),
                        (c += p.totalLength);
                    (d.totalShapeLength = c), (d.pathsData = l);
                  }
                  (u += c), (d.shape._mdf = !0);
                } else d.shape.paths = d.localShapeCollection;
              var g,
                v = e,
                b = r,
                _ = 0;
              for (a = f - 1; a >= 0; a -= 1)
                if ((d = this.shapes[a]).shape._mdf) {
                  for (
                    (m = d.localShapeCollection).releaseShapes(),
                      2 === this.m && f > 1
                        ? ((g = this.calculateShapeEdges(
                            e,
                            r,
                            d.totalShapeLength,
                            _,
                            u
                          )),
                          (_ += d.totalShapeLength))
                        : (g = [[v, b]]),
                      h = g.length,
                      o = 0;
                    o < h;
                    o += 1
                  ) {
                    (v = g[o][0]),
                      (b = g[o][1]),
                      (y.length = 0),
                      b <= 1
                        ? y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength * b,
                          })
                        : v >= 1
                        ? y.push({
                            s: d.totalShapeLength * (v - 1),
                            e: d.totalShapeLength * (b - 1),
                          })
                        : (y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength,
                          }),
                          y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
                    var P = this.addShapes(d, y[0]);
                    if (y[0].s !== y[0].e) {
                      if (y.length > 1)
                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                          var E = P.pop();
                          this.addPaths(P, m), (P = this.addShapes(d, y[1], E));
                        } else
                          this.addPaths(P, m), (P = this.addShapes(d, y[1]));
                      this.addPaths(P, m);
                    }
                  }
                  d.shape.paths = m;
                }
            }
          }),
          (TrimModifier.prototype.addPaths = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r]);
          }),
          (TrimModifier.prototype.addSegment = function (t, e, r, i, a, n, s) {
            a.setXYAt(e[0], e[1], "o", n),
              a.setXYAt(r[0], r[1], "i", n + 1),
              s && a.setXYAt(t[0], t[1], "v", n),
              a.setXYAt(i[0], i[1], "v", n + 1);
          }),
          (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r),
              e.setXYAt(t[2], t[6], "i", r + 1),
              i && e.setXYAt(t[0], t[4], "v", r),
              e.setXYAt(t[3], t[7], "v", r + 1);
          }),
          (TrimModifier.prototype.addShapes = function (t, e, r) {
            var i,
              a,
              n,
              s,
              o,
              h,
              l,
              p,
              c = t.pathsData,
              f = t.shape.paths.shapes,
              u = t.shape.paths._length,
              d = 0,
              m = [],
              y = !0;
            for (
              r
                ? ((o = r._length), (p = r._length))
                : ((r = shapePool.newElement()), (o = 0), (p = 0)),
                m.push(r),
                i = 0;
              i < u;
              i += 1
            ) {
              for (
                h = c[i].lengths,
                  r.c = f[i].c,
                  n = f[i].c ? h.length : h.length + 1,
                  a = 1;
                a < n;
                a += 1
              )
                if (d + (s = h[a - 1]).addedLength < e.s)
                  (d += s.addedLength), (r.c = !1);
                else {
                  if (d > e.e) {
                    r.c = !1;
                    break;
                  }
                  e.s <= d && e.e >= d + s.addedLength
                    ? (this.addSegment(
                        f[i].v[a - 1],
                        f[i].o[a - 1],
                        f[i].i[a],
                        f[i].v[a],
                        r,
                        o,
                        y
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        f[i].v[a - 1],
                        f[i].v[a],
                        f[i].o[a - 1],
                        f[i].i[a],
                        (e.s - d) / s.addedLength,
                        (e.e - d) / s.addedLength,
                        h[a - 1]
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1)),
                    (d += s.addedLength),
                    (o += 1);
                }
              if (f[i].c && h.length) {
                if (((s = h[a - 1]), d <= e.e)) {
                  var g = h[a - 1].addedLength;
                  e.s <= d && e.e >= d + g
                    ? (this.addSegment(
                        f[i].v[a - 1],
                        f[i].o[a - 1],
                        f[i].i[0],
                        f[i].v[0],
                        r,
                        o,
                        y
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        f[i].v[a - 1],
                        f[i].v[0],
                        f[i].o[a - 1],
                        f[i].i[0],
                        (e.s - d) / g,
                        (e.e - d) / g,
                        h[a - 1]
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1));
                } else r.c = !1;
                (d += s.addedLength), (o += 1);
              }
              if (
                (r._length &&
                  (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
                  r.setXYAt(
                    r.v[r._length - 1][0],
                    r.v[r._length - 1][1],
                    "o",
                    r._length - 1
                  )),
                d > e.e)
              )
                break;
              i < u - 1 &&
                ((r = shapePool.newElement()), (y = !0), m.push(r), (o = 0));
            }
            return m;
          }),
          extendPrototype([ShapeModifier], PuckerAndBloatModifier),
          (PuckerAndBloatModifier.prototype.initModifierProperties = function (
            t,
            e
          ) {
            (this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this._isAnimated = !!this.amount.effectsSequence.length);
          }),
          (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var r = e / 100,
              i = [0, 0],
              a = t._length,
              n = 0;
            for (n = 0; n < a; n += 1) (i[0] += t.v[n][0]), (i[1] += t.v[n][1]);
            (i[0] /= a), (i[1] /= a);
            var s,
              o,
              h,
              l,
              p,
              c,
              f = shapePool.newElement();
            for (f.c = t.c, n = 0; n < a; n += 1)
              (s = t.v[n][0] + (i[0] - t.v[n][0]) * r),
                (o = t.v[n][1] + (i[1] - t.v[n][1]) * r),
                (h = t.o[n][0] + (i[0] - t.o[n][0]) * -r),
                (l = t.o[n][1] + (i[1] - t.o[n][1]) * -r),
                (p = t.i[n][0] + (i[0] - t.i[n][0]) * -r),
                (c = t.i[n][1] + (i[1] - t.i[n][1]) * -r),
                f.setTripleAt(s, o, h, l, p, c, n);
            return f;
          }),
          (PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              a,
              n,
              s,
              o = this.shapes.length,
              h = this.amount.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (n = this.shapes[r]).localShapeCollection),
                  n.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      n.shape._mdf = !0,
                      e = n.shape.paths.shapes,
                      a = n.shape.paths._length,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h));
                n.shape.paths = n.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          });
        var TransformPropertyFactory = (function () {
          var t = [0, 0];
          function e(t, e, r) {
            if (
              ((this.elem = t),
              (this.frameId = -1),
              (this.propType = "transform"),
              (this.data = e),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(r || t),
              e.p && e.p.s
                ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                  e.p.z &&
                    (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    t,
                    e.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
              e.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  t,
                  e.rx,
                  0,
                  degToRads,
                  this
                )),
                (this.ry = PropertyFactory.getProp(
                  t,
                  e.ry,
                  0,
                  degToRads,
                  this
                )),
                (this.rz = PropertyFactory.getProp(
                  t,
                  e.rz,
                  0,
                  degToRads,
                  this
                )),
                e.or.k[0].ti)
              ) {
                var i,
                  a = e.or.k.length;
                for (i = 0; i < a; i += 1)
                  (e.or.k[i].to = null), (e.or.k[i].ti = null);
              }
              (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                t,
                e.r || { k: 0 },
                0,
                degToRads,
                this
              );
            e.sk &&
              ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              )),
              e.o
                ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0);
          }
          return (
            (e.prototype = {
              applyToMatrix: function (t) {
                var e = this._mdf;
                this.iterateDynamicProperties(),
                  (this._mdf = this._mdf || e),
                  this.a &&
                    t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                  this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                  this.r
                    ? t.rotate(-this.r.v)
                    : t
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                  this.data.p.s
                    ? this.data.p.z
                      ? t.translate(this.px.v, this.py.v, -this.pz.v)
                      : t.translate(this.px.v, this.py.v, 0)
                    : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              },
              getValue: function (e) {
                if (this.elem.globalData.frameId !== this.frameId) {
                  if (
                    (this._isDirty &&
                      (this.precalculateMatrix(), (this._isDirty = !1)),
                    this.iterateDynamicProperties(),
                    this._mdf || e)
                  ) {
                    var r;
                    if (
                      (this.v.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1 &&
                        this.v.translate(
                          -this.a.v[0],
                          -this.a.v[1],
                          this.a.v[2]
                        ),
                      this.appliedTransformations < 2 &&
                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk &&
                        this.appliedTransformations < 3 &&
                        this.v.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r && this.appliedTransformations < 4
                        ? this.v.rotate(-this.r.v)
                        : !this.r &&
                          this.appliedTransformations < 4 &&
                          this.v
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.autoOriented)
                    ) {
                      var i, a;
                      if (
                        ((r = this.elem.globalData.frameRate),
                        this.p && this.p.keyframes && this.p.getValueAtTime)
                      )
                        this.p._caching.lastFrame + this.p.offsetTime <=
                        this.p.keyframes[0].t
                          ? ((i = this.p.getValueAtTime(
                              (this.p.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (a = this.p.getValueAtTime(
                              this.p.keyframes[0].t / r,
                              0
                            )))
                          : this.p._caching.lastFrame + this.p.offsetTime >=
                            this.p.keyframes[this.p.keyframes.length - 1].t
                          ? ((i = this.p.getValueAtTime(
                              this.p.keyframes[this.p.keyframes.length - 1].t /
                                r,
                              0
                            )),
                            (a = this.p.getValueAtTime(
                              (this.p.keyframes[this.p.keyframes.length - 1].t -
                                0.05) /
                                r,
                              0
                            )))
                          : ((i = this.p.pv),
                            (a = this.p.getValueAtTime(
                              (this.p._caching.lastFrame +
                                this.p.offsetTime -
                                0.01) /
                                r,
                              this.p.offsetTime
                            )));
                      else if (
                        this.px &&
                        this.px.keyframes &&
                        this.py.keyframes &&
                        this.px.getValueAtTime &&
                        this.py.getValueAtTime
                      ) {
                        (i = []), (a = []);
                        var n = this.px,
                          s = this.py;
                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t
                          ? ((i[0] = n.getValueAtTime(
                              (n.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (i[1] = s.getValueAtTime(
                              (s.keyframes[0].t + 0.01) / r,
                              0
                            )),
                            (a[0] = n.getValueAtTime(n.keyframes[0].t / r, 0)),
                            (a[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)))
                          : n._caching.lastFrame + n.offsetTime >=
                            n.keyframes[n.keyframes.length - 1].t
                          ? ((i[0] = n.getValueAtTime(
                              n.keyframes[n.keyframes.length - 1].t / r,
                              0
                            )),
                            (i[1] = s.getValueAtTime(
                              s.keyframes[s.keyframes.length - 1].t / r,
                              0
                            )),
                            (a[0] = n.getValueAtTime(
                              (n.keyframes[n.keyframes.length - 1].t - 0.01) /
                                r,
                              0
                            )),
                            (a[1] = s.getValueAtTime(
                              (s.keyframes[s.keyframes.length - 1].t - 0.01) /
                                r,
                              0
                            )))
                          : ((i = [n.pv, s.pv]),
                            (a[0] = n.getValueAtTime(
                              (n._caching.lastFrame + n.offsetTime - 0.01) / r,
                              n.offsetTime
                            )),
                            (a[1] = s.getValueAtTime(
                              (s._caching.lastFrame + s.offsetTime - 0.01) / r,
                              s.offsetTime
                            )));
                      } else i = a = t;
                      this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]));
                    }
                    this.data.p && this.data.p.s
                      ? this.data.p.z
                        ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                        : this.v.translate(this.px.v, this.py.v, 0)
                      : this.v.translate(
                          this.p.v[0],
                          this.p.v[1],
                          -this.p.v[2]
                        );
                  }
                  this.frameId = this.elem.globalData.frameId;
                }
              },
              precalculateMatrix: function () {
                if (
                  !this.a.k &&
                  (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                  (this.appliedTransformations = 1),
                  !this.s.effectsSequence.length)
                ) {
                  if (
                    (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    (this.appliedTransformations = 2),
                    this.sk)
                  ) {
                    if (
                      this.sk.effectsSequence.length ||
                      this.sa.effectsSequence.length
                    )
                      return;
                    this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                      (this.appliedTransformations = 3);
                  }
                  this.r
                    ? this.r.effectsSequence.length ||
                      (this.pre.rotate(-this.r.v),
                      (this.appliedTransformations = 4))
                    : this.rz.effectsSequence.length ||
                      this.ry.effectsSequence.length ||
                      this.rx.effectsSequence.length ||
                      this.or.effectsSequence.length ||
                      (this.pre
                        .rotateZ(-this.rz.v)
                        .rotateY(this.ry.v)
                        .rotateX(this.rx.v)
                        .rotateZ(-this.or.v[2])
                        .rotateY(this.or.v[1])
                        .rotateX(this.or.v[0]),
                      (this.appliedTransformations = 4));
                }
              },
              autoOrient: function () {},
            }),
            extendPrototype([DynamicPropertyContainer], e),
            (e.prototype.addDynamicProperty = function (t) {
              this._addDynamicProperty(t),
                this.elem.addDynamicProperty(t),
                (this._isDirty = !0);
            }),
            (e.prototype._addDynamicProperty =
              DynamicPropertyContainer.prototype.addDynamicProperty),
            {
              getTransformProperty: function (t, r, i) {
                return new e(t, r, i);
              },
            }
          );
        })();
        function RepeaterModifier() {}
        function RoundCornersModifier() {}
        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
        }
        function floatZero(t) {
          return Math.abs(t) <= 1e-5;
        }
        function lerp(t, e, r) {
          return t * (1 - r) + e * r;
        }
        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
        }
        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var i = e * e - 4 * t * r;
          if (i < 0) return [];
          var a = -e / (2 * t);
          if (0 === i) return [a];
          var n = Math.sqrt(i) / (2 * t);
          return [a - n, a + n];
        }
        function polynomialCoefficients(t, e, r, i) {
          return [
            3 * e - t - 3 * r + i,
            3 * t - 6 * e + 3 * r,
            -3 * t + 3 * e,
            t,
          ];
        }
        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1);
        }
        function PolynomialBezier(t, e, r, i, a) {
          a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)),
            a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
          var n = polynomialCoefficients(t[0], e[0], r[0], i[0]),
            s = polynomialCoefficients(t[1], e[1], r[1], i[1]);
          (this.a = [n[0], s[0]]),
            (this.b = [n[1], s[1]]),
            (this.c = [n[2], s[2]]),
            (this.d = [n[3], s[3]]),
            (this.points = [t, e, r, i]);
        }
        function extrema(t, e) {
          var r = t.points[0][e],
            i = t.points[t.points.length - 1][e];
          if (r > i) {
            var a = i;
            (i = r), (r = a);
          }
          for (
            var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0;
            s < n.length;
            s += 1
          )
            if (n[s] > 0 && n[s] < 1) {
              var o = t.point(n[s])[e];
              o < r ? (r = o) : o > i && (i = o);
            }
          return { min: r, max: i };
        }
        function intersectData(t, e, r) {
          var i = t.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r,
          };
        }
        function splitData(t) {
          var e = t.bez.split(0.5);
          return [
            intersectData(e[0], t.t1, t.t),
            intersectData(e[1], t.t, t.t2),
          ];
        }
        function boxIntersect(t, e) {
          return (
            2 * Math.abs(t.cx - e.cx) < t.width + e.width &&
            2 * Math.abs(t.cy - e.cy) < t.height + e.height
          );
        }
        function intersectsImpl(t, e, r, i, a, n) {
          if (boxIntersect(t, e))
            if (
              r >= n ||
              (t.width <= i && t.height <= i && e.width <= i && e.height <= i)
            )
              a.push([t.t, e.t]);
            else {
              var s = splitData(t),
                o = splitData(e);
              intersectsImpl(s[0], o[0], r + 1, i, a, n),
                intersectsImpl(s[0], o[1], r + 1, i, a, n),
                intersectsImpl(s[1], o[0], r + 1, i, a, n),
                intersectsImpl(s[1], o[1], r + 1, i, a, n);
            }
        }
        function crossProduct(t, e) {
          return [
            t[1] * e[2] - t[2] * e[1],
            t[2] * e[0] - t[0] * e[2],
            t[0] * e[1] - t[1] * e[0],
          ];
        }
        function lineIntersection(t, e, r, i) {
          var a = [t[0], t[1], 1],
            n = [e[0], e[1], 1],
            s = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            h = crossProduct(crossProduct(a, n), crossProduct(s, o));
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
        }
        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
        }
        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
        }
        function ZigZagModifier() {}
        function setPoint(t, e, r, i, a, n, s) {
          var o = r - Math.PI / 2,
            h = r + Math.PI / 2,
            l = e[0] + Math.cos(r) * i * a,
            p = e[1] - Math.sin(r) * i * a;
          t.setTripleAt(
            l,
            p,
            l + Math.cos(o) * n,
            p - Math.sin(o) * n,
            l + Math.cos(h) * s,
            p - Math.sin(h) * s,
            t.length()
          );
        }
        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = 0.5 * -Math.PI;
          return [
            Math.cos(i) * r[0] - Math.sin(i) * r[1],
            Math.sin(i) * r[0] + Math.cos(i) * r[1],
          ];
        }
        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            i = (e + 1) % t.length(),
            a = getPerpendicularVector(t.v[r], t.v[i]);
          return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
        }
        function zigZagCorner(t, e, r, i, a, n, s) {
          var o = getProjectingAngle(e, r),
            h = e.v[r % e._length],
            l = e.v[0 === r ? e._length - 1 : r - 1],
            p = e.v[(r + 1) % e._length],
            c =
              2 === n
                ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2))
                : 0,
            f =
              2 === n
                ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2))
                : 0;
          setPoint(
            t,
            e.v[r % e._length],
            o,
            s,
            i,
            f / (2 * (a + 1)),
            c / (2 * (a + 1)),
            n
          );
        }
        function zigZagSegment(t, e, r, i, a, n) {
          for (var s = 0; s < i; s += 1) {
            var o = (s + 1) / (i + 1),
              h =
                2 === a
                  ? Math.sqrt(
                      Math.pow(e.points[3][0] - e.points[0][0], 2) +
                        Math.pow(e.points[3][1] - e.points[0][1], 2)
                    )
                  : 0,
              l = e.normalAngle(o);
            setPoint(
              t,
              e.point(o),
              l,
              n,
              r,
              h / (2 * (i + 1)),
              h / (2 * (i + 1)),
              a
            ),
              (n = -n);
          }
          return n;
        }
        function linearOffset(t, e, r) {
          var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, i, r), polarOffset(e, i, r)];
        }
        function offsetSegment(t, e) {
          var r, i, a, n, s, o, h;
          (r = (h = linearOffset(t.points[0], t.points[1], e))[0]),
            (i = h[1]),
            (a = (h = linearOffset(t.points[1], t.points[2], e))[0]),
            (n = h[1]),
            (s = (h = linearOffset(t.points[2], t.points[3], e))[0]),
            (o = h[1]);
          var l = lineIntersection(r, i, a, n);
          null === l && (l = i);
          var p = lineIntersection(s, o, a, n);
          return null === p && (p = s), new PolynomialBezier(r, l, p, o);
        }
        function joinLines(t, e, r, i, a) {
          var n = e.points[3],
            s = r.points[0];
          if (3 === i) return n;
          if (pointEqual(n, s)) return n;
          if (2 === i) {
            var o = -e.tangentAngle(1),
              h = -r.tangentAngle(0) + Math.PI,
              l = lineIntersection(
                n,
                polarOffset(n, o + Math.PI / 2, 100),
                s,
                polarOffset(s, o + Math.PI / 2, 100)
              ),
              p = l ? pointDistance(l, n) : pointDistance(n, s) / 2,
              c = polarOffset(n, o, 2 * p * roundCorner);
            return (
              t.setXYAt(c[0], c[1], "o", t.length() - 1),
              (c = polarOffset(s, h, 2 * p * roundCorner)),
              t.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], t.length()),
              s
            );
          }
          var f = lineIntersection(
            pointEqual(n, e.points[2]) ? e.points[0] : e.points[2],
            n,
            s,
            pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]
          );
          return f && pointDistance(f, n) < a
            ? (t.setTripleAt(f[0], f[1], f[0], f[1], f[0], f[1], t.length()), f)
            : n;
        }
        function getIntersection(t, e) {
          var r = t.intersections(e);
          return (
            r.length && floatEqual(r[0][0], 1) && r.shift(),
            r.length ? r[0] : null
          );
        }
        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            i = e.slice(),
            a = getIntersection(t[t.length - 1], e[0]);
          return (
            a &&
              ((r[t.length - 1] = t[t.length - 1].split(a[0])[0]),
              (i[0] = e[0].split(a[1])[1])),
            t.length > 1 &&
            e.length > 1 &&
            (a = getIntersection(t[0], e[e.length - 1]))
              ? [[t[0].split(a[0])[0]], [e[e.length - 1].split(a[1])[1]]]
              : [r, i]
          );
        }
        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1)
            (e = pruneSegmentIntersection(t[r - 1], t[r])),
              (t[r - 1] = e[0]),
              (t[r] = e[1]);
          return (
            t.length > 1 &&
              ((e = pruneSegmentIntersection(t[t.length - 1], t[0])),
              (t[t.length - 1] = e[0]),
              (t[0] = e[1])),
            t
          );
        }
        function offsetSegmentSplit(t, e) {
          var r,
            i,
            a,
            n,
            s = t.inflectionPoints();
          if (0 === s.length) return [offsetSegment(t, e)];
          if (1 === s.length || floatEqual(s[1], 1))
            return (
              (r = (a = t.split(s[0]))[0]),
              (i = a[1]),
              [offsetSegment(r, e), offsetSegment(i, e)]
            );
          r = (a = t.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return (
            (n = (a = a[1].split(o))[0]),
            (i = a[1]),
            [offsetSegment(r, e), offsetSegment(n, e), offsetSegment(i, e)]
          );
        }
        function OffsetPathModifier() {}
        function getFontProperties(t) {
          for (
            var e = t.fStyle ? t.fStyle.split(" ") : [],
              r = "normal",
              i = "normal",
              a = e.length,
              n = 0;
            n < a;
            n += 1
          )
            switch (e[n].toLowerCase()) {
              case "italic":
                i = "italic";
                break;
              case "bold":
                r = "700";
                break;
              case "black":
                r = "900";
                break;
              case "medium":
                r = "500";
                break;
              case "regular":
              case "normal":
                r = "400";
                break;
              case "light":
              case "thin":
                r = "200";
            }
          return { style: i, weight: t.fWeight || r };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
          (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
              (this.tr = TransformPropertyFactory.getTransformProperty(
                t,
                e.tr,
                this
              )),
              (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
              (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
              (this.data = e),
              this.dynamicProperties.length || this.getValue(!0),
              (this._isAnimated = !!this.dynamicProperties.length),
              (this.pMatrix = new Matrix()),
              (this.rMatrix = new Matrix()),
              (this.sMatrix = new Matrix()),
              (this.tMatrix = new Matrix()),
              (this.matrix = new Matrix());
          }),
          (RepeaterModifier.prototype.applyTransforms = function (
            t,
            e,
            r,
            i,
            a,
            n
          ) {
            var s = n ? -1 : 1,
              o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
              h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
            t.translate(i.p.v[0] * s * a, i.p.v[1] * s * a, i.p.v[2]),
              e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              e.rotate(-i.r.v * s * a),
              e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
              r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              r.scale(n ? 1 / o : o, n ? 1 / h : h),
              r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }),
          (RepeaterModifier.prototype.init = function (t, e, r, i) {
            for (
              this.elem = t,
                this.arr = e,
                this.pos = r,
                this.elemsData = i,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[r]);
              r > 0;

            )
              (r -= 1), this._elements.unshift(e[r]);
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (RepeaterModifier.prototype.resetElements = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              (t[e]._processed = !1),
                "gr" === t[e].ty && this.resetElements(t[e].it);
          }),
          (RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
          }),
          (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              (t[r]._render = e),
                "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
          }),
          (RepeaterModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              a,
              n,
              s = !1;
            if (this._mdf || t) {
              var o,
                h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var l = { it: this.cloneElements(this._elements), ty: "gr" };
                  l.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: "Transform",
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: "tr",
                  }),
                    this.arr.splice(0, 0, l),
                    this._groups.splice(0, 0, l),
                    (this._currentCopies += 1);
                }
                this.elem.reloadShapes(), (s = !0);
              }
              for (n = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                if (
                  ((o = n < h),
                  (this._groups[i]._render = o),
                  this.changeGroupRender(this._groups[i].it, o),
                  !o)
                ) {
                  var p = this.elemsData[i].it,
                    c = p[p.length - 1];
                  0 !== c.transform.op.v
                    ? ((c.transform.op._mdf = !0), (c.transform.op.v = 0))
                    : (c.transform.op._mdf = !1);
                }
                n += 1;
              }
              this._currentCopies = h;
              var f = this.o.v,
                u = f % 1,
                d = f > 0 ? Math.floor(f) : Math.ceil(f),
                m = this.pMatrix.props,
                y = this.rMatrix.props,
                g = this.sMatrix.props;
              this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
              var v,
                b,
                _ = 0;
              if (f > 0) {
                for (; _ < d; )
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1
                  ),
                    (_ += 1);
                u &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    u,
                    !1
                  ),
                  (_ += u));
              } else if (f < 0) {
                for (; _ > d; )
                  this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !0
                  ),
                    (_ -= 1);
                u &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    -u,
                    !0
                  ),
                  (_ -= u));
              }
              for (
                i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                  a = 1 === this.data.m ? 1 : -1,
                  n = this._currentCopies;
                n;

              ) {
                if (
                  ((b = (r = (e = this.elemsData[i].it)[e.length - 1].transform
                    .mProps.v.props).length),
                  (e[e.length - 1].transform.mProps._mdf = !0),
                  (e[e.length - 1].transform.op._mdf = !0),
                  (e[e.length - 1].transform.op.v =
                    1 === this._currentCopies
                      ? this.so.v
                      : this.so.v +
                        (this.eo.v - this.so.v) *
                          (i / (this._currentCopies - 1))),
                  0 !== _)
                ) {
                  for (
                    ((0 !== i && 1 === a) ||
                      (i !== this._currentCopies - 1 && -1 === a)) &&
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1
                      ),
                      this.matrix.transform(
                        y[0],
                        y[1],
                        y[2],
                        y[3],
                        y[4],
                        y[5],
                        y[6],
                        y[7],
                        y[8],
                        y[9],
                        y[10],
                        y[11],
                        y[12],
                        y[13],
                        y[14],
                        y[15]
                      ),
                      this.matrix.transform(
                        g[0],
                        g[1],
                        g[2],
                        g[3],
                        g[4],
                        g[5],
                        g[6],
                        g[7],
                        g[8],
                        g[9],
                        g[10],
                        g[11],
                        g[12],
                        g[13],
                        g[14],
                        g[15]
                      ),
                      this.matrix.transform(
                        m[0],
                        m[1],
                        m[2],
                        m[3],
                        m[4],
                        m[5],
                        m[6],
                        m[7],
                        m[8],
                        m[9],
                        m[10],
                        m[11],
                        m[12],
                        m[13],
                        m[14],
                        m[15]
                      ),
                      v = 0;
                    v < b;
                    v += 1
                  )
                    r[v] = this.matrix.props[v];
                  this.matrix.reset();
                } else
                  for (this.matrix.reset(), v = 0; v < b; v += 1)
                    r[v] = this.matrix.props[v];
                (_ += 1), (n -= 1), (i += a);
              }
            } else
              for (n = this._currentCopies, i = 0, a = 1; n; )
                (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v
                  .props),
                  (e[e.length - 1].transform.mProps._mdf = !1),
                  (e[e.length - 1].transform.op._mdf = !1),
                  (n -= 1),
                  (i += a);
            return s;
          }),
          (RepeaterModifier.prototype.addShape = function () {}),
          extendPrototype([ShapeModifier], RoundCornersModifier),
          (RoundCornersModifier.prototype.initModifierProperties = function (
            t,
            e
          ) {
            (this.getValue = this.processKeys),
              (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this._isAnimated = !!this.rd.effectsSequence.length);
          }),
          (RoundCornersModifier.prototype.processPath = function (t, e) {
            var r,
              i = shapePool.newElement();
            i.c = t.c;
            var a,
              n,
              s,
              o,
              h,
              l,
              p,
              c,
              f,
              u,
              d,
              m,
              y = t._length,
              g = 0;
            for (r = 0; r < y; r += 1)
              (a = t.v[r]),
                (s = t.o[r]),
                (n = t.i[r]),
                a[0] === s[0] && a[1] === s[1] && a[0] === n[0] && a[1] === n[1]
                  ? (0 !== r && r !== y - 1) || t.c
                    ? ((o = 0 === r ? t.v[y - 1] : t.v[r - 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = d = a[0] + (o[0] - a[0]) * l),
                      (c = m = a[1] - (a[1] - o[1]) * l),
                      (f = p - (p - a[0]) * roundCorner),
                      (u = c - (c - a[1]) * roundCorner),
                      i.setTripleAt(p, c, f, u, d, m, g),
                      (g += 1),
                      (o = r === y - 1 ? t.v[0] : t.v[r + 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = f = a[0] + (o[0] - a[0]) * l),
                      (c = u = a[1] + (o[1] - a[1]) * l),
                      (d = p - (p - a[0]) * roundCorner),
                      (m = c - (c - a[1]) * roundCorner),
                      i.setTripleAt(p, c, f, u, d, m, g),
                      (g += 1))
                    : (i.setTripleAt(a[0], a[1], s[0], s[1], n[0], n[1], g),
                      (g += 1))
                  : (i.setTripleAt(
                      t.v[r][0],
                      t.v[r][1],
                      t.o[r][0],
                      t.o[r][1],
                      t.i[r][0],
                      t.i[r][1],
                      g
                    ),
                    (g += 1));
            return i;
          }),
          (RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              a,
              n,
              s,
              o = this.shapes.length,
              h = this.rd.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (n = this.shapes[r]).localShapeCollection),
                  n.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      n.shape._mdf = !0,
                      e = n.shape.paths.shapes,
                      a = n.shape.paths._length,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h));
                n.shape.paths = n.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          (PolynomialBezier.prototype.point = function (t) {
            return [
              ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
              ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1],
            ];
          }),
          (PolynomialBezier.prototype.derivative = function (t) {
            return [
              (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
              (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1],
            ];
          }),
          (PolynomialBezier.prototype.tangentAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0]);
          }),
          (PolynomialBezier.prototype.normalAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1]);
          }),
          (PolynomialBezier.prototype.inflectionPoints = function () {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e =
                (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / t,
              r =
                e * e -
                ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i)
              ? i > 0 && i < 1
                ? [e]
                : []
              : [e - i, e + i].filter(function (t) {
                  return t > 0 && t < 1;
                });
          }),
          (PolynomialBezier.prototype.split = function (t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1)
              return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t),
              r = lerpPoint(this.points[1], this.points[2], t),
              i = lerpPoint(this.points[2], this.points[3], t),
              a = lerpPoint(e, r, t),
              n = lerpPoint(r, i, t),
              s = lerpPoint(a, n, t);
            return [
              new PolynomialBezier(this.points[0], e, a, s, !0),
              new PolynomialBezier(s, n, i, this.points[3], !0),
            ];
          }),
          (PolynomialBezier.prototype.bounds = function () {
            return { x: extrema(this, 0), y: extrema(this, 1) };
          }),
          (PolynomialBezier.prototype.boundingBox = function () {
            var t = this.bounds();
            return {
              left: t.x.min,
              right: t.x.max,
              top: t.y.min,
              bottom: t.y.max,
              width: t.x.max - t.x.min,
              height: t.y.max - t.y.min,
              cx: (t.x.max + t.x.min) / 2,
              cy: (t.y.max + t.y.min) / 2,
            };
          }),
          (PolynomialBezier.prototype.intersections = function (t, e, r) {
            void 0 === e && (e = 2), void 0 === r && (r = 7);
            var i = [];
            return (
              intersectsImpl(
                intersectData(this, 0, 1),
                intersectData(t, 0, 1),
                0,
                e,
                i,
                r
              ),
              i
            );
          }),
          (PolynomialBezier.shapeSegment = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
          }),
          (PolynomialBezier.shapeSegmentInverted = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
          }),
          extendPrototype([ShapeModifier], ZigZagModifier),
          (ZigZagModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this)),
              (this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this.pointsType = PropertyFactory.getProp(
                t,
                e.pt,
                0,
                null,
                this
              )),
              (this._isAnimated =
                0 !== this.amplitude.effectsSequence.length ||
                0 !== this.frequency.effectsSequence.length ||
                0 !== this.pointsType.effectsSequence.length);
          }),
          (ZigZagModifier.prototype.processPath = function (t, e, r, i) {
            var a = t._length,
              n = shapePool.newElement();
            if (((n.c = t.c), t.c || (a -= 1), 0 === a)) return n;
            var s = -1,
              o = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(n, t, 0, e, r, i, s);
            for (var h = 0; h < a; h += 1)
              (s = zigZagSegment(n, o, e, r, i, -s)),
                (o =
                  h !== a - 1 || t.c
                    ? PolynomialBezier.shapeSegment(t, (h + 1) % a)
                    : null),
                zigZagCorner(n, t, h + 1, e, r, i, s);
            return n;
          }),
          (ZigZagModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              a,
              n,
              s,
              o = this.shapes.length,
              h = this.amplitude.v,
              l = Math.max(0, Math.round(this.frequency.v)),
              p = this.pointsType.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (n = this.shapes[r]).localShapeCollection),
                  n.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      n.shape._mdf = !0,
                      e = n.shape.paths.shapes,
                      a = n.shape.paths._length,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h, l, p));
                n.shape.paths = n.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          extendPrototype([ShapeModifier], OffsetPathModifier),
          (OffsetPathModifier.prototype.initModifierProperties = function (
            t,
            e
          ) {
            (this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this.miterLimit = PropertyFactory.getProp(
                t,
                e.ml,
                0,
                null,
                this
              )),
              (this.lineJoin = e.lj),
              (this._isAnimated = 0 !== this.amount.effectsSequence.length);
          }),
          (OffsetPathModifier.prototype.processPath = function (t, e, r, i) {
            var a = shapePool.newElement();
            a.c = t.c;
            var n,
              s,
              o,
              h = t.length();
            t.c || (h -= 1);
            var l = [];
            for (n = 0; n < h; n += 1)
              (o = PolynomialBezier.shapeSegment(t, n)),
                l.push(offsetSegmentSplit(o, e));
            if (!t.c)
              for (n = h - 1; n >= 0; n -= 1)
                (o = PolynomialBezier.shapeSegmentInverted(t, n)),
                  l.push(offsetSegmentSplit(o, e));
            l = pruneIntersections(l);
            var p = null,
              c = null;
            for (n = 0; n < l.length; n += 1) {
              var f = l[n];
              for (
                c && (p = joinLines(a, c, f[0], r, i)),
                  c = f[f.length - 1],
                  s = 0;
                s < f.length;
                s += 1
              )
                (o = f[s]),
                  p && pointEqual(o.points[0], p)
                    ? a.setXYAt(
                        o.points[1][0],
                        o.points[1][1],
                        "o",
                        a.length() - 1
                      )
                    : a.setTripleAt(
                        o.points[0][0],
                        o.points[0][1],
                        o.points[1][0],
                        o.points[1][1],
                        o.points[0][0],
                        o.points[0][1],
                        a.length()
                      ),
                  a.setTripleAt(
                    o.points[3][0],
                    o.points[3][1],
                    o.points[3][0],
                    o.points[3][1],
                    o.points[2][0],
                    o.points[2][1],
                    a.length()
                  ),
                  (p = o.points[3]);
            }
            return l.length && joinLines(a, c, l[0][0], r, i), a;
          }),
          (OffsetPathModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              a,
              n,
              s,
              o = this.shapes.length,
              h = this.amount.v,
              l = this.miterLimit.v,
              p = this.lineJoin;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (n = this.shapes[r]).localShapeCollection),
                  n.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      n.shape._mdf = !0,
                      e = n.shape.paths.shapes,
                      a = n.shape.paths._length,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h, p, l));
                n.shape.paths = n.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          });
        var FontManager = (function () {
          var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
            e = [];
          e = e.concat([
            2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
            2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
            2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
          ]);
          var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
            i = [65039, 8205];
          function a(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), (r.style.fontFamily = e);
            var i = createTag("span");
            (i.innerText = "giItT1WQy@!-/#"),
              (r.style.position = "absolute"),
              (r.style.left = "-10000px"),
              (r.style.top = "-10000px"),
              (r.style.fontSize = "300px"),
              (r.style.fontVariant = "normal"),
              (r.style.fontStyle = "normal"),
              (r.style.fontWeight = "normal"),
              (r.style.letterSpacing = "0"),
              r.appendChild(i),
              document.body.appendChild(r);
            var a = i.offsetWidth;
            return (
              (i.style.fontFamily =
                (function (t) {
                  var e,
                    r = t.split(","),
                    i = r.length,
                    a = [];
                  for (e = 0; e < i; e += 1)
                    "sans-serif" !== r[e] &&
                      "monospace" !== r[e] &&
                      a.push(r[e]);
                  return a.join(",");
                })(t) +
                ", " +
                e),
              { node: i, w: a, parent: r }
            );
          }
          function n(t, e) {
            var r,
              i = document.body && e ? "svg" : "canvas",
              a = getFontProperties(t);
            if ("svg" === i) {
              var n = createNS("text");
              (n.style.fontSize = "100px"),
                n.setAttribute("font-family", t.fFamily),
                n.setAttribute("font-style", a.style),
                n.setAttribute("font-weight", a.weight),
                (n.textContent = "1"),
                t.fClass
                  ? ((n.style.fontFamily = "inherit"),
                    n.setAttribute("class", t.fClass))
                  : (n.style.fontFamily = t.fFamily),
                e.appendChild(n),
                (r = n);
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              (s.font = a.style + " " + a.weight + " 100px " + t.fFamily),
                (r = s);
            }
            return {
              measureText: function (t) {
                return "svg" === i
                  ? ((r.textContent = t), r.getComputedTextLength())
                  : r.measureText(t).width;
              },
            };
          }
          var s = function () {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
          };
          (s.isModifier = function (t, e) {
            var i = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(i);
          }),
            (s.isZeroWidthJoiner = function (t, e) {
              return e ? t === i[0] && e === i[1] : t === i[1];
            }),
            (s.isCombinedCharacter = function (t) {
              return -1 !== e.indexOf(t);
            });
          var o = {
            addChars: function (t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r,
                  i,
                  a = t.length,
                  n = this.chars.length;
                for (e = 0; e < a; e += 1) {
                  for (r = 0, i = !1; r < n; )
                    this.chars[r].style === t[e].style &&
                      this.chars[r].fFamily === t[e].fFamily &&
                      this.chars[r].ch === t[e].ch &&
                      (i = !0),
                      (r += 1);
                  i || (this.chars.push(t[e]), (n += 1));
                }
              }
            },
            addFonts: function (t, e) {
              if (t) {
                if (this.chars)
                  return (this.isLoaded = !0), void (this.fonts = t.list);
                if (!document.body)
                  return (
                    (this.isLoaded = !0),
                    t.list.forEach(function (t) {
                      (t.helper = n(t)), (t.cache = {});
                    }),
                    void (this.fonts = t.list)
                  );
                var r,
                  i = t.list,
                  s = i.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var h,
                    l,
                    p = !0;
                  if (
                    ((i[r].loaded = !1),
                    (i[r].monoCase = a(i[r].fFamily, "monospace")),
                    (i[r].sansCase = a(i[r].fFamily, "sans-serif")),
                    i[r].fPath)
                  ) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if (
                        ((h = document.querySelectorAll(
                          'style[f-forigin="p"][f-family="' +
                            i[r].fFamily +
                            '"], style[f-origin="3"][f-family="' +
                            i[r].fFamily +
                            '"]'
                        )).length > 0 && (p = !1),
                        p)
                      ) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", i[r].fOrigin),
                          c.setAttribute("f-origin", i[r].origin),
                          c.setAttribute("f-family", i[r].fFamily),
                          (c.type = "text/css"),
                          (c.innerText =
                            "@font-face {font-family: " +
                            i[r].fFamily +
                            "; font-style: normal; src: url('" +
                            i[r].fPath +
                            "');}"),
                          e.appendChild(c);
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (
                        h = document.querySelectorAll(
                          'link[f-forigin="g"], link[f-origin="1"]'
                        ),
                          l = 0;
                        l < h.length;
                        l += 1
                      )
                        -1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", i[r].fOrigin),
                          f.setAttribute("f-origin", i[r].origin),
                          (f.type = "text/css"),
                          (f.rel = "stylesheet"),
                          (f.href = i[r].fPath),
                          document.body.appendChild(f);
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (
                        h = document.querySelectorAll(
                          'script[f-forigin="t"], script[f-origin="2"]'
                        ),
                          l = 0;
                        l < h.length;
                        l += 1
                      )
                        i[r].fPath === h[l].src && (p = !1);
                      if (p) {
                        var u = createTag("link");
                        u.setAttribute("f-forigin", i[r].fOrigin),
                          u.setAttribute("f-origin", i[r].origin),
                          u.setAttribute("rel", "stylesheet"),
                          u.setAttribute("href", i[r].fPath),
                          e.appendChild(u);
                      }
                    }
                  } else (i[r].loaded = !0), (o -= 1);
                  (i[r].helper = n(i[r], e)),
                    (i[r].cache = {}),
                    this.fonts.push(i[r]);
                }
                0 === o
                  ? (this.isLoaded = !0)
                  : setTimeout(this.checkLoadedFonts.bind(this), 100);
              } else this.isLoaded = !0;
            },
            getCharData: function (e, r, i) {
              for (var a = 0, n = this.chars.length; a < n; ) {
                if (
                  this.chars[a].ch === e &&
                  this.chars[a].style === r &&
                  this.chars[a].fFamily === i
                )
                  return this.chars[a];
                a += 1;
              }
              return (
                (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                  console &&
                  console.warn &&
                  !this._warned &&
                  ((this._warned = !0),
                  console.warn(
                    "Missing character from exported characters list: ",
                    e,
                    r,
                    i
                  )),
                t
              );
            },
            getFontByName: function (t) {
              for (var e = 0, r = this.fonts.length; e < r; ) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1;
              }
              return this.fonts[0];
            },
            measureText: function (t, e, r) {
              var i = this.getFontByName(e),
                a = t.charCodeAt(0);
              if (!i.cache[a + 1]) {
                var n = i.helper;
                if (" " === t) {
                  var s = n.measureText("|" + t + "|"),
                    o = n.measureText("||");
                  i.cache[a + 1] = (s - o) / 100;
                } else i.cache[a + 1] = n.measureText(t) / 100;
              }
              return i.cache[a + 1] * r;
            },
            checkLoadedFonts: function () {
              var t,
                e,
                r,
                i = this.fonts.length,
                a = i;
              for (t = 0; t < i; t += 1)
                this.fonts[t].loaded
                  ? (a -= 1)
                  : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin
                  ? (this.fonts[t].loaded = !0)
                  : ((e = this.fonts[t].monoCase.node),
                    (r = this.fonts[t].monoCase.w),
                    e.offsetWidth !== r
                      ? ((a -= 1), (this.fonts[t].loaded = !0))
                      : ((e = this.fonts[t].sansCase.node),
                        (r = this.fonts[t].sansCase.w),
                        e.offsetWidth !== r &&
                          ((a -= 1), (this.fonts[t].loaded = !0))),
                    this.fonts[t].loaded &&
                      (this.fonts[t].sansCase.parent.parentNode.removeChild(
                        this.fonts[t].sansCase.parent
                      ),
                      this.fonts[t].monoCase.parent.parentNode.removeChild(
                        this.fonts[t].monoCase.parent
                      )));
              0 !== a && Date.now() - this.initTime < 5e3
                ? setTimeout(this.checkLoadedFontsBinded, 20)
                : setTimeout(this.setIsLoadedBinded, 10);
            },
            setIsLoaded: function () {
              this.isLoaded = !0;
            },
          };
          return (s.prototype = o), s;
        })();
        function RenderableElement() {}
        RenderableElement.prototype = {
          initRenderable: function () {
            (this.isInRange = !1),
              (this.hidden = !1),
              (this.isTransparent = !1),
              (this.renderableComponents = []);
          },
          addRenderableComponent: function (t) {
            -1 === this.renderableComponents.indexOf(t) &&
              this.renderableComponents.push(t);
          },
          removeRenderableComponent: function (t) {
            -1 !== this.renderableComponents.indexOf(t) &&
              this.renderableComponents.splice(
                this.renderableComponents.indexOf(t),
                1
              );
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t);
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0
              ? !this.isTransparent &&
                this.globalData.renderConfig.hideOnTransparent &&
                ((this.isTransparent = !0), this.hide())
              : this.isTransparent && ((this.isTransparent = !1), this.show());
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
              ? !0 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this._mdf = !0),
                (this.isInRange = !0),
                this.show())
              : !1 !== this.isInRange &&
                ((this.globalData._mdf = !0),
                (this.isInRange = !1),
                this.hide());
          },
          renderRenderable: function () {
            var t,
              e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 };
          },
          getLayerSize: function () {
            return 5 === this.data.ty
              ? { w: this.data.textData.width, h: this.data.textData.height }
              : { w: this.data.width, h: this.data.height };
          },
        };
        var getBlendMode =
            ((blendModeEnums = {
              0: "source-over",
              1: "multiply",
              2: "screen",
              3: "overlay",
              4: "darken",
              5: "lighten",
              6: "color-dodge",
              7: "color-burn",
              8: "hard-light",
              9: "soft-light",
              10: "difference",
              11: "exclusion",
              12: "hue",
              13: "saturation",
              14: "color",
              15: "luminosity",
            }),
            function (t) {
              return blendModeEnums[t] || "";
            }),
          blendModeEnums;
        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(t, e) {
          var r,
            i = t.ef || [];
          this.effectElements = [];
          var a,
            n = i.length;
          for (r = 0; r < n; r += 1)
            (a = new GroupEffect(i[r], e)), this.effectElements.push(a);
        }
        function GroupEffect(t, e) {
          this.init(t, e);
        }
        function BaseElement() {}
        function FrameElement() {}
        function FootageElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            (this.footageData = e.imageLoader.getAsset(this.assetData)),
            this.initBaseData(t, e, r);
        }
        function AudioElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            this.initBaseData(t, e, r),
            (this._isPlaying = !1),
            (this._canPlay = !1);
          var i = this.globalData.getAssetsPath(this.assetData);
          (this.audio = this.globalData.audioController.createAudio(i)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this._volumeMultiplier = 1),
            (this._volume = 1),
            (this._previousVolume = null),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }),
            (this.lv = PropertyFactory.getProp(
              this,
              t.au && t.au.lv ? t.au.lv : { k: [100] },
              1,
              0.01,
              this
            ));
        }
        function BaseRenderer() {}
        function TransformElement() {}
        function MaskElement(t, e, r) {
          (this.data = t),
            (this.element = e),
            (this.globalData = r),
            (this.storedData = []),
            (this.masksProperties = this.data.masksProperties || []),
            (this.maskElement = null);
          var i,
            a,
            n = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          (this.viewData = createSizedArray(s)), (this.solidPath = "");
          var o,
            h,
            l,
            p,
            c,
            f,
            u = this.masksProperties,
            d = 0,
            m = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
          for (i = 0; i < s; i += 1)
            if (
              ((("a" !== u[i].mode && "n" !== u[i].mode) ||
                u[i].inv ||
                100 !== u[i].o.k ||
                u[i].o.x) &&
                ((g = "mask"), (v = "mask")),
              ("s" !== u[i].mode && "i" !== u[i].mode) || 0 !== d
                ? (l = null)
                : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
                  l.setAttribute("width", this.element.comp.data.w || 0),
                  l.setAttribute("height", this.element.comp.data.h || 0),
                  m.push(l)),
              (a = createNS("path")),
              "n" === u[i].mode)
            )
              (this.viewData[i] = {
                op: PropertyFactory.getProp(
                  this.element,
                  u[i].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                elem: a,
                lastPath: "",
              }),
                n.appendChild(a);
            else {
              var b;
              if (
                ((d += 1),
                a.setAttribute(
                  "fill",
                  "s" === u[i].mode ? "#000000" : "#ffffff"
                ),
                a.setAttribute("clip-rule", "nonzero"),
                0 !== u[i].x.k
                  ? ((g = "mask"),
                    (v = "mask"),
                    (f = PropertyFactory.getProp(
                      this.element,
                      u[i].x,
                      0,
                      null,
                      this.element
                    )),
                    (b = createElementID()),
                    (p = createNS("filter")).setAttribute("id", b),
                    (c = createNS("feMorphology")).setAttribute(
                      "operator",
                      "erode"
                    ),
                    c.setAttribute("in", "SourceGraphic"),
                    c.setAttribute("radius", "0"),
                    p.appendChild(c),
                    n.appendChild(p),
                    a.setAttribute(
                      "stroke",
                      "s" === u[i].mode ? "#000000" : "#ffffff"
                    ))
                  : ((c = null), (f = null)),
                (this.storedData[i] = {
                  elem: a,
                  x: f,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0,
                }),
                "i" === u[i].mode)
              ) {
                h = m.length;
                var _ = createNS("g");
                for (o = 0; o < h; o += 1) _.appendChild(m[o]);
                var P = createNS("mask");
                P.setAttribute("mask-type", "alpha"),
                  P.setAttribute("id", y + "_" + d),
                  P.appendChild(a),
                  n.appendChild(P),
                  _.setAttribute(
                    "mask",
                    "url(" + getLocationHref() + "#" + y + "_" + d + ")"
                  ),
                  (m.length = 0),
                  m.push(_);
              } else m.push(a);
              u[i].inv &&
                !this.solidPath &&
                (this.solidPath = this.createLayerSolidPath()),
                (this.viewData[i] = {
                  elem: a,
                  lastPath: "",
                  op: PropertyFactory.getProp(
                    this.element,
                    u[i].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    u[i],
                    3
                  ),
                  invRect: l,
                }),
                this.viewData[i].prop.k ||
                  this.drawPath(
                    u[i],
                    this.viewData[i].prop.v,
                    this.viewData[i]
                  );
            }
          for (
            this.maskElement = createNS(g), s = m.length, i = 0;
            i < s;
            i += 1
          )
            this.maskElement.appendChild(m[i]);
          d > 0 &&
            (this.maskElement.setAttribute("id", y),
            this.element.maskedElement.setAttribute(
              v,
              "url(" + getLocationHref() + "#" + y + ")"
            ),
            n.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this);
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect),
          (GroupEffect.prototype.getValue =
            GroupEffect.prototype.iterateDynamicProperties),
          (GroupEffect.prototype.init = function (t, e) {
            var r;
            (this.data = t),
              (this.effectElements = []),
              this.initDynamicPropertyContainer(e);
            var i,
              a = this.data.ef.length,
              n = this.data.ef;
            for (r = 0; r < a; r += 1) {
              switch (((i = null), n[r].ty)) {
                case 0:
                  i = new SliderEffect(n[r], e, this);
                  break;
                case 1:
                  i = new AngleEffect(n[r], e, this);
                  break;
                case 2:
                  i = new ColorEffect(n[r], e, this);
                  break;
                case 3:
                  i = new PointEffect(n[r], e, this);
                  break;
                case 4:
                case 7:
                  i = new CheckboxEffect(n[r], e, this);
                  break;
                case 10:
                  i = new LayerIndexEffect(n[r], e, this);
                  break;
                case 11:
                  i = new MaskIndexEffect(n[r], e, this);
                  break;
                case 5:
                  i = new EffectsManager(n[r], e, this);
                  break;
                default:
                  i = new NoValueEffect(n[r], e, this);
              }
              i && this.effectElements.push(i);
            }
          }),
          (BaseElement.prototype = {
            checkMasks: function () {
              if (!this.data.hasMask) return !1;
              for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if (
                  "n" !== this.data.masksProperties[t].mode &&
                  !1 !== this.data.masksProperties[t].cl
                )
                  return !0;
                t += 1;
              }
              return !1;
            },
            initExpressions: function () {
              var t = getExpressionInterfaces();
              if (t) {
                var e = t("layer"),
                  r = t("effects"),
                  i = t("shape"),
                  a = t("text"),
                  n = t("comp");
                (this.layerInterface = e(this)),
                  this.data.hasMask &&
                    this.maskManager &&
                    this.layerInterface.registerMaskInterface(this.maskManager);
                var s = r.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(s),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = n(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface = i(
                        this.shapesData,
                        this.itemsData,
                        this.layerInterface
                      )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface = a(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface));
              }
            },
            setBlendMode: function () {
              var t = getBlendMode(this.data.bm);
              (this.baseElement || this.layerElement).style["mix-blend-mode"] =
                t;
            },
            initBaseData: function (t, e, r) {
              (this.globalData = e),
                (this.comp = r),
                (this.data = t),
                (this.layerId = createElementID()),
                this.data.sr || (this.data.sr = 1),
                (this.effectsManager = new EffectsManager(
                  this.data,
                  this,
                  this.dynamicProperties
                ));
            },
            getType: function () {
              return this.type;
            },
            sourceRectAtTime: function () {},
          }),
          (FrameElement.prototype = {
            initFrame: function () {
              (this._isFirstFrame = !1),
                (this.dynamicProperties = []),
                (this._mdf = !1);
            },
            prepareProperties: function (t, e) {
              var r,
                i = this.dynamicProperties.length;
              for (r = 0; r < i; r += 1)
                (e ||
                  (this._isParent &&
                    "transform" === this.dynamicProperties[r].propType)) &&
                  (this.dynamicProperties[r].getValue(),
                  this.dynamicProperties[r]._mdf &&
                    ((this.globalData._mdf = !0), (this._mdf = !0)));
            },
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                this.dynamicProperties.push(t);
            },
          }),
          (FootageElement.prototype.prepareFrame = function () {}),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            FootageElement
          ),
          (FootageElement.prototype.getBaseElement = function () {
            return null;
          }),
          (FootageElement.prototype.renderFrame = function () {}),
          (FootageElement.prototype.destroy = function () {}),
          (FootageElement.prototype.initExpressions = function () {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("footage");
              this.layerInterface = e(this);
            }
          }),
          (FootageElement.prototype.getFootageData = function () {
            return this.footageData;
          }),
          (AudioElement.prototype.prepareFrame = function (t) {
            if (
              (this.prepareRenderableFrame(t, !0),
              this.prepareProperties(t, !0),
              this.tm._placeholder)
            )
              this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r &&
              ((this._previousVolume = r), this.audio.volume(r));
          }),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            AudioElement
          ),
          (AudioElement.prototype.renderFrame = function () {
            this.isInRange &&
              this._canPlay &&
              (this._isPlaying
                ? (!this.audio.playing() ||
                    Math.abs(
                      this._currentTime / this.globalData.frameRate -
                        this.audio.seek()
                    ) > 0.1) &&
                  this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(),
                  this.audio.seek(
                    this._currentTime / this.globalData.frameRate
                  ),
                  (this._isPlaying = !0)));
          }),
          (AudioElement.prototype.show = function () {}),
          (AudioElement.prototype.hide = function () {
            this.audio.pause(), (this._isPlaying = !1);
          }),
          (AudioElement.prototype.pause = function () {
            this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
          }),
          (AudioElement.prototype.resume = function () {
            this._canPlay = !0;
          }),
          (AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
          }),
          (AudioElement.prototype.volume = function (t) {
            (this._volumeMultiplier = t),
              (this._previousVolume = t * this._volume),
              this.audio.volume(this._previousVolume);
          }),
          (AudioElement.prototype.getBaseElement = function () {
            return null;
          }),
          (AudioElement.prototype.destroy = function () {}),
          (AudioElement.prototype.sourceRectAtTime = function () {}),
          (AudioElement.prototype.initExpressions = function () {}),
          (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              r,
              i = this.layers.length;
            for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
              this.elements[e] ||
                ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                  r.op - r.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers =
                  !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
              default:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
            }
          }),
          (BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }),
          (BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.buildAllItems = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.includeLayers = function (t) {
            var e;
            this.completeLayers = !1;
            var r,
              i = t.length,
              a = this.layers.length;
            for (e = 0; e < i; e += 1)
              for (r = 0; r < a; ) {
                if (this.layers[r].id === t[e].id) {
                  this.layers[r] = t[e];
                  break;
                }
                r += 1;
              }
          }),
          (BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
          }),
          (BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          }),
          (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (
              var i = this.elements, a = this.layers, n = 0, s = a.length;
              n < s;

            )
              a[n].ind == e &&
                (i[n] && !0 !== i[n]
                  ? (r.push(i[n]),
                    i[n].setAsParent(),
                    void 0 !== a[n].parent
                      ? this.buildElementParenting(t, a[n].parent, r)
                      : t.setHierarchy(r))
                  : (this.buildItem(n), this.addPendingElement(t))),
                (n += 1);
          }),
          (BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
          }),
          (BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(),
                  this.globalData.projectInterface.registerComposition(i);
              }
          }),
          (BaseRenderer.prototype.getElementByPath = function (t) {
            var e,
              r = t.shift();
            if ("number" == typeof r) e = this.elements[r];
            else {
              var i,
                a = this.elements.length;
              for (i = 0; i < a; i += 1)
                if (this.elements[i].data.nm === r) {
                  e = this.elements[i];
                  break;
                }
            }
            return 0 === t.length ? e : e.getElementByPath(t);
          }),
          (BaseRenderer.prototype.setupGlobalData = function (t, e) {
            (this.globalData.fontManager = new FontManager()),
              this.globalData.fontManager.addChars(t.chars),
              this.globalData.fontManager.addFonts(t.fonts, e),
              (this.globalData.getAssetData =
                this.animationItem.getAssetData.bind(this.animationItem)),
              (this.globalData.getAssetsPath =
                this.animationItem.getAssetsPath.bind(this.animationItem)),
              (this.globalData.imageLoader = this.animationItem.imagePreloader),
              (this.globalData.audioController =
                this.animationItem.audioController),
              (this.globalData.frameId = 0),
              (this.globalData.frameRate = t.fr),
              (this.globalData.nm = t.nm),
              (this.globalData.compSize = { w: t.w, h: t.h });
          }),
          (TransformElement.prototype = {
            initTransform: function () {
              (this.finalTransform = {
                mProp: this.data.ks
                  ? TransformPropertyFactory.getTransformProperty(
                      this,
                      this.data.ks,
                      this
                    )
                  : { o: 0 },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix(),
              }),
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty;
            },
            renderTransform: function () {
              if (
                ((this.finalTransform._opMdf =
                  this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                (this.finalTransform._matMdf =
                  this.finalTransform.mProp._mdf || this._isFirstFrame),
                this.hierarchy)
              ) {
                var t,
                  e = this.finalTransform.mat,
                  r = 0,
                  i = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                  for (; r < i; ) {
                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                      this.finalTransform._matMdf = !0;
                      break;
                    }
                    r += 1;
                  }
                if (this.finalTransform._matMdf)
                  for (
                    t = this.finalTransform.mProp.v.props,
                      e.cloneFromProps(t),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    (t = this.hierarchy[r].finalTransform.mProp.v.props),
                      e.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15]
                      );
              }
            },
            globalToLocal: function (t) {
              var e = [];
              e.push(this.finalTransform);
              for (var r, i = !0, a = this.comp; i; )
                a.finalTransform
                  ? (a.data.hasMask && e.splice(0, 0, a.finalTransform),
                    (a = a.comp))
                  : (i = !1);
              var n,
                s = e.length;
              for (r = 0; r < s; r += 1)
                (n = e[r].mat.applyToPointArray(0, 0, 0)),
                  (t = [t[0] - n[0], t[1] - n[1], 0]);
              return t;
            },
            mHelper: new Matrix(),
          }),
          (MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
          }),
          (MaskElement.prototype.renderFrame = function (t) {
            var e,
              r = this.element.finalTransform.mat,
              i = this.masksProperties.length;
            for (e = 0; e < i; e += 1)
              if (
                ((this.viewData[e].prop._mdf || t) &&
                  this.drawPath(
                    this.masksProperties[e],
                    this.viewData[e].prop.v,
                    this.viewData[e]
                  ),
                (this.viewData[e].op._mdf || t) &&
                  this.viewData[e].elem.setAttribute(
                    "fill-opacity",
                    this.viewData[e].op.v
                  ),
                "n" !== this.masksProperties[e].mode &&
                  (this.viewData[e].invRect &&
                    (this.element.finalTransform.mProp._mdf || t) &&
                    this.viewData[e].invRect.setAttribute(
                      "transform",
                      r.getInverseMatrix().to2dCSS()
                    ),
                  this.storedData[e].x && (this.storedData[e].x._mdf || t)))
              ) {
                var a = this.storedData[e].expan;
                this.storedData[e].x.v < 0
                  ? ("erode" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "erode"),
                      this.storedData[e].elem.setAttribute(
                        "filter",
                        "url(" +
                          getLocationHref() +
                          "#" +
                          this.storedData[e].filterId +
                          ")"
                      )),
                    a.setAttribute("radius", -this.storedData[e].x.v))
                  : ("dilate" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "dilate"),
                      this.storedData[e].elem.setAttribute("filter", null)),
                    this.storedData[e].elem.setAttribute(
                      "stroke-width",
                      2 * this.storedData[e].x.v
                    ));
              }
          }),
          (MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
          }),
          (MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return (
              (t += " h" + this.globalData.compSize.w),
              (t += " v" + this.globalData.compSize.h),
              (t += " h-" + this.globalData.compSize.w),
              (t += " v-" + this.globalData.compSize.h + " ")
            );
          }),
          (MaskElement.prototype.drawPath = function (t, e, r) {
            var i,
              a,
              n = " M" + e.v[0][0] + "," + e.v[0][1];
            for (a = e._length, i = 1; i < a; i += 1)
              n +=
                " C" +
                e.o[i - 1][0] +
                "," +
                e.o[i - 1][1] +
                " " +
                e.i[i][0] +
                "," +
                e.i[i][1] +
                " " +
                e.v[i][0] +
                "," +
                e.v[i][1];
            if (
              (e.c &&
                a > 1 &&
                (n +=
                  " C" +
                  e.o[i - 1][0] +
                  "," +
                  e.o[i - 1][1] +
                  " " +
                  e.i[0][0] +
                  "," +
                  e.i[0][1] +
                  " " +
                  e.v[0][0] +
                  "," +
                  e.v[0][1]),
              r.lastPath !== n)
            ) {
              var s = "";
              r.elem &&
                (e.c && (s = t.inv ? this.solidPath + n : n),
                r.elem.setAttribute("d", s)),
                (r.lastPath = n);
            }
          }),
          (MaskElement.prototype.destroy = function () {
            (this.element = null),
              (this.globalData = null),
              (this.maskElement = null),
              (this.data = null),
              (this.masksProperties = null);
          });
        var filtersFactory = (function () {
            var t = {
              createFilter: function (t, e) {
                var r = createNS("filter");
                return (
                  r.setAttribute("id", t),
                  !0 !== e &&
                    (r.setAttribute("filterUnits", "objectBoundingBox"),
                    r.setAttribute("x", "0%"),
                    r.setAttribute("y", "0%"),
                    r.setAttribute("width", "100%"),
                    r.setAttribute("height", "100%")),
                  r
                );
              },
              createAlphaToLuminanceFilter: function () {
                var t = createNS("feColorMatrix");
                return (
                  t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                  ),
                  t
                );
              },
            };
            return t;
          })(),
          featureSupport = (function () {
            var t = { maskType: !0 };
            return (
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (t.maskType = !1),
              t
            );
          })(),
          registeredEffects = {},
          idPrefix = "filter_result_";
        function SVGEffects(t) {
          var e,
            r,
            i = "SourceGraphic",
            a = t.data.ef ? t.data.ef.length : 0,
            n = createElementID(),
            s = filtersFactory.createFilter(n, !0),
            o = 0;
          for (this.filters = [], e = 0; e < a; e += 1) {
            r = null;
            var h = t.data.ef[e].ty;
            registeredEffects[h] &&
              ((r = new (0, registeredEffects[h].effect)(
                s,
                t.effectsManager.effectElements[e],
                t,
                idPrefix + o,
                i
              )),
              (i = idPrefix + o),
              registeredEffects[h].countsAsEffect && (o += 1)),
              r && this.filters.push(r);
          }
          o &&
            (t.globalData.defs.appendChild(s),
            t.layerElement.setAttribute(
              "filter",
              "url(" + getLocationHref() + "#" + n + ")"
            )),
            this.filters.length && t.addRenderableComponent(this);
        }
        function registerEffect(t, e, r) {
          registeredEffects[t] = { effect: e, countsAsEffect: r };
        }
        function SVGBaseElement() {}
        function HierarchyElement() {}
        function RenderableDOMElement() {}
        function IImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            this.initElement(t, e, r),
            (this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            });
        }
        function ProcessedElement(t, e) {
          (this.elem = t), (this.pos = e);
        }
        function IShapeElement() {}
        (SVGEffects.prototype.renderFrame = function (t) {
          var e,
            r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
        }),
          (SVGBaseElement.prototype = {
            initRendererElement: function () {
              this.layerElement = createNS("g");
            },
            createContainerElements: function () {
              (this.matteElement = createNS("g")),
                (this.transformedElement = this.layerElement),
                (this.maskedElement = this.layerElement),
                (this._sizeChanged = !1);
              var t = null;
              if (this.data.td) {
                this.matteMasks = {};
                var e = createNS("symbol");
                e.setAttribute("id", this.layerId);
                var r = createNS("g");
                r.appendChild(this.layerElement),
                  e.appendChild(r),
                  (t = r),
                  this.globalData.defs.appendChild(e);
              } else
                this.data.tt
                  ? (this.matteElement.appendChild(this.layerElement),
                    (t = this.matteElement),
                    (this.baseElement = this.matteElement))
                  : (this.baseElement = this.layerElement);
              if (
                (this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 === this.data.ty && !this.data.hd)
              ) {
                var i = createNS("clipPath"),
                  a = createNS("path");
                a.setAttribute(
                  "d",
                  "M0,0 L" +
                    this.data.w +
                    ",0 L" +
                    this.data.w +
                    "," +
                    this.data.h +
                    " L0," +
                    this.data.h +
                    "z"
                );
                var n = createElementID();
                if (
                  (i.setAttribute("id", n),
                  i.appendChild(a),
                  this.globalData.defs.appendChild(i),
                  this.checkMasks())
                ) {
                  var s = createNS("g");
                  s.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + n + ")"
                  ),
                    s.appendChild(this.layerElement),
                    (this.transformedElement = s),
                    t
                      ? t.appendChild(this.transformedElement)
                      : (this.baseElement = this.transformedElement);
                } else
                  this.layerElement.setAttribute(
                    "clip-path",
                    "url(" + getLocationHref() + "#" + n + ")"
                  );
              }
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              this.finalTransform._matMdf &&
                this.transformedElement.setAttribute(
                  "transform",
                  this.finalTransform.mat.to2dCSS()
                ),
                this.finalTransform._opMdf &&
                  this.transformedElement.setAttribute(
                    "opacity",
                    this.finalTransform.mProp.o.v
                  );
            },
            destroyBaseElement: function () {
              (this.layerElement = null),
                (this.matteElement = null),
                this.maskManager.destroy();
            },
            getBaseElement: function () {
              return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
              (this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData
              )),
                (this.renderableEffectsManager = new SVGEffects(this));
            },
            getMatte: function (t) {
              if (!this.matteMasks[t]) {
                var e,
                  r,
                  i,
                  a,
                  n = this.layerId + "_" + t;
                if (1 === t || 3 === t) {
                  var s = createNS("mask");
                  s.setAttribute("id", n),
                    s.setAttribute(
                      "mask-type",
                      3 === t ? "luminance" : "alpha"
                    ),
                    (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId
                    ),
                    s.appendChild(i),
                    this.globalData.defs.appendChild(s),
                    featureSupport.maskType ||
                      1 !== t ||
                      (s.setAttribute("mask-type", "luminance"),
                      (e = createElementID()),
                      (r = filtersFactory.createFilter(e)),
                      this.globalData.defs.appendChild(r),
                      r.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter()
                      ),
                      (a = createNS("g")).appendChild(i),
                      s.appendChild(a),
                      a.setAttribute(
                        "filter",
                        "url(" + getLocationHref() + "#" + e + ")"
                      ));
                } else if (2 === t) {
                  var o = createNS("mask");
                  o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                  var h = createNS("g");
                  o.appendChild(h),
                    (e = createElementID()),
                    (r = filtersFactory.createFilter(e));
                  var l = createNS("feComponentTransfer");
                  l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
                  var p = createNS("feFuncA");
                  p.setAttribute("type", "table"),
                    p.setAttribute("tableValues", "1.0 0.0"),
                    l.appendChild(p),
                    this.globalData.defs.appendChild(r);
                  var c = createNS("rect");
                  c.setAttribute("width", this.comp.data.w),
                    c.setAttribute("height", this.comp.data.h),
                    c.setAttribute("x", "0"),
                    c.setAttribute("y", "0"),
                    c.setAttribute("fill", "#ffffff"),
                    c.setAttribute("opacity", "0"),
                    h.setAttribute(
                      "filter",
                      "url(" + getLocationHref() + "#" + e + ")"
                    ),
                    h.appendChild(c),
                    (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId
                    ),
                    h.appendChild(i),
                    featureSupport.maskType ||
                      (o.setAttribute("mask-type", "luminance"),
                      r.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter()
                      ),
                      (a = createNS("g")),
                      h.appendChild(c),
                      a.appendChild(this.layerElement),
                      h.appendChild(a)),
                    this.globalData.defs.appendChild(o);
                }
                this.matteMasks[t] = n;
              }
              return this.matteMasks[t];
            },
            setMatte: function (t) {
              this.matteElement &&
                this.matteElement.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + t + ")"
                );
            },
          }),
          (HierarchyElement.prototype = {
            initHierarchy: function () {
              (this.hierarchy = []),
                (this._isParent = !1),
                this.checkParenting();
            },
            setHierarchy: function (t) {
              this.hierarchy = t;
            },
            setAsParent: function () {
              this._isParent = !0;
            },
            checkParenting: function () {
              void 0 !== this.data.parent &&
                this.comp.buildElementParenting(this, this.data.parent, []);
            },
          }),
          extendPrototype(
            [
              RenderableElement,
              createProxyFunction({
                initElement: function (t, e, r) {
                  this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initTransform(t, e, r),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide();
                },
                hide: function () {
                  this.hidden ||
                    (this.isInRange && !this.isTransparent) ||
                    (((this.baseElement || this.layerElement).style.display =
                      "none"),
                    (this.hidden = !0));
                },
                show: function () {
                  this.isInRange &&
                    !this.isTransparent &&
                    (this.data.hd ||
                      ((this.baseElement || this.layerElement).style.display =
                        "block"),
                    (this.hidden = !1),
                    (this._isFirstFrame = !0));
                },
                renderFrame: function () {
                  this.data.hd ||
                    this.hidden ||
                    (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function () {},
                prepareFrame: function (t) {
                  (this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency();
                },
                destroy: function () {
                  (this.innerElem = null), this.destroyBaseElement();
                },
              }),
            ],
            RenderableDOMElement
          ),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            IImageElement
          ),
          (IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            (this.innerElem = createNS("image")),
              this.innerElem.setAttribute("width", this.assetData.w + "px"),
              this.innerElem.setAttribute("height", this.assetData.h + "px"),
              this.innerElem.setAttribute(
                "preserveAspectRatio",
                this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio
              ),
              this.innerElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t
              ),
              this.layerElement.appendChild(this.innerElem);
          }),
          (IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          }),
          (IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
              var e,
                r = this.shapeModifiers.length;
              for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
              for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
              return !1;
            },
            renderModifiers: function () {
              if (this.shapeModifiers.length) {
                var t,
                  e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (
                  t = (e = this.shapeModifiers.length) - 1;
                  t >= 0 &&
                  !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  t -= 1
                );
              }
            },
            searchProcessedElement: function (t) {
              for (
                var e = this.processedElements, r = 0, i = e.length;
                r < i;

              ) {
                if (e[r].elem === t) return e[r].pos;
                r += 1;
              }
              return 0;
            },
            addProcessedElement: function (t, e) {
              for (var r = this.processedElements, i = r.length; i; )
                if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
              r.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
              this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange);
            },
          });
        var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
          lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
        function SVGShapeData(t, e, r) {
          (this.caches = []),
            (this.styles = []),
            (this.transformers = t),
            (this.lStr = ""),
            (this.sh = r),
            (this.lvl = e),
            (this._isAnimated = !!r.k);
          for (var i = 0, a = t.length; i < a; ) {
            if (t[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break;
            }
            i += 1;
          }
        }
        function SVGStyleData(t, e) {
          (this.data = t),
            (this.type = t.ty),
            (this.d = ""),
            (this.lvl = e),
            (this._mdf = !1),
            (this.closed = !0 === t.hd),
            (this.pElem = createNS("path")),
            (this.msElem = null);
        }
        function DashProperty(t, e, r, i) {
          var a;
          (this.elem = t),
            (this.frameId = -1),
            (this.dataProps = createSizedArray(e.length)),
            (this.renderer = r),
            (this.k = !1),
            (this.dashStr = ""),
            (this.dashArray = createTypedArray(
              "float32",
              e.length ? e.length - 1 : 0
            )),
            (this.dashoffset = createTypedArray("float32", 1)),
            this.initDynamicPropertyContainer(i);
          var n,
            s = e.length || 0;
          for (a = 0; a < s; a += 1)
            (n = PropertyFactory.getProp(t, e[a].v, 0, 0, this)),
              (this.k = n.k || this.k),
              (this.dataProps[a] = { n: e[a].n, p: n });
          this.k || this.getValue(!0), (this._isAnimated = this.k);
        }
        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r),
            (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r);
        }
        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.style = r);
        }
        function GradientProperty(t, e, r) {
          (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
          var i = e.k.k[0].s
            ? e.k.k[0].s.length - 4 * e.p
            : e.k.k.length - 4 * e.p;
          (this.o = createTypedArray("float32", i)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = i),
            this.initDynamicPropertyContainer(r),
            (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0);
        }
        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            this.initGradientData(t, e, r);
        }
        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            this.initGradientData(t, e, r),
            (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
          (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
        }
        function SVGTransformData(t, e, r) {
          (this.transform = { mProps: t, op: e, container: r }),
            (this.elements = []),
            (this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length);
        }
        (SVGShapeData.prototype.setAsAnimated = function () {
          this._isAnimated = !0;
        }),
          (SVGStyleData.prototype.reset = function () {
            (this.d = ""), (this._mdf = !1);
          }),
          (DashProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId || t) &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties(),
              (this._mdf = this._mdf || t),
              this._mdf)
            ) {
              var e = 0,
                r = this.dataProps.length;
              for (
                "svg" === this.renderer && (this.dashStr = ""), e = 0;
                e < r;
                e += 1
              )
                "o" !== this.dataProps[e].n
                  ? "svg" === this.renderer
                    ? (this.dashStr += " " + this.dataProps[e].p.v)
                    : (this.dashArray[e] = this.dataProps[e].p.v)
                  : (this.dashoffset[0] = this.dataProps[e].p.v);
            }
          }),
          extendPrototype([DynamicPropertyContainer], DashProperty),
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
          extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
          (GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, i = this.o.length / 2; r < i; ) {
              if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
              r += 1;
            }
            return !0;
          }),
          (GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                  return !1;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          }),
          (GradientProperty.prototype.getValue = function (t) {
            if (
              (this.prop.getValue(),
              (this._mdf = !1),
              (this._cmdf = !1),
              (this._omdf = !1),
              this.prop._mdf || t)
            ) {
              var e,
                r,
                i,
                a = 4 * this.data.p;
              for (e = 0; e < a; e += 1)
                (r = e % 4 == 0 ? 100 : 255),
                  (i = Math.round(this.prop.v[e] * r)),
                  this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t));
              if (this.o.length)
                for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1)
                  (r = e % 2 == 0 ? 100 : 1),
                    (i =
                      e % 2 == 0
                        ? Math.round(100 * this.prop.v[e])
                        : this.prop.v[e]),
                    this.o[e - 4 * this.data.p] !== i &&
                      ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t));
              this._mdf = !t;
            }
          }),
          extendPrototype([DynamicPropertyContainer], GradientProperty),
          (SVGGradientFillStyleData.prototype.initGradientData = function (
            t,
            e,
            r
          ) {
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
              (this.h = PropertyFactory.getProp(
                t,
                e.h || { k: 0 },
                0,
                0.01,
                this
              )),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: 0 },
                0,
                degToRads,
                this
              )),
              (this.g = new GradientProperty(t, e.g, this)),
              (this.style = r),
              (this.stops = []),
              this.setGradientData(r.pElem, e),
              this.setGradientOpacity(e, r),
              (this._isAnimated = !!this._isAnimated);
          }),
          (SVGGradientFillStyleData.prototype.setGradientData = function (
            t,
            e
          ) {
            var r = createElementID(),
              i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r),
              i.setAttribute("spreadMethod", "pad"),
              i.setAttribute("gradientUnits", "userSpaceOnUse");
            var a,
              n,
              s,
              o = [];
            for (s = 4 * e.g.p, n = 0; n < s; n += 4)
              (a = createNS("stop")), i.appendChild(a), o.push(a);
            t.setAttribute(
              "gf" === e.ty ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + r + ")"
            ),
              (this.gf = i),
              (this.cst = o);
          }),
          (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
            t,
            e
          ) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r,
                i,
                a,
                n = createNS("mask"),
                s = createNS("path");
              n.appendChild(s);
              var o = createElementID(),
                h = createElementID();
              n.setAttribute("id", h);
              var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
              l.setAttribute("id", o),
                l.setAttribute("spreadMethod", "pad"),
                l.setAttribute("gradientUnits", "userSpaceOnUse"),
                (a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
              var p = this.stops;
              for (i = 4 * t.g.p; i < a; i += 2)
                (r = createNS("stop")).setAttribute(
                  "stop-color",
                  "rgb(255,255,255)"
                ),
                  l.appendChild(r),
                  p.push(r);
              s.setAttribute(
                "gf" === t.ty ? "fill" : "stroke",
                "url(" + getLocationHref() + "#" + o + ")"
              ),
                "gs" === t.ty &&
                  (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                  s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                  1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
                (this.of = l),
                (this.ms = n),
                (this.ost = p),
                (this.maskId = h),
                (e.msElem = s);
            }
          }),
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
          extendPrototype(
            [SVGGradientFillStyleData, DynamicPropertyContainer],
            SVGGradientStrokeStyleData
          );
        var buildShapeString = function (t, e, r, i) {
            if (0 === e) return "";
            var a,
              n = t.o,
              s = t.i,
              o = t.v,
              h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (a = 1; a < e; a += 1)
              h +=
                " C" +
                i.applyToPointStringified(n[a - 1][0], n[a - 1][1]) +
                " " +
                i.applyToPointStringified(s[a][0], s[a][1]) +
                " " +
                i.applyToPointStringified(o[a][0], o[a][1]);
            return (
              r &&
                e &&
                ((h +=
                  " C" +
                  i.applyToPointStringified(n[a - 1][0], n[a - 1][1]) +
                  " " +
                  i.applyToPointStringified(s[0][0], s[0][1]) +
                  " " +
                  i.applyToPointStringified(o[0][0], o[0][1])),
                (h += "z")),
              h
            );
          },
          SVGElementsRenderer = (function () {
            var t = new Matrix(),
              e = new Matrix();
            function r(t, e, r) {
              (r || e.transform.op._mdf) &&
                e.transform.container.setAttribute("opacity", e.transform.op.v),
                (r || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute(
                    "transform",
                    e.transform.mProps.v.to2dCSS()
                  );
            }
            function i() {}
            function a(r, i, a) {
              var n,
                s,
                o,
                h,
                l,
                p,
                c,
                f,
                u,
                d,
                m,
                y = i.styles.length,
                g = i.lvl;
              for (p = 0; p < y; p += 1) {
                if (((h = i.sh._mdf || a), i.styles[p].lvl < g)) {
                  for (
                    f = e.reset(),
                      d = g - i.styles[p].lvl,
                      m = i.transformers.length - 1;
                    !h && d > 0;

                  )
                    (h = i.transformers[m].mProps._mdf || h),
                      (d -= 1),
                      (m -= 1);
                  if (h)
                    for (
                      d = g - i.styles[p].lvl, m = i.transformers.length - 1;
                      d > 0;

                    )
                      (u = i.transformers[m].mProps.v.props),
                        f.transform(
                          u[0],
                          u[1],
                          u[2],
                          u[3],
                          u[4],
                          u[5],
                          u[6],
                          u[7],
                          u[8],
                          u[9],
                          u[10],
                          u[11],
                          u[12],
                          u[13],
                          u[14],
                          u[15]
                        ),
                        (d -= 1),
                        (m -= 1);
                } else f = t;
                if (((s = (c = i.sh.paths)._length), h)) {
                  for (o = "", n = 0; n < s; n += 1)
                    (l = c.shapes[n]) &&
                      l._length &&
                      (o += buildShapeString(l, l._length, l.c, f));
                  i.caches[p] = o;
                } else o = i.caches[p];
                (i.styles[p].d += !0 === r.hd ? "" : o),
                  (i.styles[p]._mdf = h || i.styles[p]._mdf);
              }
            }
            function n(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) &&
                i.pElem.setAttribute(
                  "fill",
                  "rgb(" +
                    bmFloor(e.c.v[0]) +
                    "," +
                    bmFloor(e.c.v[1]) +
                    "," +
                    bmFloor(e.c.v[2]) +
                    ")"
                ),
                (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v);
            }
            function s(t, e, r) {
              o(t, e, r), h(0, e, r);
            }
            function o(t, e, r) {
              var i,
                a,
                n,
                s,
                o,
                h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v);
              }
              if (e.s._mdf || r) {
                var u = 1 === t.t ? "x1" : "cx",
                  d = "x1" === u ? "y1" : "cy";
                h.setAttribute(u, p[0]),
                  h.setAttribute(d, p[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute(u, p[0]), e.of.setAttribute(d, p[1]));
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var m = e.g.c;
                for (n = i.length, a = 0; a < n; a += 1)
                  (s = i[a]).setAttribute("offset", m[4 * a] + "%"),
                    s.setAttribute(
                      "stop-color",
                      "rgb(" +
                        m[4 * a + 1] +
                        "," +
                        m[4 * a + 2] +
                        "," +
                        m[4 * a + 3] +
                        ")"
                    );
              }
              if (l && (e.g._omdf || r)) {
                var y = e.g.o;
                for (
                  n = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0;
                  a < n;
                  a += 1
                )
                  (s = i[a]),
                    e.g._collapsable ||
                      s.setAttribute("offset", y[2 * a] + "%"),
                    s.setAttribute("stop-opacity", y[2 * a + 1]);
              }
              if (1 === t.t)
                (e.e._mdf || r) &&
                  (h.setAttribute("x2", c[0]),
                  h.setAttribute("y2", c[1]),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("x2", c[0]),
                    e.of.setAttribute("y2", c[1])));
              else if (
                ((e.s._mdf || e.e._mdf || r) &&
                  ((o = Math.sqrt(
                    Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)
                  )),
                  h.setAttribute("r", o),
                  l && !e.g._collapsable && e.of.setAttribute("r", o)),
                e.e._mdf || e.h._mdf || e.a._mdf || r)
              ) {
                o ||
                  (o = Math.sqrt(
                    Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)
                  ));
                var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = e.h.v;
                v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
                var b = o * v,
                  _ = Math.cos(g + e.a.v) * b + p[0],
                  P = Math.sin(g + e.a.v) * b + p[1];
                h.setAttribute("fx", _),
                  h.setAttribute("fy", P),
                  l &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("fx", _), e.of.setAttribute("fy", P));
              }
            }
            function h(t, e, r) {
              var i = e.style,
                a = e.d;
              a &&
                (a._mdf || r) &&
                a.dashStr &&
                (i.pElem.setAttribute("stroke-dasharray", a.dashStr),
                i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])),
                e.c &&
                  (e.c._mdf || r) &&
                  i.pElem.setAttribute(
                    "stroke",
                    "rgb(" +
                      bmFloor(e.c.v[0]) +
                      "," +
                      bmFloor(e.c.v[1]) +
                      "," +
                      bmFloor(e.c.v[2]) +
                      ")"
                  ),
                (e.o._mdf || r) &&
                  i.pElem.setAttribute("stroke-opacity", e.o.v),
                (e.w._mdf || r) &&
                  (i.pElem.setAttribute("stroke-width", e.w.v),
                  i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
            }
            return {
              createRenderFunction: function (t) {
                switch (t.ty) {
                  case "fl":
                    return n;
                  case "gf":
                    return o;
                  case "gs":
                    return s;
                  case "st":
                    return h;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return a;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null;
                }
              },
            };
          })();
        function SVGShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(t, e, r),
            (this.prevViewData = []);
        }
        function LetterProps(t, e, r, i, a, n) {
          (this.o = t),
            (this.sw = e),
            (this.sc = r),
            (this.fc = i),
            (this.m = a),
            (this.p = n),
            (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 });
        }
        function TextProperty(t, e) {
          (this._frameId = initialDefaultFrame),
            (this.pv = ""),
            (this.v = ""),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: "",
              fStyle: "",
              fWeight: "",
              fc: "",
              j: "",
              justifyOffset: "",
              l: [],
              lh: 0,
              lineWidths: [],
              ls: "",
              of: "",
              s: "",
              sc: "",
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData);
        }
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
          ],
          SVGShapeElement
        ),
          (SVGShapeElement.prototype.initSecondaryElement = function () {}),
          (SVGShapeElement.prototype.identityMatrix = new Matrix()),
          (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
          (SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes();
          }),
          (SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t,
              e,
              r,
              i,
              a = this.shapes.length,
              n = this.stylesList.length,
              s = [],
              o = !1;
            for (r = 0; r < n; r += 1) {
              for (
                i = this.stylesList[r], o = !1, s.length = 0, t = 0;
                t < a;
                t += 1
              )
                -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                  (s.push(e), (o = e._isAnimated || o));
              s.length > 1 && o && this.setShapesAsAnimated(s);
            }
          }),
          (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated();
          }),
          (SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r,
              i = new SVGStyleData(t, e),
              a = i.pElem;
            return (
              "st" === t.ty
                ? (r = new SVGStrokeStyleData(this, t, i))
                : "fl" === t.ty
                ? (r = new SVGFillStyleData(this, t, i))
                : "gf" === t.ty || "gs" === t.ty
                ? ((r = new (
                    "gf" === t.ty
                      ? SVGGradientFillStyleData
                      : SVGGradientStrokeStyleData
                  )(this, t, i)),
                  this.globalData.defs.appendChild(r.gf),
                  r.maskId &&
                    (this.globalData.defs.appendChild(r.ms),
                    this.globalData.defs.appendChild(r.of),
                    a.setAttribute(
                      "mask",
                      "url(" + getLocationHref() + "#" + r.maskId + ")"
                    )))
                : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)),
              ("st" !== t.ty && "gs" !== t.ty) ||
                (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                a.setAttribute("fill-opacity", "0"),
                1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)),
              2 === t.r && a.setAttribute("fill-rule", "evenodd"),
              t.ln && a.setAttribute("id", t.ln),
              t.cl && a.setAttribute("class", t.cl),
              t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)),
              this.stylesList.push(i),
              this.addToAnimatedContents(t, r),
              r
            );
          }),
          (SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            return (
              t.ln && e.gr.setAttribute("id", t.ln),
              t.cl && e.gr.setAttribute("class", t.cl),
              t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
              e
            );
          }),
          (SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this
              ),
              i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i;
          }),
          (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var i = 4;
            "rc" === t.ty
              ? (i = 5)
              : "el" === t.ty
              ? (i = 6)
              : "sr" === t.ty && (i = 7);
            var a = new SVGShapeData(
              e,
              r,
              ShapePropertyFactory.getShapeProp(this, t, i, this)
            );
            return (
              this.shapes.push(a),
              this.addShapeToModifiers(a),
              this.addToAnimatedContents(t, a),
              a
            );
          }),
          (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i; ) {
              if (this.animatedContents[r].element === e) return;
              r += 1;
            }
            this.animatedContents.push({
              fn: SVGElementsRenderer.createRenderFunction(t),
              element: e,
              data: t,
            });
          }),
          (SVGShapeElement.prototype.setElementStyles = function (t) {
            var e,
              r = t.styles,
              i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
              this.stylesList[e].closed || r.push(this.stylesList[e]);
          }),
          (SVGShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers();
          }),
          (SVGShapeElement.prototype.searchShapes = function (
            t,
            e,
            r,
            i,
            a,
            n,
            s
          ) {
            var o,
              h,
              l,
              p,
              c,
              f,
              u = [].concat(n),
              d = t.length - 1,
              m = [],
              y = [];
            for (o = d; o >= 0; o -= 1) {
              if (
                ((f = this.searchProcessedElement(t[o]))
                  ? (e[o] = r[f - 1])
                  : (t[o]._render = s),
                "fl" === t[o].ty ||
                  "st" === t[o].ty ||
                  "gf" === t[o].ty ||
                  "gs" === t[o].ty ||
                  "no" === t[o].ty)
              )
                f
                  ? (e[o].style.closed = !1)
                  : (e[o] = this.createStyleElement(t[o], a)),
                  t[o]._render &&
                    e[o].style.pElem.parentNode !== i &&
                    i.appendChild(e[o].style.pElem),
                  m.push(e[o].style);
              else if ("gr" === t[o].ty) {
                if (f)
                  for (l = e[o].it.length, h = 0; h < l; h += 1)
                    e[o].prevViewData[h] = e[o].it[h];
                else e[o] = this.createGroupElement(t[o]);
                this.searchShapes(
                  t[o].it,
                  e[o].it,
                  e[o].prevViewData,
                  e[o].gr,
                  a + 1,
                  u,
                  s
                ),
                  t[o]._render &&
                    e[o].gr.parentNode !== i &&
                    i.appendChild(e[o].gr);
              } else
                "tr" === t[o].ty
                  ? (f || (e[o] = this.createTransformElement(t[o], i)),
                    (p = e[o].transform),
                    u.push(p))
                  : "sh" === t[o].ty ||
                    "rc" === t[o].ty ||
                    "el" === t[o].ty ||
                    "sr" === t[o].ty
                  ? (f || (e[o] = this.createShapeElement(t[o], u, a)),
                    this.setElementStyles(e[o]))
                  : "tm" === t[o].ty ||
                    "rd" === t[o].ty ||
                    "ms" === t[o].ty ||
                    "pb" === t[o].ty ||
                    "zz" === t[o].ty ||
                    "op" === t[o].ty
                  ? (f
                      ? ((c = e[o]).closed = !1)
                      : ((c = ShapeModifiers.getModifier(t[o].ty)).init(
                          this,
                          t[o]
                        ),
                        (e[o] = c),
                        this.shapeModifiers.push(c)),
                    y.push(c))
                  : "rp" === t[o].ty &&
                    (f
                      ? ((c = e[o]).closed = !0)
                      : ((c = ShapeModifiers.getModifier(t[o].ty)),
                        (e[o] = c),
                        c.init(this, t, o, e),
                        this.shapeModifiers.push(c),
                        (s = !1)),
                    y.push(c));
              this.addProcessedElement(t[o], o + 1);
            }
            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
            for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0;
          }),
          (SVGShapeElement.prototype.renderInnerContent = function () {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)
              (this.stylesList[t]._mdf || this._isFirstFrame) &&
                (this.stylesList[t].msElem &&
                  (this.stylesList[t].msElem.setAttribute(
                    "d",
                    this.stylesList[t].d
                  ),
                  (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                this.stylesList[t].pElem.setAttribute(
                  "d",
                  this.stylesList[t].d || "M0 0"
                ));
          }),
          (SVGShapeElement.prototype.renderShape = function () {
            var t,
              e,
              r = this.animatedContents.length;
            for (t = 0; t < r; t += 1)
              (e = this.animatedContents[t]),
                (this._isFirstFrame || e.element._isAnimated) &&
                  !0 !== e.data &&
                  e.fn(e.data, e.element, this._isFirstFrame);
          }),
          (SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(),
              (this.shapesData = null),
              (this.itemsData = null);
          }),
          (LetterProps.prototype.update = function (t, e, r, i, a, n) {
            (this._mdf.o = !1),
              (this._mdf.sw = !1),
              (this._mdf.sc = !1),
              (this._mdf.fc = !1),
              (this._mdf.m = !1),
              (this._mdf.p = !1);
            var s = !1;
            return (
              this.o !== t && ((this.o = t), (this._mdf.o = !0), (s = !0)),
              this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (s = !0)),
              this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (s = !0)),
              this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (s = !0)),
              this.m !== a && ((this.m = a), (this._mdf.m = !0), (s = !0)),
              !n.length ||
                (this.p[0] === n[0] &&
                  this.p[1] === n[1] &&
                  this.p[4] === n[4] &&
                  this.p[5] === n[5] &&
                  this.p[12] === n[12] &&
                  this.p[13] === n[13]) ||
                ((this.p = n), (this._mdf.p = !0), (s = !0)),
              s
            );
          }),
          (TextProperty.prototype.defaultBoxWidth = [0, 0]),
          (TextProperty.prototype.copyData = function (t, e) {
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }),
          (TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t),
              (this.currentData = t),
              (this.currentData.boxWidth =
                this.currentData.boxWidth || this.defaultBoxWidth),
              (this._mdf = !0);
          }),
          (TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
          }),
          (TextProperty.prototype.searchKeyframes = function () {
            return (
              (this.kf = this.data.d.k.length > 1),
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
            );
          }),
          (TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length) ||
              t
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData,
                r = this.keysIndex;
              if (this.lock) this.setCurrentData(this.currentData);
              else {
                var i;
                (this.lock = !0), (this._mdf = !1);
                var a = this.effectsSequence.length,
                  n = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < a; i += 1)
                  n =
                    r !== this.keysIndex
                      ? this.effectsSequence[i](n, n.t)
                      : this.effectsSequence[i](this.currentData, n.t);
                e !== n && this.setCurrentData(n),
                  (this.v = this.currentData),
                  (this.pv = this.v),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
            }
          }),
          (TextProperty.prototype.getKeyframeValue = function () {
            for (
              var t = this.data.d.k,
                e = this.elem.comp.renderedFrame,
                r = 0,
                i = t.length;
              r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

            )
              r += 1;
            return (
              this.keysIndex !== r && (this.keysIndex = r),
              this.data.d.k[this.keysIndex].s
            );
          }),
          (TextProperty.prototype.buildFinalText = function (t) {
            for (var e, r, i = [], a = 0, n = t.length, s = !1; a < n; )
              (e = t.charCodeAt(a)),
                FontManager.isCombinedCharacter(e)
                  ? (i[i.length - 1] += t.charAt(a))
                  : e >= 55296 && e <= 56319
                  ? (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343
                    ? (s || FontManager.isModifier(e, r)
                        ? ((i[i.length - 1] += t.substr(a, 2)), (s = !1))
                        : i.push(t.substr(a, 2)),
                      (a += 1))
                    : i.push(t.charAt(a))
                  : e > 56319
                  ? ((r = t.charCodeAt(a + 1)),
                    FontManager.isZeroWidthJoiner(e, r)
                      ? ((s = !0),
                        (i[i.length - 1] += t.substr(a, 2)),
                        (a += 1))
                      : i.push(t.charAt(a)))
                  : FontManager.isZeroWidthJoiner(e)
                  ? ((i[i.length - 1] += t.charAt(a)), (s = !0))
                  : i.push(t.charAt(a)),
                (a += 1);
            return i;
          }),
          (TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
              r,
              i,
              a,
              n,
              s,
              o,
              h = this.elem.globalData.fontManager,
              l = this.data,
              p = [],
              c = 0,
              f = l.m.g,
              u = 0,
              d = 0,
              m = 0,
              y = [],
              g = 0,
              v = 0,
              b = h.getFontByName(t.f),
              _ = 0,
              P = getFontProperties(b);
            (t.fWeight = P.weight),
              (t.fStyle = P.style),
              (t.finalSize = t.s),
              (t.finalText = this.buildFinalText(t.t)),
              (r = t.finalText.length),
              (t.finalLineHeight = t.lh);
            var E,
              S = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
              for (var x, A, w = !0, C = t.sz[0], k = t.sz[1]; w; ) {
                (x = 0),
                  (g = 0),
                  (r = (A = this.buildFinalText(t.t)).length),
                  (S = (t.tr / 1e3) * t.finalSize);
                var T = -1;
                for (e = 0; e < r; e += 1)
                  (E = A[e].charCodeAt(0)),
                    (i = !1),
                    " " === A[e]
                      ? (T = e)
                      : (13 !== E && 3 !== E) ||
                        ((g = 0),
                        (i = !0),
                        (x += t.finalLineHeight || 1.2 * t.finalSize)),
                    h.chars
                      ? ((o = h.getCharData(A[e], b.fStyle, b.fFamily)),
                        (_ = i ? 0 : (o.w * t.finalSize) / 100))
                      : (_ = h.measureText(A[e], t.f, t.finalSize)),
                    g + _ > C && " " !== A[e]
                      ? (-1 === T ? (r += 1) : (e = T),
                        (x += t.finalLineHeight || 1.2 * t.finalSize),
                        A.splice(e, T === e ? 1 : 0, "\r"),
                        (T = -1),
                        (g = 0))
                      : ((g += _), (g += S));
                (x += (b.ascent * t.finalSize) / 100),
                  this.canResize && t.finalSize > this.minimumFontSize && k < x
                    ? ((t.finalSize -= 1),
                      (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                    : ((t.finalText = A), (r = t.finalText.length), (w = !1));
              }
            (g = -S), (_ = 0);
            var D,
              M = 0;
            for (e = 0; e < r; e += 1)
              if (
                ((i = !1),
                13 === (E = (D = t.finalText[e]).charCodeAt(0)) || 3 === E
                  ? ((M = 0),
                    y.push(g),
                    (v = g > v ? g : v),
                    (g = -2 * S),
                    (a = ""),
                    (i = !0),
                    (m += 1))
                  : (a = D),
                h.chars
                  ? ((o = h.getCharData(
                      D,
                      b.fStyle,
                      h.getFontByName(t.f).fFamily
                    )),
                    (_ = i ? 0 : (o.w * t.finalSize) / 100))
                  : (_ = h.measureText(a, t.f, t.finalSize)),
                " " === D ? (M += _ + S) : ((g += _ + S + M), (M = 0)),
                p.push({
                  l: _,
                  an: _,
                  add: u,
                  n: i,
                  anIndexes: [],
                  val: a,
                  line: m,
                  animatorJustifyOffset: 0,
                }),
                2 == f)
              ) {
                if (((u += _), "" === a || " " === a || e === r - 1)) {
                  for (("" !== a && " " !== a) || (u -= _); d <= e; )
                    (p[d].an = u), (p[d].ind = c), (p[d].extra = _), (d += 1);
                  (c += 1), (u = 0);
                }
              } else if (3 == f) {
                if (((u += _), "" === a || e === r - 1)) {
                  for ("" === a && (u -= _); d <= e; )
                    (p[d].an = u), (p[d].ind = c), (p[d].extra = _), (d += 1);
                  (u = 0), (c += 1);
                }
              } else (p[c].ind = c), (p[c].extra = 0), (c += 1);
            if (((t.l = p), (v = g > v ? g : v), y.push(g), t.sz))
              (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
            else
              switch (((t.boxWidth = v), t.j)) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            t.lineWidths = y;
            var F,
              I,
              R,
              B,
              O = l.a;
            s = O.length;
            var V = [];
            for (n = 0; n < s; n += 1) {
              for (
                (F = O[n]).a.sc && (t.strokeColorAnim = !0),
                  F.a.sw && (t.strokeWidthAnim = !0),
                  (F.a.fc || F.a.fh || F.a.fs || F.a.fb) &&
                    (t.fillColorAnim = !0),
                  B = 0,
                  R = F.s.b,
                  e = 0;
                e < r;
                e += 1
              )
                ((I = p[e]).anIndexes[n] = B),
                  ((1 == R && "" !== I.val) ||
                    (2 == R && "" !== I.val && " " !== I.val) ||
                    (3 == R && (I.n || " " == I.val || e == r - 1)) ||
                    (4 == R && (I.n || e == r - 1))) &&
                    (1 === F.s.rn && V.push(B), (B += 1));
              l.a[n].s.totalChars = B;
              var L,
                z = -1;
              if (1 === F.s.rn)
                for (e = 0; e < r; e += 1)
                  z != (I = p[e]).anIndexes[n] &&
                    ((z = I.anIndexes[n]),
                    (L = V.splice(Math.floor(Math.random() * V.length), 1)[0])),
                    (I.anIndexes[n] = L);
            }
            (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
              (t.ls = t.ls || 0),
              (t.ascent = (b.ascent * t.finalSize) / 100);
          }),
          (TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            (r = this.copyData(r, t)),
              (this.data.d.k[e].s = r),
              this.recalculate(e),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            (e.__complete = !1),
              (this.keysIndex = 0),
              (this._isFirstFrame = !0),
              this.getValue(e);
          }),
          (TextProperty.prototype.canResizeFont = function (t) {
            (this.canResize = t),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.setMinimumFontSize = function (t) {
            (this.minimumFontSize = Math.floor(t) || 1),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          });
        var TextSelectorProp = (function () {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;
          function i(t, e) {
            (this._currentTextLength = -1),
              (this.k = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = t.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(t),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: 0 },
                0,
                0,
                this
              )),
              (this.e =
                "e" in e
                  ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                  : { v: 100 }),
              (this.o = PropertyFactory.getProp(
                t,
                e.o || { k: 0 },
                0,
                0,
                this
              )),
              (this.xe = PropertyFactory.getProp(
                t,
                e.xe || { k: 0 },
                0,
                0,
                this
              )),
              (this.ne = PropertyFactory.getProp(
                t,
                e.ne || { k: 0 },
                0,
                0,
                this
              )),
              (this.sm = PropertyFactory.getProp(
                t,
                e.sm || { k: 100 },
                0,
                0,
                this
              )),
              (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue();
          }
          return (
            (i.prototype = {
              getMult: function (i) {
                this._currentTextLength !==
                  this.elem.textProperty.currentData.l.length &&
                  this.getValue();
                var a = 0,
                  n = 0,
                  s = 1,
                  o = 1;
                this.ne.v > 0 ? (a = this.ne.v / 100) : (n = -this.ne.v / 100),
                  this.xe.v > 0
                    ? (s = 1 - this.xe.v / 100)
                    : (o = 1 + this.xe.v / 100);
                var h = BezierFactory.getBezierEasing(a, n, s, o).get,
                  l = 0,
                  p = this.finalS,
                  c = this.finalE,
                  f = this.data.sh;
                if (2 === f)
                  l = h(
                    (l =
                      c === p
                        ? i >= c
                          ? 1
                          : 0
                        : t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1)))
                  );
                else if (3 === f)
                  l = h(
                    (l =
                      c === p
                        ? i >= c
                          ? 0
                          : 1
                        : 1 - t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1)))
                  );
                else if (4 === f)
                  c === p
                    ? (l = 0)
                    : (l = t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))) < 0.5
                    ? (l *= 2)
                    : (l = 1 - 2 * (l - 0.5)),
                    (l = h(l));
                else if (5 === f) {
                  if (c === p) l = 0;
                  else {
                    var u = c - p,
                      d = -u / 2 + (i = e(t(0, i + 0.5 - p), c - p)),
                      m = u / 2;
                    l = Math.sqrt(1 - (d * d) / (m * m));
                  }
                  l = h(l);
                } else
                  6 === f
                    ? (c === p
                        ? (l = 0)
                        : ((i = e(t(0, i + 0.5 - p), c - p)),
                          (l =
                            (1 +
                              Math.cos(Math.PI + (2 * Math.PI * i) / (c - p))) /
                            2)),
                      (l = h(l)))
                    : (i >= r(p) &&
                        (l = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))),
                      (l = h(l)));
                if (100 !== this.sm.v) {
                  var y = 0.01 * this.sm.v;
                  0 === y && (y = 1e-8);
                  var g = 0.5 - 0.5 * y;
                  l < g ? (l = 0) : (l = (l - g) / y) > 1 && (l = 1);
                }
                return l * this.a.v;
              },
              getValue: function (t) {
                this.iterateDynamicProperties(),
                  (this._mdf = t || this._mdf),
                  (this._currentTextLength =
                    this.elem.textProperty.currentData.l.length || 0),
                  t &&
                    2 === this.data.r &&
                    (this.e.v = this._currentTextLength);
                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                  r = this.o.v / e,
                  i = this.s.v / e + r,
                  a = this.e.v / e + r;
                if (i > a) {
                  var n = i;
                  (i = a), (a = n);
                }
                (this.finalS = i), (this.finalE = a);
              },
            }),
            extendPrototype([DynamicPropertyContainer], i),
            {
              getTextSelectorProp: function (t, e, r) {
                return new i(t, e, r);
              },
            }
          );
        })();
        function TextAnimatorDataProperty(t, e, r) {
          var i = { propType: !1 },
            a = PropertyFactory.getProp,
            n = e.a;
          (this.a = {
            r: n.r ? a(t, n.r, 0, degToRads, r) : i,
            rx: n.rx ? a(t, n.rx, 0, degToRads, r) : i,
            ry: n.ry ? a(t, n.ry, 0, degToRads, r) : i,
            sk: n.sk ? a(t, n.sk, 0, degToRads, r) : i,
            sa: n.sa ? a(t, n.sa, 0, degToRads, r) : i,
            s: n.s ? a(t, n.s, 1, 0.01, r) : i,
            a: n.a ? a(t, n.a, 1, 0, r) : i,
            o: n.o ? a(t, n.o, 0, 0.01, r) : i,
            p: n.p ? a(t, n.p, 1, 0, r) : i,
            sw: n.sw ? a(t, n.sw, 0, 0, r) : i,
            sc: n.sc ? a(t, n.sc, 1, 0, r) : i,
            fc: n.fc ? a(t, n.fc, 1, 0, r) : i,
            fh: n.fh ? a(t, n.fh, 0, 0, r) : i,
            fs: n.fs ? a(t, n.fs, 0, 0.01, r) : i,
            fb: n.fb ? a(t, n.fb, 0, 0.01, r) : i,
            t: n.t ? a(t, n.t, 0, 0, r) : i,
          }),
            (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
            (this.s.t = e.s.t);
        }
        function TextAnimatorProperty(t, e, r) {
          (this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = t),
            (this._renderType = e),
            (this._elem = r),
            (this._animatorsData = createSizedArray(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = { alignment: {} }),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(r);
        }
        function ITextElement() {}
        (TextAnimatorProperty.prototype.searchProperties = function () {
          var t,
            e,
            r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1)
            (e = this._textData.a[t]),
              (this._animatorsData[t] = new TextAnimatorDataProperty(
                this._elem,
                e,
                this
              ));
          this._textData.p && "m" in this._textData.p
            ? ((this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              }),
              (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = i(
              this._elem,
              this._textData.m.a,
              1,
              0,
              this
            ));
        }),
          (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (
              ((this.lettersChangedFlag = e),
              this._mdf ||
                this._isFirstFrame ||
                e ||
                (this._hasMaskedPath && this._pathData.m._mdf))
            ) {
              this._isFirstFrame = !1;
              var r,
                i,
                a,
                n,
                s,
                o,
                h,
                l,
                p,
                c,
                f,
                u,
                d,
                m,
                y,
                g,
                v,
                b,
                _,
                P = this._moreOptions.alignment.v,
                E = this._animatorsData,
                S = this._textData,
                x = this.mHelper,
                A = this._renderType,
                w = this.renderedLetters.length,
                C = t.l;
              if (this._hasMaskedPath) {
                if (
                  ((_ = this._pathData.m),
                  !this._pathData.n || this._pathData._mdf)
                ) {
                  var k,
                    T = _.v;
                  for (
                    this._pathData.r.v && (T = T.reverse()),
                      s = { tLength: 0, segments: [] },
                      n = T._length - 1,
                      g = 0,
                      a = 0;
                    a < n;
                    a += 1
                  )
                    (k = bez.buildBezierData(
                      T.v[a],
                      T.v[a + 1],
                      [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                      [
                        T.i[a + 1][0] - T.v[a + 1][0],
                        T.i[a + 1][1] - T.v[a + 1][1],
                      ]
                    )),
                      (s.tLength += k.segmentLength),
                      s.segments.push(k),
                      (g += k.segmentLength);
                  (a = n),
                    _.v.c &&
                      ((k = bez.buildBezierData(
                        T.v[a],
                        T.v[0],
                        [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]],
                        [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]
                      )),
                      (s.tLength += k.segmentLength),
                      s.segments.push(k),
                      (g += k.segmentLength)),
                    (this._pathData.pi = s);
                }
                if (
                  ((s = this._pathData.pi),
                  (o = this._pathData.f.v),
                  (f = 0),
                  (c = 1),
                  (l = 0),
                  (p = !0),
                  (m = s.segments),
                  o < 0 && _.v.c)
                )
                  for (
                    s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength),
                      c = (d = m[(f = m.length - 1)].points).length - 1;
                    o < 0;

                  )
                    (o += d[c].partialLength),
                      (c -= 1) < 0 && (c = (d = m[(f -= 1)].points).length - 1);
                (u = (d = m[f].points)[c - 1]), (y = (h = d[c]).partialLength);
              }
              (n = C.length), (r = 0), (i = 0);
              var D,
                M,
                F,
                I,
                R,
                B = 1.2 * t.finalSize * 0.714,
                O = !0;
              F = E.length;
              var V,
                L,
                z,
                $,
                G,
                N,
                j,
                H,
                q,
                W,
                U,
                Y,
                X = -1,
                K = o,
                Z = f,
                J = c,
                Q = -1,
                tt = "",
                et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var rt = 0,
                  it = 0,
                  at = 2 === t.j ? -0.5 : -1,
                  nt = 0,
                  st = !0;
                for (a = 0; a < n; a += 1)
                  if (C[a].n) {
                    for (rt && (rt += it); nt < a; )
                      (C[nt].animatorJustifyOffset = rt), (nt += 1);
                    (rt = 0), (st = !0);
                  } else {
                    for (M = 0; M < F; M += 1)
                      (D = E[M].a).t.propType &&
                        (st && 2 === t.j && (it += D.t.v * at),
                        (R = E[M].s.getMult(
                          C[a].anIndexes[M],
                          S.a[M].s.totalChars
                        )).length
                          ? (rt += D.t.v * R[0] * at)
                          : (rt += D.t.v * R * at));
                    st = !1;
                  }
                for (rt && (rt += it); nt < a; )
                  (C[nt].animatorJustifyOffset = rt), (nt += 1);
              }
              for (a = 0; a < n; a += 1) {
                if ((x.reset(), ($ = 1), C[a].n))
                  (r = 0),
                    (i += t.yOffset),
                    (i += O ? 1 : 0),
                    (o = K),
                    (O = !1),
                    this._hasMaskedPath &&
                      ((c = J),
                      (u = (d = m[(f = Z)].points)[c - 1]),
                      (y = (h = d[c]).partialLength),
                      (l = 0)),
                    (tt = ""),
                    (U = ""),
                    (q = ""),
                    (Y = ""),
                    (et = this.defaultPropsArray);
                else {
                  if (this._hasMaskedPath) {
                    if (Q !== C[a].line) {
                      switch (t.j) {
                        case 1:
                          o += g - t.lineWidths[C[a].line];
                          break;
                        case 2:
                          o += (g - t.lineWidths[C[a].line]) / 2;
                      }
                      Q = C[a].line;
                    }
                    X !== C[a].ind &&
                      (C[X] && (o += C[X].extra),
                      (o += C[a].an / 2),
                      (X = C[a].ind)),
                      (o += P[0] * C[a].an * 0.005);
                    var ot = 0;
                    for (M = 0; M < F; M += 1)
                      (D = E[M].a).p.propType &&
                        ((R = E[M].s.getMult(
                          C[a].anIndexes[M],
                          S.a[M].s.totalChars
                        )).length
                          ? (ot += D.p.v[0] * R[0])
                          : (ot += D.p.v[0] * R)),
                        D.a.propType &&
                          ((R = E[M].s.getMult(
                            C[a].anIndexes[M],
                            S.a[M].s.totalChars
                          )).length
                            ? (ot += D.a.v[0] * R[0])
                            : (ot += D.a.v[0] * R));
                    for (
                      p = !0,
                        this._pathData.a.v &&
                          ((o =
                            0.5 * C[0].an +
                            ((g -
                              this._pathData.f.v -
                              0.5 * C[0].an -
                              0.5 * C[C.length - 1].an) *
                              X) /
                              (n - 1)),
                          (o += this._pathData.f.v));
                      p;

                    )
                      l + y >= o + ot || !d
                        ? ((v = (o + ot - l) / h.partialLength),
                          (L = u.point[0] + (h.point[0] - u.point[0]) * v),
                          (z = u.point[1] + (h.point[1] - u.point[1]) * v),
                          x.translate(
                            -P[0] * C[a].an * 0.005,
                            -P[1] * B * 0.01
                          ),
                          (p = !1))
                        : d &&
                          ((l += h.partialLength),
                          (c += 1) >= d.length &&
                            ((c = 0),
                            m[(f += 1)]
                              ? (d = m[f].points)
                              : _.v.c
                              ? ((c = 0), (d = m[(f = 0)].points))
                              : ((l -= h.partialLength), (d = null))),
                          d && ((u = h), (y = (h = d[c]).partialLength)));
                    (V = C[a].an / 2 - C[a].add), x.translate(-V, 0, 0);
                  } else
                    (V = C[a].an / 2 - C[a].add),
                      x.translate(-V, 0, 0),
                      x.translate(-P[0] * C[a].an * 0.005, -P[1] * B * 0.01, 0);
                  for (M = 0; M < F; M += 1)
                    (D = E[M].a).t.propType &&
                      ((R = E[M].s.getMult(
                        C[a].anIndexes[M],
                        S.a[M].s.totalChars
                      )),
                      (0 === r && 0 === t.j) ||
                        (this._hasMaskedPath
                          ? R.length
                            ? (o += D.t.v * R[0])
                            : (o += D.t.v * R)
                          : R.length
                          ? (r += D.t.v * R[0])
                          : (r += D.t.v * R)));
                  for (
                    t.strokeWidthAnim && (N = t.sw || 0),
                      t.strokeColorAnim &&
                        (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                      t.fillColorAnim &&
                        t.fc &&
                        (j = [t.fc[0], t.fc[1], t.fc[2]]),
                      M = 0;
                    M < F;
                    M += 1
                  )
                    (D = E[M].a).a.propType &&
                      ((R = E[M].s.getMult(
                        C[a].anIndexes[M],
                        S.a[M].s.totalChars
                      )).length
                        ? x.translate(
                            -D.a.v[0] * R[0],
                            -D.a.v[1] * R[1],
                            D.a.v[2] * R[2]
                          )
                        : x.translate(
                            -D.a.v[0] * R,
                            -D.a.v[1] * R,
                            D.a.v[2] * R
                          ));
                  for (M = 0; M < F; M += 1)
                    (D = E[M].a).s.propType &&
                      ((R = E[M].s.getMult(
                        C[a].anIndexes[M],
                        S.a[M].s.totalChars
                      )).length
                        ? x.scale(
                            1 + (D.s.v[0] - 1) * R[0],
                            1 + (D.s.v[1] - 1) * R[1],
                            1
                          )
                        : x.scale(
                            1 + (D.s.v[0] - 1) * R,
                            1 + (D.s.v[1] - 1) * R,
                            1
                          ));
                  for (M = 0; M < F; M += 1) {
                    if (
                      ((D = E[M].a),
                      (R = E[M].s.getMult(
                        C[a].anIndexes[M],
                        S.a[M].s.totalChars
                      )),
                      D.sk.propType &&
                        (R.length
                          ? x.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1])
                          : x.skewFromAxis(-D.sk.v * R, D.sa.v * R)),
                      D.r.propType &&
                        (R.length
                          ? x.rotateZ(-D.r.v * R[2])
                          : x.rotateZ(-D.r.v * R)),
                      D.ry.propType &&
                        (R.length
                          ? x.rotateY(D.ry.v * R[1])
                          : x.rotateY(D.ry.v * R)),
                      D.rx.propType &&
                        (R.length
                          ? x.rotateX(D.rx.v * R[0])
                          : x.rotateX(D.rx.v * R)),
                      D.o.propType &&
                        (R.length
                          ? ($ += (D.o.v * R[0] - $) * R[0])
                          : ($ += (D.o.v * R - $) * R)),
                      t.strokeWidthAnim &&
                        D.sw.propType &&
                        (R.length ? (N += D.sw.v * R[0]) : (N += D.sw.v * R)),
                      t.strokeColorAnim && D.sc.propType)
                    )
                      for (H = 0; H < 3; H += 1)
                        R.length
                          ? (G[H] += (D.sc.v[H] - G[H]) * R[0])
                          : (G[H] += (D.sc.v[H] - G[H]) * R);
                    if (t.fillColorAnim && t.fc) {
                      if (D.fc.propType)
                        for (H = 0; H < 3; H += 1)
                          R.length
                            ? (j[H] += (D.fc.v[H] - j[H]) * R[0])
                            : (j[H] += (D.fc.v[H] - j[H]) * R);
                      D.fh.propType &&
                        (j = R.length
                          ? addHueToRGB(j, D.fh.v * R[0])
                          : addHueToRGB(j, D.fh.v * R)),
                        D.fs.propType &&
                          (j = R.length
                            ? addSaturationToRGB(j, D.fs.v * R[0])
                            : addSaturationToRGB(j, D.fs.v * R)),
                        D.fb.propType &&
                          (j = R.length
                            ? addBrightnessToRGB(j, D.fb.v * R[0])
                            : addBrightnessToRGB(j, D.fb.v * R));
                    }
                  }
                  for (M = 0; M < F; M += 1)
                    (D = E[M].a).p.propType &&
                      ((R = E[M].s.getMult(
                        C[a].anIndexes[M],
                        S.a[M].s.totalChars
                      )),
                      this._hasMaskedPath
                        ? R.length
                          ? x.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1])
                          : x.translate(0, D.p.v[1] * R, -D.p.v[2] * R)
                        : R.length
                        ? x.translate(
                            D.p.v[0] * R[0],
                            D.p.v[1] * R[1],
                            -D.p.v[2] * R[2]
                          )
                        : x.translate(
                            D.p.v[0] * R,
                            D.p.v[1] * R,
                            -D.p.v[2] * R
                          ));
                  if (
                    (t.strokeWidthAnim && (q = N < 0 ? 0 : N),
                    t.strokeColorAnim &&
                      (W =
                        "rgb(" +
                        Math.round(255 * G[0]) +
                        "," +
                        Math.round(255 * G[1]) +
                        "," +
                        Math.round(255 * G[2]) +
                        ")"),
                    t.fillColorAnim &&
                      t.fc &&
                      (U =
                        "rgb(" +
                        Math.round(255 * j[0]) +
                        "," +
                        Math.round(255 * j[1]) +
                        "," +
                        Math.round(255 * j[2]) +
                        ")"),
                    this._hasMaskedPath)
                  ) {
                    if (
                      (x.translate(0, -t.ls),
                      x.translate(0, P[1] * B * 0.01 + i, 0),
                      this._pathData.p.v)
                    ) {
                      b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                      var ht = (180 * Math.atan(b)) / Math.PI;
                      h.point[0] < u.point[0] && (ht += 180),
                        x.rotate((-ht * Math.PI) / 180);
                    }
                    x.translate(L, z, 0),
                      (o -= P[0] * C[a].an * 0.005),
                      C[a + 1] &&
                        X !== C[a + 1].ind &&
                        ((o += C[a].an / 2), (o += 0.001 * t.tr * t.finalSize));
                  } else {
                    switch (
                      (x.translate(r, i, 0),
                      t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                      t.j)
                    ) {
                      case 1:
                        x.translate(
                          C[a].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[C[a].line]),
                          0,
                          0
                        );
                        break;
                      case 2:
                        x.translate(
                          C[a].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[C[a].line]) / 2,
                          0,
                          0
                        );
                    }
                    x.translate(0, -t.ls),
                      x.translate(V, 0, 0),
                      x.translate(P[0] * C[a].an * 0.005, P[1] * B * 0.01, 0),
                      (r += C[a].l + 0.001 * t.tr * t.finalSize);
                  }
                  "html" === A
                    ? (tt = x.toCSS())
                    : "svg" === A
                    ? (tt = x.to2dCSS())
                    : (et = [
                        x.props[0],
                        x.props[1],
                        x.props[2],
                        x.props[3],
                        x.props[4],
                        x.props[5],
                        x.props[6],
                        x.props[7],
                        x.props[8],
                        x.props[9],
                        x.props[10],
                        x.props[11],
                        x.props[12],
                        x.props[13],
                        x.props[14],
                        x.props[15],
                      ]),
                    (Y = $);
                }
                w <= a
                  ? ((I = new LetterProps(Y, q, W, U, tt, et)),
                    this.renderedLetters.push(I),
                    (w += 1),
                    (this.lettersChangedFlag = !0))
                  : ((I = this.renderedLetters[a]),
                    (this.lettersChangedFlag =
                      I.update(Y, q, W, U, tt, et) || this.lettersChangedFlag));
              }
            }
          }),
          (TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId &&
              ((this._frameId = this._elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          (TextAnimatorProperty.prototype.mHelper = new Matrix()),
          (TextAnimatorProperty.prototype.defaultPropsArray = []),
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
          (ITextElement.prototype.initElement = function (t, e, r) {
            (this.lettersChangedFlag = !0),
              this.initFrame(),
              this.initBaseData(t, e, r),
              (this.textProperty = new TextProperty(
                this,
                t.t,
                this.dynamicProperties
              )),
              (this.textAnimator = new TextAnimatorProperty(
                t.t,
                this.renderType,
                this
              )),
              this.initTransform(t, e, r),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide(),
              this.textAnimator.searchProperties(this.dynamicProperties);
          }),
          (ITextElement.prototype.prepareFrame = function (t) {
            (this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                (this.buildNewText(),
                (this.textProperty._isFirstFrame = !1),
                (this.textProperty._mdf = !1));
          }),
          (ITextElement.prototype.createPathShape = function (t, e) {
            var r,
              i,
              a = e.length,
              n = "";
            for (r = 0; r < a; r += 1)
              "sh" === e[r].ty &&
                ((i = e[r].ks.k),
                (n += buildShapeString(i, i.i.length, !0, t)));
            return n;
          }),
          (ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
          }),
          (ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
          }),
          (ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
          }),
          (ITextElement.prototype.applyTextPropertiesToMatrix = function (
            t,
            e,
            r,
            i,
            a
          ) {
            switch (
              (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
              e.translate(0, -t.ls, 0),
              t.j)
            ) {
              case 1:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                  0,
                  0
                );
                break;
              case 2:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                  0,
                  0
                );
            }
            e.translate(i, a, 0);
          }),
          (ITextElement.prototype.buildColor = function (t) {
            return (
              "rgb(" +
              Math.round(255 * t[0]) +
              "," +
              Math.round(255 * t[1]) +
              "," +
              Math.round(255 * t[2]) +
              ")"
            );
          }),
          (ITextElement.prototype.emptyProp = new LetterProps()),
          (ITextElement.prototype.destroy = function () {});
        var emptyShapeData = { shapes: [] };
        function SVGTextLottieElement(t, e, r) {
          (this.textSpans = []),
            (this.renderType = "svg"),
            this.initElement(t, e, r);
        }
        function ISolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function NullElement(t, e, r) {
          this.initFrame(),
            this.initBaseData(t, e, r),
            this.initFrame(),
            this.initTransform(t, e, r),
            this.initHierarchy();
        }
        function SVGRendererBase() {}
        function ICompElement() {}
        function SVGCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function SVGRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.svgElement = createNS("svg"));
          var r = "";
          if (e && e.title) {
            var i = createNS("title"),
              a = createElementID();
            i.setAttribute("id", a),
              (i.textContent = e.title),
              this.svgElement.appendChild(i),
              (r += a);
          }
          if (e && e.description) {
            var n = createNS("desc"),
              s = createElementID();
            n.setAttribute("id", s),
              (n.textContent = e.description),
              this.svgElement.appendChild(n),
              (r += " " + s);
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          this.svgElement.appendChild(h),
            (this.layerElement = h),
            (this.renderConfig = {
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              progressiveLoad: (e && e.progressiveLoad) || !1,
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              viewBoxOnly: (e && e.viewBoxOnly) || !1,
              viewBoxSize: (e && e.viewBoxSize) || !1,
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              focusable: e && e.focusable,
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "100%",
                height: (e && e.filterSize && e.filterSize.height) || "100%",
                x: (e && e.filterSize && e.filterSize.x) || "0%",
                y: (e && e.filterSize && e.filterSize.y) || "0%",
              },
              width: e && e.width,
              height: e && e.height,
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: o,
              renderConfig: this.renderConfig,
            }),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = "svg");
        }
        function CVContextData() {
          var t;
          for (
            this.saved = [],
              this.cArrPos = 0,
              this.cTr = new Matrix(),
              this.cO = 1,
              this.savedOp = createTypedArray("float32", 15),
              t = 0;
            t < 15;
            t += 1
          )
            this.saved[t] = createTypedArray("float32", 16);
          this._length = 15;
        }
        function ShapeTransformManager() {
          (this.sequences = {}),
            (this.sequenceList = []),
            (this.transform_key_count = 0);
        }
        function CVEffects() {}
        function CVMaskElement(t, e) {
          var r;
          (this.data = t),
            (this.element = e),
            (this.masksProperties = this.data.masksProperties || []),
            (this.viewData = createSizedArray(this.masksProperties.length));
          var i = this.masksProperties.length,
            a = !1;
          for (r = 0; r < i; r += 1)
            "n" !== this.masksProperties[r].mode && (a = !0),
              (this.viewData[r] = ShapePropertyFactory.getShapeProp(
                this.element,
                this.masksProperties[r],
                3
              ));
          (this.hasMasks = a), a && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {}
        function CVShapeData(t, e, r, i) {
          (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
          var a,
            n = 4;
          "rc" === e.ty
            ? (n = 5)
            : "el" === e.ty
            ? (n = 6)
            : "sr" === e.ty && (n = 7),
            (this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t));
          var s,
            o = r.length;
          for (a = 0; a < o; a += 1)
            r[a].closed ||
              ((s = {
                transforms: i.addTransformSequence(r[a].transforms),
                trNodes: [],
              }),
              this.styledShapes.push(s),
              r[a].elements.push(s));
        }
        function CVShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new ShapeTransformManager()),
            this.initElement(t, e, r);
        }
        function CVTextElement(t, e, r) {
          (this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = "canvas"),
            (this.values = {
              fill: "rgba(0,0,0,0)",
              stroke: "rgba(0,0,0,0)",
              sWidth: 0,
              fValue: "",
            }),
            this.initElement(t, e, r);
        }
        function CVImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            (this.img = e.imageLoader.getAsset(this.assetData)),
            this.initElement(t, e, r);
        }
        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function CanvasRendererBase(t, e) {
          (this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas");
        }
        function CVCompElement(t, e, r) {
          (this.completeLayers = !1),
            (this.layers = t.layers),
            (this.pendingElements = []),
            (this.elements = createSizedArray(this.layers.length)),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function CanvasRenderer(t, e) {
          (this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              contentVisibility: (e && e.contentVisibility) || "visible",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas");
        }
        function HBaseElement() {}
        function HSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function HShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            (this.shapesContainer = createNS("g")),
            this.initElement(t, e, r),
            (this.prevViewData = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
        }
        function HTextElement(t, e, r) {
          (this.textSpans = []),
            (this.textPaths = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
            (this.renderType = "svg"),
            (this.isMasked = !1),
            this.initElement(t, e, r);
        }
        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (
            ((this.pe = i(this, t.pe, 0, 0, this)),
            t.ks.p.s
              ? ((this.px = i(this, t.ks.p.x, 1, 0, this)),
                (this.py = i(this, t.ks.p.y, 1, 0, this)),
                (this.pz = i(this, t.ks.p.z, 1, 0, this)))
              : (this.p = i(this, t.ks.p, 1, 0, this)),
            t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to)
          ) {
            var a,
              n = t.ks.or.k.length;
            for (a = 0; a < n; a += 1)
              (t.ks.or.k[a].to = null), (t.ks.or.k[a].ti = null);
          }
          (this.or = i(this, t.ks.or, 1, degToRads, this)),
            (this.or.sh = !0),
            (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
            (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
            (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
            (this.mat = new Matrix()),
            (this._prevMat = new Matrix()),
            (this._isFirstFrame = !0),
            (this.finalTransform = { mProp: this });
        }
        function HImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
        }
        function HybridRendererBase(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
        }
        function HCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !t.hasMask),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function HybridRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
              runExpressions:
                !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
        }
        extendPrototype(
          [
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement,
          ],
          SVGTextLottieElement
        ),
          (SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = createNS("text"));
          }),
          (SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, i = [], a = ""; e < r; )
              t[e] === String.fromCharCode(13) ||
              t[e] === String.fromCharCode(3)
                ? (i.push(a), (a = ""))
                : (a += t[e]),
                (e += 1);
            return i.push(a), i;
          }),
          (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            if (t.shapes && t.shapes.length) {
              var r = t.shapes[0];
              if (r.it) {
                var i = r.it[r.it.length - 1];
                i.s && ((i.s.k[0] = e), (i.s.k[1] = e));
              }
            }
            return t;
          }),
          (SVGTextLottieElement.prototype.buildNewText = function () {
            var t, e;
            this.addDynamicProperty(this);
            var r = this.textProperty.currentData;
            (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
              r.fc
                ? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
                : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
              r.sc &&
                (this.layerElement.setAttribute(
                  "stroke",
                  this.buildColor(r.sc)
                ),
                this.layerElement.setAttribute("stroke-width", r.sw)),
              this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
              this.layerElement.setAttribute("font-family", i.fFamily);
              var a = r.fWeight,
                n = r.fStyle;
              this.layerElement.setAttribute("font-style", n),
                this.layerElement.setAttribute("font-weight", a);
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var s,
              o = r.l || [],
              h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l = this.mHelper,
              p = this.data.singleShape,
              c = 0,
              f = 0,
              u = !0,
              d = 0.001 * r.tr * r.finalSize;
            if (!p || h || r.sz) {
              var m,
                y = this.textSpans.length;
              for (t = 0; t < e; t += 1) {
                if (
                  (this.textSpans[t] ||
                    (this.textSpans[t] = {
                      span: null,
                      childSpan: null,
                      glyph: null,
                    }),
                  !h || !p || 0 === t)
                ) {
                  if (
                    ((s =
                      y > t
                        ? this.textSpans[t].span
                        : createNS(h ? "g" : "text")),
                    y <= t)
                  ) {
                    if (
                      (s.setAttribute("stroke-linecap", "butt"),
                      s.setAttribute("stroke-linejoin", "round"),
                      s.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[t].span = s),
                      h)
                    ) {
                      var g = createNS("g");
                      s.appendChild(g), (this.textSpans[t].childSpan = g);
                    }
                    (this.textSpans[t].span = s),
                      this.layerElement.appendChild(s);
                  }
                  s.style.display = "inherit";
                }
                if (
                  (l.reset(),
                  p &&
                    (o[t].n &&
                      ((c = -d), (f += r.yOffset), (f += u ? 1 : 0), (u = !1)),
                    this.applyTextPropertiesToMatrix(r, l, o[t].line, c, f),
                    (c += o[t].l || 0),
                    (c += d)),
                  h)
                ) {
                  var v;
                  if (
                    1 ===
                    (m = this.globalData.fontManager.getCharData(
                      r.finalText[t],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(r.f).fFamily
                    )).t
                  )
                    v = new SVGCompElement(m.data, this.globalData, this);
                  else {
                    var b = emptyShapeData;
                    m.data &&
                      m.data.shapes &&
                      (b = this.buildShapeData(m.data, r.finalSize)),
                      (v = new SVGShapeElement(b, this.globalData, this));
                  }
                  if (this.textSpans[t].glyph) {
                    var _ = this.textSpans[t].glyph;
                    this.textSpans[t].childSpan.removeChild(_.layerElement),
                      _.destroy();
                  }
                  (this.textSpans[t].glyph = v),
                    (v._debug = !0),
                    v.prepareFrame(0),
                    v.renderFrame(),
                    this.textSpans[t].childSpan.appendChild(v.layerElement),
                    1 === m.t &&
                      this.textSpans[t].childSpan.setAttribute(
                        "transform",
                        "scale(" +
                          r.finalSize / 100 +
                          "," +
                          r.finalSize / 100 +
                          ")"
                      );
                } else
                  p &&
                    s.setAttribute(
                      "transform",
                      "translate(" + l.props[12] + "," + l.props[13] + ")"
                    ),
                    (s.textContent = o[t].val),
                    s.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      "xml:space",
                      "preserve"
                    );
              }
              p && s && s.setAttribute("d", "");
            } else {
              var P = this.textContainer,
                E = "start";
              switch (r.j) {
                case 1:
                  E = "end";
                  break;
                case 2:
                  E = "middle";
                  break;
                default:
                  E = "start";
              }
              P.setAttribute("text-anchor", E),
                P.setAttribute("letter-spacing", d);
              var S = this.buildTextContents(r.finalText);
              for (
                e = S.length, f = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
                t < e;
                t += 1
              )
                ((s = this.textSpans[t].span || createNS("tspan")).textContent =
                  S[t]),
                  s.setAttribute("x", 0),
                  s.setAttribute("y", f),
                  (s.style.display = "inherit"),
                  P.appendChild(s),
                  this.textSpans[t] ||
                    (this.textSpans[t] = { span: null, glyph: null }),
                  (this.textSpans[t].span = s),
                  (f += r.finalLineHeight);
              this.layerElement.appendChild(P);
            }
            for (; t < this.textSpans.length; )
              (this.textSpans[t].span.style.display = "none"), (t += 1);
            this._sizeChanged = !0;
          }),
          (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (
              (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged)
            ) {
              this._sizeChanged = !1;
              var t = this.layerElement.getBBox();
              this.bbox = {
                top: t.y,
                left: t.x,
                width: t.width,
                height: t.height,
              };
            }
            return this.bbox;
          }),
          (SVGTextLottieElement.prototype.getValue = function () {
            var t,
              e,
              r = this.textSpans.length;
            for (
              this.renderedFrame = this.comp.renderedFrame, t = 0;
              t < r;
              t += 1
            )
              (e = this.textSpans[t].glyph) &&
                (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                e._mdf && (this._mdf = !0));
          }),
          (SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (
              (!this.data.singleShape || this._mdf) &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var t, e;
              this._sizeChanged = !0;
              var r,
                i,
                a,
                n = this.textAnimator.renderedLetters,
                s = this.textProperty.currentData.l;
              for (e = s.length, t = 0; t < e; t += 1)
                s[t].n ||
                  ((r = n[t]),
                  (i = this.textSpans[t].span),
                  (a = this.textSpans[t].glyph) && a.renderFrame(),
                  r._mdf.m && i.setAttribute("transform", r.m),
                  r._mdf.o && i.setAttribute("opacity", r.o),
                  r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                  r._mdf.sc && i.setAttribute("stroke", r.sc),
                  r._mdf.fc && i.setAttribute("fill", r.fc));
            }
          }),
          extendPrototype([IImageElement], ISolidElement),
          (ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.layerElement.appendChild(t);
          }),
          (NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (NullElement.prototype.renderFrame = function () {}),
          (NullElement.prototype.getBaseElement = function () {
            return null;
          }),
          (NullElement.prototype.destroy = function () {}),
          (NullElement.prototype.sourceRectAtTime = function () {}),
          (NullElement.prototype.hide = function () {}),
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement],
            NullElement
          ),
          extendPrototype([BaseRenderer], SVGRendererBase),
          (SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
          }),
          (SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
              this.svgElement.setAttribute(
                "xmlns:xlink",
                "http://www.w3.org/1999/xlink"
              ),
              this.renderConfig.viewBoxSize
                ? this.svgElement.setAttribute(
                    "viewBox",
                    this.renderConfig.viewBoxSize
                  )
                : this.svgElement.setAttribute(
                    "viewBox",
                    "0 0 " + t.w + " " + t.h
                  ),
              this.renderConfig.viewBoxOnly ||
                (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                (this.svgElement.style.width = "100%"),
                (this.svgElement.style.height = "100%"),
                (this.svgElement.style.transform = "translate3d(0,0,0)"),
                (this.svgElement.style.contentVisibility =
                  this.renderConfig.contentVisibility)),
              this.renderConfig.width &&
                this.svgElement.setAttribute("width", this.renderConfig.width),
              this.renderConfig.height &&
                this.svgElement.setAttribute(
                  "height",
                  this.renderConfig.height
                ),
              this.renderConfig.className &&
                this.svgElement.setAttribute(
                  "class",
                  this.renderConfig.className
                ),
              this.renderConfig.id &&
                this.svgElement.setAttribute("id", this.renderConfig.id),
              void 0 !== this.renderConfig.focusable &&
                this.svgElement.setAttribute(
                  "focusable",
                  this.renderConfig.focusable
                ),
              this.svgElement.setAttribute(
                "preserveAspectRatio",
                this.renderConfig.preserveAspectRatio
              ),
              this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.data = t);
            var r = createNS("clipPath"),
              i = createNS("rect");
            i.setAttribute("width", t.w),
              i.setAttribute("height", t.h),
              i.setAttribute("x", 0),
              i.setAttribute("y", 0);
            var a = createElementID();
            r.setAttribute("id", a),
              r.appendChild(i),
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + a + ")"
              ),
              e.appendChild(r),
              (this.layers = t.layers),
              (this.elements = createSizedArray(t.layers.length));
          }),
          (SVGRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.layerElement = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null);
          }),
          (SVGRendererBase.prototype.updateContainerSize = function () {}),
          (SVGRendererBase.prototype.findIndexByInd = function (t) {
            var e = 0,
              r = this.layers.length;
            for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
            return -1;
          }),
          (SVGRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = !0;
              var r = this.createItem(this.layers[t]);
              if (
                ((e[t] = r),
                getExpressionsPlugin() &&
                  (0 === this.layers[t].ty &&
                    this.globalData.projectInterface.registerComposition(r),
                  r.initExpressions()),
                this.appendElementInPos(r, t),
                this.layers[t].tt)
              ) {
                var i =
                  "tp" in this.layers[t]
                    ? this.findIndexByInd(this.layers[t].tp)
                    : t - 1;
                if (-1 === i) return;
                if (this.elements[i] && !0 !== this.elements[i]) {
                  var a = e[i].getMatte(this.layers[t].tt);
                  r.setMatte(a);
                } else this.buildItem(i), this.addPendingElement(r);
              }
            }
          }),
          (SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              if ((t.checkParenting(), t.data.tt))
                for (var e = 0, r = this.elements.length; e < r; ) {
                  if (this.elements[e] === t) {
                    var i =
                        "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                      a = this.elements[i].getMatte(this.layers[e].tt);
                    t.setMatte(a);
                    break;
                  }
                  e += 1;
                }
            }
          }),
          (SVGRendererBase.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              var e;
              null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
                (this.globalData.frameNum = t),
                (this.globalData.frameId += 1),
                (this.globalData.projectInterface.currentFrame = t),
                (this.globalData._mdf = !1);
              var r = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), e = r - 1;
                e >= 0;
                e -= 1
              )
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].renderFrame();
            }
          }),
          (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              for (var i, a = 0; a < e; )
                this.elements[a] &&
                  !0 !== this.elements[a] &&
                  this.elements[a].getBaseElement() &&
                  (i = this.elements[a].getBaseElement()),
                  (a += 1);
              i
                ? this.layerElement.insertBefore(r, i)
                : this.layerElement.appendChild(r);
            }
          }),
          (SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none";
          }),
          (SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block";
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            ICompElement
          ),
          (ICompElement.prototype.initElement = function (t, e, r) {
            this.initFrame(),
              this.initBaseData(t, e, r),
              this.initTransform(t, e, r),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
              this.hide();
          }),
          (ICompElement.prototype.prepareFrame = function (t) {
            if (
              ((this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.isInRange || this.data.xt)
            ) {
              if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1),
                  (this.renderedFrame = e);
              }
              var r,
                i = this.elements.length;
              for (
                this.completeLayers || this.checkLayers(this.renderedFrame),
                  r = i - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  (this.elements[r].prepareFrame(
                    this.renderedFrame - this.layers[r].st
                  ),
                  this.elements[r]._mdf && (this._mdf = !0));
            }
          }),
          (ICompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (ICompElement.prototype.setElements = function (t) {
            this.elements = t;
          }),
          (ICompElement.prototype.getElements = function () {
            return this.elements;
          }),
          (ICompElement.prototype.destroyElements = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
          }),
          (ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement();
          }),
          extendPrototype(
            [SVGRendererBase, ICompElement, SVGBaseElement],
            SVGCompElement
          ),
          (SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          extendPrototype([SVGRendererBase], SVGRenderer),
          (SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          (CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
              e = this.savedOp;
            (this.savedOp = createTypedArray("float32", t)),
              this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1)
              this.saved[r] = createTypedArray("float32", 16);
            this._length = t;
          }),
          (CVContextData.prototype.reset = function () {
            (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
          }),
          (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              var e,
                r = t.length,
                i = "_";
              for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
              var a = this.sequences[i];
              return (
                a ||
                  ((a = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1,
                  }),
                  (this.sequences[i] = a),
                  this.sequenceList.push(a)),
                a
              );
            },
            processSequence: function (t, e) {
              for (
                var r, i = 0, a = t.transforms.length, n = e;
                i < a && !e;

              ) {
                if (t.transforms[i].transform.mProps._mdf) {
                  n = !0;
                  break;
                }
                i += 1;
              }
              if (n)
                for (t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1)
                  (r = t.transforms[i].transform.mProps.v.props),
                    t.finalTransform.transform(
                      r[0],
                      r[1],
                      r[2],
                      r[3],
                      r[4],
                      r[5],
                      r[6],
                      r[7],
                      r[8],
                      r[9],
                      r[10],
                      r[11],
                      r[12],
                      r[13],
                      r[14],
                      r[15]
                    );
              t._mdf = n;
            },
            processSequences: function (t) {
              var e,
                r = this.sequenceList.length;
              for (e = 0; e < r; e += 1)
                this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function () {
              return (
                (this.transform_key_count += 1), "_" + this.transform_key_count
              );
            },
          }),
          (CVEffects.prototype.renderFrame = function () {}),
          (CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
              var t,
                e,
                r,
                i,
                a = this.element.finalTransform.mat,
                n = this.element.canvasContext,
                s = this.masksProperties.length;
              for (n.beginPath(), t = 0; t < s; t += 1)
                if ("n" !== this.masksProperties[t].mode) {
                  var o;
                  this.masksProperties[t].inv &&
                    (n.moveTo(0, 0),
                    n.lineTo(this.element.globalData.compSize.w, 0),
                    n.lineTo(
                      this.element.globalData.compSize.w,
                      this.element.globalData.compSize.h
                    ),
                    n.lineTo(0, this.element.globalData.compSize.h),
                    n.lineTo(0, 0)),
                    (i = this.viewData[t].v),
                    (e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                    n.moveTo(e[0], e[1]);
                  var h = i._length;
                  for (o = 1; o < h; o += 1)
                    (r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o])),
                      n.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  (r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0])),
                    n.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                }
              this.element.globalData.renderer.save(!0), n.clip();
            }
          }),
          (CVMaskElement.prototype.getMaskProperty =
            MaskElement.prototype.getMaskProperty),
          (CVMaskElement.prototype.destroy = function () {
            this.element = null;
          }),
          (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
              (this.canvasContext = this.globalData.canvasContext),
                (this.renderableEffectsManager = new CVEffects(this));
            },
            createContent: function () {},
            setBlendMode: function () {
              var t = this.globalData;
              if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function () {
              this.hidden ||
                (this.isInRange && !this.isTransparent) ||
                (this.hidden = !0);
            },
            showElement: function () {
              this.isInRange &&
                !this.isTransparent &&
                ((this.hidden = !1),
                (this._isFirstFrame = !0),
                (this.maskManager._isFirstFrame = !0));
            },
            renderFrame: function () {
              if (!this.hidden && !this.data.hd) {
                this.renderTransform(),
                  this.renderRenderable(),
                  this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t),
                  this.globalData.renderer.ctxTransform(
                    this.finalTransform.mat.props
                  ),
                  this.globalData.renderer.ctxOpacity(
                    this.finalTransform.mProp.o.v
                  ),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(t),
                  this.maskManager.hasMasks &&
                    this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1);
              }
            },
            destroy: function () {
              (this.canvasContext = null),
                (this.data = null),
                (this.globalData = null),
                this.maskManager.destroy();
            },
            mHelper: new Matrix(),
          }),
          (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
          (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
          (CVShapeData.prototype.setAsAnimated =
            SVGShapeData.prototype.setAsAnimated),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVShapeElement
          ),
          (CVShapeElement.prototype.initElement =
            RenderableDOMElement.prototype.initElement),
          (CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1,
          }),
          (CVShapeElement.prototype.dashResetter = []),
          (CVShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            );
          }),
          (CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd,
              },
              i = {};
            if (
              ("fl" === t.ty || "st" === t.ty
                ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                  i.c.k ||
                    (r.co =
                      "rgb(" +
                      bmFloor(i.c.v[0]) +
                      "," +
                      bmFloor(i.c.v[1]) +
                      "," +
                      bmFloor(i.c.v[2]) +
                      ")"))
                : ("gf" !== t.ty && "gs" !== t.ty) ||
                  ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                  (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                  (i.h = PropertyFactory.getProp(
                    this,
                    t.h || { k: 0 },
                    0,
                    0.01,
                    this
                  )),
                  (i.a = PropertyFactory.getProp(
                    this,
                    t.a || { k: 0 },
                    0,
                    degToRads,
                    this
                  )),
                  (i.g = new GradientProperty(this, t.g, this))),
              (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
              "st" === t.ty || "gs" === t.ty)
            ) {
              if (
                ((r.lc = lineCapEnum[t.lc || 2]),
                (r.lj = lineJoinEnum[t.lj || 2]),
                1 == t.lj && (r.ml = t.ml),
                (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                i.w.k || (r.wi = i.w.v),
                t.d)
              ) {
                var a = new DashProperty(this, t.d, "canvas", this);
                (i.d = a),
                  i.d.k || ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
              }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), (i.style = r), i;
          }),
          (CVShapeElement.prototype.createGroupElement = function () {
            return { it: [], prevViewData: [] };
          }),
          (CVShapeElement.prototype.createTransformElement = function (t) {
            return {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this
                ),
              },
            };
          }),
          (CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(
              this,
              t,
              this.stylesList,
              this.transformsManager
            );
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
          }),
          (CVShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                []
              ),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame);
          }),
          (CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e,
              r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed ||
                this.stylesList[e].transforms.push(t);
          }),
          (CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }),
          (CVShapeElement.prototype.closeStyles = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0;
          }),
          (CVShapeElement.prototype.searchShapes = function (t, e, r, i, a) {
            var n,
              s,
              o,
              h,
              l,
              p,
              c = t.length - 1,
              f = [],
              u = [],
              d = [].concat(a);
            for (n = c; n >= 0; n -= 1) {
              if (
                ((h = this.searchProcessedElement(t[n]))
                  ? (e[n] = r[h - 1])
                  : (t[n]._shouldRender = i),
                "fl" === t[n].ty ||
                  "st" === t[n].ty ||
                  "gf" === t[n].ty ||
                  "gs" === t[n].ty)
              )
                h
                  ? (e[n].style.closed = !1)
                  : (e[n] = this.createStyleElement(t[n], d)),
                  f.push(e[n].style);
              else if ("gr" === t[n].ty) {
                if (h)
                  for (o = e[n].it.length, s = 0; s < o; s += 1)
                    e[n].prevViewData[s] = e[n].it[s];
                else e[n] = this.createGroupElement(t[n]);
                this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, i, d);
              } else
                "tr" === t[n].ty
                  ? (h || ((p = this.createTransformElement(t[n])), (e[n] = p)),
                    d.push(e[n]),
                    this.addTransformToStyleList(e[n]))
                  : "sh" === t[n].ty ||
                    "rc" === t[n].ty ||
                    "el" === t[n].ty ||
                    "sr" === t[n].ty
                  ? h || (e[n] = this.createShapeElement(t[n]))
                  : "tm" === t[n].ty ||
                    "rd" === t[n].ty ||
                    "pb" === t[n].ty ||
                    "zz" === t[n].ty ||
                    "op" === t[n].ty
                  ? (h
                      ? ((l = e[n]).closed = !1)
                      : ((l = ShapeModifiers.getModifier(t[n].ty)).init(
                          this,
                          t[n]
                        ),
                        (e[n] = l),
                        this.shapeModifiers.push(l)),
                    u.push(l))
                  : "rp" === t[n].ty &&
                    (h
                      ? ((l = e[n]).closed = !0)
                      : ((l = ShapeModifiers.getModifier(t[n].ty)),
                        (e[n] = l),
                        l.init(this, t, n, e),
                        this.shapeModifiers.push(l),
                        (i = !1)),
                    u.push(l));
              this.addProcessedElement(t[n], n + 1);
            }
            for (
              this.removeTransformFromStyleList(),
                this.closeStyles(f),
                c = u.length,
                n = 0;
              n < c;
              n += 1
            )
              u[n].closed = !0;
          }),
          (CVShapeElement.prototype.renderInnerContent = function () {
            (this.transformHelper.opacity = 1),
              (this.transformHelper._opMdf = !1),
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(
                this.transformHelper,
                this.shapesData,
                this.itemsData,
                !0
              );
          }),
          (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) &&
              ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
          }),
          (CVShapeElement.prototype.drawLayer = function () {
            var t,
              e,
              r,
              i,
              a,
              n,
              s,
              o,
              h,
              l = this.stylesList.length,
              p = this.globalData.renderer,
              c = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
              if (
                (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o) ||
                  0 !== h.wi) &&
                h.data._shouldRender &&
                0 !== h.coOp &&
                0 !== this.globalData.currentGlobalAlpha
              ) {
                for (
                  p.save(),
                    n = h.elements,
                    "st" === o || "gs" === o
                      ? ((c.strokeStyle = "st" === o ? h.co : h.grd),
                        (c.lineWidth = h.wi),
                        (c.lineCap = h.lc),
                        (c.lineJoin = h.lj),
                        (c.miterLimit = h.ml || 0))
                      : (c.fillStyle = "fl" === o ? h.co : h.grd),
                    p.ctxOpacity(h.coOp),
                    "st" !== o && "gs" !== o && c.beginPath(),
                    p.ctxTransform(h.preTransforms.finalTransform.props),
                    r = n.length,
                    e = 0;
                  e < r;
                  e += 1
                ) {
                  for (
                    ("st" !== o && "gs" !== o) ||
                      (c.beginPath(),
                      h.da && (c.setLineDash(h.da), (c.lineDashOffset = h.do))),
                      a = (s = n[e].trNodes).length,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    "m" === s[i].t
                      ? c.moveTo(s[i].p[0], s[i].p[1])
                      : "c" === s[i].t
                      ? c.bezierCurveTo(
                          s[i].pts[0],
                          s[i].pts[1],
                          s[i].pts[2],
                          s[i].pts[3],
                          s[i].pts[4],
                          s[i].pts[5]
                        )
                      : c.closePath();
                  ("st" !== o && "gs" !== o) ||
                    (c.stroke(), h.da && c.setLineDash(this.dashResetter));
                }
                "st" !== o && "gs" !== o && c.fill(h.r), p.restore();
              }
          }),
          (CVShapeElement.prototype.renderShape = function (t, e, r, i) {
            var a, n;
            for (n = t, a = e.length - 1; a >= 0; a -= 1)
              "tr" === e[a].ty
                ? ((n = r[a].transform), this.renderShapeTransform(t, n))
                : "sh" === e[a].ty ||
                  "el" === e[a].ty ||
                  "rc" === e[a].ty ||
                  "sr" === e[a].ty
                ? this.renderPath(e[a], r[a])
                : "fl" === e[a].ty
                ? this.renderFill(e[a], r[a], n)
                : "st" === e[a].ty
                ? this.renderStroke(e[a], r[a], n)
                : "gf" === e[a].ty || "gs" === e[a].ty
                ? this.renderGradientFill(e[a], r[a], n)
                : "gr" === e[a].ty
                ? this.renderShape(n, e[a].it, r[a].it)
                : e[a].ty;
            i && this.drawLayer();
          }),
          (CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r,
                i,
                a,
                n = t.trNodes,
                s = e.paths,
                o = s._length;
              n.length = 0;
              var h = t.transforms.finalTransform;
              for (a = 0; a < o; a += 1) {
                var l = s.shapes[a];
                if (l && l.v) {
                  for (i = l._length, r = 1; r < i; r += 1)
                    1 === r &&
                      n.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      }),
                      n.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]),
                      });
                  1 === i &&
                    n.push({
                      t: "m",
                      p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                    }),
                    l.c &&
                      i &&
                      (n.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]),
                      }),
                      n.push({ t: "z" }));
                }
              }
              t.trNodes = n;
            }
          }),
          (CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
              var r,
                i = e.styledShapes.length;
              for (r = 0; r < i; r += 1)
                this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }),
          (CVShapeElement.prototype.renderFill = function (t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) &&
              (i.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity);
          }),
          (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var i,
              a = e.style;
            if (
              !a.grd ||
              e.g._mdf ||
              e.s._mdf ||
              e.e._mdf ||
              (1 !== t.t && (e.h._mdf || e.a._mdf))
            ) {
              var n,
                s = this.globalData.canvasContext,
                o = e.s.v,
                h = e.e.v;
              if (1 === t.t) i = s.createLinearGradient(o[0], o[1], h[0], h[1]);
              else {
                var l = Math.sqrt(
                    Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)
                  ),
                  p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                  c = e.h.v;
                c >= 1 ? (c = 0.99) : c <= -1 && (c = -0.99);
                var f = l * c,
                  u = Math.cos(p + e.a.v) * f + o[0],
                  d = Math.sin(p + e.a.v) * f + o[1];
                i = s.createRadialGradient(u, d, 0, o[0], o[1], l);
              }
              var m = t.g.p,
                y = e.g.c,
                g = 1;
              for (n = 0; n < m; n += 1)
                e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * n + 1]),
                  i.addColorStop(
                    y[4 * n] / 100,
                    "rgba(" +
                      y[4 * n + 1] +
                      "," +
                      y[4 * n + 2] +
                      "," +
                      y[4 * n + 3] +
                      "," +
                      g +
                      ")"
                  );
              a.grd = i;
            }
            a.coOp = e.o.v * r.opacity;
          }),
          (CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var i = e.style,
              a = e.d;
            a &&
              (a._mdf || this._isFirstFrame) &&
              ((i.da = a.dashArray), (i.do = a.dashoffset[0])),
              (e.c._mdf || this._isFirstFrame) &&
                (i.co =
                  "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity),
              (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
          }),
          (CVShapeElement.prototype.destroy = function () {
            (this.shapesData = null),
              (this.globalData = null),
              (this.canvasContext = null),
              (this.stylesList.length = 0),
              (this.itemsData.length = 0);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
              ITextElement,
            ],
            CVTextElement
          ),
          (CVTextElement.prototype.tHelper =
            createTag("canvas").getContext("2d")),
          (CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc
              ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
              : (this.values.fill = "rgba(0,0,0,0)"),
              (this.fill = e);
            var r = !1;
            t.sc &&
              ((r = !0),
              (this.values.stroke = this.buildColor(t.sc)),
              (this.values.sWidth = t.sw));
            var i,
              a,
              n,
              s,
              o,
              h,
              l,
              p,
              c,
              f,
              u,
              d,
              m = this.globalData.fontManager.getFontByName(t.f),
              y = t.l,
              g = this.mHelper;
            (this.stroke = r),
              (this.values.fValue =
                t.finalSize +
                "px " +
                this.globalData.fontManager.getFontByName(t.f).fFamily),
              (a = t.finalText.length);
            var v = this.data.singleShape,
              b = 0.001 * t.tr * t.finalSize,
              _ = 0,
              P = 0,
              E = !0,
              S = 0;
            for (i = 0; i < a; i += 1) {
              (s =
                ((n = this.globalData.fontManager.getCharData(
                  t.finalText[i],
                  m.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                )) &&
                  n.data) ||
                {}),
                g.reset(),
                v &&
                  y[i].n &&
                  ((_ = -b), (P += t.yOffset), (P += E ? 1 : 0), (E = !1)),
                (c = (l = s.shapes ? s.shapes[0].it : []).length),
                g.scale(t.finalSize / 100, t.finalSize / 100),
                v && this.applyTextPropertiesToMatrix(t, g, y[i].line, _, P),
                (u = createSizedArray(c - 1));
              var x = 0;
              for (p = 0; p < c; p += 1)
                if ("sh" === l[p].ty) {
                  for (
                    h = l[p].ks.k.i.length, f = l[p].ks.k, d = [], o = 1;
                    o < h;
                    o += 1
                  )
                    1 === o &&
                      d.push(
                        g.applyToX(f.v[0][0], f.v[0][1], 0),
                        g.applyToY(f.v[0][0], f.v[0][1], 0)
                      ),
                      d.push(
                        g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                        g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                        g.applyToX(f.i[o][0], f.i[o][1], 0),
                        g.applyToY(f.i[o][0], f.i[o][1], 0),
                        g.applyToX(f.v[o][0], f.v[o][1], 0),
                        g.applyToY(f.v[o][0], f.v[o][1], 0)
                      );
                  d.push(
                    g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                    g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                    g.applyToX(f.i[0][0], f.i[0][1], 0),
                    g.applyToY(f.i[0][0], f.i[0][1], 0),
                    g.applyToX(f.v[0][0], f.v[0][1], 0),
                    g.applyToY(f.v[0][0], f.v[0][1], 0)
                  ),
                    (u[x] = d),
                    (x += 1);
                }
              v && ((_ += y[i].l), (_ += b)),
                this.textSpans[S]
                  ? (this.textSpans[S].elem = u)
                  : (this.textSpans[S] = { elem: u }),
                (S += 1);
            }
          }),
          (CVTextElement.prototype.renderInnerContent = function () {
            var t,
              e,
              r,
              i,
              a,
              n,
              s = this.canvasContext;
            (s.font = this.values.fValue),
              (s.lineCap = "butt"),
              (s.lineJoin = "miter"),
              (s.miterLimit = 4),
              this.data.singleShape ||
                this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                );
            var o,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            e = l.length;
            var p,
              c,
              f = null,
              u = null,
              d = null;
            for (t = 0; t < e; t += 1)
              if (!l[t].n) {
                if (
                  ((o = h[t]) &&
                    (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(o.p),
                    this.globalData.renderer.ctxOpacity(o.o)),
                  this.fill)
                ) {
                  for (
                    o && o.fc
                      ? f !== o.fc && ((f = o.fc), (s.fillStyle = o.fc))
                      : f !== this.values.fill &&
                        ((f = this.values.fill),
                        (s.fillStyle = this.values.fill)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      n = (c = p[r]).length,
                        this.globalData.canvasContext.moveTo(c[0], c[1]),
                        a = 2;
                      a < n;
                      a += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        c[a],
                        c[a + 1],
                        c[a + 2],
                        c[a + 3],
                        c[a + 4],
                        c[a + 5]
                      );
                  this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                  for (
                    o && o.sw
                      ? d !== o.sw && ((d = o.sw), (s.lineWidth = o.sw))
                      : d !== this.values.sWidth &&
                        ((d = this.values.sWidth),
                        (s.lineWidth = this.values.sWidth)),
                      o && o.sc
                        ? u !== o.sc && ((u = o.sc), (s.strokeStyle = o.sc))
                        : u !== this.values.stroke &&
                          ((u = this.values.stroke),
                          (s.strokeStyle = this.values.stroke)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      n = (c = p[r]).length,
                        this.globalData.canvasContext.moveTo(c[0], c[1]),
                        a = 2;
                      a < n;
                      a += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        c[a],
                        c[a + 1],
                        c[a + 2],
                        c[a + 3],
                        c[a + 4],
                        c[a + 5]
                      );
                  this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
              }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVImageElement
          ),
          (CVImageElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVImageElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVImageElement.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width ||
                this.assetData.h !== this.img.height)
            ) {
              var t = createTag("canvas");
              (t.width = this.assetData.w), (t.height = this.assetData.h);
              var e,
                r,
                i = t.getContext("2d"),
                a = this.img.width,
                n = this.img.height,
                s = a / n,
                o = this.assetData.w / this.assetData.h,
                h =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio;
              (s > o && "xMidYMid slice" === h) ||
              (s < o && "xMidYMid slice" !== h)
                ? (e = (r = n) * o)
                : (r = (e = a) / o),
                i.drawImage(
                  this.img,
                  (a - e) / 2,
                  (n - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h
                ),
                (this.img = t);
            }
          }),
          (CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          }),
          (CVImageElement.prototype.destroy = function () {
            this.img = null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVSolidElement
          ),
          (CVSolidElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVSolidElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            (t.fillStyle = this.data.sc),
              t.fillRect(0, 0, this.data.sw, this.data.sh);
          }),
          extendPrototype([BaseRenderer], CanvasRendererBase),
          (CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
          }),
          (CanvasRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (CanvasRendererBase.prototype.ctxTransform = function (t) {
            if (
              1 !== t[0] ||
              0 !== t[1] ||
              0 !== t[4] ||
              1 !== t[5] ||
              0 !== t[12] ||
              0 !== t[13]
            )
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                ),
                  this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(
                  r[0],
                  r[1],
                  r[4],
                  r[5],
                  r[12],
                  r[13]
                );
              } else
                this.canvasContext.transform(
                  t[0],
                  t[1],
                  t[4],
                  t[5],
                  t[12],
                  t[13]
                );
          }),
          (CanvasRendererBase.prototype.ctxOpacity = function (t) {
            if (!this.renderConfig.clearCanvas)
              return (
                (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                void (this.globalData.currentGlobalAlpha = this.contextData.cO)
              );
            (this.contextData.cO *= t < 0 ? 0 : t),
              this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                ((this.canvasContext.globalAlpha = this.contextData.cO),
                (this.globalData.currentGlobalAlpha = this.contextData.cO));
          }),
          (CanvasRendererBase.prototype.reset = function () {
            this.renderConfig.clearCanvas
              ? this.contextData.reset()
              : this.canvasContext.restore();
          }),
          (CanvasRendererBase.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e,
                r = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos &&
                this.contextData.duplicate();
              var i = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              (this.contextData.savedOp[this.contextData.cArrPos] =
                this.contextData.cO),
                (this.contextData.cArrPos += 1);
            } else this.canvasContext.save();
          }),
          (CanvasRendererBase.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
              t &&
                (this.canvasContext.restore(),
                (this.globalData.blendMode = "source-over")),
                (this.contextData.cArrPos -= 1);
              var e,
                r = this.contextData.saved[this.contextData.cArrPos],
                i = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              this.canvasContext.setTransform(
                r[0],
                r[1],
                r[4],
                r[5],
                r[12],
                r[13]
              ),
                (r = this.contextData.savedOp[this.contextData.cArrPos]),
                (this.contextData.cO = r),
                this.globalData.currentGlobalAlpha !== r &&
                  ((this.canvasContext.globalAlpha = r),
                  (this.globalData.currentGlobalAlpha = r));
            } else this.canvasContext.restore();
          }),
          (CanvasRendererBase.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              (e.width = "100%"), (e.height = "100%");
              var r = "0px 0px 0px";
              (e.transformOrigin = r),
                (e.mozTransformOrigin = r),
                (e.webkitTransformOrigin = r),
                (e["-webkit-transform"] = r),
                (e.contentVisibility = this.renderConfig.contentVisibility),
                this.animationItem.wrapper.appendChild(
                  this.animationItem.container
                ),
                (this.canvasContext =
                  this.animationItem.container.getContext("2d")),
                this.renderConfig.className &&
                  this.animationItem.container.setAttribute(
                    "class",
                    this.renderConfig.className
                  ),
                this.renderConfig.id &&
                  this.animationItem.container.setAttribute(
                    "id",
                    this.renderConfig.id
                  );
            } else this.canvasContext = this.renderConfig.context;
            (this.data = t),
              (this.layers = t.layers),
              (this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0,
              }),
              this.setupGlobalData(t, document.body),
              (this.globalData.canvasContext = this.canvasContext),
              (this.globalData.renderer = this),
              (this.globalData.isDashed = !1),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.globalData.transformCanvas = this.transformCanvas),
              (this.elements = createSizedArray(t.layers.length)),
              this.updateContainerSize();
          }),
          (CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
            var r, i, a, n;
            if (
              (this.reset(),
              t
                ? ((r = t),
                  (i = e),
                  (this.canvasContext.canvas.width = r),
                  (this.canvasContext.canvas.height = i))
                : (this.animationItem.wrapper && this.animationItem.container
                    ? ((r = this.animationItem.wrapper.offsetWidth),
                      (i = this.animationItem.wrapper.offsetHeight))
                    : ((r = this.canvasContext.canvas.width),
                      (i = this.canvasContext.canvas.height)),
                  (this.canvasContext.canvas.width = r * this.renderConfig.dpr),
                  (this.canvasContext.canvas.height =
                    i * this.renderConfig.dpr)),
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
            ) {
              var s = this.renderConfig.preserveAspectRatio.split(" "),
                o = s[1] || "meet",
                h = s[0] || "xMidYMid",
                l = h.substr(0, 4),
                p = h.substr(4);
              (a = r / i),
                ((n = this.transformCanvas.w / this.transformCanvas.h) > a &&
                  "meet" === o) ||
                (n < a && "slice" === o)
                  ? ((this.transformCanvas.sx =
                      r / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      r / (this.transformCanvas.w / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx =
                      i / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      i / (this.transformCanvas.h / this.renderConfig.dpr))),
                (this.transformCanvas.tx =
                  "xMid" === l &&
                  ((n < a && "meet" === o) || (n > a && "slice" === o))
                    ? ((r -
                        this.transformCanvas.w * (i / this.transformCanvas.h)) /
                        2) *
                      this.renderConfig.dpr
                    : "xMax" === l &&
                      ((n < a && "meet" === o) || (n > a && "slice" === o))
                    ? (r -
                        this.transformCanvas.w * (i / this.transformCanvas.h)) *
                      this.renderConfig.dpr
                    : 0),
                (this.transformCanvas.ty =
                  "YMid" === p &&
                  ((n > a && "meet" === o) || (n < a && "slice" === o))
                    ? ((i -
                        this.transformCanvas.h * (r / this.transformCanvas.w)) /
                        2) *
                      this.renderConfig.dpr
                    : "YMax" === p &&
                      ((n > a && "meet" === o) || (n < a && "slice" === o))
                    ? (i -
                        this.transformCanvas.h * (r / this.transformCanvas.w)) *
                      this.renderConfig.dpr
                    : 0);
            } else
              "none" === this.renderConfig.preserveAspectRatio
                ? ((this.transformCanvas.sx =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    i / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0))
                : ((this.transformCanvas.sx = this.renderConfig.dpr),
                  (this.transformCanvas.sy = this.renderConfig.dpr),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0));
            (this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ]),
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(
                0,
                0,
                this.transformCanvas.w,
                this.transformCanvas.h
              ),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0);
          }),
          (CanvasRendererBase.prototype.destroy = function () {
            var t;
            for (
              this.renderConfig.clearCanvas &&
                this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ""),
                t = (this.layers ? this.layers.length : 0) - 1;
              t >= 0;
              t -= 1
            )
              this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0),
              (this.globalData.canvasContext = null),
              (this.animationItem.container = null),
              (this.destroyed = !0);
          }),
          (CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if (
              (this.renderedFrame !== t ||
                !0 !== this.renderConfig.clearCanvas ||
                e) &&
              !this.destroyed &&
              -1 !== t
            ) {
              var r;
              (this.renderedFrame = t),
                (this.globalData.frameNum =
                  t - this.animationItem._isFirstFrame),
                (this.globalData.frameId += 1),
                (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                (this.globalData.projectInterface.currentFrame = t);
              var i = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), r = 0;
                r < i;
                r += 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (
                  !0 === this.renderConfig.clearCanvas
                    ? this.canvasContext.clearRect(
                        0,
                        0,
                        this.transformCanvas.w,
                        this.transformCanvas.h
                      )
                    : this.save(),
                    r = i - 1;
                  r >= 0;
                  r -= 1
                )
                  (this.completeLayers || this.elements[r]) &&
                    this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          }),
          (CanvasRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              (e[t] = r), r.initExpressions();
            }
          }),
          (CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          }),
          (CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
          }),
          (CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block";
          }),
          extendPrototype(
            [CanvasRendererBase, ICompElement, CVBaseElement],
            CVCompElement
          ),
          (CVCompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.canvasContext;
            for (
              e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(this.data.w, 0),
                e.lineTo(this.data.w, this.data.h),
                e.lineTo(0, this.data.h),
                e.lineTo(0, 0),
                e.clip(),
                t = this.layers.length - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            (this.layers = null), (this.elements = null);
          }),
          (CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          extendPrototype([CanvasRendererBase], CanvasRenderer),
          (CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          (HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
              (this.baseElement = createTag(this.data.tg || "div")),
                this.data.hasMask
                  ? ((this.svgElement = createNS("svg")),
                    (this.layerElement = createNS("g")),
                    (this.maskedElement = this.layerElement),
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement))
                  : (this.layerElement = this.baseElement),
                styleDiv(this.baseElement);
            },
            createContainerElements: function () {
              (this.renderableEffectsManager = new CVEffects(this)),
                (this.transformedElement = this.baseElement),
                (this.maskedElement = this.layerElement),
                this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              var t = this.transformedElement
                ? this.transformedElement.style
                : {};
              if (this.finalTransform._matMdf) {
                var e = this.finalTransform.mat.toCSS();
                (t.transform = e), (t.webkitTransform = e);
              }
              this.finalTransform._opMdf &&
                (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
              this.data.hd ||
                this.hidden ||
                (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function () {
              (this.layerElement = null),
                (this.transformedElement = null),
                this.matteElement && (this.matteElement = null),
                this.maskManager &&
                  (this.maskManager.destroy(), (this.maskManager = null));
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData
              );
            },
            addEffects: function () {},
            setMatte: function () {},
          }),
          (HBaseElement.prototype.getBaseElement =
            SVGBaseElement.prototype.getBaseElement),
          (HBaseElement.prototype.destroyBaseElement =
            HBaseElement.prototype.destroy),
          (HBaseElement.prototype.buildElementParenting =
            BaseRenderer.prototype.buildElementParenting),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            HSolidElement
          ),
          (HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask
              ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.svgElement.setAttribute("width", this.data.sw),
                this.svgElement.setAttribute("height", this.data.sh))
              : (((t = createTag("div")).style.width = this.data.sw + "px"),
                (t.style.height = this.data.sh + "px"),
                (t.style.backgroundColor = this.data.sc)),
              this.layerElement.appendChild(t);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HSolidElement,
              SVGShapeElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HShapeElement
          ),
          (HShapeElement.prototype._renderShapeFrame =
            HShapeElement.prototype.renderInnerContent),
          (HShapeElement.prototype.createContent = function () {
            var t;
            if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
              this.layerElement.appendChild(this.shapesContainer),
                (t = this.svgElement);
            else {
              t = createNS("svg");
              var e = this.comp.data
                ? this.comp.data
                : this.globalData.compSize;
              t.setAttribute("width", e.w),
                t.setAttribute("height", e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t);
            }
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.shapesContainer,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              (this.shapeCont = t);
          }),
          (HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          }),
          (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r,
              i,
              a,
              n,
              s,
              o = t.sh.v,
              h = t.transformers,
              l = o._length;
            if (!(l <= 1)) {
              for (r = 0; r < l - 1; r += 1)
                (i = this.getTransformedPoint(h, o.v[r])),
                  (a = this.getTransformedPoint(h, o.o[r])),
                  (n = this.getTransformedPoint(h, o.i[r + 1])),
                  (s = this.getTransformedPoint(h, o.v[r + 1])),
                  this.checkBounds(i, a, n, s, e);
              o.c &&
                ((i = this.getTransformedPoint(h, o.v[r])),
                (a = this.getTransformedPoint(h, o.o[r])),
                (n = this.getTransformedPoint(h, o.i[0])),
                (s = this.getTransformedPoint(h, o.v[0])),
                this.checkBounds(i, a, n, s, e));
            }
          }),
          (HShapeElement.prototype.checkBounds = function (t, e, r, i, a) {
            this.getBoundsOfCurve(t, e, r, i);
            var n = this.shapeBoundingBox;
            (a.x = bmMin(n.left, a.x)),
              (a.xMax = bmMax(n.right, a.xMax)),
              (a.y = bmMin(n.top, a.y)),
              (a.yMax = bmMax(n.bottom, a.yMax));
          }),
          (HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }),
          (HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0,
          }),
          (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
            for (
              var a,
                n,
                s,
                o,
                h,
                l,
                p,
                c = [
                  [t[0], i[0]],
                  [t[1], i[1]],
                ],
                f = 0;
              f < 2;
              ++f
            )
              (n = 6 * t[f] - 12 * e[f] + 6 * r[f]),
                (a = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f]),
                (s = 3 * e[f] - 3 * t[f]),
                (n |= 0),
                (s |= 0),
                (0 == (a |= 0) && 0 === n) ||
                  (0 === a
                    ? (o = -s / n) > 0 &&
                      o < 1 &&
                      c[f].push(this.calculateF(o, t, e, r, i, f))
                    : (h = n * n - 4 * s * a) >= 0 &&
                      ((l = (-n + bmSqrt(h)) / (2 * a)) > 0 &&
                        l < 1 &&
                        c[f].push(this.calculateF(l, t, e, r, i, f)),
                      (p = (-n - bmSqrt(h)) / (2 * a)) > 0 &&
                        p < 1 &&
                        c[f].push(this.calculateF(p, t, e, r, i, f))));
            (this.shapeBoundingBox.left = bmMin.apply(null, c[0])),
              (this.shapeBoundingBox.top = bmMin.apply(null, c[1])),
              (this.shapeBoundingBox.right = bmMax.apply(null, c[0])),
              (this.shapeBoundingBox.bottom = bmMax.apply(null, c[1]));
          }),
          (HShapeElement.prototype.calculateF = function (t, e, r, i, a, n) {
            return (
              bmPow(1 - t, 3) * e[n] +
              3 * bmPow(1 - t, 2) * t * r[n] +
              3 * (1 - t) * bmPow(t, 2) * i[n] +
              bmPow(t, 3) * a[n]
            );
          }),
          (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              t[r] && t[r].sh
                ? this.calculateShapeBoundingBox(t[r], e)
                : t[r] && t[r].it
                ? this.calculateBoundingBox(t[r].it, e)
                : t[r] &&
                  t[r].style &&
                  t[r].w &&
                  this.expandStrokeBoundingBox(t[r].w, e);
          }),
          (HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
            var r = 0;
            if (t.keyframes) {
              for (var i = 0; i < t.keyframes.length; i += 1) {
                var a = t.keyframes[i].s;
                a > r && (r = a);
              }
              r *= t.mult;
            } else r = t.v * t.mult;
            (e.x -= r), (e.xMax += r), (e.y -= r), (e.yMax += r);
          }),
          (HShapeElement.prototype.currentBoxContains = function (t) {
            return (
              this.currentBBox.x <= t.x &&
              this.currentBBox.y <= t.y &&
              this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
              this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            );
          }),
          (HShapeElement.prototype.renderInnerContent = function () {
            if (
              (this._renderShapeFrame(),
              !this.hidden && (this._isFirstFrame || this._mdf))
            ) {
              var t = this.tempBoundingBox,
                e = 999999;
              if (
                ((t.x = e),
                (t.xMax = -e),
                (t.y = e),
                (t.yMax = -e),
                this.calculateBoundingBox(this.itemsData, t),
                (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                this.currentBoxContains(t))
              )
                return;
              var r = !1;
              if (
                (this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute("width", t.width),
                  (r = !0)),
                this.currentBBox.h !== t.height &&
                  ((this.currentBBox.h = t.height),
                  this.shapeCont.setAttribute("height", t.height),
                  (r = !0)),
                r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
              ) {
                (this.currentBBox.w = t.width),
                  (this.currentBBox.h = t.height),
                  (this.currentBBox.x = t.x),
                  (this.currentBBox.y = t.y),
                  this.shapeCont.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h
                  );
                var i = this.shapeCont.style,
                  a =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                (i.transform = a), (i.webkitTransform = a);
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            HTextElement
          ),
          (HTextElement.prototype.createContent = function () {
            if (((this.isMasked = this.checkMasks()), this.isMasked)) {
              (this.renderType = "svg"),
                (this.compW = this.comp.data.w),
                (this.compH = this.comp.data.h),
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH);
              var t = createNS("g");
              this.maskedElement.appendChild(t), (this.innerElem = t);
            } else
              (this.renderType = "html"), (this.innerElem = this.layerElement);
            this.checkParenting();
          }),
          (HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
              r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            (e.fill = r),
              (e.color = r),
              t.sc &&
                ((e.stroke = this.buildColor(t.sc)),
                (e.strokeWidth = t.sw + "px"));
            var i,
              a,
              n = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
              if (
                ((e.fontSize = t.finalSize + "px"),
                (e.lineHeight = t.finalSize + "px"),
                n.fClass)
              )
                this.innerElem.className = n.fClass;
              else {
                e.fontFamily = n.fFamily;
                var s = t.fWeight,
                  o = t.fStyle;
                (e.fontStyle = o), (e.fontWeight = s);
              }
            var h,
              l,
              p,
              c = t.l;
            a = c.length;
            var f,
              u = this.mHelper,
              d = "",
              m = 0;
            for (i = 0; i < a; i += 1) {
              if (
                (this.globalData.fontManager.chars
                  ? (this.textPaths[m]
                      ? (h = this.textPaths[m])
                      : ((h = createNS("path")).setAttribute(
                          "stroke-linecap",
                          lineCapEnum[1]
                        ),
                        h.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                        h.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked ||
                      (this.textSpans[m]
                        ? (p = (l = this.textSpans[m]).children[0])
                        : (((l = createTag("div")).style.lineHeight = 0),
                          (p = createNS("svg")).appendChild(h),
                          styleDiv(l))))
                  : this.isMasked
                  ? (h = this.textPaths[m]
                      ? this.textPaths[m]
                      : createNS("text"))
                  : this.textSpans[m]
                  ? ((l = this.textSpans[m]), (h = this.textPaths[m]))
                  : (styleDiv((l = createTag("span"))),
                    styleDiv((h = createTag("span"))),
                    l.appendChild(h)),
                this.globalData.fontManager.chars)
              ) {
                var y,
                  g = this.globalData.fontManager.getCharData(
                    t.finalText[i],
                    n.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily
                  );
                if (
                  ((y = g ? g.data : null),
                  u.reset(),
                  y &&
                    y.shapes &&
                    y.shapes.length &&
                    ((f = y.shapes[0].it),
                    u.scale(t.finalSize / 100, t.finalSize / 100),
                    (d = this.createPathShape(u, f)),
                    h.setAttribute("d", d)),
                  this.isMasked)
                )
                  this.innerElem.appendChild(h);
                else {
                  if ((this.innerElem.appendChild(l), y && y.shapes)) {
                    document.body.appendChild(p);
                    var v = p.getBBox();
                    p.setAttribute("width", v.width + 2),
                      p.setAttribute("height", v.height + 2),
                      p.setAttribute(
                        "viewBox",
                        v.x -
                          1 +
                          " " +
                          (v.y - 1) +
                          " " +
                          (v.width + 2) +
                          " " +
                          (v.height + 2)
                      );
                    var b = p.style,
                      _ = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                    (b.transform = _),
                      (b.webkitTransform = _),
                      (c[i].yOffset = v.y - 1);
                  } else
                    p.setAttribute("width", 1), p.setAttribute("height", 1);
                  l.appendChild(p);
                }
              } else if (
                ((h.textContent = c[i].val),
                h.setAttributeNS(
                  "http://www.w3.org/XML/1998/namespace",
                  "xml:space",
                  "preserve"
                ),
                this.isMasked)
              )
                this.innerElem.appendChild(h);
              else {
                this.innerElem.appendChild(l);
                var P = h.style,
                  E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                (P.transform = E), (P.webkitTransform = E);
              }
              this.isMasked ? (this.textSpans[m] = h) : (this.textSpans[m] = l),
                (this.textSpans[m].style.display = "block"),
                (this.textPaths[m] = h),
                (m += 1);
            }
            for (; m < this.textSpans.length; )
              (this.textSpans[m].style.display = "none"), (m += 1);
          }),
          (HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag) return;
              if (this.isMasked && this.finalTransform._matMdf) {
                this.svgElement.setAttribute(
                  "viewBox",
                  -this.finalTransform.mProp.p.v[0] +
                    " " +
                    -this.finalTransform.mProp.p.v[1] +
                    " " +
                    this.compW +
                    " " +
                    this.compH
                ),
                  (t = this.svgElement.style);
                var e =
                  "translate(" +
                  -this.finalTransform.mProp.p.v[0] +
                  "px," +
                  -this.finalTransform.mProp.p.v[1] +
                  "px)";
                (t.transform = e), (t.webkitTransform = e);
              }
            }
            if (
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var r,
                i,
                a,
                n,
                s,
                o = 0,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              for (i = l.length, r = 0; r < i; r += 1)
                l[r].n
                  ? (o += 1)
                  : ((n = this.textSpans[r]),
                    (s = this.textPaths[r]),
                    (a = h[o]),
                    (o += 1),
                    a._mdf.m &&
                      (this.isMasked
                        ? n.setAttribute("transform", a.m)
                        : ((n.style.webkitTransform = a.m),
                          (n.style.transform = a.m))),
                    (n.style.opacity = a.o),
                    a.sw && a._mdf.sw && s.setAttribute("stroke-width", a.sw),
                    a.sc && a._mdf.sc && s.setAttribute("stroke", a.sc),
                    a.fc &&
                      a._mdf.fc &&
                      (s.setAttribute("fill", a.fc), (s.style.color = a.fc)));
              if (
                this.innerElem.getBBox &&
                !this.hidden &&
                (this._isFirstFrame || this._mdf)
              ) {
                var p = this.innerElem.getBBox();
                if (
                  (this.currentBBox.w !== p.width &&
                    ((this.currentBBox.w = p.width),
                    this.svgElement.setAttribute("width", p.width)),
                  this.currentBBox.h !== p.height &&
                    ((this.currentBBox.h = p.height),
                    this.svgElement.setAttribute("height", p.height)),
                  this.currentBBox.w !== p.width + 2 ||
                    this.currentBBox.h !== p.height + 2 ||
                    this.currentBBox.x !== p.x - 1 ||
                    this.currentBBox.y !== p.y - 1)
                ) {
                  (this.currentBBox.w = p.width + 2),
                    (this.currentBBox.h = p.height + 2),
                    (this.currentBBox.x = p.x - 1),
                    (this.currentBBox.y = p.y - 1),
                    this.svgElement.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h
                    ),
                    (t = this.svgElement.style);
                  var c =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                  (t.transform = c), (t.webkitTransform = c);
                }
              }
            }
          }),
          extendPrototype(
            [BaseElement, FrameElement, HierarchyElement],
            HCameraElement
          ),
          (HCameraElement.prototype.setup = function () {
            var t,
              e,
              r,
              i,
              a = this.comp.threeDElements.length;
            for (t = 0; t < a; t += 1)
              if ("3d" === (e = this.comp.threeDElements[t]).type) {
                (r = e.perspectiveElem.style), (i = e.container.style);
                var n = this.pe.v + "px",
                  s = "0px 0px 0px",
                  o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (r.perspective = n),
                  (r.webkitPerspective = n),
                  (i.transformOrigin = s),
                  (i.mozTransformOrigin = s),
                  (i.webkitTransformOrigin = s),
                  (r.transform = o),
                  (r.webkitTransform = o);
              }
          }),
          (HCameraElement.prototype.createElements = function () {}),
          (HCameraElement.prototype.hide = function () {}),
          (HCameraElement.prototype.renderFrame = function () {
            var t,
              e,
              r = this._isFirstFrame;
            if (this.hierarchy)
              for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (
              r ||
              this.pe._mdf ||
              (this.p && this.p._mdf) ||
              (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
              this.rx._mdf ||
              this.ry._mdf ||
              this.rz._mdf ||
              this.or._mdf ||
              (this.a && this.a._mdf)
            ) {
              if ((this.mat.reset(), this.hierarchy))
                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                  var i = this.hierarchy[t].finalTransform.mProp;
                  this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                    this.mat
                      .rotateX(-i.or.v[0])
                      .rotateY(-i.or.v[1])
                      .rotateZ(i.or.v[2]),
                    this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                    this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                    this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }
              if (
                (this.p
                  ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                  : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a)
              ) {
                var a;
                a = this.p
                  ? [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ]
                  : [
                      this.px.v - this.a.v[0],
                      this.py.v - this.a.v[1],
                      this.pz.v - this.a.v[2],
                    ];
                var n = Math.sqrt(
                    Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)
                  ),
                  s = [a[0] / n, a[1] / n, a[2] / n],
                  o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                  h = Math.atan2(s[1], o),
                  l = Math.atan2(s[0], -s[2]);
                this.mat.rotateY(l).rotateX(-h);
              }
              this.mat
                .rotateX(-this.rx.v)
                .rotateY(-this.ry.v)
                .rotateZ(this.rz.v),
                this.mat
                  .rotateX(-this.or.v[0])
                  .rotateY(-this.or.v[1])
                  .rotateZ(this.or.v[2]),
                this.mat.translate(
                  this.globalData.compSize.w / 2,
                  this.globalData.compSize.h / 2,
                  0
                ),
                this.mat.translate(0, 0, this.pe.v);
              var p = !this._prevMat.equals(this.mat);
              if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var c, f, u;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                  if ("3d" === (c = this.comp.threeDElements[t]).type) {
                    if (p) {
                      var d = this.mat.toCSS();
                      ((u = c.container.style).transform = d),
                        (u.webkitTransform = d);
                    }
                    this.pe._mdf &&
                      (((f = c.perspectiveElem.style).perspective =
                        this.pe.v + "px"),
                      (f.webkitPerspective = this.pe.v + "px"));
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = !1;
          }),
          (HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (HCameraElement.prototype.destroy = function () {}),
          (HCameraElement.prototype.getBaseElement = function () {
            return null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HSolidElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HImageElement
          ),
          (HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
              e = new Image();
            this.data.hasMask
              ? ((this.imageElem = createNS("image")),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t
                ),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h))
              : this.layerElement.appendChild(e),
              (e.crossOrigin = "anonymous"),
              (e.src = t),
              this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
          }),
          extendPrototype([BaseRenderer], HybridRendererBase),
          (HybridRendererBase.prototype.buildItem =
            SVGRenderer.prototype.buildItem),
          (HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; )
              this.pendingElements.pop().checkParenting();
          }),
          (HybridRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              var i = this.layers[e];
              if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
              else if (this.threeDElements) this.addTo3dContainer(r, e);
              else {
                for (var a, n, s = 0; s < e; )
                  this.elements[s] &&
                    !0 !== this.elements[s] &&
                    this.elements[s].getBaseElement &&
                    ((n = this.elements[s]),
                    (a =
                      (this.layers[s].ddd
                        ? this.getThreeDContainerByPos(s)
                        : n.getBaseElement()) || a)),
                    (s += 1);
                a
                  ? (i.ddd && this.supports3d) ||
                    this.layerElement.insertBefore(r, a)
                  : (i.ddd && this.supports3d) ||
                    this.layerElement.appendChild(r);
              }
            }
          }),
          (HybridRendererBase.prototype.createShape = function (t) {
            return this.supports3d
              ? new HShapeElement(t, this.globalData, this)
              : new SVGShapeElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createText = function (t) {
            return this.supports3d
              ? new HTextElement(t, this.globalData, this)
              : new SVGTextLottieElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createCamera = function (t) {
            return (
              (this.camera = new HCameraElement(t, this.globalData, this)),
              this.camera
            );
          }),
          (HybridRendererBase.prototype.createImage = function (t) {
            return this.supports3d
              ? new HImageElement(t, this.globalData, this)
              : new IImageElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createSolid = function (t) {
            return this.supports3d
              ? new HSolidElement(t, this.globalData, this)
              : new ISolidElement(t, this.globalData, this);
          }),
          (HybridRendererBase.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
              if (
                this.threeDElements[e].startPos <= t &&
                this.threeDElements[e].endPos >= t
              )
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          }),
          (HybridRendererBase.prototype.createThreeDContainer = function (
            t,
            e
          ) {
            var r,
              i,
              a = createTag("div");
            styleDiv(a);
            var n = createTag("div");
            if ((styleDiv(n), "3d" === e)) {
              ((r = a.style).width = this.globalData.compSize.w + "px"),
                (r.height = this.globalData.compSize.h + "px");
              var s = "50% 50%";
              (r.webkitTransformOrigin = s),
                (r.mozTransformOrigin = s),
                (r.transformOrigin = s);
              var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              ((i = n.style).transform = o), (i.webkitTransform = o);
            }
            a.appendChild(n);
            var h = {
              container: n,
              perspectiveElem: a,
              startPos: t,
              endPos: t,
              type: e,
            };
            return this.threeDElements.push(h), h;
          }),
          (HybridRendererBase.prototype.build3dContainers = function () {
            var t,
              e,
              r = this.layers.length,
              i = "";
            for (t = 0; t < r; t += 1)
              this.layers[t].ddd && 3 !== this.layers[t].ty
                ? ("3d" !== i &&
                    ((i = "3d"), (e = this.createThreeDContainer(t, "3d"))),
                  (e.endPos = Math.max(e.endPos, t)))
                : ("2d" !== i &&
                    ((i = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                  (e.endPos = Math.max(e.endPos, t)));
            for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
              this.resizerElem.appendChild(
                this.threeDElements[t].perspectiveElem
              );
          }),
          (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i; ) {
              if (e <= this.threeDElements[r].endPos) {
                for (var a, n = this.threeDElements[r].startPos; n < e; )
                  this.elements[n] &&
                    this.elements[n].getBaseElement &&
                    (a = this.elements[n].getBaseElement()),
                    (n += 1);
                a
                  ? this.threeDElements[r].container.insertBefore(t, a)
                  : this.threeDElements[r].container.appendChild(t);
                break;
              }
              r += 1;
            }
          }),
          (HybridRendererBase.prototype.configAnimation = function (t) {
            var e = createTag("div"),
              r = this.animationItem.wrapper,
              i = e.style;
            (i.width = t.w + "px"),
              (i.height = t.h + "px"),
              (this.resizerElem = e),
              styleDiv(e),
              (i.transformStyle = "flat"),
              (i.mozTransformStyle = "flat"),
              (i.webkitTransformStyle = "flat"),
              this.renderConfig.className &&
                e.setAttribute("class", this.renderConfig.className),
              r.appendChild(e),
              (i.overflow = "hidden");
            var a = createNS("svg");
            a.setAttribute("width", "1"),
              a.setAttribute("height", "1"),
              styleDiv(a),
              this.resizerElem.appendChild(a);
            var n = createNS("defs");
            a.appendChild(n),
              (this.data = t),
              this.setupGlobalData(t, a),
              (this.globalData.defs = n),
              (this.layers = t.layers),
              (this.layerElement = this.resizerElem),
              this.build3dContainers(),
              this.updateContainerSize();
          }),
          (HybridRendererBase.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.animationItem.container = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            (this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null);
          }),
          (HybridRendererBase.prototype.updateContainerSize = function () {
            var t,
              e,
              r,
              i,
              a = this.animationItem.wrapper.offsetWidth,
              n = this.animationItem.wrapper.offsetHeight,
              s = a / n;
            this.globalData.compSize.w / this.globalData.compSize.h > s
              ? ((t = a / this.globalData.compSize.w),
                (e = a / this.globalData.compSize.w),
                (r = 0),
                (i =
                  (n -
                    this.globalData.compSize.h *
                      (a / this.globalData.compSize.w)) /
                  2))
              : ((t = n / this.globalData.compSize.h),
                (e = n / this.globalData.compSize.h),
                (r =
                  (a -
                    this.globalData.compSize.w *
                      (n / this.globalData.compSize.h)) /
                  2),
                (i = 0));
            var o = this.resizerElem.style;
            (o.webkitTransform =
              "matrix3d(" +
              t +
              ",0,0,0,0," +
              e +
              ",0,0,0,0,1,0," +
              r +
              "," +
              i +
              ",0,1)"),
              (o.transform = o.webkitTransform);
          }),
          (HybridRendererBase.prototype.renderFrame =
            SVGRenderer.prototype.renderFrame),
          (HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none";
          }),
          (HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block";
          }),
          (HybridRendererBase.prototype.initItems = function () {
            if ((this.buildAllItems(), this.camera)) this.camera.setup();
            else {
              var t,
                e = this.globalData.compSize.w,
                r = this.globalData.compSize.h,
                i = this.threeDElements.length;
              for (t = 0; t < i; t += 1) {
                var a = this.threeDElements[t].perspectiveElem.style;
                (a.webkitPerspective =
                  Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"),
                  (a.perspective = a.webkitPerspective);
              }
            }
          }),
          (HybridRendererBase.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length,
              i = createTag("div");
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var a = this.createComp(t[e], i, this.globalData.comp, null);
                a.initExpressions(),
                  this.globalData.projectInterface.registerComposition(a);
              }
          }),
          extendPrototype(
            [HybridRendererBase, ICompElement, HBaseElement],
            HCompElement
          ),
          (HCompElement.prototype._createBaseContainerElements =
            HCompElement.prototype.createContainerElements),
          (HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(),
              this.data.hasMask
                ? (this.svgElement.setAttribute("width", this.data.w),
                  this.svgElement.setAttribute("height", this.data.h),
                  (this.transformedElement = this.baseElement))
                : (this.transformedElement = this.layerElement);
          }),
          (HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r, i = 0; i < e; )
              this.elements[i] &&
                this.elements[i].getBaseElement &&
                (r = this.elements[i].getBaseElement()),
                (i += 1);
            r
              ? this.layerElement.insertBefore(t, r)
              : this.layerElement.appendChild(t);
          }),
          (HCompElement.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          }),
          extendPrototype([HybridRendererBase], HybridRenderer),
          (HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          });
        var CompExpressionInterface = function (t) {
            function e(e) {
              for (var r = 0, i = t.layers.length; r < i; ) {
                if (t.layers[r].nm === e || t.layers[r].ind === e)
                  return t.elements[r].layerInterface;
                r += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(e, "_name", { value: t.data.nm }),
              (e.layer = e),
              (e.pixelAspect = 1),
              (e.height = t.data.h || t.globalData.compSize.h),
              (e.width = t.data.w || t.globalData.compSize.w),
              (e.pixelAspect = 1),
              (e.frameDuration = 1 / t.globalData.frameRate),
              (e.displayStartTime = 0),
              (e.numLayers = t.layers.length),
              e
            );
          },
          Expressions = (function () {
            var t = {
              initExpressions: function (t) {
                var e = 0,
                  r = [];
                (t.renderer.compInterface = CompExpressionInterface(
                  t.renderer
                )),
                  t.renderer.globalData.projectInterface.registerComposition(
                    t.renderer
                  ),
                  (t.renderer.globalData.pushExpression = function () {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function () {
                    0 == (e -= 1) &&
                      (function () {
                        var t,
                          e = r.length;
                        for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function (
                    t
                  ) {
                    -1 === r.indexOf(t) && r.push(t);
                  });
              },
            };
            return t;
          })(),
          MaskManagerInterface = (function () {
            function t(t, e) {
              (this._mask = t), (this._data = e);
            }
            return (
              Object.defineProperty(t.prototype, "maskPath", {
                get: function () {
                  return (
                    this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                  );
                },
              }),
              Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                  return (
                    this._mask.op.k && this._mask.op.getValue(),
                    100 * this._mask.op.v
                  );
                },
              }),
              function (e) {
                var r,
                  i = createSizedArray(e.viewData.length),
                  a = e.viewData.length;
                for (r = 0; r < a; r += 1)
                  i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function (t) {
                  for (r = 0; r < a; ) {
                    if (e.masksProperties[r].nm === t) return i[r];
                    r += 1;
                  }
                  return null;
                };
              }
            );
          })(),
          ExpressionPropertyInterface = (function () {
            var t = { pv: 0, v: 0, mult: 1 },
              e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function () {
                  return e.getVelocityAtTime(e.comp.currentFrame);
                },
              }),
                (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                (t.key = function (i) {
                  if (!t.numKeys) return 0;
                  var a = "";
                  a =
                    "s" in e.keyframes[i - 1]
                      ? e.keyframes[i - 1].s
                      : "e" in e.keyframes[i - 2]
                      ? e.keyframes[i - 2].e
                      : e.keyframes[i - 2].s;
                  var n =
                    "unidimensional" === r
                      ? new Number(a)
                      : Object.assign({}, a);
                  return (
                    (n.time =
                      e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate),
                    (n.value = "unidimensional" === r ? a[0] : a),
                    n
                  );
                }),
                (t.valueAtTime = e.getValueAtTime),
                (t.speedAtTime = e.getSpeedAtTime),
                (t.velocityAtTime = e.getVelocityAtTime),
                (t.propertyGroup = e.propertyGroup);
            }
            function i() {
              return t;
            }
            return function (a) {
              return a
                ? "unidimensional" === a.propType
                  ? (function (e) {
                      (e && "pv" in e) || (e = t);
                      var i = 1 / e.mult,
                        a = e.pv * i,
                        n = new Number(a);
                      return (
                        (n.value = a),
                        r(n, e, "unidimensional"),
                        function () {
                          return (
                            e.k && e.getValue(),
                            (a = e.v * i),
                            n.value !== a &&
                              (((n = new Number(a)).value = a),
                              r(n, e, "unidimensional")),
                            n
                          );
                        }
                      );
                    })(a)
                  : (function (t) {
                      (t && "pv" in t) || (t = e);
                      var i = 1 / t.mult,
                        a = (t.data && t.data.l) || t.pv.length,
                        n = createTypedArray("float32", a),
                        s = createTypedArray("float32", a);
                      return (
                        (n.value = s),
                        r(n, t, "multidimensional"),
                        function () {
                          t.k && t.getValue();
                          for (var e = 0; e < a; e += 1)
                            (s[e] = t.v[e] * i), (n[e] = s[e]);
                          return n;
                        }
                      );
                    })(a)
                : i;
            };
          })(),
          TransformExpressionInterface = function (t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            var r, i, a, n;
            return (
              Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t.r || t.rz),
              }),
              Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r),
              }),
              Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx),
              }),
              Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry),
              }),
              Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s),
              }),
              t.p
                ? (n = ExpressionPropertyInterface(t.p))
                : ((r = ExpressionPropertyInterface(t.px)),
                  (i = ExpressionPropertyInterface(t.py)),
                  t.pz && (a = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, "position", {
                get: function () {
                  return t.p ? n() : [r(), i(), a ? a() : 0];
                },
              }),
              Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px),
              }),
              Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py),
              }),
              Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz),
              }),
              Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a),
              }),
              Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o),
              }),
              Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk),
              }),
              Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa),
              }),
              Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or),
              }),
              e
            );
          },
          LayerExpressionInterface = (function () {
            function t(t) {
              var e = new Matrix();
              return (
                void 0 !== t
                  ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                  : this._elem.finalTransform.mProp.applyToMatrix(e),
                e
              );
            }
            function e(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.applyPoint(r, t)
              );
            }
            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t);
            }
            function i(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.invertPoint(r, t)
              );
            }
            function a(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t);
            }
            function n(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.inversePoint(e);
            }
            function o(t) {
              var e = new Matrix();
              if (
                (e.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(e),
                this._elem.hierarchy && this._elem.hierarchy.length)
              ) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
              }
              return e.inversePoint(t);
            }
            function h() {
              return [1, 1, 1, 1];
            }
            return function (l) {
              var p;
              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null;
                }
              }
              (c.getMatrix = t),
                (c.invertPoint = s),
                (c.applyPoint = n),
                (c.toWorld = r),
                (c.toWorldVec = e),
                (c.fromWorld = a),
                (c.fromWorldVec = i),
                (c.toComp = r),
                (c.fromComp = o),
                (c.sampleImage = h),
                (c.sourceRectAtTime = l.sourceRectAtTime.bind(l)),
                (c._elem = l);
              var f = getDescriptor(
                (p = TransformExpressionInterface(l.finalTransform.mProp)),
                "anchorPoint"
              );
              return (
                Object.defineProperties(c, {
                  hasParent: {
                    get: function () {
                      return l.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return l.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(p, "rotation"),
                  scale: getDescriptor(p, "scale"),
                  position: getDescriptor(p, "position"),
                  opacity: getDescriptor(p, "opacity"),
                  anchorPoint: f,
                  anchor_point: f,
                  transform: {
                    get: function () {
                      return p;
                    },
                  },
                  active: {
                    get: function () {
                      return l.isInRange;
                    },
                  },
                }),
                (c.startTime = l.data.st),
                (c.index = l.data.ind),
                (c.source = l.data.refId),
                (c.height = 0 === l.data.ty ? l.data.h : 100),
                (c.width = 0 === l.data.ty ? l.data.w : 100),
                (c.inPoint = l.data.ip / l.comp.globalData.frameRate),
                (c.outPoint = l.data.op / l.comp.globalData.frameRate),
                (c._name = l.data.nm),
                (c.registerMaskInterface = function (t) {
                  c.mask = new MaskManagerInterface(t, l);
                }),
                (c.registerEffectsInterface = function (t) {
                  c.effect = t;
                }),
                c
              );
            };
          })(),
          propertyGroupFactory = function (t, e) {
            return function (r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
            };
          },
          PropertyInterface = function (t, e) {
            var r = { _name: t };
            return function (t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
            };
          },
          EffectsExpressionInterface = (function () {
            var t = {
              createEffectsInterface: function (t, r) {
                if (t.effectsManager) {
                  var i,
                    a = [],
                    n = t.data.ef,
                    s = t.effectsManager.effectElements.length;
                  for (i = 0; i < s; i += 1)
                    a.push(e(n[i], t.effectsManager.effectElements[i], r, t));
                  var o = t.data.ef || [],
                    h = function (t) {
                      for (i = 0, s = o.length; i < s; ) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix)
                          return a[i];
                        i += 1;
                      }
                      return null;
                    };
                  return (
                    Object.defineProperty(h, "numProperties", {
                      get: function () {
                        return o.length;
                      },
                    }),
                    h
                  );
                }
                return null;
              },
            };
            function e(t, i, a, n) {
              function s(e) {
                for (var r = t.ef, i = 0, a = r.length; i < a; ) {
                  if (e === r[i].nm || e === r[i].mn || e === r[i].ix)
                    return 5 === r[i].ty ? l[i] : l[i]();
                  i += 1;
                }
                throw new Error();
              }
              var o,
                h = propertyGroupFactory(s, a),
                l = [],
                p = t.ef.length;
              for (o = 0; o < p; o += 1)
                5 === t.ef[o].ty
                  ? l.push(
                      e(
                        t.ef[o],
                        i.effectElements[o],
                        i.effectElements[o].propertyGroup,
                        n
                      )
                    )
                  : l.push(r(i.effectElements[o], t.ef[o].ty, n, h));
              return (
                "ADBE Color Control" === t.mn &&
                  Object.defineProperty(s, "color", {
                    get: function () {
                      return l[0]();
                    },
                  }),
                Object.defineProperties(s, {
                  numProperties: {
                    get: function () {
                      return t.np;
                    },
                  },
                  _name: { value: t.nm },
                  propertyGroup: { value: h },
                }),
                (s.enabled = 0 !== t.en),
                (s.active = s.enabled),
                s
              );
            }
            function r(t, e, r, i) {
              var a = ExpressionPropertyInterface(t.p);
              return (
                t.p.setGroupProperty &&
                  t.p.setGroupProperty(PropertyInterface("", i)),
                function () {
                  return 10 === e ? r.comp.compInterface(t.p.v) : a();
                }
              );
            }
            return t;
          })(),
          ShapePathInterface = function (t, e, r) {
            var i = e.sh;
            function a(t) {
              return "Shape" === t ||
                "shape" === t ||
                "Path" === t ||
                "path" === t ||
                "ADBE Vector Shape" === t ||
                2 === t
                ? a.path
                : null;
            }
            var n = propertyGroupFactory(a, r);
            return (
              i.setGroupProperty(PropertyInterface("Path", n)),
              Object.defineProperties(a, {
                path: {
                  get: function () {
                    return i.k && i.getValue(), i;
                  },
                },
                shape: {
                  get: function () {
                    return i.k && i.getValue(), i;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: r },
              }),
              a
            );
          },
          ShapeExpressionInterface = (function () {
            function t(t, s, f) {
              var u,
                d = [],
                m = t ? t.length : 0;
              for (u = 0; u < m; u += 1)
                "gr" === t[u].ty
                  ? d.push(e(t[u], s[u], f))
                  : "fl" === t[u].ty
                  ? d.push(r(t[u], s[u], f))
                  : "st" === t[u].ty
                  ? d.push(a(t[u], s[u], f))
                  : "tm" === t[u].ty
                  ? d.push(n(t[u], s[u], f))
                  : "tr" === t[u].ty ||
                    ("el" === t[u].ty
                      ? d.push(o(t[u], s[u], f))
                      : "sr" === t[u].ty
                      ? d.push(h(t[u], s[u], f))
                      : "sh" === t[u].ty
                      ? d.push(ShapePathInterface(t[u], s[u], f))
                      : "rc" === t[u].ty
                      ? d.push(l(t[u], s[u], f))
                      : "rd" === t[u].ty
                      ? d.push(p(t[u], s[u], f))
                      : "rp" === t[u].ty
                      ? d.push(c(t[u], s[u], f))
                      : "gf" === t[u].ty
                      ? d.push(i(t[u], s[u], f))
                      : d.push(
                          (t[u],
                          s[u],
                          function () {
                            return null;
                          })
                        ));
              return d;
            }
            function e(e, r, i) {
              var a = function (t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return a.content;
                  default:
                    return a.transform;
                }
              };
              a.propertyGroup = propertyGroupFactory(a, i);
              var n = (function (e, r, i) {
                  var a,
                    n = function (t) {
                      for (var e = 0, r = a.length; e < r; ) {
                        if (
                          a[e]._name === t ||
                          a[e].mn === t ||
                          a[e].propertyIndex === t ||
                          a[e].ix === t ||
                          a[e].ind === t
                        )
                          return a[e];
                        e += 1;
                      }
                      return "number" == typeof t ? a[t - 1] : null;
                    };
                  (n.propertyGroup = propertyGroupFactory(n, i)),
                    (a = t(e.it, r.it, n.propertyGroup)),
                    (n.numProperties = a.length);
                  var o = s(
                    e.it[e.it.length - 1],
                    r.it[r.it.length - 1],
                    n.propertyGroup
                  );
                  return (
                    (n.transform = o),
                    (n.propertyIndex = e.cix),
                    (n._name = e.nm),
                    n
                  );
                })(e, r, a.propertyGroup),
                o = s(
                  e.it[e.it.length - 1],
                  r.it[r.it.length - 1],
                  a.propertyGroup
                );
              return (
                (a.content = n),
                (a.transform = o),
                Object.defineProperty(a, "_name", {
                  get: function () {
                    return e.nm;
                  },
                }),
                (a.numProperties = e.np),
                (a.propertyIndex = e.ix),
                (a.nm = e.nm),
                (a.mn = e.mn),
                a
              );
            }
            function r(t, e, r) {
              function i(t) {
                return "Color" === t || "color" === t
                  ? i.color
                  : "Opacity" === t || "opacity" === t
                  ? i.opacity
                  : null;
              }
              return (
                Object.defineProperties(i, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function i(t, e, r) {
              function i(t) {
                return "Start Point" === t || "start point" === t
                  ? i.startPoint
                  : "End Point" === t || "end point" === t
                  ? i.endPoint
                  : "Opacity" === t || "opacity" === t
                  ? i.opacity
                  : null;
              }
              return (
                Object.defineProperties(i, {
                  startPoint: { get: ExpressionPropertyInterface(e.s) },
                  endPoint: { get: ExpressionPropertyInterface(e.e) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  type: {
                    get: function () {
                      return "a";
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.s.setGroupProperty(PropertyInterface("Start Point", r)),
                e.e.setGroupProperty(PropertyInterface("End Point", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function a(t, e, r) {
              var i,
                a = propertyGroupFactory(l, r),
                n = propertyGroupFactory(h, a);
              function s(r) {
                Object.defineProperty(h, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p),
                });
              }
              var o = t.d ? t.d.length : 0,
                h = {};
              for (i = 0; i < o; i += 1)
                s(i), e.d.dataProps[i].p.setGroupProperty(n);
              function l(t) {
                return "Color" === t || "color" === t
                  ? l.color
                  : "Opacity" === t || "opacity" === t
                  ? l.opacity
                  : "Stroke Width" === t || "stroke width" === t
                  ? l.strokeWidth
                  : null;
              }
              return (
                Object.defineProperties(l, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                  dash: {
                    get: function () {
                      return h;
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", a)),
                e.o.setGroupProperty(PropertyInterface("Opacity", a)),
                e.w.setGroupProperty(PropertyInterface("Stroke Width", a)),
                l
              );
            }
            function n(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e
                  ? i.end
                  : e === t.s.ix
                  ? i.start
                  : e === t.o.ix
                  ? i.offset
                  : null;
              }
              var a = propertyGroupFactory(i, r);
              return (
                (i.propertyIndex = t.ix),
                e.s.setGroupProperty(PropertyInterface("Start", a)),
                e.e.setGroupProperty(PropertyInterface("End", a)),
                e.o.setGroupProperty(PropertyInterface("Offset", a)),
                (i.propertyIndex = t.ix),
                (i.propertyGroup = r),
                Object.defineProperties(i, {
                  start: { get: ExpressionPropertyInterface(e.s) },
                  end: { get: ExpressionPropertyInterface(e.e) },
                  offset: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function s(t, e, r) {
              function i(e) {
                return t.a.ix === e || "Anchor Point" === e
                  ? i.anchorPoint
                  : t.o.ix === e || "Opacity" === e
                  ? i.opacity
                  : t.p.ix === e || "Position" === e
                  ? i.position
                  : t.r.ix === e ||
                    "Rotation" === e ||
                    "ADBE Vector Rotation" === e
                  ? i.rotation
                  : t.s.ix === e || "Scale" === e
                  ? i.scale
                  : (t.sk && t.sk.ix === e) || "Skew" === e
                  ? i.skew
                  : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                  ? i.skewAxis
                  : null;
              }
              var a = propertyGroupFactory(i, r);
              return (
                e.transform.mProps.o.setGroupProperty(
                  PropertyInterface("Opacity", a)
                ),
                e.transform.mProps.p.setGroupProperty(
                  PropertyInterface("Position", a)
                ),
                e.transform.mProps.a.setGroupProperty(
                  PropertyInterface("Anchor Point", a)
                ),
                e.transform.mProps.s.setGroupProperty(
                  PropertyInterface("Scale", a)
                ),
                e.transform.mProps.r.setGroupProperty(
                  PropertyInterface("Rotation", a)
                ),
                e.transform.mProps.sk &&
                  (e.transform.mProps.sk.setGroupProperty(
                    PropertyInterface("Skew", a)
                  ),
                  e.transform.mProps.sa.setGroupProperty(
                    PropertyInterface("Skew Angle", a)
                  )),
                e.transform.op.setGroupProperty(
                  PropertyInterface("Opacity", a)
                ),
                Object.defineProperties(i, {
                  opacity: {
                    get: ExpressionPropertyInterface(e.transform.mProps.o),
                  },
                  position: {
                    get: ExpressionPropertyInterface(e.transform.mProps.p),
                  },
                  anchorPoint: {
                    get: ExpressionPropertyInterface(e.transform.mProps.a),
                  },
                  scale: {
                    get: ExpressionPropertyInterface(e.transform.mProps.s),
                  },
                  rotation: {
                    get: ExpressionPropertyInterface(e.transform.mProps.r),
                  },
                  skew: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sk),
                  },
                  skewAxis: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sa),
                  },
                  _name: { value: t.nm },
                }),
                (i.ty = "tr"),
                (i.mn = t.mn),
                (i.propertyGroup = r),
                i
              );
            }
            function o(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
              }
              var a = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                n.s.setGroupProperty(PropertyInterface("Size", a)),
                n.p.setGroupProperty(PropertyInterface("Position", a)),
                Object.defineProperties(i, {
                  size: { get: ExpressionPropertyInterface(n.s) },
                  position: { get: ExpressionPropertyInterface(n.p) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                  ? i.rotation
                  : t.pt.ix === e
                  ? i.points
                  : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                  ? i.outerRadius
                  : t.os.ix === e
                  ? i.outerRoundness
                  : !t.ir ||
                    (t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e)
                  ? t.is && t.is.ix === e
                    ? i.innerRoundness
                    : null
                  : i.innerRadius;
              }
              var a = propertyGroupFactory(i, r),
                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                n.or.setGroupProperty(PropertyInterface("Outer Radius", a)),
                n.os.setGroupProperty(PropertyInterface("Outer Roundness", a)),
                n.pt.setGroupProperty(PropertyInterface("Points", a)),
                n.p.setGroupProperty(PropertyInterface("Position", a)),
                n.r.setGroupProperty(PropertyInterface("Rotation", a)),
                t.ir &&
                  (n.ir.setGroupProperty(PropertyInterface("Inner Radius", a)),
                  n.is.setGroupProperty(
                    PropertyInterface("Inner Roundness", a)
                  )),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(n.p) },
                  rotation: { get: ExpressionPropertyInterface(n.r) },
                  points: { get: ExpressionPropertyInterface(n.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(n.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(n.os) },
                  innerRadius: { get: ExpressionPropertyInterface(n.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(n.is) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                  ? i.roundness
                  : t.s.ix === e ||
                    "Size" === e ||
                    "ADBE Vector Rect Size" === e
                  ? i.size
                  : null;
              }
              var a = propertyGroupFactory(i, r),
                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                n.p.setGroupProperty(PropertyInterface("Position", a)),
                n.s.setGroupProperty(PropertyInterface("Size", a)),
                n.r.setGroupProperty(PropertyInterface("Rotation", a)),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(n.p) },
                  roundness: { get: ExpressionPropertyInterface(n.r) },
                  size: { get: ExpressionPropertyInterface(n.s) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function p(t, e, r) {
              function i(e) {
                return t.r.ix === e || "Round Corners 1" === e
                  ? i.radius
                  : null;
              }
              var a = propertyGroupFactory(i, r),
                n = e;
              return (
                (i.propertyIndex = t.ix),
                n.rd.setGroupProperty(PropertyInterface("Radius", a)),
                Object.defineProperties(i, {
                  radius: { get: ExpressionPropertyInterface(n.rd) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function c(t, e, r) {
              function i(e) {
                return t.c.ix === e || "Copies" === e
                  ? i.copies
                  : t.o.ix === e || "Offset" === e
                  ? i.offset
                  : null;
              }
              var a = propertyGroupFactory(i, r),
                n = e;
              return (
                (i.propertyIndex = t.ix),
                n.c.setGroupProperty(PropertyInterface("Copies", a)),
                n.o.setGroupProperty(PropertyInterface("Offset", a)),
                Object.defineProperties(i, {
                  copies: { get: ExpressionPropertyInterface(n.c) },
                  offset: { get: ExpressionPropertyInterface(n.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            return function (e, r, i) {
              var a;
              function n(t) {
                if ("number" == typeof t)
                  return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
                for (var e = 0, r = a.length; e < r; ) {
                  if (a[e]._name === t) return a[e];
                  e += 1;
                }
                return null;
              }
              return (
                (n.propertyGroup = propertyGroupFactory(n, function () {
                  return i;
                })),
                (a = t(e, r, n.propertyGroup)),
                (n.numProperties = a.length),
                (n._name = "Contents"),
                n
              );
            };
          })(),
          TextExpressionInterface = function (t) {
            var e, r;
            function i(t) {
              return "ADBE Text Document" === t ? i.sourceText : null;
            }
            return (
              Object.defineProperty(i, "sourceText", {
                get: function () {
                  t.textProperty.getValue();
                  var i = t.textProperty.currentData.t;
                  return (
                    i !== e &&
                      ((t.textProperty.currentData.t = e),
                      ((r = new String(i)).value = i || new String(i))),
                    r
                  );
                },
              }),
              i
            );
          };
        function _typeof$2(t) {
          return (
            (_typeof$2 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$2(t)
          );
        }
        var FootageInterface =
            ((dataInterfaceFactory = function (t) {
              function e(t) {
                return "Outline" === t ? e.outlineInterface() : null;
              }
              return (
                (e._name = "Outline"),
                (e.outlineInterface = (function (t) {
                  var e = "",
                    r = t.getFootageData();
                  function i(t) {
                    if (r[t])
                      return (
                        (e = t), "object" === _typeof$2((r = r[t])) ? i : r
                      );
                    var a = t.indexOf(e);
                    if (-1 !== a) {
                      var n = parseInt(t.substr(a + e.length), 10);
                      return "object" === _typeof$2((r = r[n])) ? i : r;
                    }
                    return "";
                  }
                  return function () {
                    return (e = ""), (r = t.getFootageData()), i;
                  };
                })(t)),
                e
              );
            }),
            function (t) {
              function e(t) {
                return "Data" === t ? e.dataInterface : null;
              }
              return (
                (e._name = "Data"),
                (e.dataInterface = dataInterfaceFactory(t)),
                e
              );
            }),
          dataInterfaceFactory,
          interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface,
          };
        function getInterface(t) {
          return interfaces[t] || null;
        }
        function _typeof$1(t) {
          return (
            (_typeof$1 =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof$1(t)
          );
        }
        function seedRandom(t, e) {
          var r = this,
            i = 256,
            a = e.pow(i, 6),
            n = e.pow(2, 52),
            s = 2 * n,
            o = 255;
          function h(t) {
            var e,
              r = t.length,
              a = this,
              n = 0,
              s = (a.i = a.j = 0),
              h = (a.S = []);
            for (r || (t = [r++]); n < i; ) h[n] = n++;
            for (n = 0; n < i; n++)
              (h[n] = h[(s = o & (s + t[n % r] + (e = h[n])))]), (h[s] = e);
            a.g = function (t) {
              for (var e, r = 0, n = a.i, s = a.j, h = a.S; t--; )
                (e = h[(n = o & (n + 1))]),
                  (r =
                    r * i +
                    h[o & ((h[n] = h[(s = o & (s + e))]) + (h[s] = e))]);
              return (a.i = n), (a.j = s), r;
            };
          }
          function l(t, e) {
            return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
          }
          function p(t, e) {
            var r,
              i = [],
              a = _typeof$1(t);
            if (e && "object" == a)
              for (r in t)
                try {
                  i.push(p(t[r], e - 1));
                } catch (t) {}
            return i.length ? i : "string" == a ? t : t + "\0";
          }
          function c(t, e) {
            for (var r, i = t + "", a = 0; a < i.length; )
              e[o & a] = o & ((r ^= 19 * e[o & a]) + i.charCodeAt(a++));
            return f(e);
          }
          function f(t) {
            return String.fromCharCode.apply(0, t);
          }
          (e.seedrandom = function (o, u, d) {
            var m = [],
              y = c(
                p(
                  (u = !0 === u ? { entropy: !0 } : u || {}).entropy
                    ? [o, f(t)]
                    : null === o
                    ? (function () {
                        try {
                          var e = new Uint8Array(i);
                          return (
                            (r.crypto || r.msCrypto).getRandomValues(e), f(e)
                          );
                        } catch (e) {
                          var a = r.navigator,
                            n = a && a.plugins;
                          return [+new Date(), r, n, r.screen, f(t)];
                        }
                      })()
                    : o,
                  3
                ),
                m
              ),
              g = new h(m),
              v = function () {
                for (var t = g.g(6), e = a, r = 0; t < n; )
                  (t = (t + r) * i), (e *= i), (r = g.g(1));
                for (; t >= s; ) (t /= 2), (e /= 2), (r >>>= 1);
                return (t + r) / e;
              };
            return (
              (v.int32 = function () {
                return 0 | g.g(4);
              }),
              (v.quick = function () {
                return g.g(4) / 4294967296;
              }),
              (v.double = v),
              c(f(g.S), t),
              (
                u.pass ||
                d ||
                function (t, r, i, a) {
                  return (
                    a &&
                      (a.S && l(a, g),
                      (t.state = function () {
                        return l(g, {});
                      })),
                    i ? ((e.random = t), r) : t
                  );
                }
              )(v, y, "global" in u ? u.global : this == e, u.state)
            );
          }),
            c(e.random(), t);
        }
        function initialize$2(t) {
          seedRandom([], t);
        }
        var propTypes = { SHAPE: "shape" };
        function _typeof(t) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            _typeof(t)
          );
        }
        var ExpressionManager = (function () {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null;
            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
              return (
                "number" === t ||
                "boolean" === t ||
                "string" === t ||
                e instanceof Number
              );
            }
            function $bm_neg(t) {
              var e = _typeof(t);
              if ("number" === e || "boolean" === e || t instanceof Number)
                return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r,
                  i = t.length,
                  a = [];
                for (r = 0; r < i; r += 1) a[r] = -t[r];
                return a;
              }
              return t.propType ? t.v : -t;
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(
                0.333,
                0,
                0.833,
                0.833,
                "easeIn"
              ).get,
              easeOutBez = BezierFactory.getBezierEasing(
                0.167,
                0.167,
                0.667,
                1,
                "easeOut"
              ).get,
              easeInOutBez = BezierFactory.getBezierEasing(
                0.33,
                0,
                0.667,
                1,
                "easeInOut"
              ).get;
            function sum(t, e) {
              var r = _typeof(t),
                i = _typeof(e);
              if ("string" === r || "string" === i) return t + e;
              if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return ((t = t.slice(0))[0] += e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t + e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var a = 0, n = t.length, s = e.length, o = [];
                  a < n || a < s;

                )
                  ("number" == typeof t[a] || t[a] instanceof Number) &&
                  ("number" == typeof e[a] || e[a] instanceof Number)
                    ? (o[a] = t[a] + e[a])
                    : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                    (a += 1);
                return o;
              }
              return 0;
            }
            var add = sum;
            function sub(t, e) {
              var r = _typeof(t),
                i = _typeof(e);
              if (isNumerable(r, t) && isNumerable(i, e))
                return (
                  "string" === r && (t = parseInt(t, 10)),
                  "string" === i && (e = parseInt(e, 10)),
                  t - e
                );
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return ((t = t.slice(0))[0] -= e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t - e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var a = 0, n = t.length, s = e.length, o = [];
                  a < n || a < s;

                )
                  ("number" == typeof t[a] || t[a] instanceof Number) &&
                  ("number" == typeof e[a] || e[a] instanceof Number)
                    ? (o[a] = t[a] - e[a])
                    : (o[a] = void 0 === e[a] ? t[a] : t[a] || e[a]),
                    (a += 1);
                return o;
              }
              return 0;
            }
            function mul(t, e) {
              var r,
                i,
                a,
                n = _typeof(t),
                s = _typeof(e);
              if (isNumerable(n, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (
                  a = t.length, r = createTypedArray("float32", a), i = 0;
                  i < a;
                  i += 1
                )
                  r[i] = t[i] * e;
                return r;
              }
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                for (
                  a = e.length, r = createTypedArray("float32", a), i = 0;
                  i < a;
                  i += 1
                )
                  r[i] = t * e[i];
                return r;
              }
              return 0;
            }
            function div(t, e) {
              var r,
                i,
                a,
                n = _typeof(t),
                s = _typeof(e);
              if (isNumerable(n, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (
                  a = t.length, r = createTypedArray("float32", a), i = 0;
                  i < a;
                  i += 1
                )
                  r[i] = t[i] / e;
                return r;
              }
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                for (
                  a = e.length, r = createTypedArray("float32", a), i = 0;
                  i < a;
                  i += 1
                )
                  r[i] = t / e[i];
                return r;
              }
              return 0;
            }
            function mod(t, e) {
              return (
                "string" == typeof t && (t = parseInt(t, 10)),
                "string" == typeof e && (e = parseInt(e, 10)),
                t % e
              );
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;
            function clamp(t, e, r) {
              if (e > r) {
                var i = r;
                (r = e), (e = i);
              }
              return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
              return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
              return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
              if ("number" == typeof t || t instanceof Number)
                return (e = e || 0), Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length),
                a = 0;
              for (r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(a);
            }
            function normalize(t) {
              return div(t, length(t));
            }
            function rgbToHsl(t) {
              var e,
                r,
                i = t[0],
                a = t[1],
                n = t[2],
                s = Math.max(i, a, n),
                o = Math.min(i, a, n),
                h = (s + o) / 2;
              if (s === o) (e = 0), (r = 0);
              else {
                var l = s - o;
                switch (((r = h > 0.5 ? l / (2 - s - o) : l / (s + o)), s)) {
                  case i:
                    e = (a - n) / l + (a < n ? 6 : 0);
                    break;
                  case a:
                    e = (n - i) / l + 2;
                    break;
                  case n:
                    e = (i - a) / l + 4;
                }
                e /= 6;
              }
              return [e, r, h, t[3]];
            }
            function hue2rgb(t, e, r) {
              return (
                r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                  ? e
                  : r < 2 / 3
                  ? t + (e - t) * (2 / 3 - r) * 6
                  : t
              );
            }
            function hslToRgb(t) {
              var e,
                r,
                i,
                a = t[0],
                n = t[1],
                s = t[2];
              if (0 === n) (e = s), (i = s), (r = s);
              else {
                var o = s < 0.5 ? s * (1 + n) : s + n - s * n,
                  h = 2 * s - o;
                (e = hue2rgb(h, o, a + 1 / 3)),
                  (r = hue2rgb(h, o, a)),
                  (i = hue2rgb(h, o, a - 1 / 3));
              }
              return [e, r, i, t[3]];
            }
            function linear(t, e, r, i, a) {
              if (
                ((void 0 !== i && void 0 !== a) ||
                  ((i = e), (a = r), (e = 0), (r = 1)),
                r < e)
              ) {
                var n = r;
                (r = e), (e = n);
              }
              if (t <= e) return i;
              if (t >= r) return a;
              var s,
                o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (a - i) * o;
              var h = i.length,
                l = createTypedArray("float32", h);
              for (s = 0; s < h; s += 1) l[s] = i[s] + (a[s] - i[s]) * o;
              return l;
            }
            function random(t, e) {
              if (
                (void 0 === e &&
                  (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
                e.length)
              ) {
                var r,
                  i = e.length;
                t || (t = createTypedArray("float32", i));
                var a = createTypedArray("float32", i),
                  n = BMMath.random();
                for (r = 0; r < i; r += 1) a[r] = t[r] + n * (e[r] - t[r]);
                return a;
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
            }
            function createPath(t, e, r, i) {
              var a,
                n = t.length,
                s = shapePool.newElement();
              s.setPathData(!!i, n);
              var o,
                h,
                l = [0, 0];
              for (a = 0; a < n; a += 1)
                (o = e && e[a] ? e[a] : l),
                  (h = r && r[a] ? r[a] : l),
                  s.setTripleAt(
                    t[a][0],
                    t[a][1],
                    h[0] + t[a][0],
                    h[1] + t[a][1],
                    o[0] + t[a][0],
                    o[1] + t[a][1],
                    a,
                    !0
                  );
              return s;
            }
            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t;
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform,
                $bm_transform,
                content,
                effect,
                thisProperty = property;
              (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                Object.defineProperty(thisProperty, "value", {
                  get: function () {
                    return thisProperty.v;
                  },
                }),
                (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                (elem.comp.displayStartTime = 0);
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn,
                loop_in,
                loopOut,
                loop_out,
                smooth,
                toWorld,
                fromWorld,
                fromComp,
                toComp,
                fromCompToSurface,
                position,
                rotation,
                anchorPoint,
                scale,
                thisLayer,
                thisComp,
                mask,
                valueAtTime,
                velocityAtTime,
                scoped_bm_rt,
                expression_function = eval(
                  "[function _expression_function(){" +
                    val +
                    ";scoped_bm_rt=$bm_rt}]"
                )[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function (t, e) {
                  var r,
                    i,
                    a = this.pv.length ? this.pv.length : 1,
                    n = createTypedArray("float32", a),
                    s = Math.floor(5 * time);
                  for (r = 0, i = 0; r < s; ) {
                    for (i = 0; i < a; i += 1)
                      n[i] += -e + 2 * e * BMMath.random();
                    r += 1;
                  }
                  var o = 5 * time,
                    h = o - Math.floor(o),
                    l = createTypedArray("float32", a);
                  if (a > 1) {
                    for (i = 0; i < a; i += 1)
                      l[i] =
                        this.pv[i] + n[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l;
                  }
                  return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * h;
                }.bind(this);
              function loopInDuration(t, e) {
                return loopIn(t, e, !0);
              }
              function loopOutDuration(t, e) {
                return loopOut(t, e, !0);
              }
              thisProperty.loopIn &&
                ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                (loop_in = loopIn)),
                thisProperty.loopOut &&
                  ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                  (loop_out = loopOut)),
                thisProperty.smooth &&
                  (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime &&
                  (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime &&
                  (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(
                  elem.comp.globalData.projectInterface
                ),
                time,
                velocity,
                value,
                text,
                textIndex,
                textTotal,
                selectorValue;
              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  i =
                    Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) /
                    degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
              }
              function easeOut(t, e, r, i, a) {
                return applyEase(easeOutBez, t, e, r, i, a);
              }
              function easeIn(t, e, r, i, a) {
                return applyEase(easeInBez, t, e, r, i, a);
              }
              function ease(t, e, r, i, a) {
                return applyEase(easeInOutBez, t, e, r, i, a);
              }
              function applyEase(t, e, r, i, a, n) {
                void 0 === a ? ((a = r), (n = i)) : (e = (e - r) / (i - r)),
                  e > 1 ? (e = 1) : e < 0 && (e = 0);
                var s = t(e);
                if ($bm_isInstanceOfArray(a)) {
                  var o,
                    h = a.length,
                    l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1) l[o] = (n[o] - a[o]) * s + a[o];
                  return l;
                }
                return (n - a) * s + a;
              }
              function nearestKey(t) {
                var e,
                  r,
                  i,
                  a = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (
                    ((r = -1),
                    (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                  )
                    (r = 1), (i = data.k[0].t);
                  else {
                    for (e = 0; e < a - 1; e += 1) {
                      if (t === data.k[e].t) {
                        (r = e + 1), (i = data.k[e].t);
                        break;
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t
                          ? ((r = e + 2), (i = data.k[e + 1].t))
                          : ((r = e + 1), (i = data.k[e].t));
                        break;
                      }
                    }
                    -1 === r && ((r = e + 1), (i = data.k[e].t));
                  }
                else (r = 0), (i = 0);
                var n = {};
                return (
                  (n.index = r),
                  (n.time = i / elem.comp.globalData.frameRate),
                  n
                );
              }
              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0])
                  throw new Error("The property has no keyframe at index " + t);
                (t -= 1),
                  (e = {
                    time: data.k[t].t / elem.comp.globalData.frameRate,
                    value: [],
                  });
                var a = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                  ? data.k[t].s
                  : data.k[t - 1].e;
                for (i = a.length, r = 0; r < i; r += 1)
                  (e[r] = a[r]), (e.value[r] = a[r]);
                return e;
              }
              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e;
              }
              function timeToFrames(t, e) {
                return (
                  t || 0 === t || (t = time),
                  e || (e = elem.comp.globalData.frameRate),
                  t * e
                );
              }
              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
              }
              function sourceRectAtTime() {
                return elem.sourceRectAtTime();
              }
              function substring(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substring(t)
                    : value.substring(t, e)
                  : "";
              }
              function substr(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substr(t)
                    : value.substr(t, e)
                  : "";
              }
              function posterizeTime(t) {
                (time = 0 === t ? 0 : Math.floor(time * t) / t),
                  (value = valueAtTime(time));
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent,
                randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;
              function executeExpression(t) {
                return (
                  (value = t),
                  this.frameExpressionId === elem.globalData.frameId &&
                  "textSelector" !== this.propType
                    ? value
                    : ("textSelector" === this.propType &&
                        ((textIndex = this.textIndex),
                        (textTotal = this.textTotal),
                        (selectorValue = this.selectorValue)),
                      thisLayer ||
                        ((text = elem.layerInterface.text),
                        (thisLayer = elem.layerInterface),
                        (thisComp = elem.comp.compInterface),
                        (toWorld = thisLayer.toWorld.bind(thisLayer)),
                        (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                        (fromComp = thisLayer.fromComp.bind(thisLayer)),
                        (toComp = thisLayer.toComp.bind(thisLayer)),
                        (mask = thisLayer.mask
                          ? thisLayer.mask.bind(thisLayer)
                          : null),
                        (fromCompToSurface = fromComp)),
                      transform ||
                        ((transform = elem.layerInterface(
                          "ADBE Transform Group"
                        )),
                        ($bm_transform = transform),
                        transform && (anchorPoint = transform.anchorPoint)),
                      4 !== elemType ||
                        content ||
                        (content = thisLayer("ADBE Root Vectors Group")),
                      effect || (effect = thisLayer(4)),
                      (hasParent = !(
                        !elem.hierarchy || !elem.hierarchy.length
                      )) &&
                        !parent &&
                        (parent = elem.hierarchy[0].layerInterface),
                      (time =
                        this.comp.renderedFrame /
                        this.comp.globalData.frameRate),
                      _needsRandom && seedRandom(randSeed + time),
                      needsVelocity && (velocity = velocityAtTime(time)),
                      expression_function(),
                      (this.frameExpressionId = elem.globalData.frameId),
                      (scoped_bm_rt =
                        scoped_bm_rt.propType === propTypes.SHAPE
                          ? scoped_bm_rt.v
                          : scoped_bm_rt))
                );
              }
              return (
                (executeExpression.__preventDeadCodeRemoval = [
                  $bm_transform,
                  anchorPoint,
                  time,
                  velocity,
                  inPoint,
                  outPoint,
                  width,
                  height,
                  name,
                  loop_in,
                  loop_out,
                  smooth,
                  toComp,
                  fromCompToSurface,
                  toWorld,
                  fromWorld,
                  mask,
                  position,
                  rotation,
                  scale,
                  thisComp,
                  numKeys,
                  active,
                  wiggle,
                  loopInDuration,
                  loopOutDuration,
                  comp,
                  lookAt,
                  easeOut,
                  easeIn,
                  ease,
                  nearestKey,
                  key,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue,
                  framesToTime,
                  timeToFrames,
                  sourceRectAtTime,
                  substring,
                  substr,
                  posterizeTime,
                  index,
                  globalData,
                ]),
                executeExpression
              );
            }
            return (
              (ob.initiateExpression = initiateExpression),
              (ob.__preventDeadCodeRemoval = [
                window,
                document,
                XMLHttpRequest,
                fetch,
                frames,
                $bm_neg,
                add,
                $bm_sum,
                $bm_sub,
                $bm_mul,
                $bm_div,
                $bm_mod,
                clamp,
                radians_to_degrees,
                degreesToRadians,
                degrees_to_radians,
                normalize,
                rgbToHsl,
                hslToRgb,
                linear,
                random,
                createPath,
              ]),
              ob
            );
          })(),
          expressionHelpers = {
            searchExpressions: function (t, e, r) {
              e.x &&
                ((r.k = !0),
                (r.x = !0),
                (r.initiateExpression = ExpressionManager.initiateExpression),
                r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
            },
            getSpeedAtTime: function (t) {
              var e = this.getValueAtTime(t),
                r = this.getValueAtTime(t + -0.01),
                i = 0;
              if (e.length) {
                var a;
                for (a = 0; a < e.length; a += 1) i += Math.pow(r[a] - e[a], 2);
                i = 100 * Math.sqrt(i);
              } else i = 0;
              return i;
            },
            getVelocityAtTime: function (t) {
              if (void 0 !== this.vel) return this.vel;
              var e,
                r,
                i = -0.001,
                a = this.getValueAtTime(t),
                n = this.getValueAtTime(t + i);
              if (a.length)
                for (
                  e = createTypedArray("float32", a.length), r = 0;
                  r < a.length;
                  r += 1
                )
                  e[r] = (n[r] - a[r]) / i;
              else e = (n - a) / i;
              return e;
            },
            getValueAtTime: function (t) {
              return (
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastFrame < t
                      ? this._cachingAtTime.lastIndex
                      : 0),
                  (this._cachingAtTime.value = this.interpolateValue(
                    t,
                    this._cachingAtTime
                  )),
                  (this._cachingAtTime.lastFrame = t)),
                this._cachingAtTime.value
              );
            },
            getStaticValueAtTime: function () {
              return this.pv;
            },
            setGroupProperty: function (t) {
              this.propertyGroup = t;
            },
          };
        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              a,
              n,
              s,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (
              (r
                ? (a =
                    p -
                    (i = e
                      ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, p - this.elem.data.ip)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = p - (a = l[l.length - 1 - e].t))),
              "pingpong" === t)
            ) {
              if (Math.floor((h - a) / i) % 2 != 0)
                return this.getValueAtTime(
                  (i - ((h - a) % i) + a) / this.comp.globalData.frameRate,
                  0
                );
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(
                    a / this.comp.globalData.frameRate,
                    0
                  ),
                  f = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0
                  ),
                  u = this.getValueAtTime(
                    (((h - a) % i) + a) / this.comp.globalData.frameRate,
                    0
                  ),
                  d = Math.floor((h - a) / i);
                if (this.pv.length) {
                  for (
                    s = (o = new Array(c.length)).length, n = 0;
                    n < s;
                    n += 1
                  )
                    o[n] = (f[n] - c[n]) * d + u[n];
                  return o;
                }
                return (f - c) * d + u;
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0
                  ),
                  y = this.getValueAtTime(
                    (p - 0.001) / this.comp.globalData.frameRate,
                    0
                  );
                if (this.pv.length) {
                  for (
                    s = (o = new Array(m.length)).length, n = 0;
                    n < s;
                    n += 1
                  )
                    o[n] =
                      m[n] +
                      ((m[n] - y[n]) *
                        ((h - p) / this.comp.globalData.frameRate)) /
                        5e-4;
                  return o;
                }
                return m + ((h - p) / 0.001) * (m - y);
              }
            }
            return this.getValueAtTime(
              (((h - a) % i) + a) / this.comp.globalData.frameRate,
              0
            );
          }
          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              a,
              n,
              s,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[0].t;
            if (h >= p) return this.pv;
            if (
              (r
                ? (a =
                    p +
                    (i = e
                      ? Math.abs(this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, this.elem.data.op - p)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = (a = l[e].t) - p)),
              "pingpong" === t)
            ) {
              if (Math.floor((p - h) / i) % 2 == 0)
                return this.getValueAtTime(
                  (((p - h) % i) + p) / this.comp.globalData.frameRate,
                  0
                );
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0
                  ),
                  f = this.getValueAtTime(
                    a / this.comp.globalData.frameRate,
                    0
                  ),
                  u = this.getValueAtTime(
                    (i - ((p - h) % i) + p) / this.comp.globalData.frameRate,
                    0
                  ),
                  d = Math.floor((p - h) / i) + 1;
                if (this.pv.length) {
                  for (
                    s = (o = new Array(c.length)).length, n = 0;
                    n < s;
                    n += 1
                  )
                    o[n] = u[n] - (f[n] - c[n]) * d;
                  return o;
                }
                return u - (f - c) * d;
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0
                  ),
                  y = this.getValueAtTime(
                    (p + 0.001) / this.comp.globalData.frameRate,
                    0
                  );
                if (this.pv.length) {
                  for (
                    s = (o = new Array(m.length)).length, n = 0;
                    n < s;
                    n += 1
                  )
                    o[n] = m[n] + ((m[n] - y[n]) * (p - h)) / 0.001;
                  return o;
                }
                return m + ((m - y) * (p - h)) / 0.001;
              }
            }
            return this.getValueAtTime(
              (i - (((p - h) % i) + p)) / this.comp.globalData.frameRate,
              0
            );
          }
          function r(t, e) {
            if (!this.k) return this.pv;
            if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
              return this.pv;
            var r,
              i,
              a = this.comp.renderedFrame / this.comp.globalData.frameRate,
              n = a - t,
              s = e > 1 ? (a + t - n) / (e - 1) : 1,
              o = 0,
              h = 0;
            for (
              r = this.pv.length
                ? createTypedArray("float32", this.pv.length)
                : 0;
              o < e;

            ) {
              if (((i = this.getValueAtTime(n + o * s)), this.pv.length))
                for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
              else r += i;
              o += 1;
            }
            if (this.pv.length)
              for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
            else r /= e;
            return r;
          }
          function i(t) {
            this._transformCachingAtTime ||
              (this._transformCachingAtTime = { v: new Matrix() });
            var e = this._transformCachingAtTime.v;
            if (
              (e.cloneFromProps(this.pre.props),
              this.appliedTransformations < 1)
            ) {
              var r = this.a.getValueAtTime(t);
              e.translate(
                -r[0] * this.a.mult,
                -r[1] * this.a.mult,
                r[2] * this.a.mult
              );
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(t);
              e.scale(
                i[0] * this.s.mult,
                i[1] * this.s.mult,
                i[2] * this.s.mult
              );
            }
            if (this.sk && this.appliedTransformations < 3) {
              var a = this.sk.getValueAtTime(t),
                n = this.sa.getValueAtTime(t);
              e.skewFromAxis(-a * this.sk.mult, n * this.sa.mult);
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(t);
              e.rotate(-s * this.r.mult);
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                h = this.ry.getValueAtTime(t),
                l = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult)
                .rotateY(h * this.ry.mult)
                .rotateX(l * this.rx.mult)
                .rotateZ(-p[2] * this.or.mult)
                .rotateY(p[1] * this.or.mult)
                .rotateX(p[0] * this.or.mult);
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                f = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var u = this.pz.getValueAtTime(t);
                e.translate(
                  c * this.px.mult,
                  f * this.py.mult,
                  -u * this.pz.mult
                );
              } else e.translate(c * this.px.mult, f * this.py.mult, 0);
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(
                d[0] * this.p.mult,
                d[1] * this.p.mult,
                -d[2] * this.p.mult
              );
            }
            return e;
          }
          function a() {
            return this.v.clone(new Matrix());
          }
          var n = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function (t, e, r) {
            var s = n(t, e, r);
            return (
              s.dynamicProperties.length
                ? (s.getValueAtTime = i.bind(s))
                : (s.getValueAtTime = a.bind(s)),
              (s.setGroupProperty = expressionHelpers.setGroupProperty),
              s
            );
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function (i, a, n, o, h) {
            var l = s(i, a, n, o, h);
            l.kf
              ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
              : (l.getValueAtTime =
                  expressionHelpers.getStaticValueAtTime.bind(l)),
              (l.setGroupProperty = expressionHelpers.setGroupProperty),
              (l.loopOut = t),
              (l.loopIn = e),
              (l.smooth = r),
              (l.getVelocityAtTime =
                expressionHelpers.getVelocityAtTime.bind(l)),
              (l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l)),
              (l.numKeys = 1 === a.a ? a.k.length : 0),
              (l.propertyIndex = a.ix);
            var p = 0;
            return (
              0 !== n &&
                (p = createTypedArray(
                  "float32",
                  1 === a.a ? a.k[0].s.length : a.k.length
                )),
              (l._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: p,
              }),
              expressionHelpers.searchExpressions(i, a, l),
              l.k && h.addDynamicProperty(l),
              l
            );
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            h = ShapePropertyFactory.getKeyframedConstructorFunction();
          function l() {}
          (l.prototype = {
            vertices: function (t, e) {
              this.k && this.getValue();
              var r,
                i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var a = i._length,
                n = i[t],
                s = i.v,
                o = createSizedArray(a);
              for (r = 0; r < a; r += 1)
                o[r] =
                  "i" === t || "o" === t
                    ? [n[r][0] - s[r][0], n[r][1] - s[r][1]]
                    : [n[r][0], n[r][1]];
              return o;
            },
            points: function (t) {
              return this.vertices("v", t);
            },
            inTangents: function (t) {
              return this.vertices("i", t);
            },
            outTangents: function (t) {
              return this.vertices("o", t);
            },
            isClosed: function () {
              return this.v.c;
            },
            pointOnPath: function (t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)),
                this._segmentsLength ||
                  (this._segmentsLength = bez.getSegmentsLength(r));
              for (
                var i,
                  a = this._segmentsLength,
                  n = a.lengths,
                  s = a.totalLength * t,
                  o = 0,
                  h = n.length,
                  l = 0;
                o < h;

              ) {
                if (l + n[o].addedLength > s) {
                  var p = o,
                    c = r.c && o === h - 1 ? 0 : o + 1,
                    f = (s - l) / n[o].addedLength;
                  i = bez.getPointInSegment(
                    r.v[p],
                    r.v[c],
                    r.o[p],
                    r.i[c],
                    f,
                    n[o]
                  );
                  break;
                }
                (l += n[o].addedLength), (o += 1);
              }
              return (
                i ||
                  (i = r.c
                    ? [r.v[0][0], r.v[0][1]]
                    : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                i
              );
            },
            vectorOnPath: function (t, e, r) {
              1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
              var i = this.pointOnPath(t, e),
                a = this.pointOnPath(t + 0.001, e),
                n = a[0] - i[0],
                s = a[1] - i[1],
                o = Math.sqrt(Math.pow(n, 2) + Math.pow(s, 2));
              return 0 === o
                ? [0, 0]
                : "tangent" === r
                ? [n / o, s / o]
                : [-s / o, n / o];
            },
            tangentOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "tangent");
            },
            normalOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime,
          }),
            extendPrototype([l], o),
            extendPrototype([l], h),
            (h.prototype.getValueAtTime = function (t) {
              return (
                this._cachingAtTime ||
                  (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame,
                  }),
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastTime < t
                      ? this._caching.lastIndex
                      : 0),
                  (this._cachingAtTime.lastTime = t),
                  this.interpolateShape(
                    t,
                    this._cachingAtTime.shapeValue,
                    this._cachingAtTime
                  )),
                this._cachingAtTime.shapeValue
              );
            }),
            (h.prototype.initiateExpression =
              ExpressionManager.initiateExpression);
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function (t, e, r, i, a) {
            var n = p(t, e, r, i, a);
            return (
              (n.propertyIndex = e.ix),
              (n.lock = !1),
              3 === r
                ? expressionHelpers.searchExpressions(t, e.pt, n)
                : 4 === r && expressionHelpers.searchExpressions(t, e.ks, n),
              n.k && t.addDynamicProperty(n),
              n
            );
          };
        }
        function initialize$1() {
          addPropertyDecorator();
        }
        function addDecorator() {
          (TextProperty.prototype.getExpressionValue = function (t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var i = {};
              return (
                this.copyData(i, t),
                (i.t = r.toString()),
                (i.__complete = !1),
                i
              );
            }
            return t;
          }),
            (TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
              return this.data.d.x
                ? ((this.calculateExpression =
                    ExpressionManager.initiateExpression.bind(this)(
                      this.elem,
                      this.data.d,
                      this
                    )),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0)
                : null;
            });
        }
        function initialize() {
          addDecorator();
        }
        function SVGComposableEffect() {}
        function SVGTintFilter(t, e, r, i, a) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"),
            n.setAttribute("color-interpolation-filters", "linearRGB"),
            n.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
            ),
            n.setAttribute("result", i + "_tint_1"),
            t.appendChild(n),
            (n = createNS("feColorMatrix")).setAttribute("type", "matrix"),
            n.setAttribute("color-interpolation-filters", "sRGB"),
            n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            n.setAttribute("result", i + "_tint_2"),
            t.appendChild(n),
            (this.matrixFilter = n);
          var s = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
          t.appendChild(s);
        }
        function SVGFillFilter(t, e, r, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "sRGB"),
            a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            a.setAttribute("result", i),
            t.appendChild(a),
            (this.matrixFilter = a);
        }
        function SVGStrokeEffect(t, e, r) {
          (this.initialized = !1),
            (this.filterManager = e),
            (this.elem = r),
            (this.paths = []);
        }
        function SVGTritoneFilter(t, e, r, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"),
            a.setAttribute("color-interpolation-filters", "linearRGB"),
            a.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
            ),
            t.appendChild(a);
          var n = createNS("feComponentTransfer");
          n.setAttribute("color-interpolation-filters", "sRGB"),
            n.setAttribute("result", i),
            (this.matrixFilter = n);
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), n.appendChild(s), (this.feFuncR = s);
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), n.appendChild(o), (this.feFuncG = o);
          var h = createNS("feFuncB");
          h.setAttribute("type", "table"),
            n.appendChild(h),
            (this.feFuncB = h),
            t.appendChild(n);
        }
        function SVGProLevelsFilter(t, e, r, i) {
          this.filterManager = e;
          var a = this.filterManager.effectElements,
            n = createNS("feComponentTransfer");
          (a[10].p.k ||
            0 !== a[10].p.v ||
            a[11].p.k ||
            1 !== a[11].p.v ||
            a[12].p.k ||
            1 !== a[12].p.v ||
            a[13].p.k ||
            0 !== a[13].p.v ||
            a[14].p.k ||
            1 !== a[14].p.v) &&
            (this.feFuncR = this.createFeFunc("feFuncR", n)),
            (a[17].p.k ||
              0 !== a[17].p.v ||
              a[18].p.k ||
              1 !== a[18].p.v ||
              a[19].p.k ||
              1 !== a[19].p.v ||
              a[20].p.k ||
              0 !== a[20].p.v ||
              a[21].p.k ||
              1 !== a[21].p.v) &&
              (this.feFuncG = this.createFeFunc("feFuncG", n)),
            (a[24].p.k ||
              0 !== a[24].p.v ||
              a[25].p.k ||
              1 !== a[25].p.v ||
              a[26].p.k ||
              1 !== a[26].p.v ||
              a[27].p.k ||
              0 !== a[27].p.v ||
              a[28].p.k ||
              1 !== a[28].p.v) &&
              (this.feFuncB = this.createFeFunc("feFuncB", n)),
            (a[31].p.k ||
              0 !== a[31].p.v ||
              a[32].p.k ||
              1 !== a[32].p.v ||
              a[33].p.k ||
              1 !== a[33].p.v ||
              a[34].p.k ||
              0 !== a[34].p.v ||
              a[35].p.k ||
              1 !== a[35].p.v) &&
              (this.feFuncA = this.createFeFunc("feFuncA", n)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
              (n.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(n)),
            (a[3].p.k ||
              0 !== a[3].p.v ||
              a[4].p.k ||
              1 !== a[4].p.v ||
              a[5].p.k ||
              1 !== a[5].p.v ||
              a[6].p.k ||
              0 !== a[6].p.v ||
              a[7].p.k ||
              1 !== a[7].p.v) &&
              ((n = createNS("feComponentTransfer")).setAttribute(
                "color-interpolation-filters",
                "sRGB"
              ),
              n.setAttribute("result", i),
              t.appendChild(n),
              (this.feFuncRComposed = this.createFeFunc("feFuncR", n)),
              (this.feFuncGComposed = this.createFeFunc("feFuncG", n)),
              (this.feFuncBComposed = this.createFeFunc("feFuncB", n)));
        }
        function SVGDropShadowEffect(t, e, r, i, a) {
          var n = e.container.globalData.renderConfig.filterSize,
            s = e.data.fs || n;
          t.setAttribute("x", s.x || n.x),
            t.setAttribute("y", s.y || n.y),
            t.setAttribute("width", s.width || n.width),
            t.setAttribute("height", s.height || n.height),
            (this.filterManager = e);
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"),
            o.setAttribute("result", i + "_drop_shadow_1"),
            o.setAttribute("stdDeviation", "0"),
            (this.feGaussianBlur = o),
            t.appendChild(o);
          var h = createNS("feOffset");
          h.setAttribute("dx", "25"),
            h.setAttribute("dy", "0"),
            h.setAttribute("in", i + "_drop_shadow_1"),
            h.setAttribute("result", i + "_drop_shadow_2"),
            (this.feOffset = h),
            t.appendChild(h);
          var l = createNS("feFlood");
          l.setAttribute("flood-color", "#00ff00"),
            l.setAttribute("flood-opacity", "1"),
            l.setAttribute("result", i + "_drop_shadow_3"),
            (this.feFlood = l),
            t.appendChild(l);
          var p = createNS("feComposite");
          p.setAttribute("in", i + "_drop_shadow_3"),
            p.setAttribute("in2", i + "_drop_shadow_2"),
            p.setAttribute("operator", "in"),
            p.setAttribute("result", i + "_drop_shadow_4"),
            t.appendChild(p);
          var c = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
          t.appendChild(c);
        }
        (SVGComposableEffect.prototype = {
          createMergeNode: function (t, e) {
            var r,
              i,
              a = createNS("feMerge");
            for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)
              (r = createNS("feMergeNode")).setAttribute("in", e[i]),
                a.appendChild(r),
                a.appendChild(r);
            return a;
          },
        }),
          extendPrototype([SVGComposableEffect], SVGTintFilter),
          (SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute(
                "values",
                r[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (r[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (r[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  i +
                  " 0"
              );
            }
          }),
          (SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v,
                r = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute(
                "values",
                "0 0 0 0 " +
                  e[0] +
                  " 0 0 0 0 " +
                  e[1] +
                  " 0 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  r +
                  " 0"
              );
            }
          }),
          (SVGStrokeEffect.prototype.initialize = function () {
            var t,
              e,
              r,
              i,
              a =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
            for (
              1 === this.filterManager.effectElements[1].p.v
                ? ((i = this.elem.maskManager.masksProperties.length), (r = 0))
                : (i = 1 + (r = this.filterManager.effectElements[0].p.v - 1)),
                (e = createNS("g")).setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1);
              r < i;
              r += 1
            )
              (t = createNS("path")),
                e.appendChild(t),
                this.paths.push({ p: t, m: r });
            if (3 === this.filterManager.effectElements[10].p.v) {
              var n = createNS("mask"),
                s = createElementID();
              n.setAttribute("id", s),
                n.setAttribute("mask-type", "alpha"),
                n.appendChild(e),
                this.elem.globalData.defs.appendChild(n);
              var o = createNS("g");
              for (
                o.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + s + ")"
                );
                a[0];

              )
                o.appendChild(a[0]);
              this.elem.layerElement.appendChild(o),
                (this.masker = n),
                e.setAttribute("stroke", "#fff");
            } else if (
              1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v
            ) {
              if (2 === this.filterManager.effectElements[10].p.v)
                for (
                  a =
                    this.elem.layerElement.children ||
                    this.elem.layerElement.childNodes;
                  a.length;

                )
                  this.elem.layerElement.removeChild(a[0]);
              this.elem.layerElement.appendChild(e),
                this.elem.layerElement.removeAttribute("mask"),
                e.setAttribute("stroke", "#fff");
            }
            (this.initialized = !0), (this.pathMasker = e);
          }),
          (SVGStrokeEffect.prototype.renderFrame = function (t) {
            var e;
            this.initialized || this.initialize();
            var r,
              i,
              a = this.paths.length;
            for (e = 0; e < a; e += 1)
              if (
                -1 !== this.paths[e].m &&
                ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                (i = this.paths[e].p),
                (t || this.filterManager._mdf || r.prop._mdf) &&
                  i.setAttribute("d", r.lastPath),
                t ||
                  this.filterManager.effectElements[9].p._mdf ||
                  this.filterManager.effectElements[4].p._mdf ||
                  this.filterManager.effectElements[7].p._mdf ||
                  this.filterManager.effectElements[8].p._mdf ||
                  r.prop._mdf)
              ) {
                var n;
                if (
                  0 !== this.filterManager.effectElements[7].p.v ||
                  100 !== this.filterManager.effectElements[8].p.v
                ) {
                  var s =
                      0.01 *
                      Math.min(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ),
                    o =
                      0.01 *
                      Math.max(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ),
                    h = i.getTotalLength();
                  n = "0 0 0 " + h * s + " ";
                  var l,
                    p = h * (o - s),
                    c =
                      1 +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01,
                    f = Math.floor(p / c);
                  for (l = 0; l < f; l += 1)
                    n +=
                      "1 " +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01 +
                      " ";
                  n += "0 " + 10 * h + " 0 0";
                } else
                  n =
                    "1 " +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01;
                i.setAttribute("stroke-dasharray", n);
              }
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.pathMasker.setAttribute(
                  "stroke-width",
                  2 * this.filterManager.effectElements[4].p.v
                ),
              (t || this.filterManager.effectElements[6].p._mdf) &&
                this.pathMasker.setAttribute(
                  "opacity",
                  this.filterManager.effectElements[6].p.v
                ),
              (1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v) &&
                (t || this.filterManager.effectElements[3].p._mdf))
            ) {
              var u = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute(
                "stroke",
                "rgb(" +
                  bmFloor(255 * u[0]) +
                  "," +
                  bmFloor(255 * u[1]) +
                  "," +
                  bmFloor(255 * u[2]) +
                  ")"
              );
            }
          }),
          (SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v,
                a = i[0] + " " + r[0] + " " + e[0],
                n = i[1] + " " + r[1] + " " + e[1],
                s = i[2] + " " + r[2] + " " + e[2];
              this.feFuncR.setAttribute("tableValues", a),
                this.feFuncG.setAttribute("tableValues", n),
                this.feFuncB.setAttribute("tableValues", s);
            }
          }),
          (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r;
          }),
          (SVGProLevelsFilter.prototype.getTableValue = function (
            t,
            e,
            r,
            i,
            a
          ) {
            for (
              var n,
                s,
                o = 0,
                h = Math.min(t, e),
                l = Math.max(t, e),
                p = Array.call(null, { length: 256 }),
                c = 0,
                f = a - i,
                u = e - t;
              o <= 256;

            )
              (s =
                (n = o / 256) <= h
                  ? u < 0
                    ? a
                    : i
                  : n >= l
                  ? u < 0
                    ? i
                    : a
                  : i + f * Math.pow((n - t) / u, 1 / r)),
                (p[c] = s),
                (c += 1),
                (o += 256 / 255);
            return p.join(" ");
          }),
          (SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e,
                r = this.filterManager.effectElements;
              this.feFuncRComposed &&
                (t ||
                  r[3].p._mdf ||
                  r[4].p._mdf ||
                  r[5].p._mdf ||
                  r[6].p._mdf ||
                  r[7].p._mdf) &&
                ((e = this.getTableValue(
                  r[3].p.v,
                  r[4].p.v,
                  r[5].p.v,
                  r[6].p.v,
                  r[7].p.v
                )),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR &&
                  (t ||
                    r[10].p._mdf ||
                    r[11].p._mdf ||
                    r[12].p._mdf ||
                    r[13].p._mdf ||
                    r[14].p._mdf) &&
                  ((e = this.getTableValue(
                    r[10].p.v,
                    r[11].p.v,
                    r[12].p.v,
                    r[13].p.v,
                    r[14].p.v
                  )),
                  this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG &&
                  (t ||
                    r[17].p._mdf ||
                    r[18].p._mdf ||
                    r[19].p._mdf ||
                    r[20].p._mdf ||
                    r[21].p._mdf) &&
                  ((e = this.getTableValue(
                    r[17].p.v,
                    r[18].p.v,
                    r[19].p.v,
                    r[20].p.v,
                    r[21].p.v
                  )),
                  this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB &&
                  (t ||
                    r[24].p._mdf ||
                    r[25].p._mdf ||
                    r[26].p._mdf ||
                    r[27].p._mdf ||
                    r[28].p._mdf) &&
                  ((e = this.getTableValue(
                    r[24].p.v,
                    r[25].p.v,
                    r[26].p.v,
                    r[27].p.v,
                    r[28].p.v
                  )),
                  this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA &&
                  (t ||
                    r[31].p._mdf ||
                    r[32].p._mdf ||
                    r[33].p._mdf ||
                    r[34].p._mdf ||
                    r[35].p._mdf) &&
                  ((e = this.getTableValue(
                    r[31].p.v,
                    r[32].p.v,
                    r[33].p.v,
                    r[34].p.v,
                    r[35].p.v
                  )),
                  this.feFuncA.setAttribute("tableValues", e));
            }
          }),
          extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
          (SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.feGaussianBlur.setAttribute(
                    "stdDeviation",
                    this.filterManager.effectElements[4].p.v / 4
                  ),
                t || this.filterManager.effectElements[0].p._mdf)
              ) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute(
                  "flood-color",
                  rgbToHex(
                    Math.round(255 * e[0]),
                    Math.round(255 * e[1]),
                    Math.round(255 * e[2])
                  )
                );
              }
              if (
                ((t || this.filterManager.effectElements[1].p._mdf) &&
                  this.feFlood.setAttribute(
                    "flood-opacity",
                    this.filterManager.effectElements[1].p.v / 255
                  ),
                t ||
                  this.filterManager.effectElements[2].p._mdf ||
                  this.filterManager.effectElements[3].p._mdf)
              ) {
                var r = this.filterManager.effectElements[3].p.v,
                  i =
                    (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                  a = r * Math.cos(i),
                  n = r * Math.sin(i);
                this.feOffset.setAttribute("dx", a),
                  this.feOffset.setAttribute("dy", n);
              }
            }
          });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
          (this.initialized = !1),
            (this.filterManager = e),
            (this.filterElem = t),
            (this.elem = r),
            (r.matteElement = createNS("g")),
            r.matteElement.appendChild(r.layerElement),
            r.matteElement.appendChild(r.transformedElement),
            (r.baseElement = r.matteElement);
        }
        function SVGGaussianBlurEffect(t, e, r, i) {
          t.setAttribute("x", "-100%"),
            t.setAttribute("y", "-100%"),
            t.setAttribute("width", "300%"),
            t.setAttribute("height", "300%"),
            (this.filterManager = e);
          var a = createNS("feGaussianBlur");
          a.setAttribute("result", i),
            t.appendChild(a),
            (this.feGaussianBlur = a);
        }
        return (
          (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
          (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
              for (
                var i, a = r.children, n = 0, s = a.length;
                n < s && a[n] !== t.layerElement;

              )
                n += 1;
              n <= s - 2 && (i = a[n + 1]);
              var o = createNS("use");
              o.setAttribute("href", "#" + e),
                i ? r.insertBefore(o, i) : r.appendChild(o);
            }
          }),
          (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
              var r = createElementID(),
                i = createNS("mask");
              i.setAttribute("id", e.layerId),
                i.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e);
              var a = t.globalData.defs;
              a.appendChild(i);
              var n = createNS("symbol");
              n.setAttribute("id", r),
                this.replaceInParent(e, r),
                n.appendChild(e.layerElement),
                a.appendChild(n);
              var s = createNS("use");
              s.setAttribute("href", "#" + r),
                i.appendChild(s),
                (e.data.hd = !1),
                e.show();
            }
            t.setMatte(e.layerId);
          }),
          (SVGMatte3Effect.prototype.initialize = function () {
            for (
              var t = this.filterManager.effectElements[0].p.v,
                e = this.elem.comp.elements,
                r = 0,
                i = e.length;
              r < i;

            )
              e[r] &&
                e[r].data.ind === t &&
                this.setElementAsMask(this.elem, e[r]),
                (r += 1);
            this.initialized = !0;
          }),
          (SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize();
          }),
          (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = 3 == r ? 0 : e,
                a = 2 == r ? 0 : e;
              this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
              var n =
                1 == this.filterManager.effectElements[2].p.v
                  ? "wrap"
                  : "duplicate";
              this.feGaussianBlur.setAttribute("edgeMode", n);
            }
          }),
          registerRenderer("canvas", CanvasRenderer),
          registerRenderer("html", HybridRenderer),
          registerRenderer("svg", SVGRenderer),
          ShapeModifiers.registerModifier("tm", TrimModifier),
          ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
          ShapeModifiers.registerModifier("rp", RepeaterModifier),
          ShapeModifiers.registerModifier("rd", RoundCornersModifier),
          ShapeModifiers.registerModifier("zz", ZigZagModifier),
          ShapeModifiers.registerModifier("op", OffsetPathModifier),
          setExpressionsPlugin(Expressions),
          setExpressionInterfaces(getInterface),
          initialize$1(),
          initialize(),
          registerEffect(20, SVGTintFilter, !0),
          registerEffect(21, SVGFillFilter, !0),
          registerEffect(22, SVGStrokeEffect, !1),
          registerEffect(23, SVGTritoneFilter, !0),
          registerEffect(24, SVGProLevelsFilter, !0),
          registerEffect(25, SVGDropShadowEffect, !0),
          registerEffect(28, SVGMatte3Effect, !1),
          registerEffect(29, SVGGaussianBlurEffect, !0),
          lottie
        );
      }),
      (module.exports = factory()));
  })(lottie$1, lottie$1.exports);
  var lottie = lottie$1.exports,
    _templateObject$1,
    styles = i$3(
      _templateObject$1 ||
        (_templateObject$1 = _taggedTemplateLiteral([
          "\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n",
        ]))
    ),
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    PlayerState,
    PlayMode,
    PlayerEvents;
  function parseSrc(t) {
    if ("object" == typeof t) return t;
    try {
      return JSON.parse(t);
    } catch (e) {
      return new URL(t, window.location.href).toString();
    }
  }
  function isLottie(t) {
    return ["v", "ip", "op", "layers", "fr", "w", "h"].every((e) =>
      Object.prototype.hasOwnProperty.call(t, e)
    );
  }
  function fromURL(t) {
    return _fromURL.apply(this, arguments);
  }
  function _fromURL() {
    return (_fromURL = _asyncToGenerator(function* (t) {
      if ("string" != typeof t)
        throw new Error("The url value must be a string");
      var e;
      try {
        var r = new URL(t),
          i = yield fetch(r.toString());
        e = yield i.json();
      } catch (t) {
        throw new Error(
          "An error occurred while trying to load the Lottie file from URL"
        );
      }
      return e;
    })).apply(this, arguments);
  }
  (exports.PlayerState = void 0),
    (PlayerState = exports.PlayerState || (exports.PlayerState = {})),
    (PlayerState.Destroyed = "destroyed"),
    (PlayerState.Error = "error"),
    (PlayerState.Frozen = "frozen"),
    (PlayerState.Loading = "loading"),
    (PlayerState.Paused = "paused"),
    (PlayerState.Playing = "playing"),
    (PlayerState.Stopped = "stopped"),
    (exports.PlayMode = void 0),
    (PlayMode = exports.PlayMode || (exports.PlayMode = {})),
    (PlayMode.Bounce = "bounce"),
    (PlayMode.Normal = "normal"),
    (exports.PlayerEvents = void 0),
    (PlayerEvents = exports.PlayerEvents || (exports.PlayerEvents = {})),
    (PlayerEvents.Complete = "complete"),
    (PlayerEvents.Destroyed = "destroyed"),
    (PlayerEvents.Error = "error"),
    (PlayerEvents.Frame = "frame"),
    (PlayerEvents.Freeze = "freeze"),
    (PlayerEvents.Load = "load"),
    (PlayerEvents.Loop = "loop"),
    (PlayerEvents.Pause = "pause"),
    (PlayerEvents.Play = "play"),
    (PlayerEvents.Ready = "ready"),
    (PlayerEvents.Rendered = "rendered"),
    (PlayerEvents.Stop = "stop"),
    (exports.LottiePlayer = class extends s {
      constructor() {
        super(...arguments),
          (this.autoplay = !1),
          (this.background = "transparent"),
          (this.controls = !1),
          (this.currentState = exports.PlayerState.Loading),
          (this.description = "Lottie animation"),
          (this.direction = 1),
          (this.disableCheck = !1),
          (this.hover = !1),
          (this.intermission = 1),
          (this.loop = !1),
          (this.mode = exports.PlayMode.Normal),
          (this.preserveAspectRatio = "xMidYMid meet"),
          (this.renderer = "svg"),
          (this.speed = 1),
          (this._io = void 0),
          (this._counter = 1);
      }
      load(t) {
        var e = this;
        return _asyncToGenerator(function* () {
          if (e.shadowRoot) {
            var r = {
              container: e.container,
              loop: !1,
              autoplay: !1,
              renderer: e.renderer,
              rendererSettings: {
                preserveAspectRatio: e.preserveAspectRatio,
                clearCanvas: !1,
                progressiveLoad: !0,
                hideOnTransparent: !0,
              },
            };
            try {
              var i = parseSrc(t),
                a = {},
                n = "string" == typeof i ? "path" : "animationData";
              e._lottie && e._lottie.destroy(),
                e.webworkers && lottie$1.exports.useWebWorker(!0),
                (e._lottie = lottie$1.exports.loadAnimation(
                  Object.assign(Object.assign({}, r), { [n]: i })
                )),
                e._attachEventListeners(),
                e.disableCheck ||
                  ("path" === n
                    ? ((a = yield fromURL(i)), (n = "animationData"))
                    : (a = i),
                  isLottie(a) ||
                    ((e.currentState = exports.PlayerState.Error),
                    e.dispatchEvent(
                      new CustomEvent(exports.PlayerEvents.Error)
                    )));
            } catch (t) {
              (e.currentState = exports.PlayerState.Error),
                e.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
            }
          }
        })();
      }
      getLottie() {
        return this._lottie;
      }
      play() {
        this._lottie &&
          (this._lottie.play(),
          (this.currentState = exports.PlayerState.Playing),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Play)));
      }
      pause() {
        this._lottie &&
          (this._lottie.pause(),
          (this.currentState = exports.PlayerState.Paused),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Pause)));
      }
      stop() {
        this._lottie &&
          ((this._counter = 1),
          this._lottie.stop(),
          (this.currentState = exports.PlayerState.Stopped),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Stop)));
      }
      destroy() {
        this._lottie &&
          (this._lottie.destroy(),
          (this._lottie = null),
          (this.currentState = exports.PlayerState.Destroyed),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Destroyed)),
          this.remove());
      }
      seek(t) {
        if (this._lottie) {
          var e = /^(\d+)(%?)$/.exec(t.toString());
          if (e) {
            var r =
              "%" === e[2]
                ? (this._lottie.totalFrames * Number(e[1])) / 100
                : Number(e[1]);
            (this.seeker = r),
              this.currentState === exports.PlayerState.Playing
                ? this._lottie.goToAndPlay(r, !0)
                : (this._lottie.goToAndStop(r, !0), this._lottie.pause());
          }
        }
      }
      snapshot() {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.shadowRoot) {
          var e = this.shadowRoot.querySelector(".animation svg"),
            r = new XMLSerializer().serializeToString(e);
          if (t) {
            var i = document.createElement("a");
            (i.href = "data:image/svg+xml;charset=utf-8,".concat(
              encodeURIComponent(r)
            )),
              (i.download = "download_".concat(this.seeker, ".svg")),
              document.body.appendChild(i),
              i.click(),
              document.body.removeChild(i);
          }
          return r;
        }
      }
      setSpeed() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._lottie && this._lottie.setSpeed(t);
      }
      setDirection(t) {
        this._lottie && this._lottie.setDirection(t);
      }
      setLooping(t) {
        this._lottie && ((this.loop = t), (this._lottie.loop = t));
      }
      togglePlay() {
        return this.currentState === exports.PlayerState.Playing
          ? this.pause()
          : this.play();
      }
      toggleLooping() {
        this.setLooping(!this.loop);
      }
      resize() {
        this._lottie && this._lottie.resize();
      }
      static get styles() {
        return styles;
      }
      disconnectedCallback() {
        this.isConnected ||
          (this._io && (this._io.disconnect(), (this._io = void 0)),
          document.removeEventListener("visibilitychange", () =>
            this._onVisibilityChange()
          ),
          this.destroy());
      }
      render() {
        var t = this.controls ? "main controls" : "main",
          e = this.controls ? "animation controls" : "animation";
        return y(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteral([
              ' <div\n      id="animation-container"\n      class=',
              '\n      lang="en"\n      aria-label=',
              '\n      role="img"\n    >\n      <div\n        id="animation"\n        class=',
              '\n        style="background:',
              ';"\n      >\n        ',
              "\n      </div>\n      ",
              "\n    </div>",
            ])),
          t,
          this.description,
          e,
          this.background,
          this.currentState === exports.PlayerState.Error
            ? y(
                _templateObject2 ||
                  (_templateObject2 = _taggedTemplateLiteral([
                    '<div class="error">âš ï¸</div>',
                  ]))
              )
            : void 0,
          this.controls ? this.renderControls() : void 0
        );
      }
      firstUpdated() {
        "IntersectionObserver" in window &&
          ((this._io = new IntersectionObserver((t) => {
            t[0].isIntersecting
              ? this.currentState === exports.PlayerState.Frozen && this.play()
              : this.currentState === exports.PlayerState.Playing &&
                this.freeze();
          })),
          this._io.observe(this.container)),
          void 0 !== document.hidden &&
            document.addEventListener("visibilitychange", () =>
              this._onVisibilityChange()
            ),
          this.src && this.load(this.src),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Rendered));
      }
      renderControls() {
        var t = this.currentState === exports.PlayerState.Playing,
          e = this.currentState === exports.PlayerState.Paused,
          r = this.currentState === exports.PlayerState.Stopped;
        return y(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteral([
              '\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ',
              '\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',
              "\n          @input=",
              "\n          @mousedown=",
              "\n          @mouseup=",
              '\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=',
              '\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',
              "\n          class=",
              '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    ',
            ])),
          this.togglePlay,
          t || e ? "active" : "",
          y(
            t
              ? _templateObject4 ||
                  (_templateObject4 = _taggedTemplateLiteral([
                    '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>',
                  ]))
              : _templateObject5 ||
                  (_templateObject5 = _taggedTemplateLiteral([
                    '<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>',
                  ]))
          ),
          this.stop,
          r ? "active" : "",
          this.seeker,
          this._handleSeekChange,
          () => {
            (this._prevState = this.currentState), this.freeze();
          },
          () => {
            this._prevState === exports.PlayerState.Playing && this.play();
          },
          this.seeker,
          this.toggleLooping,
          this.loop ? "active" : ""
        );
      }
      _onVisibilityChange() {
        !0 === document.hidden &&
        this.currentState === exports.PlayerState.Playing
          ? this.freeze()
          : this.currentState === exports.PlayerState.Frozen && this.play();
      }
      _handleSeekChange(t) {
        if (this._lottie && !isNaN(t.target.value)) {
          var e = (t.target.value / 100) * this._lottie.totalFrames;
          this.seek(e);
        }
      }
      _attachEventListeners() {
        this._lottie.addEventListener("enterFrame", () => {
          (this.seeker =
            (this._lottie.currentFrame / this._lottie.totalFrames) * 100),
            this.dispatchEvent(
              new CustomEvent(exports.PlayerEvents.Frame, {
                detail: {
                  frame: this._lottie.currentFrame,
                  seeker: this.seeker,
                },
              })
            );
        }),
          this._lottie.addEventListener("complete", () => {
            if (this.currentState === exports.PlayerState.Playing) {
              if (!this.loop || (this.count && this._counter >= this.count)) {
                if (
                  (this.dispatchEvent(
                    new CustomEvent(exports.PlayerEvents.Complete)
                  ),
                  this.mode !== exports.PlayMode.Bounce)
                )
                  return;
                if (0 === this._lottie.currentFrame) return;
              }
              this.mode === exports.PlayMode.Bounce
                ? (this.count && (this._counter += 0.5),
                  setTimeout(() => {
                    this.dispatchEvent(
                      new CustomEvent(exports.PlayerEvents.Loop)
                    ),
                      this.currentState === exports.PlayerState.Playing &&
                        (this._lottie.setDirection(
                          -1 * this._lottie.playDirection
                        ),
                        this._lottie.play());
                  }, this.intermission))
                : (this.count && (this._counter += 1),
                  window.setTimeout(() => {
                    this.dispatchEvent(
                      new CustomEvent(exports.PlayerEvents.Loop)
                    ),
                      this.currentState === exports.PlayerState.Playing &&
                        (-1 === this.direction
                          ? (this.seek("99%"), this.play())
                          : (this._lottie.stop(), this._lottie.play()));
                  }, this.intermission));
            } else
              this.dispatchEvent(
                new CustomEvent(exports.PlayerEvents.Complete)
              );
          }),
          this._lottie.addEventListener("DOMLoaded", () => {
            this.setSpeed(this.speed),
              this.setDirection(this.direction),
              this.autoplay &&
                (-1 === this.direction && this.seek("100%"), this.play()),
              this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Ready));
          }),
          this._lottie.addEventListener("data_ready", () => {
            this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Load));
          }),
          this._lottie.addEventListener("data_failed", () => {
            (this.currentState = exports.PlayerState.Error),
              this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Error));
          }),
          this.container.addEventListener("mouseenter", () => {
            this.hover &&
              this.currentState !== exports.PlayerState.Playing &&
              this.play();
          }),
          this.container.addEventListener("mouseleave", () => {
            this.hover &&
              this.currentState === exports.PlayerState.Playing &&
              this.stop();
          });
      }
      freeze() {
        this._lottie &&
          (this._lottie.pause(),
          (this.currentState = exports.PlayerState.Frozen),
          this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Freeze)));
      }
    }),
    __decorate(
      [e$5({ type: Boolean })],
      exports.LottiePlayer.prototype,
      "autoplay",
      void 0
    ),
    __decorate(
      [e$5({ type: String, reflect: !0 })],
      exports.LottiePlayer.prototype,
      "background",
      void 0
    ),
    __decorate(
      [e$5({ type: Boolean })],
      exports.LottiePlayer.prototype,
      "controls",
      void 0
    ),
    __decorate(
      [e$5({ type: Number })],
      exports.LottiePlayer.prototype,
      "count",
      void 0
    ),
    __decorate(
      [e$5({ type: String })],
      exports.LottiePlayer.prototype,
      "currentState",
      void 0
    ),
    __decorate(
      [e$5({ type: String })],
      exports.LottiePlayer.prototype,
      "description",
      void 0
    ),
    __decorate(
      [e$5({ type: Number })],
      exports.LottiePlayer.prototype,
      "direction",
      void 0
    ),
    __decorate(
      [e$5({ type: Boolean })],
      exports.LottiePlayer.prototype,
      "disableCheck",
      void 0
    ),
    __decorate(
      [e$5({ type: Boolean })],
      exports.LottiePlayer.prototype,
      "hover",
      void 0
    ),
    __decorate([e$5()], exports.LottiePlayer.prototype, "intermission", void 0),
    __decorate(
      [e$5({ type: Boolean, reflect: !0 })],
      exports.LottiePlayer.prototype,
      "loop",
      void 0
    ),
    __decorate([e$5()], exports.LottiePlayer.prototype, "mode", void 0),
    __decorate(
      [e$5({ type: String })],
      exports.LottiePlayer.prototype,
      "preserveAspectRatio",
      void 0
    ),
    __decorate(
      [e$5({ type: String })],
      exports.LottiePlayer.prototype,
      "renderer",
      void 0
    ),
    __decorate([e$5()], exports.LottiePlayer.prototype, "seeker", void 0),
    __decorate(
      [e$5({ type: Number })],
      exports.LottiePlayer.prototype,
      "speed",
      void 0
    ),
    __decorate(
      [e$5({ type: String })],
      exports.LottiePlayer.prototype,
      "src",
      void 0
    ),
    __decorate(
      [e$5({ type: Boolean })],
      exports.LottiePlayer.prototype,
      "webworkers",
      void 0
    ),
    __decorate(
      [i(".animation")],
      exports.LottiePlayer.prototype,
      "container",
      void 0
    ),
    (exports.LottiePlayer = __decorate(
      [e$6("lottie-player")],
      exports.LottiePlayer
    )),
    (exports.parseSrc = parseSrc),
    Object.defineProperty(exports, "__esModule", { value: !0 });
});
//# sourceMappingURL=lottie-player.js.map
