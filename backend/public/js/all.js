/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = l.createElement("script")),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(ba, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener("unload", ea, !1)
                  : e.attachEvent && e.attachEvent("onunload", ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(g.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !g.getElementsByName || !g.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  var b = g.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f)
                      return a === g
                        ? -1
                        : b === g
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? la(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 &&
                ra(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
    });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        "complete" === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = L.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return typeof n !== U && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(E) || [""]),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var aa =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ia.optgroup = ia.option),
    (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
    (ia.th = ia.td);
  function ja(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function ka(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function la(a) {
    var b = ga.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function oa(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
          pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
            na(f[d], g[d]);
        else na(a, h);
      return (
        (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || 0 === e))
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
            (f = f || k.appendChild(b.createElement("div"))),
              (g = (ba.exec(e) || ["", ""])[1].toLowerCase()),
              (h = ia[g] || ia._default),
              (f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
          } else l.push(b.createTextNode(e));
      (k.textContent = ""), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = oa(k.appendChild(e), "script")),
          i && ma(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fa.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = ja(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(oa(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !da.test(a) &&
              !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(aa, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              n.cleanData(oa(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fa.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(ha, "")));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qa,
    ra = {};
  function sa(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function ta(a) {
    var b = l,
      c = ra[a];
    return (
      c ||
        ((c = sa(a, b)),
        ("none" !== c && c) ||
          ((qa = (
            qa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qa[0].contentDocument),
          b.write(),
          b.close(),
          (c = sa(a, b)),
          qa.detach()),
        (ra[a] = c)),
      c
    );
  }
  var ua = /^margin/,
    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wa(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) &&
          ua.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function ya(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
        (e.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (f.innerHTML = ""),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
    Ca = { position: "absolute", visibility: "hidden", display: "block" },
    Da = { letterSpacing: "0", fontWeight: "400" },
    Ea = ["Webkit", "O", "Moz", "ms"];
  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--) if (((b = Ea[e] + c), b in a)) return b;
    return d;
  }
  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Ha(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ia(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        va.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", ta(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ba.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xa(a, b, d)),
        "normal" === e && b in Da && (e = Da[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? za.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Ca, function () {
                  return Ia(a, b, d);
                })
              : Ia(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wa(a);
          return Ga(
            a,
            c,
            d
              ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0
          );
        },
      };
    }),
    (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wa(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Ja(this, !0);
      },
      hide: function () {
        return Ja(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ka),
    (Ka.prototype = {
      constructor: Ka,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ka.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ka.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ka.prototype.init.prototype = Ka.prototype),
    (Ka.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Ka.prototype.init),
    (n.fx.step = {});
  var La,
    Ma,
    Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function Sa() {
    return (
      setTimeout(function () {
        La = void 0;
      }),
      (La = n.now())
    );
  }
  function Ta(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ua(a, b, c) {
    for (
      var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Va(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Na.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ua(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xa(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qa.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = La || Sa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qa[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ua, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Ta(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (La = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Ma), (Ma = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Ya,
    Za,
    $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Za = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $a[b] || n.find.attr;
      $a[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $a[b]),
            ($a[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($a[b] = f)),
          e
        );
      };
    });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ab, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cb = n.now(),
    db = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = "*/".concat("*"),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];
  function qb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function sb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || ob) + "")
          .replace(eb, "")
          .replace(jb, pb[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((h = kb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pb[1] &&
              h[2] === pb[2] &&
              (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                (pb[3] || ("http:" === pb[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        rb(lb, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ib.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fb.test(d)
              ? d.replace(fb, "$1_=" + cb++)
              : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
          n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rb(mb, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tb(k, v, f)),
          (u = ub(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[d] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bb = 0,
    Cb = {},
    Db = { 0: 200, 1223: 204 },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Cb) Cb[a]();
    }),
    (k.cors = !!Eb && "withCredentials" in Eb),
    (k.ajax = Eb = !!Eb),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Eb && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Bb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Cb[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Db[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Cb[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Gb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Hb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Ib = a.document.documentElement;
  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Jb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || Ib;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Ib;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
          return J(
            this,
            function (b, e, f) {
              var g = Jb(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
        return c
          ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return J(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Kb = a.jQuery,
    Lb = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.4"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(
              '<div class="modal-backdrop ' + e + '" />'
            ).appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport)),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                ? "bottom"
                : "right" == h && k.right + l > p.width
                ? "left"
                : "left" == h && k.left - l < p.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.4"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.4"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a(document.body).height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init() {
  "use strict";
  ($.AdminLTE.layout = {
    activate: function () {
      var a = this;
      a.fix(),
        a.fixSidebar(),
        $(window, ".wrapper").resize(function () {
          a.fix(), a.fixSidebar();
        });
    },
    fix: function () {
      var a = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
        b = $(window).height(),
        c = $(".sidebar").height();
      if ($("body").hasClass("fixed"))
        $(".content-wrapper, .right-side").css(
          "min-height",
          b - $(".main-footer").outerHeight()
        );
      else {
        var d;
        b >= c
          ? ($(".content-wrapper, .right-side").css("min-height", b - a),
            (d = b - a))
          : ($(".content-wrapper, .right-side").css("min-height", c), (d = c));
        var e = $($.AdminLTE.options.controlSidebarOptions.selector);
        "undefined" != typeof e &&
          e.height() > d &&
          $(".content-wrapper, .right-side").css("min-height", e.height());
      }
    },
    fixSidebar: function () {
      return $("body").hasClass("fixed")
        ? ("undefined" == typeof $.fn.slimScroll &&
            window.console &&
            window.console.error(
              "Error: the fixed layout requires the slimscroll plugin!"
            ),
          void (
            $.AdminLTE.options.sidebarSlimScroll &&
            "undefined" != typeof $.fn.slimScroll &&
            ($(".sidebar").slimScroll({ destroy: !0 }).height("auto"),
            $(".sidebar").slimscroll({
              height: $(window).height() - $(".main-header").height() + "px",
              color: "rgba(0,0,0,0.2)",
              size: "3px",
            }))
          ))
        : void (
            "undefined" != typeof $.fn.slimScroll &&
            $(".sidebar").slimScroll({ destroy: !0 }).height("auto")
          );
    },
  }),
    ($.AdminLTE.pushMenu = {
      activate: function (a) {
        var b = $.AdminLTE.options.screenSizes;
        $(a).on("click", function (a) {
          a.preventDefault(),
            $(window).width() > b.sm - 1
              ? $("body").hasClass("sidebar-collapse")
                ? $("body")
                    .removeClass("sidebar-collapse")
                    .trigger("expanded.pushMenu")
                : $("body")
                    .addClass("sidebar-collapse")
                    .trigger("collapsed.pushMenu")
              : $("body").hasClass("sidebar-open")
              ? $("body")
                  .removeClass("sidebar-open")
                  .removeClass("sidebar-collapse")
                  .trigger("collapsed.pushMenu")
              : $("body").addClass("sidebar-open").trigger("expanded.pushMenu");
        }),
          $(".content-wrapper").click(function () {
            $(window).width() <= b.sm - 1 &&
              $("body").hasClass("sidebar-open") &&
              $("body").removeClass("sidebar-open");
          }),
          ($.AdminLTE.options.sidebarExpandOnHover ||
            ($("body").hasClass("fixed") &&
              $("body").hasClass("sidebar-mini"))) &&
            this.expandOnHover();
      },
      expandOnHover: function () {
        var a = this,
          b = $.AdminLTE.options.screenSizes.sm - 1;
        $(".main-sidebar").hover(
          function () {
            $("body").hasClass("sidebar-mini") &&
              $("body").hasClass("sidebar-collapse") &&
              $(window).width() > b &&
              a.expand();
          },
          function () {
            $("body").hasClass("sidebar-mini") &&
              $("body").hasClass("sidebar-expanded-on-hover") &&
              $(window).width() > b &&
              a.collapse();
          }
        );
      },
      expand: function () {
        $("body")
          .removeClass("sidebar-collapse")
          .addClass("sidebar-expanded-on-hover");
      },
      collapse: function () {
        $("body").hasClass("sidebar-expanded-on-hover") &&
          $("body")
            .removeClass("sidebar-expanded-on-hover")
            .addClass("sidebar-collapse");
      },
    }),
    ($.AdminLTE.tree = function (a) {
      var b = this,
        c = $.AdminLTE.options.animationSpeed;
      $(document).on("click", a + " li a", function (a) {
        var d = $(this),
          e = d.next();
        if (e.is(".treeview-menu") && e.is(":visible"))
          e.slideUp(c, function () {
            e.removeClass("menu-open");
          }),
            e.parent("li").removeClass("active");
        else if (e.is(".treeview-menu") && !e.is(":visible")) {
          var f = d.parents("ul").first(),
            g = f.find("ul:visible").slideUp(c);
          g.removeClass("menu-open");
          var h = d.parent("li");
          e.slideDown(c, function () {
            e.addClass("menu-open"),
              f.find("li.active").removeClass("active"),
              h.addClass("active"),
              b.layout.fix();
          });
        }
        e.is(".treeview-menu") && a.preventDefault();
      });
    }),
    ($.AdminLTE.controlSidebar = {
      activate: function () {
        var a = this,
          b = $.AdminLTE.options.controlSidebarOptions,
          c = $(b.selector),
          d = $(b.toggleBtnSelector);
        d.on("click", function (d) {
          d.preventDefault(),
            c.hasClass("control-sidebar-open") ||
            $("body").hasClass("control-sidebar-open")
              ? a.close(c, b.slide)
              : a.open(c, b.slide);
        });
        var e = $(".control-sidebar-bg");
        a._fix(e),
          $("body").hasClass("fixed")
            ? a._fixForFixed(c)
            : $(".content-wrapper, .right-side").height() < c.height() &&
              a._fixForContent(c);
      },
      open: function (a, b) {
        b
          ? a.addClass("control-sidebar-open")
          : $("body").addClass("control-sidebar-open");
      },
      close: function (a, b) {
        b
          ? a.removeClass("control-sidebar-open")
          : $("body").removeClass("control-sidebar-open");
      },
      _fix: function (a) {
        var b = this;
        $("body").hasClass("layout-boxed")
          ? (a.css("position", "absolute"),
            a.height($(".wrapper").height()),
            $(window).resize(function () {
              b._fix(a);
            }))
          : a.css({ position: "fixed", height: "auto" });
      },
      _fixForFixed: function (a) {
        a.css({
          position: "fixed",
          "max-height": "100%",
          overflow: "auto",
          "padding-bottom": "50px",
        });
      },
      _fixForContent: function (a) {
        $(".content-wrapper, .right-side").css("min-height", a.height());
      },
    }),
    ($.AdminLTE.boxWidget = {
      selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
      icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
      animationSpeed: $.AdminLTE.options.animationSpeed,
      activate: function (a) {
        var b = this;
        a || (a = document),
          $(a).on("click", b.selectors.collapse, function (a) {
            a.preventDefault(), b.collapse($(this));
          }),
          $(a).on("click", b.selectors.remove, function (a) {
            a.preventDefault(), b.remove($(this));
          });
      },
      collapse: function (a) {
        var b = this,
          c = a.parents(".box").first(),
          d = c.find(
            "> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer"
          );
        c.hasClass("collapsed-box")
          ? (a
              .children(":first")
              .removeClass(b.icons.open)
              .addClass(b.icons.collapse),
            d.slideDown(b.animationSpeed, function () {
              c.removeClass("collapsed-box");
            }))
          : (a
              .children(":first")
              .removeClass(b.icons.collapse)
              .addClass(b.icons.open),
            d.slideUp(b.animationSpeed, function () {
              c.addClass("collapsed-box");
            }));
      },
      remove: function (a) {
        var b = a.parents(".box").first();
        b.slideUp(this.animationSpeed);
      },
    });
}
if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");
($.AdminLTE = {}),
  ($.AdminLTE.options = {
    navbarMenuSlimscroll: !0,
    navbarMenuSlimscrollWidth: "3px",
    navbarMenuHeight: "200px",
    animationSpeed: 500,
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: !0,
    sidebarSlimScroll: !0,
    sidebarExpandOnHover: !1,
    enableBoxRefresh: !0,
    enableBSToppltip: !0,
    BSTooltipSelector: "[data-toggle='tooltip']",
    enableFastclick: !0,
    enableControlSidebar: !0,
    controlSidebarOptions: {
      toggleBtnSelector: "[data-toggle='control-sidebar']",
      selector: ".control-sidebar",
      slide: !0,
    },
    enableBoxWidget: !0,
    boxWidgetOptions: {
      boxWidgetIcons: {
        collapse: "fa-minus",
        open: "fa-plus",
        remove: "fa-times",
      },
      boxWidgetSelectors: {
        remove: '[data-widget="remove"]',
        collapse: '[data-widget="collapse"]',
      },
    },
    directChat: {
      enable: !0,
      contactToggleSelector: '[data-widget="chat-pane-toggle"]',
    },
    colors: {
      lightBlue: "#3c8dbc",
      red: "#f56954",
      green: "#00a65a",
      aqua: "#00c0ef",
      yellow: "#f39c12",
      blue: "#0073b7",
      navy: "#001F3F",
      teal: "#39CCCC",
      olive: "#3D9970",
      lime: "#01FF70",
      orange: "#FF851B",
      fuchsia: "#F012BE",
      purple: "#8E24AA",
      maroon: "#D81B60",
      black: "#222222",
      gray: "#d2d6de",
    },
    screenSizes: { xs: 480, sm: 768, md: 992, lg: 1200 },
  }),
  $(function () {
    "use strict";
    $("body").removeClass("hold-transition"),
      "undefined" != typeof AdminLTEOptions &&
        $.extend(!0, $.AdminLTE.options, AdminLTEOptions);
    var a = $.AdminLTE.options;
    _init(),
      $.AdminLTE.layout.activate(),
      $.AdminLTE.tree(".sidebar"),
      a.enableControlSidebar && $.AdminLTE.controlSidebar.activate(),
      a.navbarMenuSlimscroll &&
        "undefined" != typeof $.fn.slimscroll &&
        $(".navbar .menu")
          .slimscroll({
            height: a.navbarMenuHeight,
            alwaysVisible: !1,
            size: a.navbarMenuSlimscrollWidth,
          })
          .css("width", "100%"),
      a.sidebarPushMenu &&
        $.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),
      a.enableBSToppltip &&
        $("body").tooltip({ selector: a.BSTooltipSelector }),
      a.enableBoxWidget && $.AdminLTE.boxWidget.activate(),
      a.enableFastclick &&
        "undefined" != typeof FastClick &&
        FastClick.attach(document.body),
      a.directChat.enable &&
        $(document).on(
          "click",
          a.directChat.contactToggleSelector,
          function () {
            var a = $(this).parents(".direct-chat").first();
            a.toggleClass("direct-chat-contacts-open");
          }
        ),
      $('.btn-group[data-toggle="btn-toggle"]').each(function () {
        var a = $(this);
        $(this)
          .find(".btn")
          .on("click", function (b) {
            a.find(".btn.active").removeClass("active"),
              $(this).addClass("active"),
              b.preventDefault();
          });
      });
  }),
  (function (a) {
    "use strict";
    a.fn.boxRefresh = function (b) {
      function c(a) {
        a.append(f), e.onLoadStart.call(a);
      }
      function d(a) {
        a.find(f).remove(), e.onLoadDone.call(a);
      }
      var e = a.extend(
          {
            trigger: ".refresh-btn",
            source: "",
            onLoadStart: function (a) {
              return a;
            },
            onLoadDone: function (a) {
              return a;
            },
          },
          b
        ),
        f = a(
          '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>'
        );
      return this.each(function () {
        if ("" === e.source)
          return void (
            window.console &&
            window.console.log("Please specify a source first - boxRefresh()")
          );
        var b = a(this),
          f = b.find(e.trigger).first();
        f.on("click", function (a) {
          a.preventDefault(),
            c(b),
            b.find(".box-body").load(e.source, function () {
              d(b);
            });
        });
      });
    };
  })(jQuery),
  (function (a) {
    "use strict";
    a.fn.activateBox = function () {
      a.AdminLTE.boxWidget.activate(this);
    };
  })(jQuery),
  (function (a) {
    "use strict";
    a.fn.todolist = function (b) {
      var c = a.extend(
        {
          onCheck: function (a) {
            return a;
          },
          onUncheck: function (a) {
            return a;
          },
        },
        b
      );
      return this.each(function () {
        "undefined" != typeof a.fn.iCheck
          ? (a("input", this).on("ifChecked", function () {
              var b = a(this).parents("li").first();
              b.toggleClass("done"), c.onCheck.call(b);
            }),
            a("input", this).on("ifUnchecked", function () {
              var b = a(this).parents("li").first();
              b.toggleClass("done"), c.onUncheck.call(b);
            }))
          : a("input", this).on("change", function () {
              var b = a(this).parents("li").first();
              b.toggleClass("done"),
                a("input", b).is(":checked")
                  ? c.onCheck.call(b)
                  : c.onUncheck.call(b);
            });
      });
    };
  })(jQuery);
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($, AdminLTE) {
  "use strict";

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light",
  ];

  //Create the new tab
  var tab_pane = $("<div />", {
    id: "control-sidebar-theme-demo-options-tab",
    class: "tab-pane active",
  });

  //Create the tab button
  var tab_button = $("<li />", { class: "active" }).html(
    "<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>" +
      "<i class='fa fa-wrench'></i>" +
      "</a>"
  );

  //Add the tab button to the right sidebar tabs
  $("[href='#control-sidebar-home-tab']").parent().before(tab_button);

  //Create the menu
  var demo_settings = $("<div />");

  //Layout options
  demo_settings.append(
    "<h4 class='control-sidebar-heading'>" +
      "Layout Options" +
      "</h4>" +
      //Fixed layout
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-layout='fixed' class='pull-right'/> " +
      "Fixed layout" +
      "</label>" +
      "<p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>" +
      "</div>" +
      //Boxed layout
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-layout='layout-boxed'class='pull-right'/> " +
      "Boxed Layout" +
      "</label>" +
      "<p>Activate the boxed layout</p>" +
      "</div>" +
      //Sidebar Toggle
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> " +
      "Toggle Sidebar" +
      "</label>" +
      "<p>Toggle the left sidebar's state (open or collapse)</p>" +
      "</div>" +
      //Sidebar mini expand on hover toggle
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-enable='expandOnHover' class='pull-right'/> " +
      "Sidebar Expand on Hover" +
      "</label>" +
      "<p>Let the sidebar mini expand on hover</p>" +
      "</div>" +
      //Control Sidebar Toggle
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> " +
      "Toggle Right Sidebar Slide" +
      "</label>" +
      "<p>Toggle between slide over content and push content effects</p>" +
      "</div>" +
      //Control Sidebar Skin Toggle
      "<div class='form-group'>" +
      "<label class='control-sidebar-subheading'>" +
      "<input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> " +
      "Toggle Right Sidebar Skin" +
      "</label>" +
      "<p>Toggle between dark and light skins for the right sidebar</p>" +
      "</div>"
  );
  var skins_list = $("<ul />", { class: "list-unstyled clearfix" });

  //Dark sidebar skins
  var skin_blue = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Blue</p>"
  );
  skins_list.append(skin_blue);
  var skin_black = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Black</p>"
  );
  skins_list.append(skin_black);
  var skin_purple = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Purple</p>"
  );
  skins_list.append(skin_purple);
  var skin_green = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Green</p>"
  );
  skins_list.append(skin_green);
  var skin_red = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Red</p>"
  );
  skins_list.append(skin_red);
  var skin_yellow = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin'>Yellow</p>"
  );
  skins_list.append(skin_yellow);

  //Light sidebar skins
  var skin_blue_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>"
  );
  skins_list.append(skin_blue_light);
  var skin_black_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px'>Black Light</p>"
  );
  skins_list.append(skin_black_light);
  var skin_purple_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>"
  );
  skins_list.append(skin_purple_light);
  var skin_green_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px'>Green Light</p>"
  );
  skins_list.append(skin_green_light);
  var skin_red_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px'>Red Light</p>"
  );
  skins_list.append(skin_red_light);
  var skin_yellow_light = $("<li />", {
    style: "float:left; width: 33.33333%; padding: 5px;",
  }).append(
    "<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>" +
      "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>" +
      "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>" +
      "</a>" +
      "<p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>"
  );
  skins_list.append(skin_yellow_light);

  demo_settings.append("<h4 class='control-sidebar-heading'>Skins</h4>");
  demo_settings.append(skins_list);

  tab_pane.append(demo_settings);
  $("#control-sidebar-home-tab").after(tab_pane);

  setup();

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    AdminLTE.layout.fixSidebar();
    //Fix the problem with right sidebar and layout boxed
    if (cls == "layout-boxed")
      AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    if ($("body").hasClass("fixed") && cls == "fixed") {
      AdminLTE.pushMenu.expandOnHover();
      AdminLTE.layout.activate();
    }
    AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    AdminLTE.controlSidebar._fix($(".control-sidebar"));
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store("skin", cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      window.alert(
        "Please use a modern browser to properly view this template!"
      );
    }
  }

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof Storage !== "undefined") {
      return localStorage.getItem(name);
    } else {
      window.alert(
        "Please use a modern browser to properly view this template!"
      );
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get("skin");
    if (tmp && $.inArray(tmp, my_skins)) change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on("click", function (e) {
      e.preventDefault();
      change_skin($(this).data("skin"));
    });

    //Add the layout manager
    $("[data-layout]").on("click", function () {
      change_layout($(this).data("layout"));
    });

    $("[data-controlsidebar]").on("click", function () {
      change_layout($(this).data("controlsidebar"));
      var slide = !AdminLTE.options.controlSidebarOptions.slide;
      AdminLTE.options.controlSidebarOptions.slide = slide;
      if (!slide) $(".control-sidebar").removeClass("control-sidebar-open");
    });

    $("[data-sidebarskin='toggle']").on("click", function () {
      var sidebar = $(".control-sidebar");
      if (sidebar.hasClass("control-sidebar-dark")) {
        sidebar.removeClass("control-sidebar-dark");
        sidebar.addClass("control-sidebar-light");
      } else {
        sidebar.removeClass("control-sidebar-light");
        sidebar.addClass("control-sidebar-dark");
      }
    });

    $("[data-enable='expandOnHover']").on("click", function () {
      $(this).attr("disabled", true);
      AdminLTE.pushMenu.expandOnHover();
      if (!$("body").hasClass("sidebar-collapse"))
        $("[data-layout='sidebar-collapse']").click();
    });

    // Reset options
    if ($("body").hasClass("fixed")) {
      $("[data-layout='fixed']").attr("checked", "checked");
    }
    if ($("body").hasClass("layout-boxed")) {
      $("[data-layout='layout-boxed']").attr("checked", "checked");
    }
    if ($("body").hasClass("sidebar-collapse")) {
      $("[data-layout='sidebar-collapse']").attr("checked", "checked");
    }
  }
})(jQuery, $.AdminLTE);

/*!
 * Parsley.js
 * Version 2.6.2 - built Wed, Jan 4th 2017, 8:58 am
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i;
  }
  return Array.from(e);
}
var _slice = Array.prototype.slice;
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : (e.parsley = t(e.jQuery));
})(this, function (e) {
  "use strict";
  function t(e, t) {
    return (
      e.parsleyAdaptedCallback ||
        (e.parsleyAdaptedCallback = function () {
          var i = Array.prototype.slice.call(arguments, 0);
          i.unshift(this), e.apply(t || T, i);
        }),
      e.parsleyAdaptedCallback
    );
  }
  function i(e) {
    return 0 === e.lastIndexOf(D, 0) ? e.substr(D.length) : e;
  }
  /**
   * inputevent - Alleviate browser bugs for input events
   * https://github.com/marcandre/inputevent
   * @version v0.0.3 - (built Thu, Apr 14th 2016, 5:58 pm)
   * @author Marc-Andre Lafortune <github@marc-andre.ca>
   * @license MIT
   */
  function n() {
    var t = this,
      i = window || global;
    e.extend(this, {
      isNativeEvent: function (e) {
        return e.originalEvent && e.originalEvent.isTrusted !== !1;
      },
      fakeInputEvent: function (i) {
        t.isNativeEvent(i) && e(i.target).trigger("input");
      },
      misbehaves: function (i) {
        t.isNativeEvent(i) &&
          (t.behavesOk(i),
          e(document).on(
            "change.inputevent",
            i.data.selector,
            t.fakeInputEvent
          ),
          t.fakeInputEvent(i));
      },
      behavesOk: function (i) {
        t.isNativeEvent(i) &&
          e(document)
            .off("input.inputevent", i.data.selector, t.behavesOk)
            .off("change.inputevent", i.data.selector, t.misbehaves);
      },
      install: function () {
        if (!i.inputEventPatched) {
          i.inputEventPatched = "0.0.3";
          for (
            var n = [
                "select",
                'input[type="checkbox"]',
                'input[type="radio"]',
                'input[type="file"]',
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var s = n[r];
            e(document)
              .on("input.inputevent", s, { selector: s }, t.behavesOk)
              .on("change.inputevent", s, { selector: s }, t.misbehaves);
          }
        }
      },
      uninstall: function () {
        delete i.inputEventPatched, e(document).off(".inputevent");
      },
    });
  }
  var r = 1,
    s = {},
    a = {
      attr: function (e, t, i) {
        var n,
          r,
          s,
          a = new RegExp("^" + t, "i");
        if ("undefined" == typeof i) i = {};
        else for (n in i) i.hasOwnProperty(n) && delete i[n];
        if ("undefined" == typeof e || "undefined" == typeof e[0]) return i;
        for (s = e[0].attributes, n = s.length; n--; )
          (r = s[n]),
            r &&
              r.specified &&
              a.test(r.name) &&
              (i[this.camelize(r.name.slice(t.length))] = this.deserializeValue(
                r.value
              ));
        return i;
      },
      checkAttr: function (e, t, i) {
        return e.is("[" + t + i + "]");
      },
      setAttr: function (e, t, i, n) {
        e[0].setAttribute(this.dasherize(t + i), String(n));
      },
      generateID: function () {
        return "" + r++;
      },
      deserializeValue: function (t) {
        var i;
        try {
          return t
            ? "true" == t ||
                ("false" == t
                  ? !1
                  : "null" == t
                  ? null
                  : isNaN((i = Number(t)))
                  ? /^[\[\{]/.test(t)
                    ? e.parseJSON(t)
                    : t
                  : i)
            : t;
        } catch (n) {
          return t;
        }
      },
      camelize: function (e) {
        return e.replace(/-+(.)?/g, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      },
      dasherize: function (e) {
        return e
          .replace(/::/g, "/")
          .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/_/g, "-")
          .toLowerCase();
      },
      warn: function () {
        var e;
        window.console &&
          "function" == typeof window.console.warn &&
          (e = window.console).warn.apply(e, arguments);
      },
      warnOnce: function (e) {
        s[e] || ((s[e] = !0), this.warn.apply(this, arguments));
      },
      _resetWarnings: function () {
        s = {};
      },
      trimString: function (e) {
        return e.replace(/^\s+|\s+$/g, "");
      },
      namespaceEvents: function (t, i) {
        return (
          (t = this.trimString(t || "").split(/\s+/)),
          t[0]
            ? e
                .map(t, function (e) {
                  return e + "." + i;
                })
                .join(" ")
            : ""
        );
      },
      difference: function (t, i) {
        var n = [];
        return (
          e.each(t, function (e, t) {
            -1 == i.indexOf(t) && n.push(t);
          }),
          n
        );
      },
      all: function (t) {
        return e.when.apply(e, _toConsumableArray(t).concat([42, 42]));
      },
      objectCreate:
        Object.create ||
        (function () {
          var e = function () {};
          return function (t) {
            if (arguments.length > 1)
              throw Error("Second argument not supported");
            if ("object" != typeof t)
              throw TypeError("Argument must be an object");
            e.prototype = t;
            var i = new e();
            return (e.prototype = null), i;
          };
        })(),
      _SubmitSelector: 'input[type="submit"], button:submit',
    },
    o = a,
    l = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded:
        "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      multiple: null,
      group: null,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      triggerAfterFailure: "input",
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function (e) {},
      errorsContainer: function (e) {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>",
    },
    u = function () {
      this.__id__ = o.generateID();
    };
  u.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function () {
      var t = this,
        i = function () {
          var i = e.Deferred();
          return !0 !== t.validationResult && i.reject(), i.resolve().promise();
        };
      return [i, i];
    },
    actualizeOptions: function () {
      return (
        o.attr(this.$element, this.options.namespace, this.domOptions),
        this.parent &&
          this.parent.actualizeOptions &&
          this.parent.actualizeOptions(),
        this
      );
    },
    _resetOptions: function (e) {
      (this.domOptions = o.objectCreate(this.parent.options)),
        (this.options = o.objectCreate(this.domOptions));
      for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
      this.actualizeOptions();
    },
    _listeners: null,
    on: function (e, t) {
      this._listeners = this._listeners || {};
      var i = (this._listeners[e] = this._listeners[e] || []);
      return i.push(t), this;
    },
    subscribe: function (t, i) {
      e.listenTo(this, t.toLowerCase(), i);
    },
    off: function (e, t) {
      var i = this._listeners && this._listeners[e];
      if (i)
        if (t) for (var n = i.length; n--; ) i[n] === t && i.splice(n, 1);
        else delete this._listeners[e];
      return this;
    },
    unsubscribe: function (t, i) {
      e.unsubscribeTo(this, t.toLowerCase());
    },
    trigger: function (e, t, i) {
      t = t || this;
      var n,
        r = this._listeners && this._listeners[e];
      if (r)
        for (var s = r.length; s--; )
          if (((n = r[s].call(t, t, i)), n === !1)) return n;
      return this.parent ? this.parent.trigger(e, t, i) : !0;
    },
    reset: function () {
      if ("ParsleyForm" !== this.__class__)
        return this._resetUI(), this._trigger("reset");
      for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
      this._trigger("reset");
    },
    destroy: function () {
      if ((this._destroyUI(), "ParsleyForm" !== this.__class__))
        return (
          this.$element.removeData("Parsley"),
          this.$element.removeData("ParsleyFieldMultiple"),
          void this._trigger("destroy")
        );
      for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
      this.$element.removeData("Parsley"), this._trigger("destroy");
    },
    asyncIsValid: function (e, t) {
      return (
        o.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
        this.whenValid({ group: e, force: t })
      );
    },
    _findRelated: function () {
      return this.options.multiple
        ? this.parent.$element.find(
            "[" +
              this.options.namespace +
              'multiple="' +
              this.options.multiple +
              '"]'
          )
        : this.$element;
    },
  };
  var d = {
      string: function (e) {
        return e;
      },
      integer: function (e) {
        if (isNaN(e)) throw 'Requirement is not an integer: "' + e + '"';
        return parseInt(e, 10);
      },
      number: function (e) {
        if (isNaN(e)) throw 'Requirement is not a number: "' + e + '"';
        return parseFloat(e);
      },
      reference: function (t) {
        var i = e(t);
        if (0 === i.length) throw 'No such reference: "' + t + '"';
        return i;
      },
      boolean: function (e) {
        return "false" !== e;
      },
      object: function (e) {
        return o.deserializeValue(e);
      },
      regexp: function (e) {
        var t = "";
        return (
          /^\/.*\/(?:[gimy]*)$/.test(e)
            ? ((t = e.replace(/.*\/([gimy]*)$/, "$1")),
              (e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")))
            : (e = "^" + e + "$"),
          new RegExp(e, t)
        );
      },
    },
    h = function (e, t) {
      var i = e.match(/^\s*\[(.*)\]\s*$/);
      if (!i) throw 'Requirement is not an array: "' + e + '"';
      var n = i[1].split(",").map(o.trimString);
      if (n.length !== t)
        throw (
          "Requirement has " + n.length + " values when " + t + " are needed"
        );
      return n;
    },
    p = function (e, t) {
      var i = d[e || "string"];
      if (!i) throw 'Unknown requirement specification: "' + e + '"';
      return i(t);
    },
    c = function (e, t, i) {
      var n = null,
        r = {};
      for (var s in e)
        if (s) {
          var a = i(s);
          "string" == typeof a && (a = p(e[s], a)), (r[s] = a);
        } else n = p(e[s], t);
      return [n, r];
    },
    f = function (t) {
      e.extend(!0, this, t);
    };
  f.prototype = {
    validate: function (t, i) {
      if (this.fn)
        return (
          arguments.length > 3 && (i = [].slice.call(arguments, 1, -1)),
          this.fn.call(this, t, i)
        );
      if (e.isArray(t)) {
        if (!this.validateMultiple)
          throw "Validator `" + this.name + "` does not handle multiple values";
        return this.validateMultiple.apply(this, arguments);
      }
      if (this.validateNumber)
        return isNaN(t)
          ? !1
          : ((arguments[0] = parseFloat(arguments[0])),
            this.validateNumber.apply(this, arguments));
      if (this.validateString)
        return this.validateString.apply(this, arguments);
      throw "Validator `" + this.name + "` only handles multiple values";
    },
    parseRequirements: function (t, i) {
      if ("string" != typeof t) return e.isArray(t) ? t : [t];
      var n = this.requirementType;
      if (e.isArray(n)) {
        for (var r = h(t, n.length), s = 0; s < r.length; s++)
          r[s] = p(n[s], r[s]);
        return r;
      }
      return e.isPlainObject(n) ? c(n, t, i) : [p(n, t)];
    },
    requirementType: "string",
    priority: 2,
  };
  var m = function (e, t) {
      (this.__class__ = "ParsleyValidatorRegistry"),
        (this.locale = "en"),
        this.init(e || {}, t || {});
    },
    g = {
      email:
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
      number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
      integer: /^-?\d+$/,
      digits: /^\d+$/,
      alphanum: /^\w+$/i,
      url: new RegExp(
        "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$",
        "i"
      ),
    };
  g.range = g.number;
  var v = function (e) {
    var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  };
  m.prototype = {
    init: function (t, i) {
      (this.catalog = i), (this.validators = e.extend({}, this.validators));
      for (var n in t) this.addValidator(n, t[n].fn, t[n].priority);
      window.Parsley.trigger("parsley:validator:init");
    },
    setLocale: function (e) {
      if ("undefined" == typeof this.catalog[e])
        throw new Error(e + " is not available in the catalog");
      return (this.locale = e), this;
    },
    addCatalog: function (e, t, i) {
      return (
        "object" == typeof t && (this.catalog[e] = t),
        !0 === i ? this.setLocale(e) : this
      );
    },
    addMessage: function (e, t, i) {
      return (
        "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}),
        (this.catalog[e][t] = i),
        this
      );
    },
    addMessages: function (e, t) {
      for (var i in t) this.addMessage(e, i, t[i]);
      return this;
    },
    addValidator: function (e, t, i) {
      if (this.validators[e])
        o.warn('Validator "' + e + '" is already defined.');
      else if (l.hasOwnProperty(e))
        return void o.warn(
          '"' +
            e +
            '" is a restricted keyword and is not a valid validator name.'
        );
      return this._setValidator.apply(this, arguments);
    },
    updateValidator: function (e, t, i) {
      return this.validators[e]
        ? this._setValidator.apply(this, arguments)
        : (o.warn('Validator "' + e + '" is not already defined.'),
          this.addValidator.apply(this, arguments));
    },
    removeValidator: function (e) {
      return (
        this.validators[e] || o.warn('Validator "' + e + '" is not defined.'),
        delete this.validators[e],
        this
      );
    },
    _setValidator: function (e, t, i) {
      "object" != typeof t && (t = { fn: t, priority: i }),
        t.validate || (t = new f(t)),
        (this.validators[e] = t);
      for (var n in t.messages || {}) this.addMessage(n, e, t.messages[n]);
      return this;
    },
    getErrorMessage: function (e) {
      var t;
      if ("type" === e.name) {
        var i = this.catalog[this.locale][e.name] || {};
        t = i[e.requirements];
      } else
        t = this.formatMessage(
          this.catalog[this.locale][e.name],
          e.requirements
        );
      return (
        t ||
        this.catalog[this.locale].defaultMessage ||
        this.catalog.en.defaultMessage
      );
    },
    formatMessage: function (e, t) {
      if ("object" == typeof t) {
        for (var i in t) e = this.formatMessage(e, t[i]);
        return e;
      }
      return "string" == typeof e ? e.replace(/%s/i, t) : "";
    },
    validators: {
      notblank: {
        validateString: function (e) {
          return /\S/.test(e);
        },
        priority: 2,
      },
      required: {
        validateMultiple: function (e) {
          return e.length > 0;
        },
        validateString: function (e) {
          return /\S/.test(e);
        },
        priority: 512,
      },
      type: {
        validateString: function (e, t) {
          var i =
              arguments.length <= 2 || void 0 === arguments[2]
                ? {}
                : arguments[2],
            n = i.step,
            r = void 0 === n ? "any" : n,
            s = i.base,
            a = void 0 === s ? 0 : s,
            o = g[t];
          if (!o)
            throw new Error("validator type `" + t + "` is not supported");
          if (!o.test(e)) return !1;
          if ("number" === t && !/^any$/i.test(r || "")) {
            var l = Number(e),
              u = Math.max(v(r), v(a));
            if (v(l) > u) return !1;
            var d = function (e) {
              return Math.round(e * Math.pow(10, u));
            };
            if ((d(l) - d(a)) % d(r) != 0) return !1;
          }
          return !0;
        },
        requirementType: { "": "string", step: "string", base: "number" },
        priority: 256,
      },
      pattern: {
        validateString: function (e, t) {
          return t.test(e);
        },
        requirementType: "regexp",
        priority: 64,
      },
      minlength: {
        validateString: function (e, t) {
          return e.length >= t;
        },
        requirementType: "integer",
        priority: 30,
      },
      maxlength: {
        validateString: function (e, t) {
          return e.length <= t;
        },
        requirementType: "integer",
        priority: 30,
      },
      length: {
        validateString: function (e, t, i) {
          return e.length >= t && e.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30,
      },
      mincheck: {
        validateMultiple: function (e, t) {
          return e.length >= t;
        },
        requirementType: "integer",
        priority: 30,
      },
      maxcheck: {
        validateMultiple: function (e, t) {
          return e.length <= t;
        },
        requirementType: "integer",
        priority: 30,
      },
      check: {
        validateMultiple: function (e, t, i) {
          return e.length >= t && e.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30,
      },
      min: {
        validateNumber: function (e, t) {
          return e >= t;
        },
        requirementType: "number",
        priority: 30,
      },
      max: {
        validateNumber: function (e, t) {
          return t >= e;
        },
        requirementType: "number",
        priority: 30,
      },
      range: {
        validateNumber: function (e, t, i) {
          return e >= t && i >= e;
        },
        requirementType: ["number", "number"],
        priority: 30,
      },
      equalto: {
        validateString: function (t, i) {
          var n = e(i);
          return n.length ? t === n.val() : t === i;
        },
        priority: 256,
      },
    },
  };
  var y = {},
    _ = function k(e, t, i) {
      for (var n = [], r = [], s = 0; s < e.length; s++) {
        for (var a = !1, o = 0; o < t.length; o++)
          if (e[s].assert.name === t[o].assert.name) {
            a = !0;
            break;
          }
        a ? r.push(e[s]) : n.push(e[s]);
      }
      return { kept: r, added: n, removed: i ? [] : k(t, e, !0).added };
    };
  (y.Form = {
    _actualizeTriggers: function () {
      var e = this;
      this.$element.on("submit.Parsley", function (t) {
        e.onSubmitValidate(t);
      }),
        this.$element.on("click.Parsley", o._SubmitSelector, function (t) {
          e.onSubmitButton(t);
        }),
        !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "");
    },
    focus: function () {
      if (
        ((this._focusedField = null),
        !0 === this.validationResult || "none" === this.options.focus)
      )
        return null;
      for (var e = 0; e < this.fields.length; e++) {
        var t = this.fields[e];
        if (
          !0 !== t.validationResult &&
          t.validationResult.length > 0 &&
          "undefined" == typeof t.options.noFocus &&
          ((this._focusedField = t.$element), "first" === this.options.focus)
        )
          break;
      }
      return null === this._focusedField ? null : this._focusedField.focus();
    },
    _destroyUI: function () {
      this.$element.off(".Parsley");
    },
  }),
    (y.Field = {
      _reflowUI: function () {
        if ((this._buildUI(), this._ui)) {
          var e = _(this.validationResult, this._ui.lastValidationResult);
          (this._ui.lastValidationResult = this.validationResult),
            this._manageStatusClass(),
            this._manageErrorsMessages(e),
            this._actualizeTriggers(),
            (!e.kept.length && !e.added.length) ||
              this._failedOnce ||
              ((this._failedOnce = !0), this._actualizeTriggers());
        }
      },
      getErrorsMessages: function () {
        if (!0 === this.validationResult) return [];
        for (var e = [], t = 0; t < this.validationResult.length; t++)
          e.push(
            this.validationResult[t].errorMessage ||
              this._getErrorMessage(this.validationResult[t].assert)
          );
        return e;
      },
      addError: function (e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = t.message,
          n = t.assert,
          r = t.updateClass,
          s = void 0 === r ? !0 : r;
        this._buildUI(),
          this._addError(e, { message: i, assert: n }),
          s && this._errorClass();
      },
      updateError: function (e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = t.message,
          n = t.assert,
          r = t.updateClass,
          s = void 0 === r ? !0 : r;
        this._buildUI(),
          this._updateError(e, { message: i, assert: n }),
          s && this._errorClass();
      },
      removeError: function (e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = t.updateClass,
          n = void 0 === i ? !0 : i;
        this._buildUI(), this._removeError(e), n && this._manageStatusClass();
      },
      _manageStatusClass: function () {
        this.hasConstraints() &&
        this.needsValidation() &&
        !0 === this.validationResult
          ? this._successClass()
          : this.validationResult.length > 0
          ? this._errorClass()
          : this._resetClass();
      },
      _manageErrorsMessages: function (t) {
        if ("undefined" == typeof this.options.errorsMessagesDisabled) {
          if ("undefined" != typeof this.options.errorMessage)
            return t.added.length || t.kept.length
              ? (this._insertErrorWrapper(),
                0 ===
                  this._ui.$errorsWrapper.find(".parsley-custom-error-message")
                    .length &&
                  this._ui.$errorsWrapper.append(
                    e(this.options.errorTemplate).addClass(
                      "parsley-custom-error-message"
                    )
                  ),
                this._ui.$errorsWrapper
                  .addClass("filled")
                  .find(".parsley-custom-error-message")
                  .html(this.options.errorMessage))
              : this._ui.$errorsWrapper
                  .removeClass("filled")
                  .find(".parsley-custom-error-message")
                  .remove();
          for (var i = 0; i < t.removed.length; i++)
            this._removeError(t.removed[i].assert.name);
          for (i = 0; i < t.added.length; i++)
            this._addError(t.added[i].assert.name, {
              message: t.added[i].errorMessage,
              assert: t.added[i].assert,
            });
          for (i = 0; i < t.kept.length; i++)
            this._updateError(t.kept[i].assert.name, {
              message: t.kept[i].errorMessage,
              assert: t.kept[i].assert,
            });
        }
      },
      _addError: function (t, i) {
        var n = i.message,
          r = i.assert;
        this._insertErrorWrapper(),
          this._ui.$errorsWrapper.addClass("filled").append(
            e(this.options.errorTemplate)
              .addClass("parsley-" + t)
              .html(n || this._getErrorMessage(r))
          );
      },
      _updateError: function (e, t) {
        var i = t.message,
          n = t.assert;
        this._ui.$errorsWrapper
          .addClass("filled")
          .find(".parsley-" + e)
          .html(i || this._getErrorMessage(n));
      },
      _removeError: function (e) {
        this._ui.$errorsWrapper
          .removeClass("filled")
          .find(".parsley-" + e)
          .remove();
      },
      _getErrorMessage: function (e) {
        var t = e.name + "Message";
        return "undefined" != typeof this.options[t]
          ? window.Parsley.formatMessage(this.options[t], e.requirements)
          : window.Parsley.getErrorMessage(e);
      },
      _buildUI: function () {
        if (!this._ui && !1 !== this.options.uiEnabled) {
          var t = {};
          this.$element.attr(this.options.namespace + "id", this.__id__),
            (t.$errorClassHandler = this._manageClassHandler()),
            (t.errorsWrapperId =
              "parsley-id-" +
              (this.options.multiple
                ? "multiple-" + this.options.multiple
                : this.__id__)),
            (t.$errorsWrapper = e(this.options.errorsWrapper).attr(
              "id",
              t.errorsWrapperId
            )),
            (t.lastValidationResult = []),
            (t.validationInformationVisible = !1),
            (this._ui = t);
        }
      },
      _manageClassHandler: function () {
        if (
          "string" == typeof this.options.classHandler &&
          e(this.options.classHandler).length
        )
          return e(this.options.classHandler);
        var t = this.options.classHandler.call(this, this);
        return "undefined" != typeof t && t.length ? t : this._inputHolder();
      },
      _inputHolder: function () {
        return !this.options.multiple || this.$element.is("select")
          ? this.$element
          : this.$element.parent();
      },
      _insertErrorWrapper: function () {
        var t;
        if (0 !== this._ui.$errorsWrapper.parent().length)
          return this._ui.$errorsWrapper.parent();
        if ("string" == typeof this.options.errorsContainer) {
          if (e(this.options.errorsContainer).length)
            return e(this.options.errorsContainer).append(
              this._ui.$errorsWrapper
            );
          o.warn(
            "The errors container `" +
              this.options.errorsContainer +
              "` does not exist in DOM"
          );
        } else
          "function" == typeof this.options.errorsContainer &&
            (t = this.options.errorsContainer.call(this, this));
        return "undefined" != typeof t && t.length
          ? t.append(this._ui.$errorsWrapper)
          : this._inputHolder().after(this._ui.$errorsWrapper);
      },
      _actualizeTriggers: function () {
        var e,
          t = this,
          i = this._findRelated();
        i.off(".Parsley"),
          this._failedOnce
            ? i.on(
                o.namespaceEvents(this.options.triggerAfterFailure, "Parsley"),
                function () {
                  t._validateIfNeeded();
                }
              )
            : (e = o.namespaceEvents(this.options.trigger, "Parsley")) &&
              i.on(e, function (e) {
                t._validateIfNeeded(e);
              });
      },
      _validateIfNeeded: function (e) {
        var t = this;
        (e &&
          /key|input/.test(e.type) &&
          (!this._ui || !this._ui.validationInformationVisible) &&
          this.getValue().length <= this.options.validationThreshold) ||
          (this.options.debounce
            ? (window.clearTimeout(this._debounced),
              (this._debounced = window.setTimeout(function () {
                return t.validate();
              }, this.options.debounce)))
            : this.validate());
      },
      _resetUI: function () {
        (this._failedOnce = !1),
          this._actualizeTriggers(),
          "undefined" != typeof this._ui &&
            (this._ui.$errorsWrapper.removeClass("filled").children().remove(),
            this._resetClass(),
            (this._ui.lastValidationResult = []),
            (this._ui.validationInformationVisible = !1));
      },
      _destroyUI: function () {
        this._resetUI(),
          "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(),
          delete this._ui;
      },
      _successClass: function () {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.errorClass)
            .addClass(this.options.successClass);
      },
      _errorClass: function () {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.successClass)
            .addClass(this.options.errorClass);
      },
      _resetClass: function () {
        this._ui.$errorClassHandler
          .removeClass(this.options.successClass)
          .removeClass(this.options.errorClass);
      },
    });
  var w = function (t, i, n) {
      (this.__class__ = "ParsleyForm"),
        (this.$element = e(t)),
        (this.domOptions = i),
        (this.options = n),
        (this.parent = window.Parsley),
        (this.fields = []),
        (this.validationResult = null);
    },
    b = { pending: null, resolved: !0, rejected: !1 };
  w.prototype = {
    onSubmitValidate: function (e) {
      var t = this;
      if (!0 !== e.parsley) {
        var i =
          this._$submitSource || this.$element.find(o._SubmitSelector).first();
        if (
          ((this._$submitSource = null),
          this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !0),
          !i.is("[formnovalidate]"))
        ) {
          var n = this.whenValidate({ event: e });
          ("resolved" === n.state() && !1 !== this._trigger("submit")) ||
            (e.stopImmediatePropagation(),
            e.preventDefault(),
            "pending" === n.state() &&
              n.done(function () {
                t._submit(i);
              }));
        }
      }
    },
    onSubmitButton: function (t) {
      this._$submitSource = e(t.currentTarget);
    },
    _submit: function (t) {
      if (!1 !== this._trigger("submit")) {
        if (t) {
          var i = this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !1);
          0 === i.length &&
            (i = e(
              '<input class="parsley-synthetic-submit-button" type="hidden">'
            ).appendTo(this.$element)),
            i.attr({ name: t.attr("name"), value: t.attr("value") });
        }
        this.$element.trigger(e.extend(e.Event("submit"), { parsley: !0 }));
      }
    },
    validate: function (t) {
      if (arguments.length >= 1 && !e.isPlainObject(t)) {
        o.warnOnce(
          "Calling validate on a parsley form without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments),
          n = i[0],
          r = i[1],
          s = i[2];
        t = { group: n, force: r, event: s };
      }
      return b[this.whenValidate(t).state()];
    },
    whenValidate: function () {
      var t,
        i = this,
        n =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        r = n.group,
        s = n.force,
        a = n.event;
      (this.submitEvent = a),
        a &&
          (this.submitEvent = e.extend({}, a, {
            preventDefault: function () {
              o.warnOnce(
                "Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"
              ),
                (i.validationResult = !1);
            },
          })),
        (this.validationResult = !0),
        this._trigger("validate"),
        this._refreshFields();
      var l = this._withoutReactualizingFormOptions(function () {
        return e.map(i.fields, function (e) {
          return e.whenValidate({ force: s, group: r });
        });
      });
      return (t = o
        .all(l)
        .done(function () {
          i._trigger("success");
        })
        .fail(function () {
          (i.validationResult = !1), i.focus(), i._trigger("error");
        })
        .always(function () {
          i._trigger("validated");
        })).pipe.apply(
        t,
        _toConsumableArray(this._pipeAccordingToValidationResult())
      );
    },
    isValid: function (t) {
      if (arguments.length >= 1 && !e.isPlainObject(t)) {
        o.warnOnce(
          "Calling isValid on a parsley form without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments),
          n = i[0],
          r = i[1];
        t = { group: n, force: r };
      }
      return b[this.whenValid(t).state()];
    },
    whenValid: function () {
      var t = this,
        i =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        n = i.group,
        r = i.force;
      this._refreshFields();
      var s = this._withoutReactualizingFormOptions(function () {
        return e.map(t.fields, function (e) {
          return e.whenValid({ group: n, force: r });
        });
      });
      return o.all(s);
    },
    _refreshFields: function () {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function () {
      var t = this,
        i = this.fields;
      return (
        (this.fields = []),
        (this.fieldsMappedById = {}),
        this._withoutReactualizingFormOptions(function () {
          t.$element
            .find(t.options.inputs)
            .not(t.options.excluded)
            .each(function (e, i) {
              var n = new window.Parsley.Factory(i, {}, t);
              ("ParsleyField" !== n.__class__ &&
                "ParsleyFieldMultiple" !== n.__class__) ||
                !0 === n.options.excluded ||
                ("undefined" ==
                  typeof t.fieldsMappedById[n.__class__ + "-" + n.__id__] &&
                  ((t.fieldsMappedById[n.__class__ + "-" + n.__id__] = n),
                  t.fields.push(n)));
            }),
            e.each(o.difference(i, t.fields), function (e, t) {
              t._trigger("reset");
            });
        }),
        this
      );
    },
    _withoutReactualizingFormOptions: function (e) {
      var t = this.actualizeOptions;
      this.actualizeOptions = function () {
        return this;
      };
      var i = e();
      return (this.actualizeOptions = t), i;
    },
    _trigger: function (e) {
      return this.trigger("form:" + e);
    },
  };
  var F = function (t, i, n, r, s) {
      if (!/ParsleyField/.test(t.__class__))
        throw new Error(
          "ParsleyField or ParsleyFieldMultiple instance expected"
        );
      var a = window.Parsley._validatorRegistry.validators[i],
        o = new f(a);
      e.extend(this, {
        validator: o,
        name: i,
        requirements: n,
        priority: r || t.options[i + "Priority"] || o.priority,
        isDomConstraint: !0 === s,
      }),
        this._parseRequirements(t.options);
    },
    C = function (e) {
      var t = e[0].toUpperCase();
      return t + e.slice(1);
    };
  F.prototype = {
    validate: function (e, t) {
      var i;
      return (i = this.validator).validate.apply(
        i,
        [e].concat(_toConsumableArray(this.requirementList), [t])
      );
    },
    _parseRequirements: function (e) {
      var t = this;
      this.requirementList = this.validator.parseRequirements(
        this.requirements,
        function (i) {
          return e[t.name + C(i)];
        }
      );
    },
  };
  var $ = function (t, i, n, r) {
      (this.__class__ = "ParsleyField"),
        (this.$element = e(t)),
        "undefined" != typeof r && (this.parent = r),
        (this.options = n),
        (this.domOptions = i),
        (this.constraints = []),
        (this.constraintsByName = {}),
        (this.validationResult = !0),
        this._bindConstraints();
    },
    x = { pending: null, resolved: !0, rejected: !1 };
  $.prototype = {
    validate: function (t) {
      arguments.length >= 1 &&
        !e.isPlainObject(t) &&
        (o.warnOnce(
          "Calling validate on a parsley field without passing arguments as an object is deprecated."
        ),
        (t = { options: t }));
      var i = this.whenValidate(t);
      if (!i) return !0;
      switch (i.state()) {
        case "pending":
          return null;
        case "resolved":
          return !0;
        case "rejected":
          return this.validationResult;
      }
    },
    whenValidate: function () {
      var e,
        t = this,
        i =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        n = i.force,
        r = i.group;
      return (
        this.refreshConstraints(),
        !r || this._isInGroup(r)
          ? ((this.value = this.getValue()),
            this._trigger("validate"),
            (e = this.whenValid({ force: n, value: this.value, _refreshed: !0 })
              .always(function () {
                t._reflowUI();
              })
              .done(function () {
                t._trigger("success");
              })
              .fail(function () {
                t._trigger("error");
              })
              .always(function () {
                t._trigger("validated");
              })).pipe.apply(
              e,
              _toConsumableArray(this._pipeAccordingToValidationResult())
            ))
          : void 0
      );
    },
    hasConstraints: function () {
      return 0 !== this.constraints.length;
    },
    needsValidation: function (e) {
      return (
        "undefined" == typeof e && (e = this.getValue()),
        !(
          !e.length &&
          !this._isRequired() &&
          "undefined" == typeof this.options.validateIfEmpty
        )
      );
    },
    _isInGroup: function (t) {
      return e.isArray(this.options.group)
        ? -1 !== e.inArray(t, this.options.group)
        : this.options.group === t;
    },
    isValid: function (t) {
      if (arguments.length >= 1 && !e.isPlainObject(t)) {
        o.warnOnce(
          "Calling isValid on a parsley field without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments),
          n = i[0],
          r = i[1];
        t = { force: n, value: r };
      }
      var s = this.whenValid(t);
      return s ? x[s.state()] : !0;
    },
    whenValid: function () {
      var t = this,
        i =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        n = i.force,
        r = void 0 === n ? !1 : n,
        s = i.value,
        a = i.group,
        l = i._refreshed;
      if ((l || this.refreshConstraints(), !a || this._isInGroup(a))) {
        if (((this.validationResult = !0), !this.hasConstraints()))
          return e.when();
        if (
          (("undefined" != typeof s && null !== s) || (s = this.getValue()),
          !this.needsValidation(s) && !0 !== r)
        )
          return e.when();
        var u = this._getGroupedConstraints(),
          d = [];
        return (
          e.each(u, function (i, n) {
            var r = o.all(
              e.map(n, function (e) {
                return t._validateConstraint(s, e);
              })
            );
            return d.push(r), "rejected" === r.state() ? !1 : void 0;
          }),
          o.all(d)
        );
      }
    },
    _validateConstraint: function (t, i) {
      var n = this,
        r = i.validate(t, this);
      return (
        !1 === r && (r = e.Deferred().reject()),
        o.all([r]).fail(function (e) {
          n.validationResult instanceof Array || (n.validationResult = []),
            n.validationResult.push({
              assert: i,
              errorMessage: "string" == typeof e && e,
            });
        })
      );
    },
    getValue: function () {
      var e;
      return (
        (e =
          "function" == typeof this.options.value
            ? this.options.value(this)
            : "undefined" != typeof this.options.value
            ? this.options.value
            : this.$element.val()),
        "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e)
      );
    },
    refreshConstraints: function () {
      return this.actualizeOptions()._bindConstraints();
    },
    addConstraint: function (e, t, i, n) {
      if (window.Parsley._validatorRegistry.validators[e]) {
        var r = new F(this, e, t, i, n);
        "undefined" !== this.constraintsByName[r.name] &&
          this.removeConstraint(r.name),
          this.constraints.push(r),
          (this.constraintsByName[r.name] = r);
      }
      return this;
    },
    removeConstraint: function (e) {
      for (var t = 0; t < this.constraints.length; t++)
        if (e === this.constraints[t].name) {
          this.constraints.splice(t, 1);
          break;
        }
      return delete this.constraintsByName[e], this;
    },
    updateConstraint: function (e, t, i) {
      return this.removeConstraint(e).addConstraint(e, t, i);
    },
    _bindConstraints: function () {
      for (var e = [], t = {}, i = 0; i < this.constraints.length; i++)
        !1 === this.constraints[i].isDomConstraint &&
          (e.push(this.constraints[i]),
          (t[this.constraints[i].name] = this.constraints[i]));
      (this.constraints = e), (this.constraintsByName = t);
      for (var n in this.options)
        this.addConstraint(n, this.options[n], void 0, !0);
      return this._bindHtml5Constraints();
    },
    _bindHtml5Constraints: function () {
      this.$element.attr("required") &&
        this.addConstraint("required", !0, void 0, !0),
        "string" == typeof this.$element.attr("pattern") &&
          this.addConstraint(
            "pattern",
            this.$element.attr("pattern"),
            void 0,
            !0
          ),
        "date" !== this.$element.attr("type") &&
        "undefined" != typeof this.$element.attr("min") &&
        "undefined" != typeof this.$element.attr("max")
          ? this.addConstraint(
              "range",
              [this.$element.attr("min"), this.$element.attr("max")],
              void 0,
              !0
            )
          : "date" !== this.$element.attr("type") &&
            "undefined" != typeof this.$element.attr("min")
          ? this.addConstraint("min", this.$element.attr("min"), void 0, !0)
          : "date" !== this.$element.attr("type") &&
            "undefined" != typeof this.$element.attr("max") &&
            this.addConstraint("max", this.$element.attr("max"), void 0, !0),
        "undefined" != typeof this.$element.attr("minlength") &&
        "undefined" != typeof this.$element.attr("maxlength")
          ? this.addConstraint(
              "length",
              [
                this.$element.attr("minlength"),
                this.$element.attr("maxlength"),
              ],
              void 0,
              !0
            )
          : "undefined" != typeof this.$element.attr("minlength")
          ? this.addConstraint(
              "minlength",
              this.$element.attr("minlength"),
              void 0,
              !0
            )
          : "undefined" != typeof this.$element.attr("maxlength") &&
            this.addConstraint(
              "maxlength",
              this.$element.attr("maxlength"),
              void 0,
              !0
            );
      var e = this.$element.attr("type");
      return "undefined" == typeof e
        ? this
        : "number" === e
        ? this.addConstraint(
            "type",
            [
              "number",
              {
                step: this.$element.attr("step") || "1",
                base: this.$element.attr("min") || this.$element.attr("value"),
              },
            ],
            void 0,
            !0
          )
        : /^(email|url|range)$/i.test(e)
        ? this.addConstraint("type", e, void 0, !0)
        : this;
    },
    _isRequired: function () {
      return "undefined" == typeof this.constraintsByName.required
        ? !1
        : !1 !== this.constraintsByName.required.requirements;
    },
    _trigger: function (e) {
      return this.trigger("field:" + e);
    },
    _handleWhitespace: function (e) {
      return (
        !0 === this.options.trimValue &&
          o.warnOnce(
            'data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'
          ),
        "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")),
        ("trim" !== this.options.whitespace &&
          "squish" !== this.options.whitespace &&
          !0 !== this.options.trimValue) ||
          (e = o.trimString(e)),
        e
      );
    },
    _getGroupedConstraints: function () {
      if (!1 === this.options.priorityEnabled) return [this.constraints];
      for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
        var n = this.constraints[i].priority;
        t[n] || e.push((t[n] = [])), t[n].push(this.constraints[i]);
      }
      return (
        e.sort(function (e, t) {
          return t[0].priority - e[0].priority;
        }),
        e
      );
    },
  };
  var E = $,
    P = function () {
      this.__class__ = "ParsleyFieldMultiple";
    };
  P.prototype = {
    addElement: function (e) {
      return this.$elements.push(e), this;
    },
    refreshConstraints: function () {
      var t;
      if (((this.constraints = []), this.$element.is("select")))
        return this.actualizeOptions()._bindConstraints(), this;
      for (var i = 0; i < this.$elements.length; i++)
        if (e("html").has(this.$elements[i]).length) {
          t = this.$elements[i]
            .data("ParsleyFieldMultiple")
            .refreshConstraints().constraints;
          for (var n = 0; n < t.length; n++)
            this.addConstraint(
              t[n].name,
              t[n].requirements,
              t[n].priority,
              t[n].isDomConstraint
            );
        } else this.$elements.splice(i, 1);
      return this;
    },
    getValue: function () {
      if ("function" == typeof this.options.value)
        return this.options.value(this);
      if ("undefined" != typeof this.options.value) return this.options.value;
      if (this.$element.is("input[type=radio]"))
        return this._findRelated().filter(":checked").val() || "";
      if (this.$element.is("input[type=checkbox]")) {
        var t = [];
        return (
          this._findRelated()
            .filter(":checked")
            .each(function () {
              t.push(e(this).val());
            }),
          t
        );
      }
      return this.$element.is("select") && null === this.$element.val()
        ? []
        : this.$element.val();
    },
    _init: function () {
      return (this.$elements = [this.$element]), this;
    },
  };
  var V = function (t, i, n) {
    this.$element = e(t);
    var r = this.$element.data("Parsley");
    if (r)
      return (
        "undefined" != typeof n &&
          r.parent === window.Parsley &&
          ((r.parent = n), r._resetOptions(r.options)),
        "object" == typeof i && e.extend(r.options, i),
        r
      );
    if (!this.$element.length)
      throw new Error("You must bind Parsley on an existing element.");
    if ("undefined" != typeof n && "ParsleyForm" !== n.__class__)
      throw new Error("Parent instance must be a ParsleyForm instance");
    return (this.parent = n || window.Parsley), this.init(i);
  };
  V.prototype = {
    init: function (e) {
      return (
        (this.__class__ = "Parsley"),
        (this.__version__ = "2.6.2"),
        (this.__id__ = o.generateID()),
        this._resetOptions(e),
        this.$element.is("form") ||
        (o.checkAttr(this.$element, this.options.namespace, "validate") &&
          !this.$element.is(this.options.inputs))
          ? this.bind("parsleyForm")
          : this.isMultiple()
          ? this.handleMultiple()
          : this.bind("parsleyField")
      );
    },
    isMultiple: function () {
      return (
        this.$element.is("input[type=radio], input[type=checkbox]") ||
        (this.$element.is("select") &&
          "undefined" != typeof this.$element.attr("multiple"))
      );
    },
    handleMultiple: function () {
      var t,
        i,
        n = this;
      if (
        (this.options.multiple ||
          ("undefined" != typeof this.$element.attr("name") &&
          this.$element.attr("name").length
            ? (this.options.multiple = t = this.$element.attr("name"))
            : "undefined" != typeof this.$element.attr("id") &&
              this.$element.attr("id").length &&
              (this.options.multiple = this.$element.attr("id"))),
        this.$element.is("select") &&
          "undefined" != typeof this.$element.attr("multiple"))
      )
        return (
          (this.options.multiple = this.options.multiple || this.__id__),
          this.bind("parsleyFieldMultiple")
        );
      if (!this.options.multiple)
        return (
          o.warn(
            "To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",
            this.$element
          ),
          this
        );
      (this.options.multiple = this.options.multiple.replace(
        /(:|\.|\[|\]|\{|\}|\$)/g,
        ""
      )),
        "undefined" != typeof t &&
          e('input[name="' + t + '"]').each(function (t, i) {
            e(i).is("input[type=radio], input[type=checkbox]") &&
              e(i).attr(n.options.namespace + "multiple", n.options.multiple);
          });
      for (var r = this._findRelated(), s = 0; s < r.length; s++)
        if (((i = e(r.get(s)).data("Parsley")), "undefined" != typeof i)) {
          this.$element.data("ParsleyFieldMultiple") ||
            i.addElement(this.$element);
          break;
        }
      return (
        this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
      );
    },
    bind: function (t, i) {
      var n;
      switch (t) {
        case "parsleyForm":
          n = e
            .extend(
              new w(this.$element, this.domOptions, this.options),
              new u(),
              window.ParsleyExtend
            )
            ._bindFields();
          break;
        case "parsleyField":
          n = e.extend(
            new E(this.$element, this.domOptions, this.options, this.parent),
            new u(),
            window.ParsleyExtend
          );
          break;
        case "parsleyFieldMultiple":
          n = e
            .extend(
              new E(this.$element, this.domOptions, this.options, this.parent),
              new P(),
              new u(),
              window.ParsleyExtend
            )
            ._init();
          break;
        default:
          throw new Error(t + "is not a supported Parsley type");
      }
      return (
        this.options.multiple &&
          o.setAttr(
            this.$element,
            this.options.namespace,
            "multiple",
            this.options.multiple
          ),
        "undefined" != typeof i
          ? (this.$element.data("ParsleyFieldMultiple", n), n)
          : (this.$element.data("Parsley", n),
            n._actualizeTriggers(),
            n._trigger("init"),
            n)
      );
    },
  };
  var M = e.fn.jquery.split(".");
  if (parseInt(M[0]) <= 1 && parseInt(M[1]) < 8)
    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  M.forEach ||
    o.warn(
      "Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim"
    );
  var O = e.extend(new u(), {
    $element: e(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: V,
    version: "2.6.2",
  });
  e.extend(E.prototype, y.Field, u.prototype),
    e.extend(w.prototype, y.Form, u.prototype),
    e.extend(V.prototype, u.prototype),
    (e.fn.parsley = e.fn.psly =
      function (t) {
        if (this.length > 1) {
          var i = [];
          return (
            this.each(function () {
              i.push(e(this).parsley(t));
            }),
            i
          );
        }
        return e(this).length
          ? new V(this, t)
          : void o.warn("You must bind Parsley on an existing element.");
      }),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    (O.options = e.extend(o.objectCreate(l), window.ParsleyConfig)),
    (window.ParsleyConfig = O.options),
    (window.Parsley = window.psly = O),
    (window.ParsleyUtils = o);
  var A = (window.Parsley._validatorRegistry = new m(
    window.ParsleyConfig.validators,
    window.ParsleyConfig.i18n
  ));
  (window.ParsleyValidator = {}),
    e.each(
      "setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(
        " "
      ),
      function (t, i) {
        (window.Parsley[i] = e.proxy(A, i)),
          (window.ParsleyValidator[i] = function () {
            var e;
            return (
              o.warnOnce(
                "Accessing the method '" +
                  i +
                  "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." +
                  i +
                  "(...)'"
              ),
              (e = window.Parsley)[i].apply(e, arguments)
            );
          });
      }
    ),
    (window.Parsley.UI = y),
    (window.ParsleyUI = {
      removeError: function (e, t, i) {
        var n = !0 !== i;
        return (
          o.warnOnce(
            "Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          e.removeError(t, { updateClass: n })
        );
      },
      getErrorsMessages: function (e) {
        return (
          o.warnOnce(
            "Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."
          ),
          e.getErrorsMessages()
        );
      },
    }),
    e.each("addError updateError".split(" "), function (e, t) {
      window.ParsleyUI[t] = function (e, i, n, r, s) {
        var a = !0 !== s;
        return (
          o.warnOnce(
            "Accessing ParsleyUI is deprecated. Call '" +
              t +
              "' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          e[t](i, { message: n, assert: r, updateClass: a })
        );
      };
    }),
    !1 !== window.ParsleyConfig.autoBind &&
      e(function () {
        e("[data-parsley-validate]").length &&
          e("[data-parsley-validate]").parsley();
      });
  var T = e({}),
    R = function () {
      o.warnOnce(
        "Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley"
      );
    },
    D = "parsley:";
  (e.listen = function (e, n) {
    var r;
    if (
      (R(),
      "object" == typeof arguments[1] &&
        "function" == typeof arguments[2] &&
        ((r = arguments[1]), (n = arguments[2])),
      "function" != typeof n)
    )
      throw new Error("Wrong parameters");
    window.Parsley.on(i(e), t(n, r));
  }),
    (e.listenTo = function (e, n, r) {
      if ((R(), !(e instanceof E || e instanceof w)))
        throw new Error("Must give Parsley instance");
      if ("string" != typeof n || "function" != typeof r)
        throw new Error("Wrong parameters");
      e.on(i(n), t(r));
    }),
    (e.unsubscribe = function (e, t) {
      if ((R(), "string" != typeof e || "function" != typeof t))
        throw new Error("Wrong arguments");
      window.Parsley.off(i(e), t.parsleyAdaptedCallback);
    }),
    (e.unsubscribeTo = function (e, t) {
      if ((R(), !(e instanceof E || e instanceof w)))
        throw new Error("Must give Parsley instance");
      e.off(i(t));
    }),
    (e.unsubscribeAll = function (t) {
      R(),
        window.Parsley.off(i(t)),
        e("form,input,textarea,select").each(function () {
          var n = e(this).data("Parsley");
          n && n.off(i(t));
        });
    }),
    (e.emit = function (e, t) {
      var n;
      R();
      var r = t instanceof E || t instanceof w,
        s = Array.prototype.slice.call(arguments, r ? 2 : 1);
      s.unshift(i(e)),
        r || (t = window.Parsley),
        (n = t).trigger.apply(n, _toConsumableArray(s));
    });
  e.extend(!0, O, {
    asyncValidators: {
      default: {
        fn: function (e) {
          return e.status >= 200 && e.status < 300;
        },
        url: !1,
      },
      reverse: {
        fn: function (e) {
          return e.status < 200 || e.status >= 300;
        },
        url: !1,
      },
    },
    addAsyncValidator: function (e, t, i, n) {
      return (
        (O.asyncValidators[e] = { fn: t, url: i || !1, options: n || {} }), this
      );
    },
  }),
    O.addValidator("remote", {
      requirementType: {
        "": "string",
        validator: "string",
        reverse: "boolean",
        options: "object",
      },
      validateString: function (t, i, n, r) {
        var s,
          a,
          o = {},
          l = n.validator || (!0 === n.reverse ? "reverse" : "default");
        if ("undefined" == typeof O.asyncValidators[l])
          throw new Error("Calling an undefined async validator: `" + l + "`");
        (i = O.asyncValidators[l].url || i),
          i.indexOf("{value}") > -1
            ? (i = i.replace("{value}", encodeURIComponent(t)))
            : (o[r.$element.attr("name") || r.$element.attr("id")] = t);
        var u = e.extend(!0, n.options || {}, O.asyncValidators[l].options);
        (s = e.extend(!0, {}, { url: i, data: o, type: "GET" }, u)),
          r.trigger("field:ajaxoptions", r, s),
          (a = e.param(s)),
          "undefined" == typeof O._remoteCache && (O._remoteCache = {});
        var d = (O._remoteCache[a] = O._remoteCache[a] || e.ajax(s)),
          h = function () {
            var t = O.asyncValidators[l].fn.call(r, d, i, n);
            return t || (t = e.Deferred().reject()), e.when(t);
          };
        return d.then(h, h);
      },
      priority: -1,
    }),
    O.on("form:submit", function () {
      O._remoteCache = {};
    }),
    (window.ParsleyExtend.addAsyncValidator = function () {
      return (
        ParsleyUtils.warnOnce(
          "Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"
        ),
        O.addAsyncValidator.apply(O, arguments)
      );
    }),
    O.addMessages("en", {
      defaultMessage: "This value seems to be invalid.",
      type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric.",
      },
      notblank: "This value should not be blank.",
      required: "This value is required.",
      pattern: "This value seems to be invalid.",
      min: "This value should be greater than or equal to %s.",
      max: "This value should be lower than or equal to %s.",
      range: "This value should be between %s and %s.",
      minlength:
        "This value is too short. It should have %s characters or more.",
      maxlength:
        "This value is too long. It should have %s characters or fewer.",
      length:
        "This value length is invalid. It should be between %s and %s characters long.",
      mincheck: "You must select at least %s choices.",
      maxcheck: "You must select %s choices or fewer.",
      check: "You must select between %s and %s choices.",
      equalto: "This value should be the same.",
    }),
    O.setLocale("en");
  var I = new n();
  I.install();
  var q = O;
  return q;
});
//# sourceMappingURL=parsley.min.js.map
// ==================================================
// fancyBox v3.0.47
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  "use strict";
  function s(t) {
    var e = t.currentTarget,
      o = t.data ? t.data.options : {},
      s = t.data ? t.data.items : [],
      i = "",
      a = 0;
    t.preventDefault(),
      t.stopPropagation(),
      n(e).attr("data-fancybox") && (i = n(e).data("fancybox")),
      i
        ? ((s = s.length
            ? s.filter('[data-fancybox="' + i + '"]')
            : n("[data-fancybox=" + i + "]")),
          (a = s.index(e)))
        : (s = [e]),
      n.fancybox.open(s, o, a);
  }
  if (!n) return o;
  var i = {
      speed: 330,
      loop: !0,
      opacity: "auto",
      margin: [44, 0],
      gutter: 30,
      infobar: !0,
      buttons: !0,
      slideShow: !0,
      fullScreen: !0,
      thumbs: !0,
      closeBtn: !0,
      smallBtn: "auto",
      image: { preload: "auto", protect: !1 },
      ajax: { settings: { data: { fancybox: !0 } } },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
        preload: !0,
        scrolling: "no",
        css: {},
      },
      baseClass: "",
      slideClass: "",
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl:
        '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
      closeTpl:
        '<button data-fancybox-close class="fancybox-close-small"></button>',
      parentEl: "body",
      touch: !0,
      keyboard: !0,
      focus: !0,
      closeClickOutside: !0,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeMove: n.noop,
      afterMove: n.noop,
      onComplete: n.noop,
      onInit: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
    },
    a = n(t),
    r = n(e),
    c = 0,
    l = function (t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
    u = (function () {
      return (
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        function (e) {
          t.setTimeout(e, 1e3 / 60);
        }
      );
    })(),
    d = function (o) {
      var s;
      return (
        "function" == typeof n && o instanceof n && (o = o[0]),
        (s = o.getBoundingClientRect()),
        s.bottom > 0 &&
          s.right > 0 &&
          s.left < (t.innerWidth || e.documentElement.clientWidth) &&
          s.top < (t.innerHeight || e.documentElement.clientHeight)
      );
    },
    p = function (t, o, s) {
      var a = this;
      (a.opts = n.extend(!0, { index: s }, i, o || {})),
        (a.id = a.opts.id || ++c),
        (a.group = []),
        (a.currIndex = parseInt(a.opts.index, 10) || 0),
        (a.prevIndex = null),
        (a.prevPos = null),
        (a.currPos = 0),
        (a.firstRun = null),
        a.createGroup(t),
        a.group.length &&
          ((a.$lastFocus = n(e.activeElement).blur()),
          (a.slides = {}),
          a.init(t));
    };
  n.extend(p.prototype, {
    init: function () {
      var t,
        e,
        o = this,
        s = !1;
      (o.scrollTop = r.scrollTop()),
        (o.scrollLeft = r.scrollLeft()),
        n.fancybox.getInstance() ||
          ((t = n("body").width()),
          n("html").addClass("fancybox-enabled"),
          n.fancybox.isTouch
            ? (n.each(o.group, function (t, e) {
                if ("image" !== e.type && "iframe" !== e.type)
                  return (s = !0), !1;
              }),
              s &&
                n("body").css({
                  position: "fixed",
                  width: t,
                  top: o.scrollTop * -1,
                }))
            : ((t = n("body").width() - t),
              t > 1 &&
                n('<style id="fancybox-noscroll" type="text/css">')
                  .html(
                    ".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " +
                      t +
                      "px; }"
                  )
                  .appendTo("head"))),
        (e = n(o.opts.baseTpl)
          .attr("id", "fancybox-container-" + o.id)
          .data("FancyBox", o)
          .addClass(o.opts.baseClass)
          .hide()
          .prependTo(o.opts.parentEl)),
        (o.$refs = {
          container: e,
          bg: e.find(".fancybox-bg"),
          controls: e.find(".fancybox-controls"),
          buttons: e.find(".fancybox-buttons"),
          slider_wrap: e.find(".fancybox-slider-wrap"),
          slider: e.find(".fancybox-slider"),
          caption: e.find(".fancybox-caption"),
        }),
        o.trigger("onInit"),
        o.activate(),
        o.current || o.jumpTo(o.currIndex);
    },
    createGroup: function (t) {
      var e = this,
        s = n.makeArray(t);
      n.each(s, function (t, s) {
        var i,
          a,
          r,
          c,
          l = {},
          u = {},
          d = [];
        n.isPlainObject(s)
          ? ((l = s), (u = s.opts || {}))
          : "object" === n.type(s) && n(s).length
          ? ((i = n(s)),
            (d = i.data()),
            (u = "options" in d ? d.options : {}),
            (u = "object" === n.type(u) ? u : {}),
            (l.type = "type" in d ? d.type : u.type),
            (l.src = "src" in d ? d.src : u.src || i.attr("href")),
            (u.width = "width" in d ? d.width : u.width),
            (u.height = "height" in d ? d.height : u.height),
            (u.thumb = "thumb" in d ? d.thumb : u.thumb),
            (u.selector = "selector" in d ? d.selector : u.selector),
            "srcset" in d && (u.image = { srcset: d.srcset }),
            (u.$orig = i))
          : (l = { type: "html", content: s + "" }),
          (l.opts = n.extend(!0, {}, e.opts, u)),
          (a = l.type),
          (r = l.src || ""),
          a ||
            (l.content
              ? (a = "html")
              : r.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (a = "image")
              : r.match(/\.(pdf)((\?|#).*)?$/i)
              ? (a = "pdf")
              : "#" === r.charAt(0) && (a = "inline"),
            (l.type = a)),
          (l.index = e.group.length),
          l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig,
          !l.opts.$thumb &&
            l.opts.$orig &&
            (l.opts.$thumb = l.opts.$orig.find("img:first")),
          l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb,
          "function" === n.type(l.opts.caption)
            ? (l.opts.caption = l.opts.caption.apply(s, [e, l]))
            : "caption" in d
            ? (l.opts.caption = d.caption)
            : u.$orig && (l.opts.caption = i.attr("title")),
          (l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + ""),
          "ajax" === a &&
            ((c = r.split(/\s+/, 2)),
            c.length > 1 &&
              ((l.src = c.shift()), (l.opts.selector = c.shift()))),
          "auto" == l.opts.smallBtn &&
            (n.inArray(a, ["html", "inline", "ajax"]) > -1
              ? ((l.opts.buttons = !1), (l.opts.smallBtn = !0))
              : (l.opts.smallBtn = !1)),
          "pdf" === a &&
            ((l.type = "iframe"),
            (l.opts.closeBtn = !0),
            (l.opts.smallBtn = !1),
            (l.opts.iframe.preload = !1)),
          l.opts.modal &&
            n.extend(!0, l.opts, {
              infobar: 0,
              buttons: 0,
              keyboard: 0,
              slideShow: 0,
              fullScreen: 0,
              closeClickOutside: 0,
            }),
          e.group.push(l);
      });
    },
    addEvents: function () {
      var e = this;
      e.removeEvents(),
        e.$refs.container
          .on("click.fb-close", "[data-fancybox-close]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.close(t);
          })
          .on("click.fb-previous", "[data-fancybox-previous]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.previous();
          })
          .on("click.fb-next", "[data-fancybox-next]", function (t) {
            t.stopPropagation(), t.preventDefault(), e.next();
          }),
        n(t).on("orientationchange.fb resize.fb", function (t) {
          u(function () {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? e.update()
              : (e.$refs.slider_wrap.hide(),
                u(function () {
                  e.$refs.slider_wrap.show(), e.update();
                }));
          });
        }),
        r.on("focusin.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null;
          !o ||
            n(t.target).hasClass("fancybox-container") ||
            n.contains(o.$refs.container[0], t.target) ||
            (t.stopPropagation(),
            o.focus(),
            a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft));
        }),
        r.on("keydown.fb", function (t) {
          var o = e.current,
            s = t.keyCode || t.which;
          if (
            o &&
            o.opts.keyboard &&
            !n(t.target).is("input") &&
            !n(t.target).is("textarea")
          ) {
            if (8 === s || 27 === s) return t.preventDefault(), void e.close(t);
            switch (s) {
              case 37:
              case 38:
                t.preventDefault(), e.previous();
                break;
              case 39:
              case 40:
                t.preventDefault(), e.next();
                break;
              case 80:
              case 32:
                t.preventDefault(),
                  e.SlideShow && (t.preventDefault(), e.SlideShow.toggle());
                break;
              case 70:
                e.FullScreen && (t.preventDefault(), e.FullScreen.toggle());
                break;
              case 71:
                e.Thumbs && (t.preventDefault(), e.Thumbs.toggle());
            }
          }
        });
    },
    removeEvents: function () {
      a.off("scroll.fb resize.fb orientationchange.fb"),
        r.off("keydown.fb focusin.fb click.fb-close"),
        this.$refs.container.off(
          "click.fb-close click.fb-previous click.fb-next"
        );
    },
    previous: function (t) {
      this.jumpTo(this.currIndex - 1, t);
    },
    next: function (t) {
      this.jumpTo(this.currIndex + 1, t);
    },
    jumpTo: function (t, e) {
      var n,
        s,
        i,
        a,
        r = this;
      if (
        ((n = r.firstRun = null === r.firstRun),
        (s = i = t = parseInt(t, 10)),
        (a = !!r.current && r.current.opts.loop),
        !r.isAnimating && (s != r.currIndex || n))
      ) {
        if (r.group.length > 1 && a)
          (s %= r.group.length),
            (s = s < 0 ? r.group.length + s : s),
            2 == r.group.length
              ? (i = t - r.currIndex + r.currPos)
              : ((i = s - r.currIndex + r.currPos),
                Math.abs(r.currPos - (i + r.group.length)) <
                Math.abs(r.currPos - i)
                  ? (i += r.group.length)
                  : Math.abs(r.currPos - (i - r.group.length)) <
                      Math.abs(r.currPos - i) && (i -= r.group.length));
        else if (!r.group[s]) return void r.update(!1, !1, e);
        r.current &&
          (r.current.$slide.removeClass(
            "fancybox-slide--current fancybox-slide--complete"
          ),
          r.updateSlide(r.current, !0)),
          (r.prevIndex = r.currIndex),
          (r.prevPos = r.currPos),
          (r.currIndex = s),
          (r.currPos = i),
          (r.current = r.createSlide(i)),
          r.group.length > 1 &&
            ((r.opts.loop || i - 1 >= 0) && r.createSlide(i - 1),
            (r.opts.loop || i + 1 < r.group.length) && r.createSlide(i + 1)),
          (r.current.isMoved = !1),
          (r.current.isComplete = !1),
          (e = parseInt(e === o ? 1.5 * r.current.opts.speed : e, 10)),
          r.trigger("beforeMove"),
          r.updateControls(),
          n &&
            (r.current.$slide.addClass("fancybox-slide--current"),
            r.$refs.container.show(),
            u(function () {
              r.$refs.bg.css(
                "transition-duration",
                r.current.opts.speed + "ms"
              ),
                r.$refs.container.addClass("fancybox-container--ready");
            })),
          r.update(!0, !1, n ? 0 : e, function () {
            r.afterMove();
          }),
          r.loadSlide(r.current),
          (n && r.current.$ghost) || r.preload();
      }
    },
    createSlide: function (t) {
      var e,
        o,
        s,
        i = this;
      if (
        ((o = t % i.group.length),
        (o = o < 0 ? i.group.length + o : o),
        !i.slides[t] && i.group[o])
      ) {
        if (i.opts.loop && i.group.length > 2)
          for (var a in i.slides)
            if (i.slides[a].index === o)
              return (
                (s = i.slides[a]),
                (s.pos = t),
                (i.slides[t] = s),
                delete i.slides[a],
                i.updateSlide(s),
                s
              );
        (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider)),
          (i.slides[t] = n.extend(!0, {}, i.group[o], {
            pos: t,
            $slide: e,
            isMoved: !1,
            isLoaded: !1,
          }));
      }
      return i.slides[t];
    },
    zoomInOut: function (t, e, o) {
      var s,
        i,
        a,
        r = this,
        c = r.current,
        l = c.$placeholder,
        u = c.opts.opacity,
        p = c.opts.$thumb,
        h = p ? p.offset() : 0,
        f = c.$slide.offset();
      return (
        !!(l && c.isMoved && h && d(p)) &&
        !("In" === t && !r.firstRun) &&
        (n.fancybox.stop(l),
        (r.isAnimating = !0),
        (s = {
          top: h.top - f.top + parseFloat(p.css("border-top-width") || 0),
          left: h.left - f.left + parseFloat(p.css("border-left-width") || 0),
          width: p.width(),
          height: p.height(),
          scaleX: 1,
          scaleY: 1,
        }),
        "auto" == u &&
          (u = Math.abs(c.width / c.height - s.width / s.height) > 0.1),
        "In" === t
          ? ((i = s),
            (a = r.getFitPos(c)),
            (a.scaleX = a.width / i.width),
            (a.scaleY = a.height / i.height),
            u && ((i.opacity = 0.1), (a.opacity = 1)))
          : ((i = n.fancybox.getTranslate(l)),
            (a = s),
            c.$ghost && (c.$ghost.show(), c.$image && c.$image.remove()),
            (i.scaleX = i.width / a.width),
            (i.scaleY = i.height / a.height),
            (i.width = a.width),
            (i.height = a.height),
            u && (a.opacity = 0)),
        r.updateCursor(a.width, a.height),
        delete a.width,
        delete a.height,
        n.fancybox.setTranslate(l, i),
        l.show(),
        r.trigger("beforeZoom" + t),
        l.css("transition", "all " + e + "ms"),
        n.fancybox.setTranslate(l, a),
        setTimeout(function () {
          var e;
          l.css("transition", "none"),
            (e = n.fancybox.getTranslate(l)),
            (e.scaleX = 1),
            (e.scaleY = 1),
            n.fancybox.setTranslate(l, e),
            r.trigger("afterZoom" + t),
            o.apply(r),
            (r.isAnimating = !1);
        }, e),
        !0)
      );
    },
    canPan: function () {
      var t = this,
        e = t.current,
        n = e.$placeholder,
        o = !1;
      return (
        n &&
          ((o = t.getFitPos(e)),
          (o =
            Math.abs(n.width() - o.width) > 1 ||
            Math.abs(n.height() - o.height) > 1)),
        o
      );
    },
    isScaledDown: function () {
      var t = this,
        e = t.current,
        o = e.$placeholder,
        s = !1;
      return (
        o &&
          ((s = n.fancybox.getTranslate(o)),
          (s = s.width < e.width || s.height < e.height)),
        s
      );
    },
    scaleToActual: function (t, e, s) {
      var i,
        a,
        r,
        c,
        l,
        u = this,
        d = u.current,
        p = d.$placeholder,
        h = parseInt(d.$slide.width(), 10),
        f = parseInt(d.$slide.height(), 10),
        g = d.width,
        b = d.height;
      p &&
        ((u.isAnimating = !0),
        (t = t === o ? 0.5 * h : t),
        (e = e === o ? 0.5 * f : e),
        (i = n.fancybox.getTranslate(p)),
        (c = g / i.width),
        (l = b / i.height),
        (a = 0.5 * h - 0.5 * g),
        (r = 0.5 * f - 0.5 * b),
        g > h &&
          ((a = i.left * c - (t * c - t)),
          a > 0 && (a = 0),
          a < h - g && (a = h - g)),
        b > f &&
          ((r = i.top * l - (e * l - e)),
          r > 0 && (r = 0),
          r < f - b && (r = f - b)),
        u.updateCursor(g, b),
        n.fancybox.animate(
          p,
          null,
          { top: r, left: a, scaleX: c, scaleY: l },
          s || d.opts.speed,
          function () {
            u.isAnimating = !1;
          }
        ));
    },
    scaleToFit: function (t) {
      var e,
        o = this,
        s = o.current,
        i = s.$placeholder;
      i &&
        ((o.isAnimating = !0),
        (e = o.getFitPos(s)),
        o.updateCursor(e.width, e.height),
        n.fancybox.animate(
          i,
          null,
          {
            top: e.top,
            left: e.left,
            scaleX: e.width / i.width(),
            scaleY: e.height / i.height(),
          },
          t || s.opts.speed,
          function () {
            o.isAnimating = !1;
          }
        ));
    },
    getFitPos: function (t) {
      var e,
        o,
        s,
        i,
        r,
        c,
        l,
        u = t.$placeholder || t.$content,
        d = t.width,
        p = t.height,
        h = t.opts.margin;
      return (
        !(!u || !u.length || (!d && !p)) &&
        ("number" === n.type(h) && (h = [h, h]),
        2 == h.length && (h = [h[0], h[1], h[0], h[1]]),
        a.width() < 800 && (h = [0, 0, 0, 0]),
        (e = parseInt(t.$slide.width(), 10) - (h[1] + h[3])),
        (o = parseInt(t.$slide.height(), 10) - (h[0] + h[2])),
        (s = Math.min(1, e / d, o / p)),
        (c = Math.floor(s * d)),
        (l = Math.floor(s * p)),
        (i = Math.floor(0.5 * (o - l)) + h[0]),
        (r = Math.floor(0.5 * (e - c)) + h[3]),
        { top: i, left: r, width: c, height: l })
      );
    },
    update: function (t, e, o, s) {
      var i,
        a = this;
      a.isAnimating !== !0 &&
        a.current &&
        ((i =
          a.current.pos * Math.floor(a.current.$slide.width()) * -1 -
          a.current.pos * a.current.opts.gutter),
        (o = parseInt(o, 10) || 0),
        n.fancybox.stop(a.$refs.slider),
        t === !1
          ? a.updateSlide(a.current, e)
          : n.each(a.slides, function (t, n) {
              a.updateSlide(n, e);
            }),
        o
          ? n.fancybox.animate(
              a.$refs.slider,
              null,
              { top: 0, left: i },
              o,
              function () {
                (a.current.isMoved = !0),
                  "function" === n.type(s) && s.apply(a);
              }
            )
          : (n.fancybox.setTranslate(a.$refs.slider, { top: 0, left: i }),
            (a.current.isMoved = !0),
            "function" === n.type(s) && s.apply(a)));
    },
    updateSlide: function (t, e) {
      var o,
        s = this,
        i = t.$placeholder;
      (t = t || s.current),
        t &&
          !s.isClosing &&
          ((o = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter),
          o !== t.leftPos &&
            (n.fancybox.setTranslate(t.$slide, { top: 0, left: o }),
            (t.leftPos = o)),
          e !== !1 &&
            i &&
            (n.fancybox.setTranslate(i, s.getFitPos(t)),
            t.pos === s.currPos && s.updateCursor()),
          t.$slide.trigger("refresh"),
          s.trigger("onUpdate", t));
    },
    updateCursor: function (t, e) {
      var n,
        s = this,
        i = s.$refs.container.removeClass(
          "fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab"
        );
      !s.isClosing &&
        s.opts.touch &&
        ((n =
          t !== o && e !== o
            ? t < s.current.width && e < s.current.height
            : s.isScaledDown()),
        n
          ? i.addClass("fancybox-controls--canzoomIn")
          : s.group.length < 2
          ? i.addClass("fancybox-controls--canzoomOut")
          : i.addClass("fancybox-controls--canGrab"));
    },
    loadSlide: function (t) {
      var e,
        o,
        s,
        i = this;
      if (t && !t.isLoaded && !t.isLoading) {
        switch (
          ((t.isLoading = !0),
          i.trigger("beforeLoad", t),
          (e = t.type),
          (o = t.$slide),
          o
            .off("refresh")
            .trigger("onReset")
            .addClass("fancybox-slide--" + (e || "unknown"))
            .addClass(t.opts.slideClass),
          e)
        ) {
          case "image":
            i.setImage(t);
            break;
          case "iframe":
            i.setIframe(t);
            break;
          case "html":
            i.setContent(t, t.content);
            break;
          case "inline":
            n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
            break;
          case "ajax":
            i.showLoading(t),
              (s = n.ajax(
                n.extend({}, t.opts.ajax.settings, {
                  url: t.src,
                  success: function (e, n) {
                    "success" === n && i.setContent(t, e);
                  },
                  error: function (e, n) {
                    e && "abort" !== n && i.setError(t);
                  },
                })
              )),
              o.one("onReset", function () {
                s.abort();
              });
            break;
          default:
            i.setError(t);
        }
        return !0;
      }
    },
    setImage: function (e) {
      var o,
        s,
        i,
        a,
        r = this,
        c = e.opts.image.srcset;
      if (e.isLoaded && !e.hasError) return void r.afterLoad(e);
      if (c) {
        (i = t.devicePixelRatio || 1),
          (a = t.innerWidth * i),
          (s = c.split(",").map(function (t) {
            var e = {};
            return (
              t
                .trim()
                .split(/\s+/)
                .forEach(function (t, n) {
                  var o = parseInt(t.substring(0, t.length - 1), 10);
                  return 0 === n
                    ? (e.url = t)
                    : void (
                        o && ((e.value = o), (e.postfix = t[t.length - 1]))
                      );
                }),
              e
            );
          })),
          s.sort(function (t, e) {
            return t.value - e.value;
          });
        for (var l = 0; l < s.length; l++) {
          var u = s[l];
          if (
            ("w" === u.postfix && u.value >= a) ||
            ("x" === u.postfix && u.value >= i)
          ) {
            o = u;
            break;
          }
        }
        !o && s.length && (o = s[s.length - 1]),
          o &&
            ((e.src = o.url),
            e.width &&
              e.height &&
              "w" == o.postfix &&
              ((e.height = (e.width / e.height) * o.value),
              (e.width = o.value)));
      }
      (e.$placeholder = n('<div class="fancybox-placeholder"></div>')
        .hide()
        .appendTo(e.$slide)),
        e.opts.preload !== !1 &&
        e.opts.width &&
        e.opts.height &&
        (e.opts.thumb || e.opts.$thumb)
          ? ((e.width = e.opts.width),
            (e.height = e.opts.height),
            (e.$ghost = n("<img />")
              .one("load error", function () {
                r.isClosing ||
                  ((n("<img/>")[0].src = e.src),
                  r.revealImage(e, function () {
                    r.setBigImage(e),
                      r.firstRun && e.index === r.currIndex && r.preload();
                  }));
              })
              .addClass("fancybox-image")
              .appendTo(e.$placeholder)
              .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
          : r.setBigImage(e);
    },
    setBigImage: function (t) {
      var e = this,
        o = n("<img />");
      (t.$image = o
        .one("error", function () {
          e.setError(t);
        })
        .one("load", function () {
          clearTimeout(t.timouts),
            (t.timouts = null),
            e.isClosing ||
              ((t.width = this.naturalWidth),
              (t.height = this.naturalHeight),
              t.opts.image.srcset &&
                o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
              e.afterLoad(t),
              t.$ghost &&
                (t.timouts = setTimeout(function () {
                  t.$ghost.hide();
                }, 350)));
        })
        .addClass("fancybox-image")
        .attr("src", t.src)
        .appendTo(t.$placeholder)),
        o[0].complete
          ? o.trigger("load")
          : o[0].error
          ? o.trigger("error")
          : (t.timouts = setTimeout(function () {
              o[0].complete || t.hasError || e.showLoading(t);
            }, 150)),
        t.opts.image.protect &&
          n('<div class="fancybox-spaceball"></div>')
            .appendTo(t.$placeholder)
            .on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            });
    },
    revealImage: function (t, e) {
      var o = this;
      return (
        (e = e || n.noop),
        "image" !== t.type || t.hasError || t.isRevealed === !0
          ? void e.apply(o)
          : ((t.isRevealed = !0),
            void (
              (t.pos === o.currPos && o.zoomInOut("In", t.opts.speed, e)) ||
              (t.$ghost && !t.isLoaded && o.updateSlide(t, !0),
              t.pos === o.currPos
                ? n.fancybox.animate(
                    t.$placeholder,
                    { opacity: 0 },
                    { opacity: 1 },
                    300,
                    e
                  )
                : t.$placeholder.show(),
              e.apply(o))
            ))
      );
    },
    setIframe: function (t) {
      var e,
        s = this,
        i = t.opts.iframe,
        a = t.$slide;
      (t.$content = n('<div class="fancybox-content"></div>')
        .css(i.css)
        .appendTo(a)),
        (e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
          .attr("scrolling", n.fancybox.isTouch ? "auto" : i.scrolling)
          .appendTo(t.$content)),
        i.preload
          ? (t.$content.addClass("fancybox-tmp"),
            s.showLoading(t),
            e.on("load.fb error.fb", function (e) {
              (this.isReady = 1), t.$slide.trigger("refresh"), s.afterLoad(t);
            }),
            a.on("refresh.fb", function () {
              var n,
                s,
                a,
                r,
                c,
                l = t.$content;
              if (1 === e[0].isReady) {
                try {
                  (n = e.contents()), (s = n.find("body"));
                } catch (t) {}
                s &&
                  s.length &&
                  (i.css.width === o || i.css.height === o) &&
                  ((a =
                    e[0].contentWindow.document.documentElement.scrollWidth),
                  (r = Math.ceil(s.outerWidth(!0) + (l.width() - a))),
                  (c = Math.ceil(s.outerHeight(!0))),
                  l.css({
                    width:
                      i.css.width === o
                        ? r + (l.outerWidth() - l.innerWidth())
                        : i.css.width,
                    height:
                      i.css.height === o
                        ? c + (l.outerHeight() - l.innerHeight())
                        : i.css.height,
                  })),
                  l.removeClass("fancybox-tmp");
              }
            }))
          : this.afterLoad(t),
        e.attr("src", t.src),
        t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl),
        a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().attr("src", "//about:blank");
          } catch (t) {}
          n(this).empty(), (t.isLoaded = !1);
        });
    },
    setContent: function (t, e) {
      var o = this;
      o.isClosing ||
        (o.hideLoading(t),
        t.$slide.empty(),
        l(e) && e.parent().length
          ? (e.data("placeholder") &&
              e.parents(".fancybox-slide").trigger("onReset"),
            e
              .data({ placeholder: n("<div></div>").hide().insertAfter(e) })
              .css("display", "inline-block"))
          : ("string" === n.type(e) &&
              ((e = n("<div>").append(e).contents()),
              3 === e[0].nodeType && (e = n("<div>").html(e))),
            t.opts.selector && (e = n("<div>").html(e).find(t.opts.selector))),
        t.$slide.one("onReset", function () {
          var o = l(e) ? e.data("placeholder") : 0;
          o && (e.hide().replaceAll(o), e.data("placeholder", null)),
            t.hasError || (n(this).empty(), (t.isLoaded = !1));
        }),
        (t.$content = n(e).appendTo(t.$slide)),
        t.opts.smallBtn === !0 &&
          t.$content
            .find(".fancybox-close-small")
            .remove()
            .end()
            .eq(0)
            .append(t.opts.closeTpl),
        this.afterLoad(t));
    },
    setError: function (t) {
      (t.hasError = !0), this.setContent(t, t.opts.errorTpl);
    },
    showLoading: function (t) {
      var e = this;
      (t = t || e.current),
        t &&
          !t.$spinner &&
          (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
    },
    hideLoading: function (t) {
      var e = this;
      (t = t || e.current),
        t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
    },
    afterMove: function () {
      var t = this,
        e = t.current,
        o = {};
      e &&
        (e.$slide.siblings().trigger("onReset"),
        n.each(t.slides, function (e, n) {
          n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1
            ? (o[n.pos] = n)
            : n && n.$slide.remove();
        }),
        (t.slides = o),
        t.trigger("afterMove"),
        e.isLoaded && t.complete());
    },
    afterLoad: function (t) {
      var e = this;
      e.isClosing ||
        ((t.isLoading = !1),
        (t.isLoaded = !0),
        e.trigger("afterLoad", t),
        e.hideLoading(t),
        t.$ghost || e.updateSlide(t, !0),
        t.index === e.currIndex && t.isMoved
          ? e.complete()
          : t.$ghost || e.revealImage(t));
    },
    complete: function () {
      var t = this,
        e = t.current;
      t.revealImage(e, function () {
        (e.isComplete = !0),
          e.$slide.addClass("fancybox-slide--complete"),
          t.updateCursor(),
          t.trigger("onComplete"),
          e.opts.focus &&
            "image" !== e.type &&
            "iframe" !== e.type &&
            t.focus();
      });
    },
    preload: function () {
      var t,
        e,
        n = this;
      n.group.length < 2 ||
        ((t = n.slides[n.currPos + 1]),
        (e = n.slides[n.currPos - 1]),
        t && "image" === t.type && n.loadSlide(t),
        e && "image" === e.type && n.loadSlide(e));
    },
    focus: function () {
      var t,
        e = this.current;
      (t =
        e && e.isComplete
          ? e.$slide
              .find('button,:input,[tabindex],a:not(".disabled")')
              .filter(":visible:first")
          : null),
        (t && t.length) || (t = this.$refs.container),
        t.focus(),
        this.$refs.slider_wrap.scrollLeft(0),
        e && e.$slide.scrollTop(0);
    },
    activate: function () {
      var t = this;
      n(".fancybox-container").each(function () {
        var e = n(this).data("FancyBox");
        e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
      }),
        t.current &&
          (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body),
          t.updateControls()),
        t.trigger("onActivate"),
        t.addEvents();
    },
    close: function (t) {
      var e = this,
        o = e.current,
        s = o.opts.speed,
        i = n.proxy(function () {
          e.cleanUp(t);
        }, this);
      return (
        !e.isAnimating &&
        !e.isClosing &&
        (e.trigger("beforeClose", t) === !1
          ? (n.fancybox.stop(e.$refs.slider),
            void u(function () {
              e.update(!0, !0, 150);
            }))
          : ((e.isClosing = !0),
            o.timouts && clearTimeout(o.timouts),
            t !== !0 && n.fancybox.stop(e.$refs.slider),
            e.$refs.container
              .removeClass("fancybox-container--active")
              .addClass("fancybox-container--closing"),
            o.$slide
              .removeClass("fancybox-slide--complete")
              .siblings()
              .remove(),
            o.isMoved || o.$slide.css("overflow", "visible"),
            e.removeEvents(),
            e.hideLoading(o),
            e.hideControls(),
            e.updateCursor(),
            e.$refs.bg.css("transition-duration", s + "ms"),
            this.$refs.container.removeClass("fancybox-container--ready"),
            void (t === !0
              ? setTimeout(i, s)
              : e.zoomInOut("Out", s, i) ||
                n.fancybox.animate(
                  e.$refs.container,
                  null,
                  { opacity: 0 },
                  s,
                  "easeInSine",
                  i
                ))))
      );
    },
    cleanUp: function (t) {
      var e,
        o = this;
      o.$refs.slider.children().trigger("onReset"),
        o.$refs.container.empty().remove(),
        o.trigger("afterClose", t),
        (o.current = null),
        (e = n.fancybox.getInstance()),
        e
          ? e.activate()
          : (n("html").removeClass("fancybox-enabled"),
            n("body").removeAttr("style"),
            a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
            n("#fancybox-noscroll").remove()),
        o.$lastFocus && o.$lastFocus.focus();
    },
    trigger: function (t, o) {
      var s,
        i = Array.prototype.slice.call(arguments, 1),
        a = this,
        r = o && o.opts ? o : a.current;
      return (
        r ? i.unshift(r) : (r = a),
        i.unshift(a),
        n.isFunction(r.opts[t]) && (s = r.opts[t].apply(r, i)),
        s === !1
          ? s
          : void ("afterClose" === t
              ? n(e).trigger(t + ".fb", i)
              : a.$refs.container.trigger(t + ".fb", i))
      );
    },
    toggleControls: function (t) {
      this.isHiddenControls ? this.updateControls(t) : this.hideControls();
    },
    hideControls: function () {
      (this.isHiddenControls = !0),
        this.$refs.container.removeClass("fancybox-show-controls"),
        this.$refs.container.removeClass("fancybox-show-caption");
    },
    updateControls: function (t) {
      var e = this,
        o = e.$refs.container,
        s = e.$refs.caption,
        i = e.current,
        a = i.index,
        r = i.opts,
        c = r.caption;
      (this.isHiddenControls && t !== !0) ||
        ((this.isHiddenControls = !1),
        o
          .addClass("fancybox-show-controls")
          .toggleClass(
            "fancybox-show-infobar",
            !!r.infobar && e.group.length > 1
          )
          .toggleClass("fancybox-show-buttons", !!r.buttons)
          .toggleClass("fancybox-is-modal", !!r.modal),
        n(".fancybox-button--left", o).toggleClass(
          "fancybox-button--disabled",
          !r.loop && a <= 0
        ),
        n(".fancybox-button--right", o).toggleClass(
          "fancybox-button--disabled",
          !r.loop && a >= e.group.length - 1
        ),
        n(".fancybox-button--play", o).toggle(
          !!(r.slideShow && e.group.length > 1)
        ),
        n(".fancybox-button--close", o).toggle(!!r.closeBtn),
        n(".js-fancybox-count", o).html(e.group.length),
        n(".js-fancybox-index", o).html(a + 1),
        i.$slide.trigger("refresh"),
        s && s.empty(),
        c && c.length
          ? (s.html(c),
            this.$refs.container.addClass("fancybox-show-caption "),
            (e.$caption = s))
          : this.$refs.container.removeClass("fancybox-show-caption"));
    },
  }),
    (n.fancybox = {
      version: "3.0.47",
      defaults: i,
      getInstance: function (t) {
        var e = n(
            '.fancybox-container:not(".fancybox-container--closing"):first'
          ).data("FancyBox"),
          o = Array.prototype.slice.call(arguments, 1);
        return (
          e instanceof p &&
          ("string" === n.type(t)
            ? e[t].apply(e, o)
            : "function" === n.type(t) && t.apply(e, o),
          e)
        );
      },
      open: function (t, e, n) {
        return new p(t, e, n);
      },
      close: function (t) {
        var e = this.getInstance();
        e && (e.close(), t === !0 && this.close());
      },
      isTouch:
        e.createTouch !== o &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      use3d: (function () {
        var n = e.createElement("div");
        return (
          t.getComputedStyle(n).getPropertyValue("transform") &&
          !(e.documentMode && e.documentMode <= 11)
        );
      })(),
      getTranslate: function (t) {
        var e, n;
        return (
          !(!t || !t.length) &&
          ((e = t.get(0).getBoundingClientRect()),
          (n = t.eq(0).css("transform")),
          n && n.indexOf("matrix") !== -1
            ? ((n = n.split("(")[1]), (n = n.split(")")[0]), (n = n.split(",")))
            : (n = []),
          n.length
            ? ((n =
                n.length > 10
                  ? [n[13], n[12], n[0], n[5]]
                  : [n[5], n[4], n[0], n[3]]),
              (n = n.map(parseFloat)))
            : (n = [0, 0, 1, 1]),
          {
            top: n[0],
            left: n[1],
            scaleX: n[2],
            scaleY: n[3],
            opacity: parseFloat(t.css("opacity")),
            width: e.width,
            height: e.height,
          })
        );
      },
      setTranslate: function (t, e) {
        var n = "",
          s = {};
        if (t && e)
          return (
            (e.left === o && e.top === o) ||
              ((n =
                (e.left === o ? t.position().top : e.left) +
                "px, " +
                (e.top === o ? t.position().top : e.top) +
                "px"),
              (n = this.use3d
                ? "translate3d(" + n + ", 0px)"
                : "translate(" + n + ")")),
            e.scaleX !== o &&
              e.scaleY !== o &&
              (n =
                (n.length ? n + " " : "") +
                "scale(" +
                e.scaleX +
                ", " +
                e.scaleY +
                ")"),
            n.length && (s.transform = n),
            e.opacity !== o && (s.opacity = e.opacity),
            e.width !== o && (s.width = e.width),
            e.height !== o && (s.height = e.height),
            t.css(s)
          );
      },
      easing: {
        easeOutCubic: function (t, e, n, o) {
          return n * ((t = t / o - 1) * t * t + 1) + e;
        },
        easeInCubic: function (t, e, n, o) {
          return n * (t /= o) * t * t + e;
        },
        easeOutSine: function (t, e, n, o) {
          return n * Math.sin((t / o) * (Math.PI / 2)) + e;
        },
        easeInSine: function (t, e, n, o) {
          return -n * Math.cos((t / o) * (Math.PI / 2)) + n + e;
        },
      },
      stop: function (t) {
        t.removeData("animateID");
      },
      animate: function (t, e, s, i, a, r) {
        var c,
          l,
          d,
          p = this,
          h = null,
          f = 0,
          g = function () {
            s.scaleX !== o &&
              s.scaleY !== o &&
              e &&
              e.width !== o &&
              e.height !== o &&
              ((s.width = e.width * s.scaleX),
              (s.height = e.height * s.scaleY),
              (s.scaleX = 1),
              (s.scaleY = 1)),
              p.setTranslate(t, s),
              r();
          },
          b = function (n) {
            if (((c = []), (l = 0), t.length && t.data("animateID") === d)) {
              if (
                ((n = n || Date.now()),
                h && (l = n - h),
                (h = n),
                (f += l),
                f >= i)
              )
                return void g();
              for (var r in s)
                s.hasOwnProperty(r) &&
                  e[r] !== o &&
                  (e[r] == s[r]
                    ? (c[r] = s[r])
                    : (c[r] = p.easing[a](f, e[r], s[r] - e[r], i)));
              p.setTranslate(t, c), u(b);
            }
          };
        (p.animateID = d = p.animateID === o ? 1 : p.animateID + 1),
          t.data("animateID", d),
          r === o && "function" == n.type(a) && ((r = a), (a = o)),
          a || (a = "easeOutCubic"),
          (r = r || n.noop),
          e ? this.setTranslate(t, e) : (e = this.getTranslate(t)),
          i ? (t.show(), u(b)) : g();
      },
    }),
    (n.fn.fancybox = function (t) {
      return (
        this.off("click.fb-start").on(
          "click.fb-start",
          { items: this, options: t || {} },
          s
        ),
        this
      );
    }),
    n(e).on("click.fb-start", "[data-fancybox]", s);
})(window, document, window.jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      },
      n = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1",
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1",
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        google_maps: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
      };
    t(document).on("onInit.fb", function (o, s) {
      t.each(s.group, function (o, s) {
        var i,
          a,
          r,
          c,
          l,
          u,
          d = s.src || "",
          p = !1;
        s.type ||
          (t.each(n, function (n, o) {
            if (((a = d.match(o.matcher)), (l = {}), (u = n), a)) {
              if (((p = o.type), o.paramPlace && a[o.paramPlace])) {
                (c = a[o.paramPlace]),
                  "?" == c[0] && (c = c.substring(1)),
                  (c = c.split("&"));
                for (var h = 0; h < c.length; ++h) {
                  var f = c[h].split("=", 2);
                  2 == f.length &&
                    (l[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")));
                }
              }
              return (
                (r = t.extend(!0, {}, o.params, s.opts[n], l)),
                (d =
                  "function" === t.type(o.url)
                    ? o.url.call(this, a, r, s)
                    : e(o.url, a, r)),
                (i =
                  "function" === t.type(o.thumb)
                    ? o.thumb.call(this, a, r, s)
                    : e(o.thumb, a)),
                "vimeo" === u && (d = d.replace("&%23", "#")),
                !1
              );
            }
          }),
          p
            ? ((s.src = d),
              (s.type = p),
              s.opts.thumb ||
                (s.opts.$thumb && s.opts.$thumb.length) ||
                (s.opts.thumb = i),
              "iframe" === p &&
                (t.extend(!0, s.opts, {
                  iframe: { preload: !1, scrolling: "no" },
                  smallBtn: !1,
                  closeBtn: !0,
                  fullScreen: !1,
                  slideShow: !1,
                }),
                (s.opts.slideClass += " fancybox-slide--video")))
            : (s.type = "iframe"));
      });
    });
  })(window.jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          function (e) {
            t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      s = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      i = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      a = function (t) {
        return (
          t.is("a") ||
          t.is("button") ||
          t.is("input") ||
          t.is("select") ||
          t.is("textarea") ||
          n.isFunction(t.get(0).onclick)
        );
      },
      r = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          s =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return s || i;
      },
      c = function (t) {
        for (var e = !1; ; ) {
          if ((e = r(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-slider") || t.is("body"))
          )
            break;
        }
        return e;
      },
      l = function (t) {
        var e = this;
        (e.instance = t),
          (e.$wrap = t.$refs.slider_wrap),
          (e.$slider = t.$refs.slider),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$wrap.on("touchstart.fb mousedown.fb", n.proxy(e, "ontouchstart"));
      };
    (l.prototype.destroy = function () {
      this.$wrap.off(
        "touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb"
      );
    }),
      (l.prototype.ontouchstart = function (e) {
        var o = this,
          r = n(e.target),
          l = o.instance,
          u = l.current,
          d = u.$content || u.$placeholder;
        return (
          (o.startPoints = s(e)),
          (o.$target = r),
          (o.$content = d),
          (o.canvasWidth = Math.round(u.$slide[0].clientWidth)),
          (o.canvasHeight = Math.round(u.$slide[0].clientHeight)),
          (o.startEvent = e),
          e.originalEvent.clientX > o.canvasWidth + u.$slide.offset().left ||
            (a(r) || a(r.parent()) || c(r)
              ? void 0
              : u.opts.touch
              ? void (
                  (e.originalEvent && 2 == e.originalEvent.button) ||
                  (e.stopPropagation(),
                  e.preventDefault(),
                  !u ||
                    o.instance.isAnimating ||
                    o.instance.isClosing ||
                    !o.startPoints ||
                    (o.startPoints.length > 1 && !u.isMoved) ||
                    (o.$wrap.off(
                      "touchmove.fb mousemove.fb",
                      n.proxy(o, "ontouchmove")
                    ),
                    o.$wrap.off(
                      "touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",
                      n.proxy(o, "ontouchend")
                    ),
                    o.$wrap.on(
                      "touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",
                      n.proxy(o, "ontouchend")
                    ),
                    o.$wrap.on(
                      "touchmove.fb mousemove.fb",
                      n.proxy(o, "ontouchmove")
                    ),
                    (o.startTime = new Date().getTime()),
                    (o.distanceX = o.distanceY = o.distance = 0),
                    (o.canTap = !1),
                    (o.isPanning = !1),
                    (o.isSwiping = !1),
                    (o.isZooming = !1),
                    (o.sliderStartPos = n.fancybox.getTranslate(o.$slider)),
                    (o.contentStartPos = n.fancybox.getTranslate(o.$content)),
                    (o.contentLastPos = null),
                    1 !== o.startPoints.length ||
                      o.isZooming ||
                      ((o.canTap = u.isMoved),
                      "image" === u.type &&
                      (o.contentStartPos.width > o.canvasWidth + 1 ||
                        o.contentStartPos.height > o.canvasHeight + 1)
                        ? (n.fancybox.stop(o.$content), (o.isPanning = !0))
                        : (n.fancybox.stop(o.$slider), (o.isSwiping = !0)),
                      o.$container.addClass("fancybox-controls--isGrabbing")),
                    2 === o.startPoints.length &&
                      u.isMoved &&
                      !u.hasError &&
                      "image" === u.type &&
                      (u.isLoaded || u.$ghost) &&
                      ((o.isZooming = !0),
                      (o.isSwiping = !1),
                      (o.isPanning = !1),
                      n.fancybox.stop(o.$content),
                      (o.centerPointStartX =
                        0.5 * (o.startPoints[0].x + o.startPoints[1].x) -
                        n(t).scrollLeft()),
                      (o.centerPointStartY =
                        0.5 * (o.startPoints[0].y + o.startPoints[1].y) -
                        n(t).scrollTop()),
                      (o.percentageOfImageAtPinchPointX =
                        (o.centerPointStartX - o.contentStartPos.left) /
                        o.contentStartPos.width),
                      (o.percentageOfImageAtPinchPointY =
                        (o.centerPointStartY - o.contentStartPos.top) /
                        o.contentStartPos.height),
                      (o.startDistanceBetweenFingers = i(
                        o.startPoints[0],
                        o.startPoints[1]
                      )))))
                )
              : ((o.endPoints = o.startPoints), o.ontap()))
        );
      }),
      (l.prototype.ontouchmove = function (t) {
        var e = this;
        t.preventDefault(),
          (e.newPoints = s(t)),
          e.newPoints &&
            e.newPoints.length &&
            ((e.distanceX = i(e.newPoints[0], e.startPoints[0], "x")),
            (e.distanceY = i(e.newPoints[0], e.startPoints[0], "y")),
            (e.distance = i(e.newPoints[0], e.startPoints[0])),
            e.distance > 0 &&
              (e.isSwiping
                ? e.onSwipe()
                : e.isPanning
                ? e.onPan()
                : e.isZooming && e.onZoom()));
      }),
      (l.prototype.onSwipe = function () {
        var e,
          s = this,
          i = s.isSwiping,
          a = s.sliderStartPos.left;
        i === !0
          ? Math.abs(s.distance) > 10 &&
            (s.instance.group.length < 2
              ? (s.isSwiping = "y")
              : !s.instance.current.isMoved ||
                s.instance.opts.touch.vertical === !1 ||
                ("auto" === s.instance.opts.touch.vertical &&
                  n(t).width() > 800)
              ? (s.isSwiping = "x")
              : ((e = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = e > 45 && e < 135 ? "y" : "x")),
            (s.canTap = !1),
            (s.instance.current.isMoved = !1),
            (s.startPoints = s.newPoints))
          : ("x" == i &&
              (!s.instance.current.opts.loop &&
              0 === s.instance.current.index &&
              s.distanceX > 0
                ? (a += Math.pow(s.distanceX, 0.8))
                : !s.instance.current.opts.loop &&
                  s.instance.current.index === s.instance.group.length - 1 &&
                  s.distanceX < 0
                ? (a -= Math.pow(-s.distanceX, 0.8))
                : (a += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY,
              left: a,
            }),
            o(function () {
              n.fancybox.setTranslate(s.$slider, s.sliderLastPos);
            }));
      }),
      (l.prototype.onPan = function () {
        var t,
          e,
          s,
          i = this;
        (i.canTap = !1),
          (t =
            i.contentStartPos.width > i.canvasWidth
              ? i.contentStartPos.left + i.distanceX
              : i.contentStartPos.left),
          (e = i.contentStartPos.top + i.distanceY),
          (s = i.limitMovement(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (s.scaleX = i.contentStartPos.scaleX),
          (s.scaleY = i.contentStartPos.scaleY),
          (i.contentLastPos = s),
          o(function () {
            n.fancybox.setTranslate(i.$content, i.contentLastPos);
          });
      }),
      (l.prototype.limitMovement = function (t, e, n, o) {
        var s,
          i,
          a,
          r,
          c = this,
          l = c.canvasWidth,
          u = c.canvasHeight,
          d = c.contentStartPos.left,
          p = c.contentStartPos.top,
          h = c.distanceX,
          f = c.distanceY;
        return (
          (s = Math.max(0, 0.5 * l - 0.5 * n)),
          (i = Math.max(0, 0.5 * u - 0.5 * o)),
          (a = Math.min(l - n, 0.5 * l - 0.5 * n)),
          (r = Math.min(u - o, 0.5 * u - 0.5 * o)),
          n > l &&
            (h > 0 && t > s && (t = s - 1 + Math.pow(-s + d + h, 0.8) || 0),
            h < 0 && t < a && (t = a + 1 - Math.pow(a - d - h, 0.8) || 0)),
          o > u &&
            (f > 0 && e > i && (e = i - 1 + Math.pow(-i + p + f, 0.8) || 0),
            f < 0 && e < r && (e = r + 1 - Math.pow(r - p - f, 0.8) || 0)),
          { top: e, left: t }
        );
      }),
      (l.prototype.limitPosition = function (t, e, n, o) {
        var s = this,
          i = s.canvasWidth,
          a = s.canvasHeight;
        return (
          n > i
            ? ((t = t > 0 ? 0 : t), (t = t < i - n ? i - n : t))
            : (t = Math.max(0, i / 2 - n / 2)),
          o > a
            ? ((e = e > 0 ? 0 : e), (e = e < a - o ? a - o : e))
            : (e = Math.max(0, a / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (l.prototype.onZoom = function () {
        var e = this,
          s = e.contentStartPos.width,
          a = e.contentStartPos.height,
          r = e.contentStartPos.left,
          c = e.contentStartPos.top,
          l = i(e.newPoints[0], e.newPoints[1]),
          u = l / e.startDistanceBetweenFingers,
          d = Math.floor(s * u),
          p = Math.floor(a * u),
          h = (s - d) * e.percentageOfImageAtPinchPointX,
          f = (a - p) * e.percentageOfImageAtPinchPointY,
          g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          b = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          m = g - e.centerPointStartX,
          y = b - e.centerPointStartY,
          v = r + (h + m),
          x = c + (f + y),
          w = {
            top: x,
            left: v,
            scaleX: e.contentStartPos.scaleX * u,
            scaleY: e.contentStartPos.scaleY * u,
          };
        (e.canTap = !1),
          (e.newWidth = d),
          (e.newHeight = p),
          (e.contentLastPos = w),
          o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          });
      }),
      (l.prototype.ontouchend = function (t) {
        var e = this,
          o = e.instance.current,
          i = Math.max(new Date().getTime() - e.startTime, 1),
          a = e.isSwiping,
          r = e.isPanning,
          c = e.isZooming;
        return (
          (e.endPoints = s(t)),
          e.$container.removeClass("fancybox-controls--isGrabbing"),
          e.$wrap.off(
            "touchmove.fb mousemove.fb",
            n.proxy(this, "ontouchmove")
          ),
          e.$wrap.off(
            "touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",
            n.proxy(this, "ontouchend")
          ),
          (e.isSwiping = !1),
          (e.isPanning = !1),
          (e.isZooming = !1),
          e.canTap
            ? e.ontap()
            : ((e.velocityX = (e.distanceX / i) * 0.5),
              (e.velocityY = (e.distanceY / i) * 0.5),
              (e.speed = o.opts.speed || 330),
              (e.speedX = Math.max(
                0.75 * e.speed,
                Math.min(1.5 * e.speed, (1 / Math.abs(e.velocityX)) * e.speed)
              )),
              (e.speedY = Math.max(
                0.75 * e.speed,
                Math.min(1.5 * e.speed, (1 / Math.abs(e.velocityY)) * e.speed)
              )),
              void (r ? e.endPanning() : c ? e.endZooming() : e.endSwiping(a)))
        );
      }),
      (l.prototype.endSwiping = function (t) {
        var e = this;
        "y" == t && Math.abs(e.distanceY) > 50
          ? (n.fancybox.animate(
              e.$slider,
              null,
              {
                top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                left: e.sliderStartPos.left,
                opacity: 0,
              },
              e.speedY
            ),
            e.instance.close(!0))
          : "x" == t && e.distanceX > 50
          ? e.instance.previous(e.speedX)
          : "x" == t && e.distanceX < -50
          ? e.instance.next(e.speedX)
          : e.instance.update(!1, !0, 150);
      }),
      (l.prototype.endPanning = function () {
        var t,
          e,
          o,
          s = this;
        s.contentLastPos &&
          ((t = s.contentLastPos.left + s.velocityX * s.speed * 2),
          (e = s.contentLastPos.top + s.velocityY * s.speed * 2),
          (o = s.limitPosition(
            t,
            e,
            s.contentStartPos.width,
            s.contentStartPos.height
          )),
          (o.width = s.contentStartPos.width),
          (o.height = s.contentStartPos.height),
          n.fancybox.animate(s.$content, null, o, s.speed, "easeOutSine"));
      }),
      (l.prototype.endZooming = function () {
        var t,
          e,
          o,
          s,
          i = this,
          a = i.instance.current,
          r = i.newWidth,
          c = i.newHeight;
        i.contentLastPos &&
          ((t = i.contentLastPos.left),
          (e = i.contentLastPos.top),
          (s = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(i.$content, s),
          r < i.canvasWidth && c < i.canvasHeight
            ? i.instance.scaleToFit(150)
            : r > a.width || c > a.height
            ? i.instance.scaleToActual(
                i.centerPointStartX,
                i.centerPointStartY,
                150
              )
            : ((o = i.limitPosition(t, e, r, c)),
              n.fancybox.animate(i.$content, null, o, i.speed, "easeOutSine")));
      }),
      (l.prototype.ontap = function () {
        var t = this,
          e = t.instance,
          o = e.current,
          s = t.endPoints[0].x,
          i = t.endPoints[0].y;
        if (
          ((s -= t.$wrap.offset().left),
          (i -= t.$wrap.offset().top),
          e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(),
          !n.fancybox.isTouch)
        )
          return o.opts.closeClickOutside && t.$target.is(".fancybox-slide")
            ? void e.close(t.startEvent)
            : void (
                "image" == o.type &&
                o.isMoved &&
                (e.canPan()
                  ? e.scaleToFit()
                  : e.isScaledDown()
                  ? e.scaleToActual(s, i)
                  : e.group.length < 2 && e.close(t.startEvent))
              );
        if (t.tapped) {
          if (
            (clearTimeout(t.tapped),
            (t.tapped = null),
            Math.abs(s - t.x) > 50 || Math.abs(i - t.y) > 50 || !o.isMoved)
          )
            return this;
          "image" == o.type &&
            (o.isLoaded || o.$ghost) &&
            (e.canPan()
              ? e.scaleToFit()
              : e.isScaledDown() && e.scaleToActual(s, i));
        } else
          (t.x = s),
            (t.y = i),
            (t.tapped = setTimeout(function () {
              (t.tapped = null), e.toggleControls(!0);
            }, 300));
        return this;
      }),
      n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new l(e));
      }),
      n(e).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
  })(window, document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      speed: 3e3,
      init: function () {
        var t = this;
        (t.$button = e(
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>'
        ).appendTo(t.instance.$refs.buttons)),
          t.instance.$refs.container.on(
            "click",
            "[data-fancybox-play]",
            function () {
              t.toggle();
            }
          );
      },
      set: function () {
        var t = this;
        t.instance &&
        t.instance.current &&
        (t.instance.current.opts.loop ||
          t.instance.currIndex < t.instance.group.length - 1)
          ? (t.timer = setTimeout(function () {
              t.instance.next();
            }, t.instance.current.opts.slideShow.speed || t.speed))
          : t.stop();
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function () {
        var t = this;
        t.stop(),
          t.instance &&
            t.instance.current &&
            (t.instance.current.opts.loop ||
              t.instance.currIndex < t.instance.group.length - 1) &&
            (t.instance.$refs.container.on({
              "beforeLoad.fb.player": e.proxy(t, "clear"),
              "onComplete.fb.player": e.proxy(t, "set"),
            }),
            (t.isActive = !0),
            t.instance.current.isComplete && t.set(),
            t.instance.$refs.container.trigger("onPlayStart"),
            t.$button.addClass("fancybox-button--pause"));
      },
      stop: function () {
        var t = this;
        t.clear(),
          t.instance.$refs.container.trigger("onPlayEnd").off(".player"),
          t.$button.removeClass("fancybox-button--pause"),
          (t.isActive = !1);
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on("onInit.fb", function (t, e) {
        e &&
          e.group.length > 1 &&
          e.opts.slideShow &&
          !e.SlideShow &&
          (e.SlideShow = new n(e));
      }),
      e(t).on("beforeClose.fb onDeactivate.fb", function (t, e) {
        e && e.SlideShow && e.SlideShow.stop();
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var e,
        n,
        o,
        s = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        i = {};
      for (n = 0; n < s.length; n++)
        if (((e = s[n]), e && e[1] in t)) {
          for (o = 0; o < e.length; o++) i[s[0][o]] = e[o];
          return i;
        }
      return !1;
    })();
    if (n) {
      var o = {
        request: function (e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (t) {
          this.isFullscreen() ? this.exit() : this.request(t);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e(t).on({
        "onInit.fb": function (t, n) {
          var s;
          n &&
            n.opts.fullScreen &&
            !n.FullScreen &&
            ((s = n.$refs.container),
            (n.$refs.button_fs = e(
              '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>'
            ).appendTo(n.$refs.buttons)),
            s.on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle(s[0]);
              }
            ),
            n.opts.fullScreen.requestOnStart === !0 && o.request(s[0]));
        },
        "beforeMove.fb": function (t, e) {
          e &&
            e.$refs.button_fs &&
            e.$refs.button_fs.toggle(!!e.current.opts.fullScreen);
        },
        "beforeClose.fb": function () {
          o.exit();
        },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = e.fancybox.getInstance(),
            n = t ? t.current.$placeholder : null;
          n &&
            (n.css("transition", "none"),
            (t.isAnimating = !1),
            t.update(!0, !0, 0));
        });
    }
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      init: function () {
        var t = this;
        t.$button = e(
          '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>'
        )
          .appendTo(this.instance.$refs.buttons)
          .on("touchend click", function (e) {
            e.stopPropagation(), e.preventDefault(), t.toggle();
          });
      },
      create: function () {
        var t,
          n,
          o = this.instance;
        (this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(
          o.$refs.container
        )),
          (t = "<ul>"),
          e.each(o.group, function (e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
              n || "image" !== o.type || (n = o.src),
              n &&
                n.length &&
                (t +=
                  '<li data-index="' +
                  e +
                  '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                  n +
                  '" /></li>');
          }),
          (t += "</ul>"),
          (this.$list = e(t)
            .appendTo(this.$grid)
            .on("click touchstart", "li", function () {
              o.jumpTo(e(this).data("index"));
            })),
          this.$list
            .find("img")
            .hide()
            .one("load", function () {
              var t,
                n,
                o,
                s,
                i = e(this).parent().removeClass("fancybox-thumbs-loading"),
                a = i.outerWidth(),
                r = i.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / a),
                (s = n / r),
                o >= 1 &&
                  s >= 1 &&
                  (o > s ? ((t /= s), (n = r)) : ((t = a), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(0.3 * r - 0.3 * n)),
                    "margin-left": Math.min(0, Math.floor(0.5 * a - 0.5 * t)),
                  })
                  .show();
            })
            .each(function () {
              this.src = e(this).data("src");
            });
      },
      focus: function () {
        this.instance.current &&
          this.$list
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")
            .focus();
      },
      close: function () {
        this.$grid.hide();
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-container--thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(), this.$grid.show(), this.focus())
            : this.$grid && this.$grid.hide(),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        this.isVisible ? this.hide() : this.show();
      },
    }),
      e(t).on("onInit.fb", function (t, e) {
        var o = e.group[0],
          s = e.group[1];
        e.opts.thumbs &&
          !e.Thumbs &&
          e.group.length > 1 &&
          ("image" == o.type || o.opts.thumb || o.opts.$thumb) &&
          ("image" == s.type || s.opts.thumb || s.opts.$thumb) &&
          (e.Thumbs = new n(e));
      }),
      e(t).on("beforeMove.fb", function (t, e, n) {
        var o = e && e.Thumbs;
        o &&
          (n.modal
            ? (o.$button.hide(), o.hide())
            : (e.opts.thumbs.showOnStart === !0 && e.firstRun && o.show(),
              o.$button.show(),
              o.isVisible && o.focus()));
      }),
      e(t).on("beforeClose.fb", function (t, e) {
        e &&
          e.Thumbs &&
          (e.Thumbs.isVisible &&
            e.opts.thumbs.hideOnClosing !== !1 &&
            e.Thumbs.close(),
          (e.Thumbs = null));
      });
  })(document, window.jQuery),
  (function (t, e, n) {
    "use strict";
    function o() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        s = n.join("-");
      return o < 1 && (o = 1), { hash: t, index: o, gallery: s };
    }
    function s(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )),
        e.length
          ? e.trigger("click")
          : n("#" + n.escapeSelector(t.gallery)).trigger("click"));
    }
    function i(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        e.$orig ? e.$orig.data("fancybox") : e.hash || "")
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function (t, e) {
            return e
              ? "\0" === t
                ? "ï¿½"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          };
        return (t + "").replace(e, n);
      });
    var a = null;
    n(function () {
      setTimeout(function () {
        n.fancybox.defaults.hash !== !1 &&
          (n(e).on("hashchange.fb", function () {
            var t = o();
            n.fancybox.getInstance()
              ? a &&
                a !== t.gallery + "-" + t.index &&
                ((a = null), n.fancybox.close())
              : "" !== t.gallery && s(t);
          }),
          n(t).on({
            "onInit.fb": function (t, e) {
              var n = o(),
                s = i(e);
              s && n.gallery && s == n.gallery && (e.currIndex = n.index - 1);
            },
            "beforeMove.fb": function (n, o, s) {
              var r = i(o);
              r &&
                "" !== r &&
                (e.location.hash.indexOf(r) < 0 &&
                  (o.opts.origHash = e.location.hash),
                (a = r + (o.group.length > 1 ? "-" + (s.index + 1) : "")),
                "pushState" in history
                  ? history.pushState(
                      "",
                      t.title,
                      e.location.pathname + e.location.search + "#" + a
                    )
                  : (e.location.hash = a));
            },
            "beforeClose.fb": function (n, o, s) {
              var r = i(o),
                c = o && o.opts.origHash ? o.opts.origHash : "";
              r &&
                "" !== r &&
                ("pushState" in history
                  ? history.pushState(
                      "",
                      t.title,
                      e.location.pathname + e.location.search + c
                    )
                  : (e.location.hash = c)),
                (a = null);
            },
          }),
          s(o()));
      }, 50);
    });
  })(document, window, window.jQuery);
