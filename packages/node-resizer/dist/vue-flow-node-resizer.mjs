import { defineComponent as St, inject as Dt, ref as It, computed as F, watchEffect as Bt, openBlock as J, createElementBlock as Q, normalizeClass as it, unref as rt, normalizeStyle as ot, renderSlot as Yt, Fragment as et, renderList as vt, createVNode as _t, createCommentVNode as Ot } from "vue";
import { useVueFlow as Ut, useGetPointerPosition as qt, NodeIdInjection as $t, clamp as wt } from "@vue-flow/core";
var st = "http://www.w3.org/1999/xhtml";
const xt = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: st,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function zt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), xt.hasOwnProperty(e) ? { space: xt[e], local: t } : t;
}
function Kt(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === st && e.documentElement.namespaceURI === st ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Gt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Et(t) {
  var e = zt(t);
  return (e.local ? Gt : Kt)(e);
}
function Jt() {
}
function Rt(t) {
  return t == null ? Jt : function() {
    return this.querySelector(t);
  };
}
function Qt(t) {
  typeof t != "function" && (t = Rt(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var o = e[r], l = o.length, s = i[r] = new Array(l), a, c, f = 0; f < l; ++f)
      (a = o[f]) && (c = t.call(a, a.__data__, f, o)) && ("__data__" in a && (c.__data__ = a.__data__), s[f] = c);
  return new R(i, this._parents);
}
function Zt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function jt() {
  return [];
}
function te(t) {
  return t == null ? jt : function() {
    return this.querySelectorAll(t);
  };
}
function ee(t) {
  return function() {
    return Zt(t.apply(this, arguments));
  };
}
function ne(t) {
  typeof t == "function" ? t = ee(t) : t = te(t);
  for (var e = this._groups, n = e.length, i = [], r = [], o = 0; o < n; ++o)
    for (var l = e[o], s = l.length, a, c = 0; c < s; ++c)
      (a = l[c]) && (i.push(t.call(a, a.__data__, c, l)), r.push(a));
  return new R(i, r);
}
function ie(t) {
  return function() {
    return this.matches(t);
  };
}
function Nt(t) {
  return function(e) {
    return e.matches(t);
  };
}
var re = Array.prototype.find;
function oe(t) {
  return function() {
    return re.call(this.children, t);
  };
}
function se() {
  return this.firstElementChild;
}
function le(t) {
  return this.select(t == null ? se : oe(typeof t == "function" ? t : Nt(t)));
}
var ue = Array.prototype.filter;
function ae() {
  return Array.from(this.children);
}
function ce(t) {
  return function() {
    return ue.call(this.children, t);
  };
}
function fe(t) {
  return this.selectAll(t == null ? ae : ce(typeof t == "function" ? t : Nt(t)));
}
function he(t) {
  typeof t != "function" && (t = ie(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var o = e[r], l = o.length, s = i[r] = [], a, c = 0; c < l; ++c)
      (a = o[c]) && t.call(a, a.__data__, c, o) && s.push(a);
  return new R(i, this._parents);
}
function kt(t) {
  return new Array(t.length);
}
function de() {
  return new R(this._enter || this._groups.map(kt), this._parents);
}
function j(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
j.prototype = {
  constructor: j,
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
function ge(t) {
  return function() {
    return t;
  };
}
function me(t, e, n, i, r, o) {
  for (var l = 0, s, a = e.length, c = o.length; l < c; ++l)
    (s = e[l]) ? (s.__data__ = o[l], i[l] = s) : n[l] = new j(t, o[l]);
  for (; l < a; ++l)
    (s = e[l]) && (r[l] = s);
}
function pe(t, e, n, i, r, o, l) {
  var s, a, c = /* @__PURE__ */ new Map(), f = e.length, d = o.length, h = new Array(f), w;
  for (s = 0; s < f; ++s)
    (a = e[s]) && (h[s] = w = l.call(a, a.__data__, s, e) + "", c.has(w) ? r[s] = a : c.set(w, a));
  for (s = 0; s < d; ++s)
    w = l.call(t, o[s], s, o) + "", (a = c.get(w)) ? (i[s] = a, a.__data__ = o[s], c.delete(w)) : n[s] = new j(t, o[s]);
  for (s = 0; s < f; ++s)
    (a = e[s]) && c.get(h[s]) === a && (r[s] = a);
}
function ye(t) {
  return t.__data__;
}
function ve(t, e) {
  if (!arguments.length)
    return Array.from(this, ye);
  var n = e ? pe : me, i = this._parents, r = this._groups;
  typeof t != "function" && (t = ge(t));
  for (var o = r.length, l = new Array(o), s = new Array(o), a = new Array(o), c = 0; c < o; ++c) {
    var f = i[c], d = r[c], h = d.length, w = _e(t.call(f, f && f.__data__, c, i)), v = w.length, L = s[c] = new Array(v), T = l[c] = new Array(v), D = a[c] = new Array(h);
    n(f, d, L, T, D, w, e);
    for (var x = 0, N = 0, u, g; x < v; ++x)
      if (u = L[x]) {
        for (x >= N && (N = x + 1); !(g = T[N]) && ++N < v; )
          ;
        u._next = g || null;
      }
  }
  return l = new R(l, i), l._enter = s, l._exit = a, l;
}
function _e(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function we() {
  return new R(this._exit || this._groups.map(kt), this._parents);
}
function xe(t, e, n) {
  var i = this.enter(), r = this, o = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? o.remove() : n(o), i && r ? i.merge(r).order() : r;
}
function be(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, o = i.length, l = Math.min(r, o), s = new Array(r), a = 0; a < l; ++a)
    for (var c = n[a], f = i[a], d = c.length, h = s[a] = new Array(d), w, v = 0; v < d; ++v)
      (w = c[v] || f[v]) && (h[v] = w);
  for (; a < r; ++a)
    s[a] = n[a];
  return new R(s, this._parents);
}
function Ae() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, o = i[r], l; --r >= 0; )
      (l = i[r]) && (o && l.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(l, o), o = l);
  return this;
}
function Ce(t) {
  t || (t = Se);
  function e(d, h) {
    return d && h ? t(d.__data__, h.__data__) : !d - !h;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), o = 0; o < i; ++o) {
    for (var l = n[o], s = l.length, a = r[o] = new Array(s), c, f = 0; f < s; ++f)
      (c = l[f]) && (a[f] = c);
    a.sort(e);
  }
  return new R(r, this._parents).order();
}
function Se(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ze() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ee() {
  return Array.from(this);
}
function Re() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, o = i.length; r < o; ++r) {
      var l = i[r];
      if (l)
        return l;
    }
  return null;
}
function Ne() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function ke() {
  return !this.node();
}
function He(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], o = 0, l = r.length, s; o < l; ++o)
      (s = r[o]) && t.call(s, s.__data__, o, r);
  return this;
}
function Pe(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ve(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Le(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Te(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function We(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Me(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Fe(t, e) {
  var n = zt(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ve : Pe : typeof e == "function" ? n.local ? Me : We : n.local ? Te : Le)(n, e));
}
function Ht(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Xe(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function De(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ie(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function Be(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Xe : typeof e == "function" ? Ie : De)(t, e, n == null ? "" : n)) : Ye(this.node(), t);
}
function Ye(t, e) {
  return t.style.getPropertyValue(e) || Ht(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Oe(t) {
  return function() {
    delete this[t];
  };
}
function Ue(t, e) {
  return function() {
    this[t] = e;
  };
}
function qe(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function $e(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Oe : typeof e == "function" ? qe : Ue)(t, e)) : this.node()[t];
}
function Pt(t) {
  return t.trim().split(/^|\s+/);
}
function ut(t) {
  return t.classList || new Vt(t);
}
function Vt(t) {
  this._node = t, this._names = Pt(t.getAttribute("class") || "");
}
Vt.prototype = {
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
function Lt(t, e) {
  for (var n = ut(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function Tt(t, e) {
  for (var n = ut(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function Ke(t) {
  return function() {
    Lt(this, t);
  };
}
function Ge(t) {
  return function() {
    Tt(this, t);
  };
}
function Je(t, e) {
  return function() {
    (e.apply(this, arguments) ? Lt : Tt)(this, t);
  };
}
function Qe(t, e) {
  var n = Pt(t + "");
  if (arguments.length < 2) {
    for (var i = ut(this.node()), r = -1, o = n.length; ++r < o; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Je : e ? Ke : Ge)(n, e));
}
function Ze() {
  this.textContent = "";
}
function je(t) {
  return function() {
    this.textContent = t;
  };
}
function tn(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function en(t) {
  return arguments.length ? this.each(t == null ? Ze : (typeof t == "function" ? tn : je)(t)) : this.node().textContent;
}
function nn() {
  this.innerHTML = "";
}
function rn(t) {
  return function() {
    this.innerHTML = t;
  };
}
function on(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function sn(t) {
  return arguments.length ? this.each(t == null ? nn : (typeof t == "function" ? on : rn)(t)) : this.node().innerHTML;
}
function ln() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function un() {
  return this.each(ln);
}
function an() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cn() {
  return this.each(an);
}
function fn(t) {
  var e = typeof t == "function" ? t : Et(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function hn() {
  return null;
}
function dn(t, e) {
  var n = typeof t == "function" ? t : Et(t), i = e == null ? hn : typeof e == "function" ? e : Rt(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function gn() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function mn() {
  return this.each(gn);
}
function pn() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function yn() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function vn(t) {
  return this.select(t ? yn : pn);
}
function _n(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function wn(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function xn(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function bn(t) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var n = 0, i = -1, r = e.length, o; n < r; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++i] = o;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function An(t, e, n) {
  return function() {
    var i = this.__on, r, o = wn(e);
    if (i) {
      for (var l = 0, s = i.length; l < s; ++l)
        if ((r = i[l]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), r = { type: t.type, name: t.name, value: e, listener: o, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function Cn(t, e, n) {
  var i = xn(t + ""), r, o = i.length, l;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var a = 0, c = s.length, f; a < c; ++a)
        for (r = 0, f = s[a]; r < o; ++r)
          if ((l = i[r]).type === f.type && l.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = e ? An : bn, r = 0; r < o; ++r)
    this.each(s(i[r], e, n));
  return this;
}
function Wt(t, e, n) {
  var i = Ht(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function Sn(t, e) {
  return function() {
    return Wt(this, t, e);
  };
}
function zn(t, e) {
  return function() {
    return Wt(this, t, e.apply(this, arguments));
  };
}
function En(t, e) {
  return this.each((typeof e == "function" ? zn : Sn)(t, e));
}
function* Rn() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, o = i.length, l; r < o; ++r)
      (l = i[r]) && (yield l);
}
var Nn = [null];
function R(t, e) {
  this._groups = t, this._parents = e;
}
function kn() {
  return this;
}
R.prototype = {
  constructor: R,
  select: Qt,
  selectAll: ne,
  selectChild: le,
  selectChildren: fe,
  filter: he,
  data: ve,
  enter: de,
  exit: we,
  join: xe,
  merge: be,
  selection: kn,
  order: Ae,
  sort: Ce,
  call: ze,
  nodes: Ee,
  node: Re,
  size: Ne,
  empty: ke,
  each: He,
  attr: Fe,
  style: Be,
  property: $e,
  classed: Qe,
  text: en,
  html: sn,
  raise: un,
  lower: cn,
  append: fn,
  insert: dn,
  remove: mn,
  clone: vn,
  datum: _n,
  on: Cn,
  dispatch: En,
  [Symbol.iterator]: Rn
};
function U(t) {
  return typeof t == "string" ? new R([[document.querySelector(t)]], [document.documentElement]) : new R([[t]], Nn);
}
function Hn(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function bt(t, e) {
  if (t = Hn(t), e === void 0 && (e = t.currentTarget), e) {
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
var Pn = { value: () => {
} };
function Mt() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new Z(n);
}
function Z(t) {
  this._ = t;
}
function Vn(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
Z.prototype = Mt.prototype = {
  constructor: Z,
  on: function(t, e) {
    var n = this._, i = Vn(t + "", n), r, o = -1, l = i.length;
    if (arguments.length < 2) {
      for (; ++o < l; )
        if ((r = (t = i[o]).type) && (r = Ln(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < l; )
      if (r = (t = i[o]).type)
        n[r] = At(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = At(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Z(t);
  },
  call: function(t, e) {
    if ((r = arguments.length - 2) > 0)
      for (var n = new Array(r), i = 0, r, o; i < r; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], i = 0, r = o.length; i < r; ++i)
      o[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(e, n);
  }
};
function Ln(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function At(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = Pn, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const Tn = { passive: !1 }, q = { capture: !0, passive: !1 };
function nt(t) {
  t.stopImmediatePropagation();
}
function X(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Wn(t) {
  var e = t.document.documentElement, n = U(t).on("dragstart.drag", X, q);
  "onselectstart" in e ? n.on("selectstart.drag", X, q) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Mn(t, e) {
  var n = t.document.documentElement, i = U(t).on("dragstart.drag", null);
  e && (i.on("click.drag", X, q), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const G = (t) => () => t;
function lt(t, {
  sourceEvent: e,
  subject: n,
  target: i,
  identifier: r,
  active: o,
  x: l,
  y: s,
  dx: a,
  dy: c,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: i, enumerable: !0, configurable: !0 },
    identifier: { value: r, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
lt.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Fn(t) {
  return !t.ctrlKey && !t.button;
}
function Xn() {
  return this.parentNode;
}
function Dn(t, e) {
  return e == null ? { x: t.x, y: t.y } : e;
}
function In() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bn() {
  var t = Fn, e = Xn, n = Dn, i = In, r = {}, o = Mt("start", "drag", "end"), l = 0, s, a, c, f, d = 0;
  function h(u) {
    u.on("mousedown.drag", w).filter(i).on("touchstart.drag", T).on("touchmove.drag", D, Tn).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(u, g) {
    if (!(f || !t.call(this, u, g))) {
      var p = N(this, e.call(this, u, g), u, g, "mouse");
      !p || (U(u.view).on("mousemove.drag", v, q).on("mouseup.drag", L, q), Wn(u.view), nt(u), c = !1, s = u.clientX, a = u.clientY, p("start", u));
    }
  }
  function v(u) {
    if (X(u), !c) {
      var g = u.clientX - s, p = u.clientY - a;
      c = g * g + p * p > d;
    }
    r.mouse("drag", u);
  }
  function L(u) {
    U(u.view).on("mousemove.drag mouseup.drag", null), Mn(u.view, c), X(u), r.mouse("end", u);
  }
  function T(u, g) {
    if (!!t.call(this, u, g)) {
      var p = u.changedTouches, y = e.call(this, u, g), b = p.length, _, m;
      for (_ = 0; _ < b; ++_)
        (m = N(this, y, u, g, p[_].identifier, p[_])) && (nt(u), m("start", u, p[_]));
    }
  }
  function D(u) {
    var g = u.changedTouches, p = g.length, y, b;
    for (y = 0; y < p; ++y)
      (b = r[g[y].identifier]) && (X(u), b("drag", u, g[y]));
  }
  function x(u) {
    var g = u.changedTouches, p = g.length, y, b;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), y = 0; y < p; ++y)
      (b = r[g[y].identifier]) && (nt(u), b("end", u, g[y]));
  }
  function N(u, g, p, y, b, _) {
    var m = o.copy(), A = bt(_ || p, g), k, H, z;
    if ((z = n.call(u, new lt("beforestart", {
      sourceEvent: p,
      target: h,
      identifier: b,
      active: l,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: m
    }), y)) != null)
      return k = z.x - A[0] || 0, H = z.y - A[1] || 0, function W(P, I, $) {
        var B = A, M;
        switch (P) {
          case "start":
            r[b] = W, M = l++;
            break;
          case "end":
            delete r[b], --l;
          case "drag":
            A = bt($ || I, g), M = l;
            break;
        }
        m.call(
          P,
          u,
          new lt(P, {
            sourceEvent: I,
            subject: z,
            target: h,
            identifier: b,
            active: M,
            x: A[0] + k,
            y: A[1] + H,
            dx: A[0] - B[0],
            dy: A[1] - B[1],
            dispatch: m
          }),
          y
        );
      };
  }
  return h.filter = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : G(!!u), h) : t;
  }, h.container = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : G(u), h) : e;
  }, h.subject = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : G(u), h) : n;
  }, h.touchable = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : G(!!u), h) : i;
  }, h.on = function() {
    var u = o.on.apply(o, arguments);
    return u === o ? h : u;
  }, h.clickDistance = function(u) {
    return arguments.length ? (d = (u = +u) * u, h) : Math.sqrt(d);
  }, h;
}
var tt = /* @__PURE__ */ ((t) => (t.Line = "line", t.Handle = "handle", t))(tt || {});
function Yn({ width: t, prevWidth: e, height: n, prevHeight: i, invertX: r, invertY: o }) {
  const l = t - e, s = n - i, a = [l > 0 ? 1 : l < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
  return l && r && (a[0] = a[0] * -1), s && o && (a[1] = a[1] * -1), a;
}
const On = {
  name: "ResizeControl",
  compatConfig: { MODE: 3 }
}, Ct = /* @__PURE__ */ St({
  ...On,
  props: {
    nodeId: null,
    color: null,
    minWidth: { default: 10 },
    minHeight: { default: 10 },
    maxWidth: { default: Number.MAX_VALUE },
    maxHeight: { default: Number.MAX_VALUE },
    position: null,
    variant: { default: "handle" },
    shouldResize: { type: Function },
    keepAspectRatio: { type: [Boolean, Number], default: !1 }
  },
  emits: ["resizeStart", "resize", "resizeEnd"],
  setup(t, { emit: e }) {
    const n = t, i = { width: 0, height: 0, x: 0, y: 0 }, r = {
      ...i,
      pointerX: 0,
      pointerY: 0,
      aspectRatio: 1
    }, { findNode: o, emits: l } = Ut(), s = qt(), a = Dt($t, null), c = It();
    let f = r, d = i;
    const h = F(() => typeof n.nodeId == "string" ? n.nodeId : a), w = F(() => n.variant === tt.Line ? "right" : "bottom-right"), v = F(() => {
      var x;
      return (x = n.position) != null ? x : w.value;
    });
    Bt((x) => {
      if (!c.value || !h.value)
        return;
      const N = U(c.value), u = v.value.includes("right") || v.value.includes("left"), g = v.value.includes("bottom") || v.value.includes("top"), p = v.value.includes("left"), y = v.value.includes("top"), b = Bn().on("start", (_) => {
        var H, z, W, P;
        const m = o(h.value), { xSnapped: A, ySnapped: k } = s(_);
        d = {
          width: (H = m == null ? void 0 : m.dimensions.width) != null ? H : 0,
          height: (z = m == null ? void 0 : m.dimensions.height) != null ? z : 0,
          x: (W = m == null ? void 0 : m.position.x) != null ? W : 0,
          y: (P = m == null ? void 0 : m.position.y) != null ? P : 0
        }, f = {
          ...d,
          pointerX: A,
          pointerY: k,
          aspectRatio: d.width / d.height
        }, e("resizeStart", { event: _, params: d });
      }).on("drag", (_) => {
        var H;
        const { xSnapped: m, ySnapped: A } = s(_), k = o(h.value);
        if (k) {
          const z = [], {
            pointerX: W,
            pointerY: P,
            width: I,
            height: $,
            x: B,
            y: M,
            aspectRatio: Ft
          } = f, { x: at, y: ct, width: ft, height: ht } = d, dt = Math.floor(u ? m - W : 0), gt = Math.floor(g ? A - P : 0);
          let C = wt(I + (p ? -dt : dt), n.minWidth, n.maxWidth), S = wt($ + (y ? -gt : gt), n.minHeight, n.maxHeight);
          if (n.keepAspectRatio) {
            const V = C / S;
            let E = Ft;
            typeof n.keepAspectRatio == "number" && V !== n.keepAspectRatio && (E = n.keepAspectRatio);
            const Y = u && g, K = u && !g, O = g && !u;
            C = V <= E && Y || O ? S * E : C, S = V > E && Y || K ? C / E : S, C >= n.maxWidth ? (C = n.maxWidth, S = n.maxWidth / E) : C <= n.minWidth && (C = n.minWidth, S = n.minWidth / E), S >= n.maxHeight ? (S = n.maxHeight, C = n.maxHeight * E) : S <= n.minHeight && (S = n.minHeight, C = n.minHeight * E);
          }
          const mt = C !== ft, pt = S !== ht;
          if (p || y) {
            const V = p ? B - (C - I) : B, E = y ? M - (S - $) : M, Y = V !== at && mt, K = E !== ct && pt;
            if (Y || K) {
              const O = {
                id: k.id,
                type: "position",
                from: k.position,
                position: {
                  x: Y ? V : at,
                  y: K ? E : ct
                }
              };
              z.push(O), d.x = O.position.x, d.y = O.position.y;
            }
          }
          if (mt || pt) {
            const V = {
              id: h.value,
              type: "dimensions",
              updateStyle: !0,
              resizing: !0,
              dimensions: {
                width: C,
                height: S
              }
            };
            z.push(V), d.width = C, d.height = S;
          }
          if (z.length === 0)
            return;
          const Xt = Yn({
            width: d.width,
            prevWidth: ft,
            height: d.height,
            prevHeight: ht,
            invertX: p,
            invertY: y
          }), yt = { ...d, direction: Xt };
          if (((H = n.shouldResize) == null ? void 0 : H.call(n, _, yt)) === !1)
            return;
          e("resize", { event: _, params: yt }), l.nodesChange(z);
        }
      }).on("end", (_) => {
        const m = {
          id: h.value,
          type: "dimensions",
          resizing: !1
        };
        e("resizeEnd", { event: _, params: d }), l.nodesChange([m]);
      });
      N.call(b), x(() => {
        N.on(".drag", null);
      });
    });
    const L = F(() => v.value.split("-")), T = F(() => n.variant === tt.Line ? "borderColor" : "backgroundColor"), D = F(() => n.color ? { [T.value]: n.color } : {});
    return (x, N) => (J(), Q("div", {
      ref_key: "resizeControlRef",
      ref: c,
      class: it(["vue-flow__resize-control nodrag", [...rt(L), t.variant]]),
      style: ot(rt(D))
    }, [
      Yt(x.$slots, "default")
    ], 6));
  }
}), Un = {
  name: "NodeResizer",
  compatConfig: { MODE: 3 },
  inheritAttrs: !1
}, Gn = /* @__PURE__ */ St({
  ...Un,
  props: {
    nodeId: null,
    color: null,
    handleClassName: null,
    handleStyle: null,
    lineClassName: null,
    lineStyle: null,
    isVisible: { type: Boolean, default: !0 },
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    shouldResize: { type: Function },
    keepAspectRatio: { type: [Boolean, Number] }
  },
  emits: ["resizeStart", "resize", "resizeEnd"],
  setup(t, { emit: e }) {
    const n = ["top-left", "top-right", "bottom-left", "bottom-right"], i = ["top", "right", "bottom", "left"];
    return (r, o) => t.isVisible ? (J(), Q(et, { key: 0 }, [
      (J(), Q(et, null, vt(i, (l) => _t(Ct, {
        key: l,
        class: it(t.lineClassName),
        style: ot(t.lineStyle),
        "node-id": t.nodeId,
        position: l,
        variant: rt(tt).Line,
        "keep-aspect-ratio": t.keepAspectRatio,
        color: t.color,
        "min-width": t.minWidth,
        "min-height": t.minHeight,
        "max-width": t.maxWidth,
        "max-height": t.maxHeight,
        "should-resize": t.shouldResize,
        onResizeStart: o[0] || (o[0] = (s) => e("resizeStart", s)),
        onResize: o[1] || (o[1] = (s) => e("resize", s)),
        onResizeEnd: o[2] || (o[2] = (s) => e("resizeEnd", s))
      }, null, 8, ["class", "style", "node-id", "position", "variant", "keep-aspect-ratio", "color", "min-width", "min-height", "max-width", "max-height", "should-resize"])), 64)),
      (J(), Q(et, null, vt(n, (l) => _t(Ct, {
        key: l,
        class: it(t.lineClassName),
        style: ot(t.lineStyle),
        "node-id": t.nodeId,
        position: l,
        color: t.color,
        "min-width": t.minWidth,
        "min-height": t.minHeight,
        "max-width": t.maxWidth,
        "max-height": t.maxHeight,
        "should-resize": t.shouldResize,
        "keep-aspect-ratio": t.keepAspectRatio,
        onResizeStart: o[3] || (o[3] = (s) => e("resizeStart", s)),
        onResize: o[4] || (o[4] = (s) => e("resize", s)),
        onResizeEnd: o[5] || (o[5] = (s) => e("resizeEnd", s))
      }, null, 8, ["class", "style", "node-id", "position", "color", "min-width", "min-height", "max-width", "max-height", "should-resize", "keep-aspect-ratio"])), 64))
    ], 64)) : Ot("", !0);
  }
});
export {
  Ct as NodeResizeControl,
  Gn as NodeResizer,
  tt as ResizeControlVariant
};
