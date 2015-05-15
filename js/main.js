/*!
* 
* Team Mirage, Group 12
*
*/
createjs.Ticker.on("tick", function () {
	var task = TASKS[level];

	var warnr2 = new createjs.Bitmap(mmLoad.getResult("warnr2"));
	var warnr3 = new createjs.Bitmap(mmLoad.getResult("warnr3"));
	var warnr4 = new createjs.Bitmap(mmLoad.getResult("warnr4"));
	var warnd1 = new createjs.Bitmap(mmLoad.getResult("warnd1"));
	var warnd2 = new createjs.Bitmap(mmLoad.getResult("warnd2"));
	var warnd3 = new createjs.Bitmap(mmLoad.getResult("warnd3"));
	var warnd4 = new createjs.Bitmap(mmLoad.getResult("warnd4"));
	var warnq1 = new createjs.Bitmap(mmLoad.getResult("warnq1"));
	var warnq2 = new createjs.Bitmap(mmLoad.getResult("warnq2"));
	var warnq3 = new createjs.Bitmap(mmLoad.getResult("warnq3"));
	var warnq4 = new createjs.Bitmap(mmLoad.getResult("warnq4"));
	
	warnr2.y = 215;
	warnr2.scaleX = 1.46;
	warnr2.scaleY = 1.85;
	warnr3.y = 215;
	warnr3.scaleX = 1.46;
	warnr3.scaleY = 1.85;
	warnr4.y = 215;
	warnr4.scaleX = 1.46;
	warnr4.scaleY = 1.85;
	
	warnd1.scaleX = 1.45;
	warnd1.scaleY = 1.45;
	warnd1.y = 225;
	warnd2.scaleX = 1.45;
	warnd2.scaleY = 1.45;
	warnd2.y = 225;
	warnd3.scaleX = 1.45;
	warnd3.scaleY = 1.45;
	warnd3.y = 225;
	warnd4.scaleX = 1.45;
	warnd4.scaleY = 1.45;
	warnd4.y = 225;
	warnd1.x = warnd2.x = warnd3.x = warnd4.x = 10;
	
	warnq1.scaleX = warnq1.scaleY = 1.45;
	warnq1.x = 3;
	warnq1.y = 225;
	warnq2.scaleX = warnq2.scaleY = 1.45;
	warnq2.x = 3;
	warnq2.y = 225;
	warnq3.scaleX = warnq3.scaleY = 1.45;
	warnq3.x = 3;
	warnq3.y = 225;
	warnq4.scaleX = warnq4.scaleY = 1.45;
	warnq4.x = 3;
	warnq4.y = 225;
	
	if(!IS_OVER) {
		//if(timer < 29) {	
		if(timer <= 0) {				
			ohSound.play();	
			IS_OVER = !0;
			if(score > best) {
			    best = score;	
                submitScore(best);
			}			
			loadGameover();	
			stage.removeChild(gameCtr);
		} else {			
			var lapse = Math.floor((createjs.Ticker.getTime(!1) - startTime) / 1000);
			if(lapse >= 0 && lapse <= MAX_SEC) {
				timer = MAX_SEC - lapse;
				lblTimer.text = "0:" + trimStr(""+timer);
				
				if (task == TASK_H_F) {
					if (lapse > 4 && lapse < 6) {
						gameCtr.addChild(warnr2);
					} else if (lapse >= 6 && lapse < 7) {
						gameCtr.addChild(warnr3);
					} else if (lapse >= 7) {
						gameCtr.addChild(warnr4);
					}
				} else if (task == TASK_V_F) {
					warnr2.rotation = -90;
					warnr2.y = 855;
					warnr3.rotation = -90;
					warnr3.y = 855;
					warnr4.rotation = -90;
					warnr4.y = 855;
					if (lapse > 4 && lapse < 6) {
						gameCtr.addChild(warnr2);
					} else if (lapse >= 6 && lapse < 7) {
						gameCtr.addChild(warnr3);
					} else if (lapse >= 7) {
						gameCtr.addChild(warnr4);
					}
				} else if (task == TASK_D_F) {
					if (lapse > 4 && lapse < 6) {
						gameCtr.addChild(warnd1);
					} else if (lapse >= 6 && lapse < 7) {
						gameCtr.addChild(warnd2);
					} else if (lapse >= 7 && lapse < 8) {
						gameCtr.addChild(warnd3);
					} else if (lapse >= 8) {
						gameCtr.addChild(warnd4);
					}
				} else if (task == TASK_4D_F) {
					if (lapse > 4 && lapse < 6) {
						gameCtr.addChild(warnq1);
					} else if (lapse >= 6 && lapse < 7) {
						gameCtr.addChild(warnq2);
					} else if (lapse >= 7 && lapse < 8) {
						gameCtr.addChild(warnq3);
					} else if (lapse >= 8) {
						gameCtr.addChild(warnq4);
					}
				}
			}
		}
	}
});
	
