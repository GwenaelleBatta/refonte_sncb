var CS_CONF = {
    "projectId": 1423,
    "status": 1,
    "hostnames": ["belgiantrain.be", "b-europe.com"],
    "crossDomainTracking": 0,
    "crossDomainSingleIframeTracking": 0,
    "consentRequired": 1,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 100,
    "replayRecordingRate": 1,
    "validationRate": 10,
    "lastTrackingDraw": 1557404256,
    "trackerDomain": "c.contentsquare.net",
    "recordingDomain": "r.contentsquare.net",
    "useMalkaPipeline": 1,
    "ed": "l.contentsquare.net/log/web",
    "eMerchandisingEnabled": 0,
    "mouseMoveHeatmapEnabled": 0,
    "autoInsightsEnabled": 0,
    "jsErrorsEnabled": 0,
    "apiErrorsEnabled": 0,
    "customHashIdEnabled": 0,
    "recordingEncryptionEnabled": 0,
    "recordingEncryptionPublicKey": null,
    "recordingEncryptionPublicKeyId": 0,
    "secureCookiesEnabled": 0,
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null,
    "whitelistedAttributes": [],
    "replayRecordingUnmaskedUrlRegex": null,
    "replayRecordingMaskedUrlRegex": null,
    "tagDeploymentMode": "CONTENTSQUARE",
    "experimental": null,
    "iframesTracking": 0,
    "textVisibilityEnabled": 0,
    "cookielessTrackingEnabled": 0,
    "malkaUrlEnabled": 0,
    "malkaEtrEnabled": 0,
    "pathComputationRules": {},
    "asyncSerializerEnabled": 1,
    "malkaQuotaServiceDomain": "q-aeu1.contentsquare.net",
    "malkaRecordingDomain": "k-aeu1.contentsquare.net"
};
!function (t) {
    var e = {};

    function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = t, r.c = e, r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) r.d(i, n, function (e) {
            return t[e]
        }.bind(null, n));
        return i
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 2)
}([, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = /(@import\s+url\s*\(\s*(["'])?([^"')]+)(\2)\s*\))|(@import\s+(["'])([^"']+)\6)|(url\s*\(\s*(["'])?([^"')]+)(\9)\s*\))/g;

    function n(t, e) {
        return t.replace(i, (function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var i = t[3] || t[7], n = t[10], o = (i || n).trim(), s = i ? "@import " : "";
            return s + "url(" + e(o) + ")"
        }))
    }

    e.replaceIn = n, e.extractFrom = function (t) {
        var e = [];
        return n(t, (function (t) {
            return e.push(t), t
        })), e
    }
}, function (t, e, r) {
    "use strict";
    r.r(e);
    var i = {};
    r.r(i), r.d(i, "get", (function () {
        return tt
    })), r.d(i, "getRequestParameters", (function () {
        return et
    }));
    var n = {};
    r.r(n), r.d(n, "getRequestParameters", (function () {
        return wn
    }));
    var o = ["childNodes", "parentNode", "nextSibling", "firstChild"], s = ["shadowRoot"], a = ["target"], c = {
        Date: "csDate",
        JSON: "csJSON",
        Array: "csArray",
        String: "csString",
        URL: "csURL",
        MutationObserver: "csMutationObserver",
        screen: "csScreen"
    };

    function u(t, e) {
        var r = function (t, e) {
            for (var r, i = t; i && !(r = Object.getOwnPropertyDescriptor(i, e));) i = Object.getPrototypeOf(i);
            return r
        }(t, e);
        return (null == r ? void 0 : r.get) ? r.get : (null == r ? void 0 : r.value) ? r.value : function () {
            return this[e]
        }
    }

    function p(t) {
        Object.keys(c).forEach((function (e) {
            window[c[e]] = t[e]
        })), l("csNode", o, t.Node.prototype), l("csElement", s, t.Element.prototype), l("csEvent", a, t.Event.prototype)
    }

    function l(t, e, r) {
        e.forEach((function (e) {
            window["" + (t + e)] = u(r, e)
        }))
    }

    try {
        !function () {
            p(window);
            var t = function () {
                var t = document.createElement("iframe");
                t.id = "cs-native-frame", t.setAttribute("hidden", ""), t.setAttribute("title", "Intentionally blank");
                var e = document.createElement("cs-native-frame-holder");
                if (e.setAttribute("hidden", ""), document.body.appendChild(e), Element.prototype.attachShadow) {
                    var r = e.attachShadow({mode: "closed"});
                    return r.innerHTML = t.outerHTML, r.firstElementChild.contentWindow
                }
                return e.innerHTML = t.outerHTML, e.firstElementChild.contentWindow
            }();
            t && (window.CSPureWindow = t, p(window.CSPureWindow))
        }()
    } catch (t) {
        window.CSProtectnativeFunctionsErrors = JSON.stringify(t)
    }

    function h(t) {
        return csString.prototype.replace.call(t, /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
    }

    function f(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }

    function d(t) {
        return t.nodeType === Node.TEXT_NODE
    }

    function y(t) {
        return function (t) {
            return f(t) && "link" === t.localName
        }(t) && "stylesheet" === t.rel
    }

    function v(t) {
        return f(t) && "img" === t.localName
    }

    function g(t) {
        return f(t) && "style" === t.localName
    }

    function m(t) {
        return f(t) && "input" === t.localName
    }

    function S(t) {
        return f(t) && "script" === t.localName
    }

    function E(t) {
        switch (t.nodeType) {
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                return !0;
            default:
                return !1
        }
    }

    function b(t) {
        for (var e = t, r = [e]; null !== csNodeparentNode.apply(e);) e = csNodeparentNode.apply(e), csArray.prototype.push.call(r, e);
        return w(e) && csArray.prototype.push.call(r, "detached"), {ancestors: r, selectionRoot: e}
    }

    function w(t) {
        return _.isValidElement(t)
    }

    function C(t) {
        return csArray.prototype.slice.call(t)
    }

    function T() {
        return Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector
    }

    var R = T();

    function k(t, e, r) {
        if ("detached" === t || 9 === t.nodeType) return 0;
        var i = csArray.prototype.filter.call(C(csNodechildNodes.apply(t)), (function (t) {
            return 1 === t.nodeType && !function (t, e) {
                return !!e && csArray.prototype.some.call(e, (function (e) {
                    return R.call(t, e)
                }))
            }(t, r.reliableSelectors) && csString.prototype.toLowerCase.call(t.localName) === csString.prototype.toLowerCase.call(e.localName)
        }));
        return csArray.prototype.indexOf.call(i, e)
    }

    var A = [/\d{4}/, /^ember\d+$/];

    function P(t, e, r, i) {
        var n = i.dynamicIdRegex || null, o = function (t) {
            return h(csString.prototype.toLowerCase.call(t.localName))
        }(t);
        if (function (t, e) {
            var r = I(t);
            return r && csString.prototype.match.call(r, /^[\w-]+$/) && O("data-cs-override-id", r, e)
        }(t, r)) return {hasUniqueIdentifier: !0, elementSelector: o + '[data-cs-override-id="' + I(t) + '"]'};
        var s = function (t) {
            var e = t.getAttribute("id");
            return e ? h(e) : e
        }(t);
        if (function (t, e, r, i) {
            return e && !function (t) {
                return null !== I(t)
            }(t) && !function (t, e, r) {
                return t.hasAttribute("data-cs-dynamic-id") || function (t, e) {
                    var r = !1;
                    t && e && (r = e.test(t));
                    return t && (csArray.prototype.some.call(A, (function (e) {
                        return e.test(t)
                    })) || r)
                }(e, r)
            }(t, e, i) && function (t, e) {
                return t && O("id", t, e)
            }(e, r)
        }(t, s, r, n)) return {hasUniqueIdentifier: !0, elementSelector: o + "#" + s};
        var a = function (t, e) {
            if (!e.reliableSelectors) return;
            for (var r = 0, i = e.reliableSelectors; r < i.length; r++) {
                var n = i[r];
                if (R.call(t, n)) return n
            }
            return
        }(t, i);
        return a ? {
            hasUniqueIdentifier: !1, elementSelector: o + "[" + a + "](" + function (t, e, r) {
                if ("detached" === t || 9 === t.nodeType) return 0;
                var i = csArray.prototype.filter.call(C(csNodechildNodes.apply(t)), (function (t) {
                    return 1 === t.nodeType && R.call(t, r)
                }));
                return csArray.prototype.indexOf.call(i, e)
            }(e, t, a) + ")"
        } : {hasUniqueIdentifier: !1, elementSelector: o + ":eq(" + k(e, t, i) + ")"}
    }

    function I(t) {
        return t.getAttribute("data-cs-override-id")
    }

    function O(t, e, r) {
        try {
            return 1 === r.querySelectorAll("[" + t + '="' + e + '"]').length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }

    var _;

    function N(t, e, r) {
        var i = csArray.prototype.shift.call(t);
        if (0 === t.length) return M(i, r);
        var n = P(i, t[0], e, r), o = n.elementSelector, s = n.hasUniqueIdentifier;
        if (!r.fullPath && s) return "" + M(t[t.length - 1], r) + o;
        var a = N(t, e, r);
        return (a ? a + ">" : "") + o
    }

    function M(t, e) {
        if ("detached" === t) return "|detached|";
        if (t.host) {
            var r = b(t.host);
            return N(r.ancestors, r.selectionRoot, e) + "|shadow-root|"
        }
        return 11 === t.nodeType ? "|fragment|" : ""
    }

    !function (t) {
        function e(t) {
            return !!t && "localName" in t && "getAttribute" in t && "hasAttribute" in t && "parentNode" in t
        }

        function r(t) {
            return t && "jquery" in t && 1 === t.length ? t[0] : t
        }

        t.INVALID_ELEMENT = "INVALID_ELEMENT", t.isValidElement = e, t.getElementPath = function (i, n) {
            void 0 === n && (n = {fullPath: !1, dynamicIdRegex: null});
            var o = r(i);
            if (o === document) return "";
            if (!e(o)) return t.INVALID_ELEMENT;
            var s = b(o);
            return N(s.ancestors, s.selectionRoot, n)
        }, t.getElementPathAndFirstAnchorParent = function (i, n) {
            void 0 === n && (n = {fullPath: !1, dynamicIdRegex: null});
            var o = r(i);
            if (o === document) return {path: "", firstAnchorParent: null};
            if (!e(o)) return {path: t.INVALID_ELEMENT, firstAnchorParent: null};
            var s = function (t) {
                for (var e, r = t, i = [r], n = null; null !== csNodeparentNode.apply(r);) null === n && (f(e = r) && "a" === e.localName) && (n = r), csArray.prototype.push.call(i, csNodeparentNode.apply(r)), r = csNodeparentNode.apply(r);
                return w(r) && csArray.prototype.push.call(i, "detached"), {
                    firstAnchorParent: n,
                    ancestors: i,
                    selectionRoot: r
                }
            }(o), a = s.firstAnchorParent;
            return {path: N(s.ancestors, s.selectionRoot, n), firstAnchorParent: a}
        }
    }(_ || (_ = {})), window.CSPathComputation = window.CSPathComputation || _;
    var L = Number.MAX_SAFE_INTEGER || 9007199254740991;

    function x() {
        return Math.floor(B.now() / 1e3)
    }

    function D() {
    }

    function V(t, e) {
        return 0 === csString.prototype.lastIndexOf.call(t, e, 0)
    }

    function U(t, e) {
        return -1 !== csString.prototype.indexOf.call(t, e, t.length - e.length)
    }

    var q, z, j = {
        percentage: function () {
            return Math.floor(1e4 * Math.random()) / 100
        }, boolean: function (t) {
            return this.percentage() < t
        }, integer: function (t) {
            return void 0 === t && (t = L), Math.floor(Math.random() * t)
        }
    }, B = {
        now: function () {
            return "undefined" != typeof performance && performance.now ? performance.timing.navigationStart + Math.round(performance.now()) : csDate.now()
        }
    }, H = function () {
        function t(t) {
            this.trackerDomain = t.trackerDomain, this.loggerDomain = t.ed, this.minLogLevel = t.logLevel, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.iframesTracking = !!t.iframesTracking, this.crossDomainTracking = !!t.crossDomainTracking, this.crossDomainSingleIframeTracking = !!t.crossDomainSingleIframeTracking, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || 34164e6, this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.recordingDomain = t.recordingDomain, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.mouseMoveHeatmapEnabled = t.mouseMoveHeatmapEnabled, this.jsErrorsEnabled = t.jsErrorsEnabled, this.apiErrorsEnabled = t.apiErrorsEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = this.buildRegexFromConfiguration(t.triggerSessionReplayRegex), this.metricRate = void 0 === t.metricRate ? 0 : t.metricRate, this.dynamicIdRegex = t.dynamicIdRegex ? new RegExp(t.dynamicIdRegex) : null, this.whitelistedAttributes = t.whitelistedAttributes || [], this.replayRecordingUnmaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingMaskedUrlRegex), this.tagDeploymentMode = t.tagDeploymentMode, this.dualCollectionTagDomain = t.dualCollectionTagDomain || null, this.ptcDomain = t.ptcDomain || null, this.ptcGuid = t.ptcGuid || null, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.ptcSha512 = t.ptcSha512 || null, this.ptcSnapshotPath = t.ptcSnapshotPath || null, this.emitDebugEvents = !1, this.useMalkaPipeline = t.useMalkaPipeline, this.malkaQuotaServiceDomain = t.malkaQuotaServiceDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.textVisibilityEnabled = t.textVisibilityEnabled, this.experimental = t.experimental || {}, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.cookielessTrackingEnabled = t.cookielessTrackingEnabled, this.customHashIdEnabled = !!t.customHashIdEnabled, this.recordingEncryptionEnabled = !!t.recordingEncryptionEnabled, this.recordingEncryptionPublicKey = t.recordingEncryptionPublicKey || null, this.pathComputationRules = t.pathComputationRules || {}, this.asyncSerializerEnabled = !!t.asyncSerializerEnabled, this.recordingEncryptionPublicKeyId = t.recordingEncryptionPublicKeyId
        }

        return t.prototype.getTrackerUri = function () {
            return this.protocol() + "://" + this.trackerDomain
        }, t.prototype.getRecordingUri = function () {
            return this.protocol() + "://" + (this.useMalkaPipeline && this.malkaRecordingDomain ? this.malkaRecordingDomain : this.recordingDomain)
        }, t.prototype.getQuotaServiceUri = function () {
            return this.protocol() + "://" + this.malkaQuotaServiceDomain
        }, t.prototype.getLoggerUri = function () {
            return this.protocol() + "://" + this.loggerDomain
        }, t.prototype.protocol = function () {
            return this.useHttps ? "https" : "http"
        }, t.prototype.isProjectActive = function () {
            return 1 === this.status
        }, t.prototype.processOptionOverrides = function (t) {
            var e = this;
            t && t.forEach && t.forEach((function (t) {
                var r = t[0], i = t.slice(1);
                if ("setOption" === r) {
                    var n = i[0], o = i[1];
                    e.setOverridableField(n, o)
                }
            }))
        }, t.prototype.setOverridableField = function (t, e) {
            "trackerDomain" === t && (this.trackerDomain = e), "recordingDomain" === t && (this.recordingDomain = e), "loggerDomain" === t && (this.loggerDomain = e), "minLogLevel" === t && (this.minLogLevel = e), "useHttps" === t && (this.useHttps = !!e)
        }, t.prototype.buildRegexFromConfiguration = function (t) {
            return t ? new RegExp("^" + t + "$") : null
        }, t.prototype.getRequestParameters = function () {
            return {pid: "" + this.projectId}
        }, t.prototype.updateDynamicFields = function (t, e) {
            "emitDebugEvents" === t && (this.emitDebugEvents = e), "minLogLevel" === t && (this.minLogLevel = e)
        }, t
    }(), F = function () {
        function t(t, e) {
            this.window = t, this.conf = e
        }

        return t.prototype.init = function () {
            this.inIframeContext = this.window.self !== this.window.top, this.conf.iframesTracking && this.inIframeContext ? this.topWindowTracker = !1 : this.topWindowTracker = !0
        }, t.prototype.isInIframeContext = function () {
            return this.inIframeContext
        }, t.prototype.isTopWindowTracker = function () {
            return this.topWindowTracker
        }, t
    }();
    !function (t) {
        t.debug = "debug", t.warn = "warn", t.error = "error", t.critical = "critical"
    }(q || (q = {})), function (t) {
        t.toQuery = function (t) {
            return csArray.prototype.join.call(csArray.prototype.map.call(Object.keys(t), (function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            })), "&")
        }
    }(z || (z = {}));
    var G, W = function () {
            return (W = Object.assign || function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }).apply(this, arguments)
        }, K = function () {
            function t(t, e) {
                this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
            }

            return t.prototype.setRequestParametersProviders = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }, t.prototype.before = function (t) {
                csArray.prototype.push.call(this.beforeRequestCallbacks, t)
            }, t.prototype.after = function (t) {
                csArray.prototype.push.call(this.afterRequestCallbacks, t)
            }, t.prototype.retrieveParameters = function () {
                return this.requestParametersProviders ? csArray.prototype.reduce.call(csArray.prototype.map.call(this.requestParametersProviders, (function (t) {
                    return t.getRequestParameters()
                })), (function (t, e) {
                    return W(W({}, t), e)
                })) : {}
            }, t
        }(), X = (G = function (t, e) {
            return (G = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }

            G(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }), Y = function (t) {
            function e(e, r) {
                return t.call(this, e, r) || this
            }

            return X(e, t), e.prototype.send = function () {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function (t) {
                    return t()
                }));
                var t = this.retrieveParameters();
                this.addCacheBusting(t);
                var e = z.toQuery(t);
                this.generatePixel(e), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function (t) {
                    return t()
                }))
            }, e.prototype.generatePixel = function (t) {
                var e = new window.Image(1, 1);
                e.onload = D, e.onerror = D, e.src = this.domainUri + (this.path ? "/" + this.path : "") + "?" + t
            }, e.prototype.addCacheBusting = function (t) {
                t.r = csString.prototype.slice.call("" + Math.random(), 2, 8)
            }, e
        }(K), J = function () {
            function t(t, e) {
                this.projectConfiguration = t, this.basicLogRequestParameter = e
            }

            return t.prototype.init = function () {
                this.request = new Y(this.projectConfiguration.getLoggerUri()), this.request.setRequestParametersProviders(this, this.basicLogRequestParameter)
            }, t.prototype.send = function (t) {
                this.log = t, this.request.send()
            }, t.prototype.getRequestParameters = function () {
                return {a: this.log.app, l: this.log.level, m: this.log.message, s: this.log.stacktrace}
            }, t
        }(), Q = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g, Z = /[a-zA-Z0-9+_-](?:@|%40)/,
        $ = function () {
            function t() {
            }

            return t.prototype.anonymize = function (t) {
                return "string" == typeof t && Z.test(t) ? csString.prototype.replace.call(t, Q, "CS_ANONYMIZED_EMAIL") : t
            }, t.prototype.anonymizeFields = function (t, e) {
                var r = this;
                return csArray.prototype.forEach.call(e, (function (e) {
                    t[e] = r.anonymize(t[e])
                })), t
            }, t
        }();

    function tt() {
        return "11.9.6"
    }

    function et() {
        return {v: "11.9.6"}
    }

    var rt, it = function () {
        return (it = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, nt = function () {
        function t(t, e) {
            this.configuration = t, this.pii = e
        }

        return t.prototype.getRequestParameters = function () {
            return it(it({
                d: "" + B.now(),
                p: this.pii.anonymize(window.location.href),
                u: navigator.userAgent
            }, this.configuration.getRequestParameters()), {v: "11.9.6"})
        }, t
    }();
    !function (t) {
        t[t.debug = 0] = "debug", t[t.warn = 1] = "warn", t[t.error = 2] = "error", t[t.critical = 3] = "critical"
    }(rt || (rt = {}));
    var ot = function () {
        function t(t, e, r) {
            var i;
            this.parentLogContext = e, this.pii = new $, this.minLogLevel = rt[q.warn], this.isLoggingActive = !1, this.minLogLevel = rt[t.minLogLevel || q.warn];
            var n = t.validationRate >= 0 ? t.validationRate : 10;
            this.isLoggingActive = j.boolean(n), this.request = r || new J(t, new nt(t, this.pii)), this.logTrack = ((i = {})[q.debug] = [], i[q.warn] = [], i[q.error] = [], i[q.critical] = [], i), this.snippetLogCounter = {}, this.request.init()
        }

        return t.prototype.send = function (t, e, r) {
            if (void 0 === e && (e = ""), void 0 === r && (r = q.warn), this.isLoggingAllowed(r, e)) {
                csArray.prototype.push.call(this.logTrack[r], e || "");
                var i = {message: this.getMessage(t, e), stacktrace: this.getStacktrace(t), app: "uxa", level: r};
                this.request.send(i)
            }
        }, t.prototype.getMessage = function (t, e) {
            var r = t instanceof Error ? this.pii.anonymize(t.message || t.toString()) : t;
            return e && (r += " ErrorCode: " + e), r
        }, t.prototype.getStacktrace = function (t) {
            return t instanceof Error ? (t.stack || "No stacktrace") + " " + this.getContext() : this.getContext()
        }, t.prototype.getContext = function () {
            var t = this.parentLogContext.getVisitorService(), e = null == t ? void 0 : t.getVisitor();
            if (!e) return "No context";
            var r = this.parentLogContext.getSessionService(), i = r && r.getSession(),
                n = {userId: e.id, sessionNumber: e.visitsCount, pageNumber: i && i.pageNumber};
            return csJSON.stringify(n)
        }, t.prototype.isLoggingAllowed = function (t, e) {
            if (!this.isLoggingActive || rt[t] < this.minLogLevel) return !1;
            if (0 === (null == e ? void 0 : e.indexOf("snippet-", 0))) return this.isLoggingAllowedForSnippets(e);
            var r = this.logTrack[t];
            return !(r.length >= 5) && (!e || !csArray.prototype.some.call(r, (function (t) {
                return t === e
            })))
        }, t.prototype.isLoggingAllowedForSnippets = function (t) {
            return t in this.snippetLogCounter ? !(this.snippetLogCounter[t] >= 5) && (this.snippetLogCounter[t] += 1, !0) : (this.snippetLogCounter[t] = 1, !0)
        }, t
    }(), st = document.createElement("a");

    function at(t) {
        return st.href = t, st.href
    }

    function ct(t) {
        if (!V(t, "http://") && !V(t, "https://")) return "";
        var e = document.createElement("a");
        return e.href = t, decodeURIComponent(e.hostname)
    }

    function ut(t, e) {
        return csArray.prototype.some.call(e, (function (e) {
            return U(t, "." + e) || t === e || "" === e
        }))
    }

    var pt, lt, ht, ft, dt;
    !function (t) {
        t.AfterPageView = "afterPageView", t.GetSessionKey = "getSessionKey"
    }(pt || (pt = {})), function (t) {
        t.Parent = "parent", t.Child = "child"
    }(lt || (lt = {})), function (t) {
        t.Discovery = "discovery", t.Stop = "stop", t.ChildLogMessage = "childLogMessage", t.AnalysisEvent = "analysisEvent", t.JavascriptError = "javascriptError", t.ApiError = "apiError", t.EmerchandisingMessage = "emerchandisingMessage", t.Commands = "commands", t.IntegrationCallback = "integrationCallback"
    }(ht || (ht = {})), (dt = ft || (ft = {})).buildBaseMessage = function (t, e, r, i) {
        var n = {type: t, from: e, pid: r, signature: "CS_IFRAME_MESSAGE"};
        return void 0 !== i && i >= 0 && (n.id = i), n
    }, dt.isMessageValid = function (t, e, r, i) {
        var n = ct(t.origin);
        return !!t.data && !!t.data.type && "CS_IFRAME_MESSAGE" === t.data.signature && t.data.from === e && t.data.pid === r && ut(n, i)
    }, dt.sendMessage = function (t, e, r) {
        t.postMessage(r, e)
    };
    var yt = function () {
        function t(t) {
            this.configuration = t
        }

        return t.prototype.send = function (t, e, r) {
            void 0 === e && (e = ""), void 0 === r && (r = q.warn);
            var i = {message: t, errorCode: e, level: r},
                n = ft.buildBaseMessage(ht.ChildLogMessage, lt.Child, this.configuration.projectId);
            n.content = i, ft.sendMessage(window.parent, "*", n)
        }, t
    }(), vt = function () {
        function t() {
        }

        return t.prototype.setContext = function (t, e) {
            this.visitorService = t, this.sessionService = e
        }, t.prototype.getVisitorService = function () {
            return this.visitorService
        }, t.prototype.getSessionService = function () {
            return this.sessionService
        }, t
    }();

    function gt(t) {
        return bt(t) && ("number" == typeof t || t instanceof Number) && !isNaN(t)
    }

    function mt(t) {
        return t === parseInt(t, 10)
    }

    function St(t) {
        return bt(t) && ("string" == typeof t || t instanceof csString)
    }

    function Et(t) {
        return "object" == typeof t
    }

    function bt(t) {
        return void 0 !== t
    }

    function wt(t) {
        return bt(t) && null !== t
    }

    function Ct(t) {
        return "function" == typeof t
    }

    function Tt(t) {
        return t instanceof Element
    }

    var Rt, kt, At, Pt, It = function () {
        function t() {
        }

        return t.setStrategy = function (e) {
            t.strategy = e
        }, t.getStrategy = function () {
            return t.strategy
        }, t.debug = function (t, e) {
            void 0 === e && (e = ""), this.strategy.send(t, e, q.debug)
        }, t.warn = function (t, e) {
            void 0 === e && (e = ""), this.strategy.send(t, e, q.warn)
        }, t.error = function (t, e) {
            void 0 === e && (e = ""), this.strategy.send(t, e, q.error)
        }, t.critical = function (t, e) {
            void 0 === e && (e = ""), this.strategy.send(t, e, q.critical)
        }, t.tryToExecute = function (t, e) {
            var r = this;
            return function () {
                for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                try {
                    var o = e.apply(void 0, i);
                    return bt(window.Promise) && o instanceof window.Promise ? o.then((function (t) {
                        return t
                    }), (function (e) {
                        return r.error(e, t)
                    })) : o
                } catch (e) {
                    try {
                        r.error(e, t)
                    } catch (t) {
                    }
                }
            }
        }, t
    }(), Ot = function (t) {
        return function (e, r, i) {
            var n = r.toString(), o = t || (e.constructor && e.constructor.name) + "." + n, s = i.value;
            i.value = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return It.tryToExecute(o, s.bind(this)).apply(void 0, t)
            }
        }
    };
    !function (t) {
        function e(t) {
            var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)").exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }

        function r(e, r, n, o, s, a) {
            var c = encodeURIComponent("" + r), u = n === t.CURRENT_DOMAIN ? void 0 : n, p = i(o),
                l = e + "=" + c + (p ? ";expires=" + p.toUTCString() : "") + ";path=/" + (wt(u) ? ";domain=" + u : "");
            return bt(s) && s !== At.NotSet && (l = l + ";SameSite=" + s), bt(a) && a === Pt.Yes && (l += ";Secure"), document.cookie = l, !0
        }

        function i(t) {
            return gt(t) ? new csDate(B.now() + t) : t
        }

        function n(t, i) {
            e(t) && r(t, "", i, new csDate(0)), e(t) && r(t, "", i, new csDate(0), At.None, Pt.Yes)
        }

        t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.get = e, t.set = r, t.toExpireDate = i, t.remove = n, t.isCookiePresent = function () {
            return document.cookie.length > 0
        }, t.getRootDomain = function (t, i) {
            var o = e("_cs_root-domain");
            if (null !== o && "1" !== o) return o;
            for (var s = csString.prototype.split.call(window.location.hostname, "."), a = csArray.prototype.pop.call(s); s.length && (null === o || "1" === o);) r("_cs_root-domain", a = csArray.prototype.join.call([csArray.prototype.pop.call(s), a], "."), a, void 0, t, i), o = e("_cs_root-domain");
            return n("_cs_root-domain", a), a
        }
    }(Rt || (Rt = {})), function (t) {
        t.browserIsSafariV12 = function () {
            return window.navigator.vendor && csString.prototype.indexOf.call(window.navigator.vendor, "Apple") > -1 && window.navigator.appVersion && csString.prototype.indexOf.call(window.navigator.appVersion, "Version/12.") > -1
        }
    }(kt || (kt = {})), function (t) {
        t.None = "None", t.Lax = "Lax", t.NotSet = "X"
    }(At || (At = {})), function (t) {
        t[t.Yes = 1] = "Yes", t[t.No = 0] = "No"
    }(Pt || (Pt = {}));
    var _t = function () {
        function t(t, e, r) {
            this.configuration = t, this.urlService = e, this.cookieChecker = r, this.supportsSameSite = !1, this.sameSiteFlag = At.NotSet, this.secureFlag = Pt.No
        }

        return t.prototype.getSameSiteFlag = function () {
            return this.sameSiteFlag
        }, t.prototype.getSecureFlag = function () {
            return this.secureFlag
        }, t.prototype.getDomain = function () {
            return this.domain
        }, t.prototype.getRootDomain = function () {
            return this.rootDomain
        }, t.prototype.init = function () {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.computeSameSiteFlag(), e = this.computeSecureFlag();
                this.supportsSameSite = this.checkSameSiteFromContext(t, e), this.supportsSameSite ? (this.sameSiteFlag = t, this.secureFlag = e) : this.configuration.secureCookiesEnabled && "https:" === this.urlService.getUrlProtocol() && (this.secureFlag = Pt.Yes), this.rootDomain = this.computeRootDomain(), this.domain = this.computeDomain(this.rootDomain)
            }
        }, t.prototype.checkSameSiteFromContext = function (e, r) {
            return !kt.browserIsSafariV12() && (Rt.set(t.COOKIE_TEST_FOR_SAME_SITE, "Test same site", t.CURRENT_DOMAIN, void 0, e, r), !!Rt.get(t.COOKIE_TEST_FOR_SAME_SITE) && (Rt.remove(t.COOKIE_TEST_FOR_SAME_SITE, t.CURRENT_DOMAIN), !0))
        }, t.prototype.computeSameSiteFlag = function () {
            return "http:" === this.urlService.getUrlProtocol() ? At.Lax : this.cookieChecker.isSameSiteNoneSecureNeeded() || this.configuration.crossDomainTracking ? At.None : At.Lax
        }, t.prototype.computeSecureFlag = function () {
            return "http:" === this.urlService.getUrlProtocol() ? Pt.No : this.configuration.secureCookiesEnabled || this.configuration.crossDomainTracking || this.cookieChecker.isSameSiteNoneSecureNeeded() ? Pt.Yes : Pt.No
        }, t.prototype.isSameSiteSupported = function () {
            return this.supportsSameSite
        }, t.prototype.set = function (t, e, r) {
            var i = Rt.toExpireDate(r);
            Rt.set(t, e, this.domain, i, this.getSameSiteFlag(), this.getSecureFlag())
        }, t.prototype.get = function (t) {
            var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)").exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }, t.prototype.delete = function (t, e) {
            var r = e || this.domain;
            Rt.remove(t, r)
        }, t.prototype.computeRootDomain = function () {
            var t = this.cookieChecker.isSameSiteNoneSecureNeeded() && this.isSameSiteSupported(),
                e = t ? At.None : void 0, r = t ? Pt.Yes : void 0;
            return Rt.getRootDomain(e, r)
        }, t.prototype.computeDomain = function (t) {
            return this.configuration.allowSubdomains ? t : Rt.CURRENT_DOMAIN
        }, t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site", t
    }(), Nt = function () {
        function t(t, e) {
            this.iframeContext = t, this.configuration = e, this.cookieEnabled = !1, this.useSameSiteNoneSecureCookie = !1
        }

        return t.prototype.init = function () {
            if (!this.configuration.cookielessTrackingEnabled && this.iframeContext.isTopWindowTracker() && "cookie" in document) {
                if (!this.iframeContext.isInIframeContext() && Rt.isCookiePresent()) return this.cookieEnabled = !0, void (this.useSameSiteNoneSecureCookie = !1);
                if (Rt.set("_cs_t", "1", Rt.CURRENT_DOMAIN), null !== Rt.get("_cs_t")) return this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !1, void Rt.remove("_cs_t", Rt.CURRENT_DOMAIN);
                Rt.set("_cs_t", "1", Rt.CURRENT_DOMAIN, void 0, At.None, Pt.Yes), null !== Rt.get("_cs_t") && (this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !0, Rt.remove("_cs_t", Rt.CURRENT_DOMAIN))
            }
        }, t.prototype.areCookiesEnabled = function () {
            return this.cookieEnabled
        }, t.prototype.isSameSiteNoneSecureNeeded = function () {
            return this.useSameSiteNoneSecureCookie
        }, t
    }();

    function Mt() {
        var t = "CSLocalStorageTest";
        try {
            return localStorage.setItem(t, t), localStorage.getItem(t) !== t ? !1 : (localStorage.removeItem(t), !0)
        } catch (t) {
            return !1
        }
    }

    var Lt = function () {
        function t() {
        }

        return t.check = function () {
            return void 0 === Object.assign || this.tryObjectAssign()
        }, t.tryObjectAssign = function () {
            try {
                var t = {}, e = Object.assign(t, {a: 1}, {b: 2, c: {d: 4}}), r = {a: 1, b: 2, c: {d: 4}};
                return csJSON.stringify(e) === csJSON.stringify(r) && csJSON.stringify(t) === csJSON.stringify(r)
            } catch (t) {
                return !1
            }
        }, t
    }();
    var xt, Dt, Vt, Ut, qt = function () {
        function t(t, e) {
            this.configuration = t, this.cookieChecker = e
        }

        return t.prototype.canTrack = function () {
            return this.isBrowsingContextSupported() && this.canTrackProject() && this.canUseStorage()
        }, t.prototype.canTrackInIframe = function () {
            return this.isBrowsingContextSupported() && this.canTrackProject()
        }, t.prototype.canUseStorage = function () {
            return this.configuration.cookielessTrackingEnabled ? function () {
                var t = "CSSessionStorageTest";
                try {
                    return sessionStorage.setItem(t, t), sessionStorage.getItem(t) !== t ? !1 : (sessionStorage.removeItem(t), !0)
                } catch (t) {
                    return !1
                }
            }() && Mt() : this.cookieChecker.areCookiesEnabled() && Mt()
        }, t.prototype.canTrackProject = function () {
            return this.configuration.isProjectActive() && ut(window.location.hostname, this.configuration.hostnames)
        }, t.prototype.isBrowsingContextSupported = function () {
            return !this.isDocPrerendered() && this.isBrowserSupported() && Lt.check()
        }, t.prototype.isDocPrerendered = function () {
            return "visibilityState" in document && "prerender" === document.visibilityState
        }, t.prototype.isBrowserSupported = function () {
            return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && "JSON" in window && "parse" in window.JSON && "stringify" in window.JSON && "addEventListener" in window && "removeEventListener" in window && "Node" in window && "filter" in csArray.prototype && "forEach" in csArray.prototype && "querySelectorAll" in document && "now" in Date && "keys" in Object && "performance" in window
        }, t
    }(), zt = function () {
        function t(t, e, r, i, n) {
            this.visitorService = t, this.sessionService = e, this.exclusionService = r, this.customVariablesService = i, this.configuration = n
        }

        return t.prototype.get = function () {
            return {
                exclusion: this.exclusionService.getAppliedTrackingDraw(),
                visitor: this.visitorService.getVisitor(),
                session: this.sessionService.getSession(),
                cvars: this.customVariablesService.getCustomVariablesSession()
            }
        }, t.prototype.apply = function (t) {
            t && (t.exclusion ? this.exclude() : this.include(t))
        }, t.prototype.exclude = function () {
            this.exclusionService.exclude(this.configuration), this.visitorService.removeVisitor(), this.sessionService.removeSession(), this.customVariablesService.removeCustomVariablesSession()
        }, t.prototype.include = function (t) {
            this.exclusionService.removeExclusion(), this.visitorService.setVisitor(t.visitor), t.session ? this.sessionService.setSession(t.session) : this.sessionService.removeSession(), t.cvars ? this.customVariablesService.setCustomVariableSession(t.cvars) : this.customVariablesService.removeCustomVariablesSession()
        }, t
    }(), jt = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?$/, Bt = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = r, this.browserSessionStorage = i
        }

        return t.prototype.get = function () {
            var e;
            return (e = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_id") : this.cookieService.get("_cs_id")) ? t.fromString(e) : null
        }, t.prototype.set = function (e) {
            var r = t.toString(e);
            if (this.configuration.cookielessTrackingEnabled) this.browserSessionStorage.setItem("_cs_id", r); else {
                var i = new csDate(e.expires);
                this.cookieService.set("_cs_id", r, i), this.crossDomainSingleIframeService.setCookie("_cs_id", r, i)
            }
        }, t.prototype.remove = function () {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_id") : (this.cookieService.delete("_cs_id"), this.crossDomainSingleIframeService.removeCookie("_cs_id"))
        }, t.prototype.handleSubdomainChange = function () {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.get();
                t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_id", _t.CURRENT_DOMAIN) : this.cookieService.delete("_cs_id", this.cookieService.getRootDomain()), this.set(t))
            }
        }, t.fromString = function (t) {
            var e = csString.prototype.split.call(t, "."), r = e[0], i = e[1], n = e[2], o = e[3], s = e[4], a = e[5],
                c = e[6];
            return {
                id: r,
                creationTimestamp: Number(i),
                visitsCount: Number(n),
                hitTimestamp: Number(o),
                lastVisitTimestamp: Number(s),
                appliedTrackingDraw: Number(a),
                expires: Number(c)
            }
        }, t.toString = function (t) {
            return csArray.prototype.join.call([t.id, t.creationTimestamp, t.visitsCount, t.hitTimestamp, t.lastVisitTimestamp, t.appliedTrackingDraw, t.expires], ".")
        }, t.isValidVisitorString = function (t) {
            return jt.test(t)
        }, t
    }();
    !function (t) {
        t.REPLAY_RECORDING_DISABLED = "1", t.REPLAY_RECORDING_ENABLED = "3", t.TRIGGER_REPLAY_RECORDING_ENABLED = "5"
    }(xt || (xt = {})), function (t) {
        t.NOT_RECORDED = "0", t.TEMPORARILY_RECORDED = "T", t.GLOBAL_SAMPLING = "5", t.URL_SAMPLING = "6", t.ETR_SAMPLING = "7"
    }(Dt || (Dt = {})), function (t) {
        t.ETR_OFF = "0", t.ETR_ON = "1"
    }(Vt || (Vt = {})), function (t) {
        t.ETR_LEGACY = "0", t.ETR_SESSION = "1", t.ETR_PAGE = "2"
    }(Ut || (Ut = {}));
    var Ht, Ft = /^\d+\.[013567T](\.[01])?(\.\d+)?$/;
    !function (t) {
        t[t.NOT_FOUND = 0] = "NOT_FOUND", t[t.EXPIRED = 1] = "EXPIRED", t[t.FOUND = 2] = "FOUND"
    }(Ht || (Ht = {}));
    var Gt, Wt = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = r, this.browserSessionStorage = i, this.cache = null
        }

        return t.prototype.get = function (e) {
            var r = this.getRawSession(e);
            return this.isValid(r) ? t.fromString(r) : null
        }, t.prototype.getRawSession = function (e) {
            if (e) {
                var r = this.getRawValueFromStorage();
                return t.removeSessionTimestamp(r)
            }
            var i = this.getFromCache(), n = i.sessionString, o = i.status, s = t.removeSessionTimestamp(n);
            if (o !== Ht.EXPIRED) return s;
            if (this.configuration.cookielessTrackingEnabled) return null;
            var a = this.getRawValueFromStorage();
            if (!a) return null;
            var c = csString.prototype.split.call(a, ".");
            if (!t.isSessionWithTimestampValue(c)) return a;
            var u = c[c.length - 1], p = parseInt(u, 10);
            return isNaN(p) || this.refreshCache(p), s
        }, t.prototype.set = function (t, e) {
            void 0 === e && (e = 18e5);
            var r = B.now() + e, i = this.toString(t);
            i += "." + r, this.setInCache(i, r), this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_s", i) : (this.cookieService.set("_cs_s", i, e), this.crossDomainSingleIframeService.setCookie("_cs_s", i, e))
        }, t.prototype.remove = function () {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_s") : (this.cookieService.delete("_cs_s"), this.crossDomainSingleIframeService.removeCookie("_cs_s")), this.clearCache()
        }, t.prototype.handleSubdomainChange = function () {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.get(!0);
                t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_s", _t.CURRENT_DOMAIN) : this.cookieService.delete("_cs_s", this.cookieService.getRootDomain()), this.set(t))
            }
        }, t.prototype.isValid = function (e) {
            return null !== e && t.isValidSessionString(e)
        }, t.prototype.toString = function (t) {
            return csArray.prototype.join.call([t.pageNumber, t.recordingState, t.etrState], ".")
        }, t.prototype.setInCache = function (t, e) {
            this.cache = {sessionString: t, expires: e}
        }, t.prototype.getFromCache = function () {
            return this.cache ? this.cache && B.now() <= this.cache.expires ? {
                sessionString: this.cache.sessionString,
                status: Ht.FOUND
            } : {
                sessionString: this.cache.sessionString,
                status: Ht.EXPIRED
            } : {sessionString: this.getRawValueFromStorage(), status: Ht.NOT_FOUND}
        }, t.prototype.clearCache = function () {
            this.cache = null
        }, t.prototype.refreshCache = function (t) {
            this.cache && (this.cache.expires = t)
        }, t.prototype.getRawValueFromStorage = function () {
            if (this.configuration.cookielessTrackingEnabled) {
                var t = this.browserSessionStorage.getItem("_cs_s");
                return !t || this.hasExpired(t) ? null : t
            }
            return this.cookieService.get("_cs_s")
        }, t.prototype.hasExpired = function (t) {
            var e = csString.prototype.split.call(t, "."), r = parseInt(e[e.length - 1], 10);
            return !isNaN(r) && B.now() > r
        }, t.isSessionWithTimestampValue = function (t) {
            return 13 === t[t.length - 1].length
        }, t.removeSessionTimestamp = function (e) {
            if (!e) return null;
            var r = csString.prototype.split.call(e, ".");
            return t.isSessionWithTimestampValue(r) ? csArray.prototype.join.call(csArray.prototype.slice.call(r, 0, -1), ".") : e
        }, t.fromRawString = function (e) {
            var r = t.removeSessionTimestamp(e);
            return null !== r ? t.fromString(r) : null
        }, t.fromString = function (t) {
            var e = csString.prototype.split.call(t, "."), r = e[0], i = e[1], n = e[2];
            return {recordingState: i, etrState: null != n ? n : Vt.ETR_OFF, pageNumber: parseInt(r, 10)}
        }, t.isValidSessionString = function (t) {
            return Ft.test(t)
        }, t
    }();
    (Gt || (Gt = {})).fromRaw = function (t) {
        return {
            exclusion: Number(t._cs_ex) || 0,
            visitor: t._cs_id ? Bt.fromString(t._cs_id) : null,
            session: t._cs_s ? Wt.fromRawString(t._cs_s) : null,
            cvars: t._cs_cvars ? window.JSON.parse(t._cs_cvars) : null
        }
    };
    var Kt, Xt = /^[0-9]+$/, Yt = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = r, this.browserSessionStorage = i
        }

        return t.prototype.get = function () {
            return this.configuration.cookielessTrackingEnabled ? Number(this.browserSessionStorage.getItem("_cs_ex")) : Number(this.cookieService.get("_cs_ex"))
        }, t.prototype.set = function (t) {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_ex", t) : (this.cookieService.set("_cs_ex", t, 2592e6), this.crossDomainSingleIframeService.setCookie("_cs_ex", t, 2592e6))
        }, t.prototype.remove = function () {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_ex") : (this.cookieService.delete("_cs_ex"), this.crossDomainSingleIframeService.removeCookie("_cs_ex"))
        }, t.isValidExclusionString = function (t) {
            return Xt.test(t)
        }, t
    }(), Jt = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = r, this.browserSessionStorage = i
        }

        return t.prototype.get = function () {
            return this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_cvars") : this.cookieService.get("_cs_cvars")
        }, t.prototype.set = function (t) {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_cvars", t) : (this.cookieService.set("_cs_cvars", t), this.crossDomainSingleIframeService.setCookie("_cs_cvars", t))
        }, t.prototype.remove = function () {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_cvars") : (this.cookieService.delete("_cs_cvars"), this.crossDomainSingleIframeService.removeCookie("_cs_cvars"))
        }, t.isValidCustomVarString = function (t) {
            return "string" == typeof t
        }, t
    }();
    !function (t) {
        function e(t) {
            var e = ["_cs_ex", "_cs_id", "_cs_s", "_cs_cvars"];
            return csArray.prototype.every.call(Object.keys(t), (function (t) {
                return csArray.prototype.indexOf.call(e, t) >= 0
            }))
        }

        t.isRawDomainState = e, t.isValid = function (t) {
            return !!e(t) && ((!t._cs_id || Bt.isValidVisitorString(t._cs_id)) && (!t._cs_s || Wt.isValidSessionString(t._cs_s)) && (!t._cs_ex || Yt.isValidExclusionString(t._cs_ex)) && (!t._cs_cvars || Jt.isValidCustomVarString(t._cs_cvars)))
        }
    }(Kt || (Kt = {}));
    var Qt, Zt = function () {
        function t(t, e) {
            this.xdframeOpener = t, this.location = e
        }

        return t.prototype.retrieve = function (e, r) {
            var i = this;
            this.callback = r, this.retrievedStates = [], this.xdframeOrigins = csArray.prototype.map.call(csArray.prototype.filter.call(e, (function (t) {
                return i.isNotCurrentHostname(t)
            })), t.getXdframeOrigin), this.xdframeOpener.onMessage((function (t) {
                i.handleXdframeMessage(t)
            })), this.xdframeOpener.onTimeout((function () {
                i.handleTimeout()
            })), this.xdframeOpener.start(), csArray.prototype.forEach.call(csArray.prototype.map.call(this.xdframeOrigins, t.getXdframeUrl), (function (t) {
                return i.xdframeOpener.open(t)
            }))
        }, t.prototype.handleXdframeMessage = function (t) {
            if (this.isXdframeMessage(t)) {
                var e = t.data;
                if (!Kt.isValid(e)) throw this.xdframeOpener.stop(), "Invalid domain state: " + csJSON.stringify(t.data) + " from " + t.origin;
                csArray.prototype.push.call(this.retrievedStates, e)
            }
            this.allMessagesAreIn() && (this.xdframeOpener.stop(), this.callback(csArray.prototype.map.call(this.retrievedStates, Gt.fromRaw)))
        }, t.prototype.handleTimeout = function () {
            It.warn("xdframe: all messages not received")
        }, t.prototype.isXdframeMessage = function (t) {
            return csArray.prototype.indexOf.call(this.xdframeOrigins, t.origin) > -1
        }, t.prototype.allMessagesAreIn = function () {
            return this.retrievedStates.length === this.xdframeOrigins.length
        }, t.prototype.isNotCurrentHostname = function (t) {
            return !U(this.location.hostname, t)
        }, t.getXdframeOrigin = function (t) {
            return "https://csxd." + t
        }, t.getXdframeUrl = function (t) {
            return t + "/xdframe-1.0.0.html"
        }, t
    }(), $t = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, te = function () {
        function t() {
            var t = this;
            this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3e3, this.scopedHandleMessage = function (e) {
                t.handleMessage(e)
            }
        }

        return t.prototype.onMessage = function (t) {
            this.onMessageCallback = t
        }, t.prototype.onTimeout = function (t) {
            this.onTimeoutCallback = t
        }, t.prototype.start = function () {
            var t = this;
            window.addEventListener("message", this.scopedHandleMessage), this.timeoutId = window.setTimeout((function () {
                t.onTimeoutCallback()
            }), this.ALL_MESSAGES_RECEIVED_TIMEOUT)
        }, t.prototype.open = function (t) {
            var e = document.createElement("iframe");
            return e.src = t, e.setAttribute("hidden", ""), e.setAttribute("title", "Intentionally blank"), document.body.appendChild(e), e
        }, t.prototype.stop = function () {
            window.removeEventListener("message", this.scopedHandleMessage), window.clearTimeout(this.timeoutId), this.onMessageCallback = D, this.onTimeoutCallback = D
        }, t.prototype.handleMessage = function (t) {
            this.onMessageCallback(t)
        }, $t([Ot("XdframeMessage")], t.prototype, "handleMessage", null), t
    }(), ee = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), re = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, ie = function (t) {
        function e(e, r) {
            var i = t.call(this, e, r) || this;
            return i.afterRequestDataRetrievedCallbacks = [], i.requestHeaders = [], i.timeout = 0, i.pendingXhr = null, i
        }

        return ee(e, t), e.prototype.setCompressionOptions = function (t, e) {
            this.compressor = t, this.compressionOutputType = e
        }, e.prototype.setRequestPayloadProvider = function (t) {
            this.requestPayloadProvider = t
        }, e.prototype.setRequestHeader = function (t) {
            csArray.prototype.push.call(this.requestHeaders, t)
        }, e.prototype.afterProvidersCalled = function (t) {
            csArray.prototype.push.call(this.afterRequestDataRetrievedCallbacks, t)
        }, e.prototype.onLoad = function (t) {
            this.onLoadCallback = t
        }, e.prototype.onError = function (t) {
            this.onErrorCallback = t
        }, e.prototype.onTimeout = function (t, e) {
            this.timeout = t, this.onTimeoutCallback = e
        }, e.prototype.send = function () {
            var t = this;
            csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function (t) {
                return t()
            }));
            var e = this.retrieveParameters(), r = z.toQuery(e), i = this.retrievePayload();
            csArray.prototype.forEach.call(this.afterRequestDataRetrievedCallbacks, (function (t) {
                return t()
            })), this.compressor && this.compressionOutputType ? this.compressor.compress(this.compressionOutputType, i, (function (e) {
                t.doSend(r, e)
            })) : this.doSend(r, i)
        }, e.prototype.abort = function () {
            this.pendingXhr && this.pendingXhr.readyState !== XMLHttpRequest.DONE && this.pendingXhr.abort()
        }, e.prototype.retrievePayload = function () {
            return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
        }, e.prototype.doSend = function (t, e) {
            this.sendXMLHttpRequest(t, e), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function (t) {
                return t()
            }))
        }, e.prototype.sendXMLHttpRequest = function (t, e) {
            var r = this;
            if (null !== window.XMLHttpRequest) {
                var i = new XMLHttpRequest;
                i.open("POST", this.domainUri + "/" + this.path + "?" + t, !0);
                for (var n = 0, o = this.requestHeaders; n < o.length; n++) {
                    var s = o[n];
                    i.setRequestHeader(s.name, s.value)
                }
                i.onload = function () {
                    r.onLoadCallback && r.onLoadCallback(i), r.pendingXhr = null
                }, i.onerror = function () {
                    r.onErrorCallback && r.onErrorCallback(), r.pendingXhr = null
                }, this.timeout && this.onTimeoutCallback && (i.timeout = this.timeout, i.ontimeout = function () {
                    r.onTimeoutCallback(), r.pendingXhr = null
                }), i.send(e), this.pendingXhr = i
            }
        }, re([Ot("POST request")], e.prototype, "doSend", null), e
    }(K);
    !function (t) {
        t[t.MUTATION_INSERT = 1] = "MUTATION_INSERT", t[t.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", t[t.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", t[t.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", t[t.INITIAL_DOM = 5] = "INITIAL_DOM", t[t.SCROLL = 6] = "SCROLL", t[t.MOUSE_MOVE = 7] = "MOUSE_MOVE", t[t.CLICK = 8] = "CLICK", t[t.RESIZE = 9] = "RESIZE", t[t.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", t[t.INPUT_SELECT = 11] = "INPUT_SELECT", t[t.INPUT_TEXT = 12] = "INPUT_TEXT", t[t.HASH_CHANGE = 13] = "HASH_CHANGE", t[t.CONSENT_GRANTED = 14] = "CONSENT_GRANTED", t[t.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN", t[t.MOUSE_OVER = 16] = "MOUSE_OVER", t[t.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", t[t.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", t[t.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", t[t.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", t[t.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", t[t.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", t[t.MOUSE_DOWN = 24] = "MOUSE_DOWN", t[t.MOUSE_UP = 25] = "MOUSE_UP", t[t.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", t[t.PAGE_EVENT = 27] = "PAGE_EVENT", t[t.API_ERROR = 28] = "API_ERROR", t[t.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", t[t.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", t[t.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", t[t.KEY_DOWN = 32] = "KEY_DOWN", t[t.KEY_UP = 33] = "KEY_UP", t[t.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND"
    }(Qt || (Qt = {}));

    function ne(t, e) {
        void 0 === e && (e = !0), t.boundElement.addEventListener(t.type, t.listener, e)
    }

    function oe(t, e) {
        void 0 === e && (e = !0), t.boundElement.removeEventListener(t.type, t.listener, e)
    }

    var se, ae, ce = function () {
        return (ce = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, ue = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, pe = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, le = function () {
        function t(t, e, r, i, n, o) {
            this.nodeIdentifier = t, this.projectConfiguration = e, this.encryption = r, this.textNodesBuffer = i, this.textNodesMutationsBuffer = n, this.inputNodesBuffer = o, this.publicKey = null, this.importKeyDone = !1
        }

        return t.prototype.onTextNodeToEncrypt = function (t) {
            this.onTextNodeToEncryptCallback = t
        }, t.prototype.onInputNodeToEncrypt = function (t) {
            this.onInputNodeToEncryptCallback = t
        }, t.prototype.init = function () {
            var t = this;
            this.isFeatureSupported() && (this.textNodesBuffer.onSerializeNode((function (e) {
                return t.serializeTextNodeToEncrypt(e)
            })), this.textNodesMutationsBuffer.onSerializeNode((function (e) {
                return t.serializeTextNodeMutationToEncrypt(e)
            })), this.inputNodesBuffer.onSerializeNode((function (e) {
                return t.serializeInputNodeToEncrypt(e)
            })), this.importPublicKey(this.projectConfiguration.recordingEncryptionPublicKey))
        }, t.prototype.importPublicKey = function (t) {
            return ue(this, void 0, void 0, (function () {
                var e;
                return pe(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.encryption.importKey(t)];
                        case 1:
                            return e = r.sent(), this.importKeyDone = !0, e ? (this.publicKey = e, this.textNodesBuffer.serializeNodesFromBuffer()) : (this.textNodesBuffer.clear(), It.warn("Fail to import public key '" + t + "'")), this.textNodesMutationsBuffer.serializeNodesFromBuffer(), this.inputNodesBuffer.serializeNodesFromBuffer(), [2]
                    }
                }))
            }))
        }, t.prototype.registerTextNodeToEncrypt = function (t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeToEncrypt(t) : this.textNodesBuffer.addNewNode(t))
        }, t.prototype.registerTextNodeMutationToEncrypt = function (t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeMutationToEncrypt(t) : this.textNodesMutationsBuffer.addNewNode(t))
        }, t.prototype.registerInputNodeToEncrypt = function (t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeInputNodeToEncrypt(t) : this.inputNodesBuffer.addNewNode(t))
        }, t.prototype.isFeatureSupported = function () {
            return this.projectConfiguration.recordingEncryptionEnabled && !!this.projectConfiguration.recordingEncryptionPublicKey && this.projectConfiguration.recordingEncryptionPublicKeyId > 0 && this.encryption.isSupported()
        }, t.prototype.serializeTextNodeToEncrypt = function (t) {
            var e = this, r = t.textNode;
            this.nodeIdentifier.ifIdentified(r, (function (r) {
                if (e.publicKey) {
                    var i = ce(ce({}, t), {targetId: r, date: B.now()});
                    e.encryptAndProcessEvent(i, (function (t) {
                        return t.textNode.data
                    }), (function () {
                        return It.warn("Fail to encrypt text node data")
                    }), (function (t, r) {
                        return e.processEncryptedTextMutation(t, r)
                    }))
                }
            }))
        }, t.prototype.serializeTextNodeMutationToEncrypt = function (t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToCharacterData(t);
            this.encryptAndProcessEvent(t, (function (t) {
                return t.textNode.data
            }), (function () {
                It.warn("Fail to encrypt text node data - Text node processed as MUTATION_CHARACTER_DATA"), e.fallbackToCharacterData(t)
            }), (function (t, r) {
                return e.processEncryptedTextMutation(t, r)
            }))
        }, t.prototype.serializeInputNodeToEncrypt = function (t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToInputText(t);
            this.encryptAndProcessEvent(t, (function (t) {
                return t.targetValue
            }), (function () {
                It.warn("Fail to encrypt input data - Input node processed as INPUT_TEXT"), e.fallbackToInputText(t)
            }), (function (t, r) {
                return e.processEncryptedInputText(t, r)
            }))
        }, t.prototype.encryptAndProcessEvent = function (t, e, r, i) {
            return ue(this, void 0, void 0, (function () {
                var n, o;
                return pe(this, (function (s) {
                    switch (s.label) {
                        case 0:
                            return n = e(t), [4, this.encryption.encrypt(this.publicKey, n)];
                        case 1:
                            return (o = s.sent()) ? (i(t, o), [2]) : (r(t), [2])
                    }
                }))
            }))
        }, t.prototype.fallbackToCharacterData = function (t) {
            var e = t.targetId, r = t.serializedTextData, i = t.date;
            this.onTextNodeToEncryptCallback({date: i, args: [e, r], type: Qt.MUTATION_CHARACTER_DATA})
        }, t.prototype.fallbackToInputText = function (t) {
            var e = t.targetId, r = t.targetValue, i = t.date;
            this.onInputNodeToEncryptCallback({
                date: i,
                args: [e, csString.prototype.replace.call(r, /\S/g, "•")],
                type: Qt.INPUT_TEXT
            })
        }, t.prototype.processEncryptedTextMutation = function (t, e) {
            var r = t.targetId, i = t.serializedTextData, n = t.date;
            this.onTextNodeToEncryptCallback({
                date: n,
                args: [r, i, e, this.projectConfiguration.recordingEncryptionPublicKeyId],
                type: Qt.MUTATION_ENCRYPTED_CHARACTER_DATA
            })
        }, t.prototype.processEncryptedInputText = function (t, e) {
            var r = t.targetId, i = t.targetValue, n = t.date;
            this.onInputNodeToEncryptCallback({
                date: n,
                args: [r, csString.prototype.replace.call(i, /\S/g, "•"), e, this.projectConfiguration.recordingEncryptionPublicKeyId],
                type: Qt.INPUT_ENCRYPTED_TEXT
            })
        }, t
    }();
    !function (t) {
        t[t.SPACE = 0] = "SPACE", t[t.ENTER = 1] = "ENTER", t[t.BACKSPACE = 2] = "BACKSPACE", t[t.DELETE = 3] = "DELETE", t[t.ARROWUP = 4] = "ARROWUP", t[t.ARROWDOWN = 5] = "ARROWDOWN", t[t.ARROWLEFT = 6] = "ARROWLEFT", t[t.ARROWRIGHT = 7] = "ARROWRIGHT", t[t.CAPSLOCK = 8] = "CAPSLOCK", t[t.SHIFT = 9] = "SHIFT", t[t.TAB = 10] = "TAB", t[t.ALPHANUMERICAL = 11] = "ALPHANUMERICAL", t[t.ESCAPE = 12] = "ESCAPE", t[t.END = 13] = "END", t[t.ALT = 14] = "ALT", t[t.CTRL = 15] = "CTRL", t[t.META = 16] = "META"
    }(se || (se = {})), function (t) {
        t[t.COPY = 0] = "COPY", t[t.CUT = 1] = "CUT", t[t.PASTE = 2] = "PASTE"
    }(ae || (ae = {}));
    var he = function () {
        return (he = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, fe = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, de = function () {
        function t(e, r, i, n) {
            var o = this;
            this.selector = e, this.nodeIdentifier = r, this.sensitiveContent = i, this.encryptionService = n, this.documents = [], this.onEventCallbacks = [], this.eventHandlers = [{
                type: "change",
                listener: this.selector.on(t.whiteListedCheckableInputsSelector, (function (t) {
                    return o.inputCheckableListener(csEventtarget.apply(t))
                }))
            }, {
                type: "change", listener: this.selector.on("select", (function (t) {
                    return o.inputSelectListener(csEventtarget.apply(t))
                }))
            }, {
                type: "keyup", listener: this.selector.on(t.whiteListedTextInputSelector, (function (t) {
                    return o.inputTextListener(csEventtarget.apply(t))
                }))
            }, {
                type: "scroll", listener: function (t) {
                    return o.scrollListener(csEventtarget.apply(t))
                }
            }, {
                type: "mouseover", listener: function (t) {
                    return o.mouseOverListener(t)
                }
            }, {
                type: "click", listener: function (t) {
                    return o.clickListener(t)
                }
            }, {
                type: "mousedown", listener: function (t) {
                    return o.mouseDownListener(t)
                }
            }, {
                type: "mouseup", listener: function (t) {
                    return o.mouseUpListener(t)
                }
            }, {
                type: "keyup", listener: function (t) {
                    return o.keyUpListener(t)
                }
            }, {
                type: "keydown", listener: function (t) {
                    return o.keyDownListener(t)
                }
            }, {
                type: "paste", listener: function (t) {
                    return o.pasteListener(t)
                }
            }, {
                type: "cut", listener: function (t) {
                    return o.cutListener(t)
                }
            }, {
                type: "copy", listener: function (t) {
                    return o.copyListener(t)
                }
            }]
        }

        return t.prototype.init = function () {
            var t = this;
            this.initKeyStrokesMap(), this.initSubscribers(), this.encryptionService.onInputNodeToEncrypt((function (e) {
                return t.triggerCallbacks(e)
            }))
        }, t.prototype.initSubscribers = function () {
            var t = this;
            this.nodeIdentifier.onIdentifierAdded((function (e) {
                E(e) && t.bindHandlers(e)
            })), this.nodeIdentifier.onIdentifierRemoved((function (e) {
                E(e) && t.unbindHandlers(e)
            }))
        }, t.prototype.onEvent = function (t) {
            csArray.prototype.push.call(this.onEventCallbacks, (function (e) {
                e.date = B.now(), t(e)
            }))
        }, t.prototype.triggerCallbacks = function (t) {
            csArray.prototype.forEach.call(this.onEventCallbacks, (function (e) {
                return e(t)
            }))
        }, t.prototype.start = function () {
            this.triggerInitialEvents()
        }, t.prototype.stop = function () {
            this.unbindAllHandlers()
        }, t.prototype.bindHandlers = function (t) {
            -1 === csArray.prototype.indexOf.call(this.documents, t) && (csArray.prototype.push.call(this.documents, t), csArray.prototype.forEach.call(this.eventHandlers, (function (e) {
                return ne(he({boundElement: t}, e))
            })))
        }, t.prototype.unbindHandlers = function (t) {
            this.documents = csArray.prototype.filter.call(this.documents, (function (e) {
                return e !== t
            })), csArray.prototype.forEach.call(this.eventHandlers, (function (e) {
                return oe(he({boundElement: t}, e))
            }))
        }, t.prototype.unbindAllHandlers = function () {
            var t = this;
            csArray.prototype.forEach.call(this.documents, (function (e) {
                return t.unbindHandlers(e)
            }))
        }, t.prototype.triggerInitialEvents = function () {
            this.initialTextInputListener(), this.initialScrollListener(), this.initialSelectListener(), this.initialCheckableListener()
        }, t.prototype.initialTextInputListener = function () {
            for (var e = document.querySelectorAll(t.whiteListedTextInputSelector), r = 0; r < e.length; r += 1) {
                var i = e.item(r);
                i.value.length > 0 && this.inputTextListener(i)
            }
        }, t.prototype.initialScrollListener = function () {
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e += 1) {
                var r = t[e], i = this.getScrollPosition(r), n = i.top, o = i.left;
                0 === n && 0 === o || this.scrollListener(r)
            }
        }, t.prototype.initialSelectListener = function () {
            for (var t = document.getElementsByTagName("select"), e = 0; e < t.length; e += 1) this.inputSelectListener(t[e])
        }, t.prototype.initialCheckableListener = function () {
            for (var e = document.querySelectorAll(t.whiteListedCheckableInputsSelector), r = 0; r < e.length; r += 1) this.inputCheckableListener(e[r])
        }, t.prototype.getScrollPosition = function (t) {
            return t === document ? {top: window.pageYOffset, left: window.pageXOffset} : {
                top: t.scrollTop,
                left: t.scrollLeft
            }
        }, t.prototype.scrollListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t, (function (r) {
                if (!e.sensitiveContent.isSensitiveElementNode(t)) {
                    var i = e.getScrollPosition(t);
                    e.triggerCallbacks({type: Qt.SCROLL, args: [r, i.left, i.top]})
                }
            }))
        }, t.prototype.mouseOverListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t.target, (function (t) {
                e.triggerCallbacks({type: Qt.MOUSE_OVER, args: [t]})
            }))
        }, t.prototype.clickListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t.target, (function (t) {
                e.triggerCallbacks({type: Qt.CLICK, args: [t]})
            }))
        }, t.prototype.mouseDownListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (r) {
                e.triggerCallbacks({type: Qt.MOUSE_DOWN, args: [r, t.button, {pageX: t.pageX, pageY: t.pageY}]})
            }))
        }, t.prototype.mouseUpListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (r) {
                e.triggerCallbacks({type: Qt.MOUSE_UP, args: [r, t.button]})
            }))
        }, t.prototype.inputCheckableListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t, (function (r) {
                e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                    type: Qt.INPUT_CHECKABLE,
                    args: [r, t.checked]
                })
            }))
        }, t.prototype.inputSelectListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t, (function (r) {
                e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                    type: Qt.INPUT_SELECT,
                    args: [r, t.selectedIndex]
                })
            }))
        }, t.prototype.inputTextListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t, (function (r) {
                e.sensitiveContent.isSensitiveElementNode(t) || (t.hasAttribute("data-cs-encrypt") ? e.encryptionService.registerInputNodeToEncrypt({
                    targetId: r,
                    targetValue: t.value,
                    date: B.now()
                }) : e.triggerCallbacks({
                    type: Qt.INPUT_TEXT,
                    args: [r, csString.prototype.replace.call(t.value, /\S/g, "•")]
                }))
            }))
        }, t.prototype.keyUpListener = function (t) {
            var e = this, r = this.keyStrokeMap[t.key];
            void 0 !== r && this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (t) {
                e.triggerCallbacks({type: Qt.KEY_UP, args: [t, r]})
            }))
        }, t.prototype.keyDownListener = function (t) {
            var e = this, r = this.keyStrokeMap[t.key];
            void 0 !== r && this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (t) {
                e.triggerCallbacks({type: Qt.KEY_DOWN, args: [t, r]})
            }))
        }, t.prototype.copyListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (t) {
                e.triggerCallbacks({type: Qt.CLIPBOARD_COMMAND, args: [t, ae.COPY]})
            }))
        }, t.prototype.cutListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (t) {
                e.triggerCallbacks({type: Qt.CLIPBOARD_COMMAND, args: [t, ae.CUT]})
            }))
        }, t.prototype.pasteListener = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function (t) {
                e.triggerCallbacks({type: Qt.CLIPBOARD_COMMAND, args: [t, ae.PASTE]})
            }))
        }, t.prototype.initKeyStrokesMap = function () {
            this.keyStrokeMap = {}, this.keyStrokeMap[" "] = se.SPACE, this.keyStrokeMap.Spacebar = se.SPACE, this.keyStrokeMap.Backspace = se.BACKSPACE, this.keyStrokeMap.Enter = se.ENTER, this.keyStrokeMap.Delete = se.DELETE, this.keyStrokeMap.ArrowUp = se.ARROWUP, this.keyStrokeMap.ArrowDown = se.ARROWDOWN, this.keyStrokeMap.ArrowLeft = se.ARROWLEFT, this.keyStrokeMap.ArrowRight = se.ARROWRIGHT, this.keyStrokeMap.Up = se.ARROWUP, this.keyStrokeMap.Down = se.ARROWDOWN, this.keyStrokeMap.Left = se.ARROWLEFT, this.keyStrokeMap.Right = se.ARROWRIGHT, this.keyStrokeMap.CapsLock = se.CAPSLOCK, this.keyStrokeMap.Shift = se.SHIFT, this.keyStrokeMap.Tab = se.TAB, this.keyStrokeMap.Escape = se.ESCAPE, this.keyStrokeMap.Esc = se.ESCAPE, this.keyStrokeMap.End = se.END, this.keyStrokeMap.Alt = se.ALT, this.keyStrokeMap.Control = se.CTRL, this.keyStrokeMap.Meta = se.META
        }, t.whiteListedTextInputSelector = csArray.prototype.join.call(["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]'], ","), t.whiteListedCheckableInputsSelector = csArray.prototype.join.call(['input[type="checkbox"]', 'input[type="radio"]'], ","), fe([Ot("scroll")], t.prototype, "scrollListener", null), fe([Ot("mouseOver")], t.prototype, "mouseOverListener", null), fe([Ot("click")], t.prototype, "clickListener", null), fe([Ot("mousedown")], t.prototype, "mouseDownListener", null), fe([Ot("mouseup")], t.prototype, "mouseUpListener", null), fe([Ot("checkable")], t.prototype, "inputCheckableListener", null), fe([Ot("select")], t.prototype, "inputSelectListener", null), fe([Ot("text")], t.prototype, "inputTextListener", null), fe([Ot("Event handler type: keyup")], t.prototype, "keyUpListener", null), fe([Ot("Event handler type: keydown")], t.prototype, "keyDownListener", null), fe([Ot("Event handler type: copy")], t.prototype, "copyListener", null), fe([Ot("Event handler type: cut")], t.prototype, "cutListener", null), fe([Ot("Event handler type: paste")], t.prototype, "pasteListener", null), t
    }(), ye = function () {
        function t(t, e, r, i, n) {
            var o = this;
            this.mutationSerializer = t, this.mutationObserver = e, this.staticResourceUrlTracker = r, this.lifeCycleEventsEmitter = i, this.configuration = n, this.mutationObserver.onCharacterDataMutation((function (t) {
                o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapCharacterData(t) : o.characterDataMutation(t)
            })), this.mutationObserver.onAttributesMutation((function (t) {
                o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapAttributesMutation(t) : o.attributesMutation(t)
            })), this.mutationObserver.onChildListMutation((function (t) {
                o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapChildList(t) : o.childListMutation(t)
            })), this.mutationObserver.onAttachShadowMutation((function (t) {
                o.mutationSerializer.isSerializationInProgress(), o.attachShadowEvent(t)
            }))
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            this.mutationObserver.start(), this.recordInitialDom()
        }, t.prototype.stop = function () {
            this.mutationObserver.stop()
        }, t.prototype.getDocument = function () {
            return document
        }, t.prototype.shouldSerializeAsync = function () {
            return "Promise" in window && "findIndex" in csArray.prototype && this.configuration.asyncSerializerEnabled
        }, t.prototype.recordInitialDom = function () {
            var t = this, e = this.getDocument();
            if (this.shouldSerializeAsync()) this.mutationSerializer.serializeDocumentAsync(e).then((function (e) {
                t.onEventCallback({
                    args: e,
                    date: B.now(),
                    type: Qt.INITIAL_DOM
                }), t.lifeCycleEventsEmitter.emitInitialDomDone(e)
            })).catch((function (t) {
                It.error(t)
            })); else {
                var r = this.mutationSerializer.serializeDocumentSync(e);
                this.onEventCallback({
                    args: r,
                    date: B.now(),
                    type: Qt.INITIAL_DOM
                }), this.lifeCycleEventsEmitter.emitInitialDomDone(r)
            }
        }, t.prototype.attachShadowEvent = function (t) {
            var e = this.mutationSerializer.serializeAttachShadowEvent(t);
            e && this.onEventCallback({args: e, date: t.date, type: Qt.ATTACH_SHADOW})
        }, t.prototype.attributesMutation = function (t) {
            var e = this.mutationSerializer.serializeMutationAttribute(t);
            e && (this.onEventCallback({
                args: e,
                date: t.date,
                type: Qt.MUTATION_ATTRIBUTE
            }), this.staticResourceUrlTracker.scanAttribute(t.target, t.attributeName))
        }, t.prototype.characterDataMutation = function (t) {
            var e = this.mutationSerializer.serializeMutationCharacterData(t);
            e && (this.onEventCallback({
                args: e,
                date: t.date,
                type: Qt.MUTATION_CHARACTER_DATA
            }), this.staticResourceUrlTracker.scanText(t.target))
        }, t.prototype.childListMutation = function (t) {
            var e = this, r = this.mutationSerializer.serializeMutationChildList(t);
            if (r) {
                var i = r.removedNodes, n = r.addedNodes;
                csArray.prototype.forEach.call(i, (function (r) {
                    e.onEventCallback({args: r, date: t.date, type: Qt.MUTATION_REMOVE})
                })), csArray.prototype.forEach.call(n, (function (r) {
                    e.onEventCallback({args: r, date: t.date, type: Qt.MUTATION_INSERT})
                }))
            }
        }, t
    }(), ve = function () {
        function t(t) {
            this.storageCharsUsed = 0, this.maxStoredChars = 0, this.maxStoredChars = t / 2
        }

        return t.prototype.add = function (t) {
            this.storageCharsUsed += t.length
        }, t.prototype.isThresholdReached = function () {
            return this.storageCharsUsed > this.maxStoredChars
        }, t.prototype.reset = function () {
            this.storageCharsUsed = 0
        }, t
    }(), ge = function () {
        function t(t, e, r) {
            void 0 === t && (t = []), void 0 === e && (e = {}), void 0 === r && (r = 512e3), this.events = t, this.requestParameters = e, this.sizeCounter = new ve(r)
        }

        return t.prototype.addEvent = function (t) {
            this.sizeCounter.add(csJSON.stringify(t)), csArray.prototype.push.call(this.events, t)
        }, t.prototype.eventsCount = function () {
            return this.events.length
        }, t.prototype.clearEvents = function () {
            this.sizeCounter.reset(), this.events = []
        }, t.prototype.isFull = function () {
            return this.sizeCounter.isThresholdReached() || this.eventsCount() >= 100
        }, t.prototype.setRequestParametersFromProvider = function (t) {
            var e = t.getRequestParameters();
            for (var r in e) e.hasOwnProperty(r) && (this.requestParameters[r] = e[r])
        }, t.prototype.removeRequestParameter = function (t) {
            this.requestParameters.hasOwnProperty(t) && delete this.requestParameters[t]
        }, t.prototype.getEvents = function () {
            return this.events
        }, t.prototype.getRequestPayload = function () {
            return csJSON.stringify(this.events)
        }, t.prototype.getRequestParameters = function () {
            return this.requestParameters
        }, t
    }(), me = function () {
        function t() {
            this.index = 1
        }

        return t.prototype.increment = function () {
            this.index += 1
        }, t.prototype.reset = function () {
            this.index = 1
        }, t.prototype.getRequestParameters = function () {
            return {ri: "" + this.index}
        }, t
    }(), Se = function () {
        function t() {
        }

        return t.prototype.emit = function (e, r) {
            var i = t.prefix + "." + e, n = t.createEvent(i, {detail: r});
            null !== n && document.dispatchEvent(n)
        }, t.createEvent = function (t, e) {
            if (void 0 === e && (e = {}), "function" == typeof CustomEvent) return new CustomEvent(t, e);
            var r = this.tryToCreateCustomEvent();
            if (null === r) return null;
            var i = e.bubbles, n = void 0 !== i && i, o = e.cancelable, s = void 0 !== o && o, a = e.detail;
            return r.initCustomEvent(t, n, s, a), r
        }, t.tryToCreateCustomEvent = function () {
            try {
                return document.createEvent("CustomEvent")
            } catch (t) {
                return null
            }
        }, t.prefix = "cs.tracking", t
    }(), Ee = function () {
        function t() {
            this.isStarted = !1
        }

        return t.prototype.start = function () {
            this.isStarted || (this.isStarted = !0, this.onStart())
        }, t.prototype.stop = function () {
            this.isStarted && (this.isStarted = !1, this.onStop())
        }, t.prototype.restart = function () {
            this.stop(), this.start()
        }, t
    }(), be = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), we = function () {
        return (we = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, Ce = function (t) {
        function e(e, r, i, n, o, s, a, c, u, p, l, h, f, d, y, v, g, m) {
            var S = t.call(this) || this;
            return S.configuration = e, S.recordingRequest = r, S.recordingBatch = i, S.requestParameters = n, S.requestIndex = o, S.styleSheetRuleTracker = s, S.recordingMutationsTracker = a, S.recordingPageEventsTracker = c, S.recordingBrowserEventsTracker = u, S.sessionRenewer = p, S.staticResourceUrlTracker = l, S.recordingPerformanceTimingsTracker = h, S.javaScriptErrorsTracker = f, S.javaScriptErrorsAnonymizer = d, S.apiErrorsTracker = y, S.textVisibilityTracker = v, S.apiErrorsAnonymizer = g, S.encryptionService = m, S.javaScriptErrorsCount = 0, S.apiErrorsCount = 0, S.eventEmitter = new Se, S.canSendEvents = !0, S.onEvent = function (t) {
                return S.processEvent(t)
            }, S
        }

        return be(e, t), e.prototype.init = function () {
            this.bindRecordingRequest(), this.bindTrackers()
        }, e.prototype.bindRecordingRequest = function () {
            var t = this;
            this.recordingRequest.setRequestPayloadProvider(this.recordingBatch), this.recordingRequest.setRequestParametersProviders(this.recordingBatch), this.recordingRequest.afterProvidersCalled((function () {
                t.recordingBatch.clearEvents(), t.requestIndex.increment(), t.recordingBatch.setRequestParametersFromProvider(t.requestParameters)
            }))
        }, e.prototype.bindTrackers = function () {
            var t = this;
            this.styleSheetRuleTracker.onEvent(this.onEvent), this.recordingMutationsTracker.onEvent(this.onEvent), this.recordingBrowserEventsTracker.onEvent(this.onEvent), this.recordingPageEventsTracker.onEvent(this.onEvent), this.staticResourceUrlTracker.onEvent(this.onEvent), this.recordingPerformanceTimingsTracker.onEvent(this.onEvent), this.textVisibilityTracker.onEvent(this.onEvent), this.javaScriptErrorsTracker.onEvent((function (e) {
                return t.processJavascriptError(e)
            })), this.apiErrorsTracker.onEvent((function (e) {
                return t.processApiError(e)
            })), this.encryptionService.onTextNodeToEncrypt(this.onEvent)
        }, e.prototype.blockSendingEvents = function () {
            this.canSendEvents = !1
        }, e.prototype.allowSendingEvents = function () {
            this.canSendEvents = !0
        }, e.prototype.processEvent = function (t) {
            this.sessionRenewer.isSessionValid() && (this.recordingBatch.addEvent(t), this.recordingBatch.isFull() && this.pushEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("recordingEvent", we(we({}, t), {typeName: Qt[t.type]})))
        }, e.prototype.onStart = function () {
            this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.recordingPerformanceTimingsTracker.start(), this.styleSheetRuleTracker.start(), this.textVisibilityTracker.start(), this.recordingMutationsTracker.start(), this.recordingBrowserEventsTracker.start(), this.configuration.jsErrorsEnabled && this.javaScriptErrorsTracker.start(), this.configuration.apiErrorsEnabled && this.apiErrorsTracker.start(), this.configuration.emitDebugEvents && this.eventEmitter.emit("replayRecordingStarted")
        }, e.prototype.onStop = function () {
            this.styleSheetRuleTracker.stop(), this.recordingMutationsTracker.stop(), this.recordingBrowserEventsTracker.stop(), this.recordingPageEventsTracker.stop(), this.javaScriptErrorsTracker.stop(), this.apiErrorsTracker.stop(), this.textVisibilityTracker.stop()
        }, e.prototype.clearStates = function () {
            this.pushEvents(), this.requestIndex.reset(), this.removeEtrRequestParameters(), this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.javaScriptErrorsCount = 0, this.apiErrorsCount = 0
        }, e.prototype.pushEvents = function () {
            this.textVisibilityTracker.flushEvents(), this.recordingBatch.eventsCount() > 0 && this.canSendEvents && (this.isStarted ? this.recordingRequest.send() : this.recordingBatch.clearEvents())
        }, e.prototype.processApiError = function (t) {
            this.apiErrorsCount < e.MAX_API_ERROR_COUNT && (this.onEvent({
                type: Qt.API_ERROR,
                date: B.now(),
                args: [this.apiErrorsAnonymizer.anonymize(t)]
            }), this.apiErrorsCount = this.apiErrorsCount + 1)
        }, e.prototype.processJavascriptError = function (t) {
            this.javaScriptErrorsCount < e.MAX_JAVASCRIPT_ERROR_COUNT && (this.onEvent({
                type: Qt.JAVASCRIPT_ERROR,
                date: B.now(),
                args: [this.javaScriptErrorsAnonymizer.anonymize(t)]
            }), this.javaScriptErrorsCount = this.javaScriptErrorsCount + 1)
        }, e.prototype.setEtrRequestParameters = function (t) {
            this.isStarted && (t === Ut.ETR_SESSION ? this.recordingBatch.setRequestParametersFromProvider({
                getRequestParameters: function () {
                    var t;
                    return (t = {})[e.ETRS_PARAMETER] = e.ETR_ACTIVE, t
                }
            }) : t === Ut.ETR_PAGE && this.recordingBatch.setRequestParametersFromProvider({
                getRequestParameters: function () {
                    var t;
                    return (t = {})[e.ETRP_PARAMETER] = e.ETR_ACTIVE, t
                }
            }))
        }, e.prototype.removeEtrRequestParameters = function () {
            this.recordingBatch.removeRequestParameter(e.ETRP_PARAMETER), this.recordingBatch.removeRequestParameter(e.ETRS_PARAMETER)
        }, e.prototype.clearEvents = function () {
            this.recordingBatch.clearEvents()
        }, e.prototype.onCustomErrorEvent = function (t) {
            this.processJavascriptError(t)
        }, e.prototype.onPageEvent = function (t) {
            this.triggerPageEvent(t)
        }, e.prototype.onEventTriggerRecording = function (t, e) {
            this.setEtrRequestParameters(e), this.triggerPageEvent(t)
        }, e.prototype.triggerPageEvent = function (t) {
            this.recordingBatch.addEvent({
                type: Qt.PAGE_EVENT,
                date: B.now(),
                args: [{eventName: csString.prototype.slice.call(t, 0, e.MAX_PAGE_EVENT_LENGTH)}]
            })
        }, e.prototype.triggerConsentGranted = function () {
            this.recordingBatch.addEvent({date: B.now(), type: Qt.CONSENT_GRANTED})
        }, e.prototype.triggerConsentWithdrawn = function () {
            this.recordingBatch.addEvent({date: B.now(), type: Qt.CONSENT_WITHDRAWN})
        }, e.MAX_PAGE_EVENT_LENGTH = 255, e.MAX_JAVASCRIPT_ERROR_COUNT = 20, e.MAX_API_ERROR_COUNT = 20, e.ETRP_PARAMETER = "etrp", e.ETRS_PARAMETER = "etrs", e.ETR_ACTIVE = "1", e
    }(Ee), Te = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Re = function () {
        return (Re = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, ke = function (t) {
        function e(e, r, i, n, o) {
            var s = t.call(this) || this;
            return s.recordingRecoveryRequest = e, s.recordingBatch = r, s.recoveryStorage = i, s.configuration = n, s.lastMessageBeaconRequest = o, s.pageChangeHandler = function () {
                try {
                    var t = Re({}, s.recordingBatch.getRequestParameters());
                    if (!s.hasValidRecordingType(t.rt)) return;
                    if (s.sendLastMessageBeacon(), 0 === s.recordingBatch.eventsCount()) return;
                    s.configuration.useMalkaPipeline && (t.hlm = "true"), s.recoveryStorage.save({
                        metadata: t,
                        events: s.recordingBatch.getEvents()
                    })
                } catch (t) {
                }
            }, s
        }

        return Te(e, t), e.prototype.onStart = function () {
            this.addPageChangeListener()
        }, e.prototype.onStop = function () {
            this.removePageChangeListener()
        }, e.prototype.recover = function () {
            this.sendPersistedRecordings()
        }, e.prototype.sendPersistedRecordings = function () {
            var t = this, e = this.recoveryStorage.recover(), r = e.rawBatches, i = e.recoveredSize;
            if (0 !== r.length) {
                var n = csArray.prototype.map.call(csArray.prototype.filter.call(r, (function (e) {
                    var r = e.metadata;
                    return t.hasValidRecordingType(r.rt)
                })), (function (e) {
                    var r = e, i = r.metadata, n = r.events, o = new ge(n, i);
                    return t.recordingRecoveryRequest.setRequestPayloadProvider(o), t.recordingRecoveryRequest.setRequestParametersProviders(o), t.recordingRecoveryRequest.send(), e
                }));
                i > 1048576 && It.warn("\n        Size of data retrieved from local storage " + i + " exceeds 1048576.\n        Number of tabs saved in local storage: " + n.length + "\n      ")
            }
        }, e.prototype.sendLastMessageBeacon = function () {
            this.configuration.useMalkaPipeline && this.lastMessageBeaconRequest.send()
        }, e.prototype.addPageChangeListener = function () {
            window.addEventListener("pagehide", this.pageChangeHandler)
        }, e.prototype.removePageChangeListener = function () {
            window.removeEventListener("pagehide", this.pageChangeHandler)
        }, e.prototype.hasValidRecordingType = function (t) {
            return !this.configuration.useMalkaPipeline || !!t && -1 === csString.prototype.indexOf.call(t, Dt.TEMPORARILY_RECORDED)
        }, e
    }(Ee), Ae = /[^\s]/g;

    function Pe(t) {
        return csString.prototype.replace.call(t, Ae, "a")
    }

    var Ie, Oe, _e = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, Ne = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, Me = function () {
        function t(t, e, r, i, n, o, s, a) {
            this.consentService = t, this.domSerializer = e, this.nodeIdentifier = r, this.sensitiveContent = i, this.anonymization = n, this.encryptionService = o, this.configuration = s, this.urlService = a, this.serializationInProgress = !1
        }

        return t.prototype.init = function () {
            this.resetAnonymization()
        }, t.prototype.isSerializationInProgress = function () {
            return this.serializationInProgress
        }, t.prototype.updateNodeMapCharacterData = function (t) {
            var e = this.serializeMutationCharacterData(t);
            this.domSerializer.updateTextNode(e)
        }, t.prototype.updateNodeMapAttributesMutation = function (t) {
            var e = this.serializeMutationAttribute(t);
            this.domSerializer.updateAttribute(e, this.useAnonymization)
        }, t.prototype.updateNodeMapChildList = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t.target, (function (r) {
                var i = e.serializeMutationChildList(t);
                i && e.domSerializer.updateChildren(r, i)
            }))
        }, t.prototype.serializeDocumentSync = function (t) {
            return this.nodeIdentifier.setAsyncSerializationMode(!1), [this.domSerializer.serialize(t, {
                forceChildrenSerialization: !0,
                withAnonymization: this.useAnonymization
            })]
        }, t.prototype.serializeDocumentAsync = function (t) {
            return _e(this, void 0, void 0, (function () {
                return Ne(this, (function (e) {
                    switch (e.label) {
                        case 0:
                            this.serializationInProgress = !0, e.label = 1;
                        case 1:
                            return e.trys.push([1, , 3, 4]), [4, this.domSerializer.startSerializeAsync(t, {withAnonymization: this.useAnonymization})];
                        case 2:
                            return [2, [e.sent()]];
                        case 3:
                            return this.serializationInProgress = !1, [7];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, t.prototype.serializeMutationCharacterData = function (t) {
            var e = this;
            return this.nodeIdentifier.ifIdentified(t.target, (function (r) {
                var i = t.target;
                if (i.data !== t.oldValue) {
                    var n = t.target.parentElement;
                    if (!d(i) || !(null == n ? void 0 : n.hasAttribute("data-cs-encrypt"))) return [r, e.useAnonymization ? e.anonymization.anonymizeTextIfNeeded(i) : i.data];
                    e.encryptionService.registerTextNodeMutationToEncrypt({
                        targetId: r,
                        textNode: i,
                        serializedTextData: Pe(i.data),
                        date: t.date
                    })
                }
            }))
        }, t.prototype.serializeAttachShadowEvent = function (t) {
            var e = t.target, r = t.shadowRoot;
            if (this.nodeIdentifier.hasIdentifier(e) && !this.nodeIdentifier.hasIdentifier(r)) return [this.nodeIdentifier.getId(e), this.domSerializer.serialize(r)]
        }, t.prototype.serializeMutationAttribute = function (t) {
            var e = this, r = t.target, i = t.attributeName, n = t.attributeNamespace;
            return this.nodeIdentifier.ifIdentified(t.target, (function (o) {
                if (!e.sensitiveContent.isSensitiveAttributeName(r, i)) {
                    var s = t.target.getAttributeNS(n, i);
                    if (s !== t.oldValue) return s = e.anonymization.anonymizeAttributeIfNeeded(e.useAnonymization, i, s), [o, n, i, s]
                }
            }))
        }, t.prototype.serializeMutationChildList = function (t) {
            var e = this;
            return this.nodeIdentifier.ifIdentified(t.target, (function (r) {
                if (!e.sensitiveContent.isSensitiveElementNode(t.target)) return {
                    removedNodes: e.serializeRemovedNodes(t),
                    addedNodes: e.serializeAddedNodes(t, r)
                }
            }))
        }, t.prototype.serializeRemovedNodes = function (t) {
            for (var e = [], r = 0; r < t.removedNodes.length; r += 1) {
                var i = this.nodeIdentifier.popId(t.removedNodes[r]);
                i && csArray.prototype.push.call(e, [i])
            }
            return e
        }, t.prototype.serializeUnidentifiedChildNodes = function (t) {
            for (var e = [], r = csNodechildNodes.apply(t), i = this.nodeIdentifier.getId(t), n = 0; n < r.length; n += 1) {
                var o = r[n];
                if (!this.nodeIdentifier.hasIdentifier(o)) {
                    var s = csNodenextSibling.apply(o) ? this.nodeIdentifier.ifIdentified(csNodenextSibling.apply(o), (function (t) {
                        return t
                    })) : null, a = this.domSerializer.serialize(o, {withAnonymization: this.useAnonymization});
                    csArray.prototype.push.call(e, [i, s, a])
                }
            }
            return e
        }, t.prototype.serializeAddedNodes = function (t, e) {
            for (var r = [], i = t.nextSibling ? this.nodeIdentifier.ifIdentified(t.nextSibling, (function (t) {
                return t
            })) : null, n = 0; n < t.addedNodes.length; n += 1) {
                var o = t.addedNodes[n];
                if (this.nodeIdentifier.hasIdentifier(o)) {
                    if (csNodechildNodes.apply(o).length > 0 && !this.sensitiveContent.isSensitiveElementNode(o)) return this.serializeUnidentifiedChildNodes(o)
                } else {
                    var s = this.domSerializer.serialize(o, {withAnonymization: this.useAnonymization});
                    csArray.prototype.push.call(r, [e, i, s])
                }
            }
            return r
        }, t.prototype.resetAnonymization = function () {
            this.useAnonymization = !this.consentService.isAllowedByConsent(), this.useAnonymization ? this.configuration.replayRecordingUnmaskedUrlRegex && this.configuration.replayRecordingUnmaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !1) : this.configuration.replayRecordingMaskedUrlRegex && this.configuration.replayRecordingMaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !0)
        }, t
    }(), Le = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, xe = function () {
        function t(t, e, r) {
            var i = this;
            this.monkeyPatcher = t, this.nodeIdentifier = e, this.staticResourceUrlTracker = r, this.canTrackRuleInsertions() && (this.insertRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                target: window.CSSStyleSheet.prototype,
                methodName: "insertRule",
                hook: function (t) {
                    var e = t.context, r = t.args;
                    return i.sendInsertion(e, r)
                }
            })), this.canTrackStyleDeclarationChanges() && (this.cssTextInterceptor = this.monkeyPatcher.createDescriptorInterceptor(window.CSSStyleDeclaration.prototype, "cssText", (function (t, e) {
                return i.setStyleDeclarationCssText(t, e)
            })))
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            this.insertRuleInterceptor && this.insertRuleInterceptor.activate(), this.cssTextInterceptor && this.cssTextInterceptor.activate()
        }, t.prototype.stop = function () {
            this.insertRuleInterceptor && this.insertRuleInterceptor.deactivate(), this.cssTextInterceptor && this.cssTextInterceptor.deactivate()
        }, t.prototype.setStyleDeclarationCssText = function (t, e) {
            var r = this, i = this.getSyleSheet(t);
            i && i.ownerNode && this.nodeIdentifier.ifIdentified(i.ownerNode, (function (n) {
                var o = r.indexOfRule(i.cssRules, t.parentRule);
                r.onEventCallback({
                    date: B.now(),
                    type: Qt.STYLESHEET_CSS_TEXT_UPDATE,
                    args: [n, o, e]
                }), r.staticResourceUrlTracker.scanCssString(e)
            }))
        }, t.prototype.getSyleSheet = function (t) {
            var e = t.parentRule;
            return e && e.parentStyleSheet
        }, t.prototype.indexOfRule = function (t, e) {
            return csArray.prototype.indexOf.call(csArray.from(t), e)
        }, t.prototype.canTrackRuleInsertions = function () {
            return window.CSSStyleSheet && window.CSSStyleSheet.prototype && "function" == typeof window.CSSStyleSheet.prototype.insertRule
        }, t.prototype.canTrackStyleDeclarationChanges = function () {
            return window.CSSStyleDeclaration && window.CSSStyleDeclaration.prototype && Object.getOwnPropertyDescriptor(window.CSSStyleDeclaration.prototype, "cssText")
        }, t.prototype.sendInsertion = function (t, e) {
            var r = this, i = e[0], n = e[1];
            t.ownerNode && this.nodeIdentifier.ifIdentified(t.ownerNode, (function (t) {
                r.onEventCallback({
                    date: B.now(),
                    type: Qt.STYLESHEET_RULE_INSERT,
                    args: bt(n) ? [t, i, n] : [t, i]
                }), r.staticResourceUrlTracker.scanCssString(i)
            }))
        }, Le([Ot("styleSheetRuleTracker.setStyleDeclarationCssText")], t.prototype, "setStyleDeclarationCssText", null), Le([Ot("styleSheetRuleTracker.sendInsertion")], t.prototype, "sendInsertion", null), t
    }(), De = function () {
        function t() {
        }

        return t.prototype.beforeSerialize = function (t, e) {
            return t
        }, t.prototype.beforeSerializeChildren = function (t, e, r) {
            return e
        }, t.prototype.beforeSerializeAttributes = function (t, e, r) {
            return e
        }, t.prototype.serializeNode = function (t, e, r) {
            return e
        }, t.prototype.afterSerialize = function (t, e, r) {
            return e
        }, t.prototype.afterSerializeShadowRoot = function (t, e, r) {
            return e
        }, t.prototype.serializeElementNode = function (t, e, r) {
            return e
        }, t.prototype.serializeAttribute = function (t, e, r, i) {
            return r
        }, t.prototype.serializeTextNode = function (t, e, r) {
            return e
        }, t.prototype.serializeCDATASectionNode = function (t, e, r) {
            return e
        }, t.prototype.serializeCommentNode = function (t, e, r) {
            return e
        }, t.prototype.serializeDoctypeNode = function (t, e, r) {
            return e
        }, t.prototype.serializeDocumentNode = function (t, e, r) {
            return e
        }, t.prototype.serializeShadowRootNode = function (t, e, r) {
            return e
        }, t
    }(), Ve = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };
    (Oe = Ie || (Ie = {})).getShadowRoot = function (t) {
        return Tt(t) ? csElementshadowRoot.apply(t) : null
    }, Oe.getAllShadowHosts = function t(e) {
        for (var r, i, n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, null, !1), o = []; i = n.nextNode();) csElementshadowRoot.apply(i) && (r = csArray.prototype.push).call.apply(r, Ve([o, i], t(i.shadowRoot)));
        return o
    };
    var Ue, qe = function () {
            function t() {
                this.internalMap = {}
            }

            return t.prototype.set = function (t, e) {
                this.internalMap[t] = e
            }, t.prototype.get = function (t) {
                return this.internalMap[t]
            }, t.prototype.delete = function (t) {
                delete this.internalMap[t]
            }, t.prototype.clear = function () {
                this.internalMap = {}
            }, t
        }(), ze = function () {
            var t = function (e, r) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(e, r)
            };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), je = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.identifierAddedHandlers = [], e.identifierRemovedHandlers = [], e.currentCsId = 1, e.serializationMap = "Map" in window ? new Map : new qe, e.defaultOptions = {}, e.asyncSerialization = !0, e
            }

            return ze(e, t), e.prototype.setAsyncSerializationMode = function (t) {
                this.asyncSerialization = t
            }, e.prototype.registerNodeInMap = function (t, e) {
                var r = t.csId;
                this.serializationMap.set(r, {serializedNode: t, options: e})
            }, e.prototype.clearMap = function () {
                this.serializationMap.clear()
            }, e.prototype.deleteNode = function (t) {
                this.serializationMap.delete(t)
            }, e.prototype.setDefaultSerializationOptions = function (t) {
                this.defaultOptions = t
            }, e.prototype.getNodeFromMap = function (t) {
                var e;
                return null === (e = this.serializationMap.get(t)) || void 0 === e ? void 0 : e.serializedNode
            }, e.prototype.getOptionsFromMap = function (t) {
                var e, r = this.getId(t);
                return r && (null === (e = this.serializationMap.get(r)) || void 0 === e ? void 0 : e.options) || this.defaultOptions
            }, e.prototype.getNodeFromMapByNode = function (t) {
                var e = this.getId(t);
                if (e) return this.getNodeFromMap(e)
            }, e.prototype.beforeSerialize = function (t, e) {
                return e.forceChildrenSerialization && this.popId(t), t
            }, e.prototype.beforeSerializeChildren = function (t, e) {
                var r = this;
                return csArray.prototype.filter.call(e, (function (t) {
                    return !r.hasIdentifier(t)
                }))
            }, e.prototype.serializeNode = function (t, e) {
                var r = this.currentCsId;
                return this.currentCsId += 1, t.__contentsquare_identifier = r, e.csId = r, this.notifySubscribers(this.identifierAddedHandlers, t), e
            }, e.prototype.afterSerialize = function (t, e, r) {
                return this.asyncSerialization && this.registerNodeInMap(e, r), e
            }, e.prototype.afterSerializeShadowRoot = function (t, e, r) {
                return this.asyncSerialization && this.registerNodeInMap(e, r), e
            }, e.prototype.ifIdentified = function (t, e) {
                if (this.hasIdentifier(t)) return e(this.getId(t))
            }, e.prototype.getId = function (t) {
                return t.__contentsquare_identifier
            }, e.prototype.onIdentifierAdded = function (t) {
                csArray.prototype.push.call(this.identifierAddedHandlers, t)
            }, e.prototype.onIdentifierRemoved = function (t) {
                csArray.prototype.push.call(this.identifierRemovedHandlers, t)
            }, e.prototype.popId = function (t) {
                var e = this.getId(t);
                delete t.__contentsquare_identifier, this.notifySubscribers(this.identifierRemovedHandlers, t);
                for (var r = csNodefirstChild.apply(t); null !== r; r = csNodenextSibling.apply(r)) this.popId(r);
                var i = Ie.getShadowRoot(t);
                return i && this.popId(i), e
            }, e.prototype.hasIdentifier = function (t) {
                return "__contentsquare_identifier" in t
            }, e.prototype.notifySubscribers = function (t, e) {
                for (var r = 0, i = t; r < i.length; r++) {
                    (0, i[r])(e)
                }
            }, e
        }(De), Be = function () {
            var t = function (e, r) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(e, r)
            };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), He = ["value", "checked", "src", "data", "alt"], Fe = function (t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.piiMaskingService = e, r
            }

            return Be(e, t), e.prototype.beforeSerializeChildren = function (t, e) {
                return this.isSensitiveElementNode(t) || this.hasSensitiveShadowHost(t) ? [] : e
            }, e.prototype.beforeSerializeAttributes = function (t, e) {
                var r = this;
                return this.isSensitiveElementNode(t) && (csArray.prototype.push.call(e, this.createSensitiveElementDimensionsAttribute(t)), this.isDataCSMaskNeeded(t) && csArray.prototype.push.call(e, document.createAttribute("data-cs-mask"))), csArray.prototype.filter.call(e, (function (e) {
                    return !r.isSensitiveAttributeName(t, e.name)
                }))
            }, e.prototype.isSensitiveElementNode = function (t) {
                return f(t) && (this.piiMaskingService.checkNodeMatch(t) || S(t) || this.isSensitiveImageElement(t))
            }, e.prototype.isSensitiveAttributeName = function (t, e) {
                return this.piiMaskingService.checkAttributeMatch(t, e) || this.isSensitiveElementNode(t) && -1 !== csArray.prototype.indexOf.call(He, e) || this.isSensitiveInputValue(t, e)
            }, e.prototype.hasSensitiveShadowHost = function (t) {
                return function (t) {
                    return E(t) && "host" in t && "mode" in t
                }(t) && this.isSensitiveElementNode(t.host)
            }, e.prototype.isSensitiveImageElement = function (t) {
                return !!v(t) && V(t.src, "data:")
            }, e.prototype.isSensitiveInputValue = function (t, e) {
                return m(t) && "value" === e && "button" !== t.getAttribute("type")
            }, e.prototype.isDataCSMaskNeeded = function (t) {
                return !S(t) && !t.hasAttribute("data-cs-mask")
            }, e.prototype.createSensitiveElementDimensionsAttribute = function (t) {
                var e = t.getBoundingClientRect(), r = document.createAttribute("style");
                return r.value = "width: " + e.width + "px !important; height: " + e.height + "px !important;", r
            }, e
        }(De), Ge = function () {
            var t = function (e, r) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(e, r)
            };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), We = function () {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
            var i = Array(t), n = 0;
            for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
            return i
        },
        Ke = ["id", "class", "style", "src", "srcset", "sizes", "href", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "data-cs-override-id"],
        Xe = function (t) {
            function e(e, r) {
                var i = t.call(this) || this;
                return i.pii = e, i.configuration = r, i.allWhitelistedAttributes = [], i
            }

            return Ge(e, t), e.prototype.init = function () {
                this.allWhitelistedAttributes = We(Ke, this.configuration.whitelistedAttributes)
            }, e.prototype.beforeSerializeChildren = function (t, e, r) {
                return this.isStyleOrWhitelistedElement(t) && (r.withAnonymization = !1), e
            }, e.prototype.serializeNode = function (t, e, r) {
                return e.anonymized = r.withAnonymization, e
            }, e.prototype.serializeAttribute = function (t, e, r, i) {
                r.anonymized = i.withAnonymization;
                var n = this.anonymizeAttributeIfNeeded(i.withAnonymization, e.name, e.value);
                return r.value = this.piiAnonymizeAttributeIfNeeded(e.name, n), r
            }, e.prototype.serializeTextNode = function (t, e, r) {
                return csNodeparentNode.apply(t) && this.isStyleOrWhitelistedElement(csNodeparentNode.apply(t)) ? e.data = t.data : r.withAnonymization ? e.data = Pe(t.data) : e.data = this.pii.anonymize(t.data), e
            }, e.prototype.serializeCDATASectionNode = function (t, e, r) {
                var i = t.data, n = r.withAnonymization ? Pe(i) : i;
                return e.data = this.pii.anonymize(n), e
            }, e.prototype.anonymizeTextIfNeeded = function (t) {
                var e = t.data;
                return csNodeparentNode.apply(t) && this.isStyleOrWhitelistedElement(csNodeparentNode.apply(t)) ? e : Pe(e)
            }, e.prototype.anonymizeAttributeIfNeeded = function (t, e, r) {
                return t && null !== r ? this.isWhitelistedAttribute(e) ? r : "" : r
            }, e.prototype.piiAnonymizeAttributeIfNeeded = function (t, e) {
                return this.isWhitelistedAttribute(t) ? e : this.pii.anonymize(e)
            }, e.prototype.setWhitelistedElementsSelector = function (t) {
                this.whitelistedElementsSelector = t
            }, e.prototype.isWhitelistedAttribute = function (t) {
                return -1 !== csArray.prototype.indexOf.call(this.allWhitelistedAttributes, t)
            }, e.prototype.isWhitelistedElement = function (t) {
                return f(t) && (t.hasAttribute("data-cs-capture") || this.elementMatchesWhitelistedSelectors(t))
            }, e.prototype.isStyleOrWhitelistedElement = function (t) {
                return g(t) || this.isWhitelistedElement(t)
            }, e.prototype.elementMatchesWhitelistedSelectors = function (t) {
                return !!this.whitelistedElementsSelector && T().call(t, this.whitelistedElementsSelector)
            }, e
        }(De), Ye = function () {
            function t(t) {
                this.prefixStorageName = t;
                var e = csString.prototype.slice.call("" + Math.random(), 2, 8);
                this.storageName = "" + this.prefixStorageName + e
            }

            return t.prototype.save = function (t) {
                localStorage.setItem(this.storageName, csJSON.stringify(t))
            }, t.prototype.recover = function () {
                var t = this, e = 0, r = [];
                return csArray.prototype.forEach.call(this.getStorageKeys(), (function (i) {
                    var n = localStorage.getItem(i);
                    if (null !== n) {
                        e += n.length;
                        var o = t.parseStoredItem(n, i);
                        o && csArray.prototype.push.call(r, o), t.removeItem(i)
                    }
                })), {rawBatches: r, recoveredSize: e}
            }, t.prototype.getStorageKeys = function () {
                for (var t = [], e = 0; e < localStorage.length; e += 1) {
                    var r = localStorage.key(e);
                    r && V(r, this.prefixStorageName) && csArray.prototype.push.call(t, r)
                }
                return t
            }, t.prototype.removeItem = function (t) {
                localStorage.removeItem(t)
            }, t.prototype.parseStoredItem = function (t, e) {
                try {
                    return csJSON.parse(t)
                } catch (r) {
                    return It.error("Invalid item in localStorage.(key:" + e + "; value:" + t + ")"), null
                }
            }, t
        }(), Je = function () {
            return (Je = Object.assign || function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }).apply(this, arguments)
        }, Qe = function () {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }

            return t.prototype.addProvider = function (t) {
                csArray.prototype.push.call(this.requestParametersProviders, t)
            }, t.prototype.getRequestParameters = function () {
                return csArray.prototype.reduce.call(this.requestParametersProviders, (function (t, e) {
                    return Je(Je({}, e.getRequestParameters()), t)
                }), {})
            }, t
        }(), Ze = function () {
            function t(t) {
                this.asyncTaskFactory = t, this.userActive = !1, this.pendingInactivity = null
            }

            return t.prototype.start = function () {
                this.userActive = !0, this.createPendingInactivity()
            }, t.prototype.stop = function () {
                this.userActive = !1, this.clearPendingInactivity()
            }, t.prototype.trackActivity = function () {
                this.userActive || (this.userActive = !0, this.onActivityResumedCallback()), this.clearPendingInactivity(), this.createPendingInactivity()
            }, t.prototype.createPendingInactivity = function () {
                var t = this;
                this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", (function () {
                    t.userActive = !1, t.clearPendingInactivity(), t.onActivityStoppedCallback()
                }), 5e3)
            }, t.prototype.clearPendingInactivity = function () {
                null !== this.pendingInactivity && (this.pendingInactivity.cancel(), this.pendingInactivity = null)
            }, t.prototype.isUserActive = function () {
                return this.userActive
            }, t.prototype.onActivityStopped = function (t) {
                this.onActivityStoppedCallback = t
            }, t.prototype.onActivityResumed = function (t) {
                this.onActivityResumedCallback = t
            }, t
        }(), $e = function () {
            function t(t, e, r) {
                var i = this;
                this.taskName = t, this.task = e, this.timeout = r, this.timeoutId = setTimeout((function () {
                    i.execute()
                }), this.timeout)
            }

            return t.prototype.execute = function () {
                var t = this;
                It.tryToExecute(this.taskName, (function () {
                    t.task()
                }))()
            }, t.prototype.cancel = function () {
                clearTimeout(this.timeoutId)
            }, t
        }(), tr = function () {
            function t() {
            }

            return t.prototype.create = function (t, e, r) {
                return new $e(t, e, r)
            }, t
        }();
    !function (t) {
        function e() {
            var t = [i()];
            return document.documentElement && csArray.prototype.push.call(t, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && csArray.prototype.push.call(t, document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, t)
        }

        function r() {
            return document.documentElement.scrollWidth
        }

        function i() {
            return window.innerHeight
        }

        function n() {
            return window.innerWidth
        }

        function o() {
            var t = window.csScreen.width;
            return mt(t) && t > 0 ? t : window.screen.width
        }

        function s() {
            var t = window.csScreen.height;
            return mt(t) && t > 0 ? t : window.screen.height
        }

        t.documentHeight = e, t.documentWidth = r, t.windowHeight = i, t.windowWidth = n, t.screenWidth = o, t.screenHeight = s, t.windowOffsetX = function () {
            return window.pageXOffset
        }, t.windowOffsetY = function () {
            return window.pageYOffset
        }, t.getRequestParameters = function () {
            return {dw: "" + r(), dh: "" + e(), ww: "" + n(), wh: "" + i(), sw: "" + o(), sh: "" + s()}
        }
    }(Ue || (Ue = {}));
    var er = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, rr = function () {
        function t(t, e) {
            var r = this;
            this.location = t, this.pii = e, this.eventHandlers = [{
                boundElement: window,
                type: "resize",
                listener: function () {
                    return r.resizeListener()
                }
            }, {
                boundElement: window, type: "hashchange", listener: function () {
                    return r.hashChangeListener()
                }
            }, {
                boundElement: window, type: "mousemove", listener: function (t) {
                    return r.mouseMoveListener(t)
                }
            }, {
                boundElement: document, type: "visibilitychange", listener: function () {
                    return r.visibilityChangeListener()
                }
            }]
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = function (e) {
                e.date = B.now(), t(e)
            }
        }, t.prototype.start = function () {
            this.bindHandlers(), this.triggerInitialEvents()
        }, t.prototype.stop = function () {
            this.unbindHandlers()
        }, t.prototype.bindHandlers = function () {
            csArray.prototype.forEach.call(this.eventHandlers, (function (t) {
                return ne(t)
            }))
        }, t.prototype.unbindHandlers = function () {
            csArray.prototype.forEach.call(this.eventHandlers, (function (t) {
                return oe(t)
            }))
        }, t.prototype.triggerInitialEvents = function () {
            this.resizeListener(), this.hashChangeListener()
        }, t.prototype.resizeListener = function () {
            this.onEventCallback({type: Qt.RESIZE, args: [Ue.windowWidth(), Ue.windowHeight()]})
        }, t.prototype.hashChangeListener = function () {
            this.onEventCallback({type: Qt.HASH_CHANGE, args: [this.pii.anonymize(this.location.href)]})
        }, t.prototype.visibilityChangeListener = function () {
            this.onEventCallback({type: Qt.VISIBILITY_CHANGE, args: [document.visibilityState]})
        }, t.prototype.mouseMoveListener = function (t) {
            this.onEventCallback({type: Qt.MOUSE_MOVE, args: [t.clientX, t.clientY]})
        }, er([Ot("resize")], t.prototype, "resizeListener", null), er([Ot("hashChange")], t.prototype, "hashChangeListener", null), er([Ot("visibilityChange")], t.prototype, "visibilityChangeListener", null), er([Ot("mouseMove")], t.prototype, "mouseMoveListener", null), t
    }(), ir = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), nr = function (t) {
        function e(e, r, i, n, o) {
            var s = t.call(this) || this;
            return s.recordingPageEventsTracker = e, s.recordingMutationsTracker = r, s.recordingActivityTracker = i, s.recordingRequest = n, s.mutationSerializer = o, s.recordingRequestDuringInactivityCount = 0, s.isMutationTrackerStopped = !1, s
        }

        return ir(e, t), e.prototype.init = function () {
            var t = this;
            this.recordingPageEventsTracker.onEvent((function () {
                t.recordingActivityTracker.trackActivity(), t.recordingRequestDuringInactivityCount = 0
            })), this.recordingRequest.after((function () {
                t.recordingRequestDuringInactivityCount += 1, t.stopMutationTrackerIfNeeded()
            })), this.recordingActivityTracker.onActivityStopped((function () {
                t.stopMutationTrackerIfNeeded()
            })), this.recordingActivityTracker.onActivityResumed((function () {
                t.isMutationTrackerStopped && (t.recordingMutationsTracker.start(), t.isMutationTrackerStopped = !1)
            }))
        }, e.prototype.onStart = function () {
            this.recordingActivityTracker.start()
        }, e.prototype.onStop = function () {
            this.recordingActivityTracker.stop()
        }, e.prototype.stopMutationTrackerIfNeeded = function () {
            !this.isMutationTrackerStopped && !this.mutationSerializer.isSerializationInProgress() && !this.recordingActivityTracker.isUserActive() && this.recordingRequestDuringInactivityCount >= 2 && (this.recordingMutationsTracker.stop(), this.isMutationTrackerStopped = !0)
        }, e
    }(Ee), or = r(1), sr = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };

    function ar(t) {
        var e = csString.prototype.trim.call(t);
        if ("" === t) return [];
        var r, i = (r = e, csString.prototype.split.call(r, /\s(.+)/)), n = i[0], o = i[1];
        return o ? (U(n, ",") || (o = function (t) {
            return csString.prototype.split.call(t, /,(.+)/)[1] || ""
        }(o)), sr([cr(n)], ar(o))) : [cr(n)]
    }

    function cr(t) {
        return csString.prototype.split.call(t, /,$/)[0]
    }

    var ur, pr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), lr = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return pr(e, t), e.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, e.prototype.serializeElementNode = function (t, e, r) {
            return this.scanElement(t), e
        }, e.prototype.beforeSerializeChildren = function (t, e, r) {
            return this.scanStyleElement(t, e), e
        }, e.prototype.scanElement = function (t) {
            this.scanElementAttributes(t)
        }, e.prototype.scanAttribute = function (t, e) {
            this.scanElementAttributes(t, e)
        }, e.prototype.scanText = function (t) {
            d(t) && csNodeparentNode.apply(t) && g(csNodeparentNode.apply(t)) && this.scanCssString(t.data)
        }, e.prototype.scanStyleElement = function (t, e) {
            if (g(t)) for (var r = 0, i = e; r < i.length; r++) {
                var n = i[r];
                d(n) && this.scanCssString(n.data)
            }
        }, e.prototype.scanElementAttributes = function (t, e) {
            this.scanCssLink(t, e), this.scanImage(t, e), this.scanStyleAttribute(t, e)
        }, e.prototype.scanCssLink = function (t, e) {
            !y(t) || e && "href" !== e || !t.href || this.onStaticResourceUrl(t.href)
        }, e.prototype.scanImage = function (t, e) {
            v(t) && (e && "src" !== e || !t.src || this.isDataUrl(t.src) || null === t.getAttribute("src") || this.isHashStartUrl(t.getAttribute("src")) || this.onStaticResourceUrl(t.src), e && "srcset" !== e || !t.srcset || this.scanSrcset(t.srcset))
        }, e.prototype.scanStyleAttribute = function (t, e) {
            if ((!e || "style" === e) && t.hasAttribute("style")) {
                var r = t.getAttribute("style");
                if ("string" != typeof r) throw new Error("Unexpected style: " + t.outerHTML);
                this.scanCssString(r)
            }
        }, e.prototype.isHashStartUrl = function (t) {
            return V(t, "#")
        }, e.prototype.isDataUrl = function (t) {
            return V(t, "data:")
        }, e.prototype.scanCssString = function (t) {
            this.processRawUrls(Object(or.extractFrom)(t))
        }, e.prototype.scanSrcset = function (t) {
            this.processRawUrls(ar(t))
        }, e.prototype.processRawUrls = function (t) {
            var e = this;
            return csArray.prototype.forEach.call(csArray.prototype.map.call(csArray.prototype.filter.call(csArray.prototype.filter.call(t, (function (t) {
                return !e.isDataUrl(t)
            })), (function (t) {
                return !e.isHashStartUrl(t)
            })), (function (t) {
                return at(t)
            })), (function (t) {
                return e.onStaticResourceUrl(t)
            }))
        }, e.prototype.onStaticResourceUrl = function (t) {
            this.onEventCallback({date: B.now(), type: Qt.STATIC_RESOURCE_URL, args: [t]})
        }, e
    }(De);
    !function (t) {
        t.REQUEST_START = "requestStart", t.DOM_INTERACTIVE = "domInteractive"
    }(ur || (ur = {}));
    var hr, fr = function () {
        function t(t) {
            this.windowPerformance = t.performance
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            this.areTimingsAvailable() && this.recordPerformanceTimings()
        }, t.prototype.recordPerformanceTimings = function () {
            var t = this.getPerformanceTimings();
            this.onEventCallback({args: t, date: B.now(), type: Qt.PERFORMANCE_TIMINGS})
        }, t.prototype.areTimingsAvailable = function () {
            return !(!this.windowPerformance || !this.windowPerformance.timing)
        }, t.prototype.getPerformanceTimings = function () {
            return [{
                performanceTiming: ur.REQUEST_START,
                timestamp: this.windowPerformance.timing.requestStart
            }, {performanceTiming: ur.DOM_INTERACTIVE, timestamp: this.windowPerformance.timing.domInteractive}]
        }, t
    }(), dr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), yr = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, vr = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.monkeyPatcher = e, i.nodeIdentifier = r, i
        }

        return dr(e, t), e.prototype.init = function () {
            this.initInterceptors(), this.initSubscribers(), this.initMutationObserver()
        }, e.prototype.initMutationObserver = function () {
            var t = this;
            this.observer = new csMutationObserver((function (e) {
                t.handleMutations(e)
            }))
        }, e.prototype.initInterceptors = function () {
            var t = this;
            this.supportAttachShadow() && (this.attachShadowInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                target: Element.prototype,
                methodName: "attachShadow",
                hook: function (e) {
                    var r = e.context, i = e.result;
                    return t.handleAttachShadow(r, i)
                }
            })), this.supportCreateShadowRoot() && (this.createShadowRootInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                target: Element.prototype,
                methodName: "createShadowRoot",
                hook: function (e) {
                    var r = e.context, i = e.result;
                    return t.handleAttachShadow(r, i)
                }
            }))
        }, e.prototype.initSubscribers = function () {
            var t = this;
            this.nodeIdentifier.onIdentifierAdded((function (e) {
                E(e) && t.observe(e)
            }))
        }, e.prototype.onChildListMutation = function (t) {
            this.childListMutationCallback = t
        }, e.prototype.onCharacterDataMutation = function (t) {
            this.characterDataMutationCallback = t
        }, e.prototype.onAttributesMutation = function (t) {
            this.attributesMutationCallback = t
        }, e.prototype.onAttachShadowMutation = function (t) {
            this.attachShadowMutationCallback = t
        }, e.prototype.observe = function (t) {
            this.isStarted && this.observer.observe(t, {
                subtree: !0,
                attributes: !0,
                childList: !0,
                characterData: !0,
                attributeOldValue: !0,
                characterDataOldValue: !0
            })
        }, e.prototype.onStart = function () {
            this.attachShadowInterceptor && this.attachShadowInterceptor.activate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.activate()
        }, e.prototype.onStop = function () {
            this.attachShadowInterceptor && this.attachShadowInterceptor.deactivate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.deactivate(), this.observer.disconnect()
        }, e.prototype.supportAttachShadow = function () {
            return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.attachShadow
        }, e.prototype.supportCreateShadowRoot = function () {
            return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.createShadowRoot
        }, e.prototype.handleMutations = function (t) {
            for (var e = B.now(), r = 0; r < t.length; r += 1) {
                var i = t[r];
                switch (i.date = e, i.type) {
                    case"attributes":
                        this.attributesMutationCallback(i);
                        break;
                    case"characterData":
                        this.characterDataMutationCallback(i);
                        break;
                    case"childList":
                        this.childListMutationCallback(i);
                        break;
                    default:
                        throw new Error("mutation type is not supported")
                }
            }
        }, e.prototype.handleAttachShadow = function (t, e) {
            this.attachShadowMutationCallback({shadowRoot: e, date: B.now(), target: t})
        }, yr([Ot("mutations")], e.prototype, "handleMutations", null), e
    }(Ee), gr = function () {
        return (gr = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, mr = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };
    !function (t) {
        t[t.WebElement = 0] = "WebElement", t[t.MobileView = 1] = "MobileView", t[t.WebViewContainer = 2] = "WebViewContainer"
    }(hr || (hr = {}));
    var Sr = function () {
        function t(t) {
            this.processors = t
        }

        return t.prototype.serialize = function (t, e) {
            void 0 === e && (e = {});
            var r, i = gr({}, e), n = t.nodeType, o = csArray.prototype.reduce.call(this.processors, (function (t, e) {
                return e.beforeSerialize(t, i)
            }), t);
            switch (n) {
                case Node.ELEMENT_NODE:
                    r = this.serializeElementNode(o, i);
                    break;
                case Node.TEXT_NODE:
                    r = this.serializeTextNode(o, i);
                    break;
                case Node.CDATA_SECTION_NODE:
                    r = this.serializeCDATASectionNode(o, i);
                    break;
                case Node.COMMENT_NODE:
                    r = this.serializeCommentNode(o, i);
                    break;
                case Node.DOCUMENT_TYPE_NODE:
                    r = this.serializeDoctypeNode(o, i);
                    break;
                case Node.DOCUMENT_NODE:
                    r = this.serializeDocumentNode(o, i);
                    break;
                case Node.DOCUMENT_FRAGMENT_NODE:
                    r = this.serializeDocumentFragmentNode(o, i);
                    break;
                default:
                    throw new Error("serialization is not supported (nodeType: " + n + ")")
            }
            return r = csArray.prototype.reduce.call(this.processors, (function (t, e) {
                return e.afterSerialize(o, t, i)
            }), r)
        }, t.prototype.serializeElementNode = function (t, e) {
            var r, i = csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeElementNode(t, n, e)
            }), {attributes: []});
            (r = csArray.prototype.push).call.apply(r, mr([i.attributes], this.serializeAttributes(t, e)));
            var n = csElementshadowRoot.apply(t);
            return n && (i.shadowRoot = this.serializeShadowRootNode(n, e)), i.children = this.serializeChildren(t, e), i
        }, t.prototype.serializeAttributes = function (t, e) {
            var r = this, i = C(t.attributes);
            return csArray.prototype.map.call(csArray.prototype.reduce.call(this.processors, (function (r, i) {
                return i.beforeSerializeAttributes(t, r, e)
            }), i), (function (i) {
                return r.serializeAttribute(t, i, e)
            }))
        }, t.prototype.serializeAttribute = function (t, e, r) {
            return csArray.prototype.reduce.call(this.processors, (function (i, n) {
                return n.serializeAttribute(t, e, i, r)
            }), {})
        }, t.prototype.runBeforeSerializeChildrenHook = function (t, e) {
            var r = C(csNodechildNodes.apply(t));
            return csArray.prototype.reduce.call(this.processors, (function (r, i) {
                return i.beforeSerializeChildren(t, r, e)
            }), r)
        }, t.prototype.serializeChildren = function (t, e) {
            var r = this;
            if (e.skipChildrenSerialization) return [];
            var i = this.runBeforeSerializeChildrenHook(t, e);
            return csArray.prototype.map.call(i, (function (t) {
                return r.serialize(t, e)
            }))
        }, t.prototype.serializeTextNode = function (t, e) {
            return csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeTextNode(t, n, e)
            }), {})
        }, t.prototype.serializeCDATASectionNode = function (t, e) {
            return csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeCDATASectionNode(t, n, e)
            }), {})
        }, t.prototype.serializeCommentNode = function (t, e) {
            return csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeCommentNode(t, n, e)
            }), {})
        }, t.prototype.serializeDoctypeNode = function (t, e) {
            return csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeDoctypeNode(t, n, e)
            }), {})
        }, t.prototype.serializeDocumentNode = function (t, e) {
            var r = csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeDocumentNode(t, n, e)
            }), {});
            return r.children = this.serializeChildren(t, e), r
        }, t.prototype.serializeShadowRootNode = function (t, e) {
            var r = csArray.prototype.reduce.call(this.processors, (function (r, i) {
                var n = i.serializeNode(t, r, e);
                return i.serializeShadowRootNode(t, n, e)
            }), {});
            return r.children = this.serializeChildren(t, e), r = csArray.prototype.reduce.call(this.processors, (function (r, i) {
                return i.afterSerializeShadowRoot(t, r, e)
            }), r)
        }, t.prototype.serializeDocumentFragmentNode = function (t, e) {
            if (t.mode) return this.serializeShadowRootNode(t, e);
            throw new Error("Not implemented yet.")
        }, t
    }(), Er = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), br = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Er(e, t), e.prototype.beforeSerializeChildren = function (t, e) {
            if (g(t)) {
                var r = this.cssRules(t);
                this.isEmptyStyleElementWithRules(t, r) && csArray.prototype.push.call(e, this.createTextNodeFromRules(r))
            }
            return e
        }, e.prototype.cssRules = function (t) {
            try {
                var e = t.sheet;
                if (!e) return;
                return e.cssRules || e.rules
            } catch (t) {
                if ("SecurityError" !== t.name && "InvalidAccessError" !== t.name) throw t;
                return
            }
        }, e.prototype.isEmptyStyleElementWithRules = function (t, e) {
            var r = t.textContent || "";
            return /^\s*$/.test(r) && void 0 !== e && 0 !== e.length
        }, e.prototype.createTextNodeFromRules = function (t) {
            var e = csArray.prototype.join.call(csArray.prototype.map.call(C(t), (function (t) {
                return t.cssText
            })), "");
            return document.createTextNode(e)
        }, e.prototype.serializeNode = function (t, e) {
            return e.nodeType = t.nodeType, e.format = hr.WebElement, e
        }, e.prototype.serializeElementNode = function (t, e) {
            return e.localName = t.localName, e.namespaceURI = t.namespaceURI, e
        }, e.prototype.serializeAttribute = function (t, e, r) {
            return r.name = e.name, r.value = e.value, r.namespaceURI = null !== e.namespaceURI ? e.namespaceURI : "", r
        }, e.prototype.serializeTextNode = function (t, e) {
            return e.data = t.data, e
        }, e.prototype.serializeCDATASectionNode = function (t, e) {
            return e.data = t.data, e
        }, e.prototype.serializeCommentNode = function (t, e) {
            return e.data = t.data, e
        }, e.prototype.serializeDoctypeNode = function (t, e) {
            return e.name = t.name, e.publicId = t.publicId, e.systemId = t.systemId, e
        }, e.prototype.serializeDocumentNode = function (t, r) {
            return r.baseURI = e.getBaseURI(t), r
        }, e.prototype.serializeShadowRootNode = function (t, e) {
            return e.mode = t.mode, e
        }, e.getBaseURI = function (t) {
            var e = t.baseURI;
            if (null == e) {
                var r = t.getElementsByTagName("base");
                e = 0 !== r.length ? r[0].href : t.URL
            }
            return e
        }, e
    }(De);

    function wr(t) {
        return "csId" in t
    }

    function Cr(t) {
        return wr(t) && "children" in t
    }

    function Tr(t) {
        return Cr(t) && "attributes" in t && "localName" in t && "namespaceURI" in t
    }

    var Rr = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, kr = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    };

    function Ar() {
        return Rr(this, void 0, void 0, (function () {
            return kr(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise((function (t) {
                            setTimeout((function () {
                                t()
                            }), 0)
                        }))];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }

    var Pr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Ir = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, Or = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, _r = function (t) {
        function e(e, r, i) {
            var n = t.call(this, r) || this;
            return n.nodeIdentifierService = e, n.asyncSerializerOptions = i, n.init(), n
        }

        return Pr(e, t), e.prototype.init = function () {
            this.taskTime = this.asyncSerializerOptions.taskTime
        }, e.prototype.getTaskTime = function () {
            return this.taskTime
        }, e.prototype.updateAttribute = function (t, e) {
            if (t) {
                var r = t[0], i = t[1], n = t[2], o = t[3], s = this.nodeIdentifierService.getNodeFromMap(r);
                if (s && Tr(s)) {
                    s.attributes || (s.attributes = []);
                    var a = csArray.prototype.findIndex.call(s.attributes, (function (t) {
                        return t.name === n
                    }));
                    a > -1 ? s.attributes[a].value = o : csArray.prototype.push.call(s.attributes, {
                        anonymized: e,
                        namespaceURI: i,
                        name: n,
                        value: o
                    })
                }
            }
        }, e.prototype.updateTextNode = function (t) {
            if (t) {
                var e, r = t[0], i = t[1], n = this.nodeIdentifierService.getNodeFromMap(r);
                n && (wr(e = n) && "data" in e) && (n.data = i)
            }
        }, e.prototype.updateChildren = function (t, e) {
            var r = this, i = e.addedNodes, n = e.removedNodes, o = this.nodeIdentifierService.getNodeFromMap(t);
            o && Tr(o) && (o.children || (o.children = []), csArray.prototype.forEach.call(i, (function (t) {
                var e = t[1], r = t[2], i = csArray.prototype.findIndex.call(o.children, (function (t) {
                    return t.csId === e
                }));
                i > -1 ? csArray.prototype.splice.call(o.children, i, 0, r) : csArray.prototype.push.call(o.children, r)
            })), csArray.prototype.forEach.call(n, (function (t) {
                t.forEach((function (t) {
                    return r.removeNodeFromMap(o, t)
                }))
            })))
        }, e.prototype.removeNodeFromMap = function (t, e) {
            if (null == t ? void 0 : t.children) {
                var r = csArray.prototype.findIndex.call(t.children, (function (t) {
                    return t.csId === e
                }));
                -1 !== r && csArray.prototype.splice.call(t.children, r, 1)
            }
            this.nodeIdentifierService.deleteNode(e)
        }, e.prototype.startSerializeAsync = function (t, e) {
            return void 0 === e && (e = {}), Ir(this, void 0, void 0, (function () {
                return Or(this, (function (r) {
                    return this.nodeIdentifierService.clearMap(), this.nodeIdentifierService.setDefaultSerializationOptions(e), this.nodeIdentifierService.popId(t), [2, this.traverseAndSerialize(t, e)]
                }))
            }))
        }, e.prototype.indexInParent = function (t, e) {
            return e ? csArray.prototype.indexOf.call(csNodechildNodes.apply(e), t) : -1
        }, e.prototype.serializeAndAddToParent = function (t, e, r) {
            var i = this.nodeIdentifierService.getNodeFromMapByNode(e), n = this.serialize(t, r),
                o = this.indexInParent(t, e);
            i && Cr(i) && wr(n) && (o >= 0 ? csArray.prototype.splice.call(i.children, o, 0, n) : csArray.prototype.push.call(i.children, n))
        }, e.prototype.traverseAndSerialize = function (t, e) {
            return void 0 === e && (e = {}), Ir(this, void 0, void 0, (function () {
                var r, i, n, o, s, a, c;
                return Or(this, (function (u) {
                    switch (u.label) {
                        case 0:
                            return e.skipChildrenSerialization = !0, r = [t], i = this.getTaskTime(), [4, Ar()];
                        case 1:
                            u.sent(), this.timer = csDate.now(), this.serialize(t, e), u.label = 2;
                        case 2:
                            if (!(r.length > 0)) return [3, 7];
                            n = csArray.prototype.pop.call(r), o = this.nodeIdentifierService.getOptionsFromMap(n), s = this.runBeforeSerializeChildrenHook(n, o), a = csArray.prototype.shift.call(s), u.label = 3;
                        case 3:
                            return a ? csDate.now() - this.timer > i ? [4, Ar()] : [3, 5] : [3, 6];
                        case 4:
                            u.sent(), this.timer = csDate.now(), u.label = 5;
                        case 5:
                            return this.nodeIdentifierService.getId(a) ? (a = csArray.prototype.shift.call(s), [3, 3]) : (csArray.prototype.push.call(r, a), this.serializeAndAddToParent(a, n, o), f(a) && csElementshadowRoot.apply(a) && (c = csElementshadowRoot.apply(a), csArray.prototype.push.call(r, c)), a = csArray.prototype.shift.call(s), [3, 3]);
                        case 6:
                            return [3, 2];
                        case 7:
                            return [2, this.nodeIdentifierService.getNodeFromMapByNode(t)]
                    }
                }))
            }))
        }, e
    }(Sr), Nr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Mr = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, Lr = function (t) {
        function e(e, r) {
            return t.call(this, e, Mr([new br, e], r), {taskTime: 25}) || this
        }

        return Nr(e, t), e
    }(_r);

    function xr() {
        var t,
            e = (t = new Error).stack ? csArray.prototype.filter.call(csString.prototype.split.call(t.stack, "\n"), (function (t) {
                return "Error" !== t && -1 === csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(t), "promise ") && -1 === csString.prototype.indexOf.call(t, "[native code]")
            })) : [];
        if (0 === e.length) return "";
        var r = function (t) {
            return t.length > 0 ? Dr(t[0]) : ""
        }(e);
        return "" === r || 0 === (e = function (t, e) {
            return csArray.prototype.filter.call(t, (function (t) {
                return -1 === csString.prototype.indexOf.call(t, e)
            }))
        }(e, r)).length ? "" : Dr(e[0])
    }

    function Dr(t) {
        var e, r = "";
        e = t;
        var i = (-1 !== csString.prototype.indexOf.call(e, "@") ? new RegExp("@(.+):(\\d+):(\\d+)$") : new RegExp("\\((.+):(\\d+):(\\d+)\\)")).exec(t);
        return i && (r = i[1]), r
    }

    var Vr, Ur = function () {
        return (Ur = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, qr = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, zr = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, jr = function () {
        function t() {
            this.defaultHookPrepareArgs = function (t, e) {
                return {context: t, args: e}
            }
        }

        return t.prototype.copyFunctionSignature = function (t, e) {
            t.prototype = e.prototype, Object.defineProperty(t, "toString", {
                value: function () {
                    return e.toString()
                }
            })
        }, t.prototype.createSyncFunctionInterceptor = function (t) {
            var e, r = t.target, i = t.methodName, n = t.hook, o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o, a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(r, i)) || void 0 === e ? void 0 : e.writable)) return It.warn("Cannot intercept read only function '" + i + "' of object '" + r + "'"), null;
            var c = !1, u = r[i];
            if ("function" == typeof u) {
                var p = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var r, i = s(this, t), o = u.apply(this, t);
                    c && (a && a.withCallerName && (r = xr()), It.tryToExecute("SyncFunctionInterceptor", (function () {
                        n(Ur(Ur({result: o}, i), {callerName: r}))
                    }))());
                    return o
                };
                this.copyFunctionSignature(p, u), r[i] = p
            }
            return {
                activate: function () {
                    return c = !0
                }, deactivate: function () {
                    return c = !1
                }
            }
        }, t.prototype.createAsyncFunctionInterceptor = function (t) {
            var e, r = t.target, i = t.methodName, n = t.hook, o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o, a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(r, i)) || void 0 === e ? void 0 : e.writable)) return It.warn("Cannot intercept read only function '" + i + "' of object '" + r + "'"), null;
            var c = !1, u = r[i];
            if ("function" == typeof u) {
                var p = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return qr(this, void 0, void 0, (function () {
                        var e, r, i;
                        return zr(this, (function (o) {
                            return e = s(this, t), r = u.apply(this, t), c && (a && a.withCallerName && (i = xr()), It.tryToExecute("AsyncFunctionInterceptor", (function () {
                                n(Ur(Ur({result: r}, e), {callerName: i}))
                            }))()), [2, r]
                        }))
                    }))
                };
                this.copyFunctionSignature(p, u), r[i] = p
            }
            return {
                activate: function () {
                    return c = !0
                }, deactivate: function () {
                    return c = !1
                }
            }
        }, t.prototype.createDescriptorInterceptor = function (t, e, r) {
            var i = !1, n = Object.getOwnPropertyDescriptor(t, e);
            if (n) {
                if (!n.configurable) return It.warn("Cannot intercept read only property '" + e + "' of object '" + t + "'"), null;
                Object.defineProperty(t, e, Ur(Ur({}, n.get ? {
                    get: function () {
                        return n.get.apply(this, arguments)
                    }
                } : {}), n.set ? {
                    set: function () {
                        var t = this, e = arguments, o = n.set.apply(this, e);
                        return i && It.tryToExecute("DescriptorInterceptor", (function () {
                            r(t, e[0])
                        }))(), o
                    }
                } : {}))
            }
            return {
                activate: function () {
                    return i = !0
                }, deactivate: function () {
                    return i = !1
                }
            }
        }, t
    }(), Br = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };
    !function (t) {
        function e(t) {
            var e = t.getBoundingClientRect(), r = e.left + .5 * e.width, i = e.top + .5 * e.height,
                n = document.elementFromPoint(r, i);
            return Ie.getShadowRoot(n) ? t.getRootNode().elementFromPoint(r, i) : n
        }

        t.findAllElements = function (t, e) {
            var r;
            void 0 === e && (e = document);
            for (var i = C(e.querySelectorAll(t)), n = 0, o = Ie.getAllShadowHosts(e); n < o.length; n++) {
                var s = C(o[n].shadowRoot.querySelectorAll(t));
                (r = csArray.prototype.push).call.apply(r, Br([i], s))
            }
            return i
        }, t.getTopElement = e, t.isVisibleInDocument = function (t) {
            return !function (t) {
                var e = t.getBoundingClientRect();
                return e.right + Ue.windowOffsetX() < 0 || e.bottom + Ue.windowOffsetY() < 0
            }(t) && !function (t) {
                var e, r = window.getComputedStyle(t);
                return 0 === t.getClientRects().length || "hidden" === r.visibility || "collapse" === r.visibility || "0" === r.opacity || "opacity(0)" === r.filter || (e = r.color, /^rgba\(\d+, \d+, \d+, 0\)$/.test(e))
            }(t) && !function (t) {
                var r = e(t);
                return !t.contains(r) && null !== r
            }(t)
        }, t.isInViewPort = function (t) {
            return null !== e(t)
        }
    }(Vr || (Vr = {}));
    var Hr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Fr = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Gr = function (t) {
        function e(e, r, i, n) {
            var o = t.call(this) || this;
            return o.configuration = e, o.nodeIdentifier = r, o.textVisibilityBatch = i, o.textVisibilityDelay = n, o.isStarted = !1, o.seenInViewPort = new Set, o.seenGlobally = new Set, o
        }

        return Hr(e, t), e.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, e.prototype.start = function () {
            var t = this;
            this.isStarted || this.configuration.textVisibilityEnabled && window.IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((function (e, r) {
                t.handleIntersection(e, r)
            }), e.INTERSECTION_OPTIONS), this.mutationObserver = new csMutationObserver((function (e) {
                t.handleMutations(e)
            })), this.isStarted = !0)
        }, e.prototype.stop = function () {
            this.isStarted && (this.textVisibilityBatch.clear(), this.intersectionObserver.disconnect(), this.mutationObserver.disconnect(), this.seenInViewPort.clear(), this.seenGlobally.clear(), this.isStarted = !1)
        }, e.prototype.flushEvents = function () {
            this.isStarted && this.onTextVisibility()
        }, e.prototype.serializeTextNode = function (t, e, r) {
            if (!this.isStarted || r.withAnonymization) return e;
            var i = csString.prototype.trim.call(t.data), n = t.parentElement;
            if ("" !== i && n && !g(n) && !S(n)) {
                if (!Vr.isVisibleInDocument(n)) return this.observeMutation(n), this.observeIntersection(n), e;
                var o = Vr.isInViewPort(n);
                o || this.observeIntersection(n), this.processTextVisibilityFromSerialization(n, o)
            }
            return e
        }, e.prototype.observeIntersection = function (t) {
            this.intersectionObserver.observe(t)
        }, e.prototype.observeMutation = function (t) {
            this.mutationObserver.observe(t, {attributeFilter: e.MUTATION_ATTRIBUTE_FILTER})
        }, e.prototype.processTextVisibilityAfterDelay = function (t, e, r) {
            Vr.isVisibleInDocument(t) && (this.pushIdSeenGlobally(e), Vr.isInViewPort(t) && r && (this.pushIdSeenInViewPort(e), this.intersectionObserver.unobserve(t)), this.textVisibilityBatch.isFull() && this.onTextVisibility())
        }, e.prototype.processTextVisibilityFromSerialization = function (t, e) {
            var r = this;
            this.nodeIdentifier.ifIdentified(t, (function (i) {
                r.seenInViewPort.has(i) || setTimeout((function () {
                    r.processTextVisibilityAfterDelay(t, i, e), r.seenGlobally.has(i) || r.observeMutation(t), !r.seenInViewPort.has(i) && e && r.observeIntersection(t)
                }), r.textVisibilityDelay)
            }))
        }, e.prototype.processTextVisibilityFromMutation = function (t) {
            var e = this;
            this.nodeIdentifier.ifIdentified(t, (function (r) {
                e.seenInViewPort.has(r) || e.processTextVisibility(t, r)
            }))
        }, e.prototype.processTextVisibilityFromIntersection = function (t, e) {
            var r = this;
            this.nodeIdentifier.ifIdentified(t, (function (i) {
                r.seenInViewPort.has(i) ? e.unobserve(t) : r.processTextVisibility(t, i)
            }))
        }, e.prototype.processTextVisibility = function (t, e) {
            var r = this, i = this.isVisibleInViewPort(t);
            setTimeout((function () {
                return r.processTextVisibilityAfterDelay(t, e, i)
            }), this.textVisibilityDelay)
        }, e.prototype.handleMutations = function (t) {
            var r = this;
            csArray.prototype.forEach.call(t, (function (t) {
                var i = t.attributeName;
                i && -1 !== csArray.prototype.indexOf.call(e.MUTATION_ATTRIBUTE_FILTER, i) && r.processTextVisibilityFromMutation(t.target)
            }))
        }, e.prototype.handleIntersection = function (t, e) {
            var r = this;
            csArray.prototype.forEach.call(t, (function (t) {
                t.isIntersecting && r.processTextVisibilityFromIntersection(t.target, e)
            }))
        }, e.prototype.isVisibleInViewPort = function (t) {
            return Vr.isVisibleInDocument(t) && Vr.isInViewPort(t)
        }, e.prototype.pushIdSeenInViewPort = function (t) {
            this.seenInViewPort.has(t) || (this.seenInViewPort.add(t), this.textVisibilityBatch.addIdInViewPort(t))
        }, e.prototype.pushIdSeenGlobally = function (t) {
            this.seenGlobally.has(t) || (this.seenGlobally.add(t), this.textVisibilityBatch.addIdInGlobally(t))
        }, e.prototype.onTextVisibility = function () {
            if (!this.textVisibilityBatch.isEmpty()) {
                var t = {
                    visibleGlobally: this.textVisibilityBatch.flushIdsSeenGlobally(),
                    visibleInViewPort: this.textVisibilityBatch.flushIdsSeenInViewport()
                };
                this.onEventCallback({type: Qt.TEXT_VISIBILITY, date: B.now(), args: [t]})
            }
        }, e.INTERSECTION_OPTIONS = {
            root: null,
            rootMargin: "0px",
            threshold: .5
        }, e.MUTATION_ATTRIBUTE_FILTER = ["style", "class", "hidden"], Fr([Ot("TextVisibilityTracker.processTextVisibilityAfterDelay")], e.prototype, "processTextVisibilityAfterDelay", null), Fr([Ot("TextVisibilityTracker.processTextVisibilityFromSerialization")], e.prototype, "processTextVisibilityFromSerialization", null), Fr([Ot("TextVisibilityTracker.processTextVisibilityFromMutation")], e.prototype, "processTextVisibilityFromMutation", null), Fr([Ot("TextVisibilityTracker.processTextVisibilityFromIntersection")], e.prototype, "processTextVisibilityFromIntersection", null), Fr([Ot("TextVisibilityTracker.handleMutations")], e.prototype, "handleMutations", null), Fr([Ot("TextVisibilityTracker.handleIntersection")], e.prototype, "handleIntersection", null), e
    }(De), Wr = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Kr = function (t) {
        function e(e, r) {
            var i = t.call(this, e, r) || this;
            return i.onBeaconSuccessCallbacks = [], i.onBeaconFailureCallbacks = [], i
        }

        return Wr(e, t), e.prototype.setRequestPayloadProvider = function (t) {
            this.requestPayloadProvider = t
        }, e.prototype.onBeaconSuccess = function (t) {
            csArray.prototype.push.call(this.onBeaconSuccessCallbacks, t)
        }, e.prototype.onBeaconFailure = function (t) {
            csArray.prototype.push.call(this.onBeaconFailureCallbacks, t)
        }, e.prototype.send = function () {
            csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function (t) {
                return t()
            }));
            var t = this.retrieveParameters(), e = z.toQuery(t), r = this.retrievePayload();
            this.sendBeacon(e, r) ? csArray.prototype.forEach.call(this.onBeaconSuccessCallbacks, (function (t) {
                return t()
            })) : csArray.prototype.forEach.call(this.onBeaconFailureCallbacks, (function (t) {
                return t()
            })), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function (t) {
                return t()
            }))
        }, e.prototype.retrievePayload = function () {
            return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
        }, e.prototype.sendBeacon = function (t, e) {
            return void 0 !== navigator.sendBeacon && navigator.sendBeacon(this.domainUri + "/" + this.path + "?" + t, e)
        }, e
    }(K), Xr = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, Yr = function () {
        function t() {
            this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
        }

        return t.prototype.isFull = function () {
            return this.seenGloballyBuffer.length >= t.BATCH_SIZE || this.seenInViewPortBuffer.length >= t.BATCH_SIZE
        }, t.prototype.isEmpty = function () {
            return 0 === this.seenGloballyBuffer.length && 0 === this.seenInViewPortBuffer.length
        }, t.prototype.addIdInGlobally = function (t) {
            csArray.prototype.push.call(this.seenGloballyBuffer, t)
        }, t.prototype.addIdInViewPort = function (t) {
            csArray.prototype.push.call(this.seenInViewPortBuffer, t)
        }, t.prototype.clear = function () {
            this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
        }, t.prototype.flushIdsSeenGlobally = function () {
            var t = Xr(this.seenGloballyBuffer);
            return this.seenGloballyBuffer = [], t
        }, t.prototype.flushIdsSeenInViewport = function () {
            var t = Xr(this.seenInViewPortBuffer);
            return this.seenInViewPortBuffer = [], t
        }, t.BATCH_SIZE = 20, t
    }();

    function Jr(t) {
        for (var e = new Uint8Array(t), r = "", i = 0; i < e.byteLength; i += 1) r += csString.fromCodePoint(e[i]);
        return r
    }

    function Qr(t) {
        return function (t) {
            for (var e = new ArrayBuffer(t.length), r = new Uint8Array(e), i = 0, n = t.length; i < n; i += 1) r[i] = csString.prototype.charCodeAt.call(t, i);
            return e
        }(self.atob(t))
    }

    var Zr = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, $r = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, ti = function () {
        function t(t) {
            this.crypto = t, this.isEncryptionSupported = !1
        }

        return t.prototype.init = function () {
            this.isEncryptionSupported = this.canSupportEncryption(), this.isEncryptionSupported && (this.textEncoder = new TextEncoder)
        }, t.prototype.isSupported = function () {
            return this.isEncryptionSupported
        }, t.prototype.importKey = function (t) {
            return Zr(this, void 0, void 0, (function () {
                return $r(this, (function (e) {
                    if (!this.isEncryptionSupported) return [2, null];
                    try {
                        return [2, this.crypto.subtle.importKey("spki", Qr(t), {
                            name: "RSA-OAEP",
                            hash: "SHA-256"
                        }, !1, ["encrypt"])]
                    } catch (t) {
                        return [2, null]
                    }
                    return [2]
                }))
            }))
        }, t.prototype.encrypt = function (t, e) {
            return Zr(this, void 0, void 0, (function () {
                var r;
                return $r(this, (function (i) {
                    switch (i.label) {
                        case 0:
                            if (!this.isEncryptionSupported) return [2, null];
                            if (!(r = this.truncateAndEncode(e, 190))) return [2, null];
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt({name: "RSA-OAEP"}, t, r)];
                        case 2:
                            return [2, Jr(i.sent())];
                        case 3:
                            return i.sent(), [2, null];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, t.prototype.canSupportEncryption = function () {
            return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.importKey && this.crypto.subtle.encrypt && self.CryptoKey && self.TextEncoder && csString.fromCodePoint)
        }, t.prototype.truncateAndEncode = function (t, e) {
            for (var r = 0, i = 0, n = 0; n < t.length; n++) {
                var o = csString.prototype.codePointAt.call(t, n);
                if (!o) return null;
                var s = this.getByteSize(o);
                if (s + r > e) break;
                i++, r += s
            }
            var a = csString.prototype.slice.call(t, 0, i);
            return this.textEncoder.encode(a)
        }, t.prototype.getByteSize = function (t) {
            return t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4
        }, t
    }(), ei = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), ri = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.encryptionService = e, r
        }

        return ei(e, t), e.prototype.serializeTextNode = function (t, e) {
            var r;
            return (null === (r = t.parentElement) || void 0 === r ? void 0 : r.hasAttribute("data-cs-encrypt")) && (e.data = Pe(t.data), this.encryptionService.registerTextNodeToEncrypt({
                textNode: t,
                serializedTextData: e.data
            })), e
        }, e
    }(De), ii = function () {
        function t() {
            this.nodesToEncryptBuffer = []
        }

        return t.prototype.onSerializeNode = function (t) {
            this.onSerializeNodeCallback = t
        }, t.prototype.addNewNode = function (t) {
            csArray.prototype.push.call(this.nodesToEncryptBuffer, t)
        }, t.prototype.serializeNodesFromBuffer = function () {
            for (; this.nodesToEncryptBuffer.length > 0;) {
                var t = csArray.prototype.shift.call(this.nodesToEncryptBuffer);
                this.onSerializeNodeCallback(t)
            }
        }, t.prototype.clear = function () {
            this.nodesToEncryptBuffer = []
        }, t
    }(), ni = function () {
        function t(t, e, r, i, n, o, s, a, c, u, p, l, h, f, d, y, v, g) {
            this.sessionService = t, this.configuration = e, this.compressor = r, this.selector = i, this.consentService = n, this.basicParameters = o, this.commandsService = s, this.pii = a, this.sessionRenewer = c, this.urlService = u, this.piiMaskingService = p, this.javaScriptErrorsTracker = l, this.javaScriptErrorsAnonymizer = h, this.apiErrorsTracker = f, this.apiErrorsAnonymizer = d, this.debugService = y, this.lifeCycleEventsEmitter = v, this.customEventEmitter = g
        }

        return t.prototype.init = function () {
            var t = this, e = new jr, r = new je, i = new Fe(this.piiMaskingService);
            this.anonymizationService = new Xe(this.pii, this.configuration), this.anonymizationService.init();
            var n = new lr, o = new vr(e, r), s = new ti(window.crypto);
            s.init();
            var a = new ii, c = new ii, u = new ii, p = new le(r, this.configuration, s, a, c, u);
            p.init();
            var l = new ri(p), h = [i, this.anonymizationService, l, n], f = new Gr(this.configuration, r, new Yr, 1e3);
            this.configuration.textVisibilityEnabled && csArray.prototype.push.call(h, f);
            var d = new Lr(r, h);
            this.recordingBatch = new ge;
            var y = new me, v = new Qe(y, this.basicParameters),
                g = new Kr(this.configuration.getRecordingUri(), "v2/recording");
            this.configuration.useMalkaPipeline && (v.addProvider({
                getRequestParameters: function () {
                    return {rt: csArray.prototype.join.call(t.sessionService.getRecordingStates())}
                }
            }), g.setRequestParametersProviders(this.basicParameters, {
                getRequestParameters: function () {
                    return {rt: csArray.prototype.join.call(t.sessionService.getRecordingStates()), hlm: "true"}
                }
            }));
            var m = this.createRecordingPostRequest(this.compressor);
            this.mutationSerializer = new Me(this.consentService, d, r, i, this.anonymizationService, p, this.configuration, this.urlService), this.mutationSerializer.init(), this.recordingPageEventsTracker = new de(this.selector, r, i, p), this.recordingPageEventsTracker.init();
            var S = new ye(this.mutationSerializer, o, n, this.lifeCycleEventsEmitter, this.configuration);
            this.recordingService = new Ce(this.configuration, m, this.recordingBatch, v, y, new xe(e, r, n), S, this.recordingPageEventsTracker, new rr(window.location, this.pii), this.sessionRenewer, n, new fr(window), this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, f, this.apiErrorsAnonymizer, p), this.customEventEmitter.addListeners(this.recordingService), this.recordingInactivityService = new nr(this.recordingPageEventsTracker, S, new Ze(new tr), m, this.mutationSerializer);
            var E = new Ye("csPersisted"), b = this.createRecordingPostRequest(this.compressor);
            this.recordingRecoveryService = new ke(b, this.recordingBatch, E, this.configuration, g), o.init(), this.recordingInactivityService.init(), this.recordingService.init(), this.commandsService.register(["isRecording"], (function () {
                return t.sessionService.isReplayRecorded()
            })), this.commandsService.register(["setCapturedElementsSelector"], (function (e) {
                t.anonymizationService.setWhitelistedElementsSelector(e)
            })), this.commandsService.register(["setPIISelectors"], (function (e) {
                t.piiMaskingService.setPIISelectors(e)
            }))
        }, t.prototype.onStartTracking = function () {
            this.recordingRecoveryService.recover(), this.sessionService.isReplayRecorded() && (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEvents(), this.recordingInactivityService.start(), this.recordingService.start(), this.recordingRecoveryService.start())
        }, t.prototype.onArtificialPageViewEnd = function () {
            this.sessionService.isReplayRecorded() && !this.sessionService.isTemporarilyRecorded() && this.recordingRecoveryService.sendLastMessageBeacon()
        }, t.prototype.onAfterArtificialPageView = function () {
            this.recordingService.clearStates(), this.mutationSerializer.resetAnonymization(), this.sessionService.isReplayRecorded() ? (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEvents(), this.recordingInactivityService.restart(), this.recordingService.restart(), this.recordingRecoveryService.restart()) : (this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop())
        }, t.prototype.onBeforeSessionRenewal = function () {
            this.recordingService.clearStates(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
        }, t.prototype.onOptout = function () {
            this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
        }, t.prototype.onConsentGranted = function () {
            this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentGranted()
        }, t.prototype.onConsentWithdrawn = function () {
            this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentWithdrawn()
        }, t.prototype.onRecordingStateChange = function (t, e) {
            var r = this;
            this.configuration.useMalkaPipeline && (t === Dt.NOT_RECORDED && e === Vt.ETR_OFF ? (this.recordingService.clearEvents(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()) : (this.recordingBatch.setRequestParametersFromProvider({
                getRequestParameters: function () {
                    return {rt: csArray.prototype.join.call(r.sessionService.getRecordingStates())}
                }
            }), this.recordingService.allowSendingEvents(), this.mutationSerializer.isSerializationInProgress() || this.recordingService.pushEvents()))
        }, t.prototype.onInitialDomDone = function () {
            this.recordingPageEventsTracker.start()
        }, t.prototype.createRecordingPostRequest = function (t) {
            var e = this.configuration.useMalkaPipeline ? "v2/recording" : "recording",
                r = this.configuration.useMalkaPipeline ? "byteArray" : "base64",
                i = new ie(this.configuration.getRecordingUri(), e);
            return this.debugService.isCompressionDisabled() || i.setCompressionOptions(t, r), i
        }, t.isSupported = function () {
            return "MutationObserver" in window && "visibilityState" in document
        }, t
    }(), oi = function () {
        function t(t, e) {
            this.visitorService = t, this.sessionService = e, this.naturalPageViewSent = !1
        }

        return t.prototype.isNaturalPageViewSent = function () {
            return this.naturalPageViewSent
        }, t.prototype.setNaturalPageViewSent = function (t) {
            this.naturalPageViewSent = t
        }, t.prototype.getTrackingContext = function () {
            var t = this.getSessionKey(), e = this.getPageNumber();
            return t && e ? {sessionKey: t, pageNumber: e} : null
        }, t.prototype.getSessionKey = function () {
            var t = this.visitorService.getVisitor();
            return t ? t.id + "." + t.visitsCount : null
        }, t.prototype.getPageNumber = function () {
            return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null
        }, t
    }(), si = function () {
        function t(t) {
            this.trackingContextService = t, this.registeredCallbacks = []
        }

        return t.prototype.handleCommand = function (t) {
            if (Ct(t) && (this.registerCallback(t), this.trackingContextService.isNaturalPageViewSent())) {
                var e = this.trackingContextService.getTrackingContext();
                null !== e && this.executeAsync(t, e)
            }
        }, t.prototype.registerCallback = function (t) {
            csArray.prototype.push.call(this.registeredCallbacks, t)
        }, t.prototype.executeRegisteredCallbacks = function () {
            var t = this, e = this.trackingContextService.getTrackingContext();
            null !== e && csArray.prototype.map.call(this.registeredCallbacks, (function (r) {
                return t.executeAsync(r, e)
            }))
        }, t.prototype.executeAsync = function (t, e) {
            setTimeout((function () {
                t(e)
            }))
        }, t
    }(), ai = function () {
        function t(t) {
            this.trackingContextService = t, this.pendingCallbacks = []
        }

        return t.prototype.handleCommand = function (t) {
            return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(t) : void this.addPendingCallback(t)
        }, t.prototype.applyGetSessionKey = function (t) {
            var e = this.trackingContextService.getSessionKey();
            return this.hasCallback(t) && null !== e && this.executeAsync(t.callback, e), e
        }, t.prototype.addPendingCallback = function (t) {
            this.hasCallback(t) && csArray.prototype.push.call(this.pendingCallbacks, t.callback)
        }, t.prototype.flushPendingCallbacks = function () {
            var t = this, e = this.trackingContextService.getSessionKey();
            null !== e && csArray.prototype.forEach.call(this.pendingCallbacks, (function (r) {
                t.executeAsync(r, e)
            })), this.pendingCallbacks = []
        }, t.prototype.hasCallback = function (t) {
            return t && "function" == typeof t.callback
        }, t.prototype.executeAsync = function (t, e) {
            setTimeout((function () {
                t(e)
            }))
        }, t
    }(), ci = function () {
        function t(t, e) {
            this.iframeParentToChildrenCommunicationService = t, this.trackingContextService = e
        }

        return t.prototype.onIframeIntegrationCallback = function (t) {
            if (this.trackingContextService.isNaturalPageViewSent()) {
                var e = this.trackingContextService.getTrackingContext();
                null !== e && (t.trackingContext = e, this.iframeParentToChildrenCommunicationService.sendToChildren(ht.IntegrationCallback, t))
            }
        }, t.prototype.sendAfterPageViewCallbackToChildren = function () {
            var t = this.trackingContextService.getTrackingContext();
            if (null !== t) {
                var e = {trackingContext: t, initiator: pt.AfterPageView};
                this.iframeParentToChildrenCommunicationService.sendToChildren(ht.IntegrationCallback, e)
            }
        }, t
    }(), ui = ["afterPageView"], pi = ["getSessionKey"], li = function () {
        function t(t, e, r, i, n) {
            this.visitorService = t, this.sessionService = e, this.commandsService = r, this.iframeEventsEmitter = i, this.iframeParentToChildrenCommunicationService = n
        }

        return t.prototype.init = function () {
            var t = this;
            this.trackingContextService = new oi(this.visitorService, this.sessionService), this.afterPageViewService = new si(this.trackingContextService), this.getSessionKeyService = new ai(this.trackingContextService), this.parentToChildrenIntegrationService = new ci(this.iframeParentToChildrenCommunicationService, this.trackingContextService), this.iframeEventsEmitter.addListeners(this.parentToChildrenIntegrationService), this.commandsService.register(pi, (function (e) {
                return t.getSessionKeyService.handleCommand(e)
            })), this.commandsService.register(ui, (function (e) {
                t.afterPageViewService.handleCommand(e)
            }))
        }, t.prototype.onAfterNaturalPageView = function () {
            this.trackingContextService.setNaturalPageViewSent(!0), this.getSessionKeyService.flushPendingCallbacks(), this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
        }, t.prototype.onAfterArtificialPageView = function () {
            this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
        }, t
    }(), hi = function () {
        function t(t, e) {
            this.key = csString.prototype.slice.call(t, 0, 50), this.value = St(e) ? csString.prototype.slice.call(e, 0, 255) : e
        }

        return t.isValid = function (t, e) {
            return St(t) && (St(e) || mt(e))
        }, t
    }(), fi = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), di = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.batch = e, i.pii = r, i.dynamicVariablesQueue = [], i
        }

        return fi(e, t), e.prototype.onStart = function () {
            var t = this;
            csArray.prototype.forEach.call(this.dynamicVariablesQueue, (function (e) {
                return t.trackDynamicVariable(e.key, e.value)
            })), this.dynamicVariablesQueue = []
        }, e.prototype.onStop = function () {
        }, e.prototype.trackDynamicVariable = function (t, e) {
            this.isStarted ? hi.isValid(t, e) && this.batch.add(new hi(this.pii.anonymize(t), this.pii.anonymize(e))) : csArray.prototype.push.call(this.dynamicVariablesQueue, {
                key: t,
                value: e
            })
        }, e
    }(Ee), yi = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };
    var vi, gi, mi, Si, Ei = function (t) {
            return void 0 === t && (t = 0), function (e, r, i) {
                var n = i.value, o = !1;
                i.value = function () {
                    for (var e = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    o || (o = !0, setTimeout((function () {
                        n.apply(e, r), o = !1
                    }), t))
                }
            }
        }, bi = function (t, e, r, i) {
            var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s
        }, wi = function () {
            function t(t) {
                this.compressor = t, this.batch = []
            }

            return t.prototype.add = function (t) {
                csArray.prototype.push.call(this.batch, t), this.setBatchReadyCall()
            }, t.prototype.clear = function () {
                this.batch = []
            }, t.prototype.onBatchReady = function (t) {
                this.batchReadyCallback = t
            }, t.prototype.getRequestParameters = function () {
                for (var t = {}, e = 0, r = this.batch; e < r.length; e++) {
                    var i = r[e];
                    t[i.key] = i.value
                }
                return {dv: this.compressor.compressSync(csJSON.stringify(t))}
            }, t.prototype.setBatchReadyCall = function () {
                this.batchReadyCallback()
            }, bi([Ei(), Ot("dynamicVariablesBatchReady")], t.prototype, "setBatchReadyCall", null), t
        }(), Ci = ["trackDynamicVariable"], Ti = function () {
            function t(t, e, r, i, n, o) {
                this.commandsService = t, this.sessionService = e, this.configuration = r, this.basicParameters = i, this.compressor = n, this.pii = o, this.request = new Y(this.configuration.getTrackerUri(), "dvar"), this.batch = new wi(this.compressor), this.service = new di(this.batch, this.pii)
            }

            return t.prototype.init = function () {
                var t = this;
                this.request.setRequestParametersProviders(this.basicParameters, this.batch), this.sessionService.setDynamicVariablesService(this.service), this.batch.onBatchReady((function () {
                    return t.request.send()
                })), this.request.after((function () {
                    return t.batch.clear()
                })), this.commandsService.register(Ci, (function (e) {
                    var r = void 0 === e ? {} : e, i = r.key, n = r.value;
                    t.service.trackDynamicVariable(i, n)
                }))
            }, t.prototype.onStartTracking = function () {
                this.service.start()
            }, t
        }(), Ri = function () {
            function t(t, e) {
                this.id = t, this.revenue = e
            }

            return t.from = function (e) {
                var r = new t(e.id, parseFloat(e.revenue));
                return isNaN(parseFloat(e.tax)) || (r.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (r.shipping = parseFloat(e.shipping)), St(e.currency) && e.currency.length <= 10 && (r.currency = e.currency), r
            }, t.prototype.hasValidRevenue = function () {
                return !isNaN(this.revenue) && this.revenue >= 0
            }, t
        }(), ki = function () {
            function t(t, e, r, i) {
                this.id = t, this.name = e, this.price = r, this.quantity = i
            }

            return t.from = function (e) {
                if (!t.isValid(e)) return null;
                var r = new t(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
                return bt(e.sku) && (r.sku = e.sku), bt(e.category) && (r.category = e.category), r
            }, t.isValid = function (t) {
                return St(t.id) && St(t.name) && gt(parseFloat(t.price)) && mt(parseInt(t.quantity, 10)) && (!bt(t.sku) || St(t.sku)) && (!bt(t.category) || St(t.category))
            }, t
        }(), Ai = function () {
            function t(t, e, r) {
                this.pii = t, this.transactionRequest = e, this.sessionRenewer = r, this.clear()
            }

            return t.prototype.addTransaction = function (t) {
                var e = this.pii.anonymizeFields(t, ["id"]);
                this.transaction = Ri.from(e)
            }, t.prototype.getTransaction = function () {
                return this.transaction
            }, t.prototype.sendTransaction = function () {
                this.sessionRenewer.isSessionValid() && (this.transaction.hasValidRevenue() ? this.transactionRequest.send() : It.warn("Transaction Service: unable to send transaction with invalid parameters"))
            }, t.prototype.addItem = function (t) {
                if (!Ct(t)) {
                    var e = this.pii.anonymizeFields(t, ["id", "name", "sku", "category"]), r = ki.from(e);
                    null !== r && csArray.prototype.push.call(this.transactionItems, r)
                }
            }, t.prototype.getItems = function () {
                return this.transactionItems
            }, t.prototype.clear = function () {
                this.transaction = Ri.from({revenue: NaN}), this.transactionItems = []
            }, t.prototype.getRequestParameters = function () {
                var t = {id: this.transaction.id ? "" + this.transaction.id : "", revenue: "" + this.transaction.revenue};
                return bt(this.transaction.tax) && (t.tax = "" + this.transaction.tax), bt(this.transaction.shipping) && (t.shipping = "" + this.transaction.shipping), bt(this.transaction.currency) && (t.cu = "" + this.transaction.currency), t.items = window.JSON.stringify(this.transactionItems), t
            }, t
        }(), Pi = function () {
            function t(t) {
                this.skuItem = csString.prototype.slice.call(t, 0, 100)
            }

            return Object.defineProperty(t.prototype, "sku", {
                get: function () {
                    return this.skuItem
                }, enumerable: !1, configurable: !0
            }), t
        }(), Ii = function () {
            function t(t, e) {
                this.cartItemRequest = t, this.sessionRenewer = e, this.cartItem = null
            }

            return t.prototype.addToCart = function (t) {
                this.isValidSku(t.sku) && (this.cartItem = new Pi(t.sku), this.sendCartItem())
            }, t.prototype.isValidSku = function (t) {
                return St(t) && t.length > 0
            }, t.prototype.getCartItem = function () {
                return this.cartItem
            }, t.prototype.sendCartItem = function () {
                this.sessionRenewer.isSessionValid() && this.cartItemRequest.send()
            }, t.prototype.clear = function () {
                this.cartItem = null
            }, t.prototype.getRequestParameters = function () {
                return this.cartItem ? {sku: "" + this.cartItem.sku} : {}
            }, t
        }(), Oi = ["ecommerce:addToCart", "ec:cart:add"], _i = ["ecommerce:addTransaction", "ec:transaction:create"],
        Ni = ["ecommerce:addItem", "ec:transaction:items:add"], Mi = ["ecommerce:send", "ec:transaction:send"],
        Li = function () {
            function t(t, e, r, i, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = r, this.commandsService = i, this.pii = n, this.sessionRenewer = o, this.urlService = s
            }

            return t.prototype.init = function () {
                var t = new Y(this.configuration.getTrackerUri(), "transaction"),
                    e = new Y(this.configuration.getTrackerUri(), "addtocart"),
                    r = new Ai(this.pii, t, this.sessionRenewer), n = new Ii(e, this.sessionRenewer);
                t.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, r, i), t.after((function () {
                    r.clear()
                })), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, n, i), e.after((function () {
                    n.clear()
                })), this.commandsService.register(_i, (function (t) {
                    r.addTransaction(t)
                })), this.commandsService.register(Ni, (function (t) {
                    return r.addItem(t)
                })), this.commandsService.register(Mi, (function () {
                    return r.sendTransaction()
                })), this.commandsService.register(Oi, (function (t) {
                    n.addToCart(t)
                }))
            }, t
        }(), xi = function () {
            function t(t) {
                this.windowPerformance = t.performance
            }

            return t.prototype.getRequestParameters = function () {
                if (this.areTimingsUnavailable()) return {};
                var t = this.compute();
                return {str: t.startRender, di: t.domInteractive, dc: t.domComplete, fl: t.fullyLoaded}
            }, t.prototype.compute = function () {
                var t = this.windowPerformance.timing;
                return {
                    startRender: "" + (t.domLoading - t.requestStart),
                    domInteractive: "" + (t.domInteractive - t.requestStart),
                    domComplete: "" + (t.domComplete - t.requestStart),
                    fullyLoaded: "" + (t.loadEventEnd - t.requestStart)
                }
            }, t.prototype.areTimingsUnavailable = function () {
                return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0)
            }, t
        }();

    function Di(t) {
        return void 0 !== t.tgt
    }

    !function (t) {
        t[t.TAP = 0] = "TAP", t[t.LONG_PRESS = 1] = "LONG_PRESS", t[t.DRAG = 2] = "DRAG", t[t.FLICK = 3] = "FLICK"
    }(vi || (vi = {})), function (t) {
        t[t.UP = 1] = "UP", t[t.DOWN = 2] = "DOWN", t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 4] = "RIGHT"
    }(gi || (gi = {})), function (t) {
        t[t.RESIZE = 0] = "RESIZE", t[t.SCROLL = 1] = "SCROLL", t[t.MOUSEMOVE = 2] = "MOUSEMOVE", t[t.MOUSEDOWN = 3] = "MOUSEDOWN", t[t.MOUSEUP = 4] = "MOUSEUP", t[t.CLICK = 5] = "CLICK", t[t.MOUSEOVER = 6] = "MOUSEOVER", t[t.MOUSEOUT = 7] = "MOUSEOUT", t[t.CHANGE = 10] = "CHANGE", t[t.FOCUSIN = 11] = "FOCUSIN", t[t.FOCUSOUT = 12] = "FOCUSOUT", t[t.TAP = 14] = "TAP", t[t.KEYDOWN = 15] = "KEYDOWN", t[t.KEYUP = 16] = "KEYUP", t[t.COMMAND = 17] = "COMMAND", t[t.SUBMIT = 18] = "SUBMIT"
    }(mi || (mi = {})), function (t) {
        t.SUCCESS = "success", t.FAILURE = "failure", t.ATTEMPT = "attempt"
    }(Si || (Si = {}));
    var Vi = function () {
        function t() {
        }

        return t.prototype.isEventTypeSupported = function (t) {
            return -1 !== csArray.prototype.indexOf.call(this.supportedEventTypes, t)
        }, t.prototype.enhanceAnalysisEvent = function (t, e) {
            return this.isEventTypeSupported(e.type) ? this.baseEnhanceAnalysisEvent(t, e) : e
        }, t
    }(), Ui = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), qi = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.projectConfiguration = e, i.pathComputation = r, i.supportedEventTypes = [mi.MOUSEDOWN, mi.MOUSEUP, mi.CLICK, mi.MOUSEOVER, mi.TAP], i
        }

        return Ui(e, t), e.prototype.baseEnhanceAnalysisEvent = function (t, e) {
            if (this.projectConfiguration.eMerchandisingEnabled) {
                var r = this.pathComputation.getEventTargetPathAndTargetLink(t), i = r.path, n = r.targetLink;
                e.tgt = i, e.tgtLk = n
            } else e.tgt = this.pathComputation.getEventTargetPath(t);
            return e
        }, e
    }(Vi), zi = function () {
        function t() {
        }

        return t.build = function (t, e, r) {
            return csArray.prototype.reduce.call(r, (function (e, r) {
                return r.enhanceAnalysisEvent(t, e)
            }), e)
        }, t
    }(), ji = function () {
        function t(t, e, r) {
            var i = this;
            this.configuration = t, this.pathComputation = e, this.gestureTracker = r, this.analysisEventsEnhancers = [new qi(this.configuration, this.pathComputation)], this.gestureTracker.onEvent((function (t, e) {
                return i.onTap(t, e)
            }))
        }

        return t.prototype.onTap = function (t, e) {
            if (t.type === vi.TAP) {
                var r = {type: mi.TAP, ts: 0, x: 0, y: 0, tgt: ""}, i = zi.build(e, r, this.analysisEventsEnhancers);
                i.tgt !== _.INVALID_ELEMENT && this.onEventCallback(i)
            }
        }, t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            this.gestureTracker.start()
        }, t.prototype.stop = function () {
            this.gestureTracker.stop()
        }, t
    }(), Bi = function () {
        function t() {
        }

        return t.prototype.compute = function (t, e) {
            var r = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                i = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y), n = e.time - t.time;
            return {
                duration: n,
                distance: this.computeGestureDistance(r, i),
                direction: this.computeGestureDirection(r, i),
                velocity: this.computeGestureVelocity(r, i, n)
            }
        }, t.prototype.convertPixelsToDPs = function (t) {
            return t / window.devicePixelRatio
        }, t.prototype.computeGestureDistance = function (t, e) {
            return Math.round(Math.sqrt(t * t + e * e))
        }, t.prototype.computeGestureVelocity = function (t, e, r) {
            var i = r / 1e3, n = t / i, o = e / i;
            return Math.round(Math.abs(n) + Math.abs(o))
        }, t.prototype.computeGestureDirection = function (t, e) {
            return Math.abs(t) > Math.abs(e) ? t > 0 ? gi.RIGHT : gi.LEFT : e > 0 ? gi.DOWN : gi.UP
        }, t
    }(), Hi = function (t) {
        return null !== csEventtarget.apply(t) && Ie.getShadowRoot(csEventtarget.apply(t)) && t.composedPath ? t.__csOriginalTarget || t.composedPath()[0] : csEventtarget.apply(t)
    }, Fi = function () {
        function t() {
            this.metricsComputer = new Bi, this.reset()
        }

        return t.prototype.onGesture = function (t) {
            this.onGestureCallback = t
        }, t.prototype.isValidTouchEvent = function (t) {
            return "touches" in t && "changedTouches" in t
        }, t.prototype.processActionDown = function (t) {
            this.isValidTouchStart(t) && (this.isGestureStart(t) && this.reset(), csArray.prototype.push.call(this.pendingInputs, {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY,
                time: csDate.now()
            }), this.target = Hi(t))
        }, t.prototype.processActionMove = function () {
            this.hasMove = !0
        }, t.prototype.processActionUp = function (t) {
            this.isValidTouchEnd(t) && (csArray.prototype.push.call(this.pendingInputs, {
                x: t.changedTouches[0].pageX,
                y: t.changedTouches[0].pageY,
                time: csDate.now()
            }), this.isValidSingleTouchGesture() && this.runDetection(t))
        }, t.prototype.reset = function () {
            this.pendingInputs = [], this.target = null, this.hasMove = !1
        }, t.prototype.runDetection = function (t) {
            var e = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]),
                r = this.hasMove ? this.computeSwipeGesture(e) : this.computePressGesture(e);
            this.onGestureCallback(r, t)
        }, t.prototype.computeSwipeGesture = function (t) {
            return {
                type: t.velocity < 100 ? vi.DRAG : vi.FLICK,
                target: this.target,
                velocity: t.velocity,
                distance: t.distance,
                direction: t.direction
            }
        }, t.prototype.computePressGesture = function (t) {
            return {type: t.duration < 1e3 ? vi.TAP : vi.LONG_PRESS, target: this.target}
        }, t.prototype.isGestureStart = function (t) {
            return 1 === t.touches.length
        }, t.prototype.isValidSingleTouchGesture = function () {
            return 2 === this.pendingInputs.length
        }, t.prototype.isValidTouchStart = function (t) {
            return t.touches.length > 0
        }, t.prototype.isValidTouchEnd = function (t) {
            return t.changedTouches.length > 0
        }, t
    }(), Gi = function () {
        function t(t) {
            var e = this;
            this.logger = t, this.eventHandlers = [{
                boundElement: document, type: "touchstart", listener: function (t) {
                    return e.processEvent(t)
                }
            }, {
                boundElement: document, type: "touchmove", listener: function (t) {
                    return e.processEvent(t)
                }
            }, {
                boundElement: document, type: "touchend", listener: function (t) {
                    return e.processEvent(t)
                }
            }], this.detector = new Fi
        }

        return t.prototype.onEvent = function (t) {
            this.detector.onGesture(t)
        }, t.prototype.start = function () {
            this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function (t) {
                return ne(t)
            }))
        }, t.prototype.stop = function () {
            this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function (t) {
                return oe(t)
            }))
        }, t.prototype.canDetectGesture = function () {
            return void 0 !== window.devicePixelRatio
        }, t.prototype.processEvent = function (t) {
            var e = this;
            this.logger.tryToExecute("process gesture event", (function () {
                if (e.detector.isValidTouchEvent(t)) switch (t.type) {
                    case"touchstart":
                        e.detector.processActionDown(t);
                        break;
                    case"touchmove":
                        e.detector.processActionMove();
                        break;
                    case"touchend":
                        e.detector.processActionUp(t)
                }
            }))()
        }, t.isSwipe = function (t) {
            return t.type === vi.FLICK || t.type === vi.DRAG
        }, t
    }(), Wi = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    };

    function Ki(t, e) {
        var r, i, n, o, s = function () {
            i = null;
            var e = B.now() - n;
            o = t.apply(void 0, Wi([e], r)), n = null
        };
        return function () {
            for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
            return n || (n = B.now()), i && window.clearTimeout(i), r = Wi(t), i = window.setTimeout(s, e), o
        }
    }

    var Xi, Yi;
    (Yi = Xi || (Xi = {})).isEventOnScrollContainer = function (t) {
        return !!(wt(t) && function (t) {
            try {
                if (wt(csEventtarget.apply(t))) return !0
            } catch (t) {
            }
            return !1
        }(t) && Tt(csEventtarget.apply(t)) && null !== csEventtarget.apply(t).getAttribute("data-cs-scroll-container"))
    }, Yi.getScrollContainer = function () {
        return document.querySelector("[data-cs-scroll-container]")
    };
    var Ji;
    (Ji || (Ji = {})).getRelativePosition = function (t) {
        var e = Hi(t);
        if (!(e && Tt(e) && Ct(e.getBoundingClientRect) && wt(t.pageX) && wt(t.pageY))) return {
            xRel: -1,
            yRel: -1,
            valid: !1
        };
        var r = e.getBoundingClientRect(), i = t.pageX - r.left - Ue.windowOffsetX(),
            n = t.pageY - r.top - Ue.windowOffsetY();
        e !== document.documentElement && (i += e.scrollLeft, n += e.scrollTop);
        var o = Math.max(e.scrollWidth, r.width), s = Math.max(e.scrollHeight, r.height);
        return {xRel: Math.round(i / o * 65535), yRel: Math.round(n / s * 65535), valid: !0}
    };
    var Qi, Zi = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), $i = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.projectConfiguration = e, i.pathComputation = r, i.supportedEventTypes = [mi.MOUSEMOVE], i.currentMouseMovePath = "", i
        }

        return Zi(e, t), e.prototype.baseEnhanceAnalysisEvent = function (t, e) {
            if (!this.projectConfiguration.mouseMoveHeatmapEnabled) return e;
            var r = Ji.getRelativePosition(t), i = r.valid, n = r.xRel, o = r.yRel;
            if (i) {
                var s = this.pathComputation.getEventTargetPath(t);
                s !== _.INVALID_ELEMENT && (e.xRel = n, e.yRel = o, s !== this.currentMouseMovePath || this.projectConfiguration.iframesTracking ? (this.currentMouseMovePath = s, e.tgtHM = s) : e.tgtHM = "")
            } else this.currentMouseMovePath = "";
            return e
        }, e
    }(Vi), tn = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), en = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.supportedEventTypes = [mi.CHANGE], e.validInputTypes = ["text", "email", "number", "search", "tel", "url", "password"], e
        }

        return tn(e, t), e.prototype.baseEnhanceAnalysisEvent = function (t, e) {
            var r = Hi(t);
            return m(r) && csArray.prototype.indexOf.call(this.validInputTypes, r.type) >= 0 && (e.isBlank = "" === r.value), e
        }, e
    }(Vi), rn = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, nn = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, on = function () {
        function t(t, e, r) {
            var i, n, o, s, a, c, u, p = this;
            this.projectConfiguration = t, this.pathComputation = e, this.selector = r, this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.CHANGEABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea", this.KEYSTROKE_ELEMENTS_SELECTOR = "input, select, textarea", this.DEBOUNCE_DURATION = 150, this.THROTTLE_DURATION = 400, this.scrollContainerDimensionSent = !1, this.debouncedScrollEventCallback = Ki((function (t, e) {
                return p.scrollListener(t, e)
            }), this.DEBOUNCE_DURATION), this.debouncedResizeEventCallback = Ki((function (t) {
                return p.resizeListener(t)
            }), this.DEBOUNCE_DURATION), this.throttledMouseMoveCallback = (i = function (t) {
                return p.mouseMoveListener(t)
            }, n = this.THROTTLE_DURATION, s = [], a = null, c = 0, u = function () {
                c = B.now(), a = null, o = i.apply(void 0, s)
            }, function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = B.now();
                c || (c = r);
                var p = n - (r - c);
                return s = yi(t), p <= 0 || p > n ? (c = r, o = i.apply(void 0, s), a ? (window.clearTimeout(a), a = null) : s = []) : a || (a = window.setTimeout(u, p)), o
            }), this.globalHandlers = [{
                boundElement: window, type: "resize", listener: function () {
                    return p.debouncedResizeEventCallback()
                }
            }, {
                boundElement: document, type: "scroll", listener: function (t) {
                    return p.debouncedScrollEventCallback(t)
                }
            }, {
                boundElement: window, type: "mousemove", listener: function (t) {
                    p.throttledMouseMoveCallback(p.preserveEventForAsyncUse(t))
                }
            }, {
                boundElement: document, type: "mousedown", listener: function (t) {
                    return p.mouseDownListener(t)
                }
            }, {
                boundElement: document, type: "mouseup", listener: function (t) {
                    return p.mouseUpListener(t)
                }
            }, {
                boundElement: document, type: "click", listener: function (t) {
                    return p.clickListener(t)
                }
            }], this.onSelectorHandlers = [{
                boundElement: document,
                type: "mouseover",
                listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function (t) {
                    return p.mouseOverListener(t)
                }))
            }, {
                boundElement: document,
                type: "mouseout",
                listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function (t) {
                    return p.mouseOutListener(t)
                }))
            }, {
                boundElement: document,
                type: "focusin",
                listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function (t) {
                    return p.focusInListener(t)
                }))
            }, {
                boundElement: document,
                type: "focusout",
                listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function (t) {
                    return p.focusOutListener(t)
                }))
            }, {
                boundElement: document,
                type: "change",
                listener: this.selector.on(this.CHANGEABLE_ELEMENTS_SELECTOR, (function (t) {
                    return p.changeListener(t)
                }))
            }, {
                boundElement: document,
                type: "keyup",
                listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function (t) {
                    return p.keyUpListener(t)
                }))
            }, {
                boundElement: document,
                type: "keydown",
                listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function (t) {
                    return p.keyDownListener(t)
                }))
            }, {
                boundElement: document,
                type: "copy",
                listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function (t) {
                    return p.copyListener(t)
                }))
            }, {
                boundElement: document,
                type: "cut",
                listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function (t) {
                    return p.cutListener(t)
                }))
            }, {
                boundElement: document,
                type: "paste",
                listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function (t) {
                    return p.pasteListener(t)
                }))
            }], this.analysisEventsEnhancers = [new qi(this.projectConfiguration, this.pathComputation), new $i(this.projectConfiguration, this.pathComputation), new en], this.keyStrokeMap = {}, this.initKeyStrokesMap()
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            var t = this.getSupportedHandlers();
            csArray.prototype.forEach.call(t, (function (t) {
                return ne(t)
            })), this.resizeListener()
        }, t.prototype.stop = function () {
            var t = this.getSupportedHandlers();
            csArray.prototype.forEach.call(t, (function (t) {
                return oe(t)
            }))
        }, t.prototype.getSupportedHandlers = function () {
            return this.selector.isMatchesSelectorSupported() ? nn(this.globalHandlers, this.onSelectorHandlers) : (It.warn("Element.matches is not implemented yet"), this.globalHandlers)
        }, t.prototype.resizeListener = function (t) {
            var e = Xi.getScrollContainer(), r = Tt(e);
            r && (this.scrollContainerDimensionSent = !0);
            var i = {
                type: mi.RESIZE,
                ts: 0,
                x: r ? e.clientWidth : Ue.windowWidth(),
                y: r ? e.clientHeight : Ue.windowHeight()
            };
            t && (i.d = t), this.onEventCallback(i)
        }, t.prototype.scrollListener = function (t, e) {
            var r = Xi.isEventOnScrollContainer(e);
            !this.scrollContainerDimensionSent && r && this.resizeListener();
            var i = {
                type: mi.SCROLL,
                ts: 0,
                x: r ? csEventtarget.apply(e).scrollLeft : Ue.windowOffsetX(),
                y: r ? csEventtarget.apply(e).scrollTop : Ue.windowOffsetY(),
                d: t
            }, n = zi.build(e, i, this.analysisEventsEnhancers);
            this.onEventCallback(n)
        }, t.prototype.mouseMoveListener = function (t) {
            var e = {type: mi.MOUSEMOVE, ts: 0, x: t.pageX, y: t.pageY},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallback(r)
        }, t.prototype.mouseDownListener = function (t) {
            var e = {type: mi.MOUSEDOWN, ts: 0, x: t.pageX, y: t.pageY, tgt: ""},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.mouseUpListener = function (t) {
            var e = {type: mi.MOUSEUP, ts: 0, x: t.pageX, y: t.pageY, tgt: ""},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.clickListener = function (t) {
            var e = {type: mi.CLICK, ts: 0, x: t.pageX, y: t.pageY, tgt: ""},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.mouseOverListener = function (t) {
            var e = {type: mi.MOUSEOVER, ts: 0, x: t.pageX, y: t.pageY, tgt: ""},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.mouseOutListener = function (t) {
            var e = {type: mi.MOUSEOUT, ts: 0, x: t.pageX, y: t.pageY, tgt: this.pathComputation.getEventTargetPath(t)},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.focusInListener = function (t) {
            var e = {type: mi.FOCUSIN, ts: 0, tgt: this.pathComputation.getEventTargetPath(t)},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.focusOutListener = function (t) {
            var e = {type: mi.FOCUSOUT, ts: 0, tgt: this.pathComputation.getEventTargetPath(t)},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.changeListener = function (t) {
            var e = {type: mi.CHANGE, ts: 0, tgt: this.pathComputation.getEventTargetPath(t)},
                r = zi.build(t, e, this.analysisEventsEnhancers);
            this.onEventCallbackIfValidTarget(r)
        }, t.prototype.copyListener = function (t) {
            var e = {type: mi.COMMAND, ts: 0, tgt: this.pathComputation.getEventTargetPath(t), key: ae.COPY};
            this.onEventCallbackIfValidTarget(e)
        }, t.prototype.cutListener = function (t) {
            var e = {type: mi.COMMAND, ts: 0, tgt: this.pathComputation.getEventTargetPath(t), key: ae.CUT};
            this.onEventCallbackIfValidTarget(e)
        }, t.prototype.pasteListener = function (t) {
            var e = {type: mi.COMMAND, ts: 0, tgt: this.pathComputation.getEventTargetPath(t), key: ae.PASTE};
            this.onEventCallbackIfValidTarget(e)
        }, t.prototype.keyUpListener = function (t) {
            var e = {
                type: mi.KEYUP,
                ts: 0,
                tgt: this.pathComputation.getEventTargetPath(t),
                key: this.computeKeystrokeKey(t)
            };
            this.onEventCallbackIfValidTarget(e)
        }, t.prototype.keyDownListener = function (t) {
            var e = {
                type: mi.KEYDOWN,
                ts: 0,
                tgt: this.pathComputation.getEventTargetPath(t),
                key: this.computeKeystrokeKey(t)
            };
            this.onEventCallbackIfValidTarget(e)
        }, t.prototype.computeKeystrokeKey = function (t) {
            var e = this.keyStrokeMap[t.key];
            return void 0 === e ? se.ALPHANUMERICAL : e
        }, t.prototype.onEventCallbackIfValidTarget = function (t) {
            Di(t) && t.tgt !== _.INVALID_ELEMENT && this.onEventCallback(t)
        }, t.prototype.preserveEventForAsyncUse = function (t) {
            return t.composedPath && Object.defineProperty(t, "__csOriginalTarget", {
                value: t.composedPath()[0],
                writable: !1,
                enumerable: !1
            }), t
        }, t.prototype.initKeyStrokesMap = function () {
            this.keyStrokeMap[" "] = se.SPACE, this.keyStrokeMap.Spacebar = se.SPACE, this.keyStrokeMap.Enter = se.ENTER, this.keyStrokeMap.Backspace = se.BACKSPACE, this.keyStrokeMap.Delete = se.DELETE, this.keyStrokeMap.ArrowUp = se.ARROWUP, this.keyStrokeMap.ArrowDown = se.ARROWDOWN, this.keyStrokeMap.ArrowLeft = se.ARROWLEFT, this.keyStrokeMap.ArrowRight = se.ARROWRIGHT, this.keyStrokeMap.Up = se.ARROWUP, this.keyStrokeMap.Down = se.ARROWDOWN, this.keyStrokeMap.Left = se.ARROWLEFT, this.keyStrokeMap.Right = se.ARROWRIGHT, this.keyStrokeMap.CapsLock = se.CAPSLOCK, this.keyStrokeMap.Shift = se.SHIFT, this.keyStrokeMap.Tab = se.TAB
        }, rn([Ot("Event handler type: resize")], t.prototype, "resizeListener", null), rn([Ot("Event handler type: scroll")], t.prototype, "scrollListener", null), rn([Ot("Event handler type: mouseMove")], t.prototype, "mouseMoveListener", null), rn([Ot("Event handler type: mouseDown")], t.prototype, "mouseDownListener", null), rn([Ot("Event handler type: mouseUp")], t.prototype, "mouseUpListener", null), rn([Ot("Event handler type: click")], t.prototype, "clickListener", null), rn([Ot("Event handler type: mouseOver")], t.prototype, "mouseOverListener", null), rn([Ot("Event handler type: mouseOut")], t.prototype, "mouseOutListener", null), rn([Ot("Event handler type: focusIn")], t.prototype, "focusInListener", null), rn([Ot("Event handler type: focusOut")], t.prototype, "focusOutListener", null), rn([Ot("Event handler type: change")], t.prototype, "changeListener", null), rn([Ot("Event handler type: copy")], t.prototype, "copyListener", null), rn([Ot("Event handler type: cut")], t.prototype, "cutListener", null), rn([Ot("Event handler type: paste")], t.prototype, "pasteListener", null), rn([Ot("Event handler type: keyup")], t.prototype, "keyUpListener", null), rn([Ot("Event handler type: keydown")], t.prototype, "keyDownListener", null), t
    }(), sn = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, an = function () {
        function t() {
            var t = this;
            this.MAX_SCROLL_RATE_THRESHOLD = 100, this.maxScrollRate = 0, this.maxDocumentHeight = Ue.documentHeight(), this.maxScrollRateHandler = {
                boundElement: document,
                type: "scroll",
                listener: function (e) {
                    return t.maxScrollRateListener(e)
                }
            }
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            ne(this.maxScrollRateHandler), this.reset()
        }, t.prototype.stop = function () {
            oe(this.maxScrollRateHandler)
        }, t.prototype.reset = function () {
            var t = Xi.getScrollContainer();
            if (null === t) this.maxScrollRate = this.currentScrollRate(Ue.documentHeight()); else {
                var e = this.computePaddingTop(t);
                this.maxScrollRate = this.currentScrollRateWithScrollContainer(t, e)
            }
            this.onEventCallback()
        }, t.prototype.maxScrollRateListener = function (t) {
            var e, r;
            if (Xi.isEventOnScrollContainer(t)) {
                var i = csEventtarget.apply(t), n = this.computePaddingTop(i);
                e = this.documentHeightWithScrollContainer(i, n), r = this.currentScrollRateWithScrollContainer(i, n)
            } else e = Ue.documentHeight(), r = this.currentScrollRate(e);
            (r > this.maxScrollRate || e > this.maxDocumentHeight) && (this.maxScrollRate = r, e > this.maxDocumentHeight && (this.maxDocumentHeight = e), this.onEventCallback())
        }, t.prototype.currentScrollRate = function (t) {
            var e = Math.round(this.lastPixelLine() / t * 100);
            return Math.min(e, this.MAX_SCROLL_RATE_THRESHOLD)
        }, t.prototype.lastPixelLine = function () {
            var t = Ue.windowHeight();
            return Ue.windowOffsetY() + t
        }, t.prototype.currentScrollRateWithScrollContainer = function (t, e) {
            var r = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                i = this.documentHeightWithScrollContainer(t, e), n = Math.round(r / i * 100);
            return Math.min(n, this.MAX_SCROLL_RATE_THRESHOLD)
        }, t.prototype.computePaddingTop = function (t) {
            var e = window.getComputedStyle(t).paddingTop || "0px";
            return parseInt(e, 10)
        }, t.prototype.documentHeightWithScrollContainer = function (t, e) {
            return t.scrollHeight + t.getBoundingClientRect().top + e
        }, t.prototype.getRequestParameters = function () {
            return {sr: "" + this.maxScrollRate, mdh: "" + this.maxDocumentHeight}
        }, sn([Ot("MaxScrollRate handler")], t.prototype, "maxScrollRateListener", null), t
    }(), cn = function () {
        return (cn = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, un = function () {
        function t(t, e, r, i, n, o, s, a, c, u, p, l) {
            var h = this;
            this.configuration = t, this.analysisEventsTracker = e, this.gestureTracker = r, this.maxScrollRateTracker = i, this.performanceTimingMetrics = n, this.analysisEventsBatch = o, this.analysisEventsRequest = s, this.analysisLastEventsRequest = a, this.analysisEventRequestParameters = c, this.sessionRenewer = u, this.recoveryStorage = p, this.projectPathComputation = l, this.eventEmitter = new Se, this.visibilityChangeListener = function () {
                "hidden" === document.visibilityState && h.sendLastEvents()
            }, this.sendLastEvents = function () {
                try {
                    h.analysisEventsBatch.isEmpty() || h.analysisLastEventsRequest.send()
                } catch (t) {
                }
            }
        }

        return t.prototype.init = function () {
            var t = this;
            this.analysisEventsTracker.onEvent((function (e) {
                return t.processEvent(e)
            })), this.gestureTracker.onEvent((function (e) {
                return t.processEvent(e)
            })), this.maxScrollRateTracker.onEvent((function () {
                t.analysisEventsBatch.setRequestParametersFromProvider(t.maxScrollRateTracker)
            })), this.bindRequests()
        }, t.prototype.bindRequests = function () {
            var t = this;
            this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisEventsRequest.before((function () {
                t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.enableCompression()
            })), this.analysisEventsRequest.after((function () {
                t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
            })), this.analysisEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisEventsRequest.afterProvidersCalled((function () {
                return t.analysisEventsBatch.clearEvents()
            })), this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisLastEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisLastEventsRequest.before((function () {
                t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.disableCompression()
            })), this.analysisLastEventsRequest.onBeaconSuccess((function () {
                t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
            })), this.analysisLastEventsRequest.onBeaconFailure((function () {
                t.saveLastEvents()
            }))
        }, t.prototype.initStates = function () {
            this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters), this.resetStartTime()
        }, t.prototype.start = function () {
            this.addLastEventsListeners(), this.analysisEventsTracker.start(), this.maxScrollRateTracker.start(), this.gestureTracker.start()
        }, t.prototype.onIframeAnalysisEvent = function (t) {
            this.processEvent(t)
        }, t.prototype.processEvent = function (t) {
            this.sessionRenewer.isSessionValid() && (this.analysisEventsBatch.addEvent(this.addTimestamp(t)), this.analysisEventsBatch.isFull() && this.sendEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("analysisEvent", cn(cn({}, t), {typeName: mi[t.type]})))
        }, t.prototype.addTimestamp = function (t) {
            return t.ts = this.getRelativeTime(), t
        }, t.prototype.sendEvents = function () {
            this.analysisEventsBatch.isEmpty() || this.analysisEventsRequest.send()
        }, t.prototype.stop = function () {
            this.removeLastEventsListeners(), this.analysisEventsTracker.stop(), this.maxScrollRateTracker.stop(), this.gestureTracker.stop(), this.analysisEventsBatch.empty()
        }, t.prototype.clearStates = function () {
            this.sendEvents(), this.maxScrollRateTracker.reset()
        }, t.prototype.resetStartTime = function () {
            this.startTime = B.now()
        }, t.prototype.getRelativeTime = function () {
            return B.now() - this.startTime
        }, t.prototype.addLastEventsListeners = function () {
            this.addVisibilityChangeListener(), this.addPageHideListener(), this.addBlurListener()
        }, t.prototype.removeLastEventsListeners = function () {
            this.removeVisibilityChangeListener(), this.removePageHideListener(), this.removeBlurListener()
        }, t.prototype.addVisibilityChangeListener = function () {
            document.addEventListener("visibilitychange", this.visibilityChangeListener)
        }, t.prototype.removeVisibilityChangeListener = function () {
            document.removeEventListener("visibilitychange", this.visibilityChangeListener)
        }, t.prototype.addPageHideListener = function () {
            window.addEventListener("pagehide", this.sendLastEvents)
        }, t.prototype.removePageHideListener = function () {
            window.removeEventListener("pagehide", this.sendLastEvents)
        }, t.prototype.addBlurListener = function () {
            window.addEventListener("blur", this.sendLastEvents)
        }, t.prototype.removeBlurListener = function () {
            window.removeEventListener("blur", this.sendLastEvents)
        }, t.prototype.saveLastEvents = function () {
            try {
                this.analysisEventsBatch.isEmpty() || this.recoveryStorage.save({
                    events: this.analysisEventsBatch.getEvents(),
                    metadata: this.analysisEventsBatch.getMetadata()
                })
            } catch (t) {
            }
        }, t.prototype.pushSubmitEvent = function (t, e) {
            if (function (t) {
                return t === Si.SUCCESS || t === Si.FAILURE || t === Si.ATTEMPT
            }(t)) if (Tt(e)) {
                var r = {status: t, type: mi.SUBMIT, ts: 0, tgt: this.projectPathComputation.getElementPath(e)};
                r.tgt !== _.INVALID_ELEMENT && this.processEvent(r)
            } else It.warn("AnalysisEvents Service: invalid element: " + e); else It.warn("AnalysisEvents Service: invalid submit status: " + t)
        }, t
    }();
    !function (t) {
        t.UNCOMPRESSED = "0", t.BASE64 = "1"
    }(Qi || (Qi = {}));
    var pn = hn.toString(), ln = hn();

    function hn() {
        var t = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _f: String.fromCharCode,
            compressToBase64: function (e) {
                if (null == e) return "";
                var r, i, n, o, s, a, c, u = "", p = 0;
                for (e = t.compress(e); p < 2 * e.length;) p % 2 == 0 ? (r = e.charCodeAt(p / 2) >> 8, i = 255 & e.charCodeAt(p / 2), n = p / 2 + 1 < e.length ? e.charCodeAt(p / 2 + 1) >> 8 : NaN) : (r = 255 & e.charCodeAt((p - 1) / 2), (p + 1) / 2 < e.length ? (i = e.charCodeAt((p + 1) / 2) >> 8, n = 255 & e.charCodeAt((p + 1) / 2)) : i = n = NaN), p += 3, o = r >> 2, s = (3 & r) << 4 | i >> 4, a = (15 & i) << 2 | n >> 6, c = 63 & n, isNaN(i) ? a = c = 64 : isNaN(n) && (c = 64), u = u + t._keyStr.charAt(o) + t._keyStr.charAt(s) + t._keyStr.charAt(a) + t._keyStr.charAt(c);
                return u
            },
            decompressFromBase64: function (e) {
                if (null == e) return "";
                var r, i, n, o, s, a, c, u = "", p = 0, l = 0, h = t._f;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) i = t._keyStr.indexOf(e.charAt(l++)) << 2 | (s = t._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & s) << 4 | (a = t._keyStr.indexOf(e.charAt(l++))) >> 2, o = (3 & a) << 6 | (c = t._keyStr.indexOf(e.charAt(l++))), p % 2 == 0 ? (r = i << 8, 64 != a && (u += h(r | n)), 64 != c && (r = o << 8)) : (u += h(r | i), 64 != a && (r = n << 8), 64 != c && (u += h(r | o))), p += 3;
                return t.decompress(u)
            },
            compressToUTF16: function (e) {
                if (null == e) return "";
                var r, i, n, o = "", s = 0, a = t._f;
                for (e = t.compress(e), r = 0; r < e.length; r++) switch (i = e.charCodeAt(r), s++) {
                    case 0:
                        o += a(32 + (i >> 1)), n = (1 & i) << 14;
                        break;
                    case 1:
                        o += a(n + (i >> 2) + 32), n = (3 & i) << 13;
                        break;
                    case 2:
                        o += a(n + (i >> 3) + 32), n = (7 & i) << 12;
                        break;
                    case 3:
                        o += a(n + (i >> 4) + 32), n = (15 & i) << 11;
                        break;
                    case 4:
                        o += a(n + (i >> 5) + 32), n = (31 & i) << 10;
                        break;
                    case 5:
                        o += a(n + (i >> 6) + 32), n = (63 & i) << 9;
                        break;
                    case 6:
                        o += a(n + (i >> 7) + 32), n = (127 & i) << 8;
                        break;
                    case 7:
                        o += a(n + (i >> 8) + 32), n = (255 & i) << 7;
                        break;
                    case 8:
                        o += a(n + (i >> 9) + 32), n = (511 & i) << 6;
                        break;
                    case 9:
                        o += a(n + (i >> 10) + 32), n = (1023 & i) << 5;
                        break;
                    case 10:
                        o += a(n + (i >> 11) + 32), n = (2047 & i) << 4;
                        break;
                    case 11:
                        o += a(n + (i >> 12) + 32), n = (4095 & i) << 3;
                        break;
                    case 12:
                        o += a(n + (i >> 13) + 32), n = (8191 & i) << 2;
                        break;
                    case 13:
                        o += a(n + (i >> 14) + 32), n = (16383 & i) << 1;
                        break;
                    case 14:
                        o += a(n + (i >> 15) + 32, 32 + (32767 & i)), s = 0
                }
                return o + a(n + 32)
            },
            decompressFromUTF16: function (e) {
                if (null == e) return "";
                for (var r, i, n = "", o = 0, s = 0, a = t._f; s < e.length;) {
                    switch (i = e.charCodeAt(s) - 32, o++) {
                        case 0:
                            r = i << 1;
                            break;
                        case 1:
                            n += a(r | i >> 14), r = (16383 & i) << 2;
                            break;
                        case 2:
                            n += a(r | i >> 13), r = (8191 & i) << 3;
                            break;
                        case 3:
                            n += a(r | i >> 12), r = (4095 & i) << 4;
                            break;
                        case 4:
                            n += a(r | i >> 11), r = (2047 & i) << 5;
                            break;
                        case 5:
                            n += a(r | i >> 10), r = (1023 & i) << 6;
                            break;
                        case 6:
                            n += a(r | i >> 9), r = (511 & i) << 7;
                            break;
                        case 7:
                            n += a(r | i >> 8), r = (255 & i) << 8;
                            break;
                        case 8:
                            n += a(r | i >> 7), r = (127 & i) << 9;
                            break;
                        case 9:
                            n += a(r | i >> 6), r = (63 & i) << 10;
                            break;
                        case 10:
                            n += a(r | i >> 5), r = (31 & i) << 11;
                            break;
                        case 11:
                            n += a(r | i >> 4), r = (15 & i) << 12;
                            break;
                        case 12:
                            n += a(r | i >> 3), r = (7 & i) << 13;
                            break;
                        case 13:
                            n += a(r | i >> 2), r = (3 & i) << 14;
                            break;
                        case 14:
                            n += a(r | i >> 1), r = (1 & i) << 15;
                            break;
                        case 15:
                            n += a(r | i), o = 0
                    }
                    s++
                }
                return t.decompress(n)
            },
            compressToUint8Array: function (e) {
                for (var r = t.compress(e), i = new Uint8Array(2 * r.length), n = 0, o = r.length; n < o; n++) {
                    var s = r.charCodeAt(n);
                    i[2 * n] = s >>> 8, i[2 * n + 1] = s % 256
                }
                return i
            },
            decompressFromUint8Array: function (e) {
                if (null == e) return t.decompress(e);
                for (var r = new Array(e.length / 2), i = 0, n = r.length; i < n; i++) r[i] = 256 * e[2 * i] + e[2 * i + 1];
                return t.decompress(String.fromCharCode.apply(null, r))
            },
            compressToEncodedURIComponent: function (e) {
                return t.compressToBase64(e).replace("=", "$").replace("/", "-")
            },
            decompressFromEncodedURIComponent: function (e) {
                return e && (e = e.replace("$", "=").replace("-", "/")), t.decompressFromBase64(e)
            },
            compress: function (e) {
                if (null == e) return "";
                var r, i, n, o = {}, s = {}, a = "", c = "", u = "", p = 2, l = 3, h = 2, f = "", d = 0, y = 0,
                    v = t._f;
                for (n = 0; n < e.length; n += 1) if (a = e.charAt(n), Object.prototype.hasOwnProperty.call(o, a) || (o[a] = l++, s[a] = !0), c = u + a, Object.prototype.hasOwnProperty.call(o, c)) u = c; else {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (r = 0; r < h; r++) d <<= 1, 15 == y ? (y = 0, f += v(d), d = 0) : y++;
                            for (i = u.charCodeAt(0), r = 0; r < 8; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1
                        } else {
                            for (i = 1, r = 0; r < h; r++) d = d << 1 | i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i = 0;
                            for (i = u.charCodeAt(0), r = 0; r < 16; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1
                        }
                        0 == --p && (p = Math.pow(2, h), h++), delete s[u]
                    } else for (i = o[u], r = 0; r < h; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1;
                    0 == --p && (p = Math.pow(2, h), h++), o[c] = l++, u = String(a)
                }
                if ("" !== u) {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (r = 0; r < h; r++) d <<= 1, 15 == y ? (y = 0, f += v(d), d = 0) : y++;
                            for (i = u.charCodeAt(0), r = 0; r < 8; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1
                        } else {
                            for (i = 1, r = 0; r < h; r++) d = d << 1 | i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i = 0;
                            for (i = u.charCodeAt(0), r = 0; r < 16; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1
                        }
                        0 == --p && (p = Math.pow(2, h), h++), delete s[u]
                    } else for (i = o[u], r = 0; r < h; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1;
                    0 == --p && (p = Math.pow(2, h), h++)
                }
                for (i = 2, r = 0; r < h; r++) d = d << 1 | 1 & i, 15 == y ? (y = 0, f += v(d), d = 0) : y++, i >>= 1;
                for (; ;) {
                    if (d <<= 1, 15 == y) {
                        f += v(d);
                        break
                    }
                    y++
                }
                return f
            },
            decompress: function (e) {
                if (null == e) return "";
                if ("" == e) return null;
                var r, i, n, o, s, a, c, u = [], p = 4, l = 4, h = 3, f = "", d = "", y = t._f,
                    v = {string: e, val: e.charCodeAt(0), position: 32768, index: 1};
                for (r = 0; r < 3; r += 1) u[r] = r;
                for (n = 0, s = Math.pow(2, 2), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                switch (n) {
                    case 0:
                        for (n = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = y(n);
                        break;
                    case 1:
                        for (n = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = y(n);
                        break;
                    case 2:
                        return ""
                }
                for (u[3] = c, i = d = c; ;) {
                    if (v.index > v.string.length) return "";
                    for (n = 0, s = Math.pow(2, h), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                    switch (c = n) {
                        case 0:
                            for (n = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[l++] = y(n), c = l - 1, p--;
                            break;
                        case 1:
                            for (n = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[l++] = y(n), c = l - 1, p--;
                            break;
                        case 2:
                            return d
                    }
                    if (0 == p && (p = Math.pow(2, h), h++), u[c]) f = u[c]; else {
                        if (c !== l) return null;
                        f = i + i.charAt(0)
                    }
                    d += f, u[l++] = i + f.charAt(0), i = f, 0 == --p && (p = Math.pow(2, h), h++)
                }
            }
        };
        return t
    }

    var fn = function () {
        return (fn = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, dn = function () {
        function t(t) {
            var e = t.events, r = void 0 === e ? [] : e, i = t.requestParameters, n = void 0 === i ? {} : i,
                o = t.debugService;
            this.compressed = !0, this.events = [], this.requestParameters = {}, this.events = r, this.requestParameters = n, this.debugService = o
        }

        return t.prototype.getRequestPayload = function () {
            return this.isCompressed() ? ln.compressToBase64(csJSON.stringify(this.events)) : csJSON.stringify(this.events)
        }, t.prototype.addEvent = function (t) {
            csArray.prototype.push.call(this.events, t)
        }, t.prototype.setRequestParametersFromProvider = function (t) {
            var e = t.getRequestParameters();
            for (var r in e) e.hasOwnProperty(r) && (this.requestParameters[r] = e[r])
        }, t.prototype.eventsCount = function () {
            return this.events.length
        }, t.prototype.clearEvents = function () {
            this.events = []
        }, t.prototype.empty = function () {
            this.clearEvents()
        }, t.prototype.isFull = function () {
            return this.eventsCount() >= 50
        }, t.prototype.isEmpty = function () {
            return 0 === this.events.length
        }, t.prototype.getEvents = function () {
            return this.events
        }, t.prototype.getMetadata = function () {
            return this.requestParameters
        }, t.prototype.getRequestParameters = function () {
            return fn(fn({}, this.requestParameters), {ct: this.isCompressed() ? Qi.BASE64 : Qi.UNCOMPRESSED})
        }, t.prototype.enableCompression = function () {
            this.compressed = !0
        }, t.prototype.disableCompression = function () {
            this.compressed = !1
        }, t.prototype.isCompressed = function () {
            return this.compressed && !this.debugService.isCompressionDisabled()
        }, t
    }(), yn = function () {
        function t(t, e, r) {
            var i = this;
            this.analysisEventsRecoveryRequest = t, this.recoveryStorage = e, this.debugService = r, this.visibilityChangeHandler = function () {
                "visible" === document.visibilityState && i.sendPersistedRecordings()
            }
        }

        return t.prototype.start = function () {
            this.sendPersistedRecordings(), this.addVisibilityChangeListener()
        }, t.prototype.stop = function () {
            this.removeVisibilityChangeListener()
        }, t.prototype.getRecoveryStorage = function () {
            return this.recoveryStorage
        }, t.prototype.sendPersistedRecordings = function () {
            var t = this.recoveryStorage.recover();
            if (null !== t) {
                var e = t, r = e.metadata, i = e.events,
                    n = new dn({events: i, requestParameters: r, debugService: this.debugService});
                this.analysisEventsRecoveryRequest.setRequestParametersProviders(n), this.analysisEventsRecoveryRequest.before((function () {
                    n.enableCompression()
                })), this.analysisEventsRecoveryRequest.setRequestPayloadProvider(n), this.analysisEventsRecoveryRequest.afterProvidersCalled((function () {
                    return n.clearEvents()
                })), this.analysisEventsRecoveryRequest.send()
            }
        }, t.prototype.addVisibilityChangeListener = function () {
            document.addEventListener("visibilitychange", this.visibilityChangeHandler)
        }, t.prototype.removeVisibilityChangeListener = function () {
            document.removeEventListener("visibilitychange", this.visibilityChangeHandler)
        }, t
    }();
    var vn = function () {
            function t(t) {
                this.storageName = t
            }

            return t.prototype.save = function (t) {
                localStorage.setItem(this.storageName, csJSON.stringify(t))
            }, t.prototype.clear = function () {
                localStorage.removeItem(this.storageName)
            }, t.prototype.recover = function () {
                var t = localStorage.getItem(this.storageName);
                if (null === t) return null;
                var e = null;
                try {
                    e = csJSON.parse(t)
                } catch (e) {
                    It.error("Invalid item in localStorage.\n         (key:" + this.storageName + "; value:" + t + ")")
                } finally {
                    this.clear()
                }
                return e
            }, t
        }(), gn = ["submit"], mn = function () {
            function t(t, e, r, i, n, o, s, a, c) {
                this.configuration = t, this.visitorService = e, this.sessionService = r, this.projectPathComputation = i, this.selector = n, this.commandsService = o, this.sessionRenewer = s, this.iframeEventsEmitter = a, this.debugService = c
            }

            return t.prototype.init = function () {
                var t = this;
                !function () {
                    localStorage.removeItem("csLegacyRecovered");
                    for (var t = [], e = 0; e < localStorage.length; e += 1) {
                        var r = localStorage.key(e);
                        0 === csString.prototype.indexOf.call(r, "CSStorageData") && csArray.prototype.push.call(t, r)
                    }
                    csArray.prototype.forEach.call(t, (function (t) {
                        return localStorage.removeItem(t)
                    }))
                }();
                var e = new dn({debugService: this.debugService});
                this.analysisEventsRecovery = this.createRecovery(), this.analysisEventsService = this.createService(e, this.analysisEventsRecovery.getRecoveryStorage()), this.analysisEventsService.init(), this.iframeEventsEmitter.addListeners(this.analysisEventsService), this.commandsService.register(gn, (function (e, r) {
                    t.analysisEventsService.pushSubmitEvent(e, r)
                }))
            }, t.prototype.onStartTracking = function () {
                this.analysisEventsRecovery.start(), this.analysisEventsService.start()
            }, t.prototype.onAfterNaturalPageView = function () {
                this.analysisEventsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function () {
                this.analysisEventsService.initStates()
            }, t.prototype.onBeforeArtificialPageView = function () {
                this.analysisEventsService.clearStates()
            }, t.prototype.onBeforeSessionRenewal = function () {
                this.analysisEventsService.clearStates(), this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.onOptout = function () {
                this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.createService = function (t, e) {
                var r = new xi(window), n = new an,
                    o = new on(this.configuration, this.projectPathComputation, this.selector),
                    s = new ji(this.configuration, this.projectPathComputation, new Gi(It)),
                    a = new ie(this.configuration.getTrackerUri(), "v2/events"),
                    c = new Kr(this.configuration.getTrackerUri(), "v2/events"),
                    u = new Qe(this.configuration, this.visitorService, this.sessionService, n, r, i);
                return new un(this.configuration, o, s, n, r, t, a, c, u, this.sessionRenewer, e, this.projectPathComputation)
            }, t.prototype.createRecovery = function () {
                var t = new ie(this.configuration.getTrackerUri(), "v2/events");
                return new yn(t, new vn("csAnalysisEventsPersisted"), this.debugService)
            }, t
        }(), Sn = function () {
            var t = function (e, r) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(e, r)
            };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), En = function (t) {
            function e(e, r, i) {
                var n = t.call(this) || this;
                return n.lifeCycleEventsEmitter = e, n.pageViewRequest = r, n.urlService = i, n
            }

            return Sn(e, t), e.prototype.init = function () {
                this.addPageShowListener()
            }, e.prototype.onStart = function () {
                this.sendNaturalPageView()
            }, e.prototype.onStop = function () {
            }, e.prototype.triggerArtificialPageView = function (t) {
                this.urlService.overridePath(t), this.isStarted && this.sendArtificialPageView()
            }, e.prototype.sendNaturalPageView = function () {
                this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendArtificialPageView = function () {
                this.lifeCycleEventsEmitter.emitArtificialPageViewEnd(), this.lifeCycleEventsEmitter.emitBeforeArtificialPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterArtificialPageView()
            }, e.prototype.addPageShowListener = function () {
                var t = this;
                window.addEventListener("pageshow", (function (e) {
                    t.isStarted && e.persisted && t.sendArtificialPageView()
                }))
            }, e
        }(Ee),
        bn = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function wn() {
        return {la: bn}
    }

    var Cn, Tn = function () {
        function t(t) {
            this.pii = t
        }

        return t.prototype.getRequestParameters = function () {
            return {dr: this.get()}
        }, t.prototype.get = function () {
            return this.pii.anonymize(this.getReferrer())
        }, t.prototype.getReferrer = function () {
            var t = "";
            try {
                t = window.top.document.referrer
            } catch (e) {
                if (window.parent) try {
                    t = window.parent.document.referrer
                } catch (e) {
                    t = ""
                }
            }
            return "" === t && (t = document.referrer), t
        }, t
    }(), Rn = ["trackPageview"], kn = ["setPath"], An = ["setQuery"], Pn = function () {
        function t(t, e, r, i, n, o, s, a, c) {
            this.configuration = t, this.commandsService = e, this.lifeCycleEventsEmitter = r, this.visitorService = i, this.sessionService = n, this.consentService = o, this.customVariablesService = s, this.pii = a, this.urlService = c
        }

        return t.prototype.init = function () {
            var t = this, e = new Y(this.configuration.getTrackerUri(), "pageview");
            this.pageViewService = new En(this.lifeCycleEventsEmitter, e, this.urlService), this.pageViewService.init(), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, Ue, new Tn(this.pii), this.urlService, this.consentService, n, this.customVariablesService, i), this.commandsService.register(Rn, (function (e) {
                return t.pageViewService.triggerArtificialPageView(e)
            })), this.commandsService.register(kn, (function (e) {
                return t.urlService.overridePath(e)
            })), this.commandsService.register(An, (function (e) {
                return t.urlService.overrideQuery(e)
            }))
        }, t.prototype.start = function () {
            this.pageViewService.start()
        }, t.prototype.onBeforeSessionRenewal = function () {
            this.pageViewService.stop()
        }, t
    }(), In = function () {
        function t(t, e) {
            this.pathComputation = t, this.configuration = e
        }

        return t.prototype.getEventTargetPath = function (t) {
            var e = Hi(t);
            return this.pathComputation.getElementPath(e, {
                dynamicIdRegex: this.configuration.dynamicIdRegex,
                reliableSelectors: this.configuration.pathComputationRules.reliableSelectors
            })
        }, t.prototype.getEventTargetPathAndTargetLink = function (t) {
            var e = Hi(t), r = this.pathComputation.getElementPathAndFirstAnchorParent(e, {
                dynamicIdRegex: this.configuration.dynamicIdRegex,
                reliableSelectors: this.configuration.pathComputationRules.reliableSelectors
            }), i = r.path, n = r.firstAnchorParent;
            return {path: i, targetLink: this.hasValidTargetLink(n) ? n.href : ""}
        }, t.prototype.hasValidEventTarget = function (t) {
            var e = Hi(t);
            return this.pathComputation.isValidElement(e)
        }, t.prototype.getElementPath = function (t) {
            return this.pathComputation.getElementPath(t, {
                dynamicIdRegex: this.configuration.dynamicIdRegex,
                reliableSelectors: this.configuration.pathComputationRules.reliableSelectors
            })
        }, t.prototype.hasValidTargetLink = function (t) {
            return null !== t && t.hasAttribute("href") && !V(t.getAttribute("href"), "#")
        }, t
    }(), On = function () {
        function t(t) {
            this.pathComputation = t
        }

        return t.prototype.on = function (t, e) {
            var r = this;
            return function (i) {
                r.pathComputation.hasValidEventTarget(i) && r.targetMatchesSelector(i, t) && e(i)
            }
        }, t.prototype.targetMatchesSelector = function (t, e) {
            var r = Hi(t);
            return T().call(r, e)
        }, t.prototype.isMatchesSelectorSupported = function () {
            return !!T()
        }, t
    }(), _n = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Nn = function () {
        function t() {
        }

        return t.prototype.onLoad = function (t) {
            this.onLoadCallback = t
        }, t.prototype.onLoadCallbackExecute = function () {
            this.onLoadCallback()
        }, t.prototype.start = function () {
            var t = this.onLoadCallbackExecute.bind(this);
            this.onDocumentLoaded(t)
        }, t.prototype.onDocumentLoaded = function (t) {
            function e() {
                document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), t()
            }

            "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(t) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e))
        }, _n([Ot("onLoad")], t.prototype, "onLoadCallbackExecute", null), t
    }(), Mn = ["clearSession"], Ln = ["extendSession"], xn = function () {
        function t(t, e, r) {
            this.visitorService = t, this.sessionService = e, this.commandsService = r
        }

        return t.prototype.init = function () {
            var t = this;
            this.commandsService.register(Mn, (function () {
                return t.sessionService.removeSession()
            })), this.commandsService.register(Ln, (function () {
                return t.sessionService.extendSessionPeriodically()
            }))
        }, t.prototype.onBeforeNaturalPageView = function () {
            this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
        }, t.prototype.onBeforeArtificialPageView = function () {
            this.sessionService.abortQuotaServiceRequest(), this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
        }, t.prototype.onOptout = function () {
            this.visitorService.removeVisitor(), this.sessionService.removeSession()
        }, t.prototype.onRecordingStateChange = function (t, e) {
            this.sessionService.updateRecordingState(t, e)
        }, t
    }(), Dn = function () {
        function t(t) {
            this.sessionService = t
        }

        return t.prototype.onSessionExpired = function (t) {
            this.onSessionExpiredCallback = t
        }, t.prototype.isSessionValid = function () {
            var t = this.sessionService.hasValidSession();
            return !t && this.canRenewSession() ? (this.lastSessionRenewalTime = B.now(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession()) : t
        }, t.prototype.canRenewSession = function () {
            return !bt(this.lastSessionRenewalTime) || B.now() - this.lastSessionRenewalTime > 6e4
        }, t
    }(), Vn = function () {
        function t(t, e, r) {
            this.eMerchandisingRequest = t, this.urlService = e, this.eMerchandisingTracker = r, this.requestPayload = {
                targetUrl: "",
                windowWidth: 0,
                windowHeight: 0,
                products: []
            }
        }

        return t.prototype.init = function () {
            var t = this;
            this.eMerchandisingRequest.afterProvidersCalled((function () {
                t.requestPayload.products = []
            })), this.eMerchandisingRequest.setRequestPayloadProvider({
                getRequestPayload: function () {
                    return csJSON.stringify(t.requestPayload)
                }
            })
        }, t.prototype.collect = function () {
            this.requestPayload = {
                targetUrl: this.urlService.getUrl(),
                windowWidth: Ue.windowWidth(),
                windowHeight: Ue.windowHeight(),
                products: this.eMerchandisingTracker.collectProducts()
            }, this.sendEMerchandisingData()
        }, t.prototype.onIframeEmerchandisingMessage = function (t) {
            this.requestPayload = t, this.sendEMerchandisingData()
        }, t.prototype.sendEMerchandisingData = function () {
            this.eMerchandisingRequest.send()
        }, t
    }(), Un = function () {
        function t(t) {
            this.configuration = t
        }

        return t.prototype.collectProducts = function () {
            for (var t = [], e = 0, r = this.getAllValidAnchors(this.configuration.hostnames); e < r.length; e++) {
                var i = r[e], n = _.getElementPath(i, {dynamicIdRegex: this.configuration.dynamicIdRegex});
                csArray.prototype.push.call(t, {targetPath: n, href: i.href})
            }
            return t
        }, t.prototype.getAllValidAnchors = function (t) {
            var e = this;
            return csArray.prototype.filter.call(Vr.findAllElements("a"), (function (r) {
                return e.isAnchorValid(r, t)
            }))
        }, t.prototype.isAnchorValid = function (t, e) {
            var r = ct(t.href);
            return t.offsetWidth > 0 && t.offsetHeight > 0 && "" !== r && ut(r, e)
        }, t
    }(), qn = ["emerch:collect"], zn = function () {
        function t(t, e, r, i, n, o, s) {
            this.configuration = t, this.compressor = e, this.basicRequestParameters = r, this.customVariablesService = i, this.urlService = n, this.iframeEventsEmitter = o, this.commandsService = s
        }

        return t.prototype.init = function () {
            var t = this.createEMerchandisingPostRequest(this.compressor), e = new Un(this.configuration);
            this.eMerchandisingService = new Vn(t, this.urlService, e), this.eMerchandisingService.init(), this.iframeEventsEmitter.addListeners(this.eMerchandisingService)
        }, t.prototype.registerCommands = function () {
            var t = this;
            this.commandsService.register(qn, (function () {
                t.eMerchandisingService.collect()
            }))
        }, t.prototype.onStartTracking = function () {
            this.eMerchandisingService.collect(), this.registerCommands()
        }, t.prototype.onAfterArtificialPageView = function () {
            this.eMerchandisingService.collect()
        }, t.prototype.createEMerchandisingPostRequest = function (t) {
            var e = new ie(this.configuration.getTrackerUri(), "display");
            return e.setCompressionOptions(t, "base64"), e.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService), e.setRequestHeader({
                name: "Access-Control-Expose-Headers",
                value: "Content-compression"
            }), e.setRequestHeader({
                name: "Content-type",
                value: "text/plain; charset=UTF-8"
            }), e.setRequestHeader({name: "Content-compression", value: "LZString"}), e
        }, t
    }();

    function jn(t) {
        return t.tagDeploymentMode === Cn.DualCollectionReview || t.tagDeploymentMode === Cn.DualCollection
    }

    !function (t) {
        t.ContentSquare = "CONTENTSQUARE", t.LoadedByClicktale = "LOADED_BY_CLICKTALE", t.LoadClicktalePtc = "LOAD_CLICKTALE_PTC", t.DualCollectionReview = "DUAL_COLLECTION_REVIEW", t.DualCollection = "DUAL_COLLECTION"
    }(Cn || (Cn = {}));
    var Bn, Hn = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.visitorService = e, this.sessionService = r, this.piiMaskingService = i
        }

        return t.prototype.init = function () {
            this.isClicktalePtcLoaded = !1, this.isContentSquareDataCollectionStarted = !1
        }, t.prototype.loadClicktalePtc = function () {
            !this.isClicktalePtcLoaded && this.configuration.ptcDomain && this.configuration.ptcGuid && this.doLoadClicktalePtc()
        }, t.prototype.getSessionData = function () {
            var t = this.configuration.projectId, e = this.visitorService.getVisitor();
            return {
                projectId: t,
                userId: e.id,
                sessionNumber: e.visitsCount,
                pageNumber: this.sessionService.getSession().pageNumber
            }
        }, t.prototype.startDataCollection = function (t) {
            this.isContentSquareDataCollectionStarted || (this.configuration.tagDeploymentMode === Cn.LoadClicktalePtc && this.isReplayRecordedInMalka() && this.piiMaskingService.initCTPII(), jn(this.configuration) && (this.piiMaskingService.initCTPII(), t(), this.isContentSquareDataCollectionStarted = !0))
        }, t.prototype.isReplayRecordedInMalka = function () {
            return this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded()
        }, t.prototype.doLoadClicktalePtc = function () {
            this.isClicktalePtcLoaded = !0;
            var t = this.buildScriptElement();
            document.getElementsByTagName("head")[0].appendChild(t)
        }, t.prototype.buildScriptElement = function () {
            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "script");
            return t.async = !0, t.crossOrigin = "anonymous", t.type = "text/javascript", this.configuration.ptcSha512 && this.configuration.ptcSnapshotPath ? (t.integrity = "sha512-" + this.configuration.ptcSha512, t.src = "https://" + this.configuration.ptcDomain + "/" + this.configuration.ptcSnapshotPath + "/ptc.js") : t.src = "https://" + this.configuration.ptcDomain + "/ptc/" + this.configuration.ptcGuid + ".js", t
        }, t
    }();
    !function (t) {
        t.isRecording = function () {
            return window.ClickTaleIsRecording && window.ClickTaleIsRecording()
        }, t.stopRecording = function () {
            window.ClickTaleStop && window.ClickTaleStop()
        }, t.triggerLogicalPageView = function (t) {
            window.ClickTaleLogicalWithUploadPage && window.ClickTaleLogicalWithUploadPage(t)
        }, t.sendPageEvent = function (t) {
            window.ClickTaleEvent && window.ClickTaleEvent(t)
        }, t.sendEventTriggerRecording = function (t) {
            window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(t)
        }
    }(Bn || (Bn = {}));
    var Fn, Gn = function () {
        function t(t, e, r, i, n, o, s) {
            this.configuration = t, this.visitorService = e, this.sessionService = r, this.urlService = i, this.commandsService = n, this.startDataCollectionCallback = o, this.piiMaskingService = s
        }

        return t.prototype.init = function () {
            var t = this;
            this.clicktaleIntegrationService = new Hn(this.configuration, this.visitorService, this.sessionService, this.piiMaskingService), this.clicktaleIntegrationService.init(), this.loadPtcForDualCollection(), this.commandsService.register(["getSessionData"], (function () {
                return t.clicktaleIntegrationService.getSessionData()
            })), this.commandsService.register(["startDataCollection"], (function () {
                t.clicktaleIntegrationService.startDataCollection(t.startDataCollectionCallback)
            }))
        }, t.prototype.loadPtcForDualCollection = function () {
            jn(this.configuration) && this.clicktaleIntegrationService.loadClicktalePtc()
        }, t.prototype.onAfterNaturalPageView = function () {
            this.configuration.tagDeploymentMode === Cn.LoadClicktalePtc && (!this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded() || this.clicktaleIntegrationService.loadClicktalePtc())
        }, t.prototype.onAfterArtificialPageView = function () {
            !this.sessionService.isReplayRecorded() && Bn.isRecording() && this.configuration.tagDeploymentMode === Cn.LoadClicktalePtc && Bn.triggerLogicalPageView(this.urlService.getUrl())
        }, t.prototype.onAfterSessionRenewal = function () {
            !this.sessionService.isReplayRecorded() && Bn.isRecording() && Bn.triggerLogicalPageView(this.urlService.getUrl())
        }, t.prototype.onOptout = function () {
            Bn.isRecording() && Bn.stopRecording()
        }, t
    }(), Wn = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Kn = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, Xn = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, Yn = function (t) {
        function e(e, r, i, n, o) {
            var s = t.call(this) || this;
            return s.configuration = e, s.pageEventRequest = r, s.compressor = i, s.customEventsEmitter = n, s.hashHelper = o, s.pageEventsQueue = [], s.etrQueue = [], s
        }

        return Wn(e, t), e.prototype.onStart = function () {
            var t = this;
            csArray.prototype.forEach.call(this.pageEventsQueue, (function (e) {
                return t.trackPageEvent(e)
            })), this.pageEventsQueue = [], csArray.prototype.forEach.call(this.etrQueue, (function (e) {
                return t.trackEventTriggerRecording(e)
            })), this.etrQueue = []
        }, e.prototype.onStop = function () {
        }, e.prototype.trackPageEvent = function (t) {
            this.isStarted ? e.isValidEventName(t) && (this.isCustomHashIdEvent(t) ? this.hashHelper.isSupported() && this.trackEventWithCustomHashId(t) : this.trackEvent(t)) : csArray.prototype.push.call(this.pageEventsQueue, t)
        }, e.prototype.isCustomHashIdEvent = function (t) {
            return V(t, "@user-identifier@")
        }, e.prototype.trackEventWithCustomHashId = function (t) {
            return Kn(this, void 0, void 0, (function () {
                var e, r;
                return Xn(this, (function (i) {
                    switch (i.label) {
                        case 0:
                            return this.configuration.customHashIdEnabled ? (e = csString.prototype.slice.call(t, "@user-identifier@".length), this.hashHelper.isValidInput(e) ? [4, this.hashHelper.digest(e, this.configuration.projectId)] : (It.warn("Page event: invalid user identifier"), [2])) : (It.warn("Page event: customHashId feature disabled"), [2]);
                        case 1:
                            return (r = i.sent()) ? (this.pageEventRequestParameter = {
                                eventName: r,
                                isETR: !1,
                                isCustomHashId: !0
                            }, this.sendPageEvent()) : It.warn("Page event: unable to compute customHashId"), [2]
                    }
                }))
            }))
        }, e.prototype.trackEvent = function (t) {
            this.customEventsEmitter.emitPageEvent(t), this.pageEventRequestParameter = {
                eventName: t,
                isETR: !1,
                isCustomHashId: !1
            }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Cn.LoadClicktalePtc && Bn.sendPageEvent(t)
        }, e.prototype.trackEventTriggerRecording = function (t) {
            this.isStarted ? e.isValidEventName(t) && (this.configuration.useMalkaPipeline && this.configuration.malkaEtrEnabled ? this.trackMalkaEventTriggerRecording(t) : this.trackLegacyEventTriggerRecording(t)) : csArray.prototype.push.call(this.etrQueue, t)
        }, e.prototype.trackMalkaEventTriggerRecording = function (t) {
            V(t, "@ETP@") ? this.customEventsEmitter.emitEventTriggerRecording(t, Ut.ETR_PAGE) : this.customEventsEmitter.emitEventTriggerRecording(t, Ut.ETR_SESSION), this.pageEventRequestParameter = {
                eventName: t,
                isETR: !0,
                isCustomHashId: !1
            }, this.sendPageEvent()
        }, e.prototype.trackLegacyEventTriggerRecording = function (t) {
            var e;
            (jn(e = this.configuration) || e.tagDeploymentMode === Cn.LoadClicktalePtc) && (this.customEventsEmitter.emitEventTriggerRecording(t, Ut.ETR_LEGACY), this.pageEventRequestParameter = {
                eventName: t,
                isETR: !0,
                isCustomHashId: !1
            }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Cn.LoadClicktalePtc && Bn.sendEventTriggerRecording(t))
        }, e.prototype.getRequestParameters = function () {
            return {
                value: this.compressor.compressSync(this.pageEventRequestParameter.eventName),
                isETR: "" + this.pageEventRequestParameter.isETR,
                isCustomHashId: "" + this.pageEventRequestParameter.isCustomHashId
            }
        }, e.prototype.sendPageEvent = function () {
            this.pageEventRequest.send()
        }, e.isValidEventName = function (t) {
            return St(t) && !!csString.prototype.trim.call(t)
        }, e
    }(Ee), Jn = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, Qn = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, Zn = function () {
        function t(t) {
            this.crypto = t, this.isHashingSupported = !1
        }

        return t.prototype.init = function () {
            this.isHashingSupported = this.canSupportHashing(), this.isHashingSupported && (this.textEncoder = new TextEncoder)
        }, t.prototype.canSupportHashing = function () {
            return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.digest && self.TextEncoder && csArray.from)
        }, t.prototype.isSupported = function () {
            return this.isHashingSupported
        }, t.prototype.isValidInput = function (t) {
            return !!t && t.length <= 100
        }, t.prototype.formatInput = function (t, e) {
            return csString.prototype.toLowerCase.call(csString.prototype.trim.call(t)) + ":" + e
        }, t.prototype.digest = function (t, e) {
            return Jn(this, void 0, void 0, (function () {
                var r, i, n;
                return Qn(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            if (!this.isHashingSupported) return [2, null];
                            r = this.formatInput(t, e), i = this.textEncoder.encode(r), o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]), [4, crypto.subtle.digest("SHA-1", i)];
                        case 2:
                            return n = o.sent(), [2, (s = n, a = csArray.from(new Uint8Array(s)), csArray.prototype.join.call(csArray.prototype.map.call(a, (function (t) {
                                return csString.prototype.padStart.call(t.toString(16), 2, "0")
                            })), ""))];
                        case 3:
                            return o.sent(), [2, null];
                        case 4:
                            return [2]
                    }
                    var s, a
                }))
            }))
        }, t
    }(), $n = ["trackPageEvent"], to = ["trackEventTriggerRecording"], eo = function () {
        function t(t, e, r, i, n) {
            this.configuration = t, this.commandsService = e, this.compressor = r, this.basicParameters = i, this.customEventsEmitter = n
        }

        return t.prototype.init = function () {
            var t = this, e = new Y(this.configuration.getTrackerUri(), "pageEvent"), r = new Zn(window.crypto);
            r.init(), this.pageEventService = new Yn(this.configuration, e, this.compressor, this.customEventsEmitter, r), e.setRequestParametersProviders(this.pageEventService, this.basicParameters), this.commandsService.register($n, (function (e) {
                t.pageEventService.trackPageEvent(e)
            })), this.commandsService.register(to, (function (e) {
                t.pageEventService.trackEventTriggerRecording(e)
            }))
        }, t.prototype.onStartTracking = function () {
            this.pageEventService.start()
        }, t
    }(), ro = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, io = [".ctHidden, textarea"], no = function () {
        function t(t) {
            this.configuration = t, this.piiMaskSelectors = {
                PIISelectors: [],
                Attributes: []
            }, jn(this.configuration) || csArray.prototype.push.call(this.piiMaskSelectors.PIISelectors, "[data-cs-mask]")
        }

        return t.prototype.setPIISelectors = function (t) {
            var e;
            !jn(this.configuration) && t && ((null === (e = t.PIISelectors) || void 0 === e ? void 0 : e.length) && (this.piiMaskSelectors.PIISelectors = ro(this.piiMaskSelectors.PIISelectors, t.PIISelectors)), this.piiMaskSelectors.Attributes = t.Attributes instanceof Array ? ro(t.Attributes) : [])
        }, t.prototype.initCTPII = function () {
            var t, e, r = this;
            (null === (e = null === (t = null === window || void 0 === window ? void 0 : window.ClickTaleSettings) || void 0 === t ? void 0 : t.DOM) || void 0 === e ? void 0 : e.PII) && (this.piiMaskSelectors.PIISelectors = ro(io, window.ClickTaleSettings.DOM.PII.Text), csArray.prototype.map.call(window.ClickTaleSettings.DOM.PII.Attributes, (function (t) {
                csArray.prototype.push.call(r.piiMaskSelectors.Attributes, {selector: t.rule, attrName: t.attr})
            })))
        }, t.prototype.isElementMatchingSelectors = function (t, e) {
            return csArray.prototype.some.call(e, (function (e) {
                return R.call(t, e)
            }))
        }, t.prototype.isElementMatchingAttributes = function (t, e, r) {
            return csArray.prototype.some.call(r, (function (r) {
                return t.hasAttribute(e) && csString.prototype.indexOf.call(r.attrName, e) > -1 && R.call(t, r.selector)
            }))
        }, t.prototype.checkAttributeMatch = function (t, e) {
            return 0 !== this.piiMaskSelectors.Attributes.length && this.isElementMatchingAttributes(t, e, this.piiMaskSelectors.Attributes)
        }, t.prototype.checkNodeMatch = function (t) {
            return this.isElementMatchingSelectors(t, this.piiMaskSelectors.PIISelectors)
        }, t
    }(), oo = function () {
        function t(t) {
            this.commandsService = t
        }

        return t.prototype.init = function () {
            this.commandsService.register(["logSnippetError"], (function (t, e) {
                St(t) && St(e) && It.error(e, "snippet-" + t)
            }))
        }, t
    }(), so = function () {
        function t(t, e, r) {
            this.configuration = t, this.iframeParentToChildrenCommunicationService = e, this.iframeEventsEmitter = r
        }

        return t.prototype.init = function () {
            var t = this;
            this.iframeParentToChildrenCommunicationService.onChildMessage((function (e, r, i, n) {
                return t.iframeEventsEmitter.emitIframeEvent(e, r, i, n)
            }))
        }, t.prototype.onStartTracking = function () {
            this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.start()
        }, t.prototype.onOptout = function () {
            this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.stop()
        }, t
    }(), ao = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), co = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.configuration = e, r.iframes = [], r.messageHandler = {
                boundElement: window,
                type: "message",
                listener: function (t) {
                    return r.messagesListener(t)
                }
            }, r
        }

        return ao(e, t), e.prototype.onChildMessage = function (t) {
            this.onChildMessageCallback = t
        }, e.prototype.sendToChildren = function (t, e) {
            var r = ft.buildBaseMessage(t, lt.Parent, this.configuration.projectId);
            r.content = e, this.sendMessageToChildren(r)
        }, e.prototype.onStart = function () {
            ne(this.messageHandler, !1), this.discoverValidIframes()
        }, e.prototype.onStop = function () {
            this.sendStopMessages(), oe(this.messageHandler, !1)
        }, e.prototype.discoverValidIframes = function () {
            this.iframes = this.getAllValidIframes(), this.sendDiscoveryMessages()
        }, e.prototype.getAllValidIframes = function () {
            var t = this;
            return csArray.prototype.filter.call(Vr.findAllElements("iframe"), (function (e) {
                return t.isIframeValid(e)
            }))
        }, e.prototype.isIframeValid = function (t) {
            return "cs-native-frame" !== t.id && (!t.src || ut(ct(t.src), this.configuration.hostnames))
        }, e.prototype.sendMessageToChildren = function (t) {
            csArray.prototype.forEach.call(this.iframes, (function (e) {
                e.contentWindow && ft.sendMessage(e.contentWindow, "*", t)
            }))
        }, e.prototype.sendDiscoveryMessages = function () {
            var t = this;
            csArray.prototype.forEach.call(this.iframes, (function (e, r) {
                e.contentWindow && ft.sendMessage(e.contentWindow, "*", t.buildDiscoveryMessage(r))
            }))
        }, e.prototype.sendStopMessages = function () {
            this.sendMessageToChildren(this.buildStopMessage())
        }, e.prototype.buildDiscoveryMessage = function (t) {
            return ft.buildBaseMessage(ht.Discovery, lt.Parent, this.configuration.projectId, t)
        }, e.prototype.buildStopMessage = function () {
            return ft.buildBaseMessage(ht.Stop, lt.Parent, this.configuration.projectId)
        }, e.prototype.messagesListener = function (t) {
            if (ft.isMessageValid(t, lt.Child, this.configuration.projectId, this.configuration.hostnames)) if (void 0 !== t.data.id || t.data.type !== ht.Discovery) if (mt(t.data.id) && void 0 !== this.iframes[t.data.id] || t.data.type === ht.ChildLogMessage) {
                var e = this.iframes[t.data.id],
                    r = _.getElementPath(e, {dynamicIdRegex: this.configuration.dynamicIdRegex}), i = t.data.type,
                    n = t.data.content;
                this.onChildMessageCallback(e, r, i, n)
            } else It.error("Parent received data from unknown iframe : " + csJSON.stringify(t.data)); else this.discoverValidIframes()
        }, e
    }(Ee), uo = function () {
        function t(t, e, r, i, n, o, s, a, c, u, p, l, h, f, d, y, v, g, m, S, E, b, w, C) {
            var T = this;
            this.basicRequestParameters = t, this.compressor = e, this.visitorService = r, this.sessionService = i, this.lifeCycleEventsEmitter = n, this.commandsService = o, this.commandsModule = s, this.configuration = a, this.optoutModule = c, this.optoutService = u, this.consentModule = p, this.consentService = l, this.pii = h, this.urlService = f, this.projectConfigurationModule = d, this.customEventsEmitter = y, this.javaScriptErrorsTracker = v, this.javaScriptErrorsAnonymizer = g, this.apiErrorsTracker = m, this.apiErrorsAnonymizer = S, this.iframeEventsEmitter = E, this.debugService = b, this.customVariablesService = w, this.customVariablesModule = C, this.startDataCollection = function () {
                T.pageViewModule.start(), T.loadTracker.start()
            }
        }

        return t.prototype.start = function () {
            var t = this;
            if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
                var e = new Dn(this.sessionService), r = new In(_, this.configuration), i = new On(r),
                    n = new mn(this.configuration, this.visitorService, this.sessionService, r, i, this.commandsService, e, this.iframeEventsEmitter, this.debugService),
                    o = new Ti(this.commandsService, this.sessionService, this.configuration, this.basicRequestParameters, this.compressor, this.pii),
                    s = new co(this.configuration), a = new so(this.configuration, s, this.iframeEventsEmitter);
                a.init();
                var c = new li(this.visitorService, this.sessionService, this.commandsService, this.iframeEventsEmitter, s),
                    u = new Li(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, e, this.urlService);
                this.pageViewModule = new Pn(this.configuration, this.commandsService, this.lifeCycleEventsEmitter, this.visitorService, this.sessionService, this.consentService, this.customVariablesService, this.pii, this.urlService);
                var p = new xn(this.visitorService, this.sessionService, this.commandsService),
                    l = new no(this.configuration),
                    h = new Gn(this.configuration, this.visitorService, this.sessionService, this.urlService, this.commandsService, this.startDataCollection, l),
                    f = new eo(this.configuration, this.commandsService, this.compressor, this.basicRequestParameters, this.customEventsEmitter),
                    d = new oo(this.commandsService);
                if (this.loadTracker = new Nn, this.consentModule.init(), c.init(), o.init(), u.init(), this.customVariablesModule.init(), this.pageViewModule.init(), p.init(), h.init(), f.init(), this.projectConfigurationModule.init(), d.init(), this.lifeCycleEventsEmitter.addListeners(p, this.commandsModule, n, this.consentModule, c, this.customVariablesModule, this.pageViewModule, h, f, o, a), ni.isSupported() && this.compressor.isSupported()) {
                    var y = new ni(this.sessionService, this.configuration, this.compressor, i, this.consentService, this.basicRequestParameters, this.commandsService, this.pii, e, this.urlService, l, this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, this.apiErrorsAnonymizer, this.debugService, this.lifeCycleEventsEmitter, this.customEventsEmitter);
                    y.init(), this.lifeCycleEventsEmitter.addListeners(y)
                }
                if (this.configuration.eMerchandisingEnabled) {
                    var v = new zn(this.configuration, this.compressor, this.basicRequestParameters, this.customVariablesService, this.urlService, this.iframeEventsEmitter, this.commandsService);
                    v.init(), this.lifeCycleEventsEmitter.addListeners(v)
                }
                n.init(), e.onSessionExpired((function () {
                    t.lifeCycleEventsEmitter.emitBeforeSessionRenewal(), t.doStart(!0), t.lifeCycleEventsEmitter.emitAfterSessionRenewal()
                })), this.doStart()
            }
        }, t.prototype.doStart = function (t) {
            var e = this;
            void 0 === t && (t = !1), this.commandsService.start(), this.loadTracker.onLoad((function () {
                e.lifeCycleEventsEmitter.emitStartTracking()
            })), jn(this.configuration) && !t || this.startDataCollection()
        }, t
    }(), po = function () {
        function t(t, e, r, i, n, o, s, a) {
            this.configuration = t, this.visitorService = e, this.exclusionService = r, this.outdatedState = i, this.allowSubdomainsChange = n, this.crossDomainService = o, this.crossDomainSingleIframeService = s, this.forceInclusionService = a
        }

        return t.prototype.compute = function (t) {
            var e = this;
            this.configuration.crossDomainTracking && !this.configuration.cookielessTrackingEnabled ? this.configuration.crossDomainSingleIframeTracking ? this.crossDomainSingleIframeService.start((function () {
                return e.computeState(t)
            })) : this.crossDomainService.applyUpToDate((function () {
                return e.computeState(t)
            })) : this.computeState(t)
        }, t.prototype.computeState = function (t) {
            this.allowSubdomainsChange.handle(), this.outdatedState.clear(), this.isIncluded() ? (this.outdatedState.restoreClearedVisitor(), t(!0)) : (this.exclusionService.exclude(this.configuration), t(!1))
        }, t.prototype.isIncluded = function () {
            var t = j.boolean(this.configuration.sampleRate);
            return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && t
        }, t
    }();
    !function (t) {
        t.generate = function () {
            var t = navigator.userAgent + navigator.language + navigator.platform,
                e = csString.prototype.slice.call(function (t) {
                    for (var e = 0, r = 0; r < t.length; r += 1) e = csString.prototype.charCodeAt.call(t, r) + (e << 6) + (e << 16) - e;
                    return Math.abs(e)
                }(t).toString(16), -4), r = (new csDate).getTime(),
                i = csString.prototype.replace.call("xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx", /[xy]/g, (function (t) {
                    var e = (r + 16 * Math.random()) % 16 | 0;
                    return r = Math.floor(r / 16), ("x" === t ? e : 7 & e | 8).toString(16)
                }));
            return csString.prototype.replace.call(i, "hhhh", e)
        }
    }(Fn || (Fn = {}));
    var lo, ho = function () {
        function t(t, e, r) {
            this.configuration = t, this.storage = e, this.sessionService = r
        }

        return t.prototype.createOrUpdateVisitor = function () {
            var t = this.getVisitor();
            null === t && (t = this.createVisitor(), this.sessionService.removeSession()), this.updateVisitor(t), this.setVisitor(t)
        }, t.prototype.createVisitor = function () {
            return {
                id: Fn.generate(),
                visitsCount: 0,
                appliedTrackingDraw: this.configuration.lastTrackingDraw,
                creationTimestamp: x(),
                lastVisitTimestamp: 0,
                hitTimestamp: 0,
                expires: B.now() + this.configuration.visitorCookieTimeout
            }
        }, t.prototype.updateVisitor = function (t) {
            var e = x();
            this.sessionService.doesSessionExist() || (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.configuration.lastTrackingDraw
        }, t.prototype.getRequestParameters = function () {
            var t = this.getVisitor();
            return t ? {
                uu: t.id,
                sn: "" + t.visitsCount,
                lv: "" + t.lastVisitTimestamp,
                lhd: "" + t.lastVisitTimestamp,
                hd: "" + t.hitTimestamp
            } : {}
        }, t.prototype.getVisitor = function () {
            return this.storage.get()
        }, t.prototype.setVisitor = function (t) {
            this.storage.set(t)
        }, t.prototype.doesVisitorExist = function () {
            return null !== this.storage.get()
        }, t.prototype.removeVisitor = function () {
            this.storage.remove()
        }, t.prototype.handleSubdomainChange = function () {
            this.storage.handleSubdomainChange()
        }, t
    }(), fo = function () {
        function t(t, e) {
            this.configuration = t, this.compressor = e
        }

        return t.prototype.isCompressionSupported = function () {
            return this.compressor.isSupported()
        }, t
    }(), yo = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), vo = function (t) {
        function e(e, r, i, n) {
            var o = t.call(this, e, r) || this;
            return o.configuration = e, o.compressor = r, o.forceInclusionService = i, o.urlService = n, o
        }

        return yo(e, t), e.prototype.sanitizeSessionRecordingState = function (t) {
            return t
        }, e.prototype.computeInitialRecordingState = function (t) {
            return this.isCompressionSupported() && (this.forceInclusionService.isForceLegacyReplayRecorded() || j.percentage() < this.configuration.replayRecordingRate && ni.isSupported()) ? xt.REPLAY_RECORDING_ENABLED : xt.REPLAY_RECORDING_DISABLED
        }, e.prototype.updateRecordingState = function (t) {
            return t.recordingState
        }, e.prototype.isReplayRecorded = function (t) {
            return t.recordingState === xt.REPLAY_RECORDING_ENABLED || this.computeTriggerSessionReplayStatus(t)
        }, e.prototype.computeTriggerSessionReplayStatus = function (t) {
            if (this.configuration.triggerSessionReplayEnabled && this.configuration.triggerSessionReplayRegex && t.recordingState !== xt.REPLAY_RECORDING_ENABLED) {
                var e = this.urlService.getUrl();
                return this.configuration.triggerSessionReplayRegex.test(e)
            }
            return !1
        }, e.prototype.getDisabledRecordingState = function () {
            return xt.REPLAY_RECORDING_DISABLED
        }, e.prototype.setVisitorService = function (t) {
        }, e
    }(fo), go = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), mo = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, So = function (t) {
        function e(e, r, i, n, o, s) {
            var a = t.call(this, e, r) || this;
            return a.configuration = e, a.compressor = r, a.quotaServiceRequest = i, a.lifeCycleEventsEmitter = n, a.forceInclusionService = o, a.urlService = s, a.requestedRecordingTypes = [], a
        }

        return go(e, t), e.prototype.init = function () {
            this.bindQuotaServiceRequest()
        }, e.prototype.sanitizeSessionRecordingState = function (t) {
            return t.recordingState === Dt.TEMPORARILY_RECORDED && (t.recordingState = Dt.NOT_RECORDED), t
        }, e.prototype.computeInitialRecordingState = function (t) {
            return this.isCompressionSupported() && ni.isSupported() ? (this.requestedRecordingTypes = [], j.percentage() < this.configuration.replayRecordingRate || this.forceInclusionService.isForceMalkaReplayRecorded() ? csArray.prototype.push.call(this.requestedRecordingTypes, Dt.GLOBAL_SAMPLING) : this.configuration.malkaUrlEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Dt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Dt.ETR_SAMPLING), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Dt.TEMPORARILY_RECORDED) : Dt.NOT_RECORDED) : Dt.NOT_RECORDED
        }, e.prototype.updateRecordingState = function (t) {
            return this.isCompressionSupported() && ni.isSupported() ? t.recordingState === Dt.GLOBAL_SAMPLING ? Dt.GLOBAL_SAMPLING : (this.requestedRecordingTypes = [], this.configuration.malkaUrlEnabled && (csArray.prototype.push.call(this.requestedRecordingTypes, Dt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Dt.ETR_SAMPLING)), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Dt.TEMPORARILY_RECORDED) : Dt.NOT_RECORDED) : Dt.NOT_RECORDED
        }, e.prototype.sendSamplingRequest = function (t) {
            var e, r = this, i = null === (e = this.visitorService) || void 0 === e ? void 0 : e.getVisitor();
            this.quotaServiceRequest.setRequestPayloadProvider({
                getRequestPayload: function () {
                    return csJSON.stringify({
                        recordingTypes: csArray.prototype.map.call(r.requestedRecordingTypes, Number),
                        url: r.urlService.getUrl(),
                        projectId: r.configuration.projectId,
                        uu: (null == i ? void 0 : i.id) || "",
                        sn: (null == i ? void 0 : i.visitsCount) || "",
                        pn: (null == t ? void 0 : t.pageNumber) || ""
                    })
                }
            }), this.quotaServiceRequest.send()
        }, e.prototype.abortQuotaServiceRequest = function () {
            this.quotaServiceRequest.abort()
        }, e.prototype.isReplayRecorded = function (t) {
            return t.recordingState === Dt.TEMPORARILY_RECORDED || t.recordingState === Dt.GLOBAL_SAMPLING || t.recordingState === Dt.URL_SAMPLING || t.etrState === Vt.ETR_ON
        }, e.prototype.bindQuotaServiceRequest = function () {
            var t = this;
            this.quotaServiceRequest.setRequestHeader({
                name: "Content-Type",
                value: "application/json"
            }), this.quotaServiceRequest.onError((function () {
                return t.quotaServiceErrorHandler("NetworkError")
            })), this.quotaServiceRequest.onTimeout(3e3, (function () {
                return t.quotaServiceTimeoutHandler()
            })), this.quotaServiceRequest.onLoad((function (e) {
                return t.quotaServiceLoadHandler(e)
            }))
        }, e.prototype.quotaServiceErrorHandler = function (t) {
            this.emitRecordingStateOnError(), It.warn("Quota Service: request error - " + t)
        }, e.prototype.quotaServiceTimeoutHandler = function () {
            this.emitRecordingStateOnError(), It.warn("Quota Service: request timeout")
        }, e.prototype.emitRecordingStateOnError = function () {
            var t = Dt.NOT_RECORDED;
            this.isGlobalSamplingAllowed(this.requestedRecordingTypes) && (t = Dt.GLOBAL_SAMPLING), this.lifeCycleEventsEmitter.emitRecordingStateChange(t, Vt.ETR_OFF)
        }, e.prototype.quotaServiceLoadHandler = function (t) {
            if (200 === t.status) {
                var e;
                try {
                    e = csJSON.parse(t.responseText)
                } catch (e) {
                    return void this.quotaServiceErrorHandler("Unable to parse the quota service response: " + t.responseText)
                }
                var r = csArray.prototype.map.call(e.allowedRecordingTypes, csString);
                if (r) {
                    var i = Vt.ETR_OFF, n = Dt.NOT_RECORDED;
                    this.isGlobalSamplingAllowed(r) ? n = Dt.GLOBAL_SAMPLING : this.isUrlSamplingAllowed(r) && (n = Dt.URL_SAMPLING), this.isEtrSamplingAllowed(r) && (i = Vt.ETR_ON), this.lifeCycleEventsEmitter.emitRecordingStateChange(n, i)
                } else this.quotaServiceErrorHandler("recording types missing from quota service response")
            } else this.quotaServiceErrorHandler("Status code: " + t.status)
        }, e.prototype.isGlobalSamplingAllowed = function (t) {
            return csArray.prototype.some.call(t, (function (t) {
                return t === Dt.GLOBAL_SAMPLING
            }))
        }, e.prototype.isUrlSamplingAllowed = function (t) {
            return csArray.prototype.some.call(t, (function (t) {
                return t === Dt.URL_SAMPLING
            }))
        }, e.prototype.isEtrSamplingAllowed = function (t) {
            return csArray.prototype.some.call(t, (function (t) {
                return t === Dt.ETR_SAMPLING
            }))
        }, e.prototype.setVisitorService = function (t) {
            this.visitorService = t
        }, e.prototype.getDisabledRecordingState = function () {
            return Dt.NOT_RECORDED
        }, mo([Ot("Quota Service: onerror")], e.prototype, "quotaServiceErrorHandler", null), mo([Ot("Quota Service: ontimeout")], e.prototype, "quotaServiceTimeoutHandler", null), mo([Ot("Quota Service: onload")], e.prototype, "quotaServiceLoadHandler", null), e
    }(fo), Eo = function () {
        function t(t, e) {
            this.sessionStorage = t, this.recordingStateStrategy = e, this.triggerSessionReplayOngoing = !1, this.extendedSessionTimeoutId = null, this.sessionExtensionCount = 0
        }

        return t.prototype.setDynamicVariablesService = function (t) {
            this.dynamicVariablesService = t
        }, t.prototype.createOrUpdateSession = function () {
            this.stopSessionExtension(), this.beginSession = B.now(), this.sessionExtensionCount = 0;
            var t = this.getSessionWithoutCache();
            null === t ? (t = this.buildSessionObject(), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t)) : (t = this.recordingStateStrategy.sanitizeSessionRecordingState(t), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.updateRecordingState(t)), this.setSession(t), this.setTriggerSessionReplayStatus(t)
        }, t.prototype.buildSessionObject = function () {
            return {
                pageNumber: 0,
                recordingState: this.recordingStateStrategy.getDisabledRecordingState(),
                etrState: Vt.ETR_OFF
            }
        }, t.prototype.setTriggerSessionReplayStatus = function (t) {
            this.recordingStateStrategy instanceof vo ? this.triggerSessionReplayOngoing = this.recordingStateStrategy.computeTriggerSessionReplayStatus(t) : this.triggerSessionReplayOngoing = !1
        }, t.prototype.createExtendedSession = function () {
            var t = this.buildSessionObject();
            return this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t), this.setTriggerSessionReplayStatus(t), t
        }, t.prototype.incrementSessionPageNumber = function (t) {
            t.pageNumber += 1
        }, t.prototype.isReplayRecorded = function () {
            var t = this.getSession();
            return !!t && this.recordingStateStrategy.isReplayRecorded(t)
        }, t.prototype.isTemporarilyRecorded = function () {
            var t = this.getSession();
            return (null == t ? void 0 : t.recordingState) === Dt.TEMPORARILY_RECORDED
        }, t.prototype.abortQuotaServiceRequest = function () {
            this.recordingStateStrategy instanceof So && this.recordingStateStrategy.abortQuotaServiceRequest()
        }, t.prototype.getRequestParameters = function () {
            var t = {}, e = this.getSession();
            return null !== e && (t.pn = "" + e.pageNumber, this.recordingStateStrategy instanceof vo && (t.re = this.triggerSessionReplayOngoing ? xt.TRIGGER_REPLAY_RECORDING_ENABLED : e.recordingState)), t
        }, t.prototype.getSession = function () {
            return this.sessionStorage.get()
        }, t.prototype.getSessionWithoutCache = function () {
            return this.sessionStorage.get(!0)
        }, t.prototype.doesSessionExist = function () {
            return null !== this.sessionStorage.get()
        }, t.prototype.setSession = function (t) {
            this.sessionStorage.set(t)
        }, t.prototype.removeSession = function () {
            this.sessionStorage.remove()
        }, t.prototype.getRecordingStates = function () {
            var t = this.getSession(), e = [];
            return t && (t.recordingState !== Dt.NOT_RECORDED && csArray.prototype.push.call(e, t.recordingState), t.etrState === Vt.ETR_ON && csArray.prototype.push.call(e, Dt.ETR_SAMPLING)), e
        }, t.prototype.updateRecordingState = function (t, e) {
            var r = this.getSession();
            null !== r && (r.recordingState = t, r.etrState = e, this.setSession(r))
        }, t.prototype.hasValidSession = function () {
            var t = this.sessionStorage.getRawSession();
            return this.sessionStorage.isValid(t)
        }, t.prototype.handleSubdomainChange = function () {
            this.sessionStorage.handleSubdomainChange()
        }, t.prototype.extendSessionPeriodically = function () {
            this.extendedSessionTimeoutId || this.extendSession()
        }, t.prototype.extendSession = function () {
            if (this.hasReachedMaxDuration()) this.stopSessionExtension(); else {
                var t = this.getSession();
                null === t && (t = this.createExtendedSession()), this.sessionStorage.set(t, 174e4), this.sendDynamicVar(), this.scheduleNextSessionUpdate()
            }
        }, t.prototype.scheduleNextSessionUpdate = function () {
            var t = this;
            this.extendedSessionTimeoutId = window.setTimeout((function () {
                t.extendSession()
            }), 174e4)
        }, t.prototype.hasReachedMaxDuration = function () {
            return 1434e4 - (B.now() + 18e5 - this.beginSession) < 0
        }, t.prototype.stopSessionExtension = function () {
            this.extendedSessionTimeoutId && (window.clearTimeout(this.extendedSessionTimeoutId), this.extendedSessionTimeoutId = null)
        }, t.prototype.sendDynamicVar = function () {
            this.sessionExtensionCount += 1, this.dynamicVariablesService.trackDynamicVariable("session_expiry_update", this.sessionExtensionCount)
        }, t
    }(), bo = function () {
        function t(t, e, r) {
            this.configuration = t, this.visitorService = e, this.exclusionService = r
        }

        return t.prototype.clear = function () {
            this.isVisitorOutdated() && (this.savedVisitor = this.visitorService.getVisitor(), this.visitorService.removeVisitor()), this.isExclusionOutdated() && this.exclusionService.removeExclusion()
        }, t.prototype.isVisitorOutdated = function () {
            return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw
        }, t.prototype.isExclusionOutdated = function () {
            return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw
        }, t.prototype.restoreClearedVisitor = function () {
            this.savedVisitor && this.visitorService.setVisitor(this.savedVisitor)
        }, t
    }(), wo = function () {
        function t(t, e) {
            this.visitorService = t, this.sessionService = e
        }

        return t.prototype.handle = function () {
            this.handleVisitor(), this.handleSession()
        }, t.prototype.handleVisitor = function () {
            this.visitorService.handleSubdomainChange()
        }, t.prototype.handleSession = function () {
            this.sessionService.handleSubdomainChange()
        }, t
    }(), Co = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, To = function () {
        function t() {
            this.listeners = []
        }

        return t.prototype.addListeners = function () {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            (t = csArray.prototype.push).call.apply(t, Co([this.listeners], e))
        }, t
    }(), Ro = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), ko = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Ro(e, t), e.prototype.emitBeforeNaturalPageView = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onBeforeNaturalPageView && r.onBeforeNaturalPageView()
            }
        }, e.prototype.emitAfterNaturalPageView = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onAfterNaturalPageView && r.onAfterNaturalPageView()
            }
        }, e.prototype.emitInitTracking = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onInitTracking && r.onInitTracking()
            }
        }, e.prototype.emitStartTracking = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onStartTracking && r.onStartTracking()
            }
        }, e.prototype.emitArtificialPageViewEnd = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onArtificialPageViewEnd && r.onArtificialPageViewEnd()
            }
        }, e.prototype.emitBeforeArtificialPageView = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onBeforeArtificialPageView && r.onBeforeArtificialPageView()
            }
        }, e.prototype.emitAfterArtificialPageView = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onAfterArtificialPageView && r.onAfterArtificialPageView()
            }
        }, e.prototype.emitBeforeSessionRenewal = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onBeforeSessionRenewal && r.onBeforeSessionRenewal()
            }
        }, e.prototype.emitAfterSessionRenewal = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onAfterSessionRenewal && r.onAfterSessionRenewal()
            }
        }, e.prototype.emitOptout = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onOptout && r.onOptout()
            }
        }, e.prototype.emitConsentGranted = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onConsentGranted && r.onConsentGranted()
            }
        }, e.prototype.emitConsentWithdrawn = function () {
            for (var t = 0, e = this.listeners; t < e.length; t++) {
                var r = e[t];
                r.onConsentWithdrawn && r.onConsentWithdrawn()
            }
        }, e.prototype.emitRecordingStateChange = function (t, e) {
            for (var r = 0, i = this.listeners; r < i.length; r++) {
                var n = i[r];
                n.onRecordingStateChange && n.onRecordingStateChange(t, e)
            }
        }, e.prototype.emitInitialDomDone = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onInitialDomDone && i.onInitialDomDone(t)
            }
        }, e
    }(To);
    !function (t) {
        t[t.NOT_REQUIRED = 0] = "NOT_REQUIRED", t[t.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", t[t.GRANTED = 2] = "GRANTED", t[t.WITHDRAWN = 3] = "WITHDRAWN"
    }(lo || (lo = {}));
    var Ao, Po = function () {
        function t(t, e, r) {
            this.configuration = t, this.cookieService = e, this.browserLocalStorage = r
        }

        return t.prototype.get = function () {
            var t;
            return null === (t = this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_c") : this.cookieService.get("_cs_c")) ? t : Number(t)
        }, t.prototype.set = function (t) {
            this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_c", csString(t)) : this.cookieService.set("_cs_c", csString(t), 34164e6)
        }, t.prototype.remove = function () {
            this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.removeItem("_cs_c") : this.cookieService.delete("_cs_c")
        }, t.prototype.handleSubdomainChange = function () {
            this.configuration.cookielessTrackingEnabled || (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_c", _t.CURRENT_DOMAIN) : this.cookieService.delete("_cs_c", this.cookieService.getRootDomain()))
        }, t
    }(), Io = ["trackConsentGranted"], Oo = ["trackConsentWithdrawn"], _o = function () {
        function t(t, e) {
            this.commandsService = t, this.service = e
        }

        return t.prototype.init = function () {
            this.service.handleSubdomainChange(), this.service.setInitialConsent(), this.registerCommands()
        }, t.prototype.registerCommands = function () {
            var t = this;
            this.commandsService.register(Io, (function () {
                t.service.grantConsent()
            })), this.commandsService.register(Oo, (function () {
                t.service.withdrawConsent()
            }))
        }, t.prototype.onOptout = function () {
            this.service.removeConsent()
        }, t
    }(), No = function () {
        function t(t, e, r) {
            this.configuration = t, this.storage = e, this.lifeCycleEventsEmitter = r
        }

        return t.prototype.setInitialConsent = function () {
            var t = this.storage.get();
            (null === t || this.hasConsentRequiredChanged(t)) && this.setDefault()
        }, t.prototype.hasConsentRequiredChanged = function (t) {
            var e = this.configuration.consentRequired;
            return e && t === lo.NOT_REQUIRED || !e && t !== lo.NOT_REQUIRED
        }, t.prototype.handleSubdomainChange = function () {
            this.storage.handleSubdomainChange()
        }, t.prototype.setDefault = function () {
            var t = this.configuration.consentRequired ? lo.NOT_EXPRESSED : lo.NOT_REQUIRED;
            this.storage.set(t)
        }, t.prototype.grantConsent = function () {
            this.configuration.consentRequired && (this.storage.set(lo.GRANTED), this.lifeCycleEventsEmitter.emitConsentGranted())
        }, t.prototype.withdrawConsent = function () {
            this.configuration.consentRequired && (this.storage.set(lo.WITHDRAWN), this.lifeCycleEventsEmitter.emitConsentWithdrawn())
        }, t.prototype.removeConsent = function () {
            this.storage.remove()
        }, t.prototype.isAllowedByConsent = function () {
            return !this.configuration.consentRequired || this.storage.get() === lo.GRANTED
        }, t.prototype.getRequestParameters = function () {
            return {uc: "" + this.storage.get()}
        }, t
    }(), Mo = function () {
        function t(t, e, r, i, n, o, s) {
            this.lifeCycleEventsEmitter = t, this.commandsService = e, this.commandsModule = r, this.optoutModule = i, this.optoutService = n, this.exclusionModule = o, this.consentModule = s
        }

        return t.prototype.start = function () {
            this.lifeCycleEventsEmitter.addListeners(this.exclusionModule, this.consentModule, this.commandsModule), this.consentModule.init(), this.optoutModule.init(), this.optoutService.init(), this.optoutService.isActive() || this.commandsService.start()
        }, t
    }(), Lo = function () {
        function t(t, e) {
            this.location = t, this.storage = e
        }

        return t.prototype.exclude = function (t) {
            this.storage.set(csString(t.lastTrackingDraw))
        }, t.prototype.removeExclusion = function () {
            this.storage.remove()
        }, t.prototype.isExcluded = function () {
            return this.hasExclusionInStorage() || this.hasExclusionInURL()
        }, t.prototype.hasExclusionInStorage = function () {
            return 0 !== this.getAppliedTrackingDraw()
        }, t.prototype.getAppliedTrackingDraw = function () {
            return this.storage.get()
        }, t.prototype.hasExclusionInURL = function () {
            return csString.prototype.indexOf.call(this.location.href, "_cs_ex") > 0
        }, t
    }(), xo = function () {
        function t(t) {
            this.service = t
        }

        return t.prototype.onOptout = function () {
            this.service.removeExclusion()
        }, t
    }(), Do = function () {
        function t(t, e) {
            this.location = t, this.cookieService = e
        }

        return t.prototype.isForceIncluded = function () {
            return this.hasForceInclusionCookie() || this.hasForceInclusionInURL()
        }, t.prototype.isForceLegacyReplayRecorded = function () {
            return this.hasForceInclusionCookieValue(xt.REPLAY_RECORDING_ENABLED) || this.hasForceInclusionValueInURL(xt.REPLAY_RECORDING_ENABLED)
        }, t.prototype.isForceMalkaReplayRecorded = function () {
            return this.hasForceInclusionCookieValue(Dt.GLOBAL_SAMPLING)
        }, t.prototype.hasForceInclusionCookie = function () {
            return null !== this.cookieService.get("_cs_inc")
        }, t.prototype.hasForceInclusionCookieValue = function (t) {
            return this.cookieService.get("_cs_inc") === t
        }, t.prototype.hasForceInclusionInURL = function () {
            return csString.prototype.indexOf.call(this.location.href, "_cs_inc") > 0
        }, t.prototype.hasForceInclusionValueInURL = function (t) {
            return csString.prototype.indexOf.call(this.location.href, "_cs_inc=" + t) > 0
        }, t
    }(), Vo = function () {
        return (Vo = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, Uo = function () {
        function t() {
            this.metrics = {}
        }

        return t.prototype.start = function (t, e) {
            void 0 === e && (e = B.now());
            var r = this.metrics[t];
            this.metrics[t] = r && r.startedAt ? r : Vo(Vo({}, r), {startedAt: e})
        }, t.prototype.stop = function (t, e) {
            void 0 === e && (e = B.now());
            var r = this.metrics[t];
            this.metrics[t] = r && r.stoppedAt ? r : Vo(Vo({}, r), {stoppedAt: e}), this.onStopCallback(t, this.metrics[t])
        }, t.prototype.onStop = function (t) {
            this.onStopCallback = t
        }, t
    }(), qo = function () {
        function t() {
        }

        return t.prototype.getRequestParameters = function () {
            var t = window.location;
            return {pr: t.protocol, ho: t.hostname, pa: t.pathname, qu: t.search, ha: t.hash}
        }, t
    }(), zo = function () {
        function t(t, e) {
            this.configuration = t, this.request = e, this.isLoggingActive = !1
        }

        return t.prototype.init = function () {
            this.isLoggingActive = j.boolean(this.configuration.metricRate)
        }, t.prototype.getRequestParameters = function () {
            return {a: "uxam", mk: this.metricKey, mv: "" + this.metricValue}
        }, t.prototype.logMetric = function (t, e) {
            this.metricKey = t, this.metricValue = e.stoppedAt - e.startedAt, this.sendLog()
        }, t.prototype.sendLog = function () {
            this.isLoggingActive && this.request.send()
        }, t
    }();
    !function (t) {
        t.TIME_BEFORE_EXECUTION = "TimeBeforeExecution", t.PAGE_LOAD = "PageLoad"
    }(Ao || (Ao = {}));
    var jo, Bo = function () {
        function t(t, e, r) {
            this.service = e, this.pii = r, this.locationRequestParameters = new qo, this.basicLogRequestParameters = new nt(t, this.pii), this.request = new Y(t.getLoggerUri()), this.logger = new zo(t, this.request)
        }

        return t.prototype.init = function () {
            var t = this;
            this.request.setRequestParametersProviders(this.basicLogRequestParameters, this.locationRequestParameters), this.logger.init(), this.service.onStop((function (e, r) {
                t.logger.logMetric(e, r)
            })), this.recordInitialMetrics()
        }, t.prototype.recordInitialMetrics = function () {
            this.isSupported() && (this.service.start(Ao.PAGE_LOAD, window.performance.timing.navigationStart), this.service.stop(Ao.PAGE_LOAD, window.performance.timing.domContentLoadedEventEnd), this.service.start(Ao.TIME_BEFORE_EXECUTION, window.performance.timing.domContentLoadedEventEnd), this.service.stop(Ao.TIME_BEFORE_EXECUTION))
        }, t.prototype.isSupported = function () {
            return window.performance && window.performance.timing
        }, t
    }(), Ho = function () {
        function t(t, e, r) {
            this.configuration = t, this.cookieService = e, this.browserLocalStorage = r
        }

        return t.prototype.get = function () {
            return this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_optout") : this.cookieService.get("_cs_optout")
        }, t.prototype.set = function (t) {
            this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_optout", t) : this.cookieService.set("_cs_optout", t, 34164e6)
        }, t
    }(), Fo = function () {
        function t(t, e, r) {
            this.lifeCycleEventsEmitter = t, this.location = e, this.storage = r
        }

        return t.prototype.init = function () {
            !this.isActive() && this.hasOptoutInURL() && this.activate()
        }, t.prototype.isActive = function () {
            return "1" === this.storage.get()
        }, t.prototype.activate = function () {
            this.lifeCycleEventsEmitter.emitOptout(), this.storage.set("1")
        }, t.prototype.hasOptoutInURL = function () {
            return csString.prototype.indexOf.call(this.location.href, "_cs_optout") > 0
        }, t
    }(), Go = ["optout"], Wo = function () {
        function t(t, e) {
            this.commandsService = t, this.optoutService = e
        }

        return t.prototype.init = function () {
            var t = this;
            this.commandsService.register(Go, (function () {
                t.optoutService.activate()
            }))
        }, t
    }();

    function Ko(t, e) {
        return e.visitor.visitsCount !== t.visitor.visitsCount ? e.visitor.visitsCount - t.visitor.visitsCount : t.session ? e.session ? e.session.pageNumber - t.session.pageNumber : -1 : 1
    }

    !function (t) {
        t.select = function (t, e) {
            var r = function (t, e) {
                return csArray.prototype.filter.call(t, (function (t) {
                    return t.exclusion === e
                }))[0]
            }(t, e), i = function (t, e) {
                return csArray.prototype.sort.call(csArray.prototype.filter.call(t, (function (t) {
                    return function (t, e) {
                        return t.visitor && t.visitor.appliedTrackingDraw === e
                    }(t, e)
                })), Ko)[0]
            }(t, e);
            return r || i
        }
    }(jo || (jo = {}));
    var Xo = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, Yo = function () {
        function t(t, e, r) {
            this.configuration = t, this.currentDomainState = e, this.otherDomainStates = r
        }

        return t.prototype.applyUpToDate = function (t) {
            var e = this;
            this.otherDomainStates.retrieve(this.configuration.hostnames, (function (r) {
                var i = Xo([e.currentDomainState.get()], r), n = jo.select(i, e.configuration.lastTrackingDraw);
                e.currentDomainState.apply(n), t()
            }))
        }, t
    }(), Jo = function () {
        function t(t, e) {
            this.commandsService = t, this.iframeEventsEmitter = e
        }

        return t.prototype.init = function () {
            this.iframeEventsEmitter.addListeners(this.commandsService)
        }, t.prototype.onOptout = function () {
            this.commandsService.stop()
        }, t.prototype.onBeforeSessionRenewal = function () {
            this.commandsService.stop()
        }, t
    }();
    var Qo, Zo = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), $o = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, ts = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.registry = {}, e
        }

        return Zo(e, t), e.prototype.register = function (t, e) {
            for (var r = 0, i = t; r < i.length; r++) {
                var n = i[r];
                this.registry[n] = e, this.registry
            }
        }, e.prototype.onStart = function () {
            this.applyPending(), this.enableImmediateApplication()
        }, e.prototype.onStop = function () {
            window._uxa = []
        }, e.prototype.onIframeCommands = function (t) {
            for (var e = 0, r = t.commands; e < r.length; e++) {
                var i = r[e];
                this.applyFromIframe(i.name, i.params, t.iframePath)
            }
        }, e.prototype.applyFromIframe = function (t, e, r) {
            var i = this;
            It.tryToExecute("Commands.apply.from.iframe: " + r, (function () {
                var r;
                if (i.registry[t]) return (r = i.registry)[t].apply(r, e)
            }))()
        }, e.prototype.applyPending = function () {
            var t = this;
            window._uxa.forEach((function (e) {
                var r = e[0], i = e.slice(1);
                return t.apply(r, i)
            }))
        }, e.prototype.enableImmediateApplication = function () {
            var t = this;
            window._uxa = {
                push: function (e) {
                    var r = e[0], i = e.slice(1);
                    return t.apply(r, i)
                }
            }
        }, e.prototype.apply = function (t, e) {
            var r;
            if (this.registry[t]) return (r = this.registry)[t].apply(r, e)
        }, $o([Ot("Commands.apply")], e.prototype, "apply", null), e
    }(Ee), es = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, rs = function () {
        function t() {
            var t = this;
            this.eventHandler = {
                boundElement: document, type: "securitypolicyviolation", listener: function (e) {
                    return t.securityPolicyViolationListener(e)
                }
            }
        }

        return t.prototype.onEvent = function (t) {
            this.onEventCallback = t
        }, t.prototype.start = function () {
            ne(this.eventHandler)
        }, t.prototype.stop = function () {
            oe(this.eventHandler)
        }, t.prototype.isSecurityErrorRelevant = function (e) {
            if (!e) return !1;
            var r = e.disposition;
            return St(e.sourceFile) && csArray.prototype.some.call(t.whilelistDomains, (function (t) {
                return csString.prototype.indexOf.call(e.sourceFile, t) > 0
            })) && "report" !== r
        }, t.prototype.securityPolicyViolationListener = function (t) {
            this.isSecurityErrorRelevant(t) && this.onEventCallback({
                violatedDirective: t.violatedDirective,
                sourceFile: t.sourceFile
            })
        }, t.whilelistDomains = ["contentsquare", "localhost", "website.com/build/e2e"], es([Ot("Event handler type: securitypolicyviolation")], t.prototype, "securityPolicyViolationListener", null), t
    }(), is = function () {
        function t(t) {
            this.contentSecurityPolicyErrorsTracker = t
        }

        return t.prototype.init = function () {
            var t = this;
            this.contentSecurityPolicyErrorsTracker.onEvent((function (e) {
                return t.processEvent(e)
            }))
        }, t.prototype.start = function () {
            this.contentSecurityPolicyErrorsTracker.start()
        }, t.prototype.stop = function () {
            this.contentSecurityPolicyErrorsTracker.stop()
        }, t.prototype.processEvent = function (t) {
            var e = "Content Security Policy error. Violated directive: " + t.violatedDirective + " - Source file: " + t.sourceFile;
            It.warn(e)
        }, t
    }(), ns = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), os = function (t) {
        function e(e, r, i, n, o) {
            var s = t.call(this) || this;
            return s.javaScriptErrorsTracker = e, s.javaScriptErrorsRequest = r, s.basicRequestParameters = i, s.javaScriptErrorsAnonymizer = n, s.customEventEmitter = o, s.javaScriptErrorsBatch = [], s.javaScriptErrorsCount = 0, s.customErrorsBuffer = [], s
        }

        return ns(e, t), e.prototype.init = function () {
            var t = this;
            this.javaScriptErrorsTracker.onEvent((function (e) {
                return t.processEvent(e)
            })), this.bindRequest()
        }, e.prototype.initStates = function () {
            this.startTime = B.now(), this.javaScriptErrorsBatch = [], this.javaScriptErrorsCount = 0
        }, e.prototype.onStart = function () {
            this.javaScriptErrorsTracker.start(), this.processCustomErrorsInBuffer()
        }, e.prototype.onStop = function () {
            this.javaScriptErrorsTracker.stop()
        }, e.prototype.getRequestPayload = function () {
            return csJSON.stringify({errors: this.javaScriptErrorsBatch})
        }, e.prototype.onIframeJavascriptError = function (t) {
            this.processEvent(t)
        }, e.prototype.trackCustomError = function (t) {
            var e = {
                errorType: "jsError",
                message: "Custom Error: " + t,
                lineno: 1,
                colno: 1,
                filename: "https://cserror.com/texterror.js"
            };
            this.processCustomErrorEvent(e)
        }, e.prototype.processCustomErrorEvent = function (t) {
            this.isStarted ? (this.processEvent(t), this.customEventEmitter.emitCustomErrorEvent(t)) : csArray.prototype.push.call(this.customErrorsBuffer, t)
        }, e.prototype.processCustomErrorsInBuffer = function () {
            var t = this;
            this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function (e) {
                return t.processCustomErrorEvent(e)
            })), this.customErrorsBuffer = [])
        }, e.prototype.processEvent = function (t) {
            this.isStarted && this.javaScriptErrorsCount < 20 && (this.javaScriptErrorsAnonymizer.anonymize(t), t.rt = this.getRelativeTime(), csArray.prototype.push.call(this.javaScriptErrorsBatch, t), this.sendErrors())
        }, e.prototype.bindRequest = function () {
            var t = this;
            this.javaScriptErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.javaScriptErrorsRequest.setRequestPayloadProvider(this), this.javaScriptErrorsRequest.after((function () {
                t.javaScriptErrorsBatch = [], t.javaScriptErrorsCount += 1
            }))
        }, e.prototype.getRelativeTime = function () {
            return B.now() - this.startTime
        }, e.prototype.sendErrors = function () {
            this.javaScriptErrorsRequest.send()
        }, e
    }(Ee), ss = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), as = function (t) {
        function e(e, r, i, n) {
            var o = t.call(this) || this;
            return o.apiErrorsTracker = e, o.apiErrorsRequest = r, o.basicRequestParameters = i, o.apiErrorsAnonymizer = n, o.apiErrorsBatch = [], o.apiErrorsCount = 0, o
        }

        return ss(e, t), e.prototype.init = function () {
            var t = this;
            this.apiErrorsTracker.init(), this.apiErrorsTracker.onEvent((function (e) {
                return t.processEvent(e)
            })), this.bindRequest()
        }, e.prototype.initStates = function () {
            this.apiErrorsBatch = [], this.apiErrorsCount = 0
        }, e.prototype.onStart = function () {
            this.apiErrorsTracker.start()
        }, e.prototype.onStop = function () {
            this.apiErrorsTracker.stop()
        }, e.prototype.getRequestPayload = function () {
            return csJSON.stringify({errors: this.apiErrorsBatch})
        }, e.prototype.onIframeApiError = function (t) {
            this.processEvent(t)
        }, e.prototype.processEvent = function (t) {
            this.isStarted && this.apiErrorsCount < e.MAX_ERRORS && (csArray.prototype.push.call(this.apiErrorsBatch, this.apiErrorsAnonymizer.anonymize(t)), this.sendErrors())
        }, e.prototype.bindRequest = function () {
            var t = this;
            this.apiErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.apiErrorsRequest.setRequestPayloadProvider(this), this.apiErrorsRequest.after((function () {
                t.apiErrorsBatch = [], t.apiErrorsCount += 1
            }))
        }, e.prototype.sendErrors = function () {
            this.apiErrorsRequest.send()
        }, e.MAX_ERRORS = 20, e
    }(Ee);
    !function (t) {
        t.CONTENTSQUARE = "contentsquare.net", t.CLICKTALE = "clicktale.net", t.FAKE_TRACKER = "fake-tracker.content-square.fr"
    }(Qo || (Qo = {}));
    var cs, us = ["trackError"], ps = ["api-errors:maskUrl"], ls = function () {
        function t(t, e, r, i, n, o, s, a, c) {
            this.javaScriptErrorsTracker = t, this.javaScriptErrorsAnonymizer = e, this.apiErrorsTracker = r, this.apiErrorsAnonymizer = i, this.configuration = n, this.basicRequestParameters = o, this.iframeEventsEmitter = s, this.commandsService = a, this.customEventEmitter = c
        }

        return t.prototype.init = function () {
            this.contentSecurityPolicyErrorsService = new is(new rs), this.contentSecurityPolicyErrorsService.init();
            var t = new ie(this.configuration.getTrackerUri(), "errors");
            this.javaScriptErrorsService = new os(this.javaScriptErrorsTracker, t, this.basicRequestParameters, this.javaScriptErrorsAnonymizer, this.customEventEmitter), this.javaScriptErrorsService.init(), this.iframeEventsEmitter.addListeners(this.javaScriptErrorsService);
            var e = new ie(this.configuration.getTrackerUri(), "api-errors");
            this.apiErrorsTracker.excludeDomains([Qo.CONTENTSQUARE, Qo.CLICKTALE, Qo.FAKE_TRACKER]), this.apiErrorsService = new as(this.apiErrorsTracker, e, this.basicRequestParameters, this.apiErrorsAnonymizer), this.apiErrorsService.init(), this.iframeEventsEmitter.addListeners(this.apiErrorsService), this.registerCommands()
        }, t.prototype.registerCommands = function () {
            var t = this;
            this.commandsService.register(ps, (function (e) {
                return t.apiErrorsAnonymizer.addUrlMaskingPattern(e)
            })), this.commandsService.register(us, (function (e) {
                return t.javaScriptErrorsService.trackCustomError(e)
            }))
        }, t.prototype.onInitTracking = function () {
            this.contentSecurityPolicyErrorsService.start()
        }, t.prototype.onStartTracking = function () {
            this.configuration.jsErrorsEnabled && this.javaScriptErrorsService.start(), this.configuration.apiErrorsEnabled && this.apiErrorsService.start()
        }, t.prototype.onAfterNaturalPageView = function () {
            this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates()
        }, t.prototype.onAfterArtificialPageView = function () {
            this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates()
        }, t.prototype.onBeforeSessionRenewal = function () {
            this.javaScriptErrorsService.stop(), this.apiErrorsService.stop()
        }, t.prototype.onOptout = function () {
            this.contentSecurityPolicyErrorsService.stop(), this.javaScriptErrorsService.stop(), this.apiErrorsService.stop()
        }, t
    }(), hs = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    };
    !function (t) {
        t.Set = "set", t.Remove = "remove"
    }(cs || (cs = {}));
    var fs = function () {
        function t(t, e) {
            this.configuration = t, this.cookieService = e, this.sameSite = At.None, this.isActivated = !1, this.setCookieBatch = [], this.removeCookieBatch = []
        }

        return t.prototype.init = function () {
            this.sameSite = this.cookieService.isSameSiteSupported() ? At.None : At.NotSet
        }, t.prototype.setStates = function (t, e) {
            this.currentDomainState = t, this.iframeDomainState = e
        }, t.prototype.start = function (t) {
            var e = this;
            this.iframeDomainState.init(this.getIframeDomain(), (function (r, i) {
                var n = [e.currentDomainState.get()];
                i && csArray.prototype.push.call(n, r);
                var o = jo.select(n, e.configuration.lastTrackingDraw);
                e.isActivated = !0, e.currentDomainState.apply(o), t()
            })), this.iframe = this.iframeDomainState.openIframe()
        }, t.prototype.setCookie = function (t, e, r) {
            if (this.isActivated) {
                var i = {name: t, value: e, samesite: this.sameSite, secure: Pt.Yes};
                r && (i.expires = Rt.toExpireDate(r).getTime()), this.addToSetCookieBatch(i)
            }
        }, t.prototype.removeCookie = function (t) {
            this.isActivated && this.addToRemoveCookieBatch(t)
        }, t.prototype.addToRemoveCookieBatch = function (t) {
            this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function (e) {
                return e !== t
            })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function (e) {
                return e.name !== t
            })), csArray.prototype.push.call(this.removeCookieBatch, t), this.setBatchReadyCall()
        }, t.prototype.addToSetCookieBatch = function (t) {
            this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function (e) {
                return e !== t.name
            })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function (e) {
                return e.name !== t.name
            })), csArray.prototype.push.call(this.setCookieBatch, t), this.setBatchReadyCall()
        }, t.prototype.setBatchReadyCall = function () {
            this.sendMessagesBatchs()
        }, t.prototype.sendMessagesBatchs = function () {
            if (this.setCookieBatch.length > 0) {
                var t = this.buildMessage(cs.Set, this.setCookieBatch);
                this.sendMessage(t), this.setCookieBatch = []
            }
            if (this.removeCookieBatch.length > 0) {
                var e = this.buildMessage(cs.Remove, this.removeCookieBatch);
                this.sendMessage(e), this.removeCookieBatch = []
            }
        }, t.prototype.buildMessage = function (t, e) {
            return {command: t, cookies: e, domain: null, pid: this.configuration.projectId}
        }, t.prototype.sendMessage = function (t) {
            var e = "https://" + this.getIframeDomain();
            this.iframe.contentWindow && this.iframe.contentWindow.postMessage(t, e)
        }, t.prototype.getIframeDomain = function () {
            return this.configuration.dualCollectionTagDomain && "contentsquare.net" !== this.configuration.dualCollectionTagDomain ? "cdnssl." + this.configuration.dualCollectionTagDomain : "csxd.contentsquare.net"
        }, hs([Ei(), Ot("send xdframe-single-iframe batch")], t.prototype, "setBatchReadyCall", null), t
    }(), ds = ["_cs_id", "_cs_s", "_cs_cvars", "_cs_ex"], ys = function () {
        function t(t, e) {
            this.configuration = t, this.xdframeOpener = e
        }

        return t.prototype.init = function (t, e) {
            this.xdframeOrigin = "https://" + t, this.callback = e
        }, t.prototype.openIframe = function () {
            var t = this;
            this.xdframeOpener.onMessage((function (e) {
                t.handleXdframeMessage(e)
            })), this.xdframeOpener.onTimeout((function () {
                t.handleTimeout()
            })), this.xdframeOpener.start();
            var e = this.getXdframeUrl(this.xdframeOrigin);
            return this.xdframeOpener.open(e)
        }, t.prototype.handleXdframeMessage = function (t) {
            if (this.isXdframeMessage(t)) {
                var e = t.data, r = !0;
                if (this.isXdframeErrorMessage(t)) return void It.warn("Error xdframe single domain: " + csJSON.stringify(t.data) + " from " + t.origin);
                if (!Kt.isRawDomainState(e)) return void It.warn("Unknown message format from xdframe single domain: " + csJSON.stringify(t.data) + " from " + t.origin);
                Kt.isValid(e) || (It.warn("Invalid xdframe single domain state: " + csJSON.stringify(t.data) + " from " + t.origin), r = !1), this.xdframeOpener.stop(), this.callback(r ? Gt.fromRaw(e) : {}, r)
            }
        }, t.prototype.handleTimeout = function () {
            It.warn("xdframe single domain: all messages not received")
        }, t.prototype.isXdframeMessage = function (t) {
            return t.origin === this.xdframeOrigin && Et(t.data)
        }, t.prototype.isXdframeErrorMessage = function (t) {
            return !!t.data.error
        }, t.prototype.getXdframeUrl = function (t) {
            var e = csArray.prototype.join.call(ds, ",");
            return t + "/uxa/xdframe-single-domain-1.1.0.html?pid=" + this.configuration.projectId + "&cookieNames=" + e
        }, t
    }(), vs = function () {
        return (vs = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, gs = function () {
        function t(t, e, r) {
            this.configuration = t, this.visitorService = e, this.sessionService = r
        }

        return t.prototype.getRequestParameters = function () {
            if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) return {};
            var t = this.visitorService.getVisitor();
            return vs(vs(vs({}, {v: "11.9.6"}), this.configuration.getRequestParameters()), {
                uu: t.id,
                sn: "" + t.visitsCount,
                pn: "" + this.sessionService.getSession().pageNumber
            })
        }, t
    }(), ms = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Ss = function () {
        function t() {
            var t = this;
            this.isStarted = !1, this.onEventCallbacks = [], this.useCapture = !1, this.eventHandler = {
                boundElement: window,
                type: "error",
                listener: function (e) {
                    return t.errorListener(e)
                }
            }
        }

        return t.prototype.onEvent = function (t) {
            csArray.prototype.push.call(this.onEventCallbacks, t)
        }, t.prototype.start = function () {
            this.isStarted || (ne(this.eventHandler, this.useCapture), this.isStarted = !0)
        }, t.prototype.stop = function () {
            this.isStarted && (oe(this.eventHandler, this.useCapture), this.isStarted = !1)
        }, t.prototype.errorListener = function (t) {
            var e = this.buildJavaScriptError(t);
            csArray.prototype.forEach.call(this.onEventCallbacks, (function (t) {
                return t(e)
            }))
        }, t.prototype.decorateErrorMessage = function (e) {
            return e.length <= t.MAX_ERROR_MESSAGE_LENGTH ? e : csString.prototype.slice.call(e, 0, t.MAX_ERROR_MESSAGE_LENGTH - t.truncatedErrorMessageMarker.length) + t.truncatedErrorMessageMarker
        }, t.prototype.buildJavaScriptError = function (t) {
            return {
                errorType: "jsError",
                message: this.decorateErrorMessage(t.message),
                filename: t.filename,
                lineno: t.lineno,
                colno: t.colno
            }
        }, t.truncatedErrorMessageMarker = "…", t.MAX_ERROR_MESSAGE_LENGTH = 1024, ms([Ot("Event handler type: error")], t.prototype, "errorListener", null), t
    }(), Es = function () {
        function t(t, e) {
            this.commandsService = t, this.projectConfiguration = e
        }

        return t.prototype.init = function () {
            var t = this;
            this.commandsService.register(["debugEvents"], (function (e) {
                "boolean" == typeof e && t.projectConfiguration.updateDynamicFields("emitDebugEvents", e)
            }))
        }, t
    }();

    function bs(t, e, r) {
        if (!bt(e) && !bt(r)) return t.href;
        var i = bt(e) ? function (t) {
            return V(t, "/") ? t : "/" + t
        }(e) : t.pathname, n = bt(r) ? function (t) {
            return V(t, "?") || "" === t ? t : "?" + t
        }(r) : t.search;
        return t.protocol + "//" + t.host + i + n
    }

    var ws, Cs, Ts = function () {
        function t(t, e) {
            this.location = t, this.pii = e
        }

        return t.prototype.overridePath = function (t) {
            bt(t) && St(t) && (this.path = "" === t ? void 0 : t)
        }, t.prototype.overrideQuery = function (t) {
            bt(t) && St(t) && (this.query = t)
        }, t.prototype.computeOverriddenUrl = function (t) {
            return this.isCurrentPageUrl(t) ? this.getUrl() : t
        }, t.prototype.isCurrentPageUrl = function (t) {
            var e = this.normalizeUrl(this.location.href);
            return this.normalizeUrl(t) === e
        }, t.prototype.normalizeUrl = function (t) {
            return U(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t
        }, t.prototype.getUrl = function () {
            return bs(this.location, this.path, this.query)
        }, t.prototype.getUrlProtocol = function () {
            return this.location.protocol
        }, t.prototype.getRequestParameters = function () {
            var t = this.getUrl();
            return {url: this.pii.anonymize(t)}
        }, t
    }(), Rs = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), ks = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Rs(e, t), e.prototype.emitPageEvent = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onPageEvent && i.onPageEvent(t)
            }
        }, e.prototype.emitEventTriggerRecording = function (t, e) {
            for (var r = 0, i = this.listeners; r < i.length; r++) {
                var n = i[r];
                n.onEventTriggerRecording && n.onEventTriggerRecording(t, e)
            }
        }, e.prototype.emitCustomErrorEvent = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onCustomErrorEvent && i.onCustomErrorEvent(t)
            }
        }, e
    }(To), As = function () {
        this.isStarted = !1
    }, Ps = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Is = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, Os = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.xhrRequestTracker = e, i.fetchRequestTracker = r, i.onEventCallbacks = [], i.excludedDomains = [], i
        }

        return Ps(e, t), e.prototype.init = function () {
            var t = this;
            this.xhrRequestTracker.onEvent((function (e) {
                return t.apiErrorListener(e)
            })), this.fetchRequestTracker.onEvent((function (e) {
                return t.apiErrorListener(e)
            }))
        }, e.prototype.onEvent = function (t) {
            csArray.prototype.push.call(this.onEventCallbacks, t)
        }, e.prototype.start = function () {
            this.isStarted || (this.xhrRequestTracker.start(), this.fetchRequestTracker.start(), this.isStarted = !0)
        }, e.prototype.stop = function () {
            this.isStarted && (this.xhrRequestTracker.stop(), this.fetchRequestTracker.stop(), this.isStarted = !1)
        }, e.prototype.apiErrorListener = function (t) {
            if (t.url && t.statusCode) {
                if (t.url = at(t.url), csArray.prototype.some.call(this.excludedDomains, (function (e) {
                    return -1 !== csString.prototype.indexOf.call(t.url, e)
                }))) return;
                if (t.statusCode >= 400) {
                    var e = this.buildApiError(t);
                    csArray.prototype.forEach.call(this.onEventCallbacks, (function (t) {
                        return t(e)
                    }))
                }
            }
        }, e.prototype.buildApiError = function (t) {
            return {
                errorType: "apiError",
                url: t.url,
                method: t.method,
                requestTime: t.requestTime,
                responseTime: t.responseTime,
                statusCode: t.statusCode,
                library: t.library
            }
        }, e.prototype.excludeDomains = function (t) {
            var e;
            (e = csArray.prototype.push).call.apply(e, Is([this.excludedDomains], t))
        }, e.truncatedErrorMessageMarker = "…", e
    }(As), _s = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Ns = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Ms = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.monkeyPatcher = e, r.callbacks = [], r.openHook = function (t) {
                var e = t.context, i = t.args, n = t.callerName;
                return r.interceptOpen(e, i, n)
            }, r
        }

        return _s(e, t), e.prototype.onEvent = function (t) {
            csArray.prototype.push.call(this.callbacks, t)
        }, e.prototype.start = function () {
            this.isStarted || (this.createInterceptors(), this.openInterceptor && this.openInterceptor.activate(), this.isStarted = !0)
        }, e.prototype.createInterceptors = function () {
            this.openInterceptor || (this.openInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                target: XMLHttpRequest.prototype,
                methodName: "open",
                hook: this.openHook,
                options: {withCallerName: !0}
            }))
        }, e.prototype.stop = function () {
            this.isStarted && (this.openInterceptor && this.openInterceptor.deactivate(), this.isStarted = !1)
        }, e.prototype.interceptOpen = function (t, e, r) {
            var i = this;
            t.apiCall = {
                url: e[1],
                method: e[0],
                requestTime: B.now(),
                responseTime: 0,
                statusCode: 0
            }, t.apiCall.library = r, t.addEventListener("readystatechange", (function () {
                return i.readyStateChangeListener(t)
            }))
        }, e.prototype.readyStateChangeListener = function (t) {
            t.readyState === XMLHttpRequest.DONE && (t.apiCall.responseTime = B.now(), t.apiCall.statusCode = t.status, csArray.prototype.forEach.call(this.callbacks, (function (e) {
                return e(t.apiCall)
            })))
        }, Ns([Ot("XhrRequestTracker.interceptOpen")], e.prototype, "interceptOpen", null), Ns([Ot("XhrRequestTracker.readyStateChangeListener")], e.prototype, "readyStateChangeListener", null), e
    }(As), Ls = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), xs = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Ds = function (t, e, r, i) {
        return new (r || (r = Promise))((function (n, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }

            c((i = i.apply(t, e || [])).next())
        }))
    }, Vs = function (t, e) {
        var r, i, n, o, s = {
            label: 0, sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }, Us = function () {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var i = Array(t), n = 0;
        for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
        return i
    }, qs = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.monkeyPatcher = e, r.callbacks = [], r.hook = function (t) {
                var e = t.result, i = t.args, n = t.callerName;
                r.interceptFetch(e, i, n)
            }, r
        }

        return Ls(e, t), e.prototype.onEvent = function (t) {
            csArray.prototype.push.call(this.callbacks, t)
        }, e.prototype.start = function () {
            this.canTrackFetch() && !this.isStarted && (this.createFetchInterceptor(), this.fetchInterceptor && this.fetchInterceptor.activate(), this.isStarted = !0)
        }, e.prototype.canTrackFetch = function () {
            return !!window.fetch && "function" == typeof window.fetch
        }, e.prototype.prepareArgs = function (t, e) {
            var r = Us(e);
            return r[0] && "function" == typeof r[0].clone && (r[0] = e[0].clone()), {context: t, args: r}
        }, e.prototype.createFetchInterceptor = function () {
            this.fetchInterceptor || (this.fetchInterceptor = this.monkeyPatcher.createAsyncFunctionInterceptor({
                target: window,
                methodName: "fetch",
                hook: this.hook,
                hookPrepareArgs: this.prepareArgs,
                options: {withCallerName: !0}
            }))
        }, e.prototype.stop = function () {
            this.isStarted && (this.fetchInterceptor && this.fetchInterceptor.deactivate(), this.isStarted = !1)
        }, e.prototype.interceptFetch = function (t, e, r) {
            return Ds(this, void 0, void 0, (function () {
                var i, n, o, s, a, c;
                return Vs(this, (function (u) {
                    switch (u.label) {
                        case 0:
                            i = e[0], n = e[1], o = new Request(i, n), (s = {
                                url: o.url,
                                method: o.method,
                                requestTime: B.now(),
                                responseTime: 0,
                                statusCode: 0
                            }).library = r, u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]), [4, t];
                        case 2:
                            return a = u.sent(), [3, 4];
                        case 3:
                            if ((c = u.sent()) instanceof TypeError || c instanceof DOMException && "AbortError" === c.name) return [2];
                            throw c;
                        case 4:
                            return s.responseTime = B.now(), a.type.indexOf("opaque") > -1 ? s.statusCode = -1 : s.statusCode = a.status, csArray.prototype.forEach.call(this.callbacks, (function (t) {
                                return t(s)
                            })), [2]
                    }
                }))
            }))
        }, xs([Ot("FetchRequestTracker.interceptFetch")], e.prototype, "interceptFetch", null), e
    }(As);
    (ws || (ws = {})).transformEvent = function (t, e, r) {
        return function (t, e) {
            return Di(e) && (e.tgt = "" + t + Fs + e.tgt), void 0 !== e.tgtHM && (e.tgtHM = "" + t + Fs + e.tgtHM), function (t) {
                return void 0 !== t.tgtLk
            }(e) && (e.tgtLk = "" + t + Fs + e.tgtLk), e
        }(e, function (t, e) {
            if (void 0 !== (i = e).x && void 0 !== i.y) {
                var r = t.getBoundingClientRect();
                e.x = Math.round(r.left + e.x + Ue.windowOffsetX()), e.y = Math.round(r.top + e.y + Ue.windowOffsetY())
            }
            var i;
            return e
        }(t, r))
    }, (Cs || (Cs = {})).transformCommandsBatch = function (t, e) {
        return {iframePath: e.iframePath ? "" + t + Fs + e.iframePath : t, commands: e.commands}
    };
    var zs, js = function () {
        return (js = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    };
    (zs || (zs = {})).transformEmerchandisingMessage = function (t, e) {
        if (0 === e.products.length) return e;
        var r = csArray.prototype.map.call(e.products, (function (e) {
            return js(js({}, e), {targetPath: "" + t + Fs + e.targetPath})
        }));
        return js(js({}, e), {products: r})
    };
    var Bs, Hs = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Fs = "|iframe|", Gs = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return Hs(e, t), e.prototype.emitIframeEvent = function (t, e, r, i) {
            switch (r) {
                case ht.ChildLogMessage:
                    this.logMessage(i);
                    break;
                case ht.AnalysisEvent:
                    var n = ws.transformEvent(t, e, i);
                    this.emitIframeAnalysisEvent(n);
                    break;
                case ht.JavascriptError:
                    this.emitIframeJavascriptError(i);
                    break;
                case ht.ApiError:
                    this.emitIframeApiError(i);
                    break;
                case ht.EmerchandisingMessage:
                    var o = zs.transformEmerchandisingMessage(e, i);
                    this.emitIframeEmerchandisingMessage(o);
                    break;
                case ht.Commands:
                    var s = Cs.transformCommandsBatch(e, i);
                    this.emitIframeCommands(s);
                    break;
                case ht.IntegrationCallback:
                    this.emitIframeIntegrationCallback(i);
                    break;
                default:
                    It.error("Parent received unknown data type from iframe : " + csJSON.stringify(i))
            }
        }, e.prototype.logMessage = function (t) {
            var e = t.message, r = t.errorCode;
            switch (t.level) {
                case q.debug:
                    It.debug(e, r);
                    break;
                case q.warn:
                    It.warn(e, r);
                    break;
                case q.error:
                    It.error(e, r);
                    break;
                case q.critical:
                    It.critical(e, r)
            }
        }, e.prototype.emitIframeAnalysisEvent = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeAnalysisEvent && i.onIframeAnalysisEvent(t)
            }
        }, e.prototype.emitIframeJavascriptError = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeJavascriptError && i.onIframeJavascriptError(t)
            }
        }, e.prototype.emitIframeApiError = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeApiError && i.onIframeApiError(t)
            }
        }, e.prototype.emitIframeEmerchandisingMessage = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeEmerchandisingMessage && i.onIframeEmerchandisingMessage(t)
            }
        }, e.prototype.emitIframeCommands = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeCommands && i.onIframeCommands(t)
            }
        }, e.prototype.emitIframeIntegrationCallback = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIframeIntegrationCallback && i.onIframeIntegrationCallback(t)
            }
        }, e
    }(To);
    !function (t) {
        t.COMPRESSION_DISABLED = "compressionDisabled"
    }(Bs || (Bs = {}));
    var Ws, Ks, Xs = function () {
        function t(t, e, r) {
            this.configuration = t, this.cookieService = e, this.browserSessionStorage = r, this.debugFlags = []
        }

        return t.prototype.init = function () {
            var t = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_debug") : this.cookieService.get("_cs_debug");
            t && (this.debugFlags = csString.prototype.split.call(t, "."))
        }, t.prototype.isCompressionDisabled = function () {
            return -1 !== csArray.prototype.indexOf.call(this.debugFlags, Bs.COMPRESSION_DISABLED)
        }, t
    }(), Ys = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, Js = function () {
        function t(t) {
            this.onError = t, this.WORKER_SIGNATURE = "CS_WORKER_SIGNATURE", this.worker = this.tryCreateCompressionWorker(), this.callbacks = {}, this.callbackId = 0
        }

        return t.prototype.isSupported = function () {
            return null !== this.worker
        }, t.prototype.compress = function (t, e, r) {
            if (this.isSupported()) {
                var i = this.getNewCallbackId();
                this.callbacks[i] = r, this.worker.postMessage([this.WORKER_SIGNATURE, t, e, i])
            }
        }, t.prototype.compressSync = function (t) {
            return ln.compressToBase64(t)
        }, t.prototype.tryCreateCompressionWorker = function () {
            try {
                var t = csString.prototype.replace.call(csString.prototype.replace.call(this.compressionScript.toString(), "GET_LZ_STRING_SOURCE", pn), "SIGNATURE_PLACEHOLDER", csJSON.stringify(this.WORKER_SIGNATURE));
                return this.createWorker("(" + t + ")();")
            } catch (t) {
                return null
            }
        }, t.prototype.createWorker = function (t) {
            var e = this, r = window.csURL || window.webkitURL, i = window.Blob, n = window.Worker;
            if (!r || !i || !n) return null;
            var o = new i([t], {type: "application/javascript"}), s = new n(r.createObjectURL(o));
            return s.onerror = function (t) {
                return e.handleWorkerError(t)
            }, s.onmessage = function (t) {
                return e.handleWorkerMessage(t)
            }, s
        }, t.prototype.handleWorkerError = function (t) {
            var e = "WorkerError: " + (t.message ? t.message : "No message");
            return this.onError(e)
        }, t.prototype.handleWorkerMessage = function (t) {
            var e = t.data, r = e[0], i = e[1], n = e[2];
            r === this.WORKER_SIGNATURE && (this.callbacks[i](n), delete this.callbacks[i])
        }, t.prototype.compressionScript = function () {
            var t = GET_LZ_STRING_SOURCE(), e = SIGNATURE_PLACEHOLDER;
            self.addEventListener("message", (function (r) {
                var i = r.data, n = i[0], o = i[1], s = i[2], a = i[3];
                if (n === e) {
                    var c;
                    switch (o) {
                        case"base64":
                            c = t.compressToBase64(s);
                            break;
                        case"byteArray":
                            c = t.compressToUint8Array(s).buffer
                    }
                    self.postMessage([e, a, c])
                }
            }))
        }, t.prototype.getNewCallbackId = function () {
            return this.callbackId += 1
        }, Ys([Ot("Worker message handler")], t.prototype, "handleWorkerMessage", null), t
    }(), Qs = function () {
        return (Qs = Object.assign || function (t) {
            for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    }, Zs = function () {
        function t(t) {
            this.pii = t, this.urlMaskingPatterns = []
        }

        return t.prototype.addUrlMaskingPattern = function (e) {
            for (var r = [], i = 0, n = csString.prototype.split.call(e, "/"); i < n.length; i++) {
                var o = n[i];
                V(o, t.ROUTE_PARAMETER_START) ? csArray.prototype.push.call(r, {
                    key: o,
                    value: "CS_ANONYMIZED_" + csString.prototype.toUpperCase.call(csString.prototype.slice.call(o, 1))
                }) : csArray.prototype.push.call(r, {key: o, value: null})
            }
            csArray.prototype.push.call(this.urlMaskingPatterns, r)
        }, t.prototype.anonymize = function (t) {
            return Qs(Qs({}, t), {url: this.anonymizeUrl(t.url)})
        }, t.prototype.anonymizeUrl = function (t) {
            return this.maskUrl(this.pii.anonymize(this.removeQueryString(t)))
        }, t.prototype.maskUrl = function (t) {
            for (var e = csString.prototype.split.call(t, "/"), r = 0, i = this.urlMaskingPatterns; r < i.length; r++) {
                var n = i[r], o = this.getAnonymizedUrl(e, n);
                if (null !== o) return o
            }
            return t
        }, t.prototype.getAnonymizedUrl = function (e, r) {
            if (e.length < r.length) return null;
            for (var i = "", n = 0; n < e.length; n += 1) if (n >= r.length) i += e[n] + "/"; else if (V(r[n].key, t.ROUTE_PARAMETER_START)) i += r[n].value + "/"; else {
                if (e[n] !== r[n].key) return null;
                i += e[n] + "/"
            }
            return csString.prototype.slice.call(i, 0, -1)
        }, t.prototype.removeQueryString = function (t) {
            var e = csString.prototype.indexOf.call(t, "?");
            return -1 !== e ? csString.prototype.slice.call(t, 0, e + 1) : t
        }, t.ROUTE_PARAMETER_START = ":", t
    }(), $s = function () {
        function t(t, e) {
            this.pii = t, this.urlService = e
        }

        return t.prototype.anonymize = function (t) {
            return bt(t.message) && (t.message = this.pii.anonymize(t.message)), bt(t.filename) && (t.filename = this.pii.anonymize(this.urlService.computeOverriddenUrl(t.filename))), t
        }, t
    }(), ta = function () {
        function t() {
        }

        return t.prototype.setItem = function (t, e) {
            window.sessionStorage.setItem(t, e)
        }, t.prototype.getItem = function (t) {
            return window.sessionStorage.getItem(t)
        }, t.prototype.removeItem = function (t) {
            window.sessionStorage.removeItem(t)
        }, t
    }(), ea = function () {
        function t() {
        }

        return t.prototype.setItem = function (t, e) {
            window.localStorage.setItem(t, e)
        }, t.prototype.getItem = function (t) {
            return window.localStorage.getItem(t)
        }, t.prototype.removeItem = function (t) {
            window.localStorage.removeItem(t)
        }, t
    }(), ra = ["visit", 2], ia = ["page", 3], na = function () {
        function t(t, e) {
            this.pii = t, this.storage = e, this.customVariablesPage = {}
        }

        return t.prototype.set = function (t, e, r, i) {
            var n, o;
            if (t > 0 && wt(e) && wt(r)) {
                var s = this.pii.anonymize("" + (St(e) ? e : csString(e))),
                    a = this.pii.anonymize("" + (St(r) ? r : csString(r)));
                if (n = [s.slice(0, 20), a.slice(0, 255)], o = "" !== r, !bt(i) || csArray.prototype.indexOf.call(ra, i) >= 0) {
                    var c = this.getCustomVariablesSession();
                    o ? c[t] = n : delete c[t], this.setCustomVariableSession(c)
                }
                (!bt(i) || csArray.prototype.indexOf.call(ia, i) >= 0) && (o ? this.customVariablesPage[t] = n : delete this.customVariablesPage[t])
            }
        }, t.prototype.getCustomVariablesSession = function () {
            var t = this.storage.get();
            if (!t) return {};
            var e = window.JSON.parse(t);
            return null !== e && Et(e) ? e : {}
        }, t.prototype.setCustomVariableSession = function (t) {
            this.storage.set(window.JSON.stringify(t))
        }, t.prototype.removeCustomVariablesSession = function () {
            this.storage.remove()
        }, t.prototype.getRequestParameters = function () {
            var t = this.getCustomVariablesSession();
            for (var e in this.customVariablesPage) this.customVariablesPage.hasOwnProperty(e) && (t[e] = this.customVariablesPage[e]);
            if (window.JSON.stringify(t).length <= 2) return {};
            var r = {cvars: this.getValidCustomVars(t)};
            return this.customVariablesPage && window.JSON.stringify(this.customVariablesPage).length > 2 && (r.cvarp = this.getValidCustomVars(this.customVariablesPage)), r
        }, t.prototype.getValidCustomVars = function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) {
                var r = parseInt(e, 10), i = t[e], n = i[0], o = i[1];
                a = 1, c = 20, (!(mt(s = r) && s >= a && s <= c) || n.length > 20 || o.length > 255) && delete t[e]
            }
            var s, a, c, u = function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }(t) ? [] : t;
            return window.JSON.stringify(u)
        }, t
    }(), oa = ["setCustomVariable"], sa = function () {
        function t(t, e) {
            this.commandsService = t, this.customVariablesService = e
        }

        return t.prototype.init = function () {
            var t = this;
            this.commandsService.register(oa, (function (e, r, i, n) {
                t.customVariablesService.set(e, r, i, n)
            }))
        }, t.prototype.onOptout = function () {
            this.customVariablesService.removeCustomVariablesSession()
        }, t
    }(), aa = function () {
        function t(t, e, r) {
            this.configuration = t, this.cookieChecker = e, this.parentLogContext = r
        }

        return t.prototype.init = function () {
            var t = this;
            performance.mark("cs-start-boot");
            var e = new ko, r = new $, i = new Uo, n = new Bo(this.configuration, i, r), o = new Ts(window.location, r),
                s = new _t(this.configuration, o, this.cookieChecker);
            s.init();
            var a = new ta, c = new ea, u = new Do(window.location, s), p = new Xs(this.configuration, s, a);
            p.init();
            var l = new fs(this.configuration, s);
            l.init();
            var h, f = new Js((function (t) {
                It.warn(t)
            }));
            if (this.configuration.useMalkaPipeline) {
                var d = new ie(this.configuration.getQuotaServiceUri(), "quota");
                (h = new So(this.configuration, f, d, e, u, o)).init()
            } else h = new vo(this.configuration, f, u, o);
            var y = new Wt(this.configuration, s, l, a), v = new Eo(y, h), g = new Bt(this.configuration, s, l, a),
                m = new ho(this.configuration, g, v);
            this.parentLogContext.setContext(m, v), h.setVisitorService(m);
            var S = new wo(m, v), E = new Yt(this.configuration, s, l, a), b = new Lo(window.location, E),
                w = new xo(b), C = new bo(this.configuration, m, b), T = new Gs, R = new ts, k = new Jo(R, T),
                A = new Jt(this.configuration, s, l, a), P = new na(r, A), I = new sa(R, P),
                O = new zt(m, v, b, P, this.configuration), _ = new te, N = new Zt(_, window.location),
                M = new Yo(this.configuration, O, N), L = new ys(this.configuration, _);
            l.setStates(O, L);
            var x = new po(this.configuration, m, b, C, S, M, l, u);
            return n.init(), x.compute((function (i) {
                k.init();
                var n = new ks, a = new Po(t.configuration, s, c), u = new No(t.configuration, a, e), l = new _o(R, u),
                    h = new Ho(t.configuration, s, c), d = new Fo(e, window.location, h), y = new Wo(R, d),
                    g = new Es(R, t.configuration), S = new gs(t.configuration, m, v), E = new Ss, b = new jr,
                    C = new Ms(b), A = new qs(b), O = new Os(C, A), _ = new Zs(r), N = new $s(r, o),
                    M = new ls(E, N, O, _, t.configuration, S, T, R, n);
                (M.init(), performance.mark("cs-step2-boot"), e.addListeners(M), i) ? (e.emitInitTracking(), new uo(S, f, m, v, e, R, k, t.configuration, y, d, l, u, r, o, g, n, E, N, O, _, T, p, P, I).start()) : new Mo(e, R, k, y, d, w, l).start()
            })), performance.mark("cs-end-boot"), performance.measure("cs-measure-boot", "cs-start-boot", "cs-end-boot"), {LZString: ln}
        }, t
    }();
    !function (t) {
        var e, r = {
            loadBundle: function (t) {
                var s = t.source, a = t.data;
                if (n(a)) {
                    var p = function () {
                        var e, r, n, o = i("{domain}/tag/tag.bundle.js?v={version}", a);
                        e = o, r = function () {
                            return s.postMessage("csBundleLoaded", t.origin)
                        }, (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, n.onload = r, n.charset = "utf-8", document.head.appendChild(n)
                    };
                    e = a.token, u(r.loadBundle), o(t.origin) ? p() : function (t, e) {
                        var r = function (t) {
                            var e = document.createElement("iframe");
                            return e.src = t, e.id = "content-square-bridge", e.setAttribute("style", "display: none !important; visibility: hidden !important;"), e
                        }(i("{domain}/tag/bridge.html?v={version}#{token}", t)), n = function (t) {
                            t.source === r.contentWindow && "TOKEN_VALID" === t.data && (u(n), r.remove(), e())
                        };
                        c(n), document.head.appendChild(r)
                    }(a, p)
                }
            }
        };

        function i(t, e) {
            return csString.prototype.replace.call(csString.prototype.replace.call(csString.prototype.replace.call(t, "{version}", e.version), "{token}", e.token), "{domain}", e.domain)
        }

        function n(t) {
            return t && "csBundleInjection" === t.type && o(t.domain) && a(t.version) && s(t.token)
        }

        function o(t) {
            return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(t)
        }

        function s(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        }

        function a(t) {
            return /^[a-zA-Z0-9\.]+$/.test(t)
        }

        function c(t) {
            window.addEventListener("message", t, !1)
        }

        function u(t) {
            window.removeEventListener("message", t, !1)
        }

        t.getToken = function () {
            return e
        }, t.isAuthorizedIncomingMessage = n, t.isAuthorizedDomain = o, t.isAuthorizedToken = s, t.isAuthorizedTagVersion = a, t.isActivable = function () {
            var t = window.opener || window.parent;
            return window !== t && window.addEventListener
        }, t.waitForBundleInjection = function () {
            c(r.loadBundle)
        }, t.listen = c, t.removeListener = u
    }(Ws || (Ws = {})), function (t) {
        var e, r = window.opener || window.parent,
            i = [/^https:\/\/app\.contentsquare\.com$/, /^https:\/\/dev-app\.contentsquare\.com$/, /^https:\/\/staging-app\.contentsquare\.com$/, /^https:\/\/.*\.test\.contentsquare\.com$/],
            n = {
                ping: function (t) {
                    "ping" === t.data && o(t.origin) && (e = t.origin, c(n.ping), a(n.insertMessageScript), s("utils.js" + "?cb=" + (new csDate).getTime()))
                }, insertMessageScript: u((function (t) {
                    var e = t.data;
                    "string" == typeof e && "ping" !== e && (c(n.insertMessageScript), s(e))
                }))
            };

        function o(t) {
            return csArray.prototype.some.call(i, (function (e) {
                return e.test(t)
            }))
        }

        function s(t, r) {
            var i = document.createElement("script");
            i.type = "text/javascript", i.async = !0;
            var n = csString.prototype.replace.call(e, /^https?:/, "");
            i.src = n + "/tag/" + t, i.onload = r, i.charset = "utf-8", document.getElementsByTagName("head")[0].appendChild(i)
        }

        function a(t) {
            window.addEventListener("message", t, !1)
        }

        function c(t) {
            window.removeEventListener("message", t, !1)
        }

        function u(t) {
            return function (r) {
                r.origin === e && t(r)
            }
        }

        t.getToken = function () {
            return Ws.getToken()
        }, t.isActivable = function () {
            return window !== r && window.addEventListener
        }, t.isAuthorizedDomain = o, t.waitForConnection = function () {
            a(n.ping), Ws.waitForBundleInjection()
        }, t.listen = a, t.removeListener = c, t.secureListener = u, t.post = function (t) {
            e && r.postMessage(t, e)
        }
    }(Ks || (Ks = {}));
    var ca = window.CSFrameCommunication || Ks, ua = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), pa = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return ua(e, t), e.prototype.emitAfterPageViewCallback = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onAfterPageViewCallback && i.onAfterPageViewCallback(t)
            }
        }, e.prototype.emitIntegrationSessionKeyCallback = function (t) {
            for (var e = 0, r = this.listeners; e < r.length; e++) {
                var i = r[e];
                i.onIntegrationSessionKeyCallback && i.onIntegrationSessionKeyCallback(t)
            }
        }, e
    }(To), la = function () {
        function t(t) {
            this.iframeCommandsSenderService = t
        }

        return t.prototype.init = function () {
            this.iframeCommandsSenderService.register(Ci), this.iframeCommandsSenderService.register(oa), this.iframeCommandsSenderService.register(kn), this.iframeCommandsSenderService.register(An), this.iframeCommandsSenderService.register(Rn), this.iframeCommandsSenderService.register(Oi), this.iframeCommandsSenderService.register(_i), this.iframeCommandsSenderService.register(Ni), this.iframeCommandsSenderService.register(Mi), this.iframeCommandsSenderService.register(Mn), this.iframeCommandsSenderService.register(Ln), this.iframeCommandsSenderService.register(Go), this.iframeCommandsSenderService.register($n), this.iframeCommandsSenderService.register(to), this.iframeCommandsSenderService.register(Io), this.iframeCommandsSenderService.register(Oo), this.iframeCommandsSenderService.register(ps), this.iframeCommandsSenderService.register(us)
        }, t.prototype.onStartTracking = function () {
            this.iframeCommandsSenderService.start()
        }, t.prototype.onOptout = function () {
            this.iframeCommandsSenderService.stop()
        }, t
    }(), ha = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), fa = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, da = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.commandsService = e, i.iframeChildToParentCommunicationService = r, i.batch = [], i
        }

        return ha(e, t), e.prototype.onStart = function () {
            this.commandsBatchReady()
        }, e.prototype.onStop = function () {
            this.batch = []
        }, e.prototype.register = function (t) {
            for (var e = this, r = function (t) {
                i.commandsService.register([t], (function () {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    return e.send(t, r)
                }))
            }, i = this, n = 0, o = t; n < o.length; n++) {
                r(o[n])
            }
        }, e.prototype.send = function (t, e) {
            csArray.prototype.push.call(this.batch, {name: t, params: e}), this.isStarted && this.commandsBatchReady()
        }, e.prototype.commandsBatchReady = function () {
            if (0 !== this.batch.length) {
                var t = {commands: this.batch};
                this.iframeChildToParentCommunicationService.sendToParent(ht.Commands, t), this.batch = []
            }
        }, fa([Ot("Commands.iframe.commandsBatch.send")], e.prototype, "send", null), fa([Ei(), Ot("send iframe commands batch")], e.prototype, "commandsBatchReady", null), e
    }(Ee), ya = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), va = function (t) {
        function e(e, r, i) {
            var n = t.call(this) || this;
            return n.configuration = e, n.lifeCycleEventsEmitter = r, n.childLifeCycleEventEmitter = i, n.id = -1, n.parentOrigin = "", n.maxMessagesBuffer = 25, n.messageBuffer = [], n.messageHandler = {
                boundElement: window,
                type: "message",
                listener: function (t) {
                    return n.messagesListener(t)
                }
            }, n
        }

        return ya(e, t), e.prototype.onStart = function () {
            ne(this.messageHandler, !1), this.sendDiscovery()
        }, e.prototype.onStop = function () {
            oe(this.messageHandler, !1)
        }, e.prototype.sendToParent = function (t, e) {
            var r = this.buildChildBaseMessage(t, e);
            this.sendMessage(r)
        }, e.prototype.sendDiscovery = function () {
            var t = this.buildChildBaseMessage(ht.Discovery);
            ft.sendMessage(window.parent, "*", t)
        }, e.prototype.buildChildBaseMessage = function (t, e) {
            var r = ft.buildBaseMessage(t, lt.Child, this.configuration.projectId, this.id);
            return e && (r.content = e), r
        }, e.prototype.sendMessage = function (t) {
            void 0 !== t.id ? ft.sendMessage(window.parent, this.parentOrigin, t) : this.addMessageToBuffer(t)
        }, e.prototype.messagesListener = function (t) {
            if (ft.isMessageValid(t, lt.Parent, this.configuration.projectId, this.configuration.hostnames)) switch (t.data.type) {
                case ht.IntegrationCallback:
                    var e = t.data.content;
                    e.initiator === pt.AfterPageView ? this.childLifeCycleEventEmitter.emitAfterPageViewCallback(e) : e.initiator === pt.GetSessionKey ? this.childLifeCycleEventEmitter.emitIntegrationSessionKeyCallback(e) : It.warn("Iframe child (" + this.id + ") received unknown IntegrationCallback type from parent (" + t.origin + ") : " + csJSON.stringify(t.data));
                    break;
                case ht.Stop:
                    this.lifeCycleEventsEmitter.emitOptout();
                    break;
                case ht.Discovery:
                    if (!mt(t.data.id) || t.data.id < 0) return void It.warn("Iframe child (" + this.id + ") received discovery without valid id from parent (" + t.origin + ") : " + csJSON.stringify(t.data));
                    this.id = t.data.id, this.parentOrigin = t.origin, this.sendAllBufferedMessages();
                    break;
                default:
                    It.warn("Iframe child (" + this.id + ") received unknown data type from parent (" + t.origin + ") : " + csJSON.stringify(t.data))
            }
        }, e.prototype.addMessageToBuffer = function (t) {
            this.messageBuffer.length < this.maxMessagesBuffer && csArray.prototype.push.call(this.messageBuffer, t)
        }, e.prototype.sendAllBufferedMessages = function () {
            for (var t = 0, e = this.messageBuffer; t < e.length; t++) {
                var r = e[t];
                r.id = this.id, ft.sendMessage(window.parent, this.parentOrigin, r)
            }
            this.messageBuffer = []
        }, e
    }(Ee), ga = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), ma = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.apiErrorsTracker = e, i.iframeChildToParentCommunicationService = r, i
        }

        return ga(e, t), e.prototype.init = function () {
            var t = this;
            this.apiErrorsTracker.init(), this.apiErrorsTracker.onEvent((function (e) {
                return t.processEvent(e)
            }))
        }, e.prototype.onStart = function () {
            this.apiErrorsTracker.start()
        }, e.prototype.onStop = function () {
            this.apiErrorsTracker.stop()
        }, e.prototype.processEvent = function (t) {
            this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(ht.ApiError, t)
        }, e
    }(Ee), Sa = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Ea = function (t) {
        function e(e, r) {
            var i = t.call(this) || this;
            return i.javaScriptErrorsTracker = e, i.iframeChildToParentCommunicationService = r, i
        }

        return Sa(e, t), e.prototype.init = function () {
            var t = this;
            this.javaScriptErrorsTracker.onEvent((function (e) {
                return t.processEvent(e)
            }))
        }, e.prototype.onStart = function () {
            this.javaScriptErrorsTracker.start()
        }, e.prototype.onStop = function () {
            this.javaScriptErrorsTracker.stop()
        }, e.prototype.processEvent = function (t) {
            this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(ht.JavascriptError, t)
        }, e
    }(Ee), ba = function () {
        function t(t, e, r, i) {
            this.javaScriptErrorsTracker = t, this.apiErrorsTracker = e, this.configuration = r, this.iframeChildToParentCommunicationService = i
        }

        return t.prototype.init = function () {
            this.iframeJavaScriptErrorsService = new Ea(this.javaScriptErrorsTracker, this.iframeChildToParentCommunicationService), this.iframeJavaScriptErrorsService.init(), this.apiErrorsTracker.excludeDomains([Qo.CONTENTSQUARE, Qo.CLICKTALE, Qo.FAKE_TRACKER]), this.iframeApiErrorsService = new ma(this.apiErrorsTracker, this.iframeChildToParentCommunicationService), this.iframeApiErrorsService.init()
        }, t.prototype.onStartTracking = function () {
            this.configuration.jsErrorsEnabled && this.iframeJavaScriptErrorsService.start(), this.configuration.apiErrorsEnabled && this.iframeApiErrorsService.start()
        }, t.prototype.onOptout = function () {
            this.iframeJavaScriptErrorsService.stop(), this.iframeApiErrorsService.stop()
        }, t
    }(), wa = function () {
        function t(t) {
            this.iframeChildToParentCommunicationService = t
        }

        return t.prototype.onStartTracking = function () {
            this.iframeChildToParentCommunicationService.start()
        }, t.prototype.onOptout = function () {
            this.iframeChildToParentCommunicationService.stop()
        }, t
    }(), Ca = function () {
        function t(t, e, r) {
            this.iframeParentToChildrenCommunicationService = t, this.iframeEventsEmitter = e, this.iframeChildToParentCommunicationService = r
        }

        return t.prototype.init = function () {
            var t = this;
            this.iframeParentToChildrenCommunicationService.onChildMessage((function (e, r, i, n) {
                return t.iframeEventsEmitter.emitIframeEvent(e, r, i, n)
            }))
        }, t.prototype.onStartTracking = function () {
            this.iframeParentToChildrenCommunicationService.start()
        }, t.prototype.onOptout = function () {
            this.iframeParentToChildrenCommunicationService.stop()
        }, t.prototype.onIframeAnalysisEvent = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.AnalysisEvent, t)
        }, t.prototype.onIframeJavascriptError = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.JavascriptError, t)
        }, t.prototype.onIframeApiError = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.ApiError, t)
        }, t.prototype.onIframeEmerchandisingMessage = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.EmerchandisingMessage, t)
        }, t.prototype.onIframeCommands = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.Commands, t)
        }, t.prototype.onIframeIntegrationCallback = function (t) {
            this.iframeChildToParentCommunicationService.sendToParent(ht.IntegrationCallback, t)
        }, t.prototype.onAfterPageViewCallback = function (t) {
            this.iframeParentToChildrenCommunicationService.sendToChildren(ht.IntegrationCallback, t)
        }, t.prototype.onIntegrationSessionKeyCallback = function (t) {
            this.iframeParentToChildrenCommunicationService.sendToChildren(ht.IntegrationCallback, t)
        }, t
    }(), Ta = function () {
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };
        return function (e, r) {
            function i() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
        }
    }(), Ra = function (t) {
        function e(e, r, i) {
            var n = t.call(this) || this;
            return n.analysisEventsTracker = e, n.gestureTracker = r, n.iframeChildToParentCommunicationService = i, n
        }

        return Ta(e, t), e.prototype.init = function () {
            var t = this;
            this.analysisEventsTracker.onEvent((function (e) {
                return t.processEvent(e)
            })), this.gestureTracker.onEvent((function (e) {
                return t.processEvent(e)
            }))
        }, e.prototype.onStart = function () {
            this.analysisEventsTracker.start(), this.gestureTracker.start()
        }, e.prototype.onStop = function () {
            this.analysisEventsTracker.stop(), this.gestureTracker.stop()
        }, e.prototype.processEvent = function (t) {
            this.isStarted && t.type !== mi.RESIZE && this.iframeChildToParentCommunicationService.sendToParent(ht.AnalysisEvent, t)
        }, e
    }(Ee), ka = function () {
        function t(t, e, r, i) {
            this.configuration = t, this.projectPathComputation = e, this.selector = r, this.iframeChildToParentCommunicationService = i
        }

        return t.prototype.init = function () {
            var t = new on(this.configuration, this.projectPathComputation, this.selector),
                e = new ji(this.configuration, this.projectPathComputation, new Gi(It));
            this.iframeAnalysisEventsService = new Ra(t, e, this.iframeChildToParentCommunicationService), this.iframeAnalysisEventsService.init()
        }, t.prototype.onStartTracking = function () {
            this.iframeAnalysisEventsService.start()
        }, t.prototype.onOptout = function () {
            this.iframeAnalysisEventsService.stop()
        }, t
    }(), Aa = function () {
        function t(t, e, r) {
            this.urlService = t, this.eMerchandisingTracker = e, this.iframeChildToParentCommunicationService = r, this.products = []
        }

        return t.prototype.collect = function () {
            this.products = this.eMerchandisingTracker.collectProducts(), this.targetUrl = this.urlService.getUrl(), this.sendEMerchandisingData()
        }, t.prototype.clearProducts = function () {
            this.products = []
        }, t.prototype.sendEMerchandisingData = function () {
            var t = {
                targetUrl: this.targetUrl,
                windowWidth: Ue.windowWidth(),
                windowHeight: Ue.windowHeight(),
                products: this.products
            };
            this.iframeChildToParentCommunicationService.sendToParent(ht.EmerchandisingMessage, t)
        }, t
    }(), Pa = function () {
        function t(t, e, r) {
            this.configuration = t, this.urlService = e, this.iframeChildToParentCommunicationService = r
        }

        return t.prototype.init = function () {
            var t = new Un(this.configuration);
            this.iframeEmerchandisingService = new Aa(this.urlService, t, this.iframeChildToParentCommunicationService)
        }, t.prototype.onStartTracking = function () {
            this.iframeEmerchandisingService.clearProducts(), this.iframeEmerchandisingService.collect()
        }, t
    }(), Ia = function () {
        function t(t) {
            this.iframeChildToParentCommunicationService = t, this.registeredCallbacks = {}
        }

        return t.prototype.handleCommand = function (t) {
            Ct(t) && this.registerCallback(t)
        }, t.prototype.executeRegisteredCallbacks = function (t) {
            var e = t.trackingContext;
            if (e) if (t.callbackId) {
                var r = this.registeredCallbacks[t.callbackId];
                r && this.executeAsync(r, e)
            } else for (var i in this.registeredCallbacks) this.executeAsync(this.registeredCallbacks[i], e)
        }, t.prototype.registerCallback = function (t) {
            var e = j.integer(), r = {callbackId: e, initiator: pt.AfterPageView};
            this.registeredCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(ht.IntegrationCallback, r)
        }, t.prototype.executeAsync = function (t, e) {
            setTimeout((function () {
                t(e)
            }))
        }, t
    }(), Oa = function () {
        function t(t) {
            this.iframeChildToParentCommunicationService = t, this.pendingCallbacks = {}
        }

        return t.prototype.handleCommand = function (t) {
            Et(t) && Ct(t.callback) && this.addPendingCallback(t.callback)
        }, t.prototype.executePendingCallbacks = function (t) {
            var e = t.trackingContext, r = t.callbackId;
            if (r && e) {
                var i = this.pendingCallbacks[r];
                i && (delete this.pendingCallbacks[r], this.executeAsync(i, e.sessionKey))
            }
        }, t.prototype.addPendingCallback = function (t) {
            var e = j.integer(), r = {callbackId: e, initiator: pt.GetSessionKey};
            this.pendingCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(ht.IntegrationCallback, r)
        }, t.prototype.executeAsync = function (t, e) {
            setTimeout((function () {
                t(e)
            }))
        }, t
    }(), _a = function () {
        function t(t, e) {
            this.commandsService = t, this.iframeChildToParentCommunicationService = e
        }

        return t.prototype.init = function () {
            var t = this;
            this.iframeAfterPageViewService = new Ia(this.iframeChildToParentCommunicationService), this.iframeGetSessionKeyService = new Oa(this.iframeChildToParentCommunicationService), this.commandsService.register(ui, (function (e) {
                t.iframeAfterPageViewService.handleCommand(e)
            })), this.commandsService.register(pi, (function (e) {
                return t.iframeGetSessionKeyService.handleCommand(e)
            }))
        }, t.prototype.onAfterPageViewCallback = function (t) {
            this.iframeAfterPageViewService.executeRegisteredCallbacks(t)
        }, t.prototype.onIntegrationSessionKeyCallback = function (t) {
            this.iframeGetSessionKeyService.executePendingCallbacks(t)
        }, t
    }(), Na = function () {
        function t(t, e, r, i, n) {
            var o = this;
            this.childLifeCycleEventsEmitter = t, this.lifeCycleEventsEmitter = e, this.configuration = r, this.iframeChildToParentCommunicationService = i, this.commandsService = n, this.startDataCollection = function () {
                o.commandsService.start(), o.loadTracker.start()
            }
        }

        return t.prototype.start = function () {
            var t = this, e = new In(_, this.configuration), r = new On(e),
                i = new ka(this.configuration, e, r, this.iframeChildToParentCommunicationService),
                n = new wa(this.iframeChildToParentCommunicationService);
            if (this.configuration.eMerchandisingEnabled) {
                var o = new $, s = new Ts(window.location, o),
                    a = new Pa(this.configuration, s, this.iframeChildToParentCommunicationService);
                this.lifeCycleEventsEmitter.addListeners(a), a.init()
            }
            var c = new _a(this.commandsService, this.iframeChildToParentCommunicationService);
            this.childLifeCycleEventsEmitter.addListeners(c), c.init();
            var u = new co(this.configuration), p = new Gs,
                l = new Ca(u, p, this.iframeChildToParentCommunicationService);
            p.addListeners(l), this.childLifeCycleEventsEmitter.addListeners(l), this.lifeCycleEventsEmitter.addListeners(n, l, i), l.init(), i.init(), this.loadTracker = new Nn, this.loadTracker.onLoad((function () {
                t.lifeCycleEventsEmitter.emitStartTracking()
            })), this.startDataCollection()
        }, t
    }(), Ma = function () {
        function t(t) {
            this.configuration = t
        }

        return t.prototype.init = function () {
            var t = new ko, e = new pa, r = new va(this.configuration, t, e), i = new ts, n = new da(i, r),
                o = new la(n);
            o.init();
            var s = new Ss, a = new jr, c = new Ms(a), u = new qs(a), p = new Os(c, u),
                l = new ba(s, p, this.configuration, r);
            return l.init(), t.addListeners(o, l), t.emitInitTracking(), new Na(e, t, this.configuration, r, i).start(), {LZString: ln}
        }, t
    }(), La = function (t, e, r, i) {
        var n, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
    }, xa = function () {
        function t(t, e, r) {
            this.configuration = t, this.iframeContext = e, this.parentLogContext = r
        }

        return t.prototype.start = function () {
            if (!window.UXAnalytics) {
                var t = new Nt(this.iframeContext, this.configuration);
                t.init();
                var e = new qt(this.configuration, t);
                if (this.iframeContext.isTopWindowTracker() && e.canTrack()) {
                    window.CSProtectnativeFunctionsErrors && It.warn("protectNativeFunctions failed: " + window.CSProtectnativeFunctionsErrors);
                    var r = new aa(this.configuration, t, this.parentLogContext);
                    window.UXAnalytics = r.init()
                } else if (!this.iframeContext.isTopWindowTracker() && e.canTrackInIframe()) {
                    var i = new Ma(this.configuration);
                    window.UXAnalytics = i.init()
                }
                !window.CSFrameCommunication && ca.isActivable() && (window.CSFrameCommunication = ca, ca.waitForConnection())
            }
        }, La([Ot("main.start")], t.prototype, "start", null), t
    }();
    try {
        performance.mark("cs-start-tag");
        var Da = new H(window.CS_CONF);
        window._uxa = window._uxa || [], Da.processOptionOverrides(window._uxa);
        var Va = new F(window, Da);
        Va.init();
        var Ua = new vt;
        if (Va.isTopWindowTracker()) {
            var qa = new ot(Da, Ua);
            It.setStrategy(qa)
        } else {
            var za = new yt(Da);
            It.setStrategy(za)
        }
        new xa(Da, Va, Ua).start()
    } catch (t) {
    }
}]);