/*!
     DataTables 1.10.12
     Â©2008-2015 SpryMedia Ltd - datatables.net/license
    */
(function (h) {
  "function" === typeof define && define.amd
    ? define(["jquery"], function (D) {
        return h(D, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (D, I) {
        D || (D = window);
        I ||
          (I =
            "undefined" !== typeof window
              ? require("jquery")
              : require("jquery")(D));
        return h(I, D, D.document);
      })
    : h(jQuery, window, document);
})(function (h, D, I, k) {
  function X(a) {
    var b,
      c,
      d = {};
    h.each(a, function (e) {
      if (
        (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")
      )
        (c = e.replace(b[0], b[2].toLowerCase())),
          (d[c] = e),
          "o" === b[1] && X(a[e]);
    });
    a._hungarianMap = d;
  }
  function K(a, b, c) {
    a._hungarianMap || X(a);
    var d;
    h.each(b, function (e) {
      d = a._hungarianMap[e];
      if (d !== k && (c || b[d] === k))
        "o" === d.charAt(0)
          ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), K(a[d], b[d], c))
          : (b[d] = b[e]);
    });
  }
  function Da(a) {
    var b = m.defaults.oLanguage,
      c = a.sZeroRecords;
    !a.sEmptyTable &&
      c &&
      "No data available in table" === b.sEmptyTable &&
      E(a, a, "sZeroRecords", "sEmptyTable");
    !a.sLoadingRecords &&
      c &&
      "Loading..." === b.sLoadingRecords &&
      E(a, a, "sZeroRecords", "sLoadingRecords");
    a.sInfoThousands && (a.sThousands = a.sInfoThousands);
    (a = a.sDecimal) && db(a);
  }
  function eb(a) {
    A(a, "ordering", "bSort");
    A(a, "orderMulti", "bSortMulti");
    A(a, "orderClasses", "bSortClasses");
    A(a, "orderCellsTop", "bSortCellsTop");
    A(a, "order", "aaSorting");
    A(a, "orderFixed", "aaSortingFixed");
    A(a, "paging", "bPaginate");
    A(a, "pagingType", "sPaginationType");
    A(a, "pageLength", "iDisplayLength");
    A(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if ((a = a.aoSearchCols))
      for (var b = 0, c = a.length; b < c; b++)
        a[b] && K(m.models.oSearch, a[b]);
  }
  function fb(a) {
    A(a, "orderable", "bSortable");
    A(a, "orderData", "aDataSort");
    A(a, "orderSequence", "asSorting");
    A(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    b && !h.isArray(b) && (a.aDataSort = [b]);
  }
  function gb(a) {
    if (!m.__browser) {
      var b = {};
      m.__browser = b;
      var c = h("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: 0,
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            h("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(h("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    h.extend(a.oBrowser, m.__browser);
    a.oScroll.iBarWidth = m.__browser.barWidth;
  }
  function hb(a, b, c, d, e, f) {
    var g,
      j = !1;
    c !== k && ((g = c), (j = !0));
    for (; d !== e; )
      a.hasOwnProperty(d) &&
        ((g = j ? b(g, a[d], d, a) : a[d]), (j = !0), (d += f));
    return g;
  }
  function Ea(a, b) {
    var c = m.defaults.column,
      d = a.aoColumns.length,
      c = h.extend({}, m.models.oColumn, c, {
        nTh: b ? b : I.createElement("th"),
        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
        aDataSort: c.aDataSort ? c.aDataSort : [d],
        mData: c.mData ? c.mData : d,
        idx: d,
      });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = h.extend({}, m.models.oSearch, c[d]);
    ja(a, d, h(b).data());
  }
  function ja(a, b, c) {
    var b = a.aoColumns[b],
      d = a.oClasses,
      e = h(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }
    c !== k &&
      null !== c &&
      (fb(c),
      K(m.defaults.column, c),
      c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      h.extend(b, c),
      E(b, c, "sWidth", "sWidthOrig"),
      c.iDataSort !== k && (b.aDataSort = [c.iDataSort]),
      E(b, c, "aDataSort"));
    var g = b.mData,
      j = Q(g),
      i = b.mRender ? Q(b.mRender) : null,
      c = function (a) {
        return "string" === typeof a && -1 !== a.indexOf("@");
      };
    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);
      return i && b ? i(d, b, a, c) : d;
    };
    b.fnSetData = function (a, b, c) {
      return R(g)(a, b, c);
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== h.inArray("asc", b.asSorting);
    c = -1 !== h.inArray("desc", b.asSorting);
    !b.bSortable || (!a && !c)
      ? ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""))
      : a && !c
      ? ((b.sSortingClass = d.sSortableAsc),
        (b.sSortingClassJUI = d.sSortJUIAscAllowed))
      : !a && c
      ? ((b.sSortingClass = d.sSortableDesc),
        (b.sSortingClassJUI = d.sSortJUIDescAllowed))
      : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI));
  }
  function Y(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Fa(a);
      for (var c = 0, d = b.length; c < d; c++)
        b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ("" !== b.sY || "" !== b.sX) && ka(a);
    u(a, null, "column-sizing", [a]);
  }
  function Z(a, b) {
    var c = la(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null;
  }
  function $(a, b) {
    var c = la(a, "bVisible"),
      c = h.inArray(b, c);
    return -1 !== c ? c : null;
  }
  function aa(a) {
    var b = 0;
    h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++;
    });
    return b;
  }
  function la(a, b) {
    var c = [];
    h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });
    return c;
  }
  function Ga(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = m.ext.type.detect,
      e,
      f,
      g,
      j,
      i,
      h,
      l,
      q,
      t;
    e = 0;
    for (f = b.length; e < f; e++)
      if (((l = b[e]), (t = []), !l.sType && l._sManualType))
        l.sType = l._sManualType;
      else if (!l.sType) {
        g = 0;
        for (j = d.length; g < j; g++) {
          i = 0;
          for (h = c.length; i < h; i++) {
            t[i] === k && (t[i] = B(a, i, e, "type"));
            q = d[g](t[i], a);
            if (!q && g !== d.length - 1) break;
            if ("html" === q) break;
          }
          if (q) {
            l.sType = q;
            break;
          }
        }
        l.sType || (l.sType = "string");
      }
  }
  function ib(a, b, c, d) {
    var e,
      f,
      g,
      j,
      i,
      n,
      l = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        n = b[e];
        var q = n.targets !== k ? n.targets : n.aTargets;
        h.isArray(q) || (q = [q]);
        f = 0;
        for (g = q.length; f < g; f++)
          if ("number" === typeof q[f] && 0 <= q[f]) {
            for (; l.length <= q[f]; ) Ea(a);
            d(q[f], n);
          } else if ("number" === typeof q[f] && 0 > q[f])
            d(l.length + q[f], n);
          else if ("string" === typeof q[f]) {
            j = 0;
            for (i = l.length; j < i; j++)
              ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, n);
          }
      }
    if (c) {
      e = 0;
      for (a = c.length; e < a; e++) d(e, c[e]);
    }
  }
  function N(a, b, c, d) {
    var e = a.aoData.length,
      f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++)
      g[j].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== k && (a.aIds[b] = f);
    (c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d);
    return e;
  }
  function ma(a, b) {
    var c;
    b instanceof h || (b = h(b));
    return b.map(function (b, e) {
      c = Ia(a, e);
      return N(a, c.data, e, c.cells);
    });
  }
  function B(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      j = f.sDefaultContent,
      i = f.fnGetData(g, d, { settings: a, row: b, col: c });
    if (i === k)
      return (
        a.iDrawError != e &&
          null === j &&
          (L(
            a,
            0,
            "Requested unknown parameter " +
              ("function" == typeof f.mData
                ? "{function}"
                : "'" + f.mData + "'") +
              " for row " +
              b +
              ", column " +
              c,
            4
          ),
          (a.iDrawError = e)),
        j
      );
    if ((i === g || null === i) && null !== j && d !== k) i = j;
    else if ("function" === typeof i) return i.call(g);
    return null === i && "display" == d ? "" : i;
  }
  function jb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c,
    });
  }
  function Ja(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\./g, ".");
    });
  }
  function Q(a) {
    if (h.isPlainObject(a)) {
      var b = {};
      h.each(a, function (a, c) {
        c && (b[a] = Q(c));
      });
      return function (a, c, f, g) {
        var j = b[c] || b._;
        return j !== k ? j(a, c, f, g) : a;
      };
    }
    if (null === a)
      return function (a) {
        return a;
      };
    if ("function" === typeof a)
      return function (b, c, f, g) {
        return a(b, c, f, g);
      };
    if (
      "string" === typeof a &&
      (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))
    ) {
      var c = function (a, b, f) {
        var g, j;
        if ("" !== f) {
          j = Ja(f);
          for (var i = 0, n = j.length; i < n; i++) {
            f = j[i].match(ba);
            g = j[i].match(U);
            if (f) {
              j[i] = j[i].replace(ba, "");
              "" !== j[i] && (a = a[j[i]]);
              g = [];
              j.splice(0, i + 1);
              j = j.join(".");
              if (h.isArray(a)) {
                i = 0;
                for (n = a.length; i < n; i++) g.push(c(a[i], b, j));
              }
              a = f[0].substring(1, f[0].length - 1);
              a = "" === a ? g : g.join(a);
              break;
            } else if (g) {
              j[i] = j[i].replace(U, "");
              a = a[j[i]]();
              continue;
            }
            if (null === a || a[j[i]] === k) return k;
            a = a[j[i]];
          }
        }
        return a;
      };
      return function (b, e) {
        return c(b, e, a);
      };
    }
    return function (b) {
      return b[a];
    };
  }
  function R(a) {
    if (h.isPlainObject(a)) return R(a._);
    if (null === a) return function () {};
    if ("function" === typeof a)
      return function (b, d, e) {
        a(b, "set", d, e);
      };
    if (
      "string" === typeof a &&
      (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))
    ) {
      var b = function (a, d, e) {
        var e = Ja(e),
          f;
        f = e[e.length - 1];
        for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
          g = e[i].match(ba);
          j = e[i].match(U);
          if (g) {
            e[i] = e[i].replace(ba, "");
            a[e[i]] = [];
            f = e.slice();
            f.splice(0, i + 1);
            g = f.join(".");
            if (h.isArray(d)) {
              j = 0;
              for (n = d.length; j < n; j++)
                (f = {}), b(f, d[j], g), a[e[i]].push(f);
            } else a[e[i]] = d;
            return;
          }
          j && ((e[i] = e[i].replace(U, "")), (a = a[e[i]](d)));
          if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
          a = a[e[i]];
        }
        if (f.match(U)) a[f.replace(U, "")](d);
        else a[f.replace(ba, "")] = d;
      };
      return function (c, d) {
        return b(c, d, a);
      };
    }
    return function (b, d) {
      b[a] = d;
    };
  }
  function Ka(a) {
    return G(a.aoData, "_aData");
  }
  function na(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function oa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++)
      a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === k && a.splice(d, 1);
  }
  function ca(a, b, c, d) {
    var e = a.aoData[b],
      f,
      g = function (c, d) {
        for (; c.childNodes.length; ) c.removeChild(c.firstChild);
        c.innerHTML = B(a, b, d, "display");
      };
    if ("dom" === c || ((!c || "auto" === c) && "dom" === e.src))
      e._aData = Ia(a, e, d, d === k ? k : e._aData).data;
    else {
      var j = e.anCells;
      if (j)
        if (d !== k) g(j[d], d);
        else {
          c = 0;
          for (f = j.length; c < f; c++) g(j[c], c);
        }
    }
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== k) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      La(a, e);
    }
  }
  function Ia(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g,
      j,
      i = 0,
      n,
      l = a.aoColumns,
      q = a._rowReadObject,
      d = d !== k ? d : q ? {} : [],
      t = function (a, b) {
        if ("string" === typeof a) {
          var c = a.indexOf("@");
          -1 !== c && ((c = a.substring(c + 1)), R(a)(d, b.getAttribute(c)));
        }
      },
      S = function (a) {
        if (c === k || c === i)
          (j = l[i]),
            (n = h.trim(a.innerHTML)),
            j && j._bAttrSrc
              ? (R(j.mData._)(d, n),
                t(j.mData.sort, a),
                t(j.mData.type, a),
                t(j.mData.filter, a))
              : q
              ? (j._setter || (j._setter = R(j.mData)), j._setter(d, n))
              : (d[i] = n);
        i++;
      };
    if (f)
      for (; f; ) {
        g = f.nodeName.toUpperCase();
        if ("TD" == g || "TH" == g) S(f), e.push(f);
        f = f.nextSibling;
      }
    else {
      e = b.anCells;
      f = 0;
      for (g = e.length; f < g; f++) S(e[f]);
    }
    if ((b = b.firstChild ? b : b.nTr))
      (b = b.getAttribute("id")) && R(a.rowId)(d, b);
    return { data: d, cells: e };
  }
  function Ha(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      j,
      i,
      n,
      l,
      q;
    if (null === e.nTr) {
      j = c || I.createElement("tr");
      e.nTr = j;
      e.anCells = g;
      j._DT_RowIndex = b;
      La(a, e);
      l = 0;
      for (q = a.aoColumns.length; l < q; l++) {
        n = a.aoColumns[l];
        i = c ? d[l] : I.createElement(n.sCellType);
        i._DT_CellIndex = { row: b, column: l };
        g.push(i);
        if (
          (!c || n.mRender || n.mData !== l) &&
          (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")
        )
          i.innerHTML = B(a, b, l, "display");
        n.sClass && (i.className += " " + n.sClass);
        n.bVisible && !c
          ? j.appendChild(i)
          : !n.bVisible && c && i.parentNode.removeChild(i);
        n.fnCreatedCell &&
          n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
      }
      u(a, "aoRowCreatedCallback", null, [j, f, b]);
    }
    e.nTr.setAttribute("role", "row");
  }
  function La(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass &&
        ((e = d.DT_RowClass.split(" ")),
        (b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e),
        h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
      d.DT_RowData && h(c).data(d.DT_RowData);
    }
  }
  function kb(a) {
    var b,
      c,
      d,
      e,
      f,
      g = a.nTHead,
      j = a.nTFoot,
      i = 0 === h("th, td", g).length,
      n = a.oClasses,
      l = a.aoColumns;
    i && (e = h("<tr/>").appendTo(g));
    b = 0;
    for (c = l.length; b < c; b++)
      (f = l[b]),
        (d = h(f.nTh).addClass(f.sClass)),
        i && d.appendTo(e),
        a.oFeatures.bSort &&
          (d.addClass(f.sSortingClass),
          !1 !== f.bSortable &&
            (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
            Ma(a, f.nTh, b))),
        f.sTitle != d[0].innerHTML && d.html(f.sTitle),
        Na(a, "header")(a, d, f, n);
    i && da(a.aoHeader, g);
    h(g).find(">tr").attr("role", "row");
    h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
    h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
    if (null !== j) {
      a = a.aoFooter[0];
      b = 0;
      for (c = a.length; b < c; b++)
        (f = l[b]),
          (f.nTf = a[b].cell),
          f.sClass && h(f.nTf).addClass(f.sClass);
    }
  }
  function ea(a, b, c) {
    var d,
      e,
      f,
      g = [],
      j = [],
      i = a.aoColumns.length,
      n;
    if (b) {
      c === k && (c = !1);
      d = 0;
      for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();
        g[d].nTr = b[d].nTr;
        for (f = i - 1; 0 <= f; f--)
          !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        j.push([]);
      }
      d = 0;
      for (e = g.length; d < e; d++) {
        if ((a = g[d].nTr)) for (; (f = a.firstChild); ) a.removeChild(f);
        f = 0;
        for (b = g[d].length; f < b; f++)
          if (((n = i = 1), j[d][f] === k)) {
            a.appendChild(g[d][f].cell);
            for (
              j[d][f] = 1;
              g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;

            )
              (j[d + i][f] = 1), i++;
            for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell; ) {
              for (c = 0; c < i; c++) j[d + c][f + n] = 1;
              n++;
            }
            h(g[d][f].cell).attr("rowspan", i).attr("colspan", n);
          }
      }
    }
  }
  function O(a) {
    var b = u(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== h.inArray(!1, b)) C(a, !1);
    else {
      var b = [],
        c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        j = "ssp" == y(a),
        i = a.aiDisplay;
      a.bDrawing = !0;
      g !== k &&
        -1 !== g &&
        ((a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g),
        (a.iInitDisplayStart = -1));
      var g = a._iDisplayStart,
        n = a.fnDisplayEnd();
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, C(a, !1);
      else if (j) {
        if (!a.bDestroying && !lb(a)) return;
      } else a.iDraw++;
      if (0 !== i.length) {
        f = j ? a.aoData.length : n;
        for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
            q = a.aoData[l];
          null === q.nTr && Ha(a, l);
          l = q.nTr;
          if (0 !== e) {
            var t = d[c % e];
            q._sRowStripe != t &&
              (h(l).removeClass(q._sRowStripe).addClass(t),
              (q._sRowStripe = t));
          }
          u(a, "aoRowCallback", null, [l, q._aData, c, j]);
          b.push(l);
          c++;
        }
      } else
        (c = f.sZeroRecords),
          1 == a.iDraw && "ajax" == y(a)
            ? (c = f.sLoadingRecords)
            : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
          (b[0] = h("<tr/>", { class: e ? d[0] : "" }).append(
            h("<td />", {
              valign: "top",
              colSpan: aa(a),
              class: a.oClasses.sRowEmpty,
            }).html(c)
          )[0]);
      u(a, "aoHeaderCallback", "header", [
        h(a.nTHead).children("tr")[0],
        Ka(a),
        g,
        n,
        i,
      ]);
      u(a, "aoFooterCallback", "footer", [
        h(a.nTFoot).children("tr")[0],
        Ka(a),
        g,
        n,
        i,
      ]);
      d = h(a.nTBody);
      d.children().detach();
      d.append(h(b));
      u(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function T(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && mb(a);
    d ? fa(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    O(a);
    a._drawHold = !1;
  }
  function nb(a) {
    var b = a.oClasses,
      c = h(a.nTable),
      c = h("<div/>").insertBefore(c),
      d = a.oFeatures,
      e = h("<div/>", {
        id: a.sTableId + "_wrapper",
        class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, j, i, n, l, q, t = 0; t < f.length; t++) {
      g = null;
      j = f[t];
      if ("<" == j) {
        i = h("<div/>")[0];
        n = f[t + 1];
        if ("'" == n || '"' == n) {
          l = "";
          for (q = 2; f[t + q] != n; ) (l += f[t + q]), q++;
          "H" == l ? (l = b.sJUIHeader) : "F" == l && (l = b.sJUIFooter);
          -1 != l.indexOf(".")
            ? ((n = l.split(".")),
              (i.id = n[0].substr(1, n[0].length - 1)),
              (i.className = n[1]))
            : "#" == l.charAt(0)
            ? (i.id = l.substr(1, l.length - 1))
            : (i.className = l);
          t += q;
        }
        e.append(i);
        e = h(i);
      } else if (">" == j) e = e.parent();
      else if ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a);
      else if ("f" == j && d.bFilter) g = pb(a);
      else if ("r" == j && d.bProcessing) g = qb(a);
      else if ("t" == j) g = rb(a);
      else if ("i" == j && d.bInfo) g = sb(a);
      else if ("p" == j && d.bPaginate) g = tb(a);
      else if (0 !== m.ext.feature.length) {
        i = m.ext.feature;
        q = 0;
        for (n = i.length; q < n; q++)
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);
            break;
          }
      }
      g &&
        ((i = a.aanFeatures), i[j] || (i[j] = []), i[j].push(g), e.append(g));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function da(a, b) {
    var c = h(b).children("tr"),
      d,
      e,
      f,
      g,
      j,
      i,
      n,
      l,
      q,
      t;
    a.splice(0, a.length);
    f = 0;
    for (i = c.length; f < i; f++) a.push([]);
    f = 0;
    for (i = c.length; f < i; f++) {
      d = c[f];
      for (e = d.firstChild; e; ) {
        if (
          "TD" == e.nodeName.toUpperCase() ||
          "TH" == e.nodeName.toUpperCase()
        ) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");
          l = !l || 0 === l || 1 === l ? 1 : l;
          q = !q || 0 === q || 1 === q ? 1 : q;
          g = 0;
          for (j = a[f]; j[g]; ) g++;
          n = g;
          t = 1 === l ? !0 : !1;
          for (j = 0; j < l; j++)
            for (g = 0; g < q; g++)
              (a[f + g][n + j] = { cell: e, unique: t }), (a[f + g].nTr = d);
        }
        e = e.nextSibling;
      }
    }
  }
  function qa(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), da(c, b)));
    for (var b = 0, e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
    return d;
  }
  function ra(a, b, c) {
    u(a, "aoServerParams", "serverParams", [b]);
    if (b && h.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      h.each(b, function (a, b) {
        var c = b.name.match(e);
        c
          ? ((c = c[0]), d[c] || (d[c] = []), d[c].push(b.value))
          : (d[b.name] = b.value);
      });
      b = d;
    }
    var f,
      g = a.ajax,
      j = a.oInstance,
      i = function (b) {
        u(a, null, "xhr", [a, b, a.jqXHR]);
        c(b);
      };
    if (h.isPlainObject(g) && g.data) {
      f = g.data;
      var n = h.isFunction(f) ? f(b, a) : f,
        b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
      delete g.data;
    }
    n = {
      data: b,
      success: function (b) {
        var c = b.error || b.sError;
        c && L(a, 0, c);
        a.json = b;
        i(b);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (b, c) {
        var d = u(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === h.inArray(!0, d) &&
          ("parsererror" == c
            ? L(a, 0, "Invalid JSON response", 1)
            : 4 === b.readyState && L(a, 0, "Ajax error", 7));
        C(a, !1);
      },
    };
    a.oAjaxData = b;
    u(a, null, "preXhr", [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          j,
          a.sAjaxSource,
          h.map(b, function (a, b) {
            return { name: b, value: a };
          }),
          i,
          a
        )
      : a.sAjaxSource || "string" === typeof g
      ? (a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })))
      : h.isFunction(g)
      ? (a.jqXHR = g.call(j, b, i, a))
      : ((a.jqXHR = h.ajax(h.extend(n, g))), (g.data = f));
  }
  function lb(a) {
    return a.bAjaxDataGet
      ? (a.iDraw++,
        C(a, !0),
        ra(a, ub(a), function (b) {
          vb(a, b);
        }),
        !1)
      : !0;
  }
  function ub(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g,
      j = [],
      i,
      n,
      l,
      q = V(a);
    g = a._iDisplayStart;
    i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var k = function (a, b) {
      j.push({ name: a, value: b });
    };
    k("sEcho", a.iDraw);
    k("iColumns", c);
    k("sColumns", G(b, "sName").join(","));
    k("iDisplayStart", g);
    k("iDisplayLength", i);
    var S = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: g,
      length: i,
      search: { value: e.sSearch, regex: e.bRegex },
    };
    for (g = 0; g < c; g++)
      (n = b[g]),
        (l = f[g]),
        (i = "function" == typeof n.mData ? "function" : n.mData),
        S.columns.push({
          data: i,
          name: n.sName,
          searchable: n.bSearchable,
          orderable: n.bSortable,
          search: { value: l.sSearch, regex: l.bRegex },
        }),
        k("mDataProp_" + g, i),
        d.bFilter &&
          (k("sSearch_" + g, l.sSearch),
          k("bRegex_" + g, l.bRegex),
          k("bSearchable_" + g, n.bSearchable)),
        d.bSort && k("bSortable_" + g, n.bSortable);
    d.bFilter && (k("sSearch", e.sSearch), k("bRegex", e.bRegex));
    d.bSort &&
      (h.each(q, function (a, b) {
        S.order.push({ column: b.col, dir: b.dir });
        k("iSortCol_" + a, b.col);
        k("sSortDir_" + a, b.dir);
      }),
      k("iSortingCols", q.length));
    b = m.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? j : S) : b ? j : S;
  }
  function vb(a, b) {
    var c = sa(a, b),
      d = b.sEcho !== k ? b.sEcho : b.draw,
      e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
      f =
        b.iTotalDisplayRecords !== k
          ? b.iTotalDisplayRecords
          : b.recordsFiltered;
    if (d) {
      if (1 * d < a.iDraw) return;
      a.iDraw = 1 * d;
    }
    na(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f, 10);
    d = 0;
    for (e = c.length; d < e; d++) N(a, c[d]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    O(a);
    a._bInitComplete || ta(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1);
  }
  function sa(a, b) {
    var c =
      h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k
        ? a.ajax.dataSrc
        : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? Q(c)(b) : b;
  }
  function pb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      j = d.sSearch,
      j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
      b = h("<div/>", {
        id: !f.f ? c + "_filter" : null,
        class: b.sFilter,
      }).append(h("<label/>").append(j)),
      f = function () {
        var b = !this.value ? "" : this.value;
        b != e.sSearch &&
          (fa(a, {
            sSearch: b,
            bRegex: e.bRegex,
            bSmart: e.bSmart,
            bCaseInsensitive: e.bCaseInsensitive,
          }),
          (a._iDisplayStart = 0),
          O(a));
      },
      g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
      i = h("input", b)
        .val(e.sSearch)
        .attr("placeholder", d.sSearchPlaceholder)
        .bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f)
        .bind("keypress.DT", function (a) {
          if (13 == a.keyCode) return !1;
        })
        .attr("aria-controls", c);
    h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c)
        try {
          i[0] !== I.activeElement && i.val(e.sSearch);
        } catch (d) {}
    });
    return b[0];
  }
  function fa(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive;
      };
    Ga(a);
    if ("ssp" != y(a)) {
      wb(
        a,
        b.sSearch,
        c,
        b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex,
        b.bSmart,
        b.bCaseInsensitive
      );
      f(b);
      for (b = 0; b < e.length; b++)
        xb(
          a,
          e[b].sSearch,
          b,
          e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex,
          e[b].bSmart,
          e[b].bCaseInsensitive
        );
      yb(a);
    } else f(b);
    a.bFiltered = !0;
    u(a, null, "search", [a]);
  }
  function yb(a) {
    for (
      var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length;
      f < g;
      f++
    ) {
      for (var j = [], i = 0, n = c.length; i < n; i++)
        (e = c[i]),
          (d = a.aoData[e]),
          b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      c.length = 0;
      h.merge(c, j);
    }
  }
  function xb(a, b, c, d, e, f) {
    if ("" !== b)
      for (
        var g = a.aiDisplay, d = Pa(b, d, e, f), e = g.length - 1;
        0 <= e;
        e--
      )
        (b = a.aoData[g[e]]._aFilterData[c]), d.test(b) || g.splice(e, 1);
  }
  function wb(a, b, c, d, e, f) {
    var d = Pa(b, d, e, f),
      e = a.oPreviousSearch.sSearch,
      f = a.aiDisplayMaster,
      g;
    0 !== m.ext.search.length && (c = !0);
    g = zb(a);
    if (0 >= b.length) a.aiDisplay = f.slice();
    else {
      if (g || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted)
        a.aiDisplay = f.slice();
      b = a.aiDisplay;
      for (c = b.length - 1; 0 <= c; c--)
        d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1);
    }
  }
  function Pa(a, b, c, d) {
    a = b ? a : Qa(a);
    c &&
      (a =
        "^(?=.*?" +
        h
          .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0))
              var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "");
          })
          .join(")(?=.*?") +
        ").*$");
    return RegExp(a, d ? "i" : "");
  }
  function zb(a) {
    var b = a.aoColumns,
      c,
      d,
      e,
      f,
      g,
      j,
      i,
      h,
      l = m.ext.type.search;
    c = !1;
    d = 0;
    for (f = a.aoData.length; d < f; d++)
      if (((h = a.aoData[d]), !h._aFilterData)) {
        j = [];
        e = 0;
        for (g = b.length; e < g; e++)
          (c = b[e]),
            c.bSearchable
              ? ((i = B(a, d, e, "filter")),
                l[c.sType] && (i = l[c.sType](i)),
                null === i && (i = ""),
                "string" !== typeof i && i.toString && (i = i.toString()))
              : (i = ""),
            i.indexOf &&
              -1 !== i.indexOf("&") &&
              ((ua.innerHTML = i), (i = Zb ? ua.textContent : ua.innerText)),
            i.replace && (i = i.replace(/[\r\n]/g, "")),
            j.push(i);
        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0;
      }
    return c;
  }
  function Ab(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive,
    };
  }
  function Bb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive,
    };
  }
  function sb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = h("<div/>", { class: a.oClasses.sInfo, id: !c ? b + "_info" : null });
    c ||
      (a.aoDrawCallback.push({ fn: Cb, sName: "information" }),
      d.attr("role", "status").attr("aria-live", "polite"),
      h(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }
  function Cb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        j = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (j += " " + c.sInfoFiltered);
      j += c.sInfoPostFix;
      j = Db(a, j);
      c = c.fnInfoCallback;
      null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
      h(b).html(j);
    }
  }
  function Db(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, f))
      .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }
  function ga(a) {
    var b,
      c,
      d = a.iInitDisplayStart,
      e = a.aoColumns,
      f;
    c = a.oFeatures;
    var g = a.bDeferLoading;
    if (a.bInitialised) {
      nb(a);
      kb(a);
      ea(a, a.aoHeader);
      ea(a, a.aoFooter);
      C(a, !0);
      c.bAutoWidth && Fa(a);
      b = 0;
      for (c = e.length; b < c; b++)
        (f = e[b]), f.sWidth && (f.nTh.style.width = x(f.sWidth));
      u(a, null, "preInit", [a]);
      T(a);
      e = y(a);
      if ("ssp" != e || g)
        "ajax" == e
          ? ra(
              a,
              [],
              function (c) {
                var f = sa(a, c);
                for (b = 0; b < f.length; b++) N(a, f[b]);
                a.iInitDisplayStart = d;
                T(a);
                C(a, !1);
                ta(a, c);
              },
              a
            )
          : (C(a, !1), ta(a));
    } else
      setTimeout(function () {
        ga(a);
      }, 200);
  }
  function ta(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && Y(a);
    u(a, null, "plugin-init", [a, b]);
    u(a, "aoInitComplete", "init", [a, b]);
  }
  function Ra(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    Sa(a);
    u(a, null, "length", [a, c]);
  }
  function ob(a) {
    for (
      var b = a.oClasses,
        c = a.sTableId,
        d = a.aLengthMenu,
        e = h.isArray(d[0]),
        f = e ? d[0] : d,
        d = e ? d[1] : d,
        e = h("<select/>", {
          name: c + "_length",
          "aria-controls": c,
          class: b.sLengthSelect,
        }),
        g = 0,
        j = f.length;
      g < j;
      g++
    )
      e[0][g] = new Option(d[g], f[g]);
    var i = h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (i[0].id = c + "_length");
    i.children().append(
      a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
    );
    h("select", i)
      .val(a._iDisplayLength)
      .bind("change.DT", function () {
        Ra(a, h(this).val());
        O(a);
      });
    h(a.nTable).bind("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d);
    });
    return i[0];
  }
  function tb(a) {
    var b = a.sPaginationType,
      c = m.ext.pager[b],
      d = "function" === typeof c,
      e = function (a) {
        O(a);
      },
      b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
      f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p ||
      ((b.id = a.sTableId + "_paginate"),
      a.aoDrawCallback.push({
        fn: function (a) {
          if (d) {
            var b = a._iDisplayStart,
              i = a._iDisplayLength,
              h = a.fnRecordsDisplay(),
              l = -1 === i,
              b = l ? 0 : Math.ceil(b / i),
              i = l ? 1 : Math.ceil(h / i),
              h = c(b, i),
              k,
              l = 0;
            for (k = f.p.length; l < k; l++)
              Na(a, "pageButton")(a, f.p[l], l, h, b, i);
          } else c.fnUpdate(a, e);
        },
        sName: "pagination",
      }));
    return b;
  }
  function Ta(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 === e
      ? (d = 0)
      : "number" === typeof b
      ? ((d = b * e), d > f && (d = 0))
      : "first" == b
      ? (d = 0)
      : "previous" == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : "next" == b
      ? d + e < f && (d += e)
      : "last" == b
      ? (d = Math.floor((f - 1) / e) * e)
      : L(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (u(a, null, "page", [a]), c && O(a));
    return b;
  }
  function qb(a) {
    return h("<div/>", {
      id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
      class: a.oClasses.sProcessing,
    })
      .html(a.oLanguage.sProcessing)
      .insertBefore(a.nTable)[0];
  }
  function C(a, b) {
    a.oFeatures.bProcessing &&
      h(a.aanFeatures.r).css("display", b ? "block" : "none");
    u(a, null, "processing", [a, b]);
  }
  function rb(a) {
    var b = h(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      j = g.length ? g[0]._captionSide : null,
      i = h(b[0].cloneNode(!1)),
      n = h(b[0].cloneNode(!1)),
      l = b.children("tfoot");
    l.length || (l = null);
    i = h("<div/>", { class: f.sScrollWrapper })
      .append(
        h("<div/>", { class: f.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? (!d ? null : x(d)) : "100%",
          })
          .append(
            h("<div/>", { class: f.sScrollHeadInner })
              .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
              .append(
                i
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === j ? g : null)
                  .append(b.children("thead"))
              )
          )
      )
      .append(
        h("<div/>", { class: f.sScrollBody })
          .css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : x(d),
          })
          .append(b)
      );
    l &&
      i.append(
        h("<div/>", { class: f.sScrollFoot })
          .css({
            overflow: "hidden",
            border: 0,
            width: d ? (!d ? null : x(d)) : "100%",
          })
          .append(
            h("<div/>", { class: f.sScrollFootInner }).append(
              n
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === j ? g : null)
                .append(b.children("tfoot"))
            )
          )
      );
    var b = i.children(),
      k = b[0],
      f = b[1],
      t = l ? b[2] : null;
    if (d)
      h(f).on("scroll.DT", function () {
        var a = this.scrollLeft;
        k.scrollLeft = a;
        l && (t.scrollLeft = a);
      });
    h(f).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = k;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({ fn: ka, sName: "scrolling" });
    return i[0];
  }
  function ka(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY,
      b = b.iBarWidth,
      f = h(a.nScrollHead),
      g = f[0].style,
      j = f.children("div"),
      i = j[0].style,
      n = j.children("table"),
      j = a.nScrollBody,
      l = h(j),
      q = j.style,
      t = h(a.nScrollFoot).children("div"),
      m = t.children("table"),
      o = h(a.nTHead),
      F = h(a.nTable),
      p = F[0],
      r = p.style,
      u = a.nTFoot ? h(a.nTFoot) : null,
      Eb = a.oBrowser,
      Ua = Eb.bScrollOversize,
      s = G(a.aoColumns, "nTh"),
      P,
      v,
      w,
      y,
      z = [],
      A = [],
      B = [],
      C = [],
      D,
      E = function (a) {
        a = a.style;
        a.paddingTop = "0";
        a.paddingBottom = "0";
        a.borderTopWidth = "0";
        a.borderBottomWidth = "0";
        a.height = 0;
      };
    v = j.scrollHeight > j.clientHeight;
    if (a.scrollBarVis !== v && a.scrollBarVis !== k)
      (a.scrollBarVis = v), Y(a);
    else {
      a.scrollBarVis = v;
      F.children("thead, tfoot").remove();
      u &&
        ((w = u.clone().prependTo(F)), (P = u.find("tr")), (w = w.find("tr")));
      y = o.clone().prependTo(F);
      o = o.find("tr");
      v = y.find("tr");
      y.find("th, td").removeAttr("tabindex");
      c || ((q.width = "100%"), (f[0].style.width = "100%"));
      h.each(qa(a, y), function (b, c) {
        D = Z(a, b);
        c.style.width = a.aoColumns[D].sWidth;
      });
      u &&
        J(function (a) {
          a.style.width = "";
        }, w);
      f = F.outerWidth();
      if ("" === c) {
        r.width = "100%";
        if (
          Ua &&
          (F.find("tbody").height() > j.offsetHeight ||
            "scroll" == l.css("overflow-y"))
        )
          r.width = x(F.outerWidth() - b);
        f = F.outerWidth();
      } else "" !== d && ((r.width = x(d)), (f = F.outerWidth()));
      J(E, v);
      J(function (a) {
        B.push(a.innerHTML);
        z.push(x(h(a).css("width")));
      }, v);
      J(function (a, b) {
        if (h.inArray(a, s) !== -1) a.style.width = z[b];
      }, o);
      h(v).height(0);
      u &&
        (J(E, w),
        J(function (a) {
          C.push(a.innerHTML);
          A.push(x(h(a).css("width")));
        }, w),
        J(function (a, b) {
          a.style.width = A[b];
        }, P),
        h(w).height(0));
      J(function (a, b) {
        a.innerHTML =
          '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
          B[b] +
          "</div>";
        a.style.width = z[b];
      }, v);
      u &&
        J(function (a, b) {
          a.innerHTML =
            '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
            C[b] +
            "</div>";
          a.style.width = A[b];
        }, w);
      if (F.outerWidth() < f) {
        P =
          j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y")
            ? f + b
            : f;
        if (
          Ua &&
          (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))
        )
          r.width = x(P - b);
        ("" === c || "" !== d) && L(a, 1, "Possible column misalignment", 6);
      } else P = "100%";
      q.width = x(P);
      g.width = x(P);
      u && (a.nScrollFoot.style.width = x(P));
      !e && Ua && (q.height = x(p.offsetHeight + b));
      c = F.outerWidth();
      n[0].style.width = x(c);
      i.width = x(c);
      d = F.height() > j.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right");
      i[e] = d ? b + "px" : "0px";
      u &&
        ((m[0].style.width = x(c)),
        (t[0].style.width = x(c)),
        (t[0].style[e] = d ? b + "px" : "0px"));
      F.children("colgroup").insertBefore(F.children("thead"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
    }
  }
  function J(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f; ) {
      g = b[e].firstChild;
      for (j = c ? c[e].firstChild : null; g; )
        1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++),
          (g = g.nextSibling),
          (j = c ? j.nextSibling : null);
      e++;
    }
  }
  function Fa(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      j = c.length,
      i = la(a, "bVisible"),
      n = h("th", a.nTHead),
      l = b.getAttribute("width"),
      k = b.parentNode,
      t = !1,
      m,
      o,
      p = a.oBrowser,
      d = p.bScrollOversize;
    (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
    for (m = 0; m < i.length; m++)
      (o = c[i[m]]),
        null !== o.sWidth && ((o.sWidth = Fb(o.sWidthOrig, k)), (t = !0));
    if (d || (!t && !f && !e && j == aa(a) && j == n.length))
      for (m = 0; m < j; m++)
        (i = Z(a, m)), null !== i && (c[i].sWidth = x(n.eq(m).width()));
    else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");
      j.find("tbody tr").remove();
      var r = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();
      j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
      j.find("tfoot th, tfoot td").css("width", "");
      n = qa(a, j.find("thead")[0]);
      for (m = 0; m < i.length; m++)
        (o = c[i[m]]),
          (n[m].style.width =
            null !== o.sWidthOrig && "" !== o.sWidthOrig
              ? x(o.sWidthOrig)
              : ""),
          o.sWidthOrig &&
            f &&
            h(n[m]).append(
              h("<div/>").css({
                width: o.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (a.aoData.length)
        for (m = 0; m < i.length; m++)
          (t = i[m]),
            (o = c[t]),
            h(Gb(a, t)).clone(!1).append(o.sContentPadding).appendTo(r);
      h("[name]", j).removeAttr("name");
      o = h("<div/>")
        .css(
          f || e
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(j)
        .appendTo(k);
      f && g
        ? j.width(g)
        : f
        ? (j.css("width", "auto"),
          j.removeAttr("width"),
          j.width() < k.clientWidth && l && j.width(k.clientWidth))
        : e
        ? j.width(k.clientWidth)
        : l && j.width(l);
      for (m = e = 0; m < i.length; m++)
        (k = h(n[m])),
          (g = k.outerWidth() - k.width()),
          (k = p.bBounding
            ? Math.ceil(n[m].getBoundingClientRect().width)
            : k.outerWidth()),
          (e += k),
          (c[i[m]].sWidth = x(k - g));
      b.style.width = x(e);
      o.remove();
    }
    l && (b.style.width = x(l));
    if ((l || f) && !a._reszEvt)
      (b = function () {
        h(D).bind(
          "resize.DT-" + a.sInstance,
          Oa(function () {
            Y(a);
          })
        );
      }),
        d ? setTimeout(b, 1e3) : b(),
        (a._reszEvt = !0);
  }
  function Fb(a, b) {
    if (!a) return 0;
    var c = h("<div/>")
        .css("width", x(a))
        .appendTo(b || I.body),
      d = c[0].offsetWidth;
    c.remove();
    return d;
  }
  function Gb(a, b) {
    var c = Hb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
  }
  function Hb(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)
      (c = B(a, f, b, "display") + ""),
        (c = c.replace($b, "")),
        (c = c.replace(/&nbsp;/g, " ")),
        c.length > d && ((d = c.length), (e = f));
    return e;
  }
  function x(a) {
    return null === a
      ? "0px"
      : "number" == typeof a
      ? 0 > a
        ? "0px"
        : a + "px"
      : a.match(/\d$/)
      ? a + "px"
      : a;
  }
  function V(a) {
    var b,
      c,
      d = [],
      e = a.aoColumns,
      f,
      g,
      j,
      i;
    b = a.aaSortingFixed;
    c = h.isPlainObject(b);
    var n = [];
    f = function (a) {
      a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a);
    };
    h.isArray(b) && f(b);
    c && b.pre && f(b.pre);
    f(a.aaSorting);
    c && b.post && f(b.post);
    for (a = 0; a < n.length; a++) {
      i = n[a][0];
      f = e[i].aDataSort;
      b = 0;
      for (c = f.length; b < c; b++)
        (g = f[b]),
          (j = e[g].sType || "string"),
          n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)),
          d.push({
            src: i,
            col: g,
            dir: n[a][1],
            index: n[a]._idx,
            type: j,
            formatter: m.ext.type.order[j + "-pre"],
          });
    }
    return d;
  }
  function mb(a) {
    var b,
      c,
      d = [],
      e = m.ext.type.order,
      f = a.aoData,
      g = 0,
      j,
      i = a.aiDisplayMaster,
      h;
    Ga(a);
    h = V(a);
    b = 0;
    for (c = h.length; b < c; b++) (j = h[b]), j.formatter && g++, Ib(a, j.col);
    if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;
      for (c = i.length; b < c; b++) d[i[b]] = b;
      g === h.length
        ? i.sort(function (a, b) {
            var c,
              e,
              g,
              j,
              i = h.length,
              k = f[a]._aSortData,
              m = f[b]._aSortData;
            for (g = 0; g < i; g++)
              if (
                ((j = h[g]),
                (c = k[j.col]),
                (e = m[j.col]),
                (c = c < e ? -1 : c > e ? 1 : 0),
                0 !== c)
              )
                return "asc" === j.dir ? c : -c;
            c = d[a];
            e = d[b];
            return c < e ? -1 : c > e ? 1 : 0;
          })
        : i.sort(function (a, b) {
            var c,
              g,
              j,
              i,
              k = h.length,
              m = f[a]._aSortData,
              p = f[b]._aSortData;
            for (j = 0; j < k; j++)
              if (
                ((i = h[j]),
                (c = m[i.col]),
                (g = p[i.col]),
                (i = e[i.type + "-" + i.dir] || e["string-" + i.dir]),
                (c = i(c, g)),
                0 !== c)
              )
                return c;
            c = d[a];
            g = d[b];
            return c < g ? -1 : c > g ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function Jb(a) {
    for (
      var b,
        c,
        d = a.aoColumns,
        e = V(a),
        a = a.oLanguage.oAria,
        f = 0,
        g = d.length;
      f < g;
      f++
    ) {
      c = d[f];
      var j = c.asSorting;
      b = c.sTitle.replace(/<.*?>/g, "");
      var i = c.nTh;
      i.removeAttribute("aria-sort");
      c.bSortable &&
        (0 < e.length && e[0].col == f
          ? (i.setAttribute(
              "aria-sort",
              "asc" == e[0].dir ? "ascending" : "descending"
            ),
            (c = j[e[0].index + 1] || j[0]))
          : (c = j[0]),
        (b += "asc" === c ? a.sSortAscending : a.sSortDescending));
      i.setAttribute("aria-label", b);
    }
  }
  function Va(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (a, b) {
        var c = a._idx;
        c === k && (c = h.inArray(a[1], f));
        return c + 1 < f.length ? c + 1 : b ? null : 0;
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = h.inArray(b, G(e, "0"))),
        -1 !== c
          ? ((b = g(e[c], !0)),
            null === b && 1 === e.length && (b = 0),
            null === b ? e.splice(c, 1) : ((e[c][1] = f[b]), (e[c]._idx = b)))
          : (e.push([b, f[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = g(e[0])), (e.length = 1), (e[0][1] = f[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, f[0]]), (e[0]._idx = 0));
    T(a);
    "function" == typeof d && d(a);
  }
  function Ma(a, b, c, d) {
    var e = a.aoColumns[c];
    Wa(b, {}, function (b) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (C(a, !0),
            setTimeout(function () {
              Va(a, c, b.shiftKey, d);
              "ssp" !== y(a) && C(a, !1);
            }, 0))
          : Va(a, c, b.shiftKey, d));
    });
  }
  function va(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = V(a),
      e = a.oFeatures,
      f,
      g;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++)
        (g = b[e].src),
          h(G(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      e = 0;
      for (f = d.length; e < f; e++)
        (g = d[e].src),
          h(G(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function Ib(a, b) {
    var c = a.aoColumns[b],
      d = m.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, $(a, b)));
    for (
      var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length;
      j < i;
      j++
    )
      if (
        ((c = a.aoData[j]),
        c._aSortData || (c._aSortData = []),
        !c._aSortData[b] || d)
      )
        (f = d ? e[j] : B(a, j, b, "sort")), (c._aSortData[b] = g ? g(f) : f);
  }
  function wa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: h.extend(!0, [], a.aaSorting),
        search: Ab(a.oPreviousSearch),
        columns: h.map(a.aoColumns, function (b, d) {
          return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) };
        }),
      };
      u(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function Kb(a) {
    var b,
      c,
      d = a.aoColumns;
    if (a.oFeatures.bStateSave) {
      var e = a.fnStateLoadCallback.call(a.oInstance, a);
      if (
        e &&
        e.time &&
        ((b = u(a, "aoStateLoadParams", "stateLoadParams", [a, e])),
        -1 === h.inArray(!1, b) &&
          ((b = a.iStateDuration),
          !(0 < b && e.time < +new Date() - 1e3 * b) &&
            d.length === e.columns.length))
      ) {
        a.oLoadedState = h.extend(!0, {}, e);
        e.start !== k &&
          ((a._iDisplayStart = e.start), (a.iInitDisplayStart = e.start));
        e.length !== k && (a._iDisplayLength = e.length);
        e.order !== k &&
          ((a.aaSorting = []),
          h.each(e.order, function (b, c) {
            a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c);
          }));
        e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search));
        b = 0;
        for (c = e.columns.length; b < c; b++) {
          var f = e.columns[b];
          f.visible !== k && (d[b].bVisible = f.visible);
          f.search !== k && h.extend(a.aoPreSearchCols[b], Bb(f.search));
        }
        u(a, "aoStateLoaded", "stateLoaded", [a, e]);
      }
    }
  }
  function xa(a) {
    var b = m.settings,
      a = h.inArray(a, G(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }
  function L(a, b, c, d) {
    c =
      "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d &&
      (c +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        d);
    if (b) D.console && console.log && console.log(c);
    else if (
      ((b = m.ext),
      (b = b.sErrMode || b.errMode),
      a && u(a, null, "error", [a, d, c]),
      "alert" == b)
    )
      alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }
  function E(a, b, c, d) {
    h.isArray(c)
      ? h.each(c, function (c, d) {
          h.isArray(d) ? E(a, b, d[0], d[1]) : E(a, b, d);
        })
      : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
  }
  function Lb(a, b, c) {
    var d, e;
    for (e in b)
      b.hasOwnProperty(e) &&
        ((d = b[e]),
        h.isPlainObject(d)
          ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d))
          : (a[e] =
              c && "data" !== e && "aaData" !== e && h.isArray(d)
                ? d.slice()
                : d));
    return a;
  }
  function Wa(a, b, c) {
    h(a)
      .bind("click.DT", b, function (b) {
        a.blur();
        c(b);
      })
      .bind("keypress.DT", b, function (a) {
        13 === a.which && (a.preventDefault(), c(a));
      })
      .bind("selectstart.DT", function () {
        return !1;
      });
  }
  function z(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }
  function u(a, b, c, d) {
    var e = [];
    b &&
      (e = h.map(a[b].slice().reverse(), function (b) {
        return b.fn.apply(a.oInstance, d);
      }));
    null !== c &&
      ((b = h.Event(c + ".dt")), h(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function Sa(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function Na(a, b) {
    var c = a.renderer,
      d = m.ext.renderer[b];
    return h.isPlainObject(c) && c[b]
      ? d[c[b]] || d._
      : "string" === typeof c
      ? d[c] || d._
      : d._;
  }
  function y(a) {
    return a.oFeatures.bServerSide
      ? "ssp"
      : a.ajax || a.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function ya(a, b) {
    var c = [],
      c = Mb.numbers_length,
      d = Math.floor(c / 2);
    b <= c
      ? (c = W(0, b))
      : a <= d
      ? ((c = W(0, c - 2)), c.push("ellipsis"), c.push(b - 1))
      : (a >= b - 1 - d
          ? (c = W(b - (c - 2), b))
          : ((c = W(a - d + 2, a + d - 1)), c.push("ellipsis"), c.push(b - 1)),
        c.splice(0, 0, "ellipsis"),
        c.splice(0, 0, 0));
    c.DT_el = "span";
    return c;
  }
  function db(a) {
    h.each(
      {
        num: function (b) {
          return za(b, a);
        },
        "num-fmt": function (b) {
          return za(b, a, Xa);
        },
        "html-num": function (b) {
          return za(b, a, Aa);
        },
        "html-num-fmt": function (b) {
          return za(b, a, Aa, Xa);
        },
      },
      function (b, c) {
        v.type.order[b + a + "-pre"] = c;
        b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html);
      }
    );
  }
  function Nb(a) {
    return function () {
      var b = [xa(this[m.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return m.ext.internal[a].apply(this, b);
    };
  }
  var m = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b);
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data();
      };
      this.api = function (a) {
        return a ? new r(xa(this[v.iApiIndex])) : new r(this);
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0),
          d =
            h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0]))
              ? c.rows.add(a)
              : c.row.add(a);
        (b === k || b) && c.draw();
        return d.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (a) {
        var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
        a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ka(c);
      };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === k || a) && b.draw();
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide();
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === k || c) && d.draw();
        return h;
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a);
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a);
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k
          ? e.search(a, c, d, h)
          : e.column(b).search(a, c, d, h);
        e.draw();
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== k) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== k || "td" == d || "th" == d
            ? c.cell(a, b).data()
            : c.row(a).data() || null;
        }
        return c.data().toArray();
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return "TR" == c
          ? b.row(a).index()
          : "TD" == c || "TH" == c
          ? ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column])
          : null;
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown();
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0];
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === k || b) && c.draw(!1);
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === k || c) && a.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return xa(this[v.iApiIndex]);
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw();
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c);
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === k || e) && h.columns.adjust();
        (d === k || d) && h.draw();
        return 0;
      };
      this.fnVersionCheck = v.fnVersionCheck;
      var b = this,
        c = a === k,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = v.internal;
      for (var e in m.ext.internal) e && (this[e] = Nb(e));
      this.each(function () {
        var e = {},
          e = 1 < d ? Lb(e, a, !0) : a,
          g = 0,
          j,
          i = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          q = h(this);
        if ("table" != this.nodeName.toLowerCase())
          L(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          eb(l);
          fb(l.column);
          K(l, l, !0);
          K(l.column, l.column, !0);
          K(l, h.extend(e, q.data()));
          var t = m.settings,
            g = 0;
          for (j = t.length; g < j; g++) {
            var p = t[g];
            if (
              p.nTable == this ||
              p.nTHead.parentNode == this ||
              (p.nTFoot && p.nTFoot.parentNode == this)
            ) {
              g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve;
              if (c || g) return p.oInstance;
              if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) {
                p.oInstance.fnDestroy();
                break;
              } else {
                L(p, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (p.sTableId == this.id) {
              t.splice(g, 1);
              break;
            }
          }
          if (null === i || "" === i)
            this.id = i = "DataTables_Table_" + m.ext._unique++;
          var o = h.extend(!0, {}, m.models.oSettings, {
            sDestroyWidth: q[0].style.width,
            sInstance: i,
            sTableId: i,
          });
          o.nTable = this;
          o.oApi = b.internal;
          o.oInit = e;
          t.push(o);
          o.oInstance = 1 === b.length ? b : q.dataTable();
          eb(e);
          e.oLanguage && Da(e.oLanguage);
          e.aLengthMenu &&
            !e.iDisplayLength &&
            (e.iDisplayLength = h.isArray(e.aLengthMenu[0])
              ? e.aLengthMenu[0][0]
              : e.aLengthMenu[0]);
          e = Lb(h.extend(!0, {}, l), e);
          E(
            o.oFeatures,
            e,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          E(o, e, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
            ["bJQueryUI", "bJUI"],
          ]);
          E(o.oScroll, e, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          E(o.oLanguage, e, "fnInfoCallback");
          z(o, "aoDrawCallback", e.fnDrawCallback, "user");
          z(o, "aoServerParams", e.fnServerParams, "user");
          z(o, "aoStateSaveParams", e.fnStateSaveParams, "user");
          z(o, "aoStateLoadParams", e.fnStateLoadParams, "user");
          z(o, "aoStateLoaded", e.fnStateLoaded, "user");
          z(o, "aoRowCallback", e.fnRowCallback, "user");
          z(o, "aoRowCreatedCallback", e.fnCreatedRow, "user");
          z(o, "aoHeaderCallback", e.fnHeaderCallback, "user");
          z(o, "aoFooterCallback", e.fnFooterCallback, "user");
          z(o, "aoInitComplete", e.fnInitComplete, "user");
          z(o, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
          o.rowIdFn = Q(e.rowId);
          gb(o);
          i = o.oClasses;
          e.bJQueryUI
            ? (h.extend(i, m.ext.oJUIClasses, e.oClasses),
              e.sDom === l.sDom &&
                "lfrtip" === l.sDom &&
                (o.sDom = '<"H"lfr>t<"F"ip>'),
              o.renderer)
              ? h.isPlainObject(o.renderer) &&
                !o.renderer.header &&
                (o.renderer.header = "jqueryui")
              : (o.renderer = "jqueryui")
            : h.extend(i, m.ext.classes, e.oClasses);
          q.addClass(i.sTable);
          o.iInitDisplayStart === k &&
            ((o.iInitDisplayStart = e.iDisplayStart),
            (o._iDisplayStart = e.iDisplayStart));
          null !== e.iDeferLoading &&
            ((o.bDeferLoading = !0),
            (g = h.isArray(e.iDeferLoading)),
            (o._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading),
            (o._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading));
          var r = o.oLanguage;
          h.extend(!0, r, e.oLanguage);
          "" !== r.sUrl &&
            (h.ajax({
              dataType: "json",
              url: r.sUrl,
              success: function (a) {
                Da(a);
                K(l.oLanguage, a);
                h.extend(true, r, a);
                ga(o);
              },
              error: function () {
                ga(o);
              },
            }),
            (n = !0));
          null === e.asStripeClasses &&
            (o.asStripeClasses = [i.sStripeOdd, i.sStripeEven]);
          var g = o.asStripeClasses,
            v = q.children("tbody").find("tr").eq(0);
          -1 !==
            h.inArray(
              !0,
              h.map(g, function (a) {
                return v.hasClass(a);
              })
            ) &&
            (h("tbody tr", this).removeClass(g.join(" ")),
            (o.asDestroyStripes = g.slice()));
          t = [];
          g = this.getElementsByTagName("thead");
          0 !== g.length && (da(o.aoHeader, g[0]), (t = qa(o)));
          if (null === e.aoColumns) {
            p = [];
            g = 0;
            for (j = t.length; g < j; g++) p.push(null);
          } else p = e.aoColumns;
          g = 0;
          for (j = p.length; g < j; g++) Ea(o, t ? t[g] : null);
          ib(o, e.aoColumnDefs, p, function (a, b) {
            ja(o, a, b);
          });
          if (v.length) {
            var s = function (a, b) {
              return a.getAttribute("data-" + b) !== null ? b : null;
            };
            h(v[0])
              .children("th, td")
              .each(function (a, b) {
                var c = o.aoColumns[a];
                if (c.mData === a) {
                  var d = s(b, "sort") || s(b, "order"),
                    e = s(b, "filter") || s(b, "search");
                  if (d !== null || e !== null) {
                    c.mData = {
                      _: a + ".display",
                      sort: d !== null ? a + ".@data-" + d : k,
                      type: d !== null ? a + ".@data-" + d : k,
                      filter: e !== null ? a + ".@data-" + e : k,
                    };
                    ja(o, a);
                  }
                }
              });
          }
          var w = o.oFeatures;
          e.bStateSave &&
            ((w.bStateSave = !0),
            Kb(o, e),
            z(o, "aoDrawCallback", wa, "state_save"));
          if (e.aaSorting === k) {
            t = o.aaSorting;
            g = 0;
            for (j = t.length; g < j; g++)
              t[g][1] = o.aoColumns[g].asSorting[0];
          }
          va(o);
          w.bSort &&
            z(o, "aoDrawCallback", function () {
              if (o.bSorted) {
                var a = V(o),
                  b = {};
                h.each(a, function (a, c) {
                  b[c.src] = c.dir;
                });
                u(o, null, "order", [o, a, b]);
                Jb(o);
              }
            });
          z(
            o,
            "aoDrawCallback",
            function () {
              (o.bSorted || y(o) === "ssp" || w.bDeferRender) && va(o);
            },
            "sc"
          );
          g = q.children("caption").each(function () {
            this._captionSide = q.css("caption-side");
          });
          j = q.children("thead");
          0 === j.length && (j = h("<thead/>").appendTo(this));
          o.nTHead = j[0];
          j = q.children("tbody");
          0 === j.length && (j = h("<tbody/>").appendTo(this));
          o.nTBody = j[0];
          j = q.children("tfoot");
          if (
            0 === j.length &&
            0 < g.length &&
            ("" !== o.oScroll.sX || "" !== o.oScroll.sY)
          )
            j = h("<tfoot/>").appendTo(this);
          0 === j.length || 0 === j.children().length
            ? q.addClass(i.sNoFooter)
            : 0 < j.length && ((o.nTFoot = j[0]), da(o.aoFooter, o.nTFoot));
          if (e.aaData) for (g = 0; g < e.aaData.length; g++) N(o, e.aaData[g]);
          else
            (o.bDeferLoading || "dom" == y(o)) &&
              ma(o, h(o.nTBody).children("tr"));
          o.aiDisplay = o.aiDisplayMaster.slice();
          o.bInitialised = !0;
          !1 === n && ga(o);
        }
      });
      b = null;
      return this;
    },
    v,
    r,
    p,
    s,
    Ya = {},
    Ob = /[\r\n]/g,
    Aa = /<.*?>/g,
    ac = /^[\w\+\-]/,
    bc = /[\w\+\-]$/,
    cc = RegExp(
      "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
      "g"
    ),
    Xa = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
    M = function (a) {
      return !a || !0 === a || "-" === a ? !0 : !1;
    },
    Pb = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    Qb = function (a, b) {
      Ya[b] || (Ya[b] = RegExp(Qa(b), "g"));
      return "string" === typeof a && "." !== b
        ? a.replace(/\./g, "").replace(Ya[b], ".")
        : a;
    },
    Za = function (a, b, c) {
      var d = "string" === typeof a;
      if (M(a)) return !0;
      b && d && (a = Qb(a, b));
      c && d && (a = a.replace(Xa, ""));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    Rb = function (a, b, c) {
      return M(a)
        ? !0
        : !(M(a) || "string" === typeof a)
        ? null
        : Za(a.replace(Aa, ""), b, c)
        ? !0
        : null;
    },
    G = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < f; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    ha = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== k) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else for (; f < g; f++) e.push(a[b[f]][c]);
      return e;
    },
    W = function (a, b) {
      var c = [],
        d;
      b === k ? ((b = 0), (d = a)) : ((d = b), (b = a));
      for (var e = b; e < d; e++) c.push(e);
      return c;
    },
    Sb = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    pa = function (a) {
      var b = [],
        c,
        d,
        e = a.length,
        f,
        g = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++) if (b[f] === c) continue a;
        b.push(c);
        g++;
      }
      return b;
    };
  m.util = {
    throttle: function (a, b) {
      var c = b !== k ? b : 200,
        d,
        e;
      return function () {
        var b = this,
          g = +new Date(),
          h = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = k;
              a.apply(b, h);
            }, c)))
          : ((d = g), a.apply(b, h));
      };
    },
    escapeRegex: function (a) {
      return a.replace(cc, "\\$1");
    },
  };
  var A = function (a, b, c) {
      a[b] !== k && (a[c] = a[b]);
    },
    ba = /\[.*?\]$/,
    U = /\(\)$/,
    Qa = m.util.escapeRegex,
    ua = h("<div>")[0],
    Zb = ua.textContent !== k,
    $b = /<.*?>/g,
    Oa = m.util.throttle,
    Tb = [],
    w = Array.prototype,
    dc = function (a) {
      var b,
        c,
        d = m.settings,
        e = h.map(d, function (a) {
          return a.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase())
          return (b = h.inArray(a, e)), -1 !== b ? [d[b]] : null;
        if (a && "function" === typeof a.settings)
          return a.settings().toArray();
        "string" === typeof a ? (c = h(a)) : a instanceof h && (c = a);
      } else return [];
      if (c)
        return c
          .map(function () {
            b = h.inArray(this, e);
            return -1 !== b ? d[b] : null;
          })
          .toArray();
    };
  r = function (a, b) {
    if (!(this instanceof r)) return new r(a, b);
    var c = [],
      d = function (a) {
        (a = dc(a)) && (c = c.concat(a));
      };
    if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = pa(c);
    b && h.merge(this, b);
    this.selector = { rows: null, cols: null, opts: null };
    r.extend(this, this, Tb);
  };
  m.Api = r;
  h.extend(r.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: w.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new r(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (w.filter) b = w.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          a.call(this, this[c], c, this) && b.push(this[c]);
      return new r(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new r(this.context, a.concat.apply(a, this.toArray()));
    },
    join: w.join,
    indexOf:
      w.indexOf ||
      function (a, b) {
        for (var c = b || 0, d = this.length; c < d; c++)
          if (this[c] === a) return c;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        f,
        g,
        h,
        i,
        n,
        l = this.context,
        m,
        t,
        p = this.selector;
      "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      g = 0;
      for (h = l.length; g < h; g++) {
        var o = new r(l[g]);
        if ("table" === b) (f = c.call(o, l[g], g)), f !== k && e.push(f);
        else if ("columns" === b || "rows" === b)
          (f = c.call(o, l[g], this[g], g)), f !== k && e.push(f);
        else if (
          "column" === b ||
          "column-rows" === b ||
          "row" === b ||
          "cell" === b
        ) {
          t = this[g];
          "column-rows" === b && (m = Ba(l[g], p.opts));
          i = 0;
          for (n = t.length; i < n; i++)
            (f = t[i]),
              (f =
                "cell" === b
                  ? c.call(o, l[g], f.row, f.column, g, i)
                  : c.call(o, l[g], f, g, i, m)),
              f !== k && e.push(f);
        }
      }
      return e.length || d
        ? ((a = new r(l, a ? e.concat.apply([], e) : e)),
          (b = a.selector),
          (b.rows = p.rows),
          (b.cols = p.cols),
          (b.opts = p.opts),
          a)
        : this;
    },
    lastIndexOf:
      w.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (w.map) b = w.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          b.push(a.call(this, this[c], c));
      return new r(this.context, b);
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: w.pop,
    push: w.push,
    reduce:
      w.reduce ||
      function (a, b) {
        return hb(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      w.reduceRight ||
      function (a, b) {
        return hb(this, a, b, this.length - 1, -1, -1);
      },
    reverse: w.reverse,
    selector: null,
    shift: w.shift,
    sort: w.sort,
    splice: w.splice,
    toArray: function () {
      return w.slice.call(this);
    },
    to$: function () {
      return h(this);
    },
    toJQuery: function () {
      return h(this);
    },
    unique: function () {
      return new r(this.context, pa(this));
    },
    unshift: w.unshift,
  });
  r.extend = function (a, b, c) {
    if (c.length && b && (b instanceof r || b.__dt_wrapper)) {
      var d,
        e,
        f,
        g = function (a, b, c) {
          return function () {
            var d = b.apply(a, arguments);
            r.extend(d, d, c.methodExt);
            return d;
          };
        };
      d = 0;
      for (e = c.length; d < e; d++)
        (f = c[d]),
          (b[f.name] =
            "function" === typeof f.val
              ? g(a, f.val, f)
              : h.isPlainObject(f.val)
              ? {}
              : f.val),
          (b[f.name].__dt_wrapper = !0),
          r.extend(a, b[f.name], f.propExt);
    }
  };
  r.register = p = function (a, b) {
    if (h.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) r.register(a[c], b);
    else
      for (
        var e = a.split("."), f = Tb, g, j, c = 0, d = e.length;
        c < d;
        c++
      ) {
        g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a: {
          i = 0;
          for (var n = f.length; i < n; i++)
            if (f[i].name === g) {
              i = f[i];
              break a;
            }
          i = null;
        }
        i ||
          ((i = { name: g, val: {}, methodExt: [], propExt: [] }), f.push(i));
        c === d - 1 ? (i.val = b) : (f = j ? i.methodExt : i.propExt);
      }
  };
  r.registerPlural = s = function (a, b, c) {
    r.register(a, c);
    r.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this
        ? this
        : a instanceof r
        ? a.length
          ? h.isArray(a[0])
            ? new r(a.context, a[0])
            : a[0]
          : k
        : a;
    });
  };
  p("tables()", function (a) {
    var b;
    if (a) {
      b = r;
      var c = this.context;
      if ("number" === typeof a) a = [c[a]];
      else
        var d = h.map(c, function (a) {
            return a.nTable;
          }),
          a = h(d)
            .filter(a)
            .map(function () {
              var a = h.inArray(this, d);
              return c[a];
            })
            .toArray();
      b = new b(a);
    } else b = this;
    return b;
  });
  p("table()", function (a) {
    var a = this.tables(a),
      b = a.context;
    return b.length ? new r(b[0]) : a;
  });
  s("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTable;
      },
      1
    );
  });
  s("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTBody;
      },
      1
    );
  });
  s("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTHead;
      },
      1
    );
  });
  s("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTFoot;
      },
      1
    );
  });
  s("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTableWrapper;
      },
      1
    );
  });
  p("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a
        ? O(b)
        : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
          T(b, !1 === a));
    });
  });
  p("page()", function (a) {
    return a === k
      ? this.page.info().page
      : this.iterator("table", function (b) {
          Ta(b, a);
        });
  });
  p("page.info()", function () {
    if (0 === this.context.length) return k;
    var a = this.context[0],
      b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === y(a),
    };
  });
  p("page.len()", function (a) {
    return a === k
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : k
      : this.iterator("table", function (b) {
          Ra(b, a);
        });
  });
  var Ub = function (a, b, c) {
    if (c) {
      var d = new r(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }
    if ("ssp" == y(a)) T(a, b);
    else {
      C(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      ra(a, [], function (c) {
        na(a);
        for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) N(a, c[d]);
        T(a, b);
        C(a, !1);
      });
    }
  };
  p("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  p("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  p("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Ub(c, !1 === b, a);
    });
  });
  p("ajax.url()", function (a) {
    var b = this.context;
    if (a === k) {
      if (0 === b.length) return k;
      b = b[0];
      return b.ajax
        ? h.isPlainObject(b.ajax)
          ? b.ajax.url
          : b.ajax
        : b.sAjaxSource;
    }
    return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
    });
  });
  p("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Ub(c, !1 === b, a);
    });
  });
  var $a = function (a, b, c, d, e) {
      var f = [],
        g,
        j,
        i,
        n,
        l,
        m;
      i = typeof b;
      if (!b || "string" === i || "function" === i || b.length === k) b = [b];
      i = 0;
      for (n = b.length; i < n; i++) {
        j = b[i] && b[i].split ? b[i].split(",") : [b[i]];
        l = 0;
        for (m = j.length; l < m; l++)
          (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) &&
            g.length &&
            (f = f.concat(g));
      }
      a = v.selector[a];
      if (a.length) {
        i = 0;
        for (n = a.length; i < n; i++) f = a[i](d, e, f);
      }
      return pa(f);
    },
    ab = function (a) {
      a || (a = {});
      a.filter && a.search === k && (a.search = a.filter);
      return h.extend({ search: "none", order: "current", page: "all" }, a);
    },
    bb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length)
          return (
            (a[0] = a[b]),
            (a[0].length = 1),
            (a.length = 1),
            (a.context = [a.context[b]]),
            a
          );
      a.length = 0;
      return a;
    },
    Ba = function (a, b) {
      var c,
        d,
        e,
        f = [],
        g = a.aiDisplay;
      c = a.aiDisplayMaster;
      var j = b.search;
      d = b.order;
      e = b.page;
      if ("ssp" == y(a)) return "removed" === j ? [] : W(0, c.length);
      if ("current" == e) {
        c = a._iDisplayStart;
        for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]);
      } else if ("current" == d || "applied" == d)
        f =
          "none" == j
            ? c.slice()
            : "applied" == j
            ? g.slice()
            : h.map(c, function (a) {
                return -1 === h.inArray(a, g) ? a : null;
              });
      else if ("index" == d || "original" == d) {
        c = 0;
        for (d = a.aoData.length; c < d; c++)
          "none" == j
            ? f.push(c)
            : ((e = h.inArray(c, g)),
              ((-1 === e && "removed" == j) || (0 <= e && "applied" == j)) &&
                f.push(c));
      }
      return f;
    };
  p("rows()", function (a, b) {
    a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
    var b = ab(b),
      c = this.iterator(
        "table",
        function (c) {
          var e = b;
          return $a(
            "row",
            a,
            function (a) {
              var b = Pb(a);
              if (b !== null && !e) return [b];
              var j = Ba(c, e);
              if (b !== null && h.inArray(b, j) !== -1) return [b];
              if (!a) return j;
              if (typeof a === "function")
                return h.map(j, function (b) {
                  var e = c.aoData[b];
                  return a(b, e._aData, e.nTr) ? b : null;
                });
              b = Sb(ha(c.aoData, j, "nTr"));
              if (a.nodeName) {
                if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
                if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                b = h(a).closest("*[data-dt-row]");
                return b.length ? [b.data("dt-row")] : [];
              }
              if (typeof a === "string" && a.charAt(0) === "#") {
                j = c.aIds[a.replace(/^#/, "")];
                if (j !== k) return [j.idx];
              }
              return h(b)
                .filter(a)
                .map(function () {
                  return this._DT_RowIndex;
                })
                .toArray();
            },
            c,
            e
          );
        },
        1
      );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  p("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return a.aoData[b].nTr || k;
      },
      1
    );
  });
  p("rows().data()", function () {
    return this.iterator(
      !0,
      "rows",
      function (a, b) {
        return ha(a.aoData, b, "_aData");
      },
      1
    );
  });
  s("rows().cache()", "row().cache()", function (a) {
    return this.iterator(
      "row",
      function (b, c) {
        var d = b.aoData[c];
        return "search" === a ? d._aFilterData : d._aSortData;
      },
      1
    );
  });
  s("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      ca(b, c, a);
    });
  });
  s("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return b;
      },
      1
    );
  });
  s("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    return new r(c, b);
  });
  s("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g,
        h,
        i,
        n,
        l;
      e.splice(c, 1);
      g = 0;
      for (h = e.length; g < h; g++)
        if (
          ((i = e[g]),
          (l = i.anCells),
          null !== i.nTr && (i.nTr._DT_RowIndex = g),
          null !== l)
        ) {
          i = 0;
          for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g;
        }
      oa(b.aiDisplayMaster, c);
      oa(b.aiDisplay, c);
      oa(a[d], c, !1);
      Sa(b);
      c = b.rowIdFn(f._aData);
      c !== k && delete b.aIds[c];
    });
    this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c;
    });
    return this;
  });
  p("rows.add()", function (a) {
    var b = this.iterator(
        "table",
        function (b) {
          var c,
            f,
            g,
            h = [];
          f = 0;
          for (g = a.length; f < g; f++)
            (c = a[f]),
              c.nodeName && "TR" === c.nodeName.toUpperCase()
                ? h.push(ma(b, c)[0])
                : h.push(N(b, c));
          return h;
        },
        1
      ),
      c = this.rows(-1);
    c.pop();
    h.merge(c, b);
    return c;
  });
  p("row()", function (a, b) {
    return bb(this.rows(a, b));
  });
  p("row().data()", function (a) {
    var b = this.context;
    if (a === k)
      return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
    b[0].aoData[this[0]]._aData = a;
    ca(b[0], this[0], "data");
    return this;
  });
  p("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  p("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase()
        ? ma(b, a)[0]
        : N(b, a);
    });
    return this.row(b[0]);
  });
  var cb = function (a, b) {
      var c = a.context;
      if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details)
        c._details.remove(), (c._detailsShow = k), (c._details = k);
    },
    Vb = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        if (d._details) {
          (d._detailsShow = b)
            ? d._details.insertAfter(d.nTr)
            : d._details.detach();
          var e = c[0],
            f = new r(e),
            g = e.aoData;
          f.off(
            "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
          );
          0 < G(g, "_details").length &&
            (f.on("draw.dt.DT_details", function (a, b) {
              e === b &&
                f
                  .rows({ page: "current" })
                  .eq(0)
                  .each(function (a) {
                    a = g[a];
                    a._detailsShow && a._details.insertAfter(a.nTr);
                  });
            }),
            f.on("column-visibility.dt.DT_details", function (a, b) {
              if (e === b)
                for (var c, d = aa(b), f = 0, h = g.length; f < h; f++)
                  (c = g[f]),
                    c._details &&
                      c._details.children("td[colspan]").attr("colspan", d);
            }),
            f.on("destroy.dt.DT_details", function (a, b) {
              if (e === b)
                for (var c = 0, d = g.length; c < d; c++)
                  g[c]._details && cb(f, c);
            }));
        }
      }
    };
  p("row().child()", function (a, b) {
    var c = this.context;
    if (a === k)
      return c.length && this.length ? c[0].aoData[this[0]]._details : k;
    if (!0 === a) this.child.show();
    else if (!1 === a) cb(this);
    else if (c.length && this.length) {
      var d = c[0],
        c = c[0].aoData[this[0]],
        e = [],
        f = function (a, b) {
          if (h.isArray(a) || a instanceof h)
            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
          else
            a.nodeName && "tr" === a.nodeName.toLowerCase()
              ? e.push(a)
              : ((c = h("<tr><td/></tr>").addClass(b)),
                (h("td", c).addClass(b).html(a)[0].colSpan = aa(d)),
                e.push(c[0]));
        };
      f(a, b);
      c._details && c._details.remove();
      c._details = h(e);
      c._detailsShow && c._details.insertAfter(c.nTr);
    }
    return this;
  });
  p(["row().child.show()", "row().child().show()"], function () {
    Vb(this, !0);
    return this;
  });
  p(["row().child.hide()", "row().child().hide()"], function () {
    Vb(this, !1);
    return this;
  });
  p(["row().child.remove()", "row().child().remove()"], function () {
    cb(this);
    return this;
  });
  p("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length
      ? a[0].aoData[this[0]]._detailsShow || !1
      : !1;
  });
  var ec = /^(.+):(name|visIdx|visible)$/,
    Wb = function (a, b, c, d, e) {
      for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
      return c;
    };
  p("columns()", function (a, b) {
    a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
    var b = ab(b),
      c = this.iterator(
        "table",
        function (c) {
          var e = a,
            f = b,
            g = c.aoColumns,
            j = G(g, "sName"),
            i = G(g, "nTh");
          return $a(
            "column",
            e,
            function (a) {
              var b = Pb(a);
              if (a === "") return W(g.length);
              if (b !== null) return [b >= 0 ? b : g.length + b];
              if (typeof a === "function") {
                var e = Ba(c, f);
                return h.map(g, function (b, f) {
                  return a(f, Wb(c, f, 0, 0, e), i[f]) ? f : null;
                });
              }
              var k = typeof a === "string" ? a.match(ec) : "";
              if (k)
                switch (k[2]) {
                  case "visIdx":
                  case "visible":
                    b = parseInt(k[1], 10);
                    if (b < 0) {
                      var m = h.map(g, function (a, b) {
                        return a.bVisible ? b : null;
                      });
                      return [m[m.length + b]];
                    }
                    return [Z(c, b)];
                  case "name":
                    return h.map(j, function (a, b) {
                      return a === k[1] ? b : null;
                    });
                  default:
                    return [];
                }
              if (a.nodeName && a._DT_CellIndex)
                return [a._DT_CellIndex.column];
              b = h(i)
                .filter(a)
                .map(function () {
                  return h.inArray(this, i);
                })
                .toArray();
              if (b.length || !a.nodeName) return b;
              b = h(a).closest("*[data-dt-column]");
              return b.length ? [b.data("dt-column")] : [];
            },
            c,
            f
          );
        },
        1
      );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  s("columns().header()", "column().header()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].nTh;
      },
      1
    );
  });
  s("columns().footer()", "column().footer()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].nTf;
      },
      1
    );
  });
  s("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Wb, 1);
  });
  s("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1
    );
  });
  s("columns().cache()", "column().cache()", function (a) {
    return this.iterator(
      "column-rows",
      function (b, c, d, e, f) {
        return ha(
          b.aoData,
          f,
          "search" === a ? "_aFilterData" : "_aSortData",
          c
        );
      },
      1
    );
  });
  s("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (a, b, c, d, e) {
        return ha(a.aoData, e, "anCells", b);
      },
      1
    );
  });
  s("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;
      var f = b.aoColumns,
        g = f[c],
        j = b.aoData,
        i,
        n,
        l;
      if (a !== k && g.bVisible !== a) {
        if (a) {
          var m = h.inArray(!0, G(f, "bVisible"), c + 1);
          i = 0;
          for (n = j.length; i < n; i++)
            (l = j[i].nTr),
              (f = j[i].anCells),
              l && l.insertBefore(f[c], f[m] || null);
        } else h(G(b.aoData, "anCells", c)).detach();
        g.bVisible = a;
        ea(b, b.aoHeader);
        ea(b, b.aoFooter);
        wa(b);
      }
    });
    a !== k &&
      (this.iterator("column", function (c, e) {
        u(c, null, "column-visibility", [c, e, a, b]);
      }),
      (b === k || b) && this.columns.adjust());
    return c;
  });
  s("columns().indexes()", "column().index()", function (a) {
    return this.iterator(
      "column",
      function (b, c) {
        return "visible" === a ? $(b, c) : c;
      },
      1
    );
  });
  p("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (a) {
        Y(a);
      },
      1
    );
  });
  p("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return Z(c, b);
      if ("fromData" === a || "toVisible" === a) return $(c, b);
    }
  });
  p("column()", function (a, b) {
    return bb(this.columns(a, b));
  });
  p("cells()", function (a, b, c) {
    h.isPlainObject(a) &&
      (a.row === k ? ((c = a), (a = null)) : ((c = b), (b = null)));
    h.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === k)
      return this.iterator("table", function (b) {
        var d = a,
          e = ab(c),
          f = b.aoData,
          g = Ba(b, e),
          j = Sb(ha(f, g, "anCells")),
          i = h([].concat.apply([], j)),
          l,
          n = b.aoColumns.length,
          m,
          p,
          r,
          u,
          v,
          s;
        return $a(
          "cell",
          d,
          function (a) {
            var c = typeof a === "function";
            if (a === null || a === k || c) {
              m = [];
              p = 0;
              for (r = g.length; p < r; p++) {
                l = g[p];
                for (u = 0; u < n; u++) {
                  v = { row: l, column: u };
                  if (c) {
                    s = f[l];
                    a(v, B(b, l, u), s.anCells ? s.anCells[u] : null) &&
                      m.push(v);
                  } else m.push(v);
                }
              }
              return m;
            }
            if (h.isPlainObject(a)) return [a];
            c = i
              .filter(a)
              .map(function (a, b) {
                return {
                  row: b._DT_CellIndex.row,
                  column: b._DT_CellIndex.column,
                };
              })
              .toArray();
            if (c.length || !a.nodeName) return c;
            s = h(a).closest("*[data-dt-row]");
            return s.length
              ? [{ row: s.data("dt-row"), column: s.data("dt-column") }]
              : [];
          },
          b,
          e
        );
      });
    var d = this.columns(b, c),
      e = this.rows(a, c),
      f,
      g,
      j,
      i,
      n,
      l = this.iterator(
        "table",
        function (a, b) {
          f = [];
          g = 0;
          for (j = e[b].length; g < j; g++) {
            i = 0;
            for (n = d[b].length; i < n; i++)
              f.push({ row: e[b][g], column: d[b][i] });
          }
          return f;
        },
        1
      );
    h.extend(l.selector, { cols: b, rows: a, opts: c });
    return l;
  });
  s("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
      },
      1
    );
  });
  p("cells().data()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return B(a, b, c);
      },
      1
    );
  });
  s("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1
    );
  });
  s("cells().render()", "cell().render()", function (a) {
    return this.iterator(
      "cell",
      function (b, c, d) {
        return B(b, c, d, a);
      },
      1
    );
  });
  s("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return { row: b, column: c, columnVisible: $(a, c) };
      },
      1
    );
  });
  s("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      ca(b, c, a, d);
    });
  });
  p("cell()", function (a, b, c) {
    return bb(this.cells(a, b, c));
  });
  p("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === k)
      return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
    jb(b[0], c[0].row, c[0].column, a);
    ca(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  p("order()", function (a, b) {
    var c = this.context;
    if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
    "number" === typeof a
      ? (a = [[a, b]])
      : a.length &&
        !h.isArray(a[0]) &&
        (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice();
    });
  });
  p("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      Ma(d, a, b, c);
    });
  });
  p("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
        b = b.length ? b[0].aaSortingFixed : k;
      return h.isArray(b) ? { pre: b } : b;
    }
    return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a);
    });
  });
  p(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      h.each(b[d], function (b, c) {
        e.push([c, a]);
      });
      c.aaSorting = e;
    });
  });
  p("search()", function (a, b, c, d) {
    var e = this.context;
    return a === k
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : k
      : this.iterator("table", function (e) {
          e.oFeatures.bFilter &&
            fa(
              e,
              h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1
            );
        });
  });
  s("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === k) return g[f].sSearch;
      e.oFeatures.bFilter &&
        (h.extend(g[f], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d,
        }),
        fa(e, e.oPreviousSearch, 1));
    });
  });
  p("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  p("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  p("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  p("state.save()", function () {
    return this.iterator("table", function (a) {
      wa(a);
    });
  });
  m.versionCheck = m.fnVersionCheck = function (a) {
    for (
      var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length;
      e < f;
      e++
    )
      if (
        ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
      )
        return c > d;
    return !0;
  };
  m.isDataTable = m.fnIsDataTable = function (a) {
    var b = h(a).get(0),
      c = !1;
    h.each(m.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
        g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0;
    });
    return c;
  };
  m.tables = m.fnTables = function (a) {
    var b = !1;
    h.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = h.map(m.settings, function (b) {
      if (!a || (a && h(b.nTable).is(":visible"))) return b.nTable;
    });
    return b ? new r(c) : c;
  };
  m.camelToHungarian = K;
  p("$()", function (a, b) {
    var c = this.rows(b).nodes(),
      c = h(c);
    return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
  });
  h.each(["on", "one", "off"], function (a, b) {
    p(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0].match(/\.dt\b/) || (a[0] += ".dt");
      var d = h(this.tables().nodes());
      d[b].apply(d, a);
      return this;
    });
  });
  p("clear()", function () {
    return this.iterator("table", function (a) {
      na(a);
    });
  });
  p("settings()", function () {
    return new r(this.context, this.context);
  });
  p("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  p("data()", function () {
    return this.iterator("table", function (a) {
      return G(a.aoData, "_aData");
    }).flatten();
  });
  p("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        j = b.nTFoot,
        i = h(e),
        f = h(f),
        k = h(b.nTableWrapper),
        l = h.map(b.aoData, function (a) {
          return a.nTr;
        }),
        p;
      b.bDestroying = !0;
      u(b, "aoDestroyCallback", "destroy", [b]);
      a || new r(b).columns().visible(!0);
      k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
      h(D).unbind(".DT-" + b.sInstance);
      e != g.parentNode && (i.children("thead").detach(), i.append(g));
      j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      va(b);
      h(l).removeClass(b.asStripeClasses.join(" "));
      h("th, td", g).removeClass(
        d.sSortable +
          " " +
          d.sSortableAsc +
          " " +
          d.sSortableDesc +
          " " +
          d.sSortableNone
      );
      b.bJUI &&
        (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(),
        h("th, td", g).each(function () {
          var a = h("div." + d.sSortJUIWrapper, this);
          h(this).append(a.contents());
          a.detach();
        }));
      f.children().detach();
      f.append(l);
      g = a ? "remove" : "detach";
      i[g]();
      k[g]();
      !a &&
        c &&
        (c.insertBefore(e, b.nTableReinsertBefore),
        i.css("width", b.sDestroyWidth).removeClass(d.sTable),
        (p = b.asDestroyStripes.length) &&
          f.children().each(function (a) {
            h(this).addClass(b.asDestroyStripes[a % p]);
          }));
      c = h.inArray(b, m.settings);
      -1 !== c && m.settings.splice(c, 1);
    });
  });
  h.each(["column", "row", "cell"], function (a, b) {
    p(b + "s().every()", function (a) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, i, n) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, n);
      });
    });
  });
  p("i18n()", function (a, b, c) {
    var d = this.context[0],
      a = Q(a)(d.oLanguage);
    a === k && (a = b);
    c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
    return a.replace("%d", c);
  });
  m.version = "1.10.12";
  m.settings = [];
  m.models = {};
  m.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
  };
  m.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
  };
  m.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  m.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bJQueryUI: !1,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse(
          (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + a.sInstance + "_" + location.pathname
          )
        );
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + a.sInstance + "_" + location.pathname,
          JSON.stringify(b)
        );
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous",
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found",
    },
    oSearch: h.extend({}, m.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
  };
  X(m.defaults);
  m.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  X(m.defaults.column);
  m.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: k,
    oAjaxData: k,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    bJUI: null,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == y(this)
        ? 1 * this._iRecordsTotal
        : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return "ssp" == y(this)
        ? 1 * this._iRecordsDisplay
        : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide
        ? !1 === f || -1 === a
          ? b + d
          : Math.min(b + a, this._iRecordsDisplay)
        : !f || c > d || -1 === a
        ? d
        : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  m.ext = v = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: m.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: m.version,
  };
  h.extend(v, {
    afnFiltering: v.search,
    aTypes: v.type.detect,
    ofnSearch: v.type.search,
    oSort: v.type.order,
    afnSortData: v.order,
    aoFeatures: v.feature,
    oApi: v.internal,
    oStdClasses: v.classes,
    oPagination: v.pager,
  });
  h.extend(m.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var Ca = "",
    Ca = "",
    H = Ca + "ui-state-default",
    ia = Ca + "css_right ui-icon ui-icon-",
    Xb = Ca + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
  h.extend(m.ext.oJUIClasses, m.ext.classes, {
    sPageButton: "fg-button ui-button " + H,
    sPageButtonActive: "ui-state-disabled",
    sPageButtonDisabled: "ui-state-disabled",
    sPaging:
      "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
    sSortAsc: H + " sorting_asc",
    sSortDesc: H + " sorting_desc",
    sSortable: H + " sorting",
    sSortableAsc: H + " sorting_asc_disabled",
    sSortableDesc: H + " sorting_desc_disabled",
    sSortableNone: H + " sorting_disabled",
    sSortJUIAsc: ia + "triangle-1-n",
    sSortJUIDesc: ia + "triangle-1-s",
    sSortJUI: ia + "carat-2-n-s",
    sSortJUIAscAllowed: ia + "carat-1-n",
    sSortJUIDescAllowed: ia + "carat-1-s",
    sSortJUIWrapper: "DataTables_sort_wrapper",
    sSortIcon: "DataTables_sort_icon",
    sScrollHead: "dataTables_scrollHead " + H,
    sScrollFoot: "dataTables_scrollFoot " + H,
    sHeaderTH: H,
    sFooterTH: H,
    sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
    sJUIFooter: Xb + " ui-corner-bl ui-corner-br",
  });
  var Mb = m.ext.pager;
  h.extend(Mb, {
    simple: function () {
      return ["previous", "next"];
    },
    full: function () {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (a, b) {
      return [ya(a, b)];
    },
    simple_numbers: function (a, b) {
      return ["previous", ya(a, b), "next"];
    },
    full_numbers: function (a, b) {
      return ["first", "previous", ya(a, b), "next", "last"];
    },
    _numbers: ya,
    numbers_length: 7,
  });
  h.extend(!0, m.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          j = a.oLanguage.oPaginate,
          i = a.oLanguage.oAria.paginate || {},
          k,
          l,
          m = 0,
          p = function (b, d) {
            var o,
              r,
              u,
              s,
              v = function (b) {
                Ta(a, b.data.action, true);
              };
            o = 0;
            for (r = d.length; o < r; o++) {
              s = d[o];
              if (h.isArray(s)) {
                u = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                p(u, s);
              } else {
                k = null;
                l = "";
                switch (s) {
                  case "ellipsis":
                    b.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    k = j.sFirst;
                    l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "previous":
                    k = j.sPrevious;
                    l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "next":
                    k = j.sNext;
                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "last":
                    k = j.sLast;
                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  default:
                    k = s + 1;
                    l = e === s ? g.sPageButtonActive : "";
                }
                if (k !== null) {
                  u = h("<a>", {
                    class: g.sPageButton + " " + l,
                    "aria-controls": a.sTableId,
                    "aria-label": i[s],
                    "data-dt-idx": m,
                    tabindex: a.iTabIndex,
                    id:
                      c === 0 && typeof s === "string"
                        ? a.sTableId + "_" + s
                        : null,
                  })
                    .html(k)
                    .appendTo(b);
                  Wa(u, { action: s }, v);
                  m++;
                }
              }
            }
          },
          r;
        try {
          r = h(b).find(I.activeElement).data("dt-idx");
        } catch (o) {}
        p(h(b).empty(), d);
        r &&
          h(b)
            .find("[data-dt-idx=" + r + "]")
            .focus();
      },
    },
  });
  h.extend(m.ext.type.detect, [
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Za(a, c) ? "num" + c : null;
    },
    function (a) {
      if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a)))
        return null;
      var b = Date.parse(a);
      return (null !== b && !isNaN(b)) || M(a) ? "date" : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Za(a, c, !0) ? "num-fmt" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Rb(a, c) ? "html-num" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Rb(a, c, !0) ? "html-num-fmt" + c : null;
    },
    function (a) {
      return M(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  h.extend(m.ext.type.search, {
    html: function (a) {
      return M(a)
        ? a
        : "string" === typeof a
        ? a.replace(Ob, " ").replace(Aa, "")
        : "";
    },
    string: function (a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a;
    },
  });
  var za = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Qb(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };
  h.extend(v.type.order, {
    "date-pre": function (a) {
      return Date.parse(a) || 0;
    },
    "html-pre": function (a) {
      return M(a)
        ? ""
        : a.replace
        ? a.replace(/<.*?>/g, "").toLowerCase()
        : a + "";
    },
    "string-pre": function (a) {
      return M(a)
        ? ""
        : "string" === typeof a
        ? a.toLowerCase()
        : !a.toString
        ? ""
        : a.toString();
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  db("");
  h.extend(!0, m.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(
              c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc
            ).addClass(
              h[e] == "asc"
                ? d.sSortAsc
                : h[e] == "desc"
                ? d.sSortDesc
                : c.sSortingClass
            );
          }
        });
      },
      jqueryui: function (a, b, c, d) {
        h("<div/>")
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
          .appendTo(b);
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(
              h[e] == "asc"
                ? d.sSortAsc
                : h[e] == "desc"
                ? d.sSortDesc
                : c.sSortingClass
            );
            b.find("span." + d.sSortIcon)
              .removeClass(
                d.sSortJUIAsc +
                  " " +
                  d.sSortJUIDesc +
                  " " +
                  d.sSortJUI +
                  " " +
                  d.sSortJUIAscAllowed +
                  " " +
                  d.sSortJUIDescAllowed
              )
              .addClass(
                h[e] == "asc"
                  ? d.sSortJUIAsc
                  : h[e] == "desc"
                  ? d.sSortJUIDesc
                  : c.sSortingClassJUI
              );
          }
        });
      },
    },
  });
  var Yb = function (a) {
    return "string" === typeof a
      ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
      : a;
  };
  m.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return Yb(f);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return (
            g +
            (d || "") +
            h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
            f +
            (e || "")
          );
        },
      };
    },
    text: function () {
      return { display: Yb };
    },
  };
  h.extend(m.ext.internal, {
    _fnExternApiFunc: Nb,
    _fnBuildAjax: ra,
    _fnAjaxUpdate: lb,
    _fnAjaxParameters: ub,
    _fnAjaxUpdateDraw: vb,
    _fnAjaxDataSrc: sa,
    _fnAddColumn: Ea,
    _fnColumnOptions: ja,
    _fnAdjustColumnSizing: Y,
    _fnVisibleToColumnIndex: Z,
    _fnColumnIndexToVisible: $,
    _fnVisbleColumns: aa,
    _fnGetColumns: la,
    _fnColumnTypes: Ga,
    _fnApplyColumnDefs: ib,
    _fnHungarianMap: X,
    _fnCamelToHungarian: K,
    _fnLanguageCompat: Da,
    _fnBrowserDetect: gb,
    _fnAddData: N,
    _fnAddTr: ma,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return h.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: B,
    _fnSetCellData: jb,
    _fnSplitObjNotation: Ja,
    _fnGetObjectDataFn: Q,
    _fnSetObjectDataFn: R,
    _fnGetDataMaster: Ka,
    _fnClearTable: na,
    _fnDeleteIndex: oa,
    _fnInvalidate: ca,
    _fnGetRowElements: Ia,
    _fnCreateTr: Ha,
    _fnBuildHead: kb,
    _fnDrawHead: ea,
    _fnDraw: O,
    _fnReDraw: T,
    _fnAddOptionsHtml: nb,
    _fnDetectHeader: da,
    _fnGetUniqueThs: qa,
    _fnFeatureHtmlFilter: pb,
    _fnFilterComplete: fa,
    _fnFilterCustom: yb,
    _fnFilterColumn: xb,
    _fnFilter: wb,
    _fnFilterCreateSearch: Pa,
    _fnEscapeRegex: Qa,
    _fnFilterData: zb,
    _fnFeatureHtmlInfo: sb,
    _fnUpdateInfo: Cb,
    _fnInfoMacros: Db,
    _fnInitialise: ga,
    _fnInitComplete: ta,
    _fnLengthChange: Ra,
    _fnFeatureHtmlLength: ob,
    _fnFeatureHtmlPaginate: tb,
    _fnPageChange: Ta,
    _fnFeatureHtmlProcessing: qb,
    _fnProcessingDisplay: C,
    _fnFeatureHtmlTable: rb,
    _fnScrollDraw: ka,
    _fnApplyToChildren: J,
    _fnCalculateColumnWidths: Fa,
    _fnThrottle: Oa,
    _fnConvertToWidth: Fb,
    _fnGetWidestNode: Gb,
    _fnGetMaxLenString: Hb,
    _fnStringToCss: x,
    _fnSortFlatten: V,
    _fnSort: mb,
    _fnSortAria: Jb,
    _fnSortListener: Va,
    _fnSortAttachListener: Ma,
    _fnSortingClasses: va,
    _fnSortData: Ib,
    _fnSaveState: wa,
    _fnLoadState: Kb,
    _fnSettingsFromNode: xa,
    _fnLog: L,
    _fnMap: E,
    _fnBindAction: Wa,
    _fnCallbackReg: z,
    _fnCallbackFire: u,
    _fnLengthOverflow: Sa,
    _fnRenderer: Na,
    _fnDataSource: y,
    _fnRowAttributes: La,
    _fnCalculateEnd: function () {},
  });
  h.fn.dataTable = m;
  m.$ = h;
  h.fn.dataTableSettings = m.settings;
  h.fn.dataTableExt = m.ext;
  h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api();
  };
  h.each(m, function (a, b) {
    h.fn.DataTable[a] = b;
  });
  return h.fn.dataTable;
});
/*!
     DataTables Bootstrap 3 integration
     Â©2011-2014 SpryMedia Ltd - datatables.net/license
    */