// Load home screen resource
function loadHomeSceneRes() {
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"banner.png", id:"banner"}, {src:"btn_startgame.png", id:"startgame"}, 
	{src:"btn_tutorial.png", id:"tutorial"}, {src:"btn_leaderboards.png", id:"leaderboards"}, {src:"btn_settings.png", id:"settings"},
	{src:"fb.png", id:"fb"}, {src:"twitter.png", id:"twitter"}, {src:"gplus.png", id:"gplus"}]}, !1);
}

// Load game play resource
function loadGameSceneRes() {
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"bg.png", id:"bg"}, {src:"bg1.png", id:"bg1"}, {src:"btn_go.png", id:"go"}, 
	{src:"mirror.png", id:"mirror"}, {src:"bar_score.png", id:"barscore"}, {src:"bar_timer.png", id:"bartimer"}, {src:"bar_task.png", id:"bartask"}, 
	{src:"tile_split.png", id:"tilesplit"}, {src:"tile_con.png", id:"tilecon"}, {src:"tile_coff.png", id:"tilecoff"}, {src:"tile_on.png", id:"tileon"}, 
	{src:"tile_on1.png", id:"tileon1"}, {src:"tile_off1.png", id:"tileoff1"}, {src:"tile_on2.png", id:"tileon2"}, {src:"tile_off2.png", id:"tileoff2"}, 
	{src:"tile_off.png", id:"tileoff"}, {src:"warningRECTboarder.gif", id:"warnr1"}, {src:"warningRECTboarder2.gif", id:"warnr2"}, {src:"warningRECTboarder3.gif", id:"warnr3"}, 
	{src:"warningRECTboarder4.gif", id:"warnr4"}, {src:"warnREAL0.gif", id:"warnd0"}, {src:"warnREAL1.gif", id:"warnd1"}, {src:"warnREAL2.gif", id:"warnd2"}, 
	{src:"warnREAL3.gif", id:"warnd3"}, {src:"warnREAL4.gif", id:"warnd4"}, {src:"warningSQUARE.gif", id:"warnq0"}, {src:"warningSQUARE1.gif", id:"warnq1"}, {src:"warningSQUARE2.gif", id:"warnq2"}, {src:"warningSQUARE3.gif", id:"warnq3"} ,{src:"warningSQUARE4.gif", id:"warnq4"}]}, !1);
}

// Load game over screen resource
function loadGameoverSceneRes() {
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"over_circle.png", id:"overcircle"}, {src:"btn_continue.png", id:"continue"},
	{src:"btn_menu.png", id:"menu"}]}, !1);
}

// Load manual screen resource
function loadManualSceneRes() {
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"btn_last.png", id:"last"}, {src:"btn_next.png", id:"next"}, {src:"manuala.png", id:"manuala"},
	{src:"manual0.png", id:"manual0"}, {src:"manual1.png", id:"manual1"}, {src:"manual2.png", id:"manual2"}, {src:"manual3.png", id:"manual3"}]}, !1);
}

// Load settings screen resource
function loadSettingsSceneRes() {
	queue.loadManifest({path:RES_DIR + "img/", manifest:[{src:"bgs.jpg", id:"bgs"}, {src:"bgs1.jpg", id:"bgs1"}, {src:"settingsa.png", id:"settingsa"},
	{src:"settings0.png", id:"settings0"}, {src:"sliderbar.png", id:"sliderbar"}, {src:"slider.png", id:"slider"}]}, !1);
}

// Load sound
function loadSound() {
	if(IS_MOBILE) SOUND_DIR = WEB_DIR;	
	bgSound.src = SOUND_DIR + "audio/bg.mp3";	
	clickSound.src = SOUND_DIR + "audio/click.mp3";
	toggleSound.src = SOUND_DIR + "audio/toggle.mp3";	
	correctSound.src = SOUND_DIR + "audio/correct.mp3";	
	wrongSound.src = SOUND_DIR + "audio/wrong.mp3";	
	clapSound.src = SOUND_DIR + "audio/clap.mp3";	
	ohSound.src = SOUND_DIR + "audio/oh.mp3";
	slideSound.src = SOUND_DIR + "audio/slide.mp3";
}

