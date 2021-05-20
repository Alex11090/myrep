/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , i = Object.getPrototypeOf
      , o = n.slice
      , r = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , s = n.push
      , a = n.indexOf
      , l = {}
      , c = l.toString
      , d = l.hasOwnProperty
      , u = d.toString
      , p = u.call(Object)
      , f = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , v = e.document
      , y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o, r = (n = n || v).createElement("script");
        if (r.text = e,
        t)
            for (i in y)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
        return new b.fn.init(e,t)
    };
    function x(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.6.0",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(b.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(b.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    b.extend = b.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || h(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && s !== i && (c && i && (b.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t],
                    r = o && !Array.isArray(n) ? [] : o || b.isPlainObject(n) ? n : {},
                    o = !1,
                    s[t] = b.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    b.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && u.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, s = 0, a = [];
            if (x(e))
                for (i = e.length; s < i; s++)
                    null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e)
                    null != (o = t(e[s], s, n)) && a.push(o);
            return r(a)
        },
        guid: 1,
        support: f
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var T = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
    function(e) {
        var t, n, i, o, r, s, a, l, c, d, u, p, f, h, g, v, y, m, w, b = "sizzle" + 1 * new Date, x = e.document, T = 0, k = 0, S = le(), C = le(), $ = le(), A = le(), E = function(e, t) {
            return e === t && (u = !0),
            0
        }, j = {}.hasOwnProperty, D = [], L = D.pop, N = D.push, H = D.push, O = D.slice, q = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", z = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", W = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)", R = new RegExp(M + "+","g"), _ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(W), Y = new RegExp("^" + I + "$"), V = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + z),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, se = be((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(D = O.call(x.childNodes), x.childNodes),
            D[x.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: D.length ? function(e, t) {
                    N.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function ae(e, t, i, o) {
            var r, a, c, d, u, h, y, m = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!o && (p(t),
            t = t || f,
            g)) {
                if (11 !== x && (u = Z.exec(e)))
                    if (r = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(r)))
                                return i;
                            if (c.id === r)
                                return i.push(c),
                                i
                        } else if (m && (c = m.getElementById(r)) && w(t, c) && c.id === r)
                            return i.push(c),
                            i
                    } else {
                        if (u[2])
                            return H.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (y = e,
                    m = t,
                    1 === x && (U.test(e) || B.test(e))) {
                        for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = b)),
                        a = (h = s(e)).length; a--; )
                            h[a] = (d ? "#" + d : ":scope") + " " + we(h[a]);
                        y = h.join(",")
                    }
                    try {
                        return H.apply(i, m.querySelectorAll(y)),
                        i
                    } catch (t) {
                        A(e, !0)
                    } finally {
                        d === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(_, "$1"), t, i, o)
        }
        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ce(e) {
            return e[b] = !0,
            e
        }
        function de(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = t
        }
        function pe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ve(e) {
            return ce((function(t) {
                return t = +t,
                ce((function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--; )
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                }
                ))
            }
            ))
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {},
        r = ae.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML")
        }
        ,
        p = ae.setDocument = function(e) {
            var t, o, s = e ? e.ownerDocument || e : x;
            return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement,
            g = !r(f),
            x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
            n.scope = de((function(e) {
                return h.appendChild(e).appendChild(f.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            n.attributes = de((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            n.getElementsByTagName = de((function(e) {
                return e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            n.getElementsByClassName = K.test(f.getElementsByClassName),
            n.getById = de((function(e) {
                return h.appendChild(e).id = b,
                !f.getElementsByName || !f.getElementsByName(b).length
            }
            )),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            y = [],
            v = [],
            (n.qsa = K.test(f.querySelectorAll)) && (de((function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                (t = f.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }
            )),
            de((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            }
            ))),
            (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                y.push("!=", W)
            }
            )),
            v = v.length && new RegExp(v.join("|")),
            y = y.length && new RegExp(y.join("|")),
            t = K.test(h.compareDocumentPosition),
            w = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            E = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && w(x, e) ? -1 : t == f || t.ownerDocument == x && w(x, t) ? 1 : d ? q(d, e) - q(d, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r)
                    return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : d ? q(d, e) - q(d, t) : 0;
                if (o === r)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? pe(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
            }
            ,
            f) : f
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if (p(e),
            n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                try {
                    var i = m.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    A(t, !0)
                }
            return ae(t, f, null, [e]).length > 0
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) != f && p(e),
            w(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) != f && p(e);
            var o = i.attrHandle[t.toLowerCase()]
              , r = o && j.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(ie, oe)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, i = [], o = 0, r = 0;
            if (u = !n.detectDuplicates,
            d = !n.sortStable && e.slice(0),
            e.sort(E),
            u) {
                for (; t = e[r++]; )
                    t === e[r] && (o = i.push(r));
                for (; o--; )
                    e.splice(i[o], 1)
            }
            return d = null,
            e
        }
        ,
        o = ae.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (i = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = ae.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling", v = t.parentNode, y = a && t.nodeName.toLowerCase(), m = !l && !a, w = !1;
                        if (v) {
                            if (r) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild],
                            s && m) {
                                for (w = (f = (c = (d = (u = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2],
                                p = f && v.childNodes[f]; p = ++f && p && p[g] || (w = f = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++w && p === t) {
                                        d[e] = [T, f, w];
                                        break
                                    }
                            } else if (m && (w = f = (c = (d = (u = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                            !1 === w)
                                for (; (p = ++f && p && p[g] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++w || (m && ((d = (u = p[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, w]),
                                p !== t)); )
                                    ;
                            return (w -= o) === i || w % i == 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                        for (var i, r = o(e, t), s = r.length; s--; )
                            e[i = q(e, r[s])] = !(n[i] = r[s])
                    }
                    )) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ce((function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(_, "$1"));
                    return i[b] ? ce((function(e, t, n, o) {
                        for (var r, s = i(e, null, o, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }
                    )) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: ce((function(e) {
                    return function(t) {
                        return ae(e, t).length > 0
                    }
                }
                )),
                contains: ce((function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return (t.textContent || o(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: ce((function(e) {
                    return Y.test(e || "") || ae.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve((function() {
                    return [0]
                }
                )),
                last: ve((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: ve((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: ve((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: ve((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: ve((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                        e.push(i);
                    return e
                }
                )),
                gt: ve((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                }
                ))
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = he(t);
        function me() {}
        function we(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function be(e, t, n) {
            var i = t.dir
              , o = t.next
              , r = o || i
              , s = n && "parentNode" === r
              , a = k++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var c, d, u, p = [T, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (d = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = d[r]) && c[0] === T && c[1] === a)
                                    return p[2] = c[2];
                                if (d[r] = p,
                                p[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                c && t.push(a)));
            return s
        }
        function ke(e, t, n, i, o, r) {
            return i && !i[b] && (i = ke(i)),
            o && !o[b] && (o = ke(o, r)),
            ce((function(r, s, a, l) {
                var c, d, u, p = [], f = [], h = s.length, g = r || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        ae(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), v = !e || !r && t ? g : Te(g, p, e, a, l), y = n ? o || (r ? e : h || i) ? [] : s : v;
                if (n && n(v, y, a, l),
                i)
                    for (c = Te(y, f),
                    i(c, [], a, l),
                    d = c.length; d--; )
                        (u = c[d]) && (y[f[d]] = !(v[f[d]] = u));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            d = y.length; d--; )
                                (u = y[d]) && c.push(v[d] = u);
                            o(null, y = [], c, l)
                        }
                        for (d = y.length; d--; )
                            (u = y[d]) && (c = o ? q(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u))
                    }
                } else
                    y = Te(y === s ? y.splice(h, y.length) : y),
                    o ? o(null, s, y, l) : H.apply(s, y)
            }
            ))
        }
        function Se(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, d = be((function(e) {
                return e === t
            }
            ), a, !0), u = be((function(e) {
                return q(t, e) > -1
            }
            ), a, !0), p = [function(e, n, i) {
                var o = !s && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                return t = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[e[l].type])
                    p = [be(xe(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                            ;
                        return ke(l > 1 && xe(p), l > 1 && we(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(_, "$1"), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && we(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        return me.prototype = i.filters = i.pseudos,
        i.setFilters = new me,
        s = ae.tokenize = function(e, t) {
            var n, o, r, s, a, l, c, d = C[e + " "];
            if (d)
                return t ? 0 : d.slice(0);
            for (a = e,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = B.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(_, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
        }
        ,
        a = ae.compile = function(e, t) {
            var n, o = [], r = [], a = $[e + " "];
            if (!a) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (a = Se(t[n]))[b] ? o.push(a) : r.push(a);
                (a = $(e, function(e, t) {
                    var n = t.length > 0
                      , o = e.length > 0
                      , r = function(r, s, a, l, d) {
                        var u, h, v, y = 0, m = "0", w = r && [], b = [], x = c, k = r || o && i.find.TAG("*", d), S = T += null == x ? 1 : Math.random() || .1, C = k.length;
                        for (d && (c = s == f || s || d); m !== C && null != (u = k[m]); m++) {
                            if (o && u) {
                                for (h = 0,
                                s || u.ownerDocument == f || (p(u),
                                a = !g); v = e[h++]; )
                                    if (v(u, s || f, a)) {
                                        l.push(u);
                                        break
                                    }
                                d && (T = S)
                            }
                            n && ((u = !v && u) && y--,
                            r && w.push(u))
                        }
                        if (y += m,
                        n && m !== y) {
                            for (h = 0; v = t[h++]; )
                                v(w, b, s, a);
                            if (r) {
                                if (y > 0)
                                    for (; m--; )
                                        w[m] || b[m] || (b[m] = L.call(l));
                                b = Te(b)
                            }
                            H.apply(l, b),
                            d && !r && b.length > 0 && y + t.length > 1 && ae.uniqueSort(l)
                        }
                        return d && (T = S,
                        c = x),
                        w
                    };
                    return n ? ce(r) : r
                }(r, o))).selector = e
            }
            return a
        }
        ,
        l = ae.select = function(e, t, n, o) {
            var r, l, c, d, u, p = "function" == typeof e && e, f = !o && s(e = p.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                !i.relative[d = c.type]); )
                    if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                        if (l.splice(r, 1),
                        !(e = o.length && we(l)))
                            return H.apply(n, o),
                            n;
                        break
                    }
            }
            return (p || a(e, f))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(E).join("") === b,
        n.detectDuplicates = !!u,
        p(),
        n.sortDetached = de((function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }
        )),
        de((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || ue("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        n.attributes && de((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || ue("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        de((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || ue(P, (function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        )),
        ae
    }(e);
    b.find = T,
    b.expr = T.selectors,
    b.expr[":"] = b.expr.pseudos,
    b.uniqueSort = b.unique = T.uniqueSort,
    b.text = T.getText,
    b.isXMLDoc = T.isXML,
    b.contains = T.contains,
    b.escapeSelector = T.escape;
    var k = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && b(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , C = b.expr.match.needsContext;
    function $(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function E(e, t, n) {
        return h(t) ? b.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        }
        )) : t.nodeType ? b.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? b.grep(e, (function(e) {
            return a.call(t, e) > -1 !== n
        }
        )) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    b.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(b(e).filter((function() {
                    for (t = 0; t < i; t++)
                        if (b.contains(o[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                b.find(e, o[t], n);
            return i > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && C.test(e) ? b(e) : e || [], !1).length
        }
    });
    var j, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof b ? t[0] : t,
                b.merge(this, b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                A.test(i[1]) && b.isPlainObject(t))
                    for (i in t)
                        h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = v.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }
    ).prototype = b.fn,
    j = b(v);
    var L = /^(?:parents|prev(?:Until|All))/
      , N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && b(e);
            if (!C.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? b.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(b(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e),
            b.merge([], e.childNodes))
        }
    }, (function(e, t) {
        b.fn[e] = function(n, i) {
            var o = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = b.filter(i, o)),
            this.length > 1 && (N[e] || b.uniqueSort(o),
            L.test(e) && o.reverse()),
            this.pushStack(o)
        }
    }
    ));
    var O = /[^\x20\t\r\n\f]+/g;
    function q(e) {
        return e
    }
    function P(e) {
        throw e
    }
    function M(e, t, n, i) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(O) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : b.extend({}, e);
        var t, n, i, o, r = [], s = [], a = -1, l = function() {
            for (o = o || e.once,
            i = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (r = n ? [] : "")
        }, c = {
            add: function() {
                return r && (n && !t && (a = r.length - 1,
                s.push(n)),
                function t(n) {
                    b.each(n, (function(n, i) {
                        h(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== w(i) && t(i)
                    }
                    ))
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return b.each(arguments, (function(e, t) {
                    for (var n; (n = b.inArray(t, r, n)) > -1; )
                        r.splice(n, 1),
                        n <= a && a--
                }
                )),
                this
            },
            has: function(e) {
                return e ? b.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = s = [],
                r = n = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return o = s = [],
                n || t || (r = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    b.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return b.Deferred((function(t) {
                        b.each(n, (function(n, i) {
                            var o = h(e[i[4]]) && e[i[4]];
                            r[i[1]]((function() {
                                var e = o && o.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, i, o) {
                    var r = 0;
                    function s(t, n, i, o) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < r)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(c) ? o ? c.call(e, s(r, n, q, o), s(r, n, P, o)) : (r++,
                                    c.call(e, s(r, n, q, o), s(r, n, P, o), s(r, n, q, n.notifyWith))) : (i !== q && (a = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(a, l))
                                }
                            }
                              , d = o ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, d.stackTrace),
                                    t + 1 >= r && (i !== P && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? d() : (b.Deferred.getStackHook && (d.stackTrace = b.Deferred.getStackHook()),
                            e.setTimeout(d))
                        }
                    }
                    return b.Deferred((function(e) {
                        n[0][3].add(s(0, e, h(o) ? o : q, e.notifyWith)),
                        n[1][3].add(s(0, e, h(t) ? t : q)),
                        n[2][3].add(s(0, e, h(i) ? i : P))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? b.extend(e, o) : o
                }
            }
              , r = {};
            return b.each(n, (function(e, t) {
                var s = t[2]
                  , a = t[5];
                o[t[1]] = s.add,
                a && s.add((function() {
                    i = a
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = s.fireWith
            }
            )),
            o.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , s = b.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && (M(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || h(r[n] && r[n].then)))
                return s.then();
            for (; n--; )
                M(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    b.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var z = b.Deferred();
    function W() {
        v.removeEventListener("DOMContentLoaded", W),
        e.removeEventListener("load", W),
        b.ready()
    }
    b.fn.ready = function(e) {
        return z.then(e).catch((function(e) {
            b.readyException(e)
        }
        )),
        this
    }
    ,
    b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0,
            !0 !== e && --b.readyWait > 0 || z.resolveWith(v, [b]))
        }
    }),
    b.ready.then = z.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(b.ready) : (v.addEventListener("DOMContentLoaded", W),
    e.addEventListener("load", W));
    var R = function(e, t, n, i, o, r, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === w(n))
            for (a in o = !0,
            n)
                R(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        h(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(b(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
      , _ = /^-ms-/
      , F = /-([a-z])/g;
    function B(e, t) {
        return t.toUpperCase()
    }
    function U(e) {
        return e.replace(_, "ms-").replace(F, B)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = b.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[U(t)] = n;
            else
                for (i in t)
                    o[U(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in i ? [t] : t.match(O) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var V = new Y
      , G = new Y
      , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function K(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return G.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }),
    b.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r),
                1 === r.nodeType && !V.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)),
                        K(r, i, o[i]));
                    V.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                G.set(this, e)
            }
            )) : R(this, (function(t) {
                var n;
                if (r && void 0 === t)
                    return void 0 !== (n = G.get(r, e)) || void 0 !== (n = K(r, e)) ? n : void 0;
                this.each((function() {
                    G.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                G.remove(this, e)
            }
            ))
        }
    }),
    b.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = V.get(e, t),
                n && (!i || Array.isArray(n) ? i = V.access(e, t, b.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = b._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, (function() {
                b.dequeue(e, t)
            }
            ), r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: b.Callbacks("once memory").add((function() {
                    V.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                b.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = b.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = V.get(r[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$","i")
      , te = ["Top", "Right", "Bottom", "Left"]
      , ne = v.documentElement
      , ie = function(e) {
        return b.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    ne.getRootNode && (ie = function(e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === b.css(e, "display")
    };
    function se(e, t, n, i) {
        var o, r, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return b.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (b.cssNumber[t] ? "" : "px"), d = e.nodeType && (b.cssNumber[t] || "px" !== c && +l) && ee.exec(b.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2,
            c = c || d[3],
            d = +l || 1; s--; )
                b.style(e, t, d + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                d /= r;
            d *= 2,
            b.style(e, t, d + c),
            n = n || []
        }
        return n && (d = +d || +l || 0,
        o = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = d,
        i.end = o)),
        o
    }
    var ae = {};
    function le(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = ae[i];
        return o || (t = n.body.appendChild(n.createElement(i)),
        o = b.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        ae[i] = o,
        o)
    }
    function ce(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
            (i = e[r]).style && (n = i.style.display,
            t ? ("none" === n && (o[r] = V.get(i, "display") || null,
            o[r] || (i.style.display = "")),
            "" === i.style.display && re(i) && (o[r] = le(i))) : "none" !== n && (o[r] = "none",
            V.set(i, "display", n)));
        for (r = 0; r < s; r++)
            null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    b.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                re(this) ? b(this).show() : b(this).hide()
            }
            ))
        }
    });
    var de, ue, pe = /^(?:checkbox|radio)$/i, fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    de = v.createDocumentFragment().appendChild(v.createElement("div")),
    (ue = v.createElement("input")).setAttribute("type", "radio"),
    ue.setAttribute("checked", "checked"),
    ue.setAttribute("name", "t"),
    de.appendChild(ue),
    f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked,
    de.innerHTML = "<textarea>x</textarea>",
    f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue,
    de.innerHTML = "<option></option>",
    f.option = !!de.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && $(e, t) ? b.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function we(e, t, n, i, o) {
        for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === w(r))
                    b.merge(p, r.nodeType ? [r] : r);
                else if (me.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")),
                    a = (fe.exec(r) || ["", ""])[1].toLowerCase(),
                    l = ge[a] || ge._default,
                    s.innerHTML = l[1] + b.htmlPrefilter(r) + l[2],
                    d = l[0]; d--; )
                        s = s.lastChild;
                    b.merge(p, s.childNodes),
                    (s = u.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(r));
        for (u.textContent = "",
        f = 0; r = p[f++]; )
            if (i && b.inArray(r, i) > -1)
                o && o.push(r);
            else if (c = ie(r),
            s = ve(u.appendChild(r), "script"),
            c && ye(s),
            n)
                for (d = 0; r = s[d++]; )
                    he.test(r.type || "") && n.push(r);
        return u
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0
    }
    function Te() {
        return !1
    }
    function ke(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Se(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = Te;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        (o = function(e) {
            return b().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = b.guid++)),
        e.each((function() {
            b.event.add(this, t, o, i, n)
        }
        ))
    }
    function Ce(e, t, n) {
        n ? (V.set(e, t, !1),
        b.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = V.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)
                        (b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments),
                    V.set(this, t, s),
                    i = n(this, t),
                    this[t](),
                    s !== (r = V.get(this, t)) || i ? V.set(this, t, !1) : r = {},
                    s !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r && r.value
                } else
                    s.length && (V.set(this, t, {
                        value: b.event.trigger(b.extend(s[0], b.Event.prototype), s.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === V.get(e, t) && b.event.add(e, t, xe)
    }
    b.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = V.get(e);
            if (X(e))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && b.find.matchesSelector(ne, o),
                n.guid || (n.guid = b.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (s = v.handle) || (s = v.handle = function(t) {
                    return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(O) || [""]).length; c--; )
                    f = g = (a = be.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f && (u = b.event.special[f] || {},
                    f = (o ? u.delegateType : u.bindType) || f,
                    u = b.event.special[f] || {},
                    d = b.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && b.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    b.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = V.hasData(e) && V.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--; )
                    if (f = g = (a = be.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f) {
                        for (u = b.event.special[f] || {},
                        p = l[f = (i ? u.delegateType : u.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            d = p[r],
                            !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1),
                            d.selector && p.delegateCount--,
                            u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || b.removeEvent(e, f, v.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            b.event.remove(e, f + t[c], n, i, !0);
                b.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = new Array(arguments.length), l = b.event.fix(e), c = (V.get(this, "events") || Object.create(null))[l.type] || [], d = b.event.special[l.type] || {};
            for (a[0] = l,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (l.delegateTarget = this,
            !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                for (s = b.event.handlers.call(this, l, c),
                t = 0; (o = s[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                        l.data = r.data,
                        void 0 !== (i = ((b.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? b(o, this).index(c) > -1 : b.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && $(t, "input") && Ce(t, "click", xe),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && $(t, "input") && Ce(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && $(t, "input") && V.get(t, "click") || $(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    b.Event = function(e, t) {
        if (!(this instanceof b.Event))
            return new b.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && b.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[b.expando] = !0
    }
    ,
    b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, b.event.addProp),
    b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        b.event.special[e] = {
            setup: function() {
                return Ce(this, e, ke),
                !1
            },
            trigger: function() {
                return Ce(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }
    )),
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || b.contains(i, o)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    b.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each((function() {
                b.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var $e = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ne(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (a = V.get(e).events))
                for (o in V.remove(t, "handle events"),
                a)
                    for (n = 0,
                    i = a[o].length; n < i; n++)
                        b.event.add(t, o, a[o][n]);
            G.hasData(e) && (r = G.access(e),
            s = b.extend({}, r),
            G.set(t, s))
        }
    }
    function He(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Oe(e, t, n, i) {
        t = r(t);
        var o, s, a, l, c, d, u = 0, p = e.length, g = p - 1, v = t[0], y = h(v);
        if (y || p > 1 && "string" == typeof v && !f.checkClone && Ae.test(v))
            return e.each((function(o) {
                var r = e.eq(o);
                y && (t[0] = v.call(this, o, r.html())),
                Oe(r, t, n, i)
            }
            ));
        if (p && (s = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = s),
        s || i)) {
            for (l = (a = b.map(ve(o, "script"), De)).length; u < p; u++)
                c = o,
                u !== g && (c = b.clone(c, !0, !0),
                l && b.merge(a, ve(c, "script"))),
                n.call(e[u], c, u);
            if (l)
                for (d = a[a.length - 1].ownerDocument,
                b.map(a, Le),
                u = 0; u < l; u++)
                    c = a[u],
                    he.test(c.type || "") && !V.access(c, "globalEval") && b.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? b._evalUrl && !c.noModule && b._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, d) : m(c.textContent.replace(Ee, ""), c, d))
        }
        return e
    }
    function qe(e, t, n) {
        for (var i, o = t ? b.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || b.cleanData(ve(i)),
            i.parentNode && (n && ie(i) && ye(ve(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = ie(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (s = ve(a),
                i = 0,
                o = (r = ve(e)).length; i < o; i++)
                    He(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || ve(e),
                    s = s || ve(a),
                    i = 0,
                    o = r.length; i < o; i++)
                        Ne(r[i], s[i]);
                else
                    Ne(e, a);
            return (s = ve(a, "script")).length > 0 && ye(s, !l && ve(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, o = b.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (X(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
                        n[V.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    b.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return R(this, (function(e) {
                return void 0 === e ? b.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Oe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Oe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (b.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return b.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return R(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (b.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Oe(this, arguments, (function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        b.fn[e] = function(e) {
            for (var n, i = [], o = b(e), r = o.length - 1, a = 0; a <= r; a++)
                n = a === r ? this : this.clone(!0),
                b(o[a])[t](n),
                s.apply(i, n.get());
            return this.pushStack(i)
        }
    }
    ));
    var Pe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i")
      , Me = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Ie = function(e, t, n) {
        var i, o, r = {};
        for (o in t)
            r[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.call(e),
        t)
            e.style[o] = r[o];
        return i
    }
      , ze = new RegExp(te.join("|"),"i");
    function We(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ie(e) || (s = b.style(e, t)),
        !f.pixelBoxStyles() && Pe.test(s) && ze.test(t) && (i = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function Re(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ne.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                i = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                d.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                d.style.position = "absolute",
                r = 12 === n(d.offsetWidth / 3),
                ne.removeChild(c),
                d = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, r, s, a, l, c = v.createElement("div"), d = v.createElement("div");
        d.style && (d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = "content-box" === d.style.backgroundClip,
        b.extend(f, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                r
            },
            reliableTrDimensions: function() {
                var t, n, i, o;
                return null == a && (t = v.createElement("table"),
                n = v.createElement("tr"),
                i = v.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                i.style.height = "9px",
                i.style.display = "block",
                ne.appendChild(t).appendChild(n).appendChild(i),
                o = e.getComputedStyle(n),
                a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight,
                ne.removeChild(t)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , Fe = v.createElement("div").style
      , Be = {};
    function Ue(e) {
        var t = b.cssProps[e] || Be[e];
        return t || (e in Fe ? e : Be[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in Fe)
                    return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/
      , Ye = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Qe(e, t, n) {
        var i = ee.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Je(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += b.css(e, n + te[s], !0, o)),
            i ? ("content" === n && (l -= b.css(e, "padding" + te[s], !0, o)),
            "margin" !== n && (l -= b.css(e, "border" + te[s] + "Width", !0, o))) : (l += b.css(e, "padding" + te[s], !0, o),
            "padding" !== n ? l += b.css(e, "border" + te[s] + "Width", !0, o) : a += b.css(e, "border" + te[s] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0),
        l
    }
    function Ke(e, t, n) {
        var i = Me(e)
          , o = (!f.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, i)
          , r = o
          , s = We(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && $(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === b.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === b.css(e, "boxSizing", !1, i),
        (r = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + Je(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }
    function Ze(e, t, n, i, o) {
        return new Ze.prototype.init(e,t,n,i,o)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = U(t), l = Ye.test(t), c = e.style;
                if (l || (t = Ue(a)),
                s = b.cssHooks[t] || b.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" === (r = typeof n) && (o = ee.exec(n)) && o[1] && (n = se(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (b.cssNumber[a] ? "" : "px")),
                f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = U(t);
            return Ye.test(t) || (t = Ue(a)),
            (s = b.cssHooks[t] || b.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = We(e, t, i)),
            "normal" === o && t in Ge && (o = Ge[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    b.each(["height", "width"], (function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !Xe.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : Ie(e, Ve, (function() {
                        return Ke(e, t, i)
                    }
                    ))
            },
            set: function(e, n, i) {
                var o, r = Me(e), s = !f.scrollboxSize() && "absolute" === r.position, a = (s || i) && "border-box" === b.css(e, "boxSizing", !1, r), l = i ? Je(e, t, i, a, r) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - .5)),
                l && (o = ee.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = b.css(e, t)),
                Qe(0, n, l)
            }
        }
    }
    )),
    b.cssHooks.marginLeft = Re(f.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + te[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        "margin" !== e && (b.cssHooks[e + t].set = Qe)
    }
    )),
    b.fn.extend({
        css: function(e, t) {
            return R(this, (function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Me(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = b.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    b.Tween = Ze,
    Ze.prototype = {
        constructor: Ze,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || b.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
            this
        }
    },
    Ze.prototype.init.prototype = Ze.prototype,
    Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    b.fx = Ze.prototype.init,
    b.fx.step = {};
    var et, tt, nt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        tt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, b.fx.interval),
        b.fx.tick())
    }
    function rt() {
        return e.setTimeout((function() {
            et = void 0
        }
        )),
        et = Date.now()
    }
    function st(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = te[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function at(e, t, n) {
        for (var i, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function lt(e, t, n) {
        var i, o, r = 0, s = lt.prefilters.length, a = b.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (o)
                return !1;
            for (var t = et || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {},
                easing: b.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: et || rt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = b.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), d = c.props;
        for (!function(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (o = t[i = U(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (s = b.cssHooks[i]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(d, c.opts.specialEasing); r < s; r++)
            if (i = lt.prefilters[r].call(c, e, d, c.opts))
                return h(i.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i;
        return b.map(d, at, c),
        h(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        b.fx.timer(b.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    b.Animation = b.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, ee.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(O);
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, d, u = "width"in t || "height"in t, p = this, f = {}, h = e.style, g = e.nodeType && re(e), v = V.get(e, "fxshow");
            for (i in n.queue || (null == (s = b._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            p.always((function() {
                p.always((function() {
                    s.unqueued--,
                    b.queue(e, "fx").length || s.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (o = t[i],
                nt.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i])
                            continue;
                        g = !0
                    }
                    f[i] = v && v[i] || b.style(e, i)
                }
            if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(f))
                for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = v && v.display) && (c = V.get(e, "display")),
                "none" === (d = b.css(e, "display")) && (c ? d = c : (ce([e], !0),
                c = e.style.display || c,
                d = b.css(e, "display"),
                ce([e]))),
                ("inline" === d || "inline-block" === d && null != c) && "none" === b.css(e, "float") && (l || (p.done((function() {
                    h.display = c
                }
                )),
                null == c && (d = h.display,
                c = "none" === d ? "" : d)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                l = !1,
                f)
                    l || (v ? "hidden"in v && (g = v.hidden) : v = V.access(e, "fxshow", {
                        display: c
                    }),
                    r && (v.hidden = !g),
                    g && ce([e], !0),
                    p.done((function() {
                        for (i in g || ce([e]),
                        V.remove(e, "fxshow"),
                        f)
                            b.style(e, i, f[i])
                    }
                    ))),
                    l = at(g ? v[i] : 0, i, p),
                    i in v || (v[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    b.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            h(i.old) && i.old.call(this),
            i.queue && b.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    b.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = b.isEmptyObject(e)
              , r = b.speed(t, n, i)
              , s = function() {
                var t = lt(this, b.extend({}, e), r);
                (o || V.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = b.timers
                  , s = V.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && it.test(o) && i(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || b.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = V.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = b.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                b.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    b.each(["toggle", "show", "hide"], (function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, o)
        }
    }
    )),
    b.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        b.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    )),
    b.timers = [],
    b.fx.tick = function() {
        var e, t = 0, n = b.timers;
        for (et = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || b.fx.stop(),
        et = void 0
    }
    ,
    b.fx.timer = function(e) {
        b.timers.push(e),
        b.fx.start()
    }
    ,
    b.fx.interval = 13,
    b.fx.start = function() {
        tt || (tt = !0,
        ot())
    }
    ,
    b.fx.stop = function() {
        tt = null
    }
    ,
    b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    b.fn.delay = function(t, n) {
        return t = b.fx && b.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        }
        ))
    }
    ,
    function() {
        var e = v.createElement("input")
          , t = v.createElement("select").appendChild(v.createElement("option"));
        e.type = "checkbox",
        f.checkOn = "" !== e.value,
        f.optSelected = t.selected,
        (e = v.createElement("input")).value = "t",
        e.type = "radio",
        f.radioValue = "t" === e.value
    }();
    var ct, dt = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return R(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                b.removeAttr(this, e)
            }
            ))
        }
    }),
    b.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === r && b.isXMLDoc(e) || (o = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void b.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = b.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && $(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(O);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    b.each(b.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = dt[t] || b.find.attr;
        dt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = dt[s],
            dt[s] = o,
            o = null != n(e, t, i) ? s : null,
            dt[s] = r),
            o
        }
    }
    ));
    var ut = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ft(e) {
        return (e.match(O) || []).join(" ")
    }
    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return R(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[b.propFix[e] || e]
            }
            ))
        }
    }),
    b.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && b.isXMLDoc(e) || (t = b.propFix[t] || t,
                o = b.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    f.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        b.propFix[this.toLowerCase()] = this
    }
    )),
    b.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (h(e))
                return this.each((function(t) {
                    b(this).addClass(e.call(this, t, ht(this)))
                }
                ));
            if ((t = gt(e)).length)
                for (; n = this[l++]; )
                    if (o = ht(n),
                    i = 1 === n.nodeType && " " + ft(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = ft(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (h(e))
                return this.each((function(t) {
                    b(this).removeClass(e.call(this, t, ht(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = gt(e)).length)
                for (; n = this[l++]; )
                    if (o = ht(n),
                    i = 1 === n.nodeType && " " + ft(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        o !== (a = ft(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                b(this).toggleClass(e.call(this, n, ht(this), t), t)
            }
            )) : this.each((function() {
                var t, o, r, s;
                if (i)
                    for (o = 0,
                    r = b(this),
                    s = gt(e); t = s[o++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = ht(this)) && V.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var vt = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = h(e),
            this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, b(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = b.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }
            ))) : o ? (t = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }),
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : ft(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = b.makeArray(t), s = o.length; s--; )
                        ((i = o[s]).selected = b.inArray(b.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    b.each(["radio", "checkbox"], (function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = b.inArray(b(e).val(), t) > -1
            }
        },
        f.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    f.focusin = "onfocusin"in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , mt = function(e) {
        e.stopPropagation()
    };
    b.extend(b.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, p, f, y = [i || v], m = d.call(t, "type") ? t.type : t, w = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = f = a = i = i || v,
            3 !== i.nodeType && 8 !== i.nodeType && !yt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (w = m.split("."),
            m = w.shift(),
            w.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            (t = t[b.expando] ? t : new b.Event(m,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = w.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : b.makeArray(n, [t]),
            p = b.event.special[m] || {},
            o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !g(i)) {
                    for (l = p.delegateType || m,
                    yt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        y.push(s),
                        a = s;
                    a === (i.ownerDocument || v) && y.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = y[r++]) && !t.isPropagationStopped(); )
                    f = s,
                    t.type = r > 1 ? l : p.bindType || m,
                    (u = (V.get(s, "events") || Object.create(null))[t.type] && V.get(s, "handle")) && u.apply(s, n),
                    (u = c && s[c]) && u.apply && X(s) && (t.result = u.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !X(i) || c && h(i[m]) && !g(i) && ((a = i[c]) && (i[c] = null),
                b.event.triggered = m,
                t.isPropagationStopped() && f.addEventListener(m, mt),
                i[m](),
                t.isPropagationStopped() && f.removeEventListener(m, mt),
                b.event.triggered = void 0,
                a && (i[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(i, null, t)
        }
    }),
    b.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                b.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return b.event.trigger(e, t, n, !0)
        }
    }),
    f.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this
                  , o = V.access(i, t);
                o || i.addEventListener(e, n, !0),
                V.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this
                  , o = V.access(i, t) - 1;
                o ? V.access(i, t, o) : (i.removeEventListener(e, n, !0),
                V.remove(i, t))
            }
        }
    }
    ));
    var wt = e.location
      , bt = {
        guid: Date.now()
    }
      , xt = /\?/;
    b.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return i = n && n.getElementsByTagName("parsererror")[0],
        n && !i || b.error("Invalid XML: " + (i ? b.map(i.childNodes, (function(e) {
            return e.textContent
        }
        )).join("\n") : t)),
        n
    }
    ;
    var Tt = /\[\]$/
      , kt = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , Ct = /^(?:input|select|textarea|keygen)/i;
    function $t(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            b.each(t, (function(t, o) {
                n || Tt.test(e) ? i(e, o) : $t(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            }
            ));
        else if (n || "object" !== w(t))
            i(e, t);
        else
            for (o in t)
                $t(e + "[" + o + "]", t[o], n, i)
    }
    b.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = h(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e))
            b.each(e, (function() {
                o(this.name, this.value)
            }
            ));
        else
            for (n in e)
                $t(n, e[n], t, o);
        return i.join("&")
    }
    ,
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }
            )).map((function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }
            )).get()
        }
    });
    var At = /%20/g
      , Et = /#.*$/
      , jt = /([?&])_=[^&]*/
      , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Nt = /^\/\//
      , Ht = {}
      , Ot = {}
      , qt = "*/".concat("*")
      , Pt = v.createElement("a");
    function Mt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(O) || [];
            if (h(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function It(e, t, n, i) {
        var o = {}
          , r = e === Ot;
        function s(a) {
            var l;
            return o[a] = !0,
            b.each(e[a] || [], (function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                s(c),
                !1)
            }
            )),
            l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }
    function zt(e, t) {
        var n, i, o = b.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && b.extend(!0, e, i),
        e
    }
    Pt.href = wt.href,
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, b.ajaxSettings), t) : zt(b.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(Ht),
        ajaxTransport: Mt(Ot),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, r, s, a, l, c, d, u, p, f = b.ajaxSetup({}, n), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? b(h) : b.event, y = b.Deferred(), m = b.Callbacks("once memory"), w = f.statusCode || {}, x = {}, T = {}, k = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Dt.exec(r); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? r : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    x[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || k;
                    return i && i.abort(t),
                    C(0, t),
                    this
                }
            };
            if (y.promise(S),
            f.url = ((t || f.url || wt.href) + "").replace(Nt, wt.protocol + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""],
            null == f.crossDomain) {
                l = v.createElement("a");
                try {
                    l.href = f.url,
                    l.href = l.href,
                    f.crossDomain = Pt.protocol + "//" + Pt.host != l.protocol + "//" + l.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = b.param(f.data, f.traditional)),
            It(Ht, f, n, S),
            c)
                return S;
            for (u in (d = b.event && f.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Lt.test(f.type),
            o = f.url.replace(Et, ""),
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(o.length),
            f.data && (f.processData || "string" == typeof f.data) && (o += (xt.test(o) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (o = o.replace(jt, "$1"),
            p = (xt.test(o) ? "&" : "?") + "_=" + bt.guid++ + p),
            f.url = o + p),
            f.ifModified && (b.lastModified[o] && S.setRequestHeader("If-Modified-Since", b.lastModified[o]),
            b.etag[o] && S.setRequestHeader("If-None-Match", b.etag[o])),
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType),
            S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                S.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || c))
                return S.abort();
            if (k = "abort",
            m.add(f.complete),
            S.done(f.success),
            S.fail(f.error),
            i = It(Ot, f, n, S)) {
                if (S.readyState = 1,
                d && g.trigger("ajaxSend", [S, f]),
                c)
                    return S;
                f.async && f.timeout > 0 && (a = e.setTimeout((function() {
                    S.abort("timeout")
                }
                ), f.timeout));
                try {
                    c = !1,
                    i.send(x, C)
                } catch (e) {
                    if (c)
                        throw e;
                    C(-1, e)
                }
            } else
                C(-1, "No Transport");
            function C(t, n, s, l) {
                var u, p, v, x, T, k = n;
                c || (c = !0,
                a && e.clearTimeout(a),
                i = void 0,
                r = l || "",
                S.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && t < 300 || 304 === t,
                s && (x = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(f, S, s)),
                !u && b.inArray("script", f.dataTypes) > -1 && b.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}
                ),
                x = function(e, t, n, i) {
                    var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = d.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                            d.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, x, S, u),
                u ? (f.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T),
                (T = S.getResponseHeader("etag")) && (b.etag[o] = T)),
                204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state,
                p = x.data,
                u = !(v = x.error))) : (v = k,
                !t && k || (k = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (n || k) + "",
                u ? y.resolveWith(h, [p, k, S]) : y.rejectWith(h, [S, k, v]),
                S.statusCode(w),
                w = void 0,
                d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [S, f, u ? p : v]),
                m.fireWith(h, [S, k]),
                d && (g.trigger("ajaxComplete", [S, f]),
                --b.active || b.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }),
    b.each(["get", "post"], (function(e, t) {
        b[t] = function(e, n, i, o) {
            return h(n) && (o = o || i,
            i = n,
            n = void 0),
            b.ajax(b.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, b.isPlainObject(e) && e))
        }
    }
    )),
    b.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    b._evalUrl = function(e, t, n) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                b.globalEval(e, t, n)
            }
        })
    }
    ,
    b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = b(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                b(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = b(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                b(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }
    ,
    b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Wt = {
        0: 200,
        1223: 204
    }
      , Rt = b.ajaxSettings.xhr();
    f.cors = !!Rt && "withCredentials"in Rt,
    f.ajax = Rt = !!Rt,
    b.ajaxTransport((function(t) {
        var n, i;
        if (f.cors || Rt && !t.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(s, o[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout((function() {
                            n && i()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    b.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e),
                e
            }
        }
    }),
    b.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    b.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(i, o) {
                    t = b("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    v.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var _t, Ft = [], Bt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || b.expando + "_" + bt.guid++;
            return this[e] = !0,
            e
        }
    }),
    b.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Bt, "$1" + o) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || b.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            i.always((function() {
                void 0 === r ? b(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Ft.push(o)),
                s && h(r) && r(s[0]),
                s = r = void 0
            }
            )),
            "script"
    }
    )),
    f.createHTMLDocument = ((_t = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (f.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(i)) : t = v),
        r = !n && [],
        (o = A.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, r),
        r && r.length && b(r).remove(),
        b.merge([], o.childNodes)));
        var i, o, r
    }
    ,
    b.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = ft(e.slice(a)),
        e = e.slice(0, a)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && b.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments,
            s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }
        )).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, r || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    b.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = b.css(e, "position"), d = b(e), u = {};
            "static" === c && (e.style.position = "relative"),
            a = d.offset(),
            r = b.css(e, "top"),
            l = b.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top,
            o = i.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            h(t) && (t = t.call(e, n, b.extend({}, a))),
            null != t.top && (u.top = t.top - a.top + s),
            null != t.left && (u.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, u) : d.css(u)
        }
    },
    b.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    b.offset.setOffset(this, e, t)
                }
                ));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === b.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = b(e).offset()).top += b.css(e, "borderTopWidth", !0),
                    o.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - b.css(i, "marginTop", !0),
                    left: t.left - o.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position"); )
                    e = e.offsetParent;
                return e || ne
            }
            ))
        }
    }),
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(i) {
            return R(this, (function(e, i, o) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
                    return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }
            ), e, i, arguments.length)
        }
    }
    )),
    b.each(["top", "left"], (function(e, t) {
        b.cssHooks[t] = Re(f.pixelPosition, (function(e, n) {
            if (n)
                return n = We(e, t),
                Pe.test(n) ? b(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    b.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            b.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === r ? "margin" : "border");
                return R(this, (function(t, n, o) {
                    var r;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? b.css(t, n, a) : b.style(t, n, o, a)
                }
                ), t, s ? o : void 0, s)
            }
        }
        ))
    }
    )),
    b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    b.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || b.guid++,
            r
    }
    ,
    b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }
    ,
    b.isArray = Array.isArray,
    b.parseJSON = JSON.parse,
    b.nodeName = $,
    b.isFunction = h,
    b.isWindow = g,
    b.camelCase = U,
    b.type = w,
    b.now = Date.now,
    b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    b.trim = function(e) {
        return null == e ? "" : (e + "").replace(Ut, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return b
    }
    ));
    var Xt = e.jQuery
      , Yt = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Yt),
        t && e.jQuery === b && (e.jQuery = Xt),
        b
    }
    ,
    void 0 === t && (e.jQuery = e.$ = b),
    b
}
)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    var t, n = window.Slick || {};
    t = 0,
    (n = function(n, i) {
        var o, r = this;
        r.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(n),
            appendDots: e(n),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, n) {
                return e('<button type="button" />').text(n + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        e.extend(r, r.initials),
        r.activeBreakpoint = null,
        r.animType = null,
        r.animProp = null,
        r.breakpoints = [],
        r.breakpointSettings = [],
        r.cssTransitions = !1,
        r.focussed = !1,
        r.interrupted = !1,
        r.hidden = "hidden",
        r.paused = !0,
        r.positionProp = null,
        r.respondTo = null,
        r.rowCount = 1,
        r.shouldClick = !0,
        r.$slider = e(n),
        r.$slidesCache = null,
        r.transformType = null,
        r.transitionType = null,
        r.visibilityChange = "visibilitychange",
        r.windowWidth = 0,
        r.windowTimer = null,
        o = e(n).data("slick") || {},
        r.options = e.extend({}, r.defaults, i, o),
        r.currentSlide = r.options.initialSlide,
        r.originalSettings = r.options,
        void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
        r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
        r.visibilityChange = "webkitvisibilitychange"),
        r.autoPlay = e.proxy(r.autoPlay, r),
        r.autoPlayClear = e.proxy(r.autoPlayClear, r),
        r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
        r.changeSlide = e.proxy(r.changeSlide, r),
        r.clickHandler = e.proxy(r.clickHandler, r),
        r.selectHandler = e.proxy(r.selectHandler, r),
        r.setPosition = e.proxy(r.setPosition, r),
        r.swipeHandler = e.proxy(r.swipeHandler, r),
        r.dragHandler = e.proxy(r.dragHandler, r),
        r.keyHandler = e.proxy(r.keyHandler, r),
        r.instanceUid = t++,
        r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        r.registerBreakpoints(),
        r.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    n.prototype.addSlide = n.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n)
            i = n,
            n = null;
        else if (n < 0 || n >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each((function(t, n) {
            e(n).attr("data-slick-index", t)
        }
        )),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    n.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    n.prototype.animateSlide = function(t, n) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)",
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(),
        t = Math.ceil(t),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)",
        o.$slideTrack.css(i),
        n && setTimeout((function() {
            o.disableTransition(),
            n.call()
        }
        ), o.options.speed))
    }
    ,
    n.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)),
        t
    }
    ,
    n.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each((function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        }
        ))
    }
    ,
    n.prototype.applyTransition = function(e) {
        var t = this
          , n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }
    ,
    n.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    n.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    n.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    n.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    n.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            n = e("<ul />").addClass(i.options.dotsClass),
            t = 0; t <= i.getDotCount(); t += 1)
                n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    n.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each((function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }
        )),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        !0 === t.options.draggable && t.$list.addClass("draggable")
    }
    ,
    n.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 0) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    n.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            a = o),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    n.prototype.changeSlide = function(t, n) {
        var i, o, r = this, s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        t.data.message) {
        case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? r.options.slidesToScroll : i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
        case "index":
            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    n.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0,
        e > (t = this.getNavigableIndexes())[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }
    ,
    n.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
        t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    n.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    n.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    n.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    n.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {},
        n.cleanUpEvents(),
        e(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }
        )),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.detach(),
        n.$list.detach(),
        n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        t || n.$slider.trigger("destroy", [n])
    }
    ,
    n.prototype.disableTransition = function(e) {
        var t = this
          , n = {};
        n[t.transitionType] = "",
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }
    ,
    n.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
        n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        t && setTimeout((function() {
            n.disableTransition(e),
            t.call()
        }
        ), n.options.speed))
    }
    ,
    n.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    n.prototype.filterSlides = n.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    n.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout((function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"),
                t.autoPlay())
            }
            ), 0)
        }
        ))
    }
    ,
    n.prototype.getCurrent = n.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    n.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , n = 0
          , i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++i;
            else
                for (; t < e.slideCount; )
                    ++i,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++i,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }
    ,
    n.prototype.getLeft = function(e) {
        var t, n, i, o, r = this, s = 0;
        return r.slideOffset = 0,
        n = r.$slides.first().outerHeight(!0),
        !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
        o = -1,
        !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)),
        s = n * r.options.slidesToShow * o),
        r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1,
        s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
        s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth,
        s = (e + r.options.slidesToShow - r.slideCount) * n),
        r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
        s = 0),
        !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0,
        r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
        t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s,
        !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow),
        t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1),
        t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        t += (r.$list.width() - i.outerWidth()) / 2)),
        t
    }
    ,
    n.prototype.getOption = n.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    n.prototype.getNavigableIndexes = function() {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll,
        i = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); n < e; )
            o.push(n),
            n = i + t.options.slidesToScroll,
            i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    n.prototype.getSlick = function() {
        return this
    }
    ,
    n.prototype.getSlideCount = function() {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) {
            if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return t = r,
                !1
        }
        )),
        Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    n.prototype.goTo = n.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    n.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        t && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1,
        n.autoPlay())
    }
    ,
    n.prototype.initADA = function() {
        var t = this
          , n = Math.ceil(t.slideCount / t.options.slidesToShow)
          , i = t.getNavigableIndexes().filter((function(e) {
            return e >= 0 && e < t.slideCount
        }
        ));
//         t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
//             "aria-hidden": "true",
//             tabindex: "-1"
//         }).find("a, input, button, select").attr({
//             tabindex: "-1"
//         }),
        null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
            var o = i.indexOf(n);
            if (e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }),
            -1 !== o) {
                var r = "slick-slide-control" + t.instanceUid + o;
                e("#" + r).length && e(this).attr({
                    "aria-describedby": r
                })
            }
        }
        )),
        t.$dots.attr("role", "tablist").find("li").each((function(o) {
            var r = i[o];
            e(this).attr({
                role: "presentation"
            }),
            e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }
        )).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
//         for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
//             t.options.focusOnChange ? t.$slides.eq(o).attr({
//                 tabindex: "0"
//             }) : t.$slides.eq(o).removeAttr("tabindex");
//         t.activateADA()
//     }
//     ,
    n.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }
    ,
    n.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    n.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    n.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(t.setPosition)
    }
    ,
    n.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    n.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    n.prototype.lazyLoad = function() {
        var t, n, i, o = this;
        function r(t) {
            e("img[data-lazy]", t).each((function() {
                var t = e(this)
                  , n = e(this).attr("data-lazy")
                  , i = e(this).attr("data-srcset")
                  , r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , s = document.createElement("img");
                s.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, (function() {
                        i && (t.attr("srcset", i),
                        r && t.attr("sizes", r)),
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, (function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }
                        )),
                        o.$slider.trigger("lazyLoaded", [o, t, n])
                    }
                    ))
                }
                ,
                s.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, t, n])
                }
                ,
                s.src = n
            }
            ))
        }
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        i = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (n > 0 && n--,
        i <= o.slideCount && i++)),
        t = o.$slider.find(".slick-slide").slice(n, i),
        "anticipated" === o.options.lazyLoad)
            for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                s < 0 && (s = o.slideCount - 1),
                t = (t = t.add(l.eq(s))).add(l.eq(a)),
                s--,
                a++;
        r(t),
        o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    n.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    n.prototype.next = n.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    n.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    n.prototype.pause = n.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    n.prototype.play = n.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    n.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]),
        n.animating = !1,
        n.slideCount > n.options.slidesToShow && n.setPosition(),
        n.swipeLeft = null,
        n.options.autoplay && n.autoPlay(),
        !0 === n.options.accessibility && (n.initADA(),
        n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    n.prototype.prev = n.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    n.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    n.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(),
        i = n.attr("data-lazy"),
        o = n.attr("data-srcset"),
        r = n.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o),
            r && n.attr("sizes", r)),
            n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, n, i]),
            a.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            t < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(t + 1)
            }
            ), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, n, i]),
            a.progressiveLazyLoad())
        }
        ,
        s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    n.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    n.prototype.registerBreakpoints = function() {
        var t, n, i, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            for (t in o.respondTo = o.options.respondTo || "window",
            r)
                if (i = o.breakpoints.length - 1,
                r.hasOwnProperty(t)) {
                    for (n = r[t].breakpoint; i >= 0; )
                        o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(n),
                    o.breakpointSettings[n] = r[t].settings
                }
            o.breakpoints.sort((function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            }
            ))
        }
    }
    ,
    n.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    n.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout((function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }
        ), 50))
    }
    ,
    n.prototype.removeSlide = n.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e,
        i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
            return !1;
        i.unload(),
        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    n.prototype.setCSS = function(e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {},
        !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")",
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)",
        i.$slideTrack.css(o)))
    }
    ,
    n.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    n.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each((function(i, o) {
            t = n.slideWidth * i * -1,
            !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }
        )),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    n.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    n.prototype.setOption = n.prototype.slickSetOption = function() {
        var t, n, i, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[i] = o;
        else if ("multiple" === r)
            e.each(i, (function(e, t) {
                s.options[e] = t
            }
            ));
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive))
                    s.options.responsive = [o[n]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0; )
                        s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1),
                        t--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    n.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    n.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    n.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2),
            !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e,
            n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center")
        } else
            e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
            i = !0 === r.options.infinite ? r.options.slidesToShow + e : e,
            r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }
    ,
    n.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (n = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            t = o.slideCount; t > o.slideCount - i; t -= 1)
                n = t - 1,
                e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1)
                n = t,
                e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                e(this).attr("id", "")
            }
            ))
        }
    }
    ,
    n.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    n.prototype.selectHandler = function(t) {
        var n = this
          , i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
        n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }
    ,
    n.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a, l, c = this;
        if (t = t || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e),
            i = e,
            a = c.getLeft(i),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i)
                }
                )) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i)
                }
                )) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                r = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== n ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, (function() {
                        c.postSlide(o)
                    }
                    ))) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                    c.postSlide(o)
                }
                )) : c.postSlide(o)
            }
    }
    ,
    n.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    n.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(t, e),
        (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
        i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }
    ,
    n.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1,
        i.swiping = !1,
        i.scrolling)
            return i.scrolling = !1,
            !1;
        if (i.interrupted = !1,
        i.shouldClick = !(i.touchObject.swipeLength > 10),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    n.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    n.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX,
        a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
        n = a.swipeDirection(),
        void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        e.preventDefault()),
        o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        i = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o,
        !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    n.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return n.touchObject = {},
            !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    }
    ,
    n.prototype.unfilterSlides = n.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    n.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    n.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    n.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    n.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    n.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, t, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new n(i[e],o) : t = i[e].slick[o].apply(i[e].slick, r),
            void 0 !== t)
                return t;
        return i
    }
}
);
const burgerIcon = document.querySelector(".header__list-icon")
  , listOuter = document.querySelector(".header__list-outer");