(function (l, q) {
  var e = function (b, c) {
    b.extend(!0, c.defaults, {
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
      renderer: "bootstrap",
    });
    b.extend(c.ext.classes, {
      sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
      sFilterInput: "form-control input-sm",
      sLengthSelect: "form-control input-sm",
    });
    c.ext.renderer.pageButton.bootstrap = function (g, e, r, s, i, m) {
      var t = new c.Api(g),
        u = g.oClasses,
        j = g.oLanguage.oPaginate,
        d,
        f,
        n = 0,
        p = function (c, e) {
          var k,
            h,
            o,
            a,
            l = function (a) {
              a.preventDefault();
              b(a.currentTarget).hasClass("disabled") ||
                t.page(a.data.action).draw(!1);
            };
          k = 0;
          for (h = e.length; k < h; k++)
            if (((a = e[k]), b.isArray(a))) p(c, a);
            else {
              f = d = "";
              switch (a) {
                case "ellipsis":
                  d = "&hellip;";
                  f = "disabled";
                  break;
                case "first":
                  d = j.sFirst;
                  f = a + (0 < i ? "" : " disabled");
                  break;
                case "previous":
                  d = j.sPrevious;
                  f = a + (0 < i ? "" : " disabled");
                  break;
                case "next":
                  d = j.sNext;
                  f = a + (i < m - 1 ? "" : " disabled");
                  break;
                case "last":
                  d = j.sLast;
                  f = a + (i < m - 1 ? "" : " disabled");
                  break;
                default:
                  (d = a + 1), (f = i === a ? "active" : "");
              }
              d &&
                ((o = b("<li>", {
                  class: u.sPageButton + " " + f,
                  id:
                    0 === r && "string" === typeof a
                      ? g.sTableId + "_" + a
                      : null,
                })
                  .append(
                    b("<a>", {
                      href: "#",
                      "aria-controls": g.sTableId,
                      "data-dt-idx": n,
                      tabindex: g.iTabIndex,
                    }).html(d)
                  )
                  .appendTo(c)),
                g.oApi._fnBindAction(o, { action: a }, l),
                n++);
            }
        },
        h;
      try {
        h = b(q.activeElement).data("dt-idx");
      } catch (l) {}
      p(b(e).empty().html('<ul class="pagination"/>').children("ul"), s);
      h &&
        b(e)
          .find("[data-dt-idx=" + h + "]")
          .focus();
    };
    c.TableTools &&
      (b.extend(!0, c.TableTools.classes, {
        container: "DTTT btn-group",
        buttons: { normal: "btn btn-default", disabled: "disabled" },
        collection: {
          container: "DTTT_dropdown dropdown-menu",
          buttons: { normal: "", disabled: "disabled" },
        },
        print: { info: "DTTT_print_info" },
        select: { row: "active" },
      }),
      b.extend(!0, c.TableTools.DEFAULTS.oTags, {
        collection: { container: "ul", button: "li", liner: "a" },
      }));
  };
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables"], e)
    : "object" === typeof exports
    ? e(require("jquery"), require("datatables"))
    : jQuery && e(jQuery, jQuery.fn.dataTable);
})(window, document);

