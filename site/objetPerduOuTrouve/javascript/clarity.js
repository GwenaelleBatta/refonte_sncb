/* clarity-js v0.6.32: https://github.com/microsoft/clarity (License: MIT) */
!function () {
    "use strict";
    var t = Object.freeze({
        __proto__: null, get track() {
            return ka
        }, get start() {
            return _a
        }, get queue() {
            return Ta
        }, get stop() {
            return xa
        }
    }), e = Object.freeze({
        __proto__: null, get data() {
            return Ea
        }, get start() {
            return Ra
        }, get check() {
            return Aa
        }, get trigger() {
            return La
        }, get compute() {
            return Ya
        }, get stop() {
            return Ha
        }
    }), n = Object.freeze({
        __proto__: null, get data() {
            return qa
        }, get updates() {
            return Xa
        }, get start() {
            return Wa
        }, get stop() {
            return Pa
        }, get log() {
            return Ua
        }, get compute() {
            return Ba
        }, get reset() {
            return Fa
        }
    }), a = Object.freeze({
        __proto__: null, get data() {
            return Va
        }, get callback() {
            return Ga
        }, get start() {
            return Za
        }, get userAgentData() {
            return Ka
        }, get stop() {
            return Qa
        }, get metadata() {
            return $a
        }, get id() {
            return tr
        }, get consent() {
            return er
        }, get clear() {
            return nr
        }, get save() {
            return ar
        }
    }), r = Object.freeze({
        __proto__: null, get data() {
            return fr
        }, get start() {
            return hr
        }, get stop() {
            return pr
        }, get envelope() {
            return vr
        }
    }), i = {
        projectId: null,
        delay: 1e3,
        lean: !1,
        track: !0,
        content: !0,
        mask: [],
        unmask: [],
        regions: [],
        metrics: [],
        dimensions: [],
        cookies: [],
        report: null,
        upload: null,
        fallback: null,
        upgrade: null
    };

    function o(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }

    var u = 0;

    function c(t) {
        return void 0 === t && (t = null), t = t || performance.now(), Math.max(Math.round(t - u), 0)
    }

    var s = "0.6.32";

    function l(t) {
        for (var e = 5381, n = e, a = 0; a < t.length; a += 2) {
            if (e = (e << 5) + e ^ t.charCodeAt(a), a + 1 < t.length) n = (n << 5) + n ^ t.charCodeAt(a + 1)
        }
        return Math.abs(e + 11579 * n).toString(36)
    }

    var d = null, f = null, h = !1;

    function p() {
        h && (d = {
            time: c(),
            event: 4,
            data: {
                visible: f.visible,
                docWidth: f.docWidth,
                docHeight: f.docHeight,
                screenWidth: f.screenWidth,
                screenHeight: f.screenHeight,
                scrollX: f.scrollX,
                scrollY: f.scrollY,
                pointerX: f.pointerX,
                pointerY: f.pointerY,
                activityTime: f.activityTime
            }
        }), f = f || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function v(t, e, n) {
        switch (t) {
            case 8:
                f.docWidth = e, f.docHeight = n;
                break;
            case 11:
                f.screenWidth = e, f.screenHeight = n;
                break;
            case 10:
                f.scrollX = e, f.scrollY = n;
                break;
            default:
                f.pointerX = e, f.pointerY = n
        }
        h = !0
    }

    function g(t) {
        f.activityTime = t
    }

    function m(t, e) {
        f.visible = "visible" === e ? 1 : 0, f.visible || g(t), h = !0
    }

    function b() {
        h && za(4)
    }

    var y = Object.freeze({
        __proto__: null, get state() {
            return d
        }, start: function () {
            h = !1, p()
        }, reset: p, track: v, activity: g, visibility: m, compute: b, stop: function () {
            p()
        }
    }), w = null;

    function k(t, e) {
        Cr() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (w = {
            key: t,
            value: e
        }, za(24))
    }

    var E, S = null, M = null;

    function O(t, e) {
        void 0 === e && (e = 1), t in S || (S[t] = 0), t in M || (M[t] = 0), S[t] += e, M[t] += e
    }

    function N(t, e) {
        null !== e && (t in S || (S[t] = 0), t in M || (M[t] = 0), S[t] += e, M[t] += e)
    }

    function _(t, e) {
        null !== e && !1 === isNaN(e) && (t in S || (S[t] = 0), (e > S[t] || 0 === S[t]) && (M[t] = e, S[t] = e))
    }

    function T(t, e, n) {
        return window.setTimeout(br(t), e, n)
    }

    function x(t) {
        return window.clearTimeout(t)
    }

    var D = 0, I = 0, C = null;

    function j() {
        C && x(C), C = T(z, I), D = c()
    }

    function z() {
        var t = c();
        E = {gap: t - D}, za(25), E.gap < 3e5 ? C = T(z, I) : xr && (k("clarity", "suspend"), Gr(), ["mousemove", "touchstart"].forEach((function (t) {
            return wr(document, t, zr)
        })), ["resize", "scroll", "pageshow"].forEach((function (t) {
            return wr(window, t, zr)
        })))
    }

    var R = Object.freeze({
        __proto__: null, get data() {
            return E
        }, start: function () {
            I = 6e4, D = 0
        }, reset: j, stop: function () {
            x(C), D = 0, I = 0
        }
    }), A = null;

    function L(t, e) {
        if (t in A) {
            var n = A[t], a = n[n.length - 1];
            e - a[0] > 100 ? A[t].push([e, 0]) : a[1] = e - a[0]
        } else A[t] = [[e, 0]]
    }

    function Y() {
        za(36)
    }

    function H() {
        A = {}
    }

    var q = Object.freeze({
        __proto__: null, get data() {
            return A
        }, start: function () {
            A = {}
        }, stop: function () {
            A = {}
        }, track: L, compute: Y, reset: H
    }), X = null;

    function W(t) {
        Cr() && i.lean && (i.lean = !1, X = {key: t}, ar(), i.upgrade && i.upgrade(t), za(3))
    }

    var P = Object.freeze({
        __proto__: null, get data() {
            return X
        }, start: function () {
            !i.lean && i.upgrade && i.upgrade("Config"), X = null
        }, upgrade: W, stop: function () {
            X = null
        }
    }), U = null;

    function B(t, e) {
        V(t, "string" == typeof e ? [e] : e)
    }

    function F(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), V("userId", [t]), V("sessionId", [e]), V("pageId", [n])
    }

    function V(t, e) {
        if (Cr() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in U ? U[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            U[t] = n
        }
    }

    function G() {
        za(34)
    }

    function J() {
        U = {}
    }

    function Z(t, e, n, a) {
        return new (n || (n = Promise))((function (r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(o, u)
            }

            c((a = a.apply(t, e || [])).next())
        }))
    }

    function K(t, e) {
        var n, a, r, i, o = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function u(i) {
            return function (u) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return o.label++, {value: i[1], done: !1};
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < r[1]) {
                                    o.label = r[1], r = i;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(i);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, u])
            }
        }
    }

    var Q = "CompressionStream" in window;

    function $(t) {
        return Z(this, void 0, void 0, (function () {
            var e, n;
            return K(this, (function (a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), Q ? (e = new ReadableStream({
                            start: function (e) {
                                return Z(this, void 0, void 0, (function () {
                                    return K(this, (function (n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, tt(e)]) : [3, 2];
                    case 1:
                        return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function tt(t) {
        return Z(this, void 0, void 0, (function () {
            var e, n, a, r, i;
            return K(this, (function (o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }

    var et = [y, n, Object.freeze({
        __proto__: null, get data() {
            return U
        }, start: function () {
            J()
        }, set: B, identify: F, compute: G, reset: J, stop: function () {
            J()
        }
    }), e, q, a, r, t, R, P];

    function nt() {
        S = {}, M = {}, O(5), et.forEach((function (t) {
            return br(t.start)()
        }))
    }

    function at() {
        et.slice().reverse().forEach((function (t) {
            return br(t.stop)()
        })), S = {}, M = {}
    }

    function rt() {
        G(), b(), Ba(), za(0), Y(), Ya()
    }

    function it(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case"*T":
                    case"value":
                    case"placeholder":
                        return function (t) {
                            for (var e = -1, n = !1, a = !1, r = !1, i = null, o = 0; o < t.length; o++) {
                                var u = t.charCodeAt(o);
                                n = n || u >= 48 && u <= 57, a = a || 64 === u, r = 9 === u || 10 === u || 13 === u || 32 === u, (0 === o || o === t.length - 1 || r) && ((n || a) && (null === i && (i = t.split("")), ct(i, e, r ? o : o + 1)), r && (n = !1, a = !1, e = o))
                            }
                            return i ? i.join("") : t
                        }(t);
                    case"input":
                        return ut(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case"*T":
                        return a ? function (t) {
                            var e = t.trim();
                            if (e.length > 0) {
                                var n = e[0], a = t.indexOf(n), r = t.substr(0, a), i = t.substr(a + e.length);
                                return "".concat(r).concat(e.length.toString(36)).concat(i)
                            }
                            return t
                        }(t) : ot(t);
                    case"src":
                    case"srcset":
                    case"title":
                    case"alt":
                        return 3 === n ? "" : t;
                    case"value":
                    case"click":
                    case"input":
                        return ut(t);
                    case"placeholder":
                        return ot(t)
                }
        }
        return t
    }

    function ot(t) {
        return t.replace(/\S/gi, "•")
    }

    function ut(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function ct(t, e, n) {
        for (var a = e + 1; a < n; a++) t[a] = "•"
    }

    var st = {}, lt = [], dt = null, ft = null, ht = null;

    function pt() {
        st = {}, lt = [], dt = null, ft = null
    }

    function vt(t, e) {
        return void 0 === e && (e = 0), Z(this, void 0, void 0, (function () {
            var n, a, r;
            return K(this, (function (i) {
                for (n = 0, a = lt; n < a.length; n++) if (a[n].task === t) return [2];
                return r = new Promise((function (n) {
                    lt[1 === e ? "unshift" : "push"]({task: t, resolve: n, id: tr()})
                })), null === dt && null === ft && gt(), [2, r]
            }))
        }))
    }

    function gt() {
        var t = lt.shift();
        t && (dt = t, t.task().then((function () {
            t.id === tr() && (t.resolve(), dt = null, gt())
        })).catch((function (e) {
            t.id === tr() && (e && Wt(0, 1, e.name, e.message, e.stack), dt = null, gt())
        })))
    }

    function mt(t) {
        var e = kt(t);
        return e in st ? performance.now() - st[e].start > st[e].yield ? 0 : 1 : 2
    }

    function bt(t) {
        st[kt(t)] = {start: performance.now(), calls: 0, yield: 30}
    }

    function yt(t) {
        var e = performance.now(), n = kt(t), a = e - st[n].start;
        N(t.cost, a), O(5), st[n].calls > 0 && N(4, a)
    }

    function wt(t) {
        return Z(this, void 0, void 0, (function () {
            var e, n;
            return K(this, (function (a) {
                switch (a.label) {
                    case 0:
                        return (e = kt(t)) in st ? (yt(t), n = st[e], [4, Et()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(), function (t) {
                            var e = kt(t);
                            if (st && st[e]) {
                                var n = st[e].calls, a = st[e].yield;
                                bt(t), st[e].calls = n + 1, st[e].yield = a
                            }
                        }(t), a.label = 2;
                    case 2:
                        return [2, e in st ? 1 : 2]
                }
            }))
        }))
    }

    function kt(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function Et() {
        return Z(this, void 0, void 0, (function () {
            return K(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return ft ? [4, ft] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function (t) {
                            Mt(t, {timeout: 5e3})
                        }))]
                }
            }))
        }))
    }

    var St, Mt = window.requestIdleCallback || function (t, e) {
        var n = performance.now(), a = new MessageChannel, r = a.port1, i = a.port2;
        r.onmessage = function (a) {
            var r = performance.now(), o = r - n, u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function () {
                i.postMessage(r)
            })); else {
                var c = o > e.timeout;
                t({
                    didTimeout: c, timeRemaining: function () {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function () {
            i.postMessage(performance.now())
        }))
    };

    function Ot() {
        St = null
    }

    function Nt() {
        var t = document.body, e = document.documentElement, n = t ? t.clientWidth : null, a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null, i = e ? e.clientWidth : null, o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null, c = Math.max(n, a, r, i, o, u), s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null, d = t ? t.offsetHeight : null, f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null, p = e ? e.offsetHeight : null, v = Math.max(s, l, d, f, h, p);
        null !== St && c === St.width && v === St.height || null === c || null === v || (St = {
            width: c,
            height: v
        }, _t(8))
    }

    function _t(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), Z(this, void 0, void 0, (function () {
            var a, r, o, u, s, l, d, f, h, p, m, b, y, w, k, E, S, M, O, N, _, T, x, D, I, C;
            return K(this, (function (j) {
                switch (j.label) {
                    case 0:
                        switch (a = n || c(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 37:
                                return [3, 3];
                            case 5:
                            case 6:
                                return [3, 4]
                        }
                        return [3, 11];
                    case 1:
                        return o = St, r.push(o.width), r.push(o.height), v(t, o.width, o.height), Ta(r), [3, 11];
                    case 2:
                        for (u = 0, s = De; u < s.length; u++) l = s[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Ta(r);
                        return We(), [3, 11];
                    case 3:
                        for (d = 0, f = Dt; d < f.length; d++) h = f[d], r.push(h.id), r.push(h.width), r.push(h.height);
                        return zt(), Ta(r), [3, 11];
                    case 4:
                        if (2 === mt(e)) return [3, 11];
                        if (!((p = Ne()).length > 0)) return [3, 10];
                        m = 0, b = p, j.label = 5;
                    case 5:
                        return m < b.length ? (y = b[m], 0 !== (w = mt(e)) ? [3, 7] : [4, wt(e)]) : [3, 9];
                    case 6:
                        w = j.sent(), j.label = 7;
                    case 7:
                        if (2 === w) return [3, 9];
                        for (k = y.data, E = y.metadata.active, S = y.metadata.suspend, M = y.metadata.privacy, O = function (t) {
                            var e = t.metadata.privacy;
                            return "*T" === t.data.tag && !(0 === e || 1 === e)
                        }(y), N = E ? ["tag", "attributes", "value"] : ["tag"], function (t) {
                            if (!1 === It) return;
                            if (Ct = null === Ct ? new ResizeObserver(jt) : Ct) {
                                var e = Se(t);
                                if (e && null !== e.metadata.size && 0 === e.metadata.size.length) {
                                    var n = Ee(t);
                                    if (n && n.nodeType === Node.ELEMENT_NODE) {
                                        var a = n, r = a.getBoundingClientRect();
                                        e.metadata.size = [Math.floor(100 * r.width), Math.floor(100 * r.height)], Ct.observe(a)
                                    }
                                }
                            }
                        }(y.id), _ = 0, T = N; _ < T.length; _++) if (k[x = T[_]]) switch (x) {
                            case"tag":
                                D = y.metadata.size, I = O ? -1 : 1, r.push(y.id * I), y.parent && E && r.push(y.parent), y.previous && E && r.push(y.previous), r.push(S ? "*M" : k[x]), D && 2 === D.length && r.push("".concat("#").concat(Tt(D[0]), ".").concat(Tt(D[1])));
                                break;
                            case"attributes":
                                for (C in k[x]) void 0 !== k[x][C] && r.push(xt(C, k[x][C], M));
                                break;
                            case"value":
                                r.push(it(k[x], k.tag, M, O))
                        }
                        j.label = 8;
                    case 8:
                        return m++, [3, 5];
                    case 9:
                        6 === t && g(a), Ta(function (t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++) if ("string" == typeof t[i]) {
                                var o = t[i], u = n[o] || -1;
                                u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                            } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !i.lean), j.label = 10;
                    case 10:
                        return [3, 11];
                    case 11:
                        return [2]
                }
            }))
        }))
    }

    function Tt(t) {
        return t.toString(36)
    }

    function xt(t, e, n) {
        return "".concat(t, "=").concat(it(e, t, n))
    }

    var Dt = [], It = !1, Ct = null;

    function jt(t) {
        window.requestAnimationFrame((function () {
            for (var e = 0, n = t; e < n.length; e++) {
                var a = n[e], r = a.target, i = r ? me(r) : null;
                if (i) {
                    var o = Se(i).metadata.size, u = a.borderBoxSize, c = null, s = null;
                    if (u && u.length > 0) c = Math.floor(100 * u[0].inlineSize), s = Math.floor(100 * u[0].blockSize); else {
                        var l = r.getBoundingClientRect();
                        c = Math.floor(100 * l.width), s = Math.floor(100 * l.height)
                    }
                    c !== o[0] && s !== o[1] && (o = [c, s], Dt.push({id: i, width: c, height: s}))
                }
            }
            Dt.length > 0 && _t(37)
        }))
    }

    function zt() {
        Dt = []
    }

    function Rt() {
        zt(), Ct && (Ct.disconnect(), Ct = null), It = !1
    }

    var At, Lt = {};

    function Yt(t) {
        var e = t.error || t;
        if (e.message in Lt || (Lt[e.message] = 0), Lt[e.message]++ >= 5) return !0;
        if (e && e.message) {
            if (At = {
                message: e.message,
                line: t.lineno,
                column: t.colno,
                stack: e.stack,
                source: t.filename
            }, e.message.indexOf("ResizeObserver") >= 0) return Rt(), !1;
            Ht(31)
        }
        return !0
    }

    function Ht(t) {
        return Z(this, void 0, void 0, (function () {
            var e;
            return K(this, (function (n) {
                switch (e = [c(), t], t) {
                    case 31:
                        e.push(At.message), e.push(At.line), e.push(At.column), e.push(At.stack), e.push(At.source), Ta(e);
                        break;
                    case 33:
                        qt && (e.push(qt.code), e.push(qt.name), e.push(qt.message), e.push(qt.stack), e.push(qt.severity), Ta(e, !1))
                }
                return [2]
            }))
        }))
    }

    var qt, Xt = {};

    function Wt(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Xt && Xt[t].indexOf(i) >= 0 || (qt = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Xt ? Xt[t].push(i) : Xt[t] = [i], Ht(33))
    }

    var Pt = /1/g, Ut = /[^0-9\.]/g, Bt = /[^0-9\.,]/g, Ft = {};

    function Vt(t, e) {
        for (var n = function (e) {
            var n = e[0], a = e[1], r = e[2], i = e[3], o = !0;
            switch (r) {
                case 0:
                    o = i && !!top.location.href.match(function (t) {
                        return Ft[t] = t in Ft ? Ft[t] : new RegExp(t), Ft[t]
                    }(i));
                    break;
                case 1:
                    o = i && !!Gt(i)
            }
            o && t.querySelectorAll(a).forEach((function (t) {
                return Ae(t, n.toString())
            }))
        }, a = 0, r = e; a < r.length; a++) {
            n(r[a])
        }
    }

    function Gt(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = window);
        var a = t.split("."), r = a.shift();
        return n && n[r] ? a.length > 0 ? Gt(a.join("."), e, n[r]) : null === e || e === typeof n[r] ? n[r] : null : null
    }

    function Jt(t) {
        return t ? t.substr(0, 256) : t
    }

    function Zt(t, e, n) {
        void 0 === n && (n = !0);
        try {
            e = e || 1;
            var a = document.documentElement.lang;
            if (Intl && Intl.NumberFormat && a && n) {
                t = t.replace(Bt, "");
                var r = Intl.NumberFormat(a).format(11111).replace(Pt, ""),
                    i = Intl.NumberFormat(a).format(1.1).replace(Pt, "");
                return Math.round(parseFloat(t.replace(new RegExp("\\" + r, "g"), "").replace(new RegExp("\\" + i), ".")) * e)
            }
            return Math.round(parseFloat(t.replace(Ut, "")) * e)
        } catch (t) {
            return null
        }
    }

    var Kt = ["DIV", "TR", "P", "LI", "UL", "A", "BUTTON"];

    function Qt(t, e) {
        void 0 === e && (e = !1);
        var n = t.attributes, a = t.prefix ? t.prefix[e ? 1 : 0] : null,
            r = e || n && !("class" in n) || Kt.indexOf(t.tag) >= 0 ? ":nth-of-type(".concat(t.position, ")") : "";
        switch (t.tag) {
            case"STYLE":
            case"TITLE":
            case"LINK":
            case"META":
            case"*T":
            case"*D":
                return "";
            case"HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a, ">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/) : null;
                if (e) {
                    var u = "id" in n && n.id.length > 0 ? n.id : null;
                    i = (o = "BODY" !== t.tag && o ? o.filter((function (t) {
                        return !$t(t)
                    })) : []).length > 0 ? "".concat(a).concat(t.tag, ".").concat(o.join(".")).concat(r) : i, i = u && !1 === $t(u) ? "".concat(function (t) {
                        var e = t.lastIndexOf("*S"), n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                            a = Math.max(e, n);
                        if (a < 0) return "";
                        var r = t.indexOf(">", a) + 1;
                        return t.substr(0, r)
                    }(a), "#").concat(u) : i
                } else i = o ? "".concat(a).concat(t.tag, ".").concat(o.join(".")).concat(r) : i;
                return i
        }
    }

    function $t(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !0
        }
        return !1
    }

    var te = 1, ee = ["password", "hidden", "email", "tel"],
        ne = ["addr", "cell", "code", "dob", "email", "mob", "name", "phone", "secret", "social", "ssn", "tel", "zip", "pass", "card", "account", "cvv", "ccv"],
        ae = ["address", "password", "contact"], re = [], ie = [], oe = [], ue = {}, ce = [], se = [], le = null,
        de = null, fe = null;

    function he() {
        ve(), ge(document, !0)
    }

    function pe() {
        ve()
    }

    function ve() {
        te = 1, re = [], ie = [], oe = [], ue = {}, ce = [], se = [], le = new WeakMap, de = new WeakMap, fe = new WeakMap
    }

    function ge(t, e) {
        void 0 === e && (e = !1);
        try {
            e && i.unmask.forEach((function (t) {
                return t.indexOf("!") < 0 ? se.push(t) : ce.push(t.substr(1))
            })), "querySelectorAll" in t && (Vt(t, i.regions), function (t, e) {
                for (var n = function (e) {
                    var n = e[0], a = e[1], r = e[2], i = e[3];
                    if (r) switch (a) {
                        case 0:
                            t.querySelectorAll(r).forEach((function (t) {
                                _(n, Zt(t.innerText, i))
                            }));
                            break;
                        case 2:
                            t.querySelectorAll("[".concat(r, "]")).forEach((function (t) {
                                _(n, Zt(t.getAttribute(r), i, !1))
                            }));
                            break;
                        case 1:
                            _(n, Gt(r, "number"))
                    }
                }, a = 0, r = e; a < r.length; a++) n(r[a])
            }(t, i.metrics), function (t, e) {
                for (var n = function (e) {
                    var n = e[0], a = e[1], r = e[2];
                    if (r) switch (a) {
                        case 0:
                            t.querySelectorAll(r).forEach((function (t) {
                                Ua(n, Jt(t.innerText))
                            }));
                            break;
                        case 2:
                            t.querySelectorAll("[".concat(r, "]")).forEach((function (t) {
                                Ua(n, Jt(t.getAttribute(r)))
                            }));
                            break;
                        case 1:
                            Ua(n, Jt(Gt(r, "string")))
                    }
                }, a = 0, r = e; a < r.length; a++) n(r[a])
            }(t, i.dimensions), i.mask.forEach((function (e) {
                return t.querySelectorAll(e).forEach((function (t) {
                    return fe.set(t, 3)
                }))
            })), se.forEach((function (e) {
                return t.querySelectorAll(e).forEach((function (t) {
                    return fe.set(t, 0)
                }))
            })))
        } catch (t) {
            Wt(5, 1, t ? t.name : null)
        }
    }

    function me(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = le.get(t);
        return !n && e && (n = te++, le.set(t, n)), n || null
    }

    function be(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (de.set(n.contentDocument, n), e = !0)
            } catch (t) {
            }
        }
        return e
    }

    function ye(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && de.has(e) ? de.get(e) : null
    }

    function we(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function ke(t) {
        var e = t.parent && t.parent in ie ? ie[t.parent] : null, n = e ? e.selector : null, a = t.data,
            r = function (t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = ie[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t), i = {tag: a.tag, prefix: n, position: r, attributes: a.attributes};
        t.selector = [Qt(i), Qt(i, !0)], t.hash = t.selector.map((function (t) {
            return t ? l(t) : null
        })), t.hash.forEach((function (e) {
            return ue[e] = t.id
        }))
    }

    function Ee(t) {
        return t in re ? re[t] : null
    }

    function Se(t) {
        return t in ie ? ie[t] : null
    }

    function Me(t) {
        var e = me(t);
        return e in ie ? ie[e] : null
    }

    function Oe(t) {
        return me(t) in re
    }

    function Ne() {
        for (var t = [], e = 0, n = oe; e < n.length; e++) {
            var a = n[e];
            a in ie && t.push(ie[a])
        }
        return oe = [], t
    }

    function _e(t) {
        for (var e = null; null === e && t.previousSibling;) e = me(t.previousSibling), t = t.previousSibling;
        return e
    }

    function Te(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = oe.indexOf(t);
        r >= 0 && 1 === e && a ? (oe.splice(r, 1), oe.push(t)) : -1 === r && n && oe.push(t)
    }

    var xe = Object.freeze({
        __proto__: null, start: he, stop: pe, parse: ge, getId: me, add: function (t, e, n, a) {
            var r = me(t, !0), o = e ? me(e) : null, u = _e(t), c = i.content ? 1 : 2, s = null, l = Le(t) ? r : null;
            o >= 0 && ie[o] && ((s = ie[o]).children.push(r), l = null === l ? s.region : l, c = s.metadata.privacy), c = function (t, e, n, a) {
                var r = e.attributes, i = e.tag.toUpperCase();
                if (fe.has(t)) return fe.get(t);
                if ("*T" === i && n && n.data) {
                    var o = n.selector ? n.selector[0] : "";
                    a = "STYLE" === n.data.tag || "TITLE" === n.data.tag ? 0 : a;
                    for (var u = 0, c = ce; u < c.length; u++) {
                        var s = c[u];
                        if (o.indexOf(s) >= 0) {
                            a = 0;
                            break
                        }
                    }
                }
                if (null == r) return a;
                if ("class" in r && 1 === a) for (var l = 0, d = ae; l < d.length; l++) {
                    var f = d[l];
                    if (r.class.indexOf(f) >= 0) {
                        a = 2;
                        break
                    }
                }
                if ("INPUT" === i) if (0 === a) {
                    for (var h = "", p = 0, v = Object.keys(r); p < v.length; p++) {
                        h += r[v[p]].toLowerCase()
                    }
                    for (var g = 0, m = ne; g < m.length; g++) {
                        var b = m[g];
                        if (h.indexOf(b) >= 0) {
                            a = 2;
                            break
                        }
                    }
                } else 1 === a && (a = r && "submit" === r.type ? 0 : 2);
                "type" in r && ee.indexOf(r.type) >= 0 && (a = 2);
                "data-clarity-mask" in r && (a = 3);
                "data-clarity-unmask" in r && (a = 0);
                return a
            }(t, n, s, c), n.attributes && "data-clarity-region" in n.attributes && (Ae(t, n.attributes["data-clarity-region"]), l = r), re[r] = t, ie[r] = {
                id: r,
                parent: o,
                previous: u,
                children: [],
                data: n,
                selector: null,
                hash: null,
                region: l,
                metadata: {active: !0, suspend: !1, privacy: c, position: null, size: null}
            }, ke(ie[r]), function (t, e) {
                var n = t.data, a = "*T" === n.tag && n.value && n.value.length > 15,
                    r = 2 === t.metadata.privacy || 3 === t.metadata.privacy;
                a && r && e && null === e.metadata.size && (e.metadata.size = []);
                "IMG" === n.tag && 3 === t.metadata.privacy && (t.metadata.size = [])
            }(ie[r], s), Te(r, a)
        }, update: function (t, e, n, a) {
            var r = me(t), i = e ? me(e) : null, o = _e(t), u = !1, c = !1;
            if (r in ie) {
                var s = ie[r];
                if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                    u = !0;
                    var l = s.parent;
                    if (s.parent = i, null !== i && i >= 0) {
                        var d = null === o ? 0 : ie[i].children.indexOf(o) + 1;
                        ie[i].children.splice(d, 0, r), s.region = Le(t) ? r : ie[i].region
                    } else !function (t, e) {
                        if (t in ie) {
                            var n = ie[t];
                            n.metadata.active = !1, n.parent = null, Te(t, e)
                        }
                    }(r, a);
                    if (null !== l && l >= 0) {
                        var f = ie[l].children.indexOf(r);
                        f >= 0 && ie[l].children.splice(f, 1)
                    }
                    c = !0
                }
                for (var h in n) we(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                ke(s), Te(r, a, u, c)
            }
        }, sameorigin: be, iframe: ye, getNode: Ee, getValue: Se, get: Me, lookup: function (t) {
            return t in ue ? ue[t] : null
        }, has: Oe, updates: Ne
    }), De = [], Ie = null, Ce = {}, je = [], ze = !1, Re = null;

    function Ae(t, e) {
        !1 === Ie.has(t) && (Ie.set(t, e), (Re = null === Re && ze ? new IntersectionObserver(He, {threshold: [0, .2, .4, .6, .8, 1]}) : Re) && t && t.nodeType === Node.ELEMENT_NODE && Re.observe(t))
    }

    function Le(t) {
        return Ie && Ie.has(t)
    }

    function Ye() {
        for (var t = [], e = 0, n = je; e < n.length; e++) {
            var a = n[e], r = me(a.node);
            r in Ce || (r ? (a.data.id = r, Ce[r] = a.data, De.push(Xe(a.data))) : t.push(a))
        }
        je = t, De.length > 0 && _t(7)
    }

    function He(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e], r = a.target, i = a.boundingClientRect, o = a.intersectionRect, u = a.rootBounds;
            if (Ie.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? me(r) : null,
                    s = c in Ce ? Ce[c] : {id: c, name: Ie.get(r), interaction: 16, visibility: 0},
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                qe(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Re && Re.unobserve(r)
            }
        }
        De.length > 0 && _t(7)
    }

    function qe(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ce && r || !(e.id in Ce)) && (Ce[e.id] = e, De.push(Xe(e))) : je.push({
            node: t,
            data: e
        })
    }

    function Xe(t) {
        return {time: c(), data: {id: t.id, interaction: t.interaction, visibility: t.visibility, name: t.name}}
    }

    function We() {
        De = []
    }

    function Pe(t) {
        var e = {x: 0, y: 0};
        if (t && t.offsetParent) do {
            var n = t.offsetParent, a = null === n ? ye(t.ownerDocument) : null;
            e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
        } while (t);
        return e
    }

    var Ue = ["input", "textarea", "radio", "button", "canvas"], Be = [];

    function Fe(t) {
        wr(t, "click", Ve.bind(this, 9, t), !0)
    }

    function Ve(t, e, n) {
        var a = ye(e), r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Pe(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var s = la(n), l = function (t) {
            for (; t && t !== document;) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                    var e = t;
                    if ("A" === e.tagName) return e
                }
                t = t.parentNode
            }
            return null
        }(s), d = function (t) {
            var e = null, n = document.documentElement;
            if ("function" == typeof t.getBoundingClientRect) {
                var a = t.getBoundingClientRect();
                a && a.width > 0 && a.height > 0 && (e = {
                    x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                    y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                    w: Math.floor(a.width),
                    h: Math.floor(a.height)
                })
            }
            return e
        }(s);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Be.push({
            time: c(),
            event: t,
            data: {
                target: s,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Je(s),
                context: Ze(l),
                text: Ge(s),
                link: l ? l.href : null,
                hash: null
            }
        }), vt(fa.bind(this, t)))
    }

    function Ge(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function Je(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Ue.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Ze(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case"_blank":
                return 1;
            case"_parent":
                return 2;
            case"_top":
                return 3
        }
        return 0
    }

    function Ke() {
        Be = []
    }

    var Qe = [];

    function $e(t, e) {
        Qe.push({time: c(), event: 38, data: {target: la(e), action: t}}), vt(fa.bind(this, 38))
    }

    function tn() {
        Qe = []
    }

    var en = null, nn = [];

    function an(t) {
        var e = la(t), n = Me(e);
        if (e && e.type && n) {
            var a = void 0;
            switch (e.type) {
                case"radio":
                case"checkbox":
                    a = e.checked ? "true" : "false";
                    break;
                case"range":
                    a = e.value;
                    break;
                default:
                    a = it(e.value, "input", n.metadata.privacy)
            }
            var r = {target: e, value: a};
            nn.length > 0 && nn[nn.length - 1].data.target === r.target && nn.pop(), nn.push({
                time: c(),
                event: 27,
                data: r
            }), x(en), en = T(rn, 500, 27)
        }
    }

    function rn(t) {
        vt(fa.bind(this, t))
    }

    function on() {
        nn = []
    }

    var un, cn = [], sn = null;

    function ln(t, e, n) {
        var a = ye(e), r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Pe(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && fn({time: c(), event: t, data: {target: la(n), x: i, y: o}})
    }

    function dn(t, e, n) {
        var a = ye(e), r = a ? a.contentDocument.documentElement : document.documentElement, i = n.changedTouches,
            o = c();
        if (i) for (var u = 0; u < i.length; u++) {
            var s = i[u], l = "clientX" in s ? Math.round(s.clientX + r.scrollLeft) : null,
                d = "clientY" in s ? Math.round(s.clientY + r.scrollTop) : null;
            l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && fn({
                time: o,
                event: t,
                data: {target: la(n), x: l, y: d}
            })
        }
    }

    function fn(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = cn.length, n = e > 1 ? cn[e - 2] : null;
                n && function (t, e) {
                    var n = t.data.x - e.data.x, a = t.data.y - e.data.y, r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time, o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && cn.pop(), cn.push(t), x(sn), sn = T(hn, 500, t.event);
                break;
            default:
                cn.push(t), hn(t.event)
        }
    }

    function hn(t) {
        vt(fa.bind(this, t))
    }

    function pn() {
        cn = []
    }

    function vn() {
        var t = document.documentElement;
        un = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, fa(11)
    }

    function gn() {
        un = null
    }

    var mn = [], bn = null;

    function yn(t) {
        void 0 === t && (t = null);
        var e = window, n = document.documentElement, a = t ? la(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = ye(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {time: c(), event: 10, data: {target: a, x: i, y: o}};
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var s = mn.length, l = s > 1 ? mn[s - 2] : null;
            l && function (t, e) {
                var n = t.data.x - e.data.x, a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(l, u) && mn.pop(), mn.push(u), x(bn), bn = T(wn, 500, 10)
        }
    }

    function wn(t) {
        vt(fa.bind(this, t))
    }

    var kn = null, En = null, Sn = null;

    function Mn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = kn.start ? kn.start : null;
            null !== En && null !== kn.start && n !== e.anchorNode && (x(Sn), On(21)), kn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, En = e, x(Sn), Sn = T(On, 500, 21)
        }
    }

    function On(t) {
        vt(fa.bind(this, t))
    }

    function Nn() {
        En = null, kn = {start: 0, startOffset: 0, end: 0, endOffset: 0}
    }

    var _n, Tn, xn = [];

    function Dn(t) {
        xn.push({time: c(), event: 39, data: {target: la(t)}}), vt(fa.bind(this, 39))
    }

    function In() {
        xn = []
    }

    function Cn(t) {
        _n = {name: t.type}, fa(26), Gr()
    }

    function jn() {
        _n = null
    }

    function zn() {
        Tn = {visible: "visibilityState" in document ? document.visibilityState : "default"}, fa(28)
    }

    function Rn() {
        Tn = null
    }

    function An(t) {
        !function (t) {
            var e = ye(t);
            wr(e ? e.contentWindow : t === document ? window : t, "scroll", yn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Fe(t), function (t) {
            wr(t, "cut", $e.bind(this, 0), !0), wr(t, "copy", $e.bind(this, 1), !0), wr(t, "paste", $e.bind(this, 2), !0)
        }(t), function (t) {
            wr(t, "mousedown", ln.bind(this, 13, t), !0), wr(t, "mouseup", ln.bind(this, 14, t), !0), wr(t, "mousemove", ln.bind(this, 12, t), !0), wr(t, "mousewheel", ln.bind(this, 15, t), !0), wr(t, "dblclick", ln.bind(this, 16, t), !0), wr(t, "touchstart", dn.bind(this, 17, t), !0), wr(t, "touchend", dn.bind(this, 18, t), !0), wr(t, "touchmove", dn.bind(this, 19, t), !0), wr(t, "touchcancel", dn.bind(this, 20, t), !0)
        }(t), function (t) {
            wr(t, "input", an, !0)
        }(t), function (t) {
            wr(t, "selectstart", Mn.bind(this, t), !0), wr(t, "selectionchange", Mn.bind(this, t), !0)
        }(t), function (t) {
            wr(t, "submit", Dn, !0)
        }(t))
    }

    var Ln = Object.freeze({
        __proto__: null, start: function () {
            ha = [], va(), Ke(), tn(), pn(), on(), wr(window, "resize", vn), vn(), wr(document, "visibilitychange", zn), zn(), mn = [], yn(), Nn(), In(), wr(window, "pagehide", Cn)
        }, stop: function () {
            ha = [], va(), Ke(), tn(), x(sn), cn.length > 0 && hn(cn[cn.length - 1].event), x(en), on(), gn(), Rn(), x(bn), mn = [], Nn(), x(Sn), In(), jn()
        }, observe: An
    }), Yn = /[^0-9\.]/g;

    function Hn(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e], r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case"article":
                case"recipe":
                    Ua(5, t[a]), Ua(8, t.creator), Ua(18, t.headline);
                    break;
                case"product":
                    Ua(5, t[a]), Ua(10, t.name), Ua(12, t.sku), t.brand && Ua(6, t.brand.name);
                    break;
                case"aggregaterating":
                    t.ratingValue && (_(11, qn(t.ratingValue, 100)), _(18, qn(t.bestRating)), _(19, qn(t.worstRating))), _(12, qn(t.ratingCount)), _(17, qn(t.reviewCount));
                    break;
                case"person":
                    Ua(8, t.name);
                    break;
                case"offer":
                    Ua(7, t.availability), Ua(14, t.itemCondition), Ua(13, t.priceCurrency), Ua(12, t.sku), _(13, qn(t.price));
                    break;
                case"brand":
                    Ua(6, t.name)
            }
            null !== r && "object" == typeof r && Hn(r)
        }
    }

    function qn(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case"number":
                return Math.round(t * e);
            case"string":
                return Math.round(parseFloat(t.replace(Yn, "")) * e)
        }
        return null
    }

    var Xn = ["title", "alt", "onload", "onfocus", "onerror"], Wn = /[\r\n]+/g;

    function Pn(t, e) {
        var n = null;
        if (2 === e && !1 === Oe(t)) return n;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var a = !1 === Oe(t) ? "add" : "update", r = t.parentElement ? t.parentElement : null,
            i = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                r = i && t.parentNode ? ye(t.parentNode) : r;
                var o = t, u = {
                    tag: (i ? "iframe:" : "") + "*D",
                    attributes: {name: o.name, publicId: o.publicId, systemId: o.systemId}
                };
                xe[a](t, r, u, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && ge(document), Un(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var c = t;
                if (c.host) if (ge(c), "function" === typeof c.constructor && c.constructor.toString().indexOf("[native code]") >= 0) {
                    Un(c);
                    for (var s = "", l = 0, d = ("adoptedStyleSheets" in c ? c.adoptedStyleSheets : []); l < d.length; l++) {
                        s += Fn(d[l])
                    }
                    var f = {tag: "*S", attributes: {style: s}};
                    xe[a](t, c.host, f, e)
                } else xe[a](t, c.host, {tag: "*P", attributes: {}}, e);
                break;
            case Node.TEXT_NODE:
                if (r = r || t.parentNode, "update" === a || r && Oe(r) && "STYLE" !== r.tagName) {
                    var h = {tag: "*T", value: t.nodeValue};
                    xe[a](t, r, h, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var p = t, v = p.tagName, g = function (t) {
                    var e = {}, n = t.attributes;
                    if (n && n.length > 0) for (var a = 0; a < n.length; a++) {
                        var r = n[a].name;
                        Xn.indexOf(r) < 0 && (e[r] = n[a].value)
                    }
                    "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                    return e
                }(p);
                switch (r = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === p.namespaceURI && (v = "svg:" + v), v) {
                    case"HTML":
                        r = i && r ? ye(r) : null;
                        var m = {tag: (i ? "iframe:" : "") + v, attributes: g};
                        xe[a](t, r, m, e);
                        break;
                    case"SCRIPT":
                        if ("type" in g && "application/ld+json" === g.type) try {
                            Hn(JSON.parse(p.text.replace(Wn, "")))
                        } catch (t) {
                        }
                        break;
                    case"NOSCRIPT":
                        break;
                    case"META":
                        var b = "property" in g ? "property" : "name" in g ? "name" : null;
                        if (b && "content" in g) {
                            var y = g.content;
                            switch (g[b]) {
                                case"og:title":
                                    Ua(20, y);
                                    break;
                                case"og:type":
                                    Ua(19, y);
                                    break;
                                case"generator":
                                    Ua(21, y)
                            }
                        }
                        break;
                    case"HEAD":
                        var w = {tag: v, attributes: g};
                        location && (w.attributes["*B"] = location.protocol + "//" + location.hostname), xe[a](t, r, w, e);
                        break;
                    case"STYLE":
                        var k = {tag: v, attributes: g, value: Bn(p)};
                        xe[a](t, r, k, e);
                        break;
                    case"IFRAME":
                        var E = t, S = {tag: v, attributes: g};
                        be(E) && (!function (t) {
                            !1 === Oe(t) && wr(t, "load", sa.bind(this, t, "childList"), !0)
                        }(E), S.attributes["*O"] = "true", E.contentDocument && E.contentWindow && "loading" !== E.contentDocument.readyState && (n = E.contentDocument)), xe[a](t, r, S, e);
                        break;
                    default:
                        var M = {tag: v, attributes: g};
                        p.shadowRoot && (n = p.shadowRoot), xe[a](t, r, M, e)
                }
        }
        return n
    }

    function Un(t) {
        Oe(t) || (!function (t) {
            try {
                var e = o("MutationObserver"), n = e in window ? new window[e](br(aa)) : null;
                n && (n.observe(t, {attributes: !0, childList: !0, characterData: !0, subtree: !0}), Gn.push(n))
            } catch (t) {
                Wt(2, 0, t ? t.name : null)
            }
        }(t), An(t))
    }

    function Bn(t) {
        var e = t.textContent ? t.textContent.trim() : "", n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Fn(t.sheet)), e
    }

    function Fn(t) {
        var e = "", n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Wt(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function Vn(t, e, n) {
        return Z(this, void 0, void 0, (function () {
            var a, r, i, o, u;
            return K(this, (function (c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = mt(e)) ? [3, 3] : [4, wt(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Pn(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }

    var Gn = [], Jn = [], Zn = null, Kn = null, Qn = null, $n = [], ta = null, ea = null, na = {};

    function aa(t) {
        var e = c();
        L(6, e), Jn.push({time: e, mutations: t}), vt(ra, 1).then((function () {
            br(Nt)(), br(Ye)()
        }))
    }

    function ra() {
        return Z(this, void 0, void 0, (function () {
            var t, e, n, a, r, i, o, u, s;
            return K(this, (function (l) {
                switch (l.label) {
                    case 0:
                        bt(t = {id: tr(), cost: 3}), l.label = 1;
                    case 1:
                        if (!(Jn.length > 0)) return [3, 8];
                        e = Jn.shift(), n = 0, a = e.mutations, l.label = 2;
                    case 2:
                        return n < a.length ? (r = a[n], 0 !== (i = mt(t)) ? [3, 4] : [4, wt(t)]) : [3, 6];
                    case 3:
                        i = l.sent(), l.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        switch (o = r.target, u = function (t, e) {
                            var n = t.target ? Me(t.target.parentNode) : null;
                            if (n && "HTML" !== n.data.tag) {
                                var a = c() > ea, r = Me(t.target),
                                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                                    o = [n.selector ? n.selector.join() : "", i, t.attributeName, ia(t.addedNodes), ia(t.removedNodes)].join();
                                na[o] = o in na ? na[o] : [0];
                                var u = na[o];
                                if (!1 === a && u[0] >= 10 && oa(u[1], 2, e), u[0] = a ? u[0] + 1 : 1, 10 === u[0]) return u[1] = t.removedNodes, "suspend";
                                if (u[0] > 10) return ""
                            }
                            return t.type
                        }(r, t), u && o && o.ownerDocument && ge(o.ownerDocument), u && o && o.nodeType == Node.DOCUMENT_FRAGMENT_NODE && o.host && ge(o), u) {
                            case"attributes":
                                Pn(o, 3);
                                break;
                            case"characterData":
                                Pn(o, 4);
                                break;
                            case"childList":
                                oa(r.addedNodes, 1, t), oa(r.removedNodes, 2, t);
                                break;
                            case"suspend":
                                (s = Me(o)) && (s.metadata.suspend = !0)
                        }
                        l.label = 5;
                    case 5:
                        return n++, [3, 2];
                    case 6:
                        return [4, _t(6, t, e.time)];
                    case 7:
                        return l.sent(), [3, 1];
                    case 8:
                        return yt(t), [2]
                }
            }))
        }))
    }

    function ia(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function oa(t, e, n) {
        return Z(this, void 0, void 0, (function () {
            var a, r, i;
            return K(this, (function (o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (Vn(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = mt(n)) ? [3, 4] : [4, wt(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        Pn(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function ua(t) {
        return $n.indexOf(t) < 0 && $n.push(t), ta && x(ta), ta = T(ca, 33), t
    }

    function ca() {
        for (var t = 0, e = $n; t < e.length; t++) {
            var n = e[t];
            if (n) {
                var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                if (a && Oe(n)) continue;
                sa(n, a ? "childList" : "characterData")
            }
        }
        $n = []
    }

    function sa(t, e) {
        br(aa)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function la(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null, n = e && e.length > 0 ? e[0] : t.target;
        return ea = c() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function da(t, e) {
        var n = {id: 0, hash: null, privacy: 2, node: t};
        if (t) {
            var a = Me(t);
            null !== a && (n.id = a.id, n.hash = a.hash, n.privacy = a.metadata.privacy, a.region && function (t, e) {
                var n = Ee(t), a = t in Ce ? Ce[t] : {id: t, visibility: 0, interaction: 16, name: Ie.get(n)}, r = 16;
                switch (e) {
                    case 9:
                        r = 20;
                        break;
                    case 27:
                        r = 30
                }
                qe(n, a, r, a.visibility)
            }(a.region, e))
        }
        return n
    }

    function fa(t) {
        return Z(this, void 0, void 0, (function () {
            var e, n, a, r, i, o, u, s, l, d, f, h, p, g, b, y, w, k, E, S, M, O, N, _, T, x, D, I, C;
            return K(this, (function (j) {
                switch (e = c(), n = [e, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (a = 0, r = cn; a < r.length; a++) I = r[a], (i = da(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(i.id), n.push(I.data.x), n.push(I.data.y), Ta(n), v(I.event, I.data.x, I.data.y));
                        pn();
                        break;
                    case 9:
                        for (o = 0, u = Be; o < u.length; o++) I = u[o], s = da(I.data.target, I.event), n = [I.time, I.event], l = s.hash.join("."), n.push(s.id), n.push(I.data.x), n.push(I.data.y), n.push(I.data.eX), n.push(I.data.eY), n.push(I.data.button), n.push(I.data.reaction), n.push(I.data.context), n.push(it(I.data.text, "click", s.privacy)), n.push(I.data.link), n.push(l), Ta(n), ga(I.time, I.event, l, I.data.x, I.data.y, I.data.reaction, I.data.context);
                        Ke();
                        break;
                    case 38:
                        for (d = 0, f = Qe; d < f.length; d++) I = f[d], n = [I.time, I.event], (T = da(I.data.target, I.event)).id > 0 && (n.push(T.id), n.push(I.data.action), Ta(n));
                        tn();
                        break;
                    case 11:
                        h = un, n.push(h.width), n.push(h.height), v(t, h.width, h.height), gn(), Ta(n);
                        break;
                    case 26:
                        p = _n, n.push(p.name), jn(), Ta(n);
                        break;
                    case 27:
                        for (g = 0, b = nn; g < b.length; g++) I = b[g], y = da(I.data.target, I.event), (n = [I.time, I.event]).push(y.id), n.push(I.data.value), Ta(n);
                        on();
                        break;
                    case 21:
                        (w = kn) && (k = da(w.start, t), E = da(w.end, t), n.push(k.id), n.push(w.startOffset), n.push(E.id), n.push(w.endOffset), Nn(), Ta(n));
                        break;
                    case 10:
                        for (S = 0, M = mn; S < M.length; S++) I = M[S], (O = da(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(O.id), n.push(I.data.x), n.push(I.data.y), Ta(n), v(I.event, I.data.x, I.data.y));
                        mn = [];
                        break;
                    case 39:
                        for (N = 0, _ = xn; N < _.length; N++) I = _[N], n = [I.time, I.event], (T = da(I.data.target, I.event)).id > 0 && (n.push(T.id), Ta(n));
                        In();
                        break;
                    case 22:
                        for (x = 0, D = pa; x < D.length; x++) I = D[x], (n = [I.time, I.event]).push(I.data.type), n.push(I.data.hash), n.push(I.data.x), n.push(I.data.y), n.push(I.data.reaction), n.push(I.data.context), Ta(n, !1);
                        va();
                        break;
                    case 28:
                        C = Tn, n.push(C.visible), Ta(n), m(e, C.visible), Rn()
                }
                return [2]
            }))
        }))
    }

    var ha = [], pa = [];

    function va() {
        pa = []
    }

    function ga(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), ha.push({
            time: t,
            event: 22,
            data: {type: e, hash: n, x: a, y: r, reaction: i, context: o}
        }), v(e, a, r)
    }

    var ma, ba, ya, wa, ka, Ea, Sa = 0, Ma = 0, Oa = null, Na = 0;

    function _a() {
        wa = !0, Sa = 0, Ma = 0, Na = 0, ma = [], ba = [], ya = {}, ka = null
    }

    function Ta(t, e) {
        if (void 0 === e && (e = !0), wa) {
            var n = c(), a = t.length > 1 ? t[1] : null, r = JSON.stringify(t);
            switch (a) {
                case 5:
                    Sa += r.length;
                case 37:
                case 6:
                    Ma += r.length, ma.push(r);
                    break;
                default:
                    ba.push(r)
            }
            O(25);
            var o = function () {
                var t = !1 === i.lean && Sa > 0 ? 100 : fr.sequence * i.delay;
                return "string" == typeof i.upload ? Math.max(Math.min(t, 3e4), 100) : i.delay
            }();
            n - Na > 2 * o && (x(Oa), Oa = null), e && null === Oa && (25 !== a && j(), Oa = T(Da, o), Na = n, Aa(Ma))
        }
    }

    function xa() {
        x(Oa), Da(!0), Sa = 0, Ma = 0, Na = 0, ma = [], ba = [], ya = {}, ka = null, wa = !1
    }

    function Da(t) {
        return void 0 === t && (t = !1), Z(this, void 0, void 0, (function () {
            var e, n, a, r, o, u, c, s;
            return K(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return Oa = null, (e = !1 === i.lean && Ma > 0 && (Ma < 1048576 || fr.sequence > 0)) && _(1, 1), Ye(), function () {
                            var t = [];
                            pa = [];
                            for (var e = fr.start + fr.duration, n = Math.max(e - 2e3, 0), a = 0, r = ha; a < r.length; a++) {
                                var i = r[a];
                                i.time >= n && (i.time <= e && pa.push(i), t.push(i))
                            }
                            ha = t, fa(22)
                        }(), rt(), n = !0 === t, a = JSON.stringify(vr(n)), r = "[".concat(ba.join(), "]"), o = e ? "[".concat(ma.join(), "]") : "", u = function (t) {
                            return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                        }({e: a, a: r, p: o}), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, $(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return N(2, (c = s) ? c.length : u.length), Ia(u, c, fr.sequence, n), ba = [], e && (ma = [], Ma = 0, Sa = 0), [2]
                }
            }))
        }))
    }

    function Ia(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof i.upload) {
            var r = i.upload, o = !1;
            if (a && "sendBeacon" in navigator) try {
                (o = navigator.sendBeacon.bind(navigator)(r, t)) && ja(n)
            } catch (t) {
            }
            if (!1 === o) {
                n in ya ? ya[n].attempts++ : ya[n] = {data: t, attempts: 1};
                var u = new XMLHttpRequest;
                u.open("POST", r), null !== n && (u.onreadystatechange = function () {
                    br(Ca)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (i.upload) {
            (0, i.upload)(t), ja(n)
        }
    }

    function Ca(t, e) {
        var n = ya[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? La(6) : (0 === t.status && (i.upload = i.fallback ? i.fallback : i.upload), Ia(n.data, null, e)) : (ka = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && za(2), 200 === t.status && t.responseText && function (t) {
            switch (t && t.length > 0 ? t.split(" ")[0] : "") {
                case"END":
                    La(6);
                    break;
                case"UPGRADE":
                    W("Auto")
            }
        }(t.responseText), 0 === t.status && (Ia(n.data, null, e, !0), La(3)), t.status >= 200 && t.status <= 208 && ja(e), delete ya[e]))
    }

    function ja(t) {
        1 === t && ar()
    }

    function za(t) {
        var e = [c(), t];
        switch (t) {
            case 4:
                var n = d;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), Ta(e, !1)), p();
                break;
            case 25:
                e.push(E.gap), Ta(e);
                break;
            case 35:
                e.push(Ea.check), Ta(e, !1);
                break;
            case 3:
                e.push(X.key), Ta(e);
                break;
            case 2:
                e.push(ka.sequence), e.push(ka.attempts), e.push(ka.status), Ta(e, !1);
                break;
            case 24:
                e.push(w.key), e.push(w.value), Ta(e);
                break;
            case 34:
                var a = Object.keys(U);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(U[o])
                    }
                    J(), Ta(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(M);
                if (u.length > 0) {
                    for (var s = 0, l = u; s < l.length; s++) {
                        var f = l[s], h = parseInt(f, 10);
                        e.push(h), e.push(Math.round(M[f]))
                    }
                    M = {}, Ta(e, !1)
                }
                break;
            case 1:
                var v = Object.keys(Xa);
                if (v.length > 0) {
                    for (var g = 0, m = v; g < m.length; g++) {
                        var b = m[g];
                        h = parseInt(b, 10);
                        e.push(h), e.push(Xa[b])
                    }
                    Fa(), Ta(e, !1)
                }
                break;
            case 36:
                var y = Object.keys(A);
                if (y.length > 0) {
                    for (var k = 0, S = y; k < S.length; k++) {
                        var O = S[k];
                        h = parseInt(O, 10);
                        e.push(h), e.push([].concat.apply([], A[O]))
                    }
                    H(), Ta(e, !1)
                }
        }
    }

    function Ra() {
        Ea = {check: 0}
    }

    function Aa(t) {
        if (0 === Ea.check) {
            var e = Ea.check;
            e = fr.sequence >= 128 ? 1 : e, e = c() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Ea.check && La(e)
        }
    }

    function La(t) {
        Ea.check = t, nr(), Gr()
    }

    function Ya() {
        0 !== Ea.check && za(35)
    }

    function Ha() {
        Ea = null
    }

    var qa = null, Xa = null;

    function Wa() {
        qa = {}, Xa = {}
    }

    function Pa() {
        qa = {}, Xa = {}
    }

    function Ua(t, e) {
        e && (e = "".concat(e), t in qa || (qa[t] = []), qa[t].indexOf(e) < 0 && (qa[t].push(e), t in Xa || (Xa[t] = []), Xa[t].push(e), qa[t].length > 128 && La(5)))
    }

    function Ba() {
        za(1)
    }

    function Fa() {
        Xa = {}
    }

    var Va = null, Ga = null, Ja = null;

    function Za() {
        Ga = null, Ja = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "", n = function () {
                var t = {session: or(), ts: Math.round(Date.now()), count: 1, upgrade: null, upload: ""}, e = sr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - ur(n[1]) < 18e5 && (t.session = n[0], t.count = ur(n[2]) + 1, t.upgrade = ur(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(), a = cr();
        Va = {
            projectId: i.projectId || l(location.host),
            userId: a.id,
            sessionId: n.session,
            pageNum: n.count
        }, i.lean = i.track && null !== n.upgrade ? 0 === n.upgrade : i.lean, i.upload = i.track && "string" == typeof i.upload && n.upload && n.upload.length > "https://".length ? n.upload : i.upload, Ua(0, t), Ua(3, e), Ua(1, location.href), Ua(2, document.referrer), Ua(15, function () {
            var t = or();
            if (i.track && rr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), Ua(16, document.documentElement.lang), Ua(17, document.dir), navigator && (Ua(9, navigator.userLanguage || navigator.language), _(26, navigator.webdriver ? 1 : 0), Ka()), _(0, n.ts), _(1, 0), screen && (_(14, Math.round(screen.width)), _(15, Math.round(screen.height)), _(16, Math.round(screen.colorDepth)));
        for (var r = 0, o = i.cookies; r < o.length; r++) {
            var u = o[r], c = sr(u);
            c && B(u, c)
        }
        ir(a)
    }

    function Ka() {
        navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function (t) {
            var e;
            Ua(22, t.platform), Ua(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function (t) {
                Ua(24, t.name + "~" + t.version)
            })), Ua(25, t.model), _(27, t.mobile ? 1 : 0)
        }))
    }

    function Qa() {
        Ga = null, Ja = null, Va = null
    }

    function $a(t, e) {
        void 0 === e && (e = !0), Va && !1 === e ? t(Va, !i.lean) : Ga = t
    }

    function tr() {
        return Va ? [Va.userId, Va.sessionId, Va.pageNum].join(".") : ""
    }

    function er() {
        Cr() && (i.track = !0, ir(cr(), 1))
    }

    function nr() {
        lr("_clsk", "", 0)
    }

    function ar() {
        var t = Math.round(Date.now()), e = i.lean ? 0 : 1,
            n = i.upload && "string" == typeof i.upload ? i.upload.replace("https://", "") : "";
        e && Ga && Ga(Va, !i.lean), lr("_clsk", [Va.sessionId, t, Va.pageNum, e, n].join("|"), 1)
    }

    function rr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function ir(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) && lr("_clck", [Va.userId, 1, n.toString(36), e].join("|"), 365)
    }

    function or() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function ur(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function cr() {
        var t = {id: or(), expiry: null, consent: 0}, e = sr("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, o = document.cookie.split(";"); r < o.length; r++) {
                a += "_clck" === o[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 2 && (t.expiry = ur(n[2], 36)), n.length > 3 && 1 === ur(n[3]) && (t.consent = 1), i.track = i.track || 1 === t.consent, t.id = i.track ? n[0] : t.id
        }
        return t
    }

    function sr(t) {
        if (rr(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e) for (var n = 0; n < e.length; n++) {
                var a = e[n].split("=");
                if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
            }
        }
        return null
    }

    function lr(t, e, n) {
        if (i.track && (navigator && navigator.cookieEnabled || rr(document, "cookie"))) {
            var a = new Date;
            a.setDate(a.getDate() + n);
            var r = a ? "expires=" + a.toUTCString() : "",
                o = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
            try {
                if (null === Ja) {
                    for (var u = location.hostname ? location.hostname.split(".") : [], c = u.length - 1; c >= 0; c--) if (Ja = ".".concat(u[c]).concat(Ja || ""), c < u.length - 1 && (document.cookie = "".concat(o).concat(";").concat("domain=").concat(Ja), sr(t) === e)) return;
                    Ja = ""
                }
            } catch (t) {
                Ja = ""
            }
            document.cookie = Ja ? "".concat(o).concat(";").concat("domain=").concat(Ja) : o
        }
    }

    var dr, fr = null;

    function hr() {
        var t = Va;
        fr = {
            version: s,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function pr() {
        fr = null
    }

    function vr(t) {
        return fr.start = fr.start + fr.duration, fr.duration = c() - fr.start, fr.sequence++, fr.upload = t && "sendBeacon" in navigator ? 1 : 0, fr.end = t ? 1 : 0, [fr.version, fr.sequence, fr.start, fr.duration, fr.projectId, fr.userId, fr.sessionId, fr.pageNum, fr.upload, fr.end]
    }

    function gr() {
        dr = []
    }

    function mr(t) {
        if (dr && -1 === dr.indexOf(t.message)) {
            var e = i.report;
            if (e && e.length > 0) {
                var n = {v: fr.version, p: fr.projectId, u: fr.userId, s: fr.sessionId, n: fr.pageNum};
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e), a.send(JSON.stringify(n)), dr.push(t.message)
            }
        }
        return t
    }

    function br(t) {
        return function () {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw mr(t)
            }
            var n = performance.now() - e;
            N(4, n), n > 30 && (O(7), _(6, n))
        }
    }

    var yr = [];

    function wr(t, e, n, a) {
        void 0 === a && (a = !1), n = br(n);
        try {
            t[o("addEventListener")](e, n, a), yr.push({event: e, target: t, listener: n, capture: a})
        } catch (t) {
        }
    }

    function kr() {
        for (var t = 0, e = yr; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[o("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {
            }
        }
        yr = []
    }

    var Er = null, Sr = null, Mr = null, Or = 0;

    function Nr() {
        return !(Or++ > 20) || (Wt(4, 0), !1)
    }

    function _r() {
        Or = 0, Mr !== Tr() && (Gr(), window.setTimeout(Vr, 250))
    }

    function Tr() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }

    var xr = !1;

    function Dr() {
        xr = !0, u = performance.now(), pt(), kr(), gr(), Mr = Tr(), Or = 0, wr(window, "popstate", _r), null === Er && (Er = history.pushState), history.pushState = function () {
            Nr() && (Er.apply(this, arguments), _r())
        }, null === Sr && (Sr = history.replaceState), history.replaceState = function () {
            Nr() && (Sr.apply(this, arguments), _r())
        }
    }

    function Ir() {
        null !== Er && (history.pushState = Er, Er = null), null !== Sr && (history.replaceState = Sr, Sr = null), Mr = null, Or = 0, gr(), kr(), pt(), u = 0, xr = !1
    }

    function Cr() {
        return xr
    }

    function jr(t) {
        if (null === t || xr) return !1;
        for (var e in t) e in i && (i[e] = t[e]);
        return !0
    }

    function zr() {
        Vr(), k("clarity", "restart")
    }

    var Rr = Object.freeze({
        __proto__: null, start: function () {
            wr(window, "error", Yt), Lt = {}, Xt = {}
        }, stop: function () {
            Xt = {}
        }
    });

    function Ar() {
        return Z(this, void 0, void 0, (function () {
            var t, e;
            return K(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return t = c(), bt(e = {id: tr(), cost: 3}), [4, Vn(document, e, 0)];
                    case 1:
                        return n.sent(), [4, _t(5, e, t)];
                    case 2:
                        return n.sent(), yt(e), [2]
                }
            }))
        }))
    }

    var Lr = Object.freeze({
        __proto__: null, start: function () {
            Ot(), Nt(), We(), Re = null, Ie = new WeakMap, Ce = {}, je = [], ze = !!window.IntersectionObserver, he(), function () {
                Gn = [], $n = [], ta = null, ea = 0, na = {}, null === Zn && (Zn = CSSStyleSheet.prototype.insertRule), null === Kn && (Kn = CSSStyleSheet.prototype.deleteRule), null === Qn && (Qn = Element.prototype.attachShadow), CSSStyleSheet.prototype.insertRule = function () {
                    return ua(this.ownerNode), Zn.apply(this, arguments)
                }, CSSStyleSheet.prototype.deleteRule = function () {
                    return ua(this.ownerNode), Kn.apply(this, arguments)
                };
                try {
                    Element.prototype.attachShadow = function () {
                        return ua(Qn.apply(this, arguments))
                    }
                } catch (t) {
                    Qn = null
                }
            }(), vt(Ar, 1).then((function () {
                br(Nt)(), br(Ye)()
            })), zt(), Ct = null, It = !!window.ResizeObserver
        }, stop: function () {
            We(), Ie = null, Ce = {}, je = [], Re && (Re.disconnect(), Re = null), ze = !1, pe(), function () {
                for (var t = 0, e = Gn; t < e.length; t++) {
                    var n = e[t];
                    n && n.disconnect()
                }
                Gn = [], null !== Zn && (CSSStyleSheet.prototype.insertRule = Zn, Zn = null), null !== Kn && (CSSStyleSheet.prototype.deleteRule = Kn, Kn = null), null != Qn && (Element.prototype.attachShadow = Qn, Qn = null), na = {}, Jn = [], $n = [], ea = 0, ta = null
            }(), Rt(), Ot()
        }
    });
    var Yr, Hr = null;

    function qr() {
        Hr = null
    }

    function Xr(t) {
        Hr = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
        }, function (t) {
            Z(this, void 0, void 0, (function () {
                var e, n;
                return K(this, (function (a) {
                    return e = c(), n = [e, t], 29 === t && (n.push(Hr.fetchStart), n.push(Hr.connectStart), n.push(Hr.connectEnd), n.push(Hr.requestStart), n.push(Hr.responseStart), n.push(Hr.responseEnd), n.push(Hr.domInteractive), n.push(Hr.domComplete), n.push(Hr.loadEventStart), n.push(Hr.loadEventEnd), n.push(Hr.redirectCount), n.push(Hr.size), n.push(Hr.type), n.push(Hr.protocol), n.push(Hr.encodedSize), n.push(Hr.decodedSize), qr(), Ta(n, !1)), [2]
                }))
            }))
        }(29)
    }

    var Wr = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function Pr() {
        try {
            Yr && Yr.disconnect(), Yr = new PerformanceObserver(br(Ur));
            for (var t = 0, e = Wr; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && N(9, 0), Yr.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Wt(3, 1)
        }
    }

    function Ur(t) {
        !function (t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case"navigation":
                        Xr(a);
                        break;
                    case"resource":
                        Ua(4, Br(a.name));
                        break;
                    case"longtask":
                        O(7);
                        break;
                    case"first-input":
                        e && _(10, a.processingStart - a.startTime);
                        break;
                    case"layout-shift":
                        e && !a.hadRecentInput && N(9, 1e3 * a.value);
                        break;
                    case"largest-contentful-paint":
                        e && _(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function Br(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }

    var Fr = [Rr, Lr, Ln, Object.freeze({
        __proto__: null, start: function () {
            qr(), function () {
                window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? wr(window, "load", T.bind(this, Pr, 0)) : Pr() : Wt(3, 0)
            }()
        }, stop: function () {
            Yr && Yr.disconnect(), Yr = null, qr()
        }
    })];

    function Vr(t) {
        void 0 === t && (t = null), function () {
            try {
                return !1 === xr && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
            } catch (t) {
                return !1
            }
        }() && (jr(t), Dr(), nt(), Fr.forEach((function (t) {
            return br(t.start)()
        })))
    }

    function Gr() {
        Cr() && (Fr.slice().reverse().forEach((function (t) {
            return br(t.stop)()
        })), at(), Ir())
    }

    var Jr = Object.freeze({
        __proto__: null, version: s, start: Vr, pause: function () {
            Cr() && (k("clarity", "pause"), null === ft && (ft = new Promise((function (t) {
                ht = t
            }))))
        }, resume: function () {
            Cr() && (ft && (ht(), ft = null, null === dt && gt()), k("clarity", "resume"))
        }, stop: Gr, consent: er, event: k, identify: F, set: B, upgrade: W, metadata: $a
    });
    !function () {
        if ("undefined" != typeof window) {
            var t = window, e = "clarity";
            if (t[e] && t[e].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var n = t[e] && t[e].q || [];
            for (t[e] = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return Jr[t].apply(Jr, e)
            }, t[e].v = s; n.length > 0;) t[e].apply(t, n.shift())
        }
    }()
}();
