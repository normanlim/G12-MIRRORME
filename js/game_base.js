/*!
* 
* Team Mirage, Group 12
*
*/

// Game variables
var SCREEN_W = 640;
var SCREEN_H = 960;
var SCREEN_XH = 1136;
// Array size
var ARRAY_S = 6;
var TILE_S = 80;
// Task: 1- horizontal, 2 - vertical, 3 - diagonal, 4 -4 quadrant, 5 - horizontal inverse, 6 - vertical inverse, 7 - diagonal inverse, 8 -4quadrant inverse
var TASK_H = 1;
var TASK_V = 2;
var TASK_D = 3;
var TASK_4D = 4;
var TASK_H_I = 5;
var TASK_V_I = 6;
var TASK_D_I = 7;
var TASK_4D_I = 8;
var TASKS = [
	1, 2, 3, 4, 5, 6, 7, 8, 1, 2,
	3, 4, 1, 2, 3, 4, 5, 6, 7, 8,
	1, 2, 3, 4, 1, 2, 3, 4, 5, 6,
	7, 8, 1, 2, 3, 4
];
var TASK_NAME = ['TASK: H','TASK: V','TASK: D', 'TASK: 4Q', 'H(Inv.)', 'V(Inv.)', 'D(Inv.)', '4Q(Inv.)']; 

