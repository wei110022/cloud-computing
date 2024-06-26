!function(n) {
    "use strict";
    n.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var t = document.head || document.getElementsByTagName("head")[0]
                , r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
                t.appendChild(r.childNodes[1])
        }
        return e && n.extend(i, e),
            this.each(function() {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var r = ".fitvidsignore";
                i.ignore && (r = r + ", " + i.ignore);
                var t = n(this).find(e.join(","));
                (t = (t = t.not("object object")).not(r)).each(function() {
                    var e = n(this);
                    if (!(0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9),
                            e.attr("width", 16));
                        var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                        if (!e.attr("name")) {
                            var i = "fitvid" + n.fn.fitVids._count;
                            e.attr("name", i),
                                n.fn.fitVids._count++
                        }
                        e.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                            e.removeAttr("height").removeAttr("width")
                    }
                })
            })
    }
        ,
        n.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
    function(e) {
        e.addEventListener("DOMContentLoaded", function() {
            e.querySelectorAll(".kg-gallery-image img").forEach(function(e) {
                var t = e.closest(".kg-gallery-image")
                    , i = e.attributes.width.value / e.attributes.height.value;
                t.style.flex = i + " 1 0%"
            })
        })
    }((window,
        document)),
    function(t, i) {
        var r = i.querySelector("link[rel=next]");
        if (r) {
            var n = i.querySelector(".post-feed");
            if (n) {
                var o = 300
                    , s = !1
                    , a = !1
                    , d = t.scrollY
                    , l = t.innerHeight
                    , c = i.documentElement.scrollHeight;
                t.addEventListener("scroll", f, {
                    passive: !0
                }),
                    t.addEventListener("resize", v),
                    h()
            }
        }
        function u() {
            if (404 === this.status)
                return t.removeEventListener("scroll", f),
                    void t.removeEventListener("resize", v);
            this.response.querySelectorAll(".post-card").forEach(function(e) {
                n.appendChild(i.importNode(e, !0))
            });
            var e = this.response.querySelector("link[rel=next]");
            e ? r.href = e.href : (t.removeEventListener("scroll", f),
                t.removeEventListener("resize", v)),
                c = i.documentElement.scrollHeight,
                a = s = !1
        }
        function e() {
            if (!a)
                if (d + l <= c - o)
                    s = !1;
                else {
                    a = !0;
                    var e = new t.XMLHttpRequest;
                    e.responseType = "document",
                        e.addEventListener("load", u),
                        e.open("GET", r.href),
                        e.send(null)
                }
        }
        function h() {
            s || t.requestAnimationFrame(e),
                s = !0
        }
        function f() {
            d = t.scrollY,
                h()
        }
        function v() {
            l = t.innerHeight,
                c = i.documentElement.scrollHeight,
                h()
        }
    }(window, document),
    function(s, a) {
        s.Casper || (s.Casper = {}),
            s.Casper.stickyNavTitle = function(e) {
                var t = a.querySelector(e.navSelector)
                    , i = a.querySelector(e.titleSelector)
                    , r = s.scrollY
                    , n = !1;
                function o() {
                    i.getBoundingClientRect().top + s.scrollY + (i.offsetHeight + 35) <= r ? t.classList.add(e.activeClass) : t.classList.remove(e.activeClass),
                        n = !1
                }
                s.addEventListener("scroll", function() {
                    r = s.scrollY,
                        function() {
                            n || requestAnimationFrame(o);
                            n = !0
                        }()
                }, {
                    passive: !0
                }),
                    o()
            }
    }(window, document);
//# sourceMappingURL=casper.js.map
