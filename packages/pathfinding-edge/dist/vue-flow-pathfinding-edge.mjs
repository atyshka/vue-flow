import { defineComponent as Ke, computed as O, useAttrs as et, unref as P, openBlock as Y, createBlock as Ae, normalizeProps as Ct, mergeProps as xt, createElementBlock as tt, Fragment as it, createElementVNode as nt, normalizeStyle as rt, createCommentVNode as at } from "vue";
import { Position as Ge, useVueFlow as Et, getSimpleBezierPath as st, BezierEdge as Rt, EdgeText as ot } from "@vue-flow/core";
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = { exports: {} };
ye.exports;
(function(e) {
  (function() {
    var t, n, i, r, a, s, u, h, f, c, b, v, p, y, g;
    i = Math.floor, c = Math.min, n = function(o, l) {
      return o < l ? -1 : o > l ? 1 : 0;
    }, f = function(o, l, d, m, k) {
      var A;
      if (d == null && (d = 0), k == null && (k = n), d < 0)
        throw new Error("lo must be non-negative");
      for (m == null && (m = o.length); d < m; )
        A = i((d + m) / 2), k(l, o[A]) < 0 ? m = A : d = A + 1;
      return [].splice.apply(o, [d, d - d].concat(l)), l;
    }, s = function(o, l, d) {
      return d == null && (d = n), o.push(l), y(o, 0, o.length - 1, d);
    }, a = function(o, l) {
      var d, m;
      return l == null && (l = n), d = o.pop(), o.length ? (m = o[0], o[0] = d, g(o, 0, l)) : m = d, m;
    }, h = function(o, l, d) {
      var m;
      return d == null && (d = n), m = o[0], o[0] = l, g(o, 0, d), m;
    }, u = function(o, l, d) {
      var m;
      return d == null && (d = n), o.length && d(o[0], l) < 0 && (m = [o[0], l], l = m[0], o[0] = m[1], g(o, 0, d)), l;
    }, r = function(o, l) {
      var d, m, k, A, M, w;
      for (l == null && (l = n), A = function() {
        w = [];
        for (var N = 0, B = i(o.length / 2); 0 <= B ? N < B : N > B; 0 <= B ? N++ : N--)
          w.push(N);
        return w;
      }.apply(this).reverse(), M = [], m = 0, k = A.length; m < k; m++)
        d = A[m], M.push(g(o, d, l));
      return M;
    }, p = function(o, l, d) {
      var m;
      if (d == null && (d = n), m = o.indexOf(l), m !== -1)
        return y(o, 0, m, d), g(o, m, d);
    }, b = function(o, l, d) {
      var m, k, A, M, w;
      if (d == null && (d = n), k = o.slice(0, l), !k.length)
        return k;
      for (r(k, d), w = o.slice(l), A = 0, M = w.length; A < M; A++)
        m = w[A], u(k, m, d);
      return k.sort(d).reverse();
    }, v = function(o, l, d) {
      var m, k, A, M, w, N, B, F, x;
      if (d == null && (d = n), l * 10 <= o.length) {
        if (A = o.slice(0, l).sort(d), !A.length)
          return A;
        for (k = A[A.length - 1], B = o.slice(l), M = 0, N = B.length; M < N; M++)
          m = B[M], d(m, k) < 0 && (f(A, m, 0, null, d), A.pop(), k = A[A.length - 1]);
        return A;
      }
      for (r(o, d), x = [], w = 0, F = c(l, o.length); 0 <= F ? w < F : w > F; 0 <= F ? ++w : --w)
        x.push(a(o, d));
      return x;
    }, y = function(o, l, d, m) {
      var k, A, M;
      for (m == null && (m = n), k = o[d]; d > l; ) {
        if (M = d - 1 >> 1, A = o[M], m(k, A) < 0) {
          o[d] = A, d = M;
          continue;
        }
        break;
      }
      return o[d] = k;
    }, g = function(o, l, d) {
      var m, k, A, M, w;
      for (d == null && (d = n), k = o.length, w = l, A = o[l], m = 2 * l + 1; m < k; )
        M = m + 1, M < k && !(d(o[m], o[M]) < 0) && (m = M), o[l] = o[m], l = m, m = 2 * l + 1;
      return o[l] = A, y(o, w, l, d);
    }, t = function() {
      o.push = s, o.pop = a, o.replace = h, o.pushpop = u, o.heapify = r, o.updateItem = p, o.nlargest = b, o.nsmallest = v;
      function o(l) {
        this.cmp = l ?? n, this.nodes = [];
      }
      return o.prototype.push = function(l) {
        return s(this.nodes, l, this.cmp);
      }, o.prototype.pop = function() {
        return a(this.nodes, this.cmp);
      }, o.prototype.peek = function() {
        return this.nodes[0];
      }, o.prototype.contains = function(l) {
        return this.nodes.indexOf(l) !== -1;
      }, o.prototype.replace = function(l) {
        return h(this.nodes, l, this.cmp);
      }, o.prototype.pushpop = function(l) {
        return u(this.nodes, l, this.cmp);
      }, o.prototype.heapify = function() {
        return r(this.nodes, this.cmp);
      }, o.prototype.updateItem = function(l) {
        return p(this.nodes, l, this.cmp);
      }, o.prototype.clear = function() {
        return this.nodes = [];
      }, o.prototype.empty = function() {
        return this.nodes.length === 0;
      }, o.prototype.size = function() {
        return this.nodes.length;
      }, o.prototype.clone = function() {
        var l;
        return l = new o(), l.nodes = this.nodes.slice(0), l;
      }, o.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, o.prototype.insert = o.prototype.push, o.prototype.top = o.prototype.peek, o.prototype.front = o.prototype.peek, o.prototype.has = o.prototype.contains, o.prototype.copy = o.prototype.clone, o;
    }(), e !== null && e.exports ? e.exports = t : window.Heap = t;
  }).call(jt);
})(ye);
var Jt = ye.exports, ae = Jt;
function Lt(e, t, n) {
  this.x = e, this.y = t, this.walkable = n === void 0 ? !0 : n;
}
var we = Lt, Ht = {
  Always: 1,
  Never: 2,
  IfAtMostOneObstacle: 3,
  OnlyWhenNoObstacles: 4
}, D = Ht, lt = we, G = D;
function _(e, t, n) {
  var i;
  typeof e != "object" ? i = e : (t = e.length, i = e[0].length, n = e), this.width = i, this.height = t, this.nodes = this._buildNodes(i, t, n);
}
_.prototype._buildNodes = function(e, t, n) {
  var i, r, a = new Array(t);
  for (i = 0; i < t; ++i)
    for (a[i] = new Array(e), r = 0; r < e; ++r)
      a[i][r] = new lt(r, i);
  if (n === void 0)
    return a;
  if (n.length !== t || n[0].length !== e)
    throw new Error("Matrix size does not fit");
  for (i = 0; i < t; ++i)
    for (r = 0; r < e; ++r)
      n[i][r] && (a[i][r].walkable = !1);
  return a;
};
_.prototype.getNodeAt = function(e, t) {
  return this.nodes[t][e];
};
_.prototype.isWalkableAt = function(e, t) {
  return this.isInside(e, t) && this.nodes[t][e].walkable;
};
_.prototype.isInside = function(e, t) {
  return e >= 0 && e < this.width && t >= 0 && t < this.height;
};
_.prototype.setWalkableAt = function(e, t, n) {
  this.nodes[t][e].walkable = n;
};
_.prototype.getNeighbors = function(e, t) {
  var n = e.x, i = e.y, r = [], a = !1, s = !1, u = !1, h = !1, f = !1, c = !1, b = !1, v = !1, p = this.nodes;
  if (this.isWalkableAt(n, i - 1) && (r.push(p[i - 1][n]), a = !0), this.isWalkableAt(n + 1, i) && (r.push(p[i][n + 1]), u = !0), this.isWalkableAt(n, i + 1) && (r.push(p[i + 1][n]), f = !0), this.isWalkableAt(n - 1, i) && (r.push(p[i][n - 1]), b = !0), t === G.Never)
    return r;
  if (t === G.OnlyWhenNoObstacles)
    s = b && a, h = a && u, c = u && f, v = f && b;
  else if (t === G.IfAtMostOneObstacle)
    s = b || a, h = a || u, c = u || f, v = f || b;
  else if (t === G.Always)
    s = !0, h = !0, c = !0, v = !0;
  else
    throw new Error("Incorrect value of diagonalMovement");
  return s && this.isWalkableAt(n - 1, i - 1) && r.push(p[i - 1][n - 1]), h && this.isWalkableAt(n + 1, i - 1) && r.push(p[i - 1][n + 1]), c && this.isWalkableAt(n + 1, i + 1) && r.push(p[i + 1][n + 1]), v && this.isWalkableAt(n - 1, i + 1) && r.push(p[i + 1][n - 1]), r;
};
_.prototype.clone = function() {
  var e, t, n = this.width, i = this.height, r = this.nodes, a = new _(n, i), s = new Array(i);
  for (e = 0; e < i; ++e)
    for (s[e] = new Array(n), t = 0; t < n; ++t)
      s[e][t] = new lt(t, e, r[e][t].walkable);
  return a.nodes = s, a;
};
var Yt = _, $ = {};
function Me(e) {
  for (var t = [[e.x, e.y]]; e.parent; )
    e = e.parent, t.push([e.x, e.y]);
  return t.reverse();
}
$.backtrace = Me;
function Xt(e, t) {
  var n = Me(e), i = Me(t);
  return n.concat(i.reverse());
}
$.biBacktrace = Xt;
function Gt(e) {
  var t, n = 0, i, r, a, s;
  for (t = 1; t < e.length; ++t)
    i = e[t - 1], r = e[t], a = i[0] - r[0], s = i[1] - r[1], n += Math.sqrt(a * a + s * s);
  return n;
}
$.pathLength = Gt;
function Ne(e, t, n, i) {
  var r = Math.abs, a = [], s, u, h, f, c, b;
  for (h = r(n - e), f = r(i - t), s = e < n ? 1 : -1, u = t < i ? 1 : -1, c = h - f; a.push([e, t]), !(e === n && t === i); )
    b = 2 * c, b > -f && (c = c - f, e = e + s), b < h && (c = c + h, t = t + u);
  return a;
}
$.interpolate = Ne;
function Tt(e) {
  var t = [], n = e.length, i, r, a, s, u, h;
  if (n < 2)
    return t;
  for (u = 0; u < n - 1; ++u)
    for (i = e[u], r = e[u + 1], a = Ne(i[0], i[1], r[0], r[1]), s = a.length, h = 0; h < s - 1; ++h)
      t.push(a[h]);
  return t.push(e[n - 1]), t;
}
$.expandPath = Tt;
function Ut(e, t) {
  var n = t.length, i = t[0][0], r = t[0][1], a = t[n - 1][0], s = t[n - 1][1], u, h, f, c, b, v, p, y, g, o, l;
  for (u = i, h = r, b = [[u, h]], v = 2; v < n; ++v) {
    for (y = t[v], f = y[0], c = y[1], g = Ne(u, h, f, c), l = !1, p = 1; p < g.length; ++p)
      if (o = g[p], !e.isWalkableAt(o[0], o[1])) {
        l = !0;
        break;
      }
    l && (lastValidCoord = t[v - 1], b.push(lastValidCoord), u = lastValidCoord[0], h = lastValidCoord[1]);
  }
  return b.push([a, s]), b;
}
$.smoothenPath = Ut;
function zt(e) {
  if (e.length < 3)
    return e;
  var t = [], n = e[0][0], i = e[0][1], r = e[1][0], a = e[1][1], s = r - n, u = a - i, h, f, c, b, v, p;
  for (v = Math.sqrt(s * s + u * u), s /= v, u /= v, t.push([n, i]), p = 2; p < e.length; p++)
    h = r, f = a, c = s, b = u, r = e[p][0], a = e[p][1], s = r - h, u = a - f, v = Math.sqrt(s * s + u * u), s /= v, u /= v, (s !== c || u !== b) && t.push([h, f]);
  return t.push([r, a]), t;
}
$.compressPath = zt;
var X = {
  /**
   * Manhattan distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} dx + dy
   */
  manhattan: function(e, t) {
    return e + t;
  },
  /**
   * Euclidean distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy)
   */
  euclidean: function(e, t) {
    return Math.sqrt(e * e + t * t);
  },
  /**
   * Octile distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy) for grids
   */
  octile: function(e, t) {
    var n = Math.SQRT2 - 1;
    return e < t ? n * e + t : n * t + e;
  },
  /**
   * Chebyshev distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} max(dx, dy)
   */
  chebyshev: function(e, t) {
    return Math.max(e, t);
  }
}, Qt = ae, Vt = $, de = X, T = D;
function ut(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.heuristic = e.heuristic || de.manhattan, this.weight = e.weight || 1, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = T.OnlyWhenNoObstacles : this.diagonalMovement = T.IfAtMostOneObstacle : this.diagonalMovement = T.Never), this.diagonalMovement === T.Never ? this.heuristic = e.heuristic || de.manhattan : this.heuristic = e.heuristic || de.octile;
}
ut.prototype.findPath = function(e, t, n, i, r) {
  var a = new Qt(function(A, M) {
    return A.f - M.f;
  }), s = r.getNodeAt(e, t), u = r.getNodeAt(n, i), h = this.heuristic, f = this.diagonalMovement, c = this.weight, b = Math.abs, v = Math.SQRT2, p, y, g, o, l, d, m, k;
  for (s.g = 0, s.f = 0, a.push(s), s.opened = !0; !a.empty(); ) {
    if (p = a.pop(), p.closed = !0, p === u)
      return Vt.backtrace(u);
    for (y = r.getNeighbors(p, f), o = 0, l = y.length; o < l; ++o)
      g = y[o], !g.closed && (d = g.x, m = g.y, k = p.g + (d - p.x === 0 || m - p.y === 0 ? 1 : v), (!g.opened || k < g.g) && (g.g = k, g.h = g.h || c * h(b(d - n), b(m - i)), g.f = g.g + g.h, g.parent = p, g.opened ? a.updateItem(g) : (a.push(g), g.opened = !0)));
  }
  return [];
};
var We = ut, ht = We;
function te(e) {
  ht.call(this, e);
  var t = this.heuristic;
  this.heuristic = function(n, i) {
    return t(n, i) * 1e6;
  };
}
te.prototype = new ht();
te.prototype.constructor = te;
var qt = te, Zt = $, ge = D;
function ft(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = ge.OnlyWhenNoObstacles : this.diagonalMovement = ge.IfAtMostOneObstacle : this.diagonalMovement = ge.Never);
}
ft.prototype.findPath = function(e, t, n, i, r) {
  var a = [], s = this.diagonalMovement, u = r.getNodeAt(e, t), h = r.getNodeAt(n, i), f, c, b, v, p;
  for (a.push(u), u.opened = !0; a.length; ) {
    if (b = a.shift(), b.closed = !0, b === h)
      return Zt.backtrace(h);
    for (f = r.getNeighbors(b, s), v = 0, p = f.length; v < p; ++v)
      c = f[v], !(c.closed || c.opened) && (a.push(c), c.opened = !0, c.parent = b);
  }
  return [];
};
var Kt = ft, ct = We;
function ie(e) {
  ct.call(this, e), this.heuristic = function(t, n) {
    return 0;
  };
}
ie.prototype = new ct();
ie.prototype.constructor = ie;
var ei = ie, Te = ae, Ue = $, pe = X, U = D;
function dt(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.heuristic = e.heuristic || pe.manhattan, this.weight = e.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = U.OnlyWhenNoObstacles : this.diagonalMovement = U.IfAtMostOneObstacle : this.diagonalMovement = U.Never), this.diagonalMovement === U.Never ? this.heuristic = e.heuristic || pe.manhattan : this.heuristic = e.heuristic || pe.octile;
}
dt.prototype.findPath = function(e, t, n, i, r) {
  var a = function(B, F) {
    return B.f - F.f;
  }, s = new Te(a), u = new Te(a), h = r.getNodeAt(e, t), f = r.getNodeAt(n, i), c = this.heuristic, b = this.diagonalMovement, v = this.weight, p = Math.abs, y = Math.SQRT2, g, o, l, d, m, k, A, M, w = 1, N = 2;
  for (h.g = 0, h.f = 0, s.push(h), h.opened = w, f.g = 0, f.f = 0, u.push(f), f.opened = N; !s.empty() && !u.empty(); ) {
    for (g = s.pop(), g.closed = !0, o = r.getNeighbors(g, b), d = 0, m = o.length; d < m; ++d)
      if (l = o[d], !l.closed) {
        if (l.opened === N)
          return Ue.biBacktrace(g, l);
        k = l.x, A = l.y, M = g.g + (k - g.x === 0 || A - g.y === 0 ? 1 : y), (!l.opened || M < l.g) && (l.g = M, l.h = l.h || v * c(p(k - n), p(A - i)), l.f = l.g + l.h, l.parent = g, l.opened ? s.updateItem(l) : (s.push(l), l.opened = w));
      }
    for (g = u.pop(), g.closed = !0, o = r.getNeighbors(g, b), d = 0, m = o.length; d < m; ++d)
      if (l = o[d], !l.closed) {
        if (l.opened === w)
          return Ue.biBacktrace(l, g);
        k = l.x, A = l.y, M = g.g + (k - g.x === 0 || A - g.y === 0 ? 1 : y), (!l.opened || M < l.g) && (l.g = M, l.h = l.h || v * c(p(k - e), p(A - t)), l.f = l.g + l.h, l.parent = g, l.opened ? u.updateItem(l) : (u.push(l), l.opened = N));
      }
  }
  return [];
};
var Be = dt, gt = Be;
function ne(e) {
  gt.call(this, e);
  var t = this.heuristic;
  this.heuristic = function(n, i) {
    return t(n, i) * 1e6;
  };
}
ne.prototype = new gt();
ne.prototype.constructor = ne;
var ti = ne, ze = $, be = D;
function pt(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = be.OnlyWhenNoObstacles : this.diagonalMovement = be.IfAtMostOneObstacle : this.diagonalMovement = be.Never);
}
pt.prototype.findPath = function(e, t, n, i, r) {
  var a = r.getNodeAt(e, t), s = r.getNodeAt(n, i), u = [], h = [], f, c, b, v = this.diagonalMovement, p = 0, y = 1, g, o;
  for (u.push(a), a.opened = !0, a.by = p, h.push(s), s.opened = !0, s.by = y; u.length && h.length; ) {
    for (b = u.shift(), b.closed = !0, f = r.getNeighbors(b, v), g = 0, o = f.length; g < o; ++g)
      if (c = f[g], !c.closed) {
        if (c.opened) {
          if (c.by === y)
            return ze.biBacktrace(b, c);
          continue;
        }
        u.push(c), c.parent = b, c.opened = !0, c.by = p;
      }
    for (b = h.shift(), b.closed = !0, f = r.getNeighbors(b, v), g = 0, o = f.length; g < o; ++g)
      if (c = f[g], !c.closed) {
        if (c.opened) {
          if (c.by === p)
            return ze.biBacktrace(c, b);
          continue;
        }
        h.push(c), c.parent = b, c.opened = !0, c.by = y;
      }
  }
  return [];
};
var ii = pt, bt = Be;
function re(e) {
  bt.call(this, e), this.heuristic = function(t, n) {
    return 0;
  };
}
re.prototype = new bt();
re.prototype.constructor = re;
var ni = re, ve = X, Qe = we, z = D;
function vt(e) {
  e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.heuristic = e.heuristic || ve.manhattan, this.weight = e.weight || 1, this.trackRecursion = e.trackRecursion || !1, this.timeLimit = e.timeLimit || 1 / 0, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = z.OnlyWhenNoObstacles : this.diagonalMovement = z.IfAtMostOneObstacle : this.diagonalMovement = z.Never), this.diagonalMovement === z.Never ? this.heuristic = e.heuristic || ve.manhattan : this.heuristic = e.heuristic || ve.octile;
}
vt.prototype.findPath = function(e, t, n, i, r) {
  var a = (/* @__PURE__ */ new Date()).getTime(), s = function(g, o) {
    return this.heuristic(Math.abs(o.x - g.x), Math.abs(o.y - g.y));
  }.bind(this), u = function(g, o) {
    return g.x === o.x || g.y === o.y ? 1 : Math.SQRT2;
  }, h = function(g, o, l, d, m) {
    if (this.timeLimit > 0 && (/* @__PURE__ */ new Date()).getTime() - a > this.timeLimit * 1e3)
      return 1 / 0;
    var k = o + s(g, c) * this.weight;
    if (k > l)
      return k;
    if (g == c)
      return d[m] = [g.x, g.y], g;
    var A, M, w, N, B = r.getNeighbors(g, this.diagonalMovement);
    for (w = 0, A = 1 / 0; N = B[w]; ++w) {
      if (this.trackRecursion && (N.retainCount = N.retainCount + 1 || 1, N.tested !== !0 && (N.tested = !0)), M = h(N, o + u(g, N), l, d, m + 1), M instanceof Qe)
        return d[m] = [g.x, g.y], M;
      this.trackRecursion && --N.retainCount === 0 && (N.tested = !1), M < A && (A = M);
    }
    return A;
  }.bind(this), f = r.getNodeAt(e, t), c = r.getNodeAt(n, i), b = s(f, c), v, p, y;
  for (v = 0; ; ++v) {
    if (p = [], y = h(f, 0, b, p, 0), y === 1 / 0)
      return [];
    if (y instanceof Qe)
      return p;
    b = y;
  }
  return [];
};
var ri = vt, ai = ae, Ve = $, mt = X;
function Fe(e) {
  e = e || {}, this.heuristic = e.heuristic || mt.manhattan, this.trackJumpRecursion = e.trackJumpRecursion || !1;
}
Fe.prototype.findPath = function(e, t, n, i, r) {
  var a = this.openList = new ai(function(f, c) {
    return f.f - c.f;
  }), s = this.startNode = r.getNodeAt(e, t), u = this.endNode = r.getNodeAt(n, i), h;
  for (this.grid = r, s.g = 0, s.f = 0, a.push(s), s.opened = !0; !a.empty(); ) {
    if (h = a.pop(), h.closed = !0, h === u)
      return Ve.expandPath(Ve.backtrace(u));
    this._identifySuccessors(h);
  }
  return [];
};
Fe.prototype._identifySuccessors = function(e) {
  var t = this.grid, n = this.heuristic, i = this.openList, r = this.endNode.x, a = this.endNode.y, s, u, h, f, c, b = e.x, v = e.y, p, y, g, o, l, d = Math.abs;
  for (s = this._findNeighbors(e), f = 0, c = s.length; f < c; ++f)
    if (u = s[f], h = this._jump(u[0], u[1], b, v), h) {
      if (p = h[0], y = h[1], l = t.getNodeAt(p, y), l.closed)
        continue;
      g = mt.octile(d(p - b), d(y - v)), o = e.g + g, (!l.opened || o < l.g) && (l.g = o, l.h = l.h || n(d(p - r), d(y - a)), l.f = l.g + l.h, l.parent = e, l.opened ? i.updateItem(l) : (i.push(l), l.opened = !0));
    }
};
var se = Fe, At = se, si = D;
function R(e) {
  At.call(this, e);
}
R.prototype = new At();
R.prototype.constructor = R;
R.prototype._jump = function(e, t, n, i) {
  var r = this.grid, a = e - n, s = t - i;
  if (!r.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (r.getNodeAt(e, t).tested = !0), r.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (a !== 0) {
    if (r.isWalkableAt(e, t - 1) && !r.isWalkableAt(e - a, t - 1) || r.isWalkableAt(e, t + 1) && !r.isWalkableAt(e - a, t + 1))
      return [e, t];
  } else if (s !== 0) {
    if (r.isWalkableAt(e - 1, t) && !r.isWalkableAt(e - 1, t - s) || r.isWalkableAt(e + 1, t) && !r.isWalkableAt(e + 1, t - s))
      return [e, t];
    if (this._jump(e + 1, t, e, t) || this._jump(e - 1, t, e, t))
      return [e, t];
  } else
    throw new Error("Only horizontal and vertical movements are allowed");
  return this._jump(e + a, t + s, e, t);
};
R.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, i = e.y, r = this.grid, a, s, u, h, f = [], c, b, v, p;
  if (t)
    a = t.x, s = t.y, u = (n - a) / Math.max(Math.abs(n - a), 1), h = (i - s) / Math.max(Math.abs(i - s), 1), u !== 0 ? (r.isWalkableAt(n, i - 1) && f.push([n, i - 1]), r.isWalkableAt(n, i + 1) && f.push([n, i + 1]), r.isWalkableAt(n + u, i) && f.push([n + u, i])) : h !== 0 && (r.isWalkableAt(n - 1, i) && f.push([n - 1, i]), r.isWalkableAt(n + 1, i) && f.push([n + 1, i]), r.isWalkableAt(n, i + h) && f.push([n, i + h]));
  else
    for (c = r.getNeighbors(e, si.Never), v = 0, p = c.length; v < p; ++v)
      b = c[v], f.push([b.x, b.y]);
  return f;
};
var oi = R, Mt = se, li = D;
function j(e) {
  Mt.call(this, e);
}
j.prototype = new Mt();
j.prototype.constructor = j;
j.prototype._jump = function(e, t, n, i) {
  var r = this.grid, a = e - n, s = t - i;
  if (!r.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (r.getNodeAt(e, t).tested = !0), r.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (a !== 0 && s !== 0) {
    if (r.isWalkableAt(e - a, t + s) && !r.isWalkableAt(e - a, t) || r.isWalkableAt(e + a, t - s) && !r.isWalkableAt(e, t - s))
      return [e, t];
    if (this._jump(e + a, t, e, t) || this._jump(e, t + s, e, t))
      return [e, t];
  } else if (a !== 0) {
    if (r.isWalkableAt(e + a, t + 1) && !r.isWalkableAt(e, t + 1) || r.isWalkableAt(e + a, t - 1) && !r.isWalkableAt(e, t - 1))
      return [e, t];
  } else if (r.isWalkableAt(e + 1, t + s) && !r.isWalkableAt(e + 1, t) || r.isWalkableAt(e - 1, t + s) && !r.isWalkableAt(e - 1, t))
    return [e, t];
  return this._jump(e + a, t + s, e, t);
};
j.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, i = e.y, r = this.grid, a, s, u, h, f = [], c, b, v, p;
  if (t)
    a = t.x, s = t.y, u = (n - a) / Math.max(Math.abs(n - a), 1), h = (i - s) / Math.max(Math.abs(i - s), 1), u !== 0 && h !== 0 ? (r.isWalkableAt(n, i + h) && f.push([n, i + h]), r.isWalkableAt(n + u, i) && f.push([n + u, i]), r.isWalkableAt(n + u, i + h) && f.push([n + u, i + h]), r.isWalkableAt(n - u, i) || f.push([n - u, i + h]), r.isWalkableAt(n, i - h) || f.push([n + u, i - h])) : u === 0 ? (r.isWalkableAt(n, i + h) && f.push([n, i + h]), r.isWalkableAt(n + 1, i) || f.push([n + 1, i + h]), r.isWalkableAt(n - 1, i) || f.push([n - 1, i + h])) : (r.isWalkableAt(n + u, i) && f.push([n + u, i]), r.isWalkableAt(n, i + 1) || f.push([n + u, i + 1]), r.isWalkableAt(n, i - 1) || f.push([n + u, i - 1]));
  else
    for (c = r.getNeighbors(e, li.Always), v = 0, p = c.length; v < p; ++v)
      b = c[v], f.push([b.x, b.y]);
  return f;
};
var ui = j, kt = se, hi = D;
function J(e) {
  kt.call(this, e);
}
J.prototype = new kt();
J.prototype.constructor = J;
J.prototype._jump = function(e, t, n, i) {
  var r = this.grid, a = e - n, s = t - i;
  if (!r.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (r.getNodeAt(e, t).tested = !0), r.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (a !== 0 && s !== 0) {
    if (this._jump(e + a, t, e, t) || this._jump(e, t + s, e, t))
      return [e, t];
  } else if (a !== 0) {
    if (r.isWalkableAt(e, t - 1) && !r.isWalkableAt(e - a, t - 1) || r.isWalkableAt(e, t + 1) && !r.isWalkableAt(e - a, t + 1))
      return [e, t];
  } else if (s !== 0 && (r.isWalkableAt(e - 1, t) && !r.isWalkableAt(e - 1, t - s) || r.isWalkableAt(e + 1, t) && !r.isWalkableAt(e + 1, t - s)))
    return [e, t];
  return r.isWalkableAt(e + a, t) && r.isWalkableAt(e, t + s) ? this._jump(e + a, t + s, e, t) : null;
};
J.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, i = e.y, r = this.grid, a, s, u, h, f = [], c, b, v, p;
  if (t)
    if (a = t.x, s = t.y, u = (n - a) / Math.max(Math.abs(n - a), 1), h = (i - s) / Math.max(Math.abs(i - s), 1), u !== 0 && h !== 0)
      r.isWalkableAt(n, i + h) && f.push([n, i + h]), r.isWalkableAt(n + u, i) && f.push([n + u, i]), r.isWalkableAt(n, i + h) && r.isWalkableAt(n + u, i) && f.push([n + u, i + h]);
    else {
      var y;
      if (u !== 0) {
        y = r.isWalkableAt(n + u, i);
        var g = r.isWalkableAt(n, i + 1), o = r.isWalkableAt(n, i - 1);
        y && (f.push([n + u, i]), g && f.push([n + u, i + 1]), o && f.push([n + u, i - 1])), g && f.push([n, i + 1]), o && f.push([n, i - 1]);
      } else if (h !== 0) {
        y = r.isWalkableAt(n, i + h);
        var l = r.isWalkableAt(n + 1, i), d = r.isWalkableAt(n - 1, i);
        y && (f.push([n, i + h]), l && f.push([n + 1, i + h]), d && f.push([n - 1, i + h])), l && f.push([n + 1, i]), d && f.push([n - 1, i]);
      }
    }
  else
    for (c = r.getNeighbors(e, hi.OnlyWhenNoObstacles), v = 0, p = c.length; v < p; ++v)
      b = c[v], f.push([b.x, b.y]);
  return f;
};
var fi = J, yt = se, ci = D;
function L(e) {
  yt.call(this, e);
}
L.prototype = new yt();
L.prototype.constructor = L;
L.prototype._jump = function(e, t, n, i) {
  var r = this.grid, a = e - n, s = t - i;
  if (!r.isWalkableAt(e, t))
    return null;
  if (this.trackJumpRecursion === !0 && (r.getNodeAt(e, t).tested = !0), r.getNodeAt(e, t) === this.endNode)
    return [e, t];
  if (a !== 0 && s !== 0) {
    if (r.isWalkableAt(e - a, t + s) && !r.isWalkableAt(e - a, t) || r.isWalkableAt(e + a, t - s) && !r.isWalkableAt(e, t - s))
      return [e, t];
    if (this._jump(e + a, t, e, t) || this._jump(e, t + s, e, t))
      return [e, t];
  } else if (a !== 0) {
    if (r.isWalkableAt(e + a, t + 1) && !r.isWalkableAt(e, t + 1) || r.isWalkableAt(e + a, t - 1) && !r.isWalkableAt(e, t - 1))
      return [e, t];
  } else if (r.isWalkableAt(e + 1, t + s) && !r.isWalkableAt(e + 1, t) || r.isWalkableAt(e - 1, t + s) && !r.isWalkableAt(e - 1, t))
    return [e, t];
  return r.isWalkableAt(e + a, t) || r.isWalkableAt(e, t + s) ? this._jump(e + a, t + s, e, t) : null;
};
L.prototype._findNeighbors = function(e) {
  var t = e.parent, n = e.x, i = e.y, r = this.grid, a, s, u, h, f = [], c, b, v, p;
  if (t)
    a = t.x, s = t.y, u = (n - a) / Math.max(Math.abs(n - a), 1), h = (i - s) / Math.max(Math.abs(i - s), 1), u !== 0 && h !== 0 ? (r.isWalkableAt(n, i + h) && f.push([n, i + h]), r.isWalkableAt(n + u, i) && f.push([n + u, i]), (r.isWalkableAt(n, i + h) || r.isWalkableAt(n + u, i)) && f.push([n + u, i + h]), !r.isWalkableAt(n - u, i) && r.isWalkableAt(n, i + h) && f.push([n - u, i + h]), !r.isWalkableAt(n, i - h) && r.isWalkableAt(n + u, i) && f.push([n + u, i - h])) : u === 0 ? r.isWalkableAt(n, i + h) && (f.push([n, i + h]), r.isWalkableAt(n + 1, i) || f.push([n + 1, i + h]), r.isWalkableAt(n - 1, i) || f.push([n - 1, i + h])) : r.isWalkableAt(n + u, i) && (f.push([n + u, i]), r.isWalkableAt(n, i + 1) || f.push([n + u, i + 1]), r.isWalkableAt(n, i - 1) || f.push([n + u, i - 1]));
  else
    for (c = r.getNeighbors(e, ci.IfAtMostOneObstacle), v = 0, p = c.length; v < p; ++v)
      b = c[v], f.push([b.x, b.y]);
  return f;
};
var di = L, me = D, gi = oi, pi = ui, bi = fi, vi = di;
function mi(e) {
  return e = e || {}, e.diagonalMovement === me.Never ? new gi(e) : e.diagonalMovement === me.Always ? new pi(e) : e.diagonalMovement === me.OnlyWhenNoObstacles ? new bi(e) : new vi(e);
}
var Ai = mi, Mi = {
  Heap: ae,
  Node: we,
  Grid: Yt,
  Util: $,
  DiagonalMovement: D,
  Heuristic: X,
  AStarFinder: We,
  BestFirstFinder: qt,
  BreadthFirstFinder: Kt,
  DijkstraFinder: ei,
  BiAStarFinder: Be,
  BiBestFirstFinder: ti,
  BiBreadthFirstFinder: ii,
  BiDijkstraFinder: ni,
  IDAStarFinder: ri,
  JumpPointFinder: Ai
}, ee = Mi;
function ke(e, t) {
  switch (t) {
    case "top":
      return { x: e.x, y: e.y - 1 };
    case "bottom":
      return { x: e.x, y: e.y + 1 };
    case "left":
      return { x: e.x - 1, y: e.y };
    case "right":
      return { x: e.x + 1, y: e.y };
  }
}
function qe(e, t, n) {
  let i = e.getNodeAt(t.x, t.y);
  for (; !i.walkable; ) {
    e.setWalkableAt(i.x, i.y, !0);
    const r = ke(i, n);
    i = e.getNodeAt(r.x, r.y);
  }
}
const W = 10;
function Q(e, t, n) {
  let i = e.x / W, r = e.y / W, a = t / W, s = n / W;
  if (a < 1)
    for (; a !== 1; )
      a++, i++;
  else if (a > 1)
    for (; a !== 1; )
      a--, i--;
  if (s < 1)
    for (; s !== 1; )
      s++, r++;
  else if (s > 1)
    for (; s !== 1; )
      s--, r--;
  return { x: i, y: r };
}
function ki(e, t, n) {
  let i = e.x * W, r = e.y * W, a = t, s = n;
  if (a < W)
    for (; a !== W; )
      a = a + W, i = i - W;
  else if (a > W)
    for (; a !== W; )
      a = a - W, i = i + W;
  if (s < W)
    for (; s !== W; )
      s = s + W, r = r - W;
  else if (s > W)
    for (; s !== W; )
      s = s - W, r = r + W;
  return { x: i, y: r };
}
function V(e, t = 10) {
  return Math.round(e / t) * t;
}
function q(e, t = 10) {
  return Math.floor(e / t) * t;
}
function Z(e, t = 10) {
  return Math.ceil(e / t) * t;
}
const C = 10;
function yi(e, t, n, i) {
  const { xMin: r, yMin: a, width: s, height: u } = e, h = s / C, f = u / C, c = new ee.Grid(h, f);
  t.forEach((l) => {
    const d = Q(l.topLeft, r, a), m = Q(l.bottomRight, r, a);
    for (let k = d.x; k < m.x; k++)
      for (let A = d.y; A < m.y; A++)
        c.setWalkableAt(k, A, !1);
  });
  const b = Q(
    {
      x: V(n.x, C),
      y: V(n.y, C)
    },
    r,
    a
  ), v = Q(
    {
      x: V(i.x, C),
      y: V(i.y, C)
    },
    r,
    a
  ), p = c.getNodeAt(b.x, b.y);
  qe(c, p, n.position);
  const y = c.getNodeAt(v.x, v.y);
  qe(c, y, i.position);
  const g = ke(p, n.position), o = ke(y, i.position);
  return { grid: c, start: g, end: o };
}
function wi(e, t, n, i) {
  const r = (e - n) / 2 + n, a = (t - i) / 2 + i;
  return [r, a];
}
function Ni(e) {
  let i = e[0];
  const r = e[0];
  let a = `M${r[0]},${r[1]}M`;
  for (let u = 0; u < e.length; u++) {
    const h = e[u], f = wi(i[0], i[1], h[0], h[1]);
    a += ` ${f[0]},${f[1]}`, a += `Q${h[0]},${h[1]}`, i = h;
  }
  const s = e[e.length - 1];
  return a += ` ${s[0]},${s[1]}`, a;
}
function Wi(e, t, n) {
  const i = [[e.x, e.y], ...n, [t.x, t.y]];
  return Ni(i);
}
function Bi(e, t, n) {
  const i = new ee.AStarFinder({
    diagonalMovement: ee.DiagonalMovement.Always,
    allowDiagonal: !0,
    dontCrossCorners: !0
  });
  let r = [];
  try {
    r = i.findPath(t.x, t.y, n.x, n.y, e), r = ee.Util.smoothenPath(e, r);
  } catch {
  }
  return r;
}
function Fi(e, t = 0, n = 0, i = 0) {
  t = Math.max(Math.round(t), 0), n = Math.max(Math.round(n), 0), i = Math.max(Math.round(i), 0), t = Number.isInteger(t) ? t : 0, n = Number.isInteger(n) ? n : 0, i = Number.isInteger(i) ? i : 0;
  let r = Number.MIN_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER, s = Number.MAX_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER;
  const h = e.map((o) => {
    const {
      computedPosition: { x: l, y: d },
      dimensions: m
    } = o, k = Math.max(m.width || 0, 1), A = Math.max(m.height || 0, 1), M = {
      x: l || 0,
      y: d || 0
    }, w = {
      x: M.x - t,
      y: M.y - t
    }, N = {
      x: M.x - t,
      y: M.y + A + t
    }, B = {
      x: M.x + k + t,
      y: M.y - t
    }, F = {
      x: M.x + k + t,
      y: M.y + A + t
    };
    return i > 0 && (w.x = q(w.x, i), w.y = q(w.y, i), N.x = q(N.x, i), N.y = Z(N.y, i), B.x = Z(B.x, i), B.y = q(B.y, i), F.x = Z(F.x, i), F.y = Z(F.y, i)), w.y < u && (u = w.y), w.x < s && (s = w.x), F.y > a && (a = F.y), F.x > r && (r = F.x), {
      id: o.id,
      width: k,
      height: A,
      topLeft: w,
      bottomLeft: N,
      topRight: B,
      bottomRight: F
    };
  });
  r = r + n, a = a + n, s = s - n, u = u - n;
  const f = {
    x: s,
    y: u
  }, c = {
    x: s,
    y: a
  }, b = {
    x: r,
    y: u
  }, v = {
    x: r,
    y: a
  }, p = Math.abs(f.x - b.x), y = Math.abs(f.y - c.y);
  return { nodes: h, graph: {
    topLeft: f,
    bottomLeft: c,
    topRight: b,
    bottomRight: v,
    width: p,
    height: y,
    xMax: r,
    yMax: a,
    xMin: s,
    yMin: u
  } };
}
const Pi = ["d", "marker-end", "marker-start"], $i = {
  name: "PathFindingEdge",
  compatConfig: { MODE: 3 },
  inheritAttrs: !1
}, Ji = /* @__PURE__ */ Ke({
  ...$i,
  props: {
    id: null,
    source: null,
    target: null,
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    selected: { type: Boolean, default: !1 },
    animated: { type: Boolean },
    sourcePosition: { default: Ge.Bottom },
    targetPosition: { default: Ge.Top },
    label: null,
    labelStyle: { default: () => ({}) },
    labelShowBg: { type: Boolean, default: !0 },
    labelBgStyle: { default: () => ({}) },
    labelBgPadding: null,
    labelBgBorderRadius: null,
    style: null,
    markerEnd: null,
    markerStart: null,
    sourceHandleId: null,
    targetHandleId: null
  },
  setup(e) {
    const t = e, n = 10, i = 20, r = C, { getNodes: a } = Et(), s = O(
      () => st({
        ...t
      })
    ), u = O(() => ({
      x: t.sourceX,
      y: t.sourceY,
      position: t.sourcePosition
    })), h = O(() => ({
      x: t.targetX,
      y: t.targetY,
      position: t.targetPosition
    })), f = O(() => Fi(a.value, n, i, r)), c = O(() => {
      let p = [];
      if (h.value.x && u.value.x && a.value.length) {
        const { grid: y, start: g, end: o } = yi(f.value.graph, f.value.nodes, u.value, h.value);
        p = Bi(y, g, o);
      }
      return p;
    }), b = O(() => {
      var y;
      let p = "";
      if ((y = c.value) != null && y.length) {
        const g = c.value.map((o) => {
          const [l, d] = o, m = ki({ x: l, y: d }, f.value.graph.xMin, f.value.graph.yMin);
          return [m.x, m.y];
        });
        p = Wi(u.value, h.value, g);
      }
      return p;
    }), v = et();
    return (p, y) => P(c) && P(c).length <= 2 ? (Y(), Ae(P(Rt), Ct(xt({ key: 0 }, { ...t, ...P(v) })), null, 16)) : (Y(), tt(it, { key: 1 }, [
      nt("path", {
        style: rt({ ...e.style, ...P(v).style }),
        class: "vue-flow__edge-path",
        d: P(b),
        "marker-end": e.markerEnd,
        "marker-start": e.markerStart
      }, null, 12, Pi),
      e.label ? (Y(), Ae(P(ot), {
        key: 0,
        x: P(s)[1],
        y: P(s)[2],
        label: e.label,
        "label-style": e.labelStyle,
        "label-show-bg": e.labelShowBg,
        "label-bg-style": e.labelBgStyle,
        "label-bg-padding": e.labelBgPadding,
        "label-bg-border-radius": e.labelBgBorderRadius
      }, null, 8, ["x", "y", "label", "label-style", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius"])) : at("", !0)
    ], 64));
  }
});
var Di = Math.PI;
function _i(e, t, n, i) {
  i === void 0 && (i = !1);
  var r = t[0], a = t[1], s = n[0], u = n[1], h = s + (e - r) / (a - r) * (u - s);
  if (i === !0)
    if (s < u) {
      if (h < s)
        return s;
      if (h > u)
        return u;
    } else {
      if (h > s)
        return s;
      if (h < u)
        return u;
    }
  return h;
}
function Ze(e, t, n, i, r) {
  var a = Math.sin(r), s = Math.cos(r), u = e - n, h = t - i, f = u * s - h * a, c = u * a + h * s;
  return [f + n, c + i];
}
function Oi(e, t, n, i) {
  return Math.hypot(i - t, n - e);
}
function H(e, t, n, i) {
  return Math.atan2(i - t, n - e);
}
function K(e, t, n, i) {
  return [Math.cos(n) * i + e, Math.sin(n) * i + t];
}
function E(e, t, n, i, r) {
  return r === void 0 && (r = 0.5), [e + (n - e) * r, t + (i - t) * r];
}
function Si(e, t) {
  return t === void 0 && (t = 8), Math.floor(t * (0.5 + e / (Di * 2) % t));
}
function Ii(e, t, n, i) {
  return Math.abs((n - e) / 2 / ((i - t) / 2));
}
function Ci(e, t, n, i, r) {
  r === void 0 && (r = {});
  var a = r, s = a.bow, u = s === void 0 ? 0 : s, h = a.stretch, f = h === void 0 ? 0.5 : h, c = a.stretchMin, b = c === void 0 ? 0 : c, v = a.stretchMax, p = v === void 0 ? 420 : v, y = a.padStart, g = y === void 0 ? 0 : y, o = a.padEnd, l = o === void 0 ? 0 : o, d = a.flip, m = d === void 0 ? !1 : d, k = a.straights, A = k === void 0 ? !0 : k, M = H(e, t, n, i), w = Oi(e, t, n, i), N = Ii(e, t, n, i);
  if (w < (g + l) * 2 || u === 0 && f === 0 || A && [0, 1, 1 / 0].includes(N)) {
    var B = Math.max(0, Math.min(w - g, g)), F = Math.max(0, Math.min(w - B, l)), x = K(e, t, M, B), Pe = x[0], $e = x[1], De = K(n, i, M + Math.PI, F), _e = De[0], Oe = De[1], Se = E(Pe, $e, _e, Oe, 0.5), wt = Se[0], Nt = Se[1];
    return [Pe, $e, wt, Nt, _e, Oe, M, M, M];
  }
  var Ie = (Si(M) % 2 === 0 ? 1 : -1) * (m ? -1 : 1), Ce = u + _i(w, [b, p], [1, 0], !0) * f, xe = E(e, t, n, i, 0.5), Wt = xe[0], Bt = xe[1], Ee = E(e, t, n, i, 0.5 - Ce), S = Ee[0], I = Ee[1], Re = Ze(S, I, Wt, Bt, Math.PI / 2 * Ie);
  S = Re[0], I = Re[1];
  var Ft = H(e, t, S, I), je = K(e, t, Ft, g), oe = je[0], le = je[1], Pt = H(n, i, S, I), Je = K(n, i, Pt, l), ue = Je[0], he = Je[1], $t = H(S, I, e, t), Dt = H(S, I, n, i), Le = E(oe, le, ue, he, 0.5), _t = Le[0], Ot = Le[1], He = E(oe, le, ue, he, 0.5 - Ce), fe = He[0], ce = He[1], Ye = Ze(fe, ce, _t, Ot, Math.PI / 2 * Ie);
  fe = Ye[0], ce = Ye[1];
  var Xe = E(S, I, fe, ce, 0.5), St = Xe[0], It = Xe[1];
  return [oe, le, St, It, ue, he, Dt, $t, M];
}
const xi = ["d", "marker-end", "marker-start"], Ei = {
  name: "PerfectArrow",
  compatConfig: { MODE: 3 },
  inheritAttrs: !1
}, Li = /* @__PURE__ */ Ke({
  ...Ei,
  props: {
    id: null,
    source: null,
    target: null,
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    selected: { type: Boolean },
    animated: { type: Boolean },
    sourcePosition: null,
    targetPosition: null,
    label: null,
    labelStyle: null,
    labelShowBg: { type: Boolean },
    labelBgStyle: null,
    labelBgPadding: null,
    labelBgBorderRadius: null,
    style: null,
    markerEnd: null,
    markerStart: null,
    sourceHandleId: null,
    targetHandleId: null,
    options: { default: () => ({
      padStart: 3,
      padEnd: 3,
      stretch: 0.2
    }) }
  },
  setup(e) {
    const t = e, n = O(
      () => st({
        ...t
      })
    ), i = O(() => Ci(t.sourceX, t.sourceY, t.targetX, t.targetY, {
      ...t.options
    })), r = et();
    return (a, s) => (Y(), tt(it, null, [
      nt("path", {
        style: rt({ ...e.style, ...P(r).style }),
        class: "vue-flow__edge-path vue-flow__perfect-arrow",
        d: `M${P(i)[0]},${P(i)[1]} Q${P(i)[2]},${P(i)[3]} ${P(i)[4]},${P(i)[5]}`,
        "marker-end": e.markerEnd,
        "marker-start": e.markerStart
      }, null, 12, xi),
      e.label ? (Y(), Ae(P(ot), {
        key: 0,
        x: P(n)[1],
        y: P(n)[2],
        label: e.label,
        "label-style": e.labelStyle,
        "label-show-bg": e.labelShowBg,
        "label-bg-style": e.labelBgStyle,
        "label-bg-padding": e.labelBgPadding,
        "label-bg-border-radius": e.labelBgBorderRadius
      }, null, 8, ["x", "y", "label", "label-style", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius"])) : at("", !0)
    ], 64));
  }
});
export {
  Ji as PathFindingEdge,
  Li as PerfectArrow
};
