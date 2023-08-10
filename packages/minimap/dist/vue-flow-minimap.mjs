import { defineComponent as Se, inject as en, h as nn, useAttrs as rn, ref as on, provide as sn, useSlots as an, computed as V, watchEffect as un, openBlock as ut, createBlock as ue, unref as T, normalizeClass as le, withCtx as ln, createElementBlock as qt, toDisplayString as cn, createCommentVNode as fn, Fragment as hn, renderList as dn, normalizeStyle as mn, createElementVNode as pn } from "vue";
import { useVueFlow as gn, getRectOfNodes as vn, getBoundsofRects as yn, Panel as wn, getConnectedEdges as lt } from "@vue-flow/core";
var _n = { value: () => {
} };
function te() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new Mt(n);
}
function Mt(t) {
  this._ = t;
}
function xn(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
Mt.prototype = te.prototype = {
  constructor: Mt,
  on: function(t, e) {
    var n = this._, i = xn(t + "", n), r, s = -1, o = i.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((r = (t = i[s]).type) && (r = bn(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++s < o; )
      if (r = (t = i[s]).type)
        n[r] = ce(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = ce(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Mt(t);
  },
  call: function(t, e) {
    if ((r = arguments.length - 2) > 0)
      for (var n = new Array(r), i = 0, r, s; i < r; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], i = 0, r = s.length; i < r; ++i)
      s[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], r = 0, s = i.length; r < s; ++r)
      i[r].value.apply(e, n);
  }
};
function bn(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function ce(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = _n, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ot = "http://www.w3.org/1999/xhtml";
const fe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ot,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Dt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), fe.hasOwnProperty(e) ? { space: fe[e], local: t } : t;
}
function kn(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ot && e.documentElement.namespaceURI === Ot ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Mn(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ze(t) {
  var e = Dt(t);
  return (e.local ? Mn : kn)(e);
}
function Nn() {
}
function ee(t) {
  return t == null ? Nn : function() {
    return this.querySelector(t);
  };
}
function En(t) {
  typeof t != "function" && (t = ee(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = new Array(o), u, l, f = 0; f < o; ++f)
      (u = s[f]) && (l = t.call(u, u.__data__, f, s)) && ("__data__" in u && (l.__data__ = u.__data__), a[f] = l);
  return new B(i, this._parents);
}
function Cn(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Sn() {
  return [];
}
function $e(t) {
  return t == null ? Sn : function() {
    return this.querySelectorAll(t);
  };
}
function zn(t) {
  return function() {
    return Cn(t.apply(this, arguments));
  };
}
function $n(t) {
  typeof t == "function" ? t = zn(t) : t = $e(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && (i.push(t.call(u, u.__data__, l, o)), r.push(u));
  return new B(i, r);
}
function Ae(t) {
  return function() {
    return this.matches(t);
  };
}
function Te(t) {
  return function(e) {
    return e.matches(t);
  };
}
var An = Array.prototype.find;
function Tn(t) {
  return function() {
    return An.call(this.children, t);
  };
}
function Rn() {
  return this.firstElementChild;
}
function Dn(t) {
  return this.select(t == null ? Rn : Tn(typeof t == "function" ? t : Te(t)));
}
var Fn = Array.prototype.filter;
function In() {
  return Array.from(this.children);
}
function Hn(t) {
  return function() {
    return Fn.call(this.children, t);
  };
}
function Pn(t) {
  return this.selectAll(t == null ? In : Hn(typeof t == "function" ? t : Te(t)));
}
function Bn(t) {
  typeof t != "function" && (t = Ae(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], u, l = 0; l < o; ++l)
      (u = s[l]) && t.call(u, u.__data__, l, s) && a.push(u);
  return new B(i, this._parents);
}
function Re(t) {
  return new Array(t.length);
}
function Xn() {
  return new B(this._enter || this._groups.map(Re), this._parents);
}
function St(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
St.prototype = {
  constructor: St,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function qn(t) {
  return function() {
    return t;
  };
}
function Vn(t, e, n, i, r, s) {
  for (var o = 0, a, u = e.length, l = s.length; o < l; ++o)
    (a = e[o]) ? (a.__data__ = s[o], i[o] = a) : n[o] = new St(t, s[o]);
  for (; o < u; ++o)
    (a = e[o]) && (r[o] = a);
}
function Ln(t, e, n, i, r, s, o) {
  var a, u, l = /* @__PURE__ */ new Map(), f = e.length, p = s.length, g = new Array(f), y;
  for (a = 0; a < f; ++a)
    (u = e[a]) && (g[a] = y = o.call(u, u.__data__, a, e) + "", l.has(y) ? r[a] = u : l.set(y, u));
  for (a = 0; a < p; ++a)
    y = o.call(t, s[a], a, s) + "", (u = l.get(y)) ? (i[a] = u, u.__data__ = s[a], l.delete(y)) : n[a] = new St(t, s[a]);
  for (a = 0; a < f; ++a)
    (u = e[a]) && l.get(g[a]) === u && (r[a] = u);
}
function Yn(t) {
  return t.__data__;
}
function On(t, e) {
  if (!arguments.length)
    return Array.from(this, Yn);
  var n = e ? Ln : Vn, i = this._parents, r = this._groups;
  typeof t != "function" && (t = qn(t));
  for (var s = r.length, o = new Array(s), a = new Array(s), u = new Array(s), l = 0; l < s; ++l) {
    var f = i[l], p = r[l], g = p.length, y = Wn(t.call(f, f && f.__data__, l, i)), b = y.length, M = a[l] = new Array(b), S = o[l] = new Array(b), x = u[l] = new Array(g);
    n(f, p, M, S, x, y, e);
    for (var $ = 0, A = 0, X, I; $ < b; ++$)
      if (X = M[$]) {
        for ($ >= A && (A = $ + 1); !(I = S[A]) && ++A < b; )
          ;
        X._next = I || null;
      }
  }
  return o = new B(o, i), o._enter = a, o._exit = u, o;
}
function Wn(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Un() {
  return new B(this._exit || this._groups.map(Re), this._parents);
}
function Gn(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function Kn(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, o = Math.min(r, s), a = new Array(r), u = 0; u < o; ++u)
    for (var l = n[u], f = i[u], p = l.length, g = a[u] = new Array(p), y, b = 0; b < p; ++b)
      (y = l[b] || f[b]) && (g[b] = y);
  for (; u < r; ++u)
    a[u] = n[u];
  return new B(a, this._parents);
}
function Zn() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], o; --r >= 0; )
      (o = i[r]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Qn(t) {
  t || (t = Jn);
  function e(p, g) {
    return p && g ? t(p.__data__, g.__data__) : !p - !g;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var o = n[s], a = o.length, u = r[s] = new Array(a), l, f = 0; f < a; ++f)
      (l = o[f]) && (u[f] = l);
    u.sort(e);
  }
  return new B(r, this._parents).order();
}
function Jn(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function jn() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ti() {
  return Array.from(this);
}
function ei() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var o = i[r];
      if (o)
        return o;
    }
  return null;
}
function ni() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function ii() {
  return !this.node();
}
function ri(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, o = r.length, a; s < o; ++s)
      (a = r[s]) && t.call(a, a.__data__, s, r);
  return this;
}
function oi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function si(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ai(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ui(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function li(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ci(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function fi(t, e) {
  var n = Dt(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? si : oi : typeof e == "function" ? n.local ? ci : li : n.local ? ui : ai)(n, e));
}
function De(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function hi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function di(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function mi(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function pi(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? hi : typeof e == "function" ? mi : di)(t, e, n ?? "")) : st(this.node(), t);
}
function st(t, e) {
  return t.style.getPropertyValue(e) || De(t).getComputedStyle(t, null).getPropertyValue(e);
}
function gi(t) {
  return function() {
    delete this[t];
  };
}
function vi(t, e) {
  return function() {
    this[t] = e;
  };
}
function yi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function wi(t, e) {
  return arguments.length > 1 ? this.each((e == null ? gi : typeof e == "function" ? yi : vi)(t, e)) : this.node()[t];
}
function Fe(t) {
  return t.trim().split(/^|\s+/);
}
function ne(t) {
  return t.classList || new Ie(t);
}
function Ie(t) {
  this._node = t, this._names = Fe(t.getAttribute("class") || "");
}
Ie.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function He(t, e) {
  for (var n = ne(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function Pe(t, e) {
  for (var n = ne(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function _i(t) {
  return function() {
    He(this, t);
  };
}
function xi(t) {
  return function() {
    Pe(this, t);
  };
}
function bi(t, e) {
  return function() {
    (e.apply(this, arguments) ? He : Pe)(this, t);
  };
}
function ki(t, e) {
  var n = Fe(t + "");
  if (arguments.length < 2) {
    for (var i = ne(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? bi : e ? _i : xi)(n, e));
}
function Mi() {
  this.textContent = "";
}
function Ni(t) {
  return function() {
    this.textContent = t;
  };
}
function Ei(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ci(t) {
  return arguments.length ? this.each(t == null ? Mi : (typeof t == "function" ? Ei : Ni)(t)) : this.node().textContent;
}
function Si() {
  this.innerHTML = "";
}
function zi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $i(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ai(t) {
  return arguments.length ? this.each(t == null ? Si : (typeof t == "function" ? $i : zi)(t)) : this.node().innerHTML;
}
function Ti() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ri() {
  return this.each(Ti);
}
function Di() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Fi() {
  return this.each(Di);
}
function Ii(t) {
  var e = typeof t == "function" ? t : ze(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Hi() {
  return null;
}
function Pi(t, e) {
  var n = typeof t == "function" ? t : ze(t), i = e == null ? Hi : typeof e == "function" ? e : ee(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Bi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Xi() {
  return this.each(Bi);
}
function qi() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Vi() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Li(t) {
  return this.select(t ? Vi : qi);
}
function Yi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Oi(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Wi(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Ui(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Gi(t, e, n) {
  return function() {
    var i = this.__on, r, s = Oi(e);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((r = i[o]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = s, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), r = { type: t.type, name: t.name, value: e, listener: s, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function Ki(t, e, n) {
  var i = Wi(t + ""), r, s = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, f; u < l; ++u)
        for (r = 0, f = a[u]; r < s; ++r)
          if ((o = i[r]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (a = e ? Gi : Ui, r = 0; r < s; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function Be(t, e, n) {
  var i = De(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function Zi(t, e) {
  return function() {
    return Be(this, t, e);
  };
}
function Qi(t, e) {
  return function() {
    return Be(this, t, e.apply(this, arguments));
  };
}
function Ji(t, e) {
  return this.each((typeof e == "function" ? Qi : Zi)(t, e));
}
function* ji() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, o; r < s; ++r)
      (o = i[r]) && (yield o);
}
var Xe = [null];
function B(t, e) {
  this._groups = t, this._parents = e;
}
function yt() {
  return new B([[document.documentElement]], Xe);
}
function tr() {
  return this;
}
B.prototype = yt.prototype = {
  constructor: B,
  select: En,
  selectAll: $n,
  selectChild: Dn,
  selectChildren: Pn,
  filter: Bn,
  data: On,
  enter: Xn,
  exit: Un,
  join: Gn,
  merge: Kn,
  selection: tr,
  order: Zn,
  sort: Qn,
  call: jn,
  nodes: ti,
  node: ei,
  size: ni,
  empty: ii,
  each: ri,
  attr: fi,
  style: pi,
  property: wi,
  classed: ki,
  text: Ci,
  html: Ai,
  raise: Ri,
  lower: Fi,
  append: Ii,
  insert: Pi,
  remove: Xi,
  clone: Li,
  datum: Yi,
  on: Ki,
  dispatch: Ji,
  [Symbol.iterator]: ji
};
function tt(t) {
  return typeof t == "string" ? new B([[document.querySelector(t)]], [document.documentElement]) : new B([[t]], Xe);
}
function er(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function J(t, e) {
  if (t = er(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = t.clientX, i.y = t.clientY, i = i.matrixTransform(e.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (e.getBoundingClientRect) {
      var r = e.getBoundingClientRect();
      return [t.clientX - r.left - e.clientLeft, t.clientY - r.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Wt = { capture: !0, passive: !1 };
function Ut(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function nr(t) {
  var e = t.document.documentElement, n = tt(t).on("dragstart.drag", Ut, Wt);
  "onselectstart" in e ? n.on("selectstart.drag", Ut, Wt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ir(t, e) {
  var n = t.document.documentElement, i = tt(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Ut, Wt), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function ie(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function qe(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function wt() {
}
var mt = 0.7, zt = 1 / mt, ot = "\\s*([+-]?\\d+)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", O = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rr = /^#([0-9a-f]{3,8})$/, or = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), sr = new RegExp(`^rgb\\(${O},${O},${O}\\)$`), ar = new RegExp(`^rgba\\(${ot},${ot},${ot},${pt}\\)$`), ur = new RegExp(`^rgba\\(${O},${O},${O},${pt}\\)$`), lr = new RegExp(`^hsl\\(${pt},${O},${O}\\)$`), cr = new RegExp(`^hsla\\(${pt},${O},${O},${pt}\\)$`), he = {
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
ie(wt, gt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: de,
  // Deprecated! Use color.formatHex.
  formatHex: de,
  formatHex8: fr,
  formatHsl: hr,
  formatRgb: me,
  toString: me
});
function de() {
  return this.rgb().formatHex();
}
function fr() {
  return this.rgb().formatHex8();
}
function hr() {
  return Ve(this).formatHsl();
}
function me() {
  return this.rgb().formatRgb();
}
function gt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = rr.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? pe(e) : n === 3 ? new F(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? _t(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? _t(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = or.exec(t)) ? new F(e[1], e[2], e[3], 1) : (e = sr.exec(t)) ? new F(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ar.exec(t)) ? _t(e[1], e[2], e[3], e[4]) : (e = ur.exec(t)) ? _t(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = lr.exec(t)) ? ye(e[1], e[2] / 100, e[3] / 100, 1) : (e = cr.exec(t)) ? ye(e[1], e[2] / 100, e[3] / 100, e[4]) : he.hasOwnProperty(t) ? pe(he[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function pe(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function _t(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new F(t, e, n, i);
}
function dr(t) {
  return t instanceof wt || (t = gt(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Gt(t, e, n, i) {
  return arguments.length === 1 ? dr(t) : new F(t, e, n, i ?? 1);
}
function F(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
ie(F, Gt, qe(wt, {
  brighter(t) {
    return t = t == null ? zt : Math.pow(zt, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? mt : Math.pow(mt, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(nt(this.r), nt(this.g), nt(this.b), $t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ge,
  // Deprecated! Use color.formatHex.
  formatHex: ge,
  formatHex8: mr,
  formatRgb: ve,
  toString: ve
}));
function ge() {
  return `#${et(this.r)}${et(this.g)}${et(this.b)}`;
}
function mr() {
  return `#${et(this.r)}${et(this.g)}${et(this.b)}${et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ve() {
  const t = $t(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function $t(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function nt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function et(t) {
  return t = nt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ye(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new L(t, e, n, i);
}
function Ve(t) {
  if (t instanceof L)
    return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof wt || (t = gt(t)), !t)
    return new L();
  if (t instanceof L)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), o = NaN, a = s - r, u = (s + r) / 2;
  return a ? (e === s ? o = (n - i) / a + (n < i) * 6 : n === s ? o = (i - e) / a + 2 : o = (e - n) / a + 4, a /= u < 0.5 ? s + r : 2 - s - r, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new L(o, a, u, t.opacity);
}
function pr(t, e, n, i) {
  return arguments.length === 1 ? Ve(t) : new L(t, e, n, i ?? 1);
}
function L(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
ie(L, pr, qe(wt, {
  brighter(t) {
    return t = t == null ? zt : Math.pow(zt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? mt : Math.pow(mt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new F(
      Vt(t >= 240 ? t - 240 : t + 120, r, i),
      Vt(t, r, i),
      Vt(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new L(we(this.h), xt(this.s), xt(this.l), $t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = $t(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${we(this.h)}, ${xt(this.s) * 100}%, ${xt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function we(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function xt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Vt(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Le = (t) => () => t;
function gr(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function vr(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function yr(t) {
  return (t = +t) == 1 ? Ye : function(e, n) {
    return n - e ? vr(e, n, t) : Le(isNaN(e) ? n : e);
  };
}
function Ye(t, e) {
  var n = e - t;
  return n ? gr(t, n) : Le(isNaN(t) ? e : t);
}
const _e = function t(e) {
  var n = yr(e);
  function i(r, s) {
    var o = n((r = Gt(r)).r, (s = Gt(s)).r), a = n(r.g, s.g), u = n(r.b, s.b), l = Ye(r.opacity, s.opacity);
    return function(f) {
      return r.r = o(f), r.g = a(f), r.b = u(f), r.opacity = l(f), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function j(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Lt = new RegExp(Kt.source, "g");
function wr(t) {
  return function() {
    return t;
  };
}
function _r(t) {
  return function(e) {
    return t(e) + "";
  };
}
function xr(t, e) {
  var n = Kt.lastIndex = Lt.lastIndex = 0, i, r, s, o = -1, a = [], u = [];
  for (t = t + "", e = e + ""; (i = Kt.exec(t)) && (r = Lt.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, u.push({ i: o, x: j(i, r) })), n = Lt.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? _r(u[0].x) : wr(e) : (e = u.length, function(l) {
    for (var f = 0, p; f < e; ++f)
      a[(p = u[f]).i] = p.x(l);
    return a.join("");
  });
}
var xe = 180 / Math.PI, Zt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Oe(t, e, n, i, r, s) {
  var o, a, u;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (u = t * n + e * i) && (n -= t * u, i -= e * u), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, u /= a), t * i < e * n && (t = -t, e = -e, u = -u, o = -o), {
    translateX: r,
    translateY: s,
    rotate: Math.atan2(e, t) * xe,
    skewX: Math.atan(u) * xe,
    scaleX: o,
    scaleY: a
  };
}
var bt;
function br(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Zt : Oe(e.a, e.b, e.c, e.d, e.e, e.f);
}
function kr(t) {
  return t == null || (bt || (bt = document.createElementNS("http://www.w3.org/2000/svg", "g")), bt.setAttribute("transform", t), !(t = bt.transform.baseVal.consolidate())) ? Zt : (t = t.matrix, Oe(t.a, t.b, t.c, t.d, t.e, t.f));
}
function We(t, e, n, i) {
  function r(l) {
    return l.length ? l.pop() + " " : "";
  }
  function s(l, f, p, g, y, b) {
    if (l !== p || f !== g) {
      var M = y.push("translate(", null, e, null, n);
      b.push({ i: M - 4, x: j(l, p) }, { i: M - 2, x: j(f, g) });
    } else
      (p || g) && y.push("translate(" + p + e + g + n);
  }
  function o(l, f, p, g) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), g.push({ i: p.push(r(p) + "rotate(", null, i) - 2, x: j(l, f) })) : f && p.push(r(p) + "rotate(" + f + i);
  }
  function a(l, f, p, g) {
    l !== f ? g.push({ i: p.push(r(p) + "skewX(", null, i) - 2, x: j(l, f) }) : f && p.push(r(p) + "skewX(" + f + i);
  }
  function u(l, f, p, g, y, b) {
    if (l !== p || f !== g) {
      var M = y.push(r(y) + "scale(", null, ",", null, ")");
      b.push({ i: M - 4, x: j(l, p) }, { i: M - 2, x: j(f, g) });
    } else
      (p !== 1 || g !== 1) && y.push(r(y) + "scale(" + p + "," + g + ")");
  }
  return function(l, f) {
    var p = [], g = [];
    return l = t(l), f = t(f), s(l.translateX, l.translateY, f.translateX, f.translateY, p, g), o(l.rotate, f.rotate, p, g), a(l.skewX, f.skewX, p, g), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, p, g), l = f = null, function(y) {
      for (var b = -1, M = g.length, S; ++b < M; )
        p[(S = g[b]).i] = S.x(y);
      return p.join("");
    };
  };
}
var Mr = We(br, "px, ", "px)", "deg)"), Nr = We(kr, ", ", ")", ")"), Er = 1e-12;
function be(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Cr(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Sr(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const zr = function t(e, n, i) {
  function r(s, o) {
    var a = s[0], u = s[1], l = s[2], f = o[0], p = o[1], g = o[2], y = f - a, b = p - u, M = y * y + b * b, S, x;
    if (M < Er)
      x = Math.log(g / l) / e, S = function(R) {
        return [
          a + R * y,
          u + R * b,
          l * Math.exp(e * R * x)
        ];
      };
    else {
      var $ = Math.sqrt(M), A = (g * g - l * l + i * M) / (2 * l * n * $), X = (g * g - l * l - i * M) / (2 * g * n * $), I = Math.log(Math.sqrt(A * A + 1) - A), z = Math.log(Math.sqrt(X * X + 1) - X);
      x = (z - I) / e, S = function(R) {
        var U = R * x, C = be(I), rt = l / (n * $) * (C * Sr(e * U + I) - Cr(I));
        return [
          a + rt * y,
          u + rt * b,
          l * C / be(e * U + I)
        ];
      };
    }
    return S.duration = x * 1e3 * e / Math.SQRT2, S;
  }
  return r.rho = function(s) {
    var o = Math.max(1e-3, +s), a = o * o, u = a * a;
    return t(o, a, u);
  }, r;
}(Math.SQRT2, 2, 4);
var at = 0, ht = 0, ct = 0, Ue = 1e3, At, dt, Tt = 0, it = 0, Ft = 0, vt = typeof performance == "object" && performance.now ? performance : Date, Ge = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function re() {
  return it || (Ge($r), it = vt.now() + Ft);
}
function $r() {
  it = 0;
}
function Rt() {
  this._call = this._time = this._next = null;
}
Rt.prototype = Ke.prototype = {
  constructor: Rt,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? re() : +n) + (e == null ? 0 : +e), !this._next && dt !== this && (dt ? dt._next = this : At = this, dt = this), this._call = t, this._time = n, Qt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qt());
  }
};
function Ke(t, e, n) {
  var i = new Rt();
  return i.restart(t, e, n), i;
}
function Ar() {
  re(), ++at;
  for (var t = At, e; t; )
    (e = it - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --at;
}
function ke() {
  it = (Tt = vt.now()) + Ft, at = ht = 0;
  try {
    Ar();
  } finally {
    at = 0, Rr(), it = 0;
  }
}
function Tr() {
  var t = vt.now(), e = t - Tt;
  e > Ue && (Ft -= e, Tt = t);
}
function Rr() {
  for (var t, e = At, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : At = n);
  dt = t, Qt(i);
}
function Qt(t) {
  if (!at) {
    ht && (ht = clearTimeout(ht));
    var e = t - it;
    e > 24 ? (t < 1 / 0 && (ht = setTimeout(ke, t - vt.now() - Ft)), ct && (ct = clearInterval(ct))) : (ct || (Tt = vt.now(), ct = setInterval(Tr, Ue)), at = 1, Ge(ke));
  }
}
function Me(t, e, n) {
  var i = new Rt();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var Dr = te("start", "end", "cancel", "interrupt"), Fr = [], Ze = 0, Ne = 1, Jt = 2, Nt = 3, Ee = 4, jt = 5, Et = 6;
function It(t, e, n, i, r, s) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (n in o)
    return;
  Ir(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: Dr,
    tween: Fr,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Ze
  });
}
function oe(t, e) {
  var n = Y(t, e);
  if (n.state > Ze)
    throw new Error("too late; already scheduled");
  return n;
}
function W(t, e) {
  var n = Y(t, e);
  if (n.state > Nt)
    throw new Error("too late; already running");
  return n;
}
function Y(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function Ir(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = Ke(s, 0, n.time);
  function s(l) {
    n.state = Ne, n.timer.restart(o, n.delay, n.time), n.delay <= l && o(l - n.delay);
  }
  function o(l) {
    var f, p, g, y;
    if (n.state !== Ne)
      return u();
    for (f in i)
      if (y = i[f], y.name === n.name) {
        if (y.state === Nt)
          return Me(o);
        y.state === Ee ? (y.state = Et, y.timer.stop(), y.on.call("interrupt", t, t.__data__, y.index, y.group), delete i[f]) : +f < e && (y.state = Et, y.timer.stop(), y.on.call("cancel", t, t.__data__, y.index, y.group), delete i[f]);
      }
    if (Me(function() {
      n.state === Nt && (n.state = Ee, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Jt, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Jt) {
      for (n.state = Nt, r = new Array(g = n.tween.length), f = 0, p = -1; f < g; ++f)
        (y = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (r[++p] = y);
      r.length = p + 1;
    }
  }
  function a(l) {
    for (var f = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = jt, 1), p = -1, g = r.length; ++p < g; )
      r[p].call(t, f);
    n.state === jt && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Et, n.timer.stop(), delete i[e];
    for (var l in i)
      return;
    delete t.__transition;
  }
}
function Ct(t, e) {
  var n = t.__transition, i, r, s = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((i = n[o]).name !== e) {
        s = !1;
        continue;
      }
      r = i.state > Jt && i.state < jt, i.state = Et, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[o];
    }
    s && delete t.__transition;
  }
}
function Hr(t) {
  return this.each(function() {
    Ct(this, t);
  });
}
function Pr(t, e) {
  var n, i;
  return function() {
    var r = W(this, t), s = r.tween;
    if (s !== n) {
      i = n = s;
      for (var o = 0, a = i.length; o < a; ++o)
        if (i[o].name === e) {
          i = i.slice(), i.splice(o, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function Br(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = W(this, t), o = s.tween;
    if (o !== i) {
      r = (i = o).slice();
      for (var a = { name: e, value: n }, u = 0, l = r.length; u < l; ++u)
        if (r[u].name === e) {
          r[u] = a;
          break;
        }
      u === l && r.push(a);
    }
    s.tween = r;
  };
}
function Xr(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = Y(this.node(), n).tween, r = 0, s = i.length, o; r < s; ++r)
      if ((o = i[r]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Pr : Br)(n, t, e));
}
function se(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = W(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return Y(r, i).value[e];
  };
}
function Qe(t, e) {
  var n;
  return (typeof e == "number" ? j : e instanceof gt ? _e : (n = gt(e)) ? (e = n, _e) : xr)(t, e);
}
function qr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Lr(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === r ? null : o === i ? s : s = e(i = o, n);
  };
}
function Yr(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === r ? null : o === i ? s : s = e(i = o, n);
  };
}
function Or(t, e, n) {
  var i, r, s;
  return function() {
    var o, a = n(this), u;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = a + "", o === u ? null : o === i && u === r ? s : (r = u, s = e(i = o, a)));
  };
}
function Wr(t, e, n) {
  var i, r, s;
  return function() {
    var o, a = n(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = a + "", o === u ? null : o === i && u === r ? s : (r = u, s = e(i = o, a)));
  };
}
function Ur(t, e) {
  var n = Dt(t), i = n === "transform" ? Nr : Qe;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Wr : Or)(n, i, se(this, "attr." + t, e)) : e == null ? (n.local ? Vr : qr)(n) : (n.local ? Yr : Lr)(n, i, e));
}
function Gr(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Kr(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Zr(t, e) {
  var n, i;
  function r() {
    var s = e.apply(this, arguments);
    return s !== i && (n = (i = s) && Kr(t, s)), n;
  }
  return r._value = e, r;
}
function Qr(t, e) {
  var n, i;
  function r() {
    var s = e.apply(this, arguments);
    return s !== i && (n = (i = s) && Gr(t, s)), n;
  }
  return r._value = e, r;
}
function Jr(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = Dt(t);
  return this.tween(n, (i.local ? Zr : Qr)(i, e));
}
function jr(t, e) {
  return function() {
    oe(this, t).delay = +e.apply(this, arguments);
  };
}
function to(t, e) {
  return e = +e, function() {
    oe(this, t).delay = e;
  };
}
function eo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? jr : to)(e, t)) : Y(this.node(), e).delay;
}
function no(t, e) {
  return function() {
    W(this, t).duration = +e.apply(this, arguments);
  };
}
function io(t, e) {
  return e = +e, function() {
    W(this, t).duration = e;
  };
}
function ro(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? no : io)(e, t)) : Y(this.node(), e).duration;
}
function oo(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    W(this, t).ease = e;
  };
}
function so(t) {
  var e = this._id;
  return arguments.length ? this.each(oo(e, t)) : Y(this.node(), e).ease;
}
function ao(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    W(this, t).ease = n;
  };
}
function uo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(ao(this._id, t));
}
function lo(t) {
  typeof t != "function" && (t = Ae(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], u, l = 0; l < o; ++l)
      (u = s[l]) && t.call(u, u.__data__, l, s) && a.push(u);
  return new Q(i, this._parents, this._name, this._id);
}
function co(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, s = Math.min(i, r), o = new Array(i), a = 0; a < s; ++a)
    for (var u = e[a], l = n[a], f = u.length, p = o[a] = new Array(f), g, y = 0; y < f; ++y)
      (g = u[y] || l[y]) && (p[y] = g);
  for (; a < i; ++a)
    o[a] = e[a];
  return new Q(o, this._parents, this._name, this._id);
}
function fo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ho(t, e, n) {
  var i, r, s = fo(e) ? oe : W;
  return function() {
    var o = s(this, t), a = o.on;
    a !== i && (r = (i = a).copy()).on(e, n), o.on = r;
  };
}
function mo(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Y(this.node(), n).on.on(t) : this.each(ho(n, t, e));
}
function po(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function go() {
  return this.on("end.remove", po(this._id));
}
function vo(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ee(t));
  for (var i = this._groups, r = i.length, s = new Array(r), o = 0; o < r; ++o)
    for (var a = i[o], u = a.length, l = s[o] = new Array(u), f, p, g = 0; g < u; ++g)
      (f = a[g]) && (p = t.call(f, f.__data__, g, a)) && ("__data__" in f && (p.__data__ = f.__data__), l[g] = p, It(l[g], e, n, g, l, Y(f, n)));
  return new Q(s, this._parents, e, n);
}
function yo(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $e(t));
  for (var i = this._groups, r = i.length, s = [], o = [], a = 0; a < r; ++a)
    for (var u = i[a], l = u.length, f, p = 0; p < l; ++p)
      if (f = u[p]) {
        for (var g = t.call(f, f.__data__, p, u), y, b = Y(f, n), M = 0, S = g.length; M < S; ++M)
          (y = g[M]) && It(y, e, n, M, g, b);
        s.push(g), o.push(f);
      }
  return new Q(s, o, e, n);
}
var wo = yt.prototype.constructor;
function _o() {
  return new wo(this._groups, this._parents);
}
function xo(t, e) {
  var n, i, r;
  return function() {
    var s = st(this, t), o = (this.style.removeProperty(t), st(this, t));
    return s === o ? null : s === n && o === i ? r : r = e(n = s, i = o);
  };
}
function Je(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function bo(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var o = st(this, t);
    return o === r ? null : o === i ? s : s = e(i = o, n);
  };
}
function ko(t, e, n) {
  var i, r, s;
  return function() {
    var o = st(this, t), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), st(this, t))), o === u ? null : o === i && u === r ? s : (r = u, s = e(i = o, a));
  };
}
function Mo(t, e) {
  var n, i, r, s = "style." + e, o = "end." + s, a;
  return function() {
    var u = W(this, t), l = u.on, f = u.value[s] == null ? a || (a = Je(e)) : void 0;
    (l !== n || r !== f) && (i = (n = l).copy()).on(o, r = f), u.on = i;
  };
}
function No(t, e, n) {
  var i = (t += "") == "transform" ? Mr : Qe;
  return e == null ? this.styleTween(t, xo(t, i)).on("end.style." + t, Je(t)) : typeof e == "function" ? this.styleTween(t, ko(t, i, se(this, "style." + t, e))).each(Mo(this._id, t)) : this.styleTween(t, bo(t, i, e), n).on("end.style." + t, null);
}
function Eo(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function Co(t, e, n) {
  var i, r;
  function s() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Eo(t, o, n)), i;
  }
  return s._value = e, s;
}
function So(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, Co(t, e, n ?? ""));
}
function zo(t) {
  return function() {
    this.textContent = t;
  };
}
function $o(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ao(t) {
  return this.tween("text", typeof t == "function" ? $o(se(this, "text", t)) : zo(t == null ? "" : t + ""));
}
function To(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ro(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && To(r)), e;
  }
  return i._value = t, i;
}
function Do(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Ro(t));
}
function Fo() {
  for (var t = this._name, e = this._id, n = je(), i = this._groups, r = i.length, s = 0; s < r; ++s)
    for (var o = i[s], a = o.length, u, l = 0; l < a; ++l)
      if (u = o[l]) {
        var f = Y(u, e);
        It(u, t, n, l, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Q(i, this._parents, t, n);
}
function Io() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --r === 0 && s();
    } };
    n.each(function() {
      var l = W(this, i), f = l.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(u)), l.on = e;
    }), r === 0 && s();
  });
}
var Ho = 0;
function Q(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function je() {
  return ++Ho;
}
var K = yt.prototype;
Q.prototype = {
  constructor: Q,
  select: vo,
  selectAll: yo,
  selectChild: K.selectChild,
  selectChildren: K.selectChildren,
  filter: lo,
  merge: co,
  selection: _o,
  transition: Fo,
  call: K.call,
  nodes: K.nodes,
  node: K.node,
  size: K.size,
  empty: K.empty,
  each: K.each,
  on: mo,
  attr: Ur,
  attrTween: Jr,
  style: No,
  styleTween: So,
  text: Ao,
  textTween: Do,
  remove: go,
  tween: Xr,
  delay: eo,
  duration: ro,
  ease: so,
  easeVarying: uo,
  end: Io,
  [Symbol.iterator]: K[Symbol.iterator]
};
function Po(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Bo = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Po
};
function Xo(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function qo(t) {
  var e, n;
  t instanceof Q ? (e = t._id, t = t._name) : (e = je(), (n = Bo).time = re(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, s = 0; s < r; ++s)
    for (var o = i[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && It(u, t, e, l, o, n || Xo(u, e));
  return new Q(i, this._parents, t, e);
}
yt.prototype.interrupt = Hr;
yt.prototype.transition = qo;
const kt = (t) => () => t;
function Vo(t, {
  sourceEvent: e,
  target: n,
  transform: i,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function Z(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Z.prototype = {
  constructor: Z,
  scale: function(t) {
    return t === 1 ? this : new Z(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Z(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ae = new Z(1, 0, 0);
Z.prototype;
function Yt(t) {
  t.stopImmediatePropagation();
}
function ft(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Lo(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Yo() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Ce() {
  return this.__zoom || ae;
}
function Oo(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Wo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Uo(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], s = t.invertY(e[0][1]) - n[0][1], o = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    o > s ? (s + o) / 2 : Math.min(0, s) || Math.max(0, o)
  );
}
function Go() {
  var t = Lo, e = Yo, n = Uo, i = Oo, r = Wo, s = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, u = zr, l = te("start", "zoom", "end"), f, p, g, y = 500, b = 150, M = 0, S = 10;
  function x(c) {
    c.property("__zoom", Ce).on("wheel.zoom", U, { passive: !1 }).on("mousedown.zoom", C).on("dblclick.zoom", rt).filter(r).on("touchstart.zoom", Ht).on("touchmove.zoom", Pt).on("touchend.zoom touchcancel.zoom", Bt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(c, w, h, d) {
    var v = c.selection ? c.selection() : c;
    v.property("__zoom", Ce), c !== v ? I(c, w, h, d) : v.interrupt().each(function() {
      z(this, arguments).event(d).start().zoom(null, typeof w == "function" ? w.apply(this, arguments) : w).end();
    });
  }, x.scaleBy = function(c, w, h, d) {
    x.scaleTo(c, function() {
      var v = this.__zoom.k, m = typeof w == "function" ? w.apply(this, arguments) : w;
      return v * m;
    }, h, d);
  }, x.scaleTo = function(c, w, h, d) {
    x.transform(c, function() {
      var v = e.apply(this, arguments), m = this.__zoom, _ = h == null ? X(v) : typeof h == "function" ? h.apply(this, arguments) : h, N = m.invert(_), k = typeof w == "function" ? w.apply(this, arguments) : w;
      return n(A($(m, k), _, N), v, o);
    }, h, d);
  }, x.translateBy = function(c, w, h, d) {
    x.transform(c, function() {
      return n(this.__zoom.translate(
        typeof w == "function" ? w.apply(this, arguments) : w,
        typeof h == "function" ? h.apply(this, arguments) : h
      ), e.apply(this, arguments), o);
    }, null, d);
  }, x.translateTo = function(c, w, h, d, v) {
    x.transform(c, function() {
      var m = e.apply(this, arguments), _ = this.__zoom, N = d == null ? X(m) : typeof d == "function" ? d.apply(this, arguments) : d;
      return n(ae.translate(N[0], N[1]).scale(_.k).translate(
        typeof w == "function" ? -w.apply(this, arguments) : -w,
        typeof h == "function" ? -h.apply(this, arguments) : -h
      ), m, o);
    }, d, v);
  };
  function $(c, w) {
    return w = Math.max(s[0], Math.min(s[1], w)), w === c.k ? c : new Z(w, c.x, c.y);
  }
  function A(c, w, h) {
    var d = w[0] - h[0] * c.k, v = w[1] - h[1] * c.k;
    return d === c.x && v === c.y ? c : new Z(c.k, d, v);
  }
  function X(c) {
    return [(+c[0][0] + +c[1][0]) / 2, (+c[0][1] + +c[1][1]) / 2];
  }
  function I(c, w, h, d) {
    c.on("start.zoom", function() {
      z(this, arguments).event(d).start();
    }).on("interrupt.zoom end.zoom", function() {
      z(this, arguments).event(d).end();
    }).tween("zoom", function() {
      var v = this, m = arguments, _ = z(v, m).event(d), N = e.apply(v, m), k = h == null ? X(N) : typeof h == "function" ? h.apply(v, m) : h, D = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), E = v.__zoom, H = typeof w == "function" ? w.apply(v, m) : w, q = u(E.invert(k).concat(D / E.k), H.invert(k).concat(D / H.k));
      return function(P) {
        if (P === 1)
          P = H;
        else {
          var G = q(P), Xt = D / G[2];
          P = new Z(Xt, k[0] - G[0] * Xt, k[1] - G[1] * Xt);
        }
        _.zoom(null, P);
      };
    });
  }
  function z(c, w, h) {
    return !h && c.__zooming || new R(c, w);
  }
  function R(c, w) {
    this.that = c, this.args = w, this.active = 0, this.sourceEvent = null, this.extent = e.apply(c, w), this.taps = 0;
  }
  R.prototype = {
    event: function(c) {
      return c && (this.sourceEvent = c), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(c, w) {
      return this.mouse && c !== "mouse" && (this.mouse[1] = w.invert(this.mouse[0])), this.touch0 && c !== "touch" && (this.touch0[1] = w.invert(this.touch0[0])), this.touch1 && c !== "touch" && (this.touch1[1] = w.invert(this.touch1[0])), this.that.__zoom = w, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(c) {
      var w = tt(this.that).datum();
      l.call(
        c,
        this.that,
        new Vo(c, {
          sourceEvent: this.sourceEvent,
          target: x,
          type: c,
          transform: this.that.__zoom,
          dispatch: l
        }),
        w
      );
    }
  };
  function U(c, ...w) {
    if (!t.apply(this, arguments))
      return;
    var h = z(this, w).event(c), d = this.__zoom, v = Math.max(s[0], Math.min(s[1], d.k * Math.pow(2, i.apply(this, arguments)))), m = J(c);
    if (h.wheel)
      (h.mouse[0][0] !== m[0] || h.mouse[0][1] !== m[1]) && (h.mouse[1] = d.invert(h.mouse[0] = m)), clearTimeout(h.wheel);
    else {
      if (d.k === v)
        return;
      h.mouse = [m, d.invert(m)], Ct(this), h.start();
    }
    ft(c), h.wheel = setTimeout(_, b), h.zoom("mouse", n(A($(d, v), h.mouse[0], h.mouse[1]), h.extent, o));
    function _() {
      h.wheel = null, h.end();
    }
  }
  function C(c, ...w) {
    if (g || !t.apply(this, arguments))
      return;
    var h = c.currentTarget, d = z(this, w, !0).event(c), v = tt(c.view).on("mousemove.zoom", k, !0).on("mouseup.zoom", D, !0), m = J(c, h), _ = c.clientX, N = c.clientY;
    nr(c.view), Yt(c), d.mouse = [m, this.__zoom.invert(m)], Ct(this), d.start();
    function k(E) {
      if (ft(E), !d.moved) {
        var H = E.clientX - _, q = E.clientY - N;
        d.moved = H * H + q * q > M;
      }
      d.event(E).zoom("mouse", n(A(d.that.__zoom, d.mouse[0] = J(E, h), d.mouse[1]), d.extent, o));
    }
    function D(E) {
      v.on("mousemove.zoom mouseup.zoom", null), ir(E.view, d.moved), ft(E), d.event(E).end();
    }
  }
  function rt(c, ...w) {
    if (t.apply(this, arguments)) {
      var h = this.__zoom, d = J(c.changedTouches ? c.changedTouches[0] : c, this), v = h.invert(d), m = h.k * (c.shiftKey ? 0.5 : 2), _ = n(A($(h, m), d, v), e.apply(this, w), o);
      ft(c), a > 0 ? tt(this).transition().duration(a).call(I, _, d, c) : tt(this).call(x.transform, _, d, c);
    }
  }
  function Ht(c, ...w) {
    if (t.apply(this, arguments)) {
      var h = c.touches, d = h.length, v = z(this, w, c.changedTouches.length === d).event(c), m, _, N, k;
      for (Yt(c), _ = 0; _ < d; ++_)
        N = h[_], k = J(N, this), k = [k, this.__zoom.invert(k), N.identifier], v.touch0 ? !v.touch1 && v.touch0[2] !== k[2] && (v.touch1 = k, v.taps = 0) : (v.touch0 = k, m = !0, v.taps = 1 + !!f);
      f && (f = clearTimeout(f)), m && (v.taps < 2 && (p = k[0], f = setTimeout(function() {
        f = null;
      }, y)), Ct(this), v.start());
    }
  }
  function Pt(c, ...w) {
    if (this.__zooming) {
      var h = z(this, w).event(c), d = c.changedTouches, v = d.length, m, _, N, k;
      for (ft(c), m = 0; m < v; ++m)
        _ = d[m], N = J(_, this), h.touch0 && h.touch0[2] === _.identifier ? h.touch0[0] = N : h.touch1 && h.touch1[2] === _.identifier && (h.touch1[0] = N);
      if (_ = h.that.__zoom, h.touch1) {
        var D = h.touch0[0], E = h.touch0[1], H = h.touch1[0], q = h.touch1[1], P = (P = H[0] - D[0]) * P + (P = H[1] - D[1]) * P, G = (G = q[0] - E[0]) * G + (G = q[1] - E[1]) * G;
        _ = $(_, Math.sqrt(P / G)), N = [(D[0] + H[0]) / 2, (D[1] + H[1]) / 2], k = [(E[0] + q[0]) / 2, (E[1] + q[1]) / 2];
      } else if (h.touch0)
        N = h.touch0[0], k = h.touch0[1];
      else
        return;
      h.zoom("touch", n(A(_, N, k), h.extent, o));
    }
  }
  function Bt(c, ...w) {
    if (this.__zooming) {
      var h = z(this, w).event(c), d = c.changedTouches, v = d.length, m, _;
      for (Yt(c), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, y), m = 0; m < v; ++m)
        _ = d[m], h.touch0 && h.touch0[2] === _.identifier ? delete h.touch0 : h.touch1 && h.touch1[2] === _.identifier && delete h.touch1;
      if (h.touch1 && !h.touch0 && (h.touch0 = h.touch1, delete h.touch1), h.touch0)
        h.touch0[1] = this.__zoom.invert(h.touch0[0]);
      else if (h.end(), h.taps === 2 && (_ = J(_, this), Math.hypot(p[0] - _[0], p[1] - _[1]) < S)) {
        var N = tt(this).on("dblclick.zoom");
        N && N.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : kt(+c), x) : i;
  }, x.filter = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : kt(!!c), x) : t;
  }, x.touchable = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : kt(!!c), x) : r;
  }, x.extent = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : kt([[+c[0][0], +c[0][1]], [+c[1][0], +c[1][1]]]), x) : e;
  }, x.scaleExtent = function(c) {
    return arguments.length ? (s[0] = +c[0], s[1] = +c[1], x) : [s[0], s[1]];
  }, x.translateExtent = function(c) {
    return arguments.length ? (o[0][0] = +c[0][0], o[1][0] = +c[1][0], o[0][1] = +c[0][1], o[1][1] = +c[1][1], x) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, x.constrain = function(c) {
    return arguments.length ? (n = c, x) : n;
  }, x.duration = function(c) {
    return arguments.length ? (a = +c, x) : a;
  }, x.interpolate = function(c) {
    return arguments.length ? (u = c, x) : u;
  }, x.on = function() {
    var c = l.on.apply(l, arguments);
    return c === l ? x : c;
  }, x.clickDistance = function(c) {
    return arguments.length ? (M = (c = +c) * c, x) : Math.sqrt(M);
  }, x.tapDistance = function(c) {
    return arguments.length ? (S = +c, x) : S;
  }, x;
}
const tn = Symbol("MiniMapSlots"), Ko = Se({
  name: "MiniMapNode",
  compatConfig: { MODE: 3 },
  props: ["id", "position", "dimensions", "strokeWidth", "strokeColor", "borderRadius", "color", "shapeRendering", "type"],
  emits: ["click", "dblclick", "mouseenter", "mousemove", "mouseleave"],
  setup(t, { attrs: e, emit: n }) {
    const i = en(tn);
    return () => {
      const r = e.style ?? {}, s = i[`node-${t.type}`];
      return s ? s(t) : nn("rect", {
        id: t.id,
        class: ["vue-flow__minimap-node", e.class].join(" "),
        style: r,
        x: t.position.x,
        y: t.position.y,
        rx: t.borderRadius,
        ry: t.borderRadius,
        width: t.dimensions.width,
        height: t.dimensions.height,
        fill: t.color || r.background || r.backgroundColor,
        stroke: t.strokeColor,
        strokeWidth: t.strokeWidth,
        shapeRendering: t.shapeRendering,
        onClick: (o) => n("click", o),
        onDblClick: (o) => n("dblclick", o),
        onMouseenter: (o) => n("mouseenter", o),
        onMousemove: (o) => n("mousemove", o),
        onMouseleave: (o) => n("mouseleave", o)
      });
    };
  }
}), Zo = ["width", "height", "viewBox", "aria-labelledby"], Qo = ["id"], Jo = ["d", "fill", "stroke", "stroke-width"], jo = {
  name: "MiniMap",
  compatConfig: { MODE: 3 }
}, ns = /* @__PURE__ */ Se({
  ...jo,
  props: {
    nodeColor: { type: [String, Function], default: "#e2e2e2" },
    nodeStrokeColor: { type: [String, Function], default: "transparent" },
    nodeClassName: { type: [String, Function] },
    nodeBorderRadius: { default: 5 },
    nodeStrokeWidth: { default: 2 },
    maskColor: { default: "rgb(240, 240, 240, 0.6)" },
    maskStrokeColor: { default: "none" },
    maskStrokeWidth: { default: 1 },
    position: { default: "bottom-right" },
    pannable: { type: Boolean, default: !1 },
    zoomable: { type: Boolean, default: !1 },
    width: null,
    height: null,
    ariaLabel: { default: "Vue Flow mini map" },
    inversePan: { type: Boolean, default: !1 },
    zoomStep: { default: 10 }
  },
  emits: ["click", "nodeClick", "nodeDblclick", "nodeMouseenter", "nodeMousemove", "nodeMouseleave"],
  setup(t, { emit: e }) {
    const n = rn(), i = 200, r = 150, { id: s, edges: o, viewport: a, translateExtent: u, dimensions: l, emits: f, nodes: p, d3Selection: g, d3Zoom: y } = gn(), b = on();
    sn(tn, an());
    const M = V(() => {
      var d;
      return t.width ?? ((d = n.style) == null ? void 0 : d.width) ?? i;
    }), S = V(() => {
      var d;
      return t.height ?? ((d = n.style) == null ? void 0 : d.height) ?? r;
    }), x = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision", $ = V(() => t.nodeColor instanceof Function ? t.nodeColor : () => t.nodeColor), A = V(
      () => t.nodeStrokeColor instanceof Function ? t.nodeStrokeColor : () => t.nodeStrokeColor
    ), X = V(
      () => t.nodeClassName instanceof Function ? t.nodeClassName : () => t.nodeClassName
    ), I = V(() => vn(p.value)), z = V(() => ({
      x: -a.value.x / a.value.zoom,
      y: -a.value.y / a.value.zoom,
      width: l.value.width / a.value.zoom,
      height: l.value.height / a.value.zoom
    })), R = V(() => p.value && p.value.length ? yn(I.value, z.value) : z.value), U = V(() => {
      const d = R.value.width / M.value, v = R.value.height / S.value;
      return Math.max(d, v);
    }), C = V(() => {
      const d = U.value * M.value, v = U.value * S.value, m = 5 * U.value;
      return {
        offset: m,
        x: R.value.x - (d - R.value.width) / 2 - m,
        y: R.value.y - (v - R.value.height) / 2 - m,
        width: d + m * 2,
        height: v + m * 2
      };
    }), rt = V(() => !C.value.x || !C.value.y ? "" : `
    M${C.value.x - C.value.offset},${C.value.y - C.value.offset}
    h${C.value.width + C.value.offset * 2}
    v${C.value.height + C.value.offset * 2}
    h${-C.value.width - C.value.offset * 2}z
    M${z.value.x},${z.value.y}
    h${z.value.width}
    v${z.value.height}
    h${-z.value.width}z`);
    un(
      (d) => {
        if (b.value) {
          const v = tt(b.value), m = (k) => {
            if (k.sourceEvent.type !== "wheel" || !g.value || !y.value)
              return;
            const D = -k.sourceEvent.deltaY * (k.sourceEvent.deltaMode === 1 ? 0.05 : k.sourceEvent.deltaMode ? 1 : 2e-3) * t.zoomStep, E = a.value.zoom * 2 ** D;
            y.value.scaleTo(g.value, E);
          }, _ = (k) => {
            if (k.sourceEvent.type !== "mousemove" || !g.value || !y.value)
              return;
            const D = U.value * Math.max(1, a.value.zoom) * (t.inversePan ? -1 : 1), E = {
              x: a.value.x - k.sourceEvent.movementX * D,
              y: a.value.y - k.sourceEvent.movementY * D
            }, H = [
              [0, 0],
              [l.value.width, l.value.height]
            ], q = ae.translate(E.x, E.y).scale(a.value.zoom), P = y.value.constrain()(q, H, u.value);
            y.value.transform(g.value, P);
          }, N = Go().on("zoom", t.pannable ? _ : () => {
          }).on("zoom.wheel", t.zoomable ? m : () => {
          });
          v.call(N), d(() => {
            v.on("zoom", null);
          });
        }
      },
      { flush: "post" }
    );
    function Ht(d) {
      const [v, m] = J(d);
      e("click", { event: d, position: { x: v, y: m } });
    }
    function Pt(d, v) {
      const m = { event: d, node: v, connectedEdges: lt([v], o.value) };
      f.miniMapNodeClick(m), e("nodeClick", m);
    }
    function Bt(d, v) {
      const m = { event: d, node: v, connectedEdges: lt([v], o.value) };
      f.miniMapNodeDoubleClick(m), e("nodeDblclick", m);
    }
    function c(d, v) {
      const m = { event: d, node: v, connectedEdges: lt([v], o.value) };
      f.miniMapNodeMouseEnter(m), e("nodeMouseenter", m);
    }
    function w(d, v) {
      const m = { event: d, node: v, connectedEdges: lt([v], o.value) };
      f.miniMapNodeMouseMove(m), e("nodeMousemove", m);
    }
    function h(d, v) {
      const m = { event: d, node: v, connectedEdges: lt([v], o.value) };
      f.miniMapNodeMouseLeave(m), e("nodeMouseleave", m);
    }
    return (d, v) => (ut(), ue(T(wn), {
      position: t.position,
      class: le(["vue-flow__minimap", { pannable: t.pannable, zoomable: t.zoomable }])
    }, {
      default: ln(() => [
        (ut(), qt("svg", {
          ref_key: "el",
          ref: b,
          width: T(M),
          height: T(S),
          viewBox: [T(C).x, T(C).y, T(C).width, T(C).height].join(" "),
          role: "img",
          "aria-labelledby": `vue-flow__minimap-${T(s)}`,
          onClick: Ht
        }, [
          t.ariaLabel ? (ut(), qt("title", {
            key: 0,
            id: `vue-flow__minimap-${T(s)}`
          }, cn(t.ariaLabel), 9, Qo)) : fn("", !0),
          (ut(!0), qt(hn, null, dn(T(p), (m) => (ut(), ue(T(Ko), {
            id: m.id,
            key: m.id,
            position: m.computedPosition,
            dimensions: m.dimensions,
            style: mn(m.style),
            class: le(T(X)(m)),
            color: T($)(m),
            "border-radius": t.nodeBorderRadius,
            "stroke-color": T(A)(m),
            "stroke-width": t.nodeStrokeWidth,
            "shape-rendering": T(x),
            type: m.type,
            onClick: (_) => Pt(_, m),
            onDblclick: (_) => Bt(_, m),
            onMouseenter: (_) => c(_, m),
            onMousemove: (_) => w(_, m),
            onMouseleave: (_) => h(_, m)
          }, null, 8, ["id", "position", "dimensions", "style", "class", "color", "border-radius", "stroke-color", "stroke-width", "shape-rendering", "type", "onClick", "onDblclick", "onMouseenter", "onMousemove", "onMouseleave"]))), 128)),
          pn("path", {
            class: "vue-flow__minimap-mask",
            d: T(rt),
            fill: t.maskColor,
            stroke: t.maskStrokeColor,
            "stroke-width": t.maskStrokeWidth,
            "fill-rule": "evenodd"
          }, null, 8, Jo)
        ], 8, Zo))
      ]),
      _: 1
    }, 8, ["position", "class"]));
  }
});
export {
  ns as MiniMap,
  Ko as MiniMapNode,
  tn as MiniMapSlots
};
