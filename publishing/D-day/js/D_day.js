var comingdate = new Date("Jan 1, 2020 00:00:00");

var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var x = setInterval(function(){	
	var now = new Date();
    var des = comingdate.getTime() - now.getTime();
	var days = Math.floor(des/(1000 * 60 * 60 * 24));
	var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
	var secs = Math.floor(des%(1000 * 60) / 1000);
	
	d.innerHTML = getTureNumber(days);
	h.innerHTML = getTureNumber(hours);
	m.innerHTML = getTureNumber(mins);
	s.innerHTML = getTureNumber(secs);
	
	if(des <= 0) clearInterval(x);
	
},1000);

function getTureNumber(x) {
	if(x <10) return '0'+x;
	else return x;
}