/*
 * bootstrap-tagsinput v0.8.0
 *
 */

(function ($) {
  "use strict";

  var defaultOptions = {
    tagClass: function (item) {
      return "label label-info";
    },
    focusClass: "focus",
    itemValue: function (item) {
      return item ? item.toString() : item;
    },
    itemText: function (item) {
      return this.itemValue(item);
    },
    itemTitle: function (item) {
      return null;
    },
    freeInput: true,
    addOnBlur: true,
    maxTags: undefined,
    maxChars: undefined,
    confirmKeys: [13, 44],
    delimiter: ",",
    delimiterRegex: null,
    cancelConfirmKeysOnEmpty: false,
    onTagExists: function (item, $tag) {
      $tag.hide().fadeIn();
    },
    trimValue: false,
    allowDuplicates: false,
    triggerChange: true,
  };

  /**
   * Constructor function
   */
  function TagsInput(element, options) {
    this.isInit = true;
    this.itemsArray = [];

    this.$element = $(element);
    this.$element.hide();

    this.isSelect = element.tagName === "SELECT";
    this.multiple = this.isSelect && element.hasAttribute("multiple");
    this.objectItems = options && options.itemValue;
    this.placeholderText = element.hasAttribute("placeholder")
      ? this.$element.attr("placeholder")
      : "";
    this.inputSize = Math.max(1, this.placeholderText.length);

    this.$container = $('<div class="bootstrap-tagsinput"></div>');
    this.$input = $(
      '<input type="text" placeholder="' + this.placeholderText + '"/>'
    ).appendTo(this.$container);

    this.$element.before(this.$container);

    this.build(options);
    this.isInit = false;
  }

  TagsInput.prototype = {
    constructor: TagsInput,

    /**
     * Adds the given item as a new tag. Pass true to dontPushVal to prevent
     * updating the elements val()
     */
    add: function (item, dontPushVal, options) {
      var self = this;

      if (
        self.options.maxTags &&
        self.itemsArray.length >= self.options.maxTags
      )
        return;

      // Ignore falsey values, except false
      if (item !== false && !item) return;

      // Trim value
      if (typeof item === "string" && self.options.trimValue) {
        item = $.trim(item);
      }

      // Throw an error when trying to add an object while the itemValue option was not set
      if (typeof item === "object" && !self.objectItems)
        throw "Can't add objects when itemValue option is not set";

      // Ignore strings only containg whitespace
      if (item.toString().match(/^\s*$/)) return;

      // If SELECT but not multiple, remove current tag
      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
        self.remove(self.itemsArray[0]);

      if (typeof item === "string" && this.$element[0].tagName === "INPUT") {
        var delimiter = self.options.delimiterRegex
          ? self.options.delimiterRegex
          : self.options.delimiter;
        var items = item.split(delimiter);
        if (items.length > 1) {
          for (var i = 0; i < items.length; i++) {
            this.add(items[i], true);
          }

          if (!dontPushVal) self.pushVal(self.options.triggerChange);
          return;
        }
      }

      var itemValue = self.options.itemValue(item),
        itemText = self.options.itemText(item),
        tagClass = self.options.tagClass(item),
        itemTitle = self.options.itemTitle(item);

      // Ignore items allready added
      var existing = $.grep(self.itemsArray, function (item) {
        return self.options.itemValue(item) === itemValue;
      })[0];
      if (existing && !self.options.allowDuplicates) {
        // Invoke onTagExists
        if (self.options.onTagExists) {
          var $existingTag = $(".tag", self.$container).filter(function () {
            return $(this).data("item") === existing;
          });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      // if length greater than limit
      if (
        self.items().toString().length + item.length + 1 >
        self.options.maxInputLength
      )
        return;

      // raise beforeItemAdd arg
      var beforeItemAddEvent = $.Event("beforeItemAdd", {
        item: item,
        cancel: false,
        options: options,
      });
      self.$element.trigger(beforeItemAddEvent);
      if (beforeItemAddEvent.cancel) return;

      // register item in internal array and map
      self.itemsArray.push(item);

      // add a tag element

      var $tag = $(
        '<span class="tag ' +
          htmlEncode(tagClass) +
          (itemTitle !== null ? '" title="' + itemTitle : "") +
          '">' +
          htmlEncode(itemText) +
          '<span data-role="remove"></span></span>'
      );
      $tag.data("item", item);
      self.findInputWrapper().before($tag);
      $tag.after(" ");

      // Check to see if the tag exists in its raw or uri-encoded form
      var optionExists =
        $(
          'option[value="' + encodeURIComponent(itemValue) + '"]',
          self.$element
        ).length ||
        $('option[value="' + htmlEncode(itemValue) + '"]', self.$element)
          .length;

      // add <option /> if item represents a value not present in one of the <select />'s options
      if (self.isSelect && !optionExists) {
        var $option = $(
          "<option selected>" + htmlEncode(itemText) + "</option>"
        );
        $option.data("item", item);
        $option.attr("value", itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal) self.pushVal(self.options.triggerChange);

      // Add class when reached maxTags
      if (
        self.options.maxTags === self.itemsArray.length ||
        self.items().toString().length === self.options.maxInputLength
      )
        self.$container.addClass("bootstrap-tagsinput-max");

      // If using typeahead, once the tag has been added, clear the typeahead value so it does not stick around in the input.
      if ($(".typeahead, .twitter-typeahead", self.$container).length) {
        self.$input.typeahead("val", "");
      }

      if (this.isInit) {
        self.$element.trigger(
          $.Event("itemAddedOnInit", { item: item, options: options })
        );
      } else {
        self.$element.trigger(
          $.Event("itemAdded", { item: item, options: options })
        );
      }
    },

    /**
     * Removes the given item. Pass true to dontPushVal to prevent updating the
     * elements val()
     */
    remove: function (item, dontPushVal, options) {
      var self = this;

      if (self.objectItems) {
        if (typeof item === "object")
          item = $.grep(self.itemsArray, function (other) {
            return (
              self.options.itemValue(other) == self.options.itemValue(item)
            );
          });
        else
          item = $.grep(self.itemsArray, function (other) {
            return self.options.itemValue(other) == item;
          });

        item = item[item.length - 1];
      }

      if (item) {
        var beforeItemRemoveEvent = $.Event("beforeItemRemove", {
          item: item,
          cancel: false,
          options: options,
        });
        self.$element.trigger(beforeItemRemoveEvent);
        if (beforeItemRemoveEvent.cancel) return;

        $(".tag", self.$container)
          .filter(function () {
            return $(this).data("item") === item;
          })
          .remove();
        $("option", self.$element)
          .filter(function () {
            return $(this).data("item") === item;
          })
          .remove();
        if ($.inArray(item, self.itemsArray) !== -1)
          self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
      }

      if (!dontPushVal) self.pushVal(self.options.triggerChange);

      // Remove class when reached maxTags
      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass("bootstrap-tagsinput-max");

      self.$element.trigger(
        $.Event("itemRemoved", { item: item, options: options })
      );
    },

    /**
     * Removes all items
     */
    removeAll: function () {
      var self = this;

      $(".tag", self.$container).remove();
      $("option", self.$element).remove();

      while (self.itemsArray.length > 0) self.itemsArray.pop();

      self.pushVal(self.options.triggerChange);
    },

    /**
     * Refreshes the tags so they match the text/value of their corresponding
     * item.
     */
    refresh: function () {
      var self = this;
      $(".tag", self.$container).each(function () {
        var $tag = $(this),
          item = $tag.data("item"),
          itemValue = self.options.itemValue(item),
          itemText = self.options.itemText(item),
          tagClass = self.options.tagClass(item);

        // Update tag's class and inner text
        $tag.attr("class", null);
        $tag.addClass("tag " + htmlEncode(tagClass));
        $tag.contents().filter(function () {
          return this.nodeType == 3;
        })[0].nodeValue = htmlEncode(itemText);

        if (self.isSelect) {
          var option = $("option", self.$element).filter(function () {
            return $(this).data("item") === item;
          });
          option.attr("value", itemValue);
        }
      });
    },

    /**
     * Returns the items added as tags
     */
    items: function () {
      return this.itemsArray;
    },

    /**
     * Assembly value by retrieving the value of each item, and set it on the
     * element.
     */
    pushVal: function () {
      var self = this,
        val = $.map(self.items(), function (item) {
          return self.options.itemValue(item).toString();
        });

      self.$element.val(val, true);

      if (self.options.triggerChange) self.$element.trigger("change");
    },

    /**
     * Initializes the tags input behaviour on the element
     */
    build: function (options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      // When itemValue is set, freeInput should always be false
      if (self.objectItems) self.options.freeInput = false;

      makeOptionItemFunction(self.options, "itemValue");
      makeOptionItemFunction(self.options, "itemText");
      makeOptionFunction(self.options, "tagClass");

      // Typeahead Bootstrap version 2.3.2
      if (self.options.typeahead) {
        var typeahead = self.options.typeahead || {};

        makeOptionFunction(typeahead, "source");

        self.$input.typeahead(
          $.extend({}, typeahead, {
            source: function (query, process) {
              function processItems(items) {
                var texts = [];

                for (var i = 0; i < items.length; i++) {
                  var text = self.options.itemText(items[i]);
                  map[text] = items[i];
                  texts.push(text);
                }
                process(texts);
              }

              this.map = {};
              var map = this.map,
                data = typeahead.source(query);

              if ($.isFunction(data.success)) {
                // support for Angular callbacks
                data.success(processItems);
              } else if ($.isFunction(data.then)) {
                // support for Angular promises
                data.then(processItems);
              } else {
                // support for functions and jquery promises
                $.when(data).then(processItems);
              }
            },
            updater: function (text) {
              self.add(this.map[text]);
              return this.map[text];
            },
            matcher: function (text) {
              return (
                text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !==
                -1
              );
            },
            sorter: function (texts) {
              return texts.sort();
            },
            highlighter: function (text) {
              var regex = new RegExp("(" + this.query + ")", "gi");
              return text.replace(regex, "<strong>$1</strong>");
            },
          })
        );
      }

      // typeahead.js
      if (self.options.typeaheadjs) {
        // Determine if main configurations were passed or simply a dataset
        var typeaheadjs = self.options.typeaheadjs;
        if (!$.isArray(typeaheadjs)) {
          typeaheadjs = [null, typeaheadjs];
        }
        var valueKey = typeaheadjs[1].valueKey; // We should test typeaheadjs.size >= 1
        var f_datum = valueKey
          ? function (datum) {
              return datum[valueKey];
            }
          : function (datum) {
              return datum;
            };
        $.fn.typeahead.apply(self.$input, typeaheadjs).on(
          "typeahead:selected",
          $.proxy(function (obj, datum) {
            self.add(f_datum(datum));
            self.$input.typeahead("val", "");
          }, self)
        );
      }

      self.$container.on(
        "click",
        $.proxy(function (event) {
          if (!self.$element.attr("disabled")) {
            self.$input.removeAttr("disabled");
          }
          self.$input.focus();
        }, self)
      );

      if (self.options.addOnBlur && self.options.freeInput) {
        self.$input.on(
          "focusout",
          $.proxy(function (event) {
            // HACK: only process on focusout when no typeahead opened, to
            //       avoid adding the typeahead text as tag
            if (
              $(".typeahead, .twitter-typeahead", self.$container).length === 0
            ) {
              self.add(self.$input.val());
              self.$input.val("");
            }
          }, self)
        );
      }

      // Toggle the 'focus' css class on the container when it has focus
      self.$container.on({
        focusin: function () {
          self.$container.addClass(self.options.focusClass);
        },
        focusout: function () {
          self.$container.removeClass(self.options.focusClass);
        },
      });

      self.$container.on(
        "keydown",
        "input",
        $.proxy(function (event) {
          var $input = $(event.target),
            $inputWrapper = self.findInputWrapper();

          if (self.$element.attr("disabled")) {
            self.$input.attr("disabled", "disabled");
            return;
          }

          switch (event.which) {
            // BACKSPACE
            case 8:
              if (doGetCaretPosition($input[0]) === 0) {
                var prev = $inputWrapper.prev();
                if (prev.length) {
                  self.remove(prev.data("item"));
                }
              }
              break;

            // DELETE
            case 46:
              if (doGetCaretPosition($input[0]) === 0) {
                var next = $inputWrapper.next();
                if (next.length) {
                  self.remove(next.data("item"));
                }
              }
              break;

            // LEFT ARROW
            case 37:
              // Try to move the input before the previous tag
              var $prevTag = $inputWrapper.prev();
              if ($input.val().length === 0 && $prevTag[0]) {
                $prevTag.before($inputWrapper);
                $input.focus();
              }
              break;
            // RIGHT ARROW
            case 39:
              // Try to move the input after the next tag
              var $nextTag = $inputWrapper.next();
              if ($input.val().length === 0 && $nextTag[0]) {
                $nextTag.after($inputWrapper);
                $input.focus();
              }
              break;
            default:
            // ignore
          }

          // Reset internal input's size
          var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
          $input.attr("size", Math.max(this.inputSize, $input.val().length));
        }, self)
      );

      self.$container.on(
        "keypress",
        "input",
        $.proxy(function (event) {
          var $input = $(event.target);

          if (self.$element.attr("disabled")) {
            self.$input.attr("disabled", "disabled");
            return;
          }

          var text = $input.val(),
            maxLengthReached =
              self.options.maxChars && text.length >= self.options.maxChars;
          if (
            self.options.freeInput &&
            (keyCombinationInList(event, self.options.confirmKeys) ||
              maxLengthReached)
          ) {
            // Only attempt to add a tag if there is data in the field
            if (text.length !== 0) {
              self.add(
                maxLengthReached ? text.substr(0, self.options.maxChars) : text
              );
              $input.val("");
            }

            // If the field is empty, let the event triggered fire as usual
            if (self.options.cancelConfirmKeysOnEmpty === false) {
              event.preventDefault();
            }
          }

          // Reset internal input's size
          var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
          $input.attr("size", Math.max(this.inputSize, $input.val().length));
        }, self)
      );

      // Remove icon clicked
      self.$container.on(
        "click",
        "[data-role=remove]",
        $.proxy(function (event) {
          if (self.$element.attr("disabled")) {
            return;
          }
          self.remove($(event.target).closest(".tag").data("item"));
        }, self)
      );

      // Only add existing value as tags when using strings as tags
      if (self.options.itemValue === defaultOptions.itemValue) {
        if (self.$element[0].tagName === "INPUT") {
          self.add(self.$element.val());
        } else {
          $("option", self.$element).each(function () {
            self.add($(this).attr("value"), true);
          });
        }
      }
    },

    /**
     * Removes all tagsinput behaviour and unregsiter all event handlers
     */
    destroy: function () {
      var self = this;

      // Unbind events
      self.$container.off("keypress", "input");
      self.$container.off("click", "[role=remove]");

      self.$container.remove();
      self.$element.removeData("tagsinput");
      self.$element.show();
    },

    /**
     * Sets focus on the tagsinput
     */
    focus: function () {
      this.$input.focus();
    },

    /**
     * Returns the internal input element
     */
    input: function () {
      return this.$input;
    },

    /**
     * Returns the element which is wrapped around the internal input. This
     * is normally the $container, but typeahead.js moves the $input element.
     */
    findInputWrapper: function () {
      var elt = this.$input[0],
        container = this.$container[0];
      while (elt && elt.parentNode !== container) elt = elt.parentNode;

      return $(elt);
    },
  };

  /**
   * Register JQuery plugin
   */
  $.fn.tagsinput = function (arg1, arg2, arg3) {
    var results = [];

    this.each(function () {
      var tagsinput = $(this).data("tagsinput");
      // Initialize a new tags input
      if (!tagsinput) {
        tagsinput = new TagsInput(this, arg1);
        $(this).data("tagsinput", tagsinput);
        results.push(tagsinput);

        if (this.tagName === "SELECT") {
          $("option", $(this)).attr("selected", "selected");
        }

        // Init tags from $(this).val()
        $(this).val($(this).val());
      } else if (!arg1 && !arg2) {
        // tagsinput already exists
        // no function, trying to init
        results.push(tagsinput);
      } else if (tagsinput[arg1] !== undefined) {
        // Invoke function on existing tags input
        if (tagsinput[arg1].length === 3 && arg3 !== undefined) {
          var retVal = tagsinput[arg1](arg2, null, arg3);
        } else {
          var retVal = tagsinput[arg1](arg2);
        }
        if (retVal !== undefined) results.push(retVal);
      }
    });

    if (typeof arg1 == "string") {
      // Return the results from the invoked function calls
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;

  /**
   * Most options support both a string or number as well as a function as
   * option value. This function makes sure that the option with the given
   * key in the given options is wrapped in a function
   */
  function makeOptionItemFunction(options, key) {
    if (typeof options[key] !== "function") {
      var propertyName = options[key];
      options[key] = function (item) {
        return item[propertyName];
      };
    }
  }
  function makeOptionFunction(options, key) {
    if (typeof options[key] !== "function") {
      var value = options[key];
      options[key] = function () {
        return value;
      };
    }
  }
  /**
   * HtmlEncodes the given value
   */
  var htmlEncodeContainer = $("<div />");
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return "";
    }
  }

  /**
   * Returns the position of the caret in the given input field
   * http://flightschool.acylt.com/devnotes/caret-position-woes/
   */
  function doGetCaretPosition(oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus();
      var oSel = document.selection.createRange();
      oSel.moveStart("character", -oField.value.length);
      iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == "0") {
      iCaretPos = oField.selectionStart;
    }
    return iCaretPos;
  }

  /**
   * Returns boolean indicates whether user has pressed an expected key combination.
   * @param object keyPressEvent: JavaScript event object, refer
   *     http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
   * @param object lookupList: expected key combinations, as in:
   *     [13, {which: 188, shiftKey: true}]
   */
  function keyCombinationInList(keyPressEvent, lookupList) {
    var found = false;
    $.each(lookupList, function (index, keyCombination) {
      if (
        typeof keyCombination === "number" &&
        keyPressEvent.which === keyCombination
      ) {
        found = true;
        return false;
      }

      if (keyPressEvent.which === keyCombination.which) {
        var alt =
            !keyCombination.hasOwnProperty("altKey") ||
            keyPressEvent.altKey === keyCombination.altKey,
          shift =
            !keyCombination.hasOwnProperty("shiftKey") ||
            keyPressEvent.shiftKey === keyCombination.shiftKey,
          ctrl =
            !keyCombination.hasOwnProperty("ctrlKey") ||
            keyPressEvent.ctrlKey === keyCombination.ctrlKey;
        if (alt && shift && ctrl) {
          found = true;
          return false;
        }
      }
    });

    return found;
  }

  /**
   * Initialize tagsinput behaviour on inputs and selects which have
   * data-role=tagsinput
   */
  $(function () {
    $(
      "input[data-role=tagsinput], select[multiple][data-role=tagsinput]"
    ).tagsinput();
  });
})(window.jQuery);
/* =============================================================
 * bootstrap3-typeahead.js v3.1.0
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2014 Bass Jobsen @bassjobsen
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

(function (root, factory) {
  "use strict";

  // CommonJS module is defined
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(require("jquery"));
  }
  // AMD module is defined
  else if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else {
    factory(root.jQuery);
  }
})(this, function ($) {
  "use strict";
  // jshint laxcomma: true

  /* TYPEAHEAD PUBLIC CLASS DEFINITION
   * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.typeahead.defaults, options);
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.select = this.options.select || this.select;
    this.autoSelect =
      typeof this.options.autoSelect == "boolean"
        ? this.options.autoSelect
        : true;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.render = this.options.render || this.render;
    this.updater = this.options.updater || this.updater;
    this.displayText = this.options.displayText || this.displayText;
    this.source = this.options.source;
    this.delay = this.options.delay;
    this.$menu = $(this.options.menu);
    this.$appendTo = this.options.appendTo ? $(this.options.appendTo) : null;
    this.shown = false;
    this.listen();
    this.showHintOnFocus =
      typeof this.options.showHintOnFocus == "boolean"
        ? this.options.showHintOnFocus
        : false;
    this.afterSelect = this.options.afterSelect;
    this.addItem = false;
  };

  Typeahead.prototype = {
    constructor: Typeahead,

    select: function () {
      var val = this.$menu.find(".active").data("value");
      this.$element.data("active", val);
      if (this.autoSelect || val) {
        var newVal = this.updater(val);
        // Updater can be set to any random functions via "options" parameter in constructor above.
        // Add null check for cases when updater returns void or undefined.
        if (!newVal) {
          newVal = "";
        }
        this.$element.val(this.displayText(newVal) || newVal).change();
        this.afterSelect(newVal);
      }
      return this.hide();
    },

    updater: function (item) {
      return item;
    },

    setSource: function (source) {
      this.source = source;
    },

    show: function () {
      var pos = $.extend({}, this.$element.position(), {
          height: this.$element[0].offsetHeight,
        }),
        scrollHeight;

      scrollHeight =
        typeof this.options.scrollHeight == "function"
          ? this.options.scrollHeight.call()
          : this.options.scrollHeight;

      var element;
      if (this.shown) {
        element = this.$menu;
      } else if (this.$appendTo) {
        element = this.$menu.appendTo(this.$appendTo);
      } else {
        element = this.$menu.insertAfter(this.$element);
      }
      element
        .css({
          top: pos.top + pos.height + scrollHeight,
          left: pos.left,
        })
        .show();

      this.shown = true;
      return this;
    },

    hide: function () {
      this.$menu.hide();
      this.shown = false;
      return this;
    },

    lookup: function (query) {
      var items;
      if (typeof query != "undefined" && query !== null) {
        this.query = query;
      } else {
        this.query = this.$element.val() || "";
      }

      if (
        this.query.length < this.options.minLength &&
        !this.options.showHintOnFocus
      ) {
        return this.shown ? this.hide() : this;
      }

      var worker = $.proxy(function () {
        if ($.isFunction(this.source))
          this.source(this.query, $.proxy(this.process, this));
        else if (this.source) {
          this.process(this.source);
        }
      }, this);

      clearTimeout(this.lookupWorker);
      this.lookupWorker = setTimeout(worker, this.delay);
    },

    process: function (items) {
      var that = this;

      items = $.grep(items, function (item) {
        return that.matcher(item);
      });

      items = this.sorter(items);

      if (!items.length && !this.options.addItem) {
        return this.shown ? this.hide() : this;
      }

      if (items.length > 0) {
        this.$element.data("active", items[0]);
      } else {
        this.$element.data("active", null);
      }

      // Add item
      if (this.options.addItem) {
        items.push(this.options.addItem);
      }

      if (this.options.items == "all") {
        return this.render(items).show();
      } else {
        return this.render(items.slice(0, this.options.items)).show();
      }
    },

    matcher: function (item) {
      var it = this.displayText(item);
      return ~it.toLowerCase().indexOf(this.query.toLowerCase());
    },

    sorter: function (items) {
      var beginswith = [],
        caseSensitive = [],
        caseInsensitive = [],
        item;

      while ((item = items.shift())) {
        var it = this.displayText(item);
        if (!it.toLowerCase().indexOf(this.query.toLowerCase()))
          beginswith.push(item);
        else if (~it.indexOf(this.query)) caseSensitive.push(item);
        else caseInsensitive.push(item);
      }

      return beginswith.concat(caseSensitive, caseInsensitive);
    },

    highlighter: function (item) {
      var html = $("<div></div>");
      var query = this.query;
      var i = item.toLowerCase().indexOf(query.toLowerCase());
      var len, leftPart, middlePart, rightPart, strong;
      len = query.length;
      if (len === 0) {
        return html.text(item).html();
      }
      while (i > -1) {
        leftPart = item.substr(0, i);
        middlePart = item.substr(i, len);
        rightPart = item.substr(i + len);
        strong = $("<strong></strong>").text(middlePart);
        html.append(document.createTextNode(leftPart)).append(strong);
        item = rightPart;
        i = item.toLowerCase().indexOf(query.toLowerCase());
      }
      return html.append(document.createTextNode(item)).html();
    },

    render: function (items) {
      var that = this;
      var self = this;
      var activeFound = false;
      var data = [];
      var _category = that.options.separator;

      $.each(items, function (key, value) {
        // inject separator
        if (key > 0 && value[_category] !== items[key - 1][_category]) {
          data.push({
            __type: "divider",
          });
        }

        // inject category header
        if (
          value[_category] &&
          (key === 0 || value[_category] !== items[key - 1][_category])
        ) {
          data.push({
            __type: "category",
            name: value[_category],
          });
        }
        data.push(value);
      });

      items = $(data).map(function (i, item) {
        if ((item.__type || false) == "category") {
          return $(that.options.headerHtml).text(item.name)[0];
        }

        if ((item.__type || false) == "divider") {
          return $(that.options.headerDivider)[0];
        }

        var text = self.displayText(item);
        i = $(that.options.item).data("value", item);
        i.find("a").html(that.highlighter(text, item));
        if (text == self.$element.val()) {
          i.addClass("active");
          self.$element.data("active", item);
          activeFound = true;
        }
        return i[0];
      });

      if (this.autoSelect && !activeFound) {
        items.filter(":not(.dropdown-header)").first().addClass("active");
        this.$element.data("active", items.first().data("value"));
      }
      this.$menu.html(items);
      return this;
    },

    displayText: function (item) {
      return (
        (typeof item !== "undefined" &&
          typeof item.name != "undefined" &&
          item.name) ||
        item
      );
    },

    next: function (event) {
      var active = this.$menu.find(".active").removeClass("active"),
        next = active.next();

      if (!next.length) {
        next = $(this.$menu.find("li")[0]);
      }

      next.addClass("active");
    },

    prev: function (event) {
      var active = this.$menu.find(".active").removeClass("active"),
        prev = active.prev();

      if (!prev.length) {
        prev = this.$menu.find("li").last();
      }

      prev.addClass("active");
    },

    listen: function () {
      this.$element
        .on("focus", $.proxy(this.focus, this))
        .on("blur", $.proxy(this.blur, this))
        .on("keypress", $.proxy(this.keypress, this))
        .on("keyup", $.proxy(this.keyup, this));

      if (this.eventSupported("keydown")) {
        this.$element.on("keydown", $.proxy(this.keydown, this));
      }

      this.$menu
        .on("click", $.proxy(this.click, this))
        .on("mouseenter", "li", $.proxy(this.mouseenter, this))
        .on("mouseleave", "li", $.proxy(this.mouseleave, this));
    },

    destroy: function () {
      this.$element.data("typeahead", null);
      this.$element.data("active", null);
      this.$element.off("focus").off("blur").off("keypress").off("keyup");

      if (this.eventSupported("keydown")) {
        this.$element.off("keydown");
      }

      this.$menu.remove();
    },

    eventSupported: function (eventName) {
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, "return;");
        isSupported = typeof this.$element[eventName] === "function";
      }
      return isSupported;
    },

    move: function (e) {
      if (!this.shown) return;

      switch (e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault();
          break;

        case 38: // up arrow
          // with the shiftKey (this is actually the left parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.prev();
          break;

        case 40: // down arrow
          // with the shiftKey (this is actually the right parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.next();
          break;
      }
    },

    keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27]);
      if (!this.shown && e.keyCode == 40) {
        this.lookup();
      } else {
        this.move(e);
      }
    },

    keypress: function (e) {
      if (this.suppressKeyPressRepeat) return;
      this.move(e);
    },

    keyup: function (e) {
      switch (e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break;

        case 9: // tab
        case 13: // enter
          if (!this.shown) return;
          this.select();
          break;

        case 27: // escape
          if (!this.shown) return;
          this.hide();
          break;
        default:
          this.lookup();
      }

      e.preventDefault();
    },

    focus: function (e) {
      if (!this.focused) {
        this.focused = true;
        if (this.options.showHintOnFocus) {
          this.lookup("");
        }
      }
    },

    blur: function (e) {
      this.focused = false;
      if (!this.mousedover && this.shown) this.hide();
    },

    click: function (e) {
      e.preventDefault();
      this.select();
      this.$element.focus();
      this.hide();
    },

    mouseenter: function (e) {
      this.mousedover = true;
      this.$menu.find(".active").removeClass("active");
      $(e.currentTarget).addClass("active");
    },

    mouseleave: function (e) {
      this.mousedover = false;
      if (!this.focused && this.shown) this.hide();
    },
  };

  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead;

  $.fn.typeahead = function (option) {
    var arg = arguments;
    if (typeof option == "string" && option == "getActive") {
      return this.data("active");
    }
    return this.each(function () {
      var $this = $(this),
        data = $this.data("typeahead"),
        options = typeof option == "object" && option;
      if (!data) $this.data("typeahead", (data = new Typeahead(this, options)));
      if (typeof option == "string" && data[option]) {
        if (arg.length > 1) {
          data[option].apply(data, Array.prototype.slice.call(arg, 1));
        } else {
          data[option]();
        }
      }
    });
  };

  $.fn.typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
    item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
    minLength: 1,
    scrollHeight: 0,
    autoSelect: true,
    afterSelect: $.noop,
    addItem: false,
    delay: 0,
    separator: "category",
    headerHtml: '<li class="dropdown-header"></li>',
    headerDivider: '<li class="divider" role="separator"></li>',
  };

  $.fn.typeahead.Constructor = Typeahead;

  /* TYPEAHEAD NO CONFLICT
   * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old;
    return this;
  };

  /* TYPEAHEAD DATA-API
   * ================== */

  $(document).on(
    "focus.typeahead.data-api",
    '[data-provide="typeahead"]',
    function (e) {
      var $this = $(this);
      if ($this.data("typeahead")) return;
      $this.typeahead($this.data());
    }
  );
});
/*! Checkboxes 1.0.4
 *  Copyright (c) Gyrocode (www.gyrocode.com)
 *  License: MIT License
 */