function scrollNav() {
    $(".header__list-link").click((function() {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - document.querySelector("header").offsetHeight
        }, 1)
    }
    )),
    $(".header__list-link").click((function() {
        $(".header__list-outer").removeClass("active"),
        $(".header__list-icon").removeClass("active"),
        $("body").removeClass("_lock")
    }
    ))
}
burgerIcon && burgerIcon.addEventListener("click", (function(e) {
    document.body.classList.toggle("_lock"),
    burgerIcon.classList.toggle("active"),
    listOuter.classList.toggle("active")
}
)),
scrollNav(),
$((function() {
    $(".gamedev__big-preview").slick({}),
    $(".sites-allworks__links").slick({
        dots: !0,
        dotsClass: "slick-dots",
        arrows: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 810,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    $(".gamedev__title").on("click", (function() {
        $(".title-descr").toggleClass("title-descr--close")
    }
    )),
    $(".sites__title").on("click", (function() {
        $(".title-descr_two").toggleClass("title-descr_two--close")
    }
    )),
    $(".contacts__title").on("click", (function() {
        $(".title-descr_three").toggleClass("title-descr_three--close")
    }
    )),
    $(".title-descr__toggle").on("click", (function() {
        $(".title-descr").addClass("title-descr--close"),
        $(".title-descr_two").addClass("title-descr_two--close"),
        $(".title-descr_three").addClass("title-descr_three--close")
    }
    ))
}
)),
jQuery(document).ready((function() {
    var e = $("#button");
    $(window).scroll((function() {
        $(window).scrollTop() > 300 ? e.addClass("show") : e.removeClass("show")
    }
    )),
    e.on("click", (function(e) {
        e.preventDefault(),
        $("html, body").animate({
            scrollTop: 0
        }, "300")
    }
    ))
}
));