// Initialize the game
function initApp() {
	SCREEN_SHOW_ALL = !0;
	mmLoad = new createjs.LoadQueue;
	var a = new ProgressBar(0.8 * SCREEN_W, 40);
	a.regX = a.w / 2;
	a.regY = a.h / 2;
	a.x = SCREEN_W / 2;
	a.y = SCREEN_H / 2;
	stage.addChild(a);
	queue = mmLoad = new createjs.LoadQueue(!1);
	mmLoad.on("complete", loadHomeScene, null, !0);
	loadSound();
	loadHomeSceneRes();
	loadGameSceneRes();
	loadGameoverSceneRes();
	loadManualSceneRes();
	loadSettingsSceneRes();
	a.forQueue(mmLoad);
	mmLoad.load();
	
	// set tile size
	var stile = new createjs.Bitmap(mmLoad.getResult("tilecon"));
	TILE_S = stile.getBounds().width;	
}


// Load home screen
function loadHomeScene() {
	new HomeScene("#8de9cb");
}

// Load gameplay page
function loadGame() {
	new GameplayScene("#8de9cc");
}

// Load gameover page
function loadGameover() {
	new GameoverScene("#ebfcf1");
}

// Load manual page
// p - page
function loadManual(p) {
	new ManualScene("#ebfcf1", p);
}

function loadSettings() {
	new SettingsScene("#ebfcf1");
}

// HomeScene class
// a - color
var HomeScene = function (a) {
    var btnX = 320;
	var btnY = 400;
	var btnSpan = 150;
	if(IS_MOBILE) {
		btnY = 450;
		btnSpan = 175;
	}
	// play background music
	bgSound.play();
	
	var homeCtr = new createjs.Container;
	stage.addChild(homeCtr);
	
	var homeShape = new createjs.Shape;
	homeShape.graphics.f(a).r(0, 0, SCREEN_W, SCREEN_H).ef();
	homeCtr.addChild(homeShape);
	
	// banner
	a = new createjs.Bitmap(queue.getResult("banner"));
	homeCtr.addChild(a);
	
	// start game btn
	a = new createjs.Bitmap(queue.getResult("startgame"));
	a.setAnchorPoint(0.5, 0.5);
	a.x = btnX;
	a.y = btnY;
	homeCtr.addChild(a);	
	// capture mousedown & pressup
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		loadGame();
		stage.removeChild(homeCtr);
	}, a);
	
	// tutorial btn
	a = new createjs.Bitmap(queue.getResult("tutorial"));
	a.setAnchorPoint(0.5, 0.5);
	a.x = btnX;
	a.y = btnY + btnSpan;
	homeCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		loadManual(page);
		stage.removeChild(homeCtr);
	}, a);
	
	// leaderboards btn
	a = new createjs.Bitmap(queue.getResult("leaderboards"));
	a.setAnchorPoint(0.5, 0.5);
	a.x = btnX;
	a.y = btnY + 2*btnSpan;
	homeCtr.addChild(a);
    a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		goBoard();
		//stage.removeChild(homeCtr);
	}, a);
	
	// settings btn
	a = new createjs.Bitmap(queue.getResult("settings"));
	a.setAnchorPoint(0.5, 0.5);
	a.x = btnX;
	a.y = btnY + 3*btnSpan;
	homeCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		loadSettings();
		stage.removeChild(homeCtr);
	}, a);	
};

// GameplayScene class
var GameplayScene = function (a) {
    // add background
	gameCtr = new createjs.Container;
	stage.addChild(gameCtr);
	if(IS_MOBILE) a = new createjs.Bitmap(mmLoad.getResult("bg1"));
	else a = new createjs.Bitmap(mmLoad.getResult("bg"));
	gameCtr.addChild(a);	
	loadTitlebar();
	loadMap();	
	loadGo();
};

