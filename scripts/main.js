! function(e) {
  function t(t) {
    for (var r, c, i = t[0], a = t[1], l = t[2], d = 0, s = []; d < i.length; d++) c = i[d], Object.prototype.hasOwnProperty.call(o, c) && o[c] && s.push(o[c][0]), o[c] = 0;
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    for (f && f(t); s.length;) s.shift()();
    return u.push.apply(u, l || []), n()
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, i = 1; i < n.length; i++) {
        var a = n[i];
        0 !== o[a] && (r = !1)
      }
      r && (u.splice(t--, 1), e = c(c.s = n[0]))
    }
    return e
  }
  var r = {},
    o = {
      0: 0
    },
    u = [];

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
  }
  c.m = e, c.c = r, c.d = function(e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, c.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, c.t = function(e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) c.d(n, r, function(t) {
        return e[t]
      }.bind(null, r));
    return n
  }, c.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return c.d(t, "a", t), t
  }, c.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, c.p = "";
  var i = window.webpackJsonp = window.webpackJsonp || [],
    a = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var l = 0; l < i.length; l++) t(i[l]);
  var f = a;
  u.push([121, 1]), n()
}({
  121: function(e, t, n) {
    n(122), e.exports = n(308)
  },
  308: function(e, t, n) {
    "use strict";
    n.r(t);
    n(309), n(310);

    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var o = new Date,
      u = o.getDate(),
      c = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"][o.getMonth()],
      i = o.getFullYear(),
      a = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][o.getDay()],
      l = document.querySelector(".date-time"),
      f = document.querySelector(".date-number"),
      d = document.querySelector(".date-day");
    setInterval((function() {
      var e = new Date,
        t = e.getHours(),
        n = e.getMinutes(),
        r = e.getSeconds();
      l.innerHTML = t + ":" + n + ":" + r
    }), 1e3), f.innerHTML = u + " " + c + " " + i, d.innerHTML = a;
    var s, y = function(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
          }(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var o = 0,
            u = function() {};
          return {
            s: u,
            n: function() {
              return o >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[o++]
              }
            },
            e: function(e) {
              throw e
            },
            f: u
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var c, i = !0,
        a = !1;
      return {
        s: function() {
          n = n.call(e)
        },
        n: function() {
          var e = n.next();
          return i = e.done, e
        },
        e: function(e) {
          a = !0, c = e
        },
        f: function() {
          try {
            i || null == n.return || n.return()
          } finally {
            if (a) throw c
          }
        }
      }
    }(document.querySelectorAll('a[href^="#"]'));
    try {
      var p = function() {
        var e = s.value;
        e.addEventListener("click", (function(t) {
          t.preventDefault();
          var n = e.hasAttribute("href") ? e.getAttribute("href") : "body";
          document.querySelector(n).scrollIntoView({
            behavior: "smooth",
            block: "center"
          })
        }))
      };
      for (y.s(); !(s = y.n()).done;) p()
    } catch (e) {
      y.e(e)
    } finally {
      y.f()
    }
    var m = document.querySelector(".menu-fixed").clientHeight,
      v = document.querySelector(".menu").clientHeight;
    document.querySelector(".main-landing").style.paddingTop = m + v + "px", window.addEventListener("resize", (function() {
      var e = document.querySelector(".menu-fixed").clientHeight,
        t = document.querySelector(".menu").clientHeight;
      document.querySelector(".main-landing").style.paddingTop = e + t + "px"
    }));
    var g = document.querySelector(".menu"),
      h = document.getElementById("menuToggle"),
      b = document.querySelector(".checkbox"),
      S = 0;
    window.onscroll = function() {
      var e = document.documentElement.scrollTop;
      S > e ? (g.classList.remove("active"), h.classList.remove("active")) : (g.classList.add("active"), h.classList.add("active"), b.classList.remove("active")), console.log(S > e), S = e
    }, document.querySelector(".checkbox").addEventListener("click", (function() {
      b.classList.toggle("active")
    }))
  },
  309: function(e, t, n) {},
  310: function(e, t) {}
});
