import { toRef as ne, readonly as pi, customRef as mi, ref as ce, getCurrentScope as yi, onScopeDispose as Wt, unref as P, isRef as xi, toRefs as Nr, watch as ve, computed as ie, getCurrentInstance as hn, onMounted as Ze, markRaw as dt, nextTick as ft, onBeforeMount as Cr, defineComponent as we, openBlock as le, createElementBlock as de, normalizeClass as yt, renderSlot as Ne, h as ue, provide as xt, onBeforeUnmount as wi, normalizeStyle as tt, createCommentVNode as Fe, createElementVNode as Tt, mergeProps as kr, createBlock as wt, resolveDynamicComponent as Mr, Fragment as Ge, createTextVNode as $r, toDisplayString as Un, Teleport as Tr, inject as We, reactive as Or, effectScope as Ir, renderList as Ot, resolveComponent as _i, createVNode as Le, watchEffect as Co, withCtx as je, useSlots as Ar, onUnmounted as Dr } from "vue";
function Rt(e) {
  return yi() ? (Wt(e), !0) : !1;
}
function re(e) {
  return typeof e == "function" ? e() : P(e);
}
const bi = typeof window < "u", Pr = (e) => typeof e < "u", Ei = () => {
};
function zr(e, t) {
  function n(...o) {
    return new Promise((i, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(i).catch(r);
    });
  }
  return n;
}
const Si = (e) => e();
function Br(e = Si) {
  const t = ce(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const i = (...r) => {
    t.value && e(...r);
  };
  return { isActive: pi(t), pause: n, resume: o, eventFilter: i };
}
function ko(e, t = !1, n = "Timeout") {
  return new Promise((o, i) => {
    setTimeout(t ? () => i(n) : o, e);
  });
}
function Qt(...e) {
  if (e.length !== 1)
    return ne(...e);
  const t = e[0];
  return typeof t == "function" ? pi(mi(() => ({ get: t, set: Ei }))) : ce(t);
}
var Rr = Object.defineProperty, Vr = Object.defineProperties, Hr = Object.getOwnPropertyDescriptors, Mo = Object.getOwnPropertySymbols, Lr = Object.prototype.hasOwnProperty, Fr = Object.prototype.propertyIsEnumerable, $o = (e, t, n) => t in e ? Rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gr = (e, t) => {
  for (var n in t || (t = {}))
    Lr.call(t, n) && $o(e, n, t[n]);
  if (Mo)
    for (var n of Mo(t))
      Fr.call(t, n) && $o(e, n, t[n]);
  return e;
}, Yr = (e, t) => Vr(e, Hr(t));
function Xr(e) {
  if (!xi(e))
    return Nr(e);
  const t = Array.isArray(e.value) ? new Array(e.value.length) : {};
  for (const n in e.value)
    t[n] = mi(() => ({
      get() {
        return e.value[n];
      },
      set(o) {
        if (Array.isArray(e.value)) {
          const i = [...e.value];
          i[n] = o, e.value = i;
        } else {
          const i = Yr(Gr({}, e.value), { [n]: o });
          Object.setPrototypeOf(i, e.value), e.value = i;
        }
      }
    }));
  return t;
}
function Zn(e, t = !1) {
  function n(f, { flush: g = "sync", deep: m = !1, timeout: h, throwOnTimeout: d } = {}) {
    let w = null;
    const b = [new Promise((C) => {
      w = ve(
        e,
        (v) => {
          f(v) !== t && (w == null || w(), C(v));
        },
        {
          flush: g,
          deep: m,
          immediate: !0
        }
      );
    })];
    return h != null && b.push(
      ko(h, d).then(() => re(e)).finally(() => w == null ? void 0 : w())
    ), Promise.race(b);
  }
  function o(f, g) {
    if (!xi(f))
      return n((v) => v === f, g);
    const { flush: m = "sync", deep: h = !1, timeout: d, throwOnTimeout: w } = g ?? {};
    let p = null;
    const C = [new Promise((v) => {
      p = ve(
        [e, f],
        ([N, y]) => {
          t !== (N === y) && (p == null || p(), v(N));
        },
        {
          flush: m,
          deep: h,
          immediate: !0
        }
      );
    })];
    return d != null && C.push(
      ko(d, w).then(() => re(e)).finally(() => (p == null || p(), re(e)))
    ), Promise.race(C);
  }
  function i(f) {
    return n((g) => !!g, f);
  }
  function r(f) {
    return o(null, f);
  }
  function l(f) {
    return o(void 0, f);
  }
  function a(f) {
    return n(Number.isNaN, f);
  }
  function s(f, g) {
    return n((m) => {
      const h = Array.from(m);
      return h.includes(f) || h.includes(re(f));
    }, g);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, g) {
    let m = -1;
    return n(() => (m += 1, m >= f), g);
  }
  return Array.isArray(re(e)) ? {
    toMatch: n,
    toContains: s,
    changed: u,
    changedTimes: c,
    get not() {
      return Zn(e, !t);
    }
  } : {
    toMatch: n,
    toBe: o,
    toBeTruthy: i,
    toBeNull: r,
    toBeNaN: a,
    toBeUndefined: l,
    changed: u,
    changedTimes: c,
    get not() {
      return Zn(e, !t);
    }
  };
}
function Se(e) {
  return Zn(e);
}
var To = Object.getOwnPropertySymbols, Ur = Object.prototype.hasOwnProperty, Zr = Object.prototype.propertyIsEnumerable, Wr = (e, t) => {
  var n = {};
  for (var o in e)
    Ur.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && To)
    for (var o of To(e))
      t.indexOf(o) < 0 && Zr.call(e, o) && (n[o] = e[o]);
  return n;
};
function Kr(e, t, n = {}) {
  const o = n, {
    eventFilter: i = Si
  } = o, r = Wr(o, [
    "eventFilter"
  ]);
  return ve(
    e,
    zr(
      i,
      t
    ),
    r
  );
}
var qr = Object.defineProperty, jr = Object.defineProperties, Jr = Object.getOwnPropertyDescriptors, en = Object.getOwnPropertySymbols, Ni = Object.prototype.hasOwnProperty, Ci = Object.prototype.propertyIsEnumerable, Oo = (e, t, n) => t in e ? qr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qr = (e, t) => {
  for (var n in t || (t = {}))
    Ni.call(t, n) && Oo(e, n, t[n]);
  if (en)
    for (var n of en(t))
      Ci.call(t, n) && Oo(e, n, t[n]);
  return e;
}, el = (e, t) => jr(e, Jr(t)), tl = (e, t) => {
  var n = {};
  for (var o in e)
    Ni.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && en)
    for (var o of en(e))
      t.indexOf(o) < 0 && Ci.call(e, o) && (n[o] = e[o]);
  return n;
};
function at(e, t, n = {}) {
  const o = n, {
    eventFilter: i
  } = o, r = tl(o, [
    "eventFilter"
  ]), { eventFilter: l, pause: a, resume: s, isActive: u } = Br(i);
  return { stop: Kr(
    e,
    t,
    el(Qr({}, r), {
      eventFilter: l
    })
  ), pause: a, resume: s, isActive: u };
}
function Wn(e) {
  var t;
  const n = re(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const so = bi ? window : void 0;
function uo(...e) {
  let t, n, o, i;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, i] = e, t = so) : [t, n, o, i] = e, !t)
    return Ei;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, f, g, m) => (c.addEventListener(f, g, m), () => c.removeEventListener(f, g, m)), s = ve(
    () => [Wn(t), re(i)],
    ([c, f]) => {
      l(), c && r.push(
        ...n.flatMap((g) => o.map((m) => a(c, g, m, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    s(), l();
  };
  return Rt(u), u;
}
function nl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Io(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: i = so,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: a = !1
  } = o, s = nl(t);
  return uo(i, r, (c) => {
    c.repeat && re(a) || s(c) && n(c);
  }, l);
}
function ol() {
  const e = ce(!1);
  return hn() && Ze(() => {
    e.value = !0;
  }), e;
}
function il(e) {
  const t = ol();
  return ie(() => (t.value, !!e()));
}
function rl(e) {
  return JSON.parse(JSON.stringify(e));
}
var Ao = Object.getOwnPropertySymbols, ll = Object.prototype.hasOwnProperty, al = Object.prototype.propertyIsEnumerable, sl = (e, t) => {
  var n = {};
  for (var o in e)
    ll.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ao)
    for (var o of Ao(e))
      t.indexOf(o) < 0 && al.call(e, o) && (n[o] = e[o]);
  return n;
};
function ul(e, t, n = {}) {
  const o = n, { window: i = so } = o, r = sl(o, ["window"]);
  let l;
  const a = il(() => i && "ResizeObserver" in i), s = () => {
    l && (l.disconnect(), l = void 0);
  }, u = ie(
    () => Array.isArray(e) ? e.map((g) => Wn(g)) : [Wn(e)]
  ), c = ve(
    u,
    (g) => {
      if (s(), a.value && i) {
        l = new ResizeObserver(t);
        for (const m of g)
          m && l.observe(m, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    s(), c();
  };
  return Rt(f), {
    isSupported: a,
    stop: f
  };
}
function Mt(e, t, n, o = {}) {
  var i, r, l;
  const {
    clone: a = !1,
    passive: s = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: g
  } = o, m = hn(), h = n || (m == null ? void 0 : m.emit) || ((i = m == null ? void 0 : m.$emit) == null ? void 0 : i.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let d = u;
  t || (t = "modelValue"), d = u || d || `update:${t.toString()}`;
  const w = (C) => a ? typeof a == "function" ? a(C) : rl(C) : C, p = () => Pr(e[t]) ? w(e[t]) : f, b = (C) => {
    g ? g(C) && h(d, C) : h(d, C);
  };
  if (s) {
    const C = p(), v = ce(C);
    return ve(
      () => e[t],
      (N) => v.value = w(N)
    ), ve(
      v,
      (N) => {
        (N !== e[t] || c) && b(N);
      },
      { deep: c }
    ), v;
  } else
    return ie({
      get() {
        return p();
      },
      set(C) {
        b(C);
      }
    });
}
var cl = { value: () => {
} };
function gn() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o))
      throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Kt(n);
}
function Kt(e) {
  this._ = e;
}
function dl(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Kt.prototype = gn.prototype = {
  constructor: Kt,
  on: function(e, t) {
    var n = this._, o = dl(e + "", n), i, r = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++r < l; )
        if ((i = (e = o[r]).type) && (i = fl(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++r < l; )
      if (i = (e = o[r]).type)
        n[i] = Do(n[i], e.name, t);
      else if (t == null)
        for (i in n)
          n[i] = Do(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Kt(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), o = 0, i, r; o < i; ++o)
        n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var o = this._[e], i = 0, r = o.length; i < r; ++i)
      o[i].value.apply(t, n);
  }
};
function fl(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Do(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = cl, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Kn = "http://www.w3.org/1999/xhtml";
const Po = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Kn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function vn(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Po.hasOwnProperty(t) ? { space: Po[t], local: e } : e;
}
function hl(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Kn && t.documentElement.namespaceURI === Kn ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function gl(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ki(e) {
  var t = vn(e);
  return (t.local ? gl : hl)(t);
}
function vl() {
}
function co(e) {
  return e == null ? vl : function() {
    return this.querySelector(e);
  };
}
function pl(e) {
  typeof e != "function" && (e = co(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], l = r.length, a = o[i] = new Array(l), s, u, c = 0; c < l; ++c)
      (s = r[c]) && (u = e.call(s, s.__data__, c, r)) && ("__data__" in s && (u.__data__ = s.__data__), a[c] = u);
  return new Ce(o, this._parents);
}
function ml(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function yl() {
  return [];
}
function Mi(e) {
  return e == null ? yl : function() {
    return this.querySelectorAll(e);
  };
}
function xl(e) {
  return function() {
    return ml(e.apply(this, arguments));
  };
}
function wl(e) {
  typeof e == "function" ? e = xl(e) : e = Mi(e);
  for (var t = this._groups, n = t.length, o = [], i = [], r = 0; r < n; ++r)
    for (var l = t[r], a = l.length, s, u = 0; u < a; ++u)
      (s = l[u]) && (o.push(e.call(s, s.__data__, u, l)), i.push(s));
  return new Ce(o, i);
}
function $i(e) {
  return function() {
    return this.matches(e);
  };
}
function Ti(e) {
  return function(t) {
    return t.matches(e);
  };
}
var _l = Array.prototype.find;
function bl(e) {
  return function() {
    return _l.call(this.children, e);
  };
}
function El() {
  return this.firstElementChild;
}
function Sl(e) {
  return this.select(e == null ? El : bl(typeof e == "function" ? e : Ti(e)));
}
var Nl = Array.prototype.filter;
function Cl() {
  return Array.from(this.children);
}
function kl(e) {
  return function() {
    return Nl.call(this.children, e);
  };
}
function Ml(e) {
  return this.selectAll(e == null ? Cl : kl(typeof e == "function" ? e : Ti(e)));
}
function $l(e) {
  typeof e != "function" && (e = $i(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], l = r.length, a = o[i] = [], s, u = 0; u < l; ++u)
      (s = r[u]) && e.call(s, s.__data__, u, r) && a.push(s);
  return new Ce(o, this._parents);
}
function Oi(e) {
  return new Array(e.length);
}
function Tl() {
  return new Ce(this._enter || this._groups.map(Oi), this._parents);
}
function tn(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
tn.prototype = {
  constructor: tn,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Ol(e) {
  return function() {
    return e;
  };
}
function Il(e, t, n, o, i, r) {
  for (var l = 0, a, s = t.length, u = r.length; l < u; ++l)
    (a = t[l]) ? (a.__data__ = r[l], o[l] = a) : n[l] = new tn(e, r[l]);
  for (; l < s; ++l)
    (a = t[l]) && (i[l] = a);
}
function Al(e, t, n, o, i, r, l) {
  var a, s, u = /* @__PURE__ */ new Map(), c = t.length, f = r.length, g = new Array(c), m;
  for (a = 0; a < c; ++a)
    (s = t[a]) && (g[a] = m = l.call(s, s.__data__, a, t) + "", u.has(m) ? i[a] = s : u.set(m, s));
  for (a = 0; a < f; ++a)
    m = l.call(e, r[a], a, r) + "", (s = u.get(m)) ? (o[a] = s, s.__data__ = r[a], u.delete(m)) : n[a] = new tn(e, r[a]);
  for (a = 0; a < c; ++a)
    (s = t[a]) && u.get(g[a]) === s && (i[a] = s);
}
function Dl(e) {
  return e.__data__;
}
function Pl(e, t) {
  if (!arguments.length)
    return Array.from(this, Dl);
  var n = t ? Al : Il, o = this._parents, i = this._groups;
  typeof e != "function" && (e = Ol(e));
  for (var r = i.length, l = new Array(r), a = new Array(r), s = new Array(r), u = 0; u < r; ++u) {
    var c = o[u], f = i[u], g = f.length, m = zl(e.call(c, c && c.__data__, u, o)), h = m.length, d = a[u] = new Array(h), w = l[u] = new Array(h), p = s[u] = new Array(g);
    n(c, f, d, w, p, m, t);
    for (var b = 0, C = 0, v, N; b < h; ++b)
      if (v = d[b]) {
        for (b >= C && (C = b + 1); !(N = w[C]) && ++C < h; )
          ;
        v._next = N || null;
      }
  }
  return l = new Ce(l, o), l._enter = a, l._exit = s, l;
}
function zl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Bl() {
  return new Ce(this._exit || this._groups.map(Oi), this._parents);
}
function Rl(e, t, n) {
  var o = this.enter(), i = this, r = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? r.remove() : n(r), o && i ? o.merge(i).order() : i;
}
function Vl(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, r = o.length, l = Math.min(i, r), a = new Array(i), s = 0; s < l; ++s)
    for (var u = n[s], c = o[s], f = u.length, g = a[s] = new Array(f), m, h = 0; h < f; ++h)
      (m = u[h] || c[h]) && (g[h] = m);
  for (; s < i; ++s)
    a[s] = n[s];
  return new Ce(a, this._parents);
}
function Hl() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, r = o[i], l; --i >= 0; )
      (l = o[i]) && (r && l.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(l, r), r = l);
  return this;
}
function Ll(e) {
  e || (e = Fl);
  function t(f, g) {
    return f && g ? e(f.__data__, g.__data__) : !f - !g;
  }
  for (var n = this._groups, o = n.length, i = new Array(o), r = 0; r < o; ++r) {
    for (var l = n[r], a = l.length, s = i[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = l[c]) && (s[c] = u);
    s.sort(t);
  }
  return new Ce(i, this._parents).order();
}
function Fl(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Gl() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Yl() {
  return Array.from(this);
}
function Xl() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length; i < r; ++i) {
      var l = o[i];
      if (l)
        return l;
    }
  return null;
}
function Ul() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Zl() {
  return !this.node();
}
function Wl(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], r = 0, l = i.length, a; r < l; ++r)
      (a = i[r]) && e.call(a, a.__data__, r, i);
  return this;
}
function Kl(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ql(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function jl(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Jl(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ql(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ea(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ta(e, t) {
  var n = vn(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ql : Kl : typeof t == "function" ? n.local ? ea : Ql : n.local ? Jl : jl)(n, t));
}
function Ii(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function na(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function oa(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function ia(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function ra(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? na : typeof t == "function" ? ia : oa)(e, t, n ?? "")) : _t(this.node(), e);
}
function _t(e, t) {
  return e.style.getPropertyValue(t) || Ii(e).getComputedStyle(e, null).getPropertyValue(t);
}
function la(e) {
  return function() {
    delete this[e];
  };
}
function aa(e, t) {
  return function() {
    this[e] = t;
  };
}
function sa(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ua(e, t) {
  return arguments.length > 1 ? this.each((t == null ? la : typeof t == "function" ? sa : aa)(e, t)) : this.node()[e];
}
function Ai(e) {
  return e.trim().split(/^|\s+/);
}
function fo(e) {
  return e.classList || new Di(e);
}
function Di(e) {
  this._node = e, this._names = Ai(e.getAttribute("class") || "");
}
Di.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Pi(e, t) {
  for (var n = fo(e), o = -1, i = t.length; ++o < i; )
    n.add(t[o]);
}
function zi(e, t) {
  for (var n = fo(e), o = -1, i = t.length; ++o < i; )
    n.remove(t[o]);
}
function ca(e) {
  return function() {
    Pi(this, e);
  };
}
function da(e) {
  return function() {
    zi(this, e);
  };
}
function fa(e, t) {
  return function() {
    (t.apply(this, arguments) ? Pi : zi)(this, e);
  };
}
function ha(e, t) {
  var n = Ai(e + "");
  if (arguments.length < 2) {
    for (var o = fo(this.node()), i = -1, r = n.length; ++i < r; )
      if (!o.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? fa : t ? ca : da)(n, t));
}
function ga() {
  this.textContent = "";
}
function va(e) {
  return function() {
    this.textContent = e;
  };
}
function pa(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ma(e) {
  return arguments.length ? this.each(e == null ? ga : (typeof e == "function" ? pa : va)(e)) : this.node().textContent;
}
function ya() {
  this.innerHTML = "";
}
function xa(e) {
  return function() {
    this.innerHTML = e;
  };
}
function wa(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function _a(e) {
  return arguments.length ? this.each(e == null ? ya : (typeof e == "function" ? wa : xa)(e)) : this.node().innerHTML;
}
function ba() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ea() {
  return this.each(ba);
}
function Sa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Na() {
  return this.each(Sa);
}
function Ca(e) {
  var t = typeof e == "function" ? e : ki(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ka() {
  return null;
}
function Ma(e, t) {
  var n = typeof e == "function" ? e : ki(e), o = t == null ? ka : typeof t == "function" ? t : co(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function $a() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ta() {
  return this.each($a);
}
function Oa() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ia() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Aa(e) {
  return this.select(e ? Ia : Oa);
}
function Da(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Pa(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function za(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function Ba(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, r; n < i; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++o] = r;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function Ra(e, t, n) {
  return function() {
    var o = this.__on, i, r = Pa(t);
    if (o) {
      for (var l = 0, a = o.length; l < a; ++l)
        if ((i = o[l]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = r, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), i = { type: e.type, name: e.name, value: t, listener: r, options: n }, o ? o.push(i) : this.__on = [i];
  };
}
function Va(e, t, n) {
  var o = za(e + ""), i, r = o.length, l;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var s = 0, u = a.length, c; s < u; ++s)
        for (i = 0, c = a[s]; i < r; ++i)
          if ((l = o[i]).type === c.type && l.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? Ra : Ba, i = 0; i < r; ++i)
    this.each(a(o[i], t, n));
  return this;
}
function Bi(e, t, n) {
  var o = Ii(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Ha(e, t) {
  return function() {
    return Bi(this, e, t);
  };
}
function La(e, t) {
  return function() {
    return Bi(this, e, t.apply(this, arguments));
  };
}
function Fa(e, t) {
  return this.each((typeof t == "function" ? La : Ha)(e, t));
}
function* Ga() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length, l; i < r; ++i)
      (l = o[i]) && (yield l);
}
var Ri = [null];
function Ce(e, t) {
  this._groups = e, this._parents = t;
}
function Vt() {
  return new Ce([[document.documentElement]], Ri);
}
function Ya() {
  return this;
}
Ce.prototype = Vt.prototype = {
  constructor: Ce,
  select: pl,
  selectAll: wl,
  selectChild: Sl,
  selectChildren: Ml,
  filter: $l,
  data: Pl,
  enter: Tl,
  exit: Bl,
  join: Rl,
  merge: Vl,
  selection: Ya,
  order: Hl,
  sort: Ll,
  call: Gl,
  nodes: Yl,
  node: Xl,
  size: Ul,
  empty: Zl,
  each: Wl,
  attr: ta,
  style: ra,
  property: ua,
  classed: ha,
  text: ma,
  html: _a,
  raise: Ea,
  lower: Na,
  append: Ca,
  insert: Ma,
  remove: Ta,
  clone: Aa,
  datum: Da,
  on: Va,
  dispatch: Fa,
  [Symbol.iterator]: Ga
};
function Me(e) {
  return typeof e == "string" ? new Ce([[document.querySelector(e)]], [document.documentElement]) : new Ce([[e]], Ri);
}
function Xa(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Oe(e, t) {
  if (e = Xa(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Ua = { passive: !1 }, It = { capture: !0, passive: !1 };
function In(e) {
  e.stopImmediatePropagation();
}
function ht(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Vi(e) {
  var t = e.document.documentElement, n = Me(e).on("dragstart.drag", ht, It);
  "onselectstart" in t ? n.on("selectstart.drag", ht, It) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Hi(e, t) {
  var n = e.document.documentElement, o = Me(e).on("dragstart.drag", null);
  t && (o.on("click.drag", ht, It), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Lt = (e) => () => e;
function qn(e, {
  sourceEvent: t,
  subject: n,
  target: o,
  identifier: i,
  active: r,
  x: l,
  y: a,
  dx: s,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: r, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: s, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
qn.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Za(e) {
  return !e.ctrlKey && !e.button;
}
function Wa() {
  return this.parentNode;
}
function Ka(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ja() {
  var e = Za, t = Wa, n = Ka, o = qa, i = {}, r = gn("start", "drag", "end"), l = 0, a, s, u, c, f = 0;
  function g(v) {
    v.on("mousedown.drag", m).filter(o).on("touchstart.drag", w).on("touchmove.drag", p, Ua).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m(v, N) {
    if (!(c || !e.call(this, v, N))) {
      var y = C(this, t.call(this, v, N), v, N, "mouse");
      y && (Me(v.view).on("mousemove.drag", h, It).on("mouseup.drag", d, It), Vi(v.view), In(v), u = !1, a = v.clientX, s = v.clientY, y("start", v));
    }
  }
  function h(v) {
    if (ht(v), !u) {
      var N = v.clientX - a, y = v.clientY - s;
      u = N * N + y * y > f;
    }
    i.mouse("drag", v);
  }
  function d(v) {
    Me(v.view).on("mousemove.drag mouseup.drag", null), Hi(v.view, u), ht(v), i.mouse("end", v);
  }
  function w(v, N) {
    if (e.call(this, v, N)) {
      var y = v.changedTouches, D = t.call(this, v, N), R = y.length, Y, z;
      for (Y = 0; Y < R; ++Y)
        (z = C(this, D, v, N, y[Y].identifier, y[Y])) && (In(v), z("start", v, y[Y]));
    }
  }
  function p(v) {
    var N = v.changedTouches, y = N.length, D, R;
    for (D = 0; D < y; ++D)
      (R = i[N[D].identifier]) && (ht(v), R("drag", v, N[D]));
  }
  function b(v) {
    var N = v.changedTouches, y = N.length, D, R;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), D = 0; D < y; ++D)
      (R = i[N[D].identifier]) && (In(v), R("end", v, N[D]));
  }
  function C(v, N, y, D, R, Y) {
    var z = r.copy(), J = Oe(Y || y, N), W, ee, x;
    if ((x = n.call(v, new qn("beforestart", {
      sourceEvent: y,
      target: g,
      identifier: R,
      active: l,
      x: J[0],
      y: J[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), D)) != null)
      return W = x.x - J[0] || 0, ee = x.y - J[1] || 0, function k(E, O, L) {
        var Z = J, $;
        switch (E) {
          case "start":
            i[R] = k, $ = l++;
            break;
          case "end":
            delete i[R], --l;
          case "drag":
            J = Oe(L || O, N), $ = l;
            break;
        }
        z.call(
          E,
          v,
          new qn(E, {
            sourceEvent: O,
            subject: x,
            target: g,
            identifier: R,
            active: $,
            x: J[0] + W,
            y: J[1] + ee,
            dx: J[0] - Z[0],
            dy: J[1] - Z[1],
            dispatch: z
          }),
          D
        );
      };
  }
  return g.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : Lt(!!v), g) : e;
  }, g.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : Lt(v), g) : t;
  }, g.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : Lt(v), g) : n;
  }, g.touchable = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : Lt(!!v), g) : o;
  }, g.on = function() {
    var v = r.on.apply(r, arguments);
    return v === r ? g : v;
  }, g.clickDistance = function(v) {
    return arguments.length ? (f = (v = +v) * v, g) : Math.sqrt(f);
  }, g;
}
function ho(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Li(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t)
    n[o] = t[o];
  return n;
}
function Ht() {
}
var At = 0.7, nn = 1 / At, gt = "\\s*([+-]?\\d+)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ie = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ja = /^#([0-9a-f]{3,8})$/, Qa = new RegExp(`^rgb\\(${gt},${gt},${gt}\\)$`), es = new RegExp(`^rgb\\(${Ie},${Ie},${Ie}\\)$`), ts = new RegExp(`^rgba\\(${gt},${gt},${gt},${Dt}\\)$`), ns = new RegExp(`^rgba\\(${Ie},${Ie},${Ie},${Dt}\\)$`), os = new RegExp(`^hsl\\(${Dt},${Ie},${Ie}\\)$`), is = new RegExp(`^hsla\\(${Dt},${Ie},${Ie},${Dt}\\)$`), zo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ho(Ht, Pt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bo,
  // Deprecated! Use color.formatHex.
  formatHex: Bo,
  formatHex8: rs,
  formatHsl: ls,
  formatRgb: Ro,
  toString: Ro
});
function Bo() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function ls() {
  return Fi(this).formatHsl();
}
function Ro() {
  return this.rgb().formatRgb();
}
function Pt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ja.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Vo(t) : n === 3 ? new be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ft(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ft(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qa.exec(e)) ? new be(t[1], t[2], t[3], 1) : (t = es.exec(e)) ? new be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ts.exec(e)) ? Ft(t[1], t[2], t[3], t[4]) : (t = ns.exec(e)) ? Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = os.exec(e)) ? Fo(t[1], t[2] / 100, t[3] / 100, 1) : (t = is.exec(e)) ? Fo(t[1], t[2] / 100, t[3] / 100, t[4]) : zo.hasOwnProperty(e) ? Vo(zo[e]) : e === "transparent" ? new be(NaN, NaN, NaN, 0) : null;
}
function Vo(e) {
  return new be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ft(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new be(e, t, n, o);
}
function as(e) {
  return e instanceof Ht || (e = Pt(e)), e ? (e = e.rgb(), new be(e.r, e.g, e.b, e.opacity)) : new be();
}
function jn(e, t, n, o) {
  return arguments.length === 1 ? as(e) : new be(e, t, n, o ?? 1);
}
function be(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
ho(be, jn, Li(Ht, {
  brighter(e) {
    return e = e == null ? nn : Math.pow(nn, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? At : Math.pow(At, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new be(et(this.r), et(this.g), et(this.b), on(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ho,
  // Deprecated! Use color.formatHex.
  formatHex: Ho,
  formatHex8: ss,
  formatRgb: Lo,
  toString: Lo
}));
function Ho() {
  return `#${Je(this.r)}${Je(this.g)}${Je(this.b)}`;
}
function ss() {
  return `#${Je(this.r)}${Je(this.g)}${Je(this.b)}${Je((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Lo() {
  const e = on(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function on(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function et(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Je(e) {
  return e = et(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fo(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $e(e, t, n, o);
}
function Fi(e) {
  if (e instanceof $e)
    return new $e(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ht || (e = Pt(e)), !e)
    return new $e();
  if (e instanceof $e)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), r = Math.max(t, n, o), l = NaN, a = r - i, s = (r + i) / 2;
  return a ? (t === r ? l = (n - o) / a + (n < o) * 6 : n === r ? l = (o - t) / a + 2 : l = (t - n) / a + 4, a /= s < 0.5 ? r + i : 2 - r - i, l *= 60) : a = s > 0 && s < 1 ? 0 : l, new $e(l, a, s, e.opacity);
}
function us(e, t, n, o) {
  return arguments.length === 1 ? Fi(e) : new $e(e, t, n, o ?? 1);
}
function $e(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
ho($e, us, Li(Ht, {
  brighter(e) {
    return e = e == null ? nn : Math.pow(nn, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? At : Math.pow(At, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new be(
      An(e >= 240 ? e - 240 : e + 120, i, o),
      An(e, i, o),
      An(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new $e(Go(this.h), Gt(this.s), Gt(this.l), on(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = on(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Go(this.h)}, ${Gt(this.s) * 100}%, ${Gt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Go(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function An(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Gi = (e) => () => e;
function cs(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ds(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function fs(e) {
  return (e = +e) == 1 ? Yi : function(t, n) {
    return n - t ? ds(t, n, e) : Gi(isNaN(t) ? n : t);
  };
}
function Yi(e, t) {
  var n = t - e;
  return n ? cs(e, n) : Gi(isNaN(e) ? t : e);
}
const Yo = function e(t) {
  var n = fs(t);
  function o(i, r) {
    var l = n((i = jn(i)).r, (r = jn(r)).r), a = n(i.g, r.g), s = n(i.b, r.b), u = Yi(i.opacity, r.opacity);
    return function(c) {
      return i.r = l(c), i.g = a(c), i.b = s(c), i.opacity = u(c), i + "";
    };
  }
  return o.gamma = e, o;
}(1);
function Xe(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Jn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dn = new RegExp(Jn.source, "g");
function hs(e) {
  return function() {
    return e;
  };
}
function gs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vs(e, t) {
  var n = Jn.lastIndex = Dn.lastIndex = 0, o, i, r, l = -1, a = [], s = [];
  for (e = e + "", t = t + ""; (o = Jn.exec(e)) && (i = Dn.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), a[l] ? a[l] += r : a[++l] = r), (o = o[0]) === (i = i[0]) ? a[l] ? a[l] += i : a[++l] = i : (a[++l] = null, s.push({ i: l, x: Xe(o, i) })), n = Dn.lastIndex;
  return n < t.length && (r = t.slice(n), a[l] ? a[l] += r : a[++l] = r), a.length < 2 ? s[0] ? gs(s[0].x) : hs(t) : (t = s.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      a[(f = s[c]).i] = f.x(u);
    return a.join("");
  });
}
var Xo = 180 / Math.PI, Qn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xi(e, t, n, o, i, r) {
  var l, a, s;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (s = e * n + t * o) && (n -= e * s, o -= t * s), (a = Math.sqrt(n * n + o * o)) && (n /= a, o /= a, s /= a), e * o < t * n && (e = -e, t = -t, s = -s, l = -l), {
    translateX: i,
    translateY: r,
    rotate: Math.atan2(t, e) * Xo,
    skewX: Math.atan(s) * Xo,
    scaleX: l,
    scaleY: a
  };
}
var Yt;
function ps(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Qn : Xi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ms(e) {
  return e == null || (Yt || (Yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yt.setAttribute("transform", e), !(e = Yt.transform.baseVal.consolidate())) ? Qn : (e = e.matrix, Xi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ui(e, t, n, o) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function r(u, c, f, g, m, h) {
    if (u !== f || c !== g) {
      var d = m.push("translate(", null, t, null, n);
      h.push({ i: d - 4, x: Xe(u, f) }, { i: d - 2, x: Xe(c, g) });
    } else
      (f || g) && m.push("translate(" + f + t + g + n);
  }
  function l(u, c, f, g) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), g.push({ i: f.push(i(f) + "rotate(", null, o) - 2, x: Xe(u, c) })) : c && f.push(i(f) + "rotate(" + c + o);
  }
  function a(u, c, f, g) {
    u !== c ? g.push({ i: f.push(i(f) + "skewX(", null, o) - 2, x: Xe(u, c) }) : c && f.push(i(f) + "skewX(" + c + o);
  }
  function s(u, c, f, g, m, h) {
    if (u !== f || c !== g) {
      var d = m.push(i(m) + "scale(", null, ",", null, ")");
      h.push({ i: d - 4, x: Xe(u, f) }, { i: d - 2, x: Xe(c, g) });
    } else
      (f !== 1 || g !== 1) && m.push(i(m) + "scale(" + f + "," + g + ")");
  }
  return function(u, c) {
    var f = [], g = [];
    return u = e(u), c = e(c), r(u.translateX, u.translateY, c.translateX, c.translateY, f, g), l(u.rotate, c.rotate, f, g), a(u.skewX, c.skewX, f, g), s(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, g), u = c = null, function(m) {
      for (var h = -1, d = g.length, w; ++h < d; )
        f[(w = g[h]).i] = w.x(m);
      return f.join("");
    };
  };
}
var ys = Ui(ps, "px, ", "px)", "deg)"), xs = Ui(ms, ", ", ")", ")"), ws = 1e-12;
function Uo(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function _s(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bs(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Es = function e(t, n, o) {
  function i(r, l) {
    var a = r[0], s = r[1], u = r[2], c = l[0], f = l[1], g = l[2], m = c - a, h = f - s, d = m * m + h * h, w, p;
    if (d < ws)
      p = Math.log(g / u) / t, w = function(D) {
        return [
          a + D * m,
          s + D * h,
          u * Math.exp(t * D * p)
        ];
      };
    else {
      var b = Math.sqrt(d), C = (g * g - u * u + o * d) / (2 * u * n * b), v = (g * g - u * u - o * d) / (2 * g * n * b), N = Math.log(Math.sqrt(C * C + 1) - C), y = Math.log(Math.sqrt(v * v + 1) - v);
      p = (y - N) / t, w = function(D) {
        var R = D * p, Y = Uo(N), z = u / (n * b) * (Y * bs(t * R + N) - _s(N));
        return [
          a + z * m,
          s + z * h,
          u * Y / Uo(t * R + N)
        ];
      };
    }
    return w.duration = p * 1e3 * t / Math.SQRT2, w;
  }
  return i.rho = function(r) {
    var l = Math.max(1e-3, +r), a = l * l, s = a * a;
    return e(l, a, s);
  }, i;
}(Math.SQRT2, 2, 4);
var bt = 0, Ct = 0, St = 0, Zi = 1e3, rn, kt, ln = 0, nt = 0, pn = 0, zt = typeof performance == "object" && performance.now ? performance : Date, Wi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function go() {
  return nt || (Wi(Ss), nt = zt.now() + pn);
}
function Ss() {
  nt = 0;
}
function an() {
  this._call = this._time = this._next = null;
}
an.prototype = Ki.prototype = {
  constructor: an,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? go() : +n) + (t == null ? 0 : +t), !this._next && kt !== this && (kt ? kt._next = this : rn = this, kt = this), this._call = e, this._time = n, eo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, eo());
  }
};
function Ki(e, t, n) {
  var o = new an();
  return o.restart(e, t, n), o;
}
function Ns() {
  go(), ++bt;
  for (var e = rn, t; e; )
    (t = nt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bt;
}
function Zo() {
  nt = (ln = zt.now()) + pn, bt = Ct = 0;
  try {
    Ns();
  } finally {
    bt = 0, ks(), nt = 0;
  }
}
function Cs() {
  var e = zt.now(), t = e - ln;
  t > Zi && (pn -= t, ln = e);
}
function ks() {
  for (var e, t = rn, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : rn = n);
  kt = e, eo(o);
}
function eo(e) {
  if (!bt) {
    Ct && (Ct = clearTimeout(Ct));
    var t = e - nt;
    t > 24 ? (e < 1 / 0 && (Ct = setTimeout(Zo, e - zt.now() - pn)), St && (St = clearInterval(St))) : (St || (ln = zt.now(), St = setInterval(Cs, Zi)), bt = 1, Wi(Zo));
  }
}
function Wo(e, t, n) {
  var o = new an();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var Ms = gn("start", "end", "cancel", "interrupt"), $s = [], qi = 0, Ko = 1, to = 2, qt = 3, qo = 4, no = 5, jt = 6;
function mn(e, t, n, o, i, r) {
  var l = e.__transition;
  if (!l)
    e.__transition = {};
  else if (n in l)
    return;
  Ts(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ms,
    tween: $s,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: qi
  });
}
function vo(e, t) {
  var n = Te(e, t);
  if (n.state > qi)
    throw new Error("too late; already scheduled");
  return n;
}
function De(e, t) {
  var n = Te(e, t);
  if (n.state > qt)
    throw new Error("too late; already running");
  return n;
}
function Te(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Ts(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = Ki(r, 0, n.time);
  function r(u) {
    n.state = Ko, n.timer.restart(l, n.delay, n.time), n.delay <= u && l(u - n.delay);
  }
  function l(u) {
    var c, f, g, m;
    if (n.state !== Ko)
      return s();
    for (c in o)
      if (m = o[c], m.name === n.name) {
        if (m.state === qt)
          return Wo(l);
        m.state === qo ? (m.state = jt, m.timer.stop(), m.on.call("interrupt", e, e.__data__, m.index, m.group), delete o[c]) : +c < t && (m.state = jt, m.timer.stop(), m.on.call("cancel", e, e.__data__, m.index, m.group), delete o[c]);
      }
    if (Wo(function() {
      n.state === qt && (n.state = qo, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = to, n.on.call("start", e, e.__data__, n.index, n.group), n.state === to) {
      for (n.state = qt, i = new Array(g = n.tween.length), c = 0, f = -1; c < g; ++c)
        (m = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++f] = m);
      i.length = f + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(s), n.state = no, 1), f = -1, g = i.length; ++f < g; )
      i[f].call(e, c);
    n.state === no && (n.on.call("end", e, e.__data__, n.index, n.group), s());
  }
  function s() {
    n.state = jt, n.timer.stop(), delete o[t];
    for (var u in o)
      return;
    delete e.__transition;
  }
}
function Jt(e, t) {
  var n = e.__transition, o, i, r = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        r = !1;
        continue;
      }
      i = o.state > to && o.state < no, o.state = jt, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    r && delete e.__transition;
  }
}
function Os(e) {
  return this.each(function() {
    Jt(this, e);
  });
}
function Is(e, t) {
  var n, o;
  return function() {
    var i = De(this, e), r = i.tween;
    if (r !== n) {
      o = n = r;
      for (var l = 0, a = o.length; l < a; ++l)
        if (o[l].name === t) {
          o = o.slice(), o.splice(l, 1);
          break;
        }
    }
    i.tween = o;
  };
}
function As(e, t, n) {
  var o, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var r = De(this, e), l = r.tween;
    if (l !== o) {
      i = (o = l).slice();
      for (var a = { name: t, value: n }, s = 0, u = i.length; s < u; ++s)
        if (i[s].name === t) {
          i[s] = a;
          break;
        }
      s === u && i.push(a);
    }
    r.tween = i;
  };
}
function Ds(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = Te(this.node(), n).tween, i = 0, r = o.length, l; i < r; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? Is : As)(n, e, t));
}
function po(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = De(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Te(i, o).value[t];
  };
}
function ji(e, t) {
  var n;
  return (typeof t == "number" ? Xe : t instanceof Pt ? Yo : (n = Pt(t)) ? (t = n, Yo) : vs)(e, t);
}
function Ps(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zs(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Bs(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? r : r = t(o = l, n);
  };
}
function Rs(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? r : r = t(o = l, n);
  };
}
function Vs(e, t, n) {
  var o, i, r;
  return function() {
    var l, a = n(this), s;
    return a == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), s = a + "", l === s ? null : l === o && s === i ? r : (i = s, r = t(o = l, a)));
  };
}
function Hs(e, t, n) {
  var o, i, r;
  return function() {
    var l, a = n(this), s;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), s = a + "", l === s ? null : l === o && s === i ? r : (i = s, r = t(o = l, a)));
  };
}
function Ls(e, t) {
  var n = vn(e), o = n === "transform" ? xs : ji;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hs : Vs)(n, o, po(this, "attr." + e, t)) : t == null ? (n.local ? zs : Ps)(n) : (n.local ? Rs : Bs)(n, o, t));
}
function Fs(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Gs(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Ys(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && Gs(e, r)), n;
  }
  return i._value = t, i;
}
function Xs(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && Fs(e, r)), n;
  }
  return i._value = t, i;
}
function Us(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var o = vn(e);
  return this.tween(n, (o.local ? Ys : Xs)(o, t));
}
function Zs(e, t) {
  return function() {
    vo(this, e).delay = +t.apply(this, arguments);
  };
}
function Ws(e, t) {
  return t = +t, function() {
    vo(this, e).delay = t;
  };
}
function Ks(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zs : Ws)(t, e)) : Te(this.node(), t).delay;
}
function qs(e, t) {
  return function() {
    De(this, e).duration = +t.apply(this, arguments);
  };
}
function js(e, t) {
  return t = +t, function() {
    De(this, e).duration = t;
  };
}
function Js(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qs : js)(t, e)) : Te(this.node(), t).duration;
}
function Qs(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    De(this, e).ease = t;
  };
}
function eu(e) {
  var t = this._id;
  return arguments.length ? this.each(Qs(t, e)) : Te(this.node(), t).ease;
}
function tu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    De(this, e).ease = n;
  };
}
function nu(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(tu(this._id, e));
}
function ou(e) {
  typeof e != "function" && (e = $i(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], l = r.length, a = o[i] = [], s, u = 0; u < l; ++u)
      (s = r[u]) && e.call(s, s.__data__, u, r) && a.push(s);
  return new Ye(o, this._parents, this._name, this._id);
}
function iu(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, r = Math.min(o, i), l = new Array(o), a = 0; a < r; ++a)
    for (var s = t[a], u = n[a], c = s.length, f = l[a] = new Array(c), g, m = 0; m < c; ++m)
      (g = s[m] || u[m]) && (f[m] = g);
  for (; a < o; ++a)
    l[a] = t[a];
  return new Ye(l, this._parents, this._name, this._id);
}
function ru(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function lu(e, t, n) {
  var o, i, r = ru(t) ? vo : De;
  return function() {
    var l = r(this, e), a = l.on;
    a !== o && (i = (o = a).copy()).on(t, n), l.on = i;
  };
}
function au(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Te(this.node(), n).on.on(e) : this.each(lu(n, e, t));
}
function su(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function uu() {
  return this.on("end.remove", su(this._id));
}
function cu(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = co(e));
  for (var o = this._groups, i = o.length, r = new Array(i), l = 0; l < i; ++l)
    for (var a = o[l], s = a.length, u = r[l] = new Array(s), c, f, g = 0; g < s; ++g)
      (c = a[g]) && (f = e.call(c, c.__data__, g, a)) && ("__data__" in c && (f.__data__ = c.__data__), u[g] = f, mn(u[g], t, n, g, u, Te(c, n)));
  return new Ye(r, this._parents, t, n);
}
function du(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Mi(e));
  for (var o = this._groups, i = o.length, r = [], l = [], a = 0; a < i; ++a)
    for (var s = o[a], u = s.length, c, f = 0; f < u; ++f)
      if (c = s[f]) {
        for (var g = e.call(c, c.__data__, f, s), m, h = Te(c, n), d = 0, w = g.length; d < w; ++d)
          (m = g[d]) && mn(m, t, n, d, g, h);
        r.push(g), l.push(c);
      }
  return new Ye(r, l, t, n);
}
var fu = Vt.prototype.constructor;
function hu() {
  return new fu(this._groups, this._parents);
}
function gu(e, t) {
  var n, o, i;
  return function() {
    var r = _t(this, e), l = (this.style.removeProperty(e), _t(this, e));
    return r === l ? null : r === n && l === o ? i : i = t(n = r, o = l);
  };
}
function Ji(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vu(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var l = _t(this, e);
    return l === i ? null : l === o ? r : r = t(o = l, n);
  };
}
function pu(e, t, n) {
  var o, i, r;
  return function() {
    var l = _t(this, e), a = n(this), s = a + "";
    return a == null && (s = a = (this.style.removeProperty(e), _t(this, e))), l === s ? null : l === o && s === i ? r : (i = s, r = t(o = l, a));
  };
}
function mu(e, t) {
  var n, o, i, r = "style." + t, l = "end." + r, a;
  return function() {
    var s = De(this, e), u = s.on, c = s.value[r] == null ? a || (a = Ji(t)) : void 0;
    (u !== n || i !== c) && (o = (n = u).copy()).on(l, i = c), s.on = o;
  };
}
function yu(e, t, n) {
  var o = (e += "") == "transform" ? ys : ji;
  return t == null ? this.styleTween(e, gu(e, o)).on("end.style." + e, Ji(e)) : typeof t == "function" ? this.styleTween(e, pu(e, o, po(this, "style." + e, t))).each(mu(this._id, e)) : this.styleTween(e, vu(e, o, t), n).on("end.style." + e, null);
}
function xu(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function wu(e, t, n) {
  var o, i;
  function r() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && xu(e, l, n)), o;
  }
  return r._value = t, r;
}
function _u(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2)
    return (o = this.tween(o)) && o._value;
  if (t == null)
    return this.tween(o, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(o, wu(e, t, n ?? ""));
}
function bu(e) {
  return function() {
    this.textContent = e;
  };
}
function Eu(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Su(e) {
  return this.tween("text", typeof e == "function" ? Eu(po(this, "text", e)) : bu(e == null ? "" : e + ""));
}
function Nu(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Cu(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Nu(i)), t;
  }
  return o._value = e, o;
}
function ku(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Cu(e));
}
function Mu() {
  for (var e = this._name, t = this._id, n = Qi(), o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var l = o[r], a = l.length, s, u = 0; u < a; ++u)
      if (s = l[u]) {
        var c = Te(s, t);
        mn(s, e, n, u, l, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Ye(o, this._parents, e, n);
}
function $u() {
  var e, t, n = this, o = n._id, i = n.size();
  return new Promise(function(r, l) {
    var a = { value: l }, s = { value: function() {
      --i === 0 && r();
    } };
    n.each(function() {
      var u = De(this, o), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(s)), u.on = t;
    }), i === 0 && r();
  });
}
var Tu = 0;
function Ye(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function Qi() {
  return ++Tu;
}
var Be = Vt.prototype;
Ye.prototype = {
  constructor: Ye,
  select: cu,
  selectAll: du,
  selectChild: Be.selectChild,
  selectChildren: Be.selectChildren,
  filter: ou,
  merge: iu,
  selection: hu,
  transition: Mu,
  call: Be.call,
  nodes: Be.nodes,
  node: Be.node,
  size: Be.size,
  empty: Be.empty,
  each: Be.each,
  on: au,
  attr: Ls,
  attrTween: Us,
  style: yu,
  styleTween: _u,
  text: Su,
  textTween: ku,
  remove: uu,
  tween: Ds,
  delay: Ks,
  duration: Js,
  ease: eu,
  easeVarying: nu,
  end: $u,
  [Symbol.iterator]: Be[Symbol.iterator]
};
function Ou(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Iu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ou
};
function Au(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Du(e) {
  var t, n;
  e instanceof Ye ? (t = e._id, e = e._name) : (t = Qi(), (n = Iu).time = go(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var l = o[r], a = l.length, s, u = 0; u < a; ++u)
      (s = l[u]) && mn(s, e, t, u, l, n || Au(s, t));
  return new Ye(o, this._parents, e, t);
}
Vt.prototype.interrupt = Os;
Vt.prototype.transition = Du;
const Xt = (e) => () => e;
function Pu(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Ve(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Ve.prototype = {
  constructor: Ve,
  scale: function(e) {
    return e === 1 ? this : new Ve(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ve(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ot = new Ve(1, 0, 0);
Ve.prototype;
function Pn(e) {
  e.stopImmediatePropagation();
}
function Nt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zu(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Bu() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function jo() {
  return this.__zoom || ot;
}
function Ru(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Vu() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Hu(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], r = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > r ? (r + l) / 2 : Math.min(0, r) || Math.max(0, l)
  );
}
function Lu() {
  var e = zu, t = Bu, n = Hu, o = Ru, i = Vu, r = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, s = Es, u = gn("start", "zoom", "end"), c, f, g, m = 500, h = 150, d = 0, w = 10;
  function p(x) {
    x.property("__zoom", jo).on("wheel.zoom", R, { passive: !1 }).on("mousedown.zoom", Y).on("dblclick.zoom", z).filter(i).on("touchstart.zoom", J).on("touchmove.zoom", W).on("touchend.zoom touchcancel.zoom", ee).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(x, k, E, O) {
    var L = x.selection ? x.selection() : x;
    L.property("__zoom", jo), x !== L ? N(x, k, E, O) : L.interrupt().each(function() {
      y(this, arguments).event(O).start().zoom(null, typeof k == "function" ? k.apply(this, arguments) : k).end();
    });
  }, p.scaleBy = function(x, k, E, O) {
    p.scaleTo(x, function() {
      var L = this.__zoom.k, Z = typeof k == "function" ? k.apply(this, arguments) : k;
      return L * Z;
    }, E, O);
  }, p.scaleTo = function(x, k, E, O) {
    p.transform(x, function() {
      var L = t.apply(this, arguments), Z = this.__zoom, $ = E == null ? v(L) : typeof E == "function" ? E.apply(this, arguments) : E, G = Z.invert($), T = typeof k == "function" ? k.apply(this, arguments) : k;
      return n(C(b(Z, T), $, G), L, l);
    }, E, O);
  }, p.translateBy = function(x, k, E, O) {
    p.transform(x, function() {
      return n(this.__zoom.translate(
        typeof k == "function" ? k.apply(this, arguments) : k,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), l);
    }, null, O);
  }, p.translateTo = function(x, k, E, O, L) {
    p.transform(x, function() {
      var Z = t.apply(this, arguments), $ = this.__zoom, G = O == null ? v(Z) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(ot.translate(G[0], G[1]).scale($.k).translate(
        typeof k == "function" ? -k.apply(this, arguments) : -k,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), Z, l);
    }, O, L);
  };
  function b(x, k) {
    return k = Math.max(r[0], Math.min(r[1], k)), k === x.k ? x : new Ve(k, x.x, x.y);
  }
  function C(x, k, E) {
    var O = k[0] - E[0] * x.k, L = k[1] - E[1] * x.k;
    return O === x.x && L === x.y ? x : new Ve(x.k, O, L);
  }
  function v(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function N(x, k, E, O) {
    x.on("start.zoom", function() {
      y(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      y(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var L = this, Z = arguments, $ = y(L, Z).event(O), G = t.apply(L, Z), T = E == null ? v(G) : typeof E == "function" ? E.apply(L, Z) : E, K = Math.max(G[1][0] - G[0][0], G[1][1] - G[0][1]), te = L.__zoom, M = typeof k == "function" ? k.apply(L, Z) : k, X = s(te.invert(T).concat(K / te.k), M.invert(T).concat(K / M.k));
      return function(I) {
        if (I === 1)
          I = M;
        else {
          var q = X(I), se = K / q[2];
          I = new Ve(se, T[0] - q[0] * se, T[1] - q[1] * se);
        }
        $.zoom(null, I);
      };
    });
  }
  function y(x, k, E) {
    return !E && x.__zooming || new D(x, k);
  }
  function D(x, k) {
    this.that = x, this.args = k, this.active = 0, this.sourceEvent = null, this.extent = t.apply(x, k), this.taps = 0;
  }
  D.prototype = {
    event: function(x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(x, k) {
      return this.mouse && x !== "mouse" && (this.mouse[1] = k.invert(this.mouse[0])), this.touch0 && x !== "touch" && (this.touch0[1] = k.invert(this.touch0[0])), this.touch1 && x !== "touch" && (this.touch1[1] = k.invert(this.touch1[0])), this.that.__zoom = k, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(x) {
      var k = Me(this.that).datum();
      u.call(
        x,
        this.that,
        new Pu(x, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: x,
          transform: this.that.__zoom,
          dispatch: u
        }),
        k
      );
    }
  };
  function R(x, ...k) {
    if (!e.apply(this, arguments))
      return;
    var E = y(this, k).event(x), O = this.__zoom, L = Math.max(r[0], Math.min(r[1], O.k * Math.pow(2, o.apply(this, arguments)))), Z = Oe(x);
    if (E.wheel)
      (E.mouse[0][0] !== Z[0] || E.mouse[0][1] !== Z[1]) && (E.mouse[1] = O.invert(E.mouse[0] = Z)), clearTimeout(E.wheel);
    else {
      if (O.k === L)
        return;
      E.mouse = [Z, O.invert(Z)], Jt(this), E.start();
    }
    Nt(x), E.wheel = setTimeout($, h), E.zoom("mouse", n(C(b(O, L), E.mouse[0], E.mouse[1]), E.extent, l));
    function $() {
      E.wheel = null, E.end();
    }
  }
  function Y(x, ...k) {
    if (g || !e.apply(this, arguments))
      return;
    var E = x.currentTarget, O = y(this, k, !0).event(x), L = Me(x.view).on("mousemove.zoom", T, !0).on("mouseup.zoom", K, !0), Z = Oe(x, E), $ = x.clientX, G = x.clientY;
    Vi(x.view), Pn(x), O.mouse = [Z, this.__zoom.invert(Z)], Jt(this), O.start();
    function T(te) {
      if (Nt(te), !O.moved) {
        var M = te.clientX - $, X = te.clientY - G;
        O.moved = M * M + X * X > d;
      }
      O.event(te).zoom("mouse", n(C(O.that.__zoom, O.mouse[0] = Oe(te, E), O.mouse[1]), O.extent, l));
    }
    function K(te) {
      L.on("mousemove.zoom mouseup.zoom", null), Hi(te.view, O.moved), Nt(te), O.event(te).end();
    }
  }
  function z(x, ...k) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, O = Oe(x.changedTouches ? x.changedTouches[0] : x, this), L = E.invert(O), Z = E.k * (x.shiftKey ? 0.5 : 2), $ = n(C(b(E, Z), O, L), t.apply(this, k), l);
      Nt(x), a > 0 ? Me(this).transition().duration(a).call(N, $, O, x) : Me(this).call(p.transform, $, O, x);
    }
  }
  function J(x, ...k) {
    if (e.apply(this, arguments)) {
      var E = x.touches, O = E.length, L = y(this, k, x.changedTouches.length === O).event(x), Z, $, G, T;
      for (Pn(x), $ = 0; $ < O; ++$)
        G = E[$], T = Oe(G, this), T = [T, this.__zoom.invert(T), G.identifier], L.touch0 ? !L.touch1 && L.touch0[2] !== T[2] && (L.touch1 = T, L.taps = 0) : (L.touch0 = T, Z = !0, L.taps = 1 + !!c);
      c && (c = clearTimeout(c)), Z && (L.taps < 2 && (f = T[0], c = setTimeout(function() {
        c = null;
      }, m)), Jt(this), L.start());
    }
  }
  function W(x, ...k) {
    if (this.__zooming) {
      var E = y(this, k).event(x), O = x.changedTouches, L = O.length, Z, $, G, T;
      for (Nt(x), Z = 0; Z < L; ++Z)
        $ = O[Z], G = Oe($, this), E.touch0 && E.touch0[2] === $.identifier ? E.touch0[0] = G : E.touch1 && E.touch1[2] === $.identifier && (E.touch1[0] = G);
      if ($ = E.that.__zoom, E.touch1) {
        var K = E.touch0[0], te = E.touch0[1], M = E.touch1[0], X = E.touch1[1], I = (I = M[0] - K[0]) * I + (I = M[1] - K[1]) * I, q = (q = X[0] - te[0]) * q + (q = X[1] - te[1]) * q;
        $ = b($, Math.sqrt(I / q)), G = [(K[0] + M[0]) / 2, (K[1] + M[1]) / 2], T = [(te[0] + X[0]) / 2, (te[1] + X[1]) / 2];
      } else if (E.touch0)
        G = E.touch0[0], T = E.touch0[1];
      else
        return;
      E.zoom("touch", n(C($, G, T), E.extent, l));
    }
  }
  function ee(x, ...k) {
    if (this.__zooming) {
      var E = y(this, k).event(x), O = x.changedTouches, L = O.length, Z, $;
      for (Pn(x), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, m), Z = 0; Z < L; ++Z)
        $ = O[Z], E.touch0 && E.touch0[2] === $.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === $.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0)
        E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && ($ = Oe($, this), Math.hypot(f[0] - $[0], f[1] - $[1]) < w)) {
        var G = Me(this).on("dblclick.zoom");
        G && G.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(x) {
    return arguments.length ? (o = typeof x == "function" ? x : Xt(+x), p) : o;
  }, p.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : Xt(!!x), p) : e;
  }, p.touchable = function(x) {
    return arguments.length ? (i = typeof x == "function" ? x : Xt(!!x), p) : i;
  }, p.extent = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : Xt([[+x[0][0], +x[0][1]], [+x[1][0], +x[1][1]]]), p) : t;
  }, p.scaleExtent = function(x) {
    return arguments.length ? (r[0] = +x[0], r[1] = +x[1], p) : [r[0], r[1]];
  }, p.translateExtent = function(x) {
    return arguments.length ? (l[0][0] = +x[0][0], l[1][0] = +x[1][0], l[0][1] = +x[0][1], l[1][1] = +x[1][1], p) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, p.constrain = function(x) {
    return arguments.length ? (n = x, p) : n;
  }, p.duration = function(x) {
    return arguments.length ? (a = +x, p) : a;
  }, p.interpolate = function(x) {
    return arguments.length ? (s = x, p) : s;
  }, p.on = function() {
    var x = u.on.apply(u, arguments);
    return x === u ? p : x;
  }, p.clickDistance = function(x) {
    return arguments.length ? (d = (x = +x) * x, p) : Math.sqrt(d);
  }, p.tapDistance = function(x) {
    return arguments.length ? (w = +x, p) : w;
  }, p;
}
var B = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(B || {}), mo = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(mo || {}), st = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(st || {}), it = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(it || {}), oo = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(oo || {}), sn = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(sn || {}), Fu = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Fu || {});
const er = "vue-flow__node-desc", tr = "vue-flow__edge-desc", Gu = "vue-flow__aria-live", nr = ["Enter", " ", "Escape"], vt = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function Jo(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function io(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}
function yn(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function rt(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function yo(e, t) {
  return {
    x: rt(e.x, t[0][0], t[1][0]),
    y: rt(e.y, t[0][1], t[1][1])
  };
}
function Qo(e) {
  const t = e.getRootNode(), n = No();
  return "elementFromPoint" in t ? t : n.document;
}
function Ae(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Yu(e) {
  return Ae(e) && "sourceNode" in e && "targetNode" in e;
}
function pt(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !Ae(e);
}
function ut(e) {
  return pt(e) && "computedPosition" in e;
}
function Xu(e) {
  return !!e.width && !!e.height && !!e.x && !!e.y;
}
function Uu(e, t = {}) {
  let n = t;
  return ut(e) || (n = {
    type: e.type ?? t.type ?? "default",
    dimensions: dt({
      width: 0,
      height: 0
    }),
    handleBounds: {
      source: [],
      target: []
    },
    computedPosition: dt({
      z: 0,
      ...e.position
    }),
    draggable: void 0,
    selectable: void 0,
    connectable: void 0,
    focusable: void 0,
    selected: !1,
    dragging: !1,
    resizing: !1,
    initialized: !1,
    ...t,
    data: fe(e.data) ? e.data : {},
    events: dt(fe(e.events) ? e.events : {})
  }), Object.assign({}, n, e, { id: e.id.toString() });
}
function xo(e, t = {}) {
  const n = fe(e.events) ? e.events : t.events && fe(t.events) ? t.events : {}, o = fe(e.data) ? e.data : t.data && fe(t.data) ? t.data : {};
  return t = Yu(e) ? t : {
    ...t,
    sourceHandle: (e.sourceHandle ? e.sourceHandle.toString() : void 0) || t.sourceHandle,
    targetHandle: (e.targetHandle ? e.targetHandle.toString() : void 0) || t.targetHandle,
    type: e.type ?? t.type ?? "default",
    source: e.source.toString() || t.source,
    target: e.target.toString() || t.target,
    updatable: e.updatable ?? t.updatable,
    selectable: e.selectable ?? t.selectable,
    focusable: e.focusable ?? t.focusable,
    data: o,
    events: dt(n),
    label: (e.label && !Ue(e.label) ? dt(e.label) : e.label) || t.label,
    interactionWidth: e.interactionWidth || t.interactionWidth
  }, Object.assign({}, t, e, { id: e.id.toString() });
}
function or(e, t, n) {
  if (!pt(e))
    return [];
  const o = n === "source" ? "target" : "source", i = t.filter((r) => Ae(r) && r[o] === e.id).map((r) => Ae(r) && r[n]);
  return t.filter((r) => i.includes(r.id));
}
function zd(e, t) {
  return or(e, t, "target");
}
function Bd(e, t) {
  return or(e, t, "source");
}
function xn({ source: e, sourceHandle: t, target: n, targetHandle: o }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${o ?? ""}`;
}
function ir(e, t) {
  return t.some(
    (n) => Ae(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Rd(e, t, n) {
  if (!e.source || !e.target)
    return Bt("Can't create edge. An edge needs a source and a target."), t;
  let o;
  return Ae(e) ? o = { ...e } : o = {
    ...e,
    id: xn(e)
  }, o = xo(o, n), ir(o, t) || t.push(o), t;
}
function Vd(e, t, n) {
  if (!t.source || !t.target)
    return Bt("Can't create new edge. An edge needs a source and a target."), n;
  const o = n.find((r) => Ae(r) && r.id === e.id);
  if (!o)
    return Bt(`The old edge with id=${e.id} does not exist.`), n;
  const i = {
    ...e,
    id: xn(t),
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
  return n.splice(n.indexOf(o), 1, i), n.filter((r) => r.id !== e.id);
}
function Zu({ x: e, y: t }, { x: n, y: o, zoom: i }) {
  return {
    x: e * i + n,
    y: t * i + o
  };
}
function wo({ x: e, y: t }, { x: n, y: o, zoom: i }, r, [l, a]) {
  const s = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return r ? {
    x: l * Math.round(s.x / l),
    y: a * Math.round(s.y / a)
  } : s;
}
function rr(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function un({ x: e, y: t, width: n, height: o }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + o
  };
}
function lr({ x: e, y: t, x2: n, y2: o }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Hd(e, t) {
  return lr(rr(un(e), un(t)));
}
function _o(e) {
  const t = e.reduce(
    (n, { computedPosition: o = { x: 0, y: 0 }, dimensions: i = { width: 0, height: 0 } } = {}) => rr(
      n,
      un({
        ...o,
        ...i
      })
    ),
    { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }
  );
  return lr(t);
}
function ar(e, t, { x: n, y: o, zoom: i } = { x: 0, y: 0, zoom: 1 }, r = !1, l = !1) {
  const a = {
    x: (t.x - n) / i,
    y: (t.y - o) / i,
    width: t.width / i,
    height: t.height / i
  };
  return e.filter((s) => {
    const { computedPosition: u = { x: 0, y: 0 }, dimensions: c = { width: 0, height: 0 }, selectable: f } = s;
    if (l && !f)
      return !1;
    const g = { ...u, width: c.width || 0, height: c.height || 0 }, m = io(a, g), h = typeof c.width > "u" || typeof c.height > "u" || c.width === 0 || c.height === 0, d = r && m > 0, w = c.width * c.height;
    return h || d || m >= w;
  });
}
function wn(e, t) {
  const n = e.map((o) => Ue(o) ? o : o.id);
  return t.filter((o) => n.includes(o.source) || n.includes(o.target));
}
function cn(e, t, n, o, i, r = 0.1, l = { x: 0, y: 0 }) {
  const a = t / (e.width * (1 + r)), s = n / (e.height * (1 + r)), u = Math.min(a, s), c = rt(u, o, i), f = e.x + e.width / 2, g = e.y + e.height / 2, m = t / 2 - f * c + (l.x ?? 0), h = n / 2 - g * c + (l.y ?? 0);
  return { x: m, y: h, zoom: c };
}
function Wu(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function sr(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t(e.parentNode);
  return n ? n.selected ? !0 : sr(n, t) : !1;
}
function Qe(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}`;
}
function ei(e, t, n) {
  return e < t ? rt(Math.abs(e - t), 1, 50) / 50 : e > n ? -rt(Math.abs(e - n), 1, 50) / 50 : 0;
}
function ur(e, t) {
  const n = ei(e.x, 35, t.width - 35) * 20, o = ei(e.y, 35, t.height - 35) * 20;
  return [n, o];
}
function zn(e, t) {
  if (t) {
    const n = e.position.x + e.dimensions.width - t.dimensions.width, o = e.position.y + e.dimensions.height - t.dimensions.height;
    if (n > 0 || o > 0 || e.position.x < 0 || e.position.y < 0) {
      let i = {};
      if (Et(t.style) ? i = { ...t.style(t) } : t.style && (i = { ...t.style }), i.width = i.width ?? `${t.dimensions.width}px`, i.height = i.height ?? `${t.dimensions.height}px`, n > 0)
        if (Ue(i.width)) {
          const r = Number(i.width.replace("px", ""));
          i.width = `${r + n}px`;
        } else
          i.width += n;
      if (o > 0)
        if (Ue(i.height)) {
          const r = Number(i.height.replace("px", ""));
          i.height = `${r + o}px`;
        } else
          i.height += o;
      if (e.position.x < 0) {
        const r = Math.abs(e.position.x);
        if (t.position.x = t.position.x - r, Ue(i.width)) {
          const l = Number(i.width.replace("px", ""));
          i.width = `${l + r}px`;
        } else
          i.width += r;
        e.position.x = 0;
      }
      if (e.position.y < 0) {
        const r = Math.abs(e.position.y);
        if (t.position.y = t.position.y - r, Ue(i.height)) {
          const l = Number(i.height.replace("px", ""));
          i.height = `${l + r}px`;
        } else
          i.height += r;
        e.position.y = 0;
      }
      t.dimensions.width = Number(i.width.toString().replace("px", "")), t.dimensions.height = Number(i.height.toString().replace("px", "")), Et(t.style) ? t.style = (r) => {
        const l = t.style;
        return {
          ...l(r),
          ...i
        };
      } : t.style = {
        ...t.style,
        ...i
      };
    }
  }
}
function dn(e, t) {
  e.filter((i) => i.type === "add" || i.type === "remove").forEach((i) => {
    if (i.type === "add")
      t.findIndex((l) => l.id === i.item.id) === -1 && t.push(i.item);
    else if (i.type === "remove") {
      const r = t.findIndex((l) => l.id === i.id);
      r !== -1 && t.splice(r, 1);
    }
  });
  const o = t.map((i) => i.id);
  return t.forEach((i) => {
    var l, a;
    const r = e.filter((s) => s.id === i.id);
    for (const s of r)
      switch (s.type) {
        case "select":
          i.selected = s.selected;
          break;
        case "position":
          if (ut(i) && (typeof s.position < "u" && (i.position = s.position), typeof s.dragging < "u" && (i.dragging = s.dragging), i.expandParent && i.parentNode)) {
            const u = t[o.indexOf(i.parentNode)];
            u && ut(u) && zn(i, u);
          }
          break;
        case "dimensions":
          if (ut(i)) {
            if (typeof s.dimensions < "u" && (i.dimensions = s.dimensions), typeof s.updateStyle < "u" && (i.style = {
              ...i.style || {},
              width: `${(l = s.dimensions) == null ? void 0 : l.width}px`,
              height: `${(a = s.dimensions) == null ? void 0 : a.height}px`
            }), typeof s.resizing < "u" && (i.resizing = s.resizing), i.expandParent && i.parentNode) {
              const u = t[o.indexOf(i.parentNode)];
              u && ut(u) && (u.initialized ? zn(i, u) : ft(() => {
                zn(i, u);
              }));
            }
            i.initialized || (i.initialized = !0);
          }
          break;
      }
  }), t;
}
function Ld(e, t) {
  return dn(e, t);
}
function Fd(e, t) {
  return dn(e, t);
}
function Re(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function ti(e) {
  return {
    item: e,
    type: "add"
  };
}
function Bn(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Rn(e, t) {
  return e.reduce(
    (n, o) => {
      let i = t.includes(o.id);
      fe(o.selectable) && !o.selectable && (i = !1);
      const r = ut(o) ? "changedNodes" : "changedEdges";
      return !o.selected && i ? n[r].push(Re(o.id, !0)) : o.selected && !i && n[r].push(Re(o.id, !1)), n;
    },
    { changedNodes: [], changedEdges: [] }
  );
}
function F(e = () => {
}) {
  const t = ce(/* @__PURE__ */ new Set());
  e && t.value.add(e);
  const n = (r) => {
    t.value.delete(r);
  };
  return {
    on: (r) => {
      t.value.has(e) && t.value.delete(e), t.value.add(r);
      const l = () => n(r);
      return Rt(l), {
        off: l
      };
    },
    off: n,
    trigger: (r) => Promise.all(Array.from(t.value).map((l) => l(r))),
    fns: t
  };
}
function ni(e, t, n) {
  let o = e;
  do {
    if (o && o.matches(t))
      return !0;
    if (o === n)
      return !1;
    o = o.parentElement;
  } while (o);
  return !1;
}
function Ku(e, t, n, o, i) {
  return e.filter(
    (r) => (r.selected || r.id === i) && (!r.parentNode || !sr(r, o)) && (r.draggable || t && typeof r.draggable > "u")
  ).map(
    (r) => {
      var l, a;
      return dt({
        id: r.id,
        position: r.position || { x: 0, y: 0 },
        distance: {
          x: n.x - ((l = r.computedPosition) == null ? void 0 : l.x) || 0,
          y: n.y - ((a = r.computedPosition) == null ? void 0 : a.y) || 0
        },
        from: r.computedPosition,
        extent: r.extent,
        parentNode: r.parentNode,
        dimensions: r.dimensions
      });
    }
  );
}
function Vn({
  id: e,
  dragItems: t,
  findNode: n
}) {
  const o = t.reduce((i, r) => {
    const l = n(r.id);
    return l && i.push(l), i;
  }, []);
  return [e ? o.find((i) => i.id === e) : o[0], o];
}
function cr(e) {
  if (Array.isArray(e))
    switch (e.length) {
      case 1:
        return [e[0], e[0], e[0], e[0]];
      case 2:
        return [e[0], e[1], e[0], e[1]];
      case 3:
        return [e[0], e[1], e[2], e[1]];
      case 4:
        return e;
      default:
        return [0, 0, 0, 0];
    }
  return [e, e, e, e];
}
function qu(e, t, n) {
  const [o, i, r, l] = typeof e != "string" ? cr(e.padding) : [0, 0, 0, 0];
  return n && He(n.computedPosition.x) && He(n.computedPosition.y) && He(n.dimensions.width) && He(n.dimensions.height) ? [
    [n.computedPosition.x + l, n.computedPosition.y + o],
    [
      n.computedPosition.x + (n.dimensions.width - t.dimensions.width) - i,
      n.computedPosition.y + (n.dimensions.height - t.dimensions.height) - r
    ]
  ] : !1;
}
function ju(e, t, n, o) {
  let i = e.extent || n;
  if (i === "parent" || !Array.isArray(i) && (i == null ? void 0 : i.range) === "parent")
    if (e.parentNode && o && e.dimensions.width && e.dimensions.height) {
      const r = qu(i, e, o);
      r && (i = r);
    } else
      t(new xe(ye.NODE_EXTENT_INVALID, e.id)), i = n;
  else if (Array.isArray(i)) {
    const r = (o == null ? void 0 : o.computedPosition.x) || 0, l = (o == null ? void 0 : o.computedPosition.y) || 0;
    i = [
      [i[0][0] + r, i[0][1] + l],
      [i[1][0] + r, i[1][1] + l]
    ];
  } else if (i != null && i.range && Array.isArray(i.range)) {
    const [r, l, a, s] = cr(i.padding), u = (o == null ? void 0 : o.computedPosition.x) || 0, c = (o == null ? void 0 : o.computedPosition.y) || 0;
    i = [
      [i.range[0][0] + u + s, i.range[0][1] + c + r],
      [i.range[1][0] + u - l, i.range[1][1] + c - a]
    ];
  }
  return i;
}
function bo(e, t, n, o, i) {
  const r = ju(e, n, o, i), l = yo(t, r);
  return {
    position: {
      x: l.x - ((i == null ? void 0 : i.computedPosition.x) || 0),
      y: l.y - ((i == null ? void 0 : i.computedPosition.y) || 0)
    },
    computedPosition: l
  };
}
function oi(e, t, n) {
  const o = ((n == null ? void 0 : n.x) ?? 0) + t.x, i = ((n == null ? void 0 : n.y) ?? 0) + t.y, r = (n == null ? void 0 : n.width) ?? t.width, l = (n == null ? void 0 : n.height) ?? t.height;
  switch (e) {
    case B.Top:
      return {
        x: o + r / 2,
        y: i
      };
    case B.Right:
      return {
        x: o + r,
        y: i + l / 2
      };
    case B.Bottom:
      return {
        x: o + r / 2,
        y: i + l
      };
    case B.Left:
      return {
        x: o,
        y: i + l / 2
      };
  }
}
function ii(e = [], t) {
  return e.length ? !t || e.length === 1 ? e[0] : t && e.find((n) => n.id === t) || null : null;
}
function Ju(e, t, n, o, i, r) {
  const l = oi(
    n,
    {
      ...e.dimensions,
      ...e.computedPosition
    },
    t
  ), a = oi(
    r,
    {
      ...o.dimensions,
      ...o.computedPosition
    },
    i
  );
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: a.x,
    targetY: a.y
  };
}
function Qu({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: o,
  targetWidth: i,
  targetHeight: r,
  width: l,
  height: a,
  viewport: s
}) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + i),
    y2: Math.max(e.y + o, t.y + r)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const c = un({
    x: (0 - s.x) / s.zoom,
    y: (0 - s.y) / s.zoom,
    width: l / s.zoom,
    height: a / s.zoom
  }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), g = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(f * g) > 0;
}
function ec(e, t, n = !1) {
  const o = He(e.zIndex);
  let i = o ? e.zIndex : 0;
  const r = t(e.source), l = t(e.target);
  return !r || !l ? 0 : (n && (i = o ? e.zIndex : Math.max(r.computedPosition.z || 0, l.computedPosition.z || 0)), i);
}
var ye = /* @__PURE__ */ ((e) => (e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e))(ye || {});
const Hn = {
  MISSING_VIEWPORT_DIMENSIONS: () => "The Vue Flow parent container needs a width and a height to render the graph",
  NODE_INVALID: (e) => `Node is invalid
Node: ${e}`,
  NODE_NOT_FOUND: (e) => `Node not found
Node: ${e}`,
  NODE_MISSING_PARENT: (e, t) => `Node is missing a parent
Node: ${e}
Parent: ${t}`,
  NODE_TYPE_MISSING: (e) => `Node type is missing
Type: ${e}`,
  NODE_EXTENT_INVALID: (e) => `Only child nodes can use a parent extent
Node: ${e}`,
  EDGE_INVALID: (e) => `An edge needs a source and a target
Edge: ${e}`,
  EDGE_SOURCE_MISSING: (e, t) => `Edge source is missing
Edge: ${e} 
Source: ${t}`,
  EDGE_TARGET_MISSING: (e, t) => `Edge target is missing
Edge: ${e} 
Target: ${t}`,
  EDGE_TYPE_MISSING: (e) => `Edge type is missing
Type: ${e}`,
  EDGE_SOURCE_TARGET_SAME: (e, t, n) => `Edge source and target are the same
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_SOURCE_TARGET_MISSING: (e, t, n) => `Edge source or target is missing
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_ORPHANED: (e) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e}`,
  EDGE_NOT_FOUND: (e) => `Edge not found
Edge: ${e}`
};
class xe extends Error {
  constructor(t, ...n) {
    var o;
    super((o = Hn[t]) == null ? void 0 : o.call(Hn, ...n)), this.code = t;
  }
}
function Eo(e) {
  return "clientX" in e;
}
function mt(e, t) {
  var r, l;
  const n = Eo(e), o = n ? e.clientX : (r = e.touches) == null ? void 0 : r[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}
function Ue(e) {
  return typeof e == "string";
}
function Et(e) {
  return typeof e == "function";
}
function tc(e) {
  return typeof e == "boolean";
}
function He(e) {
  return typeof e == "number";
}
function nc() {
  return {
    handleDomNode: null,
    isValid: !1,
    connection: { source: "", target: "", sourceHandle: null, targetHandle: null },
    endHandle: null
  };
}
function Ln(e) {
  e == null || e.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function ri(e, t, n, o) {
  return (t[n] || []).reduce((i, r) => {
    var l, a;
    return `${e.id}-${r.id}-${n}` !== o && i.push({
      id: r.id || null,
      type: n,
      nodeId: e.id,
      x: (((l = e.computedPosition) == null ? void 0 : l.x) ?? 0) + r.x + r.width / 2,
      y: (((a = e.computedPosition) == null ? void 0 : a.y) ?? 0) + r.y + r.height / 2,
      width: r.width,
      height: r.height
    }), i;
  }, []);
}
function oc(e, t, n, o) {
  let i = [], r = 1 / 0;
  return n.forEach((l) => {
    const a = Math.sqrt((l.x - e.x - l.width / 2) ** 2 + (l.y - e.y - l.height / 2) ** 2);
    if (a <= t) {
      const s = o(l);
      a <= r && s.isValid && (a < r ? i = [{ handle: l, validHandleResult: s }] : a === r && i.push({
        handle: l,
        validHandleResult: s
      }), r = a);
    }
  }), i.length ? i.length === 1 ? i[0] : (
    // if multiple handles are layout on top of each other we take the one with type = target because it's more likely that the user wants to connect to this one
    i.find(({ handle: l }) => l.type === "target") || i[0]
  ) : { handle: null, validHandleResult: o(null) };
}
function li(e, t, n, o, i, r, l, a, s, u) {
  const c = r === "target", f = a.querySelector(`.vue-flow__handle[data-id="${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`), { x: g, y: m } = mt(e), h = a.elementFromPoint(g, m), d = h != null && h.classList.contains("vue-flow__handle") ? h : f, w = nc();
  if (d) {
    const p = dr(void 0, d), b = d.getAttribute("data-nodeid"), C = d.getAttribute("data-handleid"), v = d.classList.contains("connectable"), N = d.classList.contains("connectableend"), y = {
      source: c ? b : o,
      sourceHandle: c ? C : i,
      target: c ? o : b,
      targetHandle: c ? i : C
    };
    w.connection = y;
    const R = v && N && (n === it.Strict ? c && p === "source" || !c && p === "target" : b !== o || C !== i);
    w.endHandle = {
      nodeId: b,
      handleId: C,
      type: p
    }, R && (w.isValid = l(y, {
      edges: s,
      sourceNode: u(y.source),
      targetNode: u(y.target)
    }));
  }
  return w;
}
function ic({ nodes: e, nodeId: t, handleId: n, handleType: o }) {
  return e.reduce((i, r) => {
    const { handleBounds: l } = r;
    let a = [], s = [];
    return l && (a = ri(r, l, "source", `${t}-${n}-${o}`), s = ri(r, l, "target", `${t}-${n}-${o}`)), i.push(...a, ...s), i;
  }, []);
}
function dr(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function rc(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
const lc = ["production", "prod"];
function Bt(e, ...t) {
  lc.includes(process.env.NODE_ENV || "") || console.warn(`[Vue Flow]: ${e}`, ...t);
}
function ai(e, t, n) {
  const o = t.querySelectorAll(`.vue-flow__handle${e}`);
  if (!o || !o.length)
    return;
  const i = Array.from(o), r = t.getBoundingClientRect();
  return i.map((l) => {
    const a = l.getBoundingClientRect();
    return {
      id: l.getAttribute("data-handleid"),
      position: l.getAttribute("data-handlepos"),
      x: (a.left - r.left) / n,
      y: (a.top - r.top) / n,
      ...yn(l)
    };
  });
}
function ro(e, t, n, o, i, r = !1, l) {
  i.value = !1, e.selected ? (r || e.selected && t) && (o([e]), ft(l.blur)) : n([e]);
}
function fe(e) {
  return typeof P(e) < "u";
}
function ac(e, t, n) {
  if (!e.source || !e.target)
    return n(new xe(ye.EDGE_INVALID, e.id)), !1;
  let o;
  return Ae(e) ? o = e : o = {
    ...e,
    id: xn(e)
  }, o = xo(o), ir(o, t) ? !1 : o;
}
function sc(e, t, n, o, i, r) {
  if (!t.source || !t.target)
    return r(new xe(ye.EDGE_INVALID, e.id)), !1;
  const l = o(e.id);
  if (!l)
    return r(new xe(ye.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...s } = e, u = {
    ...s,
    id: i ? xn(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
  return n.splice(n.indexOf(l), 1, u), u;
}
function si(e, t, n, o) {
  const i = {}, r = e.reduce((a, s) => {
    if (!pt(s))
      return o(new xe(ye.NODE_INVALID)), a;
    const u = Uu(s, {
      ...n(s.id),
      parentNode: s.parentNode
    });
    return s.parentNode && (i[s.parentNode] = !0), a.concat(u);
  }, []), l = [...r, ...t];
  for (const a of r) {
    const s = l.find((u) => u.id === a.parentNode);
    a.parentNode && !s && o(new xe(ye.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || i[a.id]) && (i[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return r;
}
function fr(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: o,
    noDragClassName: i,
    nodes: r,
    nodeExtent: l,
    viewport: a,
    autoPanOnNodeDrag: s,
    nodesDraggable: u,
    panBy: c,
    findNode: f,
    multiSelectionActive: g,
    nodesSelectionActive: m,
    selectNodesOnDrag: h,
    removeSelectedElements: d,
    addSelectedNodes: w,
    updateNodePositions: p,
    emits: b
  } = pe(), { onStart: C, onDrag: v, onStop: N, el: y, disabled: D, id: R, selectable: Y, dragHandle: z } = e, J = ce(!1);
  let W = [], ee, x = null, k = { x: void 0, y: void 0 }, E = { x: 0, y: 0 }, O = null, L = 0, Z = !1;
  const $ = Qc(), G = ({ x: K, y: te }) => {
    k = { x: K, y: te };
    let M = !1;
    if (W = W.map((X) => {
      const I = { x: K - X.distance.x, y: te - X.distance.y };
      n.value && (I.x = o.value[0] * Math.round(I.x / o.value[0]), I.y = o.value[1] * Math.round(I.y / o.value[1]));
      const { computedPosition: q } = bo(
        X,
        I,
        b.error,
        l.value,
        X.parentNode ? f(X.parentNode) : void 0
      );
      return M = M || X.position.x !== q.x || X.position.y !== q.y, X.position = q, X;
    }), !!M && (p(W, !0, !0), J.value = !0, O)) {
      const [X, I] = Vn({
        id: R,
        dragItems: W,
        findNode: f
      });
      v({ event: O, node: X, nodes: I });
    }
  }, T = () => {
    if (!x)
      return;
    const [K, te] = ur(E, x);
    if (K !== 0 || te !== 0) {
      const M = {
        x: (k.x ?? 0) - K / a.value.zoom,
        y: (k.y ?? 0) - te / a.value.zoom
      };
      c({ x: K, y: te }) && G(M);
    }
    L = requestAnimationFrame(T);
  };
  return ve([() => re(D), y], ([K, te]) => {
    if (te) {
      const M = Me(te);
      K ? M.on(".drag", null) : (ee = ja().on("start", (X) => {
        var se;
        const I = f(R);
        !h.value && !g.value && I && (I.selected || d()), I && re(Y) && h.value && ro(
          I,
          g.value,
          w,
          d,
          m,
          !1,
          te
        );
        const q = $(X);
        if (k = q, W = Ku(r.value, u.value, q, f, R), W.length) {
          const [ge, me] = Vn({
            id: R,
            dragItems: W,
            findNode: f
          });
          C({ event: X.sourceEvent, node: ge, nodes: me });
        }
        x = ((se = t.value) == null ? void 0 : se.getBoundingClientRect()) || null, E = mt(X.sourceEvent, x);
      }).on("drag", (X) => {
        const I = $(X);
        !Z && s.value && (Z = !0, T()), (k.x !== I.xSnapped || k.y !== I.ySnapped) && W.length && (O = X.sourceEvent, E = mt(X.sourceEvent, x), G(I));
      }).on("end", (X) => {
        if (J.value = !1, Z = !1, cancelAnimationFrame(L), W.length) {
          p(W, !1, !1);
          const [I, q] = Vn({
            id: R,
            dragItems: W,
            findNode: f
          });
          N({ event: X.sourceEvent, node: I, nodes: q });
        }
      }).filter((X) => {
        const I = X.target, q = re(z);
        return !X.button && (!i.value || !ni(I, `.${i.value}`, te) && (!q || ni(I, q, te)));
      }), M.call(ee));
    }
  }), J;
}
function uc() {
  return {
    edgesChange: F(),
    nodesChange: F(),
    nodeDoubleClick: F(),
    nodeClick: F(),
    nodeMouseEnter: F(),
    nodeMouseMove: F(),
    nodeMouseLeave: F(),
    nodeContextMenu: F(),
    nodeDragStart: F(),
    nodeDrag: F(),
    nodeDragStop: F(),
    nodesInitialized: F(),
    miniMapNodeClick: F(),
    miniMapNodeDoubleClick: F(),
    miniMapNodeMouseEnter: F(),
    miniMapNodeMouseMove: F(),
    miniMapNodeMouseLeave: F(),
    connect: F(),
    connectStart: F(),
    connectEnd: F(),
    clickConnectStart: F(),
    clickConnectEnd: F(),
    paneReady: F(),
    move: F(),
    moveStart: F(),
    moveEnd: F(),
    selectionDragStart: F(),
    selectionDrag: F(),
    selectionDragStop: F(),
    selectionContextMenu: F(),
    selectionStart: F(),
    selectionEnd: F(),
    viewportChangeStart: F(),
    viewportChange: F(),
    viewportChangeEnd: F(),
    paneScroll: F(),
    paneClick: F(),
    paneContextMenu: F(),
    paneMouseEnter: F(),
    paneMouseMove: F(),
    paneMouseLeave: F(),
    edgeContextMenu: F(),
    edgeMouseEnter: F(),
    edgeMouseMove: F(),
    edgeMouseLeave: F(),
    edgeDoubleClick: F(),
    edgeClick: F(),
    edgeUpdateStart: F(),
    edgeUpdate: F(),
    edgeUpdateEnd: F(),
    updateNodeInternals: F(),
    error: F((e) => Bt(e.message))
  };
}
function cc(e, t) {
  Cr(() => {
    for (const [n, o] of Object.entries(t.value)) {
      const i = (r) => {
        e(n, r);
      };
      o.on(i), Rt(() => {
        o.off(i);
      });
    }
  });
}
function dc(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || Object.defineProperty(n, o, { enumerable: !0, get: () => e[o] });
  return n;
}
const fc = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], hc = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, fn = /* @__PURE__ */ we({
  ...hc,
  props: {
    id: null,
    type: null,
    position: { default: B.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = dc(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), n = Qt(t, "type", "source"), o = Qt(t, "isValidConnection", void 0), {
      connectionStartHandle: i,
      connectionClickStartHandle: r,
      connectionEndHandle: l,
      vueFlowRef: a,
      nodesConnectable: s,
      noDragClassName: u,
      noPanClassName: c
    } = pe(), { id: f, node: g, nodeEl: m, connectedEdges: h } = nd(), d = ce(), w = ie(() => e.id ?? `${f}__handle-${e.position}`), p = ie(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), b = ie(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), { handlePointerDown: C, handleClick: v } = Er({
      nodeId: f,
      handleId: w,
      isValidConnection: o,
      type: n
    }), N = ie(() => Ue(e.connectable) && e.connectable === "single" ? !h.value.some((z) => {
      const J = z[`${n.value}Handle`];
      return z[n.value] !== f ? !1 : J ? J === w.value : !0;
    }) : Et(e.connectable) ? e.connectable(g, h.value) : fe(e.connectable) ? e.connectable : s.value), y = ie(
      () => {
        var z, J, W, ee, x, k;
        return ((z = i.value) == null ? void 0 : z.nodeId) === f && ((J = i.value) == null ? void 0 : J.handleId) === w.value && ((W = i.value) == null ? void 0 : W.type) === n.value || ((ee = l.value) == null ? void 0 : ee.nodeId) === f && ((x = l.value) == null ? void 0 : x.handleId) === w.value && ((k = l.value) == null ? void 0 : k.type) === n.value;
      }
    ), D = ie(
      () => {
        var z, J, W;
        return ((z = r.value) == null ? void 0 : z.nodeId) === f && ((J = r.value) == null ? void 0 : J.handleId) === w.value && ((W = r.value) == null ? void 0 : W.type) === n.value;
      }
    );
    Se(() => g.initialized).toBe(!0, { flush: "post" }).then(() => {
      var O;
      const z = (O = g.handleBounds[n.value]) == null ? void 0 : O.find((L) => L.id === w.value);
      if (!a.value || z)
        return;
      const J = a.value.querySelector(".vue-flow__transformationpane");
      if (!m || !d.value || !J || !w.value)
        return;
      const W = m.value.getBoundingClientRect(), ee = d.value.getBoundingClientRect(), x = window.getComputedStyle(J), { m22: k } = new window.DOMMatrixReadOnly(x.transform), E = {
        id: w.value,
        position: e.position,
        x: (ee.left - W.left) / k,
        y: (ee.top - W.top) / k,
        ...yn(d.value)
      };
      g.handleBounds[n.value] = [...g.handleBounds[n.value] ?? [], E];
    });
    function R(z) {
      const J = Eo(z);
      N.value && p.value && (J && z.button === 0 || !J) && C(z);
    }
    function Y(z) {
      !f || !r.value && !p.value || N.value && v(z);
    }
    return (z, J) => (le(), de("div", {
      ref_key: "handle",
      ref: d,
      "data-id": `${P(f)}-${P(w)}-${P(n)}`,
      "data-handleid": P(w),
      "data-nodeid": P(f),
      "data-handlepos": e.position,
      class: yt(["vue-flow__handle", [
        `vue-flow__handle-${e.position}`,
        `vue-flow__handle-${P(w)}`,
        P(u),
        P(c),
        P(n),
        {
          connectable: P(N),
          connecting: P(D),
          connectablestart: P(p),
          connectableend: P(b),
          connectionindicator: P(N) && (P(p) && !P(y) || P(b) && P(y))
        }
      ]]),
      onMousedown: R,
      onTouchstartPassive: R,
      onClick: Y
    }, [
      Ne(z.$slots, "default", { id: e.id })
    ], 42, fc));
  }
}), _n = function({
  sourcePosition: e = B.Bottom,
  targetPosition: t = B.Top,
  label: n,
  connectable: o = !0,
  isValidTargetPos: i,
  isValidSourcePos: r
}) {
  return [
    ue(fn, { type: "target", position: t, connectable: o, isValidConnection: i }),
    typeof n != "string" && n ? ue(n) : ue("div", { innerHTML: n }),
    ue(fn, { type: "source", position: e, connectable: o, isValidConnection: r })
  ];
};
_n.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable"];
_n.inheritAttrs = !1;
_n.compatConfig = { MODE: 3 };
const gc = _n, bn = function({
  sourcePosition: e = B.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: o
}) {
  return [
    typeof t != "string" && t ? ue(t) : ue("div", { innerHTML: t }),
    ue(fn, { type: "source", position: e, connectable: n, isValidConnection: o })
  ];
};
bn.props = ["sourcePosition", "label", "isValidSourcePos", "connectable"];
bn.inheritAttrs = !1;
bn.compatConfig = { MODE: 3 };
const vc = bn, En = function({
  targetPosition: e = B.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: o
}) {
  return [
    ue(fn, { type: "target", position: e, connectable: n, isValidConnection: o }),
    typeof t != "string" && t ? ue(t) : ue("div", { innerHTML: t })
  ];
};
En.props = ["targetPosition", "label", "isValidTargetPos", "connectable"];
En.inheritAttrs = !1;
En.compatConfig = { MODE: 3 };
const pc = En, ui = Symbol("vueFlow"), hr = Symbol("nodeId"), gr = Symbol("nodeRef"), vr = Symbol("edgeId"), pr = Symbol("edgeRef"), Sn = Symbol("slots"), mc = we({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["name", "type", "id", "draggable", "selectable", "focusable", "connectable", "node", "resizeObserver"],
  setup(e) {
    xt(hr, e.id);
    const {
      id: t,
      edges: n,
      noPanClassName: o,
      selectNodesOnDrag: i,
      nodesSelectionActive: r,
      multiSelectionActive: l,
      emits: a,
      findNode: s,
      removeSelectedNodes: u,
      addSelectedNodes: c,
      updateNodeDimensions: f,
      onUpdateNodeInternals: g,
      getIntersectingNodes: m,
      getNodeTypes: h,
      nodeExtent: d,
      elevateNodesOnSelect: w,
      disableKeyboardA11y: p,
      ariaLiveMessage: b,
      snapToGrid: C,
      snapGrid: v
    } = pe(), N = Sr(), y = Mt(e, "node"), D = ie(() => s(y.value.parentNode)), R = ie(() => wn([y.value], n.value)), Y = ce();
    xt(gr, Y);
    const { emit: z, on: J } = id(y.value, a), W = fr({
      id: e.id,
      el: Y,
      disabled: () => !e.draggable,
      selectable: () => e.selectable,
      dragHandle: () => y.value.dragHandle,
      onStart(M) {
        z.dragStart({ ...M, intersections: m(y.value) });
      },
      onDrag(M) {
        z.drag({ ...M, intersections: m(y.value) });
      },
      onStop(M) {
        z.dragStop({ ...M, intersections: m(y.value) });
      }
    }), ee = ie(() => y.value.class instanceof Function ? y.value.class(y.value) : y.value.class), x = ie(() => {
      const M = (y.value.style instanceof Function ? y.value.style(y.value) : y.value.style) || {}, X = y.value.width instanceof Function ? y.value.width(y.value) : y.value.width, I = y.value.height instanceof Function ? y.value.height(y.value) : y.value.height;
      return X && (M.width = typeof X == "string" ? X : `${X}px`), I && (M.height = typeof I == "string" ? I : `${I}px`), M;
    }), k = () => Number(y.value.zIndex ?? x.value.zIndex ?? 0);
    return g((M) => {
      M.includes(e.id) && O();
    }), Ze(() => {
      e.resizeObserver.observe(Y.value);
    }), wi(() => {
      e.resizeObserver.unobserve(Y.value);
    }), ve(
      [() => y.value.type, () => y.value.sourcePosition, () => y.value.targetPosition],
      () => {
        f([{ id: e.id, nodeElement: Y.value, forceUpdate: !0 }]);
      },
      { flush: "pre" }
    ), ve(
      [
        () => y.value.position.x,
        () => y.value.position.y,
        () => {
          var M;
          return (M = D.value) == null ? void 0 : M.computedPosition.x;
        },
        () => {
          var M;
          return (M = D.value) == null ? void 0 : M.computedPosition.y;
        },
        () => {
          var M;
          return (M = D.value) == null ? void 0 : M.computedPosition.z;
        },
        () => k(),
        () => y.value.selected,
        () => y.value.dimensions.height,
        () => y.value.dimensions.width,
        () => {
          var M;
          return (M = D.value) == null ? void 0 : M.dimensions.height;
        },
        () => {
          var M;
          return (M = D.value) == null ? void 0 : M.dimensions.width;
        }
      ],
      ([M, X, I, q, se, ge]) => {
        const me = {
          x: M,
          y: X,
          z: ge + (w.value && y.value.selected ? 1e3 : 0)
        };
        He(I) && He(q) ? y.value.computedPosition = Wu({ x: I, y: q, z: se }, me) : y.value.computedPosition = me;
      },
      { flush: "pre", immediate: !0 }
    ), ve([() => y.value.extent, d], ([M, X], [I, q]) => {
      (M !== I || X !== q) && E();
    }), y.value.extent === "parent" || typeof y.value.extent == "object" && "range" in y.value.extent && y.value.extent.range === "parent" ? Se(() => y.value.initialized).toBe(!0).then(E) : E(), () => ue(
      "div",
      {
        ref: Y,
        "data-id": y.value.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${e.type === !1 ? "default" : e.name}`,
          {
            [o.value]: e.draggable,
            dragging: W == null ? void 0 : W.value,
            selected: y.value.selected,
            selectable: e.selectable,
            parent: y.value.isParent
          },
          ee.value
        ],
        style: {
          zIndex: y.value.computedPosition.z ?? k(),
          transform: `translate(${y.value.computedPosition.x}px,${y.value.computedPosition.y}px)`,
          pointerEvents: e.selectable || e.draggable ? "all" : "none",
          visibility: y.value.initialized ? "visible" : "hidden",
          ...x.value
        },
        tabIndex: e.focusable ? 0 : void 0,
        role: e.focusable ? "button" : void 0,
        "aria-describedby": p.value ? void 0 : `${er}-${t}`,
        "aria-label": y.value.ariaLabel,
        onMouseenter: L,
        onMousemove: Z,
        onMouseleave: $,
        onContextmenu: G,
        onClick: K,
        onDblclick: T,
        onKeydown: te
      },
      [
        ue(e.type === !1 ? h.value.default : e.type, {
          id: y.value.id,
          type: y.value.type,
          data: y.value.data,
          events: { ...y.value.events, ...J },
          selected: !!y.value.selected,
          resizing: !!y.value.resizing,
          dragging: W.value,
          connectable: e.connectable,
          position: y.value.position,
          dimensions: y.value.dimensions,
          isValidTargetPos: y.value.isValidTargetPos,
          isValidSourcePos: y.value.isValidSourcePos,
          parent: y.value.parentNode,
          zIndex: y.value.computedPosition.z,
          targetPosition: y.value.targetPosition,
          sourcePosition: y.value.sourcePosition,
          label: y.value.label,
          dragHandle: y.value.dragHandle,
          onUpdateNodeInternals: O
        })
      ]
    );
    function E() {
      const M = y.value.computedPosition;
      C.value && (M.x = v.value[0] * Math.round(M.x / v.value[0]), M.y = v.value[1] * Math.round(M.y / v.value[1]));
      const { computedPosition: X, position: I } = bo(
        y.value,
        M,
        a.error,
        d.value,
        D.value
      );
      (y.value.computedPosition.x !== X.x || y.value.computedPosition.y !== X.y) && (y.value.computedPosition = { ...y.value.computedPosition, ...X }), (y.value.position.x !== I.x || y.value.position.y !== I.y) && (y.value.position = I);
    }
    function O() {
      Y.value && f([{ id: e.id, nodeElement: Y.value, forceUpdate: !0 }]);
    }
    function L(M) {
      W != null && W.value || z.mouseEnter({ event: M, node: y.value, connectedEdges: R.value });
    }
    function Z(M) {
      W != null && W.value || z.mouseMove({ event: M, node: y.value, connectedEdges: R.value });
    }
    function $(M) {
      W != null && W.value || z.mouseLeave({ event: M, node: y.value, connectedEdges: R.value });
    }
    function G(M) {
      return z.contextMenu({ event: M, node: y.value, connectedEdges: R.value });
    }
    function T(M) {
      return z.doubleClick({ event: M, node: y.value, connectedEdges: R.value });
    }
    function K(M) {
      e.selectable && (!i.value || !e.draggable) && ro(
        y.value,
        l.value,
        c,
        u,
        r,
        !1,
        Y.value
      ), z.click({ event: M, node: y.value, connectedEdges: R.value });
    }
    function te(M) {
      if (!ao(M))
        if (nr.includes(M.key) && e.selectable) {
          const X = M.key === "Escape";
          ro(
            y.value,
            l.value,
            c,
            u,
            r,
            X,
            Y.value
          );
        } else
          !p.value && e.draggable && y.value.selected && vt[M.key] && (b.value = `Moved selected node ${M.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~y.value.position.x}, y: ${~~y.value.position.y}`, N(
            {
              x: vt[M.key].x,
              y: vt[M.key].y
            },
            M.shiftKey
          ));
    }
  }
}), yc = mc, xc = ["transform"], wc = ["width", "height", "x", "y", "rx", "ry"], _c = ["y"], bc = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, Ec = /* @__PURE__ */ we({
  ...bc,
  props: {
    "aria-activedescendant": null,
    "aria-atomic": { type: [Boolean, String] },
    "aria-autocomplete": null,
    "aria-busy": { type: [Boolean, String] },
    "aria-checked": { type: [Boolean, String] },
    "aria-colcount": null,
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-controls": null,
    "aria-current": { type: [Boolean, String] },
    "aria-describedby": null,
    "aria-details": null,
    "aria-disabled": { type: [Boolean, String] },
    "aria-dropeffect": null,
    "aria-errormessage": null,
    "aria-expanded": { type: [Boolean, String] },
    "aria-flowto": null,
    "aria-grabbed": { type: [Boolean, String] },
    "aria-haspopup": { type: [Boolean, String] },
    "aria-hidden": { type: [Boolean, String] },
    "aria-invalid": { type: [Boolean, String] },
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": null,
    "aria-modal": { type: [Boolean, String] },
    "aria-multiline": { type: [Boolean, String] },
    "aria-multiselectable": { type: [Boolean, String] },
    "aria-orientation": null,
    "aria-owns": null,
    "aria-placeholder": null,
    "aria-posinset": null,
    "aria-pressed": { type: [Boolean, String] },
    "aria-readonly": { type: [Boolean, String] },
    "aria-relevant": null,
    "aria-required": { type: [Boolean, String] },
    "aria-roledescription": null,
    "aria-rowcount": null,
    "aria-rowindex": null,
    "aria-rowspan": null,
    "aria-selected": { type: [Boolean, String] },
    "aria-setsize": null,
    "aria-sort": null,
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null,
    innerHTML: null,
    class: null,
    style: null,
    color: null,
    height: null,
    id: null,
    lang: null,
    max: null,
    media: null,
    method: null,
    min: null,
    name: null,
    target: null,
    type: null,
    width: null,
    role: null,
    tabindex: null,
    "accent-height": null,
    accumulate: null,
    additive: null,
    "alignment-baseline": null,
    allowReorder: null,
    alphabetic: null,
    amplitude: null,
    "arabic-form": null,
    ascent: null,
    attributeName: null,
    attributeType: null,
    autoReverse: null,
    azimuth: null,
    baseFrequency: null,
    "baseline-shift": null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: null,
    by: null,
    calcMode: null,
    "cap-height": null,
    clip: null,
    "clip-path": null,
    clipPathUnits: null,
    "clip-rule": null,
    "color-interpolation": null,
    "color-interpolation-filters": null,
    "color-profile": null,
    "color-rendering": null,
    contentScriptType: null,
    contentStyleType: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    decelerate: null,
    descent: null,
    diffuseConstant: null,
    direction: null,
    display: null,
    divisor: null,
    "dominant-baseline": null,
    dur: null,
    dx: null,
    dy: null,
    edgeMode: null,
    elevation: null,
    "enable-background": null,
    end: null,
    exponent: null,
    externalResourcesRequired: null,
    fill: null,
    "fill-opacity": null,
    "fill-rule": null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    "flood-color": null,
    "flood-opacity": null,
    focusable: null,
    "font-family": null,
    "font-size": null,
    "font-size-adjust": null,
    "font-stretch": null,
    "font-style": null,
    "font-variant": null,
    "font-weight": null,
    format: null,
    from: null,
    fx: null,
    fy: null,
    g1: null,
    g2: null,
    "glyph-name": null,
    "glyph-orientation-horizontal": null,
    "glyph-orientation-vertical": null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    hanging: null,
    "horiz-adv-x": null,
    "horiz-origin-x": null,
    href: null,
    ideographic: null,
    "image-rendering": null,
    in2: null,
    in: null,
    intercept: null,
    k1: null,
    k2: null,
    k3: null,
    k4: null,
    k: null,
    kernelMatrix: null,
    kernelUnitLength: null,
    kerning: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    lengthAdjust: null,
    "letter-spacing": null,
    "lighting-color": null,
    limitingConeAngle: null,
    local: null,
    "marker-end": null,
    markerHeight: null,
    "marker-mid": null,
    "marker-start": null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    mode: null,
    numOctaves: null,
    offset: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    "overline-position": null,
    "overline-thickness": null,
    "paint-order": null,
    "panose-1": null,
    pathLength: null,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    "pointer-events": null,
    points: null,
    pointsAtX: null,
    pointsAtY: null,
    pointsAtZ: null,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    r: null,
    radius: null,
    refX: null,
    refY: null,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: null,
    requiredFeatures: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    "shape-rendering": null,
    slope: null,
    spacing: null,
    specularConstant: null,
    specularExponent: null,
    speed: null,
    spreadMethod: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    "stop-color": null,
    "stop-opacity": null,
    "strikethrough-position": null,
    "strikethrough-thickness": null,
    string: null,
    stroke: null,
    "stroke-dasharray": null,
    "stroke-dashoffset": null,
    "stroke-linecap": null,
    "stroke-linejoin": null,
    "stroke-miterlimit": null,
    "stroke-opacity": null,
    "stroke-width": null,
    surfaceScale: null,
    systemLanguage: null,
    tableValues: null,
    targetX: null,
    targetY: null,
    "text-anchor": null,
    "text-decoration": null,
    textLength: null,
    "text-rendering": null,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    "underline-position": null,
    "underline-thickness": null,
    unicode: null,
    "unicode-bidi": null,
    "unicode-range": null,
    "unitsPer-em": null,
    "v-alphabetic": null,
    values: null,
    "vector-effect": null,
    version: null,
    "vert-adv-y": null,
    "vert-origin-x": null,
    "vert-origin-y": null,
    "v-hanging": null,
    "v-ideographic": null,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    "v-mathematical": null,
    widths: null,
    "word-spacing": null,
    "writing-mode": null,
    x1: null,
    x2: null,
    x: null,
    xChannelSelector: null,
    "x-height": null,
    xlinkActuate: null,
    xlinkArcrole: null,
    xlinkHref: null,
    xlinkRole: null,
    xlinkShow: null,
    xlinkTitle: null,
    xlinkType: null,
    xmlns: null,
    y1: null,
    y2: null,
    y: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null,
    label: null,
    labelStyle: { default: {} },
    labelShowBg: { type: Boolean, default: !0 },
    labelBgStyle: { default: {} },
    labelBgPadding: { default: [2, 4] },
    labelBgBorderRadius: { default: 2 }
  },
  setup(e) {
    const t = ce({ x: 0, y: 0, width: 0, height: 0 }), n = ce(null), o = ie(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ze(i), ve([() => e.x, () => e.y, n, () => e.label], i);
    function i() {
      if (!n.value)
        return;
      const r = n.value.getBBox();
      (r.width !== t.value.width || r.height !== t.value.height) && (t.value = r);
    }
    return (r, l) => (le(), de("g", {
      transform: P(o),
      class: "vue-flow__edge-textwrapper"
    }, [
      e.labelShowBg ? (le(), de("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * e.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * e.labelBgPadding[1]}px`,
        x: -e.labelBgPadding[0],
        y: -e.labelBgPadding[1],
        style: tt(e.labelBgStyle),
        rx: e.labelBgBorderRadius,
        ry: e.labelBgBorderRadius
      }, null, 12, wc)) : Fe("", !0),
      Tt("text", kr(r.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: e.labelStyle
      }), [
        Ne(r.$slots, "default", {}, () => [
          P(Ue)(e.label) ? (le(), de(Ge, { key: 1 }, [
            $r(Un(e.label), 1)
          ], 64)) : (le(), wt(Mr(e.label), { key: 0 }))
        ])
      ], 16, _c)
    ], 8, xc));
  }
}), Nn = function({
  id: e,
  path: t,
  label: n,
  labelX: o,
  labelY: i,
  labelBgBorderRadius: r,
  labelBgPadding: l,
  labelBgStyle: a,
  labelShowBg: s = !0,
  labelStyle: u,
  markerStart: c,
  markerEnd: f,
  interactionWidth: g = 20
}, { attrs: m }) {
  return [
    ue("path", {
      id: e,
      style: m.style,
      class: ["vue-flow__edge-path", m.class].join(" "),
      d: t,
      "marker-end": f,
      "marker-start": c
    }),
    g ? ue("path", {
      d: t,
      fill: "none",
      "stroke-opacity": 0,
      "stroke-width": g,
      class: "vue-flow__edge-interaction"
    }) : null,
    n && He(o) && He(i) ? ue(Ec, {
      x: o,
      y: i,
      label: n,
      labelStyle: u,
      labelShowBg: s,
      labelBgStyle: a,
      labelBgPadding: l,
      labelBgBorderRadius: r
    }) : null
  ];
};
Nn.props = [
  "id",
  "path",
  "labelX",
  "labelY",
  "label",
  "labelBgBorderRadius",
  "labelBgPadding",
  "labelBgStyle",
  "labelShowBg",
  "labelStyle",
  "markerStart",
  "markerEnd",
  "interactionWidth"
];
Nn.inheritAttrs = !1;
Nn.compatConfig = { MODE: 3 };
const Cn = Nn;
function mr({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: o
}) {
  const i = Math.abs(n - e) / 2, r = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, a = o < t ? o + l : o - l;
  return [r, a, i, l];
}
function yr({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: o,
  sourceControlX: i,
  sourceControlY: r,
  targetControlX: l,
  targetControlY: a
}) {
  const s = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, u = t * 0.125 + r * 0.375 + a * 0.375 + o * 0.125, c = Math.abs(s - e), f = Math.abs(u - t);
  return [s, u, c, f];
}
function Ut(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ci({ pos: e, x1: t, y1: n, x2: o, y2: i, c: r }) {
  let l, a;
  switch (e) {
    case B.Left:
      l = t - Ut(t - o, r), a = n;
      break;
    case B.Right:
      l = t + Ut(o - t, r), a = n;
      break;
    case B.Top:
      l = t, a = n - Ut(n - i, r);
      break;
    case B.Bottom:
      l = t, a = n + Ut(i - n, r);
      break;
  }
  return [l, a];
}
function xr({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = B.Bottom,
  targetX: o,
  targetY: i,
  targetPosition: r = B.Top,
  curvature: l = 0.25,
  controlOffsetX: a = 0,
  controlOffsetY: s = 0
}) {
  let [u, c] = ci({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [f, g] = ci({
    pos: r,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  });
  u += a, c += s, f += a, g += s;
  const [m, h, d, w] = yr({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: i,
    sourceControlX: u,
    sourceControlY: c,
    targetControlX: f,
    targetControlY: g
  });
  return [
    `M${e},${t} C${u},${c} ${f},${g} ${o},${i}`,
    m,
    h,
    d,
    w
  ];
}
function di({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  let r, l;
  switch (e) {
    case B.Left:
    case B.Right:
      r = 0.5 * (t + o), l = n;
      break;
    case B.Top:
    case B.Bottom:
      r = t, l = 0.5 * (n + i);
      break;
  }
  return [r, l];
}
function wr({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = B.Bottom,
  targetX: o,
  targetY: i,
  targetPosition: r = B.Top,
  controlOffsetX: l = 0,
  controlOffsetY: a = 0
}) {
  let [s, u] = di({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [c, f] = di({
    pos: r,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  });
  s += l, u += a, c += l, f += a;
  const [g, m, h, d] = yr({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: i,
    sourceControlX: s,
    sourceControlY: u,
    targetControlX: c,
    targetControlY: f
  });
  return [
    `M${e},${t} C${s},${u} ${c},${f} ${o},${i}`,
    g,
    m,
    h,
    d
  ];
}
const fi = {
  [B.Left]: { x: -1, y: 0 },
  [B.Right]: { x: 1, y: 0 },
  [B.Top]: { x: 0, y: -1 },
  [B.Bottom]: { x: 0, y: 1 }
};
function Sc({
  source: e,
  sourcePosition: t = B.Bottom,
  target: n
}) {
  return t === B.Left || t === B.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function hi(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function Nc({
  source: e,
  sourcePosition: t = B.Bottom,
  target: n,
  targetPosition: o = B.Top,
  center: i,
  offset: r
}) {
  const l = fi[t], a = fi[o], s = { x: e.x + l.x * r, y: e.y + l.y * r }, u = { x: n.x + a.x * r, y: n.y + a.y * r }, c = Sc({
    source: s,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", g = c[f];
  let m, h, d;
  const [w, p, b, C] = mr({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * a[f] === -1) {
    h = i.x || w, d = i.y || p;
    const N = [
      { x: h, y: s.y },
      { x: h, y: u.y }
    ], y = [
      { x: s.x, y: d },
      { x: u.x, y: d }
    ];
    l[f] === g ? m = f === "x" ? N : y : m = f === "x" ? y : N;
  } else {
    const N = [{ x: s.x, y: u.y }], y = [{ x: u.x, y: s.y }];
    if (f === "x" ? m = l.x === g ? y : N : m = l.y === g ? N : y, t !== o) {
      const D = f === "x" ? "y" : "x", R = l[f] === a[D], Y = s[D] > u[D], z = s[D] < u[D];
      (l[f] === 1 && (!R && Y || R && z) || l[f] !== 1 && (!R && z || R && Y)) && (m = f === "x" ? N : y);
    }
    h = m[0].x, d = m[0].y;
  }
  return [[e, s, ...m, u, n], h, d, b, C];
}
function Cc(e, t, n, o) {
  const i = Math.min(hi(e, t) / 2, hi(t, n) / 2, o), { x: r, y: l } = t;
  if (e.x === r && r === n.x || e.y === l && l === n.y)
    return `L${r} ${l}`;
  if (e.y === l) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${r + i * u},${l}Q ${r},${l} ${r},${l + i * c}`;
  }
  const a = e.x < n.x ? 1 : -1, s = e.y < n.y ? -1 : 1;
  return `L ${r},${l + i * s}Q ${r},${l} ${r + i * a},${l}`;
}
function lo({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = B.Bottom,
  targetX: o,
  targetY: i,
  targetPosition: r = B.Top,
  borderRadius: l = 5,
  centerX: a,
  centerY: s,
  offset: u = 20
}) {
  const [c, f, g, m, h] = Nc({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: r,
    center: { x: a, y: s },
    offset: u
  });
  return [c.reduce((w, p, b) => {
    let C;
    return b > 0 && b < c.length - 1 ? C = Cc(c[b - 1], p, c[b + 1], l) : C = `${b === 0 ? "M" : "L"}${p.x} ${p.y}`, w += C, w;
  }, ""), f, g, m, h];
}
function kc({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: o
}) {
  const [i, r, l, a] = mr({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, r, l, a];
}
const kn = function({ sourcePosition: e = B.Bottom, targetPosition: t = B.Top, ...n }, { attrs: o }) {
  let i = 0, r = 0;
  if (o.sourceNode === o.targetNode) {
    if (e === B.Bottom && t === B.Top || e === B.Top && t === B.Bottom)
      i = (40 + o.sourceNode.dimensions.width / 2) * 4 / 3, r = 0;
    else if (e === B.Left && t === B.Right || e === B.Right && t === B.Left) {
      const u = o.sourceNode;
      i = 0, r = (20 + u.dimensions.height / 2) * 4 / 3;
    }
  }
  const [l, a, s] = xr({
    sourcePosition: e,
    targetPosition: t,
    controlOffsetX: i,
    controlOffsetY: r,
    ...n
  });
  return ue(Cn, {
    path: l,
    labelX: a,
    labelY: s,
    ...n,
    ...o
  });
};
kn.props = [
  "sourcePosition",
  "targetPosition",
  "label",
  "labelStyle",
  "labelShowBg",
  "labelBgStyle",
  "labelBgPadding",
  "labelBgBorderRadius",
  "sourceY",
  "sourceX",
  "targetX",
  "targetY",
  "curvature",
  "markerEnd",
  "markerStart",
  "interactionWidth"
];
kn.inheritAttrs = !1;
kn.compatConfig = { MODE: 3 };
const Mc = kn, Mn = function({ sourcePosition: e = B.Bottom, targetPosition: t = B.Top, ...n }, { attrs: o }) {
  let i = 0, r = 0;
  if (o.sourceNode === o.targetNode) {
    if (e === B.Bottom && t === B.Top || e === B.Top && t === B.Bottom)
      i = (-40 - o.sourceNode.dimensions.width / 2) * 4 / 3, r = 0;
    else if (e === B.Left && t === B.Right || e === B.Right && t === B.Left) {
      const u = o.sourceNode;
      i = 0, r = (20 + u.dimensions.height / 2) * 4 / 3;
    }
  }
  const [l, a, s] = wr({
    sourcePosition: e,
    targetPosition: t,
    controlOffsetX: i,
    controlOffsetY: r,
    ...n
  });
  return ue(Cn, {
    path: l,
    labelX: a,
    labelY: s,
    ...n,
    ...o
  });
};
Mn.props = [
  "sourcePosition",
  "targetPosition",
  "label",
  "labelStyle",
  "labelShowBg",
  "labelBgStyle",
  "labelBgPadding",
  "labelBgBorderRadius",
  "sourceY",
  "sourceX",
  "targetX",
  "targetY",
  "markerEnd",
  "markerStart",
  "interactionWidth"
];
Mn.inheritAttrs = !1;
Mn.compatConfig = { MODE: 3 };
const $c = Mn, $n = function({ sourcePosition: e = B.Bottom, targetPosition: t = B.Top, ...n }, { attrs: o }) {
  let i, r;
  if (o.sourceNode === o.targetNode) {
    if (e === B.Bottom && t === B.Top || e === B.Top && t === B.Bottom) {
      const u = o.sourceNode;
      i = n.sourceX + (n.offset ?? 40) + u.dimensions.width / 2, r = (n.sourceY + n.targetY) / 2;
    } else if (e === B.Left && t === B.Right || e === B.Right && t === B.Left) {
      const u = o.sourceNode;
      i = (n.sourceX + n.targetX) / 2, r = n.sourceY + (n.offset ?? 20) + u.dimensions.height / 2;
    }
  }
  const [l, a, s] = lo({
    sourcePosition: e,
    targetPosition: t,
    centerX: i,
    centerY: r,
    ...n
  });
  return ue(Cn, {
    path: l,
    labelX: a,
    labelY: s,
    ...n,
    ...o
  });
};
$n.props = [
  "sourcePosition",
  "targetPosition",
  "label",
  "labelStyle",
  "labelShowBg",
  "labelBgStyle",
  "labelBgPadding",
  "labelBgBorderRadius",
  "sourceY",
  "sourceX",
  "targetX",
  "targetY",
  "borderRadius",
  "markerEnd",
  "markerStart",
  "interactionWidth",
  "offset"
];
$n.inheritAttrs = !1;
$n.compatConfig = { MODE: 3 };
const _r = $n, Tn = function(e, { attrs: t }) {
  return ue(_r, { ...e, ...t, borderRadius: 0 });
};
Tn.props = [
  "sourcePosition",
  "targetPosition",
  "label",
  "labelStyle",
  "labelShowBg",
  "labelBgStyle",
  "labelBgPadding",
  "labelBgBorderRadius",
  "sourceY",
  "sourceX",
  "targetX",
  "targetY",
  "markerEnd",
  "markerStart",
  "interactionWidth"
];
Tn.inheritAttrs = !1;
Tn.compatConfig = { MODE: 3 };
const Tc = Tn, On = function(e, { attrs: t }) {
  const [n, o, i] = kc(e);
  return ue(Cn, {
    path: n,
    labelX: o,
    labelY: i,
    ...e,
    ...t
  });
};
On.props = [
  "label",
  "labelStyle",
  "labelShowBg",
  "labelBgStyle",
  "labelBgPadding",
  "labelBgBorderRadius",
  "sourceY",
  "sourceX",
  "targetX",
  "targetY",
  "markerEnd",
  "markerStart",
  "interactionWidth"
];
On.inheritAttrs = !1;
On.compatConfig = { MODE: 3 };
const Oc = On;
function Ic(e, t, n) {
  return n === B.Left ? e - t : n === B.Right ? e + t : e;
}
function Ac(e, t, n) {
  return n === B.Top ? e - t : n === B.Bottom ? e + t : e;
}
const So = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: o = B.Top,
  type: i
}) {
  return ue("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${i}`,
    cx: Ic(t, e, o),
    cy: Ac(n, e, o),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
So.props = ["radius", "centerX", "centerY", "position", "type"];
So.compatConfig = { MODE: 3 };
const gi = So, Dc = we({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["name", "type", "id", "updatable", "selectable", "focusable", "edge"],
  setup(e) {
    const {
      id: t,
      addSelectedEdges: n,
      connectionMode: o,
      edgeUpdaterRadius: i,
      emits: r,
      nodesSelectionActive: l,
      noPanClassName: a,
      getEdgeTypes: s,
      removeSelectedEdges: u,
      findEdge: c,
      findNode: f,
      isValidConnection: g
    } = pe(), m = Jc(e.edge, r), h = Mt(e, "edge"), d = ce(!1), w = ce(!1), p = ce(""), b = ce(null), C = ce("source"), v = ce();
    xt(vr, e.id), xt(pr, v);
    const N = ie(() => h.value.class instanceof Function ? h.value.class(h.value) : h.value.class), y = ie(() => h.value.style instanceof Function ? h.value.style(h.value) : h.value.style), { handlePointerDown: D } = Er({
      nodeId: p,
      handleId: b,
      type: C,
      isValidConnection: g,
      edgeUpdaterType: C,
      onEdgeUpdate: z,
      onEdgeUpdateEnd: J
    });
    return () => {
      const T = f(h.value.source), K = f(h.value.target);
      if (!T || !K || !h.value || T.hidden || K.hidden)
        return null;
      let te;
      o.value === it.Strict ? te = T.handleBounds.source : te = [...T.handleBounds.source || [], ...T.handleBounds.target || []];
      const M = ii(te, h.value.sourceHandle);
      let X;
      o.value === it.Strict ? X = K.handleBounds.target : X = [...K.handleBounds.target || [], ...K.handleBounds.source || []];
      const I = ii(X, h.value.targetHandle), q = M ? M.position : B.Bottom, se = I ? I.position : B.Top, { sourceX: ge, sourceY: me, targetY: Pe, targetX: ze } = Ju(
        T,
        M,
        q,
        K,
        I,
        se
      );
      return h.value.sourceX = ge, h.value.sourceY = me, h.value.targetX = ze, h.value.targetY = Pe, ue(
        "g",
        {
          ref: v,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${e.type === !1 ? "default" : e.name}`,
            a.value,
            N.value,
            {
              updating: d.value,
              selected: h.value.selected,
              animated: h.value.animated,
              inactive: !e.selectable
            }
          ],
          onClick: ee,
          onContextmenu: x,
          onDblclick: k,
          onMouseenter: E,
          onMousemove: O,
          onMouseleave: L,
          onKeyDown: e.focusable ? G : void 0,
          tabIndex: e.focusable ? 0 : void 0,
          "aria-label": h.value.ariaLabel === null ? void 0 : h.value.ariaLabel || `Edge from ${h.value.source} to ${h.value.target}`,
          "aria-describedby": e.focusable ? `${tr}-${t}` : void 0,
          role: e.focusable ? "button" : void 0
        },
        [
          w.value ? null : ue(e.type === !1 ? s.value.default : e.type, {
            id: e.id,
            sourceNode: T,
            targetNode: K,
            source: h.value.source,
            target: h.value.target,
            type: h.value.type,
            updatable: e.updatable,
            selected: h.value.selected,
            animated: h.value.animated,
            label: h.value.label,
            labelStyle: h.value.labelStyle,
            labelShowBg: h.value.labelShowBg,
            labelBgStyle: h.value.labelBgStyle,
            labelBgPadding: h.value.labelBgPadding,
            labelBgBorderRadius: h.value.labelBgBorderRadius,
            data: h.value.data,
            events: { ...h.value.events, ...m.on },
            style: y.value,
            markerStart: `url(#${Qe(h.value.markerStart, t)})`,
            markerEnd: `url(#${Qe(h.value.markerEnd, t)})`,
            sourcePosition: q,
            targetPosition: se,
            sourceX: ge,
            sourceY: me,
            targetX: ze,
            targetY: Pe,
            sourceHandleId: h.value.sourceHandle,
            targetHandleId: h.value.targetHandle,
            interactionWidth: h.value.interactionWidth
          }),
          [
            e.updatable === "source" || e.updatable === !0 ? [
              ue(
                "g",
                {
                  onMousedown: Z,
                  onMouseenter: R,
                  onMouseout: Y
                },
                ue(gi, {
                  position: q,
                  centerX: ge,
                  centerY: me,
                  radius: i.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            e.updatable === "target" || e.updatable === !0 ? [
              ue(
                "g",
                {
                  onMousedown: $,
                  onMouseenter: R,
                  onMouseout: Y
                },
                ue(gi, {
                  position: se,
                  centerX: ze,
                  centerY: Pe,
                  radius: i.value,
                  type: "target",
                  "data-type": "target"
                })
              )
            ] : null
          ]
        ]
      );
    };
    function R() {
      d.value = !0;
    }
    function Y() {
      d.value = !1;
    }
    function z(T, K) {
      m.emit.update({ event: T, edge: h.value, connection: K });
    }
    function J(T) {
      m.emit.updateEnd({ event: T, edge: h.value }), w.value = !1;
    }
    function W(T, K) {
      T.button === 0 && (w.value = !0, p.value = K ? h.value.target : h.value.source, b.value = (K ? h.value.targetHandle : h.value.sourceHandle) ?? "", C.value = K ? "target" : "source", m.emit.updateStart({ event: T, edge: h.value }), D(T));
    }
    function ee(T) {
      const K = { event: T, edge: h.value };
      e.selectable && (l.value = !1, n([h.value])), m.emit.click(K);
    }
    function x(T) {
      m.emit.contextMenu({ event: T, edge: h.value });
    }
    function k(T) {
      m.emit.doubleClick({ event: T, edge: h.value });
    }
    function E(T) {
      m.emit.mouseEnter({ event: T, edge: h.value });
    }
    function O(T) {
      m.emit.mouseMove({ event: T, edge: h.value });
    }
    function L(T) {
      m.emit.mouseLeave({ event: T, edge: h.value });
    }
    function Z(T) {
      W(T, !0);
    }
    function $(T) {
      W(T, !1);
    }
    function G(T) {
      var K;
      nr.includes(T.key) && e.selectable && (T.key === "Escape" ? ((K = v.value) == null || K.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), Pc = Dc, zc = {
  height: "0",
  width: "0"
}, Bc = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, Gd = /* @__PURE__ */ we({
  ...Bc,
  setup(e) {
    const { viewportRef: t } = pe(), n = Qt(() => t.value.getElementsByClassName("vue-flow__edge-labels")[0]);
    return (o, i) => (le(), de("svg", null, [
      (le(), de("foreignObject", zc, [
        (le(), wt(Tr, {
          to: P(n),
          disabled: !P(n)
        }, [
          Ne(o.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
}), Rc = {
  [B.Left]: B.Right,
  [B.Right]: B.Left,
  [B.Top]: B.Bottom,
  [B.Bottom]: B.Top
}, Vc = we({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var f;
    const {
      connectionMode: e,
      connectionStartHandle: t,
      connectionEndHandle: n,
      connectionPosition: o,
      connectionLineType: i,
      connectionLineStyle: r,
      connectionLineOptions: l,
      connectionStatus: a,
      viewport: s,
      findNode: u
    } = pe(), c = (f = We(Sn)) == null ? void 0 : f["connection-line"];
    return () => {
      var k, E, O, L, Z, $;
      if (!t.value)
        return null;
      const g = u(t.value.nodeId);
      if (!g)
        return null;
      const m = t.value.handleId, h = t.value.type, d = ((k = n.value) == null ? void 0 : k.handleId) && u(n.value.nodeId) || null, w = (o.value.x - s.value.x) / s.value.zoom, p = (o.value.y - s.value.y) / s.value.zoom, b = g.handleBounds;
      let C = b == null ? void 0 : b[h];
      if (e.value === it.Loose && (C = C || (b == null ? void 0 : b[h === "source" ? "target" : "source"])), !C)
        return null;
      const v = m ? C.find((G) => G.id === m) : C[0], N = v ? v.x + v.width / 2 : (g.dimensions.width ?? 0) / 2, y = v ? v.y + v.height / 2 : g.dimensions.height ?? 0, D = (((E = g.computedPosition) == null ? void 0 : E.x) ?? 0) + N, R = (((O = g.computedPosition) == null ? void 0 : O.y) ?? 0) + y, Y = v == null ? void 0 : v.position, z = d && ((L = n.value) == null ? void 0 : L.handleId) && ((e.value === it.Strict ? (Z = d.handleBounds[h === "source" ? "target" : "source"]) == null ? void 0 : Z.find(
        (G) => {
          var T;
          return G.id === ((T = n.value) == null ? void 0 : T.handleId);
        }
      ) : [...d.handleBounds.source || [], ...d.handleBounds.target || []].find(
        (G) => {
          var T;
          return G.id === ((T = n.value) == null ? void 0 : T.handleId);
        }
      )) || (($ = d.handleBounds[h ?? "target"]) == null ? void 0 : $[0])) || null, J = Y ? Rc[Y] : null;
      if (!Y || !J)
        return null;
      const W = i.value ?? l.value.type;
      let ee = "";
      const x = {
        sourceX: D,
        sourceY: R,
        sourcePosition: Y,
        targetX: w,
        targetY: p,
        targetPosition: J
      };
      return W === st.Bezier ? [ee] = xr(x) : W === st.Step ? [ee] = lo({
        ...x,
        borderRadius: 0
      }) : W === st.SmoothStep ? [ee] = lo(x) : W === st.SimpleBezier ? [ee] = wr(x) : ee = `M${D},${R} ${w},${p}`, ue(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        ue(
          "g",
          { class: "vue-flow__connection" },
          c ? ue(c, {
            sourceX: D,
            sourceY: R,
            sourcePosition: Y,
            targetX: w,
            targetY: p,
            targetPosition: J,
            sourceNode: g,
            sourceHandle: v,
            targetNode: d,
            targetHandle: z,
            markerEnd: `url(#${Qe(l.value.markerEnd)})`,
            markerStart: `url(#${Qe(l.value.markerStart)})`,
            connectionStatus: a.value
          }) : ue("path", {
            d: ee,
            class: [l.value.class, a, "vue-flow__connection-path"],
            style: r.value || l.value.style,
            "marker-end": `url(#${Qe(l.value.markerEnd)})`,
            "marker-start": `url(#${Qe(l.value.markerStart)})`
          })
        )
      );
    };
  }
}), Hc = Vc, Lc = ["tabIndex"], Fc = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Gc = /* @__PURE__ */ we({
  ...Fc,
  setup(e) {
    const t = pe(), n = ne(t, "emits"), o = ne(t, "viewport"), i = ne(t, "getSelectedNodes"), r = ne(t, "noPanClassName"), l = ne(t, "disableKeyboardA11y"), a = ne(t, "userSelectionActive"), s = Sr(), u = ce(), c = fr({
      el: u,
      onStart(d) {
        n.value.selectionDragStart(d);
      },
      onDrag(d) {
        n.value.selectionDrag(d);
      },
      onStop(d) {
        n.value.selectionDragStop(d);
      }
    });
    Ze(() => {
      var d;
      l.value || (d = u.value) == null || d.focus({ preventScroll: !0 });
    });
    const f = ie(() => _o(i.value)), g = ie(() => ({
      width: `${f.value.width}px`,
      height: `${f.value.height}px`,
      top: `${f.value.y}px`,
      left: `${f.value.x}px`
    }));
    function m(d) {
      n.value.selectionContextMenu({ event: d, nodes: i.value });
    }
    function h(d) {
      l.value || vt[d.key] && s(
        {
          x: vt[d.key].x,
          y: vt[d.key].y
        },
        d.shiftKey
      );
    }
    return (d, w) => !P(a) && P(f).width && P(f).height ? (le(), de("div", {
      key: 0,
      class: yt(["vue-flow__nodesselection vue-flow__container", P(r)]),
      style: tt({ transform: `translate(${P(o).x}px,${P(o).y}px) scale(${P(o).zoom})` })
    }, [
      Tt("div", {
        ref_key: "el",
        ref: u,
        class: yt([{ dragging: P(c) }, "vue-flow__nodesselection-rect"]),
        style: tt(P(g)),
        tabIndex: P(l) ? void 0 : -1,
        onContextmenu: m,
        onKeydown: h
      }, null, 46, Lc)
    ], 6)) : Fe("", !0);
  }
}), Yc = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, Xc = /* @__PURE__ */ we({
  ...Yc,
  setup(e) {
    const { userSelectionRect: t } = pe();
    return (n, o) => {
      var i, r, l, a;
      return le(), de("div", {
        class: "vue-flow__selection vue-flow__container",
        style: tt({
          width: `${(i = P(t)) == null ? void 0 : i.width}px`,
          height: `${(r = P(t)) == null ? void 0 : r.height}px`,
          transform: `translate(${(l = P(t)) == null ? void 0 : l.x}px, ${(a = P(t)) == null ? void 0 : a.y}px)`
        })
      }, null, 4);
    };
  }
}), Uc = {
  input: vc,
  default: gc,
  output: pc
}, Zc = {
  default: Mc,
  straight: Oc,
  step: Tc,
  smoothstep: _r,
  simplebezier: $c
};
function Wc() {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    nodeTypes: {},
    edgeTypes: {},
    initialized: !1,
    dimensions: {
      width: 0,
      height: 0
    },
    viewport: { x: 0, y: 0, zoom: 1 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    selectionMode: mo.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: sn.Free,
    panOnDrag: !0,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: !1,
    defaultViewport: { x: 0, y: 0, zoom: 1 },
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    defaultMarkerColor: "#b1b1b7",
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: st.Bezier,
      style: {}
    },
    connectionMode: it.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: NaN, y: NaN },
    connectionRadius: 20,
    connectOnClick: !0,
    connectionStatus: null,
    isValidConnection: null,
    snapGrid: [15, 15],
    snapToGrid: !1,
    edgesUpdatable: !1,
    edgesFocusable: !0,
    nodesFocusable: !0,
    nodesConnectable: !0,
    nodesDraggable: !0,
    elementsSelectable: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    selectionKeyCode: "Shift",
    multiSelectionKeyCode: "Meta",
    zoomActivationKeyCode: "Meta",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: uc(),
    applyDefault: !0,
    autoConnect: !1,
    fitViewOnInit: !1,
    noDragClassName: "nodrag",
    noWheelClassName: "nowheel",
    noPanClassName: "nopan",
    defaultEdgeOptions: void 0,
    elevateEdgesOnSelect: !1,
    elevateNodesOnSelect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnConnect: !0,
    disableKeyboardA11y: !1,
    ariaLiveMessage: "",
    __experimentalFeatures: {
      nestedFlow: !1
    }
  };
}
function br(e) {
  const t = Wc();
  return e && Object.keys(e).forEach((n) => {
    const o = e[n];
    fe(o) && (t[n] = o);
  }), t;
}
function Kc(e, t, n, o) {
  let i = !1;
  const r = ld(e, t), l = (_) => {
    const S = _ ?? n.value ?? [];
    e.hooks.updateNodeInternals.trigger(S);
  }, a = (_) => {
    if (_)
      return e.nodes && !n.value.length ? e.nodes.find((S) => S.id === _) : e.nodes[n.value.indexOf(_)];
  }, s = (_) => {
    if (_)
      return e.edges && !o.value.length ? e.edges.find((S) => S.id === _) : e.edges[o.value.indexOf(_)];
  }, u = (_, S, H) => {
    const A = [];
    _.forEach((V) => {
      var j, ae;
      const Q = {
        id: V.id,
        type: "position",
        dragging: H,
        from: V.from
      };
      if (S && (Q.position = V.position, V.parentNode)) {
        const oe = a(V.parentNode);
        Q.position = {
          x: Q.position.x - (((j = oe == null ? void 0 : oe.computedPosition) == null ? void 0 : j.x) ?? 0),
          y: Q.position.y - (((ae = oe == null ? void 0 : oe.computedPosition) == null ? void 0 : ae.y) ?? 0)
        };
      }
      A.push(Q);
    }), A != null && A.length && e.hooks.nodesChange.trigger(A);
  }, c = (_) => {
    var V;
    if (!e.vueFlowRef)
      return;
    const S = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!S)
      return;
    let H;
    if ((V = e.__experimentalFeatures) != null && V.nestedFlow) {
      let Q = [S], j = S, ae;
      for (; !ae && j; )
        j = j.parentElement, ae = j == null ? void 0 : j.classList.contains("vue-flow__transformationpane"), ae && (Q = [j, ...Q]);
      Q.forEach((oe) => {
        const Ee = window.getComputedStyle(oe), { m22: lt } = new window.DOMMatrixReadOnly(Ee.transform);
        H ? H *= lt : H = lt;
      });
    } else {
      const Q = window.getComputedStyle(S), { m22: j } = new window.DOMMatrixReadOnly(Q.transform);
      H = j;
    }
    const A = _.reduce((Q, j) => {
      const ae = a(j.id);
      if (ae) {
        const oe = yn(j.nodeElement);
        !!(oe.width && oe.height && (ae.dimensions.width !== oe.width || ae.dimensions.height !== oe.height || j.forceUpdate)) && (ae.handleBounds.source = ai(".source", j.nodeElement, H), ae.handleBounds.target = ai(".target", j.nodeElement, H), ae.dimensions = oe, ae.initialized = !0, Q.push({
          id: ae.id,
          type: "dimensions",
          dimensions: oe
        }));
      }
      return Q;
    }, []);
    e.fitViewOnInit && !i && (Se(() => r.value.initialized).toBe(!0).then(() => {
      r.value.fitView();
    }), i = !0), A.length && e.hooks.nodesChange.trigger(A);
  }, f = (_, S) => {
    const H = _.map((Q) => Q.id);
    let A, V = [];
    if (e.multiSelectionActive)
      A = H.map((Q) => Re(Q, S));
    else {
      const Q = Rn([...e.nodes, ...e.edges], H);
      A = Q.changedNodes, V = Q.changedEdges;
    }
    A.length && e.hooks.nodesChange.trigger(A), V.length && e.hooks.edgesChange.trigger(V);
  }, g = (_, S) => {
    const H = _.map((Q) => Q.id);
    let A = [], V;
    if (e.multiSelectionActive)
      V = H.map((Q) => Re(Q, S));
    else {
      const Q = Rn([...e.nodes, ...e.edges], H);
      A = Q.changedNodes, V = Q.changedEdges;
    }
    A.length && e.hooks.nodesChange.trigger(A), V.length && e.hooks.edgesChange.trigger(V);
  }, m = (_, S) => {
    const H = _.filter(pt).map((j) => j.id), A = _.filter(Ae).map((j) => j.id);
    let { changedNodes: V, changedEdges: Q } = Rn([...e.nodes, ...e.edges], [...H, ...A]);
    e.multiSelectionActive && (V = H.map((j) => Re(j, S)), Q = A.map((j) => Re(j, S))), V.length && e.hooks.nodesChange.trigger(V), Q.length && e.hooks.edgesChange.trigger(Q);
  }, h = (_) => {
    f(_, !0);
  }, d = (_) => {
    g(_, !0);
  }, w = (_) => {
    m(_, !0);
  }, p = (_) => {
    if (!_.length)
      return f(_, !1);
    const H = _.map((A) => A.id).map((A) => Re(A, !1));
    H.length && e.hooks.nodesChange.trigger(H);
  }, b = (_) => {
    if (!_.length)
      return g(_, !1);
    const H = _.map((A) => A.id).map((A) => Re(A, !1));
    H.length && e.hooks.edgesChange.trigger(H);
  }, C = (_) => {
    if (!_ || !_.length)
      return m([], !1);
    const { changedNodes: S, changedEdges: H } = _.reduce(
      (A, V) => {
        const Q = Re(V.id, !1);
        return pt(V) ? A.changedNodes.push(Q) : A.changedEdges.push(Q), A;
      },
      { changedNodes: [], changedEdges: [] }
    );
    S.length && e.hooks.nodesChange.trigger(S), H.length && e.hooks.edgesChange.trigger(H);
  }, v = (_) => {
    var S;
    (S = e.d3Zoom) == null || S.scaleExtent([_, e.maxZoom]), e.minZoom = _;
  }, N = (_) => {
    var S;
    (S = e.d3Zoom) == null || S.scaleExtent([e.minZoom, _]), e.maxZoom = _;
  }, y = (_) => {
    var S;
    (S = e.d3Zoom) == null || S.translateExtent(_), e.translateExtent = _;
  }, D = (_) => {
    e.nodeExtent = _, l(n.value);
  }, R = (_) => {
    e.nodesDraggable = _, e.nodesConnectable = _, e.elementsSelectable = _;
  }, Y = (_) => {
    const S = _ instanceof Function ? _(e.nodes) : _;
    !e.initialized && !S.length || (e.nodes = si(S, e.nodes, a, e.hooks.error.trigger));
  }, z = (_) => {
    const S = _ instanceof Function ? _(e.edges) : _;
    if (!e.initialized && !S.length)
      return;
    const H = e.isValidConnection ? S.filter(
      (A) => e.isValidConnection(A, {
        edges: e.edges,
        sourceNode: a(A.source),
        targetNode: a(A.target)
      })
    ) : S;
    e.edges = H.reduce((A, V) => {
      const Q = a(V.source), j = a(V.target), ae = !Q || typeof Q > "u", oe = !j || typeof j > "u";
      if (ae && oe ? e.hooks.error.trigger(new xe(ye.EDGE_SOURCE_TARGET_MISSING, V.id, V.source, V.target)) : (ae && e.hooks.error.trigger(new xe(ye.EDGE_SOURCE_MISSING, V.id, V.source)), oe && e.hooks.error.trigger(new xe(ye.EDGE_TARGET_MISSING, V.id, V.target))), ae || oe)
        return A;
      const Ee = s(V.id);
      return A.push({
        ...xo(V, Object.assign({}, Ee, e.defaultEdgeOptions)),
        sourceNode: Q,
        targetNode: j
      }), A;
    }, []);
  }, J = (_) => {
    const S = _ instanceof Function ? _([...e.nodes, ...e.edges]) : _;
    !e.initialized && !S.length || (Y(S.filter(pt)), z(S.filter(Ae)));
  }, W = (_) => {
    let S = _ instanceof Function ? _(e.nodes) : _;
    S = Array.isArray(S) ? S : [S];
    const A = si(S, e.nodes, a, e.hooks.error.trigger).map(ti);
    A.length && e.hooks.nodesChange.trigger(A);
  }, ee = (_) => {
    let S = _ instanceof Function ? _(e.edges) : _;
    S = Array.isArray(S) ? S : [S];
    const A = (e.isValidConnection ? S.filter(
      (V) => e.isValidConnection(V, {
        edges: e.edges,
        sourceNode: a(V.source),
        targetNode: a(V.target)
      })
    ) : S).reduce((V, Q) => {
      const j = ac(
        {
          ...Q,
          ...e.defaultEdgeOptions
        },
        e.edges,
        e.hooks.error.trigger
      );
      if (j) {
        const ae = a(j.source), oe = a(j.target), Ee = !ae || typeof ae > "u", lt = !oe || typeof oe > "u";
        if (Ee && lt ? e.hooks.error.trigger(new xe(ye.EDGE_SOURCE_TARGET_MISSING, j.id, j.source, j.target)) : (Ee && e.hooks.error.trigger(new xe(ye.EDGE_SOURCE_MISSING, j.id, j.source)), lt && e.hooks.error.trigger(new xe(ye.EDGE_TARGET_MISSING, j.id, j.target))), Ee || lt)
          return V;
        V.push(
          ti({
            ...j,
            sourceNode: ae,
            targetNode: oe
          })
        );
      }
      return V;
    }, []);
    A.length && e.hooks.edgesChange.trigger(A);
  }, x = (_, S = !0) => {
    let H = _ instanceof Function ? _(e.nodes) : _;
    H = Array.isArray(H) ? H : [H];
    const A = [], V = [];
    H.forEach((Q) => {
      const j = typeof Q == "string" ? a(Q) : Q;
      if (j && !(fe(j.deletable) && !j.deletable) && (A.push(Bn(j.id)), S)) {
        const ae = wn([j], e.edges).filter((oe) => fe(oe.deletable) ? oe.deletable : !0);
        V.push(...ae.map((oe) => Bn(oe.id)));
      }
    }), V.length && e.hooks.edgesChange.trigger(V), A.length && e.hooks.nodesChange.trigger(A);
  }, k = (_) => {
    let S = _ instanceof Function ? _(e.edges) : _;
    S = Array.isArray(S) ? S : [S];
    const H = [];
    S.forEach((A) => {
      const V = typeof A == "string" ? s(A) : A;
      V && (fe(V.deletable) && !V.deletable || H.push(Bn(typeof A == "string" ? A : A.id)));
    }), e.hooks.edgesChange.trigger(H);
  }, E = (_, S, H = !0) => sc(_, S, e.edges, s, H, e.hooks.error.trigger), O = (_) => dn(_, e.nodes), L = (_) => dn(_, e.edges), Z = (_, S, H, A = !1) => {
    A ? e.connectionClickStartHandle = _ : e.connectionStartHandle = _, e.connectionEndHandle = null, e.connectionStatus = null, S && (e.connectionPosition = S);
  }, $ = (_, S = null, H = null) => {
    e.connectionStartHandle && (e.connectionPosition = _, e.connectionEndHandle = S, e.connectionStatus = H);
  }, G = (_, S) => {
    e.connectionPosition = { x: NaN, y: NaN }, e.connectionEndHandle = null, e.connectionStatus = null, S ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, T = (_) => {
    const S = Xu(_), H = S ? null : a(_.id);
    return !S && !H ? [null, null, S] : [S ? _ : Jo(H), H, S];
  }, K = (_, S = !0, H) => {
    const [A, V, Q] = T(_);
    return A ? (H || e.nodes).filter((j) => {
      if (!Q && (j.id === V.id || !j.computedPosition))
        return !1;
      const ae = Jo(j), oe = io(ae, A);
      return S && oe > 0 || oe >= Number(_.width) * Number(_.height);
    }) : [];
  }, te = (_, S, H = !0) => {
    const [A] = T(_);
    if (!A)
      return !1;
    const V = io(A, S);
    return H && V > 0 || V >= Number(_.width) * Number(_.height);
  }, M = (_) => {
    const { viewport: S, dimensions: H, d3Zoom: A, d3Selection: V, translateExtent: Q } = e;
    if (!A || !V || !_.x && !_.y)
      return !1;
    const j = ot.translate(S.x + _.x, S.y + _.y).scale(S.zoom), ae = [
      [0, 0],
      [H.width, H.height]
    ], oe = A.constrain()(j, ae, Q), Ee = e.viewport.x !== oe.x || e.viewport.y !== oe.y || e.viewport.zoom !== oe.k;
    return A.transform(V, oe), Ee;
  }, X = (_) => {
    const S = _ instanceof Function ? _(e) : _, H = [
      "modelValue",
      "nodes",
      "edges",
      "maxZoom",
      "minZoom",
      "translateExtent",
      "nodeExtent",
      "hooks",
      "defaultEdgeOptions"
    ], A = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    fe(S.defaultEdgeOptions) && (e.defaultEdgeOptions = S.defaultEdgeOptions);
    const V = S.modelValue || S.nodes || S.edges ? [] : void 0;
    V && (S.modelValue && V.push(...S.modelValue), S.nodes && V.push(...S.nodes), S.edges && V.push(...S.edges), J(V));
    const Q = () => {
      fe(S.maxZoom) && N(S.maxZoom), fe(S.minZoom) && v(S.minZoom), fe(S.translateExtent) && y(S.translateExtent), fe(S.nodeExtent) && D(S.nodeExtent);
    };
    Object.keys(S).forEach((j) => {
      const ae = j, oe = S[ae];
      ![...H, ...A].includes(ae) && fe(oe) && (e[ae] = oe);
    }), e.d3Zoom ? Q() : Se(() => e.d3Zoom).not.toBeUndefined().then(Q), e.initialized || (e.initialized = !0);
  }, I = async (_ = { padding: 0.1 }) => {
    await Se(() => r.value.initialized).toBe(!0), r.value.fitView(_);
  }, q = async (_) => {
    await Se(() => r.value.initialized).toBe(!0), r.value.zoomIn(_);
  }, se = async (_) => {
    await Se(() => r.value.initialized).toBe(!0), r.value.zoomOut(_);
  }, ge = async (_, S) => {
    await Se(() => r.value.initialized).toBe(!0), r.value.zoomTo(_, S);
  }, me = async (_, S) => {
    await Se(() => r.value.initialized).toBe(!0), r.value.setTransform(_, S);
  };
  return {
    updateNodePositions: u,
    updateNodeDimensions: c,
    setElements: J,
    setNodes: Y,
    setEdges: z,
    addNodes: W,
    addEdges: ee,
    removeNodes: x,
    removeEdges: k,
    findNode: a,
    findEdge: s,
    updateEdge: E,
    applyEdgeChanges: L,
    applyNodeChanges: O,
    addSelectedElements: w,
    addSelectedNodes: h,
    addSelectedEdges: d,
    setMinZoom: v,
    setMaxZoom: N,
    setTranslateExtent: y,
    setNodeExtent: D,
    removeSelectedElements: C,
    removeSelectedNodes: p,
    removeSelectedEdges: b,
    startConnection: Z,
    updateConnection: $,
    endConnection: G,
    setInteractive: R,
    setState: X,
    getIntersectingNodes: K,
    isNodeIntersecting: te,
    panBy: M,
    fitView: I,
    zoomIn: q,
    zoomOut: se,
    zoomTo: ge,
    setTransform: me,
    getTransform: () => r.value.getTransform(),
    setCenter: async (_, S, H) => {
      await Se(() => r.value.initialized).toBe(!0), r.value.setCenter(_, S, H);
    },
    fitBounds: async (_, S) => {
      await Se(() => r.value.initialized).toBe(!0), r.value.fitBounds(_, S);
    },
    project: (_) => r.value.project(_),
    toObject: () => JSON.parse(
      JSON.stringify({
        nodes: e.nodes.map((_) => {
          const {
            computedPosition: S,
            handleBounds: H,
            selected: A,
            dimensions: V,
            isParent: Q,
            resizing: j,
            dragging: ae,
            initialized: oe,
            ...Ee
          } = _;
          return Ee;
        }),
        edges: e.edges.map((_) => {
          const { selected: S, sourceNode: H, targetNode: A, ...V } = _;
          return V;
        }),
        position: [e.viewport.x, e.viewport.y],
        zoom: e.viewport.zoom
      })
    ),
    fromObject: (_) => {
      const { nodes: S, edges: H, position: A, zoom: V } = _;
      S && Y(S), H && z(H), A && me({ x: A[0], y: A[1], zoom: V || 1 });
    },
    updateNodeInternals: l,
    $reset: () => {
      const _ = br();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const S = ot.translate(_.defaultViewport.x ?? 0, _.defaultViewport.y ?? 0).scale(rt(_.defaultViewport.zoom ?? 1, _.minZoom, _.maxZoom)), H = e.viewportRef.getBoundingClientRect(), A = [
          [0, 0],
          [H.width, H.height]
        ], V = e.d3Zoom.constrain()(S, A, _.translateExtent);
        e.d3Zoom.transform(e.d3Selection, V);
      }
      X(_);
    },
    $destroy: () => {
    }
  };
}
function qc(e, t, n) {
  const o = ie(() => (d) => e.nodes && !t.value.length ? e.nodes.find((w) => w.id === d) : e.nodes[t.value.indexOf(d)]), i = ie(() => (d) => e.edges && !n.value.length ? e.edges.find((w) => w.id === d) : e.edges[n.value.indexOf(d)]), r = ie(() => {
    var p;
    const d = {
      ...Zc,
      ...e.edgeTypes
    }, w = Object.keys(d);
    return (p = e.edges) == null || p.forEach((b) => b.type && !w.includes(b.type) && (d[b.type] = b.type)), d;
  }), l = ie(() => {
    var p;
    const d = {
      ...Uc,
      ...e.nodeTypes
    }, w = Object.keys(d);
    return (p = e.nodes) == null || p.forEach((b) => b.type && !w.includes(b.type) && (d[b.type] = b.type)), d;
  }), a = ie(() => {
    const d = e.nodes.filter((w) => !w.hidden);
    return e.onlyRenderVisibleElements ? d && ar(
      d,
      {
        x: 0,
        y: 0,
        width: e.dimensions.width,
        height: e.dimensions.height
      },
      e.viewport,
      !0
    ) : d ?? [];
  }), s = (d, w, p) => {
    if (w = w ?? o.value(d.source), p = p ?? o.value(d.target), !w || !p) {
      e.hooks.error.trigger(new xe(ye.EDGE_ORPHANED, d.id));
      return;
    }
    return !d.hidden && !p.hidden && !w.hidden;
  }, u = ie(() => e.onlyRenderVisibleElements ? e.edges.filter((d) => {
    const w = o.value(d.source), p = o.value(d.target);
    return s(d, w, p) && Qu({
      sourcePos: w.computedPosition || { x: 0, y: 0 },
      targetPos: p.computedPosition || { x: 0, y: 0 },
      sourceWidth: w.dimensions.width,
      sourceHeight: w.dimensions.height,
      targetWidth: p.dimensions.width,
      targetHeight: p.dimensions.height,
      width: e.dimensions.width,
      height: e.dimensions.height,
      viewport: e.viewport
    });
  }) : e.edges.filter((d) => s(d))), c = ie(() => [...a.value, ...u.value]), f = ie(() => e.nodes.filter((d) => d.selected)), g = ie(() => e.edges.filter((d) => d.selected)), m = ie(() => [
    ...f.value ?? [],
    ...g.value ?? []
  ]), h = ie(
    () => a.value.filter((d) => d.initialized && d.handleBounds !== void 0)
  );
  return {
    getNode: o,
    getEdge: i,
    getElements: c,
    getEdgeTypes: r,
    getNodeTypes: l,
    getEdges: u,
    getNodes: a,
    getSelectedElements: m,
    getSelectedNodes: f,
    getSelectedEdges: g,
    getNodesInitialized: h
  };
}
class ct {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return ct.instance || (ct.instance = new ct()), ct.instance;
  }
  set(t, n) {
    return this.flows.set(t, n);
  }
  get(t) {
    return this.flows.get(t);
  }
  remove(t) {
    return this.flows.delete(t);
  }
  create(t, n) {
    const o = br(n), i = Or(o), r = ie(() => i.nodes.map((g) => g.id)), l = ie(() => i.edges.map((g) => g.id)), a = qc(i, r, l), s = Kc(i, a, r, l), u = {};
    Object.entries(i.hooks).forEach(([g, m]) => {
      const h = `on${g.charAt(0).toUpperCase() + g.slice(1)}`;
      u[h] = m.on;
    });
    const c = {};
    Object.entries(i.hooks).forEach(([g, m]) => {
      c[g] = m.trigger;
    }), s.setState(i);
    const f = {
      ...u,
      ...a,
      ...s,
      ...Xr(i),
      emits: c,
      id: t,
      vueFlowVersion: "1.20.2",
      $destroy: () => {
        this.remove(t);
      }
    };
    return this.set(t, f), f;
  }
  getId() {
    return `vue-flow-${this.currentId++}`;
  }
}
function pe(e) {
  const t = ct.getInstance(), n = yi(), o = e == null ? void 0 : e.id, i = (n == null ? void 0 : n.vueFlowId) || o;
  let r, l = !1;
  if (n) {
    const a = We(ui, null);
    typeof a < "u" && a !== null && (r = a);
  }
  if (r || i && (r = t.get(i)), !r || r && o && o !== r.id) {
    const a = o ?? t.getId();
    r = t.create(a, e), n && (l = !0);
  } else
    e && r.setState(e);
  return n && (xt(ui, r), n.vueFlowId = r.id, l && Rt(() => {
    if (r) {
      const a = t.get(r.id);
      a ? a.$destroy() : Bt(`No store instance found for id ${r.id} in storage.`);
    }
  })), r;
}
function Yd(e) {
  const t = e ?? We(vr, ""), n = We(pr, null), { findEdge: o, emits: i } = pe(), r = o(t);
  return r || i.error(new xe(ye.EDGE_NOT_FOUND, t)), {
    id: t,
    edge: r,
    edgeEl: n
  };
}
function jc() {
  return {
    doubleClick: F(),
    click: F(),
    mouseEnter: F(),
    mouseMove: F(),
    mouseLeave: F(),
    contextMenu: F(),
    updateStart: F(),
    update: F(),
    updateEnd: F()
  };
}
function Jc(e, t) {
  const n = jc();
  return n.doubleClick.on((o) => {
    var i, r;
    t.edgeDoubleClick(o), (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
  }), n.click.on((o) => {
    var i, r;
    t.edgeClick(o), (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o);
  }), n.mouseEnter.on((o) => {
    var i, r;
    t.edgeMouseEnter(o), (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
  }), n.mouseMove.on((o) => {
    var i, r;
    t.edgeMouseMove(o), (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
  }), n.mouseLeave.on((o) => {
    var i, r;
    t.edgeMouseLeave(o), (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
  }), n.contextMenu.on((o) => {
    var i, r;
    t.edgeContextMenu(o), (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
  }), n.updateStart.on((o) => {
    var i, r;
    t.edgeUpdateStart(o), (r = (i = e.events) == null ? void 0 : i.updateStart) == null || r.call(i, o);
  }), n.update.on((o) => {
    var i, r;
    t.edgeUpdate(o), (r = (i = e.events) == null ? void 0 : i.update) == null || r.call(i, o);
  }), n.updateEnd.on((o) => {
    var i, r;
    t.edgeUpdateEnd(o), (r = (i = e.events) == null ? void 0 : i.updateEnd) == null || r.call(i, o);
  }), Object.entries(n).reduce(
    (o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o),
    { emit: {}, on: {} }
  );
}
function Qc() {
  const { viewport: e, snapGrid: t, snapToGrid: n } = pe();
  return ({ sourceEvent: o }) => {
    const i = o.touches ? o.touches[0].clientX : o.clientX, r = o.touches ? o.touches[0].clientY : o.clientY, l = {
      x: (i - e.value.x) / e.value.zoom,
      y: (r - e.value.y) / e.value.zoom
    };
    return {
      xSnapped: n.value ? t.value[0] * Math.round(l.x / t.value[0]) : l.x,
      ySnapped: n.value ? t.value[1] * Math.round(l.y / t.value[1]) : l.y,
      ...l
    };
  };
}
function Zt() {
  return !0;
}
function Er({
  handleId: e,
  nodeId: t,
  type: n,
  isValidConnection: o,
  edgeUpdaterType: i,
  onEdgeUpdate: r,
  onEdgeUpdateEnd: l
}) {
  const {
    vueFlowRef: a,
    connectionMode: s,
    connectionRadius: u,
    connectOnClick: c,
    connectionClickStartHandle: f,
    nodesConnectable: g,
    autoPanOnConnect: m,
    findNode: h,
    panBy: d,
    getNodes: w,
    startConnection: p,
    updateConnection: b,
    endConnection: C,
    emits: v,
    viewport: N,
    edges: y,
    isValidConnection: D
  } = pe();
  let R = null, Y = !1, z = null;
  function J(ee) {
    var O;
    const x = re(n) === "target", k = Eo(ee), E = Qo(ee.target);
    if (k && ee.button === 0 || !k) {
      let L = function(_e) {
        ge = mt(_e, q);
        const { handle: Ke, validHandleResult: U } = oc(
          wo(ge, N.value, !1, [1, 1]),
          u.value,
          Pe,
          (he) => li(
            _e,
            he,
            s.value,
            re(t),
            re(e),
            x ? "target" : "source",
            G,
            E,
            y.value,
            h
          )
        );
        if (T = Ke || Pe.find((he) => {
          var ke;
          return he.id === ((ke = U.endHandle) == null ? void 0 : ke.handleId);
        }) || null, me || (ze(), me = !0), R = U.connection, Y = U.isValid, z = U.handleDomNode, b(
          T && Y ? Zu(
            {
              x: T.x,
              y: T.y
            },
            N.value
          ) : ge,
          U.endHandle,
          rc(!!T, Y)
        ), !T && !Y && !z)
          return Ln(se);
        R && R.source !== R.target && z && (Ln(se), se = z, z.classList.add("connecting", "vue-flow__handle-connecting"), z.classList.toggle("valid", Y), z.classList.toggle("vue-flow__handle-valid", Y));
      }, Z = function(_e) {
        (T || z) && R && Y && (r ? r(_e, R) : v.connect(R)), v.connectEnd(_e), i && (l == null || l(_e)), Ln(se), cancelAnimationFrame(K), C(_e), me = !1, Y = !1, R = null, z = null, E.removeEventListener("mousemove", L), E.removeEventListener("mouseup", Z), E.removeEventListener("touchmove", L), E.removeEventListener("touchend", Z);
      };
      const $ = h(re(t));
      let G = re(o) || D.value || Zt;
      !G && $ && (G = (x ? $.isValidSourcePos : $.isValidTargetPos) || Zt);
      let T, K = 0;
      const { x: te, y: M } = mt(ee), X = E == null ? void 0 : E.elementFromPoint(te, M), I = dr(re(i), X), q = (O = a.value) == null ? void 0 : O.getBoundingClientRect();
      if (!q || !I)
        return;
      let se, ge = mt(ee, q), me = !1;
      const Pe = ic({
        nodes: w.value,
        nodeId: re(t),
        handleId: re(e),
        handleType: I
      }), ze = () => {
        if (!m)
          return;
        const [_e, Ke] = ur(ge, q);
        d({ x: _e, y: Ke }), K = requestAnimationFrame(ze);
      };
      p(
        {
          nodeId: re(t),
          handleId: re(e),
          type: I
        },
        {
          x: te - q.left,
          y: M - q.top
        },
        ee
      ), v.connectStart({ event: ee, nodeId: re(t), handleId: re(e), handleType: I }), E.addEventListener("mousemove", L), E.addEventListener("mouseup", Z), E.addEventListener("touchmove", L), E.addEventListener("touchend", Z);
    }
  }
  function W(ee) {
    if (!c.value)
      return;
    const x = re(n) === "target";
    if (!f.value)
      v.clickConnectStart({ event: ee, nodeId: re(t), handleId: re(e) }), p({ nodeId: re(t), type: re(n), handleId: re(e) }, void 0, ee, !0);
    else {
      let k = re(o) || D.value || Zt;
      const E = h(re(t));
      if (!k && E && (k = (x ? E.isValidSourcePos : E.isValidTargetPos) || Zt), E && (typeof E.connectable > "u" ? g.value : E.connectable) === !1)
        return;
      const O = Qo(ee.target), { connection: L, isValid: Z } = li(
        ee,
        {
          nodeId: re(t),
          id: re(e),
          type: re(n)
        },
        s.value,
        f.value.nodeId,
        f.value.handleId || null,
        f.value.type,
        k,
        O,
        y.value,
        h
      ), $ = L.source === L.target;
      Z && !$ && v.connect(L), v.clickConnectEnd(ee), C(ee, !0);
    }
  }
  return {
    handlePointerDown: J,
    handleClick: W
  };
}
function No() {
  return typeof window < "u" ? window : { chrome: !1 };
}
function ao(e) {
  var i, r;
  const t = ((r = (i = e.composedPath) == null ? void 0 : i.call(e)) == null ? void 0 : r[0]) || e.target, n = Et(t.hasAttribute) ? t.hasAttribute("contenteditable") : !1, o = Et(t.closest) ? t.closest(".nokey") : null;
  return ["INPUT", "SELECT", "TEXTAREA"].includes(t == null ? void 0 : t.nodeName) || n || !!o;
}
function ed(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey;
}
function td(e, t) {
  return (n) => e.some((o) => {
    const i = o.split("+").map((r) => r.trim().toLowerCase());
    return i.length === 1 ? n.key === o : (t.add(n.key.toLowerCase()), i.every((r) => t.has(r)));
  });
}
function $t(e, t) {
  const n = No(), o = ce(re(e) === !0);
  let i = !1;
  const r = /* @__PURE__ */ new Set();
  return ve(o, () => {
    t == null || t(o.value);
  }), ve(
    () => re(e),
    (l) => {
      if (n && typeof n.addEventListener < "u" && uo(n, "blur", () => {
        o.value = !1;
      }), tc(l)) {
        o.value = l;
        return;
      }
      Array.isArray(l) && (l = td(l, r)), l && (Io(
        l,
        (a) => {
          i = ed(a), !(!i && ao(a)) && (a.preventDefault(), o.value = !0);
        },
        { eventName: "keydown" }
      ), Io(
        l,
        (a) => {
          if (o.value) {
            if (!i && ao(a))
              return;
            i = !1, r.clear(), o.value = !1;
          }
        },
        { eventName: "keyup" }
      ));
    },
    {
      immediate: !0
    }
  ), o;
}
function nd(e) {
  const t = e ?? We(hr, ""), n = We(gr, null), { findNode: o, edges: i, emits: r } = pe(), l = o(t);
  return l || r.error(new xe(ye.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: l,
    parentNode: ie(() => o(l.parentNode)),
    connectedEdges: ie(() => wn([l], i.value))
  };
}
function od() {
  return {
    doubleClick: F(),
    click: F(),
    mouseEnter: F(),
    mouseMove: F(),
    mouseLeave: F(),
    contextMenu: F(),
    dragStart: F(),
    drag: F(),
    dragStop: F()
  };
}
function id(e, t) {
  const n = od();
  return n.doubleClick.on((o) => {
    var i, r;
    t.nodeDoubleClick(o), (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
  }), n.click.on((o) => {
    var i, r;
    t.nodeClick(o), (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o);
  }), n.mouseEnter.on((o) => {
    var i, r;
    t.nodeMouseEnter(o), (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
  }), n.mouseMove.on((o) => {
    var i, r;
    t.nodeMouseMove(o), (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
  }), n.mouseLeave.on((o) => {
    var i, r;
    t.nodeMouseLeave(o), (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
  }), n.contextMenu.on((o) => {
    var i, r;
    t.nodeContextMenu(o), (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
  }), n.dragStart.on((o) => {
    var i, r;
    t.nodeDragStart(o), (r = (i = e.events) == null ? void 0 : i.dragStart) == null || r.call(i, o);
  }), n.drag.on((o) => {
    var i, r;
    t.nodeDrag(o), (r = (i = e.events) == null ? void 0 : i.drag) == null || r.call(i, o);
  }), n.dragStop.on((o) => {
    var i, r;
    t.nodeDragStop(o), (r = (i = e.events) == null ? void 0 : i.dragStop) == null || r.call(i, o);
  }), Object.entries(n).reduce(
    (o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o),
    { emit: {}, on: {} }
  );
}
function Sr() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: o, snapGrid: i, snapToGrid: r, nodesDraggable: l, emits: a } = pe();
  return (s, u = !1) => {
    const c = r.value ? i.value[0] : 5, f = r.value ? i.value[1] : 5, g = u ? 4 : 1, m = s.x * c * g, h = s.y * f * g, d = e.value.filter((w) => w.draggable || l && typeof w.draggable > "u").map((w) => {
      const p = { x: w.computedPosition.x + m, y: w.computedPosition.y + h }, { computedPosition: b } = bo(
        w,
        p,
        a.error,
        t.value,
        w.parentNode ? o(w.parentNode) : void 0
      );
      return {
        id: w.id,
        position: b,
        from: w.position,
        distance: { x: s.x, y: s.y },
        dimensions: w.dimensions
      };
    });
    n(d, !0, !1);
  };
}
const Fn = 0.1;
function qe() {
}
const rd = {
  zoomIn: qe,
  zoomOut: qe,
  zoomTo: qe,
  fitView: qe,
  setCenter: qe,
  fitBounds: qe,
  project: (e) => e,
  setTransform: qe,
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  initialized: !1
};
function ld(e, t) {
  const n = e, o = ne(n, "nodes"), i = ne(n, "d3Zoom"), r = ne(n, "d3Selection"), l = ne(n, "dimensions"), a = ne(n, "translateExtent"), s = ne(n, "minZoom"), u = ne(n, "maxZoom"), c = ne(n, "viewport"), f = ne(n, "snapToGrid"), g = ne(n, "snapGrid"), m = ne(n, "hooks"), h = t, d = ne(h, "getNodes"), w = ce(!1);
  m.value.nodesInitialized.on(() => {
    w.value = !0;
  });
  const p = ie(() => !!i.value && !!r.value && !!l.value.width && !!l.value.height && w.value);
  function b(v, N) {
    r.value && i.value && i.value.scaleBy(Gn(r.value, N), v);
  }
  function C(v, N, y, D) {
    const { x: R, y: Y } = yo({ x: -v, y: -N }, a.value), z = ot.translate(-R, -Y).scale(y);
    r.value && i.value && i.value.transform(Gn(r.value, D), z);
  }
  return ie(() => p.value ? {
    initialized: !0,
    zoomIn: (v) => {
      b(1.2, v == null ? void 0 : v.duration);
    },
    zoomOut: (v) => {
      b(1 / 1.2, v == null ? void 0 : v.duration);
    },
    zoomTo: (v, N) => {
      r.value && i.value && i.value.scaleTo(Gn(r.value, N == null ? void 0 : N.duration), v);
    },
    setTransform: (v, N) => {
      C(v.x, v.y, v.zoom, N == null ? void 0 : N.duration);
    },
    getTransform: () => ({
      x: c.value.x,
      y: c.value.y,
      zoom: c.value.zoom
    }),
    fitView: (v = {
      padding: Fn,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      if (!o.value.length)
        return;
      const N = (v.includeHiddenNodes ? o.value : d.value).filter((z) => {
        var ee;
        const J = z.initialized && z.dimensions.width && z.dimensions.height;
        let W = !0;
        return (ee = v.nodes) != null && ee.length && (W = v.nodes.includes(z.id)), J && W;
      }), y = _o(N), { x: D, y: R, zoom: Y } = cn(
        y,
        l.value.width,
        l.value.height,
        v.minZoom ?? s.value,
        v.maxZoom ?? u.value,
        v.padding ?? Fn,
        v.offset
      );
      C(D, R, Y, v == null ? void 0 : v.duration);
    },
    setCenter: (v, N, y) => {
      const D = typeof (y == null ? void 0 : y.zoom) < "u" ? y.zoom : u.value, R = l.value.width / 2 - v * D, Y = l.value.height / 2 - N * D;
      C(R, Y, D, y == null ? void 0 : y.duration);
    },
    fitBounds: (v, N = { padding: Fn }) => {
      const { x: y, y: D, zoom: R } = cn(
        v,
        l.value.width,
        l.value.height,
        s.value,
        u.value,
        N.padding
      );
      C(y, D, R, N == null ? void 0 : N.duration);
    },
    project: (v) => wo(v, c.value, f.value, g.value)
  } : rd);
}
function Gn(e, t = 0) {
  return e.transition().duration(t);
}
function ad(e, t, n) {
  const o = Ir();
  return o.run(() => {
    [
      () => {
        o.run(() => {
          let h, d, w = !!(n.nodes.value.length || n.edges.value.length);
          h = at([e.modelValue, () => {
            var p, b;
            return (b = (p = e.modelValue) == null ? void 0 : p.value) == null ? void 0 : b.length;
          }], ([p]) => {
            p && Array.isArray(p) && (d == null || d.pause(), n.setElements(p), !d && !w && p.length ? w = !0 : d == null || d.resume());
          }), d = at(
            [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
            ([p, b]) => {
              var C;
              (C = e.modelValue) != null && C.value && Array.isArray(e.modelValue.value) && (h == null || h.pause(), e.modelValue.value = [...p, ...b], ft(() => {
                h == null || h.resume();
              }));
            },
            { immediate: w }
          ), Wt(() => {
            h == null || h.stop(), d == null || d.stop();
          });
        });
      },
      () => {
        o.run(() => {
          let h, d, w = !!n.nodes.value.length;
          h = at([e.nodes, () => {
            var p, b;
            return (b = (p = e.nodes) == null ? void 0 : p.value) == null ? void 0 : b.length;
          }], ([p]) => {
            p && Array.isArray(p) && (d == null || d.pause(), n.setNodes(p), !d && !w && p.length ? w = !0 : d == null || d.resume());
          }), d = at(
            [n.nodes, () => n.nodes.value.length],
            ([p]) => {
              var b;
              (b = e.nodes) != null && b.value && Array.isArray(e.nodes.value) && (h == null || h.pause(), e.nodes.value = [...p], ft(() => {
                h == null || h.resume();
              }));
            },
            { immediate: w }
          ), Wt(() => {
            h == null || h.stop(), d == null || d.stop();
          });
        });
      },
      () => {
        o.run(() => {
          let h, d, w = !!n.edges.value.length;
          h = at([e.edges, () => {
            var p, b;
            return (b = (p = e.edges) == null ? void 0 : p.value) == null ? void 0 : b.length;
          }], ([p]) => {
            p && Array.isArray(p) && (d == null || d.pause(), n.setEdges(p), !d && !w && p.length ? w = !0 : d == null || d.resume());
          }), d = at(
            [n.edges, () => n.edges.value.length],
            ([p]) => {
              var b;
              (b = e.edges) != null && b.value && Array.isArray(e.edges.value) && (h == null || h.pause(), e.edges.value = [...p], ft(() => {
                h == null || h.resume();
              }));
            },
            { immediate: w }
          ), Wt(() => {
            h == null || h.stop(), d == null || d.stop();
          });
        });
      },
      () => {
        o.run(() => {
          ve(
            () => t.minZoom,
            () => {
              t.minZoom && fe(t.minZoom) && n.setMinZoom(t.minZoom);
            }
          );
        });
      },
      () => {
        o.run(() => {
          ve(
            () => t.maxZoom,
            () => {
              t.maxZoom && fe(t.maxZoom) && n.setMaxZoom(t.maxZoom);
            }
          );
        });
      },
      () => {
        o.run(() => {
          ve(
            () => t.translateExtent,
            () => {
              t.translateExtent && fe(t.translateExtent) && n.setTranslateExtent(t.translateExtent);
            }
          );
        });
      },
      () => {
        o.run(() => {
          ve(
            () => t.nodeExtent,
            () => {
              t.nodeExtent && fe(t.nodeExtent) && n.setNodeExtent(t.nodeExtent);
            }
          );
        });
      },
      () => {
        o.run(() => {
          ve(
            () => t.applyDefault,
            () => {
              fe(t.applyDefault) && (n.applyDefault.value = t.applyDefault);
            }
          ), ve(
            n.applyDefault,
            (h, d, w) => {
              n.applyDefault.value ? (n.onNodesChange(n.applyNodeChanges), n.onEdgesChange(n.applyEdgeChanges)) : (n.hooks.value.nodesChange.off(n.applyNodeChanges), n.hooks.value.edgesChange.off(n.applyEdgeChanges)), w(() => {
                n.hooks.value.nodesChange.off(n.applyNodeChanges), n.hooks.value.edgesChange.off(n.applyEdgeChanges);
              });
            },
            { immediate: !0 }
          );
        });
      },
      () => {
        o.run(() => {
          const h = async (d) => {
            let w = d;
            Et(t.autoConnect) && (w = await t.autoConnect(d)), w !== !1 && n.addEdges([w]);
          };
          ve(
            () => t.autoConnect,
            () => {
              fe(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
            }
          ), ve(
            n.autoConnect,
            (d, w, p) => {
              d ? n.onConnect(h) : n.hooks.value.connect.off(h), p(() => {
                n.hooks.value.connect.off(h);
              });
            },
            { immediate: !0 }
          );
        });
      },
      () => {
        const h = [
          "id",
          "modelValue",
          "translateExtent",
          "nodeExtent",
          "edges",
          "nodes",
          "maxZoom",
          "minZoom",
          "applyDefault",
          "autoConnect"
        ];
        Object.keys(t).forEach((d) => {
          if (!h.includes(d)) {
            const w = Qt(t, d), p = n[d];
            o.run(() => {
              ve(
                w,
                (b) => {
                  fe(b) && (p.value = b);
                },
                { flush: "pre" }
              );
            });
          }
        });
      }
    ].forEach((h) => h());
  }), () => o.stop();
}
const Yn = 0.1;
function Xd(e) {
  const t = pe({ id: e }), n = ne(t, "nodes"), o = ne(t, "d3Zoom"), i = ne(t, "d3Selection"), r = ne(t, "dimensions"), l = ne(t, "translateExtent"), a = ne(t, "minZoom"), s = ne(t, "maxZoom"), u = ne(t, "viewport"), c = ne(t, "snapToGrid"), f = ne(t, "snapGrid"), g = ne(t, "getNodes");
  return {
    zoomIn: (d) => {
      m(1.2, d == null ? void 0 : d.duration);
    },
    zoomOut: (d) => {
      m(1 / 1.2, d == null ? void 0 : d.duration);
    },
    zoomTo: (d, w) => {
      i.value && o.value && o.value.scaleTo(Xn(i.value, w == null ? void 0 : w.duration), d);
    },
    setTransform: (d, w) => {
      h(d.x, d.y, d.zoom, w == null ? void 0 : w.duration);
    },
    getTransform: () => ({
      x: u.value.x,
      y: u.value.y,
      zoom: u.value.zoom
    }),
    fitView: (d = {
      padding: Yn,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      if (!n.value.length)
        return;
      const w = (d.includeHiddenNodes ? n.value : g.value).filter((N) => {
        var R;
        const y = N.initialized && N.dimensions.width && N.dimensions.height;
        let D = !0;
        return (R = d.nodes) != null && R.length && (D = d.nodes.includes(N.id)), y && D;
      }), p = _o(w), { x: b, y: C, zoom: v } = cn(
        p,
        r.value.width,
        r.value.height,
        d.minZoom ?? a.value,
        d.maxZoom ?? s.value,
        d.padding ?? Yn,
        d.offset
      );
      h(b, C, v, d == null ? void 0 : d.duration);
    },
    setCenter: (d, w, p) => {
      const b = typeof (p == null ? void 0 : p.zoom) < "u" ? p.zoom : s.value, C = r.value.width / 2 - d * b, v = r.value.height / 2 - w * b;
      h(C, v, b, p == null ? void 0 : p.duration);
    },
    fitBounds: (d, w = { padding: Yn }) => {
      const { x: p, y: b, zoom: C } = cn(d, r.value.width, r.value.height, a.value, s.value, w.padding);
      h(p, b, C, w == null ? void 0 : w.duration);
    },
    project: (d) => wo(d, u.value, c.value, f.value)
  };
  function m(d, w) {
    i.value && o.value && o.value.scaleBy(Xn(i.value, w), d);
  }
  function h(d, w, p, b) {
    const { x: C, y: v } = yo({ x: -d, y: -w }, l.value), N = ot.translate(-C, -v).scale(p);
    i.value && o.value && o.value.transform(Xn(i.value, b), N);
  }
}
function Xn(e, t = 0) {
  return e.transition().duration(t);
}
function vi(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const sd = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, ud = /* @__PURE__ */ we({
  ...sd,
  props: {
    isSelecting: { type: Boolean }
  },
  setup(e) {
    const {
      id: t,
      vueFlowRef: n,
      getNodes: o,
      getEdges: i,
      viewport: r,
      emits: l,
      userSelectionActive: a,
      removeSelectedElements: s,
      panOnDrag: u,
      userSelectionRect: c,
      elementsSelectable: f,
      nodesSelectionActive: g,
      addSelectedElements: m,
      getSelectedEdges: h,
      getSelectedNodes: d,
      removeNodes: w,
      removeEdges: p,
      selectionMode: b,
      deleteKeyCode: C,
      multiSelectionKeyCode: v,
      multiSelectionActive: N
    } = pe(), y = ce(null), D = ce(0), R = ce(0), Y = ce(), z = ie(() => f.value && (e.isSelecting || a.value));
    $t(C, ($) => {
      if (!$)
        return;
      const G = o.value.reduce((T, K) => ((!K.selected && K.parentNode && T.find((te) => te.id === K.parentNode) || K.selected) && T.push(K), T), []);
      (G || h.value) && (h.value.length > 0 && p(h.value), G.length > 0 && w(G), g.value = !1, s());
    }), $t(v, ($) => {
      N.value = $;
    });
    function J() {
      a.value = !1, c.value = null, D.value = 0, R.value = 0;
    }
    function W($) {
      $.target !== y.value || z.value || (l.paneClick($), s(), g.value = !1);
    }
    function ee($) {
      var G;
      if ($.target === y.value) {
        if (Array.isArray(u.value) && ((G = u.value) != null && G.includes(2))) {
          $.preventDefault();
          return;
        }
        l.paneContextMenu($);
      }
    }
    function x($) {
      $.target === y.value && l.paneScroll($);
    }
    function k($) {
      if (Y.value = n.value.getBoundingClientRect(), !z.value || !f || !e.isSelecting || $.button !== 0 || $.target !== y.value || !Y.value)
        return;
      const { x: G, y: T } = vi($, Y.value);
      s(), c.value = {
        width: 0,
        height: 0,
        startX: G,
        startY: T,
        x: G,
        y: T
      }, a.value = !0, l.selectionStart($);
    }
    function E($) {
      if (!z.value)
        return l.paneMouseMove($);
      if (!e.isSelecting || !Y.value || !c.value)
        return;
      a.value || (a.value = !0), g.value && (g.value = !1);
      const G = vi($, Y.value), T = c.value.startX ?? 0, K = c.value.startY ?? 0, te = {
        ...c.value,
        x: G.x < T ? G.x : T,
        y: G.y < K ? G.y : K,
        width: Math.abs(G.x - T),
        height: Math.abs(G.y - K)
      }, M = ar(
        o.value,
        c.value,
        r.value,
        b.value === mo.Partial
      ), X = wn(M, i.value);
      D.value = M.length, R.value = X.length, c.value = te, m([...M, ...X]);
    }
    function O($) {
      z.value && $.button === 0 && (!a.value && c.value && $.target === y.value && W($), g.value = D.value > 0, J(), l.selectionEnd($));
    }
    function L($) {
      var G;
      if (!z.value)
        return l.paneMouseLeave($);
      a.value && (g.value = D.value > 0, (G = l.selectionEnd) == null || G.call(l, $)), J();
    }
    function Z($) {
      z.value || l.paneMouseEnter($);
    }
    return ($, G) => (le(), de("div", {
      ref_key: "container",
      ref: y,
      key: `pane-${P(t)}`,
      class: yt(["vue-flow__pane vue-flow__container", { selection: e.isSelecting }]),
      onClick: W,
      onContextmenu: ee,
      onWheelPassive: x,
      onMouseenter: Z,
      onMousedown: k,
      onMousemove: E,
      onMouseup: O,
      onMouseleave: L
    }, [
      Ne($.$slots, "default"),
      P(a) && P(c) ? (le(), wt(Xc, { key: 0 })) : Fe("", !0),
      P(g) && P(d).length ? (le(), wt(Gc, { key: 1 })) : Fe("", !0)
    ], 34));
  }
}), cd = { class: "vue-flow__nodes vue-flow__container" }, dd = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, fd = /* @__PURE__ */ we({
  ...dd,
  setup(e) {
    const t = We(Sn), n = pe(), o = ne(n, "nodesDraggable"), i = ne(n, "nodesFocusable"), r = ne(n, "elementsSelectable"), l = ne(n, "nodesConnectable"), a = ne(n, "getNodes"), s = ne(n, "getNodesInitialized"), u = ne(n, "getNodeTypes"), c = ne(n, "updateNodeDimensions"), f = ne(n, "emits");
    let g = ce();
    Se(() => a.value.length > 0 && s.value.length === a.value.length).toBe(!0).then(() => {
      ft(() => {
        f.value.nodesInitialized(s.value);
      });
    }), Ze(() => {
      g.value = new ResizeObserver((b) => {
        const C = b.map((v) => ({
          id: v.target.getAttribute("data-id"),
          nodeElement: v.target,
          forceUpdate: !0
        }));
        c.value(C);
      });
    }), wi(() => {
      var b;
      return (b = g.value) == null ? void 0 : b.disconnect();
    });
    function m(b) {
      return typeof b > "u" ? o.value : b;
    }
    function h(b) {
      return typeof b > "u" ? r.value : b;
    }
    function d(b) {
      return typeof b > "u" ? l.value : b;
    }
    function w(b) {
      return typeof b > "u" ? i.value : b;
    }
    function p(b, C) {
      const v = b || "default";
      let N = C ?? u.value[v];
      const y = hn();
      if (typeof N == "string" && y) {
        const R = Object.keys(y.appContext.components);
        R && R.includes(v) && (N = _i(v, !1));
      }
      if (typeof N != "string")
        return N;
      const D = t == null ? void 0 : t[`node-${v}`];
      return D || (f.value.error(new xe(ye.NODE_TYPE_MISSING, N)), !1);
    }
    return (b, C) => (le(), de("div", cd, [
      P(g) ? (le(!0), de(Ge, { key: 0 }, Ot(P(a), (v) => (le(), wt(P(yc), {
        id: v.id,
        key: v.id,
        "resize-observer": P(g),
        type: p(v.type, v.template),
        name: v.type || "default",
        draggable: m(v.draggable),
        selectable: h(v.selectable),
        connectable: d(v.connectable),
        focusable: w(v.focusable),
        node: v
      }, null, 8, ["id", "resize-observer", "type", "name", "draggable", "selectable", "connectable", "focusable", "node"]))), 128)) : Fe("", !0)
    ]));
  }
}), hd = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], gd = ["stroke", "stroke-width", "fill"], vd = ["stroke", "stroke-width"], pd = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, md = /* @__PURE__ */ we({
  ...pd,
  props: {
    id: null,
    type: null,
    color: { default: "none" },
    width: { default: 12.5 },
    height: { default: 12.5 },
    markerUnits: { default: "strokeWidth" },
    orient: { default: "auto-start-reverse" },
    strokeWidth: { default: 1 }
  },
  setup(e) {
    return (t, n) => (le(), de("marker", {
      id: e.id,
      class: "vue-flow__arrowhead",
      viewBox: "-10 -10 20 20",
      refX: "0",
      refY: "0",
      markerWidth: `${e.width}`,
      markerHeight: `${e.height}`,
      markerUnits: e.markerUnits,
      orient: e.orient
    }, [
      e.type === P(oo).ArrowClosed ? (le(), de("polyline", {
        key: 0,
        stroke: e.color,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": e.strokeWidth,
        fill: e.color,
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 8, gd)) : Fe("", !0),
      e.type === P(oo).Arrow ? (le(), de("polyline", {
        key: 1,
        stroke: e.color,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": e.strokeWidth,
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 8, vd)) : Fe("", !0)
    ], 8, hd));
  }
}), yd = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, xd = /* @__PURE__ */ we({
  ...yd,
  setup(e) {
    const t = pe(), n = ne(t, "id"), o = ne(t, "edges"), i = ne(t, "connectionLineOptions"), r = ne(t, "defaultMarkerColor"), l = ie(() => {
      const a = [], s = [], u = (c) => {
        if (c) {
          const f = Qe(c, n.value);
          a.includes(f) || (typeof c == "object" ? s.push({ ...c, id: f, color: c.color || r.value }) : s.push({ id: f, color: r.value, type: c }), a.push(f));
        }
      };
      return [i.value.markerEnd, i.value.markerStart].forEach(u), o.value.reduce((c, f) => ([f.markerStart, f.markerEnd].forEach(u), c.sort((g, m) => g.id.localeCompare(m.id))), s), s;
    });
    return (a, s) => (le(), de("defs", null, [
      (le(!0), de(Ge, null, Ot(P(l), (u) => (le(), wt(md, {
        id: u.id,
        key: u.id,
        type: u.type,
        color: u.color,
        width: u.width,
        height: u.height,
        markerUnits: u.markerUnits,
        "stroke-width": u.strokeWidth,
        orient: u.orient
      }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
    ]));
  }
}), wd = { class: "vue-flow__edges vue-flow__container" }, _d = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, bd = /* @__PURE__ */ we({
  ..._d,
  setup(e) {
    const t = We(Sn), {
      edgesUpdatable: n,
      edgesFocusable: o,
      elementsSelectable: i,
      findNode: r,
      getEdges: l,
      getEdgeTypes: a,
      elevateEdgesOnSelect: s,
      dimensions: u,
      emits: c
    } = pe();
    function f(d) {
      return typeof d > "u" ? i.value : d;
    }
    function g(d) {
      return typeof d > "u" ? n.value : d;
    }
    function m(d) {
      return typeof d > "u" ? o.value : d;
    }
    function h(d, w) {
      const p = d || "default";
      let b = w ?? a.value[p];
      const C = hn();
      if (typeof b == "string" && C) {
        const N = Object.keys(C.appContext.components);
        N && N.includes(p) && (b = _i(p, !1));
      }
      if (b && typeof b != "string")
        return b;
      const v = t == null ? void 0 : t[`edge-${p}`];
      return v || (c.error(new xe(ye.EDGE_TYPE_MISSING, b)), !1);
    }
    return (d, w) => P(u).width && P(u).height ? (le(), de(Ge, { key: 0 }, [
      (le(), de("svg", wd, [
        Le(xd)
      ])),
      (le(!0), de(Ge, null, Ot(P(l), (p) => (le(), de("svg", {
        key: p.id,
        class: "vue-flow__edges vue-flow__container",
        style: tt({ zIndex: P(ec)(p, P(r), P(s)) })
      }, [
        Le(P(Pc), {
          id: p.id,
          edge: p,
          type: h(p.type, p.template),
          name: p.type || "default",
          selectable: f(p.selectable),
          updatable: g(p.updatable),
          focusable: m(p.focusable)
        }, null, 8, ["id", "edge", "type", "name", "selectable", "updatable", "focusable"])
      ], 4))), 128)),
      Le(P(Hc))
    ], 64)) : Fe("", !0);
  }
}), Ed = /* @__PURE__ */ Tt("div", { class: "vue-flow__edge-labels" }, null, -1), Sd = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Nd = /* @__PURE__ */ we({
  ...Sd,
  setup(e) {
    const { id: t, viewport: n, emits: o, d3Zoom: i, d3Selection: r, dimensions: l, ...a } = pe(), s = ce(!bi);
    return Se(() => i.value && r.value && l.value.width > 0 && l.value.height > 0).toBeTruthy().then(() => {
      o.paneReady({
        id: t,
        viewport: n,
        emits: o,
        d3Zoom: i,
        d3Selection: r,
        dimensions: l,
        ...a
      }), setTimeout(() => {
        s.value = !0;
      }, 0);
    }), (u, c) => (le(), de("div", {
      key: `transform-${P(t)}`,
      class: "vue-flow__transformationpane vue-flow__container",
      style: tt({
        transform: `translate(${P(n).x}px,${P(n).y}px) scale(${P(n).zoom})`,
        opacity: s.value ? void 0 : 0
      })
    }, [
      Le(bd),
      Ed,
      Le(fd),
      Ne(u.$slots, "default")
    ], 4));
  }
}), Cd = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, kd = /* @__PURE__ */ we({
  ...Cd,
  setup(e) {
    const {
      id: t,
      minZoom: n,
      maxZoom: o,
      defaultViewport: i,
      translateExtent: r,
      dimensions: l,
      zoomActivationKeyCode: a,
      selectionKeyCode: s,
      panActivationKeyCode: u,
      panOnScroll: c,
      panOnScrollMode: f,
      panOnScrollSpeed: g,
      panOnDrag: m,
      zoomOnDoubleClick: h,
      zoomOnPinch: d,
      zoomOnScroll: w,
      preventScrolling: p,
      noWheelClassName: b,
      noPanClassName: C,
      emits: v,
      connectionStartHandle: N,
      userSelectionActive: y,
      paneDragging: D,
      d3Zoom: R,
      d3Selection: Y,
      d3ZoomHandler: z,
      viewport: J,
      viewportRef: W
    } = pe(), ee = ce(), x = ce(!1), k = ce(!1);
    let E = !1, O = 0, L = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const Z = $t(u), $ = ie(() => !x.value && m.value && Z.value), G = ie(
      () => s.value !== !0 && x.value || s.value === !0 && !$.value
    );
    Ze(() => {
      ul(ee, M);
      const I = No();
      uo(I, "resize", M);
    }), Ze(() => {
      const I = ee.value, q = I.getBoundingClientRect(), se = Lu().scaleExtent([n.value, o.value]).translateExtent(r.value), ge = Me(I).call(se), me = ge.on("wheel.zoom"), Pe = ot.translate(i.value.x ?? 0, i.value.y ?? 0).scale(rt(i.value.zoom ?? 1, n.value, o.value)), ze = [
        [0, 0],
        [q.width, q.height]
      ], _e = se.constrain()(Pe, ze, r.value);
      se.transform(ge, _e), R.value = se, Y.value = ge, z.value = me, J.value = { x: _e.x, y: _e.y, zoom: _e.k }, W.value = I, $t(s, (U) => {
        x.value = U;
      });
      const Ke = $t(a);
      Co(() => {
        x.value && y.value && !k.value ? se.on("zoom", null) : !x.value && !y.value && se.on("zoom", (U) => {
          J.value = { x: U.transform.x, y: U.transform.y, zoom: U.transform.k };
          const he = te(U.transform);
          E = T(m.value, O ?? 0), v.viewportChange(he), v.move({ event: U, flowTransform: he });
        });
      }), se.on("start", (U) => {
        var ke;
        if (!U.sourceEvent)
          return null;
        O = U.sourceEvent.button, k.value = !0;
        const he = te(U.transform);
        ((ke = U.sourceEvent) == null ? void 0 : ke.type) === "mousedown" && (D.value = !0), L = he, v.viewportChangeStart(he), v.moveStart({ event: U, flowTransform: he });
      }), se.on("end", (U) => {
        if (!U.sourceEvent)
          return null;
        if (k.value = !1, D.value = !1, T(m.value, O ?? 0) && !E && v.paneContextMenu(U.sourceEvent), E = !1, K(L, U.transform)) {
          const he = te(U.transform);
          L = he, v.viewportChangeEnd(he), v.moveEnd({ event: U, flowTransform: he });
        }
      }), Co(() => {
        c.value && !Ke.value && !y.value ? ge.on(
          "wheel.zoom",
          (U) => {
            if (X(U, b.value))
              return !1;
            U.preventDefault(), U.stopImmediatePropagation();
            const he = ge.property("__zoom").k || 1;
            if (U.ctrlKey && d.value) {
              const H = Oe(U), A = -U.deltaY * (U.deltaMode === 1 ? 0.05 : U.deltaMode ? 1 : 2e-3) * 10, V = he * 2 ** A;
              se.scaleTo(ge, V, H);
              return;
            }
            const ke = U.deltaMode === 1 ? 20 : 1, _ = f.value === sn.Vertical ? 0 : U.deltaX * ke, S = f.value === sn.Horizontal ? 0 : U.deltaY * ke;
            se.translateBy(
              ge,
              -(_ / he) * g.value,
              -(S / he) * g.value
            );
          },
          { passive: !1 }
        ) : typeof me < "u" && ge.on(
          "wheel.zoom",
          function(U, he) {
            if (!p.value || X(U, b.value))
              return null;
            U.preventDefault(), me.call(this, U, he);
          },
          { passive: !1 }
        );
      }), se.filter((U) => {
        var S, H;
        const he = Ke.value || w.value, ke = d.value && U.ctrlKey;
        if (U.button === 1 && U.type === "mousedown" && ((S = U.target) != null && S.closest(".vue-flow__node") || (H = U.target) != null && H.closest(".vue-flow__edge")))
          return !0;
        if (!m.value && !he && !c.value && !h.value && !d.value || y.value || !h.value && U.type === "dblclick" || X(U, b.value) && U.type === "wheel" || X(U, C.value) && U.type !== "wheel" || !d.value && U.ctrlKey && U.type === "wheel" || !he && !c.value && !ke && U.type === "wheel" || !m.value && (U.type === "mousedown" || U.type === "touchstart") || Array.isArray(m.value) && !m.value.includes(U.button) && (U.type === "mousedown" || U.type === "touchstart"))
          return !1;
        const _ = Array.isArray(m.value) && m.value.includes(U.button) || !U.button || U.button <= 1;
        return (!U.ctrlKey || U.type === "wheel") && _;
      });
    });
    function T(I, q) {
      return q === 2 && Array.isArray(I) && I.includes(2);
    }
    function K(I, q) {
      return I.x !== q.x && !isNaN(q.x) || I.y !== q.y && !isNaN(q.y) || I.zoom !== q.k && !isNaN(q.k);
    }
    function te(I) {
      return {
        x: I.x,
        y: I.y,
        zoom: I.k
      };
    }
    function M() {
      if (!ee.value)
        return;
      const { width: I, height: q } = yn(ee.value);
      (I === 0 || q === 0) && v.error(new xe(ye.MISSING_VIEWPORT_DIMENSIONS)), l.value.width = I || 500, l.value.height = q || 500;
    }
    function X(I, q) {
      return I.target.closest(`.${q}`);
    }
    return (I, q) => (le(), de(Ge, null, [
      (le(), de("div", {
        ref_key: "viewportEl",
        ref: ee,
        key: `viewport-${P(t)}`,
        class: "vue-flow__viewport vue-flow__container"
      }, [
        Le(ud, {
          "is-selecting": P(G),
          class: yt({ connecting: !!P(N), dragging: P(D), draggable: !!P(m) })
        }, {
          default: je(() => [
            Le(Nd, null, {
              default: je(() => [
                Ne(I.$slots, "zoom-pane")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["is-selecting", "class"])
      ])),
      Ne(I.$slots, "default")
    ], 64));
  }
}), Md = ["id"], $d = ["id"], Td = ["id"], Od = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Id = /* @__PURE__ */ we({
  ...Od,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: o } = pe(), i = {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: "hidden",
      clip: "rect(0px, 0px, 0px, 0px)",
      clipPath: "inset(100%)"
    };
    return (r, l) => (le(), de(Ge, null, [
      Tt("div", {
        id: `${P(er)}-${P(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + Un(P(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Md),
      Tt("div", {
        id: `${P(tr)}-${P(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, $d),
      P(n) ? Fe("", !0) : (le(), de("div", {
        key: 0,
        id: `${P(Gu)}-${P(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: i
      }, Un(P(o)), 9, Td))
    ], 64));
  }
}), Ad = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, Ud = /* @__PURE__ */ we({
  ...Ad,
  props: {
    id: null,
    modelValue: null,
    nodes: null,
    edges: null,
    edgeTypes: null,
    nodeTypes: null,
    connectionMode: null,
    connectionLineType: null,
    connectionLineStyle: { default: void 0 },
    connectionLineOptions: { default: void 0 },
    connectionRadius: null,
    isValidConnection: { type: Function, default: void 0 },
    deleteKeyCode: { type: [Boolean, String, Function], default: void 0 },
    selectionKeyCode: { type: [Boolean, String, Function], default: void 0 },
    multiSelectionKeyCode: { type: [Boolean, String, Function], default: void 0 },
    zoomActivationKeyCode: { type: [Boolean, String, Function], default: void 0 },
    panActivationKeyCode: { type: [Boolean, String, Function], default: void 0 },
    snapToGrid: { type: Boolean, default: void 0 },
    snapGrid: null,
    onlyRenderVisibleElements: { type: Boolean, default: void 0 },
    edgesUpdatable: { type: [Boolean, String], default: void 0 },
    nodesDraggable: { type: Boolean, default: void 0 },
    nodesConnectable: { type: Boolean, default: void 0 },
    elementsSelectable: { type: Boolean, default: void 0 },
    selectNodesOnDrag: { type: Boolean, default: void 0 },
    panOnDrag: { type: Boolean, default: void 0 },
    minZoom: null,
    maxZoom: null,
    defaultViewport: null,
    translateExtent: null,
    nodeExtent: null,
    defaultMarkerColor: null,
    zoomOnScroll: { type: Boolean, default: void 0 },
    zoomOnPinch: { type: Boolean, default: void 0 },
    panOnScroll: { type: Boolean, default: void 0 },
    panOnScrollSpeed: null,
    panOnScrollMode: null,
    zoomOnDoubleClick: { type: Boolean, default: void 0 },
    preventScrolling: { type: Boolean, default: void 0 },
    selectionMode: null,
    edgeUpdaterRadius: null,
    fitViewOnInit: { type: Boolean, default: void 0 },
    connectOnClick: { type: Boolean, default: void 0 },
    applyDefault: { type: Boolean, default: void 0 },
    autoConnect: { type: [Boolean, Function], default: void 0 },
    noDragClassName: null,
    noWheelClassName: null,
    noPanClassName: null,
    defaultEdgeOptions: null,
    elevateEdgesOnSelect: { type: Boolean, default: void 0 },
    elevateNodesOnSelect: { type: Boolean, default: void 0 },
    disableKeyboardA11y: { type: Boolean, default: void 0 },
    edgesFocusable: { type: Boolean, default: void 0 },
    nodesFocusable: { type: Boolean, default: void 0 },
    autoPanOnConnect: { type: Boolean, default: void 0 },
    autoPanOnNodeDrag: { type: Boolean, default: void 0 },
    __experimentalFeatures: null
  },
  emits: ["nodesChange", "edgesChange", "nodeDoubleClick", "nodeClick", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeContextMenu", "nodeDragStart", "nodeDrag", "nodeDragStop", "nodesInitialized", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneReady", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdate", "edgeUpdateEnd", "updateNodeInternals", "error", "update:modelValue", "update:nodes", "update:edges"],
  setup(e, { expose: t, emit: n }) {
    const o = e, i = Mt(o, "modelValue", n), r = Mt(o, "nodes", n), l = Mt(o, "edges", n), { vueFlowRef: a, hooks: s, getNodeTypes: u, getEdgeTypes: c, ...f } = pe(o), g = ad({ modelValue: i, nodes: r, edges: l }, o, {
      vueFlowRef: a,
      hooks: s,
      getNodeTypes: u,
      getEdgeTypes: c,
      ...f
    });
    cc(n, s);
    const m = ce();
    return xt(Sn, Ar()), Dr(() => {
      g();
    }), Ze(() => {
      a.value = m.value;
    }), t({
      vueFlowRef: a,
      hooks: s,
      getNodeTypes: u,
      getEdgeTypes: c,
      ...f
    }), (h, d) => (le(), de("div", {
      ref_key: "el",
      ref: m,
      class: "vue-flow"
    }, [
      Le(kd, null, {
        nodes: je(() => [
          (le(!0), de(Ge, null, Ot(Object.keys(P(u)), (w) => Ne(h.$slots, `node-${w}`)), 256))
        ]),
        edges: je(() => [
          (le(!0), de(Ge, null, Ot(Object.keys(P(c)), (w) => Ne(h.$slots, `edge-${w}`)), 256))
        ]),
        "connection-name": je(() => [
          Ne(h.$slots, "connection-line")
        ]),
        "zoom-pane": je(() => [
          Ne(h.$slots, "zoom-pane")
        ]),
        default: je(() => [
          Ne(h.$slots, "default")
        ]),
        _: 3
      }),
      Le(Id)
    ], 512));
  }
}), Dd = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, Zd = /* @__PURE__ */ we({
  ...Dd,
  props: {
    position: null
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = pe(), o = ie(() => `${t.position}`.split("-"));
    return (i, r) => (le(), de("div", {
      class: yt(["vue-flow__panel", P(o)]),
      style: tt({ pointerEvents: P(n) ? "none" : "all" })
    }, [
      Ne(i.$slots, "default")
    ], 6));
  }
});
export {
  Cn as BaseEdge,
  Mc as BezierEdge,
  st as ConnectionLineType,
  it as ConnectionMode,
  Gd as EdgeLabelRenderer,
  Ec as EdgeText,
  ye as ErrorCode,
  ct as GlobalVueFlowStorage,
  fn as Handle,
  oo as MarkerType,
  hr as NodeIdInjection,
  sn as PanOnScrollMode,
  Zd as Panel,
  Fu as PanelPosition,
  B as Position,
  mo as SelectionMode,
  $c as SimpleBezierEdge,
  _r as SmoothStepEdge,
  Tc as StepEdge,
  Oc as StraightEdge,
  Ud as VueFlow,
  xe as VueFlowError,
  ui as VueFlowInjection,
  Rd as addEdge,
  dn as applyChanges,
  Ld as applyEdgeChanges,
  Fd as applyNodeChanges,
  rt as clamp,
  ir as connectionExists,
  Zc as defaultEdgeTypes,
  Uc as defaultNodeTypes,
  yr as getBezierEdgeCenter,
  xr as getBezierPath,
  Hd as getBoundsofRects,
  wn as getConnectedEdges,
  Bd as getIncomers,
  Qe as getMarkerId,
  ar as getNodesInside,
  zd as getOutgoers,
  _o as getRectOfNodes,
  wr as getSimpleBezierPath,
  mr as getSimpleEdgeCenter,
  lo as getSmoothStepPath,
  kc as getStraightPath,
  cn as getTransformForBounds,
  Zu as graphPosToZoomedPos,
  Ae as isEdge,
  Yu as isGraphEdge,
  ut as isGraphNode,
  pt as isNode,
  wo as pointToRendererPoint,
  Zu as rendererPointToPoint,
  Vd as updateEdge,
  Yd as useEdge,
  Qc as useGetPointerPosition,
  Er as useHandle,
  nd as useNode,
  pe as useVueFlow,
  Xd as useZoomPanHelper
};
