function startHeartAnimation() {
	var c = 50;
	var d = 10;
	var b = new Array();
	var a = setInterval(function() {
		var h = getHeartPoint(d);
		var e = true;
		for (var f = 0; f < b.length; f++) {
			var g = b[f];
			var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
			if (j < Garden.options.bloomRadius.max * 1.3) {
				e = false;
				break
			}
		}
		if (e) 
		{
			b.push(h);
			garden.createRandomBloom(h[0], h[1])
		}
		if (d >= 30) 
		{
			clearInterval(a);
		}
		else 
		{
			d += 0.2
		}
	}, c)
}(function(a) {
	a.fn.typewriter = function() {
		this.each(function() {
			var d = a(this),
				c = d.html(),
				b = 0;
			d.html("");
			var e = setInterval(function() {
				var f = c.substr(b, 1);
				if (f == "<") {
					b = c.indexOf(">", b) + 1
				} else {
					b++
				}
				d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
				if (b >= c.length) {
					clearInterval(e)
				}
			}, 12) //写字的速度,小为快，大为慢
		});
		return this
	}
})(jQuery);

function adjustCodePosition() {
	$("#code").css("margin-top",'150px')
}; 
if (!document.createElement('canvas').getContext) {
$("#code").css("display", "none")
}
else 
{
$("#code").typewriter();
};