// GameoverScene class
var GameoverScene = function(a) {
	var mirrorY = 20;
	var circleY = 110;	
	var fbX = 90, fbY = 530;
	var scoreY = 313, bestY = 396;
	var contY = 290, menuY = 140;
	if(IS_MOBILE) {
		fbY = 550;
		contY = 380;
		menuY = 200;
	}	
	
	var overCtr = new createjs.Container;
	stage.addChild(overCtr);
	
	var overShape = new createjs.Shape;
	overShape.graphics.f(a).r(0, 0, SCREEN_W, SCREEN_H).ef();
	overCtr.addChild(overShape);
	
	//if(IS_MOBILE) a = new createjs.Bitmap(mmLoad.getResult("bg1"));
	//else a = new createjs.Bitmap(mmLoad.getResult("bg"));
	//overCtr.addChild(a);	
	
	//header
	a = new createjs.Bitmap(mmLoad.getResult("mirror"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = mirrorY;
	overCtr.addChild(a);
	//circle
	a = new createjs.Bitmap(mmLoad.getResult("overcircle"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = circleY;
	overCtr.addChild(a);
	
	//score	
	a = new createjs.Text(score.toString(), "bold 60px Arial", "#000000");
	a.textBaseline = "medium";
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = scoreY;
	overCtr.addChild(a);
	//best
	a = new createjs.Text(best.toString(), "normal 30px Arial", "#000000");
	a.textBaseline = "small";
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = bestY;
	overCtr.addChild(a);
	
	//fb, twitter, google plus
	a = new createjs.Bitmap(mmLoad.getResult("fb"));
	a.x = fbX;
	a.y = fbY;
	overCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		goFB();
		//stage.removeChild(overCtr);
		//stage.removeAllChildren();
	}, a);	
	
	a = new createjs.Bitmap(mmLoad.getResult("twitter"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = fbY;
	overCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		goTwitter();
	}, a);	
	
	a = new createjs.Bitmap(mmLoad.getResult("gplus"));
	a.x = SCREEN_W - a.getBounds().width - fbX;
	a.y = fbY;
	overCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		goGPlus();
	}, a);		
	
	//continue btn
	a = new createjs.Bitmap(mmLoad.getResult("continue"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = SCREEN_H - contY;
	overCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		resetData();
		loadGame();
		stage.removeChild(overCtr);
	}, a);
	
	//menu btn
	a = new createjs.Bitmap(mmLoad.getResult("menu"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = SCREEN_H - menuY;
	overCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		resetData();
		loadHomeScene();
		stage.removeChild(overCtr);
	}, a);
}

// ManualScene class
// a - color, b - page#
var ManualScene = function(a, b) {
	var jumpX = 33, jumpY = 37;
	var captionY = 56, manY = 170, menuY = 150;
	if(IS_MOBILE) {
		manY = 220;
		menuY = 200;
	}

	var manCtr = new createjs.Container;
	stage.addChild(manCtr);
	
	//if(IS_MOBILE) a = new createjs.Bitmap(mmLoad.getResult("bg1"));
	//else a = new createjs.Bitmap(mmLoad.getResult("bg"));
	//overCtr.addChild(a);	
	var manShape = new createjs.Shape;
	manShape.graphics.f(a).r(0, 0, SCREEN_W, SCREEN_H).ef();
	manCtr.addChild(manShape);
	
	//caption
	a = new createjs.Bitmap(mmLoad.getResult("manuala"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = captionY;
	manCtr.addChild(a);
	
	//last btn
	a = new createjs.Bitmap(mmLoad.getResult("last"));
	a.x = jumpX;
	a.y = jumpY;
	manCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		if(page > 0) {
			page--;
			loadManual(page);
			stage.removeChild(manCtr);
		}		
	}, a);

	//next btn
	a = new createjs.Bitmap(mmLoad.getResult("next"));
	a.x = SCREEN_W - a.getBounds().width - jumpX;
	a.y = jumpY;
	manCtr.addChild(a);	
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		if(page < MAX_PAGE - 1) {
			page++;
			loadManual(page);
			stage.removeChild(manCtr);
		}
	}, a);
	
	//manual
	var pageId = "manual" + b;
	a = new createjs.Bitmap(mmLoad.getResult(pageId));
	//a = new createjs.Bitmap(mmLoad.getResult("manual0"));
	a.x = 0;
	a.y = manY;
	manCtr.addChild(a);
	
	//menu btn
	a = new createjs.Bitmap(mmLoad.getResult("menu"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = SCREEN_H - menuY;
	manCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		page = 0;
		loadHomeScene();
		stage.removeChild(manCtr);
	}, a);
}