var TILE_X = 65;
var TILE_Y = 285;
var TILE_SPAN = 85;	
// Full screen?
var SCREEN_SHOW_ALL = !1;
var IS_MOBILE = !1;
var BASE_RES_DIR = "../";
var RES_DIR = "";
var SOUND_DIR = "";
var WEB_DIR = "http://cstcode.ca/comp2910/";
var USE_NATIVE_SOUND = !1;
// Touch supported?
var IS_TOUCH;
// Game is over?
var IS_OVER = !1;
// Go button pressed?
var IS_PRESSED = !1;
var MAX_LEVEL = 36;
var MAX_SEC = 30;
var MAX_PAGE = 4;
// Game level & score
var level = 0;
var score = 0, best = 0;
var timer = MAX_SEC;
var lblTimer;
var startTime;
// Manual page#
var page = 0;
// background filling shape
var bgFill;
// Gameplay scene container
var gameCtr;
// Sound effects
var bgSound = new Audio();
var clickSound = new Audio();
var toggleSound = new Audio();
var correctSound = new Audio();
var wrongSound = new Audio();
var clapSound = new Audio();
var ohSound = new Audio();
var slideSound = new Audio();
// Mirror arrays
var mapData = [
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
]; 
var mapSample = [
[//0-H
	[0,1,0,1,0,0],
	[0,0,0,1,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]	
],
[//1-H
	[0,0,1,0,0,0],
	[1,0,0,0,0,0],
	[0,1,0,0,1,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
],
[//2-V
	[0,0,1,0,0,0],
	[0,0,0,0,0,0],
	[1,1,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,1,0,0,0],
	[0,0,0,0,0,0]
],
[//3-V
	[1,0,0,0,0,0],
	[0,1,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,1,0,0,0],
	[0,1,0,0,0,0],
	[0,0,0,0,0,0]
],
[//4-D
	[0,0,0,1,0,0],
	[0,0,1,0,0,0],
	[0,1,1,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
],
[//5-D
	[0,0,1,0,0,0],
	[0,0,0,1,0,0],
	[0,1,1,0,0,0],
	[0,0,0,0,0,0],
	[1,0,0,0,0,0],
	[0,0,0,0,0,0]
],
[//6-4D
	[0,0,1,0,0,0],
	[0,0,0,0,0,0],
	[0,1,1,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
],
[//7-4D
	[1,0,0,0,0,0],
	[1,1,0,0,0,0],
	[0,1,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0]
]
]

// App loaded
onload = function () {
	var w = window.innerWidth;
	if (w <= SCREEN_W) {		
		IS_MOBILE = !0;
		SCREEN_H = SCREEN_XH;
	}	
	stage = new createjs.Stage("stage");
	if (IS_TOUCH = createjs.Touch.isSupported()) {
		createjs.Touch.enable(stage, !0);
		var a = new createjs.Shape;
		a.graphics.f("white").r(0, 0, SCREEN_W, SCREEN_H);
		stage.addChild(a);
	}
	createjs.Ticker.setFPS(60);
	setTimeout(setCanvas, 100);
	createjs.Ticker.on("tick", stage);
	initApp();	
};

// Set canvas
onresize = setCanvas;
function setCanvas() {
	var a = stage.canvas, b = window.innerWidth, c = window.innerHeight, d;
	if (SCREEN_SHOW_ALL) {
		d = c;
		b / c > SCREEN_W / SCREEN_H ? b = SCREEN_W * c / SCREEN_H : c = SCREEN_H * b / SCREEN_W;
		a.style.marginTop = (d - c) / 2 + "px";
	} else {
		if (IS_MOBILE) {
			d = c;
			b / c > SCREEN_W / SCREEN_H ? b = SCREEN_W * c / SCREEN_H : c = SCREEN_H * b / SCREEN_W;
		} else {		
			d = SCREEN_W * c / SCREEN_H, b >= d ? (b = d, stage.x = 0) : stage.x = (b - d) / 2;	
		}
	}
	a.width = SCREEN_W;
	a.height = SCREEN_H;
	a.style.width = b + "px";
	a.style.height = c + "px";
}

createjs.DisplayObject.prototype.do_cache = function () {
	var a = this.getBounds();
	this.cache(a.x, a.y, a.width, a.height);
};

function showFPS() {
	var a = new createjs.Text("", "bold 24px Arial", "red");
	a.x = SCREEN_W;
	a.textAlign = "right";
	a.textBaseline = "top";
	stage.addChild(a);
	createjs.Ticker.on("tick", function () {
		a.text = "FPS:" + createjs.Ticker.getMeasuredFPS(10).toFixed(2);
	});
}

// ProgressBar class
function ProgressBar(a, b) {
	this.initialize();
	this.w = a;
	this.h = b;
	this.progress = new createjs.Shape;
	this.progress.graphics.s("black").r(0, 0, a, b).es();
	this.progress.graphics.lf(["red", "yellow", "blue"], [0, 0.5, 1], 0, 0, a, 0);
	this.progressText = new createjs.Text("Loading..", "bold 24px Arial", "black");
	this.progressText.x = a / 2;
	this.progressText.y = b / 2;
	this.progressText.textAlign = "center";
	this.progressText.textBaseline = "middle";
	this.addChild(this.progress);
	this.addChild(this.progressText);
}
ProgressBar.prototype = new createjs.Container;
ProgressBar.prototype.completeCallback = function (a) {
	this.parent.removeChild(this);
};
ProgressBar.prototype.progressCallback = function (a) {
	this.progress.graphics.r(0, 0, this.w * a.progress, this.h);
	this.progressText.text = "Loading: " + parseInt(100 * a.progress) + "%";
};
ProgressBar.prototype.forQueue = function (a) {
	this.errorList = [];
	a.on("complete", this.completeCallback, this, !0);
	a.on("progress", this.progressCallback, this);
	a.on("error", function (a) {
		//alert("Failed to load progress bar!");
	}, null, !0);
	a.on("error", function (a) {
		this.errorList.push(a.item.src);
	}, this);
};

// RepeatedImgLayer class
function RepeatedImgLayer(a, b, c, d) {
	this.initialize();
	d = a.width + d;
	b += d;
	this.graphics.bf(a).r(0, 0, b, a.height);
	this.setBounds(0, 0, b, a.height);
	this.animation = createjs.Tween.get(this, {loop:!0}).to({x:-d}, d / c * 1000);
	this.do_cache();
}
RepeatedImgLayer.prototype = new createjs.Shape;
RepeatedImgLayer.prototype.setPaused = function (a) {
	this.animation.setPaused(a);
};

// ImageButton class
function ImageButton(a, b, c) {
	this.initialize();
	a = new createjs.Bitmap(queue.getResult(a));
	b && (b = new createjs.Bitmap(queue.getResult(b)), this.addChild(b), a.x = (b.image.width - a.image.width) / 2, a.y = (b.image.height - a.image.height) / 2);
	this.addChild(a);
	c && (c = this.getBounds(), this.regX = c.width / 2, this.regY = c.height / 2);
	this.on("mousedown", function () {
		this._addFilter(new createjs.ColorMatrixFilter((new createjs.ColorMatrix).adjustBrightness(-80)), "mouse");
	}, this);
	this.on("pressup", function () {
		this._removeFilter("mouse");
	}, this);
}
ImageButton.prototype = new createjs.Container;
ImageButton.prototype._addFilter = function (a, b) {
	a.tag = b;
	if (this.filters) {
		for (var c in this.filters) {
			if (this.filters[c].tag == b) {
				return;
			}
		}
		this.filters.push(a);
	} else {
		this.filters = [a];
	}
	this.do_cache();
};
ImageButton.prototype._removeFilter = function (a) {
	if (this.filters) {
		var b = [], c;
		for (c in this.filters) {
			var d = this.filters[c];
			a != d.tag && b.push(d);
		}
		this.filters = b;
		this.do_cache();
	}
};
ImageButton.prototype.setEnabled = function (a) {
	(this.mouseEnabled = a) ? this._removeFilter("disable") : (a = new createjs.ColorMatrixFilter((new createjs.ColorMatrix).adjustBrightness(-80).adjustSaturation(-100)), this._addFilter(a, "disable"));
};

function loadFollowRes() {
	USE_NATIVE_SHARE || queue.loadManifest({path:BASE_RES_DIR + "img/", manifest:[{src:"follow_anim.png", id:"follow"}]}, !1);
}

function addFollowAnim(a) {
	if (!USE_NATIVE_SHARE) {
		var b = new createjs.SpriteSheet({framerate:10, images:[queue.getResult("follow")], frames:{width:170, height:150}, animations:{show:[0, 4, !0]}});
		g_followAnim = new createjs.Sprite(b);
		g_followAnim.y = SCREEN_H;
		g_followAnim.name = "follow";
		g_followAnim.on("click", function () {
			window.open(FOLLOW_URL, "follow");
		});
		g_followAnim.visible = !1;
		void 0 == a ? stage.addChild(g_followAnim) : a.addChild(g_followAnim);
	}
}

function setFollowParent(a) {
	USE_NATIVE_SHARE || (g_followAnim.parent.removeChild(g_followAnim), a.addChild(g_followAnim));
}

function setFollowAnim(a) {
	if (!USE_NATIVE_SHARE && IS_REFFER) {
		var b = g_followAnim.getBounds();
		a ? (g_followAnim.play(), createjs.Tween.get(g_followAnim).to({regX:b.width, regY:0, visible:!0}).to({regX:0, regY:b.height}, 500)) : createjs.Tween.get(g_followAnim).to({regX:b.width, regY:0}, 500).to({visible:!1}).call(function () {
			g_followAnim.stop();
		});
	}
}

function zero_fill_hex(a, b) {
	for (var c = a.toString(16); c.length < b; ) {
		c = "0" + c;
	}
	return c;
}

// Converts rgb to hex
function rgb2hex(a) {
	if ("#" == a.charAt(0)) {
		return a;
	}
	a = a.split(/\D+/);
	return "#" + zero_fill_hex(65536 * Number(a[1]) + 256 * Number(a[2]) + Number(a[3]), 6);
}

// Convert hex to rgb
function hex2rgb(a) {
	var b = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	a = a.toLowerCase();
	var c = new RGBAcolor;
	if (a && b.test(a)) {
		if (4 === a.length) {
			for (var b = "#", d = 1; 4 > d; d += 1) {
				b += a.slice(d, d + 1).concat(a.slice(d, d + 1));
			}
			a = b;
		}
		b = [];
		b.push(parseInt("0x" + a.slice(1, 3)));
		c.r = parseInt("0x" + a.slice(1, 3));
		b.push(parseInt("0x" + a.slice(3, 5)));
		c.g = parseInt("0x" + a.slice(3, 5));
		b.push(parseInt("0x" + a.slice(5, 7)));
		c.b = parseInt("0x" + a.slice(5, 7));
		c.rgbastring = "RGB(" + b.join(",") + ")";
		return c;
	}
	return a;
}

function trimStr(s) {
	var str;
	if(s.length < 2) str = "0" + s;
	else str = s;
	return str;
}

function RGBAcolor() {
	this.a = this.A = this.b = this.B = this.g = this.G = this.r = this.R = 0;
	this.rgbastring = null;
}

// setAnchorPoint
createjs.DisplayObject.prototype.setAnchorPoint = function (a, b) {
	var c = this.getBounds();
	this.regX = c.width * a;
	this.regY = c.height * b;
};

// addCenterChild
createjs.Container.prototype.addCenterChild = function (a) {
	a.setAnchorPoint(0.5, 0.5);
	var b = this.getBounds();
	a.x = b.x + 0.5 * b.width;
	a.y = b.y + 0.5 * b.height;
	this.addChild(a);
};

// Generate random array
function genArray(task) {
	var toMap = [];
	// generate array of set number of 1's and 0's depending on level, and then shuffle it
	if (task == TASK_4D || task == TASK_4D_I) {
		var flippedCount = Math.floor(level/9) + 2;
		if (flippedCount > 6) {
			flippedCount = 6; // cap maximum flipped tiles at 6 for 4d levels
		}
		for (i = 0; i < 9; i++) {
			if (flippedCount > 0) {
				toMap[i] = 1;
				flippedCount--;
			} else {
				toMap[i] = 0;
			}
		}
	} else {	
		var flippedCount = Math.floor(level/12) + 3;
		if (flippedCount > 12) {
			flippedCount = 12; // cap maximum flipped tiles at 12 for regular levels
		}
		for (i = 0; i < 18; i++) {
			if (flippedCount > 0) {
				toMap[i] = 1;
				flippedCount--;
			} else {
				toMap[i] = 0;
			}
		}
	}
	shuffle(toMap);
	//var x = Math.floor(Math.random() * 2);
	var r, count = 0;
	if(task == TASK_H || task == TASK_H_I) {	
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {			
				/*r = Math.random();				
				if(r < 0.25 && i < ARRAY_S/2) {
					mapData[i][j] = 1;
					count++;		
				} else {
					mapData[i][j] = 0;
				}*/
				if (i < ARRAY_S/2) {
					mapData[i][j] = toMap[count];
					count++;
				} else {
					mapData[i][j] = 0;
				}
			}
		}
		/*if(count < 3) {
			r = Math.random();
			if(r < 0.5) mapData = mapSample[0];
			else mapData = mapSample[1];
		}*/
	} else if(task == TASK_V || task == TASK_V_I) {	
		count = 0;
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {			
				/*r = Math.random();				
				if(r < 0.25 && j < ARRAY_S/2) {
					mapData[i][j] = 1;
					count++;		
				} else {
					mapData[i][j] = 0;
				} */
				if (j < ARRAY_S/2) {
					mapData[i][j] = toMap[count];
					count++;
				} else {
					mapData[i][j] = 0;
				}
			}
		}
		/*if(count < 3) {
			r = Math.random();
			if(r < 0.5) mapData = mapSample[2];
			else mapData = mapSample[3];
		}*/
	} else if(task == TASK_D || task == TASK_D_I) {	
		count = 0;
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {			
				/*r = Math.random();				
				if(r < 0.25 && (i+j) < ARRAY_S-1) {
					mapData[i][j] = 1;
					count++;		
				} else {
					mapData[i][j] = 0;
				} */
				if ((i+j) < ARRAY_S-1) {
					mapData[i][j] = toMap[count];
					count++;
				} else {
					mapData[i][j] = 0;
				}
			}
		}
		/*if(count < 3) {
			r = Math.random();
			if(r < 0.5) mapData = mapSample[4];
			else mapData = mapSample[5];
		}*/
	} else if(task == TASK_4D || task == TASK_4D_I) {	
		count = 0;
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {			
				/*r = Math.random();				
				if(r < 0.25 && i < ARRAY_S/2 && j < ARRAY_S/2) {
					mapData[i][j] = 1;
					count++;		
				} else {
					mapData[i][j] = 0;
				} */
				if (i < ARRAY_S/2 && j < ARRAY_S/2) {
					mapData[i][j] = toMap[count];
					count++;
				} else {
					mapData[i][j] = 0;
				}
			}
		}
		/*if(count < 1) {
			r = Math.random();
			if(r < 0.5) mapData = mapSample[6];
			else mapData = mapSample[7];
		}*/
	}
}

// reward
function getScore() {
	var s = 0;
	if(level < 5) s = 2;
	else if(level < 10) s = 4;
	else if(level < 15) s = 6;
	else if(level < 20) s = 8;
	else if(level < 25) s = 10;
	else s = 12;
	return s;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