(function (window, document, undefined) {
  var factory = function ($, DataTable) {
    var Checkboxes = function (settings) {
      if (!DataTable.versionCheck || !DataTable.versionCheck("1.10.0")) {
        throw "DataTables Checkboxes requires DataTables 1.10.0 or newer";
      }
      this.s = {
        dt: new DataTable.Api(settings),
        columns: [],
        data: {},
        ignoreSelect: false,
      };
      if (this.s.dt.settings()[0].checkboxes) {
        return;
      }
      settings.checkboxes = this;
      this._constructor();
    };
    Checkboxes.prototype = {
      _constructor: function () {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        for (var i = 0; i < ctx.aoColumns.length; i++) {
          if (ctx.aoColumns[i].checkboxes) {
            if (!$.isPlainObject(ctx.aoColumns[i].checkboxes)) {
              ctx.aoColumns[i].checkboxes = {};
            }
            ctx.aoColumns[i].checkboxes = $.extend(
              {},
              Checkboxes.defaults,
              ctx.aoColumns[i].checkboxes
            );
            DataTable.ext.internal._fnApplyColumnDefs(
              ctx,
              [
                {
                  targets: i,
                  searchable: false,
                  orderable: false,
                  width: "1%",
                  className: "dt-body-center",
                  render: function (data, type, full, meta) {
                    if (type === "display") {
                      data = '<input type="checkbox">';
                    }
                    return data;
                  },
                },
              ],
              {},
              function (iCol, oDef) {
                DataTable.ext.internal._fnColumnOptions(ctx, iCol, oDef);
              }
            );
            $(dt.column(i).header()).removeClass("sorting");
            $(dt.column(i).header()).off(".dt");
            var cells = dt.cells("tr", i);
            cells.invalidate("data");
            $(cells.nodes()).addClass("dt-body-center");
            self.s.data[i] = [];
            self.s.columns.push(i);
            if (ctx.aoColumns[i].checkboxes.selectRow) {
              $(dt.table().node()).addClass("checkboxes-select");
            }
            if (ctx.aoColumns[i].checkboxes.selectAll) {
              $(dt.column(i).header())
                .html('<input type="checkbox">')
                .addClass("checkboxes-select-all");
            }
            var $table = $(dt.table().node());
            var $table_body = $(dt.table().body());
            var $table_header = $(dt.table().header());
            $table_body.on("click", 'input[type="checkbox"]', function (e) {
              self.onClick(e, this);
            });
            if (ctx.aoColumns[i].checkboxes.selectRow) {
              if (DataTable.select) {
                $table.on(
                  "select.dt deselect.dt",
                  function (e, api, type, indexes) {
                    self.onSelect(e, type, indexes);
                  }
                );
                dt.select.info(false);
              } else {
                $table_body.on("click", "td", function () {
                  var $row = $(this).closest("tr");
                  var e = {
                    type: $row.hasClass("selected") ? "deselect" : "select",
                  };
                  self.onSelect(e, "row", [dt.row($row).index()]);
                  $row.toggleClass("selected");
                  $table.trigger(e.type);
                });
              }
              $table.on("draw.dt select.dt deselect.dt", function () {
                self.showInfoSelected();
              });
            }
            $table.on("draw.dt", function (e, ctx) {
              self.onDraw(e, ctx);
            });
            $table_header.on(
              "click",
              'th.checkboxes-select-all input[type="checkbox"]',
              function (e) {
                self.onClickSelectAll(e, this);
              }
            );
            $table_header.on("click", "th.checkboxes-select-all", function (e) {
              $('input[type="checkbox"]', this).trigger("click");
            });
          }
        }
      },
      updateData: function (type, selector, isSelected) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        var nodes = [];
        if (type === "row") {
          dt.rows(selector).every(function (rowIdx) {
            for (var colIdx = 0; colIdx < ctx.aoColumns.length; colIdx++) {
              if (
                ctx.aoColumns[colIdx].checkboxes &&
                ctx.aoColumns[colIdx].checkboxes.selectRow
              ) {
                nodes.push(dt.cell(rowIdx, colIdx).node());
              }
            }
          });
        } else {
          if (type === "cell") {
            nodes = dt.cells(selector).nodes();
            dt.cells(nodes).every(function () {
              var colIdx = this.index().column;
              var rowIdx = this.index().row;
              if (
                ctx.aoColumns[colIdx].checkboxes &&
                ctx.aoColumns[colIdx].checkboxes.selectRow
              ) {
                var columns = $.grep(self.s.columns, function (value) {
                  return value != colIdx;
                });
                $.merge(nodes, dt.cells(rowIdx, columns).nodes());
              }
            });
          }
        }
        if (nodes.length) {
          dt.cells(nodes).every(function () {
            var cellCol = this.index().column;
            if (ctx.aoColumns[cellCol].checkboxes) {
              var cellData = this.data();
              var index = $.inArray(cellData, ctx.checkboxes.s.data[cellCol]);
              if (isSelected && index === -1) {
                ctx.checkboxes.s.data[cellCol].push(cellData);
              } else {
                if (!isSelected && index !== -1) {
                  ctx.checkboxes.s.data[cellCol].splice(index, 1);
                }
              }
            }
          });
        }
      },
      updateSelect: function (type, selector, isSelected) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        var nodes = [];
        if (type === "row") {
          nodes = dt.rows(selector).nodes();
        } else {
          if (type === "cell") {
            dt.cells(selector).every(function () {
              var colIdx = this.index().column;
              var rowIdx = this.index().row;
              if (
                ctx.aoColumns[colIdx].checkboxes &&
                ctx.aoColumns[colIdx].checkboxes.selectRow
              ) {
                nodes.push(dt.$(this.node()).closest("tr").get(0));
              }
            });
          }
        }
        if (nodes.length) {
          if (DataTable.select) {
            self.s.ignoreSelect = true;
            if (isSelected) {
              dt.rows(nodes).select();
            } else {
              dt.rows(nodes).deselect();
            }
            self.s.ignoreSelect = false;
          } else {
            if (isSelected) {
              dt.$(nodes).addClass("selected");
            } else {
              dt.$(nodes).removeClass("selected");
            }
          }
        }
      },
      updateCheckbox: function (type, selector, isSelected) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        var nodes = [];
        if (type === "row") {
          dt.rows(selector).every(function (rowIdx) {
            for (var colIdx = 0; colIdx < ctx.aoColumns.length; colIdx++) {
              if (
                ctx.aoColumns[colIdx].checkboxes &&
                ctx.aoColumns[colIdx].checkboxes.selectRow
              ) {
                nodes.push(dt.cell(rowIdx, colIdx).node());
              }
            }
          });
        } else {
          if (type === "cell") {
            nodes = dt.cells(selector).nodes();
            dt.cells(nodes).every(function () {
              var colIdx = this.index().column;
              var rowIdx = this.index().row;
              if (
                ctx.aoColumns[colIdx].checkboxes &&
                ctx.aoColumns[colIdx].checkboxes.selectRow
              ) {
                var columns = $.grep(self.s.columns, function (value) {
                  return value != colIdx;
                });
                $.merge(nodes, dt.cells(rowIdx, columns).nodes());
              }
            });
          }
        }
        if (nodes.length) {
          dt.$(nodes)
            .find('input[type="checkbox"]')
            .prop("checked", isSelected);
        }
      },
      onClick: function (e, ctrl) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        var $cell = $(ctrl).closest("td");
        var cell = dt.cell($cell);
        var cellCol = cell.index().column;
        var cellData = cell.data();
        if (ctx.aoColumns[cellCol].checkboxes) {
          self.updateCheckbox("cell", $cell, ctrl.checked);
          self.updateData("cell", $cell, ctrl.checked);
          self.updateSelect("cell", $cell, ctrl.checked);
          self.updateSelectAll();
          e.stopPropagation();
        }
      },
      onSelect: function (e, type, indexes) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        if (self.s.ignoreSelect) {
          return;
        }
        if (type === "row") {
          self.updateCheckbox(
            "row",
            indexes,
            e.type === "select" ? true : false
          );
          self.updateData("row", indexes, e.type === "select" ? true : false);
          self.updateSelectAll();
        }
      },
      onClickSelectAll: function (e, ctrl) {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        var col = dt.column($(ctrl).closest("th")).index();
        var cells = dt.cells("tr", col, {
          page:
            ctx.aoColumns[col].checkboxes &&
            ctx.aoColumns[col].checkboxes.selectAllPages
              ? "all"
              : "current",
          search: "applied",
        });
        self.updateData("cell", cells.nodes(), ctrl.checked);
        self.updateCheckbox("cell", cells.nodes(), ctrl.checked);
        if (ctx.aoColumns[col].checkboxes.selectRow) {
          var rows = dt.rows({
            page:
              ctx.aoColumns[col].checkboxes &&
              ctx.aoColumns[col].checkboxes.selectAllPages
                ? "all"
                : "current",
            search: "applied",
          });
          self.updateSelect("row", rows.nodes(), ctrl.checked);
        }
        self.updateSelectAll();
        e.stopPropagation();
      },
      onDraw: function (e, ctx) {
        var self = this;
        var dt = self.s.dt;
        ctx = dt.settings()[0];
        var rows_seen = {};
        dt.cells("tr", self.s.columns, {
          page: "current",
          search: "applied",
        }).every(function () {
          var cellColIdx = this.index().column;
          var cellRowIdx = this.index().row;
          var cellData = this.data();
          var index = $.inArray(cellData, ctx.checkboxes.s.data[cellColIdx]);
          if (index !== -1) {
            if (!rows_seen.hasOwnProperty(cellRowIdx)) {
              self.updateCheckbox("cell", this.node(), true);
              self.updateSelect("cell", this.node(), true);
              if (
                ctx.aoColumns[cellColIdx].checkboxes &&
                ctx.aoColumns[cellColIdx].checkboxes.selectRow
              ) {
                rows_seen[cellRowIdx] = true;
              }
            }
          }
        });
        self.updateSelectAll();
      },
      updateSelectAll: function () {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        for (var colIdx = 0; colIdx < ctx.aoColumns.length; colIdx++) {
          if (
            ctx.aoColumns[colIdx].checkboxes &&
            ctx.aoColumns[colIdx].checkboxes.selectAll
          ) {
            var cells = dt.cells("tr", colIdx, {
              page: ctx.aoColumns[colIdx].checkboxes.selectAllPages
                ? "all"
                : "current",
              search: "applied",
            });
            var $table = dt.table().container();
            var $chkbox_all = dt
              .$(cells.nodes())
              .find('input[type="checkbox"]');
            var $chkbox_checked = dt
              .$(cells.nodes())
              .find('input[type="checkbox"]:checked');
            var chkbox_select_all = $(
              'input[type="checkbox"]',
              dt.column(colIdx).header()
            ).get(0);
            if ($chkbox_checked.length === 0) {
              chkbox_select_all.checked = false;
              if ("indeterminate" in chkbox_select_all) {
                chkbox_select_all.indeterminate = false;
              }
            } else {
              if ($chkbox_checked.length === $chkbox_all.length) {
                chkbox_select_all.checked = true;
                if ("indeterminate" in chkbox_select_all) {
                  chkbox_select_all.indeterminate = false;
                }
              } else {
                chkbox_select_all.checked = true;
                if ("indeterminate" in chkbox_select_all) {
                  chkbox_select_all.indeterminate = true;
                }
              }
            }
          }
        }
      },
      showInfoSelected: function () {
        var self = this;
        var dt = self.s.dt;
        var ctx = dt.settings()[0];
        if (!ctx.aanFeatures.i) {
          return;
        }
        var $output = $('<span class="select-info"/>');
        var add = function (name, num) {
          $output.append(
            $('<span class="select-item"/>').append(
              dt.i18n(
                "select." + name + "s",
                {
                  _: "%d " + name + "s selected",
                  0: "",
                  1: "1 " + name + " selected",
                },
                num
              )
            )
          );
        };
        var colSelectRowIdx = -1;
        for (var colIdx = 0; colIdx < ctx.aoColumns.length; colIdx++) {
          if (
            ctx.aoColumns[colIdx].checkboxes &&
            ctx.aoColumns[colIdx].checkboxes.selectRow
          ) {
            colSelectRowIdx = colIdx;
            break;
          }
        }
        if (colSelectRowIdx !== -1) {
          add("row", ctx.checkboxes.s.data[colSelectRowIdx].length);
          $.each(ctx.aanFeatures.i, function (i, el) {
            var $el = $(el);
            var $exisiting = $el.children("span.select-info");
            if ($exisiting.length) {
              $exisiting.remove();
            }
            if ($output.text() !== "") {
              $el.append($output);
            }
          });
        }
      },
    };
    Checkboxes.defaults = {
      selectRow: false,
      selectAll: true,
      selectAllPages: true,
    };
    var Api = $.fn.dataTable.Api;
    Api.register("checkboxes()", function () {
      return this;
    });
    Api.registerPlural(
      "columns().checkboxes.select()",
      "column().checkboxes.select()",
      function (select) {
        if (typeof select === "undefined") {
          select = true;
        }
        return this.iterator(
          "column",
          function (ctx, colIdx) {
            if (ctx.checkboxes) {
              var selector = this.cells("tr", colIdx).nodes();
              ctx.checkboxes.updateCheckbox(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateData(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateSelect(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateSelectAll();
            }
          },
          1
        );
      }
    );
    Api.registerPlural(
      "cells().checkboxes.select()",
      "cell().checkboxes.select()",
      function (select) {
        if (typeof select === "undefined") {
          select = true;
        }
        return this.iterator(
          "cell",
          function (ctx, rowIdx, colIdx) {
            if (ctx.checkboxes) {
              var selector = { row: rowIdx, column: colIdx };
              ctx.checkboxes.updateCheckbox(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateData(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateSelect(
                "cell",
                selector,
                select ? true : false
              );
              ctx.checkboxes.updateSelectAll();
            }
          },
          1
        );
      }
    );
    Api.registerPlural(
      "columns().checkboxes.deselect()",
      "column().checkboxes.deselect()",
      function () {
        return this.checkboxes.select(false);
      }
    );
    Api.registerPlural(
      "cells().checkboxes.deselect()",
      "cell().checkboxes.deselect()",
      function () {
        return this.checkboxes.select(false);
      }
    );
    Api.registerPlural(
      "columns().checkboxes.selected()",
      "column().checkboxes.selected()",
      function () {
        return this.iterator(
          "column",
          function (ctx, colIdx) {
            if (ctx.aoColumns[colIdx].checkboxes) {
              return ctx.checkboxes.s.data[colIdx];
            }
          },
          1
        );
      }
    );
    Checkboxes.version = "1.0.0";
    $.fn.DataTable.Checkboxes = Checkboxes;
    $.fn.dataTable.Checkboxes = Checkboxes;
    $(document).on("preInit.dt.dtr", function (e, settings, json) {
      if (e.namespace !== "dt") {
        return;
      }
      new Checkboxes(settings);
    });
    return Checkboxes;
  };
  if (typeof define === "function" && define.amd) {
    define(["jquery", "datatables"], factory);
  } else {
    if (typeof exports === "object") {
      factory(require("jquery"), require("datatables"));
    } else {
      if (jQuery && !jQuery.fn.dataTable.Checkboxes) {
        factory(jQuery, jQuery.fn.dataTable);
      }
    }
  }
})(window, document);