// SettingsScene class
// a - color
var SettingsScene = function(a) {
	var captionY = 56, setX = 25, setY = 180, menuY = 150;
	//slider
	var sliderX = 363, sliderY = 227, sliderSpan = 200;
	//sliderbar
	var topY = 238, leftX = 183, len = 417;
    if(IS_MOBILE) menuY = 200;

	// coefficient (music, effects, brightness)
	var c1 = 0.0, c2 = 0.0, c3 = 0.0;
	var w;
	
	var setCtr = new createjs.Container;
	stage.addChild(setCtr);
	
	//var setShape = new createjs.Shape;
	//setShape.graphics.f(a).r(0, 0, SCREEN_W, SCREEN_H).ef();
	//setCtr.addChild(setShape);
	if(IS_MOBILE) a = new createjs.Bitmap(mmLoad.getResult("bgs1"));
	else a = new createjs.Bitmap(mmLoad.getResult("bgs"));
	setCtr.addChild(a);		
	
	//caption
	a = new createjs.Bitmap(mmLoad.getResult("settingsa"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = captionY;
	setCtr.addChild(a);	
	//settings
	a = new createjs.Bitmap(mmLoad.getResult("settings0"));
	a.x = setX;
	a.y = setY;
	setCtr.addChild(a);
	
	//sliderbars
	var sb1 = new createjs.Bitmap(mmLoad.getResult("sliderbar"));
	sb1.x = leftX;
	sb1.y = topY;
	setCtr.addChild(sb1);
	sb1.on("mousedown", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s1.x = x - w/2;
			c1 = (s1.x - leftX) / len;
			adjustVolume(c1);
		}
	}, sb1);
	sb1.on("pressup", function (e) {		
	}, sb1);
	
	var sb2 = new createjs.Bitmap(mmLoad.getResult("sliderbar"));
	sb2.x = leftX;
	sb2.y = topY + sliderSpan;
	setCtr.addChild(sb2);
	sb2.on("mousedown", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s2.x = x - w/2;
			c2 = (s2.x - leftX) / len;
			adjustEffects(c2);
		}
	}, sb2);
	sb2.on("pressup", function (e) {		
	}, sb2);
	
	var sb3 = new createjs.Bitmap(mmLoad.getResult("sliderbar"));
	sb3.x = leftX;
	sb3.y = topY + 2*sliderSpan;
	setCtr.addChild(sb3);
	sb3.on("mousedown", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s3.x = x - w/2;
			c3 = (s3.x - leftX) / len;
			adjustBrightness(c3);
		}
	}, sb3);
	sb3.on("pressup", function (e) {		
	}, sb3);
	
	//sliders
	var s1 = new createjs.Bitmap(mmLoad.getResult("slider"));
	w = s1.getBounds().width;
	s1.x = sliderX;
	s1.y = sliderY;
	setCtr.addChild(s1);
	s1.on("pressmove", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s1.x = x - w/2;
			c1 = (s1.x - leftX) / len;
			adjustVolume(c1);
		}
	}, s1);
	s1.on("pressup", function (e) {
	}, s1);
	
	var s2 = new createjs.Bitmap(mmLoad.getResult("slider"));
	s2.x = sliderX;
	s2.y = sliderY + sliderSpan;
	setCtr.addChild(s2);
	s2.on("pressmove", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s2.x = x - w/2;
			c2 = (s2.x - leftX) / len;
			adjustEffects(c2);
		}
	}, s2);
	s2.on("pressup", function (e) {
	}, s2);
	
	var s3 = new createjs.Bitmap(mmLoad.getResult("slider"));
	s3.x = sliderX;
	s3.y = sliderY + 2*sliderSpan;
	setCtr.addChild(s3);	
	s3.on("pressmove", function (e) {
		var x = e.stageX;
		if(x > leftX && x < leftX + len) {
			slideSound.play();
			if(x < leftX + w/2) x = leftX + w/2;
			else if(x > leftX + len - w/2) x = leftX + len - w/2;
			s3.x = x - w/2;
			c3 = (s3.x - leftX) / len;
			adjustBrightness(c3);
		}
	}, s3);
	s3.on("pressup", function (e) {
	}, s3);
	
	//menu btn
	a = new createjs.Bitmap(mmLoad.getResult("menu"));
	a.x = (SCREEN_W - a.getBounds().width) / 2;
	a.y = SCREEN_H - menuY;
	setCtr.addChild(a);
	a.on("mousedown", function (e) {
		IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		clickSound.play();
	}, a);
	a.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;		
		loadHomeScene();
		stage.removeChild(setCtr);
	}, a);
}

