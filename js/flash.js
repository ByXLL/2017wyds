$(function() {
    var r = {
        scenes: $(".scene"),
        index: 0,
        slidebar: $("#slidebar li"),
        lockTime: 1e3,
        running: !1,
        KEY: {
            UP: 38,
            DOWN: 40,
            ENTER: 13
        },
        playTimer: "",
        auto: {
            timer: 0,
            gap: 1e4
        },
        UIChange: function(e) {
            var t = "#scene-" + (e + 1)
              , i = $(t)
              , n = this.slidebar.eq(e)
              , a = "scene-state-in"
              , s = "slidebar-active";
            this.scenes.removeClass(a),
            i.addClass(a),
            this.slidebar.removeClass(s),
            n.addClass(s),
            // u.to(this.index, e),
            this.index = e
        },
        event: function(e) {
            if (this.running)
                return !1;
            this.running = !0;
            var t = this;
            setTimeout(function() {
                t.running = !1
            }, this.lockTime);
            var i = 0;
            e > 0 ? (i = this.index + 1,
            i > 4 && (i = 0),
            this.UIChange(i)) : 0 > e && (i = this.index - 1,
            0 > i && (i = 4),
            this.UIChange(i))
        },
        play: function() {
            clearTimeout(this.playTimer);
            var e = this
              , t = 3500;
            this.playTimer = setTimeout(function() {
                e.event(1),
                e.playTimer = setTimeout(arguments.callee, t)
            }, t)
        },
        autoPlay: function() {
            var e = this;
            clearTimeout(this.auto.timer),
            this.auto.timer = setTimeout(function() {
                e.event(1),
                e.auto.timer = setTimeout(arguments.callee, e.auto.gap)
            }, this.auto.gap)
        },
        enterPage: function() {
            $("#scene-1").addClass("scene-state-in"),
            $("html").hasClass("ie9") && $(".scene-icon-1-front").delay(400).fadeOut(600).delay(1200).siblings(".scene-icon-1-back").fadeIn(600)
        },
        todo: function(e) {
            clearTimeout(this.playTimer),
            this.event(e),
            this.autoPlay()
        },
        init: function() {
            var e = this;
            this.enterPage(),
            this.autoPlay(),
            $(document).on("keyup", function(t) {
                t.keyCode == e.KEY.DOWN && e.todo(1),
                t.keyCode == e.KEY.UP && e.todo(-1),
                t.keyCode == e.KEY.ENTER
            }).on("mousewheel", function(t) {
                t.deltaY < 0 && e.todo(1),
                t.deltaY > 0 && e.todo(-1)
            }),
            $("#slidebar").on("click", "li", function() {
                var t = $(this).index();
                e.UIChange(t),
                e.autoPlay()
            })
        }
    };
    $("body").addClass("scenes-ready"),
    r.init()
});
