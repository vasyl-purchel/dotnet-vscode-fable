! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 1)
}([function(t, e, n) {
    "use strict";
    throw new Error('Cannot find module "vscode"')
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(0);
    n.d(e, "activate", function() {
        return r.a
    }), n.d(e, "deactivate", function() {
        return r.b
    })
}]);
//# sourceMappingURL=extension.js.map