function loadGo() {
	IS_PRESSED = !1;
	var goY = 140;
	if(IS_MOBILE) goY = 160;

	var btnGo = new createjs.Bitmap(mmLoad.getResult("go"));
	btnGo.x = (SCREEN_W - btnGo.getBounds().width) / 2;
	btnGo.y = SCREEN_H - goY;
	gameCtr.addChild(btnGo);
	btnGo.on("mousedown", function (e) {
		IS_TOUCH && a.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);
		//clickSound.play();
	}, btnGo);
	btnGo.on("pressup", function (e) {
		this.scaleY = this.scaleX = 1;
		IS_PRESSED = !IS_PRESSED;
		if(!IS_PRESSED) clearBG(); 
		if(isMatch() == 0) {
			if(level == MAX_LEVEL - 1) clapSound.play();
			else wrongSound.play();
			if(IS_PRESSED) drawBG();
		} else {			
			stage.removeChild(gameCtr);
			correctSound.play();
			timer = MAX_SEC;
			level++;
			score = score + getScore();						
			loadGame();
		}		
	}, btnGo);
}

function drawBG() {
	var color = "Red";	
	bgFill = new createjs.Shape();
	bgFill.alpha = 0.2;
	bgFill.graphics.beginFill(color);
	bgFill.graphics.drawRect(0, 0, SCREEN_W, SCREEN_H);
	stage.addChild(bgFill);
}

function clearBG() {	
	stage.removeChild(bgFill);	
	IS_PRESSED = !1;
}

function loadTitlebar() {
	var scoreX = 30;
	var scoreY = 100;	
	var scoreSpan = 135;	
	var mirrorY = 20;
	if(IS_MOBILE) {	
		scoreX = 30;
		scoreY = 130;	
		scoreSpan = 140;	
		mirrorY = 30;
	}
	
	IS_OVER = !1;
	timer = MAX_SEC;
	startTime = createjs.Ticker.getTime(!1);
	var header = new createjs.Bitmap(mmLoad.getResult("mirror"));
	header.x = (SCREEN_W - header.getBounds().width) / 2;
	header.y = mirrorY;
	gameCtr.addChild(header);
	
	// add titlebar
	// score
	var barScore = new createjs.Bitmap(mmLoad.getResult("barscore"));
	barScore.x = scoreX;
	barScore.y = scoreY;
	gameCtr.addChild(barScore);
	
	// timer
	var barTimer = new createjs.Bitmap(mmLoad.getResult("bartimer"));
	barTimer.x = (SCREEN_W - barTimer.getBounds().width) / 2;
	barTimer.y = scoreY;
	gameCtr.addChild(barTimer);
	
	// task
	var barTask = new createjs.Bitmap(mmLoad.getResult("bartask"));
	barTask.x = SCREEN_W - scoreX - barTask.getBounds().width;
	barTask.y = scoreY;
	gameCtr.addChild(barTask);
	
	// add title
	// score
	var lblScore = new createjs.Text(score.toString(), "normal 30px Arial", "#000000");
	lblScore.textBaseline = "small";
	lblScore.x = scoreX + (barScore.getBounds().width - lblScore.getBounds().width) / 2;
	lblScore.y = scoreY + scoreSpan;
	gameCtr.addChild(lblScore);	
	
	// timer
	var _timer = "0:30";
	lblTimer = new createjs.Text(_timer, "bold 50px Arial", "#000000");
	lblTimer.textBaseline = "middle";
	lblTimer.x = (SCREEN_W - lblTimer.getBounds().width) / 2;
	lblTimer.y = scoreY + scoreSpan;
	gameCtr.addChild(lblTimer);

	// task
	var curTask = TASKS[level];
	var lblTask = new createjs.Text(TASK_NAME[curTask - 1], "normal 30px Arial", "#000000");
	lblTask.textBaseline = "small";
	lblTask.x = barTask.x + (barTask.getBounds().width - lblTask.getBounds().width)/2;
	lblTask.y = scoreY + scoreSpan;
	gameCtr.addChild(lblTask);
}

