var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

function canv1()
{var canvas=document.getElementById("draw")
var x=canvas.getContext("2d");
x.fillStyle="green";
x.fillRect(10,40,65,65);
x.strokeStyle="#FF45FF"
x.strokeRect(100,40,65,65);
x.fillStyle="rgb(255,73,73)"
x.fillRect(190,40,65,65);
	}

function canv2()
{

	var example = document.getElementById("draw1"),
    ctx     = example.getContext('2d');
example.width  = 640;
example.height = 480;
ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(18, 18, 260, 260);
ctx.fillRect(20, 20, 256, 256);
for (i = 0; i < 8; i += 2)
    for (j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }
}