// Load map. task: 1- horizontal, 2 - vertical, 3 - diagonal, 4 - 4d
function loadMap() {	
	var task = TASKS[level];
	MAX_SEC = 30 - (Math.floor(level/12) * 3); // start with 30s, after each set of 12 levels, reduce timer by 3s
	if (MAX_SEC < 15) { // set floor to 15s
		MAX_SEC = 15;
	}
	if(IS_MOBILE) {		
		TILE_SPAN = TILE_S + 15;
		TILE_X = (SCREEN_W - (ARRAY_S-1) * TILE_SPAN - TILE_S) / 2;
		TILE_Y = 360;		
	}
	var tile = new Array(ARRAY_S);
	for (var k = 0; k < ARRAY_S; k++) {
		tile[k] = ['','','','','',''];
	}
	// Generate random maps
	genArray(task);	
	
	var tileoff = new createjs.Bitmap(mmLoad.getResult("tileoff"));
	var tileoff1 = new createjs.Bitmap(mmLoad.getResult("tileoff1"));
	var tileoff2 = new createjs.Bitmap(mmLoad.getResult("tileoff2"));
	var tileon = new createjs.Bitmap(mmLoad.getResult("tileon"));
	var tileon1 = new createjs.Bitmap(mmLoad.getResult("tileon1"));
	var tileon2 = new createjs.Bitmap(mmLoad.getResult("tileon2"));
	var warnr1 = new createjs.Bitmap(mmLoad.getResult("warnr1"));
	var warnd0 = new createjs.Bitmap(mmLoad.getResult("warnd0"));
	var warnq0 = new createjs.Bitmap(mmLoad.getResult("warnq0"));
	
	if(task == TASK_H || task == TASK_H_I || task == TASK_H_F) {			
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {
				if(i < ARRAY_S/2) {
					if(mapData[i][j] == 1) tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecon"));
					else tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecoff"));				
				} else {				   
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff"));
					tile[i][j].on("mousedown", function (e) {						
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				}
				tile[i][j].x = TILE_X + j * TILE_SPAN;
				tile[i][j].y = TILE_Y + i * TILE_SPAN;
				warnr1.y = 215;
				warnr1.scaleX = 1.46;
				warnr1.scaleY = 1.85;
				gameCtr.addChild(tile[i][j]);
				if (task == TASK_H_F) {
					gameCtr.addChild(warnr1);
				}
			}
		}		
	} else if(task == TASK_V || task == TASK_V_I || task == TASK_V_F) {
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {
				if(j < ARRAY_S/2) {
					if(mapData[i][j] == 1) tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecon"));
					else tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecoff"));				
				} else {				   
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff"));
					tile[i][j].on("mousedown", function (e) {						
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				}
				tile[i][j].x = TILE_X + j * TILE_SPAN;
				tile[i][j].y = TILE_Y + i * TILE_SPAN;
				warnr1.y = 855;
				warnr1.scaleX = 1.46;
				warnr1.scaleY = 1.85;
				warnr1.rotation = -90;
				gameCtr.addChild(tile[i][j]);
				if (task == TASK_V_F) {
					gameCtr.addChild(warnr1);
				}
			}
		}		
	} else if(task == TASK_D || task == TASK_D_I || task == TASK_D_F) {
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {
				if(i+j < ARRAY_S-1) {
					if(mapData[i][j] == 1) tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecon"));
					else tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecoff"));
				} else if(i+j == ARRAY_S-1) {
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilesplit"));
				} else {				   
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff"));
					tile[i][j].on("mousedown", function (e) {
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				}
				tile[i][j].x = TILE_X + j * TILE_SPAN;
				tile[i][j].y = TILE_Y + i * TILE_SPAN;
				warnd0.scaleX = 1.45;
				warnd0.scaleY = 1.45;
				warnd0.y = 225;
				warnd0.x = 10;
				gameCtr.addChild(tile[i][j]);
				if (task == TASK_D_F) {
					gameCtr.addChild(warnd0);
				}
			}
		}		
	} else if(task == TASK_4D || task == TASK_4D_I || task == TASK_4D_F) {
		for(i = 0; i < ARRAY_S; i++) {
			for(j = 0; j < ARRAY_S; j++) {
				if(i < ARRAY_S/2 && j < ARRAY_S/2) {
					if(mapData[i][j] == 1) tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecon"));
					else tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tilecoff"));
				} else if(i < ARRAY_S/2 && j > ARRAY_S/2-1) {
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff1"));
					tile[i][j].on("mousedown", function (e) {
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon1.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff1.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				} else if(j < ARRAY_S/2 && i > ARRAY_S/2-1) {
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff2"));
					tile[i][j].on("mousedown", function (e) {
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon2.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff2.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				} else {				   
					tile[i][j] = new createjs.Bitmap(mmLoad.getResult("tileoff"));
					tile[i][j].on("mousedown", function (e) {
						toggleSound.play();
						if(IS_PRESSED) clearBG();
						IS_TOUCH && e.nativeEvent instanceof MouseEvent || (this.scaleY = this.scaleX = 0.95);						
						m = getRow(e.stageY);
						n = getCol(e.stageX);
						if(mapData[m][n] == 0) {							
							this.image = tileon.image;
							mapData[m][n] = 1;
						} else {
							this.image = tileoff.image;
							mapData[m][n] = 0;
						}						
					}, tile[i][j]);
					tile[i][j].on("pressup", function (e) {
						this.scaleY = this.scaleX = 1;								
					}, tile[i][j]);
				}
				tile[i][j].x = TILE_X + j * TILE_SPAN;
				tile[i][j].y = TILE_Y + i * TILE_SPAN;
				warnq0.scaleX = warnq0.scaleY = 1.45;
				warnq0.x = 3;
				warnq0.y = 225;
				gameCtr.addChild(tile[i][j]);
				if (task == TASK_4D_F) {
					gameCtr.addChild(warnq0);
				}
			}
		}		
	}
}

function isMatch() {
	var ret = 1;
	var c = 0, c1 = 0, c2 = 0, c3 = 0;
	var task = TASKS[level];
	if(task == TASK_H || task == TASK_H_F) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] != mapData[ARRAY_S-i-1][j]) return 0;
				} else if(i >= mapData.length/2 && mapData[i][j] == 1) c1++;
			}			
		}
		if(c != c1) return 0;
		
	} else if(task == TASK_H_I) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] == mapData[ARRAY_S-i-1][j]) return 0;
				} else if(i >= mapData.length/2 && mapData[i][j] == 0) c1++;
			}			
		}
		if(c != c1) return 0;
		
	} else if(task == TASK_V || task == TASK_V_F) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(j < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] != mapData[i][ARRAY_S-j-1]) return 0;
				} else if(j >= mapData.length/2 && mapData[i][j] == 1) c1++;
			}			
		}
		if(c != c1) return 0;
	} else if(task == TASK_V_I) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(j < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] == mapData[i][ARRAY_S-j-1]) return 0;
				} else if(j >= mapData.length/2 && mapData[i][j] == 0) c1++;
			}			
		}
		if(c != c1) return 0;
	} else if(task == TASK_D || task == TASK_D_F) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i+j < mapData.length-1 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] != mapData[ARRAY_S-j-1][ARRAY_S-i-1]) return 0;
				} else if(i+j > mapData.length-1 && mapData[i][j] == 1) c1++;
			}			
		}
		if(c != c1) return 0;
	} else if(task == TASK_D_I) {
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i+j < mapData.length-1 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] == mapData[ARRAY_S-j-1][ARRAY_S-i-1]) return 0;
				} else if(i+j > mapData.length-1 && mapData[i][j] == 0) c1++;
			}			
		}
		if(c != c1) return 0;
	} else if(task == TASK_4D || task == TASK_4D_F) {
	
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i < mapData.length/2 && j < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] != mapData[i][ARRAY_S-j-1]
					|| mapData[i][j] != mapData[ARRAY_S-i-1][j]
					|| mapData[i][j] != mapData[ARRAY_S-j-1][ARRAY_S-i-1]) return 0;
				} else if(i < mapData.length/2 && j >= mapData.length/2 && mapData[i][j] == 1) c1++;
				else if(i >= mapData.length/2 && j < mapData.length/2 && mapData[i][j] == 1) c2++;
				else if(i >= mapData.length/2 && j >= mapData.length/2 && mapData[i][j] == 1) c3++;
			}			
		}
		if(c != c1 || c != c2 || c != c3) return 0;
	} else if(task == TASK_4D_I) {
	
		for(i = 0; i < mapData.length; i++) {
			for(j = 0; j < mapData.length; j++) {
				if(i < mapData.length/2 && j < mapData.length/2 && mapData[i][j] == 1) {
					c++;
					if(mapData[i][j] == mapData[i][ARRAY_S-j-1]
					|| mapData[i][j] == mapData[ARRAY_S-i-1][j]
					|| mapData[i][j] == mapData[ARRAY_S-j-1][ARRAY_S-i-1]) return 0;
				} else if(i < mapData.length/2 && j >= mapData.length/2 && mapData[i][j] == 0) c1++;
				else if(i >= mapData.length/2 && j < mapData.length/2 && mapData[i][j] == 0) c2++;
				else if(i >= mapData.length/2 && j >= mapData.length/2 && mapData[i][j] == 0) c3++;
			}			
		}
		if(c != c1 || c != c2 || c != c3) return 0;
	}
	return ret;
}

function getCol(x) {
	return Math.floor((x-TILE_X)/TILE_SPAN);
}

function getRow(y) {
	return Math.floor((y-TILE_Y)/TILE_SPAN);
}

function adjustVolume(a) {	
	bgSound.volume = a;
}

function adjustEffects(a) {
}

function adjustBrightness(a) {
}

function resetData() {
	level = 0;
	score = 0;
	timer = MAX_SEC;
}















